export const id = 221;
export const ids = [221];
export const modules = {
  37796: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => YW,
      i: () => IW
    });
    var wW = MW(37587),
      CW = MW(37593),
      zR = MW(37693),
      AW = MW(35346),
      bR = MW(35324),
      yR = MW(37800),
      NW = MW(36721),
      eW = MW(35361),
      BW = MW(37470),
      tR = MW(36185),
      TW = MW(35845),
      gR = MW(37553),
      iR = MW(37615);
    let YW = (() => {
      var WW;
      let RW, MW, eW, YW, JW, PW, IW, oW, lW, FW, fW, QW, rR, cR, XW, jR, kR, aR, sW = yR.b,
        dW = [],
        pW = [],
        hW = [],
        UW = [],
        EW = [],
        VW = [],
        mR = [],
        xR = [],
        vR = [],
        KW = [],
        uW = [],
        OW = [],
        nW = [],
        GW = [],
        LW = [],
        HW = [],
        DW = [],
        qR = [],
        ZW = [],
        SW = [],
        WR = [],
        RR = [],
        MR = [],
        wR = [],
        CR = [];
      return WW = class extends sW {
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
          let RW, MW;
          if (this.mode === WW.PERSPECTIVE_CAMERA) this.fovMode === WW.FOVMODE_VERTICAL_FIXED ? (MW = 2 * this.minZ * Math.tan(this.fov / 2), RW = this.mC().getAspectRatio(this) * MW) : (RW = 2 * this.minZ * Math.tan(this.fov / 2), MW = RW / this.mC().getAspectRatio(this));
          else {
            const WW = this.mC().getRenderWidth() / 2,
              wW = this.mC().getRenderHeight() / 2;
            RW = (this.orthoRight ?? WW) - (this.orthoLeft ?? -WW), MW = (this.orthoTop ?? wW) - (this.orthoBottom ?? -wW)
          }
          return RW * MW
        }
        set orthoLeft(WW) {
          this._orthoLeft = WW;
          for (const RW of this._rigCameras) RW.orthoLeft = WW
        }
        get orthoLeft() {
          return this._orthoLeft
        }
        set orthoRight(WW) {
          this._orthoRight = WW;
          for (const RW of this._rigCameras) RW.orthoRight = WW
        }
        get orthoRight() {
          return this._orthoRight
        }
        set orthoBottom(WW) {
          this._orthoBottom = WW;
          for (const RW of this._rigCameras) RW.orthoBottom = WW
        }
        get orthoBottom() {
          return this._orthoBottom
        }
        set orthoTop(WW) {
          this._orthoTop = WW;
          for (const RW of this._rigCameras) RW.orthoTop = WW
        }
        get orthoTop() {
          return this._orthoTop
        }
        setFocalLength(WW) {
          let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 36;
          this.fov = 2 * Math.atan(RW / (2 * WW))
        }
        get inertia() {
          return this._baseInertia
        }
        set inertia(WW) {
          this._baseInertia = WW
        }
        set mode(WW) {
          this._mode = WW;
          for (const RW of this._rigCameras) RW.mode = WW
        }
        get mode() {
          return this._mode
        }
        get hasMoved() {
          return this._hasMoved
        }
        constructor(RW, MW, CW) {
          let yR = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
          (0, gR.d)(), super(RW, CW, !1), this.inputs = (0, wW.i)(this, dW), this._position = (0, wW.i)(this, pW, bR.q.Zero()), this._upVector = ((0, wW.i)(this, hW), (0, wW.i)(this, UW, bR.q.Up())), this.oblique = ((0, wW.i)(this, EW), null), this._orthoLeft = null, this._orthoRight = null, this._orthoBottom = null, this._orthoTop = null, this.fov = (0, wW.i)(this, VW, .8), this.projectionPlaneTilt = ((0, wW.i)(this, mR), (0, wW.i)(this, xR, 0)), this.minZ = ((0, wW.i)(this, vR), (0, wW.i)(this, KW, 1)), this.maxZ = ((0, wW.i)(this, uW), (0, wW.i)(this, OW, 1e4)), this._baseInertia = ((0, wW.i)(this, nW), .9), this._mode = WW.PERSPECTIVE_CAMERA, this.isIntermediate = !1, this.viewport = new tR.d(0, 0, 1, 1), this.layerMask = (0, wW.i)(this, GW, 268435455), this.fovMode = ((0, wW.i)(this, LW), (0, wW.i)(this, HW, WW.FOVMODE_VERTICAL_FIXED)), this.cameraRigMode = ((0, wW.i)(this, DW), (0, wW.i)(this, qR, WW.RIG_MODE_NONE)), this.interaxialDistance = ((0, wW.i)(this, ZW), (0, wW.i)(this, SW, void 0)), this.isStereoscopicSideBySide = ((0, wW.i)(this, WR), (0, wW.i)(this, RR, void 0)), this.ignoreCameraMaxZ = ((0, wW.i)(this, MR), (0, wW.i)(this, wR, !1)), this.customRenderTargets = ((0, wW.i)(this, CR), []), this.outputRenderTarget = null, this.onViewMatrixChangedObservable = new AW.c, this.onProjectionMatrixChangedObservable = new AW.c, this.onAfterCheckInputsObservable = new AW.c, this.onRestoreStateObservable = new AW.c, this.isRigCamera = !1, this._hasMoved = !1, this._rigCameras = new Array, this._skipRendering = !1, this._projectionMatrix = new bR.d, this._postProcesses = new Array, this._activeMeshes = new zR.i(256), this._globalPosition = bR.q.Zero(), this._computedViewMatrix = bR.d.Identity(), this._doNotComputeProjectionMatrix = !1, this._transformMatrix = bR.d.Zero(), this._refreshFrustumPlanes = !0, this._absoluteRotation = bR.e.Identity(), this._isCamera = !0, this._isLeftCamera = !1, this._isRightCamera = !1, this.layerMask = this.QRW().defaultCameraLayerMask, this.QRW().addCamera(this), yR && !this.QRW().activeCamera && (this.QRW().activeCamera = this), this.position = MW, this.renderPassId = this.QRW().mC().createRenderPassId(`Camera ${RW}`)
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
          return "OA"
        }
        toString(WW) {
          let RW = "Name: " + this.name;
          if (RW += ", type: " + this.getClassName(), this.animations)
            for (let MW = 0; MW < this.animations.length; MW++) RW += ", animation[0]: " + this.animations[MW].toString(WW);
          return RW
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
            for (const RW of this._postProcesses)
              if (RW && !RW.isReady()) return !1;
          return super.isReady(WW)
        }
        _initCache() {
          super._initCache(), this._cache.position = new bR.q(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.upVector = new bR.q(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.mode = void 0, this._cache.minZ = void 0, this._cache.maxZ = void 0, this._cache.fov = void 0, this._cache.fovMode = void 0, this._cache.aspectRatio = void 0, this._cache.orthoLeft = void 0, this._cache.orthoRight = void 0, this._cache.orthoBottom = void 0, this._cache.orthoTop = void 0, this._cache.obliqueAngle = void 0, this._cache.obliqueLength = void 0, this._cache.obliqueOffset = void 0, this._cache.renderWidth = void 0, this._cache.renderHeight = void 0
        }
        _updateCache(WW) {
          WW || super._updateCache(), this._cache.position.hyW(this.position), this._cache.upVector.hyW(this.upVector)
        }
        _isSynchronized() {
          return this._isSynchronizedViewMatrix() && this._isSynchronizedProjectionMatrix()
        }
        _isSynchronizedViewMatrix() {
          return !!super._isSynchronized() && (this._cache.position.equals(this.position) && this._cache.upVector.equals(this.upVector) && this.isSynchronizedWithParent())
        }
        _isSynchronizedProjectionMatrix() {
          const RW = this.ignoreCameraMaxZ ? 0 : this.maxZ;
          let MW = this._cache.mode === this.mode && this._cache.minZ === this.minZ && this._cache.maxZ === RW;
          if (!MW) return !1;
          const wW = this.mC();
          return this.mode === WW.PERSPECTIVE_CAMERA ? MW = this._cache.fov === this.fov && this._cache.fovMode === this.fovMode && this._cache.aspectRatio === wW.getAspectRatio(this) && this._cache.projectionPlaneTilt === this.projectionPlaneTilt : (MW = this._cache.orthoLeft === this.orthoLeft && this._cache.orthoRight === this.orthoRight && this._cache.orthoBottom === this.orthoBottom && this._cache.orthoTop === this.orthoTop && this._cache.renderWidth === wW.getRenderWidth() && this._cache.renderHeight === wW.getRenderHeight(), this.oblique && (MW = MW && this._cache.obliqueAngle === this.oblique.angle && this._cache.obliqueLength === this.oblique.length && this._cache.obliqueOffset === this.oblique.offset)), MW
        }
        attachControl(WW, RW) {}
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
          for (let RW = 0, MW = this._rigCameras.length; RW < MW; RW++) {
            const WW = this._rigCameras[RW],
              MW = WW._rigPostProcess;
            if (MW) {
              "pass" === MW.getEffectName() && (WW.isIntermediate = 0 === this._postProcesses.length), WW._postProcesses = this._postProcesses.slice(0).concat(MW), MW.markTextureDirty()
            } else WW._postProcesses = this._postProcesses.slice(0)
          }
        }
        attachPostProcess(WW) {
          let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          return !WW.isReusable() && this._postProcesses.indexOf(WW) > -1 ? (NW.b.Error("You're trying to reuse a post process not defined as reusable."), 0) : (null == RW || RW < 0 ? this._postProcesses.push(WW) : null === this._postProcesses[RW] ? this._postProcesses[RW] = WW : this._postProcesses.splice(RW, 0, WW), this._cascadePostProcessesToRigCams(), this._scene.prePassRenderer && this._scene.prePassRenderer.KbW(), this._postProcesses.indexOf(WW))
        }
        detachPostProcess(WW) {
          const RW = this._postProcesses.indexOf(WW); - 1 !== RW && (this._postProcesses[RW] = null), this._scene.prePassRenderer && this._scene.prePassRenderer.KbW(), this._cascadePostProcessesToRigCams()
        }
        getWorldMatrix() {
          return this._isSynchronizedViewMatrix() || this.getViewMatrix(), this._worldMatrix
        }
        _getViewMatrix() {
          return bR.d.Identity()
        }
        getViewMatrix(WW) {
          return !WW && this._isSynchronizedViewMatrix() || (this._hasMoved = !0, this.updateCache(), this._computedViewMatrix = this._getViewMatrix(), this._currentRenderId = this.QRW().getRenderId(), this._childUpdateId++, this._refreshFrustumPlanes = !0, this._cameraRigParams && this._cameraRigParams.vrPreViewMatrix && this._computedViewMatrix.multiplyToRef(this._cameraRigParams.vrPreViewMatrix, this._computedViewMatrix), this.parent && this.parent.onViewMatrixChangedObservable && this.parent.onViewMatrixChangedObservable.notifyObservers(this.parent), this.onViewMatrixChangedObservable.notifyObservers(this), this._computedViewMatrix.invertToRef(this._worldMatrix), this._worldMatrix.getTranslationToRef(this._globalPosition)), this._computedViewMatrix
        }
        freezeProjectionMatrix(WW) {
          this._doNotComputeProjectionMatrix = !0, void 0 !== WW && (this._projectionMatrix = WW)
        }
        unfreezeProjectionMatrix() {
          this._doNotComputeProjectionMatrix = !1
        }
        getProjectionMatrix(RW) {
          if (this._doNotComputeProjectionMatrix || !RW && this._isSynchronizedProjectionMatrix()) return this._projectionMatrix;
          const MW = this.ignoreCameraMaxZ ? 0 : this.maxZ;
          this._cache.mode = this.mode, this._cache.minZ = this.minZ, this._cache.maxZ = MW, this._refreshFrustumPlanes = !0;
          const wW = this.mC(),
            CW = this.QRW(),
            zR = wW.BNW;
          if (this.mode === WW.PERSPECTIVE_CAMERA) {
            let RW;
            this._cache.fov = this.fov, this._cache.fovMode = this.fovMode, this._cache.aspectRatio = wW.getAspectRatio(this), this._cache.projectionPlaneTilt = this.projectionPlaneTilt, this.minZ <= 0 && (this.minZ = .1), RW = CW.useRightHandedSystem ? bR.d.PerspectiveFovRHToRef : bR.d.PerspectiveFovLHToRef, RW(this.fov, wW.getAspectRatio(this), zR ? MW : this.minZ, zR ? this.minZ : MW, this._projectionMatrix, this.fovMode === WW.FOVMODE_VERTICAL_FIXED, wW.isNDCHalfZRange, this.projectionPlaneTilt, zR)
          } else {
            const WW = wW.getRenderWidth() / 2,
              RW = wW.getRenderHeight() / 2;
            CW.useRightHandedSystem ? this.oblique ? bR.d.ObliqueOffCenterRHToRef(this.orthoLeft ?? -WW, this.orthoRight ?? WW, this.orthoBottom ?? -RW, this.orthoTop ?? RW, zR ? MW : this.minZ, zR ? this.minZ : MW, this.oblique.length, this.oblique.angle, this._computeObliqueDistance(this.oblique.offset), this._projectionMatrix, wW.isNDCHalfZRange) : bR.d.OrthoOffCenterRHToRef(this.orthoLeft ?? -WW, this.orthoRight ?? WW, this.orthoBottom ?? -RW, this.orthoTop ?? RW, zR ? MW : this.minZ, zR ? this.minZ : MW, this._projectionMatrix, wW.isNDCHalfZRange) : this.oblique ? bR.d.ObliqueOffCenterLHToRef(this.orthoLeft ?? -WW, this.orthoRight ?? WW, this.orthoBottom ?? -RW, this.orthoTop ?? RW, zR ? MW : this.minZ, zR ? this.minZ : MW, this.oblique.length, this.oblique.angle, this._computeObliqueDistance(this.oblique.offset), this._projectionMatrix, wW.isNDCHalfZRange) : bR.d.OrthoOffCenterLHToRef(this.orthoLeft ?? -WW, this.orthoRight ?? WW, this.orthoBottom ?? -RW, this.orthoTop ?? RW, zR ? MW : this.minZ, zR ? this.minZ : MW, this._projectionMatrix, wW.isNDCHalfZRange), this._cache.orthoLeft = this.orthoLeft, this._cache.orthoRight = this.orthoRight, this._cache.orthoBottom = this.orthoBottom, this._cache.orthoTop = this.orthoTop, this._cache.obliqueAngle = this.oblique?.angle, this._cache.obliqueLength = this.oblique?.length, this._cache.obliqueOffset = this.oblique?.offset, this._cache.renderWidth = wW.getRenderWidth(), this._cache.renderHeight = wW.getRenderHeight()
          }
          return this.onProjectionMatrixChangedObservable.notifyObservers(this), this._projectionMatrix
        }
        getTransformationMatrix() {
          return this._computedViewMatrix.multiplyToRef(this._projectionMatrix, this._transformMatrix), this._transformMatrix
        }
        _computeObliqueDistance(WW) {
          return (this.radius || (this.target ? bR.q.Distance(this.position, this.target) : this.position.length())) + WW
        }
        _updateFrustumPlanes() {
          this._refreshFrustumPlanes && (this.getTransformationMatrix(), this._frustumPlanes ? TW.e.GetPlanesToRef(this._transformMatrix, this._frustumPlanes) : this._frustumPlanes = TW.e.GetPlanes(this._transformMatrix), this._refreshFrustumPlanes = !1)
        }
        isInFrustum(WW) {
          let RW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._updateFrustumPlanes(), RW && this.rigCameras.length > 0) {
            let RW = !1;
            for (const MW of this.rigCameras) MW._updateFrustumPlanes(), RW = RW || WW.isInFrustum(MW._frustumPlanes);
            return RW
          }
          return WW.isInFrustum(this._frustumPlanes)
        }
        isCompletelyInFrustum(WW) {
          return this._updateFrustumPlanes(), WW.isCompletelyInFrustum(this._frustumPlanes)
        }
        getForwardRay() {
          throw (0, BW.g)("Ray")
        }
        getForwardRayToRef(WW) {
          throw (0, BW.g)("Ray")
        }
        dispose(RW) {
          let MW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          for (this.onViewMatrixChangedObservable.clear(), this.onProjectionMatrixChangedObservable.clear(), this.onAfterCheckInputsObservable.clear(), this.onRestoreStateObservable.clear(), this.inputs && this.inputs.clear(), this.QRW().stopAnimation(this), this.QRW().removeCamera(this); this._rigCameras.length > 0;) {
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
              const RW = this._postProcesses[WW];
              RW && RW.dispose(this)
            }
          }
          let wW = this.customRenderTargets.length;
          for (; --wW >= 0;) this.customRenderTargets[wW].dispose();
          this.customRenderTargets.length = 0, this._activeMeshes.dispose(), this.QRW().mC().releaseRenderPassId(this.renderPassId), super.dispose(RW, MW)
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
        setCameraRigMode(RW, MW) {
          if (this.cameraRigMode !== RW) {
            for (; this._rigCameras.length > 0;) {
              const WW = this._rigCameras.pop();
              WW && WW.dispose()
            }
            if (this.cameraRigMode = RW, this._cameraRigParams = {}, this._cameraRigParams.interaxialDistance = MW.interaxialDistance || .0637, this._cameraRigParams.stereoHalfAngle = this._cameraRigParams.interaxialDistance / .0637 * (Math.PI / 180), this.cameraRigMode !== WW.RIG_MODE_NONE) {
              const WW = this.createRigCamera(this.name + "_L", 0);
              WW && (WW._isLeftCamera = !0);
              const RW = this.createRigCamera(this.name + "_R", 1);
              RW && (RW._isRightCamera = !0), WW && RW && (this._rigCameras.push(WW), this._rigCameras.push(RW))
            }
            this._setRigMode(MW), this._cascadePostProcessesToRigCams(), this.update()
          }
        }
        _setRigMode(WW) {}
        _getVRProjectionMatrix() {
          return bR.d.PerspectiveFovLHToRef(this._cameraRigParams.vrMetrics.aspectRatioFov, this._cameraRigParams.vrMetrics.aspectRatio, this.minZ, this.ignoreCameraMaxZ ? 0 : this.maxZ, this._cameraRigParams.vrWorkMatrix, !0, this.mC().isNDCHalfZRange), this._cameraRigParams.vrWorkMatrix.multiplyToRef(this._cameraRigParams.vrHMatrix, this._projectionMatrix), this._projectionMatrix
        }
        setCameraRigParameter(WW, RW) {
          this._cameraRigParams || (this._cameraRigParams = {}), this._cameraRigParams[WW] = RW, "interaxialDistance" === WW && (this._cameraRigParams.stereoHalfAngle = RW / .0637 * (Math.PI / 180))
        }
        createRigCamera(WW, RW) {
          return null
        }
        _updateRigCameras() {
          for (let WW = 0; WW < this._rigCameras.length; WW++) this._rigCameras[WW].minZ = this.minZ, this._rigCameras[WW].maxZ = this.ignoreCameraMaxZ ? 0 : this.maxZ, this._rigCameras[WW].fov = this.fov, this._rigCameras[WW].upVector.hyW(this.upVector);
          this.cameraRigMode === WW.RIG_MODE_STEREOSCOPIC_ANAGLYPH && (this._rigCameras[0].viewport = this._rigCameras[1].viewport = this.viewport)
        }
        _setupInputs() {}
        serialize() {
          const WW = iR.d.Serialize(this);
          return WW.uniqueId = this.uniqueId, WW.type = this.getClassName(), this.parent && this.parent._serializeAsParent(WW), this.inputs && this.inputs.serialize(WW), iR.d.AppendSerializedAnimations(this, WW), WW.WA = this.serializeAnimationRanges(), WW.isEnabled = this.isEnabled(), WW
        }
        clone(RW) {
          let MW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const wW = iR.d.Clone(WW.GetConstructorFromName(this.getClassName(), RW, this.QRW(), this.interaxialDistance, this.isStereoscopicSideBySide), this);
          return wW.name = RW, wW.parent = MW, this.onClonedObservable.notifyObservers(wW), wW
        }
        qCW(WW) {
          const RW = bR.q.Zero();
          return this.getDirectionToRef(WW, RW), RW
        }
        get absoluteRotation() {
          return this.getWorldMatrix().decompose(void 0, this._absoluteRotation), this._absoluteRotation
        }
        getDirectionToRef(WW, RW) {
          bR.q.TransformNormalToRef(WW, this.getWorldMatrix(), RW)
        }
        static GetConstructorFromName(RW, MW, wW) {
          let CW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
            zR = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
          const AW = yR.b.Construct(RW, MW, wW, {
            interaxial_distance: CW,
            isStereoscopicSideBySide: zR
          });
          return AW || (() => WW._CreateDefaultParsedCamera(MW, wW))
        }
        computeWorldMatrix() {
          return this.getWorldMatrix()
        }
        _calculateHandednessMultiplier() {
          let WW = this.QRW().useRightHandedSystem ? -1 : 1;
          return this.parent && this.parent._getWorldMatrixDeterminant() < 0 && (WW *= -1), WW
        }
      }, (() => {
        const zR = "function" === typeof Symbol && Symbol.metadata ? Object.create(sW[Symbol.metadata] ?? null) : void 0;
        RW = [(0, CW.B)("position")], MW = [(0, CW.B)("upVector")], eW = [(0, CW.D)()], YW = [(0, CW.D)()], JW = [(0, CW.D)()], PW = [(0, CW.D)()], IW = [(0, CW.D)()], oW = [(0, CW.D)()], lW = [(0, CW.D)()], FW = [(0, CW.D)()], fW = [(0, CW.D)()], QW = [(0, CW.D)()], rR = [(0, CW.D)()], cR = [(0, CW.D)()], XW = [(0, CW.D)()], jR = [(0, CW.D)()], kR = [(0, CW.D)()], aR = [(0, CW.D)()], (0, wW.e)(WW, null, eW, {
          kind: "getter",
          name: "orthoLeft",
          static: !1,
          private: !1,
          access: {
            has: WW => "orthoLeft" in WW,
            get: WW => WW.orthoLeft
          },
          metadata: zR
        }, null, dW), (0, wW.e)(WW, null, YW, {
          kind: "getter",
          name: "orthoRight",
          static: !1,
          private: !1,
          access: {
            has: WW => "orthoRight" in WW,
            get: WW => WW.orthoRight
          },
          metadata: zR
        }, null, dW), (0, wW.e)(WW, null, JW, {
          kind: "getter",
          name: "orthoBottom",
          static: !1,
          private: !1,
          access: {
            has: WW => "orthoBottom" in WW,
            get: WW => WW.orthoBottom
          },
          metadata: zR
        }, null, dW), (0, wW.e)(WW, null, PW, {
          kind: "getter",
          name: "orthoTop",
          static: !1,
          private: !1,
          access: {
            has: WW => "orthoTop" in WW,
            get: WW => WW.orthoTop
          },
          metadata: zR
        }, null, dW), (0, wW.e)(WW, null, fW, {
          kind: "getter",
          name: "inertia",
          static: !1,
          private: !1,
          access: {
            has: WW => "inertia" in WW,
            get: WW => WW.inertia
          },
          metadata: zR
        }, null, dW), (0, wW.e)(WW, null, QW, {
          kind: "getter",
          name: "mode",
          static: !1,
          private: !1,
          access: {
            has: WW => "mode" in WW,
            get: WW => WW.mode
          },
          metadata: zR
        }, null, dW), (0, wW.e)(null, null, RW, {
          kind: "field",
          name: "_position",
          static: !1,
          private: !1,
          access: {
            has: WW => "_position" in WW,
            get: WW => WW._position,
            set: (WW, RW) => {
              WW._position = RW
            }
          },
          metadata: zR
        }, pW, hW), (0, wW.e)(null, null, MW, {
          kind: "field",
          name: "_upVector",
          static: !1,
          private: !1,
          access: {
            has: WW => "_upVector" in WW,
            get: WW => WW._upVector,
            set: (WW, RW) => {
              WW._upVector = RW
            }
          },
          metadata: zR
        }, UW, EW), (0, wW.e)(null, null, IW, {
          kind: "field",
          name: "fov",
          static: !1,
          private: !1,
          access: {
            has: WW => "fov" in WW,
            get: WW => WW.fov,
            set: (WW, RW) => {
              WW.fov = RW
            }
          },
          metadata: zR
        }, VW, mR), (0, wW.e)(null, null, oW, {
          kind: "field",
          name: "projectionPlaneTilt",
          static: !1,
          private: !1,
          access: {
            has: WW => "projectionPlaneTilt" in WW,
            get: WW => WW.projectionPlaneTilt,
            set: (WW, RW) => {
              WW.projectionPlaneTilt = RW
            }
          },
          metadata: zR
        }, xR, vR), (0, wW.e)(null, null, lW, {
          kind: "field",
          name: "minZ",
          static: !1,
          private: !1,
          access: {
            has: WW => "minZ" in WW,
            get: WW => WW.minZ,
            set: (WW, RW) => {
              WW.minZ = RW
            }
          },
          metadata: zR
        }, KW, uW), (0, wW.e)(null, null, FW, {
          kind: "field",
          name: "maxZ",
          static: !1,
          private: !1,
          access: {
            has: WW => "maxZ" in WW,
            get: WW => WW.maxZ,
            set: (WW, RW) => {
              WW.maxZ = RW
            }
          },
          metadata: zR
        }, OW, nW), (0, wW.e)(null, null, rR, {
          kind: "field",
          name: "layerMask",
          static: !1,
          private: !1,
          access: {
            has: WW => "layerMask" in WW,
            get: WW => WW.layerMask,
            set: (WW, RW) => {
              WW.layerMask = RW
            }
          },
          metadata: zR
        }, GW, LW), (0, wW.e)(null, null, cR, {
          kind: "field",
          name: "fovMode",
          static: !1,
          private: !1,
          access: {
            has: WW => "fovMode" in WW,
            get: WW => WW.fovMode,
            set: (WW, RW) => {
              WW.fovMode = RW
            }
          },
          metadata: zR
        }, HW, DW), (0, wW.e)(null, null, XW, {
          kind: "field",
          name: "cameraRigMode",
          static: !1,
          private: !1,
          access: {
            has: WW => "cameraRigMode" in WW,
            get: WW => WW.cameraRigMode,
            set: (WW, RW) => {
              WW.cameraRigMode = RW
            }
          },
          metadata: zR
        }, qR, ZW), (0, wW.e)(null, null, jR, {
          kind: "field",
          name: "interaxialDistance",
          static: !1,
          private: !1,
          access: {
            has: WW => "interaxialDistance" in WW,
            get: WW => WW.interaxialDistance,
            set: (WW, RW) => {
              WW.interaxialDistance = RW
            }
          },
          metadata: zR
        }, SW, WR), (0, wW.e)(null, null, kR, {
          kind: "field",
          name: "isStereoscopicSideBySide",
          static: !1,
          private: !1,
          access: {
            has: WW => "isStereoscopicSideBySide" in WW,
            get: WW => WW.isStereoscopicSideBySide,
            set: (WW, RW) => {
              WW.isStereoscopicSideBySide = RW
            }
          },
          metadata: zR
        }, RR, MR), (0, wW.e)(null, null, aR, {
          kind: "field",
          name: "ignoreCameraMaxZ",
          static: !1,
          private: !1,
          access: {
            has: WW => "ignoreCameraMaxZ" in WW,
            get: WW => WW.ignoreCameraMaxZ,
            set: (WW, RW) => {
              WW.ignoreCameraMaxZ = RW
            }
          },
          metadata: zR
        }, wR, CR), zR && Object.defineProperty(WW, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: zR
        })
      })(), WW._CreateDefaultParsedCamera = (WW, RW) => {
        throw (0, BW.g)("UniversalCamera")
      }, WW.PERSPECTIVE_CAMERA = 0, WW.ORTHOGRAPHIC_CAMERA = 1, WW.FOVMODE_VERTICAL_FIXED = 0, WW.FOVMODE_HORIZONTAL_FIXED = 1, WW.RIG_MODE_NONE = 0, WW.RIG_MODE_STEREOSCOPIC_ANAGLYPH = 10, WW.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL = 11, WW.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED = 12, WW.RIG_MODE_STEREOSCOPIC_OVERUNDER = 13, WW.RIG_MODE_STEREOSCOPIC_INTERLACED = 14, WW.RIG_MODE_VR = 20, WW.RIG_MODE_CUSTOM = 22, WW.ForceAttachControlToAlwaysPreventDefault = !1, WW
    })();

    function JW(WW, RW) {
      const MW = WW.type,
        wW = YW.GetConstructorFromName(MW, WW.name, RW, WW.interaxial_distance, WW.isStereoscopicSideBySide),
        CW = iR.d.Parse(wW, WW, RW);
      if (void 0 !== WW.parentId && (CW._waitingParentId = WW.parentId), void 0 !== WW.parentInstanceIndex && (CW._waitingParentInstanceIndex = WW.parentInstanceIndex), CW.inputs && (CW.inputs.parse(WW), CW._setupInputs()), WW.upVector && (CW.upVector = bR.q.FromArray(WW.upVector)), CW.setPosition && (CW.position.nzW(0, 0, 0), CW.setPosition(bR.q.FromArray(WW.position))), WW.target && CW.setTarget && CW.setTarget(bR.q.FromArray(WW.target)), WW.cameraRigMode) {
        const RW = WW.interaxial_distance ? {
          interaxialDistance: WW.interaxial_distance
        } : {};
        CW.setCameraRigMode(WW.cameraRigMode, RW)
      }
      if (WW.animations) {
        for (let RW = 0; RW < WW.animations.length; RW++) {
          const MW = WW.animations[RW],
            wW = (0, eW.c)("BABYLON.Animation");
          wW && CW.animations.push(wW.Parse(MW))
        }
        yR.b.ParseAnimationRanges(CW, WW, RW)
      }
      return WW.autoAnimate && RW.beginAnimation(CW, WW.autoAnimateFrom, WW.autoAnimateTo, WW.autoAnimateLoop, WW.autoAnimateSpeed || 1), void 0 !== WW.isEnabled && CW.kMW(WW.isEnabled), CW
    }
    let PW = !1;

    function IW() {
      PW || (PW = !0, YW.Parse = JW)
    }
  },
  37812: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => CW
    });
    var wW = MW(35324);
    class CW {
      constructor(WW, RW, MW) {
        this._cameraPosition = RW, this._behavior = MW, this.activeInput = !1, this.speed = 1, this.lwW = 1, this.panSpeed = 1, this.rotationXSpeed = 1, this.rotationYSpeed = 1, this._zoomSpeedMultiplier = 1, this._panSpeedMultiplier = 1, this.zoomInertia = .9, this.panInertia = .9, this.rotationInertia = .9, this.zoomAccumulatedPixels = 0, this.panAccumulatedPixels = new wW.q, this.rotationAccumulatedPixels = new wW.q, this.zoomDeltaCurrentFrame = 0, this.panDeltaCurrentFrame = wW.q.Zero(), this.rotationDeltaCurrentFrame = wW.q.Zero(), this._zoomVelocity = 0, this._panVelocity = new wW.q, this.referenceFrameRate = 60, this._rotationVelocity = new wW.q, this._prevFrameTimeMs = 0, this._scene = WW
      }
      computeCurrentFrameDeltas() {
        const WW = this._scene.mC().getDeltaTime(),
          RW = this._getEffectiveDeltaMs(WW);
        if (0 === this._zoomVelocity && 0 === this.zoomAccumulatedPixels && 0 === this._panVelocity.x && 0 === this._panVelocity.y && 0 === this._panVelocity.z && 0 === this.panAccumulatedPixels.x && 0 === this.panAccumulatedPixels.y && 0 === this.panAccumulatedPixels.z && 0 === this._rotationVelocity.x && 0 === this._rotationVelocity.y && 0 === this._rotationVelocity.z && 0 === this.rotationAccumulatedPixels.x && 0 === this.rotationAccumulatedPixels.y && 0 === this.rotationAccumulatedPixels.z && !this.activeInput) return this.panDeltaCurrentFrame.YzW(0), this.rotationDeltaCurrentFrame.YzW(0), this.zoomDeltaCurrentFrame = 0, void(WW > 0 && (this._prevFrameTimeMs = WW));
        this.panDeltaCurrentFrame.YzW(0), this.rotationDeltaCurrentFrame.YzW(0), this.zoomDeltaCurrentFrame = 0;
        (this.panAccumulatedPixels.lengthSquared() > 0 || this.rotationAccumulatedPixels.lengthSquared() > 0 || 0 !== this.zoomAccumulatedPixels) && this._behavior?.isInterpolating && this._behavior.stopAllAnimations(), this._panVelocity.nzW(this._calculateCurrentVelocity(this._panVelocity.x, this.panAccumulatedPixels.x, this.panInertia), this._calculateCurrentVelocity(this._panVelocity.y, this.panAccumulatedPixels.y, this.panInertia), this._calculateCurrentVelocity(this._panVelocity.z, this.panAccumulatedPixels.z, this.panInertia)), this._panVelocity.scaleToRef(this.speed * this.panSpeed * this._panSpeedMultiplier * RW, this.panDeltaCurrentFrame), this._rotationVelocity.nzW(this._calculateCurrentVelocity(this._rotationVelocity.x, this.rotationAccumulatedPixels.x, this.rotationInertia), this._calculateCurrentVelocity(this._rotationVelocity.y, this.rotationAccumulatedPixels.y, this.rotationInertia), this._calculateCurrentVelocity(this._rotationVelocity.z, this.rotationAccumulatedPixels.z, this.rotationInertia)), this.rotationDeltaCurrentFrame.nzW(this._rotationVelocity.x * this.speed * this.rotationXSpeed * RW, this._rotationVelocity.y * this.speed * this.rotationYSpeed * RW, 0), this._zoomVelocity = this._calculateCurrentVelocity(this._zoomVelocity, this.zoomAccumulatedPixels, this.zoomInertia), this.zoomDeltaCurrentFrame = this._zoomVelocity * (this.speed * this.lwW * this._zoomSpeedMultiplier) * RW, WW > 0 && (this._prevFrameTimeMs = WW), this.zoomAccumulatedPixels = 0, this.panAccumulatedPixels.YzW(0), this.rotationAccumulatedPixels.YzW(0), this.activeInput = !1
      }
      resetRotationVelocity() {
        this._rotationVelocity.YzW(0), this.rotationAccumulatedPixels.YzW(0)
      }
      resetPanVelocity() {
        this._panVelocity.YzW(0), this.panAccumulatedPixels.YzW(0)
      }
      resetZoomVelocity() {
        this._zoomVelocity = 0, this.zoomAccumulatedPixels = 0
      }
      get isInterpolating() {
        return !!this._behavior?.isInterpolating
      }
      getFrameIndependentDecay(WW) {
        const RW = this._scene.mC().getDeltaTime(),
          MW = this._getEffectiveDeltaMs(RW),
          wW = 1e3 / this.referenceFrameRate;
        return Math.pow(WW, MW / wW)
      }
      getFrameIndependentInputScale(WW) {
        const RW = 1 - WW;
        if (RW <= 0) return 1;
        return (1 - this.getFrameIndependentDecay(WW)) / RW
      }
      _getEffectiveDeltaMs(WW) {
        return WW > 0 ? WW : this._prevFrameTimeMs > 0 ? this._prevFrameTimeMs : 1e3 / this.referenceFrameRate
      }
      _calculateCurrentVelocity(WW, RW, MW) {
        let wW = WW;
        const CW = this._scene.mC().getDeltaTime(),
          zR = this._getEffectiveDeltaMs(CW);
        if (0 === zR) return wW;
        const AW = this.getFrameIndependentDecay(MW);
        if (wW *= AW, 0 !== RW || this.activeInput) {
          const WW = 1 - MW;
          wW += RW / zR * (WW > 0 ? (1 - AW) / WW : 1)
        } else Math.abs(wW) < 1e-6 && (wW = 0);
        return wW
      }
    }
  },
  37815: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => wW
    });
    class wW {
      constructor(WW, RW) {
        this.inputMap = [], this.handlers = WW, this._createDefaultEntries = RW, this.resetInputMap()
      }
      resolveInteraction(WW, RW) {
        for (const MW of this.inputMap)
          if (MW.source === WW && this._entryMatches(MW, RW)) return MW;
        return null
      }
      resetInputMap() {
        this.inputMap = this._createDefaultEntries?.() ?? []
      }
      getEntry(WW, RW, MW) {
        const wW = this.inputMap;
        for (let CW = 0; CW < wW.length; CW++) {
          const zR = wW[CW];
          if (zR.source === WW && zR.interaction === RW && this._entryConditionsMatch(zR, MW)) return zR
        }
      }
      getEntries(WW, RW, MW) {
        const wW = [],
          CW = this.inputMap;
        for (let zR = 0; zR < CW.length; zR++) {
          const AW = CW[zR];
          AW.source === WW && AW.interaction === RW && this._entryConditionsMatch(AW, MW) && wW.push(AW)
        }
        return wW
      }
      addEntry(WW) {
        const RW = this._entrySpecificity(WW);
        let MW = this.inputMap.length;
        for (let wW = 0; wW < this.inputMap.length; wW++)
          if (this._entrySpecificity(this.inputMap[wW]) < RW) {
            MW = wW;
            break
          } this.inputMap.splice(MW, 0, WW)
      }
      setInteraction(WW, RW, MW) {
        const wW = this.resolveInteraction(WW, RW);
        return wW && this._entryCoversAllConditionsOf(wW, RW) ? (wW.interaction = MW, !0) : (this.addEntry({
          source: WW,
          ...RW ?? {},
          interaction: MW
        }), !0)
      }
      _entryCoversAllConditionsOf(WW, RW) {
        if (!RW) return !0;
        const MW = WW;
        for (const wW of Object.keys(RW)) {
          const WW = RW[wW];
          if (void 0 !== WW)
            if ("modifiers" === wW) {
              const RW = MW.modifiers ?? {};
              for (const MW of Object.keys(WW))
                if (void 0 !== WW[MW] && void 0 === RW[MW]) return !1
            } else if (void 0 === MW[wW]) return !1
        }
        return !0
      }
      setInteractions(WW, RW, MW) {
        let wW = 0;
        const CW = this.inputMap;
        for (let zR = 0; zR < CW.length; zR++) {
          const AW = CW[zR];
          AW.source === WW && this._entryMatches(AW, RW) && (AW.interaction = MW, wW++)
        }
        return wW
      }
      _entryMatches(WW, RW) {
        switch (WW.source) {
          case "pointer":
            return (void 0 === WW.button || WW.button === RW?.button) && this._matchModifiers(WW.modifiers, RW?.modifiers);
          case "wheel":
            return this._matchModifiers(WW.modifiers, RW?.modifiers);
          case "touch":
            return void 0 === WW.touchCount || WW.touchCount === RW?.touchCount;
          case "keyboard":
            return (void 0 === WW.key || (Array.isArray(WW.key) ? -1 !== WW.key.indexOf(RW?.key ?? -1) : WW.key === RW?.key)) && this._matchModifiers(WW.modifiers, RW?.modifiers)
        }
      }
      _entryConditionsMatch(WW, RW) {
        if (!RW) return !0;
        switch (WW.source) {
          case "pointer":
            return (!("button" in RW) || WW.button === RW.button) && (!("modifiers" in RW) || this._entryModifiersMatch(WW.modifiers, RW.modifiers));
          case "wheel":
            return !("modifiers" in RW) || this._entryModifiersMatch(WW.modifiers, RW.modifiers);
          case "touch":
            return !("touchCount" in RW) || WW.touchCount === RW.touchCount;
          case "keyboard":
            if ("key" in RW) {
              if (void 0 === WW.key) return void 0 === RW.key;
              if (void 0 === RW.key || (Array.isArray(WW.key) ? -1 === WW.key.indexOf(RW.key) : WW.key !== RW.key)) return !1
            }
            return !("modifiers" in RW) || this._entryModifiersMatch(WW.modifiers, RW.modifiers)
        }
      }
      _entrySpecificity(WW) {
        let RW = 0;
        return "button" in WW && void 0 !== WW.button && RW++, "key" in WW && void 0 !== WW.key && RW++, "touchCount" in WW && void 0 !== WW.touchCount && RW++, "modifiers" in WW && WW.modifiers && RW++, RW
      }
      _matchModifiers(WW, RW) {
        return !WW || (void 0 === WW.ctrl || WW.ctrl === (RW?.ctrl ?? !1)) && ((void 0 === WW.shift || WW.shift === (RW?.shift ?? !1)) && (void 0 === WW.alt || WW.alt === (RW?.alt ?? !1)))
      }
      _entryModifiersMatch(WW, RW) {
        if (!RW) return !WW;
        return void 0 !== RW.ctrl || void 0 !== RW.shift || void 0 !== RW.alt ? (void 0 === RW.ctrl || WW?.ctrl === RW.ctrl) && ((void 0 === RW.shift || WW?.shift === RW.shift) && (void 0 === RW.alt || WW?.alt === RW.alt)) : !WW || void 0 === WW.ctrl && void 0 === WW.shift && void 0 === WW.alt
      }
    }
  },
  37787: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => JW,
      f: () => iR
    });
    var wW = MW(37587),
      CW = MW(37593),
      zR = MW(37796),
      AW = MW(35324),
      bR = MW(35328),
      yR = MW(37809),
      NW = MW(37800),
      eW = MW(37812),
      BW = MW(37815);
    class tR extends eW.d {
      constructor(WW, RW, MW) {
        super(WW, RW, MW), this.input = new BW.d({
          translate: (WW, RW, MW) => {
            this.panAccumulatedPixels.x += WW, this.panAccumulatedPixels.y += RW, this.panAccumulatedPixels.z += MW
          },
          rotate: (WW, RW) => {
            this.rotationAccumulatedPixels.x += WW, this.rotationAccumulatedPixels.y += RW
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
    const TW = AW.d.Zero(),
      gR = AW.e.Identity();
    let iR = (() => {
        var WW;
        let RW, MW, NW, eW, BW = zR.e,
          iR = [],
          YW = [],
          JW = [],
          PW = [],
          IW = [],
          oW = [],
          lW = [],
          FW = [];
        return WW = class extends BW {
          get inertia() {
            return this._targetInertia
          }
          set inertia(WW) {
            this._targetInertia = WW, this.movement && (this.movement.panInertia = WW, this.movement.rotationInertia = WW)
          }
          constructor(WW, RW, MW) {
            super(WW, RW, MW, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]), this.cameraDirection = new AW.q(0, 0, 0), this.cameraRotation = new AW.n(0, 0), this._targetInertia = .9, this.updateUpVectorFromRotation = (0, wW.i)(this, iR, !1), this.rotation = ((0, wW.i)(this, YW), (0, wW.i)(this, JW, void 0)), this.rotationQuaternion = (0, wW.i)(this, PW), this.speed = (0, wW.i)(this, IW, 2), this.noRotationConstraint = ((0, wW.i)(this, oW), !1), this.invertRotation = !1, this.inverseRotationSpeed = .2, this._panningEpsilon = bR.c, this._rotationEpsilon = bR.c, this.lockedTarget = (0, wW.i)(this, lW, null), this._currentTarget = ((0, wW.i)(this, FW), AW.q.Zero()), this._initialFocalDistance = 1, this._viewMatrix = AW.d.Zero(), this._cameraTransformMatrix = AW.d.Zero(), this._cameraRotationMatrix = AW.d.Zero(), this._transformedReferencePoint = AW.q.Zero(), this._deferredPositionUpdate = new AW.q, this._deferredRotationQuaternionUpdate = new AW.e, this._deferredRotationUpdate = new AW.q, this._deferredUpdated = !1, this._deferOnly = !1, this._cachedRotationZ = 0, this._cachedQuaternionRotationZ = 0, this._referencePoint = AW.q.Forward(this.QRW().useRightHandedSystem), this.rotation = new AW.q(0, this.QRW().useRightHandedSystem ? Math.PI : 0, 0), this.movement = new tR(this.QRW(), this.position), this.movement.panInertia = this.inertia, this.movement.rotationInertia = this.inertia
          }
          getFrontPosition(WW) {
            this.getWorldMatrix();
            const RW = AW.k.vC[0],
              MW = AW.k.vC[1];
            return MW.set(0, 0, this._scene.useRightHandedSystem ? -1 : 1), this.getDirectionToRef(MW, RW), RW.scaleInPlace(WW), this.globalPosition.add(RW)
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
            return !!super._restoreStateValues() && (this.position = this._storedPosition.clone(), this.rotation = this._storedRotation.clone(), this.rotationQuaternion && this._storedRotationQuaternion && (this.rotationQuaternion = this._storedRotationQuaternion.clone()), this.cameraDirection.nzW(0, 0, 0), this.cameraRotation.nzW(0, 0), !0)
          }
          _initCache() {
            super._initCache(), this._cache.lockedTarget = new AW.q(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.rotation = new AW.q(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.rotationQuaternion = new AW.e(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE)
          }
          _updateCache(WW) {
            WW || super._updateCache();
            const RW = this._getLockedTargetPosition();
            RW ? this._cache.lockedTarget ? this._cache.lockedTarget.hyW(RW) : this._cache.lockedTarget = RW.clone() : this._cache.lockedTarget = null, this._cache.rotation.hyW(this.rotation), this.rotationQuaternion && this._cache.rotationQuaternion.hyW(this.rotationQuaternion)
          }
          _isSynchronizedViewMatrix() {
            if (!super._isSynchronizedViewMatrix()) return !1;
            const WW = this._getLockedTargetPosition();
            return (this._cache.lockedTarget ? this._cache.lockedTarget.equals(WW) : !WW) && (this.rotationQuaternion ? this.rotationQuaternion.equals(this._cache.rotationQuaternion) : this._cache.rotation.equals(this.rotation))
          }
          _computeLocalCameraSpeed() {
            const WW = this.mC();
            return this.speed * Math.sqrt(WW.getDeltaTime() / (100 * WW.getFps()))
          }
          setTarget(WW) {
            this.upVector.normalize(), this._initialFocalDistance = WW.subtract(this.position).length(), this.position.z === WW.z && (this.position.z += bR.c), this._referencePoint.normalize().scaleInPlace(this._initialFocalDistance), this.QRW().useRightHandedSystem ? AW.d.LookAtRHToRef(this.position, WW, AW.q.UpReadOnly, TW) : AW.d.LookAtLHToRef(this.position, WW, AW.q.UpReadOnly, TW), TW.invert();
            const RW = this.rotationQuaternion || gR;
            AW.e.FromRotationMatrixToRef(TW, RW), RW.toEulerAnglesToRef(this.rotation), this.rotation.z = 0
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
            if (this.parent) return this.parent.getWorldMatrix().invertToRef(AW.k.Matrix[0]), AW.q.TransformNormalToRef(this.cameraDirection, AW.k.Matrix[0], AW.k.vC[0]), this._deferredPositionUpdate.addInPlace(AW.k.vC[0]), void(this._deferOnly ? this._deferredUpdated = !0 : this.position.hyW(this._deferredPositionUpdate));
            this._deferredPositionUpdate.addInPlace(this.cameraDirection), this._deferOnly ? this._deferredUpdated = !0 : this.position.hyW(this._deferredPositionUpdate)
          }
          _checkInputs() {
            const WW = this.movement,
              RW = 0 !== this.cameraDirection.x || 0 !== this.cameraDirection.y || 0 !== this.cameraDirection.z;
            WW.panAccumulatedPixels.addInPlace(this.cameraDirection), WW.rotationAccumulatedPixels.x += this.cameraRotation.x, WW.rotationAccumulatedPixels.y += this.cameraRotation.y, WW.computeCurrentFrameDeltas(), this.cameraDirection.hyW(WW.panDeltaCurrentFrame), this.cameraRotation.set(WW.rotationDeltaCurrentFrame.x, WW.rotationDeltaCurrentFrame.y);
            const MW = this.speed * this._panningEpsilon;
            !RW && Math.abs(this.cameraDirection.x) < MW && Math.abs(this.cameraDirection.y) < MW && Math.abs(this.cameraDirection.z) < MW && (this.cameraDirection.YzW(0), WW.resetPanVelocity());
            const wW = this.invertRotation ? -this.inverseRotationSpeed : 1,
              CW = this._decideIfNeedsToMove(),
              zR = !(!this.cameraRotation.x && !this.cameraRotation.y);
            if (this._deferredUpdated = !1, this._deferredRotationUpdate.hyW(this.rotation), this._deferredPositionUpdate.hyW(this.position), this.rotationQuaternion && this._deferredRotationQuaternionUpdate.hyW(this.rotationQuaternion), CW && this._updatePosition(), zR) {
              if (this.rotationQuaternion && this.rotationQuaternion.toEulerAnglesToRef(this._deferredRotationUpdate), this._deferredRotationUpdate.x += this.cameraRotation.x * wW, this._deferredRotationUpdate.y += this.cameraRotation.y * wW, !this.noRotationConstraint) {
                const WW = 1.570796;
                this._deferredRotationUpdate.x > WW && (this._deferredRotationUpdate.x = WW), this._deferredRotationUpdate.x < -WW && (this._deferredRotationUpdate.x = -WW)
              }
              if (this._deferOnly ? this._deferredUpdated = !0 : this.rotation.hyW(this._deferredRotationUpdate), this.rotationQuaternion) {
                this._deferredRotationUpdate.lengthSquared() && (AW.e.RotationYawPitchRollToRef(this._deferredRotationUpdate.y, this._deferredRotationUpdate.x, this._deferredRotationUpdate.z, this._deferredRotationQuaternionUpdate), this._deferOnly ? this._deferredUpdated = !0 : this.rotationQuaternion.hyW(this._deferredRotationQuaternionUpdate))
              }
            }
            this.cameraDirection.YzW(0), this.cameraRotation.set(0, 0), super._checkInputs()
          }
          _updateCameraRotationMatrix() {
            this.rotationQuaternion ? this.rotationQuaternion.toRotationMatrix(this._cameraRotationMatrix) : AW.d.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, this.rotation.z, this._cameraRotationMatrix)
          }
          _rotateUpVectorWithCameraRotationMatrix() {
            return AW.q.TransformNormalToRef(AW.q.UpReadOnly, this._cameraRotationMatrix, this.upVector), this
          }
          _getViewMatrix() {
            return this.lockedTarget && this.setTarget(this._getLockedTargetPosition()), this._updateCameraRotationMatrix(), this.rotationQuaternion && this._cachedQuaternionRotationZ != this.rotationQuaternion.z ? (this._rotateUpVectorWithCameraRotationMatrix(), this._cachedQuaternionRotationZ = this.rotationQuaternion.z) : this._cachedRotationZ !== this.rotation.z && (this._rotateUpVectorWithCameraRotationMatrix(), this._cachedRotationZ = this.rotation.z), AW.q.TransformCoordinatesToRef(this._referencePoint, this._cameraRotationMatrix, this._transformedReferencePoint), this.position.addToRef(this._transformedReferencePoint, this._currentTarget), this.updateUpVectorFromRotation && (this.rotationQuaternion ? yR.b.Y.rotateByQuaternionToRef(this.rotationQuaternion, this.upVector) : (AW.e.FromEulerVectorToRef(this.rotation, gR), yR.b.Y.rotateByQuaternionToRef(gR, this.upVector))), this._computeViewMatrix(this.position, this._currentTarget, this.upVector), this._viewMatrix
          }
          _computeViewMatrix(WW, RW, MW) {
            if (this.QRW().useRightHandedSystem ? AW.d.LookAtRHToRef(WW, RW, MW, this._viewMatrix) : AW.d.LookAtLHToRef(WW, RW, MW, this._viewMatrix), this.parent) {
              const WW = this.parent.getWorldMatrix();
              this._viewMatrix.invert(), this._viewMatrix.multiplyToRef(WW, this._viewMatrix), this._viewMatrix.invert(), this._markSyncedWithParent()
            }
          }
          createRigCamera(RW, MW) {
            if (this.cameraRigMode !== zR.e.RIG_MODE_NONE) {
              const MW = new WW(RW, this.position.clone(), this.QRW());
              return MW.isRigCamera = !0, MW.rigParent = this, this.cameraRigMode === zR.e.RIG_MODE_VR && (this.rotationQuaternion || (this.rotationQuaternion = new AW.e), MW._cameraRigParams = {}, MW.rotationQuaternion = new AW.e), MW.mode = this.mode, MW.orthoLeft = this.orthoLeft, MW.orthoRight = this.orthoRight, MW.orthoTop = this.orthoTop, MW.orthoBottom = this.orthoBottom, MW
            }
            return null
          }
          _updateRigCameras() {
            const WW = this._rigCameras[0],
              RW = this._rigCameras[1];
            switch (this.computeWorldMatrix(), this.cameraRigMode) {
              case zR.e.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case zR.e.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case zR.e.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
              case zR.e.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case zR.e.RIG_MODE_STEREOSCOPIC_INTERLACED: {
                const MW = this.cameraRigMode === zR.e.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED ? 1 : -1,
                  wW = this.cameraRigMode === zR.e.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED ? -1 : 1;
                this._getRigCamPositionAndTarget(this._cameraRigParams.stereoHalfAngle * MW, WW), this._getRigCamPositionAndTarget(this._cameraRigParams.stereoHalfAngle * wW, RW);
                break
              }
              case zR.e.RIG_MODE_VR:
                WW.rotationQuaternion && RW.rotationQuaternion && this.rotationQuaternion ? (WW.rotationQuaternion.hyW(this.rotationQuaternion), RW.rotationQuaternion.hyW(this.rotationQuaternion)) : (WW.rotation.hyW(this.rotation), RW.rotation.hyW(this.rotation)), WW.position.hyW(this.position), RW.position.hyW(this.position)
            }
            super._updateRigCameras()
          }
          _getRigCamPositionAndTarget(RW, MW) {
            this.getTarget().subtractToRef(this.position, WW._TargetFocalPoint), WW._TargetFocalPoint.normalize().scaleInPlace(this._initialFocalDistance);
            const wW = WW._TargetFocalPoint.addInPlace(this.position);
            AW.d.TranslationToRef(-wW.x, -wW.y, -wW.z, WW._TargetTransformMatrix), WW._TargetTransformMatrix.multiplyToRef(AW.d.RotationAxis(MW.upVector, RW), WW._RigCamTransformMatrix), AW.d.TranslationToRef(wW.x, wW.y, wW.z, WW._TargetTransformMatrix), WW._RigCamTransformMatrix.multiplyToRef(WW._TargetTransformMatrix, WW._RigCamTransformMatrix), AW.q.TransformCoordinatesToRef(this.position, WW._RigCamTransformMatrix, MW.position), MW.setTarget(wW)
          }
          getClassName() {
            return "TargetCamera"
          }
        }, (() => {
          const zR = "function" === typeof Symbol && Symbol.metadata ? Object.create(BW[Symbol.metadata] ?? null) : void 0;
          RW = [(0, CW.D)()], MW = [(0, CW.B)()], NW = [(0, CW.D)()], eW = [(0, CW.t)("lockedTargetId")], (0, wW.e)(null, null, RW, {
            kind: "field",
            name: "updateUpVectorFromRotation",
            static: !1,
            private: !1,
            access: {
              has: WW => "updateUpVectorFromRotation" in WW,
              get: WW => WW.updateUpVectorFromRotation,
              set: (WW, RW) => {
                WW.updateUpVectorFromRotation = RW
              }
            },
            metadata: zR
          }, iR, YW), (0, wW.e)(null, null, MW, {
            kind: "field",
            name: "rotation",
            static: !1,
            private: !1,
            access: {
              has: WW => "rotation" in WW,
              get: WW => WW.rotation,
              set: (WW, RW) => {
                WW.rotation = RW
              }
            },
            metadata: zR
          }, JW, PW), (0, wW.e)(null, null, NW, {
            kind: "field",
            name: "speed",
            static: !1,
            private: !1,
            access: {
              has: WW => "speed" in WW,
              get: WW => WW.speed,
              set: (WW, RW) => {
                WW.speed = RW
              }
            },
            metadata: zR
          }, IW, oW), (0, wW.e)(null, null, eW, {
            kind: "field",
            name: "lockedTarget",
            static: !1,
            private: !1,
            access: {
              has: WW => "lockedTarget" in WW,
              get: WW => WW.lockedTarget,
              set: (WW, RW) => {
                WW.lockedTarget = RW
              }
            },
            metadata: zR
          }, lW, FW), zR && Object.defineProperty(WW, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: zR
          })
        })(), WW._RigCamTransformMatrix = new AW.d, WW._TargetTransformMatrix = new AW.d, WW._TargetFocalPoint = new AW.q, WW
      })(),
      YW = !1;

    function JW() {
      YW || (YW = !0, NW.b.AddNodeConstructor("TargetCamera", ((WW, RW) => () => new iR(WW, AW.q.Zero(), RW))))
    }
  },
  37544: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => zR
    });
    var wW = MW(37485);
    let CW = !1;

    function zR() {
      CW || (CW = !0, wW.b.prototype.getInputElement = function() {
        return this._renderingCanvas
      }, wW.b.prototype.getRenderingCanvasClientRect = function() {
        return this._renderingCanvas ? this._renderingCanvas.getBoundingClientRect() : null
      }, wW.b.prototype.getInputElementClientRect = function() {
        return this._renderingCanvas ? this.getInputElement().getBoundingClientRect() : null
      }, wW.b.prototype.getAspectRatio = function(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const MW = WW.viewport;
        return this.getRenderWidth(RW) * MW.width / (this.getRenderHeight(RW) * MW.height)
      }, wW.b.prototype.getScreenAspectRatio = function() {
        return this.getRenderWidth(!0) / this.getRenderHeight(!0)
      }, wW.b.prototype._verifyPointerLock = function() {
        this._onPointerLockChange?.()
      })
    }
  },
  37632: (WW, RW, MW) => {
    var wW = MW(37485),
      CW = MW(37635);
    let zR = !1;
    zR || (zR = !0, (0, CW.s)(), wW.b.prototype._loadFileAsync = async function(WW, RW, MW) {
      return await new Promise(((wW, CW) => {
        this._loadFile(WW, (WW => {
          wW(WW)
        }), void 0, RW, MW, ((WW, RW) => {
          CW(RW)
        }))
      }))
    })
  },
  37628: (WW, RW, MW) => {
    (0, MW(37553).d)()
  },
  37553: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => zR
    });
    var wW = MW(37485);
    let CW = !1;

    function zR() {
      CW || (CW = !0, wW.b.prototype.getRenderPassNames = function() {
        return this._renderPassNames
      }, wW.b.prototype.getCurrentRenderPassName = function() {
        return this._renderPassNames[this.currentRenderPassId]
      }, wW.b.prototype.createRenderPassId = function(WW) {
        const RW = ++wW.b._RenderPassIdCounter;
        return this._renderPassNames[RW] = WW ?? "NONAME", RW
      }, wW.b.prototype.releaseRenderPassId = function(WW) {
        this._renderPassNames[WW] = void 0;
        for (let RW = 0; RW < this.scenes.length; ++RW) {
          const MW = this.scenes[RW];
          for (let RW = 0; RW < MW.meshes.length; ++RW) {
            const wW = MW.meshes[RW];
            if (wW._releaseRenderPassId(WW), wW.Qs)
              for (let RW = 0; RW < wW.Qs.length; ++RW) {
                wW.Qs[RW]._removeDrawWrapper(WW)
              }
          }
        }
        this._onReleaseRenderPassObservable?.notifyObservers(WW)
      })
    }
  },
  37661: (WW, RW, MW) => {
    var wW = MW(37665),
      CW = MW(37485);
    let zR = !1;
    zR || (zR = !0, CW.b.GetCompatibleTextureLoader = wW.e)
  },
  37555: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => zR
    });
    var wW = MW(37433);
    let CW = !1;

    function zR() {
      CW || (CW = !0, wW.ThinEngine.prototype.setAlphaMode = function(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this._alphaMode[MW] === WW) {
          if (!RW) {
            const RW = 0 === WW;
            this.depthCullingState.depthMask !== RW && (this.depthCullingState.depthMask = RW)
          }
          return
        }
        const wW = 0 === WW;
        this._alphaState.setAlphaBlend(!wW, MW), this._alphaState.setAlphaMode(WW, MW), RW || (this.depthCullingState.depthMask = wW), this._alphaMode[MW] = WW
      })
    }
  },
  37566: (WW, RW, MW) => {
    var wW = MW(37424),
      CW = MW(36721),
      zR = MW(37433),
      AW = MW(37568),
      bR = MW(37533);
    class yR extends AW.e {
      setDepthStencilTexture(WW) {
        let RW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (super.setDepthStencilTexture(WW, RW), !WW) return;
        const MW = this._engine,
          wW = this._context,
          CW = WW._hardwareTexture;
        if (CW && WW._autoMSAAManagement && this._MSAAFramebuffer) {
          const RW = MW._currentFramebuffer;
          MW._bindUnboundFramebuffer(this._MSAAFramebuffer), wW.framebufferRenderbuffer(wW.FRAMEBUFFER, (0, bR.e)(WW.format) ? wW.DEPTH_STENCIL_ATTACHMENT : wW.DEPTH_ATTACHMENT, wW.RENDERBUFFER, CW.getMSAARenderBuffer()), MW._bindUnboundFramebuffer(RW)
        }
      }
      constructor(WW, RW, MW, wW, CW) {
        super(WW, RW, MW, wW), this._framebuffer = null, this._depthStencilBuffer = null, this._MSAAFramebuffer = null, this._colorTextureArray = null, this._depthStencilTextureArray = null, this._disposeOnlyFramebuffers = !1, this._currentLOD = 0, this._context = CW
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
          RW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          MW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          wW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          CW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          zR = arguments.length > 5 ? arguments[5] : void 0;
        if (this._depthStencilBuffer) {
          const WW = this._engine,
            RW = WW._currentFramebuffer,
            MW = this._context;
          WW._bindUnboundFramebuffer(this._framebuffer), MW.framebufferRenderbuffer(MW.FRAMEBUFFER, MW.DEPTH_STENCIL_ATTACHMENT, MW.RENDERBUFFER, null), MW.framebufferRenderbuffer(MW.FRAMEBUFFER, MW.DEPTH_ATTACHMENT, MW.RENDERBUFFER, null), MW.framebufferRenderbuffer(MW.FRAMEBUFFER, MW.STENCIL_ATTACHMENT, MW.RENDERBUFFER, null), WW._bindUnboundFramebuffer(RW), MW.deleteRenderbuffer(this._depthStencilBuffer), this._depthStencilBuffer = null
        }
        return super.createDepthStencilTexture(WW, RW, MW, wW, CW, zR)
      }
      shareDepth(WW) {
        super.shareDepth(WW);
        const RW = this._context,
          MW = this._depthStencilBuffer,
          wW = WW._MSAAFramebuffer || WW._framebuffer,
          CW = this._engine;
        WW._depthStencilBuffer && WW._depthStencilBuffer !== MW && RW.deleteRenderbuffer(WW._depthStencilBuffer), WW._depthStencilBuffer = MW;
        const zR = WW._generateStencilBuffer ? RW.DEPTH_STENCIL_ATTACHMENT : RW.DEPTH_ATTACHMENT;
        CW._bindUnboundFramebuffer(wW), RW.framebufferRenderbuffer(RW.FRAMEBUFFER, zR, RW.RENDERBUFFER, MW), CW._bindUnboundFramebuffer(null)
      }
      _bindTextureRenderTarget(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          MW = arguments.length > 2 ? arguments[2] : void 0,
          wW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const CW = WW._hardwareTexture;
        if (!CW) return;
        const zR = this._framebuffer,
          AW = this._engine,
          bR = AW._currentFramebuffer;
        let yR;
        if (AW._bindUnboundFramebuffer(zR), AW.Gs > 1) {
          const zR = this._context;
          yR = zR["COLOR_ATTACHMENT" + RW], WW.is2DArray || WW.is3D ? (MW = MW ?? this.layerIndices?.[RW] ?? 0, zR.framebufferTextureLayer(zR.FRAMEBUFFER, yR, CW.underlyingResource, wW, MW)) : WW.isCube ? (MW = MW ?? this.faceIndices?.[RW] ?? 0, zR.framebufferTexture2D(zR.FRAMEBUFFER, yR, zR.TEXTURE_CUBE_MAP_POSITIVE_X + MW, CW.underlyingResource, wW)) : zR.framebufferTexture2D(zR.FRAMEBUFFER, yR, zR.TEXTURE_2D, CW.underlyingResource, wW)
        } else {
          const WW = this._context;
          yR = WW["COLOR_ATTACHMENT" + RW + "_WEBGL"];
          const zR = void 0 !== MW ? WW.TEXTURE_CUBE_MAP_POSITIVE_X + MW : WW.TEXTURE_2D;
          WW.framebufferTexture2D(WW.FRAMEBUFFER, yR, zR, CW.underlyingResource, wW)
        }
        if (WW._autoMSAAManagement && this._MSAAFramebuffer) {
          const WW = this._context;
          AW._bindUnboundFramebuffer(this._MSAAFramebuffer), WW.framebufferRenderbuffer(WW.FRAMEBUFFER, yR, WW.RENDERBUFFER, CW.getMSAARenderBuffer())
        }
        AW._bindUnboundFramebuffer(bR)
      }
      setTexture(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          MW = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        super.setTexture(WW, RW, MW), this._bindTextureRenderTarget(WW, RW)
      }
      setLayerAndFaceIndices(WW, RW) {
        if (super.setLayerAndFaceIndices(WW, RW), !this.textures || !this.layerIndices || !this.faceIndices) return;
        const MW = this._attachments?.length ?? this.textures.length;
        for (let wW = 0; wW < MW; wW++) {
          const WW = this.textures[wW];
          WW && (WW.is2DArray || WW.is3D ? this._bindTextureRenderTarget(WW, wW, this.layerIndices[wW]) : WW.isCube ? this._bindTextureRenderTarget(WW, wW, this.faceIndices[wW]) : this._bindTextureRenderTarget(WW, wW))
        }
      }
      setLayerAndFaceIndex() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          RW = arguments.length > 1 ? arguments[1] : void 0,
          MW = arguments.length > 2 ? arguments[2] : void 0;
        if (super.setLayerAndFaceIndex(WW, RW, MW), !this.textures || !this.layerIndices || !this.faceIndices) return;
        const wW = this.textures[WW];
        wW.is2DArray || wW.is3D ? this._bindTextureRenderTarget(this.textures[WW], WW, this.layerIndices[WW]) : wW.isCube && this._bindTextureRenderTarget(this.textures[WW], WW, this.faceIndices[WW])
      }
      resolveMSAATextures() {
        const WW = this._engine,
          RW = WW._currentFramebuffer;
        WW._bindUnboundFramebuffer(this._MSAAFramebuffer), super.resolveMSAATextures(), WW._bindUnboundFramebuffer(RW)
      }
      dispose() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._disposeOnlyFramebuffers;
        const RW = this._context;
        WW || (this._colorTextureArray && (this._context.deleteTexture(this._colorTextureArray), this._colorTextureArray = null), this._depthStencilTextureArray && (this._context.deleteTexture(this._depthStencilTextureArray), this._depthStencilTextureArray = null)), this._framebuffer && (RW.deleteFramebuffer(this._framebuffer), this._framebuffer = null), this._depthStencilBuffer && (RW.deleteRenderbuffer(this._depthStencilBuffer), this._depthStencilBuffer = null), this._MSAAFramebuffer && (RW.deleteFramebuffer(this._MSAAFramebuffer), this._MSAAFramebuffer = null), super.dispose(WW)
      }
    }
    let NW = !1;
    NW || (NW = !0, zR.ThinEngine.prototype._createHardwareRenderTargetWrapper = function(WW, RW, MW) {
      const wW = new yR(WW, RW, MW, this, this._gl);
      return this._renderTargetWrapperCache.push(wW), wW
    }, zR.ThinEngine.prototype.createRenderTargetTexture = function(WW, RW) {
      const MW = this._createHardwareRenderTargetWrapper(!1, !1, WW);
      let wW, CW, zR = !0,
        AW = !1,
        bR = !1,
        yR = 1;
      void 0 !== RW && "object" === typeof RW && (zR = RW.generateDepthBuffer ?? !0, AW = !!RW.generateStencilBuffer, bR = !!RW.noColorAttachment, wW = RW.colorAttachment, yR = RW.samples ?? 1, CW = RW.label);
      const NW = wW || (bR ? null : this._createInternalTexture(WW, RW, !0, 5)),
        eW = WW.width || WW,
        BW = WW.height || WW,
        tR = this._currentFramebuffer,
        TW = this._gl,
        gR = TW.createFramebuffer();
      if (this._bindUnboundFramebuffer(gR), MW._depthStencilBuffer = this._setupFramebufferDepthAttachments(AW, zR, eW, BW), !NW || NW.is2DArray || NW.is3D || TW.framebufferTexture2D(TW.FRAMEBUFFER, TW.COLOR_ATTACHMENT0, TW.TEXTURE_2D, NW._hardwareTexture.underlyingResource, 0), this._bindUnboundFramebuffer(tR), MW.label = CW ?? "RenderTargetWrapper", MW._framebuffer = gR, MW._generateDepthBuffer = zR, MW._generateStencilBuffer = AW, MW.setTextures(NW), wW) {
        if (MW._samples = wW.samples, wW.samples > 1) {
          const WW = wW._hardwareTexture.getMSAARenderBuffer(0);
          MW._MSAAFramebuffer = TW.createFramebuffer(), this._bindUnboundFramebuffer(MW._MSAAFramebuffer), TW.framebufferRenderbuffer(TW.FRAMEBUFFER, TW.COLOR_ATTACHMENT0, TW.RENDERBUFFER, WW), this._bindUnboundFramebuffer(null)
        }
      } else this.updateRenderTargetTextureSampleCount(MW, yR);
      return MW
    }, zR.ThinEngine.prototype._createDepthStencilTexture = function(WW, RW, MW) {
      const zR = this._gl,
        AW = WW.layers || 0,
        yR = WW.depth || 0;
      let NW = zR.TEXTURE_2D;
      0 !== AW ? NW = zR.TEXTURE_2D_ARRAY : 0 !== yR && (NW = zR.TEXTURE_3D);
      const eW = new wW.e(this, 12);
      if (eW.label = RW.label, !this._caps.depthTextureExtension) return CW.b.Error("Depth texture is not supported by your browser or hardware."), eW;
      const BW = {
        bilinearFiltering: !1,
        comparisonFunction: 0,
        generateStencil: !1,
        ...RW
      };
      if (this._bindTextureDirectly(NW, eW, !0), this._setupDepthStencilTexture(eW, WW, 0 !== BW.comparisonFunction && BW.bilinearFiltering, BW.comparisonFunction, BW.samples), void 0 !== BW.depthTextureFormat) {
        if (15 !== BW.depthTextureFormat && 16 !== BW.depthTextureFormat && 17 !== BW.depthTextureFormat && 13 !== BW.depthTextureFormat && 14 !== BW.depthTextureFormat && 18 !== BW.depthTextureFormat) return CW.b.Error(`Depth texture ${BW.depthTextureFormat} format is not supported.`), eW;
        eW.format = BW.depthTextureFormat
      } else eW.format = BW.generateStencil ? 13 : 16;
      const tR = (0, bR.e)(eW.format),
        TW = this._getWebGLTextureTypeFromDepthTextureFormat(eW.format),
        gR = tR ? zR.DEPTH_STENCIL : zR.DEPTH_COMPONENT,
        iR = this._getInternalFormatFromDepthTextureFormat(eW.format, !0, tR);
      return eW.is2DArray ? zR.texImage3D(NW, 0, iR, eW.width, eW.height, AW, 0, gR, TW, null) : eW.is3D ? zR.texImage3D(NW, 0, iR, eW.width, eW.height, yR, 0, gR, TW, null) : zR.texImage2D(NW, 0, iR, eW.width, eW.height, 0, gR, TW, null), this._bindTextureDirectly(NW, null), this._internalTexturesCache.push(eW), MW._depthStencilBuffer && (zR.deleteRenderbuffer(MW._depthStencilBuffer), MW._depthStencilBuffer = null), this._bindUnboundFramebuffer(MW._MSAAFramebuffer ?? MW._framebuffer), MW._generateStencilBuffer = tR, MW._depthStencilTextureWithStencil = tR, MW._depthStencilBuffer = this._setupFramebufferDepthAttachments(MW._generateStencilBuffer, MW._generateDepthBuffer, MW.width, MW.height, MW.samples, eW.format), this._bindUnboundFramebuffer(null), eW
    }, zR.ThinEngine.prototype.updateRenderTargetTextureSampleCount = function(WW, RW) {
      if (this.Gs < 2 || !WW) return 1;
      if (WW.samples === RW) return RW;
      const MW = this._gl;
      RW = Math.min(RW, this.getCaps().maxMSAASamples), WW._depthStencilBuffer && (MW.deleteRenderbuffer(WW._depthStencilBuffer), WW._depthStencilBuffer = null), WW._MSAAFramebuffer && (MW.deleteFramebuffer(WW._MSAAFramebuffer), WW._MSAAFramebuffer = null);
      const wW = WW.texture?._hardwareTexture;
      if (wW?.releaseMSAARenderBuffers(), WW.texture && RW > 1 && "function" === typeof MW.renderbufferStorageMultisample) {
        const CW = MW.createFramebuffer();
        if (!CW) throw new Error("Unable to create multi sampled framebuffer");
        WW._MSAAFramebuffer = CW, this._bindUnboundFramebuffer(WW._MSAAFramebuffer);
        const zR = this._createRenderBuffer(WW.texture.width, WW.texture.height, RW, -1, this._getRGBABufferInternalSizedFormat(WW.texture.type, WW.texture.format, WW.texture._useSRGBBuffer), MW.COLOR_ATTACHMENT0, !1);
        if (!zR) throw new Error("Unable to create multi sampled framebuffer");
        wW?.addMSAARenderBuffer(zR)
      }
      this._bindUnboundFramebuffer(WW._MSAAFramebuffer ?? WW._framebuffer), WW.texture && (WW.texture.samples = RW), WW._samples = RW;
      const CW = WW._depthStencilTexture ? WW._depthStencilTexture.format : void 0;
      return WW._depthStencilBuffer = this._setupFramebufferDepthAttachments(WW._generateStencilBuffer, WW._generateDepthBuffer, WW.width, WW.height, RW, CW), this._bindUnboundFramebuffer(null), RW
    }, zR.ThinEngine.prototype._setupDepthStencilTexture = function(WW, RW, MW, wW) {
      let CW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1;
      const zR = RW.width ?? RW,
        AW = RW.height ?? RW,
        bR = RW.layers || 0,
        yR = RW.depth || 0;
      WW.baseWidth = zR, WW.baseHeight = AW, WW.width = zR, WW.height = AW, WW.is2DArray = bR > 0, WW.depth = bR || yR, WW.isReady = !0, WW.samples = CW, WW.generateMipMaps = !1, WW.samplingMode = MW ? 2 : 1, WW.type = 0, WW._comparisonFunction = wW;
      const NW = this._gl,
        eW = this._getTextureTarget(WW),
        BW = this._getSamplingParameters(WW.samplingMode, !1);
      NW.texParameteri(eW, NW.TEXTURE_MAG_FILTER, BW.mag), NW.texParameteri(eW, NW.TEXTURE_MIN_FILTER, BW.min), NW.texParameteri(eW, NW.TEXTURE_WRAP_S, NW.CLAMP_TO_EDGE), NW.texParameteri(eW, NW.TEXTURE_WRAP_T, NW.CLAMP_TO_EDGE), this.Gs > 1 && (0 === wW ? (NW.texParameteri(eW, NW.TEXTURE_COMPARE_FUNC, 515), NW.texParameteri(eW, NW.TEXTURE_COMPARE_MODE, NW.NONE)) : (NW.texParameteri(eW, NW.TEXTURE_COMPARE_FUNC, wW), NW.texParameteri(eW, NW.TEXTURE_COMPARE_MODE, NW.COMPARE_REF_TO_TEXTURE)))
    })
  },
  37418: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => wW.c
    });
    var wW = MW(37421);
    (0, MW(37555).e)();
    var CW = MW(37433);
    let zR = !1;
    ! function() {
      if (zR) return;
      zR = !0;
      const WW = new WeakMap,
        RW = new WeakMap,
        MW = new WeakMap,
        wW = new WeakMap;
      CW.ThinEngine.prototype.getAlphaToCoverage = function() {
        return WW.get(this) ?? !1
      }, CW.ThinEngine.prototype.setAlphaToCoverage = function(MW) {
        (WW.get(this) !== MW || this._gl && RW.get(this) !== this._gl) && (WW.set(this, MW), this._gl && (MW ? this._gl.enable(this._gl.SAMPLE_ALPHA_TO_COVERAGE) : this._gl.disable(this._gl.SAMPLE_ALPHA_TO_COVERAGE), RW.set(this, this._gl)))
      }, Object.defineProperty(CW.ThinEngine.prototype, "currentSampleCount", {
        get: function() {
          return this._currentRenderTarget ? this._currentRenderTarget.samples : this._gl ? (wW.get(this) !== this._gl && (MW.set(this, this._gl.getContextAttributes()?.antialias ? Math.max(1, this._gl.getParameter(this._gl.SAMPLES)) : 1), wW.set(this, this._gl)), MW.get(this)) : 1
        },
        enumerable: !1,
        configurable: !0
      })
    }();
    var AW = MW(37424),
      bR = MW(36721),
      yR = MW(37520);
    let NW = !1;
    ! function() {
      function WW(WW, RW, MW, wW) {
        let CW, zR = 1;
        1 === wW ? CW = new Float32Array(RW * MW * 4) : 2 === wW ? (CW = new Uint16Array(RW * MW * 4), zR = 15360) : CW = 7 === wW ? new Uint32Array(RW * MW * 4) : new Uint8Array(RW * MW * 4);
        for (let AW = 0; AW < RW; AW++)
          for (let wW = 0; wW < MW; wW++) {
            const MW = 3 * (wW * RW + AW),
              bR = 4 * (wW * RW + AW);
            CW[bR + 0] = WW[MW + 0], CW[bR + 1] = WW[MW + 1], CW[bR + 2] = WW[MW + 2], CW[bR + 3] = zR
          }
        return CW
      }

      function RW(WW) {
        return function(RW, MW, wW, CW, zR, bR, yR, NW) {
          let eW = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
            BW = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
          const tR = WW ? this._gl.TEXTURE_3D : this._gl.TEXTURE_2D_ARRAY,
            TW = WW ? 10 : 11,
            gR = new AW.e(this, TW);
          gR.baseWidth = MW, gR.baseHeight = wW, gR.baseDepth = CW, gR.width = MW, gR.height = wW, gR.depth = CW, gR.format = zR, gR.type = BW, gR.generateMipMaps = bR, gR.samplingMode = NW, WW ? gR.is3D = !0 : gR.is2DArray = !0, this._doNotHandleContextLost || (gR._bufferView = RW), WW ? this.updateRawTexture3D(gR, RW, zR, yR, eW, BW) : this.updateRawTexture2DArray(gR, RW, zR, yR, eW, BW), this._bindTextureDirectly(tR, gR, !0);
          const iR = this._getSamplingParameters(NW, bR);
          return this._gl.texParameteri(tR, this._gl.TEXTURE_MAG_FILTER, iR.mag), this._gl.texParameteri(tR, this._gl.TEXTURE_MIN_FILTER, iR.min), bR && this._gl.generateMipmap(tR), this._bindTextureDirectly(tR, null), this._internalTexturesCache.push(gR), gR
        }
      }

      function MW(WW) {
        return function(RW, MW, wW, CW) {
          let zR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            AW = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
          const bR = WW ? this._gl.TEXTURE_3D : this._gl.TEXTURE_2D_ARRAY,
            yR = this._getWebGLTextureType(AW),
            NW = this._getInternalFormat(wW),
            eW = this._getRGBABufferInternalSizedFormat(AW, wW);
          this._bindTextureDirectly(bR, RW, !0), this._unpackFlipY(void 0 === CW || !!CW), this._doNotHandleContextLost || (RW._bufferView = MW, RW.format = wW, RW.invertY = CW, RW._compression = zR), RW.width % 4 !== 0 && this._gl.pixelStorei(this._gl.UNPACK_ALIGNMENT, 1), zR && MW ? this._gl.compressedTexImage3D(bR, 0, this.getCaps().s3tc[zR], RW.width, RW.height, RW.depth, 0, MW) : this._gl.texImage3D(bR, 0, eW, RW.width, RW.height, RW.depth, 0, NW, yR, MW), RW.generateMipMaps && this._gl.generateMipmap(bR), this._bindTextureDirectly(bR, null), RW.isReady = !0
        }
      }
      NW || (NW = !0, CW.ThinEngine.prototype.updateRawTexture = function(WW, RW, MW, wW) {
        let CW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          zR = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          AW = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        if (!WW) return;
        const bR = this._getRGBABufferInternalSizedFormat(zR, MW, AW),
          yR = this._getInternalFormat(MW),
          NW = this._getWebGLTextureType(zR);
        this._bindTextureDirectly(this._gl.TEXTURE_2D, WW, !0), this._unpackFlipY(void 0 === wW || !!wW), this._doNotHandleContextLost || (WW._bufferView = RW, WW.format = MW, WW.type = zR, WW.invertY = wW, WW._compression = CW), WW.width % 4 !== 0 && this._gl.pixelStorei(this._gl.UNPACK_ALIGNMENT, 1), CW && RW ? this._gl.compressedTexImage2D(this._gl.TEXTURE_2D, 0, this.getCaps().s3tc[CW], WW.width, WW.height, 0, RW) : this._gl.texImage2D(this._gl.TEXTURE_2D, 0, bR, WW.width, WW.height, 0, yR, NW, RW), WW.generateMipMaps && this._gl.generateMipmap(this._gl.TEXTURE_2D), this._bindTextureDirectly(this._gl.TEXTURE_2D, null), WW.isReady = !0
      }, CW.ThinEngine.prototype.createRawTexture = function(WW, RW, MW, wW, CW, zR, bR) {
        let yR = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          NW = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
          eW = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const BW = new AW.e(this, 3);
        BW.baseWidth = RW, BW.baseHeight = MW, BW.width = RW, BW.height = MW, BW.format = wW, BW.generateMipMaps = CW, BW.samplingMode = bR, BW.invertY = zR, BW._compression = yR, BW.type = NW, BW._useSRGBBuffer = this._getUseSRGBBuffer(eW, !CW), this._doNotHandleContextLost || (BW._bufferView = WW), this.updateRawTexture(BW, WW, wW, zR, yR, NW, BW._useSRGBBuffer), this._bindTextureDirectly(this._gl.TEXTURE_2D, BW, !0);
        const tR = this._getSamplingParameters(bR, CW);
        return this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MAG_FILTER, tR.mag), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MIN_FILTER, tR.min), CW && this._gl.generateMipmap(this._gl.TEXTURE_2D), this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._internalTexturesCache.push(BW), BW
      }, CW.ThinEngine.prototype.createRawCubeTexture = function(WW, RW, MW, wW, CW, zR, NW) {
        let eW = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null;
        const BW = this._gl,
          tR = new AW.e(this, 8);
        tR.isCube = !0, tR.format = MW, tR.type = wW, this._doNotHandleContextLost || (tR._bufferViewArray = WW);
        const TW = this._getWebGLTextureType(wW);
        let gR = this._getInternalFormat(MW);
        gR === BW.RGB && (gR = BW.RGBA), TW !== BW.FLOAT || this._caps.textureFloatLinearFiltering ? TW !== this._gl.HALF_FLOAT_OES || this._caps.textureHalfFloatLinearFiltering ? TW !== BW.FLOAT || this._caps.textureFloatRender ? TW !== BW.HALF_FLOAT || this._caps.colorBufferFloat || (CW = !1, bR.b.Warn("Render to half float textures is not supported. Mipmap generation forced to false.")) : (CW = !1, bR.b.Warn("Render to float textures is not supported. Mipmap generation forced to false.")) : (CW = !1, NW = 1, bR.b.Warn("Half float texture filtering is not supported. Mipmap generation and sampling mode are forced to false and TEXTURE_NEAREST_SAMPLINGMODE, respectively.")) : (CW = !1, NW = 1, bR.b.Warn("Float texture filtering is not supported. Mipmap generation and sampling mode are forced to false and TEXTURE_NEAREST_SAMPLINGMODE, respectively."));
        const iR = RW,
          YW = iR;
        tR.width = iR, tR.height = YW, tR.invertY = zR, tR._compression = eW;
        if (!this.needPOTTextures || (0, yR.f)(tR.width) && (0, yR.f)(tR.height) || (CW = !1), WW) this.updateRawCubeTexture(tR, WW, MW, wW, zR, eW);
        else {
          const WW = this._getRGBABufferInternalSizedFormat(wW),
            RW = 0;
          this._bindTextureDirectly(BW.TEXTURE_CUBE_MAP, tR, !0);
          for (let MW = 0; MW < 6; MW++) eW ? BW.compressedTexImage2D(BW.TEXTURE_CUBE_MAP_POSITIVE_X + MW, RW, this.getCaps().s3tc[eW], tR.width, tR.height, 0, void 0) : BW.texImage2D(BW.TEXTURE_CUBE_MAP_POSITIVE_X + MW, RW, WW, tR.width, tR.height, 0, gR, TW, null);
          this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null)
        }
        this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, tR, !0), WW && CW && this._gl.generateMipmap(this._gl.TEXTURE_CUBE_MAP);
        const JW = this._getSamplingParameters(NW, CW);
        return BW.texParameteri(BW.TEXTURE_CUBE_MAP, BW.TEXTURE_MAG_FILTER, JW.mag), BW.texParameteri(BW.TEXTURE_CUBE_MAP, BW.TEXTURE_MIN_FILTER, JW.min), BW.texParameteri(BW.TEXTURE_CUBE_MAP, BW.TEXTURE_WRAP_S, BW.CLAMP_TO_EDGE), BW.texParameteri(BW.TEXTURE_CUBE_MAP, BW.TEXTURE_WRAP_T, BW.CLAMP_TO_EDGE), this._bindTextureDirectly(BW.TEXTURE_CUBE_MAP, null), tR.generateMipMaps = CW, tR.samplingMode = NW, tR.isReady = !0, tR
      }, CW.ThinEngine.prototype.updateRawCubeTexture = function(RW, MW, wW, CW, zR) {
        let AW = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          bR = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        RW._bufferViewArray = MW, RW.format = wW, RW.type = CW, RW.invertY = zR, RW._compression = AW;
        const NW = this._gl,
          eW = this._getWebGLTextureType(CW);
        let BW = this._getInternalFormat(wW);
        const tR = this._getRGBABufferInternalSizedFormat(CW);
        let TW = !1;
        BW === NW.RGB && (BW = NW.RGBA, TW = !0), this._bindTextureDirectly(NW.TEXTURE_CUBE_MAP, RW, !0), this._unpackFlipY(void 0 === zR || !!zR), RW.width % 4 !== 0 && NW.pixelStorei(NW.UNPACK_ALIGNMENT, 1);
        for (let yR = 0; yR < 6; yR++) {
          let wW = MW[yR];
          AW ? NW.compressedTexImage2D(NW.TEXTURE_CUBE_MAP_POSITIVE_X + yR, bR, this.getCaps().s3tc[AW], RW.width, RW.height, 0, wW) : (TW && (wW = WW(wW, RW.width, RW.height, CW)), NW.texImage2D(NW.TEXTURE_CUBE_MAP_POSITIVE_X + yR, bR, tR, RW.width, RW.height, 0, BW, eW, wW))
        }(!this.needPOTTextures || (0, yR.f)(RW.width) && (0, yR.f)(RW.height)) && RW.generateMipMaps && 0 === bR && this._gl.generateMipmap(this._gl.TEXTURE_CUBE_MAP), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), RW.isReady = !0
      }, CW.ThinEngine.prototype.createRawCubeTextureFromUrl = function(RW, MW, wW, CW, zR, AW, bR, yR) {
        let NW = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          eW = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          BW = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 3,
          tR = arguments.length > 11 && void 0 !== arguments[11] && arguments[11];
        const TW = this._gl,
          gR = this.createRawCubeTexture(null, wW, CW, zR, !AW, tR, BW, null);
        MW?.addPendingData(gR), gR.url = RW, gR.isReady = !1, this._internalTexturesCache.push(gR);
        const iR = (WW, RW) => {
            MW?.removePendingData(gR), eW && eW(WW ? WW.status + " " + WW.statusText : "Failed to parse texture data", RW)
          },
          YW = async RW => {
            if (!gR._hardwareTexture) return;
            const wW = bR(RW);
            if (!wW) return;
            const AW = wW instanceof Promise ? await wW : wW,
              eW = gR.width;
            if (yR) {
              const RW = this._getWebGLTextureType(zR);
              let MW = this._getInternalFormat(CW);
              const wW = this._getRGBABufferInternalSizedFormat(zR);
              let bR = !1;
              MW === TW.RGB && (MW = TW.RGBA, bR = !0), this._bindTextureDirectly(TW.TEXTURE_CUBE_MAP, gR, !0), this._unpackFlipY(!1);
              const NW = yR(AW);
              for (let CW = 0; CW < NW.length; CW++) {
                const AW = eW >> CW;
                for (let yR = 0; yR < 6; yR++) {
                  let eW = NW[CW][yR];
                  bR && (eW = WW(eW, AW, AW, zR)), TW.texImage2D(yR, CW, wW, AW, AW, 0, MW, RW, eW)
                }
              }
              this._bindTextureDirectly(TW.TEXTURE_CUBE_MAP, null)
            } else this.updateRawCubeTexture(gR, AW, CW, zR, tR);
            gR.isReady = !0, MW?.removePendingData(gR), gR.onLoadedObservable.notifyObservers(gR), gR.onLoadedObservable.clear(), NW && NW()
          };
        return this._loadFile(RW, (WW => {
          YW(WW).catch((WW => {
            iR(void 0, WW)
          }))
        }), void 0, MW?.offlineProvider, !0, iR), gR
      }, CW.ThinEngine.prototype.createRawTexture2DArray = RW(!1), CW.ThinEngine.prototype.createRawTexture3D = RW(!0), CW.ThinEngine.prototype.updateRawTexture2DArray = MW(!1), CW.ThinEngine.prototype.updateRawTexture3D = MW(!0))
    }();
    var eW = MW(37465);
    let BW = !1;
    BW || (BW = !0, CW.ThinEngine.prototype._readTexturePixelsSync = function(WW, RW, MW) {
      let wW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1,
        CW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        zR = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        AW = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
        bR = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        yR = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
        NW = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
      const BW = this._gl;
      if (!BW) throw new Error("Engine does not have gl rendering context.");
      if (!this._dummyFramebuffer) {
        const WW = BW.createFramebuffer();
        if (!WW) throw new Error("Unable to create dummy framebuffer");
        this._dummyFramebuffer = WW
      }
      BW.bindFramebuffer(BW.FRAMEBUFFER, this._dummyFramebuffer), wW > -1 && (WW.is2DArray || WW.is3D) ? BW.framebufferTextureLayer(BW.FRAMEBUFFER, BW.COLOR_ATTACHMENT0, WW._hardwareTexture?.underlyingResource, CW, wW) : wW > -1 ? BW.framebufferTexture2D(BW.FRAMEBUFFER, BW.COLOR_ATTACHMENT0, BW.TEXTURE_CUBE_MAP_POSITIVE_X + wW, WW._hardwareTexture?.underlyingResource, CW) : BW.framebufferTexture2D(BW.FRAMEBUFFER, BW.COLOR_ATTACHMENT0, BW.TEXTURE_2D, WW._hardwareTexture?.underlyingResource, CW);
      let tR = void 0 !== WW.type ? this._getWebGLTextureType(WW.type) : BW.UNSIGNED_BYTE;
      return bR ? zR || (zR = (0, eW.l)(WW.type, 4 * RW * MW)) : tR === BW.UNSIGNED_BYTE ? (zR || (zR = new Uint8Array(4 * RW * MW)), tR = BW.UNSIGNED_BYTE) : (zR || (zR = new Float32Array(4 * RW * MW)), tR = BW.FLOAT), AW && this.flushFramebuffer(), BW.readPixels(yR, NW, RW, MW, BW.RGBA, tR, zR), BW.bindFramebuffer(BW.FRAMEBUFFER, this._currentFramebuffer), zR
    }, CW.ThinEngine.prototype._readTexturePixels = function(WW, RW, MW) {
      let wW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1,
        CW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        zR = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        AW = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
        bR = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        yR = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
        NW = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
      return Promise.resolve(this._readTexturePixelsSync(WW, RW, MW, wW, CW, zR, AW, bR, yR, NW))
    }), (0, MW(37557).c)();
    let tR = !1;
    tR || (tR = !0, CW.ThinEngine.prototype._createDepthStencilCubeTexture = function(WW, RW) {
      const MW = new AW.e(this, 12);
      if (MW.isCube = !0, 1 === this.Gs) return bR.b.Error("Depth cube texture is not supported by WebGL 1."), MW;
      const wW = {
          bilinearFiltering: !1,
          comparisonFunction: 0,
          generateStencil: !1,
          ...RW
        },
        CW = this._gl;
      this._bindTextureDirectly(CW.TEXTURE_CUBE_MAP, MW, !0), this._setupDepthStencilTexture(MW, WW, wW.bilinearFiltering, wW.comparisonFunction);
      for (let zR = 0; zR < 6; zR++) wW.generateStencil ? CW.texImage2D(CW.TEXTURE_CUBE_MAP_POSITIVE_X + zR, 0, CW.DEPTH24_STENCIL8, WW, WW, 0, CW.DEPTH_STENCIL, CW.UNSIGNED_INT_24_8, null) : CW.texImage2D(CW.TEXTURE_CUBE_MAP_POSITIVE_X + zR, 0, CW.DEPTH_COMPONENT24, WW, WW, 0, CW.DEPTH_COMPONENT, CW.UNSIGNED_INT, null);
      return this._bindTextureDirectly(CW.TEXTURE_CUBE_MAP, null), this._internalTexturesCache.push(MW), MW
    }, CW.ThinEngine.prototype._setCubeMapTextureParams = function(WW, RW, MW) {
      const wW = this._gl;
      wW.texParameteri(wW.TEXTURE_CUBE_MAP, wW.TEXTURE_MAG_FILTER, wW.LINEAR), wW.texParameteri(wW.TEXTURE_CUBE_MAP, wW.TEXTURE_MIN_FILTER, RW ? wW.LINEAR_MIPMAP_LINEAR : wW.LINEAR), wW.texParameteri(wW.TEXTURE_CUBE_MAP, wW.TEXTURE_WRAP_S, wW.CLAMP_TO_EDGE), wW.texParameteri(wW.TEXTURE_CUBE_MAP, wW.TEXTURE_WRAP_T, wW.CLAMP_TO_EDGE), WW.samplingMode = RW ? 3 : 2, RW && this.getCaps().textureMaxLevel && void 0 !== MW && MW > 0 && (wW.texParameteri(wW.TEXTURE_CUBE_MAP, wW.TEXTURE_MAX_LEVEL, MW), WW._maxLodLevel = MW), this._bindTextureDirectly(wW.TEXTURE_CUBE_MAP, null)
    }, CW.ThinEngine.prototype.createCubeTexture = function(WW, RW, MW, wW) {
      let CW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        zR = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        AW = arguments.length > 6 ? arguments[6] : void 0,
        NW = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        eW = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        BW = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
        tR = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
        TW = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
        gR = arguments.length > 13 && void 0 !== arguments[13] && arguments[13],
        iR = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : null;
      const YW = this._gl;
      return this.createCubeTextureBase(WW, RW, MW, !!wW, CW, zR, AW, NW, eW, BW, tR, TW, (WW => this._bindTextureDirectly(YW.TEXTURE_CUBE_MAP, WW, !0)), ((WW, RW) => {
        const MW = this.needPOTTextures ? (0, yR.e)(RW[0].width, this._caps.maxCubemapTextureSize) : RW[0].width,
          zR = MW,
          NW = [YW.TEXTURE_CUBE_MAP_POSITIVE_X, YW.TEXTURE_CUBE_MAP_POSITIVE_Y, YW.TEXTURE_CUBE_MAP_POSITIVE_Z, YW.TEXTURE_CUBE_MAP_NEGATIVE_X, YW.TEXTURE_CUBE_MAP_NEGATIVE_Y, YW.TEXTURE_CUBE_MAP_NEGATIVE_Z];
        this._bindTextureDirectly(YW.TEXTURE_CUBE_MAP, WW, !0), this._unpackFlipY(!1);
        const eW = AW ? this._getInternalFormat(AW, WW._useSRGBBuffer) : WW._useSRGBBuffer ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : YW.RGBA;
        let BW = AW ? this._getInternalFormat(AW) : YW.RGBA;
        WW._useSRGBBuffer && 1 === this.Gs && (BW = eW);
        for (let wW = 0; wW < NW.length; wW++)
          if (RW[wW].width !== MW || RW[wW].height !== zR) {
            if (this._prepareWorkingCanvas(), !this._workingCanvas || !this._workingContext) return void bR.b.Warn("Cannot create canvas to resize texture.");
            this._workingCanvas.width = MW, this._workingCanvas.height = zR, this._workingContext.drawImage(RW[wW], 0, 0, RW[wW].width, RW[wW].height, 0, 0, MW, zR), YW.texImage2D(NW[wW], 0, eW, BW, YW.UNSIGNED_BYTE, this._workingCanvas)
          } else YW.texImage2D(NW[wW], 0, eW, BW, YW.UNSIGNED_BYTE, RW[wW]);
        wW || YW.generateMipmap(YW.TEXTURE_CUBE_MAP), this._setCubeMapTextureParams(WW, !wW), WW.width = MW, WW.height = zR, WW.isReady = !0, AW && (WW.format = AW), WW.onLoadedObservable.notifyObservers(WW), WW.onLoadedObservable.clear(), CW && CW()
      }), !!gR, iR)
    }, CW.ThinEngine.prototype.generateMipMapsForCubemap = function(WW) {
      let RW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (WW.generateMipMaps) {
        const MW = this._gl;
        this._bindTextureDirectly(MW.TEXTURE_CUBE_MAP, WW, !0), MW.generateMipmap(MW.TEXTURE_CUBE_MAP), RW && this._bindTextureDirectly(MW.TEXTURE_CUBE_MAP, null)
      }
    });
    MW(37566);
    let TW = !1;
    TW || (TW = !0, CW.ThinEngine.prototype.setDepthStencilTexture = function(WW, RW, MW, wW) {
      void 0 !== WW && (RW && (this._boundUniforms[WW] = RW), MW && MW.depthStencilTexture ? this._setTexture(WW, MW, !1, !0, wW) : this._setTexture(WW, null, void 0, void 0, wW))
    });
    let gR = !1;
    gR || (gR = !0, CW.ThinEngine.prototype.createRenderTargetCubeTexture = function(WW, RW) {
      const MW = this._createHardwareRenderTargetWrapper(!1, !0, WW),
        wW = {
          generateMipMaps: !0,
          generateDepthBuffer: !0,
          generateStencilBuffer: !1,
          type: 0,
          samplingMode: 3,
          format: 5,
          ...RW
        };
      wW.generateStencilBuffer = wW.generateDepthBuffer && wW.generateStencilBuffer, (1 !== wW.type || this._caps.textureFloatLinearFiltering) && (2 !== wW.type || this._caps.textureHalfFloatLinearFiltering) || (wW.samplingMode = 1);
      const CW = this._gl,
        zR = new AW.e(this, 5);
      this._bindTextureDirectly(CW.TEXTURE_CUBE_MAP, zR, !0);
      const yR = this._getSamplingParameters(wW.samplingMode, wW.generateMipMaps);
      1 !== wW.type || this._caps.textureFloat || (wW.type = 0, bR.b.Warn("Float textures are not supported. Cube render target forced to TEXTURETYPE_UNESIGNED_BYTE type")), CW.texParameteri(CW.TEXTURE_CUBE_MAP, CW.TEXTURE_MAG_FILTER, yR.mag), CW.texParameteri(CW.TEXTURE_CUBE_MAP, CW.TEXTURE_MIN_FILTER, yR.min), CW.texParameteri(CW.TEXTURE_CUBE_MAP, CW.TEXTURE_WRAP_S, CW.CLAMP_TO_EDGE), CW.texParameteri(CW.TEXTURE_CUBE_MAP, CW.TEXTURE_WRAP_T, CW.CLAMP_TO_EDGE);
      for (let AW = 0; AW < 6; AW++) CW.texImage2D(CW.TEXTURE_CUBE_MAP_POSITIVE_X + AW, 0, this._getRGBABufferInternalSizedFormat(wW.type, wW.format), WW, WW, 0, this._getInternalFormat(wW.format), this._getWebGLTextureType(wW.type), null);
      const NW = CW.createFramebuffer();
      return this._bindUnboundFramebuffer(NW), MW._depthStencilBuffer = this._setupFramebufferDepthAttachments(wW.generateStencilBuffer, wW.generateDepthBuffer, WW, WW), wW.generateMipMaps && CW.generateMipmap(CW.TEXTURE_CUBE_MAP), this._bindTextureDirectly(CW.TEXTURE_CUBE_MAP, null), this._bindUnboundFramebuffer(null), MW._framebuffer = NW, MW._generateDepthBuffer = wW.generateDepthBuffer, MW._generateStencilBuffer = wW.generateStencilBuffer, zR.width = WW, zR.height = WW, zR.isReady = !0, zR.isCube = !0, zR.samples = 1, zR.generateMipMaps = wW.generateMipMaps, zR.samplingMode = wW.samplingMode, zR.type = wW.type, zR.format = wW.format, this._internalTexturesCache.push(zR), MW.setTextures(zR), MW
    });
    var iR = MW(37574),
      YW = MW(37579);
    let JW = !1;
    JW || (JW = !0, CW.ThinEngine.prototype.createPrefilteredCubeTexture = function(WW, RW, wW, CW) {
      let zR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        yR = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        NW = arguments.length > 6 ? arguments[6] : void 0,
        eW = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        BW = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
        tR = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null;
      return this.createCubeTexture(WW, RW, null, !1, (async WW => {
        if (!WW) return void(zR && zR(null));
        const yR = WW.texture;
        if (BW ? WW.info.sphericalPolynomial && (yR._sphericalPolynomial = WW.info.sphericalPolynomial) : yR._sphericalPolynomial = yR._sphericalPolynomial ?? new iR.d, yR._source = 9, this.getCaps().textureLOD) return void(zR && zR(yR));
        const NW = this._gl,
          eW = WW.width;
        if (!eW) return;
        const {
          DDSTools: tR
        } = await MW.e(276).then((() => MW(39220))), TW = [];
        for (let MW = 0; MW < 3; MW++) {
          const zR = 1 - MW / 2,
            BW = CW,
            gR = Math.log2(eW) * wW + CW,
            iR = BW + (gR - BW) * zR,
            JW = Math.round(Math.min(Math.max(iR, 0), gR)),
            PW = new AW.e(this, 2);
          if (PW.type = yR.type, PW.format = yR.format, PW.width = Math.pow(2, Math.max(Math.log2(eW) - JW, 0)), PW.height = PW.width, PW.isCube = !0, PW._cachedWrapU = 0, PW._cachedWrapV = 0, this._bindTextureDirectly(NW.TEXTURE_CUBE_MAP, PW, !0), PW.samplingMode = 2, NW.texParameteri(NW.TEXTURE_CUBE_MAP, NW.TEXTURE_MAG_FILTER, NW.LINEAR), NW.texParameteri(NW.TEXTURE_CUBE_MAP, NW.TEXTURE_MIN_FILTER, NW.LINEAR), NW.texParameteri(NW.TEXTURE_CUBE_MAP, NW.TEXTURE_WRAP_S, NW.CLAMP_TO_EDGE), NW.texParameteri(NW.TEXTURE_CUBE_MAP, NW.TEXTURE_WRAP_T, NW.CLAMP_TO_EDGE), WW.isDDS) {
            const RW = WW.info,
              MW = WW.data;
            this._unpackFlipY(RW.isCompressed), tR.UploadDDSLevels(this, PW, MW, RW, !0, 6, JW)
          } else bR.b.Warn("DDS is the only prefiltered cube map supported so far.");
          this._bindTextureDirectly(NW.TEXTURE_CUBE_MAP, null);
          const IW = new YW.c(RW);
          IW._isCube = !0, IW._texture = PW, PW.isReady = !0, TW.push(IW)
        }
        yR._lodTextureHigh = TW[2], yR._lodTextureMid = TW[1], yR._lodTextureLow = TW[0], zR && zR(yR)
      }), yR, NW, eW, BW, wW, CW, null, void 0, !1, tR)
    });
    var PW = MW(37509);
    let IW = !1;
    IW || (IW = !0, CW.ThinEngine.prototype.createUniformBuffer = function(WW, RW) {
      const MW = this._gl.createBuffer();
      if (!MW) throw new Error("Unable to create uniform buffer");
      const wW = new PW.c(MW);
      return this.bindUniformBuffer(wW), WW instanceof Float32Array ? this._gl.bufferData(this._gl.UNIFORM_BUFFER, WW, this._gl.STATIC_DRAW) : this._gl.bufferData(this._gl.UNIFORM_BUFFER, new Float32Array(WW), this._gl.STATIC_DRAW), this.bindUniformBuffer(null), wW.references = 1, wW
    }, CW.ThinEngine.prototype.createDynamicUniformBuffer = function(WW, RW) {
      const MW = this._gl.createBuffer();
      if (!MW) throw new Error("Unable to create dynamic uniform buffer");
      const wW = new PW.c(MW);
      return this.bindUniformBuffer(wW), WW instanceof Float32Array ? this._gl.bufferData(this._gl.UNIFORM_BUFFER, WW, this._gl.DYNAMIC_DRAW) : this._gl.bufferData(this._gl.UNIFORM_BUFFER, new Float32Array(WW), this._gl.DYNAMIC_DRAW), this.bindUniformBuffer(null), wW.references = 1, wW
    }, CW.ThinEngine.prototype.updateUniformBuffer = function(WW, RW, MW, wW) {
      this.bindUniformBuffer(WW), void 0 === MW && (MW = 0), void 0 === wW ? RW instanceof Float32Array ? this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, MW, RW) : this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, MW, new Float32Array(RW)) : RW instanceof Float32Array ? this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, 0, RW.subarray(MW, MW + wW)) : this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, 0, new Float32Array(RW).subarray(MW, MW + wW)), this.bindUniformBuffer(null)
    }, CW.ThinEngine.prototype.bindUniformBuffer = function(WW) {
      this._gl.bindBuffer(this._gl.UNIFORM_BUFFER, WW ? WW.underlyingResource : null)
    }, CW.ThinEngine.prototype.bindUniformBufferBase = function(WW, RW, MW) {
      this._gl.bindBufferBase(this._gl.UNIFORM_BUFFER, RW, WW ? WW.underlyingResource : null)
    }, CW.ThinEngine.prototype.bindUniformBlock = function(WW, RW, MW) {
      const wW = WW.program,
        CW = this._gl.getUniformBlockIndex(wW, RW);
      4294967295 !== CW && this._gl.uniformBlockBinding(wW, CW, MW)
    });
    var oW = MW(37456),
      lW = MW(37485);
    let FW = !1;
    FW || (FW = !0, lW.b.prototype.displayLoadingUI = function() {
      if (!(0, oW.m)()) return;
      const WW = this.loadingScreen;
      WW && WW.displayLoadingUI()
    }, lW.b.prototype.hideLoadingUI = function() {
      if (!(0, oW.m)()) return;
      const WW = this._loadingScreen;
      WW && WW.hideLoadingUI()
    }, Object.defineProperty(lW.b.prototype, "loadingScreen", {
      get: function() {
        return !this._loadingScreen && this._renderingCanvas && (this._loadingScreen = lW.b.DefaultLoadingScreenFactory(this._renderingCanvas)), this._loadingScreen
      },
      set: function(WW) {
        this._loadingScreen = WW
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(lW.b.prototype, "loadingUIText", {
      set: function(WW) {
        this.loadingScreen.loadingUIText = WW
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(lW.b.prototype, "loadingUIBackgroundColor", {
      set: function(WW) {
        this.loadingScreen.loadingUIBackgroundColor = WW
      },
      enumerable: !0,
      configurable: !0
    })), (0, MW(37544).b)();
    let fW = !1;
    fW || (fW = !0, lW.b.prototype.getInputElement = function() {
      return this._renderingCanvas
    }, lW.b.prototype.getDepthFunction = function() {
      return this._depthCullingState.depthFunc
    }, lW.b.prototype.setDepthFunction = function(WW) {
      this._depthCullingState.depthFunc = WW
    }, lW.b.prototype.setDepthFunctionToGreater = function() {
      this.setDepthFunction(516)
    }, lW.b.prototype.setDepthFunctionToGreaterOrEqual = function() {
      this.setDepthFunction(518)
    }, lW.b.prototype.setDepthFunctionToLess = function() {
      this.setDepthFunction(513)
    }, lW.b.prototype.setDepthFunctionToLessOrEqual = function() {
      this.setDepthFunction(515)
    }, lW.b.prototype.getDepthWrite = function() {
      return this._depthCullingState.depthMask
    }, lW.b.prototype.setDepthWrite = function(WW) {
      this._depthCullingState.depthMask = WW
    }, lW.b.prototype.setAlphaConstants = function(WW, RW, MW, wW) {
      this._alphaState.setAlphaBlendConstants(WW, RW, MW, wW)
    }, lW.b.prototype.getAlphaMode = function() {
      let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
      return this._alphaMode[WW]
    }, lW.b.prototype.getAlphaEquation = function() {
      let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
      return this._alphaEquation[WW]
    });
    let QW = !1;
    QW || (QW = !0, lW.b.prototype.getStencilBuffer = function() {
      return this._stencilState.stencilTest
    }, lW.b.prototype.setStencilBuffer = function(WW) {
      this._stencilState.stencilTest = WW
    }, lW.b.prototype.getStencilMask = function() {
      return this._stencilState.stencilMask
    }, lW.b.prototype.setStencilMask = function(WW) {
      this._stencilState.stencilMask = WW
    }, lW.b.prototype.getStencilFunction = function() {
      return this._stencilState.stencilFunc
    }, lW.b.prototype.getStencilBackFunction = function() {
      return this._stencilState.stencilBackFunc
    }, lW.b.prototype.getStencilFunctionReference = function() {
      return this._stencilState.stencilFuncRef
    }, lW.b.prototype.getStencilFunctionMask = function() {
      return this._stencilState.stencilFuncMask
    }, lW.b.prototype.setStencilFunction = function(WW) {
      this._stencilState.stencilFunc = WW
    }, lW.b.prototype.setStencilBackFunction = function(WW) {
      this._stencilState.stencilBackFunc = WW
    }, lW.b.prototype.setStencilFunctionReference = function(WW) {
      this._stencilState.stencilFuncRef = WW
    }, lW.b.prototype.setStencilFunctionMask = function(WW) {
      this._stencilState.stencilFuncMask = WW
    }, lW.b.prototype.getStencilOperationFail = function() {
      return this._stencilState.stencilOpStencilFail
    }, lW.b.prototype.getStencilBackOperationFail = function() {
      return this._stencilState.stencilBackOpStencilFail
    }, lW.b.prototype.getStencilOperationDepthFail = function() {
      return this._stencilState.stencilOpDepthFail
    }, lW.b.prototype.getStencilBackOperationDepthFail = function() {
      return this._stencilState.stencilBackOpDepthFail
    }, lW.b.prototype.getStencilOperationPass = function() {
      return this._stencilState.stencilOpStencilDepthPass
    }, lW.b.prototype.getStencilBackOperationPass = function() {
      return this._stencilState.stencilBackOpStencilDepthPass
    }, lW.b.prototype.setStencilOperationFail = function(WW) {
      this._stencilState.stencilOpStencilFail = WW
    }, lW.b.prototype.setStencilBackOperationFail = function(WW) {
      this._stencilState.stencilBackOpStencilFail = WW
    }, lW.b.prototype.setStencilOperationDepthFail = function(WW) {
      this._stencilState.stencilOpDepthFail = WW
    }, lW.b.prototype.setStencilBackOperationDepthFail = function(WW) {
      this._stencilState.stencilBackOpDepthFail = WW
    }, lW.b.prototype.setStencilOperationPass = function(WW) {
      this._stencilState.stencilOpStencilDepthPass = WW
    }, lW.b.prototype.setStencilBackOperationPass = function(WW) {
      this._stencilState.stencilBackOpStencilDepthPass = WW
    }, lW.b.prototype.cacheStencilState = function() {
      this._cachedStencilBuffer = this.getStencilBuffer(), this._cachedStencilFunction = this.getStencilFunction(), this._cachedStencilMask = this.getStencilMask(), this._cachedStencilOperationPass = this.getStencilOperationPass(), this._cachedStencilOperationFail = this.getStencilOperationFail(), this._cachedStencilOperationDepthFail = this.getStencilOperationDepthFail(), this._cachedStencilReference = this.getStencilFunctionReference()
    }, lW.b.prototype.restoreStencilState = function() {
      this.setStencilFunction(this._cachedStencilFunction), this.setStencilMask(this._cachedStencilMask), this.setStencilBuffer(this._cachedStencilBuffer), this.setStencilOperationPass(this._cachedStencilOperationPass), this.setStencilOperationFail(this._cachedStencilOperationFail), this.setStencilOperationDepthFail(this._cachedStencilOperationDepthFail), this.setStencilFunctionReference(this._cachedStencilReference)
    });
    MW(37628);
    let rR = !1;
    rR || (rR = !0, lW.b.prototype.createDepthStencilTexture = function(WW, RW, MW) {
      if (RW.isCube) {
        const MW = WW.width || WW;
        return this._createDepthStencilCubeTexture(MW, RW)
      }
      return this._createDepthStencilTexture(WW, RW, MW)
    });
    MW(37632), MW(37661);
    let cR = !1;
    cR || (cR = !0, CW.ThinEngine.prototype.enableScissor = function(WW, RW, MW, wW) {
      const CW = this._gl;
      CW.enable(CW.SCISSOR_TEST), CW.scissor(WW, RW, MW, wW)
    }, CW.ThinEngine.prototype.disableScissor = function() {
      const WW = this._gl;
      WW.disable(WW.SCISSOR_TEST)
    })
  },
  37421: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => lW
    });
    var wW = MW(37424),
      CW = MW(35344),
      zR = MW(37433),
      AW = MW(37488);
    class bR {
      constructor() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 30;
        this._enabled = !0, this._rollingFrameTime = new yR(WW)
      }
      sampleFrame() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : AW.d.Now;
        if (this._enabled) {
          if (null != this._lastFrameTimeMs) {
            const RW = WW - this._lastFrameTimeMs;
            this._rollingFrameTime.add(RW)
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
    class yR {
      constructor(WW) {
        this._samples = new Array(WW), this.reset()
      }
      add(WW) {
        let RW;
        if (this.isSaturated()) {
          const WW = this._samples[this._pos];
          RW = WW - this.average, this.average -= RW / (this._sampleCount - 1), this._m2 -= RW * (WW - this.average)
        } else this._sampleCount++;
        RW = WW - this.average, this.average += RW / this._sampleCount, this._m2 += RW * (WW - this.average), this.variance = this._m2 / (this._sampleCount - 1), this._samples[this._pos] = WW, this._pos++, this._pos %= this._samples.length
      }
      history(WW) {
        if (WW >= this._sampleCount || WW >= this._samples.length) return 0;
        const RW = this._wrapPosition(this._pos - 1);
        return this._samples[this._wrapPosition(RW - WW)]
      }
      isSaturated() {
        return this._sampleCount >= this._samples.length
      }
      reset() {
        this.average = 0, this.variance = 0, this._sampleCount = 0, this._pos = 0, this._m2 = 0
      }
      _wrapPosition(WW) {
        const RW = this._samples.length;
        return (WW % RW + RW) % RW
      }
    }
    var NW = MW(37509),
      eW = MW(36721),
      BW = MW(37529),
      tR = MW(37485),
      TW = MW(37456);

    function gR(WW) {
      const RW = function(WW) {
        if (!(0, TW.g)() || !document.body) return null;
        const RW = document.createElement("span");
        RW.textContent = "Hg", RW.style.font = WW;
        const MW = document.createElement("div");
        MW.style.display = "inline-block", MW.style.width = "1px", MW.style.height = "0px", MW.style.verticalAlign = "bottom";
        const wW = document.createElement("div");
        let CW, zR;
        wW.style.whiteSpace = "nowrap", wW.appendChild(RW), wW.appendChild(MW), document.body.appendChild(wW);
        try {
          zR = MW.getBoundingClientRect().top - RW.getBoundingClientRect().top, MW.style.verticalAlign = "baseline", CW = MW.getBoundingClientRect().top - RW.getBoundingClientRect().top
        } finally {
          document.body.removeChild(wW)
        }
        const AW = {
          ascent: CW,
          height: zR,
          descent: zR - CW
        };
        return iR(AW) ? AW : null
      }(WW);
      if (RW) return RW;
      const MW = function(WW) {
        let RW = null;
        try {
          "undefined" !== typeof OffscreenCanvas ? RW = new OffscreenCanvas(64, 64) : (0, TW.g)() && "function" === typeof document.createElement && (RW = document.createElement("canvas"), RW.width = 64, RW.height = 64);
          const MW = RW?.getContext("2d");
          if (!MW) return null;
          MW.font = WW;
          const wW = MW.measureText("Hg"),
            CW = Number(wW.actualBoundingBoxAscent ?? wW.fontBoundingBoxAscent),
            zR = Number(wW.actualBoundingBoxDescent ?? wW.fontBoundingBoxDescent),
            AW = {
              ascent: CW,
              height: CW + zR,
              descent: zR
            };
          return iR(AW) ? AW : null
        } catch {
          return null
        } finally {
          const WW = RW;
          "function" === typeof WW?.dispose && WW.dispose()
        }
      }(WW);
      return MW || function(WW) {
        const RW = Math.max(1, function(WW) {
            const RW = /(?:^|\s)([0-9]+(?:\.[0-9]+)?)px(?:\/|\s|$)/.exec(String(WW || ""));
            return RW ? Number(RW[1]) : 16
          }(WW)),
          MW = .8 * RW,
          wW = .2 * RW;
        return {
          ascent: MW,
          height: MW + wW,
          descent: wW
        }
      }(WW)
    }

    function iR(WW) {
      return Number.isFinite(WW.ascent) && Number.isFinite(WW.height) && Number.isFinite(WW.descent) && WW.height > 0
    }

    function YW(WW) {
      if (WW.requestPointerLock) {
        const RW = WW.requestPointerLock();
        RW instanceof Promise ? RW.then((() => {
          WW.focus()
        })).catch((() => {})) : WW.focus()
      }
    }
    var JW = MW(37541),
      PW = MW(37483),
      IW = MW(37544),
      oW = MW(37553);
    class lW extends zR.ThinEngine {
      static get NpmPackage() {
        return tR.b.NpmPackage
      }
      static get Version() {
        return tR.b.Version
      }
      static get Instances() {
        return CW.d.Instances
      }
      static get LastCreatedEngine() {
        return CW.d.LastCreatedEngine
      }
      static get LastCreatedScene() {
        return CW.d.LastCreatedScene
      }
      static DefaultLoadingScreenFactory(WW) {
        return tR.b.DefaultLoadingScreenFactory(WW)
      }
      get _supportsHardwareTextureRescaling() {
        return !!lW._RescalePostProcessFactory
      }
      _measureFps() {
        this._performanceMonitor.sampleFrame(), this._fps = this._performanceMonitor.averageFPS, this._deltaTime = this._performanceMonitor.instantaneousFrameTime || 0
      }
      get performanceMonitor() {
        return this._performanceMonitor
      }
      constructor(WW, RW, MW) {
        let wW = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        (0, IW.b)(), (0, oW.d)(), super(WW, RW, MW, wW), this._performanceMonitor = new bR, this._drawCalls = new JW.d, WW && (this._features.supportRenderPasses = !0)
      }
      _initGLContext() {
        super._initGLContext(), this._rescalePostProcess = null
      }
      _sharedInit(WW) {
        super._sharedInit(WW),
          function(WW, RW, MW) {
            WW._onCanvasFocus = () => {
              WW.onCanvasFocusObservable.notifyObservers(WW)
            }, WW._onCanvasBlur = () => {
              WW.onCanvasBlurObservable.notifyObservers(WW)
            }, WW._onCanvasContextMenu = RW => {
              WW.disableContextMenu && RW.preventDefault()
            }, RW.addEventListener("focus", WW._onCanvasFocus), RW.addEventListener("blur", WW._onCanvasBlur), RW.addEventListener("contextmenu", WW._onCanvasContextMenu), WW._onBlur = () => {
              WW.disablePerformanceMonitorInBackground && WW.performanceMonitor.disable(), WW._windowIsBackground = !0
            }, WW._onFocus = () => {
              WW.disablePerformanceMonitorInBackground && WW.performanceMonitor.enable(), WW._windowIsBackground = !1
            }, WW._onCanvasPointerOut = MW => {
              document.elementFromPoint(MW.clientX, MW.clientY) !== RW && WW.onCanvasPointerOutObservable.notifyObservers(MW)
            };
            const wW = WW.getHostWindow();
            wW && "function" === typeof wW.addEventListener && (wW.addEventListener("blur", WW._onBlur), wW.addEventListener("focus", WW._onFocus)), RW.addEventListener("pointerout", WW._onCanvasPointerOut), MW.doNotHandleTouchAction || function(WW) {
              WW && WW.setAttribute && (WW.setAttribute("touch-action", "none"), WW.style.touchAction = "none", WW.style.webkitTapHighlightColor = "transparent")
            }(RW), !tR.b.audioEngine && MW.audioEngine && tR.b.AudioEngineFactory && (tR.b.audioEngine = tR.b.AudioEngineFactory(WW.getRenderingCanvas(), WW.getAudioContext(), WW.getAudioDestination())), (0, TW.g)() && (WW._onFullscreenChange = () => {
              WW.isFullscreen = !!document.fullscreenElement, WW.isFullscreen && WW._pointerLockRequested && RW && YW(RW)
            }, document.addEventListener("fullscreenchange", WW._onFullscreenChange, !1), document.addEventListener("webkitfullscreenchange", WW._onFullscreenChange, !1), WW._onPointerLockChange = () => {
              WW.isPointerLock = document.pointerLockElement === RW
            }, document.addEventListener("pointerlockchange", WW._onPointerLockChange, !1), document.addEventListener("webkitpointerlockchange", WW._onPointerLockChange, !1)), WW.enableOfflineSupport = void 0 !== tR.b.OfflineProviderFactory, WW._deterministicLockstep = !!MW.deterministicLockstep, WW._lockstepMaxSteps = MW.lockstepMaxSteps || 0, WW._timeStep = MW.timeStep || 1 / 60
          }(this, WW, this._creationOptions)
      }
      resizeImageBitmap(WW, RW, MW) {
        return function(WW, RW, MW, wW) {
          const CW = WW.createCanvas(MW, wW).getContext("2d");
          if (!CW) throw new Error("Unable to get 2d context for resizeImageBitmap");
          return CW.drawImage(RW, 0, 0), CW.getImageData(0, 0, MW, wW).data
        }(this, WW, RW, MW)
      }
      async _createImageBitmapFromSource(WW, RW) {
        return await async function(WW, RW, MW) {
          return await new Promise(((wW, CW) => {
            const zR = new Image;
            zR.onload = () => {
              zR.decode().then((() => {
                WW.createImageBitmap(zR, MW).then((WW => {
                  wW(WW)
                }))
              }))
            }, zR.onerror = () => {
              CW(`Error loading image ${zR.src}`)
            }, zR.src = RW
          }))
        }(this, WW, RW)
      }
      switchFullscreen(WW) {
        this.isFullscreen ? this.exitFullscreen() : this.enterFullscreen(WW)
      }
      enterFullscreen(WW) {
        this.isFullscreen || (this._pointerLockRequested = WW, this._renderingCanvas && function(WW) {
          const RW = WW.requestFullscreen || WW.webkitRequestFullscreen;
          RW && RW.call(WW)
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
      setDirectViewport(WW, RW, MW, wW) {
        const CW = this._cachedViewport;
        return this._cachedViewport = null, this._viewport(WW, RW, MW, wW), CW
      }
      scissorClear(WW, RW, MW, wW, CW) {
        this.enableScissor(WW, RW, MW, wW), this.clear(CW, !0, !0, !0), this.disableScissor()
      }
      getVertexShaderSource(WW) {
        const RW = this._gl.getAttachedShaders(WW);
        return RW ? this._gl.getShaderSource(RW[0]) : null
      }
      getFragmentShaderSource(WW) {
        const RW = this._gl.getAttachedShaders(WW);
        return RW ? this._gl.getShaderSource(RW[1]) : null
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
        return gR(WW)
      }
      enterPointerlock() {
        this._renderingCanvas && YW(this._renderingCanvas)
      }
      exitPointerlock() {
        document.exitPointerLock && document.exitPointerLock()
      }
      Vk() {
        this._measureFps(), super.Vk()
      }
      _deletePipelineContext(WW) {
        const RW = WW;
        RW && RW.program && RW.transformFeedback && (this.deleteTransformFeedback(RW.transformFeedback), RW.transformFeedback = null), super._deletePipelineContext(WW)
      }
      createShaderProgram(WW, RW, MW, wW, CW) {
        let zR = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        CW = CW || this._gl, this.onBeforeShaderCompilationObservable.notifyObservers(this);
        const AW = super.createShaderProgram(WW, RW, MW, wW, CW, zR);
        return this.onAfterShaderCompilationObservable.notifyObservers(this), AW
      }
      _createShaderProgram(WW, RW, MW, wW) {
        let CW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        const zR = wW.createProgram();
        if (WW.program = zR, !zR) throw new Error("Unable to create program");
        if (wW.attachShader(zR, RW), wW.attachShader(zR, MW), this.Gs > 1 && CW) {
          const RW = this.createTransformFeedback();
          this.bindTransformFeedback(RW), this.setTranformFeedbackVaryings(zR, CW), WW.transformFeedback = RW
        }
        return wW.linkProgram(zR), this.Gs > 1 && CW && this.bindTransformFeedback(null), WW.context = wW, WW.vertexShader = RW, WW.fragmentShader = MW, WW.isParallelCompiled || this._finalizePipelineContext(WW), zR
      }
      _releaseTexture(WW) {
        super._releaseTexture(WW)
      }
      _releaseRenderTargetWrapper(WW) {
        super._releaseRenderTargetWrapper(WW);
        for (const RW of this.scenes) {
          for (const MW of RW.postProcesses) MW._outputTexture === WW && (MW._outputTexture = null);
          for (const MW of RW.cameras)
            for (const RW of MW._postProcesses) RW && RW._outputTexture === WW && (RW._outputTexture = null)
        }
      }
      _rescaleTexture(WW, RW, MW, wW, CW) {
        this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MAG_FILTER, this._gl.LINEAR), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MIN_FILTER, this._gl.LINEAR), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_S, this._gl.CLAMP_TO_EDGE), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_T, this._gl.CLAMP_TO_EDGE);
        const zR = this.createRenderTargetTexture({
          width: RW.width,
          height: RW.height
        }, {
          generateMipMaps: !1,
          type: 0,
          samplingMode: 2,
          generateDepthBuffer: !1,
          generateStencilBuffer: !1
        });
        if (!this._rescalePostProcess && lW._RescalePostProcessFactory && (this._rescalePostProcess = lW._RescalePostProcessFactory(this)), this._rescalePostProcess) {
          this._rescalePostProcess.externalTextureSamplerBinding = !0;
          const AW = () => {
              this._rescalePostProcess.onApply = function(RW) {
                RW._bindTexture("textureSampler", WW)
              };
              let AW = MW;
              AW || (AW = this.scenes[this.scenes.length - 1]), AW.postProcessManager.directRender([this._rescalePostProcess], zR, !0), this._bindTextureDirectly(this._gl.TEXTURE_2D, RW, !0), this._gl.copyTexImage2D(this._gl.TEXTURE_2D, 0, wW, 0, 0, RW.width, RW.height, 0), this.unBindFramebuffer(zR), zR.dispose(), CW && CW()
            },
            bR = this._rescalePostProcess.getEffect();
          bR ? bR.executeWhenCompiled(AW) : this._rescalePostProcess.onEffectCreatedObservable.addOnce((WW => {
            WW.executeWhenCompiled(AW)
          }))
        }
      }
      wrapWebGLTexture(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3,
          CW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          zR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        const AW = new BW.d(WW, this._gl),
          bR = new wW.e(this, 15, !0);
        return bR._hardwareTexture = AW, bR.baseWidth = CW, bR.baseHeight = zR, bR.width = CW, bR.height = zR, bR.isReady = !0, bR.useMipMaps = RW, this.updateTextureSamplingMode(MW, bR), bR
      }
      updateWrappedWebGLTexture(WW, RW) {
        if (15 !== WW.source) throw new Error("updateWrappedWebGLTexture: target InternalTexture was not produced by wrapWebGLTexture.");
        for (const wW of this._renderTargetWrapperCache)
          if (wW.textures?.includes(WW)) {
            if (wW.isMulti) throw new Error("updateWrappedWebGLTexture: wrapped texture is part of a multi render-target; not supported. Dispose and re-wrap.");
            if (wW._depthStencilTexture) throw new Error("updateWrappedWebGLTexture: wrapped texture's render-target wrapper has a depth/stencil texture; not supported. Dispose and re-wrap.")
          } WW._hardwareTexture = new BW.d(RW, this._gl), WW.isReady = !0, WW._cachedCoordinatesMode = null, WW._cachedWrapU = null, WW._cachedWrapV = null, WW._cachedWrapR = null, WW._cachedAnisotropicFilteringLevel = null;
        for (const wW in this._boundTexturesCache) this._boundTexturesCache[wW] === WW && (this._boundTexturesCache[wW] = null);
        this.updateTextureSamplingMode(WW.samplingMode, WW);
        const MW = this._gl;
        for (const wW of this._renderTargetWrapperCache) {
          if (wW.texture !== WW) continue;
          const CW = wW,
            zR = wW.samples,
            AW = zR > 1;
          CW._framebuffer && MW.deleteFramebuffer(CW._framebuffer), !AW && CW._depthStencilBuffer && (MW.deleteRenderbuffer(CW._depthStencilBuffer), CW._depthStencilBuffer = null);
          const bR = this._currentFramebuffer,
            yR = MW.createFramebuffer();
          this._bindUnboundFramebuffer(yR), MW.framebufferTexture2D(MW.FRAMEBUFFER, MW.COLOR_ATTACHMENT0, MW.TEXTURE_2D, RW, 0), AW || (CW._depthStencilBuffer = this._setupFramebufferDepthAttachments(wW._generateStencilBuffer, wW._generateDepthBuffer, wW.width, wW.height)), this._bindUnboundFramebuffer(bR), CW._framebuffer = yR, AW && (wW._samples = 1, this.updateRenderTargetTextureSampleCount(CW, zR))
        }
      }
      _uploadImageToTexture(WW, RW) {
        let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          wW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const CW = this._gl,
          zR = this._getWebGLTextureType(WW.type),
          AW = this._getInternalFormat(WW.format),
          bR = this._getRGBABufferInternalSizedFormat(WW.type, AW),
          yR = WW.isCube ? CW.TEXTURE_CUBE_MAP : CW.TEXTURE_2D;
        this._bindTextureDirectly(yR, WW, !0), this._unpackFlipY(WW.invertY);
        let NW = CW.TEXTURE_2D;
        WW.isCube && (NW = CW.TEXTURE_CUBE_MAP_POSITIVE_X + MW), CW.texImage2D(NW, wW, bR, AW, zR, RW), this._bindTextureDirectly(yR, null, !0)
      }
      updateTextureComparisonFunction(WW, RW) {
        if (1 === this.Gs) return void eW.b.Error("WebGL 1 does not support texture comparison.");
        const MW = this._gl;
        WW.isCube ? (this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, WW, !0), 0 === RW ? (MW.texParameteri(MW.TEXTURE_CUBE_MAP, MW.TEXTURE_COMPARE_FUNC, 515), MW.texParameteri(MW.TEXTURE_CUBE_MAP, MW.TEXTURE_COMPARE_MODE, MW.NONE)) : (MW.texParameteri(MW.TEXTURE_CUBE_MAP, MW.TEXTURE_COMPARE_FUNC, RW), MW.texParameteri(MW.TEXTURE_CUBE_MAP, MW.TEXTURE_COMPARE_MODE, MW.COMPARE_REF_TO_TEXTURE)), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null)) : (this._bindTextureDirectly(this._gl.TEXTURE_2D, WW, !0), 0 === RW ? (MW.texParameteri(MW.TEXTURE_2D, MW.TEXTURE_COMPARE_FUNC, 515), MW.texParameteri(MW.TEXTURE_2D, MW.TEXTURE_COMPARE_MODE, MW.NONE)) : (MW.texParameteri(MW.TEXTURE_2D, MW.TEXTURE_COMPARE_FUNC, RW), MW.texParameteri(MW.TEXTURE_2D, MW.TEXTURE_COMPARE_MODE, MW.COMPARE_REF_TO_TEXTURE)), this._bindTextureDirectly(this._gl.TEXTURE_2D, null)), WW._comparisonFunction = RW
      }
      createInstancesBuffer(WW) {
        const RW = this._gl.createBuffer();
        if (!RW) throw new Error("Unable to create instance buffer");
        const MW = new NW.c(RW);
        return MW.aR = WW, this.bindArrayBuffer(MW), this._gl.bufferData(this._gl.ARRAY_BUFFER, WW, this._gl.DYNAMIC_DRAW), MW.references = 1, MW
      }
      deleteInstancesBuffer(WW) {
        this._gl.deleteBuffer(WW)
      }
      async _clientWaitAsync(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10;
        const wW = this._gl;
        return await new Promise(((CW, zR) => {
          (0, PW.g)((() => {
            const MW = wW.clientWaitSync(WW, RW, 0);
            if (MW == wW.WAIT_FAILED) throw new Error("clientWaitSync failed");
            return MW != wW.TIMEOUT_EXPIRED
          }), CW, zR, MW)
        }))
      }
      _readPixelsAsync(WW, RW, MW, wW, CW, zR, AW) {
        if (this._webGLVersion < 2) throw new Error("_readPixelsAsync only work on WebGL2+");
        const bR = this._gl,
          yR = bR.createBuffer();
        bR.bindBuffer(bR.PIXEL_PACK_BUFFER, yR), bR.bufferData(bR.PIXEL_PACK_BUFFER, AW.byteLength, bR.STREAM_READ), bR.readPixels(WW, RW, MW, wW, CW, zR, 0), bR.bindBuffer(bR.PIXEL_PACK_BUFFER, null);
        const NW = bR.fenceSync(bR.SYNC_GPU_COMMANDS_COMPLETE, 0);
        return NW ? (bR.flush(), this._clientWaitAsync(NW, 0, 10).then((() => (bR.deleteSync(NW), bR.bindBuffer(bR.PIXEL_PACK_BUFFER, yR), bR.getBufferSubData(bR.PIXEL_PACK_BUFFER, 0, AW), bR.bindBuffer(bR.PIXEL_PACK_BUFFER, null), bR.deleteBuffer(yR), AW)))) : null
      }
      dispose() {
        this.hideLoadingUI?.(), this._rescalePostProcess && this._rescalePostProcess.dispose(),
          function(WW, RW) {
            1 === CW.d.Instances.length && tR.b.audioEngine && (tR.b.audioEngine.dispose(), tR.b.audioEngine = null);
            const MW = WW.getHostWindow();
            MW && "function" === typeof MW.removeEventListener && (MW.removeEventListener("blur", WW._onBlur), MW.removeEventListener("focus", WW._onFocus)), RW && (RW.removeEventListener("focus", WW._onCanvasFocus), RW.removeEventListener("blur", WW._onCanvasBlur), RW.removeEventListener("pointerout", WW._onCanvasPointerOut), RW.removeEventListener("contextmenu", WW._onCanvasContextMenu)), (0, TW.g)() && (document.removeEventListener("fullscreenchange", WW._onFullscreenChange), document.removeEventListener("mozfullscreenchange", WW._onFullscreenChange), document.removeEventListener("webkitfullscreenchange", WW._onFullscreenChange), document.removeEventListener("msfullscreenchange", WW._onFullscreenChange), document.removeEventListener("pointerlockchange", WW._onPointerLockChange), document.removeEventListener("mspointerlockchange", WW._onPointerLockChange), document.removeEventListener("mozpointerlockchange", WW._onPointerLockChange), document.removeEventListener("webkitpointerlockchange", WW._onPointerLockChange))
          }(this, this._renderingCanvas), super.dispose()
      }
    }
    lW.ALPHA_DISABLE = 0, lW.ALPHA_ADD = 1, lW.ALPHA_COMBINE = 2, lW.ALPHA_SUBTRACT = 3, lW.ALPHA_MULTIPLY = 4, lW.ALPHA_MAXIMIZED = 5, lW.ALPHA_ONEONE = 6, lW.ALPHA_PREMULTIPLIED = 7, lW.ALPHA_PREMULTIPLIED_PORTERDUFF = 8, lW.ALPHA_INTERPOLATE = 9, lW.ALPHA_SCREENMODE = 10, lW.DELAYLOADSTATE_NONE = 0, lW.DELAYLOADSTATE_LOADED = 1, lW.DELAYLOADSTATE_LOADING = 2, lW.DELAYLOADSTATE_NOTLOADED = 4, lW.NEVER = 512, lW.ALWAYS = 519, lW.LESS = 513, lW.EQUAL = 514, lW.LEQUAL = 515, lW.GREATER = 516, lW.GEQUAL = 518, lW.NOTEQUAL = 517, lW.KEEP = 7680, lW.REPLACE = 7681, lW.INCR = 7682, lW.DECR = 7683, lW.INVERT = 5386, lW.INCR_WRAP = 34055, lW.DECR_WRAP = 34056, lW.TEXTURE_CLAMP_ADDRESSMODE = 0, lW.TEXTURE_WRAP_ADDRESSMODE = 1, lW.TEXTURE_MIRROR_ADDRESSMODE = 2, lW.TEXTUREFORMAT_ALPHA = 0, lW.TEXTUREFORMAT_LUMINANCE = 1, lW.TEXTUREFORMAT_LUMINANCE_ALPHA = 2, lW.TEXTUREFORMAT_RGB = 4, lW.TEXTUREFORMAT_RGBA = 5, lW.TEXTUREFORMAT_RED = 6, lW.TEXTUREFORMAT_R = 6, lW.TEXTUREFORMAT_R16_UNORM = 33322, lW.TEXTUREFORMAT_RG16_UNORM = 33324, lW.TEXTUREFORMAT_RGB16_UNORM = 32852, lW.TEXTUREFORMAT_RGBA16_UNORM = 32859, lW.TEXTUREFORMAT_R16_SNORM = 36760, lW.TEXTUREFORMAT_RG16_SNORM = 36761, lW.TEXTUREFORMAT_RGB16_SNORM = 36762, lW.TEXTUREFORMAT_RGBA16_SNORM = 36763, lW.TEXTUREFORMAT_RG = 7, lW.TEXTUREFORMAT_RED_INTEGER = 8, lW.TEXTUREFORMAT_R_INTEGER = 8, lW.TEXTUREFORMAT_RG_INTEGER = 9, lW.TEXTUREFORMAT_RGB_INTEGER = 10, lW.TEXTUREFORMAT_RGBA_INTEGER = 11, lW.TEXTURETYPE_UNSIGNED_BYTE = 0, lW.TEXTURETYPE_UNSIGNED_INT = 0, lW.TEXTURETYPE_FLOAT = 1, lW.TEXTURETYPE_HALF_FLOAT = 2, lW.TEXTURETYPE_BYTE = 3, lW.TEXTURETYPE_SHORT = 4, lW.TEXTURETYPE_UNSIGNED_SHORT = 5, lW.TEXTURETYPE_INT = 6, lW.TEXTURETYPE_UNSIGNED_INTEGER = 7, lW.TEXTURETYPE_UNSIGNED_SHORT_4_4_4_4 = 8, lW.TEXTURETYPE_UNSIGNED_SHORT_5_5_5_1 = 9, lW.TEXTURETYPE_UNSIGNED_SHORT_5_6_5 = 10, lW.TEXTURETYPE_UNSIGNED_INT_2_10_10_10_REV = 11, lW.TEXTURETYPE_UNSIGNED_INT_24_8 = 12, lW.TEXTURETYPE_UNSIGNED_INT_10F_11F_11F_REV = 13, lW.TEXTURETYPE_UNSIGNED_INT_5_9_9_9_REV = 14, lW.TEXTURETYPE_FLOAT_32_UNSIGNED_INT_24_8_REV = 15, lW.TEXTURE_NEAREST_SAMPLINGMODE = 1, lW.TEXTURE_BILINEAR_SAMPLINGMODE = 2, lW.TEXTURE_TRILINEAR_SAMPLINGMODE = 3, lW.TEXTURE_NEAREST_NEAREST_MIPLINEAR = 8, lW.TEXTURE_LINEAR_LINEAR_MIPNEAREST = 11, lW.TEXTURE_LINEAR_LINEAR_MIPLINEAR = 3, lW.TEXTURE_NEAREST_NEAREST_MIPNEAREST = 4, lW.TEXTURE_NEAREST_LINEAR_MIPNEAREST = 5, lW.TEXTURE_NEAREST_LINEAR_MIPLINEAR = 6, lW.TEXTURE_NEAREST_LINEAR = 7, lW.TEXTURE_NEAREST_NEAREST = 1, lW.TEXTURE_LINEAR_NEAREST_MIPNEAREST = 9, lW.TEXTURE_LINEAR_NEAREST_MIPLINEAR = 10, lW.TEXTURE_LINEAR_LINEAR = 2, lW.TEXTURE_LINEAR_NEAREST = 12, lW.TEXTURE_EXPLICIT_MODE = 0, lW.TEXTURE_SPHERICAL_MODE = 1, lW.TEXTURE_PLANAR_MODE = 2, lW.TEXTURE_CUBIC_MODE = 3, lW.TEXTURE_PROJECTION_MODE = 4, lW.TEXTURE_SKYBOX_MODE = 5, lW.TEXTURE_INVCUBIC_MODE = 6, lW.TEXTURE_EQUIRECTANGULAR_MODE = 7, lW.TEXTURE_FIXED_EQUIRECTANGULAR_MODE = 8, lW.TEXTURE_FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9, lW.SCALEMODE_FLOOR = 1, lW.SCALEMODE_NEAREST = 2, lW.SCALEMODE_CEILING = 3
  },
  37568: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => CW
    });
    var wW = MW(37533);
    class CW {
      get depthStencilTexture() {
        return this._depthStencilTexture
      }
      setDepthStencilTexture(WW) {
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && this._depthStencilTexture && this._depthStencilTexture.dispose(), this._depthStencilTexture = WW, this._generateDepthBuffer = this._generateStencilBuffer = this._depthStencilTextureWithStencil = !1, WW && (this._generateDepthBuffer = !0, this._generateStencilBuffer = this._depthStencilTextureWithStencil = (0, wW.e)(WW.format))
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
        const RW = this._textures[WW],
          MW = this._layerIndices?.[WW] ?? 0,
          wW = this._faceIndices?.[WW] ?? 0;
        return RW.isCube ? 6 * MW + wW : RW.is3D ? 0 : MW
      }
      get samples() {
        return this._samples
      }
      setSamples(WW) {
        let RW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          MW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.samples === WW && !MW) return WW;
        const wW = this._isMulti ? this._engine.updateMultipleRenderTargetTextureSampleCount(this, WW, RW) : this._engine.updateRenderTargetTextureSampleCount(this, WW);
        return this._samples = WW, wW
      }
      resolveMSAATextures() {
        this.isMulti ? this._engine.resolveMultiFramebuffer(this) : this._engine.resolveFramebuffer(this)
      }
      generateMipMaps() {
        this._engine._currentRenderTarget === this && (this.isMulti ? this._engine.unBindMultiColorAttachmentFramebuffer(this, !0) : this._engine.unBindFramebuffer(this, !0)), this.isMulti ? this._engine.generateMipMapsMultiFramebuffer(this) : this._engine.generateMipMapsFramebuffer(this)
      }
      constructor(WW, RW, MW, wW, CW) {
        this._textures = null, this._faceIndices = null, this._layerIndices = null, this._samples = 1, this._attachments = null, this._generateStencilBuffer = !1, this._generateDepthBuffer = !1, this._depthStencilTextureWithStencil = !1, this.disableAutomaticMSAAResolve = !1, this.resolveMSAAColors = !0, this.resolveMSAADepth = !1, this.resolveMSAAStencil = !1, this.depthReadOnly = !1, this.stencilReadOnly = !1, this._isMulti = WW, this._isCube = RW, this._size = MW, this._engine = wW, this._depthStencilTexture = null, this.label = CW
      }
      setTextures(WW) {
        Array.isArray(WW) ? this._textures = WW : this._textures = WW ? [WW] : null
      }
      setTexture(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          MW = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._textures || (this._textures = []), this._textures[RW] !== WW && (this._textures[RW] && MW && this._textures[RW].dispose(), this._textures[RW] = WW)
      }
      setLayerAndFaceIndices(WW, RW) {
        this._layerIndices = WW, this._faceIndices = RW
      }
      setLayerAndFaceIndex() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          RW = arguments.length > 1 ? arguments[1] : void 0,
          MW = arguments.length > 2 ? arguments[2] : void 0;
        this._layerIndices || (this._layerIndices = []), this._faceIndices || (this._faceIndices = []), void 0 !== RW && RW >= 0 && (this._layerIndices[WW] = RW), void 0 !== MW && MW >= 0 && (this._faceIndices[WW] = MW)
      }
      createDepthStencilTexture() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          RW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          MW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          wW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          CW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          zR = arguments.length > 5 ? arguments[5] : void 0;
        return this._depthStencilTexture?.dispose(), this._depthStencilTextureWithStencil = MW, this._depthStencilTextureLabel = zR, this._depthStencilTexture = this._engine.createDepthStencilTexture(this._size, {
          bilinearFiltering: RW,
          comparisonFunction: WW,
          generateStencil: MW,
          isCube: this._isCube,
          samples: wW,
          depthTextureFormat: CW,
          label: zR
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
          const RW = this.textures;
          if (RW && RW.length > 0) {
            let MW = !1,
              wW = RW.length,
              CW = -1;
            const zR = RW[RW.length - 1]._source;
            14 !== zR && 12 !== zR || (MW = !0, CW = RW[RW.length - 1].format, wW--);
            const AW = [],
              bR = [],
              yR = [],
              NW = [],
              eW = [],
              BW = [],
              tR = [],
              TW = {};
            for (let WW = 0; WW < wW; ++WW) {
              const MW = RW[WW];
              AW.push(MW.samplingMode), bR.push(MW.type), yR.push(MW.format);
              void 0 !== TW[MW.uniqueId] ? (NW.push(-1), tR.push(0)) : (TW[MW.uniqueId] = WW, MW.is2DArray ? (NW.push(35866), tR.push(MW.depth)) : MW.isCube ? (NW.push(34067), tR.push(0)) : MW.is3D ? (NW.push(32879), tR.push(MW.depth)) : (NW.push(3553), tR.push(0))), this._faceIndices && eW.push(this._faceIndices[WW] ?? 0), this._layerIndices && BW.push(this._layerIndices[WW] ?? 0)
            }
            const gR = {
                samplingModes: AW,
                generateMipMaps: RW[0].generateMipMaps,
                generateDepthBuffer: this._generateDepthBuffer,
                generateStencilBuffer: this._generateStencilBuffer,
                generateDepthTexture: MW,
                depthTextureFormat: CW,
                types: bR,
                formats: yR,
                htW: wW,
                targetTypes: NW,
                faceIndex: eW,
                layerIndex: BW,
                layerCounts: tR,
                label: this.label
              },
              iR = {
                width: this.width,
                height: this.height,
                depth: this.depth
              };
            WW = this._engine.createMultipleRenderTarget(iR, gR);
            for (let YW = 0; YW < wW; ++YW) {
              if (-1 !== NW[YW]) continue;
              const MW = TW[RW[YW].uniqueId];
              WW.setTexture(WW.textures[MW], YW)
            }
          }
        } else {
          const RW = {};
          if (RW.generateDepthBuffer = this._generateDepthBuffer, RW.generateMipMaps = this.texture?.generateMipMaps ?? !1, RW.generateStencilBuffer = this._generateStencilBuffer, RW.samplingMode = this.texture?.samplingMode, RW.type = this.texture?.type, RW.format = this.texture?.format, RW.noColorAttachment = !this._textures, RW.label = this.label, this.isCube) WW = this._engine.createRenderTargetCubeTexture(this.width, RW);
          else {
            const MW = {
              width: this.width,
              height: this.height,
              layers: this.is2DArray || this.is3D ? this.texture?.depth : void 0
            };
            WW = this._engine.createRenderTargetTexture(MW, RW)
          }
          WW.texture && (WW.texture.isReady = !0)
        }
        return WW
      }
      _swapRenderTargetWrapper(WW) {
        if (this._textures && WW._textures)
          for (let RW = 0; RW < this._textures.length; ++RW) this._textures[RW]._swapAndDie(WW._textures[RW], !1), WW._textures[RW].isReady = !0;
        this._depthStencilTexture && WW._depthStencilTexture && (this._depthStencilTexture._swapAndDie(WW._depthStencilTexture), WW._depthStencilTexture.isReady = !0), this._textures = null, this._depthStencilTexture = null
      }
      _rebuild() {
        const WW = this._cloneRenderTargetWrapper();
        if (WW) {
          if (this._depthStencilTexture) {
            const RW = this._depthStencilTexture.samplingMode,
              MW = this._depthStencilTexture.format,
              wW = 2 === RW || 3 === RW || 11 === RW;
            WW.createDepthStencilTexture(this._depthStencilTexture._comparisonFunction, wW, this._depthStencilTextureWithStencil, this._depthStencilTexture.samples, MW, this._depthStencilTextureLabel)
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
  38016: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => wW
    });
    class wW {
      static get ForceFullSceneLoadingForIncremental() {
        return wW._ForceFullSceneLoadingForIncremental
      }
      static set ForceFullSceneLoadingForIncremental(WW) {
        wW._ForceFullSceneLoadingForIncremental = WW
      }
      static get ShowLoadingScreen() {
        return wW._ShowLoadingScreen
      }
      static set ShowLoadingScreen(WW) {
        wW._ShowLoadingScreen = WW
      }
      static get loggingLevel() {
        return wW._LoggingLevel
      }
      static set loggingLevel(WW) {
        wW._LoggingLevel = WW
      }
      static get CleanBoneMatrixWeights() {
        return wW._CleanBoneMatrixWeights
      }
      static set CleanBoneMatrixWeights(WW) {
        wW._CleanBoneMatrixWeights = WW
      }
    }
    wW._ForceFullSceneLoadingForIncremental = !1, wW._ShowLoadingScreen = !0, wW._CleanBoneMatrixWeights = !1, wW._LoggingLevel = 0
  },
  37665: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => AW
    });
    var wW = MW(36721);
    const CW = new Map;

    function zR(WW, RW) {
      (function(WW) {
        return CW.delete(WW)
      })(WW) && wW.b.Warn(`Extension with the name '${WW}' already exists`), CW.set(WW, RW)
    }

    function AW(WW, RW) {
      "image/ktx" !== RW && "image/ktx2" !== RW || (WW = ".ktx"), CW.has(WW) || (WW.endsWith(".ies") && zR(".ies", (async () => await MW.e(279).then((() => MW(39227))).then((WW => new WW._IESTextureLoader)))), WW.endsWith(".dds") && zR(".dds", (async () => await MW.e(277).then((() => MW(39229))).then((WW => new WW._DDSTextureLoader)))), WW.endsWith(".basis") && zR(".basis", (async () => await MW.e(280).then((() => MW(39232))).then((WW => new WW._BasisTextureLoader)))), WW.endsWith(".env") && zR(".env", (async () => await Promise.all([MW.e(281), MW.e(278)]).then((() => MW(39238))).then((WW => new WW._ENVTextureLoader)))), WW.endsWith(".hdr") && zR(".hdr", (async () => await MW.e(282).then((() => MW(39298))).then((WW => new WW._HDRTextureLoader)))), (WW.endsWith(".ktx") || WW.endsWith(".ktx2")) && (zR(".ktx", (async () => await MW.e(283).then((() => MW(39303))).then((WW => new WW._KTXTextureLoader)))), zR(".ktx2", (async () => await MW.e(283).then((() => MW(39303))).then((WW => new WW._KTXTextureLoader))))), WW.endsWith(".tga") && zR(".tga", (async () => await MW.e(284).then((() => MW(39315))).then((WW => new WW._TGATextureLoader)))), WW.endsWith(".exr") && zR(".exr", (async () => await MW.e(285).then((() => MW(39321))).then((WW => new WW._ExrTextureLoader)))));
      const wW = CW.get(WW);
      return wW ? Promise.resolve(wW(RW)) : null
    }
  },
  38039: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => AW,
      f: () => NW
    });
    var wW = MW(37866),
      CW = MW(37621),
      zR = MW(35361);
    class AW extends wW.e {
      get vAW() {
        return this._subMaterials
      }
      set vAW(WW) {
        this._subMaterials = WW, this._hookArray(WW)
      }
      getChildren() {
        return this.vAW
      }
      constructor(WW, RW) {
        super(WW, RW, !0), this._waitingSubMaterialsUniqueIds = [], this.QRW().addMultiMaterial(this), this.vAW = [], this._storeEffectOnSubMeshes = !0
      }
      _hookArray(WW) {
        var RW = this;
        const MW = WW.push;
        WW.push = function() {
          for (var wW = arguments.length, CW = new Array(wW), zR = 0; zR < wW; zR++) CW[zR] = arguments[zR];
          const AW = MW.apply(WW, CW);
          return RW._markAllSubMeshesAsTexturesDirty(), AW
        };
        const wW = WW.splice;
        WW.splice = (RW, MW) => {
          const CW = wW.call(WW, RW, MW ?? WW.length);
          return this._markAllSubMeshesAsTexturesDirty(), CW
        }
      }
      getSubMaterial(WW) {
        return WW < 0 || WW >= this.vAW.length ? this.QRW().defaultMaterial : this.vAW[WW]
      }
      getActiveTextures() {
        return super.getActiveTextures().concat(...this.vAW.map((WW => WW ? WW.getActiveTextures() : [])))
      }
      hasTexture(WW) {
        if (super.hasTexture(WW)) return !0;
        for (let RW = 0; RW < this.vAW.length; RW++)
          if (this.vAW[RW]?.hasTexture(WW)) return !0;
        return !1
      }
      getClassName() {
        return "MultiMaterial"
      }
      isReadyForSubMesh(WW, RW, MW) {
        for (let wW = 0; wW < this.vAW.length; wW++) {
          const CW = this.vAW[wW];
          if (CW) {
            if (CW._storeEffectOnSubMeshes) {
              if (!CW.isReadyForSubMesh(WW, RW, MW)) return !1;
              continue
            }
            if (!CW.isReady(WW)) return !1
          }
        }
        return !0
      }
      clone(WW, RW) {
        const MW = new AW(WW, this.QRW());
        for (let wW = 0; wW < this.vAW.length; wW++) {
          let CW;
          const zR = this.vAW[wW];
          CW = RW && zR ? zR.clone(WW + "-" + zR.name) : this.vAW[wW], MW.vAW.push(CW)
        }
        return MW
      }
      serialize() {
        const WW = {};
        WW.name = this.name, WW.id = this.id, WW.uniqueId = this.uniqueId, CW.d && (WW.tags = CW.d.GetTags(this)), WW.materialsUniqueIds = [], WW.materials = [];
        for (let RW = 0; RW < this.vAW.length; RW++) {
          const MW = this.vAW[RW];
          MW ? (WW.materialsUniqueIds.push(MW.uniqueId), WW.materials.push(MW.id)) : (WW.materialsUniqueIds.push(null), WW.materials.push(null))
        }
        return WW
      }
      dispose(WW, RW, MW) {
        const wW = this.QRW();
        if (!wW) return;
        if (MW)
          for (let zR = 0; zR < this.vAW.length; zR++) {
            const MW = this.vAW[zR];
            MW && MW.dispose(WW, RW)
          }
        const CW = wW.multiMaterials.indexOf(this);
        CW >= 0 && wW.multiMaterials.splice(CW, 1), super.dispose(WW, RW)
      }
    }
    let bR = !1;

    function yR(WW, RW) {
      const MW = new AW(WW.name, RW);
      if (MW.id = WW.id, MW._loadedUniqueId = WW.uniqueId, CW.d && CW.d.AddTagsTo(MW, WW.tags), WW.materialsUniqueIds) MW._waitingSubMaterialsUniqueIds = WW.materialsUniqueIds;
      else
        for (const wW of WW.materials) MW.vAW.push(RW.getLastMaterialById(wW));
      return MW
    }

    function NW() {
      bR || (bR = !0, AW.ParseMultiMaterial = yR, (0, zR.e)("BABYLON.MultiMaterial", AW))
    }
  },
  37809: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => AW
    });
    var wW, CW, zR = MW(35324);
    ! function(WW) {
      WW[WW.LOCAL = 0] = "LOCAL", WW[WW.WORLD = 1] = "WORLD", WW[WW.BONE = 2] = "BONE"
    }(wW || (wW = {}));
    class AW {}
    AW.X = new zR.q(1, 0, 0), AW.Y = new zR.q(0, 1, 0), AW.Z = new zR.q(0, 0, 1),
      function(WW) {
        WW[WW.X = 0] = "X", WW[WW.Y = 1] = "Y", WW[WW.Z = 2] = "Z"
      }(CW || (CW = {}))
  },
  37574: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => yR,
      d: () => NW
    });
    var wW = MW(35324);
    const CW = [Math.sqrt(1 / (4 * Math.PI)), -Math.sqrt(3 / (4 * Math.PI)), Math.sqrt(3 / (4 * Math.PI)), -Math.sqrt(3 / (4 * Math.PI)), Math.sqrt(15 / (4 * Math.PI)), -Math.sqrt(15 / (4 * Math.PI)), Math.sqrt(5 / (16 * Math.PI)), -Math.sqrt(15 / (4 * Math.PI)), Math.sqrt(15 / (16 * Math.PI))],
      zR = [() => 1, WW => WW.y, WW => WW.z, WW => WW.x, WW => WW.x * WW.y, WW => WW.y * WW.z, WW => 3 * WW.z * WW.z - 1, WW => WW.x * WW.z, WW => WW.x * WW.x - WW.y * WW.y],
      AW = (WW, RW) => CW[WW] * zR[WW](RW),
      bR = [Math.PI, 2 * Math.PI / 3, 2 * Math.PI / 3, 2 * Math.PI / 3, Math.PI / 4, Math.PI / 4, Math.PI / 4, Math.PI / 4, Math.PI / 4];
    class yR {
      constructor() {
        this.preScaled = !1, this.l00 = wW.q.Zero(), this.l1_1 = wW.q.Zero(), this.l10 = wW.q.Zero(), this.l11 = wW.q.Zero(), this.l2_2 = wW.q.Zero(), this.l2_1 = wW.q.Zero(), this.l20 = wW.q.Zero(), this.l21 = wW.q.Zero(), this.l22 = wW.q.Zero()
      }
      addLight(WW, RW, MW) {
        wW.k.vC[0].set(RW.r, RW.g, RW.b);
        const CW = wW.k.vC[0],
          zR = wW.k.vC[1];
        CW.scaleToRef(MW, zR), zR.scaleToRef(AW(0, WW), wW.k.vC[2]), this.l00.addInPlace(wW.k.vC[2]), zR.scaleToRef(AW(1, WW), wW.k.vC[2]), this.l1_1.addInPlace(wW.k.vC[2]), zR.scaleToRef(AW(2, WW), wW.k.vC[2]), this.l10.addInPlace(wW.k.vC[2]), zR.scaleToRef(AW(3, WW), wW.k.vC[2]), this.l11.addInPlace(wW.k.vC[2]), zR.scaleToRef(AW(4, WW), wW.k.vC[2]), this.l2_2.addInPlace(wW.k.vC[2]), zR.scaleToRef(AW(5, WW), wW.k.vC[2]), this.l2_1.addInPlace(wW.k.vC[2]), zR.scaleToRef(AW(6, WW), wW.k.vC[2]), this.l20.addInPlace(wW.k.vC[2]), zR.scaleToRef(AW(7, WW), wW.k.vC[2]), this.l21.addInPlace(wW.k.vC[2]), zR.scaleToRef(AW(8, WW), wW.k.vC[2]), this.l22.addInPlace(wW.k.vC[2])
      }
      scaleInPlace(WW) {
        this.l00.scaleInPlace(WW), this.l1_1.scaleInPlace(WW), this.l10.scaleInPlace(WW), this.l11.scaleInPlace(WW), this.l2_2.scaleInPlace(WW), this.l2_1.scaleInPlace(WW), this.l20.scaleInPlace(WW), this.l21.scaleInPlace(WW), this.l22.scaleInPlace(WW)
      }
      convertIncidentRadianceToIrradiance() {
        this.l00.scaleInPlace(bR[0]), this.l1_1.scaleInPlace(bR[1]), this.l10.scaleInPlace(bR[2]), this.l11.scaleInPlace(bR[3]), this.l2_2.scaleInPlace(bR[4]), this.l2_1.scaleInPlace(bR[5]), this.l20.scaleInPlace(bR[6]), this.l21.scaleInPlace(bR[7]), this.l22.scaleInPlace(bR[8])
      }
      convertIrradianceToLambertianRadiance() {
        this.scaleInPlace(1 / Math.PI)
      }
      preScaleForRendering() {
        this.preScaled = !0, this.l00.scaleInPlace(CW[0]), this.l1_1.scaleInPlace(CW[1]), this.l10.scaleInPlace(CW[2]), this.l11.scaleInPlace(CW[3]), this.l2_2.scaleInPlace(CW[4]), this.l2_1.scaleInPlace(CW[5]), this.l20.scaleInPlace(CW[6]), this.l21.scaleInPlace(CW[7]), this.l22.scaleInPlace(CW[8])
      }
      updateFromArray(WW) {
        return wW.q.FromArrayToRef(WW[0], 0, this.l00), wW.q.FromArrayToRef(WW[1], 0, this.l1_1), wW.q.FromArrayToRef(WW[2], 0, this.l10), wW.q.FromArrayToRef(WW[3], 0, this.l11), wW.q.FromArrayToRef(WW[4], 0, this.l2_2), wW.q.FromArrayToRef(WW[5], 0, this.l2_1), wW.q.FromArrayToRef(WW[6], 0, this.l20), wW.q.FromArrayToRef(WW[7], 0, this.l21), wW.q.FromArrayToRef(WW[8], 0, this.l22), this
      }
      updateFromFloatsArray(WW) {
        return wW.q.FromFloatsToRef(WW[0], WW[1], WW[2], this.l00), wW.q.FromFloatsToRef(WW[3], WW[4], WW[5], this.l1_1), wW.q.FromFloatsToRef(WW[6], WW[7], WW[8], this.l10), wW.q.FromFloatsToRef(WW[9], WW[10], WW[11], this.l11), wW.q.FromFloatsToRef(WW[12], WW[13], WW[14], this.l2_2), wW.q.FromFloatsToRef(WW[15], WW[16], WW[17], this.l2_1), wW.q.FromFloatsToRef(WW[18], WW[19], WW[20], this.l20), wW.q.FromFloatsToRef(WW[21], WW[22], WW[23], this.l21), wW.q.FromFloatsToRef(WW[24], WW[25], WW[26], this.l22), this
      }
      static FromArray(WW) {
        return (new yR).updateFromArray(WW)
      }
      static FromPolynomial(WW) {
        const RW = new yR;
        return RW.l00 = WW.xx.scale(.376127).add(WW.yy.scale(.376127)).add(WW.zz.scale(.376126)), RW.l1_1 = WW.y.scale(.977204), RW.l10 = WW.z.scale(.977204), RW.l11 = WW.x.scale(.977204), RW.l2_2 = WW.xy.scale(1.16538), RW.l2_1 = WW.yz.scale(1.16538), RW.l20 = WW.zz.scale(1.34567).subtract(WW.xx.scale(.672834)).subtract(WW.yy.scale(.672834)), RW.l21 = WW.zx.scale(1.16538), RW.l22 = WW.xx.scale(1.16538).subtract(WW.yy.scale(1.16538)), RW.l1_1.scaleInPlace(-1), RW.l11.scaleInPlace(-1), RW.l2_1.scaleInPlace(-1), RW.l21.scaleInPlace(-1), RW.scaleInPlace(Math.PI), RW
      }
    }
    class NW {
      constructor() {
        this.x = wW.q.Zero(), this.y = wW.q.Zero(), this.z = wW.q.Zero(), this.xx = wW.q.Zero(), this.yy = wW.q.Zero(), this.zz = wW.q.Zero(), this.xy = wW.q.Zero(), this.yz = wW.q.Zero(), this.zx = wW.q.Zero()
      }
      get preScaledHarmonics() {
        return this._harmonics || (this._harmonics = yR.FromPolynomial(this)), this._harmonics.preScaled || this._harmonics.preScaleForRendering(), this._harmonics
      }
      addAmbient(WW) {
        wW.k.vC[0].nzW(WW.r, WW.g, WW.b);
        const RW = wW.k.vC[0];
        this.xx.addInPlace(RW), this.yy.addInPlace(RW), this.zz.addInPlace(RW)
      }
      scaleInPlace(WW) {
        this.x.scaleInPlace(WW), this.y.scaleInPlace(WW), this.z.scaleInPlace(WW), this.xx.scaleInPlace(WW), this.yy.scaleInPlace(WW), this.zz.scaleInPlace(WW), this.yz.scaleInPlace(WW), this.zx.scaleInPlace(WW), this.xy.scaleInPlace(WW)
      }
      updateFromHarmonics(WW) {
        return this._harmonics = WW, this.x.hyW(WW.l11), this.x.scaleInPlace(1.02333).scaleInPlace(-1), this.y.hyW(WW.l1_1), this.y.scaleInPlace(1.02333).scaleInPlace(-1), this.z.hyW(WW.l10), this.z.scaleInPlace(1.02333), this.xx.hyW(WW.l00), wW.k.vC[0].hyW(WW.l20).scaleInPlace(.247708), wW.k.vC[1].hyW(WW.l22).scaleInPlace(.429043), this.xx.scaleInPlace(.886277).pNW(wW.k.vC[0]).addInPlace(wW.k.vC[1]), this.yy.hyW(WW.l00), this.yy.scaleInPlace(.886277).pNW(wW.k.vC[0]).pNW(wW.k.vC[1]), this.zz.hyW(WW.l00), wW.k.vC[0].hyW(WW.l20).scaleInPlace(.495417), this.zz.scaleInPlace(.886277).addInPlace(wW.k.vC[0]), this.yz.hyW(WW.l2_1), this.yz.scaleInPlace(.858086).scaleInPlace(-1), this.zx.hyW(WW.l21), this.zx.scaleInPlace(.858086).scaleInPlace(-1), this.xy.hyW(WW.l2_2), this.xy.scaleInPlace(.858086), this.scaleInPlace(1 / Math.PI), this
      }
      static FromHarmonics(WW) {
        return (new NW).updateFromHarmonics(WW)
      }
      static FromArray(WW) {
        const RW = new NW;
        return wW.q.FromArrayToRef(WW[0], 0, RW.x), wW.q.FromArrayToRef(WW[1], 0, RW.y), wW.q.FromArrayToRef(WW[2], 0, RW.z), wW.q.FromArrayToRef(WW[3], 0, RW.xx), wW.q.FromArrayToRef(WW[4], 0, RW.yy), wW.q.FromArrayToRef(WW[5], 0, RW.zz), wW.q.FromArrayToRef(WW[6], 0, RW.yz), wW.q.FromArrayToRef(WW[7], 0, RW.zx), wW.q.FromArrayToRef(WW[8], 0, RW.xy), RW
      }
    }
  },
  38028: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => sW,
      f: () => pW
    });
    var wW = MW(37587),
      CW = MW(35346),
      zR = MW(35324),
      AW = MW(37722),
      bR = MW(38003),
      yR = MW(38032),
      NW = MW(37716),
      eW = MW(37884),
      BW = MW(37712);
    class tR {
      constructor() {
        this._checkCollisions = !1, this._collisionMask = -1, this._collisionGroup = -1, this._surroundingMeshes = null, this._collider = null, this._oldPositionForCollisions = new zR.q(0, 0, 0), this._diffPositionForCollisions = new zR.q(0, 0, 0), this._collisionResponse = !0
      }
    }
    var TW, gR, iR, YW = MW(37470),
      JW = MW(37659),
      PW = MW(37896),
      IW = MW(35376),
      oW = MW(35328),
      lW = MW(37809),
      FW = MW(36721),
      fW = MW(37593),
      QW = MW(37485),
      rR = MW(35361);

    function cR(WW, RW) {
      return WW - Math.floor(WW / RW) * RW
    }

    function XW(WW, RW, MW) {
      WW instanceof Float32Array ? zR.d.FromArrayToRef(WW, RW, MW) : MW.nzW((0, JW.e)(WW[RW]), (0, JW.e)(WW[RW + 1]), (0, JW.e)(WW[RW + 2]), (0, JW.e)(WW[RW + 3]), (0, JW.e)(WW[RW + 4]), (0, JW.e)(WW[RW + 5]), (0, JW.e)(WW[RW + 6]), (0, JW.e)(WW[RW + 7]), (0, JW.e)(WW[RW + 8]), (0, JW.e)(WW[RW + 9]), (0, JW.e)(WW[RW + 10]), (0, JW.e)(WW[RW + 11]), (0, JW.e)(WW[RW + 12]), (0, JW.e)(WW[RW + 13]), (0, JW.e)(WW[RW + 14]), (0, JW.e)(WW[RW + 15]))
    }

    function jR(WW, RW, MW, wW, CW, bR, yR, NW, eW) {
      const BW = MW.texture,
        tR = BW?.getInternalTexture(),
        TW = tR?._bufferView;
      if (!(TW instanceof Float32Array) && !(TW instanceof Uint16Array)) return FW.b.Warn("Baked vertex animation bounding info requires CPU-readable Float32Array or Uint16Array texture data.", 1), !1;
      const gR = BW.getSize(),
        iR = function(WW, RW) {
          const MW = WW.y - WW.x + 1,
            wW = RW * WW.w / MW,
            CW = wW < 1 ? 0 : 1,
            zR = MW - CW;
          let AW = cR(wW - Math.floor(wW), 1) * zR;
          return AW = cR(AW + WW.z, zR), Math.floor(AW) + WW.x + CW
        }(wW, MW.time);
      if (!isFinite(iR) || iR < 0 || iR >= gR.height) return FW.b.Warn("Baked vertex animation bounding info could not be refreshed because the computed frame is outside the texture.", 1), !1;
      const YW = zR.k.vC[0],
        JW = zR.k.Matrix[0],
        PW = zR.k.Matrix[1],
        IW = iR * gR.width * 4,
        oW = RW === AW.j.NormalKind ? zR.q.TransformNormalFromFloatsToRef : zR.q.TransformCoordinatesFromFloatsToRef;
      for (let zR = 0, AW = 0; zR < WW.length; zR += 3, AW += 4) {
        let RW, MW;
        for (JW.reset(), RW = 0; RW < 4 && RW < eW; RW++) MW = bR[AW + RW], MW > 0 && (XW(TW, IW + 16 * Math.floor(CW[AW + RW]), PW), PW.scaleAndAddToRef(MW, JW));
        if (yR && NW)
          for (RW = 0; RW < 4 && RW + 4 < eW; RW++) MW = NW[AW + RW], MW > 0 && (XW(TW, IW + 16 * Math.floor(yR[AW + RW]), PW), PW.scaleAndAddToRef(MW, JW));
        oW(WW[zR], WW[zR + 1], WW[zR + 2], JW, YW), YW.toArray(WW, zR)
      }
      return !0
    }
    class kR {
      constructor() {
        this.facetNb = 0, this.partitioningSubdivisions = 10, this.partitioningBBoxRatio = 1.01, this.facetDataEnabled = !1, this.facetParameters = {}, this.bbSize = zR.q.Zero(), this.subDiv = {
          max: 1,
          X: 1,
          Y: 1,
          Z: 1
        }, this.facetDepthSort = !1, this.facetDepthSortEnabled = !1
      }
    }
    class aR {
      constructor() {
        this._hasVertexAlpha = !1, this._useVertexColors = !0, this._numBoneInfluencers = 4, this._applyFog = !0, this._receiveShadows = !1, this._facetData = new kR, this._visibility = 1, this._skeleton = null, this._layerMask = 268435455, this._computeBonesUsingShaders = !0, this._isActive = !1, this._onlyForInstances = !1, this._isActiveIntermediate = !1, this._onlyForInstancesIntermediate = !1, this._actAsRegularMesh = !1, this._currentLOD = new Map, this._collisionRetryCount = 3, this._morphTargetManager = null, this._renderingGroupId = 0, this._meshBlendingTag = 0, this._bakedVertexAnimationManager = null, this._material = null, this._positions = null, this._pointerOverDisableMeshTesting = !1, this._meshCollisionData = new tR, this._enableDistantPicking = !1, this._rawBoundingInfo = null, this._sideOrientationHint = !1, this._wasActiveLastFrame = !1
      }
    }
    let sW = (() => {
        var WW;
        let RW, tR = yR.f,
          TW = [];
        return WW = class extends tR {
          static get BILLBOARDMODE_NONE() {
            return yR.f.BILLBOARDMODE_NONE
          }
          static get BILLBOARDMODE_X() {
            return yR.f.BILLBOARDMODE_X
          }
          static get BILLBOARDMODE_Y() {
            return yR.f.BILLBOARDMODE_Y
          }
          static get BILLBOARDMODE_Z() {
            return yR.f.BILLBOARDMODE_Z
          }
          static get BILLBOARDMODE_ALL() {
            return yR.f.BILLBOARDMODE_ALL
          }
          static get BILLBOARDMODE_USE_POSITION() {
            return yR.f.BILLBOARDMODE_USE_POSITION
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
          set YR(WW) {
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
            const RW = this._internalAbstractMeshDataInfo._visibility;
            this._internalAbstractMeshDataInfo._visibility = WW, (1 === RW && 1 !== WW || 1 !== RW && 1 === WW) && this._markSubMeshesAsDirty((WW => {
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
            this._internalAbstractMeshDataInfo._material !== WW && (this._internalAbstractMeshDataInfo._material && this._internalAbstractMeshDataInfo._material.meshMap && (this._internalAbstractMeshDataInfo._material.meshMap[this.uniqueId] = void 0), this._internalAbstractMeshDataInfo._material = WW, WW && WW.meshMap && (WW.meshMap[this.uniqueId] = this), this.onMaterialChangedObservable.hasObservers() && this.onMaterialChangedObservable.notifyObservers(this), this.Qs && (this.resetDrawCache(void 0, null == WW), this._unBindEffect()))
          }
          getMaterialForRenderPass(WW) {
            return this._internalAbstractMeshDataInfo._materialForRenderPass?.[WW]
          }
          setMaterialForRenderPass(WW, RW) {
            this.resetDrawCache(WW), this._internalAbstractMeshDataInfo._materialForRenderPass || (this._internalAbstractMeshDataInfo._materialForRenderPass = []);
            const MW = this._internalAbstractMeshDataInfo._materialForRenderPass[WW];
            MW?.meshMap?.[this.uniqueId] && (MW.meshMap[this.uniqueId] = void 0), this._internalAbstractMeshDataInfo._materialForRenderPass[WW] = RW, RW && RW.meshMap && (RW.meshMap[this.uniqueId] = this)
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
            const RW = this._internalAbstractMeshDataInfo._skeleton;
            RW && RW.needInitialSkinMatrix && RW._unregisterMeshWithPoseMatrix(this), WW && WW.needInitialSkinMatrix && WW._registerMeshWithPoseMatrix(this), this._internalAbstractMeshDataInfo._skeleton = WW, this._internalAbstractMeshDataInfo._skeleton || (this._bonesTransformMatrices = null), this._markSubMeshesAsAttributesDirty()
          }
          get skeleton() {
            return this._internalAbstractMeshDataInfo._skeleton
          }
          constructor(RW) {
            var MW;
            let wW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            switch (super(RW, wW, !1), MW = this, this._internalAbstractMeshDataInfo = new aR, this._waitingMaterialId = null, this._waitingMorphTargetManagerId = null, this._waitingSkeletonId = null, this._waitingSkeletonUniqueId = null, this.cullingStrategy = WW.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY, this.onCollideObservable = new CW.c, this.onCollisionPositionChangeObservable = new CW.c, this.onMaterialChangedObservable = new CW.c, this.definedFacingForward = !0, this._occlusionQuery = null, this._renderingGroup = null, this.alphaIndex = Number.MAX_VALUE, this.DC = WW.DefaultIsPickable, this.isNearPickable = !1, this.isNearGrabbable = !1, this.showSubMeshesBoundingBox = !1, this.isBlocker = !1, this.enablePointerMoveEvents = !1, this.outlineColor = IW.d.Red(), this.outlineWidth = .02, this.overlayColor = IW.d.Red(), this.overlayAlpha = .5, this.useOctreeForRenderingSelection = !0, this.useOctreeForPicking = !0, this.useOctreeForCollisions = !0, this.xC = !1, this.uw = !1, this.actionManager = null, this.ellipsoid = new zR.q(.5, 1, .5), this.ellipsoidOffset = new zR.q(0, 0, 0), this.edgesWidth = 1, this.edgesColor = new IW.h(1, 0, 0, 1), this._edgesRenderer = null, this._masterMesh = null, this._boundingInfo = null, this._boundingInfoIsDirty = !0, this._renderId = 0, this._intersectionsInProgress = new Array, this._unIndexed = !1, this._lightSources = new Array, this._waitingData = {
                lods: null,
                actions: null,
                aMW: null
              }, this._bonesTransformMatrices = null, this._transformMatrixTexture = null, this.onRebuildObservable = new CW.c, this._onCollisionPositionChange = function(WW, RW) {
                let wW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                RW.subtractToRef(MW._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions, MW._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions), MW._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions.length() > QW.b.CollisionsEpsilon && MW.position.addInPlace(MW._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions), wW && MW.onCollideObservable.notifyObservers(wW), MW.onCollisionPositionChangeObservable.notifyObservers(MW.position)
              }, wW = this.QRW(), this.layerMask = wW.defaultRenderableLayerMask, wW.TNW(this), this._resyncLightSources(), this._uniformBuffer = new BW.b(this.QRW().mC(), void 0, void 0, RW, !this.QRW().mC().isWebGPU), this._buildUniformLayout(), wW.performancePriority) {
              case 2:
                this.uw = !0;
              case 1:
                this.xC = !0, this.DC = !1
            }
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("world", 16), this._uniformBuffer.addUniform("visibility", 1), this._uniformBuffer.create()
          }
          transferToEffect(WW) {
            const RW = this._uniformBuffer;
            RW.aAW("world", WW), RW.updateFloat("visibility", this._internalAbstractMeshDataInfo._visibility), RW.update()
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
            let RW = "Name: " + this.name + ", isInstance: " + ("InstancedMesh" === this.getClassName() ? "YES" : "NO");
            RW += ", # of submeshes: " + (this.Qs ? this.Qs.length : 0);
            const MW = this._internalAbstractMeshDataInfo._skeleton;
            return MW && (RW += ", skeleton: " + MW.name), WW && (RW += ", billboard mode: " + ["NONE", "X", "Y", null, "Z", null, null, "ALL"][this.billboardMode], RW += ", freeze wrld mat: " + (this._isWorldMatrixFrozen || this._waitingData.aMW ? "YES" : "NO")), RW
          }
          _getEffectiveParent() {
            return this._masterMesh && this.billboardMode !== yR.f.BILLBOARDMODE_NONE ? this._masterMesh : super._getEffectiveParent()
          }
          _getActionManagerForTrigger(WW) {
            let RW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            if (this.actionManager && (RW || this.actionManager.isRecursive)) {
              if (!WW) return this.actionManager;
              if (this.actionManager.hasSpecificTrigger(WW)) return this.actionManager
            }
            return this.parent ? this.parent._getActionManagerForTrigger(WW, !1) : null
          }
          _releaseRenderPassId(WW) {}
          _rebuild() {
            if (this.onRebuildObservable.notifyObservers(this), null !== this._occlusionQuery && (this._occlusionQuery = null), this.Qs) {
              for (const WW of this.Qs) WW._rebuild();
              this.resetDrawCache()
            }
          }
          _resyncLightSources() {
            this._lightSources.length = 0;
            for (const WW of this.QRW().lights) WW.isEnabled() && WW.canAffectMesh(this) && this._lightSources.push(WW);
            this._markSubMeshesAsLightDirty()
          }
          _resyncLightSource(WW) {
            const RW = WW.isEnabled() && WW.canAffectMesh(this),
              MW = this._lightSources.indexOf(WW);
            let wW = !1;
            if (-1 === MW) {
              if (!RW) return;
              this._lightSources.push(WW)
            } else {
              if (RW) return;
              wW = !0, this._lightSources.splice(MW, 1)
            }
            this._markSubMeshesAsLightDirty(wW)
          }
          _unBindEffect() {
            for (const WW of this.Qs) WW.setEffect(null)
          }
          _removeLightSource(WW, RW) {
            const MW = this._lightSources.indexOf(WW); - 1 !== MW && (this._lightSources.splice(MW, 1), this._markSubMeshesAsLightDirty(RW))
          }
          _markSubMeshesAsDirty(WW) {
            if (this.Qs)
              for (const RW of this.Qs)
                for (let MW = 0; MW < RW._drawWrappers.length; ++MW) {
                  const wW = RW._drawWrappers[MW];
                  wW && wW.defines && wW.defines.markAllAsDirty && WW(wW.defines)
                }
          }
          _markSubMeshesAsLightDirty() {
            let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            this._markSubMeshesAsDirty((RW => RW.markAsLightDirty(WW)))
          }
          _markSubMeshesAsAttributesDirty() {
            this._markSubMeshesAsDirty((WW => WW.markAsAttributesDirty()))
          }
          _markSubMeshesAsMiscDirty() {
            this._markSubMeshesAsDirty((WW => WW.markAsMiscDirty()))
          }
          KbW(WW) {
            return this._currentRenderId = Number.MAX_VALUE, super.KbW(WW), this._isDirty = !0, this
          }
          resetDrawCache(WW) {
            let RW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (this.Qs)
              for (const MW of this.Qs) MW.resetDrawCache(WW, RW)
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
          ptW() {
            return null
          }
          getVerticesData(WW) {
            return null
          }
          setVerticesData(WW, RW, MW, wW) {
            return this
          }
          updateVerticesData(WW, RW, MW, wW) {
            return this
          }
          setIndices(WW, RW) {
            return this
          }
          isVerticesDataPresent(WW) {
            return !1
          }
          LRW() {
            return this._masterMesh ? this._masterMesh.LRW() : (this._boundingInfoIsDirty && (this._boundingInfoIsDirty = !1, this._updateBoundingInfo()), this._boundingInfo)
          }
          getRawBoundingInfo() {
            return this.rawBoundingInfo ?? this.LRW()
          }
          setBoundingInfo(WW) {
            return this._boundingInfo = WW, this
          }
          get hasBoundingInfo() {
            return null !== this._boundingInfo
          }
          buildBoundingInfo(WW, RW, MW) {
            return this._boundingInfo = new eW.e(WW, RW, MW), this._boundingInfo
          }
          normalizeToUnitCube() {
            let WW = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
              RW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              MW = arguments.length > 2 ? arguments[2] : void 0;
            return super.normalizeToUnitCube(WW, RW, MW)
          }
          get useBones() {
            return this.skeleton && this.QRW().skeletonsEnabled && this.isVerticesDataPresent(AW.j.MatricesIndicesKind) && this.isVerticesDataPresent(AW.j.MatricesWeightsKind)
          }
          _preActivate() {}
          _preActivateForIntermediateRendering(WW) {}
          _activate(WW, RW) {
            return this._renderId = WW, !0
          }
          _postActivate() {}
          _freeze() {}
          _unFreeze() {}
          getWorldMatrix() {
            return this._masterMesh && this.billboardMode === yR.f.BILLBOARDMODE_NONE ? this._masterMesh.getWorldMatrix() : super.getWorldMatrix()
          }
          _getWorldMatrixDeterminant() {
            return this._masterMesh ? this._masterMesh._getWorldMatrixDeterminant() : super._getWorldMatrixDeterminant()
          }
          get cMW() {
            return !1
          }
          get bBW() {
            return !1
          }
          get hasThinInstances() {
            return !1
          }
          movePOV(WW, RW, MW) {
            return this.position.addInPlace(this.calcMovePOV(WW, RW, MW)), this
          }
          calcMovePOV(WW, RW, MW) {
            const wW = new zR.d;
            (this.rotationQuaternion ? this.rotationQuaternion : zR.e.RotationYawPitchRoll(this.rotation.y, this.rotation.x, this.rotation.z)).toRotationMatrix(wW);
            const CW = zR.q.Zero(),
              AW = this.definedFacingForward ? -1 : 1;
            return zR.q.TransformCoordinatesFromFloatsToRef(WW * AW, RW, MW * AW, wW, CW), CW
          }
          rotatePOV(WW, RW, MW) {
            return this.rotation.addInPlace(this.calcRotatePOV(WW, RW, MW)), this
          }
          calcRotatePOV(WW, RW, MW) {
            const wW = this.definedFacingForward ? 1 : -1;
            return new zR.q(WW * wW, RW, MW * wW)
          }
          _refreshBoundingInfo(WW, RW) {
            if (WW) {
              const MW = (0, PW.i)(WW, 0, this.getTotalVertices(), RW);
              this._boundingInfo ? this._boundingInfo.reConstruct(MW.minimum, MW.maximum) : this._boundingInfo = new eW.e(MW.minimum, MW.maximum)
            }
            if (this.Qs)
              for (let MW = 0; MW < this.Qs.length; MW++) this.Qs[MW].refreshBoundingInfo(WW);
            this._updateBoundingInfo()
          }
          _refreshBoundingInfoDirect(WW) {
            if (this._boundingInfo ? this._boundingInfo.reConstruct(WW.minimum, WW.maximum) : this._boundingInfo = new eW.e(WW.minimum, WW.maximum), this.Qs)
              for (let RW = 0; RW < this.Qs.length; RW++) this.Qs[RW].refreshBoundingInfo(null);
            this._updateBoundingInfo()
          }
          static _ApplySkeleton(WW, RW, MW, wW, CW, bR, yR) {
            ! function(WW, RW, MW, wW, CW, bR, yR) {
              const NW = zR.k.vC[0],
                eW = zR.k.Matrix[0],
                BW = zR.k.Matrix[1],
                tR = RW === AW.j.NormalKind ? zR.q.TransformNormalFromFloatsToRef : zR.q.TransformCoordinatesFromFloatsToRef;
              for (let AW = 0, TW = 0; AW < WW.length; AW += 3, TW += 4) {
                let RW, gR;
                for (eW.reset(), RW = 0; RW < 4; RW++) gR = CW[TW + RW], gR > 0 && (zR.d.FromFloat32ArrayToRefScaled(MW, Math.floor(16 * wW[TW + RW]), gR, BW), eW.addToSelf(BW));
                if (bR && yR)
                  for (RW = 0; RW < 4; RW++) gR = yR[TW + RW], gR > 0 && (zR.d.FromFloat32ArrayToRefScaled(MW, Math.floor(16 * bR[TW + RW]), gR, BW), eW.addToSelf(BW));
                tR(WW[AW], WW[AW + 1], WW[AW + 2], eW, NW), NW.toArray(WW, AW)
              }
            }(WW, RW, MW, wW, CW, bR, yR)
          }
          _getData(RW, MW) {
            let wW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : AW.j.PositionKind;
            const CW = RW.cache,
              bR = WW => {
                if (CW) {
                  const RW = CW._vertexData || (CW._vertexData = {});
                  return RW[WW] || this.copyVerticesData(WW, RW), RW[WW]
                }
                return this.getVerticesData(WW)
              };
            if (MW || (MW = bR(wW)), !MW) return null;
            CW ? (CW._outputData ? CW._outputData.set(MW) : CW._outputData = new Float32Array(MW), MW = CW._outputData) : (RW.applyMorph && this.morphTargetManager || RW.applySkeleton && this.skeleton || RW.applyBakedVertexAnimation && this.bakedVertexAnimationManager?.isEnabled) && (MW = MW.slice()), RW.applyMorph && this.morphTargetManager && function(WW, RW, MW) {
              let wW;
              switch (RW) {
                case AW.j.PositionKind:
                  wW = WW => WW.getPositions();
                  break;
                case AW.j.NormalKind:
                  wW = WW => WW.getNormals();
                  break;
                case AW.j.TangentKind:
                  wW = WW => WW.getTangents();
                  break;
                case AW.j.UVKind:
                  wW = WW => WW.getUVs();
                  break;
                case AW.j.UV2Kind:
                  wW = WW => WW.getUV2s();
                  break;
                case AW.j.ColorKind:
                  wW = WW => WW.getColors();
                  break;
                default:
                  return
              }
              for (let CW = 0; CW < WW.length; CW++) {
                let RW = WW[CW];
                for (let zR = 0; zR < MW.numTargets; zR++) {
                  const AW = MW.getTarget(zR),
                    bR = AW.influence;
                  if (0 !== bR) {
                    const MW = wW(AW);
                    MW && (RW += (MW[CW] - WW[CW]) * bR)
                  }
                }
                WW[CW] = RW
              }
            }(MW, wW, this.morphTargetManager);
            const yR = this.bakedVertexAnimationManager;
            let NW = !1;
            if (RW.applyBakedVertexAnimation && yR?.isEnabled) {
              const WW = bR(AW.j.MatricesIndicesKind),
                CW = bR(AW.j.MatricesWeightsKind);
              if (CW && WW) {
                const zR = this.numBoneInfluencers > 4,
                  eW = zR ? bR(AW.j.MatricesIndicesExtraKind) : null,
                  BW = zR ? bR(AW.j.MatricesWeightsExtraKind) : null;
                NW = jR(MW, wW, yR, RW.bakedVertexAnimationSettings ?? yR.animationParameters, WW, CW, eW, BW, this.numBoneInfluencers)
              }
            }
            if (!NW && RW.applySkeleton && this.skeleton) {
              const RW = bR(AW.j.MatricesIndicesKind),
                CW = bR(AW.j.MatricesWeightsKind);
              if (CW && RW) {
                const zR = this.numBoneInfluencers > 4,
                  yR = zR ? bR(AW.j.MatricesIndicesExtraKind) : null,
                  NW = zR ? bR(AW.j.MatricesWeightsExtraKind) : null,
                  eW = this.skeleton.getTransformMatrices(this);
                WW._ApplySkeleton(MW, wW, eW, RW, CW, yR, NW)
              }
            }
            if (!1 !== RW.updatePositionsArray && wW === AW.j.PositionKind) {
              const WW = this._internalAbstractMeshDataInfo._positions || [],
                RW = WW.length;
              if (WW.length = MW.length / 3, RW < WW.length)
                for (let MW = RW; MW < WW.length; MW++) WW[MW] = new zR.q;
              for (let wW = 0, CW = 0; wW < WW.length; wW++, CW += 3) WW[wW].nzW(MW[CW], MW[CW + 1], MW[CW + 2]);
              this._internalAbstractMeshDataInfo._positions = WW
            }
            return MW
          }
          getNormalsData() {
            let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              RW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return this._getData({
              applySkeleton: WW,
              applyMorph: RW,
              updatePositionsArray: !1
            }, null, AW.j.NormalKind)
          }
          QwW() {
            let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              RW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            return this._getData({
              applySkeleton: WW,
              applyMorph: RW,
              updatePositionsArray: !1
            }, MW, AW.j.PositionKind)
          }
          _updateBoundingInfo() {
            return this._boundingInfo ? this._boundingInfo.update(this.worldMatrixFromCache) : this._boundingInfo = new eW.e(zR.q.Zero(), zR.q.Zero(), this.worldMatrixFromCache), this._updateSubMeshesBoundingInfo(this.worldMatrixFromCache), this
          }
          _updateSubMeshesBoundingInfo(WW) {
            if (!this.Qs) return this;
            const RW = this.Qs.length;
            for (let MW = 0; MW < RW; MW++) {
              const wW = this.Qs[MW];
              (RW > 1 || !wW.IsGlobal) && wW.updateBoundingInfo(WW)
            }
            return this
          }
          _afterComputeWorldMatrix() {
            this.uw || (this._boundingInfoIsDirty = !0)
          }
          isInFrustum(WW) {
            return this.LRW().isInFrustum(WW, this.cullingStrategy)
          }
          isCompletelyInFrustum(WW) {
            return this.LRW().isCompletelyInFrustum(WW)
          }
          ReW(WW) {
            let RW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              MW = arguments.length > 2 ? arguments[2] : void 0;
            const wW = this.LRW(),
              CW = WW.LRW();
            if (wW.intersects(CW, RW)) return !0;
            if (MW)
              for (const zR of this.getChildMeshes())
                if (zR.ReW(WW, RW, !0)) return !0;
            return !1
          }
          intersectsPoint(WW) {
            return this.LRW().intersectsPoint(WW)
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
            let RW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            this.getAbsolutePosition().addToRef(this.ellipsoidOffset, this._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions);
            const MW = this.QRW().collisionCoordinator;
            return this._internalAbstractMeshDataInfo._meshCollisionData._collider || (this._internalAbstractMeshDataInfo._meshCollisionData._collider = MW.createCollider()), this._internalAbstractMeshDataInfo._meshCollisionData._collider._radius = this.ellipsoid, MW.getNewPosition(this._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions, WW, this._internalAbstractMeshDataInfo._meshCollisionData._collider, this.collisionRetryCount, this, this._onCollisionPositionChange, this.uniqueId, RW), this
          }
          _collideForSubMesh(WW, RW, MW) {
            if (this._generatePointsArray(), !this._positions) return this;
            if (!WW._lastColliderWorldVertices || !WW._lastColliderTransformMatrix.equals(RW)) {
              WW._lastColliderTransformMatrix = RW.clone(), WW._lastColliderWorldVertices = [], WW._trianglePlanes = [];
              const MW = WW.verticesStart,
                wW = WW.verticesStart + WW.verticesCount;
              for (let CW = MW; CW < wW; CW++) WW._lastColliderWorldVertices.push(zR.q.TransformCoordinates(this._positions[CW], RW))
            }
            return MW._collide(WW._trianglePlanes, WW._lastColliderWorldVertices, this.ptW(), WW.indexStart, WW.indexStart + WW.indexCount, WW.verticesStart, !!WW.Ow(), this, this._shouldConvertRHS(), 7 === WW.Ow()?.fillMode), this
          }
          _processCollisionsForSubMeshes(WW, RW) {
            const MW = this._scene.getCollidingSubMeshCandidates(this, WW),
              wW = MW.length;
            for (let CW = 0; CW < wW; CW++) {
              const zR = MW.data[CW];
              wW > 1 && !zR._checkCollision(WW) || this._collideForSubMesh(zR, RW, WW)
            }
            return this
          }
          _shouldConvertRHS() {
            return !1
          }
          _checkCollision(WW) {
            if (!this.LRW()._checkCollision(WW)) return this;
            const RW = zR.k.Matrix[0],
              MW = zR.k.Matrix[1];
            return zR.d.ScalingToRef(1 / WW._radius.x, 1 / WW._radius.y, 1 / WW._radius.z, RW), this.worldMatrixFromCache.multiplyToRef(RW, MW), this._processCollisionsForSubMeshes(WW, MW), this
          }
          _generatePointsArray() {
            return !1
          }
          intersects(WW, RW, MW) {
            let wW = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              CW = arguments.length > 4 ? arguments[4] : void 0,
              AW = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
            const bR = new NW.d,
              yR = this.getClassName(),
              eW = "InstancedLinesMesh" === yR || "LinesMesh" === yR || "GreasedLineMesh" === yR ? this.intersectionThreshold : 0,
              BW = this.LRW();
            if (!this.Qs) return bR;
            if (!AW && (!WW.intersectsSphere(BW.VNW, eW) || !WW.intersectsBox(BW.boundingBox, eW))) return bR;
            if (wW) return bR.hit = !AW, bR.pickedMesh = AW ? null : this, bR.distance = AW ? 0 : zR.q.Distance(WW.origin, BW.VNW.center), bR.subMeshId = 0, bR;
            if (!this._generatePointsArray()) return bR;
            let tR = null;
            const TW = this._scene.getIntersectingSubMeshCandidates(this, WW),
              gR = TW.length;
            let iR = !1;
            for (let zR = 0; zR < gR; zR++) {
              const WW = TW.data[zR].Ow();
              if (WW && (7 == WW.fillMode || 0 == WW.fillMode || 1 == WW.fillMode || 2 == WW.fillMode || 4 == WW.fillMode)) {
                iR = !0;
                break
              }
            }
            if (!iR) return bR.hit = !0, bR.pickedMesh = this, bR.distance = zR.q.Distance(WW.origin, BW.VNW.center), bR.subMeshId = -1, bR;
            for (let zR = 0; zR < gR; zR++) {
              const wW = TW.data[zR];
              if (gR > 1 && !AW && !wW.canIntersects(WW)) continue;
              const CW = wW.intersects(WW, this._positions, this.ptW(), RW, MW);
              if (CW && (RW || !tR || CW.distance < tR.distance) && (tR = CW, tR.subMeshId = wW._id, tR._internalSubMeshId = zR, RW)) break
            }
            if (tR) {
              const RW = CW ?? this.getWorldMatrix(),
                MW = zR.k.vC[0],
                wW = zR.k.vC[1];
              zR.q.TransformCoordinatesToRef(WW.origin, RW, MW), WW.direction.scaleToRef(tR.distance, wW);
              const AW = zR.q.TransformNormal(wW, RW).addInPlace(MW);
              return bR.hit = !0, bR.distance = zR.q.Distance(MW, AW), bR.pickedPoint = AW, bR.pickedMesh = this, bR.bu = tR.bu || 0, bR.bv = tR.bv || 0, bR.subMeshFaceId = tR.faceId, bR.faceId = tR.faceId + TW.data[tR._internalSubMeshId].indexStart / (-1 !== this.getClassName().indexOf("LinesMesh") ? 2 : 3), bR.subMeshId = tR.subMeshId, bR
            }
            return bR
          }
          clone(WW, RW, MW) {
            return null
          }
          releaseSubMeshes() {
            let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (this.Qs)
              for (; this.Qs.length;) this.Qs[0].dispose(WW);
            else this.Qs = [];
            return this
          }
          dispose(WW) {
            let RW, MW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            const wW = this.QRW();
            for (this._scene.useMaterialMeshMap && this._internalAbstractMeshDataInfo._material && this._internalAbstractMeshDataInfo._material.meshMap && (this._internalAbstractMeshDataInfo._material.meshMap[this.uniqueId] = void 0), wW.freeActiveMeshes(), wW.freeRenderingGroups(), wW.renderingManager.maintainStateBetweenFrames && wW.renderingManager.restoreDispachedFlags(), void 0 !== this.actionManager && null !== this.actionManager && (this.actionManager.disposeWhenUnowned && !this._scene.meshes.some((WW => WW !== this && WW.actionManager === this.actionManager)) && this.actionManager.dispose(), this.actionManager = null), this._internalAbstractMeshDataInfo._skeleton = null, this._transformMatrixTexture && (this._transformMatrixTexture.dispose(), this._transformMatrixTexture = null), RW = 0; RW < this._intersectionsInProgress.length; RW++) {
              const WW = this._intersectionsInProgress[RW],
                MW = WW._intersectionsInProgress.indexOf(this);
              WW._intersectionsInProgress.splice(MW, 1)
            }
            this._intersectionsInProgress.length = 0;
            const CW = wW.lights;
            for (const AW of CW) {
              let WW = AW.includedOnlyMeshes.indexOf(this); - 1 !== WW && AW.includedOnlyMeshes.splice(WW, 1), WW = AW.excludedMeshes.indexOf(this), -1 !== WW && AW.excludedMeshes.splice(WW, 1);
              const RW = AW.getShadowGenerators();
              if (RW) {
                const MW = RW.values();
                for (let RW = MW.next(); !0 !== RW.done; RW = MW.next()) {
                  const MW = RW.value.getShadowMap();
                  MW && MW.renderList && (WW = MW.renderList.indexOf(this), -1 !== WW && MW.renderList.splice(WW, 1))
                }
              }
            }
            this.releaseSubMeshes(wW._isDisposing);
            const zR = wW.mC();
            if (null !== this._occlusionQuery && (this.isOcclusionQueryInProgress = !1, zR.deleteQuery(this._occlusionQuery), this._occlusionQuery = null), zR.wipeCaches(), wW.dRW(this), this._parentContainer) {
              const WW = this._parentContainer.meshes.indexOf(this);
              WW > -1 && this._parentContainer.meshes.splice(WW, 1), this._parentContainer = null
            }
            if (MW && this.material && ("MultiMaterial" === this.material.getClassName() ? this.material.dispose(!1, !0, !0) : this.material.dispose(!1, !0)), !WW)
              for (RW = 0; RW < wW.Xs.length; RW++) wW.Xs[RW].emitter === this && (wW.Xs[RW].dispose(), RW--);
            this._internalAbstractMeshDataInfo._facetData.facetDataEnabled && this.disableFacetData(), this._uniformBuffer.dispose(), this.onAfterWorldMatrixUpdateObservable.clear(), this.onCollideObservable.clear(), this.onCollisionPositionChangeObservable.clear(), this.onRebuildObservable.clear(), super.dispose(WW, MW)
          }
          _initFacetData() {
            const WW = this._internalAbstractMeshDataInfo._facetData;
            WW.facetNormals || (WW.facetNormals = []), WW.facetPositions || (WW.facetPositions = []), WW.facetPartitioning || (WW.facetPartitioning = new Array), WW.facetNb = this.ptW().length / 3 | 0, WW.partitioningSubdivisions = WW.partitioningSubdivisions ? WW.partitioningSubdivisions : 10, WW.partitioningBBoxRatio = WW.partitioningBBoxRatio ? WW.partitioningBBoxRatio : 1.01;
            for (let RW = 0; RW < WW.facetNb; RW++) WW.facetNormals[RW] = zR.q.Zero(), WW.facetPositions[RW] = zR.q.Zero();
            return WW.facetDataEnabled = !0, this
          }
          updateFacetData() {
            const WW = this._internalAbstractMeshDataInfo._facetData;
            WW.facetDataEnabled || this._initFacetData();
            const RW = this.getVerticesData(AW.j.PositionKind),
              MW = this.ptW(),
              wW = this.getVerticesData(AW.j.NormalKind)?.slice(),
              CW = this.LRW();
            if (WW.facetDepthSort && !WW.facetDepthSortEnabled) {
              if (WW.facetDepthSortEnabled = !0, MW instanceof Uint16Array) WW.depthSortedIndices = new Uint16Array(MW);
              else if (MW instanceof Uint32Array) WW.depthSortedIndices = new Uint32Array(MW);
              else {
                let RW = !1;
                for (let WW = 0; WW < MW.length; WW++)
                  if (MW[WW] > 65535) {
                    RW = !0;
                    break
                  } WW.depthSortedIndices = RW ? new Uint32Array(MW) : new Uint16Array(MW)
              }
              if (WW.facetDepthSortFunction = function(WW, RW) {
                  return RW.sqDistance - WW.sqDistance
                }, !WW.facetDepthSortFrom) {
                const RW = this.QRW().activeCamera;
                WW.facetDepthSortFrom = RW ? RW.position : zR.q.Zero()
              }
              WW.depthSortedFacets = [];
              for (let RW = 0; RW < WW.facetNb; RW++) {
                const MW = {
                  ind: 3 * RW,
                  sqDistance: 0
                };
                WW.depthSortedFacets.push(MW)
              }
              WW.invertedMatrix = zR.d.Identity(), WW.facetDepthSortOrigin = zR.q.Zero()
            }
            WW.bbSize.x = CW.maximum.x - CW.minimum.x > oW.c ? CW.maximum.x - CW.minimum.x : oW.c, WW.bbSize.y = CW.maximum.y - CW.minimum.y > oW.c ? CW.maximum.y - CW.minimum.y : oW.c, WW.bbSize.z = CW.maximum.z - CW.minimum.z > oW.c ? CW.maximum.z - CW.minimum.z : oW.c;
            let yR = WW.bbSize.x > WW.bbSize.y ? WW.bbSize.x : WW.bbSize.y;
            if (yR = yR > WW.bbSize.z ? yR : WW.bbSize.z, WW.subDiv.max = WW.partitioningSubdivisions, WW.subDiv.X = Math.floor(WW.subDiv.max * WW.bbSize.x / yR), WW.subDiv.Y = Math.floor(WW.subDiv.max * WW.bbSize.y / yR), WW.subDiv.Z = Math.floor(WW.subDiv.max * WW.bbSize.z / yR), WW.subDiv.X = WW.subDiv.X < 1 ? 1 : WW.subDiv.X, WW.subDiv.Y = WW.subDiv.Y < 1 ? 1 : WW.subDiv.Y, WW.subDiv.Z = WW.subDiv.Z < 1 ? 1 : WW.subDiv.Z, WW.facetParameters.facetNormals = this.getFacetLocalNormals(), WW.facetParameters.facetPositions = this.getFacetLocalPositions(), WW.facetParameters.facetPartitioning = this.getFacetLocalPartitioning(), WW.facetParameters.bInfo = CW, WW.facetParameters.bbSize = WW.bbSize, WW.facetParameters.subDiv = WW.subDiv, WW.facetParameters.ratio = this.partitioningBBoxRatio, WW.facetParameters.depthSort = WW.facetDepthSort, WW.facetDepthSort && WW.facetDepthSortEnabled && (this.computeWorldMatrix(!0), this._worldMatrix.invertToRef(WW.invertedMatrix), zR.q.TransformCoordinatesToRef(WW.facetDepthSortFrom, WW.invertedMatrix, WW.facetDepthSortOrigin), WW.facetParameters.distanceTo = WW.facetDepthSortOrigin), WW.facetParameters.depthSortedFacets = WW.depthSortedFacets, wW && bR.c.ComputeNormals(RW, MW, wW, WW.facetParameters), WW.facetDepthSort && WW.facetDepthSortEnabled) {
              WW.depthSortedFacets.sort(WW.facetDepthSortFunction);
              const RW = WW.depthSortedIndices.length / 3 | 0;
              for (let wW = 0; wW < RW; wW++) {
                const RW = WW.depthSortedFacets[wW].ind;
                WW.depthSortedIndices[3 * wW] = MW[RW], WW.depthSortedIndices[3 * wW + 1] = MW[RW + 1], WW.depthSortedIndices[3 * wW + 2] = MW[RW + 2]
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
            const RW = zR.q.Zero();
            return this.getFacetPositionToRef(WW, RW), RW
          }
          getFacetPositionToRef(WW, RW) {
            const MW = this.getFacetLocalPositions()[WW],
              wW = this.getWorldMatrix();
            return zR.q.TransformCoordinatesToRef(MW, wW, RW), this
          }
          getFacetNormal(WW) {
            const RW = zR.q.Zero();
            return this.getFacetNormalToRef(WW, RW), RW
          }
          getFacetNormalToRef(WW, RW) {
            const MW = this.getFacetLocalNormals()[WW];
            return zR.q.TransformNormalToRef(MW, this.getWorldMatrix(), RW), this
          }
          getFacetsAtLocalCoordinates(WW, RW, MW) {
            const wW = this.LRW(),
              CW = this._internalAbstractMeshDataInfo._facetData,
              zR = Math.floor((WW - wW.minimum.x * CW.partitioningBBoxRatio) * CW.subDiv.X * CW.partitioningBBoxRatio / CW.bbSize.x),
              AW = Math.floor((RW - wW.minimum.y * CW.partitioningBBoxRatio) * CW.subDiv.Y * CW.partitioningBBoxRatio / CW.bbSize.y),
              bR = Math.floor((MW - wW.minimum.z * CW.partitioningBBoxRatio) * CW.subDiv.Z * CW.partitioningBBoxRatio / CW.bbSize.z);
            return zR < 0 || zR > CW.subDiv.max || AW < 0 || AW > CW.subDiv.max || bR < 0 || bR > CW.subDiv.max ? null : CW.facetPartitioning[zR + CW.subDiv.max * AW + CW.subDiv.max * CW.subDiv.max * bR]
          }
          getClosestFacetAtCoordinates(WW, RW, MW, wW) {
            let CW = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              AW = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
            const bR = this.getWorldMatrix(),
              yR = zR.k.Matrix[5];
            bR.invertToRef(yR);
            const NW = zR.k.vC[8];
            zR.q.TransformCoordinatesFromFloatsToRef(WW, RW, MW, yR, NW);
            const eW = this.getClosestFacetAtLocalCoordinates(NW.x, NW.y, NW.z, wW, CW, AW);
            return wW && zR.q.TransformCoordinatesFromFloatsToRef(wW.x, wW.y, wW.z, bR, wW), eW
          }
          getClosestFacetAtLocalCoordinates(WW, RW, MW, wW) {
            let CW, zR, AW, bR, yR, NW, eW, BW, tR = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              TW = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
              gR = null;
            const iR = this.getFacetLocalPositions(),
              YW = this.getFacetLocalNormals(),
              JW = this.getFacetsAtLocalCoordinates(WW, RW, MW);
            if (!JW) return null;
            let PW, IW, oW, lW, FW = Number.MAX_VALUE;
            for (let fW = 0; fW < JW.length; fW++) IW = JW[fW], oW = YW[IW], lW = iR[IW], bR = (WW - lW.x) * oW.x + (RW - lW.y) * oW.y + (MW - lW.z) * oW.z, (!tR || tR && TW && bR >= 0 || tR && !TW && bR <= 0) && (bR = oW.x * lW.x + oW.y * lW.y + oW.z * lW.z, yR = -(oW.x * WW + oW.y * RW + oW.z * MW - bR) / (oW.x * oW.x + oW.y * oW.y + oW.z * oW.z), NW = WW + oW.x * yR, eW = RW + oW.y * yR, BW = MW + oW.z * yR, CW = NW - WW, zR = eW - RW, AW = BW - MW, PW = CW * CW + zR * zR + AW * AW, PW < FW && (FW = PW, gR = IW, wW && (wW.x = NW, wW.y = eW, wW.z = BW)));
            return gR
          }
          getFacetDataParameters() {
            return this._internalAbstractMeshDataInfo._facetData.facetParameters
          }
          disableFacetData() {
            const WW = this._internalAbstractMeshDataInfo._facetData;
            return WW.facetDataEnabled && (WW.facetDataEnabled = !1, WW.facetPositions = [], WW.facetNormals = [], WW.facetPartitioning = new Array, WW.facetParameters = {}, WW.depthSortedIndices = new Uint32Array(0)), this
          }
          updateIndices(WW, RW) {
            return this
          }
          createNormals(WW) {
            const RW = this.getVerticesData(AW.j.PositionKind),
              MW = this.ptW();
            let wW;
            return wW = this.isVerticesDataPresent(AW.j.NormalKind) ? this.getVerticesData(AW.j.NormalKind) : [], bR.c.ComputeNormals(RW, MW, wW, {
              useRightHandedSystem: this.QRW().useRightHandedSystem
            }), this.setVerticesData(AW.j.NormalKind, wW, WW), this
          }
          async optimizeIndicesAsync() {
            const WW = this.ptW();
            if (!WW) return this;
            const {
              OptimizeIndices: RW
            } = await MW.e(321).then((() => MW(39984)));
            return RW(WW), this.setIndices(WW, this.getTotalVertices()), this
          }
          alignWithNormal(WW, RW) {
            RW || (RW = lW.b.Y);
            const MW = zR.k.vC[0],
              wW = zR.k.vC[1];
            return zR.q.CrossToRef(RW, WW, wW), zR.q.CrossToRef(WW, wW, MW), this.rotationQuaternion ? zR.e.RotationQuaternionFromAxisToRef(MW, WW, wW, this.rotationQuaternion) : zR.q.RotationFromAxisToRef(MW, WW, wW, this.rotation), this
          }
          _checkOcclusionQuery() {
            return !1
          }
          disableEdgesRendering() {
            throw (0, YW.g)("EdgesRenderer")
          }
          enableEdgesRendering(WW, RW, MW) {
            throw (0, YW.g)("EdgesRenderer")
          }
          getConnectedParticleSystems() {
            return this._scene.Xs.filter((WW => WW.emitter === this))
          }
        }, (() => {
          const MW = "function" === typeof Symbol && Symbol.metadata ? Object.create(tR[Symbol.metadata] ?? null) : void 0;
          RW = [fW.i.filter((function() {
            return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0]) && !Array.isArray(arguments.length <= 3 ? void 0 : arguments[3]) && !Array.isArray(arguments.length <= 4 ? void 0 : arguments[4]) && !Array.isArray(arguments.length <= 5 ? void 0 : arguments[5]) && !Array.isArray(arguments.length <= 6 ? void 0 : arguments[6])
          }))], (0, wW.e)(WW, null, RW, {
            kind: "method",
            name: "_ApplySkeleton",
            static: !0,
            private: !1,
            access: {
              has: WW => "_ApplySkeleton" in WW,
              get: WW => WW._ApplySkeleton
            },
            metadata: MW
          }, null, TW), MW && Object.defineProperty(WW, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: MW
          })
        })(), WW.OCCLUSION_TYPE_NONE = ((0, wW.i)(WW, TW), 0), WW.OCCLUSION_TYPE_OPTIMISTIC = 1, WW.OCCLUSION_TYPE_STRICT = 2, WW.OCCLUSION_ALGORITHM_TYPE_ACCURATE = 0, WW.OCCLUSION_ALGORITHM_TYPE_CONSERVATIVE = 1, WW.CULLINGSTRATEGY_STANDARD = 0, WW.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY = 1, WW.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION = 2, WW.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION_THEN_BSPHERE_ONLY = 3, WW.DefaultIsPickable = !0, WW
      })(),
      dW = !1;

    function pW() {
      dW || (dW = !0, (0, rR.e)("BABYLON.AbstractMesh", sW))
    }(TW = sW.prototype).createOrUpdateSubmeshesOctree ?? (TW.createOrUpdateSubmeshesOctree = (0, YW.f)("AbstractMesh", "createOrUpdateSubmeshesOctree")), (gR = sW.prototype).getPhysicsImpostor ?? (gR.getPhysicsImpostor = (0, YW.f)("AbstractMesh", "getPhysicsImpostor")), (iR = sW.prototype).setPhysicsLinkWith ?? (iR.setPhysicsLinkWith = (0, YW.f)("AbstractMesh", "setPhysicsLinkWith")), Object.getOwnPropertyDescriptor(sW.prototype, "occlusionRetryCount") || Object.defineProperty(sW.prototype, "occlusionRetryCount", (0, YW.e)("AbstractMesh", "occlusionRetryCount")), Object.getOwnPropertyDescriptor(sW.prototype, "occlusionType") || Object.defineProperty(sW.prototype, "occlusionType", (0, YW.e)("AbstractMesh", "occlusionType")), Object.getOwnPropertyDescriptor(sW.prototype, "occlusionQueryAlgorithmType") || Object.defineProperty(sW.prototype, "occlusionQueryAlgorithmType", (0, YW.e)("AbstractMesh", "occlusionQueryAlgorithmType")), Object.getOwnPropertyDescriptor(sW.prototype, "isOccluded") || Object.defineProperty(sW.prototype, "isOccluded", (0, YW.e)("AbstractMesh", "isOccluded")), Object.getOwnPropertyDescriptor(sW.prototype, "isOcclusionQueryInProgress") || Object.defineProperty(sW.prototype, "isOcclusionQueryInProgress", (0, YW.e)("AbstractMesh", "isOcclusionQueryInProgress")), Object.getOwnPropertyDescriptor(sW.prototype, "forceRenderingWhenOccluded") || Object.defineProperty(sW.prototype, "forceRenderingWhenOccluded", (0, YW.e)("AbstractMesh", "forceRenderingWhenOccluded")), Object.getOwnPropertyDescriptor(sW.prototype, "occlusionForRenderPassId") || Object.defineProperty(sW.prototype, "occlusionForRenderPassId", (0, YW.e)("AbstractMesh", "occlusionForRenderPassId")), Object.getOwnPropertyDescriptor(sW.prototype, "decalMap") || Object.defineProperty(sW.prototype, "decalMap", (0, YW.e)("AbstractMesh", "decalMap")), Object.getOwnPropertyDescriptor(sW.prototype, "ORW") || Object.defineProperty(sW.prototype, "ORW", (0, YW.e)("AbstractMesh", "ORW")), Object.getOwnPropertyDescriptor(sW.prototype, "physicsImpostor") || Object.defineProperty(sW.prototype, "physicsImpostor", (0, YW.e)("AbstractMesh", "physicsImpostor")), Object.getOwnPropertyDescriptor(sW.prototype, "showBoundingBox") || Object.defineProperty(sW.prototype, "showBoundingBox", (0, YW.e)("AbstractMesh", "showBoundingBox")), Object.getOwnPropertyDescriptor(sW.prototype, "edgesRenderer") || Object.defineProperty(sW.prototype, "edgesRenderer", (0, YW.e)("AbstractMesh", "edgesRenderer")), Object.getOwnPropertyDescriptor(sW.prototype, "renderOutline") || Object.defineProperty(sW.prototype, "renderOutline", (0, YW.e)("AbstractMesh", "renderOutline")), Object.getOwnPropertyDescriptor(sW.prototype, "renderOverlay") || Object.defineProperty(sW.prototype, "renderOverlay", (0, YW.e)("AbstractMesh", "renderOverlay"))
  },
  38010: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => JW
    });
    var wW = MW(35324),
      CW = MW(35376),
      zR = MW(38003),
      AW = MW(37722),
      bR = MW(37874),
      yR = MW(38016),
      NW = MW(37884),
      eW = MW(37685),
      BW = MW(36721),
      tR = MW(37621),
      TW = MW(37896),
      gR = MW(35344),
      iR = MW(38019),
      YW = MW(37652);
    class JW {
      get boundingBias() {
        return this._boundingBias
      }
      set boundingBias(WW) {
        this._boundingBias ? this._boundingBias.hyW(WW) : this._boundingBias = WW.clone(), this._updateBoundingInfo(!0, null)
      }
      static CreateGeometryForMesh(WW) {
        const RW = new JW(JW.RandomId(), WW.QRW());
        return RW.applyToMesh(WW), RW
      }
      get meshes() {
        return this._meshes
      }
      constructor(WW, RW, MW) {
        let CW = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          zR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          AW = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        this.delayLoadState = 0, this._totalVertices = 0, this._isDisposed = !1, this._extend = {
          minimum: new wW.q(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE),
          maximum: new wW.q(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE)
        }, this._indexBufferIsUpdatable = !1, this._positionsCache = [], this._parentContainer = null, this.useBoundingInfoFromGeometry = !1, this._scene = RW || gR.d.LastCreatedScene, this._scene && (this.id = WW, this.uniqueId = this._scene.getUniqueId(), this._engine = this._scene.mC(), this._meshes = [], this._vertexBuffers = {}, this._indices = [], this._updatable = CW, null !== AW && (this._totalVertices = AW), MW ? this.setAllVerticesData(MW, CW) : null === AW && (this._totalVertices = 0), this._engine.getCaps().vertexArrayObject && (this._vertexArrayObjects = {}), zR && (this.applyToMesh(zR), zR.computeWorldMatrix(!0)))
      }
      get extend() {
        return this._extend
      }
      QRW() {
        return this._scene
      }
      mC() {
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
        for (const RW in this._vertexBuffers) WW.add(this._vertexBuffers[RW].getWrapperBuffer());
        WW.forEach((WW => {
          WW._rebuild()
        }))
      }
      setAllVerticesData(WW, RW) {
        WW.applyToGeometry(this, RW), this._notifyUpdate()
      }
      setVerticesData(WW, RW) {
        let MW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          wW = arguments.length > 3 ? arguments[3] : void 0;
        MW && Array.isArray(RW) && (RW = new Float32Array(RW));
        const CW = new AW.j(this._engine, RW, WW, {
          updatable: MW,
          postponeInternalCreation: 0 === this._meshes.length,
          stride: wW,
          label: "Geometry_" + this.id + "_" + WW
        });
        this.setVerticesBuffer(CW)
      }
      removeVerticesData(WW) {
        this._vertexBuffers[WW] && (this._vertexBuffers[WW].dispose(), delete this._vertexBuffers[WW]), this._vertexArrayObjects && this._disposeVertexArrayObjects()
      }
      setVerticesBuffer(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          MW = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        const CW = WW.getKind();
        this._vertexBuffers[CW] && MW && this._vertexBuffers[CW].dispose(), WW._buffer && WW._ownsBuffer && WW._buffer._increaseReferences(), this._vertexBuffers[CW] = WW;
        const zR = this._meshes,
          bR = zR.length;
        if (CW === AW.j.PositionKind) {
          this._totalVertices = RW ?? WW._maxVerticesCount, this._updateExtend(this.useBoundingInfoFromGeometry && this._boundingInfo ? null : WW.getFloatData(this._totalVertices)), this._resetPointsArrayCache();
          const MW = this._extend && this._extend.minimum || new wW.q(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE),
            CW = this._extend && this._extend.maximum || new wW.q(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
          for (let WW = 0; WW < bR; WW++) {
            const RW = zR[WW];
            RW.buildBoundingInfo(MW, CW), RW._createGlobalSubMesh(RW.isUnIndexed), RW.computeWorldMatrix(!0), RW.synchronizeInstances()
          }
        }
        this._notifyUpdate(CW)
      }
      updateVerticesDataDirectly(WW, RW, MW) {
        let wW = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const CW = this.getVertexBuffer(WW);
        CW && (CW.updateDirectly(RW, MW, wW), this._notifyUpdate(WW))
      }
      updateVerticesData(WW, RW) {
        let MW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const wW = this.getVertexBuffer(WW);
        wW && (wW.update(RW), WW === AW.j.PositionKind && this._updateBoundingInfo(MW, RW), this._notifyUpdate(WW))
      }
      _updateBoundingInfo(WW, RW) {
        if (WW && this._updateExtend(RW), this._resetPointsArrayCache(), WW) {
          const WW = this._meshes;
          for (const RW of WW) {
            RW.hasBoundingInfo ? RW.LRW().reConstruct(this._extend.minimum, this._extend.maximum) : RW.buildBoundingInfo(this._extend.minimum, this._extend.maximum);
            const WW = RW.Qs;
            for (const RW of WW) RW.refreshBoundingInfo()
          }
        }
      }
      _bind(WW, RW, MW, wW) {
        if (!WW) return;
        void 0 === RW && (RW = this._indexBuffer);
        const CW = this.getVertexBuffers();
        if (!CW) return;
        if (RW != this._indexBuffer || !this._vertexArrayObjects && !wW) return void this._engine.bindBuffers(CW, RW, WW, MW);
        const zR = wW || this._vertexArrayObjects,
          AW = this._engine;
        zR[WW.key] || (zR[WW.key] = AW.recordVertexArrayObject(CW, RW, WW, MW)), AW.bindVertexArrayObject(zR[WW.key], RW)
      }
      getTotalVertices() {
        return this.isReady() ? this._totalVertices : 0
      }
      getVerticesData(WW, RW, MW) {
        const wW = this.getVertexBuffer(WW);
        return wW ? wW.getFloatData(this._totalVertices, MW || RW && 1 !== this._meshes.length) : null
      }
      copyVerticesData(WW, RW) {
        const MW = this.getVertexBuffer(WW);
        if (!MW) return;
        RW[WW] || (RW[WW] = new Float32Array(this._totalVertices * MW.getSize()));
        const wW = MW.getData();
        wW && (0, YW.h)(wW, MW.getSize(), MW.type, MW.byteOffset, MW.byteStride, MW.normalized, this._totalVertices, RW[WW])
      }
      isVertexBufferUpdatable(WW) {
        const RW = this._vertexBuffers[WW];
        return !!RW && RW.isUpdatable()
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
        let RW;
        if (!this._vertexBuffers && this._delayInfo)
          for (RW in this._delayInfo) WW.push(RW);
        else
          for (RW in this._vertexBuffers) WW.push(RW);
        return WW
      }
      updateIndices(WW, RW) {
        let MW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this._indexBuffer)
          if (this._indexBufferIsUpdatable) {
            const wW = WW.length !== this._indices.length;
            if (MW || (this._indices = WW.slice()), this._engine.updateDynamicIndexBuffer(this._indexBuffer, WW, RW), wW)
              for (const WW of this._meshes) WW._createGlobalSubMesh(!0)
          } else this.setIndices(WW, null, !0)
      }
      setIndexBuffer(WW, RW, MW) {
        let wW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._indices = [], this._indexBufferIsUpdatable = !1, this._indexBuffer = WW, this._totalVertices = RW, this._totalIndices = MW, WW.is32Bits = null === wW ? RW > 65535 : wW;
        for (const CW of this._meshes) CW._createGlobalSubMesh(!0), CW.synchronizeInstances();
        this._notifyUpdate()
      }
      setIndices(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          MW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          wW = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this._indexBuffer && this._engine._releaseBuffer(this._indexBuffer), this._indices = WW, this._indexBufferIsUpdatable = MW, 0 !== this._meshes.length && this._indices && (this._indexBuffer = this._engine.createIndexBuffer(this._indices, MW, "Geometry_" + this.id + "_IndexBuffer")), void 0 != RW && (this._totalVertices = RW);
        for (const CW of this._meshes) CW._createGlobalSubMesh(!wW), CW.synchronizeInstances();
        this._notifyUpdate()
      }
      getTotalIndices() {
        return this.isReady() ? void 0 !== this._totalIndices ? this._totalIndices : this._indices.length : 0
      }
      ptW(WW, RW) {
        if (!this.isReady()) return null;
        const MW = this._indices;
        return RW || WW && 1 !== this._meshes.length ? MW.slice() : MW
      }
      getIndexBuffer() {
        return this.isReady() ? this._indexBuffer : null
      }
      _releaseVertexArrayObject() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        WW && this._vertexArrayObjects && this._vertexArrayObjects[WW.key] && (this._engine.releaseVertexArrayObject(this._vertexArrayObjects[WW.key]), delete this._vertexArrayObjects[WW.key])
      }
      releaseForMesh(WW, RW) {
        const MW = this._meshes,
          wW = MW.indexOf(WW); - 1 !== wW && (MW.splice(wW, 1), this._vertexArrayObjects && WW._invalidateInstanceVertexArrayObject(), WW._geometry = null, 0 === MW.length && RW && this.dispose())
      }
      applyToMesh(WW) {
        if (WW._geometry === this) return;
        const RW = WW._geometry;
        RW && RW.releaseForMesh(WW), this._vertexArrayObjects && WW._invalidateInstanceVertexArrayObject();
        const MW = this._meshes;
        WW._geometry = this, WW._internalAbstractMeshDataInfo._positions = null, this._scene.pushGeometry(this), MW.push(WW), this.isReady() ? this._applyToMesh(WW) : this._boundingInfo && WW.setBoundingInfo(this._boundingInfo)
      }
      _updateExtend() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (this.useBoundingInfoFromGeometry && this._boundingInfo) this._extend = {
          minimum: this._boundingInfo.minimum.clone(),
          maximum: this._boundingInfo.maximum.clone()
        };
        else {
          if (!WW && (WW = this.getVerticesData(AW.j.PositionKind), !WW)) return;
          this._extend = (0, TW.i)(WW, 0, this._totalVertices, this.boundingBias, 3)
        }
      }
      _applyToMesh(WW) {
        for (const RW in this._vertexBuffers) {
          const MW = this._vertexBuffers[RW];
          MW._buffer.getBuffer() || MW.create(), RW === AW.j.PositionKind && (this._extend || this._updateExtend(), WW.buildBoundingInfo(this._extend.minimum, this._extend.maximum), WW._createGlobalSubMesh(WW.isUnIndexed), WW._updateBoundingInfo())
        }!this._indexBuffer && this._indices && this._indices.length > 0 && (this._indexBuffer = this._engine.createIndexBuffer(this._indices, this._updatable, "Geometry_" + this.id + "_IndexBuffer")), WW._syncGeometryWithMorphTargetManager(), WW.synchronizeInstances()
      }
      _notifyUpdate(WW) {
        this.onGeometryUpdated && this.onGeometryUpdated(this, WW), this._vertexArrayObjects && this._disposeVertexArrayObjects();
        for (const RW of this._meshes) RW._markSubMeshesAsAttributesDirty()
      }
      load(WW, RW) {
        2 !== this.delayLoadState && (this.isReady() ? RW && RW() : (this.delayLoadState = 2, this._queueLoad(WW, RW)))
      }
      _queueLoad(WW, RW) {
        this.delayLoadingFile && (WW.addPendingData(this), (async () => {
          try {
            const MW = await WW._loadDelayedFileAsync(this.delayLoadingFile, !1, !0);
            if (!this._delayLoadingFunction) return void WW.removePendingData(this);
            this._delayLoadingFunction(JSON.parse(MW), this), this.delayLoadState = 1, this._delayInfo = [], WW.removePendingData(this);
            const wW = this._meshes,
              CW = wW.length;
            for (let WW = 0; WW < CW; WW++) this._applyToMesh(wW[WW]);
            RW && RW()
          } catch (MW) {
            WW.removePendingData(this), WW.cNW || BW.b.Error(`Unable to delay load geometry "${this.id}" from "${this.delayLoadingFile}": ${MW}`)
          }
        })())
      }
      toLeftHanded() {
        const WW = this.ptW(!1);
        if (null != WW && WW.length > 0) {
          for (let RW = 0; RW < WW.length; RW += 3) {
            const MW = WW[RW + 0];
            WW[RW + 0] = WW[RW + 2], WW[RW + 2] = MW
          }
          this.setIndices(WW)
        }
        const RW = this.getVerticesData(AW.j.PositionKind, !1);
        if (null != RW && RW.length > 0) {
          for (let WW = 0; WW < RW.length; WW += 3) RW[WW + 2] = -RW[WW + 2];
          this.setVerticesData(AW.j.PositionKind, RW, !1)
        }
        const MW = this.getVerticesData(AW.j.NormalKind, !1);
        if (null != MW && MW.length > 0) {
          for (let WW = 0; WW < MW.length; WW += 3) MW[WW + 2] = -MW[WW + 2];
          this.setVerticesData(AW.j.NormalKind, MW, !1)
        }
      }
      _resetPointsArrayCache() {
        this._positions = null
      }
      _generatePointsArray() {
        if (this._positions) return !0;
        const WW = this.getVerticesData(AW.j.PositionKind);
        if (!WW || 0 === WW.length) return !1;
        for (let RW = 3 * this._positionsCache.length, MW = this._positionsCache.length; RW < WW.length; RW += 3, ++MW) this._positionsCache[MW] = wW.q.FromArray(WW, RW);
        for (let RW = 0, MW = 0; RW < WW.length; RW += 3, ++MW) this._positionsCache[MW].set(WW[0 + RW], WW[1 + RW], WW[2 + RW]);
        return this._positionsCache.length = WW.length / 3, this._positions = this._positionsCache, !0
      }
      cNW() {
        return this._isDisposed
      }
      _disposeVertexArrayObjects() {
        if (this._vertexArrayObjects) {
          for (const MW in this._vertexArrayObjects) this._engine.releaseVertexArrayObject(this._vertexArrayObjects[MW]);
          this._vertexArrayObjects = {};
          const WW = this._meshes,
            RW = WW.length;
          for (let MW = 0; MW < RW; MW++) WW[MW]._invalidateInstanceVertexArrayObject()
        }
      }
      dispose() {
        const WW = this._meshes,
          RW = WW.length;
        let MW;
        for (MW = 0; MW < RW; MW++) this.releaseForMesh(WW[MW]);
        this._meshes.length = 0, this._disposeVertexArrayObjects();
        for (const wW in this._vertexBuffers) this._vertexBuffers[wW].dispose();
        if (this._vertexBuffers = {}, this._totalVertices = 0, this._indexBuffer && this._engine._releaseBuffer(this._indexBuffer), this._indexBuffer = null, this._indices = [], this.delayLoadState = 0, this.delayLoadingFile = null, this._delayLoadingFunction = null, this._delayInfo = [], this._boundingInfo = null, this._scene.removeGeometry(this), this._parentContainer) {
          const WW = this._parentContainer.geometries.indexOf(this);
          WW > -1 && this._parentContainer.geometries.splice(WW, 1), this._parentContainer = null
        }
        this._isDisposed = !0
      }
      copy(WW) {
        const RW = new JW(WW, this._scene),
          MW = this.ptW(void 0, !0);
        MW && RW.setIndices(MW);
        let wW, CW = !1;
        for (wW in this._vertexBuffers) {
          const WW = this.getVertexBuffer(wW),
            MW = WW.getData();
          if (!MW) continue;
          const zR = WW.isUpdatable(),
            bR = WW.getSize(),
            {
              type: yR,
              byteOffset: NW,
              byteStride: eW,
              normalized: BW
            } = WW;
          CW = CW || zR;
          let tR = this._totalVertices;
          if (WW.getIsInstanced()) {
            let WW;
            WW = MW instanceof Array ? 4 * MW.length : MW.byteLength, tR = WW / eW
          }
          const TW = (0, YW.t)(MW, bR, yR, NW, eW, tR, !0),
            gR = new AW.j(this._engine, TW, wW, {
              updatable: zR,
              useBytes: !1,
              stride: bR,
              size: bR,
              offset: 0,
              type: yR,
              normalized: BW,
              takeBufferOwnership: !0,
              instanced: WW.getIsInstanced()
            });
          RW.setVerticesBuffer(gR, tR)
        }
        for (wW in RW._updatable = CW, RW.delayLoadState = this.delayLoadState, RW.delayLoadingFile = this.delayLoadingFile, RW._delayLoadingFunction = this._delayLoadingFunction, this._delayInfo) RW._delayInfo = RW._delayInfo || [], RW._delayInfo.push(wW);
        return RW._boundingInfo = new NW.e(this._extend.minimum, this._extend.maximum), RW
      }
      serialize() {
        const WW = {};
        return WW.id = this.id, WW.uniqueId = this.uniqueId, WW.updatable = this._updatable, tR.d && tR.d.HasTags(this) && (WW.tags = tR.d.GetTags(this)), WW
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
        return this.isVerticesDataPresent(AW.j.PositionKind) && (WW.positions = this._toNumberArray(this.getVerticesData(AW.j.PositionKind)), this.isVertexBufferUpdatable(AW.j.PositionKind) && (WW.positionsUpdatable = !0)), this.isVerticesDataPresent(AW.j.NormalKind) && (WW.normals = this._toNumberArray(this.getVerticesData(AW.j.NormalKind)), this.isVertexBufferUpdatable(AW.j.NormalKind) && (WW.normalsUpdatable = !0)), this.isVerticesDataPresent(AW.j.TangentKind) && (WW.tangents = this._toNumberArray(this.getVerticesData(AW.j.TangentKind)), this.isVertexBufferUpdatable(AW.j.TangentKind) && (WW.tangentsUpdatable = !0)), this.isVerticesDataPresent(AW.j.UVKind) && (WW.uvs = this._toNumberArray(this.getVerticesData(AW.j.UVKind)), this.isVertexBufferUpdatable(AW.j.UVKind) && (WW.uvsUpdatable = !0)), this.isVerticesDataPresent(AW.j.UV2Kind) && (WW.uvs2 = this._toNumberArray(this.getVerticesData(AW.j.UV2Kind)), this.isVertexBufferUpdatable(AW.j.UV2Kind) && (WW.uvs2Updatable = !0)), this.isVerticesDataPresent(AW.j.UV3Kind) && (WW.uvs3 = this._toNumberArray(this.getVerticesData(AW.j.UV3Kind)), this.isVertexBufferUpdatable(AW.j.UV3Kind) && (WW.uvs3Updatable = !0)), this.isVerticesDataPresent(AW.j.UV4Kind) && (WW.uvs4 = this._toNumberArray(this.getVerticesData(AW.j.UV4Kind)), this.isVertexBufferUpdatable(AW.j.UV4Kind) && (WW.uvs4Updatable = !0)), this.isVerticesDataPresent(AW.j.UV5Kind) && (WW.uvs5 = this._toNumberArray(this.getVerticesData(AW.j.UV5Kind)), this.isVertexBufferUpdatable(AW.j.UV5Kind) && (WW.uvs5Updatable = !0)), this.isVerticesDataPresent(AW.j.UV6Kind) && (WW.uvs6 = this._toNumberArray(this.getVerticesData(AW.j.UV6Kind)), this.isVertexBufferUpdatable(AW.j.UV6Kind) && (WW.uvs6Updatable = !0)), this.isVerticesDataPresent(AW.j.ColorKind) && (WW.colors = this._toNumberArray(this.getVerticesData(AW.j.ColorKind)), this.isVertexBufferUpdatable(AW.j.ColorKind) && (WW.colorsUpdatable = !0)), this.isVerticesDataPresent(AW.j.MatricesIndicesKind) && (WW.matricesIndices = this._toNumberArray(this.getVerticesData(AW.j.MatricesIndicesKind)), WW.matricesIndicesExpanded = !0, this.isVertexBufferUpdatable(AW.j.MatricesIndicesKind) && (WW.matricesIndicesUpdatable = !0)), this.isVerticesDataPresent(AW.j.MatricesWeightsKind) && (WW.matricesWeights = this._toNumberArray(this.getVerticesData(AW.j.MatricesWeightsKind)), this.isVertexBufferUpdatable(AW.j.MatricesWeightsKind) && (WW.matricesWeightsUpdatable = !0)), WW.indices = this._toNumberArray(this.ptW()), WW
      }
      static ExtractFromMesh(WW, RW) {
        const MW = WW._geometry;
        return MW ? MW.copy(RW) : null
      }
      static RandomId() {
        return eW.j.RandomId()
      }
      static _GetGeometryByLoadedUniqueId(WW, RW) {
        for (let MW = 0; MW < RW.geometries.length; MW++)
          if (RW.geometries[MW]._loadedUniqueId === WW) return RW.geometries[MW];
        return null
      }
      static _ImportGeometry(WW, RW) {
        const MW = RW.QRW(),
          wW = WW.geometryUniqueId,
          zR = WW.geometryId;
        if (wW || zR) {
          const WW = wW ? this._GetGeometryByLoadedUniqueId(wW, MW) : MW.getGeometryById(zR);
          WW && WW.applyToMesh(RW)
        } else if (WW instanceof ArrayBuffer) {
          const MW = RW._binaryInfo;
          if (MW.positionsAttrDesc && MW.positionsAttrDesc.count > 0) {
            const wW = new Float32Array(WW, MW.positionsAttrDesc.offset, MW.positionsAttrDesc.count);
            RW.setVerticesData(AW.j.PositionKind, wW, !1)
          }
          if (MW.normalsAttrDesc && MW.normalsAttrDesc.count > 0) {
            const wW = new Float32Array(WW, MW.normalsAttrDesc.offset, MW.normalsAttrDesc.count);
            RW.setVerticesData(AW.j.NormalKind, wW, !1)
          }
          if (MW.tangetsAttrDesc && MW.tangetsAttrDesc.count > 0) {
            const wW = new Float32Array(WW, MW.tangetsAttrDesc.offset, MW.tangetsAttrDesc.count);
            RW.setVerticesData(AW.j.TangentKind, wW, !1)
          }
          if (MW.uvsAttrDesc && MW.uvsAttrDesc.count > 0) {
            const wW = new Float32Array(WW, MW.uvsAttrDesc.offset, MW.uvsAttrDesc.count);
            if (iR.c)
              for (let WW = 1; WW < wW.length; WW += 2) wW[WW] = 1 - wW[WW];
            RW.setVerticesData(AW.j.UVKind, wW, !1)
          }
          if (MW.uvs2AttrDesc && MW.uvs2AttrDesc.count > 0) {
            const wW = new Float32Array(WW, MW.uvs2AttrDesc.offset, MW.uvs2AttrDesc.count);
            if (iR.c)
              for (let WW = 1; WW < wW.length; WW += 2) wW[WW] = 1 - wW[WW];
            RW.setVerticesData(AW.j.UV2Kind, wW, !1)
          }
          if (MW.uvs3AttrDesc && MW.uvs3AttrDesc.count > 0) {
            const wW = new Float32Array(WW, MW.uvs3AttrDesc.offset, MW.uvs3AttrDesc.count);
            if (iR.c)
              for (let WW = 1; WW < wW.length; WW += 2) wW[WW] = 1 - wW[WW];
            RW.setVerticesData(AW.j.UV3Kind, wW, !1)
          }
          if (MW.uvs4AttrDesc && MW.uvs4AttrDesc.count > 0) {
            const wW = new Float32Array(WW, MW.uvs4AttrDesc.offset, MW.uvs4AttrDesc.count);
            if (iR.c)
              for (let WW = 1; WW < wW.length; WW += 2) wW[WW] = 1 - wW[WW];
            RW.setVerticesData(AW.j.UV4Kind, wW, !1)
          }
          if (MW.uvs5AttrDesc && MW.uvs5AttrDesc.count > 0) {
            const wW = new Float32Array(WW, MW.uvs5AttrDesc.offset, MW.uvs5AttrDesc.count);
            if (iR.c)
              for (let WW = 1; WW < wW.length; WW += 2) wW[WW] = 1 - wW[WW];
            RW.setVerticesData(AW.j.UV5Kind, wW, !1)
          }
          if (MW.uvs6AttrDesc && MW.uvs6AttrDesc.count > 0) {
            const wW = new Float32Array(WW, MW.uvs6AttrDesc.offset, MW.uvs6AttrDesc.count);
            if (iR.c)
              for (let WW = 1; WW < wW.length; WW += 2) wW[WW] = 1 - wW[WW];
            RW.setVerticesData(AW.j.UV6Kind, wW, !1)
          }
          if (MW.colorsAttrDesc && MW.colorsAttrDesc.count > 0) {
            const wW = new Float32Array(WW, MW.colorsAttrDesc.offset, MW.colorsAttrDesc.count);
            RW.setVerticesData(AW.j.ColorKind, wW, !1, MW.colorsAttrDesc.stride)
          }
          if (MW.matricesIndicesAttrDesc && MW.matricesIndicesAttrDesc.count > 0) {
            const wW = new Int32Array(WW, MW.matricesIndicesAttrDesc.offset, MW.matricesIndicesAttrDesc.count),
              CW = [];
            for (let WW = 0; WW < wW.length; WW++) {
              const RW = wW[WW];
              CW.push(255 & RW), CW.push((65280 & RW) >> 8), CW.push((16711680 & RW) >> 16), CW.push(RW >> 24 & 255)
            }
            RW.setVerticesData(AW.j.MatricesIndicesKind, CW, !1)
          }
          if (MW.matricesIndicesExtraAttrDesc && MW.matricesIndicesExtraAttrDesc.count > 0) {
            const wW = new Int32Array(WW, MW.matricesIndicesExtraAttrDesc.offset, MW.matricesIndicesExtraAttrDesc.count),
              CW = [];
            for (let WW = 0; WW < wW.length; WW++) {
              const RW = wW[WW];
              CW.push(255 & RW), CW.push((65280 & RW) >> 8), CW.push((16711680 & RW) >> 16), CW.push(RW >> 24 & 255)
            }
            RW.setVerticesData(AW.j.MatricesIndicesExtraKind, CW, !1)
          }
          if (MW.matricesWeightsAttrDesc && MW.matricesWeightsAttrDesc.count > 0) {
            const wW = new Float32Array(WW, MW.matricesWeightsAttrDesc.offset, MW.matricesWeightsAttrDesc.count);
            RW.setVerticesData(AW.j.MatricesWeightsKind, wW, !1)
          }
          if (MW.indicesAttrDesc && MW.indicesAttrDesc.count > 0) {
            const wW = new Int32Array(WW, MW.indicesAttrDesc.offset, MW.indicesAttrDesc.count);
            RW.setIndices(wW, null)
          }
          if (MW.subMeshesAttrDesc && MW.subMeshesAttrDesc.count > 0) {
            const wW = new Int32Array(WW, MW.subMeshesAttrDesc.offset, 5 * MW.subMeshesAttrDesc.count);
            RW.Qs = [];
            for (let WW = 0; WW < MW.subMeshesAttrDesc.count; WW++) {
              const MW = wW[5 * WW + 0],
                CW = wW[5 * WW + 1],
                zR = wW[5 * WW + 2],
                AW = wW[5 * WW + 3],
                yR = wW[5 * WW + 4];
              bR.e.AddToMesh(MW, CW, zR, AW, yR, RW)
            }
          }
        } else if (WW.positions && WW.normals && WW.indices) {
          if (RW.setVerticesData(AW.j.PositionKind, WW.positions, WW.positions._updatable || WW.positionsUpdatable), RW.setVerticesData(AW.j.NormalKind, WW.normals, WW.normals._updatable || WW.normalsUpdatable), WW.tangents && RW.setVerticesData(AW.j.TangentKind, WW.tangents, WW.tangents._updatable || WW.tangentsUpdatable), WW.uvs && RW.setVerticesData(AW.j.UVKind, WW.uvs, WW.uvs._updatable || WW.uvsUpdatable), WW.uvs2 && RW.setVerticesData(AW.j.UV2Kind, WW.uvs2, WW.uvs2._updatable || WW.uvs2Updatable), WW.uvs3 && RW.setVerticesData(AW.j.UV3Kind, WW.uvs3, WW.uvs3._updatable || WW.uvs3Updatable), WW.uvs4 && RW.setVerticesData(AW.j.UV4Kind, WW.uvs4, WW.uvs4._updatable || WW.uvs4Updatable), WW.uvs5 && RW.setVerticesData(AW.j.UV5Kind, WW.uvs5, WW.uvs5._updatable || WW.uvs5Updatable), WW.uvs6 && RW.setVerticesData(AW.j.UV6Kind, WW.uvs6, WW.uvs6._updatable || WW.uvs6Updatable), WW.colors && RW.setVerticesData(AW.j.ColorKind, CW.h.CheckColors4(WW.colors, WW.positions.length / 3), WW.colors._updatable), WW.matricesIndices)
            if (WW.matricesIndices._isExpanded || WW.matricesIndicesExpanded) delete WW.matricesIndices._isExpanded, delete WW.matricesIndicesExpanded, RW.setVerticesData(AW.j.MatricesIndicesKind, WW.matricesIndices, WW.matricesIndices._updatable || WW.matricesIndicesUpdatable);
            else {
              const MW = [];
              for (let RW = 0; RW < WW.matricesIndices.length; RW++) {
                const wW = WW.matricesIndices[RW];
                MW.push(255 & wW), MW.push((65280 & wW) >> 8), MW.push((16711680 & wW) >> 16), MW.push(wW >> 24 & 255)
              }
              RW.setVerticesData(AW.j.MatricesIndicesKind, MW, WW.matricesIndices._updatable || WW.matricesIndicesUpdatable)
            } if (WW.matricesIndicesExtra)
            if (WW.matricesIndicesExtraExpanded || WW.matricesIndicesExtra._isExpanded) delete WW.matricesIndices._isExpanded, delete WW.matricesIndicesExtraExpanded, RW.setVerticesData(AW.j.MatricesIndicesExtraKind, WW.matricesIndicesExtra, WW.matricesIndicesExtra._updatable || WW.matricesIndicesExtraUpdatable);
            else {
              const MW = [];
              for (let RW = 0; RW < WW.matricesIndicesExtra.length; RW++) {
                const wW = WW.matricesIndicesExtra[RW];
                MW.push(255 & wW), MW.push((65280 & wW) >> 8), MW.push((16711680 & wW) >> 16), MW.push(wW >> 24 & 255)
              }
              RW.setVerticesData(AW.j.MatricesIndicesExtraKind, MW, WW.matricesIndicesExtra._updatable || WW.matricesIndicesExtraUpdatable)
            } WW.matricesWeights && (JW._CleanMatricesWeights(WW, RW), RW.setVerticesData(AW.j.MatricesWeightsKind, WW.matricesWeights, WW.matricesWeights._updatable)), WW.matricesWeightsExtra && RW.setVerticesData(AW.j.MatricesWeightsExtraKind, WW.matricesWeightsExtra, WW.matricesWeights._updatable), RW.setIndices(WW.indices, null)
        }
        if (WW.Qs) {
          RW.Qs = [];
          for (let MW = 0; MW < WW.Qs.length; MW++) {
            const wW = WW.Qs[MW];
            bR.e.AddToMesh(wW.materialIndex, wW.verticesStart, wW.verticesCount, wW.indexStart, wW.indexCount, RW)
          }
        }
        RW._shouldGenerateFlatShading && (RW.convertToFlatShadedMesh(), RW._shouldGenerateFlatShading = !1), RW.computeWorldMatrix(!0), MW.onMeshImportedObservable.notifyObservers(RW)
      }
      static _CleanMatricesWeights(WW, RW) {
        const MW = .001;
        if (!yR.c.CleanBoneMatrixWeights) return;
        let wW;
        if (!(WW.skeletonId > -1)) return;
        {
          const MW = RW.QRW().getLastSkeletonById(WW.skeletonId);
          if (!MW) return;
          wW = MW.bones.length
        }
        const CW = RW.getVerticesData(AW.j.MatricesIndicesKind),
          zR = RW.getVerticesData(AW.j.MatricesIndicesExtraKind),
          bR = WW.matricesWeights,
          NW = WW.matricesWeightsExtra,
          eW = WW.numBoneInfluencer,
          BW = bR.length;
        for (let AW = 0; AW < BW; AW += 4) {
          let WW = 0,
            RW = -1;
          for (let wW = 0; wW < 4; wW++) {
            const CW = bR[AW + wW];
            WW += CW, CW < MW && RW < 0 && (RW = wW)
          }
          if (NW)
            for (let wW = 0; wW < 4; wW++) {
              const CW = NW[AW + wW];
              WW += CW, CW < MW && RW < 0 && (RW = wW + 4)
            }
          if ((RW < 0 || RW > eW - 1) && (RW = eW - 1), WW > MW) {
            const RW = 1 / WW;
            for (let WW = 0; WW < 4; WW++) bR[AW + WW] *= RW;
            if (NW)
              for (let WW = 0; WW < 4; WW++) NW[AW + WW] *= RW
          } else RW >= 4 ? (NW[AW + RW - 4] = 1 - WW, zR[AW + RW - 4] = wW) : (bR[AW + RW] = 1 - WW, CW[AW + RW] = wW)
        }
        RW.setVerticesData(AW.j.MatricesIndicesKind, CW), WW.matricesWeightsExtra && RW.setVerticesData(AW.j.MatricesIndicesExtraKind, zR)
      }
      static Parse(WW, RW, MW) {
        const CW = new JW(WW.id, RW, void 0, WW.updatable);
        return CW._loadedUniqueId = WW.uniqueId, tR.d && tR.d.AddTagsTo(CW, WW.tags), WW.delayLoadingFile ? (CW.delayLoadState = 4, CW.delayLoadingFile = MW + WW.delayLoadingFile, CW._boundingInfo = new NW.e(wW.q.FromArray(WW.boundingBoxMinimum), wW.q.FromArray(WW.boundingBoxMaximum)), CW._delayInfo = [], WW.hasUVs && CW._delayInfo.push(AW.j.UVKind), WW.hasUVs2 && CW._delayInfo.push(AW.j.UV2Kind), WW.hasUVs3 && CW._delayInfo.push(AW.j.UV3Kind), WW.hasUVs4 && CW._delayInfo.push(AW.j.UV4Kind), WW.hasUVs5 && CW._delayInfo.push(AW.j.UV5Kind), WW.hasUVs6 && CW._delayInfo.push(AW.j.UV6Kind), WW.hasColors && CW._delayInfo.push(AW.j.ColorKind), WW.hasMatricesIndices && CW._delayInfo.push(AW.j.MatricesIndicesKind), WW.hasMatricesWeights && CW._delayInfo.push(AW.j.MatricesWeightsKind), CW._delayLoadingFunction = zR.c.ImportVertexData) : zR.c.ImportVertexData(WW, CW), RW.pushGeometry(CW, !0), CW
      }
    }
  },
  38054: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => BW,
      d: () => gR
    });
    var wW = MW(35324),
      CW = MW(36721),
      zR = MW(38028),
      AW = MW(37993),
      bR = MW(36716),
      yR = MW(38032),
      NW = MW(37722),
      eW = MW(35361);
    class BW extends zR.b {
      constructor(WW, RW) {
        super(WW, RW.QRW()), this._indexInSourceMeshInstanceArray = -1, this._distanceToCamera = 0, RW.XzW(this), this._sourceMesh = RW, this._unIndexed = RW._unIndexed, this.position.hyW(RW.position), this.rotation.hyW(RW.rotation), this.NA.hyW(RW.NA), RW.rotationQuaternion && (this.rotationQuaternion = RW.rotationQuaternion.clone()), this.animations = RW.animations.slice();
        for (const MW of RW.getAnimationRanges()) null != MW && this.createAnimationRange(MW.name, MW.from, MW.to);
        if (this.infiniteDistance = RW.infiniteDistance, this.setPivotMatrix(RW.getPivotMatrix()), RW.skeleton || RW.morphTargetManager || !RW.hasBoundingInfo) this.refreshBoundingInfo(!0, !0);
        else {
          const WW = RW.LRW();
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
        this._sourceMesh?.receiveShadows !== WW && CW.b.Warn("Setting receiveShadows on an instanced mesh has no effect")
      }
      get material() {
        return this._sourceMesh.material
      }
      set material(WW) {
        this._sourceMesh?.material !== WW && CW.b.Warn("Setting material on an instanced mesh has no effect")
      }
      get visibility() {
        return this._sourceMesh.visibility
      }
      set visibility(WW) {
        this._sourceMesh?.visibility !== WW && CW.b.Warn("Setting visibility on an instanced mesh has no effect")
      }
      get skeleton() {
        return this._sourceMesh.skeleton
      }
      set skeleton(WW) {
        this._sourceMesh?.skeleton !== WW && CW.b.Warn("Setting skeleton on an instanced mesh has no effect")
      }
      get renderingGroupId() {
        return this._sourceMesh.renderingGroupId
      }
      set renderingGroupId(WW) {
        this._sourceMesh && WW !== this._sourceMesh.renderingGroupId && CW.b.Warn("Note - setting renderingGroupId of an instanced mesh has no effect on the scene")
      }
      get meshBlendingTag() {
        return this._sourceMesh.meshBlendingTag
      }
      set meshBlendingTag(WW) {
        this._sourceMesh && WW !== this._sourceMesh.meshBlendingTag && CW.b.Warn("Setting meshBlendingTag on an instanced mesh has no effect")
      }
      getTotalVertices() {
        return this._sourceMesh ? this._sourceMesh.getTotalVertices() : 0
      }
      getTotalIndices() {
        return this._sourceMesh.getTotalIndices()
      }
      get yBW() {
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
      getVerticesData(WW, RW, MW) {
        return this._sourceMesh.getVerticesData(WW, RW, MW)
      }
      copyVerticesData(WW, RW) {
        this._sourceMesh.copyVerticesData(WW, RW)
      }
      getVertexBuffer(WW, RW) {
        return this._sourceMesh.getVertexBuffer(WW, RW)
      }
      setVerticesData(WW, RW, MW, wW) {
        return this.yBW && this.yBW.setVerticesData(WW, RW, MW, wW), this.yBW
      }
      updateVerticesData(WW, RW, MW, wW) {
        return this.yBW && this.yBW.updateVerticesData(WW, RW, MW, wW), this.yBW
      }
      setIndices(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return this.yBW && this.yBW.setIndices(WW, RW), this.yBW
      }
      isVerticesDataPresent(WW) {
        return this._sourceMesh.isVerticesDataPresent(WW)
      }
      ptW() {
        return this._sourceMesh.ptW()
      }
      get _positions() {
        return this._sourceMesh._positions
      }
      refreshBoundingInfo() {
        let WW, RW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          MW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.hasBoundingInfo && this.LRW().isLocked) return this;
        WW = "object" === typeof RW ? RW : {
          applySkeleton: RW,
          applyMorph: MW
        };
        const wW = this._sourceMesh.geometry ? this._sourceMesh.geometry.boundingBias : null;
        return this._refreshBoundingInfo(this._sourceMesh._getData(WW, null, NW.j.PositionKind), wW), this
      }
      _preActivate() {
        return this._currentLOD && this._currentLOD._preActivate(), this
      }
      _activate(WW, RW) {
        if (super._activate(WW, RW), this._sourceMesh.Qs || CW.b.Warn("Instances should only be created for meshes with geometry."), this._currentLOD) {
          if (this._currentLOD._getWorldMatrixDeterminant() >= 0 !== this._getWorldMatrixDeterminant() >= 0) return this._internalAbstractMeshDataInfo._actAsRegularMesh = !0, !0;
          if (this._internalAbstractMeshDataInfo._actAsRegularMesh = !1, this._currentLOD._registerInstanceForRenderId(this, WW), RW) {
            if (!this._currentLOD._internalAbstractMeshDataInfo._isActiveIntermediate) return this._currentLOD._internalAbstractMeshDataInfo._onlyForInstancesIntermediate = !0, !0
          } else if (!this._currentLOD._internalAbstractMeshDataInfo._isActive) return this._currentLOD._internalAbstractMeshDataInfo._onlyForInstances = !0, !0
        }
        return !1
      }
      _postActivate() {
        this._sourceMesh.edgesShareWithInstances && this._sourceMesh._edgesRenderer && this._sourceMesh._edgesRenderer.isEnabled && this._sourceMesh._renderingGroup ? (this._sourceMesh._renderingGroup._edgesRenderers.pushNoDuplicate(this._sourceMesh._edgesRenderer), this._sourceMesh._edgesRenderer.customInstances.push(this.getWorldMatrix())) : this._edgesRenderer && this._edgesRenderer.isEnabled && this._sourceMesh._renderingGroup && this._sourceMesh._renderingGroup._edgesRenderers.push(this._edgesRenderer)
      }
      getWorldMatrix() {
        if (this._currentLOD && this._currentLOD !== this._sourceMesh && this._currentLOD.billboardMode !== yR.f.BILLBOARDMODE_NONE && this._currentLOD._masterMesh !== this) {
          this._billboardWorldMatrix || (this._billboardWorldMatrix = new wW.d);
          const WW = this._currentLOD._masterMesh;
          return this._currentLOD._masterMesh = this, wW.k.vC[7].hyW(this._currentLOD.position), this._currentLOD.position.set(0, 0, 0), this._billboardWorldMatrix.hyW(this._currentLOD.computeWorldMatrix(!0)), this._currentLOD.position.hyW(wW.k.vC[7]), this._currentLOD._masterMesh = WW, this._billboardWorldMatrix
        }
        return super.getWorldMatrix()
      }
      get cMW() {
        return !0
      }
      getLOD(WW) {
        if (!WW) return this;
        const RW = this.yBW.getLODLevels();
        if (RW && 0 !== RW.length) {
          const RW = this.LRW();
          this._currentLOD = this.yBW.getLOD(WW, RW.VNW)
        } else this._currentLOD = this.yBW;
        return this._currentLOD
      }
      _preActivateForIntermediateRendering(WW) {
        return this.yBW._preActivateForIntermediateRendering(WW)
      }
      _syncSubMeshes() {
        if (this.releaseSubMeshes(), this._sourceMesh.Qs)
          for (let WW = 0; WW < this._sourceMesh.Qs.length; WW++) this._sourceMesh.Qs[WW].clone(this, this._sourceMesh);
        return this
      }
      _generatePointsArray() {
        return this._sourceMesh._generatePointsArray()
      }
      _updateBoundingInfo() {
        return this.hasBoundingInfo ? this.LRW().update(this.worldMatrixFromCache) : this.buildBoundingInfo(this.absolutePosition, this.absolutePosition, this.worldMatrixFromCache), this._updateSubMeshesBoundingInfo(this.worldMatrixFromCache), this
      }
      clone(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          MW = arguments.length > 2 ? arguments[2] : void 0;
        const wW = ((arguments.length > 3 ? arguments[3] : void 0) || this._sourceMesh).createInstance(WW);
        if (bR.c.DeepCopy(this, wW, ["name", "Qs", "uniqueId", "parent", "lightSources", "receiveShadows", "material", "visibility", "skeleton", "yBW", "cMW", "facetNb", "isFacetDataEnabled", "isBlocked", "useBones", "bBW", "collider", "edgesRenderer", "forward", "up", "right", "absolutePosition", "absoluteScaling", "absoluteRotationQuaternion", "xTW", "nonUniformScaling", "behaviors", "worldMatrixFromCache", "hasThinInstances", "hasBoundingInfo", "geometry"], []), RW && (wW.parent = RW), !MW)
          for (let CW = 0; CW < this.QRW().meshes.length; CW++) {
            const WW = this.QRW().meshes[CW];
            WW.parent === this && WW.clone(WW.name, wW)
          }
        return wW.computeWorldMatrix(!0), this.onClonedObservable.notifyObservers(wW), wW
      }
      dispose(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._sourceMesh.kAW(this), super.dispose(WW, RW)
      }
      _serializeAsParent(WW) {
        super._serializeAsParent(WW), WW.parentId = this._sourceMesh.uniqueId, WW.parentInstanceIndex = this._indexInSourceMeshInstanceArray
      }
      instantiateHierarchy() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          RW = arguments.length > 1 ? arguments[1] : void 0,
          MW = arguments.length > 2 ? arguments[2] : void 0;
        const wW = this.clone("Clone of " + (this.name || this.id), WW || this.parent, !0, RW && RW.newSourcedMesh);
        wW && MW && MW(this, wW);
        for (const CW of this.getChildTransformNodes(!0)) CW.instantiateHierarchy(wW, RW, MW);
        return wW
      }
    }
    let tR = !1;

    function TW(WW, RW, MW, wW, CW) {
      for (let zR = 0; zR < RW.length; zR++) {
        const AW = WW[RW[zR]] ?? 0,
          bR = CW + MW[zR];
        AW.toArray ? AW.toArray(wW, bR) : AW.copyToArray ? AW.copyToArray(wW, bR) : wW[bR] = AW
      }
    }

    function gR() {
      tR || (tR = !0, AW.b._instancedMeshFactory = (WW, RW) => {
        const MW = new BW(WW, RW);
        if (RW.ORW) {
          MW.ORW = {};
          for (const WW in RW.ORW) MW.ORW[WW] = RW.ORW[WW]
        }
        return MW
      }, AW.b.prototype.uRW = function(WW, RW) {
        if (!this.ORW) {
          this.ORW = {};
          for (const WW of this.instances) WW.ORW = {}
        }
        this._userInstancedBuffersStorage || (this._userInstancedBuffersStorage = {
          data: {},
          vertexBuffers: {},
          strides: {},
          sizes: {},
          vertexArrayObjects: this.mC().getCaps().vertexArrayObject ? {} : void 0
        }), this.ORW[WW] = null, this._userInstancedBuffersStorage.strides[WW] = RW;
        const MW = this._userInstancedBuffersStorage;
        MW.interleavedKinds = [], MW.interleavedOffsets = [], MW.interleavedRowStride = 0;
        for (const wW in MW.strides) MW.interleavedKinds.push(wW), MW.interleavedOffsets.push(MW.interleavedRowStride), MW.interleavedRowStride += MW.strides[wW];
        MW.interleavedData = new Float32Array(32 * MW.interleavedRowStride);
        for (const wW in MW.interleavedBuffers) MW.interleavedBuffers[wW].buffer.dispose();
        MW.interleavedBuffers = {}, MW.vertexBuffers[WW] = null;
        for (const wW of this.instances) wW.ORW[WW] = null;
        this._invalidateInstanceVertexArrayObject(), this._markSubMeshesAsAttributesDirty()
      }, AW.b.prototype._processInstancedBuffers = function(WW, RW) {
        const MW = this._userInstancedBuffersStorage,
          wW = MW.interleavedRowStride;
        if (!wW) return;
        const CW = WW ? WW.length : 0,
          zR = (CW + 1) * wW;
        let AW = MW.interleavedData;
        if (AW.length < zR) {
          let WW = AW.length;
          for (; WW < zR;) WW *= 2;
          AW = MW.interleavedData = new Float32Array(WW)
        }
        const bR = MW.interleavedKinds,
          yR = MW.interleavedOffsets;
        let eW = 0;
        RW && (TW(this.ORW, bR, yR, AW, eW), eW += wW);
        for (let NW = 0; NW < CW; NW++) TW(WW[NW].ORW, bR, yR, AW, eW), eW += wW;
        let BW = "shared",
          tR = MW.vertexBuffers;
        this._instanceDataStorage.useMonoDataStorageRenderPass || (BW = this._instanceDataStorage.engine.currentRenderPassId, MW.renderPasses || (MW.renderPasses = {}), MW.renderPasses[BW] || (MW.renderPasses[BW] = {}), tR = MW.renderPasses[BW]);
        const gR = MW.interleavedBuffers[BW];
        let iR = !gR || gR.data !== AW;
        for (let NW = 0; !iR && NW < bR.length; NW++) iR = !tR[bR[NW]];
        if (!iR) return void gR.buffer.updateDirectly(AW, 0);
        gR?.buffer.dispose();
        const YW = new NW.c(this.mC(), AW, !0, wW, !1, !0);
        for (let NW = 0; NW < bR.length; NW++) {
          const WW = bR[NW],
            RW = YW.createVertexBuffer(WW, yR[NW], MW.strides[WW]);
          RW.hashCode += RW.byteOffset * 2 ** 24, tR[WW] = RW
        }
        MW.interleavedBuffers[BW] = {
          buffer: YW,
          data: AW
        }, this._invalidateInstanceVertexArrayObject()
      }, AW.b.prototype._invalidateInstanceVertexArrayObject = function() {
        if (this._userInstancedBuffersStorage && void 0 !== this._userInstancedBuffersStorage.vertexArrayObjects) {
          for (const WW in this._userInstancedBuffersStorage.vertexArrayObjects) this.mC().releaseVertexArrayObject(this._userInstancedBuffersStorage.vertexArrayObjects[WW]);
          this._userInstancedBuffersStorage.vertexArrayObjects = {}
        }
      }, AW.b.prototype._disposeInstanceSpecificData = function() {
        for (const RW in this._instanceDataStorage.renderPasses) this._instanceDataStorage.renderPasses[RW].instancesBuffer?.dispose();
        for (this._instanceDataStorage.renderPasses = {}, this._instanceDataStorage.dataStorageRenderPass?.instancesBuffer?.dispose(); this.instances.length;) this.instances[0].dispose();
        for (const RW in this.ORW) this._userInstancedBuffersStorage.vertexBuffers[RW] && this._userInstancedBuffersStorage.vertexBuffers[RW].dispose();
        const WW = this._userInstancedBuffersStorage?.interleavedBuffers;
        if (WW) {
          for (const RW in WW) WW[RW].buffer.dispose();
          this._userInstancedBuffersStorage.interleavedBuffers = {}
        }
        this._invalidateInstanceVertexArrayObject(), this.ORW = {}
      }, (0, eW.e)("BABYLON.InstancedMesh", BW))
    }
  },
  37993: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => qR,
      c: () => SW,
      d: () => uW
    });
    var wW, CW, zR, AW, bR, yR, NW, eW, BW, tR, TW, gR, iR, YW, JW = MW(35346),
      PW = MW(37685),
      IW = MW(37635),
      oW = MW(36716),
      lW = MW(37621),
      FW = MW(37998),
      fW = MW(37796),
      QW = MW(35324),
      rR = MW(35376),
      cR = MW(37800),
      XW = MW(37722),
      jR = MW(38003),
      kR = MW(38010),
      aR = MW(38028),
      sW = MW(37874),
      dW = MW(37866),
      pW = MW(37956),
      hW = MW(38039),
      UW = MW(38016),
      EW = MW(37615),
      VW = MW(36721),
      mR = MW(35361),
      xR = MW(37470),
      vR = MW(37749);
    class KW {
      constructor(WW, RW) {
        this.distanceOrScreenCoverage = WW, this.mesh = RW
      }
    }
    class uW {}
    class OW {
      constructor() {
        this.batchCache = new GW(this), this.batchCacheReplacementModeInFrozenMode = new GW(this), this.instancesBufferSize = 2048
      }
    }
    class nW {
      constructor() {
        this.renderPasses = {}
      }
    }
    class GW {
      constructor(WW) {
        this.parent = WW, this.mustReturn = !1, this.visibleInstances = new Array, this.renderSelf = [], this.hardwareInstancedRendering = []
      }
    }
    class LW {
      constructor() {
        this.instancesCount = 0, this.matrixBuffer = null, this.previousMatrixBuffer = null, this.matrixBufferSize = 512, this.matrixData = null, this.boundingVectors = [], this.worldMatrices = null
      }
    }
    class HW {
      constructor() {
        this._areNormalsFrozen = !1, this._source = null, this.meshMap = null, this._preActivateId = -1, this._LODLevels = new Array, this._useLODScreenCoverage = !1, this._effectiveMaterial = null, this._forcedInstanceCount = 0, this._overrideRenderingFillMode = null
      }
    }
    const DW = {
      source: null,
      parent: null,
      doNotCloneChildren: !1,
      clonePhysicsImpostor: !0,
      cloneThinInstances: !1
    };
    class qR extends aR.b {
      static _GetDefaultSideOrientation(WW) {
        return WW || qR.FRONTSIDE
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
        this._internalAbstractMeshDataInfo._computeBonesUsingShaders !== WW && (WW && this._internalMeshDataInfo._sourcePositions && (this.setVerticesData(XW.j.PositionKind, this._internalMeshDataInfo._sourcePositions, !0), this._internalMeshDataInfo._sourceNormals && this.setVerticesData(XW.j.NormalKind, this._internalMeshDataInfo._sourceNormals, !0), this._internalMeshDataInfo._sourcePositions = null, this._internalMeshDataInfo._sourceNormals = null), this._internalAbstractMeshDataInfo._computeBonesUsingShaders = WW, this._markSubMeshesAsAttributesDirty())
      }
      get onBeforeRenderObservable() {
        return this._internalMeshDataInfo._onBeforeRenderObservable || (this._internalMeshDataInfo._onBeforeRenderObservable = new JW.c), this._internalMeshDataInfo._onBeforeRenderObservable
      }
      get onBeforeBindObservable() {
        return this._internalMeshDataInfo._onBeforeBindObservable || (this._internalMeshDataInfo._onBeforeBindObservable = new JW.c), this._internalMeshDataInfo._onBeforeBindObservable
      }
      get onAfterRenderObservable() {
        return this._internalMeshDataInfo._onAfterRenderObservable || (this._internalMeshDataInfo._onAfterRenderObservable = new JW.c), this._internalMeshDataInfo._onAfterRenderObservable
      }
      get onBetweenPassObservable() {
        return this._internalMeshDataInfo._onBetweenPassObservable || (this._internalMeshDataInfo._onBetweenPassObservable = new JW.c), this._internalMeshDataInfo._onBetweenPassObservable
      }
      get onBeforeDrawObservable() {
        return this._internalMeshDataInfo._onBeforeDrawObservable || (this._internalMeshDataInfo._onBeforeDrawObservable = new JW.c), this._internalMeshDataInfo._onBeforeDrawObservable
      }
      set onBeforeDraw(WW) {
        this._onBeforeDrawObserver && this.onBeforeDrawObservable.remove(this._onBeforeDrawObserver), this._onBeforeDrawObserver = this.onBeforeDrawObservable.add(WW)
      }
      get bBW() {
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
      _copySource(WW, RW) {
        let MW = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          wW = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const CW = this.QRW();
        if (WW._geometry && WW._geometry.applyToMesh(this), oW.c.DeepCopy(WW, this, ["name", "material", "skeleton", "instances", "parent", "uniqueId", "source", "metadata", "morphTargetManager", "bBW", "worldMatrixInstancedBuffer", "previousWorldMatrixInstancedBuffer", "hasLODLevels", "geometry", "isBlocked", "areNormalsFrozen", "facetNb", "isFacetDataEnabled", "lightSources", "useBones", "cMW", "collider", "edgesRenderer", "forward", "up", "right", "absolutePosition", "absoluteScaling", "absoluteRotationQuaternion", "xTW", "nonUniformScaling", "behaviors", "worldMatrixFromCache", "hasThinInstances", "cloneMeshMap", "hasBoundingInfo", "physicsBody", "physicsImpostor"], ["_poseMatrix"]), this._internalMeshDataInfo._source = WW, CW.useClonedMeshMap && (WW._internalMeshDataInfo.meshMap || (WW._internalMeshDataInfo.meshMap = {}), WW._internalMeshDataInfo.meshMap[this.uniqueId] = this), this._originalBuilderSideOrientation = WW._originalBuilderSideOrientation, this._creationDataStorage = WW._creationDataStorage, WW._ranges) {
          const RW = WW._ranges;
          for (const WW in RW) Object.prototype.hasOwnProperty.call(RW, WW) && RW[WW] && this.createAnimationRange(WW, RW[WW].from, RW[WW].to)
        }
        if (WW.metadata && WW.metadata.clone ? this.metadata = WW.metadata.clone() : this.metadata = WW.metadata, this._internalMetadata = WW._internalMetadata, this.meshBlendingTag = WW.meshBlendingTag, lW.d && lW.d.HasTags(WW) && lW.d.AddTagsTo(this, lW.d.GetTags(WW, !0)), this.kMW(WW.isEnabled(!1)), this.parent = WW.parent, this.setPivotMatrix(WW.getPivotMatrix(), this._postMultiplyPivotMatrix), this.id = this.name + "." + WW.id, this.material = WW.material, !RW) {
          const CW = WW.getDescendants(!0);
          for (let WW = 0; WW < CW.length; WW++) {
            const zR = CW[WW];
            zR._isMesh ? (DW.parent = this, DW.doNotCloneChildren = RW, DW.clonePhysicsImpostor = MW, DW.cloneThinInstances = wW, zR.clone(this.name + "." + zR.name, DW)) : zR.clone && zR.clone(this.name + "." + zR.name, this)
          }
        }
        if (WW.morphTargetManager && (this.morphTargetManager = WW.morphTargetManager), (0, xR.b)(CW.getPhysicsEngine)) {
          const RW = CW.getPhysicsEngine();
          if (MW && RW)
            if (1 === RW.getPluginVersion()) {
              const MW = RW.getImpostorForPhysicsObject(WW);
              MW && (this.physicsImpostor = MW.clone(this))
            } else 2 === RW.getPluginVersion() && WW.physicsBody && WW.physicsBody.clone(this)
        }
        for (let zR = 0; zR < CW.Xs.length; zR++) {
          const RW = CW.Xs[zR];
          RW.emitter === WW && RW.clone(RW.name, this)
        }
        if (this.skeleton = WW.skeleton, wW && (WW._thinInstanceDataStorage.matrixData ? (this.mAW("matrix", new Float32Array(WW._thinInstanceDataStorage.matrixData), 16, !WW._thinInstanceDataStorage.matrixBuffer.isUpdatable()), this._thinInstanceDataStorage.matrixBufferSize = WW._thinInstanceDataStorage.matrixBufferSize, this._thinInstanceDataStorage.instancesCount = WW._thinInstanceDataStorage.instancesCount) : this._thinInstanceDataStorage.matrixBufferSize = WW._thinInstanceDataStorage.matrixBufferSize, WW._userThinInstanceBuffersStorage)) {
          const RW = WW._userThinInstanceBuffersStorage;
          for (const WW in RW.data) this.mAW(WW, new Float32Array(RW.data[WW]), RW.strides[WW], !RW.vertexBuffers?.[WW]?.isUpdatable()), this._userThinInstanceBuffersStorage.sizes[WW] = RW.sizes[WW]
        }
        this.refreshBoundingInfo(!0, !0), this.computeWorldMatrix(!0)
      }
      constructor(WW) {
        let RW, MW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          wW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          CW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          zR = arguments.length > 4 ? arguments[4] : void 0,
          AW = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        super(WW, MW), this._internalMeshDataInfo = new HW, this.delayLoadState = 0, this.instances = [], this._creationDataStorage = null, this._geometry = null, this._thinInstanceDataStorage = new LW, this._shouldGenerateFlatShading = !1, this._originalBuilderSideOrientation = qR.DEFAULTSIDE, this.ignoreCameraMaxZ = !1, MW = this.QRW(), this._instanceDataStorage = new nW, this._instanceDataStorage.engine = MW.mC(), this._instanceDataStorage.useMonoDataStorageRenderPass = !this._instanceDataStorage.engine.isWebGPU, this._instanceDataStorage.useMonoDataStorageRenderPass && (this._instanceDataStorage.dataStorageRenderPass = new OW), this._scene.useRightHandedSystem ? this.sideOrientation = 0 : this.sideOrientation = 1, this._onBeforeDraw = (WW, RW, MW) => {
          WW && MW && (this._uniformBuffer ? this.transferToEffect(RW) : MW.bindOnlyWorldMatrix(RW))
        };
        let bR = !1;
        if (wW && void 0 === wW._addToSceneRootNodes) {
          const WW = wW;
          RW = WW.parent ?? null, CW = WW.source ?? null, zR = WW.doNotCloneChildren ?? !1, AW = WW.clonePhysicsImpostor ?? !0, bR = WW.cloneThinInstances ?? !1
        } else RW = wW;
        CW && this._copySource(CW, zR, AW, bR), null !== RW && (this.parent = RW), this._instanceDataStorage.hardwareInstancedRendering = this.mC().getCaps().instancedArrays, this._internalMeshDataInfo._onMeshReadyObserverAdded = WW => {
          WW.unregisterOnNextCall = !0, this.isReady(!0) ? this.onMeshReadyObservable.notifyObservers(this) : this._internalMeshDataInfo._checkReadinessObserver || (this._internalMeshDataInfo._checkReadinessObserver = this._scene.onBeforeRenderObservable.add((() => {
            this.isReady(!0) && (this._scene.onBeforeRenderObservable.remove(this._internalMeshDataInfo._checkReadinessObserver), this._internalMeshDataInfo._checkReadinessObserver = null, this.onMeshReadyObservable.notifyObservers(this))
          })))
        }, this.onMeshReadyObservable = new JW.c(this._internalMeshDataInfo._onMeshReadyObserverAdded), CW && CW.onClonedObservable.notifyObservers(this)
      }
      instantiateHierarchy() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          RW = arguments.length > 1 ? arguments[1] : void 0,
          MW = arguments.length > 2 ? arguments[2] : void 0;
        const wW = 0 === this.getTotalVertices() || RW && RW.doNotInstantiate && (!0 === RW.doNotInstantiate || RW.doNotInstantiate(this)) ? this.clone("Clone of " + (this.name || this.id), WW || this.parent, !0) : this.createInstance("instance of " + (this.name || this.id));
        wW.parent = WW || this.parent, wW.position = this.position.clone(), wW.NA = this.NA.clone(), this.rotationQuaternion ? wW.rotationQuaternion = this.rotationQuaternion.clone() : wW.rotation = this.rotation.clone(), MW && MW(this, wW);
        for (const CW of this.getChildTransformNodes(!0)) "InstancedMesh" === CW.getClassName() && "Mesh" === wW.getClassName() && CW.yBW === this ? CW.instantiateHierarchy(wW, {
          doNotInstantiate: RW && RW.doNotInstantiate || !1,
          newSourcedMesh: wW
        }, MW) : CW.instantiateHierarchy(wW, RW, MW);
        return wW
      }
      getClassName() {
        return "Mesh"
      }
      get _isMesh() {
        return !0
      }
      toString(WW) {
        let RW = super.toString(WW);
        if (RW += ", n vertices: " + this.getTotalVertices(), RW += ", parent: " + (this._waitingParentId ? this._waitingParentId : this.parent ? this.parent.name : "NONE"), this.animations)
          for (let MW = 0; MW < this.animations.length; MW++) RW += ", animation[0]: " + this.animations[MW].toString(WW);
        if (WW)
          if (this._geometry) {
            const WW = this.ptW(),
              MW = this.getVerticesData(XW.j.PositionKind);
            MW && WW && (RW += ", flat shading: " + (MW.length / 3 === WW.length ? "YES" : "NO"))
          } else RW += ", flat shading: UNKNOWN";
        return RW
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
        this._internalMeshDataInfo._LODLevels.sort(((RW, MW) => RW.distanceOrScreenCoverage < MW.distanceOrScreenCoverage ? WW : RW.distanceOrScreenCoverage > MW.distanceOrScreenCoverage ? -WW : 0))
      }
      addLODLevel(WW, RW) {
        if (RW && RW._masterMesh) return VW.b.Warn("You cannot use a mesh as LOD level twice"), this;
        const MW = new KW(WW, RW);
        return this._internalMeshDataInfo._LODLevels.push(MW), RW && (RW._masterMesh = this), this._sortLODLevels(), this
      }
      getLODLevelAtDistance(WW) {
        const RW = this._internalMeshDataInfo;
        for (let MW = 0; MW < RW._LODLevels.length; MW++) {
          const wW = RW._LODLevels[MW];
          if (wW.distanceOrScreenCoverage === WW) return wW.mesh
        }
        return null
      }
      removeLODLevel(WW) {
        const RW = this._internalMeshDataInfo;
        for (let MW = 0; MW < RW._LODLevels.length; MW++) RW._LODLevels[MW].mesh === WW && (RW._LODLevels.splice(MW, 1), WW && (WW._masterMesh = null));
        return this._sortLODLevels(), this
      }
      getLOD(WW, RW) {
        const MW = this._internalMeshDataInfo;
        if (!MW._LODLevels || 0 === MW._LODLevels.length) return this;
        const wW = RW || this.LRW().VNW,
          CW = WW.mode === fW.e.ORTHOGRAPHIC_CAMERA ? WW.minZ : wW.centerWorld.subtract(WW.globalPosition).length();
        let zR = CW,
          AW = 1;
        if (MW._useLODScreenCoverage) {
          const RW = WW.screenArea;
          let MW = wW.radiusWorld * WW.minZ / CW;
          MW = MW * MW * Math.PI, zR = MW / RW, AW = -1
        }
        if (AW * MW._LODLevels[MW._LODLevels.length - 1].distanceOrScreenCoverage > AW * zR) return this.onLODLevelSelection && this.onLODLevelSelection(zR, this, this), this;
        for (let bR = 0; bR < MW._LODLevels.length; bR++) {
          const WW = MW._LODLevels[bR];
          if (AW * WW.distanceOrScreenCoverage < AW * zR) {
            if (WW.mesh) {
              if (4 === WW.mesh.delayLoadState) return WW.mesh._checkDelayState(), this;
              if (2 === WW.mesh.delayLoadState) return this;
              WW.mesh._preActivate(), WW.mesh._updateSubMeshesBoundingInfo(this.worldMatrixFromCache)
            }
            return this.onLODLevelSelection && this.onLODLevelSelection(zR, this, WW.mesh), WW.mesh
          }
        }
        return this.onLODLevelSelection && this.onLODLevelSelection(zR, this, this), this
      }
      get geometry() {
        return this._geometry
      }
      getTotalVertices() {
        return null === this._geometry || void 0 === this._geometry ? 0 : this._geometry.getTotalVertices()
      }
      getVerticesData(WW, RW, MW, wW) {
        if (!this._geometry) return null;
        let CW = wW ? void 0 : this._userInstancedBuffersStorage?.vertexBuffers[WW]?.getFloatData(this.instances.length + 1, MW || RW && 1 !== this._geometry.meshes.length);
        return CW || (CW = this._geometry.getVerticesData(WW, RW, MW)), CW
      }
      copyVerticesData(WW, RW) {
        this._geometry && this._geometry.copyVerticesData(WW, RW)
      }
      getVertexBuffer(WW, RW) {
        return this._geometry ? (RW ? void 0 : this._userInstancedBuffersStorage?.vertexBuffers[WW]) ?? this._geometry.getVertexBuffer(WW) : null
      }
      isVerticesDataPresent(WW, RW) {
        return this._geometry ? !RW && void 0 !== this._userInstancedBuffersStorage?.vertexBuffers[WW] || this._geometry.isVerticesDataPresent(WW) : !!this._delayInfo && -1 !== this._delayInfo.indexOf(WW)
      }
      isVertexBufferUpdatable(WW, RW) {
        if (!this._geometry) return !!this._delayInfo && -1 !== this._delayInfo.indexOf(WW);
        if (!RW) {
          const RW = this._userInstancedBuffersStorage?.vertexBuffers[WW];
          if (RW) return RW.isUpdatable()
        }
        return this._geometry.isVertexBufferUpdatable(WW)
      }
      getVerticesDataKinds(WW) {
        if (!this._geometry) {
          const WW = [];
          if (this._delayInfo)
            for (const RW of this._delayInfo) WW.push(RW);
          return WW
        }
        const RW = this._geometry.getVerticesDataKinds();
        if (!WW && this._userInstancedBuffersStorage)
          for (const MW in this._userInstancedBuffersStorage.vertexBuffers) - 1 === RW.indexOf(MW) && RW.push(MW);
        return RW
      }
      getTotalIndices() {
        return this._geometry ? this._geometry.getTotalIndices() : 0
      }
      ptW(WW, RW) {
        return this._geometry ? this._geometry.ptW(WW, RW) : []
      }
      get isBlocked() {
        return null !== this._masterMesh && void 0 !== this._masterMesh
      }
      isReady() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          RW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (2 === this.delayLoadState) return !1;
        if (!super.isReady(WW)) return !1;
        if (!this.Qs || 0 === this.Qs.length) return !0;
        if (!WW) return !0;
        const MW = this.mC(),
          wW = this.QRW(),
          CW = RW || MW.getCaps().instancedArrays && (this.instances.length > 0 || this.hasThinInstances);
        this.computeWorldMatrix();
        const zR = this.material || wW.defaultMaterial;
        if (zR)
          if (zR._storeEffectOnSubMeshes)
            for (const bR of this.Qs) {
              const WW = bR.Ow();
              if (WW)
                if (WW._storeEffectOnSubMeshes) {
                  if (!WW.isReadyForSubMesh(this, bR, CW)) return !1
                } else if (!WW.isReady(this, CW)) return !1
            } else if (!zR.isReady(this, CW)) return !1;
        const AW = MW.currentRenderPassId;
        for (const bR of this.lightSources) {
          const WW = bR.getShadowGenerators();
          if (!WW) continue;
          const RW = WW.values();
          for (let wW = RW.next(); !0 !== wW.done; wW = RW.next()) {
            const WW = wW.value;
            if (WW && (!WW.getShadowMap()?.renderList || WW.getShadowMap()?.renderList && -1 !== WW.getShadowMap()?.renderList?.indexOf(this))) {
              const RW = WW.getShadowMap().renderPassIds ?? [MW.currentRenderPassId];
              for (let wW = 0; wW < RW.length; ++wW) {
                MW.currentRenderPassId = RW[wW];
                for (const RW of this.Qs)
                  if (!WW.isReady(RW, CW, RW.Ow()?.needAlphaBlendingForMesh(this) ?? !1)) return MW.currentRenderPassId = AW, !1
              }
              MW.currentRenderPassId = AW
            }
          }
        }
        for (const bR of this._internalMeshDataInfo._LODLevels)
          if (bR.mesh && !bR.mesh.isReady(CW)) return !1;
        return !0
      }
      get areNormalsFrozen() {
        return this._internalMeshDataInfo._areNormalsFrozen
      }
      nw() {
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
        let RW = this._instanceDataStorage.renderPasses[WW];
        return RW || (RW = new OW, this._instanceDataStorage.renderPasses[WW] = RW), RW
      }
      _preActivate() {
        const WW = this._internalMeshDataInfo,
          RW = this.QRW().getRenderId();
        return WW._preActivateId === RW || (WW._preActivateId = RW, this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass.visibleInstances = null : this._getInstanceDataStorage().visibleInstances = null), this
      }
      _preActivateForIntermediateRendering(WW) {
        const RW = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        return RW.visibleInstances && (RW.visibleInstances.intermediateDefaultRenderId = WW), this
      }
      _registerInstanceForRenderId(WW, RW) {
        const MW = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        return MW.visibleInstances || (MW.visibleInstances = {
          defaultRenderId: RW,
          selfDefaultRenderId: this._renderId,
          intermediateDefaultRenderId: -1
        }), MW.visibleInstances[RW] || (void 0 === MW.previousRenderId || this._instanceDataStorage.useMonoDataStorageRenderPass && !this._instanceDataStorage.isFrozen || delete MW.visibleInstances[MW.previousRenderId], MW.previousRenderId = RW, MW.visibleInstances[RW] = new Array), MW.visibleInstances[RW].push(WW), this
      }
      _afterComputeWorldMatrix() {
        super._afterComputeWorldMatrix(), this.hasThinInstances && (this.uw || this.thinInstanceRefreshBoundingInfo(!1))
      }
      _postActivate() {
        this.edgesShareWithInstances && this.edgesRenderer && this.edgesRenderer.isEnabled && this._renderingGroup && (this._renderingGroup._edgesRenderers.pushNoDuplicate(this.edgesRenderer), this.edgesRenderer.customInstances.push(this.getWorldMatrix()))
      }
      refreshBoundingInfo() {
        let WW, RW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          MW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.hasBoundingInfo && this.LRW().isLocked) return this;
        WW = "object" === typeof RW ? RW : {
          applySkeleton: RW,
          applyMorph: MW
        };
        const wW = this.geometry ? this.geometry.boundingBias : null;
        return this._refreshBoundingInfo(this._getData(WW, null, XW.j.PositionKind), wW), this
      }
      _createGlobalSubMesh(WW) {
        const RW = this.getTotalVertices();
        if (!RW || !this.ptW()) return null;
        if (this.Qs && this.Qs.length > 0) {
          const MW = this.ptW();
          if (!MW) return null;
          const wW = MW.length;
          let CW = !1;
          if (WW) CW = !0;
          else
            for (const WW of this.Qs) {
              if (WW.indexStart + WW.indexCount > wW) {
                CW = !0;
                break
              }
              if (WW.verticesStart + WW.verticesCount > RW) {
                CW = !0;
                break
              }
            }
          if (!CW) return this.Qs[0]
        }
        return this.releaseSubMeshes(), new sW.e(0, 0, RW, 0, this.getTotalIndices() || (this.isUnIndexed ? RW : 0), this)
      }
      subdivide(WW) {
        if (WW < 1) return;
        const RW = this.getTotalIndices();
        let MW = RW / WW | 0,
          wW = 0;
        for (; MW % 3 !== 0;) MW++;
        this.releaseSubMeshes();
        for (let CW = 0; CW < WW && !(wW >= RW); CW++) sW.e.CreateFromIndices(0, wW, wW + MW >= RW ? RW - wW : MW, this, void 0, !1), wW += MW;
        this.refreshBoundingInfo(), this.synchronizeInstances()
      }
      setVerticesData(WW, RW) {
        let MW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          wW = arguments.length > 3 ? arguments[3] : void 0;
        if (this._geometry) this._geometry.setVerticesData(WW, RW, MW, wW);
        else {
          const wW = new jR.c;
          wW.set(RW, WW);
          const CW = this.QRW();
          new kR.e(kR.e.RandomId(), CW, wW, MW, this)
        }
        return this
      }
      removeVerticesData(WW) {
        this._geometry && this._geometry.removeVerticesData(WW)
      }
      markVerticesDataAsUpdatable(WW) {
        let RW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const MW = this.getVertexBuffer(WW);
        MW && MW.isUpdatable() !== RW && this.setVerticesData(WW, this.getVerticesData(WW), RW)
      }
      setVerticesBuffer(WW) {
        let RW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        return this._geometry || (this._geometry = kR.e.CreateGeometryForMesh(this)), this._geometry.setVerticesBuffer(WW, MW, RW), this
      }
      updateVerticesData(WW, RW, MW, wW) {
        return this._geometry ? (wW ? (this.makeGeometryUnique(), this.updateVerticesData(WW, RW, MW, !1)) : this._geometry.updateVerticesData(WW, RW, MW), this) : this
      }
      updateMeshPositions(WW) {
        let RW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const MW = this.getVerticesData(XW.j.PositionKind);
        if (!MW) return this;
        if (WW(MW), this.updateVerticesData(XW.j.PositionKind, MW, !1, !1), RW) {
          const WW = this.ptW(),
            RW = this.getVerticesData(XW.j.NormalKind);
          if (!RW) return this;
          jR.c.ComputeNormals(MW, WW, RW), this.updateVerticesData(XW.j.NormalKind, RW, !1, !1)
        }
        return this
      }
      makeGeometryUnique() {
        if (!this._geometry) return this;
        if (1 === this._geometry.meshes.length) return this;
        const WW = this._geometry,
          RW = this._geometry.copy(kR.e.RandomId());
        return WW.releaseForMesh(this, !0), RW.applyToMesh(this), this
      }
      setIndexBuffer(WW, RW, MW) {
        let wW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          CW = this._geometry;
        CW || (CW = new kR.e(kR.e.RandomId(), this.QRW(), void 0, void 0, this)), CW.setIndexBuffer(WW, RW, MW, wW)
      }
      setIndices(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          MW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          wW = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this._geometry) this._geometry.setIndices(WW, RW, MW, wW);
        else {
          const wW = new jR.c;
          wW.indices = WW;
          const CW = this.QRW();
          new kR.e(kR.e.RandomId(), CW, wW, MW, this, RW)
        }
        return this
      }
      updateIndices(WW, RW) {
        let MW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return this._geometry ? (this._geometry.updateIndices(WW, RW, MW), this) : this
      }
      toLeftHanded() {
        return this._geometry ? (this._geometry.toLeftHanded(), this) : this
      }
      _bind(WW, RW, MW) {
        let wW = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        if (!this._geometry) return this;
        const CW = this.QRW().mC();
        let zR;
        if (this._unIndexed)
          if (this._getRenderingFillMode(MW) === dW.e.WireFrameFillMode) zR = WW._getLinesIndexBuffer(this.ptW(), CW);
          else zR = null;
        else switch (this._getRenderingFillMode(MW)) {
          case dW.e.PointFillMode:
            zR = null;
            break;
          case dW.e.WireFrameFillMode:
            zR = WW._getLinesIndexBuffer(this.ptW(), CW);
            break;
          default:
          case dW.e.TriangleFillMode:
            zR = this._geometry.getIndexBuffer()
        }
        return this._bindDirect(RW, zR, wW)
      }
      _bindDirect(WW, RW) {
        let MW = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (!this._geometry) return this;
        if (this.morphTargetManager && this.morphTargetManager.isUsingTextureForTargets && this.morphTargetManager._bind(WW), MW && this._userInstancedBuffersStorage && !this.hasThinInstances) {
          if (!this._instanceDataStorage.useMonoDataStorageRenderPass && this._userInstancedBuffersStorage.renderPasses && this._userInstancedBuffersStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId]) {
            const WW = this._userInstancedBuffersStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId];
            for (const RW in WW) this._userInstancedBuffersStorage.vertexBuffers[RW] = WW[RW]
          }
          this._geometry._bind(WW, RW, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects)
        } else this._geometry._bind(WW, RW);
        return this
      }
      _draw(WW, RW, MW) {
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        this._internalMeshDataInfo._onBeforeDrawObservable && this._internalMeshDataInfo._onBeforeDrawObservable.notifyObservers(this);
        const wW = this.QRW().mC(),
          CW = wW._currentMaterialContext,
          zR = CW && CW.useVertexPulling;
        return this._unIndexed && RW !== dW.e.WireFrameFillMode || RW == dW.e.PointFillMode ? wW.drawArraysType(RW, WW.verticesStart, WW.verticesCount, this.forcedInstanceCount || MW) : RW == dW.e.WireFrameFillMode ? wW.drawElementsType(RW, 0, WW._linesIndexCount, this.forcedInstanceCount || MW) : zR ? wW.drawArraysType(RW, WW.indexStart, WW.indexCount, this.forcedInstanceCount || MW) : wW.drawElementsType(RW, WW.indexStart, WW.indexCount, this.forcedInstanceCount || MW), this
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
        let RW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const MW = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        if (this._instanceDataStorage.isFrozen) {
          if (RW) return MW.batchCacheReplacementModeInFrozenMode.hardwareInstancedRendering[WW] = !1, MW.batchCacheReplacementModeInFrozenMode.renderSelf[WW] = !0, MW.batchCacheReplacementModeInFrozenMode;
          if (MW.previousBatch) return MW.previousBatch
        }
        const wW = this.QRW(),
          CW = wW._isInIntermediateRendering(),
          zR = CW ? this._internalAbstractMeshDataInfo._onlyForInstancesIntermediate : this._internalAbstractMeshDataInfo._onlyForInstances,
          AW = MW.batchCache;
        if (AW.mustReturn = !1, AW.renderSelf[WW] = RW || !zR && this.isEnabled() && this.isVisible, AW.visibleInstances[WW] = null, MW.visibleInstances && !RW) {
          const RW = MW.visibleInstances,
            zR = wW.getRenderId(),
            bR = CW ? RW.intermediateDefaultRenderId : RW.defaultRenderId;
          AW.visibleInstances[WW] = RW[zR], !AW.visibleInstances[WW] && bR && (AW.visibleInstances[WW] = RW[bR])
        }
        return AW.hardwareInstancedRendering[WW] = !RW && this._instanceDataStorage.hardwareInstancedRendering && null !== AW.visibleInstances[WW] && void 0 !== AW.visibleInstances[WW], MW.previousBatch = AW, AW
      }
      _updateInstancedBuffers(WW, RW, MW, wW, CW, zR) {
        const AW = RW.visibleInstances[WW._id],
          bR = AW ? AW.length : 0,
          yR = RW.parent,
          NW = this._instanceDataStorage;
        let eW = yR.instancesBuffer,
          BW = yR.instancesPreviousBuffer,
          tR = 0,
          TW = 0;
        const gR = RW.renderSelf[WW._id],
          iR = this._scene.floatingOriginOffset,
          YW = !eW || MW !== yR.instancesBufferSize || this._scene.needsPreviousWorldMatrices && !yR.instancesPreviousBuffer;
        if (this._instanceDataStorage.manualUpdate || NW.isFrozen && !YW) TW = (gR ? 1 : 0) + bR;
        else {
          const RW = this.getWorldMatrix();
          if (gR) {
            this._scene.needsPreviousWorldMatrices && (NW.masterMeshPreviousWorldMatrix ? (NW.masterMeshPreviousWorldMatrix.copyToArray(yR.instancesPreviousData, tR), NW.masterMeshPreviousWorldMatrix.hyW(RW)) : (NW.masterMeshPreviousWorldMatrix = RW.clone(), NW.masterMeshPreviousWorldMatrix.copyToArray(yR.instancesPreviousData, tR))), RW.copyToArray(yR.instancesData, tR);
            const WW = RW.JNW();
            yR.instancesData[tR + 12] = WW[12] - iR.x, yR.instancesData[tR + 13] = WW[13] - iR.y, yR.instancesData[tR + 14] = WW[14] - iR.z, tR += 16, TW++
          }
          if (AW) {
            if (qR.INSTANCEDMESH_SORT_TRANSPARENT && this._scene.activeCamera && WW.Ow()?.needAlphaBlendingForMesh(WW.getRenderingMesh())) {
              const WW = this._scene.activeCamera.globalPosition;
              for (let RW = 0; RW < AW.length; RW++) {
                const MW = AW[RW];
                MW._distanceToCamera = QW.q.Distance(MW.LRW().VNW.centerWorld, WW)
              }
              AW.sort(((WW, RW) => WW._distanceToCamera > RW._distanceToCamera ? -1 : WW._distanceToCamera < RW._distanceToCamera ? 1 : 0))
            }
            for (let WW = 0; WW < AW.length; WW++) {
              const RW = AW[WW],
                MW = RW.getWorldMatrix();
              MW.copyToArray(yR.instancesData, tR), this._scene.needsPreviousWorldMatrices && (RW._previousWorldMatrix ? (RW._previousWorldMatrix.copyToArray(yR.instancesPreviousData, tR), RW._previousWorldMatrix.hyW(MW)) : (RW._previousWorldMatrix = MW.clone(), RW._previousWorldMatrix.copyToArray(yR.instancesPreviousData, tR)));
              const wW = MW.JNW();
              yR.instancesData[tR + 12] = wW[12] - iR.x, yR.instancesData[tR + 13] = wW[13] - iR.y, yR.instancesData[tR + 14] = wW[14] - iR.z, tR += 16, TW++
            }
          }
        }
        if (YW) {
          let WW;
          if (eW && eW.dispose(), BW && BW.dispose(), eW = new XW.c(wW, yR.instancesData, !0, 16, !1, !0), yR.instancesBuffer = eW, this._userInstancedBuffersStorage || (this._userInstancedBuffersStorage = {
              data: {},
              vertexBuffers: {},
              strides: {},
              sizes: {},
              vertexArrayObjects: this.mC().getCaps().vertexArrayObject ? {} : void 0
            }), this._instanceDataStorage.useMonoDataStorageRenderPass) WW = this._userInstancedBuffersStorage.vertexBuffers;
          else {
            this._userInstancedBuffersStorage.renderPasses || (this._userInstancedBuffersStorage.renderPasses = {});
            const RW = this._instanceDataStorage.engine.currentRenderPassId;
            WW = this._userInstancedBuffersStorage.renderPasses[RW], WW || (this._userInstancedBuffersStorage.renderPasses[RW] = WW = {})
          }
          WW.world0 = eW.createVertexBuffer("world0", 0, 4), WW.world1 = eW.createVertexBuffer("world1", 4, 4), WW.world2 = eW.createVertexBuffer("world2", 8, 4), WW.world3 = eW.createVertexBuffer("world3", 12, 4), this._scene.needsPreviousWorldMatrices && (BW = new XW.c(wW, yR.instancesPreviousData, !0, 16, !1, !0), yR.instancesPreviousBuffer = BW, WW.previousWorld0 = BW.createVertexBuffer("previousWorld0", 0, 4), WW.previousWorld1 = BW.createVertexBuffer("previousWorld1", 4, 4), WW.previousWorld2 = BW.createVertexBuffer("previousWorld2", 8, 4), WW.previousWorld3 = BW.createVertexBuffer("previousWorld3", 12, 4)), this._invalidateInstanceVertexArrayObject()
        } else this._instanceDataStorage.isFrozen && !this._instanceDataStorage.forceMatrixUpdates || (eW.updateDirectly(yR.instancesData, 0, TW), !this._scene.needsPreviousWorldMatrices || this._instanceDataStorage.manualUpdate && !this._instanceDataStorage.previousManualUpdate || BW.updateDirectly(yR.instancesPreviousData, 0, TW));
        this._processInstancedBuffers(AW, gR), zR && void 0 !== CW && (this.QRW()._activeIndices.addCount(WW.indexCount * TW, !1), wW._currentDrawContext && (wW._currentDrawContext.useInstancing = !0), this._bind(WW, zR, CW), this._draw(WW, CW, TW)), !this._scene.needsPreviousWorldMatrices || YW || !this._instanceDataStorage.manualUpdate || this._instanceDataStorage.isFrozen && !this._instanceDataStorage.forceMatrixUpdates || this._instanceDataStorage.previousManualUpdate || BW.updateDirectly(yR.instancesData, 0, TW)
      }
      _renderWithInstances(WW, RW, MW, wW, CW) {
        const zR = MW.visibleInstances[WW._id],
          AW = zR ? zR.length : 0,
          bR = MW.parent,
          yR = bR.instancesBufferSize,
          NW = 16 * (AW + 1) * 4;
        for (; bR.instancesBufferSize < NW;) bR.instancesBufferSize *= 2;
        return bR.instancesData && yR == bR.instancesBufferSize || (bR.instancesData = new Float32Array(bR.instancesBufferSize / 4)), (this._scene.needsPreviousWorldMatrices && !bR.instancesPreviousData || yR != bR.instancesBufferSize) && (bR.instancesPreviousData = new Float32Array(bR.instancesBufferSize / 4)), this._updateInstancedBuffers(WW, MW, yR, CW, RW, wW), CW.unbindInstanceAttributes(), this
      }
      _renderWithThinInstances(WW, RW, MW, wW) {
        const CW = this._thinInstanceDataStorage?.instancesCount ?? 0;
        this.QRW()._activeIndices.addCount(WW.indexCount * CW, !1), wW._currentDrawContext && (wW._currentDrawContext.useInstancing = !0), this._bind(WW, MW, RW), this._draw(WW, RW, CW), this._scene.needsPreviousWorldMatrices && !this._thinInstanceDataStorage.previousMatrixData && this._thinInstanceDataStorage.matrixData && (this._thinInstanceDataStorage.previousMatrixBuffer ? this._thinInstanceDataStorage.previousMatrixBuffer.updateDirectly(this._thinInstanceDataStorage.matrixData, 0, CW) : this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", this._thinInstanceDataStorage.matrixData, !1)), wW.unbindInstanceAttributes()
      }
      _processInstancedBuffers(WW, RW) {}
      _processRendering(WW, RW, MW, wW, CW, zR, AW, bR) {
        const yR = this.QRW(),
          NW = yR.mC();
        if (wW = this._getRenderingFillMode(wW), zR && RW.getRenderingMesh().hasThinInstances) return this._renderWithThinInstances(RW, wW, MW, NW), this;
        if (zR) this._renderWithInstances(RW, wW, CW, MW, NW);
        else {
          NW._currentDrawContext && (NW._currentDrawContext.useInstancing = !1);
          let MW = 0;
          CW.renderSelf[RW._id] && (AW && AW(!1, WW.getWorldMatrix(), bR), MW++, this._draw(RW, wW, this._instanceDataStorage.overridenInstanceCount));
          const zR = CW.visibleInstances[RW._id];
          if (zR) {
            const WW = zR.length;
            MW += WW;
            for (let MW = 0; MW < WW; MW++) {
              const WW = zR[MW].getWorldMatrix();
              AW && AW(!0, WW, bR), this._draw(RW, wW)
            }
          }
          yR._activeIndices.addCount(RW.indexCount * MW, !1)
        }
        return this
      }
      _disposeInstanceDataStorageRenderPass(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        WW?.instancesBuffer && (RW && WW.instancesBuffer.dispose(), WW.instancesBuffer = null), WW?.instancesPreviousBuffer && (RW && WW.instancesPreviousBuffer.dispose(), WW.instancesPreviousBuffer = null)
      }
      _rebuild() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const RW in this._instanceDataStorage.renderPasses) {
          const MW = this._instanceDataStorage.renderPasses[RW];
          this._disposeInstanceDataStorageRenderPass(MW, WW)
        }
        if (this._disposeInstanceDataStorageRenderPass(this._instanceDataStorage.dataStorageRenderPass, WW), this._userInstancedBuffersStorage) {
          for (const RW in this._userInstancedBuffersStorage.vertexBuffers) {
            const MW = this._userInstancedBuffersStorage.vertexBuffers[RW];
            MW && (WW && MW.dispose(), this._userInstancedBuffersStorage.vertexBuffers[RW] = null)
          }
          this._userInstancedBuffersStorage.vertexArrayObjects && (this._userInstancedBuffersStorage.vertexArrayObjects = {})
        }
        this._internalMeshDataInfo._effectiveMaterial = null, super._rebuild(WW)
      }
      _releaseRenderPassId(WW) {
        const RW = this._instanceDataStorage.renderPasses[WW];
        if (RW && (this._disposeInstanceDataStorageRenderPass(RW, !0), delete this._instanceDataStorage.renderPasses[WW]), this._userInstancedBuffersStorage?.renderPasses) {
          const RW = this._userInstancedBuffersStorage.renderPasses[WW];
          if (RW)
            for (const WW in RW) RW[WW]?.dispose();
          delete this._userInstancedBuffersStorage.renderPasses[WW]
        }
        const MW = this._userInstancedBuffersStorage?.interleavedBuffers;
        MW?.[WW] && (MW[WW].buffer.dispose(), delete MW[WW])
      }
      _freeze() {
        if (this.Qs) {
          for (let WW = 0; WW < this.Qs.length; WW++) this._getInstancesRenderList(WW);
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
      renderWithRenderPassId(WW, RW, MW, wW) {
        let CW = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        const zR = this._scene.mC(),
          AW = zR.currentRenderPassId;
        if (void 0 !== WW && (zR.currentRenderPassId = WW), wW)(!CW || CW && wW.isInFrustum(this._scene._frustumPlanes)) && this.render(wW, !!RW, MW);
        else
          for (let bR = 0; bR < this.Qs.length; bR++) {
            const WW = this.Qs[bR];
            (!CW || CW && WW.isInFrustum(this._scene._frustumPlanes)) && this.render(WW, !!RW, MW)
          }
        return void 0 !== WW && (zR.currentRenderPassId = AW), this
      }
      directRender() {
        if (!this.Qs) return this;
        for (const WW of this.Qs) this.render(WW, !1);
        return this
      }
      render(WW, RW, MW) {
        const wW = this.QRW(),
          CW = wW.mC();
        this._internalAbstractMeshDataInfo._isActiveIntermediate ? this._internalAbstractMeshDataInfo._isActiveIntermediate = !1 : this._internalAbstractMeshDataInfo._isActive = !1;
        const zR = wW.activeCameras?.length ?? 0,
          AW = zR > 1 && wW.activeCamera === wW.activeCameras[0] || zR <= 1,
          bR = this._occlusionDataStorage && -1 !== this._occlusionDataStorage.occlusionForRenderPassId && this._occlusionDataStorage.occlusionForRenderPassId !== CW.currentRenderPassId;
        if (AW && this._checkOcclusionQuery(bR) && !this._occlusionDataStorage.forceRenderingWhenOccluded) return this;
        const yR = this._getInstancesRenderList(WW._id, !!MW);
        if (yR.mustReturn) return this;
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        let NW = 0,
          eW = null;
        this.ignoreCameraMaxZ && wW.activeCamera && !wW._isInIntermediateRendering() && (NW = wW.activeCamera.maxZ, eW = wW.activeCamera, wW.activeCamera.maxZ = 0, wW.updateTransformMatrix(!0)), this._internalMeshDataInfo._onBeforeRenderObservable && this._internalMeshDataInfo._onBeforeRenderObservable.notifyObservers(this);
        const BW = WW.getRenderingMesh(),
          tR = yR.hardwareInstancedRendering[WW._id] || BW.hasThinInstances || !!this._userInstancedBuffersStorage && !WW.getMesh()._internalAbstractMeshDataInfo._actAsRegularMesh,
          TW = this._instanceDataStorage,
          gR = WW.Ow();
        if (!gR) return eW && (eW.maxZ = NW, wW.updateTransformMatrix(!0)), this;
        if (TW.isFrozen && this._internalMeshDataInfo._effectiveMaterial && this._internalMeshDataInfo._effectiveMaterial === gR) {
          if (gR._storeEffectOnSubMeshes && !WW._drawWrapper?._wasPreviouslyReady || !gR._storeEffectOnSubMeshes && !gR._getDrawWrapper()._wasPreviouslyReady) return eW && (eW.maxZ = NW, wW.updateTransformMatrix(!0)), this
        } else {
          if (gR._storeEffectOnSubMeshes) {
            if (!gR.isReadyForSubMesh(this, WW, tR)) return eW && (eW.maxZ = NW, wW.updateTransformMatrix(!0)), this
          } else if (!gR.isReady(this, tR)) return eW && (eW.maxZ = NW, wW.updateTransformMatrix(!0)), this;
          this._internalMeshDataInfo._effectiveMaterial = gR
        }
        if (RW) {
          const WW = this._internalMeshDataInfo._effectiveMaterial;
          if (1 === WW.alphaModes.length) CW.setAlphaMode(WW.alphaMode);
          else
            for (let RW = 0; RW < WW.alphaModes.length; RW++) {
              const MW = WW.alphaModes[RW];
              CW.setAlphaMode(void 0 !== MW ? MW : 2, !1, RW)
            }
        }
        let iR;
        iR = this._internalMeshDataInfo._effectiveMaterial._storeEffectOnSubMeshes ? WW._drawWrapper : this._internalMeshDataInfo._effectiveMaterial._getDrawWrapper();
        const YW = iR?.effect ?? null;
        for (let fW = 0, QW = wW._beforeRenderingMeshStage; fW < QW.length; fW++) {
          QW[fW].action(this, WW, yR, YW)
        }
        if (!iR || !YW) return eW && (eW.maxZ = NW, wW.updateTransformMatrix(!0)), this;
        const JW = MW || this;
        let PW;
        if (!TW.isFrozen && (this._internalMeshDataInfo._effectiveMaterial.backFaceCulling || null !== this._internalMeshDataInfo._effectiveMaterial.sideOrientation || this._internalMeshDataInfo._effectiveMaterial._twoSidedLighting)) {
          const WW = JW._getWorldMatrixDeterminant();
          PW = this._internalMeshDataInfo._effectiveMaterial._getEffectiveOrientation(this), WW < 0 && (PW = PW === dW.e.ClockWiseSideOrientation ? dW.e.CounterClockWiseSideOrientation : dW.e.ClockWiseSideOrientation), this._internalMeshDataInfo._effectiveSideOrientation = PW
        }
        const IW = this._internalMeshDataInfo._effectiveMaterial._preBind(iR, this._internalMeshDataInfo._effectiveSideOrientation);
        this._internalMeshDataInfo._effectiveMaterial.forceDepthWrite && CW.setDepthWrite(!0);
        const oW = this._internalMeshDataInfo._effectiveMaterial,
          lW = oW.fillMode;
        this._internalMeshDataInfo._onBeforeBindObservable && this._internalMeshDataInfo._onBeforeBindObservable.notifyObservers(this), tR || this._bind(WW, YW, lW, !1);
        const FW = JW.getWorldMatrix();
        oW._storeEffectOnSubMeshes ? oW.bindForSubMesh(FW, this, WW) : oW.bind(FW, this);
        try {
          pW.d._BindAttachmentsForEffect(CW, YW) && (!oW.backFaceCulling && oW.separateCullingPass && (CW.setState(!0, oW.zOffset, !1, !IW, oW.cullBackFaces, oW.stencil, oW.zOffsetUnits), this._processRendering(this, WW, YW, lW, yR, tR, this._onBeforeDraw, this._internalMeshDataInfo._effectiveMaterial), CW.setState(!0, oW.zOffset, !1, IW, oW.cullBackFaces, oW.stencil, oW.zOffsetUnits), this._internalMeshDataInfo._onBetweenPassObservable && this._internalMeshDataInfo._onBetweenPassObservable.notifyObservers(WW)), this._processRendering(this, WW, YW, lW, yR, tR, this._onBeforeDraw, this._internalMeshDataInfo._effectiveMaterial))
        } finally {
          pW.d._RestoreAttachments(CW)
        }
        this._internalMeshDataInfo._effectiveMaterial.unbind();
        for (let fW = 0, QW = wW._afterRenderingMeshStage; fW < QW.length; fW++) {
          QW[fW].action(this, WW, yR, YW)
        }
        return this._internalMeshDataInfo._onAfterRenderObservable && this._internalMeshDataInfo._onAfterRenderObservable.notifyObservers(this), eW && (eW.maxZ = NW, wW.updateTransformMatrix(!0)), 2 !== wW.performancePriority || TW.isFrozen || this._freeze(), this
      }
      _renderRunFollower(WW, RW) {
        const MW = this._scene,
          wW = MW._engine;
        if (wW.isWebGPU || WW._mesh !== this || 0 !== this.instances.length || this.render !== qR.prototype.render) return !1;
        const CW = WW.Ow();
        if (!CW || CW !== MW._cachedMaterial || void 0 === CW._canBindRunFollower) return !1;
        const zR = WW._drawWrapper,
          AW = zR?.effect;
        if (!AW || AW !== MW._cachedEffect || this.visibility !== MW._cachedVisibility || zR._forceRebindOnNextCall) return !1;
        const bR = this.hasThinInstances;
        if (!bR && this._userInstancedBuffersStorage) return !1;
        if (!zR._wasPreviouslyReady || zR._wasPreviouslyUsingInstances !== bR) return !1;
        const yR = this._internalMeshDataInfo;
        if (this.ignoreCameraMaxZ || this.morphTargetManager || this._instanceDataStorage.isFrozen || MW._isInIntermediateRendering() || 0 !== MW._beforeRenderingMeshStage.length || 0 !== MW._afterRenderingMeshStage.length || yR._onBeforeRenderObservable?.hasObservers() || yR._onBeforeBindObservable?.hasObservers() || yR._onAfterRenderObservable?.hasObservers()) return !1;
        const NW = this.occlusionType;
        if (void 0 !== NW && NW !== aR.b.OCCLUSION_TYPE_NONE || !CW._canBindRunFollower(MW, wW, this, WW, AW)) return !1;
        const eW = this._internalAbstractMeshDataInfo,
          BW = eW._isActiveIntermediate;
        BW ? eW._isActiveIntermediate = !1 : eW._isActive = !1;
        const tR = MW.activeCameras?.length ?? 0;
        (tR > 1 && MW.activeCamera === MW.activeCameras[0] || tR <= 1) && this._checkOcclusionQuery(!1);
        const TW = this._getInstancesRenderList(WW._id);
        if (TW.mustReturn) return !0;
        if (!bR && !TW.renderSelf[WW._id]) return BW ? eW._isActiveIntermediate = !0 : eW._isActive = !0, !1;
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return !0;
        if (yR._effectiveMaterial = CW, RW)
          if (1 === CW.alphaModes.length) wW.setAlphaMode(CW.alphaMode);
          else
            for (let iR = 0; iR < CW.alphaModes.length; iR++) {
              const WW = CW.alphaModes[iR];
              wW.setAlphaMode(void 0 !== WW ? WW : 2, !1, iR)
            }
        if (CW.backFaceCulling || null !== CW.sideOrientation || CW._twoSidedLighting) {
          const WW = this._getWorldMatrixDeterminant();
          let RW = CW._getEffectiveOrientation(this);
          WW < 0 && (RW = RW === dW.e.ClockWiseSideOrientation ? dW.e.CounterClockWiseSideOrientation : dW.e.ClockWiseSideOrientation), yR._effectiveSideOrientation = RW
        }
        CW._preBind(zR, yR._effectiveSideOrientation), CW.forceDepthWrite && wW.setDepthWrite(!0);
        const gR = CW.fillMode;
        return bR || this._bind(WW, AW, gR, !1), CW._bindRunFollower(this.getWorldMatrix(), this, WW, AW), this._processRendering(this, WW, AW, gR, TW, bR, this._onBeforeDraw, CW), CW.unbind(), 2 === MW.performancePriority && this._freeze(), !0
      }
      cleanMatrixWeights() {
        this.isVerticesDataPresent(XW.j.MatricesWeightsKind) && (this.isVerticesDataPresent(XW.j.MatricesWeightsExtraKind) ? this._normalizeSkinWeightsAndExtra() : this._normalizeSkinFourWeights())
      }
      _normalizeSkinFourWeights() {
        const WW = this.getVerticesData(XW.j.MatricesWeightsKind),
          RW = WW.length;
        for (let MW = 0; MW < RW; MW += 4) {
          const RW = WW[MW] + WW[MW + 1] + WW[MW + 2] + WW[MW + 3];
          if (0 === RW) WW[MW] = 1;
          else {
            const wW = 1 / RW;
            WW[MW] *= wW, WW[MW + 1] *= wW, WW[MW + 2] *= wW, WW[MW + 3] *= wW
          }
        }
        this.setVerticesData(XW.j.MatricesWeightsKind, WW)
      }
      _normalizeSkinWeightsAndExtra() {
        const WW = this.getVerticesData(XW.j.MatricesWeightsExtraKind),
          RW = this.getVerticesData(XW.j.MatricesWeightsKind),
          MW = RW.length;
        for (let wW = 0; wW < MW; wW += 4) {
          let MW = RW[wW] + RW[wW + 1] + RW[wW + 2] + RW[wW + 3];
          if (MW += WW[wW] + WW[wW + 1] + WW[wW + 2] + WW[wW + 3], 0 === MW) RW[wW] = 1;
          else {
            const CW = 1 / MW;
            RW[wW] *= CW, RW[wW + 1] *= CW, RW[wW + 2] *= CW, RW[wW + 3] *= CW, WW[wW] *= CW, WW[wW + 1] *= CW, WW[wW + 2] *= CW, WW[wW + 3] *= CW
          }
        }
        this.setVerticesData(XW.j.MatricesWeightsKind, RW), this.setVerticesData(XW.j.MatricesWeightsKind, WW)
      }
      validateSkinning() {
        const WW = this.getVerticesData(XW.j.MatricesWeightsExtraKind),
          RW = this.getVerticesData(XW.j.MatricesWeightsKind);
        if (null === RW || null == this.skeleton) return {
          skinned: !1,
          valid: !0,
          Mw: "not skinned"
        };
        const MW = RW.length;
        let wW = 0,
          CW = 0,
          zR = 0,
          AW = 0;
        const bR = null === WW ? 4 : 8,
          yR = [];
        for (let TW = 0; TW <= bR; TW++) yR[TW] = 0;
        for (let TW = 0; TW < MW; TW += 4) {
          let MW = RW[TW],
            NW = MW,
            eW = 0 === NW ? 0 : 1;
          for (let CW = 1; CW < bR; CW++) {
            const zR = CW < 4 ? RW[TW + CW] : WW[TW + CW - 4];
            zR > MW && wW++, 0 !== zR && eW++, NW += zR, MW = zR
          }
          if (yR[eW]++, eW > zR && (zR = eW), 0 === NW) CW++;
          else {
            const MW = 1 / NW;
            let wW = 0;
            for (let CW = 0; CW < bR; CW++) wW += CW < 4 ? Math.abs(RW[TW + CW] - RW[TW + CW] * MW) : Math.abs(WW[TW + CW - 4] - WW[TW + CW - 4] * MW);
            wW > .001 && AW++
          }
        }
        const NW = this.skeleton.bones.length,
          eW = this.getVerticesData(XW.j.MatricesIndicesKind),
          BW = this.getVerticesData(XW.j.MatricesIndicesExtraKind);
        let tR = 0;
        for (let TW = 0; TW < MW; TW += 4)
          for (let WW = 0; WW < bR; WW++) {
            const RW = WW < 4 ? eW[TW + WW] : BW[TW + WW - 4];
            (RW >= NW || RW < 0) && tR++
          }
        return {
          skinned: !0,
          valid: 0 === CW && 0 === AW && 0 === tR,
          Mw: "Number of Weights = " + MW / 4 + "\nMaximum influences = " + zR + "\nMissing Weights = " + CW + "\nNot Sorted = " + wW + "\nNot Normalized = " + AW + "\nWeightCounts = [" + yR + "]\nNumber of bones = " + NW + "\nBad Bone Indices = " + tR
        }
      }
      _checkDelayState() {
        const WW = this.QRW();
        return this._geometry ? this._geometry.load(WW) : 4 === this.delayLoadState && (this.delayLoadState = 2, this._queueLoad(WW)), this
      }
      _queueLoad(WW) {
        WW.addPendingData(this);
        const RW = -1 !== this.delayLoadingFile.indexOf(".babylonbinarymeshdata");
        return (async () => {
          try {
            const MW = await WW._loadDelayedFileAsync(this.delayLoadingFile, RW, !0);
            MW instanceof ArrayBuffer ? this._delayLoadingFunction(MW, this) : this._delayLoadingFunction(JSON.parse(MW), this);
            for (const WW of this.instances) WW.refreshBoundingInfo(), WW._syncSubMeshes();
            this.delayLoadState = 1, WW.removePendingData(this)
          } catch (MW) {
            WW.removePendingData(this), WW.cNW || VW.b.Error(`Unable to delay load geometry data for mesh "${this.name}" from "${this.delayLoadingFile}": ${MW}`)
          }
        })(), this
      }
      isInFrustum(WW) {
        return 2 !== this.delayLoadState && (!!super.isInFrustum(WW) && (this._checkDelayState(), !0))
      }
      setMaterialById(WW) {
        const RW = this.QRW().materials;
        let MW;
        for (MW = RW.length - 1; MW > -1; MW--)
          if (RW[MW].id === WW) return this.material = RW[MW], this;
        const wW = this.QRW().multiMaterials;
        for (MW = wW.length - 1; MW > -1; MW--)
          if (wW[MW].id === WW) return this.material = wW[MW], this;
        return this
      }
      getAnimatables() {
        const WW = [];
        return this.material && WW.push(this.material), this.skeleton && WW.push(this.skeleton), WW
      }
      bakeTransformIntoVertices(WW) {
        if (!this.isVerticesDataPresent(XW.j.PositionKind)) return this;
        const RW = this.Qs.splice(0);
        this._resetPointsArrayCache();
        let MW = this.getVerticesData(XW.j.PositionKind);
        const wW = QW.q.Zero();
        let CW;
        for (CW = 0; CW < MW.length; CW += 3) QW.q.TransformCoordinatesFromFloatsToRef(MW[CW], MW[CW + 1], MW[CW + 2], WW, wW).toArray(MW, CW);
        if (this.setVerticesData(XW.j.PositionKind, MW, this.getVertexBuffer(XW.j.PositionKind).isUpdatable()), this.isVerticesDataPresent(XW.j.NormalKind)) {
          for (MW = this.getVerticesData(XW.j.NormalKind), CW = 0; CW < MW.length; CW += 3) QW.q.TransformNormalFromFloatsToRef(MW[CW], MW[CW + 1], MW[CW + 2], WW, wW).normalize().toArray(MW, CW);
          this.setVerticesData(XW.j.NormalKind, MW, this.getVertexBuffer(XW.j.NormalKind).isUpdatable())
        }
        if (this.isVerticesDataPresent(XW.j.TangentKind)) {
          for (MW = this.getVerticesData(XW.j.TangentKind), CW = 0; CW < MW.length; CW += 4) QW.q.TransformNormalFromFloatsToRef(MW[CW], MW[CW + 1], MW[CW + 2], WW, wW).normalize().toArray(MW, CW);
          this.setVerticesData(XW.j.TangentKind, MW, this.getVertexBuffer(XW.j.TangentKind).isUpdatable())
        }
        return WW.determinant() < 0 && this.flipFaces(), this.releaseSubMeshes(), this.Qs = RW, this
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
          RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          MW = arguments.length > 2 ? arguments[2] : void 0,
          wW = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        if (RW && void 0 === RW._addToSceneRootNodes) {
          const MW = RW;
          return DW.source = this, DW.doNotCloneChildren = MW.doNotCloneChildren, DW.clonePhysicsImpostor = MW.clonePhysicsImpostor, DW.cloneThinInstances = MW.cloneThinInstances, new qR(WW, this.QRW(), DW)
        }
        return new qR(WW, this.QRW(), RW, this, MW, wW)
      }
      dispose(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.morphTargetManager = null, this._geometry && this._geometry.releaseForMesh(this, !0);
        const MW = this._internalMeshDataInfo;
        if (MW._onBeforeDrawObservable && MW._onBeforeDrawObservable.clear(), MW._onBeforeBindObservable && MW._onBeforeBindObservable.clear(), MW._onBeforeRenderObservable && MW._onBeforeRenderObservable.clear(), MW._onAfterRenderObservable && MW._onAfterRenderObservable.clear(), MW._onBetweenPassObservable && MW._onBetweenPassObservable.clear(), this._scene.useClonedMeshMap) {
          if (MW.meshMap)
            for (const WW in MW.meshMap) {
              const RW = MW.meshMap[WW];
              RW && (RW._internalMeshDataInfo._source = null, MW.meshMap[WW] = void 0)
            }
          MW._source && MW._source._internalMeshDataInfo.meshMap && (MW._source._internalMeshDataInfo.meshMap[this.uniqueId] = void 0)
        } else {
          const WW = this.QRW().meshes;
          for (const RW of WW) {
            const WW = RW;
            WW._internalMeshDataInfo && WW._internalMeshDataInfo._source && WW._internalMeshDataInfo._source === this && (WW._internalMeshDataInfo._source = null)
          }
        }
        MW._source = null, this._disposeInstanceSpecificData(), this._disposeThinInstanceSpecificData(), this._internalMeshDataInfo._checkReadinessObserver && this._scene.onBeforeRenderObservable.remove(this._internalMeshDataInfo._checkReadinessObserver), super.dispose(WW, RW)
      }
      _disposeInstanceSpecificData() {}
      _disposeThinInstanceSpecificData() {}
      _invalidateInstanceVertexArrayObject() {}
      applyDisplacementMap(WW, RW, MW, wW, CW, zR) {
        let AW = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          bR = arguments.length > 7 ? arguments[7] : void 0;
        const yR = this.QRW();
        return (0, IW.m)(WW, (WW => {
          const bR = WW.width,
            yR = WW.height,
            NW = this.mC().createCanvas(bR, yR).getContext("2d");
          NW.drawImage(WW, 0, 0);
          const eW = NW.getImageData(0, 0, bR, yR).data;
          this.applyDisplacementMapFromBuffer(eW, bR, yR, RW, MW, CW, zR, AW), wW && wW(this)
        }), bR || (() => {}), yR.offlineProvider), this
      }
      applyDisplacementMapFromBuffer(WW, RW, MW, wW, CW, zR, AW) {
        let bR = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
        if (!this.isVerticesDataPresent(XW.j.PositionKind) || !this.isVerticesDataPresent(XW.j.NormalKind) || !this.isVerticesDataPresent(XW.j.UVKind)) return VW.b.Warn("Cannot call applyDisplacementMap: Given mesh is not complete. Position, Normal or UV are missing"), this;
        const yR = this.getVerticesData(XW.j.PositionKind, !0, !0),
          NW = this.getVerticesData(XW.j.NormalKind),
          eW = this.getVerticesData(XW.j.UVKind);
        let BW = QW.q.Zero();
        const tR = QW.q.Zero(),
          TW = QW.n.Zero();
        zR = zR || QW.n.Zero(), AW = AW || new QW.n(1, 1);
        for (let gR = 0; gR < yR.length; gR += 3) {
          QW.q.FromArrayToRef(yR, gR, BW), QW.q.FromArrayToRef(NW, gR, tR), QW.n.FromArrayToRef(eW, gR / 3 * 2, TW);
          const bR = 4 * ((Math.abs(TW.x * AW.x + zR.x % 1) * (RW - 1) % RW | 0) + (Math.abs(TW.y * AW.y + zR.y % 1) * (MW - 1) % MW | 0) * RW),
            iR = .3 * (WW[bR] / 255) + .59 * (WW[bR + 1] / 255) + .11 * (WW[bR + 2] / 255);
          tR.normalize(), tR.scaleInPlace(wW + (CW - wW) * iR), BW = BW.add(tR), BW.toArray(yR, gR)
        }
        return jR.c.ComputeNormals(yR, this.ptW(), NW), bR ? (this.setVerticesData(XW.j.PositionKind, yR), this.setVerticesData(XW.j.NormalKind, NW), this.setVerticesData(XW.j.UVKind, eW)) : (this.updateVerticesData(XW.j.PositionKind, yR), this.updateVerticesData(XW.j.NormalKind, NW)), this
      }
      _getFlattenedNormals(WW, RW) {
        const MW = new Float32Array(3 * WW.length);
        let wW = 0;
        const CW = this.sideOrientation === (this._scene.useRightHandedSystem ? 1 : 0);
        for (let zR = 0; zR < WW.length; zR += 3) {
          const AW = QW.q.FromArray(RW, 3 * WW[zR]),
            bR = QW.q.FromArray(RW, 3 * WW[zR + 1]),
            yR = QW.q.FromArray(RW, 3 * WW[zR + 2]),
            NW = AW.subtract(bR),
            eW = yR.subtract(bR),
            BW = QW.q.Normalize(QW.q.Cross(NW, eW));
          CW && BW.scaleInPlace(-1);
          for (let WW = 0; WW < 3; WW++) MW[wW++] = BW.x, MW[wW++] = BW.y, MW[wW++] = BW.z
        }
        return MW
      }
      _convertToUnIndexedMesh() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const RW = this.getVerticesDataKinds().filter((WW => !this.getVertexBuffer(WW)?.getIsInstanced())),
          MW = this.ptW(!1, !0),
          wW = {},
          CW = (WW, RW) => {
            const wW = new Float32Array(MW.length * RW);
            let CW = 0;
            for (let zR = 0; zR < MW.length; zR++)
              for (let AW = 0; AW < RW; AW++) wW[CW++] = WW[MW[zR] * RW + AW];
            return wW
          },
          zR = this.LRW(),
          AW = this.geometry ? this.Qs.slice(0) : [];
        for (const bR of RW) wW[bR] = this.getVerticesData(bR);
        for (const bR of RW) {
          const RW = this.getVertexBuffer(bR),
            zR = RW.getSize();
          if (WW && bR === XW.j.NormalKind) {
            const WW = this._getFlattenedNormals(MW, wW[XW.j.PositionKind]);
            this.setVerticesData(XW.j.NormalKind, WW, RW.isUpdatable(), zR)
          } else this.setVerticesData(bR, CW(wW[bR], zR), RW.isUpdatable(), zR)
        }
        if (this.morphTargetManager) {
          for (let RW = 0; RW < this.morphTargetManager.numTargets; RW++) {
            const wW = this.morphTargetManager.getTarget(RW),
              zR = wW.getPositions();
            wW.UtW(CW(zR, 3));
            const AW = wW.getNormals();
            AW && wW.setNormals(WW ? this._getFlattenedNormals(MW, zR) : CW(AW, 3));
            const bR = wW.getTangents();
            bR && wW.setTangents(CW(bR, 3));
            const yR = wW.getUVs();
            yR && wW.setUVs(CW(yR, 2));
            const NW = wW.getColors();
            NW && wW.setColors(CW(NW, 4))
          }
          this.morphTargetManager.synchronize()
        }
        for (let bR = 0; bR < MW.length; bR++) MW[bR] = bR;
        this.setIndices(MW), this._unIndexed = !0, this.releaseSubMeshes();
        for (const bR of AW) {
          const WW = bR.LRW();
          sW.e.AddToMesh(bR.materialIndex, bR.indexStart, bR.indexCount, bR.indexStart, bR.indexCount, this).setBoundingInfo(WW)
        }
        return this.setBoundingInfo(zR), this.synchronizeInstances(), this
      }
      convertToFlatShadedMesh() {
        return this._convertToUnIndexedMesh(!0)
      }
      convertToUnIndexedMesh() {
        return this._convertToUnIndexedMesh()
      }
      flipFaces() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const RW = jR.c.ExtractFromMesh(this);
        let MW;
        if (WW && this.isVerticesDataPresent(XW.j.NormalKind) && RW.normals) {
          for (MW = 0; MW < RW.normals.length; MW++) RW.normals[MW] *= -1;
          this.setVerticesData(XW.j.NormalKind, RW.normals, this.isVertexBufferUpdatable(XW.j.NormalKind))
        }
        if (RW.indices) {
          let WW;
          for (MW = 0; MW < RW.indices.length; MW += 3) WW = RW.indices[MW + 1], RW.indices[MW + 1] = RW.indices[MW + 2], RW.indices[MW + 2] = WW;
          this.setIndices(RW.indices, null, this.isVertexBufferUpdatable(XW.j.PositionKind), !0)
        }
        return this
      }
      increaseVertices() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        const RW = jR.c.ExtractFromMesh(this),
          MW = RW.indices && !Array.isArray(RW.indices) && Array.from ? Array.from(RW.indices) : RW.indices,
          wW = RW.positions && !Array.isArray(RW.positions) && Array.from ? Array.from(RW.positions) : RW.positions,
          CW = RW.uvs && !Array.isArray(RW.uvs) && Array.from ? Array.from(RW.uvs) : RW.uvs,
          zR = RW.normals && !Array.isArray(RW.normals) && Array.from ? Array.from(RW.normals) : RW.normals;
        if (MW && wW) {
          RW.indices = MW, RW.positions = wW, CW && (RW.uvs = CW), zR && (RW.normals = zR);
          const AW = WW + 1,
            bR = [];
          for (let WW = 0; WW < AW + 1; WW++) bR[WW] = [];
          let yR, NW;
          const eW = new QW.q(0, 0, 0),
            BW = new QW.q(0, 0, 0),
            tR = new QW.n(0, 0),
            TW = [],
            gR = [],
            iR = [];
          let YW, JW, PW, IW = wW.length;
          CW && (JW = CW.length), zR && (PW = zR.length);
          for (let WW = 0; WW < MW.length; WW += 3) {
            gR[0] = MW[WW], gR[1] = MW[WW + 1], gR[2] = MW[WW + 2];
            for (let WW = 0; WW < 3; WW++)
              if (yR = gR[WW], NW = gR[(WW + 1) % 3], void 0 === iR[yR] && void 0 === iR[NW] ? (iR[yR] = [], iR[NW] = []) : (void 0 === iR[yR] && (iR[yR] = []), void 0 === iR[NW] && (iR[NW] = [])), void 0 === iR[yR][NW] && void 0 === iR[NW][yR]) {
                iR[yR][NW] = [], eW.x = (wW[3 * NW] - wW[3 * yR]) / AW, eW.y = (wW[3 * NW + 1] - wW[3 * yR + 1]) / AW, eW.z = (wW[3 * NW + 2] - wW[3 * yR + 2]) / AW, zR && (BW.x = (zR[3 * NW] - zR[3 * yR]) / AW, BW.y = (zR[3 * NW + 1] - zR[3 * yR + 1]) / AW, BW.z = (zR[3 * NW + 2] - zR[3 * yR + 2]) / AW), CW && (tR.x = (CW[2 * NW] - CW[2 * yR]) / AW, tR.y = (CW[2 * NW + 1] - CW[2 * yR + 1]) / AW), iR[yR][NW].push(yR);
                for (let WW = 1; WW < AW; WW++) iR[yR][NW].push(wW.length / 3), wW[IW++] = wW[3 * yR] + WW * eW.x, wW[IW++] = wW[3 * yR + 1] + WW * eW.y, wW[IW++] = wW[3 * yR + 2] + WW * eW.z, zR && (zR[PW++] = zR[3 * yR] + WW * BW.x, zR[PW++] = zR[3 * yR + 1] + WW * BW.y, zR[PW++] = zR[3 * yR + 2] + WW * BW.z), CW && (CW[JW++] = CW[2 * yR] + WW * tR.x, CW[JW++] = CW[2 * yR + 1] + WW * tR.y);
                iR[yR][NW].push(NW), iR[NW][yR] = [], YW = iR[yR][NW].length;
                for (let WW = 0; WW < YW; WW++) iR[NW][yR][WW] = iR[yR][NW][YW - 1 - WW]
              } bR[0][0] = MW[WW], bR[1][0] = iR[MW[WW]][MW[WW + 1]][1], bR[1][1] = iR[MW[WW]][MW[WW + 2]][1];
            for (let RW = 2; RW < AW; RW++) {
              bR[RW][0] = iR[MW[WW]][MW[WW + 1]][RW], bR[RW][RW] = iR[MW[WW]][MW[WW + 2]][RW], eW.x = (wW[3 * bR[RW][RW]] - wW[3 * bR[RW][0]]) / RW, eW.y = (wW[3 * bR[RW][RW] + 1] - wW[3 * bR[RW][0] + 1]) / RW, eW.z = (wW[3 * bR[RW][RW] + 2] - wW[3 * bR[RW][0] + 2]) / RW, zR && (BW.x = (zR[3 * bR[RW][RW]] - zR[3 * bR[RW][0]]) / RW, BW.y = (zR[3 * bR[RW][RW] + 1] - zR[3 * bR[RW][0] + 1]) / RW, BW.z = (zR[3 * bR[RW][RW] + 2] - zR[3 * bR[RW][0] + 2]) / RW), CW && (tR.x = (CW[2 * bR[RW][RW]] - CW[2 * bR[RW][0]]) / RW, tR.y = (CW[2 * bR[RW][RW] + 1] - CW[2 * bR[RW][0] + 1]) / RW);
              for (let WW = 1; WW < RW; WW++) bR[RW][WW] = wW.length / 3, wW[IW++] = wW[3 * bR[RW][0]] + WW * eW.x, wW[IW++] = wW[3 * bR[RW][0] + 1] + WW * eW.y, wW[IW++] = wW[3 * bR[RW][0] + 2] + WW * eW.z, zR && (zR[PW++] = zR[3 * bR[RW][0]] + WW * BW.x, zR[PW++] = zR[3 * bR[RW][0] + 1] + WW * BW.y, zR[PW++] = zR[3 * bR[RW][0] + 2] + WW * BW.z), CW && (CW[JW++] = CW[2 * bR[RW][0]] + WW * tR.x, CW[JW++] = CW[2 * bR[RW][0] + 1] + WW * tR.y)
            }
            bR[AW] = iR[MW[WW + 1]][MW[WW + 2]], TW.push(bR[0][0], bR[1][0], bR[1][1]);
            for (let WW = 1; WW < AW; WW++) {
              let RW;
              for (RW = 0; RW < WW; RW++) TW.push(bR[WW][RW], bR[WW + 1][RW], bR[WW + 1][RW + 1]), TW.push(bR[WW][RW], bR[WW + 1][RW + 1], bR[WW][RW + 1]);
              TW.push(bR[WW][RW], bR[WW + 1][RW], bR[WW + 1][RW + 1])
            }
          }
          RW.indices = TW, RW.applyToMesh(this, this.isVertexBufferUpdatable(XW.j.PositionKind))
        } else VW.b.Warn("Couldn't increase number of vertices : VertexData must contain at least indices and positions")
      }
      forceSharedVertices() {
        const WW = jR.c.ExtractFromMesh(this),
          RW = WW.uvs,
          MW = WW.indices,
          wW = WW.positions,
          CW = WW.colors,
          zR = WW.matricesIndices,
          AW = WW.matricesWeights,
          bR = WW.matricesIndicesExtra,
          yR = WW.matricesWeightsExtra;
        if (void 0 === MW || void 0 === wW || null === MW || null === wW) VW.b.Warn("VertexData contains empty entries");
        else {
          const NW = [],
            eW = [],
            BW = [],
            tR = [],
            TW = [],
            gR = [],
            iR = [],
            YW = [];
          let JW, PW = 0;
          const IW = {};
          let oW, lW;
          for (let WW = 0; WW < MW.length; WW += 3) {
            lW = [MW[WW], MW[WW + 1], MW[WW + 2]], JW = [];
            for (let WW = 0; WW < 3; WW++) {
              JW[WW] = "";
              for (let RW = 0; RW < 3; RW++) Math.abs(wW[3 * lW[WW] + RW]) < 1e-8 && (wW[3 * lW[WW] + RW] = 0), JW[WW] += wW[3 * lW[WW] + RW] + "|"
            }
            if (JW[0] != JW[1] && JW[0] != JW[2] && JW[1] != JW[2])
              for (let WW = 0; WW < 3; WW++) {
                if (oW = IW[JW[WW]], void 0 === oW) {
                  IW[JW[WW]] = PW, oW = PW++;
                  for (let RW = 0; RW < 3; RW++) NW.push(wW[3 * lW[WW] + RW]);
                  if (null !== CW && void 0 !== CW)
                    for (let RW = 0; RW < 4; RW++) tR.push(CW[4 * lW[WW] + RW]);
                  if (null !== RW && void 0 !== RW)
                    for (let MW = 0; MW < 2; MW++) BW.push(RW[2 * lW[WW] + MW]);
                  if (null !== zR && void 0 !== zR)
                    for (let RW = 0; RW < 4; RW++) TW.push(zR[4 * lW[WW] + RW]);
                  if (null !== AW && void 0 !== AW)
                    for (let RW = 0; RW < 4; RW++) gR.push(AW[4 * lW[WW] + RW]);
                  if (null !== bR && void 0 !== bR)
                    for (let RW = 0; RW < 4; RW++) iR.push(bR[4 * lW[WW] + RW]);
                  if (null !== yR && void 0 !== yR)
                    for (let RW = 0; RW < 4; RW++) YW.push(yR[4 * lW[WW] + RW])
                }
                eW.push(oW)
              }
          }
          const FW = [];
          jR.c.ComputeNormals(NW, eW, FW), WW.positions = NW, WW.indices = eW, WW.normals = FW, null !== RW && void 0 !== RW && (WW.uvs = BW), null !== CW && void 0 !== CW && (WW.colors = tR), null !== zR && void 0 !== zR && (WW.matricesIndices = TW), null !== AW && void 0 !== AW && (WW.matricesWeights = gR), null !== bR && void 0 !== bR && (WW.matricesIndicesExtra = iR), null !== AW && void 0 !== AW && (WW.matricesWeightsExtra = YW), WW.applyToMesh(this, this.isVertexBufferUpdatable(XW.j.PositionKind))
        }
      }
      static _instancedMeshFactory(WW, RW) {
        throw (0, xR.g)("InstancedMesh")
      }
      static _PhysicsImpostorParser(WW, RW, MW) {
        throw (0, xR.g)("PhysicsImpostor")
      }
      createInstance(WW) {
        const RW = qR._instancedMeshFactory(WW, this);
        return RW.parent = this.parent, RW
      }
      synchronizeInstances() {
        for (let WW = 0; WW < this.instances.length; WW++) {
          this.instances[WW]._syncSubMeshes()
        }
        return this
      }
      optimizeIndices(WW) {
        const RW = this.ptW(),
          MW = this.getVerticesData(XW.j.PositionKind);
        if (!MW || !RW) return this;
        const wW = [];
        for (let zR = 0; zR < MW.length; zR += 3) wW.push(QW.q.FromArray(MW, zR));
        const CW = [];
        return PW.c.SyncAsyncForLoop(wW.length, 40, (WW => {
          const RW = wW.length - 1 - WW,
            MW = wW[RW];
          for (let zR = 0; zR < RW; ++zR) {
            const WW = wW[zR];
            if (MW.equals(WW)) {
              CW[RW] = zR;
              break
            }
          }
        }), (() => {
          for (let WW = 0; WW < RW.length; ++WW) RW[WW] = CW[RW[WW]] || RW[WW];
          const MW = this.Qs.slice(0);
          this.setIndices(RW), this.Qs = MW, WW && WW(this)
        })), this
      }
      serialize() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        WW.name = this.name, WW.id = this.id, WW.uniqueId = this.uniqueId, WW.type = this.getClassName(), lW.d && lW.d.HasTags(this) && (WW.tags = lW.d.GetTags(this)), WW.position = this.position.JNW(), this.rotationQuaternion ? WW.rotationQuaternion = this.rotationQuaternion.JNW() : this.rotation && (WW.rotation = this.rotation.JNW()), WW.NA = this.NA.JNW(), this._postMultiplyPivotMatrix ? WW.pivotMatrix = this.getPivotMatrix().JNW() : WW.localMatrix = this.getPivotMatrix().JNW(), WW.isEnabled = this.isEnabled(!1), WW.isVisible = this.isVisible, WW.infiniteDistance = this.infiniteDistance, WW.pickable = this.DC, WW.receiveShadows = this.receiveShadows, WW.billboardMode = this.billboardMode, WW.visibility = this.visibility, WW.xC = this.xC, WW.checkCollisions = this.checkCollisions, WW.ellipsoid = this.ellipsoid.JNW(), WW.ellipsoidOffset = this.ellipsoidOffset.JNW(), WW.uw = this.uw, WW.isBlocker = this.isBlocker, WW.sideOrientation = this.sideOrientation, this._isWorldMatrixFrozen && (WW.aMW = !0), this.parent && this.parent._serializeAsParent(WW), WW.isUnIndexed = this.isUnIndexed;
        const RW = this._geometry;
        if (RW && this.Qs) {
          WW.geometryUniqueId = RW.uniqueId, WW.geometryId = RW.id, WW.Qs = [];
          for (let RW = 0; RW < this.Qs.length; RW++) {
            const MW = this.Qs[RW];
            WW.Qs.push({
              materialIndex: MW.materialIndex,
              verticesStart: MW.verticesStart,
              verticesCount: MW.verticesCount,
              indexStart: MW.indexStart,
              indexCount: MW.indexCount
            })
          }
        }
        if (this.material ? this.material.doNotSerialize || (WW.materialUniqueId = this.material.uniqueId, WW.materialId = this.material.id) : (this.material = null, WW.materialUniqueId = this._scene.defaultMaterial.uniqueId, WW.materialId = this._scene.defaultMaterial.id), this.morphTargetManager && (WW.morphTargetManagerId = this.morphTargetManager.uniqueId), this.skeleton && (WW.skeletonId = this.skeleton.id, WW.skeletonUniqueId = this.skeleton.uniqueId, WW.numBoneInfluencers = this.numBoneInfluencers), this.QRW()._getComponent(vR.d.NAME_PHYSICSENGINE)) {
          const RW = this.getPhysicsImpostor?.();
          RW && (WW.physicsMass = RW.getParam("aA"), WW.physicsFriction = RW.getParam("friction"), WW.physicsRestitution = RW.getParam("aA"), WW.physicsImpostor = RW.type)
        }
        this.metadata && (WW.metadata = this.metadata), 0 !== this.meshBlendingTag && (WW.meshBlendingTag = this.meshBlendingTag), WW.instances = [];
        for (let MW = 0; MW < this.instances.length; MW++) {
          const RW = this.instances[MW];
          if (RW.doNotSerialize) continue;
          const wW = {
            name: RW.name,
            id: RW.id,
            isEnabled: RW.isEnabled(!1),
            isVisible: RW.isVisible,
            DC: RW.DC,
            checkCollisions: RW.checkCollisions,
            position: RW.position.JNW(),
            NA: RW.NA.JNW()
          };
          if (RW.parent && RW.parent._serializeAsParent(wW), RW.rotationQuaternion ? wW.rotationQuaternion = RW.rotationQuaternion.JNW() : RW.rotation && (wW.rotation = RW.rotation.JNW()), this.QRW()._getComponent(vR.d.NAME_PHYSICSENGINE)) {
            const WW = RW.getPhysicsImpostor?.();
            WW && (wW.physicsMass = WW.getParam("aA"), wW.physicsFriction = WW.getParam("friction"), wW.physicsRestitution = WW.getParam("aA"), wW.physicsImpostor = WW.type)
          }
          RW.metadata && (wW.metadata = RW.metadata), RW.actionManager && (wW.actions = RW.actionManager.serialize(RW.name)), WW.instances.push(wW), EW.d.AppendSerializedAnimations(RW, wW), wW.WA = RW.serializeAnimationRanges()
        }
        if (this._thinInstanceDataStorage.instancesCount && this._thinInstanceDataStorage.matrixData && (WW.thinInstances = {
            instancesCount: this._thinInstanceDataStorage.instancesCount,
            matrixData: Array.from(this._thinInstanceDataStorage.matrixData),
            matrixBufferSize: this._thinInstanceDataStorage.matrixBufferSize,
            enablePicking: this.sbW
          }, this._userThinInstanceBuffersStorage)) {
          const RW = {
            data: {},
            sizes: {},
            strides: {}
          };
          for (const WW in this._userThinInstanceBuffersStorage.data) RW.data[WW] = Array.from(this._userThinInstanceBuffersStorage.data[WW]), RW.sizes[WW] = this._userThinInstanceBuffersStorage.sizes[WW], RW.strides[WW] = this._userThinInstanceBuffersStorage.strides[WW];
          WW.thinInstances.userThinInstance = RW
        }
        return EW.d.AppendSerializedAnimations(this, WW), WW.WA = this.serializeAnimationRanges(), WW.layerMask = this.layerMask, WW.alphaIndex = this.alphaIndex, WW.hasVertexAlpha = this.hasVertexAlpha, WW.overlayAlpha = this.overlayAlpha, WW.overlayColor = this.overlayColor.JNW(), WW.renderOverlay = this.renderOverlay, WW.applyFog = this.applyFog, this.actionManager && (WW.actions = this.actionManager.serialize(this.name)), WW
      }
      _syncGeometryWithMorphTargetManager() {
        if (!this.geometry) return;
        this._markSubMeshesAsAttributesDirty();
        const WW = this._internalAbstractMeshDataInfo._morphTargetManager;
        if (WW && WW.vertexCount) {
          if (WW.vertexCount !== this.getTotalVertices()) return VW.b.Error("Mesh is incompatible with morph targets. Targets and mesh must all have the same vertices count."), void(this.morphTargetManager = null);
          if (WW.isUsingTextureForTargets) return;
          for (let RW = 0; RW < WW.numInfluencers; RW++) {
            const MW = WW.getActiveTarget(RW),
              wW = MW.getPositions();
            if (!wW) return void VW.b.Error("Invalid morph target. Target must have positions.");
            this.geometry.setVerticesData(XW.j.PositionKind + RW, wW, !1, 3);
            const CW = MW.getNormals();
            CW && this.geometry.setVerticesData(XW.j.NormalKind + RW, CW, !1, 3);
            const zR = MW.getTangents();
            zR && this.geometry.setVerticesData(XW.j.TangentKind + RW, zR, !1, 3);
            const AW = MW.getUVs();
            AW && this.geometry.setVerticesData(XW.j.UVKind + "_" + RW, AW, !1, 2);
            const bR = MW.getUV2s();
            bR && this.geometry.setVerticesData(XW.j.UV2Kind + "_" + RW, bR, !1, 2);
            const yR = MW.getColors();
            yR && this.geometry.setVerticesData(XW.j.ColorKind + RW, yR, !1, 4)
          }
        } else {
          let WW = 0;
          for (; this.geometry.isVerticesDataPresent(XW.j.PositionKind + WW);) this.geometry.removeVerticesData(XW.j.PositionKind + WW), this.geometry.isVerticesDataPresent(XW.j.NormalKind + WW) && this.geometry.removeVerticesData(XW.j.NormalKind + WW), this.geometry.isVerticesDataPresent(XW.j.TangentKind + WW) && this.geometry.removeVerticesData(XW.j.TangentKind + WW), this.geometry.isVerticesDataPresent(XW.j.UVKind + "_" + WW) && this.geometry.removeVerticesData(XW.j.UVKind + "_" + WW), this.geometry.isVerticesDataPresent(XW.j.UV2Kind + "_" + WW) && this.geometry.removeVerticesData(XW.j.UV2Kind + "_" + WW), this.geometry.isVerticesDataPresent(XW.j.ColorKind + WW) && this.geometry.removeVerticesData(XW.j.ColorKind + WW), WW++
        }
      }
      static Parse(WW, RW, MW) {
        let wW, CW = !1;
        if (WW.type && "LinesMesh" === WW.type ? wW = qR._LinesMeshParser(WW, RW) : WW.type && "GroundMesh" === WW.type ? wW = qR._GroundMeshParser(WW, RW) : WW.type && "GoldbergMesh" === WW.type ? wW = qR._GoldbergMeshParser(WW, RW) : WW.type && "GreasedLineMesh" === WW.type ? wW = qR._GreasedLineMeshParser(WW, RW) : WW.type && "TrailMesh" === WW.type ? wW = qR._TrailMeshParser(WW, RW) : WW.type && "GaussianSplattingMesh" === WW.type ? (wW = WW._isCompound ? qR._GaussianSplattingCompoundMeshParser(WW, RW) : qR._GaussianSplattingMeshParser(WW, RW), CW = !0) : WW.type && "GaussianSplattingPartProxyMesh" === WW.type ? (wW = qR._GaussianSplattingPartProxyMeshParser(WW, RW), CW = !0) : wW = new qR(WW.name, RW), wW.id = WW.id, wW._waitingParsedUniqueId = WW.uniqueId, lW.d && lW.d.AddTagsTo(wW, WW.tags), wW.position = QW.q.FromArray(WW.position), void 0 !== WW.metadata && (wW.metadata = WW.metadata), void 0 !== WW.meshBlendingTag && (wW.meshBlendingTag = WW.meshBlendingTag), WW.rotationQuaternion ? wW.rotationQuaternion = QW.e.FromArray(WW.rotationQuaternion) : WW.rotation && (wW.rotation = QW.q.FromArray(WW.rotation)), wW.NA = QW.q.FromArray(WW.NA), WW.localMatrix ? wW.setPreTransformMatrix(QW.d.FromArray(WW.localMatrix)) : WW.pivotMatrix && wW.setPivotMatrix(QW.d.FromArray(WW.pivotMatrix)), wW.kMW(WW.isEnabled), wW.isVisible = WW.isVisible, wW.infiniteDistance = WW.infiniteDistance, wW.xC = !!WW.xC, wW.showBoundingBox = WW.showBoundingBox, wW.showSubMeshesBoundingBox = WW.showSubMeshesBoundingBox, void 0 !== WW.applyFog && (wW.applyFog = WW.applyFog), void 0 !== WW.pickable && (wW.DC = WW.pickable), void 0 !== WW.alphaIndex && (wW.alphaIndex = WW.alphaIndex), wW.receiveShadows = WW.receiveShadows, void 0 !== WW.billboardMode && (wW.billboardMode = WW.billboardMode), void 0 !== WW.visibility && (wW.visibility = WW.visibility), wW.checkCollisions = WW.checkCollisions, wW.uw = !!WW.uw, WW.ellipsoid && (wW.ellipsoid = QW.q.FromArray(WW.ellipsoid)), WW.ellipsoidOffset && (wW.ellipsoidOffset = QW.q.FromArray(WW.ellipsoidOffset)), null != WW.overrideMaterialSideOrientation && (wW.sideOrientation = WW.overrideMaterialSideOrientation), void 0 !== WW.sideOrientation && (wW.sideOrientation = WW.sideOrientation), void 0 !== WW.isBlocker && (wW.isBlocker = WW.isBlocker), wW._shouldGenerateFlatShading = WW.useFlatShading, WW.aMW && (wW._waitingData.aMW = WW.aMW), void 0 !== WW.parentId && (wW._waitingParentId = WW.parentId), void 0 !== WW.parentInstanceIndex && (wW._waitingParentInstanceIndex = WW.parentInstanceIndex), void 0 !== WW.actions && (wW._waitingData.actions = WW.actions), void 0 !== WW.overlayAlpha && (wW.overlayAlpha = WW.overlayAlpha), void 0 !== WW.overlayColor && (wW.overlayColor = rR.d.FromArray(WW.overlayColor)), void 0 !== WW.renderOverlay && (wW.renderOverlay = WW.renderOverlay), wW.isUnIndexed = !!WW.isUnIndexed, wW.hasVertexAlpha = WW.hasVertexAlpha, WW.delayLoadingFile ? (wW.delayLoadState = 4, wW.delayLoadingFile = MW + WW.delayLoadingFile, wW.buildBoundingInfo(QW.q.FromArray(WW.boundingBoxMinimum), QW.q.FromArray(WW.boundingBoxMaximum)), WW._binaryInfo && (wW._binaryInfo = WW._binaryInfo), wW._delayInfo = [], WW.hasUVs && wW._delayInfo.push(XW.j.UVKind), WW.hasUVs2 && wW._delayInfo.push(XW.j.UV2Kind), WW.hasUVs3 && wW._delayInfo.push(XW.j.UV3Kind), WW.hasUVs4 && wW._delayInfo.push(XW.j.UV4Kind), WW.hasUVs5 && wW._delayInfo.push(XW.j.UV5Kind), WW.hasUVs6 && wW._delayInfo.push(XW.j.UV6Kind), WW.hasColors && wW._delayInfo.push(XW.j.ColorKind), WW.hasMatricesIndices && wW._delayInfo.push(XW.j.MatricesIndicesKind), WW.hasMatricesWeights && wW._delayInfo.push(XW.j.MatricesWeightsKind), wW._delayLoadingFunction = kR.e._ImportGeometry, UW.c.ForceFullSceneLoadingForIncremental && wW._checkDelayState()) : CW || kR.e._ImportGeometry(WW, wW), WW.materialUniqueId ? wW._waitingMaterialId = WW.materialUniqueId : WW.materialId && (wW._waitingMaterialId = WW.materialId), WW.morphTargetManagerId > -1 && (wW._waitingMorphTargetManagerId = WW.morphTargetManagerId), void 0 !== WW.skeletonId && null !== WW.skeletonId && (wW.skeleton = RW.getLastSkeletonById(WW.skeletonId), wW._waitingSkeletonId = WW.skeletonId, WW.numBoneInfluencers && (wW.numBoneInfluencers = WW.numBoneInfluencers)), void 0 !== WW.skeletonUniqueId && null !== WW.skeletonUniqueId && (wW._waitingSkeletonUniqueId = WW.skeletonUniqueId), WW.animations) {
          for (let RW = 0; RW < WW.animations.length; RW++) {
            const MW = WW.animations[RW],
              CW = (0, mR.c)("BABYLON.Animation");
            CW && wW.animations.push(CW.Parse(MW))
          }
          cR.b.ParseAnimationRanges(wW, WW, RW)
        }
        if (WW.autoAnimate && RW.beginAnimation(wW, WW.autoAnimateFrom, WW.autoAnimateTo, WW.autoAnimateLoop, WW.autoAnimateSpeed || 1), WW.layerMask && !isNaN(WW.layerMask) ? wW.layerMask = Math.abs(parseInt(WW.layerMask)) : wW.layerMask = 268435455, WW.physicsImpostor && (wW.physicsImpostor = qR._PhysicsImpostorParser(RW, wW, WW)), WW.lodMeshIds && (wW._waitingData.lods = {
            ids: WW.lodMeshIds,
            distances: WW.lodDistances ? WW.lodDistances : null,
            coverages: WW.lodCoverages ? WW.lodCoverages : null
          }), WW.instances)
          for (let zR = 0; zR < WW.instances.length; zR++) {
            const MW = WW.instances[zR],
              CW = wW.createInstance(MW.name);
            if (MW.id && (CW.id = MW.id), lW.d && (MW.tags ? lW.d.AddTagsTo(CW, MW.tags) : lW.d.AddTagsTo(CW, WW.tags)), CW.position = QW.q.FromArray(MW.position), void 0 !== MW.metadata && (CW.metadata = MW.metadata), void 0 !== MW.parentId && (CW._waitingParentId = MW.parentId), void 0 !== MW.parentInstanceIndex && (CW._waitingParentInstanceIndex = MW.parentInstanceIndex), void 0 !== MW.isEnabled && null !== MW.isEnabled && CW.kMW(MW.isEnabled), void 0 !== MW.isVisible && null !== MW.isVisible && (CW.isVisible = MW.isVisible), void 0 !== MW.DC && null !== MW.DC && (CW.DC = MW.DC), MW.rotationQuaternion ? CW.rotationQuaternion = QW.e.FromArray(MW.rotationQuaternion) : MW.rotation && (CW.rotation = QW.q.FromArray(MW.rotation)), CW.NA = QW.q.FromArray(MW.NA), void 0 != MW.checkCollisions && null != MW.checkCollisions && (CW.checkCollisions = MW.checkCollisions), void 0 != MW.pickable && null != MW.pickable && (CW.DC = MW.pickable), void 0 != MW.showBoundingBox && null != MW.showBoundingBox && (CW.showBoundingBox = MW.showBoundingBox), void 0 != MW.showSubMeshesBoundingBox && null != MW.showSubMeshesBoundingBox && (CW.showSubMeshesBoundingBox = MW.showSubMeshesBoundingBox), void 0 != MW.alphaIndex && null != MW.showSubMeshesBoundingBox && (CW.alphaIndex = MW.alphaIndex), MW.physicsImpostor && (CW.physicsImpostor = qR._PhysicsImpostorParser(RW, CW, MW)), void 0 !== MW.actions && (CW._waitingData.actions = MW.actions), MW.animations) {
              for (let WW = 0; WW < MW.animations.length; WW++) {
                const RW = MW.animations[WW],
                  wW = (0, mR.c)("BABYLON.Animation");
                wW && CW.animations.push(wW.Parse(RW))
              }
              cR.b.ParseAnimationRanges(CW, MW, RW), MW.autoAnimate && RW.beginAnimation(CW, MW.autoAnimateFrom, MW.autoAnimateTo, MW.autoAnimateLoop, MW.autoAnimateSpeed || 1)
            }
          }
        if (WW.thinInstances) {
          const RW = WW.thinInstances;
          if (wW.sbW = !!RW.enablePicking, RW.matrixData ? (wW.mAW("matrix", new Float32Array(RW.matrixData), 16, !1), wW._thinInstanceDataStorage.matrixBufferSize = RW.matrixBufferSize, wW._thinInstanceDataStorage.instancesCount = RW.instancesCount) : wW._thinInstanceDataStorage.matrixBufferSize = RW.matrixBufferSize, WW.thinInstances.userThinInstance) {
            const RW = WW.thinInstances.userThinInstance;
            for (const WW in RW.data) wW.mAW(WW, new Float32Array(RW.data[WW]), RW.strides[WW], !1), wW._userThinInstanceBuffersStorage.sizes[WW] = RW.sizes[WW]
          }
        }
        return wW
      }
      setPositionsForCPUSkinning() {
        const WW = this._internalMeshDataInfo;
        if (!WW._sourcePositions) {
          const RW = this.getVerticesData(XW.j.PositionKind);
          if (!RW) return WW._sourcePositions;
          WW._sourcePositions = new Float32Array(RW), this.isVertexBufferUpdatable(XW.j.PositionKind) || this.setVerticesData(XW.j.PositionKind, RW, !0)
        }
        return WW._sourcePositions
      }
      setNormalsForCPUSkinning() {
        const WW = this._internalMeshDataInfo;
        if (!WW._sourceNormals) {
          const RW = this.getVerticesData(XW.j.NormalKind);
          if (!RW) return WW._sourceNormals;
          WW._sourceNormals = new Float32Array(RW), this.isVertexBufferUpdatable(XW.j.NormalKind) || this.setVerticesData(XW.j.NormalKind, RW, !0)
        }
        return WW._sourceNormals
      }
      applySkeleton(WW) {
        if (!this.geometry) return this;
        if (this.geometry._softwareSkinningFrameId == this.QRW().getFrameId()) return this;
        if (this.geometry._softwareSkinningFrameId = this.QRW().getFrameId(), !this.isVerticesDataPresent(XW.j.PositionKind)) return this;
        if (!this.isVerticesDataPresent(XW.j.MatricesIndicesKind)) return this;
        if (!this.isVerticesDataPresent(XW.j.MatricesWeightsKind)) return this;
        const RW = this.isVerticesDataPresent(XW.j.NormalKind),
          MW = this._internalMeshDataInfo;
        if (!MW._sourcePositions) {
          const WW = this.Qs.slice();
          this.setPositionsForCPUSkinning(), this.Qs = WW
        }
        RW && !MW._sourceNormals && this.setNormalsForCPUSkinning();
        let wW = this.getVerticesData(XW.j.PositionKind);
        if (!wW) return this;
        wW instanceof Float32Array || (wW = new Float32Array(wW));
        let CW = this.getVerticesData(XW.j.NormalKind);
        if (RW) {
          if (!CW) return this;
          CW instanceof Float32Array || (CW = new Float32Array(CW))
        }
        const zR = this.getVerticesData(XW.j.MatricesIndicesKind),
          AW = this.getVerticesData(XW.j.MatricesWeightsKind);
        if (!AW || !zR) return this;
        const bR = this.numBoneInfluencers > 4,
          yR = bR ? this.getVerticesData(XW.j.MatricesIndicesExtraKind) : null,
          NW = bR ? this.getVerticesData(XW.j.MatricesWeightsExtraKind) : null,
          eW = WW.getTransformMatrices(this),
          BW = QW.q.Zero(),
          tR = new QW.d,
          TW = new QW.d;
        let gR, iR = 0;
        for (let YW = 0; YW < wW.length; YW += 3, iR += 4) {
          let WW;
          for (gR = 0; gR < 4; gR++) WW = AW[iR + gR], WW > 0 && (QW.d.FromFloat32ArrayToRefScaled(eW, Math.floor(16 * zR[iR + gR]), WW, TW), tR.addToSelf(TW));
          if (bR)
            for (gR = 0; gR < 4; gR++) WW = NW[iR + gR], WW > 0 && (QW.d.FromFloat32ArrayToRefScaled(eW, Math.floor(16 * yR[iR + gR]), WW, TW), tR.addToSelf(TW));
          QW.q.TransformCoordinatesFromFloatsToRef(MW._sourcePositions[YW], MW._sourcePositions[YW + 1], MW._sourcePositions[YW + 2], tR, BW), BW.toArray(wW, YW), RW && (QW.q.TransformNormalFromFloatsToRef(MW._sourceNormals[YW], MW._sourceNormals[YW + 1], MW._sourceNormals[YW + 2], tR, BW), BW.toArray(CW, YW)), tR.reset()
        }
        return this.updateVerticesData(XW.j.PositionKind, wW), RW && this.updateVerticesData(XW.j.NormalKind, CW), this
      }
      static MinMax(WW) {
        let RW = null,
          MW = null;
        for (const wW of WW) {
          const WW = wW.LRW().boundingBox;
          RW && MW ? (RW.minimizeInPlace(WW.minimumWorld), MW.maximizeInPlace(WW.maximumWorld)) : (RW = WW.minimumWorld.clone(), MW = WW.maximumWorld.clone())
        }
        return RW && MW ? {
          min: RW,
          max: MW
        } : {
          min: QW.q.Zero(),
          max: QW.q.Zero()
        }
      }
      static Center(WW) {
        const RW = WW instanceof Array ? qR.MinMax(WW) : WW;
        return QW.q.Center(RW.min, RW.max)
      }
      static MergeMeshes(WW) {
        let RW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          MW = arguments.length > 2 ? arguments[2] : void 0,
          wW = arguments.length > 3 ? arguments[3] : void 0,
          CW = arguments.length > 4 ? arguments[4] : void 0,
          zR = arguments.length > 5 ? arguments[5] : void 0;
        return (0, FW.k)(qR._MergeMeshesCoroutine(WW, RW, MW, wW, CW, zR, !1))
      }
      static async MergeMeshesAsync(WW) {
        let RW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          MW = arguments.length > 2 ? arguments[2] : void 0,
          wW = arguments.length > 3 ? arguments[3] : void 0,
          CW = arguments.length > 4 ? arguments[4] : void 0,
          zR = arguments.length > 5 ? arguments[5] : void 0;
        return await (0, FW.h)(qR._MergeMeshesCoroutine(WW, RW, MW, wW, CW, zR, !0), (0, FW.c)())
      }
      static * _MergeMeshesCoroutine(WW) {
        let RW, MW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          wW = arguments.length > 2 ? arguments[2] : void 0,
          CW = arguments.length > 3 ? arguments[3] : void 0,
          zR = arguments.length > 4 ? arguments[4] : void 0,
          AW = arguments.length > 5 ? arguments[5] : void 0,
          bR = arguments.length > 6 ? arguments[6] : void 0;
        if (0 === (WW = WW.filter(Boolean)).length) return null;
        if (!wW) {
          let MW = 0;
          for (RW = 0; RW < WW.length; RW++)
            if (MW += WW[RW].getTotalVertices(), MW >= 65536) return VW.b.Warn("Cannot merge meshes because resulting mesh will have more than 65536 vertices. Please use allow32BitsIndices = true to use 32 bits indices"), null
        }
        const yR = WW[0];
        AW && (zR = !1, WW.sort(((WW, RW) => (WW.material?.uniqueId ?? -1) - (RW.material?.uniqueId ?? -1))));
        const NW = new Array,
          eW = new Array,
          BW = new Array,
          tR = WW[0].sideOrientation;
        for (RW = 0; RW < WW.length; RW++) {
          const MW = WW[RW];
          if (MW.cMW) return VW.b.Warn("Cannot merge instance meshes."), null;
          if (tR !== MW.sideOrientation) return VW.b.Warn("Cannot merge meshes with different sideOrientation values."), null;
          if (zR || AW) {
            const WW = BW.reduce(((WW, RW) => Math.max(WW, RW.start + RW.count)), 0);
            if (AW)
              if (MW.material) {
                const RW = MW.material;
                if (RW instanceof hW.e) {
                  for (let WW = 0; WW < RW.vAW.length; WW++) NW.indexOf(RW.vAW[WW]) < 0 && NW.push(RW.vAW[WW]);
                  for (let wW = 0; wW < MW.Qs.length; wW++) eW.push(NW.indexOf(RW.vAW[MW.Qs[wW].materialIndex])), BW.push({
                    start: WW + MW.Qs[wW].indexStart,
                    count: MW.Qs[wW].indexCount
                  })
                } else {
                  NW.indexOf(RW) < 0 && NW.push(RW);
                  for (let wW = 0; wW < MW.Qs.length; wW++) eW.push(NW.indexOf(RW)), BW.push({
                    start: WW + MW.Qs[wW].indexStart,
                    count: MW.Qs[wW].indexCount
                  })
                }
              } else
                for (let RW = 0; RW < MW.Qs.length; RW++) eW.push(0), BW.push({
                  start: WW + MW.Qs[RW].indexStart,
                  count: MW.Qs[RW].indexCount
                });
            else BW.push({
              start: WW,
              count: MW.getTotalIndices()
            })
          }
        }
        if (AW && BW.length > 1) {
          let WW = 0;
          for (let RW = 1; RW < BW.length; RW++) {
            const MW = BW[WW],
              wW = BW[RW];
            eW[RW] === eW[WW] && MW.start + MW.count === wW.start ? MW.count += wW.count : (WW++, BW[WW] = wW, eW[WW] = eW[RW])
          }
          BW.length = WW + 1, eW.length = WW + 1
        }
        const TW = WW => {
            const RW = WW.computeWorldMatrix(!0);
            return {
              vertexData: jR.c.ExtractFromMesh(WW, !1, !1),
              transform: RW
            }
          },
          {
            vertexData: gR,
            transform: iR
          } = TW(WW[0]);
        bR && (yield);
        const YW = new Array(WW.length - 1);
        for (let FW = 1; FW < WW.length; FW++) YW[FW - 1] = TW(WW[FW]), bR && (yield);
        const JW = gR._mergeCoroutine(iR, YW, wW, bR, !MW);
        let PW = JW.next();
        for (; !PW.done;) bR && (yield), PW = JW.next();
        const IW = PW.value;
        CW || (CW = new qR(yR.name + "_merged", yR.QRW()));
        const oW = IW._applyToCoroutine(CW, void 0, bR);
        let lW = oW.next();
        for (; !lW.done;) bR && (yield), lW = oW.next();
        if (CW.checkCollisions = yR.checkCollisions, CW.sideOrientation = yR.sideOrientation, MW)
          for (RW = 0; RW < WW.length; RW++) WW[RW].dispose();
        if (zR || AW) {
          for (CW.releaseSubMeshes(), RW = 0; RW < BW.length;) sW.e.CreateFromIndices(0, BW[RW].start, BW[RW].count, CW, void 0, !1), RW++;
          for (const WW of CW.Qs) WW.refreshBoundingInfo();
          CW.computeWorldMatrix(!0)
        }
        if (AW) {
          const WW = new hW.e(yR.name + "_merged", yR.QRW());
          WW.vAW = NW;
          for (let RW = 0; RW < CW.Qs.length; RW++) CW.Qs[RW].materialIndex = eW[RW];
          CW.material = WW
        } else CW.material = yR.material;
        return CW
      }
      XzW(WW) {
        WW._indexInSourceMeshInstanceArray = this.instances.length, this.instances.push(WW)
      }
      kAW(WW) {
        const RW = WW._indexInSourceMeshInstanceArray;
        if (-1 != RW) {
          if (RW !== this.instances.length - 1) {
            const WW = this.instances[this.instances.length - 1];
            this.instances[RW] = WW, WW._indexInSourceMeshInstanceArray = RW
          }
          WW._indexInSourceMeshInstanceArray = -1, this.instances.pop()
        }
      }
      _shouldConvertRHS() {
        return this._scene.useRightHandedSystem && this.sideOrientation === dW.e.CounterClockWiseSideOrientation
      }
      _getRenderingFillMode(WW) {
        const RW = this.QRW();
        return RW.forcePointsCloud ? dW.e.PointFillMode : RW.forceWireframe ? dW.e.WireFrameFillMode : this.overrideRenderingFillMode ?? WW
      }
      setMaterialByID(WW) {
        return this.setMaterialById(WW)
      }
      static CreateRibbon(WW, RW, MW, wW, CW, zR, AW, bR, yR) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDisc(WW, RW, MW, wW, CW, zR) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateBox(WW, RW, MW, wW, CW) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateSphere(WW, RW, MW, wW, CW, zR) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateHemisphere(WW, RW, MW, wW) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateCylinder(WW, RW, MW, wW, CW, zR, AW, bR, yR) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTorus(WW, RW, MW, wW, CW, zR, AW) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTorusKnot(WW, RW, MW, wW, CW, zR, AW, bR, yR, NW) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateLines(WW, RW, MW, wW, CW) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDashedLines(WW, RW, MW, wW, CW, zR, AW, bR) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePolygon(WW, RW, MW, wW, CW, zR, AW) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudePolygon(WW, RW, MW, wW, CW, zR, AW, bR) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudeShape(WW, RW, MW, wW, CW, zR, AW, bR, yR, NW) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudeShapeCustom(WW, RW, MW, wW, CW, zR, AW, bR, yR, NW, eW, BW) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateLathe(WW, RW, MW, wW, CW, zR, AW) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePlane(WW, RW, MW, wW, CW) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateGround(WW, RW, MW, wW, CW, zR) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTiledGround(WW, RW, MW, wW, CW, zR, AW, bR, yR) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateGroundFromHeightMap(WW, RW, MW, wW, CW, zR, AW, bR, yR, NW, eW) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTube(WW, RW, MW, wW, CW, zR, AW, bR, yR, NW) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePolyhedron(WW, RW, MW) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateIcoSphere(WW, RW, MW) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDecal(WW, RW, MW, wW, CW, zR) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateCapsule(WW, RW, MW) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtendToGoldberg(WW) {
        throw new Error("Import MeshBuilder to populate this function")
      }
    }
    qR.FRONTSIDE = jR.c.FRONTSIDE, qR.BACKSIDE = jR.c.BACKSIDE, qR.DOUBLESIDE = jR.c.DOUBLESIDE, qR.DEFAULTSIDE = jR.c.DEFAULTSIDE, qR.NO_CAP = 0, qR.CAP_START = 1, qR.CAP_END = 2, qR.CAP_ALL = 3, qR.NO_FLIP = 0, qR.FLIP_TILE = 1, qR.ROTATE_TILE = 2, qR.FLIP_ROW = 3, qR.ROTATE_ROW = 4, qR.FLIP_N_ROTATE_TILE = 5, qR.FLIP_N_ROTATE_ROW = 6, qR.CENTER = 0, qR.LEFT = 1, qR.RIGHT = 2, qR.TOP = 3, qR.BOTTOM = 4, qR.INSTANCEDMESH_SORT_TRANSPARENT = !1, qR._GroundMeshParser = (WW, RW) => {
      throw (0, xR.g)("GroundMesh")
    }, qR._GoldbergMeshParser = (WW, RW) => {
      throw (0, xR.g)("GoldbergMesh")
    }, qR._LinesMeshParser = (WW, RW) => {
      throw (0, xR.g)("LinesMesh")
    }, qR._GreasedLineMeshParser = (WW, RW) => {
      throw (0, xR.g)("GreasedLineMesh")
    }, qR._GreasedLineRibbonMeshParser = (WW, RW) => {
      throw (0, xR.g)("GreasedLineRibbonMesh")
    }, qR._TrailMeshParser = (WW, RW) => {
      throw (0, xR.g)("TrailMesh")
    }, qR._GaussianSplattingMeshParser = (WW, RW) => {
      throw (0, xR.g)("GaussianSplattingMesh")
    }, qR._GaussianSplattingPartProxyMeshParser = (WW, RW) => {
      throw (0, xR.g)("GaussianSplattingPartProxyMesh")
    }, qR._GaussianSplattingCompoundMeshParser = (WW, RW) => {
      throw (0, xR.g)("GaussianSplattingCompoundMesh")
    };
    let ZW = !1;

    function SW() {
      ZW || (ZW = !0, (0, mR.e)("BABYLON.Mesh", qR))
    }(wW = qR.prototype).uRW ?? (wW.uRW = (0, xR.f)("Mesh", "uRW")), (CW = qR.prototype).simplify ?? (CW.simplify = (0, xR.f)("Mesh", "simplify")), (zR = qR.prototype).thinInstanceAdd ?? (zR.thinInstanceAdd = (0, xR.f)("Mesh", "thinInstanceAdd")), (AW = qR.prototype).thinInstanceAddSelf ?? (AW.thinInstanceAddSelf = (0, xR.f)("Mesh", "thinInstanceAddSelf")), (bR = qR.prototype).thinInstanceRegisterAttribute ?? (bR.thinInstanceRegisterAttribute = (0, xR.f)("Mesh", "thinInstanceRegisterAttribute")), (yR = qR.prototype).thinInstanceSetMatrixAt ?? (yR.thinInstanceSetMatrixAt = (0, xR.f)("Mesh", "thinInstanceSetMatrixAt")), (NW = qR.prototype).thinInstanceSetAttributeAt ?? (NW.thinInstanceSetAttributeAt = (0, xR.f)("Mesh", "thinInstanceSetAttributeAt")), (eW = qR.prototype).mAW ?? (eW.mAW = (0, xR.f)("Mesh", "mAW")), (BW = qR.prototype).thinInstanceGetWorldMatrices ?? (BW.thinInstanceGetWorldMatrices = (0, xR.f)("Mesh", "thinInstanceGetWorldMatrices")), (tR = qR.prototype).pzW ?? (tR.pzW = (0, xR.f)("Mesh", "pzW")), (TW = qR.prototype).thinInstancePartialBufferUpdate ?? (TW.thinInstancePartialBufferUpdate = (0, xR.f)("Mesh", "thinInstancePartialBufferUpdate")), (gR = qR.prototype).thinInstanceRefreshBoundingInfo ?? (gR.thinInstanceRefreshBoundingInfo = (0, xR.f)("Mesh", "thinInstanceRefreshBoundingInfo")), (iR = qR.prototype).getEmittedParticleSystems ?? (iR.getEmittedParticleSystems = (0, xR.f)("Mesh", "getEmittedParticleSystems")), (YW = qR.prototype).getHierarchyEmittedParticleSystems ?? (YW.getHierarchyEmittedParticleSystems = (0, xR.f)("Mesh", "getHierarchyEmittedParticleSystems")), Object.getOwnPropertyDescriptor(qR.prototype, "edgesShareWithInstances") || Object.defineProperty(qR.prototype, "edgesShareWithInstances", (0, xR.e)("Mesh", "edgesShareWithInstances")), Object.getOwnPropertyDescriptor(qR.prototype, "sbW") || Object.defineProperty(qR.prototype, "sbW", (0, xR.e)("Mesh", "sbW")), Object.getOwnPropertyDescriptor(qR.prototype, "thinInstanceAllowAutomaticStaticBufferRecreation") || Object.defineProperty(qR.prototype, "thinInstanceAllowAutomaticStaticBufferRecreation", (0, xR.e)("Mesh", "thinInstanceAllowAutomaticStaticBufferRecreation")), Object.getOwnPropertyDescriptor(qR.prototype, "fzW") || Object.defineProperty(qR.prototype, "fzW", (0, xR.e)("Mesh", "fzW"))
  },
  38003: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => gR
    });
    var wW = MW(37587),
      CW = MW(35324),
      zR = MW(37722),
      AW = MW(37470),
      bR = MW(35376),
      yR = MW(36721),
      NW = MW(37593),
      eW = MW(37998),
      BW = MW(37646),
      tR = MW(37874);
    class TW {}
    let gR = (() => {
      var WW;
      let RW, MW, gR, iR, YW = [];
      return WW = class {
        constructor() {
          this.uniqueId = 0, this.metadata = {}, this._applyTo = (0, eW.f)(this._applyToCoroutine.bind(this)), this.uniqueId = WW._UniqueIdGenerator, WW._UniqueIdGenerator++
        }
        set(WW, RW) {
          switch (WW.length || yR.b.Warn(`Setting vertex data kind '${RW}' with an empty array`), RW) {
            case zR.j.PositionKind:
              this.positions = WW;
              break;
            case zR.j.NormalKind:
              this.normals = WW;
              break;
            case zR.j.TangentKind:
              this.tangents = WW;
              break;
            case zR.j.UVKind:
              this.uvs = WW;
              break;
            case zR.j.UV2Kind:
              this.uvs2 = WW;
              break;
            case zR.j.UV3Kind:
              this.uvs3 = WW;
              break;
            case zR.j.UV4Kind:
              this.uvs4 = WW;
              break;
            case zR.j.UV5Kind:
              this.uvs5 = WW;
              break;
            case zR.j.UV6Kind:
              this.uvs6 = WW;
              break;
            case zR.j.ColorKind:
              this.colors = WW;
              break;
            case zR.j.MatricesIndicesKind:
              this.matricesIndices = WW;
              break;
            case zR.j.MatricesWeightsKind:
              this.matricesWeights = WW;
              break;
            case zR.j.MatricesIndicesExtraKind:
              this.matricesIndicesExtra = WW;
              break;
            case zR.j.MatricesWeightsExtraKind:
              this.matricesWeightsExtra = WW
          }
        }
        applyToMesh(WW, RW) {
          return this._applyTo(WW, RW, !1), this
        }
        applyToGeometry(WW, RW) {
          return this._applyTo(WW, RW, !1), this
        }
        updateMesh(WW) {
          return this._update(WW), this
        }
        updateGeometry(WW) {
          return this._update(WW), this
        }* _applyToCoroutine(WW) {
          let RW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            MW = arguments.length > 2 ? arguments[2] : void 0;
          if (this.positions && (WW.setVerticesData(zR.j.PositionKind, this.positions, RW), MW && (yield)), this.normals && (WW.setVerticesData(zR.j.NormalKind, this.normals, RW), MW && (yield)), this.tangents && (WW.setVerticesData(zR.j.TangentKind, this.tangents, RW), MW && (yield)), this.uvs && (WW.setVerticesData(zR.j.UVKind, this.uvs, RW), MW && (yield)), this.uvs2 && (WW.setVerticesData(zR.j.UV2Kind, this.uvs2, RW), MW && (yield)), this.uvs3 && (WW.setVerticesData(zR.j.UV3Kind, this.uvs3, RW), MW && (yield)), this.uvs4 && (WW.setVerticesData(zR.j.UV4Kind, this.uvs4, RW), MW && (yield)), this.uvs5 && (WW.setVerticesData(zR.j.UV5Kind, this.uvs5, RW), MW && (yield)), this.uvs6 && (WW.setVerticesData(zR.j.UV6Kind, this.uvs6, RW), MW && (yield)), this.colors) {
            const wW = this.positions && this.colors.length === this.positions.length ? 3 : 4;
            WW.setVerticesData(zR.j.ColorKind, this.colors, RW, wW), this.hasVertexAlpha && void 0 !== WW.hasVertexAlpha && (WW.hasVertexAlpha = !0), MW && (yield)
          }
          if (this.matricesIndices && (WW.setVerticesData(zR.j.MatricesIndicesKind, this.matricesIndices, RW), MW && (yield)), this.matricesWeights && (WW.setVerticesData(zR.j.MatricesWeightsKind, this.matricesWeights, RW), MW && (yield)), this.matricesIndicesExtra && (WW.setVerticesData(zR.j.MatricesIndicesExtraKind, this.matricesIndicesExtra, RW), MW && (yield)), this.matricesWeightsExtra && (WW.setVerticesData(zR.j.MatricesWeightsExtraKind, this.matricesWeightsExtra, RW), MW && (yield)), this.indices ? (WW.setIndices(this.indices, null, RW), MW && (yield)) : WW.setIndices([], null), WW.Qs && this.materialInfos && this.materialInfos.length > 1) {
            const RW = WW;
            RW.Qs = [];
            for (const WW of this.materialInfos) new tR.e(WW.materialIndex, WW.verticesStart, WW.verticesCount, WW.indexStart, WW.indexCount, RW)
          }
          return this
        }
        _update(WW, RW, MW) {
          return this.positions && WW.updateVerticesData(zR.j.PositionKind, this.positions, RW, MW), this.normals && WW.updateVerticesData(zR.j.NormalKind, this.normals, RW, MW), this.tangents && WW.updateVerticesData(zR.j.TangentKind, this.tangents, RW, MW), this.uvs && WW.updateVerticesData(zR.j.UVKind, this.uvs, RW, MW), this.uvs2 && WW.updateVerticesData(zR.j.UV2Kind, this.uvs2, RW, MW), this.uvs3 && WW.updateVerticesData(zR.j.UV3Kind, this.uvs3, RW, MW), this.uvs4 && WW.updateVerticesData(zR.j.UV4Kind, this.uvs4, RW, MW), this.uvs5 && WW.updateVerticesData(zR.j.UV5Kind, this.uvs5, RW, MW), this.uvs6 && WW.updateVerticesData(zR.j.UV6Kind, this.uvs6, RW, MW), this.colors && WW.updateVerticesData(zR.j.ColorKind, this.colors, RW, MW), this.matricesIndices && WW.updateVerticesData(zR.j.MatricesIndicesKind, this.matricesIndices, RW, MW), this.matricesWeights && WW.updateVerticesData(zR.j.MatricesWeightsKind, this.matricesWeights, RW, MW), this.matricesIndicesExtra && WW.updateVerticesData(zR.j.MatricesIndicesExtraKind, this.matricesIndicesExtra, RW, MW), this.matricesWeightsExtra && WW.updateVerticesData(zR.j.MatricesWeightsExtraKind, this.matricesWeightsExtra, RW, MW), this.indices && WW.setIndices(this.indices, null), this
        }
        static _TransformVector3Coordinates(WW, RW) {
          let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            wW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : WW.length;
          const zR = CW.k.vC[0],
            AW = CW.k.vC[1];
          for (let bR = MW; bR < MW + wW; bR += 3) CW.q.FromArrayToRef(WW, bR, zR), CW.q.TransformCoordinatesToRef(zR, RW, AW), WW[bR] = AW.x, WW[bR + 1] = AW.y, WW[bR + 2] = AW.z
        }
        static _TransformVector3Normals(WW, RW) {
          let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            wW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : WW.length;
          const zR = CW.k.vC[0],
            AW = CW.k.vC[1];
          for (let bR = MW; bR < MW + wW; bR += 3) CW.q.FromArrayToRef(WW, bR, zR), CW.q.TransformNormalToRef(zR, RW, AW), WW[bR] = AW.x, WW[bR + 1] = AW.y, WW[bR + 2] = AW.z
        }
        static _TransformVector4Normals(WW, RW) {
          let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            wW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : WW.length;
          const zR = CW.k.Vector4[0],
            AW = CW.k.Vector4[1];
          for (let bR = MW; bR < MW + wW; bR += 4) CW.s.FromArrayToRef(WW, bR, zR), CW.s.TransformNormalToRef(zR, RW, AW), WW[bR] = AW.x, WW[bR + 1] = AW.y, WW[bR + 2] = AW.z, WW[bR + 3] = AW.w
        }
        static _FlipFaces(WW) {
          let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : WW.length;
          for (let wW = RW; wW < RW + MW; wW += 3) {
            const RW = WW[wW + 1];
            WW[wW + 1] = WW[wW + 2], WW[wW + 2] = RW
          }
        }
        transform(RW) {
          const MW = RW.determinant() < 0;
          return this.positions && WW._TransformVector3Coordinates(this.positions, RW), this.normals && WW._TransformVector3Normals(this.normals, RW), this.tangents && WW._TransformVector4Normals(this.tangents, RW), MW && this.indices && WW._FlipFaces(this.indices), this
        }
        splitBasedOnMaterialID() {
          if (!this.materialInfos || this.materialInfos.length < 2) return [this];
          const RW = [];
          for (const MW of this.materialInfos) {
            const wW = new WW;
            if (this.positions && (wW.positions = this.positions.slice(3 * MW.verticesStart, 3 * (MW.verticesCount + MW.verticesStart))), this.normals && (wW.normals = this.normals.slice(3 * MW.verticesStart, 3 * (MW.verticesCount + MW.verticesStart))), this.tangents && (wW.tangents = this.tangents.slice(4 * MW.verticesStart, 4 * (MW.verticesCount + MW.verticesStart))), this.colors && (wW.colors = this.colors.slice(4 * MW.verticesStart, 4 * (MW.verticesCount + MW.verticesStart))), this.uvs && (wW.uvs = this.uvs.slice(2 * MW.verticesStart, 2 * (MW.verticesCount + MW.verticesStart))), this.uvs2 && (wW.uvs2 = this.uvs2.slice(2 * MW.verticesStart, 2 * (MW.verticesCount + MW.verticesStart))), this.uvs3 && (wW.uvs3 = this.uvs3.slice(2 * MW.verticesStart, 2 * (MW.verticesCount + MW.verticesStart))), this.uvs4 && (wW.uvs4 = this.uvs4.slice(2 * MW.verticesStart, 2 * (MW.verticesCount + MW.verticesStart))), this.uvs5 && (wW.uvs5 = this.uvs5.slice(2 * MW.verticesStart, 2 * (MW.verticesCount + MW.verticesStart))), this.uvs6 && (wW.uvs6 = this.uvs6.slice(2 * MW.verticesStart, 2 * (MW.verticesCount + MW.verticesStart))), this.matricesIndices && (wW.matricesIndices = this.matricesIndices.slice(4 * MW.verticesStart, 4 * (MW.verticesCount + MW.verticesStart))), this.matricesIndicesExtra && (wW.matricesIndicesExtra = this.matricesIndicesExtra.slice(4 * MW.verticesStart, 4 * (MW.verticesCount + MW.verticesStart))), this.matricesWeights && (wW.matricesWeights = this.matricesWeights.slice(4 * MW.verticesStart, 4 * (MW.verticesCount + MW.verticesStart))), this.matricesWeightsExtra && (wW.matricesWeightsExtra = this.matricesWeightsExtra.slice(4 * MW.verticesStart, 4 * (MW.verticesCount + MW.verticesStart))), this.indices) {
              wW.indices = [];
              for (let WW = MW.indexStart; WW < MW.indexStart + MW.indexCount; WW++) wW.indices.push(this.indices[WW] - MW.verticesStart)
            }
            const CW = new TW;
            CW.indexStart = 0, CW.indexCount = wW.indices ? wW.indices.length : 0, CW.materialIndex = MW.materialIndex, CW.verticesStart = 0, CW.verticesCount = (wW.positions ? wW.positions.length : 0) / 3, wW.materialInfos = [CW], RW.push(wW)
          }
          return RW
        }
        merge(WW) {
          let RW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            MW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            wW = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            CW = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
          const zR = Array.isArray(WW) ? WW.map((WW => ({
            vertexData: WW
          }))) : [{
            vertexData: WW
          }];
          return (0, eW.k)(this._mergeCoroutine(void 0, zR, RW, !1, MW, wW, CW))
        }* _mergeCoroutine(RW, MW) {
          let wW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            CW = arguments.length > 3 ? arguments[3] : void 0,
            AW = arguments.length > 4 ? arguments[4] : void 0,
            bR = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
            yR = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
          this._validate();
          let NW = MW.map((WW => WW.vertexData)),
            eW = this;
          if (yR)
            for (const WW of NW) WW && (WW._validate(), !this.normals && WW.normals && (this.normals = new Float32Array(this.positions.length)), !this.tangents && WW.tangents && (this.tangents = new Float32Array(this.positions.length / 3 * 4)), !this.uvs && WW.uvs && (this.uvs = new Float32Array(this.positions.length / 3 * 2)), !this.uvs2 && WW.uvs2 && (this.uvs2 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs3 && WW.uvs3 && (this.uvs3 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs4 && WW.uvs4 && (this.uvs4 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs5 && WW.uvs5 && (this.uvs5 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs6 && WW.uvs6 && (this.uvs6 = new Float32Array(this.positions.length / 3 * 2)), !this.colors && WW.colors && (this.colors = new Float32Array(this.positions.length / 3 * 4), this.colors.fill(1)), !this.matricesIndices && WW.matricesIndices && (this.matricesIndices = new Float32Array(this.positions.length / 3 * 4)), !this.matricesWeights && WW.matricesWeights && (this.matricesWeights = new Float32Array(this.positions.length / 3 * 4)), !this.matricesIndicesExtra && WW.matricesIndicesExtra && (this.matricesIndicesExtra = new Float32Array(this.positions.length / 3 * 4)), !this.matricesWeightsExtra && WW.matricesWeightsExtra && (this.matricesWeightsExtra = new Float32Array(this.positions.length / 3 * 4)));
          for (const WW of NW)
            if (WW)
              if (yR) this.normals && !WW.normals && (WW.normals = new Float32Array(WW.positions.length)), this.tangents && !WW.tangents && (WW.tangents = new Float32Array(WW.positions.length / 3 * 4)), this.uvs && !WW.uvs && (WW.uvs = new Float32Array(WW.positions.length / 3 * 2)), this.uvs2 && !WW.uvs2 && (WW.uvs2 = new Float32Array(WW.positions.length / 3 * 2)), this.uvs3 && !WW.uvs3 && (WW.uvs3 = new Float32Array(WW.positions.length / 3 * 2)), this.uvs4 && !WW.uvs4 && (WW.uvs4 = new Float32Array(WW.positions.length / 3 * 2)), this.uvs5 && !WW.uvs5 && (WW.uvs5 = new Float32Array(WW.positions.length / 3 * 2)), this.uvs6 && !WW.uvs6 && (WW.uvs6 = new Float32Array(WW.positions.length / 3 * 2)), this.colors && !WW.colors && (WW.colors = new Float32Array(WW.positions.length / 3 * 4), WW.colors.fill(1)), this.matricesIndices && !WW.matricesIndices && (WW.matricesIndices = new Float32Array(WW.positions.length / 3 * 4)), this.matricesWeights && !WW.matricesWeights && (WW.matricesWeights = new Float32Array(WW.positions.length / 3 * 4)), this.matricesIndicesExtra && !WW.matricesIndicesExtra && (WW.matricesIndicesExtra = new Float32Array(WW.positions.length / 3 * 4)), this.matricesWeightsExtra && !WW.matricesWeightsExtra && (WW.matricesWeightsExtra = new Float32Array(WW.positions.length / 3 * 4));
              else if (WW._validate(), !this.normals !== !WW.normals || !this.tangents !== !WW.tangents || !this.uvs !== !WW.uvs || !this.uvs2 !== !WW.uvs2 || !this.uvs3 !== !WW.uvs3 || !this.uvs4 !== !WW.uvs4 || !this.uvs5 !== !WW.uvs5 || !this.uvs6 !== !WW.uvs6 || !this.colors !== !WW.colors || !this.matricesIndices !== !WW.matricesIndices || !this.matricesWeights !== !WW.matricesWeights || !this.matricesIndicesExtra !== !WW.matricesIndicesExtra || !this.matricesWeightsExtra !== !WW.matricesWeightsExtra) throw new Error("Cannot merge vertex data that do not have the same set of attributes");
          if (bR) {
            let WW, wW = 0,
              CW = 0;
            const zR = [];
            let AW = null;
            const bR = [];
            for (const MW of this.splitBasedOnMaterialID()) bR.push({
              vertexData: MW,
              transform: RW
            });
            for (const RW of MW)
              if (RW.vertexData)
                for (const WW of RW.vertexData.splitBasedOnMaterialID()) bR.push({
                  vertexData: WW,
                  transform: RW.transform
                });
            bR.sort(((WW, RW) => {
              const MW = WW.vertexData.materialInfos ? WW.vertexData.materialInfos[0].materialIndex : 0,
                wW = RW.vertexData.materialInfos ? RW.vertexData.materialInfos[0].materialIndex : 0;
              return MW > wW ? 1 : MW === wW ? 0 : -1
            }));
            for (const RW of bR) {
              const MW = RW.vertexData;
              if (WW = MW.materialInfos ? MW.materialInfos[0].materialIndex : 0, AW && AW.materialIndex === WW) AW.indexCount += MW.indices.length, AW.verticesCount += MW.positions.length / 3;
              else {
                const RW = new TW;
                RW.materialIndex = WW, RW.indexStart = wW, RW.indexCount = MW.indices.length, RW.verticesStart = CW, RW.verticesCount = MW.positions.length / 3, zR.push(RW), AW = RW
              }
              wW += MW.indices.length, CW += MW.positions.length / 3
            }
            const yR = bR.splice(0, 1)[0];
            eW = yR.vertexData, RW = yR.transform, NW = bR.map((WW => WW.vertexData)), MW = bR, this.materialInfos = zR
          }
          const BW = NW.reduce(((WW, RW) => WW + (RW.indices?.length ?? 0)), eW.indices?.length ?? 0);
          let tR = AW || NW.some((WW => WW.indices === eW.indices)) ? eW.indices?.slice() : eW.indices;
          if (BW > 0) {
            let zR = tR?.length ?? 0;
            if (tR || (tR = new Array(BW)), tR.length !== BW) {
              if (Array.isArray(tR)) tR.length = BW;
              else {
                const WW = wW || tR instanceof Uint32Array ? new Uint32Array(BW) : new Uint16Array(BW);
                WW.set(tR), tR = WW
              }
              RW && RW.determinant() < 0 && WW._FlipFaces(tR, 0, zR)
            }
            let AW = eW.positions ? eW.positions.length / 3 : 0;
            for (const {
                vertexData: RW,
                transform: wW
              }
              of MW)
              if (RW.indices) {
                for (let WW = 0; WW < RW.indices.length; WW++) tR[zR + WW] = RW.indices[WW] + AW;
                wW && wW.determinant() < 0 && WW._FlipFaces(tR, zR, RW.indices.length), AW += RW.positions.length / 3, zR += RW.indices.length, CW && (yield)
              }
          }
          return this.indices = tR, this.positions = WW._MergeElement(zR.j.PositionKind, eW.positions, RW, MW.map((WW => [WW.vertexData.positions, WW.transform]))), CW && (yield), eW.normals && (this.normals = WW._MergeElement(zR.j.NormalKind, eW.normals, RW, MW.map((WW => [WW.vertexData.normals, WW.transform]))), CW && (yield)), eW.tangents && (this.tangents = WW._MergeElement(zR.j.TangentKind, eW.tangents, RW, MW.map((WW => [WW.vertexData.tangents, WW.transform]))), CW && (yield)), eW.uvs && (this.uvs = WW._MergeElement(zR.j.UVKind, eW.uvs, RW, MW.map((WW => [WW.vertexData.uvs, WW.transform]))), CW && (yield)), eW.uvs2 && (this.uvs2 = WW._MergeElement(zR.j.UV2Kind, eW.uvs2, RW, MW.map((WW => [WW.vertexData.uvs2, WW.transform]))), CW && (yield)), eW.uvs3 && (this.uvs3 = WW._MergeElement(zR.j.UV3Kind, eW.uvs3, RW, MW.map((WW => [WW.vertexData.uvs3, WW.transform]))), CW && (yield)), eW.uvs4 && (this.uvs4 = WW._MergeElement(zR.j.UV4Kind, eW.uvs4, RW, MW.map((WW => [WW.vertexData.uvs4, WW.transform]))), CW && (yield)), eW.uvs5 && (this.uvs5 = WW._MergeElement(zR.j.UV5Kind, eW.uvs5, RW, MW.map((WW => [WW.vertexData.uvs5, WW.transform]))), CW && (yield)), eW.uvs6 && (this.uvs6 = WW._MergeElement(zR.j.UV6Kind, eW.uvs6, RW, MW.map((WW => [WW.vertexData.uvs6, WW.transform]))), CW && (yield)), eW.colors && (this.colors = WW._MergeElement(zR.j.ColorKind, eW.colors, RW, MW.map((WW => [WW.vertexData.colors, WW.transform]))), (void 0 !== eW.hasVertexAlpha || MW.some((WW => void 0 !== WW.vertexData.hasVertexAlpha))) && (this.hasVertexAlpha = eW.hasVertexAlpha || MW.some((WW => WW.vertexData.hasVertexAlpha))), CW && (yield)), eW.matricesIndices && (this.matricesIndices = WW._MergeElement(zR.j.MatricesIndicesKind, eW.matricesIndices, RW, MW.map((WW => [WW.vertexData.matricesIndices, WW.transform]))), CW && (yield)), eW.matricesWeights && (this.matricesWeights = WW._MergeElement(zR.j.MatricesWeightsKind, eW.matricesWeights, RW, MW.map((WW => [WW.vertexData.matricesWeights, WW.transform]))), CW && (yield)), eW.matricesIndicesExtra && (this.matricesIndicesExtra = WW._MergeElement(zR.j.MatricesIndicesExtraKind, eW.matricesIndicesExtra, RW, MW.map((WW => [WW.vertexData.matricesIndicesExtra, WW.transform]))), CW && (yield)), eW.matricesWeightsExtra && (this.matricesWeightsExtra = WW._MergeElement(zR.j.MatricesWeightsExtraKind, eW.matricesWeightsExtra, RW, MW.map((WW => [WW.vertexData.matricesWeightsExtra, WW.transform])))), this
        }
        static _MergeElement(RW, MW, wW, CW) {
          const AW = CW.filter((WW => null !== WW[0] && void 0 !== WW[0]));
          if (!MW && 0 == AW.length) return MW;
          if (!MW) return this._MergeElement(RW, AW[0][0], AW[0][1], AW.slice(1));
          const bR = AW.reduce(((WW, RW) => WW + RW[0].length), MW.length),
            yR = RW === zR.j.PositionKind ? WW._TransformVector3Coordinates : RW === zR.j.NormalKind ? WW._TransformVector3Normals : RW === zR.j.TangentKind ? WW._TransformVector4Normals : () => {};
          if (MW instanceof Float32Array) {
            const WW = new Float32Array(bR);
            WW.set(MW), wW && yR(WW, wW, 0, MW.length);
            let RW = MW.length;
            for (const [MW, wW] of AW) WW.set(MW, RW), wW && yR(WW, wW, RW, MW.length), RW += MW.length;
            return WW
          } {
            const WW = new Array(bR);
            for (let wW = 0; wW < MW.length; wW++) WW[wW] = MW[wW];
            wW && yR(WW, wW, 0, MW.length);
            let RW = MW.length;
            for (const [MW, wW] of AW) {
              for (let wW = 0; wW < MW.length; wW++) WW[RW + wW] = MW[wW];
              wW && yR(WW, wW, RW, MW.length), RW += MW.length
            }
            return WW
          }
        }
        _validate() {
          if (!this.positions) throw new BW.g("Positions are required", BW.c.MeshInvalidPositionsError);
          const WW = (WW, RW) => {
              const MW = (0, zR.h)(WW);
              if (RW.length % MW !== 0) throw new Error("The " + WW + "s array count must be a multiple of " + MW);
              return RW.length / MW
            },
            RW = WW(zR.j.PositionKind, this.positions),
            MW = (MW, wW) => {
              const CW = WW(MW, wW);
              if (CW !== RW) throw new Error("The " + MW + "s element count (" + CW + ") does not match the positions count (" + RW + ")")
            };
          this.normals && MW(zR.j.NormalKind, this.normals), this.tangents && MW(zR.j.TangentKind, this.tangents), this.uvs && MW(zR.j.UVKind, this.uvs), this.uvs2 && MW(zR.j.UV2Kind, this.uvs2), this.uvs3 && MW(zR.j.UV3Kind, this.uvs3), this.uvs4 && MW(zR.j.UV4Kind, this.uvs4), this.uvs5 && MW(zR.j.UV5Kind, this.uvs5), this.uvs6 && MW(zR.j.UV6Kind, this.uvs6), this.colors && MW(zR.j.ColorKind, this.colors), this.matricesIndices && MW(zR.j.MatricesIndicesKind, this.matricesIndices), this.matricesWeights && MW(zR.j.MatricesWeightsKind, this.matricesWeights), this.matricesIndicesExtra && MW(zR.j.MatricesIndicesExtraKind, this.matricesIndicesExtra), this.matricesWeightsExtra && MW(zR.j.MatricesWeightsExtraKind, this.matricesWeightsExtra)
        }
        clone() {
          const RW = this.serialize();
          return WW.Parse(RW)
        }
        serialize() {
          const WW = {};
          if (this.positions && (WW.positions = Array.from(this.positions)), this.normals && (WW.normals = Array.from(this.normals)), this.tangents && (WW.tangents = Array.from(this.tangents)), this.uvs && (WW.uvs = Array.from(this.uvs)), this.uvs2 && (WW.uvs2 = Array.from(this.uvs2)), this.uvs3 && (WW.uvs3 = Array.from(this.uvs3)), this.uvs4 && (WW.uvs4 = Array.from(this.uvs4)), this.uvs5 && (WW.uvs5 = Array.from(this.uvs5)), this.uvs6 && (WW.uvs6 = Array.from(this.uvs6)), this.colors && (WW.colors = Array.from(this.colors), WW.hasVertexAlpha = this.hasVertexAlpha), this.matricesIndices && (WW.matricesIndices = Array.from(this.matricesIndices), WW.matricesIndicesExpanded = !0), this.matricesWeights && (WW.matricesWeights = Array.from(this.matricesWeights)), this.matricesIndicesExtra && (WW.matricesIndicesExtra = Array.from(this.matricesIndicesExtra), WW.matricesIndicesExtraExpanded = !0), this.matricesWeightsExtra && (WW.matricesWeightsExtra = Array.from(this.matricesWeightsExtra)), WW.indices = this.indices ? Array.from(this.indices) : [], this.materialInfos) {
            WW.materialInfos = [];
            for (const RW of this.materialInfos) {
              const MW = {
                indexStart: RW.indexStart,
                indexCount: RW.indexCount,
                materialIndex: RW.materialIndex,
                verticesStart: RW.verticesStart,
                verticesCount: RW.verticesCount
              };
              WW.materialInfos.push(MW)
            }
          }
          return WW
        }
        static ExtractFromMesh(RW, MW, wW) {
          return WW._ExtractFrom(RW, MW, wW)
        }
        static ExtractFromGeometry(RW, MW, wW) {
          return WW._ExtractFrom(RW, MW, wW)
        }
        static _ExtractFrom(RW, MW, wW) {
          const CW = new WW;
          if (RW.isVerticesDataPresent(zR.j.PositionKind) && (CW.positions = RW.getVerticesData(zR.j.PositionKind, MW, wW)), RW.isVerticesDataPresent(zR.j.NormalKind) && (CW.normals = RW.getVerticesData(zR.j.NormalKind, MW, wW)), RW.isVerticesDataPresent(zR.j.TangentKind) && (CW.tangents = RW.getVerticesData(zR.j.TangentKind, MW, wW)), RW.isVerticesDataPresent(zR.j.UVKind) && (CW.uvs = RW.getVerticesData(zR.j.UVKind, MW, wW)), RW.isVerticesDataPresent(zR.j.UV2Kind) && (CW.uvs2 = RW.getVerticesData(zR.j.UV2Kind, MW, wW)), RW.isVerticesDataPresent(zR.j.UV3Kind) && (CW.uvs3 = RW.getVerticesData(zR.j.UV3Kind, MW, wW)), RW.isVerticesDataPresent(zR.j.UV4Kind) && (CW.uvs4 = RW.getVerticesData(zR.j.UV4Kind, MW, wW)), RW.isVerticesDataPresent(zR.j.UV5Kind) && (CW.uvs5 = RW.getVerticesData(zR.j.UV5Kind, MW, wW)), RW.isVerticesDataPresent(zR.j.UV6Kind) && (CW.uvs6 = RW.getVerticesData(zR.j.UV6Kind, MW, wW)), RW.isVerticesDataPresent(zR.j.ColorKind)) {
            const WW = RW.geometry || RW,
              AW = WW.getVertexBuffer(zR.j.ColorKind),
              bR = WW.getVerticesData(zR.j.ColorKind, MW, wW);
            if (3 === AW.getSize()) {
              const WW = new Float32Array(4 * bR.length / 3);
              for (let RW = 0, MW = 0; RW < bR.length; RW += 3, MW += 4) WW[MW] = bR[RW], WW[MW + 1] = bR[RW + 1], WW[MW + 2] = bR[RW + 2], WW[MW + 3] = 1;
              CW.colors = WW
            } else {
              if (4 !== AW.getSize()) throw new Error(`Unexpected number of color components: ${AW.getSize()}`);
              CW.colors = bR
            }
          }
          return RW.isVerticesDataPresent(zR.j.MatricesIndicesKind) && (CW.matricesIndices = RW.getVerticesData(zR.j.MatricesIndicesKind, MW, wW)), RW.isVerticesDataPresent(zR.j.MatricesWeightsKind) && (CW.matricesWeights = RW.getVerticesData(zR.j.MatricesWeightsKind, MW, wW)), RW.isVerticesDataPresent(zR.j.MatricesIndicesExtraKind) && (CW.matricesIndicesExtra = RW.getVerticesData(zR.j.MatricesIndicesExtraKind, MW, wW)), RW.isVerticesDataPresent(zR.j.MatricesWeightsExtraKind) && (CW.matricesWeightsExtra = RW.getVerticesData(zR.j.MatricesWeightsExtraKind, MW, wW)), CW.indices = RW.ptW(MW, wW), CW
        }
        static CreateRibbon(WW) {
          throw (0, AW.g)("ribbonBuilder")
        }
        static CreateBox(WW) {
          throw (0, AW.g)("boxBuilder")
        }
        static CreateTiledBox(WW) {
          throw (0, AW.g)("tiledBoxBuilder")
        }
        static CreateTiledPlane(WW) {
          throw (0, AW.g)("tiledPlaneBuilder")
        }
        static CreateSphere(WW) {
          throw (0, AW.g)("sphereBuilder")
        }
        static CreateCylinder(WW) {
          throw (0, AW.g)("cylinderBuilder")
        }
        static CreateTorus(WW) {
          throw (0, AW.g)("torusBuilder")
        }
        static CreateLineSystem(WW) {
          throw (0, AW.g)("linesBuilder")
        }
        static CreateDashedLines(WW) {
          throw (0, AW.g)("linesBuilder")
        }
        static CreateGround(WW) {
          throw (0, AW.g)("groundBuilder")
        }
        static CreateTiledGround(WW) {
          throw (0, AW.g)("groundBuilder")
        }
        static CreateGroundFromHeightMap(WW) {
          throw (0, AW.g)("groundBuilder")
        }
        static CreatePlane(WW) {
          throw (0, AW.g)("planeBuilder")
        }
        static CreateDisc(WW) {
          throw (0, AW.g)("discBuilder")
        }
        static CreatePolygon(WW, RW, MW, wW, CW, zR, bR) {
          throw (0, AW.g)("polygonBuilder")
        }
        static CreateIcoSphere(WW) {
          throw (0, AW.g)("icoSphereBuilder")
        }
        static CreatePolyhedron(WW) {
          throw (0, AW.g)("polyhedronBuilder")
        }
        static CreateCapsule() {
          arguments.length > 0 && void 0 !== arguments[0] || CW.q.Up();
          throw (0, AW.g)("capsuleBuilder")
        }
        static CreateTorusKnot(WW) {
          throw (0, AW.g)("torusKnotBuilder")
        }
        static ComputeNormals(WW, RW, MW, wW) {
          let zR, AW, bR, yR, NW, eW, BW, tR, TW, gR, iR, YW, JW, PW, IW, oW, lW, FW, fW, QW, rR = !1,
            cR = !1,
            XW = !1,
            jR = !1,
            kR = 1,
            aR = 0,
            sW = null;
          wW && (rR = !!wW.facetNormals, cR = !!wW.facetPositions, XW = !!wW.facetPartitioning, kR = !0 === wW.useRightHandedSystem ? -1 : 1, aR = wW.ratio || 0, jR = !!wW.depthSort, sW = wW.distanceTo, jR && void 0 === sW && (sW = CW.q.Zero()));
          let dW = 0,
            pW = 0,
            hW = 0,
            UW = 0;
          for (XW && wW && wW.bbSize && (dW = wW.subDiv.X * aR / wW.bbSize.x, pW = wW.subDiv.Y * aR / wW.bbSize.y, hW = wW.subDiv.Z * aR / wW.bbSize.z, UW = wW.subDiv.max * wW.subDiv.max, wW.facetPartitioning.length = 0), zR = 0; zR < WW.length; zR++) MW[zR] = 0;
          const EW = RW.length / 3 | 0;
          for (zR = 0; zR < EW; zR++) {
            if (YW = 3 * RW[3 * zR], JW = YW + 1, PW = YW + 2, IW = 3 * RW[3 * zR + 1], oW = IW + 1, lW = IW + 2, FW = 3 * RW[3 * zR + 2], fW = FW + 1, QW = FW + 2, AW = WW[YW] - WW[IW], bR = WW[JW] - WW[oW], yR = WW[PW] - WW[lW], NW = WW[FW] - WW[IW], eW = WW[fW] - WW[oW], BW = WW[QW] - WW[lW], tR = kR * (bR * BW - yR * eW), TW = kR * (yR * NW - AW * BW), gR = kR * (AW * eW - bR * NW), iR = Math.sqrt(tR * tR + TW * TW + gR * gR), iR = 0 === iR ? 1 : iR, tR /= iR, TW /= iR, gR /= iR, rR && wW && (wW.facetNormals[zR].x = tR, wW.facetNormals[zR].y = TW, wW.facetNormals[zR].z = gR), cR && wW && (wW.facetPositions[zR].x = (WW[YW] + WW[IW] + WW[FW]) / 3, wW.facetPositions[zR].y = (WW[JW] + WW[oW] + WW[fW]) / 3, wW.facetPositions[zR].z = (WW[PW] + WW[lW] + WW[QW]) / 3), XW && wW) {
              const RW = Math.floor((wW.facetPositions[zR].x - wW.bInfo.minimum.x * aR) * dW),
                MW = Math.floor((wW.facetPositions[zR].y - wW.bInfo.minimum.y * aR) * pW),
                CW = Math.floor((wW.facetPositions[zR].z - wW.bInfo.minimum.z * aR) * hW),
                AW = Math.floor((WW[YW] - wW.bInfo.minimum.x * aR) * dW),
                bR = Math.floor((WW[JW] - wW.bInfo.minimum.y * aR) * pW),
                yR = Math.floor((WW[PW] - wW.bInfo.minimum.z * aR) * hW),
                NW = Math.floor((WW[IW] - wW.bInfo.minimum.x * aR) * dW),
                eW = Math.floor((WW[oW] - wW.bInfo.minimum.y * aR) * pW),
                BW = Math.floor((WW[lW] - wW.bInfo.minimum.z * aR) * hW),
                tR = Math.floor((WW[FW] - wW.bInfo.minimum.x * aR) * dW),
                TW = Math.floor((WW[fW] - wW.bInfo.minimum.y * aR) * pW),
                gR = Math.floor((WW[QW] - wW.bInfo.minimum.z * aR) * hW),
                iR = AW + wW.subDiv.max * bR + UW * yR,
                rR = NW + wW.subDiv.max * eW + UW * BW,
                cR = tR + wW.subDiv.max * TW + UW * gR,
                XW = RW + wW.subDiv.max * MW + UW * CW;
              wW.facetPartitioning[XW] = wW.facetPartitioning[XW] ? wW.facetPartitioning[XW] : [], wW.facetPartitioning[iR] = wW.facetPartitioning[iR] ? wW.facetPartitioning[iR] : [], wW.facetPartitioning[rR] = wW.facetPartitioning[rR] ? wW.facetPartitioning[rR] : [], wW.facetPartitioning[cR] = wW.facetPartitioning[cR] ? wW.facetPartitioning[cR] : [], wW.facetPartitioning[iR].push(zR), rR != iR && wW.facetPartitioning[rR].push(zR), cR != rR && cR != iR && wW.facetPartitioning[cR].push(zR), XW != iR && XW != rR && XW != cR && wW.facetPartitioning[XW].push(zR)
            }
            if (jR && wW && wW.facetPositions) {
              const WW = wW.depthSortedFacets[zR];
              WW.ind = 3 * zR, WW.sqDistance = CW.q.DistanceSquared(wW.facetPositions[zR], sW)
            }
            MW[YW] += tR, MW[JW] += TW, MW[PW] += gR, MW[IW] += tR, MW[oW] += TW, MW[lW] += gR, MW[FW] += tR, MW[fW] += TW, MW[QW] += gR
          }
          for (zR = 0; zR < MW.length / 3; zR++) tR = MW[3 * zR], TW = MW[3 * zR + 1], gR = MW[3 * zR + 2], iR = Math.sqrt(tR * tR + TW * TW + gR * gR), iR = 0 === iR ? 1 : iR, tR /= iR, TW /= iR, gR /= iR, MW[3 * zR] = tR, MW[3 * zR + 1] = TW, MW[3 * zR + 2] = gR
        }
        static _ComputeSides(RW, MW, wW, zR, AW, bR, yR) {
          const NW = wW.length,
            eW = zR.length;
          let BW, tR;
          switch (RW = RW || WW.DEFAULTSIDE) {
            case WW.FRONTSIDE:
              break;
            case WW.BACKSIDE:
              for (BW = 0; BW < NW; BW += 3) {
                const WW = wW[BW];
                wW[BW] = wW[BW + 2], wW[BW + 2] = WW
              }
              for (tR = 0; tR < eW; tR++) zR[tR] = -zR[tR];
              break;
            case WW.DOUBLESIDE: {
              const WW = MW.length,
                RW = WW / 3;
              for (let wW = 0; wW < WW; wW++) MW[WW + wW] = MW[wW];
              for (BW = 0; BW < NW; BW += 3) wW[BW + NW] = wW[BW + 2] + RW, wW[BW + 1 + NW] = wW[BW + 1] + RW, wW[BW + 2 + NW] = wW[BW] + RW;
              for (tR = 0; tR < eW; tR++) zR[eW + tR] = -zR[tR];
              const TW = AW.length;
              let gR;
              for (gR = 0; gR < TW; gR++) AW[gR + TW] = AW[gR];
              for (bR = bR || new CW.s(0, 0, 1, 1), yR = yR || new CW.s(0, 0, 1, 1), gR = 0, BW = 0; BW < TW / 2; BW++) AW[gR] = bR.x + (bR.z - bR.x) * AW[gR], AW[gR + 1] = bR.y + (bR.w - bR.y) * AW[gR + 1], AW[gR + TW] = yR.x + (yR.z - yR.x) * AW[gR + TW], AW[gR + TW + 1] = yR.y + (yR.w - yR.y) * AW[gR + TW + 1], gR += 2;
              break
            }
          }
        }
        static Parse(RW) {
          const MW = new WW,
            wW = RW.positions;
          wW && MW.set(wW, zR.j.PositionKind);
          const CW = RW.normals;
          CW && MW.set(CW, zR.j.NormalKind);
          const AW = RW.tangents;
          AW && MW.set(AW, zR.j.TangentKind);
          const yR = RW.uvs;
          yR && MW.set(yR, zR.j.UVKind);
          const NW = RW.uvs2;
          NW && MW.set(NW, zR.j.UV2Kind);
          const eW = RW.uvs3;
          eW && MW.set(eW, zR.j.UV3Kind);
          const BW = RW.uvs4;
          BW && MW.set(BW, zR.j.UV4Kind);
          const tR = RW.uvs5;
          tR && MW.set(tR, zR.j.UV5Kind);
          const gR = RW.uvs6;
          gR && MW.set(gR, zR.j.UV6Kind);
          const iR = RW.colors;
          iR && (MW.set(bR.h.CheckColors4(iR, wW.length / 3), zR.j.ColorKind), void 0 !== RW.hasVertexAlpha && (MW.hasVertexAlpha = RW.hasVertexAlpha));
          const YW = RW.matricesIndices;
          YW && MW.set(YW, zR.j.MatricesIndicesKind);
          const JW = RW.matricesWeights;
          JW && MW.set(JW, zR.j.MatricesWeightsKind);
          const PW = RW.indices;
          PW && (MW.indices = PW);
          const IW = RW.materialInfos;
          if (IW) {
            MW.materialInfos = [];
            for (const WW of IW) {
              const RW = new TW;
              RW.indexCount = WW.indexCount, RW.indexStart = WW.indexStart, RW.verticesCount = WW.verticesCount, RW.verticesStart = WW.verticesStart, RW.materialIndex = WW.materialIndex, MW.materialInfos.push(RW)
            }
          }
          return MW
        }
        static ImportVertexData(RW, MW) {
          const wW = WW.Parse(RW);
          MW.setAllVerticesData(wW, RW.updatable)
        }
      }, (() => {
        const CW = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        RW = [NW.i.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], MW = [NW.i.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], gR = [NW.i.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], iR = [NW.i.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], (0, wW.e)(WW, null, RW, {
          kind: "method",
          name: "_TransformVector3Coordinates",
          static: !0,
          private: !1,
          access: {
            has: WW => "_TransformVector3Coordinates" in WW,
            get: WW => WW._TransformVector3Coordinates
          },
          metadata: CW
        }, null, YW), (0, wW.e)(WW, null, MW, {
          kind: "method",
          name: "_TransformVector3Normals",
          static: !0,
          private: !1,
          access: {
            has: WW => "_TransformVector3Normals" in WW,
            get: WW => WW._TransformVector3Normals
          },
          metadata: CW
        }, null, YW), (0, wW.e)(WW, null, gR, {
          kind: "method",
          name: "_TransformVector4Normals",
          static: !0,
          private: !1,
          access: {
            has: WW => "_TransformVector4Normals" in WW,
            get: WW => WW._TransformVector4Normals
          },
          metadata: CW
        }, null, YW), (0, wW.e)(WW, null, iR, {
          kind: "method",
          name: "_FlipFaces",
          static: !0,
          private: !1,
          access: {
            has: WW => "_FlipFaces" in WW,
            get: WW => WW._FlipFaces
          },
          metadata: CW
        }, null, YW), CW && Object.defineProperty(WW, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: CW
        })
      })(), WW.FRONTSIDE = ((0, wW.i)(WW, YW), 0), WW.BACKSIDE = 1, WW.DOUBLESIDE = 2, WW.DEFAULTSIDE = 0, WW._UniqueIdGenerator = 0, WW
    })()
  },
  38074: (WW, RW, MW) => {
    var wW = MW(35324),
      CW = MW(36721),
      zR = MW(37884),
      AW = MW(37993),
      bR = MW(37722);
    const yR = "bakedVertexAnimationSettingsInstanced";

    function NW(WW) {
      const RW = WW.bakedVertexAnimationManager?.texture?.getInternalTexture()?._bufferView;
      return RW instanceof Float32Array || RW instanceof Uint16Array
    }

    function eW(WW, RW, MW, wW) {
      MW.YzW(Number.POSITIVE_INFINITY), wW.YzW(Number.NEGATIVE_INFINITY);
      for (let CW = 0; CW < 3 * RW; CW += 3) {
        const RW = WW[CW],
          zR = WW[CW + 1],
          AW = WW[CW + 2];
        RW < MW.x && (MW.x = RW), zR < MW.y && (MW.y = zR), AW < MW.z && (MW.z = AW), RW > wW.x && (wW.x = RW), zR > wW.y && (wW.y = zR), AW > wW.z && (wW.z = AW)
      }
    }

    function BW(WW, RW, MW) {
      MW && (WW.x -= WW.x * MW.x + MW.y, WW.y -= WW.y * MW.x + MW.y, WW.z -= WW.z * MW.x + MW.y, RW.x += RW.x * MW.x + MW.y, RW.y += RW.y * MW.x + MW.y, RW.z += RW.z * MW.x + MW.y)
    }

    function tR(WW, RW, MW, CW, zR) {
      const AW = wW.k.vC[7],
        bR = wW.k.vC[8];
      for (let yR = 0; yR < 2; ++yR)
        for (let NW = 0; NW < 2; ++NW)
          for (let eW = 0; eW < 2; ++eW) AW.set(yR ? RW.x : WW.x, NW ? RW.y : WW.y, eW ? RW.z : WW.z), wW.q.TransformCoordinatesToRef(AW, MW, bR), CW.minimizeInPlace(bR), zR.maximizeInPlace(bR)
    }

    function TW(WW, RW, MW, CW, zR) {
      const AW = wW.k.vC[7];
      for (let bR = 0; bR < 3 * RW; bR += 3) wW.q.TransformCoordinatesFromFloatsToRef(WW[bR], WW[bR + 1], WW[bR + 2], MW, AW), CW.minimizeInPlace(AW), zR.maximizeInPlace(AW)
    }
    let gR = !1;
    gR || (gR = !0, AW.b.prototype.thinInstanceAdd = function(WW) {
      let RW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (!this.QRW().mC().getCaps().instancedArrays) return CW.b.Error("Thin Instances are not supported on this device as Instanced Array extension not supported"), -1;
      this._thinInstanceUpdateBufferSize("matrix", Array.isArray(WW) ? WW.length : 1);
      const MW = this._thinInstanceDataStorage.instancesCount;
      if (Array.isArray(WW))
        for (let wW = 0; wW < WW.length; ++wW) this.thinInstanceSetMatrixAt(this._thinInstanceDataStorage.instancesCount++, WW[wW], wW === WW.length - 1 && RW);
      else this.thinInstanceSetMatrixAt(this._thinInstanceDataStorage.instancesCount++, WW, RW);
      return MW
    }, AW.b.prototype.thinInstanceAddSelf = function() {
      let WW = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      return this.thinInstanceAdd(wW.d.IdentityReadOnly, WW)
    }, AW.b.prototype.thinInstanceRegisterAttribute = function(WW, RW) {
      WW === bR.j.ColorKind && (WW = bR.j.ColorInstanceKind), this.removeVerticesData(WW), this._thinInstanceInitializeUserStorage(), this._userThinInstanceBuffersStorage.strides[WW] = RW, this._userThinInstanceBuffersStorage.sizes[WW] = RW * Math.max(32, this._thinInstanceDataStorage.instancesCount), this._userThinInstanceBuffersStorage.data[WW] = new Float32Array(this._userThinInstanceBuffersStorage.sizes[WW]), this._userThinInstanceBuffersStorage.vertexBuffers[WW] = new bR.j(this.mC(), this._userThinInstanceBuffersStorage.data[WW], WW, !0, !1, RW, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[WW])
    }, AW.b.prototype.thinInstanceSetMatrixAt = function(WW, RW) {
      let MW = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      if (!this._thinInstanceDataStorage.matrixData || WW >= this._thinInstanceDataStorage.instancesCount) return !1;
      const wW = this._thinInstanceDataStorage.matrixData;
      return RW.copyToArray(wW, 16 * WW), this._thinInstanceDataStorage.worldMatrices && (this._thinInstanceDataStorage.worldMatrices[WW] = RW), MW && (this.pzW("matrix"), this.uw || this.thinInstanceRefreshBoundingInfo(!1)), !0
    }, AW.b.prototype.thinInstanceSetAttributeAt = function(WW, RW, MW) {
      let wW = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      return WW === bR.j.ColorKind && (WW = bR.j.ColorInstanceKind), !(!this._userThinInstanceBuffersStorage || !this._userThinInstanceBuffersStorage.data[WW] || RW >= this._thinInstanceDataStorage.instancesCount) && (this._thinInstanceUpdateBufferSize(WW, 0), this._userThinInstanceBuffersStorage.data[WW].set(MW, RW * this._userThinInstanceBuffersStorage.strides[WW]), wW && this.pzW(WW), !0)
    }, Object.defineProperty(AW.b.prototype, "fzW", {
      get: function() {
        return this._thinInstanceDataStorage.instancesCount
      },
      set: function(WW) {
        const RW = this._thinInstanceDataStorage.matrixData ?? this.source?._thinInstanceDataStorage.matrixData;
        WW <= (RW ? RW.length / 16 : 0) && (this._thinInstanceDataStorage.instancesCount = WW)
      },
      enumerable: !0,
      configurable: !0
    }), AW.b.prototype._thinInstanceCreateMatrixBuffer = function(WW, RW) {
      let MW = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      const wW = new bR.c(this.mC(), RW, !MW, 16, !1, !0);
      for (let CW = 0; CW < 4; CW++) this.setVerticesBuffer(wW.createVertexBuffer(WW + CW, 4 * CW, 4));
      return wW
    }, AW.b.prototype.mAW = function(WW, RW) {
      let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        wW = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      if (MW = MW || 16, "matrix" === WW) this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = null, this._thinInstanceDataStorage.matrixBufferSize = RW ? RW.length : 32 * MW, this._thinInstanceDataStorage.matrixData = RW, this._thinInstanceDataStorage.worldMatrices = null, null !== RW ? (this._thinInstanceDataStorage.instancesCount = RW.length / MW, this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", RW, wW), this.uw || this.thinInstanceRefreshBoundingInfo(!1)) : (this._thinInstanceDataStorage.instancesCount = 0, this.uw || this.refreshBoundingInfo());
      else if ("previousMatrix" === WW) this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = null, this._thinInstanceDataStorage.previousMatrixData = RW, null !== RW && (this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", RW, wW));
      else if ("splatIndex" === WW && RW) {
        this._thinInstanceInitializeUserStorage(), this._thinInstanceDataStorage.instancesCount = RW.length / MW, this._userThinInstanceBuffersStorage.data[WW] = RW, this._userThinInstanceBuffersStorage.strides[WW] = MW, this._userThinInstanceBuffersStorage.sizes[WW] = RW.length;
        const wW = new bR.c(this.mC(), RW, !0, 16, !1, !0);
        this._thinInstanceDataStorage.matrixBuffer = wW;
        for (let RW = 0; RW < 4; RW++) this.setVerticesBuffer(wW.createVertexBuffer(WW + RW, 4 * RW, 4))
      } else WW === bR.j.ColorKind && (WW = bR.j.ColorInstanceKind), null === RW ? this._userThinInstanceBuffersStorage?.data[WW] && (this.removeVerticesData(WW), delete this._userThinInstanceBuffersStorage.data[WW], delete this._userThinInstanceBuffersStorage.strides[WW], delete this._userThinInstanceBuffersStorage.sizes[WW], delete this._userThinInstanceBuffersStorage.vertexBuffers[WW]) : (this._thinInstanceInitializeUserStorage(), this._userThinInstanceBuffersStorage.data[WW] = RW, this._userThinInstanceBuffersStorage.strides[WW] = MW, this._userThinInstanceBuffersStorage.sizes[WW] = RW.length, this._userThinInstanceBuffersStorage.vertexBuffers[WW] = new bR.j(this.mC(), RW, WW, !wW, !1, MW, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[WW]))
    }, AW.b.prototype.pzW = function(WW) {
      "matrix" === WW ? (this.thinInstanceAllowAutomaticStaticBufferRecreation && this._thinInstanceDataStorage.matrixBuffer && !this._thinInstanceDataStorage.matrixBuffer.isUpdatable() && this._thinInstanceRecreateBuffer(WW), this._thinInstanceDataStorage.matrixBuffer?.updateDirectly(this._thinInstanceDataStorage.matrixData, 0, this._thinInstanceDataStorage.instancesCount)) : "previousMatrix" === WW ? (this.thinInstanceAllowAutomaticStaticBufferRecreation && this._thinInstanceDataStorage.previousMatrixBuffer && !this._thinInstanceDataStorage.previousMatrixBuffer.isUpdatable() && this._thinInstanceRecreateBuffer(WW), this._thinInstanceDataStorage.previousMatrixBuffer?.updateDirectly(this._thinInstanceDataStorage.previousMatrixData, 0, this._thinInstanceDataStorage.instancesCount)) : "splatIndex" === WW ? this._thinInstanceDataStorage.matrixBuffer?.updateDirectly(this._userThinInstanceBuffersStorage.data[WW], 0, this._thinInstanceDataStorage.instancesCount) : (WW === bR.j.ColorKind && (WW = bR.j.ColorInstanceKind), this._userThinInstanceBuffersStorage?.vertexBuffers[WW] && (this.thinInstanceAllowAutomaticStaticBufferRecreation && !this._userThinInstanceBuffersStorage.vertexBuffers[WW].isUpdatable() && this._thinInstanceRecreateBuffer(WW), this._userThinInstanceBuffersStorage.vertexBuffers[WW].updateDirectly(this._userThinInstanceBuffersStorage.data[WW], 0)))
    }, AW.b.prototype.thinInstancePartialBufferUpdate = function(WW, RW, MW) {
      if ("matrix" === WW) this._thinInstanceDataStorage.matrixBuffer && ("number" === typeof RW ? this._thinInstanceDataStorage.matrixBuffer.updateDirectly(new Float32Array(this._thinInstanceDataStorage.matrixData.buffer, this._thinInstanceDataStorage.matrixData.byteOffset + 16 * MW * Float32Array.BYTES_PER_ELEMENT, 16 * RW), 16 * MW) : this._thinInstanceDataStorage.matrixBuffer.updateDirectly(RW, MW));
      else if (WW === bR.j.ColorKind && (WW = bR.j.ColorInstanceKind), this._userThinInstanceBuffersStorage?.vertexBuffers[WW]) {
        const wW = this._userThinInstanceBuffersStorage.vertexBuffers[WW];
        if ("number" === typeof RW) {
          const wW = new Float32Array(this._userThinInstanceBuffersStorage.data[WW].buffer, this._userThinInstanceBuffersStorage.data[WW].byteOffset + MW * this._userThinInstanceBuffersStorage.strides[WW] * Float32Array.BYTES_PER_ELEMENT, RW * this._userThinInstanceBuffersStorage.strides[WW]);
          this._userThinInstanceBuffersStorage.vertexBuffers[WW].updateDirectly(wW, MW * this._userThinInstanceBuffersStorage.strides[WW])
        } else wW.updateDirectly(RW, MW)
      }
    }, AW.b.prototype.thinInstanceGetWorldMatrices = function() {
      if (!this._thinInstanceDataStorage.matrixData || !this._thinInstanceDataStorage.matrixBuffer) return [];
      const WW = this._thinInstanceDataStorage.matrixData;
      if (!this._thinInstanceDataStorage.worldMatrices) {
        this._thinInstanceDataStorage.worldMatrices = [];
        for (let RW = 0; RW < this._thinInstanceDataStorage.instancesCount; ++RW) this._thinInstanceDataStorage.worldMatrices[RW] = wW.d.FromArray(WW, 16 * RW)
      }
      return this._thinInstanceDataStorage.worldMatrices
    }, AW.b.prototype.thinInstanceRefreshBoundingInfo = function() {
      let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        RW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        MW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        CW = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!this._thinInstanceDataStorage.matrixData || !this._thinInstanceDataStorage.matrixBuffer) return;
      const AW = this._thinInstanceDataStorage.boundingVectors;
      if (WW || !this.rawBoundingInfo) {
        if (AW.length = 0, CW && function(WW, RW, MW) {
            const CW = WW._userThinInstanceBuffersStorage,
              AW = CW?.data[yR],
              gR = CW?.strides[yR];
            if (!AW || !gR || gR < 4 || !NW(WW)) return !1;
            const iR = WW._thinInstanceDataStorage.matrixData;
            if (!iR) return !1;
            const YW = {},
              JW = wW.k.Vector4[0],
              PW = wW.k.vC[1],
              IW = wW.k.vC[2],
              oW = wW.k.vC[3],
              lW = wW.k.vC[4],
              FW = wW.k.vC[5],
              fW = wW.k.vC[6],
              QW = wW.k.Matrix[2],
              rR = WW.geometry ? WW.geometry.boundingBias : null,
              cR = WW.getTotalVertices();
            PW.YzW(Number.POSITIVE_INFINITY), IW.YzW(Number.NEGATIVE_INFINITY), oW.YzW(Number.POSITIVE_INFINITY), lW.YzW(Number.NEGATIVE_INFINITY);
            for (let zR = 0; zR < WW._thinInstanceDataStorage.instancesCount; ++zR) {
              const RW = zR * gR;
              JW.set(AW[RW], AW[RW + 1], AW[RW + 2], AW[RW + 3]);
              const CW = WW._getData({
                applyMorph: MW,
                applyBakedVertexAnimation: !0,
                bakedVertexAnimationSettings: JW,
                updatePositionsArray: !1,
                cache: YW
              }, null, bR.j.PositionKind);
              if (!CW) return !1;
              eW(CW, cR, FW, fW), BW(FW, fW, rR), PW.minimizeInPlace(FW), IW.maximizeInPlace(fW), wW.d.FromArrayToRef(iR, 16 * zR, QW), rR ? tR(FW, fW, QW, oW, lW) : TW(CW, cR, QW, oW, lW)
            }
            return !(!isFinite(PW.x) || !isFinite(oW.x)) && (WW.LRW().reConstruct(oW, lW), WW.rawBoundingInfo = new zR.e(PW, IW), function(WW, RW) {
              WW.length = 0;
              for (let MW = 0; MW < RW.boundingBox.vectors.length; ++MW) WW.push(RW.boundingBox.vectors[MW].clone())
            }(RW, WW.rawBoundingInfo), WW._updateBoundingInfo(), !0)
          }(this, AW, MW)) return;
        CW && this.bakedVertexAnimationManager?.isEnabled && NW(this) ? this.refreshBoundingInfo({
          applySkeleton: RW,
          applyMorph: MW,
          applyBakedVertexAnimation: !0,
          updatePositionsArray: !1
        }) : this.refreshBoundingInfo(RW, MW);
        const WW = this.LRW();
        this.rawBoundingInfo = new zR.e(WW.minimum, WW.maximum)
      }
      const gR = this.LRW(),
        iR = this._thinInstanceDataStorage.matrixData;
      if (0 === AW.length)
        for (let wW = 0; wW < gR.boundingBox.vectors.length; ++wW) AW.push(gR.boundingBox.vectors[wW].clone());
      wW.k.vC[0].YzW(Number.POSITIVE_INFINITY), wW.k.vC[1].YzW(Number.NEGATIVE_INFINITY);
      for (let zR = 0; zR < this._thinInstanceDataStorage.instancesCount; ++zR) {
        wW.d.FromArrayToRef(iR, 16 * zR, wW.k.Matrix[0]);
        for (let WW = 0; WW < AW.length; ++WW) wW.q.TransformCoordinatesToRef(AW[WW], wW.k.Matrix[0], wW.k.vC[2]), wW.k.vC[0].minimizeInPlace(wW.k.vC[2]), wW.k.vC[1].maximizeInPlace(wW.k.vC[2])
      }
      gR.reConstruct(wW.k.vC[0], wW.k.vC[1]), this._updateBoundingInfo()
    }, AW.b.prototype._thinInstanceRecreateBuffer = function(WW) {
      let RW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      "matrix" === WW ? (this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", this._thinInstanceDataStorage.matrixData, RW)) : "previousMatrix" === WW ? this._scene.needsPreviousWorldMatrices && (this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", this._thinInstanceDataStorage.previousMatrixData ?? this._thinInstanceDataStorage.matrixData, RW)) : (WW === bR.j.ColorKind && (WW = bR.j.ColorInstanceKind), this._userThinInstanceBuffersStorage.vertexBuffers[WW]?.dispose(), this._userThinInstanceBuffersStorage.vertexBuffers[WW] = new bR.j(this.mC(), this._userThinInstanceBuffersStorage.data[WW], WW, !RW, !1, this._userThinInstanceBuffersStorage.strides[WW], !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[WW]))
    }, AW.b.prototype._thinInstanceUpdateBufferSize = function(WW) {
      let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      WW === bR.j.ColorKind && (WW = bR.j.ColorInstanceKind);
      const MW = "matrix" === WW;
      if (!MW && (!this._userThinInstanceBuffersStorage || !this._userThinInstanceBuffersStorage.strides[WW])) return;
      const wW = MW ? 16 : this._userThinInstanceBuffersStorage.strides[WW],
        CW = MW ? this._thinInstanceDataStorage.matrixBufferSize : this._userThinInstanceBuffersStorage.sizes[WW];
      let zR = MW ? this._thinInstanceDataStorage.matrixData : this._userThinInstanceBuffersStorage.data[WW];
      const AW = (this._thinInstanceDataStorage.instancesCount + RW) * wW;
      let yR = CW;
      for (; yR < AW;) yR *= 2;
      if (!zR || CW != yR) {
        if (zR) {
          const WW = new Float32Array(yR);
          WW.set(zR, 0), zR = WW
        } else zR = new Float32Array(yR);
        MW ? (this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", zR, !1), this._thinInstanceDataStorage.matrixData = zR, this._thinInstanceDataStorage.matrixBufferSize = yR, this._scene.needsPreviousWorldMatrices && !this._thinInstanceDataStorage.previousMatrixData && (this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", zR, !1))) : (this._userThinInstanceBuffersStorage.vertexBuffers[WW]?.dispose(), this._userThinInstanceBuffersStorage.data[WW] = zR, this._userThinInstanceBuffersStorage.sizes[WW] = yR, this._userThinInstanceBuffersStorage.vertexBuffers[WW] = new bR.j(this.mC(), zR, WW, !0, !1, wW, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[WW]))
      }
    }, AW.b.prototype._thinInstanceInitializeUserStorage = function() {
      this._userThinInstanceBuffersStorage || (this._userThinInstanceBuffersStorage = {
        data: {},
        sizes: {},
        vertexBuffers: {},
        strides: {}
      })
    }, AW.b.prototype._disposeThinInstanceSpecificData = function() {
      this._thinInstanceDataStorage?.matrixBuffer && (this._thinInstanceDataStorage.matrixBuffer.dispose(), this._thinInstanceDataStorage.matrixBuffer = null), this._thinInstanceDataStorage?.previousMatrixBuffer && (this._thinInstanceDataStorage.previousMatrixBuffer.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = null)
    })
  },
  38032: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => PW,
      f: () => iR
    });
    var wW, CW, zR, AW, bR = MW(37587),
      yR = MW(37593),
      NW = MW(37615),
      eW = MW(35346),
      BW = MW(35324),
      tR = MW(37800),
      TW = MW(35361),
      gR = MW(37470);
    let iR = (() => {
      var WW;
      let RW, MW, wW, CW, zR, AW, TW, gR, iR, YW = tR.b,
        JW = [],
        PW = [],
        IW = [],
        oW = [],
        lW = [],
        FW = [],
        fW = [],
        QW = [],
        rR = [],
        cR = [],
        XW = [],
        jR = [],
        kR = [],
        aR = [],
        sW = [],
        dW = [],
        pW = [],
        hW = [];
      return WW = class extends YW {
        get billboardMode() {
          return this._billboardMode
        }
        set billboardMode(RW) {
          this._billboardMode !== RW && (this._billboardMode = RW, this._cache.useBillboardPosition = 0 !== (this._billboardMode & WW.BILLBOARDMODE_USE_POSITION))
        }
        get infiniteDistance() {
          return this._infiniteDistance
        }
        set infiniteDistance(WW) {
          this._infiniteDistance !== WW && (this._infiniteDistance = WW)
        }
        constructor(RW) {
          let MW = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          super(RW, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, !1), this._forward = new BW.q(0, 0, 1), this._up = new BW.q(0, 1, 0), this._right = new BW.q(1, 0, 0), this._position = (0, bR.i)(this, JW, BW.q.Zero()), this._rotation = ((0, bR.i)(this, PW), (0, bR.i)(this, IW, BW.q.Zero())), this._rotationQuaternion = ((0, bR.i)(this, oW), (0, bR.i)(this, lW, null)), this._scaling = ((0, bR.i)(this, FW), (0, bR.i)(this, fW, BW.q.One())), this._transformToBoneReferal = ((0, bR.i)(this, QW), null), this._isAbsoluteSynced = !1, this._billboardMode = (0, bR.i)(this, rR, WW.BILLBOARDMODE_NONE), this.scalingDeterminant = ((0, bR.i)(this, cR), (0, bR.i)(this, XW, 1)), this._infiniteDistance = ((0, bR.i)(this, jR), (0, bR.i)(this, kR, !1)), this.ignoreNonUniformScaling = ((0, bR.i)(this, aR), (0, bR.i)(this, sW, !1)), this.reIntegrateRotationIntoRotationQuaternion = ((0, bR.i)(this, dW), (0, bR.i)(this, pW, !1)), this._poseMatrix = ((0, bR.i)(this, hW), null), this._localMatrix = BW.d.Zero(), this._usePivotMatrix = !1, this._absolutePosition = BW.q.Zero(), this._absoluteScaling = BW.q.Zero(), this._absoluteRotationQuaternion = BW.e.Identity(), this._pivotMatrix = BW.d.Identity(), this._postMultiplyPivotMatrix = !1, this._isWorldMatrixFrozen = !1, this._indexInSceneTransformNodesArray = -1, this.onAfterWorldMatrixUpdateObservable = new eW.c, this._nonUniformScaling = !1, MW && this.QRW().addTransformNode(this)
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
        get NA() {
          return this._scaling
        }
        set NA(WW) {
          this._scaling = WW, this._markAsDirtyInternal()
        }
        get rotationQuaternion() {
          return this._rotationQuaternion
        }
        set rotationQuaternion(WW) {
          this._rotationQuaternion = WW, WW && this._rotation.YzW(0), this._markAsDirtyInternal()
        }
        _markAsDirtyInternal() {
          this._isDirty || (this._isDirty = !0, this.customMarkAsDirty && this.customMarkAsDirty())
        }
        get forward() {
          return BW.q.TransformNormalFromFloatsToRef(0, 0, this.QRW().useRightHandedSystem ? -1 : 1, this.getWorldMatrix(), this._forward), this._forward.normalize()
        }
        get up() {
          return BW.q.TransformNormalFromFloatsToRef(0, 1, 0, this.getWorldMatrix(), this._up), this._up.normalize()
        }
        get right() {
          return BW.q.TransformNormalFromFloatsToRef(this.QRW().useRightHandedSystem ? -1 : 1, 0, 0, this.getWorldMatrix(), this._right), this._right.normalize()
        }
        updatePoseMatrix(WW) {
          return this._poseMatrix ? (this._poseMatrix.hyW(WW), this) : (this._poseMatrix = WW.clone(), this)
        }
        getPoseMatrix() {
          return this._poseMatrix || (this._poseMatrix = BW.d.Identity()), this._poseMatrix
        }
        _isSynchronized() {
          const RW = this._cache;
          return this._billboardMode === RW.billboardMode && this._billboardMode === WW.BILLBOARDMODE_NONE && (!RW.pivotMatrixUpdated && (!this._infiniteDistance && (!this._position._isDirty && (!this._scaling._isDirty && !(this._rotationQuaternion && this._rotationQuaternion._isDirty || this._rotation._isDirty)))))
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
          let RW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          return this._pivotMatrix.hyW(WW), this._usePivotMatrix = !this._pivotMatrix.isIdentity(), this._cache.pivotMatrixUpdated = !0, this._postMultiplyPivotMatrix = RW, this._postMultiplyPivotMatrix && (this._pivotMatrixInverse ? this._pivotMatrix.invertToRef(this._pivotMatrixInverse) : this._pivotMatrixInverse = BW.d.Invert(this._pivotMatrix)), this
        }
        getPivotMatrix() {
          return this._pivotMatrix
        }
        instantiateHierarchy() {
          let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            RW = arguments.length > 1 ? arguments[1] : void 0,
            MW = arguments.length > 2 ? arguments[2] : void 0;
          const wW = this.clone("Clone of " + (this.name || this.id), WW || this.parent, !0);
          wW && MW && MW(this, wW);
          for (const CW of this.getChildTransformNodes(!0)) CW.instantiateHierarchy(wW, RW, MW);
          return wW
        }
        aMW() {
          let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return WW ? arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (this._rotation.YzW(0), this._rotationQuaternion = this._rotationQuaternion || BW.e.Identity(), WW.decompose(this._scaling, this._rotationQuaternion, this._position), this.computeWorldMatrix(!0)) : (this._worldMatrix = WW, this._absolutePosition.nzW(this._worldMatrix.m[12], this._worldMatrix.m[13], this._worldMatrix.m[14]), this._afterComputeWorldMatrix()) : (this._isWorldMatrixFrozen = !1, this.computeWorldMatrix(!0)), this._isDirty = !1, this._isWorldMatrixFrozen = !0, this
        }
        unfreezeWorldMatrix() {
          return this._isWorldMatrixFrozen = !1, this.computeWorldMatrix(!0), this
        }
        get xTW() {
          return this._isWorldMatrixFrozen
        }
        getAbsolutePosition() {
          return this.computeWorldMatrix(), this._absolutePosition
        }
        setAbsolutePosition(WW) {
          if (!WW) return this;
          let RW, MW, wW;
          if (void 0 === WW.x) {
            if (arguments.length < 3) return this;
            RW = arguments[0], MW = arguments[1], wW = arguments[2]
          } else RW = WW.x, MW = WW.y, wW = WW.z;
          if (this.parent) {
            const WW = BW.k.Matrix[0];
            this.parent.getWorldMatrix().invertToRef(WW), BW.q.TransformCoordinatesFromFloatsToRef(RW, MW, wW, WW, this.position)
          } else this.position.x = RW, this.position.y = MW, this.position.z = wW;
          return this._absolutePosition.hyW(WW), this
        }
        setPositionWithLocalVector(WW) {
          return this.computeWorldMatrix(), this.position = BW.q.TransformNormal(WW, this._localMatrix), this
        }
        getPositionExpressedInLocalSpace() {
          this.computeWorldMatrix();
          const WW = BW.k.Matrix[0];
          return this._localMatrix.invertToRef(WW), BW.q.TransformNormal(this.position, WW)
        }
        locallyTranslate(WW) {
          return this.computeWorldMatrix(!0), this.position = BW.q.TransformCoordinates(WW, this._localMatrix), this
        }
        lookAt(RW) {
          let MW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            wW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            CW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
            zR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
          const AW = WW._LookAtVectorCache,
            bR = 0 === zR ? this.position : this.getAbsolutePosition();
          if (RW.subtractToRef(bR, AW), this.setDirection(AW, MW, wW, CW), 1 === zR && this.parent)
            if (this.rotationQuaternion) {
              const WW = BW.k.Matrix[0];
              this.rotationQuaternion.toRotationMatrix(WW);
              const RW = BW.k.Matrix[1];
              this.parent.getWorldMatrix().getRotationMatrixToRef(RW), RW.invert(), WW.multiplyToRef(RW, WW), this.rotationQuaternion.fromRotationMatrix(WW)
            } else {
              const WW = BW.k.Quaternion[0];
              BW.e.FromEulerVectorToRef(this.rotation, WW);
              const RW = BW.k.Matrix[0];
              WW.toRotationMatrix(RW);
              const MW = BW.k.Matrix[1];
              this.parent.getWorldMatrix().getRotationMatrixToRef(MW), MW.invert(), RW.multiplyToRef(MW, RW), WW.fromRotationMatrix(RW), WW.toEulerAnglesToRef(this.rotation)
            } return this
        }
        qCW(WW) {
          const RW = BW.q.Zero();
          return this.getDirectionToRef(WW, RW), RW
        }
        getDirectionToRef(WW, RW) {
          return BW.q.TransformNormalToRef(WW, this.getWorldMatrix(), RW), this
        }
        setDirection(WW) {
          let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            wW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
          const CW = -Math.atan2(WW.z, WW.x) + Math.PI / 2,
            zR = Math.sqrt(WW.x * WW.x + WW.z * WW.z),
            AW = -Math.atan2(WW.y, zR);
          return this.rotationQuaternion ? BW.e.RotationYawPitchRollToRef(CW + RW, AW + MW, wW, this.rotationQuaternion) : (this.rotation.x = AW + MW, this.rotation.y = CW + RW, this.rotation.z = wW), this
        }
        setPivotPoint(WW) {
          let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          0 == this.QRW().getRenderId() && this.computeWorldMatrix(!0);
          const MW = this.getWorldMatrix();
          if (1 == RW) {
            const RW = BW.k.Matrix[0];
            MW.invertToRef(RW), WW = BW.q.TransformCoordinates(WW, RW)
          }
          return this.setPivotMatrix(BW.d.Translation(-WW.x, -WW.y, -WW.z), !0)
        }
        getPivotPoint() {
          const WW = BW.q.Zero();
          return this.getPivotPointToRef(WW), WW
        }
        getPivotPointToRef(WW) {
          return WW.x = -this._pivotMatrix.m[12], WW.y = -this._pivotMatrix.m[13], WW.z = -this._pivotMatrix.m[14], this
        }
        getAbsolutePivotPoint() {
          const WW = BW.q.Zero();
          return this.getAbsolutePivotPointToRef(WW), WW
        }
        getAbsolutePivotPointToRef(WW) {
          return this.getPivotPointToRef(WW), BW.q.TransformCoordinatesToRef(WW, this.getWorldMatrix(), WW), this
        }
        KbW(WW) {
          if (this._isDirty) return this;
          if (this._children)
            for (const RW of this._children) RW.KbW(WW);
          return super.KbW(WW)
        }
        setParent(RW) {
          let MW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            wW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          if (!RW && !this.parent) return this;
          const CW = BW.k.Quaternion[0],
            zR = BW.k.vC[0],
            AW = BW.k.vC[1],
            bR = BW.k.Matrix[1];
          BW.d.IdentityToRef(bR);
          const yR = BW.k.Matrix[0];
          this.computeWorldMatrix(!0);
          let NW = this.rotationQuaternion;
          return NW || (NW = WW._TmpRotation, BW.e.RotationYawPitchRollToRef(this._rotation.y, this._rotation.x, this._rotation.z, NW)), BW.d.ComposeToRef(this.NA, NW, this.position, yR), this.parent && yR.multiplyToRef(this.parent.computeWorldMatrix(!0), yR), RW && (RW.computeWorldMatrix(!0).invertToRef(bR), yR.multiplyToRef(bR, yR)), yR.decompose(AW, CW, zR, MW ? this : void 0), this.rotationQuaternion ? this.rotationQuaternion.hyW(CW) : CW.toEulerAnglesToRef(this.rotation), this.NA.hyW(AW), this.position.hyW(zR), this.parent = RW, wW && this.setPivotMatrix(BW.d.Identity()), this
        }
        addChild(WW) {
          let RW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return WW.setParent(this, RW), this
        }
        removeChild(WW) {
          let RW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return WW.parent !== this || WW.setParent(null, RW), this
        }
        get nonUniformScaling() {
          return this._nonUniformScaling
        }
        _updateNonUniformScalingState(WW) {
          return this._nonUniformScaling !== WW && (this._nonUniformScaling = WW, !0)
        }
        attachToBone(WW, RW) {
          return this._currentParentWhenAttachingToBone = this.parent, this._transformToBoneReferal = RW, this.parent = WW, WW.getSkeleton().prepare(!0), WW.getFinalMatrix().determinant() < 0 && (this.scalingDeterminant *= -1), this
        }
        detachFromBone() {
          let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          return this.parent ? (this.parent.getWorldMatrix().determinant() < 0 && (this.scalingDeterminant *= -1), this._transformToBoneReferal = null, this.parent = WW ? this._currentParentWhenAttachingToBone : null, this) : (WW && (this.parent = this._currentParentWhenAttachingToBone), this)
        }
        rotate(RW, MW, wW) {
          let CW;
          if (RW.normalize(), this.rotationQuaternion || (this.rotationQuaternion = this.rotation.toQuaternion(), this.rotation.YzW(0)), wW && 0 !== wW) {
            if (this.parent) {
              const WW = this.parent.getWorldMatrix(),
                wW = BW.k.Matrix[0];
              WW.invertToRef(wW), RW = BW.q.TransformNormal(RW, wW), WW.determinant() < 0 && (MW *= -1)
            }
            CW = BW.e.RotationAxisToRef(RW, MW, WW._RotationAxisCache), CW.multiplyToRef(this.rotationQuaternion, this.rotationQuaternion)
          } else CW = BW.e.RotationAxisToRef(RW, MW, WW._RotationAxisCache), this.rotationQuaternion.multiplyToRef(CW, this.rotationQuaternion);
          return this
        }
        rotateAround(WW, RW, MW) {
          RW.normalize(), this.rotationQuaternion || (this.rotationQuaternion = BW.e.RotationYawPitchRoll(this.rotation.y, this.rotation.x, this.rotation.z), this.rotation.YzW(0));
          const wW = BW.k.vC[0],
            CW = BW.k.vC[1],
            zR = BW.k.vC[2],
            AW = BW.k.Quaternion[0],
            bR = BW.k.Matrix[0],
            yR = BW.k.Matrix[1],
            NW = BW.k.Matrix[2],
            eW = BW.k.Matrix[3];
          return WW.subtractToRef(this.position, wW), BW.d.TranslationToRef(wW.x, wW.y, wW.z, bR), BW.d.TranslationToRef(-wW.x, -wW.y, -wW.z, yR), BW.d.RotationAxisToRef(RW, MW, NW), yR.multiplyToRef(NW, eW), eW.multiplyToRef(bR, eW), eW.decompose(CW, AW, zR), this.position.addInPlace(zR), AW.multiplyToRef(this.rotationQuaternion, this.rotationQuaternion), this
        }
        translate(WW, RW, MW) {
          const wW = WW.scale(RW);
          if (MW && 0 !== MW) this.setAbsolutePosition(this.getAbsolutePosition().add(wW));
          else {
            const WW = this.getPositionExpressedInLocalSpace().add(wW);
            this.setPositionWithLocalVector(WW)
          }
          return this
        }
        addRotation(WW, RW, MW) {
          let wW;
          this.rotationQuaternion ? wW = this.rotationQuaternion : (wW = BW.k.Quaternion[1], BW.e.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, this.rotation.z, wW));
          const CW = BW.k.Quaternion[0];
          return BW.e.RotationYawPitchRollToRef(RW, WW, MW, CW), wW.multiplyInPlace(CW), this.rotationQuaternion || wW.toEulerAnglesToRef(this.rotation), this
        }
        _getEffectiveParent() {
          return this.parent
        }
        isWorldMatrixCameraDependent() {
          return this._infiniteDistance && !this.parent || this._billboardMode !== WW.BILLBOARDMODE_NONE
        }
        computeWorldMatrix() {
          let RW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            MW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          if (this._isWorldMatrixFrozen && !this._isDirty) return this._worldMatrix;
          const wW = this.QRW().getRenderId();
          if (!this._isDirty && !RW && (this._currentRenderId === wW || this.isSynchronized())) return this._currentRenderId = wW, this._worldMatrix;
          MW = MW || this.QRW().activeCamera, this._updateCache();
          const CW = this._cache;
          CW.pivotMatrixUpdated = !1, CW.billboardMode = this.billboardMode, CW.infiniteDistance = this.infiniteDistance, CW.parent = this._parentNode, this._currentRenderId = wW, this._childUpdateId += 1, this._isDirty = !1, this._position._isDirty = !1, this._rotation._isDirty = !1, this._scaling._isDirty = !1;
          const zR = this._getEffectiveParent(),
            AW = WW._TmpScaling;
          let bR, yR = this._position;
          if (this._infiniteDistance && !this.parent && MW) {
            const RW = MW.getWorldMatrix().m;
            yR = WW._TmpTranslation, yR.nzW(this._position.x + RW[12], this._position.y + RW[13], this._position.z + RW[14])
          }
          if (AW.nzW(this._scaling.x * this.scalingDeterminant, this._scaling.y * this.scalingDeterminant, this._scaling.z * this.scalingDeterminant), this._rotationQuaternion) {
            if (this._rotationQuaternion._isDirty = !1, bR = this._rotationQuaternion, this.reIntegrateRotationIntoRotationQuaternion) {
              this.rotation.lengthSquared() && (this._rotationQuaternion.multiplyInPlace(BW.e.RotationYawPitchRoll(this._rotation.y, this._rotation.x, this._rotation.z)), this._rotation.nzW(0, 0, 0))
            }
          } else bR = WW._TmpRotation, BW.e.RotationYawPitchRollToRef(this._rotation.y, this._rotation.x, this._rotation.z, bR);
          if (this._usePivotMatrix) {
            const WW = BW.k.Matrix[1];
            BW.d.ScalingToRef(AW.x, AW.y, AW.z, WW);
            const RW = BW.k.Matrix[0];
            bR.toRotationMatrix(RW), this._pivotMatrix.multiplyToRef(WW, BW.k.Matrix[4]), BW.k.Matrix[4].multiplyToRef(RW, this._localMatrix), this._postMultiplyPivotMatrix && this._localMatrix.multiplyToRef(this._pivotMatrixInverse, this._localMatrix), this._localMatrix.addTranslationFromFloats(yR.x, yR.y, yR.z)
          } else BW.d.ComposeToRef(AW, bR, yR, this._localMatrix);
          if (zR && zR.getWorldMatrix) {
            if (RW && zR.computeWorldMatrix(RW), this.billboardMode) {
              if (this._transformToBoneReferal) {
                const WW = this.parent;
                WW.getSkeleton().prepare(), WW.getFinalMatrix().multiplyToRef(this._transformToBoneReferal.getWorldMatrix(), BW.k.Matrix[7])
              } else BW.k.Matrix[7].hyW(zR.getWorldMatrix());
              const RW = BW.k.vC[5],
                MW = BW.k.vC[6],
                wW = BW.k.Quaternion[0];
              BW.k.Matrix[7].decompose(MW, wW, RW), BW.d.ScalingToRef(MW.x, MW.y, MW.z, BW.k.Matrix[7]), BW.k.Matrix[7].setTranslation(RW), WW.BillboardUseParentOrientation && (this._position.applyRotationQuaternionToRef(wW, RW), this._localMatrix.setTranslation(RW)), this._localMatrix.multiplyToRef(BW.k.Matrix[7], this._worldMatrix)
            } else if (this._transformToBoneReferal) {
              const WW = this.parent;
              WW.getSkeleton().prepare(), this._localMatrix.multiplyToRef(WW.getFinalMatrix(), BW.k.Matrix[6]), BW.k.Matrix[6].multiplyToRef(this._transformToBoneReferal.getWorldMatrix(), this._worldMatrix)
            } else this._localMatrix.multiplyToRef(zR.getWorldMatrix(), this._worldMatrix);
            this._markSyncedWithParent()
          } else this._worldMatrix.hyW(this._localMatrix);
          if (MW && this.billboardMode)
            if (CW.useBillboardPosition) {
              const RW = BW.k.vC[0];
              this._worldMatrix.getTranslationToRef(RW);
              const wW = MW.globalPosition;
              this._worldMatrix.invertToRef(BW.k.Matrix[1]);
              const CW = BW.k.vC[1];
              BW.q.TransformCoordinatesToRef(wW, BW.k.Matrix[1], CW), CW.normalize();
              const zR = -Math.atan2(CW.z, CW.x) + Math.PI / 2,
                AW = Math.sqrt(CW.x * CW.x + CW.z * CW.z),
                bR = -Math.atan2(CW.y, AW);
              if (BW.e.RotationYawPitchRollToRef(zR, bR, 0, BW.k.Quaternion[0]), (this.billboardMode & WW.BILLBOARDMODE_ALL) !== WW.BILLBOARDMODE_ALL) {
                const RW = BW.k.vC[1];
                BW.k.Quaternion[0].toEulerAnglesToRef(RW), (this.billboardMode & WW.BILLBOARDMODE_X) !== WW.BILLBOARDMODE_X && (RW.x = 0), (this.billboardMode & WW.BILLBOARDMODE_Y) !== WW.BILLBOARDMODE_Y && (RW.y = 0), (this.billboardMode & WW.BILLBOARDMODE_Z) !== WW.BILLBOARDMODE_Z && (RW.z = 0), BW.d.RotationYawPitchRollToRef(RW.y, RW.x, RW.z, BW.k.Matrix[0])
              } else BW.d.FromQuaternionToRef(BW.k.Quaternion[0], BW.k.Matrix[0]);
              this._worldMatrix.setTranslationFromFloats(0, 0, 0), this._worldMatrix.multiplyToRef(BW.k.Matrix[0], this._worldMatrix), this._worldMatrix.setTranslation(BW.k.vC[0])
            } else {
              const RW = BW.k.vC[0];
              this._worldMatrix.getTranslationToRef(RW), BW.k.Matrix[1].hyW(MW.getViewMatrix());
              const wW = this.QRW().useRightHandedSystem;
              if (wW && BW.k.Matrix[1].multiplyToRef(WW._TmpRHRestore, BW.k.Matrix[1]), BW.k.Matrix[1].setTranslationFromFloats(0, 0, 0), BW.k.Matrix[1].invertToRef(BW.k.Matrix[0]), (this.billboardMode & WW.BILLBOARDMODE_ALL) !== WW.BILLBOARDMODE_ALL) {
                BW.k.Matrix[0].decompose(void 0, BW.k.Quaternion[0], void 0);
                const RW = BW.k.vC[1];
                BW.k.Quaternion[0].toEulerAnglesToRef(RW), (this.billboardMode & WW.BILLBOARDMODE_X) !== WW.BILLBOARDMODE_X && (RW.x = 0), (this.billboardMode & WW.BILLBOARDMODE_Y) !== WW.BILLBOARDMODE_Y && (RW.y = 0), (this.billboardMode & WW.BILLBOARDMODE_Z) !== WW.BILLBOARDMODE_Z && (RW.z = 0), wW && (RW.y += Math.PI), BW.d.RotationYawPitchRollToRef(RW.y, RW.x, RW.z, BW.k.Matrix[0])
              }
              this._worldMatrix.setTranslationFromFloats(0, 0, 0), this._worldMatrix.multiplyToRef(BW.k.Matrix[0], this._worldMatrix), this._worldMatrix.setTranslation(BW.k.vC[0])
            } return this.ignoreNonUniformScaling ? this._updateNonUniformScalingState(!1) : this._scaling.isNonUniformWithinEpsilon(1e-6) ? this._updateNonUniformScalingState(!0) : zR && zR._nonUniformScaling ? this._updateNonUniformScalingState(zR._nonUniformScaling) : this._updateNonUniformScalingState(!1), this._afterComputeWorldMatrix(), this._absolutePosition.nzW(this._worldMatrix.m[12], this._worldMatrix.m[13], this._worldMatrix.m[14]), this._isAbsoluteSynced = !1, this.onAfterWorldMatrixUpdateObservable.notifyObservers(this), this._poseMatrix || (this._poseMatrix = BW.d.Invert(this._worldMatrix)), this._worldMatrixDeterminantIsDirty = !0, this._worldMatrix
        }
        resetLocalMatrix() {
          let WW = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          if (this.computeWorldMatrix(), WW) {
            const WW = this.getChildren();
            for (let RW = 0; RW < WW.length; ++RW) {
              const MW = WW[RW];
              if (MW) {
                MW.computeWorldMatrix();
                const WW = BW.k.Matrix[0];
                MW._localMatrix.multiplyToRef(this._localMatrix, WW);
                const RW = BW.k.Quaternion[0];
                WW.decompose(MW.NA, RW, MW.position), MW.rotationQuaternion ? MW.rotationQuaternion.hyW(RW) : RW.toEulerAnglesToRef(MW.rotation)
              }
            }
          }
          this.NA.nzW(1, 1, 1), this.position.nzW(0, 0, 0), this.rotation.nzW(0, 0, 0), this.rotationQuaternion && (this.rotationQuaternion = BW.e.Identity()), this._worldMatrix = BW.d.Identity()
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
          return WW || (WW = this.QRW().activeCamera), BW.q.TransformCoordinates(this.getAbsolutePosition(), WW.getViewMatrix())
        }
        getDistanceToCamera() {
          let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return WW || (WW = this.QRW().activeCamera), this.getAbsolutePosition().subtract(WW.globalPosition).length()
        }
        clone(RW, MW, wW) {
          const CW = NW.d.Clone((() => new WW(RW, this.QRW())), this);
          if (CW.name = RW, CW.id = RW, MW && (CW.parent = MW), !wW) {
            const WW = this.getDescendants(!0);
            for (let MW = 0; MW < WW.length; MW++) {
              const wW = WW[MW];
              wW.clone && wW.clone(RW + "." + wW.name, CW)
            }
          }
          return CW
        }
        serialize(WW) {
          const RW = NW.d.Serialize(this, WW);
          return RW.type = this.getClassName(), RW.uniqueId = this.uniqueId, this.parent && this.parent._serializeAsParent(RW), RW.localMatrix = this.getPivotMatrix().JNW(), RW.isEnabled = this.isEnabled(), this._isWorldMatrixFrozen && (RW.aMW = !0), NW.d.AppendSerializedAnimations(this, RW), RW.WA = this.serializeAnimationRanges(), RW
        }
        getChildTransformNodes(RW, MW) {
          const wW = [];
          return this._getDescendants(wW, RW, (RW => (!MW || MW(RW)) && RW instanceof WW)), wW
        }
        dispose(WW) {
          let RW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this.QRW().stopAnimation(this), this.QRW().removeTransformNode(this), this._parentContainer) {
            const WW = this._parentContainer.transformNodes.indexOf(this);
            WW > -1 && this._parentContainer.transformNodes.splice(WW, 1), this._parentContainer = null
          }
          if (this.onAfterWorldMatrixUpdateObservable.clear(), WW) {
            const WW = this.getChildTransformNodes(!0);
            for (const RW of WW) RW.parent = null, RW.computeWorldMatrix(!0)
          }
          super.dispose(WW, RW)
        }
        normalizeToUnitCube() {
          let WW = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            RW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            MW = arguments.length > 2 ? arguments[2] : void 0,
            wW = null,
            CW = null;
          RW && (this.rotationQuaternion ? (CW = this.rotationQuaternion.clone(), this.rotationQuaternion.nzW(0, 0, 0, 1)) : this.rotation && (wW = this.rotation.clone(), this.rotation.nzW(0, 0, 0)));
          const zR = this.getHierarchyBoundingVectors(WW, MW),
            AW = zR.max.subtract(zR.min),
            bR = Math.max(AW.x, AW.y, AW.z);
          if (0 === bR) return this;
          const yR = 1 / bR;
          return this.NA.scaleInPlace(yR), RW && (this.rotationQuaternion && CW ? this.rotationQuaternion.hyW(CW) : this.rotation && wW && this.rotation.hyW(wW)), this
        }
        _syncAbsoluteScalingAndRotation() {
          this._isAbsoluteSynced || (this._worldMatrix.decompose(this._absoluteScaling, this._absoluteRotationQuaternion), this._isAbsoluteSynced = !0)
        }
      }, (() => {
        const NW = "function" === typeof Symbol && Symbol.metadata ? Object.create(YW[Symbol.metadata] ?? null) : void 0;
        RW = [(0, yR.B)("position")], MW = [(0, yR.B)("rotation")], wW = [(0, yR.u)("rotationQuaternion")], CW = [(0, yR.B)("NA")], zR = [(0, yR.D)("billboardMode")], AW = [(0, yR.D)()], TW = [(0, yR.D)("infiniteDistance")], gR = [(0, yR.D)()], iR = [(0, yR.D)()], (0, bR.e)(null, null, RW, {
          kind: "field",
          name: "_position",
          static: !1,
          private: !1,
          access: {
            has: WW => "_position" in WW,
            get: WW => WW._position,
            set: (WW, RW) => {
              WW._position = RW
            }
          },
          metadata: NW
        }, JW, PW), (0, bR.e)(null, null, MW, {
          kind: "field",
          name: "_rotation",
          static: !1,
          private: !1,
          access: {
            has: WW => "_rotation" in WW,
            get: WW => WW._rotation,
            set: (WW, RW) => {
              WW._rotation = RW
            }
          },
          metadata: NW
        }, IW, oW), (0, bR.e)(null, null, wW, {
          kind: "field",
          name: "_rotationQuaternion",
          static: !1,
          private: !1,
          access: {
            has: WW => "_rotationQuaternion" in WW,
            get: WW => WW._rotationQuaternion,
            set: (WW, RW) => {
              WW._rotationQuaternion = RW
            }
          },
          metadata: NW
        }, lW, FW), (0, bR.e)(null, null, CW, {
          kind: "field",
          name: "_scaling",
          static: !1,
          private: !1,
          access: {
            has: WW => "_scaling" in WW,
            get: WW => WW._scaling,
            set: (WW, RW) => {
              WW._scaling = RW
            }
          },
          metadata: NW
        }, fW, QW), (0, bR.e)(null, null, zR, {
          kind: "field",
          name: "_billboardMode",
          static: !1,
          private: !1,
          access: {
            has: WW => "_billboardMode" in WW,
            get: WW => WW._billboardMode,
            set: (WW, RW) => {
              WW._billboardMode = RW
            }
          },
          metadata: NW
        }, rR, cR), (0, bR.e)(null, null, AW, {
          kind: "field",
          name: "scalingDeterminant",
          static: !1,
          private: !1,
          access: {
            has: WW => "scalingDeterminant" in WW,
            get: WW => WW.scalingDeterminant,
            set: (WW, RW) => {
              WW.scalingDeterminant = RW
            }
          },
          metadata: NW
        }, XW, jR), (0, bR.e)(null, null, TW, {
          kind: "field",
          name: "_infiniteDistance",
          static: !1,
          private: !1,
          access: {
            has: WW => "_infiniteDistance" in WW,
            get: WW => WW._infiniteDistance,
            set: (WW, RW) => {
              WW._infiniteDistance = RW
            }
          },
          metadata: NW
        }, kR, aR), (0, bR.e)(null, null, gR, {
          kind: "field",
          name: "ignoreNonUniformScaling",
          static: !1,
          private: !1,
          access: {
            has: WW => "ignoreNonUniformScaling" in WW,
            get: WW => WW.ignoreNonUniformScaling,
            set: (WW, RW) => {
              WW.ignoreNonUniformScaling = RW
            }
          },
          metadata: NW
        }, sW, dW), (0, bR.e)(null, null, iR, {
          kind: "field",
          name: "reIntegrateRotationIntoRotationQuaternion",
          static: !1,
          private: !1,
          access: {
            has: WW => "reIntegrateRotationIntoRotationQuaternion" in WW,
            get: WW => WW.reIntegrateRotationIntoRotationQuaternion,
            set: (WW, RW) => {
              WW.reIntegrateRotationIntoRotationQuaternion = RW
            }
          },
          metadata: NW
        }, pW, hW), NW && Object.defineProperty(WW, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: NW
        })
      })(), WW.BILLBOARDMODE_NONE = 0, WW.BILLBOARDMODE_X = 1, WW.BILLBOARDMODE_Y = 2, WW.BILLBOARDMODE_Z = 4, WW.BILLBOARDMODE_ALL = 7, WW.BILLBOARDMODE_USE_POSITION = 128, WW.BillboardUseParentOrientation = !1, WW._TmpRotation = BW.e.Zero(), WW._TmpScaling = BW.q.Zero(), WW._TmpTranslation = BW.q.Zero(), WW._TmpRHRestore = BW.d.Scaling(1, 1, -1), WW._LookAtVectorCache = new BW.q(0, 0, 0), WW._RotationAxisCache = new BW.e, WW
    })();

    function YW(WW, RW, MW) {
      const wW = NW.d.Parse((() => new iR(WW.name, RW)), WW, RW, MW);
      if (WW.localMatrix ? wW.setPreTransformMatrix(BW.d.FromArray(WW.localMatrix)) : WW.pivotMatrix && wW.setPivotMatrix(BW.d.FromArray(WW.pivotMatrix)), wW.kMW(WW.isEnabled), wW._waitingParsedUniqueId = WW.uniqueId, void 0 !== WW.parentId && (wW._waitingParentId = WW.parentId), void 0 !== WW.parentInstanceIndex && (wW._waitingParentInstanceIndex = WW.parentInstanceIndex), WW.aMW && (wW._waitingFreezeWorldMatrix = WW.aMW), WW.animations) {
        for (let RW = 0; RW < WW.animations.length; RW++) {
          const MW = WW.animations[RW],
            CW = (0, TW.c)("BABYLON.Animation");
          CW && wW.animations.push(CW.Parse(MW))
        }
        tR.b.ParseAnimationRanges(wW, WW, RW)
      }
      return WW.autoAnimate && RW.beginAnimation(wW, WW.autoAnimateFrom, WW.autoAnimateTo, WW.autoAnimateLoop, WW.autoAnimateSpeed || 1), wW
    }
    let JW = !1;

    function PW() {
      JW || (JW = !0, iR.Parse = YW)
    }(wW = iR.prototype).EMW ?? (wW.EMW = (0, gR.f)("TransformNode", "EMW")), (CW = iR.prototype).applyImpulse ?? (CW.applyImpulse = (0, gR.f)("TransformNode", "applyImpulse")), (zR = iR.prototype).applyAngularImpulse ?? (zR.applyAngularImpulse = (0, gR.f)("TransformNode", "applyAngularImpulse")), (AW = iR.prototype).applyTorque ?? (AW.applyTorque = (0, gR.f)("TransformNode", "applyTorque")), Object.getOwnPropertyDescriptor(iR.prototype, "physicsBody") || Object.defineProperty(iR.prototype, "physicsBody", (0, gR.e)("TransformNode", "physicsBody"))
  },
  37998: (WW, RW, MW) => {
    function wW(WW, RW, MW) {
      try {
        const wW = WW.next();
        wW.done ? RW(wW) : wW.value ? wW.value.then((() => {
          wW.value = void 0, RW(wW)
        }), MW) : RW(wW)
      } catch (wW) {
        MW(wW)
      }
    }

    function CW() {
      let WW, RW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 25;
      return (MW, CW, zR) => {
        const AW = performance.now();
        void 0 === WW || AW - WW > RW ? (WW = AW, setTimeout((() => {
          wW(MW, CW, zR)
        }), 0)) : wW(MW, CW, zR)
      }
    }

    function zR(WW, RW, MW, wW, CW) {
      const zR = () => {
        let AW;
        const bR = WW => {
          WW.done ? MW(WW.value) : void 0 === AW ? AW = !0 : zR()
        };
        do {
          AW = void 0, CW && CW.aborted ? wW(new Error("Aborted")) : RW(WW, bR, wW), void 0 === AW && (AW = !1)
        } while (AW)
      };
      zR()
    }

    function AW(WW, RW) {
      let MW;
      return zR(WW, wW, (WW => MW = WW), (WW => {
        throw WW
      }), RW), MW
    }
    async function bR(WW, RW, MW) {
      return await new Promise(((wW, CW) => {
        zR(WW, RW, wW, CW, MW)
      }))
    }

    function yR(WW, RW) {
      return function() {
        return AW(WW(...arguments), RW)
      }
    }
    MW.d(RW, {
      c: () => CW,
      f: () => yR,
      h: () => bR,
      k: () => AW
    })
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);
export const id = 255;
export const ids = [255];
export const modules = {
  40330: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => cT,
      c: () => qT
    });
    var WT = mT(40095),
      zT = mT(40102),
      MT = mT(40215),
      gT = mT(37219),
      nT = mT(37188),
      HT = mT(40335),
      kT = mT(38800),
      jT = mT(37239),
      lT = mT(39965),
      LT = mT(38229),
      pT = mT(37885),
      BT = mT(40051),
      ZT = mT(40122);
    let cT = (() => {
      var TT;
      let UT, mT, jT, cT, vT, fT, qT, iT, bT, OT, eT, YT, JT, xT, dT, wT, tT, aT, yT = HT.d,
        XT = [],
        IT = [],
        QT = [],
        sT = [],
        FT = [],
        PT = [],
        VT = [],
        uT = [],
        CT = [],
        rT = [],
        KT = [],
        ST = [],
        GT = [],
        NT = [],
        ET = [],
        hT = [],
        DT = [],
        oT = [],
        AT = [],
        RT = [],
        TU = [],
        UU = [],
        mU = [],
        WU = [],
        zU = [];
      return TT = class extends yT {
        get position() {
          return this._position
        }
        set position(TT) {
          this._position = TT
        }
        set upVector(TT) {
          this._upVector = TT
        }
        get upVector() {
          return this._upVector
        }
        get screenArea() {
          let UT, mT;
          if (this.mode === TT.PERSPECTIVE_CAMERA) this.fovMode === TT.FOVMODE_VERTICAL_FIXED ? (mT = 2 * this.minZ * Math.tan(this.fov / 2), UT = this.eB().getAspectRatio(this) * mT) : (UT = 2 * this.minZ * Math.tan(this.fov / 2), mT = UT / this.eB().getAspectRatio(this));
          else {
            const TT = this.eB().getRenderWidth() / 2,
              WT = this.eB().getRenderHeight() / 2;
            UT = (this.orthoRight ?? TT) - (this.orthoLeft ?? -TT), mT = (this.orthoTop ?? WT) - (this.orthoBottom ?? -WT)
          }
          return UT * mT
        }
        set orthoLeft(TT) {
          this._orthoLeft = TT;
          for (const UT of this._rigCameras) UT.orthoLeft = TT
        }
        get orthoLeft() {
          return this._orthoLeft
        }
        set orthoRight(TT) {
          this._orthoRight = TT;
          for (const UT of this._rigCameras) UT.orthoRight = TT
        }
        get orthoRight() {
          return this._orthoRight
        }
        set orthoBottom(TT) {
          this._orthoBottom = TT;
          for (const UT of this._rigCameras) UT.orthoBottom = TT
        }
        get orthoBottom() {
          return this._orthoBottom
        }
        set orthoTop(TT) {
          this._orthoTop = TT;
          for (const UT of this._rigCameras) UT.orthoTop = TT
        }
        get orthoTop() {
          return this._orthoTop
        }
        setFocalLength(TT) {
          let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 36;
          this.fov = 2 * Math.atan(UT / (2 * TT))
        }
        get inertia() {
          return this._baseInertia
        }
        set inertia(TT) {
          this._baseInertia = TT
        }
        set mode(TT) {
          this._mode = TT;
          for (const UT of this._rigCameras) UT.mode = TT
        }
        get mode() {
          return this._mode
        }
        get hasMoved() {
          return this._hasMoved
        }
        constructor(UT, mT, zT) {
          let HT = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
          (0, BT.d)(), super(UT, zT, !1), this.inputs = (0, WT.k)(this, XT), this._position = (0, WT.k)(this, IT, nT.p.Zero()), this._upVector = ((0, WT.k)(this, QT), (0, WT.k)(this, sT, nT.p.Up())), this.oblique = ((0, WT.k)(this, FT), null), this._orthoLeft = null, this._orthoRight = null, this._orthoBottom = null, this._orthoTop = null, this.fov = (0, WT.k)(this, PT, .8), this.projectionPlaneTilt = ((0, WT.k)(this, VT), (0, WT.k)(this, uT, 0)), this.minZ = ((0, WT.k)(this, CT), (0, WT.k)(this, rT, 1)), this.maxZ = ((0, WT.k)(this, KT), (0, WT.k)(this, ST, 1e4)), this._baseInertia = ((0, WT.k)(this, GT), .9), this._mode = TT.PERSPECTIVE_CAMERA, this.isIntermediate = !1, this.viewport = new LT.d(0, 0, 1, 1), this.layerMask = (0, WT.k)(this, NT, 268435455), this.fovMode = ((0, WT.k)(this, ET), (0, WT.k)(this, hT, TT.FOVMODE_VERTICAL_FIXED)), this.cameraRigMode = ((0, WT.k)(this, DT), (0, WT.k)(this, oT, TT.RIG_MODE_NONE)), this.interaxialDistance = ((0, WT.k)(this, AT), (0, WT.k)(this, RT, void 0)), this.isStereoscopicSideBySide = ((0, WT.k)(this, TU), (0, WT.k)(this, UU, void 0)), this.ignoreCameraMaxZ = ((0, WT.k)(this, mU), (0, WT.k)(this, WU, !1)), this.customRenderTargets = ((0, WT.k)(this, zU), []), this.outputRenderTarget = null, this.onViewMatrixChangedObservable = new gT.d, this.onProjectionMatrixChangedObservable = new gT.d, this.onAfterCheckInputsObservable = new gT.d, this.onRestoreStateObservable = new gT.d, this.isRigCamera = !1, this._hasMoved = !1, this._rigCameras = new Array, this._skipRendering = !1, this._projectionMatrix = new nT.e, this._postProcesses = new Array, this._activeMeshes = new MT.f(256), this._globalPosition = nT.p.Zero(), this._computedViewMatrix = nT.e.Identity(), this._doNotComputeProjectionMatrix = !1, this._transformMatrix = nT.e.Zero(), this._refreshFrustumPlanes = !0, this._absoluteRotation = nT.f.Identity(), this._isCamera = !0, this._isLeftCamera = !1, this._isRightCamera = !1, this.layerMask = this.KF().defaultCameraLayerMask, this.KF().addCamera(this), HT && !this.KF().activeCamera && (this.KF().activeCamera = this), this.position = mT, this.renderPassId = this.KF().eB().createRenderPassId(`Camera ${UT}`)
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
          return "ac"
        }
        toString(TT) {
          let UT = "Name: " + this.name;
          if (UT += ", type: " + this.getClassName(), this.animations)
            for (let mT = 0; mT < this.animations.length; mT++) UT += ", animation[0]: " + this.animations[mT].toString(TT);
          return UT
        }
        applyVerticalCorrection() {
          const TT = this.absoluteRotation.toEulerAngles();
          this.projectionPlaneTilt = this._scene.useRightHandedSystem ? -TT.x : TT.x
        }
        get globalPosition() {
          return this._globalPosition
        }
        getActiveMeshes() {
          return this._activeMeshes
        }
        isActiveMesh(TT) {
          return -1 !== this._activeMeshes.indexOf(TT)
        }
        isReady() {
          let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (TT)
            for (const UT of this._postProcesses)
              if (UT && !UT.isReady()) return !1;
          return super.isReady(TT)
        }
        _initCache() {
          super._initCache(), this._cache.position = new nT.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.upVector = new nT.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.mode = void 0, this._cache.minZ = void 0, this._cache.maxZ = void 0, this._cache.fov = void 0, this._cache.fovMode = void 0, this._cache.aspectRatio = void 0, this._cache.orthoLeft = void 0, this._cache.orthoRight = void 0, this._cache.orthoBottom = void 0, this._cache.orthoTop = void 0, this._cache.obliqueAngle = void 0, this._cache.obliqueLength = void 0, this._cache.obliqueOffset = void 0, this._cache.renderWidth = void 0, this._cache.renderHeight = void 0
        }
        _updateCache(TT) {
          TT || super._updateCache(), this._cache.position.Gw(this.position), this._cache.upVector.Gw(this.upVector)
        }
        _isSynchronized() {
          return this._isSynchronizedViewMatrix() && this._isSynchronizedProjectionMatrix()
        }
        _isSynchronizedViewMatrix() {
          return !!super._isSynchronized() && (this._cache.position.equals(this.position) && this._cache.upVector.equals(this.upVector) && this.isSynchronizedWithParent())
        }
        _isSynchronizedProjectionMatrix() {
          const UT = this.ignoreCameraMaxZ ? 0 : this.maxZ;
          let mT = this._cache.mode === this.mode && this._cache.minZ === this.minZ && this._cache.maxZ === UT;
          if (!mT) return !1;
          const WT = this.eB();
          return this.mode === TT.PERSPECTIVE_CAMERA ? mT = this._cache.fov === this.fov && this._cache.fovMode === this.fovMode && this._cache.aspectRatio === WT.getAspectRatio(this) && this._cache.projectionPlaneTilt === this.projectionPlaneTilt : (mT = this._cache.orthoLeft === this.orthoLeft && this._cache.orthoRight === this.orthoRight && this._cache.orthoBottom === this.orthoBottom && this._cache.orthoTop === this.orthoTop && this._cache.renderWidth === WT.getRenderWidth() && this._cache.renderHeight === WT.getRenderHeight(), this.oblique && (mT = mT && this._cache.obliqueAngle === this.oblique.angle && this._cache.obliqueLength === this.oblique.length && this._cache.obliqueOffset === this.oblique.offset)), mT
        }
        attachControl(TT, UT) {}
        detachControl(TT) {}
        update() {
          this._hasMoved = !1, this._checkInputs(), this.cameraRigMode !== TT.RIG_MODE_NONE && this._updateRigCameras(), this.getViewMatrix(), this.getProjectionMatrix()
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
          for (let TT = 0; TT < this._postProcesses.length; TT++)
            if (null !== this._postProcesses[TT]) return this._postProcesses[TT];
          return null
        }
        _cascadePostProcessesToRigCams() {
          const TT = this._getFirstPostProcess();
          TT && TT.markTextureDirty();
          for (let UT = 0, mT = this._rigCameras.length; UT < mT; UT++) {
            const TT = this._rigCameras[UT],
              mT = TT._rigPostProcess;
            if (mT) {
              "pass" === mT.getEffectName() && (TT.isIntermediate = 0 === this._postProcesses.length), TT._postProcesses = this._postProcesses.slice(0).concat(mT), mT.markTextureDirty()
            } else TT._postProcesses = this._postProcesses.slice(0)
          }
        }
        attachPostProcess(TT) {
          let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          return !TT.isReusable() && this._postProcesses.indexOf(TT) > -1 ? (kT.b.Error("You're trying to reuse a post process not defined as reusable."), 0) : (null == UT || UT < 0 ? this._postProcesses.push(TT) : null === this._postProcesses[UT] ? this._postProcesses[UT] = TT : this._postProcesses.splice(UT, 0, TT), this._cascadePostProcessesToRigCams(), this._scene.prePassRenderer && this._scene.prePassRenderer.NUT(), this._postProcesses.indexOf(TT))
        }
        detachPostProcess(TT) {
          const UT = this._postProcesses.indexOf(TT); - 1 !== UT && (this._postProcesses[UT] = null), this._scene.prePassRenderer && this._scene.prePassRenderer.NUT(), this._cascadePostProcessesToRigCams()
        }
        getWorldMatrix() {
          return this._isSynchronizedViewMatrix() || this.getViewMatrix(), this._worldMatrix
        }
        _getViewMatrix() {
          return nT.e.Identity()
        }
        getViewMatrix(TT) {
          return !TT && this._isSynchronizedViewMatrix() || (this._hasMoved = !0, this.updateCache(), this._computedViewMatrix = this._getViewMatrix(), this._currentRenderId = this.KF().getRenderId(), this._childUpdateId++, this._refreshFrustumPlanes = !0, this._cameraRigParams && this._cameraRigParams.vrPreViewMatrix && this._computedViewMatrix.multiplyToRef(this._cameraRigParams.vrPreViewMatrix, this._computedViewMatrix), this.parent && this.parent.onViewMatrixChangedObservable && this.parent.onViewMatrixChangedObservable.notifyObservers(this.parent), this.onViewMatrixChangedObservable.notifyObservers(this), this._computedViewMatrix.invertToRef(this._worldMatrix), this._worldMatrix.getTranslationToRef(this._globalPosition)), this._computedViewMatrix
        }
        freezeProjectionMatrix(TT) {
          this._doNotComputeProjectionMatrix = !0, void 0 !== TT && (this._projectionMatrix = TT)
        }
        unfreezeProjectionMatrix() {
          this._doNotComputeProjectionMatrix = !1
        }
        getProjectionMatrix(UT) {
          if (this._doNotComputeProjectionMatrix || !UT && this._isSynchronizedProjectionMatrix()) return this._projectionMatrix;
          const mT = this.ignoreCameraMaxZ ? 0 : this.maxZ;
          this._cache.mode = this.mode, this._cache.minZ = this.minZ, this._cache.maxZ = mT, this._refreshFrustumPlanes = !0;
          const WT = this.eB(),
            zT = this.KF(),
            MT = WT.pWT;
          if (this.mode === TT.PERSPECTIVE_CAMERA) {
            let UT;
            this._cache.fov = this.fov, this._cache.fovMode = this.fovMode, this._cache.aspectRatio = WT.getAspectRatio(this), this._cache.projectionPlaneTilt = this.projectionPlaneTilt, this.minZ <= 0 && (this.minZ = .1), UT = zT.useRightHandedSystem ? nT.e.PerspectiveFovRHToRef : nT.e.PerspectiveFovLHToRef, UT(this.fov, WT.getAspectRatio(this), MT ? mT : this.minZ, MT ? this.minZ : mT, this._projectionMatrix, this.fovMode === TT.FOVMODE_VERTICAL_FIXED, WT.isNDCHalfZRange, this.projectionPlaneTilt, MT)
          } else {
            const TT = WT.getRenderWidth() / 2,
              UT = WT.getRenderHeight() / 2;
            zT.useRightHandedSystem ? this.oblique ? nT.e.ObliqueOffCenterRHToRef(this.orthoLeft ?? -TT, this.orthoRight ?? TT, this.orthoBottom ?? -UT, this.orthoTop ?? UT, MT ? mT : this.minZ, MT ? this.minZ : mT, this.oblique.length, this.oblique.angle, this._computeObliqueDistance(this.oblique.offset), this._projectionMatrix, WT.isNDCHalfZRange) : nT.e.OrthoOffCenterRHToRef(this.orthoLeft ?? -TT, this.orthoRight ?? TT, this.orthoBottom ?? -UT, this.orthoTop ?? UT, MT ? mT : this.minZ, MT ? this.minZ : mT, this._projectionMatrix, WT.isNDCHalfZRange) : this.oblique ? nT.e.ObliqueOffCenterLHToRef(this.orthoLeft ?? -TT, this.orthoRight ?? TT, this.orthoBottom ?? -UT, this.orthoTop ?? UT, MT ? mT : this.minZ, MT ? this.minZ : mT, this.oblique.length, this.oblique.angle, this._computeObliqueDistance(this.oblique.offset), this._projectionMatrix, WT.isNDCHalfZRange) : nT.e.OrthoOffCenterLHToRef(this.orthoLeft ?? -TT, this.orthoRight ?? TT, this.orthoBottom ?? -UT, this.orthoTop ?? UT, MT ? mT : this.minZ, MT ? this.minZ : mT, this._projectionMatrix, WT.isNDCHalfZRange), this._cache.orthoLeft = this.orthoLeft, this._cache.orthoRight = this.orthoRight, this._cache.orthoBottom = this.orthoBottom, this._cache.orthoTop = this.orthoTop, this._cache.obliqueAngle = this.oblique?.angle, this._cache.obliqueLength = this.oblique?.length, this._cache.obliqueOffset = this.oblique?.offset, this._cache.renderWidth = WT.getRenderWidth(), this._cache.renderHeight = WT.getRenderHeight()
          }
          return this.onProjectionMatrixChangedObservable.notifyObservers(this), this._projectionMatrix
        }
        getTransformationMatrix() {
          return this._computedViewMatrix.multiplyToRef(this._projectionMatrix, this._transformMatrix), this._transformMatrix
        }
        _computeObliqueDistance(TT) {
          return (this.radius || (this.target ? nT.p.Distance(this.position, this.target) : this.position.length())) + TT
        }
        _updateFrustumPlanes() {
          this._refreshFrustumPlanes && (this.getTransformationMatrix(), this._frustumPlanes ? pT.d.GetPlanesToRef(this._transformMatrix, this._frustumPlanes) : this._frustumPlanes = pT.d.GetPlanes(this._transformMatrix), this._refreshFrustumPlanes = !1)
        }
        isInFrustum(TT) {
          let UT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._updateFrustumPlanes(), UT && this.rigCameras.length > 0) {
            let UT = !1;
            for (const mT of this.rigCameras) mT._updateFrustumPlanes(), UT = UT || TT.isInFrustum(mT._frustumPlanes);
            return UT
          }
          return TT.isInFrustum(this._frustumPlanes)
        }
        isCompletelyInFrustum(TT) {
          return this._updateFrustumPlanes(), TT.isCompletelyInFrustum(this._frustumPlanes)
        }
        getForwardRay() {
          throw (0, lT.k)("Ray")
        }
        getForwardRayToRef(TT) {
          throw (0, lT.k)("Ray")
        }
        dispose(UT) {
          let mT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          for (this.onViewMatrixChangedObservable.clear(), this.onProjectionMatrixChangedObservable.clear(), this.onAfterCheckInputsObservable.clear(), this.onRestoreStateObservable.clear(), this.inputs && this.inputs.clear(), this.KF().stopAnimation(this), this.KF().removeCamera(this); this._rigCameras.length > 0;) {
            const TT = this._rigCameras.pop();
            TT && TT.dispose()
          }
          if (this._parentContainer) {
            const TT = this._parentContainer.cameras.indexOf(this);
            TT > -1 && this._parentContainer.cameras.splice(TT, 1), this._parentContainer = null
          }
          if (this._rigPostProcess) this._rigPostProcess.dispose(this), this._rigPostProcess = null, this._postProcesses.length = 0;
          else if (this.cameraRigMode !== TT.RIG_MODE_NONE) this._rigPostProcess = null, this._postProcesses.length = 0;
          else {
            let TT = this._postProcesses.length;
            for (; --TT >= 0;) {
              const UT = this._postProcesses[TT];
              UT && UT.dispose(this)
            }
          }
          let WT = this.customRenderTargets.length;
          for (; --WT >= 0;) this.customRenderTargets[WT].dispose();
          this.customRenderTargets.length = 0, this._activeMeshes.dispose(), this.KF().eB().releaseRenderPassId(this.renderPassId), super.dispose(UT, mT)
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
        setCameraRigMode(UT, mT) {
          if (this.cameraRigMode !== UT) {
            for (; this._rigCameras.length > 0;) {
              const TT = this._rigCameras.pop();
              TT && TT.dispose()
            }
            if (this.cameraRigMode = UT, this._cameraRigParams = {}, this._cameraRigParams.interaxialDistance = mT.interaxialDistance || .0637, this._cameraRigParams.stereoHalfAngle = this._cameraRigParams.interaxialDistance / .0637 * (Math.PI / 180), this.cameraRigMode !== TT.RIG_MODE_NONE) {
              const TT = this.createRigCamera(this.name + "_L", 0);
              TT && (TT._isLeftCamera = !0);
              const UT = this.createRigCamera(this.name + "_R", 1);
              UT && (UT._isRightCamera = !0), TT && UT && (this._rigCameras.push(TT), this._rigCameras.push(UT))
            }
            this._setRigMode(mT), this._cascadePostProcessesToRigCams(), this.update()
          }
        }
        _setRigMode(TT) {}
        _getVRProjectionMatrix() {
          return nT.e.PerspectiveFovLHToRef(this._cameraRigParams.vrMetrics.aspectRatioFov, this._cameraRigParams.vrMetrics.aspectRatio, this.minZ, this.ignoreCameraMaxZ ? 0 : this.maxZ, this._cameraRigParams.vrWorkMatrix, !0, this.eB().isNDCHalfZRange), this._cameraRigParams.vrWorkMatrix.multiplyToRef(this._cameraRigParams.vrHMatrix, this._projectionMatrix), this._projectionMatrix
        }
        setCameraRigParameter(TT, UT) {
          this._cameraRigParams || (this._cameraRigParams = {}), this._cameraRigParams[TT] = UT, "interaxialDistance" === TT && (this._cameraRigParams.stereoHalfAngle = UT / .0637 * (Math.PI / 180))
        }
        createRigCamera(TT, UT) {
          return null
        }
        _updateRigCameras() {
          for (let TT = 0; TT < this._rigCameras.length; TT++) this._rigCameras[TT].minZ = this.minZ, this._rigCameras[TT].maxZ = this.ignoreCameraMaxZ ? 0 : this.maxZ, this._rigCameras[TT].fov = this.fov, this._rigCameras[TT].upVector.Gw(this.upVector);
          this.cameraRigMode === TT.RIG_MODE_STEREOSCOPIC_ANAGLYPH && (this._rigCameras[0].viewport = this._rigCameras[1].viewport = this.viewport)
        }
        _setupInputs() {}
        serialize() {
          const TT = ZT.e.Serialize(this);
          return TT.uniqueId = this.uniqueId, TT.type = this.getClassName(), this.parent && this.parent._serializeAsParent(TT), this.inputs && this.inputs.serialize(TT), ZT.e.AppendSerializedAnimations(this, TT), TT.hZ = this.serializeAnimationRanges(), TT.isEnabled = this.isEnabled(), TT
        }
        clone(UT) {
          let mT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const WT = ZT.e.Clone(TT.GetConstructorFromName(this.getClassName(), UT, this.KF(), this.interaxialDistance, this.isStereoscopicSideBySide), this);
          return WT.name = UT, WT.parent = mT, this.onClonedObservable.notifyObservers(WT), WT
        }
        qD(TT) {
          const UT = nT.p.Zero();
          return this.getDirectionToRef(TT, UT), UT
        }
        get absoluteRotation() {
          return this.getWorldMatrix().decompose(void 0, this._absoluteRotation), this._absoluteRotation
        }
        getDirectionToRef(TT, UT) {
          nT.p.TransformNormalToRef(TT, this.getWorldMatrix(), UT)
        }
        static GetConstructorFromName(UT, mT, WT) {
          let zT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
            MT = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
          const gT = HT.d.Construct(UT, mT, WT, {
            interaxial_distance: zT,
            isStereoscopicSideBySide: MT
          });
          return gT || (() => TT._CreateDefaultParsedCamera(mT, WT))
        }
        computeWorldMatrix() {
          return this.getWorldMatrix()
        }
        _calculateHandednessMultiplier() {
          let TT = this.KF().useRightHandedSystem ? -1 : 1;
          return this.parent && this.parent._getWorldMatrixDeterminant() < 0 && (TT *= -1), TT
        }
      }, (() => {
        const MT = "function" === typeof Symbol && Symbol.metadata ? Object.create(yT[Symbol.metadata] ?? null) : void 0;
        UT = [(0, zT.J)("position")], mT = [(0, zT.J)("upVector")], jT = [(0, zT.L)()], cT = [(0, zT.L)()], vT = [(0, zT.L)()], fT = [(0, zT.L)()], qT = [(0, zT.L)()], iT = [(0, zT.L)()], bT = [(0, zT.L)()], OT = [(0, zT.L)()], eT = [(0, zT.L)()], YT = [(0, zT.L)()], JT = [(0, zT.L)()], xT = [(0, zT.L)()], dT = [(0, zT.L)()], wT = [(0, zT.L)()], tT = [(0, zT.L)()], aT = [(0, zT.L)()], (0, WT.h)(TT, null, jT, {
          kind: "getter",
          name: "orthoLeft",
          static: !1,
          private: !1,
          access: {
            has: TT => "orthoLeft" in TT,
            get: TT => TT.orthoLeft
          },
          metadata: MT
        }, null, XT), (0, WT.h)(TT, null, cT, {
          kind: "getter",
          name: "orthoRight",
          static: !1,
          private: !1,
          access: {
            has: TT => "orthoRight" in TT,
            get: TT => TT.orthoRight
          },
          metadata: MT
        }, null, XT), (0, WT.h)(TT, null, vT, {
          kind: "getter",
          name: "orthoBottom",
          static: !1,
          private: !1,
          access: {
            has: TT => "orthoBottom" in TT,
            get: TT => TT.orthoBottom
          },
          metadata: MT
        }, null, XT), (0, WT.h)(TT, null, fT, {
          kind: "getter",
          name: "orthoTop",
          static: !1,
          private: !1,
          access: {
            has: TT => "orthoTop" in TT,
            get: TT => TT.orthoTop
          },
          metadata: MT
        }, null, XT), (0, WT.h)(TT, null, eT, {
          kind: "getter",
          name: "inertia",
          static: !1,
          private: !1,
          access: {
            has: TT => "inertia" in TT,
            get: TT => TT.inertia
          },
          metadata: MT
        }, null, XT), (0, WT.h)(TT, null, YT, {
          kind: "getter",
          name: "mode",
          static: !1,
          private: !1,
          access: {
            has: TT => "mode" in TT,
            get: TT => TT.mode
          },
          metadata: MT
        }, null, XT), (0, WT.h)(null, null, UT, {
          kind: "field",
          name: "_position",
          static: !1,
          private: !1,
          access: {
            has: TT => "_position" in TT,
            get: TT => TT._position,
            set: (TT, UT) => {
              TT._position = UT
            }
          },
          metadata: MT
        }, IT, QT), (0, WT.h)(null, null, mT, {
          kind: "field",
          name: "_upVector",
          static: !1,
          private: !1,
          access: {
            has: TT => "_upVector" in TT,
            get: TT => TT._upVector,
            set: (TT, UT) => {
              TT._upVector = UT
            }
          },
          metadata: MT
        }, sT, FT), (0, WT.h)(null, null, qT, {
          kind: "field",
          name: "fov",
          static: !1,
          private: !1,
          access: {
            has: TT => "fov" in TT,
            get: TT => TT.fov,
            set: (TT, UT) => {
              TT.fov = UT
            }
          },
          metadata: MT
        }, PT, VT), (0, WT.h)(null, null, iT, {
          kind: "field",
          name: "projectionPlaneTilt",
          static: !1,
          private: !1,
          access: {
            has: TT => "projectionPlaneTilt" in TT,
            get: TT => TT.projectionPlaneTilt,
            set: (TT, UT) => {
              TT.projectionPlaneTilt = UT
            }
          },
          metadata: MT
        }, uT, CT), (0, WT.h)(null, null, bT, {
          kind: "field",
          name: "minZ",
          static: !1,
          private: !1,
          access: {
            has: TT => "minZ" in TT,
            get: TT => TT.minZ,
            set: (TT, UT) => {
              TT.minZ = UT
            }
          },
          metadata: MT
        }, rT, KT), (0, WT.h)(null, null, OT, {
          kind: "field",
          name: "maxZ",
          static: !1,
          private: !1,
          access: {
            has: TT => "maxZ" in TT,
            get: TT => TT.maxZ,
            set: (TT, UT) => {
              TT.maxZ = UT
            }
          },
          metadata: MT
        }, ST, GT), (0, WT.h)(null, null, JT, {
          kind: "field",
          name: "layerMask",
          static: !1,
          private: !1,
          access: {
            has: TT => "layerMask" in TT,
            get: TT => TT.layerMask,
            set: (TT, UT) => {
              TT.layerMask = UT
            }
          },
          metadata: MT
        }, NT, ET), (0, WT.h)(null, null, xT, {
          kind: "field",
          name: "fovMode",
          static: !1,
          private: !1,
          access: {
            has: TT => "fovMode" in TT,
            get: TT => TT.fovMode,
            set: (TT, UT) => {
              TT.fovMode = UT
            }
          },
          metadata: MT
        }, hT, DT), (0, WT.h)(null, null, dT, {
          kind: "field",
          name: "cameraRigMode",
          static: !1,
          private: !1,
          access: {
            has: TT => "cameraRigMode" in TT,
            get: TT => TT.cameraRigMode,
            set: (TT, UT) => {
              TT.cameraRigMode = UT
            }
          },
          metadata: MT
        }, oT, AT), (0, WT.h)(null, null, wT, {
          kind: "field",
          name: "interaxialDistance",
          static: !1,
          private: !1,
          access: {
            has: TT => "interaxialDistance" in TT,
            get: TT => TT.interaxialDistance,
            set: (TT, UT) => {
              TT.interaxialDistance = UT
            }
          },
          metadata: MT
        }, RT, TU), (0, WT.h)(null, null, tT, {
          kind: "field",
          name: "isStereoscopicSideBySide",
          static: !1,
          private: !1,
          access: {
            has: TT => "isStereoscopicSideBySide" in TT,
            get: TT => TT.isStereoscopicSideBySide,
            set: (TT, UT) => {
              TT.isStereoscopicSideBySide = UT
            }
          },
          metadata: MT
        }, UU, mU), (0, WT.h)(null, null, aT, {
          kind: "field",
          name: "ignoreCameraMaxZ",
          static: !1,
          private: !1,
          access: {
            has: TT => "ignoreCameraMaxZ" in TT,
            get: TT => TT.ignoreCameraMaxZ,
            set: (TT, UT) => {
              TT.ignoreCameraMaxZ = UT
            }
          },
          metadata: MT
        }, WU, zU), MT && Object.defineProperty(TT, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: MT
        })
      })(), TT._CreateDefaultParsedCamera = (TT, UT) => {
        throw (0, lT.k)("UniversalCamera")
      }, TT.PERSPECTIVE_CAMERA = 0, TT.ORTHOGRAPHIC_CAMERA = 1, TT.FOVMODE_VERTICAL_FIXED = 0, TT.FOVMODE_HORIZONTAL_FIXED = 1, TT.RIG_MODE_NONE = 0, TT.RIG_MODE_STEREOSCOPIC_ANAGLYPH = 10, TT.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL = 11, TT.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED = 12, TT.RIG_MODE_STEREOSCOPIC_OVERUNDER = 13, TT.RIG_MODE_STEREOSCOPIC_INTERLACED = 14, TT.RIG_MODE_VR = 20, TT.RIG_MODE_CUSTOM = 22, TT.ForceAttachControlToAlwaysPreventDefault = !1, TT
    })();

    function vT(TT, UT) {
      const mT = TT.type,
        WT = cT.GetConstructorFromName(mT, TT.name, UT, TT.interaxial_distance, TT.isStereoscopicSideBySide),
        zT = ZT.e.Parse(WT, TT, UT);
      if (void 0 !== TT.parentId && (zT._waitingParentId = TT.parentId), void 0 !== TT.parentInstanceIndex && (zT._waitingParentInstanceIndex = TT.parentInstanceIndex), zT.inputs && (zT.inputs.parse(TT), zT._setupInputs()), TT.upVector && (zT.upVector = nT.p.FromArray(TT.upVector)), zT.setPosition && (zT.position.J9(0, 0, 0), zT.setPosition(nT.p.FromArray(TT.position))), TT.target && zT.setTarget && zT.setTarget(nT.p.FromArray(TT.target)), TT.cameraRigMode) {
        const UT = TT.interaxial_distance ? {
          interaxialDistance: TT.interaxial_distance
        } : {};
        zT.setCameraRigMode(TT.cameraRigMode, UT)
      }
      if (TT.animations) {
        for (let UT = 0; UT < TT.animations.length; UT++) {
          const mT = TT.animations[UT],
            WT = (0, jT.d)("BABYLON.Animation");
          WT && zT.animations.push(WT.Parse(mT))
        }
        HT.d.ParseAnimationRanges(zT, TT, UT)
      }
      return TT.autoAnimate && UT.beginAnimation(zT, TT.autoAnimateFrom, TT.autoAnimateTo, TT.autoAnimateLoop, TT.autoAnimateSpeed || 1), void 0 !== TT.isEnabled && zT.Qy(TT.isEnabled), zT
    }
    let fT = !1;

    function qT() {
      fT || (fT = !0, cT.Parse = vT)
    }
  },
  40345: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => zT
    });
    var WT = mT(37188);
    class zT {
      constructor(TT, UT, mT) {
        this._cameraPosition = UT, this._behavior = mT, this.activeInput = !1, this.speed = 1, this.aN = 1, this.panSpeed = 1, this.rotationXSpeed = 1, this.rotationYSpeed = 1, this._zoomSpeedMultiplier = 1, this._panSpeedMultiplier = 1, this.zoomInertia = .9, this.panInertia = .9, this.rotationInertia = .9, this.zoomAccumulatedPixels = 0, this.panAccumulatedPixels = new WT.p, this.rotationAccumulatedPixels = new WT.p, this.zoomDeltaCurrentFrame = 0, this.panDeltaCurrentFrame = WT.p.Zero(), this.rotationDeltaCurrentFrame = WT.p.Zero(), this._zoomVelocity = 0, this._panVelocity = new WT.p, this.referenceFrameRate = 60, this._rotationVelocity = new WT.p, this._prevFrameTimeMs = 0, this._scene = TT
      }
      computeCurrentFrameDeltas() {
        const TT = this._scene.eB().getDeltaTime(),
          UT = this._getEffectiveDeltaMs(TT);
        if (0 === this._zoomVelocity && 0 === this.zoomAccumulatedPixels && 0 === this._panVelocity.x && 0 === this._panVelocity.y && 0 === this._panVelocity.z && 0 === this.panAccumulatedPixels.x && 0 === this.panAccumulatedPixels.y && 0 === this.panAccumulatedPixels.z && 0 === this._rotationVelocity.x && 0 === this._rotationVelocity.y && 0 === this._rotationVelocity.z && 0 === this.rotationAccumulatedPixels.x && 0 === this.rotationAccumulatedPixels.y && 0 === this.rotationAccumulatedPixels.z && !this.activeInput) return this.panDeltaCurrentFrame.B3(0), this.rotationDeltaCurrentFrame.B3(0), this.zoomDeltaCurrentFrame = 0, void(TT > 0 && (this._prevFrameTimeMs = TT));
        this.panDeltaCurrentFrame.B3(0), this.rotationDeltaCurrentFrame.B3(0), this.zoomDeltaCurrentFrame = 0;
        (this.panAccumulatedPixels.lengthSquared() > 0 || this.rotationAccumulatedPixels.lengthSquared() > 0 || 0 !== this.zoomAccumulatedPixels) && this._behavior?.isInterpolating && this._behavior.stopAllAnimations(), this._panVelocity.J9(this._calculateCurrentVelocity(this._panVelocity.x, this.panAccumulatedPixels.x, this.panInertia), this._calculateCurrentVelocity(this._panVelocity.y, this.panAccumulatedPixels.y, this.panInertia), this._calculateCurrentVelocity(this._panVelocity.z, this.panAccumulatedPixels.z, this.panInertia)), this._panVelocity.scaleToRef(this.speed * this.panSpeed * this._panSpeedMultiplier * UT, this.panDeltaCurrentFrame), this._rotationVelocity.J9(this._calculateCurrentVelocity(this._rotationVelocity.x, this.rotationAccumulatedPixels.x, this.rotationInertia), this._calculateCurrentVelocity(this._rotationVelocity.y, this.rotationAccumulatedPixels.y, this.rotationInertia), this._calculateCurrentVelocity(this._rotationVelocity.z, this.rotationAccumulatedPixels.z, this.rotationInertia)), this.rotationDeltaCurrentFrame.J9(this._rotationVelocity.x * this.speed * this.rotationXSpeed * UT, this._rotationVelocity.y * this.speed * this.rotationYSpeed * UT, 0), this._zoomVelocity = this._calculateCurrentVelocity(this._zoomVelocity, this.zoomAccumulatedPixels, this.zoomInertia), this.zoomDeltaCurrentFrame = this._zoomVelocity * (this.speed * this.aN * this._zoomSpeedMultiplier) * UT, TT > 0 && (this._prevFrameTimeMs = TT), this.zoomAccumulatedPixels = 0, this.panAccumulatedPixels.B3(0), this.rotationAccumulatedPixels.B3(0), this.activeInput = !1
      }
      resetRotationVelocity() {
        this._rotationVelocity.B3(0), this.rotationAccumulatedPixels.B3(0)
      }
      resetPanVelocity() {
        this._panVelocity.B3(0), this.panAccumulatedPixels.B3(0)
      }
      resetZoomVelocity() {
        this._zoomVelocity = 0, this.zoomAccumulatedPixels = 0
      }
      get isInterpolating() {
        return !!this._behavior?.isInterpolating
      }
      getFrameIndependentDecay(TT) {
        const UT = this._scene.eB().getDeltaTime(),
          mT = this._getEffectiveDeltaMs(UT),
          WT = 1e3 / this.referenceFrameRate;
        return Math.pow(TT, mT / WT)
      }
      getFrameIndependentInputScale(TT) {
        const UT = 1 - TT;
        if (UT <= 0) return 1;
        return (1 - this.getFrameIndependentDecay(TT)) / UT
      }
      _getEffectiveDeltaMs(TT) {
        return TT > 0 ? TT : this._prevFrameTimeMs > 0 ? this._prevFrameTimeMs : 1e3 / this.referenceFrameRate
      }
      _calculateCurrentVelocity(TT, UT, mT) {
        let WT = TT;
        const zT = this._scene.eB().getDeltaTime(),
          MT = this._getEffectiveDeltaMs(zT);
        if (0 === MT) return WT;
        const gT = this.getFrameIndependentDecay(mT);
        if (WT *= gT, 0 !== UT || this.activeInput) {
          const TT = 1 - mT;
          WT += UT / MT * (TT > 0 ? (1 - gT) / TT : 1)
        } else Math.abs(WT) < 1e-6 && (WT = 0);
        return WT
      }
    }
  },
  40347: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => WT
    });
    class WT {
      constructor(TT, UT) {
        this.inputMap = [], this.handlers = TT, this._createDefaultEntries = UT, this.resetInputMap()
      }
      resolveInteraction(TT, UT) {
        for (const mT of this.inputMap)
          if (mT.source === TT && this._entryMatches(mT, UT)) return mT;
        return null
      }
      resetInputMap() {
        this.inputMap = this._createDefaultEntries?.() ?? []
      }
      getEntry(TT, UT, mT) {
        const WT = this.inputMap;
        for (let zT = 0; zT < WT.length; zT++) {
          const MT = WT[zT];
          if (MT.source === TT && MT.interaction === UT && this._entryConditionsMatch(MT, mT)) return MT
        }
      }
      getEntries(TT, UT, mT) {
        const WT = [],
          zT = this.inputMap;
        for (let MT = 0; MT < zT.length; MT++) {
          const gT = zT[MT];
          gT.source === TT && gT.interaction === UT && this._entryConditionsMatch(gT, mT) && WT.push(gT)
        }
        return WT
      }
      addEntry(TT) {
        const UT = this._entrySpecificity(TT);
        let mT = this.inputMap.length;
        for (let WT = 0; WT < this.inputMap.length; WT++)
          if (this._entrySpecificity(this.inputMap[WT]) < UT) {
            mT = WT;
            break
          } this.inputMap.splice(mT, 0, TT)
      }
      setInteraction(TT, UT, mT) {
        const WT = this.resolveInteraction(TT, UT);
        return WT && this._entryCoversAllConditionsOf(WT, UT) ? (WT.interaction = mT, !0) : (this.addEntry({
          source: TT,
          ...UT ?? {},
          interaction: mT
        }), !0)
      }
      _entryCoversAllConditionsOf(TT, UT) {
        if (!UT) return !0;
        const mT = TT;
        for (const WT of Object.keys(UT)) {
          const TT = UT[WT];
          if (void 0 !== TT)
            if ("modifiers" === WT) {
              const UT = mT.modifiers ?? {};
              for (const mT of Object.keys(TT))
                if (void 0 !== TT[mT] && void 0 === UT[mT]) return !1
            } else if (void 0 === mT[WT]) return !1
        }
        return !0
      }
      setInteractions(TT, UT, mT) {
        let WT = 0;
        const zT = this.inputMap;
        for (let MT = 0; MT < zT.length; MT++) {
          const gT = zT[MT];
          gT.source === TT && this._entryMatches(gT, UT) && (gT.interaction = mT, WT++)
        }
        return WT
      }
      _entryMatches(TT, UT) {
        switch (TT.source) {
          case "pointer":
            return (void 0 === TT.button || TT.button === UT?.button) && this._matchModifiers(TT.modifiers, UT?.modifiers);
          case "wheel":
            return this._matchModifiers(TT.modifiers, UT?.modifiers);
          case "touch":
            return void 0 === TT.touchCount || TT.touchCount === UT?.touchCount;
          case "keyboard":
            return (void 0 === TT.key || (Array.isArray(TT.key) ? -1 !== TT.key.indexOf(UT?.key ?? -1) : TT.key === UT?.key)) && this._matchModifiers(TT.modifiers, UT?.modifiers)
        }
      }
      _entryConditionsMatch(TT, UT) {
        if (!UT) return !0;
        switch (TT.source) {
          case "pointer":
            return (!("button" in UT) || TT.button === UT.button) && (!("modifiers" in UT) || this._entryModifiersMatch(TT.modifiers, UT.modifiers));
          case "wheel":
            return !("modifiers" in UT) || this._entryModifiersMatch(TT.modifiers, UT.modifiers);
          case "touch":
            return !("touchCount" in UT) || TT.touchCount === UT.touchCount;
          case "keyboard":
            if ("key" in UT) {
              if (void 0 === TT.key) return void 0 === UT.key;
              if (void 0 === UT.key || (Array.isArray(TT.key) ? -1 === TT.key.indexOf(UT.key) : TT.key !== UT.key)) return !1
            }
            return !("modifiers" in UT) || this._entryModifiersMatch(TT.modifiers, UT.modifiers)
        }
      }
      _entrySpecificity(TT) {
        let UT = 0;
        return "button" in TT && void 0 !== TT.button && UT++, "key" in TT && void 0 !== TT.key && UT++, "touchCount" in TT && void 0 !== TT.touchCount && UT++, "modifiers" in TT && TT.modifiers && UT++, UT
      }
      _matchModifiers(TT, UT) {
        return !TT || (void 0 === TT.ctrl || TT.ctrl === (UT?.ctrl ?? !1)) && ((void 0 === TT.shift || TT.shift === (UT?.shift ?? !1)) && (void 0 === TT.alt || TT.alt === (UT?.alt ?? !1)))
      }
      _entryModifiersMatch(TT, UT) {
        if (!UT) return !TT;
        return void 0 !== UT.ctrl || void 0 !== UT.shift || void 0 !== UT.alt ? (void 0 === UT.ctrl || TT?.ctrl === UT.ctrl) && ((void 0 === UT.shift || TT?.shift === UT.shift) && (void 0 === UT.alt || TT?.alt === UT.alt)) : !TT || void 0 === TT.ctrl && void 0 === TT.shift && void 0 === TT.alt
      }
    }
  },
  40323: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => vT,
      d: () => ZT
    });
    var WT = mT(40095),
      zT = mT(40102),
      MT = mT(40330),
      gT = mT(37188),
      nT = mT(37196),
      HT = mT(40338),
      kT = mT(40335),
      jT = mT(40345),
      lT = mT(40347);
    class LT extends jT.e {
      constructor(TT, UT, mT) {
        super(TT, UT, mT), this.input = new lT.b({
          translate: (TT, UT, mT) => {
            this.panAccumulatedPixels.x += TT, this.panAccumulatedPixels.y += UT, this.panAccumulatedPixels.z += mT
          },
          rotate: (TT, UT) => {
            this.rotationAccumulatedPixels.x += TT, this.rotationAccumulatedPixels.y += UT
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
    const pT = gT.e.Zero(),
      BT = gT.f.Identity();
    let ZT = (() => {
        var TT;
        let UT, mT, kT, jT, lT = MT.b,
          ZT = [],
          cT = [],
          vT = [],
          fT = [],
          qT = [],
          iT = [],
          bT = [],
          OT = [];
        return TT = class extends lT {
          get inertia() {
            return this._targetInertia
          }
          set inertia(TT) {
            this._targetInertia = TT, this.movement && (this.movement.panInertia = TT, this.movement.rotationInertia = TT)
          }
          constructor(TT, UT, mT) {
            super(TT, UT, mT, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]), this.cameraDirection = new gT.p(0, 0, 0), this.cameraRotation = new gT.o(0, 0), this._targetInertia = .9, this.updateUpVectorFromRotation = (0, WT.k)(this, ZT, !1), this.rotation = ((0, WT.k)(this, cT), (0, WT.k)(this, vT, void 0)), this.rotationQuaternion = (0, WT.k)(this, fT), this.speed = (0, WT.k)(this, qT, 2), this.noRotationConstraint = ((0, WT.k)(this, iT), !1), this.invertRotation = !1, this.inverseRotationSpeed = .2, this._panningEpsilon = nT.c, this._rotationEpsilon = nT.c, this.lockedTarget = (0, WT.k)(this, bT, null), this._currentTarget = ((0, WT.k)(this, OT), gT.p.Zero()), this._initialFocalDistance = 1, this._viewMatrix = gT.e.Zero(), this._cameraTransformMatrix = gT.e.Zero(), this._cameraRotationMatrix = gT.e.Zero(), this._transformedReferencePoint = gT.p.Zero(), this._deferredPositionUpdate = new gT.p, this._deferredRotationQuaternionUpdate = new gT.f, this._deferredRotationUpdate = new gT.p, this._deferredUpdated = !1, this._deferOnly = !1, this._cachedRotationZ = 0, this._cachedQuaternionRotationZ = 0, this._referencePoint = gT.p.Forward(this.KF().useRightHandedSystem), this.rotation = new gT.p(0, this.KF().useRightHandedSystem ? Math.PI : 0, 0), this.movement = new LT(this.KF(), this.position), this.movement.panInertia = this.inertia, this.movement.rotationInertia = this.inertia
          }
          getFrontPosition(TT) {
            this.getWorldMatrix();
            const UT = gT.l.JB[0],
              mT = gT.l.JB[1];
            return mT.set(0, 0, this._scene.useRightHandedSystem ? -1 : 1), this.getDirectionToRef(mT, UT), UT.scaleInPlace(TT), this.globalPosition.add(UT)
          }
          _getLockedTargetPosition() {
            if (!this.lockedTarget) return null;
            if (this.lockedTarget.absolutePosition) {
              const TT = this.lockedTarget;
              TT.computeWorldMatrix().getTranslationToRef(TT.absolutePosition)
            }
            return this.lockedTarget.absolutePosition || this.lockedTarget
          }
          storeState() {
            return this._storedPosition = this.position.clone(), this._storedRotation = this.rotation.clone(), this.rotationQuaternion && (this._storedRotationQuaternion = this.rotationQuaternion.clone()), super.storeState()
          }
          _restoreStateValues() {
            return !!super._restoreStateValues() && (this.position = this._storedPosition.clone(), this.rotation = this._storedRotation.clone(), this.rotationQuaternion && this._storedRotationQuaternion && (this.rotationQuaternion = this._storedRotationQuaternion.clone()), this.cameraDirection.J9(0, 0, 0), this.cameraRotation.J9(0, 0), !0)
          }
          _initCache() {
            super._initCache(), this._cache.lockedTarget = new gT.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.rotation = new gT.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.rotationQuaternion = new gT.f(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE)
          }
          _updateCache(TT) {
            TT || super._updateCache();
            const UT = this._getLockedTargetPosition();
            UT ? this._cache.lockedTarget ? this._cache.lockedTarget.Gw(UT) : this._cache.lockedTarget = UT.clone() : this._cache.lockedTarget = null, this._cache.rotation.Gw(this.rotation), this.rotationQuaternion && this._cache.rotationQuaternion.Gw(this.rotationQuaternion)
          }
          _isSynchronizedViewMatrix() {
            if (!super._isSynchronizedViewMatrix()) return !1;
            const TT = this._getLockedTargetPosition();
            return (this._cache.lockedTarget ? this._cache.lockedTarget.equals(TT) : !TT) && (this.rotationQuaternion ? this.rotationQuaternion.equals(this._cache.rotationQuaternion) : this._cache.rotation.equals(this.rotation))
          }
          _computeLocalCameraSpeed() {
            const TT = this.eB();
            return this.speed * Math.sqrt(TT.getDeltaTime() / (100 * TT.getFps()))
          }
          setTarget(TT) {
            this.upVector.normalize(), this._initialFocalDistance = TT.subtract(this.position).length(), this.position.z === TT.z && (this.position.z += nT.c), this._referencePoint.normalize().scaleInPlace(this._initialFocalDistance), this.KF().useRightHandedSystem ? gT.e.LookAtRHToRef(this.position, TT, gT.p.UpReadOnly, pT) : gT.e.LookAtLHToRef(this.position, TT, gT.p.UpReadOnly, pT), pT.invert();
            const UT = this.rotationQuaternion || BT;
            gT.f.FromRotationMatrixToRef(pT, UT), UT.toEulerAnglesToRef(this.rotation), this.rotation.z = 0
          }
          get target() {
            return this.getTarget()
          }
          set target(TT) {
            this.setTarget(TT)
          }
          getTarget() {
            return this._currentTarget
          }
          _decideIfNeedsToMove() {
            return Math.abs(this.cameraDirection.x) > 0 || Math.abs(this.cameraDirection.y) > 0 || Math.abs(this.cameraDirection.z) > 0
          }
          _updatePosition() {
            if (this.parent) return this.parent.getWorldMatrix().invertToRef(gT.l.Matrix[0]), gT.p.TransformNormalToRef(this.cameraDirection, gT.l.Matrix[0], gT.l.JB[0]), this._deferredPositionUpdate.addInPlace(gT.l.JB[0]), void(this._deferOnly ? this._deferredUpdated = !0 : this.position.Gw(this._deferredPositionUpdate));
            this._deferredPositionUpdate.addInPlace(this.cameraDirection), this._deferOnly ? this._deferredUpdated = !0 : this.position.Gw(this._deferredPositionUpdate)
          }
          _checkInputs() {
            const TT = this.movement,
              UT = 0 !== this.cameraDirection.x || 0 !== this.cameraDirection.y || 0 !== this.cameraDirection.z;
            TT.panAccumulatedPixels.addInPlace(this.cameraDirection), TT.rotationAccumulatedPixels.x += this.cameraRotation.x, TT.rotationAccumulatedPixels.y += this.cameraRotation.y, TT.computeCurrentFrameDeltas(), this.cameraDirection.Gw(TT.panDeltaCurrentFrame), this.cameraRotation.set(TT.rotationDeltaCurrentFrame.x, TT.rotationDeltaCurrentFrame.y);
            const mT = this.speed * this._panningEpsilon;
            !UT && Math.abs(this.cameraDirection.x) < mT && Math.abs(this.cameraDirection.y) < mT && Math.abs(this.cameraDirection.z) < mT && (this.cameraDirection.B3(0), TT.resetPanVelocity());
            const WT = this.invertRotation ? -this.inverseRotationSpeed : 1,
              zT = this._decideIfNeedsToMove(),
              MT = !(!this.cameraRotation.x && !this.cameraRotation.y);
            if (this._deferredUpdated = !1, this._deferredRotationUpdate.Gw(this.rotation), this._deferredPositionUpdate.Gw(this.position), this.rotationQuaternion && this._deferredRotationQuaternionUpdate.Gw(this.rotationQuaternion), zT && this._updatePosition(), MT) {
              if (this.rotationQuaternion && this.rotationQuaternion.toEulerAnglesToRef(this._deferredRotationUpdate), this._deferredRotationUpdate.x += this.cameraRotation.x * WT, this._deferredRotationUpdate.y += this.cameraRotation.y * WT, !this.noRotationConstraint) {
                const TT = 1.570796;
                this._deferredRotationUpdate.x > TT && (this._deferredRotationUpdate.x = TT), this._deferredRotationUpdate.x < -TT && (this._deferredRotationUpdate.x = -TT)
              }
              if (this._deferOnly ? this._deferredUpdated = !0 : this.rotation.Gw(this._deferredRotationUpdate), this.rotationQuaternion) {
                this._deferredRotationUpdate.lengthSquared() && (gT.f.RotationYawPitchRollToRef(this._deferredRotationUpdate.y, this._deferredRotationUpdate.x, this._deferredRotationUpdate.z, this._deferredRotationQuaternionUpdate), this._deferOnly ? this._deferredUpdated = !0 : this.rotationQuaternion.Gw(this._deferredRotationQuaternionUpdate))
              }
            }
            this.cameraDirection.B3(0), this.cameraRotation.set(0, 0), super._checkInputs()
          }
          _updateCameraRotationMatrix() {
            this.rotationQuaternion ? this.rotationQuaternion.toRotationMatrix(this._cameraRotationMatrix) : gT.e.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, this.rotation.z, this._cameraRotationMatrix)
          }
          _rotateUpVectorWithCameraRotationMatrix() {
            return gT.p.TransformNormalToRef(gT.p.UpReadOnly, this._cameraRotationMatrix, this.upVector), this
          }
          _getViewMatrix() {
            return this.lockedTarget && this.setTarget(this._getLockedTargetPosition()), this._updateCameraRotationMatrix(), this.rotationQuaternion && this._cachedQuaternionRotationZ != this.rotationQuaternion.z ? (this._rotateUpVectorWithCameraRotationMatrix(), this._cachedQuaternionRotationZ = this.rotationQuaternion.z) : this._cachedRotationZ !== this.rotation.z && (this._rotateUpVectorWithCameraRotationMatrix(), this._cachedRotationZ = this.rotation.z), gT.p.TransformCoordinatesToRef(this._referencePoint, this._cameraRotationMatrix, this._transformedReferencePoint), this.position.addToRef(this._transformedReferencePoint, this._currentTarget), this.updateUpVectorFromRotation && (this.rotationQuaternion ? HT.c.Y.rotateByQuaternionToRef(this.rotationQuaternion, this.upVector) : (gT.f.FromEulerVectorToRef(this.rotation, BT), HT.c.Y.rotateByQuaternionToRef(BT, this.upVector))), this._computeViewMatrix(this.position, this._currentTarget, this.upVector), this._viewMatrix
          }
          _computeViewMatrix(TT, UT, mT) {
            if (this.KF().useRightHandedSystem ? gT.e.LookAtRHToRef(TT, UT, mT, this._viewMatrix) : gT.e.LookAtLHToRef(TT, UT, mT, this._viewMatrix), this.parent) {
              const TT = this.parent.getWorldMatrix();
              this._viewMatrix.invert(), this._viewMatrix.multiplyToRef(TT, this._viewMatrix), this._viewMatrix.invert(), this._markSyncedWithParent()
            }
          }
          createRigCamera(UT, mT) {
            if (this.cameraRigMode !== MT.b.RIG_MODE_NONE) {
              const mT = new TT(UT, this.position.clone(), this.KF());
              return mT.isRigCamera = !0, mT.rigParent = this, this.cameraRigMode === MT.b.RIG_MODE_VR && (this.rotationQuaternion || (this.rotationQuaternion = new gT.f), mT._cameraRigParams = {}, mT.rotationQuaternion = new gT.f), mT.mode = this.mode, mT.orthoLeft = this.orthoLeft, mT.orthoRight = this.orthoRight, mT.orthoTop = this.orthoTop, mT.orthoBottom = this.orthoBottom, mT
            }
            return null
          }
          _updateRigCameras() {
            const TT = this._rigCameras[0],
              UT = this._rigCameras[1];
            switch (this.computeWorldMatrix(), this.cameraRigMode) {
              case MT.b.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case MT.b.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case MT.b.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
              case MT.b.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case MT.b.RIG_MODE_STEREOSCOPIC_INTERLACED: {
                const mT = this.cameraRigMode === MT.b.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED ? 1 : -1,
                  WT = this.cameraRigMode === MT.b.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED ? -1 : 1;
                this._getRigCamPositionAndTarget(this._cameraRigParams.stereoHalfAngle * mT, TT), this._getRigCamPositionAndTarget(this._cameraRigParams.stereoHalfAngle * WT, UT);
                break
              }
              case MT.b.RIG_MODE_VR:
                TT.rotationQuaternion && UT.rotationQuaternion && this.rotationQuaternion ? (TT.rotationQuaternion.Gw(this.rotationQuaternion), UT.rotationQuaternion.Gw(this.rotationQuaternion)) : (TT.rotation.Gw(this.rotation), UT.rotation.Gw(this.rotation)), TT.position.Gw(this.position), UT.position.Gw(this.position)
            }
            super._updateRigCameras()
          }
          _getRigCamPositionAndTarget(UT, mT) {
            this.getTarget().subtractToRef(this.position, TT._TargetFocalPoint), TT._TargetFocalPoint.normalize().scaleInPlace(this._initialFocalDistance);
            const WT = TT._TargetFocalPoint.addInPlace(this.position);
            gT.e.TranslationToRef(-WT.x, -WT.y, -WT.z, TT._TargetTransformMatrix), TT._TargetTransformMatrix.multiplyToRef(gT.e.RotationAxis(mT.upVector, UT), TT._RigCamTransformMatrix), gT.e.TranslationToRef(WT.x, WT.y, WT.z, TT._TargetTransformMatrix), TT._RigCamTransformMatrix.multiplyToRef(TT._TargetTransformMatrix, TT._RigCamTransformMatrix), gT.p.TransformCoordinatesToRef(this.position, TT._RigCamTransformMatrix, mT.position), mT.setTarget(WT)
          }
          getClassName() {
            return "TargetCamera"
          }
        }, (() => {
          const MT = "function" === typeof Symbol && Symbol.metadata ? Object.create(lT[Symbol.metadata] ?? null) : void 0;
          UT = [(0, zT.L)()], mT = [(0, zT.J)()], kT = [(0, zT.L)()], jT = [(0, zT.x)("lockedTargetId")], (0, WT.h)(null, null, UT, {
            kind: "field",
            name: "updateUpVectorFromRotation",
            static: !1,
            private: !1,
            access: {
              has: TT => "updateUpVectorFromRotation" in TT,
              get: TT => TT.updateUpVectorFromRotation,
              set: (TT, UT) => {
                TT.updateUpVectorFromRotation = UT
              }
            },
            metadata: MT
          }, ZT, cT), (0, WT.h)(null, null, mT, {
            kind: "field",
            name: "rotation",
            static: !1,
            private: !1,
            access: {
              has: TT => "rotation" in TT,
              get: TT => TT.rotation,
              set: (TT, UT) => {
                TT.rotation = UT
              }
            },
            metadata: MT
          }, vT, fT), (0, WT.h)(null, null, kT, {
            kind: "field",
            name: "speed",
            static: !1,
            private: !1,
            access: {
              has: TT => "speed" in TT,
              get: TT => TT.speed,
              set: (TT, UT) => {
                TT.speed = UT
              }
            },
            metadata: MT
          }, qT, iT), (0, WT.h)(null, null, jT, {
            kind: "field",
            name: "lockedTarget",
            static: !1,
            private: !1,
            access: {
              has: TT => "lockedTarget" in TT,
              get: TT => TT.lockedTarget,
              set: (TT, UT) => {
                TT.lockedTarget = UT
              }
            },
            metadata: MT
          }, bT, OT), MT && Object.defineProperty(TT, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: MT
          })
        })(), TT._RigCamTransformMatrix = new gT.e, TT._TargetTransformMatrix = new gT.e, TT._TargetFocalPoint = new gT.p, TT
      })(),
      cT = !1;

    function vT() {
      cT || (cT = !0, kT.d.AddNodeConstructor("TargetCamera", ((TT, UT) => () => new ZT(TT, gT.p.Zero(), UT))))
    }
  },
  40048: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => MT
    });
    var WT = mT(39982);
    let zT = !1;

    function MT() {
      zT || (zT = !0, WT.c.prototype.getInputElement = function() {
        return this._renderingCanvas
      }, WT.c.prototype.getRenderingCanvasClientRect = function() {
        return this._renderingCanvas ? this._renderingCanvas.getBoundingClientRect() : null
      }, WT.c.prototype.getInputElementClientRect = function() {
        return this._renderingCanvas ? this.getInputElement().getBoundingClientRect() : null
      }, WT.c.prototype.getAspectRatio = function(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const mT = TT.viewport;
        return this.getRenderWidth(UT) * mT.width / (this.getRenderHeight(UT) * mT.height)
      }, WT.c.prototype.getScreenAspectRatio = function() {
        return this.getRenderWidth(!0) / this.getRenderHeight(!0)
      }, WT.c.prototype._verifyPointerLock = function() {
        this._onPointerLockChange?.()
      })
    }
  },
  40143: (TT, UT, mT) => {
    var WT = mT(39982),
      zT = mT(40151);
    let MT = !1;
    MT || (MT = !0, (0, zT.y)(), WT.c.prototype._loadFileAsync = async function(TT, UT, mT) {
      return await new Promise(((WT, zT) => {
        this._loadFile(TT, (TT => {
          WT(TT)
        }), void 0, UT, mT, ((TT, UT) => {
          zT(UT)
        }))
      }))
    })
  },
  40134: (TT, UT, mT) => {
    (0, mT(40051).d)()
  },
  40051: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => MT
    });
    var WT = mT(39982);
    let zT = !1;

    function MT() {
      zT || (zT = !0, WT.c.prototype.getRenderPassNames = function() {
        return this._renderPassNames
      }, WT.c.prototype.getCurrentRenderPassName = function() {
        return this._renderPassNames[this.currentRenderPassId]
      }, WT.c.prototype.createRenderPassId = function(TT) {
        const UT = ++WT.c._RenderPassIdCounter;
        return this._renderPassNames[UT] = TT ?? "NONAME", UT
      }, WT.c.prototype.releaseRenderPassId = function(TT) {
        this._renderPassNames[TT] = void 0;
        for (let UT = 0; UT < this.scenes.length; ++UT) {
          const mT = this.scenes[UT];
          for (let UT = 0; UT < mT.meshes.length; ++UT) {
            const WT = mT.meshes[UT];
            if (WT._releaseRenderPassId(TT), WT.rY)
              for (let UT = 0; UT < WT.rY.length; ++UT) {
                WT.rY[UT]._removeDrawWrapper(TT)
              }
          }
        }
        this._onReleaseRenderPassObservable?.notifyObservers(TT)
      })
    }
  },
  40180: (TT, UT, mT) => {
    var WT = mT(40183),
      zT = mT(39982);
    let MT = !1;
    MT || (MT = !0, zT.c.GetCompatibleTextureLoader = WT.c)
  },
  40054: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => MT
    });
    var WT = mT(39922);
    let zT = !1;

    function MT() {
      zT || (zT = !0, WT.ThinEngine.prototype.setAlphaMode = function(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this._alphaMode[mT] === TT) {
          if (!UT) {
            const UT = 0 === TT;
            this.depthCullingState.depthMask !== UT && (this.depthCullingState.depthMask = UT)
          }
          return
        }
        const WT = 0 === TT;
        this._alphaState.setAlphaBlend(!WT, mT), this._alphaState.setAlphaMode(TT, mT), UT || (this.depthCullingState.depthMask = WT), this._alphaMode[mT] = TT
      })
    }
  },
  40064: (TT, UT, mT) => {
    var WT = mT(39913),
      zT = mT(38800),
      MT = mT(39922),
      gT = mT(40073),
      nT = mT(40036);
    class HT extends gT.b {
      setDepthStencilTexture(TT) {
        let UT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (super.setDepthStencilTexture(TT, UT), !TT) return;
        const mT = this._engine,
          WT = this._context,
          zT = TT._hardwareTexture;
        if (zT && TT._autoMSAAManagement && this._MSAAFramebuffer) {
          const UT = mT._currentFramebuffer;
          mT._bindUnboundFramebuffer(this._MSAAFramebuffer), WT.framebufferRenderbuffer(WT.FRAMEBUFFER, (0, nT.c)(TT.format) ? WT.DEPTH_STENCIL_ATTACHMENT : WT.DEPTH_ATTACHMENT, WT.RENDERBUFFER, zT.getMSAARenderBuffer()), mT._bindUnboundFramebuffer(UT)
        }
      }
      constructor(TT, UT, mT, WT, zT) {
        super(TT, UT, mT, WT), this._framebuffer = null, this._depthStencilBuffer = null, this._MSAAFramebuffer = null, this._colorTextureArray = null, this._depthStencilTextureArray = null, this._disposeOnlyFramebuffers = !1, this._currentLOD = 0, this._context = zT
      }
      _cloneRenderTargetWrapper() {
        let TT;
        return this._colorTextureArray && this._depthStencilTextureArray ? (TT = this._engine.createMultiviewRenderTargetTexture(this.width, this.height), TT.texture.isReady = !0) : TT = super._cloneRenderTargetWrapper(), TT
      }
      _swapRenderTargetWrapper(TT) {
        super._swapRenderTargetWrapper(TT), TT._framebuffer = this._framebuffer, TT._depthStencilBuffer = this._depthStencilBuffer, TT._MSAAFramebuffer = this._MSAAFramebuffer, TT._colorTextureArray = this._colorTextureArray, TT._depthStencilTextureArray = this._depthStencilTextureArray, this._framebuffer = this._depthStencilBuffer = this._MSAAFramebuffer = this._colorTextureArray = this._depthStencilTextureArray = null
      }
      createDepthStencilTexture() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          UT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          mT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          MT = arguments.length > 5 ? arguments[5] : void 0;
        if (this._depthStencilBuffer) {
          const TT = this._engine,
            UT = TT._currentFramebuffer,
            mT = this._context;
          TT._bindUnboundFramebuffer(this._framebuffer), mT.framebufferRenderbuffer(mT.FRAMEBUFFER, mT.DEPTH_STENCIL_ATTACHMENT, mT.RENDERBUFFER, null), mT.framebufferRenderbuffer(mT.FRAMEBUFFER, mT.DEPTH_ATTACHMENT, mT.RENDERBUFFER, null), mT.framebufferRenderbuffer(mT.FRAMEBUFFER, mT.STENCIL_ATTACHMENT, mT.RENDERBUFFER, null), TT._bindUnboundFramebuffer(UT), mT.deleteRenderbuffer(this._depthStencilBuffer), this._depthStencilBuffer = null
        }
        return super.createDepthStencilTexture(TT, UT, mT, WT, zT, MT)
      }
      shareDepth(TT) {
        super.shareDepth(TT);
        const UT = this._context,
          mT = this._depthStencilBuffer,
          WT = TT._MSAAFramebuffer || TT._framebuffer,
          zT = this._engine;
        TT._depthStencilBuffer && TT._depthStencilBuffer !== mT && UT.deleteRenderbuffer(TT._depthStencilBuffer), TT._depthStencilBuffer = mT;
        const MT = TT._generateStencilBuffer ? UT.DEPTH_STENCIL_ATTACHMENT : UT.DEPTH_ATTACHMENT;
        zT._bindUnboundFramebuffer(WT), UT.framebufferRenderbuffer(UT.FRAMEBUFFER, MT, UT.RENDERBUFFER, mT), zT._bindUnboundFramebuffer(null)
      }
      _bindTextureRenderTarget(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          mT = arguments.length > 2 ? arguments[2] : void 0,
          WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const zT = TT._hardwareTexture;
        if (!zT) return;
        const MT = this._framebuffer,
          gT = this._engine,
          nT = gT._currentFramebuffer;
        let HT;
        if (gT._bindUnboundFramebuffer(MT), gT.TZ > 1) {
          const MT = this._context;
          HT = MT["COLOR_ATTACHMENT" + UT], TT.is2DArray || TT.is3D ? (mT = mT ?? this.layerIndices?.[UT] ?? 0, MT.framebufferTextureLayer(MT.FRAMEBUFFER, HT, zT.underlyingResource, WT, mT)) : TT.isCube ? (mT = mT ?? this.faceIndices?.[UT] ?? 0, MT.framebufferTexture2D(MT.FRAMEBUFFER, HT, MT.TEXTURE_CUBE_MAP_POSITIVE_X + mT, zT.underlyingResource, WT)) : MT.framebufferTexture2D(MT.FRAMEBUFFER, HT, MT.TEXTURE_2D, zT.underlyingResource, WT)
        } else {
          const TT = this._context;
          HT = TT["COLOR_ATTACHMENT" + UT + "_WEBGL"];
          const MT = void 0 !== mT ? TT.TEXTURE_CUBE_MAP_POSITIVE_X + mT : TT.TEXTURE_2D;
          TT.framebufferTexture2D(TT.FRAMEBUFFER, HT, MT, zT.underlyingResource, WT)
        }
        if (TT._autoMSAAManagement && this._MSAAFramebuffer) {
          const TT = this._context;
          gT._bindUnboundFramebuffer(this._MSAAFramebuffer), TT.framebufferRenderbuffer(TT.FRAMEBUFFER, HT, TT.RENDERBUFFER, zT.getMSAARenderBuffer())
        }
        gT._bindUnboundFramebuffer(nT)
      }
      setTexture(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          mT = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        super.setTexture(TT, UT, mT), this._bindTextureRenderTarget(TT, UT)
      }
      setLayerAndFaceIndices(TT, UT) {
        if (super.setLayerAndFaceIndices(TT, UT), !this.textures || !this.layerIndices || !this.faceIndices) return;
        const mT = this._attachments?.length ?? this.textures.length;
        for (let WT = 0; WT < mT; WT++) {
          const TT = this.textures[WT];
          TT && (TT.is2DArray || TT.is3D ? this._bindTextureRenderTarget(TT, WT, this.layerIndices[WT]) : TT.isCube ? this._bindTextureRenderTarget(TT, WT, this.faceIndices[WT]) : this._bindTextureRenderTarget(TT, WT))
        }
      }
      setLayerAndFaceIndex() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          UT = arguments.length > 1 ? arguments[1] : void 0,
          mT = arguments.length > 2 ? arguments[2] : void 0;
        if (super.setLayerAndFaceIndex(TT, UT, mT), !this.textures || !this.layerIndices || !this.faceIndices) return;
        const WT = this.textures[TT];
        WT.is2DArray || WT.is3D ? this._bindTextureRenderTarget(this.textures[TT], TT, this.layerIndices[TT]) : WT.isCube && this._bindTextureRenderTarget(this.textures[TT], TT, this.faceIndices[TT])
      }
      resolveMSAATextures() {
        const TT = this._engine,
          UT = TT._currentFramebuffer;
        TT._bindUnboundFramebuffer(this._MSAAFramebuffer), super.resolveMSAATextures(), TT._bindUnboundFramebuffer(UT)
      }
      dispose() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._disposeOnlyFramebuffers;
        const UT = this._context;
        TT || (this._colorTextureArray && (this._context.deleteTexture(this._colorTextureArray), this._colorTextureArray = null), this._depthStencilTextureArray && (this._context.deleteTexture(this._depthStencilTextureArray), this._depthStencilTextureArray = null)), this._framebuffer && (UT.deleteFramebuffer(this._framebuffer), this._framebuffer = null), this._depthStencilBuffer && (UT.deleteRenderbuffer(this._depthStencilBuffer), this._depthStencilBuffer = null), this._MSAAFramebuffer && (UT.deleteFramebuffer(this._MSAAFramebuffer), this._MSAAFramebuffer = null), super.dispose(TT)
      }
    }
    let kT = !1;
    kT || (kT = !0, MT.ThinEngine.prototype._createHardwareRenderTargetWrapper = function(TT, UT, mT) {
      const WT = new HT(TT, UT, mT, this, this._gl);
      return this._renderTargetWrapperCache.push(WT), WT
    }, MT.ThinEngine.prototype.createRenderTargetTexture = function(TT, UT) {
      const mT = this._createHardwareRenderTargetWrapper(!1, !1, TT);
      let WT, zT, MT = !0,
        gT = !1,
        nT = !1,
        HT = 1;
      void 0 !== UT && "object" === typeof UT && (MT = UT.generateDepthBuffer ?? !0, gT = !!UT.generateStencilBuffer, nT = !!UT.noColorAttachment, WT = UT.colorAttachment, HT = UT.samples ?? 1, zT = UT.label);
      const kT = WT || (nT ? null : this._createInternalTexture(TT, UT, !0, 5)),
        jT = TT.width || TT,
        lT = TT.height || TT,
        LT = this._currentFramebuffer,
        pT = this._gl,
        BT = pT.createFramebuffer();
      if (this._bindUnboundFramebuffer(BT), mT._depthStencilBuffer = this._setupFramebufferDepthAttachments(gT, MT, jT, lT), !kT || kT.is2DArray || kT.is3D || pT.framebufferTexture2D(pT.FRAMEBUFFER, pT.COLOR_ATTACHMENT0, pT.TEXTURE_2D, kT._hardwareTexture.underlyingResource, 0), this._bindUnboundFramebuffer(LT), mT.label = zT ?? "RenderTargetWrapper", mT._framebuffer = BT, mT._generateDepthBuffer = MT, mT._generateStencilBuffer = gT, mT.setTextures(kT), WT) {
        if (mT._samples = WT.samples, WT.samples > 1) {
          const TT = WT._hardwareTexture.getMSAARenderBuffer(0);
          mT._MSAAFramebuffer = pT.createFramebuffer(), this._bindUnboundFramebuffer(mT._MSAAFramebuffer), pT.framebufferRenderbuffer(pT.FRAMEBUFFER, pT.COLOR_ATTACHMENT0, pT.RENDERBUFFER, TT), this._bindUnboundFramebuffer(null)
        }
      } else this.updateRenderTargetTextureSampleCount(mT, HT);
      return mT
    }, MT.ThinEngine.prototype._createDepthStencilTexture = function(TT, UT, mT) {
      const MT = this._gl,
        gT = TT.layers || 0,
        HT = TT.depth || 0;
      let kT = MT.TEXTURE_2D;
      0 !== gT ? kT = MT.TEXTURE_2D_ARRAY : 0 !== HT && (kT = MT.TEXTURE_3D);
      const jT = new WT.b(this, 12);
      if (jT.label = UT.label, !this._caps.depthTextureExtension) return zT.b.Error("Depth texture is not supported by your browser or hardware."), jT;
      const lT = {
        bilinearFiltering: !1,
        comparisonFunction: 0,
        generateStencil: !1,
        ...UT
      };
      if (this._bindTextureDirectly(kT, jT, !0), this._setupDepthStencilTexture(jT, TT, 0 !== lT.comparisonFunction && lT.bilinearFiltering, lT.comparisonFunction, lT.samples), void 0 !== lT.depthTextureFormat) {
        if (15 !== lT.depthTextureFormat && 16 !== lT.depthTextureFormat && 17 !== lT.depthTextureFormat && 13 !== lT.depthTextureFormat && 14 !== lT.depthTextureFormat && 18 !== lT.depthTextureFormat) return zT.b.Error(`Depth texture ${lT.depthTextureFormat} format is not supported.`), jT;
        jT.format = lT.depthTextureFormat
      } else jT.format = lT.generateStencil ? 13 : 16;
      const LT = (0, nT.c)(jT.format),
        pT = this._getWebGLTextureTypeFromDepthTextureFormat(jT.format),
        BT = LT ? MT.DEPTH_STENCIL : MT.DEPTH_COMPONENT,
        ZT = this._getInternalFormatFromDepthTextureFormat(jT.format, !0, LT);
      return jT.is2DArray ? MT.texImage3D(kT, 0, ZT, jT.width, jT.height, gT, 0, BT, pT, null) : jT.is3D ? MT.texImage3D(kT, 0, ZT, jT.width, jT.height, HT, 0, BT, pT, null) : MT.texImage2D(kT, 0, ZT, jT.width, jT.height, 0, BT, pT, null), this._bindTextureDirectly(kT, null), this._internalTexturesCache.push(jT), mT._depthStencilBuffer && (MT.deleteRenderbuffer(mT._depthStencilBuffer), mT._depthStencilBuffer = null), this._bindUnboundFramebuffer(mT._MSAAFramebuffer ?? mT._framebuffer), mT._generateStencilBuffer = LT, mT._depthStencilTextureWithStencil = LT, mT._depthStencilBuffer = this._setupFramebufferDepthAttachments(mT._generateStencilBuffer, mT._generateDepthBuffer, mT.width, mT.height, mT.samples, jT.format), this._bindUnboundFramebuffer(null), jT
    }, MT.ThinEngine.prototype.updateRenderTargetTextureSampleCount = function(TT, UT) {
      if (this.TZ < 2 || !TT) return 1;
      if (TT.samples === UT) return UT;
      const mT = this._gl;
      UT = Math.min(UT, this.getCaps().maxMSAASamples), TT._depthStencilBuffer && (mT.deleteRenderbuffer(TT._depthStencilBuffer), TT._depthStencilBuffer = null), TT._MSAAFramebuffer && (mT.deleteFramebuffer(TT._MSAAFramebuffer), TT._MSAAFramebuffer = null);
      const WT = TT.texture?._hardwareTexture;
      if (WT?.releaseMSAARenderBuffers(), TT.texture && UT > 1 && "function" === typeof mT.renderbufferStorageMultisample) {
        const zT = mT.createFramebuffer();
        if (!zT) throw new Error("Unable to create multi sampled framebuffer");
        TT._MSAAFramebuffer = zT, this._bindUnboundFramebuffer(TT._MSAAFramebuffer);
        const MT = this._createRenderBuffer(TT.texture.width, TT.texture.height, UT, -1, this._getRGBABufferInternalSizedFormat(TT.texture.type, TT.texture.format, TT.texture._useSRGBBuffer), mT.COLOR_ATTACHMENT0, !1);
        if (!MT) throw new Error("Unable to create multi sampled framebuffer");
        WT?.addMSAARenderBuffer(MT)
      }
      this._bindUnboundFramebuffer(TT._MSAAFramebuffer ?? TT._framebuffer), TT.texture && (TT.texture.samples = UT), TT._samples = UT;
      const zT = TT._depthStencilTexture ? TT._depthStencilTexture.format : void 0;
      return TT._depthStencilBuffer = this._setupFramebufferDepthAttachments(TT._generateStencilBuffer, TT._generateDepthBuffer, TT.width, TT.height, UT, zT), this._bindUnboundFramebuffer(null), UT
    }, MT.ThinEngine.prototype._setupDepthStencilTexture = function(TT, UT, mT, WT) {
      let zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1;
      const MT = UT.width ?? UT,
        gT = UT.height ?? UT,
        nT = UT.layers || 0,
        HT = UT.depth || 0;
      TT.baseWidth = MT, TT.baseHeight = gT, TT.width = MT, TT.height = gT, TT.is2DArray = nT > 0, TT.depth = nT || HT, TT.isReady = !0, TT.samples = zT, TT.generateMipMaps = !1, TT.samplingMode = mT ? 2 : 1, TT.type = 0, TT._comparisonFunction = WT;
      const kT = this._gl,
        jT = this._getTextureTarget(TT),
        lT = this._getSamplingParameters(TT.samplingMode, !1);
      kT.texParameteri(jT, kT.TEXTURE_MAG_FILTER, lT.mag), kT.texParameteri(jT, kT.TEXTURE_MIN_FILTER, lT.min), kT.texParameteri(jT, kT.TEXTURE_WRAP_S, kT.CLAMP_TO_EDGE), kT.texParameteri(jT, kT.TEXTURE_WRAP_T, kT.CLAMP_TO_EDGE), this.TZ > 1 && (0 === WT ? (kT.texParameteri(jT, kT.TEXTURE_COMPARE_FUNC, 515), kT.texParameteri(jT, kT.TEXTURE_COMPARE_MODE, kT.NONE)) : (kT.texParameteri(jT, kT.TEXTURE_COMPARE_FUNC, WT), kT.texParameteri(jT, kT.TEXTURE_COMPARE_MODE, kT.COMPARE_REF_TO_TEXTURE)))
    })
  },
  39907: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => WT.e
    });
    var WT = mT(39911);
    (0, mT(40054).e)();
    var zT = mT(39922);
    let MT = !1;
    ! function() {
      if (MT) return;
      MT = !0;
      const TT = new WeakMap,
        UT = new WeakMap,
        mT = new WeakMap,
        WT = new WeakMap;
      zT.ThinEngine.prototype.getAlphaToCoverage = function() {
        return TT.get(this) ?? !1
      }, zT.ThinEngine.prototype.setAlphaToCoverage = function(mT) {
        (TT.get(this) !== mT || this._gl && UT.get(this) !== this._gl) && (TT.set(this, mT), this._gl && (mT ? this._gl.enable(this._gl.SAMPLE_ALPHA_TO_COVERAGE) : this._gl.disable(this._gl.SAMPLE_ALPHA_TO_COVERAGE), UT.set(this, this._gl)))
      }, Object.defineProperty(zT.ThinEngine.prototype, "currentSampleCount", {
        get: function() {
          return this._currentRenderTarget ? this._currentRenderTarget.samples : this._gl ? (WT.get(this) !== this._gl && (mT.set(this, this._gl.getContextAttributes()?.antialias ? Math.max(1, this._gl.getParameter(this._gl.SAMPLES)) : 1), WT.set(this, this._gl)), mT.get(this)) : 1
        },
        enumerable: !1,
        configurable: !0
      })
    }();
    var gT = mT(39913),
      nT = mT(38800),
      HT = mT(40022);
    let kT = !1;
    ! function() {
      function TT(TT, UT, mT, WT) {
        let zT, MT = 1;
        1 === WT ? zT = new Float32Array(UT * mT * 4) : 2 === WT ? (zT = new Uint16Array(UT * mT * 4), MT = 15360) : zT = 7 === WT ? new Uint32Array(UT * mT * 4) : new Uint8Array(UT * mT * 4);
        for (let gT = 0; gT < UT; gT++)
          for (let WT = 0; WT < mT; WT++) {
            const mT = 3 * (WT * UT + gT),
              nT = 4 * (WT * UT + gT);
            zT[nT + 0] = TT[mT + 0], zT[nT + 1] = TT[mT + 1], zT[nT + 2] = TT[mT + 2], zT[nT + 3] = MT
          }
        return zT
      }

      function UT(TT) {
        return function(UT, mT, WT, zT, MT, nT, HT, kT) {
          let jT = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
            lT = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
          const LT = TT ? this._gl.TEXTURE_3D : this._gl.TEXTURE_2D_ARRAY,
            pT = TT ? 10 : 11,
            BT = new gT.b(this, pT);
          BT.baseWidth = mT, BT.baseHeight = WT, BT.baseDepth = zT, BT.width = mT, BT.height = WT, BT.depth = zT, BT.format = MT, BT.type = lT, BT.generateMipMaps = nT, BT.samplingMode = kT, TT ? BT.is3D = !0 : BT.is2DArray = !0, this._doNotHandleContextLost || (BT._bufferView = UT), TT ? this.updateRawTexture3D(BT, UT, MT, HT, jT, lT) : this.updateRawTexture2DArray(BT, UT, MT, HT, jT, lT), this._bindTextureDirectly(LT, BT, !0);
          const ZT = this._getSamplingParameters(kT, nT);
          return this._gl.texParameteri(LT, this._gl.TEXTURE_MAG_FILTER, ZT.mag), this._gl.texParameteri(LT, this._gl.TEXTURE_MIN_FILTER, ZT.min), nT && this._gl.generateMipmap(LT), this._bindTextureDirectly(LT, null), this._internalTexturesCache.push(BT), BT
        }
      }

      function mT(TT) {
        return function(UT, mT, WT, zT) {
          let MT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            gT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
          const nT = TT ? this._gl.TEXTURE_3D : this._gl.TEXTURE_2D_ARRAY,
            HT = this._getWebGLTextureType(gT),
            kT = this._getInternalFormat(WT),
            jT = this._getRGBABufferInternalSizedFormat(gT, WT);
          this._bindTextureDirectly(nT, UT, !0), this._unpackFlipY(void 0 === zT || !!zT), this._doNotHandleContextLost || (UT._bufferView = mT, UT.format = WT, UT.invertY = zT, UT._compression = MT), UT.width % 4 !== 0 && this._gl.pixelStorei(this._gl.UNPACK_ALIGNMENT, 1), MT && mT ? this._gl.compressedTexImage3D(nT, 0, this.getCaps().s3tc[MT], UT.width, UT.height, UT.depth, 0, mT) : this._gl.texImage3D(nT, 0, jT, UT.width, UT.height, UT.depth, 0, kT, HT, mT), UT.generateMipMaps && this._gl.generateMipmap(nT), this._bindTextureDirectly(nT, null), UT.isReady = !0
        }
      }
      kT || (kT = !0, zT.ThinEngine.prototype.updateRawTexture = function(TT, UT, mT, WT) {
        let zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          MT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          gT = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        if (!TT) return;
        const nT = this._getRGBABufferInternalSizedFormat(MT, mT, gT),
          HT = this._getInternalFormat(mT),
          kT = this._getWebGLTextureType(MT);
        this._bindTextureDirectly(this._gl.TEXTURE_2D, TT, !0), this._unpackFlipY(void 0 === WT || !!WT), this._doNotHandleContextLost || (TT._bufferView = UT, TT.format = mT, TT.type = MT, TT.invertY = WT, TT._compression = zT), TT.width % 4 !== 0 && this._gl.pixelStorei(this._gl.UNPACK_ALIGNMENT, 1), zT && UT ? this._gl.compressedTexImage2D(this._gl.TEXTURE_2D, 0, this.getCaps().s3tc[zT], TT.width, TT.height, 0, UT) : this._gl.texImage2D(this._gl.TEXTURE_2D, 0, nT, TT.width, TT.height, 0, HT, kT, UT), TT.generateMipMaps && this._gl.generateMipmap(this._gl.TEXTURE_2D), this._bindTextureDirectly(this._gl.TEXTURE_2D, null), TT.isReady = !0
      }, zT.ThinEngine.prototype.createRawTexture = function(TT, UT, mT, WT, zT, MT, nT) {
        let HT = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          kT = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
          jT = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const lT = new gT.b(this, 3);
        lT.baseWidth = UT, lT.baseHeight = mT, lT.width = UT, lT.height = mT, lT.format = WT, lT.generateMipMaps = zT, lT.samplingMode = nT, lT.invertY = MT, lT._compression = HT, lT.type = kT, lT._useSRGBBuffer = this._getUseSRGBBuffer(jT, !zT), this._doNotHandleContextLost || (lT._bufferView = TT), this.updateRawTexture(lT, TT, WT, MT, HT, kT, lT._useSRGBBuffer), this._bindTextureDirectly(this._gl.TEXTURE_2D, lT, !0);
        const LT = this._getSamplingParameters(nT, zT);
        return this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MAG_FILTER, LT.mag), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MIN_FILTER, LT.min), zT && this._gl.generateMipmap(this._gl.TEXTURE_2D), this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._internalTexturesCache.push(lT), lT
      }, zT.ThinEngine.prototype.createRawCubeTexture = function(TT, UT, mT, WT, zT, MT, kT) {
        let jT = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null;
        const lT = this._gl,
          LT = new gT.b(this, 8);
        LT.isCube = !0, LT.format = mT, LT.type = WT, this._doNotHandleContextLost || (LT._bufferViewArray = TT);
        const pT = this._getWebGLTextureType(WT);
        let BT = this._getInternalFormat(mT);
        BT === lT.RGB && (BT = lT.RGBA), pT !== lT.FLOAT || this._caps.textureFloatLinearFiltering ? pT !== this._gl.HALF_FLOAT_OES || this._caps.textureHalfFloatLinearFiltering ? pT !== lT.FLOAT || this._caps.textureFloatRender ? pT !== lT.HALF_FLOAT || this._caps.colorBufferFloat || (zT = !1, nT.b.Warn("Render to half float textures is not supported. Mipmap generation forced to false.")) : (zT = !1, nT.b.Warn("Render to float textures is not supported. Mipmap generation forced to false.")) : (zT = !1, kT = 1, nT.b.Warn("Half float texture filtering is not supported. Mipmap generation and sampling mode are forced to false and TEXTURE_NEAREST_SAMPLINGMODE, respectively.")) : (zT = !1, kT = 1, nT.b.Warn("Float texture filtering is not supported. Mipmap generation and sampling mode are forced to false and TEXTURE_NEAREST_SAMPLINGMODE, respectively."));
        const ZT = UT,
          cT = ZT;
        LT.width = ZT, LT.height = cT, LT.invertY = MT, LT._compression = jT;
        if (!this.needPOTTextures || (0, HT.i)(LT.width) && (0, HT.i)(LT.height) || (zT = !1), TT) this.updateRawCubeTexture(LT, TT, mT, WT, MT, jT);
        else {
          const TT = this._getRGBABufferInternalSizedFormat(WT),
            UT = 0;
          this._bindTextureDirectly(lT.TEXTURE_CUBE_MAP, LT, !0);
          for (let mT = 0; mT < 6; mT++) jT ? lT.compressedTexImage2D(lT.TEXTURE_CUBE_MAP_POSITIVE_X + mT, UT, this.getCaps().s3tc[jT], LT.width, LT.height, 0, void 0) : lT.texImage2D(lT.TEXTURE_CUBE_MAP_POSITIVE_X + mT, UT, TT, LT.width, LT.height, 0, BT, pT, null);
          this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null)
        }
        this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, LT, !0), TT && zT && this._gl.generateMipmap(this._gl.TEXTURE_CUBE_MAP);
        const vT = this._getSamplingParameters(kT, zT);
        return lT.texParameteri(lT.TEXTURE_CUBE_MAP, lT.TEXTURE_MAG_FILTER, vT.mag), lT.texParameteri(lT.TEXTURE_CUBE_MAP, lT.TEXTURE_MIN_FILTER, vT.min), lT.texParameteri(lT.TEXTURE_CUBE_MAP, lT.TEXTURE_WRAP_S, lT.CLAMP_TO_EDGE), lT.texParameteri(lT.TEXTURE_CUBE_MAP, lT.TEXTURE_WRAP_T, lT.CLAMP_TO_EDGE), this._bindTextureDirectly(lT.TEXTURE_CUBE_MAP, null), LT.generateMipMaps = zT, LT.samplingMode = kT, LT.isReady = !0, LT
      }, zT.ThinEngine.prototype.updateRawCubeTexture = function(UT, mT, WT, zT, MT) {
        let gT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          nT = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        UT._bufferViewArray = mT, UT.format = WT, UT.type = zT, UT.invertY = MT, UT._compression = gT;
        const kT = this._gl,
          jT = this._getWebGLTextureType(zT);
        let lT = this._getInternalFormat(WT);
        const LT = this._getRGBABufferInternalSizedFormat(zT);
        let pT = !1;
        lT === kT.RGB && (lT = kT.RGBA, pT = !0), this._bindTextureDirectly(kT.TEXTURE_CUBE_MAP, UT, !0), this._unpackFlipY(void 0 === MT || !!MT), UT.width % 4 !== 0 && kT.pixelStorei(kT.UNPACK_ALIGNMENT, 1);
        for (let HT = 0; HT < 6; HT++) {
          let WT = mT[HT];
          gT ? kT.compressedTexImage2D(kT.TEXTURE_CUBE_MAP_POSITIVE_X + HT, nT, this.getCaps().s3tc[gT], UT.width, UT.height, 0, WT) : (pT && (WT = TT(WT, UT.width, UT.height, zT)), kT.texImage2D(kT.TEXTURE_CUBE_MAP_POSITIVE_X + HT, nT, LT, UT.width, UT.height, 0, lT, jT, WT))
        }(!this.needPOTTextures || (0, HT.i)(UT.width) && (0, HT.i)(UT.height)) && UT.generateMipMaps && 0 === nT && this._gl.generateMipmap(this._gl.TEXTURE_CUBE_MAP), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), UT.isReady = !0
      }, zT.ThinEngine.prototype.createRawCubeTextureFromUrl = function(UT, mT, WT, zT, MT, gT, nT, HT) {
        let kT = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          jT = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          lT = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 3,
          LT = arguments.length > 11 && void 0 !== arguments[11] && arguments[11];
        const pT = this._gl,
          BT = this.createRawCubeTexture(null, WT, zT, MT, !gT, LT, lT, null);
        mT?.addPendingData(BT), BT.url = UT, BT.isReady = !1, this._internalTexturesCache.push(BT);
        const ZT = (TT, UT) => {
            mT?.removePendingData(BT), jT && jT(TT ? TT.status + " " + TT.statusText : "Failed to parse texture data", UT)
          },
          cT = async UT => {
            if (!BT._hardwareTexture) return;
            const WT = nT(UT);
            if (!WT) return;
            const gT = WT instanceof Promise ? await WT : WT,
              jT = BT.width;
            if (HT) {
              const UT = this._getWebGLTextureType(MT);
              let mT = this._getInternalFormat(zT);
              const WT = this._getRGBABufferInternalSizedFormat(MT);
              let nT = !1;
              mT === pT.RGB && (mT = pT.RGBA, nT = !0), this._bindTextureDirectly(pT.TEXTURE_CUBE_MAP, BT, !0), this._unpackFlipY(!1);
              const kT = HT(gT);
              for (let zT = 0; zT < kT.length; zT++) {
                const gT = jT >> zT;
                for (let HT = 0; HT < 6; HT++) {
                  let jT = kT[zT][HT];
                  nT && (jT = TT(jT, gT, gT, MT)), pT.texImage2D(HT, zT, WT, gT, gT, 0, mT, UT, jT)
                }
              }
              this._bindTextureDirectly(pT.TEXTURE_CUBE_MAP, null)
            } else this.updateRawCubeTexture(BT, gT, zT, MT, LT);
            BT.isReady = !0, mT?.removePendingData(BT), BT.onLoadedObservable.notifyObservers(BT), BT.onLoadedObservable.clear(), kT && kT()
          };
        return this._loadFile(UT, (TT => {
          cT(TT).catch((TT => {
            ZT(void 0, TT)
          }))
        }), void 0, mT?.offlineProvider, !0, ZT), BT
      }, zT.ThinEngine.prototype.createRawTexture2DArray = UT(!1), zT.ThinEngine.prototype.createRawTexture3D = UT(!0), zT.ThinEngine.prototype.updateRawTexture2DArray = mT(!1), zT.ThinEngine.prototype.updateRawTexture3D = mT(!0))
    }();
    var jT = mT(39957);
    let lT = !1;
    lT || (lT = !0, zT.ThinEngine.prototype._readTexturePixelsSync = function(TT, UT, mT) {
      let WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1,
        zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        MT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        gT = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
        nT = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        HT = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
        kT = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
      const lT = this._gl;
      if (!lT) throw new Error("Engine does not have gl rendering context.");
      if (!this._dummyFramebuffer) {
        const TT = lT.createFramebuffer();
        if (!TT) throw new Error("Unable to create dummy framebuffer");
        this._dummyFramebuffer = TT
      }
      lT.bindFramebuffer(lT.FRAMEBUFFER, this._dummyFramebuffer), WT > -1 && (TT.is2DArray || TT.is3D) ? lT.framebufferTextureLayer(lT.FRAMEBUFFER, lT.COLOR_ATTACHMENT0, TT._hardwareTexture?.underlyingResource, zT, WT) : WT > -1 ? lT.framebufferTexture2D(lT.FRAMEBUFFER, lT.COLOR_ATTACHMENT0, lT.TEXTURE_CUBE_MAP_POSITIVE_X + WT, TT._hardwareTexture?.underlyingResource, zT) : lT.framebufferTexture2D(lT.FRAMEBUFFER, lT.COLOR_ATTACHMENT0, lT.TEXTURE_2D, TT._hardwareTexture?.underlyingResource, zT);
      let LT = void 0 !== TT.type ? this._getWebGLTextureType(TT.type) : lT.UNSIGNED_BYTE;
      return nT ? MT || (MT = (0, jT.p)(TT.type, 4 * UT * mT)) : LT === lT.UNSIGNED_BYTE ? (MT || (MT = new Uint8Array(4 * UT * mT)), LT = lT.UNSIGNED_BYTE) : (MT || (MT = new Float32Array(4 * UT * mT)), LT = lT.FLOAT), gT && this.flushFramebuffer(), lT.readPixels(HT, kT, UT, mT, lT.RGBA, LT, MT), lT.bindFramebuffer(lT.FRAMEBUFFER, this._currentFramebuffer), MT
    }, zT.ThinEngine.prototype._readTexturePixels = function(TT, UT, mT) {
      let WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1,
        zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        MT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        gT = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
        nT = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        HT = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
        kT = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
      return Promise.resolve(this._readTexturePixelsSync(TT, UT, mT, WT, zT, MT, gT, nT, HT, kT))
    }), (0, mT(40062).d)();
    let LT = !1;
    LT || (LT = !0, zT.ThinEngine.prototype._createDepthStencilCubeTexture = function(TT, UT) {
      const mT = new gT.b(this, 12);
      if (mT.isCube = !0, 1 === this.TZ) return nT.b.Error("Depth cube texture is not supported by WebGL 1."), mT;
      const WT = {
          bilinearFiltering: !1,
          comparisonFunction: 0,
          generateStencil: !1,
          ...UT
        },
        zT = this._gl;
      this._bindTextureDirectly(zT.TEXTURE_CUBE_MAP, mT, !0), this._setupDepthStencilTexture(mT, TT, WT.bilinearFiltering, WT.comparisonFunction);
      for (let MT = 0; MT < 6; MT++) WT.generateStencil ? zT.texImage2D(zT.TEXTURE_CUBE_MAP_POSITIVE_X + MT, 0, zT.DEPTH24_STENCIL8, TT, TT, 0, zT.DEPTH_STENCIL, zT.UNSIGNED_INT_24_8, null) : zT.texImage2D(zT.TEXTURE_CUBE_MAP_POSITIVE_X + MT, 0, zT.DEPTH_COMPONENT24, TT, TT, 0, zT.DEPTH_COMPONENT, zT.UNSIGNED_INT, null);
      return this._bindTextureDirectly(zT.TEXTURE_CUBE_MAP, null), this._internalTexturesCache.push(mT), mT
    }, zT.ThinEngine.prototype._setCubeMapTextureParams = function(TT, UT, mT) {
      const WT = this._gl;
      WT.texParameteri(WT.TEXTURE_CUBE_MAP, WT.TEXTURE_MAG_FILTER, WT.LINEAR), WT.texParameteri(WT.TEXTURE_CUBE_MAP, WT.TEXTURE_MIN_FILTER, UT ? WT.LINEAR_MIPMAP_LINEAR : WT.LINEAR), WT.texParameteri(WT.TEXTURE_CUBE_MAP, WT.TEXTURE_WRAP_S, WT.CLAMP_TO_EDGE), WT.texParameteri(WT.TEXTURE_CUBE_MAP, WT.TEXTURE_WRAP_T, WT.CLAMP_TO_EDGE), TT.samplingMode = UT ? 3 : 2, UT && this.getCaps().textureMaxLevel && void 0 !== mT && mT > 0 && (WT.texParameteri(WT.TEXTURE_CUBE_MAP, WT.TEXTURE_MAX_LEVEL, mT), TT._maxLodLevel = mT), this._bindTextureDirectly(WT.TEXTURE_CUBE_MAP, null)
    }, zT.ThinEngine.prototype.createCubeTexture = function(TT, UT, mT, WT) {
      let zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        MT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        gT = arguments.length > 6 ? arguments[6] : void 0,
        kT = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        jT = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        lT = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
        LT = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
        pT = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
        BT = arguments.length > 13 && void 0 !== arguments[13] && arguments[13],
        ZT = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : null;
      const cT = this._gl;
      return this.createCubeTextureBase(TT, UT, mT, !!WT, zT, MT, gT, kT, jT, lT, LT, pT, (TT => this._bindTextureDirectly(cT.TEXTURE_CUBE_MAP, TT, !0)), ((TT, UT) => {
        const mT = this.needPOTTextures ? (0, HT.f)(UT[0].width, this._caps.maxCubemapTextureSize) : UT[0].width,
          MT = mT,
          kT = [cT.TEXTURE_CUBE_MAP_POSITIVE_X, cT.TEXTURE_CUBE_MAP_POSITIVE_Y, cT.TEXTURE_CUBE_MAP_POSITIVE_Z, cT.TEXTURE_CUBE_MAP_NEGATIVE_X, cT.TEXTURE_CUBE_MAP_NEGATIVE_Y, cT.TEXTURE_CUBE_MAP_NEGATIVE_Z];
        this._bindTextureDirectly(cT.TEXTURE_CUBE_MAP, TT, !0), this._unpackFlipY(!1);
        const jT = gT ? this._getInternalFormat(gT, TT._useSRGBBuffer) : TT._useSRGBBuffer ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : cT.RGBA;
        let lT = gT ? this._getInternalFormat(gT) : cT.RGBA;
        TT._useSRGBBuffer && 1 === this.TZ && (lT = jT);
        for (let WT = 0; WT < kT.length; WT++)
          if (UT[WT].width !== mT || UT[WT].height !== MT) {
            if (this._prepareWorkingCanvas(), !this._workingCanvas || !this._workingContext) return void nT.b.Warn("Cannot create canvas to resize texture.");
            this._workingCanvas.width = mT, this._workingCanvas.height = MT, this._workingContext.drawImage(UT[WT], 0, 0, UT[WT].width, UT[WT].height, 0, 0, mT, MT), cT.texImage2D(kT[WT], 0, jT, lT, cT.UNSIGNED_BYTE, this._workingCanvas)
          } else cT.texImage2D(kT[WT], 0, jT, lT, cT.UNSIGNED_BYTE, UT[WT]);
        WT || cT.generateMipmap(cT.TEXTURE_CUBE_MAP), this._setCubeMapTextureParams(TT, !WT), TT.width = mT, TT.height = MT, TT.isReady = !0, gT && (TT.format = gT), TT.onLoadedObservable.notifyObservers(TT), TT.onLoadedObservable.clear(), zT && zT()
      }), !!BT, ZT)
    }, zT.ThinEngine.prototype.generateMipMapsForCubemap = function(TT) {
      let UT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (TT.generateMipMaps) {
        const mT = this._gl;
        this._bindTextureDirectly(mT.TEXTURE_CUBE_MAP, TT, !0), mT.generateMipmap(mT.TEXTURE_CUBE_MAP), UT && this._bindTextureDirectly(mT.TEXTURE_CUBE_MAP, null)
      }
    });
    mT(40064);
    let pT = !1;
    pT || (pT = !0, zT.ThinEngine.prototype.setDepthStencilTexture = function(TT, UT, mT, WT) {
      void 0 !== TT && (UT && (this._boundUniforms[TT] = UT), mT && mT.depthStencilTexture ? this._setTexture(TT, mT, !1, !0, WT) : this._setTexture(TT, null, void 0, void 0, WT))
    });
    let BT = !1;
    BT || (BT = !0, zT.ThinEngine.prototype.createRenderTargetCubeTexture = function(TT, UT) {
      const mT = this._createHardwareRenderTargetWrapper(!1, !0, TT),
        WT = {
          generateMipMaps: !0,
          generateDepthBuffer: !0,
          generateStencilBuffer: !1,
          type: 0,
          samplingMode: 3,
          format: 5,
          ...UT
        };
      WT.generateStencilBuffer = WT.generateDepthBuffer && WT.generateStencilBuffer, (1 !== WT.type || this._caps.textureFloatLinearFiltering) && (2 !== WT.type || this._caps.textureHalfFloatLinearFiltering) || (WT.samplingMode = 1);
      const zT = this._gl,
        MT = new gT.b(this, 5);
      this._bindTextureDirectly(zT.TEXTURE_CUBE_MAP, MT, !0);
      const HT = this._getSamplingParameters(WT.samplingMode, WT.generateMipMaps);
      1 !== WT.type || this._caps.textureFloat || (WT.type = 0, nT.b.Warn("Float textures are not supported. Cube render target forced to TEXTURETYPE_UNESIGNED_BYTE type")), zT.texParameteri(zT.TEXTURE_CUBE_MAP, zT.TEXTURE_MAG_FILTER, HT.mag), zT.texParameteri(zT.TEXTURE_CUBE_MAP, zT.TEXTURE_MIN_FILTER, HT.min), zT.texParameteri(zT.TEXTURE_CUBE_MAP, zT.TEXTURE_WRAP_S, zT.CLAMP_TO_EDGE), zT.texParameteri(zT.TEXTURE_CUBE_MAP, zT.TEXTURE_WRAP_T, zT.CLAMP_TO_EDGE);
      for (let gT = 0; gT < 6; gT++) zT.texImage2D(zT.TEXTURE_CUBE_MAP_POSITIVE_X + gT, 0, this._getRGBABufferInternalSizedFormat(WT.type, WT.format), TT, TT, 0, this._getInternalFormat(WT.format), this._getWebGLTextureType(WT.type), null);
      const kT = zT.createFramebuffer();
      return this._bindUnboundFramebuffer(kT), mT._depthStencilBuffer = this._setupFramebufferDepthAttachments(WT.generateStencilBuffer, WT.generateDepthBuffer, TT, TT), WT.generateMipMaps && zT.generateMipmap(zT.TEXTURE_CUBE_MAP), this._bindTextureDirectly(zT.TEXTURE_CUBE_MAP, null), this._bindUnboundFramebuffer(null), mT._framebuffer = kT, mT._generateDepthBuffer = WT.generateDepthBuffer, mT._generateStencilBuffer = WT.generateStencilBuffer, MT.width = TT, MT.height = TT, MT.isReady = !0, MT.isCube = !0, MT.samples = 1, MT.generateMipMaps = WT.generateMipMaps, MT.samplingMode = WT.samplingMode, MT.type = WT.type, MT.format = WT.format, this._internalTexturesCache.push(MT), mT.setTextures(MT), mT
    });
    var ZT = mT(40080),
      cT = mT(40088);
    let vT = !1;
    vT || (vT = !0, zT.ThinEngine.prototype.createPrefilteredCubeTexture = function(TT, UT, WT, zT) {
      let MT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        HT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        kT = arguments.length > 6 ? arguments[6] : void 0,
        jT = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        lT = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
        LT = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null;
      return this.createCubeTexture(TT, UT, null, !1, (async TT => {
        if (!TT) return void(MT && MT(null));
        const HT = TT.texture;
        if (lT ? TT.info.sphericalPolynomial && (HT._sphericalPolynomial = TT.info.sphericalPolynomial) : HT._sphericalPolynomial = HT._sphericalPolynomial ?? new ZT.c, HT._source = 9, this.getCaps().textureLOD) return void(MT && MT(HT));
        const kT = this._gl,
          jT = TT.width;
        if (!jT) return;
        const {
          DDSTools: LT
        } = await mT.e(311).then((() => mT(41905))), pT = [];
        for (let mT = 0; mT < 3; mT++) {
          const MT = 1 - mT / 2,
            lT = zT,
            BT = Math.log2(jT) * WT + zT,
            ZT = lT + (BT - lT) * MT,
            vT = Math.round(Math.min(Math.max(ZT, 0), BT)),
            fT = new gT.b(this, 2);
          if (fT.type = HT.type, fT.format = HT.format, fT.width = Math.pow(2, Math.max(Math.log2(jT) - vT, 0)), fT.height = fT.width, fT.isCube = !0, fT._cachedWrapU = 0, fT._cachedWrapV = 0, this._bindTextureDirectly(kT.TEXTURE_CUBE_MAP, fT, !0), fT.samplingMode = 2, kT.texParameteri(kT.TEXTURE_CUBE_MAP, kT.TEXTURE_MAG_FILTER, kT.LINEAR), kT.texParameteri(kT.TEXTURE_CUBE_MAP, kT.TEXTURE_MIN_FILTER, kT.LINEAR), kT.texParameteri(kT.TEXTURE_CUBE_MAP, kT.TEXTURE_WRAP_S, kT.CLAMP_TO_EDGE), kT.texParameteri(kT.TEXTURE_CUBE_MAP, kT.TEXTURE_WRAP_T, kT.CLAMP_TO_EDGE), TT.isDDS) {
            const UT = TT.info,
              mT = TT.data;
            this._unpackFlipY(UT.isCompressed), LT.UploadDDSLevels(this, fT, mT, UT, !0, 6, vT)
          } else nT.b.Warn("DDS is the only prefiltered cube map supported so far.");
          this._bindTextureDirectly(kT.TEXTURE_CUBE_MAP, null);
          const qT = new cT.c(UT);
          qT._isCube = !0, qT._texture = fT, fT.isReady = !0, pT.push(qT)
        }
        HT._lodTextureHigh = pT[2], HT._lodTextureMid = pT[1], HT._lodTextureLow = pT[0], MT && MT(HT)
      }), HT, kT, jT, lT, WT, zT, null, void 0, !1, LT)
    });
    var fT = mT(40007);
    let qT = !1;
    qT || (qT = !0, zT.ThinEngine.prototype.createUniformBuffer = function(TT, UT) {
      const mT = this._gl.createBuffer();
      if (!mT) throw new Error("Unable to create uniform buffer");
      const WT = new fT.c(mT);
      return this.bindUniformBuffer(WT), TT instanceof Float32Array ? this._gl.bufferData(this._gl.UNIFORM_BUFFER, TT, this._gl.STATIC_DRAW) : this._gl.bufferData(this._gl.UNIFORM_BUFFER, new Float32Array(TT), this._gl.STATIC_DRAW), this.bindUniformBuffer(null), WT.references = 1, WT
    }, zT.ThinEngine.prototype.createDynamicUniformBuffer = function(TT, UT) {
      const mT = this._gl.createBuffer();
      if (!mT) throw new Error("Unable to create dynamic uniform buffer");
      const WT = new fT.c(mT);
      return this.bindUniformBuffer(WT), TT instanceof Float32Array ? this._gl.bufferData(this._gl.UNIFORM_BUFFER, TT, this._gl.DYNAMIC_DRAW) : this._gl.bufferData(this._gl.UNIFORM_BUFFER, new Float32Array(TT), this._gl.DYNAMIC_DRAW), this.bindUniformBuffer(null), WT.references = 1, WT
    }, zT.ThinEngine.prototype.updateUniformBuffer = function(TT, UT, mT, WT) {
      this.bindUniformBuffer(TT), void 0 === mT && (mT = 0), void 0 === WT ? UT instanceof Float32Array ? this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, mT, UT) : this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, mT, new Float32Array(UT)) : UT instanceof Float32Array ? this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, 0, UT.subarray(mT, mT + WT)) : this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, 0, new Float32Array(UT).subarray(mT, mT + WT)), this.bindUniformBuffer(null)
    }, zT.ThinEngine.prototype.bindUniformBuffer = function(TT) {
      this._gl.bindBuffer(this._gl.UNIFORM_BUFFER, TT ? TT.underlyingResource : null)
    }, zT.ThinEngine.prototype.bindUniformBufferBase = function(TT, UT, mT) {
      this._gl.bindBufferBase(this._gl.UNIFORM_BUFFER, UT, TT ? TT.underlyingResource : null)
    }, zT.ThinEngine.prototype.bindUniformBlock = function(TT, UT, mT) {
      const WT = TT.program,
        zT = this._gl.getUniformBlockIndex(WT, UT);
      4294967295 !== zT && this._gl.uniformBlockBinding(WT, zT, mT)
    });
    var iT = mT(39946),
      bT = mT(39982);
    let OT = !1;
    OT || (OT = !0, bT.c.prototype.displayLoadingUI = function() {
      if (!(0, iT.j)()) return;
      const TT = this.loadingScreen;
      TT && TT.displayLoadingUI()
    }, bT.c.prototype.hideLoadingUI = function() {
      if (!(0, iT.j)()) return;
      const TT = this._loadingScreen;
      TT && TT.hideLoadingUI()
    }, Object.defineProperty(bT.c.prototype, "loadingScreen", {
      get: function() {
        return !this._loadingScreen && this._renderingCanvas && (this._loadingScreen = bT.c.DefaultLoadingScreenFactory(this._renderingCanvas)), this._loadingScreen
      },
      set: function(TT) {
        this._loadingScreen = TT
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(bT.c.prototype, "loadingUIText", {
      set: function(TT) {
        this.loadingScreen.loadingUIText = TT
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(bT.c.prototype, "loadingUIBackgroundColor", {
      set: function(TT) {
        this.loadingScreen.loadingUIBackgroundColor = TT
      },
      enumerable: !0,
      configurable: !0
    })), (0, mT(40048).d)();
    let eT = !1;
    eT || (eT = !0, bT.c.prototype.getInputElement = function() {
      return this._renderingCanvas
    }, bT.c.prototype.getDepthFunction = function() {
      return this._depthCullingState.depthFunc
    }, bT.c.prototype.setDepthFunction = function(TT) {
      this._depthCullingState.depthFunc = TT
    }, bT.c.prototype.setDepthFunctionToGreater = function() {
      this.setDepthFunction(516)
    }, bT.c.prototype.setDepthFunctionToGreaterOrEqual = function() {
      this.setDepthFunction(518)
    }, bT.c.prototype.setDepthFunctionToLess = function() {
      this.setDepthFunction(513)
    }, bT.c.prototype.setDepthFunctionToLessOrEqual = function() {
      this.setDepthFunction(515)
    }, bT.c.prototype.getDepthWrite = function() {
      return this._depthCullingState.depthMask
    }, bT.c.prototype.setDepthWrite = function(TT) {
      this._depthCullingState.depthMask = TT
    }, bT.c.prototype.setAlphaConstants = function(TT, UT, mT, WT) {
      this._alphaState.setAlphaBlendConstants(TT, UT, mT, WT)
    }, bT.c.prototype.getAlphaMode = function() {
      let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
      return this._alphaMode[TT]
    }, bT.c.prototype.getAlphaEquation = function() {
      let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
      return this._alphaEquation[TT]
    });
    let YT = !1;
    YT || (YT = !0, bT.c.prototype.getStencilBuffer = function() {
      return this._stencilState.stencilTest
    }, bT.c.prototype.setStencilBuffer = function(TT) {
      this._stencilState.stencilTest = TT
    }, bT.c.prototype.getStencilMask = function() {
      return this._stencilState.stencilMask
    }, bT.c.prototype.setStencilMask = function(TT) {
      this._stencilState.stencilMask = TT
    }, bT.c.prototype.getStencilFunction = function() {
      return this._stencilState.stencilFunc
    }, bT.c.prototype.getStencilBackFunction = function() {
      return this._stencilState.stencilBackFunc
    }, bT.c.prototype.getStencilFunctionReference = function() {
      return this._stencilState.stencilFuncRef
    }, bT.c.prototype.getStencilFunctionMask = function() {
      return this._stencilState.stencilFuncMask
    }, bT.c.prototype.setStencilFunction = function(TT) {
      this._stencilState.stencilFunc = TT
    }, bT.c.prototype.setStencilBackFunction = function(TT) {
      this._stencilState.stencilBackFunc = TT
    }, bT.c.prototype.setStencilFunctionReference = function(TT) {
      this._stencilState.stencilFuncRef = TT
    }, bT.c.prototype.setStencilFunctionMask = function(TT) {
      this._stencilState.stencilFuncMask = TT
    }, bT.c.prototype.getStencilOperationFail = function() {
      return this._stencilState.stencilOpStencilFail
    }, bT.c.prototype.getStencilBackOperationFail = function() {
      return this._stencilState.stencilBackOpStencilFail
    }, bT.c.prototype.getStencilOperationDepthFail = function() {
      return this._stencilState.stencilOpDepthFail
    }, bT.c.prototype.getStencilBackOperationDepthFail = function() {
      return this._stencilState.stencilBackOpDepthFail
    }, bT.c.prototype.getStencilOperationPass = function() {
      return this._stencilState.stencilOpStencilDepthPass
    }, bT.c.prototype.getStencilBackOperationPass = function() {
      return this._stencilState.stencilBackOpStencilDepthPass
    }, bT.c.prototype.setStencilOperationFail = function(TT) {
      this._stencilState.stencilOpStencilFail = TT
    }, bT.c.prototype.setStencilBackOperationFail = function(TT) {
      this._stencilState.stencilBackOpStencilFail = TT
    }, bT.c.prototype.setStencilOperationDepthFail = function(TT) {
      this._stencilState.stencilOpDepthFail = TT
    }, bT.c.prototype.setStencilBackOperationDepthFail = function(TT) {
      this._stencilState.stencilBackOpDepthFail = TT
    }, bT.c.prototype.setStencilOperationPass = function(TT) {
      this._stencilState.stencilOpStencilDepthPass = TT
    }, bT.c.prototype.setStencilBackOperationPass = function(TT) {
      this._stencilState.stencilBackOpStencilDepthPass = TT
    }, bT.c.prototype.cacheStencilState = function() {
      this._cachedStencilBuffer = this.getStencilBuffer(), this._cachedStencilFunction = this.getStencilFunction(), this._cachedStencilMask = this.getStencilMask(), this._cachedStencilOperationPass = this.getStencilOperationPass(), this._cachedStencilOperationFail = this.getStencilOperationFail(), this._cachedStencilOperationDepthFail = this.getStencilOperationDepthFail(), this._cachedStencilReference = this.getStencilFunctionReference()
    }, bT.c.prototype.restoreStencilState = function() {
      this.setStencilFunction(this._cachedStencilFunction), this.setStencilMask(this._cachedStencilMask), this.setStencilBuffer(this._cachedStencilBuffer), this.setStencilOperationPass(this._cachedStencilOperationPass), this.setStencilOperationFail(this._cachedStencilOperationFail), this.setStencilOperationDepthFail(this._cachedStencilOperationDepthFail), this.setStencilFunctionReference(this._cachedStencilReference)
    });
    mT(40134);
    let JT = !1;
    JT || (JT = !0, bT.c.prototype.createDepthStencilTexture = function(TT, UT, mT) {
      if (UT.isCube) {
        const mT = TT.width || TT;
        return this._createDepthStencilCubeTexture(mT, UT)
      }
      return this._createDepthStencilTexture(TT, UT, mT)
    });
    mT(40143), mT(40180);
    let xT = !1;
    xT || (xT = !0, zT.ThinEngine.prototype.enableScissor = function(TT, UT, mT, WT) {
      const zT = this._gl;
      zT.enable(zT.SCISSOR_TEST), zT.scissor(TT, UT, mT, WT)
    }, zT.ThinEngine.prototype.disableScissor = function() {
      const TT = this._gl;
      TT.disable(TT.SCISSOR_TEST)
    })
  },
  39911: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => bT
    });
    var WT = mT(39913),
      zT = mT(37216),
      MT = mT(39922),
      gT = mT(39986);
    class nT {
      constructor() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 30;
        this._enabled = !0, this._rollingFrameTime = new HT(TT)
      }
      sampleFrame() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : gT.c.Now;
        if (this._enabled) {
          if (null != this._lastFrameTimeMs) {
            const UT = TT - this._lastFrameTimeMs;
            this._rollingFrameTime.add(UT)
          }
          this._lastFrameTimeMs = TT
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
        const TT = this._rollingFrameTime.history(0);
        return 0 === TT ? 0 : 1e3 / TT
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
    class HT {
      constructor(TT) {
        this._samples = new Array(TT), this.reset()
      }
      add(TT) {
        let UT;
        if (this.isSaturated()) {
          const TT = this._samples[this._pos];
          UT = TT - this.average, this.average -= UT / (this._sampleCount - 1), this._m2 -= UT * (TT - this.average)
        } else this._sampleCount++;
        UT = TT - this.average, this.average += UT / this._sampleCount, this._m2 += UT * (TT - this.average), this.variance = this._m2 / (this._sampleCount - 1), this._samples[this._pos] = TT, this._pos++, this._pos %= this._samples.length
      }
      history(TT) {
        if (TT >= this._sampleCount || TT >= this._samples.length) return 0;
        const UT = this._wrapPosition(this._pos - 1);
        return this._samples[this._wrapPosition(UT - TT)]
      }
      isSaturated() {
        return this._sampleCount >= this._samples.length
      }
      reset() {
        this.average = 0, this.variance = 0, this._sampleCount = 0, this._pos = 0, this._m2 = 0
      }
      _wrapPosition(TT) {
        const UT = this._samples.length;
        return (TT % UT + UT) % UT
      }
    }
    var kT = mT(40007),
      jT = mT(38800),
      lT = mT(40029),
      LT = mT(39982),
      pT = mT(39946);

    function BT(TT) {
      const UT = function(TT) {
        if (!(0, pT.d)() || !document.body) return null;
        const UT = document.createElement("span");
        UT.textContent = "Hg", UT.style.font = TT;
        const mT = document.createElement("div");
        mT.style.display = "inline-block", mT.style.width = "1px", mT.style.height = "0px", mT.style.verticalAlign = "bottom";
        const WT = document.createElement("div");
        let zT, MT;
        WT.style.whiteSpace = "nowrap", WT.appendChild(UT), WT.appendChild(mT), document.body.appendChild(WT);
        try {
          MT = mT.getBoundingClientRect().top - UT.getBoundingClientRect().top, mT.style.verticalAlign = "baseline", zT = mT.getBoundingClientRect().top - UT.getBoundingClientRect().top
        } finally {
          document.body.removeChild(WT)
        }
        const gT = {
          ascent: zT,
          height: MT,
          descent: MT - zT
        };
        return ZT(gT) ? gT : null
      }(TT);
      if (UT) return UT;
      const mT = function(TT) {
        let UT = null;
        try {
          "undefined" !== typeof OffscreenCanvas ? UT = new OffscreenCanvas(64, 64) : (0, pT.d)() && "function" === typeof document.createElement && (UT = document.createElement("canvas"), UT.width = 64, UT.height = 64);
          const mT = UT?.getContext("2d");
          if (!mT) return null;
          mT.font = TT;
          const WT = mT.measureText("Hg"),
            zT = Number(WT.actualBoundingBoxAscent ?? WT.fontBoundingBoxAscent),
            MT = Number(WT.actualBoundingBoxDescent ?? WT.fontBoundingBoxDescent),
            gT = {
              ascent: zT,
              height: zT + MT,
              descent: MT
            };
          return ZT(gT) ? gT : null
        } catch {
          return null
        } finally {
          const TT = UT;
          "function" === typeof TT?.dispose && TT.dispose()
        }
      }(TT);
      return mT || function(TT) {
        const UT = Math.max(1, function(TT) {
            const UT = /(?:^|\s)([0-9]+(?:\.[0-9]+)?)px(?:\/|\s|$)/.exec(String(TT || ""));
            return UT ? Number(UT[1]) : 16
          }(TT)),
          mT = .8 * UT,
          WT = .2 * UT;
        return {
          ascent: mT,
          height: mT + WT,
          descent: WT
        }
      }(TT)
    }

    function ZT(TT) {
      return Number.isFinite(TT.ascent) && Number.isFinite(TT.height) && Number.isFinite(TT.descent) && TT.height > 0
    }

    function cT(TT) {
      if (TT.requestPointerLock) {
        const UT = TT.requestPointerLock();
        UT instanceof Promise ? UT.then((() => {
          TT.focus()
        })).catch((() => {})) : TT.focus()
      }
    }
    var vT = mT(40039),
      fT = mT(39975),
      qT = mT(40048),
      iT = mT(40051);
    class bT extends MT.ThinEngine {
      static get NpmPackage() {
        return LT.c.NpmPackage
      }
      static get Version() {
        return LT.c.Version
      }
      static get Instances() {
        return zT.c.Instances
      }
      static get LastCreatedEngine() {
        return zT.c.LastCreatedEngine
      }
      static get LastCreatedScene() {
        return zT.c.LastCreatedScene
      }
      static DefaultLoadingScreenFactory(TT) {
        return LT.c.DefaultLoadingScreenFactory(TT)
      }
      get _supportsHardwareTextureRescaling() {
        return !!bT._RescalePostProcessFactory
      }
      _measureFps() {
        this._performanceMonitor.sampleFrame(), this._fps = this._performanceMonitor.averageFPS, this._deltaTime = this._performanceMonitor.instantaneousFrameTime || 0
      }
      get performanceMonitor() {
        return this._performanceMonitor
      }
      constructor(TT, UT, mT) {
        let WT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        (0, qT.d)(), (0, iT.d)(), super(TT, UT, mT, WT), this._performanceMonitor = new nT, this._drawCalls = new vT.b, TT && (this._features.supportRenderPasses = !0)
      }
      _initGLContext() {
        super._initGLContext(), this._rescalePostProcess = null
      }
      _sharedInit(TT) {
        super._sharedInit(TT),
          function(TT, UT, mT) {
            TT._onCanvasFocus = () => {
              TT.onCanvasFocusObservable.notifyObservers(TT)
            }, TT._onCanvasBlur = () => {
              TT.onCanvasBlurObservable.notifyObservers(TT)
            }, TT._onCanvasContextMenu = UT => {
              TT.disableContextMenu && UT.preventDefault()
            }, UT.addEventListener("focus", TT._onCanvasFocus), UT.addEventListener("blur", TT._onCanvasBlur), UT.addEventListener("contextmenu", TT._onCanvasContextMenu), TT._onBlur = () => {
              TT.disablePerformanceMonitorInBackground && TT.performanceMonitor.disable(), TT._windowIsBackground = !0
            }, TT._onFocus = () => {
              TT.disablePerformanceMonitorInBackground && TT.performanceMonitor.enable(), TT._windowIsBackground = !1
            }, TT._onCanvasPointerOut = mT => {
              document.elementFromPoint(mT.clientX, mT.clientY) !== UT && TT.onCanvasPointerOutObservable.notifyObservers(mT)
            };
            const WT = TT.getHostWindow();
            WT && "function" === typeof WT.addEventListener && (WT.addEventListener("blur", TT._onBlur), WT.addEventListener("focus", TT._onFocus)), UT.addEventListener("pointerout", TT._onCanvasPointerOut), mT.doNotHandleTouchAction || function(TT) {
              TT && TT.setAttribute && (TT.setAttribute("touch-action", "none"), TT.style.touchAction = "none", TT.style.webkitTapHighlightColor = "transparent")
            }(UT), !LT.c.audioEngine && mT.audioEngine && LT.c.AudioEngineFactory && (LT.c.audioEngine = LT.c.AudioEngineFactory(TT.getRenderingCanvas(), TT.getAudioContext(), TT.getAudioDestination())), (0, pT.d)() && (TT._onFullscreenChange = () => {
              TT.isFullscreen = !!document.fullscreenElement, TT.isFullscreen && TT._pointerLockRequested && UT && cT(UT)
            }, document.addEventListener("fullscreenchange", TT._onFullscreenChange, !1), document.addEventListener("webkitfullscreenchange", TT._onFullscreenChange, !1), TT._onPointerLockChange = () => {
              TT.isPointerLock = document.pointerLockElement === UT
            }, document.addEventListener("pointerlockchange", TT._onPointerLockChange, !1), document.addEventListener("webkitpointerlockchange", TT._onPointerLockChange, !1)), TT.enableOfflineSupport = void 0 !== LT.c.OfflineProviderFactory, TT._deterministicLockstep = !!mT.deterministicLockstep, TT._lockstepMaxSteps = mT.lockstepMaxSteps || 0, TT._timeStep = mT.timeStep || 1 / 60
          }(this, TT, this._creationOptions)
      }
      resizeImageBitmap(TT, UT, mT) {
        return function(TT, UT, mT, WT) {
          const zT = TT.createCanvas(mT, WT).getContext("2d");
          if (!zT) throw new Error("Unable to get 2d context for resizeImageBitmap");
          return zT.drawImage(UT, 0, 0), zT.getImageData(0, 0, mT, WT).data
        }(this, TT, UT, mT)
      }
      async _createImageBitmapFromSource(TT, UT) {
        return await async function(TT, UT, mT) {
          return await new Promise(((WT, zT) => {
            const MT = new Image;
            MT.onload = () => {
              MT.decode().then((() => {
                TT.createImageBitmap(MT, mT).then((TT => {
                  WT(TT)
                }))
              }))
            }, MT.onerror = () => {
              zT(`Error loading image ${MT.src}`)
            }, MT.src = UT
          }))
        }(this, TT, UT)
      }
      switchFullscreen(TT) {
        this.isFullscreen ? this.exitFullscreen() : this.enterFullscreen(TT)
      }
      enterFullscreen(TT) {
        this.isFullscreen || (this._pointerLockRequested = TT, this._renderingCanvas && function(TT) {
          const UT = TT.requestFullscreen || TT.webkitRequestFullscreen;
          UT && UT.call(TT)
        }(this._renderingCanvas))
      }
      exitFullscreen() {
        this.isFullscreen && function() {
          const TT = document;
          document.exitFullscreen ? document.exitFullscreen() : TT.webkitCancelFullScreen && TT.webkitCancelFullScreen()
        }()
      }
      setDitheringState(TT) {
        TT ? this._gl.enable(this._gl.DITHER) : this._gl.disable(this._gl.DITHER)
      }
      setRasterizerState(TT) {
        TT ? this._gl.disable(this._gl.RASTERIZER_DISCARD) : this._gl.enable(this._gl.RASTERIZER_DISCARD)
      }
      setDirectViewport(TT, UT, mT, WT) {
        const zT = this._cachedViewport;
        return this._cachedViewport = null, this._viewport(TT, UT, mT, WT), zT
      }
      scissorClear(TT, UT, mT, WT, zT) {
        this.enableScissor(TT, UT, mT, WT), this.clear(zT, !0, !0, !0), this.disableScissor()
      }
      getVertexShaderSource(TT) {
        const UT = this._gl.getAttachedShaders(TT);
        return UT ? this._gl.getShaderSource(UT[0]) : null
      }
      getFragmentShaderSource(TT) {
        const UT = this._gl.getAttachedShaders(TT);
        return UT ? this._gl.getShaderSource(UT[1]) : null
      }
      set framebufferDimensionsObject(TT) {
        this._framebufferDimensionsObject = TT, this._framebufferDimensionsObject && this.onResizeObservable.notifyObservers(this)
      }
      _rebuildBuffers() {
        for (const TT of this.scenes) TT.resetCachedMaterial(), TT._rebuildGeometries();
        for (const TT of this._virtualScenes) TT.resetCachedMaterial(), TT._rebuildGeometries();
        super._rebuildBuffers()
      }
      getFontOffset(TT) {
        return BT(TT)
      }
      enterPointerlock() {
        this._renderingCanvas && cT(this._renderingCanvas)
      }
      exitPointerlock() {
        document.exitPointerLock && document.exitPointerLock()
      }
      fY() {
        this._measureFps(), super.fY()
      }
      _deletePipelineContext(TT) {
        const UT = TT;
        UT && UT.program && UT.transformFeedback && (this.deleteTransformFeedback(UT.transformFeedback), UT.transformFeedback = null), super._deletePipelineContext(TT)
      }
      createShaderProgram(TT, UT, mT, WT, zT) {
        let MT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        zT = zT || this._gl, this.onBeforeShaderCompilationObservable.notifyObservers(this);
        const gT = super.createShaderProgram(TT, UT, mT, WT, zT, MT);
        return this.onAfterShaderCompilationObservable.notifyObservers(this), gT
      }
      _createShaderProgram(TT, UT, mT, WT) {
        let zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        const MT = WT.createProgram();
        if (TT.program = MT, !MT) throw new Error("Unable to create program");
        if (WT.attachShader(MT, UT), WT.attachShader(MT, mT), this.TZ > 1 && zT) {
          const UT = this.createTransformFeedback();
          this.bindTransformFeedback(UT), this.setTranformFeedbackVaryings(MT, zT), TT.transformFeedback = UT
        }
        return WT.linkProgram(MT), this.TZ > 1 && zT && this.bindTransformFeedback(null), TT.context = WT, TT.vertexShader = UT, TT.fragmentShader = mT, TT.isParallelCompiled || this._finalizePipelineContext(TT), MT
      }
      _releaseTexture(TT) {
        super._releaseTexture(TT)
      }
      _releaseRenderTargetWrapper(TT) {
        super._releaseRenderTargetWrapper(TT);
        for (const UT of this.scenes) {
          for (const mT of UT.postProcesses) mT._outputTexture === TT && (mT._outputTexture = null);
          for (const mT of UT.cameras)
            for (const UT of mT._postProcesses) UT && UT._outputTexture === TT && (UT._outputTexture = null)
        }
      }
      _rescaleTexture(TT, UT, mT, WT, zT) {
        this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MAG_FILTER, this._gl.LINEAR), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MIN_FILTER, this._gl.LINEAR), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_S, this._gl.CLAMP_TO_EDGE), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_T, this._gl.CLAMP_TO_EDGE);
        const MT = this.createRenderTargetTexture({
          width: UT.width,
          height: UT.height
        }, {
          generateMipMaps: !1,
          type: 0,
          samplingMode: 2,
          generateDepthBuffer: !1,
          generateStencilBuffer: !1
        });
        if (!this._rescalePostProcess && bT._RescalePostProcessFactory && (this._rescalePostProcess = bT._RescalePostProcessFactory(this)), this._rescalePostProcess) {
          this._rescalePostProcess.externalTextureSamplerBinding = !0;
          const gT = () => {
              this._rescalePostProcess.onApply = function(UT) {
                UT._bindTexture("textureSampler", TT)
              };
              let gT = mT;
              gT || (gT = this.scenes[this.scenes.length - 1]), gT.postProcessManager.directRender([this._rescalePostProcess], MT, !0), this._bindTextureDirectly(this._gl.TEXTURE_2D, UT, !0), this._gl.copyTexImage2D(this._gl.TEXTURE_2D, 0, WT, 0, 0, UT.width, UT.height, 0), this.unBindFramebuffer(MT), MT.dispose(), zT && zT()
            },
            nT = this._rescalePostProcess.getEffect();
          nT ? nT.executeWhenCompiled(gT) : this._rescalePostProcess.onEffectCreatedObservable.addOnce((TT => {
            TT.executeWhenCompiled(gT)
          }))
        }
      }
      wrapWebGLTexture(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3,
          zT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          MT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        const gT = new lT.e(TT, this._gl),
          nT = new WT.b(this, 15, !0);
        return nT._hardwareTexture = gT, nT.baseWidth = zT, nT.baseHeight = MT, nT.width = zT, nT.height = MT, nT.isReady = !0, nT.useMipMaps = UT, this.updateTextureSamplingMode(mT, nT), nT
      }
      updateWrappedWebGLTexture(TT, UT) {
        if (15 !== TT.source) throw new Error("updateWrappedWebGLTexture: target InternalTexture was not produced by wrapWebGLTexture.");
        for (const WT of this._renderTargetWrapperCache)
          if (WT.textures?.includes(TT)) {
            if (WT.isMulti) throw new Error("updateWrappedWebGLTexture: wrapped texture is part of a multi render-target; not supported. Dispose and re-wrap.");
            if (WT._depthStencilTexture) throw new Error("updateWrappedWebGLTexture: wrapped texture's render-target wrapper has a depth/stencil texture; not supported. Dispose and re-wrap.")
          } TT._hardwareTexture = new lT.e(UT, this._gl), TT.isReady = !0, TT._cachedCoordinatesMode = null, TT._cachedWrapU = null, TT._cachedWrapV = null, TT._cachedWrapR = null, TT._cachedAnisotropicFilteringLevel = null;
        for (const WT in this._boundTexturesCache) this._boundTexturesCache[WT] === TT && (this._boundTexturesCache[WT] = null);
        this.updateTextureSamplingMode(TT.samplingMode, TT);
        const mT = this._gl;
        for (const WT of this._renderTargetWrapperCache) {
          if (WT.texture !== TT) continue;
          const zT = WT,
            MT = WT.samples,
            gT = MT > 1;
          zT._framebuffer && mT.deleteFramebuffer(zT._framebuffer), !gT && zT._depthStencilBuffer && (mT.deleteRenderbuffer(zT._depthStencilBuffer), zT._depthStencilBuffer = null);
          const nT = this._currentFramebuffer,
            HT = mT.createFramebuffer();
          this._bindUnboundFramebuffer(HT), mT.framebufferTexture2D(mT.FRAMEBUFFER, mT.COLOR_ATTACHMENT0, mT.TEXTURE_2D, UT, 0), gT || (zT._depthStencilBuffer = this._setupFramebufferDepthAttachments(WT._generateStencilBuffer, WT._generateDepthBuffer, WT.width, WT.height)), this._bindUnboundFramebuffer(nT), zT._framebuffer = HT, gT && (WT._samples = 1, this.updateRenderTargetTextureSampleCount(zT, MT))
        }
      }
      _uploadImageToTexture(TT, UT) {
        let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const zT = this._gl,
          MT = this._getWebGLTextureType(TT.type),
          gT = this._getInternalFormat(TT.format),
          nT = this._getRGBABufferInternalSizedFormat(TT.type, gT),
          HT = TT.isCube ? zT.TEXTURE_CUBE_MAP : zT.TEXTURE_2D;
        this._bindTextureDirectly(HT, TT, !0), this._unpackFlipY(TT.invertY);
        let kT = zT.TEXTURE_2D;
        TT.isCube && (kT = zT.TEXTURE_CUBE_MAP_POSITIVE_X + mT), zT.texImage2D(kT, WT, nT, gT, MT, UT), this._bindTextureDirectly(HT, null, !0)
      }
      updateTextureComparisonFunction(TT, UT) {
        if (1 === this.TZ) return void jT.b.Error("WebGL 1 does not support texture comparison.");
        const mT = this._gl;
        TT.isCube ? (this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, TT, !0), 0 === UT ? (mT.texParameteri(mT.TEXTURE_CUBE_MAP, mT.TEXTURE_COMPARE_FUNC, 515), mT.texParameteri(mT.TEXTURE_CUBE_MAP, mT.TEXTURE_COMPARE_MODE, mT.NONE)) : (mT.texParameteri(mT.TEXTURE_CUBE_MAP, mT.TEXTURE_COMPARE_FUNC, UT), mT.texParameteri(mT.TEXTURE_CUBE_MAP, mT.TEXTURE_COMPARE_MODE, mT.COMPARE_REF_TO_TEXTURE)), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null)) : (this._bindTextureDirectly(this._gl.TEXTURE_2D, TT, !0), 0 === UT ? (mT.texParameteri(mT.TEXTURE_2D, mT.TEXTURE_COMPARE_FUNC, 515), mT.texParameteri(mT.TEXTURE_2D, mT.TEXTURE_COMPARE_MODE, mT.NONE)) : (mT.texParameteri(mT.TEXTURE_2D, mT.TEXTURE_COMPARE_FUNC, UT), mT.texParameteri(mT.TEXTURE_2D, mT.TEXTURE_COMPARE_MODE, mT.COMPARE_REF_TO_TEXTURE)), this._bindTextureDirectly(this._gl.TEXTURE_2D, null)), TT._comparisonFunction = UT
      }
      createInstancesBuffer(TT) {
        const UT = this._gl.createBuffer();
        if (!UT) throw new Error("Unable to create instance buffer");
        const mT = new kT.c(UT);
        return mT.fl = TT, this.bindArrayBuffer(mT), this._gl.bufferData(this._gl.ARRAY_BUFFER, TT, this._gl.DYNAMIC_DRAW), mT.references = 1, mT
      }
      deleteInstancesBuffer(TT) {
        this._gl.deleteBuffer(TT)
      }
      async _clientWaitAsync(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10;
        const WT = this._gl;
        return await new Promise(((zT, MT) => {
          (0, fT.i)((() => {
            const mT = WT.clientWaitSync(TT, UT, 0);
            if (mT == WT.WAIT_FAILED) throw new Error("clientWaitSync failed");
            return mT != WT.TIMEOUT_EXPIRED
          }), zT, MT, mT)
        }))
      }
      _readPixelsAsync(TT, UT, mT, WT, zT, MT, gT) {
        if (this._webGLVersion < 2) throw new Error("_readPixelsAsync only work on WebGL2+");
        const nT = this._gl,
          HT = nT.createBuffer();
        nT.bindBuffer(nT.PIXEL_PACK_BUFFER, HT), nT.bufferData(nT.PIXEL_PACK_BUFFER, gT.byteLength, nT.STREAM_READ), nT.readPixels(TT, UT, mT, WT, zT, MT, 0), nT.bindBuffer(nT.PIXEL_PACK_BUFFER, null);
        const kT = nT.fenceSync(nT.SYNC_GPU_COMMANDS_COMPLETE, 0);
        return kT ? (nT.flush(), this._clientWaitAsync(kT, 0, 10).then((() => (nT.deleteSync(kT), nT.bindBuffer(nT.PIXEL_PACK_BUFFER, HT), nT.getBufferSubData(nT.PIXEL_PACK_BUFFER, 0, gT), nT.bindBuffer(nT.PIXEL_PACK_BUFFER, null), nT.deleteBuffer(HT), gT)))) : null
      }
      dispose() {
        this.hideLoadingUI?.(), this._rescalePostProcess && this._rescalePostProcess.dispose(),
          function(TT, UT) {
            1 === zT.c.Instances.length && LT.c.audioEngine && (LT.c.audioEngine.dispose(), LT.c.audioEngine = null);
            const mT = TT.getHostWindow();
            mT && "function" === typeof mT.removeEventListener && (mT.removeEventListener("blur", TT._onBlur), mT.removeEventListener("focus", TT._onFocus)), UT && (UT.removeEventListener("focus", TT._onCanvasFocus), UT.removeEventListener("blur", TT._onCanvasBlur), UT.removeEventListener("pointerout", TT._onCanvasPointerOut), UT.removeEventListener("contextmenu", TT._onCanvasContextMenu)), (0, pT.d)() && (document.removeEventListener("fullscreenchange", TT._onFullscreenChange), document.removeEventListener("mozfullscreenchange", TT._onFullscreenChange), document.removeEventListener("webkitfullscreenchange", TT._onFullscreenChange), document.removeEventListener("msfullscreenchange", TT._onFullscreenChange), document.removeEventListener("pointerlockchange", TT._onPointerLockChange), document.removeEventListener("mspointerlockchange", TT._onPointerLockChange), document.removeEventListener("mozpointerlockchange", TT._onPointerLockChange), document.removeEventListener("webkitpointerlockchange", TT._onPointerLockChange))
          }(this, this._renderingCanvas), super.dispose()
      }
    }
    bT.ALPHA_DISABLE = 0, bT.ALPHA_ADD = 1, bT.ALPHA_COMBINE = 2, bT.ALPHA_SUBTRACT = 3, bT.ALPHA_MULTIPLY = 4, bT.ALPHA_MAXIMIZED = 5, bT.ALPHA_ONEONE = 6, bT.ALPHA_PREMULTIPLIED = 7, bT.ALPHA_PREMULTIPLIED_PORTERDUFF = 8, bT.ALPHA_INTERPOLATE = 9, bT.ALPHA_SCREENMODE = 10, bT.DELAYLOADSTATE_NONE = 0, bT.DELAYLOADSTATE_LOADED = 1, bT.DELAYLOADSTATE_LOADING = 2, bT.DELAYLOADSTATE_NOTLOADED = 4, bT.NEVER = 512, bT.ALWAYS = 519, bT.LESS = 513, bT.EQUAL = 514, bT.LEQUAL = 515, bT.GREATER = 516, bT.GEQUAL = 518, bT.NOTEQUAL = 517, bT.KEEP = 7680, bT.REPLACE = 7681, bT.INCR = 7682, bT.DECR = 7683, bT.INVERT = 5386, bT.INCR_WRAP = 34055, bT.DECR_WRAP = 34056, bT.TEXTURE_CLAMP_ADDRESSMODE = 0, bT.TEXTURE_WRAP_ADDRESSMODE = 1, bT.TEXTURE_MIRROR_ADDRESSMODE = 2, bT.TEXTUREFORMAT_ALPHA = 0, bT.TEXTUREFORMAT_LUMINANCE = 1, bT.TEXTUREFORMAT_LUMINANCE_ALPHA = 2, bT.TEXTUREFORMAT_RGB = 4, bT.TEXTUREFORMAT_RGBA = 5, bT.TEXTUREFORMAT_RED = 6, bT.TEXTUREFORMAT_R = 6, bT.TEXTUREFORMAT_R16_UNORM = 33322, bT.TEXTUREFORMAT_RG16_UNORM = 33324, bT.TEXTUREFORMAT_RGB16_UNORM = 32852, bT.TEXTUREFORMAT_RGBA16_UNORM = 32859, bT.TEXTUREFORMAT_R16_SNORM = 36760, bT.TEXTUREFORMAT_RG16_SNORM = 36761, bT.TEXTUREFORMAT_RGB16_SNORM = 36762, bT.TEXTUREFORMAT_RGBA16_SNORM = 36763, bT.TEXTUREFORMAT_RG = 7, bT.TEXTUREFORMAT_RED_INTEGER = 8, bT.TEXTUREFORMAT_R_INTEGER = 8, bT.TEXTUREFORMAT_RG_INTEGER = 9, bT.TEXTUREFORMAT_RGB_INTEGER = 10, bT.TEXTUREFORMAT_RGBA_INTEGER = 11, bT.TEXTURETYPE_UNSIGNED_BYTE = 0, bT.TEXTURETYPE_UNSIGNED_INT = 0, bT.TEXTURETYPE_FLOAT = 1, bT.TEXTURETYPE_HALF_FLOAT = 2, bT.TEXTURETYPE_BYTE = 3, bT.TEXTURETYPE_SHORT = 4, bT.TEXTURETYPE_UNSIGNED_SHORT = 5, bT.TEXTURETYPE_INT = 6, bT.TEXTURETYPE_UNSIGNED_INTEGER = 7, bT.TEXTURETYPE_UNSIGNED_SHORT_4_4_4_4 = 8, bT.TEXTURETYPE_UNSIGNED_SHORT_5_5_5_1 = 9, bT.TEXTURETYPE_UNSIGNED_SHORT_5_6_5 = 10, bT.TEXTURETYPE_UNSIGNED_INT_2_10_10_10_REV = 11, bT.TEXTURETYPE_UNSIGNED_INT_24_8 = 12, bT.TEXTURETYPE_UNSIGNED_INT_10F_11F_11F_REV = 13, bT.TEXTURETYPE_UNSIGNED_INT_5_9_9_9_REV = 14, bT.TEXTURETYPE_FLOAT_32_UNSIGNED_INT_24_8_REV = 15, bT.TEXTURE_NEAREST_SAMPLINGMODE = 1, bT.TEXTURE_BILINEAR_SAMPLINGMODE = 2, bT.TEXTURE_TRILINEAR_SAMPLINGMODE = 3, bT.TEXTURE_NEAREST_NEAREST_MIPLINEAR = 8, bT.TEXTURE_LINEAR_LINEAR_MIPNEAREST = 11, bT.TEXTURE_LINEAR_LINEAR_MIPLINEAR = 3, bT.TEXTURE_NEAREST_NEAREST_MIPNEAREST = 4, bT.TEXTURE_NEAREST_LINEAR_MIPNEAREST = 5, bT.TEXTURE_NEAREST_LINEAR_MIPLINEAR = 6, bT.TEXTURE_NEAREST_LINEAR = 7, bT.TEXTURE_NEAREST_NEAREST = 1, bT.TEXTURE_LINEAR_NEAREST_MIPNEAREST = 9, bT.TEXTURE_LINEAR_NEAREST_MIPLINEAR = 10, bT.TEXTURE_LINEAR_LINEAR = 2, bT.TEXTURE_LINEAR_NEAREST = 12, bT.TEXTURE_EXPLICIT_MODE = 0, bT.TEXTURE_SPHERICAL_MODE = 1, bT.TEXTURE_PLANAR_MODE = 2, bT.TEXTURE_CUBIC_MODE = 3, bT.TEXTURE_PROJECTION_MODE = 4, bT.TEXTURE_SKYBOX_MODE = 5, bT.TEXTURE_INVCUBIC_MODE = 6, bT.TEXTURE_EQUIRECTANGULAR_MODE = 7, bT.TEXTURE_FIXED_EQUIRECTANGULAR_MODE = 8, bT.TEXTURE_FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9, bT.SCALEMODE_FLOOR = 1, bT.SCALEMODE_NEAREST = 2, bT.SCALEMODE_CEILING = 3
  },
  40073: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => zT
    });
    var WT = mT(40036);
    class zT {
      get depthStencilTexture() {
        return this._depthStencilTexture
      }
      setDepthStencilTexture(TT) {
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && this._depthStencilTexture && this._depthStencilTexture.dispose(), this._depthStencilTexture = TT, this._generateDepthBuffer = this._generateStencilBuffer = this._depthStencilTextureWithStencil = !1, TT && (this._generateDepthBuffer = !0, this._generateStencilBuffer = this._depthStencilTextureWithStencil = (0, WT.c)(TT.format))
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
      getBaseArrayLayer(TT) {
        if (!this._textures) return -1;
        const UT = this._textures[TT],
          mT = this._layerIndices?.[TT] ?? 0,
          WT = this._faceIndices?.[TT] ?? 0;
        return UT.isCube ? 6 * mT + WT : UT.is3D ? 0 : mT
      }
      get samples() {
        return this._samples
      }
      setSamples(TT) {
        let UT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          mT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.samples === TT && !mT) return TT;
        const WT = this._isMulti ? this._engine.updateMultipleRenderTargetTextureSampleCount(this, TT, UT) : this._engine.updateRenderTargetTextureSampleCount(this, TT);
        return this._samples = TT, WT
      }
      resolveMSAATextures() {
        this.isMulti ? this._engine.resolveMultiFramebuffer(this) : this._engine.resolveFramebuffer(this)
      }
      generateMipMaps() {
        this._engine._currentRenderTarget === this && (this.isMulti ? this._engine.unBindMultiColorAttachmentFramebuffer(this, !0) : this._engine.unBindFramebuffer(this, !0)), this.isMulti ? this._engine.generateMipMapsMultiFramebuffer(this) : this._engine.generateMipMapsFramebuffer(this)
      }
      constructor(TT, UT, mT, WT, zT) {
        this._textures = null, this._faceIndices = null, this._layerIndices = null, this._samples = 1, this._attachments = null, this._generateStencilBuffer = !1, this._generateDepthBuffer = !1, this._depthStencilTextureWithStencil = !1, this.disableAutomaticMSAAResolve = !1, this.resolveMSAAColors = !0, this.resolveMSAADepth = !1, this.resolveMSAAStencil = !1, this.depthReadOnly = !1, this.stencilReadOnly = !1, this._isMulti = TT, this._isCube = UT, this._size = mT, this._engine = WT, this._depthStencilTexture = null, this.label = zT
      }
      setTextures(TT) {
        Array.isArray(TT) ? this._textures = TT : this._textures = TT ? [TT] : null
      }
      setTexture(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          mT = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._textures || (this._textures = []), this._textures[UT] !== TT && (this._textures[UT] && mT && this._textures[UT].dispose(), this._textures[UT] = TT)
      }
      setLayerAndFaceIndices(TT, UT) {
        this._layerIndices = TT, this._faceIndices = UT
      }
      setLayerAndFaceIndex() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          UT = arguments.length > 1 ? arguments[1] : void 0,
          mT = arguments.length > 2 ? arguments[2] : void 0;
        this._layerIndices || (this._layerIndices = []), this._faceIndices || (this._faceIndices = []), void 0 !== UT && UT >= 0 && (this._layerIndices[TT] = UT), void 0 !== mT && mT >= 0 && (this._faceIndices[TT] = mT)
      }
      createDepthStencilTexture() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          UT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          mT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          MT = arguments.length > 5 ? arguments[5] : void 0;
        return this._depthStencilTexture?.dispose(), this._depthStencilTextureWithStencil = mT, this._depthStencilTextureLabel = MT, this._depthStencilTexture = this._engine.createDepthStencilTexture(this._size, {
          bilinearFiltering: UT,
          comparisonFunction: TT,
          generateStencil: mT,
          isCube: this._isCube,
          samples: WT,
          depthTextureFormat: zT,
          label: MT
        }, this), this._depthStencilTexture
      }
      _shareDepth(TT) {
        this.shareDepth(TT)
      }
      shareDepth(TT) {
        this._depthStencilTexture && (TT._depthStencilTexture && TT._depthStencilTexture.dispose(), TT._depthStencilTexture = this._depthStencilTexture, TT._depthStencilTextureWithStencil = this._depthStencilTextureWithStencil, this._depthStencilTexture.incrementReferences())
      }
      _swapAndDie(TT) {
        this.texture && this.texture._swapAndDie(TT), this._textures = null, this.dispose(!0)
      }
      _cloneRenderTargetWrapper() {
        let TT = null;
        if (this._isMulti) {
          const UT = this.textures;
          if (UT && UT.length > 0) {
            let mT = !1,
              WT = UT.length,
              zT = -1;
            const MT = UT[UT.length - 1]._source;
            14 !== MT && 12 !== MT || (mT = !0, zT = UT[UT.length - 1].format, WT--);
            const gT = [],
              nT = [],
              HT = [],
              kT = [],
              jT = [],
              lT = [],
              LT = [],
              pT = {};
            for (let TT = 0; TT < WT; ++TT) {
              const mT = UT[TT];
              gT.push(mT.samplingMode), nT.push(mT.type), HT.push(mT.format);
              void 0 !== pT[mT.uniqueId] ? (kT.push(-1), LT.push(0)) : (pT[mT.uniqueId] = TT, mT.is2DArray ? (kT.push(35866), LT.push(mT.depth)) : mT.isCube ? (kT.push(34067), LT.push(0)) : mT.is3D ? (kT.push(32879), LT.push(mT.depth)) : (kT.push(3553), LT.push(0))), this._faceIndices && jT.push(this._faceIndices[TT] ?? 0), this._layerIndices && lT.push(this._layerIndices[TT] ?? 0)
            }
            const BT = {
                samplingModes: gT,
                generateMipMaps: UT[0].generateMipMaps,
                generateDepthBuffer: this._generateDepthBuffer,
                generateStencilBuffer: this._generateStencilBuffer,
                generateDepthTexture: mT,
                depthTextureFormat: zT,
                types: nT,
                formats: HT,
                RgT: WT,
                targetTypes: kT,
                faceIndex: jT,
                layerIndex: lT,
                layerCounts: LT,
                label: this.label
              },
              ZT = {
                width: this.width,
                height: this.height,
                depth: this.depth
              };
            TT = this._engine.createMultipleRenderTarget(ZT, BT);
            for (let cT = 0; cT < WT; ++cT) {
              if (-1 !== kT[cT]) continue;
              const mT = pT[UT[cT].uniqueId];
              TT.setTexture(TT.textures[mT], cT)
            }
          }
        } else {
          const UT = {};
          if (UT.generateDepthBuffer = this._generateDepthBuffer, UT.generateMipMaps = this.texture?.generateMipMaps ?? !1, UT.generateStencilBuffer = this._generateStencilBuffer, UT.samplingMode = this.texture?.samplingMode, UT.type = this.texture?.type, UT.format = this.texture?.format, UT.noColorAttachment = !this._textures, UT.label = this.label, this.isCube) TT = this._engine.createRenderTargetCubeTexture(this.width, UT);
          else {
            const mT = {
              width: this.width,
              height: this.height,
              layers: this.is2DArray || this.is3D ? this.texture?.depth : void 0
            };
            TT = this._engine.createRenderTargetTexture(mT, UT)
          }
          TT.texture && (TT.texture.isReady = !0)
        }
        return TT
      }
      _swapRenderTargetWrapper(TT) {
        if (this._textures && TT._textures)
          for (let UT = 0; UT < this._textures.length; ++UT) this._textures[UT]._swapAndDie(TT._textures[UT], !1), TT._textures[UT].isReady = !0;
        this._depthStencilTexture && TT._depthStencilTexture && (this._depthStencilTexture._swapAndDie(TT._depthStencilTexture), TT._depthStencilTexture.isReady = !0), this._textures = null, this._depthStencilTexture = null
      }
      _rebuild() {
        const TT = this._cloneRenderTargetWrapper();
        if (TT) {
          if (this._depthStencilTexture) {
            const UT = this._depthStencilTexture.samplingMode,
              mT = this._depthStencilTexture.format,
              WT = 2 === UT || 3 === UT || 11 === UT;
            TT.createDepthStencilTexture(this._depthStencilTexture._comparisonFunction, WT, this._depthStencilTextureWithStencil, this._depthStencilTexture.samples, mT, this._depthStencilTextureLabel)
          }
          this.samples > 1 && TT.setSamples(this.samples), TT._swapRenderTargetWrapper(this), TT.dispose()
        }
      }
      releaseTextures() {
        if (this._textures)
          for (let TT = 0; TT < this._textures.length; ++TT) this._textures[TT].dispose();
        this._textures = null
      }
      dispose() {
        arguments.length > 0 && void 0 !== arguments[0] && arguments[0] || (this._depthStencilTexture?.dispose(), this._depthStencilTexture = null, this.releaseTextures()), this._engine._releaseRenderTargetWrapper(this)
      }
    }
  },
  40557: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => WT
    });
    class WT {
      static get ForceFullSceneLoadingForIncremental() {
        return WT._ForceFullSceneLoadingForIncremental
      }
      static set ForceFullSceneLoadingForIncremental(TT) {
        WT._ForceFullSceneLoadingForIncremental = TT
      }
      static get ShowLoadingScreen() {
        return WT._ShowLoadingScreen
      }
      static set ShowLoadingScreen(TT) {
        WT._ShowLoadingScreen = TT
      }
      static get loggingLevel() {
        return WT._LoggingLevel
      }
      static set loggingLevel(TT) {
        WT._LoggingLevel = TT
      }
      static get CleanBoneMatrixWeights() {
        return WT._CleanBoneMatrixWeights
      }
      static set CleanBoneMatrixWeights(TT) {
        WT._CleanBoneMatrixWeights = TT
      }
    }
    WT._ForceFullSceneLoadingForIncremental = !1, WT._ShowLoadingScreen = !0, WT._CleanBoneMatrixWeights = !1, WT._LoggingLevel = 0
  },
  40183: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => gT
    });
    var WT = mT(38800);
    const zT = new Map;

    function MT(TT, UT) {
      (function(TT) {
        return zT.delete(TT)
      })(TT) && WT.b.Warn(`Extension with the name '${TT}' already exists`), zT.set(TT, UT)
    }

    function gT(TT, UT) {
      "image/ktx" !== UT && "image/ktx2" !== UT || (TT = ".ktx"), zT.has(TT) || (TT.endsWith(".ies") && MT(".ies", (async () => await mT.e(314).then((() => mT(41916))).then((TT => new TT._IESTextureLoader)))), TT.endsWith(".dds") && MT(".dds", (async () => await mT.e(312).then((() => mT(41921))).then((TT => new TT._DDSTextureLoader)))), TT.endsWith(".basis") && MT(".basis", (async () => await mT.e(315).then((() => mT(41926))).then((TT => new TT._BasisTextureLoader)))), TT.endsWith(".env") && MT(".env", (async () => await Promise.all([mT.e(316), mT.e(313)]).then((() => mT(41935))).then((TT => new TT._ENVTextureLoader)))), TT.endsWith(".hdr") && MT(".hdr", (async () => await mT.e(317).then((() => mT(41984))).then((TT => new TT._HDRTextureLoader)))), (TT.endsWith(".ktx") || TT.endsWith(".ktx2")) && (MT(".ktx", (async () => await mT.e(318).then((() => mT(41989))).then((TT => new TT._KTXTextureLoader)))), MT(".ktx2", (async () => await mT.e(318).then((() => mT(41989))).then((TT => new TT._KTXTextureLoader))))), TT.endsWith(".tga") && MT(".tga", (async () => await mT.e(319).then((() => mT(41997))).then((TT => new TT._TGATextureLoader)))), TT.endsWith(".exr") && MT(".exr", (async () => await mT.e(320).then((() => mT(42e3))).then((TT => new TT._ExrTextureLoader)))));
      const WT = zT.get(TT);
      return WT ? Promise.resolve(WT(UT)) : null
    }
  },
  40571: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => gT,
      i: () => kT
    });
    var WT = mT(40413),
      zT = mT(40129),
      MT = mT(37239);
    class gT extends WT.b {
      get w6() {
        return this._subMaterials
      }
      set w6(TT) {
        this._subMaterials = TT, this._hookArray(TT)
      }
      getChildren() {
        return this.w6
      }
      constructor(TT, UT) {
        super(TT, UT, !0), this._waitingSubMaterialsUniqueIds = [], this.KF().addMultiMaterial(this), this.w6 = [], this._storeEffectOnSubMeshes = !0
      }
      _hookArray(TT) {
        var UT = this;
        const mT = TT.push;
        TT.push = function() {
          for (var WT = arguments.length, zT = new Array(WT), MT = 0; MT < WT; MT++) zT[MT] = arguments[MT];
          const gT = mT.apply(TT, zT);
          return UT._markAllSubMeshesAsTexturesDirty(), gT
        };
        const WT = TT.splice;
        TT.splice = (UT, mT) => {
          const zT = WT.call(TT, UT, mT ?? TT.length);
          return this._markAllSubMeshesAsTexturesDirty(), zT
        }
      }
      getSubMaterial(TT) {
        return TT < 0 || TT >= this.w6.length ? this.KF().defaultMaterial : this.w6[TT]
      }
      getActiveTextures() {
        return super.getActiveTextures().concat(...this.w6.map((TT => TT ? TT.getActiveTextures() : [])))
      }
      hasTexture(TT) {
        if (super.hasTexture(TT)) return !0;
        for (let UT = 0; UT < this.w6.length; UT++)
          if (this.w6[UT]?.hasTexture(TT)) return !0;
        return !1
      }
      getClassName() {
        return "MultiMaterial"
      }
      isReadyForSubMesh(TT, UT, mT) {
        for (let WT = 0; WT < this.w6.length; WT++) {
          const zT = this.w6[WT];
          if (zT) {
            if (zT._storeEffectOnSubMeshes) {
              if (!zT.isReadyForSubMesh(TT, UT, mT)) return !1;
              continue
            }
            if (!zT.isReady(TT)) return !1
          }
        }
        return !0
      }
      clone(TT, UT) {
        const mT = new gT(TT, this.KF());
        for (let WT = 0; WT < this.w6.length; WT++) {
          let zT;
          const MT = this.w6[WT];
          zT = UT && MT ? MT.clone(TT + "-" + MT.name) : this.w6[WT], mT.w6.push(zT)
        }
        return mT
      }
      serialize() {
        const TT = {};
        TT.name = this.name, TT.id = this.id, TT.uniqueId = this.uniqueId, zT.b && (TT.tags = zT.b.GetTags(this)), TT.materialsUniqueIds = [], TT.materials = [];
        for (let UT = 0; UT < this.w6.length; UT++) {
          const mT = this.w6[UT];
          mT ? (TT.materialsUniqueIds.push(mT.uniqueId), TT.materials.push(mT.id)) : (TT.materialsUniqueIds.push(null), TT.materials.push(null))
        }
        return TT
      }
      dispose(TT, UT, mT) {
        const WT = this.KF();
        if (!WT) return;
        if (mT)
          for (let MT = 0; MT < this.w6.length; MT++) {
            const mT = this.w6[MT];
            mT && mT.dispose(TT, UT)
          }
        const zT = WT.multiMaterials.indexOf(this);
        zT >= 0 && WT.multiMaterials.splice(zT, 1), super.dispose(TT, UT)
      }
    }
    let nT = !1;

    function HT(TT, UT) {
      const mT = new gT(TT.name, UT);
      if (mT.id = TT.id, mT._loadedUniqueId = TT.uniqueId, zT.b && zT.b.AddTagsTo(mT, TT.tags), TT.materialsUniqueIds) mT._waitingSubMaterialsUniqueIds = TT.materialsUniqueIds;
      else
        for (const WT of TT.materials) mT.w6.push(UT.getLastMaterialById(WT));
      return mT
    }

    function kT() {
      nT || (nT = !0, gT.ParseMultiMaterial = HT, (0, MT.h)("BABYLON.MultiMaterial", gT))
    }
  },
  40338: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => gT
    });
    var WT, zT, MT = mT(37188);
    ! function(TT) {
      TT[TT.LOCAL = 0] = "LOCAL", TT[TT.WORLD = 1] = "WORLD", TT[TT.BONE = 2] = "BONE"
    }(WT || (WT = {}));
    class gT {}
    gT.X = new MT.p(1, 0, 0), gT.Y = new MT.p(0, 1, 0), gT.Z = new MT.p(0, 0, 1),
      function(TT) {
        TT[TT.X = 0] = "X", TT[TT.Y = 1] = "Y", TT[TT.Z = 2] = "Z"
      }(zT || (zT = {}))
  },
  40080: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => HT,
      c: () => kT
    });
    var WT = mT(37188);
    const zT = [Math.sqrt(1 / (4 * Math.PI)), -Math.sqrt(3 / (4 * Math.PI)), Math.sqrt(3 / (4 * Math.PI)), -Math.sqrt(3 / (4 * Math.PI)), Math.sqrt(15 / (4 * Math.PI)), -Math.sqrt(15 / (4 * Math.PI)), Math.sqrt(5 / (16 * Math.PI)), -Math.sqrt(15 / (4 * Math.PI)), Math.sqrt(15 / (16 * Math.PI))],
      MT = [() => 1, TT => TT.y, TT => TT.z, TT => TT.x, TT => TT.x * TT.y, TT => TT.y * TT.z, TT => 3 * TT.z * TT.z - 1, TT => TT.x * TT.z, TT => TT.x * TT.x - TT.y * TT.y],
      gT = (TT, UT) => zT[TT] * MT[TT](UT),
      nT = [Math.PI, 2 * Math.PI / 3, 2 * Math.PI / 3, 2 * Math.PI / 3, Math.PI / 4, Math.PI / 4, Math.PI / 4, Math.PI / 4, Math.PI / 4];
    class HT {
      constructor() {
        this.preScaled = !1, this.l00 = WT.p.Zero(), this.l1_1 = WT.p.Zero(), this.l10 = WT.p.Zero(), this.l11 = WT.p.Zero(), this.l2_2 = WT.p.Zero(), this.l2_1 = WT.p.Zero(), this.l20 = WT.p.Zero(), this.l21 = WT.p.Zero(), this.l22 = WT.p.Zero()
      }
      addLight(TT, UT, mT) {
        WT.l.JB[0].set(UT.r, UT.g, UT.b);
        const zT = WT.l.JB[0],
          MT = WT.l.JB[1];
        zT.scaleToRef(mT, MT), MT.scaleToRef(gT(0, TT), WT.l.JB[2]), this.l00.addInPlace(WT.l.JB[2]), MT.scaleToRef(gT(1, TT), WT.l.JB[2]), this.l1_1.addInPlace(WT.l.JB[2]), MT.scaleToRef(gT(2, TT), WT.l.JB[2]), this.l10.addInPlace(WT.l.JB[2]), MT.scaleToRef(gT(3, TT), WT.l.JB[2]), this.l11.addInPlace(WT.l.JB[2]), MT.scaleToRef(gT(4, TT), WT.l.JB[2]), this.l2_2.addInPlace(WT.l.JB[2]), MT.scaleToRef(gT(5, TT), WT.l.JB[2]), this.l2_1.addInPlace(WT.l.JB[2]), MT.scaleToRef(gT(6, TT), WT.l.JB[2]), this.l20.addInPlace(WT.l.JB[2]), MT.scaleToRef(gT(7, TT), WT.l.JB[2]), this.l21.addInPlace(WT.l.JB[2]), MT.scaleToRef(gT(8, TT), WT.l.JB[2]), this.l22.addInPlace(WT.l.JB[2])
      }
      scaleInPlace(TT) {
        this.l00.scaleInPlace(TT), this.l1_1.scaleInPlace(TT), this.l10.scaleInPlace(TT), this.l11.scaleInPlace(TT), this.l2_2.scaleInPlace(TT), this.l2_1.scaleInPlace(TT), this.l20.scaleInPlace(TT), this.l21.scaleInPlace(TT), this.l22.scaleInPlace(TT)
      }
      convertIncidentRadianceToIrradiance() {
        this.l00.scaleInPlace(nT[0]), this.l1_1.scaleInPlace(nT[1]), this.l10.scaleInPlace(nT[2]), this.l11.scaleInPlace(nT[3]), this.l2_2.scaleInPlace(nT[4]), this.l2_1.scaleInPlace(nT[5]), this.l20.scaleInPlace(nT[6]), this.l21.scaleInPlace(nT[7]), this.l22.scaleInPlace(nT[8])
      }
      convertIrradianceToLambertianRadiance() {
        this.scaleInPlace(1 / Math.PI)
      }
      preScaleForRendering() {
        this.preScaled = !0, this.l00.scaleInPlace(zT[0]), this.l1_1.scaleInPlace(zT[1]), this.l10.scaleInPlace(zT[2]), this.l11.scaleInPlace(zT[3]), this.l2_2.scaleInPlace(zT[4]), this.l2_1.scaleInPlace(zT[5]), this.l20.scaleInPlace(zT[6]), this.l21.scaleInPlace(zT[7]), this.l22.scaleInPlace(zT[8])
      }
      updateFromArray(TT) {
        return WT.p.FromArrayToRef(TT[0], 0, this.l00), WT.p.FromArrayToRef(TT[1], 0, this.l1_1), WT.p.FromArrayToRef(TT[2], 0, this.l10), WT.p.FromArrayToRef(TT[3], 0, this.l11), WT.p.FromArrayToRef(TT[4], 0, this.l2_2), WT.p.FromArrayToRef(TT[5], 0, this.l2_1), WT.p.FromArrayToRef(TT[6], 0, this.l20), WT.p.FromArrayToRef(TT[7], 0, this.l21), WT.p.FromArrayToRef(TT[8], 0, this.l22), this
      }
      updateFromFloatsArray(TT) {
        return WT.p.FromFloatsToRef(TT[0], TT[1], TT[2], this.l00), WT.p.FromFloatsToRef(TT[3], TT[4], TT[5], this.l1_1), WT.p.FromFloatsToRef(TT[6], TT[7], TT[8], this.l10), WT.p.FromFloatsToRef(TT[9], TT[10], TT[11], this.l11), WT.p.FromFloatsToRef(TT[12], TT[13], TT[14], this.l2_2), WT.p.FromFloatsToRef(TT[15], TT[16], TT[17], this.l2_1), WT.p.FromFloatsToRef(TT[18], TT[19], TT[20], this.l20), WT.p.FromFloatsToRef(TT[21], TT[22], TT[23], this.l21), WT.p.FromFloatsToRef(TT[24], TT[25], TT[26], this.l22), this
      }
      static FromArray(TT) {
        return (new HT).updateFromArray(TT)
      }
      static FromPolynomial(TT) {
        const UT = new HT;
        return UT.l00 = TT.xx.scale(.376127).add(TT.yy.scale(.376127)).add(TT.zz.scale(.376126)), UT.l1_1 = TT.y.scale(.977204), UT.l10 = TT.z.scale(.977204), UT.l11 = TT.x.scale(.977204), UT.l2_2 = TT.xy.scale(1.16538), UT.l2_1 = TT.yz.scale(1.16538), UT.l20 = TT.zz.scale(1.34567).subtract(TT.xx.scale(.672834)).subtract(TT.yy.scale(.672834)), UT.l21 = TT.zx.scale(1.16538), UT.l22 = TT.xx.scale(1.16538).subtract(TT.yy.scale(1.16538)), UT.l1_1.scaleInPlace(-1), UT.l11.scaleInPlace(-1), UT.l2_1.scaleInPlace(-1), UT.l21.scaleInPlace(-1), UT.scaleInPlace(Math.PI), UT
      }
    }
    class kT {
      constructor() {
        this.x = WT.p.Zero(), this.y = WT.p.Zero(), this.z = WT.p.Zero(), this.xx = WT.p.Zero(), this.yy = WT.p.Zero(), this.zz = WT.p.Zero(), this.xy = WT.p.Zero(), this.yz = WT.p.Zero(), this.zx = WT.p.Zero()
      }
      get preScaledHarmonics() {
        return this._harmonics || (this._harmonics = HT.FromPolynomial(this)), this._harmonics.preScaled || this._harmonics.preScaleForRendering(), this._harmonics
      }
      addAmbient(TT) {
        WT.l.JB[0].J9(TT.r, TT.g, TT.b);
        const UT = WT.l.JB[0];
        this.xx.addInPlace(UT), this.yy.addInPlace(UT), this.zz.addInPlace(UT)
      }
      scaleInPlace(TT) {
        this.x.scaleInPlace(TT), this.y.scaleInPlace(TT), this.z.scaleInPlace(TT), this.xx.scaleInPlace(TT), this.yy.scaleInPlace(TT), this.zz.scaleInPlace(TT), this.yz.scaleInPlace(TT), this.zx.scaleInPlace(TT), this.xy.scaleInPlace(TT)
      }
      updateFromHarmonics(TT) {
        return this._harmonics = TT, this.x.Gw(TT.l11), this.x.scaleInPlace(1.02333).scaleInPlace(-1), this.y.Gw(TT.l1_1), this.y.scaleInPlace(1.02333).scaleInPlace(-1), this.z.Gw(TT.l10), this.z.scaleInPlace(1.02333), this.xx.Gw(TT.l00), WT.l.JB[0].Gw(TT.l20).scaleInPlace(.247708), WT.l.JB[1].Gw(TT.l22).scaleInPlace(.429043), this.xx.scaleInPlace(.886277).FWT(WT.l.JB[0]).addInPlace(WT.l.JB[1]), this.yy.Gw(TT.l00), this.yy.scaleInPlace(.886277).FWT(WT.l.JB[0]).FWT(WT.l.JB[1]), this.zz.Gw(TT.l00), WT.l.JB[0].Gw(TT.l20).scaleInPlace(.495417), this.zz.scaleInPlace(.886277).addInPlace(WT.l.JB[0]), this.yz.Gw(TT.l2_1), this.yz.scaleInPlace(.858086).scaleInPlace(-1), this.zx.Gw(TT.l21), this.zx.scaleInPlace(.858086).scaleInPlace(-1), this.xy.Gw(TT.l2_2), this.xy.scaleInPlace(.858086), this.scaleInPlace(1 / Math.PI), this
      }
      static FromHarmonics(TT) {
        return (new kT).updateFromHarmonics(TT)
      }
      static FromArray(TT) {
        const UT = new kT;
        return WT.p.FromArrayToRef(TT[0], 0, UT.x), WT.p.FromArrayToRef(TT[1], 0, UT.y), WT.p.FromArrayToRef(TT[2], 0, UT.z), WT.p.FromArrayToRef(TT[3], 0, UT.xx), WT.p.FromArrayToRef(TT[4], 0, UT.yy), WT.p.FromArrayToRef(TT[5], 0, UT.zz), WT.p.FromArrayToRef(TT[6], 0, UT.yz), WT.p.FromArrayToRef(TT[7], 0, UT.zx), WT.p.FromArrayToRef(TT[8], 0, UT.xy), UT
      }
    }
  },
  40567: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => yT,
      g: () => IT
    });
    var WT = mT(40095),
      zT = mT(37219),
      MT = mT(37188),
      gT = mT(40257),
      nT = mT(40546),
      HT = mT(40569),
      kT = mT(40251),
      jT = mT(40432),
      lT = mT(40242);
    class LT {
      constructor() {
        this._checkCollisions = !1, this._collisionMask = -1, this._collisionGroup = -1, this._surroundingMeshes = null, this._collider = null, this._oldPositionForCollisions = new MT.p(0, 0, 0), this._diffPositionForCollisions = new MT.p(0, 0, 0), this._collisionResponse = !0
      }
    }
    var pT, BT, ZT, cT = mT(39965),
      vT = mT(40178),
      fT = mT(40444),
      qT = mT(37367),
      iT = mT(37196),
      bT = mT(40338),
      OT = mT(38800),
      eT = mT(40102),
      YT = mT(39982),
      JT = mT(37239);

    function xT(TT, UT) {
      return TT - Math.floor(TT / UT) * UT
    }

    function dT(TT, UT, mT) {
      TT instanceof Float32Array ? MT.e.FromArrayToRef(TT, UT, mT) : mT.J9((0, vT.c)(TT[UT]), (0, vT.c)(TT[UT + 1]), (0, vT.c)(TT[UT + 2]), (0, vT.c)(TT[UT + 3]), (0, vT.c)(TT[UT + 4]), (0, vT.c)(TT[UT + 5]), (0, vT.c)(TT[UT + 6]), (0, vT.c)(TT[UT + 7]), (0, vT.c)(TT[UT + 8]), (0, vT.c)(TT[UT + 9]), (0, vT.c)(TT[UT + 10]), (0, vT.c)(TT[UT + 11]), (0, vT.c)(TT[UT + 12]), (0, vT.c)(TT[UT + 13]), (0, vT.c)(TT[UT + 14]), (0, vT.c)(TT[UT + 15]))
    }

    function wT(TT, UT, mT, WT, zT, nT, HT, kT, jT) {
      const lT = mT.texture,
        LT = lT?.getInternalTexture(),
        pT = LT?._bufferView;
      if (!(pT instanceof Float32Array) && !(pT instanceof Uint16Array)) return OT.b.Warn("Baked vertex animation bounding info requires CPU-readable Float32Array or Uint16Array texture data.", 1), !1;
      const BT = lT.getSize(),
        ZT = function(TT, UT) {
          const mT = TT.y - TT.x + 1,
            WT = UT * TT.w / mT,
            zT = WT < 1 ? 0 : 1,
            MT = mT - zT;
          let gT = xT(WT - Math.floor(WT), 1) * MT;
          return gT = xT(gT + TT.z, MT), Math.floor(gT) + TT.x + zT
        }(WT, mT.time);
      if (!isFinite(ZT) || ZT < 0 || ZT >= BT.height) return OT.b.Warn("Baked vertex animation bounding info could not be refreshed because the computed frame is outside the texture.", 1), !1;
      const cT = MT.l.JB[0],
        vT = MT.l.Matrix[0],
        fT = MT.l.Matrix[1],
        qT = ZT * BT.width * 4,
        iT = UT === gT.i.NormalKind ? MT.p.TransformNormalFromFloatsToRef : MT.p.TransformCoordinatesFromFloatsToRef;
      for (let MT = 0, gT = 0; MT < TT.length; MT += 3, gT += 4) {
        let UT, mT;
        for (vT.reset(), UT = 0; UT < 4 && UT < jT; UT++) mT = nT[gT + UT], mT > 0 && (dT(pT, qT + 16 * Math.floor(zT[gT + UT]), fT), fT.scaleAndAddToRef(mT, vT));
        if (HT && kT)
          for (UT = 0; UT < 4 && UT + 4 < jT; UT++) mT = kT[gT + UT], mT > 0 && (dT(pT, qT + 16 * Math.floor(HT[gT + UT]), fT), fT.scaleAndAddToRef(mT, vT));
        iT(TT[MT], TT[MT + 1], TT[MT + 2], vT, cT), cT.toArray(TT, MT)
      }
      return !0
    }
    class tT {
      constructor() {
        this.facetNb = 0, this.partitioningSubdivisions = 10, this.partitioningBBoxRatio = 1.01, this.facetDataEnabled = !1, this.facetParameters = {}, this.bbSize = MT.p.Zero(), this.subDiv = {
          max: 1,
          X: 1,
          Y: 1,
          Z: 1
        }, this.facetDepthSort = !1, this.facetDepthSortEnabled = !1
      }
    }
    class aT {
      constructor() {
        this._hasVertexAlpha = !1, this._useVertexColors = !0, this._numBoneInfluencers = 4, this._applyFog = !0, this._receiveShadows = !1, this._facetData = new tT, this._visibility = 1, this._skeleton = null, this._layerMask = 268435455, this._computeBonesUsingShaders = !0, this._isActive = !1, this._onlyForInstances = !1, this._isActiveIntermediate = !1, this._onlyForInstancesIntermediate = !1, this._actAsRegularMesh = !1, this._currentLOD = new Map, this._collisionRetryCount = 3, this._morphTargetManager = null, this._renderingGroupId = 0, this._meshBlendingTag = 0, this._bakedVertexAnimationManager = null, this._material = null, this._positions = null, this._pointerOverDisableMeshTesting = !1, this._meshCollisionData = new LT, this._enableDistantPicking = !1, this._rawBoundingInfo = null, this._sideOrientationHint = !1, this._wasActiveLastFrame = !1
      }
    }
    let yT = (() => {
        var TT;
        let UT, LT = HT.c,
          pT = [];
        return TT = class extends LT {
          static get BILLBOARDMODE_NONE() {
            return HT.c.BILLBOARDMODE_NONE
          }
          static get BILLBOARDMODE_X() {
            return HT.c.BILLBOARDMODE_X
          }
          static get BILLBOARDMODE_Y() {
            return HT.c.BILLBOARDMODE_Y
          }
          static get BILLBOARDMODE_Z() {
            return HT.c.BILLBOARDMODE_Z
          }
          static get BILLBOARDMODE_ALL() {
            return HT.c.BILLBOARDMODE_ALL
          }
          static get BILLBOARDMODE_USE_POSITION() {
            return HT.c.BILLBOARDMODE_USE_POSITION
          }
          get facetNb() {
            return this._internalAbstractMeshDataInfo._facetData.facetNb
          }
          get partitioningSubdivisions() {
            return this._internalAbstractMeshDataInfo._facetData.partitioningSubdivisions
          }
          set partitioningSubdivisions(TT) {
            this._internalAbstractMeshDataInfo._facetData.partitioningSubdivisions = TT
          }
          get partitioningBBoxRatio() {
            return this._internalAbstractMeshDataInfo._facetData.partitioningBBoxRatio
          }
          set partitioningBBoxRatio(TT) {
            this._internalAbstractMeshDataInfo._facetData.partitioningBBoxRatio = TT
          }
          get mustDepthSortFacets() {
            return this._internalAbstractMeshDataInfo._facetData.facetDepthSort
          }
          set mustDepthSortFacets(TT) {
            this._internalAbstractMeshDataInfo._facetData.facetDepthSort = TT
          }
          get facetDepthSortFrom() {
            return this._internalAbstractMeshDataInfo._facetData.facetDepthSortFrom
          }
          set facetDepthSortFrom(TT) {
            this._internalAbstractMeshDataInfo._facetData.facetDepthSortFrom = TT
          }
          get collisionRetryCount() {
            return this._internalAbstractMeshDataInfo._collisionRetryCount
          }
          set collisionRetryCount(TT) {
            this._internalAbstractMeshDataInfo._collisionRetryCount = TT
          }
          get isFacetDataEnabled() {
            return this._internalAbstractMeshDataInfo._facetData.facetDataEnabled
          }
          get morphTargetManager() {
            return this._internalAbstractMeshDataInfo._morphTargetManager
          }
          set morphTargetManager(TT) {
            this._internalAbstractMeshDataInfo._morphTargetManager !== TT && (this._internalAbstractMeshDataInfo._morphTargetManager = TT, this._syncGeometryWithMorphTargetManager())
          }
          get bakedVertexAnimationManager() {
            return this._internalAbstractMeshDataInfo._bakedVertexAnimationManager
          }
          set bakedVertexAnimationManager(TT) {
            this._internalAbstractMeshDataInfo._bakedVertexAnimationManager !== TT && (this._internalAbstractMeshDataInfo._bakedVertexAnimationManager = TT, this._markSubMeshesAsAttributesDirty())
          }
          _syncGeometryWithMorphTargetManager() {}
          _updateNonUniformScalingState(TT) {
            return !!super._updateNonUniformScalingState(TT) && (this._markSubMeshesAsMiscDirty(), !0)
          }
          get rawBoundingInfo() {
            return this._internalAbstractMeshDataInfo._rawBoundingInfo
          }
          set rawBoundingInfo(TT) {
            this._internalAbstractMeshDataInfo._rawBoundingInfo = TT
          }
          set zL(TT) {
            this._internalAbstractMeshDataInfo._meshCollisionData._onCollideObserver && this.onCollideObservable.remove(this._internalAbstractMeshDataInfo._meshCollisionData._onCollideObserver), this._internalAbstractMeshDataInfo._meshCollisionData._onCollideObserver = this.onCollideObservable.add(TT)
          }
          set onCollisionPositionChange(TT) {
            this._internalAbstractMeshDataInfo._meshCollisionData._onCollisionPositionChangeObserver && this.onCollisionPositionChangeObservable.remove(this._internalAbstractMeshDataInfo._meshCollisionData._onCollisionPositionChangeObserver), this._internalAbstractMeshDataInfo._meshCollisionData._onCollisionPositionChangeObserver = this.onCollisionPositionChangeObservable.add(TT)
          }
          get visibility() {
            return this._internalAbstractMeshDataInfo._visibility
          }
          set visibility(TT) {
            if (this._internalAbstractMeshDataInfo._visibility === TT) return;
            const UT = this._internalAbstractMeshDataInfo._visibility;
            this._internalAbstractMeshDataInfo._visibility = TT, (1 === UT && 1 !== TT || 1 !== UT && 1 === TT) && this._markSubMeshesAsDirty((TT => {
              TT.markAsMiscDirty(), TT.markAsPrePassDirty()
            }))
          }
          get pointerOverDisableMeshTesting() {
            return this._internalAbstractMeshDataInfo._pointerOverDisableMeshTesting
          }
          set pointerOverDisableMeshTesting(TT) {
            this._internalAbstractMeshDataInfo._pointerOverDisableMeshTesting = TT
          }
          get renderingGroupId() {
            return this._internalAbstractMeshDataInfo._renderingGroupId
          }
          set renderingGroupId(TT) {
            this._internalAbstractMeshDataInfo._renderingGroupId = TT
          }
          get meshBlendingTag() {
            return this._internalAbstractMeshDataInfo._meshBlendingTag
          }
          set meshBlendingTag(TT) {
            if (!Number.isInteger(TT) || TT < 0 || TT > 255 || 0 !== TT && 0 === (63 & TT)) throw new RangeError("Mesh-blending tag must be 0 or contain a group ID between 1 and 63.");
            this._internalAbstractMeshDataInfo._meshBlendingTag = TT
          }
          get material() {
            return this._internalAbstractMeshDataInfo._material
          }
          set material(TT) {
            this._setMaterial(TT)
          }
          _setMaterial(TT) {
            this._internalAbstractMeshDataInfo._material !== TT && (this._internalAbstractMeshDataInfo._material && this._internalAbstractMeshDataInfo._material.meshMap && (this._internalAbstractMeshDataInfo._material.meshMap[this.uniqueId] = void 0), this._internalAbstractMeshDataInfo._material = TT, TT && TT.meshMap && (TT.meshMap[this.uniqueId] = this), this.onMaterialChangedObservable.hasObservers() && this.onMaterialChangedObservable.notifyObservers(this), this.rY && (this.resetDrawCache(void 0, null == TT), this._unBindEffect()))
          }
          getMaterialForRenderPass(TT) {
            return this._internalAbstractMeshDataInfo._materialForRenderPass?.[TT]
          }
          setMaterialForRenderPass(TT, UT) {
            this.resetDrawCache(TT), this._internalAbstractMeshDataInfo._materialForRenderPass || (this._internalAbstractMeshDataInfo._materialForRenderPass = []);
            const mT = this._internalAbstractMeshDataInfo._materialForRenderPass[TT];
            mT?.meshMap?.[this.uniqueId] && (mT.meshMap[this.uniqueId] = void 0), this._internalAbstractMeshDataInfo._materialForRenderPass[TT] = UT, UT && UT.meshMap && (UT.meshMap[this.uniqueId] = this)
          }
          get receiveShadows() {
            return this._internalAbstractMeshDataInfo._receiveShadows
          }
          set receiveShadows(TT) {
            this._internalAbstractMeshDataInfo._receiveShadows !== TT && (this._internalAbstractMeshDataInfo._receiveShadows = TT, this._markSubMeshesAsLightDirty())
          }
          get hasVertexAlpha() {
            return this._internalAbstractMeshDataInfo._hasVertexAlpha
          }
          set hasVertexAlpha(TT) {
            this._internalAbstractMeshDataInfo._hasVertexAlpha !== TT && (this._internalAbstractMeshDataInfo._hasVertexAlpha = TT, this._markSubMeshesAsAttributesDirty(), this._markSubMeshesAsMiscDirty())
          }
          get useVertexColors() {
            return this._internalAbstractMeshDataInfo._useVertexColors
          }
          set useVertexColors(TT) {
            this._internalAbstractMeshDataInfo._useVertexColors !== TT && (this._internalAbstractMeshDataInfo._useVertexColors = TT, this._markSubMeshesAsAttributesDirty())
          }
          get computeBonesUsingShaders() {
            return this._internalAbstractMeshDataInfo._computeBonesUsingShaders
          }
          set computeBonesUsingShaders(TT) {
            this._internalAbstractMeshDataInfo._computeBonesUsingShaders !== TT && (this._internalAbstractMeshDataInfo._computeBonesUsingShaders = TT, this._markSubMeshesAsAttributesDirty())
          }
          get numBoneInfluencers() {
            return this._internalAbstractMeshDataInfo._numBoneInfluencers
          }
          set numBoneInfluencers(TT) {
            this._internalAbstractMeshDataInfo._numBoneInfluencers !== TT && (this._internalAbstractMeshDataInfo._numBoneInfluencers = TT, this._markSubMeshesAsAttributesDirty())
          }
          get applyFog() {
            return this._internalAbstractMeshDataInfo._applyFog
          }
          set applyFog(TT) {
            this._internalAbstractMeshDataInfo._applyFog !== TT && (this._internalAbstractMeshDataInfo._applyFog = TT, this._markSubMeshesAsMiscDirty())
          }
          get enableDistantPicking() {
            return this._internalAbstractMeshDataInfo._enableDistantPicking
          }
          set enableDistantPicking(TT) {
            this._internalAbstractMeshDataInfo._enableDistantPicking = TT
          }
          get layerMask() {
            return this._internalAbstractMeshDataInfo._layerMask
          }
          set layerMask(TT) {
            TT !== this._internalAbstractMeshDataInfo._layerMask && (this._internalAbstractMeshDataInfo._layerMask = TT, this._resyncLightSources())
          }
          get collisionMask() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._collisionMask
          }
          set collisionMask(TT) {
            this._internalAbstractMeshDataInfo._meshCollisionData._collisionMask = isNaN(TT) ? -1 : TT
          }
          get collisionResponse() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._collisionResponse
          }
          set collisionResponse(TT) {
            this._internalAbstractMeshDataInfo._meshCollisionData._collisionResponse = TT
          }
          get collisionGroup() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._collisionGroup
          }
          set collisionGroup(TT) {
            this._internalAbstractMeshDataInfo._meshCollisionData._collisionGroup = isNaN(TT) ? -1 : TT
          }
          get surroundingMeshes() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._surroundingMeshes
          }
          set surroundingMeshes(TT) {
            this._internalAbstractMeshDataInfo._meshCollisionData._surroundingMeshes = TT
          }
          get lightSources() {
            return this._lightSources
          }
          set skeleton(TT) {
            const UT = this._internalAbstractMeshDataInfo._skeleton;
            UT && UT.needInitialSkinMatrix && UT._unregisterMeshWithPoseMatrix(this), TT && TT.needInitialSkinMatrix && TT._registerMeshWithPoseMatrix(this), this._internalAbstractMeshDataInfo._skeleton = TT, this._internalAbstractMeshDataInfo._skeleton || (this._bonesTransformMatrices = null), this._markSubMeshesAsAttributesDirty()
          }
          get skeleton() {
            return this._internalAbstractMeshDataInfo._skeleton
          }
          constructor(UT) {
            var mT;
            let WT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            switch (super(UT, WT, !1), mT = this, this._internalAbstractMeshDataInfo = new aT, this._waitingMaterialId = null, this._waitingMorphTargetManagerId = null, this._waitingSkeletonId = null, this._waitingSkeletonUniqueId = null, this.cullingStrategy = TT.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY, this.onCollideObservable = new zT.d, this.onCollisionPositionChangeObservable = new zT.d, this.onMaterialChangedObservable = new zT.d, this.definedFacingForward = !0, this._occlusionQuery = null, this._renderingGroup = null, this.alphaIndex = Number.MAX_VALUE, this.QZ = TT.DefaultIsPickable, this.isNearPickable = !1, this.isNearGrabbable = !1, this.showSubMeshesBoundingBox = !1, this.isBlocker = !1, this.enablePointerMoveEvents = !1, this.outlineColor = qT.d.Red(), this.outlineWidth = .02, this.overlayColor = qT.d.Red(), this.overlayAlpha = .5, this.useOctreeForRenderingSelection = !0, this.useOctreeForPicking = !0, this.useOctreeForCollisions = !0, this.YB = !1, this.dB = !1, this.actionManager = null, this.ellipsoid = new MT.p(.5, 1, .5), this.ellipsoidOffset = new MT.p(0, 0, 0), this.edgesWidth = 1, this.edgesColor = new qT.g(1, 0, 0, 1), this._edgesRenderer = null, this._masterMesh = null, this._boundingInfo = null, this._boundingInfoIsDirty = !0, this._renderId = 0, this._intersectionsInProgress = new Array, this._unIndexed = !1, this._lightSources = new Array, this._waitingData = {
                lods: null,
                actions: null,
                HV: null
              }, this._bonesTransformMatrices = null, this._transformMatrixTexture = null, this.onRebuildObservable = new zT.d, this._onCollisionPositionChange = function(TT, UT) {
                let WT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                UT.subtractToRef(mT._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions, mT._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions), mT._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions.length() > YT.c.CollisionsEpsilon && mT.position.addInPlace(mT._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions), WT && mT.onCollideObservable.notifyObservers(WT), mT.onCollisionPositionChangeObservable.notifyObservers(mT.position)
              }, WT = this.KF(), this.layerMask = WT.defaultRenderableLayerMask, WT.fWT(this), this._resyncLightSources(), this._uniformBuffer = new lT.c(this.KF().eB(), void 0, void 0, UT, !this.KF().eB().isWebGPU), this._buildUniformLayout(), WT.performancePriority) {
              case 2:
                this.dB = !0;
              case 1:
                this.YB = !0, this.QZ = !1
            }
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("world", 16), this._uniformBuffer.addUniform("visibility", 1), this._uniformBuffer.create()
          }
          transferToEffect(TT) {
            const UT = this._uniformBuffer;
            UT.R7("world", TT), UT.updateFloat("visibility", this._internalAbstractMeshDataInfo._visibility), UT.update()
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
          toString(TT) {
            let UT = "Name: " + this.name + ", isInstance: " + ("InstancedMesh" === this.getClassName() ? "YES" : "NO");
            UT += ", # of submeshes: " + (this.rY ? this.rY.length : 0);
            const mT = this._internalAbstractMeshDataInfo._skeleton;
            return mT && (UT += ", skeleton: " + mT.name), TT && (UT += ", billboard mode: " + ["NONE", "X", "Y", null, "Z", null, null, "ALL"][this.billboardMode], UT += ", freeze wrld mat: " + (this._isWorldMatrixFrozen || this._waitingData.HV ? "YES" : "NO")), UT
          }
          _getEffectiveParent() {
            return this._masterMesh && this.billboardMode !== HT.c.BILLBOARDMODE_NONE ? this._masterMesh : super._getEffectiveParent()
          }
          _getActionManagerForTrigger(TT) {
            let UT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            if (this.actionManager && (UT || this.actionManager.isRecursive)) {
              if (!TT) return this.actionManager;
              if (this.actionManager.hasSpecificTrigger(TT)) return this.actionManager
            }
            return this.parent ? this.parent._getActionManagerForTrigger(TT, !1) : null
          }
          _releaseRenderPassId(TT) {}
          _rebuild() {
            if (this.onRebuildObservable.notifyObservers(this), null !== this._occlusionQuery && (this._occlusionQuery = null), this.rY) {
              for (const TT of this.rY) TT._rebuild();
              this.resetDrawCache()
            }
          }
          _resyncLightSources() {
            this._lightSources.length = 0;
            for (const TT of this.KF().lights) TT.isEnabled() && TT.canAffectMesh(this) && this._lightSources.push(TT);
            this._markSubMeshesAsLightDirty()
          }
          _resyncLightSource(TT) {
            const UT = TT.isEnabled() && TT.canAffectMesh(this),
              mT = this._lightSources.indexOf(TT);
            let WT = !1;
            if (-1 === mT) {
              if (!UT) return;
              this._lightSources.push(TT)
            } else {
              if (UT) return;
              WT = !0, this._lightSources.splice(mT, 1)
            }
            this._markSubMeshesAsLightDirty(WT)
          }
          _unBindEffect() {
            for (const TT of this.rY) TT.setEffect(null)
          }
          _removeLightSource(TT, UT) {
            const mT = this._lightSources.indexOf(TT); - 1 !== mT && (this._lightSources.splice(mT, 1), this._markSubMeshesAsLightDirty(UT))
          }
          _markSubMeshesAsDirty(TT) {
            if (this.rY)
              for (const UT of this.rY)
                for (let mT = 0; mT < UT._drawWrappers.length; ++mT) {
                  const WT = UT._drawWrappers[mT];
                  WT && WT.defines && WT.defines.markAllAsDirty && TT(WT.defines)
                }
          }
          _markSubMeshesAsLightDirty() {
            let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            this._markSubMeshesAsDirty((UT => UT.markAsLightDirty(TT)))
          }
          _markSubMeshesAsAttributesDirty() {
            this._markSubMeshesAsDirty((TT => TT.markAsAttributesDirty()))
          }
          _markSubMeshesAsMiscDirty() {
            this._markSubMeshesAsDirty((TT => TT.markAsMiscDirty()))
          }
          NUT(TT) {
            return this._currentRenderId = Number.MAX_VALUE, super.NUT(TT), this._isDirty = !0, this
          }
          resetDrawCache(TT) {
            let UT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (this.rY)
              for (const mT of this.rY) mT.resetDrawCache(TT, UT)
          }
          get isBlocked() {
            return !1
          }
          getLOD(TT) {
            return this
          }
          getTotalVertices() {
            return 0
          }
          getTotalIndices() {
            return 0
          }
          vWT() {
            return null
          }
          getVerticesData(TT) {
            return null
          }
          setVerticesData(TT, UT, mT, WT) {
            return this
          }
          updateVerticesData(TT, UT, mT, WT) {
            return this
          }
          setIndices(TT, UT) {
            return this
          }
          isVerticesDataPresent(TT) {
            return !1
          }
          rV() {
            return this._masterMesh ? this._masterMesh.rV() : (this._boundingInfoIsDirty && (this._boundingInfoIsDirty = !1, this._updateBoundingInfo()), this._boundingInfo)
          }
          getRawBoundingInfo() {
            return this.rawBoundingInfo ?? this.rV()
          }
          setBoundingInfo(TT) {
            return this._boundingInfo = TT, this
          }
          get hasBoundingInfo() {
            return null !== this._boundingInfo
          }
          buildBoundingInfo(TT, UT, mT) {
            return this._boundingInfo = new jT.e(TT, UT, mT), this._boundingInfo
          }
          normalizeToUnitCube() {
            let TT = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
              UT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              mT = arguments.length > 2 ? arguments[2] : void 0;
            return super.normalizeToUnitCube(TT, UT, mT)
          }
          get useBones() {
            return this.skeleton && this.KF().skeletonsEnabled && this.isVerticesDataPresent(gT.i.MatricesIndicesKind) && this.isVerticesDataPresent(gT.i.MatricesWeightsKind)
          }
          _preActivate() {}
          _preActivateForIntermediateRendering(TT) {}
          _activate(TT, UT) {
            return this._renderId = TT, !0
          }
          _postActivate() {}
          _freeze() {}
          _unFreeze() {}
          getWorldMatrix() {
            return this._masterMesh && this.billboardMode === HT.c.BILLBOARDMODE_NONE ? this._masterMesh.getWorldMatrix() : super.getWorldMatrix()
          }
          _getWorldMatrixDeterminant() {
            return this._masterMesh ? this._masterMesh._getWorldMatrixDeterminant() : super._getWorldMatrixDeterminant()
          }
          get RP() {
            return !1
          }
          get ZzT() {
            return !1
          }
          get hasThinInstances() {
            return !1
          }
          movePOV(TT, UT, mT) {
            return this.position.addInPlace(this.calcMovePOV(TT, UT, mT)), this
          }
          calcMovePOV(TT, UT, mT) {
            const WT = new MT.e;
            (this.rotationQuaternion ? this.rotationQuaternion : MT.f.RotationYawPitchRoll(this.rotation.y, this.rotation.x, this.rotation.z)).toRotationMatrix(WT);
            const zT = MT.p.Zero(),
              gT = this.definedFacingForward ? -1 : 1;
            return MT.p.TransformCoordinatesFromFloatsToRef(TT * gT, UT, mT * gT, WT, zT), zT
          }
          rotatePOV(TT, UT, mT) {
            return this.rotation.addInPlace(this.calcRotatePOV(TT, UT, mT)), this
          }
          calcRotatePOV(TT, UT, mT) {
            const WT = this.definedFacingForward ? 1 : -1;
            return new MT.p(TT * WT, UT, mT * WT)
          }
          _refreshBoundingInfo(TT, UT) {
            if (TT) {
              const mT = (0, fT.f)(TT, 0, this.getTotalVertices(), UT);
              this._boundingInfo ? this._boundingInfo.reConstruct(mT.minimum, mT.maximum) : this._boundingInfo = new jT.e(mT.minimum, mT.maximum)
            }
            if (this.rY)
              for (let mT = 0; mT < this.rY.length; mT++) this.rY[mT].refreshBoundingInfo(TT);
            this._updateBoundingInfo()
          }
          _refreshBoundingInfoDirect(TT) {
            if (this._boundingInfo ? this._boundingInfo.reConstruct(TT.minimum, TT.maximum) : this._boundingInfo = new jT.e(TT.minimum, TT.maximum), this.rY)
              for (let UT = 0; UT < this.rY.length; UT++) this.rY[UT].refreshBoundingInfo(null);
            this._updateBoundingInfo()
          }
          static _ApplySkeleton(TT, UT, mT, WT, zT, nT, HT) {
            ! function(TT, UT, mT, WT, zT, nT, HT) {
              const kT = MT.l.JB[0],
                jT = MT.l.Matrix[0],
                lT = MT.l.Matrix[1],
                LT = UT === gT.i.NormalKind ? MT.p.TransformNormalFromFloatsToRef : MT.p.TransformCoordinatesFromFloatsToRef;
              for (let gT = 0, pT = 0; gT < TT.length; gT += 3, pT += 4) {
                let UT, BT;
                for (jT.reset(), UT = 0; UT < 4; UT++) BT = zT[pT + UT], BT > 0 && (MT.e.FromFloat32ArrayToRefScaled(mT, Math.floor(16 * WT[pT + UT]), BT, lT), jT.addToSelf(lT));
                if (nT && HT)
                  for (UT = 0; UT < 4; UT++) BT = HT[pT + UT], BT > 0 && (MT.e.FromFloat32ArrayToRefScaled(mT, Math.floor(16 * nT[pT + UT]), BT, lT), jT.addToSelf(lT));
                LT(TT[gT], TT[gT + 1], TT[gT + 2], jT, kT), kT.toArray(TT, gT)
              }
            }(TT, UT, mT, WT, zT, nT, HT)
          }
          _getData(UT, mT) {
            let WT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : gT.i.PositionKind;
            const zT = UT.cache,
              nT = TT => {
                if (zT) {
                  const UT = zT._vertexData || (zT._vertexData = {});
                  return UT[TT] || this.copyVerticesData(TT, UT), UT[TT]
                }
                return this.getVerticesData(TT)
              };
            if (mT || (mT = nT(WT)), !mT) return null;
            zT ? (zT._outputData ? zT._outputData.set(mT) : zT._outputData = new Float32Array(mT), mT = zT._outputData) : (UT.applyMorph && this.morphTargetManager || UT.applySkeleton && this.skeleton || UT.applyBakedVertexAnimation && this.bakedVertexAnimationManager?.isEnabled) && (mT = mT.slice()), UT.applyMorph && this.morphTargetManager && function(TT, UT, mT) {
              let WT;
              switch (UT) {
                case gT.i.PositionKind:
                  WT = TT => TT.getPositions();
                  break;
                case gT.i.NormalKind:
                  WT = TT => TT.getNormals();
                  break;
                case gT.i.TangentKind:
                  WT = TT => TT.getTangents();
                  break;
                case gT.i.UVKind:
                  WT = TT => TT.getUVs();
                  break;
                case gT.i.UV2Kind:
                  WT = TT => TT.getUV2s();
                  break;
                case gT.i.ColorKind:
                  WT = TT => TT.getColors();
                  break;
                default:
                  return
              }
              for (let zT = 0; zT < TT.length; zT++) {
                let UT = TT[zT];
                for (let MT = 0; MT < mT.numTargets; MT++) {
                  const gT = mT.getTarget(MT),
                    nT = gT.influence;
                  if (0 !== nT) {
                    const mT = WT(gT);
                    mT && (UT += (mT[zT] - TT[zT]) * nT)
                  }
                }
                TT[zT] = UT
              }
            }(mT, WT, this.morphTargetManager);
            const HT = this.bakedVertexAnimationManager;
            let kT = !1;
            if (UT.applyBakedVertexAnimation && HT?.isEnabled) {
              const TT = nT(gT.i.MatricesIndicesKind),
                zT = nT(gT.i.MatricesWeightsKind);
              if (zT && TT) {
                const MT = this.numBoneInfluencers > 4,
                  jT = MT ? nT(gT.i.MatricesIndicesExtraKind) : null,
                  lT = MT ? nT(gT.i.MatricesWeightsExtraKind) : null;
                kT = wT(mT, WT, HT, UT.bakedVertexAnimationSettings ?? HT.animationParameters, TT, zT, jT, lT, this.numBoneInfluencers)
              }
            }
            if (!kT && UT.applySkeleton && this.skeleton) {
              const UT = nT(gT.i.MatricesIndicesKind),
                zT = nT(gT.i.MatricesWeightsKind);
              if (zT && UT) {
                const MT = this.numBoneInfluencers > 4,
                  HT = MT ? nT(gT.i.MatricesIndicesExtraKind) : null,
                  kT = MT ? nT(gT.i.MatricesWeightsExtraKind) : null,
                  jT = this.skeleton.getTransformMatrices(this);
                TT._ApplySkeleton(mT, WT, jT, UT, zT, HT, kT)
              }
            }
            if (!1 !== UT.updatePositionsArray && WT === gT.i.PositionKind) {
              const TT = this._internalAbstractMeshDataInfo._positions || [],
                UT = TT.length;
              if (TT.length = mT.length / 3, UT < TT.length)
                for (let mT = UT; mT < TT.length; mT++) TT[mT] = new MT.p;
              for (let WT = 0, zT = 0; WT < TT.length; WT++, zT += 3) TT[WT].J9(mT[zT], mT[zT + 1], mT[zT + 2]);
              this._internalAbstractMeshDataInfo._positions = TT
            }
            return mT
          }
          getNormalsData() {
            let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              UT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return this._getData({
              applySkeleton: TT,
              applyMorph: UT,
              updatePositionsArray: !1
            }, null, gT.i.NormalKind)
          }
          FN() {
            let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              UT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            return this._getData({
              applySkeleton: TT,
              applyMorph: UT,
              updatePositionsArray: !1
            }, mT, gT.i.PositionKind)
          }
          _updateBoundingInfo() {
            return this._boundingInfo ? this._boundingInfo.update(this.worldMatrixFromCache) : this._boundingInfo = new jT.e(MT.p.Zero(), MT.p.Zero(), this.worldMatrixFromCache), this._updateSubMeshesBoundingInfo(this.worldMatrixFromCache), this
          }
          _updateSubMeshesBoundingInfo(TT) {
            if (!this.rY) return this;
            const UT = this.rY.length;
            for (let mT = 0; mT < UT; mT++) {
              const WT = this.rY[mT];
              (UT > 1 || !WT.IsGlobal) && WT.updateBoundingInfo(TT)
            }
            return this
          }
          _afterComputeWorldMatrix() {
            this.dB || (this._boundingInfoIsDirty = !0)
          }
          isInFrustum(TT) {
            return this.rV().isInFrustum(TT, this.cullingStrategy)
          }
          isCompletelyInFrustum(TT) {
            return this.rV().isCompletelyInFrustum(TT)
          }
          HzT(TT) {
            let UT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              mT = arguments.length > 2 ? arguments[2] : void 0;
            const WT = this.rV(),
              zT = TT.rV();
            if (WT.intersects(zT, UT)) return !0;
            if (mT)
              for (const MT of this.getChildMeshes())
                if (MT.HzT(TT, UT, !0)) return !0;
            return !1
          }
          intersectsPoint(TT) {
            return this.rV().intersectsPoint(TT)
          }
          get checkCollisions() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._checkCollisions
          }
          set checkCollisions(TT) {
            this._internalAbstractMeshDataInfo._meshCollisionData._checkCollisions = TT
          }
          get collider() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._collider
          }
          moveWithCollisions(TT) {
            let UT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            this.getAbsolutePosition().addToRef(this.ellipsoidOffset, this._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions);
            const mT = this.KF().collisionCoordinator;
            return this._internalAbstractMeshDataInfo._meshCollisionData._collider || (this._internalAbstractMeshDataInfo._meshCollisionData._collider = mT.createCollider()), this._internalAbstractMeshDataInfo._meshCollisionData._collider._radius = this.ellipsoid, mT.getNewPosition(this._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions, TT, this._internalAbstractMeshDataInfo._meshCollisionData._collider, this.collisionRetryCount, this, this._onCollisionPositionChange, this.uniqueId, UT), this
          }
          _collideForSubMesh(TT, UT, mT) {
            if (this._generatePointsArray(), !this._positions) return this;
            if (!TT._lastColliderWorldVertices || !TT._lastColliderTransformMatrix.equals(UT)) {
              TT._lastColliderTransformMatrix = UT.clone(), TT._lastColliderWorldVertices = [], TT._trianglePlanes = [];
              const mT = TT.verticesStart,
                WT = TT.verticesStart + TT.verticesCount;
              for (let zT = mT; zT < WT; zT++) TT._lastColliderWorldVertices.push(MT.p.TransformCoordinates(this._positions[zT], UT))
            }
            return mT._collide(TT._trianglePlanes, TT._lastColliderWorldVertices, this.vWT(), TT.indexStart, TT.indexStart + TT.indexCount, TT.verticesStart, !!TT.wB(), this, this._shouldConvertRHS(), 7 === TT.wB()?.fillMode), this
          }
          _processCollisionsForSubMeshes(TT, UT) {
            const mT = this._scene.getCollidingSubMeshCandidates(this, TT),
              WT = mT.length;
            for (let zT = 0; zT < WT; zT++) {
              const MT = mT.data[zT];
              WT > 1 && !MT._checkCollision(TT) || this._collideForSubMesh(MT, UT, TT)
            }
            return this
          }
          _shouldConvertRHS() {
            return !1
          }
          _checkCollision(TT) {
            if (!this.rV()._checkCollision(TT)) return this;
            const UT = MT.l.Matrix[0],
              mT = MT.l.Matrix[1];
            return MT.e.ScalingToRef(1 / TT._radius.x, 1 / TT._radius.y, 1 / TT._radius.z, UT), this.worldMatrixFromCache.multiplyToRef(UT, mT), this._processCollisionsForSubMeshes(TT, mT), this
          }
          _generatePointsArray() {
            return !1
          }
          intersects(TT, UT, mT) {
            let WT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              zT = arguments.length > 4 ? arguments[4] : void 0,
              gT = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
            const nT = new kT.c,
              HT = this.getClassName(),
              jT = "InstancedLinesMesh" === HT || "LinesMesh" === HT || "GreasedLineMesh" === HT ? this.intersectionThreshold : 0,
              lT = this.rV();
            if (!this.rY) return nT;
            if (!gT && (!TT.intersectsSphere(lT.rWT, jT) || !TT.intersectsBox(lT.boundingBox, jT))) return nT;
            if (WT) return nT.hit = !gT, nT.pickedMesh = gT ? null : this, nT.distance = gT ? 0 : MT.p.Distance(TT.origin, lT.rWT.center), nT.subMeshId = 0, nT;
            if (!this._generatePointsArray()) return nT;
            let LT = null;
            const pT = this._scene.getIntersectingSubMeshCandidates(this, TT),
              BT = pT.length;
            let ZT = !1;
            for (let MT = 0; MT < BT; MT++) {
              const TT = pT.data[MT].wB();
              if (TT && (7 == TT.fillMode || 0 == TT.fillMode || 1 == TT.fillMode || 2 == TT.fillMode || 4 == TT.fillMode)) {
                ZT = !0;
                break
              }
            }
            if (!ZT) return nT.hit = !0, nT.pickedMesh = this, nT.distance = MT.p.Distance(TT.origin, lT.rWT.center), nT.subMeshId = -1, nT;
            for (let MT = 0; MT < BT; MT++) {
              const WT = pT.data[MT];
              if (BT > 1 && !gT && !WT.canIntersects(TT)) continue;
              const zT = WT.intersects(TT, this._positions, this.vWT(), UT, mT);
              if (zT && (UT || !LT || zT.distance < LT.distance) && (LT = zT, LT.subMeshId = WT._id, LT._internalSubMeshId = MT, UT)) break
            }
            if (LT) {
              const UT = zT ?? this.getWorldMatrix(),
                mT = MT.l.JB[0],
                WT = MT.l.JB[1];
              MT.p.TransformCoordinatesToRef(TT.origin, UT, mT), TT.direction.scaleToRef(LT.distance, WT);
              const gT = MT.p.TransformNormal(WT, UT).addInPlace(mT);
              return nT.hit = !0, nT.distance = MT.p.Distance(mT, gT), nT.pickedPoint = gT, nT.pickedMesh = this, nT.bu = LT.bu || 0, nT.bv = LT.bv || 0, nT.subMeshFaceId = LT.faceId, nT.faceId = LT.faceId + pT.data[LT._internalSubMeshId].indexStart / (-1 !== this.getClassName().indexOf("LinesMesh") ? 2 : 3), nT.subMeshId = LT.subMeshId, nT
            }
            return nT
          }
          clone(TT, UT, mT) {
            return null
          }
          releaseSubMeshes() {
            let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (this.rY)
              for (; this.rY.length;) this.rY[0].dispose(TT);
            else this.rY = [];
            return this
          }
          dispose(TT) {
            let UT, mT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            const WT = this.KF();
            for (this._scene.useMaterialMeshMap && this._internalAbstractMeshDataInfo._material && this._internalAbstractMeshDataInfo._material.meshMap && (this._internalAbstractMeshDataInfo._material.meshMap[this.uniqueId] = void 0), WT.freeActiveMeshes(), WT.freeRenderingGroups(), WT.renderingManager.maintainStateBetweenFrames && WT.renderingManager.restoreDispachedFlags(), void 0 !== this.actionManager && null !== this.actionManager && (this.actionManager.disposeWhenUnowned && !this._scene.meshes.some((TT => TT !== this && TT.actionManager === this.actionManager)) && this.actionManager.dispose(), this.actionManager = null), this._internalAbstractMeshDataInfo._skeleton = null, this._transformMatrixTexture && (this._transformMatrixTexture.dispose(), this._transformMatrixTexture = null), UT = 0; UT < this._intersectionsInProgress.length; UT++) {
              const TT = this._intersectionsInProgress[UT],
                mT = TT._intersectionsInProgress.indexOf(this);
              TT._intersectionsInProgress.splice(mT, 1)
            }
            this._intersectionsInProgress.length = 0;
            const zT = WT.lights;
            for (const gT of zT) {
              let TT = gT.includedOnlyMeshes.indexOf(this); - 1 !== TT && gT.includedOnlyMeshes.splice(TT, 1), TT = gT.excludedMeshes.indexOf(this), -1 !== TT && gT.excludedMeshes.splice(TT, 1);
              const UT = gT.getShadowGenerators();
              if (UT) {
                const mT = UT.values();
                for (let UT = mT.next(); !0 !== UT.done; UT = mT.next()) {
                  const mT = UT.value.getShadowMap();
                  mT && mT.renderList && (TT = mT.renderList.indexOf(this), -1 !== TT && mT.renderList.splice(TT, 1))
                }
              }
            }
            this.releaseSubMeshes(WT._isDisposing);
            const MT = WT.eB();
            if (null !== this._occlusionQuery && (this.isOcclusionQueryInProgress = !1, MT.deleteQuery(this._occlusionQuery), this._occlusionQuery = null), MT.wipeCaches(), WT.cV(this), this._parentContainer) {
              const TT = this._parentContainer.meshes.indexOf(this);
              TT > -1 && this._parentContainer.meshes.splice(TT, 1), this._parentContainer = null
            }
            if (mT && this.material && ("MultiMaterial" === this.material.getClassName() ? this.material.dispose(!1, !0, !0) : this.material.dispose(!1, !0)), !TT)
              for (UT = 0; UT < WT.EY.length; UT++) WT.EY[UT].emitter === this && (WT.EY[UT].dispose(), UT--);
            this._internalAbstractMeshDataInfo._facetData.facetDataEnabled && this.disableFacetData(), this._uniformBuffer.dispose(), this.onAfterWorldMatrixUpdateObservable.clear(), this.onCollideObservable.clear(), this.onCollisionPositionChangeObservable.clear(), this.onRebuildObservable.clear(), super.dispose(TT, mT)
          }
          _initFacetData() {
            const TT = this._internalAbstractMeshDataInfo._facetData;
            TT.facetNormals || (TT.facetNormals = []), TT.facetPositions || (TT.facetPositions = []), TT.facetPartitioning || (TT.facetPartitioning = new Array), TT.facetNb = this.vWT().length / 3 | 0, TT.partitioningSubdivisions = TT.partitioningSubdivisions ? TT.partitioningSubdivisions : 10, TT.partitioningBBoxRatio = TT.partitioningBBoxRatio ? TT.partitioningBBoxRatio : 1.01;
            for (let UT = 0; UT < TT.facetNb; UT++) TT.facetNormals[UT] = MT.p.Zero(), TT.facetPositions[UT] = MT.p.Zero();
            return TT.facetDataEnabled = !0, this
          }
          updateFacetData() {
            const TT = this._internalAbstractMeshDataInfo._facetData;
            TT.facetDataEnabled || this._initFacetData();
            const UT = this.getVerticesData(gT.i.PositionKind),
              mT = this.vWT(),
              WT = this.getVerticesData(gT.i.NormalKind)?.slice(),
              zT = this.rV();
            if (TT.facetDepthSort && !TT.facetDepthSortEnabled) {
              if (TT.facetDepthSortEnabled = !0, mT instanceof Uint16Array) TT.depthSortedIndices = new Uint16Array(mT);
              else if (mT instanceof Uint32Array) TT.depthSortedIndices = new Uint32Array(mT);
              else {
                let UT = !1;
                for (let TT = 0; TT < mT.length; TT++)
                  if (mT[TT] > 65535) {
                    UT = !0;
                    break
                  } TT.depthSortedIndices = UT ? new Uint32Array(mT) : new Uint16Array(mT)
              }
              if (TT.facetDepthSortFunction = function(TT, UT) {
                  return UT.sqDistance - TT.sqDistance
                }, !TT.facetDepthSortFrom) {
                const UT = this.KF().activeCamera;
                TT.facetDepthSortFrom = UT ? UT.position : MT.p.Zero()
              }
              TT.depthSortedFacets = [];
              for (let UT = 0; UT < TT.facetNb; UT++) {
                const mT = {
                  ind: 3 * UT,
                  sqDistance: 0
                };
                TT.depthSortedFacets.push(mT)
              }
              TT.invertedMatrix = MT.e.Identity(), TT.facetDepthSortOrigin = MT.p.Zero()
            }
            TT.bbSize.x = zT.maximum.x - zT.minimum.x > iT.c ? zT.maximum.x - zT.minimum.x : iT.c, TT.bbSize.y = zT.maximum.y - zT.minimum.y > iT.c ? zT.maximum.y - zT.minimum.y : iT.c, TT.bbSize.z = zT.maximum.z - zT.minimum.z > iT.c ? zT.maximum.z - zT.minimum.z : iT.c;
            let HT = TT.bbSize.x > TT.bbSize.y ? TT.bbSize.x : TT.bbSize.y;
            if (HT = HT > TT.bbSize.z ? HT : TT.bbSize.z, TT.subDiv.max = TT.partitioningSubdivisions, TT.subDiv.X = Math.floor(TT.subDiv.max * TT.bbSize.x / HT), TT.subDiv.Y = Math.floor(TT.subDiv.max * TT.bbSize.y / HT), TT.subDiv.Z = Math.floor(TT.subDiv.max * TT.bbSize.z / HT), TT.subDiv.X = TT.subDiv.X < 1 ? 1 : TT.subDiv.X, TT.subDiv.Y = TT.subDiv.Y < 1 ? 1 : TT.subDiv.Y, TT.subDiv.Z = TT.subDiv.Z < 1 ? 1 : TT.subDiv.Z, TT.facetParameters.facetNormals = this.getFacetLocalNormals(), TT.facetParameters.facetPositions = this.getFacetLocalPositions(), TT.facetParameters.facetPartitioning = this.getFacetLocalPartitioning(), TT.facetParameters.bInfo = zT, TT.facetParameters.bbSize = TT.bbSize, TT.facetParameters.subDiv = TT.subDiv, TT.facetParameters.ratio = this.partitioningBBoxRatio, TT.facetParameters.depthSort = TT.facetDepthSort, TT.facetDepthSort && TT.facetDepthSortEnabled && (this.computeWorldMatrix(!0), this._worldMatrix.invertToRef(TT.invertedMatrix), MT.p.TransformCoordinatesToRef(TT.facetDepthSortFrom, TT.invertedMatrix, TT.facetDepthSortOrigin), TT.facetParameters.distanceTo = TT.facetDepthSortOrigin), TT.facetParameters.depthSortedFacets = TT.depthSortedFacets, WT && nT.d.ComputeNormals(UT, mT, WT, TT.facetParameters), TT.facetDepthSort && TT.facetDepthSortEnabled) {
              TT.depthSortedFacets.sort(TT.facetDepthSortFunction);
              const UT = TT.depthSortedIndices.length / 3 | 0;
              for (let WT = 0; WT < UT; WT++) {
                const UT = TT.depthSortedFacets[WT].ind;
                TT.depthSortedIndices[3 * WT] = mT[UT], TT.depthSortedIndices[3 * WT + 1] = mT[UT + 1], TT.depthSortedIndices[3 * WT + 2] = mT[UT + 2]
              }
              this.updateIndices(TT.depthSortedIndices, void 0, !0)
            }
            return this
          }
          getFacetLocalNormals() {
            const TT = this._internalAbstractMeshDataInfo._facetData;
            return TT.facetNormals || this.updateFacetData(), TT.facetNormals
          }
          getFacetLocalPositions() {
            const TT = this._internalAbstractMeshDataInfo._facetData;
            return TT.facetPositions || this.updateFacetData(), TT.facetPositions
          }
          getFacetLocalPartitioning() {
            const TT = this._internalAbstractMeshDataInfo._facetData;
            return TT.facetPartitioning || this.updateFacetData(), TT.facetPartitioning
          }
          getFacetPosition(TT) {
            const UT = MT.p.Zero();
            return this.getFacetPositionToRef(TT, UT), UT
          }
          getFacetPositionToRef(TT, UT) {
            const mT = this.getFacetLocalPositions()[TT],
              WT = this.getWorldMatrix();
            return MT.p.TransformCoordinatesToRef(mT, WT, UT), this
          }
          getFacetNormal(TT) {
            const UT = MT.p.Zero();
            return this.getFacetNormalToRef(TT, UT), UT
          }
          getFacetNormalToRef(TT, UT) {
            const mT = this.getFacetLocalNormals()[TT];
            return MT.p.TransformNormalToRef(mT, this.getWorldMatrix(), UT), this
          }
          getFacetsAtLocalCoordinates(TT, UT, mT) {
            const WT = this.rV(),
              zT = this._internalAbstractMeshDataInfo._facetData,
              MT = Math.floor((TT - WT.minimum.x * zT.partitioningBBoxRatio) * zT.subDiv.X * zT.partitioningBBoxRatio / zT.bbSize.x),
              gT = Math.floor((UT - WT.minimum.y * zT.partitioningBBoxRatio) * zT.subDiv.Y * zT.partitioningBBoxRatio / zT.bbSize.y),
              nT = Math.floor((mT - WT.minimum.z * zT.partitioningBBoxRatio) * zT.subDiv.Z * zT.partitioningBBoxRatio / zT.bbSize.z);
            return MT < 0 || MT > zT.subDiv.max || gT < 0 || gT > zT.subDiv.max || nT < 0 || nT > zT.subDiv.max ? null : zT.facetPartitioning[MT + zT.subDiv.max * gT + zT.subDiv.max * zT.subDiv.max * nT]
          }
          getClosestFacetAtCoordinates(TT, UT, mT, WT) {
            let zT = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              gT = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
            const nT = this.getWorldMatrix(),
              HT = MT.l.Matrix[5];
            nT.invertToRef(HT);
            const kT = MT.l.JB[8];
            MT.p.TransformCoordinatesFromFloatsToRef(TT, UT, mT, HT, kT);
            const jT = this.getClosestFacetAtLocalCoordinates(kT.x, kT.y, kT.z, WT, zT, gT);
            return WT && MT.p.TransformCoordinatesFromFloatsToRef(WT.x, WT.y, WT.z, nT, WT), jT
          }
          getClosestFacetAtLocalCoordinates(TT, UT, mT, WT) {
            let zT, MT, gT, nT, HT, kT, jT, lT, LT = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              pT = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
              BT = null;
            const ZT = this.getFacetLocalPositions(),
              cT = this.getFacetLocalNormals(),
              vT = this.getFacetsAtLocalCoordinates(TT, UT, mT);
            if (!vT) return null;
            let fT, qT, iT, bT, OT = Number.MAX_VALUE;
            for (let eT = 0; eT < vT.length; eT++) qT = vT[eT], iT = cT[qT], bT = ZT[qT], nT = (TT - bT.x) * iT.x + (UT - bT.y) * iT.y + (mT - bT.z) * iT.z, (!LT || LT && pT && nT >= 0 || LT && !pT && nT <= 0) && (nT = iT.x * bT.x + iT.y * bT.y + iT.z * bT.z, HT = -(iT.x * TT + iT.y * UT + iT.z * mT - nT) / (iT.x * iT.x + iT.y * iT.y + iT.z * iT.z), kT = TT + iT.x * HT, jT = UT + iT.y * HT, lT = mT + iT.z * HT, zT = kT - TT, MT = jT - UT, gT = lT - mT, fT = zT * zT + MT * MT + gT * gT, fT < OT && (OT = fT, BT = qT, WT && (WT.x = kT, WT.y = jT, WT.z = lT)));
            return BT
          }
          getFacetDataParameters() {
            return this._internalAbstractMeshDataInfo._facetData.facetParameters
          }
          disableFacetData() {
            const TT = this._internalAbstractMeshDataInfo._facetData;
            return TT.facetDataEnabled && (TT.facetDataEnabled = !1, TT.facetPositions = [], TT.facetNormals = [], TT.facetPartitioning = new Array, TT.facetParameters = {}, TT.depthSortedIndices = new Uint32Array(0)), this
          }
          updateIndices(TT, UT) {
            return this
          }
          createNormals(TT) {
            const UT = this.getVerticesData(gT.i.PositionKind),
              mT = this.vWT();
            let WT;
            return WT = this.isVerticesDataPresent(gT.i.NormalKind) ? this.getVerticesData(gT.i.NormalKind) : [], nT.d.ComputeNormals(UT, mT, WT, {
              useRightHandedSystem: this.KF().useRightHandedSystem
            }), this.setVerticesData(gT.i.NormalKind, WT, TT), this
          }
          async optimizeIndicesAsync() {
            const TT = this.vWT();
            if (!TT) return this;
            const {
              OptimizeIndices: UT
            } = await mT.e(356).then((() => mT(42719)));
            return UT(TT), this.setIndices(TT, this.getTotalVertices()), this
          }
          alignWithNormal(TT, UT) {
            UT || (UT = bT.c.Y);
            const mT = MT.l.JB[0],
              WT = MT.l.JB[1];
            return MT.p.CrossToRef(UT, TT, WT), MT.p.CrossToRef(TT, WT, mT), this.rotationQuaternion ? MT.f.RotationQuaternionFromAxisToRef(mT, TT, WT, this.rotationQuaternion) : MT.p.RotationFromAxisToRef(mT, TT, WT, this.rotation), this
          }
          _checkOcclusionQuery() {
            return !1
          }
          disableEdgesRendering() {
            throw (0, cT.k)("EdgesRenderer")
          }
          enableEdgesRendering(TT, UT, mT) {
            throw (0, cT.k)("EdgesRenderer")
          }
          getConnectedParticleSystems() {
            return this._scene.EY.filter((TT => TT.emitter === this))
          }
        }, (() => {
          const mT = "function" === typeof Symbol && Symbol.metadata ? Object.create(LT[Symbol.metadata] ?? null) : void 0;
          UT = [eT.i.filter((function() {
            return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0]) && !Array.isArray(arguments.length <= 3 ? void 0 : arguments[3]) && !Array.isArray(arguments.length <= 4 ? void 0 : arguments[4]) && !Array.isArray(arguments.length <= 5 ? void 0 : arguments[5]) && !Array.isArray(arguments.length <= 6 ? void 0 : arguments[6])
          }))], (0, WT.h)(TT, null, UT, {
            kind: "method",
            name: "_ApplySkeleton",
            static: !0,
            private: !1,
            access: {
              has: TT => "_ApplySkeleton" in TT,
              get: TT => TT._ApplySkeleton
            },
            metadata: mT
          }, null, pT), mT && Object.defineProperty(TT, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: mT
          })
        })(), TT.OCCLUSION_TYPE_NONE = ((0, WT.k)(TT, pT), 0), TT.OCCLUSION_TYPE_OPTIMISTIC = 1, TT.OCCLUSION_TYPE_STRICT = 2, TT.OCCLUSION_ALGORITHM_TYPE_ACCURATE = 0, TT.OCCLUSION_ALGORITHM_TYPE_CONSERVATIVE = 1, TT.CULLINGSTRATEGY_STANDARD = 0, TT.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY = 1, TT.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION = 2, TT.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION_THEN_BSPHERE_ONLY = 3, TT.DefaultIsPickable = !0, TT
      })(),
      XT = !1;

    function IT() {
      XT || (XT = !0, (0, JT.h)("BABYLON.AbstractMesh", yT))
    }(pT = yT.prototype).createOrUpdateSubmeshesOctree ?? (pT.createOrUpdateSubmeshesOctree = (0, cT.j)("AbstractMesh", "createOrUpdateSubmeshesOctree")), (BT = yT.prototype).getPhysicsImpostor ?? (BT.getPhysicsImpostor = (0, cT.j)("AbstractMesh", "getPhysicsImpostor")), (ZT = yT.prototype).setPhysicsLinkWith ?? (ZT.setPhysicsLinkWith = (0, cT.j)("AbstractMesh", "setPhysicsLinkWith")), Object.getOwnPropertyDescriptor(yT.prototype, "occlusionRetryCount") || Object.defineProperty(yT.prototype, "occlusionRetryCount", (0, cT.h)("AbstractMesh", "occlusionRetryCount")), Object.getOwnPropertyDescriptor(yT.prototype, "occlusionType") || Object.defineProperty(yT.prototype, "occlusionType", (0, cT.h)("AbstractMesh", "occlusionType")), Object.getOwnPropertyDescriptor(yT.prototype, "occlusionQueryAlgorithmType") || Object.defineProperty(yT.prototype, "occlusionQueryAlgorithmType", (0, cT.h)("AbstractMesh", "occlusionQueryAlgorithmType")), Object.getOwnPropertyDescriptor(yT.prototype, "isOccluded") || Object.defineProperty(yT.prototype, "isOccluded", (0, cT.h)("AbstractMesh", "isOccluded")), Object.getOwnPropertyDescriptor(yT.prototype, "isOcclusionQueryInProgress") || Object.defineProperty(yT.prototype, "isOcclusionQueryInProgress", (0, cT.h)("AbstractMesh", "isOcclusionQueryInProgress")), Object.getOwnPropertyDescriptor(yT.prototype, "forceRenderingWhenOccluded") || Object.defineProperty(yT.prototype, "forceRenderingWhenOccluded", (0, cT.h)("AbstractMesh", "forceRenderingWhenOccluded")), Object.getOwnPropertyDescriptor(yT.prototype, "occlusionForRenderPassId") || Object.defineProperty(yT.prototype, "occlusionForRenderPassId", (0, cT.h)("AbstractMesh", "occlusionForRenderPassId")), Object.getOwnPropertyDescriptor(yT.prototype, "decalMap") || Object.defineProperty(yT.prototype, "decalMap", (0, cT.h)("AbstractMesh", "decalMap")), Object.getOwnPropertyDescriptor(yT.prototype, "XV") || Object.defineProperty(yT.prototype, "XV", (0, cT.h)("AbstractMesh", "XV")), Object.getOwnPropertyDescriptor(yT.prototype, "physicsImpostor") || Object.defineProperty(yT.prototype, "physicsImpostor", (0, cT.h)("AbstractMesh", "physicsImpostor")), Object.getOwnPropertyDescriptor(yT.prototype, "showBoundingBox") || Object.defineProperty(yT.prototype, "showBoundingBox", (0, cT.h)("AbstractMesh", "showBoundingBox")), Object.getOwnPropertyDescriptor(yT.prototype, "edgesRenderer") || Object.defineProperty(yT.prototype, "edgesRenderer", (0, cT.h)("AbstractMesh", "edgesRenderer")), Object.getOwnPropertyDescriptor(yT.prototype, "renderOutline") || Object.defineProperty(yT.prototype, "renderOutline", (0, cT.h)("AbstractMesh", "renderOutline")), Object.getOwnPropertyDescriptor(yT.prototype, "renderOverlay") || Object.defineProperty(yT.prototype, "renderOverlay", (0, cT.h)("AbstractMesh", "renderOverlay"))
  },
  40550: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => vT
    });
    var WT = mT(37188),
      zT = mT(37367),
      MT = mT(40546),
      gT = mT(40257),
      nT = mT(40418),
      HT = mT(40557),
      kT = mT(40432),
      jT = mT(40201),
      lT = mT(38800),
      LT = mT(40129),
      pT = mT(40444),
      BT = mT(37216),
      ZT = mT(40564),
      cT = mT(40171);
    class vT {
      get boundingBias() {
        return this._boundingBias
      }
      set boundingBias(TT) {
        this._boundingBias ? this._boundingBias.Gw(TT) : this._boundingBias = TT.clone(), this._updateBoundingInfo(!0, null)
      }
      static CreateGeometryForMesh(TT) {
        const UT = new vT(vT.RandomId(), TT.KF());
        return UT.applyToMesh(TT), UT
      }
      get meshes() {
        return this._meshes
      }
      constructor(TT, UT, mT) {
        let zT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          MT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          gT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        this.delayLoadState = 0, this._totalVertices = 0, this._isDisposed = !1, this._extend = {
          minimum: new WT.p(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE),
          maximum: new WT.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE)
        }, this._indexBufferIsUpdatable = !1, this._positionsCache = [], this._parentContainer = null, this.useBoundingInfoFromGeometry = !1, this._scene = UT || BT.c.LastCreatedScene, this._scene && (this.id = TT, this.uniqueId = this._scene.getUniqueId(), this._engine = this._scene.eB(), this._meshes = [], this._vertexBuffers = {}, this._indices = [], this._updatable = zT, null !== gT && (this._totalVertices = gT), mT ? this.setAllVerticesData(mT, zT) : null === gT && (this._totalVertices = 0), this._engine.getCaps().vertexArrayObject && (this._vertexArrayObjects = {}), MT && (this.applyToMesh(MT), MT.computeWorldMatrix(!0)))
      }
      get extend() {
        return this._extend
      }
      KF() {
        return this._scene
      }
      eB() {
        return this._engine
      }
      isReady() {
        return 1 === this.delayLoadState || 0 === this.delayLoadState
      }
      get doNotSerialize() {
        for (let TT = 0; TT < this._meshes.length; TT++)
          if (!this._meshes[TT].doNotSerialize) return !1;
        return !0
      }
      _rebuild() {
        this._vertexArrayObjects && (this._vertexArrayObjects = {}), 0 !== this._meshes.length && this._indices && (this._indexBuffer = this._engine.createIndexBuffer(this._indices, this._updatable, "Geometry_" + this.id + "_IndexBuffer"));
        const TT = new Set;
        for (const UT in this._vertexBuffers) TT.add(this._vertexBuffers[UT].getWrapperBuffer());
        TT.forEach((TT => {
          TT._rebuild()
        }))
      }
      setAllVerticesData(TT, UT) {
        TT.applyToGeometry(this, UT), this._notifyUpdate()
      }
      setVerticesData(TT, UT) {
        let mT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          WT = arguments.length > 3 ? arguments[3] : void 0;
        mT && Array.isArray(UT) && (UT = new Float32Array(UT));
        const zT = new gT.i(this._engine, UT, TT, {
          updatable: mT,
          postponeInternalCreation: 0 === this._meshes.length,
          stride: WT,
          label: "Geometry_" + this.id + "_" + TT
        });
        this.setVerticesBuffer(zT)
      }
      removeVerticesData(TT) {
        this._vertexBuffers[TT] && (this._vertexBuffers[TT].dispose(), delete this._vertexBuffers[TT]), this._vertexArrayObjects && this._disposeVertexArrayObjects()
      }
      setVerticesBuffer(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          mT = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        const zT = TT.getKind();
        this._vertexBuffers[zT] && mT && this._vertexBuffers[zT].dispose(), TT._buffer && TT._ownsBuffer && TT._buffer._increaseReferences(), this._vertexBuffers[zT] = TT;
        const MT = this._meshes,
          nT = MT.length;
        if (zT === gT.i.PositionKind) {
          this._totalVertices = UT ?? TT._maxVerticesCount, this._updateExtend(this.useBoundingInfoFromGeometry && this._boundingInfo ? null : TT.getFloatData(this._totalVertices)), this._resetPointsArrayCache();
          const mT = this._extend && this._extend.minimum || new WT.p(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE),
            zT = this._extend && this._extend.maximum || new WT.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
          for (let TT = 0; TT < nT; TT++) {
            const UT = MT[TT];
            UT.buildBoundingInfo(mT, zT), UT._createGlobalSubMesh(UT.isUnIndexed), UT.computeWorldMatrix(!0), UT.synchronizeInstances()
          }
        }
        this._notifyUpdate(zT)
      }
      updateVerticesDataDirectly(TT, UT, mT) {
        let WT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const zT = this.getVertexBuffer(TT);
        zT && (zT.updateDirectly(UT, mT, WT), this._notifyUpdate(TT))
      }
      updateVerticesData(TT, UT) {
        let mT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const WT = this.getVertexBuffer(TT);
        WT && (WT.update(UT), TT === gT.i.PositionKind && this._updateBoundingInfo(mT, UT), this._notifyUpdate(TT))
      }
      _updateBoundingInfo(TT, UT) {
        if (TT && this._updateExtend(UT), this._resetPointsArrayCache(), TT) {
          const TT = this._meshes;
          for (const UT of TT) {
            UT.hasBoundingInfo ? UT.rV().reConstruct(this._extend.minimum, this._extend.maximum) : UT.buildBoundingInfo(this._extend.minimum, this._extend.maximum);
            const TT = UT.rY;
            for (const UT of TT) UT.refreshBoundingInfo()
          }
        }
      }
      _bind(TT, UT, mT, WT) {
        if (!TT) return;
        void 0 === UT && (UT = this._indexBuffer);
        const zT = this.getVertexBuffers();
        if (!zT) return;
        if (UT != this._indexBuffer || !this._vertexArrayObjects && !WT) return void this._engine.bindBuffers(zT, UT, TT, mT);
        const MT = WT || this._vertexArrayObjects,
          gT = this._engine;
        MT[TT.key] || (MT[TT.key] = gT.recordVertexArrayObject(zT, UT, TT, mT)), gT.bindVertexArrayObject(MT[TT.key], UT)
      }
      getTotalVertices() {
        return this.isReady() ? this._totalVertices : 0
      }
      getVerticesData(TT, UT, mT) {
        const WT = this.getVertexBuffer(TT);
        return WT ? WT.getFloatData(this._totalVertices, mT || UT && 1 !== this._meshes.length) : null
      }
      copyVerticesData(TT, UT) {
        const mT = this.getVertexBuffer(TT);
        if (!mT) return;
        UT[TT] || (UT[TT] = new Float32Array(this._totalVertices * mT.getSize()));
        const WT = mT.getData();
        WT && (0, cT.h)(WT, mT.getSize(), mT.type, mT.byteOffset, mT.byteStride, mT.normalized, this._totalVertices, UT[TT])
      }
      isVertexBufferUpdatable(TT) {
        const UT = this._vertexBuffers[TT];
        return !!UT && UT.isUpdatable()
      }
      getVertexBuffer(TT) {
        return this.isReady() ? this._vertexBuffers[TT] : null
      }
      getVertexBuffers() {
        return this.isReady() ? this._vertexBuffers : null
      }
      isVerticesDataPresent(TT) {
        return this._vertexBuffers ? void 0 !== this._vertexBuffers[TT] : !!this._delayInfo && -1 !== this._delayInfo.indexOf(TT)
      }
      getVerticesDataKinds() {
        const TT = [];
        let UT;
        if (!this._vertexBuffers && this._delayInfo)
          for (UT in this._delayInfo) TT.push(UT);
        else
          for (UT in this._vertexBuffers) TT.push(UT);
        return TT
      }
      updateIndices(TT, UT) {
        let mT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this._indexBuffer)
          if (this._indexBufferIsUpdatable) {
            const WT = TT.length !== this._indices.length;
            if (mT || (this._indices = TT.slice()), this._engine.updateDynamicIndexBuffer(this._indexBuffer, TT, UT), WT)
              for (const TT of this._meshes) TT._createGlobalSubMesh(!0)
          } else this.setIndices(TT, null, !0)
      }
      setIndexBuffer(TT, UT, mT) {
        let WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._indices = [], this._indexBufferIsUpdatable = !1, this._indexBuffer = TT, this._totalVertices = UT, this._totalIndices = mT, TT.is32Bits = null === WT ? UT > 65535 : WT;
        for (const zT of this._meshes) zT._createGlobalSubMesh(!0), zT.synchronizeInstances();
        this._notifyUpdate()
      }
      setIndices(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          mT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          WT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this._indexBuffer && this._engine._releaseBuffer(this._indexBuffer), this._indices = TT, this._indexBufferIsUpdatable = mT, 0 !== this._meshes.length && this._indices && (this._indexBuffer = this._engine.createIndexBuffer(this._indices, mT, "Geometry_" + this.id + "_IndexBuffer")), void 0 != UT && (this._totalVertices = UT);
        for (const zT of this._meshes) zT._createGlobalSubMesh(!WT), zT.synchronizeInstances();
        this._notifyUpdate()
      }
      getTotalIndices() {
        return this.isReady() ? void 0 !== this._totalIndices ? this._totalIndices : this._indices.length : 0
      }
      vWT(TT, UT) {
        if (!this.isReady()) return null;
        const mT = this._indices;
        return UT || TT && 1 !== this._meshes.length ? mT.slice() : mT
      }
      getIndexBuffer() {
        return this.isReady() ? this._indexBuffer : null
      }
      _releaseVertexArrayObject() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        TT && this._vertexArrayObjects && this._vertexArrayObjects[TT.key] && (this._engine.releaseVertexArrayObject(this._vertexArrayObjects[TT.key]), delete this._vertexArrayObjects[TT.key])
      }
      releaseForMesh(TT, UT) {
        const mT = this._meshes,
          WT = mT.indexOf(TT); - 1 !== WT && (mT.splice(WT, 1), this._vertexArrayObjects && TT._invalidateInstanceVertexArrayObject(), TT._geometry = null, 0 === mT.length && UT && this.dispose())
      }
      applyToMesh(TT) {
        if (TT._geometry === this) return;
        const UT = TT._geometry;
        UT && UT.releaseForMesh(TT), this._vertexArrayObjects && TT._invalidateInstanceVertexArrayObject();
        const mT = this._meshes;
        TT._geometry = this, TT._internalAbstractMeshDataInfo._positions = null, this._scene.pushGeometry(this), mT.push(TT), this.isReady() ? this._applyToMesh(TT) : this._boundingInfo && TT.setBoundingInfo(this._boundingInfo)
      }
      _updateExtend() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (this.useBoundingInfoFromGeometry && this._boundingInfo) this._extend = {
          minimum: this._boundingInfo.minimum.clone(),
          maximum: this._boundingInfo.maximum.clone()
        };
        else {
          if (!TT && (TT = this.getVerticesData(gT.i.PositionKind), !TT)) return;
          this._extend = (0, pT.f)(TT, 0, this._totalVertices, this.boundingBias, 3)
        }
      }
      _applyToMesh(TT) {
        for (const UT in this._vertexBuffers) {
          const mT = this._vertexBuffers[UT];
          mT._buffer.getBuffer() || mT.create(), UT === gT.i.PositionKind && (this._extend || this._updateExtend(), TT.buildBoundingInfo(this._extend.minimum, this._extend.maximum), TT._createGlobalSubMesh(TT.isUnIndexed), TT._updateBoundingInfo())
        }!this._indexBuffer && this._indices && this._indices.length > 0 && (this._indexBuffer = this._engine.createIndexBuffer(this._indices, this._updatable, "Geometry_" + this.id + "_IndexBuffer")), TT._syncGeometryWithMorphTargetManager(), TT.synchronizeInstances()
      }
      _notifyUpdate(TT) {
        this.onGeometryUpdated && this.onGeometryUpdated(this, TT), this._vertexArrayObjects && this._disposeVertexArrayObjects();
        for (const UT of this._meshes) UT._markSubMeshesAsAttributesDirty()
      }
      load(TT, UT) {
        2 !== this.delayLoadState && (this.isReady() ? UT && UT() : (this.delayLoadState = 2, this._queueLoad(TT, UT)))
      }
      _queueLoad(TT, UT) {
        this.delayLoadingFile && (TT.addPendingData(this), (async () => {
          try {
            const mT = await TT._loadDelayedFileAsync(this.delayLoadingFile, !1, !0);
            if (!this._delayLoadingFunction) return void TT.removePendingData(this);
            this._delayLoadingFunction(JSON.parse(mT), this), this.delayLoadState = 1, this._delayInfo = [], TT.removePendingData(this);
            const WT = this._meshes,
              zT = WT.length;
            for (let TT = 0; TT < zT; TT++) this._applyToMesh(WT[TT]);
            UT && UT()
          } catch (mT) {
            TT.removePendingData(this), TT.bJ || lT.b.Error(`Unable to delay load geometry "${this.id}" from "${this.delayLoadingFile}": ${mT}`)
          }
        })())
      }
      toLeftHanded() {
        const TT = this.vWT(!1);
        if (null != TT && TT.length > 0) {
          for (let UT = 0; UT < TT.length; UT += 3) {
            const mT = TT[UT + 0];
            TT[UT + 0] = TT[UT + 2], TT[UT + 2] = mT
          }
          this.setIndices(TT)
        }
        const UT = this.getVerticesData(gT.i.PositionKind, !1);
        if (null != UT && UT.length > 0) {
          for (let TT = 0; TT < UT.length; TT += 3) UT[TT + 2] = -UT[TT + 2];
          this.setVerticesData(gT.i.PositionKind, UT, !1)
        }
        const mT = this.getVerticesData(gT.i.NormalKind, !1);
        if (null != mT && mT.length > 0) {
          for (let TT = 0; TT < mT.length; TT += 3) mT[TT + 2] = -mT[TT + 2];
          this.setVerticesData(gT.i.NormalKind, mT, !1)
        }
      }
      _resetPointsArrayCache() {
        this._positions = null
      }
      _generatePointsArray() {
        if (this._positions) return !0;
        const TT = this.getVerticesData(gT.i.PositionKind);
        if (!TT || 0 === TT.length) return !1;
        for (let UT = 3 * this._positionsCache.length, mT = this._positionsCache.length; UT < TT.length; UT += 3, ++mT) this._positionsCache[mT] = WT.p.FromArray(TT, UT);
        for (let UT = 0, mT = 0; UT < TT.length; UT += 3, ++mT) this._positionsCache[mT].set(TT[0 + UT], TT[1 + UT], TT[2 + UT]);
        return this._positionsCache.length = TT.length / 3, this._positions = this._positionsCache, !0
      }
      bJ() {
        return this._isDisposed
      }
      _disposeVertexArrayObjects() {
        if (this._vertexArrayObjects) {
          for (const mT in this._vertexArrayObjects) this._engine.releaseVertexArrayObject(this._vertexArrayObjects[mT]);
          this._vertexArrayObjects = {};
          const TT = this._meshes,
            UT = TT.length;
          for (let mT = 0; mT < UT; mT++) TT[mT]._invalidateInstanceVertexArrayObject()
        }
      }
      dispose() {
        const TT = this._meshes,
          UT = TT.length;
        let mT;
        for (mT = 0; mT < UT; mT++) this.releaseForMesh(TT[mT]);
        this._meshes.length = 0, this._disposeVertexArrayObjects();
        for (const WT in this._vertexBuffers) this._vertexBuffers[WT].dispose();
        if (this._vertexBuffers = {}, this._totalVertices = 0, this._indexBuffer && this._engine._releaseBuffer(this._indexBuffer), this._indexBuffer = null, this._indices = [], this.delayLoadState = 0, this.delayLoadingFile = null, this._delayLoadingFunction = null, this._delayInfo = [], this._boundingInfo = null, this._scene.removeGeometry(this), this._parentContainer) {
          const TT = this._parentContainer.geometries.indexOf(this);
          TT > -1 && this._parentContainer.geometries.splice(TT, 1), this._parentContainer = null
        }
        this._isDisposed = !0
      }
      copy(TT) {
        const UT = new vT(TT, this._scene),
          mT = this.vWT(void 0, !0);
        mT && UT.setIndices(mT);
        let WT, zT = !1;
        for (WT in this._vertexBuffers) {
          const TT = this.getVertexBuffer(WT),
            mT = TT.getData();
          if (!mT) continue;
          const MT = TT.isUpdatable(),
            nT = TT.getSize(),
            {
              type: HT,
              byteOffset: kT,
              byteStride: jT,
              normalized: lT
            } = TT;
          zT = zT || MT;
          let LT = this._totalVertices;
          if (TT.getIsInstanced()) {
            let TT;
            TT = mT instanceof Array ? 4 * mT.length : mT.byteLength, LT = TT / jT
          }
          const pT = (0, cT.v)(mT, nT, HT, kT, jT, LT, !0),
            BT = new gT.i(this._engine, pT, WT, {
              updatable: MT,
              useBytes: !1,
              stride: nT,
              size: nT,
              offset: 0,
              type: HT,
              normalized: lT,
              takeBufferOwnership: !0,
              instanced: TT.getIsInstanced()
            });
          UT.setVerticesBuffer(BT, LT)
        }
        for (WT in UT._updatable = zT, UT.delayLoadState = this.delayLoadState, UT.delayLoadingFile = this.delayLoadingFile, UT._delayLoadingFunction = this._delayLoadingFunction, this._delayInfo) UT._delayInfo = UT._delayInfo || [], UT._delayInfo.push(WT);
        return UT._boundingInfo = new kT.e(this._extend.minimum, this._extend.maximum), UT
      }
      serialize() {
        const TT = {};
        return TT.id = this.id, TT.uniqueId = this.uniqueId, TT.updatable = this._updatable, LT.b && LT.b.HasTags(this) && (TT.tags = LT.b.GetTags(this)), TT
      }
      _toNumberArray(TT) {
        return Array.isArray(TT) ? TT : Array.prototype.slice.call(TT)
      }
      clearCachedData() {
        this._totalIndices = this._indices.length, this._indices = [], this._resetPointsArrayCache();
        for (const TT in this._vertexBuffers) Object.prototype.hasOwnProperty.call(this._vertexBuffers, TT) && (this._vertexBuffers[TT]._buffer._data = null)
      }
      serializeVerticeData() {
        const TT = this.serialize();
        return this.isVerticesDataPresent(gT.i.PositionKind) && (TT.positions = this._toNumberArray(this.getVerticesData(gT.i.PositionKind)), this.isVertexBufferUpdatable(gT.i.PositionKind) && (TT.positionsUpdatable = !0)), this.isVerticesDataPresent(gT.i.NormalKind) && (TT.normals = this._toNumberArray(this.getVerticesData(gT.i.NormalKind)), this.isVertexBufferUpdatable(gT.i.NormalKind) && (TT.normalsUpdatable = !0)), this.isVerticesDataPresent(gT.i.TangentKind) && (TT.tangents = this._toNumberArray(this.getVerticesData(gT.i.TangentKind)), this.isVertexBufferUpdatable(gT.i.TangentKind) && (TT.tangentsUpdatable = !0)), this.isVerticesDataPresent(gT.i.UVKind) && (TT.uvs = this._toNumberArray(this.getVerticesData(gT.i.UVKind)), this.isVertexBufferUpdatable(gT.i.UVKind) && (TT.uvsUpdatable = !0)), this.isVerticesDataPresent(gT.i.UV2Kind) && (TT.uvs2 = this._toNumberArray(this.getVerticesData(gT.i.UV2Kind)), this.isVertexBufferUpdatable(gT.i.UV2Kind) && (TT.uvs2Updatable = !0)), this.isVerticesDataPresent(gT.i.UV3Kind) && (TT.uvs3 = this._toNumberArray(this.getVerticesData(gT.i.UV3Kind)), this.isVertexBufferUpdatable(gT.i.UV3Kind) && (TT.uvs3Updatable = !0)), this.isVerticesDataPresent(gT.i.UV4Kind) && (TT.uvs4 = this._toNumberArray(this.getVerticesData(gT.i.UV4Kind)), this.isVertexBufferUpdatable(gT.i.UV4Kind) && (TT.uvs4Updatable = !0)), this.isVerticesDataPresent(gT.i.UV5Kind) && (TT.uvs5 = this._toNumberArray(this.getVerticesData(gT.i.UV5Kind)), this.isVertexBufferUpdatable(gT.i.UV5Kind) && (TT.uvs5Updatable = !0)), this.isVerticesDataPresent(gT.i.UV6Kind) && (TT.uvs6 = this._toNumberArray(this.getVerticesData(gT.i.UV6Kind)), this.isVertexBufferUpdatable(gT.i.UV6Kind) && (TT.uvs6Updatable = !0)), this.isVerticesDataPresent(gT.i.ColorKind) && (TT.colors = this._toNumberArray(this.getVerticesData(gT.i.ColorKind)), this.isVertexBufferUpdatable(gT.i.ColorKind) && (TT.colorsUpdatable = !0)), this.isVerticesDataPresent(gT.i.MatricesIndicesKind) && (TT.matricesIndices = this._toNumberArray(this.getVerticesData(gT.i.MatricesIndicesKind)), TT.matricesIndicesExpanded = !0, this.isVertexBufferUpdatable(gT.i.MatricesIndicesKind) && (TT.matricesIndicesUpdatable = !0)), this.isVerticesDataPresent(gT.i.MatricesWeightsKind) && (TT.matricesWeights = this._toNumberArray(this.getVerticesData(gT.i.MatricesWeightsKind)), this.isVertexBufferUpdatable(gT.i.MatricesWeightsKind) && (TT.matricesWeightsUpdatable = !0)), TT.indices = this._toNumberArray(this.vWT()), TT
      }
      static ExtractFromMesh(TT, UT) {
        const mT = TT._geometry;
        return mT ? mT.copy(UT) : null
      }
      static RandomId() {
        return jT.j.RandomId()
      }
      static _GetGeometryByLoadedUniqueId(TT, UT) {
        for (let mT = 0; mT < UT.geometries.length; mT++)
          if (UT.geometries[mT]._loadedUniqueId === TT) return UT.geometries[mT];
        return null
      }
      static _ImportGeometry(TT, UT) {
        const mT = UT.KF(),
          WT = TT.geometryUniqueId,
          MT = TT.geometryId;
        if (WT || MT) {
          const TT = WT ? this._GetGeometryByLoadedUniqueId(WT, mT) : mT.getGeometryById(MT);
          TT && TT.applyToMesh(UT)
        } else if (TT instanceof ArrayBuffer) {
          const mT = UT._binaryInfo;
          if (mT.positionsAttrDesc && mT.positionsAttrDesc.count > 0) {
            const WT = new Float32Array(TT, mT.positionsAttrDesc.offset, mT.positionsAttrDesc.count);
            UT.setVerticesData(gT.i.PositionKind, WT, !1)
          }
          if (mT.normalsAttrDesc && mT.normalsAttrDesc.count > 0) {
            const WT = new Float32Array(TT, mT.normalsAttrDesc.offset, mT.normalsAttrDesc.count);
            UT.setVerticesData(gT.i.NormalKind, WT, !1)
          }
          if (mT.tangetsAttrDesc && mT.tangetsAttrDesc.count > 0) {
            const WT = new Float32Array(TT, mT.tangetsAttrDesc.offset, mT.tangetsAttrDesc.count);
            UT.setVerticesData(gT.i.TangentKind, WT, !1)
          }
          if (mT.uvsAttrDesc && mT.uvsAttrDesc.count > 0) {
            const WT = new Float32Array(TT, mT.uvsAttrDesc.offset, mT.uvsAttrDesc.count);
            if (ZT.c)
              for (let TT = 1; TT < WT.length; TT += 2) WT[TT] = 1 - WT[TT];
            UT.setVerticesData(gT.i.UVKind, WT, !1)
          }
          if (mT.uvs2AttrDesc && mT.uvs2AttrDesc.count > 0) {
            const WT = new Float32Array(TT, mT.uvs2AttrDesc.offset, mT.uvs2AttrDesc.count);
            if (ZT.c)
              for (let TT = 1; TT < WT.length; TT += 2) WT[TT] = 1 - WT[TT];
            UT.setVerticesData(gT.i.UV2Kind, WT, !1)
          }
          if (mT.uvs3AttrDesc && mT.uvs3AttrDesc.count > 0) {
            const WT = new Float32Array(TT, mT.uvs3AttrDesc.offset, mT.uvs3AttrDesc.count);
            if (ZT.c)
              for (let TT = 1; TT < WT.length; TT += 2) WT[TT] = 1 - WT[TT];
            UT.setVerticesData(gT.i.UV3Kind, WT, !1)
          }
          if (mT.uvs4AttrDesc && mT.uvs4AttrDesc.count > 0) {
            const WT = new Float32Array(TT, mT.uvs4AttrDesc.offset, mT.uvs4AttrDesc.count);
            if (ZT.c)
              for (let TT = 1; TT < WT.length; TT += 2) WT[TT] = 1 - WT[TT];
            UT.setVerticesData(gT.i.UV4Kind, WT, !1)
          }
          if (mT.uvs5AttrDesc && mT.uvs5AttrDesc.count > 0) {
            const WT = new Float32Array(TT, mT.uvs5AttrDesc.offset, mT.uvs5AttrDesc.count);
            if (ZT.c)
              for (let TT = 1; TT < WT.length; TT += 2) WT[TT] = 1 - WT[TT];
            UT.setVerticesData(gT.i.UV5Kind, WT, !1)
          }
          if (mT.uvs6AttrDesc && mT.uvs6AttrDesc.count > 0) {
            const WT = new Float32Array(TT, mT.uvs6AttrDesc.offset, mT.uvs6AttrDesc.count);
            if (ZT.c)
              for (let TT = 1; TT < WT.length; TT += 2) WT[TT] = 1 - WT[TT];
            UT.setVerticesData(gT.i.UV6Kind, WT, !1)
          }
          if (mT.colorsAttrDesc && mT.colorsAttrDesc.count > 0) {
            const WT = new Float32Array(TT, mT.colorsAttrDesc.offset, mT.colorsAttrDesc.count);
            UT.setVerticesData(gT.i.ColorKind, WT, !1, mT.colorsAttrDesc.stride)
          }
          if (mT.matricesIndicesAttrDesc && mT.matricesIndicesAttrDesc.count > 0) {
            const WT = new Int32Array(TT, mT.matricesIndicesAttrDesc.offset, mT.matricesIndicesAttrDesc.count),
              zT = [];
            for (let TT = 0; TT < WT.length; TT++) {
              const UT = WT[TT];
              zT.push(255 & UT), zT.push((65280 & UT) >> 8), zT.push((16711680 & UT) >> 16), zT.push(UT >> 24 & 255)
            }
            UT.setVerticesData(gT.i.MatricesIndicesKind, zT, !1)
          }
          if (mT.matricesIndicesExtraAttrDesc && mT.matricesIndicesExtraAttrDesc.count > 0) {
            const WT = new Int32Array(TT, mT.matricesIndicesExtraAttrDesc.offset, mT.matricesIndicesExtraAttrDesc.count),
              zT = [];
            for (let TT = 0; TT < WT.length; TT++) {
              const UT = WT[TT];
              zT.push(255 & UT), zT.push((65280 & UT) >> 8), zT.push((16711680 & UT) >> 16), zT.push(UT >> 24 & 255)
            }
            UT.setVerticesData(gT.i.MatricesIndicesExtraKind, zT, !1)
          }
          if (mT.matricesWeightsAttrDesc && mT.matricesWeightsAttrDesc.count > 0) {
            const WT = new Float32Array(TT, mT.matricesWeightsAttrDesc.offset, mT.matricesWeightsAttrDesc.count);
            UT.setVerticesData(gT.i.MatricesWeightsKind, WT, !1)
          }
          if (mT.indicesAttrDesc && mT.indicesAttrDesc.count > 0) {
            const WT = new Int32Array(TT, mT.indicesAttrDesc.offset, mT.indicesAttrDesc.count);
            UT.setIndices(WT, null)
          }
          if (mT.subMeshesAttrDesc && mT.subMeshesAttrDesc.count > 0) {
            const WT = new Int32Array(TT, mT.subMeshesAttrDesc.offset, 5 * mT.subMeshesAttrDesc.count);
            UT.rY = [];
            for (let TT = 0; TT < mT.subMeshesAttrDesc.count; TT++) {
              const mT = WT[5 * TT + 0],
                zT = WT[5 * TT + 1],
                MT = WT[5 * TT + 2],
                gT = WT[5 * TT + 3],
                HT = WT[5 * TT + 4];
              nT.e.AddToMesh(mT, zT, MT, gT, HT, UT)
            }
          }
        } else if (TT.positions && TT.normals && TT.indices) {
          if (UT.setVerticesData(gT.i.PositionKind, TT.positions, TT.positions._updatable || TT.positionsUpdatable), UT.setVerticesData(gT.i.NormalKind, TT.normals, TT.normals._updatable || TT.normalsUpdatable), TT.tangents && UT.setVerticesData(gT.i.TangentKind, TT.tangents, TT.tangents._updatable || TT.tangentsUpdatable), TT.uvs && UT.setVerticesData(gT.i.UVKind, TT.uvs, TT.uvs._updatable || TT.uvsUpdatable), TT.uvs2 && UT.setVerticesData(gT.i.UV2Kind, TT.uvs2, TT.uvs2._updatable || TT.uvs2Updatable), TT.uvs3 && UT.setVerticesData(gT.i.UV3Kind, TT.uvs3, TT.uvs3._updatable || TT.uvs3Updatable), TT.uvs4 && UT.setVerticesData(gT.i.UV4Kind, TT.uvs4, TT.uvs4._updatable || TT.uvs4Updatable), TT.uvs5 && UT.setVerticesData(gT.i.UV5Kind, TT.uvs5, TT.uvs5._updatable || TT.uvs5Updatable), TT.uvs6 && UT.setVerticesData(gT.i.UV6Kind, TT.uvs6, TT.uvs6._updatable || TT.uvs6Updatable), TT.colors && UT.setVerticesData(gT.i.ColorKind, zT.g.CheckColors4(TT.colors, TT.positions.length / 3), TT.colors._updatable), TT.matricesIndices)
            if (TT.matricesIndices._isExpanded || TT.matricesIndicesExpanded) delete TT.matricesIndices._isExpanded, delete TT.matricesIndicesExpanded, UT.setVerticesData(gT.i.MatricesIndicesKind, TT.matricesIndices, TT.matricesIndices._updatable || TT.matricesIndicesUpdatable);
            else {
              const mT = [];
              for (let UT = 0; UT < TT.matricesIndices.length; UT++) {
                const WT = TT.matricesIndices[UT];
                mT.push(255 & WT), mT.push((65280 & WT) >> 8), mT.push((16711680 & WT) >> 16), mT.push(WT >> 24 & 255)
              }
              UT.setVerticesData(gT.i.MatricesIndicesKind, mT, TT.matricesIndices._updatable || TT.matricesIndicesUpdatable)
            } if (TT.matricesIndicesExtra)
            if (TT.matricesIndicesExtraExpanded || TT.matricesIndicesExtra._isExpanded) delete TT.matricesIndices._isExpanded, delete TT.matricesIndicesExtraExpanded, UT.setVerticesData(gT.i.MatricesIndicesExtraKind, TT.matricesIndicesExtra, TT.matricesIndicesExtra._updatable || TT.matricesIndicesExtraUpdatable);
            else {
              const mT = [];
              for (let UT = 0; UT < TT.matricesIndicesExtra.length; UT++) {
                const WT = TT.matricesIndicesExtra[UT];
                mT.push(255 & WT), mT.push((65280 & WT) >> 8), mT.push((16711680 & WT) >> 16), mT.push(WT >> 24 & 255)
              }
              UT.setVerticesData(gT.i.MatricesIndicesExtraKind, mT, TT.matricesIndicesExtra._updatable || TT.matricesIndicesExtraUpdatable)
            } TT.matricesWeights && (vT._CleanMatricesWeights(TT, UT), UT.setVerticesData(gT.i.MatricesWeightsKind, TT.matricesWeights, TT.matricesWeights._updatable)), TT.matricesWeightsExtra && UT.setVerticesData(gT.i.MatricesWeightsExtraKind, TT.matricesWeightsExtra, TT.matricesWeights._updatable), UT.setIndices(TT.indices, null)
        }
        if (TT.rY) {
          UT.rY = [];
          for (let mT = 0; mT < TT.rY.length; mT++) {
            const WT = TT.rY[mT];
            nT.e.AddToMesh(WT.materialIndex, WT.verticesStart, WT.verticesCount, WT.indexStart, WT.indexCount, UT)
          }
        }
        UT._shouldGenerateFlatShading && (UT.convertToFlatShadedMesh(), UT._shouldGenerateFlatShading = !1), UT.computeWorldMatrix(!0), mT.onMeshImportedObservable.notifyObservers(UT)
      }
      static _CleanMatricesWeights(TT, UT) {
        const mT = .001;
        if (!HT.e.CleanBoneMatrixWeights) return;
        let WT;
        if (!(TT.skeletonId > -1)) return;
        {
          const mT = UT.KF().getLastSkeletonById(TT.skeletonId);
          if (!mT) return;
          WT = mT.bones.length
        }
        const zT = UT.getVerticesData(gT.i.MatricesIndicesKind),
          MT = UT.getVerticesData(gT.i.MatricesIndicesExtraKind),
          nT = TT.matricesWeights,
          kT = TT.matricesWeightsExtra,
          jT = TT.numBoneInfluencer,
          lT = nT.length;
        for (let gT = 0; gT < lT; gT += 4) {
          let TT = 0,
            UT = -1;
          for (let WT = 0; WT < 4; WT++) {
            const zT = nT[gT + WT];
            TT += zT, zT < mT && UT < 0 && (UT = WT)
          }
          if (kT)
            for (let WT = 0; WT < 4; WT++) {
              const zT = kT[gT + WT];
              TT += zT, zT < mT && UT < 0 && (UT = WT + 4)
            }
          if ((UT < 0 || UT > jT - 1) && (UT = jT - 1), TT > mT) {
            const UT = 1 / TT;
            for (let TT = 0; TT < 4; TT++) nT[gT + TT] *= UT;
            if (kT)
              for (let TT = 0; TT < 4; TT++) kT[gT + TT] *= UT
          } else UT >= 4 ? (kT[gT + UT - 4] = 1 - TT, MT[gT + UT - 4] = WT) : (nT[gT + UT] = 1 - TT, zT[gT + UT] = WT)
        }
        UT.setVerticesData(gT.i.MatricesIndicesKind, zT), TT.matricesWeightsExtra && UT.setVerticesData(gT.i.MatricesIndicesExtraKind, MT)
      }
      static Parse(TT, UT, mT) {
        const zT = new vT(TT.id, UT, void 0, TT.updatable);
        return zT._loadedUniqueId = TT.uniqueId, LT.b && LT.b.AddTagsTo(zT, TT.tags), TT.delayLoadingFile ? (zT.delayLoadState = 4, zT.delayLoadingFile = mT + TT.delayLoadingFile, zT._boundingInfo = new kT.e(WT.p.FromArray(TT.boundingBoxMinimum), WT.p.FromArray(TT.boundingBoxMaximum)), zT._delayInfo = [], TT.hasUVs && zT._delayInfo.push(gT.i.UVKind), TT.hasUVs2 && zT._delayInfo.push(gT.i.UV2Kind), TT.hasUVs3 && zT._delayInfo.push(gT.i.UV3Kind), TT.hasUVs4 && zT._delayInfo.push(gT.i.UV4Kind), TT.hasUVs5 && zT._delayInfo.push(gT.i.UV5Kind), TT.hasUVs6 && zT._delayInfo.push(gT.i.UV6Kind), TT.hasColors && zT._delayInfo.push(gT.i.ColorKind), TT.hasMatricesIndices && zT._delayInfo.push(gT.i.MatricesIndicesKind), TT.hasMatricesWeights && zT._delayInfo.push(gT.i.MatricesWeightsKind), zT._delayLoadingFunction = MT.d.ImportVertexData) : MT.d.ImportVertexData(TT, zT), UT.pushGeometry(zT, !0), zT
      }
    }
  },
  40585: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => lT,
      g: () => BT
    });
    var WT = mT(37188),
      zT = mT(38800),
      MT = mT(40567),
      gT = mT(40535),
      nT = mT(38793),
      HT = mT(40569),
      kT = mT(40257),
      jT = mT(37239);
    class lT extends MT.d {
      constructor(TT, UT) {
        super(TT, UT.KF()), this._indexInSourceMeshInstanceArray = -1, this._distanceToCamera = 0, UT.o5(this), this._sourceMesh = UT, this._unIndexed = UT._unIndexed, this.position.Gw(UT.position), this.rotation.Gw(UT.rotation), this.gp.Gw(UT.gp), UT.rotationQuaternion && (this.rotationQuaternion = UT.rotationQuaternion.clone()), this.animations = UT.animations.slice();
        for (const mT of UT.getAnimationRanges()) null != mT && this.createAnimationRange(mT.name, mT.from, mT.to);
        if (this.infiniteDistance = UT.infiniteDistance, this.setPivotMatrix(UT.getPivotMatrix()), UT.skeleton || UT.morphTargetManager || !UT.hasBoundingInfo) this.refreshBoundingInfo(!0, !0);
        else {
          const TT = UT.rV();
          this.buildBoundingInfo(TT.minimum, TT.maximum)
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
      set receiveShadows(TT) {
        this._sourceMesh?.receiveShadows !== TT && zT.b.Warn("Setting receiveShadows on an instanced mesh has no effect")
      }
      get material() {
        return this._sourceMesh.material
      }
      set material(TT) {
        this._sourceMesh?.material !== TT && zT.b.Warn("Setting material on an instanced mesh has no effect")
      }
      get visibility() {
        return this._sourceMesh.visibility
      }
      set visibility(TT) {
        this._sourceMesh?.visibility !== TT && zT.b.Warn("Setting visibility on an instanced mesh has no effect")
      }
      get skeleton() {
        return this._sourceMesh.skeleton
      }
      set skeleton(TT) {
        this._sourceMesh?.skeleton !== TT && zT.b.Warn("Setting skeleton on an instanced mesh has no effect")
      }
      get renderingGroupId() {
        return this._sourceMesh.renderingGroupId
      }
      set renderingGroupId(TT) {
        this._sourceMesh && TT !== this._sourceMesh.renderingGroupId && zT.b.Warn("Note - setting renderingGroupId of an instanced mesh has no effect on the scene")
      }
      get meshBlendingTag() {
        return this._sourceMesh.meshBlendingTag
      }
      set meshBlendingTag(TT) {
        this._sourceMesh && TT !== this._sourceMesh.meshBlendingTag && zT.b.Warn("Setting meshBlendingTag on an instanced mesh has no effect")
      }
      getTotalVertices() {
        return this._sourceMesh ? this._sourceMesh.getTotalVertices() : 0
      }
      getTotalIndices() {
        return this._sourceMesh.getTotalIndices()
      }
      get czT() {
        return this._sourceMesh
      }
      get geometry() {
        return this._sourceMesh._geometry
      }
      createInstance(TT) {
        return this._sourceMesh.createInstance(TT)
      }
      isReady() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return this._sourceMesh.isReady(TT, !0)
      }
      getVerticesData(TT, UT, mT) {
        return this._sourceMesh.getVerticesData(TT, UT, mT)
      }
      copyVerticesData(TT, UT) {
        this._sourceMesh.copyVerticesData(TT, UT)
      }
      getVertexBuffer(TT, UT) {
        return this._sourceMesh.getVertexBuffer(TT, UT)
      }
      setVerticesData(TT, UT, mT, WT) {
        return this.czT && this.czT.setVerticesData(TT, UT, mT, WT), this.czT
      }
      updateVerticesData(TT, UT, mT, WT) {
        return this.czT && this.czT.updateVerticesData(TT, UT, mT, WT), this.czT
      }
      setIndices(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return this.czT && this.czT.setIndices(TT, UT), this.czT
      }
      isVerticesDataPresent(TT) {
        return this._sourceMesh.isVerticesDataPresent(TT)
      }
      vWT() {
        return this._sourceMesh.vWT()
      }
      get _positions() {
        return this._sourceMesh._positions
      }
      refreshBoundingInfo() {
        let TT, UT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          mT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.hasBoundingInfo && this.rV().isLocked) return this;
        TT = "object" === typeof UT ? UT : {
          applySkeleton: UT,
          applyMorph: mT
        };
        const WT = this._sourceMesh.geometry ? this._sourceMesh.geometry.boundingBias : null;
        return this._refreshBoundingInfo(this._sourceMesh._getData(TT, null, kT.i.PositionKind), WT), this
      }
      _preActivate() {
        return this._currentLOD && this._currentLOD._preActivate(), this
      }
      _activate(TT, UT) {
        if (super._activate(TT, UT), this._sourceMesh.rY || zT.b.Warn("Instances should only be created for meshes with geometry."), this._currentLOD) {
          if (this._currentLOD._getWorldMatrixDeterminant() >= 0 !== this._getWorldMatrixDeterminant() >= 0) return this._internalAbstractMeshDataInfo._actAsRegularMesh = !0, !0;
          if (this._internalAbstractMeshDataInfo._actAsRegularMesh = !1, this._currentLOD._registerInstanceForRenderId(this, TT), UT) {
            if (!this._currentLOD._internalAbstractMeshDataInfo._isActiveIntermediate) return this._currentLOD._internalAbstractMeshDataInfo._onlyForInstancesIntermediate = !0, !0
          } else if (!this._currentLOD._internalAbstractMeshDataInfo._isActive) return this._currentLOD._internalAbstractMeshDataInfo._onlyForInstances = !0, !0
        }
        return !1
      }
      _postActivate() {
        this._sourceMesh.edgesShareWithInstances && this._sourceMesh._edgesRenderer && this._sourceMesh._edgesRenderer.isEnabled && this._sourceMesh._renderingGroup ? (this._sourceMesh._renderingGroup._edgesRenderers.pushNoDuplicate(this._sourceMesh._edgesRenderer), this._sourceMesh._edgesRenderer.customInstances.push(this.getWorldMatrix())) : this._edgesRenderer && this._edgesRenderer.isEnabled && this._sourceMesh._renderingGroup && this._sourceMesh._renderingGroup._edgesRenderers.push(this._edgesRenderer)
      }
      getWorldMatrix() {
        if (this._currentLOD && this._currentLOD !== this._sourceMesh && this._currentLOD.billboardMode !== HT.c.BILLBOARDMODE_NONE && this._currentLOD._masterMesh !== this) {
          this._billboardWorldMatrix || (this._billboardWorldMatrix = new WT.e);
          const TT = this._currentLOD._masterMesh;
          return this._currentLOD._masterMesh = this, WT.l.JB[7].Gw(this._currentLOD.position), this._currentLOD.position.set(0, 0, 0), this._billboardWorldMatrix.Gw(this._currentLOD.computeWorldMatrix(!0)), this._currentLOD.position.Gw(WT.l.JB[7]), this._currentLOD._masterMesh = TT, this._billboardWorldMatrix
        }
        return super.getWorldMatrix()
      }
      get RP() {
        return !0
      }
      getLOD(TT) {
        if (!TT) return this;
        const UT = this.czT.getLODLevels();
        if (UT && 0 !== UT.length) {
          const UT = this.rV();
          this._currentLOD = this.czT.getLOD(TT, UT.rWT)
        } else this._currentLOD = this.czT;
        return this._currentLOD
      }
      _preActivateForIntermediateRendering(TT) {
        return this.czT._preActivateForIntermediateRendering(TT)
      }
      _syncSubMeshes() {
        if (this.releaseSubMeshes(), this._sourceMesh.rY)
          for (let TT = 0; TT < this._sourceMesh.rY.length; TT++) this._sourceMesh.rY[TT].clone(this, this._sourceMesh);
        return this
      }
      _generatePointsArray() {
        return this._sourceMesh._generatePointsArray()
      }
      _updateBoundingInfo() {
        return this.hasBoundingInfo ? this.rV().update(this.worldMatrixFromCache) : this.buildBoundingInfo(this.absolutePosition, this.absolutePosition, this.worldMatrixFromCache), this._updateSubMeshesBoundingInfo(this.worldMatrixFromCache), this
      }
      clone(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          mT = arguments.length > 2 ? arguments[2] : void 0;
        const WT = ((arguments.length > 3 ? arguments[3] : void 0) || this._sourceMesh).createInstance(TT);
        if (nT.c.DeepCopy(this, WT, ["name", "rY", "uniqueId", "parent", "lightSources", "receiveShadows", "material", "visibility", "skeleton", "czT", "RP", "facetNb", "isFacetDataEnabled", "isBlocked", "useBones", "ZzT", "collider", "edgesRenderer", "forward", "up", "right", "absolutePosition", "absoluteScaling", "absoluteRotationQuaternion", "znT", "nonUniformScaling", "behaviors", "worldMatrixFromCache", "hasThinInstances", "hasBoundingInfo", "geometry"], []), UT && (WT.parent = UT), !mT)
          for (let zT = 0; zT < this.KF().meshes.length; zT++) {
            const TT = this.KF().meshes[zT];
            TT.parent === this && TT.clone(TT.name, WT)
          }
        return WT.computeWorldMatrix(!0), this.onClonedObservable.notifyObservers(WT), WT
      }
      dispose(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._sourceMesh.N7(this), super.dispose(TT, UT)
      }
      _serializeAsParent(TT) {
        super._serializeAsParent(TT), TT.parentId = this._sourceMesh.uniqueId, TT.parentInstanceIndex = this._indexInSourceMeshInstanceArray
      }
      instantiateHierarchy() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          UT = arguments.length > 1 ? arguments[1] : void 0,
          mT = arguments.length > 2 ? arguments[2] : void 0;
        const WT = this.clone("Clone of " + (this.name || this.id), TT || this.parent, !0, UT && UT.newSourcedMesh);
        WT && mT && mT(this, WT);
        for (const zT of this.getChildTransformNodes(!0)) zT.instantiateHierarchy(WT, UT, mT);
        return WT
      }
    }
    let LT = !1;

    function pT(TT, UT, mT, WT, zT) {
      for (let MT = 0; MT < UT.length; MT++) {
        const gT = TT[UT[MT]] ?? 0,
          nT = zT + mT[MT];
        gT.toArray ? gT.toArray(WT, nT) : gT.copyToArray ? gT.copyToArray(WT, nT) : WT[nT] = gT
      }
    }

    function BT() {
      LT || (LT = !0, gT.d._instancedMeshFactory = (TT, UT) => {
        const mT = new lT(TT, UT);
        if (UT.XV) {
          mT.XV = {};
          for (const TT in UT.XV) mT.XV[TT] = UT.XV[TT]
        }
        return mT
      }, gT.d.prototype.yV = function(TT, UT) {
        if (!this.XV) {
          this.XV = {};
          for (const TT of this.instances) TT.XV = {}
        }
        this._userInstancedBuffersStorage || (this._userInstancedBuffersStorage = {
          data: {},
          vertexBuffers: {},
          strides: {},
          sizes: {},
          vertexArrayObjects: this.eB().getCaps().vertexArrayObject ? {} : void 0
        }), this.XV[TT] = null, this._userInstancedBuffersStorage.strides[TT] = UT;
        const mT = this._userInstancedBuffersStorage;
        mT.interleavedKinds = [], mT.interleavedOffsets = [], mT.interleavedRowStride = 0;
        for (const WT in mT.strides) mT.interleavedKinds.push(WT), mT.interleavedOffsets.push(mT.interleavedRowStride), mT.interleavedRowStride += mT.strides[WT];
        mT.interleavedData = new Float32Array(32 * mT.interleavedRowStride);
        for (const WT in mT.interleavedBuffers) mT.interleavedBuffers[WT].buffer.dispose();
        mT.interleavedBuffers = {}, mT.vertexBuffers[TT] = null;
        for (const WT of this.instances) WT.XV[TT] = null;
        this._invalidateInstanceVertexArrayObject(), this._markSubMeshesAsAttributesDirty()
      }, gT.d.prototype._processInstancedBuffers = function(TT, UT) {
        const mT = this._userInstancedBuffersStorage,
          WT = mT.interleavedRowStride;
        if (!WT) return;
        const zT = TT ? TT.length : 0,
          MT = (zT + 1) * WT;
        let gT = mT.interleavedData;
        if (gT.length < MT) {
          let TT = gT.length;
          for (; TT < MT;) TT *= 2;
          gT = mT.interleavedData = new Float32Array(TT)
        }
        const nT = mT.interleavedKinds,
          HT = mT.interleavedOffsets;
        let jT = 0;
        UT && (pT(this.XV, nT, HT, gT, jT), jT += WT);
        for (let kT = 0; kT < zT; kT++) pT(TT[kT].XV, nT, HT, gT, jT), jT += WT;
        let lT = "shared",
          LT = mT.vertexBuffers;
        this._instanceDataStorage.useMonoDataStorageRenderPass || (lT = this._instanceDataStorage.engine.currentRenderPassId, mT.renderPasses || (mT.renderPasses = {}), mT.renderPasses[lT] || (mT.renderPasses[lT] = {}), LT = mT.renderPasses[lT]);
        const BT = mT.interleavedBuffers[lT];
        let ZT = !BT || BT.data !== gT;
        for (let kT = 0; !ZT && kT < nT.length; kT++) ZT = !LT[nT[kT]];
        if (!ZT) return void BT.buffer.updateDirectly(gT, 0);
        BT?.buffer.dispose();
        const cT = new kT.c(this.eB(), gT, !0, WT, !1, !0);
        for (let kT = 0; kT < nT.length; kT++) {
          const TT = nT[kT],
            UT = cT.createVertexBuffer(TT, HT[kT], mT.strides[TT]);
          UT.hashCode += UT.byteOffset * 2 ** 24, LT[TT] = UT
        }
        mT.interleavedBuffers[lT] = {
          buffer: cT,
          data: gT
        }, this._invalidateInstanceVertexArrayObject()
      }, gT.d.prototype._invalidateInstanceVertexArrayObject = function() {
        if (this._userInstancedBuffersStorage && void 0 !== this._userInstancedBuffersStorage.vertexArrayObjects) {
          for (const TT in this._userInstancedBuffersStorage.vertexArrayObjects) this.eB().releaseVertexArrayObject(this._userInstancedBuffersStorage.vertexArrayObjects[TT]);
          this._userInstancedBuffersStorage.vertexArrayObjects = {}
        }
      }, gT.d.prototype._disposeInstanceSpecificData = function() {
        for (const UT in this._instanceDataStorage.renderPasses) this._instanceDataStorage.renderPasses[UT].instancesBuffer?.dispose();
        for (this._instanceDataStorage.renderPasses = {}, this._instanceDataStorage.dataStorageRenderPass?.instancesBuffer?.dispose(); this.instances.length;) this.instances[0].dispose();
        for (const UT in this.XV) this._userInstancedBuffersStorage.vertexBuffers[UT] && this._userInstancedBuffersStorage.vertexBuffers[UT].dispose();
        const TT = this._userInstancedBuffersStorage?.interleavedBuffers;
        if (TT) {
          for (const UT in TT) TT[UT].buffer.dispose();
          this._userInstancedBuffersStorage.interleavedBuffers = {}
        }
        this._invalidateInstanceVertexArrayObject(), this.XV = {}
      }, (0, jT.h)("BABYLON.InstancedMesh", lT))
    }
  },
  40535: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => oT,
      f: () => RT,
      h: () => KT
    });
    var WT, zT, MT, gT, nT, HT, kT, jT, lT, LT, pT, BT, ZT, cT, vT = mT(37219),
      fT = mT(40201),
      qT = mT(40151),
      iT = mT(38793),
      bT = mT(40129),
      OT = mT(40541),
      eT = mT(40330),
      YT = mT(37188),
      JT = mT(37367),
      xT = mT(40335),
      dT = mT(40257),
      wT = mT(40546),
      tT = mT(40550),
      aT = mT(40567),
      yT = mT(40418),
      XT = mT(40413),
      IT = mT(40511),
      QT = mT(40571),
      sT = mT(40557),
      FT = mT(40122),
      PT = mT(38800),
      VT = mT(37239),
      uT = mT(39965),
      CT = mT(40283);
    class rT {
      constructor(TT, UT) {
        this.distanceOrScreenCoverage = TT, this.mesh = UT
      }
    }
    class KT {}
    class ST {
      constructor() {
        this.batchCache = new NT(this), this.batchCacheReplacementModeInFrozenMode = new NT(this), this.instancesBufferSize = 2048
      }
    }
    class GT {
      constructor() {
        this.renderPasses = {}
      }
    }
    class NT {
      constructor(TT) {
        this.parent = TT, this.mustReturn = !1, this.visibleInstances = new Array, this.renderSelf = [], this.hardwareInstancedRendering = []
      }
    }
    class ET {
      constructor() {
        this.instancesCount = 0, this.matrixBuffer = null, this.previousMatrixBuffer = null, this.matrixBufferSize = 512, this.matrixData = null, this.boundingVectors = [], this.worldMatrices = null
      }
    }
    class hT {
      constructor() {
        this._areNormalsFrozen = !1, this._source = null, this.meshMap = null, this._preActivateId = -1, this._LODLevels = new Array, this._useLODScreenCoverage = !1, this._effectiveMaterial = null, this._forcedInstanceCount = 0, this._overrideRenderingFillMode = null
      }
    }
    const DT = {
      source: null,
      parent: null,
      doNotCloneChildren: !1,
      clonePhysicsImpostor: !0,
      cloneThinInstances: !1
    };
    class oT extends aT.d {
      static _GetDefaultSideOrientation(TT) {
        return TT || oT.FRONTSIDE
      }
      get useLODScreenCoverage() {
        return this._internalMeshDataInfo._useLODScreenCoverage
      }
      set useLODScreenCoverage(TT) {
        this._internalMeshDataInfo._useLODScreenCoverage = TT, this._sortLODLevels()
      }
      get computeBonesUsingShaders() {
        return this._internalAbstractMeshDataInfo._computeBonesUsingShaders
      }
      set computeBonesUsingShaders(TT) {
        this._internalAbstractMeshDataInfo._computeBonesUsingShaders !== TT && (TT && this._internalMeshDataInfo._sourcePositions && (this.setVerticesData(dT.i.PositionKind, this._internalMeshDataInfo._sourcePositions, !0), this._internalMeshDataInfo._sourceNormals && this.setVerticesData(dT.i.NormalKind, this._internalMeshDataInfo._sourceNormals, !0), this._internalMeshDataInfo._sourcePositions = null, this._internalMeshDataInfo._sourceNormals = null), this._internalAbstractMeshDataInfo._computeBonesUsingShaders = TT, this._markSubMeshesAsAttributesDirty())
      }
      get onBeforeRenderObservable() {
        return this._internalMeshDataInfo._onBeforeRenderObservable || (this._internalMeshDataInfo._onBeforeRenderObservable = new vT.d), this._internalMeshDataInfo._onBeforeRenderObservable
      }
      get onBeforeBindObservable() {
        return this._internalMeshDataInfo._onBeforeBindObservable || (this._internalMeshDataInfo._onBeforeBindObservable = new vT.d), this._internalMeshDataInfo._onBeforeBindObservable
      }
      get onAfterRenderObservable() {
        return this._internalMeshDataInfo._onAfterRenderObservable || (this._internalMeshDataInfo._onAfterRenderObservable = new vT.d), this._internalMeshDataInfo._onAfterRenderObservable
      }
      get onBetweenPassObservable() {
        return this._internalMeshDataInfo._onBetweenPassObservable || (this._internalMeshDataInfo._onBetweenPassObservable = new vT.d), this._internalMeshDataInfo._onBetweenPassObservable
      }
      get onBeforeDrawObservable() {
        return this._internalMeshDataInfo._onBeforeDrawObservable || (this._internalMeshDataInfo._onBeforeDrawObservable = new vT.d), this._internalMeshDataInfo._onBeforeDrawObservable
      }
      set onBeforeDraw(TT) {
        this._onBeforeDrawObserver && this.onBeforeDrawObservable.remove(this._onBeforeDrawObserver), this._onBeforeDrawObserver = this.onBeforeDrawObservable.add(TT)
      }
      get ZzT() {
        return this.instances.length > 0
      }
      get hasThinInstances() {
        return (this.forcedInstanceCount || this._thinInstanceDataStorage.instancesCount || 0) > 0
      }
      get forcedInstanceCount() {
        return this._internalMeshDataInfo._forcedInstanceCount
      }
      set forcedInstanceCount(TT) {
        this._internalMeshDataInfo._forcedInstanceCount = TT
      }
      get sideOrientation() {
        return this._internalMeshDataInfo._sideOrientation
      }
      set sideOrientation(TT) {
        this._internalMeshDataInfo._sideOrientation = TT, this._internalAbstractMeshDataInfo._sideOrientationHint = this._scene.useRightHandedSystem && 1 === TT || !this._scene.useRightHandedSystem && 0 === TT
      }
      get _effectiveSideOrientation() {
        return this._internalMeshDataInfo._effectiveSideOrientation
      }
      get overrideMaterialSideOrientation() {
        return this.sideOrientation
      }
      set overrideMaterialSideOrientation(TT) {
        this.sideOrientation = TT, this.material && (this.material.sideOrientation = null)
      }
      get overrideRenderingFillMode() {
        return this._internalMeshDataInfo._overrideRenderingFillMode
      }
      set overrideRenderingFillMode(TT) {
        this._internalMeshDataInfo._overrideRenderingFillMode = TT
      }
      get material() {
        return this._internalAbstractMeshDataInfo._material
      }
      set material(TT) {
        TT && (this.material && null === this.material.sideOrientation || this._internalAbstractMeshDataInfo._sideOrientationHint) && (TT.sideOrientation = null), this._setMaterial(TT)
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
      set isUnIndexed(TT) {
        this._unIndexed !== TT && (this._unIndexed = TT, this._markSubMeshesAsAttributesDirty())
      }
      get worldMatrixInstancedBuffer() {
        const TT = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._instanceDataStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId];
        return TT ? TT.instancesData : void 0
      }
      get previousWorldMatrixInstancedBuffer() {
        const TT = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._instanceDataStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId];
        return TT ? TT.instancesPreviousData : void 0
      }
      get manualUpdateOfWorldMatrixInstancedBuffer() {
        return this._instanceDataStorage.manualUpdate
      }
      set manualUpdateOfWorldMatrixInstancedBuffer(TT) {
        this._instanceDataStorage.manualUpdate = TT
      }
      get manualUpdateOfPreviousWorldMatrixInstancedBuffer() {
        return this._instanceDataStorage.previousManualUpdate
      }
      set manualUpdateOfPreviousWorldMatrixInstancedBuffer(TT) {
        this._instanceDataStorage.previousManualUpdate = TT
      }
      get forceWorldMatrixInstancedBufferUpdate() {
        return this._instanceDataStorage.forceMatrixUpdates
      }
      set forceWorldMatrixInstancedBufferUpdate(TT) {
        this._instanceDataStorage.forceMatrixUpdates = TT
      }
      _copySource(TT, UT) {
        let mT = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          WT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const zT = this.KF();
        if (TT._geometry && TT._geometry.applyToMesh(this), iT.c.DeepCopy(TT, this, ["name", "material", "skeleton", "instances", "parent", "uniqueId", "source", "metadata", "morphTargetManager", "ZzT", "worldMatrixInstancedBuffer", "previousWorldMatrixInstancedBuffer", "hasLODLevels", "geometry", "isBlocked", "areNormalsFrozen", "facetNb", "isFacetDataEnabled", "lightSources", "useBones", "RP", "collider", "edgesRenderer", "forward", "up", "right", "absolutePosition", "absoluteScaling", "absoluteRotationQuaternion", "znT", "nonUniformScaling", "behaviors", "worldMatrixFromCache", "hasThinInstances", "cloneMeshMap", "hasBoundingInfo", "physicsBody", "physicsImpostor"], ["_poseMatrix"]), this._internalMeshDataInfo._source = TT, zT.useClonedMeshMap && (TT._internalMeshDataInfo.meshMap || (TT._internalMeshDataInfo.meshMap = {}), TT._internalMeshDataInfo.meshMap[this.uniqueId] = this), this._originalBuilderSideOrientation = TT._originalBuilderSideOrientation, this._creationDataStorage = TT._creationDataStorage, TT._ranges) {
          const UT = TT._ranges;
          for (const TT in UT) Object.prototype.hasOwnProperty.call(UT, TT) && UT[TT] && this.createAnimationRange(TT, UT[TT].from, UT[TT].to)
        }
        if (TT.metadata && TT.metadata.clone ? this.metadata = TT.metadata.clone() : this.metadata = TT.metadata, this._internalMetadata = TT._internalMetadata, this.meshBlendingTag = TT.meshBlendingTag, bT.b && bT.b.HasTags(TT) && bT.b.AddTagsTo(this, bT.b.GetTags(TT, !0)), this.Qy(TT.isEnabled(!1)), this.parent = TT.parent, this.setPivotMatrix(TT.getPivotMatrix(), this._postMultiplyPivotMatrix), this.id = this.name + "." + TT.id, this.material = TT.material, !UT) {
          const zT = TT.getDescendants(!0);
          for (let TT = 0; TT < zT.length; TT++) {
            const MT = zT[TT];
            MT._isMesh ? (DT.parent = this, DT.doNotCloneChildren = UT, DT.clonePhysicsImpostor = mT, DT.cloneThinInstances = WT, MT.clone(this.name + "." + MT.name, DT)) : MT.clone && MT.clone(this.name + "." + MT.name, this)
          }
        }
        if (TT.morphTargetManager && (this.morphTargetManager = TT.morphTargetManager), (0, uT.e)(zT.getPhysicsEngine)) {
          const UT = zT.getPhysicsEngine();
          if (mT && UT)
            if (1 === UT.getPluginVersion()) {
              const mT = UT.getImpostorForPhysicsObject(TT);
              mT && (this.physicsImpostor = mT.clone(this))
            } else 2 === UT.getPluginVersion() && TT.physicsBody && TT.physicsBody.clone(this)
        }
        for (let MT = 0; MT < zT.EY.length; MT++) {
          const UT = zT.EY[MT];
          UT.emitter === TT && UT.clone(UT.name, this)
        }
        if (this.skeleton = TT.skeleton, WT && (TT._thinInstanceDataStorage.matrixData ? (this.f6("matrix", new Float32Array(TT._thinInstanceDataStorage.matrixData), 16, !TT._thinInstanceDataStorage.matrixBuffer.isUpdatable()), this._thinInstanceDataStorage.matrixBufferSize = TT._thinInstanceDataStorage.matrixBufferSize, this._thinInstanceDataStorage.instancesCount = TT._thinInstanceDataStorage.instancesCount) : this._thinInstanceDataStorage.matrixBufferSize = TT._thinInstanceDataStorage.matrixBufferSize, TT._userThinInstanceBuffersStorage)) {
          const UT = TT._userThinInstanceBuffersStorage;
          for (const TT in UT.data) this.f6(TT, new Float32Array(UT.data[TT]), UT.strides[TT], !UT.vertexBuffers?.[TT]?.isUpdatable()), this._userThinInstanceBuffersStorage.sizes[TT] = UT.sizes[TT]
        }
        this.refreshBoundingInfo(!0, !0), this.computeWorldMatrix(!0)
      }
      constructor(TT) {
        let UT, mT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          WT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          zT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          MT = arguments.length > 4 ? arguments[4] : void 0,
          gT = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        super(TT, mT), this._internalMeshDataInfo = new hT, this.delayLoadState = 0, this.instances = [], this._creationDataStorage = null, this._geometry = null, this._thinInstanceDataStorage = new ET, this._shouldGenerateFlatShading = !1, this._originalBuilderSideOrientation = oT.DEFAULTSIDE, this.ignoreCameraMaxZ = !1, mT = this.KF(), this._instanceDataStorage = new GT, this._instanceDataStorage.engine = mT.eB(), this._instanceDataStorage.useMonoDataStorageRenderPass = !this._instanceDataStorage.engine.isWebGPU, this._instanceDataStorage.useMonoDataStorageRenderPass && (this._instanceDataStorage.dataStorageRenderPass = new ST), this._scene.useRightHandedSystem ? this.sideOrientation = 0 : this.sideOrientation = 1, this._onBeforeDraw = (TT, UT, mT) => {
          TT && mT && (this._uniformBuffer ? this.transferToEffect(UT) : mT.bindOnlyWorldMatrix(UT))
        };
        let nT = !1;
        if (WT && void 0 === WT._addToSceneRootNodes) {
          const TT = WT;
          UT = TT.parent ?? null, zT = TT.source ?? null, MT = TT.doNotCloneChildren ?? !1, gT = TT.clonePhysicsImpostor ?? !0, nT = TT.cloneThinInstances ?? !1
        } else UT = WT;
        zT && this._copySource(zT, MT, gT, nT), null !== UT && (this.parent = UT), this._instanceDataStorage.hardwareInstancedRendering = this.eB().getCaps().instancedArrays, this._internalMeshDataInfo._onMeshReadyObserverAdded = TT => {
          TT.unregisterOnNextCall = !0, this.isReady(!0) ? this.onMeshReadyObservable.notifyObservers(this) : this._internalMeshDataInfo._checkReadinessObserver || (this._internalMeshDataInfo._checkReadinessObserver = this._scene.onBeforeRenderObservable.add((() => {
            this.isReady(!0) && (this._scene.onBeforeRenderObservable.remove(this._internalMeshDataInfo._checkReadinessObserver), this._internalMeshDataInfo._checkReadinessObserver = null, this.onMeshReadyObservable.notifyObservers(this))
          })))
        }, this.onMeshReadyObservable = new vT.d(this._internalMeshDataInfo._onMeshReadyObserverAdded), zT && zT.onClonedObservable.notifyObservers(this)
      }
      instantiateHierarchy() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          UT = arguments.length > 1 ? arguments[1] : void 0,
          mT = arguments.length > 2 ? arguments[2] : void 0;
        const WT = 0 === this.getTotalVertices() || UT && UT.doNotInstantiate && (!0 === UT.doNotInstantiate || UT.doNotInstantiate(this)) ? this.clone("Clone of " + (this.name || this.id), TT || this.parent, !0) : this.createInstance("instance of " + (this.name || this.id));
        WT.parent = TT || this.parent, WT.position = this.position.clone(), WT.gp = this.gp.clone(), this.rotationQuaternion ? WT.rotationQuaternion = this.rotationQuaternion.clone() : WT.rotation = this.rotation.clone(), mT && mT(this, WT);
        for (const zT of this.getChildTransformNodes(!0)) "InstancedMesh" === zT.getClassName() && "Mesh" === WT.getClassName() && zT.czT === this ? zT.instantiateHierarchy(WT, {
          doNotInstantiate: UT && UT.doNotInstantiate || !1,
          newSourcedMesh: WT
        }, mT) : zT.instantiateHierarchy(WT, UT, mT);
        return WT
      }
      getClassName() {
        return "Mesh"
      }
      get _isMesh() {
        return !0
      }
      toString(TT) {
        let UT = super.toString(TT);
        if (UT += ", n vertices: " + this.getTotalVertices(), UT += ", parent: " + (this._waitingParentId ? this._waitingParentId : this.parent ? this.parent.name : "NONE"), this.animations)
          for (let mT = 0; mT < this.animations.length; mT++) UT += ", animation[0]: " + this.animations[mT].toString(TT);
        if (TT)
          if (this._geometry) {
            const TT = this.vWT(),
              mT = this.getVerticesData(dT.i.PositionKind);
            mT && TT && (UT += ", flat shading: " + (mT.length / 3 === TT.length ? "YES" : "NO"))
          } else UT += ", flat shading: UNKNOWN";
        return UT
      }
      _unBindEffect() {
        super._unBindEffect();
        for (const TT of this.instances) TT._unBindEffect()
      }
      get hasLODLevels() {
        return this._internalMeshDataInfo._LODLevels.length > 0
      }
      getLODLevels() {
        return this._internalMeshDataInfo._LODLevels
      }
      _sortLODLevels() {
        const TT = this._internalMeshDataInfo._useLODScreenCoverage ? -1 : 1;
        this._internalMeshDataInfo._LODLevels.sort(((UT, mT) => UT.distanceOrScreenCoverage < mT.distanceOrScreenCoverage ? TT : UT.distanceOrScreenCoverage > mT.distanceOrScreenCoverage ? -TT : 0))
      }
      addLODLevel(TT, UT) {
        if (UT && UT._masterMesh) return PT.b.Warn("You cannot use a mesh as LOD level twice"), this;
        const mT = new rT(TT, UT);
        return this._internalMeshDataInfo._LODLevels.push(mT), UT && (UT._masterMesh = this), this._sortLODLevels(), this
      }
      getLODLevelAtDistance(TT) {
        const UT = this._internalMeshDataInfo;
        for (let mT = 0; mT < UT._LODLevels.length; mT++) {
          const WT = UT._LODLevels[mT];
          if (WT.distanceOrScreenCoverage === TT) return WT.mesh
        }
        return null
      }
      removeLODLevel(TT) {
        const UT = this._internalMeshDataInfo;
        for (let mT = 0; mT < UT._LODLevels.length; mT++) UT._LODLevels[mT].mesh === TT && (UT._LODLevels.splice(mT, 1), TT && (TT._masterMesh = null));
        return this._sortLODLevels(), this
      }
      getLOD(TT, UT) {
        const mT = this._internalMeshDataInfo;
        if (!mT._LODLevels || 0 === mT._LODLevels.length) return this;
        const WT = UT || this.rV().rWT,
          zT = TT.mode === eT.b.ORTHOGRAPHIC_CAMERA ? TT.minZ : WT.centerWorld.subtract(TT.globalPosition).length();
        let MT = zT,
          gT = 1;
        if (mT._useLODScreenCoverage) {
          const UT = TT.screenArea;
          let mT = WT.radiusWorld * TT.minZ / zT;
          mT = mT * mT * Math.PI, MT = mT / UT, gT = -1
        }
        if (gT * mT._LODLevels[mT._LODLevels.length - 1].distanceOrScreenCoverage > gT * MT) return this.onLODLevelSelection && this.onLODLevelSelection(MT, this, this), this;
        for (let nT = 0; nT < mT._LODLevels.length; nT++) {
          const TT = mT._LODLevels[nT];
          if (gT * TT.distanceOrScreenCoverage < gT * MT) {
            if (TT.mesh) {
              if (4 === TT.mesh.delayLoadState) return TT.mesh._checkDelayState(), this;
              if (2 === TT.mesh.delayLoadState) return this;
              TT.mesh._preActivate(), TT.mesh._updateSubMeshesBoundingInfo(this.worldMatrixFromCache)
            }
            return this.onLODLevelSelection && this.onLODLevelSelection(MT, this, TT.mesh), TT.mesh
          }
        }
        return this.onLODLevelSelection && this.onLODLevelSelection(MT, this, this), this
      }
      get geometry() {
        return this._geometry
      }
      getTotalVertices() {
        return null === this._geometry || void 0 === this._geometry ? 0 : this._geometry.getTotalVertices()
      }
      getVerticesData(TT, UT, mT, WT) {
        if (!this._geometry) return null;
        let zT = WT ? void 0 : this._userInstancedBuffersStorage?.vertexBuffers[TT]?.getFloatData(this.instances.length + 1, mT || UT && 1 !== this._geometry.meshes.length);
        return zT || (zT = this._geometry.getVerticesData(TT, UT, mT)), zT
      }
      copyVerticesData(TT, UT) {
        this._geometry && this._geometry.copyVerticesData(TT, UT)
      }
      getVertexBuffer(TT, UT) {
        return this._geometry ? (UT ? void 0 : this._userInstancedBuffersStorage?.vertexBuffers[TT]) ?? this._geometry.getVertexBuffer(TT) : null
      }
      isVerticesDataPresent(TT, UT) {
        return this._geometry ? !UT && void 0 !== this._userInstancedBuffersStorage?.vertexBuffers[TT] || this._geometry.isVerticesDataPresent(TT) : !!this._delayInfo && -1 !== this._delayInfo.indexOf(TT)
      }
      isVertexBufferUpdatable(TT, UT) {
        if (!this._geometry) return !!this._delayInfo && -1 !== this._delayInfo.indexOf(TT);
        if (!UT) {
          const UT = this._userInstancedBuffersStorage?.vertexBuffers[TT];
          if (UT) return UT.isUpdatable()
        }
        return this._geometry.isVertexBufferUpdatable(TT)
      }
      getVerticesDataKinds(TT) {
        if (!this._geometry) {
          const TT = [];
          if (this._delayInfo)
            for (const UT of this._delayInfo) TT.push(UT);
          return TT
        }
        const UT = this._geometry.getVerticesDataKinds();
        if (!TT && this._userInstancedBuffersStorage)
          for (const mT in this._userInstancedBuffersStorage.vertexBuffers) - 1 === UT.indexOf(mT) && UT.push(mT);
        return UT
      }
      getTotalIndices() {
        return this._geometry ? this._geometry.getTotalIndices() : 0
      }
      vWT(TT, UT) {
        return this._geometry ? this._geometry.vWT(TT, UT) : []
      }
      get isBlocked() {
        return null !== this._masterMesh && void 0 !== this._masterMesh
      }
      isReady() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          UT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (2 === this.delayLoadState) return !1;
        if (!super.isReady(TT)) return !1;
        if (!this.rY || 0 === this.rY.length) return !0;
        if (!TT) return !0;
        const mT = this.eB(),
          WT = this.KF(),
          zT = UT || mT.getCaps().instancedArrays && (this.instances.length > 0 || this.hasThinInstances);
        this.computeWorldMatrix();
        const MT = this.material || WT.defaultMaterial;
        if (MT)
          if (MT._storeEffectOnSubMeshes)
            for (const nT of this.rY) {
              const TT = nT.wB();
              if (TT)
                if (TT._storeEffectOnSubMeshes) {
                  if (!TT.isReadyForSubMesh(this, nT, zT)) return !1
                } else if (!TT.isReady(this, zT)) return !1
            } else if (!MT.isReady(this, zT)) return !1;
        const gT = mT.currentRenderPassId;
        for (const nT of this.lightSources) {
          const TT = nT.getShadowGenerators();
          if (!TT) continue;
          const UT = TT.values();
          for (let WT = UT.next(); !0 !== WT.done; WT = UT.next()) {
            const TT = WT.value;
            if (TT && (!TT.getShadowMap()?.renderList || TT.getShadowMap()?.renderList && -1 !== TT.getShadowMap()?.renderList?.indexOf(this))) {
              const UT = TT.getShadowMap().renderPassIds ?? [mT.currentRenderPassId];
              for (let WT = 0; WT < UT.length; ++WT) {
                mT.currentRenderPassId = UT[WT];
                for (const UT of this.rY)
                  if (!TT.isReady(UT, zT, UT.wB()?.needAlphaBlendingForMesh(this) ?? !1)) return mT.currentRenderPassId = gT, !1
              }
              mT.currentRenderPassId = gT
            }
          }
        }
        for (const nT of this._internalMeshDataInfo._LODLevels)
          if (nT.mesh && !nT.mesh.isReady(zT)) return !1;
        return !0
      }
      get areNormalsFrozen() {
        return this._internalMeshDataInfo._areNormalsFrozen
      }
      tB() {
        return this._internalMeshDataInfo._areNormalsFrozen = !0, this
      }
      unfreezeNormals() {
        return this._internalMeshDataInfo._areNormalsFrozen = !1, this
      }
      set overridenInstanceCount(TT) {
        this._instanceDataStorage.overridenInstanceCount = TT
      }
      _getInstanceDataStorage() {
        if (this._instanceDataStorage.useMonoDataStorageRenderPass) return this._instanceDataStorage.dataStorageRenderPass;
        const TT = this._instanceDataStorage.engine.currentRenderPassId;
        let UT = this._instanceDataStorage.renderPasses[TT];
        return UT || (UT = new ST, this._instanceDataStorage.renderPasses[TT] = UT), UT
      }
      _preActivate() {
        const TT = this._internalMeshDataInfo,
          UT = this.KF().getRenderId();
        return TT._preActivateId === UT || (TT._preActivateId = UT, this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass.visibleInstances = null : this._getInstanceDataStorage().visibleInstances = null), this
      }
      _preActivateForIntermediateRendering(TT) {
        const UT = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        return UT.visibleInstances && (UT.visibleInstances.intermediateDefaultRenderId = TT), this
      }
      _registerInstanceForRenderId(TT, UT) {
        const mT = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        return mT.visibleInstances || (mT.visibleInstances = {
          defaultRenderId: UT,
          selfDefaultRenderId: this._renderId,
          intermediateDefaultRenderId: -1
        }), mT.visibleInstances[UT] || (void 0 === mT.previousRenderId || this._instanceDataStorage.useMonoDataStorageRenderPass && !this._instanceDataStorage.isFrozen || delete mT.visibleInstances[mT.previousRenderId], mT.previousRenderId = UT, mT.visibleInstances[UT] = new Array), mT.visibleInstances[UT].push(TT), this
      }
      _afterComputeWorldMatrix() {
        super._afterComputeWorldMatrix(), this.hasThinInstances && (this.dB || this.thinInstanceRefreshBoundingInfo(!1))
      }
      _postActivate() {
        this.edgesShareWithInstances && this.edgesRenderer && this.edgesRenderer.isEnabled && this._renderingGroup && (this._renderingGroup._edgesRenderers.pushNoDuplicate(this.edgesRenderer), this.edgesRenderer.customInstances.push(this.getWorldMatrix()))
      }
      refreshBoundingInfo() {
        let TT, UT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          mT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.hasBoundingInfo && this.rV().isLocked) return this;
        TT = "object" === typeof UT ? UT : {
          applySkeleton: UT,
          applyMorph: mT
        };
        const WT = this.geometry ? this.geometry.boundingBias : null;
        return this._refreshBoundingInfo(this._getData(TT, null, dT.i.PositionKind), WT), this
      }
      _createGlobalSubMesh(TT) {
        const UT = this.getTotalVertices();
        if (!UT || !this.vWT()) return null;
        if (this.rY && this.rY.length > 0) {
          const mT = this.vWT();
          if (!mT) return null;
          const WT = mT.length;
          let zT = !1;
          if (TT) zT = !0;
          else
            for (const TT of this.rY) {
              if (TT.indexStart + TT.indexCount > WT) {
                zT = !0;
                break
              }
              if (TT.verticesStart + TT.verticesCount > UT) {
                zT = !0;
                break
              }
            }
          if (!zT) return this.rY[0]
        }
        return this.releaseSubMeshes(), new yT.e(0, 0, UT, 0, this.getTotalIndices() || (this.isUnIndexed ? UT : 0), this)
      }
      subdivide(TT) {
        if (TT < 1) return;
        const UT = this.getTotalIndices();
        let mT = UT / TT | 0,
          WT = 0;
        for (; mT % 3 !== 0;) mT++;
        this.releaseSubMeshes();
        for (let zT = 0; zT < TT && !(WT >= UT); zT++) yT.e.CreateFromIndices(0, WT, WT + mT >= UT ? UT - WT : mT, this, void 0, !1), WT += mT;
        this.refreshBoundingInfo(), this.synchronizeInstances()
      }
      setVerticesData(TT, UT) {
        let mT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          WT = arguments.length > 3 ? arguments[3] : void 0;
        if (this._geometry) this._geometry.setVerticesData(TT, UT, mT, WT);
        else {
          const WT = new wT.d;
          WT.set(UT, TT);
          const zT = this.KF();
          new tT.e(tT.e.RandomId(), zT, WT, mT, this)
        }
        return this
      }
      removeVerticesData(TT) {
        this._geometry && this._geometry.removeVerticesData(TT)
      }
      markVerticesDataAsUpdatable(TT) {
        let UT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const mT = this.getVertexBuffer(TT);
        mT && mT.isUpdatable() !== UT && this.setVerticesData(TT, this.getVerticesData(TT), UT)
      }
      setVerticesBuffer(TT) {
        let UT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        return this._geometry || (this._geometry = tT.e.CreateGeometryForMesh(this)), this._geometry.setVerticesBuffer(TT, mT, UT), this
      }
      updateVerticesData(TT, UT, mT, WT) {
        return this._geometry ? (WT ? (this.makeGeometryUnique(), this.updateVerticesData(TT, UT, mT, !1)) : this._geometry.updateVerticesData(TT, UT, mT), this) : this
      }
      updateMeshPositions(TT) {
        let UT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const mT = this.getVerticesData(dT.i.PositionKind);
        if (!mT) return this;
        if (TT(mT), this.updateVerticesData(dT.i.PositionKind, mT, !1, !1), UT) {
          const TT = this.vWT(),
            UT = this.getVerticesData(dT.i.NormalKind);
          if (!UT) return this;
          wT.d.ComputeNormals(mT, TT, UT), this.updateVerticesData(dT.i.NormalKind, UT, !1, !1)
        }
        return this
      }
      makeGeometryUnique() {
        if (!this._geometry) return this;
        if (1 === this._geometry.meshes.length) return this;
        const TT = this._geometry,
          UT = this._geometry.copy(tT.e.RandomId());
        return TT.releaseForMesh(this, !0), UT.applyToMesh(this), this
      }
      setIndexBuffer(TT, UT, mT) {
        let WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          zT = this._geometry;
        zT || (zT = new tT.e(tT.e.RandomId(), this.KF(), void 0, void 0, this)), zT.setIndexBuffer(TT, UT, mT, WT)
      }
      setIndices(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          mT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          WT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this._geometry) this._geometry.setIndices(TT, UT, mT, WT);
        else {
          const WT = new wT.d;
          WT.indices = TT;
          const zT = this.KF();
          new tT.e(tT.e.RandomId(), zT, WT, mT, this, UT)
        }
        return this
      }
      updateIndices(TT, UT) {
        let mT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return this._geometry ? (this._geometry.updateIndices(TT, UT, mT), this) : this
      }
      toLeftHanded() {
        return this._geometry ? (this._geometry.toLeftHanded(), this) : this
      }
      _bind(TT, UT, mT) {
        let WT = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        if (!this._geometry) return this;
        const zT = this.KF().eB();
        let MT;
        if (this._unIndexed)
          if (this._getRenderingFillMode(mT) === XT.b.WireFrameFillMode) MT = TT._getLinesIndexBuffer(this.vWT(), zT);
          else MT = null;
        else switch (this._getRenderingFillMode(mT)) {
          case XT.b.PointFillMode:
            MT = null;
            break;
          case XT.b.WireFrameFillMode:
            MT = TT._getLinesIndexBuffer(this.vWT(), zT);
            break;
          default:
          case XT.b.TriangleFillMode:
            MT = this._geometry.getIndexBuffer()
        }
        return this._bindDirect(UT, MT, WT)
      }
      _bindDirect(TT, UT) {
        let mT = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (!this._geometry) return this;
        if (this.morphTargetManager && this.morphTargetManager.isUsingTextureForTargets && this.morphTargetManager._bind(TT), mT && this._userInstancedBuffersStorage && !this.hasThinInstances) {
          if (!this._instanceDataStorage.useMonoDataStorageRenderPass && this._userInstancedBuffersStorage.renderPasses && this._userInstancedBuffersStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId]) {
            const TT = this._userInstancedBuffersStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId];
            for (const UT in TT) this._userInstancedBuffersStorage.vertexBuffers[UT] = TT[UT]
          }
          this._geometry._bind(TT, UT, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects)
        } else this._geometry._bind(TT, UT);
        return this
      }
      _draw(TT, UT, mT) {
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        this._internalMeshDataInfo._onBeforeDrawObservable && this._internalMeshDataInfo._onBeforeDrawObservable.notifyObservers(this);
        const WT = this.KF().eB(),
          zT = WT._currentMaterialContext,
          MT = zT && zT.useVertexPulling;
        return this._unIndexed && UT !== XT.b.WireFrameFillMode || UT == XT.b.PointFillMode ? WT.drawArraysType(UT, TT.verticesStart, TT.verticesCount, this.forcedInstanceCount || mT) : UT == XT.b.WireFrameFillMode ? WT.drawElementsType(UT, 0, TT._linesIndexCount, this.forcedInstanceCount || mT) : MT ? WT.drawArraysType(UT, TT.indexStart, TT.indexCount, this.forcedInstanceCount || mT) : WT.drawElementsType(UT, TT.indexStart, TT.indexCount, this.forcedInstanceCount || mT), this
      }
      registerBeforeRender(TT) {
        return this.onBeforeRenderObservable.add(TT), this
      }
      unregisterBeforeRender(TT) {
        return this.onBeforeRenderObservable.removeCallback(TT), this
      }
      registerAfterRender(TT) {
        return this.onAfterRenderObservable.add(TT), this
      }
      unregisterAfterRender(TT) {
        return this.onAfterRenderObservable.removeCallback(TT), this
      }
      _getInstancesRenderList(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const mT = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        if (this._instanceDataStorage.isFrozen) {
          if (UT) return mT.batchCacheReplacementModeInFrozenMode.hardwareInstancedRendering[TT] = !1, mT.batchCacheReplacementModeInFrozenMode.renderSelf[TT] = !0, mT.batchCacheReplacementModeInFrozenMode;
          if (mT.previousBatch) return mT.previousBatch
        }
        const WT = this.KF(),
          zT = WT._isInIntermediateRendering(),
          MT = zT ? this._internalAbstractMeshDataInfo._onlyForInstancesIntermediate : this._internalAbstractMeshDataInfo._onlyForInstances,
          gT = mT.batchCache;
        if (gT.mustReturn = !1, gT.renderSelf[TT] = UT || !MT && this.isEnabled() && this.isVisible, gT.visibleInstances[TT] = null, mT.visibleInstances && !UT) {
          const UT = mT.visibleInstances,
            MT = WT.getRenderId(),
            nT = zT ? UT.intermediateDefaultRenderId : UT.defaultRenderId;
          gT.visibleInstances[TT] = UT[MT], !gT.visibleInstances[TT] && nT && (gT.visibleInstances[TT] = UT[nT])
        }
        return gT.hardwareInstancedRendering[TT] = !UT && this._instanceDataStorage.hardwareInstancedRendering && null !== gT.visibleInstances[TT] && void 0 !== gT.visibleInstances[TT], mT.previousBatch = gT, gT
      }
      _updateInstancedBuffers(TT, UT, mT, WT, zT, MT) {
        const gT = UT.visibleInstances[TT._id],
          nT = gT ? gT.length : 0,
          HT = UT.parent,
          kT = this._instanceDataStorage;
        let jT = HT.instancesBuffer,
          lT = HT.instancesPreviousBuffer,
          LT = 0,
          pT = 0;
        const BT = UT.renderSelf[TT._id],
          ZT = this._scene.floatingOriginOffset,
          cT = !jT || mT !== HT.instancesBufferSize || this._scene.needsPreviousWorldMatrices && !HT.instancesPreviousBuffer;
        if (this._instanceDataStorage.manualUpdate || kT.isFrozen && !cT) pT = (BT ? 1 : 0) + nT;
        else {
          const UT = this.getWorldMatrix();
          if (BT) {
            this._scene.needsPreviousWorldMatrices && (kT.masterMeshPreviousWorldMatrix ? (kT.masterMeshPreviousWorldMatrix.copyToArray(HT.instancesPreviousData, LT), kT.masterMeshPreviousWorldMatrix.Gw(UT)) : (kT.masterMeshPreviousWorldMatrix = UT.clone(), kT.masterMeshPreviousWorldMatrix.copyToArray(HT.instancesPreviousData, LT))), UT.copyToArray(HT.instancesData, LT);
            const TT = UT.cWT();
            HT.instancesData[LT + 12] = TT[12] - ZT.x, HT.instancesData[LT + 13] = TT[13] - ZT.y, HT.instancesData[LT + 14] = TT[14] - ZT.z, LT += 16, pT++
          }
          if (gT) {
            if (oT.INSTANCEDMESH_SORT_TRANSPARENT && this._scene.activeCamera && TT.wB()?.needAlphaBlendingForMesh(TT.getRenderingMesh())) {
              const TT = this._scene.activeCamera.globalPosition;
              for (let UT = 0; UT < gT.length; UT++) {
                const mT = gT[UT];
                mT._distanceToCamera = YT.p.Distance(mT.rV().rWT.centerWorld, TT)
              }
              gT.sort(((TT, UT) => TT._distanceToCamera > UT._distanceToCamera ? -1 : TT._distanceToCamera < UT._distanceToCamera ? 1 : 0))
            }
            for (let TT = 0; TT < gT.length; TT++) {
              const UT = gT[TT],
                mT = UT.getWorldMatrix();
              mT.copyToArray(HT.instancesData, LT), this._scene.needsPreviousWorldMatrices && (UT._previousWorldMatrix ? (UT._previousWorldMatrix.copyToArray(HT.instancesPreviousData, LT), UT._previousWorldMatrix.Gw(mT)) : (UT._previousWorldMatrix = mT.clone(), UT._previousWorldMatrix.copyToArray(HT.instancesPreviousData, LT)));
              const WT = mT.cWT();
              HT.instancesData[LT + 12] = WT[12] - ZT.x, HT.instancesData[LT + 13] = WT[13] - ZT.y, HT.instancesData[LT + 14] = WT[14] - ZT.z, LT += 16, pT++
            }
          }
        }
        if (cT) {
          let TT;
          if (jT && jT.dispose(), lT && lT.dispose(), jT = new dT.c(WT, HT.instancesData, !0, 16, !1, !0), HT.instancesBuffer = jT, this._userInstancedBuffersStorage || (this._userInstancedBuffersStorage = {
              data: {},
              vertexBuffers: {},
              strides: {},
              sizes: {},
              vertexArrayObjects: this.eB().getCaps().vertexArrayObject ? {} : void 0
            }), this._instanceDataStorage.useMonoDataStorageRenderPass) TT = this._userInstancedBuffersStorage.vertexBuffers;
          else {
            this._userInstancedBuffersStorage.renderPasses || (this._userInstancedBuffersStorage.renderPasses = {});
            const UT = this._instanceDataStorage.engine.currentRenderPassId;
            TT = this._userInstancedBuffersStorage.renderPasses[UT], TT || (this._userInstancedBuffersStorage.renderPasses[UT] = TT = {})
          }
          TT.world0 = jT.createVertexBuffer("world0", 0, 4), TT.world1 = jT.createVertexBuffer("world1", 4, 4), TT.world2 = jT.createVertexBuffer("world2", 8, 4), TT.world3 = jT.createVertexBuffer("world3", 12, 4), this._scene.needsPreviousWorldMatrices && (lT = new dT.c(WT, HT.instancesPreviousData, !0, 16, !1, !0), HT.instancesPreviousBuffer = lT, TT.previousWorld0 = lT.createVertexBuffer("previousWorld0", 0, 4), TT.previousWorld1 = lT.createVertexBuffer("previousWorld1", 4, 4), TT.previousWorld2 = lT.createVertexBuffer("previousWorld2", 8, 4), TT.previousWorld3 = lT.createVertexBuffer("previousWorld3", 12, 4)), this._invalidateInstanceVertexArrayObject()
        } else this._instanceDataStorage.isFrozen && !this._instanceDataStorage.forceMatrixUpdates || (jT.updateDirectly(HT.instancesData, 0, pT), !this._scene.needsPreviousWorldMatrices || this._instanceDataStorage.manualUpdate && !this._instanceDataStorage.previousManualUpdate || lT.updateDirectly(HT.instancesPreviousData, 0, pT));
        this._processInstancedBuffers(gT, BT), MT && void 0 !== zT && (this.KF()._activeIndices.addCount(TT.indexCount * pT, !1), WT._currentDrawContext && (WT._currentDrawContext.useInstancing = !0), this._bind(TT, MT, zT), this._draw(TT, zT, pT)), !this._scene.needsPreviousWorldMatrices || cT || !this._instanceDataStorage.manualUpdate || this._instanceDataStorage.isFrozen && !this._instanceDataStorage.forceMatrixUpdates || this._instanceDataStorage.previousManualUpdate || lT.updateDirectly(HT.instancesData, 0, pT)
      }
      _renderWithInstances(TT, UT, mT, WT, zT) {
        const MT = mT.visibleInstances[TT._id],
          gT = MT ? MT.length : 0,
          nT = mT.parent,
          HT = nT.instancesBufferSize,
          kT = 16 * (gT + 1) * 4;
        for (; nT.instancesBufferSize < kT;) nT.instancesBufferSize *= 2;
        return nT.instancesData && HT == nT.instancesBufferSize || (nT.instancesData = new Float32Array(nT.instancesBufferSize / 4)), (this._scene.needsPreviousWorldMatrices && !nT.instancesPreviousData || HT != nT.instancesBufferSize) && (nT.instancesPreviousData = new Float32Array(nT.instancesBufferSize / 4)), this._updateInstancedBuffers(TT, mT, HT, zT, UT, WT), zT.unbindInstanceAttributes(), this
      }
      _renderWithThinInstances(TT, UT, mT, WT) {
        const zT = this._thinInstanceDataStorage?.instancesCount ?? 0;
        this.KF()._activeIndices.addCount(TT.indexCount * zT, !1), WT._currentDrawContext && (WT._currentDrawContext.useInstancing = !0), this._bind(TT, mT, UT), this._draw(TT, UT, zT), this._scene.needsPreviousWorldMatrices && !this._thinInstanceDataStorage.previousMatrixData && this._thinInstanceDataStorage.matrixData && (this._thinInstanceDataStorage.previousMatrixBuffer ? this._thinInstanceDataStorage.previousMatrixBuffer.updateDirectly(this._thinInstanceDataStorage.matrixData, 0, zT) : this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", this._thinInstanceDataStorage.matrixData, !1)), WT.unbindInstanceAttributes()
      }
      _processInstancedBuffers(TT, UT) {}
      _processRendering(TT, UT, mT, WT, zT, MT, gT, nT) {
        const HT = this.KF(),
          kT = HT.eB();
        if (WT = this._getRenderingFillMode(WT), MT && UT.getRenderingMesh().hasThinInstances) return this._renderWithThinInstances(UT, WT, mT, kT), this;
        if (MT) this._renderWithInstances(UT, WT, zT, mT, kT);
        else {
          kT._currentDrawContext && (kT._currentDrawContext.useInstancing = !1);
          let mT = 0;
          zT.renderSelf[UT._id] && (gT && gT(!1, TT.getWorldMatrix(), nT), mT++, this._draw(UT, WT, this._instanceDataStorage.overridenInstanceCount));
          const MT = zT.visibleInstances[UT._id];
          if (MT) {
            const TT = MT.length;
            mT += TT;
            for (let mT = 0; mT < TT; mT++) {
              const TT = MT[mT].getWorldMatrix();
              gT && gT(!0, TT, nT), this._draw(UT, WT)
            }
          }
          HT._activeIndices.addCount(UT.indexCount * mT, !1)
        }
        return this
      }
      _disposeInstanceDataStorageRenderPass(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        TT?.instancesBuffer && (UT && TT.instancesBuffer.dispose(), TT.instancesBuffer = null), TT?.instancesPreviousBuffer && (UT && TT.instancesPreviousBuffer.dispose(), TT.instancesPreviousBuffer = null)
      }
      _rebuild() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const UT in this._instanceDataStorage.renderPasses) {
          const mT = this._instanceDataStorage.renderPasses[UT];
          this._disposeInstanceDataStorageRenderPass(mT, TT)
        }
        if (this._disposeInstanceDataStorageRenderPass(this._instanceDataStorage.dataStorageRenderPass, TT), this._userInstancedBuffersStorage) {
          for (const UT in this._userInstancedBuffersStorage.vertexBuffers) {
            const mT = this._userInstancedBuffersStorage.vertexBuffers[UT];
            mT && (TT && mT.dispose(), this._userInstancedBuffersStorage.vertexBuffers[UT] = null)
          }
          this._userInstancedBuffersStorage.vertexArrayObjects && (this._userInstancedBuffersStorage.vertexArrayObjects = {})
        }
        this._internalMeshDataInfo._effectiveMaterial = null, super._rebuild(TT)
      }
      _releaseRenderPassId(TT) {
        const UT = this._instanceDataStorage.renderPasses[TT];
        if (UT && (this._disposeInstanceDataStorageRenderPass(UT, !0), delete this._instanceDataStorage.renderPasses[TT]), this._userInstancedBuffersStorage?.renderPasses) {
          const UT = this._userInstancedBuffersStorage.renderPasses[TT];
          if (UT)
            for (const TT in UT) UT[TT]?.dispose();
          delete this._userInstancedBuffersStorage.renderPasses[TT]
        }
        const mT = this._userInstancedBuffersStorage?.interleavedBuffers;
        mT?.[TT] && (mT[TT].buffer.dispose(), delete mT[TT])
      }
      _freeze() {
        if (this.rY) {
          for (let TT = 0; TT < this.rY.length; TT++) this._getInstancesRenderList(TT);
          this._internalMeshDataInfo._effectiveMaterial = null, this._instanceDataStorage.isFrozen = !0
        }
      }
      _unFreeze() {
        this._instanceDataStorage.isFrozen = !1;
        for (const TT in this._instanceDataStorage.renderPasses) {
          this._instanceDataStorage.renderPasses[TT].previousBatch = null
        }
        this._instanceDataStorage.dataStorageRenderPass && (this._instanceDataStorage.dataStorageRenderPass.previousBatch = null)
      }
      renderWithRenderPassId(TT, UT, mT, WT) {
        let zT = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        const MT = this._scene.eB(),
          gT = MT.currentRenderPassId;
        if (void 0 !== TT && (MT.currentRenderPassId = TT), WT)(!zT || zT && WT.isInFrustum(this._scene._frustumPlanes)) && this.render(WT, !!UT, mT);
        else
          for (let nT = 0; nT < this.rY.length; nT++) {
            const TT = this.rY[nT];
            (!zT || zT && TT.isInFrustum(this._scene._frustumPlanes)) && this.render(TT, !!UT, mT)
          }
        return void 0 !== TT && (MT.currentRenderPassId = gT), this
      }
      directRender() {
        if (!this.rY) return this;
        for (const TT of this.rY) this.render(TT, !1);
        return this
      }
      render(TT, UT, mT) {
        const WT = this.KF(),
          zT = WT.eB();
        this._internalAbstractMeshDataInfo._isActiveIntermediate ? this._internalAbstractMeshDataInfo._isActiveIntermediate = !1 : this._internalAbstractMeshDataInfo._isActive = !1;
        const MT = WT.activeCameras?.length ?? 0,
          gT = MT > 1 && WT.activeCamera === WT.activeCameras[0] || MT <= 1,
          nT = this._occlusionDataStorage && -1 !== this._occlusionDataStorage.occlusionForRenderPassId && this._occlusionDataStorage.occlusionForRenderPassId !== zT.currentRenderPassId;
        if (gT && this._checkOcclusionQuery(nT) && !this._occlusionDataStorage.forceRenderingWhenOccluded) return this;
        const HT = this._getInstancesRenderList(TT._id, !!mT);
        if (HT.mustReturn) return this;
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        let kT = 0,
          jT = null;
        this.ignoreCameraMaxZ && WT.activeCamera && !WT._isInIntermediateRendering() && (kT = WT.activeCamera.maxZ, jT = WT.activeCamera, WT.activeCamera.maxZ = 0, WT.updateTransformMatrix(!0)), this._internalMeshDataInfo._onBeforeRenderObservable && this._internalMeshDataInfo._onBeforeRenderObservable.notifyObservers(this);
        const lT = TT.getRenderingMesh(),
          LT = HT.hardwareInstancedRendering[TT._id] || lT.hasThinInstances || !!this._userInstancedBuffersStorage && !TT.getMesh()._internalAbstractMeshDataInfo._actAsRegularMesh,
          pT = this._instanceDataStorage,
          BT = TT.wB();
        if (!BT) return jT && (jT.maxZ = kT, WT.updateTransformMatrix(!0)), this;
        if (pT.isFrozen && this._internalMeshDataInfo._effectiveMaterial && this._internalMeshDataInfo._effectiveMaterial === BT) {
          if (BT._storeEffectOnSubMeshes && !TT._drawWrapper?._wasPreviouslyReady || !BT._storeEffectOnSubMeshes && !BT._getDrawWrapper()._wasPreviouslyReady) return jT && (jT.maxZ = kT, WT.updateTransformMatrix(!0)), this
        } else {
          if (BT._storeEffectOnSubMeshes) {
            if (!BT.isReadyForSubMesh(this, TT, LT)) return jT && (jT.maxZ = kT, WT.updateTransformMatrix(!0)), this
          } else if (!BT.isReady(this, LT)) return jT && (jT.maxZ = kT, WT.updateTransformMatrix(!0)), this;
          this._internalMeshDataInfo._effectiveMaterial = BT
        }
        if (UT) {
          const TT = this._internalMeshDataInfo._effectiveMaterial;
          if (1 === TT.alphaModes.length) zT.setAlphaMode(TT.alphaMode);
          else
            for (let UT = 0; UT < TT.alphaModes.length; UT++) {
              const mT = TT.alphaModes[UT];
              zT.setAlphaMode(void 0 !== mT ? mT : 2, !1, UT)
            }
        }
        let ZT;
        ZT = this._internalMeshDataInfo._effectiveMaterial._storeEffectOnSubMeshes ? TT._drawWrapper : this._internalMeshDataInfo._effectiveMaterial._getDrawWrapper();
        const cT = ZT?.effect ?? null;
        for (let eT = 0, YT = WT._beforeRenderingMeshStage; eT < YT.length; eT++) {
          YT[eT].action(this, TT, HT, cT)
        }
        if (!ZT || !cT) return jT && (jT.maxZ = kT, WT.updateTransformMatrix(!0)), this;
        const vT = mT || this;
        let fT;
        if (!pT.isFrozen && (this._internalMeshDataInfo._effectiveMaterial.backFaceCulling || null !== this._internalMeshDataInfo._effectiveMaterial.sideOrientation || this._internalMeshDataInfo._effectiveMaterial._twoSidedLighting)) {
          const TT = vT._getWorldMatrixDeterminant();
          fT = this._internalMeshDataInfo._effectiveMaterial._getEffectiveOrientation(this), TT < 0 && (fT = fT === XT.b.ClockWiseSideOrientation ? XT.b.CounterClockWiseSideOrientation : XT.b.ClockWiseSideOrientation), this._internalMeshDataInfo._effectiveSideOrientation = fT
        }
        const qT = this._internalMeshDataInfo._effectiveMaterial._preBind(ZT, this._internalMeshDataInfo._effectiveSideOrientation);
        this._internalMeshDataInfo._effectiveMaterial.forceDepthWrite && zT.setDepthWrite(!0);
        const iT = this._internalMeshDataInfo._effectiveMaterial,
          bT = iT.fillMode;
        this._internalMeshDataInfo._onBeforeBindObservable && this._internalMeshDataInfo._onBeforeBindObservable.notifyObservers(this), LT || this._bind(TT, cT, bT, !1);
        const OT = vT.getWorldMatrix();
        iT._storeEffectOnSubMeshes ? iT.bindForSubMesh(OT, this, TT) : iT.bind(OT, this);
        try {
          IT.c._BindAttachmentsForEffect(zT, cT) && (!iT.backFaceCulling && iT.separateCullingPass && (zT.setState(!0, iT.zOffset, !1, !qT, iT.cullBackFaces, iT.stencil, iT.zOffsetUnits), this._processRendering(this, TT, cT, bT, HT, LT, this._onBeforeDraw, this._internalMeshDataInfo._effectiveMaterial), zT.setState(!0, iT.zOffset, !1, qT, iT.cullBackFaces, iT.stencil, iT.zOffsetUnits), this._internalMeshDataInfo._onBetweenPassObservable && this._internalMeshDataInfo._onBetweenPassObservable.notifyObservers(TT)), this._processRendering(this, TT, cT, bT, HT, LT, this._onBeforeDraw, this._internalMeshDataInfo._effectiveMaterial))
        } finally {
          IT.c._RestoreAttachments(zT)
        }
        this._internalMeshDataInfo._effectiveMaterial.unbind();
        for (let eT = 0, YT = WT._afterRenderingMeshStage; eT < YT.length; eT++) {
          YT[eT].action(this, TT, HT, cT)
        }
        return this._internalMeshDataInfo._onAfterRenderObservable && this._internalMeshDataInfo._onAfterRenderObservable.notifyObservers(this), jT && (jT.maxZ = kT, WT.updateTransformMatrix(!0)), 2 !== WT.performancePriority || pT.isFrozen || this._freeze(), this
      }
      _renderRunFollower(TT, UT) {
        const mT = this._scene,
          WT = mT._engine;
        if (WT.isWebGPU || TT._mesh !== this || 0 !== this.instances.length || this.render !== oT.prototype.render) return !1;
        const zT = TT.wB();
        if (!zT || zT !== mT._cachedMaterial || void 0 === zT._canBindRunFollower) return !1;
        const MT = TT._drawWrapper,
          gT = MT?.effect;
        if (!gT || gT !== mT._cachedEffect || this.visibility !== mT._cachedVisibility || MT._forceRebindOnNextCall) return !1;
        const nT = this.hasThinInstances;
        if (!nT && this._userInstancedBuffersStorage) return !1;
        if (!MT._wasPreviouslyReady || MT._wasPreviouslyUsingInstances !== nT) return !1;
        const HT = this._internalMeshDataInfo;
        if (this.ignoreCameraMaxZ || this.morphTargetManager || this._instanceDataStorage.isFrozen || mT._isInIntermediateRendering() || 0 !== mT._beforeRenderingMeshStage.length || 0 !== mT._afterRenderingMeshStage.length || HT._onBeforeRenderObservable?.hasObservers() || HT._onBeforeBindObservable?.hasObservers() || HT._onAfterRenderObservable?.hasObservers()) return !1;
        const kT = this.occlusionType;
        if (void 0 !== kT && kT !== aT.d.OCCLUSION_TYPE_NONE || !zT._canBindRunFollower(mT, WT, this, TT, gT)) return !1;
        const jT = this._internalAbstractMeshDataInfo,
          lT = jT._isActiveIntermediate;
        lT ? jT._isActiveIntermediate = !1 : jT._isActive = !1;
        const LT = mT.activeCameras?.length ?? 0;
        (LT > 1 && mT.activeCamera === mT.activeCameras[0] || LT <= 1) && this._checkOcclusionQuery(!1);
        const pT = this._getInstancesRenderList(TT._id);
        if (pT.mustReturn) return !0;
        if (!nT && !pT.renderSelf[TT._id]) return lT ? jT._isActiveIntermediate = !0 : jT._isActive = !0, !1;
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return !0;
        if (HT._effectiveMaterial = zT, UT)
          if (1 === zT.alphaModes.length) WT.setAlphaMode(zT.alphaMode);
          else
            for (let ZT = 0; ZT < zT.alphaModes.length; ZT++) {
              const TT = zT.alphaModes[ZT];
              WT.setAlphaMode(void 0 !== TT ? TT : 2, !1, ZT)
            }
        if (zT.backFaceCulling || null !== zT.sideOrientation || zT._twoSidedLighting) {
          const TT = this._getWorldMatrixDeterminant();
          let UT = zT._getEffectiveOrientation(this);
          TT < 0 && (UT = UT === XT.b.ClockWiseSideOrientation ? XT.b.CounterClockWiseSideOrientation : XT.b.ClockWiseSideOrientation), HT._effectiveSideOrientation = UT
        }
        zT._preBind(MT, HT._effectiveSideOrientation), zT.forceDepthWrite && WT.setDepthWrite(!0);
        const BT = zT.fillMode;
        return nT || this._bind(TT, gT, BT, !1), zT._bindRunFollower(this.getWorldMatrix(), this, TT, gT), this._processRendering(this, TT, gT, BT, pT, nT, this._onBeforeDraw, zT), zT.unbind(), 2 === mT.performancePriority && this._freeze(), !0
      }
      cleanMatrixWeights() {
        this.isVerticesDataPresent(dT.i.MatricesWeightsKind) && (this.isVerticesDataPresent(dT.i.MatricesWeightsExtraKind) ? this._normalizeSkinWeightsAndExtra() : this._normalizeSkinFourWeights())
      }
      _normalizeSkinFourWeights() {
        const TT = this.getVerticesData(dT.i.MatricesWeightsKind),
          UT = TT.length;
        for (let mT = 0; mT < UT; mT += 4) {
          const UT = TT[mT] + TT[mT + 1] + TT[mT + 2] + TT[mT + 3];
          if (0 === UT) TT[mT] = 1;
          else {
            const WT = 1 / UT;
            TT[mT] *= WT, TT[mT + 1] *= WT, TT[mT + 2] *= WT, TT[mT + 3] *= WT
          }
        }
        this.setVerticesData(dT.i.MatricesWeightsKind, TT)
      }
      _normalizeSkinWeightsAndExtra() {
        const TT = this.getVerticesData(dT.i.MatricesWeightsExtraKind),
          UT = this.getVerticesData(dT.i.MatricesWeightsKind),
          mT = UT.length;
        for (let WT = 0; WT < mT; WT += 4) {
          let mT = UT[WT] + UT[WT + 1] + UT[WT + 2] + UT[WT + 3];
          if (mT += TT[WT] + TT[WT + 1] + TT[WT + 2] + TT[WT + 3], 0 === mT) UT[WT] = 1;
          else {
            const zT = 1 / mT;
            UT[WT] *= zT, UT[WT + 1] *= zT, UT[WT + 2] *= zT, UT[WT + 3] *= zT, TT[WT] *= zT, TT[WT + 1] *= zT, TT[WT + 2] *= zT, TT[WT + 3] *= zT
          }
        }
        this.setVerticesData(dT.i.MatricesWeightsKind, UT), this.setVerticesData(dT.i.MatricesWeightsKind, TT)
      }
      validateSkinning() {
        const TT = this.getVerticesData(dT.i.MatricesWeightsExtraKind),
          UT = this.getVerticesData(dT.i.MatricesWeightsKind);
        if (null === UT || null == this.skeleton) return {
          skinned: !1,
          valid: !0,
          Gp: "not skinned"
        };
        const mT = UT.length;
        let WT = 0,
          zT = 0,
          MT = 0,
          gT = 0;
        const nT = null === TT ? 4 : 8,
          HT = [];
        for (let pT = 0; pT <= nT; pT++) HT[pT] = 0;
        for (let pT = 0; pT < mT; pT += 4) {
          let mT = UT[pT],
            kT = mT,
            jT = 0 === kT ? 0 : 1;
          for (let zT = 1; zT < nT; zT++) {
            const MT = zT < 4 ? UT[pT + zT] : TT[pT + zT - 4];
            MT > mT && WT++, 0 !== MT && jT++, kT += MT, mT = MT
          }
          if (HT[jT]++, jT > MT && (MT = jT), 0 === kT) zT++;
          else {
            const mT = 1 / kT;
            let WT = 0;
            for (let zT = 0; zT < nT; zT++) WT += zT < 4 ? Math.abs(UT[pT + zT] - UT[pT + zT] * mT) : Math.abs(TT[pT + zT - 4] - TT[pT + zT - 4] * mT);
            WT > .001 && gT++
          }
        }
        const kT = this.skeleton.bones.length,
          jT = this.getVerticesData(dT.i.MatricesIndicesKind),
          lT = this.getVerticesData(dT.i.MatricesIndicesExtraKind);
        let LT = 0;
        for (let pT = 0; pT < mT; pT += 4)
          for (let TT = 0; TT < nT; TT++) {
            const UT = TT < 4 ? jT[pT + TT] : lT[pT + TT - 4];
            (UT >= kT || UT < 0) && LT++
          }
        return {
          skinned: !0,
          valid: 0 === zT && 0 === gT && 0 === LT,
          Gp: "Number of Weights = " + mT / 4 + "\nMaximum influences = " + MT + "\nMissing Weights = " + zT + "\nNot Sorted = " + WT + "\nNot Normalized = " + gT + "\nWeightCounts = [" + HT + "]\nNumber of bones = " + kT + "\nBad Bone Indices = " + LT
        }
      }
      _checkDelayState() {
        const TT = this.KF();
        return this._geometry ? this._geometry.load(TT) : 4 === this.delayLoadState && (this.delayLoadState = 2, this._queueLoad(TT)), this
      }
      _queueLoad(TT) {
        TT.addPendingData(this);
        const UT = -1 !== this.delayLoadingFile.indexOf(".babylonbinarymeshdata");
        return (async () => {
          try {
            const mT = await TT._loadDelayedFileAsync(this.delayLoadingFile, UT, !0);
            mT instanceof ArrayBuffer ? this._delayLoadingFunction(mT, this) : this._delayLoadingFunction(JSON.parse(mT), this);
            for (const TT of this.instances) TT.refreshBoundingInfo(), TT._syncSubMeshes();
            this.delayLoadState = 1, TT.removePendingData(this)
          } catch (mT) {
            TT.removePendingData(this), TT.bJ || PT.b.Error(`Unable to delay load geometry data for mesh "${this.name}" from "${this.delayLoadingFile}": ${mT}`)
          }
        })(), this
      }
      isInFrustum(TT) {
        return 2 !== this.delayLoadState && (!!super.isInFrustum(TT) && (this._checkDelayState(), !0))
      }
      setMaterialById(TT) {
        const UT = this.KF().materials;
        let mT;
        for (mT = UT.length - 1; mT > -1; mT--)
          if (UT[mT].id === TT) return this.material = UT[mT], this;
        const WT = this.KF().multiMaterials;
        for (mT = WT.length - 1; mT > -1; mT--)
          if (WT[mT].id === TT) return this.material = WT[mT], this;
        return this
      }
      getAnimatables() {
        const TT = [];
        return this.material && TT.push(this.material), this.skeleton && TT.push(this.skeleton), TT
      }
      bakeTransformIntoVertices(TT) {
        if (!this.isVerticesDataPresent(dT.i.PositionKind)) return this;
        const UT = this.rY.splice(0);
        this._resetPointsArrayCache();
        let mT = this.getVerticesData(dT.i.PositionKind);
        const WT = YT.p.Zero();
        let zT;
        for (zT = 0; zT < mT.length; zT += 3) YT.p.TransformCoordinatesFromFloatsToRef(mT[zT], mT[zT + 1], mT[zT + 2], TT, WT).toArray(mT, zT);
        if (this.setVerticesData(dT.i.PositionKind, mT, this.getVertexBuffer(dT.i.PositionKind).isUpdatable()), this.isVerticesDataPresent(dT.i.NormalKind)) {
          for (mT = this.getVerticesData(dT.i.NormalKind), zT = 0; zT < mT.length; zT += 3) YT.p.TransformNormalFromFloatsToRef(mT[zT], mT[zT + 1], mT[zT + 2], TT, WT).normalize().toArray(mT, zT);
          this.setVerticesData(dT.i.NormalKind, mT, this.getVertexBuffer(dT.i.NormalKind).isUpdatable())
        }
        if (this.isVerticesDataPresent(dT.i.TangentKind)) {
          for (mT = this.getVerticesData(dT.i.TangentKind), zT = 0; zT < mT.length; zT += 4) YT.p.TransformNormalFromFloatsToRef(mT[zT], mT[zT + 1], mT[zT + 2], TT, WT).normalize().toArray(mT, zT);
          this.setVerticesData(dT.i.TangentKind, mT, this.getVertexBuffer(dT.i.TangentKind).isUpdatable())
        }
        return TT.determinant() < 0 && this.flipFaces(), this.releaseSubMeshes(), this.rY = UT, this
      }
      bakeCurrentTransformIntoVertices() {
        let TT = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] && this.makeGeometryUnique(), this.bakeTransformIntoVertices(this.computeWorldMatrix(!0)), this.resetLocalMatrix(TT), this
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
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          mT = arguments.length > 2 ? arguments[2] : void 0,
          WT = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        if (UT && void 0 === UT._addToSceneRootNodes) {
          const mT = UT;
          return DT.source = this, DT.doNotCloneChildren = mT.doNotCloneChildren, DT.clonePhysicsImpostor = mT.clonePhysicsImpostor, DT.cloneThinInstances = mT.cloneThinInstances, new oT(TT, this.KF(), DT)
        }
        return new oT(TT, this.KF(), UT, this, mT, WT)
      }
      dispose(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.morphTargetManager = null, this._geometry && this._geometry.releaseForMesh(this, !0);
        const mT = this._internalMeshDataInfo;
        if (mT._onBeforeDrawObservable && mT._onBeforeDrawObservable.clear(), mT._onBeforeBindObservable && mT._onBeforeBindObservable.clear(), mT._onBeforeRenderObservable && mT._onBeforeRenderObservable.clear(), mT._onAfterRenderObservable && mT._onAfterRenderObservable.clear(), mT._onBetweenPassObservable && mT._onBetweenPassObservable.clear(), this._scene.useClonedMeshMap) {
          if (mT.meshMap)
            for (const TT in mT.meshMap) {
              const UT = mT.meshMap[TT];
              UT && (UT._internalMeshDataInfo._source = null, mT.meshMap[TT] = void 0)
            }
          mT._source && mT._source._internalMeshDataInfo.meshMap && (mT._source._internalMeshDataInfo.meshMap[this.uniqueId] = void 0)
        } else {
          const TT = this.KF().meshes;
          for (const UT of TT) {
            const TT = UT;
            TT._internalMeshDataInfo && TT._internalMeshDataInfo._source && TT._internalMeshDataInfo._source === this && (TT._internalMeshDataInfo._source = null)
          }
        }
        mT._source = null, this._disposeInstanceSpecificData(), this._disposeThinInstanceSpecificData(), this._internalMeshDataInfo._checkReadinessObserver && this._scene.onBeforeRenderObservable.remove(this._internalMeshDataInfo._checkReadinessObserver), super.dispose(TT, UT)
      }
      _disposeInstanceSpecificData() {}
      _disposeThinInstanceSpecificData() {}
      _invalidateInstanceVertexArrayObject() {}
      applyDisplacementMap(TT, UT, mT, WT, zT, MT) {
        let gT = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          nT = arguments.length > 7 ? arguments[7] : void 0;
        const HT = this.KF();
        return (0, qT.q)(TT, (TT => {
          const nT = TT.width,
            HT = TT.height,
            kT = this.eB().createCanvas(nT, HT).getContext("2d");
          kT.drawImage(TT, 0, 0);
          const jT = kT.getImageData(0, 0, nT, HT).data;
          this.applyDisplacementMapFromBuffer(jT, nT, HT, UT, mT, zT, MT, gT), WT && WT(this)
        }), nT || (() => {}), HT.offlineProvider), this
      }
      applyDisplacementMapFromBuffer(TT, UT, mT, WT, zT, MT, gT) {
        let nT = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
        if (!this.isVerticesDataPresent(dT.i.PositionKind) || !this.isVerticesDataPresent(dT.i.NormalKind) || !this.isVerticesDataPresent(dT.i.UVKind)) return PT.b.Warn("Cannot call applyDisplacementMap: Given mesh is not complete. Position, Normal or UV are missing"), this;
        const HT = this.getVerticesData(dT.i.PositionKind, !0, !0),
          kT = this.getVerticesData(dT.i.NormalKind),
          jT = this.getVerticesData(dT.i.UVKind);
        let lT = YT.p.Zero();
        const LT = YT.p.Zero(),
          pT = YT.o.Zero();
        MT = MT || YT.o.Zero(), gT = gT || new YT.o(1, 1);
        for (let BT = 0; BT < HT.length; BT += 3) {
          YT.p.FromArrayToRef(HT, BT, lT), YT.p.FromArrayToRef(kT, BT, LT), YT.o.FromArrayToRef(jT, BT / 3 * 2, pT);
          const nT = 4 * ((Math.abs(pT.x * gT.x + MT.x % 1) * (UT - 1) % UT | 0) + (Math.abs(pT.y * gT.y + MT.y % 1) * (mT - 1) % mT | 0) * UT),
            ZT = .3 * (TT[nT] / 255) + .59 * (TT[nT + 1] / 255) + .11 * (TT[nT + 2] / 255);
          LT.normalize(), LT.scaleInPlace(WT + (zT - WT) * ZT), lT = lT.add(LT), lT.toArray(HT, BT)
        }
        return wT.d.ComputeNormals(HT, this.vWT(), kT), nT ? (this.setVerticesData(dT.i.PositionKind, HT), this.setVerticesData(dT.i.NormalKind, kT), this.setVerticesData(dT.i.UVKind, jT)) : (this.updateVerticesData(dT.i.PositionKind, HT), this.updateVerticesData(dT.i.NormalKind, kT)), this
      }
      _getFlattenedNormals(TT, UT) {
        const mT = new Float32Array(3 * TT.length);
        let WT = 0;
        const zT = this.sideOrientation === (this._scene.useRightHandedSystem ? 1 : 0);
        for (let MT = 0; MT < TT.length; MT += 3) {
          const gT = YT.p.FromArray(UT, 3 * TT[MT]),
            nT = YT.p.FromArray(UT, 3 * TT[MT + 1]),
            HT = YT.p.FromArray(UT, 3 * TT[MT + 2]),
            kT = gT.subtract(nT),
            jT = HT.subtract(nT),
            lT = YT.p.Normalize(YT.p.Cross(kT, jT));
          zT && lT.scaleInPlace(-1);
          for (let TT = 0; TT < 3; TT++) mT[WT++] = lT.x, mT[WT++] = lT.y, mT[WT++] = lT.z
        }
        return mT
      }
      _convertToUnIndexedMesh() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const UT = this.getVerticesDataKinds().filter((TT => !this.getVertexBuffer(TT)?.getIsInstanced())),
          mT = this.vWT(!1, !0),
          WT = {},
          zT = (TT, UT) => {
            const WT = new Float32Array(mT.length * UT);
            let zT = 0;
            for (let MT = 0; MT < mT.length; MT++)
              for (let gT = 0; gT < UT; gT++) WT[zT++] = TT[mT[MT] * UT + gT];
            return WT
          },
          MT = this.rV(),
          gT = this.geometry ? this.rY.slice(0) : [];
        for (const nT of UT) WT[nT] = this.getVerticesData(nT);
        for (const nT of UT) {
          const UT = this.getVertexBuffer(nT),
            MT = UT.getSize();
          if (TT && nT === dT.i.NormalKind) {
            const TT = this._getFlattenedNormals(mT, WT[dT.i.PositionKind]);
            this.setVerticesData(dT.i.NormalKind, TT, UT.isUpdatable(), MT)
          } else this.setVerticesData(nT, zT(WT[nT], MT), UT.isUpdatable(), MT)
        }
        if (this.morphTargetManager) {
          for (let UT = 0; UT < this.morphTargetManager.numTargets; UT++) {
            const WT = this.morphTargetManager.getTarget(UT),
              MT = WT.getPositions();
            WT.TnT(zT(MT, 3));
            const gT = WT.getNormals();
            gT && WT.setNormals(TT ? this._getFlattenedNormals(mT, MT) : zT(gT, 3));
            const nT = WT.getTangents();
            nT && WT.setTangents(zT(nT, 3));
            const HT = WT.getUVs();
            HT && WT.setUVs(zT(HT, 2));
            const kT = WT.getColors();
            kT && WT.setColors(zT(kT, 4))
          }
          this.morphTargetManager.synchronize()
        }
        for (let nT = 0; nT < mT.length; nT++) mT[nT] = nT;
        this.setIndices(mT), this._unIndexed = !0, this.releaseSubMeshes();
        for (const nT of gT) {
          const TT = nT.rV();
          yT.e.AddToMesh(nT.materialIndex, nT.indexStart, nT.indexCount, nT.indexStart, nT.indexCount, this).setBoundingInfo(TT)
        }
        return this.setBoundingInfo(MT), this.synchronizeInstances(), this
      }
      convertToFlatShadedMesh() {
        return this._convertToUnIndexedMesh(!0)
      }
      convertToUnIndexedMesh() {
        return this._convertToUnIndexedMesh()
      }
      flipFaces() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const UT = wT.d.ExtractFromMesh(this);
        let mT;
        if (TT && this.isVerticesDataPresent(dT.i.NormalKind) && UT.normals) {
          for (mT = 0; mT < UT.normals.length; mT++) UT.normals[mT] *= -1;
          this.setVerticesData(dT.i.NormalKind, UT.normals, this.isVertexBufferUpdatable(dT.i.NormalKind))
        }
        if (UT.indices) {
          let TT;
          for (mT = 0; mT < UT.indices.length; mT += 3) TT = UT.indices[mT + 1], UT.indices[mT + 1] = UT.indices[mT + 2], UT.indices[mT + 2] = TT;
          this.setIndices(UT.indices, null, this.isVertexBufferUpdatable(dT.i.PositionKind), !0)
        }
        return this
      }
      increaseVertices() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        const UT = wT.d.ExtractFromMesh(this),
          mT = UT.indices && !Array.isArray(UT.indices) && Array.from ? Array.from(UT.indices) : UT.indices,
          WT = UT.positions && !Array.isArray(UT.positions) && Array.from ? Array.from(UT.positions) : UT.positions,
          zT = UT.uvs && !Array.isArray(UT.uvs) && Array.from ? Array.from(UT.uvs) : UT.uvs,
          MT = UT.normals && !Array.isArray(UT.normals) && Array.from ? Array.from(UT.normals) : UT.normals;
        if (mT && WT) {
          UT.indices = mT, UT.positions = WT, zT && (UT.uvs = zT), MT && (UT.normals = MT);
          const gT = TT + 1,
            nT = [];
          for (let TT = 0; TT < gT + 1; TT++) nT[TT] = [];
          let HT, kT;
          const jT = new YT.p(0, 0, 0),
            lT = new YT.p(0, 0, 0),
            LT = new YT.o(0, 0),
            pT = [],
            BT = [],
            ZT = [];
          let cT, vT, fT, qT = WT.length;
          zT && (vT = zT.length), MT && (fT = MT.length);
          for (let TT = 0; TT < mT.length; TT += 3) {
            BT[0] = mT[TT], BT[1] = mT[TT + 1], BT[2] = mT[TT + 2];
            for (let TT = 0; TT < 3; TT++)
              if (HT = BT[TT], kT = BT[(TT + 1) % 3], void 0 === ZT[HT] && void 0 === ZT[kT] ? (ZT[HT] = [], ZT[kT] = []) : (void 0 === ZT[HT] && (ZT[HT] = []), void 0 === ZT[kT] && (ZT[kT] = [])), void 0 === ZT[HT][kT] && void 0 === ZT[kT][HT]) {
                ZT[HT][kT] = [], jT.x = (WT[3 * kT] - WT[3 * HT]) / gT, jT.y = (WT[3 * kT + 1] - WT[3 * HT + 1]) / gT, jT.z = (WT[3 * kT + 2] - WT[3 * HT + 2]) / gT, MT && (lT.x = (MT[3 * kT] - MT[3 * HT]) / gT, lT.y = (MT[3 * kT + 1] - MT[3 * HT + 1]) / gT, lT.z = (MT[3 * kT + 2] - MT[3 * HT + 2]) / gT), zT && (LT.x = (zT[2 * kT] - zT[2 * HT]) / gT, LT.y = (zT[2 * kT + 1] - zT[2 * HT + 1]) / gT), ZT[HT][kT].push(HT);
                for (let TT = 1; TT < gT; TT++) ZT[HT][kT].push(WT.length / 3), WT[qT++] = WT[3 * HT] + TT * jT.x, WT[qT++] = WT[3 * HT + 1] + TT * jT.y, WT[qT++] = WT[3 * HT + 2] + TT * jT.z, MT && (MT[fT++] = MT[3 * HT] + TT * lT.x, MT[fT++] = MT[3 * HT + 1] + TT * lT.y, MT[fT++] = MT[3 * HT + 2] + TT * lT.z), zT && (zT[vT++] = zT[2 * HT] + TT * LT.x, zT[vT++] = zT[2 * HT + 1] + TT * LT.y);
                ZT[HT][kT].push(kT), ZT[kT][HT] = [], cT = ZT[HT][kT].length;
                for (let TT = 0; TT < cT; TT++) ZT[kT][HT][TT] = ZT[HT][kT][cT - 1 - TT]
              } nT[0][0] = mT[TT], nT[1][0] = ZT[mT[TT]][mT[TT + 1]][1], nT[1][1] = ZT[mT[TT]][mT[TT + 2]][1];
            for (let UT = 2; UT < gT; UT++) {
              nT[UT][0] = ZT[mT[TT]][mT[TT + 1]][UT], nT[UT][UT] = ZT[mT[TT]][mT[TT + 2]][UT], jT.x = (WT[3 * nT[UT][UT]] - WT[3 * nT[UT][0]]) / UT, jT.y = (WT[3 * nT[UT][UT] + 1] - WT[3 * nT[UT][0] + 1]) / UT, jT.z = (WT[3 * nT[UT][UT] + 2] - WT[3 * nT[UT][0] + 2]) / UT, MT && (lT.x = (MT[3 * nT[UT][UT]] - MT[3 * nT[UT][0]]) / UT, lT.y = (MT[3 * nT[UT][UT] + 1] - MT[3 * nT[UT][0] + 1]) / UT, lT.z = (MT[3 * nT[UT][UT] + 2] - MT[3 * nT[UT][0] + 2]) / UT), zT && (LT.x = (zT[2 * nT[UT][UT]] - zT[2 * nT[UT][0]]) / UT, LT.y = (zT[2 * nT[UT][UT] + 1] - zT[2 * nT[UT][0] + 1]) / UT);
              for (let TT = 1; TT < UT; TT++) nT[UT][TT] = WT.length / 3, WT[qT++] = WT[3 * nT[UT][0]] + TT * jT.x, WT[qT++] = WT[3 * nT[UT][0] + 1] + TT * jT.y, WT[qT++] = WT[3 * nT[UT][0] + 2] + TT * jT.z, MT && (MT[fT++] = MT[3 * nT[UT][0]] + TT * lT.x, MT[fT++] = MT[3 * nT[UT][0] + 1] + TT * lT.y, MT[fT++] = MT[3 * nT[UT][0] + 2] + TT * lT.z), zT && (zT[vT++] = zT[2 * nT[UT][0]] + TT * LT.x, zT[vT++] = zT[2 * nT[UT][0] + 1] + TT * LT.y)
            }
            nT[gT] = ZT[mT[TT + 1]][mT[TT + 2]], pT.push(nT[0][0], nT[1][0], nT[1][1]);
            for (let TT = 1; TT < gT; TT++) {
              let UT;
              for (UT = 0; UT < TT; UT++) pT.push(nT[TT][UT], nT[TT + 1][UT], nT[TT + 1][UT + 1]), pT.push(nT[TT][UT], nT[TT + 1][UT + 1], nT[TT][UT + 1]);
              pT.push(nT[TT][UT], nT[TT + 1][UT], nT[TT + 1][UT + 1])
            }
          }
          UT.indices = pT, UT.applyToMesh(this, this.isVertexBufferUpdatable(dT.i.PositionKind))
        } else PT.b.Warn("Couldn't increase number of vertices : VertexData must contain at least indices and positions")
      }
      forceSharedVertices() {
        const TT = wT.d.ExtractFromMesh(this),
          UT = TT.uvs,
          mT = TT.indices,
          WT = TT.positions,
          zT = TT.colors,
          MT = TT.matricesIndices,
          gT = TT.matricesWeights,
          nT = TT.matricesIndicesExtra,
          HT = TT.matricesWeightsExtra;
        if (void 0 === mT || void 0 === WT || null === mT || null === WT) PT.b.Warn("VertexData contains empty entries");
        else {
          const kT = [],
            jT = [],
            lT = [],
            LT = [],
            pT = [],
            BT = [],
            ZT = [],
            cT = [];
          let vT, fT = 0;
          const qT = {};
          let iT, bT;
          for (let TT = 0; TT < mT.length; TT += 3) {
            bT = [mT[TT], mT[TT + 1], mT[TT + 2]], vT = [];
            for (let TT = 0; TT < 3; TT++) {
              vT[TT] = "";
              for (let UT = 0; UT < 3; UT++) Math.abs(WT[3 * bT[TT] + UT]) < 1e-8 && (WT[3 * bT[TT] + UT] = 0), vT[TT] += WT[3 * bT[TT] + UT] + "|"
            }
            if (vT[0] != vT[1] && vT[0] != vT[2] && vT[1] != vT[2])
              for (let TT = 0; TT < 3; TT++) {
                if (iT = qT[vT[TT]], void 0 === iT) {
                  qT[vT[TT]] = fT, iT = fT++;
                  for (let UT = 0; UT < 3; UT++) kT.push(WT[3 * bT[TT] + UT]);
                  if (null !== zT && void 0 !== zT)
                    for (let UT = 0; UT < 4; UT++) LT.push(zT[4 * bT[TT] + UT]);
                  if (null !== UT && void 0 !== UT)
                    for (let mT = 0; mT < 2; mT++) lT.push(UT[2 * bT[TT] + mT]);
                  if (null !== MT && void 0 !== MT)
                    for (let UT = 0; UT < 4; UT++) pT.push(MT[4 * bT[TT] + UT]);
                  if (null !== gT && void 0 !== gT)
                    for (let UT = 0; UT < 4; UT++) BT.push(gT[4 * bT[TT] + UT]);
                  if (null !== nT && void 0 !== nT)
                    for (let UT = 0; UT < 4; UT++) ZT.push(nT[4 * bT[TT] + UT]);
                  if (null !== HT && void 0 !== HT)
                    for (let UT = 0; UT < 4; UT++) cT.push(HT[4 * bT[TT] + UT])
                }
                jT.push(iT)
              }
          }
          const OT = [];
          wT.d.ComputeNormals(kT, jT, OT), TT.positions = kT, TT.indices = jT, TT.normals = OT, null !== UT && void 0 !== UT && (TT.uvs = lT), null !== zT && void 0 !== zT && (TT.colors = LT), null !== MT && void 0 !== MT && (TT.matricesIndices = pT), null !== gT && void 0 !== gT && (TT.matricesWeights = BT), null !== nT && void 0 !== nT && (TT.matricesIndicesExtra = ZT), null !== gT && void 0 !== gT && (TT.matricesWeightsExtra = cT), TT.applyToMesh(this, this.isVertexBufferUpdatable(dT.i.PositionKind))
        }
      }
      static _instancedMeshFactory(TT, UT) {
        throw (0, uT.k)("InstancedMesh")
      }
      static _PhysicsImpostorParser(TT, UT, mT) {
        throw (0, uT.k)("PhysicsImpostor")
      }
      createInstance(TT) {
        const UT = oT._instancedMeshFactory(TT, this);
        return UT.parent = this.parent, UT
      }
      synchronizeInstances() {
        for (let TT = 0; TT < this.instances.length; TT++) {
          this.instances[TT]._syncSubMeshes()
        }
        return this
      }
      optimizeIndices(TT) {
        const UT = this.vWT(),
          mT = this.getVerticesData(dT.i.PositionKind);
        if (!mT || !UT) return this;
        const WT = [];
        for (let MT = 0; MT < mT.length; MT += 3) WT.push(YT.p.FromArray(mT, MT));
        const zT = [];
        return fT.c.SyncAsyncForLoop(WT.length, 40, (TT => {
          const UT = WT.length - 1 - TT,
            mT = WT[UT];
          for (let MT = 0; MT < UT; ++MT) {
            const TT = WT[MT];
            if (mT.equals(TT)) {
              zT[UT] = MT;
              break
            }
          }
        }), (() => {
          for (let TT = 0; TT < UT.length; ++TT) UT[TT] = zT[UT[TT]] || UT[TT];
          const mT = this.rY.slice(0);
          this.setIndices(UT), this.rY = mT, TT && TT(this)
        })), this
      }
      serialize() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        TT.name = this.name, TT.id = this.id, TT.uniqueId = this.uniqueId, TT.type = this.getClassName(), bT.b && bT.b.HasTags(this) && (TT.tags = bT.b.GetTags(this)), TT.position = this.position.cWT(), this.rotationQuaternion ? TT.rotationQuaternion = this.rotationQuaternion.cWT() : this.rotation && (TT.rotation = this.rotation.cWT()), TT.gp = this.gp.cWT(), this._postMultiplyPivotMatrix ? TT.pivotMatrix = this.getPivotMatrix().cWT() : TT.localMatrix = this.getPivotMatrix().cWT(), TT.isEnabled = this.isEnabled(!1), TT.isVisible = this.isVisible, TT.infiniteDistance = this.infiniteDistance, TT.pickable = this.QZ, TT.receiveShadows = this.receiveShadows, TT.billboardMode = this.billboardMode, TT.visibility = this.visibility, TT.YB = this.YB, TT.checkCollisions = this.checkCollisions, TT.ellipsoid = this.ellipsoid.cWT(), TT.ellipsoidOffset = this.ellipsoidOffset.cWT(), TT.dB = this.dB, TT.isBlocker = this.isBlocker, TT.sideOrientation = this.sideOrientation, this._isWorldMatrixFrozen && (TT.HV = !0), this.parent && this.parent._serializeAsParent(TT), TT.isUnIndexed = this.isUnIndexed;
        const UT = this._geometry;
        if (UT && this.rY) {
          TT.geometryUniqueId = UT.uniqueId, TT.geometryId = UT.id, TT.rY = [];
          for (let UT = 0; UT < this.rY.length; UT++) {
            const mT = this.rY[UT];
            TT.rY.push({
              materialIndex: mT.materialIndex,
              verticesStart: mT.verticesStart,
              verticesCount: mT.verticesCount,
              indexStart: mT.indexStart,
              indexCount: mT.indexCount
            })
          }
        }
        if (this.material ? this.material.doNotSerialize || (TT.materialUniqueId = this.material.uniqueId, TT.materialId = this.material.id) : (this.material = null, TT.materialUniqueId = this._scene.defaultMaterial.uniqueId, TT.materialId = this._scene.defaultMaterial.id), this.morphTargetManager && (TT.morphTargetManagerId = this.morphTargetManager.uniqueId), this.skeleton && (TT.skeletonId = this.skeleton.id, TT.skeletonUniqueId = this.skeleton.uniqueId, TT.numBoneInfluencers = this.numBoneInfluencers), this.KF()._getComponent(CT.b.NAME_PHYSICSENGINE)) {
          const UT = this.getPhysicsImpostor?.();
          UT && (TT.physicsMass = UT.getParam("Zn"), TT.physicsFriction = UT.getParam("friction"), TT.physicsRestitution = UT.getParam("Zn"), TT.physicsImpostor = UT.type)
        }
        this.metadata && (TT.metadata = this.metadata), 0 !== this.meshBlendingTag && (TT.meshBlendingTag = this.meshBlendingTag), TT.instances = [];
        for (let mT = 0; mT < this.instances.length; mT++) {
          const UT = this.instances[mT];
          if (UT.doNotSerialize) continue;
          const WT = {
            name: UT.name,
            id: UT.id,
            isEnabled: UT.isEnabled(!1),
            isVisible: UT.isVisible,
            QZ: UT.QZ,
            checkCollisions: UT.checkCollisions,
            position: UT.position.cWT(),
            gp: UT.gp.cWT()
          };
          if (UT.parent && UT.parent._serializeAsParent(WT), UT.rotationQuaternion ? WT.rotationQuaternion = UT.rotationQuaternion.cWT() : UT.rotation && (WT.rotation = UT.rotation.cWT()), this.KF()._getComponent(CT.b.NAME_PHYSICSENGINE)) {
            const TT = UT.getPhysicsImpostor?.();
            TT && (WT.physicsMass = TT.getParam("Zn"), WT.physicsFriction = TT.getParam("friction"), WT.physicsRestitution = TT.getParam("Zn"), WT.physicsImpostor = TT.type)
          }
          UT.metadata && (WT.metadata = UT.metadata), UT.actionManager && (WT.actions = UT.actionManager.serialize(UT.name)), TT.instances.push(WT), FT.e.AppendSerializedAnimations(UT, WT), WT.hZ = UT.serializeAnimationRanges()
        }
        if (this._thinInstanceDataStorage.instancesCount && this._thinInstanceDataStorage.matrixData && (TT.thinInstances = {
            instancesCount: this._thinInstanceDataStorage.instancesCount,
            matrixData: Array.from(this._thinInstanceDataStorage.matrixData),
            matrixBufferSize: this._thinInstanceDataStorage.matrixBufferSize,
            enablePicking: this.sUT
          }, this._userThinInstanceBuffersStorage)) {
          const UT = {
            data: {},
            sizes: {},
            strides: {}
          };
          for (const TT in this._userThinInstanceBuffersStorage.data) UT.data[TT] = Array.from(this._userThinInstanceBuffersStorage.data[TT]), UT.sizes[TT] = this._userThinInstanceBuffersStorage.sizes[TT], UT.strides[TT] = this._userThinInstanceBuffersStorage.strides[TT];
          TT.thinInstances.userThinInstance = UT
        }
        return FT.e.AppendSerializedAnimations(this, TT), TT.hZ = this.serializeAnimationRanges(), TT.layerMask = this.layerMask, TT.alphaIndex = this.alphaIndex, TT.hasVertexAlpha = this.hasVertexAlpha, TT.overlayAlpha = this.overlayAlpha, TT.overlayColor = this.overlayColor.cWT(), TT.renderOverlay = this.renderOverlay, TT.applyFog = this.applyFog, this.actionManager && (TT.actions = this.actionManager.serialize(this.name)), TT
      }
      _syncGeometryWithMorphTargetManager() {
        if (!this.geometry) return;
        this._markSubMeshesAsAttributesDirty();
        const TT = this._internalAbstractMeshDataInfo._morphTargetManager;
        if (TT && TT.vertexCount) {
          if (TT.vertexCount !== this.getTotalVertices()) return PT.b.Error("Mesh is incompatible with morph targets. Targets and mesh must all have the same vertices count."), void(this.morphTargetManager = null);
          if (TT.isUsingTextureForTargets) return;
          for (let UT = 0; UT < TT.numInfluencers; UT++) {
            const mT = TT.getActiveTarget(UT),
              WT = mT.getPositions();
            if (!WT) return void PT.b.Error("Invalid morph target. Target must have positions.");
            this.geometry.setVerticesData(dT.i.PositionKind + UT, WT, !1, 3);
            const zT = mT.getNormals();
            zT && this.geometry.setVerticesData(dT.i.NormalKind + UT, zT, !1, 3);
            const MT = mT.getTangents();
            MT && this.geometry.setVerticesData(dT.i.TangentKind + UT, MT, !1, 3);
            const gT = mT.getUVs();
            gT && this.geometry.setVerticesData(dT.i.UVKind + "_" + UT, gT, !1, 2);
            const nT = mT.getUV2s();
            nT && this.geometry.setVerticesData(dT.i.UV2Kind + "_" + UT, nT, !1, 2);
            const HT = mT.getColors();
            HT && this.geometry.setVerticesData(dT.i.ColorKind + UT, HT, !1, 4)
          }
        } else {
          let TT = 0;
          for (; this.geometry.isVerticesDataPresent(dT.i.PositionKind + TT);) this.geometry.removeVerticesData(dT.i.PositionKind + TT), this.geometry.isVerticesDataPresent(dT.i.NormalKind + TT) && this.geometry.removeVerticesData(dT.i.NormalKind + TT), this.geometry.isVerticesDataPresent(dT.i.TangentKind + TT) && this.geometry.removeVerticesData(dT.i.TangentKind + TT), this.geometry.isVerticesDataPresent(dT.i.UVKind + "_" + TT) && this.geometry.removeVerticesData(dT.i.UVKind + "_" + TT), this.geometry.isVerticesDataPresent(dT.i.UV2Kind + "_" + TT) && this.geometry.removeVerticesData(dT.i.UV2Kind + "_" + TT), this.geometry.isVerticesDataPresent(dT.i.ColorKind + TT) && this.geometry.removeVerticesData(dT.i.ColorKind + TT), TT++
        }
      }
      static Parse(TT, UT, mT) {
        let WT, zT = !1;
        if (TT.type && "LinesMesh" === TT.type ? WT = oT._LinesMeshParser(TT, UT) : TT.type && "GroundMesh" === TT.type ? WT = oT._GroundMeshParser(TT, UT) : TT.type && "GoldbergMesh" === TT.type ? WT = oT._GoldbergMeshParser(TT, UT) : TT.type && "GreasedLineMesh" === TT.type ? WT = oT._GreasedLineMeshParser(TT, UT) : TT.type && "TrailMesh" === TT.type ? WT = oT._TrailMeshParser(TT, UT) : TT.type && "GaussianSplattingMesh" === TT.type ? (WT = TT._isCompound ? oT._GaussianSplattingCompoundMeshParser(TT, UT) : oT._GaussianSplattingMeshParser(TT, UT), zT = !0) : TT.type && "GaussianSplattingPartProxyMesh" === TT.type ? (WT = oT._GaussianSplattingPartProxyMeshParser(TT, UT), zT = !0) : WT = new oT(TT.name, UT), WT.id = TT.id, WT._waitingParsedUniqueId = TT.uniqueId, bT.b && bT.b.AddTagsTo(WT, TT.tags), WT.position = YT.p.FromArray(TT.position), void 0 !== TT.metadata && (WT.metadata = TT.metadata), void 0 !== TT.meshBlendingTag && (WT.meshBlendingTag = TT.meshBlendingTag), TT.rotationQuaternion ? WT.rotationQuaternion = YT.f.FromArray(TT.rotationQuaternion) : TT.rotation && (WT.rotation = YT.p.FromArray(TT.rotation)), WT.gp = YT.p.FromArray(TT.gp), TT.localMatrix ? WT.setPreTransformMatrix(YT.e.FromArray(TT.localMatrix)) : TT.pivotMatrix && WT.setPivotMatrix(YT.e.FromArray(TT.pivotMatrix)), WT.Qy(TT.isEnabled), WT.isVisible = TT.isVisible, WT.infiniteDistance = TT.infiniteDistance, WT.YB = !!TT.YB, WT.showBoundingBox = TT.showBoundingBox, WT.showSubMeshesBoundingBox = TT.showSubMeshesBoundingBox, void 0 !== TT.applyFog && (WT.applyFog = TT.applyFog), void 0 !== TT.pickable && (WT.QZ = TT.pickable), void 0 !== TT.alphaIndex && (WT.alphaIndex = TT.alphaIndex), WT.receiveShadows = TT.receiveShadows, void 0 !== TT.billboardMode && (WT.billboardMode = TT.billboardMode), void 0 !== TT.visibility && (WT.visibility = TT.visibility), WT.checkCollisions = TT.checkCollisions, WT.dB = !!TT.dB, TT.ellipsoid && (WT.ellipsoid = YT.p.FromArray(TT.ellipsoid)), TT.ellipsoidOffset && (WT.ellipsoidOffset = YT.p.FromArray(TT.ellipsoidOffset)), null != TT.overrideMaterialSideOrientation && (WT.sideOrientation = TT.overrideMaterialSideOrientation), void 0 !== TT.sideOrientation && (WT.sideOrientation = TT.sideOrientation), void 0 !== TT.isBlocker && (WT.isBlocker = TT.isBlocker), WT._shouldGenerateFlatShading = TT.useFlatShading, TT.HV && (WT._waitingData.HV = TT.HV), void 0 !== TT.parentId && (WT._waitingParentId = TT.parentId), void 0 !== TT.parentInstanceIndex && (WT._waitingParentInstanceIndex = TT.parentInstanceIndex), void 0 !== TT.actions && (WT._waitingData.actions = TT.actions), void 0 !== TT.overlayAlpha && (WT.overlayAlpha = TT.overlayAlpha), void 0 !== TT.overlayColor && (WT.overlayColor = JT.d.FromArray(TT.overlayColor)), void 0 !== TT.renderOverlay && (WT.renderOverlay = TT.renderOverlay), WT.isUnIndexed = !!TT.isUnIndexed, WT.hasVertexAlpha = TT.hasVertexAlpha, TT.delayLoadingFile ? (WT.delayLoadState = 4, WT.delayLoadingFile = mT + TT.delayLoadingFile, WT.buildBoundingInfo(YT.p.FromArray(TT.boundingBoxMinimum), YT.p.FromArray(TT.boundingBoxMaximum)), TT._binaryInfo && (WT._binaryInfo = TT._binaryInfo), WT._delayInfo = [], TT.hasUVs && WT._delayInfo.push(dT.i.UVKind), TT.hasUVs2 && WT._delayInfo.push(dT.i.UV2Kind), TT.hasUVs3 && WT._delayInfo.push(dT.i.UV3Kind), TT.hasUVs4 && WT._delayInfo.push(dT.i.UV4Kind), TT.hasUVs5 && WT._delayInfo.push(dT.i.UV5Kind), TT.hasUVs6 && WT._delayInfo.push(dT.i.UV6Kind), TT.hasColors && WT._delayInfo.push(dT.i.ColorKind), TT.hasMatricesIndices && WT._delayInfo.push(dT.i.MatricesIndicesKind), TT.hasMatricesWeights && WT._delayInfo.push(dT.i.MatricesWeightsKind), WT._delayLoadingFunction = tT.e._ImportGeometry, sT.e.ForceFullSceneLoadingForIncremental && WT._checkDelayState()) : zT || tT.e._ImportGeometry(TT, WT), TT.materialUniqueId ? WT._waitingMaterialId = TT.materialUniqueId : TT.materialId && (WT._waitingMaterialId = TT.materialId), TT.morphTargetManagerId > -1 && (WT._waitingMorphTargetManagerId = TT.morphTargetManagerId), void 0 !== TT.skeletonId && null !== TT.skeletonId && (WT.skeleton = UT.getLastSkeletonById(TT.skeletonId), WT._waitingSkeletonId = TT.skeletonId, TT.numBoneInfluencers && (WT.numBoneInfluencers = TT.numBoneInfluencers)), void 0 !== TT.skeletonUniqueId && null !== TT.skeletonUniqueId && (WT._waitingSkeletonUniqueId = TT.skeletonUniqueId), TT.animations) {
          for (let UT = 0; UT < TT.animations.length; UT++) {
            const mT = TT.animations[UT],
              zT = (0, VT.d)("BABYLON.Animation");
            zT && WT.animations.push(zT.Parse(mT))
          }
          xT.d.ParseAnimationRanges(WT, TT, UT)
        }
        if (TT.autoAnimate && UT.beginAnimation(WT, TT.autoAnimateFrom, TT.autoAnimateTo, TT.autoAnimateLoop, TT.autoAnimateSpeed || 1), TT.layerMask && !isNaN(TT.layerMask) ? WT.layerMask = Math.abs(parseInt(TT.layerMask)) : WT.layerMask = 268435455, TT.physicsImpostor && (WT.physicsImpostor = oT._PhysicsImpostorParser(UT, WT, TT)), TT.lodMeshIds && (WT._waitingData.lods = {
            ids: TT.lodMeshIds,
            distances: TT.lodDistances ? TT.lodDistances : null,
            coverages: TT.lodCoverages ? TT.lodCoverages : null
          }), TT.instances)
          for (let MT = 0; MT < TT.instances.length; MT++) {
            const mT = TT.instances[MT],
              zT = WT.createInstance(mT.name);
            if (mT.id && (zT.id = mT.id), bT.b && (mT.tags ? bT.b.AddTagsTo(zT, mT.tags) : bT.b.AddTagsTo(zT, TT.tags)), zT.position = YT.p.FromArray(mT.position), void 0 !== mT.metadata && (zT.metadata = mT.metadata), void 0 !== mT.parentId && (zT._waitingParentId = mT.parentId), void 0 !== mT.parentInstanceIndex && (zT._waitingParentInstanceIndex = mT.parentInstanceIndex), void 0 !== mT.isEnabled && null !== mT.isEnabled && zT.Qy(mT.isEnabled), void 0 !== mT.isVisible && null !== mT.isVisible && (zT.isVisible = mT.isVisible), void 0 !== mT.QZ && null !== mT.QZ && (zT.QZ = mT.QZ), mT.rotationQuaternion ? zT.rotationQuaternion = YT.f.FromArray(mT.rotationQuaternion) : mT.rotation && (zT.rotation = YT.p.FromArray(mT.rotation)), zT.gp = YT.p.FromArray(mT.gp), void 0 != mT.checkCollisions && null != mT.checkCollisions && (zT.checkCollisions = mT.checkCollisions), void 0 != mT.pickable && null != mT.pickable && (zT.QZ = mT.pickable), void 0 != mT.showBoundingBox && null != mT.showBoundingBox && (zT.showBoundingBox = mT.showBoundingBox), void 0 != mT.showSubMeshesBoundingBox && null != mT.showSubMeshesBoundingBox && (zT.showSubMeshesBoundingBox = mT.showSubMeshesBoundingBox), void 0 != mT.alphaIndex && null != mT.showSubMeshesBoundingBox && (zT.alphaIndex = mT.alphaIndex), mT.physicsImpostor && (zT.physicsImpostor = oT._PhysicsImpostorParser(UT, zT, mT)), void 0 !== mT.actions && (zT._waitingData.actions = mT.actions), mT.animations) {
              for (let TT = 0; TT < mT.animations.length; TT++) {
                const UT = mT.animations[TT],
                  WT = (0, VT.d)("BABYLON.Animation");
                WT && zT.animations.push(WT.Parse(UT))
              }
              xT.d.ParseAnimationRanges(zT, mT, UT), mT.autoAnimate && UT.beginAnimation(zT, mT.autoAnimateFrom, mT.autoAnimateTo, mT.autoAnimateLoop, mT.autoAnimateSpeed || 1)
            }
          }
        if (TT.thinInstances) {
          const UT = TT.thinInstances;
          if (WT.sUT = !!UT.enablePicking, UT.matrixData ? (WT.f6("matrix", new Float32Array(UT.matrixData), 16, !1), WT._thinInstanceDataStorage.matrixBufferSize = UT.matrixBufferSize, WT._thinInstanceDataStorage.instancesCount = UT.instancesCount) : WT._thinInstanceDataStorage.matrixBufferSize = UT.matrixBufferSize, TT.thinInstances.userThinInstance) {
            const UT = TT.thinInstances.userThinInstance;
            for (const TT in UT.data) WT.f6(TT, new Float32Array(UT.data[TT]), UT.strides[TT], !1), WT._userThinInstanceBuffersStorage.sizes[TT] = UT.sizes[TT]
          }
        }
        return WT
      }
      setPositionsForCPUSkinning() {
        const TT = this._internalMeshDataInfo;
        if (!TT._sourcePositions) {
          const UT = this.getVerticesData(dT.i.PositionKind);
          if (!UT) return TT._sourcePositions;
          TT._sourcePositions = new Float32Array(UT), this.isVertexBufferUpdatable(dT.i.PositionKind) || this.setVerticesData(dT.i.PositionKind, UT, !0)
        }
        return TT._sourcePositions
      }
      setNormalsForCPUSkinning() {
        const TT = this._internalMeshDataInfo;
        if (!TT._sourceNormals) {
          const UT = this.getVerticesData(dT.i.NormalKind);
          if (!UT) return TT._sourceNormals;
          TT._sourceNormals = new Float32Array(UT), this.isVertexBufferUpdatable(dT.i.NormalKind) || this.setVerticesData(dT.i.NormalKind, UT, !0)
        }
        return TT._sourceNormals
      }
      applySkeleton(TT) {
        if (!this.geometry) return this;
        if (this.geometry._softwareSkinningFrameId == this.KF().getFrameId()) return this;
        if (this.geometry._softwareSkinningFrameId = this.KF().getFrameId(), !this.isVerticesDataPresent(dT.i.PositionKind)) return this;
        if (!this.isVerticesDataPresent(dT.i.MatricesIndicesKind)) return this;
        if (!this.isVerticesDataPresent(dT.i.MatricesWeightsKind)) return this;
        const UT = this.isVerticesDataPresent(dT.i.NormalKind),
          mT = this._internalMeshDataInfo;
        if (!mT._sourcePositions) {
          const TT = this.rY.slice();
          this.setPositionsForCPUSkinning(), this.rY = TT
        }
        UT && !mT._sourceNormals && this.setNormalsForCPUSkinning();
        let WT = this.getVerticesData(dT.i.PositionKind);
        if (!WT) return this;
        WT instanceof Float32Array || (WT = new Float32Array(WT));
        let zT = this.getVerticesData(dT.i.NormalKind);
        if (UT) {
          if (!zT) return this;
          zT instanceof Float32Array || (zT = new Float32Array(zT))
        }
        const MT = this.getVerticesData(dT.i.MatricesIndicesKind),
          gT = this.getVerticesData(dT.i.MatricesWeightsKind);
        if (!gT || !MT) return this;
        const nT = this.numBoneInfluencers > 4,
          HT = nT ? this.getVerticesData(dT.i.MatricesIndicesExtraKind) : null,
          kT = nT ? this.getVerticesData(dT.i.MatricesWeightsExtraKind) : null,
          jT = TT.getTransformMatrices(this),
          lT = YT.p.Zero(),
          LT = new YT.e,
          pT = new YT.e;
        let BT, ZT = 0;
        for (let cT = 0; cT < WT.length; cT += 3, ZT += 4) {
          let TT;
          for (BT = 0; BT < 4; BT++) TT = gT[ZT + BT], TT > 0 && (YT.e.FromFloat32ArrayToRefScaled(jT, Math.floor(16 * MT[ZT + BT]), TT, pT), LT.addToSelf(pT));
          if (nT)
            for (BT = 0; BT < 4; BT++) TT = kT[ZT + BT], TT > 0 && (YT.e.FromFloat32ArrayToRefScaled(jT, Math.floor(16 * HT[ZT + BT]), TT, pT), LT.addToSelf(pT));
          YT.p.TransformCoordinatesFromFloatsToRef(mT._sourcePositions[cT], mT._sourcePositions[cT + 1], mT._sourcePositions[cT + 2], LT, lT), lT.toArray(WT, cT), UT && (YT.p.TransformNormalFromFloatsToRef(mT._sourceNormals[cT], mT._sourceNormals[cT + 1], mT._sourceNormals[cT + 2], LT, lT), lT.toArray(zT, cT)), LT.reset()
        }
        return this.updateVerticesData(dT.i.PositionKind, WT), UT && this.updateVerticesData(dT.i.NormalKind, zT), this
      }
      static MinMax(TT) {
        let UT = null,
          mT = null;
        for (const WT of TT) {
          const TT = WT.rV().boundingBox;
          UT && mT ? (UT.minimizeInPlace(TT.minimumWorld), mT.maximizeInPlace(TT.maximumWorld)) : (UT = TT.minimumWorld.clone(), mT = TT.maximumWorld.clone())
        }
        return UT && mT ? {
          min: UT,
          max: mT
        } : {
          min: YT.p.Zero(),
          max: YT.p.Zero()
        }
      }
      static Center(TT) {
        const UT = TT instanceof Array ? oT.MinMax(TT) : TT;
        return YT.p.Center(UT.min, UT.max)
      }
      static MergeMeshes(TT) {
        let UT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          mT = arguments.length > 2 ? arguments[2] : void 0,
          WT = arguments.length > 3 ? arguments[3] : void 0,
          zT = arguments.length > 4 ? arguments[4] : void 0,
          MT = arguments.length > 5 ? arguments[5] : void 0;
        return (0, OT.i)(oT._MergeMeshesCoroutine(TT, UT, mT, WT, zT, MT, !1))
      }
      static async MergeMeshesAsync(TT) {
        let UT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          mT = arguments.length > 2 ? arguments[2] : void 0,
          WT = arguments.length > 3 ? arguments[3] : void 0,
          zT = arguments.length > 4 ? arguments[4] : void 0,
          MT = arguments.length > 5 ? arguments[5] : void 0;
        return await (0, OT.f)(oT._MergeMeshesCoroutine(TT, UT, mT, WT, zT, MT, !0), (0, OT.b)())
      }
      static * _MergeMeshesCoroutine(TT) {
        let UT, mT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          WT = arguments.length > 2 ? arguments[2] : void 0,
          zT = arguments.length > 3 ? arguments[3] : void 0,
          MT = arguments.length > 4 ? arguments[4] : void 0,
          gT = arguments.length > 5 ? arguments[5] : void 0,
          nT = arguments.length > 6 ? arguments[6] : void 0;
        if (0 === (TT = TT.filter(Boolean)).length) return null;
        if (!WT) {
          let mT = 0;
          for (UT = 0; UT < TT.length; UT++)
            if (mT += TT[UT].getTotalVertices(), mT >= 65536) return PT.b.Warn("Cannot merge meshes because resulting mesh will have more than 65536 vertices. Please use allow32BitsIndices = true to use 32 bits indices"), null
        }
        const HT = TT[0];
        gT && (MT = !1, TT.sort(((TT, UT) => (TT.material?.uniqueId ?? -1) - (UT.material?.uniqueId ?? -1))));
        const kT = new Array,
          jT = new Array,
          lT = new Array,
          LT = TT[0].sideOrientation;
        for (UT = 0; UT < TT.length; UT++) {
          const mT = TT[UT];
          if (mT.RP) return PT.b.Warn("Cannot merge instance meshes."), null;
          if (LT !== mT.sideOrientation) return PT.b.Warn("Cannot merge meshes with different sideOrientation values."), null;
          if (MT || gT) {
            const TT = lT.reduce(((TT, UT) => Math.max(TT, UT.start + UT.count)), 0);
            if (gT)
              if (mT.material) {
                const UT = mT.material;
                if (UT instanceof QT.e) {
                  for (let TT = 0; TT < UT.w6.length; TT++) kT.indexOf(UT.w6[TT]) < 0 && kT.push(UT.w6[TT]);
                  for (let WT = 0; WT < mT.rY.length; WT++) jT.push(kT.indexOf(UT.w6[mT.rY[WT].materialIndex])), lT.push({
                    start: TT + mT.rY[WT].indexStart,
                    count: mT.rY[WT].indexCount
                  })
                } else {
                  kT.indexOf(UT) < 0 && kT.push(UT);
                  for (let WT = 0; WT < mT.rY.length; WT++) jT.push(kT.indexOf(UT)), lT.push({
                    start: TT + mT.rY[WT].indexStart,
                    count: mT.rY[WT].indexCount
                  })
                }
              } else
                for (let UT = 0; UT < mT.rY.length; UT++) jT.push(0), lT.push({
                  start: TT + mT.rY[UT].indexStart,
                  count: mT.rY[UT].indexCount
                });
            else lT.push({
              start: TT,
              count: mT.getTotalIndices()
            })
          }
        }
        if (gT && lT.length > 1) {
          let TT = 0;
          for (let UT = 1; UT < lT.length; UT++) {
            const mT = lT[TT],
              WT = lT[UT];
            jT[UT] === jT[TT] && mT.start + mT.count === WT.start ? mT.count += WT.count : (TT++, lT[TT] = WT, jT[TT] = jT[UT])
          }
          lT.length = TT + 1, jT.length = TT + 1
        }
        const pT = TT => {
            const UT = TT.computeWorldMatrix(!0);
            return {
              vertexData: wT.d.ExtractFromMesh(TT, !1, !1),
              transform: UT
            }
          },
          {
            vertexData: BT,
            transform: ZT
          } = pT(TT[0]);
        nT && (yield);
        const cT = new Array(TT.length - 1);
        for (let OT = 1; OT < TT.length; OT++) cT[OT - 1] = pT(TT[OT]), nT && (yield);
        const vT = BT._mergeCoroutine(ZT, cT, WT, nT, !mT);
        let fT = vT.next();
        for (; !fT.done;) nT && (yield), fT = vT.next();
        const qT = fT.value;
        zT || (zT = new oT(HT.name + "_merged", HT.KF()));
        const iT = qT._applyToCoroutine(zT, void 0, nT);
        let bT = iT.next();
        for (; !bT.done;) nT && (yield), bT = iT.next();
        if (zT.checkCollisions = HT.checkCollisions, zT.sideOrientation = HT.sideOrientation, mT)
          for (UT = 0; UT < TT.length; UT++) TT[UT].dispose();
        if (MT || gT) {
          for (zT.releaseSubMeshes(), UT = 0; UT < lT.length;) yT.e.CreateFromIndices(0, lT[UT].start, lT[UT].count, zT, void 0, !1), UT++;
          for (const TT of zT.rY) TT.refreshBoundingInfo();
          zT.computeWorldMatrix(!0)
        }
        if (gT) {
          const TT = new QT.e(HT.name + "_merged", HT.KF());
          TT.w6 = kT;
          for (let UT = 0; UT < zT.rY.length; UT++) zT.rY[UT].materialIndex = jT[UT];
          zT.material = TT
        } else zT.material = HT.material;
        return zT
      }
      o5(TT) {
        TT._indexInSourceMeshInstanceArray = this.instances.length, this.instances.push(TT)
      }
      N7(TT) {
        const UT = TT._indexInSourceMeshInstanceArray;
        if (-1 != UT) {
          if (UT !== this.instances.length - 1) {
            const TT = this.instances[this.instances.length - 1];
            this.instances[UT] = TT, TT._indexInSourceMeshInstanceArray = UT
          }
          TT._indexInSourceMeshInstanceArray = -1, this.instances.pop()
        }
      }
      _shouldConvertRHS() {
        return this._scene.useRightHandedSystem && this.sideOrientation === XT.b.CounterClockWiseSideOrientation
      }
      _getRenderingFillMode(TT) {
        const UT = this.KF();
        return UT.forcePointsCloud ? XT.b.PointFillMode : UT.forceWireframe ? XT.b.WireFrameFillMode : this.overrideRenderingFillMode ?? TT
      }
      setMaterialByID(TT) {
        return this.setMaterialById(TT)
      }
      static CreateRibbon(TT, UT, mT, WT, zT, MT, gT, nT, HT) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDisc(TT, UT, mT, WT, zT, MT) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateBox(TT, UT, mT, WT, zT) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateSphere(TT, UT, mT, WT, zT, MT) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateHemisphere(TT, UT, mT, WT) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateCylinder(TT, UT, mT, WT, zT, MT, gT, nT, HT) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTorus(TT, UT, mT, WT, zT, MT, gT) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTorusKnot(TT, UT, mT, WT, zT, MT, gT, nT, HT, kT) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateLines(TT, UT, mT, WT, zT) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDashedLines(TT, UT, mT, WT, zT, MT, gT, nT) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePolygon(TT, UT, mT, WT, zT, MT, gT) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudePolygon(TT, UT, mT, WT, zT, MT, gT, nT) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudeShape(TT, UT, mT, WT, zT, MT, gT, nT, HT, kT) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudeShapeCustom(TT, UT, mT, WT, zT, MT, gT, nT, HT, kT, jT, lT) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateLathe(TT, UT, mT, WT, zT, MT, gT) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePlane(TT, UT, mT, WT, zT) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateGround(TT, UT, mT, WT, zT, MT) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTiledGround(TT, UT, mT, WT, zT, MT, gT, nT, HT) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateGroundFromHeightMap(TT, UT, mT, WT, zT, MT, gT, nT, HT, kT, jT) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTube(TT, UT, mT, WT, zT, MT, gT, nT, HT, kT) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePolyhedron(TT, UT, mT) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateIcoSphere(TT, UT, mT) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDecal(TT, UT, mT, WT, zT, MT) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateCapsule(TT, UT, mT) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtendToGoldberg(TT) {
        throw new Error("Import MeshBuilder to populate this function")
      }
    }
    oT.FRONTSIDE = wT.d.FRONTSIDE, oT.BACKSIDE = wT.d.BACKSIDE, oT.DOUBLESIDE = wT.d.DOUBLESIDE, oT.DEFAULTSIDE = wT.d.DEFAULTSIDE, oT.NO_CAP = 0, oT.CAP_START = 1, oT.CAP_END = 2, oT.CAP_ALL = 3, oT.NO_FLIP = 0, oT.FLIP_TILE = 1, oT.ROTATE_TILE = 2, oT.FLIP_ROW = 3, oT.ROTATE_ROW = 4, oT.FLIP_N_ROTATE_TILE = 5, oT.FLIP_N_ROTATE_ROW = 6, oT.CENTER = 0, oT.LEFT = 1, oT.RIGHT = 2, oT.TOP = 3, oT.BOTTOM = 4, oT.INSTANCEDMESH_SORT_TRANSPARENT = !1, oT._GroundMeshParser = (TT, UT) => {
      throw (0, uT.k)("GroundMesh")
    }, oT._GoldbergMeshParser = (TT, UT) => {
      throw (0, uT.k)("GoldbergMesh")
    }, oT._LinesMeshParser = (TT, UT) => {
      throw (0, uT.k)("LinesMesh")
    }, oT._GreasedLineMeshParser = (TT, UT) => {
      throw (0, uT.k)("GreasedLineMesh")
    }, oT._GreasedLineRibbonMeshParser = (TT, UT) => {
      throw (0, uT.k)("GreasedLineRibbonMesh")
    }, oT._TrailMeshParser = (TT, UT) => {
      throw (0, uT.k)("TrailMesh")
    }, oT._GaussianSplattingMeshParser = (TT, UT) => {
      throw (0, uT.k)("GaussianSplattingMesh")
    }, oT._GaussianSplattingPartProxyMeshParser = (TT, UT) => {
      throw (0, uT.k)("GaussianSplattingPartProxyMesh")
    }, oT._GaussianSplattingCompoundMeshParser = (TT, UT) => {
      throw (0, uT.k)("GaussianSplattingCompoundMesh")
    };
    let AT = !1;

    function RT() {
      AT || (AT = !0, (0, VT.h)("BABYLON.Mesh", oT))
    }(WT = oT.prototype).yV ?? (WT.yV = (0, uT.j)("Mesh", "yV")), (zT = oT.prototype).simplify ?? (zT.simplify = (0, uT.j)("Mesh", "simplify")), (MT = oT.prototype).thinInstanceAdd ?? (MT.thinInstanceAdd = (0, uT.j)("Mesh", "thinInstanceAdd")), (gT = oT.prototype).thinInstanceAddSelf ?? (gT.thinInstanceAddSelf = (0, uT.j)("Mesh", "thinInstanceAddSelf")), (nT = oT.prototype).thinInstanceRegisterAttribute ?? (nT.thinInstanceRegisterAttribute = (0, uT.j)("Mesh", "thinInstanceRegisterAttribute")), (HT = oT.prototype).thinInstanceSetMatrixAt ?? (HT.thinInstanceSetMatrixAt = (0, uT.j)("Mesh", "thinInstanceSetMatrixAt")), (kT = oT.prototype).thinInstanceSetAttributeAt ?? (kT.thinInstanceSetAttributeAt = (0, uT.j)("Mesh", "thinInstanceSetAttributeAt")), (jT = oT.prototype).f6 ?? (jT.f6 = (0, uT.j)("Mesh", "f6")), (lT = oT.prototype).thinInstanceGetWorldMatrices ?? (lT.thinInstanceGetWorldMatrices = (0, uT.j)("Mesh", "thinInstanceGetWorldMatrices")), (LT = oT.prototype).Q8 ?? (LT.Q8 = (0, uT.j)("Mesh", "Q8")), (pT = oT.prototype).thinInstancePartialBufferUpdate ?? (pT.thinInstancePartialBufferUpdate = (0, uT.j)("Mesh", "thinInstancePartialBufferUpdate")), (BT = oT.prototype).thinInstanceRefreshBoundingInfo ?? (BT.thinInstanceRefreshBoundingInfo = (0, uT.j)("Mesh", "thinInstanceRefreshBoundingInfo")), (ZT = oT.prototype).getEmittedParticleSystems ?? (ZT.getEmittedParticleSystems = (0, uT.j)("Mesh", "getEmittedParticleSystems")), (cT = oT.prototype).getHierarchyEmittedParticleSystems ?? (cT.getHierarchyEmittedParticleSystems = (0, uT.j)("Mesh", "getHierarchyEmittedParticleSystems")), Object.getOwnPropertyDescriptor(oT.prototype, "edgesShareWithInstances") || Object.defineProperty(oT.prototype, "edgesShareWithInstances", (0, uT.h)("Mesh", "edgesShareWithInstances")), Object.getOwnPropertyDescriptor(oT.prototype, "sUT") || Object.defineProperty(oT.prototype, "sUT", (0, uT.h)("Mesh", "sUT")), Object.getOwnPropertyDescriptor(oT.prototype, "thinInstanceAllowAutomaticStaticBufferRecreation") || Object.defineProperty(oT.prototype, "thinInstanceAllowAutomaticStaticBufferRecreation", (0, uT.h)("Mesh", "thinInstanceAllowAutomaticStaticBufferRecreation")), Object.getOwnPropertyDescriptor(oT.prototype, "i5") || Object.defineProperty(oT.prototype, "i5", (0, uT.h)("Mesh", "i5"))
  },
  40546: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => BT
    });
    var WT = mT(40095),
      zT = mT(37188),
      MT = mT(40257),
      gT = mT(39965),
      nT = mT(37367),
      HT = mT(38800),
      kT = mT(40102),
      jT = mT(40541),
      lT = mT(40160),
      LT = mT(40418);
    class pT {}
    let BT = (() => {
      var TT;
      let UT, mT, BT, ZT, cT = [];
      return TT = class {
        constructor() {
          this.uniqueId = 0, this.metadata = {}, this._applyTo = (0, jT.c)(this._applyToCoroutine.bind(this)), this.uniqueId = TT._UniqueIdGenerator, TT._UniqueIdGenerator++
        }
        set(TT, UT) {
          switch (TT.length || HT.b.Warn(`Setting vertex data kind '${UT}' with an empty array`), UT) {
            case MT.i.PositionKind:
              this.positions = TT;
              break;
            case MT.i.NormalKind:
              this.normals = TT;
              break;
            case MT.i.TangentKind:
              this.tangents = TT;
              break;
            case MT.i.UVKind:
              this.uvs = TT;
              break;
            case MT.i.UV2Kind:
              this.uvs2 = TT;
              break;
            case MT.i.UV3Kind:
              this.uvs3 = TT;
              break;
            case MT.i.UV4Kind:
              this.uvs4 = TT;
              break;
            case MT.i.UV5Kind:
              this.uvs5 = TT;
              break;
            case MT.i.UV6Kind:
              this.uvs6 = TT;
              break;
            case MT.i.ColorKind:
              this.colors = TT;
              break;
            case MT.i.MatricesIndicesKind:
              this.matricesIndices = TT;
              break;
            case MT.i.MatricesWeightsKind:
              this.matricesWeights = TT;
              break;
            case MT.i.MatricesIndicesExtraKind:
              this.matricesIndicesExtra = TT;
              break;
            case MT.i.MatricesWeightsExtraKind:
              this.matricesWeightsExtra = TT
          }
        }
        applyToMesh(TT, UT) {
          return this._applyTo(TT, UT, !1), this
        }
        applyToGeometry(TT, UT) {
          return this._applyTo(TT, UT, !1), this
        }
        updateMesh(TT) {
          return this._update(TT), this
        }
        updateGeometry(TT) {
          return this._update(TT), this
        }* _applyToCoroutine(TT) {
          let UT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            mT = arguments.length > 2 ? arguments[2] : void 0;
          if (this.positions && (TT.setVerticesData(MT.i.PositionKind, this.positions, UT), mT && (yield)), this.normals && (TT.setVerticesData(MT.i.NormalKind, this.normals, UT), mT && (yield)), this.tangents && (TT.setVerticesData(MT.i.TangentKind, this.tangents, UT), mT && (yield)), this.uvs && (TT.setVerticesData(MT.i.UVKind, this.uvs, UT), mT && (yield)), this.uvs2 && (TT.setVerticesData(MT.i.UV2Kind, this.uvs2, UT), mT && (yield)), this.uvs3 && (TT.setVerticesData(MT.i.UV3Kind, this.uvs3, UT), mT && (yield)), this.uvs4 && (TT.setVerticesData(MT.i.UV4Kind, this.uvs4, UT), mT && (yield)), this.uvs5 && (TT.setVerticesData(MT.i.UV5Kind, this.uvs5, UT), mT && (yield)), this.uvs6 && (TT.setVerticesData(MT.i.UV6Kind, this.uvs6, UT), mT && (yield)), this.colors) {
            const WT = this.positions && this.colors.length === this.positions.length ? 3 : 4;
            TT.setVerticesData(MT.i.ColorKind, this.colors, UT, WT), this.hasVertexAlpha && void 0 !== TT.hasVertexAlpha && (TT.hasVertexAlpha = !0), mT && (yield)
          }
          if (this.matricesIndices && (TT.setVerticesData(MT.i.MatricesIndicesKind, this.matricesIndices, UT), mT && (yield)), this.matricesWeights && (TT.setVerticesData(MT.i.MatricesWeightsKind, this.matricesWeights, UT), mT && (yield)), this.matricesIndicesExtra && (TT.setVerticesData(MT.i.MatricesIndicesExtraKind, this.matricesIndicesExtra, UT), mT && (yield)), this.matricesWeightsExtra && (TT.setVerticesData(MT.i.MatricesWeightsExtraKind, this.matricesWeightsExtra, UT), mT && (yield)), this.indices ? (TT.setIndices(this.indices, null, UT), mT && (yield)) : TT.setIndices([], null), TT.rY && this.materialInfos && this.materialInfos.length > 1) {
            const UT = TT;
            UT.rY = [];
            for (const TT of this.materialInfos) new LT.e(TT.materialIndex, TT.verticesStart, TT.verticesCount, TT.indexStart, TT.indexCount, UT)
          }
          return this
        }
        _update(TT, UT, mT) {
          return this.positions && TT.updateVerticesData(MT.i.PositionKind, this.positions, UT, mT), this.normals && TT.updateVerticesData(MT.i.NormalKind, this.normals, UT, mT), this.tangents && TT.updateVerticesData(MT.i.TangentKind, this.tangents, UT, mT), this.uvs && TT.updateVerticesData(MT.i.UVKind, this.uvs, UT, mT), this.uvs2 && TT.updateVerticesData(MT.i.UV2Kind, this.uvs2, UT, mT), this.uvs3 && TT.updateVerticesData(MT.i.UV3Kind, this.uvs3, UT, mT), this.uvs4 && TT.updateVerticesData(MT.i.UV4Kind, this.uvs4, UT, mT), this.uvs5 && TT.updateVerticesData(MT.i.UV5Kind, this.uvs5, UT, mT), this.uvs6 && TT.updateVerticesData(MT.i.UV6Kind, this.uvs6, UT, mT), this.colors && TT.updateVerticesData(MT.i.ColorKind, this.colors, UT, mT), this.matricesIndices && TT.updateVerticesData(MT.i.MatricesIndicesKind, this.matricesIndices, UT, mT), this.matricesWeights && TT.updateVerticesData(MT.i.MatricesWeightsKind, this.matricesWeights, UT, mT), this.matricesIndicesExtra && TT.updateVerticesData(MT.i.MatricesIndicesExtraKind, this.matricesIndicesExtra, UT, mT), this.matricesWeightsExtra && TT.updateVerticesData(MT.i.MatricesWeightsExtraKind, this.matricesWeightsExtra, UT, mT), this.indices && TT.setIndices(this.indices, null), this
        }
        static _TransformVector3Coordinates(TT, UT) {
          let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : TT.length;
          const MT = zT.l.JB[0],
            gT = zT.l.JB[1];
          for (let nT = mT; nT < mT + WT; nT += 3) zT.p.FromArrayToRef(TT, nT, MT), zT.p.TransformCoordinatesToRef(MT, UT, gT), TT[nT] = gT.x, TT[nT + 1] = gT.y, TT[nT + 2] = gT.z
        }
        static _TransformVector3Normals(TT, UT) {
          let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : TT.length;
          const MT = zT.l.JB[0],
            gT = zT.l.JB[1];
          for (let nT = mT; nT < mT + WT; nT += 3) zT.p.FromArrayToRef(TT, nT, MT), zT.p.TransformNormalToRef(MT, UT, gT), TT[nT] = gT.x, TT[nT + 1] = gT.y, TT[nT + 2] = gT.z
        }
        static _TransformVector4Normals(TT, UT) {
          let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : TT.length;
          const MT = zT.l.Vector4[0],
            gT = zT.l.Vector4[1];
          for (let nT = mT; nT < mT + WT; nT += 4) zT.t.FromArrayToRef(TT, nT, MT), zT.t.TransformNormalToRef(MT, UT, gT), TT[nT] = gT.x, TT[nT + 1] = gT.y, TT[nT + 2] = gT.z, TT[nT + 3] = gT.w
        }
        static _FlipFaces(TT) {
          let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : TT.length;
          for (let WT = UT; WT < UT + mT; WT += 3) {
            const UT = TT[WT + 1];
            TT[WT + 1] = TT[WT + 2], TT[WT + 2] = UT
          }
        }
        transform(UT) {
          const mT = UT.determinant() < 0;
          return this.positions && TT._TransformVector3Coordinates(this.positions, UT), this.normals && TT._TransformVector3Normals(this.normals, UT), this.tangents && TT._TransformVector4Normals(this.tangents, UT), mT && this.indices && TT._FlipFaces(this.indices), this
        }
        splitBasedOnMaterialID() {
          if (!this.materialInfos || this.materialInfos.length < 2) return [this];
          const UT = [];
          for (const mT of this.materialInfos) {
            const WT = new TT;
            if (this.positions && (WT.positions = this.positions.slice(3 * mT.verticesStart, 3 * (mT.verticesCount + mT.verticesStart))), this.normals && (WT.normals = this.normals.slice(3 * mT.verticesStart, 3 * (mT.verticesCount + mT.verticesStart))), this.tangents && (WT.tangents = this.tangents.slice(4 * mT.verticesStart, 4 * (mT.verticesCount + mT.verticesStart))), this.colors && (WT.colors = this.colors.slice(4 * mT.verticesStart, 4 * (mT.verticesCount + mT.verticesStart))), this.uvs && (WT.uvs = this.uvs.slice(2 * mT.verticesStart, 2 * (mT.verticesCount + mT.verticesStart))), this.uvs2 && (WT.uvs2 = this.uvs2.slice(2 * mT.verticesStart, 2 * (mT.verticesCount + mT.verticesStart))), this.uvs3 && (WT.uvs3 = this.uvs3.slice(2 * mT.verticesStart, 2 * (mT.verticesCount + mT.verticesStart))), this.uvs4 && (WT.uvs4 = this.uvs4.slice(2 * mT.verticesStart, 2 * (mT.verticesCount + mT.verticesStart))), this.uvs5 && (WT.uvs5 = this.uvs5.slice(2 * mT.verticesStart, 2 * (mT.verticesCount + mT.verticesStart))), this.uvs6 && (WT.uvs6 = this.uvs6.slice(2 * mT.verticesStart, 2 * (mT.verticesCount + mT.verticesStart))), this.matricesIndices && (WT.matricesIndices = this.matricesIndices.slice(4 * mT.verticesStart, 4 * (mT.verticesCount + mT.verticesStart))), this.matricesIndicesExtra && (WT.matricesIndicesExtra = this.matricesIndicesExtra.slice(4 * mT.verticesStart, 4 * (mT.verticesCount + mT.verticesStart))), this.matricesWeights && (WT.matricesWeights = this.matricesWeights.slice(4 * mT.verticesStart, 4 * (mT.verticesCount + mT.verticesStart))), this.matricesWeightsExtra && (WT.matricesWeightsExtra = this.matricesWeightsExtra.slice(4 * mT.verticesStart, 4 * (mT.verticesCount + mT.verticesStart))), this.indices) {
              WT.indices = [];
              for (let TT = mT.indexStart; TT < mT.indexStart + mT.indexCount; TT++) WT.indices.push(this.indices[TT] - mT.verticesStart)
            }
            const zT = new pT;
            zT.indexStart = 0, zT.indexCount = WT.indices ? WT.indices.length : 0, zT.materialIndex = mT.materialIndex, zT.verticesStart = 0, zT.verticesCount = (WT.positions ? WT.positions.length : 0) / 3, WT.materialInfos = [zT], UT.push(WT)
          }
          return UT
        }
        merge(TT) {
          let UT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            mT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            WT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            zT = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
          const MT = Array.isArray(TT) ? TT.map((TT => ({
            vertexData: TT
          }))) : [{
            vertexData: TT
          }];
          return (0, jT.i)(this._mergeCoroutine(void 0, MT, UT, !1, mT, WT, zT))
        }* _mergeCoroutine(UT, mT) {
          let WT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            zT = arguments.length > 3 ? arguments[3] : void 0,
            gT = arguments.length > 4 ? arguments[4] : void 0,
            nT = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
            HT = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
          this._validate();
          let kT = mT.map((TT => TT.vertexData)),
            jT = this;
          if (HT)
            for (const TT of kT) TT && (TT._validate(), !this.normals && TT.normals && (this.normals = new Float32Array(this.positions.length)), !this.tangents && TT.tangents && (this.tangents = new Float32Array(this.positions.length / 3 * 4)), !this.uvs && TT.uvs && (this.uvs = new Float32Array(this.positions.length / 3 * 2)), !this.uvs2 && TT.uvs2 && (this.uvs2 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs3 && TT.uvs3 && (this.uvs3 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs4 && TT.uvs4 && (this.uvs4 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs5 && TT.uvs5 && (this.uvs5 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs6 && TT.uvs6 && (this.uvs6 = new Float32Array(this.positions.length / 3 * 2)), !this.colors && TT.colors && (this.colors = new Float32Array(this.positions.length / 3 * 4), this.colors.fill(1)), !this.matricesIndices && TT.matricesIndices && (this.matricesIndices = new Float32Array(this.positions.length / 3 * 4)), !this.matricesWeights && TT.matricesWeights && (this.matricesWeights = new Float32Array(this.positions.length / 3 * 4)), !this.matricesIndicesExtra && TT.matricesIndicesExtra && (this.matricesIndicesExtra = new Float32Array(this.positions.length / 3 * 4)), !this.matricesWeightsExtra && TT.matricesWeightsExtra && (this.matricesWeightsExtra = new Float32Array(this.positions.length / 3 * 4)));
          for (const TT of kT)
            if (TT)
              if (HT) this.normals && !TT.normals && (TT.normals = new Float32Array(TT.positions.length)), this.tangents && !TT.tangents && (TT.tangents = new Float32Array(TT.positions.length / 3 * 4)), this.uvs && !TT.uvs && (TT.uvs = new Float32Array(TT.positions.length / 3 * 2)), this.uvs2 && !TT.uvs2 && (TT.uvs2 = new Float32Array(TT.positions.length / 3 * 2)), this.uvs3 && !TT.uvs3 && (TT.uvs3 = new Float32Array(TT.positions.length / 3 * 2)), this.uvs4 && !TT.uvs4 && (TT.uvs4 = new Float32Array(TT.positions.length / 3 * 2)), this.uvs5 && !TT.uvs5 && (TT.uvs5 = new Float32Array(TT.positions.length / 3 * 2)), this.uvs6 && !TT.uvs6 && (TT.uvs6 = new Float32Array(TT.positions.length / 3 * 2)), this.colors && !TT.colors && (TT.colors = new Float32Array(TT.positions.length / 3 * 4), TT.colors.fill(1)), this.matricesIndices && !TT.matricesIndices && (TT.matricesIndices = new Float32Array(TT.positions.length / 3 * 4)), this.matricesWeights && !TT.matricesWeights && (TT.matricesWeights = new Float32Array(TT.positions.length / 3 * 4)), this.matricesIndicesExtra && !TT.matricesIndicesExtra && (TT.matricesIndicesExtra = new Float32Array(TT.positions.length / 3 * 4)), this.matricesWeightsExtra && !TT.matricesWeightsExtra && (TT.matricesWeightsExtra = new Float32Array(TT.positions.length / 3 * 4));
              else if (TT._validate(), !this.normals !== !TT.normals || !this.tangents !== !TT.tangents || !this.uvs !== !TT.uvs || !this.uvs2 !== !TT.uvs2 || !this.uvs3 !== !TT.uvs3 || !this.uvs4 !== !TT.uvs4 || !this.uvs5 !== !TT.uvs5 || !this.uvs6 !== !TT.uvs6 || !this.colors !== !TT.colors || !this.matricesIndices !== !TT.matricesIndices || !this.matricesWeights !== !TT.matricesWeights || !this.matricesIndicesExtra !== !TT.matricesIndicesExtra || !this.matricesWeightsExtra !== !TT.matricesWeightsExtra) throw new Error("Cannot merge vertex data that do not have the same set of attributes");
          if (nT) {
            let TT, WT = 0,
              zT = 0;
            const MT = [];
            let gT = null;
            const nT = [];
            for (const mT of this.splitBasedOnMaterialID()) nT.push({
              vertexData: mT,
              transform: UT
            });
            for (const UT of mT)
              if (UT.vertexData)
                for (const TT of UT.vertexData.splitBasedOnMaterialID()) nT.push({
                  vertexData: TT,
                  transform: UT.transform
                });
            nT.sort(((TT, UT) => {
              const mT = TT.vertexData.materialInfos ? TT.vertexData.materialInfos[0].materialIndex : 0,
                WT = UT.vertexData.materialInfos ? UT.vertexData.materialInfos[0].materialIndex : 0;
              return mT > WT ? 1 : mT === WT ? 0 : -1
            }));
            for (const UT of nT) {
              const mT = UT.vertexData;
              if (TT = mT.materialInfos ? mT.materialInfos[0].materialIndex : 0, gT && gT.materialIndex === TT) gT.indexCount += mT.indices.length, gT.verticesCount += mT.positions.length / 3;
              else {
                const UT = new pT;
                UT.materialIndex = TT, UT.indexStart = WT, UT.indexCount = mT.indices.length, UT.verticesStart = zT, UT.verticesCount = mT.positions.length / 3, MT.push(UT), gT = UT
              }
              WT += mT.indices.length, zT += mT.positions.length / 3
            }
            const HT = nT.splice(0, 1)[0];
            jT = HT.vertexData, UT = HT.transform, kT = nT.map((TT => TT.vertexData)), mT = nT, this.materialInfos = MT
          }
          const lT = kT.reduce(((TT, UT) => TT + (UT.indices?.length ?? 0)), jT.indices?.length ?? 0);
          let LT = gT || kT.some((TT => TT.indices === jT.indices)) ? jT.indices?.slice() : jT.indices;
          if (lT > 0) {
            let MT = LT?.length ?? 0;
            if (LT || (LT = new Array(lT)), LT.length !== lT) {
              if (Array.isArray(LT)) LT.length = lT;
              else {
                const TT = WT || LT instanceof Uint32Array ? new Uint32Array(lT) : new Uint16Array(lT);
                TT.set(LT), LT = TT
              }
              UT && UT.determinant() < 0 && TT._FlipFaces(LT, 0, MT)
            }
            let gT = jT.positions ? jT.positions.length / 3 : 0;
            for (const {
                vertexData: UT,
                transform: WT
              }
              of mT)
              if (UT.indices) {
                for (let TT = 0; TT < UT.indices.length; TT++) LT[MT + TT] = UT.indices[TT] + gT;
                WT && WT.determinant() < 0 && TT._FlipFaces(LT, MT, UT.indices.length), gT += UT.positions.length / 3, MT += UT.indices.length, zT && (yield)
              }
          }
          return this.indices = LT, this.positions = TT._MergeElement(MT.i.PositionKind, jT.positions, UT, mT.map((TT => [TT.vertexData.positions, TT.transform]))), zT && (yield), jT.normals && (this.normals = TT._MergeElement(MT.i.NormalKind, jT.normals, UT, mT.map((TT => [TT.vertexData.normals, TT.transform]))), zT && (yield)), jT.tangents && (this.tangents = TT._MergeElement(MT.i.TangentKind, jT.tangents, UT, mT.map((TT => [TT.vertexData.tangents, TT.transform]))), zT && (yield)), jT.uvs && (this.uvs = TT._MergeElement(MT.i.UVKind, jT.uvs, UT, mT.map((TT => [TT.vertexData.uvs, TT.transform]))), zT && (yield)), jT.uvs2 && (this.uvs2 = TT._MergeElement(MT.i.UV2Kind, jT.uvs2, UT, mT.map((TT => [TT.vertexData.uvs2, TT.transform]))), zT && (yield)), jT.uvs3 && (this.uvs3 = TT._MergeElement(MT.i.UV3Kind, jT.uvs3, UT, mT.map((TT => [TT.vertexData.uvs3, TT.transform]))), zT && (yield)), jT.uvs4 && (this.uvs4 = TT._MergeElement(MT.i.UV4Kind, jT.uvs4, UT, mT.map((TT => [TT.vertexData.uvs4, TT.transform]))), zT && (yield)), jT.uvs5 && (this.uvs5 = TT._MergeElement(MT.i.UV5Kind, jT.uvs5, UT, mT.map((TT => [TT.vertexData.uvs5, TT.transform]))), zT && (yield)), jT.uvs6 && (this.uvs6 = TT._MergeElement(MT.i.UV6Kind, jT.uvs6, UT, mT.map((TT => [TT.vertexData.uvs6, TT.transform]))), zT && (yield)), jT.colors && (this.colors = TT._MergeElement(MT.i.ColorKind, jT.colors, UT, mT.map((TT => [TT.vertexData.colors, TT.transform]))), (void 0 !== jT.hasVertexAlpha || mT.some((TT => void 0 !== TT.vertexData.hasVertexAlpha))) && (this.hasVertexAlpha = jT.hasVertexAlpha || mT.some((TT => TT.vertexData.hasVertexAlpha))), zT && (yield)), jT.matricesIndices && (this.matricesIndices = TT._MergeElement(MT.i.MatricesIndicesKind, jT.matricesIndices, UT, mT.map((TT => [TT.vertexData.matricesIndices, TT.transform]))), zT && (yield)), jT.matricesWeights && (this.matricesWeights = TT._MergeElement(MT.i.MatricesWeightsKind, jT.matricesWeights, UT, mT.map((TT => [TT.vertexData.matricesWeights, TT.transform]))), zT && (yield)), jT.matricesIndicesExtra && (this.matricesIndicesExtra = TT._MergeElement(MT.i.MatricesIndicesExtraKind, jT.matricesIndicesExtra, UT, mT.map((TT => [TT.vertexData.matricesIndicesExtra, TT.transform]))), zT && (yield)), jT.matricesWeightsExtra && (this.matricesWeightsExtra = TT._MergeElement(MT.i.MatricesWeightsExtraKind, jT.matricesWeightsExtra, UT, mT.map((TT => [TT.vertexData.matricesWeightsExtra, TT.transform])))), this
        }
        static _MergeElement(UT, mT, WT, zT) {
          const gT = zT.filter((TT => null !== TT[0] && void 0 !== TT[0]));
          if (!mT && 0 == gT.length) return mT;
          if (!mT) return this._MergeElement(UT, gT[0][0], gT[0][1], gT.slice(1));
          const nT = gT.reduce(((TT, UT) => TT + UT[0].length), mT.length),
            HT = UT === MT.i.PositionKind ? TT._TransformVector3Coordinates : UT === MT.i.NormalKind ? TT._TransformVector3Normals : UT === MT.i.TangentKind ? TT._TransformVector4Normals : () => {};
          if (mT instanceof Float32Array) {
            const TT = new Float32Array(nT);
            TT.set(mT), WT && HT(TT, WT, 0, mT.length);
            let UT = mT.length;
            for (const [mT, WT] of gT) TT.set(mT, UT), WT && HT(TT, WT, UT, mT.length), UT += mT.length;
            return TT
          } {
            const TT = new Array(nT);
            for (let WT = 0; WT < mT.length; WT++) TT[WT] = mT[WT];
            WT && HT(TT, WT, 0, mT.length);
            let UT = mT.length;
            for (const [mT, WT] of gT) {
              for (let WT = 0; WT < mT.length; WT++) TT[UT + WT] = mT[WT];
              WT && HT(TT, WT, UT, mT.length), UT += mT.length
            }
            return TT
          }
        }
        _validate() {
          if (!this.positions) throw new lT.j("Positions are required", lT.f.MeshInvalidPositionsError);
          const TT = (TT, UT) => {
              const mT = (0, MT.e)(TT);
              if (UT.length % mT !== 0) throw new Error("The " + TT + "s array count must be a multiple of " + mT);
              return UT.length / mT
            },
            UT = TT(MT.i.PositionKind, this.positions),
            mT = (mT, WT) => {
              const zT = TT(mT, WT);
              if (zT !== UT) throw new Error("The " + mT + "s element count (" + zT + ") does not match the positions count (" + UT + ")")
            };
          this.normals && mT(MT.i.NormalKind, this.normals), this.tangents && mT(MT.i.TangentKind, this.tangents), this.uvs && mT(MT.i.UVKind, this.uvs), this.uvs2 && mT(MT.i.UV2Kind, this.uvs2), this.uvs3 && mT(MT.i.UV3Kind, this.uvs3), this.uvs4 && mT(MT.i.UV4Kind, this.uvs4), this.uvs5 && mT(MT.i.UV5Kind, this.uvs5), this.uvs6 && mT(MT.i.UV6Kind, this.uvs6), this.colors && mT(MT.i.ColorKind, this.colors), this.matricesIndices && mT(MT.i.MatricesIndicesKind, this.matricesIndices), this.matricesWeights && mT(MT.i.MatricesWeightsKind, this.matricesWeights), this.matricesIndicesExtra && mT(MT.i.MatricesIndicesExtraKind, this.matricesIndicesExtra), this.matricesWeightsExtra && mT(MT.i.MatricesWeightsExtraKind, this.matricesWeightsExtra)
        }
        clone() {
          const UT = this.serialize();
          return TT.Parse(UT)
        }
        serialize() {
          const TT = {};
          if (this.positions && (TT.positions = Array.from(this.positions)), this.normals && (TT.normals = Array.from(this.normals)), this.tangents && (TT.tangents = Array.from(this.tangents)), this.uvs && (TT.uvs = Array.from(this.uvs)), this.uvs2 && (TT.uvs2 = Array.from(this.uvs2)), this.uvs3 && (TT.uvs3 = Array.from(this.uvs3)), this.uvs4 && (TT.uvs4 = Array.from(this.uvs4)), this.uvs5 && (TT.uvs5 = Array.from(this.uvs5)), this.uvs6 && (TT.uvs6 = Array.from(this.uvs6)), this.colors && (TT.colors = Array.from(this.colors), TT.hasVertexAlpha = this.hasVertexAlpha), this.matricesIndices && (TT.matricesIndices = Array.from(this.matricesIndices), TT.matricesIndicesExpanded = !0), this.matricesWeights && (TT.matricesWeights = Array.from(this.matricesWeights)), this.matricesIndicesExtra && (TT.matricesIndicesExtra = Array.from(this.matricesIndicesExtra), TT.matricesIndicesExtraExpanded = !0), this.matricesWeightsExtra && (TT.matricesWeightsExtra = Array.from(this.matricesWeightsExtra)), TT.indices = this.indices ? Array.from(this.indices) : [], this.materialInfos) {
            TT.materialInfos = [];
            for (const UT of this.materialInfos) {
              const mT = {
                indexStart: UT.indexStart,
                indexCount: UT.indexCount,
                materialIndex: UT.materialIndex,
                verticesStart: UT.verticesStart,
                verticesCount: UT.verticesCount
              };
              TT.materialInfos.push(mT)
            }
          }
          return TT
        }
        static ExtractFromMesh(UT, mT, WT) {
          return TT._ExtractFrom(UT, mT, WT)
        }
        static ExtractFromGeometry(UT, mT, WT) {
          return TT._ExtractFrom(UT, mT, WT)
        }
        static _ExtractFrom(UT, mT, WT) {
          const zT = new TT;
          if (UT.isVerticesDataPresent(MT.i.PositionKind) && (zT.positions = UT.getVerticesData(MT.i.PositionKind, mT, WT)), UT.isVerticesDataPresent(MT.i.NormalKind) && (zT.normals = UT.getVerticesData(MT.i.NormalKind, mT, WT)), UT.isVerticesDataPresent(MT.i.TangentKind) && (zT.tangents = UT.getVerticesData(MT.i.TangentKind, mT, WT)), UT.isVerticesDataPresent(MT.i.UVKind) && (zT.uvs = UT.getVerticesData(MT.i.UVKind, mT, WT)), UT.isVerticesDataPresent(MT.i.UV2Kind) && (zT.uvs2 = UT.getVerticesData(MT.i.UV2Kind, mT, WT)), UT.isVerticesDataPresent(MT.i.UV3Kind) && (zT.uvs3 = UT.getVerticesData(MT.i.UV3Kind, mT, WT)), UT.isVerticesDataPresent(MT.i.UV4Kind) && (zT.uvs4 = UT.getVerticesData(MT.i.UV4Kind, mT, WT)), UT.isVerticesDataPresent(MT.i.UV5Kind) && (zT.uvs5 = UT.getVerticesData(MT.i.UV5Kind, mT, WT)), UT.isVerticesDataPresent(MT.i.UV6Kind) && (zT.uvs6 = UT.getVerticesData(MT.i.UV6Kind, mT, WT)), UT.isVerticesDataPresent(MT.i.ColorKind)) {
            const TT = UT.geometry || UT,
              gT = TT.getVertexBuffer(MT.i.ColorKind),
              nT = TT.getVerticesData(MT.i.ColorKind, mT, WT);
            if (3 === gT.getSize()) {
              const TT = new Float32Array(4 * nT.length / 3);
              for (let UT = 0, mT = 0; UT < nT.length; UT += 3, mT += 4) TT[mT] = nT[UT], TT[mT + 1] = nT[UT + 1], TT[mT + 2] = nT[UT + 2], TT[mT + 3] = 1;
              zT.colors = TT
            } else {
              if (4 !== gT.getSize()) throw new Error(`Unexpected number of color components: ${gT.getSize()}`);
              zT.colors = nT
            }
          }
          return UT.isVerticesDataPresent(MT.i.MatricesIndicesKind) && (zT.matricesIndices = UT.getVerticesData(MT.i.MatricesIndicesKind, mT, WT)), UT.isVerticesDataPresent(MT.i.MatricesWeightsKind) && (zT.matricesWeights = UT.getVerticesData(MT.i.MatricesWeightsKind, mT, WT)), UT.isVerticesDataPresent(MT.i.MatricesIndicesExtraKind) && (zT.matricesIndicesExtra = UT.getVerticesData(MT.i.MatricesIndicesExtraKind, mT, WT)), UT.isVerticesDataPresent(MT.i.MatricesWeightsExtraKind) && (zT.matricesWeightsExtra = UT.getVerticesData(MT.i.MatricesWeightsExtraKind, mT, WT)), zT.indices = UT.vWT(mT, WT), zT
        }
        static CreateRibbon(TT) {
          throw (0, gT.k)("ribbonBuilder")
        }
        static CreateBox(TT) {
          throw (0, gT.k)("boxBuilder")
        }
        static CreateTiledBox(TT) {
          throw (0, gT.k)("tiledBoxBuilder")
        }
        static CreateTiledPlane(TT) {
          throw (0, gT.k)("tiledPlaneBuilder")
        }
        static CreateSphere(TT) {
          throw (0, gT.k)("sphereBuilder")
        }
        static CreateCylinder(TT) {
          throw (0, gT.k)("cylinderBuilder")
        }
        static CreateTorus(TT) {
          throw (0, gT.k)("torusBuilder")
        }
        static CreateLineSystem(TT) {
          throw (0, gT.k)("linesBuilder")
        }
        static CreateDashedLines(TT) {
          throw (0, gT.k)("linesBuilder")
        }
        static CreateGround(TT) {
          throw (0, gT.k)("groundBuilder")
        }
        static CreateTiledGround(TT) {
          throw (0, gT.k)("groundBuilder")
        }
        static CreateGroundFromHeightMap(TT) {
          throw (0, gT.k)("groundBuilder")
        }
        static CreatePlane(TT) {
          throw (0, gT.k)("planeBuilder")
        }
        static CreateDisc(TT) {
          throw (0, gT.k)("discBuilder")
        }
        static CreatePolygon(TT, UT, mT, WT, zT, MT, nT) {
          throw (0, gT.k)("polygonBuilder")
        }
        static CreateIcoSphere(TT) {
          throw (0, gT.k)("icoSphereBuilder")
        }
        static CreatePolyhedron(TT) {
          throw (0, gT.k)("polyhedronBuilder")
        }
        static CreateCapsule() {
          arguments.length > 0 && void 0 !== arguments[0] || zT.p.Up();
          throw (0, gT.k)("capsuleBuilder")
        }
        static CreateTorusKnot(TT) {
          throw (0, gT.k)("torusKnotBuilder")
        }
        static ComputeNormals(TT, UT, mT, WT) {
          let MT, gT, nT, HT, kT, jT, lT, LT, pT, BT, ZT, cT, vT, fT, qT, iT, bT, OT, eT, YT, JT = !1,
            xT = !1,
            dT = !1,
            wT = !1,
            tT = 1,
            aT = 0,
            yT = null;
          WT && (JT = !!WT.facetNormals, xT = !!WT.facetPositions, dT = !!WT.facetPartitioning, tT = !0 === WT.useRightHandedSystem ? -1 : 1, aT = WT.ratio || 0, wT = !!WT.depthSort, yT = WT.distanceTo, wT && void 0 === yT && (yT = zT.p.Zero()));
          let XT = 0,
            IT = 0,
            QT = 0,
            sT = 0;
          for (dT && WT && WT.bbSize && (XT = WT.subDiv.X * aT / WT.bbSize.x, IT = WT.subDiv.Y * aT / WT.bbSize.y, QT = WT.subDiv.Z * aT / WT.bbSize.z, sT = WT.subDiv.max * WT.subDiv.max, WT.facetPartitioning.length = 0), MT = 0; MT < TT.length; MT++) mT[MT] = 0;
          const FT = UT.length / 3 | 0;
          for (MT = 0; MT < FT; MT++) {
            if (cT = 3 * UT[3 * MT], vT = cT + 1, fT = cT + 2, qT = 3 * UT[3 * MT + 1], iT = qT + 1, bT = qT + 2, OT = 3 * UT[3 * MT + 2], eT = OT + 1, YT = OT + 2, gT = TT[cT] - TT[qT], nT = TT[vT] - TT[iT], HT = TT[fT] - TT[bT], kT = TT[OT] - TT[qT], jT = TT[eT] - TT[iT], lT = TT[YT] - TT[bT], LT = tT * (nT * lT - HT * jT), pT = tT * (HT * kT - gT * lT), BT = tT * (gT * jT - nT * kT), ZT = Math.sqrt(LT * LT + pT * pT + BT * BT), ZT = 0 === ZT ? 1 : ZT, LT /= ZT, pT /= ZT, BT /= ZT, JT && WT && (WT.facetNormals[MT].x = LT, WT.facetNormals[MT].y = pT, WT.facetNormals[MT].z = BT), xT && WT && (WT.facetPositions[MT].x = (TT[cT] + TT[qT] + TT[OT]) / 3, WT.facetPositions[MT].y = (TT[vT] + TT[iT] + TT[eT]) / 3, WT.facetPositions[MT].z = (TT[fT] + TT[bT] + TT[YT]) / 3), dT && WT) {
              const UT = Math.floor((WT.facetPositions[MT].x - WT.bInfo.minimum.x * aT) * XT),
                mT = Math.floor((WT.facetPositions[MT].y - WT.bInfo.minimum.y * aT) * IT),
                zT = Math.floor((WT.facetPositions[MT].z - WT.bInfo.minimum.z * aT) * QT),
                gT = Math.floor((TT[cT] - WT.bInfo.minimum.x * aT) * XT),
                nT = Math.floor((TT[vT] - WT.bInfo.minimum.y * aT) * IT),
                HT = Math.floor((TT[fT] - WT.bInfo.minimum.z * aT) * QT),
                kT = Math.floor((TT[qT] - WT.bInfo.minimum.x * aT) * XT),
                jT = Math.floor((TT[iT] - WT.bInfo.minimum.y * aT) * IT),
                lT = Math.floor((TT[bT] - WT.bInfo.minimum.z * aT) * QT),
                LT = Math.floor((TT[OT] - WT.bInfo.minimum.x * aT) * XT),
                pT = Math.floor((TT[eT] - WT.bInfo.minimum.y * aT) * IT),
                BT = Math.floor((TT[YT] - WT.bInfo.minimum.z * aT) * QT),
                ZT = gT + WT.subDiv.max * nT + sT * HT,
                JT = kT + WT.subDiv.max * jT + sT * lT,
                xT = LT + WT.subDiv.max * pT + sT * BT,
                dT = UT + WT.subDiv.max * mT + sT * zT;
              WT.facetPartitioning[dT] = WT.facetPartitioning[dT] ? WT.facetPartitioning[dT] : [], WT.facetPartitioning[ZT] = WT.facetPartitioning[ZT] ? WT.facetPartitioning[ZT] : [], WT.facetPartitioning[JT] = WT.facetPartitioning[JT] ? WT.facetPartitioning[JT] : [], WT.facetPartitioning[xT] = WT.facetPartitioning[xT] ? WT.facetPartitioning[xT] : [], WT.facetPartitioning[ZT].push(MT), JT != ZT && WT.facetPartitioning[JT].push(MT), xT != JT && xT != ZT && WT.facetPartitioning[xT].push(MT), dT != ZT && dT != JT && dT != xT && WT.facetPartitioning[dT].push(MT)
            }
            if (wT && WT && WT.facetPositions) {
              const TT = WT.depthSortedFacets[MT];
              TT.ind = 3 * MT, TT.sqDistance = zT.p.DistanceSquared(WT.facetPositions[MT], yT)
            }
            mT[cT] += LT, mT[vT] += pT, mT[fT] += BT, mT[qT] += LT, mT[iT] += pT, mT[bT] += BT, mT[OT] += LT, mT[eT] += pT, mT[YT] += BT
          }
          for (MT = 0; MT < mT.length / 3; MT++) LT = mT[3 * MT], pT = mT[3 * MT + 1], BT = mT[3 * MT + 2], ZT = Math.sqrt(LT * LT + pT * pT + BT * BT), ZT = 0 === ZT ? 1 : ZT, LT /= ZT, pT /= ZT, BT /= ZT, mT[3 * MT] = LT, mT[3 * MT + 1] = pT, mT[3 * MT + 2] = BT
        }
        static _ComputeSides(UT, mT, WT, MT, gT, nT, HT) {
          const kT = WT.length,
            jT = MT.length;
          let lT, LT;
          switch (UT = UT || TT.DEFAULTSIDE) {
            case TT.FRONTSIDE:
              break;
            case TT.BACKSIDE:
              for (lT = 0; lT < kT; lT += 3) {
                const TT = WT[lT];
                WT[lT] = WT[lT + 2], WT[lT + 2] = TT
              }
              for (LT = 0; LT < jT; LT++) MT[LT] = -MT[LT];
              break;
            case TT.DOUBLESIDE: {
              const TT = mT.length,
                UT = TT / 3;
              for (let WT = 0; WT < TT; WT++) mT[TT + WT] = mT[WT];
              for (lT = 0; lT < kT; lT += 3) WT[lT + kT] = WT[lT + 2] + UT, WT[lT + 1 + kT] = WT[lT + 1] + UT, WT[lT + 2 + kT] = WT[lT] + UT;
              for (LT = 0; LT < jT; LT++) MT[jT + LT] = -MT[LT];
              const pT = gT.length;
              let BT;
              for (BT = 0; BT < pT; BT++) gT[BT + pT] = gT[BT];
              for (nT = nT || new zT.t(0, 0, 1, 1), HT = HT || new zT.t(0, 0, 1, 1), BT = 0, lT = 0; lT < pT / 2; lT++) gT[BT] = nT.x + (nT.z - nT.x) * gT[BT], gT[BT + 1] = nT.y + (nT.w - nT.y) * gT[BT + 1], gT[BT + pT] = HT.x + (HT.z - HT.x) * gT[BT + pT], gT[BT + pT + 1] = HT.y + (HT.w - HT.y) * gT[BT + pT + 1], BT += 2;
              break
            }
          }
        }
        static Parse(UT) {
          const mT = new TT,
            WT = UT.positions;
          WT && mT.set(WT, MT.i.PositionKind);
          const zT = UT.normals;
          zT && mT.set(zT, MT.i.NormalKind);
          const gT = UT.tangents;
          gT && mT.set(gT, MT.i.TangentKind);
          const HT = UT.uvs;
          HT && mT.set(HT, MT.i.UVKind);
          const kT = UT.uvs2;
          kT && mT.set(kT, MT.i.UV2Kind);
          const jT = UT.uvs3;
          jT && mT.set(jT, MT.i.UV3Kind);
          const lT = UT.uvs4;
          lT && mT.set(lT, MT.i.UV4Kind);
          const LT = UT.uvs5;
          LT && mT.set(LT, MT.i.UV5Kind);
          const BT = UT.uvs6;
          BT && mT.set(BT, MT.i.UV6Kind);
          const ZT = UT.colors;
          ZT && (mT.set(nT.g.CheckColors4(ZT, WT.length / 3), MT.i.ColorKind), void 0 !== UT.hasVertexAlpha && (mT.hasVertexAlpha = UT.hasVertexAlpha));
          const cT = UT.matricesIndices;
          cT && mT.set(cT, MT.i.MatricesIndicesKind);
          const vT = UT.matricesWeights;
          vT && mT.set(vT, MT.i.MatricesWeightsKind);
          const fT = UT.indices;
          fT && (mT.indices = fT);
          const qT = UT.materialInfos;
          if (qT) {
            mT.materialInfos = [];
            for (const TT of qT) {
              const UT = new pT;
              UT.indexCount = TT.indexCount, UT.indexStart = TT.indexStart, UT.verticesCount = TT.verticesCount, UT.verticesStart = TT.verticesStart, UT.materialIndex = TT.materialIndex, mT.materialInfos.push(UT)
            }
          }
          return mT
        }
        static ImportVertexData(UT, mT) {
          const WT = TT.Parse(UT);
          mT.setAllVerticesData(WT, UT.updatable)
        }
      }, (() => {
        const zT = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        UT = [kT.i.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], mT = [kT.i.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], BT = [kT.i.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], ZT = [kT.i.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], (0, WT.h)(TT, null, UT, {
          kind: "method",
          name: "_TransformVector3Coordinates",
          static: !0,
          private: !1,
          access: {
            has: TT => "_TransformVector3Coordinates" in TT,
            get: TT => TT._TransformVector3Coordinates
          },
          metadata: zT
        }, null, cT), (0, WT.h)(TT, null, mT, {
          kind: "method",
          name: "_TransformVector3Normals",
          static: !0,
          private: !1,
          access: {
            has: TT => "_TransformVector3Normals" in TT,
            get: TT => TT._TransformVector3Normals
          },
          metadata: zT
        }, null, cT), (0, WT.h)(TT, null, BT, {
          kind: "method",
          name: "_TransformVector4Normals",
          static: !0,
          private: !1,
          access: {
            has: TT => "_TransformVector4Normals" in TT,
            get: TT => TT._TransformVector4Normals
          },
          metadata: zT
        }, null, cT), (0, WT.h)(TT, null, ZT, {
          kind: "method",
          name: "_FlipFaces",
          static: !0,
          private: !1,
          access: {
            has: TT => "_FlipFaces" in TT,
            get: TT => TT._FlipFaces
          },
          metadata: zT
        }, null, cT), zT && Object.defineProperty(TT, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: zT
        })
      })(), TT.FRONTSIDE = ((0, WT.k)(TT, cT), 0), TT.BACKSIDE = 1, TT.DOUBLESIDE = 2, TT.DEFAULTSIDE = 0, TT._UniqueIdGenerator = 0, TT
    })()
  },
  40611: (TT, UT, mT) => {
    var WT = mT(37188),
      zT = mT(38800),
      MT = mT(40432),
      gT = mT(40535),
      nT = mT(40257);
    const HT = "bakedVertexAnimationSettingsInstanced";

    function kT(TT) {
      const UT = TT.bakedVertexAnimationManager?.texture?.getInternalTexture()?._bufferView;
      return UT instanceof Float32Array || UT instanceof Uint16Array
    }

    function jT(TT, UT, mT, WT) {
      mT.B3(Number.POSITIVE_INFINITY), WT.B3(Number.NEGATIVE_INFINITY);
      for (let zT = 0; zT < 3 * UT; zT += 3) {
        const UT = TT[zT],
          MT = TT[zT + 1],
          gT = TT[zT + 2];
        UT < mT.x && (mT.x = UT), MT < mT.y && (mT.y = MT), gT < mT.z && (mT.z = gT), UT > WT.x && (WT.x = UT), MT > WT.y && (WT.y = MT), gT > WT.z && (WT.z = gT)
      }
    }

    function lT(TT, UT, mT) {
      mT && (TT.x -= TT.x * mT.x + mT.y, TT.y -= TT.y * mT.x + mT.y, TT.z -= TT.z * mT.x + mT.y, UT.x += UT.x * mT.x + mT.y, UT.y += UT.y * mT.x + mT.y, UT.z += UT.z * mT.x + mT.y)
    }

    function LT(TT, UT, mT, zT, MT) {
      const gT = WT.l.JB[7],
        nT = WT.l.JB[8];
      for (let HT = 0; HT < 2; ++HT)
        for (let kT = 0; kT < 2; ++kT)
          for (let jT = 0; jT < 2; ++jT) gT.set(HT ? UT.x : TT.x, kT ? UT.y : TT.y, jT ? UT.z : TT.z), WT.p.TransformCoordinatesToRef(gT, mT, nT), zT.minimizeInPlace(nT), MT.maximizeInPlace(nT)
    }

    function pT(TT, UT, mT, zT, MT) {
      const gT = WT.l.JB[7];
      for (let nT = 0; nT < 3 * UT; nT += 3) WT.p.TransformCoordinatesFromFloatsToRef(TT[nT], TT[nT + 1], TT[nT + 2], mT, gT), zT.minimizeInPlace(gT), MT.maximizeInPlace(gT)
    }
    let BT = !1;
    BT || (BT = !0, gT.d.prototype.thinInstanceAdd = function(TT) {
      let UT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (!this.KF().eB().getCaps().instancedArrays) return zT.b.Error("Thin Instances are not supported on this device as Instanced Array extension not supported"), -1;
      this._thinInstanceUpdateBufferSize("matrix", Array.isArray(TT) ? TT.length : 1);
      const mT = this._thinInstanceDataStorage.instancesCount;
      if (Array.isArray(TT))
        for (let WT = 0; WT < TT.length; ++WT) this.thinInstanceSetMatrixAt(this._thinInstanceDataStorage.instancesCount++, TT[WT], WT === TT.length - 1 && UT);
      else this.thinInstanceSetMatrixAt(this._thinInstanceDataStorage.instancesCount++, TT, UT);
      return mT
    }, gT.d.prototype.thinInstanceAddSelf = function() {
      let TT = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      return this.thinInstanceAdd(WT.e.IdentityReadOnly, TT)
    }, gT.d.prototype.thinInstanceRegisterAttribute = function(TT, UT) {
      TT === nT.i.ColorKind && (TT = nT.i.ColorInstanceKind), this.removeVerticesData(TT), this._thinInstanceInitializeUserStorage(), this._userThinInstanceBuffersStorage.strides[TT] = UT, this._userThinInstanceBuffersStorage.sizes[TT] = UT * Math.max(32, this._thinInstanceDataStorage.instancesCount), this._userThinInstanceBuffersStorage.data[TT] = new Float32Array(this._userThinInstanceBuffersStorage.sizes[TT]), this._userThinInstanceBuffersStorage.vertexBuffers[TT] = new nT.i(this.eB(), this._userThinInstanceBuffersStorage.data[TT], TT, !0, !1, UT, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[TT])
    }, gT.d.prototype.thinInstanceSetMatrixAt = function(TT, UT) {
      let mT = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      if (!this._thinInstanceDataStorage.matrixData || TT >= this._thinInstanceDataStorage.instancesCount) return !1;
      const WT = this._thinInstanceDataStorage.matrixData;
      return UT.copyToArray(WT, 16 * TT), this._thinInstanceDataStorage.worldMatrices && (this._thinInstanceDataStorage.worldMatrices[TT] = UT), mT && (this.Q8("matrix"), this.dB || this.thinInstanceRefreshBoundingInfo(!1)), !0
    }, gT.d.prototype.thinInstanceSetAttributeAt = function(TT, UT, mT) {
      let WT = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      return TT === nT.i.ColorKind && (TT = nT.i.ColorInstanceKind), !(!this._userThinInstanceBuffersStorage || !this._userThinInstanceBuffersStorage.data[TT] || UT >= this._thinInstanceDataStorage.instancesCount) && (this._thinInstanceUpdateBufferSize(TT, 0), this._userThinInstanceBuffersStorage.data[TT].set(mT, UT * this._userThinInstanceBuffersStorage.strides[TT]), WT && this.Q8(TT), !0)
    }, Object.defineProperty(gT.d.prototype, "i5", {
      get: function() {
        return this._thinInstanceDataStorage.instancesCount
      },
      set: function(TT) {
        const UT = this._thinInstanceDataStorage.matrixData ?? this.source?._thinInstanceDataStorage.matrixData;
        TT <= (UT ? UT.length / 16 : 0) && (this._thinInstanceDataStorage.instancesCount = TT)
      },
      enumerable: !0,
      configurable: !0
    }), gT.d.prototype._thinInstanceCreateMatrixBuffer = function(TT, UT) {
      let mT = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      const WT = new nT.c(this.eB(), UT, !mT, 16, !1, !0);
      for (let zT = 0; zT < 4; zT++) this.setVerticesBuffer(WT.createVertexBuffer(TT + zT, 4 * zT, 4));
      return WT
    }, gT.d.prototype.f6 = function(TT, UT) {
      let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        WT = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      if (mT = mT || 16, "matrix" === TT) this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = null, this._thinInstanceDataStorage.matrixBufferSize = UT ? UT.length : 32 * mT, this._thinInstanceDataStorage.matrixData = UT, this._thinInstanceDataStorage.worldMatrices = null, null !== UT ? (this._thinInstanceDataStorage.instancesCount = UT.length / mT, this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", UT, WT), this.dB || this.thinInstanceRefreshBoundingInfo(!1)) : (this._thinInstanceDataStorage.instancesCount = 0, this.dB || this.refreshBoundingInfo());
      else if ("previousMatrix" === TT) this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = null, this._thinInstanceDataStorage.previousMatrixData = UT, null !== UT && (this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", UT, WT));
      else if ("splatIndex" === TT && UT) {
        this._thinInstanceInitializeUserStorage(), this._thinInstanceDataStorage.instancesCount = UT.length / mT, this._userThinInstanceBuffersStorage.data[TT] = UT, this._userThinInstanceBuffersStorage.strides[TT] = mT, this._userThinInstanceBuffersStorage.sizes[TT] = UT.length;
        const WT = new nT.c(this.eB(), UT, !0, 16, !1, !0);
        this._thinInstanceDataStorage.matrixBuffer = WT;
        for (let UT = 0; UT < 4; UT++) this.setVerticesBuffer(WT.createVertexBuffer(TT + UT, 4 * UT, 4))
      } else TT === nT.i.ColorKind && (TT = nT.i.ColorInstanceKind), null === UT ? this._userThinInstanceBuffersStorage?.data[TT] && (this.removeVerticesData(TT), delete this._userThinInstanceBuffersStorage.data[TT], delete this._userThinInstanceBuffersStorage.strides[TT], delete this._userThinInstanceBuffersStorage.sizes[TT], delete this._userThinInstanceBuffersStorage.vertexBuffers[TT]) : (this._thinInstanceInitializeUserStorage(), this._userThinInstanceBuffersStorage.data[TT] = UT, this._userThinInstanceBuffersStorage.strides[TT] = mT, this._userThinInstanceBuffersStorage.sizes[TT] = UT.length, this._userThinInstanceBuffersStorage.vertexBuffers[TT] = new nT.i(this.eB(), UT, TT, !WT, !1, mT, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[TT]))
    }, gT.d.prototype.Q8 = function(TT) {
      "matrix" === TT ? (this.thinInstanceAllowAutomaticStaticBufferRecreation && this._thinInstanceDataStorage.matrixBuffer && !this._thinInstanceDataStorage.matrixBuffer.isUpdatable() && this._thinInstanceRecreateBuffer(TT), this._thinInstanceDataStorage.matrixBuffer?.updateDirectly(this._thinInstanceDataStorage.matrixData, 0, this._thinInstanceDataStorage.instancesCount)) : "previousMatrix" === TT ? (this.thinInstanceAllowAutomaticStaticBufferRecreation && this._thinInstanceDataStorage.previousMatrixBuffer && !this._thinInstanceDataStorage.previousMatrixBuffer.isUpdatable() && this._thinInstanceRecreateBuffer(TT), this._thinInstanceDataStorage.previousMatrixBuffer?.updateDirectly(this._thinInstanceDataStorage.previousMatrixData, 0, this._thinInstanceDataStorage.instancesCount)) : "splatIndex" === TT ? this._thinInstanceDataStorage.matrixBuffer?.updateDirectly(this._userThinInstanceBuffersStorage.data[TT], 0, this._thinInstanceDataStorage.instancesCount) : (TT === nT.i.ColorKind && (TT = nT.i.ColorInstanceKind), this._userThinInstanceBuffersStorage?.vertexBuffers[TT] && (this.thinInstanceAllowAutomaticStaticBufferRecreation && !this._userThinInstanceBuffersStorage.vertexBuffers[TT].isUpdatable() && this._thinInstanceRecreateBuffer(TT), this._userThinInstanceBuffersStorage.vertexBuffers[TT].updateDirectly(this._userThinInstanceBuffersStorage.data[TT], 0)))
    }, gT.d.prototype.thinInstancePartialBufferUpdate = function(TT, UT, mT) {
      if ("matrix" === TT) this._thinInstanceDataStorage.matrixBuffer && ("number" === typeof UT ? this._thinInstanceDataStorage.matrixBuffer.updateDirectly(new Float32Array(this._thinInstanceDataStorage.matrixData.buffer, this._thinInstanceDataStorage.matrixData.byteOffset + 16 * mT * Float32Array.BYTES_PER_ELEMENT, 16 * UT), 16 * mT) : this._thinInstanceDataStorage.matrixBuffer.updateDirectly(UT, mT));
      else if (TT === nT.i.ColorKind && (TT = nT.i.ColorInstanceKind), this._userThinInstanceBuffersStorage?.vertexBuffers[TT]) {
        const WT = this._userThinInstanceBuffersStorage.vertexBuffers[TT];
        if ("number" === typeof UT) {
          const WT = new Float32Array(this._userThinInstanceBuffersStorage.data[TT].buffer, this._userThinInstanceBuffersStorage.data[TT].byteOffset + mT * this._userThinInstanceBuffersStorage.strides[TT] * Float32Array.BYTES_PER_ELEMENT, UT * this._userThinInstanceBuffersStorage.strides[TT]);
          this._userThinInstanceBuffersStorage.vertexBuffers[TT].updateDirectly(WT, mT * this._userThinInstanceBuffersStorage.strides[TT])
        } else WT.updateDirectly(UT, mT)
      }
    }, gT.d.prototype.thinInstanceGetWorldMatrices = function() {
      if (!this._thinInstanceDataStorage.matrixData || !this._thinInstanceDataStorage.matrixBuffer) return [];
      const TT = this._thinInstanceDataStorage.matrixData;
      if (!this._thinInstanceDataStorage.worldMatrices) {
        this._thinInstanceDataStorage.worldMatrices = [];
        for (let UT = 0; UT < this._thinInstanceDataStorage.instancesCount; ++UT) this._thinInstanceDataStorage.worldMatrices[UT] = WT.e.FromArray(TT, 16 * UT)
      }
      return this._thinInstanceDataStorage.worldMatrices
    }, gT.d.prototype.thinInstanceRefreshBoundingInfo = function() {
      let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        UT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        mT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        zT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!this._thinInstanceDataStorage.matrixData || !this._thinInstanceDataStorage.matrixBuffer) return;
      const gT = this._thinInstanceDataStorage.boundingVectors;
      if (TT || !this.rawBoundingInfo) {
        if (gT.length = 0, zT && function(TT, UT, mT) {
            const zT = TT._userThinInstanceBuffersStorage,
              gT = zT?.data[HT],
              BT = zT?.strides[HT];
            if (!gT || !BT || BT < 4 || !kT(TT)) return !1;
            const ZT = TT._thinInstanceDataStorage.matrixData;
            if (!ZT) return !1;
            const cT = {},
              vT = WT.l.Vector4[0],
              fT = WT.l.JB[1],
              qT = WT.l.JB[2],
              iT = WT.l.JB[3],
              bT = WT.l.JB[4],
              OT = WT.l.JB[5],
              eT = WT.l.JB[6],
              YT = WT.l.Matrix[2],
              JT = TT.geometry ? TT.geometry.boundingBias : null,
              xT = TT.getTotalVertices();
            fT.B3(Number.POSITIVE_INFINITY), qT.B3(Number.NEGATIVE_INFINITY), iT.B3(Number.POSITIVE_INFINITY), bT.B3(Number.NEGATIVE_INFINITY);
            for (let MT = 0; MT < TT._thinInstanceDataStorage.instancesCount; ++MT) {
              const UT = MT * BT;
              vT.set(gT[UT], gT[UT + 1], gT[UT + 2], gT[UT + 3]);
              const zT = TT._getData({
                applyMorph: mT,
                applyBakedVertexAnimation: !0,
                bakedVertexAnimationSettings: vT,
                updatePositionsArray: !1,
                cache: cT
              }, null, nT.i.PositionKind);
              if (!zT) return !1;
              jT(zT, xT, OT, eT), lT(OT, eT, JT), fT.minimizeInPlace(OT), qT.maximizeInPlace(eT), WT.e.FromArrayToRef(ZT, 16 * MT, YT), JT ? LT(OT, eT, YT, iT, bT) : pT(zT, xT, YT, iT, bT)
            }
            return !(!isFinite(fT.x) || !isFinite(iT.x)) && (TT.rV().reConstruct(iT, bT), TT.rawBoundingInfo = new MT.e(fT, qT), function(TT, UT) {
              TT.length = 0;
              for (let mT = 0; mT < UT.boundingBox.vectors.length; ++mT) TT.push(UT.boundingBox.vectors[mT].clone())
            }(UT, TT.rawBoundingInfo), TT._updateBoundingInfo(), !0)
          }(this, gT, mT)) return;
        zT && this.bakedVertexAnimationManager?.isEnabled && kT(this) ? this.refreshBoundingInfo({
          applySkeleton: UT,
          applyMorph: mT,
          applyBakedVertexAnimation: !0,
          updatePositionsArray: !1
        }) : this.refreshBoundingInfo(UT, mT);
        const TT = this.rV();
        this.rawBoundingInfo = new MT.e(TT.minimum, TT.maximum)
      }
      const BT = this.rV(),
        ZT = this._thinInstanceDataStorage.matrixData;
      if (0 === gT.length)
        for (let WT = 0; WT < BT.boundingBox.vectors.length; ++WT) gT.push(BT.boundingBox.vectors[WT].clone());
      WT.l.JB[0].B3(Number.POSITIVE_INFINITY), WT.l.JB[1].B3(Number.NEGATIVE_INFINITY);
      for (let MT = 0; MT < this._thinInstanceDataStorage.instancesCount; ++MT) {
        WT.e.FromArrayToRef(ZT, 16 * MT, WT.l.Matrix[0]);
        for (let TT = 0; TT < gT.length; ++TT) WT.p.TransformCoordinatesToRef(gT[TT], WT.l.Matrix[0], WT.l.JB[2]), WT.l.JB[0].minimizeInPlace(WT.l.JB[2]), WT.l.JB[1].maximizeInPlace(WT.l.JB[2])
      }
      BT.reConstruct(WT.l.JB[0], WT.l.JB[1]), this._updateBoundingInfo()
    }, gT.d.prototype._thinInstanceRecreateBuffer = function(TT) {
      let UT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      "matrix" === TT ? (this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", this._thinInstanceDataStorage.matrixData, UT)) : "previousMatrix" === TT ? this._scene.needsPreviousWorldMatrices && (this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", this._thinInstanceDataStorage.previousMatrixData ?? this._thinInstanceDataStorage.matrixData, UT)) : (TT === nT.i.ColorKind && (TT = nT.i.ColorInstanceKind), this._userThinInstanceBuffersStorage.vertexBuffers[TT]?.dispose(), this._userThinInstanceBuffersStorage.vertexBuffers[TT] = new nT.i(this.eB(), this._userThinInstanceBuffersStorage.data[TT], TT, !UT, !1, this._userThinInstanceBuffersStorage.strides[TT], !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[TT]))
    }, gT.d.prototype._thinInstanceUpdateBufferSize = function(TT) {
      let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      TT === nT.i.ColorKind && (TT = nT.i.ColorInstanceKind);
      const mT = "matrix" === TT;
      if (!mT && (!this._userThinInstanceBuffersStorage || !this._userThinInstanceBuffersStorage.strides[TT])) return;
      const WT = mT ? 16 : this._userThinInstanceBuffersStorage.strides[TT],
        zT = mT ? this._thinInstanceDataStorage.matrixBufferSize : this._userThinInstanceBuffersStorage.sizes[TT];
      let MT = mT ? this._thinInstanceDataStorage.matrixData : this._userThinInstanceBuffersStorage.data[TT];
      const gT = (this._thinInstanceDataStorage.instancesCount + UT) * WT;
      let HT = zT;
      for (; HT < gT;) HT *= 2;
      if (!MT || zT != HT) {
        if (MT) {
          const TT = new Float32Array(HT);
          TT.set(MT, 0), MT = TT
        } else MT = new Float32Array(HT);
        mT ? (this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", MT, !1), this._thinInstanceDataStorage.matrixData = MT, this._thinInstanceDataStorage.matrixBufferSize = HT, this._scene.needsPreviousWorldMatrices && !this._thinInstanceDataStorage.previousMatrixData && (this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", MT, !1))) : (this._userThinInstanceBuffersStorage.vertexBuffers[TT]?.dispose(), this._userThinInstanceBuffersStorage.data[TT] = MT, this._userThinInstanceBuffersStorage.sizes[TT] = HT, this._userThinInstanceBuffersStorage.vertexBuffers[TT] = new nT.i(this.eB(), MT, TT, !0, !1, WT, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[TT]))
      }
    }, gT.d.prototype._thinInstanceInitializeUserStorage = function() {
      this._userThinInstanceBuffersStorage || (this._userThinInstanceBuffersStorage = {
        data: {},
        sizes: {},
        vertexBuffers: {},
        strides: {}
      })
    }, gT.d.prototype._disposeThinInstanceSpecificData = function() {
      this._thinInstanceDataStorage?.matrixBuffer && (this._thinInstanceDataStorage.matrixBuffer.dispose(), this._thinInstanceDataStorage.matrixBuffer = null), this._thinInstanceDataStorage?.previousMatrixBuffer && (this._thinInstanceDataStorage.previousMatrixBuffer.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = null)
    })
  },
  40569: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => fT,
      c: () => ZT
    });
    var WT, zT, MT, gT, nT = mT(40095),
      HT = mT(40102),
      kT = mT(40122),
      jT = mT(37219),
      lT = mT(37188),
      LT = mT(40335),
      pT = mT(37239),
      BT = mT(39965);
    let ZT = (() => {
      var TT;
      let UT, mT, WT, zT, MT, gT, pT, BT, ZT, cT = LT.d,
        vT = [],
        fT = [],
        qT = [],
        iT = [],
        bT = [],
        OT = [],
        eT = [],
        YT = [],
        JT = [],
        xT = [],
        dT = [],
        wT = [],
        tT = [],
        aT = [],
        yT = [],
        XT = [],
        IT = [],
        QT = [];
      return TT = class extends cT {
        get billboardMode() {
          return this._billboardMode
        }
        set billboardMode(UT) {
          this._billboardMode !== UT && (this._billboardMode = UT, this._cache.useBillboardPosition = 0 !== (this._billboardMode & TT.BILLBOARDMODE_USE_POSITION))
        }
        get infiniteDistance() {
          return this._infiniteDistance
        }
        set infiniteDistance(TT) {
          this._infiniteDistance !== TT && (this._infiniteDistance = TT)
        }
        constructor(UT) {
          let mT = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          super(UT, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, !1), this._forward = new lT.p(0, 0, 1), this._up = new lT.p(0, 1, 0), this._right = new lT.p(1, 0, 0), this._position = (0, nT.k)(this, vT, lT.p.Zero()), this._rotation = ((0, nT.k)(this, fT), (0, nT.k)(this, qT, lT.p.Zero())), this._rotationQuaternion = ((0, nT.k)(this, iT), (0, nT.k)(this, bT, null)), this._scaling = ((0, nT.k)(this, OT), (0, nT.k)(this, eT, lT.p.One())), this._transformToBoneReferal = ((0, nT.k)(this, YT), null), this._isAbsoluteSynced = !1, this._billboardMode = (0, nT.k)(this, JT, TT.BILLBOARDMODE_NONE), this.scalingDeterminant = ((0, nT.k)(this, xT), (0, nT.k)(this, dT, 1)), this._infiniteDistance = ((0, nT.k)(this, wT), (0, nT.k)(this, tT, !1)), this.ignoreNonUniformScaling = ((0, nT.k)(this, aT), (0, nT.k)(this, yT, !1)), this.reIntegrateRotationIntoRotationQuaternion = ((0, nT.k)(this, XT), (0, nT.k)(this, IT, !1)), this._poseMatrix = ((0, nT.k)(this, QT), null), this._localMatrix = lT.e.Zero(), this._usePivotMatrix = !1, this._absolutePosition = lT.p.Zero(), this._absoluteScaling = lT.p.Zero(), this._absoluteRotationQuaternion = lT.f.Identity(), this._pivotMatrix = lT.e.Identity(), this._postMultiplyPivotMatrix = !1, this._isWorldMatrixFrozen = !1, this._indexInSceneTransformNodesArray = -1, this.onAfterWorldMatrixUpdateObservable = new jT.d, this._nonUniformScaling = !1, mT && this.KF().addTransformNode(this)
        }
        getClassName() {
          return "TransformNode"
        }
        get position() {
          return this._position
        }
        set position(TT) {
          this._position = TT, this._markAsDirtyInternal()
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
        set rotation(TT) {
          this._rotation = TT, this._rotationQuaternion = null, this._markAsDirtyInternal()
        }
        get gp() {
          return this._scaling
        }
        set gp(TT) {
          this._scaling = TT, this._markAsDirtyInternal()
        }
        get rotationQuaternion() {
          return this._rotationQuaternion
        }
        set rotationQuaternion(TT) {
          this._rotationQuaternion = TT, TT && this._rotation.B3(0), this._markAsDirtyInternal()
        }
        _markAsDirtyInternal() {
          this._isDirty || (this._isDirty = !0, this.customMarkAsDirty && this.customMarkAsDirty())
        }
        get forward() {
          return lT.p.TransformNormalFromFloatsToRef(0, 0, this.KF().useRightHandedSystem ? -1 : 1, this.getWorldMatrix(), this._forward), this._forward.normalize()
        }
        get up() {
          return lT.p.TransformNormalFromFloatsToRef(0, 1, 0, this.getWorldMatrix(), this._up), this._up.normalize()
        }
        get right() {
          return lT.p.TransformNormalFromFloatsToRef(this.KF().useRightHandedSystem ? -1 : 1, 0, 0, this.getWorldMatrix(), this._right), this._right.normalize()
        }
        updatePoseMatrix(TT) {
          return this._poseMatrix ? (this._poseMatrix.Gw(TT), this) : (this._poseMatrix = TT.clone(), this)
        }
        getPoseMatrix() {
          return this._poseMatrix || (this._poseMatrix = lT.e.Identity()), this._poseMatrix
        }
        _isSynchronized() {
          const UT = this._cache;
          return this._billboardMode === UT.billboardMode && this._billboardMode === TT.BILLBOARDMODE_NONE && (!UT.pivotMatrixUpdated && (!this._infiniteDistance && (!this._position._isDirty && (!this._scaling._isDirty && !(this._rotationQuaternion && this._rotationQuaternion._isDirty || this._rotation._isDirty)))))
        }
        _initCache() {
          super._initCache();
          const TT = this._cache;
          TT.localMatrixUpdated = !1, TT.billboardMode = -1, TT.infiniteDistance = !1, TT.useBillboardPosition = !1
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
        setPreTransformMatrix(TT) {
          return this.setPivotMatrix(TT, !1)
        }
        setPivotMatrix(TT) {
          let UT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          return this._pivotMatrix.Gw(TT), this._usePivotMatrix = !this._pivotMatrix.isIdentity(), this._cache.pivotMatrixUpdated = !0, this._postMultiplyPivotMatrix = UT, this._postMultiplyPivotMatrix && (this._pivotMatrixInverse ? this._pivotMatrix.invertToRef(this._pivotMatrixInverse) : this._pivotMatrixInverse = lT.e.Invert(this._pivotMatrix)), this
        }
        getPivotMatrix() {
          return this._pivotMatrix
        }
        instantiateHierarchy() {
          let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            UT = arguments.length > 1 ? arguments[1] : void 0,
            mT = arguments.length > 2 ? arguments[2] : void 0;
          const WT = this.clone("Clone of " + (this.name || this.id), TT || this.parent, !0);
          WT && mT && mT(this, WT);
          for (const zT of this.getChildTransformNodes(!0)) zT.instantiateHierarchy(WT, UT, mT);
          return WT
        }
        HV() {
          let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return TT ? arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (this._rotation.B3(0), this._rotationQuaternion = this._rotationQuaternion || lT.f.Identity(), TT.decompose(this._scaling, this._rotationQuaternion, this._position), this.computeWorldMatrix(!0)) : (this._worldMatrix = TT, this._absolutePosition.J9(this._worldMatrix.m[12], this._worldMatrix.m[13], this._worldMatrix.m[14]), this._afterComputeWorldMatrix()) : (this._isWorldMatrixFrozen = !1, this.computeWorldMatrix(!0)), this._isDirty = !1, this._isWorldMatrixFrozen = !0, this
        }
        unfreezeWorldMatrix() {
          return this._isWorldMatrixFrozen = !1, this.computeWorldMatrix(!0), this
        }
        get znT() {
          return this._isWorldMatrixFrozen
        }
        getAbsolutePosition() {
          return this.computeWorldMatrix(), this._absolutePosition
        }
        setAbsolutePosition(TT) {
          if (!TT) return this;
          let UT, mT, WT;
          if (void 0 === TT.x) {
            if (arguments.length < 3) return this;
            UT = arguments[0], mT = arguments[1], WT = arguments[2]
          } else UT = TT.x, mT = TT.y, WT = TT.z;
          if (this.parent) {
            const TT = lT.l.Matrix[0];
            this.parent.getWorldMatrix().invertToRef(TT), lT.p.TransformCoordinatesFromFloatsToRef(UT, mT, WT, TT, this.position)
          } else this.position.x = UT, this.position.y = mT, this.position.z = WT;
          return this._absolutePosition.Gw(TT), this
        }
        setPositionWithLocalVector(TT) {
          return this.computeWorldMatrix(), this.position = lT.p.TransformNormal(TT, this._localMatrix), this
        }
        getPositionExpressedInLocalSpace() {
          this.computeWorldMatrix();
          const TT = lT.l.Matrix[0];
          return this._localMatrix.invertToRef(TT), lT.p.TransformNormal(this.position, TT)
        }
        locallyTranslate(TT) {
          return this.computeWorldMatrix(!0), this.position = lT.p.TransformCoordinates(TT, this._localMatrix), this
        }
        lookAt(UT) {
          let mT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            WT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            zT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
            MT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
          const gT = TT._LookAtVectorCache,
            nT = 0 === MT ? this.position : this.getAbsolutePosition();
          if (UT.subtractToRef(nT, gT), this.setDirection(gT, mT, WT, zT), 1 === MT && this.parent)
            if (this.rotationQuaternion) {
              const TT = lT.l.Matrix[0];
              this.rotationQuaternion.toRotationMatrix(TT);
              const UT = lT.l.Matrix[1];
              this.parent.getWorldMatrix().getRotationMatrixToRef(UT), UT.invert(), TT.multiplyToRef(UT, TT), this.rotationQuaternion.fromRotationMatrix(TT)
            } else {
              const TT = lT.l.Quaternion[0];
              lT.f.FromEulerVectorToRef(this.rotation, TT);
              const UT = lT.l.Matrix[0];
              TT.toRotationMatrix(UT);
              const mT = lT.l.Matrix[1];
              this.parent.getWorldMatrix().getRotationMatrixToRef(mT), mT.invert(), UT.multiplyToRef(mT, UT), TT.fromRotationMatrix(UT), TT.toEulerAnglesToRef(this.rotation)
            } return this
        }
        qD(TT) {
          const UT = lT.p.Zero();
          return this.getDirectionToRef(TT, UT), UT
        }
        getDirectionToRef(TT, UT) {
          return lT.p.TransformNormalToRef(TT, this.getWorldMatrix(), UT), this
        }
        setDirection(TT) {
          let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
          const zT = -Math.atan2(TT.z, TT.x) + Math.PI / 2,
            MT = Math.sqrt(TT.x * TT.x + TT.z * TT.z),
            gT = -Math.atan2(TT.y, MT);
          return this.rotationQuaternion ? lT.f.RotationYawPitchRollToRef(zT + UT, gT + mT, WT, this.rotationQuaternion) : (this.rotation.x = gT + mT, this.rotation.y = zT + UT, this.rotation.z = WT), this
        }
        setPivotPoint(TT) {
          let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          0 == this.KF().getRenderId() && this.computeWorldMatrix(!0);
          const mT = this.getWorldMatrix();
          if (1 == UT) {
            const UT = lT.l.Matrix[0];
            mT.invertToRef(UT), TT = lT.p.TransformCoordinates(TT, UT)
          }
          return this.setPivotMatrix(lT.e.Translation(-TT.x, -TT.y, -TT.z), !0)
        }
        getPivotPoint() {
          const TT = lT.p.Zero();
          return this.getPivotPointToRef(TT), TT
        }
        getPivotPointToRef(TT) {
          return TT.x = -this._pivotMatrix.m[12], TT.y = -this._pivotMatrix.m[13], TT.z = -this._pivotMatrix.m[14], this
        }
        getAbsolutePivotPoint() {
          const TT = lT.p.Zero();
          return this.getAbsolutePivotPointToRef(TT), TT
        }
        getAbsolutePivotPointToRef(TT) {
          return this.getPivotPointToRef(TT), lT.p.TransformCoordinatesToRef(TT, this.getWorldMatrix(), TT), this
        }
        NUT(TT) {
          if (this._isDirty) return this;
          if (this._children)
            for (const UT of this._children) UT.NUT(TT);
          return super.NUT(TT)
        }
        setParent(UT) {
          let mT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            WT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          if (!UT && !this.parent) return this;
          const zT = lT.l.Quaternion[0],
            MT = lT.l.JB[0],
            gT = lT.l.JB[1],
            nT = lT.l.Matrix[1];
          lT.e.IdentityToRef(nT);
          const HT = lT.l.Matrix[0];
          this.computeWorldMatrix(!0);
          let kT = this.rotationQuaternion;
          return kT || (kT = TT._TmpRotation, lT.f.RotationYawPitchRollToRef(this._rotation.y, this._rotation.x, this._rotation.z, kT)), lT.e.ComposeToRef(this.gp, kT, this.position, HT), this.parent && HT.multiplyToRef(this.parent.computeWorldMatrix(!0), HT), UT && (UT.computeWorldMatrix(!0).invertToRef(nT), HT.multiplyToRef(nT, HT)), HT.decompose(gT, zT, MT, mT ? this : void 0), this.rotationQuaternion ? this.rotationQuaternion.Gw(zT) : zT.toEulerAnglesToRef(this.rotation), this.gp.Gw(gT), this.position.Gw(MT), this.parent = UT, WT && this.setPivotMatrix(lT.e.Identity()), this
        }
        addChild(TT) {
          let UT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return TT.setParent(this, UT), this
        }
        removeChild(TT) {
          let UT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return TT.parent !== this || TT.setParent(null, UT), this
        }
        get nonUniformScaling() {
          return this._nonUniformScaling
        }
        _updateNonUniformScalingState(TT) {
          return this._nonUniformScaling !== TT && (this._nonUniformScaling = TT, !0)
        }
        attachToBone(TT, UT) {
          return this._currentParentWhenAttachingToBone = this.parent, this._transformToBoneReferal = UT, this.parent = TT, TT.getSkeleton().prepare(!0), TT.getFinalMatrix().determinant() < 0 && (this.scalingDeterminant *= -1), this
        }
        detachFromBone() {
          let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          return this.parent ? (this.parent.getWorldMatrix().determinant() < 0 && (this.scalingDeterminant *= -1), this._transformToBoneReferal = null, this.parent = TT ? this._currentParentWhenAttachingToBone : null, this) : (TT && (this.parent = this._currentParentWhenAttachingToBone), this)
        }
        rotate(UT, mT, WT) {
          let zT;
          if (UT.normalize(), this.rotationQuaternion || (this.rotationQuaternion = this.rotation.toQuaternion(), this.rotation.B3(0)), WT && 0 !== WT) {
            if (this.parent) {
              const TT = this.parent.getWorldMatrix(),
                WT = lT.l.Matrix[0];
              TT.invertToRef(WT), UT = lT.p.TransformNormal(UT, WT), TT.determinant() < 0 && (mT *= -1)
            }
            zT = lT.f.RotationAxisToRef(UT, mT, TT._RotationAxisCache), zT.multiplyToRef(this.rotationQuaternion, this.rotationQuaternion)
          } else zT = lT.f.RotationAxisToRef(UT, mT, TT._RotationAxisCache), this.rotationQuaternion.multiplyToRef(zT, this.rotationQuaternion);
          return this
        }
        rotateAround(TT, UT, mT) {
          UT.normalize(), this.rotationQuaternion || (this.rotationQuaternion = lT.f.RotationYawPitchRoll(this.rotation.y, this.rotation.x, this.rotation.z), this.rotation.B3(0));
          const WT = lT.l.JB[0],
            zT = lT.l.JB[1],
            MT = lT.l.JB[2],
            gT = lT.l.Quaternion[0],
            nT = lT.l.Matrix[0],
            HT = lT.l.Matrix[1],
            kT = lT.l.Matrix[2],
            jT = lT.l.Matrix[3];
          return TT.subtractToRef(this.position, WT), lT.e.TranslationToRef(WT.x, WT.y, WT.z, nT), lT.e.TranslationToRef(-WT.x, -WT.y, -WT.z, HT), lT.e.RotationAxisToRef(UT, mT, kT), HT.multiplyToRef(kT, jT), jT.multiplyToRef(nT, jT), jT.decompose(zT, gT, MT), this.position.addInPlace(MT), gT.multiplyToRef(this.rotationQuaternion, this.rotationQuaternion), this
        }
        translate(TT, UT, mT) {
          const WT = TT.scale(UT);
          if (mT && 0 !== mT) this.setAbsolutePosition(this.getAbsolutePosition().add(WT));
          else {
            const TT = this.getPositionExpressedInLocalSpace().add(WT);
            this.setPositionWithLocalVector(TT)
          }
          return this
        }
        addRotation(TT, UT, mT) {
          let WT;
          this.rotationQuaternion ? WT = this.rotationQuaternion : (WT = lT.l.Quaternion[1], lT.f.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, this.rotation.z, WT));
          const zT = lT.l.Quaternion[0];
          return lT.f.RotationYawPitchRollToRef(UT, TT, mT, zT), WT.multiplyInPlace(zT), this.rotationQuaternion || WT.toEulerAnglesToRef(this.rotation), this
        }
        _getEffectiveParent() {
          return this.parent
        }
        isWorldMatrixCameraDependent() {
          return this._infiniteDistance && !this.parent || this._billboardMode !== TT.BILLBOARDMODE_NONE
        }
        computeWorldMatrix() {
          let UT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            mT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          if (this._isWorldMatrixFrozen && !this._isDirty) return this._worldMatrix;
          const WT = this.KF().getRenderId();
          if (!this._isDirty && !UT && (this._currentRenderId === WT || this.isSynchronized())) return this._currentRenderId = WT, this._worldMatrix;
          mT = mT || this.KF().activeCamera, this._updateCache();
          const zT = this._cache;
          zT.pivotMatrixUpdated = !1, zT.billboardMode = this.billboardMode, zT.infiniteDistance = this.infiniteDistance, zT.parent = this._parentNode, this._currentRenderId = WT, this._childUpdateId += 1, this._isDirty = !1, this._position._isDirty = !1, this._rotation._isDirty = !1, this._scaling._isDirty = !1;
          const MT = this._getEffectiveParent(),
            gT = TT._TmpScaling;
          let nT, HT = this._position;
          if (this._infiniteDistance && !this.parent && mT) {
            const UT = mT.getWorldMatrix().m;
            HT = TT._TmpTranslation, HT.J9(this._position.x + UT[12], this._position.y + UT[13], this._position.z + UT[14])
          }
          if (gT.J9(this._scaling.x * this.scalingDeterminant, this._scaling.y * this.scalingDeterminant, this._scaling.z * this.scalingDeterminant), this._rotationQuaternion) {
            if (this._rotationQuaternion._isDirty = !1, nT = this._rotationQuaternion, this.reIntegrateRotationIntoRotationQuaternion) {
              this.rotation.lengthSquared() && (this._rotationQuaternion.multiplyInPlace(lT.f.RotationYawPitchRoll(this._rotation.y, this._rotation.x, this._rotation.z)), this._rotation.J9(0, 0, 0))
            }
          } else nT = TT._TmpRotation, lT.f.RotationYawPitchRollToRef(this._rotation.y, this._rotation.x, this._rotation.z, nT);
          if (this._usePivotMatrix) {
            const TT = lT.l.Matrix[1];
            lT.e.ScalingToRef(gT.x, gT.y, gT.z, TT);
            const UT = lT.l.Matrix[0];
            nT.toRotationMatrix(UT), this._pivotMatrix.multiplyToRef(TT, lT.l.Matrix[4]), lT.l.Matrix[4].multiplyToRef(UT, this._localMatrix), this._postMultiplyPivotMatrix && this._localMatrix.multiplyToRef(this._pivotMatrixInverse, this._localMatrix), this._localMatrix.addTranslationFromFloats(HT.x, HT.y, HT.z)
          } else lT.e.ComposeToRef(gT, nT, HT, this._localMatrix);
          if (MT && MT.getWorldMatrix) {
            if (UT && MT.computeWorldMatrix(UT), this.billboardMode) {
              if (this._transformToBoneReferal) {
                const TT = this.parent;
                TT.getSkeleton().prepare(), TT.getFinalMatrix().multiplyToRef(this._transformToBoneReferal.getWorldMatrix(), lT.l.Matrix[7])
              } else lT.l.Matrix[7].Gw(MT.getWorldMatrix());
              const UT = lT.l.JB[5],
                mT = lT.l.JB[6],
                WT = lT.l.Quaternion[0];
              lT.l.Matrix[7].decompose(mT, WT, UT), lT.e.ScalingToRef(mT.x, mT.y, mT.z, lT.l.Matrix[7]), lT.l.Matrix[7].setTranslation(UT), TT.BillboardUseParentOrientation && (this._position.applyRotationQuaternionToRef(WT, UT), this._localMatrix.setTranslation(UT)), this._localMatrix.multiplyToRef(lT.l.Matrix[7], this._worldMatrix)
            } else if (this._transformToBoneReferal) {
              const TT = this.parent;
              TT.getSkeleton().prepare(), this._localMatrix.multiplyToRef(TT.getFinalMatrix(), lT.l.Matrix[6]), lT.l.Matrix[6].multiplyToRef(this._transformToBoneReferal.getWorldMatrix(), this._worldMatrix)
            } else this._localMatrix.multiplyToRef(MT.getWorldMatrix(), this._worldMatrix);
            this._markSyncedWithParent()
          } else this._worldMatrix.Gw(this._localMatrix);
          if (mT && this.billboardMode)
            if (zT.useBillboardPosition) {
              const UT = lT.l.JB[0];
              this._worldMatrix.getTranslationToRef(UT);
              const WT = mT.globalPosition;
              this._worldMatrix.invertToRef(lT.l.Matrix[1]);
              const zT = lT.l.JB[1];
              lT.p.TransformCoordinatesToRef(WT, lT.l.Matrix[1], zT), zT.normalize();
              const MT = -Math.atan2(zT.z, zT.x) + Math.PI / 2,
                gT = Math.sqrt(zT.x * zT.x + zT.z * zT.z),
                nT = -Math.atan2(zT.y, gT);
              if (lT.f.RotationYawPitchRollToRef(MT, nT, 0, lT.l.Quaternion[0]), (this.billboardMode & TT.BILLBOARDMODE_ALL) !== TT.BILLBOARDMODE_ALL) {
                const UT = lT.l.JB[1];
                lT.l.Quaternion[0].toEulerAnglesToRef(UT), (this.billboardMode & TT.BILLBOARDMODE_X) !== TT.BILLBOARDMODE_X && (UT.x = 0), (this.billboardMode & TT.BILLBOARDMODE_Y) !== TT.BILLBOARDMODE_Y && (UT.y = 0), (this.billboardMode & TT.BILLBOARDMODE_Z) !== TT.BILLBOARDMODE_Z && (UT.z = 0), lT.e.RotationYawPitchRollToRef(UT.y, UT.x, UT.z, lT.l.Matrix[0])
              } else lT.e.FromQuaternionToRef(lT.l.Quaternion[0], lT.l.Matrix[0]);
              this._worldMatrix.setTranslationFromFloats(0, 0, 0), this._worldMatrix.multiplyToRef(lT.l.Matrix[0], this._worldMatrix), this._worldMatrix.setTranslation(lT.l.JB[0])
            } else {
              const UT = lT.l.JB[0];
              this._worldMatrix.getTranslationToRef(UT), lT.l.Matrix[1].Gw(mT.getViewMatrix());
              const WT = this.KF().useRightHandedSystem;
              if (WT && lT.l.Matrix[1].multiplyToRef(TT._TmpRHRestore, lT.l.Matrix[1]), lT.l.Matrix[1].setTranslationFromFloats(0, 0, 0), lT.l.Matrix[1].invertToRef(lT.l.Matrix[0]), (this.billboardMode & TT.BILLBOARDMODE_ALL) !== TT.BILLBOARDMODE_ALL) {
                lT.l.Matrix[0].decompose(void 0, lT.l.Quaternion[0], void 0);
                const UT = lT.l.JB[1];
                lT.l.Quaternion[0].toEulerAnglesToRef(UT), (this.billboardMode & TT.BILLBOARDMODE_X) !== TT.BILLBOARDMODE_X && (UT.x = 0), (this.billboardMode & TT.BILLBOARDMODE_Y) !== TT.BILLBOARDMODE_Y && (UT.y = 0), (this.billboardMode & TT.BILLBOARDMODE_Z) !== TT.BILLBOARDMODE_Z && (UT.z = 0), WT && (UT.y += Math.PI), lT.e.RotationYawPitchRollToRef(UT.y, UT.x, UT.z, lT.l.Matrix[0])
              }
              this._worldMatrix.setTranslationFromFloats(0, 0, 0), this._worldMatrix.multiplyToRef(lT.l.Matrix[0], this._worldMatrix), this._worldMatrix.setTranslation(lT.l.JB[0])
            } return this.ignoreNonUniformScaling ? this._updateNonUniformScalingState(!1) : this._scaling.isNonUniformWithinEpsilon(1e-6) ? this._updateNonUniformScalingState(!0) : MT && MT._nonUniformScaling ? this._updateNonUniformScalingState(MT._nonUniformScaling) : this._updateNonUniformScalingState(!1), this._afterComputeWorldMatrix(), this._absolutePosition.J9(this._worldMatrix.m[12], this._worldMatrix.m[13], this._worldMatrix.m[14]), this._isAbsoluteSynced = !1, this.onAfterWorldMatrixUpdateObservable.notifyObservers(this), this._poseMatrix || (this._poseMatrix = lT.e.Invert(this._worldMatrix)), this._worldMatrixDeterminantIsDirty = !0, this._worldMatrix
        }
        resetLocalMatrix() {
          let TT = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          if (this.computeWorldMatrix(), TT) {
            const TT = this.getChildren();
            for (let UT = 0; UT < TT.length; ++UT) {
              const mT = TT[UT];
              if (mT) {
                mT.computeWorldMatrix();
                const TT = lT.l.Matrix[0];
                mT._localMatrix.multiplyToRef(this._localMatrix, TT);
                const UT = lT.l.Quaternion[0];
                TT.decompose(mT.gp, UT, mT.position), mT.rotationQuaternion ? mT.rotationQuaternion.Gw(UT) : UT.toEulerAnglesToRef(mT.rotation)
              }
            }
          }
          this.gp.J9(1, 1, 1), this.position.J9(0, 0, 0), this.rotation.J9(0, 0, 0), this.rotationQuaternion && (this.rotationQuaternion = lT.f.Identity()), this._worldMatrix = lT.e.Identity()
        }
        _afterComputeWorldMatrix() {}
        registerAfterWorldMatrixUpdate(TT) {
          return this.onAfterWorldMatrixUpdateObservable.add(TT), this
        }
        unregisterAfterWorldMatrixUpdate(TT) {
          return this.onAfterWorldMatrixUpdateObservable.removeCallback(TT), this
        }
        getPositionInCameraSpace() {
          let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return TT || (TT = this.KF().activeCamera), lT.p.TransformCoordinates(this.getAbsolutePosition(), TT.getViewMatrix())
        }
        getDistanceToCamera() {
          let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return TT || (TT = this.KF().activeCamera), this.getAbsolutePosition().subtract(TT.globalPosition).length()
        }
        clone(UT, mT, WT) {
          const zT = kT.e.Clone((() => new TT(UT, this.KF())), this);
          if (zT.name = UT, zT.id = UT, mT && (zT.parent = mT), !WT) {
            const TT = this.getDescendants(!0);
            for (let mT = 0; mT < TT.length; mT++) {
              const WT = TT[mT];
              WT.clone && WT.clone(UT + "." + WT.name, zT)
            }
          }
          return zT
        }
        serialize(TT) {
          const UT = kT.e.Serialize(this, TT);
          return UT.type = this.getClassName(), UT.uniqueId = this.uniqueId, this.parent && this.parent._serializeAsParent(UT), UT.localMatrix = this.getPivotMatrix().cWT(), UT.isEnabled = this.isEnabled(), this._isWorldMatrixFrozen && (UT.HV = !0), kT.e.AppendSerializedAnimations(this, UT), UT.hZ = this.serializeAnimationRanges(), UT
        }
        getChildTransformNodes(UT, mT) {
          const WT = [];
          return this._getDescendants(WT, UT, (UT => (!mT || mT(UT)) && UT instanceof TT)), WT
        }
        dispose(TT) {
          let UT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this.KF().stopAnimation(this), this.KF().removeTransformNode(this), this._parentContainer) {
            const TT = this._parentContainer.transformNodes.indexOf(this);
            TT > -1 && this._parentContainer.transformNodes.splice(TT, 1), this._parentContainer = null
          }
          if (this.onAfterWorldMatrixUpdateObservable.clear(), TT) {
            const TT = this.getChildTransformNodes(!0);
            for (const UT of TT) UT.parent = null, UT.computeWorldMatrix(!0)
          }
          super.dispose(TT, UT)
        }
        normalizeToUnitCube() {
          let TT = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            UT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            mT = arguments.length > 2 ? arguments[2] : void 0,
            WT = null,
            zT = null;
          UT && (this.rotationQuaternion ? (zT = this.rotationQuaternion.clone(), this.rotationQuaternion.J9(0, 0, 0, 1)) : this.rotation && (WT = this.rotation.clone(), this.rotation.J9(0, 0, 0)));
          const MT = this.getHierarchyBoundingVectors(TT, mT),
            gT = MT.max.subtract(MT.min),
            nT = Math.max(gT.x, gT.y, gT.z);
          if (0 === nT) return this;
          const HT = 1 / nT;
          return this.gp.scaleInPlace(HT), UT && (this.rotationQuaternion && zT ? this.rotationQuaternion.Gw(zT) : this.rotation && WT && this.rotation.Gw(WT)), this
        }
        _syncAbsoluteScalingAndRotation() {
          this._isAbsoluteSynced || (this._worldMatrix.decompose(this._absoluteScaling, this._absoluteRotationQuaternion), this._isAbsoluteSynced = !0)
        }
      }, (() => {
        const kT = "function" === typeof Symbol && Symbol.metadata ? Object.create(cT[Symbol.metadata] ?? null) : void 0;
        UT = [(0, HT.J)("position")], mT = [(0, HT.J)("rotation")], WT = [(0, HT.B)("rotationQuaternion")], zT = [(0, HT.J)("gp")], MT = [(0, HT.L)("billboardMode")], gT = [(0, HT.L)()], pT = [(0, HT.L)("infiniteDistance")], BT = [(0, HT.L)()], ZT = [(0, HT.L)()], (0, nT.h)(null, null, UT, {
          kind: "field",
          name: "_position",
          static: !1,
          private: !1,
          access: {
            has: TT => "_position" in TT,
            get: TT => TT._position,
            set: (TT, UT) => {
              TT._position = UT
            }
          },
          metadata: kT
        }, vT, fT), (0, nT.h)(null, null, mT, {
          kind: "field",
          name: "_rotation",
          static: !1,
          private: !1,
          access: {
            has: TT => "_rotation" in TT,
            get: TT => TT._rotation,
            set: (TT, UT) => {
              TT._rotation = UT
            }
          },
          metadata: kT
        }, qT, iT), (0, nT.h)(null, null, WT, {
          kind: "field",
          name: "_rotationQuaternion",
          static: !1,
          private: !1,
          access: {
            has: TT => "_rotationQuaternion" in TT,
            get: TT => TT._rotationQuaternion,
            set: (TT, UT) => {
              TT._rotationQuaternion = UT
            }
          },
          metadata: kT
        }, bT, OT), (0, nT.h)(null, null, zT, {
          kind: "field",
          name: "_scaling",
          static: !1,
          private: !1,
          access: {
            has: TT => "_scaling" in TT,
            get: TT => TT._scaling,
            set: (TT, UT) => {
              TT._scaling = UT
            }
          },
          metadata: kT
        }, eT, YT), (0, nT.h)(null, null, MT, {
          kind: "field",
          name: "_billboardMode",
          static: !1,
          private: !1,
          access: {
            has: TT => "_billboardMode" in TT,
            get: TT => TT._billboardMode,
            set: (TT, UT) => {
              TT._billboardMode = UT
            }
          },
          metadata: kT
        }, JT, xT), (0, nT.h)(null, null, gT, {
          kind: "field",
          name: "scalingDeterminant",
          static: !1,
          private: !1,
          access: {
            has: TT => "scalingDeterminant" in TT,
            get: TT => TT.scalingDeterminant,
            set: (TT, UT) => {
              TT.scalingDeterminant = UT
            }
          },
          metadata: kT
        }, dT, wT), (0, nT.h)(null, null, pT, {
          kind: "field",
          name: "_infiniteDistance",
          static: !1,
          private: !1,
          access: {
            has: TT => "_infiniteDistance" in TT,
            get: TT => TT._infiniteDistance,
            set: (TT, UT) => {
              TT._infiniteDistance = UT
            }
          },
          metadata: kT
        }, tT, aT), (0, nT.h)(null, null, BT, {
          kind: "field",
          name: "ignoreNonUniformScaling",
          static: !1,
          private: !1,
          access: {
            has: TT => "ignoreNonUniformScaling" in TT,
            get: TT => TT.ignoreNonUniformScaling,
            set: (TT, UT) => {
              TT.ignoreNonUniformScaling = UT
            }
          },
          metadata: kT
        }, yT, XT), (0, nT.h)(null, null, ZT, {
          kind: "field",
          name: "reIntegrateRotationIntoRotationQuaternion",
          static: !1,
          private: !1,
          access: {
            has: TT => "reIntegrateRotationIntoRotationQuaternion" in TT,
            get: TT => TT.reIntegrateRotationIntoRotationQuaternion,
            set: (TT, UT) => {
              TT.reIntegrateRotationIntoRotationQuaternion = UT
            }
          },
          metadata: kT
        }, IT, QT), kT && Object.defineProperty(TT, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: kT
        })
      })(), TT.BILLBOARDMODE_NONE = 0, TT.BILLBOARDMODE_X = 1, TT.BILLBOARDMODE_Y = 2, TT.BILLBOARDMODE_Z = 4, TT.BILLBOARDMODE_ALL = 7, TT.BILLBOARDMODE_USE_POSITION = 128, TT.BillboardUseParentOrientation = !1, TT._TmpRotation = lT.f.Zero(), TT._TmpScaling = lT.p.Zero(), TT._TmpTranslation = lT.p.Zero(), TT._TmpRHRestore = lT.e.Scaling(1, 1, -1), TT._LookAtVectorCache = new lT.p(0, 0, 0), TT._RotationAxisCache = new lT.f, TT
    })();

    function cT(TT, UT, mT) {
      const WT = kT.e.Parse((() => new ZT(TT.name, UT)), TT, UT, mT);
      if (TT.localMatrix ? WT.setPreTransformMatrix(lT.e.FromArray(TT.localMatrix)) : TT.pivotMatrix && WT.setPivotMatrix(lT.e.FromArray(TT.pivotMatrix)), WT.Qy(TT.isEnabled), WT._waitingParsedUniqueId = TT.uniqueId, void 0 !== TT.parentId && (WT._waitingParentId = TT.parentId), void 0 !== TT.parentInstanceIndex && (WT._waitingParentInstanceIndex = TT.parentInstanceIndex), TT.HV && (WT._waitingFreezeWorldMatrix = TT.HV), TT.animations) {
        for (let UT = 0; UT < TT.animations.length; UT++) {
          const mT = TT.animations[UT],
            zT = (0, pT.d)("BABYLON.Animation");
          zT && WT.animations.push(zT.Parse(mT))
        }
        LT.d.ParseAnimationRanges(WT, TT, UT)
      }
      return TT.autoAnimate && UT.beginAnimation(WT, TT.autoAnimateFrom, TT.autoAnimateTo, TT.autoAnimateLoop, TT.autoAnimateSpeed || 1), WT
    }
    let vT = !1;

    function fT() {
      vT || (vT = !0, ZT.Parse = cT)
    }(WT = ZT.prototype).rK ?? (WT.rK = (0, BT.j)("TransformNode", "rK")), (zT = ZT.prototype).applyImpulse ?? (zT.applyImpulse = (0, BT.j)("TransformNode", "applyImpulse")), (MT = ZT.prototype).applyAngularImpulse ?? (MT.applyAngularImpulse = (0, BT.j)("TransformNode", "applyAngularImpulse")), (gT = ZT.prototype).applyTorque ?? (gT.applyTorque = (0, BT.j)("TransformNode", "applyTorque")), Object.getOwnPropertyDescriptor(ZT.prototype, "physicsBody") || Object.defineProperty(ZT.prototype, "physicsBody", (0, BT.h)("TransformNode", "physicsBody"))
  },
  40541: (TT, UT, mT) => {
    function WT(TT, UT, mT) {
      try {
        const WT = TT.next();
        WT.done ? UT(WT) : WT.value ? WT.value.then((() => {
          WT.value = void 0, UT(WT)
        }), mT) : UT(WT)
      } catch (WT) {
        mT(WT)
      }
    }

    function zT() {
      let TT, UT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 25;
      return (mT, zT, MT) => {
        const gT = performance.now();
        void 0 === TT || gT - TT > UT ? (TT = gT, setTimeout((() => {
          WT(mT, zT, MT)
        }), 0)) : WT(mT, zT, MT)
      }
    }

    function MT(TT, UT, mT, WT, zT) {
      const MT = () => {
        let gT;
        const nT = TT => {
          TT.done ? mT(TT.value) : void 0 === gT ? gT = !0 : MT()
        };
        do {
          gT = void 0, zT && zT.aborted ? WT(new Error("Aborted")) : UT(TT, nT, WT), void 0 === gT && (gT = !1)
        } while (gT)
      };
      MT()
    }

    function gT(TT, UT) {
      let mT;
      return MT(TT, WT, (TT => mT = TT), (TT => {
        throw TT
      }), UT), mT
    }
    async function nT(TT, UT, mT) {
      return await new Promise(((WT, zT) => {
        MT(TT, UT, WT, zT, mT)
      }))
    }

    function HT(TT, UT) {
      return function() {
        return gT(TT(...arguments), UT)
      }
    }
    mT.d(UT, {
      b: () => zT,
      c: () => HT,
      f: () => nT,
      i: () => gT
    })
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);
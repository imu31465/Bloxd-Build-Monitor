export const id = 243;
export const ids = [243];
export const modules = {
  39841: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => hT,
      e: () => ST
    });
    var lT = cT(39620),
      MT = cT(39624),
      KT = cT(39741),
      OT = cT(36932),
      yT = cT(36892),
      fT = cT(39846),
      xT = cT(38512),
      IT = cT(36949),
      AT = cT(39500),
      CT = cT(37939),
      jT = cT(37632),
      vT = cT(39583),
      tT = cT(39645);
    let hT = (() => {
      var TT;
      let kT, cT, IT, hT, NT, QT, ST, DT, aT, FT, rT, PT, wT, mT, bT, zT, JT, oT, HT = fT.b,
        eT = [],
        GT = [],
        VT = [],
        ET = [],
        ZT = [],
        uT = [],
        XT = [],
        dT = [],
        LT = [],
        RT = [],
        gT = [],
        UT = [],
        YT = [],
        BT = [],
        WT = [],
        nT = [],
        pT = [],
        iT = [],
        qT = [],
        sT = [],
        Tk = [],
        kk = [],
        ck = [],
        lk = [],
        Mk = [];
      return TT = class extends HT {
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
          let kT, cT;
          if (this.mode === TT.PERSPECTIVE_CAMERA) this.fovMode === TT.FOVMODE_VERTICAL_FIXED ? (cT = 2 * this.minZ * Math.tan(this.fov / 2), kT = this.Dv().getAspectRatio(this) * cT) : (kT = 2 * this.minZ * Math.tan(this.fov / 2), cT = kT / this.Dv().getAspectRatio(this));
          else {
            const TT = this.Dv().getRenderWidth() / 2,
              lT = this.Dv().getRenderHeight() / 2;
            kT = (this.orthoRight ?? TT) - (this.orthoLeft ?? -TT), cT = (this.orthoTop ?? lT) - (this.orthoBottom ?? -lT)
          }
          return kT * cT
        }
        set orthoLeft(TT) {
          this._orthoLeft = TT;
          for (const kT of this._rigCameras) kT.orthoLeft = TT
        }
        get orthoLeft() {
          return this._orthoLeft
        }
        set orthoRight(TT) {
          this._orthoRight = TT;
          for (const kT of this._rigCameras) kT.orthoRight = TT
        }
        get orthoRight() {
          return this._orthoRight
        }
        set orthoBottom(TT) {
          this._orthoBottom = TT;
          for (const kT of this._rigCameras) kT.orthoBottom = TT
        }
        get orthoBottom() {
          return this._orthoBottom
        }
        set orthoTop(TT) {
          this._orthoTop = TT;
          for (const kT of this._rigCameras) kT.orthoTop = TT
        }
        get orthoTop() {
          return this._orthoTop
        }
        setFocalLength(TT) {
          let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 36;
          this.fov = 2 * Math.atan(kT / (2 * TT))
        }
        get inertia() {
          return this._baseInertia
        }
        set inertia(TT) {
          this._baseInertia = TT
        }
        set mode(TT) {
          this._mode = TT;
          for (const kT of this._rigCameras) kT.mode = TT
        }
        get mode() {
          return this._mode
        }
        get hasMoved() {
          return this._hasMoved
        }
        constructor(kT, cT, MT) {
          let fT = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
          (0, vT.c)(), super(kT, MT, !1), this.inputs = (0, lT.h)(this, eT), this._position = (0, lT.h)(this, GT, yT.m.Zero()), this._upVector = ((0, lT.h)(this, VT), (0, lT.h)(this, ET, yT.m.Up())), this.oblique = ((0, lT.h)(this, ZT), null), this._orthoLeft = null, this._orthoRight = null, this._orthoBottom = null, this._orthoTop = null, this.fov = (0, lT.h)(this, uT, .8), this.projectionPlaneTilt = ((0, lT.h)(this, XT), (0, lT.h)(this, dT, 0)), this.minZ = ((0, lT.h)(this, LT), (0, lT.h)(this, RT, 1)), this.maxZ = ((0, lT.h)(this, gT), (0, lT.h)(this, UT, 1e4)), this._baseInertia = ((0, lT.h)(this, YT), .9), this._mode = TT.PERSPECTIVE_CAMERA, this.isIntermediate = !1, this.viewport = new CT.e(0, 0, 1, 1), this.layerMask = (0, lT.h)(this, BT, 268435455), this.fovMode = ((0, lT.h)(this, WT), (0, lT.h)(this, nT, TT.FOVMODE_VERTICAL_FIXED)), this.cameraRigMode = ((0, lT.h)(this, pT), (0, lT.h)(this, iT, TT.RIG_MODE_NONE)), this.interaxialDistance = ((0, lT.h)(this, qT), (0, lT.h)(this, sT, void 0)), this.isStereoscopicSideBySide = ((0, lT.h)(this, Tk), (0, lT.h)(this, kk, void 0)), this.ignoreCameraMaxZ = ((0, lT.h)(this, ck), (0, lT.h)(this, lk, !1)), this.customRenderTargets = ((0, lT.h)(this, Mk), []), this.outputRenderTarget = null, this.onViewMatrixChangedObservable = new OT.b, this.onProjectionMatrixChangedObservable = new OT.b, this.onAfterCheckInputsObservable = new OT.b, this.onRestoreStateObservable = new OT.b, this.isRigCamera = !1, this._hasMoved = !1, this._rigCameras = new Array, this._skipRendering = !1, this._projectionMatrix = new yT.d, this._postProcesses = new Array, this._activeMeshes = new KT.g(256), this._globalPosition = yT.m.Zero(), this._computedViewMatrix = yT.d.Identity(), this._doNotComputeProjectionMatrix = !1, this._transformMatrix = yT.d.Zero(), this._refreshFrustumPlanes = !0, this._absoluteRotation = yT.f.Identity(), this._isCamera = !0, this._isLeftCamera = !1, this._isRightCamera = !1, this.layerMask = this.NJ().defaultCameraLayerMask, this.NJ().addCamera(this), fT && !this.NJ().activeCamera && (this.NJ().activeCamera = this), this.position = cT, this.renderPassId = this.NJ().Dv().createRenderPassId(`Camera ${kT}`)
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
          return "Eh"
        }
        toString(TT) {
          let kT = "Name: " + this.name;
          if (kT += ", type: " + this.getClassName(), this.animations)
            for (let cT = 0; cT < this.animations.length; cT++) kT += ", animation[0]: " + this.animations[cT].toString(TT);
          return kT
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
            for (const kT of this._postProcesses)
              if (kT && !kT.isReady()) return !1;
          return super.isReady(TT)
        }
        _initCache() {
          super._initCache(), this._cache.position = new yT.m(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.upVector = new yT.m(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.mode = void 0, this._cache.minZ = void 0, this._cache.maxZ = void 0, this._cache.fov = void 0, this._cache.fovMode = void 0, this._cache.aspectRatio = void 0, this._cache.orthoLeft = void 0, this._cache.orthoRight = void 0, this._cache.orthoBottom = void 0, this._cache.orthoTop = void 0, this._cache.obliqueAngle = void 0, this._cache.obliqueLength = void 0, this._cache.obliqueOffset = void 0, this._cache.renderWidth = void 0, this._cache.renderHeight = void 0
        }
        _updateCache(TT) {
          TT || super._updateCache(), this._cache.position.UkT(this.position), this._cache.upVector.UkT(this.upVector)
        }
        _isSynchronized() {
          return this._isSynchronizedViewMatrix() && this._isSynchronizedProjectionMatrix()
        }
        _isSynchronizedViewMatrix() {
          return !!super._isSynchronized() && (this._cache.position.equals(this.position) && this._cache.upVector.equals(this.upVector) && this.isSynchronizedWithParent())
        }
        _isSynchronizedProjectionMatrix() {
          const kT = this.ignoreCameraMaxZ ? 0 : this.maxZ;
          let cT = this._cache.mode === this.mode && this._cache.minZ === this.minZ && this._cache.maxZ === kT;
          if (!cT) return !1;
          const lT = this.Dv();
          return this.mode === TT.PERSPECTIVE_CAMERA ? cT = this._cache.fov === this.fov && this._cache.fovMode === this.fovMode && this._cache.aspectRatio === lT.getAspectRatio(this) && this._cache.projectionPlaneTilt === this.projectionPlaneTilt : (cT = this._cache.orthoLeft === this.orthoLeft && this._cache.orthoRight === this.orthoRight && this._cache.orthoBottom === this.orthoBottom && this._cache.orthoTop === this.orthoTop && this._cache.renderWidth === lT.getRenderWidth() && this._cache.renderHeight === lT.getRenderHeight(), this.oblique && (cT = cT && this._cache.obliqueAngle === this.oblique.angle && this._cache.obliqueLength === this.oblique.length && this._cache.obliqueOffset === this.oblique.offset)), cT
        }
        attachControl(TT, kT) {}
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
          for (let kT = 0, cT = this._rigCameras.length; kT < cT; kT++) {
            const TT = this._rigCameras[kT],
              cT = TT._rigPostProcess;
            if (cT) {
              "pass" === cT.getEffectName() && (TT.isIntermediate = 0 === this._postProcesses.length), TT._postProcesses = this._postProcesses.slice(0).concat(cT), cT.markTextureDirty()
            } else TT._postProcesses = this._postProcesses.slice(0)
          }
        }
        attachPostProcess(TT) {
          let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          return !TT.isReusable() && this._postProcesses.indexOf(TT) > -1 ? (xT.e.Error("You're trying to reuse a post process not defined as reusable."), 0) : (null == kT || kT < 0 ? this._postProcesses.push(TT) : null === this._postProcesses[kT] ? this._postProcesses[kT] = TT : this._postProcesses.splice(kT, 0, TT), this._cascadePostProcessesToRigCams(), this._scene.prePassRenderer && this._scene.prePassRenderer.pTT(), this._postProcesses.indexOf(TT))
        }
        detachPostProcess(TT) {
          const kT = this._postProcesses.indexOf(TT); - 1 !== kT && (this._postProcesses[kT] = null), this._scene.prePassRenderer && this._scene.prePassRenderer.pTT(), this._cascadePostProcessesToRigCams()
        }
        getWorldMatrix() {
          return this._isSynchronizedViewMatrix() || this.getViewMatrix(), this._worldMatrix
        }
        _getViewMatrix() {
          return yT.d.Identity()
        }
        getViewMatrix(TT) {
          return !TT && this._isSynchronizedViewMatrix() || (this._hasMoved = !0, this.updateCache(), this._computedViewMatrix = this._getViewMatrix(), this._currentRenderId = this.NJ().getRenderId(), this._childUpdateId++, this._refreshFrustumPlanes = !0, this._cameraRigParams && this._cameraRigParams.vrPreViewMatrix && this._computedViewMatrix.multiplyToRef(this._cameraRigParams.vrPreViewMatrix, this._computedViewMatrix), this.parent && this.parent.onViewMatrixChangedObservable && this.parent.onViewMatrixChangedObservable.notifyObservers(this.parent), this.onViewMatrixChangedObservable.notifyObservers(this), this._computedViewMatrix.invertToRef(this._worldMatrix), this._worldMatrix.getTranslationToRef(this._globalPosition)), this._computedViewMatrix
        }
        freezeProjectionMatrix(TT) {
          this._doNotComputeProjectionMatrix = !0, void 0 !== TT && (this._projectionMatrix = TT)
        }
        unfreezeProjectionMatrix() {
          this._doNotComputeProjectionMatrix = !1
        }
        getProjectionMatrix(kT) {
          if (this._doNotComputeProjectionMatrix || !kT && this._isSynchronizedProjectionMatrix()) return this._projectionMatrix;
          const cT = this.ignoreCameraMaxZ ? 0 : this.maxZ;
          this._cache.mode = this.mode, this._cache.minZ = this.minZ, this._cache.maxZ = cT, this._refreshFrustumPlanes = !0;
          const lT = this.Dv(),
            MT = this.NJ(),
            KT = lT.QcT;
          if (this.mode === TT.PERSPECTIVE_CAMERA) {
            let kT;
            this._cache.fov = this.fov, this._cache.fovMode = this.fovMode, this._cache.aspectRatio = lT.getAspectRatio(this), this._cache.projectionPlaneTilt = this.projectionPlaneTilt, this.minZ <= 0 && (this.minZ = .1), kT = MT.useRightHandedSystem ? yT.d.PerspectiveFovRHToRef : yT.d.PerspectiveFovLHToRef, kT(this.fov, lT.getAspectRatio(this), KT ? cT : this.minZ, KT ? this.minZ : cT, this._projectionMatrix, this.fovMode === TT.FOVMODE_VERTICAL_FIXED, lT.isNDCHalfZRange, this.projectionPlaneTilt, KT)
          } else {
            const TT = lT.getRenderWidth() / 2,
              kT = lT.getRenderHeight() / 2;
            MT.useRightHandedSystem ? this.oblique ? yT.d.ObliqueOffCenterRHToRef(this.orthoLeft ?? -TT, this.orthoRight ?? TT, this.orthoBottom ?? -kT, this.orthoTop ?? kT, KT ? cT : this.minZ, KT ? this.minZ : cT, this.oblique.length, this.oblique.angle, this._computeObliqueDistance(this.oblique.offset), this._projectionMatrix, lT.isNDCHalfZRange) : yT.d.OrthoOffCenterRHToRef(this.orthoLeft ?? -TT, this.orthoRight ?? TT, this.orthoBottom ?? -kT, this.orthoTop ?? kT, KT ? cT : this.minZ, KT ? this.minZ : cT, this._projectionMatrix, lT.isNDCHalfZRange) : this.oblique ? yT.d.ObliqueOffCenterLHToRef(this.orthoLeft ?? -TT, this.orthoRight ?? TT, this.orthoBottom ?? -kT, this.orthoTop ?? kT, KT ? cT : this.minZ, KT ? this.minZ : cT, this.oblique.length, this.oblique.angle, this._computeObliqueDistance(this.oblique.offset), this._projectionMatrix, lT.isNDCHalfZRange) : yT.d.OrthoOffCenterLHToRef(this.orthoLeft ?? -TT, this.orthoRight ?? TT, this.orthoBottom ?? -kT, this.orthoTop ?? kT, KT ? cT : this.minZ, KT ? this.minZ : cT, this._projectionMatrix, lT.isNDCHalfZRange), this._cache.orthoLeft = this.orthoLeft, this._cache.orthoRight = this.orthoRight, this._cache.orthoBottom = this.orthoBottom, this._cache.orthoTop = this.orthoTop, this._cache.obliqueAngle = this.oblique?.angle, this._cache.obliqueLength = this.oblique?.length, this._cache.obliqueOffset = this.oblique?.offset, this._cache.renderWidth = lT.getRenderWidth(), this._cache.renderHeight = lT.getRenderHeight()
          }
          return this.onProjectionMatrixChangedObservable.notifyObservers(this), this._projectionMatrix
        }
        getTransformationMatrix() {
          return this._computedViewMatrix.multiplyToRef(this._projectionMatrix, this._transformMatrix), this._transformMatrix
        }
        _computeObliqueDistance(TT) {
          return (this.radius || (this.target ? yT.m.Distance(this.position, this.target) : this.position.length())) + TT
        }
        _updateFrustumPlanes() {
          this._refreshFrustumPlanes && (this.getTransformationMatrix(), this._frustumPlanes ? jT.c.GetPlanesToRef(this._transformMatrix, this._frustumPlanes) : this._frustumPlanes = jT.c.GetPlanes(this._transformMatrix), this._refreshFrustumPlanes = !1)
        }
        isInFrustum(TT) {
          let kT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._updateFrustumPlanes(), kT && this.rigCameras.length > 0) {
            let kT = !1;
            for (const cT of this.rigCameras) cT._updateFrustumPlanes(), kT = kT || TT.isInFrustum(cT._frustumPlanes);
            return kT
          }
          return TT.isInFrustum(this._frustumPlanes)
        }
        isCompletelyInFrustum(TT) {
          return this._updateFrustumPlanes(), TT.isCompletelyInFrustum(this._frustumPlanes)
        }
        getForwardRay() {
          throw (0, AT.i)("Ray")
        }
        getForwardRayToRef(TT) {
          throw (0, AT.i)("Ray")
        }
        dispose(kT) {
          let cT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          for (this.onViewMatrixChangedObservable.clear(), this.onProjectionMatrixChangedObservable.clear(), this.onAfterCheckInputsObservable.clear(), this.onRestoreStateObservable.clear(), this.inputs && this.inputs.clear(), this.NJ().stopAnimation(this), this.NJ().removeCamera(this); this._rigCameras.length > 0;) {
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
              const kT = this._postProcesses[TT];
              kT && kT.dispose(this)
            }
          }
          let lT = this.customRenderTargets.length;
          for (; --lT >= 0;) this.customRenderTargets[lT].dispose();
          this.customRenderTargets.length = 0, this._activeMeshes.dispose(), this.NJ().Dv().releaseRenderPassId(this.renderPassId), super.dispose(kT, cT)
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
        setCameraRigMode(kT, cT) {
          if (this.cameraRigMode !== kT) {
            for (; this._rigCameras.length > 0;) {
              const TT = this._rigCameras.pop();
              TT && TT.dispose()
            }
            if (this.cameraRigMode = kT, this._cameraRigParams = {}, this._cameraRigParams.interaxialDistance = cT.interaxialDistance || .0637, this._cameraRigParams.stereoHalfAngle = this._cameraRigParams.interaxialDistance / .0637 * (Math.PI / 180), this.cameraRigMode !== TT.RIG_MODE_NONE) {
              const TT = this.createRigCamera(this.name + "_L", 0);
              TT && (TT._isLeftCamera = !0);
              const kT = this.createRigCamera(this.name + "_R", 1);
              kT && (kT._isRightCamera = !0), TT && kT && (this._rigCameras.push(TT), this._rigCameras.push(kT))
            }
            this._setRigMode(cT), this._cascadePostProcessesToRigCams(), this.update()
          }
        }
        _setRigMode(TT) {}
        _getVRProjectionMatrix() {
          return yT.d.PerspectiveFovLHToRef(this._cameraRigParams.vrMetrics.aspectRatioFov, this._cameraRigParams.vrMetrics.aspectRatio, this.minZ, this.ignoreCameraMaxZ ? 0 : this.maxZ, this._cameraRigParams.vrWorkMatrix, !0, this.Dv().isNDCHalfZRange), this._cameraRigParams.vrWorkMatrix.multiplyToRef(this._cameraRigParams.vrHMatrix, this._projectionMatrix), this._projectionMatrix
        }
        setCameraRigParameter(TT, kT) {
          this._cameraRigParams || (this._cameraRigParams = {}), this._cameraRigParams[TT] = kT, "interaxialDistance" === TT && (this._cameraRigParams.stereoHalfAngle = kT / .0637 * (Math.PI / 180))
        }
        createRigCamera(TT, kT) {
          return null
        }
        _updateRigCameras() {
          for (let TT = 0; TT < this._rigCameras.length; TT++) this._rigCameras[TT].minZ = this.minZ, this._rigCameras[TT].maxZ = this.ignoreCameraMaxZ ? 0 : this.maxZ, this._rigCameras[TT].fov = this.fov, this._rigCameras[TT].upVector.UkT(this.upVector);
          this.cameraRigMode === TT.RIG_MODE_STEREOSCOPIC_ANAGLYPH && (this._rigCameras[0].viewport = this._rigCameras[1].viewport = this.viewport)
        }
        _setupInputs() {}
        serialize() {
          const TT = tT.d.Serialize(this);
          return TT.uniqueId = this.uniqueId, TT.type = this.getClassName(), this.parent && this.parent._serializeAsParent(TT), this.inputs && this.inputs.serialize(TT), tT.d.AppendSerializedAnimations(this, TT), TT.qt = this.serializeAnimationRanges(), TT.isEnabled = this.isEnabled(), TT
        }
        clone(kT) {
          let cT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const lT = tT.d.Clone(TT.GetConstructorFromName(this.getClassName(), kT, this.NJ(), this.interaxialDistance, this.isStereoscopicSideBySide), this);
          return lT.name = kT, lT.parent = cT, this.onClonedObservable.notifyObservers(lT), lT
        }
        rU(TT) {
          const kT = yT.m.Zero();
          return this.getDirectionToRef(TT, kT), kT
        }
        get absoluteRotation() {
          return this.getWorldMatrix().decompose(void 0, this._absoluteRotation), this._absoluteRotation
        }
        getDirectionToRef(TT, kT) {
          yT.m.TransformNormalToRef(TT, this.getWorldMatrix(), kT)
        }
        static GetConstructorFromName(kT, cT, lT) {
          let MT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
            KT = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
          const OT = fT.b.Construct(kT, cT, lT, {
            interaxial_distance: MT,
            isStereoscopicSideBySide: KT
          });
          return OT || (() => TT._CreateDefaultParsedCamera(cT, lT))
        }
        computeWorldMatrix() {
          return this.getWorldMatrix()
        }
        _calculateHandednessMultiplier() {
          let TT = this.NJ().useRightHandedSystem ? -1 : 1;
          return this.parent && this.parent._getWorldMatrixDeterminant() < 0 && (TT *= -1), TT
        }
      }, (() => {
        const KT = "function" === typeof Symbol && Symbol.metadata ? Object.create(HT[Symbol.metadata] ?? null) : void 0;
        kT = [(0, MT.F)("position")], cT = [(0, MT.F)("upVector")], IT = [(0, MT.J)()], hT = [(0, MT.J)()], NT = [(0, MT.J)()], QT = [(0, MT.J)()], ST = [(0, MT.J)()], DT = [(0, MT.J)()], aT = [(0, MT.J)()], FT = [(0, MT.J)()], rT = [(0, MT.J)()], PT = [(0, MT.J)()], wT = [(0, MT.J)()], mT = [(0, MT.J)()], bT = [(0, MT.J)()], zT = [(0, MT.J)()], JT = [(0, MT.J)()], oT = [(0, MT.J)()], (0, lT.e)(TT, null, IT, {
          kind: "getter",
          name: "orthoLeft",
          static: !1,
          private: !1,
          access: {
            has: TT => "orthoLeft" in TT,
            get: TT => TT.orthoLeft
          },
          metadata: KT
        }, null, eT), (0, lT.e)(TT, null, hT, {
          kind: "getter",
          name: "orthoRight",
          static: !1,
          private: !1,
          access: {
            has: TT => "orthoRight" in TT,
            get: TT => TT.orthoRight
          },
          metadata: KT
        }, null, eT), (0, lT.e)(TT, null, NT, {
          kind: "getter",
          name: "orthoBottom",
          static: !1,
          private: !1,
          access: {
            has: TT => "orthoBottom" in TT,
            get: TT => TT.orthoBottom
          },
          metadata: KT
        }, null, eT), (0, lT.e)(TT, null, QT, {
          kind: "getter",
          name: "orthoTop",
          static: !1,
          private: !1,
          access: {
            has: TT => "orthoTop" in TT,
            get: TT => TT.orthoTop
          },
          metadata: KT
        }, null, eT), (0, lT.e)(TT, null, rT, {
          kind: "getter",
          name: "inertia",
          static: !1,
          private: !1,
          access: {
            has: TT => "inertia" in TT,
            get: TT => TT.inertia
          },
          metadata: KT
        }, null, eT), (0, lT.e)(TT, null, PT, {
          kind: "getter",
          name: "mode",
          static: !1,
          private: !1,
          access: {
            has: TT => "mode" in TT,
            get: TT => TT.mode
          },
          metadata: KT
        }, null, eT), (0, lT.e)(null, null, kT, {
          kind: "field",
          name: "_position",
          static: !1,
          private: !1,
          access: {
            has: TT => "_position" in TT,
            get: TT => TT._position,
            set: (TT, kT) => {
              TT._position = kT
            }
          },
          metadata: KT
        }, GT, VT), (0, lT.e)(null, null, cT, {
          kind: "field",
          name: "_upVector",
          static: !1,
          private: !1,
          access: {
            has: TT => "_upVector" in TT,
            get: TT => TT._upVector,
            set: (TT, kT) => {
              TT._upVector = kT
            }
          },
          metadata: KT
        }, ET, ZT), (0, lT.e)(null, null, ST, {
          kind: "field",
          name: "fov",
          static: !1,
          private: !1,
          access: {
            has: TT => "fov" in TT,
            get: TT => TT.fov,
            set: (TT, kT) => {
              TT.fov = kT
            }
          },
          metadata: KT
        }, uT, XT), (0, lT.e)(null, null, DT, {
          kind: "field",
          name: "projectionPlaneTilt",
          static: !1,
          private: !1,
          access: {
            has: TT => "projectionPlaneTilt" in TT,
            get: TT => TT.projectionPlaneTilt,
            set: (TT, kT) => {
              TT.projectionPlaneTilt = kT
            }
          },
          metadata: KT
        }, dT, LT), (0, lT.e)(null, null, aT, {
          kind: "field",
          name: "minZ",
          static: !1,
          private: !1,
          access: {
            has: TT => "minZ" in TT,
            get: TT => TT.minZ,
            set: (TT, kT) => {
              TT.minZ = kT
            }
          },
          metadata: KT
        }, RT, gT), (0, lT.e)(null, null, FT, {
          kind: "field",
          name: "maxZ",
          static: !1,
          private: !1,
          access: {
            has: TT => "maxZ" in TT,
            get: TT => TT.maxZ,
            set: (TT, kT) => {
              TT.maxZ = kT
            }
          },
          metadata: KT
        }, UT, YT), (0, lT.e)(null, null, wT, {
          kind: "field",
          name: "layerMask",
          static: !1,
          private: !1,
          access: {
            has: TT => "layerMask" in TT,
            get: TT => TT.layerMask,
            set: (TT, kT) => {
              TT.layerMask = kT
            }
          },
          metadata: KT
        }, BT, WT), (0, lT.e)(null, null, mT, {
          kind: "field",
          name: "fovMode",
          static: !1,
          private: !1,
          access: {
            has: TT => "fovMode" in TT,
            get: TT => TT.fovMode,
            set: (TT, kT) => {
              TT.fovMode = kT
            }
          },
          metadata: KT
        }, nT, pT), (0, lT.e)(null, null, bT, {
          kind: "field",
          name: "cameraRigMode",
          static: !1,
          private: !1,
          access: {
            has: TT => "cameraRigMode" in TT,
            get: TT => TT.cameraRigMode,
            set: (TT, kT) => {
              TT.cameraRigMode = kT
            }
          },
          metadata: KT
        }, iT, qT), (0, lT.e)(null, null, zT, {
          kind: "field",
          name: "interaxialDistance",
          static: !1,
          private: !1,
          access: {
            has: TT => "interaxialDistance" in TT,
            get: TT => TT.interaxialDistance,
            set: (TT, kT) => {
              TT.interaxialDistance = kT
            }
          },
          metadata: KT
        }, sT, Tk), (0, lT.e)(null, null, JT, {
          kind: "field",
          name: "isStereoscopicSideBySide",
          static: !1,
          private: !1,
          access: {
            has: TT => "isStereoscopicSideBySide" in TT,
            get: TT => TT.isStereoscopicSideBySide,
            set: (TT, kT) => {
              TT.isStereoscopicSideBySide = kT
            }
          },
          metadata: KT
        }, kk, ck), (0, lT.e)(null, null, oT, {
          kind: "field",
          name: "ignoreCameraMaxZ",
          static: !1,
          private: !1,
          access: {
            has: TT => "ignoreCameraMaxZ" in TT,
            get: TT => TT.ignoreCameraMaxZ,
            set: (TT, kT) => {
              TT.ignoreCameraMaxZ = kT
            }
          },
          metadata: KT
        }, lk, Mk), KT && Object.defineProperty(TT, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: KT
        })
      })(), TT._CreateDefaultParsedCamera = (TT, kT) => {
        throw (0, AT.i)("UniversalCamera")
      }, TT.PERSPECTIVE_CAMERA = 0, TT.ORTHOGRAPHIC_CAMERA = 1, TT.FOVMODE_VERTICAL_FIXED = 0, TT.FOVMODE_HORIZONTAL_FIXED = 1, TT.RIG_MODE_NONE = 0, TT.RIG_MODE_STEREOSCOPIC_ANAGLYPH = 10, TT.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL = 11, TT.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED = 12, TT.RIG_MODE_STEREOSCOPIC_OVERUNDER = 13, TT.RIG_MODE_STEREOSCOPIC_INTERLACED = 14, TT.RIG_MODE_VR = 20, TT.RIG_MODE_CUSTOM = 22, TT.ForceAttachControlToAlwaysPreventDefault = !1, TT
    })();

    function NT(TT, kT) {
      const cT = TT.type,
        lT = hT.GetConstructorFromName(cT, TT.name, kT, TT.interaxial_distance, TT.isStereoscopicSideBySide),
        MT = tT.d.Parse(lT, TT, kT);
      if (void 0 !== TT.parentId && (MT._waitingParentId = TT.parentId), void 0 !== TT.parentInstanceIndex && (MT._waitingParentInstanceIndex = TT.parentInstanceIndex), MT.inputs && (MT.inputs.parse(TT), MT._setupInputs()), TT.upVector && (MT.upVector = yT.m.FromArray(TT.upVector)), MT.setPosition && (MT.position.I5(0, 0, 0), MT.setPosition(yT.m.FromArray(TT.position))), TT.target && MT.setTarget && MT.setTarget(yT.m.FromArray(TT.target)), TT.cameraRigMode) {
        const kT = TT.interaxial_distance ? {
          interaxialDistance: TT.interaxial_distance
        } : {};
        MT.setCameraRigMode(TT.cameraRigMode, kT)
      }
      if (TT.animations) {
        for (let kT = 0; kT < TT.animations.length; kT++) {
          const cT = TT.animations[kT],
            lT = (0, IT.e)("BABYLON.Animation");
          lT && MT.animations.push(lT.Parse(cT))
        }
        fT.b.ParseAnimationRanges(MT, TT, kT)
      }
      return TT.autoAnimate && kT.beginAnimation(MT, TT.autoAnimateFrom, TT.autoAnimateTo, TT.autoAnimateLoop, TT.autoAnimateSpeed || 1), void 0 !== TT.isEnabled && MT.PD(TT.isEnabled), MT
    }
    let QT = !1;

    function ST() {
      QT || (QT = !0, hT.Parse = NT)
    }
  },
  39851: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => MT
    });
    var lT = cT(36892);
    class MT {
      constructor(TT, kT, cT) {
        this._cameraPosition = kT, this._behavior = cT, this.activeInput = !1, this.speed = 1, this.lL = 1, this.panSpeed = 1, this.rotationXSpeed = 1, this.rotationYSpeed = 1, this._zoomSpeedMultiplier = 1, this._panSpeedMultiplier = 1, this.zoomInertia = .9, this.panInertia = .9, this.rotationInertia = .9, this.zoomAccumulatedPixels = 0, this.panAccumulatedPixels = new lT.m, this.rotationAccumulatedPixels = new lT.m, this.zoomDeltaCurrentFrame = 0, this.panDeltaCurrentFrame = lT.m.Zero(), this.rotationDeltaCurrentFrame = lT.m.Zero(), this._zoomVelocity = 0, this._panVelocity = new lT.m, this.referenceFrameRate = 60, this._rotationVelocity = new lT.m, this._prevFrameTimeMs = 0, this._scene = TT
      }
      computeCurrentFrameDeltas() {
        const TT = this._scene.Dv().getDeltaTime(),
          kT = this._getEffectiveDeltaMs(TT);
        if (0 === this._zoomVelocity && 0 === this.zoomAccumulatedPixels && 0 === this._panVelocity.x && 0 === this._panVelocity.y && 0 === this._panVelocity.z && 0 === this.panAccumulatedPixels.x && 0 === this.panAccumulatedPixels.y && 0 === this.panAccumulatedPixels.z && 0 === this._rotationVelocity.x && 0 === this._rotationVelocity.y && 0 === this._rotationVelocity.z && 0 === this.rotationAccumulatedPixels.x && 0 === this.rotationAccumulatedPixels.y && 0 === this.rotationAccumulatedPixels.z && !this.activeInput) return this.panDeltaCurrentFrame.Xs(0), this.rotationDeltaCurrentFrame.Xs(0), this.zoomDeltaCurrentFrame = 0, void(TT > 0 && (this._prevFrameTimeMs = TT));
        this.panDeltaCurrentFrame.Xs(0), this.rotationDeltaCurrentFrame.Xs(0), this.zoomDeltaCurrentFrame = 0;
        (this.panAccumulatedPixels.lengthSquared() > 0 || this.rotationAccumulatedPixels.lengthSquared() > 0 || 0 !== this.zoomAccumulatedPixels) && this._behavior?.isInterpolating && this._behavior.stopAllAnimations(), this._panVelocity.I5(this._calculateCurrentVelocity(this._panVelocity.x, this.panAccumulatedPixels.x, this.panInertia), this._calculateCurrentVelocity(this._panVelocity.y, this.panAccumulatedPixels.y, this.panInertia), this._calculateCurrentVelocity(this._panVelocity.z, this.panAccumulatedPixels.z, this.panInertia)), this._panVelocity.scaleToRef(this.speed * this.panSpeed * this._panSpeedMultiplier * kT, this.panDeltaCurrentFrame), this._rotationVelocity.I5(this._calculateCurrentVelocity(this._rotationVelocity.x, this.rotationAccumulatedPixels.x, this.rotationInertia), this._calculateCurrentVelocity(this._rotationVelocity.y, this.rotationAccumulatedPixels.y, this.rotationInertia), this._calculateCurrentVelocity(this._rotationVelocity.z, this.rotationAccumulatedPixels.z, this.rotationInertia)), this.rotationDeltaCurrentFrame.I5(this._rotationVelocity.x * this.speed * this.rotationXSpeed * kT, this._rotationVelocity.y * this.speed * this.rotationYSpeed * kT, 0), this._zoomVelocity = this._calculateCurrentVelocity(this._zoomVelocity, this.zoomAccumulatedPixels, this.zoomInertia), this.zoomDeltaCurrentFrame = this._zoomVelocity * (this.speed * this.lL * this._zoomSpeedMultiplier) * kT, TT > 0 && (this._prevFrameTimeMs = TT), this.zoomAccumulatedPixels = 0, this.panAccumulatedPixels.Xs(0), this.rotationAccumulatedPixels.Xs(0), this.activeInput = !1
      }
      resetRotationVelocity() {
        this._rotationVelocity.Xs(0), this.rotationAccumulatedPixels.Xs(0)
      }
      resetPanVelocity() {
        this._panVelocity.Xs(0), this.panAccumulatedPixels.Xs(0)
      }
      resetZoomVelocity() {
        this._zoomVelocity = 0, this.zoomAccumulatedPixels = 0
      }
      get isInterpolating() {
        return !!this._behavior?.isInterpolating
      }
      getFrameIndependentDecay(TT) {
        const kT = this._scene.Dv().getDeltaTime(),
          cT = this._getEffectiveDeltaMs(kT),
          lT = 1e3 / this.referenceFrameRate;
        return Math.pow(TT, cT / lT)
      }
      getFrameIndependentInputScale(TT) {
        const kT = 1 - TT;
        if (kT <= 0) return 1;
        return (1 - this.getFrameIndependentDecay(TT)) / kT
      }
      _getEffectiveDeltaMs(TT) {
        return TT > 0 ? TT : this._prevFrameTimeMs > 0 ? this._prevFrameTimeMs : 1e3 / this.referenceFrameRate
      }
      _calculateCurrentVelocity(TT, kT, cT) {
        let lT = TT;
        const MT = this._scene.Dv().getDeltaTime(),
          KT = this._getEffectiveDeltaMs(MT);
        if (0 === KT) return lT;
        const OT = this.getFrameIndependentDecay(cT);
        if (lT *= OT, 0 !== kT || this.activeInput) {
          const TT = 1 - cT;
          lT += kT / KT * (TT > 0 ? (1 - OT) / TT : 1)
        } else Math.abs(lT) < 1e-6 && (lT = 0);
        return lT
      }
    }
  },
  39854: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => lT
    });
    class lT {
      constructor(TT, kT) {
        this.inputMap = [], this.handlers = TT, this._createDefaultEntries = kT, this.resetInputMap()
      }
      resolveInteraction(TT, kT) {
        for (const cT of this.inputMap)
          if (cT.source === TT && this._entryMatches(cT, kT)) return cT;
        return null
      }
      resetInputMap() {
        this.inputMap = this._createDefaultEntries?.() ?? []
      }
      getEntry(TT, kT, cT) {
        const lT = this.inputMap;
        for (let MT = 0; MT < lT.length; MT++) {
          const KT = lT[MT];
          if (KT.source === TT && KT.interaction === kT && this._entryConditionsMatch(KT, cT)) return KT
        }
      }
      getEntries(TT, kT, cT) {
        const lT = [],
          MT = this.inputMap;
        for (let KT = 0; KT < MT.length; KT++) {
          const OT = MT[KT];
          OT.source === TT && OT.interaction === kT && this._entryConditionsMatch(OT, cT) && lT.push(OT)
        }
        return lT
      }
      addEntry(TT) {
        const kT = this._entrySpecificity(TT);
        let cT = this.inputMap.length;
        for (let lT = 0; lT < this.inputMap.length; lT++)
          if (this._entrySpecificity(this.inputMap[lT]) < kT) {
            cT = lT;
            break
          } this.inputMap.splice(cT, 0, TT)
      }
      setInteraction(TT, kT, cT) {
        const lT = this.resolveInteraction(TT, kT);
        return lT && this._entryCoversAllConditionsOf(lT, kT) ? (lT.interaction = cT, !0) : (this.addEntry({
          source: TT,
          ...kT ?? {},
          interaction: cT
        }), !0)
      }
      _entryCoversAllConditionsOf(TT, kT) {
        if (!kT) return !0;
        const cT = TT;
        for (const lT of Object.keys(kT)) {
          const TT = kT[lT];
          if (void 0 !== TT)
            if ("modifiers" === lT) {
              const kT = cT.modifiers ?? {};
              for (const cT of Object.keys(TT))
                if (void 0 !== TT[cT] && void 0 === kT[cT]) return !1
            } else if (void 0 === cT[lT]) return !1
        }
        return !0
      }
      setInteractions(TT, kT, cT) {
        let lT = 0;
        const MT = this.inputMap;
        for (let KT = 0; KT < MT.length; KT++) {
          const OT = MT[KT];
          OT.source === TT && this._entryMatches(OT, kT) && (OT.interaction = cT, lT++)
        }
        return lT
      }
      _entryMatches(TT, kT) {
        switch (TT.source) {
          case "pointer":
            return (void 0 === TT.button || TT.button === kT?.button) && this._matchModifiers(TT.modifiers, kT?.modifiers);
          case "wheel":
            return this._matchModifiers(TT.modifiers, kT?.modifiers);
          case "touch":
            return void 0 === TT.touchCount || TT.touchCount === kT?.touchCount;
          case "keyboard":
            return (void 0 === TT.key || (Array.isArray(TT.key) ? -1 !== TT.key.indexOf(kT?.key ?? -1) : TT.key === kT?.key)) && this._matchModifiers(TT.modifiers, kT?.modifiers)
        }
      }
      _entryConditionsMatch(TT, kT) {
        if (!kT) return !0;
        switch (TT.source) {
          case "pointer":
            return (!("button" in kT) || TT.button === kT.button) && (!("modifiers" in kT) || this._entryModifiersMatch(TT.modifiers, kT.modifiers));
          case "wheel":
            return !("modifiers" in kT) || this._entryModifiersMatch(TT.modifiers, kT.modifiers);
          case "touch":
            return !("touchCount" in kT) || TT.touchCount === kT.touchCount;
          case "keyboard":
            if ("key" in kT) {
              if (void 0 === TT.key) return void 0 === kT.key;
              if (void 0 === kT.key || (Array.isArray(TT.key) ? -1 === TT.key.indexOf(kT.key) : TT.key !== kT.key)) return !1
            }
            return !("modifiers" in kT) || this._entryModifiersMatch(TT.modifiers, kT.modifiers)
        }
      }
      _entrySpecificity(TT) {
        let kT = 0;
        return "button" in TT && void 0 !== TT.button && kT++, "key" in TT && void 0 !== TT.key && kT++, "touchCount" in TT && void 0 !== TT.touchCount && kT++, "modifiers" in TT && TT.modifiers && kT++, kT
      }
      _matchModifiers(TT, kT) {
        return !TT || (void 0 === TT.ctrl || TT.ctrl === (kT?.ctrl ?? !1)) && ((void 0 === TT.shift || TT.shift === (kT?.shift ?? !1)) && (void 0 === TT.alt || TT.alt === (kT?.alt ?? !1)))
      }
      _entryModifiersMatch(TT, kT) {
        if (!kT) return !TT;
        return void 0 !== kT.ctrl || void 0 !== kT.shift || void 0 !== kT.alt ? (void 0 === kT.ctrl || TT?.ctrl === kT.ctrl) && ((void 0 === kT.shift || TT?.shift === kT.shift) && (void 0 === kT.alt || TT?.alt === kT.alt)) : !TT || void 0 === TT.ctrl && void 0 === TT.shift && void 0 === TT.alt
      }
    }
  },
  39839: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => NT,
      g: () => tT
    });
    var lT = cT(39620),
      MT = cT(39624),
      KT = cT(39841),
      OT = cT(36892),
      yT = cT(36901),
      fT = cT(39849),
      xT = cT(39846),
      IT = cT(39851),
      AT = cT(39854);
    class CT extends IT.b {
      constructor(TT, kT, cT) {
        super(TT, kT, cT), this.input = new AT.c({
          translate: (TT, kT, cT) => {
            this.panAccumulatedPixels.x += TT, this.panAccumulatedPixels.y += kT, this.panAccumulatedPixels.z += cT
          },
          rotate: (TT, kT) => {
            this.rotationAccumulatedPixels.x += TT, this.rotationAccumulatedPixels.y += kT
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
    const jT = OT.d.Zero(),
      vT = OT.f.Identity();
    let tT = (() => {
        var TT;
        let kT, cT, xT, IT, AT = KT.c,
          tT = [],
          hT = [],
          NT = [],
          QT = [],
          ST = [],
          DT = [],
          aT = [],
          FT = [];
        return TT = class extends AT {
          get inertia() {
            return this._targetInertia
          }
          set inertia(TT) {
            this._targetInertia = TT, this.movement && (this.movement.panInertia = TT, this.movement.rotationInertia = TT)
          }
          constructor(TT, kT, cT) {
            super(TT, kT, cT, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]), this.cameraDirection = new OT.m(0, 0, 0), this.cameraRotation = new OT.i(0, 0), this._targetInertia = .9, this.updateUpVectorFromRotation = (0, lT.h)(this, tT, !1), this.rotation = ((0, lT.h)(this, hT), (0, lT.h)(this, NT, void 0)), this.rotationQuaternion = (0, lT.h)(this, QT), this.speed = (0, lT.h)(this, ST, 2), this.noRotationConstraint = ((0, lT.h)(this, DT), !1), this.invertRotation = !1, this.inverseRotationSpeed = .2, this._panningEpsilon = yT.b, this._rotationEpsilon = yT.b, this.lockedTarget = (0, lT.h)(this, aT, null), this._currentTarget = ((0, lT.h)(this, FT), OT.m.Zero()), this._initialFocalDistance = 1, this._viewMatrix = OT.d.Zero(), this._cameraTransformMatrix = OT.d.Zero(), this._cameraRotationMatrix = OT.d.Zero(), this._transformedReferencePoint = OT.m.Zero(), this._deferredPositionUpdate = new OT.m, this._deferredRotationQuaternionUpdate = new OT.f, this._deferredRotationUpdate = new OT.m, this._deferredUpdated = !1, this._deferOnly = !1, this._cachedRotationZ = 0, this._cachedQuaternionRotationZ = 0, this._referencePoint = OT.m.Forward(this.NJ().useRightHandedSystem), this.rotation = new OT.m(0, this.NJ().useRightHandedSystem ? Math.PI : 0, 0), this.movement = new CT(this.NJ(), this.position), this.movement.panInertia = this.inertia, this.movement.rotationInertia = this.inertia
          }
          getFrontPosition(TT) {
            this.getWorldMatrix();
            const kT = OT.h.Fv[0],
              cT = OT.h.Fv[1];
            return cT.set(0, 0, this._scene.useRightHandedSystem ? -1 : 1), this.getDirectionToRef(cT, kT), kT.scaleInPlace(TT), this.globalPosition.add(kT)
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
            return !!super._restoreStateValues() && (this.position = this._storedPosition.clone(), this.rotation = this._storedRotation.clone(), this.rotationQuaternion && this._storedRotationQuaternion && (this.rotationQuaternion = this._storedRotationQuaternion.clone()), this.cameraDirection.I5(0, 0, 0), this.cameraRotation.I5(0, 0), !0)
          }
          _initCache() {
            super._initCache(), this._cache.lockedTarget = new OT.m(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.rotation = new OT.m(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.rotationQuaternion = new OT.f(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE)
          }
          _updateCache(TT) {
            TT || super._updateCache();
            const kT = this._getLockedTargetPosition();
            kT ? this._cache.lockedTarget ? this._cache.lockedTarget.UkT(kT) : this._cache.lockedTarget = kT.clone() : this._cache.lockedTarget = null, this._cache.rotation.UkT(this.rotation), this.rotationQuaternion && this._cache.rotationQuaternion.UkT(this.rotationQuaternion)
          }
          _isSynchronizedViewMatrix() {
            if (!super._isSynchronizedViewMatrix()) return !1;
            const TT = this._getLockedTargetPosition();
            return (this._cache.lockedTarget ? this._cache.lockedTarget.equals(TT) : !TT) && (this.rotationQuaternion ? this.rotationQuaternion.equals(this._cache.rotationQuaternion) : this._cache.rotation.equals(this.rotation))
          }
          _computeLocalCameraSpeed() {
            const TT = this.Dv();
            return this.speed * Math.sqrt(TT.getDeltaTime() / (100 * TT.getFps()))
          }
          setTarget(TT) {
            this.upVector.normalize(), this._initialFocalDistance = TT.subtract(this.position).length(), this.position.z === TT.z && (this.position.z += yT.b), this._referencePoint.normalize().scaleInPlace(this._initialFocalDistance), this.NJ().useRightHandedSystem ? OT.d.LookAtRHToRef(this.position, TT, OT.m.UpReadOnly, jT) : OT.d.LookAtLHToRef(this.position, TT, OT.m.UpReadOnly, jT), jT.invert();
            const kT = this.rotationQuaternion || vT;
            OT.f.FromRotationMatrixToRef(jT, kT), kT.toEulerAnglesToRef(this.rotation), this.rotation.z = 0
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
            if (this.parent) return this.parent.getWorldMatrix().invertToRef(OT.h.Matrix[0]), OT.m.TransformNormalToRef(this.cameraDirection, OT.h.Matrix[0], OT.h.Fv[0]), this._deferredPositionUpdate.addInPlace(OT.h.Fv[0]), void(this._deferOnly ? this._deferredUpdated = !0 : this.position.UkT(this._deferredPositionUpdate));
            this._deferredPositionUpdate.addInPlace(this.cameraDirection), this._deferOnly ? this._deferredUpdated = !0 : this.position.UkT(this._deferredPositionUpdate)
          }
          _checkInputs() {
            const TT = this.movement,
              kT = 0 !== this.cameraDirection.x || 0 !== this.cameraDirection.y || 0 !== this.cameraDirection.z;
            TT.panAccumulatedPixels.addInPlace(this.cameraDirection), TT.rotationAccumulatedPixels.x += this.cameraRotation.x, TT.rotationAccumulatedPixels.y += this.cameraRotation.y, TT.computeCurrentFrameDeltas(), this.cameraDirection.UkT(TT.panDeltaCurrentFrame), this.cameraRotation.set(TT.rotationDeltaCurrentFrame.x, TT.rotationDeltaCurrentFrame.y);
            const cT = this.speed * this._panningEpsilon;
            !kT && Math.abs(this.cameraDirection.x) < cT && Math.abs(this.cameraDirection.y) < cT && Math.abs(this.cameraDirection.z) < cT && (this.cameraDirection.Xs(0), TT.resetPanVelocity());
            const lT = this.invertRotation ? -this.inverseRotationSpeed : 1,
              MT = this._decideIfNeedsToMove(),
              KT = !(!this.cameraRotation.x && !this.cameraRotation.y);
            if (this._deferredUpdated = !1, this._deferredRotationUpdate.UkT(this.rotation), this._deferredPositionUpdate.UkT(this.position), this.rotationQuaternion && this._deferredRotationQuaternionUpdate.UkT(this.rotationQuaternion), MT && this._updatePosition(), KT) {
              if (this.rotationQuaternion && this.rotationQuaternion.toEulerAnglesToRef(this._deferredRotationUpdate), this._deferredRotationUpdate.x += this.cameraRotation.x * lT, this._deferredRotationUpdate.y += this.cameraRotation.y * lT, !this.noRotationConstraint) {
                const TT = 1.570796;
                this._deferredRotationUpdate.x > TT && (this._deferredRotationUpdate.x = TT), this._deferredRotationUpdate.x < -TT && (this._deferredRotationUpdate.x = -TT)
              }
              if (this._deferOnly ? this._deferredUpdated = !0 : this.rotation.UkT(this._deferredRotationUpdate), this.rotationQuaternion) {
                this._deferredRotationUpdate.lengthSquared() && (OT.f.RotationYawPitchRollToRef(this._deferredRotationUpdate.y, this._deferredRotationUpdate.x, this._deferredRotationUpdate.z, this._deferredRotationQuaternionUpdate), this._deferOnly ? this._deferredUpdated = !0 : this.rotationQuaternion.UkT(this._deferredRotationQuaternionUpdate))
              }
            }
            this.cameraDirection.Xs(0), this.cameraRotation.set(0, 0), super._checkInputs()
          }
          _updateCameraRotationMatrix() {
            this.rotationQuaternion ? this.rotationQuaternion.toRotationMatrix(this._cameraRotationMatrix) : OT.d.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, this.rotation.z, this._cameraRotationMatrix)
          }
          _rotateUpVectorWithCameraRotationMatrix() {
            return OT.m.TransformNormalToRef(OT.m.UpReadOnly, this._cameraRotationMatrix, this.upVector), this
          }
          _getViewMatrix() {
            return this.lockedTarget && this.setTarget(this._getLockedTargetPosition()), this._updateCameraRotationMatrix(), this.rotationQuaternion && this._cachedQuaternionRotationZ != this.rotationQuaternion.z ? (this._rotateUpVectorWithCameraRotationMatrix(), this._cachedQuaternionRotationZ = this.rotationQuaternion.z) : this._cachedRotationZ !== this.rotation.z && (this._rotateUpVectorWithCameraRotationMatrix(), this._cachedRotationZ = this.rotation.z), OT.m.TransformCoordinatesToRef(this._referencePoint, this._cameraRotationMatrix, this._transformedReferencePoint), this.position.addToRef(this._transformedReferencePoint, this._currentTarget), this.updateUpVectorFromRotation && (this.rotationQuaternion ? fT.c.Y.rotateByQuaternionToRef(this.rotationQuaternion, this.upVector) : (OT.f.FromEulerVectorToRef(this.rotation, vT), fT.c.Y.rotateByQuaternionToRef(vT, this.upVector))), this._computeViewMatrix(this.position, this._currentTarget, this.upVector), this._viewMatrix
          }
          _computeViewMatrix(TT, kT, cT) {
            if (this.NJ().useRightHandedSystem ? OT.d.LookAtRHToRef(TT, kT, cT, this._viewMatrix) : OT.d.LookAtLHToRef(TT, kT, cT, this._viewMatrix), this.parent) {
              const TT = this.parent.getWorldMatrix();
              this._viewMatrix.invert(), this._viewMatrix.multiplyToRef(TT, this._viewMatrix), this._viewMatrix.invert(), this._markSyncedWithParent()
            }
          }
          createRigCamera(kT, cT) {
            if (this.cameraRigMode !== KT.c.RIG_MODE_NONE) {
              const cT = new TT(kT, this.position.clone(), this.NJ());
              return cT.isRigCamera = !0, cT.rigParent = this, this.cameraRigMode === KT.c.RIG_MODE_VR && (this.rotationQuaternion || (this.rotationQuaternion = new OT.f), cT._cameraRigParams = {}, cT.rotationQuaternion = new OT.f), cT.mode = this.mode, cT.orthoLeft = this.orthoLeft, cT.orthoRight = this.orthoRight, cT.orthoTop = this.orthoTop, cT.orthoBottom = this.orthoBottom, cT
            }
            return null
          }
          _updateRigCameras() {
            const TT = this._rigCameras[0],
              kT = this._rigCameras[1];
            switch (this.computeWorldMatrix(), this.cameraRigMode) {
              case KT.c.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case KT.c.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case KT.c.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
              case KT.c.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case KT.c.RIG_MODE_STEREOSCOPIC_INTERLACED: {
                const cT = this.cameraRigMode === KT.c.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED ? 1 : -1,
                  lT = this.cameraRigMode === KT.c.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED ? -1 : 1;
                this._getRigCamPositionAndTarget(this._cameraRigParams.stereoHalfAngle * cT, TT), this._getRigCamPositionAndTarget(this._cameraRigParams.stereoHalfAngle * lT, kT);
                break
              }
              case KT.c.RIG_MODE_VR:
                TT.rotationQuaternion && kT.rotationQuaternion && this.rotationQuaternion ? (TT.rotationQuaternion.UkT(this.rotationQuaternion), kT.rotationQuaternion.UkT(this.rotationQuaternion)) : (TT.rotation.UkT(this.rotation), kT.rotation.UkT(this.rotation)), TT.position.UkT(this.position), kT.position.UkT(this.position)
            }
            super._updateRigCameras()
          }
          _getRigCamPositionAndTarget(kT, cT) {
            this.getTarget().subtractToRef(this.position, TT._TargetFocalPoint), TT._TargetFocalPoint.normalize().scaleInPlace(this._initialFocalDistance);
            const lT = TT._TargetFocalPoint.addInPlace(this.position);
            OT.d.TranslationToRef(-lT.x, -lT.y, -lT.z, TT._TargetTransformMatrix), TT._TargetTransformMatrix.multiplyToRef(OT.d.RotationAxis(cT.upVector, kT), TT._RigCamTransformMatrix), OT.d.TranslationToRef(lT.x, lT.y, lT.z, TT._TargetTransformMatrix), TT._RigCamTransformMatrix.multiplyToRef(TT._TargetTransformMatrix, TT._RigCamTransformMatrix), OT.m.TransformCoordinatesToRef(this.position, TT._RigCamTransformMatrix, cT.position), cT.setTarget(lT)
          }
          getClassName() {
            return "TargetCamera"
          }
        }, (() => {
          const KT = "function" === typeof Symbol && Symbol.metadata ? Object.create(AT[Symbol.metadata] ?? null) : void 0;
          kT = [(0, MT.J)()], cT = [(0, MT.F)()], xT = [(0, MT.J)()], IT = [(0, MT.t)("lockedTargetId")], (0, lT.e)(null, null, kT, {
            kind: "field",
            name: "updateUpVectorFromRotation",
            static: !1,
            private: !1,
            access: {
              has: TT => "updateUpVectorFromRotation" in TT,
              get: TT => TT.updateUpVectorFromRotation,
              set: (TT, kT) => {
                TT.updateUpVectorFromRotation = kT
              }
            },
            metadata: KT
          }, tT, hT), (0, lT.e)(null, null, cT, {
            kind: "field",
            name: "rotation",
            static: !1,
            private: !1,
            access: {
              has: TT => "rotation" in TT,
              get: TT => TT.rotation,
              set: (TT, kT) => {
                TT.rotation = kT
              }
            },
            metadata: KT
          }, NT, QT), (0, lT.e)(null, null, xT, {
            kind: "field",
            name: "speed",
            static: !1,
            private: !1,
            access: {
              has: TT => "speed" in TT,
              get: TT => TT.speed,
              set: (TT, kT) => {
                TT.speed = kT
              }
            },
            metadata: KT
          }, ST, DT), (0, lT.e)(null, null, IT, {
            kind: "field",
            name: "lockedTarget",
            static: !1,
            private: !1,
            access: {
              has: TT => "lockedTarget" in TT,
              get: TT => TT.lockedTarget,
              set: (TT, kT) => {
                TT.lockedTarget = kT
              }
            },
            metadata: KT
          }, aT, FT), KT && Object.defineProperty(TT, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: KT
          })
        })(), TT._RigCamTransformMatrix = new OT.d, TT._TargetTransformMatrix = new OT.d, TT._TargetFocalPoint = new OT.m, TT
      })(),
      hT = !1;

    function NT() {
      hT || (hT = !0, xT.b.AddNodeConstructor("TargetCamera", ((TT, kT) => () => new tT(TT, OT.m.Zero(), kT))))
    }
  },
  39579: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => KT
    });
    var lT = cT(39516);
    let MT = !1;

    function KT() {
      MT || (MT = !0, lT.d.prototype.getInputElement = function() {
        return this._renderingCanvas
      }, lT.d.prototype.getRenderingCanvasClientRect = function() {
        return this._renderingCanvas ? this._renderingCanvas.getBoundingClientRect() : null
      }, lT.d.prototype.getInputElementClientRect = function() {
        return this._renderingCanvas ? this.getInputElement().getBoundingClientRect() : null
      }, lT.d.prototype.getAspectRatio = function(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const cT = TT.viewport;
        return this.getRenderWidth(kT) * cT.width / (this.getRenderHeight(kT) * cT.height)
      }, lT.d.prototype.getScreenAspectRatio = function() {
        return this.getRenderWidth(!0) / this.getRenderHeight(!0)
      }, lT.d.prototype._verifyPointerLock = function() {
        this._onPointerLockChange?.()
      })
    }
  },
  39657: (TT, kT, cT) => {
    var lT = cT(39516),
      MT = cT(39666);
    let KT = !1;
    KT || (KT = !0, (0, MT.q)(), lT.d.prototype._loadFileAsync = async function(TT, kT, cT) {
      return await new Promise(((lT, MT) => {
        this._loadFile(TT, (TT => {
          lT(TT)
        }), void 0, kT, cT, ((TT, kT) => {
          MT(kT)
        }))
      }))
    })
  },
  39651: (TT, kT, cT) => {
    (0, cT(39583).c)()
  },
  39583: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => KT
    });
    var lT = cT(39516);
    let MT = !1;

    function KT() {
      MT || (MT = !0, lT.d.prototype.getRenderPassNames = function() {
        return this._renderPassNames
      }, lT.d.prototype.getCurrentRenderPassName = function() {
        return this._renderPassNames[this.currentRenderPassId]
      }, lT.d.prototype.createRenderPassId = function(TT) {
        const kT = ++lT.d._RenderPassIdCounter;
        return this._renderPassNames[kT] = TT ?? "NONAME", kT
      }, lT.d.prototype.releaseRenderPassId = function(TT) {
        this._renderPassNames[TT] = void 0;
        for (let kT = 0; kT < this.scenes.length; ++kT) {
          const cT = this.scenes[kT];
          for (let kT = 0; kT < cT.meshes.length; ++kT) {
            const lT = cT.meshes[kT];
            if (lT._releaseRenderPassId(TT), lT.kF)
              for (let kT = 0; kT < lT.kF.length; ++kT) {
                lT.kF[kT]._removeDrawWrapper(TT)
              }
          }
        }
        this._onReleaseRenderPassObservable?.notifyObservers(TT)
      })
    }
  },
  39703: (TT, kT, cT) => {
    var lT = cT(39709),
      MT = cT(39516);
    let KT = !1;
    KT || (KT = !0, MT.d.GetCompatibleTextureLoader = lT.d)
  },
  39586: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => KT
    });
    var lT = cT(39463);
    let MT = !1;

    function KT() {
      MT || (MT = !0, lT.ThinEngine.prototype.setAlphaMode = function(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this._alphaMode[cT] === TT) {
          if (!kT) {
            const kT = 0 === TT;
            this.depthCullingState.depthMask !== kT && (this.depthCullingState.depthMask = kT)
          }
          return
        }
        const lT = 0 === TT;
        this._alphaState.setAlphaBlend(!lT, cT), this._alphaState.setAlphaMode(TT, cT), kT || (this.depthCullingState.depthMask = lT), this._alphaMode[cT] = TT
      })
    }
  },
  39597: (TT, kT, cT) => {
    var lT = cT(39454),
      MT = cT(38512),
      KT = cT(39463),
      OT = cT(39601),
      yT = cT(39562);
    class fT extends OT.d {
      setDepthStencilTexture(TT) {
        let kT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (super.setDepthStencilTexture(TT, kT), !TT) return;
        const cT = this._engine,
          lT = this._context,
          MT = TT._hardwareTexture;
        if (MT && TT._autoMSAAManagement && this._MSAAFramebuffer) {
          const kT = cT._currentFramebuffer;
          cT._bindUnboundFramebuffer(this._MSAAFramebuffer), lT.framebufferRenderbuffer(lT.FRAMEBUFFER, (0, yT.c)(TT.format) ? lT.DEPTH_STENCIL_ATTACHMENT : lT.DEPTH_ATTACHMENT, lT.RENDERBUFFER, MT.getMSAARenderBuffer()), cT._bindUnboundFramebuffer(kT)
        }
      }
      constructor(TT, kT, cT, lT, MT) {
        super(TT, kT, cT, lT), this._framebuffer = null, this._depthStencilBuffer = null, this._MSAAFramebuffer = null, this._colorTextureArray = null, this._depthStencilTextureArray = null, this._disposeOnlyFramebuffers = !1, this._currentLOD = 0, this._context = MT
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
          kT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          cT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          lT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          MT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          KT = arguments.length > 5 ? arguments[5] : void 0;
        if (this._depthStencilBuffer) {
          const TT = this._engine,
            kT = TT._currentFramebuffer,
            cT = this._context;
          TT._bindUnboundFramebuffer(this._framebuffer), cT.framebufferRenderbuffer(cT.FRAMEBUFFER, cT.DEPTH_STENCIL_ATTACHMENT, cT.RENDERBUFFER, null), cT.framebufferRenderbuffer(cT.FRAMEBUFFER, cT.DEPTH_ATTACHMENT, cT.RENDERBUFFER, null), cT.framebufferRenderbuffer(cT.FRAMEBUFFER, cT.STENCIL_ATTACHMENT, cT.RENDERBUFFER, null), TT._bindUnboundFramebuffer(kT), cT.deleteRenderbuffer(this._depthStencilBuffer), this._depthStencilBuffer = null
        }
        return super.createDepthStencilTexture(TT, kT, cT, lT, MT, KT)
      }
      shareDepth(TT) {
        super.shareDepth(TT);
        const kT = this._context,
          cT = this._depthStencilBuffer,
          lT = TT._MSAAFramebuffer || TT._framebuffer,
          MT = this._engine;
        TT._depthStencilBuffer && TT._depthStencilBuffer !== cT && kT.deleteRenderbuffer(TT._depthStencilBuffer), TT._depthStencilBuffer = cT;
        const KT = TT._generateStencilBuffer ? kT.DEPTH_STENCIL_ATTACHMENT : kT.DEPTH_ATTACHMENT;
        MT._bindUnboundFramebuffer(lT), kT.framebufferRenderbuffer(kT.FRAMEBUFFER, KT, kT.RENDERBUFFER, cT), MT._bindUnboundFramebuffer(null)
      }
      _bindTextureRenderTarget(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          cT = arguments.length > 2 ? arguments[2] : void 0,
          lT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const MT = TT._hardwareTexture;
        if (!MT) return;
        const KT = this._framebuffer,
          OT = this._engine,
          yT = OT._currentFramebuffer;
        let fT;
        if (OT._bindUnboundFramebuffer(KT), OT.qv > 1) {
          const KT = this._context;
          fT = KT["COLOR_ATTACHMENT" + kT], TT.is2DArray || TT.is3D ? (cT = cT ?? this.layerIndices?.[kT] ?? 0, KT.framebufferTextureLayer(KT.FRAMEBUFFER, fT, MT.underlyingResource, lT, cT)) : TT.isCube ? (cT = cT ?? this.faceIndices?.[kT] ?? 0, KT.framebufferTexture2D(KT.FRAMEBUFFER, fT, KT.TEXTURE_CUBE_MAP_POSITIVE_X + cT, MT.underlyingResource, lT)) : KT.framebufferTexture2D(KT.FRAMEBUFFER, fT, KT.TEXTURE_2D, MT.underlyingResource, lT)
        } else {
          const TT = this._context;
          fT = TT["COLOR_ATTACHMENT" + kT + "_WEBGL"];
          const KT = void 0 !== cT ? TT.TEXTURE_CUBE_MAP_POSITIVE_X + cT : TT.TEXTURE_2D;
          TT.framebufferTexture2D(TT.FRAMEBUFFER, fT, KT, MT.underlyingResource, lT)
        }
        if (TT._autoMSAAManagement && this._MSAAFramebuffer) {
          const TT = this._context;
          OT._bindUnboundFramebuffer(this._MSAAFramebuffer), TT.framebufferRenderbuffer(TT.FRAMEBUFFER, fT, TT.RENDERBUFFER, MT.getMSAARenderBuffer())
        }
        OT._bindUnboundFramebuffer(yT)
      }
      setTexture(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          cT = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        super.setTexture(TT, kT, cT), this._bindTextureRenderTarget(TT, kT)
      }
      setLayerAndFaceIndices(TT, kT) {
        if (super.setLayerAndFaceIndices(TT, kT), !this.textures || !this.layerIndices || !this.faceIndices) return;
        const cT = this._attachments?.length ?? this.textures.length;
        for (let lT = 0; lT < cT; lT++) {
          const TT = this.textures[lT];
          TT && (TT.is2DArray || TT.is3D ? this._bindTextureRenderTarget(TT, lT, this.layerIndices[lT]) : TT.isCube ? this._bindTextureRenderTarget(TT, lT, this.faceIndices[lT]) : this._bindTextureRenderTarget(TT, lT))
        }
      }
      setLayerAndFaceIndex() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          kT = arguments.length > 1 ? arguments[1] : void 0,
          cT = arguments.length > 2 ? arguments[2] : void 0;
        if (super.setLayerAndFaceIndex(TT, kT, cT), !this.textures || !this.layerIndices || !this.faceIndices) return;
        const lT = this.textures[TT];
        lT.is2DArray || lT.is3D ? this._bindTextureRenderTarget(this.textures[TT], TT, this.layerIndices[TT]) : lT.isCube && this._bindTextureRenderTarget(this.textures[TT], TT, this.faceIndices[TT])
      }
      resolveMSAATextures() {
        const TT = this._engine,
          kT = TT._currentFramebuffer;
        TT._bindUnboundFramebuffer(this._MSAAFramebuffer), super.resolveMSAATextures(), TT._bindUnboundFramebuffer(kT)
      }
      dispose() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._disposeOnlyFramebuffers;
        const kT = this._context;
        TT || (this._colorTextureArray && (this._context.deleteTexture(this._colorTextureArray), this._colorTextureArray = null), this._depthStencilTextureArray && (this._context.deleteTexture(this._depthStencilTextureArray), this._depthStencilTextureArray = null)), this._framebuffer && (kT.deleteFramebuffer(this._framebuffer), this._framebuffer = null), this._depthStencilBuffer && (kT.deleteRenderbuffer(this._depthStencilBuffer), this._depthStencilBuffer = null), this._MSAAFramebuffer && (kT.deleteFramebuffer(this._MSAAFramebuffer), this._MSAAFramebuffer = null), super.dispose(TT)
      }
    }
    let xT = !1;
    xT || (xT = !0, KT.ThinEngine.prototype._createHardwareRenderTargetWrapper = function(TT, kT, cT) {
      const lT = new fT(TT, kT, cT, this, this._gl);
      return this._renderTargetWrapperCache.push(lT), lT
    }, KT.ThinEngine.prototype.createRenderTargetTexture = function(TT, kT) {
      const cT = this._createHardwareRenderTargetWrapper(!1, !1, TT);
      let lT, MT, KT = !0,
        OT = !1,
        yT = !1,
        fT = 1;
      void 0 !== kT && "object" === typeof kT && (KT = kT.generateDepthBuffer ?? !0, OT = !!kT.generateStencilBuffer, yT = !!kT.noColorAttachment, lT = kT.colorAttachment, fT = kT.samples ?? 1, MT = kT.label);
      const xT = lT || (yT ? null : this._createInternalTexture(TT, kT, !0, 5)),
        IT = TT.width || TT,
        AT = TT.height || TT,
        CT = this._currentFramebuffer,
        jT = this._gl,
        vT = jT.createFramebuffer();
      if (this._bindUnboundFramebuffer(vT), cT._depthStencilBuffer = this._setupFramebufferDepthAttachments(OT, KT, IT, AT), !xT || xT.is2DArray || xT.is3D || jT.framebufferTexture2D(jT.FRAMEBUFFER, jT.COLOR_ATTACHMENT0, jT.TEXTURE_2D, xT._hardwareTexture.underlyingResource, 0), this._bindUnboundFramebuffer(CT), cT.label = MT ?? "RenderTargetWrapper", cT._framebuffer = vT, cT._generateDepthBuffer = KT, cT._generateStencilBuffer = OT, cT.setTextures(xT), lT) {
        if (cT._samples = lT.samples, lT.samples > 1) {
          const TT = lT._hardwareTexture.getMSAARenderBuffer(0);
          cT._MSAAFramebuffer = jT.createFramebuffer(), this._bindUnboundFramebuffer(cT._MSAAFramebuffer), jT.framebufferRenderbuffer(jT.FRAMEBUFFER, jT.COLOR_ATTACHMENT0, jT.RENDERBUFFER, TT), this._bindUnboundFramebuffer(null)
        }
      } else this.updateRenderTargetTextureSampleCount(cT, fT);
      return cT
    }, KT.ThinEngine.prototype._createDepthStencilTexture = function(TT, kT, cT) {
      const KT = this._gl,
        OT = TT.layers || 0,
        fT = TT.depth || 0;
      let xT = KT.TEXTURE_2D;
      0 !== OT ? xT = KT.TEXTURE_2D_ARRAY : 0 !== fT && (xT = KT.TEXTURE_3D);
      const IT = new lT.b(this, 12);
      if (IT.label = kT.label, !this._caps.depthTextureExtension) return MT.e.Error("Depth texture is not supported by your browser or hardware."), IT;
      const AT = {
        bilinearFiltering: !1,
        comparisonFunction: 0,
        generateStencil: !1,
        ...kT
      };
      if (this._bindTextureDirectly(xT, IT, !0), this._setupDepthStencilTexture(IT, TT, 0 !== AT.comparisonFunction && AT.bilinearFiltering, AT.comparisonFunction, AT.samples), void 0 !== AT.depthTextureFormat) {
        if (15 !== AT.depthTextureFormat && 16 !== AT.depthTextureFormat && 17 !== AT.depthTextureFormat && 13 !== AT.depthTextureFormat && 14 !== AT.depthTextureFormat && 18 !== AT.depthTextureFormat) return MT.e.Error(`Depth texture ${AT.depthTextureFormat} format is not supported.`), IT;
        IT.format = AT.depthTextureFormat
      } else IT.format = AT.generateStencil ? 13 : 16;
      const CT = (0, yT.c)(IT.format),
        jT = this._getWebGLTextureTypeFromDepthTextureFormat(IT.format),
        vT = CT ? KT.DEPTH_STENCIL : KT.DEPTH_COMPONENT,
        tT = this._getInternalFormatFromDepthTextureFormat(IT.format, !0, CT);
      return IT.is2DArray ? KT.texImage3D(xT, 0, tT, IT.width, IT.height, OT, 0, vT, jT, null) : IT.is3D ? KT.texImage3D(xT, 0, tT, IT.width, IT.height, fT, 0, vT, jT, null) : KT.texImage2D(xT, 0, tT, IT.width, IT.height, 0, vT, jT, null), this._bindTextureDirectly(xT, null), this._internalTexturesCache.push(IT), cT._depthStencilBuffer && (KT.deleteRenderbuffer(cT._depthStencilBuffer), cT._depthStencilBuffer = null), this._bindUnboundFramebuffer(cT._MSAAFramebuffer ?? cT._framebuffer), cT._generateStencilBuffer = CT, cT._depthStencilTextureWithStencil = CT, cT._depthStencilBuffer = this._setupFramebufferDepthAttachments(cT._generateStencilBuffer, cT._generateDepthBuffer, cT.width, cT.height, cT.samples, IT.format), this._bindUnboundFramebuffer(null), IT
    }, KT.ThinEngine.prototype.updateRenderTargetTextureSampleCount = function(TT, kT) {
      if (this.qv < 2 || !TT) return 1;
      if (TT.samples === kT) return kT;
      const cT = this._gl;
      kT = Math.min(kT, this.getCaps().maxMSAASamples), TT._depthStencilBuffer && (cT.deleteRenderbuffer(TT._depthStencilBuffer), TT._depthStencilBuffer = null), TT._MSAAFramebuffer && (cT.deleteFramebuffer(TT._MSAAFramebuffer), TT._MSAAFramebuffer = null);
      const lT = TT.texture?._hardwareTexture;
      if (lT?.releaseMSAARenderBuffers(), TT.texture && kT > 1 && "function" === typeof cT.renderbufferStorageMultisample) {
        const MT = cT.createFramebuffer();
        if (!MT) throw new Error("Unable to create multi sampled framebuffer");
        TT._MSAAFramebuffer = MT, this._bindUnboundFramebuffer(TT._MSAAFramebuffer);
        const KT = this._createRenderBuffer(TT.texture.width, TT.texture.height, kT, -1, this._getRGBABufferInternalSizedFormat(TT.texture.type, TT.texture.format, TT.texture._useSRGBBuffer), cT.COLOR_ATTACHMENT0, !1);
        if (!KT) throw new Error("Unable to create multi sampled framebuffer");
        lT?.addMSAARenderBuffer(KT)
      }
      this._bindUnboundFramebuffer(TT._MSAAFramebuffer ?? TT._framebuffer), TT.texture && (TT.texture.samples = kT), TT._samples = kT;
      const MT = TT._depthStencilTexture ? TT._depthStencilTexture.format : void 0;
      return TT._depthStencilBuffer = this._setupFramebufferDepthAttachments(TT._generateStencilBuffer, TT._generateDepthBuffer, TT.width, TT.height, kT, MT), this._bindUnboundFramebuffer(null), kT
    }, KT.ThinEngine.prototype._setupDepthStencilTexture = function(TT, kT, cT, lT) {
      let MT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1;
      const KT = kT.width ?? kT,
        OT = kT.height ?? kT,
        yT = kT.layers || 0,
        fT = kT.depth || 0;
      TT.baseWidth = KT, TT.baseHeight = OT, TT.width = KT, TT.height = OT, TT.is2DArray = yT > 0, TT.depth = yT || fT, TT.isReady = !0, TT.samples = MT, TT.generateMipMaps = !1, TT.samplingMode = cT ? 2 : 1, TT.type = 0, TT._comparisonFunction = lT;
      const xT = this._gl,
        IT = this._getTextureTarget(TT),
        AT = this._getSamplingParameters(TT.samplingMode, !1);
      xT.texParameteri(IT, xT.TEXTURE_MAG_FILTER, AT.mag), xT.texParameteri(IT, xT.TEXTURE_MIN_FILTER, AT.min), xT.texParameteri(IT, xT.TEXTURE_WRAP_S, xT.CLAMP_TO_EDGE), xT.texParameteri(IT, xT.TEXTURE_WRAP_T, xT.CLAMP_TO_EDGE), this.qv > 1 && (0 === lT ? (xT.texParameteri(IT, xT.TEXTURE_COMPARE_FUNC, 515), xT.texParameteri(IT, xT.TEXTURE_COMPARE_MODE, xT.NONE)) : (xT.texParameteri(IT, xT.TEXTURE_COMPARE_FUNC, lT), xT.texParameteri(IT, xT.TEXTURE_COMPARE_MODE, xT.COMPARE_REF_TO_TEXTURE)))
    })
  },
  39448: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => lT.c
    });
    var lT = cT(39451);
    (0, cT(39586).d)();
    var MT = cT(39463);
    let KT = !1;
    ! function() {
      if (KT) return;
      KT = !0;
      const TT = new WeakMap,
        kT = new WeakMap,
        cT = new WeakMap,
        lT = new WeakMap;
      MT.ThinEngine.prototype.getAlphaToCoverage = function() {
        return TT.get(this) ?? !1
      }, MT.ThinEngine.prototype.setAlphaToCoverage = function(cT) {
        (TT.get(this) !== cT || this._gl && kT.get(this) !== this._gl) && (TT.set(this, cT), this._gl && (cT ? this._gl.enable(this._gl.SAMPLE_ALPHA_TO_COVERAGE) : this._gl.disable(this._gl.SAMPLE_ALPHA_TO_COVERAGE), kT.set(this, this._gl)))
      }, Object.defineProperty(MT.ThinEngine.prototype, "currentSampleCount", {
        get: function() {
          return this._currentRenderTarget ? this._currentRenderTarget.samples : this._gl ? (lT.get(this) !== this._gl && (cT.set(this, this._gl.getContextAttributes()?.antialias ? Math.max(1, this._gl.getParameter(this._gl.SAMPLES)) : 1), lT.set(this, this._gl)), cT.get(this)) : 1
        },
        enumerable: !1,
        configurable: !0
      })
    }();
    var OT = cT(39454),
      yT = cT(38512),
      fT = cT(39549);
    let xT = !1;
    ! function() {
      function TT(TT, kT, cT, lT) {
        let MT, KT = 1;
        1 === lT ? MT = new Float32Array(kT * cT * 4) : 2 === lT ? (MT = new Uint16Array(kT * cT * 4), KT = 15360) : MT = 7 === lT ? new Uint32Array(kT * cT * 4) : new Uint8Array(kT * cT * 4);
        for (let OT = 0; OT < kT; OT++)
          for (let lT = 0; lT < cT; lT++) {
            const cT = 3 * (lT * kT + OT),
              yT = 4 * (lT * kT + OT);
            MT[yT + 0] = TT[cT + 0], MT[yT + 1] = TT[cT + 1], MT[yT + 2] = TT[cT + 2], MT[yT + 3] = KT
          }
        return MT
      }

      function kT(TT) {
        return function(kT, cT, lT, MT, KT, yT, fT, xT) {
          let IT = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
            AT = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
          const CT = TT ? this._gl.TEXTURE_3D : this._gl.TEXTURE_2D_ARRAY,
            jT = TT ? 10 : 11,
            vT = new OT.b(this, jT);
          vT.baseWidth = cT, vT.baseHeight = lT, vT.baseDepth = MT, vT.width = cT, vT.height = lT, vT.depth = MT, vT.format = KT, vT.type = AT, vT.generateMipMaps = yT, vT.samplingMode = xT, TT ? vT.is3D = !0 : vT.is2DArray = !0, this._doNotHandleContextLost || (vT._bufferView = kT), TT ? this.updateRawTexture3D(vT, kT, KT, fT, IT, AT) : this.updateRawTexture2DArray(vT, kT, KT, fT, IT, AT), this._bindTextureDirectly(CT, vT, !0);
          const tT = this._getSamplingParameters(xT, yT);
          return this._gl.texParameteri(CT, this._gl.TEXTURE_MAG_FILTER, tT.mag), this._gl.texParameteri(CT, this._gl.TEXTURE_MIN_FILTER, tT.min), yT && this._gl.generateMipmap(CT), this._bindTextureDirectly(CT, null), this._internalTexturesCache.push(vT), vT
        }
      }

      function cT(TT) {
        return function(kT, cT, lT, MT) {
          let KT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            OT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
          const yT = TT ? this._gl.TEXTURE_3D : this._gl.TEXTURE_2D_ARRAY,
            fT = this._getWebGLTextureType(OT),
            xT = this._getInternalFormat(lT),
            IT = this._getRGBABufferInternalSizedFormat(OT, lT);
          this._bindTextureDirectly(yT, kT, !0), this._unpackFlipY(void 0 === MT || !!MT), this._doNotHandleContextLost || (kT._bufferView = cT, kT.format = lT, kT.invertY = MT, kT._compression = KT), kT.width % 4 !== 0 && this._gl.pixelStorei(this._gl.UNPACK_ALIGNMENT, 1), KT && cT ? this._gl.compressedTexImage3D(yT, 0, this.getCaps().s3tc[KT], kT.width, kT.height, kT.depth, 0, cT) : this._gl.texImage3D(yT, 0, IT, kT.width, kT.height, kT.depth, 0, xT, fT, cT), kT.generateMipMaps && this._gl.generateMipmap(yT), this._bindTextureDirectly(yT, null), kT.isReady = !0
        }
      }
      xT || (xT = !0, MT.ThinEngine.prototype.updateRawTexture = function(TT, kT, cT, lT) {
        let MT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          KT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          OT = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        if (!TT) return;
        const yT = this._getRGBABufferInternalSizedFormat(KT, cT, OT),
          fT = this._getInternalFormat(cT),
          xT = this._getWebGLTextureType(KT);
        this._bindTextureDirectly(this._gl.TEXTURE_2D, TT, !0), this._unpackFlipY(void 0 === lT || !!lT), this._doNotHandleContextLost || (TT._bufferView = kT, TT.format = cT, TT.type = KT, TT.invertY = lT, TT._compression = MT), TT.width % 4 !== 0 && this._gl.pixelStorei(this._gl.UNPACK_ALIGNMENT, 1), MT && kT ? this._gl.compressedTexImage2D(this._gl.TEXTURE_2D, 0, this.getCaps().s3tc[MT], TT.width, TT.height, 0, kT) : this._gl.texImage2D(this._gl.TEXTURE_2D, 0, yT, TT.width, TT.height, 0, fT, xT, kT), TT.generateMipMaps && this._gl.generateMipmap(this._gl.TEXTURE_2D), this._bindTextureDirectly(this._gl.TEXTURE_2D, null), TT.isReady = !0
      }, MT.ThinEngine.prototype.createRawTexture = function(TT, kT, cT, lT, MT, KT, yT) {
        let fT = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          xT = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
          IT = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const AT = new OT.b(this, 3);
        AT.baseWidth = kT, AT.baseHeight = cT, AT.width = kT, AT.height = cT, AT.format = lT, AT.generateMipMaps = MT, AT.samplingMode = yT, AT.invertY = KT, AT._compression = fT, AT.type = xT, AT._useSRGBBuffer = this._getUseSRGBBuffer(IT, !MT), this._doNotHandleContextLost || (AT._bufferView = TT), this.updateRawTexture(AT, TT, lT, KT, fT, xT, AT._useSRGBBuffer), this._bindTextureDirectly(this._gl.TEXTURE_2D, AT, !0);
        const CT = this._getSamplingParameters(yT, MT);
        return this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MAG_FILTER, CT.mag), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MIN_FILTER, CT.min), MT && this._gl.generateMipmap(this._gl.TEXTURE_2D), this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._internalTexturesCache.push(AT), AT
      }, MT.ThinEngine.prototype.createRawCubeTexture = function(TT, kT, cT, lT, MT, KT, xT) {
        let IT = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null;
        const AT = this._gl,
          CT = new OT.b(this, 8);
        CT.isCube = !0, CT.format = cT, CT.type = lT, this._doNotHandleContextLost || (CT._bufferViewArray = TT);
        const jT = this._getWebGLTextureType(lT);
        let vT = this._getInternalFormat(cT);
        vT === AT.RGB && (vT = AT.RGBA), jT !== AT.FLOAT || this._caps.textureFloatLinearFiltering ? jT !== this._gl.HALF_FLOAT_OES || this._caps.textureHalfFloatLinearFiltering ? jT !== AT.FLOAT || this._caps.textureFloatRender ? jT !== AT.HALF_FLOAT || this._caps.colorBufferFloat || (MT = !1, yT.e.Warn("Render to half float textures is not supported. Mipmap generation forced to false.")) : (MT = !1, yT.e.Warn("Render to float textures is not supported. Mipmap generation forced to false.")) : (MT = !1, xT = 1, yT.e.Warn("Half float texture filtering is not supported. Mipmap generation and sampling mode are forced to false and TEXTURE_NEAREST_SAMPLINGMODE, respectively.")) : (MT = !1, xT = 1, yT.e.Warn("Float texture filtering is not supported. Mipmap generation and sampling mode are forced to false and TEXTURE_NEAREST_SAMPLINGMODE, respectively."));
        const tT = kT,
          hT = tT;
        CT.width = tT, CT.height = hT, CT.invertY = KT, CT._compression = IT;
        if (!this.needPOTTextures || (0, fT.g)(CT.width) && (0, fT.g)(CT.height) || (MT = !1), TT) this.updateRawCubeTexture(CT, TT, cT, lT, KT, IT);
        else {
          const TT = this._getRGBABufferInternalSizedFormat(lT),
            kT = 0;
          this._bindTextureDirectly(AT.TEXTURE_CUBE_MAP, CT, !0);
          for (let cT = 0; cT < 6; cT++) IT ? AT.compressedTexImage2D(AT.TEXTURE_CUBE_MAP_POSITIVE_X + cT, kT, this.getCaps().s3tc[IT], CT.width, CT.height, 0, void 0) : AT.texImage2D(AT.TEXTURE_CUBE_MAP_POSITIVE_X + cT, kT, TT, CT.width, CT.height, 0, vT, jT, null);
          this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null)
        }
        this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, CT, !0), TT && MT && this._gl.generateMipmap(this._gl.TEXTURE_CUBE_MAP);
        const NT = this._getSamplingParameters(xT, MT);
        return AT.texParameteri(AT.TEXTURE_CUBE_MAP, AT.TEXTURE_MAG_FILTER, NT.mag), AT.texParameteri(AT.TEXTURE_CUBE_MAP, AT.TEXTURE_MIN_FILTER, NT.min), AT.texParameteri(AT.TEXTURE_CUBE_MAP, AT.TEXTURE_WRAP_S, AT.CLAMP_TO_EDGE), AT.texParameteri(AT.TEXTURE_CUBE_MAP, AT.TEXTURE_WRAP_T, AT.CLAMP_TO_EDGE), this._bindTextureDirectly(AT.TEXTURE_CUBE_MAP, null), CT.generateMipMaps = MT, CT.samplingMode = xT, CT.isReady = !0, CT
      }, MT.ThinEngine.prototype.updateRawCubeTexture = function(kT, cT, lT, MT, KT) {
        let OT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          yT = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        kT._bufferViewArray = cT, kT.format = lT, kT.type = MT, kT.invertY = KT, kT._compression = OT;
        const xT = this._gl,
          IT = this._getWebGLTextureType(MT);
        let AT = this._getInternalFormat(lT);
        const CT = this._getRGBABufferInternalSizedFormat(MT);
        let jT = !1;
        AT === xT.RGB && (AT = xT.RGBA, jT = !0), this._bindTextureDirectly(xT.TEXTURE_CUBE_MAP, kT, !0), this._unpackFlipY(void 0 === KT || !!KT), kT.width % 4 !== 0 && xT.pixelStorei(xT.UNPACK_ALIGNMENT, 1);
        for (let fT = 0; fT < 6; fT++) {
          let lT = cT[fT];
          OT ? xT.compressedTexImage2D(xT.TEXTURE_CUBE_MAP_POSITIVE_X + fT, yT, this.getCaps().s3tc[OT], kT.width, kT.height, 0, lT) : (jT && (lT = TT(lT, kT.width, kT.height, MT)), xT.texImage2D(xT.TEXTURE_CUBE_MAP_POSITIVE_X + fT, yT, CT, kT.width, kT.height, 0, AT, IT, lT))
        }(!this.needPOTTextures || (0, fT.g)(kT.width) && (0, fT.g)(kT.height)) && kT.generateMipMaps && 0 === yT && this._gl.generateMipmap(this._gl.TEXTURE_CUBE_MAP), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), kT.isReady = !0
      }, MT.ThinEngine.prototype.createRawCubeTextureFromUrl = function(kT, cT, lT, MT, KT, OT, yT, fT) {
        let xT = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          IT = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          AT = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 3,
          CT = arguments.length > 11 && void 0 !== arguments[11] && arguments[11];
        const jT = this._gl,
          vT = this.createRawCubeTexture(null, lT, MT, KT, !OT, CT, AT, null);
        cT?.addPendingData(vT), vT.url = kT, vT.isReady = !1, this._internalTexturesCache.push(vT);
        const tT = (TT, kT) => {
            cT?.removePendingData(vT), IT && IT(TT ? TT.status + " " + TT.statusText : "Failed to parse texture data", kT)
          },
          hT = async kT => {
            if (!vT._hardwareTexture) return;
            const lT = yT(kT);
            if (!lT) return;
            const OT = lT instanceof Promise ? await lT : lT,
              IT = vT.width;
            if (fT) {
              const kT = this._getWebGLTextureType(KT);
              let cT = this._getInternalFormat(MT);
              const lT = this._getRGBABufferInternalSizedFormat(KT);
              let yT = !1;
              cT === jT.RGB && (cT = jT.RGBA, yT = !0), this._bindTextureDirectly(jT.TEXTURE_CUBE_MAP, vT, !0), this._unpackFlipY(!1);
              const xT = fT(OT);
              for (let MT = 0; MT < xT.length; MT++) {
                const OT = IT >> MT;
                for (let fT = 0; fT < 6; fT++) {
                  let IT = xT[MT][fT];
                  yT && (IT = TT(IT, OT, OT, KT)), jT.texImage2D(fT, MT, lT, OT, OT, 0, cT, kT, IT)
                }
              }
              this._bindTextureDirectly(jT.TEXTURE_CUBE_MAP, null)
            } else this.updateRawCubeTexture(vT, OT, MT, KT, CT);
            vT.isReady = !0, cT?.removePendingData(vT), vT.onLoadedObservable.notifyObservers(vT), vT.onLoadedObservable.clear(), xT && xT()
          };
        return this._loadFile(kT, (TT => {
          hT(TT).catch((TT => {
            tT(void 0, TT)
          }))
        }), void 0, cT?.offlineProvider, !0, tT), vT
      }, MT.ThinEngine.prototype.createRawTexture2DArray = kT(!1), MT.ThinEngine.prototype.createRawTexture3D = kT(!0), MT.ThinEngine.prototype.updateRawTexture2DArray = cT(!1), MT.ThinEngine.prototype.updateRawTexture3D = cT(!0))
    }();
    var IT = cT(39496);
    let AT = !1;
    AT || (AT = !0, MT.ThinEngine.prototype._readTexturePixelsSync = function(TT, kT, cT) {
      let lT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1,
        MT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        KT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        OT = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
        yT = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        fT = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
        xT = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
      const AT = this._gl;
      if (!AT) throw new Error("Engine does not have gl rendering context.");
      if (!this._dummyFramebuffer) {
        const TT = AT.createFramebuffer();
        if (!TT) throw new Error("Unable to create dummy framebuffer");
        this._dummyFramebuffer = TT
      }
      AT.bindFramebuffer(AT.FRAMEBUFFER, this._dummyFramebuffer), lT > -1 && (TT.is2DArray || TT.is3D) ? AT.framebufferTextureLayer(AT.FRAMEBUFFER, AT.COLOR_ATTACHMENT0, TT._hardwareTexture?.underlyingResource, MT, lT) : lT > -1 ? AT.framebufferTexture2D(AT.FRAMEBUFFER, AT.COLOR_ATTACHMENT0, AT.TEXTURE_CUBE_MAP_POSITIVE_X + lT, TT._hardwareTexture?.underlyingResource, MT) : AT.framebufferTexture2D(AT.FRAMEBUFFER, AT.COLOR_ATTACHMENT0, AT.TEXTURE_2D, TT._hardwareTexture?.underlyingResource, MT);
      let CT = void 0 !== TT.type ? this._getWebGLTextureType(TT.type) : AT.UNSIGNED_BYTE;
      return yT ? KT || (KT = (0, IT.n)(TT.type, 4 * kT * cT)) : CT === AT.UNSIGNED_BYTE ? (KT || (KT = new Uint8Array(4 * kT * cT)), CT = AT.UNSIGNED_BYTE) : (KT || (KT = new Float32Array(4 * kT * cT)), CT = AT.FLOAT), OT && this.flushFramebuffer(), AT.readPixels(fT, xT, kT, cT, AT.RGBA, CT, KT), AT.bindFramebuffer(AT.FRAMEBUFFER, this._currentFramebuffer), KT
    }, MT.ThinEngine.prototype._readTexturePixels = function(TT, kT, cT) {
      let lT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1,
        MT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        KT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        OT = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
        yT = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        fT = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
        xT = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
      return Promise.resolve(this._readTexturePixelsSync(TT, kT, cT, lT, MT, KT, OT, yT, fT, xT))
    }), (0, cT(39592).b)();
    let CT = !1;
    CT || (CT = !0, MT.ThinEngine.prototype._createDepthStencilCubeTexture = function(TT, kT) {
      const cT = new OT.b(this, 12);
      if (cT.isCube = !0, 1 === this.qv) return yT.e.Error("Depth cube texture is not supported by WebGL 1."), cT;
      const lT = {
          bilinearFiltering: !1,
          comparisonFunction: 0,
          generateStencil: !1,
          ...kT
        },
        MT = this._gl;
      this._bindTextureDirectly(MT.TEXTURE_CUBE_MAP, cT, !0), this._setupDepthStencilTexture(cT, TT, lT.bilinearFiltering, lT.comparisonFunction);
      for (let KT = 0; KT < 6; KT++) lT.generateStencil ? MT.texImage2D(MT.TEXTURE_CUBE_MAP_POSITIVE_X + KT, 0, MT.DEPTH24_STENCIL8, TT, TT, 0, MT.DEPTH_STENCIL, MT.UNSIGNED_INT_24_8, null) : MT.texImage2D(MT.TEXTURE_CUBE_MAP_POSITIVE_X + KT, 0, MT.DEPTH_COMPONENT24, TT, TT, 0, MT.DEPTH_COMPONENT, MT.UNSIGNED_INT, null);
      return this._bindTextureDirectly(MT.TEXTURE_CUBE_MAP, null), this._internalTexturesCache.push(cT), cT
    }, MT.ThinEngine.prototype._setCubeMapTextureParams = function(TT, kT, cT) {
      const lT = this._gl;
      lT.texParameteri(lT.TEXTURE_CUBE_MAP, lT.TEXTURE_MAG_FILTER, lT.LINEAR), lT.texParameteri(lT.TEXTURE_CUBE_MAP, lT.TEXTURE_MIN_FILTER, kT ? lT.LINEAR_MIPMAP_LINEAR : lT.LINEAR), lT.texParameteri(lT.TEXTURE_CUBE_MAP, lT.TEXTURE_WRAP_S, lT.CLAMP_TO_EDGE), lT.texParameteri(lT.TEXTURE_CUBE_MAP, lT.TEXTURE_WRAP_T, lT.CLAMP_TO_EDGE), TT.samplingMode = kT ? 3 : 2, kT && this.getCaps().textureMaxLevel && void 0 !== cT && cT > 0 && (lT.texParameteri(lT.TEXTURE_CUBE_MAP, lT.TEXTURE_MAX_LEVEL, cT), TT._maxLodLevel = cT), this._bindTextureDirectly(lT.TEXTURE_CUBE_MAP, null)
    }, MT.ThinEngine.prototype.createCubeTexture = function(TT, kT, cT, lT) {
      let MT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        KT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        OT = arguments.length > 6 ? arguments[6] : void 0,
        xT = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        IT = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        AT = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
        CT = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
        jT = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
        vT = arguments.length > 13 && void 0 !== arguments[13] && arguments[13],
        tT = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : null;
      const hT = this._gl;
      return this.createCubeTextureBase(TT, kT, cT, !!lT, MT, KT, OT, xT, IT, AT, CT, jT, (TT => this._bindTextureDirectly(hT.TEXTURE_CUBE_MAP, TT, !0)), ((TT, kT) => {
        const cT = this.needPOTTextures ? (0, fT.c)(kT[0].width, this._caps.maxCubemapTextureSize) : kT[0].width,
          KT = cT,
          xT = [hT.TEXTURE_CUBE_MAP_POSITIVE_X, hT.TEXTURE_CUBE_MAP_POSITIVE_Y, hT.TEXTURE_CUBE_MAP_POSITIVE_Z, hT.TEXTURE_CUBE_MAP_NEGATIVE_X, hT.TEXTURE_CUBE_MAP_NEGATIVE_Y, hT.TEXTURE_CUBE_MAP_NEGATIVE_Z];
        this._bindTextureDirectly(hT.TEXTURE_CUBE_MAP, TT, !0), this._unpackFlipY(!1);
        const IT = OT ? this._getInternalFormat(OT, TT._useSRGBBuffer) : TT._useSRGBBuffer ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : hT.RGBA;
        let AT = OT ? this._getInternalFormat(OT) : hT.RGBA;
        TT._useSRGBBuffer && 1 === this.qv && (AT = IT);
        for (let lT = 0; lT < xT.length; lT++)
          if (kT[lT].width !== cT || kT[lT].height !== KT) {
            if (this._prepareWorkingCanvas(), !this._workingCanvas || !this._workingContext) return void yT.e.Warn("Cannot create canvas to resize texture.");
            this._workingCanvas.width = cT, this._workingCanvas.height = KT, this._workingContext.drawImage(kT[lT], 0, 0, kT[lT].width, kT[lT].height, 0, 0, cT, KT), hT.texImage2D(xT[lT], 0, IT, AT, hT.UNSIGNED_BYTE, this._workingCanvas)
          } else hT.texImage2D(xT[lT], 0, IT, AT, hT.UNSIGNED_BYTE, kT[lT]);
        lT || hT.generateMipmap(hT.TEXTURE_CUBE_MAP), this._setCubeMapTextureParams(TT, !lT), TT.width = cT, TT.height = KT, TT.isReady = !0, OT && (TT.format = OT), TT.onLoadedObservable.notifyObservers(TT), TT.onLoadedObservable.clear(), MT && MT()
      }), !!vT, tT)
    }, MT.ThinEngine.prototype.generateMipMapsForCubemap = function(TT) {
      let kT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (TT.generateMipMaps) {
        const cT = this._gl;
        this._bindTextureDirectly(cT.TEXTURE_CUBE_MAP, TT, !0), cT.generateMipmap(cT.TEXTURE_CUBE_MAP), kT && this._bindTextureDirectly(cT.TEXTURE_CUBE_MAP, null)
      }
    });
    cT(39597);
    let jT = !1;
    jT || (jT = !0, MT.ThinEngine.prototype.setDepthStencilTexture = function(TT, kT, cT, lT) {
      void 0 !== TT && (kT && (this._boundUniforms[TT] = kT), cT && cT.depthStencilTexture ? this._setTexture(TT, cT, !1, !0, lT) : this._setTexture(TT, null, void 0, void 0, lT))
    });
    let vT = !1;
    vT || (vT = !0, MT.ThinEngine.prototype.createRenderTargetCubeTexture = function(TT, kT) {
      const cT = this._createHardwareRenderTargetWrapper(!1, !0, TT),
        lT = {
          generateMipMaps: !0,
          generateDepthBuffer: !0,
          generateStencilBuffer: !1,
          type: 0,
          samplingMode: 3,
          format: 5,
          ...kT
        };
      lT.generateStencilBuffer = lT.generateDepthBuffer && lT.generateStencilBuffer, (1 !== lT.type || this._caps.textureFloatLinearFiltering) && (2 !== lT.type || this._caps.textureHalfFloatLinearFiltering) || (lT.samplingMode = 1);
      const MT = this._gl,
        KT = new OT.b(this, 5);
      this._bindTextureDirectly(MT.TEXTURE_CUBE_MAP, KT, !0);
      const fT = this._getSamplingParameters(lT.samplingMode, lT.generateMipMaps);
      1 !== lT.type || this._caps.textureFloat || (lT.type = 0, yT.e.Warn("Float textures are not supported. Cube render target forced to TEXTURETYPE_UNESIGNED_BYTE type")), MT.texParameteri(MT.TEXTURE_CUBE_MAP, MT.TEXTURE_MAG_FILTER, fT.mag), MT.texParameteri(MT.TEXTURE_CUBE_MAP, MT.TEXTURE_MIN_FILTER, fT.min), MT.texParameteri(MT.TEXTURE_CUBE_MAP, MT.TEXTURE_WRAP_S, MT.CLAMP_TO_EDGE), MT.texParameteri(MT.TEXTURE_CUBE_MAP, MT.TEXTURE_WRAP_T, MT.CLAMP_TO_EDGE);
      for (let OT = 0; OT < 6; OT++) MT.texImage2D(MT.TEXTURE_CUBE_MAP_POSITIVE_X + OT, 0, this._getRGBABufferInternalSizedFormat(lT.type, lT.format), TT, TT, 0, this._getInternalFormat(lT.format), this._getWebGLTextureType(lT.type), null);
      const xT = MT.createFramebuffer();
      return this._bindUnboundFramebuffer(xT), cT._depthStencilBuffer = this._setupFramebufferDepthAttachments(lT.generateStencilBuffer, lT.generateDepthBuffer, TT, TT), lT.generateMipMaps && MT.generateMipmap(MT.TEXTURE_CUBE_MAP), this._bindTextureDirectly(MT.TEXTURE_CUBE_MAP, null), this._bindUnboundFramebuffer(null), cT._framebuffer = xT, cT._generateDepthBuffer = lT.generateDepthBuffer, cT._generateStencilBuffer = lT.generateStencilBuffer, KT.width = TT, KT.height = TT, KT.isReady = !0, KT.isCube = !0, KT.samples = 1, KT.generateMipMaps = lT.generateMipMaps, KT.samplingMode = lT.samplingMode, KT.type = lT.type, KT.format = lT.format, this._internalTexturesCache.push(KT), cT.setTextures(KT), cT
    });
    var tT = cT(39607),
      hT = cT(39615);
    let NT = !1;
    NT || (NT = !0, MT.ThinEngine.prototype.createPrefilteredCubeTexture = function(TT, kT, lT, MT) {
      let KT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        fT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        xT = arguments.length > 6 ? arguments[6] : void 0,
        IT = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        AT = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
        CT = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null;
      return this.createCubeTexture(TT, kT, null, !1, (async TT => {
        if (!TT) return void(KT && KT(null));
        const fT = TT.texture;
        if (AT ? TT.info.sphericalPolynomial && (fT._sphericalPolynomial = TT.info.sphericalPolynomial) : fT._sphericalPolynomial = fT._sphericalPolynomial ?? new tT.e, fT._source = 9, this.getCaps().textureLOD) return void(KT && KT(fT));
        const xT = this._gl,
          IT = TT.width;
        if (!IT) return;
        const {
          DDSTools: CT
        } = await cT.e(297).then((() => cT(41329))), jT = [];
        for (let cT = 0; cT < 3; cT++) {
          const KT = 1 - cT / 2,
            AT = MT,
            vT = Math.log2(IT) * lT + MT,
            tT = AT + (vT - AT) * KT,
            NT = Math.round(Math.min(Math.max(tT, 0), vT)),
            QT = new OT.b(this, 2);
          if (QT.type = fT.type, QT.format = fT.format, QT.width = Math.pow(2, Math.max(Math.log2(IT) - NT, 0)), QT.height = QT.width, QT.isCube = !0, QT._cachedWrapU = 0, QT._cachedWrapV = 0, this._bindTextureDirectly(xT.TEXTURE_CUBE_MAP, QT, !0), QT.samplingMode = 2, xT.texParameteri(xT.TEXTURE_CUBE_MAP, xT.TEXTURE_MAG_FILTER, xT.LINEAR), xT.texParameteri(xT.TEXTURE_CUBE_MAP, xT.TEXTURE_MIN_FILTER, xT.LINEAR), xT.texParameteri(xT.TEXTURE_CUBE_MAP, xT.TEXTURE_WRAP_S, xT.CLAMP_TO_EDGE), xT.texParameteri(xT.TEXTURE_CUBE_MAP, xT.TEXTURE_WRAP_T, xT.CLAMP_TO_EDGE), TT.isDDS) {
            const kT = TT.info,
              cT = TT.data;
            this._unpackFlipY(kT.isCompressed), CT.UploadDDSLevels(this, QT, cT, kT, !0, 6, NT)
          } else yT.e.Warn("DDS is the only prefiltered cube map supported so far.");
          this._bindTextureDirectly(xT.TEXTURE_CUBE_MAP, null);
          const ST = new hT.c(kT);
          ST._isCube = !0, ST._texture = QT, QT.isReady = !0, jT.push(ST)
        }
        fT._lodTextureHigh = jT[2], fT._lodTextureMid = jT[1], fT._lodTextureLow = jT[0], KT && KT(fT)
      }), fT, xT, IT, AT, lT, MT, null, void 0, !1, CT)
    });
    var QT = cT(39539);
    let ST = !1;
    ST || (ST = !0, MT.ThinEngine.prototype.createUniformBuffer = function(TT, kT) {
      const cT = this._gl.createBuffer();
      if (!cT) throw new Error("Unable to create uniform buffer");
      const lT = new QT.c(cT);
      return this.bindUniformBuffer(lT), TT instanceof Float32Array ? this._gl.bufferData(this._gl.UNIFORM_BUFFER, TT, this._gl.STATIC_DRAW) : this._gl.bufferData(this._gl.UNIFORM_BUFFER, new Float32Array(TT), this._gl.STATIC_DRAW), this.bindUniformBuffer(null), lT.references = 1, lT
    }, MT.ThinEngine.prototype.createDynamicUniformBuffer = function(TT, kT) {
      const cT = this._gl.createBuffer();
      if (!cT) throw new Error("Unable to create dynamic uniform buffer");
      const lT = new QT.c(cT);
      return this.bindUniformBuffer(lT), TT instanceof Float32Array ? this._gl.bufferData(this._gl.UNIFORM_BUFFER, TT, this._gl.DYNAMIC_DRAW) : this._gl.bufferData(this._gl.UNIFORM_BUFFER, new Float32Array(TT), this._gl.DYNAMIC_DRAW), this.bindUniformBuffer(null), lT.references = 1, lT
    }, MT.ThinEngine.prototype.updateUniformBuffer = function(TT, kT, cT, lT) {
      this.bindUniformBuffer(TT), void 0 === cT && (cT = 0), void 0 === lT ? kT instanceof Float32Array ? this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, cT, kT) : this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, cT, new Float32Array(kT)) : kT instanceof Float32Array ? this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, 0, kT.subarray(cT, cT + lT)) : this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, 0, new Float32Array(kT).subarray(cT, cT + lT)), this.bindUniformBuffer(null)
    }, MT.ThinEngine.prototype.bindUniformBuffer = function(TT) {
      this._gl.bindBuffer(this._gl.UNIFORM_BUFFER, TT ? TT.underlyingResource : null)
    }, MT.ThinEngine.prototype.bindUniformBufferBase = function(TT, kT, cT) {
      this._gl.bindBufferBase(this._gl.UNIFORM_BUFFER, kT, TT ? TT.underlyingResource : null)
    }, MT.ThinEngine.prototype.bindUniformBlock = function(TT, kT, cT) {
      const lT = TT.program,
        MT = this._gl.getUniformBlockIndex(lT, kT);
      4294967295 !== MT && this._gl.uniformBlockBinding(lT, MT, cT)
    });
    var DT = cT(39482),
      aT = cT(39516);
    let FT = !1;
    FT || (FT = !0, aT.d.prototype.displayLoadingUI = function() {
      if (!(0, DT.i)()) return;
      const TT = this.loadingScreen;
      TT && TT.displayLoadingUI()
    }, aT.d.prototype.hideLoadingUI = function() {
      if (!(0, DT.i)()) return;
      const TT = this._loadingScreen;
      TT && TT.hideLoadingUI()
    }, Object.defineProperty(aT.d.prototype, "loadingScreen", {
      get: function() {
        return !this._loadingScreen && this._renderingCanvas && (this._loadingScreen = aT.d.DefaultLoadingScreenFactory(this._renderingCanvas)), this._loadingScreen
      },
      set: function(TT) {
        this._loadingScreen = TT
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(aT.d.prototype, "loadingUIText", {
      set: function(TT) {
        this.loadingScreen.loadingUIText = TT
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(aT.d.prototype, "loadingUIBackgroundColor", {
      set: function(TT) {
        this.loadingScreen.loadingUIBackgroundColor = TT
      },
      enumerable: !0,
      configurable: !0
    })), (0, cT(39579).d)();
    let rT = !1;
    rT || (rT = !0, aT.d.prototype.getInputElement = function() {
      return this._renderingCanvas
    }, aT.d.prototype.getDepthFunction = function() {
      return this._depthCullingState.depthFunc
    }, aT.d.prototype.setDepthFunction = function(TT) {
      this._depthCullingState.depthFunc = TT
    }, aT.d.prototype.setDepthFunctionToGreater = function() {
      this.setDepthFunction(516)
    }, aT.d.prototype.setDepthFunctionToGreaterOrEqual = function() {
      this.setDepthFunction(518)
    }, aT.d.prototype.setDepthFunctionToLess = function() {
      this.setDepthFunction(513)
    }, aT.d.prototype.setDepthFunctionToLessOrEqual = function() {
      this.setDepthFunction(515)
    }, aT.d.prototype.getDepthWrite = function() {
      return this._depthCullingState.depthMask
    }, aT.d.prototype.setDepthWrite = function(TT) {
      this._depthCullingState.depthMask = TT
    }, aT.d.prototype.setAlphaConstants = function(TT, kT, cT, lT) {
      this._alphaState.setAlphaBlendConstants(TT, kT, cT, lT)
    }, aT.d.prototype.getAlphaMode = function() {
      let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
      return this._alphaMode[TT]
    }, aT.d.prototype.getAlphaEquation = function() {
      let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
      return this._alphaEquation[TT]
    });
    let PT = !1;
    PT || (PT = !0, aT.d.prototype.getStencilBuffer = function() {
      return this._stencilState.stencilTest
    }, aT.d.prototype.setStencilBuffer = function(TT) {
      this._stencilState.stencilTest = TT
    }, aT.d.prototype.getStencilMask = function() {
      return this._stencilState.stencilMask
    }, aT.d.prototype.setStencilMask = function(TT) {
      this._stencilState.stencilMask = TT
    }, aT.d.prototype.getStencilFunction = function() {
      return this._stencilState.stencilFunc
    }, aT.d.prototype.getStencilBackFunction = function() {
      return this._stencilState.stencilBackFunc
    }, aT.d.prototype.getStencilFunctionReference = function() {
      return this._stencilState.stencilFuncRef
    }, aT.d.prototype.getStencilFunctionMask = function() {
      return this._stencilState.stencilFuncMask
    }, aT.d.prototype.setStencilFunction = function(TT) {
      this._stencilState.stencilFunc = TT
    }, aT.d.prototype.setStencilBackFunction = function(TT) {
      this._stencilState.stencilBackFunc = TT
    }, aT.d.prototype.setStencilFunctionReference = function(TT) {
      this._stencilState.stencilFuncRef = TT
    }, aT.d.prototype.setStencilFunctionMask = function(TT) {
      this._stencilState.stencilFuncMask = TT
    }, aT.d.prototype.getStencilOperationFail = function() {
      return this._stencilState.stencilOpStencilFail
    }, aT.d.prototype.getStencilBackOperationFail = function() {
      return this._stencilState.stencilBackOpStencilFail
    }, aT.d.prototype.getStencilOperationDepthFail = function() {
      return this._stencilState.stencilOpDepthFail
    }, aT.d.prototype.getStencilBackOperationDepthFail = function() {
      return this._stencilState.stencilBackOpDepthFail
    }, aT.d.prototype.getStencilOperationPass = function() {
      return this._stencilState.stencilOpStencilDepthPass
    }, aT.d.prototype.getStencilBackOperationPass = function() {
      return this._stencilState.stencilBackOpStencilDepthPass
    }, aT.d.prototype.setStencilOperationFail = function(TT) {
      this._stencilState.stencilOpStencilFail = TT
    }, aT.d.prototype.setStencilBackOperationFail = function(TT) {
      this._stencilState.stencilBackOpStencilFail = TT
    }, aT.d.prototype.setStencilOperationDepthFail = function(TT) {
      this._stencilState.stencilOpDepthFail = TT
    }, aT.d.prototype.setStencilBackOperationDepthFail = function(TT) {
      this._stencilState.stencilBackOpDepthFail = TT
    }, aT.d.prototype.setStencilOperationPass = function(TT) {
      this._stencilState.stencilOpStencilDepthPass = TT
    }, aT.d.prototype.setStencilBackOperationPass = function(TT) {
      this._stencilState.stencilBackOpStencilDepthPass = TT
    }, aT.d.prototype.cacheStencilState = function() {
      this._cachedStencilBuffer = this.getStencilBuffer(), this._cachedStencilFunction = this.getStencilFunction(), this._cachedStencilMask = this.getStencilMask(), this._cachedStencilOperationPass = this.getStencilOperationPass(), this._cachedStencilOperationFail = this.getStencilOperationFail(), this._cachedStencilOperationDepthFail = this.getStencilOperationDepthFail(), this._cachedStencilReference = this.getStencilFunctionReference()
    }, aT.d.prototype.restoreStencilState = function() {
      this.setStencilFunction(this._cachedStencilFunction), this.setStencilMask(this._cachedStencilMask), this.setStencilBuffer(this._cachedStencilBuffer), this.setStencilOperationPass(this._cachedStencilOperationPass), this.setStencilOperationFail(this._cachedStencilOperationFail), this.setStencilOperationDepthFail(this._cachedStencilOperationDepthFail), this.setStencilFunctionReference(this._cachedStencilReference)
    });
    cT(39651);
    let wT = !1;
    wT || (wT = !0, aT.d.prototype.createDepthStencilTexture = function(TT, kT, cT) {
      if (kT.isCube) {
        const cT = TT.width || TT;
        return this._createDepthStencilCubeTexture(cT, kT)
      }
      return this._createDepthStencilTexture(TT, kT, cT)
    });
    cT(39657), cT(39703);
    let mT = !1;
    mT || (mT = !0, MT.ThinEngine.prototype.enableScissor = function(TT, kT, cT, lT) {
      const MT = this._gl;
      MT.enable(MT.SCISSOR_TEST), MT.scissor(TT, kT, cT, lT)
    }, MT.ThinEngine.prototype.disableScissor = function() {
      const TT = this._gl;
      TT.disable(TT.SCISSOR_TEST)
    })
  },
  39451: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => aT
    });
    var lT = cT(39454),
      MT = cT(36925),
      KT = cT(39463),
      OT = cT(39521);
    class yT {
      constructor() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 30;
        this._enabled = !0, this._rollingFrameTime = new fT(TT)
      }
      sampleFrame() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : OT.d.Now;
        if (this._enabled) {
          if (null != this._lastFrameTimeMs) {
            const kT = TT - this._lastFrameTimeMs;
            this._rollingFrameTime.add(kT)
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
    class fT {
      constructor(TT) {
        this._samples = new Array(TT), this.reset()
      }
      add(TT) {
        let kT;
        if (this.isSaturated()) {
          const TT = this._samples[this._pos];
          kT = TT - this.average, this.average -= kT / (this._sampleCount - 1), this._m2 -= kT * (TT - this.average)
        } else this._sampleCount++;
        kT = TT - this.average, this.average += kT / this._sampleCount, this._m2 += kT * (TT - this.average), this.variance = this._m2 / (this._sampleCount - 1), this._samples[this._pos] = TT, this._pos++, this._pos %= this._samples.length
      }
      history(TT) {
        if (TT >= this._sampleCount || TT >= this._samples.length) return 0;
        const kT = this._wrapPosition(this._pos - 1);
        return this._samples[this._wrapPosition(kT - TT)]
      }
      isSaturated() {
        return this._sampleCount >= this._samples.length
      }
      reset() {
        this.average = 0, this.variance = 0, this._sampleCount = 0, this._pos = 0, this._m2 = 0
      }
      _wrapPosition(TT) {
        const kT = this._samples.length;
        return (TT % kT + kT) % kT
      }
    }
    var xT = cT(39539),
      IT = cT(38512),
      AT = cT(39557),
      CT = cT(39516),
      jT = cT(39482);

    function vT(TT) {
      const kT = function(TT) {
        if (!(0, jT.d)() || !document.body) return null;
        const kT = document.createElement("span");
        kT.textContent = "Hg", kT.style.font = TT;
        const cT = document.createElement("div");
        cT.style.display = "inline-block", cT.style.width = "1px", cT.style.height = "0px", cT.style.verticalAlign = "bottom";
        const lT = document.createElement("div");
        let MT, KT;
        lT.style.whiteSpace = "nowrap", lT.appendChild(kT), lT.appendChild(cT), document.body.appendChild(lT);
        try {
          KT = cT.getBoundingClientRect().top - kT.getBoundingClientRect().top, cT.style.verticalAlign = "baseline", MT = cT.getBoundingClientRect().top - kT.getBoundingClientRect().top
        } finally {
          document.body.removeChild(lT)
        }
        const OT = {
          ascent: MT,
          height: KT,
          descent: KT - MT
        };
        return tT(OT) ? OT : null
      }(TT);
      if (kT) return kT;
      const cT = function(TT) {
        let kT = null;
        try {
          "undefined" !== typeof OffscreenCanvas ? kT = new OffscreenCanvas(64, 64) : (0, jT.d)() && "function" === typeof document.createElement && (kT = document.createElement("canvas"), kT.width = 64, kT.height = 64);
          const cT = kT?.getContext("2d");
          if (!cT) return null;
          cT.font = TT;
          const lT = cT.measureText("Hg"),
            MT = Number(lT.actualBoundingBoxAscent ?? lT.fontBoundingBoxAscent),
            KT = Number(lT.actualBoundingBoxDescent ?? lT.fontBoundingBoxDescent),
            OT = {
              ascent: MT,
              height: MT + KT,
              descent: KT
            };
          return tT(OT) ? OT : null
        } catch {
          return null
        } finally {
          const TT = kT;
          "function" === typeof TT?.dispose && TT.dispose()
        }
      }(TT);
      return cT || function(TT) {
        const kT = Math.max(1, function(TT) {
            const kT = /(?:^|\s)([0-9]+(?:\.[0-9]+)?)px(?:\/|\s|$)/.exec(String(TT || ""));
            return kT ? Number(kT[1]) : 16
          }(TT)),
          cT = .8 * kT,
          lT = .2 * kT;
        return {
          ascent: cT,
          height: cT + lT,
          descent: lT
        }
      }(TT)
    }

    function tT(TT) {
      return Number.isFinite(TT.ascent) && Number.isFinite(TT.height) && Number.isFinite(TT.descent) && TT.height > 0
    }

    function hT(TT) {
      if (TT.requestPointerLock) {
        const kT = TT.requestPointerLock();
        kT instanceof Promise ? kT.then((() => {
          TT.focus()
        })).catch((() => {})) : TT.focus()
      }
    }
    var NT = cT(39571),
      QT = cT(39514),
      ST = cT(39579),
      DT = cT(39583);
    class aT extends KT.ThinEngine {
      static get NpmPackage() {
        return CT.d.NpmPackage
      }
      static get Version() {
        return CT.d.Version
      }
      static get Instances() {
        return MT.d.Instances
      }
      static get LastCreatedEngine() {
        return MT.d.LastCreatedEngine
      }
      static get LastCreatedScene() {
        return MT.d.LastCreatedScene
      }
      static DefaultLoadingScreenFactory(TT) {
        return CT.d.DefaultLoadingScreenFactory(TT)
      }
      get _supportsHardwareTextureRescaling() {
        return !!aT._RescalePostProcessFactory
      }
      _measureFps() {
        this._performanceMonitor.sampleFrame(), this._fps = this._performanceMonitor.averageFPS, this._deltaTime = this._performanceMonitor.instantaneousFrameTime || 0
      }
      get performanceMonitor() {
        return this._performanceMonitor
      }
      constructor(TT, kT, cT) {
        let lT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        (0, ST.d)(), (0, DT.c)(), super(TT, kT, cT, lT), this._performanceMonitor = new yT, this._drawCalls = new NT.b, TT && (this._features.supportRenderPasses = !0)
      }
      _initGLContext() {
        super._initGLContext(), this._rescalePostProcess = null
      }
      _sharedInit(TT) {
        super._sharedInit(TT),
          function(TT, kT, cT) {
            TT._onCanvasFocus = () => {
              TT.onCanvasFocusObservable.notifyObservers(TT)
            }, TT._onCanvasBlur = () => {
              TT.onCanvasBlurObservable.notifyObservers(TT)
            }, TT._onCanvasContextMenu = kT => {
              TT.disableContextMenu && kT.preventDefault()
            }, kT.addEventListener("focus", TT._onCanvasFocus), kT.addEventListener("blur", TT._onCanvasBlur), kT.addEventListener("contextmenu", TT._onCanvasContextMenu), TT._onBlur = () => {
              TT.disablePerformanceMonitorInBackground && TT.performanceMonitor.disable(), TT._windowIsBackground = !0
            }, TT._onFocus = () => {
              TT.disablePerformanceMonitorInBackground && TT.performanceMonitor.enable(), TT._windowIsBackground = !1
            }, TT._onCanvasPointerOut = cT => {
              document.elementFromPoint(cT.clientX, cT.clientY) !== kT && TT.onCanvasPointerOutObservable.notifyObservers(cT)
            };
            const lT = TT.getHostWindow();
            lT && "function" === typeof lT.addEventListener && (lT.addEventListener("blur", TT._onBlur), lT.addEventListener("focus", TT._onFocus)), kT.addEventListener("pointerout", TT._onCanvasPointerOut), cT.doNotHandleTouchAction || function(TT) {
              TT && TT.setAttribute && (TT.setAttribute("touch-action", "none"), TT.style.touchAction = "none", TT.style.webkitTapHighlightColor = "transparent")
            }(kT), !CT.d.audioEngine && cT.audioEngine && CT.d.AudioEngineFactory && (CT.d.audioEngine = CT.d.AudioEngineFactory(TT.getRenderingCanvas(), TT.getAudioContext(), TT.getAudioDestination())), (0, jT.d)() && (TT._onFullscreenChange = () => {
              TT.isFullscreen = !!document.fullscreenElement, TT.isFullscreen && TT._pointerLockRequested && kT && hT(kT)
            }, document.addEventListener("fullscreenchange", TT._onFullscreenChange, !1), document.addEventListener("webkitfullscreenchange", TT._onFullscreenChange, !1), TT._onPointerLockChange = () => {
              TT.isPointerLock = document.pointerLockElement === kT
            }, document.addEventListener("pointerlockchange", TT._onPointerLockChange, !1), document.addEventListener("webkitpointerlockchange", TT._onPointerLockChange, !1)), TT.enableOfflineSupport = void 0 !== CT.d.OfflineProviderFactory, TT._deterministicLockstep = !!cT.deterministicLockstep, TT._lockstepMaxSteps = cT.lockstepMaxSteps || 0, TT._timeStep = cT.timeStep || 1 / 60
          }(this, TT, this._creationOptions)
      }
      resizeImageBitmap(TT, kT, cT) {
        return function(TT, kT, cT, lT) {
          const MT = TT.createCanvas(cT, lT).getContext("2d");
          if (!MT) throw new Error("Unable to get 2d context for resizeImageBitmap");
          return MT.drawImage(kT, 0, 0), MT.getImageData(0, 0, cT, lT).data
        }(this, TT, kT, cT)
      }
      async _createImageBitmapFromSource(TT, kT) {
        return await async function(TT, kT, cT) {
          return await new Promise(((lT, MT) => {
            const KT = new Image;
            KT.onload = () => {
              KT.decode().then((() => {
                TT.createImageBitmap(KT, cT).then((TT => {
                  lT(TT)
                }))
              }))
            }, KT.onerror = () => {
              MT(`Error loading image ${KT.src}`)
            }, KT.src = kT
          }))
        }(this, TT, kT)
      }
      switchFullscreen(TT) {
        this.isFullscreen ? this.exitFullscreen() : this.enterFullscreen(TT)
      }
      enterFullscreen(TT) {
        this.isFullscreen || (this._pointerLockRequested = TT, this._renderingCanvas && function(TT) {
          const kT = TT.requestFullscreen || TT.webkitRequestFullscreen;
          kT && kT.call(TT)
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
      setDirectViewport(TT, kT, cT, lT) {
        const MT = this._cachedViewport;
        return this._cachedViewport = null, this._viewport(TT, kT, cT, lT), MT
      }
      scissorClear(TT, kT, cT, lT, MT) {
        this.enableScissor(TT, kT, cT, lT), this.clear(MT, !0, !0, !0), this.disableScissor()
      }
      getVertexShaderSource(TT) {
        const kT = this._gl.getAttachedShaders(TT);
        return kT ? this._gl.getShaderSource(kT[0]) : null
      }
      getFragmentShaderSource(TT) {
        const kT = this._gl.getAttachedShaders(TT);
        return kT ? this._gl.getShaderSource(kT[1]) : null
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
        return vT(TT)
      }
      enterPointerlock() {
        this._renderingCanvas && hT(this._renderingCanvas)
      }
      exitPointerlock() {
        document.exitPointerLock && document.exitPointerLock()
      }
      iN() {
        this._measureFps(), super.iN()
      }
      _deletePipelineContext(TT) {
        const kT = TT;
        kT && kT.program && kT.transformFeedback && (this.deleteTransformFeedback(kT.transformFeedback), kT.transformFeedback = null), super._deletePipelineContext(TT)
      }
      createShaderProgram(TT, kT, cT, lT, MT) {
        let KT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        MT = MT || this._gl, this.onBeforeShaderCompilationObservable.notifyObservers(this);
        const OT = super.createShaderProgram(TT, kT, cT, lT, MT, KT);
        return this.onAfterShaderCompilationObservable.notifyObservers(this), OT
      }
      _createShaderProgram(TT, kT, cT, lT) {
        let MT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        const KT = lT.createProgram();
        if (TT.program = KT, !KT) throw new Error("Unable to create program");
        if (lT.attachShader(KT, kT), lT.attachShader(KT, cT), this.qv > 1 && MT) {
          const kT = this.createTransformFeedback();
          this.bindTransformFeedback(kT), this.setTranformFeedbackVaryings(KT, MT), TT.transformFeedback = kT
        }
        return lT.linkProgram(KT), this.qv > 1 && MT && this.bindTransformFeedback(null), TT.context = lT, TT.vertexShader = kT, TT.fragmentShader = cT, TT.isParallelCompiled || this._finalizePipelineContext(TT), KT
      }
      _releaseTexture(TT) {
        super._releaseTexture(TT)
      }
      _releaseRenderTargetWrapper(TT) {
        super._releaseRenderTargetWrapper(TT);
        for (const kT of this.scenes) {
          for (const cT of kT.postProcesses) cT._outputTexture === TT && (cT._outputTexture = null);
          for (const cT of kT.cameras)
            for (const kT of cT._postProcesses) kT && kT._outputTexture === TT && (kT._outputTexture = null)
        }
      }
      _rescaleTexture(TT, kT, cT, lT, MT) {
        this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MAG_FILTER, this._gl.LINEAR), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MIN_FILTER, this._gl.LINEAR), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_S, this._gl.CLAMP_TO_EDGE), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_T, this._gl.CLAMP_TO_EDGE);
        const KT = this.createRenderTargetTexture({
          width: kT.width,
          height: kT.height
        }, {
          generateMipMaps: !1,
          type: 0,
          samplingMode: 2,
          generateDepthBuffer: !1,
          generateStencilBuffer: !1
        });
        if (!this._rescalePostProcess && aT._RescalePostProcessFactory && (this._rescalePostProcess = aT._RescalePostProcessFactory(this)), this._rescalePostProcess) {
          this._rescalePostProcess.externalTextureSamplerBinding = !0;
          const OT = () => {
              this._rescalePostProcess.onApply = function(kT) {
                kT._bindTexture("textureSampler", TT)
              };
              let OT = cT;
              OT || (OT = this.scenes[this.scenes.length - 1]), OT.postProcessManager.directRender([this._rescalePostProcess], KT, !0), this._bindTextureDirectly(this._gl.TEXTURE_2D, kT, !0), this._gl.copyTexImage2D(this._gl.TEXTURE_2D, 0, lT, 0, 0, kT.width, kT.height, 0), this.unBindFramebuffer(KT), KT.dispose(), MT && MT()
            },
            yT = this._rescalePostProcess.getEffect();
          yT ? yT.executeWhenCompiled(OT) : this._rescalePostProcess.onEffectCreatedObservable.addOnce((TT => {
            TT.executeWhenCompiled(OT)
          }))
        }
      }
      wrapWebGLTexture(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3,
          MT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          KT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        const OT = new AT.b(TT, this._gl),
          yT = new lT.b(this, 15, !0);
        return yT._hardwareTexture = OT, yT.baseWidth = MT, yT.baseHeight = KT, yT.width = MT, yT.height = KT, yT.isReady = !0, yT.useMipMaps = kT, this.updateTextureSamplingMode(cT, yT), yT
      }
      updateWrappedWebGLTexture(TT, kT) {
        if (15 !== TT.source) throw new Error("updateWrappedWebGLTexture: target InternalTexture was not produced by wrapWebGLTexture.");
        for (const lT of this._renderTargetWrapperCache)
          if (lT.textures?.includes(TT)) {
            if (lT.isMulti) throw new Error("updateWrappedWebGLTexture: wrapped texture is part of a multi render-target; not supported. Dispose and re-wrap.");
            if (lT._depthStencilTexture) throw new Error("updateWrappedWebGLTexture: wrapped texture's render-target wrapper has a depth/stencil texture; not supported. Dispose and re-wrap.")
          } TT._hardwareTexture = new AT.b(kT, this._gl), TT.isReady = !0, TT._cachedCoordinatesMode = null, TT._cachedWrapU = null, TT._cachedWrapV = null, TT._cachedWrapR = null, TT._cachedAnisotropicFilteringLevel = null;
        for (const lT in this._boundTexturesCache) this._boundTexturesCache[lT] === TT && (this._boundTexturesCache[lT] = null);
        this.updateTextureSamplingMode(TT.samplingMode, TT);
        const cT = this._gl;
        for (const lT of this._renderTargetWrapperCache) {
          if (lT.texture !== TT) continue;
          const MT = lT,
            KT = lT.samples,
            OT = KT > 1;
          MT._framebuffer && cT.deleteFramebuffer(MT._framebuffer), !OT && MT._depthStencilBuffer && (cT.deleteRenderbuffer(MT._depthStencilBuffer), MT._depthStencilBuffer = null);
          const yT = this._currentFramebuffer,
            fT = cT.createFramebuffer();
          this._bindUnboundFramebuffer(fT), cT.framebufferTexture2D(cT.FRAMEBUFFER, cT.COLOR_ATTACHMENT0, cT.TEXTURE_2D, kT, 0), OT || (MT._depthStencilBuffer = this._setupFramebufferDepthAttachments(lT._generateStencilBuffer, lT._generateDepthBuffer, lT.width, lT.height)), this._bindUnboundFramebuffer(yT), MT._framebuffer = fT, OT && (lT._samples = 1, this.updateRenderTargetTextureSampleCount(MT, KT))
        }
      }
      _uploadImageToTexture(TT, kT) {
        let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          lT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const MT = this._gl,
          KT = this._getWebGLTextureType(TT.type),
          OT = this._getInternalFormat(TT.format),
          yT = this._getRGBABufferInternalSizedFormat(TT.type, OT),
          fT = TT.isCube ? MT.TEXTURE_CUBE_MAP : MT.TEXTURE_2D;
        this._bindTextureDirectly(fT, TT, !0), this._unpackFlipY(TT.invertY);
        let xT = MT.TEXTURE_2D;
        TT.isCube && (xT = MT.TEXTURE_CUBE_MAP_POSITIVE_X + cT), MT.texImage2D(xT, lT, yT, OT, KT, kT), this._bindTextureDirectly(fT, null, !0)
      }
      updateTextureComparisonFunction(TT, kT) {
        if (1 === this.qv) return void IT.e.Error("WebGL 1 does not support texture comparison.");
        const cT = this._gl;
        TT.isCube ? (this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, TT, !0), 0 === kT ? (cT.texParameteri(cT.TEXTURE_CUBE_MAP, cT.TEXTURE_COMPARE_FUNC, 515), cT.texParameteri(cT.TEXTURE_CUBE_MAP, cT.TEXTURE_COMPARE_MODE, cT.NONE)) : (cT.texParameteri(cT.TEXTURE_CUBE_MAP, cT.TEXTURE_COMPARE_FUNC, kT), cT.texParameteri(cT.TEXTURE_CUBE_MAP, cT.TEXTURE_COMPARE_MODE, cT.COMPARE_REF_TO_TEXTURE)), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null)) : (this._bindTextureDirectly(this._gl.TEXTURE_2D, TT, !0), 0 === kT ? (cT.texParameteri(cT.TEXTURE_2D, cT.TEXTURE_COMPARE_FUNC, 515), cT.texParameteri(cT.TEXTURE_2D, cT.TEXTURE_COMPARE_MODE, cT.NONE)) : (cT.texParameteri(cT.TEXTURE_2D, cT.TEXTURE_COMPARE_FUNC, kT), cT.texParameteri(cT.TEXTURE_2D, cT.TEXTURE_COMPARE_MODE, cT.COMPARE_REF_TO_TEXTURE)), this._bindTextureDirectly(this._gl.TEXTURE_2D, null)), TT._comparisonFunction = kT
      }
      createInstancesBuffer(TT) {
        const kT = this._gl.createBuffer();
        if (!kT) throw new Error("Unable to create instance buffer");
        const cT = new xT.c(kT);
        return cT.DA = TT, this.bindArrayBuffer(cT), this._gl.bufferData(this._gl.ARRAY_BUFFER, TT, this._gl.DYNAMIC_DRAW), cT.references = 1, cT
      }
      deleteInstancesBuffer(TT) {
        this._gl.deleteBuffer(TT)
      }
      async _clientWaitAsync(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10;
        const lT = this._gl;
        return await new Promise(((MT, KT) => {
          (0, QT.g)((() => {
            const cT = lT.clientWaitSync(TT, kT, 0);
            if (cT == lT.WAIT_FAILED) throw new Error("clientWaitSync failed");
            return cT != lT.TIMEOUT_EXPIRED
          }), MT, KT, cT)
        }))
      }
      _readPixelsAsync(TT, kT, cT, lT, MT, KT, OT) {
        if (this._webGLVersion < 2) throw new Error("_readPixelsAsync only work on WebGL2+");
        const yT = this._gl,
          fT = yT.createBuffer();
        yT.bindBuffer(yT.PIXEL_PACK_BUFFER, fT), yT.bufferData(yT.PIXEL_PACK_BUFFER, OT.byteLength, yT.STREAM_READ), yT.readPixels(TT, kT, cT, lT, MT, KT, 0), yT.bindBuffer(yT.PIXEL_PACK_BUFFER, null);
        const xT = yT.fenceSync(yT.SYNC_GPU_COMMANDS_COMPLETE, 0);
        return xT ? (yT.flush(), this._clientWaitAsync(xT, 0, 10).then((() => (yT.deleteSync(xT), yT.bindBuffer(yT.PIXEL_PACK_BUFFER, fT), yT.getBufferSubData(yT.PIXEL_PACK_BUFFER, 0, OT), yT.bindBuffer(yT.PIXEL_PACK_BUFFER, null), yT.deleteBuffer(fT), OT)))) : null
      }
      dispose() {
        this.hideLoadingUI?.(), this._rescalePostProcess && this._rescalePostProcess.dispose(),
          function(TT, kT) {
            1 === MT.d.Instances.length && CT.d.audioEngine && (CT.d.audioEngine.dispose(), CT.d.audioEngine = null);
            const cT = TT.getHostWindow();
            cT && "function" === typeof cT.removeEventListener && (cT.removeEventListener("blur", TT._onBlur), cT.removeEventListener("focus", TT._onFocus)), kT && (kT.removeEventListener("focus", TT._onCanvasFocus), kT.removeEventListener("blur", TT._onCanvasBlur), kT.removeEventListener("pointerout", TT._onCanvasPointerOut), kT.removeEventListener("contextmenu", TT._onCanvasContextMenu)), (0, jT.d)() && (document.removeEventListener("fullscreenchange", TT._onFullscreenChange), document.removeEventListener("mozfullscreenchange", TT._onFullscreenChange), document.removeEventListener("webkitfullscreenchange", TT._onFullscreenChange), document.removeEventListener("msfullscreenchange", TT._onFullscreenChange), document.removeEventListener("pointerlockchange", TT._onPointerLockChange), document.removeEventListener("mspointerlockchange", TT._onPointerLockChange), document.removeEventListener("mozpointerlockchange", TT._onPointerLockChange), document.removeEventListener("webkitpointerlockchange", TT._onPointerLockChange))
          }(this, this._renderingCanvas), super.dispose()
      }
    }
    aT.ALPHA_DISABLE = 0, aT.ALPHA_ADD = 1, aT.ALPHA_COMBINE = 2, aT.ALPHA_SUBTRACT = 3, aT.ALPHA_MULTIPLY = 4, aT.ALPHA_MAXIMIZED = 5, aT.ALPHA_ONEONE = 6, aT.ALPHA_PREMULTIPLIED = 7, aT.ALPHA_PREMULTIPLIED_PORTERDUFF = 8, aT.ALPHA_INTERPOLATE = 9, aT.ALPHA_SCREENMODE = 10, aT.DELAYLOADSTATE_NONE = 0, aT.DELAYLOADSTATE_LOADED = 1, aT.DELAYLOADSTATE_LOADING = 2, aT.DELAYLOADSTATE_NOTLOADED = 4, aT.NEVER = 512, aT.ALWAYS = 519, aT.LESS = 513, aT.EQUAL = 514, aT.LEQUAL = 515, aT.GREATER = 516, aT.GEQUAL = 518, aT.NOTEQUAL = 517, aT.KEEP = 7680, aT.REPLACE = 7681, aT.INCR = 7682, aT.DECR = 7683, aT.INVERT = 5386, aT.INCR_WRAP = 34055, aT.DECR_WRAP = 34056, aT.TEXTURE_CLAMP_ADDRESSMODE = 0, aT.TEXTURE_WRAP_ADDRESSMODE = 1, aT.TEXTURE_MIRROR_ADDRESSMODE = 2, aT.TEXTUREFORMAT_ALPHA = 0, aT.TEXTUREFORMAT_LUMINANCE = 1, aT.TEXTUREFORMAT_LUMINANCE_ALPHA = 2, aT.TEXTUREFORMAT_RGB = 4, aT.TEXTUREFORMAT_RGBA = 5, aT.TEXTUREFORMAT_RED = 6, aT.TEXTUREFORMAT_R = 6, aT.TEXTUREFORMAT_R16_UNORM = 33322, aT.TEXTUREFORMAT_RG16_UNORM = 33324, aT.TEXTUREFORMAT_RGB16_UNORM = 32852, aT.TEXTUREFORMAT_RGBA16_UNORM = 32859, aT.TEXTUREFORMAT_R16_SNORM = 36760, aT.TEXTUREFORMAT_RG16_SNORM = 36761, aT.TEXTUREFORMAT_RGB16_SNORM = 36762, aT.TEXTUREFORMAT_RGBA16_SNORM = 36763, aT.TEXTUREFORMAT_RG = 7, aT.TEXTUREFORMAT_RED_INTEGER = 8, aT.TEXTUREFORMAT_R_INTEGER = 8, aT.TEXTUREFORMAT_RG_INTEGER = 9, aT.TEXTUREFORMAT_RGB_INTEGER = 10, aT.TEXTUREFORMAT_RGBA_INTEGER = 11, aT.TEXTURETYPE_UNSIGNED_BYTE = 0, aT.TEXTURETYPE_UNSIGNED_INT = 0, aT.TEXTURETYPE_FLOAT = 1, aT.TEXTURETYPE_HALF_FLOAT = 2, aT.TEXTURETYPE_BYTE = 3, aT.TEXTURETYPE_SHORT = 4, aT.TEXTURETYPE_UNSIGNED_SHORT = 5, aT.TEXTURETYPE_INT = 6, aT.TEXTURETYPE_UNSIGNED_INTEGER = 7, aT.TEXTURETYPE_UNSIGNED_SHORT_4_4_4_4 = 8, aT.TEXTURETYPE_UNSIGNED_SHORT_5_5_5_1 = 9, aT.TEXTURETYPE_UNSIGNED_SHORT_5_6_5 = 10, aT.TEXTURETYPE_UNSIGNED_INT_2_10_10_10_REV = 11, aT.TEXTURETYPE_UNSIGNED_INT_24_8 = 12, aT.TEXTURETYPE_UNSIGNED_INT_10F_11F_11F_REV = 13, aT.TEXTURETYPE_UNSIGNED_INT_5_9_9_9_REV = 14, aT.TEXTURETYPE_FLOAT_32_UNSIGNED_INT_24_8_REV = 15, aT.TEXTURE_NEAREST_SAMPLINGMODE = 1, aT.TEXTURE_BILINEAR_SAMPLINGMODE = 2, aT.TEXTURE_TRILINEAR_SAMPLINGMODE = 3, aT.TEXTURE_NEAREST_NEAREST_MIPLINEAR = 8, aT.TEXTURE_LINEAR_LINEAR_MIPNEAREST = 11, aT.TEXTURE_LINEAR_LINEAR_MIPLINEAR = 3, aT.TEXTURE_NEAREST_NEAREST_MIPNEAREST = 4, aT.TEXTURE_NEAREST_LINEAR_MIPNEAREST = 5, aT.TEXTURE_NEAREST_LINEAR_MIPLINEAR = 6, aT.TEXTURE_NEAREST_LINEAR = 7, aT.TEXTURE_NEAREST_NEAREST = 1, aT.TEXTURE_LINEAR_NEAREST_MIPNEAREST = 9, aT.TEXTURE_LINEAR_NEAREST_MIPLINEAR = 10, aT.TEXTURE_LINEAR_LINEAR = 2, aT.TEXTURE_LINEAR_NEAREST = 12, aT.TEXTURE_EXPLICIT_MODE = 0, aT.TEXTURE_SPHERICAL_MODE = 1, aT.TEXTURE_PLANAR_MODE = 2, aT.TEXTURE_CUBIC_MODE = 3, aT.TEXTURE_PROJECTION_MODE = 4, aT.TEXTURE_SKYBOX_MODE = 5, aT.TEXTURE_INVCUBIC_MODE = 6, aT.TEXTURE_EQUIRECTANGULAR_MODE = 7, aT.TEXTURE_FIXED_EQUIRECTANGULAR_MODE = 8, aT.TEXTURE_FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9, aT.SCALEMODE_FLOOR = 1, aT.SCALEMODE_NEAREST = 2, aT.SCALEMODE_CEILING = 3
  },
  39601: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => MT
    });
    var lT = cT(39562);
    class MT {
      get depthStencilTexture() {
        return this._depthStencilTexture
      }
      setDepthStencilTexture(TT) {
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && this._depthStencilTexture && this._depthStencilTexture.dispose(), this._depthStencilTexture = TT, this._generateDepthBuffer = this._generateStencilBuffer = this._depthStencilTextureWithStencil = !1, TT && (this._generateDepthBuffer = !0, this._generateStencilBuffer = this._depthStencilTextureWithStencil = (0, lT.c)(TT.format))
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
        const kT = this._textures[TT],
          cT = this._layerIndices?.[TT] ?? 0,
          lT = this._faceIndices?.[TT] ?? 0;
        return kT.isCube ? 6 * cT + lT : kT.is3D ? 0 : cT
      }
      get samples() {
        return this._samples
      }
      setSamples(TT) {
        let kT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          cT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.samples === TT && !cT) return TT;
        const lT = this._isMulti ? this._engine.updateMultipleRenderTargetTextureSampleCount(this, TT, kT) : this._engine.updateRenderTargetTextureSampleCount(this, TT);
        return this._samples = TT, lT
      }
      resolveMSAATextures() {
        this.isMulti ? this._engine.resolveMultiFramebuffer(this) : this._engine.resolveFramebuffer(this)
      }
      generateMipMaps() {
        this._engine._currentRenderTarget === this && (this.isMulti ? this._engine.unBindMultiColorAttachmentFramebuffer(this, !0) : this._engine.unBindFramebuffer(this, !0)), this.isMulti ? this._engine.generateMipMapsMultiFramebuffer(this) : this._engine.generateMipMapsFramebuffer(this)
      }
      constructor(TT, kT, cT, lT, MT) {
        this._textures = null, this._faceIndices = null, this._layerIndices = null, this._samples = 1, this._attachments = null, this._generateStencilBuffer = !1, this._generateDepthBuffer = !1, this._depthStencilTextureWithStencil = !1, this.disableAutomaticMSAAResolve = !1, this.resolveMSAAColors = !0, this.resolveMSAADepth = !1, this.resolveMSAAStencil = !1, this.depthReadOnly = !1, this.stencilReadOnly = !1, this._isMulti = TT, this._isCube = kT, this._size = cT, this._engine = lT, this._depthStencilTexture = null, this.label = MT
      }
      setTextures(TT) {
        Array.isArray(TT) ? this._textures = TT : this._textures = TT ? [TT] : null
      }
      setTexture(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          cT = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._textures || (this._textures = []), this._textures[kT] !== TT && (this._textures[kT] && cT && this._textures[kT].dispose(), this._textures[kT] = TT)
      }
      setLayerAndFaceIndices(TT, kT) {
        this._layerIndices = TT, this._faceIndices = kT
      }
      setLayerAndFaceIndex() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          kT = arguments.length > 1 ? arguments[1] : void 0,
          cT = arguments.length > 2 ? arguments[2] : void 0;
        this._layerIndices || (this._layerIndices = []), this._faceIndices || (this._faceIndices = []), void 0 !== kT && kT >= 0 && (this._layerIndices[TT] = kT), void 0 !== cT && cT >= 0 && (this._faceIndices[TT] = cT)
      }
      createDepthStencilTexture() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          kT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          cT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          lT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          MT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          KT = arguments.length > 5 ? arguments[5] : void 0;
        return this._depthStencilTexture?.dispose(), this._depthStencilTextureWithStencil = cT, this._depthStencilTextureLabel = KT, this._depthStencilTexture = this._engine.createDepthStencilTexture(this._size, {
          bilinearFiltering: kT,
          comparisonFunction: TT,
          generateStencil: cT,
          isCube: this._isCube,
          samples: lT,
          depthTextureFormat: MT,
          label: KT
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
          const kT = this.textures;
          if (kT && kT.length > 0) {
            let cT = !1,
              lT = kT.length,
              MT = -1;
            const KT = kT[kT.length - 1]._source;
            14 !== KT && 12 !== KT || (cT = !0, MT = kT[kT.length - 1].format, lT--);
            const OT = [],
              yT = [],
              fT = [],
              xT = [],
              IT = [],
              AT = [],
              CT = [],
              jT = {};
            for (let TT = 0; TT < lT; ++TT) {
              const cT = kT[TT];
              OT.push(cT.samplingMode), yT.push(cT.type), fT.push(cT.format);
              void 0 !== jT[cT.uniqueId] ? (xT.push(-1), CT.push(0)) : (jT[cT.uniqueId] = TT, cT.is2DArray ? (xT.push(35866), CT.push(cT.depth)) : cT.isCube ? (xT.push(34067), CT.push(0)) : cT.is3D ? (xT.push(32879), CT.push(cT.depth)) : (xT.push(3553), CT.push(0))), this._faceIndices && IT.push(this._faceIndices[TT] ?? 0), this._layerIndices && AT.push(this._layerIndices[TT] ?? 0)
            }
            const vT = {
                samplingModes: OT,
                generateMipMaps: kT[0].generateMipMaps,
                generateDepthBuffer: this._generateDepthBuffer,
                generateStencilBuffer: this._generateStencilBuffer,
                generateDepthTexture: cT,
                depthTextureFormat: MT,
                types: yT,
                formats: fT,
                pKT: lT,
                targetTypes: xT,
                faceIndex: IT,
                layerIndex: AT,
                layerCounts: CT,
                label: this.label
              },
              tT = {
                width: this.width,
                height: this.height,
                depth: this.depth
              };
            TT = this._engine.createMultipleRenderTarget(tT, vT);
            for (let hT = 0; hT < lT; ++hT) {
              if (-1 !== xT[hT]) continue;
              const cT = jT[kT[hT].uniqueId];
              TT.setTexture(TT.textures[cT], hT)
            }
          }
        } else {
          const kT = {};
          if (kT.generateDepthBuffer = this._generateDepthBuffer, kT.generateMipMaps = this.texture?.generateMipMaps ?? !1, kT.generateStencilBuffer = this._generateStencilBuffer, kT.samplingMode = this.texture?.samplingMode, kT.type = this.texture?.type, kT.format = this.texture?.format, kT.noColorAttachment = !this._textures, kT.label = this.label, this.isCube) TT = this._engine.createRenderTargetCubeTexture(this.width, kT);
          else {
            const cT = {
              width: this.width,
              height: this.height,
              layers: this.is2DArray || this.is3D ? this.texture?.depth : void 0
            };
            TT = this._engine.createRenderTargetTexture(cT, kT)
          }
          TT.texture && (TT.texture.isReady = !0)
        }
        return TT
      }
      _swapRenderTargetWrapper(TT) {
        if (this._textures && TT._textures)
          for (let kT = 0; kT < this._textures.length; ++kT) this._textures[kT]._swapAndDie(TT._textures[kT], !1), TT._textures[kT].isReady = !0;
        this._depthStencilTexture && TT._depthStencilTexture && (this._depthStencilTexture._swapAndDie(TT._depthStencilTexture), TT._depthStencilTexture.isReady = !0), this._textures = null, this._depthStencilTexture = null
      }
      _rebuild() {
        const TT = this._cloneRenderTargetWrapper();
        if (TT) {
          if (this._depthStencilTexture) {
            const kT = this._depthStencilTexture.samplingMode,
              cT = this._depthStencilTexture.format,
              lT = 2 === kT || 3 === kT || 11 === kT;
            TT.createDepthStencilTexture(this._depthStencilTexture._comparisonFunction, lT, this._depthStencilTextureWithStencil, this._depthStencilTexture.samples, cT, this._depthStencilTextureLabel)
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
  40051: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => lT
    });
    class lT {
      static get ForceFullSceneLoadingForIncremental() {
        return lT._ForceFullSceneLoadingForIncremental
      }
      static set ForceFullSceneLoadingForIncremental(TT) {
        lT._ForceFullSceneLoadingForIncremental = TT
      }
      static get ShowLoadingScreen() {
        return lT._ShowLoadingScreen
      }
      static set ShowLoadingScreen(TT) {
        lT._ShowLoadingScreen = TT
      }
      static get loggingLevel() {
        return lT._LoggingLevel
      }
      static set loggingLevel(TT) {
        lT._LoggingLevel = TT
      }
      static get CleanBoneMatrixWeights() {
        return lT._CleanBoneMatrixWeights
      }
      static set CleanBoneMatrixWeights(TT) {
        lT._CleanBoneMatrixWeights = TT
      }
    }
    lT._ForceFullSceneLoadingForIncremental = !1, lT._ShowLoadingScreen = !0, lT._CleanBoneMatrixWeights = !1, lT._LoggingLevel = 0
  },
  39709: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => OT
    });
    var lT = cT(38512);
    const MT = new Map;

    function KT(TT, kT) {
      (function(TT) {
        return MT.delete(TT)
      })(TT) && lT.e.Warn(`Extension with the name '${TT}' already exists`), MT.set(TT, kT)
    }

    function OT(TT, kT) {
      "image/ktx" !== kT && "image/ktx2" !== kT || (TT = ".ktx"), MT.has(TT) || (TT.endsWith(".ies") && KT(".ies", (async () => await cT.e(300).then((() => cT(41341))).then((TT => new TT._IESTextureLoader)))), TT.endsWith(".dds") && KT(".dds", (async () => await cT.e(298).then((() => cT(41348))).then((TT => new TT._DDSTextureLoader)))), TT.endsWith(".basis") && KT(".basis", (async () => await cT.e(301).then((() => cT(41352))).then((TT => new TT._BasisTextureLoader)))), TT.endsWith(".env") && KT(".env", (async () => await Promise.all([cT.e(302), cT.e(299)]).then((() => cT(41354))).then((TT => new TT._ENVTextureLoader)))), TT.endsWith(".hdr") && KT(".hdr", (async () => await cT.e(303).then((() => cT(41399))).then((TT => new TT._HDRTextureLoader)))), (TT.endsWith(".ktx") || TT.endsWith(".ktx2")) && (KT(".ktx", (async () => await cT.e(304).then((() => cT(41401))).then((TT => new TT._KTXTextureLoader)))), KT(".ktx2", (async () => await cT.e(304).then((() => cT(41401))).then((TT => new TT._KTXTextureLoader))))), TT.endsWith(".tga") && KT(".tga", (async () => await cT.e(305).then((() => cT(41412))).then((TT => new TT._TGATextureLoader)))), TT.endsWith(".exr") && KT(".exr", (async () => await cT.e(306).then((() => cT(41421))).then((TT => new TT._ExrTextureLoader)))));
      const lT = MT.get(TT);
      return lT ? Promise.resolve(lT(kT)) : null
    }
  },
  40077: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => OT,
      e: () => xT
    });
    var lT = cT(39908),
      MT = cT(39649),
      KT = cT(36949);
    class OT extends lT.e {
      get o4() {
        return this._subMaterials
      }
      set o4(TT) {
        this._subMaterials = TT, this._hookArray(TT)
      }
      getChildren() {
        return this.o4
      }
      constructor(TT, kT) {
        super(TT, kT, !0), this._waitingSubMaterialsUniqueIds = [], this.NJ().addMultiMaterial(this), this.o4 = [], this._storeEffectOnSubMeshes = !0
      }
      _hookArray(TT) {
        var kT = this;
        const cT = TT.push;
        TT.push = function() {
          for (var lT = arguments.length, MT = new Array(lT), KT = 0; KT < lT; KT++) MT[KT] = arguments[KT];
          const OT = cT.apply(TT, MT);
          return kT._markAllSubMeshesAsTexturesDirty(), OT
        };
        const lT = TT.splice;
        TT.splice = (kT, cT) => {
          const MT = lT.call(TT, kT, cT ?? TT.length);
          return this._markAllSubMeshesAsTexturesDirty(), MT
        }
      }
      getSubMaterial(TT) {
        return TT < 0 || TT >= this.o4.length ? this.NJ().defaultMaterial : this.o4[TT]
      }
      getActiveTextures() {
        return super.getActiveTextures().concat(...this.o4.map((TT => TT ? TT.getActiveTextures() : [])))
      }
      hasTexture(TT) {
        if (super.hasTexture(TT)) return !0;
        for (let kT = 0; kT < this.o4.length; kT++)
          if (this.o4[kT]?.hasTexture(TT)) return !0;
        return !1
      }
      getClassName() {
        return "MultiMaterial"
      }
      isReadyForSubMesh(TT, kT, cT) {
        for (let lT = 0; lT < this.o4.length; lT++) {
          const MT = this.o4[lT];
          if (MT) {
            if (MT._storeEffectOnSubMeshes) {
              if (!MT.isReadyForSubMesh(TT, kT, cT)) return !1;
              continue
            }
            if (!MT.isReady(TT)) return !1
          }
        }
        return !0
      }
      clone(TT, kT) {
        const cT = new OT(TT, this.NJ());
        for (let lT = 0; lT < this.o4.length; lT++) {
          let MT;
          const KT = this.o4[lT];
          MT = kT && KT ? KT.clone(TT + "-" + KT.name) : this.o4[lT], cT.o4.push(MT)
        }
        return cT
      }
      serialize() {
        const TT = {};
        TT.name = this.name, TT.id = this.id, TT.uniqueId = this.uniqueId, MT.b && (TT.tags = MT.b.GetTags(this)), TT.materialsUniqueIds = [], TT.materials = [];
        for (let kT = 0; kT < this.o4.length; kT++) {
          const cT = this.o4[kT];
          cT ? (TT.materialsUniqueIds.push(cT.uniqueId), TT.materials.push(cT.id)) : (TT.materialsUniqueIds.push(null), TT.materials.push(null))
        }
        return TT
      }
      dispose(TT, kT, cT) {
        const lT = this.NJ();
        if (!lT) return;
        if (cT)
          for (let KT = 0; KT < this.o4.length; KT++) {
            const cT = this.o4[KT];
            cT && cT.dispose(TT, kT)
          }
        const MT = lT.multiMaterials.indexOf(this);
        MT >= 0 && lT.multiMaterials.splice(MT, 1), super.dispose(TT, kT)
      }
    }
    let yT = !1;

    function fT(TT, kT) {
      const cT = new OT(TT.name, kT);
      if (cT.id = TT.id, cT._loadedUniqueId = TT.uniqueId, MT.b && MT.b.AddTagsTo(cT, TT.tags), TT.materialsUniqueIds) cT._waitingSubMaterialsUniqueIds = TT.materialsUniqueIds;
      else
        for (const lT of TT.materials) cT.o4.push(kT.getLastMaterialById(lT));
      return cT
    }

    function xT() {
      yT || (yT = !0, OT.ParseMultiMaterial = fT, (0, KT.g)("BABYLON.MultiMaterial", OT))
    }
  },
  39849: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => OT
    });
    var lT, MT, KT = cT(36892);
    ! function(TT) {
      TT[TT.LOCAL = 0] = "LOCAL", TT[TT.WORLD = 1] = "WORLD", TT[TT.BONE = 2] = "BONE"
    }(lT || (lT = {}));
    class OT {}
    OT.X = new KT.m(1, 0, 0), OT.Y = new KT.m(0, 1, 0), OT.Z = new KT.m(0, 0, 1),
      function(TT) {
        TT[TT.X = 0] = "X", TT[TT.Y = 1] = "Y", TT[TT.Z = 2] = "Z"
      }(MT || (MT = {}))
  },
  39607: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => fT,
      e: () => xT
    });
    var lT = cT(36892);
    const MT = [Math.sqrt(1 / (4 * Math.PI)), -Math.sqrt(3 / (4 * Math.PI)), Math.sqrt(3 / (4 * Math.PI)), -Math.sqrt(3 / (4 * Math.PI)), Math.sqrt(15 / (4 * Math.PI)), -Math.sqrt(15 / (4 * Math.PI)), Math.sqrt(5 / (16 * Math.PI)), -Math.sqrt(15 / (4 * Math.PI)), Math.sqrt(15 / (16 * Math.PI))],
      KT = [() => 1, TT => TT.y, TT => TT.z, TT => TT.x, TT => TT.x * TT.y, TT => TT.y * TT.z, TT => 3 * TT.z * TT.z - 1, TT => TT.x * TT.z, TT => TT.x * TT.x - TT.y * TT.y],
      OT = (TT, kT) => MT[TT] * KT[TT](kT),
      yT = [Math.PI, 2 * Math.PI / 3, 2 * Math.PI / 3, 2 * Math.PI / 3, Math.PI / 4, Math.PI / 4, Math.PI / 4, Math.PI / 4, Math.PI / 4];
    class fT {
      constructor() {
        this.preScaled = !1, this.l00 = lT.m.Zero(), this.l1_1 = lT.m.Zero(), this.l10 = lT.m.Zero(), this.l11 = lT.m.Zero(), this.l2_2 = lT.m.Zero(), this.l2_1 = lT.m.Zero(), this.l20 = lT.m.Zero(), this.l21 = lT.m.Zero(), this.l22 = lT.m.Zero()
      }
      addLight(TT, kT, cT) {
        lT.h.Fv[0].set(kT.r, kT.g, kT.b);
        const MT = lT.h.Fv[0],
          KT = lT.h.Fv[1];
        MT.scaleToRef(cT, KT), KT.scaleToRef(OT(0, TT), lT.h.Fv[2]), this.l00.addInPlace(lT.h.Fv[2]), KT.scaleToRef(OT(1, TT), lT.h.Fv[2]), this.l1_1.addInPlace(lT.h.Fv[2]), KT.scaleToRef(OT(2, TT), lT.h.Fv[2]), this.l10.addInPlace(lT.h.Fv[2]), KT.scaleToRef(OT(3, TT), lT.h.Fv[2]), this.l11.addInPlace(lT.h.Fv[2]), KT.scaleToRef(OT(4, TT), lT.h.Fv[2]), this.l2_2.addInPlace(lT.h.Fv[2]), KT.scaleToRef(OT(5, TT), lT.h.Fv[2]), this.l2_1.addInPlace(lT.h.Fv[2]), KT.scaleToRef(OT(6, TT), lT.h.Fv[2]), this.l20.addInPlace(lT.h.Fv[2]), KT.scaleToRef(OT(7, TT), lT.h.Fv[2]), this.l21.addInPlace(lT.h.Fv[2]), KT.scaleToRef(OT(8, TT), lT.h.Fv[2]), this.l22.addInPlace(lT.h.Fv[2])
      }
      scaleInPlace(TT) {
        this.l00.scaleInPlace(TT), this.l1_1.scaleInPlace(TT), this.l10.scaleInPlace(TT), this.l11.scaleInPlace(TT), this.l2_2.scaleInPlace(TT), this.l2_1.scaleInPlace(TT), this.l20.scaleInPlace(TT), this.l21.scaleInPlace(TT), this.l22.scaleInPlace(TT)
      }
      convertIncidentRadianceToIrradiance() {
        this.l00.scaleInPlace(yT[0]), this.l1_1.scaleInPlace(yT[1]), this.l10.scaleInPlace(yT[2]), this.l11.scaleInPlace(yT[3]), this.l2_2.scaleInPlace(yT[4]), this.l2_1.scaleInPlace(yT[5]), this.l20.scaleInPlace(yT[6]), this.l21.scaleInPlace(yT[7]), this.l22.scaleInPlace(yT[8])
      }
      convertIrradianceToLambertianRadiance() {
        this.scaleInPlace(1 / Math.PI)
      }
      preScaleForRendering() {
        this.preScaled = !0, this.l00.scaleInPlace(MT[0]), this.l1_1.scaleInPlace(MT[1]), this.l10.scaleInPlace(MT[2]), this.l11.scaleInPlace(MT[3]), this.l2_2.scaleInPlace(MT[4]), this.l2_1.scaleInPlace(MT[5]), this.l20.scaleInPlace(MT[6]), this.l21.scaleInPlace(MT[7]), this.l22.scaleInPlace(MT[8])
      }
      updateFromArray(TT) {
        return lT.m.FromArrayToRef(TT[0], 0, this.l00), lT.m.FromArrayToRef(TT[1], 0, this.l1_1), lT.m.FromArrayToRef(TT[2], 0, this.l10), lT.m.FromArrayToRef(TT[3], 0, this.l11), lT.m.FromArrayToRef(TT[4], 0, this.l2_2), lT.m.FromArrayToRef(TT[5], 0, this.l2_1), lT.m.FromArrayToRef(TT[6], 0, this.l20), lT.m.FromArrayToRef(TT[7], 0, this.l21), lT.m.FromArrayToRef(TT[8], 0, this.l22), this
      }
      updateFromFloatsArray(TT) {
        return lT.m.FromFloatsToRef(TT[0], TT[1], TT[2], this.l00), lT.m.FromFloatsToRef(TT[3], TT[4], TT[5], this.l1_1), lT.m.FromFloatsToRef(TT[6], TT[7], TT[8], this.l10), lT.m.FromFloatsToRef(TT[9], TT[10], TT[11], this.l11), lT.m.FromFloatsToRef(TT[12], TT[13], TT[14], this.l2_2), lT.m.FromFloatsToRef(TT[15], TT[16], TT[17], this.l2_1), lT.m.FromFloatsToRef(TT[18], TT[19], TT[20], this.l20), lT.m.FromFloatsToRef(TT[21], TT[22], TT[23], this.l21), lT.m.FromFloatsToRef(TT[24], TT[25], TT[26], this.l22), this
      }
      static FromArray(TT) {
        return (new fT).updateFromArray(TT)
      }
      static FromPolynomial(TT) {
        const kT = new fT;
        return kT.l00 = TT.xx.scale(.376127).add(TT.yy.scale(.376127)).add(TT.zz.scale(.376126)), kT.l1_1 = TT.y.scale(.977204), kT.l10 = TT.z.scale(.977204), kT.l11 = TT.x.scale(.977204), kT.l2_2 = TT.xy.scale(1.16538), kT.l2_1 = TT.yz.scale(1.16538), kT.l20 = TT.zz.scale(1.34567).subtract(TT.xx.scale(.672834)).subtract(TT.yy.scale(.672834)), kT.l21 = TT.zx.scale(1.16538), kT.l22 = TT.xx.scale(1.16538).subtract(TT.yy.scale(1.16538)), kT.l1_1.scaleInPlace(-1), kT.l11.scaleInPlace(-1), kT.l2_1.scaleInPlace(-1), kT.l21.scaleInPlace(-1), kT.scaleInPlace(Math.PI), kT
      }
    }
    class xT {
      constructor() {
        this.x = lT.m.Zero(), this.y = lT.m.Zero(), this.z = lT.m.Zero(), this.xx = lT.m.Zero(), this.yy = lT.m.Zero(), this.zz = lT.m.Zero(), this.xy = lT.m.Zero(), this.yz = lT.m.Zero(), this.zx = lT.m.Zero()
      }
      get preScaledHarmonics() {
        return this._harmonics || (this._harmonics = fT.FromPolynomial(this)), this._harmonics.preScaled || this._harmonics.preScaleForRendering(), this._harmonics
      }
      addAmbient(TT) {
        lT.h.Fv[0].I5(TT.r, TT.g, TT.b);
        const kT = lT.h.Fv[0];
        this.xx.addInPlace(kT), this.yy.addInPlace(kT), this.zz.addInPlace(kT)
      }
      scaleInPlace(TT) {
        this.x.scaleInPlace(TT), this.y.scaleInPlace(TT), this.z.scaleInPlace(TT), this.xx.scaleInPlace(TT), this.yy.scaleInPlace(TT), this.zz.scaleInPlace(TT), this.yz.scaleInPlace(TT), this.zx.scaleInPlace(TT), this.xy.scaleInPlace(TT)
      }
      updateFromHarmonics(TT) {
        return this._harmonics = TT, this.x.UkT(TT.l11), this.x.scaleInPlace(1.02333).scaleInPlace(-1), this.y.UkT(TT.l1_1), this.y.scaleInPlace(1.02333).scaleInPlace(-1), this.z.UkT(TT.l10), this.z.scaleInPlace(1.02333), this.xx.UkT(TT.l00), lT.h.Fv[0].UkT(TT.l20).scaleInPlace(.247708), lT.h.Fv[1].UkT(TT.l22).scaleInPlace(.429043), this.xx.scaleInPlace(.886277).gcT(lT.h.Fv[0]).addInPlace(lT.h.Fv[1]), this.yy.UkT(TT.l00), this.yy.scaleInPlace(.886277).gcT(lT.h.Fv[0]).gcT(lT.h.Fv[1]), this.zz.UkT(TT.l00), lT.h.Fv[0].UkT(TT.l20).scaleInPlace(.495417), this.zz.scaleInPlace(.886277).addInPlace(lT.h.Fv[0]), this.yz.UkT(TT.l2_1), this.yz.scaleInPlace(.858086).scaleInPlace(-1), this.zx.UkT(TT.l21), this.zx.scaleInPlace(.858086).scaleInPlace(-1), this.xy.UkT(TT.l2_2), this.xy.scaleInPlace(.858086), this.scaleInPlace(1 / Math.PI), this
      }
      static FromHarmonics(TT) {
        return (new xT).updateFromHarmonics(TT)
      }
      static FromArray(TT) {
        const kT = new xT;
        return lT.m.FromArrayToRef(TT[0], 0, kT.x), lT.m.FromArrayToRef(TT[1], 0, kT.y), lT.m.FromArrayToRef(TT[2], 0, kT.z), lT.m.FromArrayToRef(TT[3], 0, kT.xx), lT.m.FromArrayToRef(TT[4], 0, kT.yy), lT.m.FromArrayToRef(TT[5], 0, kT.zz), lT.m.FromArrayToRef(TT[6], 0, kT.yz), lT.m.FromArrayToRef(TT[7], 0, kT.zx), lT.m.FromArrayToRef(TT[8], 0, kT.xy), kT
      }
    }
  },
  40066: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => HT,
      g: () => GT
    });
    var lT = cT(39620),
      MT = cT(36932),
      KT = cT(36892),
      OT = cT(39782),
      yT = cT(40038),
      fT = cT(40071),
      xT = cT(39775),
      IT = cT(39926),
      AT = cT(39770);
    class CT {
      constructor() {
        this._checkCollisions = !1, this._collisionMask = -1, this._collisionGroup = -1, this._surroundingMeshes = null, this._collider = null, this._oldPositionForCollisions = new KT.m(0, 0, 0), this._diffPositionForCollisions = new KT.m(0, 0, 0), this._collisionResponse = !0
      }
    }
    var jT, vT, tT, hT = cT(39500),
      NT = cT(39694),
      QT = cT(39932),
      ST = cT(37093),
      DT = cT(36901),
      aT = cT(39849),
      FT = cT(38512),
      rT = cT(39624),
      PT = cT(39516),
      wT = cT(36949);

    function mT(TT, kT) {
      return TT - Math.floor(TT / kT) * kT
    }

    function bT(TT, kT, cT) {
      TT instanceof Float32Array ? KT.d.FromArrayToRef(TT, kT, cT) : cT.I5((0, NT.e)(TT[kT]), (0, NT.e)(TT[kT + 1]), (0, NT.e)(TT[kT + 2]), (0, NT.e)(TT[kT + 3]), (0, NT.e)(TT[kT + 4]), (0, NT.e)(TT[kT + 5]), (0, NT.e)(TT[kT + 6]), (0, NT.e)(TT[kT + 7]), (0, NT.e)(TT[kT + 8]), (0, NT.e)(TT[kT + 9]), (0, NT.e)(TT[kT + 10]), (0, NT.e)(TT[kT + 11]), (0, NT.e)(TT[kT + 12]), (0, NT.e)(TT[kT + 13]), (0, NT.e)(TT[kT + 14]), (0, NT.e)(TT[kT + 15]))
    }

    function zT(TT, kT, cT, lT, MT, yT, fT, xT, IT) {
      const AT = cT.texture,
        CT = AT?.getInternalTexture(),
        jT = CT?._bufferView;
      if (!(jT instanceof Float32Array) && !(jT instanceof Uint16Array)) return FT.e.Warn("Baked vertex animation bounding info requires CPU-readable Float32Array or Uint16Array texture data.", 1), !1;
      const vT = AT.getSize(),
        tT = function(TT, kT) {
          const cT = TT.y - TT.x + 1,
            lT = kT * TT.w / cT,
            MT = lT < 1 ? 0 : 1,
            KT = cT - MT;
          let OT = mT(lT - Math.floor(lT), 1) * KT;
          return OT = mT(OT + TT.z, KT), Math.floor(OT) + TT.x + MT
        }(lT, cT.time);
      if (!isFinite(tT) || tT < 0 || tT >= vT.height) return FT.e.Warn("Baked vertex animation bounding info could not be refreshed because the computed frame is outside the texture.", 1), !1;
      const hT = KT.h.Fv[0],
        NT = KT.h.Matrix[0],
        QT = KT.h.Matrix[1],
        ST = tT * vT.width * 4,
        DT = kT === OT.l.NormalKind ? KT.m.TransformNormalFromFloatsToRef : KT.m.TransformCoordinatesFromFloatsToRef;
      for (let KT = 0, OT = 0; KT < TT.length; KT += 3, OT += 4) {
        let kT, cT;
        for (NT.reset(), kT = 0; kT < 4 && kT < IT; kT++) cT = yT[OT + kT], cT > 0 && (bT(jT, ST + 16 * Math.floor(MT[OT + kT]), QT), QT.scaleAndAddToRef(cT, NT));
        if (fT && xT)
          for (kT = 0; kT < 4 && kT + 4 < IT; kT++) cT = xT[OT + kT], cT > 0 && (bT(jT, ST + 16 * Math.floor(fT[OT + kT]), QT), QT.scaleAndAddToRef(cT, NT));
        DT(TT[KT], TT[KT + 1], TT[KT + 2], NT, hT), hT.toArray(TT, KT)
      }
      return !0
    }
    class JT {
      constructor() {
        this.facetNb = 0, this.partitioningSubdivisions = 10, this.partitioningBBoxRatio = 1.01, this.facetDataEnabled = !1, this.facetParameters = {}, this.bbSize = KT.m.Zero(), this.subDiv = {
          max: 1,
          X: 1,
          Y: 1,
          Z: 1
        }, this.facetDepthSort = !1, this.facetDepthSortEnabled = !1
      }
    }
    class oT {
      constructor() {
        this._hasVertexAlpha = !1, this._useVertexColors = !0, this._numBoneInfluencers = 4, this._applyFog = !0, this._receiveShadows = !1, this._facetData = new JT, this._visibility = 1, this._skeleton = null, this._layerMask = 268435455, this._computeBonesUsingShaders = !0, this._isActive = !1, this._onlyForInstances = !1, this._isActiveIntermediate = !1, this._onlyForInstancesIntermediate = !1, this._actAsRegularMesh = !1, this._currentLOD = new Map, this._collisionRetryCount = 3, this._morphTargetManager = null, this._renderingGroupId = 0, this._meshBlendingTag = 0, this._bakedVertexAnimationManager = null, this._material = null, this._positions = null, this._pointerOverDisableMeshTesting = !1, this._meshCollisionData = new CT, this._enableDistantPicking = !1, this._rawBoundingInfo = null, this._sideOrientationHint = !1, this._wasActiveLastFrame = !1
      }
    }
    let HT = (() => {
        var TT;
        let kT, CT = fT.f,
          jT = [];
        return TT = class extends CT {
          static get BILLBOARDMODE_NONE() {
            return fT.f.BILLBOARDMODE_NONE
          }
          static get BILLBOARDMODE_X() {
            return fT.f.BILLBOARDMODE_X
          }
          static get BILLBOARDMODE_Y() {
            return fT.f.BILLBOARDMODE_Y
          }
          static get BILLBOARDMODE_Z() {
            return fT.f.BILLBOARDMODE_Z
          }
          static get BILLBOARDMODE_ALL() {
            return fT.f.BILLBOARDMODE_ALL
          }
          static get BILLBOARDMODE_USE_POSITION() {
            return fT.f.BILLBOARDMODE_USE_POSITION
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
          set yC(TT) {
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
            const kT = this._internalAbstractMeshDataInfo._visibility;
            this._internalAbstractMeshDataInfo._visibility = TT, (1 === kT && 1 !== TT || 1 !== kT && 1 === TT) && this._markSubMeshesAsDirty((TT => {
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
            this._internalAbstractMeshDataInfo._material !== TT && (this._internalAbstractMeshDataInfo._material && this._internalAbstractMeshDataInfo._material.meshMap && (this._internalAbstractMeshDataInfo._material.meshMap[this.uniqueId] = void 0), this._internalAbstractMeshDataInfo._material = TT, TT && TT.meshMap && (TT.meshMap[this.uniqueId] = this), this.onMaterialChangedObservable.hasObservers() && this.onMaterialChangedObservable.notifyObservers(this), this.kF && (this.resetDrawCache(void 0, null == TT), this._unBindEffect()))
          }
          getMaterialForRenderPass(TT) {
            return this._internalAbstractMeshDataInfo._materialForRenderPass?.[TT]
          }
          setMaterialForRenderPass(TT, kT) {
            this.resetDrawCache(TT), this._internalAbstractMeshDataInfo._materialForRenderPass || (this._internalAbstractMeshDataInfo._materialForRenderPass = []);
            const cT = this._internalAbstractMeshDataInfo._materialForRenderPass[TT];
            cT?.meshMap?.[this.uniqueId] && (cT.meshMap[this.uniqueId] = void 0), this._internalAbstractMeshDataInfo._materialForRenderPass[TT] = kT, kT && kT.meshMap && (kT.meshMap[this.uniqueId] = this)
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
            const kT = this._internalAbstractMeshDataInfo._skeleton;
            kT && kT.needInitialSkinMatrix && kT._unregisterMeshWithPoseMatrix(this), TT && TT.needInitialSkinMatrix && TT._registerMeshWithPoseMatrix(this), this._internalAbstractMeshDataInfo._skeleton = TT, this._internalAbstractMeshDataInfo._skeleton || (this._bonesTransformMatrices = null), this._markSubMeshesAsAttributesDirty()
          }
          get skeleton() {
            return this._internalAbstractMeshDataInfo._skeleton
          }
          constructor(kT) {
            var cT;
            let lT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            switch (super(kT, lT, !1), cT = this, this._internalAbstractMeshDataInfo = new oT, this._waitingMaterialId = null, this._waitingMorphTargetManagerId = null, this._waitingSkeletonId = null, this._waitingSkeletonUniqueId = null, this.cullingStrategy = TT.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY, this.onCollideObservable = new MT.b, this.onCollisionPositionChangeObservable = new MT.b, this.onMaterialChangedObservable = new MT.b, this.definedFacingForward = !0, this._occlusionQuery = null, this._renderingGroup = null, this.alphaIndex = Number.MAX_VALUE, this.Vt = TT.DefaultIsPickable, this.isNearPickable = !1, this.isNearGrabbable = !1, this.showSubMeshesBoundingBox = !1, this.isBlocker = !1, this.enablePointerMoveEvents = !1, this.outlineColor = ST.c.Red(), this.outlineWidth = .02, this.overlayColor = ST.c.Red(), this.overlayAlpha = .5, this.useOctreeForRenderingSelection = !0, this.useOctreeForPicking = !0, this.useOctreeForCollisions = !0, this.av = !1, this.Pv = !1, this.actionManager = null, this.ellipsoid = new KT.m(.5, 1, .5), this.ellipsoidOffset = new KT.m(0, 0, 0), this.edgesWidth = 1, this.edgesColor = new ST.g(1, 0, 0, 1), this._edgesRenderer = null, this._masterMesh = null, this._boundingInfo = null, this._boundingInfoIsDirty = !0, this._renderId = 0, this._intersectionsInProgress = new Array, this._unIndexed = !1, this._lightSources = new Array, this._waitingData = {
                lods: null,
                actions: null,
                bJ: null
              }, this._bonesTransformMatrices = null, this._transformMatrixTexture = null, this.onRebuildObservable = new MT.b, this._onCollisionPositionChange = function(TT, kT) {
                let lT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                kT.subtractToRef(cT._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions, cT._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions), cT._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions.length() > PT.d.CollisionsEpsilon && cT.position.addInPlace(cT._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions), lT && cT.onCollideObservable.notifyObservers(lT), cT.onCollisionPositionChangeObservable.notifyObservers(cT.position)
              }, lT = this.NJ(), this.layerMask = lT.defaultRenderableLayerMask, lT.rcT(this), this._resyncLightSources(), this._uniformBuffer = new AT.b(this.NJ().Dv(), void 0, void 0, kT, !this.NJ().Dv().isWebGPU), this._buildUniformLayout(), lT.performancePriority) {
              case 2:
                this.Pv = !0;
              case 1:
                this.av = !0, this.Vt = !1
            }
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("world", 16), this._uniformBuffer.addUniform("visibility", 1), this._uniformBuffer.create()
          }
          transferToEffect(TT) {
            const kT = this._uniformBuffer;
            kT.X3("world", TT), kT.updateFloat("visibility", this._internalAbstractMeshDataInfo._visibility), kT.update()
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
            let kT = "Name: " + this.name + ", isInstance: " + ("InstancedMesh" === this.getClassName() ? "YES" : "NO");
            kT += ", # of submeshes: " + (this.kF ? this.kF.length : 0);
            const cT = this._internalAbstractMeshDataInfo._skeleton;
            return cT && (kT += ", skeleton: " + cT.name), TT && (kT += ", billboard mode: " + ["NONE", "X", "Y", null, "Z", null, null, "ALL"][this.billboardMode], kT += ", freeze wrld mat: " + (this._isWorldMatrixFrozen || this._waitingData.bJ ? "YES" : "NO")), kT
          }
          _getEffectiveParent() {
            return this._masterMesh && this.billboardMode !== fT.f.BILLBOARDMODE_NONE ? this._masterMesh : super._getEffectiveParent()
          }
          _getActionManagerForTrigger(TT) {
            let kT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            if (this.actionManager && (kT || this.actionManager.isRecursive)) {
              if (!TT) return this.actionManager;
              if (this.actionManager.hasSpecificTrigger(TT)) return this.actionManager
            }
            return this.parent ? this.parent._getActionManagerForTrigger(TT, !1) : null
          }
          _releaseRenderPassId(TT) {}
          _rebuild() {
            if (this.onRebuildObservable.notifyObservers(this), null !== this._occlusionQuery && (this._occlusionQuery = null), this.kF) {
              for (const TT of this.kF) TT._rebuild();
              this.resetDrawCache()
            }
          }
          _resyncLightSources() {
            this._lightSources.length = 0;
            for (const TT of this.NJ().lights) TT.isEnabled() && TT.canAffectMesh(this) && this._lightSources.push(TT);
            this._markSubMeshesAsLightDirty()
          }
          _resyncLightSource(TT) {
            const kT = TT.isEnabled() && TT.canAffectMesh(this),
              cT = this._lightSources.indexOf(TT);
            let lT = !1;
            if (-1 === cT) {
              if (!kT) return;
              this._lightSources.push(TT)
            } else {
              if (kT) return;
              lT = !0, this._lightSources.splice(cT, 1)
            }
            this._markSubMeshesAsLightDirty(lT)
          }
          _unBindEffect() {
            for (const TT of this.kF) TT.setEffect(null)
          }
          _removeLightSource(TT, kT) {
            const cT = this._lightSources.indexOf(TT); - 1 !== cT && (this._lightSources.splice(cT, 1), this._markSubMeshesAsLightDirty(kT))
          }
          _markSubMeshesAsDirty(TT) {
            if (this.kF)
              for (const kT of this.kF)
                for (let cT = 0; cT < kT._drawWrappers.length; ++cT) {
                  const lT = kT._drawWrappers[cT];
                  lT && lT.defines && lT.defines.markAllAsDirty && TT(lT.defines)
                }
          }
          _markSubMeshesAsLightDirty() {
            let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            this._markSubMeshesAsDirty((kT => kT.markAsLightDirty(TT)))
          }
          _markSubMeshesAsAttributesDirty() {
            this._markSubMeshesAsDirty((TT => TT.markAsAttributesDirty()))
          }
          _markSubMeshesAsMiscDirty() {
            this._markSubMeshesAsDirty((TT => TT.markAsMiscDirty()))
          }
          pTT(TT) {
            return this._currentRenderId = Number.MAX_VALUE, super.pTT(TT), this._isDirty = !0, this
          }
          resetDrawCache(TT) {
            let kT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (this.kF)
              for (const cT of this.kF) cT.resetDrawCache(TT, kT)
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
          FcT() {
            return null
          }
          getVerticesData(TT) {
            return null
          }
          setVerticesData(TT, kT, cT, lT) {
            return this
          }
          updateVerticesData(TT, kT, cT, lT) {
            return this
          }
          setIndices(TT, kT) {
            return this
          }
          isVerticesDataPresent(TT) {
            return !1
          }
          DH() {
            return this._masterMesh ? this._masterMesh.DH() : (this._boundingInfoIsDirty && (this._boundingInfoIsDirty = !1, this._updateBoundingInfo()), this._boundingInfo)
          }
          getRawBoundingInfo() {
            return this.rawBoundingInfo ?? this.DH()
          }
          setBoundingInfo(TT) {
            return this._boundingInfo = TT, this
          }
          get hasBoundingInfo() {
            return null !== this._boundingInfo
          }
          buildBoundingInfo(TT, kT, cT) {
            return this._boundingInfo = new IT.e(TT, kT, cT), this._boundingInfo
          }
          normalizeToUnitCube() {
            let TT = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
              kT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              cT = arguments.length > 2 ? arguments[2] : void 0;
            return super.normalizeToUnitCube(TT, kT, cT)
          }
          get useBones() {
            return this.skeleton && this.NJ().skeletonsEnabled && this.isVerticesDataPresent(OT.l.MatricesIndicesKind) && this.isVerticesDataPresent(OT.l.MatricesWeightsKind)
          }
          _preActivate() {}
          _preActivateForIntermediateRendering(TT) {}
          _activate(TT, kT) {
            return this._renderId = TT, !0
          }
          _postActivate() {}
          _freeze() {}
          _unFreeze() {}
          getWorldMatrix() {
            return this._masterMesh && this.billboardMode === fT.f.BILLBOARDMODE_NONE ? this._masterMesh.getWorldMatrix() : super.getWorldMatrix()
          }
          _getWorldMatrixDeterminant() {
            return this._masterMesh ? this._masterMesh._getWorldMatrixDeterminant() : super._getWorldMatrixDeterminant()
          }
          get aJ() {
            return !1
          }
          get tlT() {
            return !1
          }
          get hasThinInstances() {
            return !1
          }
          movePOV(TT, kT, cT) {
            return this.position.addInPlace(this.calcMovePOV(TT, kT, cT)), this
          }
          calcMovePOV(TT, kT, cT) {
            const lT = new KT.d;
            (this.rotationQuaternion ? this.rotationQuaternion : KT.f.RotationYawPitchRoll(this.rotation.y, this.rotation.x, this.rotation.z)).toRotationMatrix(lT);
            const MT = KT.m.Zero(),
              OT = this.definedFacingForward ? -1 : 1;
            return KT.m.TransformCoordinatesFromFloatsToRef(TT * OT, kT, cT * OT, lT, MT), MT
          }
          rotatePOV(TT, kT, cT) {
            return this.rotation.addInPlace(this.calcRotatePOV(TT, kT, cT)), this
          }
          calcRotatePOV(TT, kT, cT) {
            const lT = this.definedFacingForward ? 1 : -1;
            return new KT.m(TT * lT, kT, cT * lT)
          }
          _refreshBoundingInfo(TT, kT) {
            if (TT) {
              const cT = (0, QT.g)(TT, 0, this.getTotalVertices(), kT);
              this._boundingInfo ? this._boundingInfo.reConstruct(cT.minimum, cT.maximum) : this._boundingInfo = new IT.e(cT.minimum, cT.maximum)
            }
            if (this.kF)
              for (let cT = 0; cT < this.kF.length; cT++) this.kF[cT].refreshBoundingInfo(TT);
            this._updateBoundingInfo()
          }
          _refreshBoundingInfoDirect(TT) {
            if (this._boundingInfo ? this._boundingInfo.reConstruct(TT.minimum, TT.maximum) : this._boundingInfo = new IT.e(TT.minimum, TT.maximum), this.kF)
              for (let kT = 0; kT < this.kF.length; kT++) this.kF[kT].refreshBoundingInfo(null);
            this._updateBoundingInfo()
          }
          static _ApplySkeleton(TT, kT, cT, lT, MT, yT, fT) {
            ! function(TT, kT, cT, lT, MT, yT, fT) {
              const xT = KT.h.Fv[0],
                IT = KT.h.Matrix[0],
                AT = KT.h.Matrix[1],
                CT = kT === OT.l.NormalKind ? KT.m.TransformNormalFromFloatsToRef : KT.m.TransformCoordinatesFromFloatsToRef;
              for (let OT = 0, jT = 0; OT < TT.length; OT += 3, jT += 4) {
                let kT, vT;
                for (IT.reset(), kT = 0; kT < 4; kT++) vT = MT[jT + kT], vT > 0 && (KT.d.FromFloat32ArrayToRefScaled(cT, Math.floor(16 * lT[jT + kT]), vT, AT), IT.addToSelf(AT));
                if (yT && fT)
                  for (kT = 0; kT < 4; kT++) vT = fT[jT + kT], vT > 0 && (KT.d.FromFloat32ArrayToRefScaled(cT, Math.floor(16 * yT[jT + kT]), vT, AT), IT.addToSelf(AT));
                CT(TT[OT], TT[OT + 1], TT[OT + 2], IT, xT), xT.toArray(TT, OT)
              }
            }(TT, kT, cT, lT, MT, yT, fT)
          }
          _getData(kT, cT) {
            let lT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : OT.l.PositionKind;
            const MT = kT.cache,
              yT = TT => {
                if (MT) {
                  const kT = MT._vertexData || (MT._vertexData = {});
                  return kT[TT] || this.copyVerticesData(TT, kT), kT[TT]
                }
                return this.getVerticesData(TT)
              };
            if (cT || (cT = yT(lT)), !cT) return null;
            MT ? (MT._outputData ? MT._outputData.set(cT) : MT._outputData = new Float32Array(cT), cT = MT._outputData) : (kT.applyMorph && this.morphTargetManager || kT.applySkeleton && this.skeleton || kT.applyBakedVertexAnimation && this.bakedVertexAnimationManager?.isEnabled) && (cT = cT.slice()), kT.applyMorph && this.morphTargetManager && function(TT, kT, cT) {
              let lT;
              switch (kT) {
                case OT.l.PositionKind:
                  lT = TT => TT.getPositions();
                  break;
                case OT.l.NormalKind:
                  lT = TT => TT.getNormals();
                  break;
                case OT.l.TangentKind:
                  lT = TT => TT.getTangents();
                  break;
                case OT.l.UVKind:
                  lT = TT => TT.getUVs();
                  break;
                case OT.l.UV2Kind:
                  lT = TT => TT.getUV2s();
                  break;
                case OT.l.ColorKind:
                  lT = TT => TT.getColors();
                  break;
                default:
                  return
              }
              for (let MT = 0; MT < TT.length; MT++) {
                let kT = TT[MT];
                for (let KT = 0; KT < cT.numTargets; KT++) {
                  const OT = cT.getTarget(KT),
                    yT = OT.influence;
                  if (0 !== yT) {
                    const cT = lT(OT);
                    cT && (kT += (cT[MT] - TT[MT]) * yT)
                  }
                }
                TT[MT] = kT
              }
            }(cT, lT, this.morphTargetManager);
            const fT = this.bakedVertexAnimationManager;
            let xT = !1;
            if (kT.applyBakedVertexAnimation && fT?.isEnabled) {
              const TT = yT(OT.l.MatricesIndicesKind),
                MT = yT(OT.l.MatricesWeightsKind);
              if (MT && TT) {
                const KT = this.numBoneInfluencers > 4,
                  IT = KT ? yT(OT.l.MatricesIndicesExtraKind) : null,
                  AT = KT ? yT(OT.l.MatricesWeightsExtraKind) : null;
                xT = zT(cT, lT, fT, kT.bakedVertexAnimationSettings ?? fT.animationParameters, TT, MT, IT, AT, this.numBoneInfluencers)
              }
            }
            if (!xT && kT.applySkeleton && this.skeleton) {
              const kT = yT(OT.l.MatricesIndicesKind),
                MT = yT(OT.l.MatricesWeightsKind);
              if (MT && kT) {
                const KT = this.numBoneInfluencers > 4,
                  fT = KT ? yT(OT.l.MatricesIndicesExtraKind) : null,
                  xT = KT ? yT(OT.l.MatricesWeightsExtraKind) : null,
                  IT = this.skeleton.getTransformMatrices(this);
                TT._ApplySkeleton(cT, lT, IT, kT, MT, fT, xT)
              }
            }
            if (!1 !== kT.updatePositionsArray && lT === OT.l.PositionKind) {
              const TT = this._internalAbstractMeshDataInfo._positions || [],
                kT = TT.length;
              if (TT.length = cT.length / 3, kT < TT.length)
                for (let cT = kT; cT < TT.length; cT++) TT[cT] = new KT.m;
              for (let lT = 0, MT = 0; lT < TT.length; lT++, MT += 3) TT[lT].I5(cT[MT], cT[MT + 1], cT[MT + 2]);
              this._internalAbstractMeshDataInfo._positions = TT
            }
            return cT
          }
          getNormalsData() {
            let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              kT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return this._getData({
              applySkeleton: TT,
              applyMorph: kT,
              updatePositionsArray: !1
            }, null, OT.l.NormalKind)
          }
          wL() {
            let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              kT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            return this._getData({
              applySkeleton: TT,
              applyMorph: kT,
              updatePositionsArray: !1
            }, cT, OT.l.PositionKind)
          }
          _updateBoundingInfo() {
            return this._boundingInfo ? this._boundingInfo.update(this.worldMatrixFromCache) : this._boundingInfo = new IT.e(KT.m.Zero(), KT.m.Zero(), this.worldMatrixFromCache), this._updateSubMeshesBoundingInfo(this.worldMatrixFromCache), this
          }
          _updateSubMeshesBoundingInfo(TT) {
            if (!this.kF) return this;
            const kT = this.kF.length;
            for (let cT = 0; cT < kT; cT++) {
              const lT = this.kF[cT];
              (kT > 1 || !lT.IsGlobal) && lT.updateBoundingInfo(TT)
            }
            return this
          }
          _afterComputeWorldMatrix() {
            this.Pv || (this._boundingInfoIsDirty = !0)
          }
          isInFrustum(TT) {
            return this.DH().isInFrustum(TT, this.cullingStrategy)
          }
          isCompletelyInFrustum(TT) {
            return this.DH().isCompletelyInFrustum(TT)
          }
          xlT(TT) {
            let kT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              cT = arguments.length > 2 ? arguments[2] : void 0;
            const lT = this.DH(),
              MT = TT.DH();
            if (lT.intersects(MT, kT)) return !0;
            if (cT)
              for (const KT of this.getChildMeshes())
                if (KT.xlT(TT, kT, !0)) return !0;
            return !1
          }
          intersectsPoint(TT) {
            return this.DH().intersectsPoint(TT)
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
            let kT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            this.getAbsolutePosition().addToRef(this.ellipsoidOffset, this._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions);
            const cT = this.NJ().collisionCoordinator;
            return this._internalAbstractMeshDataInfo._meshCollisionData._collider || (this._internalAbstractMeshDataInfo._meshCollisionData._collider = cT.createCollider()), this._internalAbstractMeshDataInfo._meshCollisionData._collider._radius = this.ellipsoid, cT.getNewPosition(this._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions, TT, this._internalAbstractMeshDataInfo._meshCollisionData._collider, this.collisionRetryCount, this, this._onCollisionPositionChange, this.uniqueId, kT), this
          }
          _collideForSubMesh(TT, kT, cT) {
            if (this._generatePointsArray(), !this._positions) return this;
            if (!TT._lastColliderWorldVertices || !TT._lastColliderTransformMatrix.equals(kT)) {
              TT._lastColliderTransformMatrix = kT.clone(), TT._lastColliderWorldVertices = [], TT._trianglePlanes = [];
              const cT = TT.verticesStart,
                lT = TT.verticesStart + TT.verticesCount;
              for (let MT = cT; MT < lT; MT++) TT._lastColliderWorldVertices.push(KT.m.TransformCoordinates(this._positions[MT], kT))
            }
            return cT._collide(TT._trianglePlanes, TT._lastColliderWorldVertices, this.FcT(), TT.indexStart, TT.indexStart + TT.indexCount, TT.verticesStart, !!TT.wv(), this, this._shouldConvertRHS(), 7 === TT.wv()?.fillMode), this
          }
          _processCollisionsForSubMeshes(TT, kT) {
            const cT = this._scene.getCollidingSubMeshCandidates(this, TT),
              lT = cT.length;
            for (let MT = 0; MT < lT; MT++) {
              const KT = cT.data[MT];
              lT > 1 && !KT._checkCollision(TT) || this._collideForSubMesh(KT, kT, TT)
            }
            return this
          }
          _shouldConvertRHS() {
            return !1
          }
          _checkCollision(TT) {
            if (!this.DH()._checkCollision(TT)) return this;
            const kT = KT.h.Matrix[0],
              cT = KT.h.Matrix[1];
            return KT.d.ScalingToRef(1 / TT._radius.x, 1 / TT._radius.y, 1 / TT._radius.z, kT), this.worldMatrixFromCache.multiplyToRef(kT, cT), this._processCollisionsForSubMeshes(TT, cT), this
          }
          _generatePointsArray() {
            return !1
          }
          intersects(TT, kT, cT) {
            let lT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              MT = arguments.length > 4 ? arguments[4] : void 0,
              OT = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
            const yT = new xT.d,
              fT = this.getClassName(),
              IT = "InstancedLinesMesh" === fT || "LinesMesh" === fT || "GreasedLineMesh" === fT ? this.intersectionThreshold : 0,
              AT = this.DH();
            if (!this.kF) return yT;
            if (!OT && (!TT.intersectsSphere(AT.WcT, IT) || !TT.intersectsBox(AT.boundingBox, IT))) return yT;
            if (lT) return yT.hit = !OT, yT.pickedMesh = OT ? null : this, yT.distance = OT ? 0 : KT.m.Distance(TT.origin, AT.WcT.center), yT.subMeshId = 0, yT;
            if (!this._generatePointsArray()) return yT;
            let CT = null;
            const jT = this._scene.getIntersectingSubMeshCandidates(this, TT),
              vT = jT.length;
            let tT = !1;
            for (let KT = 0; KT < vT; KT++) {
              const TT = jT.data[KT].wv();
              if (TT && (7 == TT.fillMode || 0 == TT.fillMode || 1 == TT.fillMode || 2 == TT.fillMode || 4 == TT.fillMode)) {
                tT = !0;
                break
              }
            }
            if (!tT) return yT.hit = !0, yT.pickedMesh = this, yT.distance = KT.m.Distance(TT.origin, AT.WcT.center), yT.subMeshId = -1, yT;
            for (let KT = 0; KT < vT; KT++) {
              const lT = jT.data[KT];
              if (vT > 1 && !OT && !lT.canIntersects(TT)) continue;
              const MT = lT.intersects(TT, this._positions, this.FcT(), kT, cT);
              if (MT && (kT || !CT || MT.distance < CT.distance) && (CT = MT, CT.subMeshId = lT._id, CT._internalSubMeshId = KT, kT)) break
            }
            if (CT) {
              const kT = MT ?? this.getWorldMatrix(),
                cT = KT.h.Fv[0],
                lT = KT.h.Fv[1];
              KT.m.TransformCoordinatesToRef(TT.origin, kT, cT), TT.direction.scaleToRef(CT.distance, lT);
              const OT = KT.m.TransformNormal(lT, kT).addInPlace(cT);
              return yT.hit = !0, yT.distance = KT.m.Distance(cT, OT), yT.pickedPoint = OT, yT.pickedMesh = this, yT.bu = CT.bu || 0, yT.bv = CT.bv || 0, yT.subMeshFaceId = CT.faceId, yT.faceId = CT.faceId + jT.data[CT._internalSubMeshId].indexStart / (-1 !== this.getClassName().indexOf("LinesMesh") ? 2 : 3), yT.subMeshId = CT.subMeshId, yT
            }
            return yT
          }
          clone(TT, kT, cT) {
            return null
          }
          releaseSubMeshes() {
            let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (this.kF)
              for (; this.kF.length;) this.kF[0].dispose(TT);
            else this.kF = [];
            return this
          }
          dispose(TT) {
            let kT, cT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            const lT = this.NJ();
            for (this._scene.useMaterialMeshMap && this._internalAbstractMeshDataInfo._material && this._internalAbstractMeshDataInfo._material.meshMap && (this._internalAbstractMeshDataInfo._material.meshMap[this.uniqueId] = void 0), lT.freeActiveMeshes(), lT.freeRenderingGroups(), lT.renderingManager.maintainStateBetweenFrames && lT.renderingManager.restoreDispachedFlags(), void 0 !== this.actionManager && null !== this.actionManager && (this.actionManager.disposeWhenUnowned && !this._scene.meshes.some((TT => TT !== this && TT.actionManager === this.actionManager)) && this.actionManager.dispose(), this.actionManager = null), this._internalAbstractMeshDataInfo._skeleton = null, this._transformMatrixTexture && (this._transformMatrixTexture.dispose(), this._transformMatrixTexture = null), kT = 0; kT < this._intersectionsInProgress.length; kT++) {
              const TT = this._intersectionsInProgress[kT],
                cT = TT._intersectionsInProgress.indexOf(this);
              TT._intersectionsInProgress.splice(cT, 1)
            }
            this._intersectionsInProgress.length = 0;
            const MT = lT.lights;
            for (const OT of MT) {
              let TT = OT.includedOnlyMeshes.indexOf(this); - 1 !== TT && OT.includedOnlyMeshes.splice(TT, 1), TT = OT.excludedMeshes.indexOf(this), -1 !== TT && OT.excludedMeshes.splice(TT, 1);
              const kT = OT.getShadowGenerators();
              if (kT) {
                const cT = kT.values();
                for (let kT = cT.next(); !0 !== kT.done; kT = cT.next()) {
                  const cT = kT.value.getShadowMap();
                  cT && cT.renderList && (TT = cT.renderList.indexOf(this), -1 !== TT && cT.renderList.splice(TT, 1))
                }
              }
            }
            this.releaseSubMeshes(lT._isDisposing);
            const KT = lT.Dv();
            if (null !== this._occlusionQuery && (this.isOcclusionQueryInProgress = !1, KT.deleteQuery(this._occlusionQuery), this._occlusionQuery = null), KT.wipeCaches(), lT.eJ(this), this._parentContainer) {
              const TT = this._parentContainer.meshes.indexOf(this);
              TT > -1 && this._parentContainer.meshes.splice(TT, 1), this._parentContainer = null
            }
            if (cT && this.material && ("MultiMaterial" === this.material.getClassName() ? this.material.dispose(!1, !0, !0) : this.material.dispose(!1, !0)), !TT)
              for (kT = 0; kT < lT.lF.length; kT++) lT.lF[kT].emitter === this && (lT.lF[kT].dispose(), kT--);
            this._internalAbstractMeshDataInfo._facetData.facetDataEnabled && this.disableFacetData(), this._uniformBuffer.dispose(), this.onAfterWorldMatrixUpdateObservable.clear(), this.onCollideObservable.clear(), this.onCollisionPositionChangeObservable.clear(), this.onRebuildObservable.clear(), super.dispose(TT, cT)
          }
          _initFacetData() {
            const TT = this._internalAbstractMeshDataInfo._facetData;
            TT.facetNormals || (TT.facetNormals = []), TT.facetPositions || (TT.facetPositions = []), TT.facetPartitioning || (TT.facetPartitioning = new Array), TT.facetNb = this.FcT().length / 3 | 0, TT.partitioningSubdivisions = TT.partitioningSubdivisions ? TT.partitioningSubdivisions : 10, TT.partitioningBBoxRatio = TT.partitioningBBoxRatio ? TT.partitioningBBoxRatio : 1.01;
            for (let kT = 0; kT < TT.facetNb; kT++) TT.facetNormals[kT] = KT.m.Zero(), TT.facetPositions[kT] = KT.m.Zero();
            return TT.facetDataEnabled = !0, this
          }
          updateFacetData() {
            const TT = this._internalAbstractMeshDataInfo._facetData;
            TT.facetDataEnabled || this._initFacetData();
            const kT = this.getVerticesData(OT.l.PositionKind),
              cT = this.FcT(),
              lT = this.getVerticesData(OT.l.NormalKind)?.slice(),
              MT = this.DH();
            if (TT.facetDepthSort && !TT.facetDepthSortEnabled) {
              if (TT.facetDepthSortEnabled = !0, cT instanceof Uint16Array) TT.depthSortedIndices = new Uint16Array(cT);
              else if (cT instanceof Uint32Array) TT.depthSortedIndices = new Uint32Array(cT);
              else {
                let kT = !1;
                for (let TT = 0; TT < cT.length; TT++)
                  if (cT[TT] > 65535) {
                    kT = !0;
                    break
                  } TT.depthSortedIndices = kT ? new Uint32Array(cT) : new Uint16Array(cT)
              }
              if (TT.facetDepthSortFunction = function(TT, kT) {
                  return kT.sqDistance - TT.sqDistance
                }, !TT.facetDepthSortFrom) {
                const kT = this.NJ().activeCamera;
                TT.facetDepthSortFrom = kT ? kT.position : KT.m.Zero()
              }
              TT.depthSortedFacets = [];
              for (let kT = 0; kT < TT.facetNb; kT++) {
                const cT = {
                  ind: 3 * kT,
                  sqDistance: 0
                };
                TT.depthSortedFacets.push(cT)
              }
              TT.invertedMatrix = KT.d.Identity(), TT.facetDepthSortOrigin = KT.m.Zero()
            }
            TT.bbSize.x = MT.maximum.x - MT.minimum.x > DT.b ? MT.maximum.x - MT.minimum.x : DT.b, TT.bbSize.y = MT.maximum.y - MT.minimum.y > DT.b ? MT.maximum.y - MT.minimum.y : DT.b, TT.bbSize.z = MT.maximum.z - MT.minimum.z > DT.b ? MT.maximum.z - MT.minimum.z : DT.b;
            let fT = TT.bbSize.x > TT.bbSize.y ? TT.bbSize.x : TT.bbSize.y;
            if (fT = fT > TT.bbSize.z ? fT : TT.bbSize.z, TT.subDiv.max = TT.partitioningSubdivisions, TT.subDiv.X = Math.floor(TT.subDiv.max * TT.bbSize.x / fT), TT.subDiv.Y = Math.floor(TT.subDiv.max * TT.bbSize.y / fT), TT.subDiv.Z = Math.floor(TT.subDiv.max * TT.bbSize.z / fT), TT.subDiv.X = TT.subDiv.X < 1 ? 1 : TT.subDiv.X, TT.subDiv.Y = TT.subDiv.Y < 1 ? 1 : TT.subDiv.Y, TT.subDiv.Z = TT.subDiv.Z < 1 ? 1 : TT.subDiv.Z, TT.facetParameters.facetNormals = this.getFacetLocalNormals(), TT.facetParameters.facetPositions = this.getFacetLocalPositions(), TT.facetParameters.facetPartitioning = this.getFacetLocalPartitioning(), TT.facetParameters.bInfo = MT, TT.facetParameters.bbSize = TT.bbSize, TT.facetParameters.subDiv = TT.subDiv, TT.facetParameters.ratio = this.partitioningBBoxRatio, TT.facetParameters.depthSort = TT.facetDepthSort, TT.facetDepthSort && TT.facetDepthSortEnabled && (this.computeWorldMatrix(!0), this._worldMatrix.invertToRef(TT.invertedMatrix), KT.m.TransformCoordinatesToRef(TT.facetDepthSortFrom, TT.invertedMatrix, TT.facetDepthSortOrigin), TT.facetParameters.distanceTo = TT.facetDepthSortOrigin), TT.facetParameters.depthSortedFacets = TT.depthSortedFacets, lT && yT.d.ComputeNormals(kT, cT, lT, TT.facetParameters), TT.facetDepthSort && TT.facetDepthSortEnabled) {
              TT.depthSortedFacets.sort(TT.facetDepthSortFunction);
              const kT = TT.depthSortedIndices.length / 3 | 0;
              for (let lT = 0; lT < kT; lT++) {
                const kT = TT.depthSortedFacets[lT].ind;
                TT.depthSortedIndices[3 * lT] = cT[kT], TT.depthSortedIndices[3 * lT + 1] = cT[kT + 1], TT.depthSortedIndices[3 * lT + 2] = cT[kT + 2]
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
            const kT = KT.m.Zero();
            return this.getFacetPositionToRef(TT, kT), kT
          }
          getFacetPositionToRef(TT, kT) {
            const cT = this.getFacetLocalPositions()[TT],
              lT = this.getWorldMatrix();
            return KT.m.TransformCoordinatesToRef(cT, lT, kT), this
          }
          getFacetNormal(TT) {
            const kT = KT.m.Zero();
            return this.getFacetNormalToRef(TT, kT), kT
          }
          getFacetNormalToRef(TT, kT) {
            const cT = this.getFacetLocalNormals()[TT];
            return KT.m.TransformNormalToRef(cT, this.getWorldMatrix(), kT), this
          }
          getFacetsAtLocalCoordinates(TT, kT, cT) {
            const lT = this.DH(),
              MT = this._internalAbstractMeshDataInfo._facetData,
              KT = Math.floor((TT - lT.minimum.x * MT.partitioningBBoxRatio) * MT.subDiv.X * MT.partitioningBBoxRatio / MT.bbSize.x),
              OT = Math.floor((kT - lT.minimum.y * MT.partitioningBBoxRatio) * MT.subDiv.Y * MT.partitioningBBoxRatio / MT.bbSize.y),
              yT = Math.floor((cT - lT.minimum.z * MT.partitioningBBoxRatio) * MT.subDiv.Z * MT.partitioningBBoxRatio / MT.bbSize.z);
            return KT < 0 || KT > MT.subDiv.max || OT < 0 || OT > MT.subDiv.max || yT < 0 || yT > MT.subDiv.max ? null : MT.facetPartitioning[KT + MT.subDiv.max * OT + MT.subDiv.max * MT.subDiv.max * yT]
          }
          getClosestFacetAtCoordinates(TT, kT, cT, lT) {
            let MT = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              OT = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
            const yT = this.getWorldMatrix(),
              fT = KT.h.Matrix[5];
            yT.invertToRef(fT);
            const xT = KT.h.Fv[8];
            KT.m.TransformCoordinatesFromFloatsToRef(TT, kT, cT, fT, xT);
            const IT = this.getClosestFacetAtLocalCoordinates(xT.x, xT.y, xT.z, lT, MT, OT);
            return lT && KT.m.TransformCoordinatesFromFloatsToRef(lT.x, lT.y, lT.z, yT, lT), IT
          }
          getClosestFacetAtLocalCoordinates(TT, kT, cT, lT) {
            let MT, KT, OT, yT, fT, xT, IT, AT, CT = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              jT = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
              vT = null;
            const tT = this.getFacetLocalPositions(),
              hT = this.getFacetLocalNormals(),
              NT = this.getFacetsAtLocalCoordinates(TT, kT, cT);
            if (!NT) return null;
            let QT, ST, DT, aT, FT = Number.MAX_VALUE;
            for (let rT = 0; rT < NT.length; rT++) ST = NT[rT], DT = hT[ST], aT = tT[ST], yT = (TT - aT.x) * DT.x + (kT - aT.y) * DT.y + (cT - aT.z) * DT.z, (!CT || CT && jT && yT >= 0 || CT && !jT && yT <= 0) && (yT = DT.x * aT.x + DT.y * aT.y + DT.z * aT.z, fT = -(DT.x * TT + DT.y * kT + DT.z * cT - yT) / (DT.x * DT.x + DT.y * DT.y + DT.z * DT.z), xT = TT + DT.x * fT, IT = kT + DT.y * fT, AT = cT + DT.z * fT, MT = xT - TT, KT = IT - kT, OT = AT - cT, QT = MT * MT + KT * KT + OT * OT, QT < FT && (FT = QT, vT = ST, lT && (lT.x = xT, lT.y = IT, lT.z = AT)));
            return vT
          }
          getFacetDataParameters() {
            return this._internalAbstractMeshDataInfo._facetData.facetParameters
          }
          disableFacetData() {
            const TT = this._internalAbstractMeshDataInfo._facetData;
            return TT.facetDataEnabled && (TT.facetDataEnabled = !1, TT.facetPositions = [], TT.facetNormals = [], TT.facetPartitioning = new Array, TT.facetParameters = {}, TT.depthSortedIndices = new Uint32Array(0)), this
          }
          updateIndices(TT, kT) {
            return this
          }
          createNormals(TT) {
            const kT = this.getVerticesData(OT.l.PositionKind),
              cT = this.FcT();
            let lT;
            return lT = this.isVerticesDataPresent(OT.l.NormalKind) ? this.getVerticesData(OT.l.NormalKind) : [], yT.d.ComputeNormals(kT, cT, lT, {
              useRightHandedSystem: this.NJ().useRightHandedSystem
            }), this.setVerticesData(OT.l.NormalKind, lT, TT), this
          }
          async optimizeIndicesAsync() {
            const TT = this.FcT();
            if (!TT) return this;
            const {
              OptimizeIndices: kT
            } = await cT.e(342).then((() => cT(42086)));
            return kT(TT), this.setIndices(TT, this.getTotalVertices()), this
          }
          alignWithNormal(TT, kT) {
            kT || (kT = aT.c.Y);
            const cT = KT.h.Fv[0],
              lT = KT.h.Fv[1];
            return KT.m.CrossToRef(kT, TT, lT), KT.m.CrossToRef(TT, lT, cT), this.rotationQuaternion ? KT.f.RotationQuaternionFromAxisToRef(cT, TT, lT, this.rotationQuaternion) : KT.m.RotationFromAxisToRef(cT, TT, lT, this.rotation), this
          }
          _checkOcclusionQuery() {
            return !1
          }
          disableEdgesRendering() {
            throw (0, hT.i)("EdgesRenderer")
          }
          enableEdgesRendering(TT, kT, cT) {
            throw (0, hT.i)("EdgesRenderer")
          }
          getConnectedParticleSystems() {
            return this._scene.lF.filter((TT => TT.emitter === this))
          }
        }, (() => {
          const cT = "function" === typeof Symbol && Symbol.metadata ? Object.create(CT[Symbol.metadata] ?? null) : void 0;
          kT = [rT.e.filter((function() {
            return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0]) && !Array.isArray(arguments.length <= 3 ? void 0 : arguments[3]) && !Array.isArray(arguments.length <= 4 ? void 0 : arguments[4]) && !Array.isArray(arguments.length <= 5 ? void 0 : arguments[5]) && !Array.isArray(arguments.length <= 6 ? void 0 : arguments[6])
          }))], (0, lT.e)(TT, null, kT, {
            kind: "method",
            name: "_ApplySkeleton",
            static: !0,
            private: !1,
            access: {
              has: TT => "_ApplySkeleton" in TT,
              get: TT => TT._ApplySkeleton
            },
            metadata: cT
          }, null, jT), cT && Object.defineProperty(TT, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: cT
          })
        })(), TT.OCCLUSION_TYPE_NONE = ((0, lT.h)(TT, jT), 0), TT.OCCLUSION_TYPE_OPTIMISTIC = 1, TT.OCCLUSION_TYPE_STRICT = 2, TT.OCCLUSION_ALGORITHM_TYPE_ACCURATE = 0, TT.OCCLUSION_ALGORITHM_TYPE_CONSERVATIVE = 1, TT.CULLINGSTRATEGY_STANDARD = 0, TT.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY = 1, TT.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION = 2, TT.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION_THEN_BSPHERE_ONLY = 3, TT.DefaultIsPickable = !0, TT
      })(),
      eT = !1;

    function GT() {
      eT || (eT = !0, (0, wT.g)("BABYLON.AbstractMesh", HT))
    }(jT = HT.prototype).createOrUpdateSubmeshesOctree ?? (jT.createOrUpdateSubmeshesOctree = (0, hT.f)("AbstractMesh", "createOrUpdateSubmeshesOctree")), (vT = HT.prototype).getPhysicsImpostor ?? (vT.getPhysicsImpostor = (0, hT.f)("AbstractMesh", "getPhysicsImpostor")), (tT = HT.prototype).setPhysicsLinkWith ?? (tT.setPhysicsLinkWith = (0, hT.f)("AbstractMesh", "setPhysicsLinkWith")), Object.getOwnPropertyDescriptor(HT.prototype, "occlusionRetryCount") || Object.defineProperty(HT.prototype, "occlusionRetryCount", (0, hT.d)("AbstractMesh", "occlusionRetryCount")), Object.getOwnPropertyDescriptor(HT.prototype, "occlusionType") || Object.defineProperty(HT.prototype, "occlusionType", (0, hT.d)("AbstractMesh", "occlusionType")), Object.getOwnPropertyDescriptor(HT.prototype, "occlusionQueryAlgorithmType") || Object.defineProperty(HT.prototype, "occlusionQueryAlgorithmType", (0, hT.d)("AbstractMesh", "occlusionQueryAlgorithmType")), Object.getOwnPropertyDescriptor(HT.prototype, "isOccluded") || Object.defineProperty(HT.prototype, "isOccluded", (0, hT.d)("AbstractMesh", "isOccluded")), Object.getOwnPropertyDescriptor(HT.prototype, "isOcclusionQueryInProgress") || Object.defineProperty(HT.prototype, "isOcclusionQueryInProgress", (0, hT.d)("AbstractMesh", "isOcclusionQueryInProgress")), Object.getOwnPropertyDescriptor(HT.prototype, "forceRenderingWhenOccluded") || Object.defineProperty(HT.prototype, "forceRenderingWhenOccluded", (0, hT.d)("AbstractMesh", "forceRenderingWhenOccluded")), Object.getOwnPropertyDescriptor(HT.prototype, "occlusionForRenderPassId") || Object.defineProperty(HT.prototype, "occlusionForRenderPassId", (0, hT.d)("AbstractMesh", "occlusionForRenderPassId")), Object.getOwnPropertyDescriptor(HT.prototype, "decalMap") || Object.defineProperty(HT.prototype, "decalMap", (0, hT.d)("AbstractMesh", "decalMap")), Object.getOwnPropertyDescriptor(HT.prototype, "xH") || Object.defineProperty(HT.prototype, "xH", (0, hT.d)("AbstractMesh", "xH")), Object.getOwnPropertyDescriptor(HT.prototype, "physicsImpostor") || Object.defineProperty(HT.prototype, "physicsImpostor", (0, hT.d)("AbstractMesh", "physicsImpostor")), Object.getOwnPropertyDescriptor(HT.prototype, "showBoundingBox") || Object.defineProperty(HT.prototype, "showBoundingBox", (0, hT.d)("AbstractMesh", "showBoundingBox")), Object.getOwnPropertyDescriptor(HT.prototype, "edgesRenderer") || Object.defineProperty(HT.prototype, "edgesRenderer", (0, hT.d)("AbstractMesh", "edgesRenderer")), Object.getOwnPropertyDescriptor(HT.prototype, "renderOutline") || Object.defineProperty(HT.prototype, "renderOutline", (0, hT.d)("AbstractMesh", "renderOutline")), Object.getOwnPropertyDescriptor(HT.prototype, "renderOverlay") || Object.defineProperty(HT.prototype, "renderOverlay", (0, hT.d)("AbstractMesh", "renderOverlay"))
  },
  40042: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => NT
    });
    var lT = cT(36892),
      MT = cT(37093),
      KT = cT(40038),
      OT = cT(39782),
      yT = cT(39917),
      fT = cT(40051),
      xT = cT(39926),
      IT = cT(39727),
      AT = cT(38512),
      CT = cT(39649),
      jT = cT(39932),
      vT = cT(36925),
      tT = cT(40057),
      hT = cT(39689);
    class NT {
      get boundingBias() {
        return this._boundingBias
      }
      set boundingBias(TT) {
        this._boundingBias ? this._boundingBias.UkT(TT) : this._boundingBias = TT.clone(), this._updateBoundingInfo(!0, null)
      }
      static CreateGeometryForMesh(TT) {
        const kT = new NT(NT.RandomId(), TT.NJ());
        return kT.applyToMesh(TT), kT
      }
      get meshes() {
        return this._meshes
      }
      constructor(TT, kT, cT) {
        let MT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          KT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          OT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        this.delayLoadState = 0, this._totalVertices = 0, this._isDisposed = !1, this._extend = {
          minimum: new lT.m(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE),
          maximum: new lT.m(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE)
        }, this._indexBufferIsUpdatable = !1, this._positionsCache = [], this._parentContainer = null, this.useBoundingInfoFromGeometry = !1, this._scene = kT || vT.d.LastCreatedScene, this._scene && (this.id = TT, this.uniqueId = this._scene.getUniqueId(), this._engine = this._scene.Dv(), this._meshes = [], this._vertexBuffers = {}, this._indices = [], this._updatable = MT, null !== OT && (this._totalVertices = OT), cT ? this.setAllVerticesData(cT, MT) : null === OT && (this._totalVertices = 0), this._engine.getCaps().vertexArrayObject && (this._vertexArrayObjects = {}), KT && (this.applyToMesh(KT), KT.computeWorldMatrix(!0)))
      }
      get extend() {
        return this._extend
      }
      NJ() {
        return this._scene
      }
      Dv() {
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
        for (const kT in this._vertexBuffers) TT.add(this._vertexBuffers[kT].getWrapperBuffer());
        TT.forEach((TT => {
          TT._rebuild()
        }))
      }
      setAllVerticesData(TT, kT) {
        TT.applyToGeometry(this, kT), this._notifyUpdate()
      }
      setVerticesData(TT, kT) {
        let cT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          lT = arguments.length > 3 ? arguments[3] : void 0;
        cT && Array.isArray(kT) && (kT = new Float32Array(kT));
        const MT = new OT.l(this._engine, kT, TT, {
          updatable: cT,
          postponeInternalCreation: 0 === this._meshes.length,
          stride: lT,
          label: "Geometry_" + this.id + "_" + TT
        });
        this.setVerticesBuffer(MT)
      }
      removeVerticesData(TT) {
        this._vertexBuffers[TT] && (this._vertexBuffers[TT].dispose(), delete this._vertexBuffers[TT]), this._vertexArrayObjects && this._disposeVertexArrayObjects()
      }
      setVerticesBuffer(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          cT = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        const MT = TT.getKind();
        this._vertexBuffers[MT] && cT && this._vertexBuffers[MT].dispose(), TT._buffer && TT._ownsBuffer && TT._buffer._increaseReferences(), this._vertexBuffers[MT] = TT;
        const KT = this._meshes,
          yT = KT.length;
        if (MT === OT.l.PositionKind) {
          this._totalVertices = kT ?? TT._maxVerticesCount, this._updateExtend(this.useBoundingInfoFromGeometry && this._boundingInfo ? null : TT.getFloatData(this._totalVertices)), this._resetPointsArrayCache();
          const cT = this._extend && this._extend.minimum || new lT.m(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE),
            MT = this._extend && this._extend.maximum || new lT.m(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
          for (let TT = 0; TT < yT; TT++) {
            const kT = KT[TT];
            kT.buildBoundingInfo(cT, MT), kT._createGlobalSubMesh(kT.isUnIndexed), kT.computeWorldMatrix(!0), kT.synchronizeInstances()
          }
        }
        this._notifyUpdate(MT)
      }
      updateVerticesDataDirectly(TT, kT, cT) {
        let lT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const MT = this.getVertexBuffer(TT);
        MT && (MT.updateDirectly(kT, cT, lT), this._notifyUpdate(TT))
      }
      updateVerticesData(TT, kT) {
        let cT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const lT = this.getVertexBuffer(TT);
        lT && (lT.update(kT), TT === OT.l.PositionKind && this._updateBoundingInfo(cT, kT), this._notifyUpdate(TT))
      }
      _updateBoundingInfo(TT, kT) {
        if (TT && this._updateExtend(kT), this._resetPointsArrayCache(), TT) {
          const TT = this._meshes;
          for (const kT of TT) {
            kT.hasBoundingInfo ? kT.DH().reConstruct(this._extend.minimum, this._extend.maximum) : kT.buildBoundingInfo(this._extend.minimum, this._extend.maximum);
            const TT = kT.kF;
            for (const kT of TT) kT.refreshBoundingInfo()
          }
        }
      }
      _bind(TT, kT, cT, lT) {
        if (!TT) return;
        void 0 === kT && (kT = this._indexBuffer);
        const MT = this.getVertexBuffers();
        if (!MT) return;
        if (kT != this._indexBuffer || !this._vertexArrayObjects && !lT) return void this._engine.bindBuffers(MT, kT, TT, cT);
        const KT = lT || this._vertexArrayObjects,
          OT = this._engine;
        KT[TT.key] || (KT[TT.key] = OT.recordVertexArrayObject(MT, kT, TT, cT)), OT.bindVertexArrayObject(KT[TT.key], kT)
      }
      getTotalVertices() {
        return this.isReady() ? this._totalVertices : 0
      }
      getVerticesData(TT, kT, cT) {
        const lT = this.getVertexBuffer(TT);
        return lT ? lT.getFloatData(this._totalVertices, cT || kT && 1 !== this._meshes.length) : null
      }
      copyVerticesData(TT, kT) {
        const cT = this.getVertexBuffer(TT);
        if (!cT) return;
        kT[TT] || (kT[TT] = new Float32Array(this._totalVertices * cT.getSize()));
        const lT = cT.getData();
        lT && (0, hT.f)(lT, cT.getSize(), cT.type, cT.byteOffset, cT.byteStride, cT.normalized, this._totalVertices, kT[TT])
      }
      isVertexBufferUpdatable(TT) {
        const kT = this._vertexBuffers[TT];
        return !!kT && kT.isUpdatable()
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
        let kT;
        if (!this._vertexBuffers && this._delayInfo)
          for (kT in this._delayInfo) TT.push(kT);
        else
          for (kT in this._vertexBuffers) TT.push(kT);
        return TT
      }
      updateIndices(TT, kT) {
        let cT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this._indexBuffer)
          if (this._indexBufferIsUpdatable) {
            const lT = TT.length !== this._indices.length;
            if (cT || (this._indices = TT.slice()), this._engine.updateDynamicIndexBuffer(this._indexBuffer, TT, kT), lT)
              for (const TT of this._meshes) TT._createGlobalSubMesh(!0)
          } else this.setIndices(TT, null, !0)
      }
      setIndexBuffer(TT, kT, cT) {
        let lT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._indices = [], this._indexBufferIsUpdatable = !1, this._indexBuffer = TT, this._totalVertices = kT, this._totalIndices = cT, TT.is32Bits = null === lT ? kT > 65535 : lT;
        for (const MT of this._meshes) MT._createGlobalSubMesh(!0), MT.synchronizeInstances();
        this._notifyUpdate()
      }
      setIndices(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          cT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          lT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this._indexBuffer && this._engine._releaseBuffer(this._indexBuffer), this._indices = TT, this._indexBufferIsUpdatable = cT, 0 !== this._meshes.length && this._indices && (this._indexBuffer = this._engine.createIndexBuffer(this._indices, cT, "Geometry_" + this.id + "_IndexBuffer")), void 0 != kT && (this._totalVertices = kT);
        for (const MT of this._meshes) MT._createGlobalSubMesh(!lT), MT.synchronizeInstances();
        this._notifyUpdate()
      }
      getTotalIndices() {
        return this.isReady() ? void 0 !== this._totalIndices ? this._totalIndices : this._indices.length : 0
      }
      FcT(TT, kT) {
        if (!this.isReady()) return null;
        const cT = this._indices;
        return kT || TT && 1 !== this._meshes.length ? cT.slice() : cT
      }
      getIndexBuffer() {
        return this.isReady() ? this._indexBuffer : null
      }
      _releaseVertexArrayObject() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        TT && this._vertexArrayObjects && this._vertexArrayObjects[TT.key] && (this._engine.releaseVertexArrayObject(this._vertexArrayObjects[TT.key]), delete this._vertexArrayObjects[TT.key])
      }
      releaseForMesh(TT, kT) {
        const cT = this._meshes,
          lT = cT.indexOf(TT); - 1 !== lT && (cT.splice(lT, 1), this._vertexArrayObjects && TT._invalidateInstanceVertexArrayObject(), TT._geometry = null, 0 === cT.length && kT && this.dispose())
      }
      applyToMesh(TT) {
        if (TT._geometry === this) return;
        const kT = TT._geometry;
        kT && kT.releaseForMesh(TT), this._vertexArrayObjects && TT._invalidateInstanceVertexArrayObject();
        const cT = this._meshes;
        TT._geometry = this, TT._internalAbstractMeshDataInfo._positions = null, this._scene.pushGeometry(this), cT.push(TT), this.isReady() ? this._applyToMesh(TT) : this._boundingInfo && TT.setBoundingInfo(this._boundingInfo)
      }
      _updateExtend() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (this.useBoundingInfoFromGeometry && this._boundingInfo) this._extend = {
          minimum: this._boundingInfo.minimum.clone(),
          maximum: this._boundingInfo.maximum.clone()
        };
        else {
          if (!TT && (TT = this.getVerticesData(OT.l.PositionKind), !TT)) return;
          this._extend = (0, jT.g)(TT, 0, this._totalVertices, this.boundingBias, 3)
        }
      }
      _applyToMesh(TT) {
        for (const kT in this._vertexBuffers) {
          const cT = this._vertexBuffers[kT];
          cT._buffer.getBuffer() || cT.create(), kT === OT.l.PositionKind && (this._extend || this._updateExtend(), TT.buildBoundingInfo(this._extend.minimum, this._extend.maximum), TT._createGlobalSubMesh(TT.isUnIndexed), TT._updateBoundingInfo())
        }!this._indexBuffer && this._indices && this._indices.length > 0 && (this._indexBuffer = this._engine.createIndexBuffer(this._indices, this._updatable, "Geometry_" + this.id + "_IndexBuffer")), TT._syncGeometryWithMorphTargetManager(), TT.synchronizeInstances()
      }
      _notifyUpdate(TT) {
        this.onGeometryUpdated && this.onGeometryUpdated(this, TT), this._vertexArrayObjects && this._disposeVertexArrayObjects();
        for (const kT of this._meshes) kT._markSubMeshesAsAttributesDirty()
      }
      load(TT, kT) {
        2 !== this.delayLoadState && (this.isReady() ? kT && kT() : (this.delayLoadState = 2, this._queueLoad(TT, kT)))
      }
      _queueLoad(TT, kT) {
        this.delayLoadingFile && (TT.addPendingData(this), (async () => {
          try {
            const cT = await TT._loadDelayedFileAsync(this.delayLoadingFile, !1, !0);
            if (!this._delayLoadingFunction) return void TT.removePendingData(this);
            this._delayLoadingFunction(JSON.parse(cT), this), this.delayLoadState = 1, this._delayInfo = [], TT.removePendingData(this);
            const lT = this._meshes,
              MT = lT.length;
            for (let TT = 0; TT < MT; TT++) this._applyToMesh(lT[TT]);
            kT && kT()
          } catch (cT) {
            TT.removePendingData(this), TT.VkT || AT.e.Error(`Unable to delay load geometry "${this.id}" from "${this.delayLoadingFile}": ${cT}`)
          }
        })())
      }
      toLeftHanded() {
        const TT = this.FcT(!1);
        if (null != TT && TT.length > 0) {
          for (let kT = 0; kT < TT.length; kT += 3) {
            const cT = TT[kT + 0];
            TT[kT + 0] = TT[kT + 2], TT[kT + 2] = cT
          }
          this.setIndices(TT)
        }
        const kT = this.getVerticesData(OT.l.PositionKind, !1);
        if (null != kT && kT.length > 0) {
          for (let TT = 0; TT < kT.length; TT += 3) kT[TT + 2] = -kT[TT + 2];
          this.setVerticesData(OT.l.PositionKind, kT, !1)
        }
        const cT = this.getVerticesData(OT.l.NormalKind, !1);
        if (null != cT && cT.length > 0) {
          for (let TT = 0; TT < cT.length; TT += 3) cT[TT + 2] = -cT[TT + 2];
          this.setVerticesData(OT.l.NormalKind, cT, !1)
        }
      }
      _resetPointsArrayCache() {
        this._positions = null
      }
      _generatePointsArray() {
        if (this._positions) return !0;
        const TT = this.getVerticesData(OT.l.PositionKind);
        if (!TT || 0 === TT.length) return !1;
        for (let kT = 3 * this._positionsCache.length, cT = this._positionsCache.length; kT < TT.length; kT += 3, ++cT) this._positionsCache[cT] = lT.m.FromArray(TT, kT);
        for (let kT = 0, cT = 0; kT < TT.length; kT += 3, ++cT) this._positionsCache[cT].set(TT[0 + kT], TT[1 + kT], TT[2 + kT]);
        return this._positionsCache.length = TT.length / 3, this._positions = this._positionsCache, !0
      }
      VkT() {
        return this._isDisposed
      }
      _disposeVertexArrayObjects() {
        if (this._vertexArrayObjects) {
          for (const cT in this._vertexArrayObjects) this._engine.releaseVertexArrayObject(this._vertexArrayObjects[cT]);
          this._vertexArrayObjects = {};
          const TT = this._meshes,
            kT = TT.length;
          for (let cT = 0; cT < kT; cT++) TT[cT]._invalidateInstanceVertexArrayObject()
        }
      }
      dispose() {
        const TT = this._meshes,
          kT = TT.length;
        let cT;
        for (cT = 0; cT < kT; cT++) this.releaseForMesh(TT[cT]);
        this._meshes.length = 0, this._disposeVertexArrayObjects();
        for (const lT in this._vertexBuffers) this._vertexBuffers[lT].dispose();
        if (this._vertexBuffers = {}, this._totalVertices = 0, this._indexBuffer && this._engine._releaseBuffer(this._indexBuffer), this._indexBuffer = null, this._indices = [], this.delayLoadState = 0, this.delayLoadingFile = null, this._delayLoadingFunction = null, this._delayInfo = [], this._boundingInfo = null, this._scene.removeGeometry(this), this._parentContainer) {
          const TT = this._parentContainer.geometries.indexOf(this);
          TT > -1 && this._parentContainer.geometries.splice(TT, 1), this._parentContainer = null
        }
        this._isDisposed = !0
      }
      copy(TT) {
        const kT = new NT(TT, this._scene),
          cT = this.FcT(void 0, !0);
        cT && kT.setIndices(cT);
        let lT, MT = !1;
        for (lT in this._vertexBuffers) {
          const TT = this.getVertexBuffer(lT),
            cT = TT.getData();
          if (!cT) continue;
          const KT = TT.isUpdatable(),
            yT = TT.getSize(),
            {
              type: fT,
              byteOffset: xT,
              byteStride: IT,
              normalized: AT
            } = TT;
          MT = MT || KT;
          let CT = this._totalVertices;
          if (TT.getIsInstanced()) {
            let TT;
            TT = cT instanceof Array ? 4 * cT.length : cT.byteLength, CT = TT / IT
          }
          const jT = (0, hT.m)(cT, yT, fT, xT, IT, CT, !0),
            vT = new OT.l(this._engine, jT, lT, {
              updatable: KT,
              useBytes: !1,
              stride: yT,
              size: yT,
              offset: 0,
              type: fT,
              normalized: AT,
              takeBufferOwnership: !0,
              instanced: TT.getIsInstanced()
            });
          kT.setVerticesBuffer(vT, CT)
        }
        for (lT in kT._updatable = MT, kT.delayLoadState = this.delayLoadState, kT.delayLoadingFile = this.delayLoadingFile, kT._delayLoadingFunction = this._delayLoadingFunction, this._delayInfo) kT._delayInfo = kT._delayInfo || [], kT._delayInfo.push(lT);
        return kT._boundingInfo = new xT.e(this._extend.minimum, this._extend.maximum), kT
      }
      serialize() {
        const TT = {};
        return TT.id = this.id, TT.uniqueId = this.uniqueId, TT.updatable = this._updatable, CT.b && CT.b.HasTags(this) && (TT.tags = CT.b.GetTags(this)), TT
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
        return this.isVerticesDataPresent(OT.l.PositionKind) && (TT.positions = this._toNumberArray(this.getVerticesData(OT.l.PositionKind)), this.isVertexBufferUpdatable(OT.l.PositionKind) && (TT.positionsUpdatable = !0)), this.isVerticesDataPresent(OT.l.NormalKind) && (TT.normals = this._toNumberArray(this.getVerticesData(OT.l.NormalKind)), this.isVertexBufferUpdatable(OT.l.NormalKind) && (TT.normalsUpdatable = !0)), this.isVerticesDataPresent(OT.l.TangentKind) && (TT.tangents = this._toNumberArray(this.getVerticesData(OT.l.TangentKind)), this.isVertexBufferUpdatable(OT.l.TangentKind) && (TT.tangentsUpdatable = !0)), this.isVerticesDataPresent(OT.l.UVKind) && (TT.uvs = this._toNumberArray(this.getVerticesData(OT.l.UVKind)), this.isVertexBufferUpdatable(OT.l.UVKind) && (TT.uvsUpdatable = !0)), this.isVerticesDataPresent(OT.l.UV2Kind) && (TT.uvs2 = this._toNumberArray(this.getVerticesData(OT.l.UV2Kind)), this.isVertexBufferUpdatable(OT.l.UV2Kind) && (TT.uvs2Updatable = !0)), this.isVerticesDataPresent(OT.l.UV3Kind) && (TT.uvs3 = this._toNumberArray(this.getVerticesData(OT.l.UV3Kind)), this.isVertexBufferUpdatable(OT.l.UV3Kind) && (TT.uvs3Updatable = !0)), this.isVerticesDataPresent(OT.l.UV4Kind) && (TT.uvs4 = this._toNumberArray(this.getVerticesData(OT.l.UV4Kind)), this.isVertexBufferUpdatable(OT.l.UV4Kind) && (TT.uvs4Updatable = !0)), this.isVerticesDataPresent(OT.l.UV5Kind) && (TT.uvs5 = this._toNumberArray(this.getVerticesData(OT.l.UV5Kind)), this.isVertexBufferUpdatable(OT.l.UV5Kind) && (TT.uvs5Updatable = !0)), this.isVerticesDataPresent(OT.l.UV6Kind) && (TT.uvs6 = this._toNumberArray(this.getVerticesData(OT.l.UV6Kind)), this.isVertexBufferUpdatable(OT.l.UV6Kind) && (TT.uvs6Updatable = !0)), this.isVerticesDataPresent(OT.l.ColorKind) && (TT.colors = this._toNumberArray(this.getVerticesData(OT.l.ColorKind)), this.isVertexBufferUpdatable(OT.l.ColorKind) && (TT.colorsUpdatable = !0)), this.isVerticesDataPresent(OT.l.MatricesIndicesKind) && (TT.matricesIndices = this._toNumberArray(this.getVerticesData(OT.l.MatricesIndicesKind)), TT.matricesIndicesExpanded = !0, this.isVertexBufferUpdatable(OT.l.MatricesIndicesKind) && (TT.matricesIndicesUpdatable = !0)), this.isVerticesDataPresent(OT.l.MatricesWeightsKind) && (TT.matricesWeights = this._toNumberArray(this.getVerticesData(OT.l.MatricesWeightsKind)), this.isVertexBufferUpdatable(OT.l.MatricesWeightsKind) && (TT.matricesWeightsUpdatable = !0)), TT.indices = this._toNumberArray(this.FcT()), TT
      }
      static ExtractFromMesh(TT, kT) {
        const cT = TT._geometry;
        return cT ? cT.copy(kT) : null
      }
      static RandomId() {
        return IT.h.RandomId()
      }
      static _GetGeometryByLoadedUniqueId(TT, kT) {
        for (let cT = 0; cT < kT.geometries.length; cT++)
          if (kT.geometries[cT]._loadedUniqueId === TT) return kT.geometries[cT];
        return null
      }
      static _ImportGeometry(TT, kT) {
        const cT = kT.NJ(),
          lT = TT.geometryUniqueId,
          KT = TT.geometryId;
        if (lT || KT) {
          const TT = lT ? this._GetGeometryByLoadedUniqueId(lT, cT) : cT.getGeometryById(KT);
          TT && TT.applyToMesh(kT)
        } else if (TT instanceof ArrayBuffer) {
          const cT = kT._binaryInfo;
          if (cT.positionsAttrDesc && cT.positionsAttrDesc.count > 0) {
            const lT = new Float32Array(TT, cT.positionsAttrDesc.offset, cT.positionsAttrDesc.count);
            kT.setVerticesData(OT.l.PositionKind, lT, !1)
          }
          if (cT.normalsAttrDesc && cT.normalsAttrDesc.count > 0) {
            const lT = new Float32Array(TT, cT.normalsAttrDesc.offset, cT.normalsAttrDesc.count);
            kT.setVerticesData(OT.l.NormalKind, lT, !1)
          }
          if (cT.tangetsAttrDesc && cT.tangetsAttrDesc.count > 0) {
            const lT = new Float32Array(TT, cT.tangetsAttrDesc.offset, cT.tangetsAttrDesc.count);
            kT.setVerticesData(OT.l.TangentKind, lT, !1)
          }
          if (cT.uvsAttrDesc && cT.uvsAttrDesc.count > 0) {
            const lT = new Float32Array(TT, cT.uvsAttrDesc.offset, cT.uvsAttrDesc.count);
            if (tT.c)
              for (let TT = 1; TT < lT.length; TT += 2) lT[TT] = 1 - lT[TT];
            kT.setVerticesData(OT.l.UVKind, lT, !1)
          }
          if (cT.uvs2AttrDesc && cT.uvs2AttrDesc.count > 0) {
            const lT = new Float32Array(TT, cT.uvs2AttrDesc.offset, cT.uvs2AttrDesc.count);
            if (tT.c)
              for (let TT = 1; TT < lT.length; TT += 2) lT[TT] = 1 - lT[TT];
            kT.setVerticesData(OT.l.UV2Kind, lT, !1)
          }
          if (cT.uvs3AttrDesc && cT.uvs3AttrDesc.count > 0) {
            const lT = new Float32Array(TT, cT.uvs3AttrDesc.offset, cT.uvs3AttrDesc.count);
            if (tT.c)
              for (let TT = 1; TT < lT.length; TT += 2) lT[TT] = 1 - lT[TT];
            kT.setVerticesData(OT.l.UV3Kind, lT, !1)
          }
          if (cT.uvs4AttrDesc && cT.uvs4AttrDesc.count > 0) {
            const lT = new Float32Array(TT, cT.uvs4AttrDesc.offset, cT.uvs4AttrDesc.count);
            if (tT.c)
              for (let TT = 1; TT < lT.length; TT += 2) lT[TT] = 1 - lT[TT];
            kT.setVerticesData(OT.l.UV4Kind, lT, !1)
          }
          if (cT.uvs5AttrDesc && cT.uvs5AttrDesc.count > 0) {
            const lT = new Float32Array(TT, cT.uvs5AttrDesc.offset, cT.uvs5AttrDesc.count);
            if (tT.c)
              for (let TT = 1; TT < lT.length; TT += 2) lT[TT] = 1 - lT[TT];
            kT.setVerticesData(OT.l.UV5Kind, lT, !1)
          }
          if (cT.uvs6AttrDesc && cT.uvs6AttrDesc.count > 0) {
            const lT = new Float32Array(TT, cT.uvs6AttrDesc.offset, cT.uvs6AttrDesc.count);
            if (tT.c)
              for (let TT = 1; TT < lT.length; TT += 2) lT[TT] = 1 - lT[TT];
            kT.setVerticesData(OT.l.UV6Kind, lT, !1)
          }
          if (cT.colorsAttrDesc && cT.colorsAttrDesc.count > 0) {
            const lT = new Float32Array(TT, cT.colorsAttrDesc.offset, cT.colorsAttrDesc.count);
            kT.setVerticesData(OT.l.ColorKind, lT, !1, cT.colorsAttrDesc.stride)
          }
          if (cT.matricesIndicesAttrDesc && cT.matricesIndicesAttrDesc.count > 0) {
            const lT = new Int32Array(TT, cT.matricesIndicesAttrDesc.offset, cT.matricesIndicesAttrDesc.count),
              MT = [];
            for (let TT = 0; TT < lT.length; TT++) {
              const kT = lT[TT];
              MT.push(255 & kT), MT.push((65280 & kT) >> 8), MT.push((16711680 & kT) >> 16), MT.push(kT >> 24 & 255)
            }
            kT.setVerticesData(OT.l.MatricesIndicesKind, MT, !1)
          }
          if (cT.matricesIndicesExtraAttrDesc && cT.matricesIndicesExtraAttrDesc.count > 0) {
            const lT = new Int32Array(TT, cT.matricesIndicesExtraAttrDesc.offset, cT.matricesIndicesExtraAttrDesc.count),
              MT = [];
            for (let TT = 0; TT < lT.length; TT++) {
              const kT = lT[TT];
              MT.push(255 & kT), MT.push((65280 & kT) >> 8), MT.push((16711680 & kT) >> 16), MT.push(kT >> 24 & 255)
            }
            kT.setVerticesData(OT.l.MatricesIndicesExtraKind, MT, !1)
          }
          if (cT.matricesWeightsAttrDesc && cT.matricesWeightsAttrDesc.count > 0) {
            const lT = new Float32Array(TT, cT.matricesWeightsAttrDesc.offset, cT.matricesWeightsAttrDesc.count);
            kT.setVerticesData(OT.l.MatricesWeightsKind, lT, !1)
          }
          if (cT.indicesAttrDesc && cT.indicesAttrDesc.count > 0) {
            const lT = new Int32Array(TT, cT.indicesAttrDesc.offset, cT.indicesAttrDesc.count);
            kT.setIndices(lT, null)
          }
          if (cT.subMeshesAttrDesc && cT.subMeshesAttrDesc.count > 0) {
            const lT = new Int32Array(TT, cT.subMeshesAttrDesc.offset, 5 * cT.subMeshesAttrDesc.count);
            kT.kF = [];
            for (let TT = 0; TT < cT.subMeshesAttrDesc.count; TT++) {
              const cT = lT[5 * TT + 0],
                MT = lT[5 * TT + 1],
                KT = lT[5 * TT + 2],
                OT = lT[5 * TT + 3],
                fT = lT[5 * TT + 4];
              yT.c.AddToMesh(cT, MT, KT, OT, fT, kT)
            }
          }
        } else if (TT.positions && TT.normals && TT.indices) {
          if (kT.setVerticesData(OT.l.PositionKind, TT.positions, TT.positions._updatable || TT.positionsUpdatable), kT.setVerticesData(OT.l.NormalKind, TT.normals, TT.normals._updatable || TT.normalsUpdatable), TT.tangents && kT.setVerticesData(OT.l.TangentKind, TT.tangents, TT.tangents._updatable || TT.tangentsUpdatable), TT.uvs && kT.setVerticesData(OT.l.UVKind, TT.uvs, TT.uvs._updatable || TT.uvsUpdatable), TT.uvs2 && kT.setVerticesData(OT.l.UV2Kind, TT.uvs2, TT.uvs2._updatable || TT.uvs2Updatable), TT.uvs3 && kT.setVerticesData(OT.l.UV3Kind, TT.uvs3, TT.uvs3._updatable || TT.uvs3Updatable), TT.uvs4 && kT.setVerticesData(OT.l.UV4Kind, TT.uvs4, TT.uvs4._updatable || TT.uvs4Updatable), TT.uvs5 && kT.setVerticesData(OT.l.UV5Kind, TT.uvs5, TT.uvs5._updatable || TT.uvs5Updatable), TT.uvs6 && kT.setVerticesData(OT.l.UV6Kind, TT.uvs6, TT.uvs6._updatable || TT.uvs6Updatable), TT.colors && kT.setVerticesData(OT.l.ColorKind, MT.g.CheckColors4(TT.colors, TT.positions.length / 3), TT.colors._updatable), TT.matricesIndices)
            if (TT.matricesIndices._isExpanded || TT.matricesIndicesExpanded) delete TT.matricesIndices._isExpanded, delete TT.matricesIndicesExpanded, kT.setVerticesData(OT.l.MatricesIndicesKind, TT.matricesIndices, TT.matricesIndices._updatable || TT.matricesIndicesUpdatable);
            else {
              const cT = [];
              for (let kT = 0; kT < TT.matricesIndices.length; kT++) {
                const lT = TT.matricesIndices[kT];
                cT.push(255 & lT), cT.push((65280 & lT) >> 8), cT.push((16711680 & lT) >> 16), cT.push(lT >> 24 & 255)
              }
              kT.setVerticesData(OT.l.MatricesIndicesKind, cT, TT.matricesIndices._updatable || TT.matricesIndicesUpdatable)
            } if (TT.matricesIndicesExtra)
            if (TT.matricesIndicesExtraExpanded || TT.matricesIndicesExtra._isExpanded) delete TT.matricesIndices._isExpanded, delete TT.matricesIndicesExtraExpanded, kT.setVerticesData(OT.l.MatricesIndicesExtraKind, TT.matricesIndicesExtra, TT.matricesIndicesExtra._updatable || TT.matricesIndicesExtraUpdatable);
            else {
              const cT = [];
              for (let kT = 0; kT < TT.matricesIndicesExtra.length; kT++) {
                const lT = TT.matricesIndicesExtra[kT];
                cT.push(255 & lT), cT.push((65280 & lT) >> 8), cT.push((16711680 & lT) >> 16), cT.push(lT >> 24 & 255)
              }
              kT.setVerticesData(OT.l.MatricesIndicesExtraKind, cT, TT.matricesIndicesExtra._updatable || TT.matricesIndicesExtraUpdatable)
            } TT.matricesWeights && (NT._CleanMatricesWeights(TT, kT), kT.setVerticesData(OT.l.MatricesWeightsKind, TT.matricesWeights, TT.matricesWeights._updatable)), TT.matricesWeightsExtra && kT.setVerticesData(OT.l.MatricesWeightsExtraKind, TT.matricesWeightsExtra, TT.matricesWeights._updatable), kT.setIndices(TT.indices, null)
        }
        if (TT.kF) {
          kT.kF = [];
          for (let cT = 0; cT < TT.kF.length; cT++) {
            const lT = TT.kF[cT];
            yT.c.AddToMesh(lT.materialIndex, lT.verticesStart, lT.verticesCount, lT.indexStart, lT.indexCount, kT)
          }
        }
        kT._shouldGenerateFlatShading && (kT.convertToFlatShadedMesh(), kT._shouldGenerateFlatShading = !1), kT.computeWorldMatrix(!0), cT.onMeshImportedObservable.notifyObservers(kT)
      }
      static _CleanMatricesWeights(TT, kT) {
        const cT = .001;
        if (!fT.c.CleanBoneMatrixWeights) return;
        let lT;
        if (!(TT.skeletonId > -1)) return;
        {
          const cT = kT.NJ().getLastSkeletonById(TT.skeletonId);
          if (!cT) return;
          lT = cT.bones.length
        }
        const MT = kT.getVerticesData(OT.l.MatricesIndicesKind),
          KT = kT.getVerticesData(OT.l.MatricesIndicesExtraKind),
          yT = TT.matricesWeights,
          xT = TT.matricesWeightsExtra,
          IT = TT.numBoneInfluencer,
          AT = yT.length;
        for (let OT = 0; OT < AT; OT += 4) {
          let TT = 0,
            kT = -1;
          for (let lT = 0; lT < 4; lT++) {
            const MT = yT[OT + lT];
            TT += MT, MT < cT && kT < 0 && (kT = lT)
          }
          if (xT)
            for (let lT = 0; lT < 4; lT++) {
              const MT = xT[OT + lT];
              TT += MT, MT < cT && kT < 0 && (kT = lT + 4)
            }
          if ((kT < 0 || kT > IT - 1) && (kT = IT - 1), TT > cT) {
            const kT = 1 / TT;
            for (let TT = 0; TT < 4; TT++) yT[OT + TT] *= kT;
            if (xT)
              for (let TT = 0; TT < 4; TT++) xT[OT + TT] *= kT
          } else kT >= 4 ? (xT[OT + kT - 4] = 1 - TT, KT[OT + kT - 4] = lT) : (yT[OT + kT] = 1 - TT, MT[OT + kT] = lT)
        }
        kT.setVerticesData(OT.l.MatricesIndicesKind, MT), TT.matricesWeightsExtra && kT.setVerticesData(OT.l.MatricesIndicesExtraKind, KT)
      }
      static Parse(TT, kT, cT) {
        const MT = new NT(TT.id, kT, void 0, TT.updatable);
        return MT._loadedUniqueId = TT.uniqueId, CT.b && CT.b.AddTagsTo(MT, TT.tags), TT.delayLoadingFile ? (MT.delayLoadState = 4, MT.delayLoadingFile = cT + TT.delayLoadingFile, MT._boundingInfo = new xT.e(lT.m.FromArray(TT.boundingBoxMinimum), lT.m.FromArray(TT.boundingBoxMaximum)), MT._delayInfo = [], TT.hasUVs && MT._delayInfo.push(OT.l.UVKind), TT.hasUVs2 && MT._delayInfo.push(OT.l.UV2Kind), TT.hasUVs3 && MT._delayInfo.push(OT.l.UV3Kind), TT.hasUVs4 && MT._delayInfo.push(OT.l.UV4Kind), TT.hasUVs5 && MT._delayInfo.push(OT.l.UV5Kind), TT.hasUVs6 && MT._delayInfo.push(OT.l.UV6Kind), TT.hasColors && MT._delayInfo.push(OT.l.ColorKind), TT.hasMatricesIndices && MT._delayInfo.push(OT.l.MatricesIndicesKind), TT.hasMatricesWeights && MT._delayInfo.push(OT.l.MatricesWeightsKind), MT._delayLoadingFunction = KT.d.ImportVertexData) : KT.d.ImportVertexData(TT, MT), kT.pushGeometry(MT, !0), MT
      }
    }
  },
  40095: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => AT,
      f: () => vT
    });
    var lT = cT(36892),
      MT = cT(38512),
      KT = cT(40066),
      OT = cT(40025),
      yT = cT(38507),
      fT = cT(40071),
      xT = cT(39782),
      IT = cT(36949);
    class AT extends KT.c {
      constructor(TT, kT) {
        super(TT, kT.NJ()), this._indexInSourceMeshInstanceArray = -1, this._distanceToCamera = 0, kT.K3(this), this._sourceMesh = kT, this._unIndexed = kT._unIndexed, this.position.UkT(kT.position), this.rotation.UkT(kT.rotation), this.GA.UkT(kT.GA), kT.rotationQuaternion && (this.rotationQuaternion = kT.rotationQuaternion.clone()), this.animations = kT.animations.slice();
        for (const cT of kT.getAnimationRanges()) null != cT && this.createAnimationRange(cT.name, cT.from, cT.to);
        if (this.infiniteDistance = kT.infiniteDistance, this.setPivotMatrix(kT.getPivotMatrix()), kT.skeleton || kT.morphTargetManager || !kT.hasBoundingInfo) this.refreshBoundingInfo(!0, !0);
        else {
          const TT = kT.DH();
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
        this._sourceMesh?.receiveShadows !== TT && MT.e.Warn("Setting receiveShadows on an instanced mesh has no effect")
      }
      get material() {
        return this._sourceMesh.material
      }
      set material(TT) {
        this._sourceMesh?.material !== TT && MT.e.Warn("Setting material on an instanced mesh has no effect")
      }
      get visibility() {
        return this._sourceMesh.visibility
      }
      set visibility(TT) {
        this._sourceMesh?.visibility !== TT && MT.e.Warn("Setting visibility on an instanced mesh has no effect")
      }
      get skeleton() {
        return this._sourceMesh.skeleton
      }
      set skeleton(TT) {
        this._sourceMesh?.skeleton !== TT && MT.e.Warn("Setting skeleton on an instanced mesh has no effect")
      }
      get renderingGroupId() {
        return this._sourceMesh.renderingGroupId
      }
      set renderingGroupId(TT) {
        this._sourceMesh && TT !== this._sourceMesh.renderingGroupId && MT.e.Warn("Note - setting renderingGroupId of an instanced mesh has no effect on the scene")
      }
      get meshBlendingTag() {
        return this._sourceMesh.meshBlendingTag
      }
      set meshBlendingTag(TT) {
        this._sourceMesh && TT !== this._sourceMesh.meshBlendingTag && MT.e.Warn("Setting meshBlendingTag on an instanced mesh has no effect")
      }
      getTotalVertices() {
        return this._sourceMesh ? this._sourceMesh.getTotalVertices() : 0
      }
      getTotalIndices() {
        return this._sourceMesh.getTotalIndices()
      }
      get hlT() {
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
      getVerticesData(TT, kT, cT) {
        return this._sourceMesh.getVerticesData(TT, kT, cT)
      }
      copyVerticesData(TT, kT) {
        this._sourceMesh.copyVerticesData(TT, kT)
      }
      getVertexBuffer(TT, kT) {
        return this._sourceMesh.getVertexBuffer(TT, kT)
      }
      setVerticesData(TT, kT, cT, lT) {
        return this.hlT && this.hlT.setVerticesData(TT, kT, cT, lT), this.hlT
      }
      updateVerticesData(TT, kT, cT, lT) {
        return this.hlT && this.hlT.updateVerticesData(TT, kT, cT, lT), this.hlT
      }
      setIndices(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return this.hlT && this.hlT.setIndices(TT, kT), this.hlT
      }
      isVerticesDataPresent(TT) {
        return this._sourceMesh.isVerticesDataPresent(TT)
      }
      FcT() {
        return this._sourceMesh.FcT()
      }
      get _positions() {
        return this._sourceMesh._positions
      }
      refreshBoundingInfo() {
        let TT, kT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          cT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.hasBoundingInfo && this.DH().isLocked) return this;
        TT = "object" === typeof kT ? kT : {
          applySkeleton: kT,
          applyMorph: cT
        };
        const lT = this._sourceMesh.geometry ? this._sourceMesh.geometry.boundingBias : null;
        return this._refreshBoundingInfo(this._sourceMesh._getData(TT, null, xT.l.PositionKind), lT), this
      }
      _preActivate() {
        return this._currentLOD && this._currentLOD._preActivate(), this
      }
      _activate(TT, kT) {
        if (super._activate(TT, kT), this._sourceMesh.kF || MT.e.Warn("Instances should only be created for meshes with geometry."), this._currentLOD) {
          if (this._currentLOD._getWorldMatrixDeterminant() >= 0 !== this._getWorldMatrixDeterminant() >= 0) return this._internalAbstractMeshDataInfo._actAsRegularMesh = !0, !0;
          if (this._internalAbstractMeshDataInfo._actAsRegularMesh = !1, this._currentLOD._registerInstanceForRenderId(this, TT), kT) {
            if (!this._currentLOD._internalAbstractMeshDataInfo._isActiveIntermediate) return this._currentLOD._internalAbstractMeshDataInfo._onlyForInstancesIntermediate = !0, !0
          } else if (!this._currentLOD._internalAbstractMeshDataInfo._isActive) return this._currentLOD._internalAbstractMeshDataInfo._onlyForInstances = !0, !0
        }
        return !1
      }
      _postActivate() {
        this._sourceMesh.edgesShareWithInstances && this._sourceMesh._edgesRenderer && this._sourceMesh._edgesRenderer.isEnabled && this._sourceMesh._renderingGroup ? (this._sourceMesh._renderingGroup._edgesRenderers.pushNoDuplicate(this._sourceMesh._edgesRenderer), this._sourceMesh._edgesRenderer.customInstances.push(this.getWorldMatrix())) : this._edgesRenderer && this._edgesRenderer.isEnabled && this._sourceMesh._renderingGroup && this._sourceMesh._renderingGroup._edgesRenderers.push(this._edgesRenderer)
      }
      getWorldMatrix() {
        if (this._currentLOD && this._currentLOD !== this._sourceMesh && this._currentLOD.billboardMode !== fT.f.BILLBOARDMODE_NONE && this._currentLOD._masterMesh !== this) {
          this._billboardWorldMatrix || (this._billboardWorldMatrix = new lT.d);
          const TT = this._currentLOD._masterMesh;
          return this._currentLOD._masterMesh = this, lT.h.Fv[7].UkT(this._currentLOD.position), this._currentLOD.position.set(0, 0, 0), this._billboardWorldMatrix.UkT(this._currentLOD.computeWorldMatrix(!0)), this._currentLOD.position.UkT(lT.h.Fv[7]), this._currentLOD._masterMesh = TT, this._billboardWorldMatrix
        }
        return super.getWorldMatrix()
      }
      get aJ() {
        return !0
      }
      getLOD(TT) {
        if (!TT) return this;
        const kT = this.hlT.getLODLevels();
        if (kT && 0 !== kT.length) {
          const kT = this.DH();
          this._currentLOD = this.hlT.getLOD(TT, kT.WcT)
        } else this._currentLOD = this.hlT;
        return this._currentLOD
      }
      _preActivateForIntermediateRendering(TT) {
        return this.hlT._preActivateForIntermediateRendering(TT)
      }
      _syncSubMeshes() {
        if (this.releaseSubMeshes(), this._sourceMesh.kF)
          for (let TT = 0; TT < this._sourceMesh.kF.length; TT++) this._sourceMesh.kF[TT].clone(this, this._sourceMesh);
        return this
      }
      _generatePointsArray() {
        return this._sourceMesh._generatePointsArray()
      }
      _updateBoundingInfo() {
        return this.hasBoundingInfo ? this.DH().update(this.worldMatrixFromCache) : this.buildBoundingInfo(this.absolutePosition, this.absolutePosition, this.worldMatrixFromCache), this._updateSubMeshesBoundingInfo(this.worldMatrixFromCache), this
      }
      clone(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          cT = arguments.length > 2 ? arguments[2] : void 0;
        const lT = ((arguments.length > 3 ? arguments[3] : void 0) || this._sourceMesh).createInstance(TT);
        if (yT.d.DeepCopy(this, lT, ["name", "kF", "uniqueId", "parent", "lightSources", "receiveShadows", "material", "visibility", "skeleton", "hlT", "aJ", "facetNb", "isFacetDataEnabled", "isBlocked", "useBones", "tlT", "collider", "edgesRenderer", "forward", "up", "right", "absolutePosition", "absoluteScaling", "absoluteRotationQuaternion", "kOT", "nonUniformScaling", "behaviors", "worldMatrixFromCache", "hasThinInstances", "hasBoundingInfo", "geometry"], []), kT && (lT.parent = kT), !cT)
          for (let MT = 0; MT < this.NJ().meshes.length; MT++) {
            const TT = this.NJ().meshes[MT];
            TT.parent === this && TT.clone(TT.name, lT)
          }
        return lT.computeWorldMatrix(!0), this.onClonedObservable.notifyObservers(lT), lT
      }
      dispose(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._sourceMesh.o3(this), super.dispose(TT, kT)
      }
      _serializeAsParent(TT) {
        super._serializeAsParent(TT), TT.parentId = this._sourceMesh.uniqueId, TT.parentInstanceIndex = this._indexInSourceMeshInstanceArray
      }
      instantiateHierarchy() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          kT = arguments.length > 1 ? arguments[1] : void 0,
          cT = arguments.length > 2 ? arguments[2] : void 0;
        const lT = this.clone("Clone of " + (this.name || this.id), TT || this.parent, !0, kT && kT.newSourcedMesh);
        lT && cT && cT(this, lT);
        for (const MT of this.getChildTransformNodes(!0)) MT.instantiateHierarchy(lT, kT, cT);
        return lT
      }
    }
    let CT = !1;

    function jT(TT, kT, cT, lT, MT) {
      for (let KT = 0; KT < kT.length; KT++) {
        const OT = TT[kT[KT]] ?? 0,
          yT = MT + cT[KT];
        OT.toArray ? OT.toArray(lT, yT) : OT.copyToArray ? OT.copyToArray(lT, yT) : lT[yT] = OT
      }
    }

    function vT() {
      CT || (CT = !0, OT.e._instancedMeshFactory = (TT, kT) => {
        const cT = new AT(TT, kT);
        if (kT.xH) {
          cT.xH = {};
          for (const TT in kT.xH) cT.xH[TT] = kT.xH[TT]
        }
        return cT
      }, OT.e.prototype.lH = function(TT, kT) {
        if (!this.xH) {
          this.xH = {};
          for (const TT of this.instances) TT.xH = {}
        }
        this._userInstancedBuffersStorage || (this._userInstancedBuffersStorage = {
          data: {},
          vertexBuffers: {},
          strides: {},
          sizes: {},
          vertexArrayObjects: this.Dv().getCaps().vertexArrayObject ? {} : void 0
        }), this.xH[TT] = null, this._userInstancedBuffersStorage.strides[TT] = kT;
        const cT = this._userInstancedBuffersStorage;
        cT.interleavedKinds = [], cT.interleavedOffsets = [], cT.interleavedRowStride = 0;
        for (const lT in cT.strides) cT.interleavedKinds.push(lT), cT.interleavedOffsets.push(cT.interleavedRowStride), cT.interleavedRowStride += cT.strides[lT];
        cT.interleavedData = new Float32Array(32 * cT.interleavedRowStride);
        for (const lT in cT.interleavedBuffers) cT.interleavedBuffers[lT].buffer.dispose();
        cT.interleavedBuffers = {}, cT.vertexBuffers[TT] = null;
        for (const lT of this.instances) lT.xH[TT] = null;
        this._invalidateInstanceVertexArrayObject(), this._markSubMeshesAsAttributesDirty()
      }, OT.e.prototype._processInstancedBuffers = function(TT, kT) {
        const cT = this._userInstancedBuffersStorage,
          lT = cT.interleavedRowStride;
        if (!lT) return;
        const MT = TT ? TT.length : 0,
          KT = (MT + 1) * lT;
        let OT = cT.interleavedData;
        if (OT.length < KT) {
          let TT = OT.length;
          for (; TT < KT;) TT *= 2;
          OT = cT.interleavedData = new Float32Array(TT)
        }
        const yT = cT.interleavedKinds,
          fT = cT.interleavedOffsets;
        let IT = 0;
        kT && (jT(this.xH, yT, fT, OT, IT), IT += lT);
        for (let xT = 0; xT < MT; xT++) jT(TT[xT].xH, yT, fT, OT, IT), IT += lT;
        let AT = "shared",
          CT = cT.vertexBuffers;
        this._instanceDataStorage.useMonoDataStorageRenderPass || (AT = this._instanceDataStorage.engine.currentRenderPassId, cT.renderPasses || (cT.renderPasses = {}), cT.renderPasses[AT] || (cT.renderPasses[AT] = {}), CT = cT.renderPasses[AT]);
        const vT = cT.interleavedBuffers[AT];
        let tT = !vT || vT.data !== OT;
        for (let xT = 0; !tT && xT < yT.length; xT++) tT = !CT[yT[xT]];
        if (!tT) return void vT.buffer.updateDirectly(OT, 0);
        vT?.buffer.dispose();
        const hT = new xT.d(this.Dv(), OT, !0, lT, !1, !0);
        for (let xT = 0; xT < yT.length; xT++) {
          const TT = yT[xT],
            kT = hT.createVertexBuffer(TT, fT[xT], cT.strides[TT]);
          kT.hashCode += kT.byteOffset * 2 ** 24, CT[TT] = kT
        }
        cT.interleavedBuffers[AT] = {
          buffer: hT,
          data: OT
        }, this._invalidateInstanceVertexArrayObject()
      }, OT.e.prototype._invalidateInstanceVertexArrayObject = function() {
        if (this._userInstancedBuffersStorage && void 0 !== this._userInstancedBuffersStorage.vertexArrayObjects) {
          for (const TT in this._userInstancedBuffersStorage.vertexArrayObjects) this.Dv().releaseVertexArrayObject(this._userInstancedBuffersStorage.vertexArrayObjects[TT]);
          this._userInstancedBuffersStorage.vertexArrayObjects = {}
        }
      }, OT.e.prototype._disposeInstanceSpecificData = function() {
        for (const kT in this._instanceDataStorage.renderPasses) this._instanceDataStorage.renderPasses[kT].instancesBuffer?.dispose();
        for (this._instanceDataStorage.renderPasses = {}, this._instanceDataStorage.dataStorageRenderPass?.instancesBuffer?.dispose(); this.instances.length;) this.instances[0].dispose();
        for (const kT in this.xH) this._userInstancedBuffersStorage.vertexBuffers[kT] && this._userInstancedBuffersStorage.vertexBuffers[kT].dispose();
        const TT = this._userInstancedBuffersStorage?.interleavedBuffers;
        if (TT) {
          for (const kT in TT) TT[kT].buffer.dispose();
          this._userInstancedBuffersStorage.interleavedBuffers = {}
        }
        this._invalidateInstanceVertexArrayObject(), this.xH = {}
      }, (0, IT.g)("BABYLON.InstancedMesh", AT))
    }
  },
  40025: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => iT,
      i: () => sT,
      j: () => gT
    });
    var lT, MT, KT, OT, yT, fT, xT, IT, AT, CT, jT, vT, tT, hT, NT = cT(36932),
      QT = cT(39727),
      ST = cT(39666),
      DT = cT(38507),
      aT = cT(39649),
      FT = cT(40030),
      rT = cT(39841),
      PT = cT(36892),
      wT = cT(37093),
      mT = cT(39846),
      bT = cT(39782),
      zT = cT(40038),
      JT = cT(40042),
      oT = cT(40066),
      HT = cT(39917),
      eT = cT(39908),
      GT = cT(39997),
      VT = cT(40077),
      ET = cT(40051),
      ZT = cT(39645),
      uT = cT(38512),
      XT = cT(36949),
      dT = cT(39500),
      LT = cT(39809);
    class RT {
      constructor(TT, kT) {
        this.distanceOrScreenCoverage = TT, this.mesh = kT
      }
    }
    class gT {}
    class UT {
      constructor() {
        this.batchCache = new BT(this), this.batchCacheReplacementModeInFrozenMode = new BT(this), this.instancesBufferSize = 2048
      }
    }
    class YT {
      constructor() {
        this.renderPasses = {}
      }
    }
    class BT {
      constructor(TT) {
        this.parent = TT, this.mustReturn = !1, this.visibleInstances = new Array, this.renderSelf = [], this.hardwareInstancedRendering = []
      }
    }
    class WT {
      constructor() {
        this.instancesCount = 0, this.matrixBuffer = null, this.previousMatrixBuffer = null, this.matrixBufferSize = 512, this.matrixData = null, this.boundingVectors = [], this.worldMatrices = null
      }
    }
    class nT {
      constructor() {
        this._areNormalsFrozen = !1, this._source = null, this.meshMap = null, this._preActivateId = -1, this._LODLevels = new Array, this._useLODScreenCoverage = !1, this._effectiveMaterial = null, this._forcedInstanceCount = 0, this._overrideRenderingFillMode = null
      }
    }
    const pT = {
      source: null,
      parent: null,
      doNotCloneChildren: !1,
      clonePhysicsImpostor: !0,
      cloneThinInstances: !1
    };
    class iT extends oT.c {
      static _GetDefaultSideOrientation(TT) {
        return TT || iT.FRONTSIDE
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
        this._internalAbstractMeshDataInfo._computeBonesUsingShaders !== TT && (TT && this._internalMeshDataInfo._sourcePositions && (this.setVerticesData(bT.l.PositionKind, this._internalMeshDataInfo._sourcePositions, !0), this._internalMeshDataInfo._sourceNormals && this.setVerticesData(bT.l.NormalKind, this._internalMeshDataInfo._sourceNormals, !0), this._internalMeshDataInfo._sourcePositions = null, this._internalMeshDataInfo._sourceNormals = null), this._internalAbstractMeshDataInfo._computeBonesUsingShaders = TT, this._markSubMeshesAsAttributesDirty())
      }
      get onBeforeRenderObservable() {
        return this._internalMeshDataInfo._onBeforeRenderObservable || (this._internalMeshDataInfo._onBeforeRenderObservable = new NT.b), this._internalMeshDataInfo._onBeforeRenderObservable
      }
      get onBeforeBindObservable() {
        return this._internalMeshDataInfo._onBeforeBindObservable || (this._internalMeshDataInfo._onBeforeBindObservable = new NT.b), this._internalMeshDataInfo._onBeforeBindObservable
      }
      get onAfterRenderObservable() {
        return this._internalMeshDataInfo._onAfterRenderObservable || (this._internalMeshDataInfo._onAfterRenderObservable = new NT.b), this._internalMeshDataInfo._onAfterRenderObservable
      }
      get onBetweenPassObservable() {
        return this._internalMeshDataInfo._onBetweenPassObservable || (this._internalMeshDataInfo._onBetweenPassObservable = new NT.b), this._internalMeshDataInfo._onBetweenPassObservable
      }
      get onBeforeDrawObservable() {
        return this._internalMeshDataInfo._onBeforeDrawObservable || (this._internalMeshDataInfo._onBeforeDrawObservable = new NT.b), this._internalMeshDataInfo._onBeforeDrawObservable
      }
      set onBeforeDraw(TT) {
        this._onBeforeDrawObserver && this.onBeforeDrawObservable.remove(this._onBeforeDrawObserver), this._onBeforeDrawObserver = this.onBeforeDrawObservable.add(TT)
      }
      get tlT() {
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
      _copySource(TT, kT) {
        let cT = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          lT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const MT = this.NJ();
        if (TT._geometry && TT._geometry.applyToMesh(this), DT.d.DeepCopy(TT, this, ["name", "material", "skeleton", "instances", "parent", "uniqueId", "source", "metadata", "morphTargetManager", "tlT", "worldMatrixInstancedBuffer", "previousWorldMatrixInstancedBuffer", "hasLODLevels", "geometry", "isBlocked", "areNormalsFrozen", "facetNb", "isFacetDataEnabled", "lightSources", "useBones", "aJ", "collider", "edgesRenderer", "forward", "up", "right", "absolutePosition", "absoluteScaling", "absoluteRotationQuaternion", "kOT", "nonUniformScaling", "behaviors", "worldMatrixFromCache", "hasThinInstances", "cloneMeshMap", "hasBoundingInfo", "physicsBody", "physicsImpostor"], ["_poseMatrix"]), this._internalMeshDataInfo._source = TT, MT.useClonedMeshMap && (TT._internalMeshDataInfo.meshMap || (TT._internalMeshDataInfo.meshMap = {}), TT._internalMeshDataInfo.meshMap[this.uniqueId] = this), this._originalBuilderSideOrientation = TT._originalBuilderSideOrientation, this._creationDataStorage = TT._creationDataStorage, TT._ranges) {
          const kT = TT._ranges;
          for (const TT in kT) Object.prototype.hasOwnProperty.call(kT, TT) && kT[TT] && this.createAnimationRange(TT, kT[TT].from, kT[TT].to)
        }
        if (TT.metadata && TT.metadata.clone ? this.metadata = TT.metadata.clone() : this.metadata = TT.metadata, this._internalMetadata = TT._internalMetadata, this.meshBlendingTag = TT.meshBlendingTag, aT.b && aT.b.HasTags(TT) && aT.b.AddTagsTo(this, aT.b.GetTags(TT, !0)), this.PD(TT.isEnabled(!1)), this.parent = TT.parent, this.setPivotMatrix(TT.getPivotMatrix(), this._postMultiplyPivotMatrix), this.id = this.name + "." + TT.id, this.material = TT.material, !kT) {
          const MT = TT.getDescendants(!0);
          for (let TT = 0; TT < MT.length; TT++) {
            const KT = MT[TT];
            KT._isMesh ? (pT.parent = this, pT.doNotCloneChildren = kT, pT.clonePhysicsImpostor = cT, pT.cloneThinInstances = lT, KT.clone(this.name + "." + KT.name, pT)) : KT.clone && KT.clone(this.name + "." + KT.name, this)
          }
        }
        if (TT.morphTargetManager && (this.morphTargetManager = TT.morphTargetManager), (0, dT.c)(MT.getPhysicsEngine)) {
          const kT = MT.getPhysicsEngine();
          if (cT && kT)
            if (1 === kT.getPluginVersion()) {
              const cT = kT.getImpostorForPhysicsObject(TT);
              cT && (this.physicsImpostor = cT.clone(this))
            } else 2 === kT.getPluginVersion() && TT.physicsBody && TT.physicsBody.clone(this)
        }
        for (let KT = 0; KT < MT.lF.length; KT++) {
          const kT = MT.lF[KT];
          kT.emitter === TT && kT.clone(kT.name, this)
        }
        if (this.skeleton = TT.skeleton, lT && (TT._thinInstanceDataStorage.matrixData ? (this.O4("matrix", new Float32Array(TT._thinInstanceDataStorage.matrixData), 16, !TT._thinInstanceDataStorage.matrixBuffer.isUpdatable()), this._thinInstanceDataStorage.matrixBufferSize = TT._thinInstanceDataStorage.matrixBufferSize, this._thinInstanceDataStorage.instancesCount = TT._thinInstanceDataStorage.instancesCount) : this._thinInstanceDataStorage.matrixBufferSize = TT._thinInstanceDataStorage.matrixBufferSize, TT._userThinInstanceBuffersStorage)) {
          const kT = TT._userThinInstanceBuffersStorage;
          for (const TT in kT.data) this.O4(TT, new Float32Array(kT.data[TT]), kT.strides[TT], !kT.vertexBuffers?.[TT]?.isUpdatable()), this._userThinInstanceBuffersStorage.sizes[TT] = kT.sizes[TT]
        }
        this.refreshBoundingInfo(!0, !0), this.computeWorldMatrix(!0)
      }
      constructor(TT) {
        let kT, cT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          lT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          MT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          KT = arguments.length > 4 ? arguments[4] : void 0,
          OT = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        super(TT, cT), this._internalMeshDataInfo = new nT, this.delayLoadState = 0, this.instances = [], this._creationDataStorage = null, this._geometry = null, this._thinInstanceDataStorage = new WT, this._shouldGenerateFlatShading = !1, this._originalBuilderSideOrientation = iT.DEFAULTSIDE, this.ignoreCameraMaxZ = !1, cT = this.NJ(), this._instanceDataStorage = new YT, this._instanceDataStorage.engine = cT.Dv(), this._instanceDataStorage.useMonoDataStorageRenderPass = !this._instanceDataStorage.engine.isWebGPU, this._instanceDataStorage.useMonoDataStorageRenderPass && (this._instanceDataStorage.dataStorageRenderPass = new UT), this._scene.useRightHandedSystem ? this.sideOrientation = 0 : this.sideOrientation = 1, this._onBeforeDraw = (TT, kT, cT) => {
          TT && cT && (this._uniformBuffer ? this.transferToEffect(kT) : cT.bindOnlyWorldMatrix(kT))
        };
        let yT = !1;
        if (lT && void 0 === lT._addToSceneRootNodes) {
          const TT = lT;
          kT = TT.parent ?? null, MT = TT.source ?? null, KT = TT.doNotCloneChildren ?? !1, OT = TT.clonePhysicsImpostor ?? !0, yT = TT.cloneThinInstances ?? !1
        } else kT = lT;
        MT && this._copySource(MT, KT, OT, yT), null !== kT && (this.parent = kT), this._instanceDataStorage.hardwareInstancedRendering = this.Dv().getCaps().instancedArrays, this._internalMeshDataInfo._onMeshReadyObserverAdded = TT => {
          TT.unregisterOnNextCall = !0, this.isReady(!0) ? this.onMeshReadyObservable.notifyObservers(this) : this._internalMeshDataInfo._checkReadinessObserver || (this._internalMeshDataInfo._checkReadinessObserver = this._scene.onBeforeRenderObservable.add((() => {
            this.isReady(!0) && (this._scene.onBeforeRenderObservable.remove(this._internalMeshDataInfo._checkReadinessObserver), this._internalMeshDataInfo._checkReadinessObserver = null, this.onMeshReadyObservable.notifyObservers(this))
          })))
        }, this.onMeshReadyObservable = new NT.b(this._internalMeshDataInfo._onMeshReadyObserverAdded), MT && MT.onClonedObservable.notifyObservers(this)
      }
      instantiateHierarchy() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          kT = arguments.length > 1 ? arguments[1] : void 0,
          cT = arguments.length > 2 ? arguments[2] : void 0;
        const lT = 0 === this.getTotalVertices() || kT && kT.doNotInstantiate && (!0 === kT.doNotInstantiate || kT.doNotInstantiate(this)) ? this.clone("Clone of " + (this.name || this.id), TT || this.parent, !0) : this.createInstance("instance of " + (this.name || this.id));
        lT.parent = TT || this.parent, lT.position = this.position.clone(), lT.GA = this.GA.clone(), this.rotationQuaternion ? lT.rotationQuaternion = this.rotationQuaternion.clone() : lT.rotation = this.rotation.clone(), cT && cT(this, lT);
        for (const MT of this.getChildTransformNodes(!0)) "InstancedMesh" === MT.getClassName() && "Mesh" === lT.getClassName() && MT.hlT === this ? MT.instantiateHierarchy(lT, {
          doNotInstantiate: kT && kT.doNotInstantiate || !1,
          newSourcedMesh: lT
        }, cT) : MT.instantiateHierarchy(lT, kT, cT);
        return lT
      }
      getClassName() {
        return "Mesh"
      }
      get _isMesh() {
        return !0
      }
      toString(TT) {
        let kT = super.toString(TT);
        if (kT += ", n vertices: " + this.getTotalVertices(), kT += ", parent: " + (this._waitingParentId ? this._waitingParentId : this.parent ? this.parent.name : "NONE"), this.animations)
          for (let cT = 0; cT < this.animations.length; cT++) kT += ", animation[0]: " + this.animations[cT].toString(TT);
        if (TT)
          if (this._geometry) {
            const TT = this.FcT(),
              cT = this.getVerticesData(bT.l.PositionKind);
            cT && TT && (kT += ", flat shading: " + (cT.length / 3 === TT.length ? "YES" : "NO"))
          } else kT += ", flat shading: UNKNOWN";
        return kT
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
        this._internalMeshDataInfo._LODLevels.sort(((kT, cT) => kT.distanceOrScreenCoverage < cT.distanceOrScreenCoverage ? TT : kT.distanceOrScreenCoverage > cT.distanceOrScreenCoverage ? -TT : 0))
      }
      addLODLevel(TT, kT) {
        if (kT && kT._masterMesh) return uT.e.Warn("You cannot use a mesh as LOD level twice"), this;
        const cT = new RT(TT, kT);
        return this._internalMeshDataInfo._LODLevels.push(cT), kT && (kT._masterMesh = this), this._sortLODLevels(), this
      }
      getLODLevelAtDistance(TT) {
        const kT = this._internalMeshDataInfo;
        for (let cT = 0; cT < kT._LODLevels.length; cT++) {
          const lT = kT._LODLevels[cT];
          if (lT.distanceOrScreenCoverage === TT) return lT.mesh
        }
        return null
      }
      removeLODLevel(TT) {
        const kT = this._internalMeshDataInfo;
        for (let cT = 0; cT < kT._LODLevels.length; cT++) kT._LODLevels[cT].mesh === TT && (kT._LODLevels.splice(cT, 1), TT && (TT._masterMesh = null));
        return this._sortLODLevels(), this
      }
      getLOD(TT, kT) {
        const cT = this._internalMeshDataInfo;
        if (!cT._LODLevels || 0 === cT._LODLevels.length) return this;
        const lT = kT || this.DH().WcT,
          MT = TT.mode === rT.c.ORTHOGRAPHIC_CAMERA ? TT.minZ : lT.centerWorld.subtract(TT.globalPosition).length();
        let KT = MT,
          OT = 1;
        if (cT._useLODScreenCoverage) {
          const kT = TT.screenArea;
          let cT = lT.radiusWorld * TT.minZ / MT;
          cT = cT * cT * Math.PI, KT = cT / kT, OT = -1
        }
        if (OT * cT._LODLevels[cT._LODLevels.length - 1].distanceOrScreenCoverage > OT * KT) return this.onLODLevelSelection && this.onLODLevelSelection(KT, this, this), this;
        for (let yT = 0; yT < cT._LODLevels.length; yT++) {
          const TT = cT._LODLevels[yT];
          if (OT * TT.distanceOrScreenCoverage < OT * KT) {
            if (TT.mesh) {
              if (4 === TT.mesh.delayLoadState) return TT.mesh._checkDelayState(), this;
              if (2 === TT.mesh.delayLoadState) return this;
              TT.mesh._preActivate(), TT.mesh._updateSubMeshesBoundingInfo(this.worldMatrixFromCache)
            }
            return this.onLODLevelSelection && this.onLODLevelSelection(KT, this, TT.mesh), TT.mesh
          }
        }
        return this.onLODLevelSelection && this.onLODLevelSelection(KT, this, this), this
      }
      get geometry() {
        return this._geometry
      }
      getTotalVertices() {
        return null === this._geometry || void 0 === this._geometry ? 0 : this._geometry.getTotalVertices()
      }
      getVerticesData(TT, kT, cT, lT) {
        if (!this._geometry) return null;
        let MT = lT ? void 0 : this._userInstancedBuffersStorage?.vertexBuffers[TT]?.getFloatData(this.instances.length + 1, cT || kT && 1 !== this._geometry.meshes.length);
        return MT || (MT = this._geometry.getVerticesData(TT, kT, cT)), MT
      }
      copyVerticesData(TT, kT) {
        this._geometry && this._geometry.copyVerticesData(TT, kT)
      }
      getVertexBuffer(TT, kT) {
        return this._geometry ? (kT ? void 0 : this._userInstancedBuffersStorage?.vertexBuffers[TT]) ?? this._geometry.getVertexBuffer(TT) : null
      }
      isVerticesDataPresent(TT, kT) {
        return this._geometry ? !kT && void 0 !== this._userInstancedBuffersStorage?.vertexBuffers[TT] || this._geometry.isVerticesDataPresent(TT) : !!this._delayInfo && -1 !== this._delayInfo.indexOf(TT)
      }
      isVertexBufferUpdatable(TT, kT) {
        if (!this._geometry) return !!this._delayInfo && -1 !== this._delayInfo.indexOf(TT);
        if (!kT) {
          const kT = this._userInstancedBuffersStorage?.vertexBuffers[TT];
          if (kT) return kT.isUpdatable()
        }
        return this._geometry.isVertexBufferUpdatable(TT)
      }
      getVerticesDataKinds(TT) {
        if (!this._geometry) {
          const TT = [];
          if (this._delayInfo)
            for (const kT of this._delayInfo) TT.push(kT);
          return TT
        }
        const kT = this._geometry.getVerticesDataKinds();
        if (!TT && this._userInstancedBuffersStorage)
          for (const cT in this._userInstancedBuffersStorage.vertexBuffers) - 1 === kT.indexOf(cT) && kT.push(cT);
        return kT
      }
      getTotalIndices() {
        return this._geometry ? this._geometry.getTotalIndices() : 0
      }
      FcT(TT, kT) {
        return this._geometry ? this._geometry.FcT(TT, kT) : []
      }
      get isBlocked() {
        return null !== this._masterMesh && void 0 !== this._masterMesh
      }
      isReady() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          kT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (2 === this.delayLoadState) return !1;
        if (!super.isReady(TT)) return !1;
        if (!this.kF || 0 === this.kF.length) return !0;
        if (!TT) return !0;
        const cT = this.Dv(),
          lT = this.NJ(),
          MT = kT || cT.getCaps().instancedArrays && (this.instances.length > 0 || this.hasThinInstances);
        this.computeWorldMatrix();
        const KT = this.material || lT.defaultMaterial;
        if (KT)
          if (KT._storeEffectOnSubMeshes)
            for (const yT of this.kF) {
              const TT = yT.wv();
              if (TT)
                if (TT._storeEffectOnSubMeshes) {
                  if (!TT.isReadyForSubMesh(this, yT, MT)) return !1
                } else if (!TT.isReady(this, MT)) return !1
            } else if (!KT.isReady(this, MT)) return !1;
        const OT = cT.currentRenderPassId;
        for (const yT of this.lightSources) {
          const TT = yT.getShadowGenerators();
          if (!TT) continue;
          const kT = TT.values();
          for (let lT = kT.next(); !0 !== lT.done; lT = kT.next()) {
            const TT = lT.value;
            if (TT && (!TT.getShadowMap()?.renderList || TT.getShadowMap()?.renderList && -1 !== TT.getShadowMap()?.renderList?.indexOf(this))) {
              const kT = TT.getShadowMap().renderPassIds ?? [cT.currentRenderPassId];
              for (let lT = 0; lT < kT.length; ++lT) {
                cT.currentRenderPassId = kT[lT];
                for (const kT of this.kF)
                  if (!TT.isReady(kT, MT, kT.wv()?.needAlphaBlendingForMesh(this) ?? !1)) return cT.currentRenderPassId = OT, !1
              }
              cT.currentRenderPassId = OT
            }
          }
        }
        for (const yT of this._internalMeshDataInfo._LODLevels)
          if (yT.mesh && !yT.mesh.isReady(MT)) return !1;
        return !0
      }
      get areNormalsFrozen() {
        return this._internalMeshDataInfo._areNormalsFrozen
      }
      mv() {
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
        let kT = this._instanceDataStorage.renderPasses[TT];
        return kT || (kT = new UT, this._instanceDataStorage.renderPasses[TT] = kT), kT
      }
      _preActivate() {
        const TT = this._internalMeshDataInfo,
          kT = this.NJ().getRenderId();
        return TT._preActivateId === kT || (TT._preActivateId = kT, this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass.visibleInstances = null : this._getInstanceDataStorage().visibleInstances = null), this
      }
      _preActivateForIntermediateRendering(TT) {
        const kT = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        return kT.visibleInstances && (kT.visibleInstances.intermediateDefaultRenderId = TT), this
      }
      _registerInstanceForRenderId(TT, kT) {
        const cT = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        return cT.visibleInstances || (cT.visibleInstances = {
          defaultRenderId: kT,
          selfDefaultRenderId: this._renderId,
          intermediateDefaultRenderId: -1
        }), cT.visibleInstances[kT] || (void 0 === cT.previousRenderId || this._instanceDataStorage.useMonoDataStorageRenderPass && !this._instanceDataStorage.isFrozen || delete cT.visibleInstances[cT.previousRenderId], cT.previousRenderId = kT, cT.visibleInstances[kT] = new Array), cT.visibleInstances[kT].push(TT), this
      }
      _afterComputeWorldMatrix() {
        super._afterComputeWorldMatrix(), this.hasThinInstances && (this.Pv || this.thinInstanceRefreshBoundingInfo(!1))
      }
      _postActivate() {
        this.edgesShareWithInstances && this.edgesRenderer && this.edgesRenderer.isEnabled && this._renderingGroup && (this._renderingGroup._edgesRenderers.pushNoDuplicate(this.edgesRenderer), this.edgesRenderer.customInstances.push(this.getWorldMatrix()))
      }
      refreshBoundingInfo() {
        let TT, kT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          cT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.hasBoundingInfo && this.DH().isLocked) return this;
        TT = "object" === typeof kT ? kT : {
          applySkeleton: kT,
          applyMorph: cT
        };
        const lT = this.geometry ? this.geometry.boundingBias : null;
        return this._refreshBoundingInfo(this._getData(TT, null, bT.l.PositionKind), lT), this
      }
      _createGlobalSubMesh(TT) {
        const kT = this.getTotalVertices();
        if (!kT || !this.FcT()) return null;
        if (this.kF && this.kF.length > 0) {
          const cT = this.FcT();
          if (!cT) return null;
          const lT = cT.length;
          let MT = !1;
          if (TT) MT = !0;
          else
            for (const TT of this.kF) {
              if (TT.indexStart + TT.indexCount > lT) {
                MT = !0;
                break
              }
              if (TT.verticesStart + TT.verticesCount > kT) {
                MT = !0;
                break
              }
            }
          if (!MT) return this.kF[0]
        }
        return this.releaseSubMeshes(), new HT.c(0, 0, kT, 0, this.getTotalIndices() || (this.isUnIndexed ? kT : 0), this)
      }
      subdivide(TT) {
        if (TT < 1) return;
        const kT = this.getTotalIndices();
        let cT = kT / TT | 0,
          lT = 0;
        for (; cT % 3 !== 0;) cT++;
        this.releaseSubMeshes();
        for (let MT = 0; MT < TT && !(lT >= kT); MT++) HT.c.CreateFromIndices(0, lT, lT + cT >= kT ? kT - lT : cT, this, void 0, !1), lT += cT;
        this.refreshBoundingInfo(), this.synchronizeInstances()
      }
      setVerticesData(TT, kT) {
        let cT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          lT = arguments.length > 3 ? arguments[3] : void 0;
        if (this._geometry) this._geometry.setVerticesData(TT, kT, cT, lT);
        else {
          const lT = new zT.d;
          lT.set(kT, TT);
          const MT = this.NJ();
          new JT.d(JT.d.RandomId(), MT, lT, cT, this)
        }
        return this
      }
      removeVerticesData(TT) {
        this._geometry && this._geometry.removeVerticesData(TT)
      }
      markVerticesDataAsUpdatable(TT) {
        let kT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const cT = this.getVertexBuffer(TT);
        cT && cT.isUpdatable() !== kT && this.setVerticesData(TT, this.getVerticesData(TT), kT)
      }
      setVerticesBuffer(TT) {
        let kT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        return this._geometry || (this._geometry = JT.d.CreateGeometryForMesh(this)), this._geometry.setVerticesBuffer(TT, cT, kT), this
      }
      updateVerticesData(TT, kT, cT, lT) {
        return this._geometry ? (lT ? (this.makeGeometryUnique(), this.updateVerticesData(TT, kT, cT, !1)) : this._geometry.updateVerticesData(TT, kT, cT), this) : this
      }
      updateMeshPositions(TT) {
        let kT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const cT = this.getVerticesData(bT.l.PositionKind);
        if (!cT) return this;
        if (TT(cT), this.updateVerticesData(bT.l.PositionKind, cT, !1, !1), kT) {
          const TT = this.FcT(),
            kT = this.getVerticesData(bT.l.NormalKind);
          if (!kT) return this;
          zT.d.ComputeNormals(cT, TT, kT), this.updateVerticesData(bT.l.NormalKind, kT, !1, !1)
        }
        return this
      }
      makeGeometryUnique() {
        if (!this._geometry) return this;
        if (1 === this._geometry.meshes.length) return this;
        const TT = this._geometry,
          kT = this._geometry.copy(JT.d.RandomId());
        return TT.releaseForMesh(this, !0), kT.applyToMesh(this), this
      }
      setIndexBuffer(TT, kT, cT) {
        let lT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          MT = this._geometry;
        MT || (MT = new JT.d(JT.d.RandomId(), this.NJ(), void 0, void 0, this)), MT.setIndexBuffer(TT, kT, cT, lT)
      }
      setIndices(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          cT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          lT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this._geometry) this._geometry.setIndices(TT, kT, cT, lT);
        else {
          const lT = new zT.d;
          lT.indices = TT;
          const MT = this.NJ();
          new JT.d(JT.d.RandomId(), MT, lT, cT, this, kT)
        }
        return this
      }
      updateIndices(TT, kT) {
        let cT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return this._geometry ? (this._geometry.updateIndices(TT, kT, cT), this) : this
      }
      toLeftHanded() {
        return this._geometry ? (this._geometry.toLeftHanded(), this) : this
      }
      _bind(TT, kT, cT) {
        let lT = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        if (!this._geometry) return this;
        const MT = this.NJ().Dv();
        let KT;
        if (this._unIndexed)
          if (this._getRenderingFillMode(cT) === eT.e.WireFrameFillMode) KT = TT._getLinesIndexBuffer(this.FcT(), MT);
          else KT = null;
        else switch (this._getRenderingFillMode(cT)) {
          case eT.e.PointFillMode:
            KT = null;
            break;
          case eT.e.WireFrameFillMode:
            KT = TT._getLinesIndexBuffer(this.FcT(), MT);
            break;
          default:
          case eT.e.TriangleFillMode:
            KT = this._geometry.getIndexBuffer()
        }
        return this._bindDirect(kT, KT, lT)
      }
      _bindDirect(TT, kT) {
        let cT = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (!this._geometry) return this;
        if (this.morphTargetManager && this.morphTargetManager.isUsingTextureForTargets && this.morphTargetManager._bind(TT), cT && this._userInstancedBuffersStorage && !this.hasThinInstances) {
          if (!this._instanceDataStorage.useMonoDataStorageRenderPass && this._userInstancedBuffersStorage.renderPasses && this._userInstancedBuffersStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId]) {
            const TT = this._userInstancedBuffersStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId];
            for (const kT in TT) this._userInstancedBuffersStorage.vertexBuffers[kT] = TT[kT]
          }
          this._geometry._bind(TT, kT, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects)
        } else this._geometry._bind(TT, kT);
        return this
      }
      _draw(TT, kT, cT) {
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        this._internalMeshDataInfo._onBeforeDrawObservable && this._internalMeshDataInfo._onBeforeDrawObservable.notifyObservers(this);
        const lT = this.NJ().Dv(),
          MT = lT._currentMaterialContext,
          KT = MT && MT.useVertexPulling;
        return this._unIndexed && kT !== eT.e.WireFrameFillMode || kT == eT.e.PointFillMode ? lT.drawArraysType(kT, TT.verticesStart, TT.verticesCount, this.forcedInstanceCount || cT) : kT == eT.e.WireFrameFillMode ? lT.drawElementsType(kT, 0, TT._linesIndexCount, this.forcedInstanceCount || cT) : KT ? lT.drawArraysType(kT, TT.indexStart, TT.indexCount, this.forcedInstanceCount || cT) : lT.drawElementsType(kT, TT.indexStart, TT.indexCount, this.forcedInstanceCount || cT), this
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
        let kT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const cT = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        if (this._instanceDataStorage.isFrozen) {
          if (kT) return cT.batchCacheReplacementModeInFrozenMode.hardwareInstancedRendering[TT] = !1, cT.batchCacheReplacementModeInFrozenMode.renderSelf[TT] = !0, cT.batchCacheReplacementModeInFrozenMode;
          if (cT.previousBatch) return cT.previousBatch
        }
        const lT = this.NJ(),
          MT = lT._isInIntermediateRendering(),
          KT = MT ? this._internalAbstractMeshDataInfo._onlyForInstancesIntermediate : this._internalAbstractMeshDataInfo._onlyForInstances,
          OT = cT.batchCache;
        if (OT.mustReturn = !1, OT.renderSelf[TT] = kT || !KT && this.isEnabled() && this.isVisible, OT.visibleInstances[TT] = null, cT.visibleInstances && !kT) {
          const kT = cT.visibleInstances,
            KT = lT.getRenderId(),
            yT = MT ? kT.intermediateDefaultRenderId : kT.defaultRenderId;
          OT.visibleInstances[TT] = kT[KT], !OT.visibleInstances[TT] && yT && (OT.visibleInstances[TT] = kT[yT])
        }
        return OT.hardwareInstancedRendering[TT] = !kT && this._instanceDataStorage.hardwareInstancedRendering && null !== OT.visibleInstances[TT] && void 0 !== OT.visibleInstances[TT], cT.previousBatch = OT, OT
      }
      _updateInstancedBuffers(TT, kT, cT, lT, MT, KT) {
        const OT = kT.visibleInstances[TT._id],
          yT = OT ? OT.length : 0,
          fT = kT.parent,
          xT = this._instanceDataStorage;
        let IT = fT.instancesBuffer,
          AT = fT.instancesPreviousBuffer,
          CT = 0,
          jT = 0;
        const vT = kT.renderSelf[TT._id],
          tT = this._scene.floatingOriginOffset,
          hT = !IT || cT !== fT.instancesBufferSize || this._scene.needsPreviousWorldMatrices && !fT.instancesPreviousBuffer;
        if (this._instanceDataStorage.manualUpdate || xT.isFrozen && !hT) jT = (vT ? 1 : 0) + yT;
        else {
          const kT = this.getWorldMatrix();
          if (vT) {
            this._scene.needsPreviousWorldMatrices && (xT.masterMeshPreviousWorldMatrix ? (xT.masterMeshPreviousWorldMatrix.copyToArray(fT.instancesPreviousData, CT), xT.masterMeshPreviousWorldMatrix.UkT(kT)) : (xT.masterMeshPreviousWorldMatrix = kT.clone(), xT.masterMeshPreviousWorldMatrix.copyToArray(fT.instancesPreviousData, CT))), kT.copyToArray(fT.instancesData, CT);
            const TT = kT.acT();
            fT.instancesData[CT + 12] = TT[12] - tT.x, fT.instancesData[CT + 13] = TT[13] - tT.y, fT.instancesData[CT + 14] = TT[14] - tT.z, CT += 16, jT++
          }
          if (OT) {
            if (iT.INSTANCEDMESH_SORT_TRANSPARENT && this._scene.activeCamera && TT.wv()?.needAlphaBlendingForMesh(TT.getRenderingMesh())) {
              const TT = this._scene.activeCamera.globalPosition;
              for (let kT = 0; kT < OT.length; kT++) {
                const cT = OT[kT];
                cT._distanceToCamera = PT.m.Distance(cT.DH().WcT.centerWorld, TT)
              }
              OT.sort(((TT, kT) => TT._distanceToCamera > kT._distanceToCamera ? -1 : TT._distanceToCamera < kT._distanceToCamera ? 1 : 0))
            }
            for (let TT = 0; TT < OT.length; TT++) {
              const kT = OT[TT],
                cT = kT.getWorldMatrix();
              cT.copyToArray(fT.instancesData, CT), this._scene.needsPreviousWorldMatrices && (kT._previousWorldMatrix ? (kT._previousWorldMatrix.copyToArray(fT.instancesPreviousData, CT), kT._previousWorldMatrix.UkT(cT)) : (kT._previousWorldMatrix = cT.clone(), kT._previousWorldMatrix.copyToArray(fT.instancesPreviousData, CT)));
              const lT = cT.acT();
              fT.instancesData[CT + 12] = lT[12] - tT.x, fT.instancesData[CT + 13] = lT[13] - tT.y, fT.instancesData[CT + 14] = lT[14] - tT.z, CT += 16, jT++
            }
          }
        }
        if (hT) {
          let TT;
          if (IT && IT.dispose(), AT && AT.dispose(), IT = new bT.d(lT, fT.instancesData, !0, 16, !1, !0), fT.instancesBuffer = IT, this._userInstancedBuffersStorage || (this._userInstancedBuffersStorage = {
              data: {},
              vertexBuffers: {},
              strides: {},
              sizes: {},
              vertexArrayObjects: this.Dv().getCaps().vertexArrayObject ? {} : void 0
            }), this._instanceDataStorage.useMonoDataStorageRenderPass) TT = this._userInstancedBuffersStorage.vertexBuffers;
          else {
            this._userInstancedBuffersStorage.renderPasses || (this._userInstancedBuffersStorage.renderPasses = {});
            const kT = this._instanceDataStorage.engine.currentRenderPassId;
            TT = this._userInstancedBuffersStorage.renderPasses[kT], TT || (this._userInstancedBuffersStorage.renderPasses[kT] = TT = {})
          }
          TT.world0 = IT.createVertexBuffer("world0", 0, 4), TT.world1 = IT.createVertexBuffer("world1", 4, 4), TT.world2 = IT.createVertexBuffer("world2", 8, 4), TT.world3 = IT.createVertexBuffer("world3", 12, 4), this._scene.needsPreviousWorldMatrices && (AT = new bT.d(lT, fT.instancesPreviousData, !0, 16, !1, !0), fT.instancesPreviousBuffer = AT, TT.previousWorld0 = AT.createVertexBuffer("previousWorld0", 0, 4), TT.previousWorld1 = AT.createVertexBuffer("previousWorld1", 4, 4), TT.previousWorld2 = AT.createVertexBuffer("previousWorld2", 8, 4), TT.previousWorld3 = AT.createVertexBuffer("previousWorld3", 12, 4)), this._invalidateInstanceVertexArrayObject()
        } else this._instanceDataStorage.isFrozen && !this._instanceDataStorage.forceMatrixUpdates || (IT.updateDirectly(fT.instancesData, 0, jT), !this._scene.needsPreviousWorldMatrices || this._instanceDataStorage.manualUpdate && !this._instanceDataStorage.previousManualUpdate || AT.updateDirectly(fT.instancesPreviousData, 0, jT));
        this._processInstancedBuffers(OT, vT), KT && void 0 !== MT && (this.NJ()._activeIndices.addCount(TT.indexCount * jT, !1), lT._currentDrawContext && (lT._currentDrawContext.useInstancing = !0), this._bind(TT, KT, MT), this._draw(TT, MT, jT)), !this._scene.needsPreviousWorldMatrices || hT || !this._instanceDataStorage.manualUpdate || this._instanceDataStorage.isFrozen && !this._instanceDataStorage.forceMatrixUpdates || this._instanceDataStorage.previousManualUpdate || AT.updateDirectly(fT.instancesData, 0, jT)
      }
      _renderWithInstances(TT, kT, cT, lT, MT) {
        const KT = cT.visibleInstances[TT._id],
          OT = KT ? KT.length : 0,
          yT = cT.parent,
          fT = yT.instancesBufferSize,
          xT = 16 * (OT + 1) * 4;
        for (; yT.instancesBufferSize < xT;) yT.instancesBufferSize *= 2;
        return yT.instancesData && fT == yT.instancesBufferSize || (yT.instancesData = new Float32Array(yT.instancesBufferSize / 4)), (this._scene.needsPreviousWorldMatrices && !yT.instancesPreviousData || fT != yT.instancesBufferSize) && (yT.instancesPreviousData = new Float32Array(yT.instancesBufferSize / 4)), this._updateInstancedBuffers(TT, cT, fT, MT, kT, lT), MT.unbindInstanceAttributes(), this
      }
      _renderWithThinInstances(TT, kT, cT, lT) {
        const MT = this._thinInstanceDataStorage?.instancesCount ?? 0;
        this.NJ()._activeIndices.addCount(TT.indexCount * MT, !1), lT._currentDrawContext && (lT._currentDrawContext.useInstancing = !0), this._bind(TT, cT, kT), this._draw(TT, kT, MT), this._scene.needsPreviousWorldMatrices && !this._thinInstanceDataStorage.previousMatrixData && this._thinInstanceDataStorage.matrixData && (this._thinInstanceDataStorage.previousMatrixBuffer ? this._thinInstanceDataStorage.previousMatrixBuffer.updateDirectly(this._thinInstanceDataStorage.matrixData, 0, MT) : this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", this._thinInstanceDataStorage.matrixData, !1)), lT.unbindInstanceAttributes()
      }
      _processInstancedBuffers(TT, kT) {}
      _processRendering(TT, kT, cT, lT, MT, KT, OT, yT) {
        const fT = this.NJ(),
          xT = fT.Dv();
        if (lT = this._getRenderingFillMode(lT), KT && kT.getRenderingMesh().hasThinInstances) return this._renderWithThinInstances(kT, lT, cT, xT), this;
        if (KT) this._renderWithInstances(kT, lT, MT, cT, xT);
        else {
          xT._currentDrawContext && (xT._currentDrawContext.useInstancing = !1);
          let cT = 0;
          MT.renderSelf[kT._id] && (OT && OT(!1, TT.getWorldMatrix(), yT), cT++, this._draw(kT, lT, this._instanceDataStorage.overridenInstanceCount));
          const KT = MT.visibleInstances[kT._id];
          if (KT) {
            const TT = KT.length;
            cT += TT;
            for (let cT = 0; cT < TT; cT++) {
              const TT = KT[cT].getWorldMatrix();
              OT && OT(!0, TT, yT), this._draw(kT, lT)
            }
          }
          fT._activeIndices.addCount(kT.indexCount * cT, !1)
        }
        return this
      }
      _disposeInstanceDataStorageRenderPass(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        TT?.instancesBuffer && (kT && TT.instancesBuffer.dispose(), TT.instancesBuffer = null), TT?.instancesPreviousBuffer && (kT && TT.instancesPreviousBuffer.dispose(), TT.instancesPreviousBuffer = null)
      }
      _rebuild() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const kT in this._instanceDataStorage.renderPasses) {
          const cT = this._instanceDataStorage.renderPasses[kT];
          this._disposeInstanceDataStorageRenderPass(cT, TT)
        }
        if (this._disposeInstanceDataStorageRenderPass(this._instanceDataStorage.dataStorageRenderPass, TT), this._userInstancedBuffersStorage) {
          for (const kT in this._userInstancedBuffersStorage.vertexBuffers) {
            const cT = this._userInstancedBuffersStorage.vertexBuffers[kT];
            cT && (TT && cT.dispose(), this._userInstancedBuffersStorage.vertexBuffers[kT] = null)
          }
          this._userInstancedBuffersStorage.vertexArrayObjects && (this._userInstancedBuffersStorage.vertexArrayObjects = {})
        }
        this._internalMeshDataInfo._effectiveMaterial = null, super._rebuild(TT)
      }
      _releaseRenderPassId(TT) {
        const kT = this._instanceDataStorage.renderPasses[TT];
        if (kT && (this._disposeInstanceDataStorageRenderPass(kT, !0), delete this._instanceDataStorage.renderPasses[TT]), this._userInstancedBuffersStorage?.renderPasses) {
          const kT = this._userInstancedBuffersStorage.renderPasses[TT];
          if (kT)
            for (const TT in kT) kT[TT]?.dispose();
          delete this._userInstancedBuffersStorage.renderPasses[TT]
        }
        const cT = this._userInstancedBuffersStorage?.interleavedBuffers;
        cT?.[TT] && (cT[TT].buffer.dispose(), delete cT[TT])
      }
      _freeze() {
        if (this.kF) {
          for (let TT = 0; TT < this.kF.length; TT++) this._getInstancesRenderList(TT);
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
      renderWithRenderPassId(TT, kT, cT, lT) {
        let MT = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        const KT = this._scene.Dv(),
          OT = KT.currentRenderPassId;
        if (void 0 !== TT && (KT.currentRenderPassId = TT), lT)(!MT || MT && lT.isInFrustum(this._scene._frustumPlanes)) && this.render(lT, !!kT, cT);
        else
          for (let yT = 0; yT < this.kF.length; yT++) {
            const TT = this.kF[yT];
            (!MT || MT && TT.isInFrustum(this._scene._frustumPlanes)) && this.render(TT, !!kT, cT)
          }
        return void 0 !== TT && (KT.currentRenderPassId = OT), this
      }
      directRender() {
        if (!this.kF) return this;
        for (const TT of this.kF) this.render(TT, !1);
        return this
      }
      render(TT, kT, cT) {
        const lT = this.NJ(),
          MT = lT.Dv();
        this._internalAbstractMeshDataInfo._isActiveIntermediate ? this._internalAbstractMeshDataInfo._isActiveIntermediate = !1 : this._internalAbstractMeshDataInfo._isActive = !1;
        const KT = lT.activeCameras?.length ?? 0,
          OT = KT > 1 && lT.activeCamera === lT.activeCameras[0] || KT <= 1,
          yT = this._occlusionDataStorage && -1 !== this._occlusionDataStorage.occlusionForRenderPassId && this._occlusionDataStorage.occlusionForRenderPassId !== MT.currentRenderPassId;
        if (OT && this._checkOcclusionQuery(yT) && !this._occlusionDataStorage.forceRenderingWhenOccluded) return this;
        const fT = this._getInstancesRenderList(TT._id, !!cT);
        if (fT.mustReturn) return this;
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        let xT = 0,
          IT = null;
        this.ignoreCameraMaxZ && lT.activeCamera && !lT._isInIntermediateRendering() && (xT = lT.activeCamera.maxZ, IT = lT.activeCamera, lT.activeCamera.maxZ = 0, lT.updateTransformMatrix(!0)), this._internalMeshDataInfo._onBeforeRenderObservable && this._internalMeshDataInfo._onBeforeRenderObservable.notifyObservers(this);
        const AT = TT.getRenderingMesh(),
          CT = fT.hardwareInstancedRendering[TT._id] || AT.hasThinInstances || !!this._userInstancedBuffersStorage && !TT.getMesh()._internalAbstractMeshDataInfo._actAsRegularMesh,
          jT = this._instanceDataStorage,
          vT = TT.wv();
        if (!vT) return IT && (IT.maxZ = xT, lT.updateTransformMatrix(!0)), this;
        if (jT.isFrozen && this._internalMeshDataInfo._effectiveMaterial && this._internalMeshDataInfo._effectiveMaterial === vT) {
          if (vT._storeEffectOnSubMeshes && !TT._drawWrapper?._wasPreviouslyReady || !vT._storeEffectOnSubMeshes && !vT._getDrawWrapper()._wasPreviouslyReady) return IT && (IT.maxZ = xT, lT.updateTransformMatrix(!0)), this
        } else {
          if (vT._storeEffectOnSubMeshes) {
            if (!vT.isReadyForSubMesh(this, TT, CT)) return IT && (IT.maxZ = xT, lT.updateTransformMatrix(!0)), this
          } else if (!vT.isReady(this, CT)) return IT && (IT.maxZ = xT, lT.updateTransformMatrix(!0)), this;
          this._internalMeshDataInfo._effectiveMaterial = vT
        }
        if (kT) {
          const TT = this._internalMeshDataInfo._effectiveMaterial;
          if (1 === TT.alphaModes.length) MT.setAlphaMode(TT.alphaMode);
          else
            for (let kT = 0; kT < TT.alphaModes.length; kT++) {
              const cT = TT.alphaModes[kT];
              MT.setAlphaMode(void 0 !== cT ? cT : 2, !1, kT)
            }
        }
        let tT;
        tT = this._internalMeshDataInfo._effectiveMaterial._storeEffectOnSubMeshes ? TT._drawWrapper : this._internalMeshDataInfo._effectiveMaterial._getDrawWrapper();
        const hT = tT?.effect ?? null;
        for (let rT = 0, PT = lT._beforeRenderingMeshStage; rT < PT.length; rT++) {
          PT[rT].action(this, TT, fT, hT)
        }
        if (!tT || !hT) return IT && (IT.maxZ = xT, lT.updateTransformMatrix(!0)), this;
        const NT = cT || this;
        let QT;
        if (!jT.isFrozen && (this._internalMeshDataInfo._effectiveMaterial.backFaceCulling || null !== this._internalMeshDataInfo._effectiveMaterial.sideOrientation || this._internalMeshDataInfo._effectiveMaterial._twoSidedLighting)) {
          const TT = NT._getWorldMatrixDeterminant();
          QT = this._internalMeshDataInfo._effectiveMaterial._getEffectiveOrientation(this), TT < 0 && (QT = QT === eT.e.ClockWiseSideOrientation ? eT.e.CounterClockWiseSideOrientation : eT.e.ClockWiseSideOrientation), this._internalMeshDataInfo._effectiveSideOrientation = QT
        }
        const ST = this._internalMeshDataInfo._effectiveMaterial._preBind(tT, this._internalMeshDataInfo._effectiveSideOrientation);
        this._internalMeshDataInfo._effectiveMaterial.forceDepthWrite && MT.setDepthWrite(!0);
        const DT = this._internalMeshDataInfo._effectiveMaterial,
          aT = DT.fillMode;
        this._internalMeshDataInfo._onBeforeBindObservable && this._internalMeshDataInfo._onBeforeBindObservable.notifyObservers(this), CT || this._bind(TT, hT, aT, !1);
        const FT = NT.getWorldMatrix();
        DT._storeEffectOnSubMeshes ? DT.bindForSubMesh(FT, this, TT) : DT.bind(FT, this);
        try {
          GT.d._BindAttachmentsForEffect(MT, hT) && (!DT.backFaceCulling && DT.separateCullingPass && (MT.setState(!0, DT.zOffset, !1, !ST, DT.cullBackFaces, DT.stencil, DT.zOffsetUnits), this._processRendering(this, TT, hT, aT, fT, CT, this._onBeforeDraw, this._internalMeshDataInfo._effectiveMaterial), MT.setState(!0, DT.zOffset, !1, ST, DT.cullBackFaces, DT.stencil, DT.zOffsetUnits), this._internalMeshDataInfo._onBetweenPassObservable && this._internalMeshDataInfo._onBetweenPassObservable.notifyObservers(TT)), this._processRendering(this, TT, hT, aT, fT, CT, this._onBeforeDraw, this._internalMeshDataInfo._effectiveMaterial))
        } finally {
          GT.d._RestoreAttachments(MT)
        }
        this._internalMeshDataInfo._effectiveMaterial.unbind();
        for (let rT = 0, PT = lT._afterRenderingMeshStage; rT < PT.length; rT++) {
          PT[rT].action(this, TT, fT, hT)
        }
        return this._internalMeshDataInfo._onAfterRenderObservable && this._internalMeshDataInfo._onAfterRenderObservable.notifyObservers(this), IT && (IT.maxZ = xT, lT.updateTransformMatrix(!0)), 2 !== lT.performancePriority || jT.isFrozen || this._freeze(), this
      }
      _renderRunFollower(TT, kT) {
        const cT = this._scene,
          lT = cT._engine;
        if (lT.isWebGPU || TT._mesh !== this || 0 !== this.instances.length || this.render !== iT.prototype.render) return !1;
        const MT = TT.wv();
        if (!MT || MT !== cT._cachedMaterial || void 0 === MT._canBindRunFollower) return !1;
        const KT = TT._drawWrapper,
          OT = KT?.effect;
        if (!OT || OT !== cT._cachedEffect || this.visibility !== cT._cachedVisibility || KT._forceRebindOnNextCall) return !1;
        const yT = this.hasThinInstances;
        if (!yT && this._userInstancedBuffersStorage) return !1;
        if (!KT._wasPreviouslyReady || KT._wasPreviouslyUsingInstances !== yT) return !1;
        const fT = this._internalMeshDataInfo;
        if (this.ignoreCameraMaxZ || this.morphTargetManager || this._instanceDataStorage.isFrozen || cT._isInIntermediateRendering() || 0 !== cT._beforeRenderingMeshStage.length || 0 !== cT._afterRenderingMeshStage.length || fT._onBeforeRenderObservable?.hasObservers() || fT._onBeforeBindObservable?.hasObservers() || fT._onAfterRenderObservable?.hasObservers()) return !1;
        const xT = this.occlusionType;
        if (void 0 !== xT && xT !== oT.c.OCCLUSION_TYPE_NONE || !MT._canBindRunFollower(cT, lT, this, TT, OT)) return !1;
        const IT = this._internalAbstractMeshDataInfo,
          AT = IT._isActiveIntermediate;
        AT ? IT._isActiveIntermediate = !1 : IT._isActive = !1;
        const CT = cT.activeCameras?.length ?? 0;
        (CT > 1 && cT.activeCamera === cT.activeCameras[0] || CT <= 1) && this._checkOcclusionQuery(!1);
        const jT = this._getInstancesRenderList(TT._id);
        if (jT.mustReturn) return !0;
        if (!yT && !jT.renderSelf[TT._id]) return AT ? IT._isActiveIntermediate = !0 : IT._isActive = !0, !1;
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return !0;
        if (fT._effectiveMaterial = MT, kT)
          if (1 === MT.alphaModes.length) lT.setAlphaMode(MT.alphaMode);
          else
            for (let tT = 0; tT < MT.alphaModes.length; tT++) {
              const TT = MT.alphaModes[tT];
              lT.setAlphaMode(void 0 !== TT ? TT : 2, !1, tT)
            }
        if (MT.backFaceCulling || null !== MT.sideOrientation || MT._twoSidedLighting) {
          const TT = this._getWorldMatrixDeterminant();
          let kT = MT._getEffectiveOrientation(this);
          TT < 0 && (kT = kT === eT.e.ClockWiseSideOrientation ? eT.e.CounterClockWiseSideOrientation : eT.e.ClockWiseSideOrientation), fT._effectiveSideOrientation = kT
        }
        MT._preBind(KT, fT._effectiveSideOrientation), MT.forceDepthWrite && lT.setDepthWrite(!0);
        const vT = MT.fillMode;
        return yT || this._bind(TT, OT, vT, !1), MT._bindRunFollower(this.getWorldMatrix(), this, TT, OT), this._processRendering(this, TT, OT, vT, jT, yT, this._onBeforeDraw, MT), MT.unbind(), 2 === cT.performancePriority && this._freeze(), !0
      }
      cleanMatrixWeights() {
        this.isVerticesDataPresent(bT.l.MatricesWeightsKind) && (this.isVerticesDataPresent(bT.l.MatricesWeightsExtraKind) ? this._normalizeSkinWeightsAndExtra() : this._normalizeSkinFourWeights())
      }
      _normalizeSkinFourWeights() {
        const TT = this.getVerticesData(bT.l.MatricesWeightsKind),
          kT = TT.length;
        for (let cT = 0; cT < kT; cT += 4) {
          const kT = TT[cT] + TT[cT + 1] + TT[cT + 2] + TT[cT + 3];
          if (0 === kT) TT[cT] = 1;
          else {
            const lT = 1 / kT;
            TT[cT] *= lT, TT[cT + 1] *= lT, TT[cT + 2] *= lT, TT[cT + 3] *= lT
          }
        }
        this.setVerticesData(bT.l.MatricesWeightsKind, TT)
      }
      _normalizeSkinWeightsAndExtra() {
        const TT = this.getVerticesData(bT.l.MatricesWeightsExtraKind),
          kT = this.getVerticesData(bT.l.MatricesWeightsKind),
          cT = kT.length;
        for (let lT = 0; lT < cT; lT += 4) {
          let cT = kT[lT] + kT[lT + 1] + kT[lT + 2] + kT[lT + 3];
          if (cT += TT[lT] + TT[lT + 1] + TT[lT + 2] + TT[lT + 3], 0 === cT) kT[lT] = 1;
          else {
            const MT = 1 / cT;
            kT[lT] *= MT, kT[lT + 1] *= MT, kT[lT + 2] *= MT, kT[lT + 3] *= MT, TT[lT] *= MT, TT[lT + 1] *= MT, TT[lT + 2] *= MT, TT[lT + 3] *= MT
          }
        }
        this.setVerticesData(bT.l.MatricesWeightsKind, kT), this.setVerticesData(bT.l.MatricesWeightsKind, TT)
      }
      validateSkinning() {
        const TT = this.getVerticesData(bT.l.MatricesWeightsExtraKind),
          kT = this.getVerticesData(bT.l.MatricesWeightsKind);
        if (null === kT || null == this.skeleton) return {
          skinned: !1,
          valid: !0,
          Yj: "not skinned"
        };
        const cT = kT.length;
        let lT = 0,
          MT = 0,
          KT = 0,
          OT = 0;
        const yT = null === TT ? 4 : 8,
          fT = [];
        for (let jT = 0; jT <= yT; jT++) fT[jT] = 0;
        for (let jT = 0; jT < cT; jT += 4) {
          let cT = kT[jT],
            xT = cT,
            IT = 0 === xT ? 0 : 1;
          for (let MT = 1; MT < yT; MT++) {
            const KT = MT < 4 ? kT[jT + MT] : TT[jT + MT - 4];
            KT > cT && lT++, 0 !== KT && IT++, xT += KT, cT = KT
          }
          if (fT[IT]++, IT > KT && (KT = IT), 0 === xT) MT++;
          else {
            const cT = 1 / xT;
            let lT = 0;
            for (let MT = 0; MT < yT; MT++) lT += MT < 4 ? Math.abs(kT[jT + MT] - kT[jT + MT] * cT) : Math.abs(TT[jT + MT - 4] - TT[jT + MT - 4] * cT);
            lT > .001 && OT++
          }
        }
        const xT = this.skeleton.bones.length,
          IT = this.getVerticesData(bT.l.MatricesIndicesKind),
          AT = this.getVerticesData(bT.l.MatricesIndicesExtraKind);
        let CT = 0;
        for (let jT = 0; jT < cT; jT += 4)
          for (let TT = 0; TT < yT; TT++) {
            const kT = TT < 4 ? IT[jT + TT] : AT[jT + TT - 4];
            (kT >= xT || kT < 0) && CT++
          }
        return {
          skinned: !0,
          valid: 0 === MT && 0 === OT && 0 === CT,
          Yj: "Number of Weights = " + cT / 4 + "\nMaximum influences = " + KT + "\nMissing Weights = " + MT + "\nNot Sorted = " + lT + "\nNot Normalized = " + OT + "\nWeightCounts = [" + fT + "]\nNumber of bones = " + xT + "\nBad Bone Indices = " + CT
        }
      }
      _checkDelayState() {
        const TT = this.NJ();
        return this._geometry ? this._geometry.load(TT) : 4 === this.delayLoadState && (this.delayLoadState = 2, this._queueLoad(TT)), this
      }
      _queueLoad(TT) {
        TT.addPendingData(this);
        const kT = -1 !== this.delayLoadingFile.indexOf(".babylonbinarymeshdata");
        return (async () => {
          try {
            const cT = await TT._loadDelayedFileAsync(this.delayLoadingFile, kT, !0);
            cT instanceof ArrayBuffer ? this._delayLoadingFunction(cT, this) : this._delayLoadingFunction(JSON.parse(cT), this);
            for (const TT of this.instances) TT.refreshBoundingInfo(), TT._syncSubMeshes();
            this.delayLoadState = 1, TT.removePendingData(this)
          } catch (cT) {
            TT.removePendingData(this), TT.VkT || uT.e.Error(`Unable to delay load geometry data for mesh "${this.name}" from "${this.delayLoadingFile}": ${cT}`)
          }
        })(), this
      }
      isInFrustum(TT) {
        return 2 !== this.delayLoadState && (!!super.isInFrustum(TT) && (this._checkDelayState(), !0))
      }
      setMaterialById(TT) {
        const kT = this.NJ().materials;
        let cT;
        for (cT = kT.length - 1; cT > -1; cT--)
          if (kT[cT].id === TT) return this.material = kT[cT], this;
        const lT = this.NJ().multiMaterials;
        for (cT = lT.length - 1; cT > -1; cT--)
          if (lT[cT].id === TT) return this.material = lT[cT], this;
        return this
      }
      getAnimatables() {
        const TT = [];
        return this.material && TT.push(this.material), this.skeleton && TT.push(this.skeleton), TT
      }
      bakeTransformIntoVertices(TT) {
        if (!this.isVerticesDataPresent(bT.l.PositionKind)) return this;
        const kT = this.kF.splice(0);
        this._resetPointsArrayCache();
        let cT = this.getVerticesData(bT.l.PositionKind);
        const lT = PT.m.Zero();
        let MT;
        for (MT = 0; MT < cT.length; MT += 3) PT.m.TransformCoordinatesFromFloatsToRef(cT[MT], cT[MT + 1], cT[MT + 2], TT, lT).toArray(cT, MT);
        if (this.setVerticesData(bT.l.PositionKind, cT, this.getVertexBuffer(bT.l.PositionKind).isUpdatable()), this.isVerticesDataPresent(bT.l.NormalKind)) {
          for (cT = this.getVerticesData(bT.l.NormalKind), MT = 0; MT < cT.length; MT += 3) PT.m.TransformNormalFromFloatsToRef(cT[MT], cT[MT + 1], cT[MT + 2], TT, lT).normalize().toArray(cT, MT);
          this.setVerticesData(bT.l.NormalKind, cT, this.getVertexBuffer(bT.l.NormalKind).isUpdatable())
        }
        if (this.isVerticesDataPresent(bT.l.TangentKind)) {
          for (cT = this.getVerticesData(bT.l.TangentKind), MT = 0; MT < cT.length; MT += 4) PT.m.TransformNormalFromFloatsToRef(cT[MT], cT[MT + 1], cT[MT + 2], TT, lT).normalize().toArray(cT, MT);
          this.setVerticesData(bT.l.TangentKind, cT, this.getVertexBuffer(bT.l.TangentKind).isUpdatable())
        }
        return TT.determinant() < 0 && this.flipFaces(), this.releaseSubMeshes(), this.kF = kT, this
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
          kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          cT = arguments.length > 2 ? arguments[2] : void 0,
          lT = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        if (kT && void 0 === kT._addToSceneRootNodes) {
          const cT = kT;
          return pT.source = this, pT.doNotCloneChildren = cT.doNotCloneChildren, pT.clonePhysicsImpostor = cT.clonePhysicsImpostor, pT.cloneThinInstances = cT.cloneThinInstances, new iT(TT, this.NJ(), pT)
        }
        return new iT(TT, this.NJ(), kT, this, cT, lT)
      }
      dispose(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.morphTargetManager = null, this._geometry && this._geometry.releaseForMesh(this, !0);
        const cT = this._internalMeshDataInfo;
        if (cT._onBeforeDrawObservable && cT._onBeforeDrawObservable.clear(), cT._onBeforeBindObservable && cT._onBeforeBindObservable.clear(), cT._onBeforeRenderObservable && cT._onBeforeRenderObservable.clear(), cT._onAfterRenderObservable && cT._onAfterRenderObservable.clear(), cT._onBetweenPassObservable && cT._onBetweenPassObservable.clear(), this._scene.useClonedMeshMap) {
          if (cT.meshMap)
            for (const TT in cT.meshMap) {
              const kT = cT.meshMap[TT];
              kT && (kT._internalMeshDataInfo._source = null, cT.meshMap[TT] = void 0)
            }
          cT._source && cT._source._internalMeshDataInfo.meshMap && (cT._source._internalMeshDataInfo.meshMap[this.uniqueId] = void 0)
        } else {
          const TT = this.NJ().meshes;
          for (const kT of TT) {
            const TT = kT;
            TT._internalMeshDataInfo && TT._internalMeshDataInfo._source && TT._internalMeshDataInfo._source === this && (TT._internalMeshDataInfo._source = null)
          }
        }
        cT._source = null, this._disposeInstanceSpecificData(), this._disposeThinInstanceSpecificData(), this._internalMeshDataInfo._checkReadinessObserver && this._scene.onBeforeRenderObservable.remove(this._internalMeshDataInfo._checkReadinessObserver), super.dispose(TT, kT)
      }
      _disposeInstanceSpecificData() {}
      _disposeThinInstanceSpecificData() {}
      _invalidateInstanceVertexArrayObject() {}
      applyDisplacementMap(TT, kT, cT, lT, MT, KT) {
        let OT = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          yT = arguments.length > 7 ? arguments[7] : void 0;
        const fT = this.NJ();
        return (0, ST.o)(TT, (TT => {
          const yT = TT.width,
            fT = TT.height,
            xT = this.Dv().createCanvas(yT, fT).getContext("2d");
          xT.drawImage(TT, 0, 0);
          const IT = xT.getImageData(0, 0, yT, fT).data;
          this.applyDisplacementMapFromBuffer(IT, yT, fT, kT, cT, MT, KT, OT), lT && lT(this)
        }), yT || (() => {}), fT.offlineProvider), this
      }
      applyDisplacementMapFromBuffer(TT, kT, cT, lT, MT, KT, OT) {
        let yT = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
        if (!this.isVerticesDataPresent(bT.l.PositionKind) || !this.isVerticesDataPresent(bT.l.NormalKind) || !this.isVerticesDataPresent(bT.l.UVKind)) return uT.e.Warn("Cannot call applyDisplacementMap: Given mesh is not complete. Position, Normal or UV are missing"), this;
        const fT = this.getVerticesData(bT.l.PositionKind, !0, !0),
          xT = this.getVerticesData(bT.l.NormalKind),
          IT = this.getVerticesData(bT.l.UVKind);
        let AT = PT.m.Zero();
        const CT = PT.m.Zero(),
          jT = PT.i.Zero();
        KT = KT || PT.i.Zero(), OT = OT || new PT.i(1, 1);
        for (let vT = 0; vT < fT.length; vT += 3) {
          PT.m.FromArrayToRef(fT, vT, AT), PT.m.FromArrayToRef(xT, vT, CT), PT.i.FromArrayToRef(IT, vT / 3 * 2, jT);
          const yT = 4 * ((Math.abs(jT.x * OT.x + KT.x % 1) * (kT - 1) % kT | 0) + (Math.abs(jT.y * OT.y + KT.y % 1) * (cT - 1) % cT | 0) * kT),
            tT = .3 * (TT[yT] / 255) + .59 * (TT[yT + 1] / 255) + .11 * (TT[yT + 2] / 255);
          CT.normalize(), CT.scaleInPlace(lT + (MT - lT) * tT), AT = AT.add(CT), AT.toArray(fT, vT)
        }
        return zT.d.ComputeNormals(fT, this.FcT(), xT), yT ? (this.setVerticesData(bT.l.PositionKind, fT), this.setVerticesData(bT.l.NormalKind, xT), this.setVerticesData(bT.l.UVKind, IT)) : (this.updateVerticesData(bT.l.PositionKind, fT), this.updateVerticesData(bT.l.NormalKind, xT)), this
      }
      _getFlattenedNormals(TT, kT) {
        const cT = new Float32Array(3 * TT.length);
        let lT = 0;
        const MT = this.sideOrientation === (this._scene.useRightHandedSystem ? 1 : 0);
        for (let KT = 0; KT < TT.length; KT += 3) {
          const OT = PT.m.FromArray(kT, 3 * TT[KT]),
            yT = PT.m.FromArray(kT, 3 * TT[KT + 1]),
            fT = PT.m.FromArray(kT, 3 * TT[KT + 2]),
            xT = OT.subtract(yT),
            IT = fT.subtract(yT),
            AT = PT.m.Normalize(PT.m.Cross(xT, IT));
          MT && AT.scaleInPlace(-1);
          for (let TT = 0; TT < 3; TT++) cT[lT++] = AT.x, cT[lT++] = AT.y, cT[lT++] = AT.z
        }
        return cT
      }
      _convertToUnIndexedMesh() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const kT = this.getVerticesDataKinds().filter((TT => !this.getVertexBuffer(TT)?.getIsInstanced())),
          cT = this.FcT(!1, !0),
          lT = {},
          MT = (TT, kT) => {
            const lT = new Float32Array(cT.length * kT);
            let MT = 0;
            for (let KT = 0; KT < cT.length; KT++)
              for (let OT = 0; OT < kT; OT++) lT[MT++] = TT[cT[KT] * kT + OT];
            return lT
          },
          KT = this.DH(),
          OT = this.geometry ? this.kF.slice(0) : [];
        for (const yT of kT) lT[yT] = this.getVerticesData(yT);
        for (const yT of kT) {
          const kT = this.getVertexBuffer(yT),
            KT = kT.getSize();
          if (TT && yT === bT.l.NormalKind) {
            const TT = this._getFlattenedNormals(cT, lT[bT.l.PositionKind]);
            this.setVerticesData(bT.l.NormalKind, TT, kT.isUpdatable(), KT)
          } else this.setVerticesData(yT, MT(lT[yT], KT), kT.isUpdatable(), KT)
        }
        if (this.morphTargetManager) {
          for (let kT = 0; kT < this.morphTargetManager.numTargets; kT++) {
            const lT = this.morphTargetManager.getTarget(kT),
              KT = lT.getPositions();
            lT.iKT(MT(KT, 3));
            const OT = lT.getNormals();
            OT && lT.setNormals(TT ? this._getFlattenedNormals(cT, KT) : MT(OT, 3));
            const yT = lT.getTangents();
            yT && lT.setTangents(MT(yT, 3));
            const fT = lT.getUVs();
            fT && lT.setUVs(MT(fT, 2));
            const xT = lT.getColors();
            xT && lT.setColors(MT(xT, 4))
          }
          this.morphTargetManager.synchronize()
        }
        for (let yT = 0; yT < cT.length; yT++) cT[yT] = yT;
        this.setIndices(cT), this._unIndexed = !0, this.releaseSubMeshes();
        for (const yT of OT) {
          const TT = yT.DH();
          HT.c.AddToMesh(yT.materialIndex, yT.indexStart, yT.indexCount, yT.indexStart, yT.indexCount, this).setBoundingInfo(TT)
        }
        return this.setBoundingInfo(KT), this.synchronizeInstances(), this
      }
      convertToFlatShadedMesh() {
        return this._convertToUnIndexedMesh(!0)
      }
      convertToUnIndexedMesh() {
        return this._convertToUnIndexedMesh()
      }
      flipFaces() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const kT = zT.d.ExtractFromMesh(this);
        let cT;
        if (TT && this.isVerticesDataPresent(bT.l.NormalKind) && kT.normals) {
          for (cT = 0; cT < kT.normals.length; cT++) kT.normals[cT] *= -1;
          this.setVerticesData(bT.l.NormalKind, kT.normals, this.isVertexBufferUpdatable(bT.l.NormalKind))
        }
        if (kT.indices) {
          let TT;
          for (cT = 0; cT < kT.indices.length; cT += 3) TT = kT.indices[cT + 1], kT.indices[cT + 1] = kT.indices[cT + 2], kT.indices[cT + 2] = TT;
          this.setIndices(kT.indices, null, this.isVertexBufferUpdatable(bT.l.PositionKind), !0)
        }
        return this
      }
      increaseVertices() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        const kT = zT.d.ExtractFromMesh(this),
          cT = kT.indices && !Array.isArray(kT.indices) && Array.from ? Array.from(kT.indices) : kT.indices,
          lT = kT.positions && !Array.isArray(kT.positions) && Array.from ? Array.from(kT.positions) : kT.positions,
          MT = kT.uvs && !Array.isArray(kT.uvs) && Array.from ? Array.from(kT.uvs) : kT.uvs,
          KT = kT.normals && !Array.isArray(kT.normals) && Array.from ? Array.from(kT.normals) : kT.normals;
        if (cT && lT) {
          kT.indices = cT, kT.positions = lT, MT && (kT.uvs = MT), KT && (kT.normals = KT);
          const OT = TT + 1,
            yT = [];
          for (let TT = 0; TT < OT + 1; TT++) yT[TT] = [];
          let fT, xT;
          const IT = new PT.m(0, 0, 0),
            AT = new PT.m(0, 0, 0),
            CT = new PT.i(0, 0),
            jT = [],
            vT = [],
            tT = [];
          let hT, NT, QT, ST = lT.length;
          MT && (NT = MT.length), KT && (QT = KT.length);
          for (let TT = 0; TT < cT.length; TT += 3) {
            vT[0] = cT[TT], vT[1] = cT[TT + 1], vT[2] = cT[TT + 2];
            for (let TT = 0; TT < 3; TT++)
              if (fT = vT[TT], xT = vT[(TT + 1) % 3], void 0 === tT[fT] && void 0 === tT[xT] ? (tT[fT] = [], tT[xT] = []) : (void 0 === tT[fT] && (tT[fT] = []), void 0 === tT[xT] && (tT[xT] = [])), void 0 === tT[fT][xT] && void 0 === tT[xT][fT]) {
                tT[fT][xT] = [], IT.x = (lT[3 * xT] - lT[3 * fT]) / OT, IT.y = (lT[3 * xT + 1] - lT[3 * fT + 1]) / OT, IT.z = (lT[3 * xT + 2] - lT[3 * fT + 2]) / OT, KT && (AT.x = (KT[3 * xT] - KT[3 * fT]) / OT, AT.y = (KT[3 * xT + 1] - KT[3 * fT + 1]) / OT, AT.z = (KT[3 * xT + 2] - KT[3 * fT + 2]) / OT), MT && (CT.x = (MT[2 * xT] - MT[2 * fT]) / OT, CT.y = (MT[2 * xT + 1] - MT[2 * fT + 1]) / OT), tT[fT][xT].push(fT);
                for (let TT = 1; TT < OT; TT++) tT[fT][xT].push(lT.length / 3), lT[ST++] = lT[3 * fT] + TT * IT.x, lT[ST++] = lT[3 * fT + 1] + TT * IT.y, lT[ST++] = lT[3 * fT + 2] + TT * IT.z, KT && (KT[QT++] = KT[3 * fT] + TT * AT.x, KT[QT++] = KT[3 * fT + 1] + TT * AT.y, KT[QT++] = KT[3 * fT + 2] + TT * AT.z), MT && (MT[NT++] = MT[2 * fT] + TT * CT.x, MT[NT++] = MT[2 * fT + 1] + TT * CT.y);
                tT[fT][xT].push(xT), tT[xT][fT] = [], hT = tT[fT][xT].length;
                for (let TT = 0; TT < hT; TT++) tT[xT][fT][TT] = tT[fT][xT][hT - 1 - TT]
              } yT[0][0] = cT[TT], yT[1][0] = tT[cT[TT]][cT[TT + 1]][1], yT[1][1] = tT[cT[TT]][cT[TT + 2]][1];
            for (let kT = 2; kT < OT; kT++) {
              yT[kT][0] = tT[cT[TT]][cT[TT + 1]][kT], yT[kT][kT] = tT[cT[TT]][cT[TT + 2]][kT], IT.x = (lT[3 * yT[kT][kT]] - lT[3 * yT[kT][0]]) / kT, IT.y = (lT[3 * yT[kT][kT] + 1] - lT[3 * yT[kT][0] + 1]) / kT, IT.z = (lT[3 * yT[kT][kT] + 2] - lT[3 * yT[kT][0] + 2]) / kT, KT && (AT.x = (KT[3 * yT[kT][kT]] - KT[3 * yT[kT][0]]) / kT, AT.y = (KT[3 * yT[kT][kT] + 1] - KT[3 * yT[kT][0] + 1]) / kT, AT.z = (KT[3 * yT[kT][kT] + 2] - KT[3 * yT[kT][0] + 2]) / kT), MT && (CT.x = (MT[2 * yT[kT][kT]] - MT[2 * yT[kT][0]]) / kT, CT.y = (MT[2 * yT[kT][kT] + 1] - MT[2 * yT[kT][0] + 1]) / kT);
              for (let TT = 1; TT < kT; TT++) yT[kT][TT] = lT.length / 3, lT[ST++] = lT[3 * yT[kT][0]] + TT * IT.x, lT[ST++] = lT[3 * yT[kT][0] + 1] + TT * IT.y, lT[ST++] = lT[3 * yT[kT][0] + 2] + TT * IT.z, KT && (KT[QT++] = KT[3 * yT[kT][0]] + TT * AT.x, KT[QT++] = KT[3 * yT[kT][0] + 1] + TT * AT.y, KT[QT++] = KT[3 * yT[kT][0] + 2] + TT * AT.z), MT && (MT[NT++] = MT[2 * yT[kT][0]] + TT * CT.x, MT[NT++] = MT[2 * yT[kT][0] + 1] + TT * CT.y)
            }
            yT[OT] = tT[cT[TT + 1]][cT[TT + 2]], jT.push(yT[0][0], yT[1][0], yT[1][1]);
            for (let TT = 1; TT < OT; TT++) {
              let kT;
              for (kT = 0; kT < TT; kT++) jT.push(yT[TT][kT], yT[TT + 1][kT], yT[TT + 1][kT + 1]), jT.push(yT[TT][kT], yT[TT + 1][kT + 1], yT[TT][kT + 1]);
              jT.push(yT[TT][kT], yT[TT + 1][kT], yT[TT + 1][kT + 1])
            }
          }
          kT.indices = jT, kT.applyToMesh(this, this.isVertexBufferUpdatable(bT.l.PositionKind))
        } else uT.e.Warn("Couldn't increase number of vertices : VertexData must contain at least indices and positions")
      }
      forceSharedVertices() {
        const TT = zT.d.ExtractFromMesh(this),
          kT = TT.uvs,
          cT = TT.indices,
          lT = TT.positions,
          MT = TT.colors,
          KT = TT.matricesIndices,
          OT = TT.matricesWeights,
          yT = TT.matricesIndicesExtra,
          fT = TT.matricesWeightsExtra;
        if (void 0 === cT || void 0 === lT || null === cT || null === lT) uT.e.Warn("VertexData contains empty entries");
        else {
          const xT = [],
            IT = [],
            AT = [],
            CT = [],
            jT = [],
            vT = [],
            tT = [],
            hT = [];
          let NT, QT = 0;
          const ST = {};
          let DT, aT;
          for (let TT = 0; TT < cT.length; TT += 3) {
            aT = [cT[TT], cT[TT + 1], cT[TT + 2]], NT = [];
            for (let TT = 0; TT < 3; TT++) {
              NT[TT] = "";
              for (let kT = 0; kT < 3; kT++) Math.abs(lT[3 * aT[TT] + kT]) < 1e-8 && (lT[3 * aT[TT] + kT] = 0), NT[TT] += lT[3 * aT[TT] + kT] + "|"
            }
            if (NT[0] != NT[1] && NT[0] != NT[2] && NT[1] != NT[2])
              for (let TT = 0; TT < 3; TT++) {
                if (DT = ST[NT[TT]], void 0 === DT) {
                  ST[NT[TT]] = QT, DT = QT++;
                  for (let kT = 0; kT < 3; kT++) xT.push(lT[3 * aT[TT] + kT]);
                  if (null !== MT && void 0 !== MT)
                    for (let kT = 0; kT < 4; kT++) CT.push(MT[4 * aT[TT] + kT]);
                  if (null !== kT && void 0 !== kT)
                    for (let cT = 0; cT < 2; cT++) AT.push(kT[2 * aT[TT] + cT]);
                  if (null !== KT && void 0 !== KT)
                    for (let kT = 0; kT < 4; kT++) jT.push(KT[4 * aT[TT] + kT]);
                  if (null !== OT && void 0 !== OT)
                    for (let kT = 0; kT < 4; kT++) vT.push(OT[4 * aT[TT] + kT]);
                  if (null !== yT && void 0 !== yT)
                    for (let kT = 0; kT < 4; kT++) tT.push(yT[4 * aT[TT] + kT]);
                  if (null !== fT && void 0 !== fT)
                    for (let kT = 0; kT < 4; kT++) hT.push(fT[4 * aT[TT] + kT])
                }
                IT.push(DT)
              }
          }
          const FT = [];
          zT.d.ComputeNormals(xT, IT, FT), TT.positions = xT, TT.indices = IT, TT.normals = FT, null !== kT && void 0 !== kT && (TT.uvs = AT), null !== MT && void 0 !== MT && (TT.colors = CT), null !== KT && void 0 !== KT && (TT.matricesIndices = jT), null !== OT && void 0 !== OT && (TT.matricesWeights = vT), null !== yT && void 0 !== yT && (TT.matricesIndicesExtra = tT), null !== OT && void 0 !== OT && (TT.matricesWeightsExtra = hT), TT.applyToMesh(this, this.isVertexBufferUpdatable(bT.l.PositionKind))
        }
      }
      static _instancedMeshFactory(TT, kT) {
        throw (0, dT.i)("InstancedMesh")
      }
      static _PhysicsImpostorParser(TT, kT, cT) {
        throw (0, dT.i)("PhysicsImpostor")
      }
      createInstance(TT) {
        const kT = iT._instancedMeshFactory(TT, this);
        return kT.parent = this.parent, kT
      }
      synchronizeInstances() {
        for (let TT = 0; TT < this.instances.length; TT++) {
          this.instances[TT]._syncSubMeshes()
        }
        return this
      }
      optimizeIndices(TT) {
        const kT = this.FcT(),
          cT = this.getVerticesData(bT.l.PositionKind);
        if (!cT || !kT) return this;
        const lT = [];
        for (let KT = 0; KT < cT.length; KT += 3) lT.push(PT.m.FromArray(cT, KT));
        const MT = [];
        return QT.d.SyncAsyncForLoop(lT.length, 40, (TT => {
          const kT = lT.length - 1 - TT,
            cT = lT[kT];
          for (let KT = 0; KT < kT; ++KT) {
            const TT = lT[KT];
            if (cT.equals(TT)) {
              MT[kT] = KT;
              break
            }
          }
        }), (() => {
          for (let TT = 0; TT < kT.length; ++TT) kT[TT] = MT[kT[TT]] || kT[TT];
          const cT = this.kF.slice(0);
          this.setIndices(kT), this.kF = cT, TT && TT(this)
        })), this
      }
      serialize() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        TT.name = this.name, TT.id = this.id, TT.uniqueId = this.uniqueId, TT.type = this.getClassName(), aT.b && aT.b.HasTags(this) && (TT.tags = aT.b.GetTags(this)), TT.position = this.position.acT(), this.rotationQuaternion ? TT.rotationQuaternion = this.rotationQuaternion.acT() : this.rotation && (TT.rotation = this.rotation.acT()), TT.GA = this.GA.acT(), this._postMultiplyPivotMatrix ? TT.pivotMatrix = this.getPivotMatrix().acT() : TT.localMatrix = this.getPivotMatrix().acT(), TT.isEnabled = this.isEnabled(!1), TT.isVisible = this.isVisible, TT.infiniteDistance = this.infiniteDistance, TT.pickable = this.Vt, TT.receiveShadows = this.receiveShadows, TT.billboardMode = this.billboardMode, TT.visibility = this.visibility, TT.av = this.av, TT.checkCollisions = this.checkCollisions, TT.ellipsoid = this.ellipsoid.acT(), TT.ellipsoidOffset = this.ellipsoidOffset.acT(), TT.Pv = this.Pv, TT.isBlocker = this.isBlocker, TT.sideOrientation = this.sideOrientation, this._isWorldMatrixFrozen && (TT.bJ = !0), this.parent && this.parent._serializeAsParent(TT), TT.isUnIndexed = this.isUnIndexed;
        const kT = this._geometry;
        if (kT && this.kF) {
          TT.geometryUniqueId = kT.uniqueId, TT.geometryId = kT.id, TT.kF = [];
          for (let kT = 0; kT < this.kF.length; kT++) {
            const cT = this.kF[kT];
            TT.kF.push({
              materialIndex: cT.materialIndex,
              verticesStart: cT.verticesStart,
              verticesCount: cT.verticesCount,
              indexStart: cT.indexStart,
              indexCount: cT.indexCount
            })
          }
        }
        if (this.material ? this.material.doNotSerialize || (TT.materialUniqueId = this.material.uniqueId, TT.materialId = this.material.id) : (this.material = null, TT.materialUniqueId = this._scene.defaultMaterial.uniqueId, TT.materialId = this._scene.defaultMaterial.id), this.morphTargetManager && (TT.morphTargetManagerId = this.morphTargetManager.uniqueId), this.skeleton && (TT.skeletonId = this.skeleton.id, TT.skeletonUniqueId = this.skeleton.uniqueId, TT.numBoneInfluencers = this.numBoneInfluencers), this.NJ()._getComponent(LT.e.NAME_PHYSICSENGINE)) {
          const kT = this.getPhysicsImpostor?.();
          kT && (TT.physicsMass = kT.getParam("zI"), TT.physicsFriction = kT.getParam("friction"), TT.physicsRestitution = kT.getParam("zI"), TT.physicsImpostor = kT.type)
        }
        this.metadata && (TT.metadata = this.metadata), 0 !== this.meshBlendingTag && (TT.meshBlendingTag = this.meshBlendingTag), TT.instances = [];
        for (let cT = 0; cT < this.instances.length; cT++) {
          const kT = this.instances[cT];
          if (kT.doNotSerialize) continue;
          const lT = {
            name: kT.name,
            id: kT.id,
            isEnabled: kT.isEnabled(!1),
            isVisible: kT.isVisible,
            Vt: kT.Vt,
            checkCollisions: kT.checkCollisions,
            position: kT.position.acT(),
            GA: kT.GA.acT()
          };
          if (kT.parent && kT.parent._serializeAsParent(lT), kT.rotationQuaternion ? lT.rotationQuaternion = kT.rotationQuaternion.acT() : kT.rotation && (lT.rotation = kT.rotation.acT()), this.NJ()._getComponent(LT.e.NAME_PHYSICSENGINE)) {
            const TT = kT.getPhysicsImpostor?.();
            TT && (lT.physicsMass = TT.getParam("zI"), lT.physicsFriction = TT.getParam("friction"), lT.physicsRestitution = TT.getParam("zI"), lT.physicsImpostor = TT.type)
          }
          kT.metadata && (lT.metadata = kT.metadata), kT.actionManager && (lT.actions = kT.actionManager.serialize(kT.name)), TT.instances.push(lT), ZT.d.AppendSerializedAnimations(kT, lT), lT.qt = kT.serializeAnimationRanges()
        }
        if (this._thinInstanceDataStorage.instancesCount && this._thinInstanceDataStorage.matrixData && (TT.thinInstances = {
            instancesCount: this._thinInstanceDataStorage.instancesCount,
            matrixData: Array.from(this._thinInstanceDataStorage.matrixData),
            matrixBufferSize: this._thinInstanceDataStorage.matrixBufferSize,
            enablePicking: this.XTT
          }, this._userThinInstanceBuffersStorage)) {
          const kT = {
            data: {},
            sizes: {},
            strides: {}
          };
          for (const TT in this._userThinInstanceBuffersStorage.data) kT.data[TT] = Array.from(this._userThinInstanceBuffersStorage.data[TT]), kT.sizes[TT] = this._userThinInstanceBuffersStorage.sizes[TT], kT.strides[TT] = this._userThinInstanceBuffersStorage.strides[TT];
          TT.thinInstances.userThinInstance = kT
        }
        return ZT.d.AppendSerializedAnimations(this, TT), TT.qt = this.serializeAnimationRanges(), TT.layerMask = this.layerMask, TT.alphaIndex = this.alphaIndex, TT.hasVertexAlpha = this.hasVertexAlpha, TT.overlayAlpha = this.overlayAlpha, TT.overlayColor = this.overlayColor.acT(), TT.renderOverlay = this.renderOverlay, TT.applyFog = this.applyFog, this.actionManager && (TT.actions = this.actionManager.serialize(this.name)), TT
      }
      _syncGeometryWithMorphTargetManager() {
        if (!this.geometry) return;
        this._markSubMeshesAsAttributesDirty();
        const TT = this._internalAbstractMeshDataInfo._morphTargetManager;
        if (TT && TT.vertexCount) {
          if (TT.vertexCount !== this.getTotalVertices()) return uT.e.Error("Mesh is incompatible with morph targets. Targets and mesh must all have the same vertices count."), void(this.morphTargetManager = null);
          if (TT.isUsingTextureForTargets) return;
          for (let kT = 0; kT < TT.numInfluencers; kT++) {
            const cT = TT.getActiveTarget(kT),
              lT = cT.getPositions();
            if (!lT) return void uT.e.Error("Invalid morph target. Target must have positions.");
            this.geometry.setVerticesData(bT.l.PositionKind + kT, lT, !1, 3);
            const MT = cT.getNormals();
            MT && this.geometry.setVerticesData(bT.l.NormalKind + kT, MT, !1, 3);
            const KT = cT.getTangents();
            KT && this.geometry.setVerticesData(bT.l.TangentKind + kT, KT, !1, 3);
            const OT = cT.getUVs();
            OT && this.geometry.setVerticesData(bT.l.UVKind + "_" + kT, OT, !1, 2);
            const yT = cT.getUV2s();
            yT && this.geometry.setVerticesData(bT.l.UV2Kind + "_" + kT, yT, !1, 2);
            const fT = cT.getColors();
            fT && this.geometry.setVerticesData(bT.l.ColorKind + kT, fT, !1, 4)
          }
        } else {
          let TT = 0;
          for (; this.geometry.isVerticesDataPresent(bT.l.PositionKind + TT);) this.geometry.removeVerticesData(bT.l.PositionKind + TT), this.geometry.isVerticesDataPresent(bT.l.NormalKind + TT) && this.geometry.removeVerticesData(bT.l.NormalKind + TT), this.geometry.isVerticesDataPresent(bT.l.TangentKind + TT) && this.geometry.removeVerticesData(bT.l.TangentKind + TT), this.geometry.isVerticesDataPresent(bT.l.UVKind + "_" + TT) && this.geometry.removeVerticesData(bT.l.UVKind + "_" + TT), this.geometry.isVerticesDataPresent(bT.l.UV2Kind + "_" + TT) && this.geometry.removeVerticesData(bT.l.UV2Kind + "_" + TT), this.geometry.isVerticesDataPresent(bT.l.ColorKind + TT) && this.geometry.removeVerticesData(bT.l.ColorKind + TT), TT++
        }
      }
      static Parse(TT, kT, cT) {
        let lT, MT = !1;
        if (TT.type && "LinesMesh" === TT.type ? lT = iT._LinesMeshParser(TT, kT) : TT.type && "GroundMesh" === TT.type ? lT = iT._GroundMeshParser(TT, kT) : TT.type && "GoldbergMesh" === TT.type ? lT = iT._GoldbergMeshParser(TT, kT) : TT.type && "GreasedLineMesh" === TT.type ? lT = iT._GreasedLineMeshParser(TT, kT) : TT.type && "TrailMesh" === TT.type ? lT = iT._TrailMeshParser(TT, kT) : TT.type && "GaussianSplattingMesh" === TT.type ? (lT = TT._isCompound ? iT._GaussianSplattingCompoundMeshParser(TT, kT) : iT._GaussianSplattingMeshParser(TT, kT), MT = !0) : TT.type && "GaussianSplattingPartProxyMesh" === TT.type ? (lT = iT._GaussianSplattingPartProxyMeshParser(TT, kT), MT = !0) : lT = new iT(TT.name, kT), lT.id = TT.id, lT._waitingParsedUniqueId = TT.uniqueId, aT.b && aT.b.AddTagsTo(lT, TT.tags), lT.position = PT.m.FromArray(TT.position), void 0 !== TT.metadata && (lT.metadata = TT.metadata), void 0 !== TT.meshBlendingTag && (lT.meshBlendingTag = TT.meshBlendingTag), TT.rotationQuaternion ? lT.rotationQuaternion = PT.f.FromArray(TT.rotationQuaternion) : TT.rotation && (lT.rotation = PT.m.FromArray(TT.rotation)), lT.GA = PT.m.FromArray(TT.GA), TT.localMatrix ? lT.setPreTransformMatrix(PT.d.FromArray(TT.localMatrix)) : TT.pivotMatrix && lT.setPivotMatrix(PT.d.FromArray(TT.pivotMatrix)), lT.PD(TT.isEnabled), lT.isVisible = TT.isVisible, lT.infiniteDistance = TT.infiniteDistance, lT.av = !!TT.av, lT.showBoundingBox = TT.showBoundingBox, lT.showSubMeshesBoundingBox = TT.showSubMeshesBoundingBox, void 0 !== TT.applyFog && (lT.applyFog = TT.applyFog), void 0 !== TT.pickable && (lT.Vt = TT.pickable), void 0 !== TT.alphaIndex && (lT.alphaIndex = TT.alphaIndex), lT.receiveShadows = TT.receiveShadows, void 0 !== TT.billboardMode && (lT.billboardMode = TT.billboardMode), void 0 !== TT.visibility && (lT.visibility = TT.visibility), lT.checkCollisions = TT.checkCollisions, lT.Pv = !!TT.Pv, TT.ellipsoid && (lT.ellipsoid = PT.m.FromArray(TT.ellipsoid)), TT.ellipsoidOffset && (lT.ellipsoidOffset = PT.m.FromArray(TT.ellipsoidOffset)), null != TT.overrideMaterialSideOrientation && (lT.sideOrientation = TT.overrideMaterialSideOrientation), void 0 !== TT.sideOrientation && (lT.sideOrientation = TT.sideOrientation), void 0 !== TT.isBlocker && (lT.isBlocker = TT.isBlocker), lT._shouldGenerateFlatShading = TT.useFlatShading, TT.bJ && (lT._waitingData.bJ = TT.bJ), void 0 !== TT.parentId && (lT._waitingParentId = TT.parentId), void 0 !== TT.parentInstanceIndex && (lT._waitingParentInstanceIndex = TT.parentInstanceIndex), void 0 !== TT.actions && (lT._waitingData.actions = TT.actions), void 0 !== TT.overlayAlpha && (lT.overlayAlpha = TT.overlayAlpha), void 0 !== TT.overlayColor && (lT.overlayColor = wT.c.FromArray(TT.overlayColor)), void 0 !== TT.renderOverlay && (lT.renderOverlay = TT.renderOverlay), lT.isUnIndexed = !!TT.isUnIndexed, lT.hasVertexAlpha = TT.hasVertexAlpha, TT.delayLoadingFile ? (lT.delayLoadState = 4, lT.delayLoadingFile = cT + TT.delayLoadingFile, lT.buildBoundingInfo(PT.m.FromArray(TT.boundingBoxMinimum), PT.m.FromArray(TT.boundingBoxMaximum)), TT._binaryInfo && (lT._binaryInfo = TT._binaryInfo), lT._delayInfo = [], TT.hasUVs && lT._delayInfo.push(bT.l.UVKind), TT.hasUVs2 && lT._delayInfo.push(bT.l.UV2Kind), TT.hasUVs3 && lT._delayInfo.push(bT.l.UV3Kind), TT.hasUVs4 && lT._delayInfo.push(bT.l.UV4Kind), TT.hasUVs5 && lT._delayInfo.push(bT.l.UV5Kind), TT.hasUVs6 && lT._delayInfo.push(bT.l.UV6Kind), TT.hasColors && lT._delayInfo.push(bT.l.ColorKind), TT.hasMatricesIndices && lT._delayInfo.push(bT.l.MatricesIndicesKind), TT.hasMatricesWeights && lT._delayInfo.push(bT.l.MatricesWeightsKind), lT._delayLoadingFunction = JT.d._ImportGeometry, ET.c.ForceFullSceneLoadingForIncremental && lT._checkDelayState()) : MT || JT.d._ImportGeometry(TT, lT), TT.materialUniqueId ? lT._waitingMaterialId = TT.materialUniqueId : TT.materialId && (lT._waitingMaterialId = TT.materialId), TT.morphTargetManagerId > -1 && (lT._waitingMorphTargetManagerId = TT.morphTargetManagerId), void 0 !== TT.skeletonId && null !== TT.skeletonId && (lT.skeleton = kT.getLastSkeletonById(TT.skeletonId), lT._waitingSkeletonId = TT.skeletonId, TT.numBoneInfluencers && (lT.numBoneInfluencers = TT.numBoneInfluencers)), void 0 !== TT.skeletonUniqueId && null !== TT.skeletonUniqueId && (lT._waitingSkeletonUniqueId = TT.skeletonUniqueId), TT.animations) {
          for (let kT = 0; kT < TT.animations.length; kT++) {
            const cT = TT.animations[kT],
              MT = (0, XT.e)("BABYLON.Animation");
            MT && lT.animations.push(MT.Parse(cT))
          }
          mT.b.ParseAnimationRanges(lT, TT, kT)
        }
        if (TT.autoAnimate && kT.beginAnimation(lT, TT.autoAnimateFrom, TT.autoAnimateTo, TT.autoAnimateLoop, TT.autoAnimateSpeed || 1), TT.layerMask && !isNaN(TT.layerMask) ? lT.layerMask = Math.abs(parseInt(TT.layerMask)) : lT.layerMask = 268435455, TT.physicsImpostor && (lT.physicsImpostor = iT._PhysicsImpostorParser(kT, lT, TT)), TT.lodMeshIds && (lT._waitingData.lods = {
            ids: TT.lodMeshIds,
            distances: TT.lodDistances ? TT.lodDistances : null,
            coverages: TT.lodCoverages ? TT.lodCoverages : null
          }), TT.instances)
          for (let KT = 0; KT < TT.instances.length; KT++) {
            const cT = TT.instances[KT],
              MT = lT.createInstance(cT.name);
            if (cT.id && (MT.id = cT.id), aT.b && (cT.tags ? aT.b.AddTagsTo(MT, cT.tags) : aT.b.AddTagsTo(MT, TT.tags)), MT.position = PT.m.FromArray(cT.position), void 0 !== cT.metadata && (MT.metadata = cT.metadata), void 0 !== cT.parentId && (MT._waitingParentId = cT.parentId), void 0 !== cT.parentInstanceIndex && (MT._waitingParentInstanceIndex = cT.parentInstanceIndex), void 0 !== cT.isEnabled && null !== cT.isEnabled && MT.PD(cT.isEnabled), void 0 !== cT.isVisible && null !== cT.isVisible && (MT.isVisible = cT.isVisible), void 0 !== cT.Vt && null !== cT.Vt && (MT.Vt = cT.Vt), cT.rotationQuaternion ? MT.rotationQuaternion = PT.f.FromArray(cT.rotationQuaternion) : cT.rotation && (MT.rotation = PT.m.FromArray(cT.rotation)), MT.GA = PT.m.FromArray(cT.GA), void 0 != cT.checkCollisions && null != cT.checkCollisions && (MT.checkCollisions = cT.checkCollisions), void 0 != cT.pickable && null != cT.pickable && (MT.Vt = cT.pickable), void 0 != cT.showBoundingBox && null != cT.showBoundingBox && (MT.showBoundingBox = cT.showBoundingBox), void 0 != cT.showSubMeshesBoundingBox && null != cT.showSubMeshesBoundingBox && (MT.showSubMeshesBoundingBox = cT.showSubMeshesBoundingBox), void 0 != cT.alphaIndex && null != cT.showSubMeshesBoundingBox && (MT.alphaIndex = cT.alphaIndex), cT.physicsImpostor && (MT.physicsImpostor = iT._PhysicsImpostorParser(kT, MT, cT)), void 0 !== cT.actions && (MT._waitingData.actions = cT.actions), cT.animations) {
              for (let TT = 0; TT < cT.animations.length; TT++) {
                const kT = cT.animations[TT],
                  lT = (0, XT.e)("BABYLON.Animation");
                lT && MT.animations.push(lT.Parse(kT))
              }
              mT.b.ParseAnimationRanges(MT, cT, kT), cT.autoAnimate && kT.beginAnimation(MT, cT.autoAnimateFrom, cT.autoAnimateTo, cT.autoAnimateLoop, cT.autoAnimateSpeed || 1)
            }
          }
        if (TT.thinInstances) {
          const kT = TT.thinInstances;
          if (lT.XTT = !!kT.enablePicking, kT.matrixData ? (lT.O4("matrix", new Float32Array(kT.matrixData), 16, !1), lT._thinInstanceDataStorage.matrixBufferSize = kT.matrixBufferSize, lT._thinInstanceDataStorage.instancesCount = kT.instancesCount) : lT._thinInstanceDataStorage.matrixBufferSize = kT.matrixBufferSize, TT.thinInstances.userThinInstance) {
            const kT = TT.thinInstances.userThinInstance;
            for (const TT in kT.data) lT.O4(TT, new Float32Array(kT.data[TT]), kT.strides[TT], !1), lT._userThinInstanceBuffersStorage.sizes[TT] = kT.sizes[TT]
          }
        }
        return lT
      }
      setPositionsForCPUSkinning() {
        const TT = this._internalMeshDataInfo;
        if (!TT._sourcePositions) {
          const kT = this.getVerticesData(bT.l.PositionKind);
          if (!kT) return TT._sourcePositions;
          TT._sourcePositions = new Float32Array(kT), this.isVertexBufferUpdatable(bT.l.PositionKind) || this.setVerticesData(bT.l.PositionKind, kT, !0)
        }
        return TT._sourcePositions
      }
      setNormalsForCPUSkinning() {
        const TT = this._internalMeshDataInfo;
        if (!TT._sourceNormals) {
          const kT = this.getVerticesData(bT.l.NormalKind);
          if (!kT) return TT._sourceNormals;
          TT._sourceNormals = new Float32Array(kT), this.isVertexBufferUpdatable(bT.l.NormalKind) || this.setVerticesData(bT.l.NormalKind, kT, !0)
        }
        return TT._sourceNormals
      }
      applySkeleton(TT) {
        if (!this.geometry) return this;
        if (this.geometry._softwareSkinningFrameId == this.NJ().getFrameId()) return this;
        if (this.geometry._softwareSkinningFrameId = this.NJ().getFrameId(), !this.isVerticesDataPresent(bT.l.PositionKind)) return this;
        if (!this.isVerticesDataPresent(bT.l.MatricesIndicesKind)) return this;
        if (!this.isVerticesDataPresent(bT.l.MatricesWeightsKind)) return this;
        const kT = this.isVerticesDataPresent(bT.l.NormalKind),
          cT = this._internalMeshDataInfo;
        if (!cT._sourcePositions) {
          const TT = this.kF.slice();
          this.setPositionsForCPUSkinning(), this.kF = TT
        }
        kT && !cT._sourceNormals && this.setNormalsForCPUSkinning();
        let lT = this.getVerticesData(bT.l.PositionKind);
        if (!lT) return this;
        lT instanceof Float32Array || (lT = new Float32Array(lT));
        let MT = this.getVerticesData(bT.l.NormalKind);
        if (kT) {
          if (!MT) return this;
          MT instanceof Float32Array || (MT = new Float32Array(MT))
        }
        const KT = this.getVerticesData(bT.l.MatricesIndicesKind),
          OT = this.getVerticesData(bT.l.MatricesWeightsKind);
        if (!OT || !KT) return this;
        const yT = this.numBoneInfluencers > 4,
          fT = yT ? this.getVerticesData(bT.l.MatricesIndicesExtraKind) : null,
          xT = yT ? this.getVerticesData(bT.l.MatricesWeightsExtraKind) : null,
          IT = TT.getTransformMatrices(this),
          AT = PT.m.Zero(),
          CT = new PT.d,
          jT = new PT.d;
        let vT, tT = 0;
        for (let hT = 0; hT < lT.length; hT += 3, tT += 4) {
          let TT;
          for (vT = 0; vT < 4; vT++) TT = OT[tT + vT], TT > 0 && (PT.d.FromFloat32ArrayToRefScaled(IT, Math.floor(16 * KT[tT + vT]), TT, jT), CT.addToSelf(jT));
          if (yT)
            for (vT = 0; vT < 4; vT++) TT = xT[tT + vT], TT > 0 && (PT.d.FromFloat32ArrayToRefScaled(IT, Math.floor(16 * fT[tT + vT]), TT, jT), CT.addToSelf(jT));
          PT.m.TransformCoordinatesFromFloatsToRef(cT._sourcePositions[hT], cT._sourcePositions[hT + 1], cT._sourcePositions[hT + 2], CT, AT), AT.toArray(lT, hT), kT && (PT.m.TransformNormalFromFloatsToRef(cT._sourceNormals[hT], cT._sourceNormals[hT + 1], cT._sourceNormals[hT + 2], CT, AT), AT.toArray(MT, hT)), CT.reset()
        }
        return this.updateVerticesData(bT.l.PositionKind, lT), kT && this.updateVerticesData(bT.l.NormalKind, MT), this
      }
      static MinMax(TT) {
        let kT = null,
          cT = null;
        for (const lT of TT) {
          const TT = lT.DH().boundingBox;
          kT && cT ? (kT.minimizeInPlace(TT.minimumWorld), cT.maximizeInPlace(TT.maximumWorld)) : (kT = TT.minimumWorld.clone(), cT = TT.maximumWorld.clone())
        }
        return kT && cT ? {
          min: kT,
          max: cT
        } : {
          min: PT.m.Zero(),
          max: PT.m.Zero()
        }
      }
      static Center(TT) {
        const kT = TT instanceof Array ? iT.MinMax(TT) : TT;
        return PT.m.Center(kT.min, kT.max)
      }
      static MergeMeshes(TT) {
        let kT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          cT = arguments.length > 2 ? arguments[2] : void 0,
          lT = arguments.length > 3 ? arguments[3] : void 0,
          MT = arguments.length > 4 ? arguments[4] : void 0,
          KT = arguments.length > 5 ? arguments[5] : void 0;
        return (0, FT.l)(iT._MergeMeshesCoroutine(TT, kT, cT, lT, MT, KT, !1))
      }
      static async MergeMeshesAsync(TT) {
        let kT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          cT = arguments.length > 2 ? arguments[2] : void 0,
          lT = arguments.length > 3 ? arguments[3] : void 0,
          MT = arguments.length > 4 ? arguments[4] : void 0,
          KT = arguments.length > 5 ? arguments[5] : void 0;
        return await (0, FT.i)(iT._MergeMeshesCoroutine(TT, kT, cT, lT, MT, KT, !0), (0, FT.e)())
      }
      static * _MergeMeshesCoroutine(TT) {
        let kT, cT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          lT = arguments.length > 2 ? arguments[2] : void 0,
          MT = arguments.length > 3 ? arguments[3] : void 0,
          KT = arguments.length > 4 ? arguments[4] : void 0,
          OT = arguments.length > 5 ? arguments[5] : void 0,
          yT = arguments.length > 6 ? arguments[6] : void 0;
        if (0 === (TT = TT.filter(Boolean)).length) return null;
        if (!lT) {
          let cT = 0;
          for (kT = 0; kT < TT.length; kT++)
            if (cT += TT[kT].getTotalVertices(), cT >= 65536) return uT.e.Warn("Cannot merge meshes because resulting mesh will have more than 65536 vertices. Please use allow32BitsIndices = true to use 32 bits indices"), null
        }
        const fT = TT[0];
        OT && (KT = !1, TT.sort(((TT, kT) => (TT.material?.uniqueId ?? -1) - (kT.material?.uniqueId ?? -1))));
        const xT = new Array,
          IT = new Array,
          AT = new Array,
          CT = TT[0].sideOrientation;
        for (kT = 0; kT < TT.length; kT++) {
          const cT = TT[kT];
          if (cT.aJ) return uT.e.Warn("Cannot merge instance meshes."), null;
          if (CT !== cT.sideOrientation) return uT.e.Warn("Cannot merge meshes with different sideOrientation values."), null;
          if (KT || OT) {
            const TT = AT.reduce(((TT, kT) => Math.max(TT, kT.start + kT.count)), 0);
            if (OT)
              if (cT.material) {
                const kT = cT.material;
                if (kT instanceof VT.c) {
                  for (let TT = 0; TT < kT.o4.length; TT++) xT.indexOf(kT.o4[TT]) < 0 && xT.push(kT.o4[TT]);
                  for (let lT = 0; lT < cT.kF.length; lT++) IT.push(xT.indexOf(kT.o4[cT.kF[lT].materialIndex])), AT.push({
                    start: TT + cT.kF[lT].indexStart,
                    count: cT.kF[lT].indexCount
                  })
                } else {
                  xT.indexOf(kT) < 0 && xT.push(kT);
                  for (let lT = 0; lT < cT.kF.length; lT++) IT.push(xT.indexOf(kT)), AT.push({
                    start: TT + cT.kF[lT].indexStart,
                    count: cT.kF[lT].indexCount
                  })
                }
              } else
                for (let kT = 0; kT < cT.kF.length; kT++) IT.push(0), AT.push({
                  start: TT + cT.kF[kT].indexStart,
                  count: cT.kF[kT].indexCount
                });
            else AT.push({
              start: TT,
              count: cT.getTotalIndices()
            })
          }
        }
        if (OT && AT.length > 1) {
          let TT = 0;
          for (let kT = 1; kT < AT.length; kT++) {
            const cT = AT[TT],
              lT = AT[kT];
            IT[kT] === IT[TT] && cT.start + cT.count === lT.start ? cT.count += lT.count : (TT++, AT[TT] = lT, IT[TT] = IT[kT])
          }
          AT.length = TT + 1, IT.length = TT + 1
        }
        const jT = TT => {
            const kT = TT.computeWorldMatrix(!0);
            return {
              vertexData: zT.d.ExtractFromMesh(TT, !1, !1),
              transform: kT
            }
          },
          {
            vertexData: vT,
            transform: tT
          } = jT(TT[0]);
        yT && (yield);
        const hT = new Array(TT.length - 1);
        for (let FT = 1; FT < TT.length; FT++) hT[FT - 1] = jT(TT[FT]), yT && (yield);
        const NT = vT._mergeCoroutine(tT, hT, lT, yT, !cT);
        let QT = NT.next();
        for (; !QT.done;) yT && (yield), QT = NT.next();
        const ST = QT.value;
        MT || (MT = new iT(fT.name + "_merged", fT.NJ()));
        const DT = ST._applyToCoroutine(MT, void 0, yT);
        let aT = DT.next();
        for (; !aT.done;) yT && (yield), aT = DT.next();
        if (MT.checkCollisions = fT.checkCollisions, MT.sideOrientation = fT.sideOrientation, cT)
          for (kT = 0; kT < TT.length; kT++) TT[kT].dispose();
        if (KT || OT) {
          for (MT.releaseSubMeshes(), kT = 0; kT < AT.length;) HT.c.CreateFromIndices(0, AT[kT].start, AT[kT].count, MT, void 0, !1), kT++;
          for (const TT of MT.kF) TT.refreshBoundingInfo();
          MT.computeWorldMatrix(!0)
        }
        if (OT) {
          const TT = new VT.c(fT.name + "_merged", fT.NJ());
          TT.o4 = xT;
          for (let kT = 0; kT < MT.kF.length; kT++) MT.kF[kT].materialIndex = IT[kT];
          MT.material = TT
        } else MT.material = fT.material;
        return MT
      }
      K3(TT) {
        TT._indexInSourceMeshInstanceArray = this.instances.length, this.instances.push(TT)
      }
      o3(TT) {
        const kT = TT._indexInSourceMeshInstanceArray;
        if (-1 != kT) {
          if (kT !== this.instances.length - 1) {
            const TT = this.instances[this.instances.length - 1];
            this.instances[kT] = TT, TT._indexInSourceMeshInstanceArray = kT
          }
          TT._indexInSourceMeshInstanceArray = -1, this.instances.pop()
        }
      }
      _shouldConvertRHS() {
        return this._scene.useRightHandedSystem && this.sideOrientation === eT.e.CounterClockWiseSideOrientation
      }
      _getRenderingFillMode(TT) {
        const kT = this.NJ();
        return kT.forcePointsCloud ? eT.e.PointFillMode : kT.forceWireframe ? eT.e.WireFrameFillMode : this.overrideRenderingFillMode ?? TT
      }
      setMaterialByID(TT) {
        return this.setMaterialById(TT)
      }
      static CreateRibbon(TT, kT, cT, lT, MT, KT, OT, yT, fT) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDisc(TT, kT, cT, lT, MT, KT) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateBox(TT, kT, cT, lT, MT) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateSphere(TT, kT, cT, lT, MT, KT) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateHemisphere(TT, kT, cT, lT) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateCylinder(TT, kT, cT, lT, MT, KT, OT, yT, fT) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTorus(TT, kT, cT, lT, MT, KT, OT) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTorusKnot(TT, kT, cT, lT, MT, KT, OT, yT, fT, xT) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateLines(TT, kT, cT, lT, MT) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDashedLines(TT, kT, cT, lT, MT, KT, OT, yT) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePolygon(TT, kT, cT, lT, MT, KT, OT) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudePolygon(TT, kT, cT, lT, MT, KT, OT, yT) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudeShape(TT, kT, cT, lT, MT, KT, OT, yT, fT, xT) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudeShapeCustom(TT, kT, cT, lT, MT, KT, OT, yT, fT, xT, IT, AT) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateLathe(TT, kT, cT, lT, MT, KT, OT) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePlane(TT, kT, cT, lT, MT) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateGround(TT, kT, cT, lT, MT, KT) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTiledGround(TT, kT, cT, lT, MT, KT, OT, yT, fT) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateGroundFromHeightMap(TT, kT, cT, lT, MT, KT, OT, yT, fT, xT, IT) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTube(TT, kT, cT, lT, MT, KT, OT, yT, fT, xT) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePolyhedron(TT, kT, cT) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateIcoSphere(TT, kT, cT) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDecal(TT, kT, cT, lT, MT, KT) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateCapsule(TT, kT, cT) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtendToGoldberg(TT) {
        throw new Error("Import MeshBuilder to populate this function")
      }
    }
    iT.FRONTSIDE = zT.d.FRONTSIDE, iT.BACKSIDE = zT.d.BACKSIDE, iT.DOUBLESIDE = zT.d.DOUBLESIDE, iT.DEFAULTSIDE = zT.d.DEFAULTSIDE, iT.NO_CAP = 0, iT.CAP_START = 1, iT.CAP_END = 2, iT.CAP_ALL = 3, iT.NO_FLIP = 0, iT.FLIP_TILE = 1, iT.ROTATE_TILE = 2, iT.FLIP_ROW = 3, iT.ROTATE_ROW = 4, iT.FLIP_N_ROTATE_TILE = 5, iT.FLIP_N_ROTATE_ROW = 6, iT.CENTER = 0, iT.LEFT = 1, iT.RIGHT = 2, iT.TOP = 3, iT.BOTTOM = 4, iT.INSTANCEDMESH_SORT_TRANSPARENT = !1, iT._GroundMeshParser = (TT, kT) => {
      throw (0, dT.i)("GroundMesh")
    }, iT._GoldbergMeshParser = (TT, kT) => {
      throw (0, dT.i)("GoldbergMesh")
    }, iT._LinesMeshParser = (TT, kT) => {
      throw (0, dT.i)("LinesMesh")
    }, iT._GreasedLineMeshParser = (TT, kT) => {
      throw (0, dT.i)("GreasedLineMesh")
    }, iT._GreasedLineRibbonMeshParser = (TT, kT) => {
      throw (0, dT.i)("GreasedLineRibbonMesh")
    }, iT._TrailMeshParser = (TT, kT) => {
      throw (0, dT.i)("TrailMesh")
    }, iT._GaussianSplattingMeshParser = (TT, kT) => {
      throw (0, dT.i)("GaussianSplattingMesh")
    }, iT._GaussianSplattingPartProxyMeshParser = (TT, kT) => {
      throw (0, dT.i)("GaussianSplattingPartProxyMesh")
    }, iT._GaussianSplattingCompoundMeshParser = (TT, kT) => {
      throw (0, dT.i)("GaussianSplattingCompoundMesh")
    };
    let qT = !1;

    function sT() {
      qT || (qT = !0, (0, XT.g)("BABYLON.Mesh", iT))
    }(lT = iT.prototype).lH ?? (lT.lH = (0, dT.f)("Mesh", "lH")), (MT = iT.prototype).simplify ?? (MT.simplify = (0, dT.f)("Mesh", "simplify")), (KT = iT.prototype).thinInstanceAdd ?? (KT.thinInstanceAdd = (0, dT.f)("Mesh", "thinInstanceAdd")), (OT = iT.prototype).thinInstanceAddSelf ?? (OT.thinInstanceAddSelf = (0, dT.f)("Mesh", "thinInstanceAddSelf")), (yT = iT.prototype).thinInstanceRegisterAttribute ?? (yT.thinInstanceRegisterAttribute = (0, dT.f)("Mesh", "thinInstanceRegisterAttribute")), (fT = iT.prototype).thinInstanceSetMatrixAt ?? (fT.thinInstanceSetMatrixAt = (0, dT.f)("Mesh", "thinInstanceSetMatrixAt")), (xT = iT.prototype).thinInstanceSetAttributeAt ?? (xT.thinInstanceSetAttributeAt = (0, dT.f)("Mesh", "thinInstanceSetAttributeAt")), (IT = iT.prototype).O4 ?? (IT.O4 = (0, dT.f)("Mesh", "O4")), (AT = iT.prototype).thinInstanceGetWorldMatrices ?? (AT.thinInstanceGetWorldMatrices = (0, dT.f)("Mesh", "thinInstanceGetWorldMatrices")), (CT = iT.prototype).Q0 ?? (CT.Q0 = (0, dT.f)("Mesh", "Q0")), (jT = iT.prototype).thinInstancePartialBufferUpdate ?? (jT.thinInstancePartialBufferUpdate = (0, dT.f)("Mesh", "thinInstancePartialBufferUpdate")), (vT = iT.prototype).thinInstanceRefreshBoundingInfo ?? (vT.thinInstanceRefreshBoundingInfo = (0, dT.f)("Mesh", "thinInstanceRefreshBoundingInfo")), (tT = iT.prototype).getEmittedParticleSystems ?? (tT.getEmittedParticleSystems = (0, dT.f)("Mesh", "getEmittedParticleSystems")), (hT = iT.prototype).getHierarchyEmittedParticleSystems ?? (hT.getHierarchyEmittedParticleSystems = (0, dT.f)("Mesh", "getHierarchyEmittedParticleSystems")), Object.getOwnPropertyDescriptor(iT.prototype, "edgesShareWithInstances") || Object.defineProperty(iT.prototype, "edgesShareWithInstances", (0, dT.d)("Mesh", "edgesShareWithInstances")), Object.getOwnPropertyDescriptor(iT.prototype, "XTT") || Object.defineProperty(iT.prototype, "XTT", (0, dT.d)("Mesh", "XTT")), Object.getOwnPropertyDescriptor(iT.prototype, "thinInstanceAllowAutomaticStaticBufferRecreation") || Object.defineProperty(iT.prototype, "thinInstanceAllowAutomaticStaticBufferRecreation", (0, dT.d)("Mesh", "thinInstanceAllowAutomaticStaticBufferRecreation")), Object.getOwnPropertyDescriptor(iT.prototype, "w6") || Object.defineProperty(iT.prototype, "w6", (0, dT.d)("Mesh", "w6"))
  },
  40038: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => vT
    });
    var lT = cT(39620),
      MT = cT(36892),
      KT = cT(39782),
      OT = cT(39500),
      yT = cT(37093),
      fT = cT(38512),
      xT = cT(39624),
      IT = cT(40030),
      AT = cT(39683),
      CT = cT(39917);
    class jT {}
    let vT = (() => {
      var TT;
      let kT, cT, vT, tT, hT = [];
      return TT = class {
        constructor() {
          this.uniqueId = 0, this.metadata = {}, this._applyTo = (0, IT.g)(this._applyToCoroutine.bind(this)), this.uniqueId = TT._UniqueIdGenerator, TT._UniqueIdGenerator++
        }
        set(TT, kT) {
          switch (TT.length || fT.e.Warn(`Setting vertex data kind '${kT}' with an empty array`), kT) {
            case KT.l.PositionKind:
              this.positions = TT;
              break;
            case KT.l.NormalKind:
              this.normals = TT;
              break;
            case KT.l.TangentKind:
              this.tangents = TT;
              break;
            case KT.l.UVKind:
              this.uvs = TT;
              break;
            case KT.l.UV2Kind:
              this.uvs2 = TT;
              break;
            case KT.l.UV3Kind:
              this.uvs3 = TT;
              break;
            case KT.l.UV4Kind:
              this.uvs4 = TT;
              break;
            case KT.l.UV5Kind:
              this.uvs5 = TT;
              break;
            case KT.l.UV6Kind:
              this.uvs6 = TT;
              break;
            case KT.l.ColorKind:
              this.colors = TT;
              break;
            case KT.l.MatricesIndicesKind:
              this.matricesIndices = TT;
              break;
            case KT.l.MatricesWeightsKind:
              this.matricesWeights = TT;
              break;
            case KT.l.MatricesIndicesExtraKind:
              this.matricesIndicesExtra = TT;
              break;
            case KT.l.MatricesWeightsExtraKind:
              this.matricesWeightsExtra = TT
          }
        }
        applyToMesh(TT, kT) {
          return this._applyTo(TT, kT, !1), this
        }
        applyToGeometry(TT, kT) {
          return this._applyTo(TT, kT, !1), this
        }
        updateMesh(TT) {
          return this._update(TT), this
        }
        updateGeometry(TT) {
          return this._update(TT), this
        }* _applyToCoroutine(TT) {
          let kT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            cT = arguments.length > 2 ? arguments[2] : void 0;
          if (this.positions && (TT.setVerticesData(KT.l.PositionKind, this.positions, kT), cT && (yield)), this.normals && (TT.setVerticesData(KT.l.NormalKind, this.normals, kT), cT && (yield)), this.tangents && (TT.setVerticesData(KT.l.TangentKind, this.tangents, kT), cT && (yield)), this.uvs && (TT.setVerticesData(KT.l.UVKind, this.uvs, kT), cT && (yield)), this.uvs2 && (TT.setVerticesData(KT.l.UV2Kind, this.uvs2, kT), cT && (yield)), this.uvs3 && (TT.setVerticesData(KT.l.UV3Kind, this.uvs3, kT), cT && (yield)), this.uvs4 && (TT.setVerticesData(KT.l.UV4Kind, this.uvs4, kT), cT && (yield)), this.uvs5 && (TT.setVerticesData(KT.l.UV5Kind, this.uvs5, kT), cT && (yield)), this.uvs6 && (TT.setVerticesData(KT.l.UV6Kind, this.uvs6, kT), cT && (yield)), this.colors) {
            const lT = this.positions && this.colors.length === this.positions.length ? 3 : 4;
            TT.setVerticesData(KT.l.ColorKind, this.colors, kT, lT), this.hasVertexAlpha && void 0 !== TT.hasVertexAlpha && (TT.hasVertexAlpha = !0), cT && (yield)
          }
          if (this.matricesIndices && (TT.setVerticesData(KT.l.MatricesIndicesKind, this.matricesIndices, kT), cT && (yield)), this.matricesWeights && (TT.setVerticesData(KT.l.MatricesWeightsKind, this.matricesWeights, kT), cT && (yield)), this.matricesIndicesExtra && (TT.setVerticesData(KT.l.MatricesIndicesExtraKind, this.matricesIndicesExtra, kT), cT && (yield)), this.matricesWeightsExtra && (TT.setVerticesData(KT.l.MatricesWeightsExtraKind, this.matricesWeightsExtra, kT), cT && (yield)), this.indices ? (TT.setIndices(this.indices, null, kT), cT && (yield)) : TT.setIndices([], null), TT.kF && this.materialInfos && this.materialInfos.length > 1) {
            const kT = TT;
            kT.kF = [];
            for (const TT of this.materialInfos) new CT.c(TT.materialIndex, TT.verticesStart, TT.verticesCount, TT.indexStart, TT.indexCount, kT)
          }
          return this
        }
        _update(TT, kT, cT) {
          return this.positions && TT.updateVerticesData(KT.l.PositionKind, this.positions, kT, cT), this.normals && TT.updateVerticesData(KT.l.NormalKind, this.normals, kT, cT), this.tangents && TT.updateVerticesData(KT.l.TangentKind, this.tangents, kT, cT), this.uvs && TT.updateVerticesData(KT.l.UVKind, this.uvs, kT, cT), this.uvs2 && TT.updateVerticesData(KT.l.UV2Kind, this.uvs2, kT, cT), this.uvs3 && TT.updateVerticesData(KT.l.UV3Kind, this.uvs3, kT, cT), this.uvs4 && TT.updateVerticesData(KT.l.UV4Kind, this.uvs4, kT, cT), this.uvs5 && TT.updateVerticesData(KT.l.UV5Kind, this.uvs5, kT, cT), this.uvs6 && TT.updateVerticesData(KT.l.UV6Kind, this.uvs6, kT, cT), this.colors && TT.updateVerticesData(KT.l.ColorKind, this.colors, kT, cT), this.matricesIndices && TT.updateVerticesData(KT.l.MatricesIndicesKind, this.matricesIndices, kT, cT), this.matricesWeights && TT.updateVerticesData(KT.l.MatricesWeightsKind, this.matricesWeights, kT, cT), this.matricesIndicesExtra && TT.updateVerticesData(KT.l.MatricesIndicesExtraKind, this.matricesIndicesExtra, kT, cT), this.matricesWeightsExtra && TT.updateVerticesData(KT.l.MatricesWeightsExtraKind, this.matricesWeightsExtra, kT, cT), this.indices && TT.setIndices(this.indices, null), this
        }
        static _TransformVector3Coordinates(TT, kT) {
          let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            lT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : TT.length;
          const KT = MT.h.Fv[0],
            OT = MT.h.Fv[1];
          for (let yT = cT; yT < cT + lT; yT += 3) MT.m.FromArrayToRef(TT, yT, KT), MT.m.TransformCoordinatesToRef(KT, kT, OT), TT[yT] = OT.x, TT[yT + 1] = OT.y, TT[yT + 2] = OT.z
        }
        static _TransformVector3Normals(TT, kT) {
          let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            lT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : TT.length;
          const KT = MT.h.Fv[0],
            OT = MT.h.Fv[1];
          for (let yT = cT; yT < cT + lT; yT += 3) MT.m.FromArrayToRef(TT, yT, KT), MT.m.TransformNormalToRef(KT, kT, OT), TT[yT] = OT.x, TT[yT + 1] = OT.y, TT[yT + 2] = OT.z
        }
        static _TransformVector4Normals(TT, kT) {
          let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            lT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : TT.length;
          const KT = MT.h.Vector4[0],
            OT = MT.h.Vector4[1];
          for (let yT = cT; yT < cT + lT; yT += 4) MT.o.FromArrayToRef(TT, yT, KT), MT.o.TransformNormalToRef(KT, kT, OT), TT[yT] = OT.x, TT[yT + 1] = OT.y, TT[yT + 2] = OT.z, TT[yT + 3] = OT.w
        }
        static _FlipFaces(TT) {
          let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : TT.length;
          for (let lT = kT; lT < kT + cT; lT += 3) {
            const kT = TT[lT + 1];
            TT[lT + 1] = TT[lT + 2], TT[lT + 2] = kT
          }
        }
        transform(kT) {
          const cT = kT.determinant() < 0;
          return this.positions && TT._TransformVector3Coordinates(this.positions, kT), this.normals && TT._TransformVector3Normals(this.normals, kT), this.tangents && TT._TransformVector4Normals(this.tangents, kT), cT && this.indices && TT._FlipFaces(this.indices), this
        }
        splitBasedOnMaterialID() {
          if (!this.materialInfos || this.materialInfos.length < 2) return [this];
          const kT = [];
          for (const cT of this.materialInfos) {
            const lT = new TT;
            if (this.positions && (lT.positions = this.positions.slice(3 * cT.verticesStart, 3 * (cT.verticesCount + cT.verticesStart))), this.normals && (lT.normals = this.normals.slice(3 * cT.verticesStart, 3 * (cT.verticesCount + cT.verticesStart))), this.tangents && (lT.tangents = this.tangents.slice(4 * cT.verticesStart, 4 * (cT.verticesCount + cT.verticesStart))), this.colors && (lT.colors = this.colors.slice(4 * cT.verticesStart, 4 * (cT.verticesCount + cT.verticesStart))), this.uvs && (lT.uvs = this.uvs.slice(2 * cT.verticesStart, 2 * (cT.verticesCount + cT.verticesStart))), this.uvs2 && (lT.uvs2 = this.uvs2.slice(2 * cT.verticesStart, 2 * (cT.verticesCount + cT.verticesStart))), this.uvs3 && (lT.uvs3 = this.uvs3.slice(2 * cT.verticesStart, 2 * (cT.verticesCount + cT.verticesStart))), this.uvs4 && (lT.uvs4 = this.uvs4.slice(2 * cT.verticesStart, 2 * (cT.verticesCount + cT.verticesStart))), this.uvs5 && (lT.uvs5 = this.uvs5.slice(2 * cT.verticesStart, 2 * (cT.verticesCount + cT.verticesStart))), this.uvs6 && (lT.uvs6 = this.uvs6.slice(2 * cT.verticesStart, 2 * (cT.verticesCount + cT.verticesStart))), this.matricesIndices && (lT.matricesIndices = this.matricesIndices.slice(4 * cT.verticesStart, 4 * (cT.verticesCount + cT.verticesStart))), this.matricesIndicesExtra && (lT.matricesIndicesExtra = this.matricesIndicesExtra.slice(4 * cT.verticesStart, 4 * (cT.verticesCount + cT.verticesStart))), this.matricesWeights && (lT.matricesWeights = this.matricesWeights.slice(4 * cT.verticesStart, 4 * (cT.verticesCount + cT.verticesStart))), this.matricesWeightsExtra && (lT.matricesWeightsExtra = this.matricesWeightsExtra.slice(4 * cT.verticesStart, 4 * (cT.verticesCount + cT.verticesStart))), this.indices) {
              lT.indices = [];
              for (let TT = cT.indexStart; TT < cT.indexStart + cT.indexCount; TT++) lT.indices.push(this.indices[TT] - cT.verticesStart)
            }
            const MT = new jT;
            MT.indexStart = 0, MT.indexCount = lT.indices ? lT.indices.length : 0, MT.materialIndex = cT.materialIndex, MT.verticesStart = 0, MT.verticesCount = (lT.positions ? lT.positions.length : 0) / 3, lT.materialInfos = [MT], kT.push(lT)
          }
          return kT
        }
        merge(TT) {
          let kT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            cT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            lT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            MT = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
          const KT = Array.isArray(TT) ? TT.map((TT => ({
            vertexData: TT
          }))) : [{
            vertexData: TT
          }];
          return (0, IT.l)(this._mergeCoroutine(void 0, KT, kT, !1, cT, lT, MT))
        }* _mergeCoroutine(kT, cT) {
          let lT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            MT = arguments.length > 3 ? arguments[3] : void 0,
            OT = arguments.length > 4 ? arguments[4] : void 0,
            yT = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
            fT = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
          this._validate();
          let xT = cT.map((TT => TT.vertexData)),
            IT = this;
          if (fT)
            for (const TT of xT) TT && (TT._validate(), !this.normals && TT.normals && (this.normals = new Float32Array(this.positions.length)), !this.tangents && TT.tangents && (this.tangents = new Float32Array(this.positions.length / 3 * 4)), !this.uvs && TT.uvs && (this.uvs = new Float32Array(this.positions.length / 3 * 2)), !this.uvs2 && TT.uvs2 && (this.uvs2 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs3 && TT.uvs3 && (this.uvs3 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs4 && TT.uvs4 && (this.uvs4 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs5 && TT.uvs5 && (this.uvs5 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs6 && TT.uvs6 && (this.uvs6 = new Float32Array(this.positions.length / 3 * 2)), !this.colors && TT.colors && (this.colors = new Float32Array(this.positions.length / 3 * 4), this.colors.fill(1)), !this.matricesIndices && TT.matricesIndices && (this.matricesIndices = new Float32Array(this.positions.length / 3 * 4)), !this.matricesWeights && TT.matricesWeights && (this.matricesWeights = new Float32Array(this.positions.length / 3 * 4)), !this.matricesIndicesExtra && TT.matricesIndicesExtra && (this.matricesIndicesExtra = new Float32Array(this.positions.length / 3 * 4)), !this.matricesWeightsExtra && TT.matricesWeightsExtra && (this.matricesWeightsExtra = new Float32Array(this.positions.length / 3 * 4)));
          for (const TT of xT)
            if (TT)
              if (fT) this.normals && !TT.normals && (TT.normals = new Float32Array(TT.positions.length)), this.tangents && !TT.tangents && (TT.tangents = new Float32Array(TT.positions.length / 3 * 4)), this.uvs && !TT.uvs && (TT.uvs = new Float32Array(TT.positions.length / 3 * 2)), this.uvs2 && !TT.uvs2 && (TT.uvs2 = new Float32Array(TT.positions.length / 3 * 2)), this.uvs3 && !TT.uvs3 && (TT.uvs3 = new Float32Array(TT.positions.length / 3 * 2)), this.uvs4 && !TT.uvs4 && (TT.uvs4 = new Float32Array(TT.positions.length / 3 * 2)), this.uvs5 && !TT.uvs5 && (TT.uvs5 = new Float32Array(TT.positions.length / 3 * 2)), this.uvs6 && !TT.uvs6 && (TT.uvs6 = new Float32Array(TT.positions.length / 3 * 2)), this.colors && !TT.colors && (TT.colors = new Float32Array(TT.positions.length / 3 * 4), TT.colors.fill(1)), this.matricesIndices && !TT.matricesIndices && (TT.matricesIndices = new Float32Array(TT.positions.length / 3 * 4)), this.matricesWeights && !TT.matricesWeights && (TT.matricesWeights = new Float32Array(TT.positions.length / 3 * 4)), this.matricesIndicesExtra && !TT.matricesIndicesExtra && (TT.matricesIndicesExtra = new Float32Array(TT.positions.length / 3 * 4)), this.matricesWeightsExtra && !TT.matricesWeightsExtra && (TT.matricesWeightsExtra = new Float32Array(TT.positions.length / 3 * 4));
              else if (TT._validate(), !this.normals !== !TT.normals || !this.tangents !== !TT.tangents || !this.uvs !== !TT.uvs || !this.uvs2 !== !TT.uvs2 || !this.uvs3 !== !TT.uvs3 || !this.uvs4 !== !TT.uvs4 || !this.uvs5 !== !TT.uvs5 || !this.uvs6 !== !TT.uvs6 || !this.colors !== !TT.colors || !this.matricesIndices !== !TT.matricesIndices || !this.matricesWeights !== !TT.matricesWeights || !this.matricesIndicesExtra !== !TT.matricesIndicesExtra || !this.matricesWeightsExtra !== !TT.matricesWeightsExtra) throw new Error("Cannot merge vertex data that do not have the same set of attributes");
          if (yT) {
            let TT, lT = 0,
              MT = 0;
            const KT = [];
            let OT = null;
            const yT = [];
            for (const cT of this.splitBasedOnMaterialID()) yT.push({
              vertexData: cT,
              transform: kT
            });
            for (const kT of cT)
              if (kT.vertexData)
                for (const TT of kT.vertexData.splitBasedOnMaterialID()) yT.push({
                  vertexData: TT,
                  transform: kT.transform
                });
            yT.sort(((TT, kT) => {
              const cT = TT.vertexData.materialInfos ? TT.vertexData.materialInfos[0].materialIndex : 0,
                lT = kT.vertexData.materialInfos ? kT.vertexData.materialInfos[0].materialIndex : 0;
              return cT > lT ? 1 : cT === lT ? 0 : -1
            }));
            for (const kT of yT) {
              const cT = kT.vertexData;
              if (TT = cT.materialInfos ? cT.materialInfos[0].materialIndex : 0, OT && OT.materialIndex === TT) OT.indexCount += cT.indices.length, OT.verticesCount += cT.positions.length / 3;
              else {
                const kT = new jT;
                kT.materialIndex = TT, kT.indexStart = lT, kT.indexCount = cT.indices.length, kT.verticesStart = MT, kT.verticesCount = cT.positions.length / 3, KT.push(kT), OT = kT
              }
              lT += cT.indices.length, MT += cT.positions.length / 3
            }
            const fT = yT.splice(0, 1)[0];
            IT = fT.vertexData, kT = fT.transform, xT = yT.map((TT => TT.vertexData)), cT = yT, this.materialInfos = KT
          }
          const AT = xT.reduce(((TT, kT) => TT + (kT.indices?.length ?? 0)), IT.indices?.length ?? 0);
          let CT = OT || xT.some((TT => TT.indices === IT.indices)) ? IT.indices?.slice() : IT.indices;
          if (AT > 0) {
            let KT = CT?.length ?? 0;
            if (CT || (CT = new Array(AT)), CT.length !== AT) {
              if (Array.isArray(CT)) CT.length = AT;
              else {
                const TT = lT || CT instanceof Uint32Array ? new Uint32Array(AT) : new Uint16Array(AT);
                TT.set(CT), CT = TT
              }
              kT && kT.determinant() < 0 && TT._FlipFaces(CT, 0, KT)
            }
            let OT = IT.positions ? IT.positions.length / 3 : 0;
            for (const {
                vertexData: kT,
                transform: lT
              }
              of cT)
              if (kT.indices) {
                for (let TT = 0; TT < kT.indices.length; TT++) CT[KT + TT] = kT.indices[TT] + OT;
                lT && lT.determinant() < 0 && TT._FlipFaces(CT, KT, kT.indices.length), OT += kT.positions.length / 3, KT += kT.indices.length, MT && (yield)
              }
          }
          return this.indices = CT, this.positions = TT._MergeElement(KT.l.PositionKind, IT.positions, kT, cT.map((TT => [TT.vertexData.positions, TT.transform]))), MT && (yield), IT.normals && (this.normals = TT._MergeElement(KT.l.NormalKind, IT.normals, kT, cT.map((TT => [TT.vertexData.normals, TT.transform]))), MT && (yield)), IT.tangents && (this.tangents = TT._MergeElement(KT.l.TangentKind, IT.tangents, kT, cT.map((TT => [TT.vertexData.tangents, TT.transform]))), MT && (yield)), IT.uvs && (this.uvs = TT._MergeElement(KT.l.UVKind, IT.uvs, kT, cT.map((TT => [TT.vertexData.uvs, TT.transform]))), MT && (yield)), IT.uvs2 && (this.uvs2 = TT._MergeElement(KT.l.UV2Kind, IT.uvs2, kT, cT.map((TT => [TT.vertexData.uvs2, TT.transform]))), MT && (yield)), IT.uvs3 && (this.uvs3 = TT._MergeElement(KT.l.UV3Kind, IT.uvs3, kT, cT.map((TT => [TT.vertexData.uvs3, TT.transform]))), MT && (yield)), IT.uvs4 && (this.uvs4 = TT._MergeElement(KT.l.UV4Kind, IT.uvs4, kT, cT.map((TT => [TT.vertexData.uvs4, TT.transform]))), MT && (yield)), IT.uvs5 && (this.uvs5 = TT._MergeElement(KT.l.UV5Kind, IT.uvs5, kT, cT.map((TT => [TT.vertexData.uvs5, TT.transform]))), MT && (yield)), IT.uvs6 && (this.uvs6 = TT._MergeElement(KT.l.UV6Kind, IT.uvs6, kT, cT.map((TT => [TT.vertexData.uvs6, TT.transform]))), MT && (yield)), IT.colors && (this.colors = TT._MergeElement(KT.l.ColorKind, IT.colors, kT, cT.map((TT => [TT.vertexData.colors, TT.transform]))), (void 0 !== IT.hasVertexAlpha || cT.some((TT => void 0 !== TT.vertexData.hasVertexAlpha))) && (this.hasVertexAlpha = IT.hasVertexAlpha || cT.some((TT => TT.vertexData.hasVertexAlpha))), MT && (yield)), IT.matricesIndices && (this.matricesIndices = TT._MergeElement(KT.l.MatricesIndicesKind, IT.matricesIndices, kT, cT.map((TT => [TT.vertexData.matricesIndices, TT.transform]))), MT && (yield)), IT.matricesWeights && (this.matricesWeights = TT._MergeElement(KT.l.MatricesWeightsKind, IT.matricesWeights, kT, cT.map((TT => [TT.vertexData.matricesWeights, TT.transform]))), MT && (yield)), IT.matricesIndicesExtra && (this.matricesIndicesExtra = TT._MergeElement(KT.l.MatricesIndicesExtraKind, IT.matricesIndicesExtra, kT, cT.map((TT => [TT.vertexData.matricesIndicesExtra, TT.transform]))), MT && (yield)), IT.matricesWeightsExtra && (this.matricesWeightsExtra = TT._MergeElement(KT.l.MatricesWeightsExtraKind, IT.matricesWeightsExtra, kT, cT.map((TT => [TT.vertexData.matricesWeightsExtra, TT.transform])))), this
        }
        static _MergeElement(kT, cT, lT, MT) {
          const OT = MT.filter((TT => null !== TT[0] && void 0 !== TT[0]));
          if (!cT && 0 == OT.length) return cT;
          if (!cT) return this._MergeElement(kT, OT[0][0], OT[0][1], OT.slice(1));
          const yT = OT.reduce(((TT, kT) => TT + kT[0].length), cT.length),
            fT = kT === KT.l.PositionKind ? TT._TransformVector3Coordinates : kT === KT.l.NormalKind ? TT._TransformVector3Normals : kT === KT.l.TangentKind ? TT._TransformVector4Normals : () => {};
          if (cT instanceof Float32Array) {
            const TT = new Float32Array(yT);
            TT.set(cT), lT && fT(TT, lT, 0, cT.length);
            let kT = cT.length;
            for (const [cT, lT] of OT) TT.set(cT, kT), lT && fT(TT, lT, kT, cT.length), kT += cT.length;
            return TT
          } {
            const TT = new Array(yT);
            for (let lT = 0; lT < cT.length; lT++) TT[lT] = cT[lT];
            lT && fT(TT, lT, 0, cT.length);
            let kT = cT.length;
            for (const [cT, lT] of OT) {
              for (let lT = 0; lT < cT.length; lT++) TT[kT + lT] = cT[lT];
              lT && fT(TT, lT, kT, cT.length), kT += cT.length
            }
            return TT
          }
        }
        _validate() {
          if (!this.positions) throw new AT.h("Positions are required", AT.f.MeshInvalidPositionsError);
          const TT = (TT, kT) => {
              const cT = (0, KT.k)(TT);
              if (kT.length % cT !== 0) throw new Error("The " + TT + "s array count must be a multiple of " + cT);
              return kT.length / cT
            },
            kT = TT(KT.l.PositionKind, this.positions),
            cT = (cT, lT) => {
              const MT = TT(cT, lT);
              if (MT !== kT) throw new Error("The " + cT + "s element count (" + MT + ") does not match the positions count (" + kT + ")")
            };
          this.normals && cT(KT.l.NormalKind, this.normals), this.tangents && cT(KT.l.TangentKind, this.tangents), this.uvs && cT(KT.l.UVKind, this.uvs), this.uvs2 && cT(KT.l.UV2Kind, this.uvs2), this.uvs3 && cT(KT.l.UV3Kind, this.uvs3), this.uvs4 && cT(KT.l.UV4Kind, this.uvs4), this.uvs5 && cT(KT.l.UV5Kind, this.uvs5), this.uvs6 && cT(KT.l.UV6Kind, this.uvs6), this.colors && cT(KT.l.ColorKind, this.colors), this.matricesIndices && cT(KT.l.MatricesIndicesKind, this.matricesIndices), this.matricesWeights && cT(KT.l.MatricesWeightsKind, this.matricesWeights), this.matricesIndicesExtra && cT(KT.l.MatricesIndicesExtraKind, this.matricesIndicesExtra), this.matricesWeightsExtra && cT(KT.l.MatricesWeightsExtraKind, this.matricesWeightsExtra)
        }
        clone() {
          const kT = this.serialize();
          return TT.Parse(kT)
        }
        serialize() {
          const TT = {};
          if (this.positions && (TT.positions = Array.from(this.positions)), this.normals && (TT.normals = Array.from(this.normals)), this.tangents && (TT.tangents = Array.from(this.tangents)), this.uvs && (TT.uvs = Array.from(this.uvs)), this.uvs2 && (TT.uvs2 = Array.from(this.uvs2)), this.uvs3 && (TT.uvs3 = Array.from(this.uvs3)), this.uvs4 && (TT.uvs4 = Array.from(this.uvs4)), this.uvs5 && (TT.uvs5 = Array.from(this.uvs5)), this.uvs6 && (TT.uvs6 = Array.from(this.uvs6)), this.colors && (TT.colors = Array.from(this.colors), TT.hasVertexAlpha = this.hasVertexAlpha), this.matricesIndices && (TT.matricesIndices = Array.from(this.matricesIndices), TT.matricesIndicesExpanded = !0), this.matricesWeights && (TT.matricesWeights = Array.from(this.matricesWeights)), this.matricesIndicesExtra && (TT.matricesIndicesExtra = Array.from(this.matricesIndicesExtra), TT.matricesIndicesExtraExpanded = !0), this.matricesWeightsExtra && (TT.matricesWeightsExtra = Array.from(this.matricesWeightsExtra)), TT.indices = this.indices ? Array.from(this.indices) : [], this.materialInfos) {
            TT.materialInfos = [];
            for (const kT of this.materialInfos) {
              const cT = {
                indexStart: kT.indexStart,
                indexCount: kT.indexCount,
                materialIndex: kT.materialIndex,
                verticesStart: kT.verticesStart,
                verticesCount: kT.verticesCount
              };
              TT.materialInfos.push(cT)
            }
          }
          return TT
        }
        static ExtractFromMesh(kT, cT, lT) {
          return TT._ExtractFrom(kT, cT, lT)
        }
        static ExtractFromGeometry(kT, cT, lT) {
          return TT._ExtractFrom(kT, cT, lT)
        }
        static _ExtractFrom(kT, cT, lT) {
          const MT = new TT;
          if (kT.isVerticesDataPresent(KT.l.PositionKind) && (MT.positions = kT.getVerticesData(KT.l.PositionKind, cT, lT)), kT.isVerticesDataPresent(KT.l.NormalKind) && (MT.normals = kT.getVerticesData(KT.l.NormalKind, cT, lT)), kT.isVerticesDataPresent(KT.l.TangentKind) && (MT.tangents = kT.getVerticesData(KT.l.TangentKind, cT, lT)), kT.isVerticesDataPresent(KT.l.UVKind) && (MT.uvs = kT.getVerticesData(KT.l.UVKind, cT, lT)), kT.isVerticesDataPresent(KT.l.UV2Kind) && (MT.uvs2 = kT.getVerticesData(KT.l.UV2Kind, cT, lT)), kT.isVerticesDataPresent(KT.l.UV3Kind) && (MT.uvs3 = kT.getVerticesData(KT.l.UV3Kind, cT, lT)), kT.isVerticesDataPresent(KT.l.UV4Kind) && (MT.uvs4 = kT.getVerticesData(KT.l.UV4Kind, cT, lT)), kT.isVerticesDataPresent(KT.l.UV5Kind) && (MT.uvs5 = kT.getVerticesData(KT.l.UV5Kind, cT, lT)), kT.isVerticesDataPresent(KT.l.UV6Kind) && (MT.uvs6 = kT.getVerticesData(KT.l.UV6Kind, cT, lT)), kT.isVerticesDataPresent(KT.l.ColorKind)) {
            const TT = kT.geometry || kT,
              OT = TT.getVertexBuffer(KT.l.ColorKind),
              yT = TT.getVerticesData(KT.l.ColorKind, cT, lT);
            if (3 === OT.getSize()) {
              const TT = new Float32Array(4 * yT.length / 3);
              for (let kT = 0, cT = 0; kT < yT.length; kT += 3, cT += 4) TT[cT] = yT[kT], TT[cT + 1] = yT[kT + 1], TT[cT + 2] = yT[kT + 2], TT[cT + 3] = 1;
              MT.colors = TT
            } else {
              if (4 !== OT.getSize()) throw new Error(`Unexpected number of color components: ${OT.getSize()}`);
              MT.colors = yT
            }
          }
          return kT.isVerticesDataPresent(KT.l.MatricesIndicesKind) && (MT.matricesIndices = kT.getVerticesData(KT.l.MatricesIndicesKind, cT, lT)), kT.isVerticesDataPresent(KT.l.MatricesWeightsKind) && (MT.matricesWeights = kT.getVerticesData(KT.l.MatricesWeightsKind, cT, lT)), kT.isVerticesDataPresent(KT.l.MatricesIndicesExtraKind) && (MT.matricesIndicesExtra = kT.getVerticesData(KT.l.MatricesIndicesExtraKind, cT, lT)), kT.isVerticesDataPresent(KT.l.MatricesWeightsExtraKind) && (MT.matricesWeightsExtra = kT.getVerticesData(KT.l.MatricesWeightsExtraKind, cT, lT)), MT.indices = kT.FcT(cT, lT), MT
        }
        static CreateRibbon(TT) {
          throw (0, OT.i)("ribbonBuilder")
        }
        static CreateBox(TT) {
          throw (0, OT.i)("boxBuilder")
        }
        static CreateTiledBox(TT) {
          throw (0, OT.i)("tiledBoxBuilder")
        }
        static CreateTiledPlane(TT) {
          throw (0, OT.i)("tiledPlaneBuilder")
        }
        static CreateSphere(TT) {
          throw (0, OT.i)("sphereBuilder")
        }
        static CreateCylinder(TT) {
          throw (0, OT.i)("cylinderBuilder")
        }
        static CreateTorus(TT) {
          throw (0, OT.i)("torusBuilder")
        }
        static CreateLineSystem(TT) {
          throw (0, OT.i)("linesBuilder")
        }
        static CreateDashedLines(TT) {
          throw (0, OT.i)("linesBuilder")
        }
        static CreateGround(TT) {
          throw (0, OT.i)("groundBuilder")
        }
        static CreateTiledGround(TT) {
          throw (0, OT.i)("groundBuilder")
        }
        static CreateGroundFromHeightMap(TT) {
          throw (0, OT.i)("groundBuilder")
        }
        static CreatePlane(TT) {
          throw (0, OT.i)("planeBuilder")
        }
        static CreateDisc(TT) {
          throw (0, OT.i)("discBuilder")
        }
        static CreatePolygon(TT, kT, cT, lT, MT, KT, yT) {
          throw (0, OT.i)("polygonBuilder")
        }
        static CreateIcoSphere(TT) {
          throw (0, OT.i)("icoSphereBuilder")
        }
        static CreatePolyhedron(TT) {
          throw (0, OT.i)("polyhedronBuilder")
        }
        static CreateCapsule() {
          arguments.length > 0 && void 0 !== arguments[0] || MT.m.Up();
          throw (0, OT.i)("capsuleBuilder")
        }
        static CreateTorusKnot(TT) {
          throw (0, OT.i)("torusKnotBuilder")
        }
        static ComputeNormals(TT, kT, cT, lT) {
          let KT, OT, yT, fT, xT, IT, AT, CT, jT, vT, tT, hT, NT, QT, ST, DT, aT, FT, rT, PT, wT = !1,
            mT = !1,
            bT = !1,
            zT = !1,
            JT = 1,
            oT = 0,
            HT = null;
          lT && (wT = !!lT.facetNormals, mT = !!lT.facetPositions, bT = !!lT.facetPartitioning, JT = !0 === lT.useRightHandedSystem ? -1 : 1, oT = lT.ratio || 0, zT = !!lT.depthSort, HT = lT.distanceTo, zT && void 0 === HT && (HT = MT.m.Zero()));
          let eT = 0,
            GT = 0,
            VT = 0,
            ET = 0;
          for (bT && lT && lT.bbSize && (eT = lT.subDiv.X * oT / lT.bbSize.x, GT = lT.subDiv.Y * oT / lT.bbSize.y, VT = lT.subDiv.Z * oT / lT.bbSize.z, ET = lT.subDiv.max * lT.subDiv.max, lT.facetPartitioning.length = 0), KT = 0; KT < TT.length; KT++) cT[KT] = 0;
          const ZT = kT.length / 3 | 0;
          for (KT = 0; KT < ZT; KT++) {
            if (hT = 3 * kT[3 * KT], NT = hT + 1, QT = hT + 2, ST = 3 * kT[3 * KT + 1], DT = ST + 1, aT = ST + 2, FT = 3 * kT[3 * KT + 2], rT = FT + 1, PT = FT + 2, OT = TT[hT] - TT[ST], yT = TT[NT] - TT[DT], fT = TT[QT] - TT[aT], xT = TT[FT] - TT[ST], IT = TT[rT] - TT[DT], AT = TT[PT] - TT[aT], CT = JT * (yT * AT - fT * IT), jT = JT * (fT * xT - OT * AT), vT = JT * (OT * IT - yT * xT), tT = Math.sqrt(CT * CT + jT * jT + vT * vT), tT = 0 === tT ? 1 : tT, CT /= tT, jT /= tT, vT /= tT, wT && lT && (lT.facetNormals[KT].x = CT, lT.facetNormals[KT].y = jT, lT.facetNormals[KT].z = vT), mT && lT && (lT.facetPositions[KT].x = (TT[hT] + TT[ST] + TT[FT]) / 3, lT.facetPositions[KT].y = (TT[NT] + TT[DT] + TT[rT]) / 3, lT.facetPositions[KT].z = (TT[QT] + TT[aT] + TT[PT]) / 3), bT && lT) {
              const kT = Math.floor((lT.facetPositions[KT].x - lT.bInfo.minimum.x * oT) * eT),
                cT = Math.floor((lT.facetPositions[KT].y - lT.bInfo.minimum.y * oT) * GT),
                MT = Math.floor((lT.facetPositions[KT].z - lT.bInfo.minimum.z * oT) * VT),
                OT = Math.floor((TT[hT] - lT.bInfo.minimum.x * oT) * eT),
                yT = Math.floor((TT[NT] - lT.bInfo.minimum.y * oT) * GT),
                fT = Math.floor((TT[QT] - lT.bInfo.minimum.z * oT) * VT),
                xT = Math.floor((TT[ST] - lT.bInfo.minimum.x * oT) * eT),
                IT = Math.floor((TT[DT] - lT.bInfo.minimum.y * oT) * GT),
                AT = Math.floor((TT[aT] - lT.bInfo.minimum.z * oT) * VT),
                CT = Math.floor((TT[FT] - lT.bInfo.minimum.x * oT) * eT),
                jT = Math.floor((TT[rT] - lT.bInfo.minimum.y * oT) * GT),
                vT = Math.floor((TT[PT] - lT.bInfo.minimum.z * oT) * VT),
                tT = OT + lT.subDiv.max * yT + ET * fT,
                wT = xT + lT.subDiv.max * IT + ET * AT,
                mT = CT + lT.subDiv.max * jT + ET * vT,
                bT = kT + lT.subDiv.max * cT + ET * MT;
              lT.facetPartitioning[bT] = lT.facetPartitioning[bT] ? lT.facetPartitioning[bT] : [], lT.facetPartitioning[tT] = lT.facetPartitioning[tT] ? lT.facetPartitioning[tT] : [], lT.facetPartitioning[wT] = lT.facetPartitioning[wT] ? lT.facetPartitioning[wT] : [], lT.facetPartitioning[mT] = lT.facetPartitioning[mT] ? lT.facetPartitioning[mT] : [], lT.facetPartitioning[tT].push(KT), wT != tT && lT.facetPartitioning[wT].push(KT), mT != wT && mT != tT && lT.facetPartitioning[mT].push(KT), bT != tT && bT != wT && bT != mT && lT.facetPartitioning[bT].push(KT)
            }
            if (zT && lT && lT.facetPositions) {
              const TT = lT.depthSortedFacets[KT];
              TT.ind = 3 * KT, TT.sqDistance = MT.m.DistanceSquared(lT.facetPositions[KT], HT)
            }
            cT[hT] += CT, cT[NT] += jT, cT[QT] += vT, cT[ST] += CT, cT[DT] += jT, cT[aT] += vT, cT[FT] += CT, cT[rT] += jT, cT[PT] += vT
          }
          for (KT = 0; KT < cT.length / 3; KT++) CT = cT[3 * KT], jT = cT[3 * KT + 1], vT = cT[3 * KT + 2], tT = Math.sqrt(CT * CT + jT * jT + vT * vT), tT = 0 === tT ? 1 : tT, CT /= tT, jT /= tT, vT /= tT, cT[3 * KT] = CT, cT[3 * KT + 1] = jT, cT[3 * KT + 2] = vT
        }
        static _ComputeSides(kT, cT, lT, KT, OT, yT, fT) {
          const xT = lT.length,
            IT = KT.length;
          let AT, CT;
          switch (kT = kT || TT.DEFAULTSIDE) {
            case TT.FRONTSIDE:
              break;
            case TT.BACKSIDE:
              for (AT = 0; AT < xT; AT += 3) {
                const TT = lT[AT];
                lT[AT] = lT[AT + 2], lT[AT + 2] = TT
              }
              for (CT = 0; CT < IT; CT++) KT[CT] = -KT[CT];
              break;
            case TT.DOUBLESIDE: {
              const TT = cT.length,
                kT = TT / 3;
              for (let lT = 0; lT < TT; lT++) cT[TT + lT] = cT[lT];
              for (AT = 0; AT < xT; AT += 3) lT[AT + xT] = lT[AT + 2] + kT, lT[AT + 1 + xT] = lT[AT + 1] + kT, lT[AT + 2 + xT] = lT[AT] + kT;
              for (CT = 0; CT < IT; CT++) KT[IT + CT] = -KT[CT];
              const jT = OT.length;
              let vT;
              for (vT = 0; vT < jT; vT++) OT[vT + jT] = OT[vT];
              for (yT = yT || new MT.o(0, 0, 1, 1), fT = fT || new MT.o(0, 0, 1, 1), vT = 0, AT = 0; AT < jT / 2; AT++) OT[vT] = yT.x + (yT.z - yT.x) * OT[vT], OT[vT + 1] = yT.y + (yT.w - yT.y) * OT[vT + 1], OT[vT + jT] = fT.x + (fT.z - fT.x) * OT[vT + jT], OT[vT + jT + 1] = fT.y + (fT.w - fT.y) * OT[vT + jT + 1], vT += 2;
              break
            }
          }
        }
        static Parse(kT) {
          const cT = new TT,
            lT = kT.positions;
          lT && cT.set(lT, KT.l.PositionKind);
          const MT = kT.normals;
          MT && cT.set(MT, KT.l.NormalKind);
          const OT = kT.tangents;
          OT && cT.set(OT, KT.l.TangentKind);
          const fT = kT.uvs;
          fT && cT.set(fT, KT.l.UVKind);
          const xT = kT.uvs2;
          xT && cT.set(xT, KT.l.UV2Kind);
          const IT = kT.uvs3;
          IT && cT.set(IT, KT.l.UV3Kind);
          const AT = kT.uvs4;
          AT && cT.set(AT, KT.l.UV4Kind);
          const CT = kT.uvs5;
          CT && cT.set(CT, KT.l.UV5Kind);
          const vT = kT.uvs6;
          vT && cT.set(vT, KT.l.UV6Kind);
          const tT = kT.colors;
          tT && (cT.set(yT.g.CheckColors4(tT, lT.length / 3), KT.l.ColorKind), void 0 !== kT.hasVertexAlpha && (cT.hasVertexAlpha = kT.hasVertexAlpha));
          const hT = kT.matricesIndices;
          hT && cT.set(hT, KT.l.MatricesIndicesKind);
          const NT = kT.matricesWeights;
          NT && cT.set(NT, KT.l.MatricesWeightsKind);
          const QT = kT.indices;
          QT && (cT.indices = QT);
          const ST = kT.materialInfos;
          if (ST) {
            cT.materialInfos = [];
            for (const TT of ST) {
              const kT = new jT;
              kT.indexCount = TT.indexCount, kT.indexStart = TT.indexStart, kT.verticesCount = TT.verticesCount, kT.verticesStart = TT.verticesStart, kT.materialIndex = TT.materialIndex, cT.materialInfos.push(kT)
            }
          }
          return cT
        }
        static ImportVertexData(kT, cT) {
          const lT = TT.Parse(kT);
          cT.setAllVerticesData(lT, kT.updatable)
        }
      }, (() => {
        const MT = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        kT = [xT.e.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], cT = [xT.e.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], vT = [xT.e.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], tT = [xT.e.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], (0, lT.e)(TT, null, kT, {
          kind: "method",
          name: "_TransformVector3Coordinates",
          static: !0,
          private: !1,
          access: {
            has: TT => "_TransformVector3Coordinates" in TT,
            get: TT => TT._TransformVector3Coordinates
          },
          metadata: MT
        }, null, hT), (0, lT.e)(TT, null, cT, {
          kind: "method",
          name: "_TransformVector3Normals",
          static: !0,
          private: !1,
          access: {
            has: TT => "_TransformVector3Normals" in TT,
            get: TT => TT._TransformVector3Normals
          },
          metadata: MT
        }, null, hT), (0, lT.e)(TT, null, vT, {
          kind: "method",
          name: "_TransformVector4Normals",
          static: !0,
          private: !1,
          access: {
            has: TT => "_TransformVector4Normals" in TT,
            get: TT => TT._TransformVector4Normals
          },
          metadata: MT
        }, null, hT), (0, lT.e)(TT, null, tT, {
          kind: "method",
          name: "_FlipFaces",
          static: !0,
          private: !1,
          access: {
            has: TT => "_FlipFaces" in TT,
            get: TT => TT._FlipFaces
          },
          metadata: MT
        }, null, hT), MT && Object.defineProperty(TT, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: MT
        })
      })(), TT.FRONTSIDE = ((0, lT.h)(TT, hT), 0), TT.BACKSIDE = 1, TT.DOUBLESIDE = 2, TT.DEFAULTSIDE = 0, TT._UniqueIdGenerator = 0, TT
    })()
  },
  40120: (TT, kT, cT) => {
    var lT = cT(36892),
      MT = cT(38512),
      KT = cT(39926),
      OT = cT(40025),
      yT = cT(39782);
    const fT = "bakedVertexAnimationSettingsInstanced";

    function xT(TT) {
      const kT = TT.bakedVertexAnimationManager?.texture?.getInternalTexture()?._bufferView;
      return kT instanceof Float32Array || kT instanceof Uint16Array
    }

    function IT(TT, kT, cT, lT) {
      cT.Xs(Number.POSITIVE_INFINITY), lT.Xs(Number.NEGATIVE_INFINITY);
      for (let MT = 0; MT < 3 * kT; MT += 3) {
        const kT = TT[MT],
          KT = TT[MT + 1],
          OT = TT[MT + 2];
        kT < cT.x && (cT.x = kT), KT < cT.y && (cT.y = KT), OT < cT.z && (cT.z = OT), kT > lT.x && (lT.x = kT), KT > lT.y && (lT.y = KT), OT > lT.z && (lT.z = OT)
      }
    }

    function AT(TT, kT, cT) {
      cT && (TT.x -= TT.x * cT.x + cT.y, TT.y -= TT.y * cT.x + cT.y, TT.z -= TT.z * cT.x + cT.y, kT.x += kT.x * cT.x + cT.y, kT.y += kT.y * cT.x + cT.y, kT.z += kT.z * cT.x + cT.y)
    }

    function CT(TT, kT, cT, MT, KT) {
      const OT = lT.h.Fv[7],
        yT = lT.h.Fv[8];
      for (let fT = 0; fT < 2; ++fT)
        for (let xT = 0; xT < 2; ++xT)
          for (let IT = 0; IT < 2; ++IT) OT.set(fT ? kT.x : TT.x, xT ? kT.y : TT.y, IT ? kT.z : TT.z), lT.m.TransformCoordinatesToRef(OT, cT, yT), MT.minimizeInPlace(yT), KT.maximizeInPlace(yT)
    }

    function jT(TT, kT, cT, MT, KT) {
      const OT = lT.h.Fv[7];
      for (let yT = 0; yT < 3 * kT; yT += 3) lT.m.TransformCoordinatesFromFloatsToRef(TT[yT], TT[yT + 1], TT[yT + 2], cT, OT), MT.minimizeInPlace(OT), KT.maximizeInPlace(OT)
    }
    let vT = !1;
    vT || (vT = !0, OT.e.prototype.thinInstanceAdd = function(TT) {
      let kT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (!this.NJ().Dv().getCaps().instancedArrays) return MT.e.Error("Thin Instances are not supported on this device as Instanced Array extension not supported"), -1;
      this._thinInstanceUpdateBufferSize("matrix", Array.isArray(TT) ? TT.length : 1);
      const cT = this._thinInstanceDataStorage.instancesCount;
      if (Array.isArray(TT))
        for (let lT = 0; lT < TT.length; ++lT) this.thinInstanceSetMatrixAt(this._thinInstanceDataStorage.instancesCount++, TT[lT], lT === TT.length - 1 && kT);
      else this.thinInstanceSetMatrixAt(this._thinInstanceDataStorage.instancesCount++, TT, kT);
      return cT
    }, OT.e.prototype.thinInstanceAddSelf = function() {
      let TT = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      return this.thinInstanceAdd(lT.d.IdentityReadOnly, TT)
    }, OT.e.prototype.thinInstanceRegisterAttribute = function(TT, kT) {
      TT === yT.l.ColorKind && (TT = yT.l.ColorInstanceKind), this.removeVerticesData(TT), this._thinInstanceInitializeUserStorage(), this._userThinInstanceBuffersStorage.strides[TT] = kT, this._userThinInstanceBuffersStorage.sizes[TT] = kT * Math.max(32, this._thinInstanceDataStorage.instancesCount), this._userThinInstanceBuffersStorage.data[TT] = new Float32Array(this._userThinInstanceBuffersStorage.sizes[TT]), this._userThinInstanceBuffersStorage.vertexBuffers[TT] = new yT.l(this.Dv(), this._userThinInstanceBuffersStorage.data[TT], TT, !0, !1, kT, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[TT])
    }, OT.e.prototype.thinInstanceSetMatrixAt = function(TT, kT) {
      let cT = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      if (!this._thinInstanceDataStorage.matrixData || TT >= this._thinInstanceDataStorage.instancesCount) return !1;
      const lT = this._thinInstanceDataStorage.matrixData;
      return kT.copyToArray(lT, 16 * TT), this._thinInstanceDataStorage.worldMatrices && (this._thinInstanceDataStorage.worldMatrices[TT] = kT), cT && (this.Q0("matrix"), this.Pv || this.thinInstanceRefreshBoundingInfo(!1)), !0
    }, OT.e.prototype.thinInstanceSetAttributeAt = function(TT, kT, cT) {
      let lT = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      return TT === yT.l.ColorKind && (TT = yT.l.ColorInstanceKind), !(!this._userThinInstanceBuffersStorage || !this._userThinInstanceBuffersStorage.data[TT] || kT >= this._thinInstanceDataStorage.instancesCount) && (this._thinInstanceUpdateBufferSize(TT, 0), this._userThinInstanceBuffersStorage.data[TT].set(cT, kT * this._userThinInstanceBuffersStorage.strides[TT]), lT && this.Q0(TT), !0)
    }, Object.defineProperty(OT.e.prototype, "w6", {
      get: function() {
        return this._thinInstanceDataStorage.instancesCount
      },
      set: function(TT) {
        const kT = this._thinInstanceDataStorage.matrixData ?? this.source?._thinInstanceDataStorage.matrixData;
        TT <= (kT ? kT.length / 16 : 0) && (this._thinInstanceDataStorage.instancesCount = TT)
      },
      enumerable: !0,
      configurable: !0
    }), OT.e.prototype._thinInstanceCreateMatrixBuffer = function(TT, kT) {
      let cT = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      const lT = new yT.d(this.Dv(), kT, !cT, 16, !1, !0);
      for (let MT = 0; MT < 4; MT++) this.setVerticesBuffer(lT.createVertexBuffer(TT + MT, 4 * MT, 4));
      return lT
    }, OT.e.prototype.O4 = function(TT, kT) {
      let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        lT = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      if (cT = cT || 16, "matrix" === TT) this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = null, this._thinInstanceDataStorage.matrixBufferSize = kT ? kT.length : 32 * cT, this._thinInstanceDataStorage.matrixData = kT, this._thinInstanceDataStorage.worldMatrices = null, null !== kT ? (this._thinInstanceDataStorage.instancesCount = kT.length / cT, this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", kT, lT), this.Pv || this.thinInstanceRefreshBoundingInfo(!1)) : (this._thinInstanceDataStorage.instancesCount = 0, this.Pv || this.refreshBoundingInfo());
      else if ("previousMatrix" === TT) this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = null, this._thinInstanceDataStorage.previousMatrixData = kT, null !== kT && (this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", kT, lT));
      else if ("splatIndex" === TT && kT) {
        this._thinInstanceInitializeUserStorage(), this._thinInstanceDataStorage.instancesCount = kT.length / cT, this._userThinInstanceBuffersStorage.data[TT] = kT, this._userThinInstanceBuffersStorage.strides[TT] = cT, this._userThinInstanceBuffersStorage.sizes[TT] = kT.length;
        const lT = new yT.d(this.Dv(), kT, !0, 16, !1, !0);
        this._thinInstanceDataStorage.matrixBuffer = lT;
        for (let kT = 0; kT < 4; kT++) this.setVerticesBuffer(lT.createVertexBuffer(TT + kT, 4 * kT, 4))
      } else TT === yT.l.ColorKind && (TT = yT.l.ColorInstanceKind), null === kT ? this._userThinInstanceBuffersStorage?.data[TT] && (this.removeVerticesData(TT), delete this._userThinInstanceBuffersStorage.data[TT], delete this._userThinInstanceBuffersStorage.strides[TT], delete this._userThinInstanceBuffersStorage.sizes[TT], delete this._userThinInstanceBuffersStorage.vertexBuffers[TT]) : (this._thinInstanceInitializeUserStorage(), this._userThinInstanceBuffersStorage.data[TT] = kT, this._userThinInstanceBuffersStorage.strides[TT] = cT, this._userThinInstanceBuffersStorage.sizes[TT] = kT.length, this._userThinInstanceBuffersStorage.vertexBuffers[TT] = new yT.l(this.Dv(), kT, TT, !lT, !1, cT, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[TT]))
    }, OT.e.prototype.Q0 = function(TT) {
      "matrix" === TT ? (this.thinInstanceAllowAutomaticStaticBufferRecreation && this._thinInstanceDataStorage.matrixBuffer && !this._thinInstanceDataStorage.matrixBuffer.isUpdatable() && this._thinInstanceRecreateBuffer(TT), this._thinInstanceDataStorage.matrixBuffer?.updateDirectly(this._thinInstanceDataStorage.matrixData, 0, this._thinInstanceDataStorage.instancesCount)) : "previousMatrix" === TT ? (this.thinInstanceAllowAutomaticStaticBufferRecreation && this._thinInstanceDataStorage.previousMatrixBuffer && !this._thinInstanceDataStorage.previousMatrixBuffer.isUpdatable() && this._thinInstanceRecreateBuffer(TT), this._thinInstanceDataStorage.previousMatrixBuffer?.updateDirectly(this._thinInstanceDataStorage.previousMatrixData, 0, this._thinInstanceDataStorage.instancesCount)) : "splatIndex" === TT ? this._thinInstanceDataStorage.matrixBuffer?.updateDirectly(this._userThinInstanceBuffersStorage.data[TT], 0, this._thinInstanceDataStorage.instancesCount) : (TT === yT.l.ColorKind && (TT = yT.l.ColorInstanceKind), this._userThinInstanceBuffersStorage?.vertexBuffers[TT] && (this.thinInstanceAllowAutomaticStaticBufferRecreation && !this._userThinInstanceBuffersStorage.vertexBuffers[TT].isUpdatable() && this._thinInstanceRecreateBuffer(TT), this._userThinInstanceBuffersStorage.vertexBuffers[TT].updateDirectly(this._userThinInstanceBuffersStorage.data[TT], 0)))
    }, OT.e.prototype.thinInstancePartialBufferUpdate = function(TT, kT, cT) {
      if ("matrix" === TT) this._thinInstanceDataStorage.matrixBuffer && ("number" === typeof kT ? this._thinInstanceDataStorage.matrixBuffer.updateDirectly(new Float32Array(this._thinInstanceDataStorage.matrixData.buffer, this._thinInstanceDataStorage.matrixData.byteOffset + 16 * cT * Float32Array.BYTES_PER_ELEMENT, 16 * kT), 16 * cT) : this._thinInstanceDataStorage.matrixBuffer.updateDirectly(kT, cT));
      else if (TT === yT.l.ColorKind && (TT = yT.l.ColorInstanceKind), this._userThinInstanceBuffersStorage?.vertexBuffers[TT]) {
        const lT = this._userThinInstanceBuffersStorage.vertexBuffers[TT];
        if ("number" === typeof kT) {
          const lT = new Float32Array(this._userThinInstanceBuffersStorage.data[TT].buffer, this._userThinInstanceBuffersStorage.data[TT].byteOffset + cT * this._userThinInstanceBuffersStorage.strides[TT] * Float32Array.BYTES_PER_ELEMENT, kT * this._userThinInstanceBuffersStorage.strides[TT]);
          this._userThinInstanceBuffersStorage.vertexBuffers[TT].updateDirectly(lT, cT * this._userThinInstanceBuffersStorage.strides[TT])
        } else lT.updateDirectly(kT, cT)
      }
    }, OT.e.prototype.thinInstanceGetWorldMatrices = function() {
      if (!this._thinInstanceDataStorage.matrixData || !this._thinInstanceDataStorage.matrixBuffer) return [];
      const TT = this._thinInstanceDataStorage.matrixData;
      if (!this._thinInstanceDataStorage.worldMatrices) {
        this._thinInstanceDataStorage.worldMatrices = [];
        for (let kT = 0; kT < this._thinInstanceDataStorage.instancesCount; ++kT) this._thinInstanceDataStorage.worldMatrices[kT] = lT.d.FromArray(TT, 16 * kT)
      }
      return this._thinInstanceDataStorage.worldMatrices
    }, OT.e.prototype.thinInstanceRefreshBoundingInfo = function() {
      let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        kT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        cT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        MT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!this._thinInstanceDataStorage.matrixData || !this._thinInstanceDataStorage.matrixBuffer) return;
      const OT = this._thinInstanceDataStorage.boundingVectors;
      if (TT || !this.rawBoundingInfo) {
        if (OT.length = 0, MT && function(TT, kT, cT) {
            const MT = TT._userThinInstanceBuffersStorage,
              OT = MT?.data[fT],
              vT = MT?.strides[fT];
            if (!OT || !vT || vT < 4 || !xT(TT)) return !1;
            const tT = TT._thinInstanceDataStorage.matrixData;
            if (!tT) return !1;
            const hT = {},
              NT = lT.h.Vector4[0],
              QT = lT.h.Fv[1],
              ST = lT.h.Fv[2],
              DT = lT.h.Fv[3],
              aT = lT.h.Fv[4],
              FT = lT.h.Fv[5],
              rT = lT.h.Fv[6],
              PT = lT.h.Matrix[2],
              wT = TT.geometry ? TT.geometry.boundingBias : null,
              mT = TT.getTotalVertices();
            QT.Xs(Number.POSITIVE_INFINITY), ST.Xs(Number.NEGATIVE_INFINITY), DT.Xs(Number.POSITIVE_INFINITY), aT.Xs(Number.NEGATIVE_INFINITY);
            for (let KT = 0; KT < TT._thinInstanceDataStorage.instancesCount; ++KT) {
              const kT = KT * vT;
              NT.set(OT[kT], OT[kT + 1], OT[kT + 2], OT[kT + 3]);
              const MT = TT._getData({
                applyMorph: cT,
                applyBakedVertexAnimation: !0,
                bakedVertexAnimationSettings: NT,
                updatePositionsArray: !1,
                cache: hT
              }, null, yT.l.PositionKind);
              if (!MT) return !1;
              IT(MT, mT, FT, rT), AT(FT, rT, wT), QT.minimizeInPlace(FT), ST.maximizeInPlace(rT), lT.d.FromArrayToRef(tT, 16 * KT, PT), wT ? CT(FT, rT, PT, DT, aT) : jT(MT, mT, PT, DT, aT)
            }
            return !(!isFinite(QT.x) || !isFinite(DT.x)) && (TT.DH().reConstruct(DT, aT), TT.rawBoundingInfo = new KT.e(QT, ST), function(TT, kT) {
              TT.length = 0;
              for (let cT = 0; cT < kT.boundingBox.vectors.length; ++cT) TT.push(kT.boundingBox.vectors[cT].clone())
            }(kT, TT.rawBoundingInfo), TT._updateBoundingInfo(), !0)
          }(this, OT, cT)) return;
        MT && this.bakedVertexAnimationManager?.isEnabled && xT(this) ? this.refreshBoundingInfo({
          applySkeleton: kT,
          applyMorph: cT,
          applyBakedVertexAnimation: !0,
          updatePositionsArray: !1
        }) : this.refreshBoundingInfo(kT, cT);
        const TT = this.DH();
        this.rawBoundingInfo = new KT.e(TT.minimum, TT.maximum)
      }
      const vT = this.DH(),
        tT = this._thinInstanceDataStorage.matrixData;
      if (0 === OT.length)
        for (let lT = 0; lT < vT.boundingBox.vectors.length; ++lT) OT.push(vT.boundingBox.vectors[lT].clone());
      lT.h.Fv[0].Xs(Number.POSITIVE_INFINITY), lT.h.Fv[1].Xs(Number.NEGATIVE_INFINITY);
      for (let KT = 0; KT < this._thinInstanceDataStorage.instancesCount; ++KT) {
        lT.d.FromArrayToRef(tT, 16 * KT, lT.h.Matrix[0]);
        for (let TT = 0; TT < OT.length; ++TT) lT.m.TransformCoordinatesToRef(OT[TT], lT.h.Matrix[0], lT.h.Fv[2]), lT.h.Fv[0].minimizeInPlace(lT.h.Fv[2]), lT.h.Fv[1].maximizeInPlace(lT.h.Fv[2])
      }
      vT.reConstruct(lT.h.Fv[0], lT.h.Fv[1]), this._updateBoundingInfo()
    }, OT.e.prototype._thinInstanceRecreateBuffer = function(TT) {
      let kT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      "matrix" === TT ? (this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", this._thinInstanceDataStorage.matrixData, kT)) : "previousMatrix" === TT ? this._scene.needsPreviousWorldMatrices && (this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", this._thinInstanceDataStorage.previousMatrixData ?? this._thinInstanceDataStorage.matrixData, kT)) : (TT === yT.l.ColorKind && (TT = yT.l.ColorInstanceKind), this._userThinInstanceBuffersStorage.vertexBuffers[TT]?.dispose(), this._userThinInstanceBuffersStorage.vertexBuffers[TT] = new yT.l(this.Dv(), this._userThinInstanceBuffersStorage.data[TT], TT, !kT, !1, this._userThinInstanceBuffersStorage.strides[TT], !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[TT]))
    }, OT.e.prototype._thinInstanceUpdateBufferSize = function(TT) {
      let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      TT === yT.l.ColorKind && (TT = yT.l.ColorInstanceKind);
      const cT = "matrix" === TT;
      if (!cT && (!this._userThinInstanceBuffersStorage || !this._userThinInstanceBuffersStorage.strides[TT])) return;
      const lT = cT ? 16 : this._userThinInstanceBuffersStorage.strides[TT],
        MT = cT ? this._thinInstanceDataStorage.matrixBufferSize : this._userThinInstanceBuffersStorage.sizes[TT];
      let KT = cT ? this._thinInstanceDataStorage.matrixData : this._userThinInstanceBuffersStorage.data[TT];
      const OT = (this._thinInstanceDataStorage.instancesCount + kT) * lT;
      let fT = MT;
      for (; fT < OT;) fT *= 2;
      if (!KT || MT != fT) {
        if (KT) {
          const TT = new Float32Array(fT);
          TT.set(KT, 0), KT = TT
        } else KT = new Float32Array(fT);
        cT ? (this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", KT, !1), this._thinInstanceDataStorage.matrixData = KT, this._thinInstanceDataStorage.matrixBufferSize = fT, this._scene.needsPreviousWorldMatrices && !this._thinInstanceDataStorage.previousMatrixData && (this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", KT, !1))) : (this._userThinInstanceBuffersStorage.vertexBuffers[TT]?.dispose(), this._userThinInstanceBuffersStorage.data[TT] = KT, this._userThinInstanceBuffersStorage.sizes[TT] = fT, this._userThinInstanceBuffersStorage.vertexBuffers[TT] = new yT.l(this.Dv(), KT, TT, !0, !1, lT, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[TT]))
      }
    }, OT.e.prototype._thinInstanceInitializeUserStorage = function() {
      this._userThinInstanceBuffersStorage || (this._userThinInstanceBuffersStorage = {
        data: {},
        sizes: {},
        vertexBuffers: {},
        strides: {}
      })
    }, OT.e.prototype._disposeThinInstanceSpecificData = function() {
      this._thinInstanceDataStorage?.matrixBuffer && (this._thinInstanceDataStorage.matrixBuffer.dispose(), this._thinInstanceDataStorage.matrixBuffer = null), this._thinInstanceDataStorage?.previousMatrixBuffer && (this._thinInstanceDataStorage.previousMatrixBuffer.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = null)
    })
  },
  40071: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => QT,
      f: () => tT
    });
    var lT, MT, KT, OT, yT = cT(39620),
      fT = cT(39624),
      xT = cT(39645),
      IT = cT(36932),
      AT = cT(36892),
      CT = cT(39846),
      jT = cT(36949),
      vT = cT(39500);
    let tT = (() => {
      var TT;
      let kT, cT, lT, MT, KT, OT, jT, vT, tT, hT = CT.b,
        NT = [],
        QT = [],
        ST = [],
        DT = [],
        aT = [],
        FT = [],
        rT = [],
        PT = [],
        wT = [],
        mT = [],
        bT = [],
        zT = [],
        JT = [],
        oT = [],
        HT = [],
        eT = [],
        GT = [],
        VT = [];
      return TT = class extends hT {
        get billboardMode() {
          return this._billboardMode
        }
        set billboardMode(kT) {
          this._billboardMode !== kT && (this._billboardMode = kT, this._cache.useBillboardPosition = 0 !== (this._billboardMode & TT.BILLBOARDMODE_USE_POSITION))
        }
        get infiniteDistance() {
          return this._infiniteDistance
        }
        set infiniteDistance(TT) {
          this._infiniteDistance !== TT && (this._infiniteDistance = TT)
        }
        constructor(kT) {
          let cT = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          super(kT, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, !1), this._forward = new AT.m(0, 0, 1), this._up = new AT.m(0, 1, 0), this._right = new AT.m(1, 0, 0), this._position = (0, yT.h)(this, NT, AT.m.Zero()), this._rotation = ((0, yT.h)(this, QT), (0, yT.h)(this, ST, AT.m.Zero())), this._rotationQuaternion = ((0, yT.h)(this, DT), (0, yT.h)(this, aT, null)), this._scaling = ((0, yT.h)(this, FT), (0, yT.h)(this, rT, AT.m.One())), this._transformToBoneReferal = ((0, yT.h)(this, PT), null), this._isAbsoluteSynced = !1, this._billboardMode = (0, yT.h)(this, wT, TT.BILLBOARDMODE_NONE), this.scalingDeterminant = ((0, yT.h)(this, mT), (0, yT.h)(this, bT, 1)), this._infiniteDistance = ((0, yT.h)(this, zT), (0, yT.h)(this, JT, !1)), this.ignoreNonUniformScaling = ((0, yT.h)(this, oT), (0, yT.h)(this, HT, !1)), this.reIntegrateRotationIntoRotationQuaternion = ((0, yT.h)(this, eT), (0, yT.h)(this, GT, !1)), this._poseMatrix = ((0, yT.h)(this, VT), null), this._localMatrix = AT.d.Zero(), this._usePivotMatrix = !1, this._absolutePosition = AT.m.Zero(), this._absoluteScaling = AT.m.Zero(), this._absoluteRotationQuaternion = AT.f.Identity(), this._pivotMatrix = AT.d.Identity(), this._postMultiplyPivotMatrix = !1, this._isWorldMatrixFrozen = !1, this._indexInSceneTransformNodesArray = -1, this.onAfterWorldMatrixUpdateObservable = new IT.b, this._nonUniformScaling = !1, cT && this.NJ().addTransformNode(this)
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
        get GA() {
          return this._scaling
        }
        set GA(TT) {
          this._scaling = TT, this._markAsDirtyInternal()
        }
        get rotationQuaternion() {
          return this._rotationQuaternion
        }
        set rotationQuaternion(TT) {
          this._rotationQuaternion = TT, TT && this._rotation.Xs(0), this._markAsDirtyInternal()
        }
        _markAsDirtyInternal() {
          this._isDirty || (this._isDirty = !0, this.customMarkAsDirty && this.customMarkAsDirty())
        }
        get forward() {
          return AT.m.TransformNormalFromFloatsToRef(0, 0, this.NJ().useRightHandedSystem ? -1 : 1, this.getWorldMatrix(), this._forward), this._forward.normalize()
        }
        get up() {
          return AT.m.TransformNormalFromFloatsToRef(0, 1, 0, this.getWorldMatrix(), this._up), this._up.normalize()
        }
        get right() {
          return AT.m.TransformNormalFromFloatsToRef(this.NJ().useRightHandedSystem ? -1 : 1, 0, 0, this.getWorldMatrix(), this._right), this._right.normalize()
        }
        updatePoseMatrix(TT) {
          return this._poseMatrix ? (this._poseMatrix.UkT(TT), this) : (this._poseMatrix = TT.clone(), this)
        }
        getPoseMatrix() {
          return this._poseMatrix || (this._poseMatrix = AT.d.Identity()), this._poseMatrix
        }
        _isSynchronized() {
          const kT = this._cache;
          return this._billboardMode === kT.billboardMode && this._billboardMode === TT.BILLBOARDMODE_NONE && (!kT.pivotMatrixUpdated && (!this._infiniteDistance && (!this._position._isDirty && (!this._scaling._isDirty && !(this._rotationQuaternion && this._rotationQuaternion._isDirty || this._rotation._isDirty)))))
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
          let kT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          return this._pivotMatrix.UkT(TT), this._usePivotMatrix = !this._pivotMatrix.isIdentity(), this._cache.pivotMatrixUpdated = !0, this._postMultiplyPivotMatrix = kT, this._postMultiplyPivotMatrix && (this._pivotMatrixInverse ? this._pivotMatrix.invertToRef(this._pivotMatrixInverse) : this._pivotMatrixInverse = AT.d.Invert(this._pivotMatrix)), this
        }
        getPivotMatrix() {
          return this._pivotMatrix
        }
        instantiateHierarchy() {
          let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            kT = arguments.length > 1 ? arguments[1] : void 0,
            cT = arguments.length > 2 ? arguments[2] : void 0;
          const lT = this.clone("Clone of " + (this.name || this.id), TT || this.parent, !0);
          lT && cT && cT(this, lT);
          for (const MT of this.getChildTransformNodes(!0)) MT.instantiateHierarchy(lT, kT, cT);
          return lT
        }
        bJ() {
          let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return TT ? arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (this._rotation.Xs(0), this._rotationQuaternion = this._rotationQuaternion || AT.f.Identity(), TT.decompose(this._scaling, this._rotationQuaternion, this._position), this.computeWorldMatrix(!0)) : (this._worldMatrix = TT, this._absolutePosition.I5(this._worldMatrix.m[12], this._worldMatrix.m[13], this._worldMatrix.m[14]), this._afterComputeWorldMatrix()) : (this._isWorldMatrixFrozen = !1, this.computeWorldMatrix(!0)), this._isDirty = !1, this._isWorldMatrixFrozen = !0, this
        }
        unfreezeWorldMatrix() {
          return this._isWorldMatrixFrozen = !1, this.computeWorldMatrix(!0), this
        }
        get kOT() {
          return this._isWorldMatrixFrozen
        }
        getAbsolutePosition() {
          return this.computeWorldMatrix(), this._absolutePosition
        }
        setAbsolutePosition(TT) {
          if (!TT) return this;
          let kT, cT, lT;
          if (void 0 === TT.x) {
            if (arguments.length < 3) return this;
            kT = arguments[0], cT = arguments[1], lT = arguments[2]
          } else kT = TT.x, cT = TT.y, lT = TT.z;
          if (this.parent) {
            const TT = AT.h.Matrix[0];
            this.parent.getWorldMatrix().invertToRef(TT), AT.m.TransformCoordinatesFromFloatsToRef(kT, cT, lT, TT, this.position)
          } else this.position.x = kT, this.position.y = cT, this.position.z = lT;
          return this._absolutePosition.UkT(TT), this
        }
        setPositionWithLocalVector(TT) {
          return this.computeWorldMatrix(), this.position = AT.m.TransformNormal(TT, this._localMatrix), this
        }
        getPositionExpressedInLocalSpace() {
          this.computeWorldMatrix();
          const TT = AT.h.Matrix[0];
          return this._localMatrix.invertToRef(TT), AT.m.TransformNormal(this.position, TT)
        }
        locallyTranslate(TT) {
          return this.computeWorldMatrix(!0), this.position = AT.m.TransformCoordinates(TT, this._localMatrix), this
        }
        lookAt(kT) {
          let cT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            lT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            MT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
            KT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
          const OT = TT._LookAtVectorCache,
            yT = 0 === KT ? this.position : this.getAbsolutePosition();
          if (kT.subtractToRef(yT, OT), this.setDirection(OT, cT, lT, MT), 1 === KT && this.parent)
            if (this.rotationQuaternion) {
              const TT = AT.h.Matrix[0];
              this.rotationQuaternion.toRotationMatrix(TT);
              const kT = AT.h.Matrix[1];
              this.parent.getWorldMatrix().getRotationMatrixToRef(kT), kT.invert(), TT.multiplyToRef(kT, TT), this.rotationQuaternion.fromRotationMatrix(TT)
            } else {
              const TT = AT.h.Quaternion[0];
              AT.f.FromEulerVectorToRef(this.rotation, TT);
              const kT = AT.h.Matrix[0];
              TT.toRotationMatrix(kT);
              const cT = AT.h.Matrix[1];
              this.parent.getWorldMatrix().getRotationMatrixToRef(cT), cT.invert(), kT.multiplyToRef(cT, kT), TT.fromRotationMatrix(kT), TT.toEulerAnglesToRef(this.rotation)
            } return this
        }
        rU(TT) {
          const kT = AT.m.Zero();
          return this.getDirectionToRef(TT, kT), kT
        }
        getDirectionToRef(TT, kT) {
          return AT.m.TransformNormalToRef(TT, this.getWorldMatrix(), kT), this
        }
        setDirection(TT) {
          let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            lT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
          const MT = -Math.atan2(TT.z, TT.x) + Math.PI / 2,
            KT = Math.sqrt(TT.x * TT.x + TT.z * TT.z),
            OT = -Math.atan2(TT.y, KT);
          return this.rotationQuaternion ? AT.f.RotationYawPitchRollToRef(MT + kT, OT + cT, lT, this.rotationQuaternion) : (this.rotation.x = OT + cT, this.rotation.y = MT + kT, this.rotation.z = lT), this
        }
        setPivotPoint(TT) {
          let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          0 == this.NJ().getRenderId() && this.computeWorldMatrix(!0);
          const cT = this.getWorldMatrix();
          if (1 == kT) {
            const kT = AT.h.Matrix[0];
            cT.invertToRef(kT), TT = AT.m.TransformCoordinates(TT, kT)
          }
          return this.setPivotMatrix(AT.d.Translation(-TT.x, -TT.y, -TT.z), !0)
        }
        getPivotPoint() {
          const TT = AT.m.Zero();
          return this.getPivotPointToRef(TT), TT
        }
        getPivotPointToRef(TT) {
          return TT.x = -this._pivotMatrix.m[12], TT.y = -this._pivotMatrix.m[13], TT.z = -this._pivotMatrix.m[14], this
        }
        getAbsolutePivotPoint() {
          const TT = AT.m.Zero();
          return this.getAbsolutePivotPointToRef(TT), TT
        }
        getAbsolutePivotPointToRef(TT) {
          return this.getPivotPointToRef(TT), AT.m.TransformCoordinatesToRef(TT, this.getWorldMatrix(), TT), this
        }
        pTT(TT) {
          if (this._isDirty) return this;
          if (this._children)
            for (const kT of this._children) kT.pTT(TT);
          return super.pTT(TT)
        }
        setParent(kT) {
          let cT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            lT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          if (!kT && !this.parent) return this;
          const MT = AT.h.Quaternion[0],
            KT = AT.h.Fv[0],
            OT = AT.h.Fv[1],
            yT = AT.h.Matrix[1];
          AT.d.IdentityToRef(yT);
          const fT = AT.h.Matrix[0];
          this.computeWorldMatrix(!0);
          let xT = this.rotationQuaternion;
          return xT || (xT = TT._TmpRotation, AT.f.RotationYawPitchRollToRef(this._rotation.y, this._rotation.x, this._rotation.z, xT)), AT.d.ComposeToRef(this.GA, xT, this.position, fT), this.parent && fT.multiplyToRef(this.parent.computeWorldMatrix(!0), fT), kT && (kT.computeWorldMatrix(!0).invertToRef(yT), fT.multiplyToRef(yT, fT)), fT.decompose(OT, MT, KT, cT ? this : void 0), this.rotationQuaternion ? this.rotationQuaternion.UkT(MT) : MT.toEulerAnglesToRef(this.rotation), this.GA.UkT(OT), this.position.UkT(KT), this.parent = kT, lT && this.setPivotMatrix(AT.d.Identity()), this
        }
        addChild(TT) {
          let kT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return TT.setParent(this, kT), this
        }
        removeChild(TT) {
          let kT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return TT.parent !== this || TT.setParent(null, kT), this
        }
        get nonUniformScaling() {
          return this._nonUniformScaling
        }
        _updateNonUniformScalingState(TT) {
          return this._nonUniformScaling !== TT && (this._nonUniformScaling = TT, !0)
        }
        attachToBone(TT, kT) {
          return this._currentParentWhenAttachingToBone = this.parent, this._transformToBoneReferal = kT, this.parent = TT, TT.getSkeleton().prepare(!0), TT.getFinalMatrix().determinant() < 0 && (this.scalingDeterminant *= -1), this
        }
        detachFromBone() {
          let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          return this.parent ? (this.parent.getWorldMatrix().determinant() < 0 && (this.scalingDeterminant *= -1), this._transformToBoneReferal = null, this.parent = TT ? this._currentParentWhenAttachingToBone : null, this) : (TT && (this.parent = this._currentParentWhenAttachingToBone), this)
        }
        rotate(kT, cT, lT) {
          let MT;
          if (kT.normalize(), this.rotationQuaternion || (this.rotationQuaternion = this.rotation.toQuaternion(), this.rotation.Xs(0)), lT && 0 !== lT) {
            if (this.parent) {
              const TT = this.parent.getWorldMatrix(),
                lT = AT.h.Matrix[0];
              TT.invertToRef(lT), kT = AT.m.TransformNormal(kT, lT), TT.determinant() < 0 && (cT *= -1)
            }
            MT = AT.f.RotationAxisToRef(kT, cT, TT._RotationAxisCache), MT.multiplyToRef(this.rotationQuaternion, this.rotationQuaternion)
          } else MT = AT.f.RotationAxisToRef(kT, cT, TT._RotationAxisCache), this.rotationQuaternion.multiplyToRef(MT, this.rotationQuaternion);
          return this
        }
        rotateAround(TT, kT, cT) {
          kT.normalize(), this.rotationQuaternion || (this.rotationQuaternion = AT.f.RotationYawPitchRoll(this.rotation.y, this.rotation.x, this.rotation.z), this.rotation.Xs(0));
          const lT = AT.h.Fv[0],
            MT = AT.h.Fv[1],
            KT = AT.h.Fv[2],
            OT = AT.h.Quaternion[0],
            yT = AT.h.Matrix[0],
            fT = AT.h.Matrix[1],
            xT = AT.h.Matrix[2],
            IT = AT.h.Matrix[3];
          return TT.subtractToRef(this.position, lT), AT.d.TranslationToRef(lT.x, lT.y, lT.z, yT), AT.d.TranslationToRef(-lT.x, -lT.y, -lT.z, fT), AT.d.RotationAxisToRef(kT, cT, xT), fT.multiplyToRef(xT, IT), IT.multiplyToRef(yT, IT), IT.decompose(MT, OT, KT), this.position.addInPlace(KT), OT.multiplyToRef(this.rotationQuaternion, this.rotationQuaternion), this
        }
        translate(TT, kT, cT) {
          const lT = TT.scale(kT);
          if (cT && 0 !== cT) this.setAbsolutePosition(this.getAbsolutePosition().add(lT));
          else {
            const TT = this.getPositionExpressedInLocalSpace().add(lT);
            this.setPositionWithLocalVector(TT)
          }
          return this
        }
        addRotation(TT, kT, cT) {
          let lT;
          this.rotationQuaternion ? lT = this.rotationQuaternion : (lT = AT.h.Quaternion[1], AT.f.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, this.rotation.z, lT));
          const MT = AT.h.Quaternion[0];
          return AT.f.RotationYawPitchRollToRef(kT, TT, cT, MT), lT.multiplyInPlace(MT), this.rotationQuaternion || lT.toEulerAnglesToRef(this.rotation), this
        }
        _getEffectiveParent() {
          return this.parent
        }
        isWorldMatrixCameraDependent() {
          return this._infiniteDistance && !this.parent || this._billboardMode !== TT.BILLBOARDMODE_NONE
        }
        computeWorldMatrix() {
          let kT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            cT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          if (this._isWorldMatrixFrozen && !this._isDirty) return this._worldMatrix;
          const lT = this.NJ().getRenderId();
          if (!this._isDirty && !kT && (this._currentRenderId === lT || this.isSynchronized())) return this._currentRenderId = lT, this._worldMatrix;
          cT = cT || this.NJ().activeCamera, this._updateCache();
          const MT = this._cache;
          MT.pivotMatrixUpdated = !1, MT.billboardMode = this.billboardMode, MT.infiniteDistance = this.infiniteDistance, MT.parent = this._parentNode, this._currentRenderId = lT, this._childUpdateId += 1, this._isDirty = !1, this._position._isDirty = !1, this._rotation._isDirty = !1, this._scaling._isDirty = !1;
          const KT = this._getEffectiveParent(),
            OT = TT._TmpScaling;
          let yT, fT = this._position;
          if (this._infiniteDistance && !this.parent && cT) {
            const kT = cT.getWorldMatrix().m;
            fT = TT._TmpTranslation, fT.I5(this._position.x + kT[12], this._position.y + kT[13], this._position.z + kT[14])
          }
          if (OT.I5(this._scaling.x * this.scalingDeterminant, this._scaling.y * this.scalingDeterminant, this._scaling.z * this.scalingDeterminant), this._rotationQuaternion) {
            if (this._rotationQuaternion._isDirty = !1, yT = this._rotationQuaternion, this.reIntegrateRotationIntoRotationQuaternion) {
              this.rotation.lengthSquared() && (this._rotationQuaternion.multiplyInPlace(AT.f.RotationYawPitchRoll(this._rotation.y, this._rotation.x, this._rotation.z)), this._rotation.I5(0, 0, 0))
            }
          } else yT = TT._TmpRotation, AT.f.RotationYawPitchRollToRef(this._rotation.y, this._rotation.x, this._rotation.z, yT);
          if (this._usePivotMatrix) {
            const TT = AT.h.Matrix[1];
            AT.d.ScalingToRef(OT.x, OT.y, OT.z, TT);
            const kT = AT.h.Matrix[0];
            yT.toRotationMatrix(kT), this._pivotMatrix.multiplyToRef(TT, AT.h.Matrix[4]), AT.h.Matrix[4].multiplyToRef(kT, this._localMatrix), this._postMultiplyPivotMatrix && this._localMatrix.multiplyToRef(this._pivotMatrixInverse, this._localMatrix), this._localMatrix.addTranslationFromFloats(fT.x, fT.y, fT.z)
          } else AT.d.ComposeToRef(OT, yT, fT, this._localMatrix);
          if (KT && KT.getWorldMatrix) {
            if (kT && KT.computeWorldMatrix(kT), this.billboardMode) {
              if (this._transformToBoneReferal) {
                const TT = this.parent;
                TT.getSkeleton().prepare(), TT.getFinalMatrix().multiplyToRef(this._transformToBoneReferal.getWorldMatrix(), AT.h.Matrix[7])
              } else AT.h.Matrix[7].UkT(KT.getWorldMatrix());
              const kT = AT.h.Fv[5],
                cT = AT.h.Fv[6],
                lT = AT.h.Quaternion[0];
              AT.h.Matrix[7].decompose(cT, lT, kT), AT.d.ScalingToRef(cT.x, cT.y, cT.z, AT.h.Matrix[7]), AT.h.Matrix[7].setTranslation(kT), TT.BillboardUseParentOrientation && (this._position.applyRotationQuaternionToRef(lT, kT), this._localMatrix.setTranslation(kT)), this._localMatrix.multiplyToRef(AT.h.Matrix[7], this._worldMatrix)
            } else if (this._transformToBoneReferal) {
              const TT = this.parent;
              TT.getSkeleton().prepare(), this._localMatrix.multiplyToRef(TT.getFinalMatrix(), AT.h.Matrix[6]), AT.h.Matrix[6].multiplyToRef(this._transformToBoneReferal.getWorldMatrix(), this._worldMatrix)
            } else this._localMatrix.multiplyToRef(KT.getWorldMatrix(), this._worldMatrix);
            this._markSyncedWithParent()
          } else this._worldMatrix.UkT(this._localMatrix);
          if (cT && this.billboardMode)
            if (MT.useBillboardPosition) {
              const kT = AT.h.Fv[0];
              this._worldMatrix.getTranslationToRef(kT);
              const lT = cT.globalPosition;
              this._worldMatrix.invertToRef(AT.h.Matrix[1]);
              const MT = AT.h.Fv[1];
              AT.m.TransformCoordinatesToRef(lT, AT.h.Matrix[1], MT), MT.normalize();
              const KT = -Math.atan2(MT.z, MT.x) + Math.PI / 2,
                OT = Math.sqrt(MT.x * MT.x + MT.z * MT.z),
                yT = -Math.atan2(MT.y, OT);
              if (AT.f.RotationYawPitchRollToRef(KT, yT, 0, AT.h.Quaternion[0]), (this.billboardMode & TT.BILLBOARDMODE_ALL) !== TT.BILLBOARDMODE_ALL) {
                const kT = AT.h.Fv[1];
                AT.h.Quaternion[0].toEulerAnglesToRef(kT), (this.billboardMode & TT.BILLBOARDMODE_X) !== TT.BILLBOARDMODE_X && (kT.x = 0), (this.billboardMode & TT.BILLBOARDMODE_Y) !== TT.BILLBOARDMODE_Y && (kT.y = 0), (this.billboardMode & TT.BILLBOARDMODE_Z) !== TT.BILLBOARDMODE_Z && (kT.z = 0), AT.d.RotationYawPitchRollToRef(kT.y, kT.x, kT.z, AT.h.Matrix[0])
              } else AT.d.FromQuaternionToRef(AT.h.Quaternion[0], AT.h.Matrix[0]);
              this._worldMatrix.setTranslationFromFloats(0, 0, 0), this._worldMatrix.multiplyToRef(AT.h.Matrix[0], this._worldMatrix), this._worldMatrix.setTranslation(AT.h.Fv[0])
            } else {
              const kT = AT.h.Fv[0];
              this._worldMatrix.getTranslationToRef(kT), AT.h.Matrix[1].UkT(cT.getViewMatrix());
              const lT = this.NJ().useRightHandedSystem;
              if (lT && AT.h.Matrix[1].multiplyToRef(TT._TmpRHRestore, AT.h.Matrix[1]), AT.h.Matrix[1].setTranslationFromFloats(0, 0, 0), AT.h.Matrix[1].invertToRef(AT.h.Matrix[0]), (this.billboardMode & TT.BILLBOARDMODE_ALL) !== TT.BILLBOARDMODE_ALL) {
                AT.h.Matrix[0].decompose(void 0, AT.h.Quaternion[0], void 0);
                const kT = AT.h.Fv[1];
                AT.h.Quaternion[0].toEulerAnglesToRef(kT), (this.billboardMode & TT.BILLBOARDMODE_X) !== TT.BILLBOARDMODE_X && (kT.x = 0), (this.billboardMode & TT.BILLBOARDMODE_Y) !== TT.BILLBOARDMODE_Y && (kT.y = 0), (this.billboardMode & TT.BILLBOARDMODE_Z) !== TT.BILLBOARDMODE_Z && (kT.z = 0), lT && (kT.y += Math.PI), AT.d.RotationYawPitchRollToRef(kT.y, kT.x, kT.z, AT.h.Matrix[0])
              }
              this._worldMatrix.setTranslationFromFloats(0, 0, 0), this._worldMatrix.multiplyToRef(AT.h.Matrix[0], this._worldMatrix), this._worldMatrix.setTranslation(AT.h.Fv[0])
            } return this.ignoreNonUniformScaling ? this._updateNonUniformScalingState(!1) : this._scaling.isNonUniformWithinEpsilon(1e-6) ? this._updateNonUniformScalingState(!0) : KT && KT._nonUniformScaling ? this._updateNonUniformScalingState(KT._nonUniformScaling) : this._updateNonUniformScalingState(!1), this._afterComputeWorldMatrix(), this._absolutePosition.I5(this._worldMatrix.m[12], this._worldMatrix.m[13], this._worldMatrix.m[14]), this._isAbsoluteSynced = !1, this.onAfterWorldMatrixUpdateObservable.notifyObservers(this), this._poseMatrix || (this._poseMatrix = AT.d.Invert(this._worldMatrix)), this._worldMatrixDeterminantIsDirty = !0, this._worldMatrix
        }
        resetLocalMatrix() {
          let TT = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          if (this.computeWorldMatrix(), TT) {
            const TT = this.getChildren();
            for (let kT = 0; kT < TT.length; ++kT) {
              const cT = TT[kT];
              if (cT) {
                cT.computeWorldMatrix();
                const TT = AT.h.Matrix[0];
                cT._localMatrix.multiplyToRef(this._localMatrix, TT);
                const kT = AT.h.Quaternion[0];
                TT.decompose(cT.GA, kT, cT.position), cT.rotationQuaternion ? cT.rotationQuaternion.UkT(kT) : kT.toEulerAnglesToRef(cT.rotation)
              }
            }
          }
          this.GA.I5(1, 1, 1), this.position.I5(0, 0, 0), this.rotation.I5(0, 0, 0), this.rotationQuaternion && (this.rotationQuaternion = AT.f.Identity()), this._worldMatrix = AT.d.Identity()
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
          return TT || (TT = this.NJ().activeCamera), AT.m.TransformCoordinates(this.getAbsolutePosition(), TT.getViewMatrix())
        }
        getDistanceToCamera() {
          let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return TT || (TT = this.NJ().activeCamera), this.getAbsolutePosition().subtract(TT.globalPosition).length()
        }
        clone(kT, cT, lT) {
          const MT = xT.d.Clone((() => new TT(kT, this.NJ())), this);
          if (MT.name = kT, MT.id = kT, cT && (MT.parent = cT), !lT) {
            const TT = this.getDescendants(!0);
            for (let cT = 0; cT < TT.length; cT++) {
              const lT = TT[cT];
              lT.clone && lT.clone(kT + "." + lT.name, MT)
            }
          }
          return MT
        }
        serialize(TT) {
          const kT = xT.d.Serialize(this, TT);
          return kT.type = this.getClassName(), kT.uniqueId = this.uniqueId, this.parent && this.parent._serializeAsParent(kT), kT.localMatrix = this.getPivotMatrix().acT(), kT.isEnabled = this.isEnabled(), this._isWorldMatrixFrozen && (kT.bJ = !0), xT.d.AppendSerializedAnimations(this, kT), kT.qt = this.serializeAnimationRanges(), kT
        }
        getChildTransformNodes(kT, cT) {
          const lT = [];
          return this._getDescendants(lT, kT, (kT => (!cT || cT(kT)) && kT instanceof TT)), lT
        }
        dispose(TT) {
          let kT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this.NJ().stopAnimation(this), this.NJ().removeTransformNode(this), this._parentContainer) {
            const TT = this._parentContainer.transformNodes.indexOf(this);
            TT > -1 && this._parentContainer.transformNodes.splice(TT, 1), this._parentContainer = null
          }
          if (this.onAfterWorldMatrixUpdateObservable.clear(), TT) {
            const TT = this.getChildTransformNodes(!0);
            for (const kT of TT) kT.parent = null, kT.computeWorldMatrix(!0)
          }
          super.dispose(TT, kT)
        }
        normalizeToUnitCube() {
          let TT = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            kT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            cT = arguments.length > 2 ? arguments[2] : void 0,
            lT = null,
            MT = null;
          kT && (this.rotationQuaternion ? (MT = this.rotationQuaternion.clone(), this.rotationQuaternion.I5(0, 0, 0, 1)) : this.rotation && (lT = this.rotation.clone(), this.rotation.I5(0, 0, 0)));
          const KT = this.getHierarchyBoundingVectors(TT, cT),
            OT = KT.max.subtract(KT.min),
            yT = Math.max(OT.x, OT.y, OT.z);
          if (0 === yT) return this;
          const fT = 1 / yT;
          return this.GA.scaleInPlace(fT), kT && (this.rotationQuaternion && MT ? this.rotationQuaternion.UkT(MT) : this.rotation && lT && this.rotation.UkT(lT)), this
        }
        _syncAbsoluteScalingAndRotation() {
          this._isAbsoluteSynced || (this._worldMatrix.decompose(this._absoluteScaling, this._absoluteRotationQuaternion), this._isAbsoluteSynced = !0)
        }
      }, (() => {
        const xT = "function" === typeof Symbol && Symbol.metadata ? Object.create(hT[Symbol.metadata] ?? null) : void 0;
        kT = [(0, fT.F)("position")], cT = [(0, fT.F)("rotation")], lT = [(0, fT.x)("rotationQuaternion")], MT = [(0, fT.F)("GA")], KT = [(0, fT.J)("billboardMode")], OT = [(0, fT.J)()], jT = [(0, fT.J)("infiniteDistance")], vT = [(0, fT.J)()], tT = [(0, fT.J)()], (0, yT.e)(null, null, kT, {
          kind: "field",
          name: "_position",
          static: !1,
          private: !1,
          access: {
            has: TT => "_position" in TT,
            get: TT => TT._position,
            set: (TT, kT) => {
              TT._position = kT
            }
          },
          metadata: xT
        }, NT, QT), (0, yT.e)(null, null, cT, {
          kind: "field",
          name: "_rotation",
          static: !1,
          private: !1,
          access: {
            has: TT => "_rotation" in TT,
            get: TT => TT._rotation,
            set: (TT, kT) => {
              TT._rotation = kT
            }
          },
          metadata: xT
        }, ST, DT), (0, yT.e)(null, null, lT, {
          kind: "field",
          name: "_rotationQuaternion",
          static: !1,
          private: !1,
          access: {
            has: TT => "_rotationQuaternion" in TT,
            get: TT => TT._rotationQuaternion,
            set: (TT, kT) => {
              TT._rotationQuaternion = kT
            }
          },
          metadata: xT
        }, aT, FT), (0, yT.e)(null, null, MT, {
          kind: "field",
          name: "_scaling",
          static: !1,
          private: !1,
          access: {
            has: TT => "_scaling" in TT,
            get: TT => TT._scaling,
            set: (TT, kT) => {
              TT._scaling = kT
            }
          },
          metadata: xT
        }, rT, PT), (0, yT.e)(null, null, KT, {
          kind: "field",
          name: "_billboardMode",
          static: !1,
          private: !1,
          access: {
            has: TT => "_billboardMode" in TT,
            get: TT => TT._billboardMode,
            set: (TT, kT) => {
              TT._billboardMode = kT
            }
          },
          metadata: xT
        }, wT, mT), (0, yT.e)(null, null, OT, {
          kind: "field",
          name: "scalingDeterminant",
          static: !1,
          private: !1,
          access: {
            has: TT => "scalingDeterminant" in TT,
            get: TT => TT.scalingDeterminant,
            set: (TT, kT) => {
              TT.scalingDeterminant = kT
            }
          },
          metadata: xT
        }, bT, zT), (0, yT.e)(null, null, jT, {
          kind: "field",
          name: "_infiniteDistance",
          static: !1,
          private: !1,
          access: {
            has: TT => "_infiniteDistance" in TT,
            get: TT => TT._infiniteDistance,
            set: (TT, kT) => {
              TT._infiniteDistance = kT
            }
          },
          metadata: xT
        }, JT, oT), (0, yT.e)(null, null, vT, {
          kind: "field",
          name: "ignoreNonUniformScaling",
          static: !1,
          private: !1,
          access: {
            has: TT => "ignoreNonUniformScaling" in TT,
            get: TT => TT.ignoreNonUniformScaling,
            set: (TT, kT) => {
              TT.ignoreNonUniformScaling = kT
            }
          },
          metadata: xT
        }, HT, eT), (0, yT.e)(null, null, tT, {
          kind: "field",
          name: "reIntegrateRotationIntoRotationQuaternion",
          static: !1,
          private: !1,
          access: {
            has: TT => "reIntegrateRotationIntoRotationQuaternion" in TT,
            get: TT => TT.reIntegrateRotationIntoRotationQuaternion,
            set: (TT, kT) => {
              TT.reIntegrateRotationIntoRotationQuaternion = kT
            }
          },
          metadata: xT
        }, GT, VT), xT && Object.defineProperty(TT, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: xT
        })
      })(), TT.BILLBOARDMODE_NONE = 0, TT.BILLBOARDMODE_X = 1, TT.BILLBOARDMODE_Y = 2, TT.BILLBOARDMODE_Z = 4, TT.BILLBOARDMODE_ALL = 7, TT.BILLBOARDMODE_USE_POSITION = 128, TT.BillboardUseParentOrientation = !1, TT._TmpRotation = AT.f.Zero(), TT._TmpScaling = AT.m.Zero(), TT._TmpTranslation = AT.m.Zero(), TT._TmpRHRestore = AT.d.Scaling(1, 1, -1), TT._LookAtVectorCache = new AT.m(0, 0, 0), TT._RotationAxisCache = new AT.f, TT
    })();

    function hT(TT, kT, cT) {
      const lT = xT.d.Parse((() => new tT(TT.name, kT)), TT, kT, cT);
      if (TT.localMatrix ? lT.setPreTransformMatrix(AT.d.FromArray(TT.localMatrix)) : TT.pivotMatrix && lT.setPivotMatrix(AT.d.FromArray(TT.pivotMatrix)), lT.PD(TT.isEnabled), lT._waitingParsedUniqueId = TT.uniqueId, void 0 !== TT.parentId && (lT._waitingParentId = TT.parentId), void 0 !== TT.parentInstanceIndex && (lT._waitingParentInstanceIndex = TT.parentInstanceIndex), TT.bJ && (lT._waitingFreezeWorldMatrix = TT.bJ), TT.animations) {
        for (let kT = 0; kT < TT.animations.length; kT++) {
          const cT = TT.animations[kT],
            MT = (0, jT.e)("BABYLON.Animation");
          MT && lT.animations.push(MT.Parse(cT))
        }
        CT.b.ParseAnimationRanges(lT, TT, kT)
      }
      return TT.autoAnimate && kT.beginAnimation(lT, TT.autoAnimateFrom, TT.autoAnimateTo, TT.autoAnimateLoop, TT.autoAnimateSpeed || 1), lT
    }
    let NT = !1;

    function QT() {
      NT || (NT = !0, tT.Parse = hT)
    }(lT = tT.prototype).JV ?? (lT.JV = (0, vT.f)("TransformNode", "JV")), (MT = tT.prototype).applyImpulse ?? (MT.applyImpulse = (0, vT.f)("TransformNode", "applyImpulse")), (KT = tT.prototype).applyAngularImpulse ?? (KT.applyAngularImpulse = (0, vT.f)("TransformNode", "applyAngularImpulse")), (OT = tT.prototype).applyTorque ?? (OT.applyTorque = (0, vT.f)("TransformNode", "applyTorque")), Object.getOwnPropertyDescriptor(tT.prototype, "physicsBody") || Object.defineProperty(tT.prototype, "physicsBody", (0, vT.d)("TransformNode", "physicsBody"))
  },
  40030: (TT, kT, cT) => {
    function lT(TT, kT, cT) {
      try {
        const lT = TT.next();
        lT.done ? kT(lT) : lT.value ? lT.value.then((() => {
          lT.value = void 0, kT(lT)
        }), cT) : kT(lT)
      } catch (lT) {
        cT(lT)
      }
    }

    function MT() {
      let TT, kT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 25;
      return (cT, MT, KT) => {
        const OT = performance.now();
        void 0 === TT || OT - TT > kT ? (TT = OT, setTimeout((() => {
          lT(cT, MT, KT)
        }), 0)) : lT(cT, MT, KT)
      }
    }

    function KT(TT, kT, cT, lT, MT) {
      const KT = () => {
        let OT;
        const yT = TT => {
          TT.done ? cT(TT.value) : void 0 === OT ? OT = !0 : KT()
        };
        do {
          OT = void 0, MT && MT.aborted ? lT(new Error("Aborted")) : kT(TT, yT, lT), void 0 === OT && (OT = !1)
        } while (OT)
      };
      KT()
    }

    function OT(TT, kT) {
      let cT;
      return KT(TT, lT, (TT => cT = TT), (TT => {
        throw TT
      }), kT), cT
    }
    async function yT(TT, kT, cT) {
      return await new Promise(((lT, MT) => {
        KT(TT, kT, lT, MT, cT)
      }))
    }

    function fT(TT, kT) {
      return function() {
        return OT(TT(...arguments), kT)
      }
    }
    cT.d(kT, {
      e: () => MT,
      g: () => fT,
      i: () => yT,
      l: () => OT
    })
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);
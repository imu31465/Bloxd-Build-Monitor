export const id = 243;
export const ids = [243];
export const modules = {
  39642: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => tQ,
      g: () => GQ
    });
    var LQ = wQ(39402),
      qQ = wQ(39409),
      oQ = wQ(39518),
      DQ = wQ(36722),
      kQ = wQ(36696),
      vQ = wQ(39650),
      mQ = wQ(38203),
      uQ = wQ(36741),
      HQ = wQ(39277),
      bQ = wQ(37631),
      YQ = wQ(37320),
      xQ = wQ(39360),
      AQ = wQ(39426);
    let tQ = (() => {
      var QQ;
      let FQ, wQ, uQ, tQ, eQ, MQ, GQ, pQ, cQ, CQ, SQ, iQ, WQ, RQ, OQ, sQ, rQ, IQ, UQ = vQ.c,
        NQ = [],
        TQ = [],
        KQ = [],
        zQ = [],
        lQ = [],
        jQ = [],
        aQ = [],
        XQ = [],
        fQ = [],
        VQ = [],
        hQ = [],
        JQ = [],
        EQ = [],
        nQ = [],
        gQ = [],
        PQ = [],
        ZQ = [],
        yQ = [],
        BQ = [],
        dQ = [],
        QF = [],
        FF = [],
        wF = [],
        LF = [],
        qF = [];
      return QQ = class extends UQ {
        get position() {
          return this._position
        }
        set position(QQ) {
          this._position = QQ
        }
        set upVector(QQ) {
          this._upVector = QQ
        }
        get upVector() {
          return this._upVector
        }
        get screenArea() {
          let FQ, wQ;
          if (this.mode === QQ.PERSPECTIVE_CAMERA) this.fovMode === QQ.FOVMODE_VERTICAL_FIXED ? (wQ = 2 * this.minZ * Math.tan(this.fov / 2), FQ = this.Wx().getAspectRatio(this) * wQ) : (FQ = 2 * this.minZ * Math.tan(this.fov / 2), wQ = FQ / this.Wx().getAspectRatio(this));
          else {
            const QQ = this.Wx().getRenderWidth() / 2,
              LQ = this.Wx().getRenderHeight() / 2;
            FQ = (this.orthoRight ?? QQ) - (this.orthoLeft ?? -QQ), wQ = (this.orthoTop ?? LQ) - (this.orthoBottom ?? -LQ)
          }
          return FQ * wQ
        }
        set orthoLeft(QQ) {
          this._orthoLeft = QQ;
          for (const FQ of this._rigCameras) FQ.orthoLeft = QQ
        }
        get orthoLeft() {
          return this._orthoLeft
        }
        set orthoRight(QQ) {
          this._orthoRight = QQ;
          for (const FQ of this._rigCameras) FQ.orthoRight = QQ
        }
        get orthoRight() {
          return this._orthoRight
        }
        set orthoBottom(QQ) {
          this._orthoBottom = QQ;
          for (const FQ of this._rigCameras) FQ.orthoBottom = QQ
        }
        get orthoBottom() {
          return this._orthoBottom
        }
        set orthoTop(QQ) {
          this._orthoTop = QQ;
          for (const FQ of this._rigCameras) FQ.orthoTop = QQ
        }
        get orthoTop() {
          return this._orthoTop
        }
        setFocalLength(QQ) {
          let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 36;
          this.fov = 2 * Math.atan(FQ / (2 * QQ))
        }
        get inertia() {
          return this._baseInertia
        }
        set inertia(QQ) {
          this._baseInertia = QQ
        }
        set mode(QQ) {
          this._mode = QQ;
          for (const FQ of this._rigCameras) FQ.mode = QQ
        }
        get mode() {
          return this._mode
        }
        get hasMoved() {
          return this._hasMoved
        }
        constructor(FQ, wQ, qQ) {
          let vQ = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
          (0, xQ.c)(), super(FQ, qQ, !1), this.inputs = (0, LQ.l)(this, NQ), this._position = (0, LQ.l)(this, TQ, kQ.p.Zero()), this._upVector = ((0, LQ.l)(this, KQ), (0, LQ.l)(this, zQ, kQ.p.Up())), this.oblique = ((0, LQ.l)(this, lQ), null), this._orthoLeft = null, this._orthoRight = null, this._orthoBottom = null, this._orthoTop = null, this.fov = (0, LQ.l)(this, jQ, .8), this.projectionPlaneTilt = ((0, LQ.l)(this, aQ), (0, LQ.l)(this, XQ, 0)), this.minZ = ((0, LQ.l)(this, fQ), (0, LQ.l)(this, VQ, 1)), this.maxZ = ((0, LQ.l)(this, hQ), (0, LQ.l)(this, JQ, 1e4)), this._baseInertia = ((0, LQ.l)(this, EQ), .9), this._mode = QQ.PERSPECTIVE_CAMERA, this.isIntermediate = !1, this.viewport = new bQ.c(0, 0, 1, 1), this.layerMask = (0, LQ.l)(this, nQ, 268435455), this.fovMode = ((0, LQ.l)(this, gQ), (0, LQ.l)(this, PQ, QQ.FOVMODE_VERTICAL_FIXED)), this.cameraRigMode = ((0, LQ.l)(this, ZQ), (0, LQ.l)(this, yQ, QQ.RIG_MODE_NONE)), this.interaxialDistance = ((0, LQ.l)(this, BQ), (0, LQ.l)(this, dQ, void 0)), this.isStereoscopicSideBySide = ((0, LQ.l)(this, QF), (0, LQ.l)(this, FF, void 0)), this.ignoreCameraMaxZ = ((0, LQ.l)(this, wF), (0, LQ.l)(this, LF, !1)), this.customRenderTargets = ((0, LQ.l)(this, qF), []), this.outputRenderTarget = null, this.onViewMatrixChangedObservable = new DQ.e, this.onProjectionMatrixChangedObservable = new DQ.e, this.onAfterCheckInputsObservable = new DQ.e, this.onRestoreStateObservable = new DQ.e, this.isRigCamera = !1, this._hasMoved = !1, this._rigCameras = new Array, this._skipRendering = !1, this._projectionMatrix = new kQ.c, this._postProcesses = new Array, this._activeMeshes = new oQ.d(256), this._globalPosition = kQ.p.Zero(), this._computedViewMatrix = kQ.c.Identity(), this._doNotComputeProjectionMatrix = !1, this._transformMatrix = kQ.c.Zero(), this._refreshFrustumPlanes = !0, this._absoluteRotation = kQ.e.Identity(), this._isCamera = !0, this._isLeftCamera = !1, this._isRightCamera = !1, this.layerMask = this.iN().defaultCameraLayerMask, this.iN().addCamera(this), vQ && !this.iN().activeCamera && (this.iN().activeCamera = this), this.position = wQ, this.renderPassId = this.iN().Wx().createRenderPassId(`Camera ${FQ}`)
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
          return "Tt"
        }
        toString(QQ) {
          let FQ = "Name: " + this.name;
          if (FQ += ", type: " + this.getClassName(), this.animations)
            for (let wQ = 0; wQ < this.animations.length; wQ++) FQ += ", animation[0]: " + this.animations[wQ].toString(QQ);
          return FQ
        }
        applyVerticalCorrection() {
          const QQ = this.absoluteRotation.toEulerAngles();
          this.projectionPlaneTilt = this._scene.useRightHandedSystem ? -QQ.x : QQ.x
        }
        get globalPosition() {
          return this._globalPosition
        }
        getActiveMeshes() {
          return this._activeMeshes
        }
        isActiveMesh(QQ) {
          return -1 !== this._activeMeshes.indexOf(QQ)
        }
        isReady() {
          let QQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (QQ)
            for (const FQ of this._postProcesses)
              if (FQ && !FQ.isReady()) return !1;
          return super.isReady(QQ)
        }
        _initCache() {
          super._initCache(), this._cache.position = new kQ.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.upVector = new kQ.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.mode = void 0, this._cache.minZ = void 0, this._cache.maxZ = void 0, this._cache.fov = void 0, this._cache.fovMode = void 0, this._cache.aspectRatio = void 0, this._cache.orthoLeft = void 0, this._cache.orthoRight = void 0, this._cache.orthoBottom = void 0, this._cache.orthoTop = void 0, this._cache.obliqueAngle = void 0, this._cache.obliqueLength = void 0, this._cache.obliqueOffset = void 0, this._cache.renderWidth = void 0, this._cache.renderHeight = void 0
        }
        _updateCache(QQ) {
          QQ || super._updateCache(), this._cache.position.Qs(this.position), this._cache.upVector.Qs(this.upVector)
        }
        _isSynchronized() {
          return this._isSynchronizedViewMatrix() && this._isSynchronizedProjectionMatrix()
        }
        _isSynchronizedViewMatrix() {
          return !!super._isSynchronized() && (this._cache.position.equals(this.position) && this._cache.upVector.equals(this.upVector) && this.isSynchronizedWithParent())
        }
        _isSynchronizedProjectionMatrix() {
          const FQ = this.ignoreCameraMaxZ ? 0 : this.maxZ;
          let wQ = this._cache.mode === this.mode && this._cache.minZ === this.minZ && this._cache.maxZ === FQ;
          if (!wQ) return !1;
          const LQ = this.Wx();
          return this.mode === QQ.PERSPECTIVE_CAMERA ? wQ = this._cache.fov === this.fov && this._cache.fovMode === this.fovMode && this._cache.aspectRatio === LQ.getAspectRatio(this) && this._cache.projectionPlaneTilt === this.projectionPlaneTilt : (wQ = this._cache.orthoLeft === this.orthoLeft && this._cache.orthoRight === this.orthoRight && this._cache.orthoBottom === this.orthoBottom && this._cache.orthoTop === this.orthoTop && this._cache.renderWidth === LQ.getRenderWidth() && this._cache.renderHeight === LQ.getRenderHeight(), this.oblique && (wQ = wQ && this._cache.obliqueAngle === this.oblique.angle && this._cache.obliqueLength === this.oblique.length && this._cache.obliqueOffset === this.oblique.offset)), wQ
        }
        attachControl(QQ, FQ) {}
        detachControl(QQ) {}
        update() {
          this._hasMoved = !1, this._checkInputs(), this.cameraRigMode !== QQ.RIG_MODE_NONE && this._updateRigCameras(), this.getViewMatrix(), this.getProjectionMatrix()
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
          for (let QQ = 0; QQ < this._postProcesses.length; QQ++)
            if (null !== this._postProcesses[QQ]) return this._postProcesses[QQ];
          return null
        }
        _cascadePostProcessesToRigCams() {
          const QQ = this._getFirstPostProcess();
          QQ && QQ.markTextureDirty();
          for (let FQ = 0, wQ = this._rigCameras.length; FQ < wQ; FQ++) {
            const QQ = this._rigCameras[FQ],
              wQ = QQ._rigPostProcess;
            if (wQ) {
              "pass" === wQ.getEffectName() && (QQ.isIntermediate = 0 === this._postProcesses.length), QQ._postProcesses = this._postProcesses.slice(0).concat(wQ), wQ.markTextureDirty()
            } else QQ._postProcesses = this._postProcesses.slice(0)
          }
        }
        attachPostProcess(QQ) {
          let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          return !QQ.isReusable() && this._postProcesses.indexOf(QQ) > -1 ? (mQ.c.Error("You're trying to reuse a post process not defined as reusable."), 0) : (null == FQ || FQ < 0 ? this._postProcesses.push(QQ) : null === this._postProcesses[FQ] ? this._postProcesses[FQ] = QQ : this._postProcesses.splice(FQ, 0, QQ), this._cascadePostProcessesToRigCams(), this._scene.prePassRenderer && this._scene.prePassRenderer.dFQ(), this._postProcesses.indexOf(QQ))
        }
        detachPostProcess(QQ) {
          const FQ = this._postProcesses.indexOf(QQ); - 1 !== FQ && (this._postProcesses[FQ] = null), this._scene.prePassRenderer && this._scene.prePassRenderer.dFQ(), this._cascadePostProcessesToRigCams()
        }
        getWorldMatrix() {
          return this._isSynchronizedViewMatrix() || this.getViewMatrix(), this._worldMatrix
        }
        _getViewMatrix() {
          return kQ.c.Identity()
        }
        getViewMatrix(QQ) {
          return !QQ && this._isSynchronizedViewMatrix() || (this._hasMoved = !0, this.updateCache(), this._computedViewMatrix = this._getViewMatrix(), this._currentRenderId = this.iN().getRenderId(), this._childUpdateId++, this._refreshFrustumPlanes = !0, this._cameraRigParams && this._cameraRigParams.vrPreViewMatrix && this._computedViewMatrix.multiplyToRef(this._cameraRigParams.vrPreViewMatrix, this._computedViewMatrix), this.parent && this.parent.onViewMatrixChangedObservable && this.parent.onViewMatrixChangedObservable.notifyObservers(this.parent), this.onViewMatrixChangedObservable.notifyObservers(this), this._computedViewMatrix.invertToRef(this._worldMatrix), this._worldMatrix.getTranslationToRef(this._globalPosition)), this._computedViewMatrix
        }
        freezeProjectionMatrix(QQ) {
          this._doNotComputeProjectionMatrix = !0, void 0 !== QQ && (this._projectionMatrix = QQ)
        }
        unfreezeProjectionMatrix() {
          this._doNotComputeProjectionMatrix = !1
        }
        getProjectionMatrix(FQ) {
          if (this._doNotComputeProjectionMatrix || !FQ && this._isSynchronizedProjectionMatrix()) return this._projectionMatrix;
          const wQ = this.ignoreCameraMaxZ ? 0 : this.maxZ;
          this._cache.mode = this.mode, this._cache.minZ = this.minZ, this._cache.maxZ = wQ, this._refreshFrustumPlanes = !0;
          const LQ = this.Wx(),
            qQ = this.iN(),
            oQ = LQ.SLQ;
          if (this.mode === QQ.PERSPECTIVE_CAMERA) {
            let FQ;
            this._cache.fov = this.fov, this._cache.fovMode = this.fovMode, this._cache.aspectRatio = LQ.getAspectRatio(this), this._cache.projectionPlaneTilt = this.projectionPlaneTilt, this.minZ <= 0 && (this.minZ = .1), FQ = qQ.useRightHandedSystem ? kQ.c.PerspectiveFovRHToRef : kQ.c.PerspectiveFovLHToRef, FQ(this.fov, LQ.getAspectRatio(this), oQ ? wQ : this.minZ, oQ ? this.minZ : wQ, this._projectionMatrix, this.fovMode === QQ.FOVMODE_VERTICAL_FIXED, LQ.isNDCHalfZRange, this.projectionPlaneTilt, oQ)
          } else {
            const QQ = LQ.getRenderWidth() / 2,
              FQ = LQ.getRenderHeight() / 2;
            qQ.useRightHandedSystem ? this.oblique ? kQ.c.ObliqueOffCenterRHToRef(this.orthoLeft ?? -QQ, this.orthoRight ?? QQ, this.orthoBottom ?? -FQ, this.orthoTop ?? FQ, oQ ? wQ : this.minZ, oQ ? this.minZ : wQ, this.oblique.length, this.oblique.angle, this._computeObliqueDistance(this.oblique.offset), this._projectionMatrix, LQ.isNDCHalfZRange) : kQ.c.OrthoOffCenterRHToRef(this.orthoLeft ?? -QQ, this.orthoRight ?? QQ, this.orthoBottom ?? -FQ, this.orthoTop ?? FQ, oQ ? wQ : this.minZ, oQ ? this.minZ : wQ, this._projectionMatrix, LQ.isNDCHalfZRange) : this.oblique ? kQ.c.ObliqueOffCenterLHToRef(this.orthoLeft ?? -QQ, this.orthoRight ?? QQ, this.orthoBottom ?? -FQ, this.orthoTop ?? FQ, oQ ? wQ : this.minZ, oQ ? this.minZ : wQ, this.oblique.length, this.oblique.angle, this._computeObliqueDistance(this.oblique.offset), this._projectionMatrix, LQ.isNDCHalfZRange) : kQ.c.OrthoOffCenterLHToRef(this.orthoLeft ?? -QQ, this.orthoRight ?? QQ, this.orthoBottom ?? -FQ, this.orthoTop ?? FQ, oQ ? wQ : this.minZ, oQ ? this.minZ : wQ, this._projectionMatrix, LQ.isNDCHalfZRange), this._cache.orthoLeft = this.orthoLeft, this._cache.orthoRight = this.orthoRight, this._cache.orthoBottom = this.orthoBottom, this._cache.orthoTop = this.orthoTop, this._cache.obliqueAngle = this.oblique?.angle, this._cache.obliqueLength = this.oblique?.length, this._cache.obliqueOffset = this.oblique?.offset, this._cache.renderWidth = LQ.getRenderWidth(), this._cache.renderHeight = LQ.getRenderHeight()
          }
          return this.onProjectionMatrixChangedObservable.notifyObservers(this), this._projectionMatrix
        }
        getTransformationMatrix() {
          return this._computedViewMatrix.multiplyToRef(this._projectionMatrix, this._transformMatrix), this._transformMatrix
        }
        _computeObliqueDistance(QQ) {
          return (this.radius || (this.target ? kQ.p.Distance(this.position, this.target) : this.position.length())) + QQ
        }
        _updateFrustumPlanes() {
          this._refreshFrustumPlanes && (this.getTransformationMatrix(), this._frustumPlanes ? YQ.c.GetPlanesToRef(this._transformMatrix, this._frustumPlanes) : this._frustumPlanes = YQ.c.GetPlanes(this._transformMatrix), this._refreshFrustumPlanes = !1)
        }
        isInFrustum(QQ) {
          let FQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._updateFrustumPlanes(), FQ && this.rigCameras.length > 0) {
            let FQ = !1;
            for (const wQ of this.rigCameras) wQ._updateFrustumPlanes(), FQ = FQ || QQ.isInFrustum(wQ._frustumPlanes);
            return FQ
          }
          return QQ.isInFrustum(this._frustumPlanes)
        }
        isCompletelyInFrustum(QQ) {
          return this._updateFrustumPlanes(), QQ.isCompletelyInFrustum(this._frustumPlanes)
        }
        getForwardRay() {
          throw (0, HQ.k)("Ray")
        }
        getForwardRayToRef(QQ) {
          throw (0, HQ.k)("Ray")
        }
        dispose(FQ) {
          let wQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          for (this.onViewMatrixChangedObservable.clear(), this.onProjectionMatrixChangedObservable.clear(), this.onAfterCheckInputsObservable.clear(), this.onRestoreStateObservable.clear(), this.inputs && this.inputs.clear(), this.iN().stopAnimation(this), this.iN().removeCamera(this); this._rigCameras.length > 0;) {
            const QQ = this._rigCameras.pop();
            QQ && QQ.dispose()
          }
          if (this._parentContainer) {
            const QQ = this._parentContainer.cameras.indexOf(this);
            QQ > -1 && this._parentContainer.cameras.splice(QQ, 1), this._parentContainer = null
          }
          if (this._rigPostProcess) this._rigPostProcess.dispose(this), this._rigPostProcess = null, this._postProcesses.length = 0;
          else if (this.cameraRigMode !== QQ.RIG_MODE_NONE) this._rigPostProcess = null, this._postProcesses.length = 0;
          else {
            let QQ = this._postProcesses.length;
            for (; --QQ >= 0;) {
              const FQ = this._postProcesses[QQ];
              FQ && FQ.dispose(this)
            }
          }
          let LQ = this.customRenderTargets.length;
          for (; --LQ >= 0;) this.customRenderTargets[LQ].dispose();
          this.customRenderTargets.length = 0, this._activeMeshes.dispose(), this.iN().Wx().releaseRenderPassId(this.renderPassId), super.dispose(FQ, wQ)
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
        setCameraRigMode(FQ, wQ) {
          if (this.cameraRigMode !== FQ) {
            for (; this._rigCameras.length > 0;) {
              const QQ = this._rigCameras.pop();
              QQ && QQ.dispose()
            }
            if (this.cameraRigMode = FQ, this._cameraRigParams = {}, this._cameraRigParams.interaxialDistance = wQ.interaxialDistance || .0637, this._cameraRigParams.stereoHalfAngle = this._cameraRigParams.interaxialDistance / .0637 * (Math.PI / 180), this.cameraRigMode !== QQ.RIG_MODE_NONE) {
              const QQ = this.createRigCamera(this.name + "_L", 0);
              QQ && (QQ._isLeftCamera = !0);
              const FQ = this.createRigCamera(this.name + "_R", 1);
              FQ && (FQ._isRightCamera = !0), QQ && FQ && (this._rigCameras.push(QQ), this._rigCameras.push(FQ))
            }
            this._setRigMode(wQ), this._cascadePostProcessesToRigCams(), this.update()
          }
        }
        _setRigMode(QQ) {}
        _getVRProjectionMatrix() {
          return kQ.c.PerspectiveFovLHToRef(this._cameraRigParams.vrMetrics.aspectRatioFov, this._cameraRigParams.vrMetrics.aspectRatio, this.minZ, this.ignoreCameraMaxZ ? 0 : this.maxZ, this._cameraRigParams.vrWorkMatrix, !0, this.Wx().isNDCHalfZRange), this._cameraRigParams.vrWorkMatrix.multiplyToRef(this._cameraRigParams.vrHMatrix, this._projectionMatrix), this._projectionMatrix
        }
        setCameraRigParameter(QQ, FQ) {
          this._cameraRigParams || (this._cameraRigParams = {}), this._cameraRigParams[QQ] = FQ, "interaxialDistance" === QQ && (this._cameraRigParams.stereoHalfAngle = FQ / .0637 * (Math.PI / 180))
        }
        createRigCamera(QQ, FQ) {
          return null
        }
        _updateRigCameras() {
          for (let QQ = 0; QQ < this._rigCameras.length; QQ++) this._rigCameras[QQ].minZ = this.minZ, this._rigCameras[QQ].maxZ = this.ignoreCameraMaxZ ? 0 : this.maxZ, this._rigCameras[QQ].fov = this.fov, this._rigCameras[QQ].upVector.Qs(this.upVector);
          this.cameraRigMode === QQ.RIG_MODE_STEREOSCOPIC_ANAGLYPH && (this._rigCameras[0].viewport = this._rigCameras[1].viewport = this.viewport)
        }
        _setupInputs() {}
        serialize() {
          const QQ = AQ.c.Serialize(this);
          return QQ.uniqueId = this.uniqueId, QQ.type = this.getClassName(), this.parent && this.parent._serializeAsParent(QQ), this.inputs && this.inputs.serialize(QQ), AQ.c.AppendSerializedAnimations(this, QQ), QQ.PA = this.serializeAnimationRanges(), QQ.isEnabled = this.isEnabled(), QQ
        }
        clone(FQ) {
          let wQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const LQ = AQ.c.Clone(QQ.GetConstructorFromName(this.getClassName(), FQ, this.iN(), this.interaxialDistance, this.isStereoscopicSideBySide), this);
          return LQ.name = FQ, LQ.parent = wQ, this.onClonedObservable.notifyObservers(LQ), LQ
        }
        Py(QQ) {
          const FQ = kQ.p.Zero();
          return this.getDirectionToRef(QQ, FQ), FQ
        }
        get absoluteRotation() {
          return this.getWorldMatrix().decompose(void 0, this._absoluteRotation), this._absoluteRotation
        }
        getDirectionToRef(QQ, FQ) {
          kQ.p.TransformNormalToRef(QQ, this.getWorldMatrix(), FQ)
        }
        static GetConstructorFromName(FQ, wQ, LQ) {
          let qQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
            oQ = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
          const DQ = vQ.c.Construct(FQ, wQ, LQ, {
            interaxial_distance: qQ,
            isStereoscopicSideBySide: oQ
          });
          return DQ || (() => QQ._CreateDefaultParsedCamera(wQ, LQ))
        }
        computeWorldMatrix() {
          return this.getWorldMatrix()
        }
        _calculateHandednessMultiplier() {
          let QQ = this.iN().useRightHandedSystem ? -1 : 1;
          return this.parent && this.parent._getWorldMatrixDeterminant() < 0 && (QQ *= -1), QQ
        }
      }, (() => {
        const oQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(UQ[Symbol.metadata] ?? null) : void 0;
        FQ = [(0, qQ.F)("position")], wQ = [(0, qQ.F)("upVector")], uQ = [(0, qQ.I)()], tQ = [(0, qQ.I)()], eQ = [(0, qQ.I)()], MQ = [(0, qQ.I)()], GQ = [(0, qQ.I)()], pQ = [(0, qQ.I)()], cQ = [(0, qQ.I)()], CQ = [(0, qQ.I)()], SQ = [(0, qQ.I)()], iQ = [(0, qQ.I)()], WQ = [(0, qQ.I)()], RQ = [(0, qQ.I)()], OQ = [(0, qQ.I)()], sQ = [(0, qQ.I)()], rQ = [(0, qQ.I)()], IQ = [(0, qQ.I)()], (0, LQ.i)(QQ, null, uQ, {
          kind: "getter",
          name: "orthoLeft",
          static: !1,
          private: !1,
          access: {
            has: QQ => "orthoLeft" in QQ,
            get: QQ => QQ.orthoLeft
          },
          metadata: oQ
        }, null, NQ), (0, LQ.i)(QQ, null, tQ, {
          kind: "getter",
          name: "orthoRight",
          static: !1,
          private: !1,
          access: {
            has: QQ => "orthoRight" in QQ,
            get: QQ => QQ.orthoRight
          },
          metadata: oQ
        }, null, NQ), (0, LQ.i)(QQ, null, eQ, {
          kind: "getter",
          name: "orthoBottom",
          static: !1,
          private: !1,
          access: {
            has: QQ => "orthoBottom" in QQ,
            get: QQ => QQ.orthoBottom
          },
          metadata: oQ
        }, null, NQ), (0, LQ.i)(QQ, null, MQ, {
          kind: "getter",
          name: "orthoTop",
          static: !1,
          private: !1,
          access: {
            has: QQ => "orthoTop" in QQ,
            get: QQ => QQ.orthoTop
          },
          metadata: oQ
        }, null, NQ), (0, LQ.i)(QQ, null, SQ, {
          kind: "getter",
          name: "inertia",
          static: !1,
          private: !1,
          access: {
            has: QQ => "inertia" in QQ,
            get: QQ => QQ.inertia
          },
          metadata: oQ
        }, null, NQ), (0, LQ.i)(QQ, null, iQ, {
          kind: "getter",
          name: "mode",
          static: !1,
          private: !1,
          access: {
            has: QQ => "mode" in QQ,
            get: QQ => QQ.mode
          },
          metadata: oQ
        }, null, NQ), (0, LQ.i)(null, null, FQ, {
          kind: "field",
          name: "_position",
          static: !1,
          private: !1,
          access: {
            has: QQ => "_position" in QQ,
            get: QQ => QQ._position,
            set: (QQ, FQ) => {
              QQ._position = FQ
            }
          },
          metadata: oQ
        }, TQ, KQ), (0, LQ.i)(null, null, wQ, {
          kind: "field",
          name: "_upVector",
          static: !1,
          private: !1,
          access: {
            has: QQ => "_upVector" in QQ,
            get: QQ => QQ._upVector,
            set: (QQ, FQ) => {
              QQ._upVector = FQ
            }
          },
          metadata: oQ
        }, zQ, lQ), (0, LQ.i)(null, null, GQ, {
          kind: "field",
          name: "fov",
          static: !1,
          private: !1,
          access: {
            has: QQ => "fov" in QQ,
            get: QQ => QQ.fov,
            set: (QQ, FQ) => {
              QQ.fov = FQ
            }
          },
          metadata: oQ
        }, jQ, aQ), (0, LQ.i)(null, null, pQ, {
          kind: "field",
          name: "projectionPlaneTilt",
          static: !1,
          private: !1,
          access: {
            has: QQ => "projectionPlaneTilt" in QQ,
            get: QQ => QQ.projectionPlaneTilt,
            set: (QQ, FQ) => {
              QQ.projectionPlaneTilt = FQ
            }
          },
          metadata: oQ
        }, XQ, fQ), (0, LQ.i)(null, null, cQ, {
          kind: "field",
          name: "minZ",
          static: !1,
          private: !1,
          access: {
            has: QQ => "minZ" in QQ,
            get: QQ => QQ.minZ,
            set: (QQ, FQ) => {
              QQ.minZ = FQ
            }
          },
          metadata: oQ
        }, VQ, hQ), (0, LQ.i)(null, null, CQ, {
          kind: "field",
          name: "maxZ",
          static: !1,
          private: !1,
          access: {
            has: QQ => "maxZ" in QQ,
            get: QQ => QQ.maxZ,
            set: (QQ, FQ) => {
              QQ.maxZ = FQ
            }
          },
          metadata: oQ
        }, JQ, EQ), (0, LQ.i)(null, null, WQ, {
          kind: "field",
          name: "layerMask",
          static: !1,
          private: !1,
          access: {
            has: QQ => "layerMask" in QQ,
            get: QQ => QQ.layerMask,
            set: (QQ, FQ) => {
              QQ.layerMask = FQ
            }
          },
          metadata: oQ
        }, nQ, gQ), (0, LQ.i)(null, null, RQ, {
          kind: "field",
          name: "fovMode",
          static: !1,
          private: !1,
          access: {
            has: QQ => "fovMode" in QQ,
            get: QQ => QQ.fovMode,
            set: (QQ, FQ) => {
              QQ.fovMode = FQ
            }
          },
          metadata: oQ
        }, PQ, ZQ), (0, LQ.i)(null, null, OQ, {
          kind: "field",
          name: "cameraRigMode",
          static: !1,
          private: !1,
          access: {
            has: QQ => "cameraRigMode" in QQ,
            get: QQ => QQ.cameraRigMode,
            set: (QQ, FQ) => {
              QQ.cameraRigMode = FQ
            }
          },
          metadata: oQ
        }, yQ, BQ), (0, LQ.i)(null, null, sQ, {
          kind: "field",
          name: "interaxialDistance",
          static: !1,
          private: !1,
          access: {
            has: QQ => "interaxialDistance" in QQ,
            get: QQ => QQ.interaxialDistance,
            set: (QQ, FQ) => {
              QQ.interaxialDistance = FQ
            }
          },
          metadata: oQ
        }, dQ, QF), (0, LQ.i)(null, null, rQ, {
          kind: "field",
          name: "isStereoscopicSideBySide",
          static: !1,
          private: !1,
          access: {
            has: QQ => "isStereoscopicSideBySide" in QQ,
            get: QQ => QQ.isStereoscopicSideBySide,
            set: (QQ, FQ) => {
              QQ.isStereoscopicSideBySide = FQ
            }
          },
          metadata: oQ
        }, FF, wF), (0, LQ.i)(null, null, IQ, {
          kind: "field",
          name: "ignoreCameraMaxZ",
          static: !1,
          private: !1,
          access: {
            has: QQ => "ignoreCameraMaxZ" in QQ,
            get: QQ => QQ.ignoreCameraMaxZ,
            set: (QQ, FQ) => {
              QQ.ignoreCameraMaxZ = FQ
            }
          },
          metadata: oQ
        }, LF, qF), oQ && Object.defineProperty(QQ, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: oQ
        })
      })(), QQ._CreateDefaultParsedCamera = (QQ, FQ) => {
        throw (0, HQ.k)("UniversalCamera")
      }, QQ.PERSPECTIVE_CAMERA = 0, QQ.ORTHOGRAPHIC_CAMERA = 1, QQ.FOVMODE_VERTICAL_FIXED = 0, QQ.FOVMODE_HORIZONTAL_FIXED = 1, QQ.RIG_MODE_NONE = 0, QQ.RIG_MODE_STEREOSCOPIC_ANAGLYPH = 10, QQ.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL = 11, QQ.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED = 12, QQ.RIG_MODE_STEREOSCOPIC_OVERUNDER = 13, QQ.RIG_MODE_STEREOSCOPIC_INTERLACED = 14, QQ.RIG_MODE_VR = 20, QQ.RIG_MODE_CUSTOM = 22, QQ.ForceAttachControlToAlwaysPreventDefault = !1, QQ
    })();

    function eQ(QQ, FQ) {
      const wQ = QQ.type,
        LQ = tQ.GetConstructorFromName(wQ, QQ.name, FQ, QQ.interaxial_distance, QQ.isStereoscopicSideBySide),
        qQ = AQ.c.Parse(LQ, QQ, FQ);
      if (void 0 !== QQ.parentId && (qQ._waitingParentId = QQ.parentId), void 0 !== QQ.parentInstanceIndex && (qQ._waitingParentInstanceIndex = QQ.parentInstanceIndex), qQ.inputs && (qQ.inputs.parse(QQ), qQ._setupInputs()), QQ.upVector && (qQ.upVector = kQ.p.FromArray(QQ.upVector)), qQ.setPosition && (qQ.position.vQQ(0, 0, 0), qQ.setPosition(kQ.p.FromArray(QQ.position))), QQ.target && qQ.setTarget && qQ.setTarget(kQ.p.FromArray(QQ.target)), QQ.cameraRigMode) {
        const FQ = QQ.interaxial_distance ? {
          interaxialDistance: QQ.interaxial_distance
        } : {};
        qQ.setCameraRigMode(QQ.cameraRigMode, FQ)
      }
      if (QQ.animations) {
        for (let FQ = 0; FQ < QQ.animations.length; FQ++) {
          const wQ = QQ.animations[FQ],
            LQ = (0, uQ.b)("BABYLON.Animation");
          LQ && qQ.animations.push(LQ.Parse(wQ))
        }
        vQ.c.ParseAnimationRanges(qQ, QQ, FQ)
      }
      return QQ.autoAnimate && FQ.beginAnimation(qQ, QQ.autoAnimateFrom, QQ.autoAnimateTo, QQ.autoAnimateLoop, QQ.autoAnimateSpeed || 1), void 0 !== QQ.isEnabled && qQ.Qr(QQ.isEnabled), qQ
    }
    let MQ = !1;

    function GQ() {
      MQ || (MQ = !0, tQ.Parse = eQ)
    }
  },
  39664: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => qQ
    });
    var LQ = wQ(36696);
    class qQ {
      constructor(QQ, FQ, wQ) {
        this._cameraPosition = FQ, this._behavior = wQ, this.activeInput = !1, this.speed = 1, this.lE = 1, this.panSpeed = 1, this.rotationXSpeed = 1, this.rotationYSpeed = 1, this._zoomSpeedMultiplier = 1, this._panSpeedMultiplier = 1, this.zoomInertia = .9, this.panInertia = .9, this.rotationInertia = .9, this.zoomAccumulatedPixels = 0, this.panAccumulatedPixels = new LQ.p, this.rotationAccumulatedPixels = new LQ.p, this.zoomDeltaCurrentFrame = 0, this.panDeltaCurrentFrame = LQ.p.Zero(), this.rotationDeltaCurrentFrame = LQ.p.Zero(), this._zoomVelocity = 0, this._panVelocity = new LQ.p, this.referenceFrameRate = 60, this._rotationVelocity = new LQ.p, this._prevFrameTimeMs = 0, this._scene = QQ
      }
      computeCurrentFrameDeltas() {
        const QQ = this._scene.Wx().getDeltaTime(),
          FQ = this._getEffectiveDeltaMs(QQ);
        if (0 === this._zoomVelocity && 0 === this.zoomAccumulatedPixels && 0 === this._panVelocity.x && 0 === this._panVelocity.y && 0 === this._panVelocity.z && 0 === this.panAccumulatedPixels.x && 0 === this.panAccumulatedPixels.y && 0 === this.panAccumulatedPixels.z && 0 === this._rotationVelocity.x && 0 === this._rotationVelocity.y && 0 === this._rotationVelocity.z && 0 === this.rotationAccumulatedPixels.x && 0 === this.rotationAccumulatedPixels.y && 0 === this.rotationAccumulatedPixels.z && !this.activeInput) return this.panDeltaCurrentFrame.K3(0), this.rotationDeltaCurrentFrame.K3(0), this.zoomDeltaCurrentFrame = 0, void(QQ > 0 && (this._prevFrameTimeMs = QQ));
        this.panDeltaCurrentFrame.K3(0), this.rotationDeltaCurrentFrame.K3(0), this.zoomDeltaCurrentFrame = 0;
        (this.panAccumulatedPixels.lengthSquared() > 0 || this.rotationAccumulatedPixels.lengthSquared() > 0 || 0 !== this.zoomAccumulatedPixels) && this._behavior?.isInterpolating && this._behavior.stopAllAnimations(), this._panVelocity.vQQ(this._calculateCurrentVelocity(this._panVelocity.x, this.panAccumulatedPixels.x, this.panInertia), this._calculateCurrentVelocity(this._panVelocity.y, this.panAccumulatedPixels.y, this.panInertia), this._calculateCurrentVelocity(this._panVelocity.z, this.panAccumulatedPixels.z, this.panInertia)), this._panVelocity.scaleToRef(this.speed * this.panSpeed * this._panSpeedMultiplier * FQ, this.panDeltaCurrentFrame), this._rotationVelocity.vQQ(this._calculateCurrentVelocity(this._rotationVelocity.x, this.rotationAccumulatedPixels.x, this.rotationInertia), this._calculateCurrentVelocity(this._rotationVelocity.y, this.rotationAccumulatedPixels.y, this.rotationInertia), this._calculateCurrentVelocity(this._rotationVelocity.z, this.rotationAccumulatedPixels.z, this.rotationInertia)), this.rotationDeltaCurrentFrame.vQQ(this._rotationVelocity.x * this.speed * this.rotationXSpeed * FQ, this._rotationVelocity.y * this.speed * this.rotationYSpeed * FQ, 0), this._zoomVelocity = this._calculateCurrentVelocity(this._zoomVelocity, this.zoomAccumulatedPixels, this.zoomInertia), this.zoomDeltaCurrentFrame = this._zoomVelocity * (this.speed * this.lE * this._zoomSpeedMultiplier) * FQ, QQ > 0 && (this._prevFrameTimeMs = QQ), this.zoomAccumulatedPixels = 0, this.panAccumulatedPixels.K3(0), this.rotationAccumulatedPixels.K3(0), this.activeInput = !1
      }
      resetRotationVelocity() {
        this._rotationVelocity.K3(0), this.rotationAccumulatedPixels.K3(0)
      }
      resetPanVelocity() {
        this._panVelocity.K3(0), this.panAccumulatedPixels.K3(0)
      }
      resetZoomVelocity() {
        this._zoomVelocity = 0, this.zoomAccumulatedPixels = 0
      }
      get isInterpolating() {
        return !!this._behavior?.isInterpolating
      }
      getFrameIndependentDecay(QQ) {
        const FQ = this._scene.Wx().getDeltaTime(),
          wQ = this._getEffectiveDeltaMs(FQ),
          LQ = 1e3 / this.referenceFrameRate;
        return Math.pow(QQ, wQ / LQ)
      }
      getFrameIndependentInputScale(QQ) {
        const FQ = 1 - QQ;
        if (FQ <= 0) return 1;
        return (1 - this.getFrameIndependentDecay(QQ)) / FQ
      }
      _getEffectiveDeltaMs(QQ) {
        return QQ > 0 ? QQ : this._prevFrameTimeMs > 0 ? this._prevFrameTimeMs : 1e3 / this.referenceFrameRate
      }
      _calculateCurrentVelocity(QQ, FQ, wQ) {
        let LQ = QQ;
        const qQ = this._scene.Wx().getDeltaTime(),
          oQ = this._getEffectiveDeltaMs(qQ);
        if (0 === oQ) return LQ;
        const DQ = this.getFrameIndependentDecay(wQ);
        if (LQ *= DQ, 0 !== FQ || this.activeInput) {
          const QQ = 1 - wQ;
          LQ += FQ / oQ * (QQ > 0 ? (1 - DQ) / QQ : 1)
        } else Math.abs(LQ) < 1e-6 && (LQ = 0);
        return LQ
      }
    }
  },
  39667: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => LQ
    });
    class LQ {
      constructor(QQ, FQ) {
        this.inputMap = [], this.handlers = QQ, this._createDefaultEntries = FQ, this.resetInputMap()
      }
      resolveInteraction(QQ, FQ) {
        for (const wQ of this.inputMap)
          if (wQ.source === QQ && this._entryMatches(wQ, FQ)) return wQ;
        return null
      }
      resetInputMap() {
        this.inputMap = this._createDefaultEntries?.() ?? []
      }
      getEntry(QQ, FQ, wQ) {
        const LQ = this.inputMap;
        for (let qQ = 0; qQ < LQ.length; qQ++) {
          const oQ = LQ[qQ];
          if (oQ.source === QQ && oQ.interaction === FQ && this._entryConditionsMatch(oQ, wQ)) return oQ
        }
      }
      getEntries(QQ, FQ, wQ) {
        const LQ = [],
          qQ = this.inputMap;
        for (let oQ = 0; oQ < qQ.length; oQ++) {
          const DQ = qQ[oQ];
          DQ.source === QQ && DQ.interaction === FQ && this._entryConditionsMatch(DQ, wQ) && LQ.push(DQ)
        }
        return LQ
      }
      addEntry(QQ) {
        const FQ = this._entrySpecificity(QQ);
        let wQ = this.inputMap.length;
        for (let LQ = 0; LQ < this.inputMap.length; LQ++)
          if (this._entrySpecificity(this.inputMap[LQ]) < FQ) {
            wQ = LQ;
            break
          } this.inputMap.splice(wQ, 0, QQ)
      }
      setInteraction(QQ, FQ, wQ) {
        const LQ = this.resolveInteraction(QQ, FQ);
        return LQ && this._entryCoversAllConditionsOf(LQ, FQ) ? (LQ.interaction = wQ, !0) : (this.addEntry({
          source: QQ,
          ...FQ ?? {},
          interaction: wQ
        }), !0)
      }
      _entryCoversAllConditionsOf(QQ, FQ) {
        if (!FQ) return !0;
        const wQ = QQ;
        for (const LQ of Object.keys(FQ)) {
          const QQ = FQ[LQ];
          if (void 0 !== QQ)
            if ("modifiers" === LQ) {
              const FQ = wQ.modifiers ?? {};
              for (const wQ of Object.keys(QQ))
                if (void 0 !== QQ[wQ] && void 0 === FQ[wQ]) return !1
            } else if (void 0 === wQ[LQ]) return !1
        }
        return !0
      }
      setInteractions(QQ, FQ, wQ) {
        let LQ = 0;
        const qQ = this.inputMap;
        for (let oQ = 0; oQ < qQ.length; oQ++) {
          const DQ = qQ[oQ];
          DQ.source === QQ && this._entryMatches(DQ, FQ) && (DQ.interaction = wQ, LQ++)
        }
        return LQ
      }
      _entryMatches(QQ, FQ) {
        switch (QQ.source) {
          case "pointer":
            return (void 0 === QQ.button || QQ.button === FQ?.button) && this._matchModifiers(QQ.modifiers, FQ?.modifiers);
          case "wheel":
            return this._matchModifiers(QQ.modifiers, FQ?.modifiers);
          case "touch":
            return void 0 === QQ.touchCount || QQ.touchCount === FQ?.touchCount;
          case "keyboard":
            return (void 0 === QQ.key || (Array.isArray(QQ.key) ? -1 !== QQ.key.indexOf(FQ?.key ?? -1) : QQ.key === FQ?.key)) && this._matchModifiers(QQ.modifiers, FQ?.modifiers)
        }
      }
      _entryConditionsMatch(QQ, FQ) {
        if (!FQ) return !0;
        switch (QQ.source) {
          case "pointer":
            return (!("button" in FQ) || QQ.button === FQ.button) && (!("modifiers" in FQ) || this._entryModifiersMatch(QQ.modifiers, FQ.modifiers));
          case "wheel":
            return !("modifiers" in FQ) || this._entryModifiersMatch(QQ.modifiers, FQ.modifiers);
          case "touch":
            return !("touchCount" in FQ) || QQ.touchCount === FQ.touchCount;
          case "keyboard":
            if ("key" in FQ) {
              if (void 0 === QQ.key) return void 0 === FQ.key;
              if (void 0 === FQ.key || (Array.isArray(QQ.key) ? -1 === QQ.key.indexOf(FQ.key) : QQ.key !== FQ.key)) return !1
            }
            return !("modifiers" in FQ) || this._entryModifiersMatch(QQ.modifiers, FQ.modifiers)
        }
      }
      _entrySpecificity(QQ) {
        let FQ = 0;
        return "button" in QQ && void 0 !== QQ.button && FQ++, "key" in QQ && void 0 !== QQ.key && FQ++, "touchCount" in QQ && void 0 !== QQ.touchCount && FQ++, "modifiers" in QQ && QQ.modifiers && FQ++, FQ
      }
      _matchModifiers(QQ, FQ) {
        return !QQ || (void 0 === QQ.ctrl || QQ.ctrl === (FQ?.ctrl ?? !1)) && ((void 0 === QQ.shift || QQ.shift === (FQ?.shift ?? !1)) && (void 0 === QQ.alt || QQ.alt === (FQ?.alt ?? !1)))
      }
      _entryModifiersMatch(QQ, FQ) {
        if (!FQ) return !QQ;
        return void 0 !== FQ.ctrl || void 0 !== FQ.shift || void 0 !== FQ.alt ? (void 0 === FQ.ctrl || QQ?.ctrl === FQ.ctrl) && ((void 0 === FQ.shift || QQ?.shift === FQ.shift) && (void 0 === FQ.alt || QQ?.alt === FQ.alt)) : !QQ || void 0 === QQ.ctrl && void 0 === QQ.shift && void 0 === QQ.alt
      }
    }
  },
  39633: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => eQ,
      g: () => AQ
    });
    var LQ = wQ(39402),
      qQ = wQ(39409),
      oQ = wQ(39642),
      DQ = wQ(36696),
      kQ = wQ(36705),
      vQ = wQ(39655),
      mQ = wQ(39650),
      uQ = wQ(39664),
      HQ = wQ(39667);
    class bQ extends uQ.b {
      constructor(QQ, FQ, wQ) {
        super(QQ, FQ, wQ), this.input = new HQ.c({
          translate: (QQ, FQ, wQ) => {
            this.panAccumulatedPixels.x += QQ, this.panAccumulatedPixels.y += FQ, this.panAccumulatedPixels.z += wQ
          },
          rotate: (QQ, FQ) => {
            this.rotationAccumulatedPixels.x += QQ, this.rotationAccumulatedPixels.y += FQ
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
    const YQ = DQ.c.Zero(),
      xQ = DQ.e.Identity();
    let AQ = (() => {
        var QQ;
        let FQ, wQ, mQ, uQ, HQ = oQ.e,
          AQ = [],
          tQ = [],
          eQ = [],
          MQ = [],
          GQ = [],
          pQ = [],
          cQ = [],
          CQ = [];
        return QQ = class extends HQ {
          get inertia() {
            return this._targetInertia
          }
          set inertia(QQ) {
            this._targetInertia = QQ, this.movement && (this.movement.panInertia = QQ, this.movement.rotationInertia = QQ)
          }
          constructor(QQ, FQ, wQ) {
            super(QQ, FQ, wQ, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]), this.cameraDirection = new DQ.p(0, 0, 0), this.cameraRotation = new DQ.n(0, 0), this._targetInertia = .9, this.updateUpVectorFromRotation = (0, LQ.l)(this, AQ, !1), this.rotation = ((0, LQ.l)(this, tQ), (0, LQ.l)(this, eQ, void 0)), this.rotationQuaternion = (0, LQ.l)(this, MQ), this.speed = (0, LQ.l)(this, GQ, 2), this.noRotationConstraint = ((0, LQ.l)(this, pQ), !1), this.invertRotation = !1, this.inverseRotationSpeed = .2, this._panningEpsilon = kQ.b, this._rotationEpsilon = kQ.b, this.lockedTarget = (0, LQ.l)(this, cQ, null), this._currentTarget = ((0, LQ.l)(this, CQ), DQ.p.Zero()), this._initialFocalDistance = 1, this._viewMatrix = DQ.c.Zero(), this._cameraTransformMatrix = DQ.c.Zero(), this._cameraRotationMatrix = DQ.c.Zero(), this._transformedReferencePoint = DQ.p.Zero(), this._deferredPositionUpdate = new DQ.p, this._deferredRotationQuaternionUpdate = new DQ.e, this._deferredRotationUpdate = new DQ.p, this._deferredUpdated = !1, this._deferOnly = !1, this._cachedRotationZ = 0, this._cachedQuaternionRotationZ = 0, this._referencePoint = DQ.p.Forward(this.iN().useRightHandedSystem), this.rotation = new DQ.p(0, this.iN().useRightHandedSystem ? Math.PI : 0, 0), this.movement = new bQ(this.iN(), this.position), this.movement.panInertia = this.inertia, this.movement.rotationInertia = this.inertia
          }
          getFrontPosition(QQ) {
            this.getWorldMatrix();
            const FQ = DQ.k.Ox[0],
              wQ = DQ.k.Ox[1];
            return wQ.set(0, 0, this._scene.useRightHandedSystem ? -1 : 1), this.getDirectionToRef(wQ, FQ), FQ.scaleInPlace(QQ), this.globalPosition.add(FQ)
          }
          _getLockedTargetPosition() {
            if (!this.lockedTarget) return null;
            if (this.lockedTarget.absolutePosition) {
              const QQ = this.lockedTarget;
              QQ.computeWorldMatrix().getTranslationToRef(QQ.absolutePosition)
            }
            return this.lockedTarget.absolutePosition || this.lockedTarget
          }
          storeState() {
            return this._storedPosition = this.position.clone(), this._storedRotation = this.rotation.clone(), this.rotationQuaternion && (this._storedRotationQuaternion = this.rotationQuaternion.clone()), super.storeState()
          }
          _restoreStateValues() {
            return !!super._restoreStateValues() && (this.position = this._storedPosition.clone(), this.rotation = this._storedRotation.clone(), this.rotationQuaternion && this._storedRotationQuaternion && (this.rotationQuaternion = this._storedRotationQuaternion.clone()), this.cameraDirection.vQQ(0, 0, 0), this.cameraRotation.vQQ(0, 0), !0)
          }
          _initCache() {
            super._initCache(), this._cache.lockedTarget = new DQ.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.rotation = new DQ.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.rotationQuaternion = new DQ.e(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE)
          }
          _updateCache(QQ) {
            QQ || super._updateCache();
            const FQ = this._getLockedTargetPosition();
            FQ ? this._cache.lockedTarget ? this._cache.lockedTarget.Qs(FQ) : this._cache.lockedTarget = FQ.clone() : this._cache.lockedTarget = null, this._cache.rotation.Qs(this.rotation), this.rotationQuaternion && this._cache.rotationQuaternion.Qs(this.rotationQuaternion)
          }
          _isSynchronizedViewMatrix() {
            if (!super._isSynchronizedViewMatrix()) return !1;
            const QQ = this._getLockedTargetPosition();
            return (this._cache.lockedTarget ? this._cache.lockedTarget.equals(QQ) : !QQ) && (this.rotationQuaternion ? this.rotationQuaternion.equals(this._cache.rotationQuaternion) : this._cache.rotation.equals(this.rotation))
          }
          _computeLocalCameraSpeed() {
            const QQ = this.Wx();
            return this.speed * Math.sqrt(QQ.getDeltaTime() / (100 * QQ.getFps()))
          }
          setTarget(QQ) {
            this.upVector.normalize(), this._initialFocalDistance = QQ.subtract(this.position).length(), this.position.z === QQ.z && (this.position.z += kQ.b), this._referencePoint.normalize().scaleInPlace(this._initialFocalDistance), this.iN().useRightHandedSystem ? DQ.c.LookAtRHToRef(this.position, QQ, DQ.p.UpReadOnly, YQ) : DQ.c.LookAtLHToRef(this.position, QQ, DQ.p.UpReadOnly, YQ), YQ.invert();
            const FQ = this.rotationQuaternion || xQ;
            DQ.e.FromRotationMatrixToRef(YQ, FQ), FQ.toEulerAnglesToRef(this.rotation), this.rotation.z = 0
          }
          get target() {
            return this.getTarget()
          }
          set target(QQ) {
            this.setTarget(QQ)
          }
          getTarget() {
            return this._currentTarget
          }
          _decideIfNeedsToMove() {
            return Math.abs(this.cameraDirection.x) > 0 || Math.abs(this.cameraDirection.y) > 0 || Math.abs(this.cameraDirection.z) > 0
          }
          _updatePosition() {
            if (this.parent) return this.parent.getWorldMatrix().invertToRef(DQ.k.Matrix[0]), DQ.p.TransformNormalToRef(this.cameraDirection, DQ.k.Matrix[0], DQ.k.Ox[0]), this._deferredPositionUpdate.addInPlace(DQ.k.Ox[0]), void(this._deferOnly ? this._deferredUpdated = !0 : this.position.Qs(this._deferredPositionUpdate));
            this._deferredPositionUpdate.addInPlace(this.cameraDirection), this._deferOnly ? this._deferredUpdated = !0 : this.position.Qs(this._deferredPositionUpdate)
          }
          _checkInputs() {
            const QQ = this.movement,
              FQ = 0 !== this.cameraDirection.x || 0 !== this.cameraDirection.y || 0 !== this.cameraDirection.z;
            QQ.panAccumulatedPixels.addInPlace(this.cameraDirection), QQ.rotationAccumulatedPixels.x += this.cameraRotation.x, QQ.rotationAccumulatedPixels.y += this.cameraRotation.y, QQ.computeCurrentFrameDeltas(), this.cameraDirection.Qs(QQ.panDeltaCurrentFrame), this.cameraRotation.set(QQ.rotationDeltaCurrentFrame.x, QQ.rotationDeltaCurrentFrame.y);
            const wQ = this.speed * this._panningEpsilon;
            !FQ && Math.abs(this.cameraDirection.x) < wQ && Math.abs(this.cameraDirection.y) < wQ && Math.abs(this.cameraDirection.z) < wQ && (this.cameraDirection.K3(0), QQ.resetPanVelocity());
            const LQ = this.invertRotation ? -this.inverseRotationSpeed : 1,
              qQ = this._decideIfNeedsToMove(),
              oQ = !(!this.cameraRotation.x && !this.cameraRotation.y);
            if (this._deferredUpdated = !1, this._deferredRotationUpdate.Qs(this.rotation), this._deferredPositionUpdate.Qs(this.position), this.rotationQuaternion && this._deferredRotationQuaternionUpdate.Qs(this.rotationQuaternion), qQ && this._updatePosition(), oQ) {
              if (this.rotationQuaternion && this.rotationQuaternion.toEulerAnglesToRef(this._deferredRotationUpdate), this._deferredRotationUpdate.x += this.cameraRotation.x * LQ, this._deferredRotationUpdate.y += this.cameraRotation.y * LQ, !this.noRotationConstraint) {
                const QQ = 1.570796;
                this._deferredRotationUpdate.x > QQ && (this._deferredRotationUpdate.x = QQ), this._deferredRotationUpdate.x < -QQ && (this._deferredRotationUpdate.x = -QQ)
              }
              if (this._deferOnly ? this._deferredUpdated = !0 : this.rotation.Qs(this._deferredRotationUpdate), this.rotationQuaternion) {
                this._deferredRotationUpdate.lengthSquared() && (DQ.e.RotationYawPitchRollToRef(this._deferredRotationUpdate.y, this._deferredRotationUpdate.x, this._deferredRotationUpdate.z, this._deferredRotationQuaternionUpdate), this._deferOnly ? this._deferredUpdated = !0 : this.rotationQuaternion.Qs(this._deferredRotationQuaternionUpdate))
              }
            }
            this.cameraDirection.K3(0), this.cameraRotation.set(0, 0), super._checkInputs()
          }
          _updateCameraRotationMatrix() {
            this.rotationQuaternion ? this.rotationQuaternion.toRotationMatrix(this._cameraRotationMatrix) : DQ.c.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, this.rotation.z, this._cameraRotationMatrix)
          }
          _rotateUpVectorWithCameraRotationMatrix() {
            return DQ.p.TransformNormalToRef(DQ.p.UpReadOnly, this._cameraRotationMatrix, this.upVector), this
          }
          _getViewMatrix() {
            return this.lockedTarget && this.setTarget(this._getLockedTargetPosition()), this._updateCameraRotationMatrix(), this.rotationQuaternion && this._cachedQuaternionRotationZ != this.rotationQuaternion.z ? (this._rotateUpVectorWithCameraRotationMatrix(), this._cachedQuaternionRotationZ = this.rotationQuaternion.z) : this._cachedRotationZ !== this.rotation.z && (this._rotateUpVectorWithCameraRotationMatrix(), this._cachedRotationZ = this.rotation.z), DQ.p.TransformCoordinatesToRef(this._referencePoint, this._cameraRotationMatrix, this._transformedReferencePoint), this.position.addToRef(this._transformedReferencePoint, this._currentTarget), this.updateUpVectorFromRotation && (this.rotationQuaternion ? vQ.b.Y.rotateByQuaternionToRef(this.rotationQuaternion, this.upVector) : (DQ.e.FromEulerVectorToRef(this.rotation, xQ), vQ.b.Y.rotateByQuaternionToRef(xQ, this.upVector))), this._computeViewMatrix(this.position, this._currentTarget, this.upVector), this._viewMatrix
          }
          _computeViewMatrix(QQ, FQ, wQ) {
            if (this.iN().useRightHandedSystem ? DQ.c.LookAtRHToRef(QQ, FQ, wQ, this._viewMatrix) : DQ.c.LookAtLHToRef(QQ, FQ, wQ, this._viewMatrix), this.parent) {
              const QQ = this.parent.getWorldMatrix();
              this._viewMatrix.invert(), this._viewMatrix.multiplyToRef(QQ, this._viewMatrix), this._viewMatrix.invert(), this._markSyncedWithParent()
            }
          }
          createRigCamera(FQ, wQ) {
            if (this.cameraRigMode !== oQ.e.RIG_MODE_NONE) {
              const wQ = new QQ(FQ, this.position.clone(), this.iN());
              return wQ.isRigCamera = !0, wQ.rigParent = this, this.cameraRigMode === oQ.e.RIG_MODE_VR && (this.rotationQuaternion || (this.rotationQuaternion = new DQ.e), wQ._cameraRigParams = {}, wQ.rotationQuaternion = new DQ.e), wQ.mode = this.mode, wQ.orthoLeft = this.orthoLeft, wQ.orthoRight = this.orthoRight, wQ.orthoTop = this.orthoTop, wQ.orthoBottom = this.orthoBottom, wQ
            }
            return null
          }
          _updateRigCameras() {
            const QQ = this._rigCameras[0],
              FQ = this._rigCameras[1];
            switch (this.computeWorldMatrix(), this.cameraRigMode) {
              case oQ.e.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case oQ.e.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case oQ.e.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
              case oQ.e.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case oQ.e.RIG_MODE_STEREOSCOPIC_INTERLACED: {
                const wQ = this.cameraRigMode === oQ.e.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED ? 1 : -1,
                  LQ = this.cameraRigMode === oQ.e.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED ? -1 : 1;
                this._getRigCamPositionAndTarget(this._cameraRigParams.stereoHalfAngle * wQ, QQ), this._getRigCamPositionAndTarget(this._cameraRigParams.stereoHalfAngle * LQ, FQ);
                break
              }
              case oQ.e.RIG_MODE_VR:
                QQ.rotationQuaternion && FQ.rotationQuaternion && this.rotationQuaternion ? (QQ.rotationQuaternion.Qs(this.rotationQuaternion), FQ.rotationQuaternion.Qs(this.rotationQuaternion)) : (QQ.rotation.Qs(this.rotation), FQ.rotation.Qs(this.rotation)), QQ.position.Qs(this.position), FQ.position.Qs(this.position)
            }
            super._updateRigCameras()
          }
          _getRigCamPositionAndTarget(FQ, wQ) {
            this.getTarget().subtractToRef(this.position, QQ._TargetFocalPoint), QQ._TargetFocalPoint.normalize().scaleInPlace(this._initialFocalDistance);
            const LQ = QQ._TargetFocalPoint.addInPlace(this.position);
            DQ.c.TranslationToRef(-LQ.x, -LQ.y, -LQ.z, QQ._TargetTransformMatrix), QQ._TargetTransformMatrix.multiplyToRef(DQ.c.RotationAxis(wQ.upVector, FQ), QQ._RigCamTransformMatrix), DQ.c.TranslationToRef(LQ.x, LQ.y, LQ.z, QQ._TargetTransformMatrix), QQ._RigCamTransformMatrix.multiplyToRef(QQ._TargetTransformMatrix, QQ._RigCamTransformMatrix), DQ.p.TransformCoordinatesToRef(this.position, QQ._RigCamTransformMatrix, wQ.position), wQ.setTarget(LQ)
          }
          getClassName() {
            return "TargetCamera"
          }
        }, (() => {
          const oQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(HQ[Symbol.metadata] ?? null) : void 0;
          FQ = [(0, qQ.I)()], wQ = [(0, qQ.F)()], mQ = [(0, qQ.I)()], uQ = [(0, qQ.w)("lockedTargetId")], (0, LQ.i)(null, null, FQ, {
            kind: "field",
            name: "updateUpVectorFromRotation",
            static: !1,
            private: !1,
            access: {
              has: QQ => "updateUpVectorFromRotation" in QQ,
              get: QQ => QQ.updateUpVectorFromRotation,
              set: (QQ, FQ) => {
                QQ.updateUpVectorFromRotation = FQ
              }
            },
            metadata: oQ
          }, AQ, tQ), (0, LQ.i)(null, null, wQ, {
            kind: "field",
            name: "rotation",
            static: !1,
            private: !1,
            access: {
              has: QQ => "rotation" in QQ,
              get: QQ => QQ.rotation,
              set: (QQ, FQ) => {
                QQ.rotation = FQ
              }
            },
            metadata: oQ
          }, eQ, MQ), (0, LQ.i)(null, null, mQ, {
            kind: "field",
            name: "speed",
            static: !1,
            private: !1,
            access: {
              has: QQ => "speed" in QQ,
              get: QQ => QQ.speed,
              set: (QQ, FQ) => {
                QQ.speed = FQ
              }
            },
            metadata: oQ
          }, GQ, pQ), (0, LQ.i)(null, null, uQ, {
            kind: "field",
            name: "lockedTarget",
            static: !1,
            private: !1,
            access: {
              has: QQ => "lockedTarget" in QQ,
              get: QQ => QQ.lockedTarget,
              set: (QQ, FQ) => {
                QQ.lockedTarget = FQ
              }
            },
            metadata: oQ
          }, cQ, CQ), oQ && Object.defineProperty(QQ, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: oQ
          })
        })(), QQ._RigCamTransformMatrix = new DQ.c, QQ._TargetTransformMatrix = new DQ.c, QQ._TargetFocalPoint = new DQ.p, QQ
      })(),
      tQ = !1;

    function eQ() {
      tQ || (tQ = !0, mQ.c.AddNodeConstructor("TargetCamera", ((QQ, FQ) => () => new AQ(QQ, DQ.p.Zero(), FQ))))
    }
  },
  39358: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => oQ
    });
    var LQ = wQ(39295);
    let qQ = !1;

    function oQ() {
      qQ || (qQ = !0, LQ.e.prototype.getInputElement = function() {
        return this._renderingCanvas
      }, LQ.e.prototype.getRenderingCanvasClientRect = function() {
        return this._renderingCanvas ? this._renderingCanvas.getBoundingClientRect() : null
      }, LQ.e.prototype.getInputElementClientRect = function() {
        return this._renderingCanvas ? this.getInputElement().getBoundingClientRect() : null
      }, LQ.e.prototype.getAspectRatio = function(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const wQ = QQ.viewport;
        return this.getRenderWidth(FQ) * wQ.width / (this.getRenderHeight(FQ) * wQ.height)
      }, LQ.e.prototype.getScreenAspectRatio = function() {
        return this.getRenderWidth(!0) / this.getRenderHeight(!0)
      }, LQ.e.prototype._verifyPointerLock = function() {
        this._onPointerLockChange?.()
      })
    }
  },
  39445: (QQ, FQ, wQ) => {
    var LQ = wQ(39295),
      qQ = wQ(39448);
    let oQ = !1;
    oQ || (oQ = !0, (0, qQ.t)(), LQ.e.prototype._loadFileAsync = async function(QQ, FQ, wQ) {
      return await new Promise(((LQ, qQ) => {
        this._loadFile(QQ, (QQ => {
          LQ(QQ)
        }), void 0, FQ, wQ, ((QQ, FQ) => {
          qQ(FQ)
        }))
      }))
    })
  },
  39436: (QQ, FQ, wQ) => {
    (0, wQ(39360).c)()
  },
  39360: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => oQ
    });
    var LQ = wQ(39295);
    let qQ = !1;

    function oQ() {
      qQ || (qQ = !0, LQ.e.prototype.getRenderPassNames = function() {
        return this._renderPassNames
      }, LQ.e.prototype.getCurrentRenderPassName = function() {
        return this._renderPassNames[this.currentRenderPassId]
      }, LQ.e.prototype.createRenderPassId = function(QQ) {
        const FQ = ++LQ.e._RenderPassIdCounter;
        return this._renderPassNames[FQ] = QQ ?? "NONAME", FQ
      }, LQ.e.prototype.releaseRenderPassId = function(QQ) {
        this._renderPassNames[QQ] = void 0;
        for (let FQ = 0; FQ < this.scenes.length; ++FQ) {
          const wQ = this.scenes[FQ];
          for (let FQ = 0; FQ < wQ.meshes.length; ++FQ) {
            const LQ = wQ.meshes[FQ];
            if (LQ._releaseRenderPassId(QQ), LQ.lC)
              for (let FQ = 0; FQ < LQ.lC.length; ++FQ) {
                LQ.lC[FQ]._removeDrawWrapper(QQ)
              }
          }
        }
        this._onReleaseRenderPassObservable?.notifyObservers(QQ)
      })
    }
  },
  39477: (QQ, FQ, wQ) => {
    var LQ = wQ(39486),
      qQ = wQ(39295);
    let oQ = !1;
    oQ || (oQ = !0, qQ.e.GetCompatibleTextureLoader = LQ.b)
  },
  39367: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => oQ
    });
    var LQ = wQ(39240);
    let qQ = !1;

    function oQ() {
      qQ || (qQ = !0, LQ.ThinEngine.prototype.setAlphaMode = function(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this._alphaMode[wQ] === QQ) {
          if (!FQ) {
            const FQ = 0 === QQ;
            this.depthCullingState.depthMask !== FQ && (this.depthCullingState.depthMask = FQ)
          }
          return
        }
        const LQ = 0 === QQ;
        this._alphaState.setAlphaBlend(!LQ, wQ), this._alphaState.setAlphaMode(QQ, wQ), FQ || (this.depthCullingState.depthMask = LQ), this._alphaMode[wQ] = QQ
      })
    }
  },
  39380: (QQ, FQ, wQ) => {
    var LQ = wQ(39226),
      qQ = wQ(38203),
      oQ = wQ(39240),
      DQ = wQ(39385),
      kQ = wQ(39346);
    class vQ extends DQ.e {
      setDepthStencilTexture(QQ) {
        let FQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (super.setDepthStencilTexture(QQ, FQ), !QQ) return;
        const wQ = this._engine,
          LQ = this._context,
          qQ = QQ._hardwareTexture;
        if (qQ && QQ._autoMSAAManagement && this._MSAAFramebuffer) {
          const FQ = wQ._currentFramebuffer;
          wQ._bindUnboundFramebuffer(this._MSAAFramebuffer), LQ.framebufferRenderbuffer(LQ.FRAMEBUFFER, (0, kQ.c)(QQ.format) ? LQ.DEPTH_STENCIL_ATTACHMENT : LQ.DEPTH_ATTACHMENT, LQ.RENDERBUFFER, qQ.getMSAARenderBuffer()), wQ._bindUnboundFramebuffer(FQ)
        }
      }
      constructor(QQ, FQ, wQ, LQ, qQ) {
        super(QQ, FQ, wQ, LQ), this._framebuffer = null, this._depthStencilBuffer = null, this._MSAAFramebuffer = null, this._colorTextureArray = null, this._depthStencilTextureArray = null, this._disposeOnlyFramebuffers = !1, this._currentLOD = 0, this._context = qQ
      }
      _cloneRenderTargetWrapper() {
        let QQ;
        return this._colorTextureArray && this._depthStencilTextureArray ? (QQ = this._engine.createMultiviewRenderTargetTexture(this.width, this.height), QQ.texture.isReady = !0) : QQ = super._cloneRenderTargetWrapper(), QQ
      }
      _swapRenderTargetWrapper(QQ) {
        super._swapRenderTargetWrapper(QQ), QQ._framebuffer = this._framebuffer, QQ._depthStencilBuffer = this._depthStencilBuffer, QQ._MSAAFramebuffer = this._MSAAFramebuffer, QQ._colorTextureArray = this._colorTextureArray, QQ._depthStencilTextureArray = this._depthStencilTextureArray, this._framebuffer = this._depthStencilBuffer = this._MSAAFramebuffer = this._colorTextureArray = this._depthStencilTextureArray = null
      }
      createDepthStencilTexture() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          FQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          wQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          oQ = arguments.length > 5 ? arguments[5] : void 0;
        if (this._depthStencilBuffer) {
          const QQ = this._engine,
            FQ = QQ._currentFramebuffer,
            wQ = this._context;
          QQ._bindUnboundFramebuffer(this._framebuffer), wQ.framebufferRenderbuffer(wQ.FRAMEBUFFER, wQ.DEPTH_STENCIL_ATTACHMENT, wQ.RENDERBUFFER, null), wQ.framebufferRenderbuffer(wQ.FRAMEBUFFER, wQ.DEPTH_ATTACHMENT, wQ.RENDERBUFFER, null), wQ.framebufferRenderbuffer(wQ.FRAMEBUFFER, wQ.STENCIL_ATTACHMENT, wQ.RENDERBUFFER, null), QQ._bindUnboundFramebuffer(FQ), wQ.deleteRenderbuffer(this._depthStencilBuffer), this._depthStencilBuffer = null
        }
        return super.createDepthStencilTexture(QQ, FQ, wQ, LQ, qQ, oQ)
      }
      shareDepth(QQ) {
        super.shareDepth(QQ);
        const FQ = this._context,
          wQ = this._depthStencilBuffer,
          LQ = QQ._MSAAFramebuffer || QQ._framebuffer,
          qQ = this._engine;
        QQ._depthStencilBuffer && QQ._depthStencilBuffer !== wQ && FQ.deleteRenderbuffer(QQ._depthStencilBuffer), QQ._depthStencilBuffer = wQ;
        const oQ = QQ._generateStencilBuffer ? FQ.DEPTH_STENCIL_ATTACHMENT : FQ.DEPTH_ATTACHMENT;
        qQ._bindUnboundFramebuffer(LQ), FQ.framebufferRenderbuffer(FQ.FRAMEBUFFER, oQ, FQ.RENDERBUFFER, wQ), qQ._bindUnboundFramebuffer(null)
      }
      _bindTextureRenderTarget(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          wQ = arguments.length > 2 ? arguments[2] : void 0,
          LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const qQ = QQ._hardwareTexture;
        if (!qQ) return;
        const oQ = this._framebuffer,
          DQ = this._engine,
          kQ = DQ._currentFramebuffer;
        let vQ;
        if (DQ._bindUnboundFramebuffer(oQ), DQ.oA > 1) {
          const oQ = this._context;
          vQ = oQ["COLOR_ATTACHMENT" + FQ], QQ.is2DArray || QQ.is3D ? (wQ = wQ ?? this.layerIndices?.[FQ] ?? 0, oQ.framebufferTextureLayer(oQ.FRAMEBUFFER, vQ, qQ.underlyingResource, LQ, wQ)) : QQ.isCube ? (wQ = wQ ?? this.faceIndices?.[FQ] ?? 0, oQ.framebufferTexture2D(oQ.FRAMEBUFFER, vQ, oQ.TEXTURE_CUBE_MAP_POSITIVE_X + wQ, qQ.underlyingResource, LQ)) : oQ.framebufferTexture2D(oQ.FRAMEBUFFER, vQ, oQ.TEXTURE_2D, qQ.underlyingResource, LQ)
        } else {
          const QQ = this._context;
          vQ = QQ["COLOR_ATTACHMENT" + FQ + "_WEBGL"];
          const oQ = void 0 !== wQ ? QQ.TEXTURE_CUBE_MAP_POSITIVE_X + wQ : QQ.TEXTURE_2D;
          QQ.framebufferTexture2D(QQ.FRAMEBUFFER, vQ, oQ, qQ.underlyingResource, LQ)
        }
        if (QQ._autoMSAAManagement && this._MSAAFramebuffer) {
          const QQ = this._context;
          DQ._bindUnboundFramebuffer(this._MSAAFramebuffer), QQ.framebufferRenderbuffer(QQ.FRAMEBUFFER, vQ, QQ.RENDERBUFFER, qQ.getMSAARenderBuffer())
        }
        DQ._bindUnboundFramebuffer(kQ)
      }
      setTexture(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          wQ = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        super.setTexture(QQ, FQ, wQ), this._bindTextureRenderTarget(QQ, FQ)
      }
      setLayerAndFaceIndices(QQ, FQ) {
        if (super.setLayerAndFaceIndices(QQ, FQ), !this.textures || !this.layerIndices || !this.faceIndices) return;
        const wQ = this._attachments?.length ?? this.textures.length;
        for (let LQ = 0; LQ < wQ; LQ++) {
          const QQ = this.textures[LQ];
          QQ && (QQ.is2DArray || QQ.is3D ? this._bindTextureRenderTarget(QQ, LQ, this.layerIndices[LQ]) : QQ.isCube ? this._bindTextureRenderTarget(QQ, LQ, this.faceIndices[LQ]) : this._bindTextureRenderTarget(QQ, LQ))
        }
      }
      setLayerAndFaceIndex() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          FQ = arguments.length > 1 ? arguments[1] : void 0,
          wQ = arguments.length > 2 ? arguments[2] : void 0;
        if (super.setLayerAndFaceIndex(QQ, FQ, wQ), !this.textures || !this.layerIndices || !this.faceIndices) return;
        const LQ = this.textures[QQ];
        LQ.is2DArray || LQ.is3D ? this._bindTextureRenderTarget(this.textures[QQ], QQ, this.layerIndices[QQ]) : LQ.isCube && this._bindTextureRenderTarget(this.textures[QQ], QQ, this.faceIndices[QQ])
      }
      resolveMSAATextures() {
        const QQ = this._engine,
          FQ = QQ._currentFramebuffer;
        QQ._bindUnboundFramebuffer(this._MSAAFramebuffer), super.resolveMSAATextures(), QQ._bindUnboundFramebuffer(FQ)
      }
      dispose() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._disposeOnlyFramebuffers;
        const FQ = this._context;
        QQ || (this._colorTextureArray && (this._context.deleteTexture(this._colorTextureArray), this._colorTextureArray = null), this._depthStencilTextureArray && (this._context.deleteTexture(this._depthStencilTextureArray), this._depthStencilTextureArray = null)), this._framebuffer && (FQ.deleteFramebuffer(this._framebuffer), this._framebuffer = null), this._depthStencilBuffer && (FQ.deleteRenderbuffer(this._depthStencilBuffer), this._depthStencilBuffer = null), this._MSAAFramebuffer && (FQ.deleteFramebuffer(this._MSAAFramebuffer), this._MSAAFramebuffer = null), super.dispose(QQ)
      }
    }
    let mQ = !1;
    mQ || (mQ = !0, oQ.ThinEngine.prototype._createHardwareRenderTargetWrapper = function(QQ, FQ, wQ) {
      const LQ = new vQ(QQ, FQ, wQ, this, this._gl);
      return this._renderTargetWrapperCache.push(LQ), LQ
    }, oQ.ThinEngine.prototype.createRenderTargetTexture = function(QQ, FQ) {
      const wQ = this._createHardwareRenderTargetWrapper(!1, !1, QQ);
      let LQ, qQ, oQ = !0,
        DQ = !1,
        kQ = !1,
        vQ = 1;
      void 0 !== FQ && "object" === typeof FQ && (oQ = FQ.generateDepthBuffer ?? !0, DQ = !!FQ.generateStencilBuffer, kQ = !!FQ.noColorAttachment, LQ = FQ.colorAttachment, vQ = FQ.samples ?? 1, qQ = FQ.label);
      const mQ = LQ || (kQ ? null : this._createInternalTexture(QQ, FQ, !0, 5)),
        uQ = QQ.width || QQ,
        HQ = QQ.height || QQ,
        bQ = this._currentFramebuffer,
        YQ = this._gl,
        xQ = YQ.createFramebuffer();
      if (this._bindUnboundFramebuffer(xQ), wQ._depthStencilBuffer = this._setupFramebufferDepthAttachments(DQ, oQ, uQ, HQ), !mQ || mQ.is2DArray || mQ.is3D || YQ.framebufferTexture2D(YQ.FRAMEBUFFER, YQ.COLOR_ATTACHMENT0, YQ.TEXTURE_2D, mQ._hardwareTexture.underlyingResource, 0), this._bindUnboundFramebuffer(bQ), wQ.label = qQ ?? "RenderTargetWrapper", wQ._framebuffer = xQ, wQ._generateDepthBuffer = oQ, wQ._generateStencilBuffer = DQ, wQ.setTextures(mQ), LQ) {
        if (wQ._samples = LQ.samples, LQ.samples > 1) {
          const QQ = LQ._hardwareTexture.getMSAARenderBuffer(0);
          wQ._MSAAFramebuffer = YQ.createFramebuffer(), this._bindUnboundFramebuffer(wQ._MSAAFramebuffer), YQ.framebufferRenderbuffer(YQ.FRAMEBUFFER, YQ.COLOR_ATTACHMENT0, YQ.RENDERBUFFER, QQ), this._bindUnboundFramebuffer(null)
        }
      } else this.updateRenderTargetTextureSampleCount(wQ, vQ);
      return wQ
    }, oQ.ThinEngine.prototype._createDepthStencilTexture = function(QQ, FQ, wQ) {
      const oQ = this._gl,
        DQ = QQ.layers || 0,
        vQ = QQ.depth || 0;
      let mQ = oQ.TEXTURE_2D;
      0 !== DQ ? mQ = oQ.TEXTURE_2D_ARRAY : 0 !== vQ && (mQ = oQ.TEXTURE_3D);
      const uQ = new LQ.d(this, 12);
      if (uQ.label = FQ.label, !this._caps.depthTextureExtension) return qQ.c.Error("Depth texture is not supported by your browser or hardware."), uQ;
      const HQ = {
        bilinearFiltering: !1,
        comparisonFunction: 0,
        generateStencil: !1,
        ...FQ
      };
      if (this._bindTextureDirectly(mQ, uQ, !0), this._setupDepthStencilTexture(uQ, QQ, 0 !== HQ.comparisonFunction && HQ.bilinearFiltering, HQ.comparisonFunction, HQ.samples), void 0 !== HQ.depthTextureFormat) {
        if (15 !== HQ.depthTextureFormat && 16 !== HQ.depthTextureFormat && 17 !== HQ.depthTextureFormat && 13 !== HQ.depthTextureFormat && 14 !== HQ.depthTextureFormat && 18 !== HQ.depthTextureFormat) return qQ.c.Error(`Depth texture ${HQ.depthTextureFormat} format is not supported.`), uQ;
        uQ.format = HQ.depthTextureFormat
      } else uQ.format = HQ.generateStencil ? 13 : 16;
      const bQ = (0, kQ.c)(uQ.format),
        YQ = this._getWebGLTextureTypeFromDepthTextureFormat(uQ.format),
        xQ = bQ ? oQ.DEPTH_STENCIL : oQ.DEPTH_COMPONENT,
        AQ = this._getInternalFormatFromDepthTextureFormat(uQ.format, !0, bQ);
      return uQ.is2DArray ? oQ.texImage3D(mQ, 0, AQ, uQ.width, uQ.height, DQ, 0, xQ, YQ, null) : uQ.is3D ? oQ.texImage3D(mQ, 0, AQ, uQ.width, uQ.height, vQ, 0, xQ, YQ, null) : oQ.texImage2D(mQ, 0, AQ, uQ.width, uQ.height, 0, xQ, YQ, null), this._bindTextureDirectly(mQ, null), this._internalTexturesCache.push(uQ), wQ._depthStencilBuffer && (oQ.deleteRenderbuffer(wQ._depthStencilBuffer), wQ._depthStencilBuffer = null), this._bindUnboundFramebuffer(wQ._MSAAFramebuffer ?? wQ._framebuffer), wQ._generateStencilBuffer = bQ, wQ._depthStencilTextureWithStencil = bQ, wQ._depthStencilBuffer = this._setupFramebufferDepthAttachments(wQ._generateStencilBuffer, wQ._generateDepthBuffer, wQ.width, wQ.height, wQ.samples, uQ.format), this._bindUnboundFramebuffer(null), uQ
    }, oQ.ThinEngine.prototype.updateRenderTargetTextureSampleCount = function(QQ, FQ) {
      if (this.oA < 2 || !QQ) return 1;
      if (QQ.samples === FQ) return FQ;
      const wQ = this._gl;
      FQ = Math.min(FQ, this.getCaps().maxMSAASamples), QQ._depthStencilBuffer && (wQ.deleteRenderbuffer(QQ._depthStencilBuffer), QQ._depthStencilBuffer = null), QQ._MSAAFramebuffer && (wQ.deleteFramebuffer(QQ._MSAAFramebuffer), QQ._MSAAFramebuffer = null);
      const LQ = QQ.texture?._hardwareTexture;
      if (LQ?.releaseMSAARenderBuffers(), QQ.texture && FQ > 1 && "function" === typeof wQ.renderbufferStorageMultisample) {
        const qQ = wQ.createFramebuffer();
        if (!qQ) throw new Error("Unable to create multi sampled framebuffer");
        QQ._MSAAFramebuffer = qQ, this._bindUnboundFramebuffer(QQ._MSAAFramebuffer);
        const oQ = this._createRenderBuffer(QQ.texture.width, QQ.texture.height, FQ, -1, this._getRGBABufferInternalSizedFormat(QQ.texture.type, QQ.texture.format, QQ.texture._useSRGBBuffer), wQ.COLOR_ATTACHMENT0, !1);
        if (!oQ) throw new Error("Unable to create multi sampled framebuffer");
        LQ?.addMSAARenderBuffer(oQ)
      }
      this._bindUnboundFramebuffer(QQ._MSAAFramebuffer ?? QQ._framebuffer), QQ.texture && (QQ.texture.samples = FQ), QQ._samples = FQ;
      const qQ = QQ._depthStencilTexture ? QQ._depthStencilTexture.format : void 0;
      return QQ._depthStencilBuffer = this._setupFramebufferDepthAttachments(QQ._generateStencilBuffer, QQ._generateDepthBuffer, QQ.width, QQ.height, FQ, qQ), this._bindUnboundFramebuffer(null), FQ
    }, oQ.ThinEngine.prototype._setupDepthStencilTexture = function(QQ, FQ, wQ, LQ) {
      let qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1;
      const oQ = FQ.width ?? FQ,
        DQ = FQ.height ?? FQ,
        kQ = FQ.layers || 0,
        vQ = FQ.depth || 0;
      QQ.baseWidth = oQ, QQ.baseHeight = DQ, QQ.width = oQ, QQ.height = DQ, QQ.is2DArray = kQ > 0, QQ.depth = kQ || vQ, QQ.isReady = !0, QQ.samples = qQ, QQ.generateMipMaps = !1, QQ.samplingMode = wQ ? 2 : 1, QQ.type = 0, QQ._comparisonFunction = LQ;
      const mQ = this._gl,
        uQ = this._getTextureTarget(QQ),
        HQ = this._getSamplingParameters(QQ.samplingMode, !1);
      mQ.texParameteri(uQ, mQ.TEXTURE_MAG_FILTER, HQ.mag), mQ.texParameteri(uQ, mQ.TEXTURE_MIN_FILTER, HQ.min), mQ.texParameteri(uQ, mQ.TEXTURE_WRAP_S, mQ.CLAMP_TO_EDGE), mQ.texParameteri(uQ, mQ.TEXTURE_WRAP_T, mQ.CLAMP_TO_EDGE), this.oA > 1 && (0 === LQ ? (mQ.texParameteri(uQ, mQ.TEXTURE_COMPARE_FUNC, 515), mQ.texParameteri(uQ, mQ.TEXTURE_COMPARE_MODE, mQ.NONE)) : (mQ.texParameteri(uQ, mQ.TEXTURE_COMPARE_FUNC, LQ), mQ.texParameteri(uQ, mQ.TEXTURE_COMPARE_MODE, mQ.COMPARE_REF_TO_TEXTURE)))
    })
  },
  39211: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => LQ.b
    });
    var LQ = wQ(39219);
    (0, wQ(39367).b)();
    var qQ = wQ(39240);
    let oQ = !1;
    ! function() {
      if (oQ) return;
      oQ = !0;
      const QQ = new WeakMap,
        FQ = new WeakMap,
        wQ = new WeakMap,
        LQ = new WeakMap;
      qQ.ThinEngine.prototype.getAlphaToCoverage = function() {
        return QQ.get(this) ?? !1
      }, qQ.ThinEngine.prototype.setAlphaToCoverage = function(wQ) {
        (QQ.get(this) !== wQ || this._gl && FQ.get(this) !== this._gl) && (QQ.set(this, wQ), this._gl && (wQ ? this._gl.enable(this._gl.SAMPLE_ALPHA_TO_COVERAGE) : this._gl.disable(this._gl.SAMPLE_ALPHA_TO_COVERAGE), FQ.set(this, this._gl)))
      }, Object.defineProperty(qQ.ThinEngine.prototype, "currentSampleCount", {
        get: function() {
          return this._currentRenderTarget ? this._currentRenderTarget.samples : this._gl ? (LQ.get(this) !== this._gl && (wQ.set(this, this._gl.getContextAttributes()?.antialias ? Math.max(1, this._gl.getParameter(this._gl.SAMPLES)) : 1), LQ.set(this, this._gl)), wQ.get(this)) : 1
        },
        enumerable: !1,
        configurable: !0
      })
    }();
    var DQ = wQ(39226),
      kQ = wQ(38203),
      vQ = wQ(39333);
    let mQ = !1;
    ! function() {
      function QQ(QQ, FQ, wQ, LQ) {
        let qQ, oQ = 1;
        1 === LQ ? qQ = new Float32Array(FQ * wQ * 4) : 2 === LQ ? (qQ = new Uint16Array(FQ * wQ * 4), oQ = 15360) : qQ = 7 === LQ ? new Uint32Array(FQ * wQ * 4) : new Uint8Array(FQ * wQ * 4);
        for (let DQ = 0; DQ < FQ; DQ++)
          for (let LQ = 0; LQ < wQ; LQ++) {
            const wQ = 3 * (LQ * FQ + DQ),
              kQ = 4 * (LQ * FQ + DQ);
            qQ[kQ + 0] = QQ[wQ + 0], qQ[kQ + 1] = QQ[wQ + 1], qQ[kQ + 2] = QQ[wQ + 2], qQ[kQ + 3] = oQ
          }
        return qQ
      }

      function FQ(QQ) {
        return function(FQ, wQ, LQ, qQ, oQ, kQ, vQ, mQ) {
          let uQ = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
            HQ = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
          const bQ = QQ ? this._gl.TEXTURE_3D : this._gl.TEXTURE_2D_ARRAY,
            YQ = QQ ? 10 : 11,
            xQ = new DQ.d(this, YQ);
          xQ.baseWidth = wQ, xQ.baseHeight = LQ, xQ.baseDepth = qQ, xQ.width = wQ, xQ.height = LQ, xQ.depth = qQ, xQ.format = oQ, xQ.type = HQ, xQ.generateMipMaps = kQ, xQ.samplingMode = mQ, QQ ? xQ.is3D = !0 : xQ.is2DArray = !0, this._doNotHandleContextLost || (xQ._bufferView = FQ), QQ ? this.updateRawTexture3D(xQ, FQ, oQ, vQ, uQ, HQ) : this.updateRawTexture2DArray(xQ, FQ, oQ, vQ, uQ, HQ), this._bindTextureDirectly(bQ, xQ, !0);
          const AQ = this._getSamplingParameters(mQ, kQ);
          return this._gl.texParameteri(bQ, this._gl.TEXTURE_MAG_FILTER, AQ.mag), this._gl.texParameteri(bQ, this._gl.TEXTURE_MIN_FILTER, AQ.min), kQ && this._gl.generateMipmap(bQ), this._bindTextureDirectly(bQ, null), this._internalTexturesCache.push(xQ), xQ
        }
      }

      function wQ(QQ) {
        return function(FQ, wQ, LQ, qQ) {
          let oQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            DQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
          const kQ = QQ ? this._gl.TEXTURE_3D : this._gl.TEXTURE_2D_ARRAY,
            vQ = this._getWebGLTextureType(DQ),
            mQ = this._getInternalFormat(LQ),
            uQ = this._getRGBABufferInternalSizedFormat(DQ, LQ);
          this._bindTextureDirectly(kQ, FQ, !0), this._unpackFlipY(void 0 === qQ || !!qQ), this._doNotHandleContextLost || (FQ._bufferView = wQ, FQ.format = LQ, FQ.invertY = qQ, FQ._compression = oQ), FQ.width % 4 !== 0 && this._gl.pixelStorei(this._gl.UNPACK_ALIGNMENT, 1), oQ && wQ ? this._gl.compressedTexImage3D(kQ, 0, this.getCaps().s3tc[oQ], FQ.width, FQ.height, FQ.depth, 0, wQ) : this._gl.texImage3D(kQ, 0, uQ, FQ.width, FQ.height, FQ.depth, 0, mQ, vQ, wQ), FQ.generateMipMaps && this._gl.generateMipmap(kQ), this._bindTextureDirectly(kQ, null), FQ.isReady = !0
        }
      }
      mQ || (mQ = !0, qQ.ThinEngine.prototype.updateRawTexture = function(QQ, FQ, wQ, LQ) {
        let qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          oQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          DQ = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        if (!QQ) return;
        const kQ = this._getRGBABufferInternalSizedFormat(oQ, wQ, DQ),
          vQ = this._getInternalFormat(wQ),
          mQ = this._getWebGLTextureType(oQ);
        this._bindTextureDirectly(this._gl.TEXTURE_2D, QQ, !0), this._unpackFlipY(void 0 === LQ || !!LQ), this._doNotHandleContextLost || (QQ._bufferView = FQ, QQ.format = wQ, QQ.type = oQ, QQ.invertY = LQ, QQ._compression = qQ), QQ.width % 4 !== 0 && this._gl.pixelStorei(this._gl.UNPACK_ALIGNMENT, 1), qQ && FQ ? this._gl.compressedTexImage2D(this._gl.TEXTURE_2D, 0, this.getCaps().s3tc[qQ], QQ.width, QQ.height, 0, FQ) : this._gl.texImage2D(this._gl.TEXTURE_2D, 0, kQ, QQ.width, QQ.height, 0, vQ, mQ, FQ), QQ.generateMipMaps && this._gl.generateMipmap(this._gl.TEXTURE_2D), this._bindTextureDirectly(this._gl.TEXTURE_2D, null), QQ.isReady = !0
      }, qQ.ThinEngine.prototype.createRawTexture = function(QQ, FQ, wQ, LQ, qQ, oQ, kQ) {
        let vQ = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          mQ = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
          uQ = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const HQ = new DQ.d(this, 3);
        HQ.baseWidth = FQ, HQ.baseHeight = wQ, HQ.width = FQ, HQ.height = wQ, HQ.format = LQ, HQ.generateMipMaps = qQ, HQ.samplingMode = kQ, HQ.invertY = oQ, HQ._compression = vQ, HQ.type = mQ, HQ._useSRGBBuffer = this._getUseSRGBBuffer(uQ, !qQ), this._doNotHandleContextLost || (HQ._bufferView = QQ), this.updateRawTexture(HQ, QQ, LQ, oQ, vQ, mQ, HQ._useSRGBBuffer), this._bindTextureDirectly(this._gl.TEXTURE_2D, HQ, !0);
        const bQ = this._getSamplingParameters(kQ, qQ);
        return this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MAG_FILTER, bQ.mag), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MIN_FILTER, bQ.min), qQ && this._gl.generateMipmap(this._gl.TEXTURE_2D), this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._internalTexturesCache.push(HQ), HQ
      }, qQ.ThinEngine.prototype.createRawCubeTexture = function(QQ, FQ, wQ, LQ, qQ, oQ, mQ) {
        let uQ = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null;
        const HQ = this._gl,
          bQ = new DQ.d(this, 8);
        bQ.isCube = !0, bQ.format = wQ, bQ.type = LQ, this._doNotHandleContextLost || (bQ._bufferViewArray = QQ);
        const YQ = this._getWebGLTextureType(LQ);
        let xQ = this._getInternalFormat(wQ);
        xQ === HQ.RGB && (xQ = HQ.RGBA), YQ !== HQ.FLOAT || this._caps.textureFloatLinearFiltering ? YQ !== this._gl.HALF_FLOAT_OES || this._caps.textureHalfFloatLinearFiltering ? YQ !== HQ.FLOAT || this._caps.textureFloatRender ? YQ !== HQ.HALF_FLOAT || this._caps.colorBufferFloat || (qQ = !1, kQ.c.Warn("Render to half float textures is not supported. Mipmap generation forced to false.")) : (qQ = !1, kQ.c.Warn("Render to float textures is not supported. Mipmap generation forced to false.")) : (qQ = !1, mQ = 1, kQ.c.Warn("Half float texture filtering is not supported. Mipmap generation and sampling mode are forced to false and TEXTURE_NEAREST_SAMPLINGMODE, respectively.")) : (qQ = !1, mQ = 1, kQ.c.Warn("Float texture filtering is not supported. Mipmap generation and sampling mode are forced to false and TEXTURE_NEAREST_SAMPLINGMODE, respectively."));
        const AQ = FQ,
          tQ = AQ;
        bQ.width = AQ, bQ.height = tQ, bQ.invertY = oQ, bQ._compression = uQ;
        if (!this.needPOTTextures || (0, vQ.g)(bQ.width) && (0, vQ.g)(bQ.height) || (qQ = !1), QQ) this.updateRawCubeTexture(bQ, QQ, wQ, LQ, oQ, uQ);
        else {
          const QQ = this._getRGBABufferInternalSizedFormat(LQ),
            FQ = 0;
          this._bindTextureDirectly(HQ.TEXTURE_CUBE_MAP, bQ, !0);
          for (let wQ = 0; wQ < 6; wQ++) uQ ? HQ.compressedTexImage2D(HQ.TEXTURE_CUBE_MAP_POSITIVE_X + wQ, FQ, this.getCaps().s3tc[uQ], bQ.width, bQ.height, 0, void 0) : HQ.texImage2D(HQ.TEXTURE_CUBE_MAP_POSITIVE_X + wQ, FQ, QQ, bQ.width, bQ.height, 0, xQ, YQ, null);
          this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null)
        }
        this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, bQ, !0), QQ && qQ && this._gl.generateMipmap(this._gl.TEXTURE_CUBE_MAP);
        const eQ = this._getSamplingParameters(mQ, qQ);
        return HQ.texParameteri(HQ.TEXTURE_CUBE_MAP, HQ.TEXTURE_MAG_FILTER, eQ.mag), HQ.texParameteri(HQ.TEXTURE_CUBE_MAP, HQ.TEXTURE_MIN_FILTER, eQ.min), HQ.texParameteri(HQ.TEXTURE_CUBE_MAP, HQ.TEXTURE_WRAP_S, HQ.CLAMP_TO_EDGE), HQ.texParameteri(HQ.TEXTURE_CUBE_MAP, HQ.TEXTURE_WRAP_T, HQ.CLAMP_TO_EDGE), this._bindTextureDirectly(HQ.TEXTURE_CUBE_MAP, null), bQ.generateMipMaps = qQ, bQ.samplingMode = mQ, bQ.isReady = !0, bQ
      }, qQ.ThinEngine.prototype.updateRawCubeTexture = function(FQ, wQ, LQ, qQ, oQ) {
        let DQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          kQ = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        FQ._bufferViewArray = wQ, FQ.format = LQ, FQ.type = qQ, FQ.invertY = oQ, FQ._compression = DQ;
        const mQ = this._gl,
          uQ = this._getWebGLTextureType(qQ);
        let HQ = this._getInternalFormat(LQ);
        const bQ = this._getRGBABufferInternalSizedFormat(qQ);
        let YQ = !1;
        HQ === mQ.RGB && (HQ = mQ.RGBA, YQ = !0), this._bindTextureDirectly(mQ.TEXTURE_CUBE_MAP, FQ, !0), this._unpackFlipY(void 0 === oQ || !!oQ), FQ.width % 4 !== 0 && mQ.pixelStorei(mQ.UNPACK_ALIGNMENT, 1);
        for (let vQ = 0; vQ < 6; vQ++) {
          let LQ = wQ[vQ];
          DQ ? mQ.compressedTexImage2D(mQ.TEXTURE_CUBE_MAP_POSITIVE_X + vQ, kQ, this.getCaps().s3tc[DQ], FQ.width, FQ.height, 0, LQ) : (YQ && (LQ = QQ(LQ, FQ.width, FQ.height, qQ)), mQ.texImage2D(mQ.TEXTURE_CUBE_MAP_POSITIVE_X + vQ, kQ, bQ, FQ.width, FQ.height, 0, HQ, uQ, LQ))
        }(!this.needPOTTextures || (0, vQ.g)(FQ.width) && (0, vQ.g)(FQ.height)) && FQ.generateMipMaps && 0 === kQ && this._gl.generateMipmap(this._gl.TEXTURE_CUBE_MAP), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), FQ.isReady = !0
      }, qQ.ThinEngine.prototype.createRawCubeTextureFromUrl = function(FQ, wQ, LQ, qQ, oQ, DQ, kQ, vQ) {
        let mQ = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          uQ = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          HQ = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 3,
          bQ = arguments.length > 11 && void 0 !== arguments[11] && arguments[11];
        const YQ = this._gl,
          xQ = this.createRawCubeTexture(null, LQ, qQ, oQ, !DQ, bQ, HQ, null);
        wQ?.addPendingData(xQ), xQ.url = FQ, xQ.isReady = !1, this._internalTexturesCache.push(xQ);
        const AQ = (QQ, FQ) => {
            wQ?.removePendingData(xQ), uQ && uQ(QQ ? QQ.status + " " + QQ.statusText : "Failed to parse texture data", FQ)
          },
          tQ = async FQ => {
            if (!xQ._hardwareTexture) return;
            const LQ = kQ(FQ);
            if (!LQ) return;
            const DQ = LQ instanceof Promise ? await LQ : LQ,
              uQ = xQ.width;
            if (vQ) {
              const FQ = this._getWebGLTextureType(oQ);
              let wQ = this._getInternalFormat(qQ);
              const LQ = this._getRGBABufferInternalSizedFormat(oQ);
              let kQ = !1;
              wQ === YQ.RGB && (wQ = YQ.RGBA, kQ = !0), this._bindTextureDirectly(YQ.TEXTURE_CUBE_MAP, xQ, !0), this._unpackFlipY(!1);
              const mQ = vQ(DQ);
              for (let qQ = 0; qQ < mQ.length; qQ++) {
                const DQ = uQ >> qQ;
                for (let vQ = 0; vQ < 6; vQ++) {
                  let uQ = mQ[qQ][vQ];
                  kQ && (uQ = QQ(uQ, DQ, DQ, oQ)), YQ.texImage2D(vQ, qQ, LQ, DQ, DQ, 0, wQ, FQ, uQ)
                }
              }
              this._bindTextureDirectly(YQ.TEXTURE_CUBE_MAP, null)
            } else this.updateRawCubeTexture(xQ, DQ, qQ, oQ, bQ);
            xQ.isReady = !0, wQ?.removePendingData(xQ), xQ.onLoadedObservable.notifyObservers(xQ), xQ.onLoadedObservable.clear(), mQ && mQ()
          };
        return this._loadFile(FQ, (QQ => {
          tQ(QQ).catch((QQ => {
            AQ(void 0, QQ)
          }))
        }), void 0, wQ?.offlineProvider, !0, AQ), xQ
      }, qQ.ThinEngine.prototype.createRawTexture2DArray = FQ(!1), qQ.ThinEngine.prototype.createRawTexture3D = FQ(!0), qQ.ThinEngine.prototype.updateRawTexture2DArray = wQ(!1), qQ.ThinEngine.prototype.updateRawTexture3D = wQ(!0))
    }();
    var uQ = wQ(39274);
    let HQ = !1;
    HQ || (HQ = !0, qQ.ThinEngine.prototype._readTexturePixelsSync = function(QQ, FQ, wQ) {
      let LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1,
        qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        oQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        DQ = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
        kQ = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        vQ = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
        mQ = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
      const HQ = this._gl;
      if (!HQ) throw new Error("Engine does not have gl rendering context.");
      if (!this._dummyFramebuffer) {
        const QQ = HQ.createFramebuffer();
        if (!QQ) throw new Error("Unable to create dummy framebuffer");
        this._dummyFramebuffer = QQ
      }
      HQ.bindFramebuffer(HQ.FRAMEBUFFER, this._dummyFramebuffer), LQ > -1 && (QQ.is2DArray || QQ.is3D) ? HQ.framebufferTextureLayer(HQ.FRAMEBUFFER, HQ.COLOR_ATTACHMENT0, QQ._hardwareTexture?.underlyingResource, qQ, LQ) : LQ > -1 ? HQ.framebufferTexture2D(HQ.FRAMEBUFFER, HQ.COLOR_ATTACHMENT0, HQ.TEXTURE_CUBE_MAP_POSITIVE_X + LQ, QQ._hardwareTexture?.underlyingResource, qQ) : HQ.framebufferTexture2D(HQ.FRAMEBUFFER, HQ.COLOR_ATTACHMENT0, HQ.TEXTURE_2D, QQ._hardwareTexture?.underlyingResource, qQ);
      let bQ = void 0 !== QQ.type ? this._getWebGLTextureType(QQ.type) : HQ.UNSIGNED_BYTE;
      return kQ ? oQ || (oQ = (0, uQ.m)(QQ.type, 4 * FQ * wQ)) : bQ === HQ.UNSIGNED_BYTE ? (oQ || (oQ = new Uint8Array(4 * FQ * wQ)), bQ = HQ.UNSIGNED_BYTE) : (oQ || (oQ = new Float32Array(4 * FQ * wQ)), bQ = HQ.FLOAT), DQ && this.flushFramebuffer(), HQ.readPixels(vQ, mQ, FQ, wQ, HQ.RGBA, bQ, oQ), HQ.bindFramebuffer(HQ.FRAMEBUFFER, this._currentFramebuffer), oQ
    }, qQ.ThinEngine.prototype._readTexturePixels = function(QQ, FQ, wQ) {
      let LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1,
        qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        oQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        DQ = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
        kQ = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        vQ = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
        mQ = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
      return Promise.resolve(this._readTexturePixelsSync(QQ, FQ, wQ, LQ, qQ, oQ, DQ, kQ, vQ, mQ))
    }), (0, wQ(39376).b)();
    let bQ = !1;
    bQ || (bQ = !0, qQ.ThinEngine.prototype._createDepthStencilCubeTexture = function(QQ, FQ) {
      const wQ = new DQ.d(this, 12);
      if (wQ.isCube = !0, 1 === this.oA) return kQ.c.Error("Depth cube texture is not supported by WebGL 1."), wQ;
      const LQ = {
          bilinearFiltering: !1,
          comparisonFunction: 0,
          generateStencil: !1,
          ...FQ
        },
        qQ = this._gl;
      this._bindTextureDirectly(qQ.TEXTURE_CUBE_MAP, wQ, !0), this._setupDepthStencilTexture(wQ, QQ, LQ.bilinearFiltering, LQ.comparisonFunction);
      for (let oQ = 0; oQ < 6; oQ++) LQ.generateStencil ? qQ.texImage2D(qQ.TEXTURE_CUBE_MAP_POSITIVE_X + oQ, 0, qQ.DEPTH24_STENCIL8, QQ, QQ, 0, qQ.DEPTH_STENCIL, qQ.UNSIGNED_INT_24_8, null) : qQ.texImage2D(qQ.TEXTURE_CUBE_MAP_POSITIVE_X + oQ, 0, qQ.DEPTH_COMPONENT24, QQ, QQ, 0, qQ.DEPTH_COMPONENT, qQ.UNSIGNED_INT, null);
      return this._bindTextureDirectly(qQ.TEXTURE_CUBE_MAP, null), this._internalTexturesCache.push(wQ), wQ
    }, qQ.ThinEngine.prototype._setCubeMapTextureParams = function(QQ, FQ, wQ) {
      const LQ = this._gl;
      LQ.texParameteri(LQ.TEXTURE_CUBE_MAP, LQ.TEXTURE_MAG_FILTER, LQ.LINEAR), LQ.texParameteri(LQ.TEXTURE_CUBE_MAP, LQ.TEXTURE_MIN_FILTER, FQ ? LQ.LINEAR_MIPMAP_LINEAR : LQ.LINEAR), LQ.texParameteri(LQ.TEXTURE_CUBE_MAP, LQ.TEXTURE_WRAP_S, LQ.CLAMP_TO_EDGE), LQ.texParameteri(LQ.TEXTURE_CUBE_MAP, LQ.TEXTURE_WRAP_T, LQ.CLAMP_TO_EDGE), QQ.samplingMode = FQ ? 3 : 2, FQ && this.getCaps().textureMaxLevel && void 0 !== wQ && wQ > 0 && (LQ.texParameteri(LQ.TEXTURE_CUBE_MAP, LQ.TEXTURE_MAX_LEVEL, wQ), QQ._maxLodLevel = wQ), this._bindTextureDirectly(LQ.TEXTURE_CUBE_MAP, null)
    }, qQ.ThinEngine.prototype.createCubeTexture = function(QQ, FQ, wQ, LQ) {
      let qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        oQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        DQ = arguments.length > 6 ? arguments[6] : void 0,
        mQ = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        uQ = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        HQ = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
        bQ = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
        YQ = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
        xQ = arguments.length > 13 && void 0 !== arguments[13] && arguments[13],
        AQ = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : null;
      const tQ = this._gl;
      return this.createCubeTextureBase(QQ, FQ, wQ, !!LQ, qQ, oQ, DQ, mQ, uQ, HQ, bQ, YQ, (QQ => this._bindTextureDirectly(tQ.TEXTURE_CUBE_MAP, QQ, !0)), ((QQ, FQ) => {
        const wQ = this.needPOTTextures ? (0, vQ.e)(FQ[0].width, this._caps.maxCubemapTextureSize) : FQ[0].width,
          oQ = wQ,
          mQ = [tQ.TEXTURE_CUBE_MAP_POSITIVE_X, tQ.TEXTURE_CUBE_MAP_POSITIVE_Y, tQ.TEXTURE_CUBE_MAP_POSITIVE_Z, tQ.TEXTURE_CUBE_MAP_NEGATIVE_X, tQ.TEXTURE_CUBE_MAP_NEGATIVE_Y, tQ.TEXTURE_CUBE_MAP_NEGATIVE_Z];
        this._bindTextureDirectly(tQ.TEXTURE_CUBE_MAP, QQ, !0), this._unpackFlipY(!1);
        const uQ = DQ ? this._getInternalFormat(DQ, QQ._useSRGBBuffer) : QQ._useSRGBBuffer ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : tQ.RGBA;
        let HQ = DQ ? this._getInternalFormat(DQ) : tQ.RGBA;
        QQ._useSRGBBuffer && 1 === this.oA && (HQ = uQ);
        for (let LQ = 0; LQ < mQ.length; LQ++)
          if (FQ[LQ].width !== wQ || FQ[LQ].height !== oQ) {
            if (this._prepareWorkingCanvas(), !this._workingCanvas || !this._workingContext) return void kQ.c.Warn("Cannot create canvas to resize texture.");
            this._workingCanvas.width = wQ, this._workingCanvas.height = oQ, this._workingContext.drawImage(FQ[LQ], 0, 0, FQ[LQ].width, FQ[LQ].height, 0, 0, wQ, oQ), tQ.texImage2D(mQ[LQ], 0, uQ, HQ, tQ.UNSIGNED_BYTE, this._workingCanvas)
          } else tQ.texImage2D(mQ[LQ], 0, uQ, HQ, tQ.UNSIGNED_BYTE, FQ[LQ]);
        LQ || tQ.generateMipmap(tQ.TEXTURE_CUBE_MAP), this._setCubeMapTextureParams(QQ, !LQ), QQ.width = wQ, QQ.height = oQ, QQ.isReady = !0, DQ && (QQ.format = DQ), QQ.onLoadedObservable.notifyObservers(QQ), QQ.onLoadedObservable.clear(), qQ && qQ()
      }), !!xQ, AQ)
    }, qQ.ThinEngine.prototype.generateMipMapsForCubemap = function(QQ) {
      let FQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (QQ.generateMipMaps) {
        const wQ = this._gl;
        this._bindTextureDirectly(wQ.TEXTURE_CUBE_MAP, QQ, !0), wQ.generateMipmap(wQ.TEXTURE_CUBE_MAP), FQ && this._bindTextureDirectly(wQ.TEXTURE_CUBE_MAP, null)
      }
    });
    wQ(39380);
    let YQ = !1;
    YQ || (YQ = !0, qQ.ThinEngine.prototype.setDepthStencilTexture = function(QQ, FQ, wQ, LQ) {
      void 0 !== QQ && (FQ && (this._boundUniforms[QQ] = FQ), wQ && wQ.depthStencilTexture ? this._setTexture(QQ, wQ, !1, !0, LQ) : this._setTexture(QQ, null, void 0, void 0, LQ))
    });
    let xQ = !1;
    xQ || (xQ = !0, qQ.ThinEngine.prototype.createRenderTargetCubeTexture = function(QQ, FQ) {
      const wQ = this._createHardwareRenderTargetWrapper(!1, !0, QQ),
        LQ = {
          generateMipMaps: !0,
          generateDepthBuffer: !0,
          generateStencilBuffer: !1,
          type: 0,
          samplingMode: 3,
          format: 5,
          ...FQ
        };
      LQ.generateStencilBuffer = LQ.generateDepthBuffer && LQ.generateStencilBuffer, (1 !== LQ.type || this._caps.textureFloatLinearFiltering) && (2 !== LQ.type || this._caps.textureHalfFloatLinearFiltering) || (LQ.samplingMode = 1);
      const qQ = this._gl,
        oQ = new DQ.d(this, 5);
      this._bindTextureDirectly(qQ.TEXTURE_CUBE_MAP, oQ, !0);
      const vQ = this._getSamplingParameters(LQ.samplingMode, LQ.generateMipMaps);
      1 !== LQ.type || this._caps.textureFloat || (LQ.type = 0, kQ.c.Warn("Float textures are not supported. Cube render target forced to TEXTURETYPE_UNESIGNED_BYTE type")), qQ.texParameteri(qQ.TEXTURE_CUBE_MAP, qQ.TEXTURE_MAG_FILTER, vQ.mag), qQ.texParameteri(qQ.TEXTURE_CUBE_MAP, qQ.TEXTURE_MIN_FILTER, vQ.min), qQ.texParameteri(qQ.TEXTURE_CUBE_MAP, qQ.TEXTURE_WRAP_S, qQ.CLAMP_TO_EDGE), qQ.texParameteri(qQ.TEXTURE_CUBE_MAP, qQ.TEXTURE_WRAP_T, qQ.CLAMP_TO_EDGE);
      for (let DQ = 0; DQ < 6; DQ++) qQ.texImage2D(qQ.TEXTURE_CUBE_MAP_POSITIVE_X + DQ, 0, this._getRGBABufferInternalSizedFormat(LQ.type, LQ.format), QQ, QQ, 0, this._getInternalFormat(LQ.format), this._getWebGLTextureType(LQ.type), null);
      const mQ = qQ.createFramebuffer();
      return this._bindUnboundFramebuffer(mQ), wQ._depthStencilBuffer = this._setupFramebufferDepthAttachments(LQ.generateStencilBuffer, LQ.generateDepthBuffer, QQ, QQ), LQ.generateMipMaps && qQ.generateMipmap(qQ.TEXTURE_CUBE_MAP), this._bindTextureDirectly(qQ.TEXTURE_CUBE_MAP, null), this._bindUnboundFramebuffer(null), wQ._framebuffer = mQ, wQ._generateDepthBuffer = LQ.generateDepthBuffer, wQ._generateStencilBuffer = LQ.generateStencilBuffer, oQ.width = QQ, oQ.height = QQ, oQ.isReady = !0, oQ.isCube = !0, oQ.samples = 1, oQ.generateMipMaps = LQ.generateMipMaps, oQ.samplingMode = LQ.samplingMode, oQ.type = LQ.type, oQ.format = LQ.format, this._internalTexturesCache.push(oQ), wQ.setTextures(oQ), wQ
    });
    var AQ = wQ(39389),
      tQ = wQ(39397);
    let eQ = !1;
    eQ || (eQ = !0, qQ.ThinEngine.prototype.createPrefilteredCubeTexture = function(QQ, FQ, LQ, qQ) {
      let oQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        vQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        mQ = arguments.length > 6 ? arguments[6] : void 0,
        uQ = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        HQ = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
        bQ = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null;
      return this.createCubeTexture(QQ, FQ, null, !1, (async QQ => {
        if (!QQ) return void(oQ && oQ(null));
        const vQ = QQ.texture;
        if (HQ ? QQ.info.sphericalPolynomial && (vQ._sphericalPolynomial = QQ.info.sphericalPolynomial) : vQ._sphericalPolynomial = vQ._sphericalPolynomial ?? new AQ.e, vQ._source = 9, this.getCaps().textureLOD) return void(oQ && oQ(vQ));
        const mQ = this._gl,
          uQ = QQ.width;
        if (!uQ) return;
        const {
          DDSTools: bQ
        } = await wQ.e(297).then((() => wQ(41162))), YQ = [];
        for (let wQ = 0; wQ < 3; wQ++) {
          const oQ = 1 - wQ / 2,
            HQ = qQ,
            xQ = Math.log2(uQ) * LQ + qQ,
            AQ = HQ + (xQ - HQ) * oQ,
            eQ = Math.round(Math.min(Math.max(AQ, 0), xQ)),
            MQ = new DQ.d(this, 2);
          if (MQ.type = vQ.type, MQ.format = vQ.format, MQ.width = Math.pow(2, Math.max(Math.log2(uQ) - eQ, 0)), MQ.height = MQ.width, MQ.isCube = !0, MQ._cachedWrapU = 0, MQ._cachedWrapV = 0, this._bindTextureDirectly(mQ.TEXTURE_CUBE_MAP, MQ, !0), MQ.samplingMode = 2, mQ.texParameteri(mQ.TEXTURE_CUBE_MAP, mQ.TEXTURE_MAG_FILTER, mQ.LINEAR), mQ.texParameteri(mQ.TEXTURE_CUBE_MAP, mQ.TEXTURE_MIN_FILTER, mQ.LINEAR), mQ.texParameteri(mQ.TEXTURE_CUBE_MAP, mQ.TEXTURE_WRAP_S, mQ.CLAMP_TO_EDGE), mQ.texParameteri(mQ.TEXTURE_CUBE_MAP, mQ.TEXTURE_WRAP_T, mQ.CLAMP_TO_EDGE), QQ.isDDS) {
            const FQ = QQ.info,
              wQ = QQ.data;
            this._unpackFlipY(FQ.isCompressed), bQ.UploadDDSLevels(this, MQ, wQ, FQ, !0, 6, eQ)
          } else kQ.c.Warn("DDS is the only prefiltered cube map supported so far.");
          this._bindTextureDirectly(mQ.TEXTURE_CUBE_MAP, null);
          const GQ = new tQ.b(FQ);
          GQ._isCube = !0, GQ._texture = MQ, MQ.isReady = !0, YQ.push(GQ)
        }
        vQ._lodTextureHigh = YQ[2], vQ._lodTextureMid = YQ[1], vQ._lodTextureLow = YQ[0], oQ && oQ(vQ)
      }), vQ, mQ, uQ, HQ, LQ, qQ, null, void 0, !1, bQ)
    });
    var MQ = wQ(39321);
    let GQ = !1;
    GQ || (GQ = !0, qQ.ThinEngine.prototype.createUniformBuffer = function(QQ, FQ) {
      const wQ = this._gl.createBuffer();
      if (!wQ) throw new Error("Unable to create uniform buffer");
      const LQ = new MQ.c(wQ);
      return this.bindUniformBuffer(LQ), QQ instanceof Float32Array ? this._gl.bufferData(this._gl.UNIFORM_BUFFER, QQ, this._gl.STATIC_DRAW) : this._gl.bufferData(this._gl.UNIFORM_BUFFER, new Float32Array(QQ), this._gl.STATIC_DRAW), this.bindUniformBuffer(null), LQ.references = 1, LQ
    }, qQ.ThinEngine.prototype.createDynamicUniformBuffer = function(QQ, FQ) {
      const wQ = this._gl.createBuffer();
      if (!wQ) throw new Error("Unable to create dynamic uniform buffer");
      const LQ = new MQ.c(wQ);
      return this.bindUniformBuffer(LQ), QQ instanceof Float32Array ? this._gl.bufferData(this._gl.UNIFORM_BUFFER, QQ, this._gl.DYNAMIC_DRAW) : this._gl.bufferData(this._gl.UNIFORM_BUFFER, new Float32Array(QQ), this._gl.DYNAMIC_DRAW), this.bindUniformBuffer(null), LQ.references = 1, LQ
    }, qQ.ThinEngine.prototype.updateUniformBuffer = function(QQ, FQ, wQ, LQ) {
      this.bindUniformBuffer(QQ), void 0 === wQ && (wQ = 0), void 0 === LQ ? FQ instanceof Float32Array ? this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, wQ, FQ) : this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, wQ, new Float32Array(FQ)) : FQ instanceof Float32Array ? this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, 0, FQ.subarray(wQ, wQ + LQ)) : this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, 0, new Float32Array(FQ).subarray(wQ, wQ + LQ)), this.bindUniformBuffer(null)
    }, qQ.ThinEngine.prototype.bindUniformBuffer = function(QQ) {
      this._gl.bindBuffer(this._gl.UNIFORM_BUFFER, QQ ? QQ.underlyingResource : null)
    }, qQ.ThinEngine.prototype.bindUniformBufferBase = function(QQ, FQ, wQ) {
      this._gl.bindBufferBase(this._gl.UNIFORM_BUFFER, FQ, QQ ? QQ.underlyingResource : null)
    }, qQ.ThinEngine.prototype.bindUniformBlock = function(QQ, FQ, wQ) {
      const LQ = QQ.program,
        qQ = this._gl.getUniformBlockIndex(LQ, FQ);
      4294967295 !== qQ && this._gl.uniformBlockBinding(LQ, qQ, wQ)
    });
    var pQ = wQ(39264),
      cQ = wQ(39295);
    let CQ = !1;
    CQ || (CQ = !0, cQ.e.prototype.displayLoadingUI = function() {
      if (!(0, pQ.g)()) return;
      const QQ = this.loadingScreen;
      QQ && QQ.displayLoadingUI()
    }, cQ.e.prototype.hideLoadingUI = function() {
      if (!(0, pQ.g)()) return;
      const QQ = this._loadingScreen;
      QQ && QQ.hideLoadingUI()
    }, Object.defineProperty(cQ.e.prototype, "loadingScreen", {
      get: function() {
        return !this._loadingScreen && this._renderingCanvas && (this._loadingScreen = cQ.e.DefaultLoadingScreenFactory(this._renderingCanvas)), this._loadingScreen
      },
      set: function(QQ) {
        this._loadingScreen = QQ
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(cQ.e.prototype, "loadingUIText", {
      set: function(QQ) {
        this.loadingScreen.loadingUIText = QQ
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(cQ.e.prototype, "loadingUIBackgroundColor", {
      set: function(QQ) {
        this.loadingScreen.loadingUIBackgroundColor = QQ
      },
      enumerable: !0,
      configurable: !0
    })), (0, wQ(39358).c)();
    let SQ = !1;
    SQ || (SQ = !0, cQ.e.prototype.getInputElement = function() {
      return this._renderingCanvas
    }, cQ.e.prototype.getDepthFunction = function() {
      return this._depthCullingState.depthFunc
    }, cQ.e.prototype.setDepthFunction = function(QQ) {
      this._depthCullingState.depthFunc = QQ
    }, cQ.e.prototype.setDepthFunctionToGreater = function() {
      this.setDepthFunction(516)
    }, cQ.e.prototype.setDepthFunctionToGreaterOrEqual = function() {
      this.setDepthFunction(518)
    }, cQ.e.prototype.setDepthFunctionToLess = function() {
      this.setDepthFunction(513)
    }, cQ.e.prototype.setDepthFunctionToLessOrEqual = function() {
      this.setDepthFunction(515)
    }, cQ.e.prototype.getDepthWrite = function() {
      return this._depthCullingState.depthMask
    }, cQ.e.prototype.setDepthWrite = function(QQ) {
      this._depthCullingState.depthMask = QQ
    }, cQ.e.prototype.setAlphaConstants = function(QQ, FQ, wQ, LQ) {
      this._alphaState.setAlphaBlendConstants(QQ, FQ, wQ, LQ)
    }, cQ.e.prototype.getAlphaMode = function() {
      let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
      return this._alphaMode[QQ]
    }, cQ.e.prototype.getAlphaEquation = function() {
      let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
      return this._alphaEquation[QQ]
    });
    let iQ = !1;
    iQ || (iQ = !0, cQ.e.prototype.getStencilBuffer = function() {
      return this._stencilState.stencilTest
    }, cQ.e.prototype.setStencilBuffer = function(QQ) {
      this._stencilState.stencilTest = QQ
    }, cQ.e.prototype.getStencilMask = function() {
      return this._stencilState.stencilMask
    }, cQ.e.prototype.setStencilMask = function(QQ) {
      this._stencilState.stencilMask = QQ
    }, cQ.e.prototype.getStencilFunction = function() {
      return this._stencilState.stencilFunc
    }, cQ.e.prototype.getStencilBackFunction = function() {
      return this._stencilState.stencilBackFunc
    }, cQ.e.prototype.getStencilFunctionReference = function() {
      return this._stencilState.stencilFuncRef
    }, cQ.e.prototype.getStencilFunctionMask = function() {
      return this._stencilState.stencilFuncMask
    }, cQ.e.prototype.setStencilFunction = function(QQ) {
      this._stencilState.stencilFunc = QQ
    }, cQ.e.prototype.setStencilBackFunction = function(QQ) {
      this._stencilState.stencilBackFunc = QQ
    }, cQ.e.prototype.setStencilFunctionReference = function(QQ) {
      this._stencilState.stencilFuncRef = QQ
    }, cQ.e.prototype.setStencilFunctionMask = function(QQ) {
      this._stencilState.stencilFuncMask = QQ
    }, cQ.e.prototype.getStencilOperationFail = function() {
      return this._stencilState.stencilOpStencilFail
    }, cQ.e.prototype.getStencilBackOperationFail = function() {
      return this._stencilState.stencilBackOpStencilFail
    }, cQ.e.prototype.getStencilOperationDepthFail = function() {
      return this._stencilState.stencilOpDepthFail
    }, cQ.e.prototype.getStencilBackOperationDepthFail = function() {
      return this._stencilState.stencilBackOpDepthFail
    }, cQ.e.prototype.getStencilOperationPass = function() {
      return this._stencilState.stencilOpStencilDepthPass
    }, cQ.e.prototype.getStencilBackOperationPass = function() {
      return this._stencilState.stencilBackOpStencilDepthPass
    }, cQ.e.prototype.setStencilOperationFail = function(QQ) {
      this._stencilState.stencilOpStencilFail = QQ
    }, cQ.e.prototype.setStencilBackOperationFail = function(QQ) {
      this._stencilState.stencilBackOpStencilFail = QQ
    }, cQ.e.prototype.setStencilOperationDepthFail = function(QQ) {
      this._stencilState.stencilOpDepthFail = QQ
    }, cQ.e.prototype.setStencilBackOperationDepthFail = function(QQ) {
      this._stencilState.stencilBackOpDepthFail = QQ
    }, cQ.e.prototype.setStencilOperationPass = function(QQ) {
      this._stencilState.stencilOpStencilDepthPass = QQ
    }, cQ.e.prototype.setStencilBackOperationPass = function(QQ) {
      this._stencilState.stencilBackOpStencilDepthPass = QQ
    }, cQ.e.prototype.cacheStencilState = function() {
      this._cachedStencilBuffer = this.getStencilBuffer(), this._cachedStencilFunction = this.getStencilFunction(), this._cachedStencilMask = this.getStencilMask(), this._cachedStencilOperationPass = this.getStencilOperationPass(), this._cachedStencilOperationFail = this.getStencilOperationFail(), this._cachedStencilOperationDepthFail = this.getStencilOperationDepthFail(), this._cachedStencilReference = this.getStencilFunctionReference()
    }, cQ.e.prototype.restoreStencilState = function() {
      this.setStencilFunction(this._cachedStencilFunction), this.setStencilMask(this._cachedStencilMask), this.setStencilBuffer(this._cachedStencilBuffer), this.setStencilOperationPass(this._cachedStencilOperationPass), this.setStencilOperationFail(this._cachedStencilOperationFail), this.setStencilOperationDepthFail(this._cachedStencilOperationDepthFail), this.setStencilFunctionReference(this._cachedStencilReference)
    });
    wQ(39436);
    let WQ = !1;
    WQ || (WQ = !0, cQ.e.prototype.createDepthStencilTexture = function(QQ, FQ, wQ) {
      if (FQ.isCube) {
        const wQ = QQ.width || QQ;
        return this._createDepthStencilCubeTexture(wQ, FQ)
      }
      return this._createDepthStencilTexture(QQ, FQ, wQ)
    });
    wQ(39445), wQ(39477);
    let RQ = !1;
    RQ || (RQ = !0, qQ.ThinEngine.prototype.enableScissor = function(QQ, FQ, wQ, LQ) {
      const qQ = this._gl;
      qQ.enable(qQ.SCISSOR_TEST), qQ.scissor(QQ, FQ, wQ, LQ)
    }, qQ.ThinEngine.prototype.disableScissor = function() {
      const QQ = this._gl;
      QQ.disable(QQ.SCISSOR_TEST)
    })
  },
  39219: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => cQ
    });
    var LQ = wQ(39226),
      qQ = wQ(36720),
      oQ = wQ(39240),
      DQ = wQ(39303);
    class kQ {
      constructor() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 30;
        this._enabled = !0, this._rollingFrameTime = new vQ(QQ)
      }
      sampleFrame() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : DQ.e.Now;
        if (this._enabled) {
          if (null != this._lastFrameTimeMs) {
            const FQ = QQ - this._lastFrameTimeMs;
            this._rollingFrameTime.add(FQ)
          }
          this._lastFrameTimeMs = QQ
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
        const QQ = this._rollingFrameTime.history(0);
        return 0 === QQ ? 0 : 1e3 / QQ
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
    class vQ {
      constructor(QQ) {
        this._samples = new Array(QQ), this.reset()
      }
      add(QQ) {
        let FQ;
        if (this.isSaturated()) {
          const QQ = this._samples[this._pos];
          FQ = QQ - this.average, this.average -= FQ / (this._sampleCount - 1), this._m2 -= FQ * (QQ - this.average)
        } else this._sampleCount++;
        FQ = QQ - this.average, this.average += FQ / this._sampleCount, this._m2 += FQ * (QQ - this.average), this.variance = this._m2 / (this._sampleCount - 1), this._samples[this._pos] = QQ, this._pos++, this._pos %= this._samples.length
      }
      history(QQ) {
        if (QQ >= this._sampleCount || QQ >= this._samples.length) return 0;
        const FQ = this._wrapPosition(this._pos - 1);
        return this._samples[this._wrapPosition(FQ - QQ)]
      }
      isSaturated() {
        return this._sampleCount >= this._samples.length
      }
      reset() {
        this.average = 0, this.variance = 0, this._sampleCount = 0, this._pos = 0, this._m2 = 0
      }
      _wrapPosition(QQ) {
        const FQ = this._samples.length;
        return (QQ % FQ + FQ) % FQ
      }
    }
    var mQ = wQ(39321),
      uQ = wQ(38203),
      HQ = wQ(39341),
      bQ = wQ(39295),
      YQ = wQ(39264);

    function xQ(QQ) {
      const FQ = function(QQ) {
        if (!(0, YQ.c)() || !document.body) return null;
        const FQ = document.createElement("span");
        FQ.textContent = "Hg", FQ.style.font = QQ;
        const wQ = document.createElement("div");
        wQ.style.display = "inline-block", wQ.style.width = "1px", wQ.style.height = "0px", wQ.style.verticalAlign = "bottom";
        const LQ = document.createElement("div");
        let qQ, oQ;
        LQ.style.whiteSpace = "nowrap", LQ.appendChild(FQ), LQ.appendChild(wQ), document.body.appendChild(LQ);
        try {
          oQ = wQ.getBoundingClientRect().top - FQ.getBoundingClientRect().top, wQ.style.verticalAlign = "baseline", qQ = wQ.getBoundingClientRect().top - FQ.getBoundingClientRect().top
        } finally {
          document.body.removeChild(LQ)
        }
        const DQ = {
          ascent: qQ,
          height: oQ,
          descent: oQ - qQ
        };
        return AQ(DQ) ? DQ : null
      }(QQ);
      if (FQ) return FQ;
      const wQ = function(QQ) {
        let FQ = null;
        try {
          "undefined" !== typeof OffscreenCanvas ? FQ = new OffscreenCanvas(64, 64) : (0, YQ.c)() && "function" === typeof document.createElement && (FQ = document.createElement("canvas"), FQ.width = 64, FQ.height = 64);
          const wQ = FQ?.getContext("2d");
          if (!wQ) return null;
          wQ.font = QQ;
          const LQ = wQ.measureText("Hg"),
            qQ = Number(LQ.actualBoundingBoxAscent ?? LQ.fontBoundingBoxAscent),
            oQ = Number(LQ.actualBoundingBoxDescent ?? LQ.fontBoundingBoxDescent),
            DQ = {
              ascent: qQ,
              height: qQ + oQ,
              descent: oQ
            };
          return AQ(DQ) ? DQ : null
        } catch {
          return null
        } finally {
          const QQ = FQ;
          "function" === typeof QQ?.dispose && QQ.dispose()
        }
      }(QQ);
      return wQ || function(QQ) {
        const FQ = Math.max(1, function(QQ) {
            const FQ = /(?:^|\s)([0-9]+(?:\.[0-9]+)?)px(?:\/|\s|$)/.exec(String(QQ || ""));
            return FQ ? Number(FQ[1]) : 16
          }(QQ)),
          wQ = .8 * FQ,
          LQ = .2 * FQ;
        return {
          ascent: wQ,
          height: wQ + LQ,
          descent: LQ
        }
      }(QQ)
    }

    function AQ(QQ) {
      return Number.isFinite(QQ.ascent) && Number.isFinite(QQ.height) && Number.isFinite(QQ.descent) && QQ.height > 0
    }

    function tQ(QQ) {
      if (QQ.requestPointerLock) {
        const FQ = QQ.requestPointerLock();
        FQ instanceof Promise ? FQ.then((() => {
          QQ.focus()
        })).catch((() => {})) : QQ.focus()
      }
    }
    var eQ = wQ(39352),
      MQ = wQ(39289),
      GQ = wQ(39358),
      pQ = wQ(39360);
    class cQ extends oQ.ThinEngine {
      static get NpmPackage() {
        return bQ.e.NpmPackage
      }
      static get Version() {
        return bQ.e.Version
      }
      static get Instances() {
        return qQ.d.Instances
      }
      static get LastCreatedEngine() {
        return qQ.d.LastCreatedEngine
      }
      static get LastCreatedScene() {
        return qQ.d.LastCreatedScene
      }
      static DefaultLoadingScreenFactory(QQ) {
        return bQ.e.DefaultLoadingScreenFactory(QQ)
      }
      get _supportsHardwareTextureRescaling() {
        return !!cQ._RescalePostProcessFactory
      }
      _measureFps() {
        this._performanceMonitor.sampleFrame(), this._fps = this._performanceMonitor.averageFPS, this._deltaTime = this._performanceMonitor.instantaneousFrameTime || 0
      }
      get performanceMonitor() {
        return this._performanceMonitor
      }
      constructor(QQ, FQ, wQ) {
        let LQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        (0, GQ.c)(), (0, pQ.c)(), super(QQ, FQ, wQ, LQ), this._performanceMonitor = new kQ, this._drawCalls = new eQ.e, QQ && (this._features.supportRenderPasses = !0)
      }
      _initGLContext() {
        super._initGLContext(), this._rescalePostProcess = null
      }
      _sharedInit(QQ) {
        super._sharedInit(QQ),
          function(QQ, FQ, wQ) {
            QQ._onCanvasFocus = () => {
              QQ.onCanvasFocusObservable.notifyObservers(QQ)
            }, QQ._onCanvasBlur = () => {
              QQ.onCanvasBlurObservable.notifyObservers(QQ)
            }, QQ._onCanvasContextMenu = FQ => {
              QQ.disableContextMenu && FQ.preventDefault()
            }, FQ.addEventListener("focus", QQ._onCanvasFocus), FQ.addEventListener("blur", QQ._onCanvasBlur), FQ.addEventListener("contextmenu", QQ._onCanvasContextMenu), QQ._onBlur = () => {
              QQ.disablePerformanceMonitorInBackground && QQ.performanceMonitor.disable(), QQ._windowIsBackground = !0
            }, QQ._onFocus = () => {
              QQ.disablePerformanceMonitorInBackground && QQ.performanceMonitor.enable(), QQ._windowIsBackground = !1
            }, QQ._onCanvasPointerOut = wQ => {
              document.elementFromPoint(wQ.clientX, wQ.clientY) !== FQ && QQ.onCanvasPointerOutObservable.notifyObservers(wQ)
            };
            const LQ = QQ.getHostWindow();
            LQ && "function" === typeof LQ.addEventListener && (LQ.addEventListener("blur", QQ._onBlur), LQ.addEventListener("focus", QQ._onFocus)), FQ.addEventListener("pointerout", QQ._onCanvasPointerOut), wQ.doNotHandleTouchAction || function(QQ) {
              QQ && QQ.setAttribute && (QQ.setAttribute("touch-action", "none"), QQ.style.touchAction = "none", QQ.style.webkitTapHighlightColor = "transparent")
            }(FQ), !bQ.e.audioEngine && wQ.audioEngine && bQ.e.AudioEngineFactory && (bQ.e.audioEngine = bQ.e.AudioEngineFactory(QQ.getRenderingCanvas(), QQ.getAudioContext(), QQ.getAudioDestination())), (0, YQ.c)() && (QQ._onFullscreenChange = () => {
              QQ.isFullscreen = !!document.fullscreenElement, QQ.isFullscreen && QQ._pointerLockRequested && FQ && tQ(FQ)
            }, document.addEventListener("fullscreenchange", QQ._onFullscreenChange, !1), document.addEventListener("webkitfullscreenchange", QQ._onFullscreenChange, !1), QQ._onPointerLockChange = () => {
              QQ.isPointerLock = document.pointerLockElement === FQ
            }, document.addEventListener("pointerlockchange", QQ._onPointerLockChange, !1), document.addEventListener("webkitpointerlockchange", QQ._onPointerLockChange, !1)), QQ.enableOfflineSupport = void 0 !== bQ.e.OfflineProviderFactory, QQ._deterministicLockstep = !!wQ.deterministicLockstep, QQ._lockstepMaxSteps = wQ.lockstepMaxSteps || 0, QQ._timeStep = wQ.timeStep || 1 / 60
          }(this, QQ, this._creationOptions)
      }
      resizeImageBitmap(QQ, FQ, wQ) {
        return function(QQ, FQ, wQ, LQ) {
          const qQ = QQ.createCanvas(wQ, LQ).getContext("2d");
          if (!qQ) throw new Error("Unable to get 2d context for resizeImageBitmap");
          return qQ.drawImage(FQ, 0, 0), qQ.getImageData(0, 0, wQ, LQ).data
        }(this, QQ, FQ, wQ)
      }
      async _createImageBitmapFromSource(QQ, FQ) {
        return await async function(QQ, FQ, wQ) {
          return await new Promise(((LQ, qQ) => {
            const oQ = new Image;
            oQ.onload = () => {
              oQ.decode().then((() => {
                QQ.createImageBitmap(oQ, wQ).then((QQ => {
                  LQ(QQ)
                }))
              }))
            }, oQ.onerror = () => {
              qQ(`Error loading image ${oQ.src}`)
            }, oQ.src = FQ
          }))
        }(this, QQ, FQ)
      }
      switchFullscreen(QQ) {
        this.isFullscreen ? this.exitFullscreen() : this.enterFullscreen(QQ)
      }
      enterFullscreen(QQ) {
        this.isFullscreen || (this._pointerLockRequested = QQ, this._renderingCanvas && function(QQ) {
          const FQ = QQ.requestFullscreen || QQ.webkitRequestFullscreen;
          FQ && FQ.call(QQ)
        }(this._renderingCanvas))
      }
      exitFullscreen() {
        this.isFullscreen && function() {
          const QQ = document;
          document.exitFullscreen ? document.exitFullscreen() : QQ.webkitCancelFullScreen && QQ.webkitCancelFullScreen()
        }()
      }
      setDitheringState(QQ) {
        QQ ? this._gl.enable(this._gl.DITHER) : this._gl.disable(this._gl.DITHER)
      }
      setRasterizerState(QQ) {
        QQ ? this._gl.disable(this._gl.RASTERIZER_DISCARD) : this._gl.enable(this._gl.RASTERIZER_DISCARD)
      }
      setDirectViewport(QQ, FQ, wQ, LQ) {
        const qQ = this._cachedViewport;
        return this._cachedViewport = null, this._viewport(QQ, FQ, wQ, LQ), qQ
      }
      scissorClear(QQ, FQ, wQ, LQ, qQ) {
        this.enableScissor(QQ, FQ, wQ, LQ), this.clear(qQ, !0, !0, !0), this.disableScissor()
      }
      getVertexShaderSource(QQ) {
        const FQ = this._gl.getAttachedShaders(QQ);
        return FQ ? this._gl.getShaderSource(FQ[0]) : null
      }
      getFragmentShaderSource(QQ) {
        const FQ = this._gl.getAttachedShaders(QQ);
        return FQ ? this._gl.getShaderSource(FQ[1]) : null
      }
      set framebufferDimensionsObject(QQ) {
        this._framebufferDimensionsObject = QQ, this._framebufferDimensionsObject && this.onResizeObservable.notifyObservers(this)
      }
      _rebuildBuffers() {
        for (const QQ of this.scenes) QQ.resetCachedMaterial(), QQ._rebuildGeometries();
        for (const QQ of this._virtualScenes) QQ.resetCachedMaterial(), QQ._rebuildGeometries();
        super._rebuildBuffers()
      }
      getFontOffset(QQ) {
        return xQ(QQ)
      }
      enterPointerlock() {
        this._renderingCanvas && tQ(this._renderingCanvas)
      }
      exitPointerlock() {
        document.exitPointerLock && document.exitPointerLock()
      }
      eC() {
        this._measureFps(), super.eC()
      }
      _deletePipelineContext(QQ) {
        const FQ = QQ;
        FQ && FQ.program && FQ.transformFeedback && (this.deleteTransformFeedback(FQ.transformFeedback), FQ.transformFeedback = null), super._deletePipelineContext(QQ)
      }
      createShaderProgram(QQ, FQ, wQ, LQ, qQ) {
        let oQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        qQ = qQ || this._gl, this.onBeforeShaderCompilationObservable.notifyObservers(this);
        const DQ = super.createShaderProgram(QQ, FQ, wQ, LQ, qQ, oQ);
        return this.onAfterShaderCompilationObservable.notifyObservers(this), DQ
      }
      _createShaderProgram(QQ, FQ, wQ, LQ) {
        let qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        const oQ = LQ.createProgram();
        if (QQ.program = oQ, !oQ) throw new Error("Unable to create program");
        if (LQ.attachShader(oQ, FQ), LQ.attachShader(oQ, wQ), this.oA > 1 && qQ) {
          const FQ = this.createTransformFeedback();
          this.bindTransformFeedback(FQ), this.setTranformFeedbackVaryings(oQ, qQ), QQ.transformFeedback = FQ
        }
        return LQ.linkProgram(oQ), this.oA > 1 && qQ && this.bindTransformFeedback(null), QQ.context = LQ, QQ.vertexShader = FQ, QQ.fragmentShader = wQ, QQ.isParallelCompiled || this._finalizePipelineContext(QQ), oQ
      }
      _releaseTexture(QQ) {
        super._releaseTexture(QQ)
      }
      _releaseRenderTargetWrapper(QQ) {
        super._releaseRenderTargetWrapper(QQ);
        for (const FQ of this.scenes) {
          for (const wQ of FQ.postProcesses) wQ._outputTexture === QQ && (wQ._outputTexture = null);
          for (const wQ of FQ.cameras)
            for (const FQ of wQ._postProcesses) FQ && FQ._outputTexture === QQ && (FQ._outputTexture = null)
        }
      }
      _rescaleTexture(QQ, FQ, wQ, LQ, qQ) {
        this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MAG_FILTER, this._gl.LINEAR), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MIN_FILTER, this._gl.LINEAR), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_S, this._gl.CLAMP_TO_EDGE), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_T, this._gl.CLAMP_TO_EDGE);
        const oQ = this.createRenderTargetTexture({
          width: FQ.width,
          height: FQ.height
        }, {
          generateMipMaps: !1,
          type: 0,
          samplingMode: 2,
          generateDepthBuffer: !1,
          generateStencilBuffer: !1
        });
        if (!this._rescalePostProcess && cQ._RescalePostProcessFactory && (this._rescalePostProcess = cQ._RescalePostProcessFactory(this)), this._rescalePostProcess) {
          this._rescalePostProcess.externalTextureSamplerBinding = !0;
          const DQ = () => {
              this._rescalePostProcess.onApply = function(FQ) {
                FQ._bindTexture("textureSampler", QQ)
              };
              let DQ = wQ;
              DQ || (DQ = this.scenes[this.scenes.length - 1]), DQ.postProcessManager.directRender([this._rescalePostProcess], oQ, !0), this._bindTextureDirectly(this._gl.TEXTURE_2D, FQ, !0), this._gl.copyTexImage2D(this._gl.TEXTURE_2D, 0, LQ, 0, 0, FQ.width, FQ.height, 0), this.unBindFramebuffer(oQ), oQ.dispose(), qQ && qQ()
            },
            kQ = this._rescalePostProcess.getEffect();
          kQ ? kQ.executeWhenCompiled(DQ) : this._rescalePostProcess.onEffectCreatedObservable.addOnce((QQ => {
            QQ.executeWhenCompiled(DQ)
          }))
        }
      }
      wrapWebGLTexture(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3,
          qQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          oQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        const DQ = new HQ.b(QQ, this._gl),
          kQ = new LQ.d(this, 15, !0);
        return kQ._hardwareTexture = DQ, kQ.baseWidth = qQ, kQ.baseHeight = oQ, kQ.width = qQ, kQ.height = oQ, kQ.isReady = !0, kQ.useMipMaps = FQ, this.updateTextureSamplingMode(wQ, kQ), kQ
      }
      updateWrappedWebGLTexture(QQ, FQ) {
        if (15 !== QQ.source) throw new Error("updateWrappedWebGLTexture: target InternalTexture was not produced by wrapWebGLTexture.");
        for (const LQ of this._renderTargetWrapperCache)
          if (LQ.textures?.includes(QQ)) {
            if (LQ.isMulti) throw new Error("updateWrappedWebGLTexture: wrapped texture is part of a multi render-target; not supported. Dispose and re-wrap.");
            if (LQ._depthStencilTexture) throw new Error("updateWrappedWebGLTexture: wrapped texture's render-target wrapper has a depth/stencil texture; not supported. Dispose and re-wrap.")
          } QQ._hardwareTexture = new HQ.b(FQ, this._gl), QQ.isReady = !0, QQ._cachedCoordinatesMode = null, QQ._cachedWrapU = null, QQ._cachedWrapV = null, QQ._cachedWrapR = null, QQ._cachedAnisotropicFilteringLevel = null;
        for (const LQ in this._boundTexturesCache) this._boundTexturesCache[LQ] === QQ && (this._boundTexturesCache[LQ] = null);
        this.updateTextureSamplingMode(QQ.samplingMode, QQ);
        const wQ = this._gl;
        for (const LQ of this._renderTargetWrapperCache) {
          if (LQ.texture !== QQ) continue;
          const qQ = LQ,
            oQ = LQ.samples,
            DQ = oQ > 1;
          qQ._framebuffer && wQ.deleteFramebuffer(qQ._framebuffer), !DQ && qQ._depthStencilBuffer && (wQ.deleteRenderbuffer(qQ._depthStencilBuffer), qQ._depthStencilBuffer = null);
          const kQ = this._currentFramebuffer,
            vQ = wQ.createFramebuffer();
          this._bindUnboundFramebuffer(vQ), wQ.framebufferTexture2D(wQ.FRAMEBUFFER, wQ.COLOR_ATTACHMENT0, wQ.TEXTURE_2D, FQ, 0), DQ || (qQ._depthStencilBuffer = this._setupFramebufferDepthAttachments(LQ._generateStencilBuffer, LQ._generateDepthBuffer, LQ.width, LQ.height)), this._bindUnboundFramebuffer(kQ), qQ._framebuffer = vQ, DQ && (LQ._samples = 1, this.updateRenderTargetTextureSampleCount(qQ, oQ))
        }
      }
      _uploadImageToTexture(QQ, FQ) {
        let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const qQ = this._gl,
          oQ = this._getWebGLTextureType(QQ.type),
          DQ = this._getInternalFormat(QQ.format),
          kQ = this._getRGBABufferInternalSizedFormat(QQ.type, DQ),
          vQ = QQ.isCube ? qQ.TEXTURE_CUBE_MAP : qQ.TEXTURE_2D;
        this._bindTextureDirectly(vQ, QQ, !0), this._unpackFlipY(QQ.invertY);
        let mQ = qQ.TEXTURE_2D;
        QQ.isCube && (mQ = qQ.TEXTURE_CUBE_MAP_POSITIVE_X + wQ), qQ.texImage2D(mQ, LQ, kQ, DQ, oQ, FQ), this._bindTextureDirectly(vQ, null, !0)
      }
      updateTextureComparisonFunction(QQ, FQ) {
        if (1 === this.oA) return void uQ.c.Error("WebGL 1 does not support texture comparison.");
        const wQ = this._gl;
        QQ.isCube ? (this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, QQ, !0), 0 === FQ ? (wQ.texParameteri(wQ.TEXTURE_CUBE_MAP, wQ.TEXTURE_COMPARE_FUNC, 515), wQ.texParameteri(wQ.TEXTURE_CUBE_MAP, wQ.TEXTURE_COMPARE_MODE, wQ.NONE)) : (wQ.texParameteri(wQ.TEXTURE_CUBE_MAP, wQ.TEXTURE_COMPARE_FUNC, FQ), wQ.texParameteri(wQ.TEXTURE_CUBE_MAP, wQ.TEXTURE_COMPARE_MODE, wQ.COMPARE_REF_TO_TEXTURE)), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null)) : (this._bindTextureDirectly(this._gl.TEXTURE_2D, QQ, !0), 0 === FQ ? (wQ.texParameteri(wQ.TEXTURE_2D, wQ.TEXTURE_COMPARE_FUNC, 515), wQ.texParameteri(wQ.TEXTURE_2D, wQ.TEXTURE_COMPARE_MODE, wQ.NONE)) : (wQ.texParameteri(wQ.TEXTURE_2D, wQ.TEXTURE_COMPARE_FUNC, FQ), wQ.texParameteri(wQ.TEXTURE_2D, wQ.TEXTURE_COMPARE_MODE, wQ.COMPARE_REF_TO_TEXTURE)), this._bindTextureDirectly(this._gl.TEXTURE_2D, null)), QQ._comparisonFunction = FQ
      }
      createInstancesBuffer(QQ) {
        const FQ = this._gl.createBuffer();
        if (!FQ) throw new Error("Unable to create instance buffer");
        const wQ = new mQ.c(FQ);
        return wQ.MH = QQ, this.bindArrayBuffer(wQ), this._gl.bufferData(this._gl.ARRAY_BUFFER, QQ, this._gl.DYNAMIC_DRAW), wQ.references = 1, wQ
      }
      deleteInstancesBuffer(QQ) {
        this._gl.deleteBuffer(QQ)
      }
      async _clientWaitAsync(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10;
        const LQ = this._gl;
        return await new Promise(((qQ, oQ) => {
          (0, MQ.e)((() => {
            const wQ = LQ.clientWaitSync(QQ, FQ, 0);
            if (wQ == LQ.WAIT_FAILED) throw new Error("clientWaitSync failed");
            return wQ != LQ.TIMEOUT_EXPIRED
          }), qQ, oQ, wQ)
        }))
      }
      _readPixelsAsync(QQ, FQ, wQ, LQ, qQ, oQ, DQ) {
        if (this._webGLVersion < 2) throw new Error("_readPixelsAsync only work on WebGL2+");
        const kQ = this._gl,
          vQ = kQ.createBuffer();
        kQ.bindBuffer(kQ.PIXEL_PACK_BUFFER, vQ), kQ.bufferData(kQ.PIXEL_PACK_BUFFER, DQ.byteLength, kQ.STREAM_READ), kQ.readPixels(QQ, FQ, wQ, LQ, qQ, oQ, 0), kQ.bindBuffer(kQ.PIXEL_PACK_BUFFER, null);
        const mQ = kQ.fenceSync(kQ.SYNC_GPU_COMMANDS_COMPLETE, 0);
        return mQ ? (kQ.flush(), this._clientWaitAsync(mQ, 0, 10).then((() => (kQ.deleteSync(mQ), kQ.bindBuffer(kQ.PIXEL_PACK_BUFFER, vQ), kQ.getBufferSubData(kQ.PIXEL_PACK_BUFFER, 0, DQ), kQ.bindBuffer(kQ.PIXEL_PACK_BUFFER, null), kQ.deleteBuffer(vQ), DQ)))) : null
      }
      dispose() {
        this.hideLoadingUI?.(), this._rescalePostProcess && this._rescalePostProcess.dispose(),
          function(QQ, FQ) {
            1 === qQ.d.Instances.length && bQ.e.audioEngine && (bQ.e.audioEngine.dispose(), bQ.e.audioEngine = null);
            const wQ = QQ.getHostWindow();
            wQ && "function" === typeof wQ.removeEventListener && (wQ.removeEventListener("blur", QQ._onBlur), wQ.removeEventListener("focus", QQ._onFocus)), FQ && (FQ.removeEventListener("focus", QQ._onCanvasFocus), FQ.removeEventListener("blur", QQ._onCanvasBlur), FQ.removeEventListener("pointerout", QQ._onCanvasPointerOut), FQ.removeEventListener("contextmenu", QQ._onCanvasContextMenu)), (0, YQ.c)() && (document.removeEventListener("fullscreenchange", QQ._onFullscreenChange), document.removeEventListener("mozfullscreenchange", QQ._onFullscreenChange), document.removeEventListener("webkitfullscreenchange", QQ._onFullscreenChange), document.removeEventListener("msfullscreenchange", QQ._onFullscreenChange), document.removeEventListener("pointerlockchange", QQ._onPointerLockChange), document.removeEventListener("mspointerlockchange", QQ._onPointerLockChange), document.removeEventListener("mozpointerlockchange", QQ._onPointerLockChange), document.removeEventListener("webkitpointerlockchange", QQ._onPointerLockChange))
          }(this, this._renderingCanvas), super.dispose()
      }
    }
    cQ.ALPHA_DISABLE = 0, cQ.ALPHA_ADD = 1, cQ.ALPHA_COMBINE = 2, cQ.ALPHA_SUBTRACT = 3, cQ.ALPHA_MULTIPLY = 4, cQ.ALPHA_MAXIMIZED = 5, cQ.ALPHA_ONEONE = 6, cQ.ALPHA_PREMULTIPLIED = 7, cQ.ALPHA_PREMULTIPLIED_PORTERDUFF = 8, cQ.ALPHA_INTERPOLATE = 9, cQ.ALPHA_SCREENMODE = 10, cQ.DELAYLOADSTATE_NONE = 0, cQ.DELAYLOADSTATE_LOADED = 1, cQ.DELAYLOADSTATE_LOADING = 2, cQ.DELAYLOADSTATE_NOTLOADED = 4, cQ.NEVER = 512, cQ.ALWAYS = 519, cQ.LESS = 513, cQ.EQUAL = 514, cQ.LEQUAL = 515, cQ.GREATER = 516, cQ.GEQUAL = 518, cQ.NOTEQUAL = 517, cQ.KEEP = 7680, cQ.REPLACE = 7681, cQ.INCR = 7682, cQ.DECR = 7683, cQ.INVERT = 5386, cQ.INCR_WRAP = 34055, cQ.DECR_WRAP = 34056, cQ.TEXTURE_CLAMP_ADDRESSMODE = 0, cQ.TEXTURE_WRAP_ADDRESSMODE = 1, cQ.TEXTURE_MIRROR_ADDRESSMODE = 2, cQ.TEXTUREFORMAT_ALPHA = 0, cQ.TEXTUREFORMAT_LUMINANCE = 1, cQ.TEXTUREFORMAT_LUMINANCE_ALPHA = 2, cQ.TEXTUREFORMAT_RGB = 4, cQ.TEXTUREFORMAT_RGBA = 5, cQ.TEXTUREFORMAT_RED = 6, cQ.TEXTUREFORMAT_R = 6, cQ.TEXTUREFORMAT_R16_UNORM = 33322, cQ.TEXTUREFORMAT_RG16_UNORM = 33324, cQ.TEXTUREFORMAT_RGB16_UNORM = 32852, cQ.TEXTUREFORMAT_RGBA16_UNORM = 32859, cQ.TEXTUREFORMAT_R16_SNORM = 36760, cQ.TEXTUREFORMAT_RG16_SNORM = 36761, cQ.TEXTUREFORMAT_RGB16_SNORM = 36762, cQ.TEXTUREFORMAT_RGBA16_SNORM = 36763, cQ.TEXTUREFORMAT_RG = 7, cQ.TEXTUREFORMAT_RED_INTEGER = 8, cQ.TEXTUREFORMAT_R_INTEGER = 8, cQ.TEXTUREFORMAT_RG_INTEGER = 9, cQ.TEXTUREFORMAT_RGB_INTEGER = 10, cQ.TEXTUREFORMAT_RGBA_INTEGER = 11, cQ.TEXTURETYPE_UNSIGNED_BYTE = 0, cQ.TEXTURETYPE_UNSIGNED_INT = 0, cQ.TEXTURETYPE_FLOAT = 1, cQ.TEXTURETYPE_HALF_FLOAT = 2, cQ.TEXTURETYPE_BYTE = 3, cQ.TEXTURETYPE_SHORT = 4, cQ.TEXTURETYPE_UNSIGNED_SHORT = 5, cQ.TEXTURETYPE_INT = 6, cQ.TEXTURETYPE_UNSIGNED_INTEGER = 7, cQ.TEXTURETYPE_UNSIGNED_SHORT_4_4_4_4 = 8, cQ.TEXTURETYPE_UNSIGNED_SHORT_5_5_5_1 = 9, cQ.TEXTURETYPE_UNSIGNED_SHORT_5_6_5 = 10, cQ.TEXTURETYPE_UNSIGNED_INT_2_10_10_10_REV = 11, cQ.TEXTURETYPE_UNSIGNED_INT_24_8 = 12, cQ.TEXTURETYPE_UNSIGNED_INT_10F_11F_11F_REV = 13, cQ.TEXTURETYPE_UNSIGNED_INT_5_9_9_9_REV = 14, cQ.TEXTURETYPE_FLOAT_32_UNSIGNED_INT_24_8_REV = 15, cQ.TEXTURE_NEAREST_SAMPLINGMODE = 1, cQ.TEXTURE_BILINEAR_SAMPLINGMODE = 2, cQ.TEXTURE_TRILINEAR_SAMPLINGMODE = 3, cQ.TEXTURE_NEAREST_NEAREST_MIPLINEAR = 8, cQ.TEXTURE_LINEAR_LINEAR_MIPNEAREST = 11, cQ.TEXTURE_LINEAR_LINEAR_MIPLINEAR = 3, cQ.TEXTURE_NEAREST_NEAREST_MIPNEAREST = 4, cQ.TEXTURE_NEAREST_LINEAR_MIPNEAREST = 5, cQ.TEXTURE_NEAREST_LINEAR_MIPLINEAR = 6, cQ.TEXTURE_NEAREST_LINEAR = 7, cQ.TEXTURE_NEAREST_NEAREST = 1, cQ.TEXTURE_LINEAR_NEAREST_MIPNEAREST = 9, cQ.TEXTURE_LINEAR_NEAREST_MIPLINEAR = 10, cQ.TEXTURE_LINEAR_LINEAR = 2, cQ.TEXTURE_LINEAR_NEAREST = 12, cQ.TEXTURE_EXPLICIT_MODE = 0, cQ.TEXTURE_SPHERICAL_MODE = 1, cQ.TEXTURE_PLANAR_MODE = 2, cQ.TEXTURE_CUBIC_MODE = 3, cQ.TEXTURE_PROJECTION_MODE = 4, cQ.TEXTURE_SKYBOX_MODE = 5, cQ.TEXTURE_INVCUBIC_MODE = 6, cQ.TEXTURE_EQUIRECTANGULAR_MODE = 7, cQ.TEXTURE_FIXED_EQUIRECTANGULAR_MODE = 8, cQ.TEXTURE_FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9, cQ.SCALEMODE_FLOOR = 1, cQ.SCALEMODE_NEAREST = 2, cQ.SCALEMODE_CEILING = 3
  },
  39385: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => qQ
    });
    var LQ = wQ(39346);
    class qQ {
      get depthStencilTexture() {
        return this._depthStencilTexture
      }
      setDepthStencilTexture(QQ) {
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && this._depthStencilTexture && this._depthStencilTexture.dispose(), this._depthStencilTexture = QQ, this._generateDepthBuffer = this._generateStencilBuffer = this._depthStencilTextureWithStencil = !1, QQ && (this._generateDepthBuffer = !0, this._generateStencilBuffer = this._depthStencilTextureWithStencil = (0, LQ.c)(QQ.format))
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
      getBaseArrayLayer(QQ) {
        if (!this._textures) return -1;
        const FQ = this._textures[QQ],
          wQ = this._layerIndices?.[QQ] ?? 0,
          LQ = this._faceIndices?.[QQ] ?? 0;
        return FQ.isCube ? 6 * wQ + LQ : FQ.is3D ? 0 : wQ
      }
      get samples() {
        return this._samples
      }
      setSamples(QQ) {
        let FQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          wQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.samples === QQ && !wQ) return QQ;
        const LQ = this._isMulti ? this._engine.updateMultipleRenderTargetTextureSampleCount(this, QQ, FQ) : this._engine.updateRenderTargetTextureSampleCount(this, QQ);
        return this._samples = QQ, LQ
      }
      resolveMSAATextures() {
        this.isMulti ? this._engine.resolveMultiFramebuffer(this) : this._engine.resolveFramebuffer(this)
      }
      generateMipMaps() {
        this._engine._currentRenderTarget === this && (this.isMulti ? this._engine.unBindMultiColorAttachmentFramebuffer(this, !0) : this._engine.unBindFramebuffer(this, !0)), this.isMulti ? this._engine.generateMipMapsMultiFramebuffer(this) : this._engine.generateMipMapsFramebuffer(this)
      }
      constructor(QQ, FQ, wQ, LQ, qQ) {
        this._textures = null, this._faceIndices = null, this._layerIndices = null, this._samples = 1, this._attachments = null, this._generateStencilBuffer = !1, this._generateDepthBuffer = !1, this._depthStencilTextureWithStencil = !1, this.disableAutomaticMSAAResolve = !1, this.resolveMSAAColors = !0, this.resolveMSAADepth = !1, this.resolveMSAAStencil = !1, this.depthReadOnly = !1, this.stencilReadOnly = !1, this._isMulti = QQ, this._isCube = FQ, this._size = wQ, this._engine = LQ, this._depthStencilTexture = null, this.label = qQ
      }
      setTextures(QQ) {
        Array.isArray(QQ) ? this._textures = QQ : this._textures = QQ ? [QQ] : null
      }
      setTexture(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          wQ = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._textures || (this._textures = []), this._textures[FQ] !== QQ && (this._textures[FQ] && wQ && this._textures[FQ].dispose(), this._textures[FQ] = QQ)
      }
      setLayerAndFaceIndices(QQ, FQ) {
        this._layerIndices = QQ, this._faceIndices = FQ
      }
      setLayerAndFaceIndex() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          FQ = arguments.length > 1 ? arguments[1] : void 0,
          wQ = arguments.length > 2 ? arguments[2] : void 0;
        this._layerIndices || (this._layerIndices = []), this._faceIndices || (this._faceIndices = []), void 0 !== FQ && FQ >= 0 && (this._layerIndices[QQ] = FQ), void 0 !== wQ && wQ >= 0 && (this._faceIndices[QQ] = wQ)
      }
      createDepthStencilTexture() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          FQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          wQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          oQ = arguments.length > 5 ? arguments[5] : void 0;
        return this._depthStencilTexture?.dispose(), this._depthStencilTextureWithStencil = wQ, this._depthStencilTextureLabel = oQ, this._depthStencilTexture = this._engine.createDepthStencilTexture(this._size, {
          bilinearFiltering: FQ,
          comparisonFunction: QQ,
          generateStencil: wQ,
          isCube: this._isCube,
          samples: LQ,
          depthTextureFormat: qQ,
          label: oQ
        }, this), this._depthStencilTexture
      }
      _shareDepth(QQ) {
        this.shareDepth(QQ)
      }
      shareDepth(QQ) {
        this._depthStencilTexture && (QQ._depthStencilTexture && QQ._depthStencilTexture.dispose(), QQ._depthStencilTexture = this._depthStencilTexture, QQ._depthStencilTextureWithStencil = this._depthStencilTextureWithStencil, this._depthStencilTexture.incrementReferences())
      }
      _swapAndDie(QQ) {
        this.texture && this.texture._swapAndDie(QQ), this._textures = null, this.dispose(!0)
      }
      _cloneRenderTargetWrapper() {
        let QQ = null;
        if (this._isMulti) {
          const FQ = this.textures;
          if (FQ && FQ.length > 0) {
            let wQ = !1,
              LQ = FQ.length,
              qQ = -1;
            const oQ = FQ[FQ.length - 1]._source;
            14 !== oQ && 12 !== oQ || (wQ = !0, qQ = FQ[FQ.length - 1].format, LQ--);
            const DQ = [],
              kQ = [],
              vQ = [],
              mQ = [],
              uQ = [],
              HQ = [],
              bQ = [],
              YQ = {};
            for (let QQ = 0; QQ < LQ; ++QQ) {
              const wQ = FQ[QQ];
              DQ.push(wQ.samplingMode), kQ.push(wQ.type), vQ.push(wQ.format);
              void 0 !== YQ[wQ.uniqueId] ? (mQ.push(-1), bQ.push(0)) : (YQ[wQ.uniqueId] = QQ, wQ.is2DArray ? (mQ.push(35866), bQ.push(wQ.depth)) : wQ.isCube ? (mQ.push(34067), bQ.push(0)) : wQ.is3D ? (mQ.push(32879), bQ.push(wQ.depth)) : (mQ.push(3553), bQ.push(0))), this._faceIndices && uQ.push(this._faceIndices[QQ] ?? 0), this._layerIndices && HQ.push(this._layerIndices[QQ] ?? 0)
            }
            const xQ = {
                samplingModes: DQ,
                generateMipMaps: FQ[0].generateMipMaps,
                generateDepthBuffer: this._generateDepthBuffer,
                generateStencilBuffer: this._generateStencilBuffer,
                generateDepthTexture: wQ,
                depthTextureFormat: qQ,
                types: kQ,
                formats: vQ,
                FkQ: LQ,
                targetTypes: mQ,
                faceIndex: uQ,
                layerIndex: HQ,
                layerCounts: bQ,
                label: this.label
              },
              AQ = {
                width: this.width,
                height: this.height,
                depth: this.depth
              };
            QQ = this._engine.createMultipleRenderTarget(AQ, xQ);
            for (let tQ = 0; tQ < LQ; ++tQ) {
              if (-1 !== mQ[tQ]) continue;
              const wQ = YQ[FQ[tQ].uniqueId];
              QQ.setTexture(QQ.textures[wQ], tQ)
            }
          }
        } else {
          const FQ = {};
          if (FQ.generateDepthBuffer = this._generateDepthBuffer, FQ.generateMipMaps = this.texture?.generateMipMaps ?? !1, FQ.generateStencilBuffer = this._generateStencilBuffer, FQ.samplingMode = this.texture?.samplingMode, FQ.type = this.texture?.type, FQ.format = this.texture?.format, FQ.noColorAttachment = !this._textures, FQ.label = this.label, this.isCube) QQ = this._engine.createRenderTargetCubeTexture(this.width, FQ);
          else {
            const wQ = {
              width: this.width,
              height: this.height,
              layers: this.is2DArray || this.is3D ? this.texture?.depth : void 0
            };
            QQ = this._engine.createRenderTargetTexture(wQ, FQ)
          }
          QQ.texture && (QQ.texture.isReady = !0)
        }
        return QQ
      }
      _swapRenderTargetWrapper(QQ) {
        if (this._textures && QQ._textures)
          for (let FQ = 0; FQ < this._textures.length; ++FQ) this._textures[FQ]._swapAndDie(QQ._textures[FQ], !1), QQ._textures[FQ].isReady = !0;
        this._depthStencilTexture && QQ._depthStencilTexture && (this._depthStencilTexture._swapAndDie(QQ._depthStencilTexture), QQ._depthStencilTexture.isReady = !0), this._textures = null, this._depthStencilTexture = null
      }
      _rebuild() {
        const QQ = this._cloneRenderTargetWrapper();
        if (QQ) {
          if (this._depthStencilTexture) {
            const FQ = this._depthStencilTexture.samplingMode,
              wQ = this._depthStencilTexture.format,
              LQ = 2 === FQ || 3 === FQ || 11 === FQ;
            QQ.createDepthStencilTexture(this._depthStencilTexture._comparisonFunction, LQ, this._depthStencilTextureWithStencil, this._depthStencilTexture.samples, wQ, this._depthStencilTextureLabel)
          }
          this.samples > 1 && QQ.setSamples(this.samples), QQ._swapRenderTargetWrapper(this), QQ.dispose()
        }
      }
      releaseTextures() {
        if (this._textures)
          for (let QQ = 0; QQ < this._textures.length; ++QQ) this._textures[QQ].dispose();
        this._textures = null
      }
      dispose() {
        arguments.length > 0 && void 0 !== arguments[0] && arguments[0] || (this._depthStencilTexture?.dispose(), this._depthStencilTexture = null, this.releaseTextures()), this._engine._releaseRenderTargetWrapper(this)
      }
    }
  },
  39847: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => LQ
    });
    class LQ {
      static get ForceFullSceneLoadingForIncremental() {
        return LQ._ForceFullSceneLoadingForIncremental
      }
      static set ForceFullSceneLoadingForIncremental(QQ) {
        LQ._ForceFullSceneLoadingForIncremental = QQ
      }
      static get ShowLoadingScreen() {
        return LQ._ShowLoadingScreen
      }
      static set ShowLoadingScreen(QQ) {
        LQ._ShowLoadingScreen = QQ
      }
      static get loggingLevel() {
        return LQ._LoggingLevel
      }
      static set loggingLevel(QQ) {
        LQ._LoggingLevel = QQ
      }
      static get CleanBoneMatrixWeights() {
        return LQ._CleanBoneMatrixWeights
      }
      static set CleanBoneMatrixWeights(QQ) {
        LQ._CleanBoneMatrixWeights = QQ
      }
    }
    LQ._ForceFullSceneLoadingForIncremental = !1, LQ._ShowLoadingScreen = !0, LQ._CleanBoneMatrixWeights = !1, LQ._LoggingLevel = 0
  },
  39486: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => DQ
    });
    var LQ = wQ(38203);
    const qQ = new Map;

    function oQ(QQ, FQ) {
      (function(QQ) {
        return qQ.delete(QQ)
      })(QQ) && LQ.c.Warn(`Extension with the name '${QQ}' already exists`), qQ.set(QQ, FQ)
    }

    function DQ(QQ, FQ) {
      "image/ktx" !== FQ && "image/ktx2" !== FQ || (QQ = ".ktx"), qQ.has(QQ) || (QQ.endsWith(".ies") && oQ(".ies", (async () => await wQ.e(300).then((() => wQ(41175))).then((QQ => new QQ._IESTextureLoader)))), QQ.endsWith(".dds") && oQ(".dds", (async () => await wQ.e(298).then((() => wQ(41184))).then((QQ => new QQ._DDSTextureLoader)))), QQ.endsWith(".basis") && oQ(".basis", (async () => await wQ.e(301).then((() => wQ(41191))).then((QQ => new QQ._BasisTextureLoader)))), QQ.endsWith(".env") && oQ(".env", (async () => await Promise.all([wQ.e(302), wQ.e(299)]).then((() => wQ(41197))).then((QQ => new QQ._ENVTextureLoader)))), QQ.endsWith(".hdr") && oQ(".hdr", (async () => await wQ.e(303).then((() => wQ(41245))).then((QQ => new QQ._HDRTextureLoader)))), (QQ.endsWith(".ktx") || QQ.endsWith(".ktx2")) && (oQ(".ktx", (async () => await wQ.e(304).then((() => wQ(41253))).then((QQ => new QQ._KTXTextureLoader)))), oQ(".ktx2", (async () => await wQ.e(304).then((() => wQ(41253))).then((QQ => new QQ._KTXTextureLoader))))), QQ.endsWith(".tga") && oQ(".tga", (async () => await wQ.e(305).then((() => wQ(41260))).then((QQ => new QQ._TGATextureLoader)))), QQ.endsWith(".exr") && oQ(".exr", (async () => await wQ.e(306).then((() => wQ(41265))).then((QQ => new QQ._ExrTextureLoader)))));
      const LQ = qQ.get(QQ);
      return LQ ? Promise.resolve(LQ(FQ)) : null
    }
  },
  39870: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => DQ,
      f: () => mQ
    });
    var LQ = wQ(39717),
      qQ = wQ(39432),
      oQ = wQ(36741);
    class DQ extends LQ.d {
      get qQQ() {
        return this._subMaterials
      }
      set qQQ(QQ) {
        this._subMaterials = QQ, this._hookArray(QQ)
      }
      getChildren() {
        return this.qQQ
      }
      constructor(QQ, FQ) {
        super(QQ, FQ, !0), this._waitingSubMaterialsUniqueIds = [], this.iN().addMultiMaterial(this), this.qQQ = [], this._storeEffectOnSubMeshes = !0
      }
      _hookArray(QQ) {
        var FQ = this;
        const wQ = QQ.push;
        QQ.push = function() {
          for (var LQ = arguments.length, qQ = new Array(LQ), oQ = 0; oQ < LQ; oQ++) qQ[oQ] = arguments[oQ];
          const DQ = wQ.apply(QQ, qQ);
          return FQ._markAllSubMeshesAsTexturesDirty(), DQ
        };
        const LQ = QQ.splice;
        QQ.splice = (FQ, wQ) => {
          const qQ = LQ.call(QQ, FQ, wQ ?? QQ.length);
          return this._markAllSubMeshesAsTexturesDirty(), qQ
        }
      }
      getSubMaterial(QQ) {
        return QQ < 0 || QQ >= this.qQQ.length ? this.iN().defaultMaterial : this.qQQ[QQ]
      }
      getActiveTextures() {
        return super.getActiveTextures().concat(...this.qQQ.map((QQ => QQ ? QQ.getActiveTextures() : [])))
      }
      hasTexture(QQ) {
        if (super.hasTexture(QQ)) return !0;
        for (let FQ = 0; FQ < this.qQQ.length; FQ++)
          if (this.qQQ[FQ]?.hasTexture(QQ)) return !0;
        return !1
      }
      getClassName() {
        return "MultiMaterial"
      }
      isReadyForSubMesh(QQ, FQ, wQ) {
        for (let LQ = 0; LQ < this.qQQ.length; LQ++) {
          const qQ = this.qQQ[LQ];
          if (qQ) {
            if (qQ._storeEffectOnSubMeshes) {
              if (!qQ.isReadyForSubMesh(QQ, FQ, wQ)) return !1;
              continue
            }
            if (!qQ.isReady(QQ)) return !1
          }
        }
        return !0
      }
      clone(QQ, FQ) {
        const wQ = new DQ(QQ, this.iN());
        for (let LQ = 0; LQ < this.qQQ.length; LQ++) {
          let qQ;
          const oQ = this.qQQ[LQ];
          qQ = FQ && oQ ? oQ.clone(QQ + "-" + oQ.name) : this.qQQ[LQ], wQ.qQQ.push(qQ)
        }
        return wQ
      }
      serialize() {
        const QQ = {};
        QQ.name = this.name, QQ.id = this.id, QQ.uniqueId = this.uniqueId, qQ.c && (QQ.tags = qQ.c.GetTags(this)), QQ.materialsUniqueIds = [], QQ.materials = [];
        for (let FQ = 0; FQ < this.qQQ.length; FQ++) {
          const wQ = this.qQQ[FQ];
          wQ ? (QQ.materialsUniqueIds.push(wQ.uniqueId), QQ.materials.push(wQ.id)) : (QQ.materialsUniqueIds.push(null), QQ.materials.push(null))
        }
        return QQ
      }
      dispose(QQ, FQ, wQ) {
        const LQ = this.iN();
        if (!LQ) return;
        if (wQ)
          for (let oQ = 0; oQ < this.qQQ.length; oQ++) {
            const wQ = this.qQQ[oQ];
            wQ && wQ.dispose(QQ, FQ)
          }
        const qQ = LQ.multiMaterials.indexOf(this);
        qQ >= 0 && LQ.multiMaterials.splice(qQ, 1), super.dispose(QQ, FQ)
      }
    }
    let kQ = !1;

    function vQ(QQ, FQ) {
      const wQ = new DQ(QQ.name, FQ);
      if (wQ.id = QQ.id, wQ._loadedUniqueId = QQ.uniqueId, qQ.c && qQ.c.AddTagsTo(wQ, QQ.tags), QQ.materialsUniqueIds) wQ._waitingSubMaterialsUniqueIds = QQ.materialsUniqueIds;
      else
        for (const LQ of QQ.materials) wQ.qQQ.push(FQ.getLastMaterialById(LQ));
      return wQ
    }

    function mQ() {
      kQ || (kQ = !0, DQ.ParseMultiMaterial = vQ, (0, oQ.e)("BABYLON.MultiMaterial", DQ))
    }
  },
  39655: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => DQ
    });
    var LQ, qQ, oQ = wQ(36696);
    ! function(QQ) {
      QQ[QQ.LOCAL = 0] = "LOCAL", QQ[QQ.WORLD = 1] = "WORLD", QQ[QQ.BONE = 2] = "BONE"
    }(LQ || (LQ = {}));
    class DQ {}
    DQ.X = new oQ.p(1, 0, 0), DQ.Y = new oQ.p(0, 1, 0), DQ.Z = new oQ.p(0, 0, 1),
      function(QQ) {
        QQ[QQ.X = 0] = "X", QQ[QQ.Y = 1] = "Y", QQ[QQ.Z = 2] = "Z"
      }(qQ || (qQ = {}))
  },
  39389: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => vQ,
      e: () => mQ
    });
    var LQ = wQ(36696);
    const qQ = [Math.sqrt(1 / (4 * Math.PI)), -Math.sqrt(3 / (4 * Math.PI)), Math.sqrt(3 / (4 * Math.PI)), -Math.sqrt(3 / (4 * Math.PI)), Math.sqrt(15 / (4 * Math.PI)), -Math.sqrt(15 / (4 * Math.PI)), Math.sqrt(5 / (16 * Math.PI)), -Math.sqrt(15 / (4 * Math.PI)), Math.sqrt(15 / (16 * Math.PI))],
      oQ = [() => 1, QQ => QQ.y, QQ => QQ.z, QQ => QQ.x, QQ => QQ.x * QQ.y, QQ => QQ.y * QQ.z, QQ => 3 * QQ.z * QQ.z - 1, QQ => QQ.x * QQ.z, QQ => QQ.x * QQ.x - QQ.y * QQ.y],
      DQ = (QQ, FQ) => qQ[QQ] * oQ[QQ](FQ),
      kQ = [Math.PI, 2 * Math.PI / 3, 2 * Math.PI / 3, 2 * Math.PI / 3, Math.PI / 4, Math.PI / 4, Math.PI / 4, Math.PI / 4, Math.PI / 4];
    class vQ {
      constructor() {
        this.preScaled = !1, this.l00 = LQ.p.Zero(), this.l1_1 = LQ.p.Zero(), this.l10 = LQ.p.Zero(), this.l11 = LQ.p.Zero(), this.l2_2 = LQ.p.Zero(), this.l2_1 = LQ.p.Zero(), this.l20 = LQ.p.Zero(), this.l21 = LQ.p.Zero(), this.l22 = LQ.p.Zero()
      }
      addLight(QQ, FQ, wQ) {
        LQ.k.Ox[0].set(FQ.r, FQ.g, FQ.b);
        const qQ = LQ.k.Ox[0],
          oQ = LQ.k.Ox[1];
        qQ.scaleToRef(wQ, oQ), oQ.scaleToRef(DQ(0, QQ), LQ.k.Ox[2]), this.l00.addInPlace(LQ.k.Ox[2]), oQ.scaleToRef(DQ(1, QQ), LQ.k.Ox[2]), this.l1_1.addInPlace(LQ.k.Ox[2]), oQ.scaleToRef(DQ(2, QQ), LQ.k.Ox[2]), this.l10.addInPlace(LQ.k.Ox[2]), oQ.scaleToRef(DQ(3, QQ), LQ.k.Ox[2]), this.l11.addInPlace(LQ.k.Ox[2]), oQ.scaleToRef(DQ(4, QQ), LQ.k.Ox[2]), this.l2_2.addInPlace(LQ.k.Ox[2]), oQ.scaleToRef(DQ(5, QQ), LQ.k.Ox[2]), this.l2_1.addInPlace(LQ.k.Ox[2]), oQ.scaleToRef(DQ(6, QQ), LQ.k.Ox[2]), this.l20.addInPlace(LQ.k.Ox[2]), oQ.scaleToRef(DQ(7, QQ), LQ.k.Ox[2]), this.l21.addInPlace(LQ.k.Ox[2]), oQ.scaleToRef(DQ(8, QQ), LQ.k.Ox[2]), this.l22.addInPlace(LQ.k.Ox[2])
      }
      scaleInPlace(QQ) {
        this.l00.scaleInPlace(QQ), this.l1_1.scaleInPlace(QQ), this.l10.scaleInPlace(QQ), this.l11.scaleInPlace(QQ), this.l2_2.scaleInPlace(QQ), this.l2_1.scaleInPlace(QQ), this.l20.scaleInPlace(QQ), this.l21.scaleInPlace(QQ), this.l22.scaleInPlace(QQ)
      }
      convertIncidentRadianceToIrradiance() {
        this.l00.scaleInPlace(kQ[0]), this.l1_1.scaleInPlace(kQ[1]), this.l10.scaleInPlace(kQ[2]), this.l11.scaleInPlace(kQ[3]), this.l2_2.scaleInPlace(kQ[4]), this.l2_1.scaleInPlace(kQ[5]), this.l20.scaleInPlace(kQ[6]), this.l21.scaleInPlace(kQ[7]), this.l22.scaleInPlace(kQ[8])
      }
      convertIrradianceToLambertianRadiance() {
        this.scaleInPlace(1 / Math.PI)
      }
      preScaleForRendering() {
        this.preScaled = !0, this.l00.scaleInPlace(qQ[0]), this.l1_1.scaleInPlace(qQ[1]), this.l10.scaleInPlace(qQ[2]), this.l11.scaleInPlace(qQ[3]), this.l2_2.scaleInPlace(qQ[4]), this.l2_1.scaleInPlace(qQ[5]), this.l20.scaleInPlace(qQ[6]), this.l21.scaleInPlace(qQ[7]), this.l22.scaleInPlace(qQ[8])
      }
      updateFromArray(QQ) {
        return LQ.p.FromArrayToRef(QQ[0], 0, this.l00), LQ.p.FromArrayToRef(QQ[1], 0, this.l1_1), LQ.p.FromArrayToRef(QQ[2], 0, this.l10), LQ.p.FromArrayToRef(QQ[3], 0, this.l11), LQ.p.FromArrayToRef(QQ[4], 0, this.l2_2), LQ.p.FromArrayToRef(QQ[5], 0, this.l2_1), LQ.p.FromArrayToRef(QQ[6], 0, this.l20), LQ.p.FromArrayToRef(QQ[7], 0, this.l21), LQ.p.FromArrayToRef(QQ[8], 0, this.l22), this
      }
      updateFromFloatsArray(QQ) {
        return LQ.p.FromFloatsToRef(QQ[0], QQ[1], QQ[2], this.l00), LQ.p.FromFloatsToRef(QQ[3], QQ[4], QQ[5], this.l1_1), LQ.p.FromFloatsToRef(QQ[6], QQ[7], QQ[8], this.l10), LQ.p.FromFloatsToRef(QQ[9], QQ[10], QQ[11], this.l11), LQ.p.FromFloatsToRef(QQ[12], QQ[13], QQ[14], this.l2_2), LQ.p.FromFloatsToRef(QQ[15], QQ[16], QQ[17], this.l2_1), LQ.p.FromFloatsToRef(QQ[18], QQ[19], QQ[20], this.l20), LQ.p.FromFloatsToRef(QQ[21], QQ[22], QQ[23], this.l21), LQ.p.FromFloatsToRef(QQ[24], QQ[25], QQ[26], this.l22), this
      }
      static FromArray(QQ) {
        return (new vQ).updateFromArray(QQ)
      }
      static FromPolynomial(QQ) {
        const FQ = new vQ;
        return FQ.l00 = QQ.xx.scale(.376127).add(QQ.yy.scale(.376127)).add(QQ.zz.scale(.376126)), FQ.l1_1 = QQ.y.scale(.977204), FQ.l10 = QQ.z.scale(.977204), FQ.l11 = QQ.x.scale(.977204), FQ.l2_2 = QQ.xy.scale(1.16538), FQ.l2_1 = QQ.yz.scale(1.16538), FQ.l20 = QQ.zz.scale(1.34567).subtract(QQ.xx.scale(.672834)).subtract(QQ.yy.scale(.672834)), FQ.l21 = QQ.zx.scale(1.16538), FQ.l22 = QQ.xx.scale(1.16538).subtract(QQ.yy.scale(1.16538)), FQ.l1_1.scaleInPlace(-1), FQ.l11.scaleInPlace(-1), FQ.l2_1.scaleInPlace(-1), FQ.l21.scaleInPlace(-1), FQ.scaleInPlace(Math.PI), FQ
      }
    }
    class mQ {
      constructor() {
        this.x = LQ.p.Zero(), this.y = LQ.p.Zero(), this.z = LQ.p.Zero(), this.xx = LQ.p.Zero(), this.yy = LQ.p.Zero(), this.zz = LQ.p.Zero(), this.xy = LQ.p.Zero(), this.yz = LQ.p.Zero(), this.zx = LQ.p.Zero()
      }
      get preScaledHarmonics() {
        return this._harmonics || (this._harmonics = vQ.FromPolynomial(this)), this._harmonics.preScaled || this._harmonics.preScaleForRendering(), this._harmonics
      }
      addAmbient(QQ) {
        LQ.k.Ox[0].vQQ(QQ.r, QQ.g, QQ.b);
        const FQ = LQ.k.Ox[0];
        this.xx.addInPlace(FQ), this.yy.addInPlace(FQ), this.zz.addInPlace(FQ)
      }
      scaleInPlace(QQ) {
        this.x.scaleInPlace(QQ), this.y.scaleInPlace(QQ), this.z.scaleInPlace(QQ), this.xx.scaleInPlace(QQ), this.yy.scaleInPlace(QQ), this.zz.scaleInPlace(QQ), this.yz.scaleInPlace(QQ), this.zx.scaleInPlace(QQ), this.xy.scaleInPlace(QQ)
      }
      updateFromHarmonics(QQ) {
        return this._harmonics = QQ, this.x.Qs(QQ.l11), this.x.scaleInPlace(1.02333).scaleInPlace(-1), this.y.Qs(QQ.l1_1), this.y.scaleInPlace(1.02333).scaleInPlace(-1), this.z.Qs(QQ.l10), this.z.scaleInPlace(1.02333), this.xx.Qs(QQ.l00), LQ.k.Ox[0].Qs(QQ.l20).scaleInPlace(.247708), LQ.k.Ox[1].Qs(QQ.l22).scaleInPlace(.429043), this.xx.scaleInPlace(.886277).gLQ(LQ.k.Ox[0]).addInPlace(LQ.k.Ox[1]), this.yy.Qs(QQ.l00), this.yy.scaleInPlace(.886277).gLQ(LQ.k.Ox[0]).gLQ(LQ.k.Ox[1]), this.zz.Qs(QQ.l00), LQ.k.Ox[0].Qs(QQ.l20).scaleInPlace(.495417), this.zz.scaleInPlace(.886277).addInPlace(LQ.k.Ox[0]), this.yz.Qs(QQ.l2_1), this.yz.scaleInPlace(.858086).scaleInPlace(-1), this.zx.Qs(QQ.l21), this.zx.scaleInPlace(.858086).scaleInPlace(-1), this.xy.Qs(QQ.l2_2), this.xy.scaleInPlace(.858086), this.scaleInPlace(1 / Math.PI), this
      }
      static FromHarmonics(QQ) {
        return (new mQ).updateFromHarmonics(QQ)
      }
      static FromArray(QQ) {
        const FQ = new mQ;
        return LQ.p.FromArrayToRef(QQ[0], 0, FQ.x), LQ.p.FromArrayToRef(QQ[1], 0, FQ.y), LQ.p.FromArrayToRef(QQ[2], 0, FQ.z), LQ.p.FromArrayToRef(QQ[3], 0, FQ.xx), LQ.p.FromArrayToRef(QQ[4], 0, FQ.yy), LQ.p.FromArrayToRef(QQ[5], 0, FQ.zz), LQ.p.FromArrayToRef(QQ[6], 0, FQ.yz), LQ.p.FromArrayToRef(QQ[7], 0, FQ.zx), LQ.p.FromArrayToRef(QQ[8], 0, FQ.xy), FQ
      }
    }
  },
  39855: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => UQ,
      d: () => TQ
    });
    var LQ = wQ(39402),
      qQ = wQ(36722),
      oQ = wQ(36696),
      DQ = wQ(39561),
      kQ = wQ(39835),
      vQ = wQ(39862),
      mQ = wQ(39552),
      uQ = wQ(39731),
      HQ = wQ(39550);
    class bQ {
      constructor() {
        this._checkCollisions = !1, this._collisionMask = -1, this._collisionGroup = -1, this._surroundingMeshes = null, this._collider = null, this._oldPositionForCollisions = new oQ.p(0, 0, 0), this._diffPositionForCollisions = new oQ.p(0, 0, 0), this._collisionResponse = !0
      }
    }
    var YQ, xQ, AQ, tQ = wQ(39277),
      eQ = wQ(39475),
      MQ = wQ(39741),
      GQ = wQ(36873),
      pQ = wQ(36705),
      cQ = wQ(39655),
      CQ = wQ(38203),
      SQ = wQ(39409),
      iQ = wQ(39295),
      WQ = wQ(36741);

    function RQ(QQ, FQ) {
      return QQ - Math.floor(QQ / FQ) * FQ
    }

    function OQ(QQ, FQ, wQ) {
      QQ instanceof Float32Array ? oQ.c.FromArrayToRef(QQ, FQ, wQ) : wQ.vQQ((0, eQ.d)(QQ[FQ]), (0, eQ.d)(QQ[FQ + 1]), (0, eQ.d)(QQ[FQ + 2]), (0, eQ.d)(QQ[FQ + 3]), (0, eQ.d)(QQ[FQ + 4]), (0, eQ.d)(QQ[FQ + 5]), (0, eQ.d)(QQ[FQ + 6]), (0, eQ.d)(QQ[FQ + 7]), (0, eQ.d)(QQ[FQ + 8]), (0, eQ.d)(QQ[FQ + 9]), (0, eQ.d)(QQ[FQ + 10]), (0, eQ.d)(QQ[FQ + 11]), (0, eQ.d)(QQ[FQ + 12]), (0, eQ.d)(QQ[FQ + 13]), (0, eQ.d)(QQ[FQ + 14]), (0, eQ.d)(QQ[FQ + 15]))
    }

    function sQ(QQ, FQ, wQ, LQ, qQ, kQ, vQ, mQ, uQ) {
      const HQ = wQ.texture,
        bQ = HQ?.getInternalTexture(),
        YQ = bQ?._bufferView;
      if (!(YQ instanceof Float32Array) && !(YQ instanceof Uint16Array)) return CQ.c.Warn("Baked vertex animation bounding info requires CPU-readable Float32Array or Uint16Array texture data.", 1), !1;
      const xQ = HQ.getSize(),
        AQ = function(QQ, FQ) {
          const wQ = QQ.y - QQ.x + 1,
            LQ = FQ * QQ.w / wQ,
            qQ = LQ < 1 ? 0 : 1,
            oQ = wQ - qQ;
          let DQ = RQ(LQ - Math.floor(LQ), 1) * oQ;
          return DQ = RQ(DQ + QQ.z, oQ), Math.floor(DQ) + QQ.x + qQ
        }(LQ, wQ.time);
      if (!isFinite(AQ) || AQ < 0 || AQ >= xQ.height) return CQ.c.Warn("Baked vertex animation bounding info could not be refreshed because the computed frame is outside the texture.", 1), !1;
      const tQ = oQ.k.Ox[0],
        eQ = oQ.k.Matrix[0],
        MQ = oQ.k.Matrix[1],
        GQ = AQ * xQ.width * 4,
        pQ = FQ === DQ.h.NormalKind ? oQ.p.TransformNormalFromFloatsToRef : oQ.p.TransformCoordinatesFromFloatsToRef;
      for (let oQ = 0, DQ = 0; oQ < QQ.length; oQ += 3, DQ += 4) {
        let FQ, wQ;
        for (eQ.reset(), FQ = 0; FQ < 4 && FQ < uQ; FQ++) wQ = kQ[DQ + FQ], wQ > 0 && (OQ(YQ, GQ + 16 * Math.floor(qQ[DQ + FQ]), MQ), MQ.scaleAndAddToRef(wQ, eQ));
        if (vQ && mQ)
          for (FQ = 0; FQ < 4 && FQ + 4 < uQ; FQ++) wQ = mQ[DQ + FQ], wQ > 0 && (OQ(YQ, GQ + 16 * Math.floor(vQ[DQ + FQ]), MQ), MQ.scaleAndAddToRef(wQ, eQ));
        pQ(QQ[oQ], QQ[oQ + 1], QQ[oQ + 2], eQ, tQ), tQ.toArray(QQ, oQ)
      }
      return !0
    }
    class rQ {
      constructor() {
        this.facetNb = 0, this.partitioningSubdivisions = 10, this.partitioningBBoxRatio = 1.01, this.facetDataEnabled = !1, this.facetParameters = {}, this.bbSize = oQ.p.Zero(), this.subDiv = {
          max: 1,
          X: 1,
          Y: 1,
          Z: 1
        }, this.facetDepthSort = !1, this.facetDepthSortEnabled = !1
      }
    }
    class IQ {
      constructor() {
        this._hasVertexAlpha = !1, this._useVertexColors = !0, this._numBoneInfluencers = 4, this._applyFog = !0, this._receiveShadows = !1, this._facetData = new rQ, this._visibility = 1, this._skeleton = null, this._layerMask = 268435455, this._computeBonesUsingShaders = !0, this._isActive = !1, this._onlyForInstances = !1, this._isActiveIntermediate = !1, this._onlyForInstancesIntermediate = !1, this._actAsRegularMesh = !1, this._currentLOD = new Map, this._collisionRetryCount = 3, this._morphTargetManager = null, this._renderingGroupId = 0, this._meshBlendingTag = 0, this._bakedVertexAnimationManager = null, this._material = null, this._positions = null, this._pointerOverDisableMeshTesting = !1, this._meshCollisionData = new bQ, this._enableDistantPicking = !1, this._rawBoundingInfo = null, this._sideOrientationHint = !1, this._wasActiveLastFrame = !1
      }
    }
    let UQ = (() => {
        var QQ;
        let FQ, bQ = vQ.e,
          YQ = [];
        return QQ = class extends bQ {
          static get BILLBOARDMODE_NONE() {
            return vQ.e.BILLBOARDMODE_NONE
          }
          static get BILLBOARDMODE_X() {
            return vQ.e.BILLBOARDMODE_X
          }
          static get BILLBOARDMODE_Y() {
            return vQ.e.BILLBOARDMODE_Y
          }
          static get BILLBOARDMODE_Z() {
            return vQ.e.BILLBOARDMODE_Z
          }
          static get BILLBOARDMODE_ALL() {
            return vQ.e.BILLBOARDMODE_ALL
          }
          static get BILLBOARDMODE_USE_POSITION() {
            return vQ.e.BILLBOARDMODE_USE_POSITION
          }
          get facetNb() {
            return this._internalAbstractMeshDataInfo._facetData.facetNb
          }
          get partitioningSubdivisions() {
            return this._internalAbstractMeshDataInfo._facetData.partitioningSubdivisions
          }
          set partitioningSubdivisions(QQ) {
            this._internalAbstractMeshDataInfo._facetData.partitioningSubdivisions = QQ
          }
          get partitioningBBoxRatio() {
            return this._internalAbstractMeshDataInfo._facetData.partitioningBBoxRatio
          }
          set partitioningBBoxRatio(QQ) {
            this._internalAbstractMeshDataInfo._facetData.partitioningBBoxRatio = QQ
          }
          get mustDepthSortFacets() {
            return this._internalAbstractMeshDataInfo._facetData.facetDepthSort
          }
          set mustDepthSortFacets(QQ) {
            this._internalAbstractMeshDataInfo._facetData.facetDepthSort = QQ
          }
          get facetDepthSortFrom() {
            return this._internalAbstractMeshDataInfo._facetData.facetDepthSortFrom
          }
          set facetDepthSortFrom(QQ) {
            this._internalAbstractMeshDataInfo._facetData.facetDepthSortFrom = QQ
          }
          get collisionRetryCount() {
            return this._internalAbstractMeshDataInfo._collisionRetryCount
          }
          set collisionRetryCount(QQ) {
            this._internalAbstractMeshDataInfo._collisionRetryCount = QQ
          }
          get isFacetDataEnabled() {
            return this._internalAbstractMeshDataInfo._facetData.facetDataEnabled
          }
          get morphTargetManager() {
            return this._internalAbstractMeshDataInfo._morphTargetManager
          }
          set morphTargetManager(QQ) {
            this._internalAbstractMeshDataInfo._morphTargetManager !== QQ && (this._internalAbstractMeshDataInfo._morphTargetManager = QQ, this._syncGeometryWithMorphTargetManager())
          }
          get bakedVertexAnimationManager() {
            return this._internalAbstractMeshDataInfo._bakedVertexAnimationManager
          }
          set bakedVertexAnimationManager(QQ) {
            this._internalAbstractMeshDataInfo._bakedVertexAnimationManager !== QQ && (this._internalAbstractMeshDataInfo._bakedVertexAnimationManager = QQ, this._markSubMeshesAsAttributesDirty())
          }
          _syncGeometryWithMorphTargetManager() {}
          _updateNonUniformScalingState(QQ) {
            return !!super._updateNonUniformScalingState(QQ) && (this._markSubMeshesAsMiscDirty(), !0)
          }
          get rawBoundingInfo() {
            return this._internalAbstractMeshDataInfo._rawBoundingInfo
          }
          set rawBoundingInfo(QQ) {
            this._internalAbstractMeshDataInfo._rawBoundingInfo = QQ
          }
          set ob(QQ) {
            this._internalAbstractMeshDataInfo._meshCollisionData._onCollideObserver && this.onCollideObservable.remove(this._internalAbstractMeshDataInfo._meshCollisionData._onCollideObserver), this._internalAbstractMeshDataInfo._meshCollisionData._onCollideObserver = this.onCollideObservable.add(QQ)
          }
          set onCollisionPositionChange(QQ) {
            this._internalAbstractMeshDataInfo._meshCollisionData._onCollisionPositionChangeObserver && this.onCollisionPositionChangeObservable.remove(this._internalAbstractMeshDataInfo._meshCollisionData._onCollisionPositionChangeObserver), this._internalAbstractMeshDataInfo._meshCollisionData._onCollisionPositionChangeObserver = this.onCollisionPositionChangeObservable.add(QQ)
          }
          get visibility() {
            return this._internalAbstractMeshDataInfo._visibility
          }
          set visibility(QQ) {
            if (this._internalAbstractMeshDataInfo._visibility === QQ) return;
            const FQ = this._internalAbstractMeshDataInfo._visibility;
            this._internalAbstractMeshDataInfo._visibility = QQ, (1 === FQ && 1 !== QQ || 1 !== FQ && 1 === QQ) && this._markSubMeshesAsDirty((QQ => {
              QQ.markAsMiscDirty(), QQ.markAsPrePassDirty()
            }))
          }
          get pointerOverDisableMeshTesting() {
            return this._internalAbstractMeshDataInfo._pointerOverDisableMeshTesting
          }
          set pointerOverDisableMeshTesting(QQ) {
            this._internalAbstractMeshDataInfo._pointerOverDisableMeshTesting = QQ
          }
          get renderingGroupId() {
            return this._internalAbstractMeshDataInfo._renderingGroupId
          }
          set renderingGroupId(QQ) {
            this._internalAbstractMeshDataInfo._renderingGroupId = QQ
          }
          get meshBlendingTag() {
            return this._internalAbstractMeshDataInfo._meshBlendingTag
          }
          set meshBlendingTag(QQ) {
            if (!Number.isInteger(QQ) || QQ < 0 || QQ > 255 || 0 !== QQ && 0 === (63 & QQ)) throw new RangeError("Mesh-blending tag must be 0 or contain a group ID between 1 and 63.");
            this._internalAbstractMeshDataInfo._meshBlendingTag = QQ
          }
          get material() {
            return this._internalAbstractMeshDataInfo._material
          }
          set material(QQ) {
            this._setMaterial(QQ)
          }
          _setMaterial(QQ) {
            this._internalAbstractMeshDataInfo._material !== QQ && (this._internalAbstractMeshDataInfo._material && this._internalAbstractMeshDataInfo._material.meshMap && (this._internalAbstractMeshDataInfo._material.meshMap[this.uniqueId] = void 0), this._internalAbstractMeshDataInfo._material = QQ, QQ && QQ.meshMap && (QQ.meshMap[this.uniqueId] = this), this.onMaterialChangedObservable.hasObservers() && this.onMaterialChangedObservable.notifyObservers(this), this.lC && (this.resetDrawCache(void 0, null == QQ), this._unBindEffect()))
          }
          getMaterialForRenderPass(QQ) {
            return this._internalAbstractMeshDataInfo._materialForRenderPass?.[QQ]
          }
          setMaterialForRenderPass(QQ, FQ) {
            this.resetDrawCache(QQ), this._internalAbstractMeshDataInfo._materialForRenderPass || (this._internalAbstractMeshDataInfo._materialForRenderPass = []);
            const wQ = this._internalAbstractMeshDataInfo._materialForRenderPass[QQ];
            wQ?.meshMap?.[this.uniqueId] && (wQ.meshMap[this.uniqueId] = void 0), this._internalAbstractMeshDataInfo._materialForRenderPass[QQ] = FQ, FQ && FQ.meshMap && (FQ.meshMap[this.uniqueId] = this)
          }
          get receiveShadows() {
            return this._internalAbstractMeshDataInfo._receiveShadows
          }
          set receiveShadows(QQ) {
            this._internalAbstractMeshDataInfo._receiveShadows !== QQ && (this._internalAbstractMeshDataInfo._receiveShadows = QQ, this._markSubMeshesAsLightDirty())
          }
          get hasVertexAlpha() {
            return this._internalAbstractMeshDataInfo._hasVertexAlpha
          }
          set hasVertexAlpha(QQ) {
            this._internalAbstractMeshDataInfo._hasVertexAlpha !== QQ && (this._internalAbstractMeshDataInfo._hasVertexAlpha = QQ, this._markSubMeshesAsAttributesDirty(), this._markSubMeshesAsMiscDirty())
          }
          get useVertexColors() {
            return this._internalAbstractMeshDataInfo._useVertexColors
          }
          set useVertexColors(QQ) {
            this._internalAbstractMeshDataInfo._useVertexColors !== QQ && (this._internalAbstractMeshDataInfo._useVertexColors = QQ, this._markSubMeshesAsAttributesDirty())
          }
          get computeBonesUsingShaders() {
            return this._internalAbstractMeshDataInfo._computeBonesUsingShaders
          }
          set computeBonesUsingShaders(QQ) {
            this._internalAbstractMeshDataInfo._computeBonesUsingShaders !== QQ && (this._internalAbstractMeshDataInfo._computeBonesUsingShaders = QQ, this._markSubMeshesAsAttributesDirty())
          }
          get numBoneInfluencers() {
            return this._internalAbstractMeshDataInfo._numBoneInfluencers
          }
          set numBoneInfluencers(QQ) {
            this._internalAbstractMeshDataInfo._numBoneInfluencers !== QQ && (this._internalAbstractMeshDataInfo._numBoneInfluencers = QQ, this._markSubMeshesAsAttributesDirty())
          }
          get applyFog() {
            return this._internalAbstractMeshDataInfo._applyFog
          }
          set applyFog(QQ) {
            this._internalAbstractMeshDataInfo._applyFog !== QQ && (this._internalAbstractMeshDataInfo._applyFog = QQ, this._markSubMeshesAsMiscDirty())
          }
          get enableDistantPicking() {
            return this._internalAbstractMeshDataInfo._enableDistantPicking
          }
          set enableDistantPicking(QQ) {
            this._internalAbstractMeshDataInfo._enableDistantPicking = QQ
          }
          get layerMask() {
            return this._internalAbstractMeshDataInfo._layerMask
          }
          set layerMask(QQ) {
            QQ !== this._internalAbstractMeshDataInfo._layerMask && (this._internalAbstractMeshDataInfo._layerMask = QQ, this._resyncLightSources())
          }
          get collisionMask() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._collisionMask
          }
          set collisionMask(QQ) {
            this._internalAbstractMeshDataInfo._meshCollisionData._collisionMask = isNaN(QQ) ? -1 : QQ
          }
          get collisionResponse() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._collisionResponse
          }
          set collisionResponse(QQ) {
            this._internalAbstractMeshDataInfo._meshCollisionData._collisionResponse = QQ
          }
          get collisionGroup() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._collisionGroup
          }
          set collisionGroup(QQ) {
            this._internalAbstractMeshDataInfo._meshCollisionData._collisionGroup = isNaN(QQ) ? -1 : QQ
          }
          get surroundingMeshes() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._surroundingMeshes
          }
          set surroundingMeshes(QQ) {
            this._internalAbstractMeshDataInfo._meshCollisionData._surroundingMeshes = QQ
          }
          get lightSources() {
            return this._lightSources
          }
          set skeleton(QQ) {
            const FQ = this._internalAbstractMeshDataInfo._skeleton;
            FQ && FQ.needInitialSkinMatrix && FQ._unregisterMeshWithPoseMatrix(this), QQ && QQ.needInitialSkinMatrix && QQ._registerMeshWithPoseMatrix(this), this._internalAbstractMeshDataInfo._skeleton = QQ, this._internalAbstractMeshDataInfo._skeleton || (this._bonesTransformMatrices = null), this._markSubMeshesAsAttributesDirty()
          }
          get skeleton() {
            return this._internalAbstractMeshDataInfo._skeleton
          }
          constructor(FQ) {
            var wQ;
            let LQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            switch (super(FQ, LQ, !1), wQ = this, this._internalAbstractMeshDataInfo = new IQ, this._waitingMaterialId = null, this._waitingMorphTargetManagerId = null, this._waitingSkeletonId = null, this._waitingSkeletonUniqueId = null, this.cullingStrategy = QQ.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY, this.onCollideObservable = new qQ.e, this.onCollisionPositionChangeObservable = new qQ.e, this.onMaterialChangedObservable = new qQ.e, this.definedFacingForward = !0, this._occlusionQuery = null, this._renderingGroup = null, this.alphaIndex = Number.MAX_VALUE, this.aA = QQ.DefaultIsPickable, this.isNearPickable = !1, this.isNearGrabbable = !1, this.showSubMeshesBoundingBox = !1, this.isBlocker = !1, this.enablePointerMoveEvents = !1, this.outlineColor = GQ.b.Red(), this.outlineWidth = .02, this.overlayColor = GQ.b.Red(), this.overlayAlpha = .5, this.useOctreeForRenderingSelection = !0, this.useOctreeForPicking = !0, this.useOctreeForCollisions = !0, this.Rx = !1, this.Ix = !1, this.actionManager = null, this.ellipsoid = new oQ.p(.5, 1, .5), this.ellipsoidOffset = new oQ.p(0, 0, 0), this.edgesWidth = 1, this.edgesColor = new GQ.e(1, 0, 0, 1), this._edgesRenderer = null, this._masterMesh = null, this._boundingInfo = null, this._boundingInfoIsDirty = !0, this._renderId = 0, this._intersectionsInProgress = new Array, this._unIndexed = !1, this._lightSources = new Array, this._waitingData = {
                lods: null,
                actions: null,
                hN: null
              }, this._bonesTransformMatrices = null, this._transformMatrixTexture = null, this.onRebuildObservable = new qQ.e, this._onCollisionPositionChange = function(QQ, FQ) {
                let LQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                FQ.subtractToRef(wQ._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions, wQ._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions), wQ._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions.length() > iQ.e.CollisionsEpsilon && wQ.position.addInPlace(wQ._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions), LQ && wQ.onCollideObservable.notifyObservers(LQ), wQ.onCollisionPositionChangeObservable.notifyObservers(wQ.position)
              }, LQ = this.iN(), this.layerMask = LQ.defaultRenderableLayerMask, LQ.sLQ(this), this._resyncLightSources(), this._uniformBuffer = new HQ.d(this.iN().Wx(), void 0, void 0, FQ, !this.iN().Wx().isWebGPU), this._buildUniformLayout(), LQ.performancePriority) {
              case 2:
                this.Ix = !0;
              case 1:
                this.Rx = !0, this.aA = !1
            }
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("world", 16), this._uniformBuffer.addUniform("visibility", 1), this._uniformBuffer.create()
          }
          transferToEffect(QQ) {
            const FQ = this._uniformBuffer;
            FQ.Y5("world", QQ), FQ.updateFloat("visibility", this._internalAbstractMeshDataInfo._visibility), FQ.update()
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
          toString(QQ) {
            let FQ = "Name: " + this.name + ", isInstance: " + ("InstancedMesh" === this.getClassName() ? "YES" : "NO");
            FQ += ", # of submeshes: " + (this.lC ? this.lC.length : 0);
            const wQ = this._internalAbstractMeshDataInfo._skeleton;
            return wQ && (FQ += ", skeleton: " + wQ.name), QQ && (FQ += ", billboard mode: " + ["NONE", "X", "Y", null, "Z", null, null, "ALL"][this.billboardMode], FQ += ", freeze wrld mat: " + (this._isWorldMatrixFrozen || this._waitingData.hN ? "YES" : "NO")), FQ
          }
          _getEffectiveParent() {
            return this._masterMesh && this.billboardMode !== vQ.e.BILLBOARDMODE_NONE ? this._masterMesh : super._getEffectiveParent()
          }
          _getActionManagerForTrigger(QQ) {
            let FQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            if (this.actionManager && (FQ || this.actionManager.isRecursive)) {
              if (!QQ) return this.actionManager;
              if (this.actionManager.hasSpecificTrigger(QQ)) return this.actionManager
            }
            return this.parent ? this.parent._getActionManagerForTrigger(QQ, !1) : null
          }
          _releaseRenderPassId(QQ) {}
          _rebuild() {
            if (this.onRebuildObservable.notifyObservers(this), null !== this._occlusionQuery && (this._occlusionQuery = null), this.lC) {
              for (const QQ of this.lC) QQ._rebuild();
              this.resetDrawCache()
            }
          }
          _resyncLightSources() {
            this._lightSources.length = 0;
            for (const QQ of this.iN().lights) QQ.isEnabled() && QQ.canAffectMesh(this) && this._lightSources.push(QQ);
            this._markSubMeshesAsLightDirty()
          }
          _resyncLightSource(QQ) {
            const FQ = QQ.isEnabled() && QQ.canAffectMesh(this),
              wQ = this._lightSources.indexOf(QQ);
            let LQ = !1;
            if (-1 === wQ) {
              if (!FQ) return;
              this._lightSources.push(QQ)
            } else {
              if (FQ) return;
              LQ = !0, this._lightSources.splice(wQ, 1)
            }
            this._markSubMeshesAsLightDirty(LQ)
          }
          _unBindEffect() {
            for (const QQ of this.lC) QQ.setEffect(null)
          }
          _removeLightSource(QQ, FQ) {
            const wQ = this._lightSources.indexOf(QQ); - 1 !== wQ && (this._lightSources.splice(wQ, 1), this._markSubMeshesAsLightDirty(FQ))
          }
          _markSubMeshesAsDirty(QQ) {
            if (this.lC)
              for (const FQ of this.lC)
                for (let wQ = 0; wQ < FQ._drawWrappers.length; ++wQ) {
                  const LQ = FQ._drawWrappers[wQ];
                  LQ && LQ.defines && LQ.defines.markAllAsDirty && QQ(LQ.defines)
                }
          }
          _markSubMeshesAsLightDirty() {
            let QQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            this._markSubMeshesAsDirty((FQ => FQ.markAsLightDirty(QQ)))
          }
          _markSubMeshesAsAttributesDirty() {
            this._markSubMeshesAsDirty((QQ => QQ.markAsAttributesDirty()))
          }
          _markSubMeshesAsMiscDirty() {
            this._markSubMeshesAsDirty((QQ => QQ.markAsMiscDirty()))
          }
          dFQ(QQ) {
            return this._currentRenderId = Number.MAX_VALUE, super.dFQ(QQ), this._isDirty = !0, this
          }
          resetDrawCache(QQ) {
            let FQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (this.lC)
              for (const wQ of this.lC) wQ.resetDrawCache(QQ, FQ)
          }
          get isBlocked() {
            return !1
          }
          getLOD(QQ) {
            return this
          }
          getTotalVertices() {
            return 0
          }
          getTotalIndices() {
            return 0
          }
          OLQ() {
            return null
          }
          getVerticesData(QQ) {
            return null
          }
          setVerticesData(QQ, FQ, wQ, LQ) {
            return this
          }
          updateVerticesData(QQ, FQ, wQ, LQ) {
            return this
          }
          setIndices(QQ, FQ) {
            return this
          }
          isVerticesDataPresent(QQ) {
            return !1
          }
          sK() {
            return this._masterMesh ? this._masterMesh.sK() : (this._boundingInfoIsDirty && (this._boundingInfoIsDirty = !1, this._updateBoundingInfo()), this._boundingInfo)
          }
          getRawBoundingInfo() {
            return this.rawBoundingInfo ?? this.sK()
          }
          setBoundingInfo(QQ) {
            return this._boundingInfo = QQ, this
          }
          get hasBoundingInfo() {
            return null !== this._boundingInfo
          }
          buildBoundingInfo(QQ, FQ, wQ) {
            return this._boundingInfo = new uQ.d(QQ, FQ, wQ), this._boundingInfo
          }
          normalizeToUnitCube() {
            let QQ = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
              FQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              wQ = arguments.length > 2 ? arguments[2] : void 0;
            return super.normalizeToUnitCube(QQ, FQ, wQ)
          }
          get useBones() {
            return this.skeleton && this.iN().skeletonsEnabled && this.isVerticesDataPresent(DQ.h.MatricesIndicesKind) && this.isVerticesDataPresent(DQ.h.MatricesWeightsKind)
          }
          _preActivate() {}
          _preActivateForIntermediateRendering(QQ) {}
          _activate(QQ, FQ) {
            return this._renderId = QQ, !0
          }
          _postActivate() {}
          _freeze() {}
          _unFreeze() {}
          getWorldMatrix() {
            return this._masterMesh && this.billboardMode === vQ.e.BILLBOARDMODE_NONE ? this._masterMesh.getWorldMatrix() : super.getWorldMatrix()
          }
          _getWorldMatrixDeterminant() {
            return this._masterMesh ? this._masterMesh._getWorldMatrixDeterminant() : super._getWorldMatrixDeterminant()
          }
          get lN() {
            return !1
          }
          get pqQ() {
            return !1
          }
          get hasThinInstances() {
            return !1
          }
          movePOV(QQ, FQ, wQ) {
            return this.position.addInPlace(this.calcMovePOV(QQ, FQ, wQ)), this
          }
          calcMovePOV(QQ, FQ, wQ) {
            const LQ = new oQ.c;
            (this.rotationQuaternion ? this.rotationQuaternion : oQ.e.RotationYawPitchRoll(this.rotation.y, this.rotation.x, this.rotation.z)).toRotationMatrix(LQ);
            const qQ = oQ.p.Zero(),
              DQ = this.definedFacingForward ? -1 : 1;
            return oQ.p.TransformCoordinatesFromFloatsToRef(QQ * DQ, FQ, wQ * DQ, LQ, qQ), qQ
          }
          rotatePOV(QQ, FQ, wQ) {
            return this.rotation.addInPlace(this.calcRotatePOV(QQ, FQ, wQ)), this
          }
          calcRotatePOV(QQ, FQ, wQ) {
            const LQ = this.definedFacingForward ? 1 : -1;
            return new oQ.p(QQ * LQ, FQ, wQ * LQ)
          }
          _refreshBoundingInfo(QQ, FQ) {
            if (QQ) {
              const wQ = (0, MQ.e)(QQ, 0, this.getTotalVertices(), FQ);
              this._boundingInfo ? this._boundingInfo.reConstruct(wQ.minimum, wQ.maximum) : this._boundingInfo = new uQ.d(wQ.minimum, wQ.maximum)
            }
            if (this.lC)
              for (let wQ = 0; wQ < this.lC.length; wQ++) this.lC[wQ].refreshBoundingInfo(QQ);
            this._updateBoundingInfo()
          }
          _refreshBoundingInfoDirect(QQ) {
            if (this._boundingInfo ? this._boundingInfo.reConstruct(QQ.minimum, QQ.maximum) : this._boundingInfo = new uQ.d(QQ.minimum, QQ.maximum), this.lC)
              for (let FQ = 0; FQ < this.lC.length; FQ++) this.lC[FQ].refreshBoundingInfo(null);
            this._updateBoundingInfo()
          }
          static _ApplySkeleton(QQ, FQ, wQ, LQ, qQ, kQ, vQ) {
            ! function(QQ, FQ, wQ, LQ, qQ, kQ, vQ) {
              const mQ = oQ.k.Ox[0],
                uQ = oQ.k.Matrix[0],
                HQ = oQ.k.Matrix[1],
                bQ = FQ === DQ.h.NormalKind ? oQ.p.TransformNormalFromFloatsToRef : oQ.p.TransformCoordinatesFromFloatsToRef;
              for (let DQ = 0, YQ = 0; DQ < QQ.length; DQ += 3, YQ += 4) {
                let FQ, xQ;
                for (uQ.reset(), FQ = 0; FQ < 4; FQ++) xQ = qQ[YQ + FQ], xQ > 0 && (oQ.c.FromFloat32ArrayToRefScaled(wQ, Math.floor(16 * LQ[YQ + FQ]), xQ, HQ), uQ.addToSelf(HQ));
                if (kQ && vQ)
                  for (FQ = 0; FQ < 4; FQ++) xQ = vQ[YQ + FQ], xQ > 0 && (oQ.c.FromFloat32ArrayToRefScaled(wQ, Math.floor(16 * kQ[YQ + FQ]), xQ, HQ), uQ.addToSelf(HQ));
                bQ(QQ[DQ], QQ[DQ + 1], QQ[DQ + 2], uQ, mQ), mQ.toArray(QQ, DQ)
              }
            }(QQ, FQ, wQ, LQ, qQ, kQ, vQ)
          }
          _getData(FQ, wQ) {
            let LQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : DQ.h.PositionKind;
            const qQ = FQ.cache,
              kQ = QQ => {
                if (qQ) {
                  const FQ = qQ._vertexData || (qQ._vertexData = {});
                  return FQ[QQ] || this.copyVerticesData(QQ, FQ), FQ[QQ]
                }
                return this.getVerticesData(QQ)
              };
            if (wQ || (wQ = kQ(LQ)), !wQ) return null;
            qQ ? (qQ._outputData ? qQ._outputData.set(wQ) : qQ._outputData = new Float32Array(wQ), wQ = qQ._outputData) : (FQ.applyMorph && this.morphTargetManager || FQ.applySkeleton && this.skeleton || FQ.applyBakedVertexAnimation && this.bakedVertexAnimationManager?.isEnabled) && (wQ = wQ.slice()), FQ.applyMorph && this.morphTargetManager && function(QQ, FQ, wQ) {
              let LQ;
              switch (FQ) {
                case DQ.h.PositionKind:
                  LQ = QQ => QQ.getPositions();
                  break;
                case DQ.h.NormalKind:
                  LQ = QQ => QQ.getNormals();
                  break;
                case DQ.h.TangentKind:
                  LQ = QQ => QQ.getTangents();
                  break;
                case DQ.h.UVKind:
                  LQ = QQ => QQ.getUVs();
                  break;
                case DQ.h.UV2Kind:
                  LQ = QQ => QQ.getUV2s();
                  break;
                case DQ.h.ColorKind:
                  LQ = QQ => QQ.getColors();
                  break;
                default:
                  return
              }
              for (let qQ = 0; qQ < QQ.length; qQ++) {
                let FQ = QQ[qQ];
                for (let oQ = 0; oQ < wQ.numTargets; oQ++) {
                  const DQ = wQ.getTarget(oQ),
                    kQ = DQ.influence;
                  if (0 !== kQ) {
                    const wQ = LQ(DQ);
                    wQ && (FQ += (wQ[qQ] - QQ[qQ]) * kQ)
                  }
                }
                QQ[qQ] = FQ
              }
            }(wQ, LQ, this.morphTargetManager);
            const vQ = this.bakedVertexAnimationManager;
            let mQ = !1;
            if (FQ.applyBakedVertexAnimation && vQ?.isEnabled) {
              const QQ = kQ(DQ.h.MatricesIndicesKind),
                qQ = kQ(DQ.h.MatricesWeightsKind);
              if (qQ && QQ) {
                const oQ = this.numBoneInfluencers > 4,
                  uQ = oQ ? kQ(DQ.h.MatricesIndicesExtraKind) : null,
                  HQ = oQ ? kQ(DQ.h.MatricesWeightsExtraKind) : null;
                mQ = sQ(wQ, LQ, vQ, FQ.bakedVertexAnimationSettings ?? vQ.animationParameters, QQ, qQ, uQ, HQ, this.numBoneInfluencers)
              }
            }
            if (!mQ && FQ.applySkeleton && this.skeleton) {
              const FQ = kQ(DQ.h.MatricesIndicesKind),
                qQ = kQ(DQ.h.MatricesWeightsKind);
              if (qQ && FQ) {
                const oQ = this.numBoneInfluencers > 4,
                  vQ = oQ ? kQ(DQ.h.MatricesIndicesExtraKind) : null,
                  mQ = oQ ? kQ(DQ.h.MatricesWeightsExtraKind) : null,
                  uQ = this.skeleton.getTransformMatrices(this);
                QQ._ApplySkeleton(wQ, LQ, uQ, FQ, qQ, vQ, mQ)
              }
            }
            if (!1 !== FQ.updatePositionsArray && LQ === DQ.h.PositionKind) {
              const QQ = this._internalAbstractMeshDataInfo._positions || [],
                FQ = QQ.length;
              if (QQ.length = wQ.length / 3, FQ < QQ.length)
                for (let wQ = FQ; wQ < QQ.length; wQ++) QQ[wQ] = new oQ.p;
              for (let LQ = 0, qQ = 0; LQ < QQ.length; LQ++, qQ += 3) QQ[LQ].vQQ(wQ[qQ], wQ[qQ + 1], wQ[qQ + 2]);
              this._internalAbstractMeshDataInfo._positions = QQ
            }
            return wQ
          }
          getNormalsData() {
            let QQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              FQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return this._getData({
              applySkeleton: QQ,
              applyMorph: FQ,
              updatePositionsArray: !1
            }, null, DQ.h.NormalKind)
          }
          ZE() {
            let QQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              FQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            return this._getData({
              applySkeleton: QQ,
              applyMorph: FQ,
              updatePositionsArray: !1
            }, wQ, DQ.h.PositionKind)
          }
          _updateBoundingInfo() {
            return this._boundingInfo ? this._boundingInfo.update(this.worldMatrixFromCache) : this._boundingInfo = new uQ.d(oQ.p.Zero(), oQ.p.Zero(), this.worldMatrixFromCache), this._updateSubMeshesBoundingInfo(this.worldMatrixFromCache), this
          }
          _updateSubMeshesBoundingInfo(QQ) {
            if (!this.lC) return this;
            const FQ = this.lC.length;
            for (let wQ = 0; wQ < FQ; wQ++) {
              const LQ = this.lC[wQ];
              (FQ > 1 || !LQ.IsGlobal) && LQ.updateBoundingInfo(QQ)
            }
            return this
          }
          _afterComputeWorldMatrix() {
            this.Ix || (this._boundingInfoIsDirty = !0)
          }
          isInFrustum(QQ) {
            return this.sK().isInFrustum(QQ, this.cullingStrategy)
          }
          isCompletelyInFrustum(QQ) {
            return this.sK().isCompletelyInFrustum(QQ)
          }
          YqQ(QQ) {
            let FQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              wQ = arguments.length > 2 ? arguments[2] : void 0;
            const LQ = this.sK(),
              qQ = QQ.sK();
            if (LQ.intersects(qQ, FQ)) return !0;
            if (wQ)
              for (const oQ of this.getChildMeshes())
                if (oQ.YqQ(QQ, FQ, !0)) return !0;
            return !1
          }
          intersectsPoint(QQ) {
            return this.sK().intersectsPoint(QQ)
          }
          get checkCollisions() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._checkCollisions
          }
          set checkCollisions(QQ) {
            this._internalAbstractMeshDataInfo._meshCollisionData._checkCollisions = QQ
          }
          get collider() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._collider
          }
          moveWithCollisions(QQ) {
            let FQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            this.getAbsolutePosition().addToRef(this.ellipsoidOffset, this._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions);
            const wQ = this.iN().collisionCoordinator;
            return this._internalAbstractMeshDataInfo._meshCollisionData._collider || (this._internalAbstractMeshDataInfo._meshCollisionData._collider = wQ.createCollider()), this._internalAbstractMeshDataInfo._meshCollisionData._collider._radius = this.ellipsoid, wQ.getNewPosition(this._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions, QQ, this._internalAbstractMeshDataInfo._meshCollisionData._collider, this.collisionRetryCount, this, this._onCollisionPositionChange, this.uniqueId, FQ), this
          }
          _collideForSubMesh(QQ, FQ, wQ) {
            if (this._generatePointsArray(), !this._positions) return this;
            if (!QQ._lastColliderWorldVertices || !QQ._lastColliderTransformMatrix.equals(FQ)) {
              QQ._lastColliderTransformMatrix = FQ.clone(), QQ._lastColliderWorldVertices = [], QQ._trianglePlanes = [];
              const wQ = QQ.verticesStart,
                LQ = QQ.verticesStart + QQ.verticesCount;
              for (let qQ = wQ; qQ < LQ; qQ++) QQ._lastColliderWorldVertices.push(oQ.p.TransformCoordinates(this._positions[qQ], FQ))
            }
            return wQ._collide(QQ._trianglePlanes, QQ._lastColliderWorldVertices, this.OLQ(), QQ.indexStart, QQ.indexStart + QQ.indexCount, QQ.verticesStart, !!QQ.Ux(), this, this._shouldConvertRHS(), 7 === QQ.Ux()?.fillMode), this
          }
          _processCollisionsForSubMeshes(QQ, FQ) {
            const wQ = this._scene.getCollidingSubMeshCandidates(this, QQ),
              LQ = wQ.length;
            for (let qQ = 0; qQ < LQ; qQ++) {
              const oQ = wQ.data[qQ];
              LQ > 1 && !oQ._checkCollision(QQ) || this._collideForSubMesh(oQ, FQ, QQ)
            }
            return this
          }
          _shouldConvertRHS() {
            return !1
          }
          _checkCollision(QQ) {
            if (!this.sK()._checkCollision(QQ)) return this;
            const FQ = oQ.k.Matrix[0],
              wQ = oQ.k.Matrix[1];
            return oQ.c.ScalingToRef(1 / QQ._radius.x, 1 / QQ._radius.y, 1 / QQ._radius.z, FQ), this.worldMatrixFromCache.multiplyToRef(FQ, wQ), this._processCollisionsForSubMeshes(QQ, wQ), this
          }
          _generatePointsArray() {
            return !1
          }
          intersects(QQ, FQ, wQ) {
            let LQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              qQ = arguments.length > 4 ? arguments[4] : void 0,
              DQ = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
            const kQ = new mQ.d,
              vQ = this.getClassName(),
              uQ = "InstancedLinesMesh" === vQ || "LinesMesh" === vQ || "GreasedLineMesh" === vQ ? this.intersectionThreshold : 0,
              HQ = this.sK();
            if (!this.lC) return kQ;
            if (!DQ && (!QQ.intersectsSphere(HQ.BLQ, uQ) || !QQ.intersectsBox(HQ.boundingBox, uQ))) return kQ;
            if (LQ) return kQ.hit = !DQ, kQ.pickedMesh = DQ ? null : this, kQ.distance = DQ ? 0 : oQ.p.Distance(QQ.origin, HQ.BLQ.center), kQ.subMeshId = 0, kQ;
            if (!this._generatePointsArray()) return kQ;
            let bQ = null;
            const YQ = this._scene.getIntersectingSubMeshCandidates(this, QQ),
              xQ = YQ.length;
            let AQ = !1;
            for (let oQ = 0; oQ < xQ; oQ++) {
              const QQ = YQ.data[oQ].Ux();
              if (QQ && (7 == QQ.fillMode || 0 == QQ.fillMode || 1 == QQ.fillMode || 2 == QQ.fillMode || 4 == QQ.fillMode)) {
                AQ = !0;
                break
              }
            }
            if (!AQ) return kQ.hit = !0, kQ.pickedMesh = this, kQ.distance = oQ.p.Distance(QQ.origin, HQ.BLQ.center), kQ.subMeshId = -1, kQ;
            for (let oQ = 0; oQ < xQ; oQ++) {
              const LQ = YQ.data[oQ];
              if (xQ > 1 && !DQ && !LQ.canIntersects(QQ)) continue;
              const qQ = LQ.intersects(QQ, this._positions, this.OLQ(), FQ, wQ);
              if (qQ && (FQ || !bQ || qQ.distance < bQ.distance) && (bQ = qQ, bQ.subMeshId = LQ._id, bQ._internalSubMeshId = oQ, FQ)) break
            }
            if (bQ) {
              const FQ = qQ ?? this.getWorldMatrix(),
                wQ = oQ.k.Ox[0],
                LQ = oQ.k.Ox[1];
              oQ.p.TransformCoordinatesToRef(QQ.origin, FQ, wQ), QQ.direction.scaleToRef(bQ.distance, LQ);
              const DQ = oQ.p.TransformNormal(LQ, FQ).addInPlace(wQ);
              return kQ.hit = !0, kQ.distance = oQ.p.Distance(wQ, DQ), kQ.pickedPoint = DQ, kQ.pickedMesh = this, kQ.bu = bQ.bu || 0, kQ.bv = bQ.bv || 0, kQ.subMeshFaceId = bQ.faceId, kQ.faceId = bQ.faceId + YQ.data[bQ._internalSubMeshId].indexStart / (-1 !== this.getClassName().indexOf("LinesMesh") ? 2 : 3), kQ.subMeshId = bQ.subMeshId, kQ
            }
            return kQ
          }
          clone(QQ, FQ, wQ) {
            return null
          }
          releaseSubMeshes() {
            let QQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (this.lC)
              for (; this.lC.length;) this.lC[0].dispose(QQ);
            else this.lC = [];
            return this
          }
          dispose(QQ) {
            let FQ, wQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            const LQ = this.iN();
            for (this._scene.useMaterialMeshMap && this._internalAbstractMeshDataInfo._material && this._internalAbstractMeshDataInfo._material.meshMap && (this._internalAbstractMeshDataInfo._material.meshMap[this.uniqueId] = void 0), LQ.freeActiveMeshes(), LQ.freeRenderingGroups(), LQ.renderingManager.maintainStateBetweenFrames && LQ.renderingManager.restoreDispachedFlags(), void 0 !== this.actionManager && null !== this.actionManager && (this.actionManager.disposeWhenUnowned && !this._scene.meshes.some((QQ => QQ !== this && QQ.actionManager === this.actionManager)) && this.actionManager.dispose(), this.actionManager = null), this._internalAbstractMeshDataInfo._skeleton = null, this._transformMatrixTexture && (this._transformMatrixTexture.dispose(), this._transformMatrixTexture = null), FQ = 0; FQ < this._intersectionsInProgress.length; FQ++) {
              const QQ = this._intersectionsInProgress[FQ],
                wQ = QQ._intersectionsInProgress.indexOf(this);
              QQ._intersectionsInProgress.splice(wQ, 1)
            }
            this._intersectionsInProgress.length = 0;
            const qQ = LQ.lights;
            for (const DQ of qQ) {
              let QQ = DQ.includedOnlyMeshes.indexOf(this); - 1 !== QQ && DQ.includedOnlyMeshes.splice(QQ, 1), QQ = DQ.excludedMeshes.indexOf(this), -1 !== QQ && DQ.excludedMeshes.splice(QQ, 1);
              const FQ = DQ.getShadowGenerators();
              if (FQ) {
                const wQ = FQ.values();
                for (let FQ = wQ.next(); !0 !== FQ.done; FQ = wQ.next()) {
                  const wQ = FQ.value.getShadowMap();
                  wQ && wQ.renderList && (QQ = wQ.renderList.indexOf(this), -1 !== QQ && wQ.renderList.splice(QQ, 1))
                }
              }
            }
            this.releaseSubMeshes(LQ._isDisposing);
            const oQ = LQ.Wx();
            if (null !== this._occlusionQuery && (this.isOcclusionQueryInProgress = !1, oQ.deleteQuery(this._occlusionQuery), this._occlusionQuery = null), oQ.wipeCaches(), LQ.yN(this), this._parentContainer) {
              const QQ = this._parentContainer.meshes.indexOf(this);
              QQ > -1 && this._parentContainer.meshes.splice(QQ, 1), this._parentContainer = null
            }
            if (wQ && this.material && ("MultiMaterial" === this.material.getClassName() ? this.material.dispose(!1, !0, !0) : this.material.dispose(!1, !0)), !QQ)
              for (FQ = 0; FQ < LQ.fC.length; FQ++) LQ.fC[FQ].emitter === this && (LQ.fC[FQ].dispose(), FQ--);
            this._internalAbstractMeshDataInfo._facetData.facetDataEnabled && this.disableFacetData(), this._uniformBuffer.dispose(), this.onAfterWorldMatrixUpdateObservable.clear(), this.onCollideObservable.clear(), this.onCollisionPositionChangeObservable.clear(), this.onRebuildObservable.clear(), super.dispose(QQ, wQ)
          }
          _initFacetData() {
            const QQ = this._internalAbstractMeshDataInfo._facetData;
            QQ.facetNormals || (QQ.facetNormals = []), QQ.facetPositions || (QQ.facetPositions = []), QQ.facetPartitioning || (QQ.facetPartitioning = new Array), QQ.facetNb = this.OLQ().length / 3 | 0, QQ.partitioningSubdivisions = QQ.partitioningSubdivisions ? QQ.partitioningSubdivisions : 10, QQ.partitioningBBoxRatio = QQ.partitioningBBoxRatio ? QQ.partitioningBBoxRatio : 1.01;
            for (let FQ = 0; FQ < QQ.facetNb; FQ++) QQ.facetNormals[FQ] = oQ.p.Zero(), QQ.facetPositions[FQ] = oQ.p.Zero();
            return QQ.facetDataEnabled = !0, this
          }
          updateFacetData() {
            const QQ = this._internalAbstractMeshDataInfo._facetData;
            QQ.facetDataEnabled || this._initFacetData();
            const FQ = this.getVerticesData(DQ.h.PositionKind),
              wQ = this.OLQ(),
              LQ = this.getVerticesData(DQ.h.NormalKind)?.slice(),
              qQ = this.sK();
            if (QQ.facetDepthSort && !QQ.facetDepthSortEnabled) {
              if (QQ.facetDepthSortEnabled = !0, wQ instanceof Uint16Array) QQ.depthSortedIndices = new Uint16Array(wQ);
              else if (wQ instanceof Uint32Array) QQ.depthSortedIndices = new Uint32Array(wQ);
              else {
                let FQ = !1;
                for (let QQ = 0; QQ < wQ.length; QQ++)
                  if (wQ[QQ] > 65535) {
                    FQ = !0;
                    break
                  } QQ.depthSortedIndices = FQ ? new Uint32Array(wQ) : new Uint16Array(wQ)
              }
              if (QQ.facetDepthSortFunction = function(QQ, FQ) {
                  return FQ.sqDistance - QQ.sqDistance
                }, !QQ.facetDepthSortFrom) {
                const FQ = this.iN().activeCamera;
                QQ.facetDepthSortFrom = FQ ? FQ.position : oQ.p.Zero()
              }
              QQ.depthSortedFacets = [];
              for (let FQ = 0; FQ < QQ.facetNb; FQ++) {
                const wQ = {
                  ind: 3 * FQ,
                  sqDistance: 0
                };
                QQ.depthSortedFacets.push(wQ)
              }
              QQ.invertedMatrix = oQ.c.Identity(), QQ.facetDepthSortOrigin = oQ.p.Zero()
            }
            QQ.bbSize.x = qQ.maximum.x - qQ.minimum.x > pQ.b ? qQ.maximum.x - qQ.minimum.x : pQ.b, QQ.bbSize.y = qQ.maximum.y - qQ.minimum.y > pQ.b ? qQ.maximum.y - qQ.minimum.y : pQ.b, QQ.bbSize.z = qQ.maximum.z - qQ.minimum.z > pQ.b ? qQ.maximum.z - qQ.minimum.z : pQ.b;
            let vQ = QQ.bbSize.x > QQ.bbSize.y ? QQ.bbSize.x : QQ.bbSize.y;
            if (vQ = vQ > QQ.bbSize.z ? vQ : QQ.bbSize.z, QQ.subDiv.max = QQ.partitioningSubdivisions, QQ.subDiv.X = Math.floor(QQ.subDiv.max * QQ.bbSize.x / vQ), QQ.subDiv.Y = Math.floor(QQ.subDiv.max * QQ.bbSize.y / vQ), QQ.subDiv.Z = Math.floor(QQ.subDiv.max * QQ.bbSize.z / vQ), QQ.subDiv.X = QQ.subDiv.X < 1 ? 1 : QQ.subDiv.X, QQ.subDiv.Y = QQ.subDiv.Y < 1 ? 1 : QQ.subDiv.Y, QQ.subDiv.Z = QQ.subDiv.Z < 1 ? 1 : QQ.subDiv.Z, QQ.facetParameters.facetNormals = this.getFacetLocalNormals(), QQ.facetParameters.facetPositions = this.getFacetLocalPositions(), QQ.facetParameters.facetPartitioning = this.getFacetLocalPartitioning(), QQ.facetParameters.bInfo = qQ, QQ.facetParameters.bbSize = QQ.bbSize, QQ.facetParameters.subDiv = QQ.subDiv, QQ.facetParameters.ratio = this.partitioningBBoxRatio, QQ.facetParameters.depthSort = QQ.facetDepthSort, QQ.facetDepthSort && QQ.facetDepthSortEnabled && (this.computeWorldMatrix(!0), this._worldMatrix.invertToRef(QQ.invertedMatrix), oQ.p.TransformCoordinatesToRef(QQ.facetDepthSortFrom, QQ.invertedMatrix, QQ.facetDepthSortOrigin), QQ.facetParameters.distanceTo = QQ.facetDepthSortOrigin), QQ.facetParameters.depthSortedFacets = QQ.depthSortedFacets, LQ && kQ.c.ComputeNormals(FQ, wQ, LQ, QQ.facetParameters), QQ.facetDepthSort && QQ.facetDepthSortEnabled) {
              QQ.depthSortedFacets.sort(QQ.facetDepthSortFunction);
              const FQ = QQ.depthSortedIndices.length / 3 | 0;
              for (let LQ = 0; LQ < FQ; LQ++) {
                const FQ = QQ.depthSortedFacets[LQ].ind;
                QQ.depthSortedIndices[3 * LQ] = wQ[FQ], QQ.depthSortedIndices[3 * LQ + 1] = wQ[FQ + 1], QQ.depthSortedIndices[3 * LQ + 2] = wQ[FQ + 2]
              }
              this.updateIndices(QQ.depthSortedIndices, void 0, !0)
            }
            return this
          }
          getFacetLocalNormals() {
            const QQ = this._internalAbstractMeshDataInfo._facetData;
            return QQ.facetNormals || this.updateFacetData(), QQ.facetNormals
          }
          getFacetLocalPositions() {
            const QQ = this._internalAbstractMeshDataInfo._facetData;
            return QQ.facetPositions || this.updateFacetData(), QQ.facetPositions
          }
          getFacetLocalPartitioning() {
            const QQ = this._internalAbstractMeshDataInfo._facetData;
            return QQ.facetPartitioning || this.updateFacetData(), QQ.facetPartitioning
          }
          getFacetPosition(QQ) {
            const FQ = oQ.p.Zero();
            return this.getFacetPositionToRef(QQ, FQ), FQ
          }
          getFacetPositionToRef(QQ, FQ) {
            const wQ = this.getFacetLocalPositions()[QQ],
              LQ = this.getWorldMatrix();
            return oQ.p.TransformCoordinatesToRef(wQ, LQ, FQ), this
          }
          getFacetNormal(QQ) {
            const FQ = oQ.p.Zero();
            return this.getFacetNormalToRef(QQ, FQ), FQ
          }
          getFacetNormalToRef(QQ, FQ) {
            const wQ = this.getFacetLocalNormals()[QQ];
            return oQ.p.TransformNormalToRef(wQ, this.getWorldMatrix(), FQ), this
          }
          getFacetsAtLocalCoordinates(QQ, FQ, wQ) {
            const LQ = this.sK(),
              qQ = this._internalAbstractMeshDataInfo._facetData,
              oQ = Math.floor((QQ - LQ.minimum.x * qQ.partitioningBBoxRatio) * qQ.subDiv.X * qQ.partitioningBBoxRatio / qQ.bbSize.x),
              DQ = Math.floor((FQ - LQ.minimum.y * qQ.partitioningBBoxRatio) * qQ.subDiv.Y * qQ.partitioningBBoxRatio / qQ.bbSize.y),
              kQ = Math.floor((wQ - LQ.minimum.z * qQ.partitioningBBoxRatio) * qQ.subDiv.Z * qQ.partitioningBBoxRatio / qQ.bbSize.z);
            return oQ < 0 || oQ > qQ.subDiv.max || DQ < 0 || DQ > qQ.subDiv.max || kQ < 0 || kQ > qQ.subDiv.max ? null : qQ.facetPartitioning[oQ + qQ.subDiv.max * DQ + qQ.subDiv.max * qQ.subDiv.max * kQ]
          }
          getClosestFacetAtCoordinates(QQ, FQ, wQ, LQ) {
            let qQ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              DQ = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
            const kQ = this.getWorldMatrix(),
              vQ = oQ.k.Matrix[5];
            kQ.invertToRef(vQ);
            const mQ = oQ.k.Ox[8];
            oQ.p.TransformCoordinatesFromFloatsToRef(QQ, FQ, wQ, vQ, mQ);
            const uQ = this.getClosestFacetAtLocalCoordinates(mQ.x, mQ.y, mQ.z, LQ, qQ, DQ);
            return LQ && oQ.p.TransformCoordinatesFromFloatsToRef(LQ.x, LQ.y, LQ.z, kQ, LQ), uQ
          }
          getClosestFacetAtLocalCoordinates(QQ, FQ, wQ, LQ) {
            let qQ, oQ, DQ, kQ, vQ, mQ, uQ, HQ, bQ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              YQ = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
              xQ = null;
            const AQ = this.getFacetLocalPositions(),
              tQ = this.getFacetLocalNormals(),
              eQ = this.getFacetsAtLocalCoordinates(QQ, FQ, wQ);
            if (!eQ) return null;
            let MQ, GQ, pQ, cQ, CQ = Number.MAX_VALUE;
            for (let SQ = 0; SQ < eQ.length; SQ++) GQ = eQ[SQ], pQ = tQ[GQ], cQ = AQ[GQ], kQ = (QQ - cQ.x) * pQ.x + (FQ - cQ.y) * pQ.y + (wQ - cQ.z) * pQ.z, (!bQ || bQ && YQ && kQ >= 0 || bQ && !YQ && kQ <= 0) && (kQ = pQ.x * cQ.x + pQ.y * cQ.y + pQ.z * cQ.z, vQ = -(pQ.x * QQ + pQ.y * FQ + pQ.z * wQ - kQ) / (pQ.x * pQ.x + pQ.y * pQ.y + pQ.z * pQ.z), mQ = QQ + pQ.x * vQ, uQ = FQ + pQ.y * vQ, HQ = wQ + pQ.z * vQ, qQ = mQ - QQ, oQ = uQ - FQ, DQ = HQ - wQ, MQ = qQ * qQ + oQ * oQ + DQ * DQ, MQ < CQ && (CQ = MQ, xQ = GQ, LQ && (LQ.x = mQ, LQ.y = uQ, LQ.z = HQ)));
            return xQ
          }
          getFacetDataParameters() {
            return this._internalAbstractMeshDataInfo._facetData.facetParameters
          }
          disableFacetData() {
            const QQ = this._internalAbstractMeshDataInfo._facetData;
            return QQ.facetDataEnabled && (QQ.facetDataEnabled = !1, QQ.facetPositions = [], QQ.facetNormals = [], QQ.facetPartitioning = new Array, QQ.facetParameters = {}, QQ.depthSortedIndices = new Uint32Array(0)), this
          }
          updateIndices(QQ, FQ) {
            return this
          }
          createNormals(QQ) {
            const FQ = this.getVerticesData(DQ.h.PositionKind),
              wQ = this.OLQ();
            let LQ;
            return LQ = this.isVerticesDataPresent(DQ.h.NormalKind) ? this.getVerticesData(DQ.h.NormalKind) : [], kQ.c.ComputeNormals(FQ, wQ, LQ, {
              useRightHandedSystem: this.iN().useRightHandedSystem
            }), this.setVerticesData(DQ.h.NormalKind, LQ, QQ), this
          }
          async optimizeIndicesAsync() {
            const QQ = this.OLQ();
            if (!QQ) return this;
            const {
              OptimizeIndices: FQ
            } = await wQ.e(342).then((() => wQ(41925)));
            return FQ(QQ), this.setIndices(QQ, this.getTotalVertices()), this
          }
          alignWithNormal(QQ, FQ) {
            FQ || (FQ = cQ.b.Y);
            const wQ = oQ.k.Ox[0],
              LQ = oQ.k.Ox[1];
            return oQ.p.CrossToRef(FQ, QQ, LQ), oQ.p.CrossToRef(QQ, LQ, wQ), this.rotationQuaternion ? oQ.e.RotationQuaternionFromAxisToRef(wQ, QQ, LQ, this.rotationQuaternion) : oQ.p.RotationFromAxisToRef(wQ, QQ, LQ, this.rotation), this
          }
          _checkOcclusionQuery() {
            return !1
          }
          disableEdgesRendering() {
            throw (0, tQ.k)("EdgesRenderer")
          }
          enableEdgesRendering(QQ, FQ, wQ) {
            throw (0, tQ.k)("EdgesRenderer")
          }
          getConnectedParticleSystems() {
            return this._scene.fC.filter((QQ => QQ.emitter === this))
          }
        }, (() => {
          const wQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(bQ[Symbol.metadata] ?? null) : void 0;
          FQ = [SQ.i.filter((function() {
            return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0]) && !Array.isArray(arguments.length <= 3 ? void 0 : arguments[3]) && !Array.isArray(arguments.length <= 4 ? void 0 : arguments[4]) && !Array.isArray(arguments.length <= 5 ? void 0 : arguments[5]) && !Array.isArray(arguments.length <= 6 ? void 0 : arguments[6])
          }))], (0, LQ.i)(QQ, null, FQ, {
            kind: "method",
            name: "_ApplySkeleton",
            static: !0,
            private: !1,
            access: {
              has: QQ => "_ApplySkeleton" in QQ,
              get: QQ => QQ._ApplySkeleton
            },
            metadata: wQ
          }, null, YQ), wQ && Object.defineProperty(QQ, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: wQ
          })
        })(), QQ.OCCLUSION_TYPE_NONE = ((0, LQ.l)(QQ, YQ), 0), QQ.OCCLUSION_TYPE_OPTIMISTIC = 1, QQ.OCCLUSION_TYPE_STRICT = 2, QQ.OCCLUSION_ALGORITHM_TYPE_ACCURATE = 0, QQ.OCCLUSION_ALGORITHM_TYPE_CONSERVATIVE = 1, QQ.CULLINGSTRATEGY_STANDARD = 0, QQ.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY = 1, QQ.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION = 2, QQ.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION_THEN_BSPHERE_ONLY = 3, QQ.DefaultIsPickable = !0, QQ
      })(),
      NQ = !1;

    function TQ() {
      NQ || (NQ = !0, (0, WQ.e)("BABYLON.AbstractMesh", UQ))
    }(YQ = UQ.prototype).createOrUpdateSubmeshesOctree ?? (YQ.createOrUpdateSubmeshesOctree = (0, tQ.g)("AbstractMesh", "createOrUpdateSubmeshesOctree")), (xQ = UQ.prototype).getPhysicsImpostor ?? (xQ.getPhysicsImpostor = (0, tQ.g)("AbstractMesh", "getPhysicsImpostor")), (AQ = UQ.prototype).setPhysicsLinkWith ?? (AQ.setPhysicsLinkWith = (0, tQ.g)("AbstractMesh", "setPhysicsLinkWith")), Object.getOwnPropertyDescriptor(UQ.prototype, "occlusionRetryCount") || Object.defineProperty(UQ.prototype, "occlusionRetryCount", (0, tQ.e)("AbstractMesh", "occlusionRetryCount")), Object.getOwnPropertyDescriptor(UQ.prototype, "occlusionType") || Object.defineProperty(UQ.prototype, "occlusionType", (0, tQ.e)("AbstractMesh", "occlusionType")), Object.getOwnPropertyDescriptor(UQ.prototype, "occlusionQueryAlgorithmType") || Object.defineProperty(UQ.prototype, "occlusionQueryAlgorithmType", (0, tQ.e)("AbstractMesh", "occlusionQueryAlgorithmType")), Object.getOwnPropertyDescriptor(UQ.prototype, "isOccluded") || Object.defineProperty(UQ.prototype, "isOccluded", (0, tQ.e)("AbstractMesh", "isOccluded")), Object.getOwnPropertyDescriptor(UQ.prototype, "isOcclusionQueryInProgress") || Object.defineProperty(UQ.prototype, "isOcclusionQueryInProgress", (0, tQ.e)("AbstractMesh", "isOcclusionQueryInProgress")), Object.getOwnPropertyDescriptor(UQ.prototype, "forceRenderingWhenOccluded") || Object.defineProperty(UQ.prototype, "forceRenderingWhenOccluded", (0, tQ.e)("AbstractMesh", "forceRenderingWhenOccluded")), Object.getOwnPropertyDescriptor(UQ.prototype, "occlusionForRenderPassId") || Object.defineProperty(UQ.prototype, "occlusionForRenderPassId", (0, tQ.e)("AbstractMesh", "occlusionForRenderPassId")), Object.getOwnPropertyDescriptor(UQ.prototype, "decalMap") || Object.defineProperty(UQ.prototype, "decalMap", (0, tQ.e)("AbstractMesh", "decalMap")), Object.getOwnPropertyDescriptor(UQ.prototype, "bK") || Object.defineProperty(UQ.prototype, "bK", (0, tQ.e)("AbstractMesh", "bK")), Object.getOwnPropertyDescriptor(UQ.prototype, "physicsImpostor") || Object.defineProperty(UQ.prototype, "physicsImpostor", (0, tQ.e)("AbstractMesh", "physicsImpostor")), Object.getOwnPropertyDescriptor(UQ.prototype, "showBoundingBox") || Object.defineProperty(UQ.prototype, "showBoundingBox", (0, tQ.e)("AbstractMesh", "showBoundingBox")), Object.getOwnPropertyDescriptor(UQ.prototype, "edgesRenderer") || Object.defineProperty(UQ.prototype, "edgesRenderer", (0, tQ.e)("AbstractMesh", "edgesRenderer")), Object.getOwnPropertyDescriptor(UQ.prototype, "renderOutline") || Object.defineProperty(UQ.prototype, "renderOutline", (0, tQ.e)("AbstractMesh", "renderOutline")), Object.getOwnPropertyDescriptor(UQ.prototype, "renderOverlay") || Object.defineProperty(UQ.prototype, "renderOverlay", (0, tQ.e)("AbstractMesh", "renderOverlay"))
  },
  39840: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => eQ
    });
    var LQ = wQ(36696),
      qQ = wQ(36873),
      oQ = wQ(39835),
      DQ = wQ(39561),
      kQ = wQ(39725),
      vQ = wQ(39847),
      mQ = wQ(39731),
      uQ = wQ(39505),
      HQ = wQ(38203),
      bQ = wQ(39432),
      YQ = wQ(39741),
      xQ = wQ(36720),
      AQ = wQ(39852),
      tQ = wQ(39470);
    class eQ {
      get boundingBias() {
        return this._boundingBias
      }
      set boundingBias(QQ) {
        this._boundingBias ? this._boundingBias.Qs(QQ) : this._boundingBias = QQ.clone(), this._updateBoundingInfo(!0, null)
      }
      static CreateGeometryForMesh(QQ) {
        const FQ = new eQ(eQ.RandomId(), QQ.iN());
        return FQ.applyToMesh(QQ), FQ
      }
      get meshes() {
        return this._meshes
      }
      constructor(QQ, FQ, wQ) {
        let qQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          oQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          DQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        this.delayLoadState = 0, this._totalVertices = 0, this._isDisposed = !1, this._extend = {
          minimum: new LQ.p(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE),
          maximum: new LQ.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE)
        }, this._indexBufferIsUpdatable = !1, this._positionsCache = [], this._parentContainer = null, this.useBoundingInfoFromGeometry = !1, this._scene = FQ || xQ.d.LastCreatedScene, this._scene && (this.id = QQ, this.uniqueId = this._scene.getUniqueId(), this._engine = this._scene.Wx(), this._meshes = [], this._vertexBuffers = {}, this._indices = [], this._updatable = qQ, null !== DQ && (this._totalVertices = DQ), wQ ? this.setAllVerticesData(wQ, qQ) : null === DQ && (this._totalVertices = 0), this._engine.getCaps().vertexArrayObject && (this._vertexArrayObjects = {}), oQ && (this.applyToMesh(oQ), oQ.computeWorldMatrix(!0)))
      }
      get extend() {
        return this._extend
      }
      iN() {
        return this._scene
      }
      Wx() {
        return this._engine
      }
      isReady() {
        return 1 === this.delayLoadState || 0 === this.delayLoadState
      }
      get doNotSerialize() {
        for (let QQ = 0; QQ < this._meshes.length; QQ++)
          if (!this._meshes[QQ].doNotSerialize) return !1;
        return !0
      }
      _rebuild() {
        this._vertexArrayObjects && (this._vertexArrayObjects = {}), 0 !== this._meshes.length && this._indices && (this._indexBuffer = this._engine.createIndexBuffer(this._indices, this._updatable, "Geometry_" + this.id + "_IndexBuffer"));
        const QQ = new Set;
        for (const FQ in this._vertexBuffers) QQ.add(this._vertexBuffers[FQ].getWrapperBuffer());
        QQ.forEach((QQ => {
          QQ._rebuild()
        }))
      }
      setAllVerticesData(QQ, FQ) {
        QQ.applyToGeometry(this, FQ), this._notifyUpdate()
      }
      setVerticesData(QQ, FQ) {
        let wQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          LQ = arguments.length > 3 ? arguments[3] : void 0;
        wQ && Array.isArray(FQ) && (FQ = new Float32Array(FQ));
        const qQ = new DQ.h(this._engine, FQ, QQ, {
          updatable: wQ,
          postponeInternalCreation: 0 === this._meshes.length,
          stride: LQ,
          label: "Geometry_" + this.id + "_" + QQ
        });
        this.setVerticesBuffer(qQ)
      }
      removeVerticesData(QQ) {
        this._vertexBuffers[QQ] && (this._vertexBuffers[QQ].dispose(), delete this._vertexBuffers[QQ]), this._vertexArrayObjects && this._disposeVertexArrayObjects()
      }
      setVerticesBuffer(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          wQ = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        const qQ = QQ.getKind();
        this._vertexBuffers[qQ] && wQ && this._vertexBuffers[qQ].dispose(), QQ._buffer && QQ._ownsBuffer && QQ._buffer._increaseReferences(), this._vertexBuffers[qQ] = QQ;
        const oQ = this._meshes,
          kQ = oQ.length;
        if (qQ === DQ.h.PositionKind) {
          this._totalVertices = FQ ?? QQ._maxVerticesCount, this._updateExtend(this.useBoundingInfoFromGeometry && this._boundingInfo ? null : QQ.getFloatData(this._totalVertices)), this._resetPointsArrayCache();
          const wQ = this._extend && this._extend.minimum || new LQ.p(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE),
            qQ = this._extend && this._extend.maximum || new LQ.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
          for (let QQ = 0; QQ < kQ; QQ++) {
            const FQ = oQ[QQ];
            FQ.buildBoundingInfo(wQ, qQ), FQ._createGlobalSubMesh(FQ.isUnIndexed), FQ.computeWorldMatrix(!0), FQ.synchronizeInstances()
          }
        }
        this._notifyUpdate(qQ)
      }
      updateVerticesDataDirectly(QQ, FQ, wQ) {
        let LQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const qQ = this.getVertexBuffer(QQ);
        qQ && (qQ.updateDirectly(FQ, wQ, LQ), this._notifyUpdate(QQ))
      }
      updateVerticesData(QQ, FQ) {
        let wQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const LQ = this.getVertexBuffer(QQ);
        LQ && (LQ.update(FQ), QQ === DQ.h.PositionKind && this._updateBoundingInfo(wQ, FQ), this._notifyUpdate(QQ))
      }
      _updateBoundingInfo(QQ, FQ) {
        if (QQ && this._updateExtend(FQ), this._resetPointsArrayCache(), QQ) {
          const QQ = this._meshes;
          for (const FQ of QQ) {
            FQ.hasBoundingInfo ? FQ.sK().reConstruct(this._extend.minimum, this._extend.maximum) : FQ.buildBoundingInfo(this._extend.minimum, this._extend.maximum);
            const QQ = FQ.lC;
            for (const FQ of QQ) FQ.refreshBoundingInfo()
          }
        }
      }
      _bind(QQ, FQ, wQ, LQ) {
        if (!QQ) return;
        void 0 === FQ && (FQ = this._indexBuffer);
        const qQ = this.getVertexBuffers();
        if (!qQ) return;
        if (FQ != this._indexBuffer || !this._vertexArrayObjects && !LQ) return void this._engine.bindBuffers(qQ, FQ, QQ, wQ);
        const oQ = LQ || this._vertexArrayObjects,
          DQ = this._engine;
        oQ[QQ.key] || (oQ[QQ.key] = DQ.recordVertexArrayObject(qQ, FQ, QQ, wQ)), DQ.bindVertexArrayObject(oQ[QQ.key], FQ)
      }
      getTotalVertices() {
        return this.isReady() ? this._totalVertices : 0
      }
      getVerticesData(QQ, FQ, wQ) {
        const LQ = this.getVertexBuffer(QQ);
        return LQ ? LQ.getFloatData(this._totalVertices, wQ || FQ && 1 !== this._meshes.length) : null
      }
      copyVerticesData(QQ, FQ) {
        const wQ = this.getVertexBuffer(QQ);
        if (!wQ) return;
        FQ[QQ] || (FQ[QQ] = new Float32Array(this._totalVertices * wQ.getSize()));
        const LQ = wQ.getData();
        LQ && (0, tQ.f)(LQ, wQ.getSize(), wQ.type, wQ.byteOffset, wQ.byteStride, wQ.normalized, this._totalVertices, FQ[QQ])
      }
      isVertexBufferUpdatable(QQ) {
        const FQ = this._vertexBuffers[QQ];
        return !!FQ && FQ.isUpdatable()
      }
      getVertexBuffer(QQ) {
        return this.isReady() ? this._vertexBuffers[QQ] : null
      }
      getVertexBuffers() {
        return this.isReady() ? this._vertexBuffers : null
      }
      isVerticesDataPresent(QQ) {
        return this._vertexBuffers ? void 0 !== this._vertexBuffers[QQ] : !!this._delayInfo && -1 !== this._delayInfo.indexOf(QQ)
      }
      getVerticesDataKinds() {
        const QQ = [];
        let FQ;
        if (!this._vertexBuffers && this._delayInfo)
          for (FQ in this._delayInfo) QQ.push(FQ);
        else
          for (FQ in this._vertexBuffers) QQ.push(FQ);
        return QQ
      }
      updateIndices(QQ, FQ) {
        let wQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this._indexBuffer)
          if (this._indexBufferIsUpdatable) {
            const LQ = QQ.length !== this._indices.length;
            if (wQ || (this._indices = QQ.slice()), this._engine.updateDynamicIndexBuffer(this._indexBuffer, QQ, FQ), LQ)
              for (const QQ of this._meshes) QQ._createGlobalSubMesh(!0)
          } else this.setIndices(QQ, null, !0)
      }
      setIndexBuffer(QQ, FQ, wQ) {
        let LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._indices = [], this._indexBufferIsUpdatable = !1, this._indexBuffer = QQ, this._totalVertices = FQ, this._totalIndices = wQ, QQ.is32Bits = null === LQ ? FQ > 65535 : LQ;
        for (const qQ of this._meshes) qQ._createGlobalSubMesh(!0), qQ.synchronizeInstances();
        this._notifyUpdate()
      }
      setIndices(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          wQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          LQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this._indexBuffer && this._engine._releaseBuffer(this._indexBuffer), this._indices = QQ, this._indexBufferIsUpdatable = wQ, 0 !== this._meshes.length && this._indices && (this._indexBuffer = this._engine.createIndexBuffer(this._indices, wQ, "Geometry_" + this.id + "_IndexBuffer")), void 0 != FQ && (this._totalVertices = FQ);
        for (const qQ of this._meshes) qQ._createGlobalSubMesh(!LQ), qQ.synchronizeInstances();
        this._notifyUpdate()
      }
      getTotalIndices() {
        return this.isReady() ? void 0 !== this._totalIndices ? this._totalIndices : this._indices.length : 0
      }
      OLQ(QQ, FQ) {
        if (!this.isReady()) return null;
        const wQ = this._indices;
        return FQ || QQ && 1 !== this._meshes.length ? wQ.slice() : wQ
      }
      getIndexBuffer() {
        return this.isReady() ? this._indexBuffer : null
      }
      _releaseVertexArrayObject() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        QQ && this._vertexArrayObjects && this._vertexArrayObjects[QQ.key] && (this._engine.releaseVertexArrayObject(this._vertexArrayObjects[QQ.key]), delete this._vertexArrayObjects[QQ.key])
      }
      releaseForMesh(QQ, FQ) {
        const wQ = this._meshes,
          LQ = wQ.indexOf(QQ); - 1 !== LQ && (wQ.splice(LQ, 1), this._vertexArrayObjects && QQ._invalidateInstanceVertexArrayObject(), QQ._geometry = null, 0 === wQ.length && FQ && this.dispose())
      }
      applyToMesh(QQ) {
        if (QQ._geometry === this) return;
        const FQ = QQ._geometry;
        FQ && FQ.releaseForMesh(QQ), this._vertexArrayObjects && QQ._invalidateInstanceVertexArrayObject();
        const wQ = this._meshes;
        QQ._geometry = this, QQ._internalAbstractMeshDataInfo._positions = null, this._scene.pushGeometry(this), wQ.push(QQ), this.isReady() ? this._applyToMesh(QQ) : this._boundingInfo && QQ.setBoundingInfo(this._boundingInfo)
      }
      _updateExtend() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (this.useBoundingInfoFromGeometry && this._boundingInfo) this._extend = {
          minimum: this._boundingInfo.minimum.clone(),
          maximum: this._boundingInfo.maximum.clone()
        };
        else {
          if (!QQ && (QQ = this.getVerticesData(DQ.h.PositionKind), !QQ)) return;
          this._extend = (0, YQ.e)(QQ, 0, this._totalVertices, this.boundingBias, 3)
        }
      }
      _applyToMesh(QQ) {
        for (const FQ in this._vertexBuffers) {
          const wQ = this._vertexBuffers[FQ];
          wQ._buffer.getBuffer() || wQ.create(), FQ === DQ.h.PositionKind && (this._extend || this._updateExtend(), QQ.buildBoundingInfo(this._extend.minimum, this._extend.maximum), QQ._createGlobalSubMesh(QQ.isUnIndexed), QQ._updateBoundingInfo())
        }!this._indexBuffer && this._indices && this._indices.length > 0 && (this._indexBuffer = this._engine.createIndexBuffer(this._indices, this._updatable, "Geometry_" + this.id + "_IndexBuffer")), QQ._syncGeometryWithMorphTargetManager(), QQ.synchronizeInstances()
      }
      _notifyUpdate(QQ) {
        this.onGeometryUpdated && this.onGeometryUpdated(this, QQ), this._vertexArrayObjects && this._disposeVertexArrayObjects();
        for (const FQ of this._meshes) FQ._markSubMeshesAsAttributesDirty()
      }
      load(QQ, FQ) {
        2 !== this.delayLoadState && (this.isReady() ? FQ && FQ() : (this.delayLoadState = 2, this._queueLoad(QQ, FQ)))
      }
      _queueLoad(QQ, FQ) {
        this.delayLoadingFile && (QQ.addPendingData(this), (async () => {
          try {
            const wQ = await QQ._loadDelayedFileAsync(this.delayLoadingFile, !1, !0);
            if (!this._delayLoadingFunction) return void QQ.removePendingData(this);
            this._delayLoadingFunction(JSON.parse(wQ), this), this.delayLoadState = 1, this._delayInfo = [], QQ.removePendingData(this);
            const LQ = this._meshes,
              qQ = LQ.length;
            for (let QQ = 0; QQ < qQ; QQ++) this._applyToMesh(LQ[QQ]);
            FQ && FQ()
          } catch (wQ) {
            QQ.removePendingData(this), QQ.vW || HQ.c.Error(`Unable to delay load geometry "${this.id}" from "${this.delayLoadingFile}": ${wQ}`)
          }
        })())
      }
      toLeftHanded() {
        const QQ = this.OLQ(!1);
        if (null != QQ && QQ.length > 0) {
          for (let FQ = 0; FQ < QQ.length; FQ += 3) {
            const wQ = QQ[FQ + 0];
            QQ[FQ + 0] = QQ[FQ + 2], QQ[FQ + 2] = wQ
          }
          this.setIndices(QQ)
        }
        const FQ = this.getVerticesData(DQ.h.PositionKind, !1);
        if (null != FQ && FQ.length > 0) {
          for (let QQ = 0; QQ < FQ.length; QQ += 3) FQ[QQ + 2] = -FQ[QQ + 2];
          this.setVerticesData(DQ.h.PositionKind, FQ, !1)
        }
        const wQ = this.getVerticesData(DQ.h.NormalKind, !1);
        if (null != wQ && wQ.length > 0) {
          for (let QQ = 0; QQ < wQ.length; QQ += 3) wQ[QQ + 2] = -wQ[QQ + 2];
          this.setVerticesData(DQ.h.NormalKind, wQ, !1)
        }
      }
      _resetPointsArrayCache() {
        this._positions = null
      }
      _generatePointsArray() {
        if (this._positions) return !0;
        const QQ = this.getVerticesData(DQ.h.PositionKind);
        if (!QQ || 0 === QQ.length) return !1;
        for (let FQ = 3 * this._positionsCache.length, wQ = this._positionsCache.length; FQ < QQ.length; FQ += 3, ++wQ) this._positionsCache[wQ] = LQ.p.FromArray(QQ, FQ);
        for (let FQ = 0, wQ = 0; FQ < QQ.length; FQ += 3, ++wQ) this._positionsCache[wQ].set(QQ[0 + FQ], QQ[1 + FQ], QQ[2 + FQ]);
        return this._positionsCache.length = QQ.length / 3, this._positions = this._positionsCache, !0
      }
      vW() {
        return this._isDisposed
      }
      _disposeVertexArrayObjects() {
        if (this._vertexArrayObjects) {
          for (const wQ in this._vertexArrayObjects) this._engine.releaseVertexArrayObject(this._vertexArrayObjects[wQ]);
          this._vertexArrayObjects = {};
          const QQ = this._meshes,
            FQ = QQ.length;
          for (let wQ = 0; wQ < FQ; wQ++) QQ[wQ]._invalidateInstanceVertexArrayObject()
        }
      }
      dispose() {
        const QQ = this._meshes,
          FQ = QQ.length;
        let wQ;
        for (wQ = 0; wQ < FQ; wQ++) this.releaseForMesh(QQ[wQ]);
        this._meshes.length = 0, this._disposeVertexArrayObjects();
        for (const LQ in this._vertexBuffers) this._vertexBuffers[LQ].dispose();
        if (this._vertexBuffers = {}, this._totalVertices = 0, this._indexBuffer && this._engine._releaseBuffer(this._indexBuffer), this._indexBuffer = null, this._indices = [], this.delayLoadState = 0, this.delayLoadingFile = null, this._delayLoadingFunction = null, this._delayInfo = [], this._boundingInfo = null, this._scene.removeGeometry(this), this._parentContainer) {
          const QQ = this._parentContainer.geometries.indexOf(this);
          QQ > -1 && this._parentContainer.geometries.splice(QQ, 1), this._parentContainer = null
        }
        this._isDisposed = !0
      }
      copy(QQ) {
        const FQ = new eQ(QQ, this._scene),
          wQ = this.OLQ(void 0, !0);
        wQ && FQ.setIndices(wQ);
        let LQ, qQ = !1;
        for (LQ in this._vertexBuffers) {
          const QQ = this.getVertexBuffer(LQ),
            wQ = QQ.getData();
          if (!wQ) continue;
          const oQ = QQ.isUpdatable(),
            kQ = QQ.getSize(),
            {
              type: vQ,
              byteOffset: mQ,
              byteStride: uQ,
              normalized: HQ
            } = QQ;
          qQ = qQ || oQ;
          let bQ = this._totalVertices;
          if (QQ.getIsInstanced()) {
            let QQ;
            QQ = wQ instanceof Array ? 4 * wQ.length : wQ.byteLength, bQ = QQ / uQ
          }
          const YQ = (0, tQ.u)(wQ, kQ, vQ, mQ, uQ, bQ, !0),
            xQ = new DQ.h(this._engine, YQ, LQ, {
              updatable: oQ,
              useBytes: !1,
              stride: kQ,
              size: kQ,
              offset: 0,
              type: vQ,
              normalized: HQ,
              takeBufferOwnership: !0,
              instanced: QQ.getIsInstanced()
            });
          FQ.setVerticesBuffer(xQ, bQ)
        }
        for (LQ in FQ._updatable = qQ, FQ.delayLoadState = this.delayLoadState, FQ.delayLoadingFile = this.delayLoadingFile, FQ._delayLoadingFunction = this._delayLoadingFunction, this._delayInfo) FQ._delayInfo = FQ._delayInfo || [], FQ._delayInfo.push(LQ);
        return FQ._boundingInfo = new mQ.d(this._extend.minimum, this._extend.maximum), FQ
      }
      serialize() {
        const QQ = {};
        return QQ.id = this.id, QQ.uniqueId = this.uniqueId, QQ.updatable = this._updatable, bQ.c && bQ.c.HasTags(this) && (QQ.tags = bQ.c.GetTags(this)), QQ
      }
      _toNumberArray(QQ) {
        return Array.isArray(QQ) ? QQ : Array.prototype.slice.call(QQ)
      }
      clearCachedData() {
        this._totalIndices = this._indices.length, this._indices = [], this._resetPointsArrayCache();
        for (const QQ in this._vertexBuffers) Object.prototype.hasOwnProperty.call(this._vertexBuffers, QQ) && (this._vertexBuffers[QQ]._buffer._data = null)
      }
      serializeVerticeData() {
        const QQ = this.serialize();
        return this.isVerticesDataPresent(DQ.h.PositionKind) && (QQ.positions = this._toNumberArray(this.getVerticesData(DQ.h.PositionKind)), this.isVertexBufferUpdatable(DQ.h.PositionKind) && (QQ.positionsUpdatable = !0)), this.isVerticesDataPresent(DQ.h.NormalKind) && (QQ.normals = this._toNumberArray(this.getVerticesData(DQ.h.NormalKind)), this.isVertexBufferUpdatable(DQ.h.NormalKind) && (QQ.normalsUpdatable = !0)), this.isVerticesDataPresent(DQ.h.TangentKind) && (QQ.tangents = this._toNumberArray(this.getVerticesData(DQ.h.TangentKind)), this.isVertexBufferUpdatable(DQ.h.TangentKind) && (QQ.tangentsUpdatable = !0)), this.isVerticesDataPresent(DQ.h.UVKind) && (QQ.uvs = this._toNumberArray(this.getVerticesData(DQ.h.UVKind)), this.isVertexBufferUpdatable(DQ.h.UVKind) && (QQ.uvsUpdatable = !0)), this.isVerticesDataPresent(DQ.h.UV2Kind) && (QQ.uvs2 = this._toNumberArray(this.getVerticesData(DQ.h.UV2Kind)), this.isVertexBufferUpdatable(DQ.h.UV2Kind) && (QQ.uvs2Updatable = !0)), this.isVerticesDataPresent(DQ.h.UV3Kind) && (QQ.uvs3 = this._toNumberArray(this.getVerticesData(DQ.h.UV3Kind)), this.isVertexBufferUpdatable(DQ.h.UV3Kind) && (QQ.uvs3Updatable = !0)), this.isVerticesDataPresent(DQ.h.UV4Kind) && (QQ.uvs4 = this._toNumberArray(this.getVerticesData(DQ.h.UV4Kind)), this.isVertexBufferUpdatable(DQ.h.UV4Kind) && (QQ.uvs4Updatable = !0)), this.isVerticesDataPresent(DQ.h.UV5Kind) && (QQ.uvs5 = this._toNumberArray(this.getVerticesData(DQ.h.UV5Kind)), this.isVertexBufferUpdatable(DQ.h.UV5Kind) && (QQ.uvs5Updatable = !0)), this.isVerticesDataPresent(DQ.h.UV6Kind) && (QQ.uvs6 = this._toNumberArray(this.getVerticesData(DQ.h.UV6Kind)), this.isVertexBufferUpdatable(DQ.h.UV6Kind) && (QQ.uvs6Updatable = !0)), this.isVerticesDataPresent(DQ.h.ColorKind) && (QQ.colors = this._toNumberArray(this.getVerticesData(DQ.h.ColorKind)), this.isVertexBufferUpdatable(DQ.h.ColorKind) && (QQ.colorsUpdatable = !0)), this.isVerticesDataPresent(DQ.h.MatricesIndicesKind) && (QQ.matricesIndices = this._toNumberArray(this.getVerticesData(DQ.h.MatricesIndicesKind)), QQ.matricesIndicesExpanded = !0, this.isVertexBufferUpdatable(DQ.h.MatricesIndicesKind) && (QQ.matricesIndicesUpdatable = !0)), this.isVerticesDataPresent(DQ.h.MatricesWeightsKind) && (QQ.matricesWeights = this._toNumberArray(this.getVerticesData(DQ.h.MatricesWeightsKind)), this.isVertexBufferUpdatable(DQ.h.MatricesWeightsKind) && (QQ.matricesWeightsUpdatable = !0)), QQ.indices = this._toNumberArray(this.OLQ()), QQ
      }
      static ExtractFromMesh(QQ, FQ) {
        const wQ = QQ._geometry;
        return wQ ? wQ.copy(FQ) : null
      }
      static RandomId() {
        return uQ.g.RandomId()
      }
      static _GetGeometryByLoadedUniqueId(QQ, FQ) {
        for (let wQ = 0; wQ < FQ.geometries.length; wQ++)
          if (FQ.geometries[wQ]._loadedUniqueId === QQ) return FQ.geometries[wQ];
        return null
      }
      static _ImportGeometry(QQ, FQ) {
        const wQ = FQ.iN(),
          LQ = QQ.geometryUniqueId,
          oQ = QQ.geometryId;
        if (LQ || oQ) {
          const QQ = LQ ? this._GetGeometryByLoadedUniqueId(LQ, wQ) : wQ.getGeometryById(oQ);
          QQ && QQ.applyToMesh(FQ)
        } else if (QQ instanceof ArrayBuffer) {
          const wQ = FQ._binaryInfo;
          if (wQ.positionsAttrDesc && wQ.positionsAttrDesc.count > 0) {
            const LQ = new Float32Array(QQ, wQ.positionsAttrDesc.offset, wQ.positionsAttrDesc.count);
            FQ.setVerticesData(DQ.h.PositionKind, LQ, !1)
          }
          if (wQ.normalsAttrDesc && wQ.normalsAttrDesc.count > 0) {
            const LQ = new Float32Array(QQ, wQ.normalsAttrDesc.offset, wQ.normalsAttrDesc.count);
            FQ.setVerticesData(DQ.h.NormalKind, LQ, !1)
          }
          if (wQ.tangetsAttrDesc && wQ.tangetsAttrDesc.count > 0) {
            const LQ = new Float32Array(QQ, wQ.tangetsAttrDesc.offset, wQ.tangetsAttrDesc.count);
            FQ.setVerticesData(DQ.h.TangentKind, LQ, !1)
          }
          if (wQ.uvsAttrDesc && wQ.uvsAttrDesc.count > 0) {
            const LQ = new Float32Array(QQ, wQ.uvsAttrDesc.offset, wQ.uvsAttrDesc.count);
            if (AQ.d)
              for (let QQ = 1; QQ < LQ.length; QQ += 2) LQ[QQ] = 1 - LQ[QQ];
            FQ.setVerticesData(DQ.h.UVKind, LQ, !1)
          }
          if (wQ.uvs2AttrDesc && wQ.uvs2AttrDesc.count > 0) {
            const LQ = new Float32Array(QQ, wQ.uvs2AttrDesc.offset, wQ.uvs2AttrDesc.count);
            if (AQ.d)
              for (let QQ = 1; QQ < LQ.length; QQ += 2) LQ[QQ] = 1 - LQ[QQ];
            FQ.setVerticesData(DQ.h.UV2Kind, LQ, !1)
          }
          if (wQ.uvs3AttrDesc && wQ.uvs3AttrDesc.count > 0) {
            const LQ = new Float32Array(QQ, wQ.uvs3AttrDesc.offset, wQ.uvs3AttrDesc.count);
            if (AQ.d)
              for (let QQ = 1; QQ < LQ.length; QQ += 2) LQ[QQ] = 1 - LQ[QQ];
            FQ.setVerticesData(DQ.h.UV3Kind, LQ, !1)
          }
          if (wQ.uvs4AttrDesc && wQ.uvs4AttrDesc.count > 0) {
            const LQ = new Float32Array(QQ, wQ.uvs4AttrDesc.offset, wQ.uvs4AttrDesc.count);
            if (AQ.d)
              for (let QQ = 1; QQ < LQ.length; QQ += 2) LQ[QQ] = 1 - LQ[QQ];
            FQ.setVerticesData(DQ.h.UV4Kind, LQ, !1)
          }
          if (wQ.uvs5AttrDesc && wQ.uvs5AttrDesc.count > 0) {
            const LQ = new Float32Array(QQ, wQ.uvs5AttrDesc.offset, wQ.uvs5AttrDesc.count);
            if (AQ.d)
              for (let QQ = 1; QQ < LQ.length; QQ += 2) LQ[QQ] = 1 - LQ[QQ];
            FQ.setVerticesData(DQ.h.UV5Kind, LQ, !1)
          }
          if (wQ.uvs6AttrDesc && wQ.uvs6AttrDesc.count > 0) {
            const LQ = new Float32Array(QQ, wQ.uvs6AttrDesc.offset, wQ.uvs6AttrDesc.count);
            if (AQ.d)
              for (let QQ = 1; QQ < LQ.length; QQ += 2) LQ[QQ] = 1 - LQ[QQ];
            FQ.setVerticesData(DQ.h.UV6Kind, LQ, !1)
          }
          if (wQ.colorsAttrDesc && wQ.colorsAttrDesc.count > 0) {
            const LQ = new Float32Array(QQ, wQ.colorsAttrDesc.offset, wQ.colorsAttrDesc.count);
            FQ.setVerticesData(DQ.h.ColorKind, LQ, !1, wQ.colorsAttrDesc.stride)
          }
          if (wQ.matricesIndicesAttrDesc && wQ.matricesIndicesAttrDesc.count > 0) {
            const LQ = new Int32Array(QQ, wQ.matricesIndicesAttrDesc.offset, wQ.matricesIndicesAttrDesc.count),
              qQ = [];
            for (let QQ = 0; QQ < LQ.length; QQ++) {
              const FQ = LQ[QQ];
              qQ.push(255 & FQ), qQ.push((65280 & FQ) >> 8), qQ.push((16711680 & FQ) >> 16), qQ.push(FQ >> 24 & 255)
            }
            FQ.setVerticesData(DQ.h.MatricesIndicesKind, qQ, !1)
          }
          if (wQ.matricesIndicesExtraAttrDesc && wQ.matricesIndicesExtraAttrDesc.count > 0) {
            const LQ = new Int32Array(QQ, wQ.matricesIndicesExtraAttrDesc.offset, wQ.matricesIndicesExtraAttrDesc.count),
              qQ = [];
            for (let QQ = 0; QQ < LQ.length; QQ++) {
              const FQ = LQ[QQ];
              qQ.push(255 & FQ), qQ.push((65280 & FQ) >> 8), qQ.push((16711680 & FQ) >> 16), qQ.push(FQ >> 24 & 255)
            }
            FQ.setVerticesData(DQ.h.MatricesIndicesExtraKind, qQ, !1)
          }
          if (wQ.matricesWeightsAttrDesc && wQ.matricesWeightsAttrDesc.count > 0) {
            const LQ = new Float32Array(QQ, wQ.matricesWeightsAttrDesc.offset, wQ.matricesWeightsAttrDesc.count);
            FQ.setVerticesData(DQ.h.MatricesWeightsKind, LQ, !1)
          }
          if (wQ.indicesAttrDesc && wQ.indicesAttrDesc.count > 0) {
            const LQ = new Int32Array(QQ, wQ.indicesAttrDesc.offset, wQ.indicesAttrDesc.count);
            FQ.setIndices(LQ, null)
          }
          if (wQ.subMeshesAttrDesc && wQ.subMeshesAttrDesc.count > 0) {
            const LQ = new Int32Array(QQ, wQ.subMeshesAttrDesc.offset, 5 * wQ.subMeshesAttrDesc.count);
            FQ.lC = [];
            for (let QQ = 0; QQ < wQ.subMeshesAttrDesc.count; QQ++) {
              const wQ = LQ[5 * QQ + 0],
                qQ = LQ[5 * QQ + 1],
                oQ = LQ[5 * QQ + 2],
                DQ = LQ[5 * QQ + 3],
                vQ = LQ[5 * QQ + 4];
              kQ.c.AddToMesh(wQ, qQ, oQ, DQ, vQ, FQ)
            }
          }
        } else if (QQ.positions && QQ.normals && QQ.indices) {
          if (FQ.setVerticesData(DQ.h.PositionKind, QQ.positions, QQ.positions._updatable || QQ.positionsUpdatable), FQ.setVerticesData(DQ.h.NormalKind, QQ.normals, QQ.normals._updatable || QQ.normalsUpdatable), QQ.tangents && FQ.setVerticesData(DQ.h.TangentKind, QQ.tangents, QQ.tangents._updatable || QQ.tangentsUpdatable), QQ.uvs && FQ.setVerticesData(DQ.h.UVKind, QQ.uvs, QQ.uvs._updatable || QQ.uvsUpdatable), QQ.uvs2 && FQ.setVerticesData(DQ.h.UV2Kind, QQ.uvs2, QQ.uvs2._updatable || QQ.uvs2Updatable), QQ.uvs3 && FQ.setVerticesData(DQ.h.UV3Kind, QQ.uvs3, QQ.uvs3._updatable || QQ.uvs3Updatable), QQ.uvs4 && FQ.setVerticesData(DQ.h.UV4Kind, QQ.uvs4, QQ.uvs4._updatable || QQ.uvs4Updatable), QQ.uvs5 && FQ.setVerticesData(DQ.h.UV5Kind, QQ.uvs5, QQ.uvs5._updatable || QQ.uvs5Updatable), QQ.uvs6 && FQ.setVerticesData(DQ.h.UV6Kind, QQ.uvs6, QQ.uvs6._updatable || QQ.uvs6Updatable), QQ.colors && FQ.setVerticesData(DQ.h.ColorKind, qQ.e.CheckColors4(QQ.colors, QQ.positions.length / 3), QQ.colors._updatable), QQ.matricesIndices)
            if (QQ.matricesIndices._isExpanded || QQ.matricesIndicesExpanded) delete QQ.matricesIndices._isExpanded, delete QQ.matricesIndicesExpanded, FQ.setVerticesData(DQ.h.MatricesIndicesKind, QQ.matricesIndices, QQ.matricesIndices._updatable || QQ.matricesIndicesUpdatable);
            else {
              const wQ = [];
              for (let FQ = 0; FQ < QQ.matricesIndices.length; FQ++) {
                const LQ = QQ.matricesIndices[FQ];
                wQ.push(255 & LQ), wQ.push((65280 & LQ) >> 8), wQ.push((16711680 & LQ) >> 16), wQ.push(LQ >> 24 & 255)
              }
              FQ.setVerticesData(DQ.h.MatricesIndicesKind, wQ, QQ.matricesIndices._updatable || QQ.matricesIndicesUpdatable)
            } if (QQ.matricesIndicesExtra)
            if (QQ.matricesIndicesExtraExpanded || QQ.matricesIndicesExtra._isExpanded) delete QQ.matricesIndices._isExpanded, delete QQ.matricesIndicesExtraExpanded, FQ.setVerticesData(DQ.h.MatricesIndicesExtraKind, QQ.matricesIndicesExtra, QQ.matricesIndicesExtra._updatable || QQ.matricesIndicesExtraUpdatable);
            else {
              const wQ = [];
              for (let FQ = 0; FQ < QQ.matricesIndicesExtra.length; FQ++) {
                const LQ = QQ.matricesIndicesExtra[FQ];
                wQ.push(255 & LQ), wQ.push((65280 & LQ) >> 8), wQ.push((16711680 & LQ) >> 16), wQ.push(LQ >> 24 & 255)
              }
              FQ.setVerticesData(DQ.h.MatricesIndicesExtraKind, wQ, QQ.matricesIndicesExtra._updatable || QQ.matricesIndicesExtraUpdatable)
            } QQ.matricesWeights && (eQ._CleanMatricesWeights(QQ, FQ), FQ.setVerticesData(DQ.h.MatricesWeightsKind, QQ.matricesWeights, QQ.matricesWeights._updatable)), QQ.matricesWeightsExtra && FQ.setVerticesData(DQ.h.MatricesWeightsExtraKind, QQ.matricesWeightsExtra, QQ.matricesWeights._updatable), FQ.setIndices(QQ.indices, null)
        }
        if (QQ.lC) {
          FQ.lC = [];
          for (let wQ = 0; wQ < QQ.lC.length; wQ++) {
            const LQ = QQ.lC[wQ];
            kQ.c.AddToMesh(LQ.materialIndex, LQ.verticesStart, LQ.verticesCount, LQ.indexStart, LQ.indexCount, FQ)
          }
        }
        FQ._shouldGenerateFlatShading && (FQ.convertToFlatShadedMesh(), FQ._shouldGenerateFlatShading = !1), FQ.computeWorldMatrix(!0), wQ.onMeshImportedObservable.notifyObservers(FQ)
      }
      static _CleanMatricesWeights(QQ, FQ) {
        const wQ = .001;
        if (!vQ.d.CleanBoneMatrixWeights) return;
        let LQ;
        if (!(QQ.skeletonId > -1)) return;
        {
          const wQ = FQ.iN().getLastSkeletonById(QQ.skeletonId);
          if (!wQ) return;
          LQ = wQ.bones.length
        }
        const qQ = FQ.getVerticesData(DQ.h.MatricesIndicesKind),
          oQ = FQ.getVerticesData(DQ.h.MatricesIndicesExtraKind),
          kQ = QQ.matricesWeights,
          mQ = QQ.matricesWeightsExtra,
          uQ = QQ.numBoneInfluencer,
          HQ = kQ.length;
        for (let DQ = 0; DQ < HQ; DQ += 4) {
          let QQ = 0,
            FQ = -1;
          for (let LQ = 0; LQ < 4; LQ++) {
            const qQ = kQ[DQ + LQ];
            QQ += qQ, qQ < wQ && FQ < 0 && (FQ = LQ)
          }
          if (mQ)
            for (let LQ = 0; LQ < 4; LQ++) {
              const qQ = mQ[DQ + LQ];
              QQ += qQ, qQ < wQ && FQ < 0 && (FQ = LQ + 4)
            }
          if ((FQ < 0 || FQ > uQ - 1) && (FQ = uQ - 1), QQ > wQ) {
            const FQ = 1 / QQ;
            for (let QQ = 0; QQ < 4; QQ++) kQ[DQ + QQ] *= FQ;
            if (mQ)
              for (let QQ = 0; QQ < 4; QQ++) mQ[DQ + QQ] *= FQ
          } else FQ >= 4 ? (mQ[DQ + FQ - 4] = 1 - QQ, oQ[DQ + FQ - 4] = LQ) : (kQ[DQ + FQ] = 1 - QQ, qQ[DQ + FQ] = LQ)
        }
        FQ.setVerticesData(DQ.h.MatricesIndicesKind, qQ), QQ.matricesWeightsExtra && FQ.setVerticesData(DQ.h.MatricesIndicesExtraKind, oQ)
      }
      static Parse(QQ, FQ, wQ) {
        const qQ = new eQ(QQ.id, FQ, void 0, QQ.updatable);
        return qQ._loadedUniqueId = QQ.uniqueId, bQ.c && bQ.c.AddTagsTo(qQ, QQ.tags), QQ.delayLoadingFile ? (qQ.delayLoadState = 4, qQ.delayLoadingFile = wQ + QQ.delayLoadingFile, qQ._boundingInfo = new mQ.d(LQ.p.FromArray(QQ.boundingBoxMinimum), LQ.p.FromArray(QQ.boundingBoxMaximum)), qQ._delayInfo = [], QQ.hasUVs && qQ._delayInfo.push(DQ.h.UVKind), QQ.hasUVs2 && qQ._delayInfo.push(DQ.h.UV2Kind), QQ.hasUVs3 && qQ._delayInfo.push(DQ.h.UV3Kind), QQ.hasUVs4 && qQ._delayInfo.push(DQ.h.UV4Kind), QQ.hasUVs5 && qQ._delayInfo.push(DQ.h.UV5Kind), QQ.hasUVs6 && qQ._delayInfo.push(DQ.h.UV6Kind), QQ.hasColors && qQ._delayInfo.push(DQ.h.ColorKind), QQ.hasMatricesIndices && qQ._delayInfo.push(DQ.h.MatricesIndicesKind), QQ.hasMatricesWeights && qQ._delayInfo.push(DQ.h.MatricesWeightsKind), qQ._delayLoadingFunction = oQ.c.ImportVertexData) : oQ.c.ImportVertexData(QQ, qQ), FQ.pushGeometry(qQ, !0), qQ
      }
    }
  },
  39886: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => HQ,
      e: () => xQ
    });
    var LQ = wQ(36696),
      qQ = wQ(38203),
      oQ = wQ(39855),
      DQ = wQ(39829),
      kQ = wQ(38200),
      vQ = wQ(39862),
      mQ = wQ(39561),
      uQ = wQ(36741);
    class HQ extends oQ.c {
      constructor(QQ, FQ) {
        super(QQ, FQ.iN()), this._indexInSourceMeshInstanceArray = -1, this._distanceToCamera = 0, FQ.K4(this), this._sourceMesh = FQ, this._unIndexed = FQ._unIndexed, this.position.Qs(FQ.position), this.rotation.Qs(FQ.rotation), this.ck.Qs(FQ.ck), FQ.rotationQuaternion && (this.rotationQuaternion = FQ.rotationQuaternion.clone()), this.animations = FQ.animations.slice();
        for (const wQ of FQ.getAnimationRanges()) null != wQ && this.createAnimationRange(wQ.name, wQ.from, wQ.to);
        if (this.infiniteDistance = FQ.infiniteDistance, this.setPivotMatrix(FQ.getPivotMatrix()), FQ.skeleton || FQ.morphTargetManager || !FQ.hasBoundingInfo) this.refreshBoundingInfo(!0, !0);
        else {
          const QQ = FQ.sK();
          this.buildBoundingInfo(QQ.minimum, QQ.maximum)
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
      set receiveShadows(QQ) {
        this._sourceMesh?.receiveShadows !== QQ && qQ.c.Warn("Setting receiveShadows on an instanced mesh has no effect")
      }
      get material() {
        return this._sourceMesh.material
      }
      set material(QQ) {
        this._sourceMesh?.material !== QQ && qQ.c.Warn("Setting material on an instanced mesh has no effect")
      }
      get visibility() {
        return this._sourceMesh.visibility
      }
      set visibility(QQ) {
        this._sourceMesh?.visibility !== QQ && qQ.c.Warn("Setting visibility on an instanced mesh has no effect")
      }
      get skeleton() {
        return this._sourceMesh.skeleton
      }
      set skeleton(QQ) {
        this._sourceMesh?.skeleton !== QQ && qQ.c.Warn("Setting skeleton on an instanced mesh has no effect")
      }
      get renderingGroupId() {
        return this._sourceMesh.renderingGroupId
      }
      set renderingGroupId(QQ) {
        this._sourceMesh && QQ !== this._sourceMesh.renderingGroupId && qQ.c.Warn("Note - setting renderingGroupId of an instanced mesh has no effect on the scene")
      }
      get meshBlendingTag() {
        return this._sourceMesh.meshBlendingTag
      }
      set meshBlendingTag(QQ) {
        this._sourceMesh && QQ !== this._sourceMesh.meshBlendingTag && qQ.c.Warn("Setting meshBlendingTag on an instanced mesh has no effect")
      }
      getTotalVertices() {
        return this._sourceMesh ? this._sourceMesh.getTotalVertices() : 0
      }
      getTotalIndices() {
        return this._sourceMesh.getTotalIndices()
      }
      get cqQ() {
        return this._sourceMesh
      }
      get geometry() {
        return this._sourceMesh._geometry
      }
      createInstance(QQ) {
        return this._sourceMesh.createInstance(QQ)
      }
      isReady() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return this._sourceMesh.isReady(QQ, !0)
      }
      getVerticesData(QQ, FQ, wQ) {
        return this._sourceMesh.getVerticesData(QQ, FQ, wQ)
      }
      copyVerticesData(QQ, FQ) {
        this._sourceMesh.copyVerticesData(QQ, FQ)
      }
      getVertexBuffer(QQ, FQ) {
        return this._sourceMesh.getVertexBuffer(QQ, FQ)
      }
      setVerticesData(QQ, FQ, wQ, LQ) {
        return this.cqQ && this.cqQ.setVerticesData(QQ, FQ, wQ, LQ), this.cqQ
      }
      updateVerticesData(QQ, FQ, wQ, LQ) {
        return this.cqQ && this.cqQ.updateVerticesData(QQ, FQ, wQ, LQ), this.cqQ
      }
      setIndices(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return this.cqQ && this.cqQ.setIndices(QQ, FQ), this.cqQ
      }
      isVerticesDataPresent(QQ) {
        return this._sourceMesh.isVerticesDataPresent(QQ)
      }
      OLQ() {
        return this._sourceMesh.OLQ()
      }
      get _positions() {
        return this._sourceMesh._positions
      }
      refreshBoundingInfo() {
        let QQ, FQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          wQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.hasBoundingInfo && this.sK().isLocked) return this;
        QQ = "object" === typeof FQ ? FQ : {
          applySkeleton: FQ,
          applyMorph: wQ
        };
        const LQ = this._sourceMesh.geometry ? this._sourceMesh.geometry.boundingBias : null;
        return this._refreshBoundingInfo(this._sourceMesh._getData(QQ, null, mQ.h.PositionKind), LQ), this
      }
      _preActivate() {
        return this._currentLOD && this._currentLOD._preActivate(), this
      }
      _activate(QQ, FQ) {
        if (super._activate(QQ, FQ), this._sourceMesh.lC || qQ.c.Warn("Instances should only be created for meshes with geometry."), this._currentLOD) {
          if (this._currentLOD._getWorldMatrixDeterminant() >= 0 !== this._getWorldMatrixDeterminant() >= 0) return this._internalAbstractMeshDataInfo._actAsRegularMesh = !0, !0;
          if (this._internalAbstractMeshDataInfo._actAsRegularMesh = !1, this._currentLOD._registerInstanceForRenderId(this, QQ), FQ) {
            if (!this._currentLOD._internalAbstractMeshDataInfo._isActiveIntermediate) return this._currentLOD._internalAbstractMeshDataInfo._onlyForInstancesIntermediate = !0, !0
          } else if (!this._currentLOD._internalAbstractMeshDataInfo._isActive) return this._currentLOD._internalAbstractMeshDataInfo._onlyForInstances = !0, !0
        }
        return !1
      }
      _postActivate() {
        this._sourceMesh.edgesShareWithInstances && this._sourceMesh._edgesRenderer && this._sourceMesh._edgesRenderer.isEnabled && this._sourceMesh._renderingGroup ? (this._sourceMesh._renderingGroup._edgesRenderers.pushNoDuplicate(this._sourceMesh._edgesRenderer), this._sourceMesh._edgesRenderer.customInstances.push(this.getWorldMatrix())) : this._edgesRenderer && this._edgesRenderer.isEnabled && this._sourceMesh._renderingGroup && this._sourceMesh._renderingGroup._edgesRenderers.push(this._edgesRenderer)
      }
      getWorldMatrix() {
        if (this._currentLOD && this._currentLOD !== this._sourceMesh && this._currentLOD.billboardMode !== vQ.e.BILLBOARDMODE_NONE && this._currentLOD._masterMesh !== this) {
          this._billboardWorldMatrix || (this._billboardWorldMatrix = new LQ.c);
          const QQ = this._currentLOD._masterMesh;
          return this._currentLOD._masterMesh = this, LQ.k.Ox[7].Qs(this._currentLOD.position), this._currentLOD.position.set(0, 0, 0), this._billboardWorldMatrix.Qs(this._currentLOD.computeWorldMatrix(!0)), this._currentLOD.position.Qs(LQ.k.Ox[7]), this._currentLOD._masterMesh = QQ, this._billboardWorldMatrix
        }
        return super.getWorldMatrix()
      }
      get lN() {
        return !0
      }
      getLOD(QQ) {
        if (!QQ) return this;
        const FQ = this.cqQ.getLODLevels();
        if (FQ && 0 !== FQ.length) {
          const FQ = this.sK();
          this._currentLOD = this.cqQ.getLOD(QQ, FQ.BLQ)
        } else this._currentLOD = this.cqQ;
        return this._currentLOD
      }
      _preActivateForIntermediateRendering(QQ) {
        return this.cqQ._preActivateForIntermediateRendering(QQ)
      }
      _syncSubMeshes() {
        if (this.releaseSubMeshes(), this._sourceMesh.lC)
          for (let QQ = 0; QQ < this._sourceMesh.lC.length; QQ++) this._sourceMesh.lC[QQ].clone(this, this._sourceMesh);
        return this
      }
      _generatePointsArray() {
        return this._sourceMesh._generatePointsArray()
      }
      _updateBoundingInfo() {
        return this.hasBoundingInfo ? this.sK().update(this.worldMatrixFromCache) : this.buildBoundingInfo(this.absolutePosition, this.absolutePosition, this.worldMatrixFromCache), this._updateSubMeshesBoundingInfo(this.worldMatrixFromCache), this
      }
      clone(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          wQ = arguments.length > 2 ? arguments[2] : void 0;
        const LQ = ((arguments.length > 3 ? arguments[3] : void 0) || this._sourceMesh).createInstance(QQ);
        if (kQ.b.DeepCopy(this, LQ, ["name", "lC", "uniqueId", "parent", "lightSources", "receiveShadows", "material", "visibility", "skeleton", "cqQ", "lN", "facetNb", "isFacetDataEnabled", "isBlocked", "useBones", "pqQ", "collider", "edgesRenderer", "forward", "up", "right", "absolutePosition", "absoluteScaling", "absoluteRotationQuaternion", "kkQ", "nonUniformScaling", "behaviors", "worldMatrixFromCache", "hasThinInstances", "hasBoundingInfo", "geometry"], []), FQ && (LQ.parent = FQ), !wQ)
          for (let qQ = 0; qQ < this.iN().meshes.length; qQ++) {
            const QQ = this.iN().meshes[qQ];
            QQ.parent === this && QQ.clone(QQ.name, LQ)
          }
        return LQ.computeWorldMatrix(!0), this.onClonedObservable.notifyObservers(LQ), LQ
      }
      dispose(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._sourceMesh.o5(this), super.dispose(QQ, FQ)
      }
      _serializeAsParent(QQ) {
        super._serializeAsParent(QQ), QQ.parentId = this._sourceMesh.uniqueId, QQ.parentInstanceIndex = this._indexInSourceMeshInstanceArray
      }
      instantiateHierarchy() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          FQ = arguments.length > 1 ? arguments[1] : void 0,
          wQ = arguments.length > 2 ? arguments[2] : void 0;
        const LQ = this.clone("Clone of " + (this.name || this.id), QQ || this.parent, !0, FQ && FQ.newSourcedMesh);
        LQ && wQ && wQ(this, LQ);
        for (const qQ of this.getChildTransformNodes(!0)) qQ.instantiateHierarchy(LQ, FQ, wQ);
        return LQ
      }
    }
    let bQ = !1;

    function YQ(QQ, FQ, wQ, LQ, qQ) {
      for (let oQ = 0; oQ < FQ.length; oQ++) {
        const DQ = QQ[FQ[oQ]] ?? 0,
          kQ = qQ + wQ[oQ];
        DQ.toArray ? DQ.toArray(LQ, kQ) : DQ.copyToArray ? DQ.copyToArray(LQ, kQ) : LQ[kQ] = DQ
      }
    }

    function xQ() {
      bQ || (bQ = !0, DQ.c._instancedMeshFactory = (QQ, FQ) => {
        const wQ = new HQ(QQ, FQ);
        if (FQ.bK) {
          wQ.bK = {};
          for (const QQ in FQ.bK) wQ.bK[QQ] = FQ.bK[QQ]
        }
        return wQ
      }, DQ.c.prototype.hT = function(QQ, FQ) {
        if (!this.bK) {
          this.bK = {};
          for (const QQ of this.instances) QQ.bK = {}
        }
        this._userInstancedBuffersStorage || (this._userInstancedBuffersStorage = {
          data: {},
          vertexBuffers: {},
          strides: {},
          sizes: {},
          vertexArrayObjects: this.Wx().getCaps().vertexArrayObject ? {} : void 0
        }), this.bK[QQ] = null, this._userInstancedBuffersStorage.strides[QQ] = FQ;
        const wQ = this._userInstancedBuffersStorage;
        wQ.interleavedKinds = [], wQ.interleavedOffsets = [], wQ.interleavedRowStride = 0;
        for (const LQ in wQ.strides) wQ.interleavedKinds.push(LQ), wQ.interleavedOffsets.push(wQ.interleavedRowStride), wQ.interleavedRowStride += wQ.strides[LQ];
        wQ.interleavedData = new Float32Array(32 * wQ.interleavedRowStride);
        for (const LQ in wQ.interleavedBuffers) wQ.interleavedBuffers[LQ].buffer.dispose();
        wQ.interleavedBuffers = {}, wQ.vertexBuffers[QQ] = null;
        for (const LQ of this.instances) LQ.bK[QQ] = null;
        this._invalidateInstanceVertexArrayObject(), this._markSubMeshesAsAttributesDirty()
      }, DQ.c.prototype._processInstancedBuffers = function(QQ, FQ) {
        const wQ = this._userInstancedBuffersStorage,
          LQ = wQ.interleavedRowStride;
        if (!LQ) return;
        const qQ = QQ ? QQ.length : 0,
          oQ = (qQ + 1) * LQ;
        let DQ = wQ.interleavedData;
        if (DQ.length < oQ) {
          let QQ = DQ.length;
          for (; QQ < oQ;) QQ *= 2;
          DQ = wQ.interleavedData = new Float32Array(QQ)
        }
        const kQ = wQ.interleavedKinds,
          vQ = wQ.interleavedOffsets;
        let uQ = 0;
        FQ && (YQ(this.bK, kQ, vQ, DQ, uQ), uQ += LQ);
        for (let mQ = 0; mQ < qQ; mQ++) YQ(QQ[mQ].bK, kQ, vQ, DQ, uQ), uQ += LQ;
        let HQ = "shared",
          bQ = wQ.vertexBuffers;
        this._instanceDataStorage.useMonoDataStorageRenderPass || (HQ = this._instanceDataStorage.engine.currentRenderPassId, wQ.renderPasses || (wQ.renderPasses = {}), wQ.renderPasses[HQ] || (wQ.renderPasses[HQ] = {}), bQ = wQ.renderPasses[HQ]);
        const xQ = wQ.interleavedBuffers[HQ];
        let AQ = !xQ || xQ.data !== DQ;
        for (let mQ = 0; !AQ && mQ < kQ.length; mQ++) AQ = !bQ[kQ[mQ]];
        if (!AQ) return void xQ.buffer.updateDirectly(DQ, 0);
        xQ?.buffer.dispose();
        const tQ = new mQ.c(this.Wx(), DQ, !0, LQ, !1, !0);
        for (let mQ = 0; mQ < kQ.length; mQ++) {
          const QQ = kQ[mQ],
            FQ = tQ.createVertexBuffer(QQ, vQ[mQ], wQ.strides[QQ]);
          FQ.hashCode += FQ.byteOffset * 2 ** 24, bQ[QQ] = FQ
        }
        wQ.interleavedBuffers[HQ] = {
          buffer: tQ,
          data: DQ
        }, this._invalidateInstanceVertexArrayObject()
      }, DQ.c.prototype._invalidateInstanceVertexArrayObject = function() {
        if (this._userInstancedBuffersStorage && void 0 !== this._userInstancedBuffersStorage.vertexArrayObjects) {
          for (const QQ in this._userInstancedBuffersStorage.vertexArrayObjects) this.Wx().releaseVertexArrayObject(this._userInstancedBuffersStorage.vertexArrayObjects[QQ]);
          this._userInstancedBuffersStorage.vertexArrayObjects = {}
        }
      }, DQ.c.prototype._disposeInstanceSpecificData = function() {
        for (const FQ in this._instanceDataStorage.renderPasses) this._instanceDataStorage.renderPasses[FQ].instancesBuffer?.dispose();
        for (this._instanceDataStorage.renderPasses = {}, this._instanceDataStorage.dataStorageRenderPass?.instancesBuffer?.dispose(); this.instances.length;) this.instances[0].dispose();
        for (const FQ in this.bK) this._userInstancedBuffersStorage.vertexBuffers[FQ] && this._userInstancedBuffersStorage.vertexBuffers[FQ].dispose();
        const QQ = this._userInstancedBuffersStorage?.interleavedBuffers;
        if (QQ) {
          for (const FQ in QQ) QQ[FQ].buffer.dispose();
          this._userInstancedBuffersStorage.interleavedBuffers = {}
        }
        this._invalidateInstanceVertexArrayObject(), this.bK = {}
      }, (0, uQ.e)("BABYLON.InstancedMesh", HQ))
    }
  },
  39829: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => yQ,
      e: () => dQ,
      f: () => hQ
    });
    var LQ, qQ, oQ, DQ, kQ, vQ, mQ, uQ, HQ, bQ, YQ, xQ, AQ, tQ, eQ = wQ(36722),
      MQ = wQ(39505),
      GQ = wQ(39448),
      pQ = wQ(38200),
      cQ = wQ(39432),
      CQ = wQ(39833),
      SQ = wQ(39642),
      iQ = wQ(36696),
      WQ = wQ(36873),
      RQ = wQ(39650),
      OQ = wQ(39561),
      sQ = wQ(39835),
      rQ = wQ(39840),
      IQ = wQ(39855),
      UQ = wQ(39725),
      NQ = wQ(39717),
      TQ = wQ(39796),
      KQ = wQ(39870),
      zQ = wQ(39847),
      lQ = wQ(39426),
      jQ = wQ(38203),
      aQ = wQ(36741),
      XQ = wQ(39277),
      fQ = wQ(39589);
    class VQ {
      constructor(QQ, FQ) {
        this.distanceOrScreenCoverage = QQ, this.mesh = FQ
      }
    }
    class hQ {}
    class JQ {
      constructor() {
        this.batchCache = new nQ(this), this.batchCacheReplacementModeInFrozenMode = new nQ(this), this.instancesBufferSize = 2048
      }
    }
    class EQ {
      constructor() {
        this.renderPasses = {}
      }
    }
    class nQ {
      constructor(QQ) {
        this.parent = QQ, this.mustReturn = !1, this.visibleInstances = new Array, this.renderSelf = [], this.hardwareInstancedRendering = []
      }
    }
    class gQ {
      constructor() {
        this.instancesCount = 0, this.matrixBuffer = null, this.previousMatrixBuffer = null, this.matrixBufferSize = 512, this.matrixData = null, this.boundingVectors = [], this.worldMatrices = null
      }
    }
    class PQ {
      constructor() {
        this._areNormalsFrozen = !1, this._source = null, this.meshMap = null, this._preActivateId = -1, this._LODLevels = new Array, this._useLODScreenCoverage = !1, this._effectiveMaterial = null, this._forcedInstanceCount = 0, this._overrideRenderingFillMode = null
      }
    }
    const ZQ = {
      source: null,
      parent: null,
      doNotCloneChildren: !1,
      clonePhysicsImpostor: !0,
      cloneThinInstances: !1
    };
    class yQ extends IQ.c {
      static _GetDefaultSideOrientation(QQ) {
        return QQ || yQ.FRONTSIDE
      }
      get useLODScreenCoverage() {
        return this._internalMeshDataInfo._useLODScreenCoverage
      }
      set useLODScreenCoverage(QQ) {
        this._internalMeshDataInfo._useLODScreenCoverage = QQ, this._sortLODLevels()
      }
      get computeBonesUsingShaders() {
        return this._internalAbstractMeshDataInfo._computeBonesUsingShaders
      }
      set computeBonesUsingShaders(QQ) {
        this._internalAbstractMeshDataInfo._computeBonesUsingShaders !== QQ && (QQ && this._internalMeshDataInfo._sourcePositions && (this.setVerticesData(OQ.h.PositionKind, this._internalMeshDataInfo._sourcePositions, !0), this._internalMeshDataInfo._sourceNormals && this.setVerticesData(OQ.h.NormalKind, this._internalMeshDataInfo._sourceNormals, !0), this._internalMeshDataInfo._sourcePositions = null, this._internalMeshDataInfo._sourceNormals = null), this._internalAbstractMeshDataInfo._computeBonesUsingShaders = QQ, this._markSubMeshesAsAttributesDirty())
      }
      get onBeforeRenderObservable() {
        return this._internalMeshDataInfo._onBeforeRenderObservable || (this._internalMeshDataInfo._onBeforeRenderObservable = new eQ.e), this._internalMeshDataInfo._onBeforeRenderObservable
      }
      get onBeforeBindObservable() {
        return this._internalMeshDataInfo._onBeforeBindObservable || (this._internalMeshDataInfo._onBeforeBindObservable = new eQ.e), this._internalMeshDataInfo._onBeforeBindObservable
      }
      get onAfterRenderObservable() {
        return this._internalMeshDataInfo._onAfterRenderObservable || (this._internalMeshDataInfo._onAfterRenderObservable = new eQ.e), this._internalMeshDataInfo._onAfterRenderObservable
      }
      get onBetweenPassObservable() {
        return this._internalMeshDataInfo._onBetweenPassObservable || (this._internalMeshDataInfo._onBetweenPassObservable = new eQ.e), this._internalMeshDataInfo._onBetweenPassObservable
      }
      get onBeforeDrawObservable() {
        return this._internalMeshDataInfo._onBeforeDrawObservable || (this._internalMeshDataInfo._onBeforeDrawObservable = new eQ.e), this._internalMeshDataInfo._onBeforeDrawObservable
      }
      set onBeforeDraw(QQ) {
        this._onBeforeDrawObserver && this.onBeforeDrawObservable.remove(this._onBeforeDrawObserver), this._onBeforeDrawObserver = this.onBeforeDrawObservable.add(QQ)
      }
      get pqQ() {
        return this.instances.length > 0
      }
      get hasThinInstances() {
        return (this.forcedInstanceCount || this._thinInstanceDataStorage.instancesCount || 0) > 0
      }
      get forcedInstanceCount() {
        return this._internalMeshDataInfo._forcedInstanceCount
      }
      set forcedInstanceCount(QQ) {
        this._internalMeshDataInfo._forcedInstanceCount = QQ
      }
      get sideOrientation() {
        return this._internalMeshDataInfo._sideOrientation
      }
      set sideOrientation(QQ) {
        this._internalMeshDataInfo._sideOrientation = QQ, this._internalAbstractMeshDataInfo._sideOrientationHint = this._scene.useRightHandedSystem && 1 === QQ || !this._scene.useRightHandedSystem && 0 === QQ
      }
      get _effectiveSideOrientation() {
        return this._internalMeshDataInfo._effectiveSideOrientation
      }
      get overrideMaterialSideOrientation() {
        return this.sideOrientation
      }
      set overrideMaterialSideOrientation(QQ) {
        this.sideOrientation = QQ, this.material && (this.material.sideOrientation = null)
      }
      get overrideRenderingFillMode() {
        return this._internalMeshDataInfo._overrideRenderingFillMode
      }
      set overrideRenderingFillMode(QQ) {
        this._internalMeshDataInfo._overrideRenderingFillMode = QQ
      }
      get material() {
        return this._internalAbstractMeshDataInfo._material
      }
      set material(QQ) {
        QQ && (this.material && null === this.material.sideOrientation || this._internalAbstractMeshDataInfo._sideOrientationHint) && (QQ.sideOrientation = null), this._setMaterial(QQ)
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
      set isUnIndexed(QQ) {
        this._unIndexed !== QQ && (this._unIndexed = QQ, this._markSubMeshesAsAttributesDirty())
      }
      get worldMatrixInstancedBuffer() {
        const QQ = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._instanceDataStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId];
        return QQ ? QQ.instancesData : void 0
      }
      get previousWorldMatrixInstancedBuffer() {
        const QQ = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._instanceDataStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId];
        return QQ ? QQ.instancesPreviousData : void 0
      }
      get manualUpdateOfWorldMatrixInstancedBuffer() {
        return this._instanceDataStorage.manualUpdate
      }
      set manualUpdateOfWorldMatrixInstancedBuffer(QQ) {
        this._instanceDataStorage.manualUpdate = QQ
      }
      get manualUpdateOfPreviousWorldMatrixInstancedBuffer() {
        return this._instanceDataStorage.previousManualUpdate
      }
      set manualUpdateOfPreviousWorldMatrixInstancedBuffer(QQ) {
        this._instanceDataStorage.previousManualUpdate = QQ
      }
      get forceWorldMatrixInstancedBufferUpdate() {
        return this._instanceDataStorage.forceMatrixUpdates
      }
      set forceWorldMatrixInstancedBufferUpdate(QQ) {
        this._instanceDataStorage.forceMatrixUpdates = QQ
      }
      _copySource(QQ, FQ) {
        let wQ = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          LQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const qQ = this.iN();
        if (QQ._geometry && QQ._geometry.applyToMesh(this), pQ.b.DeepCopy(QQ, this, ["name", "material", "skeleton", "instances", "parent", "uniqueId", "source", "metadata", "morphTargetManager", "pqQ", "worldMatrixInstancedBuffer", "previousWorldMatrixInstancedBuffer", "hasLODLevels", "geometry", "isBlocked", "areNormalsFrozen", "facetNb", "isFacetDataEnabled", "lightSources", "useBones", "lN", "collider", "edgesRenderer", "forward", "up", "right", "absolutePosition", "absoluteScaling", "absoluteRotationQuaternion", "kkQ", "nonUniformScaling", "behaviors", "worldMatrixFromCache", "hasThinInstances", "cloneMeshMap", "hasBoundingInfo", "physicsBody", "physicsImpostor"], ["_poseMatrix"]), this._internalMeshDataInfo._source = QQ, qQ.useClonedMeshMap && (QQ._internalMeshDataInfo.meshMap || (QQ._internalMeshDataInfo.meshMap = {}), QQ._internalMeshDataInfo.meshMap[this.uniqueId] = this), this._originalBuilderSideOrientation = QQ._originalBuilderSideOrientation, this._creationDataStorage = QQ._creationDataStorage, QQ._ranges) {
          const FQ = QQ._ranges;
          for (const QQ in FQ) Object.prototype.hasOwnProperty.call(FQ, QQ) && FQ[QQ] && this.createAnimationRange(QQ, FQ[QQ].from, FQ[QQ].to)
        }
        if (QQ.metadata && QQ.metadata.clone ? this.metadata = QQ.metadata.clone() : this.metadata = QQ.metadata, this._internalMetadata = QQ._internalMetadata, this.meshBlendingTag = QQ.meshBlendingTag, cQ.c && cQ.c.HasTags(QQ) && cQ.c.AddTagsTo(this, cQ.c.GetTags(QQ, !0)), this.Qr(QQ.isEnabled(!1)), this.parent = QQ.parent, this.setPivotMatrix(QQ.getPivotMatrix(), this._postMultiplyPivotMatrix), this.id = this.name + "." + QQ.id, this.material = QQ.material, !FQ) {
          const qQ = QQ.getDescendants(!0);
          for (let QQ = 0; QQ < qQ.length; QQ++) {
            const oQ = qQ[QQ];
            oQ._isMesh ? (ZQ.parent = this, ZQ.doNotCloneChildren = FQ, ZQ.clonePhysicsImpostor = wQ, ZQ.cloneThinInstances = LQ, oQ.clone(this.name + "." + oQ.name, ZQ)) : oQ.clone && oQ.clone(this.name + "." + oQ.name, this)
          }
        }
        if (QQ.morphTargetManager && (this.morphTargetManager = QQ.morphTargetManager), (0, XQ.b)(qQ.getPhysicsEngine)) {
          const FQ = qQ.getPhysicsEngine();
          if (wQ && FQ)
            if (1 === FQ.getPluginVersion()) {
              const wQ = FQ.getImpostorForPhysicsObject(QQ);
              wQ && (this.physicsImpostor = wQ.clone(this))
            } else 2 === FQ.getPluginVersion() && QQ.physicsBody && QQ.physicsBody.clone(this)
        }
        for (let oQ = 0; oQ < qQ.fC.length; oQ++) {
          const FQ = qQ.fC[oQ];
          FQ.emitter === QQ && FQ.clone(FQ.name, this)
        }
        if (this.skeleton = QQ.skeleton, LQ && (QQ._thinInstanceDataStorage.matrixData ? (this.FQQ("matrix", new Float32Array(QQ._thinInstanceDataStorage.matrixData), 16, !QQ._thinInstanceDataStorage.matrixBuffer.isUpdatable()), this._thinInstanceDataStorage.matrixBufferSize = QQ._thinInstanceDataStorage.matrixBufferSize, this._thinInstanceDataStorage.instancesCount = QQ._thinInstanceDataStorage.instancesCount) : this._thinInstanceDataStorage.matrixBufferSize = QQ._thinInstanceDataStorage.matrixBufferSize, QQ._userThinInstanceBuffersStorage)) {
          const FQ = QQ._userThinInstanceBuffersStorage;
          for (const QQ in FQ.data) this.FQQ(QQ, new Float32Array(FQ.data[QQ]), FQ.strides[QQ], !FQ.vertexBuffers?.[QQ]?.isUpdatable()), this._userThinInstanceBuffersStorage.sizes[QQ] = FQ.sizes[QQ]
        }
        this.refreshBoundingInfo(!0, !0), this.computeWorldMatrix(!0)
      }
      constructor(QQ) {
        let FQ, wQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          LQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          qQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          oQ = arguments.length > 4 ? arguments[4] : void 0,
          DQ = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        super(QQ, wQ), this._internalMeshDataInfo = new PQ, this.delayLoadState = 0, this.instances = [], this._creationDataStorage = null, this._geometry = null, this._thinInstanceDataStorage = new gQ, this._shouldGenerateFlatShading = !1, this._originalBuilderSideOrientation = yQ.DEFAULTSIDE, this.ignoreCameraMaxZ = !1, wQ = this.iN(), this._instanceDataStorage = new EQ, this._instanceDataStorage.engine = wQ.Wx(), this._instanceDataStorage.useMonoDataStorageRenderPass = !this._instanceDataStorage.engine.isWebGPU, this._instanceDataStorage.useMonoDataStorageRenderPass && (this._instanceDataStorage.dataStorageRenderPass = new JQ), this._scene.useRightHandedSystem ? this.sideOrientation = 0 : this.sideOrientation = 1, this._onBeforeDraw = (QQ, FQ, wQ) => {
          QQ && wQ && (this._uniformBuffer ? this.transferToEffect(FQ) : wQ.bindOnlyWorldMatrix(FQ))
        };
        let kQ = !1;
        if (LQ && void 0 === LQ._addToSceneRootNodes) {
          const QQ = LQ;
          FQ = QQ.parent ?? null, qQ = QQ.source ?? null, oQ = QQ.doNotCloneChildren ?? !1, DQ = QQ.clonePhysicsImpostor ?? !0, kQ = QQ.cloneThinInstances ?? !1
        } else FQ = LQ;
        qQ && this._copySource(qQ, oQ, DQ, kQ), null !== FQ && (this.parent = FQ), this._instanceDataStorage.hardwareInstancedRendering = this.Wx().getCaps().instancedArrays, this._internalMeshDataInfo._onMeshReadyObserverAdded = QQ => {
          QQ.unregisterOnNextCall = !0, this.isReady(!0) ? this.onMeshReadyObservable.notifyObservers(this) : this._internalMeshDataInfo._checkReadinessObserver || (this._internalMeshDataInfo._checkReadinessObserver = this._scene.onBeforeRenderObservable.add((() => {
            this.isReady(!0) && (this._scene.onBeforeRenderObservable.remove(this._internalMeshDataInfo._checkReadinessObserver), this._internalMeshDataInfo._checkReadinessObserver = null, this.onMeshReadyObservable.notifyObservers(this))
          })))
        }, this.onMeshReadyObservable = new eQ.e(this._internalMeshDataInfo._onMeshReadyObserverAdded), qQ && qQ.onClonedObservable.notifyObservers(this)
      }
      instantiateHierarchy() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          FQ = arguments.length > 1 ? arguments[1] : void 0,
          wQ = arguments.length > 2 ? arguments[2] : void 0;
        const LQ = 0 === this.getTotalVertices() || FQ && FQ.doNotInstantiate && (!0 === FQ.doNotInstantiate || FQ.doNotInstantiate(this)) ? this.clone("Clone of " + (this.name || this.id), QQ || this.parent, !0) : this.createInstance("instance of " + (this.name || this.id));
        LQ.parent = QQ || this.parent, LQ.position = this.position.clone(), LQ.ck = this.ck.clone(), this.rotationQuaternion ? LQ.rotationQuaternion = this.rotationQuaternion.clone() : LQ.rotation = this.rotation.clone(), wQ && wQ(this, LQ);
        for (const qQ of this.getChildTransformNodes(!0)) "InstancedMesh" === qQ.getClassName() && "Mesh" === LQ.getClassName() && qQ.cqQ === this ? qQ.instantiateHierarchy(LQ, {
          doNotInstantiate: FQ && FQ.doNotInstantiate || !1,
          newSourcedMesh: LQ
        }, wQ) : qQ.instantiateHierarchy(LQ, FQ, wQ);
        return LQ
      }
      getClassName() {
        return "Mesh"
      }
      get _isMesh() {
        return !0
      }
      toString(QQ) {
        let FQ = super.toString(QQ);
        if (FQ += ", n vertices: " + this.getTotalVertices(), FQ += ", parent: " + (this._waitingParentId ? this._waitingParentId : this.parent ? this.parent.name : "NONE"), this.animations)
          for (let wQ = 0; wQ < this.animations.length; wQ++) FQ += ", animation[0]: " + this.animations[wQ].toString(QQ);
        if (QQ)
          if (this._geometry) {
            const QQ = this.OLQ(),
              wQ = this.getVerticesData(OQ.h.PositionKind);
            wQ && QQ && (FQ += ", flat shading: " + (wQ.length / 3 === QQ.length ? "YES" : "NO"))
          } else FQ += ", flat shading: UNKNOWN";
        return FQ
      }
      _unBindEffect() {
        super._unBindEffect();
        for (const QQ of this.instances) QQ._unBindEffect()
      }
      get hasLODLevels() {
        return this._internalMeshDataInfo._LODLevels.length > 0
      }
      getLODLevels() {
        return this._internalMeshDataInfo._LODLevels
      }
      _sortLODLevels() {
        const QQ = this._internalMeshDataInfo._useLODScreenCoverage ? -1 : 1;
        this._internalMeshDataInfo._LODLevels.sort(((FQ, wQ) => FQ.distanceOrScreenCoverage < wQ.distanceOrScreenCoverage ? QQ : FQ.distanceOrScreenCoverage > wQ.distanceOrScreenCoverage ? -QQ : 0))
      }
      addLODLevel(QQ, FQ) {
        if (FQ && FQ._masterMesh) return jQ.c.Warn("You cannot use a mesh as LOD level twice"), this;
        const wQ = new VQ(QQ, FQ);
        return this._internalMeshDataInfo._LODLevels.push(wQ), FQ && (FQ._masterMesh = this), this._sortLODLevels(), this
      }
      getLODLevelAtDistance(QQ) {
        const FQ = this._internalMeshDataInfo;
        for (let wQ = 0; wQ < FQ._LODLevels.length; wQ++) {
          const LQ = FQ._LODLevels[wQ];
          if (LQ.distanceOrScreenCoverage === QQ) return LQ.mesh
        }
        return null
      }
      removeLODLevel(QQ) {
        const FQ = this._internalMeshDataInfo;
        for (let wQ = 0; wQ < FQ._LODLevels.length; wQ++) FQ._LODLevels[wQ].mesh === QQ && (FQ._LODLevels.splice(wQ, 1), QQ && (QQ._masterMesh = null));
        return this._sortLODLevels(), this
      }
      getLOD(QQ, FQ) {
        const wQ = this._internalMeshDataInfo;
        if (!wQ._LODLevels || 0 === wQ._LODLevels.length) return this;
        const LQ = FQ || this.sK().BLQ,
          qQ = QQ.mode === SQ.e.ORTHOGRAPHIC_CAMERA ? QQ.minZ : LQ.centerWorld.subtract(QQ.globalPosition).length();
        let oQ = qQ,
          DQ = 1;
        if (wQ._useLODScreenCoverage) {
          const FQ = QQ.screenArea;
          let wQ = LQ.radiusWorld * QQ.minZ / qQ;
          wQ = wQ * wQ * Math.PI, oQ = wQ / FQ, DQ = -1
        }
        if (DQ * wQ._LODLevels[wQ._LODLevels.length - 1].distanceOrScreenCoverage > DQ * oQ) return this.onLODLevelSelection && this.onLODLevelSelection(oQ, this, this), this;
        for (let kQ = 0; kQ < wQ._LODLevels.length; kQ++) {
          const QQ = wQ._LODLevels[kQ];
          if (DQ * QQ.distanceOrScreenCoverage < DQ * oQ) {
            if (QQ.mesh) {
              if (4 === QQ.mesh.delayLoadState) return QQ.mesh._checkDelayState(), this;
              if (2 === QQ.mesh.delayLoadState) return this;
              QQ.mesh._preActivate(), QQ.mesh._updateSubMeshesBoundingInfo(this.worldMatrixFromCache)
            }
            return this.onLODLevelSelection && this.onLODLevelSelection(oQ, this, QQ.mesh), QQ.mesh
          }
        }
        return this.onLODLevelSelection && this.onLODLevelSelection(oQ, this, this), this
      }
      get geometry() {
        return this._geometry
      }
      getTotalVertices() {
        return null === this._geometry || void 0 === this._geometry ? 0 : this._geometry.getTotalVertices()
      }
      getVerticesData(QQ, FQ, wQ, LQ) {
        if (!this._geometry) return null;
        let qQ = LQ ? void 0 : this._userInstancedBuffersStorage?.vertexBuffers[QQ]?.getFloatData(this.instances.length + 1, wQ || FQ && 1 !== this._geometry.meshes.length);
        return qQ || (qQ = this._geometry.getVerticesData(QQ, FQ, wQ)), qQ
      }
      copyVerticesData(QQ, FQ) {
        this._geometry && this._geometry.copyVerticesData(QQ, FQ)
      }
      getVertexBuffer(QQ, FQ) {
        return this._geometry ? (FQ ? void 0 : this._userInstancedBuffersStorage?.vertexBuffers[QQ]) ?? this._geometry.getVertexBuffer(QQ) : null
      }
      isVerticesDataPresent(QQ, FQ) {
        return this._geometry ? !FQ && void 0 !== this._userInstancedBuffersStorage?.vertexBuffers[QQ] || this._geometry.isVerticesDataPresent(QQ) : !!this._delayInfo && -1 !== this._delayInfo.indexOf(QQ)
      }
      isVertexBufferUpdatable(QQ, FQ) {
        if (!this._geometry) return !!this._delayInfo && -1 !== this._delayInfo.indexOf(QQ);
        if (!FQ) {
          const FQ = this._userInstancedBuffersStorage?.vertexBuffers[QQ];
          if (FQ) return FQ.isUpdatable()
        }
        return this._geometry.isVertexBufferUpdatable(QQ)
      }
      getVerticesDataKinds(QQ) {
        if (!this._geometry) {
          const QQ = [];
          if (this._delayInfo)
            for (const FQ of this._delayInfo) QQ.push(FQ);
          return QQ
        }
        const FQ = this._geometry.getVerticesDataKinds();
        if (!QQ && this._userInstancedBuffersStorage)
          for (const wQ in this._userInstancedBuffersStorage.vertexBuffers) - 1 === FQ.indexOf(wQ) && FQ.push(wQ);
        return FQ
      }
      getTotalIndices() {
        return this._geometry ? this._geometry.getTotalIndices() : 0
      }
      OLQ(QQ, FQ) {
        return this._geometry ? this._geometry.OLQ(QQ, FQ) : []
      }
      get isBlocked() {
        return null !== this._masterMesh && void 0 !== this._masterMesh
      }
      isReady() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          FQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (2 === this.delayLoadState) return !1;
        if (!super.isReady(QQ)) return !1;
        if (!this.lC || 0 === this.lC.length) return !0;
        if (!QQ) return !0;
        const wQ = this.Wx(),
          LQ = this.iN(),
          qQ = FQ || wQ.getCaps().instancedArrays && (this.instances.length > 0 || this.hasThinInstances);
        this.computeWorldMatrix();
        const oQ = this.material || LQ.defaultMaterial;
        if (oQ)
          if (oQ._storeEffectOnSubMeshes)
            for (const kQ of this.lC) {
              const QQ = kQ.Ux();
              if (QQ)
                if (QQ._storeEffectOnSubMeshes) {
                  if (!QQ.isReadyForSubMesh(this, kQ, qQ)) return !1
                } else if (!QQ.isReady(this, qQ)) return !1
            } else if (!oQ.isReady(this, qQ)) return !1;
        const DQ = wQ.currentRenderPassId;
        for (const kQ of this.lightSources) {
          const QQ = kQ.getShadowGenerators();
          if (!QQ) continue;
          const FQ = QQ.values();
          for (let LQ = FQ.next(); !0 !== LQ.done; LQ = FQ.next()) {
            const QQ = LQ.value;
            if (QQ && (!QQ.getShadowMap()?.renderList || QQ.getShadowMap()?.renderList && -1 !== QQ.getShadowMap()?.renderList?.indexOf(this))) {
              const FQ = QQ.getShadowMap().renderPassIds ?? [wQ.currentRenderPassId];
              for (let LQ = 0; LQ < FQ.length; ++LQ) {
                wQ.currentRenderPassId = FQ[LQ];
                for (const FQ of this.lC)
                  if (!QQ.isReady(FQ, qQ, FQ.Ux()?.needAlphaBlendingForMesh(this) ?? !1)) return wQ.currentRenderPassId = DQ, !1
              }
              wQ.currentRenderPassId = DQ
            }
          }
        }
        for (const kQ of this._internalMeshDataInfo._LODLevels)
          if (kQ.mesh && !kQ.mesh.isReady(qQ)) return !1;
        return !0
      }
      get areNormalsFrozen() {
        return this._internalMeshDataInfo._areNormalsFrozen
      }
      Nx() {
        return this._internalMeshDataInfo._areNormalsFrozen = !0, this
      }
      unfreezeNormals() {
        return this._internalMeshDataInfo._areNormalsFrozen = !1, this
      }
      set overridenInstanceCount(QQ) {
        this._instanceDataStorage.overridenInstanceCount = QQ
      }
      _getInstanceDataStorage() {
        if (this._instanceDataStorage.useMonoDataStorageRenderPass) return this._instanceDataStorage.dataStorageRenderPass;
        const QQ = this._instanceDataStorage.engine.currentRenderPassId;
        let FQ = this._instanceDataStorage.renderPasses[QQ];
        return FQ || (FQ = new JQ, this._instanceDataStorage.renderPasses[QQ] = FQ), FQ
      }
      _preActivate() {
        const QQ = this._internalMeshDataInfo,
          FQ = this.iN().getRenderId();
        return QQ._preActivateId === FQ || (QQ._preActivateId = FQ, this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass.visibleInstances = null : this._getInstanceDataStorage().visibleInstances = null), this
      }
      _preActivateForIntermediateRendering(QQ) {
        const FQ = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        return FQ.visibleInstances && (FQ.visibleInstances.intermediateDefaultRenderId = QQ), this
      }
      _registerInstanceForRenderId(QQ, FQ) {
        const wQ = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        return wQ.visibleInstances || (wQ.visibleInstances = {
          defaultRenderId: FQ,
          selfDefaultRenderId: this._renderId,
          intermediateDefaultRenderId: -1
        }), wQ.visibleInstances[FQ] || (void 0 === wQ.previousRenderId || this._instanceDataStorage.useMonoDataStorageRenderPass && !this._instanceDataStorage.isFrozen || delete wQ.visibleInstances[wQ.previousRenderId], wQ.previousRenderId = FQ, wQ.visibleInstances[FQ] = new Array), wQ.visibleInstances[FQ].push(QQ), this
      }
      _afterComputeWorldMatrix() {
        super._afterComputeWorldMatrix(), this.hasThinInstances && (this.Ix || this.thinInstanceRefreshBoundingInfo(!1))
      }
      _postActivate() {
        this.edgesShareWithInstances && this.edgesRenderer && this.edgesRenderer.isEnabled && this._renderingGroup && (this._renderingGroup._edgesRenderers.pushNoDuplicate(this.edgesRenderer), this.edgesRenderer.customInstances.push(this.getWorldMatrix()))
      }
      refreshBoundingInfo() {
        let QQ, FQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          wQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.hasBoundingInfo && this.sK().isLocked) return this;
        QQ = "object" === typeof FQ ? FQ : {
          applySkeleton: FQ,
          applyMorph: wQ
        };
        const LQ = this.geometry ? this.geometry.boundingBias : null;
        return this._refreshBoundingInfo(this._getData(QQ, null, OQ.h.PositionKind), LQ), this
      }
      _createGlobalSubMesh(QQ) {
        const FQ = this.getTotalVertices();
        if (!FQ || !this.OLQ()) return null;
        if (this.lC && this.lC.length > 0) {
          const wQ = this.OLQ();
          if (!wQ) return null;
          const LQ = wQ.length;
          let qQ = !1;
          if (QQ) qQ = !0;
          else
            for (const QQ of this.lC) {
              if (QQ.indexStart + QQ.indexCount > LQ) {
                qQ = !0;
                break
              }
              if (QQ.verticesStart + QQ.verticesCount > FQ) {
                qQ = !0;
                break
              }
            }
          if (!qQ) return this.lC[0]
        }
        return this.releaseSubMeshes(), new UQ.c(0, 0, FQ, 0, this.getTotalIndices() || (this.isUnIndexed ? FQ : 0), this)
      }
      subdivide(QQ) {
        if (QQ < 1) return;
        const FQ = this.getTotalIndices();
        let wQ = FQ / QQ | 0,
          LQ = 0;
        for (; wQ % 3 !== 0;) wQ++;
        this.releaseSubMeshes();
        for (let qQ = 0; qQ < QQ && !(LQ >= FQ); qQ++) UQ.c.CreateFromIndices(0, LQ, LQ + wQ >= FQ ? FQ - LQ : wQ, this, void 0, !1), LQ += wQ;
        this.refreshBoundingInfo(), this.synchronizeInstances()
      }
      setVerticesData(QQ, FQ) {
        let wQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          LQ = arguments.length > 3 ? arguments[3] : void 0;
        if (this._geometry) this._geometry.setVerticesData(QQ, FQ, wQ, LQ);
        else {
          const LQ = new sQ.c;
          LQ.set(FQ, QQ);
          const qQ = this.iN();
          new rQ.c(rQ.c.RandomId(), qQ, LQ, wQ, this)
        }
        return this
      }
      removeVerticesData(QQ) {
        this._geometry && this._geometry.removeVerticesData(QQ)
      }
      markVerticesDataAsUpdatable(QQ) {
        let FQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const wQ = this.getVertexBuffer(QQ);
        wQ && wQ.isUpdatable() !== FQ && this.setVerticesData(QQ, this.getVerticesData(QQ), FQ)
      }
      setVerticesBuffer(QQ) {
        let FQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        return this._geometry || (this._geometry = rQ.c.CreateGeometryForMesh(this)), this._geometry.setVerticesBuffer(QQ, wQ, FQ), this
      }
      updateVerticesData(QQ, FQ, wQ, LQ) {
        return this._geometry ? (LQ ? (this.makeGeometryUnique(), this.updateVerticesData(QQ, FQ, wQ, !1)) : this._geometry.updateVerticesData(QQ, FQ, wQ), this) : this
      }
      updateMeshPositions(QQ) {
        let FQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const wQ = this.getVerticesData(OQ.h.PositionKind);
        if (!wQ) return this;
        if (QQ(wQ), this.updateVerticesData(OQ.h.PositionKind, wQ, !1, !1), FQ) {
          const QQ = this.OLQ(),
            FQ = this.getVerticesData(OQ.h.NormalKind);
          if (!FQ) return this;
          sQ.c.ComputeNormals(wQ, QQ, FQ), this.updateVerticesData(OQ.h.NormalKind, FQ, !1, !1)
        }
        return this
      }
      makeGeometryUnique() {
        if (!this._geometry) return this;
        if (1 === this._geometry.meshes.length) return this;
        const QQ = this._geometry,
          FQ = this._geometry.copy(rQ.c.RandomId());
        return QQ.releaseForMesh(this, !0), FQ.applyToMesh(this), this
      }
      setIndexBuffer(QQ, FQ, wQ) {
        let LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          qQ = this._geometry;
        qQ || (qQ = new rQ.c(rQ.c.RandomId(), this.iN(), void 0, void 0, this)), qQ.setIndexBuffer(QQ, FQ, wQ, LQ)
      }
      setIndices(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          wQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          LQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this._geometry) this._geometry.setIndices(QQ, FQ, wQ, LQ);
        else {
          const LQ = new sQ.c;
          LQ.indices = QQ;
          const qQ = this.iN();
          new rQ.c(rQ.c.RandomId(), qQ, LQ, wQ, this, FQ)
        }
        return this
      }
      updateIndices(QQ, FQ) {
        let wQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return this._geometry ? (this._geometry.updateIndices(QQ, FQ, wQ), this) : this
      }
      toLeftHanded() {
        return this._geometry ? (this._geometry.toLeftHanded(), this) : this
      }
      _bind(QQ, FQ, wQ) {
        let LQ = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        if (!this._geometry) return this;
        const qQ = this.iN().Wx();
        let oQ;
        if (this._unIndexed)
          if (this._getRenderingFillMode(wQ) === NQ.d.WireFrameFillMode) oQ = QQ._getLinesIndexBuffer(this.OLQ(), qQ);
          else oQ = null;
        else switch (this._getRenderingFillMode(wQ)) {
          case NQ.d.PointFillMode:
            oQ = null;
            break;
          case NQ.d.WireFrameFillMode:
            oQ = QQ._getLinesIndexBuffer(this.OLQ(), qQ);
            break;
          default:
          case NQ.d.TriangleFillMode:
            oQ = this._geometry.getIndexBuffer()
        }
        return this._bindDirect(FQ, oQ, LQ)
      }
      _bindDirect(QQ, FQ) {
        let wQ = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (!this._geometry) return this;
        if (this.morphTargetManager && this.morphTargetManager.isUsingTextureForTargets && this.morphTargetManager._bind(QQ), wQ && this._userInstancedBuffersStorage && !this.hasThinInstances) {
          if (!this._instanceDataStorage.useMonoDataStorageRenderPass && this._userInstancedBuffersStorage.renderPasses && this._userInstancedBuffersStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId]) {
            const QQ = this._userInstancedBuffersStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId];
            for (const FQ in QQ) this._userInstancedBuffersStorage.vertexBuffers[FQ] = QQ[FQ]
          }
          this._geometry._bind(QQ, FQ, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects)
        } else this._geometry._bind(QQ, FQ);
        return this
      }
      _draw(QQ, FQ, wQ) {
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        this._internalMeshDataInfo._onBeforeDrawObservable && this._internalMeshDataInfo._onBeforeDrawObservable.notifyObservers(this);
        const LQ = this.iN().Wx(),
          qQ = LQ._currentMaterialContext,
          oQ = qQ && qQ.useVertexPulling;
        return this._unIndexed && FQ !== NQ.d.WireFrameFillMode || FQ == NQ.d.PointFillMode ? LQ.drawArraysType(FQ, QQ.verticesStart, QQ.verticesCount, this.forcedInstanceCount || wQ) : FQ == NQ.d.WireFrameFillMode ? LQ.drawElementsType(FQ, 0, QQ._linesIndexCount, this.forcedInstanceCount || wQ) : oQ ? LQ.drawArraysType(FQ, QQ.indexStart, QQ.indexCount, this.forcedInstanceCount || wQ) : LQ.drawElementsType(FQ, QQ.indexStart, QQ.indexCount, this.forcedInstanceCount || wQ), this
      }
      registerBeforeRender(QQ) {
        return this.onBeforeRenderObservable.add(QQ), this
      }
      unregisterBeforeRender(QQ) {
        return this.onBeforeRenderObservable.removeCallback(QQ), this
      }
      registerAfterRender(QQ) {
        return this.onAfterRenderObservable.add(QQ), this
      }
      unregisterAfterRender(QQ) {
        return this.onAfterRenderObservable.removeCallback(QQ), this
      }
      _getInstancesRenderList(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const wQ = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        if (this._instanceDataStorage.isFrozen) {
          if (FQ) return wQ.batchCacheReplacementModeInFrozenMode.hardwareInstancedRendering[QQ] = !1, wQ.batchCacheReplacementModeInFrozenMode.renderSelf[QQ] = !0, wQ.batchCacheReplacementModeInFrozenMode;
          if (wQ.previousBatch) return wQ.previousBatch
        }
        const LQ = this.iN(),
          qQ = LQ._isInIntermediateRendering(),
          oQ = qQ ? this._internalAbstractMeshDataInfo._onlyForInstancesIntermediate : this._internalAbstractMeshDataInfo._onlyForInstances,
          DQ = wQ.batchCache;
        if (DQ.mustReturn = !1, DQ.renderSelf[QQ] = FQ || !oQ && this.isEnabled() && this.isVisible, DQ.visibleInstances[QQ] = null, wQ.visibleInstances && !FQ) {
          const FQ = wQ.visibleInstances,
            oQ = LQ.getRenderId(),
            kQ = qQ ? FQ.intermediateDefaultRenderId : FQ.defaultRenderId;
          DQ.visibleInstances[QQ] = FQ[oQ], !DQ.visibleInstances[QQ] && kQ && (DQ.visibleInstances[QQ] = FQ[kQ])
        }
        return DQ.hardwareInstancedRendering[QQ] = !FQ && this._instanceDataStorage.hardwareInstancedRendering && null !== DQ.visibleInstances[QQ] && void 0 !== DQ.visibleInstances[QQ], wQ.previousBatch = DQ, DQ
      }
      _updateInstancedBuffers(QQ, FQ, wQ, LQ, qQ, oQ) {
        const DQ = FQ.visibleInstances[QQ._id],
          kQ = DQ ? DQ.length : 0,
          vQ = FQ.parent,
          mQ = this._instanceDataStorage;
        let uQ = vQ.instancesBuffer,
          HQ = vQ.instancesPreviousBuffer,
          bQ = 0,
          YQ = 0;
        const xQ = FQ.renderSelf[QQ._id],
          AQ = this._scene.floatingOriginOffset,
          tQ = !uQ || wQ !== vQ.instancesBufferSize || this._scene.needsPreviousWorldMatrices && !vQ.instancesPreviousBuffer;
        if (this._instanceDataStorage.manualUpdate || mQ.isFrozen && !tQ) YQ = (xQ ? 1 : 0) + kQ;
        else {
          const FQ = this.getWorldMatrix();
          if (xQ) {
            this._scene.needsPreviousWorldMatrices && (mQ.masterMeshPreviousWorldMatrix ? (mQ.masterMeshPreviousWorldMatrix.copyToArray(vQ.instancesPreviousData, bQ), mQ.masterMeshPreviousWorldMatrix.Qs(FQ)) : (mQ.masterMeshPreviousWorldMatrix = FQ.clone(), mQ.masterMeshPreviousWorldMatrix.copyToArray(vQ.instancesPreviousData, bQ))), FQ.copyToArray(vQ.instancesData, bQ);
            const QQ = FQ.RLQ();
            vQ.instancesData[bQ + 12] = QQ[12] - AQ.x, vQ.instancesData[bQ + 13] = QQ[13] - AQ.y, vQ.instancesData[bQ + 14] = QQ[14] - AQ.z, bQ += 16, YQ++
          }
          if (DQ) {
            if (yQ.INSTANCEDMESH_SORT_TRANSPARENT && this._scene.activeCamera && QQ.Ux()?.needAlphaBlendingForMesh(QQ.getRenderingMesh())) {
              const QQ = this._scene.activeCamera.globalPosition;
              for (let FQ = 0; FQ < DQ.length; FQ++) {
                const wQ = DQ[FQ];
                wQ._distanceToCamera = iQ.p.Distance(wQ.sK().BLQ.centerWorld, QQ)
              }
              DQ.sort(((QQ, FQ) => QQ._distanceToCamera > FQ._distanceToCamera ? -1 : QQ._distanceToCamera < FQ._distanceToCamera ? 1 : 0))
            }
            for (let QQ = 0; QQ < DQ.length; QQ++) {
              const FQ = DQ[QQ],
                wQ = FQ.getWorldMatrix();
              wQ.copyToArray(vQ.instancesData, bQ), this._scene.needsPreviousWorldMatrices && (FQ._previousWorldMatrix ? (FQ._previousWorldMatrix.copyToArray(vQ.instancesPreviousData, bQ), FQ._previousWorldMatrix.Qs(wQ)) : (FQ._previousWorldMatrix = wQ.clone(), FQ._previousWorldMatrix.copyToArray(vQ.instancesPreviousData, bQ)));
              const LQ = wQ.RLQ();
              vQ.instancesData[bQ + 12] = LQ[12] - AQ.x, vQ.instancesData[bQ + 13] = LQ[13] - AQ.y, vQ.instancesData[bQ + 14] = LQ[14] - AQ.z, bQ += 16, YQ++
            }
          }
        }
        if (tQ) {
          let QQ;
          if (uQ && uQ.dispose(), HQ && HQ.dispose(), uQ = new OQ.c(LQ, vQ.instancesData, !0, 16, !1, !0), vQ.instancesBuffer = uQ, this._userInstancedBuffersStorage || (this._userInstancedBuffersStorage = {
              data: {},
              vertexBuffers: {},
              strides: {},
              sizes: {},
              vertexArrayObjects: this.Wx().getCaps().vertexArrayObject ? {} : void 0
            }), this._instanceDataStorage.useMonoDataStorageRenderPass) QQ = this._userInstancedBuffersStorage.vertexBuffers;
          else {
            this._userInstancedBuffersStorage.renderPasses || (this._userInstancedBuffersStorage.renderPasses = {});
            const FQ = this._instanceDataStorage.engine.currentRenderPassId;
            QQ = this._userInstancedBuffersStorage.renderPasses[FQ], QQ || (this._userInstancedBuffersStorage.renderPasses[FQ] = QQ = {})
          }
          QQ.world0 = uQ.createVertexBuffer("world0", 0, 4), QQ.world1 = uQ.createVertexBuffer("world1", 4, 4), QQ.world2 = uQ.createVertexBuffer("world2", 8, 4), QQ.world3 = uQ.createVertexBuffer("world3", 12, 4), this._scene.needsPreviousWorldMatrices && (HQ = new OQ.c(LQ, vQ.instancesPreviousData, !0, 16, !1, !0), vQ.instancesPreviousBuffer = HQ, QQ.previousWorld0 = HQ.createVertexBuffer("previousWorld0", 0, 4), QQ.previousWorld1 = HQ.createVertexBuffer("previousWorld1", 4, 4), QQ.previousWorld2 = HQ.createVertexBuffer("previousWorld2", 8, 4), QQ.previousWorld3 = HQ.createVertexBuffer("previousWorld3", 12, 4)), this._invalidateInstanceVertexArrayObject()
        } else this._instanceDataStorage.isFrozen && !this._instanceDataStorage.forceMatrixUpdates || (uQ.updateDirectly(vQ.instancesData, 0, YQ), !this._scene.needsPreviousWorldMatrices || this._instanceDataStorage.manualUpdate && !this._instanceDataStorage.previousManualUpdate || HQ.updateDirectly(vQ.instancesPreviousData, 0, YQ));
        this._processInstancedBuffers(DQ, xQ), oQ && void 0 !== qQ && (this.iN()._activeIndices.addCount(QQ.indexCount * YQ, !1), LQ._currentDrawContext && (LQ._currentDrawContext.useInstancing = !0), this._bind(QQ, oQ, qQ), this._draw(QQ, qQ, YQ)), !this._scene.needsPreviousWorldMatrices || tQ || !this._instanceDataStorage.manualUpdate || this._instanceDataStorage.isFrozen && !this._instanceDataStorage.forceMatrixUpdates || this._instanceDataStorage.previousManualUpdate || HQ.updateDirectly(vQ.instancesData, 0, YQ)
      }
      _renderWithInstances(QQ, FQ, wQ, LQ, qQ) {
        const oQ = wQ.visibleInstances[QQ._id],
          DQ = oQ ? oQ.length : 0,
          kQ = wQ.parent,
          vQ = kQ.instancesBufferSize,
          mQ = 16 * (DQ + 1) * 4;
        for (; kQ.instancesBufferSize < mQ;) kQ.instancesBufferSize *= 2;
        return kQ.instancesData && vQ == kQ.instancesBufferSize || (kQ.instancesData = new Float32Array(kQ.instancesBufferSize / 4)), (this._scene.needsPreviousWorldMatrices && !kQ.instancesPreviousData || vQ != kQ.instancesBufferSize) && (kQ.instancesPreviousData = new Float32Array(kQ.instancesBufferSize / 4)), this._updateInstancedBuffers(QQ, wQ, vQ, qQ, FQ, LQ), qQ.unbindInstanceAttributes(), this
      }
      _renderWithThinInstances(QQ, FQ, wQ, LQ) {
        const qQ = this._thinInstanceDataStorage?.instancesCount ?? 0;
        this.iN()._activeIndices.addCount(QQ.indexCount * qQ, !1), LQ._currentDrawContext && (LQ._currentDrawContext.useInstancing = !0), this._bind(QQ, wQ, FQ), this._draw(QQ, FQ, qQ), this._scene.needsPreviousWorldMatrices && !this._thinInstanceDataStorage.previousMatrixData && this._thinInstanceDataStorage.matrixData && (this._thinInstanceDataStorage.previousMatrixBuffer ? this._thinInstanceDataStorage.previousMatrixBuffer.updateDirectly(this._thinInstanceDataStorage.matrixData, 0, qQ) : this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", this._thinInstanceDataStorage.matrixData, !1)), LQ.unbindInstanceAttributes()
      }
      _processInstancedBuffers(QQ, FQ) {}
      _processRendering(QQ, FQ, wQ, LQ, qQ, oQ, DQ, kQ) {
        const vQ = this.iN(),
          mQ = vQ.Wx();
        if (LQ = this._getRenderingFillMode(LQ), oQ && FQ.getRenderingMesh().hasThinInstances) return this._renderWithThinInstances(FQ, LQ, wQ, mQ), this;
        if (oQ) this._renderWithInstances(FQ, LQ, qQ, wQ, mQ);
        else {
          mQ._currentDrawContext && (mQ._currentDrawContext.useInstancing = !1);
          let wQ = 0;
          qQ.renderSelf[FQ._id] && (DQ && DQ(!1, QQ.getWorldMatrix(), kQ), wQ++, this._draw(FQ, LQ, this._instanceDataStorage.overridenInstanceCount));
          const oQ = qQ.visibleInstances[FQ._id];
          if (oQ) {
            const QQ = oQ.length;
            wQ += QQ;
            for (let wQ = 0; wQ < QQ; wQ++) {
              const QQ = oQ[wQ].getWorldMatrix();
              DQ && DQ(!0, QQ, kQ), this._draw(FQ, LQ)
            }
          }
          vQ._activeIndices.addCount(FQ.indexCount * wQ, !1)
        }
        return this
      }
      _disposeInstanceDataStorageRenderPass(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        QQ?.instancesBuffer && (FQ && QQ.instancesBuffer.dispose(), QQ.instancesBuffer = null), QQ?.instancesPreviousBuffer && (FQ && QQ.instancesPreviousBuffer.dispose(), QQ.instancesPreviousBuffer = null)
      }
      _rebuild() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const FQ in this._instanceDataStorage.renderPasses) {
          const wQ = this._instanceDataStorage.renderPasses[FQ];
          this._disposeInstanceDataStorageRenderPass(wQ, QQ)
        }
        if (this._disposeInstanceDataStorageRenderPass(this._instanceDataStorage.dataStorageRenderPass, QQ), this._userInstancedBuffersStorage) {
          for (const FQ in this._userInstancedBuffersStorage.vertexBuffers) {
            const wQ = this._userInstancedBuffersStorage.vertexBuffers[FQ];
            wQ && (QQ && wQ.dispose(), this._userInstancedBuffersStorage.vertexBuffers[FQ] = null)
          }
          this._userInstancedBuffersStorage.vertexArrayObjects && (this._userInstancedBuffersStorage.vertexArrayObjects = {})
        }
        this._internalMeshDataInfo._effectiveMaterial = null, super._rebuild(QQ)
      }
      _releaseRenderPassId(QQ) {
        const FQ = this._instanceDataStorage.renderPasses[QQ];
        if (FQ && (this._disposeInstanceDataStorageRenderPass(FQ, !0), delete this._instanceDataStorage.renderPasses[QQ]), this._userInstancedBuffersStorage?.renderPasses) {
          const FQ = this._userInstancedBuffersStorage.renderPasses[QQ];
          if (FQ)
            for (const QQ in FQ) FQ[QQ]?.dispose();
          delete this._userInstancedBuffersStorage.renderPasses[QQ]
        }
        const wQ = this._userInstancedBuffersStorage?.interleavedBuffers;
        wQ?.[QQ] && (wQ[QQ].buffer.dispose(), delete wQ[QQ])
      }
      _freeze() {
        if (this.lC) {
          for (let QQ = 0; QQ < this.lC.length; QQ++) this._getInstancesRenderList(QQ);
          this._internalMeshDataInfo._effectiveMaterial = null, this._instanceDataStorage.isFrozen = !0
        }
      }
      _unFreeze() {
        this._instanceDataStorage.isFrozen = !1;
        for (const QQ in this._instanceDataStorage.renderPasses) {
          this._instanceDataStorage.renderPasses[QQ].previousBatch = null
        }
        this._instanceDataStorage.dataStorageRenderPass && (this._instanceDataStorage.dataStorageRenderPass.previousBatch = null)
      }
      renderWithRenderPassId(QQ, FQ, wQ, LQ) {
        let qQ = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        const oQ = this._scene.Wx(),
          DQ = oQ.currentRenderPassId;
        if (void 0 !== QQ && (oQ.currentRenderPassId = QQ), LQ)(!qQ || qQ && LQ.isInFrustum(this._scene._frustumPlanes)) && this.render(LQ, !!FQ, wQ);
        else
          for (let kQ = 0; kQ < this.lC.length; kQ++) {
            const QQ = this.lC[kQ];
            (!qQ || qQ && QQ.isInFrustum(this._scene._frustumPlanes)) && this.render(QQ, !!FQ, wQ)
          }
        return void 0 !== QQ && (oQ.currentRenderPassId = DQ), this
      }
      directRender() {
        if (!this.lC) return this;
        for (const QQ of this.lC) this.render(QQ, !1);
        return this
      }
      render(QQ, FQ, wQ) {
        const LQ = this.iN(),
          qQ = LQ.Wx();
        this._internalAbstractMeshDataInfo._isActiveIntermediate ? this._internalAbstractMeshDataInfo._isActiveIntermediate = !1 : this._internalAbstractMeshDataInfo._isActive = !1;
        const oQ = LQ.activeCameras?.length ?? 0,
          DQ = oQ > 1 && LQ.activeCamera === LQ.activeCameras[0] || oQ <= 1,
          kQ = this._occlusionDataStorage && -1 !== this._occlusionDataStorage.occlusionForRenderPassId && this._occlusionDataStorage.occlusionForRenderPassId !== qQ.currentRenderPassId;
        if (DQ && this._checkOcclusionQuery(kQ) && !this._occlusionDataStorage.forceRenderingWhenOccluded) return this;
        const vQ = this._getInstancesRenderList(QQ._id, !!wQ);
        if (vQ.mustReturn) return this;
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        let mQ = 0,
          uQ = null;
        this.ignoreCameraMaxZ && LQ.activeCamera && !LQ._isInIntermediateRendering() && (mQ = LQ.activeCamera.maxZ, uQ = LQ.activeCamera, LQ.activeCamera.maxZ = 0, LQ.updateTransformMatrix(!0)), this._internalMeshDataInfo._onBeforeRenderObservable && this._internalMeshDataInfo._onBeforeRenderObservable.notifyObservers(this);
        const HQ = QQ.getRenderingMesh(),
          bQ = vQ.hardwareInstancedRendering[QQ._id] || HQ.hasThinInstances || !!this._userInstancedBuffersStorage && !QQ.getMesh()._internalAbstractMeshDataInfo._actAsRegularMesh,
          YQ = this._instanceDataStorage,
          xQ = QQ.Ux();
        if (!xQ) return uQ && (uQ.maxZ = mQ, LQ.updateTransformMatrix(!0)), this;
        if (YQ.isFrozen && this._internalMeshDataInfo._effectiveMaterial && this._internalMeshDataInfo._effectiveMaterial === xQ) {
          if (xQ._storeEffectOnSubMeshes && !QQ._drawWrapper?._wasPreviouslyReady || !xQ._storeEffectOnSubMeshes && !xQ._getDrawWrapper()._wasPreviouslyReady) return uQ && (uQ.maxZ = mQ, LQ.updateTransformMatrix(!0)), this
        } else {
          if (xQ._storeEffectOnSubMeshes) {
            if (!xQ.isReadyForSubMesh(this, QQ, bQ)) return uQ && (uQ.maxZ = mQ, LQ.updateTransformMatrix(!0)), this
          } else if (!xQ.isReady(this, bQ)) return uQ && (uQ.maxZ = mQ, LQ.updateTransformMatrix(!0)), this;
          this._internalMeshDataInfo._effectiveMaterial = xQ
        }
        if (FQ) {
          const QQ = this._internalMeshDataInfo._effectiveMaterial;
          if (1 === QQ.alphaModes.length) qQ.setAlphaMode(QQ.alphaMode);
          else
            for (let FQ = 0; FQ < QQ.alphaModes.length; FQ++) {
              const wQ = QQ.alphaModes[FQ];
              qQ.setAlphaMode(void 0 !== wQ ? wQ : 2, !1, FQ)
            }
        }
        let AQ;
        AQ = this._internalMeshDataInfo._effectiveMaterial._storeEffectOnSubMeshes ? QQ._drawWrapper : this._internalMeshDataInfo._effectiveMaterial._getDrawWrapper();
        const tQ = AQ?.effect ?? null;
        for (let SQ = 0, iQ = LQ._beforeRenderingMeshStage; SQ < iQ.length; SQ++) {
          iQ[SQ].action(this, QQ, vQ, tQ)
        }
        if (!AQ || !tQ) return uQ && (uQ.maxZ = mQ, LQ.updateTransformMatrix(!0)), this;
        const eQ = wQ || this;
        let MQ;
        if (!YQ.isFrozen && (this._internalMeshDataInfo._effectiveMaterial.backFaceCulling || null !== this._internalMeshDataInfo._effectiveMaterial.sideOrientation || this._internalMeshDataInfo._effectiveMaterial._twoSidedLighting)) {
          const QQ = eQ._getWorldMatrixDeterminant();
          MQ = this._internalMeshDataInfo._effectiveMaterial._getEffectiveOrientation(this), QQ < 0 && (MQ = MQ === NQ.d.ClockWiseSideOrientation ? NQ.d.CounterClockWiseSideOrientation : NQ.d.ClockWiseSideOrientation), this._internalMeshDataInfo._effectiveSideOrientation = MQ
        }
        const GQ = this._internalMeshDataInfo._effectiveMaterial._preBind(AQ, this._internalMeshDataInfo._effectiveSideOrientation);
        this._internalMeshDataInfo._effectiveMaterial.forceDepthWrite && qQ.setDepthWrite(!0);
        const pQ = this._internalMeshDataInfo._effectiveMaterial,
          cQ = pQ.fillMode;
        this._internalMeshDataInfo._onBeforeBindObservable && this._internalMeshDataInfo._onBeforeBindObservable.notifyObservers(this), bQ || this._bind(QQ, tQ, cQ, !1);
        const CQ = eQ.getWorldMatrix();
        pQ._storeEffectOnSubMeshes ? pQ.bindForSubMesh(CQ, this, QQ) : pQ.bind(CQ, this);
        try {
          TQ.b._BindAttachmentsForEffect(qQ, tQ) && (!pQ.backFaceCulling && pQ.separateCullingPass && (qQ.setState(!0, pQ.zOffset, !1, !GQ, pQ.cullBackFaces, pQ.stencil, pQ.zOffsetUnits), this._processRendering(this, QQ, tQ, cQ, vQ, bQ, this._onBeforeDraw, this._internalMeshDataInfo._effectiveMaterial), qQ.setState(!0, pQ.zOffset, !1, GQ, pQ.cullBackFaces, pQ.stencil, pQ.zOffsetUnits), this._internalMeshDataInfo._onBetweenPassObservable && this._internalMeshDataInfo._onBetweenPassObservable.notifyObservers(QQ)), this._processRendering(this, QQ, tQ, cQ, vQ, bQ, this._onBeforeDraw, this._internalMeshDataInfo._effectiveMaterial))
        } finally {
          TQ.b._RestoreAttachments(qQ)
        }
        this._internalMeshDataInfo._effectiveMaterial.unbind();
        for (let SQ = 0, iQ = LQ._afterRenderingMeshStage; SQ < iQ.length; SQ++) {
          iQ[SQ].action(this, QQ, vQ, tQ)
        }
        return this._internalMeshDataInfo._onAfterRenderObservable && this._internalMeshDataInfo._onAfterRenderObservable.notifyObservers(this), uQ && (uQ.maxZ = mQ, LQ.updateTransformMatrix(!0)), 2 !== LQ.performancePriority || YQ.isFrozen || this._freeze(), this
      }
      _renderRunFollower(QQ, FQ) {
        const wQ = this._scene,
          LQ = wQ._engine;
        if (LQ.isWebGPU || QQ._mesh !== this || 0 !== this.instances.length || this.render !== yQ.prototype.render) return !1;
        const qQ = QQ.Ux();
        if (!qQ || qQ !== wQ._cachedMaterial || void 0 === qQ._canBindRunFollower) return !1;
        const oQ = QQ._drawWrapper,
          DQ = oQ?.effect;
        if (!DQ || DQ !== wQ._cachedEffect || this.visibility !== wQ._cachedVisibility || oQ._forceRebindOnNextCall) return !1;
        const kQ = this.hasThinInstances;
        if (!kQ && this._userInstancedBuffersStorage) return !1;
        if (!oQ._wasPreviouslyReady || oQ._wasPreviouslyUsingInstances !== kQ) return !1;
        const vQ = this._internalMeshDataInfo;
        if (this.ignoreCameraMaxZ || this.morphTargetManager || this._instanceDataStorage.isFrozen || wQ._isInIntermediateRendering() || 0 !== wQ._beforeRenderingMeshStage.length || 0 !== wQ._afterRenderingMeshStage.length || vQ._onBeforeRenderObservable?.hasObservers() || vQ._onBeforeBindObservable?.hasObservers() || vQ._onAfterRenderObservable?.hasObservers()) return !1;
        const mQ = this.occlusionType;
        if (void 0 !== mQ && mQ !== IQ.c.OCCLUSION_TYPE_NONE || !qQ._canBindRunFollower(wQ, LQ, this, QQ, DQ)) return !1;
        const uQ = this._internalAbstractMeshDataInfo,
          HQ = uQ._isActiveIntermediate;
        HQ ? uQ._isActiveIntermediate = !1 : uQ._isActive = !1;
        const bQ = wQ.activeCameras?.length ?? 0;
        (bQ > 1 && wQ.activeCamera === wQ.activeCameras[0] || bQ <= 1) && this._checkOcclusionQuery(!1);
        const YQ = this._getInstancesRenderList(QQ._id);
        if (YQ.mustReturn) return !0;
        if (!kQ && !YQ.renderSelf[QQ._id]) return HQ ? uQ._isActiveIntermediate = !0 : uQ._isActive = !0, !1;
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return !0;
        if (vQ._effectiveMaterial = qQ, FQ)
          if (1 === qQ.alphaModes.length) LQ.setAlphaMode(qQ.alphaMode);
          else
            for (let AQ = 0; AQ < qQ.alphaModes.length; AQ++) {
              const QQ = qQ.alphaModes[AQ];
              LQ.setAlphaMode(void 0 !== QQ ? QQ : 2, !1, AQ)
            }
        if (qQ.backFaceCulling || null !== qQ.sideOrientation || qQ._twoSidedLighting) {
          const QQ = this._getWorldMatrixDeterminant();
          let FQ = qQ._getEffectiveOrientation(this);
          QQ < 0 && (FQ = FQ === NQ.d.ClockWiseSideOrientation ? NQ.d.CounterClockWiseSideOrientation : NQ.d.ClockWiseSideOrientation), vQ._effectiveSideOrientation = FQ
        }
        qQ._preBind(oQ, vQ._effectiveSideOrientation), qQ.forceDepthWrite && LQ.setDepthWrite(!0);
        const xQ = qQ.fillMode;
        return kQ || this._bind(QQ, DQ, xQ, !1), qQ._bindRunFollower(this.getWorldMatrix(), this, QQ, DQ), this._processRendering(this, QQ, DQ, xQ, YQ, kQ, this._onBeforeDraw, qQ), qQ.unbind(), 2 === wQ.performancePriority && this._freeze(), !0
      }
      cleanMatrixWeights() {
        this.isVerticesDataPresent(OQ.h.MatricesWeightsKind) && (this.isVerticesDataPresent(OQ.h.MatricesWeightsExtraKind) ? this._normalizeSkinWeightsAndExtra() : this._normalizeSkinFourWeights())
      }
      _normalizeSkinFourWeights() {
        const QQ = this.getVerticesData(OQ.h.MatricesWeightsKind),
          FQ = QQ.length;
        for (let wQ = 0; wQ < FQ; wQ += 4) {
          const FQ = QQ[wQ] + QQ[wQ + 1] + QQ[wQ + 2] + QQ[wQ + 3];
          if (0 === FQ) QQ[wQ] = 1;
          else {
            const LQ = 1 / FQ;
            QQ[wQ] *= LQ, QQ[wQ + 1] *= LQ, QQ[wQ + 2] *= LQ, QQ[wQ + 3] *= LQ
          }
        }
        this.setVerticesData(OQ.h.MatricesWeightsKind, QQ)
      }
      _normalizeSkinWeightsAndExtra() {
        const QQ = this.getVerticesData(OQ.h.MatricesWeightsExtraKind),
          FQ = this.getVerticesData(OQ.h.MatricesWeightsKind),
          wQ = FQ.length;
        for (let LQ = 0; LQ < wQ; LQ += 4) {
          let wQ = FQ[LQ] + FQ[LQ + 1] + FQ[LQ + 2] + FQ[LQ + 3];
          if (wQ += QQ[LQ] + QQ[LQ + 1] + QQ[LQ + 2] + QQ[LQ + 3], 0 === wQ) FQ[LQ] = 1;
          else {
            const qQ = 1 / wQ;
            FQ[LQ] *= qQ, FQ[LQ + 1] *= qQ, FQ[LQ + 2] *= qQ, FQ[LQ + 3] *= qQ, QQ[LQ] *= qQ, QQ[LQ + 1] *= qQ, QQ[LQ + 2] *= qQ, QQ[LQ + 3] *= qQ
          }
        }
        this.setVerticesData(OQ.h.MatricesWeightsKind, FQ), this.setVerticesData(OQ.h.MatricesWeightsKind, QQ)
      }
      validateSkinning() {
        const QQ = this.getVerticesData(OQ.h.MatricesWeightsExtraKind),
          FQ = this.getVerticesData(OQ.h.MatricesWeightsKind);
        if (null === FQ || null == this.skeleton) return {
          skinned: !1,
          valid: !0,
          hY: "not skinned"
        };
        const wQ = FQ.length;
        let LQ = 0,
          qQ = 0,
          oQ = 0,
          DQ = 0;
        const kQ = null === QQ ? 4 : 8,
          vQ = [];
        for (let YQ = 0; YQ <= kQ; YQ++) vQ[YQ] = 0;
        for (let YQ = 0; YQ < wQ; YQ += 4) {
          let wQ = FQ[YQ],
            mQ = wQ,
            uQ = 0 === mQ ? 0 : 1;
          for (let qQ = 1; qQ < kQ; qQ++) {
            const oQ = qQ < 4 ? FQ[YQ + qQ] : QQ[YQ + qQ - 4];
            oQ > wQ && LQ++, 0 !== oQ && uQ++, mQ += oQ, wQ = oQ
          }
          if (vQ[uQ]++, uQ > oQ && (oQ = uQ), 0 === mQ) qQ++;
          else {
            const wQ = 1 / mQ;
            let LQ = 0;
            for (let qQ = 0; qQ < kQ; qQ++) LQ += qQ < 4 ? Math.abs(FQ[YQ + qQ] - FQ[YQ + qQ] * wQ) : Math.abs(QQ[YQ + qQ - 4] - QQ[YQ + qQ - 4] * wQ);
            LQ > .001 && DQ++
          }
        }
        const mQ = this.skeleton.bones.length,
          uQ = this.getVerticesData(OQ.h.MatricesIndicesKind),
          HQ = this.getVerticesData(OQ.h.MatricesIndicesExtraKind);
        let bQ = 0;
        for (let YQ = 0; YQ < wQ; YQ += 4)
          for (let QQ = 0; QQ < kQ; QQ++) {
            const FQ = QQ < 4 ? uQ[YQ + QQ] : HQ[YQ + QQ - 4];
            (FQ >= mQ || FQ < 0) && bQ++
          }
        return {
          skinned: !0,
          valid: 0 === qQ && 0 === DQ && 0 === bQ,
          hY: "Number of Weights = " + wQ / 4 + "\nMaximum influences = " + oQ + "\nMissing Weights = " + qQ + "\nNot Sorted = " + LQ + "\nNot Normalized = " + DQ + "\nWeightCounts = [" + vQ + "]\nNumber of bones = " + mQ + "\nBad Bone Indices = " + bQ
        }
      }
      _checkDelayState() {
        const QQ = this.iN();
        return this._geometry ? this._geometry.load(QQ) : 4 === this.delayLoadState && (this.delayLoadState = 2, this._queueLoad(QQ)), this
      }
      _queueLoad(QQ) {
        QQ.addPendingData(this);
        const FQ = -1 !== this.delayLoadingFile.indexOf(".babylonbinarymeshdata");
        return (async () => {
          try {
            const wQ = await QQ._loadDelayedFileAsync(this.delayLoadingFile, FQ, !0);
            wQ instanceof ArrayBuffer ? this._delayLoadingFunction(wQ, this) : this._delayLoadingFunction(JSON.parse(wQ), this);
            for (const QQ of this.instances) QQ.refreshBoundingInfo(), QQ._syncSubMeshes();
            this.delayLoadState = 1, QQ.removePendingData(this)
          } catch (wQ) {
            QQ.removePendingData(this), QQ.vW || jQ.c.Error(`Unable to delay load geometry data for mesh "${this.name}" from "${this.delayLoadingFile}": ${wQ}`)
          }
        })(), this
      }
      isInFrustum(QQ) {
        return 2 !== this.delayLoadState && (!!super.isInFrustum(QQ) && (this._checkDelayState(), !0))
      }
      setMaterialById(QQ) {
        const FQ = this.iN().materials;
        let wQ;
        for (wQ = FQ.length - 1; wQ > -1; wQ--)
          if (FQ[wQ].id === QQ) return this.material = FQ[wQ], this;
        const LQ = this.iN().multiMaterials;
        for (wQ = LQ.length - 1; wQ > -1; wQ--)
          if (LQ[wQ].id === QQ) return this.material = LQ[wQ], this;
        return this
      }
      getAnimatables() {
        const QQ = [];
        return this.material && QQ.push(this.material), this.skeleton && QQ.push(this.skeleton), QQ
      }
      bakeTransformIntoVertices(QQ) {
        if (!this.isVerticesDataPresent(OQ.h.PositionKind)) return this;
        const FQ = this.lC.splice(0);
        this._resetPointsArrayCache();
        let wQ = this.getVerticesData(OQ.h.PositionKind);
        const LQ = iQ.p.Zero();
        let qQ;
        for (qQ = 0; qQ < wQ.length; qQ += 3) iQ.p.TransformCoordinatesFromFloatsToRef(wQ[qQ], wQ[qQ + 1], wQ[qQ + 2], QQ, LQ).toArray(wQ, qQ);
        if (this.setVerticesData(OQ.h.PositionKind, wQ, this.getVertexBuffer(OQ.h.PositionKind).isUpdatable()), this.isVerticesDataPresent(OQ.h.NormalKind)) {
          for (wQ = this.getVerticesData(OQ.h.NormalKind), qQ = 0; qQ < wQ.length; qQ += 3) iQ.p.TransformNormalFromFloatsToRef(wQ[qQ], wQ[qQ + 1], wQ[qQ + 2], QQ, LQ).normalize().toArray(wQ, qQ);
          this.setVerticesData(OQ.h.NormalKind, wQ, this.getVertexBuffer(OQ.h.NormalKind).isUpdatable())
        }
        if (this.isVerticesDataPresent(OQ.h.TangentKind)) {
          for (wQ = this.getVerticesData(OQ.h.TangentKind), qQ = 0; qQ < wQ.length; qQ += 4) iQ.p.TransformNormalFromFloatsToRef(wQ[qQ], wQ[qQ + 1], wQ[qQ + 2], QQ, LQ).normalize().toArray(wQ, qQ);
          this.setVerticesData(OQ.h.TangentKind, wQ, this.getVertexBuffer(OQ.h.TangentKind).isUpdatable())
        }
        return QQ.determinant() < 0 && this.flipFaces(), this.releaseSubMeshes(), this.lC = FQ, this
      }
      bakeCurrentTransformIntoVertices() {
        let QQ = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] && this.makeGeometryUnique(), this.bakeTransformIntoVertices(this.computeWorldMatrix(!0)), this.resetLocalMatrix(QQ), this
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
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          wQ = arguments.length > 2 ? arguments[2] : void 0,
          LQ = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        if (FQ && void 0 === FQ._addToSceneRootNodes) {
          const wQ = FQ;
          return ZQ.source = this, ZQ.doNotCloneChildren = wQ.doNotCloneChildren, ZQ.clonePhysicsImpostor = wQ.clonePhysicsImpostor, ZQ.cloneThinInstances = wQ.cloneThinInstances, new yQ(QQ, this.iN(), ZQ)
        }
        return new yQ(QQ, this.iN(), FQ, this, wQ, LQ)
      }
      dispose(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.morphTargetManager = null, this._geometry && this._geometry.releaseForMesh(this, !0);
        const wQ = this._internalMeshDataInfo;
        if (wQ._onBeforeDrawObservable && wQ._onBeforeDrawObservable.clear(), wQ._onBeforeBindObservable && wQ._onBeforeBindObservable.clear(), wQ._onBeforeRenderObservable && wQ._onBeforeRenderObservable.clear(), wQ._onAfterRenderObservable && wQ._onAfterRenderObservable.clear(), wQ._onBetweenPassObservable && wQ._onBetweenPassObservable.clear(), this._scene.useClonedMeshMap) {
          if (wQ.meshMap)
            for (const QQ in wQ.meshMap) {
              const FQ = wQ.meshMap[QQ];
              FQ && (FQ._internalMeshDataInfo._source = null, wQ.meshMap[QQ] = void 0)
            }
          wQ._source && wQ._source._internalMeshDataInfo.meshMap && (wQ._source._internalMeshDataInfo.meshMap[this.uniqueId] = void 0)
        } else {
          const QQ = this.iN().meshes;
          for (const FQ of QQ) {
            const QQ = FQ;
            QQ._internalMeshDataInfo && QQ._internalMeshDataInfo._source && QQ._internalMeshDataInfo._source === this && (QQ._internalMeshDataInfo._source = null)
          }
        }
        wQ._source = null, this._disposeInstanceSpecificData(), this._disposeThinInstanceSpecificData(), this._internalMeshDataInfo._checkReadinessObserver && this._scene.onBeforeRenderObservable.remove(this._internalMeshDataInfo._checkReadinessObserver), super.dispose(QQ, FQ)
      }
      _disposeInstanceSpecificData() {}
      _disposeThinInstanceSpecificData() {}
      _invalidateInstanceVertexArrayObject() {}
      applyDisplacementMap(QQ, FQ, wQ, LQ, qQ, oQ) {
        let DQ = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          kQ = arguments.length > 7 ? arguments[7] : void 0;
        const vQ = this.iN();
        return (0, GQ.p)(QQ, (QQ => {
          const kQ = QQ.width,
            vQ = QQ.height,
            mQ = this.Wx().createCanvas(kQ, vQ).getContext("2d");
          mQ.drawImage(QQ, 0, 0);
          const uQ = mQ.getImageData(0, 0, kQ, vQ).data;
          this.applyDisplacementMapFromBuffer(uQ, kQ, vQ, FQ, wQ, qQ, oQ, DQ), LQ && LQ(this)
        }), kQ || (() => {}), vQ.offlineProvider), this
      }
      applyDisplacementMapFromBuffer(QQ, FQ, wQ, LQ, qQ, oQ, DQ) {
        let kQ = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
        if (!this.isVerticesDataPresent(OQ.h.PositionKind) || !this.isVerticesDataPresent(OQ.h.NormalKind) || !this.isVerticesDataPresent(OQ.h.UVKind)) return jQ.c.Warn("Cannot call applyDisplacementMap: Given mesh is not complete. Position, Normal or UV are missing"), this;
        const vQ = this.getVerticesData(OQ.h.PositionKind, !0, !0),
          mQ = this.getVerticesData(OQ.h.NormalKind),
          uQ = this.getVerticesData(OQ.h.UVKind);
        let HQ = iQ.p.Zero();
        const bQ = iQ.p.Zero(),
          YQ = iQ.n.Zero();
        oQ = oQ || iQ.n.Zero(), DQ = DQ || new iQ.n(1, 1);
        for (let xQ = 0; xQ < vQ.length; xQ += 3) {
          iQ.p.FromArrayToRef(vQ, xQ, HQ), iQ.p.FromArrayToRef(mQ, xQ, bQ), iQ.n.FromArrayToRef(uQ, xQ / 3 * 2, YQ);
          const kQ = 4 * ((Math.abs(YQ.x * DQ.x + oQ.x % 1) * (FQ - 1) % FQ | 0) + (Math.abs(YQ.y * DQ.y + oQ.y % 1) * (wQ - 1) % wQ | 0) * FQ),
            AQ = .3 * (QQ[kQ] / 255) + .59 * (QQ[kQ + 1] / 255) + .11 * (QQ[kQ + 2] / 255);
          bQ.normalize(), bQ.scaleInPlace(LQ + (qQ - LQ) * AQ), HQ = HQ.add(bQ), HQ.toArray(vQ, xQ)
        }
        return sQ.c.ComputeNormals(vQ, this.OLQ(), mQ), kQ ? (this.setVerticesData(OQ.h.PositionKind, vQ), this.setVerticesData(OQ.h.NormalKind, mQ), this.setVerticesData(OQ.h.UVKind, uQ)) : (this.updateVerticesData(OQ.h.PositionKind, vQ), this.updateVerticesData(OQ.h.NormalKind, mQ)), this
      }
      _getFlattenedNormals(QQ, FQ) {
        const wQ = new Float32Array(3 * QQ.length);
        let LQ = 0;
        const qQ = this.sideOrientation === (this._scene.useRightHandedSystem ? 1 : 0);
        for (let oQ = 0; oQ < QQ.length; oQ += 3) {
          const DQ = iQ.p.FromArray(FQ, 3 * QQ[oQ]),
            kQ = iQ.p.FromArray(FQ, 3 * QQ[oQ + 1]),
            vQ = iQ.p.FromArray(FQ, 3 * QQ[oQ + 2]),
            mQ = DQ.subtract(kQ),
            uQ = vQ.subtract(kQ),
            HQ = iQ.p.Normalize(iQ.p.Cross(mQ, uQ));
          qQ && HQ.scaleInPlace(-1);
          for (let QQ = 0; QQ < 3; QQ++) wQ[LQ++] = HQ.x, wQ[LQ++] = HQ.y, wQ[LQ++] = HQ.z
        }
        return wQ
      }
      _convertToUnIndexedMesh() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const FQ = this.getVerticesDataKinds().filter((QQ => !this.getVertexBuffer(QQ)?.getIsInstanced())),
          wQ = this.OLQ(!1, !0),
          LQ = {},
          qQ = (QQ, FQ) => {
            const LQ = new Float32Array(wQ.length * FQ);
            let qQ = 0;
            for (let oQ = 0; oQ < wQ.length; oQ++)
              for (let DQ = 0; DQ < FQ; DQ++) LQ[qQ++] = QQ[wQ[oQ] * FQ + DQ];
            return LQ
          },
          oQ = this.sK(),
          DQ = this.geometry ? this.lC.slice(0) : [];
        for (const kQ of FQ) LQ[kQ] = this.getVerticesData(kQ);
        for (const kQ of FQ) {
          const FQ = this.getVertexBuffer(kQ),
            oQ = FQ.getSize();
          if (QQ && kQ === OQ.h.NormalKind) {
            const QQ = this._getFlattenedNormals(wQ, LQ[OQ.h.PositionKind]);
            this.setVerticesData(OQ.h.NormalKind, QQ, FQ.isUpdatable(), oQ)
          } else this.setVerticesData(kQ, qQ(LQ[kQ], oQ), FQ.isUpdatable(), oQ)
        }
        if (this.morphTargetManager) {
          for (let FQ = 0; FQ < this.morphTargetManager.numTargets; FQ++) {
            const LQ = this.morphTargetManager.getTarget(FQ),
              oQ = LQ.getPositions();
            LQ.wkQ(qQ(oQ, 3));
            const DQ = LQ.getNormals();
            DQ && LQ.setNormals(QQ ? this._getFlattenedNormals(wQ, oQ) : qQ(DQ, 3));
            const kQ = LQ.getTangents();
            kQ && LQ.setTangents(qQ(kQ, 3));
            const vQ = LQ.getUVs();
            vQ && LQ.setUVs(qQ(vQ, 2));
            const mQ = LQ.getColors();
            mQ && LQ.setColors(qQ(mQ, 4))
          }
          this.morphTargetManager.synchronize()
        }
        for (let kQ = 0; kQ < wQ.length; kQ++) wQ[kQ] = kQ;
        this.setIndices(wQ), this._unIndexed = !0, this.releaseSubMeshes();
        for (const kQ of DQ) {
          const QQ = kQ.sK();
          UQ.c.AddToMesh(kQ.materialIndex, kQ.indexStart, kQ.indexCount, kQ.indexStart, kQ.indexCount, this).setBoundingInfo(QQ)
        }
        return this.setBoundingInfo(oQ), this.synchronizeInstances(), this
      }
      convertToFlatShadedMesh() {
        return this._convertToUnIndexedMesh(!0)
      }
      convertToUnIndexedMesh() {
        return this._convertToUnIndexedMesh()
      }
      flipFaces() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const FQ = sQ.c.ExtractFromMesh(this);
        let wQ;
        if (QQ && this.isVerticesDataPresent(OQ.h.NormalKind) && FQ.normals) {
          for (wQ = 0; wQ < FQ.normals.length; wQ++) FQ.normals[wQ] *= -1;
          this.setVerticesData(OQ.h.NormalKind, FQ.normals, this.isVertexBufferUpdatable(OQ.h.NormalKind))
        }
        if (FQ.indices) {
          let QQ;
          for (wQ = 0; wQ < FQ.indices.length; wQ += 3) QQ = FQ.indices[wQ + 1], FQ.indices[wQ + 1] = FQ.indices[wQ + 2], FQ.indices[wQ + 2] = QQ;
          this.setIndices(FQ.indices, null, this.isVertexBufferUpdatable(OQ.h.PositionKind), !0)
        }
        return this
      }
      increaseVertices() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        const FQ = sQ.c.ExtractFromMesh(this),
          wQ = FQ.indices && !Array.isArray(FQ.indices) && Array.from ? Array.from(FQ.indices) : FQ.indices,
          LQ = FQ.positions && !Array.isArray(FQ.positions) && Array.from ? Array.from(FQ.positions) : FQ.positions,
          qQ = FQ.uvs && !Array.isArray(FQ.uvs) && Array.from ? Array.from(FQ.uvs) : FQ.uvs,
          oQ = FQ.normals && !Array.isArray(FQ.normals) && Array.from ? Array.from(FQ.normals) : FQ.normals;
        if (wQ && LQ) {
          FQ.indices = wQ, FQ.positions = LQ, qQ && (FQ.uvs = qQ), oQ && (FQ.normals = oQ);
          const DQ = QQ + 1,
            kQ = [];
          for (let QQ = 0; QQ < DQ + 1; QQ++) kQ[QQ] = [];
          let vQ, mQ;
          const uQ = new iQ.p(0, 0, 0),
            HQ = new iQ.p(0, 0, 0),
            bQ = new iQ.n(0, 0),
            YQ = [],
            xQ = [],
            AQ = [];
          let tQ, eQ, MQ, GQ = LQ.length;
          qQ && (eQ = qQ.length), oQ && (MQ = oQ.length);
          for (let QQ = 0; QQ < wQ.length; QQ += 3) {
            xQ[0] = wQ[QQ], xQ[1] = wQ[QQ + 1], xQ[2] = wQ[QQ + 2];
            for (let QQ = 0; QQ < 3; QQ++)
              if (vQ = xQ[QQ], mQ = xQ[(QQ + 1) % 3], void 0 === AQ[vQ] && void 0 === AQ[mQ] ? (AQ[vQ] = [], AQ[mQ] = []) : (void 0 === AQ[vQ] && (AQ[vQ] = []), void 0 === AQ[mQ] && (AQ[mQ] = [])), void 0 === AQ[vQ][mQ] && void 0 === AQ[mQ][vQ]) {
                AQ[vQ][mQ] = [], uQ.x = (LQ[3 * mQ] - LQ[3 * vQ]) / DQ, uQ.y = (LQ[3 * mQ + 1] - LQ[3 * vQ + 1]) / DQ, uQ.z = (LQ[3 * mQ + 2] - LQ[3 * vQ + 2]) / DQ, oQ && (HQ.x = (oQ[3 * mQ] - oQ[3 * vQ]) / DQ, HQ.y = (oQ[3 * mQ + 1] - oQ[3 * vQ + 1]) / DQ, HQ.z = (oQ[3 * mQ + 2] - oQ[3 * vQ + 2]) / DQ), qQ && (bQ.x = (qQ[2 * mQ] - qQ[2 * vQ]) / DQ, bQ.y = (qQ[2 * mQ + 1] - qQ[2 * vQ + 1]) / DQ), AQ[vQ][mQ].push(vQ);
                for (let QQ = 1; QQ < DQ; QQ++) AQ[vQ][mQ].push(LQ.length / 3), LQ[GQ++] = LQ[3 * vQ] + QQ * uQ.x, LQ[GQ++] = LQ[3 * vQ + 1] + QQ * uQ.y, LQ[GQ++] = LQ[3 * vQ + 2] + QQ * uQ.z, oQ && (oQ[MQ++] = oQ[3 * vQ] + QQ * HQ.x, oQ[MQ++] = oQ[3 * vQ + 1] + QQ * HQ.y, oQ[MQ++] = oQ[3 * vQ + 2] + QQ * HQ.z), qQ && (qQ[eQ++] = qQ[2 * vQ] + QQ * bQ.x, qQ[eQ++] = qQ[2 * vQ + 1] + QQ * bQ.y);
                AQ[vQ][mQ].push(mQ), AQ[mQ][vQ] = [], tQ = AQ[vQ][mQ].length;
                for (let QQ = 0; QQ < tQ; QQ++) AQ[mQ][vQ][QQ] = AQ[vQ][mQ][tQ - 1 - QQ]
              } kQ[0][0] = wQ[QQ], kQ[1][0] = AQ[wQ[QQ]][wQ[QQ + 1]][1], kQ[1][1] = AQ[wQ[QQ]][wQ[QQ + 2]][1];
            for (let FQ = 2; FQ < DQ; FQ++) {
              kQ[FQ][0] = AQ[wQ[QQ]][wQ[QQ + 1]][FQ], kQ[FQ][FQ] = AQ[wQ[QQ]][wQ[QQ + 2]][FQ], uQ.x = (LQ[3 * kQ[FQ][FQ]] - LQ[3 * kQ[FQ][0]]) / FQ, uQ.y = (LQ[3 * kQ[FQ][FQ] + 1] - LQ[3 * kQ[FQ][0] + 1]) / FQ, uQ.z = (LQ[3 * kQ[FQ][FQ] + 2] - LQ[3 * kQ[FQ][0] + 2]) / FQ, oQ && (HQ.x = (oQ[3 * kQ[FQ][FQ]] - oQ[3 * kQ[FQ][0]]) / FQ, HQ.y = (oQ[3 * kQ[FQ][FQ] + 1] - oQ[3 * kQ[FQ][0] + 1]) / FQ, HQ.z = (oQ[3 * kQ[FQ][FQ] + 2] - oQ[3 * kQ[FQ][0] + 2]) / FQ), qQ && (bQ.x = (qQ[2 * kQ[FQ][FQ]] - qQ[2 * kQ[FQ][0]]) / FQ, bQ.y = (qQ[2 * kQ[FQ][FQ] + 1] - qQ[2 * kQ[FQ][0] + 1]) / FQ);
              for (let QQ = 1; QQ < FQ; QQ++) kQ[FQ][QQ] = LQ.length / 3, LQ[GQ++] = LQ[3 * kQ[FQ][0]] + QQ * uQ.x, LQ[GQ++] = LQ[3 * kQ[FQ][0] + 1] + QQ * uQ.y, LQ[GQ++] = LQ[3 * kQ[FQ][0] + 2] + QQ * uQ.z, oQ && (oQ[MQ++] = oQ[3 * kQ[FQ][0]] + QQ * HQ.x, oQ[MQ++] = oQ[3 * kQ[FQ][0] + 1] + QQ * HQ.y, oQ[MQ++] = oQ[3 * kQ[FQ][0] + 2] + QQ * HQ.z), qQ && (qQ[eQ++] = qQ[2 * kQ[FQ][0]] + QQ * bQ.x, qQ[eQ++] = qQ[2 * kQ[FQ][0] + 1] + QQ * bQ.y)
            }
            kQ[DQ] = AQ[wQ[QQ + 1]][wQ[QQ + 2]], YQ.push(kQ[0][0], kQ[1][0], kQ[1][1]);
            for (let QQ = 1; QQ < DQ; QQ++) {
              let FQ;
              for (FQ = 0; FQ < QQ; FQ++) YQ.push(kQ[QQ][FQ], kQ[QQ + 1][FQ], kQ[QQ + 1][FQ + 1]), YQ.push(kQ[QQ][FQ], kQ[QQ + 1][FQ + 1], kQ[QQ][FQ + 1]);
              YQ.push(kQ[QQ][FQ], kQ[QQ + 1][FQ], kQ[QQ + 1][FQ + 1])
            }
          }
          FQ.indices = YQ, FQ.applyToMesh(this, this.isVertexBufferUpdatable(OQ.h.PositionKind))
        } else jQ.c.Warn("Couldn't increase number of vertices : VertexData must contain at least indices and positions")
      }
      forceSharedVertices() {
        const QQ = sQ.c.ExtractFromMesh(this),
          FQ = QQ.uvs,
          wQ = QQ.indices,
          LQ = QQ.positions,
          qQ = QQ.colors,
          oQ = QQ.matricesIndices,
          DQ = QQ.matricesWeights,
          kQ = QQ.matricesIndicesExtra,
          vQ = QQ.matricesWeightsExtra;
        if (void 0 === wQ || void 0 === LQ || null === wQ || null === LQ) jQ.c.Warn("VertexData contains empty entries");
        else {
          const mQ = [],
            uQ = [],
            HQ = [],
            bQ = [],
            YQ = [],
            xQ = [],
            AQ = [],
            tQ = [];
          let eQ, MQ = 0;
          const GQ = {};
          let pQ, cQ;
          for (let QQ = 0; QQ < wQ.length; QQ += 3) {
            cQ = [wQ[QQ], wQ[QQ + 1], wQ[QQ + 2]], eQ = [];
            for (let QQ = 0; QQ < 3; QQ++) {
              eQ[QQ] = "";
              for (let FQ = 0; FQ < 3; FQ++) Math.abs(LQ[3 * cQ[QQ] + FQ]) < 1e-8 && (LQ[3 * cQ[QQ] + FQ] = 0), eQ[QQ] += LQ[3 * cQ[QQ] + FQ] + "|"
            }
            if (eQ[0] != eQ[1] && eQ[0] != eQ[2] && eQ[1] != eQ[2])
              for (let QQ = 0; QQ < 3; QQ++) {
                if (pQ = GQ[eQ[QQ]], void 0 === pQ) {
                  GQ[eQ[QQ]] = MQ, pQ = MQ++;
                  for (let FQ = 0; FQ < 3; FQ++) mQ.push(LQ[3 * cQ[QQ] + FQ]);
                  if (null !== qQ && void 0 !== qQ)
                    for (let FQ = 0; FQ < 4; FQ++) bQ.push(qQ[4 * cQ[QQ] + FQ]);
                  if (null !== FQ && void 0 !== FQ)
                    for (let wQ = 0; wQ < 2; wQ++) HQ.push(FQ[2 * cQ[QQ] + wQ]);
                  if (null !== oQ && void 0 !== oQ)
                    for (let FQ = 0; FQ < 4; FQ++) YQ.push(oQ[4 * cQ[QQ] + FQ]);
                  if (null !== DQ && void 0 !== DQ)
                    for (let FQ = 0; FQ < 4; FQ++) xQ.push(DQ[4 * cQ[QQ] + FQ]);
                  if (null !== kQ && void 0 !== kQ)
                    for (let FQ = 0; FQ < 4; FQ++) AQ.push(kQ[4 * cQ[QQ] + FQ]);
                  if (null !== vQ && void 0 !== vQ)
                    for (let FQ = 0; FQ < 4; FQ++) tQ.push(vQ[4 * cQ[QQ] + FQ])
                }
                uQ.push(pQ)
              }
          }
          const CQ = [];
          sQ.c.ComputeNormals(mQ, uQ, CQ), QQ.positions = mQ, QQ.indices = uQ, QQ.normals = CQ, null !== FQ && void 0 !== FQ && (QQ.uvs = HQ), null !== qQ && void 0 !== qQ && (QQ.colors = bQ), null !== oQ && void 0 !== oQ && (QQ.matricesIndices = YQ), null !== DQ && void 0 !== DQ && (QQ.matricesWeights = xQ), null !== kQ && void 0 !== kQ && (QQ.matricesIndicesExtra = AQ), null !== DQ && void 0 !== DQ && (QQ.matricesWeightsExtra = tQ), QQ.applyToMesh(this, this.isVertexBufferUpdatable(OQ.h.PositionKind))
        }
      }
      static _instancedMeshFactory(QQ, FQ) {
        throw (0, XQ.k)("InstancedMesh")
      }
      static _PhysicsImpostorParser(QQ, FQ, wQ) {
        throw (0, XQ.k)("PhysicsImpostor")
      }
      createInstance(QQ) {
        const FQ = yQ._instancedMeshFactory(QQ, this);
        return FQ.parent = this.parent, FQ
      }
      synchronizeInstances() {
        for (let QQ = 0; QQ < this.instances.length; QQ++) {
          this.instances[QQ]._syncSubMeshes()
        }
        return this
      }
      optimizeIndices(QQ) {
        const FQ = this.OLQ(),
          wQ = this.getVerticesData(OQ.h.PositionKind);
        if (!wQ || !FQ) return this;
        const LQ = [];
        for (let oQ = 0; oQ < wQ.length; oQ += 3) LQ.push(iQ.p.FromArray(wQ, oQ));
        const qQ = [];
        return MQ.d.SyncAsyncForLoop(LQ.length, 40, (QQ => {
          const FQ = LQ.length - 1 - QQ,
            wQ = LQ[FQ];
          for (let oQ = 0; oQ < FQ; ++oQ) {
            const QQ = LQ[oQ];
            if (wQ.equals(QQ)) {
              qQ[FQ] = oQ;
              break
            }
          }
        }), (() => {
          for (let QQ = 0; QQ < FQ.length; ++QQ) FQ[QQ] = qQ[FQ[QQ]] || FQ[QQ];
          const wQ = this.lC.slice(0);
          this.setIndices(FQ), this.lC = wQ, QQ && QQ(this)
        })), this
      }
      serialize() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        QQ.name = this.name, QQ.id = this.id, QQ.uniqueId = this.uniqueId, QQ.type = this.getClassName(), cQ.c && cQ.c.HasTags(this) && (QQ.tags = cQ.c.GetTags(this)), QQ.position = this.position.RLQ(), this.rotationQuaternion ? QQ.rotationQuaternion = this.rotationQuaternion.RLQ() : this.rotation && (QQ.rotation = this.rotation.RLQ()), QQ.ck = this.ck.RLQ(), this._postMultiplyPivotMatrix ? QQ.pivotMatrix = this.getPivotMatrix().RLQ() : QQ.localMatrix = this.getPivotMatrix().RLQ(), QQ.isEnabled = this.isEnabled(!1), QQ.isVisible = this.isVisible, QQ.infiniteDistance = this.infiniteDistance, QQ.pickable = this.aA, QQ.receiveShadows = this.receiveShadows, QQ.billboardMode = this.billboardMode, QQ.visibility = this.visibility, QQ.Rx = this.Rx, QQ.checkCollisions = this.checkCollisions, QQ.ellipsoid = this.ellipsoid.RLQ(), QQ.ellipsoidOffset = this.ellipsoidOffset.RLQ(), QQ.Ix = this.Ix, QQ.isBlocker = this.isBlocker, QQ.sideOrientation = this.sideOrientation, this._isWorldMatrixFrozen && (QQ.hN = !0), this.parent && this.parent._serializeAsParent(QQ), QQ.isUnIndexed = this.isUnIndexed;
        const FQ = this._geometry;
        if (FQ && this.lC) {
          QQ.geometryUniqueId = FQ.uniqueId, QQ.geometryId = FQ.id, QQ.lC = [];
          for (let FQ = 0; FQ < this.lC.length; FQ++) {
            const wQ = this.lC[FQ];
            QQ.lC.push({
              materialIndex: wQ.materialIndex,
              verticesStart: wQ.verticesStart,
              verticesCount: wQ.verticesCount,
              indexStart: wQ.indexStart,
              indexCount: wQ.indexCount
            })
          }
        }
        if (this.material ? this.material.doNotSerialize || (QQ.materialUniqueId = this.material.uniqueId, QQ.materialId = this.material.id) : (this.material = null, QQ.materialUniqueId = this._scene.defaultMaterial.uniqueId, QQ.materialId = this._scene.defaultMaterial.id), this.morphTargetManager && (QQ.morphTargetManagerId = this.morphTargetManager.uniqueId), this.skeleton && (QQ.skeletonId = this.skeleton.id, QQ.skeletonUniqueId = this.skeleton.uniqueId, QQ.numBoneInfluencers = this.numBoneInfluencers), this.iN()._getComponent(fQ.b.NAME_PHYSICSENGINE)) {
          const FQ = this.getPhysicsImpostor?.();
          FQ && (QQ.physicsMass = FQ.getParam("GD"), QQ.physicsFriction = FQ.getParam("friction"), QQ.physicsRestitution = FQ.getParam("GD"), QQ.physicsImpostor = FQ.type)
        }
        this.metadata && (QQ.metadata = this.metadata), 0 !== this.meshBlendingTag && (QQ.meshBlendingTag = this.meshBlendingTag), QQ.instances = [];
        for (let wQ = 0; wQ < this.instances.length; wQ++) {
          const FQ = this.instances[wQ];
          if (FQ.doNotSerialize) continue;
          const LQ = {
            name: FQ.name,
            id: FQ.id,
            isEnabled: FQ.isEnabled(!1),
            isVisible: FQ.isVisible,
            aA: FQ.aA,
            checkCollisions: FQ.checkCollisions,
            position: FQ.position.RLQ(),
            ck: FQ.ck.RLQ()
          };
          if (FQ.parent && FQ.parent._serializeAsParent(LQ), FQ.rotationQuaternion ? LQ.rotationQuaternion = FQ.rotationQuaternion.RLQ() : FQ.rotation && (LQ.rotation = FQ.rotation.RLQ()), this.iN()._getComponent(fQ.b.NAME_PHYSICSENGINE)) {
            const QQ = FQ.getPhysicsImpostor?.();
            QQ && (LQ.physicsMass = QQ.getParam("GD"), LQ.physicsFriction = QQ.getParam("friction"), LQ.physicsRestitution = QQ.getParam("GD"), LQ.physicsImpostor = QQ.type)
          }
          FQ.metadata && (LQ.metadata = FQ.metadata), FQ.actionManager && (LQ.actions = FQ.actionManager.serialize(FQ.name)), QQ.instances.push(LQ), lQ.c.AppendSerializedAnimations(FQ, LQ), LQ.PA = FQ.serializeAnimationRanges()
        }
        if (this._thinInstanceDataStorage.instancesCount && this._thinInstanceDataStorage.matrixData && (QQ.thinInstances = {
            instancesCount: this._thinInstanceDataStorage.instancesCount,
            matrixData: Array.from(this._thinInstanceDataStorage.matrixData),
            matrixBufferSize: this._thinInstanceDataStorage.matrixBufferSize,
            enablePicking: this.hFQ
          }, this._userThinInstanceBuffersStorage)) {
          const FQ = {
            data: {},
            sizes: {},
            strides: {}
          };
          for (const QQ in this._userThinInstanceBuffersStorage.data) FQ.data[QQ] = Array.from(this._userThinInstanceBuffersStorage.data[QQ]), FQ.sizes[QQ] = this._userThinInstanceBuffersStorage.sizes[QQ], FQ.strides[QQ] = this._userThinInstanceBuffersStorage.strides[QQ];
          QQ.thinInstances.userThinInstance = FQ
        }
        return lQ.c.AppendSerializedAnimations(this, QQ), QQ.PA = this.serializeAnimationRanges(), QQ.layerMask = this.layerMask, QQ.alphaIndex = this.alphaIndex, QQ.hasVertexAlpha = this.hasVertexAlpha, QQ.overlayAlpha = this.overlayAlpha, QQ.overlayColor = this.overlayColor.RLQ(), QQ.renderOverlay = this.renderOverlay, QQ.applyFog = this.applyFog, this.actionManager && (QQ.actions = this.actionManager.serialize(this.name)), QQ
      }
      _syncGeometryWithMorphTargetManager() {
        if (!this.geometry) return;
        this._markSubMeshesAsAttributesDirty();
        const QQ = this._internalAbstractMeshDataInfo._morphTargetManager;
        if (QQ && QQ.vertexCount) {
          if (QQ.vertexCount !== this.getTotalVertices()) return jQ.c.Error("Mesh is incompatible with morph targets. Targets and mesh must all have the same vertices count."), void(this.morphTargetManager = null);
          if (QQ.isUsingTextureForTargets) return;
          for (let FQ = 0; FQ < QQ.numInfluencers; FQ++) {
            const wQ = QQ.getActiveTarget(FQ),
              LQ = wQ.getPositions();
            if (!LQ) return void jQ.c.Error("Invalid morph target. Target must have positions.");
            this.geometry.setVerticesData(OQ.h.PositionKind + FQ, LQ, !1, 3);
            const qQ = wQ.getNormals();
            qQ && this.geometry.setVerticesData(OQ.h.NormalKind + FQ, qQ, !1, 3);
            const oQ = wQ.getTangents();
            oQ && this.geometry.setVerticesData(OQ.h.TangentKind + FQ, oQ, !1, 3);
            const DQ = wQ.getUVs();
            DQ && this.geometry.setVerticesData(OQ.h.UVKind + "_" + FQ, DQ, !1, 2);
            const kQ = wQ.getUV2s();
            kQ && this.geometry.setVerticesData(OQ.h.UV2Kind + "_" + FQ, kQ, !1, 2);
            const vQ = wQ.getColors();
            vQ && this.geometry.setVerticesData(OQ.h.ColorKind + FQ, vQ, !1, 4)
          }
        } else {
          let QQ = 0;
          for (; this.geometry.isVerticesDataPresent(OQ.h.PositionKind + QQ);) this.geometry.removeVerticesData(OQ.h.PositionKind + QQ), this.geometry.isVerticesDataPresent(OQ.h.NormalKind + QQ) && this.geometry.removeVerticesData(OQ.h.NormalKind + QQ), this.geometry.isVerticesDataPresent(OQ.h.TangentKind + QQ) && this.geometry.removeVerticesData(OQ.h.TangentKind + QQ), this.geometry.isVerticesDataPresent(OQ.h.UVKind + "_" + QQ) && this.geometry.removeVerticesData(OQ.h.UVKind + "_" + QQ), this.geometry.isVerticesDataPresent(OQ.h.UV2Kind + "_" + QQ) && this.geometry.removeVerticesData(OQ.h.UV2Kind + "_" + QQ), this.geometry.isVerticesDataPresent(OQ.h.ColorKind + QQ) && this.geometry.removeVerticesData(OQ.h.ColorKind + QQ), QQ++
        }
      }
      static Parse(QQ, FQ, wQ) {
        let LQ, qQ = !1;
        if (QQ.type && "LinesMesh" === QQ.type ? LQ = yQ._LinesMeshParser(QQ, FQ) : QQ.type && "GroundMesh" === QQ.type ? LQ = yQ._GroundMeshParser(QQ, FQ) : QQ.type && "GoldbergMesh" === QQ.type ? LQ = yQ._GoldbergMeshParser(QQ, FQ) : QQ.type && "GreasedLineMesh" === QQ.type ? LQ = yQ._GreasedLineMeshParser(QQ, FQ) : QQ.type && "TrailMesh" === QQ.type ? LQ = yQ._TrailMeshParser(QQ, FQ) : QQ.type && "GaussianSplattingMesh" === QQ.type ? (LQ = QQ._isCompound ? yQ._GaussianSplattingCompoundMeshParser(QQ, FQ) : yQ._GaussianSplattingMeshParser(QQ, FQ), qQ = !0) : QQ.type && "GaussianSplattingPartProxyMesh" === QQ.type ? (LQ = yQ._GaussianSplattingPartProxyMeshParser(QQ, FQ), qQ = !0) : LQ = new yQ(QQ.name, FQ), LQ.id = QQ.id, LQ._waitingParsedUniqueId = QQ.uniqueId, cQ.c && cQ.c.AddTagsTo(LQ, QQ.tags), LQ.position = iQ.p.FromArray(QQ.position), void 0 !== QQ.metadata && (LQ.metadata = QQ.metadata), void 0 !== QQ.meshBlendingTag && (LQ.meshBlendingTag = QQ.meshBlendingTag), QQ.rotationQuaternion ? LQ.rotationQuaternion = iQ.e.FromArray(QQ.rotationQuaternion) : QQ.rotation && (LQ.rotation = iQ.p.FromArray(QQ.rotation)), LQ.ck = iQ.p.FromArray(QQ.ck), QQ.localMatrix ? LQ.setPreTransformMatrix(iQ.c.FromArray(QQ.localMatrix)) : QQ.pivotMatrix && LQ.setPivotMatrix(iQ.c.FromArray(QQ.pivotMatrix)), LQ.Qr(QQ.isEnabled), LQ.isVisible = QQ.isVisible, LQ.infiniteDistance = QQ.infiniteDistance, LQ.Rx = !!QQ.Rx, LQ.showBoundingBox = QQ.showBoundingBox, LQ.showSubMeshesBoundingBox = QQ.showSubMeshesBoundingBox, void 0 !== QQ.applyFog && (LQ.applyFog = QQ.applyFog), void 0 !== QQ.pickable && (LQ.aA = QQ.pickable), void 0 !== QQ.alphaIndex && (LQ.alphaIndex = QQ.alphaIndex), LQ.receiveShadows = QQ.receiveShadows, void 0 !== QQ.billboardMode && (LQ.billboardMode = QQ.billboardMode), void 0 !== QQ.visibility && (LQ.visibility = QQ.visibility), LQ.checkCollisions = QQ.checkCollisions, LQ.Ix = !!QQ.Ix, QQ.ellipsoid && (LQ.ellipsoid = iQ.p.FromArray(QQ.ellipsoid)), QQ.ellipsoidOffset && (LQ.ellipsoidOffset = iQ.p.FromArray(QQ.ellipsoidOffset)), null != QQ.overrideMaterialSideOrientation && (LQ.sideOrientation = QQ.overrideMaterialSideOrientation), void 0 !== QQ.sideOrientation && (LQ.sideOrientation = QQ.sideOrientation), void 0 !== QQ.isBlocker && (LQ.isBlocker = QQ.isBlocker), LQ._shouldGenerateFlatShading = QQ.useFlatShading, QQ.hN && (LQ._waitingData.hN = QQ.hN), void 0 !== QQ.parentId && (LQ._waitingParentId = QQ.parentId), void 0 !== QQ.parentInstanceIndex && (LQ._waitingParentInstanceIndex = QQ.parentInstanceIndex), void 0 !== QQ.actions && (LQ._waitingData.actions = QQ.actions), void 0 !== QQ.overlayAlpha && (LQ.overlayAlpha = QQ.overlayAlpha), void 0 !== QQ.overlayColor && (LQ.overlayColor = WQ.b.FromArray(QQ.overlayColor)), void 0 !== QQ.renderOverlay && (LQ.renderOverlay = QQ.renderOverlay), LQ.isUnIndexed = !!QQ.isUnIndexed, LQ.hasVertexAlpha = QQ.hasVertexAlpha, QQ.delayLoadingFile ? (LQ.delayLoadState = 4, LQ.delayLoadingFile = wQ + QQ.delayLoadingFile, LQ.buildBoundingInfo(iQ.p.FromArray(QQ.boundingBoxMinimum), iQ.p.FromArray(QQ.boundingBoxMaximum)), QQ._binaryInfo && (LQ._binaryInfo = QQ._binaryInfo), LQ._delayInfo = [], QQ.hasUVs && LQ._delayInfo.push(OQ.h.UVKind), QQ.hasUVs2 && LQ._delayInfo.push(OQ.h.UV2Kind), QQ.hasUVs3 && LQ._delayInfo.push(OQ.h.UV3Kind), QQ.hasUVs4 && LQ._delayInfo.push(OQ.h.UV4Kind), QQ.hasUVs5 && LQ._delayInfo.push(OQ.h.UV5Kind), QQ.hasUVs6 && LQ._delayInfo.push(OQ.h.UV6Kind), QQ.hasColors && LQ._delayInfo.push(OQ.h.ColorKind), QQ.hasMatricesIndices && LQ._delayInfo.push(OQ.h.MatricesIndicesKind), QQ.hasMatricesWeights && LQ._delayInfo.push(OQ.h.MatricesWeightsKind), LQ._delayLoadingFunction = rQ.c._ImportGeometry, zQ.d.ForceFullSceneLoadingForIncremental && LQ._checkDelayState()) : qQ || rQ.c._ImportGeometry(QQ, LQ), QQ.materialUniqueId ? LQ._waitingMaterialId = QQ.materialUniqueId : QQ.materialId && (LQ._waitingMaterialId = QQ.materialId), QQ.morphTargetManagerId > -1 && (LQ._waitingMorphTargetManagerId = QQ.morphTargetManagerId), void 0 !== QQ.skeletonId && null !== QQ.skeletonId && (LQ.skeleton = FQ.getLastSkeletonById(QQ.skeletonId), LQ._waitingSkeletonId = QQ.skeletonId, QQ.numBoneInfluencers && (LQ.numBoneInfluencers = QQ.numBoneInfluencers)), void 0 !== QQ.skeletonUniqueId && null !== QQ.skeletonUniqueId && (LQ._waitingSkeletonUniqueId = QQ.skeletonUniqueId), QQ.animations) {
          for (let FQ = 0; FQ < QQ.animations.length; FQ++) {
            const wQ = QQ.animations[FQ],
              qQ = (0, aQ.b)("BABYLON.Animation");
            qQ && LQ.animations.push(qQ.Parse(wQ))
          }
          RQ.c.ParseAnimationRanges(LQ, QQ, FQ)
        }
        if (QQ.autoAnimate && FQ.beginAnimation(LQ, QQ.autoAnimateFrom, QQ.autoAnimateTo, QQ.autoAnimateLoop, QQ.autoAnimateSpeed || 1), QQ.layerMask && !isNaN(QQ.layerMask) ? LQ.layerMask = Math.abs(parseInt(QQ.layerMask)) : LQ.layerMask = 268435455, QQ.physicsImpostor && (LQ.physicsImpostor = yQ._PhysicsImpostorParser(FQ, LQ, QQ)), QQ.lodMeshIds && (LQ._waitingData.lods = {
            ids: QQ.lodMeshIds,
            distances: QQ.lodDistances ? QQ.lodDistances : null,
            coverages: QQ.lodCoverages ? QQ.lodCoverages : null
          }), QQ.instances)
          for (let oQ = 0; oQ < QQ.instances.length; oQ++) {
            const wQ = QQ.instances[oQ],
              qQ = LQ.createInstance(wQ.name);
            if (wQ.id && (qQ.id = wQ.id), cQ.c && (wQ.tags ? cQ.c.AddTagsTo(qQ, wQ.tags) : cQ.c.AddTagsTo(qQ, QQ.tags)), qQ.position = iQ.p.FromArray(wQ.position), void 0 !== wQ.metadata && (qQ.metadata = wQ.metadata), void 0 !== wQ.parentId && (qQ._waitingParentId = wQ.parentId), void 0 !== wQ.parentInstanceIndex && (qQ._waitingParentInstanceIndex = wQ.parentInstanceIndex), void 0 !== wQ.isEnabled && null !== wQ.isEnabled && qQ.Qr(wQ.isEnabled), void 0 !== wQ.isVisible && null !== wQ.isVisible && (qQ.isVisible = wQ.isVisible), void 0 !== wQ.aA && null !== wQ.aA && (qQ.aA = wQ.aA), wQ.rotationQuaternion ? qQ.rotationQuaternion = iQ.e.FromArray(wQ.rotationQuaternion) : wQ.rotation && (qQ.rotation = iQ.p.FromArray(wQ.rotation)), qQ.ck = iQ.p.FromArray(wQ.ck), void 0 != wQ.checkCollisions && null != wQ.checkCollisions && (qQ.checkCollisions = wQ.checkCollisions), void 0 != wQ.pickable && null != wQ.pickable && (qQ.aA = wQ.pickable), void 0 != wQ.showBoundingBox && null != wQ.showBoundingBox && (qQ.showBoundingBox = wQ.showBoundingBox), void 0 != wQ.showSubMeshesBoundingBox && null != wQ.showSubMeshesBoundingBox && (qQ.showSubMeshesBoundingBox = wQ.showSubMeshesBoundingBox), void 0 != wQ.alphaIndex && null != wQ.showSubMeshesBoundingBox && (qQ.alphaIndex = wQ.alphaIndex), wQ.physicsImpostor && (qQ.physicsImpostor = yQ._PhysicsImpostorParser(FQ, qQ, wQ)), void 0 !== wQ.actions && (qQ._waitingData.actions = wQ.actions), wQ.animations) {
              for (let QQ = 0; QQ < wQ.animations.length; QQ++) {
                const FQ = wQ.animations[QQ],
                  LQ = (0, aQ.b)("BABYLON.Animation");
                LQ && qQ.animations.push(LQ.Parse(FQ))
              }
              RQ.c.ParseAnimationRanges(qQ, wQ, FQ), wQ.autoAnimate && FQ.beginAnimation(qQ, wQ.autoAnimateFrom, wQ.autoAnimateTo, wQ.autoAnimateLoop, wQ.autoAnimateSpeed || 1)
            }
          }
        if (QQ.thinInstances) {
          const FQ = QQ.thinInstances;
          if (LQ.hFQ = !!FQ.enablePicking, FQ.matrixData ? (LQ.FQQ("matrix", new Float32Array(FQ.matrixData), 16, !1), LQ._thinInstanceDataStorage.matrixBufferSize = FQ.matrixBufferSize, LQ._thinInstanceDataStorage.instancesCount = FQ.instancesCount) : LQ._thinInstanceDataStorage.matrixBufferSize = FQ.matrixBufferSize, QQ.thinInstances.userThinInstance) {
            const FQ = QQ.thinInstances.userThinInstance;
            for (const QQ in FQ.data) LQ.FQQ(QQ, new Float32Array(FQ.data[QQ]), FQ.strides[QQ], !1), LQ._userThinInstanceBuffersStorage.sizes[QQ] = FQ.sizes[QQ]
          }
        }
        return LQ
      }
      setPositionsForCPUSkinning() {
        const QQ = this._internalMeshDataInfo;
        if (!QQ._sourcePositions) {
          const FQ = this.getVerticesData(OQ.h.PositionKind);
          if (!FQ) return QQ._sourcePositions;
          QQ._sourcePositions = new Float32Array(FQ), this.isVertexBufferUpdatable(OQ.h.PositionKind) || this.setVerticesData(OQ.h.PositionKind, FQ, !0)
        }
        return QQ._sourcePositions
      }
      setNormalsForCPUSkinning() {
        const QQ = this._internalMeshDataInfo;
        if (!QQ._sourceNormals) {
          const FQ = this.getVerticesData(OQ.h.NormalKind);
          if (!FQ) return QQ._sourceNormals;
          QQ._sourceNormals = new Float32Array(FQ), this.isVertexBufferUpdatable(OQ.h.NormalKind) || this.setVerticesData(OQ.h.NormalKind, FQ, !0)
        }
        return QQ._sourceNormals
      }
      applySkeleton(QQ) {
        if (!this.geometry) return this;
        if (this.geometry._softwareSkinningFrameId == this.iN().getFrameId()) return this;
        if (this.geometry._softwareSkinningFrameId = this.iN().getFrameId(), !this.isVerticesDataPresent(OQ.h.PositionKind)) return this;
        if (!this.isVerticesDataPresent(OQ.h.MatricesIndicesKind)) return this;
        if (!this.isVerticesDataPresent(OQ.h.MatricesWeightsKind)) return this;
        const FQ = this.isVerticesDataPresent(OQ.h.NormalKind),
          wQ = this._internalMeshDataInfo;
        if (!wQ._sourcePositions) {
          const QQ = this.lC.slice();
          this.setPositionsForCPUSkinning(), this.lC = QQ
        }
        FQ && !wQ._sourceNormals && this.setNormalsForCPUSkinning();
        let LQ = this.getVerticesData(OQ.h.PositionKind);
        if (!LQ) return this;
        LQ instanceof Float32Array || (LQ = new Float32Array(LQ));
        let qQ = this.getVerticesData(OQ.h.NormalKind);
        if (FQ) {
          if (!qQ) return this;
          qQ instanceof Float32Array || (qQ = new Float32Array(qQ))
        }
        const oQ = this.getVerticesData(OQ.h.MatricesIndicesKind),
          DQ = this.getVerticesData(OQ.h.MatricesWeightsKind);
        if (!DQ || !oQ) return this;
        const kQ = this.numBoneInfluencers > 4,
          vQ = kQ ? this.getVerticesData(OQ.h.MatricesIndicesExtraKind) : null,
          mQ = kQ ? this.getVerticesData(OQ.h.MatricesWeightsExtraKind) : null,
          uQ = QQ.getTransformMatrices(this),
          HQ = iQ.p.Zero(),
          bQ = new iQ.c,
          YQ = new iQ.c;
        let xQ, AQ = 0;
        for (let tQ = 0; tQ < LQ.length; tQ += 3, AQ += 4) {
          let QQ;
          for (xQ = 0; xQ < 4; xQ++) QQ = DQ[AQ + xQ], QQ > 0 && (iQ.c.FromFloat32ArrayToRefScaled(uQ, Math.floor(16 * oQ[AQ + xQ]), QQ, YQ), bQ.addToSelf(YQ));
          if (kQ)
            for (xQ = 0; xQ < 4; xQ++) QQ = mQ[AQ + xQ], QQ > 0 && (iQ.c.FromFloat32ArrayToRefScaled(uQ, Math.floor(16 * vQ[AQ + xQ]), QQ, YQ), bQ.addToSelf(YQ));
          iQ.p.TransformCoordinatesFromFloatsToRef(wQ._sourcePositions[tQ], wQ._sourcePositions[tQ + 1], wQ._sourcePositions[tQ + 2], bQ, HQ), HQ.toArray(LQ, tQ), FQ && (iQ.p.TransformNormalFromFloatsToRef(wQ._sourceNormals[tQ], wQ._sourceNormals[tQ + 1], wQ._sourceNormals[tQ + 2], bQ, HQ), HQ.toArray(qQ, tQ)), bQ.reset()
        }
        return this.updateVerticesData(OQ.h.PositionKind, LQ), FQ && this.updateVerticesData(OQ.h.NormalKind, qQ), this
      }
      static MinMax(QQ) {
        let FQ = null,
          wQ = null;
        for (const LQ of QQ) {
          const QQ = LQ.sK().boundingBox;
          FQ && wQ ? (FQ.minimizeInPlace(QQ.minimumWorld), wQ.maximizeInPlace(QQ.maximumWorld)) : (FQ = QQ.minimumWorld.clone(), wQ = QQ.maximumWorld.clone())
        }
        return FQ && wQ ? {
          min: FQ,
          max: wQ
        } : {
          min: iQ.p.Zero(),
          max: iQ.p.Zero()
        }
      }
      static Center(QQ) {
        const FQ = QQ instanceof Array ? yQ.MinMax(QQ) : QQ;
        return iQ.p.Center(FQ.min, FQ.max)
      }
      static MergeMeshes(QQ) {
        let FQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          wQ = arguments.length > 2 ? arguments[2] : void 0,
          LQ = arguments.length > 3 ? arguments[3] : void 0,
          qQ = arguments.length > 4 ? arguments[4] : void 0,
          oQ = arguments.length > 5 ? arguments[5] : void 0;
        return (0, CQ.h)(yQ._MergeMeshesCoroutine(QQ, FQ, wQ, LQ, qQ, oQ, !1))
      }
      static async MergeMeshesAsync(QQ) {
        let FQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          wQ = arguments.length > 2 ? arguments[2] : void 0,
          LQ = arguments.length > 3 ? arguments[3] : void 0,
          qQ = arguments.length > 4 ? arguments[4] : void 0,
          oQ = arguments.length > 5 ? arguments[5] : void 0;
        return await (0, CQ.f)(yQ._MergeMeshesCoroutine(QQ, FQ, wQ, LQ, qQ, oQ, !0), (0, CQ.b)())
      }
      static * _MergeMeshesCoroutine(QQ) {
        let FQ, wQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          LQ = arguments.length > 2 ? arguments[2] : void 0,
          qQ = arguments.length > 3 ? arguments[3] : void 0,
          oQ = arguments.length > 4 ? arguments[4] : void 0,
          DQ = arguments.length > 5 ? arguments[5] : void 0,
          kQ = arguments.length > 6 ? arguments[6] : void 0;
        if (0 === (QQ = QQ.filter(Boolean)).length) return null;
        if (!LQ) {
          let wQ = 0;
          for (FQ = 0; FQ < QQ.length; FQ++)
            if (wQ += QQ[FQ].getTotalVertices(), wQ >= 65536) return jQ.c.Warn("Cannot merge meshes because resulting mesh will have more than 65536 vertices. Please use allow32BitsIndices = true to use 32 bits indices"), null
        }
        const vQ = QQ[0];
        DQ && (oQ = !1, QQ.sort(((QQ, FQ) => (QQ.material?.uniqueId ?? -1) - (FQ.material?.uniqueId ?? -1))));
        const mQ = new Array,
          uQ = new Array,
          HQ = new Array,
          bQ = QQ[0].sideOrientation;
        for (FQ = 0; FQ < QQ.length; FQ++) {
          const wQ = QQ[FQ];
          if (wQ.lN) return jQ.c.Warn("Cannot merge instance meshes."), null;
          if (bQ !== wQ.sideOrientation) return jQ.c.Warn("Cannot merge meshes with different sideOrientation values."), null;
          if (oQ || DQ) {
            const QQ = HQ.reduce(((QQ, FQ) => Math.max(QQ, FQ.start + FQ.count)), 0);
            if (DQ)
              if (wQ.material) {
                const FQ = wQ.material;
                if (FQ instanceof KQ.c) {
                  for (let QQ = 0; QQ < FQ.qQQ.length; QQ++) mQ.indexOf(FQ.qQQ[QQ]) < 0 && mQ.push(FQ.qQQ[QQ]);
                  for (let LQ = 0; LQ < wQ.lC.length; LQ++) uQ.push(mQ.indexOf(FQ.qQQ[wQ.lC[LQ].materialIndex])), HQ.push({
                    start: QQ + wQ.lC[LQ].indexStart,
                    count: wQ.lC[LQ].indexCount
                  })
                } else {
                  mQ.indexOf(FQ) < 0 && mQ.push(FQ);
                  for (let LQ = 0; LQ < wQ.lC.length; LQ++) uQ.push(mQ.indexOf(FQ)), HQ.push({
                    start: QQ + wQ.lC[LQ].indexStart,
                    count: wQ.lC[LQ].indexCount
                  })
                }
              } else
                for (let FQ = 0; FQ < wQ.lC.length; FQ++) uQ.push(0), HQ.push({
                  start: QQ + wQ.lC[FQ].indexStart,
                  count: wQ.lC[FQ].indexCount
                });
            else HQ.push({
              start: QQ,
              count: wQ.getTotalIndices()
            })
          }
        }
        if (DQ && HQ.length > 1) {
          let QQ = 0;
          for (let FQ = 1; FQ < HQ.length; FQ++) {
            const wQ = HQ[QQ],
              LQ = HQ[FQ];
            uQ[FQ] === uQ[QQ] && wQ.start + wQ.count === LQ.start ? wQ.count += LQ.count : (QQ++, HQ[QQ] = LQ, uQ[QQ] = uQ[FQ])
          }
          HQ.length = QQ + 1, uQ.length = QQ + 1
        }
        const YQ = QQ => {
            const FQ = QQ.computeWorldMatrix(!0);
            return {
              vertexData: sQ.c.ExtractFromMesh(QQ, !1, !1),
              transform: FQ
            }
          },
          {
            vertexData: xQ,
            transform: AQ
          } = YQ(QQ[0]);
        kQ && (yield);
        const tQ = new Array(QQ.length - 1);
        for (let CQ = 1; CQ < QQ.length; CQ++) tQ[CQ - 1] = YQ(QQ[CQ]), kQ && (yield);
        const eQ = xQ._mergeCoroutine(AQ, tQ, LQ, kQ, !wQ);
        let MQ = eQ.next();
        for (; !MQ.done;) kQ && (yield), MQ = eQ.next();
        const GQ = MQ.value;
        qQ || (qQ = new yQ(vQ.name + "_merged", vQ.iN()));
        const pQ = GQ._applyToCoroutine(qQ, void 0, kQ);
        let cQ = pQ.next();
        for (; !cQ.done;) kQ && (yield), cQ = pQ.next();
        if (qQ.checkCollisions = vQ.checkCollisions, qQ.sideOrientation = vQ.sideOrientation, wQ)
          for (FQ = 0; FQ < QQ.length; FQ++) QQ[FQ].dispose();
        if (oQ || DQ) {
          for (qQ.releaseSubMeshes(), FQ = 0; FQ < HQ.length;) UQ.c.CreateFromIndices(0, HQ[FQ].start, HQ[FQ].count, qQ, void 0, !1), FQ++;
          for (const QQ of qQ.lC) QQ.refreshBoundingInfo();
          qQ.computeWorldMatrix(!0)
        }
        if (DQ) {
          const QQ = new KQ.c(vQ.name + "_merged", vQ.iN());
          QQ.qQQ = mQ;
          for (let FQ = 0; FQ < qQ.lC.length; FQ++) qQ.lC[FQ].materialIndex = uQ[FQ];
          qQ.material = QQ
        } else qQ.material = vQ.material;
        return qQ
      }
      K4(QQ) {
        QQ._indexInSourceMeshInstanceArray = this.instances.length, this.instances.push(QQ)
      }
      o5(QQ) {
        const FQ = QQ._indexInSourceMeshInstanceArray;
        if (-1 != FQ) {
          if (FQ !== this.instances.length - 1) {
            const QQ = this.instances[this.instances.length - 1];
            this.instances[FQ] = QQ, QQ._indexInSourceMeshInstanceArray = FQ
          }
          QQ._indexInSourceMeshInstanceArray = -1, this.instances.pop()
        }
      }
      _shouldConvertRHS() {
        return this._scene.useRightHandedSystem && this.sideOrientation === NQ.d.CounterClockWiseSideOrientation
      }
      _getRenderingFillMode(QQ) {
        const FQ = this.iN();
        return FQ.forcePointsCloud ? NQ.d.PointFillMode : FQ.forceWireframe ? NQ.d.WireFrameFillMode : this.overrideRenderingFillMode ?? QQ
      }
      setMaterialByID(QQ) {
        return this.setMaterialById(QQ)
      }
      static CreateRibbon(QQ, FQ, wQ, LQ, qQ, oQ, DQ, kQ, vQ) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDisc(QQ, FQ, wQ, LQ, qQ, oQ) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateBox(QQ, FQ, wQ, LQ, qQ) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateSphere(QQ, FQ, wQ, LQ, qQ, oQ) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateHemisphere(QQ, FQ, wQ, LQ) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateCylinder(QQ, FQ, wQ, LQ, qQ, oQ, DQ, kQ, vQ) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTorus(QQ, FQ, wQ, LQ, qQ, oQ, DQ) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTorusKnot(QQ, FQ, wQ, LQ, qQ, oQ, DQ, kQ, vQ, mQ) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateLines(QQ, FQ, wQ, LQ, qQ) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDashedLines(QQ, FQ, wQ, LQ, qQ, oQ, DQ, kQ) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePolygon(QQ, FQ, wQ, LQ, qQ, oQ, DQ) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudePolygon(QQ, FQ, wQ, LQ, qQ, oQ, DQ, kQ) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudeShape(QQ, FQ, wQ, LQ, qQ, oQ, DQ, kQ, vQ, mQ) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudeShapeCustom(QQ, FQ, wQ, LQ, qQ, oQ, DQ, kQ, vQ, mQ, uQ, HQ) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateLathe(QQ, FQ, wQ, LQ, qQ, oQ, DQ) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePlane(QQ, FQ, wQ, LQ, qQ) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateGround(QQ, FQ, wQ, LQ, qQ, oQ) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTiledGround(QQ, FQ, wQ, LQ, qQ, oQ, DQ, kQ, vQ) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateGroundFromHeightMap(QQ, FQ, wQ, LQ, qQ, oQ, DQ, kQ, vQ, mQ, uQ) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTube(QQ, FQ, wQ, LQ, qQ, oQ, DQ, kQ, vQ, mQ) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePolyhedron(QQ, FQ, wQ) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateIcoSphere(QQ, FQ, wQ) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDecal(QQ, FQ, wQ, LQ, qQ, oQ) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateCapsule(QQ, FQ, wQ) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtendToGoldberg(QQ) {
        throw new Error("Import MeshBuilder to populate this function")
      }
    }
    yQ.FRONTSIDE = sQ.c.FRONTSIDE, yQ.BACKSIDE = sQ.c.BACKSIDE, yQ.DOUBLESIDE = sQ.c.DOUBLESIDE, yQ.DEFAULTSIDE = sQ.c.DEFAULTSIDE, yQ.NO_CAP = 0, yQ.CAP_START = 1, yQ.CAP_END = 2, yQ.CAP_ALL = 3, yQ.NO_FLIP = 0, yQ.FLIP_TILE = 1, yQ.ROTATE_TILE = 2, yQ.FLIP_ROW = 3, yQ.ROTATE_ROW = 4, yQ.FLIP_N_ROTATE_TILE = 5, yQ.FLIP_N_ROTATE_ROW = 6, yQ.CENTER = 0, yQ.LEFT = 1, yQ.RIGHT = 2, yQ.TOP = 3, yQ.BOTTOM = 4, yQ.INSTANCEDMESH_SORT_TRANSPARENT = !1, yQ._GroundMeshParser = (QQ, FQ) => {
      throw (0, XQ.k)("GroundMesh")
    }, yQ._GoldbergMeshParser = (QQ, FQ) => {
      throw (0, XQ.k)("GoldbergMesh")
    }, yQ._LinesMeshParser = (QQ, FQ) => {
      throw (0, XQ.k)("LinesMesh")
    }, yQ._GreasedLineMeshParser = (QQ, FQ) => {
      throw (0, XQ.k)("GreasedLineMesh")
    }, yQ._GreasedLineRibbonMeshParser = (QQ, FQ) => {
      throw (0, XQ.k)("GreasedLineRibbonMesh")
    }, yQ._TrailMeshParser = (QQ, FQ) => {
      throw (0, XQ.k)("TrailMesh")
    }, yQ._GaussianSplattingMeshParser = (QQ, FQ) => {
      throw (0, XQ.k)("GaussianSplattingMesh")
    }, yQ._GaussianSplattingPartProxyMeshParser = (QQ, FQ) => {
      throw (0, XQ.k)("GaussianSplattingPartProxyMesh")
    }, yQ._GaussianSplattingCompoundMeshParser = (QQ, FQ) => {
      throw (0, XQ.k)("GaussianSplattingCompoundMesh")
    };
    let BQ = !1;

    function dQ() {
      BQ || (BQ = !0, (0, aQ.e)("BABYLON.Mesh", yQ))
    }(LQ = yQ.prototype).hT ?? (LQ.hT = (0, XQ.g)("Mesh", "hT")), (qQ = yQ.prototype).simplify ?? (qQ.simplify = (0, XQ.g)("Mesh", "simplify")), (oQ = yQ.prototype).thinInstanceAdd ?? (oQ.thinInstanceAdd = (0, XQ.g)("Mesh", "thinInstanceAdd")), (DQ = yQ.prototype).thinInstanceAddSelf ?? (DQ.thinInstanceAddSelf = (0, XQ.g)("Mesh", "thinInstanceAddSelf")), (kQ = yQ.prototype).thinInstanceRegisterAttribute ?? (kQ.thinInstanceRegisterAttribute = (0, XQ.g)("Mesh", "thinInstanceRegisterAttribute")), (vQ = yQ.prototype).thinInstanceSetMatrixAt ?? (vQ.thinInstanceSetMatrixAt = (0, XQ.g)("Mesh", "thinInstanceSetMatrixAt")), (mQ = yQ.prototype).thinInstanceSetAttributeAt ?? (mQ.thinInstanceSetAttributeAt = (0, XQ.g)("Mesh", "thinInstanceSetAttributeAt")), (uQ = yQ.prototype).FQQ ?? (uQ.FQQ = (0, XQ.g)("Mesh", "FQQ")), (HQ = yQ.prototype).thinInstanceGetWorldMatrices ?? (HQ.thinInstanceGetWorldMatrices = (0, XQ.g)("Mesh", "thinInstanceGetWorldMatrices")), (bQ = yQ.prototype).I5 ?? (bQ.I5 = (0, XQ.g)("Mesh", "I5")), (YQ = yQ.prototype).thinInstancePartialBufferUpdate ?? (YQ.thinInstancePartialBufferUpdate = (0, XQ.g)("Mesh", "thinInstancePartialBufferUpdate")), (xQ = yQ.prototype).thinInstanceRefreshBoundingInfo ?? (xQ.thinInstanceRefreshBoundingInfo = (0, XQ.g)("Mesh", "thinInstanceRefreshBoundingInfo")), (AQ = yQ.prototype).getEmittedParticleSystems ?? (AQ.getEmittedParticleSystems = (0, XQ.g)("Mesh", "getEmittedParticleSystems")), (tQ = yQ.prototype).getHierarchyEmittedParticleSystems ?? (tQ.getHierarchyEmittedParticleSystems = (0, XQ.g)("Mesh", "getHierarchyEmittedParticleSystems")), Object.getOwnPropertyDescriptor(yQ.prototype, "edgesShareWithInstances") || Object.defineProperty(yQ.prototype, "edgesShareWithInstances", (0, XQ.e)("Mesh", "edgesShareWithInstances")), Object.getOwnPropertyDescriptor(yQ.prototype, "hFQ") || Object.defineProperty(yQ.prototype, "hFQ", (0, XQ.e)("Mesh", "hFQ")), Object.getOwnPropertyDescriptor(yQ.prototype, "thinInstanceAllowAutomaticStaticBufferRecreation") || Object.defineProperty(yQ.prototype, "thinInstanceAllowAutomaticStaticBufferRecreation", (0, XQ.e)("Mesh", "thinInstanceAllowAutomaticStaticBufferRecreation")), Object.getOwnPropertyDescriptor(yQ.prototype, "o4") || Object.defineProperty(yQ.prototype, "o4", (0, XQ.e)("Mesh", "o4"))
  },
  39835: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => xQ
    });
    var LQ = wQ(39402),
      qQ = wQ(36696),
      oQ = wQ(39561),
      DQ = wQ(39277),
      kQ = wQ(36873),
      vQ = wQ(38203),
      mQ = wQ(39409),
      uQ = wQ(39833),
      HQ = wQ(39461),
      bQ = wQ(39725);
    class YQ {}
    let xQ = (() => {
      var QQ;
      let FQ, wQ, xQ, AQ, tQ = [];
      return QQ = class {
        constructor() {
          this.uniqueId = 0, this.metadata = {}, this._applyTo = (0, uQ.c)(this._applyToCoroutine.bind(this)), this.uniqueId = QQ._UniqueIdGenerator, QQ._UniqueIdGenerator++
        }
        set(QQ, FQ) {
          switch (QQ.length || vQ.c.Warn(`Setting vertex data kind '${FQ}' with an empty array`), FQ) {
            case oQ.h.PositionKind:
              this.positions = QQ;
              break;
            case oQ.h.NormalKind:
              this.normals = QQ;
              break;
            case oQ.h.TangentKind:
              this.tangents = QQ;
              break;
            case oQ.h.UVKind:
              this.uvs = QQ;
              break;
            case oQ.h.UV2Kind:
              this.uvs2 = QQ;
              break;
            case oQ.h.UV3Kind:
              this.uvs3 = QQ;
              break;
            case oQ.h.UV4Kind:
              this.uvs4 = QQ;
              break;
            case oQ.h.UV5Kind:
              this.uvs5 = QQ;
              break;
            case oQ.h.UV6Kind:
              this.uvs6 = QQ;
              break;
            case oQ.h.ColorKind:
              this.colors = QQ;
              break;
            case oQ.h.MatricesIndicesKind:
              this.matricesIndices = QQ;
              break;
            case oQ.h.MatricesWeightsKind:
              this.matricesWeights = QQ;
              break;
            case oQ.h.MatricesIndicesExtraKind:
              this.matricesIndicesExtra = QQ;
              break;
            case oQ.h.MatricesWeightsExtraKind:
              this.matricesWeightsExtra = QQ
          }
        }
        applyToMesh(QQ, FQ) {
          return this._applyTo(QQ, FQ, !1), this
        }
        applyToGeometry(QQ, FQ) {
          return this._applyTo(QQ, FQ, !1), this
        }
        updateMesh(QQ) {
          return this._update(QQ), this
        }
        updateGeometry(QQ) {
          return this._update(QQ), this
        }* _applyToCoroutine(QQ) {
          let FQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            wQ = arguments.length > 2 ? arguments[2] : void 0;
          if (this.positions && (QQ.setVerticesData(oQ.h.PositionKind, this.positions, FQ), wQ && (yield)), this.normals && (QQ.setVerticesData(oQ.h.NormalKind, this.normals, FQ), wQ && (yield)), this.tangents && (QQ.setVerticesData(oQ.h.TangentKind, this.tangents, FQ), wQ && (yield)), this.uvs && (QQ.setVerticesData(oQ.h.UVKind, this.uvs, FQ), wQ && (yield)), this.uvs2 && (QQ.setVerticesData(oQ.h.UV2Kind, this.uvs2, FQ), wQ && (yield)), this.uvs3 && (QQ.setVerticesData(oQ.h.UV3Kind, this.uvs3, FQ), wQ && (yield)), this.uvs4 && (QQ.setVerticesData(oQ.h.UV4Kind, this.uvs4, FQ), wQ && (yield)), this.uvs5 && (QQ.setVerticesData(oQ.h.UV5Kind, this.uvs5, FQ), wQ && (yield)), this.uvs6 && (QQ.setVerticesData(oQ.h.UV6Kind, this.uvs6, FQ), wQ && (yield)), this.colors) {
            const LQ = this.positions && this.colors.length === this.positions.length ? 3 : 4;
            QQ.setVerticesData(oQ.h.ColorKind, this.colors, FQ, LQ), this.hasVertexAlpha && void 0 !== QQ.hasVertexAlpha && (QQ.hasVertexAlpha = !0), wQ && (yield)
          }
          if (this.matricesIndices && (QQ.setVerticesData(oQ.h.MatricesIndicesKind, this.matricesIndices, FQ), wQ && (yield)), this.matricesWeights && (QQ.setVerticesData(oQ.h.MatricesWeightsKind, this.matricesWeights, FQ), wQ && (yield)), this.matricesIndicesExtra && (QQ.setVerticesData(oQ.h.MatricesIndicesExtraKind, this.matricesIndicesExtra, FQ), wQ && (yield)), this.matricesWeightsExtra && (QQ.setVerticesData(oQ.h.MatricesWeightsExtraKind, this.matricesWeightsExtra, FQ), wQ && (yield)), this.indices ? (QQ.setIndices(this.indices, null, FQ), wQ && (yield)) : QQ.setIndices([], null), QQ.lC && this.materialInfos && this.materialInfos.length > 1) {
            const FQ = QQ;
            FQ.lC = [];
            for (const QQ of this.materialInfos) new bQ.c(QQ.materialIndex, QQ.verticesStart, QQ.verticesCount, QQ.indexStart, QQ.indexCount, FQ)
          }
          return this
        }
        _update(QQ, FQ, wQ) {
          return this.positions && QQ.updateVerticesData(oQ.h.PositionKind, this.positions, FQ, wQ), this.normals && QQ.updateVerticesData(oQ.h.NormalKind, this.normals, FQ, wQ), this.tangents && QQ.updateVerticesData(oQ.h.TangentKind, this.tangents, FQ, wQ), this.uvs && QQ.updateVerticesData(oQ.h.UVKind, this.uvs, FQ, wQ), this.uvs2 && QQ.updateVerticesData(oQ.h.UV2Kind, this.uvs2, FQ, wQ), this.uvs3 && QQ.updateVerticesData(oQ.h.UV3Kind, this.uvs3, FQ, wQ), this.uvs4 && QQ.updateVerticesData(oQ.h.UV4Kind, this.uvs4, FQ, wQ), this.uvs5 && QQ.updateVerticesData(oQ.h.UV5Kind, this.uvs5, FQ, wQ), this.uvs6 && QQ.updateVerticesData(oQ.h.UV6Kind, this.uvs6, FQ, wQ), this.colors && QQ.updateVerticesData(oQ.h.ColorKind, this.colors, FQ, wQ), this.matricesIndices && QQ.updateVerticesData(oQ.h.MatricesIndicesKind, this.matricesIndices, FQ, wQ), this.matricesWeights && QQ.updateVerticesData(oQ.h.MatricesWeightsKind, this.matricesWeights, FQ, wQ), this.matricesIndicesExtra && QQ.updateVerticesData(oQ.h.MatricesIndicesExtraKind, this.matricesIndicesExtra, FQ, wQ), this.matricesWeightsExtra && QQ.updateVerticesData(oQ.h.MatricesWeightsExtraKind, this.matricesWeightsExtra, FQ, wQ), this.indices && QQ.setIndices(this.indices, null), this
        }
        static _TransformVector3Coordinates(QQ, FQ) {
          let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : QQ.length;
          const oQ = qQ.k.Ox[0],
            DQ = qQ.k.Ox[1];
          for (let kQ = wQ; kQ < wQ + LQ; kQ += 3) qQ.p.FromArrayToRef(QQ, kQ, oQ), qQ.p.TransformCoordinatesToRef(oQ, FQ, DQ), QQ[kQ] = DQ.x, QQ[kQ + 1] = DQ.y, QQ[kQ + 2] = DQ.z
        }
        static _TransformVector3Normals(QQ, FQ) {
          let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : QQ.length;
          const oQ = qQ.k.Ox[0],
            DQ = qQ.k.Ox[1];
          for (let kQ = wQ; kQ < wQ + LQ; kQ += 3) qQ.p.FromArrayToRef(QQ, kQ, oQ), qQ.p.TransformNormalToRef(oQ, FQ, DQ), QQ[kQ] = DQ.x, QQ[kQ + 1] = DQ.y, QQ[kQ + 2] = DQ.z
        }
        static _TransformVector4Normals(QQ, FQ) {
          let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : QQ.length;
          const oQ = qQ.k.Vector4[0],
            DQ = qQ.k.Vector4[1];
          for (let kQ = wQ; kQ < wQ + LQ; kQ += 4) qQ.t.FromArrayToRef(QQ, kQ, oQ), qQ.t.TransformNormalToRef(oQ, FQ, DQ), QQ[kQ] = DQ.x, QQ[kQ + 1] = DQ.y, QQ[kQ + 2] = DQ.z, QQ[kQ + 3] = DQ.w
        }
        static _FlipFaces(QQ) {
          let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : QQ.length;
          for (let LQ = FQ; LQ < FQ + wQ; LQ += 3) {
            const FQ = QQ[LQ + 1];
            QQ[LQ + 1] = QQ[LQ + 2], QQ[LQ + 2] = FQ
          }
        }
        transform(FQ) {
          const wQ = FQ.determinant() < 0;
          return this.positions && QQ._TransformVector3Coordinates(this.positions, FQ), this.normals && QQ._TransformVector3Normals(this.normals, FQ), this.tangents && QQ._TransformVector4Normals(this.tangents, FQ), wQ && this.indices && QQ._FlipFaces(this.indices), this
        }
        splitBasedOnMaterialID() {
          if (!this.materialInfos || this.materialInfos.length < 2) return [this];
          const FQ = [];
          for (const wQ of this.materialInfos) {
            const LQ = new QQ;
            if (this.positions && (LQ.positions = this.positions.slice(3 * wQ.verticesStart, 3 * (wQ.verticesCount + wQ.verticesStart))), this.normals && (LQ.normals = this.normals.slice(3 * wQ.verticesStart, 3 * (wQ.verticesCount + wQ.verticesStart))), this.tangents && (LQ.tangents = this.tangents.slice(4 * wQ.verticesStart, 4 * (wQ.verticesCount + wQ.verticesStart))), this.colors && (LQ.colors = this.colors.slice(4 * wQ.verticesStart, 4 * (wQ.verticesCount + wQ.verticesStart))), this.uvs && (LQ.uvs = this.uvs.slice(2 * wQ.verticesStart, 2 * (wQ.verticesCount + wQ.verticesStart))), this.uvs2 && (LQ.uvs2 = this.uvs2.slice(2 * wQ.verticesStart, 2 * (wQ.verticesCount + wQ.verticesStart))), this.uvs3 && (LQ.uvs3 = this.uvs3.slice(2 * wQ.verticesStart, 2 * (wQ.verticesCount + wQ.verticesStart))), this.uvs4 && (LQ.uvs4 = this.uvs4.slice(2 * wQ.verticesStart, 2 * (wQ.verticesCount + wQ.verticesStart))), this.uvs5 && (LQ.uvs5 = this.uvs5.slice(2 * wQ.verticesStart, 2 * (wQ.verticesCount + wQ.verticesStart))), this.uvs6 && (LQ.uvs6 = this.uvs6.slice(2 * wQ.verticesStart, 2 * (wQ.verticesCount + wQ.verticesStart))), this.matricesIndices && (LQ.matricesIndices = this.matricesIndices.slice(4 * wQ.verticesStart, 4 * (wQ.verticesCount + wQ.verticesStart))), this.matricesIndicesExtra && (LQ.matricesIndicesExtra = this.matricesIndicesExtra.slice(4 * wQ.verticesStart, 4 * (wQ.verticesCount + wQ.verticesStart))), this.matricesWeights && (LQ.matricesWeights = this.matricesWeights.slice(4 * wQ.verticesStart, 4 * (wQ.verticesCount + wQ.verticesStart))), this.matricesWeightsExtra && (LQ.matricesWeightsExtra = this.matricesWeightsExtra.slice(4 * wQ.verticesStart, 4 * (wQ.verticesCount + wQ.verticesStart))), this.indices) {
              LQ.indices = [];
              for (let QQ = wQ.indexStart; QQ < wQ.indexStart + wQ.indexCount; QQ++) LQ.indices.push(this.indices[QQ] - wQ.verticesStart)
            }
            const qQ = new YQ;
            qQ.indexStart = 0, qQ.indexCount = LQ.indices ? LQ.indices.length : 0, qQ.materialIndex = wQ.materialIndex, qQ.verticesStart = 0, qQ.verticesCount = (LQ.positions ? LQ.positions.length : 0) / 3, LQ.materialInfos = [qQ], FQ.push(LQ)
          }
          return FQ
        }
        merge(QQ) {
          let FQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            wQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            LQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            qQ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
          const oQ = Array.isArray(QQ) ? QQ.map((QQ => ({
            vertexData: QQ
          }))) : [{
            vertexData: QQ
          }];
          return (0, uQ.h)(this._mergeCoroutine(void 0, oQ, FQ, !1, wQ, LQ, qQ))
        }* _mergeCoroutine(FQ, wQ) {
          let LQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            qQ = arguments.length > 3 ? arguments[3] : void 0,
            DQ = arguments.length > 4 ? arguments[4] : void 0,
            kQ = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
            vQ = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
          this._validate();
          let mQ = wQ.map((QQ => QQ.vertexData)),
            uQ = this;
          if (vQ)
            for (const QQ of mQ) QQ && (QQ._validate(), !this.normals && QQ.normals && (this.normals = new Float32Array(this.positions.length)), !this.tangents && QQ.tangents && (this.tangents = new Float32Array(this.positions.length / 3 * 4)), !this.uvs && QQ.uvs && (this.uvs = new Float32Array(this.positions.length / 3 * 2)), !this.uvs2 && QQ.uvs2 && (this.uvs2 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs3 && QQ.uvs3 && (this.uvs3 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs4 && QQ.uvs4 && (this.uvs4 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs5 && QQ.uvs5 && (this.uvs5 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs6 && QQ.uvs6 && (this.uvs6 = new Float32Array(this.positions.length / 3 * 2)), !this.colors && QQ.colors && (this.colors = new Float32Array(this.positions.length / 3 * 4), this.colors.fill(1)), !this.matricesIndices && QQ.matricesIndices && (this.matricesIndices = new Float32Array(this.positions.length / 3 * 4)), !this.matricesWeights && QQ.matricesWeights && (this.matricesWeights = new Float32Array(this.positions.length / 3 * 4)), !this.matricesIndicesExtra && QQ.matricesIndicesExtra && (this.matricesIndicesExtra = new Float32Array(this.positions.length / 3 * 4)), !this.matricesWeightsExtra && QQ.matricesWeightsExtra && (this.matricesWeightsExtra = new Float32Array(this.positions.length / 3 * 4)));
          for (const QQ of mQ)
            if (QQ)
              if (vQ) this.normals && !QQ.normals && (QQ.normals = new Float32Array(QQ.positions.length)), this.tangents && !QQ.tangents && (QQ.tangents = new Float32Array(QQ.positions.length / 3 * 4)), this.uvs && !QQ.uvs && (QQ.uvs = new Float32Array(QQ.positions.length / 3 * 2)), this.uvs2 && !QQ.uvs2 && (QQ.uvs2 = new Float32Array(QQ.positions.length / 3 * 2)), this.uvs3 && !QQ.uvs3 && (QQ.uvs3 = new Float32Array(QQ.positions.length / 3 * 2)), this.uvs4 && !QQ.uvs4 && (QQ.uvs4 = new Float32Array(QQ.positions.length / 3 * 2)), this.uvs5 && !QQ.uvs5 && (QQ.uvs5 = new Float32Array(QQ.positions.length / 3 * 2)), this.uvs6 && !QQ.uvs6 && (QQ.uvs6 = new Float32Array(QQ.positions.length / 3 * 2)), this.colors && !QQ.colors && (QQ.colors = new Float32Array(QQ.positions.length / 3 * 4), QQ.colors.fill(1)), this.matricesIndices && !QQ.matricesIndices && (QQ.matricesIndices = new Float32Array(QQ.positions.length / 3 * 4)), this.matricesWeights && !QQ.matricesWeights && (QQ.matricesWeights = new Float32Array(QQ.positions.length / 3 * 4)), this.matricesIndicesExtra && !QQ.matricesIndicesExtra && (QQ.matricesIndicesExtra = new Float32Array(QQ.positions.length / 3 * 4)), this.matricesWeightsExtra && !QQ.matricesWeightsExtra && (QQ.matricesWeightsExtra = new Float32Array(QQ.positions.length / 3 * 4));
              else if (QQ._validate(), !this.normals !== !QQ.normals || !this.tangents !== !QQ.tangents || !this.uvs !== !QQ.uvs || !this.uvs2 !== !QQ.uvs2 || !this.uvs3 !== !QQ.uvs3 || !this.uvs4 !== !QQ.uvs4 || !this.uvs5 !== !QQ.uvs5 || !this.uvs6 !== !QQ.uvs6 || !this.colors !== !QQ.colors || !this.matricesIndices !== !QQ.matricesIndices || !this.matricesWeights !== !QQ.matricesWeights || !this.matricesIndicesExtra !== !QQ.matricesIndicesExtra || !this.matricesWeightsExtra !== !QQ.matricesWeightsExtra) throw new Error("Cannot merge vertex data that do not have the same set of attributes");
          if (kQ) {
            let QQ, LQ = 0,
              qQ = 0;
            const oQ = [];
            let DQ = null;
            const kQ = [];
            for (const wQ of this.splitBasedOnMaterialID()) kQ.push({
              vertexData: wQ,
              transform: FQ
            });
            for (const FQ of wQ)
              if (FQ.vertexData)
                for (const QQ of FQ.vertexData.splitBasedOnMaterialID()) kQ.push({
                  vertexData: QQ,
                  transform: FQ.transform
                });
            kQ.sort(((QQ, FQ) => {
              const wQ = QQ.vertexData.materialInfos ? QQ.vertexData.materialInfos[0].materialIndex : 0,
                LQ = FQ.vertexData.materialInfos ? FQ.vertexData.materialInfos[0].materialIndex : 0;
              return wQ > LQ ? 1 : wQ === LQ ? 0 : -1
            }));
            for (const FQ of kQ) {
              const wQ = FQ.vertexData;
              if (QQ = wQ.materialInfos ? wQ.materialInfos[0].materialIndex : 0, DQ && DQ.materialIndex === QQ) DQ.indexCount += wQ.indices.length, DQ.verticesCount += wQ.positions.length / 3;
              else {
                const FQ = new YQ;
                FQ.materialIndex = QQ, FQ.indexStart = LQ, FQ.indexCount = wQ.indices.length, FQ.verticesStart = qQ, FQ.verticesCount = wQ.positions.length / 3, oQ.push(FQ), DQ = FQ
              }
              LQ += wQ.indices.length, qQ += wQ.positions.length / 3
            }
            const vQ = kQ.splice(0, 1)[0];
            uQ = vQ.vertexData, FQ = vQ.transform, mQ = kQ.map((QQ => QQ.vertexData)), wQ = kQ, this.materialInfos = oQ
          }
          const HQ = mQ.reduce(((QQ, FQ) => QQ + (FQ.indices?.length ?? 0)), uQ.indices?.length ?? 0);
          let bQ = DQ || mQ.some((QQ => QQ.indices === uQ.indices)) ? uQ.indices?.slice() : uQ.indices;
          if (HQ > 0) {
            let oQ = bQ?.length ?? 0;
            if (bQ || (bQ = new Array(HQ)), bQ.length !== HQ) {
              if (Array.isArray(bQ)) bQ.length = HQ;
              else {
                const QQ = LQ || bQ instanceof Uint32Array ? new Uint32Array(HQ) : new Uint16Array(HQ);
                QQ.set(bQ), bQ = QQ
              }
              FQ && FQ.determinant() < 0 && QQ._FlipFaces(bQ, 0, oQ)
            }
            let DQ = uQ.positions ? uQ.positions.length / 3 : 0;
            for (const {
                vertexData: FQ,
                transform: LQ
              }
              of wQ)
              if (FQ.indices) {
                for (let QQ = 0; QQ < FQ.indices.length; QQ++) bQ[oQ + QQ] = FQ.indices[QQ] + DQ;
                LQ && LQ.determinant() < 0 && QQ._FlipFaces(bQ, oQ, FQ.indices.length), DQ += FQ.positions.length / 3, oQ += FQ.indices.length, qQ && (yield)
              }
          }
          return this.indices = bQ, this.positions = QQ._MergeElement(oQ.h.PositionKind, uQ.positions, FQ, wQ.map((QQ => [QQ.vertexData.positions, QQ.transform]))), qQ && (yield), uQ.normals && (this.normals = QQ._MergeElement(oQ.h.NormalKind, uQ.normals, FQ, wQ.map((QQ => [QQ.vertexData.normals, QQ.transform]))), qQ && (yield)), uQ.tangents && (this.tangents = QQ._MergeElement(oQ.h.TangentKind, uQ.tangents, FQ, wQ.map((QQ => [QQ.vertexData.tangents, QQ.transform]))), qQ && (yield)), uQ.uvs && (this.uvs = QQ._MergeElement(oQ.h.UVKind, uQ.uvs, FQ, wQ.map((QQ => [QQ.vertexData.uvs, QQ.transform]))), qQ && (yield)), uQ.uvs2 && (this.uvs2 = QQ._MergeElement(oQ.h.UV2Kind, uQ.uvs2, FQ, wQ.map((QQ => [QQ.vertexData.uvs2, QQ.transform]))), qQ && (yield)), uQ.uvs3 && (this.uvs3 = QQ._MergeElement(oQ.h.UV3Kind, uQ.uvs3, FQ, wQ.map((QQ => [QQ.vertexData.uvs3, QQ.transform]))), qQ && (yield)), uQ.uvs4 && (this.uvs4 = QQ._MergeElement(oQ.h.UV4Kind, uQ.uvs4, FQ, wQ.map((QQ => [QQ.vertexData.uvs4, QQ.transform]))), qQ && (yield)), uQ.uvs5 && (this.uvs5 = QQ._MergeElement(oQ.h.UV5Kind, uQ.uvs5, FQ, wQ.map((QQ => [QQ.vertexData.uvs5, QQ.transform]))), qQ && (yield)), uQ.uvs6 && (this.uvs6 = QQ._MergeElement(oQ.h.UV6Kind, uQ.uvs6, FQ, wQ.map((QQ => [QQ.vertexData.uvs6, QQ.transform]))), qQ && (yield)), uQ.colors && (this.colors = QQ._MergeElement(oQ.h.ColorKind, uQ.colors, FQ, wQ.map((QQ => [QQ.vertexData.colors, QQ.transform]))), (void 0 !== uQ.hasVertexAlpha || wQ.some((QQ => void 0 !== QQ.vertexData.hasVertexAlpha))) && (this.hasVertexAlpha = uQ.hasVertexAlpha || wQ.some((QQ => QQ.vertexData.hasVertexAlpha))), qQ && (yield)), uQ.matricesIndices && (this.matricesIndices = QQ._MergeElement(oQ.h.MatricesIndicesKind, uQ.matricesIndices, FQ, wQ.map((QQ => [QQ.vertexData.matricesIndices, QQ.transform]))), qQ && (yield)), uQ.matricesWeights && (this.matricesWeights = QQ._MergeElement(oQ.h.MatricesWeightsKind, uQ.matricesWeights, FQ, wQ.map((QQ => [QQ.vertexData.matricesWeights, QQ.transform]))), qQ && (yield)), uQ.matricesIndicesExtra && (this.matricesIndicesExtra = QQ._MergeElement(oQ.h.MatricesIndicesExtraKind, uQ.matricesIndicesExtra, FQ, wQ.map((QQ => [QQ.vertexData.matricesIndicesExtra, QQ.transform]))), qQ && (yield)), uQ.matricesWeightsExtra && (this.matricesWeightsExtra = QQ._MergeElement(oQ.h.MatricesWeightsExtraKind, uQ.matricesWeightsExtra, FQ, wQ.map((QQ => [QQ.vertexData.matricesWeightsExtra, QQ.transform])))), this
        }
        static _MergeElement(FQ, wQ, LQ, qQ) {
          const DQ = qQ.filter((QQ => null !== QQ[0] && void 0 !== QQ[0]));
          if (!wQ && 0 == DQ.length) return wQ;
          if (!wQ) return this._MergeElement(FQ, DQ[0][0], DQ[0][1], DQ.slice(1));
          const kQ = DQ.reduce(((QQ, FQ) => QQ + FQ[0].length), wQ.length),
            vQ = FQ === oQ.h.PositionKind ? QQ._TransformVector3Coordinates : FQ === oQ.h.NormalKind ? QQ._TransformVector3Normals : FQ === oQ.h.TangentKind ? QQ._TransformVector4Normals : () => {};
          if (wQ instanceof Float32Array) {
            const QQ = new Float32Array(kQ);
            QQ.set(wQ), LQ && vQ(QQ, LQ, 0, wQ.length);
            let FQ = wQ.length;
            for (const [wQ, LQ] of DQ) QQ.set(wQ, FQ), LQ && vQ(QQ, LQ, FQ, wQ.length), FQ += wQ.length;
            return QQ
          } {
            const QQ = new Array(kQ);
            for (let LQ = 0; LQ < wQ.length; LQ++) QQ[LQ] = wQ[LQ];
            LQ && vQ(QQ, LQ, 0, wQ.length);
            let FQ = wQ.length;
            for (const [wQ, LQ] of DQ) {
              for (let LQ = 0; LQ < wQ.length; LQ++) QQ[FQ + LQ] = wQ[LQ];
              LQ && vQ(QQ, LQ, FQ, wQ.length), FQ += wQ.length
            }
            return QQ
          }
        }
        _validate() {
          if (!this.positions) throw new HQ.i("Positions are required", HQ.f.MeshInvalidPositionsError);
          const QQ = (QQ, FQ) => {
              const wQ = (0, oQ.e)(QQ);
              if (FQ.length % wQ !== 0) throw new Error("The " + QQ + "s array count must be a multiple of " + wQ);
              return FQ.length / wQ
            },
            FQ = QQ(oQ.h.PositionKind, this.positions),
            wQ = (wQ, LQ) => {
              const qQ = QQ(wQ, LQ);
              if (qQ !== FQ) throw new Error("The " + wQ + "s element count (" + qQ + ") does not match the positions count (" + FQ + ")")
            };
          this.normals && wQ(oQ.h.NormalKind, this.normals), this.tangents && wQ(oQ.h.TangentKind, this.tangents), this.uvs && wQ(oQ.h.UVKind, this.uvs), this.uvs2 && wQ(oQ.h.UV2Kind, this.uvs2), this.uvs3 && wQ(oQ.h.UV3Kind, this.uvs3), this.uvs4 && wQ(oQ.h.UV4Kind, this.uvs4), this.uvs5 && wQ(oQ.h.UV5Kind, this.uvs5), this.uvs6 && wQ(oQ.h.UV6Kind, this.uvs6), this.colors && wQ(oQ.h.ColorKind, this.colors), this.matricesIndices && wQ(oQ.h.MatricesIndicesKind, this.matricesIndices), this.matricesWeights && wQ(oQ.h.MatricesWeightsKind, this.matricesWeights), this.matricesIndicesExtra && wQ(oQ.h.MatricesIndicesExtraKind, this.matricesIndicesExtra), this.matricesWeightsExtra && wQ(oQ.h.MatricesWeightsExtraKind, this.matricesWeightsExtra)
        }
        clone() {
          const FQ = this.serialize();
          return QQ.Parse(FQ)
        }
        serialize() {
          const QQ = {};
          if (this.positions && (QQ.positions = Array.from(this.positions)), this.normals && (QQ.normals = Array.from(this.normals)), this.tangents && (QQ.tangents = Array.from(this.tangents)), this.uvs && (QQ.uvs = Array.from(this.uvs)), this.uvs2 && (QQ.uvs2 = Array.from(this.uvs2)), this.uvs3 && (QQ.uvs3 = Array.from(this.uvs3)), this.uvs4 && (QQ.uvs4 = Array.from(this.uvs4)), this.uvs5 && (QQ.uvs5 = Array.from(this.uvs5)), this.uvs6 && (QQ.uvs6 = Array.from(this.uvs6)), this.colors && (QQ.colors = Array.from(this.colors), QQ.hasVertexAlpha = this.hasVertexAlpha), this.matricesIndices && (QQ.matricesIndices = Array.from(this.matricesIndices), QQ.matricesIndicesExpanded = !0), this.matricesWeights && (QQ.matricesWeights = Array.from(this.matricesWeights)), this.matricesIndicesExtra && (QQ.matricesIndicesExtra = Array.from(this.matricesIndicesExtra), QQ.matricesIndicesExtraExpanded = !0), this.matricesWeightsExtra && (QQ.matricesWeightsExtra = Array.from(this.matricesWeightsExtra)), QQ.indices = this.indices ? Array.from(this.indices) : [], this.materialInfos) {
            QQ.materialInfos = [];
            for (const FQ of this.materialInfos) {
              const wQ = {
                indexStart: FQ.indexStart,
                indexCount: FQ.indexCount,
                materialIndex: FQ.materialIndex,
                verticesStart: FQ.verticesStart,
                verticesCount: FQ.verticesCount
              };
              QQ.materialInfos.push(wQ)
            }
          }
          return QQ
        }
        static ExtractFromMesh(FQ, wQ, LQ) {
          return QQ._ExtractFrom(FQ, wQ, LQ)
        }
        static ExtractFromGeometry(FQ, wQ, LQ) {
          return QQ._ExtractFrom(FQ, wQ, LQ)
        }
        static _ExtractFrom(FQ, wQ, LQ) {
          const qQ = new QQ;
          if (FQ.isVerticesDataPresent(oQ.h.PositionKind) && (qQ.positions = FQ.getVerticesData(oQ.h.PositionKind, wQ, LQ)), FQ.isVerticesDataPresent(oQ.h.NormalKind) && (qQ.normals = FQ.getVerticesData(oQ.h.NormalKind, wQ, LQ)), FQ.isVerticesDataPresent(oQ.h.TangentKind) && (qQ.tangents = FQ.getVerticesData(oQ.h.TangentKind, wQ, LQ)), FQ.isVerticesDataPresent(oQ.h.UVKind) && (qQ.uvs = FQ.getVerticesData(oQ.h.UVKind, wQ, LQ)), FQ.isVerticesDataPresent(oQ.h.UV2Kind) && (qQ.uvs2 = FQ.getVerticesData(oQ.h.UV2Kind, wQ, LQ)), FQ.isVerticesDataPresent(oQ.h.UV3Kind) && (qQ.uvs3 = FQ.getVerticesData(oQ.h.UV3Kind, wQ, LQ)), FQ.isVerticesDataPresent(oQ.h.UV4Kind) && (qQ.uvs4 = FQ.getVerticesData(oQ.h.UV4Kind, wQ, LQ)), FQ.isVerticesDataPresent(oQ.h.UV5Kind) && (qQ.uvs5 = FQ.getVerticesData(oQ.h.UV5Kind, wQ, LQ)), FQ.isVerticesDataPresent(oQ.h.UV6Kind) && (qQ.uvs6 = FQ.getVerticesData(oQ.h.UV6Kind, wQ, LQ)), FQ.isVerticesDataPresent(oQ.h.ColorKind)) {
            const QQ = FQ.geometry || FQ,
              DQ = QQ.getVertexBuffer(oQ.h.ColorKind),
              kQ = QQ.getVerticesData(oQ.h.ColorKind, wQ, LQ);
            if (3 === DQ.getSize()) {
              const QQ = new Float32Array(4 * kQ.length / 3);
              for (let FQ = 0, wQ = 0; FQ < kQ.length; FQ += 3, wQ += 4) QQ[wQ] = kQ[FQ], QQ[wQ + 1] = kQ[FQ + 1], QQ[wQ + 2] = kQ[FQ + 2], QQ[wQ + 3] = 1;
              qQ.colors = QQ
            } else {
              if (4 !== DQ.getSize()) throw new Error(`Unexpected number of color components: ${DQ.getSize()}`);
              qQ.colors = kQ
            }
          }
          return FQ.isVerticesDataPresent(oQ.h.MatricesIndicesKind) && (qQ.matricesIndices = FQ.getVerticesData(oQ.h.MatricesIndicesKind, wQ, LQ)), FQ.isVerticesDataPresent(oQ.h.MatricesWeightsKind) && (qQ.matricesWeights = FQ.getVerticesData(oQ.h.MatricesWeightsKind, wQ, LQ)), FQ.isVerticesDataPresent(oQ.h.MatricesIndicesExtraKind) && (qQ.matricesIndicesExtra = FQ.getVerticesData(oQ.h.MatricesIndicesExtraKind, wQ, LQ)), FQ.isVerticesDataPresent(oQ.h.MatricesWeightsExtraKind) && (qQ.matricesWeightsExtra = FQ.getVerticesData(oQ.h.MatricesWeightsExtraKind, wQ, LQ)), qQ.indices = FQ.OLQ(wQ, LQ), qQ
        }
        static CreateRibbon(QQ) {
          throw (0, DQ.k)("ribbonBuilder")
        }
        static CreateBox(QQ) {
          throw (0, DQ.k)("boxBuilder")
        }
        static CreateTiledBox(QQ) {
          throw (0, DQ.k)("tiledBoxBuilder")
        }
        static CreateTiledPlane(QQ) {
          throw (0, DQ.k)("tiledPlaneBuilder")
        }
        static CreateSphere(QQ) {
          throw (0, DQ.k)("sphereBuilder")
        }
        static CreateCylinder(QQ) {
          throw (0, DQ.k)("cylinderBuilder")
        }
        static CreateTorus(QQ) {
          throw (0, DQ.k)("torusBuilder")
        }
        static CreateLineSystem(QQ) {
          throw (0, DQ.k)("linesBuilder")
        }
        static CreateDashedLines(QQ) {
          throw (0, DQ.k)("linesBuilder")
        }
        static CreateGround(QQ) {
          throw (0, DQ.k)("groundBuilder")
        }
        static CreateTiledGround(QQ) {
          throw (0, DQ.k)("groundBuilder")
        }
        static CreateGroundFromHeightMap(QQ) {
          throw (0, DQ.k)("groundBuilder")
        }
        static CreatePlane(QQ) {
          throw (0, DQ.k)("planeBuilder")
        }
        static CreateDisc(QQ) {
          throw (0, DQ.k)("discBuilder")
        }
        static CreatePolygon(QQ, FQ, wQ, LQ, qQ, oQ, kQ) {
          throw (0, DQ.k)("polygonBuilder")
        }
        static CreateIcoSphere(QQ) {
          throw (0, DQ.k)("icoSphereBuilder")
        }
        static CreatePolyhedron(QQ) {
          throw (0, DQ.k)("polyhedronBuilder")
        }
        static CreateCapsule() {
          arguments.length > 0 && void 0 !== arguments[0] || qQ.p.Up();
          throw (0, DQ.k)("capsuleBuilder")
        }
        static CreateTorusKnot(QQ) {
          throw (0, DQ.k)("torusKnotBuilder")
        }
        static ComputeNormals(QQ, FQ, wQ, LQ) {
          let oQ, DQ, kQ, vQ, mQ, uQ, HQ, bQ, YQ, xQ, AQ, tQ, eQ, MQ, GQ, pQ, cQ, CQ, SQ, iQ, WQ = !1,
            RQ = !1,
            OQ = !1,
            sQ = !1,
            rQ = 1,
            IQ = 0,
            UQ = null;
          LQ && (WQ = !!LQ.facetNormals, RQ = !!LQ.facetPositions, OQ = !!LQ.facetPartitioning, rQ = !0 === LQ.useRightHandedSystem ? -1 : 1, IQ = LQ.ratio || 0, sQ = !!LQ.depthSort, UQ = LQ.distanceTo, sQ && void 0 === UQ && (UQ = qQ.p.Zero()));
          let NQ = 0,
            TQ = 0,
            KQ = 0,
            zQ = 0;
          for (OQ && LQ && LQ.bbSize && (NQ = LQ.subDiv.X * IQ / LQ.bbSize.x, TQ = LQ.subDiv.Y * IQ / LQ.bbSize.y, KQ = LQ.subDiv.Z * IQ / LQ.bbSize.z, zQ = LQ.subDiv.max * LQ.subDiv.max, LQ.facetPartitioning.length = 0), oQ = 0; oQ < QQ.length; oQ++) wQ[oQ] = 0;
          const lQ = FQ.length / 3 | 0;
          for (oQ = 0; oQ < lQ; oQ++) {
            if (tQ = 3 * FQ[3 * oQ], eQ = tQ + 1, MQ = tQ + 2, GQ = 3 * FQ[3 * oQ + 1], pQ = GQ + 1, cQ = GQ + 2, CQ = 3 * FQ[3 * oQ + 2], SQ = CQ + 1, iQ = CQ + 2, DQ = QQ[tQ] - QQ[GQ], kQ = QQ[eQ] - QQ[pQ], vQ = QQ[MQ] - QQ[cQ], mQ = QQ[CQ] - QQ[GQ], uQ = QQ[SQ] - QQ[pQ], HQ = QQ[iQ] - QQ[cQ], bQ = rQ * (kQ * HQ - vQ * uQ), YQ = rQ * (vQ * mQ - DQ * HQ), xQ = rQ * (DQ * uQ - kQ * mQ), AQ = Math.sqrt(bQ * bQ + YQ * YQ + xQ * xQ), AQ = 0 === AQ ? 1 : AQ, bQ /= AQ, YQ /= AQ, xQ /= AQ, WQ && LQ && (LQ.facetNormals[oQ].x = bQ, LQ.facetNormals[oQ].y = YQ, LQ.facetNormals[oQ].z = xQ), RQ && LQ && (LQ.facetPositions[oQ].x = (QQ[tQ] + QQ[GQ] + QQ[CQ]) / 3, LQ.facetPositions[oQ].y = (QQ[eQ] + QQ[pQ] + QQ[SQ]) / 3, LQ.facetPositions[oQ].z = (QQ[MQ] + QQ[cQ] + QQ[iQ]) / 3), OQ && LQ) {
              const FQ = Math.floor((LQ.facetPositions[oQ].x - LQ.bInfo.minimum.x * IQ) * NQ),
                wQ = Math.floor((LQ.facetPositions[oQ].y - LQ.bInfo.minimum.y * IQ) * TQ),
                qQ = Math.floor((LQ.facetPositions[oQ].z - LQ.bInfo.minimum.z * IQ) * KQ),
                DQ = Math.floor((QQ[tQ] - LQ.bInfo.minimum.x * IQ) * NQ),
                kQ = Math.floor((QQ[eQ] - LQ.bInfo.minimum.y * IQ) * TQ),
                vQ = Math.floor((QQ[MQ] - LQ.bInfo.minimum.z * IQ) * KQ),
                mQ = Math.floor((QQ[GQ] - LQ.bInfo.minimum.x * IQ) * NQ),
                uQ = Math.floor((QQ[pQ] - LQ.bInfo.minimum.y * IQ) * TQ),
                HQ = Math.floor((QQ[cQ] - LQ.bInfo.minimum.z * IQ) * KQ),
                bQ = Math.floor((QQ[CQ] - LQ.bInfo.minimum.x * IQ) * NQ),
                YQ = Math.floor((QQ[SQ] - LQ.bInfo.minimum.y * IQ) * TQ),
                xQ = Math.floor((QQ[iQ] - LQ.bInfo.minimum.z * IQ) * KQ),
                AQ = DQ + LQ.subDiv.max * kQ + zQ * vQ,
                WQ = mQ + LQ.subDiv.max * uQ + zQ * HQ,
                RQ = bQ + LQ.subDiv.max * YQ + zQ * xQ,
                OQ = FQ + LQ.subDiv.max * wQ + zQ * qQ;
              LQ.facetPartitioning[OQ] = LQ.facetPartitioning[OQ] ? LQ.facetPartitioning[OQ] : [], LQ.facetPartitioning[AQ] = LQ.facetPartitioning[AQ] ? LQ.facetPartitioning[AQ] : [], LQ.facetPartitioning[WQ] = LQ.facetPartitioning[WQ] ? LQ.facetPartitioning[WQ] : [], LQ.facetPartitioning[RQ] = LQ.facetPartitioning[RQ] ? LQ.facetPartitioning[RQ] : [], LQ.facetPartitioning[AQ].push(oQ), WQ != AQ && LQ.facetPartitioning[WQ].push(oQ), RQ != WQ && RQ != AQ && LQ.facetPartitioning[RQ].push(oQ), OQ != AQ && OQ != WQ && OQ != RQ && LQ.facetPartitioning[OQ].push(oQ)
            }
            if (sQ && LQ && LQ.facetPositions) {
              const QQ = LQ.depthSortedFacets[oQ];
              QQ.ind = 3 * oQ, QQ.sqDistance = qQ.p.DistanceSquared(LQ.facetPositions[oQ], UQ)
            }
            wQ[tQ] += bQ, wQ[eQ] += YQ, wQ[MQ] += xQ, wQ[GQ] += bQ, wQ[pQ] += YQ, wQ[cQ] += xQ, wQ[CQ] += bQ, wQ[SQ] += YQ, wQ[iQ] += xQ
          }
          for (oQ = 0; oQ < wQ.length / 3; oQ++) bQ = wQ[3 * oQ], YQ = wQ[3 * oQ + 1], xQ = wQ[3 * oQ + 2], AQ = Math.sqrt(bQ * bQ + YQ * YQ + xQ * xQ), AQ = 0 === AQ ? 1 : AQ, bQ /= AQ, YQ /= AQ, xQ /= AQ, wQ[3 * oQ] = bQ, wQ[3 * oQ + 1] = YQ, wQ[3 * oQ + 2] = xQ
        }
        static _ComputeSides(FQ, wQ, LQ, oQ, DQ, kQ, vQ) {
          const mQ = LQ.length,
            uQ = oQ.length;
          let HQ, bQ;
          switch (FQ = FQ || QQ.DEFAULTSIDE) {
            case QQ.FRONTSIDE:
              break;
            case QQ.BACKSIDE:
              for (HQ = 0; HQ < mQ; HQ += 3) {
                const QQ = LQ[HQ];
                LQ[HQ] = LQ[HQ + 2], LQ[HQ + 2] = QQ
              }
              for (bQ = 0; bQ < uQ; bQ++) oQ[bQ] = -oQ[bQ];
              break;
            case QQ.DOUBLESIDE: {
              const QQ = wQ.length,
                FQ = QQ / 3;
              for (let LQ = 0; LQ < QQ; LQ++) wQ[QQ + LQ] = wQ[LQ];
              for (HQ = 0; HQ < mQ; HQ += 3) LQ[HQ + mQ] = LQ[HQ + 2] + FQ, LQ[HQ + 1 + mQ] = LQ[HQ + 1] + FQ, LQ[HQ + 2 + mQ] = LQ[HQ] + FQ;
              for (bQ = 0; bQ < uQ; bQ++) oQ[uQ + bQ] = -oQ[bQ];
              const YQ = DQ.length;
              let xQ;
              for (xQ = 0; xQ < YQ; xQ++) DQ[xQ + YQ] = DQ[xQ];
              for (kQ = kQ || new qQ.t(0, 0, 1, 1), vQ = vQ || new qQ.t(0, 0, 1, 1), xQ = 0, HQ = 0; HQ < YQ / 2; HQ++) DQ[xQ] = kQ.x + (kQ.z - kQ.x) * DQ[xQ], DQ[xQ + 1] = kQ.y + (kQ.w - kQ.y) * DQ[xQ + 1], DQ[xQ + YQ] = vQ.x + (vQ.z - vQ.x) * DQ[xQ + YQ], DQ[xQ + YQ + 1] = vQ.y + (vQ.w - vQ.y) * DQ[xQ + YQ + 1], xQ += 2;
              break
            }
          }
        }
        static Parse(FQ) {
          const wQ = new QQ,
            LQ = FQ.positions;
          LQ && wQ.set(LQ, oQ.h.PositionKind);
          const qQ = FQ.normals;
          qQ && wQ.set(qQ, oQ.h.NormalKind);
          const DQ = FQ.tangents;
          DQ && wQ.set(DQ, oQ.h.TangentKind);
          const vQ = FQ.uvs;
          vQ && wQ.set(vQ, oQ.h.UVKind);
          const mQ = FQ.uvs2;
          mQ && wQ.set(mQ, oQ.h.UV2Kind);
          const uQ = FQ.uvs3;
          uQ && wQ.set(uQ, oQ.h.UV3Kind);
          const HQ = FQ.uvs4;
          HQ && wQ.set(HQ, oQ.h.UV4Kind);
          const bQ = FQ.uvs5;
          bQ && wQ.set(bQ, oQ.h.UV5Kind);
          const xQ = FQ.uvs6;
          xQ && wQ.set(xQ, oQ.h.UV6Kind);
          const AQ = FQ.colors;
          AQ && (wQ.set(kQ.e.CheckColors4(AQ, LQ.length / 3), oQ.h.ColorKind), void 0 !== FQ.hasVertexAlpha && (wQ.hasVertexAlpha = FQ.hasVertexAlpha));
          const tQ = FQ.matricesIndices;
          tQ && wQ.set(tQ, oQ.h.MatricesIndicesKind);
          const eQ = FQ.matricesWeights;
          eQ && wQ.set(eQ, oQ.h.MatricesWeightsKind);
          const MQ = FQ.indices;
          MQ && (wQ.indices = MQ);
          const GQ = FQ.materialInfos;
          if (GQ) {
            wQ.materialInfos = [];
            for (const QQ of GQ) {
              const FQ = new YQ;
              FQ.indexCount = QQ.indexCount, FQ.indexStart = QQ.indexStart, FQ.verticesCount = QQ.verticesCount, FQ.verticesStart = QQ.verticesStart, FQ.materialIndex = QQ.materialIndex, wQ.materialInfos.push(FQ)
            }
          }
          return wQ
        }
        static ImportVertexData(FQ, wQ) {
          const LQ = QQ.Parse(FQ);
          wQ.setAllVerticesData(LQ, FQ.updatable)
        }
      }, (() => {
        const qQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        FQ = [mQ.i.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], wQ = [mQ.i.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], xQ = [mQ.i.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], AQ = [mQ.i.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], (0, LQ.i)(QQ, null, FQ, {
          kind: "method",
          name: "_TransformVector3Coordinates",
          static: !0,
          private: !1,
          access: {
            has: QQ => "_TransformVector3Coordinates" in QQ,
            get: QQ => QQ._TransformVector3Coordinates
          },
          metadata: qQ
        }, null, tQ), (0, LQ.i)(QQ, null, wQ, {
          kind: "method",
          name: "_TransformVector3Normals",
          static: !0,
          private: !1,
          access: {
            has: QQ => "_TransformVector3Normals" in QQ,
            get: QQ => QQ._TransformVector3Normals
          },
          metadata: qQ
        }, null, tQ), (0, LQ.i)(QQ, null, xQ, {
          kind: "method",
          name: "_TransformVector4Normals",
          static: !0,
          private: !1,
          access: {
            has: QQ => "_TransformVector4Normals" in QQ,
            get: QQ => QQ._TransformVector4Normals
          },
          metadata: qQ
        }, null, tQ), (0, LQ.i)(QQ, null, AQ, {
          kind: "method",
          name: "_FlipFaces",
          static: !0,
          private: !1,
          access: {
            has: QQ => "_FlipFaces" in QQ,
            get: QQ => QQ._FlipFaces
          },
          metadata: qQ
        }, null, tQ), qQ && Object.defineProperty(QQ, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: qQ
        })
      })(), QQ.FRONTSIDE = ((0, LQ.l)(QQ, tQ), 0), QQ.BACKSIDE = 1, QQ.DOUBLESIDE = 2, QQ.DEFAULTSIDE = 0, QQ._UniqueIdGenerator = 0, QQ
    })()
  },
  39906: (QQ, FQ, wQ) => {
    var LQ = wQ(36696),
      qQ = wQ(38203),
      oQ = wQ(39731),
      DQ = wQ(39829),
      kQ = wQ(39561);
    const vQ = "bakedVertexAnimationSettingsInstanced";

    function mQ(QQ) {
      const FQ = QQ.bakedVertexAnimationManager?.texture?.getInternalTexture()?._bufferView;
      return FQ instanceof Float32Array || FQ instanceof Uint16Array
    }

    function uQ(QQ, FQ, wQ, LQ) {
      wQ.K3(Number.POSITIVE_INFINITY), LQ.K3(Number.NEGATIVE_INFINITY);
      for (let qQ = 0; qQ < 3 * FQ; qQ += 3) {
        const FQ = QQ[qQ],
          oQ = QQ[qQ + 1],
          DQ = QQ[qQ + 2];
        FQ < wQ.x && (wQ.x = FQ), oQ < wQ.y && (wQ.y = oQ), DQ < wQ.z && (wQ.z = DQ), FQ > LQ.x && (LQ.x = FQ), oQ > LQ.y && (LQ.y = oQ), DQ > LQ.z && (LQ.z = DQ)
      }
    }

    function HQ(QQ, FQ, wQ) {
      wQ && (QQ.x -= QQ.x * wQ.x + wQ.y, QQ.y -= QQ.y * wQ.x + wQ.y, QQ.z -= QQ.z * wQ.x + wQ.y, FQ.x += FQ.x * wQ.x + wQ.y, FQ.y += FQ.y * wQ.x + wQ.y, FQ.z += FQ.z * wQ.x + wQ.y)
    }

    function bQ(QQ, FQ, wQ, qQ, oQ) {
      const DQ = LQ.k.Ox[7],
        kQ = LQ.k.Ox[8];
      for (let vQ = 0; vQ < 2; ++vQ)
        for (let mQ = 0; mQ < 2; ++mQ)
          for (let uQ = 0; uQ < 2; ++uQ) DQ.set(vQ ? FQ.x : QQ.x, mQ ? FQ.y : QQ.y, uQ ? FQ.z : QQ.z), LQ.p.TransformCoordinatesToRef(DQ, wQ, kQ), qQ.minimizeInPlace(kQ), oQ.maximizeInPlace(kQ)
    }

    function YQ(QQ, FQ, wQ, qQ, oQ) {
      const DQ = LQ.k.Ox[7];
      for (let kQ = 0; kQ < 3 * FQ; kQ += 3) LQ.p.TransformCoordinatesFromFloatsToRef(QQ[kQ], QQ[kQ + 1], QQ[kQ + 2], wQ, DQ), qQ.minimizeInPlace(DQ), oQ.maximizeInPlace(DQ)
    }
    let xQ = !1;
    xQ || (xQ = !0, DQ.c.prototype.thinInstanceAdd = function(QQ) {
      let FQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (!this.iN().Wx().getCaps().instancedArrays) return qQ.c.Error("Thin Instances are not supported on this device as Instanced Array extension not supported"), -1;
      this._thinInstanceUpdateBufferSize("matrix", Array.isArray(QQ) ? QQ.length : 1);
      const wQ = this._thinInstanceDataStorage.instancesCount;
      if (Array.isArray(QQ))
        for (let LQ = 0; LQ < QQ.length; ++LQ) this.thinInstanceSetMatrixAt(this._thinInstanceDataStorage.instancesCount++, QQ[LQ], LQ === QQ.length - 1 && FQ);
      else this.thinInstanceSetMatrixAt(this._thinInstanceDataStorage.instancesCount++, QQ, FQ);
      return wQ
    }, DQ.c.prototype.thinInstanceAddSelf = function() {
      let QQ = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      return this.thinInstanceAdd(LQ.c.IdentityReadOnly, QQ)
    }, DQ.c.prototype.thinInstanceRegisterAttribute = function(QQ, FQ) {
      QQ === kQ.h.ColorKind && (QQ = kQ.h.ColorInstanceKind), this.removeVerticesData(QQ), this._thinInstanceInitializeUserStorage(), this._userThinInstanceBuffersStorage.strides[QQ] = FQ, this._userThinInstanceBuffersStorage.sizes[QQ] = FQ * Math.max(32, this._thinInstanceDataStorage.instancesCount), this._userThinInstanceBuffersStorage.data[QQ] = new Float32Array(this._userThinInstanceBuffersStorage.sizes[QQ]), this._userThinInstanceBuffersStorage.vertexBuffers[QQ] = new kQ.h(this.Wx(), this._userThinInstanceBuffersStorage.data[QQ], QQ, !0, !1, FQ, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[QQ])
    }, DQ.c.prototype.thinInstanceSetMatrixAt = function(QQ, FQ) {
      let wQ = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      if (!this._thinInstanceDataStorage.matrixData || QQ >= this._thinInstanceDataStorage.instancesCount) return !1;
      const LQ = this._thinInstanceDataStorage.matrixData;
      return FQ.copyToArray(LQ, 16 * QQ), this._thinInstanceDataStorage.worldMatrices && (this._thinInstanceDataStorage.worldMatrices[QQ] = FQ), wQ && (this.I5("matrix"), this.Ix || this.thinInstanceRefreshBoundingInfo(!1)), !0
    }, DQ.c.prototype.thinInstanceSetAttributeAt = function(QQ, FQ, wQ) {
      let LQ = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      return QQ === kQ.h.ColorKind && (QQ = kQ.h.ColorInstanceKind), !(!this._userThinInstanceBuffersStorage || !this._userThinInstanceBuffersStorage.data[QQ] || FQ >= this._thinInstanceDataStorage.instancesCount) && (this._thinInstanceUpdateBufferSize(QQ, 0), this._userThinInstanceBuffersStorage.data[QQ].set(wQ, FQ * this._userThinInstanceBuffersStorage.strides[QQ]), LQ && this.I5(QQ), !0)
    }, Object.defineProperty(DQ.c.prototype, "o4", {
      get: function() {
        return this._thinInstanceDataStorage.instancesCount
      },
      set: function(QQ) {
        const FQ = this._thinInstanceDataStorage.matrixData ?? this.source?._thinInstanceDataStorage.matrixData;
        QQ <= (FQ ? FQ.length / 16 : 0) && (this._thinInstanceDataStorage.instancesCount = QQ)
      },
      enumerable: !0,
      configurable: !0
    }), DQ.c.prototype._thinInstanceCreateMatrixBuffer = function(QQ, FQ) {
      let wQ = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      const LQ = new kQ.c(this.Wx(), FQ, !wQ, 16, !1, !0);
      for (let qQ = 0; qQ < 4; qQ++) this.setVerticesBuffer(LQ.createVertexBuffer(QQ + qQ, 4 * qQ, 4));
      return LQ
    }, DQ.c.prototype.FQQ = function(QQ, FQ) {
      let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        LQ = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      if (wQ = wQ || 16, "matrix" === QQ) this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = null, this._thinInstanceDataStorage.matrixBufferSize = FQ ? FQ.length : 32 * wQ, this._thinInstanceDataStorage.matrixData = FQ, this._thinInstanceDataStorage.worldMatrices = null, null !== FQ ? (this._thinInstanceDataStorage.instancesCount = FQ.length / wQ, this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", FQ, LQ), this.Ix || this.thinInstanceRefreshBoundingInfo(!1)) : (this._thinInstanceDataStorage.instancesCount = 0, this.Ix || this.refreshBoundingInfo());
      else if ("previousMatrix" === QQ) this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = null, this._thinInstanceDataStorage.previousMatrixData = FQ, null !== FQ && (this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", FQ, LQ));
      else if ("splatIndex" === QQ && FQ) {
        this._thinInstanceInitializeUserStorage(), this._thinInstanceDataStorage.instancesCount = FQ.length / wQ, this._userThinInstanceBuffersStorage.data[QQ] = FQ, this._userThinInstanceBuffersStorage.strides[QQ] = wQ, this._userThinInstanceBuffersStorage.sizes[QQ] = FQ.length;
        const LQ = new kQ.c(this.Wx(), FQ, !0, 16, !1, !0);
        this._thinInstanceDataStorage.matrixBuffer = LQ;
        for (let FQ = 0; FQ < 4; FQ++) this.setVerticesBuffer(LQ.createVertexBuffer(QQ + FQ, 4 * FQ, 4))
      } else QQ === kQ.h.ColorKind && (QQ = kQ.h.ColorInstanceKind), null === FQ ? this._userThinInstanceBuffersStorage?.data[QQ] && (this.removeVerticesData(QQ), delete this._userThinInstanceBuffersStorage.data[QQ], delete this._userThinInstanceBuffersStorage.strides[QQ], delete this._userThinInstanceBuffersStorage.sizes[QQ], delete this._userThinInstanceBuffersStorage.vertexBuffers[QQ]) : (this._thinInstanceInitializeUserStorage(), this._userThinInstanceBuffersStorage.data[QQ] = FQ, this._userThinInstanceBuffersStorage.strides[QQ] = wQ, this._userThinInstanceBuffersStorage.sizes[QQ] = FQ.length, this._userThinInstanceBuffersStorage.vertexBuffers[QQ] = new kQ.h(this.Wx(), FQ, QQ, !LQ, !1, wQ, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[QQ]))
    }, DQ.c.prototype.I5 = function(QQ) {
      "matrix" === QQ ? (this.thinInstanceAllowAutomaticStaticBufferRecreation && this._thinInstanceDataStorage.matrixBuffer && !this._thinInstanceDataStorage.matrixBuffer.isUpdatable() && this._thinInstanceRecreateBuffer(QQ), this._thinInstanceDataStorage.matrixBuffer?.updateDirectly(this._thinInstanceDataStorage.matrixData, 0, this._thinInstanceDataStorage.instancesCount)) : "previousMatrix" === QQ ? (this.thinInstanceAllowAutomaticStaticBufferRecreation && this._thinInstanceDataStorage.previousMatrixBuffer && !this._thinInstanceDataStorage.previousMatrixBuffer.isUpdatable() && this._thinInstanceRecreateBuffer(QQ), this._thinInstanceDataStorage.previousMatrixBuffer?.updateDirectly(this._thinInstanceDataStorage.previousMatrixData, 0, this._thinInstanceDataStorage.instancesCount)) : "splatIndex" === QQ ? this._thinInstanceDataStorage.matrixBuffer?.updateDirectly(this._userThinInstanceBuffersStorage.data[QQ], 0, this._thinInstanceDataStorage.instancesCount) : (QQ === kQ.h.ColorKind && (QQ = kQ.h.ColorInstanceKind), this._userThinInstanceBuffersStorage?.vertexBuffers[QQ] && (this.thinInstanceAllowAutomaticStaticBufferRecreation && !this._userThinInstanceBuffersStorage.vertexBuffers[QQ].isUpdatable() && this._thinInstanceRecreateBuffer(QQ), this._userThinInstanceBuffersStorage.vertexBuffers[QQ].updateDirectly(this._userThinInstanceBuffersStorage.data[QQ], 0)))
    }, DQ.c.prototype.thinInstancePartialBufferUpdate = function(QQ, FQ, wQ) {
      if ("matrix" === QQ) this._thinInstanceDataStorage.matrixBuffer && ("number" === typeof FQ ? this._thinInstanceDataStorage.matrixBuffer.updateDirectly(new Float32Array(this._thinInstanceDataStorage.matrixData.buffer, this._thinInstanceDataStorage.matrixData.byteOffset + 16 * wQ * Float32Array.BYTES_PER_ELEMENT, 16 * FQ), 16 * wQ) : this._thinInstanceDataStorage.matrixBuffer.updateDirectly(FQ, wQ));
      else if (QQ === kQ.h.ColorKind && (QQ = kQ.h.ColorInstanceKind), this._userThinInstanceBuffersStorage?.vertexBuffers[QQ]) {
        const LQ = this._userThinInstanceBuffersStorage.vertexBuffers[QQ];
        if ("number" === typeof FQ) {
          const LQ = new Float32Array(this._userThinInstanceBuffersStorage.data[QQ].buffer, this._userThinInstanceBuffersStorage.data[QQ].byteOffset + wQ * this._userThinInstanceBuffersStorage.strides[QQ] * Float32Array.BYTES_PER_ELEMENT, FQ * this._userThinInstanceBuffersStorage.strides[QQ]);
          this._userThinInstanceBuffersStorage.vertexBuffers[QQ].updateDirectly(LQ, wQ * this._userThinInstanceBuffersStorage.strides[QQ])
        } else LQ.updateDirectly(FQ, wQ)
      }
    }, DQ.c.prototype.thinInstanceGetWorldMatrices = function() {
      if (!this._thinInstanceDataStorage.matrixData || !this._thinInstanceDataStorage.matrixBuffer) return [];
      const QQ = this._thinInstanceDataStorage.matrixData;
      if (!this._thinInstanceDataStorage.worldMatrices) {
        this._thinInstanceDataStorage.worldMatrices = [];
        for (let FQ = 0; FQ < this._thinInstanceDataStorage.instancesCount; ++FQ) this._thinInstanceDataStorage.worldMatrices[FQ] = LQ.c.FromArray(QQ, 16 * FQ)
      }
      return this._thinInstanceDataStorage.worldMatrices
    }, DQ.c.prototype.thinInstanceRefreshBoundingInfo = function() {
      let QQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        FQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        wQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        qQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!this._thinInstanceDataStorage.matrixData || !this._thinInstanceDataStorage.matrixBuffer) return;
      const DQ = this._thinInstanceDataStorage.boundingVectors;
      if (QQ || !this.rawBoundingInfo) {
        if (DQ.length = 0, qQ && function(QQ, FQ, wQ) {
            const qQ = QQ._userThinInstanceBuffersStorage,
              DQ = qQ?.data[vQ],
              xQ = qQ?.strides[vQ];
            if (!DQ || !xQ || xQ < 4 || !mQ(QQ)) return !1;
            const AQ = QQ._thinInstanceDataStorage.matrixData;
            if (!AQ) return !1;
            const tQ = {},
              eQ = LQ.k.Vector4[0],
              MQ = LQ.k.Ox[1],
              GQ = LQ.k.Ox[2],
              pQ = LQ.k.Ox[3],
              cQ = LQ.k.Ox[4],
              CQ = LQ.k.Ox[5],
              SQ = LQ.k.Ox[6],
              iQ = LQ.k.Matrix[2],
              WQ = QQ.geometry ? QQ.geometry.boundingBias : null,
              RQ = QQ.getTotalVertices();
            MQ.K3(Number.POSITIVE_INFINITY), GQ.K3(Number.NEGATIVE_INFINITY), pQ.K3(Number.POSITIVE_INFINITY), cQ.K3(Number.NEGATIVE_INFINITY);
            for (let oQ = 0; oQ < QQ._thinInstanceDataStorage.instancesCount; ++oQ) {
              const FQ = oQ * xQ;
              eQ.set(DQ[FQ], DQ[FQ + 1], DQ[FQ + 2], DQ[FQ + 3]);
              const qQ = QQ._getData({
                applyMorph: wQ,
                applyBakedVertexAnimation: !0,
                bakedVertexAnimationSettings: eQ,
                updatePositionsArray: !1,
                cache: tQ
              }, null, kQ.h.PositionKind);
              if (!qQ) return !1;
              uQ(qQ, RQ, CQ, SQ), HQ(CQ, SQ, WQ), MQ.minimizeInPlace(CQ), GQ.maximizeInPlace(SQ), LQ.c.FromArrayToRef(AQ, 16 * oQ, iQ), WQ ? bQ(CQ, SQ, iQ, pQ, cQ) : YQ(qQ, RQ, iQ, pQ, cQ)
            }
            return !(!isFinite(MQ.x) || !isFinite(pQ.x)) && (QQ.sK().reConstruct(pQ, cQ), QQ.rawBoundingInfo = new oQ.d(MQ, GQ), function(QQ, FQ) {
              QQ.length = 0;
              for (let wQ = 0; wQ < FQ.boundingBox.vectors.length; ++wQ) QQ.push(FQ.boundingBox.vectors[wQ].clone())
            }(FQ, QQ.rawBoundingInfo), QQ._updateBoundingInfo(), !0)
          }(this, DQ, wQ)) return;
        qQ && this.bakedVertexAnimationManager?.isEnabled && mQ(this) ? this.refreshBoundingInfo({
          applySkeleton: FQ,
          applyMorph: wQ,
          applyBakedVertexAnimation: !0,
          updatePositionsArray: !1
        }) : this.refreshBoundingInfo(FQ, wQ);
        const QQ = this.sK();
        this.rawBoundingInfo = new oQ.d(QQ.minimum, QQ.maximum)
      }
      const xQ = this.sK(),
        AQ = this._thinInstanceDataStorage.matrixData;
      if (0 === DQ.length)
        for (let LQ = 0; LQ < xQ.boundingBox.vectors.length; ++LQ) DQ.push(xQ.boundingBox.vectors[LQ].clone());
      LQ.k.Ox[0].K3(Number.POSITIVE_INFINITY), LQ.k.Ox[1].K3(Number.NEGATIVE_INFINITY);
      for (let oQ = 0; oQ < this._thinInstanceDataStorage.instancesCount; ++oQ) {
        LQ.c.FromArrayToRef(AQ, 16 * oQ, LQ.k.Matrix[0]);
        for (let QQ = 0; QQ < DQ.length; ++QQ) LQ.p.TransformCoordinatesToRef(DQ[QQ], LQ.k.Matrix[0], LQ.k.Ox[2]), LQ.k.Ox[0].minimizeInPlace(LQ.k.Ox[2]), LQ.k.Ox[1].maximizeInPlace(LQ.k.Ox[2])
      }
      xQ.reConstruct(LQ.k.Ox[0], LQ.k.Ox[1]), this._updateBoundingInfo()
    }, DQ.c.prototype._thinInstanceRecreateBuffer = function(QQ) {
      let FQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      "matrix" === QQ ? (this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", this._thinInstanceDataStorage.matrixData, FQ)) : "previousMatrix" === QQ ? this._scene.needsPreviousWorldMatrices && (this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", this._thinInstanceDataStorage.previousMatrixData ?? this._thinInstanceDataStorage.matrixData, FQ)) : (QQ === kQ.h.ColorKind && (QQ = kQ.h.ColorInstanceKind), this._userThinInstanceBuffersStorage.vertexBuffers[QQ]?.dispose(), this._userThinInstanceBuffersStorage.vertexBuffers[QQ] = new kQ.h(this.Wx(), this._userThinInstanceBuffersStorage.data[QQ], QQ, !FQ, !1, this._userThinInstanceBuffersStorage.strides[QQ], !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[QQ]))
    }, DQ.c.prototype._thinInstanceUpdateBufferSize = function(QQ) {
      let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      QQ === kQ.h.ColorKind && (QQ = kQ.h.ColorInstanceKind);
      const wQ = "matrix" === QQ;
      if (!wQ && (!this._userThinInstanceBuffersStorage || !this._userThinInstanceBuffersStorage.strides[QQ])) return;
      const LQ = wQ ? 16 : this._userThinInstanceBuffersStorage.strides[QQ],
        qQ = wQ ? this._thinInstanceDataStorage.matrixBufferSize : this._userThinInstanceBuffersStorage.sizes[QQ];
      let oQ = wQ ? this._thinInstanceDataStorage.matrixData : this._userThinInstanceBuffersStorage.data[QQ];
      const DQ = (this._thinInstanceDataStorage.instancesCount + FQ) * LQ;
      let vQ = qQ;
      for (; vQ < DQ;) vQ *= 2;
      if (!oQ || qQ != vQ) {
        if (oQ) {
          const QQ = new Float32Array(vQ);
          QQ.set(oQ, 0), oQ = QQ
        } else oQ = new Float32Array(vQ);
        wQ ? (this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", oQ, !1), this._thinInstanceDataStorage.matrixData = oQ, this._thinInstanceDataStorage.matrixBufferSize = vQ, this._scene.needsPreviousWorldMatrices && !this._thinInstanceDataStorage.previousMatrixData && (this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", oQ, !1))) : (this._userThinInstanceBuffersStorage.vertexBuffers[QQ]?.dispose(), this._userThinInstanceBuffersStorage.data[QQ] = oQ, this._userThinInstanceBuffersStorage.sizes[QQ] = vQ, this._userThinInstanceBuffersStorage.vertexBuffers[QQ] = new kQ.h(this.Wx(), oQ, QQ, !0, !1, LQ, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[QQ]))
      }
    }, DQ.c.prototype._thinInstanceInitializeUserStorage = function() {
      this._userThinInstanceBuffersStorage || (this._userThinInstanceBuffersStorage = {
        data: {},
        sizes: {},
        vertexBuffers: {},
        strides: {}
      })
    }, DQ.c.prototype._disposeThinInstanceSpecificData = function() {
      this._thinInstanceDataStorage?.matrixBuffer && (this._thinInstanceDataStorage.matrixBuffer.dispose(), this._thinInstanceDataStorage.matrixBuffer = null), this._thinInstanceDataStorage?.previousMatrixBuffer && (this._thinInstanceDataStorage.previousMatrixBuffer.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = null)
    })
  },
  39862: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => MQ,
      e: () => AQ
    });
    var LQ, qQ, oQ, DQ, kQ = wQ(39402),
      vQ = wQ(39409),
      mQ = wQ(39426),
      uQ = wQ(36722),
      HQ = wQ(36696),
      bQ = wQ(39650),
      YQ = wQ(36741),
      xQ = wQ(39277);
    let AQ = (() => {
      var QQ;
      let FQ, wQ, LQ, qQ, oQ, DQ, YQ, xQ, AQ, tQ = bQ.c,
        eQ = [],
        MQ = [],
        GQ = [],
        pQ = [],
        cQ = [],
        CQ = [],
        SQ = [],
        iQ = [],
        WQ = [],
        RQ = [],
        OQ = [],
        sQ = [],
        rQ = [],
        IQ = [],
        UQ = [],
        NQ = [],
        TQ = [],
        KQ = [];
      return QQ = class extends tQ {
        get billboardMode() {
          return this._billboardMode
        }
        set billboardMode(FQ) {
          this._billboardMode !== FQ && (this._billboardMode = FQ, this._cache.useBillboardPosition = 0 !== (this._billboardMode & QQ.BILLBOARDMODE_USE_POSITION))
        }
        get infiniteDistance() {
          return this._infiniteDistance
        }
        set infiniteDistance(QQ) {
          this._infiniteDistance !== QQ && (this._infiniteDistance = QQ)
        }
        constructor(FQ) {
          let wQ = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          super(FQ, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, !1), this._forward = new HQ.p(0, 0, 1), this._up = new HQ.p(0, 1, 0), this._right = new HQ.p(1, 0, 0), this._position = (0, kQ.l)(this, eQ, HQ.p.Zero()), this._rotation = ((0, kQ.l)(this, MQ), (0, kQ.l)(this, GQ, HQ.p.Zero())), this._rotationQuaternion = ((0, kQ.l)(this, pQ), (0, kQ.l)(this, cQ, null)), this._scaling = ((0, kQ.l)(this, CQ), (0, kQ.l)(this, SQ, HQ.p.One())), this._transformToBoneReferal = ((0, kQ.l)(this, iQ), null), this._isAbsoluteSynced = !1, this._billboardMode = (0, kQ.l)(this, WQ, QQ.BILLBOARDMODE_NONE), this.scalingDeterminant = ((0, kQ.l)(this, RQ), (0, kQ.l)(this, OQ, 1)), this._infiniteDistance = ((0, kQ.l)(this, sQ), (0, kQ.l)(this, rQ, !1)), this.ignoreNonUniformScaling = ((0, kQ.l)(this, IQ), (0, kQ.l)(this, UQ, !1)), this.reIntegrateRotationIntoRotationQuaternion = ((0, kQ.l)(this, NQ), (0, kQ.l)(this, TQ, !1)), this._poseMatrix = ((0, kQ.l)(this, KQ), null), this._localMatrix = HQ.c.Zero(), this._usePivotMatrix = !1, this._absolutePosition = HQ.p.Zero(), this._absoluteScaling = HQ.p.Zero(), this._absoluteRotationQuaternion = HQ.e.Identity(), this._pivotMatrix = HQ.c.Identity(), this._postMultiplyPivotMatrix = !1, this._isWorldMatrixFrozen = !1, this._indexInSceneTransformNodesArray = -1, this.onAfterWorldMatrixUpdateObservable = new uQ.e, this._nonUniformScaling = !1, wQ && this.iN().addTransformNode(this)
        }
        getClassName() {
          return "TransformNode"
        }
        get position() {
          return this._position
        }
        set position(QQ) {
          this._position = QQ, this._markAsDirtyInternal()
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
        set rotation(QQ) {
          this._rotation = QQ, this._rotationQuaternion = null, this._markAsDirtyInternal()
        }
        get ck() {
          return this._scaling
        }
        set ck(QQ) {
          this._scaling = QQ, this._markAsDirtyInternal()
        }
        get rotationQuaternion() {
          return this._rotationQuaternion
        }
        set rotationQuaternion(QQ) {
          this._rotationQuaternion = QQ, QQ && this._rotation.K3(0), this._markAsDirtyInternal()
        }
        _markAsDirtyInternal() {
          this._isDirty || (this._isDirty = !0, this.customMarkAsDirty && this.customMarkAsDirty())
        }
        get forward() {
          return HQ.p.TransformNormalFromFloatsToRef(0, 0, this.iN().useRightHandedSystem ? -1 : 1, this.getWorldMatrix(), this._forward), this._forward.normalize()
        }
        get up() {
          return HQ.p.TransformNormalFromFloatsToRef(0, 1, 0, this.getWorldMatrix(), this._up), this._up.normalize()
        }
        get right() {
          return HQ.p.TransformNormalFromFloatsToRef(this.iN().useRightHandedSystem ? -1 : 1, 0, 0, this.getWorldMatrix(), this._right), this._right.normalize()
        }
        updatePoseMatrix(QQ) {
          return this._poseMatrix ? (this._poseMatrix.Qs(QQ), this) : (this._poseMatrix = QQ.clone(), this)
        }
        getPoseMatrix() {
          return this._poseMatrix || (this._poseMatrix = HQ.c.Identity()), this._poseMatrix
        }
        _isSynchronized() {
          const FQ = this._cache;
          return this._billboardMode === FQ.billboardMode && this._billboardMode === QQ.BILLBOARDMODE_NONE && (!FQ.pivotMatrixUpdated && (!this._infiniteDistance && (!this._position._isDirty && (!this._scaling._isDirty && !(this._rotationQuaternion && this._rotationQuaternion._isDirty || this._rotation._isDirty)))))
        }
        _initCache() {
          super._initCache();
          const QQ = this._cache;
          QQ.localMatrixUpdated = !1, QQ.billboardMode = -1, QQ.infiniteDistance = !1, QQ.useBillboardPosition = !1
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
        setPreTransformMatrix(QQ) {
          return this.setPivotMatrix(QQ, !1)
        }
        setPivotMatrix(QQ) {
          let FQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          return this._pivotMatrix.Qs(QQ), this._usePivotMatrix = !this._pivotMatrix.isIdentity(), this._cache.pivotMatrixUpdated = !0, this._postMultiplyPivotMatrix = FQ, this._postMultiplyPivotMatrix && (this._pivotMatrixInverse ? this._pivotMatrix.invertToRef(this._pivotMatrixInverse) : this._pivotMatrixInverse = HQ.c.Invert(this._pivotMatrix)), this
        }
        getPivotMatrix() {
          return this._pivotMatrix
        }
        instantiateHierarchy() {
          let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            FQ = arguments.length > 1 ? arguments[1] : void 0,
            wQ = arguments.length > 2 ? arguments[2] : void 0;
          const LQ = this.clone("Clone of " + (this.name || this.id), QQ || this.parent, !0);
          LQ && wQ && wQ(this, LQ);
          for (const qQ of this.getChildTransformNodes(!0)) qQ.instantiateHierarchy(LQ, FQ, wQ);
          return LQ
        }
        hN() {
          let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return QQ ? arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (this._rotation.K3(0), this._rotationQuaternion = this._rotationQuaternion || HQ.e.Identity(), QQ.decompose(this._scaling, this._rotationQuaternion, this._position), this.computeWorldMatrix(!0)) : (this._worldMatrix = QQ, this._absolutePosition.vQQ(this._worldMatrix.m[12], this._worldMatrix.m[13], this._worldMatrix.m[14]), this._afterComputeWorldMatrix()) : (this._isWorldMatrixFrozen = !1, this.computeWorldMatrix(!0)), this._isDirty = !1, this._isWorldMatrixFrozen = !0, this
        }
        unfreezeWorldMatrix() {
          return this._isWorldMatrixFrozen = !1, this.computeWorldMatrix(!0), this
        }
        get kkQ() {
          return this._isWorldMatrixFrozen
        }
        getAbsolutePosition() {
          return this.computeWorldMatrix(), this._absolutePosition
        }
        setAbsolutePosition(QQ) {
          if (!QQ) return this;
          let FQ, wQ, LQ;
          if (void 0 === QQ.x) {
            if (arguments.length < 3) return this;
            FQ = arguments[0], wQ = arguments[1], LQ = arguments[2]
          } else FQ = QQ.x, wQ = QQ.y, LQ = QQ.z;
          if (this.parent) {
            const QQ = HQ.k.Matrix[0];
            this.parent.getWorldMatrix().invertToRef(QQ), HQ.p.TransformCoordinatesFromFloatsToRef(FQ, wQ, LQ, QQ, this.position)
          } else this.position.x = FQ, this.position.y = wQ, this.position.z = LQ;
          return this._absolutePosition.Qs(QQ), this
        }
        setPositionWithLocalVector(QQ) {
          return this.computeWorldMatrix(), this.position = HQ.p.TransformNormal(QQ, this._localMatrix), this
        }
        getPositionExpressedInLocalSpace() {
          this.computeWorldMatrix();
          const QQ = HQ.k.Matrix[0];
          return this._localMatrix.invertToRef(QQ), HQ.p.TransformNormal(this.position, QQ)
        }
        locallyTranslate(QQ) {
          return this.computeWorldMatrix(!0), this.position = HQ.p.TransformCoordinates(QQ, this._localMatrix), this
        }
        lookAt(FQ) {
          let wQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            LQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            qQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
            oQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
          const DQ = QQ._LookAtVectorCache,
            kQ = 0 === oQ ? this.position : this.getAbsolutePosition();
          if (FQ.subtractToRef(kQ, DQ), this.setDirection(DQ, wQ, LQ, qQ), 1 === oQ && this.parent)
            if (this.rotationQuaternion) {
              const QQ = HQ.k.Matrix[0];
              this.rotationQuaternion.toRotationMatrix(QQ);
              const FQ = HQ.k.Matrix[1];
              this.parent.getWorldMatrix().getRotationMatrixToRef(FQ), FQ.invert(), QQ.multiplyToRef(FQ, QQ), this.rotationQuaternion.fromRotationMatrix(QQ)
            } else {
              const QQ = HQ.k.Quaternion[0];
              HQ.e.FromEulerVectorToRef(this.rotation, QQ);
              const FQ = HQ.k.Matrix[0];
              QQ.toRotationMatrix(FQ);
              const wQ = HQ.k.Matrix[1];
              this.parent.getWorldMatrix().getRotationMatrixToRef(wQ), wQ.invert(), FQ.multiplyToRef(wQ, FQ), QQ.fromRotationMatrix(FQ), QQ.toEulerAnglesToRef(this.rotation)
            } return this
        }
        Py(QQ) {
          const FQ = HQ.p.Zero();
          return this.getDirectionToRef(QQ, FQ), FQ
        }
        getDirectionToRef(QQ, FQ) {
          return HQ.p.TransformNormalToRef(QQ, this.getWorldMatrix(), FQ), this
        }
        setDirection(QQ) {
          let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
          const qQ = -Math.atan2(QQ.z, QQ.x) + Math.PI / 2,
            oQ = Math.sqrt(QQ.x * QQ.x + QQ.z * QQ.z),
            DQ = -Math.atan2(QQ.y, oQ);
          return this.rotationQuaternion ? HQ.e.RotationYawPitchRollToRef(qQ + FQ, DQ + wQ, LQ, this.rotationQuaternion) : (this.rotation.x = DQ + wQ, this.rotation.y = qQ + FQ, this.rotation.z = LQ), this
        }
        setPivotPoint(QQ) {
          let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          0 == this.iN().getRenderId() && this.computeWorldMatrix(!0);
          const wQ = this.getWorldMatrix();
          if (1 == FQ) {
            const FQ = HQ.k.Matrix[0];
            wQ.invertToRef(FQ), QQ = HQ.p.TransformCoordinates(QQ, FQ)
          }
          return this.setPivotMatrix(HQ.c.Translation(-QQ.x, -QQ.y, -QQ.z), !0)
        }
        getPivotPoint() {
          const QQ = HQ.p.Zero();
          return this.getPivotPointToRef(QQ), QQ
        }
        getPivotPointToRef(QQ) {
          return QQ.x = -this._pivotMatrix.m[12], QQ.y = -this._pivotMatrix.m[13], QQ.z = -this._pivotMatrix.m[14], this
        }
        getAbsolutePivotPoint() {
          const QQ = HQ.p.Zero();
          return this.getAbsolutePivotPointToRef(QQ), QQ
        }
        getAbsolutePivotPointToRef(QQ) {
          return this.getPivotPointToRef(QQ), HQ.p.TransformCoordinatesToRef(QQ, this.getWorldMatrix(), QQ), this
        }
        dFQ(QQ) {
          if (this._isDirty) return this;
          if (this._children)
            for (const FQ of this._children) FQ.dFQ(QQ);
          return super.dFQ(QQ)
        }
        setParent(FQ) {
          let wQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            LQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          if (!FQ && !this.parent) return this;
          const qQ = HQ.k.Quaternion[0],
            oQ = HQ.k.Ox[0],
            DQ = HQ.k.Ox[1],
            kQ = HQ.k.Matrix[1];
          HQ.c.IdentityToRef(kQ);
          const vQ = HQ.k.Matrix[0];
          this.computeWorldMatrix(!0);
          let mQ = this.rotationQuaternion;
          return mQ || (mQ = QQ._TmpRotation, HQ.e.RotationYawPitchRollToRef(this._rotation.y, this._rotation.x, this._rotation.z, mQ)), HQ.c.ComposeToRef(this.ck, mQ, this.position, vQ), this.parent && vQ.multiplyToRef(this.parent.computeWorldMatrix(!0), vQ), FQ && (FQ.computeWorldMatrix(!0).invertToRef(kQ), vQ.multiplyToRef(kQ, vQ)), vQ.decompose(DQ, qQ, oQ, wQ ? this : void 0), this.rotationQuaternion ? this.rotationQuaternion.Qs(qQ) : qQ.toEulerAnglesToRef(this.rotation), this.ck.Qs(DQ), this.position.Qs(oQ), this.parent = FQ, LQ && this.setPivotMatrix(HQ.c.Identity()), this
        }
        addChild(QQ) {
          let FQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return QQ.setParent(this, FQ), this
        }
        removeChild(QQ) {
          let FQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return QQ.parent !== this || QQ.setParent(null, FQ), this
        }
        get nonUniformScaling() {
          return this._nonUniformScaling
        }
        _updateNonUniformScalingState(QQ) {
          return this._nonUniformScaling !== QQ && (this._nonUniformScaling = QQ, !0)
        }
        attachToBone(QQ, FQ) {
          return this._currentParentWhenAttachingToBone = this.parent, this._transformToBoneReferal = FQ, this.parent = QQ, QQ.getSkeleton().prepare(!0), QQ.getFinalMatrix().determinant() < 0 && (this.scalingDeterminant *= -1), this
        }
        detachFromBone() {
          let QQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          return this.parent ? (this.parent.getWorldMatrix().determinant() < 0 && (this.scalingDeterminant *= -1), this._transformToBoneReferal = null, this.parent = QQ ? this._currentParentWhenAttachingToBone : null, this) : (QQ && (this.parent = this._currentParentWhenAttachingToBone), this)
        }
        rotate(FQ, wQ, LQ) {
          let qQ;
          if (FQ.normalize(), this.rotationQuaternion || (this.rotationQuaternion = this.rotation.toQuaternion(), this.rotation.K3(0)), LQ && 0 !== LQ) {
            if (this.parent) {
              const QQ = this.parent.getWorldMatrix(),
                LQ = HQ.k.Matrix[0];
              QQ.invertToRef(LQ), FQ = HQ.p.TransformNormal(FQ, LQ), QQ.determinant() < 0 && (wQ *= -1)
            }
            qQ = HQ.e.RotationAxisToRef(FQ, wQ, QQ._RotationAxisCache), qQ.multiplyToRef(this.rotationQuaternion, this.rotationQuaternion)
          } else qQ = HQ.e.RotationAxisToRef(FQ, wQ, QQ._RotationAxisCache), this.rotationQuaternion.multiplyToRef(qQ, this.rotationQuaternion);
          return this
        }
        rotateAround(QQ, FQ, wQ) {
          FQ.normalize(), this.rotationQuaternion || (this.rotationQuaternion = HQ.e.RotationYawPitchRoll(this.rotation.y, this.rotation.x, this.rotation.z), this.rotation.K3(0));
          const LQ = HQ.k.Ox[0],
            qQ = HQ.k.Ox[1],
            oQ = HQ.k.Ox[2],
            DQ = HQ.k.Quaternion[0],
            kQ = HQ.k.Matrix[0],
            vQ = HQ.k.Matrix[1],
            mQ = HQ.k.Matrix[2],
            uQ = HQ.k.Matrix[3];
          return QQ.subtractToRef(this.position, LQ), HQ.c.TranslationToRef(LQ.x, LQ.y, LQ.z, kQ), HQ.c.TranslationToRef(-LQ.x, -LQ.y, -LQ.z, vQ), HQ.c.RotationAxisToRef(FQ, wQ, mQ), vQ.multiplyToRef(mQ, uQ), uQ.multiplyToRef(kQ, uQ), uQ.decompose(qQ, DQ, oQ), this.position.addInPlace(oQ), DQ.multiplyToRef(this.rotationQuaternion, this.rotationQuaternion), this
        }
        translate(QQ, FQ, wQ) {
          const LQ = QQ.scale(FQ);
          if (wQ && 0 !== wQ) this.setAbsolutePosition(this.getAbsolutePosition().add(LQ));
          else {
            const QQ = this.getPositionExpressedInLocalSpace().add(LQ);
            this.setPositionWithLocalVector(QQ)
          }
          return this
        }
        addRotation(QQ, FQ, wQ) {
          let LQ;
          this.rotationQuaternion ? LQ = this.rotationQuaternion : (LQ = HQ.k.Quaternion[1], HQ.e.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, this.rotation.z, LQ));
          const qQ = HQ.k.Quaternion[0];
          return HQ.e.RotationYawPitchRollToRef(FQ, QQ, wQ, qQ), LQ.multiplyInPlace(qQ), this.rotationQuaternion || LQ.toEulerAnglesToRef(this.rotation), this
        }
        _getEffectiveParent() {
          return this.parent
        }
        isWorldMatrixCameraDependent() {
          return this._infiniteDistance && !this.parent || this._billboardMode !== QQ.BILLBOARDMODE_NONE
        }
        computeWorldMatrix() {
          let FQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            wQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          if (this._isWorldMatrixFrozen && !this._isDirty) return this._worldMatrix;
          const LQ = this.iN().getRenderId();
          if (!this._isDirty && !FQ && (this._currentRenderId === LQ || this.isSynchronized())) return this._currentRenderId = LQ, this._worldMatrix;
          wQ = wQ || this.iN().activeCamera, this._updateCache();
          const qQ = this._cache;
          qQ.pivotMatrixUpdated = !1, qQ.billboardMode = this.billboardMode, qQ.infiniteDistance = this.infiniteDistance, qQ.parent = this._parentNode, this._currentRenderId = LQ, this._childUpdateId += 1, this._isDirty = !1, this._position._isDirty = !1, this._rotation._isDirty = !1, this._scaling._isDirty = !1;
          const oQ = this._getEffectiveParent(),
            DQ = QQ._TmpScaling;
          let kQ, vQ = this._position;
          if (this._infiniteDistance && !this.parent && wQ) {
            const FQ = wQ.getWorldMatrix().m;
            vQ = QQ._TmpTranslation, vQ.vQQ(this._position.x + FQ[12], this._position.y + FQ[13], this._position.z + FQ[14])
          }
          if (DQ.vQQ(this._scaling.x * this.scalingDeterminant, this._scaling.y * this.scalingDeterminant, this._scaling.z * this.scalingDeterminant), this._rotationQuaternion) {
            if (this._rotationQuaternion._isDirty = !1, kQ = this._rotationQuaternion, this.reIntegrateRotationIntoRotationQuaternion) {
              this.rotation.lengthSquared() && (this._rotationQuaternion.multiplyInPlace(HQ.e.RotationYawPitchRoll(this._rotation.y, this._rotation.x, this._rotation.z)), this._rotation.vQQ(0, 0, 0))
            }
          } else kQ = QQ._TmpRotation, HQ.e.RotationYawPitchRollToRef(this._rotation.y, this._rotation.x, this._rotation.z, kQ);
          if (this._usePivotMatrix) {
            const QQ = HQ.k.Matrix[1];
            HQ.c.ScalingToRef(DQ.x, DQ.y, DQ.z, QQ);
            const FQ = HQ.k.Matrix[0];
            kQ.toRotationMatrix(FQ), this._pivotMatrix.multiplyToRef(QQ, HQ.k.Matrix[4]), HQ.k.Matrix[4].multiplyToRef(FQ, this._localMatrix), this._postMultiplyPivotMatrix && this._localMatrix.multiplyToRef(this._pivotMatrixInverse, this._localMatrix), this._localMatrix.addTranslationFromFloats(vQ.x, vQ.y, vQ.z)
          } else HQ.c.ComposeToRef(DQ, kQ, vQ, this._localMatrix);
          if (oQ && oQ.getWorldMatrix) {
            if (FQ && oQ.computeWorldMatrix(FQ), this.billboardMode) {
              if (this._transformToBoneReferal) {
                const QQ = this.parent;
                QQ.getSkeleton().prepare(), QQ.getFinalMatrix().multiplyToRef(this._transformToBoneReferal.getWorldMatrix(), HQ.k.Matrix[7])
              } else HQ.k.Matrix[7].Qs(oQ.getWorldMatrix());
              const FQ = HQ.k.Ox[5],
                wQ = HQ.k.Ox[6],
                LQ = HQ.k.Quaternion[0];
              HQ.k.Matrix[7].decompose(wQ, LQ, FQ), HQ.c.ScalingToRef(wQ.x, wQ.y, wQ.z, HQ.k.Matrix[7]), HQ.k.Matrix[7].setTranslation(FQ), QQ.BillboardUseParentOrientation && (this._position.applyRotationQuaternionToRef(LQ, FQ), this._localMatrix.setTranslation(FQ)), this._localMatrix.multiplyToRef(HQ.k.Matrix[7], this._worldMatrix)
            } else if (this._transformToBoneReferal) {
              const QQ = this.parent;
              QQ.getSkeleton().prepare(), this._localMatrix.multiplyToRef(QQ.getFinalMatrix(), HQ.k.Matrix[6]), HQ.k.Matrix[6].multiplyToRef(this._transformToBoneReferal.getWorldMatrix(), this._worldMatrix)
            } else this._localMatrix.multiplyToRef(oQ.getWorldMatrix(), this._worldMatrix);
            this._markSyncedWithParent()
          } else this._worldMatrix.Qs(this._localMatrix);
          if (wQ && this.billboardMode)
            if (qQ.useBillboardPosition) {
              const FQ = HQ.k.Ox[0];
              this._worldMatrix.getTranslationToRef(FQ);
              const LQ = wQ.globalPosition;
              this._worldMatrix.invertToRef(HQ.k.Matrix[1]);
              const qQ = HQ.k.Ox[1];
              HQ.p.TransformCoordinatesToRef(LQ, HQ.k.Matrix[1], qQ), qQ.normalize();
              const oQ = -Math.atan2(qQ.z, qQ.x) + Math.PI / 2,
                DQ = Math.sqrt(qQ.x * qQ.x + qQ.z * qQ.z),
                kQ = -Math.atan2(qQ.y, DQ);
              if (HQ.e.RotationYawPitchRollToRef(oQ, kQ, 0, HQ.k.Quaternion[0]), (this.billboardMode & QQ.BILLBOARDMODE_ALL) !== QQ.BILLBOARDMODE_ALL) {
                const FQ = HQ.k.Ox[1];
                HQ.k.Quaternion[0].toEulerAnglesToRef(FQ), (this.billboardMode & QQ.BILLBOARDMODE_X) !== QQ.BILLBOARDMODE_X && (FQ.x = 0), (this.billboardMode & QQ.BILLBOARDMODE_Y) !== QQ.BILLBOARDMODE_Y && (FQ.y = 0), (this.billboardMode & QQ.BILLBOARDMODE_Z) !== QQ.BILLBOARDMODE_Z && (FQ.z = 0), HQ.c.RotationYawPitchRollToRef(FQ.y, FQ.x, FQ.z, HQ.k.Matrix[0])
              } else HQ.c.FromQuaternionToRef(HQ.k.Quaternion[0], HQ.k.Matrix[0]);
              this._worldMatrix.setTranslationFromFloats(0, 0, 0), this._worldMatrix.multiplyToRef(HQ.k.Matrix[0], this._worldMatrix), this._worldMatrix.setTranslation(HQ.k.Ox[0])
            } else {
              const FQ = HQ.k.Ox[0];
              this._worldMatrix.getTranslationToRef(FQ), HQ.k.Matrix[1].Qs(wQ.getViewMatrix());
              const LQ = this.iN().useRightHandedSystem;
              if (LQ && HQ.k.Matrix[1].multiplyToRef(QQ._TmpRHRestore, HQ.k.Matrix[1]), HQ.k.Matrix[1].setTranslationFromFloats(0, 0, 0), HQ.k.Matrix[1].invertToRef(HQ.k.Matrix[0]), (this.billboardMode & QQ.BILLBOARDMODE_ALL) !== QQ.BILLBOARDMODE_ALL) {
                HQ.k.Matrix[0].decompose(void 0, HQ.k.Quaternion[0], void 0);
                const FQ = HQ.k.Ox[1];
                HQ.k.Quaternion[0].toEulerAnglesToRef(FQ), (this.billboardMode & QQ.BILLBOARDMODE_X) !== QQ.BILLBOARDMODE_X && (FQ.x = 0), (this.billboardMode & QQ.BILLBOARDMODE_Y) !== QQ.BILLBOARDMODE_Y && (FQ.y = 0), (this.billboardMode & QQ.BILLBOARDMODE_Z) !== QQ.BILLBOARDMODE_Z && (FQ.z = 0), LQ && (FQ.y += Math.PI), HQ.c.RotationYawPitchRollToRef(FQ.y, FQ.x, FQ.z, HQ.k.Matrix[0])
              }
              this._worldMatrix.setTranslationFromFloats(0, 0, 0), this._worldMatrix.multiplyToRef(HQ.k.Matrix[0], this._worldMatrix), this._worldMatrix.setTranslation(HQ.k.Ox[0])
            } return this.ignoreNonUniformScaling ? this._updateNonUniformScalingState(!1) : this._scaling.isNonUniformWithinEpsilon(1e-6) ? this._updateNonUniformScalingState(!0) : oQ && oQ._nonUniformScaling ? this._updateNonUniformScalingState(oQ._nonUniformScaling) : this._updateNonUniformScalingState(!1), this._afterComputeWorldMatrix(), this._absolutePosition.vQQ(this._worldMatrix.m[12], this._worldMatrix.m[13], this._worldMatrix.m[14]), this._isAbsoluteSynced = !1, this.onAfterWorldMatrixUpdateObservable.notifyObservers(this), this._poseMatrix || (this._poseMatrix = HQ.c.Invert(this._worldMatrix)), this._worldMatrixDeterminantIsDirty = !0, this._worldMatrix
        }
        resetLocalMatrix() {
          let QQ = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          if (this.computeWorldMatrix(), QQ) {
            const QQ = this.getChildren();
            for (let FQ = 0; FQ < QQ.length; ++FQ) {
              const wQ = QQ[FQ];
              if (wQ) {
                wQ.computeWorldMatrix();
                const QQ = HQ.k.Matrix[0];
                wQ._localMatrix.multiplyToRef(this._localMatrix, QQ);
                const FQ = HQ.k.Quaternion[0];
                QQ.decompose(wQ.ck, FQ, wQ.position), wQ.rotationQuaternion ? wQ.rotationQuaternion.Qs(FQ) : FQ.toEulerAnglesToRef(wQ.rotation)
              }
            }
          }
          this.ck.vQQ(1, 1, 1), this.position.vQQ(0, 0, 0), this.rotation.vQQ(0, 0, 0), this.rotationQuaternion && (this.rotationQuaternion = HQ.e.Identity()), this._worldMatrix = HQ.c.Identity()
        }
        _afterComputeWorldMatrix() {}
        registerAfterWorldMatrixUpdate(QQ) {
          return this.onAfterWorldMatrixUpdateObservable.add(QQ), this
        }
        unregisterAfterWorldMatrixUpdate(QQ) {
          return this.onAfterWorldMatrixUpdateObservable.removeCallback(QQ), this
        }
        getPositionInCameraSpace() {
          let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return QQ || (QQ = this.iN().activeCamera), HQ.p.TransformCoordinates(this.getAbsolutePosition(), QQ.getViewMatrix())
        }
        getDistanceToCamera() {
          let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return QQ || (QQ = this.iN().activeCamera), this.getAbsolutePosition().subtract(QQ.globalPosition).length()
        }
        clone(FQ, wQ, LQ) {
          const qQ = mQ.c.Clone((() => new QQ(FQ, this.iN())), this);
          if (qQ.name = FQ, qQ.id = FQ, wQ && (qQ.parent = wQ), !LQ) {
            const QQ = this.getDescendants(!0);
            for (let wQ = 0; wQ < QQ.length; wQ++) {
              const LQ = QQ[wQ];
              LQ.clone && LQ.clone(FQ + "." + LQ.name, qQ)
            }
          }
          return qQ
        }
        serialize(QQ) {
          const FQ = mQ.c.Serialize(this, QQ);
          return FQ.type = this.getClassName(), FQ.uniqueId = this.uniqueId, this.parent && this.parent._serializeAsParent(FQ), FQ.localMatrix = this.getPivotMatrix().RLQ(), FQ.isEnabled = this.isEnabled(), this._isWorldMatrixFrozen && (FQ.hN = !0), mQ.c.AppendSerializedAnimations(this, FQ), FQ.PA = this.serializeAnimationRanges(), FQ
        }
        getChildTransformNodes(FQ, wQ) {
          const LQ = [];
          return this._getDescendants(LQ, FQ, (FQ => (!wQ || wQ(FQ)) && FQ instanceof QQ)), LQ
        }
        dispose(QQ) {
          let FQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this.iN().stopAnimation(this), this.iN().removeTransformNode(this), this._parentContainer) {
            const QQ = this._parentContainer.transformNodes.indexOf(this);
            QQ > -1 && this._parentContainer.transformNodes.splice(QQ, 1), this._parentContainer = null
          }
          if (this.onAfterWorldMatrixUpdateObservable.clear(), QQ) {
            const QQ = this.getChildTransformNodes(!0);
            for (const FQ of QQ) FQ.parent = null, FQ.computeWorldMatrix(!0)
          }
          super.dispose(QQ, FQ)
        }
        normalizeToUnitCube() {
          let QQ = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            FQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            wQ = arguments.length > 2 ? arguments[2] : void 0,
            LQ = null,
            qQ = null;
          FQ && (this.rotationQuaternion ? (qQ = this.rotationQuaternion.clone(), this.rotationQuaternion.vQQ(0, 0, 0, 1)) : this.rotation && (LQ = this.rotation.clone(), this.rotation.vQQ(0, 0, 0)));
          const oQ = this.getHierarchyBoundingVectors(QQ, wQ),
            DQ = oQ.max.subtract(oQ.min),
            kQ = Math.max(DQ.x, DQ.y, DQ.z);
          if (0 === kQ) return this;
          const vQ = 1 / kQ;
          return this.ck.scaleInPlace(vQ), FQ && (this.rotationQuaternion && qQ ? this.rotationQuaternion.Qs(qQ) : this.rotation && LQ && this.rotation.Qs(LQ)), this
        }
        _syncAbsoluteScalingAndRotation() {
          this._isAbsoluteSynced || (this._worldMatrix.decompose(this._absoluteScaling, this._absoluteRotationQuaternion), this._isAbsoluteSynced = !0)
        }
      }, (() => {
        const mQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(tQ[Symbol.metadata] ?? null) : void 0;
        FQ = [(0, vQ.F)("position")], wQ = [(0, vQ.F)("rotation")], LQ = [(0, vQ.y)("rotationQuaternion")], qQ = [(0, vQ.F)("ck")], oQ = [(0, vQ.I)("billboardMode")], DQ = [(0, vQ.I)()], YQ = [(0, vQ.I)("infiniteDistance")], xQ = [(0, vQ.I)()], AQ = [(0, vQ.I)()], (0, kQ.i)(null, null, FQ, {
          kind: "field",
          name: "_position",
          static: !1,
          private: !1,
          access: {
            has: QQ => "_position" in QQ,
            get: QQ => QQ._position,
            set: (QQ, FQ) => {
              QQ._position = FQ
            }
          },
          metadata: mQ
        }, eQ, MQ), (0, kQ.i)(null, null, wQ, {
          kind: "field",
          name: "_rotation",
          static: !1,
          private: !1,
          access: {
            has: QQ => "_rotation" in QQ,
            get: QQ => QQ._rotation,
            set: (QQ, FQ) => {
              QQ._rotation = FQ
            }
          },
          metadata: mQ
        }, GQ, pQ), (0, kQ.i)(null, null, LQ, {
          kind: "field",
          name: "_rotationQuaternion",
          static: !1,
          private: !1,
          access: {
            has: QQ => "_rotationQuaternion" in QQ,
            get: QQ => QQ._rotationQuaternion,
            set: (QQ, FQ) => {
              QQ._rotationQuaternion = FQ
            }
          },
          metadata: mQ
        }, cQ, CQ), (0, kQ.i)(null, null, qQ, {
          kind: "field",
          name: "_scaling",
          static: !1,
          private: !1,
          access: {
            has: QQ => "_scaling" in QQ,
            get: QQ => QQ._scaling,
            set: (QQ, FQ) => {
              QQ._scaling = FQ
            }
          },
          metadata: mQ
        }, SQ, iQ), (0, kQ.i)(null, null, oQ, {
          kind: "field",
          name: "_billboardMode",
          static: !1,
          private: !1,
          access: {
            has: QQ => "_billboardMode" in QQ,
            get: QQ => QQ._billboardMode,
            set: (QQ, FQ) => {
              QQ._billboardMode = FQ
            }
          },
          metadata: mQ
        }, WQ, RQ), (0, kQ.i)(null, null, DQ, {
          kind: "field",
          name: "scalingDeterminant",
          static: !1,
          private: !1,
          access: {
            has: QQ => "scalingDeterminant" in QQ,
            get: QQ => QQ.scalingDeterminant,
            set: (QQ, FQ) => {
              QQ.scalingDeterminant = FQ
            }
          },
          metadata: mQ
        }, OQ, sQ), (0, kQ.i)(null, null, YQ, {
          kind: "field",
          name: "_infiniteDistance",
          static: !1,
          private: !1,
          access: {
            has: QQ => "_infiniteDistance" in QQ,
            get: QQ => QQ._infiniteDistance,
            set: (QQ, FQ) => {
              QQ._infiniteDistance = FQ
            }
          },
          metadata: mQ
        }, rQ, IQ), (0, kQ.i)(null, null, xQ, {
          kind: "field",
          name: "ignoreNonUniformScaling",
          static: !1,
          private: !1,
          access: {
            has: QQ => "ignoreNonUniformScaling" in QQ,
            get: QQ => QQ.ignoreNonUniformScaling,
            set: (QQ, FQ) => {
              QQ.ignoreNonUniformScaling = FQ
            }
          },
          metadata: mQ
        }, UQ, NQ), (0, kQ.i)(null, null, AQ, {
          kind: "field",
          name: "reIntegrateRotationIntoRotationQuaternion",
          static: !1,
          private: !1,
          access: {
            has: QQ => "reIntegrateRotationIntoRotationQuaternion" in QQ,
            get: QQ => QQ.reIntegrateRotationIntoRotationQuaternion,
            set: (QQ, FQ) => {
              QQ.reIntegrateRotationIntoRotationQuaternion = FQ
            }
          },
          metadata: mQ
        }, TQ, KQ), mQ && Object.defineProperty(QQ, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: mQ
        })
      })(), QQ.BILLBOARDMODE_NONE = 0, QQ.BILLBOARDMODE_X = 1, QQ.BILLBOARDMODE_Y = 2, QQ.BILLBOARDMODE_Z = 4, QQ.BILLBOARDMODE_ALL = 7, QQ.BILLBOARDMODE_USE_POSITION = 128, QQ.BillboardUseParentOrientation = !1, QQ._TmpRotation = HQ.e.Zero(), QQ._TmpScaling = HQ.p.Zero(), QQ._TmpTranslation = HQ.p.Zero(), QQ._TmpRHRestore = HQ.c.Scaling(1, 1, -1), QQ._LookAtVectorCache = new HQ.p(0, 0, 0), QQ._RotationAxisCache = new HQ.e, QQ
    })();

    function tQ(QQ, FQ, wQ) {
      const LQ = mQ.c.Parse((() => new AQ(QQ.name, FQ)), QQ, FQ, wQ);
      if (QQ.localMatrix ? LQ.setPreTransformMatrix(HQ.c.FromArray(QQ.localMatrix)) : QQ.pivotMatrix && LQ.setPivotMatrix(HQ.c.FromArray(QQ.pivotMatrix)), LQ.Qr(QQ.isEnabled), LQ._waitingParsedUniqueId = QQ.uniqueId, void 0 !== QQ.parentId && (LQ._waitingParentId = QQ.parentId), void 0 !== QQ.parentInstanceIndex && (LQ._waitingParentInstanceIndex = QQ.parentInstanceIndex), QQ.hN && (LQ._waitingFreezeWorldMatrix = QQ.hN), QQ.animations) {
        for (let FQ = 0; FQ < QQ.animations.length; FQ++) {
          const wQ = QQ.animations[FQ],
            qQ = (0, YQ.b)("BABYLON.Animation");
          qQ && LQ.animations.push(qQ.Parse(wQ))
        }
        bQ.c.ParseAnimationRanges(LQ, QQ, FQ)
      }
      return QQ.autoAnimate && FQ.beginAnimation(LQ, QQ.autoAnimateFrom, QQ.autoAnimateTo, QQ.autoAnimateLoop, QQ.autoAnimateSpeed || 1), LQ
    }
    let eQ = !1;

    function MQ() {
      eQ || (eQ = !0, AQ.Parse = tQ)
    }(LQ = AQ.prototype).lV ?? (LQ.lV = (0, xQ.g)("TransformNode", "lV")), (qQ = AQ.prototype).applyImpulse ?? (qQ.applyImpulse = (0, xQ.g)("TransformNode", "applyImpulse")), (oQ = AQ.prototype).applyAngularImpulse ?? (oQ.applyAngularImpulse = (0, xQ.g)("TransformNode", "applyAngularImpulse")), (DQ = AQ.prototype).applyTorque ?? (DQ.applyTorque = (0, xQ.g)("TransformNode", "applyTorque")), Object.getOwnPropertyDescriptor(AQ.prototype, "physicsBody") || Object.defineProperty(AQ.prototype, "physicsBody", (0, xQ.e)("TransformNode", "physicsBody"))
  },
  39833: (QQ, FQ, wQ) => {
    function LQ(QQ, FQ, wQ) {
      try {
        const LQ = QQ.next();
        LQ.done ? FQ(LQ) : LQ.value ? LQ.value.then((() => {
          LQ.value = void 0, FQ(LQ)
        }), wQ) : FQ(LQ)
      } catch (LQ) {
        wQ(LQ)
      }
    }

    function qQ() {
      let QQ, FQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 25;
      return (wQ, qQ, oQ) => {
        const DQ = performance.now();
        void 0 === QQ || DQ - QQ > FQ ? (QQ = DQ, setTimeout((() => {
          LQ(wQ, qQ, oQ)
        }), 0)) : LQ(wQ, qQ, oQ)
      }
    }

    function oQ(QQ, FQ, wQ, LQ, qQ) {
      const oQ = () => {
        let DQ;
        const kQ = QQ => {
          QQ.done ? wQ(QQ.value) : void 0 === DQ ? DQ = !0 : oQ()
        };
        do {
          DQ = void 0, qQ && qQ.aborted ? LQ(new Error("Aborted")) : FQ(QQ, kQ, LQ), void 0 === DQ && (DQ = !1)
        } while (DQ)
      };
      oQ()
    }

    function DQ(QQ, FQ) {
      let wQ;
      return oQ(QQ, LQ, (QQ => wQ = QQ), (QQ => {
        throw QQ
      }), FQ), wQ
    }
    async function kQ(QQ, FQ, wQ) {
      return await new Promise(((LQ, qQ) => {
        oQ(QQ, FQ, LQ, qQ, wQ)
      }))
    }

    function vQ(QQ, FQ) {
      return function() {
        return DQ(QQ(...arguments), FQ)
      }
    }
    wQ.d(FQ, {
      b: () => qQ,
      c: () => vQ,
      f: () => kQ,
      h: () => DQ
    })
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);
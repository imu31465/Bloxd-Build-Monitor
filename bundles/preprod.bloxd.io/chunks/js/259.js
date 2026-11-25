export const id = 259;
export const ids = [259];
export const modules = {
  40487: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => yQ,
      h: () => pQ
    });
    var wQ = XQ(40260),
      qQ = XQ(40268),
      TQ = XQ(40371),
      zQ = XQ(37399),
      sQ = XQ(37370),
      FQ = XQ(40491),
      PQ = XQ(38956),
      gQ = XQ(37418),
      JQ = XQ(40153),
      rQ = XQ(38377),
      IQ = XQ(38041),
      jQ = XQ(40230),
      BQ = XQ(40286);
    let yQ = (() => {
      var QQ;
      let WQ, XQ, gQ, yQ, VQ, DQ, pQ, GQ, UQ, bQ, vQ, dQ, HQ, aQ, lQ, hQ, iQ, cQ, AQ = FQ.e,
        RQ = [],
        EQ = [],
        CQ = [],
        uQ = [],
        LQ = [],
        kQ = [],
        fQ = [],
        SQ = [],
        tQ = [],
        oQ = [],
        eQ = [],
        nQ = [],
        xQ = [],
        YQ = [],
        NQ = [],
        ZQ = [],
        OQ = [],
        KQ = [],
        mQ = [],
        MQ = [],
        QW = [],
        WW = [],
        XW = [],
        wW = [],
        qW = [];
      return QQ = class extends AQ {
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
          let WQ, XQ;
          if (this.mode === QQ.PERSPECTIVE_CAMERA) this.fovMode === QQ.FOVMODE_VERTICAL_FIXED ? (XQ = 2 * this.minZ * Math.tan(this.fov / 2), WQ = this.Uj().getAspectRatio(this) * XQ) : (WQ = 2 * this.minZ * Math.tan(this.fov / 2), XQ = WQ / this.Uj().getAspectRatio(this));
          else {
            const QQ = this.Uj().getRenderWidth() / 2,
              wQ = this.Uj().getRenderHeight() / 2;
            WQ = (this.orthoRight ?? QQ) - (this.orthoLeft ?? -QQ), XQ = (this.orthoTop ?? wQ) - (this.orthoBottom ?? -wQ)
          }
          return WQ * XQ
        }
        set orthoLeft(QQ) {
          this._orthoLeft = QQ;
          for (const WQ of this._rigCameras) WQ.orthoLeft = QQ
        }
        get orthoLeft() {
          return this._orthoLeft
        }
        set orthoRight(QQ) {
          this._orthoRight = QQ;
          for (const WQ of this._rigCameras) WQ.orthoRight = QQ
        }
        get orthoRight() {
          return this._orthoRight
        }
        set orthoBottom(QQ) {
          this._orthoBottom = QQ;
          for (const WQ of this._rigCameras) WQ.orthoBottom = QQ
        }
        get orthoBottom() {
          return this._orthoBottom
        }
        set orthoTop(QQ) {
          this._orthoTop = QQ;
          for (const WQ of this._rigCameras) WQ.orthoTop = QQ
        }
        get orthoTop() {
          return this._orthoTop
        }
        setFocalLength(QQ) {
          let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 36;
          this.fov = 2 * Math.atan(WQ / (2 * QQ))
        }
        get inertia() {
          return this._baseInertia
        }
        set inertia(QQ) {
          this._baseInertia = QQ
        }
        set mode(QQ) {
          this._mode = QQ;
          for (const WQ of this._rigCameras) WQ.mode = QQ
        }
        get mode() {
          return this._mode
        }
        get hasMoved() {
          return this._hasMoved
        }
        constructor(WQ, XQ, qQ) {
          let FQ = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
          (0, jQ.b)(), super(WQ, qQ, !1), this.inputs = (0, wQ.n)(this, RQ), this._position = (0, wQ.n)(this, EQ, sQ.s.Zero()), this._upVector = ((0, wQ.n)(this, CQ), (0, wQ.n)(this, uQ, sQ.s.Up())), this.oblique = ((0, wQ.n)(this, LQ), null), this._orthoLeft = null, this._orthoRight = null, this._orthoBottom = null, this._orthoTop = null, this.fov = (0, wQ.n)(this, kQ, .8), this.projectionPlaneTilt = ((0, wQ.n)(this, fQ), (0, wQ.n)(this, SQ, 0)), this.minZ = ((0, wQ.n)(this, tQ), (0, wQ.n)(this, oQ, 1)), this.maxZ = ((0, wQ.n)(this, eQ), (0, wQ.n)(this, nQ, 1e4)), this._baseInertia = ((0, wQ.n)(this, xQ), .9), this._mode = QQ.PERSPECTIVE_CAMERA, this.isIntermediate = !1, this.viewport = new rQ.e(0, 0, 1, 1), this.layerMask = (0, wQ.n)(this, YQ, 268435455), this.fovMode = ((0, wQ.n)(this, NQ), (0, wQ.n)(this, ZQ, QQ.FOVMODE_VERTICAL_FIXED)), this.cameraRigMode = ((0, wQ.n)(this, OQ), (0, wQ.n)(this, KQ, QQ.RIG_MODE_NONE)), this.interaxialDistance = ((0, wQ.n)(this, mQ), (0, wQ.n)(this, MQ, void 0)), this.isStereoscopicSideBySide = ((0, wQ.n)(this, QW), (0, wQ.n)(this, WW, void 0)), this.ignoreCameraMaxZ = ((0, wQ.n)(this, XW), (0, wQ.n)(this, wW, !1)), this.customRenderTargets = ((0, wQ.n)(this, qW), []), this.outputRenderTarget = null, this.onViewMatrixChangedObservable = new zQ.b, this.onProjectionMatrixChangedObservable = new zQ.b, this.onAfterCheckInputsObservable = new zQ.b, this.onRestoreStateObservable = new zQ.b, this.isRigCamera = !1, this._hasMoved = !1, this._rigCameras = new Array, this._skipRendering = !1, this._projectionMatrix = new sQ.e, this._postProcesses = new Array, this._activeMeshes = new TQ.e(256), this._globalPosition = sQ.s.Zero(), this._computedViewMatrix = sQ.e.Identity(), this._doNotComputeProjectionMatrix = !1, this._transformMatrix = sQ.e.Zero(), this._refreshFrustumPlanes = !0, this._absoluteRotation = sQ.h.Identity(), this._isCamera = !0, this._isLeftCamera = !1, this._isRightCamera = !1, this.layerMask = this.sE().defaultCameraLayerMask, this.sE().addCamera(this), FQ && !this.sE().activeCamera && (this.sE().activeCamera = this), this.position = XQ, this.renderPassId = this.sE().Uj().createRenderPassId(`Camera ${WQ}`)
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
          return "ky"
        }
        toString(QQ) {
          let WQ = "Name: " + this.name;
          if (WQ += ", type: " + this.getClassName(), this.animations)
            for (let XQ = 0; XQ < this.animations.length; XQ++) WQ += ", animation[0]: " + this.animations[XQ].toString(QQ);
          return WQ
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
            for (const WQ of this._postProcesses)
              if (WQ && !WQ.isReady()) return !1;
          return super.isReady(QQ)
        }
        _initCache() {
          super._initCache(), this._cache.position = new sQ.s(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.upVector = new sQ.s(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.mode = void 0, this._cache.minZ = void 0, this._cache.maxZ = void 0, this._cache.fov = void 0, this._cache.fovMode = void 0, this._cache.aspectRatio = void 0, this._cache.orthoLeft = void 0, this._cache.orthoRight = void 0, this._cache.orthoBottom = void 0, this._cache.orthoTop = void 0, this._cache.obliqueAngle = void 0, this._cache.obliqueLength = void 0, this._cache.obliqueOffset = void 0, this._cache.renderWidth = void 0, this._cache.renderHeight = void 0
        }
        _updateCache(QQ) {
          QQ || super._updateCache(), this._cache.position.WH(this.position), this._cache.upVector.WH(this.upVector)
        }
        _isSynchronized() {
          return this._isSynchronizedViewMatrix() && this._isSynchronizedProjectionMatrix()
        }
        _isSynchronizedViewMatrix() {
          return !!super._isSynchronized() && (this._cache.position.equals(this.position) && this._cache.upVector.equals(this.upVector) && this.isSynchronizedWithParent())
        }
        _isSynchronizedProjectionMatrix() {
          const WQ = this.ignoreCameraMaxZ ? 0 : this.maxZ;
          let XQ = this._cache.mode === this.mode && this._cache.minZ === this.minZ && this._cache.maxZ === WQ;
          if (!XQ) return !1;
          const wQ = this.Uj();
          return this.mode === QQ.PERSPECTIVE_CAMERA ? XQ = this._cache.fov === this.fov && this._cache.fovMode === this.fovMode && this._cache.aspectRatio === wQ.getAspectRatio(this) && this._cache.projectionPlaneTilt === this.projectionPlaneTilt : (XQ = this._cache.orthoLeft === this.orthoLeft && this._cache.orthoRight === this.orthoRight && this._cache.orthoBottom === this.orthoBottom && this._cache.orthoTop === this.orthoTop && this._cache.renderWidth === wQ.getRenderWidth() && this._cache.renderHeight === wQ.getRenderHeight(), this.oblique && (XQ = XQ && this._cache.obliqueAngle === this.oblique.angle && this._cache.obliqueLength === this.oblique.length && this._cache.obliqueOffset === this.oblique.offset)), XQ
        }
        attachControl(QQ, WQ) {}
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
          for (let WQ = 0, XQ = this._rigCameras.length; WQ < XQ; WQ++) {
            const QQ = this._rigCameras[WQ],
              XQ = QQ._rigPostProcess;
            if (XQ) {
              "pass" === XQ.getEffectName() && (QQ.isIntermediate = 0 === this._postProcesses.length), QQ._postProcesses = this._postProcesses.slice(0).concat(XQ), XQ.markTextureDirty()
            } else QQ._postProcesses = this._postProcesses.slice(0)
          }
        }
        attachPostProcess(QQ) {
          let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          return !QQ.isReusable() && this._postProcesses.indexOf(QQ) > -1 ? (PQ.b.Error("You're trying to reuse a post process not defined as reusable."), 0) : (null == WQ || WQ < 0 ? this._postProcesses.push(QQ) : null === this._postProcesses[WQ] ? this._postProcesses[WQ] = QQ : this._postProcesses.splice(WQ, 0, QQ), this._cascadePostProcessesToRigCams(), this._scene.prePassRenderer && this._scene.prePassRenderer.KWQ(), this._postProcesses.indexOf(QQ))
        }
        detachPostProcess(QQ) {
          const WQ = this._postProcesses.indexOf(QQ); - 1 !== WQ && (this._postProcesses[WQ] = null), this._scene.prePassRenderer && this._scene.prePassRenderer.KWQ(), this._cascadePostProcessesToRigCams()
        }
        getWorldMatrix() {
          return this._isSynchronizedViewMatrix() || this.getViewMatrix(), this._worldMatrix
        }
        _getViewMatrix() {
          return sQ.e.Identity()
        }
        getViewMatrix(QQ) {
          return !QQ && this._isSynchronizedViewMatrix() || (this._hasMoved = !0, this.updateCache(), this._computedViewMatrix = this._getViewMatrix(), this._currentRenderId = this.sE().getRenderId(), this._childUpdateId++, this._refreshFrustumPlanes = !0, this._cameraRigParams && this._cameraRigParams.vrPreViewMatrix && this._computedViewMatrix.multiplyToRef(this._cameraRigParams.vrPreViewMatrix, this._computedViewMatrix), this.parent && this.parent.onViewMatrixChangedObservable && this.parent.onViewMatrixChangedObservable.notifyObservers(this.parent), this.onViewMatrixChangedObservable.notifyObservers(this), this._computedViewMatrix.invertToRef(this._worldMatrix), this._worldMatrix.getTranslationToRef(this._globalPosition)), this._computedViewMatrix
        }
        freezeProjectionMatrix(QQ) {
          this._doNotComputeProjectionMatrix = !0, void 0 !== QQ && (this._projectionMatrix = QQ)
        }
        unfreezeProjectionMatrix() {
          this._doNotComputeProjectionMatrix = !1
        }
        getProjectionMatrix(WQ) {
          if (this._doNotComputeProjectionMatrix || !WQ && this._isSynchronizedProjectionMatrix()) return this._projectionMatrix;
          const XQ = this.ignoreCameraMaxZ ? 0 : this.maxZ;
          this._cache.mode = this.mode, this._cache.minZ = this.minZ, this._cache.maxZ = XQ, this._refreshFrustumPlanes = !0;
          const wQ = this.Uj(),
            qQ = this.sE(),
            TQ = wQ.vwQ;
          if (this.mode === QQ.PERSPECTIVE_CAMERA) {
            let WQ;
            this._cache.fov = this.fov, this._cache.fovMode = this.fovMode, this._cache.aspectRatio = wQ.getAspectRatio(this), this._cache.projectionPlaneTilt = this.projectionPlaneTilt, this.minZ <= 0 && (this.minZ = .1), WQ = qQ.useRightHandedSystem ? sQ.e.PerspectiveFovRHToRef : sQ.e.PerspectiveFovLHToRef, WQ(this.fov, wQ.getAspectRatio(this), TQ ? XQ : this.minZ, TQ ? this.minZ : XQ, this._projectionMatrix, this.fovMode === QQ.FOVMODE_VERTICAL_FIXED, wQ.isNDCHalfZRange, this.projectionPlaneTilt, TQ)
          } else {
            const QQ = wQ.getRenderWidth() / 2,
              WQ = wQ.getRenderHeight() / 2;
            qQ.useRightHandedSystem ? this.oblique ? sQ.e.ObliqueOffCenterRHToRef(this.orthoLeft ?? -QQ, this.orthoRight ?? QQ, this.orthoBottom ?? -WQ, this.orthoTop ?? WQ, TQ ? XQ : this.minZ, TQ ? this.minZ : XQ, this.oblique.length, this.oblique.angle, this._computeObliqueDistance(this.oblique.offset), this._projectionMatrix, wQ.isNDCHalfZRange) : sQ.e.OrthoOffCenterRHToRef(this.orthoLeft ?? -QQ, this.orthoRight ?? QQ, this.orthoBottom ?? -WQ, this.orthoTop ?? WQ, TQ ? XQ : this.minZ, TQ ? this.minZ : XQ, this._projectionMatrix, wQ.isNDCHalfZRange) : this.oblique ? sQ.e.ObliqueOffCenterLHToRef(this.orthoLeft ?? -QQ, this.orthoRight ?? QQ, this.orthoBottom ?? -WQ, this.orthoTop ?? WQ, TQ ? XQ : this.minZ, TQ ? this.minZ : XQ, this.oblique.length, this.oblique.angle, this._computeObliqueDistance(this.oblique.offset), this._projectionMatrix, wQ.isNDCHalfZRange) : sQ.e.OrthoOffCenterLHToRef(this.orthoLeft ?? -QQ, this.orthoRight ?? QQ, this.orthoBottom ?? -WQ, this.orthoTop ?? WQ, TQ ? XQ : this.minZ, TQ ? this.minZ : XQ, this._projectionMatrix, wQ.isNDCHalfZRange), this._cache.orthoLeft = this.orthoLeft, this._cache.orthoRight = this.orthoRight, this._cache.orthoBottom = this.orthoBottom, this._cache.orthoTop = this.orthoTop, this._cache.obliqueAngle = this.oblique?.angle, this._cache.obliqueLength = this.oblique?.length, this._cache.obliqueOffset = this.oblique?.offset, this._cache.renderWidth = wQ.getRenderWidth(), this._cache.renderHeight = wQ.getRenderHeight()
          }
          return this.onProjectionMatrixChangedObservable.notifyObservers(this), this._projectionMatrix
        }
        getTransformationMatrix() {
          return this._computedViewMatrix.multiplyToRef(this._projectionMatrix, this._transformMatrix), this._transformMatrix
        }
        _computeObliqueDistance(QQ) {
          return (this.radius || (this.target ? sQ.s.Distance(this.position, this.target) : this.position.length())) + QQ
        }
        _updateFrustumPlanes() {
          this._refreshFrustumPlanes && (this.getTransformationMatrix(), this._frustumPlanes ? IQ.e.GetPlanesToRef(this._transformMatrix, this._frustumPlanes) : this._frustumPlanes = IQ.e.GetPlanes(this._transformMatrix), this._refreshFrustumPlanes = !1)
        }
        isInFrustum(QQ) {
          let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._updateFrustumPlanes(), WQ && this.rigCameras.length > 0) {
            let WQ = !1;
            for (const XQ of this.rigCameras) XQ._updateFrustumPlanes(), WQ = WQ || QQ.isInFrustum(XQ._frustumPlanes);
            return WQ
          }
          return QQ.isInFrustum(this._frustumPlanes)
        }
        isCompletelyInFrustum(QQ) {
          return this._updateFrustumPlanes(), QQ.isCompletelyInFrustum(this._frustumPlanes)
        }
        getForwardRay() {
          throw (0, JQ.i)("Ray")
        }
        getForwardRayToRef(QQ) {
          throw (0, JQ.i)("Ray")
        }
        dispose(WQ) {
          let XQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          for (this.onViewMatrixChangedObservable.clear(), this.onProjectionMatrixChangedObservable.clear(), this.onAfterCheckInputsObservable.clear(), this.onRestoreStateObservable.clear(), this.inputs && this.inputs.clear(), this.sE().stopAnimation(this), this.sE().removeCamera(this); this._rigCameras.length > 0;) {
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
              const WQ = this._postProcesses[QQ];
              WQ && WQ.dispose(this)
            }
          }
          let wQ = this.customRenderTargets.length;
          for (; --wQ >= 0;) this.customRenderTargets[wQ].dispose();
          this.customRenderTargets.length = 0, this._activeMeshes.dispose(), this.sE().Uj().releaseRenderPassId(this.renderPassId), super.dispose(WQ, XQ)
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
        setCameraRigMode(WQ, XQ) {
          if (this.cameraRigMode !== WQ) {
            for (; this._rigCameras.length > 0;) {
              const QQ = this._rigCameras.pop();
              QQ && QQ.dispose()
            }
            if (this.cameraRigMode = WQ, this._cameraRigParams = {}, this._cameraRigParams.interaxialDistance = XQ.interaxialDistance || .0637, this._cameraRigParams.stereoHalfAngle = this._cameraRigParams.interaxialDistance / .0637 * (Math.PI / 180), this.cameraRigMode !== QQ.RIG_MODE_NONE) {
              const QQ = this.createRigCamera(this.name + "_L", 0);
              QQ && (QQ._isLeftCamera = !0);
              const WQ = this.createRigCamera(this.name + "_R", 1);
              WQ && (WQ._isRightCamera = !0), QQ && WQ && (this._rigCameras.push(QQ), this._rigCameras.push(WQ))
            }
            this._setRigMode(XQ), this._cascadePostProcessesToRigCams(), this.update()
          }
        }
        _setRigMode(QQ) {}
        _getVRProjectionMatrix() {
          return sQ.e.PerspectiveFovLHToRef(this._cameraRigParams.vrMetrics.aspectRatioFov, this._cameraRigParams.vrMetrics.aspectRatio, this.minZ, this.ignoreCameraMaxZ ? 0 : this.maxZ, this._cameraRigParams.vrWorkMatrix, !0, this.Uj().isNDCHalfZRange), this._cameraRigParams.vrWorkMatrix.multiplyToRef(this._cameraRigParams.vrHMatrix, this._projectionMatrix), this._projectionMatrix
        }
        setCameraRigParameter(QQ, WQ) {
          this._cameraRigParams || (this._cameraRigParams = {}), this._cameraRigParams[QQ] = WQ, "interaxialDistance" === QQ && (this._cameraRigParams.stereoHalfAngle = WQ / .0637 * (Math.PI / 180))
        }
        createRigCamera(QQ, WQ) {
          return null
        }
        _updateRigCameras() {
          for (let QQ = 0; QQ < this._rigCameras.length; QQ++) this._rigCameras[QQ].minZ = this.minZ, this._rigCameras[QQ].maxZ = this.ignoreCameraMaxZ ? 0 : this.maxZ, this._rigCameras[QQ].fov = this.fov, this._rigCameras[QQ].upVector.WH(this.upVector);
          this.cameraRigMode === QQ.RIG_MODE_STEREOSCOPIC_ANAGLYPH && (this._rigCameras[0].viewport = this._rigCameras[1].viewport = this.viewport)
        }
        _setupInputs() {}
        serialize() {
          const QQ = BQ.b.Serialize(this);
          return QQ.uniqueId = this.uniqueId, QQ.type = this.getClassName(), this.parent && this.parent._serializeAsParent(QQ), this.inputs && this.inputs.serialize(QQ), BQ.b.AppendSerializedAnimations(this, QQ), QQ.Qy = this.serializeAnimationRanges(), QQ.isEnabled = this.isEnabled(), QQ
        }
        clone(WQ) {
          let XQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const wQ = BQ.b.Clone(QQ.GetConstructorFromName(this.getClassName(), WQ, this.sE(), this.interaxialDistance, this.isStereoscopicSideBySide), this);
          return wQ.name = WQ, wQ.parent = XQ, this.onClonedObservable.notifyObservers(wQ), wQ
        }
        iK(QQ) {
          const WQ = sQ.s.Zero();
          return this.getDirectionToRef(QQ, WQ), WQ
        }
        get absoluteRotation() {
          return this.getWorldMatrix().decompose(void 0, this._absoluteRotation), this._absoluteRotation
        }
        getDirectionToRef(QQ, WQ) {
          sQ.s.TransformNormalToRef(QQ, this.getWorldMatrix(), WQ)
        }
        static GetConstructorFromName(WQ, XQ, wQ) {
          let qQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
            TQ = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
          const zQ = FQ.e.Construct(WQ, XQ, wQ, {
            interaxial_distance: qQ,
            isStereoscopicSideBySide: TQ
          });
          return zQ || (() => QQ._CreateDefaultParsedCamera(XQ, wQ))
        }
        computeWorldMatrix() {
          return this.getWorldMatrix()
        }
        _calculateHandednessMultiplier() {
          let QQ = this.sE().useRightHandedSystem ? -1 : 1;
          return this.parent && this.parent._getWorldMatrixDeterminant() < 0 && (QQ *= -1), QQ
        }
      }, (() => {
        const TQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(AQ[Symbol.metadata] ?? null) : void 0;
        WQ = [(0, qQ.F)("position")], XQ = [(0, qQ.F)("upVector")], gQ = [(0, qQ.I)()], yQ = [(0, qQ.I)()], VQ = [(0, qQ.I)()], DQ = [(0, qQ.I)()], pQ = [(0, qQ.I)()], GQ = [(0, qQ.I)()], UQ = [(0, qQ.I)()], bQ = [(0, qQ.I)()], vQ = [(0, qQ.I)()], dQ = [(0, qQ.I)()], HQ = [(0, qQ.I)()], aQ = [(0, qQ.I)()], lQ = [(0, qQ.I)()], hQ = [(0, qQ.I)()], iQ = [(0, qQ.I)()], cQ = [(0, qQ.I)()], (0, wQ.k)(QQ, null, gQ, {
          kind: "getter",
          name: "orthoLeft",
          static: !1,
          private: !1,
          access: {
            has: QQ => "orthoLeft" in QQ,
            get: QQ => QQ.orthoLeft
          },
          metadata: TQ
        }, null, RQ), (0, wQ.k)(QQ, null, yQ, {
          kind: "getter",
          name: "orthoRight",
          static: !1,
          private: !1,
          access: {
            has: QQ => "orthoRight" in QQ,
            get: QQ => QQ.orthoRight
          },
          metadata: TQ
        }, null, RQ), (0, wQ.k)(QQ, null, VQ, {
          kind: "getter",
          name: "orthoBottom",
          static: !1,
          private: !1,
          access: {
            has: QQ => "orthoBottom" in QQ,
            get: QQ => QQ.orthoBottom
          },
          metadata: TQ
        }, null, RQ), (0, wQ.k)(QQ, null, DQ, {
          kind: "getter",
          name: "orthoTop",
          static: !1,
          private: !1,
          access: {
            has: QQ => "orthoTop" in QQ,
            get: QQ => QQ.orthoTop
          },
          metadata: TQ
        }, null, RQ), (0, wQ.k)(QQ, null, vQ, {
          kind: "getter",
          name: "inertia",
          static: !1,
          private: !1,
          access: {
            has: QQ => "inertia" in QQ,
            get: QQ => QQ.inertia
          },
          metadata: TQ
        }, null, RQ), (0, wQ.k)(QQ, null, dQ, {
          kind: "getter",
          name: "mode",
          static: !1,
          private: !1,
          access: {
            has: QQ => "mode" in QQ,
            get: QQ => QQ.mode
          },
          metadata: TQ
        }, null, RQ), (0, wQ.k)(null, null, WQ, {
          kind: "field",
          name: "_position",
          static: !1,
          private: !1,
          access: {
            has: QQ => "_position" in QQ,
            get: QQ => QQ._position,
            set: (QQ, WQ) => {
              QQ._position = WQ
            }
          },
          metadata: TQ
        }, EQ, CQ), (0, wQ.k)(null, null, XQ, {
          kind: "field",
          name: "_upVector",
          static: !1,
          private: !1,
          access: {
            has: QQ => "_upVector" in QQ,
            get: QQ => QQ._upVector,
            set: (QQ, WQ) => {
              QQ._upVector = WQ
            }
          },
          metadata: TQ
        }, uQ, LQ), (0, wQ.k)(null, null, pQ, {
          kind: "field",
          name: "fov",
          static: !1,
          private: !1,
          access: {
            has: QQ => "fov" in QQ,
            get: QQ => QQ.fov,
            set: (QQ, WQ) => {
              QQ.fov = WQ
            }
          },
          metadata: TQ
        }, kQ, fQ), (0, wQ.k)(null, null, GQ, {
          kind: "field",
          name: "projectionPlaneTilt",
          static: !1,
          private: !1,
          access: {
            has: QQ => "projectionPlaneTilt" in QQ,
            get: QQ => QQ.projectionPlaneTilt,
            set: (QQ, WQ) => {
              QQ.projectionPlaneTilt = WQ
            }
          },
          metadata: TQ
        }, SQ, tQ), (0, wQ.k)(null, null, UQ, {
          kind: "field",
          name: "minZ",
          static: !1,
          private: !1,
          access: {
            has: QQ => "minZ" in QQ,
            get: QQ => QQ.minZ,
            set: (QQ, WQ) => {
              QQ.minZ = WQ
            }
          },
          metadata: TQ
        }, oQ, eQ), (0, wQ.k)(null, null, bQ, {
          kind: "field",
          name: "maxZ",
          static: !1,
          private: !1,
          access: {
            has: QQ => "maxZ" in QQ,
            get: QQ => QQ.maxZ,
            set: (QQ, WQ) => {
              QQ.maxZ = WQ
            }
          },
          metadata: TQ
        }, nQ, xQ), (0, wQ.k)(null, null, HQ, {
          kind: "field",
          name: "layerMask",
          static: !1,
          private: !1,
          access: {
            has: QQ => "layerMask" in QQ,
            get: QQ => QQ.layerMask,
            set: (QQ, WQ) => {
              QQ.layerMask = WQ
            }
          },
          metadata: TQ
        }, YQ, NQ), (0, wQ.k)(null, null, aQ, {
          kind: "field",
          name: "fovMode",
          static: !1,
          private: !1,
          access: {
            has: QQ => "fovMode" in QQ,
            get: QQ => QQ.fovMode,
            set: (QQ, WQ) => {
              QQ.fovMode = WQ
            }
          },
          metadata: TQ
        }, ZQ, OQ), (0, wQ.k)(null, null, lQ, {
          kind: "field",
          name: "cameraRigMode",
          static: !1,
          private: !1,
          access: {
            has: QQ => "cameraRigMode" in QQ,
            get: QQ => QQ.cameraRigMode,
            set: (QQ, WQ) => {
              QQ.cameraRigMode = WQ
            }
          },
          metadata: TQ
        }, KQ, mQ), (0, wQ.k)(null, null, hQ, {
          kind: "field",
          name: "interaxialDistance",
          static: !1,
          private: !1,
          access: {
            has: QQ => "interaxialDistance" in QQ,
            get: QQ => QQ.interaxialDistance,
            set: (QQ, WQ) => {
              QQ.interaxialDistance = WQ
            }
          },
          metadata: TQ
        }, MQ, QW), (0, wQ.k)(null, null, iQ, {
          kind: "field",
          name: "isStereoscopicSideBySide",
          static: !1,
          private: !1,
          access: {
            has: QQ => "isStereoscopicSideBySide" in QQ,
            get: QQ => QQ.isStereoscopicSideBySide,
            set: (QQ, WQ) => {
              QQ.isStereoscopicSideBySide = WQ
            }
          },
          metadata: TQ
        }, WW, XW), (0, wQ.k)(null, null, cQ, {
          kind: "field",
          name: "ignoreCameraMaxZ",
          static: !1,
          private: !1,
          access: {
            has: QQ => "ignoreCameraMaxZ" in QQ,
            get: QQ => QQ.ignoreCameraMaxZ,
            set: (QQ, WQ) => {
              QQ.ignoreCameraMaxZ = WQ
            }
          },
          metadata: TQ
        }, wW, qW), TQ && Object.defineProperty(QQ, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: TQ
        })
      })(), QQ._CreateDefaultParsedCamera = (QQ, WQ) => {
        throw (0, JQ.i)("UniversalCamera")
      }, QQ.PERSPECTIVE_CAMERA = 0, QQ.ORTHOGRAPHIC_CAMERA = 1, QQ.FOVMODE_VERTICAL_FIXED = 0, QQ.FOVMODE_HORIZONTAL_FIXED = 1, QQ.RIG_MODE_NONE = 0, QQ.RIG_MODE_STEREOSCOPIC_ANAGLYPH = 10, QQ.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL = 11, QQ.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED = 12, QQ.RIG_MODE_STEREOSCOPIC_OVERUNDER = 13, QQ.RIG_MODE_STEREOSCOPIC_INTERLACED = 14, QQ.RIG_MODE_VR = 20, QQ.RIG_MODE_CUSTOM = 22, QQ.ForceAttachControlToAlwaysPreventDefault = !1, QQ
    })();

    function VQ(QQ, WQ) {
      const XQ = QQ.type,
        wQ = yQ.GetConstructorFromName(XQ, QQ.name, WQ, QQ.interaxial_distance, QQ.isStereoscopicSideBySide),
        qQ = BQ.b.Parse(wQ, QQ, WQ);
      if (void 0 !== QQ.parentId && (qQ._waitingParentId = QQ.parentId), void 0 !== QQ.parentInstanceIndex && (qQ._waitingParentInstanceIndex = QQ.parentInstanceIndex), qQ.inputs && (qQ.inputs.parse(QQ), qQ._setupInputs()), QQ.upVector && (qQ.upVector = sQ.s.FromArray(QQ.upVector)), qQ.setPosition && (qQ.position.XQQ(0, 0, 0), qQ.setPosition(sQ.s.FromArray(QQ.position))), QQ.target && qQ.setTarget && qQ.setTarget(sQ.s.FromArray(QQ.target)), QQ.cameraRigMode) {
        const WQ = QQ.interaxial_distance ? {
          interaxialDistance: QQ.interaxial_distance
        } : {};
        qQ.setCameraRigMode(QQ.cameraRigMode, WQ)
      }
      if (QQ.animations) {
        for (let WQ = 0; WQ < QQ.animations.length; WQ++) {
          const XQ = QQ.animations[WQ],
            wQ = (0, gQ.b)("BABYLON.Animation");
          wQ && qQ.animations.push(wQ.Parse(XQ))
        }
        FQ.e.ParseAnimationRanges(qQ, QQ, WQ)
      }
      return QQ.autoAnimate && WQ.beginAnimation(qQ, QQ.autoAnimateFrom, QQ.autoAnimateTo, QQ.autoAnimateLoop, QQ.autoAnimateSpeed || 1), void 0 !== QQ.isEnabled && qQ.UH(QQ.isEnabled), qQ
    }
    let DQ = !1;

    function pQ() {
      DQ || (DQ = !0, yQ.Parse = VQ)
    }
  },
  40501: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => qQ
    });
    var wQ = XQ(37370);
    class qQ {
      constructor(QQ, WQ, XQ) {
        this._cameraPosition = WQ, this._behavior = XQ, this.activeInput = !1, this.speed = 1, this.kN = 1, this.panSpeed = 1, this.rotationXSpeed = 1, this.rotationYSpeed = 1, this._zoomSpeedMultiplier = 1, this._panSpeedMultiplier = 1, this.zoomInertia = .9, this.panInertia = .9, this.rotationInertia = .9, this.zoomAccumulatedPixels = 0, this.panAccumulatedPixels = new wQ.s, this.rotationAccumulatedPixels = new wQ.s, this.zoomDeltaCurrentFrame = 0, this.panDeltaCurrentFrame = wQ.s.Zero(), this.rotationDeltaCurrentFrame = wQ.s.Zero(), this._zoomVelocity = 0, this._panVelocity = new wQ.s, this.referenceFrameRate = 60, this._rotationVelocity = new wQ.s, this._prevFrameTimeMs = 0, this._scene = QQ
      }
      computeCurrentFrameDeltas() {
        const QQ = this._scene.Uj().getDeltaTime(),
          WQ = this._getEffectiveDeltaMs(QQ);
        if (0 === this._zoomVelocity && 0 === this.zoomAccumulatedPixels && 0 === this._panVelocity.x && 0 === this._panVelocity.y && 0 === this._panVelocity.z && 0 === this.panAccumulatedPixels.x && 0 === this.panAccumulatedPixels.y && 0 === this.panAccumulatedPixels.z && 0 === this._rotationVelocity.x && 0 === this._rotationVelocity.y && 0 === this._rotationVelocity.z && 0 === this.rotationAccumulatedPixels.x && 0 === this.rotationAccumulatedPixels.y && 0 === this.rotationAccumulatedPixels.z && !this.activeInput) return this.panDeltaCurrentFrame.h_(0), this.rotationDeltaCurrentFrame.h_(0), this.zoomDeltaCurrentFrame = 0, void(QQ > 0 && (this._prevFrameTimeMs = QQ));
        this.panDeltaCurrentFrame.h_(0), this.rotationDeltaCurrentFrame.h_(0), this.zoomDeltaCurrentFrame = 0;
        (this.panAccumulatedPixels.lengthSquared() > 0 || this.rotationAccumulatedPixels.lengthSquared() > 0 || 0 !== this.zoomAccumulatedPixels) && this._behavior?.isInterpolating && this._behavior.stopAllAnimations(), this._panVelocity.XQQ(this._calculateCurrentVelocity(this._panVelocity.x, this.panAccumulatedPixels.x, this.panInertia), this._calculateCurrentVelocity(this._panVelocity.y, this.panAccumulatedPixels.y, this.panInertia), this._calculateCurrentVelocity(this._panVelocity.z, this.panAccumulatedPixels.z, this.panInertia)), this._panVelocity.scaleToRef(this.speed * this.panSpeed * this._panSpeedMultiplier * WQ, this.panDeltaCurrentFrame), this._rotationVelocity.XQQ(this._calculateCurrentVelocity(this._rotationVelocity.x, this.rotationAccumulatedPixels.x, this.rotationInertia), this._calculateCurrentVelocity(this._rotationVelocity.y, this.rotationAccumulatedPixels.y, this.rotationInertia), this._calculateCurrentVelocity(this._rotationVelocity.z, this.rotationAccumulatedPixels.z, this.rotationInertia)), this.rotationDeltaCurrentFrame.XQQ(this._rotationVelocity.x * this.speed * this.rotationXSpeed * WQ, this._rotationVelocity.y * this.speed * this.rotationYSpeed * WQ, 0), this._zoomVelocity = this._calculateCurrentVelocity(this._zoomVelocity, this.zoomAccumulatedPixels, this.zoomInertia), this.zoomDeltaCurrentFrame = this._zoomVelocity * (this.speed * this.kN * this._zoomSpeedMultiplier) * WQ, QQ > 0 && (this._prevFrameTimeMs = QQ), this.zoomAccumulatedPixels = 0, this.panAccumulatedPixels.h_(0), this.rotationAccumulatedPixels.h_(0), this.activeInput = !1
      }
      resetRotationVelocity() {
        this._rotationVelocity.h_(0), this.rotationAccumulatedPixels.h_(0)
      }
      resetPanVelocity() {
        this._panVelocity.h_(0), this.panAccumulatedPixels.h_(0)
      }
      resetZoomVelocity() {
        this._zoomVelocity = 0, this.zoomAccumulatedPixels = 0
      }
      get isInterpolating() {
        return !!this._behavior?.isInterpolating
      }
      getFrameIndependentDecay(QQ) {
        const WQ = this._scene.Uj().getDeltaTime(),
          XQ = this._getEffectiveDeltaMs(WQ),
          wQ = 1e3 / this.referenceFrameRate;
        return Math.pow(QQ, XQ / wQ)
      }
      getFrameIndependentInputScale(QQ) {
        const WQ = 1 - QQ;
        if (WQ <= 0) return 1;
        return (1 - this.getFrameIndependentDecay(QQ)) / WQ
      }
      _getEffectiveDeltaMs(QQ) {
        return QQ > 0 ? QQ : this._prevFrameTimeMs > 0 ? this._prevFrameTimeMs : 1e3 / this.referenceFrameRate
      }
      _calculateCurrentVelocity(QQ, WQ, XQ) {
        let wQ = QQ;
        const qQ = this._scene.Uj().getDeltaTime(),
          TQ = this._getEffectiveDeltaMs(qQ);
        if (0 === TQ) return wQ;
        const zQ = this.getFrameIndependentDecay(XQ);
        if (wQ *= zQ, 0 !== WQ || this.activeInput) {
          const QQ = 1 - XQ;
          wQ += WQ / TQ * (QQ > 0 ? (1 - zQ) / QQ : 1)
        } else Math.abs(wQ) < 1e-6 && (wQ = 0);
        return wQ
      }
    }
  },
  40506: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => wQ
    });
    class wQ {
      constructor(QQ, WQ) {
        this.inputMap = [], this.handlers = QQ, this._createDefaultEntries = WQ, this.resetInputMap()
      }
      resolveInteraction(QQ, WQ) {
        for (const XQ of this.inputMap)
          if (XQ.source === QQ && this._entryMatches(XQ, WQ)) return XQ;
        return null
      }
      resetInputMap() {
        this.inputMap = this._createDefaultEntries?.() ?? []
      }
      getEntry(QQ, WQ, XQ) {
        const wQ = this.inputMap;
        for (let qQ = 0; qQ < wQ.length; qQ++) {
          const TQ = wQ[qQ];
          if (TQ.source === QQ && TQ.interaction === WQ && this._entryConditionsMatch(TQ, XQ)) return TQ
        }
      }
      getEntries(QQ, WQ, XQ) {
        const wQ = [],
          qQ = this.inputMap;
        for (let TQ = 0; TQ < qQ.length; TQ++) {
          const zQ = qQ[TQ];
          zQ.source === QQ && zQ.interaction === WQ && this._entryConditionsMatch(zQ, XQ) && wQ.push(zQ)
        }
        return wQ
      }
      addEntry(QQ) {
        const WQ = this._entrySpecificity(QQ);
        let XQ = this.inputMap.length;
        for (let wQ = 0; wQ < this.inputMap.length; wQ++)
          if (this._entrySpecificity(this.inputMap[wQ]) < WQ) {
            XQ = wQ;
            break
          } this.inputMap.splice(XQ, 0, QQ)
      }
      setInteraction(QQ, WQ, XQ) {
        const wQ = this.resolveInteraction(QQ, WQ);
        return wQ && this._entryCoversAllConditionsOf(wQ, WQ) ? (wQ.interaction = XQ, !0) : (this.addEntry({
          source: QQ,
          ...WQ ?? {},
          interaction: XQ
        }), !0)
      }
      _entryCoversAllConditionsOf(QQ, WQ) {
        if (!WQ) return !0;
        const XQ = QQ;
        for (const wQ of Object.keys(WQ)) {
          const QQ = WQ[wQ];
          if (void 0 !== QQ)
            if ("modifiers" === wQ) {
              const WQ = XQ.modifiers ?? {};
              for (const XQ of Object.keys(QQ))
                if (void 0 !== QQ[XQ] && void 0 === WQ[XQ]) return !1
            } else if (void 0 === XQ[wQ]) return !1
        }
        return !0
      }
      setInteractions(QQ, WQ, XQ) {
        let wQ = 0;
        const qQ = this.inputMap;
        for (let TQ = 0; TQ < qQ.length; TQ++) {
          const zQ = qQ[TQ];
          zQ.source === QQ && this._entryMatches(zQ, WQ) && (zQ.interaction = XQ, wQ++)
        }
        return wQ
      }
      _entryMatches(QQ, WQ) {
        switch (QQ.source) {
          case "pointer":
            return (void 0 === QQ.button || QQ.button === WQ?.button) && this._matchModifiers(QQ.modifiers, WQ?.modifiers);
          case "wheel":
            return this._matchModifiers(QQ.modifiers, WQ?.modifiers);
          case "touch":
            return void 0 === QQ.touchCount || QQ.touchCount === WQ?.touchCount;
          case "keyboard":
            return (void 0 === QQ.key || (Array.isArray(QQ.key) ? -1 !== QQ.key.indexOf(WQ?.key ?? -1) : QQ.key === WQ?.key)) && this._matchModifiers(QQ.modifiers, WQ?.modifiers)
        }
      }
      _entryConditionsMatch(QQ, WQ) {
        if (!WQ) return !0;
        switch (QQ.source) {
          case "pointer":
            return (!("button" in WQ) || QQ.button === WQ.button) && (!("modifiers" in WQ) || this._entryModifiersMatch(QQ.modifiers, WQ.modifiers));
          case "wheel":
            return !("modifiers" in WQ) || this._entryModifiersMatch(QQ.modifiers, WQ.modifiers);
          case "touch":
            return !("touchCount" in WQ) || QQ.touchCount === WQ.touchCount;
          case "keyboard":
            if ("key" in WQ) {
              if (void 0 === QQ.key) return void 0 === WQ.key;
              if (void 0 === WQ.key || (Array.isArray(QQ.key) ? -1 === QQ.key.indexOf(WQ.key) : QQ.key !== WQ.key)) return !1
            }
            return !("modifiers" in WQ) || this._entryModifiersMatch(QQ.modifiers, WQ.modifiers)
        }
      }
      _entrySpecificity(QQ) {
        let WQ = 0;
        return "button" in QQ && void 0 !== QQ.button && WQ++, "key" in QQ && void 0 !== QQ.key && WQ++, "touchCount" in QQ && void 0 !== QQ.touchCount && WQ++, "modifiers" in QQ && QQ.modifiers && WQ++, WQ
      }
      _matchModifiers(QQ, WQ) {
        return !QQ || (void 0 === QQ.ctrl || QQ.ctrl === (WQ?.ctrl ?? !1)) && ((void 0 === QQ.shift || QQ.shift === (WQ?.shift ?? !1)) && (void 0 === QQ.alt || QQ.alt === (WQ?.alt ?? !1)))
      }
      _entryModifiersMatch(QQ, WQ) {
        if (!WQ) return !QQ;
        return void 0 !== WQ.ctrl || void 0 !== WQ.shift || void 0 !== WQ.alt ? (void 0 === WQ.ctrl || QQ?.ctrl === WQ.ctrl) && ((void 0 === WQ.shift || QQ?.shift === WQ.shift) && (void 0 === WQ.alt || QQ?.alt === WQ.alt)) : !QQ || void 0 === QQ.ctrl && void 0 === QQ.shift && void 0 === QQ.alt
      }
    }
  },
  40484: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => VQ,
      c: () => BQ
    });
    var wQ = XQ(40260),
      qQ = XQ(40268),
      TQ = XQ(40487),
      zQ = XQ(37370),
      sQ = XQ(37374),
      FQ = XQ(40496),
      PQ = XQ(40491),
      gQ = XQ(40501),
      JQ = XQ(40506);
    class rQ extends gQ.d {
      constructor(QQ, WQ, XQ) {
        super(QQ, WQ, XQ), this.input = new JQ.c({
          translate: (QQ, WQ, XQ) => {
            this.panAccumulatedPixels.x += QQ, this.panAccumulatedPixels.y += WQ, this.panAccumulatedPixels.z += XQ
          },
          rotate: (QQ, WQ) => {
            this.rotationAccumulatedPixels.x += QQ, this.rotationAccumulatedPixels.y += WQ
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
    const IQ = zQ.e.Zero(),
      jQ = zQ.h.Identity();
    let BQ = (() => {
        var QQ;
        let WQ, XQ, PQ, gQ, JQ = TQ.d,
          BQ = [],
          yQ = [],
          VQ = [],
          DQ = [],
          pQ = [],
          GQ = [],
          UQ = [],
          bQ = [];
        return QQ = class extends JQ {
          get inertia() {
            return this._targetInertia
          }
          set inertia(QQ) {
            this._targetInertia = QQ, this.movement && (this.movement.panInertia = QQ, this.movement.rotationInertia = QQ)
          }
          constructor(QQ, WQ, XQ) {
            super(QQ, WQ, XQ, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]), this.cameraDirection = new zQ.s(0, 0, 0), this.cameraRotation = new zQ.q(0, 0), this._targetInertia = .9, this.updateUpVectorFromRotation = (0, wQ.n)(this, BQ, !1), this.rotation = ((0, wQ.n)(this, yQ), (0, wQ.n)(this, VQ, void 0)), this.rotationQuaternion = (0, wQ.n)(this, DQ), this.speed = (0, wQ.n)(this, pQ, 2), this.noRotationConstraint = ((0, wQ.n)(this, GQ), !1), this.invertRotation = !1, this.inverseRotationSpeed = .2, this._panningEpsilon = sQ.b, this._rotationEpsilon = sQ.b, this.lockedTarget = (0, wQ.n)(this, UQ, null), this._currentTarget = ((0, wQ.n)(this, bQ), zQ.s.Zero()), this._initialFocalDistance = 1, this._viewMatrix = zQ.e.Zero(), this._cameraTransformMatrix = zQ.e.Zero(), this._cameraRotationMatrix = zQ.e.Zero(), this._transformedReferencePoint = zQ.s.Zero(), this._deferredPositionUpdate = new zQ.s, this._deferredRotationQuaternionUpdate = new zQ.h, this._deferredRotationUpdate = new zQ.s, this._deferredUpdated = !1, this._deferOnly = !1, this._cachedRotationZ = 0, this._cachedQuaternionRotationZ = 0, this._referencePoint = zQ.s.Forward(this.sE().useRightHandedSystem), this.rotation = new zQ.s(0, this.sE().useRightHandedSystem ? Math.PI : 0, 0), this.movement = new rQ(this.sE(), this.position), this.movement.panInertia = this.inertia, this.movement.rotationInertia = this.inertia
          }
          getFrontPosition(QQ) {
            this.getWorldMatrix();
            const WQ = zQ.m.vj[0],
              XQ = zQ.m.vj[1];
            return XQ.set(0, 0, this._scene.useRightHandedSystem ? -1 : 1), this.getDirectionToRef(XQ, WQ), WQ.scaleInPlace(QQ), this.globalPosition.add(WQ)
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
            return !!super._restoreStateValues() && (this.position = this._storedPosition.clone(), this.rotation = this._storedRotation.clone(), this.rotationQuaternion && this._storedRotationQuaternion && (this.rotationQuaternion = this._storedRotationQuaternion.clone()), this.cameraDirection.XQQ(0, 0, 0), this.cameraRotation.XQQ(0, 0), !0)
          }
          _initCache() {
            super._initCache(), this._cache.lockedTarget = new zQ.s(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.rotation = new zQ.s(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.rotationQuaternion = new zQ.h(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE)
          }
          _updateCache(QQ) {
            QQ || super._updateCache();
            const WQ = this._getLockedTargetPosition();
            WQ ? this._cache.lockedTarget ? this._cache.lockedTarget.WH(WQ) : this._cache.lockedTarget = WQ.clone() : this._cache.lockedTarget = null, this._cache.rotation.WH(this.rotation), this.rotationQuaternion && this._cache.rotationQuaternion.WH(this.rotationQuaternion)
          }
          _isSynchronizedViewMatrix() {
            if (!super._isSynchronizedViewMatrix()) return !1;
            const QQ = this._getLockedTargetPosition();
            return (this._cache.lockedTarget ? this._cache.lockedTarget.equals(QQ) : !QQ) && (this.rotationQuaternion ? this.rotationQuaternion.equals(this._cache.rotationQuaternion) : this._cache.rotation.equals(this.rotation))
          }
          _computeLocalCameraSpeed() {
            const QQ = this.Uj();
            return this.speed * Math.sqrt(QQ.getDeltaTime() / (100 * QQ.getFps()))
          }
          setTarget(QQ) {
            this.upVector.normalize(), this._initialFocalDistance = QQ.subtract(this.position).length(), this.position.z === QQ.z && (this.position.z += sQ.b), this._referencePoint.normalize().scaleInPlace(this._initialFocalDistance), this.sE().useRightHandedSystem ? zQ.e.LookAtRHToRef(this.position, QQ, zQ.s.UpReadOnly, IQ) : zQ.e.LookAtLHToRef(this.position, QQ, zQ.s.UpReadOnly, IQ), IQ.invert();
            const WQ = this.rotationQuaternion || jQ;
            zQ.h.FromRotationMatrixToRef(IQ, WQ), WQ.toEulerAnglesToRef(this.rotation), this.rotation.z = 0
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
            if (this.parent) return this.parent.getWorldMatrix().invertToRef(zQ.m.Matrix[0]), zQ.s.TransformNormalToRef(this.cameraDirection, zQ.m.Matrix[0], zQ.m.vj[0]), this._deferredPositionUpdate.addInPlace(zQ.m.vj[0]), void(this._deferOnly ? this._deferredUpdated = !0 : this.position.WH(this._deferredPositionUpdate));
            this._deferredPositionUpdate.addInPlace(this.cameraDirection), this._deferOnly ? this._deferredUpdated = !0 : this.position.WH(this._deferredPositionUpdate)
          }
          _checkInputs() {
            const QQ = this.movement,
              WQ = 0 !== this.cameraDirection.x || 0 !== this.cameraDirection.y || 0 !== this.cameraDirection.z;
            QQ.panAccumulatedPixels.addInPlace(this.cameraDirection), QQ.rotationAccumulatedPixels.x += this.cameraRotation.x, QQ.rotationAccumulatedPixels.y += this.cameraRotation.y, QQ.computeCurrentFrameDeltas(), this.cameraDirection.WH(QQ.panDeltaCurrentFrame), this.cameraRotation.set(QQ.rotationDeltaCurrentFrame.x, QQ.rotationDeltaCurrentFrame.y);
            const XQ = this.speed * this._panningEpsilon;
            !WQ && Math.abs(this.cameraDirection.x) < XQ && Math.abs(this.cameraDirection.y) < XQ && Math.abs(this.cameraDirection.z) < XQ && (this.cameraDirection.h_(0), QQ.resetPanVelocity());
            const wQ = this.invertRotation ? -this.inverseRotationSpeed : 1,
              qQ = this._decideIfNeedsToMove(),
              TQ = !(!this.cameraRotation.x && !this.cameraRotation.y);
            if (this._deferredUpdated = !1, this._deferredRotationUpdate.WH(this.rotation), this._deferredPositionUpdate.WH(this.position), this.rotationQuaternion && this._deferredRotationQuaternionUpdate.WH(this.rotationQuaternion), qQ && this._updatePosition(), TQ) {
              if (this.rotationQuaternion && this.rotationQuaternion.toEulerAnglesToRef(this._deferredRotationUpdate), this._deferredRotationUpdate.x += this.cameraRotation.x * wQ, this._deferredRotationUpdate.y += this.cameraRotation.y * wQ, !this.noRotationConstraint) {
                const QQ = 1.570796;
                this._deferredRotationUpdate.x > QQ && (this._deferredRotationUpdate.x = QQ), this._deferredRotationUpdate.x < -QQ && (this._deferredRotationUpdate.x = -QQ)
              }
              if (this._deferOnly ? this._deferredUpdated = !0 : this.rotation.WH(this._deferredRotationUpdate), this.rotationQuaternion) {
                this._deferredRotationUpdate.lengthSquared() && (zQ.h.RotationYawPitchRollToRef(this._deferredRotationUpdate.y, this._deferredRotationUpdate.x, this._deferredRotationUpdate.z, this._deferredRotationQuaternionUpdate), this._deferOnly ? this._deferredUpdated = !0 : this.rotationQuaternion.WH(this._deferredRotationQuaternionUpdate))
              }
            }
            this.cameraDirection.h_(0), this.cameraRotation.set(0, 0), super._checkInputs()
          }
          _updateCameraRotationMatrix() {
            this.rotationQuaternion ? this.rotationQuaternion.toRotationMatrix(this._cameraRotationMatrix) : zQ.e.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, this.rotation.z, this._cameraRotationMatrix)
          }
          _rotateUpVectorWithCameraRotationMatrix() {
            return zQ.s.TransformNormalToRef(zQ.s.UpReadOnly, this._cameraRotationMatrix, this.upVector), this
          }
          _getViewMatrix() {
            return this.lockedTarget && this.setTarget(this._getLockedTargetPosition()), this._updateCameraRotationMatrix(), this.rotationQuaternion && this._cachedQuaternionRotationZ != this.rotationQuaternion.z ? (this._rotateUpVectorWithCameraRotationMatrix(), this._cachedQuaternionRotationZ = this.rotationQuaternion.z) : this._cachedRotationZ !== this.rotation.z && (this._rotateUpVectorWithCameraRotationMatrix(), this._cachedRotationZ = this.rotation.z), zQ.s.TransformCoordinatesToRef(this._referencePoint, this._cameraRotationMatrix, this._transformedReferencePoint), this.position.addToRef(this._transformedReferencePoint, this._currentTarget), this.updateUpVectorFromRotation && (this.rotationQuaternion ? FQ.c.Y.rotateByQuaternionToRef(this.rotationQuaternion, this.upVector) : (zQ.h.FromEulerVectorToRef(this.rotation, jQ), FQ.c.Y.rotateByQuaternionToRef(jQ, this.upVector))), this._computeViewMatrix(this.position, this._currentTarget, this.upVector), this._viewMatrix
          }
          _computeViewMatrix(QQ, WQ, XQ) {
            if (this.sE().useRightHandedSystem ? zQ.e.LookAtRHToRef(QQ, WQ, XQ, this._viewMatrix) : zQ.e.LookAtLHToRef(QQ, WQ, XQ, this._viewMatrix), this.parent) {
              const QQ = this.parent.getWorldMatrix();
              this._viewMatrix.invert(), this._viewMatrix.multiplyToRef(QQ, this._viewMatrix), this._viewMatrix.invert(), this._markSyncedWithParent()
            }
          }
          createRigCamera(WQ, XQ) {
            if (this.cameraRigMode !== TQ.d.RIG_MODE_NONE) {
              const XQ = new QQ(WQ, this.position.clone(), this.sE());
              return XQ.isRigCamera = !0, XQ.rigParent = this, this.cameraRigMode === TQ.d.RIG_MODE_VR && (this.rotationQuaternion || (this.rotationQuaternion = new zQ.h), XQ._cameraRigParams = {}, XQ.rotationQuaternion = new zQ.h), XQ.mode = this.mode, XQ.orthoLeft = this.orthoLeft, XQ.orthoRight = this.orthoRight, XQ.orthoTop = this.orthoTop, XQ.orthoBottom = this.orthoBottom, XQ
            }
            return null
          }
          _updateRigCameras() {
            const QQ = this._rigCameras[0],
              WQ = this._rigCameras[1];
            switch (this.computeWorldMatrix(), this.cameraRigMode) {
              case TQ.d.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case TQ.d.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case TQ.d.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
              case TQ.d.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case TQ.d.RIG_MODE_STEREOSCOPIC_INTERLACED: {
                const XQ = this.cameraRigMode === TQ.d.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED ? 1 : -1,
                  wQ = this.cameraRigMode === TQ.d.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED ? -1 : 1;
                this._getRigCamPositionAndTarget(this._cameraRigParams.stereoHalfAngle * XQ, QQ), this._getRigCamPositionAndTarget(this._cameraRigParams.stereoHalfAngle * wQ, WQ);
                break
              }
              case TQ.d.RIG_MODE_VR:
                QQ.rotationQuaternion && WQ.rotationQuaternion && this.rotationQuaternion ? (QQ.rotationQuaternion.WH(this.rotationQuaternion), WQ.rotationQuaternion.WH(this.rotationQuaternion)) : (QQ.rotation.WH(this.rotation), WQ.rotation.WH(this.rotation)), QQ.position.WH(this.position), WQ.position.WH(this.position)
            }
            super._updateRigCameras()
          }
          _getRigCamPositionAndTarget(WQ, XQ) {
            this.getTarget().subtractToRef(this.position, QQ._TargetFocalPoint), QQ._TargetFocalPoint.normalize().scaleInPlace(this._initialFocalDistance);
            const wQ = QQ._TargetFocalPoint.addInPlace(this.position);
            zQ.e.TranslationToRef(-wQ.x, -wQ.y, -wQ.z, QQ._TargetTransformMatrix), QQ._TargetTransformMatrix.multiplyToRef(zQ.e.RotationAxis(XQ.upVector, WQ), QQ._RigCamTransformMatrix), zQ.e.TranslationToRef(wQ.x, wQ.y, wQ.z, QQ._TargetTransformMatrix), QQ._RigCamTransformMatrix.multiplyToRef(QQ._TargetTransformMatrix, QQ._RigCamTransformMatrix), zQ.s.TransformCoordinatesToRef(this.position, QQ._RigCamTransformMatrix, XQ.position), XQ.setTarget(wQ)
          }
          getClassName() {
            return "TargetCamera"
          }
        }, (() => {
          const TQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(JQ[Symbol.metadata] ?? null) : void 0;
          WQ = [(0, qQ.I)()], XQ = [(0, qQ.F)()], PQ = [(0, qQ.I)()], gQ = [(0, qQ.w)("lockedTargetId")], (0, wQ.k)(null, null, WQ, {
            kind: "field",
            name: "updateUpVectorFromRotation",
            static: !1,
            private: !1,
            access: {
              has: QQ => "updateUpVectorFromRotation" in QQ,
              get: QQ => QQ.updateUpVectorFromRotation,
              set: (QQ, WQ) => {
                QQ.updateUpVectorFromRotation = WQ
              }
            },
            metadata: TQ
          }, BQ, yQ), (0, wQ.k)(null, null, XQ, {
            kind: "field",
            name: "rotation",
            static: !1,
            private: !1,
            access: {
              has: QQ => "rotation" in QQ,
              get: QQ => QQ.rotation,
              set: (QQ, WQ) => {
                QQ.rotation = WQ
              }
            },
            metadata: TQ
          }, VQ, DQ), (0, wQ.k)(null, null, PQ, {
            kind: "field",
            name: "speed",
            static: !1,
            private: !1,
            access: {
              has: QQ => "speed" in QQ,
              get: QQ => QQ.speed,
              set: (QQ, WQ) => {
                QQ.speed = WQ
              }
            },
            metadata: TQ
          }, pQ, GQ), (0, wQ.k)(null, null, gQ, {
            kind: "field",
            name: "lockedTarget",
            static: !1,
            private: !1,
            access: {
              has: QQ => "lockedTarget" in QQ,
              get: QQ => QQ.lockedTarget,
              set: (QQ, WQ) => {
                QQ.lockedTarget = WQ
              }
            },
            metadata: TQ
          }, UQ, bQ), TQ && Object.defineProperty(QQ, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: TQ
          })
        })(), QQ._RigCamTransformMatrix = new zQ.e, QQ._TargetTransformMatrix = new zQ.e, QQ._TargetFocalPoint = new zQ.s, QQ
      })(),
      yQ = !1;

    function VQ() {
      yQ || (yQ = !0, PQ.e.AddNodeConstructor("TargetCamera", ((QQ, WQ) => () => new BQ(QQ, zQ.s.Zero(), WQ))))
    }
  },
  40228: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => TQ
    });
    var wQ = XQ(40170);
    let qQ = !1;

    function TQ() {
      qQ || (qQ = !0, wQ.d.prototype.getInputElement = function() {
        return this._renderingCanvas
      }, wQ.d.prototype.getRenderingCanvasClientRect = function() {
        return this._renderingCanvas ? this._renderingCanvas.getBoundingClientRect() : null
      }, wQ.d.prototype.getInputElementClientRect = function() {
        return this._renderingCanvas ? this.getInputElement().getBoundingClientRect() : null
      }, wQ.d.prototype.getAspectRatio = function(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const XQ = QQ.viewport;
        return this.getRenderWidth(WQ) * XQ.width / (this.getRenderHeight(WQ) * XQ.height)
      }, wQ.d.prototype.getScreenAspectRatio = function() {
        return this.getRenderWidth(!0) / this.getRenderHeight(!0)
      }, wQ.d.prototype._verifyPointerLock = function() {
        this._onPointerLockChange?.()
      })
    }
  },
  40300: (QQ, WQ, XQ) => {
    var wQ = XQ(40170),
      qQ = XQ(40307);
    let TQ = !1;
    TQ || (TQ = !0, (0, qQ.w)(), wQ.d.prototype._loadFileAsync = async function(QQ, WQ, XQ) {
      return await new Promise(((wQ, qQ) => {
        this._loadFile(QQ, (QQ => {
          wQ(QQ)
        }), void 0, WQ, XQ, ((QQ, WQ) => {
          qQ(WQ)
        }))
      }))
    })
  },
  40293: (QQ, WQ, XQ) => {
    (0, XQ(40230).b)()
  },
  40230: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => TQ
    });
    var wQ = XQ(40170);
    let qQ = !1;

    function TQ() {
      qQ || (qQ = !0, wQ.d.prototype.getRenderPassNames = function() {
        return this._renderPassNames
      }, wQ.d.prototype.getCurrentRenderPassName = function() {
        return this._renderPassNames[this.currentRenderPassId]
      }, wQ.d.prototype.createRenderPassId = function(QQ) {
        const WQ = ++wQ.d._RenderPassIdCounter;
        return this._renderPassNames[WQ] = QQ ?? "NONAME", WQ
      }, wQ.d.prototype.releaseRenderPassId = function(QQ) {
        this._renderPassNames[QQ] = void 0;
        for (let WQ = 0; WQ < this.scenes.length; ++WQ) {
          const XQ = this.scenes[WQ];
          for (let WQ = 0; WQ < XQ.meshes.length; ++WQ) {
            const wQ = XQ.meshes[WQ];
            if (wQ._releaseRenderPassId(QQ), wQ.ZD)
              for (let WQ = 0; WQ < wQ.ZD.length; ++WQ) {
                wQ.ZD[WQ]._removeDrawWrapper(QQ)
              }
          }
        }
        this._onReleaseRenderPassObservable?.notifyObservers(QQ)
      })
    }
  },
  40342: (QQ, WQ, XQ) => {
    var wQ = XQ(40344),
      qQ = XQ(40170);
    let TQ = !1;
    TQ || (TQ = !0, qQ.d.GetCompatibleTextureLoader = wQ.b)
  },
  40233: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => TQ
    });
    var wQ = XQ(40117);
    let qQ = !1;

    function TQ() {
      qQ || (qQ = !0, wQ.ThinEngine.prototype.setAlphaMode = function(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this._alphaMode[XQ] === QQ) {
          if (!WQ) {
            const WQ = 0 === QQ;
            this.depthCullingState.depthMask !== WQ && (this.depthCullingState.depthMask = WQ)
          }
          return
        }
        const wQ = 0 === QQ;
        this._alphaState.setAlphaBlend(!wQ, XQ), this._alphaState.setAlphaMode(QQ, XQ), WQ || (this.depthCullingState.depthMask = wQ), this._alphaMode[XQ] = QQ
      })
    }
  },
  40245: (QQ, WQ, XQ) => {
    var wQ = XQ(40103),
      qQ = XQ(38956),
      TQ = XQ(40117),
      zQ = XQ(40247),
      sQ = XQ(40212);
    class FQ extends zQ.e {
      setDepthStencilTexture(QQ) {
        let WQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (super.setDepthStencilTexture(QQ, WQ), !QQ) return;
        const XQ = this._engine,
          wQ = this._context,
          qQ = QQ._hardwareTexture;
        if (qQ && QQ._autoMSAAManagement && this._MSAAFramebuffer) {
          const WQ = XQ._currentFramebuffer;
          XQ._bindUnboundFramebuffer(this._MSAAFramebuffer), wQ.framebufferRenderbuffer(wQ.FRAMEBUFFER, (0, sQ.c)(QQ.format) ? wQ.DEPTH_STENCIL_ATTACHMENT : wQ.DEPTH_ATTACHMENT, wQ.RENDERBUFFER, qQ.getMSAARenderBuffer()), XQ._bindUnboundFramebuffer(WQ)
        }
      }
      constructor(QQ, WQ, XQ, wQ, qQ) {
        super(QQ, WQ, XQ, wQ), this._framebuffer = null, this._depthStencilBuffer = null, this._MSAAFramebuffer = null, this._colorTextureArray = null, this._depthStencilTextureArray = null, this._disposeOnlyFramebuffers = !1, this._currentLOD = 0, this._context = qQ
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
          WQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          XQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          TQ = arguments.length > 5 ? arguments[5] : void 0;
        if (this._depthStencilBuffer) {
          const QQ = this._engine,
            WQ = QQ._currentFramebuffer,
            XQ = this._context;
          QQ._bindUnboundFramebuffer(this._framebuffer), XQ.framebufferRenderbuffer(XQ.FRAMEBUFFER, XQ.DEPTH_STENCIL_ATTACHMENT, XQ.RENDERBUFFER, null), XQ.framebufferRenderbuffer(XQ.FRAMEBUFFER, XQ.DEPTH_ATTACHMENT, XQ.RENDERBUFFER, null), XQ.framebufferRenderbuffer(XQ.FRAMEBUFFER, XQ.STENCIL_ATTACHMENT, XQ.RENDERBUFFER, null), QQ._bindUnboundFramebuffer(WQ), XQ.deleteRenderbuffer(this._depthStencilBuffer), this._depthStencilBuffer = null
        }
        return super.createDepthStencilTexture(QQ, WQ, XQ, wQ, qQ, TQ)
      }
      shareDepth(QQ) {
        super.shareDepth(QQ);
        const WQ = this._context,
          XQ = this._depthStencilBuffer,
          wQ = QQ._MSAAFramebuffer || QQ._framebuffer,
          qQ = this._engine;
        QQ._depthStencilBuffer && QQ._depthStencilBuffer !== XQ && WQ.deleteRenderbuffer(QQ._depthStencilBuffer), QQ._depthStencilBuffer = XQ;
        const TQ = QQ._generateStencilBuffer ? WQ.DEPTH_STENCIL_ATTACHMENT : WQ.DEPTH_ATTACHMENT;
        qQ._bindUnboundFramebuffer(wQ), WQ.framebufferRenderbuffer(WQ.FRAMEBUFFER, TQ, WQ.RENDERBUFFER, XQ), qQ._bindUnboundFramebuffer(null)
      }
      _bindTextureRenderTarget(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          XQ = arguments.length > 2 ? arguments[2] : void 0,
          wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const qQ = QQ._hardwareTexture;
        if (!qQ) return;
        const TQ = this._framebuffer,
          zQ = this._engine,
          sQ = zQ._currentFramebuffer;
        let FQ;
        if (zQ._bindUnboundFramebuffer(TQ), zQ.Mj > 1) {
          const TQ = this._context;
          FQ = TQ["COLOR_ATTACHMENT" + WQ], QQ.is2DArray || QQ.is3D ? (XQ = XQ ?? this.layerIndices?.[WQ] ?? 0, TQ.framebufferTextureLayer(TQ.FRAMEBUFFER, FQ, qQ.underlyingResource, wQ, XQ)) : QQ.isCube ? (XQ = XQ ?? this.faceIndices?.[WQ] ?? 0, TQ.framebufferTexture2D(TQ.FRAMEBUFFER, FQ, TQ.TEXTURE_CUBE_MAP_POSITIVE_X + XQ, qQ.underlyingResource, wQ)) : TQ.framebufferTexture2D(TQ.FRAMEBUFFER, FQ, TQ.TEXTURE_2D, qQ.underlyingResource, wQ)
        } else {
          const QQ = this._context;
          FQ = QQ["COLOR_ATTACHMENT" + WQ + "_WEBGL"];
          const TQ = void 0 !== XQ ? QQ.TEXTURE_CUBE_MAP_POSITIVE_X + XQ : QQ.TEXTURE_2D;
          QQ.framebufferTexture2D(QQ.FRAMEBUFFER, FQ, TQ, qQ.underlyingResource, wQ)
        }
        if (QQ._autoMSAAManagement && this._MSAAFramebuffer) {
          const QQ = this._context;
          zQ._bindUnboundFramebuffer(this._MSAAFramebuffer), QQ.framebufferRenderbuffer(QQ.FRAMEBUFFER, FQ, QQ.RENDERBUFFER, qQ.getMSAARenderBuffer())
        }
        zQ._bindUnboundFramebuffer(sQ)
      }
      setTexture(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          XQ = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        super.setTexture(QQ, WQ, XQ), this._bindTextureRenderTarget(QQ, WQ)
      }
      setLayerAndFaceIndices(QQ, WQ) {
        if (super.setLayerAndFaceIndices(QQ, WQ), !this.textures || !this.layerIndices || !this.faceIndices) return;
        const XQ = this._attachments?.length ?? this.textures.length;
        for (let wQ = 0; wQ < XQ; wQ++) {
          const QQ = this.textures[wQ];
          QQ && (QQ.is2DArray || QQ.is3D ? this._bindTextureRenderTarget(QQ, wQ, this.layerIndices[wQ]) : QQ.isCube ? this._bindTextureRenderTarget(QQ, wQ, this.faceIndices[wQ]) : this._bindTextureRenderTarget(QQ, wQ))
        }
      }
      setLayerAndFaceIndex() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          WQ = arguments.length > 1 ? arguments[1] : void 0,
          XQ = arguments.length > 2 ? arguments[2] : void 0;
        if (super.setLayerAndFaceIndex(QQ, WQ, XQ), !this.textures || !this.layerIndices || !this.faceIndices) return;
        const wQ = this.textures[QQ];
        wQ.is2DArray || wQ.is3D ? this._bindTextureRenderTarget(this.textures[QQ], QQ, this.layerIndices[QQ]) : wQ.isCube && this._bindTextureRenderTarget(this.textures[QQ], QQ, this.faceIndices[QQ])
      }
      resolveMSAATextures() {
        const QQ = this._engine,
          WQ = QQ._currentFramebuffer;
        QQ._bindUnboundFramebuffer(this._MSAAFramebuffer), super.resolveMSAATextures(), QQ._bindUnboundFramebuffer(WQ)
      }
      dispose() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._disposeOnlyFramebuffers;
        const WQ = this._context;
        QQ || (this._colorTextureArray && (this._context.deleteTexture(this._colorTextureArray), this._colorTextureArray = null), this._depthStencilTextureArray && (this._context.deleteTexture(this._depthStencilTextureArray), this._depthStencilTextureArray = null)), this._framebuffer && (WQ.deleteFramebuffer(this._framebuffer), this._framebuffer = null), this._depthStencilBuffer && (WQ.deleteRenderbuffer(this._depthStencilBuffer), this._depthStencilBuffer = null), this._MSAAFramebuffer && (WQ.deleteFramebuffer(this._MSAAFramebuffer), this._MSAAFramebuffer = null), super.dispose(QQ)
      }
    }
    let PQ = !1;
    PQ || (PQ = !0, TQ.ThinEngine.prototype._createHardwareRenderTargetWrapper = function(QQ, WQ, XQ) {
      const wQ = new FQ(QQ, WQ, XQ, this, this._gl);
      return this._renderTargetWrapperCache.push(wQ), wQ
    }, TQ.ThinEngine.prototype.createRenderTargetTexture = function(QQ, WQ) {
      const XQ = this._createHardwareRenderTargetWrapper(!1, !1, QQ);
      let wQ, qQ, TQ = !0,
        zQ = !1,
        sQ = !1,
        FQ = 1;
      void 0 !== WQ && "object" === typeof WQ && (TQ = WQ.generateDepthBuffer ?? !0, zQ = !!WQ.generateStencilBuffer, sQ = !!WQ.noColorAttachment, wQ = WQ.colorAttachment, FQ = WQ.samples ?? 1, qQ = WQ.label);
      const PQ = wQ || (sQ ? null : this._createInternalTexture(QQ, WQ, !0, 5)),
        gQ = QQ.width || QQ,
        JQ = QQ.height || QQ,
        rQ = this._currentFramebuffer,
        IQ = this._gl,
        jQ = IQ.createFramebuffer();
      if (this._bindUnboundFramebuffer(jQ), XQ._depthStencilBuffer = this._setupFramebufferDepthAttachments(zQ, TQ, gQ, JQ), !PQ || PQ.is2DArray || PQ.is3D || IQ.framebufferTexture2D(IQ.FRAMEBUFFER, IQ.COLOR_ATTACHMENT0, IQ.TEXTURE_2D, PQ._hardwareTexture.underlyingResource, 0), this._bindUnboundFramebuffer(rQ), XQ.label = qQ ?? "RenderTargetWrapper", XQ._framebuffer = jQ, XQ._generateDepthBuffer = TQ, XQ._generateStencilBuffer = zQ, XQ.setTextures(PQ), wQ) {
        if (XQ._samples = wQ.samples, wQ.samples > 1) {
          const QQ = wQ._hardwareTexture.getMSAARenderBuffer(0);
          XQ._MSAAFramebuffer = IQ.createFramebuffer(), this._bindUnboundFramebuffer(XQ._MSAAFramebuffer), IQ.framebufferRenderbuffer(IQ.FRAMEBUFFER, IQ.COLOR_ATTACHMENT0, IQ.RENDERBUFFER, QQ), this._bindUnboundFramebuffer(null)
        }
      } else this.updateRenderTargetTextureSampleCount(XQ, FQ);
      return XQ
    }, TQ.ThinEngine.prototype._createDepthStencilTexture = function(QQ, WQ, XQ) {
      const TQ = this._gl,
        zQ = QQ.layers || 0,
        FQ = QQ.depth || 0;
      let PQ = TQ.TEXTURE_2D;
      0 !== zQ ? PQ = TQ.TEXTURE_2D_ARRAY : 0 !== FQ && (PQ = TQ.TEXTURE_3D);
      const gQ = new wQ.e(this, 12);
      if (gQ.label = WQ.label, !this._caps.depthTextureExtension) return qQ.b.Error("Depth texture is not supported by your browser or hardware."), gQ;
      const JQ = {
        bilinearFiltering: !1,
        comparisonFunction: 0,
        generateStencil: !1,
        ...WQ
      };
      if (this._bindTextureDirectly(PQ, gQ, !0), this._setupDepthStencilTexture(gQ, QQ, 0 !== JQ.comparisonFunction && JQ.bilinearFiltering, JQ.comparisonFunction, JQ.samples), void 0 !== JQ.depthTextureFormat) {
        if (15 !== JQ.depthTextureFormat && 16 !== JQ.depthTextureFormat && 17 !== JQ.depthTextureFormat && 13 !== JQ.depthTextureFormat && 14 !== JQ.depthTextureFormat && 18 !== JQ.depthTextureFormat) return qQ.b.Error(`Depth texture ${JQ.depthTextureFormat} format is not supported.`), gQ;
        gQ.format = JQ.depthTextureFormat
      } else gQ.format = JQ.generateStencil ? 13 : 16;
      const rQ = (0, sQ.c)(gQ.format),
        IQ = this._getWebGLTextureTypeFromDepthTextureFormat(gQ.format),
        jQ = rQ ? TQ.DEPTH_STENCIL : TQ.DEPTH_COMPONENT,
        BQ = this._getInternalFormatFromDepthTextureFormat(gQ.format, !0, rQ);
      return gQ.is2DArray ? TQ.texImage3D(PQ, 0, BQ, gQ.width, gQ.height, zQ, 0, jQ, IQ, null) : gQ.is3D ? TQ.texImage3D(PQ, 0, BQ, gQ.width, gQ.height, FQ, 0, jQ, IQ, null) : TQ.texImage2D(PQ, 0, BQ, gQ.width, gQ.height, 0, jQ, IQ, null), this._bindTextureDirectly(PQ, null), this._internalTexturesCache.push(gQ), XQ._depthStencilBuffer && (TQ.deleteRenderbuffer(XQ._depthStencilBuffer), XQ._depthStencilBuffer = null), this._bindUnboundFramebuffer(XQ._MSAAFramebuffer ?? XQ._framebuffer), XQ._generateStencilBuffer = rQ, XQ._depthStencilTextureWithStencil = rQ, XQ._depthStencilBuffer = this._setupFramebufferDepthAttachments(XQ._generateStencilBuffer, XQ._generateDepthBuffer, XQ.width, XQ.height, XQ.samples, gQ.format), this._bindUnboundFramebuffer(null), gQ
    }, TQ.ThinEngine.prototype.updateRenderTargetTextureSampleCount = function(QQ, WQ) {
      if (this.Mj < 2 || !QQ) return 1;
      if (QQ.samples === WQ) return WQ;
      const XQ = this._gl;
      WQ = Math.min(WQ, this.getCaps().maxMSAASamples), QQ._depthStencilBuffer && (XQ.deleteRenderbuffer(QQ._depthStencilBuffer), QQ._depthStencilBuffer = null), QQ._MSAAFramebuffer && (XQ.deleteFramebuffer(QQ._MSAAFramebuffer), QQ._MSAAFramebuffer = null);
      const wQ = QQ.texture?._hardwareTexture;
      if (wQ?.releaseMSAARenderBuffers(), QQ.texture && WQ > 1 && "function" === typeof XQ.renderbufferStorageMultisample) {
        const qQ = XQ.createFramebuffer();
        if (!qQ) throw new Error("Unable to create multi sampled framebuffer");
        QQ._MSAAFramebuffer = qQ, this._bindUnboundFramebuffer(QQ._MSAAFramebuffer);
        const TQ = this._createRenderBuffer(QQ.texture.width, QQ.texture.height, WQ, -1, this._getRGBABufferInternalSizedFormat(QQ.texture.type, QQ.texture.format, QQ.texture._useSRGBBuffer), XQ.COLOR_ATTACHMENT0, !1);
        if (!TQ) throw new Error("Unable to create multi sampled framebuffer");
        wQ?.addMSAARenderBuffer(TQ)
      }
      this._bindUnboundFramebuffer(QQ._MSAAFramebuffer ?? QQ._framebuffer), QQ.texture && (QQ.texture.samples = WQ), QQ._samples = WQ;
      const qQ = QQ._depthStencilTexture ? QQ._depthStencilTexture.format : void 0;
      return QQ._depthStencilBuffer = this._setupFramebufferDepthAttachments(QQ._generateStencilBuffer, QQ._generateDepthBuffer, QQ.width, QQ.height, WQ, qQ), this._bindUnboundFramebuffer(null), WQ
    }, TQ.ThinEngine.prototype._setupDepthStencilTexture = function(QQ, WQ, XQ, wQ) {
      let qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1;
      const TQ = WQ.width ?? WQ,
        zQ = WQ.height ?? WQ,
        sQ = WQ.layers || 0,
        FQ = WQ.depth || 0;
      QQ.baseWidth = TQ, QQ.baseHeight = zQ, QQ.width = TQ, QQ.height = zQ, QQ.is2DArray = sQ > 0, QQ.depth = sQ || FQ, QQ.isReady = !0, QQ.samples = qQ, QQ.generateMipMaps = !1, QQ.samplingMode = XQ ? 2 : 1, QQ.type = 0, QQ._comparisonFunction = wQ;
      const PQ = this._gl,
        gQ = this._getTextureTarget(QQ),
        JQ = this._getSamplingParameters(QQ.samplingMode, !1);
      PQ.texParameteri(gQ, PQ.TEXTURE_MAG_FILTER, JQ.mag), PQ.texParameteri(gQ, PQ.TEXTURE_MIN_FILTER, JQ.min), PQ.texParameteri(gQ, PQ.TEXTURE_WRAP_S, PQ.CLAMP_TO_EDGE), PQ.texParameteri(gQ, PQ.TEXTURE_WRAP_T, PQ.CLAMP_TO_EDGE), this.Mj > 1 && (0 === wQ ? (PQ.texParameteri(gQ, PQ.TEXTURE_COMPARE_FUNC, 515), PQ.texParameteri(gQ, PQ.TEXTURE_COMPARE_MODE, PQ.NONE)) : (PQ.texParameteri(gQ, PQ.TEXTURE_COMPARE_FUNC, wQ), PQ.texParameteri(gQ, PQ.TEXTURE_COMPARE_MODE, PQ.COMPARE_REF_TO_TEXTURE)))
    })
  },
  40089: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => wQ.d
    });
    var wQ = XQ(40095);
    (0, XQ(40233).e)();
    var qQ = XQ(40117);
    let TQ = !1;
    ! function() {
      if (TQ) return;
      TQ = !0;
      const QQ = new WeakMap,
        WQ = new WeakMap,
        XQ = new WeakMap,
        wQ = new WeakMap;
      qQ.ThinEngine.prototype.getAlphaToCoverage = function() {
        return QQ.get(this) ?? !1
      }, qQ.ThinEngine.prototype.setAlphaToCoverage = function(XQ) {
        (QQ.get(this) !== XQ || this._gl && WQ.get(this) !== this._gl) && (QQ.set(this, XQ), this._gl && (XQ ? this._gl.enable(this._gl.SAMPLE_ALPHA_TO_COVERAGE) : this._gl.disable(this._gl.SAMPLE_ALPHA_TO_COVERAGE), WQ.set(this, this._gl)))
      }, Object.defineProperty(qQ.ThinEngine.prototype, "currentSampleCount", {
        get: function() {
          return this._currentRenderTarget ? this._currentRenderTarget.samples : this._gl ? (wQ.get(this) !== this._gl && (XQ.set(this, this._gl.getContextAttributes()?.antialias ? Math.max(1, this._gl.getParameter(this._gl.SAMPLES)) : 1), wQ.set(this, this._gl)), XQ.get(this)) : 1
        },
        enumerable: !1,
        configurable: !0
      })
    }();
    var zQ = XQ(40103),
      sQ = XQ(38956),
      FQ = XQ(40206);
    let PQ = !1;
    ! function() {
      function QQ(QQ, WQ, XQ, wQ) {
        let qQ, TQ = 1;
        1 === wQ ? qQ = new Float32Array(WQ * XQ * 4) : 2 === wQ ? (qQ = new Uint16Array(WQ * XQ * 4), TQ = 15360) : qQ = 7 === wQ ? new Uint32Array(WQ * XQ * 4) : new Uint8Array(WQ * XQ * 4);
        for (let zQ = 0; zQ < WQ; zQ++)
          for (let wQ = 0; wQ < XQ; wQ++) {
            const XQ = 3 * (wQ * WQ + zQ),
              sQ = 4 * (wQ * WQ + zQ);
            qQ[sQ + 0] = QQ[XQ + 0], qQ[sQ + 1] = QQ[XQ + 1], qQ[sQ + 2] = QQ[XQ + 2], qQ[sQ + 3] = TQ
          }
        return qQ
      }

      function WQ(QQ) {
        return function(WQ, XQ, wQ, qQ, TQ, sQ, FQ, PQ) {
          let gQ = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
            JQ = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
          const rQ = QQ ? this._gl.TEXTURE_3D : this._gl.TEXTURE_2D_ARRAY,
            IQ = QQ ? 10 : 11,
            jQ = new zQ.e(this, IQ);
          jQ.baseWidth = XQ, jQ.baseHeight = wQ, jQ.baseDepth = qQ, jQ.width = XQ, jQ.height = wQ, jQ.depth = qQ, jQ.format = TQ, jQ.type = JQ, jQ.generateMipMaps = sQ, jQ.samplingMode = PQ, QQ ? jQ.is3D = !0 : jQ.is2DArray = !0, this._doNotHandleContextLost || (jQ._bufferView = WQ), QQ ? this.updateRawTexture3D(jQ, WQ, TQ, FQ, gQ, JQ) : this.updateRawTexture2DArray(jQ, WQ, TQ, FQ, gQ, JQ), this._bindTextureDirectly(rQ, jQ, !0);
          const BQ = this._getSamplingParameters(PQ, sQ);
          return this._gl.texParameteri(rQ, this._gl.TEXTURE_MAG_FILTER, BQ.mag), this._gl.texParameteri(rQ, this._gl.TEXTURE_MIN_FILTER, BQ.min), sQ && this._gl.generateMipmap(rQ), this._bindTextureDirectly(rQ, null), this._internalTexturesCache.push(jQ), jQ
        }
      }

      function XQ(QQ) {
        return function(WQ, XQ, wQ, qQ) {
          let TQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            zQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
          const sQ = QQ ? this._gl.TEXTURE_3D : this._gl.TEXTURE_2D_ARRAY,
            FQ = this._getWebGLTextureType(zQ),
            PQ = this._getInternalFormat(wQ),
            gQ = this._getRGBABufferInternalSizedFormat(zQ, wQ);
          this._bindTextureDirectly(sQ, WQ, !0), this._unpackFlipY(void 0 === qQ || !!qQ), this._doNotHandleContextLost || (WQ._bufferView = XQ, WQ.format = wQ, WQ.invertY = qQ, WQ._compression = TQ), WQ.width % 4 !== 0 && this._gl.pixelStorei(this._gl.UNPACK_ALIGNMENT, 1), TQ && XQ ? this._gl.compressedTexImage3D(sQ, 0, this.getCaps().s3tc[TQ], WQ.width, WQ.height, WQ.depth, 0, XQ) : this._gl.texImage3D(sQ, 0, gQ, WQ.width, WQ.height, WQ.depth, 0, PQ, FQ, XQ), WQ.generateMipMaps && this._gl.generateMipmap(sQ), this._bindTextureDirectly(sQ, null), WQ.isReady = !0
        }
      }
      PQ || (PQ = !0, qQ.ThinEngine.prototype.updateRawTexture = function(QQ, WQ, XQ, wQ) {
        let qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          TQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          zQ = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        if (!QQ) return;
        const sQ = this._getRGBABufferInternalSizedFormat(TQ, XQ, zQ),
          FQ = this._getInternalFormat(XQ),
          PQ = this._getWebGLTextureType(TQ);
        this._bindTextureDirectly(this._gl.TEXTURE_2D, QQ, !0), this._unpackFlipY(void 0 === wQ || !!wQ), this._doNotHandleContextLost || (QQ._bufferView = WQ, QQ.format = XQ, QQ.type = TQ, QQ.invertY = wQ, QQ._compression = qQ), QQ.width % 4 !== 0 && this._gl.pixelStorei(this._gl.UNPACK_ALIGNMENT, 1), qQ && WQ ? this._gl.compressedTexImage2D(this._gl.TEXTURE_2D, 0, this.getCaps().s3tc[qQ], QQ.width, QQ.height, 0, WQ) : this._gl.texImage2D(this._gl.TEXTURE_2D, 0, sQ, QQ.width, QQ.height, 0, FQ, PQ, WQ), QQ.generateMipMaps && this._gl.generateMipmap(this._gl.TEXTURE_2D), this._bindTextureDirectly(this._gl.TEXTURE_2D, null), QQ.isReady = !0
      }, qQ.ThinEngine.prototype.createRawTexture = function(QQ, WQ, XQ, wQ, qQ, TQ, sQ) {
        let FQ = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          PQ = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
          gQ = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const JQ = new zQ.e(this, 3);
        JQ.baseWidth = WQ, JQ.baseHeight = XQ, JQ.width = WQ, JQ.height = XQ, JQ.format = wQ, JQ.generateMipMaps = qQ, JQ.samplingMode = sQ, JQ.invertY = TQ, JQ._compression = FQ, JQ.type = PQ, JQ._useSRGBBuffer = this._getUseSRGBBuffer(gQ, !qQ), this._doNotHandleContextLost || (JQ._bufferView = QQ), this.updateRawTexture(JQ, QQ, wQ, TQ, FQ, PQ, JQ._useSRGBBuffer), this._bindTextureDirectly(this._gl.TEXTURE_2D, JQ, !0);
        const rQ = this._getSamplingParameters(sQ, qQ);
        return this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MAG_FILTER, rQ.mag), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MIN_FILTER, rQ.min), qQ && this._gl.generateMipmap(this._gl.TEXTURE_2D), this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._internalTexturesCache.push(JQ), JQ
      }, qQ.ThinEngine.prototype.createRawCubeTexture = function(QQ, WQ, XQ, wQ, qQ, TQ, PQ) {
        let gQ = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null;
        const JQ = this._gl,
          rQ = new zQ.e(this, 8);
        rQ.isCube = !0, rQ.format = XQ, rQ.type = wQ, this._doNotHandleContextLost || (rQ._bufferViewArray = QQ);
        const IQ = this._getWebGLTextureType(wQ);
        let jQ = this._getInternalFormat(XQ);
        jQ === JQ.RGB && (jQ = JQ.RGBA), IQ !== JQ.FLOAT || this._caps.textureFloatLinearFiltering ? IQ !== this._gl.HALF_FLOAT_OES || this._caps.textureHalfFloatLinearFiltering ? IQ !== JQ.FLOAT || this._caps.textureFloatRender ? IQ !== JQ.HALF_FLOAT || this._caps.colorBufferFloat || (qQ = !1, sQ.b.Warn("Render to half float textures is not supported. Mipmap generation forced to false.")) : (qQ = !1, sQ.b.Warn("Render to float textures is not supported. Mipmap generation forced to false.")) : (qQ = !1, PQ = 1, sQ.b.Warn("Half float texture filtering is not supported. Mipmap generation and sampling mode are forced to false and TEXTURE_NEAREST_SAMPLINGMODE, respectively.")) : (qQ = !1, PQ = 1, sQ.b.Warn("Float texture filtering is not supported. Mipmap generation and sampling mode are forced to false and TEXTURE_NEAREST_SAMPLINGMODE, respectively."));
        const BQ = WQ,
          yQ = BQ;
        rQ.width = BQ, rQ.height = yQ, rQ.invertY = TQ, rQ._compression = gQ;
        if (!this.needPOTTextures || (0, FQ.k)(rQ.width) && (0, FQ.k)(rQ.height) || (qQ = !1), QQ) this.updateRawCubeTexture(rQ, QQ, XQ, wQ, TQ, gQ);
        else {
          const QQ = this._getRGBABufferInternalSizedFormat(wQ),
            WQ = 0;
          this._bindTextureDirectly(JQ.TEXTURE_CUBE_MAP, rQ, !0);
          for (let XQ = 0; XQ < 6; XQ++) gQ ? JQ.compressedTexImage2D(JQ.TEXTURE_CUBE_MAP_POSITIVE_X + XQ, WQ, this.getCaps().s3tc[gQ], rQ.width, rQ.height, 0, void 0) : JQ.texImage2D(JQ.TEXTURE_CUBE_MAP_POSITIVE_X + XQ, WQ, QQ, rQ.width, rQ.height, 0, jQ, IQ, null);
          this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null)
        }
        this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, rQ, !0), QQ && qQ && this._gl.generateMipmap(this._gl.TEXTURE_CUBE_MAP);
        const VQ = this._getSamplingParameters(PQ, qQ);
        return JQ.texParameteri(JQ.TEXTURE_CUBE_MAP, JQ.TEXTURE_MAG_FILTER, VQ.mag), JQ.texParameteri(JQ.TEXTURE_CUBE_MAP, JQ.TEXTURE_MIN_FILTER, VQ.min), JQ.texParameteri(JQ.TEXTURE_CUBE_MAP, JQ.TEXTURE_WRAP_S, JQ.CLAMP_TO_EDGE), JQ.texParameteri(JQ.TEXTURE_CUBE_MAP, JQ.TEXTURE_WRAP_T, JQ.CLAMP_TO_EDGE), this._bindTextureDirectly(JQ.TEXTURE_CUBE_MAP, null), rQ.generateMipMaps = qQ, rQ.samplingMode = PQ, rQ.isReady = !0, rQ
      }, qQ.ThinEngine.prototype.updateRawCubeTexture = function(WQ, XQ, wQ, qQ, TQ) {
        let zQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          sQ = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        WQ._bufferViewArray = XQ, WQ.format = wQ, WQ.type = qQ, WQ.invertY = TQ, WQ._compression = zQ;
        const PQ = this._gl,
          gQ = this._getWebGLTextureType(qQ);
        let JQ = this._getInternalFormat(wQ);
        const rQ = this._getRGBABufferInternalSizedFormat(qQ);
        let IQ = !1;
        JQ === PQ.RGB && (JQ = PQ.RGBA, IQ = !0), this._bindTextureDirectly(PQ.TEXTURE_CUBE_MAP, WQ, !0), this._unpackFlipY(void 0 === TQ || !!TQ), WQ.width % 4 !== 0 && PQ.pixelStorei(PQ.UNPACK_ALIGNMENT, 1);
        for (let FQ = 0; FQ < 6; FQ++) {
          let wQ = XQ[FQ];
          zQ ? PQ.compressedTexImage2D(PQ.TEXTURE_CUBE_MAP_POSITIVE_X + FQ, sQ, this.getCaps().s3tc[zQ], WQ.width, WQ.height, 0, wQ) : (IQ && (wQ = QQ(wQ, WQ.width, WQ.height, qQ)), PQ.texImage2D(PQ.TEXTURE_CUBE_MAP_POSITIVE_X + FQ, sQ, rQ, WQ.width, WQ.height, 0, JQ, gQ, wQ))
        }(!this.needPOTTextures || (0, FQ.k)(WQ.width) && (0, FQ.k)(WQ.height)) && WQ.generateMipMaps && 0 === sQ && this._gl.generateMipmap(this._gl.TEXTURE_CUBE_MAP), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), WQ.isReady = !0
      }, qQ.ThinEngine.prototype.createRawCubeTextureFromUrl = function(WQ, XQ, wQ, qQ, TQ, zQ, sQ, FQ) {
        let PQ = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          gQ = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          JQ = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 3,
          rQ = arguments.length > 11 && void 0 !== arguments[11] && arguments[11];
        const IQ = this._gl,
          jQ = this.createRawCubeTexture(null, wQ, qQ, TQ, !zQ, rQ, JQ, null);
        XQ?.addPendingData(jQ), jQ.url = WQ, jQ.isReady = !1, this._internalTexturesCache.push(jQ);
        const BQ = (QQ, WQ) => {
            XQ?.removePendingData(jQ), gQ && gQ(QQ ? QQ.status + " " + QQ.statusText : "Failed to parse texture data", WQ)
          },
          yQ = async WQ => {
            if (!jQ._hardwareTexture) return;
            const wQ = sQ(WQ);
            if (!wQ) return;
            const zQ = wQ instanceof Promise ? await wQ : wQ,
              gQ = jQ.width;
            if (FQ) {
              const WQ = this._getWebGLTextureType(TQ);
              let XQ = this._getInternalFormat(qQ);
              const wQ = this._getRGBABufferInternalSizedFormat(TQ);
              let sQ = !1;
              XQ === IQ.RGB && (XQ = IQ.RGBA, sQ = !0), this._bindTextureDirectly(IQ.TEXTURE_CUBE_MAP, jQ, !0), this._unpackFlipY(!1);
              const PQ = FQ(zQ);
              for (let qQ = 0; qQ < PQ.length; qQ++) {
                const zQ = gQ >> qQ;
                for (let FQ = 0; FQ < 6; FQ++) {
                  let gQ = PQ[qQ][FQ];
                  sQ && (gQ = QQ(gQ, zQ, zQ, TQ)), IQ.texImage2D(FQ, qQ, wQ, zQ, zQ, 0, XQ, WQ, gQ)
                }
              }
              this._bindTextureDirectly(IQ.TEXTURE_CUBE_MAP, null)
            } else this.updateRawCubeTexture(jQ, zQ, qQ, TQ, rQ);
            jQ.isReady = !0, XQ?.removePendingData(jQ), jQ.onLoadedObservable.notifyObservers(jQ), jQ.onLoadedObservable.clear(), PQ && PQ()
          };
        return this._loadFile(WQ, (QQ => {
          yQ(QQ).catch((QQ => {
            BQ(void 0, QQ)
          }))
        }), void 0, XQ?.offlineProvider, !0, BQ), jQ
      }, qQ.ThinEngine.prototype.createRawTexture2DArray = WQ(!1), qQ.ThinEngine.prototype.createRawTexture3D = WQ(!0), qQ.ThinEngine.prototype.updateRawTexture2DArray = XQ(!1), qQ.ThinEngine.prototype.updateRawTexture3D = XQ(!0))
    }();
    var gQ = XQ(40150);
    let JQ = !1;
    JQ || (JQ = !0, qQ.ThinEngine.prototype._readTexturePixelsSync = function(QQ, WQ, XQ) {
      let wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1,
        qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        TQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        zQ = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
        sQ = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        FQ = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
        PQ = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
      const JQ = this._gl;
      if (!JQ) throw new Error("Engine does not have gl rendering context.");
      if (!this._dummyFramebuffer) {
        const QQ = JQ.createFramebuffer();
        if (!QQ) throw new Error("Unable to create dummy framebuffer");
        this._dummyFramebuffer = QQ
      }
      JQ.bindFramebuffer(JQ.FRAMEBUFFER, this._dummyFramebuffer), wQ > -1 && (QQ.is2DArray || QQ.is3D) ? JQ.framebufferTextureLayer(JQ.FRAMEBUFFER, JQ.COLOR_ATTACHMENT0, QQ._hardwareTexture?.underlyingResource, qQ, wQ) : wQ > -1 ? JQ.framebufferTexture2D(JQ.FRAMEBUFFER, JQ.COLOR_ATTACHMENT0, JQ.TEXTURE_CUBE_MAP_POSITIVE_X + wQ, QQ._hardwareTexture?.underlyingResource, qQ) : JQ.framebufferTexture2D(JQ.FRAMEBUFFER, JQ.COLOR_ATTACHMENT0, JQ.TEXTURE_2D, QQ._hardwareTexture?.underlyingResource, qQ);
      let rQ = void 0 !== QQ.type ? this._getWebGLTextureType(QQ.type) : JQ.UNSIGNED_BYTE;
      return sQ ? TQ || (TQ = (0, gQ.m)(QQ.type, 4 * WQ * XQ)) : rQ === JQ.UNSIGNED_BYTE ? (TQ || (TQ = new Uint8Array(4 * WQ * XQ)), rQ = JQ.UNSIGNED_BYTE) : (TQ || (TQ = new Float32Array(4 * WQ * XQ)), rQ = JQ.FLOAT), zQ && this.flushFramebuffer(), JQ.readPixels(FQ, PQ, WQ, XQ, JQ.RGBA, rQ, TQ), JQ.bindFramebuffer(JQ.FRAMEBUFFER, this._currentFramebuffer), TQ
    }, qQ.ThinEngine.prototype._readTexturePixels = function(QQ, WQ, XQ) {
      let wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1,
        qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        TQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        zQ = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
        sQ = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        FQ = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
        PQ = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
      return Promise.resolve(this._readTexturePixelsSync(QQ, WQ, XQ, wQ, qQ, TQ, zQ, sQ, FQ, PQ))
    }), (0, XQ(40240).b)();
    let rQ = !1;
    rQ || (rQ = !0, qQ.ThinEngine.prototype._createDepthStencilCubeTexture = function(QQ, WQ) {
      const XQ = new zQ.e(this, 12);
      if (XQ.isCube = !0, 1 === this.Mj) return sQ.b.Error("Depth cube texture is not supported by WebGL 1."), XQ;
      const wQ = {
          bilinearFiltering: !1,
          comparisonFunction: 0,
          generateStencil: !1,
          ...WQ
        },
        qQ = this._gl;
      this._bindTextureDirectly(qQ.TEXTURE_CUBE_MAP, XQ, !0), this._setupDepthStencilTexture(XQ, QQ, wQ.bilinearFiltering, wQ.comparisonFunction);
      for (let TQ = 0; TQ < 6; TQ++) wQ.generateStencil ? qQ.texImage2D(qQ.TEXTURE_CUBE_MAP_POSITIVE_X + TQ, 0, qQ.DEPTH24_STENCIL8, QQ, QQ, 0, qQ.DEPTH_STENCIL, qQ.UNSIGNED_INT_24_8, null) : qQ.texImage2D(qQ.TEXTURE_CUBE_MAP_POSITIVE_X + TQ, 0, qQ.DEPTH_COMPONENT24, QQ, QQ, 0, qQ.DEPTH_COMPONENT, qQ.UNSIGNED_INT, null);
      return this._bindTextureDirectly(qQ.TEXTURE_CUBE_MAP, null), this._internalTexturesCache.push(XQ), XQ
    }, qQ.ThinEngine.prototype._setCubeMapTextureParams = function(QQ, WQ, XQ) {
      const wQ = this._gl;
      wQ.texParameteri(wQ.TEXTURE_CUBE_MAP, wQ.TEXTURE_MAG_FILTER, wQ.LINEAR), wQ.texParameteri(wQ.TEXTURE_CUBE_MAP, wQ.TEXTURE_MIN_FILTER, WQ ? wQ.LINEAR_MIPMAP_LINEAR : wQ.LINEAR), wQ.texParameteri(wQ.TEXTURE_CUBE_MAP, wQ.TEXTURE_WRAP_S, wQ.CLAMP_TO_EDGE), wQ.texParameteri(wQ.TEXTURE_CUBE_MAP, wQ.TEXTURE_WRAP_T, wQ.CLAMP_TO_EDGE), QQ.samplingMode = WQ ? 3 : 2, WQ && this.getCaps().textureMaxLevel && void 0 !== XQ && XQ > 0 && (wQ.texParameteri(wQ.TEXTURE_CUBE_MAP, wQ.TEXTURE_MAX_LEVEL, XQ), QQ._maxLodLevel = XQ), this._bindTextureDirectly(wQ.TEXTURE_CUBE_MAP, null)
    }, qQ.ThinEngine.prototype.createCubeTexture = function(QQ, WQ, XQ, wQ) {
      let qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        TQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        zQ = arguments.length > 6 ? arguments[6] : void 0,
        PQ = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        gQ = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        JQ = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
        rQ = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
        IQ = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
        jQ = arguments.length > 13 && void 0 !== arguments[13] && arguments[13],
        BQ = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : null;
      const yQ = this._gl;
      return this.createCubeTextureBase(QQ, WQ, XQ, !!wQ, qQ, TQ, zQ, PQ, gQ, JQ, rQ, IQ, (QQ => this._bindTextureDirectly(yQ.TEXTURE_CUBE_MAP, QQ, !0)), ((QQ, WQ) => {
        const XQ = this.needPOTTextures ? (0, FQ.h)(WQ[0].width, this._caps.maxCubemapTextureSize) : WQ[0].width,
          TQ = XQ,
          PQ = [yQ.TEXTURE_CUBE_MAP_POSITIVE_X, yQ.TEXTURE_CUBE_MAP_POSITIVE_Y, yQ.TEXTURE_CUBE_MAP_POSITIVE_Z, yQ.TEXTURE_CUBE_MAP_NEGATIVE_X, yQ.TEXTURE_CUBE_MAP_NEGATIVE_Y, yQ.TEXTURE_CUBE_MAP_NEGATIVE_Z];
        this._bindTextureDirectly(yQ.TEXTURE_CUBE_MAP, QQ, !0), this._unpackFlipY(!1);
        const gQ = zQ ? this._getInternalFormat(zQ, QQ._useSRGBBuffer) : QQ._useSRGBBuffer ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : yQ.RGBA;
        let JQ = zQ ? this._getInternalFormat(zQ) : yQ.RGBA;
        QQ._useSRGBBuffer && 1 === this.Mj && (JQ = gQ);
        for (let wQ = 0; wQ < PQ.length; wQ++)
          if (WQ[wQ].width !== XQ || WQ[wQ].height !== TQ) {
            if (this._prepareWorkingCanvas(), !this._workingCanvas || !this._workingContext) return void sQ.b.Warn("Cannot create canvas to resize texture.");
            this._workingCanvas.width = XQ, this._workingCanvas.height = TQ, this._workingContext.drawImage(WQ[wQ], 0, 0, WQ[wQ].width, WQ[wQ].height, 0, 0, XQ, TQ), yQ.texImage2D(PQ[wQ], 0, gQ, JQ, yQ.UNSIGNED_BYTE, this._workingCanvas)
          } else yQ.texImage2D(PQ[wQ], 0, gQ, JQ, yQ.UNSIGNED_BYTE, WQ[wQ]);
        wQ || yQ.generateMipmap(yQ.TEXTURE_CUBE_MAP), this._setCubeMapTextureParams(QQ, !wQ), QQ.width = XQ, QQ.height = TQ, QQ.isReady = !0, zQ && (QQ.format = zQ), QQ.onLoadedObservable.notifyObservers(QQ), QQ.onLoadedObservable.clear(), qQ && qQ()
      }), !!jQ, BQ)
    }, qQ.ThinEngine.prototype.generateMipMapsForCubemap = function(QQ) {
      let WQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (QQ.generateMipMaps) {
        const XQ = this._gl;
        this._bindTextureDirectly(XQ.TEXTURE_CUBE_MAP, QQ, !0), XQ.generateMipmap(XQ.TEXTURE_CUBE_MAP), WQ && this._bindTextureDirectly(XQ.TEXTURE_CUBE_MAP, null)
      }
    });
    XQ(40245);
    let IQ = !1;
    IQ || (IQ = !0, qQ.ThinEngine.prototype.setDepthStencilTexture = function(QQ, WQ, XQ, wQ) {
      void 0 !== QQ && (WQ && (this._boundUniforms[QQ] = WQ), XQ && XQ.depthStencilTexture ? this._setTexture(QQ, XQ, !1, !0, wQ) : this._setTexture(QQ, null, void 0, void 0, wQ))
    });
    let jQ = !1;
    jQ || (jQ = !0, qQ.ThinEngine.prototype.createRenderTargetCubeTexture = function(QQ, WQ) {
      const XQ = this._createHardwareRenderTargetWrapper(!1, !0, QQ),
        wQ = {
          generateMipMaps: !0,
          generateDepthBuffer: !0,
          generateStencilBuffer: !1,
          type: 0,
          samplingMode: 3,
          format: 5,
          ...WQ
        };
      wQ.generateStencilBuffer = wQ.generateDepthBuffer && wQ.generateStencilBuffer, (1 !== wQ.type || this._caps.textureFloatLinearFiltering) && (2 !== wQ.type || this._caps.textureHalfFloatLinearFiltering) || (wQ.samplingMode = 1);
      const qQ = this._gl,
        TQ = new zQ.e(this, 5);
      this._bindTextureDirectly(qQ.TEXTURE_CUBE_MAP, TQ, !0);
      const FQ = this._getSamplingParameters(wQ.samplingMode, wQ.generateMipMaps);
      1 !== wQ.type || this._caps.textureFloat || (wQ.type = 0, sQ.b.Warn("Float textures are not supported. Cube render target forced to TEXTURETYPE_UNESIGNED_BYTE type")), qQ.texParameteri(qQ.TEXTURE_CUBE_MAP, qQ.TEXTURE_MAG_FILTER, FQ.mag), qQ.texParameteri(qQ.TEXTURE_CUBE_MAP, qQ.TEXTURE_MIN_FILTER, FQ.min), qQ.texParameteri(qQ.TEXTURE_CUBE_MAP, qQ.TEXTURE_WRAP_S, qQ.CLAMP_TO_EDGE), qQ.texParameteri(qQ.TEXTURE_CUBE_MAP, qQ.TEXTURE_WRAP_T, qQ.CLAMP_TO_EDGE);
      for (let zQ = 0; zQ < 6; zQ++) qQ.texImage2D(qQ.TEXTURE_CUBE_MAP_POSITIVE_X + zQ, 0, this._getRGBABufferInternalSizedFormat(wQ.type, wQ.format), QQ, QQ, 0, this._getInternalFormat(wQ.format), this._getWebGLTextureType(wQ.type), null);
      const PQ = qQ.createFramebuffer();
      return this._bindUnboundFramebuffer(PQ), XQ._depthStencilBuffer = this._setupFramebufferDepthAttachments(wQ.generateStencilBuffer, wQ.generateDepthBuffer, QQ, QQ), wQ.generateMipMaps && qQ.generateMipmap(qQ.TEXTURE_CUBE_MAP), this._bindTextureDirectly(qQ.TEXTURE_CUBE_MAP, null), this._bindUnboundFramebuffer(null), XQ._framebuffer = PQ, XQ._generateDepthBuffer = wQ.generateDepthBuffer, XQ._generateStencilBuffer = wQ.generateStencilBuffer, TQ.width = QQ, TQ.height = QQ, TQ.isReady = !0, TQ.isCube = !0, TQ.samples = 1, TQ.generateMipMaps = wQ.generateMipMaps, TQ.samplingMode = wQ.samplingMode, TQ.type = wQ.type, TQ.format = wQ.format, this._internalTexturesCache.push(TQ), XQ.setTextures(TQ), XQ
    });
    var BQ = XQ(40250),
      yQ = XQ(40253);
    let VQ = !1;
    VQ || (VQ = !0, qQ.ThinEngine.prototype.createPrefilteredCubeTexture = function(QQ, WQ, wQ, qQ) {
      let TQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        FQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        PQ = arguments.length > 6 ? arguments[6] : void 0,
        gQ = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        JQ = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
        rQ = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null;
      return this.createCubeTexture(QQ, WQ, null, !1, (async QQ => {
        if (!QQ) return void(TQ && TQ(null));
        const FQ = QQ.texture;
        if (JQ ? QQ.info.sphericalPolynomial && (FQ._sphericalPolynomial = QQ.info.sphericalPolynomial) : FQ._sphericalPolynomial = FQ._sphericalPolynomial ?? new BQ.e, FQ._source = 9, this.getCaps().textureLOD) return void(TQ && TQ(FQ));
        const PQ = this._gl,
          gQ = QQ.width;
        if (!gQ) return;
        const {
          DDSTools: rQ
        } = await XQ.e(315).then((() => XQ(42012))), IQ = [];
        for (let XQ = 0; XQ < 3; XQ++) {
          const TQ = 1 - XQ / 2,
            JQ = qQ,
            jQ = Math.log2(gQ) * wQ + qQ,
            BQ = JQ + (jQ - JQ) * TQ,
            VQ = Math.round(Math.min(Math.max(BQ, 0), jQ)),
            DQ = new zQ.e(this, 2);
          if (DQ.type = FQ.type, DQ.format = FQ.format, DQ.width = Math.pow(2, Math.max(Math.log2(gQ) - VQ, 0)), DQ.height = DQ.width, DQ.isCube = !0, DQ._cachedWrapU = 0, DQ._cachedWrapV = 0, this._bindTextureDirectly(PQ.TEXTURE_CUBE_MAP, DQ, !0), DQ.samplingMode = 2, PQ.texParameteri(PQ.TEXTURE_CUBE_MAP, PQ.TEXTURE_MAG_FILTER, PQ.LINEAR), PQ.texParameteri(PQ.TEXTURE_CUBE_MAP, PQ.TEXTURE_MIN_FILTER, PQ.LINEAR), PQ.texParameteri(PQ.TEXTURE_CUBE_MAP, PQ.TEXTURE_WRAP_S, PQ.CLAMP_TO_EDGE), PQ.texParameteri(PQ.TEXTURE_CUBE_MAP, PQ.TEXTURE_WRAP_T, PQ.CLAMP_TO_EDGE), QQ.isDDS) {
            const WQ = QQ.info,
              XQ = QQ.data;
            this._unpackFlipY(WQ.isCompressed), rQ.UploadDDSLevels(this, DQ, XQ, WQ, !0, 6, VQ)
          } else sQ.b.Warn("DDS is the only prefiltered cube map supported so far.");
          this._bindTextureDirectly(PQ.TEXTURE_CUBE_MAP, null);
          const pQ = new yQ.c(WQ);
          pQ._isCube = !0, pQ._texture = DQ, DQ.isReady = !0, IQ.push(pQ)
        }
        FQ._lodTextureHigh = IQ[2], FQ._lodTextureMid = IQ[1], FQ._lodTextureLow = IQ[0], TQ && TQ(FQ)
      }), FQ, PQ, gQ, JQ, wQ, qQ, null, void 0, !1, rQ)
    });
    var DQ = XQ(40193);
    let pQ = !1;
    pQ || (pQ = !0, qQ.ThinEngine.prototype.createUniformBuffer = function(QQ, WQ) {
      const XQ = this._gl.createBuffer();
      if (!XQ) throw new Error("Unable to create uniform buffer");
      const wQ = new DQ.c(XQ);
      return this.bindUniformBuffer(wQ), QQ instanceof Float32Array ? this._gl.bufferData(this._gl.UNIFORM_BUFFER, QQ, this._gl.STATIC_DRAW) : this._gl.bufferData(this._gl.UNIFORM_BUFFER, new Float32Array(QQ), this._gl.STATIC_DRAW), this.bindUniformBuffer(null), wQ.references = 1, wQ
    }, qQ.ThinEngine.prototype.createDynamicUniformBuffer = function(QQ, WQ) {
      const XQ = this._gl.createBuffer();
      if (!XQ) throw new Error("Unable to create dynamic uniform buffer");
      const wQ = new DQ.c(XQ);
      return this.bindUniformBuffer(wQ), QQ instanceof Float32Array ? this._gl.bufferData(this._gl.UNIFORM_BUFFER, QQ, this._gl.DYNAMIC_DRAW) : this._gl.bufferData(this._gl.UNIFORM_BUFFER, new Float32Array(QQ), this._gl.DYNAMIC_DRAW), this.bindUniformBuffer(null), wQ.references = 1, wQ
    }, qQ.ThinEngine.prototype.updateUniformBuffer = function(QQ, WQ, XQ, wQ) {
      this.bindUniformBuffer(QQ), void 0 === XQ && (XQ = 0), void 0 === wQ ? WQ instanceof Float32Array ? this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, XQ, WQ) : this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, XQ, new Float32Array(WQ)) : WQ instanceof Float32Array ? this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, 0, WQ.subarray(XQ, XQ + wQ)) : this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, 0, new Float32Array(WQ).subarray(XQ, XQ + wQ)), this.bindUniformBuffer(null)
    }, qQ.ThinEngine.prototype.bindUniformBuffer = function(QQ) {
      this._gl.bindBuffer(this._gl.UNIFORM_BUFFER, QQ ? QQ.underlyingResource : null)
    }, qQ.ThinEngine.prototype.bindUniformBufferBase = function(QQ, WQ, XQ) {
      this._gl.bindBufferBase(this._gl.UNIFORM_BUFFER, WQ, QQ ? QQ.underlyingResource : null)
    }, qQ.ThinEngine.prototype.bindUniformBlock = function(QQ, WQ, XQ) {
      const wQ = QQ.program,
        qQ = this._gl.getUniformBlockIndex(wQ, WQ);
      4294967295 !== qQ && this._gl.uniformBlockBinding(wQ, qQ, XQ)
    });
    var GQ = XQ(40142),
      UQ = XQ(40170);
    let bQ = !1;
    bQ || (bQ = !0, UQ.d.prototype.displayLoadingUI = function() {
      if (!(0, GQ.l)()) return;
      const QQ = this.loadingScreen;
      QQ && QQ.displayLoadingUI()
    }, UQ.d.prototype.hideLoadingUI = function() {
      if (!(0, GQ.l)()) return;
      const QQ = this._loadingScreen;
      QQ && QQ.hideLoadingUI()
    }, Object.defineProperty(UQ.d.prototype, "loadingScreen", {
      get: function() {
        return !this._loadingScreen && this._renderingCanvas && (this._loadingScreen = UQ.d.DefaultLoadingScreenFactory(this._renderingCanvas)), this._loadingScreen
      },
      set: function(QQ) {
        this._loadingScreen = QQ
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(UQ.d.prototype, "loadingUIText", {
      set: function(QQ) {
        this.loadingScreen.loadingUIText = QQ
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(UQ.d.prototype, "loadingUIBackgroundColor", {
      set: function(QQ) {
        this.loadingScreen.loadingUIBackgroundColor = QQ
      },
      enumerable: !0,
      configurable: !0
    })), (0, XQ(40228).d)();
    let vQ = !1;
    vQ || (vQ = !0, UQ.d.prototype.getInputElement = function() {
      return this._renderingCanvas
    }, UQ.d.prototype.getDepthFunction = function() {
      return this._depthCullingState.depthFunc
    }, UQ.d.prototype.setDepthFunction = function(QQ) {
      this._depthCullingState.depthFunc = QQ
    }, UQ.d.prototype.setDepthFunctionToGreater = function() {
      this.setDepthFunction(516)
    }, UQ.d.prototype.setDepthFunctionToGreaterOrEqual = function() {
      this.setDepthFunction(518)
    }, UQ.d.prototype.setDepthFunctionToLess = function() {
      this.setDepthFunction(513)
    }, UQ.d.prototype.setDepthFunctionToLessOrEqual = function() {
      this.setDepthFunction(515)
    }, UQ.d.prototype.getDepthWrite = function() {
      return this._depthCullingState.depthMask
    }, UQ.d.prototype.setDepthWrite = function(QQ) {
      this._depthCullingState.depthMask = QQ
    }, UQ.d.prototype.setAlphaConstants = function(QQ, WQ, XQ, wQ) {
      this._alphaState.setAlphaBlendConstants(QQ, WQ, XQ, wQ)
    }, UQ.d.prototype.getAlphaMode = function() {
      let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
      return this._alphaMode[QQ]
    }, UQ.d.prototype.getAlphaEquation = function() {
      let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
      return this._alphaEquation[QQ]
    });
    let dQ = !1;
    dQ || (dQ = !0, UQ.d.prototype.getStencilBuffer = function() {
      return this._stencilState.stencilTest
    }, UQ.d.prototype.setStencilBuffer = function(QQ) {
      this._stencilState.stencilTest = QQ
    }, UQ.d.prototype.getStencilMask = function() {
      return this._stencilState.stencilMask
    }, UQ.d.prototype.setStencilMask = function(QQ) {
      this._stencilState.stencilMask = QQ
    }, UQ.d.prototype.getStencilFunction = function() {
      return this._stencilState.stencilFunc
    }, UQ.d.prototype.getStencilBackFunction = function() {
      return this._stencilState.stencilBackFunc
    }, UQ.d.prototype.getStencilFunctionReference = function() {
      return this._stencilState.stencilFuncRef
    }, UQ.d.prototype.getStencilFunctionMask = function() {
      return this._stencilState.stencilFuncMask
    }, UQ.d.prototype.setStencilFunction = function(QQ) {
      this._stencilState.stencilFunc = QQ
    }, UQ.d.prototype.setStencilBackFunction = function(QQ) {
      this._stencilState.stencilBackFunc = QQ
    }, UQ.d.prototype.setStencilFunctionReference = function(QQ) {
      this._stencilState.stencilFuncRef = QQ
    }, UQ.d.prototype.setStencilFunctionMask = function(QQ) {
      this._stencilState.stencilFuncMask = QQ
    }, UQ.d.prototype.getStencilOperationFail = function() {
      return this._stencilState.stencilOpStencilFail
    }, UQ.d.prototype.getStencilBackOperationFail = function() {
      return this._stencilState.stencilBackOpStencilFail
    }, UQ.d.prototype.getStencilOperationDepthFail = function() {
      return this._stencilState.stencilOpDepthFail
    }, UQ.d.prototype.getStencilBackOperationDepthFail = function() {
      return this._stencilState.stencilBackOpDepthFail
    }, UQ.d.prototype.getStencilOperationPass = function() {
      return this._stencilState.stencilOpStencilDepthPass
    }, UQ.d.prototype.getStencilBackOperationPass = function() {
      return this._stencilState.stencilBackOpStencilDepthPass
    }, UQ.d.prototype.setStencilOperationFail = function(QQ) {
      this._stencilState.stencilOpStencilFail = QQ
    }, UQ.d.prototype.setStencilBackOperationFail = function(QQ) {
      this._stencilState.stencilBackOpStencilFail = QQ
    }, UQ.d.prototype.setStencilOperationDepthFail = function(QQ) {
      this._stencilState.stencilOpDepthFail = QQ
    }, UQ.d.prototype.setStencilBackOperationDepthFail = function(QQ) {
      this._stencilState.stencilBackOpDepthFail = QQ
    }, UQ.d.prototype.setStencilOperationPass = function(QQ) {
      this._stencilState.stencilOpStencilDepthPass = QQ
    }, UQ.d.prototype.setStencilBackOperationPass = function(QQ) {
      this._stencilState.stencilBackOpStencilDepthPass = QQ
    }, UQ.d.prototype.cacheStencilState = function() {
      this._cachedStencilBuffer = this.getStencilBuffer(), this._cachedStencilFunction = this.getStencilFunction(), this._cachedStencilMask = this.getStencilMask(), this._cachedStencilOperationPass = this.getStencilOperationPass(), this._cachedStencilOperationFail = this.getStencilOperationFail(), this._cachedStencilOperationDepthFail = this.getStencilOperationDepthFail(), this._cachedStencilReference = this.getStencilFunctionReference()
    }, UQ.d.prototype.restoreStencilState = function() {
      this.setStencilFunction(this._cachedStencilFunction), this.setStencilMask(this._cachedStencilMask), this.setStencilBuffer(this._cachedStencilBuffer), this.setStencilOperationPass(this._cachedStencilOperationPass), this.setStencilOperationFail(this._cachedStencilOperationFail), this.setStencilOperationDepthFail(this._cachedStencilOperationDepthFail), this.setStencilFunctionReference(this._cachedStencilReference)
    });
    XQ(40293);
    let HQ = !1;
    HQ || (HQ = !0, UQ.d.prototype.createDepthStencilTexture = function(QQ, WQ, XQ) {
      if (WQ.isCube) {
        const XQ = QQ.width || QQ;
        return this._createDepthStencilCubeTexture(XQ, WQ)
      }
      return this._createDepthStencilTexture(QQ, WQ, XQ)
    });
    XQ(40300), XQ(40342);
    let aQ = !1;
    aQ || (aQ = !0, qQ.ThinEngine.prototype.enableScissor = function(QQ, WQ, XQ, wQ) {
      const qQ = this._gl;
      qQ.enable(qQ.SCISSOR_TEST), qQ.scissor(QQ, WQ, XQ, wQ)
    }, qQ.ThinEngine.prototype.disableScissor = function() {
      const QQ = this._gl;
      QQ.disable(QQ.SCISSOR_TEST)
    })
  },
  40095: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => UQ
    });
    var wQ = XQ(40103),
      qQ = XQ(37392),
      TQ = XQ(40117),
      zQ = XQ(40178);
    class sQ {
      constructor() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 30;
        this._enabled = !0, this._rollingFrameTime = new FQ(QQ)
      }
      sampleFrame() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : zQ.e.Now;
        if (this._enabled) {
          if (null != this._lastFrameTimeMs) {
            const WQ = QQ - this._lastFrameTimeMs;
            this._rollingFrameTime.add(WQ)
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
    class FQ {
      constructor(QQ) {
        this._samples = new Array(QQ), this.reset()
      }
      add(QQ) {
        let WQ;
        if (this.isSaturated()) {
          const QQ = this._samples[this._pos];
          WQ = QQ - this.average, this.average -= WQ / (this._sampleCount - 1), this._m2 -= WQ * (QQ - this.average)
        } else this._sampleCount++;
        WQ = QQ - this.average, this.average += WQ / this._sampleCount, this._m2 += WQ * (QQ - this.average), this.variance = this._m2 / (this._sampleCount - 1), this._samples[this._pos] = QQ, this._pos++, this._pos %= this._samples.length
      }
      history(QQ) {
        if (QQ >= this._sampleCount || QQ >= this._samples.length) return 0;
        const WQ = this._wrapPosition(this._pos - 1);
        return this._samples[this._wrapPosition(WQ - QQ)]
      }
      isSaturated() {
        return this._sampleCount >= this._samples.length
      }
      reset() {
        this.average = 0, this.variance = 0, this._sampleCount = 0, this._pos = 0, this._m2 = 0
      }
      _wrapPosition(QQ) {
        const WQ = this._samples.length;
        return (QQ % WQ + WQ) % WQ
      }
    }
    var PQ = XQ(40193),
      gQ = XQ(38956),
      JQ = XQ(40210),
      rQ = XQ(40170),
      IQ = XQ(40142);

    function jQ(QQ) {
      const WQ = function(QQ) {
        if (!(0, IQ.f)() || !document.body) return null;
        const WQ = document.createElement("span");
        WQ.textContent = "Hg", WQ.style.font = QQ;
        const XQ = document.createElement("div");
        XQ.style.display = "inline-block", XQ.style.width = "1px", XQ.style.height = "0px", XQ.style.verticalAlign = "bottom";
        const wQ = document.createElement("div");
        let qQ, TQ;
        wQ.style.whiteSpace = "nowrap", wQ.appendChild(WQ), wQ.appendChild(XQ), document.body.appendChild(wQ);
        try {
          TQ = XQ.getBoundingClientRect().top - WQ.getBoundingClientRect().top, XQ.style.verticalAlign = "baseline", qQ = XQ.getBoundingClientRect().top - WQ.getBoundingClientRect().top
        } finally {
          document.body.removeChild(wQ)
        }
        const zQ = {
          ascent: qQ,
          height: TQ,
          descent: TQ - qQ
        };
        return BQ(zQ) ? zQ : null
      }(QQ);
      if (WQ) return WQ;
      const XQ = function(QQ) {
        let WQ = null;
        try {
          "undefined" !== typeof OffscreenCanvas ? WQ = new OffscreenCanvas(64, 64) : (0, IQ.f)() && "function" === typeof document.createElement && (WQ = document.createElement("canvas"), WQ.width = 64, WQ.height = 64);
          const XQ = WQ?.getContext("2d");
          if (!XQ) return null;
          XQ.font = QQ;
          const wQ = XQ.measureText("Hg"),
            qQ = Number(wQ.actualBoundingBoxAscent ?? wQ.fontBoundingBoxAscent),
            TQ = Number(wQ.actualBoundingBoxDescent ?? wQ.fontBoundingBoxDescent),
            zQ = {
              ascent: qQ,
              height: qQ + TQ,
              descent: TQ
            };
          return BQ(zQ) ? zQ : null
        } catch {
          return null
        } finally {
          const QQ = WQ;
          "function" === typeof QQ?.dispose && QQ.dispose()
        }
      }(QQ);
      return XQ || function(QQ) {
        const WQ = Math.max(1, function(QQ) {
            const WQ = /(?:^|\s)([0-9]+(?:\.[0-9]+)?)px(?:\/|\s|$)/.exec(String(QQ || ""));
            return WQ ? Number(WQ[1]) : 16
          }(QQ)),
          XQ = .8 * WQ,
          wQ = .2 * WQ;
        return {
          ascent: XQ,
          height: XQ + wQ,
          descent: wQ
        }
      }(QQ)
    }

    function BQ(QQ) {
      return Number.isFinite(QQ.ascent) && Number.isFinite(QQ.height) && Number.isFinite(QQ.descent) && QQ.height > 0
    }

    function yQ(QQ) {
      if (QQ.requestPointerLock) {
        const WQ = QQ.requestPointerLock();
        WQ instanceof Promise ? WQ.then((() => {
          QQ.focus()
        })).catch((() => {})) : QQ.focus()
      }
    }
    var VQ = XQ(40221),
      DQ = XQ(40164),
      pQ = XQ(40228),
      GQ = XQ(40230);
    class UQ extends TQ.ThinEngine {
      static get NpmPackage() {
        return rQ.d.NpmPackage
      }
      static get Version() {
        return rQ.d.Version
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
        return rQ.d.DefaultLoadingScreenFactory(QQ)
      }
      get _supportsHardwareTextureRescaling() {
        return !!UQ._RescalePostProcessFactory
      }
      _measureFps() {
        this._performanceMonitor.sampleFrame(), this._fps = this._performanceMonitor.averageFPS, this._deltaTime = this._performanceMonitor.instantaneousFrameTime || 0
      }
      get performanceMonitor() {
        return this._performanceMonitor
      }
      constructor(QQ, WQ, XQ) {
        let wQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        (0, pQ.d)(), (0, GQ.b)(), super(QQ, WQ, XQ, wQ), this._performanceMonitor = new sQ, this._drawCalls = new VQ.d, QQ && (this._features.supportRenderPasses = !0)
      }
      _initGLContext() {
        super._initGLContext(), this._rescalePostProcess = null
      }
      _sharedInit(QQ) {
        super._sharedInit(QQ),
          function(QQ, WQ, XQ) {
            QQ._onCanvasFocus = () => {
              QQ.onCanvasFocusObservable.notifyObservers(QQ)
            }, QQ._onCanvasBlur = () => {
              QQ.onCanvasBlurObservable.notifyObservers(QQ)
            }, QQ._onCanvasContextMenu = WQ => {
              QQ.disableContextMenu && WQ.preventDefault()
            }, WQ.addEventListener("focus", QQ._onCanvasFocus), WQ.addEventListener("blur", QQ._onCanvasBlur), WQ.addEventListener("contextmenu", QQ._onCanvasContextMenu), QQ._onBlur = () => {
              QQ.disablePerformanceMonitorInBackground && QQ.performanceMonitor.disable(), QQ._windowIsBackground = !0
            }, QQ._onFocus = () => {
              QQ.disablePerformanceMonitorInBackground && QQ.performanceMonitor.enable(), QQ._windowIsBackground = !1
            }, QQ._onCanvasPointerOut = XQ => {
              document.elementFromPoint(XQ.clientX, XQ.clientY) !== WQ && QQ.onCanvasPointerOutObservable.notifyObservers(XQ)
            };
            const wQ = QQ.getHostWindow();
            wQ && "function" === typeof wQ.addEventListener && (wQ.addEventListener("blur", QQ._onBlur), wQ.addEventListener("focus", QQ._onFocus)), WQ.addEventListener("pointerout", QQ._onCanvasPointerOut), XQ.doNotHandleTouchAction || function(QQ) {
              QQ && QQ.setAttribute && (QQ.setAttribute("touch-action", "none"), QQ.style.touchAction = "none", QQ.style.webkitTapHighlightColor = "transparent")
            }(WQ), !rQ.d.audioEngine && XQ.audioEngine && rQ.d.AudioEngineFactory && (rQ.d.audioEngine = rQ.d.AudioEngineFactory(QQ.getRenderingCanvas(), QQ.getAudioContext(), QQ.getAudioDestination())), (0, IQ.f)() && (QQ._onFullscreenChange = () => {
              QQ.isFullscreen = !!document.fullscreenElement, QQ.isFullscreen && QQ._pointerLockRequested && WQ && yQ(WQ)
            }, document.addEventListener("fullscreenchange", QQ._onFullscreenChange, !1), document.addEventListener("webkitfullscreenchange", QQ._onFullscreenChange, !1), QQ._onPointerLockChange = () => {
              QQ.isPointerLock = document.pointerLockElement === WQ
            }, document.addEventListener("pointerlockchange", QQ._onPointerLockChange, !1), document.addEventListener("webkitpointerlockchange", QQ._onPointerLockChange, !1)), QQ.enableOfflineSupport = void 0 !== rQ.d.OfflineProviderFactory, QQ._deterministicLockstep = !!XQ.deterministicLockstep, QQ._lockstepMaxSteps = XQ.lockstepMaxSteps || 0, QQ._timeStep = XQ.timeStep || 1 / 60
          }(this, QQ, this._creationOptions)
      }
      resizeImageBitmap(QQ, WQ, XQ) {
        return function(QQ, WQ, XQ, wQ) {
          const qQ = QQ.createCanvas(XQ, wQ).getContext("2d");
          if (!qQ) throw new Error("Unable to get 2d context for resizeImageBitmap");
          return qQ.drawImage(WQ, 0, 0), qQ.getImageData(0, 0, XQ, wQ).data
        }(this, QQ, WQ, XQ)
      }
      async _createImageBitmapFromSource(QQ, WQ) {
        return await async function(QQ, WQ, XQ) {
          return await new Promise(((wQ, qQ) => {
            const TQ = new Image;
            TQ.onload = () => {
              TQ.decode().then((() => {
                QQ.createImageBitmap(TQ, XQ).then((QQ => {
                  wQ(QQ)
                }))
              }))
            }, TQ.onerror = () => {
              qQ(`Error loading image ${TQ.src}`)
            }, TQ.src = WQ
          }))
        }(this, QQ, WQ)
      }
      switchFullscreen(QQ) {
        this.isFullscreen ? this.exitFullscreen() : this.enterFullscreen(QQ)
      }
      enterFullscreen(QQ) {
        this.isFullscreen || (this._pointerLockRequested = QQ, this._renderingCanvas && function(QQ) {
          const WQ = QQ.requestFullscreen || QQ.webkitRequestFullscreen;
          WQ && WQ.call(QQ)
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
      setDirectViewport(QQ, WQ, XQ, wQ) {
        const qQ = this._cachedViewport;
        return this._cachedViewport = null, this._viewport(QQ, WQ, XQ, wQ), qQ
      }
      scissorClear(QQ, WQ, XQ, wQ, qQ) {
        this.enableScissor(QQ, WQ, XQ, wQ), this.clear(qQ, !0, !0, !0), this.disableScissor()
      }
      getVertexShaderSource(QQ) {
        const WQ = this._gl.getAttachedShaders(QQ);
        return WQ ? this._gl.getShaderSource(WQ[0]) : null
      }
      getFragmentShaderSource(QQ) {
        const WQ = this._gl.getAttachedShaders(QQ);
        return WQ ? this._gl.getShaderSource(WQ[1]) : null
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
        return jQ(QQ)
      }
      enterPointerlock() {
        this._renderingCanvas && yQ(this._renderingCanvas)
      }
      exitPointerlock() {
        document.exitPointerLock && document.exitPointerLock()
      }
      bD() {
        this._measureFps(), super.bD()
      }
      _deletePipelineContext(QQ) {
        const WQ = QQ;
        WQ && WQ.program && WQ.transformFeedback && (this.deleteTransformFeedback(WQ.transformFeedback), WQ.transformFeedback = null), super._deletePipelineContext(QQ)
      }
      createShaderProgram(QQ, WQ, XQ, wQ, qQ) {
        let TQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        qQ = qQ || this._gl, this.onBeforeShaderCompilationObservable.notifyObservers(this);
        const zQ = super.createShaderProgram(QQ, WQ, XQ, wQ, qQ, TQ);
        return this.onAfterShaderCompilationObservable.notifyObservers(this), zQ
      }
      _createShaderProgram(QQ, WQ, XQ, wQ) {
        let qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        const TQ = wQ.createProgram();
        if (QQ.program = TQ, !TQ) throw new Error("Unable to create program");
        if (wQ.attachShader(TQ, WQ), wQ.attachShader(TQ, XQ), this.Mj > 1 && qQ) {
          const WQ = this.createTransformFeedback();
          this.bindTransformFeedback(WQ), this.setTranformFeedbackVaryings(TQ, qQ), QQ.transformFeedback = WQ
        }
        return wQ.linkProgram(TQ), this.Mj > 1 && qQ && this.bindTransformFeedback(null), QQ.context = wQ, QQ.vertexShader = WQ, QQ.fragmentShader = XQ, QQ.isParallelCompiled || this._finalizePipelineContext(QQ), TQ
      }
      _releaseTexture(QQ) {
        super._releaseTexture(QQ)
      }
      _releaseRenderTargetWrapper(QQ) {
        super._releaseRenderTargetWrapper(QQ);
        for (const WQ of this.scenes) {
          for (const XQ of WQ.postProcesses) XQ._outputTexture === QQ && (XQ._outputTexture = null);
          for (const XQ of WQ.cameras)
            for (const WQ of XQ._postProcesses) WQ && WQ._outputTexture === QQ && (WQ._outputTexture = null)
        }
      }
      _rescaleTexture(QQ, WQ, XQ, wQ, qQ) {
        this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MAG_FILTER, this._gl.LINEAR), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MIN_FILTER, this._gl.LINEAR), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_S, this._gl.CLAMP_TO_EDGE), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_T, this._gl.CLAMP_TO_EDGE);
        const TQ = this.createRenderTargetTexture({
          width: WQ.width,
          height: WQ.height
        }, {
          generateMipMaps: !1,
          type: 0,
          samplingMode: 2,
          generateDepthBuffer: !1,
          generateStencilBuffer: !1
        });
        if (!this._rescalePostProcess && UQ._RescalePostProcessFactory && (this._rescalePostProcess = UQ._RescalePostProcessFactory(this)), this._rescalePostProcess) {
          this._rescalePostProcess.externalTextureSamplerBinding = !0;
          const zQ = () => {
              this._rescalePostProcess.onApply = function(WQ) {
                WQ._bindTexture("textureSampler", QQ)
              };
              let zQ = XQ;
              zQ || (zQ = this.scenes[this.scenes.length - 1]), zQ.postProcessManager.directRender([this._rescalePostProcess], TQ, !0), this._bindTextureDirectly(this._gl.TEXTURE_2D, WQ, !0), this._gl.copyTexImage2D(this._gl.TEXTURE_2D, 0, wQ, 0, 0, WQ.width, WQ.height, 0), this.unBindFramebuffer(TQ), TQ.dispose(), qQ && qQ()
            },
            sQ = this._rescalePostProcess.getEffect();
          sQ ? sQ.executeWhenCompiled(zQ) : this._rescalePostProcess.onEffectCreatedObservable.addOnce((QQ => {
            QQ.executeWhenCompiled(zQ)
          }))
        }
      }
      wrapWebGLTexture(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3,
          qQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          TQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        const zQ = new JQ.d(QQ, this._gl),
          sQ = new wQ.e(this, 15, !0);
        return sQ._hardwareTexture = zQ, sQ.baseWidth = qQ, sQ.baseHeight = TQ, sQ.width = qQ, sQ.height = TQ, sQ.isReady = !0, sQ.useMipMaps = WQ, this.updateTextureSamplingMode(XQ, sQ), sQ
      }
      updateWrappedWebGLTexture(QQ, WQ) {
        if (15 !== QQ.source) throw new Error("updateWrappedWebGLTexture: target InternalTexture was not produced by wrapWebGLTexture.");
        for (const wQ of this._renderTargetWrapperCache)
          if (wQ.textures?.includes(QQ)) {
            if (wQ.isMulti) throw new Error("updateWrappedWebGLTexture: wrapped texture is part of a multi render-target; not supported. Dispose and re-wrap.");
            if (wQ._depthStencilTexture) throw new Error("updateWrappedWebGLTexture: wrapped texture's render-target wrapper has a depth/stencil texture; not supported. Dispose and re-wrap.")
          } QQ._hardwareTexture = new JQ.d(WQ, this._gl), QQ.isReady = !0, QQ._cachedCoordinatesMode = null, QQ._cachedWrapU = null, QQ._cachedWrapV = null, QQ._cachedWrapR = null, QQ._cachedAnisotropicFilteringLevel = null;
        for (const wQ in this._boundTexturesCache) this._boundTexturesCache[wQ] === QQ && (this._boundTexturesCache[wQ] = null);
        this.updateTextureSamplingMode(QQ.samplingMode, QQ);
        const XQ = this._gl;
        for (const wQ of this._renderTargetWrapperCache) {
          if (wQ.texture !== QQ) continue;
          const qQ = wQ,
            TQ = wQ.samples,
            zQ = TQ > 1;
          qQ._framebuffer && XQ.deleteFramebuffer(qQ._framebuffer), !zQ && qQ._depthStencilBuffer && (XQ.deleteRenderbuffer(qQ._depthStencilBuffer), qQ._depthStencilBuffer = null);
          const sQ = this._currentFramebuffer,
            FQ = XQ.createFramebuffer();
          this._bindUnboundFramebuffer(FQ), XQ.framebufferTexture2D(XQ.FRAMEBUFFER, XQ.COLOR_ATTACHMENT0, XQ.TEXTURE_2D, WQ, 0), zQ || (qQ._depthStencilBuffer = this._setupFramebufferDepthAttachments(wQ._generateStencilBuffer, wQ._generateDepthBuffer, wQ.width, wQ.height)), this._bindUnboundFramebuffer(sQ), qQ._framebuffer = FQ, zQ && (wQ._samples = 1, this.updateRenderTargetTextureSampleCount(qQ, TQ))
        }
      }
      _uploadImageToTexture(QQ, WQ) {
        let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const qQ = this._gl,
          TQ = this._getWebGLTextureType(QQ.type),
          zQ = this._getInternalFormat(QQ.format),
          sQ = this._getRGBABufferInternalSizedFormat(QQ.type, zQ),
          FQ = QQ.isCube ? qQ.TEXTURE_CUBE_MAP : qQ.TEXTURE_2D;
        this._bindTextureDirectly(FQ, QQ, !0), this._unpackFlipY(QQ.invertY);
        let PQ = qQ.TEXTURE_2D;
        QQ.isCube && (PQ = qQ.TEXTURE_CUBE_MAP_POSITIVE_X + XQ), qQ.texImage2D(PQ, wQ, sQ, zQ, TQ, WQ), this._bindTextureDirectly(FQ, null, !0)
      }
      updateTextureComparisonFunction(QQ, WQ) {
        if (1 === this.Mj) return void gQ.b.Error("WebGL 1 does not support texture comparison.");
        const XQ = this._gl;
        QQ.isCube ? (this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, QQ, !0), 0 === WQ ? (XQ.texParameteri(XQ.TEXTURE_CUBE_MAP, XQ.TEXTURE_COMPARE_FUNC, 515), XQ.texParameteri(XQ.TEXTURE_CUBE_MAP, XQ.TEXTURE_COMPARE_MODE, XQ.NONE)) : (XQ.texParameteri(XQ.TEXTURE_CUBE_MAP, XQ.TEXTURE_COMPARE_FUNC, WQ), XQ.texParameteri(XQ.TEXTURE_CUBE_MAP, XQ.TEXTURE_COMPARE_MODE, XQ.COMPARE_REF_TO_TEXTURE)), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null)) : (this._bindTextureDirectly(this._gl.TEXTURE_2D, QQ, !0), 0 === WQ ? (XQ.texParameteri(XQ.TEXTURE_2D, XQ.TEXTURE_COMPARE_FUNC, 515), XQ.texParameteri(XQ.TEXTURE_2D, XQ.TEXTURE_COMPARE_MODE, XQ.NONE)) : (XQ.texParameteri(XQ.TEXTURE_2D, XQ.TEXTURE_COMPARE_FUNC, WQ), XQ.texParameteri(XQ.TEXTURE_2D, XQ.TEXTURE_COMPARE_MODE, XQ.COMPARE_REF_TO_TEXTURE)), this._bindTextureDirectly(this._gl.TEXTURE_2D, null)), QQ._comparisonFunction = WQ
      }
      createInstancesBuffer(QQ) {
        const WQ = this._gl.createBuffer();
        if (!WQ) throw new Error("Unable to create instance buffer");
        const XQ = new PQ.c(WQ);
        return XQ.yJ = QQ, this.bindArrayBuffer(XQ), this._gl.bufferData(this._gl.ARRAY_BUFFER, QQ, this._gl.DYNAMIC_DRAW), XQ.references = 1, XQ
      }
      deleteInstancesBuffer(QQ) {
        this._gl.deleteBuffer(QQ)
      }
      async _clientWaitAsync(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10;
        const wQ = this._gl;
        return await new Promise(((qQ, TQ) => {
          (0, DQ.e)((() => {
            const XQ = wQ.clientWaitSync(QQ, WQ, 0);
            if (XQ == wQ.WAIT_FAILED) throw new Error("clientWaitSync failed");
            return XQ != wQ.TIMEOUT_EXPIRED
          }), qQ, TQ, XQ)
        }))
      }
      _readPixelsAsync(QQ, WQ, XQ, wQ, qQ, TQ, zQ) {
        if (this._webGLVersion < 2) throw new Error("_readPixelsAsync only work on WebGL2+");
        const sQ = this._gl,
          FQ = sQ.createBuffer();
        sQ.bindBuffer(sQ.PIXEL_PACK_BUFFER, FQ), sQ.bufferData(sQ.PIXEL_PACK_BUFFER, zQ.byteLength, sQ.STREAM_READ), sQ.readPixels(QQ, WQ, XQ, wQ, qQ, TQ, 0), sQ.bindBuffer(sQ.PIXEL_PACK_BUFFER, null);
        const PQ = sQ.fenceSync(sQ.SYNC_GPU_COMMANDS_COMPLETE, 0);
        return PQ ? (sQ.flush(), this._clientWaitAsync(PQ, 0, 10).then((() => (sQ.deleteSync(PQ), sQ.bindBuffer(sQ.PIXEL_PACK_BUFFER, FQ), sQ.getBufferSubData(sQ.PIXEL_PACK_BUFFER, 0, zQ), sQ.bindBuffer(sQ.PIXEL_PACK_BUFFER, null), sQ.deleteBuffer(FQ), zQ)))) : null
      }
      dispose() {
        this.hideLoadingUI?.(), this._rescalePostProcess && this._rescalePostProcess.dispose(),
          function(QQ, WQ) {
            1 === qQ.d.Instances.length && rQ.d.audioEngine && (rQ.d.audioEngine.dispose(), rQ.d.audioEngine = null);
            const XQ = QQ.getHostWindow();
            XQ && "function" === typeof XQ.removeEventListener && (XQ.removeEventListener("blur", QQ._onBlur), XQ.removeEventListener("focus", QQ._onFocus)), WQ && (WQ.removeEventListener("focus", QQ._onCanvasFocus), WQ.removeEventListener("blur", QQ._onCanvasBlur), WQ.removeEventListener("pointerout", QQ._onCanvasPointerOut), WQ.removeEventListener("contextmenu", QQ._onCanvasContextMenu)), (0, IQ.f)() && (document.removeEventListener("fullscreenchange", QQ._onFullscreenChange), document.removeEventListener("mozfullscreenchange", QQ._onFullscreenChange), document.removeEventListener("webkitfullscreenchange", QQ._onFullscreenChange), document.removeEventListener("msfullscreenchange", QQ._onFullscreenChange), document.removeEventListener("pointerlockchange", QQ._onPointerLockChange), document.removeEventListener("mspointerlockchange", QQ._onPointerLockChange), document.removeEventListener("mozpointerlockchange", QQ._onPointerLockChange), document.removeEventListener("webkitpointerlockchange", QQ._onPointerLockChange))
          }(this, this._renderingCanvas), super.dispose()
      }
    }
    UQ.ALPHA_DISABLE = 0, UQ.ALPHA_ADD = 1, UQ.ALPHA_COMBINE = 2, UQ.ALPHA_SUBTRACT = 3, UQ.ALPHA_MULTIPLY = 4, UQ.ALPHA_MAXIMIZED = 5, UQ.ALPHA_ONEONE = 6, UQ.ALPHA_PREMULTIPLIED = 7, UQ.ALPHA_PREMULTIPLIED_PORTERDUFF = 8, UQ.ALPHA_INTERPOLATE = 9, UQ.ALPHA_SCREENMODE = 10, UQ.DELAYLOADSTATE_NONE = 0, UQ.DELAYLOADSTATE_LOADED = 1, UQ.DELAYLOADSTATE_LOADING = 2, UQ.DELAYLOADSTATE_NOTLOADED = 4, UQ.NEVER = 512, UQ.ALWAYS = 519, UQ.LESS = 513, UQ.EQUAL = 514, UQ.LEQUAL = 515, UQ.GREATER = 516, UQ.GEQUAL = 518, UQ.NOTEQUAL = 517, UQ.KEEP = 7680, UQ.REPLACE = 7681, UQ.INCR = 7682, UQ.DECR = 7683, UQ.INVERT = 5386, UQ.INCR_WRAP = 34055, UQ.DECR_WRAP = 34056, UQ.TEXTURE_CLAMP_ADDRESSMODE = 0, UQ.TEXTURE_WRAP_ADDRESSMODE = 1, UQ.TEXTURE_MIRROR_ADDRESSMODE = 2, UQ.TEXTUREFORMAT_ALPHA = 0, UQ.TEXTUREFORMAT_LUMINANCE = 1, UQ.TEXTUREFORMAT_LUMINANCE_ALPHA = 2, UQ.TEXTUREFORMAT_RGB = 4, UQ.TEXTUREFORMAT_RGBA = 5, UQ.TEXTUREFORMAT_RED = 6, UQ.TEXTUREFORMAT_R = 6, UQ.TEXTUREFORMAT_R16_UNORM = 33322, UQ.TEXTUREFORMAT_RG16_UNORM = 33324, UQ.TEXTUREFORMAT_RGB16_UNORM = 32852, UQ.TEXTUREFORMAT_RGBA16_UNORM = 32859, UQ.TEXTUREFORMAT_R16_SNORM = 36760, UQ.TEXTUREFORMAT_RG16_SNORM = 36761, UQ.TEXTUREFORMAT_RGB16_SNORM = 36762, UQ.TEXTUREFORMAT_RGBA16_SNORM = 36763, UQ.TEXTUREFORMAT_RG = 7, UQ.TEXTUREFORMAT_RED_INTEGER = 8, UQ.TEXTUREFORMAT_R_INTEGER = 8, UQ.TEXTUREFORMAT_RG_INTEGER = 9, UQ.TEXTUREFORMAT_RGB_INTEGER = 10, UQ.TEXTUREFORMAT_RGBA_INTEGER = 11, UQ.TEXTURETYPE_UNSIGNED_BYTE = 0, UQ.TEXTURETYPE_UNSIGNED_INT = 0, UQ.TEXTURETYPE_FLOAT = 1, UQ.TEXTURETYPE_HALF_FLOAT = 2, UQ.TEXTURETYPE_BYTE = 3, UQ.TEXTURETYPE_SHORT = 4, UQ.TEXTURETYPE_UNSIGNED_SHORT = 5, UQ.TEXTURETYPE_INT = 6, UQ.TEXTURETYPE_UNSIGNED_INTEGER = 7, UQ.TEXTURETYPE_UNSIGNED_SHORT_4_4_4_4 = 8, UQ.TEXTURETYPE_UNSIGNED_SHORT_5_5_5_1 = 9, UQ.TEXTURETYPE_UNSIGNED_SHORT_5_6_5 = 10, UQ.TEXTURETYPE_UNSIGNED_INT_2_10_10_10_REV = 11, UQ.TEXTURETYPE_UNSIGNED_INT_24_8 = 12, UQ.TEXTURETYPE_UNSIGNED_INT_10F_11F_11F_REV = 13, UQ.TEXTURETYPE_UNSIGNED_INT_5_9_9_9_REV = 14, UQ.TEXTURETYPE_FLOAT_32_UNSIGNED_INT_24_8_REV = 15, UQ.TEXTURE_NEAREST_SAMPLINGMODE = 1, UQ.TEXTURE_BILINEAR_SAMPLINGMODE = 2, UQ.TEXTURE_TRILINEAR_SAMPLINGMODE = 3, UQ.TEXTURE_NEAREST_NEAREST_MIPLINEAR = 8, UQ.TEXTURE_LINEAR_LINEAR_MIPNEAREST = 11, UQ.TEXTURE_LINEAR_LINEAR_MIPLINEAR = 3, UQ.TEXTURE_NEAREST_NEAREST_MIPNEAREST = 4, UQ.TEXTURE_NEAREST_LINEAR_MIPNEAREST = 5, UQ.TEXTURE_NEAREST_LINEAR_MIPLINEAR = 6, UQ.TEXTURE_NEAREST_LINEAR = 7, UQ.TEXTURE_NEAREST_NEAREST = 1, UQ.TEXTURE_LINEAR_NEAREST_MIPNEAREST = 9, UQ.TEXTURE_LINEAR_NEAREST_MIPLINEAR = 10, UQ.TEXTURE_LINEAR_LINEAR = 2, UQ.TEXTURE_LINEAR_NEAREST = 12, UQ.TEXTURE_EXPLICIT_MODE = 0, UQ.TEXTURE_SPHERICAL_MODE = 1, UQ.TEXTURE_PLANAR_MODE = 2, UQ.TEXTURE_CUBIC_MODE = 3, UQ.TEXTURE_PROJECTION_MODE = 4, UQ.TEXTURE_SKYBOX_MODE = 5, UQ.TEXTURE_INVCUBIC_MODE = 6, UQ.TEXTURE_EQUIRECTANGULAR_MODE = 7, UQ.TEXTURE_FIXED_EQUIRECTANGULAR_MODE = 8, UQ.TEXTURE_FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9, UQ.SCALEMODE_FLOOR = 1, UQ.SCALEMODE_NEAREST = 2, UQ.SCALEMODE_CEILING = 3
  },
  40247: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => qQ
    });
    var wQ = XQ(40212);
    class qQ {
      get depthStencilTexture() {
        return this._depthStencilTexture
      }
      setDepthStencilTexture(QQ) {
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && this._depthStencilTexture && this._depthStencilTexture.dispose(), this._depthStencilTexture = QQ, this._generateDepthBuffer = this._generateStencilBuffer = this._depthStencilTextureWithStencil = !1, QQ && (this._generateDepthBuffer = !0, this._generateStencilBuffer = this._depthStencilTextureWithStencil = (0, wQ.c)(QQ.format))
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
        const WQ = this._textures[QQ],
          XQ = this._layerIndices?.[QQ] ?? 0,
          wQ = this._faceIndices?.[QQ] ?? 0;
        return WQ.isCube ? 6 * XQ + wQ : WQ.is3D ? 0 : XQ
      }
      get samples() {
        return this._samples
      }
      setSamples(QQ) {
        let WQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          XQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.samples === QQ && !XQ) return QQ;
        const wQ = this._isMulti ? this._engine.updateMultipleRenderTargetTextureSampleCount(this, QQ, WQ) : this._engine.updateRenderTargetTextureSampleCount(this, QQ);
        return this._samples = QQ, wQ
      }
      resolveMSAATextures() {
        this.isMulti ? this._engine.resolveMultiFramebuffer(this) : this._engine.resolveFramebuffer(this)
      }
      generateMipMaps() {
        this._engine._currentRenderTarget === this && (this.isMulti ? this._engine.unBindMultiColorAttachmentFramebuffer(this, !0) : this._engine.unBindFramebuffer(this, !0)), this.isMulti ? this._engine.generateMipMapsMultiFramebuffer(this) : this._engine.generateMipMapsFramebuffer(this)
      }
      constructor(QQ, WQ, XQ, wQ, qQ) {
        this._textures = null, this._faceIndices = null, this._layerIndices = null, this._samples = 1, this._attachments = null, this._generateStencilBuffer = !1, this._generateDepthBuffer = !1, this._depthStencilTextureWithStencil = !1, this.disableAutomaticMSAAResolve = !1, this.resolveMSAAColors = !0, this.resolveMSAADepth = !1, this.resolveMSAAStencil = !1, this.depthReadOnly = !1, this.stencilReadOnly = !1, this._isMulti = QQ, this._isCube = WQ, this._size = XQ, this._engine = wQ, this._depthStencilTexture = null, this.label = qQ
      }
      setTextures(QQ) {
        Array.isArray(QQ) ? this._textures = QQ : this._textures = QQ ? [QQ] : null
      }
      setTexture(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          XQ = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._textures || (this._textures = []), this._textures[WQ] !== QQ && (this._textures[WQ] && XQ && this._textures[WQ].dispose(), this._textures[WQ] = QQ)
      }
      setLayerAndFaceIndices(QQ, WQ) {
        this._layerIndices = QQ, this._faceIndices = WQ
      }
      setLayerAndFaceIndex() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          WQ = arguments.length > 1 ? arguments[1] : void 0,
          XQ = arguments.length > 2 ? arguments[2] : void 0;
        this._layerIndices || (this._layerIndices = []), this._faceIndices || (this._faceIndices = []), void 0 !== WQ && WQ >= 0 && (this._layerIndices[QQ] = WQ), void 0 !== XQ && XQ >= 0 && (this._faceIndices[QQ] = XQ)
      }
      createDepthStencilTexture() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          WQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          XQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          TQ = arguments.length > 5 ? arguments[5] : void 0;
        return this._depthStencilTexture?.dispose(), this._depthStencilTextureWithStencil = XQ, this._depthStencilTextureLabel = TQ, this._depthStencilTexture = this._engine.createDepthStencilTexture(this._size, {
          bilinearFiltering: WQ,
          comparisonFunction: QQ,
          generateStencil: XQ,
          isCube: this._isCube,
          samples: wQ,
          depthTextureFormat: qQ,
          label: TQ
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
          const WQ = this.textures;
          if (WQ && WQ.length > 0) {
            let XQ = !1,
              wQ = WQ.length,
              qQ = -1;
            const TQ = WQ[WQ.length - 1]._source;
            14 !== TQ && 12 !== TQ || (XQ = !0, qQ = WQ[WQ.length - 1].format, wQ--);
            const zQ = [],
              sQ = [],
              FQ = [],
              PQ = [],
              gQ = [],
              JQ = [],
              rQ = [],
              IQ = {};
            for (let QQ = 0; QQ < wQ; ++QQ) {
              const XQ = WQ[QQ];
              zQ.push(XQ.samplingMode), sQ.push(XQ.type), FQ.push(XQ.format);
              void 0 !== IQ[XQ.uniqueId] ? (PQ.push(-1), rQ.push(0)) : (IQ[XQ.uniqueId] = QQ, XQ.is2DArray ? (PQ.push(35866), rQ.push(XQ.depth)) : XQ.isCube ? (PQ.push(34067), rQ.push(0)) : XQ.is3D ? (PQ.push(32879), rQ.push(XQ.depth)) : (PQ.push(3553), rQ.push(0))), this._faceIndices && gQ.push(this._faceIndices[QQ] ?? 0), this._layerIndices && JQ.push(this._layerIndices[QQ] ?? 0)
            }
            const jQ = {
                samplingModes: zQ,
                generateMipMaps: WQ[0].generateMipMaps,
                generateDepthBuffer: this._generateDepthBuffer,
                generateStencilBuffer: this._generateStencilBuffer,
                generateDepthTexture: XQ,
                depthTextureFormat: qQ,
                types: sQ,
                formats: FQ,
                ssQ: wQ,
                targetTypes: PQ,
                faceIndex: gQ,
                layerIndex: JQ,
                layerCounts: rQ,
                label: this.label
              },
              BQ = {
                width: this.width,
                height: this.height,
                depth: this.depth
              };
            QQ = this._engine.createMultipleRenderTarget(BQ, jQ);
            for (let yQ = 0; yQ < wQ; ++yQ) {
              if (-1 !== PQ[yQ]) continue;
              const XQ = IQ[WQ[yQ].uniqueId];
              QQ.setTexture(QQ.textures[XQ], yQ)
            }
          }
        } else {
          const WQ = {};
          if (WQ.generateDepthBuffer = this._generateDepthBuffer, WQ.generateMipMaps = this.texture?.generateMipMaps ?? !1, WQ.generateStencilBuffer = this._generateStencilBuffer, WQ.samplingMode = this.texture?.samplingMode, WQ.type = this.texture?.type, WQ.format = this.texture?.format, WQ.noColorAttachment = !this._textures, WQ.label = this.label, this.isCube) QQ = this._engine.createRenderTargetCubeTexture(this.width, WQ);
          else {
            const XQ = {
              width: this.width,
              height: this.height,
              layers: this.is2DArray || this.is3D ? this.texture?.depth : void 0
            };
            QQ = this._engine.createRenderTargetTexture(XQ, WQ)
          }
          QQ.texture && (QQ.texture.isReady = !0)
        }
        return QQ
      }
      _swapRenderTargetWrapper(QQ) {
        if (this._textures && QQ._textures)
          for (let WQ = 0; WQ < this._textures.length; ++WQ) this._textures[WQ]._swapAndDie(QQ._textures[WQ], !1), QQ._textures[WQ].isReady = !0;
        this._depthStencilTexture && QQ._depthStencilTexture && (this._depthStencilTexture._swapAndDie(QQ._depthStencilTexture), QQ._depthStencilTexture.isReady = !0), this._textures = null, this._depthStencilTexture = null
      }
      _rebuild() {
        const QQ = this._cloneRenderTargetWrapper();
        if (QQ) {
          if (this._depthStencilTexture) {
            const WQ = this._depthStencilTexture.samplingMode,
              XQ = this._depthStencilTexture.format,
              wQ = 2 === WQ || 3 === WQ || 11 === WQ;
            QQ.createDepthStencilTexture(this._depthStencilTexture._comparisonFunction, wQ, this._depthStencilTextureWithStencil, this._depthStencilTexture.samples, XQ, this._depthStencilTextureLabel)
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
  40676: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => wQ
    });
    class wQ {
      static get ForceFullSceneLoadingForIncremental() {
        return wQ._ForceFullSceneLoadingForIncremental
      }
      static set ForceFullSceneLoadingForIncremental(QQ) {
        wQ._ForceFullSceneLoadingForIncremental = QQ
      }
      static get ShowLoadingScreen() {
        return wQ._ShowLoadingScreen
      }
      static set ShowLoadingScreen(QQ) {
        wQ._ShowLoadingScreen = QQ
      }
      static get loggingLevel() {
        return wQ._LoggingLevel
      }
      static set loggingLevel(QQ) {
        wQ._LoggingLevel = QQ
      }
      static get CleanBoneMatrixWeights() {
        return wQ._CleanBoneMatrixWeights
      }
      static set CleanBoneMatrixWeights(QQ) {
        wQ._CleanBoneMatrixWeights = QQ
      }
    }
    wQ._ForceFullSceneLoadingForIncremental = !1, wQ._ShowLoadingScreen = !0, wQ._CleanBoneMatrixWeights = !1, wQ._LoggingLevel = 0
  },
  40344: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => zQ
    });
    var wQ = XQ(38956);
    const qQ = new Map;

    function TQ(QQ, WQ) {
      (function(QQ) {
        return qQ.delete(QQ)
      })(QQ) && wQ.b.Warn(`Extension with the name '${QQ}' already exists`), qQ.set(QQ, WQ)
    }

    function zQ(QQ, WQ) {
      "image/ktx" !== WQ && "image/ktx2" !== WQ || (QQ = ".ktx"), qQ.has(QQ) || (QQ.endsWith(".ies") && TQ(".ies", (async () => await XQ.e(318).then((() => XQ(42021))).then((QQ => new QQ._IESTextureLoader)))), QQ.endsWith(".dds") && TQ(".dds", (async () => await XQ.e(316).then((() => XQ(42025))).then((QQ => new QQ._DDSTextureLoader)))), QQ.endsWith(".basis") && TQ(".basis", (async () => await XQ.e(319).then((() => XQ(42032))).then((QQ => new QQ._BasisTextureLoader)))), QQ.endsWith(".env") && TQ(".env", (async () => await Promise.all([XQ.e(320), XQ.e(317)]).then((() => XQ(42034))).then((QQ => new QQ._ENVTextureLoader)))), QQ.endsWith(".hdr") && TQ(".hdr", (async () => await XQ.e(321).then((() => XQ(42086))).then((QQ => new QQ._HDRTextureLoader)))), (QQ.endsWith(".ktx") || QQ.endsWith(".ktx2")) && (TQ(".ktx", (async () => await XQ.e(322).then((() => XQ(42092))).then((QQ => new QQ._KTXTextureLoader)))), TQ(".ktx2", (async () => await XQ.e(322).then((() => XQ(42092))).then((QQ => new QQ._KTXTextureLoader))))), QQ.endsWith(".tga") && TQ(".tga", (async () => await XQ.e(323).then((() => XQ(42105))).then((QQ => new QQ._TGATextureLoader)))), QQ.endsWith(".exr") && TQ(".exr", (async () => await XQ.e(324).then((() => XQ(42114))).then((QQ => new QQ._ExrTextureLoader)))));
      const wQ = qQ.get(QQ);
      return wQ ? Promise.resolve(wQ(WQ)) : null
    }
  },
  40697: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => zQ,
      g: () => PQ
    });
    var wQ = XQ(40551),
      qQ = XQ(40290),
      TQ = XQ(37418);
    class zQ extends wQ.b {
      get Z2() {
        return this._subMaterials
      }
      set Z2(QQ) {
        this._subMaterials = QQ, this._hookArray(QQ)
      }
      getChildren() {
        return this.Z2
      }
      constructor(QQ, WQ) {
        super(QQ, WQ, !0), this._waitingSubMaterialsUniqueIds = [], this.sE().addMultiMaterial(this), this.Z2 = [], this._storeEffectOnSubMeshes = !0
      }
      _hookArray(QQ) {
        var WQ = this;
        const XQ = QQ.push;
        QQ.push = function() {
          for (var wQ = arguments.length, qQ = new Array(wQ), TQ = 0; TQ < wQ; TQ++) qQ[TQ] = arguments[TQ];
          const zQ = XQ.apply(QQ, qQ);
          return WQ._markAllSubMeshesAsTexturesDirty(), zQ
        };
        const wQ = QQ.splice;
        QQ.splice = (WQ, XQ) => {
          const qQ = wQ.call(QQ, WQ, XQ ?? QQ.length);
          return this._markAllSubMeshesAsTexturesDirty(), qQ
        }
      }
      getSubMaterial(QQ) {
        return QQ < 0 || QQ >= this.Z2.length ? this.sE().defaultMaterial : this.Z2[QQ]
      }
      getActiveTextures() {
        return super.getActiveTextures().concat(...this.Z2.map((QQ => QQ ? QQ.getActiveTextures() : [])))
      }
      hasTexture(QQ) {
        if (super.hasTexture(QQ)) return !0;
        for (let WQ = 0; WQ < this.Z2.length; WQ++)
          if (this.Z2[WQ]?.hasTexture(QQ)) return !0;
        return !1
      }
      getClassName() {
        return "MultiMaterial"
      }
      isReadyForSubMesh(QQ, WQ, XQ) {
        for (let wQ = 0; wQ < this.Z2.length; wQ++) {
          const qQ = this.Z2[wQ];
          if (qQ) {
            if (qQ._storeEffectOnSubMeshes) {
              if (!qQ.isReadyForSubMesh(QQ, WQ, XQ)) return !1;
              continue
            }
            if (!qQ.isReady(QQ)) return !1
          }
        }
        return !0
      }
      clone(QQ, WQ) {
        const XQ = new zQ(QQ, this.sE());
        for (let wQ = 0; wQ < this.Z2.length; wQ++) {
          let qQ;
          const TQ = this.Z2[wQ];
          qQ = WQ && TQ ? TQ.clone(QQ + "-" + TQ.name) : this.Z2[wQ], XQ.Z2.push(qQ)
        }
        return XQ
      }
      serialize() {
        const QQ = {};
        QQ.name = this.name, QQ.id = this.id, QQ.uniqueId = this.uniqueId, qQ.d && (QQ.tags = qQ.d.GetTags(this)), QQ.materialsUniqueIds = [], QQ.materials = [];
        for (let WQ = 0; WQ < this.Z2.length; WQ++) {
          const XQ = this.Z2[WQ];
          XQ ? (QQ.materialsUniqueIds.push(XQ.uniqueId), QQ.materials.push(XQ.id)) : (QQ.materialsUniqueIds.push(null), QQ.materials.push(null))
        }
        return QQ
      }
      dispose(QQ, WQ, XQ) {
        const wQ = this.sE();
        if (!wQ) return;
        if (XQ)
          for (let TQ = 0; TQ < this.Z2.length; TQ++) {
            const XQ = this.Z2[TQ];
            XQ && XQ.dispose(QQ, WQ)
          }
        const qQ = wQ.multiMaterials.indexOf(this);
        qQ >= 0 && wQ.multiMaterials.splice(qQ, 1), super.dispose(QQ, WQ)
      }
    }
    let sQ = !1;

    function FQ(QQ, WQ) {
      const XQ = new zQ(QQ.name, WQ);
      if (XQ.id = QQ.id, XQ._loadedUniqueId = QQ.uniqueId, qQ.d && qQ.d.AddTagsTo(XQ, QQ.tags), QQ.materialsUniqueIds) XQ._waitingSubMaterialsUniqueIds = QQ.materialsUniqueIds;
      else
        for (const wQ of QQ.materials) XQ.Z2.push(WQ.getLastMaterialById(wQ));
      return XQ
    }

    function PQ() {
      sQ || (sQ = !0, zQ.ParseMultiMaterial = FQ, (0, TQ.d)("BABYLON.MultiMaterial", zQ))
    }
  },
  40496: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => zQ
    });
    var wQ, qQ, TQ = XQ(37370);
    ! function(QQ) {
      QQ[QQ.LOCAL = 0] = "LOCAL", QQ[QQ.WORLD = 1] = "WORLD", QQ[QQ.BONE = 2] = "BONE"
    }(wQ || (wQ = {}));
    class zQ {}
    zQ.X = new TQ.s(1, 0, 0), zQ.Y = new TQ.s(0, 1, 0), zQ.Z = new TQ.s(0, 0, 1),
      function(QQ) {
        QQ[QQ.X = 0] = "X", QQ[QQ.Y = 1] = "Y", QQ[QQ.Z = 2] = "Z"
      }(qQ || (qQ = {}))
  },
  40250: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => FQ,
      e: () => PQ
    });
    var wQ = XQ(37370);
    const qQ = [Math.sqrt(1 / (4 * Math.PI)), -Math.sqrt(3 / (4 * Math.PI)), Math.sqrt(3 / (4 * Math.PI)), -Math.sqrt(3 / (4 * Math.PI)), Math.sqrt(15 / (4 * Math.PI)), -Math.sqrt(15 / (4 * Math.PI)), Math.sqrt(5 / (16 * Math.PI)), -Math.sqrt(15 / (4 * Math.PI)), Math.sqrt(15 / (16 * Math.PI))],
      TQ = [() => 1, QQ => QQ.y, QQ => QQ.z, QQ => QQ.x, QQ => QQ.x * QQ.y, QQ => QQ.y * QQ.z, QQ => 3 * QQ.z * QQ.z - 1, QQ => QQ.x * QQ.z, QQ => QQ.x * QQ.x - QQ.y * QQ.y],
      zQ = (QQ, WQ) => qQ[QQ] * TQ[QQ](WQ),
      sQ = [Math.PI, 2 * Math.PI / 3, 2 * Math.PI / 3, 2 * Math.PI / 3, Math.PI / 4, Math.PI / 4, Math.PI / 4, Math.PI / 4, Math.PI / 4];
    class FQ {
      constructor() {
        this.preScaled = !1, this.l00 = wQ.s.Zero(), this.l1_1 = wQ.s.Zero(), this.l10 = wQ.s.Zero(), this.l11 = wQ.s.Zero(), this.l2_2 = wQ.s.Zero(), this.l2_1 = wQ.s.Zero(), this.l20 = wQ.s.Zero(), this.l21 = wQ.s.Zero(), this.l22 = wQ.s.Zero()
      }
      addLight(QQ, WQ, XQ) {
        wQ.m.vj[0].set(WQ.r, WQ.g, WQ.b);
        const qQ = wQ.m.vj[0],
          TQ = wQ.m.vj[1];
        qQ.scaleToRef(XQ, TQ), TQ.scaleToRef(zQ(0, QQ), wQ.m.vj[2]), this.l00.addInPlace(wQ.m.vj[2]), TQ.scaleToRef(zQ(1, QQ), wQ.m.vj[2]), this.l1_1.addInPlace(wQ.m.vj[2]), TQ.scaleToRef(zQ(2, QQ), wQ.m.vj[2]), this.l10.addInPlace(wQ.m.vj[2]), TQ.scaleToRef(zQ(3, QQ), wQ.m.vj[2]), this.l11.addInPlace(wQ.m.vj[2]), TQ.scaleToRef(zQ(4, QQ), wQ.m.vj[2]), this.l2_2.addInPlace(wQ.m.vj[2]), TQ.scaleToRef(zQ(5, QQ), wQ.m.vj[2]), this.l2_1.addInPlace(wQ.m.vj[2]), TQ.scaleToRef(zQ(6, QQ), wQ.m.vj[2]), this.l20.addInPlace(wQ.m.vj[2]), TQ.scaleToRef(zQ(7, QQ), wQ.m.vj[2]), this.l21.addInPlace(wQ.m.vj[2]), TQ.scaleToRef(zQ(8, QQ), wQ.m.vj[2]), this.l22.addInPlace(wQ.m.vj[2])
      }
      scaleInPlace(QQ) {
        this.l00.scaleInPlace(QQ), this.l1_1.scaleInPlace(QQ), this.l10.scaleInPlace(QQ), this.l11.scaleInPlace(QQ), this.l2_2.scaleInPlace(QQ), this.l2_1.scaleInPlace(QQ), this.l20.scaleInPlace(QQ), this.l21.scaleInPlace(QQ), this.l22.scaleInPlace(QQ)
      }
      convertIncidentRadianceToIrradiance() {
        this.l00.scaleInPlace(sQ[0]), this.l1_1.scaleInPlace(sQ[1]), this.l10.scaleInPlace(sQ[2]), this.l11.scaleInPlace(sQ[3]), this.l2_2.scaleInPlace(sQ[4]), this.l2_1.scaleInPlace(sQ[5]), this.l20.scaleInPlace(sQ[6]), this.l21.scaleInPlace(sQ[7]), this.l22.scaleInPlace(sQ[8])
      }
      convertIrradianceToLambertianRadiance() {
        this.scaleInPlace(1 / Math.PI)
      }
      preScaleForRendering() {
        this.preScaled = !0, this.l00.scaleInPlace(qQ[0]), this.l1_1.scaleInPlace(qQ[1]), this.l10.scaleInPlace(qQ[2]), this.l11.scaleInPlace(qQ[3]), this.l2_2.scaleInPlace(qQ[4]), this.l2_1.scaleInPlace(qQ[5]), this.l20.scaleInPlace(qQ[6]), this.l21.scaleInPlace(qQ[7]), this.l22.scaleInPlace(qQ[8])
      }
      updateFromArray(QQ) {
        return wQ.s.FromArrayToRef(QQ[0], 0, this.l00), wQ.s.FromArrayToRef(QQ[1], 0, this.l1_1), wQ.s.FromArrayToRef(QQ[2], 0, this.l10), wQ.s.FromArrayToRef(QQ[3], 0, this.l11), wQ.s.FromArrayToRef(QQ[4], 0, this.l2_2), wQ.s.FromArrayToRef(QQ[5], 0, this.l2_1), wQ.s.FromArrayToRef(QQ[6], 0, this.l20), wQ.s.FromArrayToRef(QQ[7], 0, this.l21), wQ.s.FromArrayToRef(QQ[8], 0, this.l22), this
      }
      updateFromFloatsArray(QQ) {
        return wQ.s.FromFloatsToRef(QQ[0], QQ[1], QQ[2], this.l00), wQ.s.FromFloatsToRef(QQ[3], QQ[4], QQ[5], this.l1_1), wQ.s.FromFloatsToRef(QQ[6], QQ[7], QQ[8], this.l10), wQ.s.FromFloatsToRef(QQ[9], QQ[10], QQ[11], this.l11), wQ.s.FromFloatsToRef(QQ[12], QQ[13], QQ[14], this.l2_2), wQ.s.FromFloatsToRef(QQ[15], QQ[16], QQ[17], this.l2_1), wQ.s.FromFloatsToRef(QQ[18], QQ[19], QQ[20], this.l20), wQ.s.FromFloatsToRef(QQ[21], QQ[22], QQ[23], this.l21), wQ.s.FromFloatsToRef(QQ[24], QQ[25], QQ[26], this.l22), this
      }
      static FromArray(QQ) {
        return (new FQ).updateFromArray(QQ)
      }
      static FromPolynomial(QQ) {
        const WQ = new FQ;
        return WQ.l00 = QQ.xx.scale(.376127).add(QQ.yy.scale(.376127)).add(QQ.zz.scale(.376126)), WQ.l1_1 = QQ.y.scale(.977204), WQ.l10 = QQ.z.scale(.977204), WQ.l11 = QQ.x.scale(.977204), WQ.l2_2 = QQ.xy.scale(1.16538), WQ.l2_1 = QQ.yz.scale(1.16538), WQ.l20 = QQ.zz.scale(1.34567).subtract(QQ.xx.scale(.672834)).subtract(QQ.yy.scale(.672834)), WQ.l21 = QQ.zx.scale(1.16538), WQ.l22 = QQ.xx.scale(1.16538).subtract(QQ.yy.scale(1.16538)), WQ.l1_1.scaleInPlace(-1), WQ.l11.scaleInPlace(-1), WQ.l2_1.scaleInPlace(-1), WQ.l21.scaleInPlace(-1), WQ.scaleInPlace(Math.PI), WQ
      }
    }
    class PQ {
      constructor() {
        this.x = wQ.s.Zero(), this.y = wQ.s.Zero(), this.z = wQ.s.Zero(), this.xx = wQ.s.Zero(), this.yy = wQ.s.Zero(), this.zz = wQ.s.Zero(), this.xy = wQ.s.Zero(), this.yz = wQ.s.Zero(), this.zx = wQ.s.Zero()
      }
      get preScaledHarmonics() {
        return this._harmonics || (this._harmonics = FQ.FromPolynomial(this)), this._harmonics.preScaled || this._harmonics.preScaleForRendering(), this._harmonics
      }
      addAmbient(QQ) {
        wQ.m.vj[0].XQQ(QQ.r, QQ.g, QQ.b);
        const WQ = wQ.m.vj[0];
        this.xx.addInPlace(WQ), this.yy.addInPlace(WQ), this.zz.addInPlace(WQ)
      }
      scaleInPlace(QQ) {
        this.x.scaleInPlace(QQ), this.y.scaleInPlace(QQ), this.z.scaleInPlace(QQ), this.xx.scaleInPlace(QQ), this.yy.scaleInPlace(QQ), this.zz.scaleInPlace(QQ), this.yz.scaleInPlace(QQ), this.zx.scaleInPlace(QQ), this.xy.scaleInPlace(QQ)
      }
      updateFromHarmonics(QQ) {
        return this._harmonics = QQ, this.x.WH(QQ.l11), this.x.scaleInPlace(1.02333).scaleInPlace(-1), this.y.WH(QQ.l1_1), this.y.scaleInPlace(1.02333).scaleInPlace(-1), this.z.WH(QQ.l10), this.z.scaleInPlace(1.02333), this.xx.WH(QQ.l00), wQ.m.vj[0].WH(QQ.l20).scaleInPlace(.247708), wQ.m.vj[1].WH(QQ.l22).scaleInPlace(.429043), this.xx.scaleInPlace(.886277).YwQ(wQ.m.vj[0]).addInPlace(wQ.m.vj[1]), this.yy.WH(QQ.l00), this.yy.scaleInPlace(.886277).YwQ(wQ.m.vj[0]).YwQ(wQ.m.vj[1]), this.zz.WH(QQ.l00), wQ.m.vj[0].WH(QQ.l20).scaleInPlace(.495417), this.zz.scaleInPlace(.886277).addInPlace(wQ.m.vj[0]), this.yz.WH(QQ.l2_1), this.yz.scaleInPlace(.858086).scaleInPlace(-1), this.zx.WH(QQ.l21), this.zx.scaleInPlace(.858086).scaleInPlace(-1), this.xy.WH(QQ.l2_2), this.xy.scaleInPlace(.858086), this.scaleInPlace(1 / Math.PI), this
      }
      static FromHarmonics(QQ) {
        return (new PQ).updateFromHarmonics(QQ)
      }
      static FromArray(QQ) {
        const WQ = new PQ;
        return wQ.s.FromArrayToRef(QQ[0], 0, WQ.x), wQ.s.FromArrayToRef(QQ[1], 0, WQ.y), wQ.s.FromArrayToRef(QQ[2], 0, WQ.z), wQ.s.FromArrayToRef(QQ[3], 0, WQ.xx), wQ.s.FromArrayToRef(QQ[4], 0, WQ.yy), wQ.s.FromArrayToRef(QQ[5], 0, WQ.zz), wQ.s.FromArrayToRef(QQ[6], 0, WQ.yz), wQ.s.FromArrayToRef(QQ[7], 0, WQ.zx), wQ.s.FromArrayToRef(QQ[8], 0, WQ.xy), WQ
      }
    }
  },
  40683: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => AQ,
      g: () => EQ
    });
    var wQ = XQ(40260),
      qQ = XQ(37399),
      TQ = XQ(37370),
      zQ = XQ(40404),
      sQ = XQ(40661),
      FQ = XQ(40690),
      PQ = XQ(40402),
      gQ = XQ(40561),
      JQ = XQ(40400);
    class rQ {
      constructor() {
        this._checkCollisions = !1, this._collisionMask = -1, this._collisionGroup = -1, this._surroundingMeshes = null, this._collider = null, this._oldPositionForCollisions = new TQ.s(0, 0, 0), this._diffPositionForCollisions = new TQ.s(0, 0, 0), this._collisionResponse = !0
      }
    }
    var IQ, jQ, BQ, yQ = XQ(40153),
      VQ = XQ(40337),
      DQ = XQ(40573),
      pQ = XQ(37546),
      GQ = XQ(37374),
      UQ = XQ(40496),
      bQ = XQ(38956),
      vQ = XQ(40268),
      dQ = XQ(40170),
      HQ = XQ(37418);

    function aQ(QQ, WQ) {
      return QQ - Math.floor(QQ / WQ) * WQ
    }

    function lQ(QQ, WQ, XQ) {
      QQ instanceof Float32Array ? TQ.e.FromArrayToRef(QQ, WQ, XQ) : XQ.XQQ((0, VQ.d)(QQ[WQ]), (0, VQ.d)(QQ[WQ + 1]), (0, VQ.d)(QQ[WQ + 2]), (0, VQ.d)(QQ[WQ + 3]), (0, VQ.d)(QQ[WQ + 4]), (0, VQ.d)(QQ[WQ + 5]), (0, VQ.d)(QQ[WQ + 6]), (0, VQ.d)(QQ[WQ + 7]), (0, VQ.d)(QQ[WQ + 8]), (0, VQ.d)(QQ[WQ + 9]), (0, VQ.d)(QQ[WQ + 10]), (0, VQ.d)(QQ[WQ + 11]), (0, VQ.d)(QQ[WQ + 12]), (0, VQ.d)(QQ[WQ + 13]), (0, VQ.d)(QQ[WQ + 14]), (0, VQ.d)(QQ[WQ + 15]))
    }

    function hQ(QQ, WQ, XQ, wQ, qQ, sQ, FQ, PQ, gQ) {
      const JQ = XQ.texture,
        rQ = JQ?.getInternalTexture(),
        IQ = rQ?._bufferView;
      if (!(IQ instanceof Float32Array) && !(IQ instanceof Uint16Array)) return bQ.b.Warn("Baked vertex animation bounding info requires CPU-readable Float32Array or Uint16Array texture data.", 1), !1;
      const jQ = JQ.getSize(),
        BQ = function(QQ, WQ) {
          const XQ = QQ.y - QQ.x + 1,
            wQ = WQ * QQ.w / XQ,
            qQ = wQ < 1 ? 0 : 1,
            TQ = XQ - qQ;
          let zQ = aQ(wQ - Math.floor(wQ), 1) * TQ;
          return zQ = aQ(zQ + QQ.z, TQ), Math.floor(zQ) + QQ.x + qQ
        }(wQ, XQ.time);
      if (!isFinite(BQ) || BQ < 0 || BQ >= jQ.height) return bQ.b.Warn("Baked vertex animation bounding info could not be refreshed because the computed frame is outside the texture.", 1), !1;
      const yQ = TQ.m.vj[0],
        VQ = TQ.m.Matrix[0],
        DQ = TQ.m.Matrix[1],
        pQ = BQ * jQ.width * 4,
        GQ = WQ === zQ.l.NormalKind ? TQ.s.TransformNormalFromFloatsToRef : TQ.s.TransformCoordinatesFromFloatsToRef;
      for (let TQ = 0, zQ = 0; TQ < QQ.length; TQ += 3, zQ += 4) {
        let WQ, XQ;
        for (VQ.reset(), WQ = 0; WQ < 4 && WQ < gQ; WQ++) XQ = sQ[zQ + WQ], XQ > 0 && (lQ(IQ, pQ + 16 * Math.floor(qQ[zQ + WQ]), DQ), DQ.scaleAndAddToRef(XQ, VQ));
        if (FQ && PQ)
          for (WQ = 0; WQ < 4 && WQ + 4 < gQ; WQ++) XQ = PQ[zQ + WQ], XQ > 0 && (lQ(IQ, pQ + 16 * Math.floor(FQ[zQ + WQ]), DQ), DQ.scaleAndAddToRef(XQ, VQ));
        GQ(QQ[TQ], QQ[TQ + 1], QQ[TQ + 2], VQ, yQ), yQ.toArray(QQ, TQ)
      }
      return !0
    }
    class iQ {
      constructor() {
        this.facetNb = 0, this.partitioningSubdivisions = 10, this.partitioningBBoxRatio = 1.01, this.facetDataEnabled = !1, this.facetParameters = {}, this.bbSize = TQ.s.Zero(), this.subDiv = {
          max: 1,
          X: 1,
          Y: 1,
          Z: 1
        }, this.facetDepthSort = !1, this.facetDepthSortEnabled = !1
      }
    }
    class cQ {
      constructor() {
        this._hasVertexAlpha = !1, this._useVertexColors = !0, this._numBoneInfluencers = 4, this._applyFog = !0, this._receiveShadows = !1, this._facetData = new iQ, this._visibility = 1, this._skeleton = null, this._layerMask = 268435455, this._computeBonesUsingShaders = !0, this._isActive = !1, this._onlyForInstances = !1, this._isActiveIntermediate = !1, this._onlyForInstancesIntermediate = !1, this._actAsRegularMesh = !1, this._currentLOD = new Map, this._collisionRetryCount = 3, this._morphTargetManager = null, this._renderingGroupId = 0, this._meshBlendingTag = 0, this._bakedVertexAnimationManager = null, this._material = null, this._positions = null, this._pointerOverDisableMeshTesting = !1, this._meshCollisionData = new rQ, this._enableDistantPicking = !1, this._rawBoundingInfo = null, this._sideOrientationHint = !1, this._wasActiveLastFrame = !1
      }
    }
    let AQ = (() => {
        var QQ;
        let WQ, rQ = FQ.d,
          IQ = [];
        return QQ = class extends rQ {
          static get BILLBOARDMODE_NONE() {
            return FQ.d.BILLBOARDMODE_NONE
          }
          static get BILLBOARDMODE_X() {
            return FQ.d.BILLBOARDMODE_X
          }
          static get BILLBOARDMODE_Y() {
            return FQ.d.BILLBOARDMODE_Y
          }
          static get BILLBOARDMODE_Z() {
            return FQ.d.BILLBOARDMODE_Z
          }
          static get BILLBOARDMODE_ALL() {
            return FQ.d.BILLBOARDMODE_ALL
          }
          static get BILLBOARDMODE_USE_POSITION() {
            return FQ.d.BILLBOARDMODE_USE_POSITION
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
          set Xr(QQ) {
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
            const WQ = this._internalAbstractMeshDataInfo._visibility;
            this._internalAbstractMeshDataInfo._visibility = QQ, (1 === WQ && 1 !== QQ || 1 !== WQ && 1 === QQ) && this._markSubMeshesAsDirty((QQ => {
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
            this._internalAbstractMeshDataInfo._material !== QQ && (this._internalAbstractMeshDataInfo._material && this._internalAbstractMeshDataInfo._material.meshMap && (this._internalAbstractMeshDataInfo._material.meshMap[this.uniqueId] = void 0), this._internalAbstractMeshDataInfo._material = QQ, QQ && QQ.meshMap && (QQ.meshMap[this.uniqueId] = this), this.onMaterialChangedObservable.hasObservers() && this.onMaterialChangedObservable.notifyObservers(this), this.ZD && (this.resetDrawCache(void 0, null == QQ), this._unBindEffect()))
          }
          getMaterialForRenderPass(QQ) {
            return this._internalAbstractMeshDataInfo._materialForRenderPass?.[QQ]
          }
          setMaterialForRenderPass(QQ, WQ) {
            this.resetDrawCache(QQ), this._internalAbstractMeshDataInfo._materialForRenderPass || (this._internalAbstractMeshDataInfo._materialForRenderPass = []);
            const XQ = this._internalAbstractMeshDataInfo._materialForRenderPass[QQ];
            XQ?.meshMap?.[this.uniqueId] && (XQ.meshMap[this.uniqueId] = void 0), this._internalAbstractMeshDataInfo._materialForRenderPass[QQ] = WQ, WQ && WQ.meshMap && (WQ.meshMap[this.uniqueId] = this)
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
            const WQ = this._internalAbstractMeshDataInfo._skeleton;
            WQ && WQ.needInitialSkinMatrix && WQ._unregisterMeshWithPoseMatrix(this), QQ && QQ.needInitialSkinMatrix && QQ._registerMeshWithPoseMatrix(this), this._internalAbstractMeshDataInfo._skeleton = QQ, this._internalAbstractMeshDataInfo._skeleton || (this._bonesTransformMatrices = null), this._markSubMeshesAsAttributesDirty()
          }
          get skeleton() {
            return this._internalAbstractMeshDataInfo._skeleton
          }
          constructor(WQ) {
            var XQ;
            let wQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            switch (super(WQ, wQ, !1), XQ = this, this._internalAbstractMeshDataInfo = new cQ, this._waitingMaterialId = null, this._waitingMorphTargetManagerId = null, this._waitingSkeletonId = null, this._waitingSkeletonUniqueId = null, this.cullingStrategy = QQ.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY, this.onCollideObservable = new qQ.b, this.onCollisionPositionChangeObservable = new qQ.b, this.onMaterialChangedObservable = new qQ.b, this.definedFacingForward = !0, this._occlusionQuery = null, this._renderingGroup = null, this.alphaIndex = Number.MAX_VALUE, this.RB = QQ.DefaultIsPickable, this.isNearPickable = !1, this.isNearGrabbable = !1, this.showSubMeshesBoundingBox = !1, this.isBlocker = !1, this.enablePointerMoveEvents = !1, this.outlineColor = pQ.b.Red(), this.outlineWidth = .02, this.overlayColor = pQ.b.Red(), this.overlayAlpha = .5, this.useOctreeForRenderingSelection = !0, this.useOctreeForPicking = !0, this.useOctreeForCollisions = !0, this.bj = !1, this.aj = !1, this.actionManager = null, this.ellipsoid = new TQ.s(.5, 1, .5), this.ellipsoidOffset = new TQ.s(0, 0, 0), this.edgesWidth = 1, this.edgesColor = new pQ.d(1, 0, 0, 1), this._edgesRenderer = null, this._masterMesh = null, this._boundingInfo = null, this._boundingInfoIsDirty = !0, this._renderId = 0, this._intersectionsInProgress = new Array, this._unIndexed = !1, this._lightSources = new Array, this._waitingData = {
                lods: null,
                actions: null,
                uE: null
              }, this._bonesTransformMatrices = null, this._transformMatrixTexture = null, this.onRebuildObservable = new qQ.b, this._onCollisionPositionChange = function(QQ, WQ) {
                let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                WQ.subtractToRef(XQ._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions, XQ._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions), XQ._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions.length() > dQ.d.CollisionsEpsilon && XQ.position.addInPlace(XQ._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions), wQ && XQ.onCollideObservable.notifyObservers(wQ), XQ.onCollisionPositionChangeObservable.notifyObservers(XQ.position)
              }, wQ = this.sE(), this.layerMask = wQ.defaultRenderableLayerMask, wQ.hwQ(this), this._resyncLightSources(), this._uniformBuffer = new JQ.c(this.sE().Uj(), void 0, void 0, WQ, !this.sE().Uj().isWebGPU), this._buildUniformLayout(), wQ.performancePriority) {
              case 2:
                this.aj = !0;
              case 1:
                this.bj = !0, this.RB = !1
            }
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("world", 16), this._uniformBuffer.addUniform("visibility", 1), this._uniformBuffer.create()
          }
          transferToEffect(QQ) {
            const WQ = this._uniformBuffer;
            WQ.N_("world", QQ), WQ.updateFloat("visibility", this._internalAbstractMeshDataInfo._visibility), WQ.update()
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
            let WQ = "Name: " + this.name + ", isInstance: " + ("InstancedMesh" === this.getClassName() ? "YES" : "NO");
            WQ += ", # of submeshes: " + (this.ZD ? this.ZD.length : 0);
            const XQ = this._internalAbstractMeshDataInfo._skeleton;
            return XQ && (WQ += ", skeleton: " + XQ.name), QQ && (WQ += ", billboard mode: " + ["NONE", "X", "Y", null, "Z", null, null, "ALL"][this.billboardMode], WQ += ", freeze wrld mat: " + (this._isWorldMatrixFrozen || this._waitingData.uE ? "YES" : "NO")), WQ
          }
          _getEffectiveParent() {
            return this._masterMesh && this.billboardMode !== FQ.d.BILLBOARDMODE_NONE ? this._masterMesh : super._getEffectiveParent()
          }
          _getActionManagerForTrigger(QQ) {
            let WQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            if (this.actionManager && (WQ || this.actionManager.isRecursive)) {
              if (!QQ) return this.actionManager;
              if (this.actionManager.hasSpecificTrigger(QQ)) return this.actionManager
            }
            return this.parent ? this.parent._getActionManagerForTrigger(QQ, !1) : null
          }
          _releaseRenderPassId(QQ) {}
          _rebuild() {
            if (this.onRebuildObservable.notifyObservers(this), null !== this._occlusionQuery && (this._occlusionQuery = null), this.ZD) {
              for (const QQ of this.ZD) QQ._rebuild();
              this.resetDrawCache()
            }
          }
          _resyncLightSources() {
            this._lightSources.length = 0;
            for (const QQ of this.sE().lights) QQ.isEnabled() && QQ.canAffectMesh(this) && this._lightSources.push(QQ);
            this._markSubMeshesAsLightDirty()
          }
          _resyncLightSource(QQ) {
            const WQ = QQ.isEnabled() && QQ.canAffectMesh(this),
              XQ = this._lightSources.indexOf(QQ);
            let wQ = !1;
            if (-1 === XQ) {
              if (!WQ) return;
              this._lightSources.push(QQ)
            } else {
              if (WQ) return;
              wQ = !0, this._lightSources.splice(XQ, 1)
            }
            this._markSubMeshesAsLightDirty(wQ)
          }
          _unBindEffect() {
            for (const QQ of this.ZD) QQ.setEffect(null)
          }
          _removeLightSource(QQ, WQ) {
            const XQ = this._lightSources.indexOf(QQ); - 1 !== XQ && (this._lightSources.splice(XQ, 1), this._markSubMeshesAsLightDirty(WQ))
          }
          _markSubMeshesAsDirty(QQ) {
            if (this.ZD)
              for (const WQ of this.ZD)
                for (let XQ = 0; XQ < WQ._drawWrappers.length; ++XQ) {
                  const wQ = WQ._drawWrappers[XQ];
                  wQ && wQ.defines && wQ.defines.markAllAsDirty && QQ(wQ.defines)
                }
          }
          _markSubMeshesAsLightDirty() {
            let QQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            this._markSubMeshesAsDirty((WQ => WQ.markAsLightDirty(QQ)))
          }
          _markSubMeshesAsAttributesDirty() {
            this._markSubMeshesAsDirty((QQ => QQ.markAsAttributesDirty()))
          }
          _markSubMeshesAsMiscDirty() {
            this._markSubMeshesAsDirty((QQ => QQ.markAsMiscDirty()))
          }
          KWQ(QQ) {
            return this._currentRenderId = Number.MAX_VALUE, super.KWQ(QQ), this._isDirty = !0, this
          }
          resetDrawCache(QQ) {
            let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (this.ZD)
              for (const XQ of this.ZD) XQ.resetDrawCache(QQ, WQ)
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
          lwQ() {
            return null
          }
          getVerticesData(QQ) {
            return null
          }
          setVerticesData(QQ, WQ, XQ, wQ) {
            return this
          }
          updateVerticesData(QQ, WQ, XQ, wQ) {
            return this
          }
          setIndices(QQ, WQ) {
            return this
          }
          isVerticesDataPresent(QQ) {
            return !1
          }
          uC() {
            return this._masterMesh ? this._masterMesh.uC() : (this._boundingInfoIsDirty && (this._boundingInfoIsDirty = !1, this._updateBoundingInfo()), this._boundingInfo)
          }
          getRawBoundingInfo() {
            return this.rawBoundingInfo ?? this.uC()
          }
          setBoundingInfo(QQ) {
            return this._boundingInfo = QQ, this
          }
          get hasBoundingInfo() {
            return null !== this._boundingInfo
          }
          buildBoundingInfo(QQ, WQ, XQ) {
            return this._boundingInfo = new gQ.e(QQ, WQ, XQ), this._boundingInfo
          }
          normalizeToUnitCube() {
            let QQ = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
              WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              XQ = arguments.length > 2 ? arguments[2] : void 0;
            return super.normalizeToUnitCube(QQ, WQ, XQ)
          }
          get useBones() {
            return this.skeleton && this.sE().skeletonsEnabled && this.isVerticesDataPresent(zQ.l.MatricesIndicesKind) && this.isVerticesDataPresent(zQ.l.MatricesWeightsKind)
          }
          _preActivate() {}
          _preActivateForIntermediateRendering(QQ) {}
          _activate(QQ, WQ) {
            return this._renderId = QQ, !0
          }
          _postActivate() {}
          _freeze() {}
          _unFreeze() {}
          getWorldMatrix() {
            return this._masterMesh && this.billboardMode === FQ.d.BILLBOARDMODE_NONE ? this._masterMesh.getWorldMatrix() : super.getWorldMatrix()
          }
          _getWorldMatrixDeterminant() {
            return this._masterMesh ? this._masterMesh._getWorldMatrixDeterminant() : super._getWorldMatrixDeterminant()
          }
          get pE() {
            return !1
          }
          get UqQ() {
            return !1
          }
          get hasThinInstances() {
            return !1
          }
          movePOV(QQ, WQ, XQ) {
            return this.position.addInPlace(this.calcMovePOV(QQ, WQ, XQ)), this
          }
          calcMovePOV(QQ, WQ, XQ) {
            const wQ = new TQ.e;
            (this.rotationQuaternion ? this.rotationQuaternion : TQ.h.RotationYawPitchRoll(this.rotation.y, this.rotation.x, this.rotation.z)).toRotationMatrix(wQ);
            const qQ = TQ.s.Zero(),
              zQ = this.definedFacingForward ? -1 : 1;
            return TQ.s.TransformCoordinatesFromFloatsToRef(QQ * zQ, WQ, XQ * zQ, wQ, qQ), qQ
          }
          rotatePOV(QQ, WQ, XQ) {
            return this.rotation.addInPlace(this.calcRotatePOV(QQ, WQ, XQ)), this
          }
          calcRotatePOV(QQ, WQ, XQ) {
            const wQ = this.definedFacingForward ? 1 : -1;
            return new TQ.s(QQ * wQ, WQ, XQ * wQ)
          }
          _refreshBoundingInfo(QQ, WQ) {
            if (QQ) {
              const XQ = (0, DQ.c)(QQ, 0, this.getTotalVertices(), WQ);
              this._boundingInfo ? this._boundingInfo.reConstruct(XQ.minimum, XQ.maximum) : this._boundingInfo = new gQ.e(XQ.minimum, XQ.maximum)
            }
            if (this.ZD)
              for (let XQ = 0; XQ < this.ZD.length; XQ++) this.ZD[XQ].refreshBoundingInfo(QQ);
            this._updateBoundingInfo()
          }
          _refreshBoundingInfoDirect(QQ) {
            if (this._boundingInfo ? this._boundingInfo.reConstruct(QQ.minimum, QQ.maximum) : this._boundingInfo = new gQ.e(QQ.minimum, QQ.maximum), this.ZD)
              for (let WQ = 0; WQ < this.ZD.length; WQ++) this.ZD[WQ].refreshBoundingInfo(null);
            this._updateBoundingInfo()
          }
          static _ApplySkeleton(QQ, WQ, XQ, wQ, qQ, sQ, FQ) {
            ! function(QQ, WQ, XQ, wQ, qQ, sQ, FQ) {
              const PQ = TQ.m.vj[0],
                gQ = TQ.m.Matrix[0],
                JQ = TQ.m.Matrix[1],
                rQ = WQ === zQ.l.NormalKind ? TQ.s.TransformNormalFromFloatsToRef : TQ.s.TransformCoordinatesFromFloatsToRef;
              for (let zQ = 0, IQ = 0; zQ < QQ.length; zQ += 3, IQ += 4) {
                let WQ, jQ;
                for (gQ.reset(), WQ = 0; WQ < 4; WQ++) jQ = qQ[IQ + WQ], jQ > 0 && (TQ.e.FromFloat32ArrayToRefScaled(XQ, Math.floor(16 * wQ[IQ + WQ]), jQ, JQ), gQ.addToSelf(JQ));
                if (sQ && FQ)
                  for (WQ = 0; WQ < 4; WQ++) jQ = FQ[IQ + WQ], jQ > 0 && (TQ.e.FromFloat32ArrayToRefScaled(XQ, Math.floor(16 * sQ[IQ + WQ]), jQ, JQ), gQ.addToSelf(JQ));
                rQ(QQ[zQ], QQ[zQ + 1], QQ[zQ + 2], gQ, PQ), PQ.toArray(QQ, zQ)
              }
            }(QQ, WQ, XQ, wQ, qQ, sQ, FQ)
          }
          _getData(WQ, XQ) {
            let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : zQ.l.PositionKind;
            const qQ = WQ.cache,
              sQ = QQ => {
                if (qQ) {
                  const WQ = qQ._vertexData || (qQ._vertexData = {});
                  return WQ[QQ] || this.copyVerticesData(QQ, WQ), WQ[QQ]
                }
                return this.getVerticesData(QQ)
              };
            if (XQ || (XQ = sQ(wQ)), !XQ) return null;
            qQ ? (qQ._outputData ? qQ._outputData.set(XQ) : qQ._outputData = new Float32Array(XQ), XQ = qQ._outputData) : (WQ.applyMorph && this.morphTargetManager || WQ.applySkeleton && this.skeleton || WQ.applyBakedVertexAnimation && this.bakedVertexAnimationManager?.isEnabled) && (XQ = XQ.slice()), WQ.applyMorph && this.morphTargetManager && function(QQ, WQ, XQ) {
              let wQ;
              switch (WQ) {
                case zQ.l.PositionKind:
                  wQ = QQ => QQ.getPositions();
                  break;
                case zQ.l.NormalKind:
                  wQ = QQ => QQ.getNormals();
                  break;
                case zQ.l.TangentKind:
                  wQ = QQ => QQ.getTangents();
                  break;
                case zQ.l.UVKind:
                  wQ = QQ => QQ.getUVs();
                  break;
                case zQ.l.UV2Kind:
                  wQ = QQ => QQ.getUV2s();
                  break;
                case zQ.l.ColorKind:
                  wQ = QQ => QQ.getColors();
                  break;
                default:
                  return
              }
              for (let qQ = 0; qQ < QQ.length; qQ++) {
                let WQ = QQ[qQ];
                for (let TQ = 0; TQ < XQ.numTargets; TQ++) {
                  const zQ = XQ.getTarget(TQ),
                    sQ = zQ.influence;
                  if (0 !== sQ) {
                    const XQ = wQ(zQ);
                    XQ && (WQ += (XQ[qQ] - QQ[qQ]) * sQ)
                  }
                }
                QQ[qQ] = WQ
              }
            }(XQ, wQ, this.morphTargetManager);
            const FQ = this.bakedVertexAnimationManager;
            let PQ = !1;
            if (WQ.applyBakedVertexAnimation && FQ?.isEnabled) {
              const QQ = sQ(zQ.l.MatricesIndicesKind),
                qQ = sQ(zQ.l.MatricesWeightsKind);
              if (qQ && QQ) {
                const TQ = this.numBoneInfluencers > 4,
                  gQ = TQ ? sQ(zQ.l.MatricesIndicesExtraKind) : null,
                  JQ = TQ ? sQ(zQ.l.MatricesWeightsExtraKind) : null;
                PQ = hQ(XQ, wQ, FQ, WQ.bakedVertexAnimationSettings ?? FQ.animationParameters, QQ, qQ, gQ, JQ, this.numBoneInfluencers)
              }
            }
            if (!PQ && WQ.applySkeleton && this.skeleton) {
              const WQ = sQ(zQ.l.MatricesIndicesKind),
                qQ = sQ(zQ.l.MatricesWeightsKind);
              if (qQ && WQ) {
                const TQ = this.numBoneInfluencers > 4,
                  FQ = TQ ? sQ(zQ.l.MatricesIndicesExtraKind) : null,
                  PQ = TQ ? sQ(zQ.l.MatricesWeightsExtraKind) : null,
                  gQ = this.skeleton.getTransformMatrices(this);
                QQ._ApplySkeleton(XQ, wQ, gQ, WQ, qQ, FQ, PQ)
              }
            }
            if (!1 !== WQ.updatePositionsArray && wQ === zQ.l.PositionKind) {
              const QQ = this._internalAbstractMeshDataInfo._positions || [],
                WQ = QQ.length;
              if (QQ.length = XQ.length / 3, WQ < QQ.length)
                for (let XQ = WQ; XQ < QQ.length; XQ++) QQ[XQ] = new TQ.s;
              for (let wQ = 0, qQ = 0; wQ < QQ.length; wQ++, qQ += 3) QQ[wQ].XQQ(XQ[qQ], XQ[qQ + 1], XQ[qQ + 2]);
              this._internalAbstractMeshDataInfo._positions = QQ
            }
            return XQ
          }
          getNormalsData() {
            let QQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return this._getData({
              applySkeleton: QQ,
              applyMorph: WQ,
              updatePositionsArray: !1
            }, null, zQ.l.NormalKind)
          }
          mN() {
            let QQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            return this._getData({
              applySkeleton: QQ,
              applyMorph: WQ,
              updatePositionsArray: !1
            }, XQ, zQ.l.PositionKind)
          }
          _updateBoundingInfo() {
            return this._boundingInfo ? this._boundingInfo.update(this.worldMatrixFromCache) : this._boundingInfo = new gQ.e(TQ.s.Zero(), TQ.s.Zero(), this.worldMatrixFromCache), this._updateSubMeshesBoundingInfo(this.worldMatrixFromCache), this
          }
          _updateSubMeshesBoundingInfo(QQ) {
            if (!this.ZD) return this;
            const WQ = this.ZD.length;
            for (let XQ = 0; XQ < WQ; XQ++) {
              const wQ = this.ZD[XQ];
              (WQ > 1 || !wQ.IsGlobal) && wQ.updateBoundingInfo(QQ)
            }
            return this
          }
          _afterComputeWorldMatrix() {
            this.aj || (this._boundingInfoIsDirty = !0)
          }
          isInFrustum(QQ) {
            return this.uC().isInFrustum(QQ, this.cullingStrategy)
          }
          isCompletelyInFrustum(QQ) {
            return this.uC().isCompletelyInFrustum(QQ)
          }
          BqQ(QQ) {
            let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              XQ = arguments.length > 2 ? arguments[2] : void 0;
            const wQ = this.uC(),
              qQ = QQ.uC();
            if (wQ.intersects(qQ, WQ)) return !0;
            if (XQ)
              for (const TQ of this.getChildMeshes())
                if (TQ.BqQ(QQ, WQ, !0)) return !0;
            return !1
          }
          intersectsPoint(QQ) {
            return this.uC().intersectsPoint(QQ)
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
            let WQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            this.getAbsolutePosition().addToRef(this.ellipsoidOffset, this._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions);
            const XQ = this.sE().collisionCoordinator;
            return this._internalAbstractMeshDataInfo._meshCollisionData._collider || (this._internalAbstractMeshDataInfo._meshCollisionData._collider = XQ.createCollider()), this._internalAbstractMeshDataInfo._meshCollisionData._collider._radius = this.ellipsoid, XQ.getNewPosition(this._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions, QQ, this._internalAbstractMeshDataInfo._meshCollisionData._collider, this.collisionRetryCount, this, this._onCollisionPositionChange, this.uniqueId, WQ), this
          }
          _collideForSubMesh(QQ, WQ, XQ) {
            if (this._generatePointsArray(), !this._positions) return this;
            if (!QQ._lastColliderWorldVertices || !QQ._lastColliderTransformMatrix.equals(WQ)) {
              QQ._lastColliderTransformMatrix = WQ.clone(), QQ._lastColliderWorldVertices = [], QQ._trianglePlanes = [];
              const XQ = QQ.verticesStart,
                wQ = QQ.verticesStart + QQ.verticesCount;
              for (let qQ = XQ; qQ < wQ; qQ++) QQ._lastColliderWorldVertices.push(TQ.s.TransformCoordinates(this._positions[qQ], WQ))
            }
            return XQ._collide(QQ._trianglePlanes, QQ._lastColliderWorldVertices, this.lwQ(), QQ.indexStart, QQ.indexStart + QQ.indexCount, QQ.verticesStart, !!QQ.lj(), this, this._shouldConvertRHS(), 7 === QQ.lj()?.fillMode), this
          }
          _processCollisionsForSubMeshes(QQ, WQ) {
            const XQ = this._scene.getCollidingSubMeshCandidates(this, QQ),
              wQ = XQ.length;
            for (let qQ = 0; qQ < wQ; qQ++) {
              const TQ = XQ.data[qQ];
              wQ > 1 && !TQ._checkCollision(QQ) || this._collideForSubMesh(TQ, WQ, QQ)
            }
            return this
          }
          _shouldConvertRHS() {
            return !1
          }
          _checkCollision(QQ) {
            if (!this.uC()._checkCollision(QQ)) return this;
            const WQ = TQ.m.Matrix[0],
              XQ = TQ.m.Matrix[1];
            return TQ.e.ScalingToRef(1 / QQ._radius.x, 1 / QQ._radius.y, 1 / QQ._radius.z, WQ), this.worldMatrixFromCache.multiplyToRef(WQ, XQ), this._processCollisionsForSubMeshes(QQ, XQ), this
          }
          _generatePointsArray() {
            return !1
          }
          intersects(QQ, WQ, XQ) {
            let wQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              qQ = arguments.length > 4 ? arguments[4] : void 0,
              zQ = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
            const sQ = new PQ.b,
              FQ = this.getClassName(),
              gQ = "InstancedLinesMesh" === FQ || "LinesMesh" === FQ || "GreasedLineMesh" === FQ ? this.intersectionThreshold : 0,
              JQ = this.uC();
            if (!this.ZD) return sQ;
            if (!zQ && (!QQ.intersectsSphere(JQ.mwQ, gQ) || !QQ.intersectsBox(JQ.boundingBox, gQ))) return sQ;
            if (wQ) return sQ.hit = !zQ, sQ.pickedMesh = zQ ? null : this, sQ.distance = zQ ? 0 : TQ.s.Distance(QQ.origin, JQ.mwQ.center), sQ.subMeshId = 0, sQ;
            if (!this._generatePointsArray()) return sQ;
            let rQ = null;
            const IQ = this._scene.getIntersectingSubMeshCandidates(this, QQ),
              jQ = IQ.length;
            let BQ = !1;
            for (let TQ = 0; TQ < jQ; TQ++) {
              const QQ = IQ.data[TQ].lj();
              if (QQ && (7 == QQ.fillMode || 0 == QQ.fillMode || 1 == QQ.fillMode || 2 == QQ.fillMode || 4 == QQ.fillMode)) {
                BQ = !0;
                break
              }
            }
            if (!BQ) return sQ.hit = !0, sQ.pickedMesh = this, sQ.distance = TQ.s.Distance(QQ.origin, JQ.mwQ.center), sQ.subMeshId = -1, sQ;
            for (let TQ = 0; TQ < jQ; TQ++) {
              const wQ = IQ.data[TQ];
              if (jQ > 1 && !zQ && !wQ.canIntersects(QQ)) continue;
              const qQ = wQ.intersects(QQ, this._positions, this.lwQ(), WQ, XQ);
              if (qQ && (WQ || !rQ || qQ.distance < rQ.distance) && (rQ = qQ, rQ.subMeshId = wQ._id, rQ._internalSubMeshId = TQ, WQ)) break
            }
            if (rQ) {
              const WQ = qQ ?? this.getWorldMatrix(),
                XQ = TQ.m.vj[0],
                wQ = TQ.m.vj[1];
              TQ.s.TransformCoordinatesToRef(QQ.origin, WQ, XQ), QQ.direction.scaleToRef(rQ.distance, wQ);
              const zQ = TQ.s.TransformNormal(wQ, WQ).addInPlace(XQ);
              return sQ.hit = !0, sQ.distance = TQ.s.Distance(XQ, zQ), sQ.pickedPoint = zQ, sQ.pickedMesh = this, sQ.bu = rQ.bu || 0, sQ.bv = rQ.bv || 0, sQ.subMeshFaceId = rQ.faceId, sQ.faceId = rQ.faceId + IQ.data[rQ._internalSubMeshId].indexStart / (-1 !== this.getClassName().indexOf("LinesMesh") ? 2 : 3), sQ.subMeshId = rQ.subMeshId, sQ
            }
            return sQ
          }
          clone(QQ, WQ, XQ) {
            return null
          }
          releaseSubMeshes() {
            let QQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (this.ZD)
              for (; this.ZD.length;) this.ZD[0].dispose(QQ);
            else this.ZD = [];
            return this
          }
          dispose(QQ) {
            let WQ, XQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            const wQ = this.sE();
            for (this._scene.useMaterialMeshMap && this._internalAbstractMeshDataInfo._material && this._internalAbstractMeshDataInfo._material.meshMap && (this._internalAbstractMeshDataInfo._material.meshMap[this.uniqueId] = void 0), wQ.freeActiveMeshes(), wQ.freeRenderingGroups(), wQ.renderingManager.maintainStateBetweenFrames && wQ.renderingManager.restoreDispachedFlags(), void 0 !== this.actionManager && null !== this.actionManager && (this.actionManager.disposeWhenUnowned && !this._scene.meshes.some((QQ => QQ !== this && QQ.actionManager === this.actionManager)) && this.actionManager.dispose(), this.actionManager = null), this._internalAbstractMeshDataInfo._skeleton = null, this._transformMatrixTexture && (this._transformMatrixTexture.dispose(), this._transformMatrixTexture = null), WQ = 0; WQ < this._intersectionsInProgress.length; WQ++) {
              const QQ = this._intersectionsInProgress[WQ],
                XQ = QQ._intersectionsInProgress.indexOf(this);
              QQ._intersectionsInProgress.splice(XQ, 1)
            }
            this._intersectionsInProgress.length = 0;
            const qQ = wQ.lights;
            for (const zQ of qQ) {
              let QQ = zQ.includedOnlyMeshes.indexOf(this); - 1 !== QQ && zQ.includedOnlyMeshes.splice(QQ, 1), QQ = zQ.excludedMeshes.indexOf(this), -1 !== QQ && zQ.excludedMeshes.splice(QQ, 1);
              const WQ = zQ.getShadowGenerators();
              if (WQ) {
                const XQ = WQ.values();
                for (let WQ = XQ.next(); !0 !== WQ.done; WQ = XQ.next()) {
                  const XQ = WQ.value.getShadowMap();
                  XQ && XQ.renderList && (QQ = XQ.renderList.indexOf(this), -1 !== QQ && XQ.renderList.splice(QQ, 1))
                }
              }
            }
            this.releaseSubMeshes(wQ._isDisposing);
            const TQ = wQ.Uj();
            if (null !== this._occlusionQuery && (this.isOcclusionQueryInProgress = !1, TQ.deleteQuery(this._occlusionQuery), this._occlusionQuery = null), TQ.wipeCaches(), wQ.ZE(this), this._parentContainer) {
              const QQ = this._parentContainer.meshes.indexOf(this);
              QQ > -1 && this._parentContainer.meshes.splice(QQ, 1), this._parentContainer = null
            }
            if (XQ && this.material && ("MultiMaterial" === this.material.getClassName() ? this.material.dispose(!1, !0, !0) : this.material.dispose(!1, !0)), !QQ)
              for (WQ = 0; WQ < wQ.KD.length; WQ++) wQ.KD[WQ].emitter === this && (wQ.KD[WQ].dispose(), WQ--);
            this._internalAbstractMeshDataInfo._facetData.facetDataEnabled && this.disableFacetData(), this._uniformBuffer.dispose(), this.onAfterWorldMatrixUpdateObservable.clear(), this.onCollideObservable.clear(), this.onCollisionPositionChangeObservable.clear(), this.onRebuildObservable.clear(), super.dispose(QQ, XQ)
          }
          _initFacetData() {
            const QQ = this._internalAbstractMeshDataInfo._facetData;
            QQ.facetNormals || (QQ.facetNormals = []), QQ.facetPositions || (QQ.facetPositions = []), QQ.facetPartitioning || (QQ.facetPartitioning = new Array), QQ.facetNb = this.lwQ().length / 3 | 0, QQ.partitioningSubdivisions = QQ.partitioningSubdivisions ? QQ.partitioningSubdivisions : 10, QQ.partitioningBBoxRatio = QQ.partitioningBBoxRatio ? QQ.partitioningBBoxRatio : 1.01;
            for (let WQ = 0; WQ < QQ.facetNb; WQ++) QQ.facetNormals[WQ] = TQ.s.Zero(), QQ.facetPositions[WQ] = TQ.s.Zero();
            return QQ.facetDataEnabled = !0, this
          }
          updateFacetData() {
            const QQ = this._internalAbstractMeshDataInfo._facetData;
            QQ.facetDataEnabled || this._initFacetData();
            const WQ = this.getVerticesData(zQ.l.PositionKind),
              XQ = this.lwQ(),
              wQ = this.getVerticesData(zQ.l.NormalKind)?.slice(),
              qQ = this.uC();
            if (QQ.facetDepthSort && !QQ.facetDepthSortEnabled) {
              if (QQ.facetDepthSortEnabled = !0, XQ instanceof Uint16Array) QQ.depthSortedIndices = new Uint16Array(XQ);
              else if (XQ instanceof Uint32Array) QQ.depthSortedIndices = new Uint32Array(XQ);
              else {
                let WQ = !1;
                for (let QQ = 0; QQ < XQ.length; QQ++)
                  if (XQ[QQ] > 65535) {
                    WQ = !0;
                    break
                  } QQ.depthSortedIndices = WQ ? new Uint32Array(XQ) : new Uint16Array(XQ)
              }
              if (QQ.facetDepthSortFunction = function(QQ, WQ) {
                  return WQ.sqDistance - QQ.sqDistance
                }, !QQ.facetDepthSortFrom) {
                const WQ = this.sE().activeCamera;
                QQ.facetDepthSortFrom = WQ ? WQ.position : TQ.s.Zero()
              }
              QQ.depthSortedFacets = [];
              for (let WQ = 0; WQ < QQ.facetNb; WQ++) {
                const XQ = {
                  ind: 3 * WQ,
                  sqDistance: 0
                };
                QQ.depthSortedFacets.push(XQ)
              }
              QQ.invertedMatrix = TQ.e.Identity(), QQ.facetDepthSortOrigin = TQ.s.Zero()
            }
            QQ.bbSize.x = qQ.maximum.x - qQ.minimum.x > GQ.b ? qQ.maximum.x - qQ.minimum.x : GQ.b, QQ.bbSize.y = qQ.maximum.y - qQ.minimum.y > GQ.b ? qQ.maximum.y - qQ.minimum.y : GQ.b, QQ.bbSize.z = qQ.maximum.z - qQ.minimum.z > GQ.b ? qQ.maximum.z - qQ.minimum.z : GQ.b;
            let FQ = QQ.bbSize.x > QQ.bbSize.y ? QQ.bbSize.x : QQ.bbSize.y;
            if (FQ = FQ > QQ.bbSize.z ? FQ : QQ.bbSize.z, QQ.subDiv.max = QQ.partitioningSubdivisions, QQ.subDiv.X = Math.floor(QQ.subDiv.max * QQ.bbSize.x / FQ), QQ.subDiv.Y = Math.floor(QQ.subDiv.max * QQ.bbSize.y / FQ), QQ.subDiv.Z = Math.floor(QQ.subDiv.max * QQ.bbSize.z / FQ), QQ.subDiv.X = QQ.subDiv.X < 1 ? 1 : QQ.subDiv.X, QQ.subDiv.Y = QQ.subDiv.Y < 1 ? 1 : QQ.subDiv.Y, QQ.subDiv.Z = QQ.subDiv.Z < 1 ? 1 : QQ.subDiv.Z, QQ.facetParameters.facetNormals = this.getFacetLocalNormals(), QQ.facetParameters.facetPositions = this.getFacetLocalPositions(), QQ.facetParameters.facetPartitioning = this.getFacetLocalPartitioning(), QQ.facetParameters.bInfo = qQ, QQ.facetParameters.bbSize = QQ.bbSize, QQ.facetParameters.subDiv = QQ.subDiv, QQ.facetParameters.ratio = this.partitioningBBoxRatio, QQ.facetParameters.depthSort = QQ.facetDepthSort, QQ.facetDepthSort && QQ.facetDepthSortEnabled && (this.computeWorldMatrix(!0), this._worldMatrix.invertToRef(QQ.invertedMatrix), TQ.s.TransformCoordinatesToRef(QQ.facetDepthSortFrom, QQ.invertedMatrix, QQ.facetDepthSortOrigin), QQ.facetParameters.distanceTo = QQ.facetDepthSortOrigin), QQ.facetParameters.depthSortedFacets = QQ.depthSortedFacets, wQ && sQ.e.ComputeNormals(WQ, XQ, wQ, QQ.facetParameters), QQ.facetDepthSort && QQ.facetDepthSortEnabled) {
              QQ.depthSortedFacets.sort(QQ.facetDepthSortFunction);
              const WQ = QQ.depthSortedIndices.length / 3 | 0;
              for (let wQ = 0; wQ < WQ; wQ++) {
                const WQ = QQ.depthSortedFacets[wQ].ind;
                QQ.depthSortedIndices[3 * wQ] = XQ[WQ], QQ.depthSortedIndices[3 * wQ + 1] = XQ[WQ + 1], QQ.depthSortedIndices[3 * wQ + 2] = XQ[WQ + 2]
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
            const WQ = TQ.s.Zero();
            return this.getFacetPositionToRef(QQ, WQ), WQ
          }
          getFacetPositionToRef(QQ, WQ) {
            const XQ = this.getFacetLocalPositions()[QQ],
              wQ = this.getWorldMatrix();
            return TQ.s.TransformCoordinatesToRef(XQ, wQ, WQ), this
          }
          getFacetNormal(QQ) {
            const WQ = TQ.s.Zero();
            return this.getFacetNormalToRef(QQ, WQ), WQ
          }
          getFacetNormalToRef(QQ, WQ) {
            const XQ = this.getFacetLocalNormals()[QQ];
            return TQ.s.TransformNormalToRef(XQ, this.getWorldMatrix(), WQ), this
          }
          getFacetsAtLocalCoordinates(QQ, WQ, XQ) {
            const wQ = this.uC(),
              qQ = this._internalAbstractMeshDataInfo._facetData,
              TQ = Math.floor((QQ - wQ.minimum.x * qQ.partitioningBBoxRatio) * qQ.subDiv.X * qQ.partitioningBBoxRatio / qQ.bbSize.x),
              zQ = Math.floor((WQ - wQ.minimum.y * qQ.partitioningBBoxRatio) * qQ.subDiv.Y * qQ.partitioningBBoxRatio / qQ.bbSize.y),
              sQ = Math.floor((XQ - wQ.minimum.z * qQ.partitioningBBoxRatio) * qQ.subDiv.Z * qQ.partitioningBBoxRatio / qQ.bbSize.z);
            return TQ < 0 || TQ > qQ.subDiv.max || zQ < 0 || zQ > qQ.subDiv.max || sQ < 0 || sQ > qQ.subDiv.max ? null : qQ.facetPartitioning[TQ + qQ.subDiv.max * zQ + qQ.subDiv.max * qQ.subDiv.max * sQ]
          }
          getClosestFacetAtCoordinates(QQ, WQ, XQ, wQ) {
            let qQ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              zQ = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
            const sQ = this.getWorldMatrix(),
              FQ = TQ.m.Matrix[5];
            sQ.invertToRef(FQ);
            const PQ = TQ.m.vj[8];
            TQ.s.TransformCoordinatesFromFloatsToRef(QQ, WQ, XQ, FQ, PQ);
            const gQ = this.getClosestFacetAtLocalCoordinates(PQ.x, PQ.y, PQ.z, wQ, qQ, zQ);
            return wQ && TQ.s.TransformCoordinatesFromFloatsToRef(wQ.x, wQ.y, wQ.z, sQ, wQ), gQ
          }
          getClosestFacetAtLocalCoordinates(QQ, WQ, XQ, wQ) {
            let qQ, TQ, zQ, sQ, FQ, PQ, gQ, JQ, rQ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              IQ = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
              jQ = null;
            const BQ = this.getFacetLocalPositions(),
              yQ = this.getFacetLocalNormals(),
              VQ = this.getFacetsAtLocalCoordinates(QQ, WQ, XQ);
            if (!VQ) return null;
            let DQ, pQ, GQ, UQ, bQ = Number.MAX_VALUE;
            for (let vQ = 0; vQ < VQ.length; vQ++) pQ = VQ[vQ], GQ = yQ[pQ], UQ = BQ[pQ], sQ = (QQ - UQ.x) * GQ.x + (WQ - UQ.y) * GQ.y + (XQ - UQ.z) * GQ.z, (!rQ || rQ && IQ && sQ >= 0 || rQ && !IQ && sQ <= 0) && (sQ = GQ.x * UQ.x + GQ.y * UQ.y + GQ.z * UQ.z, FQ = -(GQ.x * QQ + GQ.y * WQ + GQ.z * XQ - sQ) / (GQ.x * GQ.x + GQ.y * GQ.y + GQ.z * GQ.z), PQ = QQ + GQ.x * FQ, gQ = WQ + GQ.y * FQ, JQ = XQ + GQ.z * FQ, qQ = PQ - QQ, TQ = gQ - WQ, zQ = JQ - XQ, DQ = qQ * qQ + TQ * TQ + zQ * zQ, DQ < bQ && (bQ = DQ, jQ = pQ, wQ && (wQ.x = PQ, wQ.y = gQ, wQ.z = JQ)));
            return jQ
          }
          getFacetDataParameters() {
            return this._internalAbstractMeshDataInfo._facetData.facetParameters
          }
          disableFacetData() {
            const QQ = this._internalAbstractMeshDataInfo._facetData;
            return QQ.facetDataEnabled && (QQ.facetDataEnabled = !1, QQ.facetPositions = [], QQ.facetNormals = [], QQ.facetPartitioning = new Array, QQ.facetParameters = {}, QQ.depthSortedIndices = new Uint32Array(0)), this
          }
          updateIndices(QQ, WQ) {
            return this
          }
          createNormals(QQ) {
            const WQ = this.getVerticesData(zQ.l.PositionKind),
              XQ = this.lwQ();
            let wQ;
            return wQ = this.isVerticesDataPresent(zQ.l.NormalKind) ? this.getVerticesData(zQ.l.NormalKind) : [], sQ.e.ComputeNormals(WQ, XQ, wQ, {
              useRightHandedSystem: this.sE().useRightHandedSystem
            }), this.setVerticesData(zQ.l.NormalKind, wQ, QQ), this
          }
          async optimizeIndicesAsync() {
            const QQ = this.lwQ();
            if (!QQ) return this;
            const {
              OptimizeIndices: WQ
            } = await XQ.e(360).then((() => XQ(42831)));
            return WQ(QQ), this.setIndices(QQ, this.getTotalVertices()), this
          }
          alignWithNormal(QQ, WQ) {
            WQ || (WQ = UQ.c.Y);
            const XQ = TQ.m.vj[0],
              wQ = TQ.m.vj[1];
            return TQ.s.CrossToRef(WQ, QQ, wQ), TQ.s.CrossToRef(QQ, wQ, XQ), this.rotationQuaternion ? TQ.h.RotationQuaternionFromAxisToRef(XQ, QQ, wQ, this.rotationQuaternion) : TQ.s.RotationFromAxisToRef(XQ, QQ, wQ, this.rotation), this
          }
          _checkOcclusionQuery() {
            return !1
          }
          disableEdgesRendering() {
            throw (0, yQ.i)("EdgesRenderer")
          }
          enableEdgesRendering(QQ, WQ, XQ) {
            throw (0, yQ.i)("EdgesRenderer")
          }
          getConnectedParticleSystems() {
            return this._scene.KD.filter((QQ => QQ.emitter === this))
          }
        }, (() => {
          const XQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(rQ[Symbol.metadata] ?? null) : void 0;
          WQ = [vQ.g.filter((function() {
            return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0]) && !Array.isArray(arguments.length <= 3 ? void 0 : arguments[3]) && !Array.isArray(arguments.length <= 4 ? void 0 : arguments[4]) && !Array.isArray(arguments.length <= 5 ? void 0 : arguments[5]) && !Array.isArray(arguments.length <= 6 ? void 0 : arguments[6])
          }))], (0, wQ.k)(QQ, null, WQ, {
            kind: "method",
            name: "_ApplySkeleton",
            static: !0,
            private: !1,
            access: {
              has: QQ => "_ApplySkeleton" in QQ,
              get: QQ => QQ._ApplySkeleton
            },
            metadata: XQ
          }, null, IQ), XQ && Object.defineProperty(QQ, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: XQ
          })
        })(), QQ.OCCLUSION_TYPE_NONE = ((0, wQ.n)(QQ, IQ), 0), QQ.OCCLUSION_TYPE_OPTIMISTIC = 1, QQ.OCCLUSION_TYPE_STRICT = 2, QQ.OCCLUSION_ALGORITHM_TYPE_ACCURATE = 0, QQ.OCCLUSION_ALGORITHM_TYPE_CONSERVATIVE = 1, QQ.CULLINGSTRATEGY_STANDARD = 0, QQ.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY = 1, QQ.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION = 2, QQ.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION_THEN_BSPHERE_ONLY = 3, QQ.DefaultIsPickable = !0, QQ
      })(),
      RQ = !1;

    function EQ() {
      RQ || (RQ = !0, (0, HQ.d)("BABYLON.AbstractMesh", AQ))
    }(IQ = AQ.prototype).createOrUpdateSubmeshesOctree ?? (IQ.createOrUpdateSubmeshesOctree = (0, yQ.h)("AbstractMesh", "createOrUpdateSubmeshesOctree")), (jQ = AQ.prototype).getPhysicsImpostor ?? (jQ.getPhysicsImpostor = (0, yQ.h)("AbstractMesh", "getPhysicsImpostor")), (BQ = AQ.prototype).setPhysicsLinkWith ?? (BQ.setPhysicsLinkWith = (0, yQ.h)("AbstractMesh", "setPhysicsLinkWith")), Object.getOwnPropertyDescriptor(AQ.prototype, "occlusionRetryCount") || Object.defineProperty(AQ.prototype, "occlusionRetryCount", (0, yQ.g)("AbstractMesh", "occlusionRetryCount")), Object.getOwnPropertyDescriptor(AQ.prototype, "occlusionType") || Object.defineProperty(AQ.prototype, "occlusionType", (0, yQ.g)("AbstractMesh", "occlusionType")), Object.getOwnPropertyDescriptor(AQ.prototype, "occlusionQueryAlgorithmType") || Object.defineProperty(AQ.prototype, "occlusionQueryAlgorithmType", (0, yQ.g)("AbstractMesh", "occlusionQueryAlgorithmType")), Object.getOwnPropertyDescriptor(AQ.prototype, "isOccluded") || Object.defineProperty(AQ.prototype, "isOccluded", (0, yQ.g)("AbstractMesh", "isOccluded")), Object.getOwnPropertyDescriptor(AQ.prototype, "isOcclusionQueryInProgress") || Object.defineProperty(AQ.prototype, "isOcclusionQueryInProgress", (0, yQ.g)("AbstractMesh", "isOcclusionQueryInProgress")), Object.getOwnPropertyDescriptor(AQ.prototype, "forceRenderingWhenOccluded") || Object.defineProperty(AQ.prototype, "forceRenderingWhenOccluded", (0, yQ.g)("AbstractMesh", "forceRenderingWhenOccluded")), Object.getOwnPropertyDescriptor(AQ.prototype, "occlusionForRenderPassId") || Object.defineProperty(AQ.prototype, "occlusionForRenderPassId", (0, yQ.g)("AbstractMesh", "occlusionForRenderPassId")), Object.getOwnPropertyDescriptor(AQ.prototype, "decalMap") || Object.defineProperty(AQ.prototype, "decalMap", (0, yQ.g)("AbstractMesh", "decalMap")), Object.getOwnPropertyDescriptor(AQ.prototype, "bC") || Object.defineProperty(AQ.prototype, "bC", (0, yQ.g)("AbstractMesh", "bC")), Object.getOwnPropertyDescriptor(AQ.prototype, "physicsImpostor") || Object.defineProperty(AQ.prototype, "physicsImpostor", (0, yQ.g)("AbstractMesh", "physicsImpostor")), Object.getOwnPropertyDescriptor(AQ.prototype, "showBoundingBox") || Object.defineProperty(AQ.prototype, "showBoundingBox", (0, yQ.g)("AbstractMesh", "showBoundingBox")), Object.getOwnPropertyDescriptor(AQ.prototype, "edgesRenderer") || Object.defineProperty(AQ.prototype, "edgesRenderer", (0, yQ.g)("AbstractMesh", "edgesRenderer")), Object.getOwnPropertyDescriptor(AQ.prototype, "renderOutline") || Object.defineProperty(AQ.prototype, "renderOutline", (0, yQ.g)("AbstractMesh", "renderOutline")), Object.getOwnPropertyDescriptor(AQ.prototype, "renderOverlay") || Object.defineProperty(AQ.prototype, "renderOverlay", (0, yQ.g)("AbstractMesh", "renderOverlay"))
  },
  40670: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => VQ
    });
    var wQ = XQ(37370),
      qQ = XQ(37546),
      TQ = XQ(40661),
      zQ = XQ(40404),
      sQ = XQ(40555),
      FQ = XQ(40676),
      PQ = XQ(40561),
      gQ = XQ(40357),
      JQ = XQ(38956),
      rQ = XQ(40290),
      IQ = XQ(40573),
      jQ = XQ(37392),
      BQ = XQ(40679),
      yQ = XQ(40331);
    class VQ {
      get boundingBias() {
        return this._boundingBias
      }
      set boundingBias(QQ) {
        this._boundingBias ? this._boundingBias.WH(QQ) : this._boundingBias = QQ.clone(), this._updateBoundingInfo(!0, null)
      }
      static CreateGeometryForMesh(QQ) {
        const WQ = new VQ(VQ.RandomId(), QQ.sE());
        return WQ.applyToMesh(QQ), WQ
      }
      get meshes() {
        return this._meshes
      }
      constructor(QQ, WQ, XQ) {
        let qQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          TQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          zQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        this.delayLoadState = 0, this._totalVertices = 0, this._isDisposed = !1, this._extend = {
          minimum: new wQ.s(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE),
          maximum: new wQ.s(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE)
        }, this._indexBufferIsUpdatable = !1, this._positionsCache = [], this._parentContainer = null, this.useBoundingInfoFromGeometry = !1, this._scene = WQ || jQ.d.LastCreatedScene, this._scene && (this.id = QQ, this.uniqueId = this._scene.getUniqueId(), this._engine = this._scene.Uj(), this._meshes = [], this._vertexBuffers = {}, this._indices = [], this._updatable = qQ, null !== zQ && (this._totalVertices = zQ), XQ ? this.setAllVerticesData(XQ, qQ) : null === zQ && (this._totalVertices = 0), this._engine.getCaps().vertexArrayObject && (this._vertexArrayObjects = {}), TQ && (this.applyToMesh(TQ), TQ.computeWorldMatrix(!0)))
      }
      get extend() {
        return this._extend
      }
      sE() {
        return this._scene
      }
      Uj() {
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
        for (const WQ in this._vertexBuffers) QQ.add(this._vertexBuffers[WQ].getWrapperBuffer());
        QQ.forEach((QQ => {
          QQ._rebuild()
        }))
      }
      setAllVerticesData(QQ, WQ) {
        QQ.applyToGeometry(this, WQ), this._notifyUpdate()
      }
      setVerticesData(QQ, WQ) {
        let XQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          wQ = arguments.length > 3 ? arguments[3] : void 0;
        XQ && Array.isArray(WQ) && (WQ = new Float32Array(WQ));
        const qQ = new zQ.l(this._engine, WQ, QQ, {
          updatable: XQ,
          postponeInternalCreation: 0 === this._meshes.length,
          stride: wQ,
          label: "Geometry_" + this.id + "_" + QQ
        });
        this.setVerticesBuffer(qQ)
      }
      removeVerticesData(QQ) {
        this._vertexBuffers[QQ] && (this._vertexBuffers[QQ].dispose(), delete this._vertexBuffers[QQ]), this._vertexArrayObjects && this._disposeVertexArrayObjects()
      }
      setVerticesBuffer(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          XQ = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        const qQ = QQ.getKind();
        this._vertexBuffers[qQ] && XQ && this._vertexBuffers[qQ].dispose(), QQ._buffer && QQ._ownsBuffer && QQ._buffer._increaseReferences(), this._vertexBuffers[qQ] = QQ;
        const TQ = this._meshes,
          sQ = TQ.length;
        if (qQ === zQ.l.PositionKind) {
          this._totalVertices = WQ ?? QQ._maxVerticesCount, this._updateExtend(this.useBoundingInfoFromGeometry && this._boundingInfo ? null : QQ.getFloatData(this._totalVertices)), this._resetPointsArrayCache();
          const XQ = this._extend && this._extend.minimum || new wQ.s(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE),
            qQ = this._extend && this._extend.maximum || new wQ.s(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
          for (let QQ = 0; QQ < sQ; QQ++) {
            const WQ = TQ[QQ];
            WQ.buildBoundingInfo(XQ, qQ), WQ._createGlobalSubMesh(WQ.isUnIndexed), WQ.computeWorldMatrix(!0), WQ.synchronizeInstances()
          }
        }
        this._notifyUpdate(qQ)
      }
      updateVerticesDataDirectly(QQ, WQ, XQ) {
        let wQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const qQ = this.getVertexBuffer(QQ);
        qQ && (qQ.updateDirectly(WQ, XQ, wQ), this._notifyUpdate(QQ))
      }
      updateVerticesData(QQ, WQ) {
        let XQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const wQ = this.getVertexBuffer(QQ);
        wQ && (wQ.update(WQ), QQ === zQ.l.PositionKind && this._updateBoundingInfo(XQ, WQ), this._notifyUpdate(QQ))
      }
      _updateBoundingInfo(QQ, WQ) {
        if (QQ && this._updateExtend(WQ), this._resetPointsArrayCache(), QQ) {
          const QQ = this._meshes;
          for (const WQ of QQ) {
            WQ.hasBoundingInfo ? WQ.uC().reConstruct(this._extend.minimum, this._extend.maximum) : WQ.buildBoundingInfo(this._extend.minimum, this._extend.maximum);
            const QQ = WQ.ZD;
            for (const WQ of QQ) WQ.refreshBoundingInfo()
          }
        }
      }
      _bind(QQ, WQ, XQ, wQ) {
        if (!QQ) return;
        void 0 === WQ && (WQ = this._indexBuffer);
        const qQ = this.getVertexBuffers();
        if (!qQ) return;
        if (WQ != this._indexBuffer || !this._vertexArrayObjects && !wQ) return void this._engine.bindBuffers(qQ, WQ, QQ, XQ);
        const TQ = wQ || this._vertexArrayObjects,
          zQ = this._engine;
        TQ[QQ.key] || (TQ[QQ.key] = zQ.recordVertexArrayObject(qQ, WQ, QQ, XQ)), zQ.bindVertexArrayObject(TQ[QQ.key], WQ)
      }
      getTotalVertices() {
        return this.isReady() ? this._totalVertices : 0
      }
      getVerticesData(QQ, WQ, XQ) {
        const wQ = this.getVertexBuffer(QQ);
        return wQ ? wQ.getFloatData(this._totalVertices, XQ || WQ && 1 !== this._meshes.length) : null
      }
      copyVerticesData(QQ, WQ) {
        const XQ = this.getVertexBuffer(QQ);
        if (!XQ) return;
        WQ[QQ] || (WQ[QQ] = new Float32Array(this._totalVertices * XQ.getSize()));
        const wQ = XQ.getData();
        wQ && (0, yQ.h)(wQ, XQ.getSize(), XQ.type, XQ.byteOffset, XQ.byteStride, XQ.normalized, this._totalVertices, WQ[QQ])
      }
      isVertexBufferUpdatable(QQ) {
        const WQ = this._vertexBuffers[QQ];
        return !!WQ && WQ.isUpdatable()
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
        let WQ;
        if (!this._vertexBuffers && this._delayInfo)
          for (WQ in this._delayInfo) QQ.push(WQ);
        else
          for (WQ in this._vertexBuffers) QQ.push(WQ);
        return QQ
      }
      updateIndices(QQ, WQ) {
        let XQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this._indexBuffer)
          if (this._indexBufferIsUpdatable) {
            const wQ = QQ.length !== this._indices.length;
            if (XQ || (this._indices = QQ.slice()), this._engine.updateDynamicIndexBuffer(this._indexBuffer, QQ, WQ), wQ)
              for (const QQ of this._meshes) QQ._createGlobalSubMesh(!0)
          } else this.setIndices(QQ, null, !0)
      }
      setIndexBuffer(QQ, WQ, XQ) {
        let wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._indices = [], this._indexBufferIsUpdatable = !1, this._indexBuffer = QQ, this._totalVertices = WQ, this._totalIndices = XQ, QQ.is32Bits = null === wQ ? WQ > 65535 : wQ;
        for (const qQ of this._meshes) qQ._createGlobalSubMesh(!0), qQ.synchronizeInstances();
        this._notifyUpdate()
      }
      setIndices(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          XQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          wQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this._indexBuffer && this._engine._releaseBuffer(this._indexBuffer), this._indices = QQ, this._indexBufferIsUpdatable = XQ, 0 !== this._meshes.length && this._indices && (this._indexBuffer = this._engine.createIndexBuffer(this._indices, XQ, "Geometry_" + this.id + "_IndexBuffer")), void 0 != WQ && (this._totalVertices = WQ);
        for (const qQ of this._meshes) qQ._createGlobalSubMesh(!wQ), qQ.synchronizeInstances();
        this._notifyUpdate()
      }
      getTotalIndices() {
        return this.isReady() ? void 0 !== this._totalIndices ? this._totalIndices : this._indices.length : 0
      }
      lwQ(QQ, WQ) {
        if (!this.isReady()) return null;
        const XQ = this._indices;
        return WQ || QQ && 1 !== this._meshes.length ? XQ.slice() : XQ
      }
      getIndexBuffer() {
        return this.isReady() ? this._indexBuffer : null
      }
      _releaseVertexArrayObject() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        QQ && this._vertexArrayObjects && this._vertexArrayObjects[QQ.key] && (this._engine.releaseVertexArrayObject(this._vertexArrayObjects[QQ.key]), delete this._vertexArrayObjects[QQ.key])
      }
      releaseForMesh(QQ, WQ) {
        const XQ = this._meshes,
          wQ = XQ.indexOf(QQ); - 1 !== wQ && (XQ.splice(wQ, 1), this._vertexArrayObjects && QQ._invalidateInstanceVertexArrayObject(), QQ._geometry = null, 0 === XQ.length && WQ && this.dispose())
      }
      applyToMesh(QQ) {
        if (QQ._geometry === this) return;
        const WQ = QQ._geometry;
        WQ && WQ.releaseForMesh(QQ), this._vertexArrayObjects && QQ._invalidateInstanceVertexArrayObject();
        const XQ = this._meshes;
        QQ._geometry = this, QQ._internalAbstractMeshDataInfo._positions = null, this._scene.pushGeometry(this), XQ.push(QQ), this.isReady() ? this._applyToMesh(QQ) : this._boundingInfo && QQ.setBoundingInfo(this._boundingInfo)
      }
      _updateExtend() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (this.useBoundingInfoFromGeometry && this._boundingInfo) this._extend = {
          minimum: this._boundingInfo.minimum.clone(),
          maximum: this._boundingInfo.maximum.clone()
        };
        else {
          if (!QQ && (QQ = this.getVerticesData(zQ.l.PositionKind), !QQ)) return;
          this._extend = (0, IQ.c)(QQ, 0, this._totalVertices, this.boundingBias, 3)
        }
      }
      _applyToMesh(QQ) {
        for (const WQ in this._vertexBuffers) {
          const XQ = this._vertexBuffers[WQ];
          XQ._buffer.getBuffer() || XQ.create(), WQ === zQ.l.PositionKind && (this._extend || this._updateExtend(), QQ.buildBoundingInfo(this._extend.minimum, this._extend.maximum), QQ._createGlobalSubMesh(QQ.isUnIndexed), QQ._updateBoundingInfo())
        }!this._indexBuffer && this._indices && this._indices.length > 0 && (this._indexBuffer = this._engine.createIndexBuffer(this._indices, this._updatable, "Geometry_" + this.id + "_IndexBuffer")), QQ._syncGeometryWithMorphTargetManager(), QQ.synchronizeInstances()
      }
      _notifyUpdate(QQ) {
        this.onGeometryUpdated && this.onGeometryUpdated(this, QQ), this._vertexArrayObjects && this._disposeVertexArrayObjects();
        for (const WQ of this._meshes) WQ._markSubMeshesAsAttributesDirty()
      }
      load(QQ, WQ) {
        2 !== this.delayLoadState && (this.isReady() ? WQ && WQ() : (this.delayLoadState = 2, this._queueLoad(QQ, WQ)))
      }
      _queueLoad(QQ, WQ) {
        this.delayLoadingFile && (QQ.addPendingData(this), (async () => {
          try {
            const XQ = await QQ._loadDelayedFileAsync(this.delayLoadingFile, !1, !0);
            if (!this._delayLoadingFunction) return void QQ.removePendingData(this);
            this._delayLoadingFunction(JSON.parse(XQ), this), this.delayLoadState = 1, this._delayInfo = [], QQ.removePendingData(this);
            const wQ = this._meshes,
              qQ = wQ.length;
            for (let QQ = 0; QQ < qQ; QQ++) this._applyToMesh(wQ[QQ]);
            WQ && WQ()
          } catch (XQ) {
            QQ.removePendingData(this), QQ.rG || JQ.b.Error(`Unable to delay load geometry "${this.id}" from "${this.delayLoadingFile}": ${XQ}`)
          }
        })())
      }
      toLeftHanded() {
        const QQ = this.lwQ(!1);
        if (null != QQ && QQ.length > 0) {
          for (let WQ = 0; WQ < QQ.length; WQ += 3) {
            const XQ = QQ[WQ + 0];
            QQ[WQ + 0] = QQ[WQ + 2], QQ[WQ + 2] = XQ
          }
          this.setIndices(QQ)
        }
        const WQ = this.getVerticesData(zQ.l.PositionKind, !1);
        if (null != WQ && WQ.length > 0) {
          for (let QQ = 0; QQ < WQ.length; QQ += 3) WQ[QQ + 2] = -WQ[QQ + 2];
          this.setVerticesData(zQ.l.PositionKind, WQ, !1)
        }
        const XQ = this.getVerticesData(zQ.l.NormalKind, !1);
        if (null != XQ && XQ.length > 0) {
          for (let QQ = 0; QQ < XQ.length; QQ += 3) XQ[QQ + 2] = -XQ[QQ + 2];
          this.setVerticesData(zQ.l.NormalKind, XQ, !1)
        }
      }
      _resetPointsArrayCache() {
        this._positions = null
      }
      _generatePointsArray() {
        if (this._positions) return !0;
        const QQ = this.getVerticesData(zQ.l.PositionKind);
        if (!QQ || 0 === QQ.length) return !1;
        for (let WQ = 3 * this._positionsCache.length, XQ = this._positionsCache.length; WQ < QQ.length; WQ += 3, ++XQ) this._positionsCache[XQ] = wQ.s.FromArray(QQ, WQ);
        for (let WQ = 0, XQ = 0; WQ < QQ.length; WQ += 3, ++XQ) this._positionsCache[XQ].set(QQ[0 + WQ], QQ[1 + WQ], QQ[2 + WQ]);
        return this._positionsCache.length = QQ.length / 3, this._positions = this._positionsCache, !0
      }
      rG() {
        return this._isDisposed
      }
      _disposeVertexArrayObjects() {
        if (this._vertexArrayObjects) {
          for (const XQ in this._vertexArrayObjects) this._engine.releaseVertexArrayObject(this._vertexArrayObjects[XQ]);
          this._vertexArrayObjects = {};
          const QQ = this._meshes,
            WQ = QQ.length;
          for (let XQ = 0; XQ < WQ; XQ++) QQ[XQ]._invalidateInstanceVertexArrayObject()
        }
      }
      dispose() {
        const QQ = this._meshes,
          WQ = QQ.length;
        let XQ;
        for (XQ = 0; XQ < WQ; XQ++) this.releaseForMesh(QQ[XQ]);
        this._meshes.length = 0, this._disposeVertexArrayObjects();
        for (const wQ in this._vertexBuffers) this._vertexBuffers[wQ].dispose();
        if (this._vertexBuffers = {}, this._totalVertices = 0, this._indexBuffer && this._engine._releaseBuffer(this._indexBuffer), this._indexBuffer = null, this._indices = [], this.delayLoadState = 0, this.delayLoadingFile = null, this._delayLoadingFunction = null, this._delayInfo = [], this._boundingInfo = null, this._scene.removeGeometry(this), this._parentContainer) {
          const QQ = this._parentContainer.geometries.indexOf(this);
          QQ > -1 && this._parentContainer.geometries.splice(QQ, 1), this._parentContainer = null
        }
        this._isDisposed = !0
      }
      copy(QQ) {
        const WQ = new VQ(QQ, this._scene),
          XQ = this.lwQ(void 0, !0);
        XQ && WQ.setIndices(XQ);
        let wQ, qQ = !1;
        for (wQ in this._vertexBuffers) {
          const QQ = this.getVertexBuffer(wQ),
            XQ = QQ.getData();
          if (!XQ) continue;
          const TQ = QQ.isUpdatable(),
            sQ = QQ.getSize(),
            {
              type: FQ,
              byteOffset: PQ,
              byteStride: gQ,
              normalized: JQ
            } = QQ;
          qQ = qQ || TQ;
          let rQ = this._totalVertices;
          if (QQ.getIsInstanced()) {
            let QQ;
            QQ = XQ instanceof Array ? 4 * XQ.length : XQ.byteLength, rQ = QQ / gQ
          }
          const IQ = (0, yQ.w)(XQ, sQ, FQ, PQ, gQ, rQ, !0),
            jQ = new zQ.l(this._engine, IQ, wQ, {
              updatable: TQ,
              useBytes: !1,
              stride: sQ,
              size: sQ,
              offset: 0,
              type: FQ,
              normalized: JQ,
              takeBufferOwnership: !0,
              instanced: QQ.getIsInstanced()
            });
          WQ.setVerticesBuffer(jQ, rQ)
        }
        for (wQ in WQ._updatable = qQ, WQ.delayLoadState = this.delayLoadState, WQ.delayLoadingFile = this.delayLoadingFile, WQ._delayLoadingFunction = this._delayLoadingFunction, this._delayInfo) WQ._delayInfo = WQ._delayInfo || [], WQ._delayInfo.push(wQ);
        return WQ._boundingInfo = new PQ.e(this._extend.minimum, this._extend.maximum), WQ
      }
      serialize() {
        const QQ = {};
        return QQ.id = this.id, QQ.uniqueId = this.uniqueId, QQ.updatable = this._updatable, rQ.d && rQ.d.HasTags(this) && (QQ.tags = rQ.d.GetTags(this)), QQ
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
        return this.isVerticesDataPresent(zQ.l.PositionKind) && (QQ.positions = this._toNumberArray(this.getVerticesData(zQ.l.PositionKind)), this.isVertexBufferUpdatable(zQ.l.PositionKind) && (QQ.positionsUpdatable = !0)), this.isVerticesDataPresent(zQ.l.NormalKind) && (QQ.normals = this._toNumberArray(this.getVerticesData(zQ.l.NormalKind)), this.isVertexBufferUpdatable(zQ.l.NormalKind) && (QQ.normalsUpdatable = !0)), this.isVerticesDataPresent(zQ.l.TangentKind) && (QQ.tangents = this._toNumberArray(this.getVerticesData(zQ.l.TangentKind)), this.isVertexBufferUpdatable(zQ.l.TangentKind) && (QQ.tangentsUpdatable = !0)), this.isVerticesDataPresent(zQ.l.UVKind) && (QQ.uvs = this._toNumberArray(this.getVerticesData(zQ.l.UVKind)), this.isVertexBufferUpdatable(zQ.l.UVKind) && (QQ.uvsUpdatable = !0)), this.isVerticesDataPresent(zQ.l.UV2Kind) && (QQ.uvs2 = this._toNumberArray(this.getVerticesData(zQ.l.UV2Kind)), this.isVertexBufferUpdatable(zQ.l.UV2Kind) && (QQ.uvs2Updatable = !0)), this.isVerticesDataPresent(zQ.l.UV3Kind) && (QQ.uvs3 = this._toNumberArray(this.getVerticesData(zQ.l.UV3Kind)), this.isVertexBufferUpdatable(zQ.l.UV3Kind) && (QQ.uvs3Updatable = !0)), this.isVerticesDataPresent(zQ.l.UV4Kind) && (QQ.uvs4 = this._toNumberArray(this.getVerticesData(zQ.l.UV4Kind)), this.isVertexBufferUpdatable(zQ.l.UV4Kind) && (QQ.uvs4Updatable = !0)), this.isVerticesDataPresent(zQ.l.UV5Kind) && (QQ.uvs5 = this._toNumberArray(this.getVerticesData(zQ.l.UV5Kind)), this.isVertexBufferUpdatable(zQ.l.UV5Kind) && (QQ.uvs5Updatable = !0)), this.isVerticesDataPresent(zQ.l.UV6Kind) && (QQ.uvs6 = this._toNumberArray(this.getVerticesData(zQ.l.UV6Kind)), this.isVertexBufferUpdatable(zQ.l.UV6Kind) && (QQ.uvs6Updatable = !0)), this.isVerticesDataPresent(zQ.l.ColorKind) && (QQ.colors = this._toNumberArray(this.getVerticesData(zQ.l.ColorKind)), this.isVertexBufferUpdatable(zQ.l.ColorKind) && (QQ.colorsUpdatable = !0)), this.isVerticesDataPresent(zQ.l.MatricesIndicesKind) && (QQ.matricesIndices = this._toNumberArray(this.getVerticesData(zQ.l.MatricesIndicesKind)), QQ.matricesIndicesExpanded = !0, this.isVertexBufferUpdatable(zQ.l.MatricesIndicesKind) && (QQ.matricesIndicesUpdatable = !0)), this.isVerticesDataPresent(zQ.l.MatricesWeightsKind) && (QQ.matricesWeights = this._toNumberArray(this.getVerticesData(zQ.l.MatricesWeightsKind)), this.isVertexBufferUpdatable(zQ.l.MatricesWeightsKind) && (QQ.matricesWeightsUpdatable = !0)), QQ.indices = this._toNumberArray(this.lwQ()), QQ
      }
      static ExtractFromMesh(QQ, WQ) {
        const XQ = QQ._geometry;
        return XQ ? XQ.copy(WQ) : null
      }
      static RandomId() {
        return gQ.g.RandomId()
      }
      static _GetGeometryByLoadedUniqueId(QQ, WQ) {
        for (let XQ = 0; XQ < WQ.geometries.length; XQ++)
          if (WQ.geometries[XQ]._loadedUniqueId === QQ) return WQ.geometries[XQ];
        return null
      }
      static _ImportGeometry(QQ, WQ) {
        const XQ = WQ.sE(),
          wQ = QQ.geometryUniqueId,
          TQ = QQ.geometryId;
        if (wQ || TQ) {
          const QQ = wQ ? this._GetGeometryByLoadedUniqueId(wQ, XQ) : XQ.getGeometryById(TQ);
          QQ && QQ.applyToMesh(WQ)
        } else if (QQ instanceof ArrayBuffer) {
          const XQ = WQ._binaryInfo;
          if (XQ.positionsAttrDesc && XQ.positionsAttrDesc.count > 0) {
            const wQ = new Float32Array(QQ, XQ.positionsAttrDesc.offset, XQ.positionsAttrDesc.count);
            WQ.setVerticesData(zQ.l.PositionKind, wQ, !1)
          }
          if (XQ.normalsAttrDesc && XQ.normalsAttrDesc.count > 0) {
            const wQ = new Float32Array(QQ, XQ.normalsAttrDesc.offset, XQ.normalsAttrDesc.count);
            WQ.setVerticesData(zQ.l.NormalKind, wQ, !1)
          }
          if (XQ.tangetsAttrDesc && XQ.tangetsAttrDesc.count > 0) {
            const wQ = new Float32Array(QQ, XQ.tangetsAttrDesc.offset, XQ.tangetsAttrDesc.count);
            WQ.setVerticesData(zQ.l.TangentKind, wQ, !1)
          }
          if (XQ.uvsAttrDesc && XQ.uvsAttrDesc.count > 0) {
            const wQ = new Float32Array(QQ, XQ.uvsAttrDesc.offset, XQ.uvsAttrDesc.count);
            if (BQ.e)
              for (let QQ = 1; QQ < wQ.length; QQ += 2) wQ[QQ] = 1 - wQ[QQ];
            WQ.setVerticesData(zQ.l.UVKind, wQ, !1)
          }
          if (XQ.uvs2AttrDesc && XQ.uvs2AttrDesc.count > 0) {
            const wQ = new Float32Array(QQ, XQ.uvs2AttrDesc.offset, XQ.uvs2AttrDesc.count);
            if (BQ.e)
              for (let QQ = 1; QQ < wQ.length; QQ += 2) wQ[QQ] = 1 - wQ[QQ];
            WQ.setVerticesData(zQ.l.UV2Kind, wQ, !1)
          }
          if (XQ.uvs3AttrDesc && XQ.uvs3AttrDesc.count > 0) {
            const wQ = new Float32Array(QQ, XQ.uvs3AttrDesc.offset, XQ.uvs3AttrDesc.count);
            if (BQ.e)
              for (let QQ = 1; QQ < wQ.length; QQ += 2) wQ[QQ] = 1 - wQ[QQ];
            WQ.setVerticesData(zQ.l.UV3Kind, wQ, !1)
          }
          if (XQ.uvs4AttrDesc && XQ.uvs4AttrDesc.count > 0) {
            const wQ = new Float32Array(QQ, XQ.uvs4AttrDesc.offset, XQ.uvs4AttrDesc.count);
            if (BQ.e)
              for (let QQ = 1; QQ < wQ.length; QQ += 2) wQ[QQ] = 1 - wQ[QQ];
            WQ.setVerticesData(zQ.l.UV4Kind, wQ, !1)
          }
          if (XQ.uvs5AttrDesc && XQ.uvs5AttrDesc.count > 0) {
            const wQ = new Float32Array(QQ, XQ.uvs5AttrDesc.offset, XQ.uvs5AttrDesc.count);
            if (BQ.e)
              for (let QQ = 1; QQ < wQ.length; QQ += 2) wQ[QQ] = 1 - wQ[QQ];
            WQ.setVerticesData(zQ.l.UV5Kind, wQ, !1)
          }
          if (XQ.uvs6AttrDesc && XQ.uvs6AttrDesc.count > 0) {
            const wQ = new Float32Array(QQ, XQ.uvs6AttrDesc.offset, XQ.uvs6AttrDesc.count);
            if (BQ.e)
              for (let QQ = 1; QQ < wQ.length; QQ += 2) wQ[QQ] = 1 - wQ[QQ];
            WQ.setVerticesData(zQ.l.UV6Kind, wQ, !1)
          }
          if (XQ.colorsAttrDesc && XQ.colorsAttrDesc.count > 0) {
            const wQ = new Float32Array(QQ, XQ.colorsAttrDesc.offset, XQ.colorsAttrDesc.count);
            WQ.setVerticesData(zQ.l.ColorKind, wQ, !1, XQ.colorsAttrDesc.stride)
          }
          if (XQ.matricesIndicesAttrDesc && XQ.matricesIndicesAttrDesc.count > 0) {
            const wQ = new Int32Array(QQ, XQ.matricesIndicesAttrDesc.offset, XQ.matricesIndicesAttrDesc.count),
              qQ = [];
            for (let QQ = 0; QQ < wQ.length; QQ++) {
              const WQ = wQ[QQ];
              qQ.push(255 & WQ), qQ.push((65280 & WQ) >> 8), qQ.push((16711680 & WQ) >> 16), qQ.push(WQ >> 24 & 255)
            }
            WQ.setVerticesData(zQ.l.MatricesIndicesKind, qQ, !1)
          }
          if (XQ.matricesIndicesExtraAttrDesc && XQ.matricesIndicesExtraAttrDesc.count > 0) {
            const wQ = new Int32Array(QQ, XQ.matricesIndicesExtraAttrDesc.offset, XQ.matricesIndicesExtraAttrDesc.count),
              qQ = [];
            for (let QQ = 0; QQ < wQ.length; QQ++) {
              const WQ = wQ[QQ];
              qQ.push(255 & WQ), qQ.push((65280 & WQ) >> 8), qQ.push((16711680 & WQ) >> 16), qQ.push(WQ >> 24 & 255)
            }
            WQ.setVerticesData(zQ.l.MatricesIndicesExtraKind, qQ, !1)
          }
          if (XQ.matricesWeightsAttrDesc && XQ.matricesWeightsAttrDesc.count > 0) {
            const wQ = new Float32Array(QQ, XQ.matricesWeightsAttrDesc.offset, XQ.matricesWeightsAttrDesc.count);
            WQ.setVerticesData(zQ.l.MatricesWeightsKind, wQ, !1)
          }
          if (XQ.indicesAttrDesc && XQ.indicesAttrDesc.count > 0) {
            const wQ = new Int32Array(QQ, XQ.indicesAttrDesc.offset, XQ.indicesAttrDesc.count);
            WQ.setIndices(wQ, null)
          }
          if (XQ.subMeshesAttrDesc && XQ.subMeshesAttrDesc.count > 0) {
            const wQ = new Int32Array(QQ, XQ.subMeshesAttrDesc.offset, 5 * XQ.subMeshesAttrDesc.count);
            WQ.ZD = [];
            for (let QQ = 0; QQ < XQ.subMeshesAttrDesc.count; QQ++) {
              const XQ = wQ[5 * QQ + 0],
                qQ = wQ[5 * QQ + 1],
                TQ = wQ[5 * QQ + 2],
                zQ = wQ[5 * QQ + 3],
                FQ = wQ[5 * QQ + 4];
              sQ.b.AddToMesh(XQ, qQ, TQ, zQ, FQ, WQ)
            }
          }
        } else if (QQ.positions && QQ.normals && QQ.indices) {
          if (WQ.setVerticesData(zQ.l.PositionKind, QQ.positions, QQ.positions._updatable || QQ.positionsUpdatable), WQ.setVerticesData(zQ.l.NormalKind, QQ.normals, QQ.normals._updatable || QQ.normalsUpdatable), QQ.tangents && WQ.setVerticesData(zQ.l.TangentKind, QQ.tangents, QQ.tangents._updatable || QQ.tangentsUpdatable), QQ.uvs && WQ.setVerticesData(zQ.l.UVKind, QQ.uvs, QQ.uvs._updatable || QQ.uvsUpdatable), QQ.uvs2 && WQ.setVerticesData(zQ.l.UV2Kind, QQ.uvs2, QQ.uvs2._updatable || QQ.uvs2Updatable), QQ.uvs3 && WQ.setVerticesData(zQ.l.UV3Kind, QQ.uvs3, QQ.uvs3._updatable || QQ.uvs3Updatable), QQ.uvs4 && WQ.setVerticesData(zQ.l.UV4Kind, QQ.uvs4, QQ.uvs4._updatable || QQ.uvs4Updatable), QQ.uvs5 && WQ.setVerticesData(zQ.l.UV5Kind, QQ.uvs5, QQ.uvs5._updatable || QQ.uvs5Updatable), QQ.uvs6 && WQ.setVerticesData(zQ.l.UV6Kind, QQ.uvs6, QQ.uvs6._updatable || QQ.uvs6Updatable), QQ.colors && WQ.setVerticesData(zQ.l.ColorKind, qQ.d.CheckColors4(QQ.colors, QQ.positions.length / 3), QQ.colors._updatable), QQ.matricesIndices)
            if (QQ.matricesIndices._isExpanded || QQ.matricesIndicesExpanded) delete QQ.matricesIndices._isExpanded, delete QQ.matricesIndicesExpanded, WQ.setVerticesData(zQ.l.MatricesIndicesKind, QQ.matricesIndices, QQ.matricesIndices._updatable || QQ.matricesIndicesUpdatable);
            else {
              const XQ = [];
              for (let WQ = 0; WQ < QQ.matricesIndices.length; WQ++) {
                const wQ = QQ.matricesIndices[WQ];
                XQ.push(255 & wQ), XQ.push((65280 & wQ) >> 8), XQ.push((16711680 & wQ) >> 16), XQ.push(wQ >> 24 & 255)
              }
              WQ.setVerticesData(zQ.l.MatricesIndicesKind, XQ, QQ.matricesIndices._updatable || QQ.matricesIndicesUpdatable)
            } if (QQ.matricesIndicesExtra)
            if (QQ.matricesIndicesExtraExpanded || QQ.matricesIndicesExtra._isExpanded) delete QQ.matricesIndices._isExpanded, delete QQ.matricesIndicesExtraExpanded, WQ.setVerticesData(zQ.l.MatricesIndicesExtraKind, QQ.matricesIndicesExtra, QQ.matricesIndicesExtra._updatable || QQ.matricesIndicesExtraUpdatable);
            else {
              const XQ = [];
              for (let WQ = 0; WQ < QQ.matricesIndicesExtra.length; WQ++) {
                const wQ = QQ.matricesIndicesExtra[WQ];
                XQ.push(255 & wQ), XQ.push((65280 & wQ) >> 8), XQ.push((16711680 & wQ) >> 16), XQ.push(wQ >> 24 & 255)
              }
              WQ.setVerticesData(zQ.l.MatricesIndicesExtraKind, XQ, QQ.matricesIndicesExtra._updatable || QQ.matricesIndicesExtraUpdatable)
            } QQ.matricesWeights && (VQ._CleanMatricesWeights(QQ, WQ), WQ.setVerticesData(zQ.l.MatricesWeightsKind, QQ.matricesWeights, QQ.matricesWeights._updatable)), QQ.matricesWeightsExtra && WQ.setVerticesData(zQ.l.MatricesWeightsExtraKind, QQ.matricesWeightsExtra, QQ.matricesWeights._updatable), WQ.setIndices(QQ.indices, null)
        }
        if (QQ.ZD) {
          WQ.ZD = [];
          for (let XQ = 0; XQ < QQ.ZD.length; XQ++) {
            const wQ = QQ.ZD[XQ];
            sQ.b.AddToMesh(wQ.materialIndex, wQ.verticesStart, wQ.verticesCount, wQ.indexStart, wQ.indexCount, WQ)
          }
        }
        WQ._shouldGenerateFlatShading && (WQ.convertToFlatShadedMesh(), WQ._shouldGenerateFlatShading = !1), WQ.computeWorldMatrix(!0), XQ.onMeshImportedObservable.notifyObservers(WQ)
      }
      static _CleanMatricesWeights(QQ, WQ) {
        const XQ = .001;
        if (!FQ.c.CleanBoneMatrixWeights) return;
        let wQ;
        if (!(QQ.skeletonId > -1)) return;
        {
          const XQ = WQ.sE().getLastSkeletonById(QQ.skeletonId);
          if (!XQ) return;
          wQ = XQ.bones.length
        }
        const qQ = WQ.getVerticesData(zQ.l.MatricesIndicesKind),
          TQ = WQ.getVerticesData(zQ.l.MatricesIndicesExtraKind),
          sQ = QQ.matricesWeights,
          PQ = QQ.matricesWeightsExtra,
          gQ = QQ.numBoneInfluencer,
          JQ = sQ.length;
        for (let zQ = 0; zQ < JQ; zQ += 4) {
          let QQ = 0,
            WQ = -1;
          for (let wQ = 0; wQ < 4; wQ++) {
            const qQ = sQ[zQ + wQ];
            QQ += qQ, qQ < XQ && WQ < 0 && (WQ = wQ)
          }
          if (PQ)
            for (let wQ = 0; wQ < 4; wQ++) {
              const qQ = PQ[zQ + wQ];
              QQ += qQ, qQ < XQ && WQ < 0 && (WQ = wQ + 4)
            }
          if ((WQ < 0 || WQ > gQ - 1) && (WQ = gQ - 1), QQ > XQ) {
            const WQ = 1 / QQ;
            for (let QQ = 0; QQ < 4; QQ++) sQ[zQ + QQ] *= WQ;
            if (PQ)
              for (let QQ = 0; QQ < 4; QQ++) PQ[zQ + QQ] *= WQ
          } else WQ >= 4 ? (PQ[zQ + WQ - 4] = 1 - QQ, TQ[zQ + WQ - 4] = wQ) : (sQ[zQ + WQ] = 1 - QQ, qQ[zQ + WQ] = wQ)
        }
        WQ.setVerticesData(zQ.l.MatricesIndicesKind, qQ), QQ.matricesWeightsExtra && WQ.setVerticesData(zQ.l.MatricesIndicesExtraKind, TQ)
      }
      static Parse(QQ, WQ, XQ) {
        const qQ = new VQ(QQ.id, WQ, void 0, QQ.updatable);
        return qQ._loadedUniqueId = QQ.uniqueId, rQ.d && rQ.d.AddTagsTo(qQ, QQ.tags), QQ.delayLoadingFile ? (qQ.delayLoadState = 4, qQ.delayLoadingFile = XQ + QQ.delayLoadingFile, qQ._boundingInfo = new PQ.e(wQ.s.FromArray(QQ.boundingBoxMinimum), wQ.s.FromArray(QQ.boundingBoxMaximum)), qQ._delayInfo = [], QQ.hasUVs && qQ._delayInfo.push(zQ.l.UVKind), QQ.hasUVs2 && qQ._delayInfo.push(zQ.l.UV2Kind), QQ.hasUVs3 && qQ._delayInfo.push(zQ.l.UV3Kind), QQ.hasUVs4 && qQ._delayInfo.push(zQ.l.UV4Kind), QQ.hasUVs5 && qQ._delayInfo.push(zQ.l.UV5Kind), QQ.hasUVs6 && qQ._delayInfo.push(zQ.l.UV6Kind), QQ.hasColors && qQ._delayInfo.push(zQ.l.ColorKind), QQ.hasMatricesIndices && qQ._delayInfo.push(zQ.l.MatricesIndicesKind), QQ.hasMatricesWeights && qQ._delayInfo.push(zQ.l.MatricesWeightsKind), qQ._delayLoadingFunction = TQ.e.ImportVertexData) : TQ.e.ImportVertexData(QQ, qQ), WQ.pushGeometry(qQ, !0), qQ
      }
    }
  },
  40712: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => JQ,
      f: () => jQ
    });
    var wQ = XQ(37370),
      qQ = XQ(38956),
      TQ = XQ(40683),
      zQ = XQ(40651),
      sQ = XQ(38947),
      FQ = XQ(40690),
      PQ = XQ(40404),
      gQ = XQ(37418);
    class JQ extends TQ.c {
      constructor(QQ, WQ) {
        super(QQ, WQ.sE()), this._indexInSourceMeshInstanceArray = -1, this._distanceToCamera = 0, WQ.n_(this), this._sourceMesh = WQ, this._unIndexed = WQ._unIndexed, this.position.WH(WQ.position), this.rotation.WH(WQ.rotation), this.oB.WH(WQ.oB), WQ.rotationQuaternion && (this.rotationQuaternion = WQ.rotationQuaternion.clone()), this.animations = WQ.animations.slice();
        for (const XQ of WQ.getAnimationRanges()) null != XQ && this.createAnimationRange(XQ.name, XQ.from, XQ.to);
        if (this.infiniteDistance = WQ.infiniteDistance, this.setPivotMatrix(WQ.getPivotMatrix()), WQ.skeleton || WQ.morphTargetManager || !WQ.hasBoundingInfo) this.refreshBoundingInfo(!0, !0);
        else {
          const QQ = WQ.uC();
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
        this._sourceMesh?.receiveShadows !== QQ && qQ.b.Warn("Setting receiveShadows on an instanced mesh has no effect")
      }
      get material() {
        return this._sourceMesh.material
      }
      set material(QQ) {
        this._sourceMesh?.material !== QQ && qQ.b.Warn("Setting material on an instanced mesh has no effect")
      }
      get visibility() {
        return this._sourceMesh.visibility
      }
      set visibility(QQ) {
        this._sourceMesh?.visibility !== QQ && qQ.b.Warn("Setting visibility on an instanced mesh has no effect")
      }
      get skeleton() {
        return this._sourceMesh.skeleton
      }
      set skeleton(QQ) {
        this._sourceMesh?.skeleton !== QQ && qQ.b.Warn("Setting skeleton on an instanced mesh has no effect")
      }
      get renderingGroupId() {
        return this._sourceMesh.renderingGroupId
      }
      set renderingGroupId(QQ) {
        this._sourceMesh && QQ !== this._sourceMesh.renderingGroupId && qQ.b.Warn("Note - setting renderingGroupId of an instanced mesh has no effect on the scene")
      }
      get meshBlendingTag() {
        return this._sourceMesh.meshBlendingTag
      }
      set meshBlendingTag(QQ) {
        this._sourceMesh && QQ !== this._sourceMesh.meshBlendingTag && qQ.b.Warn("Setting meshBlendingTag on an instanced mesh has no effect")
      }
      getTotalVertices() {
        return this._sourceMesh ? this._sourceMesh.getTotalVertices() : 0
      }
      getTotalIndices() {
        return this._sourceMesh.getTotalIndices()
      }
      get bqQ() {
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
      getVerticesData(QQ, WQ, XQ) {
        return this._sourceMesh.getVerticesData(QQ, WQ, XQ)
      }
      copyVerticesData(QQ, WQ) {
        this._sourceMesh.copyVerticesData(QQ, WQ)
      }
      getVertexBuffer(QQ, WQ) {
        return this._sourceMesh.getVertexBuffer(QQ, WQ)
      }
      setVerticesData(QQ, WQ, XQ, wQ) {
        return this.bqQ && this.bqQ.setVerticesData(QQ, WQ, XQ, wQ), this.bqQ
      }
      updateVerticesData(QQ, WQ, XQ, wQ) {
        return this.bqQ && this.bqQ.updateVerticesData(QQ, WQ, XQ, wQ), this.bqQ
      }
      setIndices(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return this.bqQ && this.bqQ.setIndices(QQ, WQ), this.bqQ
      }
      isVerticesDataPresent(QQ) {
        return this._sourceMesh.isVerticesDataPresent(QQ)
      }
      lwQ() {
        return this._sourceMesh.lwQ()
      }
      get _positions() {
        return this._sourceMesh._positions
      }
      refreshBoundingInfo() {
        let QQ, WQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          XQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.hasBoundingInfo && this.uC().isLocked) return this;
        QQ = "object" === typeof WQ ? WQ : {
          applySkeleton: WQ,
          applyMorph: XQ
        };
        const wQ = this._sourceMesh.geometry ? this._sourceMesh.geometry.boundingBias : null;
        return this._refreshBoundingInfo(this._sourceMesh._getData(QQ, null, PQ.l.PositionKind), wQ), this
      }
      _preActivate() {
        return this._currentLOD && this._currentLOD._preActivate(), this
      }
      _activate(QQ, WQ) {
        if (super._activate(QQ, WQ), this._sourceMesh.ZD || qQ.b.Warn("Instances should only be created for meshes with geometry."), this._currentLOD) {
          if (this._currentLOD._getWorldMatrixDeterminant() >= 0 !== this._getWorldMatrixDeterminant() >= 0) return this._internalAbstractMeshDataInfo._actAsRegularMesh = !0, !0;
          if (this._internalAbstractMeshDataInfo._actAsRegularMesh = !1, this._currentLOD._registerInstanceForRenderId(this, QQ), WQ) {
            if (!this._currentLOD._internalAbstractMeshDataInfo._isActiveIntermediate) return this._currentLOD._internalAbstractMeshDataInfo._onlyForInstancesIntermediate = !0, !0
          } else if (!this._currentLOD._internalAbstractMeshDataInfo._isActive) return this._currentLOD._internalAbstractMeshDataInfo._onlyForInstances = !0, !0
        }
        return !1
      }
      _postActivate() {
        this._sourceMesh.edgesShareWithInstances && this._sourceMesh._edgesRenderer && this._sourceMesh._edgesRenderer.isEnabled && this._sourceMesh._renderingGroup ? (this._sourceMesh._renderingGroup._edgesRenderers.pushNoDuplicate(this._sourceMesh._edgesRenderer), this._sourceMesh._edgesRenderer.customInstances.push(this.getWorldMatrix())) : this._edgesRenderer && this._edgesRenderer.isEnabled && this._sourceMesh._renderingGroup && this._sourceMesh._renderingGroup._edgesRenderers.push(this._edgesRenderer)
      }
      getWorldMatrix() {
        if (this._currentLOD && this._currentLOD !== this._sourceMesh && this._currentLOD.billboardMode !== FQ.d.BILLBOARDMODE_NONE && this._currentLOD._masterMesh !== this) {
          this._billboardWorldMatrix || (this._billboardWorldMatrix = new wQ.e);
          const QQ = this._currentLOD._masterMesh;
          return this._currentLOD._masterMesh = this, wQ.m.vj[7].WH(this._currentLOD.position), this._currentLOD.position.set(0, 0, 0), this._billboardWorldMatrix.WH(this._currentLOD.computeWorldMatrix(!0)), this._currentLOD.position.WH(wQ.m.vj[7]), this._currentLOD._masterMesh = QQ, this._billboardWorldMatrix
        }
        return super.getWorldMatrix()
      }
      get pE() {
        return !0
      }
      getLOD(QQ) {
        if (!QQ) return this;
        const WQ = this.bqQ.getLODLevels();
        if (WQ && 0 !== WQ.length) {
          const WQ = this.uC();
          this._currentLOD = this.bqQ.getLOD(QQ, WQ.mwQ)
        } else this._currentLOD = this.bqQ;
        return this._currentLOD
      }
      _preActivateForIntermediateRendering(QQ) {
        return this.bqQ._preActivateForIntermediateRendering(QQ)
      }
      _syncSubMeshes() {
        if (this.releaseSubMeshes(), this._sourceMesh.ZD)
          for (let QQ = 0; QQ < this._sourceMesh.ZD.length; QQ++) this._sourceMesh.ZD[QQ].clone(this, this._sourceMesh);
        return this
      }
      _generatePointsArray() {
        return this._sourceMesh._generatePointsArray()
      }
      _updateBoundingInfo() {
        return this.hasBoundingInfo ? this.uC().update(this.worldMatrixFromCache) : this.buildBoundingInfo(this.absolutePosition, this.absolutePosition, this.worldMatrixFromCache), this._updateSubMeshesBoundingInfo(this.worldMatrixFromCache), this
      }
      clone(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          XQ = arguments.length > 2 ? arguments[2] : void 0;
        const wQ = ((arguments.length > 3 ? arguments[3] : void 0) || this._sourceMesh).createInstance(QQ);
        if (sQ.d.DeepCopy(this, wQ, ["name", "ZD", "uniqueId", "parent", "lightSources", "receiveShadows", "material", "visibility", "skeleton", "bqQ", "pE", "facetNb", "isFacetDataEnabled", "isBlocked", "useBones", "UqQ", "collider", "edgesRenderer", "forward", "up", "right", "absolutePosition", "absoluteScaling", "absoluteRotationQuaternion", "rsQ", "nonUniformScaling", "behaviors", "worldMatrixFromCache", "hasThinInstances", "hasBoundingInfo", "geometry"], []), WQ && (wQ.parent = WQ), !XQ)
          for (let qQ = 0; qQ < this.sE().meshes.length; qQ++) {
            const QQ = this.sE().meshes[qQ];
            QQ.parent === this && QQ.clone(QQ.name, wQ)
          }
        return wQ.computeWorldMatrix(!0), this.onClonedObservable.notifyObservers(wQ), wQ
      }
      dispose(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._sourceMesh.Y_(this), super.dispose(QQ, WQ)
      }
      _serializeAsParent(QQ) {
        super._serializeAsParent(QQ), QQ.parentId = this._sourceMesh.uniqueId, QQ.parentInstanceIndex = this._indexInSourceMeshInstanceArray
      }
      instantiateHierarchy() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          WQ = arguments.length > 1 ? arguments[1] : void 0,
          XQ = arguments.length > 2 ? arguments[2] : void 0;
        const wQ = this.clone("Clone of " + (this.name || this.id), QQ || this.parent, !0, WQ && WQ.newSourcedMesh);
        wQ && XQ && XQ(this, wQ);
        for (const qQ of this.getChildTransformNodes(!0)) qQ.instantiateHierarchy(wQ, WQ, XQ);
        return wQ
      }
    }
    let rQ = !1;

    function IQ(QQ, WQ, XQ, wQ, qQ) {
      for (let TQ = 0; TQ < WQ.length; TQ++) {
        const zQ = QQ[WQ[TQ]] ?? 0,
          sQ = qQ + XQ[TQ];
        zQ.toArray ? zQ.toArray(wQ, sQ) : zQ.copyToArray ? zQ.copyToArray(wQ, sQ) : wQ[sQ] = zQ
      }
    }

    function jQ() {
      rQ || (rQ = !0, zQ.d._instancedMeshFactory = (QQ, WQ) => {
        const XQ = new JQ(QQ, WQ);
        if (WQ.bC) {
          XQ.bC = {};
          for (const QQ in WQ.bC) XQ.bC[QQ] = WQ.bC[QQ]
        }
        return XQ
      }, zQ.d.prototype.pC = function(QQ, WQ) {
        if (!this.bC) {
          this.bC = {};
          for (const QQ of this.instances) QQ.bC = {}
        }
        this._userInstancedBuffersStorage || (this._userInstancedBuffersStorage = {
          data: {},
          vertexBuffers: {},
          strides: {},
          sizes: {},
          vertexArrayObjects: this.Uj().getCaps().vertexArrayObject ? {} : void 0
        }), this.bC[QQ] = null, this._userInstancedBuffersStorage.strides[QQ] = WQ;
        const XQ = this._userInstancedBuffersStorage;
        XQ.interleavedKinds = [], XQ.interleavedOffsets = [], XQ.interleavedRowStride = 0;
        for (const wQ in XQ.strides) XQ.interleavedKinds.push(wQ), XQ.interleavedOffsets.push(XQ.interleavedRowStride), XQ.interleavedRowStride += XQ.strides[wQ];
        XQ.interleavedData = new Float32Array(32 * XQ.interleavedRowStride);
        for (const wQ in XQ.interleavedBuffers) XQ.interleavedBuffers[wQ].buffer.dispose();
        XQ.interleavedBuffers = {}, XQ.vertexBuffers[QQ] = null;
        for (const wQ of this.instances) wQ.bC[QQ] = null;
        this._invalidateInstanceVertexArrayObject(), this._markSubMeshesAsAttributesDirty()
      }, zQ.d.prototype._processInstancedBuffers = function(QQ, WQ) {
        const XQ = this._userInstancedBuffersStorage,
          wQ = XQ.interleavedRowStride;
        if (!wQ) return;
        const qQ = QQ ? QQ.length : 0,
          TQ = (qQ + 1) * wQ;
        let zQ = XQ.interleavedData;
        if (zQ.length < TQ) {
          let QQ = zQ.length;
          for (; QQ < TQ;) QQ *= 2;
          zQ = XQ.interleavedData = new Float32Array(QQ)
        }
        const sQ = XQ.interleavedKinds,
          FQ = XQ.interleavedOffsets;
        let gQ = 0;
        WQ && (IQ(this.bC, sQ, FQ, zQ, gQ), gQ += wQ);
        for (let PQ = 0; PQ < qQ; PQ++) IQ(QQ[PQ].bC, sQ, FQ, zQ, gQ), gQ += wQ;
        let JQ = "shared",
          rQ = XQ.vertexBuffers;
        this._instanceDataStorage.useMonoDataStorageRenderPass || (JQ = this._instanceDataStorage.engine.currentRenderPassId, XQ.renderPasses || (XQ.renderPasses = {}), XQ.renderPasses[JQ] || (XQ.renderPasses[JQ] = {}), rQ = XQ.renderPasses[JQ]);
        const jQ = XQ.interleavedBuffers[JQ];
        let BQ = !jQ || jQ.data !== zQ;
        for (let PQ = 0; !BQ && PQ < sQ.length; PQ++) BQ = !rQ[sQ[PQ]];
        if (!BQ) return void jQ.buffer.updateDirectly(zQ, 0);
        jQ?.buffer.dispose();
        const yQ = new PQ.d(this.Uj(), zQ, !0, wQ, !1, !0);
        for (let PQ = 0; PQ < sQ.length; PQ++) {
          const QQ = sQ[PQ],
            WQ = yQ.createVertexBuffer(QQ, FQ[PQ], XQ.strides[QQ]);
          WQ.hashCode += WQ.byteOffset * 2 ** 24, rQ[QQ] = WQ
        }
        XQ.interleavedBuffers[JQ] = {
          buffer: yQ,
          data: zQ
        }, this._invalidateInstanceVertexArrayObject()
      }, zQ.d.prototype._invalidateInstanceVertexArrayObject = function() {
        if (this._userInstancedBuffersStorage && void 0 !== this._userInstancedBuffersStorage.vertexArrayObjects) {
          for (const QQ in this._userInstancedBuffersStorage.vertexArrayObjects) this.Uj().releaseVertexArrayObject(this._userInstancedBuffersStorage.vertexArrayObjects[QQ]);
          this._userInstancedBuffersStorage.vertexArrayObjects = {}
        }
      }, zQ.d.prototype._disposeInstanceSpecificData = function() {
        for (const WQ in this._instanceDataStorage.renderPasses) this._instanceDataStorage.renderPasses[WQ].instancesBuffer?.dispose();
        for (this._instanceDataStorage.renderPasses = {}, this._instanceDataStorage.dataStorageRenderPass?.instancesBuffer?.dispose(); this.instances.length;) this.instances[0].dispose();
        for (const WQ in this.bC) this._userInstancedBuffersStorage.vertexBuffers[WQ] && this._userInstancedBuffersStorage.vertexBuffers[WQ].dispose();
        const QQ = this._userInstancedBuffersStorage?.interleavedBuffers;
        if (QQ) {
          for (const WQ in QQ) QQ[WQ].buffer.dispose();
          this._userInstancedBuffersStorage.interleavedBuffers = {}
        }
        this._invalidateInstanceVertexArrayObject(), this.bC = {}
      }, (0, gQ.d)("BABYLON.InstancedMesh", JQ))
    }
  },
  40651: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => KQ,
      h: () => MQ,
      k: () => eQ
    });
    var wQ, qQ, TQ, zQ, sQ, FQ, PQ, gQ, JQ, rQ, IQ, jQ, BQ, yQ, VQ = XQ(37399),
      DQ = XQ(40357),
      pQ = XQ(40307),
      GQ = XQ(38947),
      UQ = XQ(40290),
      bQ = XQ(40656),
      vQ = XQ(40487),
      dQ = XQ(37370),
      HQ = XQ(37546),
      aQ = XQ(40491),
      lQ = XQ(40404),
      hQ = XQ(40661),
      iQ = XQ(40670),
      cQ = XQ(40683),
      AQ = XQ(40555),
      RQ = XQ(40551),
      EQ = XQ(40628),
      CQ = XQ(40697),
      uQ = XQ(40676),
      LQ = XQ(40286),
      kQ = XQ(38956),
      fQ = XQ(37418),
      SQ = XQ(40153),
      tQ = XQ(40432);
    class oQ {
      constructor(QQ, WQ) {
        this.distanceOrScreenCoverage = QQ, this.mesh = WQ
      }
    }
    class eQ {}
    class nQ {
      constructor() {
        this.batchCache = new YQ(this), this.batchCacheReplacementModeInFrozenMode = new YQ(this), this.instancesBufferSize = 2048
      }
    }
    class xQ {
      constructor() {
        this.renderPasses = {}
      }
    }
    class YQ {
      constructor(QQ) {
        this.parent = QQ, this.mustReturn = !1, this.visibleInstances = new Array, this.renderSelf = [], this.hardwareInstancedRendering = []
      }
    }
    class NQ {
      constructor() {
        this.instancesCount = 0, this.matrixBuffer = null, this.previousMatrixBuffer = null, this.matrixBufferSize = 512, this.matrixData = null, this.boundingVectors = [], this.worldMatrices = null
      }
    }
    class ZQ {
      constructor() {
        this._areNormalsFrozen = !1, this._source = null, this.meshMap = null, this._preActivateId = -1, this._LODLevels = new Array, this._useLODScreenCoverage = !1, this._effectiveMaterial = null, this._forcedInstanceCount = 0, this._overrideRenderingFillMode = null
      }
    }
    const OQ = {
      source: null,
      parent: null,
      doNotCloneChildren: !1,
      clonePhysicsImpostor: !0,
      cloneThinInstances: !1
    };
    class KQ extends cQ.c {
      static _GetDefaultSideOrientation(QQ) {
        return QQ || KQ.FRONTSIDE
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
        this._internalAbstractMeshDataInfo._computeBonesUsingShaders !== QQ && (QQ && this._internalMeshDataInfo._sourcePositions && (this.setVerticesData(lQ.l.PositionKind, this._internalMeshDataInfo._sourcePositions, !0), this._internalMeshDataInfo._sourceNormals && this.setVerticesData(lQ.l.NormalKind, this._internalMeshDataInfo._sourceNormals, !0), this._internalMeshDataInfo._sourcePositions = null, this._internalMeshDataInfo._sourceNormals = null), this._internalAbstractMeshDataInfo._computeBonesUsingShaders = QQ, this._markSubMeshesAsAttributesDirty())
      }
      get onBeforeRenderObservable() {
        return this._internalMeshDataInfo._onBeforeRenderObservable || (this._internalMeshDataInfo._onBeforeRenderObservable = new VQ.b), this._internalMeshDataInfo._onBeforeRenderObservable
      }
      get onBeforeBindObservable() {
        return this._internalMeshDataInfo._onBeforeBindObservable || (this._internalMeshDataInfo._onBeforeBindObservable = new VQ.b), this._internalMeshDataInfo._onBeforeBindObservable
      }
      get onAfterRenderObservable() {
        return this._internalMeshDataInfo._onAfterRenderObservable || (this._internalMeshDataInfo._onAfterRenderObservable = new VQ.b), this._internalMeshDataInfo._onAfterRenderObservable
      }
      get onBetweenPassObservable() {
        return this._internalMeshDataInfo._onBetweenPassObservable || (this._internalMeshDataInfo._onBetweenPassObservable = new VQ.b), this._internalMeshDataInfo._onBetweenPassObservable
      }
      get onBeforeDrawObservable() {
        return this._internalMeshDataInfo._onBeforeDrawObservable || (this._internalMeshDataInfo._onBeforeDrawObservable = new VQ.b), this._internalMeshDataInfo._onBeforeDrawObservable
      }
      set onBeforeDraw(QQ) {
        this._onBeforeDrawObserver && this.onBeforeDrawObservable.remove(this._onBeforeDrawObserver), this._onBeforeDrawObserver = this.onBeforeDrawObservable.add(QQ)
      }
      get UqQ() {
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
      _copySource(QQ, WQ) {
        let XQ = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          wQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const qQ = this.sE();
        if (QQ._geometry && QQ._geometry.applyToMesh(this), GQ.d.DeepCopy(QQ, this, ["name", "material", "skeleton", "instances", "parent", "uniqueId", "source", "metadata", "morphTargetManager", "UqQ", "worldMatrixInstancedBuffer", "previousWorldMatrixInstancedBuffer", "hasLODLevels", "geometry", "isBlocked", "areNormalsFrozen", "facetNb", "isFacetDataEnabled", "lightSources", "useBones", "pE", "collider", "edgesRenderer", "forward", "up", "right", "absolutePosition", "absoluteScaling", "absoluteRotationQuaternion", "rsQ", "nonUniformScaling", "behaviors", "worldMatrixFromCache", "hasThinInstances", "cloneMeshMap", "hasBoundingInfo", "physicsBody", "physicsImpostor"], ["_poseMatrix"]), this._internalMeshDataInfo._source = QQ, qQ.useClonedMeshMap && (QQ._internalMeshDataInfo.meshMap || (QQ._internalMeshDataInfo.meshMap = {}), QQ._internalMeshDataInfo.meshMap[this.uniqueId] = this), this._originalBuilderSideOrientation = QQ._originalBuilderSideOrientation, this._creationDataStorage = QQ._creationDataStorage, QQ._ranges) {
          const WQ = QQ._ranges;
          for (const QQ in WQ) Object.prototype.hasOwnProperty.call(WQ, QQ) && WQ[QQ] && this.createAnimationRange(QQ, WQ[QQ].from, WQ[QQ].to)
        }
        if (QQ.metadata && QQ.metadata.clone ? this.metadata = QQ.metadata.clone() : this.metadata = QQ.metadata, this._internalMetadata = QQ._internalMetadata, this.meshBlendingTag = QQ.meshBlendingTag, UQ.d && UQ.d.HasTags(QQ) && UQ.d.AddTagsTo(this, UQ.d.GetTags(QQ, !0)), this.UH(QQ.isEnabled(!1)), this.parent = QQ.parent, this.setPivotMatrix(QQ.getPivotMatrix(), this._postMultiplyPivotMatrix), this.id = this.name + "." + QQ.id, this.material = QQ.material, !WQ) {
          const qQ = QQ.getDescendants(!0);
          for (let QQ = 0; QQ < qQ.length; QQ++) {
            const TQ = qQ[QQ];
            TQ._isMesh ? (OQ.parent = this, OQ.doNotCloneChildren = WQ, OQ.clonePhysicsImpostor = XQ, OQ.cloneThinInstances = wQ, TQ.clone(this.name + "." + TQ.name, OQ)) : TQ.clone && TQ.clone(this.name + "." + TQ.name, this)
          }
        }
        if (QQ.morphTargetManager && (this.morphTargetManager = QQ.morphTargetManager), (0, SQ.d)(qQ.getPhysicsEngine)) {
          const WQ = qQ.getPhysicsEngine();
          if (XQ && WQ)
            if (1 === WQ.getPluginVersion()) {
              const XQ = WQ.getImpostorForPhysicsObject(QQ);
              XQ && (this.physicsImpostor = XQ.clone(this))
            } else 2 === WQ.getPluginVersion() && QQ.physicsBody && QQ.physicsBody.clone(this)
        }
        for (let TQ = 0; TQ < qQ.KD.length; TQ++) {
          const WQ = qQ.KD[TQ];
          WQ.emitter === QQ && WQ.clone(WQ.name, this)
        }
        if (this.skeleton = QQ.skeleton, wQ && (QQ._thinInstanceDataStorage.matrixData ? (this.Y5("matrix", new Float32Array(QQ._thinInstanceDataStorage.matrixData), 16, !QQ._thinInstanceDataStorage.matrixBuffer.isUpdatable()), this._thinInstanceDataStorage.matrixBufferSize = QQ._thinInstanceDataStorage.matrixBufferSize, this._thinInstanceDataStorage.instancesCount = QQ._thinInstanceDataStorage.instancesCount) : this._thinInstanceDataStorage.matrixBufferSize = QQ._thinInstanceDataStorage.matrixBufferSize, QQ._userThinInstanceBuffersStorage)) {
          const WQ = QQ._userThinInstanceBuffersStorage;
          for (const QQ in WQ.data) this.Y5(QQ, new Float32Array(WQ.data[QQ]), WQ.strides[QQ], !WQ.vertexBuffers?.[QQ]?.isUpdatable()), this._userThinInstanceBuffersStorage.sizes[QQ] = WQ.sizes[QQ]
        }
        this.refreshBoundingInfo(!0, !0), this.computeWorldMatrix(!0)
      }
      constructor(QQ) {
        let WQ, XQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          qQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          TQ = arguments.length > 4 ? arguments[4] : void 0,
          zQ = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        super(QQ, XQ), this._internalMeshDataInfo = new ZQ, this.delayLoadState = 0, this.instances = [], this._creationDataStorage = null, this._geometry = null, this._thinInstanceDataStorage = new NQ, this._shouldGenerateFlatShading = !1, this._originalBuilderSideOrientation = KQ.DEFAULTSIDE, this.ignoreCameraMaxZ = !1, XQ = this.sE(), this._instanceDataStorage = new xQ, this._instanceDataStorage.engine = XQ.Uj(), this._instanceDataStorage.useMonoDataStorageRenderPass = !this._instanceDataStorage.engine.isWebGPU, this._instanceDataStorage.useMonoDataStorageRenderPass && (this._instanceDataStorage.dataStorageRenderPass = new nQ), this._scene.useRightHandedSystem ? this.sideOrientation = 0 : this.sideOrientation = 1, this._onBeforeDraw = (QQ, WQ, XQ) => {
          QQ && XQ && (this._uniformBuffer ? this.transferToEffect(WQ) : XQ.bindOnlyWorldMatrix(WQ))
        };
        let sQ = !1;
        if (wQ && void 0 === wQ._addToSceneRootNodes) {
          const QQ = wQ;
          WQ = QQ.parent ?? null, qQ = QQ.source ?? null, TQ = QQ.doNotCloneChildren ?? !1, zQ = QQ.clonePhysicsImpostor ?? !0, sQ = QQ.cloneThinInstances ?? !1
        } else WQ = wQ;
        qQ && this._copySource(qQ, TQ, zQ, sQ), null !== WQ && (this.parent = WQ), this._instanceDataStorage.hardwareInstancedRendering = this.Uj().getCaps().instancedArrays, this._internalMeshDataInfo._onMeshReadyObserverAdded = QQ => {
          QQ.unregisterOnNextCall = !0, this.isReady(!0) ? this.onMeshReadyObservable.notifyObservers(this) : this._internalMeshDataInfo._checkReadinessObserver || (this._internalMeshDataInfo._checkReadinessObserver = this._scene.onBeforeRenderObservable.add((() => {
            this.isReady(!0) && (this._scene.onBeforeRenderObservable.remove(this._internalMeshDataInfo._checkReadinessObserver), this._internalMeshDataInfo._checkReadinessObserver = null, this.onMeshReadyObservable.notifyObservers(this))
          })))
        }, this.onMeshReadyObservable = new VQ.b(this._internalMeshDataInfo._onMeshReadyObserverAdded), qQ && qQ.onClonedObservable.notifyObservers(this)
      }
      instantiateHierarchy() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          WQ = arguments.length > 1 ? arguments[1] : void 0,
          XQ = arguments.length > 2 ? arguments[2] : void 0;
        const wQ = 0 === this.getTotalVertices() || WQ && WQ.doNotInstantiate && (!0 === WQ.doNotInstantiate || WQ.doNotInstantiate(this)) ? this.clone("Clone of " + (this.name || this.id), QQ || this.parent, !0) : this.createInstance("instance of " + (this.name || this.id));
        wQ.parent = QQ || this.parent, wQ.position = this.position.clone(), wQ.oB = this.oB.clone(), this.rotationQuaternion ? wQ.rotationQuaternion = this.rotationQuaternion.clone() : wQ.rotation = this.rotation.clone(), XQ && XQ(this, wQ);
        for (const qQ of this.getChildTransformNodes(!0)) "InstancedMesh" === qQ.getClassName() && "Mesh" === wQ.getClassName() && qQ.bqQ === this ? qQ.instantiateHierarchy(wQ, {
          doNotInstantiate: WQ && WQ.doNotInstantiate || !1,
          newSourcedMesh: wQ
        }, XQ) : qQ.instantiateHierarchy(wQ, WQ, XQ);
        return wQ
      }
      getClassName() {
        return "Mesh"
      }
      get _isMesh() {
        return !0
      }
      toString(QQ) {
        let WQ = super.toString(QQ);
        if (WQ += ", n vertices: " + this.getTotalVertices(), WQ += ", parent: " + (this._waitingParentId ? this._waitingParentId : this.parent ? this.parent.name : "NONE"), this.animations)
          for (let XQ = 0; XQ < this.animations.length; XQ++) WQ += ", animation[0]: " + this.animations[XQ].toString(QQ);
        if (QQ)
          if (this._geometry) {
            const QQ = this.lwQ(),
              XQ = this.getVerticesData(lQ.l.PositionKind);
            XQ && QQ && (WQ += ", flat shading: " + (XQ.length / 3 === QQ.length ? "YES" : "NO"))
          } else WQ += ", flat shading: UNKNOWN";
        return WQ
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
        this._internalMeshDataInfo._LODLevels.sort(((WQ, XQ) => WQ.distanceOrScreenCoverage < XQ.distanceOrScreenCoverage ? QQ : WQ.distanceOrScreenCoverage > XQ.distanceOrScreenCoverage ? -QQ : 0))
      }
      addLODLevel(QQ, WQ) {
        if (WQ && WQ._masterMesh) return kQ.b.Warn("You cannot use a mesh as LOD level twice"), this;
        const XQ = new oQ(QQ, WQ);
        return this._internalMeshDataInfo._LODLevels.push(XQ), WQ && (WQ._masterMesh = this), this._sortLODLevels(), this
      }
      getLODLevelAtDistance(QQ) {
        const WQ = this._internalMeshDataInfo;
        for (let XQ = 0; XQ < WQ._LODLevels.length; XQ++) {
          const wQ = WQ._LODLevels[XQ];
          if (wQ.distanceOrScreenCoverage === QQ) return wQ.mesh
        }
        return null
      }
      removeLODLevel(QQ) {
        const WQ = this._internalMeshDataInfo;
        for (let XQ = 0; XQ < WQ._LODLevels.length; XQ++) WQ._LODLevels[XQ].mesh === QQ && (WQ._LODLevels.splice(XQ, 1), QQ && (QQ._masterMesh = null));
        return this._sortLODLevels(), this
      }
      getLOD(QQ, WQ) {
        const XQ = this._internalMeshDataInfo;
        if (!XQ._LODLevels || 0 === XQ._LODLevels.length) return this;
        const wQ = WQ || this.uC().mwQ,
          qQ = QQ.mode === vQ.d.ORTHOGRAPHIC_CAMERA ? QQ.minZ : wQ.centerWorld.subtract(QQ.globalPosition).length();
        let TQ = qQ,
          zQ = 1;
        if (XQ._useLODScreenCoverage) {
          const WQ = QQ.screenArea;
          let XQ = wQ.radiusWorld * QQ.minZ / qQ;
          XQ = XQ * XQ * Math.PI, TQ = XQ / WQ, zQ = -1
        }
        if (zQ * XQ._LODLevels[XQ._LODLevels.length - 1].distanceOrScreenCoverage > zQ * TQ) return this.onLODLevelSelection && this.onLODLevelSelection(TQ, this, this), this;
        for (let sQ = 0; sQ < XQ._LODLevels.length; sQ++) {
          const QQ = XQ._LODLevels[sQ];
          if (zQ * QQ.distanceOrScreenCoverage < zQ * TQ) {
            if (QQ.mesh) {
              if (4 === QQ.mesh.delayLoadState) return QQ.mesh._checkDelayState(), this;
              if (2 === QQ.mesh.delayLoadState) return this;
              QQ.mesh._preActivate(), QQ.mesh._updateSubMeshesBoundingInfo(this.worldMatrixFromCache)
            }
            return this.onLODLevelSelection && this.onLODLevelSelection(TQ, this, QQ.mesh), QQ.mesh
          }
        }
        return this.onLODLevelSelection && this.onLODLevelSelection(TQ, this, this), this
      }
      get geometry() {
        return this._geometry
      }
      getTotalVertices() {
        return null === this._geometry || void 0 === this._geometry ? 0 : this._geometry.getTotalVertices()
      }
      getVerticesData(QQ, WQ, XQ, wQ) {
        if (!this._geometry) return null;
        let qQ = wQ ? void 0 : this._userInstancedBuffersStorage?.vertexBuffers[QQ]?.getFloatData(this.instances.length + 1, XQ || WQ && 1 !== this._geometry.meshes.length);
        return qQ || (qQ = this._geometry.getVerticesData(QQ, WQ, XQ)), qQ
      }
      copyVerticesData(QQ, WQ) {
        this._geometry && this._geometry.copyVerticesData(QQ, WQ)
      }
      getVertexBuffer(QQ, WQ) {
        return this._geometry ? (WQ ? void 0 : this._userInstancedBuffersStorage?.vertexBuffers[QQ]) ?? this._geometry.getVertexBuffer(QQ) : null
      }
      isVerticesDataPresent(QQ, WQ) {
        return this._geometry ? !WQ && void 0 !== this._userInstancedBuffersStorage?.vertexBuffers[QQ] || this._geometry.isVerticesDataPresent(QQ) : !!this._delayInfo && -1 !== this._delayInfo.indexOf(QQ)
      }
      isVertexBufferUpdatable(QQ, WQ) {
        if (!this._geometry) return !!this._delayInfo && -1 !== this._delayInfo.indexOf(QQ);
        if (!WQ) {
          const WQ = this._userInstancedBuffersStorage?.vertexBuffers[QQ];
          if (WQ) return WQ.isUpdatable()
        }
        return this._geometry.isVertexBufferUpdatable(QQ)
      }
      getVerticesDataKinds(QQ) {
        if (!this._geometry) {
          const QQ = [];
          if (this._delayInfo)
            for (const WQ of this._delayInfo) QQ.push(WQ);
          return QQ
        }
        const WQ = this._geometry.getVerticesDataKinds();
        if (!QQ && this._userInstancedBuffersStorage)
          for (const XQ in this._userInstancedBuffersStorage.vertexBuffers) - 1 === WQ.indexOf(XQ) && WQ.push(XQ);
        return WQ
      }
      getTotalIndices() {
        return this._geometry ? this._geometry.getTotalIndices() : 0
      }
      lwQ(QQ, WQ) {
        return this._geometry ? this._geometry.lwQ(QQ, WQ) : []
      }
      get isBlocked() {
        return null !== this._masterMesh && void 0 !== this._masterMesh
      }
      isReady() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (2 === this.delayLoadState) return !1;
        if (!super.isReady(QQ)) return !1;
        if (!this.ZD || 0 === this.ZD.length) return !0;
        if (!QQ) return !0;
        const XQ = this.Uj(),
          wQ = this.sE(),
          qQ = WQ || XQ.getCaps().instancedArrays && (this.instances.length > 0 || this.hasThinInstances);
        this.computeWorldMatrix();
        const TQ = this.material || wQ.defaultMaterial;
        if (TQ)
          if (TQ._storeEffectOnSubMeshes)
            for (const sQ of this.ZD) {
              const QQ = sQ.lj();
              if (QQ)
                if (QQ._storeEffectOnSubMeshes) {
                  if (!QQ.isReadyForSubMesh(this, sQ, qQ)) return !1
                } else if (!QQ.isReady(this, qQ)) return !1
            } else if (!TQ.isReady(this, qQ)) return !1;
        const zQ = XQ.currentRenderPassId;
        for (const sQ of this.lightSources) {
          const QQ = sQ.getShadowGenerators();
          if (!QQ) continue;
          const WQ = QQ.values();
          for (let wQ = WQ.next(); !0 !== wQ.done; wQ = WQ.next()) {
            const QQ = wQ.value;
            if (QQ && (!QQ.getShadowMap()?.renderList || QQ.getShadowMap()?.renderList && -1 !== QQ.getShadowMap()?.renderList?.indexOf(this))) {
              const WQ = QQ.getShadowMap().renderPassIds ?? [XQ.currentRenderPassId];
              for (let wQ = 0; wQ < WQ.length; ++wQ) {
                XQ.currentRenderPassId = WQ[wQ];
                for (const WQ of this.ZD)
                  if (!QQ.isReady(WQ, qQ, WQ.lj()?.needAlphaBlendingForMesh(this) ?? !1)) return XQ.currentRenderPassId = zQ, !1
              }
              XQ.currentRenderPassId = zQ
            }
          }
        }
        for (const sQ of this._internalMeshDataInfo._LODLevels)
          if (sQ.mesh && !sQ.mesh.isReady(qQ)) return !1;
        return !0
      }
      get areNormalsFrozen() {
        return this._internalMeshDataInfo._areNormalsFrozen
      }
      hj() {
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
        let WQ = this._instanceDataStorage.renderPasses[QQ];
        return WQ || (WQ = new nQ, this._instanceDataStorage.renderPasses[QQ] = WQ), WQ
      }
      _preActivate() {
        const QQ = this._internalMeshDataInfo,
          WQ = this.sE().getRenderId();
        return QQ._preActivateId === WQ || (QQ._preActivateId = WQ, this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass.visibleInstances = null : this._getInstanceDataStorage().visibleInstances = null), this
      }
      _preActivateForIntermediateRendering(QQ) {
        const WQ = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        return WQ.visibleInstances && (WQ.visibleInstances.intermediateDefaultRenderId = QQ), this
      }
      _registerInstanceForRenderId(QQ, WQ) {
        const XQ = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        return XQ.visibleInstances || (XQ.visibleInstances = {
          defaultRenderId: WQ,
          selfDefaultRenderId: this._renderId,
          intermediateDefaultRenderId: -1
        }), XQ.visibleInstances[WQ] || (void 0 === XQ.previousRenderId || this._instanceDataStorage.useMonoDataStorageRenderPass && !this._instanceDataStorage.isFrozen || delete XQ.visibleInstances[XQ.previousRenderId], XQ.previousRenderId = WQ, XQ.visibleInstances[WQ] = new Array), XQ.visibleInstances[WQ].push(QQ), this
      }
      _afterComputeWorldMatrix() {
        super._afterComputeWorldMatrix(), this.hasThinInstances && (this.aj || this.thinInstanceRefreshBoundingInfo(!1))
      }
      _postActivate() {
        this.edgesShareWithInstances && this.edgesRenderer && this.edgesRenderer.isEnabled && this._renderingGroup && (this._renderingGroup._edgesRenderers.pushNoDuplicate(this.edgesRenderer), this.edgesRenderer.customInstances.push(this.getWorldMatrix()))
      }
      refreshBoundingInfo() {
        let QQ, WQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          XQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.hasBoundingInfo && this.uC().isLocked) return this;
        QQ = "object" === typeof WQ ? WQ : {
          applySkeleton: WQ,
          applyMorph: XQ
        };
        const wQ = this.geometry ? this.geometry.boundingBias : null;
        return this._refreshBoundingInfo(this._getData(QQ, null, lQ.l.PositionKind), wQ), this
      }
      _createGlobalSubMesh(QQ) {
        const WQ = this.getTotalVertices();
        if (!WQ || !this.lwQ()) return null;
        if (this.ZD && this.ZD.length > 0) {
          const XQ = this.lwQ();
          if (!XQ) return null;
          const wQ = XQ.length;
          let qQ = !1;
          if (QQ) qQ = !0;
          else
            for (const QQ of this.ZD) {
              if (QQ.indexStart + QQ.indexCount > wQ) {
                qQ = !0;
                break
              }
              if (QQ.verticesStart + QQ.verticesCount > WQ) {
                qQ = !0;
                break
              }
            }
          if (!qQ) return this.ZD[0]
        }
        return this.releaseSubMeshes(), new AQ.b(0, 0, WQ, 0, this.getTotalIndices() || (this.isUnIndexed ? WQ : 0), this)
      }
      subdivide(QQ) {
        if (QQ < 1) return;
        const WQ = this.getTotalIndices();
        let XQ = WQ / QQ | 0,
          wQ = 0;
        for (; XQ % 3 !== 0;) XQ++;
        this.releaseSubMeshes();
        for (let qQ = 0; qQ < QQ && !(wQ >= WQ); qQ++) AQ.b.CreateFromIndices(0, wQ, wQ + XQ >= WQ ? WQ - wQ : XQ, this, void 0, !1), wQ += XQ;
        this.refreshBoundingInfo(), this.synchronizeInstances()
      }
      setVerticesData(QQ, WQ) {
        let XQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          wQ = arguments.length > 3 ? arguments[3] : void 0;
        if (this._geometry) this._geometry.setVerticesData(QQ, WQ, XQ, wQ);
        else {
          const wQ = new hQ.e;
          wQ.set(WQ, QQ);
          const qQ = this.sE();
          new iQ.d(iQ.d.RandomId(), qQ, wQ, XQ, this)
        }
        return this
      }
      removeVerticesData(QQ) {
        this._geometry && this._geometry.removeVerticesData(QQ)
      }
      markVerticesDataAsUpdatable(QQ) {
        let WQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const XQ = this.getVertexBuffer(QQ);
        XQ && XQ.isUpdatable() !== WQ && this.setVerticesData(QQ, this.getVerticesData(QQ), WQ)
      }
      setVerticesBuffer(QQ) {
        let WQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        return this._geometry || (this._geometry = iQ.d.CreateGeometryForMesh(this)), this._geometry.setVerticesBuffer(QQ, XQ, WQ), this
      }
      updateVerticesData(QQ, WQ, XQ, wQ) {
        return this._geometry ? (wQ ? (this.makeGeometryUnique(), this.updateVerticesData(QQ, WQ, XQ, !1)) : this._geometry.updateVerticesData(QQ, WQ, XQ), this) : this
      }
      updateMeshPositions(QQ) {
        let WQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const XQ = this.getVerticesData(lQ.l.PositionKind);
        if (!XQ) return this;
        if (QQ(XQ), this.updateVerticesData(lQ.l.PositionKind, XQ, !1, !1), WQ) {
          const QQ = this.lwQ(),
            WQ = this.getVerticesData(lQ.l.NormalKind);
          if (!WQ) return this;
          hQ.e.ComputeNormals(XQ, QQ, WQ), this.updateVerticesData(lQ.l.NormalKind, WQ, !1, !1)
        }
        return this
      }
      makeGeometryUnique() {
        if (!this._geometry) return this;
        if (1 === this._geometry.meshes.length) return this;
        const QQ = this._geometry,
          WQ = this._geometry.copy(iQ.d.RandomId());
        return QQ.releaseForMesh(this, !0), WQ.applyToMesh(this), this
      }
      setIndexBuffer(QQ, WQ, XQ) {
        let wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          qQ = this._geometry;
        qQ || (qQ = new iQ.d(iQ.d.RandomId(), this.sE(), void 0, void 0, this)), qQ.setIndexBuffer(QQ, WQ, XQ, wQ)
      }
      setIndices(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          XQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          wQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this._geometry) this._geometry.setIndices(QQ, WQ, XQ, wQ);
        else {
          const wQ = new hQ.e;
          wQ.indices = QQ;
          const qQ = this.sE();
          new iQ.d(iQ.d.RandomId(), qQ, wQ, XQ, this, WQ)
        }
        return this
      }
      updateIndices(QQ, WQ) {
        let XQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return this._geometry ? (this._geometry.updateIndices(QQ, WQ, XQ), this) : this
      }
      toLeftHanded() {
        return this._geometry ? (this._geometry.toLeftHanded(), this) : this
      }
      _bind(QQ, WQ, XQ) {
        let wQ = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        if (!this._geometry) return this;
        const qQ = this.sE().Uj();
        let TQ;
        if (this._unIndexed)
          if (this._getRenderingFillMode(XQ) === RQ.b.WireFrameFillMode) TQ = QQ._getLinesIndexBuffer(this.lwQ(), qQ);
          else TQ = null;
        else switch (this._getRenderingFillMode(XQ)) {
          case RQ.b.PointFillMode:
            TQ = null;
            break;
          case RQ.b.WireFrameFillMode:
            TQ = QQ._getLinesIndexBuffer(this.lwQ(), qQ);
            break;
          default:
          case RQ.b.TriangleFillMode:
            TQ = this._geometry.getIndexBuffer()
        }
        return this._bindDirect(WQ, TQ, wQ)
      }
      _bindDirect(QQ, WQ) {
        let XQ = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (!this._geometry) return this;
        if (this.morphTargetManager && this.morphTargetManager.isUsingTextureForTargets && this.morphTargetManager._bind(QQ), XQ && this._userInstancedBuffersStorage && !this.hasThinInstances) {
          if (!this._instanceDataStorage.useMonoDataStorageRenderPass && this._userInstancedBuffersStorage.renderPasses && this._userInstancedBuffersStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId]) {
            const QQ = this._userInstancedBuffersStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId];
            for (const WQ in QQ) this._userInstancedBuffersStorage.vertexBuffers[WQ] = QQ[WQ]
          }
          this._geometry._bind(QQ, WQ, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects)
        } else this._geometry._bind(QQ, WQ);
        return this
      }
      _draw(QQ, WQ, XQ) {
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        this._internalMeshDataInfo._onBeforeDrawObservable && this._internalMeshDataInfo._onBeforeDrawObservable.notifyObservers(this);
        const wQ = this.sE().Uj(),
          qQ = wQ._currentMaterialContext,
          TQ = qQ && qQ.useVertexPulling;
        return this._unIndexed && WQ !== RQ.b.WireFrameFillMode || WQ == RQ.b.PointFillMode ? wQ.drawArraysType(WQ, QQ.verticesStart, QQ.verticesCount, this.forcedInstanceCount || XQ) : WQ == RQ.b.WireFrameFillMode ? wQ.drawElementsType(WQ, 0, QQ._linesIndexCount, this.forcedInstanceCount || XQ) : TQ ? wQ.drawArraysType(WQ, QQ.indexStart, QQ.indexCount, this.forcedInstanceCount || XQ) : wQ.drawElementsType(WQ, QQ.indexStart, QQ.indexCount, this.forcedInstanceCount || XQ), this
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
        let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const XQ = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        if (this._instanceDataStorage.isFrozen) {
          if (WQ) return XQ.batchCacheReplacementModeInFrozenMode.hardwareInstancedRendering[QQ] = !1, XQ.batchCacheReplacementModeInFrozenMode.renderSelf[QQ] = !0, XQ.batchCacheReplacementModeInFrozenMode;
          if (XQ.previousBatch) return XQ.previousBatch
        }
        const wQ = this.sE(),
          qQ = wQ._isInIntermediateRendering(),
          TQ = qQ ? this._internalAbstractMeshDataInfo._onlyForInstancesIntermediate : this._internalAbstractMeshDataInfo._onlyForInstances,
          zQ = XQ.batchCache;
        if (zQ.mustReturn = !1, zQ.renderSelf[QQ] = WQ || !TQ && this.isEnabled() && this.isVisible, zQ.visibleInstances[QQ] = null, XQ.visibleInstances && !WQ) {
          const WQ = XQ.visibleInstances,
            TQ = wQ.getRenderId(),
            sQ = qQ ? WQ.intermediateDefaultRenderId : WQ.defaultRenderId;
          zQ.visibleInstances[QQ] = WQ[TQ], !zQ.visibleInstances[QQ] && sQ && (zQ.visibleInstances[QQ] = WQ[sQ])
        }
        return zQ.hardwareInstancedRendering[QQ] = !WQ && this._instanceDataStorage.hardwareInstancedRendering && null !== zQ.visibleInstances[QQ] && void 0 !== zQ.visibleInstances[QQ], XQ.previousBatch = zQ, zQ
      }
      _updateInstancedBuffers(QQ, WQ, XQ, wQ, qQ, TQ) {
        const zQ = WQ.visibleInstances[QQ._id],
          sQ = zQ ? zQ.length : 0,
          FQ = WQ.parent,
          PQ = this._instanceDataStorage;
        let gQ = FQ.instancesBuffer,
          JQ = FQ.instancesPreviousBuffer,
          rQ = 0,
          IQ = 0;
        const jQ = WQ.renderSelf[QQ._id],
          BQ = this._scene.floatingOriginOffset,
          yQ = !gQ || XQ !== FQ.instancesBufferSize || this._scene.needsPreviousWorldMatrices && !FQ.instancesPreviousBuffer;
        if (this._instanceDataStorage.manualUpdate || PQ.isFrozen && !yQ) IQ = (jQ ? 1 : 0) + sQ;
        else {
          const WQ = this.getWorldMatrix();
          if (jQ) {
            this._scene.needsPreviousWorldMatrices && (PQ.masterMeshPreviousWorldMatrix ? (PQ.masterMeshPreviousWorldMatrix.copyToArray(FQ.instancesPreviousData, rQ), PQ.masterMeshPreviousWorldMatrix.WH(WQ)) : (PQ.masterMeshPreviousWorldMatrix = WQ.clone(), PQ.masterMeshPreviousWorldMatrix.copyToArray(FQ.instancesPreviousData, rQ))), WQ.copyToArray(FQ.instancesData, rQ);
            const QQ = WQ.awQ();
            FQ.instancesData[rQ + 12] = QQ[12] - BQ.x, FQ.instancesData[rQ + 13] = QQ[13] - BQ.y, FQ.instancesData[rQ + 14] = QQ[14] - BQ.z, rQ += 16, IQ++
          }
          if (zQ) {
            if (KQ.INSTANCEDMESH_SORT_TRANSPARENT && this._scene.activeCamera && QQ.lj()?.needAlphaBlendingForMesh(QQ.getRenderingMesh())) {
              const QQ = this._scene.activeCamera.globalPosition;
              for (let WQ = 0; WQ < zQ.length; WQ++) {
                const XQ = zQ[WQ];
                XQ._distanceToCamera = dQ.s.Distance(XQ.uC().mwQ.centerWorld, QQ)
              }
              zQ.sort(((QQ, WQ) => QQ._distanceToCamera > WQ._distanceToCamera ? -1 : QQ._distanceToCamera < WQ._distanceToCamera ? 1 : 0))
            }
            for (let QQ = 0; QQ < zQ.length; QQ++) {
              const WQ = zQ[QQ],
                XQ = WQ.getWorldMatrix();
              XQ.copyToArray(FQ.instancesData, rQ), this._scene.needsPreviousWorldMatrices && (WQ._previousWorldMatrix ? (WQ._previousWorldMatrix.copyToArray(FQ.instancesPreviousData, rQ), WQ._previousWorldMatrix.WH(XQ)) : (WQ._previousWorldMatrix = XQ.clone(), WQ._previousWorldMatrix.copyToArray(FQ.instancesPreviousData, rQ)));
              const wQ = XQ.awQ();
              FQ.instancesData[rQ + 12] = wQ[12] - BQ.x, FQ.instancesData[rQ + 13] = wQ[13] - BQ.y, FQ.instancesData[rQ + 14] = wQ[14] - BQ.z, rQ += 16, IQ++
            }
          }
        }
        if (yQ) {
          let QQ;
          if (gQ && gQ.dispose(), JQ && JQ.dispose(), gQ = new lQ.d(wQ, FQ.instancesData, !0, 16, !1, !0), FQ.instancesBuffer = gQ, this._userInstancedBuffersStorage || (this._userInstancedBuffersStorage = {
              data: {},
              vertexBuffers: {},
              strides: {},
              sizes: {},
              vertexArrayObjects: this.Uj().getCaps().vertexArrayObject ? {} : void 0
            }), this._instanceDataStorage.useMonoDataStorageRenderPass) QQ = this._userInstancedBuffersStorage.vertexBuffers;
          else {
            this._userInstancedBuffersStorage.renderPasses || (this._userInstancedBuffersStorage.renderPasses = {});
            const WQ = this._instanceDataStorage.engine.currentRenderPassId;
            QQ = this._userInstancedBuffersStorage.renderPasses[WQ], QQ || (this._userInstancedBuffersStorage.renderPasses[WQ] = QQ = {})
          }
          QQ.world0 = gQ.createVertexBuffer("world0", 0, 4), QQ.world1 = gQ.createVertexBuffer("world1", 4, 4), QQ.world2 = gQ.createVertexBuffer("world2", 8, 4), QQ.world3 = gQ.createVertexBuffer("world3", 12, 4), this._scene.needsPreviousWorldMatrices && (JQ = new lQ.d(wQ, FQ.instancesPreviousData, !0, 16, !1, !0), FQ.instancesPreviousBuffer = JQ, QQ.previousWorld0 = JQ.createVertexBuffer("previousWorld0", 0, 4), QQ.previousWorld1 = JQ.createVertexBuffer("previousWorld1", 4, 4), QQ.previousWorld2 = JQ.createVertexBuffer("previousWorld2", 8, 4), QQ.previousWorld3 = JQ.createVertexBuffer("previousWorld3", 12, 4)), this._invalidateInstanceVertexArrayObject()
        } else this._instanceDataStorage.isFrozen && !this._instanceDataStorage.forceMatrixUpdates || (gQ.updateDirectly(FQ.instancesData, 0, IQ), !this._scene.needsPreviousWorldMatrices || this._instanceDataStorage.manualUpdate && !this._instanceDataStorage.previousManualUpdate || JQ.updateDirectly(FQ.instancesPreviousData, 0, IQ));
        this._processInstancedBuffers(zQ, jQ), TQ && void 0 !== qQ && (this.sE()._activeIndices.addCount(QQ.indexCount * IQ, !1), wQ._currentDrawContext && (wQ._currentDrawContext.useInstancing = !0), this._bind(QQ, TQ, qQ), this._draw(QQ, qQ, IQ)), !this._scene.needsPreviousWorldMatrices || yQ || !this._instanceDataStorage.manualUpdate || this._instanceDataStorage.isFrozen && !this._instanceDataStorage.forceMatrixUpdates || this._instanceDataStorage.previousManualUpdate || JQ.updateDirectly(FQ.instancesData, 0, IQ)
      }
      _renderWithInstances(QQ, WQ, XQ, wQ, qQ) {
        const TQ = XQ.visibleInstances[QQ._id],
          zQ = TQ ? TQ.length : 0,
          sQ = XQ.parent,
          FQ = sQ.instancesBufferSize,
          PQ = 16 * (zQ + 1) * 4;
        for (; sQ.instancesBufferSize < PQ;) sQ.instancesBufferSize *= 2;
        return sQ.instancesData && FQ == sQ.instancesBufferSize || (sQ.instancesData = new Float32Array(sQ.instancesBufferSize / 4)), (this._scene.needsPreviousWorldMatrices && !sQ.instancesPreviousData || FQ != sQ.instancesBufferSize) && (sQ.instancesPreviousData = new Float32Array(sQ.instancesBufferSize / 4)), this._updateInstancedBuffers(QQ, XQ, FQ, qQ, WQ, wQ), qQ.unbindInstanceAttributes(), this
      }
      _renderWithThinInstances(QQ, WQ, XQ, wQ) {
        const qQ = this._thinInstanceDataStorage?.instancesCount ?? 0;
        this.sE()._activeIndices.addCount(QQ.indexCount * qQ, !1), wQ._currentDrawContext && (wQ._currentDrawContext.useInstancing = !0), this._bind(QQ, XQ, WQ), this._draw(QQ, WQ, qQ), this._scene.needsPreviousWorldMatrices && !this._thinInstanceDataStorage.previousMatrixData && this._thinInstanceDataStorage.matrixData && (this._thinInstanceDataStorage.previousMatrixBuffer ? this._thinInstanceDataStorage.previousMatrixBuffer.updateDirectly(this._thinInstanceDataStorage.matrixData, 0, qQ) : this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", this._thinInstanceDataStorage.matrixData, !1)), wQ.unbindInstanceAttributes()
      }
      _processInstancedBuffers(QQ, WQ) {}
      _processRendering(QQ, WQ, XQ, wQ, qQ, TQ, zQ, sQ) {
        const FQ = this.sE(),
          PQ = FQ.Uj();
        if (wQ = this._getRenderingFillMode(wQ), TQ && WQ.getRenderingMesh().hasThinInstances) return this._renderWithThinInstances(WQ, wQ, XQ, PQ), this;
        if (TQ) this._renderWithInstances(WQ, wQ, qQ, XQ, PQ);
        else {
          PQ._currentDrawContext && (PQ._currentDrawContext.useInstancing = !1);
          let XQ = 0;
          qQ.renderSelf[WQ._id] && (zQ && zQ(!1, QQ.getWorldMatrix(), sQ), XQ++, this._draw(WQ, wQ, this._instanceDataStorage.overridenInstanceCount));
          const TQ = qQ.visibleInstances[WQ._id];
          if (TQ) {
            const QQ = TQ.length;
            XQ += QQ;
            for (let XQ = 0; XQ < QQ; XQ++) {
              const QQ = TQ[XQ].getWorldMatrix();
              zQ && zQ(!0, QQ, sQ), this._draw(WQ, wQ)
            }
          }
          FQ._activeIndices.addCount(WQ.indexCount * XQ, !1)
        }
        return this
      }
      _disposeInstanceDataStorageRenderPass(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        QQ?.instancesBuffer && (WQ && QQ.instancesBuffer.dispose(), QQ.instancesBuffer = null), QQ?.instancesPreviousBuffer && (WQ && QQ.instancesPreviousBuffer.dispose(), QQ.instancesPreviousBuffer = null)
      }
      _rebuild() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const WQ in this._instanceDataStorage.renderPasses) {
          const XQ = this._instanceDataStorage.renderPasses[WQ];
          this._disposeInstanceDataStorageRenderPass(XQ, QQ)
        }
        if (this._disposeInstanceDataStorageRenderPass(this._instanceDataStorage.dataStorageRenderPass, QQ), this._userInstancedBuffersStorage) {
          for (const WQ in this._userInstancedBuffersStorage.vertexBuffers) {
            const XQ = this._userInstancedBuffersStorage.vertexBuffers[WQ];
            XQ && (QQ && XQ.dispose(), this._userInstancedBuffersStorage.vertexBuffers[WQ] = null)
          }
          this._userInstancedBuffersStorage.vertexArrayObjects && (this._userInstancedBuffersStorage.vertexArrayObjects = {})
        }
        this._internalMeshDataInfo._effectiveMaterial = null, super._rebuild(QQ)
      }
      _releaseRenderPassId(QQ) {
        const WQ = this._instanceDataStorage.renderPasses[QQ];
        if (WQ && (this._disposeInstanceDataStorageRenderPass(WQ, !0), delete this._instanceDataStorage.renderPasses[QQ]), this._userInstancedBuffersStorage?.renderPasses) {
          const WQ = this._userInstancedBuffersStorage.renderPasses[QQ];
          if (WQ)
            for (const QQ in WQ) WQ[QQ]?.dispose();
          delete this._userInstancedBuffersStorage.renderPasses[QQ]
        }
        const XQ = this._userInstancedBuffersStorage?.interleavedBuffers;
        XQ?.[QQ] && (XQ[QQ].buffer.dispose(), delete XQ[QQ])
      }
      _freeze() {
        if (this.ZD) {
          for (let QQ = 0; QQ < this.ZD.length; QQ++) this._getInstancesRenderList(QQ);
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
      renderWithRenderPassId(QQ, WQ, XQ, wQ) {
        let qQ = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        const TQ = this._scene.Uj(),
          zQ = TQ.currentRenderPassId;
        if (void 0 !== QQ && (TQ.currentRenderPassId = QQ), wQ)(!qQ || qQ && wQ.isInFrustum(this._scene._frustumPlanes)) && this.render(wQ, !!WQ, XQ);
        else
          for (let sQ = 0; sQ < this.ZD.length; sQ++) {
            const QQ = this.ZD[sQ];
            (!qQ || qQ && QQ.isInFrustum(this._scene._frustumPlanes)) && this.render(QQ, !!WQ, XQ)
          }
        return void 0 !== QQ && (TQ.currentRenderPassId = zQ), this
      }
      directRender() {
        if (!this.ZD) return this;
        for (const QQ of this.ZD) this.render(QQ, !1);
        return this
      }
      render(QQ, WQ, XQ) {
        const wQ = this.sE(),
          qQ = wQ.Uj();
        this._internalAbstractMeshDataInfo._isActiveIntermediate ? this._internalAbstractMeshDataInfo._isActiveIntermediate = !1 : this._internalAbstractMeshDataInfo._isActive = !1;
        const TQ = wQ.activeCameras?.length ?? 0,
          zQ = TQ > 1 && wQ.activeCamera === wQ.activeCameras[0] || TQ <= 1,
          sQ = this._occlusionDataStorage && -1 !== this._occlusionDataStorage.occlusionForRenderPassId && this._occlusionDataStorage.occlusionForRenderPassId !== qQ.currentRenderPassId;
        if (zQ && this._checkOcclusionQuery(sQ) && !this._occlusionDataStorage.forceRenderingWhenOccluded) return this;
        const FQ = this._getInstancesRenderList(QQ._id, !!XQ);
        if (FQ.mustReturn) return this;
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        let PQ = 0,
          gQ = null;
        this.ignoreCameraMaxZ && wQ.activeCamera && !wQ._isInIntermediateRendering() && (PQ = wQ.activeCamera.maxZ, gQ = wQ.activeCamera, wQ.activeCamera.maxZ = 0, wQ.updateTransformMatrix(!0)), this._internalMeshDataInfo._onBeforeRenderObservable && this._internalMeshDataInfo._onBeforeRenderObservable.notifyObservers(this);
        const JQ = QQ.getRenderingMesh(),
          rQ = FQ.hardwareInstancedRendering[QQ._id] || JQ.hasThinInstances || !!this._userInstancedBuffersStorage && !QQ.getMesh()._internalAbstractMeshDataInfo._actAsRegularMesh,
          IQ = this._instanceDataStorage,
          jQ = QQ.lj();
        if (!jQ) return gQ && (gQ.maxZ = PQ, wQ.updateTransformMatrix(!0)), this;
        if (IQ.isFrozen && this._internalMeshDataInfo._effectiveMaterial && this._internalMeshDataInfo._effectiveMaterial === jQ) {
          if (jQ._storeEffectOnSubMeshes && !QQ._drawWrapper?._wasPreviouslyReady || !jQ._storeEffectOnSubMeshes && !jQ._getDrawWrapper()._wasPreviouslyReady) return gQ && (gQ.maxZ = PQ, wQ.updateTransformMatrix(!0)), this
        } else {
          if (jQ._storeEffectOnSubMeshes) {
            if (!jQ.isReadyForSubMesh(this, QQ, rQ)) return gQ && (gQ.maxZ = PQ, wQ.updateTransformMatrix(!0)), this
          } else if (!jQ.isReady(this, rQ)) return gQ && (gQ.maxZ = PQ, wQ.updateTransformMatrix(!0)), this;
          this._internalMeshDataInfo._effectiveMaterial = jQ
        }
        if (WQ) {
          const QQ = this._internalMeshDataInfo._effectiveMaterial;
          if (1 === QQ.alphaModes.length) qQ.setAlphaMode(QQ.alphaMode);
          else
            for (let WQ = 0; WQ < QQ.alphaModes.length; WQ++) {
              const XQ = QQ.alphaModes[WQ];
              qQ.setAlphaMode(void 0 !== XQ ? XQ : 2, !1, WQ)
            }
        }
        let BQ;
        BQ = this._internalMeshDataInfo._effectiveMaterial._storeEffectOnSubMeshes ? QQ._drawWrapper : this._internalMeshDataInfo._effectiveMaterial._getDrawWrapper();
        const yQ = BQ?.effect ?? null;
        for (let vQ = 0, dQ = wQ._beforeRenderingMeshStage; vQ < dQ.length; vQ++) {
          dQ[vQ].action(this, QQ, FQ, yQ)
        }
        if (!BQ || !yQ) return gQ && (gQ.maxZ = PQ, wQ.updateTransformMatrix(!0)), this;
        const VQ = XQ || this;
        let DQ;
        if (!IQ.isFrozen && (this._internalMeshDataInfo._effectiveMaterial.backFaceCulling || null !== this._internalMeshDataInfo._effectiveMaterial.sideOrientation || this._internalMeshDataInfo._effectiveMaterial._twoSidedLighting)) {
          const QQ = VQ._getWorldMatrixDeterminant();
          DQ = this._internalMeshDataInfo._effectiveMaterial._getEffectiveOrientation(this), QQ < 0 && (DQ = DQ === RQ.b.ClockWiseSideOrientation ? RQ.b.CounterClockWiseSideOrientation : RQ.b.ClockWiseSideOrientation), this._internalMeshDataInfo._effectiveSideOrientation = DQ
        }
        const pQ = this._internalMeshDataInfo._effectiveMaterial._preBind(BQ, this._internalMeshDataInfo._effectiveSideOrientation);
        this._internalMeshDataInfo._effectiveMaterial.forceDepthWrite && qQ.setDepthWrite(!0);
        const GQ = this._internalMeshDataInfo._effectiveMaterial,
          UQ = GQ.fillMode;
        this._internalMeshDataInfo._onBeforeBindObservable && this._internalMeshDataInfo._onBeforeBindObservable.notifyObservers(this), rQ || this._bind(QQ, yQ, UQ, !1);
        const bQ = VQ.getWorldMatrix();
        GQ._storeEffectOnSubMeshes ? GQ.bindForSubMesh(bQ, this, QQ) : GQ.bind(bQ, this);
        try {
          EQ.d._BindAttachmentsForEffect(qQ, yQ) && (!GQ.backFaceCulling && GQ.separateCullingPass && (qQ.setState(!0, GQ.zOffset, !1, !pQ, GQ.cullBackFaces, GQ.stencil, GQ.zOffsetUnits), this._processRendering(this, QQ, yQ, UQ, FQ, rQ, this._onBeforeDraw, this._internalMeshDataInfo._effectiveMaterial), qQ.setState(!0, GQ.zOffset, !1, pQ, GQ.cullBackFaces, GQ.stencil, GQ.zOffsetUnits), this._internalMeshDataInfo._onBetweenPassObservable && this._internalMeshDataInfo._onBetweenPassObservable.notifyObservers(QQ)), this._processRendering(this, QQ, yQ, UQ, FQ, rQ, this._onBeforeDraw, this._internalMeshDataInfo._effectiveMaterial))
        } finally {
          EQ.d._RestoreAttachments(qQ)
        }
        this._internalMeshDataInfo._effectiveMaterial.unbind();
        for (let vQ = 0, dQ = wQ._afterRenderingMeshStage; vQ < dQ.length; vQ++) {
          dQ[vQ].action(this, QQ, FQ, yQ)
        }
        return this._internalMeshDataInfo._onAfterRenderObservable && this._internalMeshDataInfo._onAfterRenderObservable.notifyObservers(this), gQ && (gQ.maxZ = PQ, wQ.updateTransformMatrix(!0)), 2 !== wQ.performancePriority || IQ.isFrozen || this._freeze(), this
      }
      _renderRunFollower(QQ, WQ) {
        const XQ = this._scene,
          wQ = XQ._engine;
        if (wQ.isWebGPU || QQ._mesh !== this || 0 !== this.instances.length || this.render !== KQ.prototype.render) return !1;
        const qQ = QQ.lj();
        if (!qQ || qQ !== XQ._cachedMaterial || void 0 === qQ._canBindRunFollower) return !1;
        const TQ = QQ._drawWrapper,
          zQ = TQ?.effect;
        if (!zQ || zQ !== XQ._cachedEffect || this.visibility !== XQ._cachedVisibility || TQ._forceRebindOnNextCall) return !1;
        const sQ = this.hasThinInstances;
        if (!sQ && this._userInstancedBuffersStorage) return !1;
        if (!TQ._wasPreviouslyReady || TQ._wasPreviouslyUsingInstances !== sQ) return !1;
        const FQ = this._internalMeshDataInfo;
        if (this.ignoreCameraMaxZ || this.morphTargetManager || this._instanceDataStorage.isFrozen || XQ._isInIntermediateRendering() || 0 !== XQ._beforeRenderingMeshStage.length || 0 !== XQ._afterRenderingMeshStage.length || FQ._onBeforeRenderObservable?.hasObservers() || FQ._onBeforeBindObservable?.hasObservers() || FQ._onAfterRenderObservable?.hasObservers()) return !1;
        const PQ = this.occlusionType;
        if (void 0 !== PQ && PQ !== cQ.c.OCCLUSION_TYPE_NONE || !qQ._canBindRunFollower(XQ, wQ, this, QQ, zQ)) return !1;
        const gQ = this._internalAbstractMeshDataInfo,
          JQ = gQ._isActiveIntermediate;
        JQ ? gQ._isActiveIntermediate = !1 : gQ._isActive = !1;
        const rQ = XQ.activeCameras?.length ?? 0;
        (rQ > 1 && XQ.activeCamera === XQ.activeCameras[0] || rQ <= 1) && this._checkOcclusionQuery(!1);
        const IQ = this._getInstancesRenderList(QQ._id);
        if (IQ.mustReturn) return !0;
        if (!sQ && !IQ.renderSelf[QQ._id]) return JQ ? gQ._isActiveIntermediate = !0 : gQ._isActive = !0, !1;
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return !0;
        if (FQ._effectiveMaterial = qQ, WQ)
          if (1 === qQ.alphaModes.length) wQ.setAlphaMode(qQ.alphaMode);
          else
            for (let BQ = 0; BQ < qQ.alphaModes.length; BQ++) {
              const QQ = qQ.alphaModes[BQ];
              wQ.setAlphaMode(void 0 !== QQ ? QQ : 2, !1, BQ)
            }
        if (qQ.backFaceCulling || null !== qQ.sideOrientation || qQ._twoSidedLighting) {
          const QQ = this._getWorldMatrixDeterminant();
          let WQ = qQ._getEffectiveOrientation(this);
          QQ < 0 && (WQ = WQ === RQ.b.ClockWiseSideOrientation ? RQ.b.CounterClockWiseSideOrientation : RQ.b.ClockWiseSideOrientation), FQ._effectiveSideOrientation = WQ
        }
        qQ._preBind(TQ, FQ._effectiveSideOrientation), qQ.forceDepthWrite && wQ.setDepthWrite(!0);
        const jQ = qQ.fillMode;
        return sQ || this._bind(QQ, zQ, jQ, !1), qQ._bindRunFollower(this.getWorldMatrix(), this, QQ, zQ), this._processRendering(this, QQ, zQ, jQ, IQ, sQ, this._onBeforeDraw, qQ), qQ.unbind(), 2 === XQ.performancePriority && this._freeze(), !0
      }
      cleanMatrixWeights() {
        this.isVerticesDataPresent(lQ.l.MatricesWeightsKind) && (this.isVerticesDataPresent(lQ.l.MatricesWeightsExtraKind) ? this._normalizeSkinWeightsAndExtra() : this._normalizeSkinFourWeights())
      }
      _normalizeSkinFourWeights() {
        const QQ = this.getVerticesData(lQ.l.MatricesWeightsKind),
          WQ = QQ.length;
        for (let XQ = 0; XQ < WQ; XQ += 4) {
          const WQ = QQ[XQ] + QQ[XQ + 1] + QQ[XQ + 2] + QQ[XQ + 3];
          if (0 === WQ) QQ[XQ] = 1;
          else {
            const wQ = 1 / WQ;
            QQ[XQ] *= wQ, QQ[XQ + 1] *= wQ, QQ[XQ + 2] *= wQ, QQ[XQ + 3] *= wQ
          }
        }
        this.setVerticesData(lQ.l.MatricesWeightsKind, QQ)
      }
      _normalizeSkinWeightsAndExtra() {
        const QQ = this.getVerticesData(lQ.l.MatricesWeightsExtraKind),
          WQ = this.getVerticesData(lQ.l.MatricesWeightsKind),
          XQ = WQ.length;
        for (let wQ = 0; wQ < XQ; wQ += 4) {
          let XQ = WQ[wQ] + WQ[wQ + 1] + WQ[wQ + 2] + WQ[wQ + 3];
          if (XQ += QQ[wQ] + QQ[wQ + 1] + QQ[wQ + 2] + QQ[wQ + 3], 0 === XQ) WQ[wQ] = 1;
          else {
            const qQ = 1 / XQ;
            WQ[wQ] *= qQ, WQ[wQ + 1] *= qQ, WQ[wQ + 2] *= qQ, WQ[wQ + 3] *= qQ, QQ[wQ] *= qQ, QQ[wQ + 1] *= qQ, QQ[wQ + 2] *= qQ, QQ[wQ + 3] *= qQ
          }
        }
        this.setVerticesData(lQ.l.MatricesWeightsKind, WQ), this.setVerticesData(lQ.l.MatricesWeightsKind, QQ)
      }
      validateSkinning() {
        const QQ = this.getVerticesData(lQ.l.MatricesWeightsExtraKind),
          WQ = this.getVerticesData(lQ.l.MatricesWeightsKind);
        if (null === WQ || null == this.skeleton) return {
          skinned: !1,
          valid: !0,
          nI: "not skinned"
        };
        const XQ = WQ.length;
        let wQ = 0,
          qQ = 0,
          TQ = 0,
          zQ = 0;
        const sQ = null === QQ ? 4 : 8,
          FQ = [];
        for (let IQ = 0; IQ <= sQ; IQ++) FQ[IQ] = 0;
        for (let IQ = 0; IQ < XQ; IQ += 4) {
          let XQ = WQ[IQ],
            PQ = XQ,
            gQ = 0 === PQ ? 0 : 1;
          for (let qQ = 1; qQ < sQ; qQ++) {
            const TQ = qQ < 4 ? WQ[IQ + qQ] : QQ[IQ + qQ - 4];
            TQ > XQ && wQ++, 0 !== TQ && gQ++, PQ += TQ, XQ = TQ
          }
          if (FQ[gQ]++, gQ > TQ && (TQ = gQ), 0 === PQ) qQ++;
          else {
            const XQ = 1 / PQ;
            let wQ = 0;
            for (let qQ = 0; qQ < sQ; qQ++) wQ += qQ < 4 ? Math.abs(WQ[IQ + qQ] - WQ[IQ + qQ] * XQ) : Math.abs(QQ[IQ + qQ - 4] - QQ[IQ + qQ - 4] * XQ);
            wQ > .001 && zQ++
          }
        }
        const PQ = this.skeleton.bones.length,
          gQ = this.getVerticesData(lQ.l.MatricesIndicesKind),
          JQ = this.getVerticesData(lQ.l.MatricesIndicesExtraKind);
        let rQ = 0;
        for (let IQ = 0; IQ < XQ; IQ += 4)
          for (let QQ = 0; QQ < sQ; QQ++) {
            const WQ = QQ < 4 ? gQ[IQ + QQ] : JQ[IQ + QQ - 4];
            (WQ >= PQ || WQ < 0) && rQ++
          }
        return {
          skinned: !0,
          valid: 0 === qQ && 0 === zQ && 0 === rQ,
          nI: "Number of Weights = " + XQ / 4 + "\nMaximum influences = " + TQ + "\nMissing Weights = " + qQ + "\nNot Sorted = " + wQ + "\nNot Normalized = " + zQ + "\nWeightCounts = [" + FQ + "]\nNumber of bones = " + PQ + "\nBad Bone Indices = " + rQ
        }
      }
      _checkDelayState() {
        const QQ = this.sE();
        return this._geometry ? this._geometry.load(QQ) : 4 === this.delayLoadState && (this.delayLoadState = 2, this._queueLoad(QQ)), this
      }
      _queueLoad(QQ) {
        QQ.addPendingData(this);
        const WQ = -1 !== this.delayLoadingFile.indexOf(".babylonbinarymeshdata");
        return (async () => {
          try {
            const XQ = await QQ._loadDelayedFileAsync(this.delayLoadingFile, WQ, !0);
            XQ instanceof ArrayBuffer ? this._delayLoadingFunction(XQ, this) : this._delayLoadingFunction(JSON.parse(XQ), this);
            for (const QQ of this.instances) QQ.refreshBoundingInfo(), QQ._syncSubMeshes();
            this.delayLoadState = 1, QQ.removePendingData(this)
          } catch (XQ) {
            QQ.removePendingData(this), QQ.rG || kQ.b.Error(`Unable to delay load geometry data for mesh "${this.name}" from "${this.delayLoadingFile}": ${XQ}`)
          }
        })(), this
      }
      isInFrustum(QQ) {
        return 2 !== this.delayLoadState && (!!super.isInFrustum(QQ) && (this._checkDelayState(), !0))
      }
      setMaterialById(QQ) {
        const WQ = this.sE().materials;
        let XQ;
        for (XQ = WQ.length - 1; XQ > -1; XQ--)
          if (WQ[XQ].id === QQ) return this.material = WQ[XQ], this;
        const wQ = this.sE().multiMaterials;
        for (XQ = wQ.length - 1; XQ > -1; XQ--)
          if (wQ[XQ].id === QQ) return this.material = wQ[XQ], this;
        return this
      }
      getAnimatables() {
        const QQ = [];
        return this.material && QQ.push(this.material), this.skeleton && QQ.push(this.skeleton), QQ
      }
      bakeTransformIntoVertices(QQ) {
        if (!this.isVerticesDataPresent(lQ.l.PositionKind)) return this;
        const WQ = this.ZD.splice(0);
        this._resetPointsArrayCache();
        let XQ = this.getVerticesData(lQ.l.PositionKind);
        const wQ = dQ.s.Zero();
        let qQ;
        for (qQ = 0; qQ < XQ.length; qQ += 3) dQ.s.TransformCoordinatesFromFloatsToRef(XQ[qQ], XQ[qQ + 1], XQ[qQ + 2], QQ, wQ).toArray(XQ, qQ);
        if (this.setVerticesData(lQ.l.PositionKind, XQ, this.getVertexBuffer(lQ.l.PositionKind).isUpdatable()), this.isVerticesDataPresent(lQ.l.NormalKind)) {
          for (XQ = this.getVerticesData(lQ.l.NormalKind), qQ = 0; qQ < XQ.length; qQ += 3) dQ.s.TransformNormalFromFloatsToRef(XQ[qQ], XQ[qQ + 1], XQ[qQ + 2], QQ, wQ).normalize().toArray(XQ, qQ);
          this.setVerticesData(lQ.l.NormalKind, XQ, this.getVertexBuffer(lQ.l.NormalKind).isUpdatable())
        }
        if (this.isVerticesDataPresent(lQ.l.TangentKind)) {
          for (XQ = this.getVerticesData(lQ.l.TangentKind), qQ = 0; qQ < XQ.length; qQ += 4) dQ.s.TransformNormalFromFloatsToRef(XQ[qQ], XQ[qQ + 1], XQ[qQ + 2], QQ, wQ).normalize().toArray(XQ, qQ);
          this.setVerticesData(lQ.l.TangentKind, XQ, this.getVertexBuffer(lQ.l.TangentKind).isUpdatable())
        }
        return QQ.determinant() < 0 && this.flipFaces(), this.releaseSubMeshes(), this.ZD = WQ, this
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
          WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          XQ = arguments.length > 2 ? arguments[2] : void 0,
          wQ = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        if (WQ && void 0 === WQ._addToSceneRootNodes) {
          const XQ = WQ;
          return OQ.source = this, OQ.doNotCloneChildren = XQ.doNotCloneChildren, OQ.clonePhysicsImpostor = XQ.clonePhysicsImpostor, OQ.cloneThinInstances = XQ.cloneThinInstances, new KQ(QQ, this.sE(), OQ)
        }
        return new KQ(QQ, this.sE(), WQ, this, XQ, wQ)
      }
      dispose(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.morphTargetManager = null, this._geometry && this._geometry.releaseForMesh(this, !0);
        const XQ = this._internalMeshDataInfo;
        if (XQ._onBeforeDrawObservable && XQ._onBeforeDrawObservable.clear(), XQ._onBeforeBindObservable && XQ._onBeforeBindObservable.clear(), XQ._onBeforeRenderObservable && XQ._onBeforeRenderObservable.clear(), XQ._onAfterRenderObservable && XQ._onAfterRenderObservable.clear(), XQ._onBetweenPassObservable && XQ._onBetweenPassObservable.clear(), this._scene.useClonedMeshMap) {
          if (XQ.meshMap)
            for (const QQ in XQ.meshMap) {
              const WQ = XQ.meshMap[QQ];
              WQ && (WQ._internalMeshDataInfo._source = null, XQ.meshMap[QQ] = void 0)
            }
          XQ._source && XQ._source._internalMeshDataInfo.meshMap && (XQ._source._internalMeshDataInfo.meshMap[this.uniqueId] = void 0)
        } else {
          const QQ = this.sE().meshes;
          for (const WQ of QQ) {
            const QQ = WQ;
            QQ._internalMeshDataInfo && QQ._internalMeshDataInfo._source && QQ._internalMeshDataInfo._source === this && (QQ._internalMeshDataInfo._source = null)
          }
        }
        XQ._source = null, this._disposeInstanceSpecificData(), this._disposeThinInstanceSpecificData(), this._internalMeshDataInfo._checkReadinessObserver && this._scene.onBeforeRenderObservable.remove(this._internalMeshDataInfo._checkReadinessObserver), super.dispose(QQ, WQ)
      }
      _disposeInstanceSpecificData() {}
      _disposeThinInstanceSpecificData() {}
      _invalidateInstanceVertexArrayObject() {}
      applyDisplacementMap(QQ, WQ, XQ, wQ, qQ, TQ) {
        let zQ = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          sQ = arguments.length > 7 ? arguments[7] : void 0;
        const FQ = this.sE();
        return (0, pQ.r)(QQ, (QQ => {
          const sQ = QQ.width,
            FQ = QQ.height,
            PQ = this.Uj().createCanvas(sQ, FQ).getContext("2d");
          PQ.drawImage(QQ, 0, 0);
          const gQ = PQ.getImageData(0, 0, sQ, FQ).data;
          this.applyDisplacementMapFromBuffer(gQ, sQ, FQ, WQ, XQ, qQ, TQ, zQ), wQ && wQ(this)
        }), sQ || (() => {}), FQ.offlineProvider), this
      }
      applyDisplacementMapFromBuffer(QQ, WQ, XQ, wQ, qQ, TQ, zQ) {
        let sQ = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
        if (!this.isVerticesDataPresent(lQ.l.PositionKind) || !this.isVerticesDataPresent(lQ.l.NormalKind) || !this.isVerticesDataPresent(lQ.l.UVKind)) return kQ.b.Warn("Cannot call applyDisplacementMap: Given mesh is not complete. Position, Normal or UV are missing"), this;
        const FQ = this.getVerticesData(lQ.l.PositionKind, !0, !0),
          PQ = this.getVerticesData(lQ.l.NormalKind),
          gQ = this.getVerticesData(lQ.l.UVKind);
        let JQ = dQ.s.Zero();
        const rQ = dQ.s.Zero(),
          IQ = dQ.q.Zero();
        TQ = TQ || dQ.q.Zero(), zQ = zQ || new dQ.q(1, 1);
        for (let jQ = 0; jQ < FQ.length; jQ += 3) {
          dQ.s.FromArrayToRef(FQ, jQ, JQ), dQ.s.FromArrayToRef(PQ, jQ, rQ), dQ.q.FromArrayToRef(gQ, jQ / 3 * 2, IQ);
          const sQ = 4 * ((Math.abs(IQ.x * zQ.x + TQ.x % 1) * (WQ - 1) % WQ | 0) + (Math.abs(IQ.y * zQ.y + TQ.y % 1) * (XQ - 1) % XQ | 0) * WQ),
            BQ = .3 * (QQ[sQ] / 255) + .59 * (QQ[sQ + 1] / 255) + .11 * (QQ[sQ + 2] / 255);
          rQ.normalize(), rQ.scaleInPlace(wQ + (qQ - wQ) * BQ), JQ = JQ.add(rQ), JQ.toArray(FQ, jQ)
        }
        return hQ.e.ComputeNormals(FQ, this.lwQ(), PQ), sQ ? (this.setVerticesData(lQ.l.PositionKind, FQ), this.setVerticesData(lQ.l.NormalKind, PQ), this.setVerticesData(lQ.l.UVKind, gQ)) : (this.updateVerticesData(lQ.l.PositionKind, FQ), this.updateVerticesData(lQ.l.NormalKind, PQ)), this
      }
      _getFlattenedNormals(QQ, WQ) {
        const XQ = new Float32Array(3 * QQ.length);
        let wQ = 0;
        const qQ = this.sideOrientation === (this._scene.useRightHandedSystem ? 1 : 0);
        for (let TQ = 0; TQ < QQ.length; TQ += 3) {
          const zQ = dQ.s.FromArray(WQ, 3 * QQ[TQ]),
            sQ = dQ.s.FromArray(WQ, 3 * QQ[TQ + 1]),
            FQ = dQ.s.FromArray(WQ, 3 * QQ[TQ + 2]),
            PQ = zQ.subtract(sQ),
            gQ = FQ.subtract(sQ),
            JQ = dQ.s.Normalize(dQ.s.Cross(PQ, gQ));
          qQ && JQ.scaleInPlace(-1);
          for (let QQ = 0; QQ < 3; QQ++) XQ[wQ++] = JQ.x, XQ[wQ++] = JQ.y, XQ[wQ++] = JQ.z
        }
        return XQ
      }
      _convertToUnIndexedMesh() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const WQ = this.getVerticesDataKinds().filter((QQ => !this.getVertexBuffer(QQ)?.getIsInstanced())),
          XQ = this.lwQ(!1, !0),
          wQ = {},
          qQ = (QQ, WQ) => {
            const wQ = new Float32Array(XQ.length * WQ);
            let qQ = 0;
            for (let TQ = 0; TQ < XQ.length; TQ++)
              for (let zQ = 0; zQ < WQ; zQ++) wQ[qQ++] = QQ[XQ[TQ] * WQ + zQ];
            return wQ
          },
          TQ = this.uC(),
          zQ = this.geometry ? this.ZD.slice(0) : [];
        for (const sQ of WQ) wQ[sQ] = this.getVerticesData(sQ);
        for (const sQ of WQ) {
          const WQ = this.getVertexBuffer(sQ),
            TQ = WQ.getSize();
          if (QQ && sQ === lQ.l.NormalKind) {
            const QQ = this._getFlattenedNormals(XQ, wQ[lQ.l.PositionKind]);
            this.setVerticesData(lQ.l.NormalKind, QQ, WQ.isUpdatable(), TQ)
          } else this.setVerticesData(sQ, qQ(wQ[sQ], TQ), WQ.isUpdatable(), TQ)
        }
        if (this.morphTargetManager) {
          for (let WQ = 0; WQ < this.morphTargetManager.numTargets; WQ++) {
            const wQ = this.morphTargetManager.getTarget(WQ),
              TQ = wQ.getPositions();
            wQ.FsQ(qQ(TQ, 3));
            const zQ = wQ.getNormals();
            zQ && wQ.setNormals(QQ ? this._getFlattenedNormals(XQ, TQ) : qQ(zQ, 3));
            const sQ = wQ.getTangents();
            sQ && wQ.setTangents(qQ(sQ, 3));
            const FQ = wQ.getUVs();
            FQ && wQ.setUVs(qQ(FQ, 2));
            const PQ = wQ.getColors();
            PQ && wQ.setColors(qQ(PQ, 4))
          }
          this.morphTargetManager.synchronize()
        }
        for (let sQ = 0; sQ < XQ.length; sQ++) XQ[sQ] = sQ;
        this.setIndices(XQ), this._unIndexed = !0, this.releaseSubMeshes();
        for (const sQ of zQ) {
          const QQ = sQ.uC();
          AQ.b.AddToMesh(sQ.materialIndex, sQ.indexStart, sQ.indexCount, sQ.indexStart, sQ.indexCount, this).setBoundingInfo(QQ)
        }
        return this.setBoundingInfo(TQ), this.synchronizeInstances(), this
      }
      convertToFlatShadedMesh() {
        return this._convertToUnIndexedMesh(!0)
      }
      convertToUnIndexedMesh() {
        return this._convertToUnIndexedMesh()
      }
      flipFaces() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const WQ = hQ.e.ExtractFromMesh(this);
        let XQ;
        if (QQ && this.isVerticesDataPresent(lQ.l.NormalKind) && WQ.normals) {
          for (XQ = 0; XQ < WQ.normals.length; XQ++) WQ.normals[XQ] *= -1;
          this.setVerticesData(lQ.l.NormalKind, WQ.normals, this.isVertexBufferUpdatable(lQ.l.NormalKind))
        }
        if (WQ.indices) {
          let QQ;
          for (XQ = 0; XQ < WQ.indices.length; XQ += 3) QQ = WQ.indices[XQ + 1], WQ.indices[XQ + 1] = WQ.indices[XQ + 2], WQ.indices[XQ + 2] = QQ;
          this.setIndices(WQ.indices, null, this.isVertexBufferUpdatable(lQ.l.PositionKind), !0)
        }
        return this
      }
      increaseVertices() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        const WQ = hQ.e.ExtractFromMesh(this),
          XQ = WQ.indices && !Array.isArray(WQ.indices) && Array.from ? Array.from(WQ.indices) : WQ.indices,
          wQ = WQ.positions && !Array.isArray(WQ.positions) && Array.from ? Array.from(WQ.positions) : WQ.positions,
          qQ = WQ.uvs && !Array.isArray(WQ.uvs) && Array.from ? Array.from(WQ.uvs) : WQ.uvs,
          TQ = WQ.normals && !Array.isArray(WQ.normals) && Array.from ? Array.from(WQ.normals) : WQ.normals;
        if (XQ && wQ) {
          WQ.indices = XQ, WQ.positions = wQ, qQ && (WQ.uvs = qQ), TQ && (WQ.normals = TQ);
          const zQ = QQ + 1,
            sQ = [];
          for (let QQ = 0; QQ < zQ + 1; QQ++) sQ[QQ] = [];
          let FQ, PQ;
          const gQ = new dQ.s(0, 0, 0),
            JQ = new dQ.s(0, 0, 0),
            rQ = new dQ.q(0, 0),
            IQ = [],
            jQ = [],
            BQ = [];
          let yQ, VQ, DQ, pQ = wQ.length;
          qQ && (VQ = qQ.length), TQ && (DQ = TQ.length);
          for (let QQ = 0; QQ < XQ.length; QQ += 3) {
            jQ[0] = XQ[QQ], jQ[1] = XQ[QQ + 1], jQ[2] = XQ[QQ + 2];
            for (let QQ = 0; QQ < 3; QQ++)
              if (FQ = jQ[QQ], PQ = jQ[(QQ + 1) % 3], void 0 === BQ[FQ] && void 0 === BQ[PQ] ? (BQ[FQ] = [], BQ[PQ] = []) : (void 0 === BQ[FQ] && (BQ[FQ] = []), void 0 === BQ[PQ] && (BQ[PQ] = [])), void 0 === BQ[FQ][PQ] && void 0 === BQ[PQ][FQ]) {
                BQ[FQ][PQ] = [], gQ.x = (wQ[3 * PQ] - wQ[3 * FQ]) / zQ, gQ.y = (wQ[3 * PQ + 1] - wQ[3 * FQ + 1]) / zQ, gQ.z = (wQ[3 * PQ + 2] - wQ[3 * FQ + 2]) / zQ, TQ && (JQ.x = (TQ[3 * PQ] - TQ[3 * FQ]) / zQ, JQ.y = (TQ[3 * PQ + 1] - TQ[3 * FQ + 1]) / zQ, JQ.z = (TQ[3 * PQ + 2] - TQ[3 * FQ + 2]) / zQ), qQ && (rQ.x = (qQ[2 * PQ] - qQ[2 * FQ]) / zQ, rQ.y = (qQ[2 * PQ + 1] - qQ[2 * FQ + 1]) / zQ), BQ[FQ][PQ].push(FQ);
                for (let QQ = 1; QQ < zQ; QQ++) BQ[FQ][PQ].push(wQ.length / 3), wQ[pQ++] = wQ[3 * FQ] + QQ * gQ.x, wQ[pQ++] = wQ[3 * FQ + 1] + QQ * gQ.y, wQ[pQ++] = wQ[3 * FQ + 2] + QQ * gQ.z, TQ && (TQ[DQ++] = TQ[3 * FQ] + QQ * JQ.x, TQ[DQ++] = TQ[3 * FQ + 1] + QQ * JQ.y, TQ[DQ++] = TQ[3 * FQ + 2] + QQ * JQ.z), qQ && (qQ[VQ++] = qQ[2 * FQ] + QQ * rQ.x, qQ[VQ++] = qQ[2 * FQ + 1] + QQ * rQ.y);
                BQ[FQ][PQ].push(PQ), BQ[PQ][FQ] = [], yQ = BQ[FQ][PQ].length;
                for (let QQ = 0; QQ < yQ; QQ++) BQ[PQ][FQ][QQ] = BQ[FQ][PQ][yQ - 1 - QQ]
              } sQ[0][0] = XQ[QQ], sQ[1][0] = BQ[XQ[QQ]][XQ[QQ + 1]][1], sQ[1][1] = BQ[XQ[QQ]][XQ[QQ + 2]][1];
            for (let WQ = 2; WQ < zQ; WQ++) {
              sQ[WQ][0] = BQ[XQ[QQ]][XQ[QQ + 1]][WQ], sQ[WQ][WQ] = BQ[XQ[QQ]][XQ[QQ + 2]][WQ], gQ.x = (wQ[3 * sQ[WQ][WQ]] - wQ[3 * sQ[WQ][0]]) / WQ, gQ.y = (wQ[3 * sQ[WQ][WQ] + 1] - wQ[3 * sQ[WQ][0] + 1]) / WQ, gQ.z = (wQ[3 * sQ[WQ][WQ] + 2] - wQ[3 * sQ[WQ][0] + 2]) / WQ, TQ && (JQ.x = (TQ[3 * sQ[WQ][WQ]] - TQ[3 * sQ[WQ][0]]) / WQ, JQ.y = (TQ[3 * sQ[WQ][WQ] + 1] - TQ[3 * sQ[WQ][0] + 1]) / WQ, JQ.z = (TQ[3 * sQ[WQ][WQ] + 2] - TQ[3 * sQ[WQ][0] + 2]) / WQ), qQ && (rQ.x = (qQ[2 * sQ[WQ][WQ]] - qQ[2 * sQ[WQ][0]]) / WQ, rQ.y = (qQ[2 * sQ[WQ][WQ] + 1] - qQ[2 * sQ[WQ][0] + 1]) / WQ);
              for (let QQ = 1; QQ < WQ; QQ++) sQ[WQ][QQ] = wQ.length / 3, wQ[pQ++] = wQ[3 * sQ[WQ][0]] + QQ * gQ.x, wQ[pQ++] = wQ[3 * sQ[WQ][0] + 1] + QQ * gQ.y, wQ[pQ++] = wQ[3 * sQ[WQ][0] + 2] + QQ * gQ.z, TQ && (TQ[DQ++] = TQ[3 * sQ[WQ][0]] + QQ * JQ.x, TQ[DQ++] = TQ[3 * sQ[WQ][0] + 1] + QQ * JQ.y, TQ[DQ++] = TQ[3 * sQ[WQ][0] + 2] + QQ * JQ.z), qQ && (qQ[VQ++] = qQ[2 * sQ[WQ][0]] + QQ * rQ.x, qQ[VQ++] = qQ[2 * sQ[WQ][0] + 1] + QQ * rQ.y)
            }
            sQ[zQ] = BQ[XQ[QQ + 1]][XQ[QQ + 2]], IQ.push(sQ[0][0], sQ[1][0], sQ[1][1]);
            for (let QQ = 1; QQ < zQ; QQ++) {
              let WQ;
              for (WQ = 0; WQ < QQ; WQ++) IQ.push(sQ[QQ][WQ], sQ[QQ + 1][WQ], sQ[QQ + 1][WQ + 1]), IQ.push(sQ[QQ][WQ], sQ[QQ + 1][WQ + 1], sQ[QQ][WQ + 1]);
              IQ.push(sQ[QQ][WQ], sQ[QQ + 1][WQ], sQ[QQ + 1][WQ + 1])
            }
          }
          WQ.indices = IQ, WQ.applyToMesh(this, this.isVertexBufferUpdatable(lQ.l.PositionKind))
        } else kQ.b.Warn("Couldn't increase number of vertices : VertexData must contain at least indices and positions")
      }
      forceSharedVertices() {
        const QQ = hQ.e.ExtractFromMesh(this),
          WQ = QQ.uvs,
          XQ = QQ.indices,
          wQ = QQ.positions,
          qQ = QQ.colors,
          TQ = QQ.matricesIndices,
          zQ = QQ.matricesWeights,
          sQ = QQ.matricesIndicesExtra,
          FQ = QQ.matricesWeightsExtra;
        if (void 0 === XQ || void 0 === wQ || null === XQ || null === wQ) kQ.b.Warn("VertexData contains empty entries");
        else {
          const PQ = [],
            gQ = [],
            JQ = [],
            rQ = [],
            IQ = [],
            jQ = [],
            BQ = [],
            yQ = [];
          let VQ, DQ = 0;
          const pQ = {};
          let GQ, UQ;
          for (let QQ = 0; QQ < XQ.length; QQ += 3) {
            UQ = [XQ[QQ], XQ[QQ + 1], XQ[QQ + 2]], VQ = [];
            for (let QQ = 0; QQ < 3; QQ++) {
              VQ[QQ] = "";
              for (let WQ = 0; WQ < 3; WQ++) Math.abs(wQ[3 * UQ[QQ] + WQ]) < 1e-8 && (wQ[3 * UQ[QQ] + WQ] = 0), VQ[QQ] += wQ[3 * UQ[QQ] + WQ] + "|"
            }
            if (VQ[0] != VQ[1] && VQ[0] != VQ[2] && VQ[1] != VQ[2])
              for (let QQ = 0; QQ < 3; QQ++) {
                if (GQ = pQ[VQ[QQ]], void 0 === GQ) {
                  pQ[VQ[QQ]] = DQ, GQ = DQ++;
                  for (let WQ = 0; WQ < 3; WQ++) PQ.push(wQ[3 * UQ[QQ] + WQ]);
                  if (null !== qQ && void 0 !== qQ)
                    for (let WQ = 0; WQ < 4; WQ++) rQ.push(qQ[4 * UQ[QQ] + WQ]);
                  if (null !== WQ && void 0 !== WQ)
                    for (let XQ = 0; XQ < 2; XQ++) JQ.push(WQ[2 * UQ[QQ] + XQ]);
                  if (null !== TQ && void 0 !== TQ)
                    for (let WQ = 0; WQ < 4; WQ++) IQ.push(TQ[4 * UQ[QQ] + WQ]);
                  if (null !== zQ && void 0 !== zQ)
                    for (let WQ = 0; WQ < 4; WQ++) jQ.push(zQ[4 * UQ[QQ] + WQ]);
                  if (null !== sQ && void 0 !== sQ)
                    for (let WQ = 0; WQ < 4; WQ++) BQ.push(sQ[4 * UQ[QQ] + WQ]);
                  if (null !== FQ && void 0 !== FQ)
                    for (let WQ = 0; WQ < 4; WQ++) yQ.push(FQ[4 * UQ[QQ] + WQ])
                }
                gQ.push(GQ)
              }
          }
          const bQ = [];
          hQ.e.ComputeNormals(PQ, gQ, bQ), QQ.positions = PQ, QQ.indices = gQ, QQ.normals = bQ, null !== WQ && void 0 !== WQ && (QQ.uvs = JQ), null !== qQ && void 0 !== qQ && (QQ.colors = rQ), null !== TQ && void 0 !== TQ && (QQ.matricesIndices = IQ), null !== zQ && void 0 !== zQ && (QQ.matricesWeights = jQ), null !== sQ && void 0 !== sQ && (QQ.matricesIndicesExtra = BQ), null !== zQ && void 0 !== zQ && (QQ.matricesWeightsExtra = yQ), QQ.applyToMesh(this, this.isVertexBufferUpdatable(lQ.l.PositionKind))
        }
      }
      static _instancedMeshFactory(QQ, WQ) {
        throw (0, SQ.i)("InstancedMesh")
      }
      static _PhysicsImpostorParser(QQ, WQ, XQ) {
        throw (0, SQ.i)("PhysicsImpostor")
      }
      createInstance(QQ) {
        const WQ = KQ._instancedMeshFactory(QQ, this);
        return WQ.parent = this.parent, WQ
      }
      synchronizeInstances() {
        for (let QQ = 0; QQ < this.instances.length; QQ++) {
          this.instances[QQ]._syncSubMeshes()
        }
        return this
      }
      optimizeIndices(QQ) {
        const WQ = this.lwQ(),
          XQ = this.getVerticesData(lQ.l.PositionKind);
        if (!XQ || !WQ) return this;
        const wQ = [];
        for (let TQ = 0; TQ < XQ.length; TQ += 3) wQ.push(dQ.s.FromArray(XQ, TQ));
        const qQ = [];
        return DQ.c.SyncAsyncForLoop(wQ.length, 40, (QQ => {
          const WQ = wQ.length - 1 - QQ,
            XQ = wQ[WQ];
          for (let TQ = 0; TQ < WQ; ++TQ) {
            const QQ = wQ[TQ];
            if (XQ.equals(QQ)) {
              qQ[WQ] = TQ;
              break
            }
          }
        }), (() => {
          for (let QQ = 0; QQ < WQ.length; ++QQ) WQ[QQ] = qQ[WQ[QQ]] || WQ[QQ];
          const XQ = this.ZD.slice(0);
          this.setIndices(WQ), this.ZD = XQ, QQ && QQ(this)
        })), this
      }
      serialize() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        QQ.name = this.name, QQ.id = this.id, QQ.uniqueId = this.uniqueId, QQ.type = this.getClassName(), UQ.d && UQ.d.HasTags(this) && (QQ.tags = UQ.d.GetTags(this)), QQ.position = this.position.awQ(), this.rotationQuaternion ? QQ.rotationQuaternion = this.rotationQuaternion.awQ() : this.rotation && (QQ.rotation = this.rotation.awQ()), QQ.oB = this.oB.awQ(), this._postMultiplyPivotMatrix ? QQ.pivotMatrix = this.getPivotMatrix().awQ() : QQ.localMatrix = this.getPivotMatrix().awQ(), QQ.isEnabled = this.isEnabled(!1), QQ.isVisible = this.isVisible, QQ.infiniteDistance = this.infiniteDistance, QQ.pickable = this.RB, QQ.receiveShadows = this.receiveShadows, QQ.billboardMode = this.billboardMode, QQ.visibility = this.visibility, QQ.bj = this.bj, QQ.checkCollisions = this.checkCollisions, QQ.ellipsoid = this.ellipsoid.awQ(), QQ.ellipsoidOffset = this.ellipsoidOffset.awQ(), QQ.aj = this.aj, QQ.isBlocker = this.isBlocker, QQ.sideOrientation = this.sideOrientation, this._isWorldMatrixFrozen && (QQ.uE = !0), this.parent && this.parent._serializeAsParent(QQ), QQ.isUnIndexed = this.isUnIndexed;
        const WQ = this._geometry;
        if (WQ && this.ZD) {
          QQ.geometryUniqueId = WQ.uniqueId, QQ.geometryId = WQ.id, QQ.ZD = [];
          for (let WQ = 0; WQ < this.ZD.length; WQ++) {
            const XQ = this.ZD[WQ];
            QQ.ZD.push({
              materialIndex: XQ.materialIndex,
              verticesStart: XQ.verticesStart,
              verticesCount: XQ.verticesCount,
              indexStart: XQ.indexStart,
              indexCount: XQ.indexCount
            })
          }
        }
        if (this.material ? this.material.doNotSerialize || (QQ.materialUniqueId = this.material.uniqueId, QQ.materialId = this.material.id) : (this.material = null, QQ.materialUniqueId = this._scene.defaultMaterial.uniqueId, QQ.materialId = this._scene.defaultMaterial.id), this.morphTargetManager && (QQ.morphTargetManagerId = this.morphTargetManager.uniqueId), this.skeleton && (QQ.skeletonId = this.skeleton.id, QQ.skeletonUniqueId = this.skeleton.uniqueId, QQ.numBoneInfluencers = this.numBoneInfluencers), this.sE()._getComponent(tQ.c.NAME_PHYSICSENGINE)) {
          const WQ = this.getPhysicsImpostor?.();
          WQ && (QQ.physicsMass = WQ.getParam("Bs"), QQ.physicsFriction = WQ.getParam("friction"), QQ.physicsRestitution = WQ.getParam("Bs"), QQ.physicsImpostor = WQ.type)
        }
        this.metadata && (QQ.metadata = this.metadata), 0 !== this.meshBlendingTag && (QQ.meshBlendingTag = this.meshBlendingTag), QQ.instances = [];
        for (let XQ = 0; XQ < this.instances.length; XQ++) {
          const WQ = this.instances[XQ];
          if (WQ.doNotSerialize) continue;
          const wQ = {
            name: WQ.name,
            id: WQ.id,
            isEnabled: WQ.isEnabled(!1),
            isVisible: WQ.isVisible,
            RB: WQ.RB,
            checkCollisions: WQ.checkCollisions,
            position: WQ.position.awQ(),
            oB: WQ.oB.awQ()
          };
          if (WQ.parent && WQ.parent._serializeAsParent(wQ), WQ.rotationQuaternion ? wQ.rotationQuaternion = WQ.rotationQuaternion.awQ() : WQ.rotation && (wQ.rotation = WQ.rotation.awQ()), this.sE()._getComponent(tQ.c.NAME_PHYSICSENGINE)) {
            const QQ = WQ.getPhysicsImpostor?.();
            QQ && (wQ.physicsMass = QQ.getParam("Bs"), wQ.physicsFriction = QQ.getParam("friction"), wQ.physicsRestitution = QQ.getParam("Bs"), wQ.physicsImpostor = QQ.type)
          }
          WQ.metadata && (wQ.metadata = WQ.metadata), WQ.actionManager && (wQ.actions = WQ.actionManager.serialize(WQ.name)), QQ.instances.push(wQ), LQ.b.AppendSerializedAnimations(WQ, wQ), wQ.Qy = WQ.serializeAnimationRanges()
        }
        if (this._thinInstanceDataStorage.instancesCount && this._thinInstanceDataStorage.matrixData && (QQ.thinInstances = {
            instancesCount: this._thinInstanceDataStorage.instancesCount,
            matrixData: Array.from(this._thinInstanceDataStorage.matrixData),
            matrixBufferSize: this._thinInstanceDataStorage.matrixBufferSize,
            enablePicking: this.SWQ
          }, this._userThinInstanceBuffersStorage)) {
          const WQ = {
            data: {},
            sizes: {},
            strides: {}
          };
          for (const QQ in this._userThinInstanceBuffersStorage.data) WQ.data[QQ] = Array.from(this._userThinInstanceBuffersStorage.data[QQ]), WQ.sizes[QQ] = this._userThinInstanceBuffersStorage.sizes[QQ], WQ.strides[QQ] = this._userThinInstanceBuffersStorage.strides[QQ];
          QQ.thinInstances.userThinInstance = WQ
        }
        return LQ.b.AppendSerializedAnimations(this, QQ), QQ.Qy = this.serializeAnimationRanges(), QQ.layerMask = this.layerMask, QQ.alphaIndex = this.alphaIndex, QQ.hasVertexAlpha = this.hasVertexAlpha, QQ.overlayAlpha = this.overlayAlpha, QQ.overlayColor = this.overlayColor.awQ(), QQ.renderOverlay = this.renderOverlay, QQ.applyFog = this.applyFog, this.actionManager && (QQ.actions = this.actionManager.serialize(this.name)), QQ
      }
      _syncGeometryWithMorphTargetManager() {
        if (!this.geometry) return;
        this._markSubMeshesAsAttributesDirty();
        const QQ = this._internalAbstractMeshDataInfo._morphTargetManager;
        if (QQ && QQ.vertexCount) {
          if (QQ.vertexCount !== this.getTotalVertices()) return kQ.b.Error("Mesh is incompatible with morph targets. Targets and mesh must all have the same vertices count."), void(this.morphTargetManager = null);
          if (QQ.isUsingTextureForTargets) return;
          for (let WQ = 0; WQ < QQ.numInfluencers; WQ++) {
            const XQ = QQ.getActiveTarget(WQ),
              wQ = XQ.getPositions();
            if (!wQ) return void kQ.b.Error("Invalid morph target. Target must have positions.");
            this.geometry.setVerticesData(lQ.l.PositionKind + WQ, wQ, !1, 3);
            const qQ = XQ.getNormals();
            qQ && this.geometry.setVerticesData(lQ.l.NormalKind + WQ, qQ, !1, 3);
            const TQ = XQ.getTangents();
            TQ && this.geometry.setVerticesData(lQ.l.TangentKind + WQ, TQ, !1, 3);
            const zQ = XQ.getUVs();
            zQ && this.geometry.setVerticesData(lQ.l.UVKind + "_" + WQ, zQ, !1, 2);
            const sQ = XQ.getUV2s();
            sQ && this.geometry.setVerticesData(lQ.l.UV2Kind + "_" + WQ, sQ, !1, 2);
            const FQ = XQ.getColors();
            FQ && this.geometry.setVerticesData(lQ.l.ColorKind + WQ, FQ, !1, 4)
          }
        } else {
          let QQ = 0;
          for (; this.geometry.isVerticesDataPresent(lQ.l.PositionKind + QQ);) this.geometry.removeVerticesData(lQ.l.PositionKind + QQ), this.geometry.isVerticesDataPresent(lQ.l.NormalKind + QQ) && this.geometry.removeVerticesData(lQ.l.NormalKind + QQ), this.geometry.isVerticesDataPresent(lQ.l.TangentKind + QQ) && this.geometry.removeVerticesData(lQ.l.TangentKind + QQ), this.geometry.isVerticesDataPresent(lQ.l.UVKind + "_" + QQ) && this.geometry.removeVerticesData(lQ.l.UVKind + "_" + QQ), this.geometry.isVerticesDataPresent(lQ.l.UV2Kind + "_" + QQ) && this.geometry.removeVerticesData(lQ.l.UV2Kind + "_" + QQ), this.geometry.isVerticesDataPresent(lQ.l.ColorKind + QQ) && this.geometry.removeVerticesData(lQ.l.ColorKind + QQ), QQ++
        }
      }
      static Parse(QQ, WQ, XQ) {
        let wQ, qQ = !1;
        if (QQ.type && "LinesMesh" === QQ.type ? wQ = KQ._LinesMeshParser(QQ, WQ) : QQ.type && "GroundMesh" === QQ.type ? wQ = KQ._GroundMeshParser(QQ, WQ) : QQ.type && "GoldbergMesh" === QQ.type ? wQ = KQ._GoldbergMeshParser(QQ, WQ) : QQ.type && "GreasedLineMesh" === QQ.type ? wQ = KQ._GreasedLineMeshParser(QQ, WQ) : QQ.type && "TrailMesh" === QQ.type ? wQ = KQ._TrailMeshParser(QQ, WQ) : QQ.type && "GaussianSplattingMesh" === QQ.type ? (wQ = QQ._isCompound ? KQ._GaussianSplattingCompoundMeshParser(QQ, WQ) : KQ._GaussianSplattingMeshParser(QQ, WQ), qQ = !0) : QQ.type && "GaussianSplattingPartProxyMesh" === QQ.type ? (wQ = KQ._GaussianSplattingPartProxyMeshParser(QQ, WQ), qQ = !0) : wQ = new KQ(QQ.name, WQ), wQ.id = QQ.id, wQ._waitingParsedUniqueId = QQ.uniqueId, UQ.d && UQ.d.AddTagsTo(wQ, QQ.tags), wQ.position = dQ.s.FromArray(QQ.position), void 0 !== QQ.metadata && (wQ.metadata = QQ.metadata), void 0 !== QQ.meshBlendingTag && (wQ.meshBlendingTag = QQ.meshBlendingTag), QQ.rotationQuaternion ? wQ.rotationQuaternion = dQ.h.FromArray(QQ.rotationQuaternion) : QQ.rotation && (wQ.rotation = dQ.s.FromArray(QQ.rotation)), wQ.oB = dQ.s.FromArray(QQ.oB), QQ.localMatrix ? wQ.setPreTransformMatrix(dQ.e.FromArray(QQ.localMatrix)) : QQ.pivotMatrix && wQ.setPivotMatrix(dQ.e.FromArray(QQ.pivotMatrix)), wQ.UH(QQ.isEnabled), wQ.isVisible = QQ.isVisible, wQ.infiniteDistance = QQ.infiniteDistance, wQ.bj = !!QQ.bj, wQ.showBoundingBox = QQ.showBoundingBox, wQ.showSubMeshesBoundingBox = QQ.showSubMeshesBoundingBox, void 0 !== QQ.applyFog && (wQ.applyFog = QQ.applyFog), void 0 !== QQ.pickable && (wQ.RB = QQ.pickable), void 0 !== QQ.alphaIndex && (wQ.alphaIndex = QQ.alphaIndex), wQ.receiveShadows = QQ.receiveShadows, void 0 !== QQ.billboardMode && (wQ.billboardMode = QQ.billboardMode), void 0 !== QQ.visibility && (wQ.visibility = QQ.visibility), wQ.checkCollisions = QQ.checkCollisions, wQ.aj = !!QQ.aj, QQ.ellipsoid && (wQ.ellipsoid = dQ.s.FromArray(QQ.ellipsoid)), QQ.ellipsoidOffset && (wQ.ellipsoidOffset = dQ.s.FromArray(QQ.ellipsoidOffset)), null != QQ.overrideMaterialSideOrientation && (wQ.sideOrientation = QQ.overrideMaterialSideOrientation), void 0 !== QQ.sideOrientation && (wQ.sideOrientation = QQ.sideOrientation), void 0 !== QQ.isBlocker && (wQ.isBlocker = QQ.isBlocker), wQ._shouldGenerateFlatShading = QQ.useFlatShading, QQ.uE && (wQ._waitingData.uE = QQ.uE), void 0 !== QQ.parentId && (wQ._waitingParentId = QQ.parentId), void 0 !== QQ.parentInstanceIndex && (wQ._waitingParentInstanceIndex = QQ.parentInstanceIndex), void 0 !== QQ.actions && (wQ._waitingData.actions = QQ.actions), void 0 !== QQ.overlayAlpha && (wQ.overlayAlpha = QQ.overlayAlpha), void 0 !== QQ.overlayColor && (wQ.overlayColor = HQ.b.FromArray(QQ.overlayColor)), void 0 !== QQ.renderOverlay && (wQ.renderOverlay = QQ.renderOverlay), wQ.isUnIndexed = !!QQ.isUnIndexed, wQ.hasVertexAlpha = QQ.hasVertexAlpha, QQ.delayLoadingFile ? (wQ.delayLoadState = 4, wQ.delayLoadingFile = XQ + QQ.delayLoadingFile, wQ.buildBoundingInfo(dQ.s.FromArray(QQ.boundingBoxMinimum), dQ.s.FromArray(QQ.boundingBoxMaximum)), QQ._binaryInfo && (wQ._binaryInfo = QQ._binaryInfo), wQ._delayInfo = [], QQ.hasUVs && wQ._delayInfo.push(lQ.l.UVKind), QQ.hasUVs2 && wQ._delayInfo.push(lQ.l.UV2Kind), QQ.hasUVs3 && wQ._delayInfo.push(lQ.l.UV3Kind), QQ.hasUVs4 && wQ._delayInfo.push(lQ.l.UV4Kind), QQ.hasUVs5 && wQ._delayInfo.push(lQ.l.UV5Kind), QQ.hasUVs6 && wQ._delayInfo.push(lQ.l.UV6Kind), QQ.hasColors && wQ._delayInfo.push(lQ.l.ColorKind), QQ.hasMatricesIndices && wQ._delayInfo.push(lQ.l.MatricesIndicesKind), QQ.hasMatricesWeights && wQ._delayInfo.push(lQ.l.MatricesWeightsKind), wQ._delayLoadingFunction = iQ.d._ImportGeometry, uQ.c.ForceFullSceneLoadingForIncremental && wQ._checkDelayState()) : qQ || iQ.d._ImportGeometry(QQ, wQ), QQ.materialUniqueId ? wQ._waitingMaterialId = QQ.materialUniqueId : QQ.materialId && (wQ._waitingMaterialId = QQ.materialId), QQ.morphTargetManagerId > -1 && (wQ._waitingMorphTargetManagerId = QQ.morphTargetManagerId), void 0 !== QQ.skeletonId && null !== QQ.skeletonId && (wQ.skeleton = WQ.getLastSkeletonById(QQ.skeletonId), wQ._waitingSkeletonId = QQ.skeletonId, QQ.numBoneInfluencers && (wQ.numBoneInfluencers = QQ.numBoneInfluencers)), void 0 !== QQ.skeletonUniqueId && null !== QQ.skeletonUniqueId && (wQ._waitingSkeletonUniqueId = QQ.skeletonUniqueId), QQ.animations) {
          for (let WQ = 0; WQ < QQ.animations.length; WQ++) {
            const XQ = QQ.animations[WQ],
              qQ = (0, fQ.b)("BABYLON.Animation");
            qQ && wQ.animations.push(qQ.Parse(XQ))
          }
          aQ.e.ParseAnimationRanges(wQ, QQ, WQ)
        }
        if (QQ.autoAnimate && WQ.beginAnimation(wQ, QQ.autoAnimateFrom, QQ.autoAnimateTo, QQ.autoAnimateLoop, QQ.autoAnimateSpeed || 1), QQ.layerMask && !isNaN(QQ.layerMask) ? wQ.layerMask = Math.abs(parseInt(QQ.layerMask)) : wQ.layerMask = 268435455, QQ.physicsImpostor && (wQ.physicsImpostor = KQ._PhysicsImpostorParser(WQ, wQ, QQ)), QQ.lodMeshIds && (wQ._waitingData.lods = {
            ids: QQ.lodMeshIds,
            distances: QQ.lodDistances ? QQ.lodDistances : null,
            coverages: QQ.lodCoverages ? QQ.lodCoverages : null
          }), QQ.instances)
          for (let TQ = 0; TQ < QQ.instances.length; TQ++) {
            const XQ = QQ.instances[TQ],
              qQ = wQ.createInstance(XQ.name);
            if (XQ.id && (qQ.id = XQ.id), UQ.d && (XQ.tags ? UQ.d.AddTagsTo(qQ, XQ.tags) : UQ.d.AddTagsTo(qQ, QQ.tags)), qQ.position = dQ.s.FromArray(XQ.position), void 0 !== XQ.metadata && (qQ.metadata = XQ.metadata), void 0 !== XQ.parentId && (qQ._waitingParentId = XQ.parentId), void 0 !== XQ.parentInstanceIndex && (qQ._waitingParentInstanceIndex = XQ.parentInstanceIndex), void 0 !== XQ.isEnabled && null !== XQ.isEnabled && qQ.UH(XQ.isEnabled), void 0 !== XQ.isVisible && null !== XQ.isVisible && (qQ.isVisible = XQ.isVisible), void 0 !== XQ.RB && null !== XQ.RB && (qQ.RB = XQ.RB), XQ.rotationQuaternion ? qQ.rotationQuaternion = dQ.h.FromArray(XQ.rotationQuaternion) : XQ.rotation && (qQ.rotation = dQ.s.FromArray(XQ.rotation)), qQ.oB = dQ.s.FromArray(XQ.oB), void 0 != XQ.checkCollisions && null != XQ.checkCollisions && (qQ.checkCollisions = XQ.checkCollisions), void 0 != XQ.pickable && null != XQ.pickable && (qQ.RB = XQ.pickable), void 0 != XQ.showBoundingBox && null != XQ.showBoundingBox && (qQ.showBoundingBox = XQ.showBoundingBox), void 0 != XQ.showSubMeshesBoundingBox && null != XQ.showSubMeshesBoundingBox && (qQ.showSubMeshesBoundingBox = XQ.showSubMeshesBoundingBox), void 0 != XQ.alphaIndex && null != XQ.showSubMeshesBoundingBox && (qQ.alphaIndex = XQ.alphaIndex), XQ.physicsImpostor && (qQ.physicsImpostor = KQ._PhysicsImpostorParser(WQ, qQ, XQ)), void 0 !== XQ.actions && (qQ._waitingData.actions = XQ.actions), XQ.animations) {
              for (let QQ = 0; QQ < XQ.animations.length; QQ++) {
                const WQ = XQ.animations[QQ],
                  wQ = (0, fQ.b)("BABYLON.Animation");
                wQ && qQ.animations.push(wQ.Parse(WQ))
              }
              aQ.e.ParseAnimationRanges(qQ, XQ, WQ), XQ.autoAnimate && WQ.beginAnimation(qQ, XQ.autoAnimateFrom, XQ.autoAnimateTo, XQ.autoAnimateLoop, XQ.autoAnimateSpeed || 1)
            }
          }
        if (QQ.thinInstances) {
          const WQ = QQ.thinInstances;
          if (wQ.SWQ = !!WQ.enablePicking, WQ.matrixData ? (wQ.Y5("matrix", new Float32Array(WQ.matrixData), 16, !1), wQ._thinInstanceDataStorage.matrixBufferSize = WQ.matrixBufferSize, wQ._thinInstanceDataStorage.instancesCount = WQ.instancesCount) : wQ._thinInstanceDataStorage.matrixBufferSize = WQ.matrixBufferSize, QQ.thinInstances.userThinInstance) {
            const WQ = QQ.thinInstances.userThinInstance;
            for (const QQ in WQ.data) wQ.Y5(QQ, new Float32Array(WQ.data[QQ]), WQ.strides[QQ], !1), wQ._userThinInstanceBuffersStorage.sizes[QQ] = WQ.sizes[QQ]
          }
        }
        return wQ
      }
      setPositionsForCPUSkinning() {
        const QQ = this._internalMeshDataInfo;
        if (!QQ._sourcePositions) {
          const WQ = this.getVerticesData(lQ.l.PositionKind);
          if (!WQ) return QQ._sourcePositions;
          QQ._sourcePositions = new Float32Array(WQ), this.isVertexBufferUpdatable(lQ.l.PositionKind) || this.setVerticesData(lQ.l.PositionKind, WQ, !0)
        }
        return QQ._sourcePositions
      }
      setNormalsForCPUSkinning() {
        const QQ = this._internalMeshDataInfo;
        if (!QQ._sourceNormals) {
          const WQ = this.getVerticesData(lQ.l.NormalKind);
          if (!WQ) return QQ._sourceNormals;
          QQ._sourceNormals = new Float32Array(WQ), this.isVertexBufferUpdatable(lQ.l.NormalKind) || this.setVerticesData(lQ.l.NormalKind, WQ, !0)
        }
        return QQ._sourceNormals
      }
      applySkeleton(QQ) {
        if (!this.geometry) return this;
        if (this.geometry._softwareSkinningFrameId == this.sE().getFrameId()) return this;
        if (this.geometry._softwareSkinningFrameId = this.sE().getFrameId(), !this.isVerticesDataPresent(lQ.l.PositionKind)) return this;
        if (!this.isVerticesDataPresent(lQ.l.MatricesIndicesKind)) return this;
        if (!this.isVerticesDataPresent(lQ.l.MatricesWeightsKind)) return this;
        const WQ = this.isVerticesDataPresent(lQ.l.NormalKind),
          XQ = this._internalMeshDataInfo;
        if (!XQ._sourcePositions) {
          const QQ = this.ZD.slice();
          this.setPositionsForCPUSkinning(), this.ZD = QQ
        }
        WQ && !XQ._sourceNormals && this.setNormalsForCPUSkinning();
        let wQ = this.getVerticesData(lQ.l.PositionKind);
        if (!wQ) return this;
        wQ instanceof Float32Array || (wQ = new Float32Array(wQ));
        let qQ = this.getVerticesData(lQ.l.NormalKind);
        if (WQ) {
          if (!qQ) return this;
          qQ instanceof Float32Array || (qQ = new Float32Array(qQ))
        }
        const TQ = this.getVerticesData(lQ.l.MatricesIndicesKind),
          zQ = this.getVerticesData(lQ.l.MatricesWeightsKind);
        if (!zQ || !TQ) return this;
        const sQ = this.numBoneInfluencers > 4,
          FQ = sQ ? this.getVerticesData(lQ.l.MatricesIndicesExtraKind) : null,
          PQ = sQ ? this.getVerticesData(lQ.l.MatricesWeightsExtraKind) : null,
          gQ = QQ.getTransformMatrices(this),
          JQ = dQ.s.Zero(),
          rQ = new dQ.e,
          IQ = new dQ.e;
        let jQ, BQ = 0;
        for (let yQ = 0; yQ < wQ.length; yQ += 3, BQ += 4) {
          let QQ;
          for (jQ = 0; jQ < 4; jQ++) QQ = zQ[BQ + jQ], QQ > 0 && (dQ.e.FromFloat32ArrayToRefScaled(gQ, Math.floor(16 * TQ[BQ + jQ]), QQ, IQ), rQ.addToSelf(IQ));
          if (sQ)
            for (jQ = 0; jQ < 4; jQ++) QQ = PQ[BQ + jQ], QQ > 0 && (dQ.e.FromFloat32ArrayToRefScaled(gQ, Math.floor(16 * FQ[BQ + jQ]), QQ, IQ), rQ.addToSelf(IQ));
          dQ.s.TransformCoordinatesFromFloatsToRef(XQ._sourcePositions[yQ], XQ._sourcePositions[yQ + 1], XQ._sourcePositions[yQ + 2], rQ, JQ), JQ.toArray(wQ, yQ), WQ && (dQ.s.TransformNormalFromFloatsToRef(XQ._sourceNormals[yQ], XQ._sourceNormals[yQ + 1], XQ._sourceNormals[yQ + 2], rQ, JQ), JQ.toArray(qQ, yQ)), rQ.reset()
        }
        return this.updateVerticesData(lQ.l.PositionKind, wQ), WQ && this.updateVerticesData(lQ.l.NormalKind, qQ), this
      }
      static MinMax(QQ) {
        let WQ = null,
          XQ = null;
        for (const wQ of QQ) {
          const QQ = wQ.uC().boundingBox;
          WQ && XQ ? (WQ.minimizeInPlace(QQ.minimumWorld), XQ.maximizeInPlace(QQ.maximumWorld)) : (WQ = QQ.minimumWorld.clone(), XQ = QQ.maximumWorld.clone())
        }
        return WQ && XQ ? {
          min: WQ,
          max: XQ
        } : {
          min: dQ.s.Zero(),
          max: dQ.s.Zero()
        }
      }
      static Center(QQ) {
        const WQ = QQ instanceof Array ? KQ.MinMax(QQ) : QQ;
        return dQ.s.Center(WQ.min, WQ.max)
      }
      static MergeMeshes(QQ) {
        let WQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          XQ = arguments.length > 2 ? arguments[2] : void 0,
          wQ = arguments.length > 3 ? arguments[3] : void 0,
          qQ = arguments.length > 4 ? arguments[4] : void 0,
          TQ = arguments.length > 5 ? arguments[5] : void 0;
        return (0, bQ.i)(KQ._MergeMeshesCoroutine(QQ, WQ, XQ, wQ, qQ, TQ, !1))
      }
      static async MergeMeshesAsync(QQ) {
        let WQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          XQ = arguments.length > 2 ? arguments[2] : void 0,
          wQ = arguments.length > 3 ? arguments[3] : void 0,
          qQ = arguments.length > 4 ? arguments[4] : void 0,
          TQ = arguments.length > 5 ? arguments[5] : void 0;
        return await (0, bQ.h)(KQ._MergeMeshesCoroutine(QQ, WQ, XQ, wQ, qQ, TQ, !0), (0, bQ.e)())
      }
      static * _MergeMeshesCoroutine(QQ) {
        let WQ, XQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          wQ = arguments.length > 2 ? arguments[2] : void 0,
          qQ = arguments.length > 3 ? arguments[3] : void 0,
          TQ = arguments.length > 4 ? arguments[4] : void 0,
          zQ = arguments.length > 5 ? arguments[5] : void 0,
          sQ = arguments.length > 6 ? arguments[6] : void 0;
        if (0 === (QQ = QQ.filter(Boolean)).length) return null;
        if (!wQ) {
          let XQ = 0;
          for (WQ = 0; WQ < QQ.length; WQ++)
            if (XQ += QQ[WQ].getTotalVertices(), XQ >= 65536) return kQ.b.Warn("Cannot merge meshes because resulting mesh will have more than 65536 vertices. Please use allow32BitsIndices = true to use 32 bits indices"), null
        }
        const FQ = QQ[0];
        zQ && (TQ = !1, QQ.sort(((QQ, WQ) => (QQ.material?.uniqueId ?? -1) - (WQ.material?.uniqueId ?? -1))));
        const PQ = new Array,
          gQ = new Array,
          JQ = new Array,
          rQ = QQ[0].sideOrientation;
        for (WQ = 0; WQ < QQ.length; WQ++) {
          const XQ = QQ[WQ];
          if (XQ.pE) return kQ.b.Warn("Cannot merge instance meshes."), null;
          if (rQ !== XQ.sideOrientation) return kQ.b.Warn("Cannot merge meshes with different sideOrientation values."), null;
          if (TQ || zQ) {
            const QQ = JQ.reduce(((QQ, WQ) => Math.max(QQ, WQ.start + WQ.count)), 0);
            if (zQ)
              if (XQ.material) {
                const WQ = XQ.material;
                if (WQ instanceof CQ.c) {
                  for (let QQ = 0; QQ < WQ.Z2.length; QQ++) PQ.indexOf(WQ.Z2[QQ]) < 0 && PQ.push(WQ.Z2[QQ]);
                  for (let wQ = 0; wQ < XQ.ZD.length; wQ++) gQ.push(PQ.indexOf(WQ.Z2[XQ.ZD[wQ].materialIndex])), JQ.push({
                    start: QQ + XQ.ZD[wQ].indexStart,
                    count: XQ.ZD[wQ].indexCount
                  })
                } else {
                  PQ.indexOf(WQ) < 0 && PQ.push(WQ);
                  for (let wQ = 0; wQ < XQ.ZD.length; wQ++) gQ.push(PQ.indexOf(WQ)), JQ.push({
                    start: QQ + XQ.ZD[wQ].indexStart,
                    count: XQ.ZD[wQ].indexCount
                  })
                }
              } else
                for (let WQ = 0; WQ < XQ.ZD.length; WQ++) gQ.push(0), JQ.push({
                  start: QQ + XQ.ZD[WQ].indexStart,
                  count: XQ.ZD[WQ].indexCount
                });
            else JQ.push({
              start: QQ,
              count: XQ.getTotalIndices()
            })
          }
        }
        if (zQ && JQ.length > 1) {
          let QQ = 0;
          for (let WQ = 1; WQ < JQ.length; WQ++) {
            const XQ = JQ[QQ],
              wQ = JQ[WQ];
            gQ[WQ] === gQ[QQ] && XQ.start + XQ.count === wQ.start ? XQ.count += wQ.count : (QQ++, JQ[QQ] = wQ, gQ[QQ] = gQ[WQ])
          }
          JQ.length = QQ + 1, gQ.length = QQ + 1
        }
        const IQ = QQ => {
            const WQ = QQ.computeWorldMatrix(!0);
            return {
              vertexData: hQ.e.ExtractFromMesh(QQ, !1, !1),
              transform: WQ
            }
          },
          {
            vertexData: jQ,
            transform: BQ
          } = IQ(QQ[0]);
        sQ && (yield);
        const yQ = new Array(QQ.length - 1);
        for (let bQ = 1; bQ < QQ.length; bQ++) yQ[bQ - 1] = IQ(QQ[bQ]), sQ && (yield);
        const VQ = jQ._mergeCoroutine(BQ, yQ, wQ, sQ, !XQ);
        let DQ = VQ.next();
        for (; !DQ.done;) sQ && (yield), DQ = VQ.next();
        const pQ = DQ.value;
        qQ || (qQ = new KQ(FQ.name + "_merged", FQ.sE()));
        const GQ = pQ._applyToCoroutine(qQ, void 0, sQ);
        let UQ = GQ.next();
        for (; !UQ.done;) sQ && (yield), UQ = GQ.next();
        if (qQ.checkCollisions = FQ.checkCollisions, qQ.sideOrientation = FQ.sideOrientation, XQ)
          for (WQ = 0; WQ < QQ.length; WQ++) QQ[WQ].dispose();
        if (TQ || zQ) {
          for (qQ.releaseSubMeshes(), WQ = 0; WQ < JQ.length;) AQ.b.CreateFromIndices(0, JQ[WQ].start, JQ[WQ].count, qQ, void 0, !1), WQ++;
          for (const QQ of qQ.ZD) QQ.refreshBoundingInfo();
          qQ.computeWorldMatrix(!0)
        }
        if (zQ) {
          const QQ = new CQ.c(FQ.name + "_merged", FQ.sE());
          QQ.Z2 = PQ;
          for (let WQ = 0; WQ < qQ.ZD.length; WQ++) qQ.ZD[WQ].materialIndex = gQ[WQ];
          qQ.material = QQ
        } else qQ.material = FQ.material;
        return qQ
      }
      n_(QQ) {
        QQ._indexInSourceMeshInstanceArray = this.instances.length, this.instances.push(QQ)
      }
      Y_(QQ) {
        const WQ = QQ._indexInSourceMeshInstanceArray;
        if (-1 != WQ) {
          if (WQ !== this.instances.length - 1) {
            const QQ = this.instances[this.instances.length - 1];
            this.instances[WQ] = QQ, QQ._indexInSourceMeshInstanceArray = WQ
          }
          QQ._indexInSourceMeshInstanceArray = -1, this.instances.pop()
        }
      }
      _shouldConvertRHS() {
        return this._scene.useRightHandedSystem && this.sideOrientation === RQ.b.CounterClockWiseSideOrientation
      }
      _getRenderingFillMode(QQ) {
        const WQ = this.sE();
        return WQ.forcePointsCloud ? RQ.b.PointFillMode : WQ.forceWireframe ? RQ.b.WireFrameFillMode : this.overrideRenderingFillMode ?? QQ
      }
      setMaterialByID(QQ) {
        return this.setMaterialById(QQ)
      }
      static CreateRibbon(QQ, WQ, XQ, wQ, qQ, TQ, zQ, sQ, FQ) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDisc(QQ, WQ, XQ, wQ, qQ, TQ) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateBox(QQ, WQ, XQ, wQ, qQ) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateSphere(QQ, WQ, XQ, wQ, qQ, TQ) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateHemisphere(QQ, WQ, XQ, wQ) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateCylinder(QQ, WQ, XQ, wQ, qQ, TQ, zQ, sQ, FQ) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTorus(QQ, WQ, XQ, wQ, qQ, TQ, zQ) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTorusKnot(QQ, WQ, XQ, wQ, qQ, TQ, zQ, sQ, FQ, PQ) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateLines(QQ, WQ, XQ, wQ, qQ) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDashedLines(QQ, WQ, XQ, wQ, qQ, TQ, zQ, sQ) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePolygon(QQ, WQ, XQ, wQ, qQ, TQ, zQ) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudePolygon(QQ, WQ, XQ, wQ, qQ, TQ, zQ, sQ) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudeShape(QQ, WQ, XQ, wQ, qQ, TQ, zQ, sQ, FQ, PQ) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudeShapeCustom(QQ, WQ, XQ, wQ, qQ, TQ, zQ, sQ, FQ, PQ, gQ, JQ) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateLathe(QQ, WQ, XQ, wQ, qQ, TQ, zQ) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePlane(QQ, WQ, XQ, wQ, qQ) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateGround(QQ, WQ, XQ, wQ, qQ, TQ) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTiledGround(QQ, WQ, XQ, wQ, qQ, TQ, zQ, sQ, FQ) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateGroundFromHeightMap(QQ, WQ, XQ, wQ, qQ, TQ, zQ, sQ, FQ, PQ, gQ) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTube(QQ, WQ, XQ, wQ, qQ, TQ, zQ, sQ, FQ, PQ) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePolyhedron(QQ, WQ, XQ) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateIcoSphere(QQ, WQ, XQ) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDecal(QQ, WQ, XQ, wQ, qQ, TQ) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateCapsule(QQ, WQ, XQ) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtendToGoldberg(QQ) {
        throw new Error("Import MeshBuilder to populate this function")
      }
    }
    KQ.FRONTSIDE = hQ.e.FRONTSIDE, KQ.BACKSIDE = hQ.e.BACKSIDE, KQ.DOUBLESIDE = hQ.e.DOUBLESIDE, KQ.DEFAULTSIDE = hQ.e.DEFAULTSIDE, KQ.NO_CAP = 0, KQ.CAP_START = 1, KQ.CAP_END = 2, KQ.CAP_ALL = 3, KQ.NO_FLIP = 0, KQ.FLIP_TILE = 1, KQ.ROTATE_TILE = 2, KQ.FLIP_ROW = 3, KQ.ROTATE_ROW = 4, KQ.FLIP_N_ROTATE_TILE = 5, KQ.FLIP_N_ROTATE_ROW = 6, KQ.CENTER = 0, KQ.LEFT = 1, KQ.RIGHT = 2, KQ.TOP = 3, KQ.BOTTOM = 4, KQ.INSTANCEDMESH_SORT_TRANSPARENT = !1, KQ._GroundMeshParser = (QQ, WQ) => {
      throw (0, SQ.i)("GroundMesh")
    }, KQ._GoldbergMeshParser = (QQ, WQ) => {
      throw (0, SQ.i)("GoldbergMesh")
    }, KQ._LinesMeshParser = (QQ, WQ) => {
      throw (0, SQ.i)("LinesMesh")
    }, KQ._GreasedLineMeshParser = (QQ, WQ) => {
      throw (0, SQ.i)("GreasedLineMesh")
    }, KQ._GreasedLineRibbonMeshParser = (QQ, WQ) => {
      throw (0, SQ.i)("GreasedLineRibbonMesh")
    }, KQ._TrailMeshParser = (QQ, WQ) => {
      throw (0, SQ.i)("TrailMesh")
    }, KQ._GaussianSplattingMeshParser = (QQ, WQ) => {
      throw (0, SQ.i)("GaussianSplattingMesh")
    }, KQ._GaussianSplattingPartProxyMeshParser = (QQ, WQ) => {
      throw (0, SQ.i)("GaussianSplattingPartProxyMesh")
    }, KQ._GaussianSplattingCompoundMeshParser = (QQ, WQ) => {
      throw (0, SQ.i)("GaussianSplattingCompoundMesh")
    };
    let mQ = !1;

    function MQ() {
      mQ || (mQ = !0, (0, fQ.d)("BABYLON.Mesh", KQ))
    }(wQ = KQ.prototype).pC ?? (wQ.pC = (0, SQ.h)("Mesh", "pC")), (qQ = KQ.prototype).simplify ?? (qQ.simplify = (0, SQ.h)("Mesh", "simplify")), (TQ = KQ.prototype).thinInstanceAdd ?? (TQ.thinInstanceAdd = (0, SQ.h)("Mesh", "thinInstanceAdd")), (zQ = KQ.prototype).thinInstanceAddSelf ?? (zQ.thinInstanceAddSelf = (0, SQ.h)("Mesh", "thinInstanceAddSelf")), (sQ = KQ.prototype).thinInstanceRegisterAttribute ?? (sQ.thinInstanceRegisterAttribute = (0, SQ.h)("Mesh", "thinInstanceRegisterAttribute")), (FQ = KQ.prototype).thinInstanceSetMatrixAt ?? (FQ.thinInstanceSetMatrixAt = (0, SQ.h)("Mesh", "thinInstanceSetMatrixAt")), (PQ = KQ.prototype).thinInstanceSetAttributeAt ?? (PQ.thinInstanceSetAttributeAt = (0, SQ.h)("Mesh", "thinInstanceSetAttributeAt")), (gQ = KQ.prototype).Y5 ?? (gQ.Y5 = (0, SQ.h)("Mesh", "Y5")), (JQ = KQ.prototype).thinInstanceGetWorldMatrices ?? (JQ.thinInstanceGetWorldMatrices = (0, SQ.h)("Mesh", "thinInstanceGetWorldMatrices")), (rQ = KQ.prototype).I5 ?? (rQ.I5 = (0, SQ.h)("Mesh", "I5")), (IQ = KQ.prototype).thinInstancePartialBufferUpdate ?? (IQ.thinInstancePartialBufferUpdate = (0, SQ.h)("Mesh", "thinInstancePartialBufferUpdate")), (jQ = KQ.prototype).thinInstanceRefreshBoundingInfo ?? (jQ.thinInstanceRefreshBoundingInfo = (0, SQ.h)("Mesh", "thinInstanceRefreshBoundingInfo")), (BQ = KQ.prototype).getEmittedParticleSystems ?? (BQ.getEmittedParticleSystems = (0, SQ.h)("Mesh", "getEmittedParticleSystems")), (yQ = KQ.prototype).getHierarchyEmittedParticleSystems ?? (yQ.getHierarchyEmittedParticleSystems = (0, SQ.h)("Mesh", "getHierarchyEmittedParticleSystems")), Object.getOwnPropertyDescriptor(KQ.prototype, "edgesShareWithInstances") || Object.defineProperty(KQ.prototype, "edgesShareWithInstances", (0, SQ.g)("Mesh", "edgesShareWithInstances")), Object.getOwnPropertyDescriptor(KQ.prototype, "SWQ") || Object.defineProperty(KQ.prototype, "SWQ", (0, SQ.g)("Mesh", "SWQ")), Object.getOwnPropertyDescriptor(KQ.prototype, "thinInstanceAllowAutomaticStaticBufferRecreation") || Object.defineProperty(KQ.prototype, "thinInstanceAllowAutomaticStaticBufferRecreation", (0, SQ.g)("Mesh", "thinInstanceAllowAutomaticStaticBufferRecreation")), Object.getOwnPropertyDescriptor(KQ.prototype, "f_") || Object.defineProperty(KQ.prototype, "f_", (0, SQ.g)("Mesh", "f_"))
  },
  40661: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => jQ
    });
    var wQ = XQ(40260),
      qQ = XQ(37370),
      TQ = XQ(40404),
      zQ = XQ(40153),
      sQ = XQ(37546),
      FQ = XQ(38956),
      PQ = XQ(40268),
      gQ = XQ(40656),
      JQ = XQ(40320),
      rQ = XQ(40555);
    class IQ {}
    let jQ = (() => {
      var QQ;
      let WQ, XQ, jQ, BQ, yQ = [];
      return QQ = class {
        constructor() {
          this.uniqueId = 0, this.metadata = {}, this._applyTo = (0, gQ.f)(this._applyToCoroutine.bind(this)), this.uniqueId = QQ._UniqueIdGenerator, QQ._UniqueIdGenerator++
        }
        set(QQ, WQ) {
          switch (QQ.length || FQ.b.Warn(`Setting vertex data kind '${WQ}' with an empty array`), WQ) {
            case TQ.l.PositionKind:
              this.positions = QQ;
              break;
            case TQ.l.NormalKind:
              this.normals = QQ;
              break;
            case TQ.l.TangentKind:
              this.tangents = QQ;
              break;
            case TQ.l.UVKind:
              this.uvs = QQ;
              break;
            case TQ.l.UV2Kind:
              this.uvs2 = QQ;
              break;
            case TQ.l.UV3Kind:
              this.uvs3 = QQ;
              break;
            case TQ.l.UV4Kind:
              this.uvs4 = QQ;
              break;
            case TQ.l.UV5Kind:
              this.uvs5 = QQ;
              break;
            case TQ.l.UV6Kind:
              this.uvs6 = QQ;
              break;
            case TQ.l.ColorKind:
              this.colors = QQ;
              break;
            case TQ.l.MatricesIndicesKind:
              this.matricesIndices = QQ;
              break;
            case TQ.l.MatricesWeightsKind:
              this.matricesWeights = QQ;
              break;
            case TQ.l.MatricesIndicesExtraKind:
              this.matricesIndicesExtra = QQ;
              break;
            case TQ.l.MatricesWeightsExtraKind:
              this.matricesWeightsExtra = QQ
          }
        }
        applyToMesh(QQ, WQ) {
          return this._applyTo(QQ, WQ, !1), this
        }
        applyToGeometry(QQ, WQ) {
          return this._applyTo(QQ, WQ, !1), this
        }
        updateMesh(QQ) {
          return this._update(QQ), this
        }
        updateGeometry(QQ) {
          return this._update(QQ), this
        }* _applyToCoroutine(QQ) {
          let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            XQ = arguments.length > 2 ? arguments[2] : void 0;
          if (this.positions && (QQ.setVerticesData(TQ.l.PositionKind, this.positions, WQ), XQ && (yield)), this.normals && (QQ.setVerticesData(TQ.l.NormalKind, this.normals, WQ), XQ && (yield)), this.tangents && (QQ.setVerticesData(TQ.l.TangentKind, this.tangents, WQ), XQ && (yield)), this.uvs && (QQ.setVerticesData(TQ.l.UVKind, this.uvs, WQ), XQ && (yield)), this.uvs2 && (QQ.setVerticesData(TQ.l.UV2Kind, this.uvs2, WQ), XQ && (yield)), this.uvs3 && (QQ.setVerticesData(TQ.l.UV3Kind, this.uvs3, WQ), XQ && (yield)), this.uvs4 && (QQ.setVerticesData(TQ.l.UV4Kind, this.uvs4, WQ), XQ && (yield)), this.uvs5 && (QQ.setVerticesData(TQ.l.UV5Kind, this.uvs5, WQ), XQ && (yield)), this.uvs6 && (QQ.setVerticesData(TQ.l.UV6Kind, this.uvs6, WQ), XQ && (yield)), this.colors) {
            const wQ = this.positions && this.colors.length === this.positions.length ? 3 : 4;
            QQ.setVerticesData(TQ.l.ColorKind, this.colors, WQ, wQ), this.hasVertexAlpha && void 0 !== QQ.hasVertexAlpha && (QQ.hasVertexAlpha = !0), XQ && (yield)
          }
          if (this.matricesIndices && (QQ.setVerticesData(TQ.l.MatricesIndicesKind, this.matricesIndices, WQ), XQ && (yield)), this.matricesWeights && (QQ.setVerticesData(TQ.l.MatricesWeightsKind, this.matricesWeights, WQ), XQ && (yield)), this.matricesIndicesExtra && (QQ.setVerticesData(TQ.l.MatricesIndicesExtraKind, this.matricesIndicesExtra, WQ), XQ && (yield)), this.matricesWeightsExtra && (QQ.setVerticesData(TQ.l.MatricesWeightsExtraKind, this.matricesWeightsExtra, WQ), XQ && (yield)), this.indices ? (QQ.setIndices(this.indices, null, WQ), XQ && (yield)) : QQ.setIndices([], null), QQ.ZD && this.materialInfos && this.materialInfos.length > 1) {
            const WQ = QQ;
            WQ.ZD = [];
            for (const QQ of this.materialInfos) new rQ.b(QQ.materialIndex, QQ.verticesStart, QQ.verticesCount, QQ.indexStart, QQ.indexCount, WQ)
          }
          return this
        }
        _update(QQ, WQ, XQ) {
          return this.positions && QQ.updateVerticesData(TQ.l.PositionKind, this.positions, WQ, XQ), this.normals && QQ.updateVerticesData(TQ.l.NormalKind, this.normals, WQ, XQ), this.tangents && QQ.updateVerticesData(TQ.l.TangentKind, this.tangents, WQ, XQ), this.uvs && QQ.updateVerticesData(TQ.l.UVKind, this.uvs, WQ, XQ), this.uvs2 && QQ.updateVerticesData(TQ.l.UV2Kind, this.uvs2, WQ, XQ), this.uvs3 && QQ.updateVerticesData(TQ.l.UV3Kind, this.uvs3, WQ, XQ), this.uvs4 && QQ.updateVerticesData(TQ.l.UV4Kind, this.uvs4, WQ, XQ), this.uvs5 && QQ.updateVerticesData(TQ.l.UV5Kind, this.uvs5, WQ, XQ), this.uvs6 && QQ.updateVerticesData(TQ.l.UV6Kind, this.uvs6, WQ, XQ), this.colors && QQ.updateVerticesData(TQ.l.ColorKind, this.colors, WQ, XQ), this.matricesIndices && QQ.updateVerticesData(TQ.l.MatricesIndicesKind, this.matricesIndices, WQ, XQ), this.matricesWeights && QQ.updateVerticesData(TQ.l.MatricesWeightsKind, this.matricesWeights, WQ, XQ), this.matricesIndicesExtra && QQ.updateVerticesData(TQ.l.MatricesIndicesExtraKind, this.matricesIndicesExtra, WQ, XQ), this.matricesWeightsExtra && QQ.updateVerticesData(TQ.l.MatricesWeightsExtraKind, this.matricesWeightsExtra, WQ, XQ), this.indices && QQ.setIndices(this.indices, null), this
        }
        static _TransformVector3Coordinates(QQ, WQ) {
          let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : QQ.length;
          const TQ = qQ.m.vj[0],
            zQ = qQ.m.vj[1];
          for (let sQ = XQ; sQ < XQ + wQ; sQ += 3) qQ.s.FromArrayToRef(QQ, sQ, TQ), qQ.s.TransformCoordinatesToRef(TQ, WQ, zQ), QQ[sQ] = zQ.x, QQ[sQ + 1] = zQ.y, QQ[sQ + 2] = zQ.z
        }
        static _TransformVector3Normals(QQ, WQ) {
          let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : QQ.length;
          const TQ = qQ.m.vj[0],
            zQ = qQ.m.vj[1];
          for (let sQ = XQ; sQ < XQ + wQ; sQ += 3) qQ.s.FromArrayToRef(QQ, sQ, TQ), qQ.s.TransformNormalToRef(TQ, WQ, zQ), QQ[sQ] = zQ.x, QQ[sQ + 1] = zQ.y, QQ[sQ + 2] = zQ.z
        }
        static _TransformVector4Normals(QQ, WQ) {
          let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : QQ.length;
          const TQ = qQ.m.Vector4[0],
            zQ = qQ.m.Vector4[1];
          for (let sQ = XQ; sQ < XQ + wQ; sQ += 4) qQ.w.FromArrayToRef(QQ, sQ, TQ), qQ.w.TransformNormalToRef(TQ, WQ, zQ), QQ[sQ] = zQ.x, QQ[sQ + 1] = zQ.y, QQ[sQ + 2] = zQ.z, QQ[sQ + 3] = zQ.w
        }
        static _FlipFaces(QQ) {
          let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : QQ.length;
          for (let wQ = WQ; wQ < WQ + XQ; wQ += 3) {
            const WQ = QQ[wQ + 1];
            QQ[wQ + 1] = QQ[wQ + 2], QQ[wQ + 2] = WQ
          }
        }
        transform(WQ) {
          const XQ = WQ.determinant() < 0;
          return this.positions && QQ._TransformVector3Coordinates(this.positions, WQ), this.normals && QQ._TransformVector3Normals(this.normals, WQ), this.tangents && QQ._TransformVector4Normals(this.tangents, WQ), XQ && this.indices && QQ._FlipFaces(this.indices), this
        }
        splitBasedOnMaterialID() {
          if (!this.materialInfos || this.materialInfos.length < 2) return [this];
          const WQ = [];
          for (const XQ of this.materialInfos) {
            const wQ = new QQ;
            if (this.positions && (wQ.positions = this.positions.slice(3 * XQ.verticesStart, 3 * (XQ.verticesCount + XQ.verticesStart))), this.normals && (wQ.normals = this.normals.slice(3 * XQ.verticesStart, 3 * (XQ.verticesCount + XQ.verticesStart))), this.tangents && (wQ.tangents = this.tangents.slice(4 * XQ.verticesStart, 4 * (XQ.verticesCount + XQ.verticesStart))), this.colors && (wQ.colors = this.colors.slice(4 * XQ.verticesStart, 4 * (XQ.verticesCount + XQ.verticesStart))), this.uvs && (wQ.uvs = this.uvs.slice(2 * XQ.verticesStart, 2 * (XQ.verticesCount + XQ.verticesStart))), this.uvs2 && (wQ.uvs2 = this.uvs2.slice(2 * XQ.verticesStart, 2 * (XQ.verticesCount + XQ.verticesStart))), this.uvs3 && (wQ.uvs3 = this.uvs3.slice(2 * XQ.verticesStart, 2 * (XQ.verticesCount + XQ.verticesStart))), this.uvs4 && (wQ.uvs4 = this.uvs4.slice(2 * XQ.verticesStart, 2 * (XQ.verticesCount + XQ.verticesStart))), this.uvs5 && (wQ.uvs5 = this.uvs5.slice(2 * XQ.verticesStart, 2 * (XQ.verticesCount + XQ.verticesStart))), this.uvs6 && (wQ.uvs6 = this.uvs6.slice(2 * XQ.verticesStart, 2 * (XQ.verticesCount + XQ.verticesStart))), this.matricesIndices && (wQ.matricesIndices = this.matricesIndices.slice(4 * XQ.verticesStart, 4 * (XQ.verticesCount + XQ.verticesStart))), this.matricesIndicesExtra && (wQ.matricesIndicesExtra = this.matricesIndicesExtra.slice(4 * XQ.verticesStart, 4 * (XQ.verticesCount + XQ.verticesStart))), this.matricesWeights && (wQ.matricesWeights = this.matricesWeights.slice(4 * XQ.verticesStart, 4 * (XQ.verticesCount + XQ.verticesStart))), this.matricesWeightsExtra && (wQ.matricesWeightsExtra = this.matricesWeightsExtra.slice(4 * XQ.verticesStart, 4 * (XQ.verticesCount + XQ.verticesStart))), this.indices) {
              wQ.indices = [];
              for (let QQ = XQ.indexStart; QQ < XQ.indexStart + XQ.indexCount; QQ++) wQ.indices.push(this.indices[QQ] - XQ.verticesStart)
            }
            const qQ = new IQ;
            qQ.indexStart = 0, qQ.indexCount = wQ.indices ? wQ.indices.length : 0, qQ.materialIndex = XQ.materialIndex, qQ.verticesStart = 0, qQ.verticesCount = (wQ.positions ? wQ.positions.length : 0) / 3, wQ.materialInfos = [qQ], WQ.push(wQ)
          }
          return WQ
        }
        merge(QQ) {
          let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            XQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            wQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            qQ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
          const TQ = Array.isArray(QQ) ? QQ.map((QQ => ({
            vertexData: QQ
          }))) : [{
            vertexData: QQ
          }];
          return (0, gQ.i)(this._mergeCoroutine(void 0, TQ, WQ, !1, XQ, wQ, qQ))
        }* _mergeCoroutine(WQ, XQ) {
          let wQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            qQ = arguments.length > 3 ? arguments[3] : void 0,
            zQ = arguments.length > 4 ? arguments[4] : void 0,
            sQ = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
            FQ = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
          this._validate();
          let PQ = XQ.map((QQ => QQ.vertexData)),
            gQ = this;
          if (FQ)
            for (const QQ of PQ) QQ && (QQ._validate(), !this.normals && QQ.normals && (this.normals = new Float32Array(this.positions.length)), !this.tangents && QQ.tangents && (this.tangents = new Float32Array(this.positions.length / 3 * 4)), !this.uvs && QQ.uvs && (this.uvs = new Float32Array(this.positions.length / 3 * 2)), !this.uvs2 && QQ.uvs2 && (this.uvs2 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs3 && QQ.uvs3 && (this.uvs3 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs4 && QQ.uvs4 && (this.uvs4 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs5 && QQ.uvs5 && (this.uvs5 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs6 && QQ.uvs6 && (this.uvs6 = new Float32Array(this.positions.length / 3 * 2)), !this.colors && QQ.colors && (this.colors = new Float32Array(this.positions.length / 3 * 4), this.colors.fill(1)), !this.matricesIndices && QQ.matricesIndices && (this.matricesIndices = new Float32Array(this.positions.length / 3 * 4)), !this.matricesWeights && QQ.matricesWeights && (this.matricesWeights = new Float32Array(this.positions.length / 3 * 4)), !this.matricesIndicesExtra && QQ.matricesIndicesExtra && (this.matricesIndicesExtra = new Float32Array(this.positions.length / 3 * 4)), !this.matricesWeightsExtra && QQ.matricesWeightsExtra && (this.matricesWeightsExtra = new Float32Array(this.positions.length / 3 * 4)));
          for (const QQ of PQ)
            if (QQ)
              if (FQ) this.normals && !QQ.normals && (QQ.normals = new Float32Array(QQ.positions.length)), this.tangents && !QQ.tangents && (QQ.tangents = new Float32Array(QQ.positions.length / 3 * 4)), this.uvs && !QQ.uvs && (QQ.uvs = new Float32Array(QQ.positions.length / 3 * 2)), this.uvs2 && !QQ.uvs2 && (QQ.uvs2 = new Float32Array(QQ.positions.length / 3 * 2)), this.uvs3 && !QQ.uvs3 && (QQ.uvs3 = new Float32Array(QQ.positions.length / 3 * 2)), this.uvs4 && !QQ.uvs4 && (QQ.uvs4 = new Float32Array(QQ.positions.length / 3 * 2)), this.uvs5 && !QQ.uvs5 && (QQ.uvs5 = new Float32Array(QQ.positions.length / 3 * 2)), this.uvs6 && !QQ.uvs6 && (QQ.uvs6 = new Float32Array(QQ.positions.length / 3 * 2)), this.colors && !QQ.colors && (QQ.colors = new Float32Array(QQ.positions.length / 3 * 4), QQ.colors.fill(1)), this.matricesIndices && !QQ.matricesIndices && (QQ.matricesIndices = new Float32Array(QQ.positions.length / 3 * 4)), this.matricesWeights && !QQ.matricesWeights && (QQ.matricesWeights = new Float32Array(QQ.positions.length / 3 * 4)), this.matricesIndicesExtra && !QQ.matricesIndicesExtra && (QQ.matricesIndicesExtra = new Float32Array(QQ.positions.length / 3 * 4)), this.matricesWeightsExtra && !QQ.matricesWeightsExtra && (QQ.matricesWeightsExtra = new Float32Array(QQ.positions.length / 3 * 4));
              else if (QQ._validate(), !this.normals !== !QQ.normals || !this.tangents !== !QQ.tangents || !this.uvs !== !QQ.uvs || !this.uvs2 !== !QQ.uvs2 || !this.uvs3 !== !QQ.uvs3 || !this.uvs4 !== !QQ.uvs4 || !this.uvs5 !== !QQ.uvs5 || !this.uvs6 !== !QQ.uvs6 || !this.colors !== !QQ.colors || !this.matricesIndices !== !QQ.matricesIndices || !this.matricesWeights !== !QQ.matricesWeights || !this.matricesIndicesExtra !== !QQ.matricesIndicesExtra || !this.matricesWeightsExtra !== !QQ.matricesWeightsExtra) throw new Error("Cannot merge vertex data that do not have the same set of attributes");
          if (sQ) {
            let QQ, wQ = 0,
              qQ = 0;
            const TQ = [];
            let zQ = null;
            const sQ = [];
            for (const XQ of this.splitBasedOnMaterialID()) sQ.push({
              vertexData: XQ,
              transform: WQ
            });
            for (const WQ of XQ)
              if (WQ.vertexData)
                for (const QQ of WQ.vertexData.splitBasedOnMaterialID()) sQ.push({
                  vertexData: QQ,
                  transform: WQ.transform
                });
            sQ.sort(((QQ, WQ) => {
              const XQ = QQ.vertexData.materialInfos ? QQ.vertexData.materialInfos[0].materialIndex : 0,
                wQ = WQ.vertexData.materialInfos ? WQ.vertexData.materialInfos[0].materialIndex : 0;
              return XQ > wQ ? 1 : XQ === wQ ? 0 : -1
            }));
            for (const WQ of sQ) {
              const XQ = WQ.vertexData;
              if (QQ = XQ.materialInfos ? XQ.materialInfos[0].materialIndex : 0, zQ && zQ.materialIndex === QQ) zQ.indexCount += XQ.indices.length, zQ.verticesCount += XQ.positions.length / 3;
              else {
                const WQ = new IQ;
                WQ.materialIndex = QQ, WQ.indexStart = wQ, WQ.indexCount = XQ.indices.length, WQ.verticesStart = qQ, WQ.verticesCount = XQ.positions.length / 3, TQ.push(WQ), zQ = WQ
              }
              wQ += XQ.indices.length, qQ += XQ.positions.length / 3
            }
            const FQ = sQ.splice(0, 1)[0];
            gQ = FQ.vertexData, WQ = FQ.transform, PQ = sQ.map((QQ => QQ.vertexData)), XQ = sQ, this.materialInfos = TQ
          }
          const JQ = PQ.reduce(((QQ, WQ) => QQ + (WQ.indices?.length ?? 0)), gQ.indices?.length ?? 0);
          let rQ = zQ || PQ.some((QQ => QQ.indices === gQ.indices)) ? gQ.indices?.slice() : gQ.indices;
          if (JQ > 0) {
            let TQ = rQ?.length ?? 0;
            if (rQ || (rQ = new Array(JQ)), rQ.length !== JQ) {
              if (Array.isArray(rQ)) rQ.length = JQ;
              else {
                const QQ = wQ || rQ instanceof Uint32Array ? new Uint32Array(JQ) : new Uint16Array(JQ);
                QQ.set(rQ), rQ = QQ
              }
              WQ && WQ.determinant() < 0 && QQ._FlipFaces(rQ, 0, TQ)
            }
            let zQ = gQ.positions ? gQ.positions.length / 3 : 0;
            for (const {
                vertexData: WQ,
                transform: wQ
              }
              of XQ)
              if (WQ.indices) {
                for (let QQ = 0; QQ < WQ.indices.length; QQ++) rQ[TQ + QQ] = WQ.indices[QQ] + zQ;
                wQ && wQ.determinant() < 0 && QQ._FlipFaces(rQ, TQ, WQ.indices.length), zQ += WQ.positions.length / 3, TQ += WQ.indices.length, qQ && (yield)
              }
          }
          return this.indices = rQ, this.positions = QQ._MergeElement(TQ.l.PositionKind, gQ.positions, WQ, XQ.map((QQ => [QQ.vertexData.positions, QQ.transform]))), qQ && (yield), gQ.normals && (this.normals = QQ._MergeElement(TQ.l.NormalKind, gQ.normals, WQ, XQ.map((QQ => [QQ.vertexData.normals, QQ.transform]))), qQ && (yield)), gQ.tangents && (this.tangents = QQ._MergeElement(TQ.l.TangentKind, gQ.tangents, WQ, XQ.map((QQ => [QQ.vertexData.tangents, QQ.transform]))), qQ && (yield)), gQ.uvs && (this.uvs = QQ._MergeElement(TQ.l.UVKind, gQ.uvs, WQ, XQ.map((QQ => [QQ.vertexData.uvs, QQ.transform]))), qQ && (yield)), gQ.uvs2 && (this.uvs2 = QQ._MergeElement(TQ.l.UV2Kind, gQ.uvs2, WQ, XQ.map((QQ => [QQ.vertexData.uvs2, QQ.transform]))), qQ && (yield)), gQ.uvs3 && (this.uvs3 = QQ._MergeElement(TQ.l.UV3Kind, gQ.uvs3, WQ, XQ.map((QQ => [QQ.vertexData.uvs3, QQ.transform]))), qQ && (yield)), gQ.uvs4 && (this.uvs4 = QQ._MergeElement(TQ.l.UV4Kind, gQ.uvs4, WQ, XQ.map((QQ => [QQ.vertexData.uvs4, QQ.transform]))), qQ && (yield)), gQ.uvs5 && (this.uvs5 = QQ._MergeElement(TQ.l.UV5Kind, gQ.uvs5, WQ, XQ.map((QQ => [QQ.vertexData.uvs5, QQ.transform]))), qQ && (yield)), gQ.uvs6 && (this.uvs6 = QQ._MergeElement(TQ.l.UV6Kind, gQ.uvs6, WQ, XQ.map((QQ => [QQ.vertexData.uvs6, QQ.transform]))), qQ && (yield)), gQ.colors && (this.colors = QQ._MergeElement(TQ.l.ColorKind, gQ.colors, WQ, XQ.map((QQ => [QQ.vertexData.colors, QQ.transform]))), (void 0 !== gQ.hasVertexAlpha || XQ.some((QQ => void 0 !== QQ.vertexData.hasVertexAlpha))) && (this.hasVertexAlpha = gQ.hasVertexAlpha || XQ.some((QQ => QQ.vertexData.hasVertexAlpha))), qQ && (yield)), gQ.matricesIndices && (this.matricesIndices = QQ._MergeElement(TQ.l.MatricesIndicesKind, gQ.matricesIndices, WQ, XQ.map((QQ => [QQ.vertexData.matricesIndices, QQ.transform]))), qQ && (yield)), gQ.matricesWeights && (this.matricesWeights = QQ._MergeElement(TQ.l.MatricesWeightsKind, gQ.matricesWeights, WQ, XQ.map((QQ => [QQ.vertexData.matricesWeights, QQ.transform]))), qQ && (yield)), gQ.matricesIndicesExtra && (this.matricesIndicesExtra = QQ._MergeElement(TQ.l.MatricesIndicesExtraKind, gQ.matricesIndicesExtra, WQ, XQ.map((QQ => [QQ.vertexData.matricesIndicesExtra, QQ.transform]))), qQ && (yield)), gQ.matricesWeightsExtra && (this.matricesWeightsExtra = QQ._MergeElement(TQ.l.MatricesWeightsExtraKind, gQ.matricesWeightsExtra, WQ, XQ.map((QQ => [QQ.vertexData.matricesWeightsExtra, QQ.transform])))), this
        }
        static _MergeElement(WQ, XQ, wQ, qQ) {
          const zQ = qQ.filter((QQ => null !== QQ[0] && void 0 !== QQ[0]));
          if (!XQ && 0 == zQ.length) return XQ;
          if (!XQ) return this._MergeElement(WQ, zQ[0][0], zQ[0][1], zQ.slice(1));
          const sQ = zQ.reduce(((QQ, WQ) => QQ + WQ[0].length), XQ.length),
            FQ = WQ === TQ.l.PositionKind ? QQ._TransformVector3Coordinates : WQ === TQ.l.NormalKind ? QQ._TransformVector3Normals : WQ === TQ.l.TangentKind ? QQ._TransformVector4Normals : () => {};
          if (XQ instanceof Float32Array) {
            const QQ = new Float32Array(sQ);
            QQ.set(XQ), wQ && FQ(QQ, wQ, 0, XQ.length);
            let WQ = XQ.length;
            for (const [XQ, wQ] of zQ) QQ.set(XQ, WQ), wQ && FQ(QQ, wQ, WQ, XQ.length), WQ += XQ.length;
            return QQ
          } {
            const QQ = new Array(sQ);
            for (let wQ = 0; wQ < XQ.length; wQ++) QQ[wQ] = XQ[wQ];
            wQ && FQ(QQ, wQ, 0, XQ.length);
            let WQ = XQ.length;
            for (const [XQ, wQ] of zQ) {
              for (let wQ = 0; wQ < XQ.length; wQ++) QQ[WQ + wQ] = XQ[wQ];
              wQ && FQ(QQ, wQ, WQ, XQ.length), WQ += XQ.length
            }
            return QQ
          }
        }
        _validate() {
          if (!this.positions) throw new JQ.g("Positions are required", JQ.f.MeshInvalidPositionsError);
          const QQ = (QQ, WQ) => {
              const XQ = (0, TQ.h)(QQ);
              if (WQ.length % XQ !== 0) throw new Error("The " + QQ + "s array count must be a multiple of " + XQ);
              return WQ.length / XQ
            },
            WQ = QQ(TQ.l.PositionKind, this.positions),
            XQ = (XQ, wQ) => {
              const qQ = QQ(XQ, wQ);
              if (qQ !== WQ) throw new Error("The " + XQ + "s element count (" + qQ + ") does not match the positions count (" + WQ + ")")
            };
          this.normals && XQ(TQ.l.NormalKind, this.normals), this.tangents && XQ(TQ.l.TangentKind, this.tangents), this.uvs && XQ(TQ.l.UVKind, this.uvs), this.uvs2 && XQ(TQ.l.UV2Kind, this.uvs2), this.uvs3 && XQ(TQ.l.UV3Kind, this.uvs3), this.uvs4 && XQ(TQ.l.UV4Kind, this.uvs4), this.uvs5 && XQ(TQ.l.UV5Kind, this.uvs5), this.uvs6 && XQ(TQ.l.UV6Kind, this.uvs6), this.colors && XQ(TQ.l.ColorKind, this.colors), this.matricesIndices && XQ(TQ.l.MatricesIndicesKind, this.matricesIndices), this.matricesWeights && XQ(TQ.l.MatricesWeightsKind, this.matricesWeights), this.matricesIndicesExtra && XQ(TQ.l.MatricesIndicesExtraKind, this.matricesIndicesExtra), this.matricesWeightsExtra && XQ(TQ.l.MatricesWeightsExtraKind, this.matricesWeightsExtra)
        }
        clone() {
          const WQ = this.serialize();
          return QQ.Parse(WQ)
        }
        serialize() {
          const QQ = {};
          if (this.positions && (QQ.positions = Array.from(this.positions)), this.normals && (QQ.normals = Array.from(this.normals)), this.tangents && (QQ.tangents = Array.from(this.tangents)), this.uvs && (QQ.uvs = Array.from(this.uvs)), this.uvs2 && (QQ.uvs2 = Array.from(this.uvs2)), this.uvs3 && (QQ.uvs3 = Array.from(this.uvs3)), this.uvs4 && (QQ.uvs4 = Array.from(this.uvs4)), this.uvs5 && (QQ.uvs5 = Array.from(this.uvs5)), this.uvs6 && (QQ.uvs6 = Array.from(this.uvs6)), this.colors && (QQ.colors = Array.from(this.colors), QQ.hasVertexAlpha = this.hasVertexAlpha), this.matricesIndices && (QQ.matricesIndices = Array.from(this.matricesIndices), QQ.matricesIndicesExpanded = !0), this.matricesWeights && (QQ.matricesWeights = Array.from(this.matricesWeights)), this.matricesIndicesExtra && (QQ.matricesIndicesExtra = Array.from(this.matricesIndicesExtra), QQ.matricesIndicesExtraExpanded = !0), this.matricesWeightsExtra && (QQ.matricesWeightsExtra = Array.from(this.matricesWeightsExtra)), QQ.indices = this.indices ? Array.from(this.indices) : [], this.materialInfos) {
            QQ.materialInfos = [];
            for (const WQ of this.materialInfos) {
              const XQ = {
                indexStart: WQ.indexStart,
                indexCount: WQ.indexCount,
                materialIndex: WQ.materialIndex,
                verticesStart: WQ.verticesStart,
                verticesCount: WQ.verticesCount
              };
              QQ.materialInfos.push(XQ)
            }
          }
          return QQ
        }
        static ExtractFromMesh(WQ, XQ, wQ) {
          return QQ._ExtractFrom(WQ, XQ, wQ)
        }
        static ExtractFromGeometry(WQ, XQ, wQ) {
          return QQ._ExtractFrom(WQ, XQ, wQ)
        }
        static _ExtractFrom(WQ, XQ, wQ) {
          const qQ = new QQ;
          if (WQ.isVerticesDataPresent(TQ.l.PositionKind) && (qQ.positions = WQ.getVerticesData(TQ.l.PositionKind, XQ, wQ)), WQ.isVerticesDataPresent(TQ.l.NormalKind) && (qQ.normals = WQ.getVerticesData(TQ.l.NormalKind, XQ, wQ)), WQ.isVerticesDataPresent(TQ.l.TangentKind) && (qQ.tangents = WQ.getVerticesData(TQ.l.TangentKind, XQ, wQ)), WQ.isVerticesDataPresent(TQ.l.UVKind) && (qQ.uvs = WQ.getVerticesData(TQ.l.UVKind, XQ, wQ)), WQ.isVerticesDataPresent(TQ.l.UV2Kind) && (qQ.uvs2 = WQ.getVerticesData(TQ.l.UV2Kind, XQ, wQ)), WQ.isVerticesDataPresent(TQ.l.UV3Kind) && (qQ.uvs3 = WQ.getVerticesData(TQ.l.UV3Kind, XQ, wQ)), WQ.isVerticesDataPresent(TQ.l.UV4Kind) && (qQ.uvs4 = WQ.getVerticesData(TQ.l.UV4Kind, XQ, wQ)), WQ.isVerticesDataPresent(TQ.l.UV5Kind) && (qQ.uvs5 = WQ.getVerticesData(TQ.l.UV5Kind, XQ, wQ)), WQ.isVerticesDataPresent(TQ.l.UV6Kind) && (qQ.uvs6 = WQ.getVerticesData(TQ.l.UV6Kind, XQ, wQ)), WQ.isVerticesDataPresent(TQ.l.ColorKind)) {
            const QQ = WQ.geometry || WQ,
              zQ = QQ.getVertexBuffer(TQ.l.ColorKind),
              sQ = QQ.getVerticesData(TQ.l.ColorKind, XQ, wQ);
            if (3 === zQ.getSize()) {
              const QQ = new Float32Array(4 * sQ.length / 3);
              for (let WQ = 0, XQ = 0; WQ < sQ.length; WQ += 3, XQ += 4) QQ[XQ] = sQ[WQ], QQ[XQ + 1] = sQ[WQ + 1], QQ[XQ + 2] = sQ[WQ + 2], QQ[XQ + 3] = 1;
              qQ.colors = QQ
            } else {
              if (4 !== zQ.getSize()) throw new Error(`Unexpected number of color components: ${zQ.getSize()}`);
              qQ.colors = sQ
            }
          }
          return WQ.isVerticesDataPresent(TQ.l.MatricesIndicesKind) && (qQ.matricesIndices = WQ.getVerticesData(TQ.l.MatricesIndicesKind, XQ, wQ)), WQ.isVerticesDataPresent(TQ.l.MatricesWeightsKind) && (qQ.matricesWeights = WQ.getVerticesData(TQ.l.MatricesWeightsKind, XQ, wQ)), WQ.isVerticesDataPresent(TQ.l.MatricesIndicesExtraKind) && (qQ.matricesIndicesExtra = WQ.getVerticesData(TQ.l.MatricesIndicesExtraKind, XQ, wQ)), WQ.isVerticesDataPresent(TQ.l.MatricesWeightsExtraKind) && (qQ.matricesWeightsExtra = WQ.getVerticesData(TQ.l.MatricesWeightsExtraKind, XQ, wQ)), qQ.indices = WQ.lwQ(XQ, wQ), qQ
        }
        static CreateRibbon(QQ) {
          throw (0, zQ.i)("ribbonBuilder")
        }
        static CreateBox(QQ) {
          throw (0, zQ.i)("boxBuilder")
        }
        static CreateTiledBox(QQ) {
          throw (0, zQ.i)("tiledBoxBuilder")
        }
        static CreateTiledPlane(QQ) {
          throw (0, zQ.i)("tiledPlaneBuilder")
        }
        static CreateSphere(QQ) {
          throw (0, zQ.i)("sphereBuilder")
        }
        static CreateCylinder(QQ) {
          throw (0, zQ.i)("cylinderBuilder")
        }
        static CreateTorus(QQ) {
          throw (0, zQ.i)("torusBuilder")
        }
        static CreateLineSystem(QQ) {
          throw (0, zQ.i)("linesBuilder")
        }
        static CreateDashedLines(QQ) {
          throw (0, zQ.i)("linesBuilder")
        }
        static CreateGround(QQ) {
          throw (0, zQ.i)("groundBuilder")
        }
        static CreateTiledGround(QQ) {
          throw (0, zQ.i)("groundBuilder")
        }
        static CreateGroundFromHeightMap(QQ) {
          throw (0, zQ.i)("groundBuilder")
        }
        static CreatePlane(QQ) {
          throw (0, zQ.i)("planeBuilder")
        }
        static CreateDisc(QQ) {
          throw (0, zQ.i)("discBuilder")
        }
        static CreatePolygon(QQ, WQ, XQ, wQ, qQ, TQ, sQ) {
          throw (0, zQ.i)("polygonBuilder")
        }
        static CreateIcoSphere(QQ) {
          throw (0, zQ.i)("icoSphereBuilder")
        }
        static CreatePolyhedron(QQ) {
          throw (0, zQ.i)("polyhedronBuilder")
        }
        static CreateCapsule() {
          arguments.length > 0 && void 0 !== arguments[0] || qQ.s.Up();
          throw (0, zQ.i)("capsuleBuilder")
        }
        static CreateTorusKnot(QQ) {
          throw (0, zQ.i)("torusKnotBuilder")
        }
        static ComputeNormals(QQ, WQ, XQ, wQ) {
          let TQ, zQ, sQ, FQ, PQ, gQ, JQ, rQ, IQ, jQ, BQ, yQ, VQ, DQ, pQ, GQ, UQ, bQ, vQ, dQ, HQ = !1,
            aQ = !1,
            lQ = !1,
            hQ = !1,
            iQ = 1,
            cQ = 0,
            AQ = null;
          wQ && (HQ = !!wQ.facetNormals, aQ = !!wQ.facetPositions, lQ = !!wQ.facetPartitioning, iQ = !0 === wQ.useRightHandedSystem ? -1 : 1, cQ = wQ.ratio || 0, hQ = !!wQ.depthSort, AQ = wQ.distanceTo, hQ && void 0 === AQ && (AQ = qQ.s.Zero()));
          let RQ = 0,
            EQ = 0,
            CQ = 0,
            uQ = 0;
          for (lQ && wQ && wQ.bbSize && (RQ = wQ.subDiv.X * cQ / wQ.bbSize.x, EQ = wQ.subDiv.Y * cQ / wQ.bbSize.y, CQ = wQ.subDiv.Z * cQ / wQ.bbSize.z, uQ = wQ.subDiv.max * wQ.subDiv.max, wQ.facetPartitioning.length = 0), TQ = 0; TQ < QQ.length; TQ++) XQ[TQ] = 0;
          const LQ = WQ.length / 3 | 0;
          for (TQ = 0; TQ < LQ; TQ++) {
            if (yQ = 3 * WQ[3 * TQ], VQ = yQ + 1, DQ = yQ + 2, pQ = 3 * WQ[3 * TQ + 1], GQ = pQ + 1, UQ = pQ + 2, bQ = 3 * WQ[3 * TQ + 2], vQ = bQ + 1, dQ = bQ + 2, zQ = QQ[yQ] - QQ[pQ], sQ = QQ[VQ] - QQ[GQ], FQ = QQ[DQ] - QQ[UQ], PQ = QQ[bQ] - QQ[pQ], gQ = QQ[vQ] - QQ[GQ], JQ = QQ[dQ] - QQ[UQ], rQ = iQ * (sQ * JQ - FQ * gQ), IQ = iQ * (FQ * PQ - zQ * JQ), jQ = iQ * (zQ * gQ - sQ * PQ), BQ = Math.sqrt(rQ * rQ + IQ * IQ + jQ * jQ), BQ = 0 === BQ ? 1 : BQ, rQ /= BQ, IQ /= BQ, jQ /= BQ, HQ && wQ && (wQ.facetNormals[TQ].x = rQ, wQ.facetNormals[TQ].y = IQ, wQ.facetNormals[TQ].z = jQ), aQ && wQ && (wQ.facetPositions[TQ].x = (QQ[yQ] + QQ[pQ] + QQ[bQ]) / 3, wQ.facetPositions[TQ].y = (QQ[VQ] + QQ[GQ] + QQ[vQ]) / 3, wQ.facetPositions[TQ].z = (QQ[DQ] + QQ[UQ] + QQ[dQ]) / 3), lQ && wQ) {
              const WQ = Math.floor((wQ.facetPositions[TQ].x - wQ.bInfo.minimum.x * cQ) * RQ),
                XQ = Math.floor((wQ.facetPositions[TQ].y - wQ.bInfo.minimum.y * cQ) * EQ),
                qQ = Math.floor((wQ.facetPositions[TQ].z - wQ.bInfo.minimum.z * cQ) * CQ),
                zQ = Math.floor((QQ[yQ] - wQ.bInfo.minimum.x * cQ) * RQ),
                sQ = Math.floor((QQ[VQ] - wQ.bInfo.minimum.y * cQ) * EQ),
                FQ = Math.floor((QQ[DQ] - wQ.bInfo.minimum.z * cQ) * CQ),
                PQ = Math.floor((QQ[pQ] - wQ.bInfo.minimum.x * cQ) * RQ),
                gQ = Math.floor((QQ[GQ] - wQ.bInfo.minimum.y * cQ) * EQ),
                JQ = Math.floor((QQ[UQ] - wQ.bInfo.minimum.z * cQ) * CQ),
                rQ = Math.floor((QQ[bQ] - wQ.bInfo.minimum.x * cQ) * RQ),
                IQ = Math.floor((QQ[vQ] - wQ.bInfo.minimum.y * cQ) * EQ),
                jQ = Math.floor((QQ[dQ] - wQ.bInfo.minimum.z * cQ) * CQ),
                BQ = zQ + wQ.subDiv.max * sQ + uQ * FQ,
                HQ = PQ + wQ.subDiv.max * gQ + uQ * JQ,
                aQ = rQ + wQ.subDiv.max * IQ + uQ * jQ,
                lQ = WQ + wQ.subDiv.max * XQ + uQ * qQ;
              wQ.facetPartitioning[lQ] = wQ.facetPartitioning[lQ] ? wQ.facetPartitioning[lQ] : [], wQ.facetPartitioning[BQ] = wQ.facetPartitioning[BQ] ? wQ.facetPartitioning[BQ] : [], wQ.facetPartitioning[HQ] = wQ.facetPartitioning[HQ] ? wQ.facetPartitioning[HQ] : [], wQ.facetPartitioning[aQ] = wQ.facetPartitioning[aQ] ? wQ.facetPartitioning[aQ] : [], wQ.facetPartitioning[BQ].push(TQ), HQ != BQ && wQ.facetPartitioning[HQ].push(TQ), aQ != HQ && aQ != BQ && wQ.facetPartitioning[aQ].push(TQ), lQ != BQ && lQ != HQ && lQ != aQ && wQ.facetPartitioning[lQ].push(TQ)
            }
            if (hQ && wQ && wQ.facetPositions) {
              const QQ = wQ.depthSortedFacets[TQ];
              QQ.ind = 3 * TQ, QQ.sqDistance = qQ.s.DistanceSquared(wQ.facetPositions[TQ], AQ)
            }
            XQ[yQ] += rQ, XQ[VQ] += IQ, XQ[DQ] += jQ, XQ[pQ] += rQ, XQ[GQ] += IQ, XQ[UQ] += jQ, XQ[bQ] += rQ, XQ[vQ] += IQ, XQ[dQ] += jQ
          }
          for (TQ = 0; TQ < XQ.length / 3; TQ++) rQ = XQ[3 * TQ], IQ = XQ[3 * TQ + 1], jQ = XQ[3 * TQ + 2], BQ = Math.sqrt(rQ * rQ + IQ * IQ + jQ * jQ), BQ = 0 === BQ ? 1 : BQ, rQ /= BQ, IQ /= BQ, jQ /= BQ, XQ[3 * TQ] = rQ, XQ[3 * TQ + 1] = IQ, XQ[3 * TQ + 2] = jQ
        }
        static _ComputeSides(WQ, XQ, wQ, TQ, zQ, sQ, FQ) {
          const PQ = wQ.length,
            gQ = TQ.length;
          let JQ, rQ;
          switch (WQ = WQ || QQ.DEFAULTSIDE) {
            case QQ.FRONTSIDE:
              break;
            case QQ.BACKSIDE:
              for (JQ = 0; JQ < PQ; JQ += 3) {
                const QQ = wQ[JQ];
                wQ[JQ] = wQ[JQ + 2], wQ[JQ + 2] = QQ
              }
              for (rQ = 0; rQ < gQ; rQ++) TQ[rQ] = -TQ[rQ];
              break;
            case QQ.DOUBLESIDE: {
              const QQ = XQ.length,
                WQ = QQ / 3;
              for (let wQ = 0; wQ < QQ; wQ++) XQ[QQ + wQ] = XQ[wQ];
              for (JQ = 0; JQ < PQ; JQ += 3) wQ[JQ + PQ] = wQ[JQ + 2] + WQ, wQ[JQ + 1 + PQ] = wQ[JQ + 1] + WQ, wQ[JQ + 2 + PQ] = wQ[JQ] + WQ;
              for (rQ = 0; rQ < gQ; rQ++) TQ[gQ + rQ] = -TQ[rQ];
              const IQ = zQ.length;
              let jQ;
              for (jQ = 0; jQ < IQ; jQ++) zQ[jQ + IQ] = zQ[jQ];
              for (sQ = sQ || new qQ.w(0, 0, 1, 1), FQ = FQ || new qQ.w(0, 0, 1, 1), jQ = 0, JQ = 0; JQ < IQ / 2; JQ++) zQ[jQ] = sQ.x + (sQ.z - sQ.x) * zQ[jQ], zQ[jQ + 1] = sQ.y + (sQ.w - sQ.y) * zQ[jQ + 1], zQ[jQ + IQ] = FQ.x + (FQ.z - FQ.x) * zQ[jQ + IQ], zQ[jQ + IQ + 1] = FQ.y + (FQ.w - FQ.y) * zQ[jQ + IQ + 1], jQ += 2;
              break
            }
          }
        }
        static Parse(WQ) {
          const XQ = new QQ,
            wQ = WQ.positions;
          wQ && XQ.set(wQ, TQ.l.PositionKind);
          const qQ = WQ.normals;
          qQ && XQ.set(qQ, TQ.l.NormalKind);
          const zQ = WQ.tangents;
          zQ && XQ.set(zQ, TQ.l.TangentKind);
          const FQ = WQ.uvs;
          FQ && XQ.set(FQ, TQ.l.UVKind);
          const PQ = WQ.uvs2;
          PQ && XQ.set(PQ, TQ.l.UV2Kind);
          const gQ = WQ.uvs3;
          gQ && XQ.set(gQ, TQ.l.UV3Kind);
          const JQ = WQ.uvs4;
          JQ && XQ.set(JQ, TQ.l.UV4Kind);
          const rQ = WQ.uvs5;
          rQ && XQ.set(rQ, TQ.l.UV5Kind);
          const jQ = WQ.uvs6;
          jQ && XQ.set(jQ, TQ.l.UV6Kind);
          const BQ = WQ.colors;
          BQ && (XQ.set(sQ.d.CheckColors4(BQ, wQ.length / 3), TQ.l.ColorKind), void 0 !== WQ.hasVertexAlpha && (XQ.hasVertexAlpha = WQ.hasVertexAlpha));
          const yQ = WQ.matricesIndices;
          yQ && XQ.set(yQ, TQ.l.MatricesIndicesKind);
          const VQ = WQ.matricesWeights;
          VQ && XQ.set(VQ, TQ.l.MatricesWeightsKind);
          const DQ = WQ.indices;
          DQ && (XQ.indices = DQ);
          const pQ = WQ.materialInfos;
          if (pQ) {
            XQ.materialInfos = [];
            for (const QQ of pQ) {
              const WQ = new IQ;
              WQ.indexCount = QQ.indexCount, WQ.indexStart = QQ.indexStart, WQ.verticesCount = QQ.verticesCount, WQ.verticesStart = QQ.verticesStart, WQ.materialIndex = QQ.materialIndex, XQ.materialInfos.push(WQ)
            }
          }
          return XQ
        }
        static ImportVertexData(WQ, XQ) {
          const wQ = QQ.Parse(WQ);
          XQ.setAllVerticesData(wQ, WQ.updatable)
        }
      }, (() => {
        const qQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        WQ = [PQ.g.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], XQ = [PQ.g.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], jQ = [PQ.g.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], BQ = [PQ.g.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], (0, wQ.k)(QQ, null, WQ, {
          kind: "method",
          name: "_TransformVector3Coordinates",
          static: !0,
          private: !1,
          access: {
            has: QQ => "_TransformVector3Coordinates" in QQ,
            get: QQ => QQ._TransformVector3Coordinates
          },
          metadata: qQ
        }, null, yQ), (0, wQ.k)(QQ, null, XQ, {
          kind: "method",
          name: "_TransformVector3Normals",
          static: !0,
          private: !1,
          access: {
            has: QQ => "_TransformVector3Normals" in QQ,
            get: QQ => QQ._TransformVector3Normals
          },
          metadata: qQ
        }, null, yQ), (0, wQ.k)(QQ, null, jQ, {
          kind: "method",
          name: "_TransformVector4Normals",
          static: !0,
          private: !1,
          access: {
            has: QQ => "_TransformVector4Normals" in QQ,
            get: QQ => QQ._TransformVector4Normals
          },
          metadata: qQ
        }, null, yQ), (0, wQ.k)(QQ, null, BQ, {
          kind: "method",
          name: "_FlipFaces",
          static: !0,
          private: !1,
          access: {
            has: QQ => "_FlipFaces" in QQ,
            get: QQ => QQ._FlipFaces
          },
          metadata: qQ
        }, null, yQ), qQ && Object.defineProperty(QQ, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: qQ
        })
      })(), QQ.FRONTSIDE = ((0, wQ.n)(QQ, yQ), 0), QQ.BACKSIDE = 1, QQ.DOUBLESIDE = 2, QQ.DEFAULTSIDE = 0, QQ._UniqueIdGenerator = 0, QQ
    })()
  },
  40732: (QQ, WQ, XQ) => {
    var wQ = XQ(37370),
      qQ = XQ(38956),
      TQ = XQ(40561),
      zQ = XQ(40651),
      sQ = XQ(40404);
    const FQ = "bakedVertexAnimationSettingsInstanced";

    function PQ(QQ) {
      const WQ = QQ.bakedVertexAnimationManager?.texture?.getInternalTexture()?._bufferView;
      return WQ instanceof Float32Array || WQ instanceof Uint16Array
    }

    function gQ(QQ, WQ, XQ, wQ) {
      XQ.h_(Number.POSITIVE_INFINITY), wQ.h_(Number.NEGATIVE_INFINITY);
      for (let qQ = 0; qQ < 3 * WQ; qQ += 3) {
        const WQ = QQ[qQ],
          TQ = QQ[qQ + 1],
          zQ = QQ[qQ + 2];
        WQ < XQ.x && (XQ.x = WQ), TQ < XQ.y && (XQ.y = TQ), zQ < XQ.z && (XQ.z = zQ), WQ > wQ.x && (wQ.x = WQ), TQ > wQ.y && (wQ.y = TQ), zQ > wQ.z && (wQ.z = zQ)
      }
    }

    function JQ(QQ, WQ, XQ) {
      XQ && (QQ.x -= QQ.x * XQ.x + XQ.y, QQ.y -= QQ.y * XQ.x + XQ.y, QQ.z -= QQ.z * XQ.x + XQ.y, WQ.x += WQ.x * XQ.x + XQ.y, WQ.y += WQ.y * XQ.x + XQ.y, WQ.z += WQ.z * XQ.x + XQ.y)
    }

    function rQ(QQ, WQ, XQ, qQ, TQ) {
      const zQ = wQ.m.vj[7],
        sQ = wQ.m.vj[8];
      for (let FQ = 0; FQ < 2; ++FQ)
        for (let PQ = 0; PQ < 2; ++PQ)
          for (let gQ = 0; gQ < 2; ++gQ) zQ.set(FQ ? WQ.x : QQ.x, PQ ? WQ.y : QQ.y, gQ ? WQ.z : QQ.z), wQ.s.TransformCoordinatesToRef(zQ, XQ, sQ), qQ.minimizeInPlace(sQ), TQ.maximizeInPlace(sQ)
    }

    function IQ(QQ, WQ, XQ, qQ, TQ) {
      const zQ = wQ.m.vj[7];
      for (let sQ = 0; sQ < 3 * WQ; sQ += 3) wQ.s.TransformCoordinatesFromFloatsToRef(QQ[sQ], QQ[sQ + 1], QQ[sQ + 2], XQ, zQ), qQ.minimizeInPlace(zQ), TQ.maximizeInPlace(zQ)
    }
    let jQ = !1;
    jQ || (jQ = !0, zQ.d.prototype.thinInstanceAdd = function(QQ) {
      let WQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (!this.sE().Uj().getCaps().instancedArrays) return qQ.b.Error("Thin Instances are not supported on this device as Instanced Array extension not supported"), -1;
      this._thinInstanceUpdateBufferSize("matrix", Array.isArray(QQ) ? QQ.length : 1);
      const XQ = this._thinInstanceDataStorage.instancesCount;
      if (Array.isArray(QQ))
        for (let wQ = 0; wQ < QQ.length; ++wQ) this.thinInstanceSetMatrixAt(this._thinInstanceDataStorage.instancesCount++, QQ[wQ], wQ === QQ.length - 1 && WQ);
      else this.thinInstanceSetMatrixAt(this._thinInstanceDataStorage.instancesCount++, QQ, WQ);
      return XQ
    }, zQ.d.prototype.thinInstanceAddSelf = function() {
      let QQ = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      return this.thinInstanceAdd(wQ.e.IdentityReadOnly, QQ)
    }, zQ.d.prototype.thinInstanceRegisterAttribute = function(QQ, WQ) {
      QQ === sQ.l.ColorKind && (QQ = sQ.l.ColorInstanceKind), this.removeVerticesData(QQ), this._thinInstanceInitializeUserStorage(), this._userThinInstanceBuffersStorage.strides[QQ] = WQ, this._userThinInstanceBuffersStorage.sizes[QQ] = WQ * Math.max(32, this._thinInstanceDataStorage.instancesCount), this._userThinInstanceBuffersStorage.data[QQ] = new Float32Array(this._userThinInstanceBuffersStorage.sizes[QQ]), this._userThinInstanceBuffersStorage.vertexBuffers[QQ] = new sQ.l(this.Uj(), this._userThinInstanceBuffersStorage.data[QQ], QQ, !0, !1, WQ, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[QQ])
    }, zQ.d.prototype.thinInstanceSetMatrixAt = function(QQ, WQ) {
      let XQ = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      if (!this._thinInstanceDataStorage.matrixData || QQ >= this._thinInstanceDataStorage.instancesCount) return !1;
      const wQ = this._thinInstanceDataStorage.matrixData;
      return WQ.copyToArray(wQ, 16 * QQ), this._thinInstanceDataStorage.worldMatrices && (this._thinInstanceDataStorage.worldMatrices[QQ] = WQ), XQ && (this.I5("matrix"), this.aj || this.thinInstanceRefreshBoundingInfo(!1)), !0
    }, zQ.d.prototype.thinInstanceSetAttributeAt = function(QQ, WQ, XQ) {
      let wQ = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      return QQ === sQ.l.ColorKind && (QQ = sQ.l.ColorInstanceKind), !(!this._userThinInstanceBuffersStorage || !this._userThinInstanceBuffersStorage.data[QQ] || WQ >= this._thinInstanceDataStorage.instancesCount) && (this._thinInstanceUpdateBufferSize(QQ, 0), this._userThinInstanceBuffersStorage.data[QQ].set(XQ, WQ * this._userThinInstanceBuffersStorage.strides[QQ]), wQ && this.I5(QQ), !0)
    }, Object.defineProperty(zQ.d.prototype, "f_", {
      get: function() {
        return this._thinInstanceDataStorage.instancesCount
      },
      set: function(QQ) {
        const WQ = this._thinInstanceDataStorage.matrixData ?? this.source?._thinInstanceDataStorage.matrixData;
        QQ <= (WQ ? WQ.length / 16 : 0) && (this._thinInstanceDataStorage.instancesCount = QQ)
      },
      enumerable: !0,
      configurable: !0
    }), zQ.d.prototype._thinInstanceCreateMatrixBuffer = function(QQ, WQ) {
      let XQ = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      const wQ = new sQ.d(this.Uj(), WQ, !XQ, 16, !1, !0);
      for (let qQ = 0; qQ < 4; qQ++) this.setVerticesBuffer(wQ.createVertexBuffer(QQ + qQ, 4 * qQ, 4));
      return wQ
    }, zQ.d.prototype.Y5 = function(QQ, WQ) {
      let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        wQ = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      if (XQ = XQ || 16, "matrix" === QQ) this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = null, this._thinInstanceDataStorage.matrixBufferSize = WQ ? WQ.length : 32 * XQ, this._thinInstanceDataStorage.matrixData = WQ, this._thinInstanceDataStorage.worldMatrices = null, null !== WQ ? (this._thinInstanceDataStorage.instancesCount = WQ.length / XQ, this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", WQ, wQ), this.aj || this.thinInstanceRefreshBoundingInfo(!1)) : (this._thinInstanceDataStorage.instancesCount = 0, this.aj || this.refreshBoundingInfo());
      else if ("previousMatrix" === QQ) this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = null, this._thinInstanceDataStorage.previousMatrixData = WQ, null !== WQ && (this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", WQ, wQ));
      else if ("splatIndex" === QQ && WQ) {
        this._thinInstanceInitializeUserStorage(), this._thinInstanceDataStorage.instancesCount = WQ.length / XQ, this._userThinInstanceBuffersStorage.data[QQ] = WQ, this._userThinInstanceBuffersStorage.strides[QQ] = XQ, this._userThinInstanceBuffersStorage.sizes[QQ] = WQ.length;
        const wQ = new sQ.d(this.Uj(), WQ, !0, 16, !1, !0);
        this._thinInstanceDataStorage.matrixBuffer = wQ;
        for (let WQ = 0; WQ < 4; WQ++) this.setVerticesBuffer(wQ.createVertexBuffer(QQ + WQ, 4 * WQ, 4))
      } else QQ === sQ.l.ColorKind && (QQ = sQ.l.ColorInstanceKind), null === WQ ? this._userThinInstanceBuffersStorage?.data[QQ] && (this.removeVerticesData(QQ), delete this._userThinInstanceBuffersStorage.data[QQ], delete this._userThinInstanceBuffersStorage.strides[QQ], delete this._userThinInstanceBuffersStorage.sizes[QQ], delete this._userThinInstanceBuffersStorage.vertexBuffers[QQ]) : (this._thinInstanceInitializeUserStorage(), this._userThinInstanceBuffersStorage.data[QQ] = WQ, this._userThinInstanceBuffersStorage.strides[QQ] = XQ, this._userThinInstanceBuffersStorage.sizes[QQ] = WQ.length, this._userThinInstanceBuffersStorage.vertexBuffers[QQ] = new sQ.l(this.Uj(), WQ, QQ, !wQ, !1, XQ, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[QQ]))
    }, zQ.d.prototype.I5 = function(QQ) {
      "matrix" === QQ ? (this.thinInstanceAllowAutomaticStaticBufferRecreation && this._thinInstanceDataStorage.matrixBuffer && !this._thinInstanceDataStorage.matrixBuffer.isUpdatable() && this._thinInstanceRecreateBuffer(QQ), this._thinInstanceDataStorage.matrixBuffer?.updateDirectly(this._thinInstanceDataStorage.matrixData, 0, this._thinInstanceDataStorage.instancesCount)) : "previousMatrix" === QQ ? (this.thinInstanceAllowAutomaticStaticBufferRecreation && this._thinInstanceDataStorage.previousMatrixBuffer && !this._thinInstanceDataStorage.previousMatrixBuffer.isUpdatable() && this._thinInstanceRecreateBuffer(QQ), this._thinInstanceDataStorage.previousMatrixBuffer?.updateDirectly(this._thinInstanceDataStorage.previousMatrixData, 0, this._thinInstanceDataStorage.instancesCount)) : "splatIndex" === QQ ? this._thinInstanceDataStorage.matrixBuffer?.updateDirectly(this._userThinInstanceBuffersStorage.data[QQ], 0, this._thinInstanceDataStorage.instancesCount) : (QQ === sQ.l.ColorKind && (QQ = sQ.l.ColorInstanceKind), this._userThinInstanceBuffersStorage?.vertexBuffers[QQ] && (this.thinInstanceAllowAutomaticStaticBufferRecreation && !this._userThinInstanceBuffersStorage.vertexBuffers[QQ].isUpdatable() && this._thinInstanceRecreateBuffer(QQ), this._userThinInstanceBuffersStorage.vertexBuffers[QQ].updateDirectly(this._userThinInstanceBuffersStorage.data[QQ], 0)))
    }, zQ.d.prototype.thinInstancePartialBufferUpdate = function(QQ, WQ, XQ) {
      if ("matrix" === QQ) this._thinInstanceDataStorage.matrixBuffer && ("number" === typeof WQ ? this._thinInstanceDataStorage.matrixBuffer.updateDirectly(new Float32Array(this._thinInstanceDataStorage.matrixData.buffer, this._thinInstanceDataStorage.matrixData.byteOffset + 16 * XQ * Float32Array.BYTES_PER_ELEMENT, 16 * WQ), 16 * XQ) : this._thinInstanceDataStorage.matrixBuffer.updateDirectly(WQ, XQ));
      else if (QQ === sQ.l.ColorKind && (QQ = sQ.l.ColorInstanceKind), this._userThinInstanceBuffersStorage?.vertexBuffers[QQ]) {
        const wQ = this._userThinInstanceBuffersStorage.vertexBuffers[QQ];
        if ("number" === typeof WQ) {
          const wQ = new Float32Array(this._userThinInstanceBuffersStorage.data[QQ].buffer, this._userThinInstanceBuffersStorage.data[QQ].byteOffset + XQ * this._userThinInstanceBuffersStorage.strides[QQ] * Float32Array.BYTES_PER_ELEMENT, WQ * this._userThinInstanceBuffersStorage.strides[QQ]);
          this._userThinInstanceBuffersStorage.vertexBuffers[QQ].updateDirectly(wQ, XQ * this._userThinInstanceBuffersStorage.strides[QQ])
        } else wQ.updateDirectly(WQ, XQ)
      }
    }, zQ.d.prototype.thinInstanceGetWorldMatrices = function() {
      if (!this._thinInstanceDataStorage.matrixData || !this._thinInstanceDataStorage.matrixBuffer) return [];
      const QQ = this._thinInstanceDataStorage.matrixData;
      if (!this._thinInstanceDataStorage.worldMatrices) {
        this._thinInstanceDataStorage.worldMatrices = [];
        for (let WQ = 0; WQ < this._thinInstanceDataStorage.instancesCount; ++WQ) this._thinInstanceDataStorage.worldMatrices[WQ] = wQ.e.FromArray(QQ, 16 * WQ)
      }
      return this._thinInstanceDataStorage.worldMatrices
    }, zQ.d.prototype.thinInstanceRefreshBoundingInfo = function() {
      let QQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        XQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        qQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!this._thinInstanceDataStorage.matrixData || !this._thinInstanceDataStorage.matrixBuffer) return;
      const zQ = this._thinInstanceDataStorage.boundingVectors;
      if (QQ || !this.rawBoundingInfo) {
        if (zQ.length = 0, qQ && function(QQ, WQ, XQ) {
            const qQ = QQ._userThinInstanceBuffersStorage,
              zQ = qQ?.data[FQ],
              jQ = qQ?.strides[FQ];
            if (!zQ || !jQ || jQ < 4 || !PQ(QQ)) return !1;
            const BQ = QQ._thinInstanceDataStorage.matrixData;
            if (!BQ) return !1;
            const yQ = {},
              VQ = wQ.m.Vector4[0],
              DQ = wQ.m.vj[1],
              pQ = wQ.m.vj[2],
              GQ = wQ.m.vj[3],
              UQ = wQ.m.vj[4],
              bQ = wQ.m.vj[5],
              vQ = wQ.m.vj[6],
              dQ = wQ.m.Matrix[2],
              HQ = QQ.geometry ? QQ.geometry.boundingBias : null,
              aQ = QQ.getTotalVertices();
            DQ.h_(Number.POSITIVE_INFINITY), pQ.h_(Number.NEGATIVE_INFINITY), GQ.h_(Number.POSITIVE_INFINITY), UQ.h_(Number.NEGATIVE_INFINITY);
            for (let TQ = 0; TQ < QQ._thinInstanceDataStorage.instancesCount; ++TQ) {
              const WQ = TQ * jQ;
              VQ.set(zQ[WQ], zQ[WQ + 1], zQ[WQ + 2], zQ[WQ + 3]);
              const qQ = QQ._getData({
                applyMorph: XQ,
                applyBakedVertexAnimation: !0,
                bakedVertexAnimationSettings: VQ,
                updatePositionsArray: !1,
                cache: yQ
              }, null, sQ.l.PositionKind);
              if (!qQ) return !1;
              gQ(qQ, aQ, bQ, vQ), JQ(bQ, vQ, HQ), DQ.minimizeInPlace(bQ), pQ.maximizeInPlace(vQ), wQ.e.FromArrayToRef(BQ, 16 * TQ, dQ), HQ ? rQ(bQ, vQ, dQ, GQ, UQ) : IQ(qQ, aQ, dQ, GQ, UQ)
            }
            return !(!isFinite(DQ.x) || !isFinite(GQ.x)) && (QQ.uC().reConstruct(GQ, UQ), QQ.rawBoundingInfo = new TQ.e(DQ, pQ), function(QQ, WQ) {
              QQ.length = 0;
              for (let XQ = 0; XQ < WQ.boundingBox.vectors.length; ++XQ) QQ.push(WQ.boundingBox.vectors[XQ].clone())
            }(WQ, QQ.rawBoundingInfo), QQ._updateBoundingInfo(), !0)
          }(this, zQ, XQ)) return;
        qQ && this.bakedVertexAnimationManager?.isEnabled && PQ(this) ? this.refreshBoundingInfo({
          applySkeleton: WQ,
          applyMorph: XQ,
          applyBakedVertexAnimation: !0,
          updatePositionsArray: !1
        }) : this.refreshBoundingInfo(WQ, XQ);
        const QQ = this.uC();
        this.rawBoundingInfo = new TQ.e(QQ.minimum, QQ.maximum)
      }
      const jQ = this.uC(),
        BQ = this._thinInstanceDataStorage.matrixData;
      if (0 === zQ.length)
        for (let wQ = 0; wQ < jQ.boundingBox.vectors.length; ++wQ) zQ.push(jQ.boundingBox.vectors[wQ].clone());
      wQ.m.vj[0].h_(Number.POSITIVE_INFINITY), wQ.m.vj[1].h_(Number.NEGATIVE_INFINITY);
      for (let TQ = 0; TQ < this._thinInstanceDataStorage.instancesCount; ++TQ) {
        wQ.e.FromArrayToRef(BQ, 16 * TQ, wQ.m.Matrix[0]);
        for (let QQ = 0; QQ < zQ.length; ++QQ) wQ.s.TransformCoordinatesToRef(zQ[QQ], wQ.m.Matrix[0], wQ.m.vj[2]), wQ.m.vj[0].minimizeInPlace(wQ.m.vj[2]), wQ.m.vj[1].maximizeInPlace(wQ.m.vj[2])
      }
      jQ.reConstruct(wQ.m.vj[0], wQ.m.vj[1]), this._updateBoundingInfo()
    }, zQ.d.prototype._thinInstanceRecreateBuffer = function(QQ) {
      let WQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      "matrix" === QQ ? (this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", this._thinInstanceDataStorage.matrixData, WQ)) : "previousMatrix" === QQ ? this._scene.needsPreviousWorldMatrices && (this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", this._thinInstanceDataStorage.previousMatrixData ?? this._thinInstanceDataStorage.matrixData, WQ)) : (QQ === sQ.l.ColorKind && (QQ = sQ.l.ColorInstanceKind), this._userThinInstanceBuffersStorage.vertexBuffers[QQ]?.dispose(), this._userThinInstanceBuffersStorage.vertexBuffers[QQ] = new sQ.l(this.Uj(), this._userThinInstanceBuffersStorage.data[QQ], QQ, !WQ, !1, this._userThinInstanceBuffersStorage.strides[QQ], !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[QQ]))
    }, zQ.d.prototype._thinInstanceUpdateBufferSize = function(QQ) {
      let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      QQ === sQ.l.ColorKind && (QQ = sQ.l.ColorInstanceKind);
      const XQ = "matrix" === QQ;
      if (!XQ && (!this._userThinInstanceBuffersStorage || !this._userThinInstanceBuffersStorage.strides[QQ])) return;
      const wQ = XQ ? 16 : this._userThinInstanceBuffersStorage.strides[QQ],
        qQ = XQ ? this._thinInstanceDataStorage.matrixBufferSize : this._userThinInstanceBuffersStorage.sizes[QQ];
      let TQ = XQ ? this._thinInstanceDataStorage.matrixData : this._userThinInstanceBuffersStorage.data[QQ];
      const zQ = (this._thinInstanceDataStorage.instancesCount + WQ) * wQ;
      let FQ = qQ;
      for (; FQ < zQ;) FQ *= 2;
      if (!TQ || qQ != FQ) {
        if (TQ) {
          const QQ = new Float32Array(FQ);
          QQ.set(TQ, 0), TQ = QQ
        } else TQ = new Float32Array(FQ);
        XQ ? (this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", TQ, !1), this._thinInstanceDataStorage.matrixData = TQ, this._thinInstanceDataStorage.matrixBufferSize = FQ, this._scene.needsPreviousWorldMatrices && !this._thinInstanceDataStorage.previousMatrixData && (this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", TQ, !1))) : (this._userThinInstanceBuffersStorage.vertexBuffers[QQ]?.dispose(), this._userThinInstanceBuffersStorage.data[QQ] = TQ, this._userThinInstanceBuffersStorage.sizes[QQ] = FQ, this._userThinInstanceBuffersStorage.vertexBuffers[QQ] = new sQ.l(this.Uj(), TQ, QQ, !0, !1, wQ, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[QQ]))
      }
    }, zQ.d.prototype._thinInstanceInitializeUserStorage = function() {
      this._userThinInstanceBuffersStorage || (this._userThinInstanceBuffersStorage = {
        data: {},
        sizes: {},
        vertexBuffers: {},
        strides: {}
      })
    }, zQ.d.prototype._disposeThinInstanceSpecificData = function() {
      this._thinInstanceDataStorage?.matrixBuffer && (this._thinInstanceDataStorage.matrixBuffer.dispose(), this._thinInstanceDataStorage.matrixBuffer = null), this._thinInstanceDataStorage?.previousMatrixBuffer && (this._thinInstanceDataStorage.previousMatrixBuffer.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = null)
    })
  },
  40690: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => DQ,
      d: () => BQ
    });
    var wQ, qQ, TQ, zQ, sQ = XQ(40260),
      FQ = XQ(40268),
      PQ = XQ(40286),
      gQ = XQ(37399),
      JQ = XQ(37370),
      rQ = XQ(40491),
      IQ = XQ(37418),
      jQ = XQ(40153);
    let BQ = (() => {
      var QQ;
      let WQ, XQ, wQ, qQ, TQ, zQ, IQ, jQ, BQ, yQ = rQ.e,
        VQ = [],
        DQ = [],
        pQ = [],
        GQ = [],
        UQ = [],
        bQ = [],
        vQ = [],
        dQ = [],
        HQ = [],
        aQ = [],
        lQ = [],
        hQ = [],
        iQ = [],
        cQ = [],
        AQ = [],
        RQ = [],
        EQ = [],
        CQ = [];
      return QQ = class extends yQ {
        get billboardMode() {
          return this._billboardMode
        }
        set billboardMode(WQ) {
          this._billboardMode !== WQ && (this._billboardMode = WQ, this._cache.useBillboardPosition = 0 !== (this._billboardMode & QQ.BILLBOARDMODE_USE_POSITION))
        }
        get infiniteDistance() {
          return this._infiniteDistance
        }
        set infiniteDistance(QQ) {
          this._infiniteDistance !== QQ && (this._infiniteDistance = QQ)
        }
        constructor(WQ) {
          let XQ = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          super(WQ, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, !1), this._forward = new JQ.s(0, 0, 1), this._up = new JQ.s(0, 1, 0), this._right = new JQ.s(1, 0, 0), this._position = (0, sQ.n)(this, VQ, JQ.s.Zero()), this._rotation = ((0, sQ.n)(this, DQ), (0, sQ.n)(this, pQ, JQ.s.Zero())), this._rotationQuaternion = ((0, sQ.n)(this, GQ), (0, sQ.n)(this, UQ, null)), this._scaling = ((0, sQ.n)(this, bQ), (0, sQ.n)(this, vQ, JQ.s.One())), this._transformToBoneReferal = ((0, sQ.n)(this, dQ), null), this._isAbsoluteSynced = !1, this._billboardMode = (0, sQ.n)(this, HQ, QQ.BILLBOARDMODE_NONE), this.scalingDeterminant = ((0, sQ.n)(this, aQ), (0, sQ.n)(this, lQ, 1)), this._infiniteDistance = ((0, sQ.n)(this, hQ), (0, sQ.n)(this, iQ, !1)), this.ignoreNonUniformScaling = ((0, sQ.n)(this, cQ), (0, sQ.n)(this, AQ, !1)), this.reIntegrateRotationIntoRotationQuaternion = ((0, sQ.n)(this, RQ), (0, sQ.n)(this, EQ, !1)), this._poseMatrix = ((0, sQ.n)(this, CQ), null), this._localMatrix = JQ.e.Zero(), this._usePivotMatrix = !1, this._absolutePosition = JQ.s.Zero(), this._absoluteScaling = JQ.s.Zero(), this._absoluteRotationQuaternion = JQ.h.Identity(), this._pivotMatrix = JQ.e.Identity(), this._postMultiplyPivotMatrix = !1, this._isWorldMatrixFrozen = !1, this._indexInSceneTransformNodesArray = -1, this.onAfterWorldMatrixUpdateObservable = new gQ.b, this._nonUniformScaling = !1, XQ && this.sE().addTransformNode(this)
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
        get oB() {
          return this._scaling
        }
        set oB(QQ) {
          this._scaling = QQ, this._markAsDirtyInternal()
        }
        get rotationQuaternion() {
          return this._rotationQuaternion
        }
        set rotationQuaternion(QQ) {
          this._rotationQuaternion = QQ, QQ && this._rotation.h_(0), this._markAsDirtyInternal()
        }
        _markAsDirtyInternal() {
          this._isDirty || (this._isDirty = !0, this.customMarkAsDirty && this.customMarkAsDirty())
        }
        get forward() {
          return JQ.s.TransformNormalFromFloatsToRef(0, 0, this.sE().useRightHandedSystem ? -1 : 1, this.getWorldMatrix(), this._forward), this._forward.normalize()
        }
        get up() {
          return JQ.s.TransformNormalFromFloatsToRef(0, 1, 0, this.getWorldMatrix(), this._up), this._up.normalize()
        }
        get right() {
          return JQ.s.TransformNormalFromFloatsToRef(this.sE().useRightHandedSystem ? -1 : 1, 0, 0, this.getWorldMatrix(), this._right), this._right.normalize()
        }
        updatePoseMatrix(QQ) {
          return this._poseMatrix ? (this._poseMatrix.WH(QQ), this) : (this._poseMatrix = QQ.clone(), this)
        }
        getPoseMatrix() {
          return this._poseMatrix || (this._poseMatrix = JQ.e.Identity()), this._poseMatrix
        }
        _isSynchronized() {
          const WQ = this._cache;
          return this._billboardMode === WQ.billboardMode && this._billboardMode === QQ.BILLBOARDMODE_NONE && (!WQ.pivotMatrixUpdated && (!this._infiniteDistance && (!this._position._isDirty && (!this._scaling._isDirty && !(this._rotationQuaternion && this._rotationQuaternion._isDirty || this._rotation._isDirty)))))
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
          let WQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          return this._pivotMatrix.WH(QQ), this._usePivotMatrix = !this._pivotMatrix.isIdentity(), this._cache.pivotMatrixUpdated = !0, this._postMultiplyPivotMatrix = WQ, this._postMultiplyPivotMatrix && (this._pivotMatrixInverse ? this._pivotMatrix.invertToRef(this._pivotMatrixInverse) : this._pivotMatrixInverse = JQ.e.Invert(this._pivotMatrix)), this
        }
        getPivotMatrix() {
          return this._pivotMatrix
        }
        instantiateHierarchy() {
          let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            WQ = arguments.length > 1 ? arguments[1] : void 0,
            XQ = arguments.length > 2 ? arguments[2] : void 0;
          const wQ = this.clone("Clone of " + (this.name || this.id), QQ || this.parent, !0);
          wQ && XQ && XQ(this, wQ);
          for (const qQ of this.getChildTransformNodes(!0)) qQ.instantiateHierarchy(wQ, WQ, XQ);
          return wQ
        }
        uE() {
          let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return QQ ? arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (this._rotation.h_(0), this._rotationQuaternion = this._rotationQuaternion || JQ.h.Identity(), QQ.decompose(this._scaling, this._rotationQuaternion, this._position), this.computeWorldMatrix(!0)) : (this._worldMatrix = QQ, this._absolutePosition.XQQ(this._worldMatrix.m[12], this._worldMatrix.m[13], this._worldMatrix.m[14]), this._afterComputeWorldMatrix()) : (this._isWorldMatrixFrozen = !1, this.computeWorldMatrix(!0)), this._isDirty = !1, this._isWorldMatrixFrozen = !0, this
        }
        unfreezeWorldMatrix() {
          return this._isWorldMatrixFrozen = !1, this.computeWorldMatrix(!0), this
        }
        get rsQ() {
          return this._isWorldMatrixFrozen
        }
        getAbsolutePosition() {
          return this.computeWorldMatrix(), this._absolutePosition
        }
        setAbsolutePosition(QQ) {
          if (!QQ) return this;
          let WQ, XQ, wQ;
          if (void 0 === QQ.x) {
            if (arguments.length < 3) return this;
            WQ = arguments[0], XQ = arguments[1], wQ = arguments[2]
          } else WQ = QQ.x, XQ = QQ.y, wQ = QQ.z;
          if (this.parent) {
            const QQ = JQ.m.Matrix[0];
            this.parent.getWorldMatrix().invertToRef(QQ), JQ.s.TransformCoordinatesFromFloatsToRef(WQ, XQ, wQ, QQ, this.position)
          } else this.position.x = WQ, this.position.y = XQ, this.position.z = wQ;
          return this._absolutePosition.WH(QQ), this
        }
        setPositionWithLocalVector(QQ) {
          return this.computeWorldMatrix(), this.position = JQ.s.TransformNormal(QQ, this._localMatrix), this
        }
        getPositionExpressedInLocalSpace() {
          this.computeWorldMatrix();
          const QQ = JQ.m.Matrix[0];
          return this._localMatrix.invertToRef(QQ), JQ.s.TransformNormal(this.position, QQ)
        }
        locallyTranslate(QQ) {
          return this.computeWorldMatrix(!0), this.position = JQ.s.TransformCoordinates(QQ, this._localMatrix), this
        }
        lookAt(WQ) {
          let XQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            qQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
            TQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
          const zQ = QQ._LookAtVectorCache,
            sQ = 0 === TQ ? this.position : this.getAbsolutePosition();
          if (WQ.subtractToRef(sQ, zQ), this.setDirection(zQ, XQ, wQ, qQ), 1 === TQ && this.parent)
            if (this.rotationQuaternion) {
              const QQ = JQ.m.Matrix[0];
              this.rotationQuaternion.toRotationMatrix(QQ);
              const WQ = JQ.m.Matrix[1];
              this.parent.getWorldMatrix().getRotationMatrixToRef(WQ), WQ.invert(), QQ.multiplyToRef(WQ, QQ), this.rotationQuaternion.fromRotationMatrix(QQ)
            } else {
              const QQ = JQ.m.Quaternion[0];
              JQ.h.FromEulerVectorToRef(this.rotation, QQ);
              const WQ = JQ.m.Matrix[0];
              QQ.toRotationMatrix(WQ);
              const XQ = JQ.m.Matrix[1];
              this.parent.getWorldMatrix().getRotationMatrixToRef(XQ), XQ.invert(), WQ.multiplyToRef(XQ, WQ), QQ.fromRotationMatrix(WQ), QQ.toEulerAnglesToRef(this.rotation)
            } return this
        }
        iK(QQ) {
          const WQ = JQ.s.Zero();
          return this.getDirectionToRef(QQ, WQ), WQ
        }
        getDirectionToRef(QQ, WQ) {
          return JQ.s.TransformNormalToRef(QQ, this.getWorldMatrix(), WQ), this
        }
        setDirection(QQ) {
          let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
          const qQ = -Math.atan2(QQ.z, QQ.x) + Math.PI / 2,
            TQ = Math.sqrt(QQ.x * QQ.x + QQ.z * QQ.z),
            zQ = -Math.atan2(QQ.y, TQ);
          return this.rotationQuaternion ? JQ.h.RotationYawPitchRollToRef(qQ + WQ, zQ + XQ, wQ, this.rotationQuaternion) : (this.rotation.x = zQ + XQ, this.rotation.y = qQ + WQ, this.rotation.z = wQ), this
        }
        setPivotPoint(QQ) {
          let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          0 == this.sE().getRenderId() && this.computeWorldMatrix(!0);
          const XQ = this.getWorldMatrix();
          if (1 == WQ) {
            const WQ = JQ.m.Matrix[0];
            XQ.invertToRef(WQ), QQ = JQ.s.TransformCoordinates(QQ, WQ)
          }
          return this.setPivotMatrix(JQ.e.Translation(-QQ.x, -QQ.y, -QQ.z), !0)
        }
        getPivotPoint() {
          const QQ = JQ.s.Zero();
          return this.getPivotPointToRef(QQ), QQ
        }
        getPivotPointToRef(QQ) {
          return QQ.x = -this._pivotMatrix.m[12], QQ.y = -this._pivotMatrix.m[13], QQ.z = -this._pivotMatrix.m[14], this
        }
        getAbsolutePivotPoint() {
          const QQ = JQ.s.Zero();
          return this.getAbsolutePivotPointToRef(QQ), QQ
        }
        getAbsolutePivotPointToRef(QQ) {
          return this.getPivotPointToRef(QQ), JQ.s.TransformCoordinatesToRef(QQ, this.getWorldMatrix(), QQ), this
        }
        KWQ(QQ) {
          if (this._isDirty) return this;
          if (this._children)
            for (const WQ of this._children) WQ.KWQ(QQ);
          return super.KWQ(QQ)
        }
        setParent(WQ) {
          let XQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            wQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          if (!WQ && !this.parent) return this;
          const qQ = JQ.m.Quaternion[0],
            TQ = JQ.m.vj[0],
            zQ = JQ.m.vj[1],
            sQ = JQ.m.Matrix[1];
          JQ.e.IdentityToRef(sQ);
          const FQ = JQ.m.Matrix[0];
          this.computeWorldMatrix(!0);
          let PQ = this.rotationQuaternion;
          return PQ || (PQ = QQ._TmpRotation, JQ.h.RotationYawPitchRollToRef(this._rotation.y, this._rotation.x, this._rotation.z, PQ)), JQ.e.ComposeToRef(this.oB, PQ, this.position, FQ), this.parent && FQ.multiplyToRef(this.parent.computeWorldMatrix(!0), FQ), WQ && (WQ.computeWorldMatrix(!0).invertToRef(sQ), FQ.multiplyToRef(sQ, FQ)), FQ.decompose(zQ, qQ, TQ, XQ ? this : void 0), this.rotationQuaternion ? this.rotationQuaternion.WH(qQ) : qQ.toEulerAnglesToRef(this.rotation), this.oB.WH(zQ), this.position.WH(TQ), this.parent = WQ, wQ && this.setPivotMatrix(JQ.e.Identity()), this
        }
        addChild(QQ) {
          let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return QQ.setParent(this, WQ), this
        }
        removeChild(QQ) {
          let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return QQ.parent !== this || QQ.setParent(null, WQ), this
        }
        get nonUniformScaling() {
          return this._nonUniformScaling
        }
        _updateNonUniformScalingState(QQ) {
          return this._nonUniformScaling !== QQ && (this._nonUniformScaling = QQ, !0)
        }
        attachToBone(QQ, WQ) {
          return this._currentParentWhenAttachingToBone = this.parent, this._transformToBoneReferal = WQ, this.parent = QQ, QQ.getSkeleton().prepare(!0), QQ.getFinalMatrix().determinant() < 0 && (this.scalingDeterminant *= -1), this
        }
        detachFromBone() {
          let QQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          return this.parent ? (this.parent.getWorldMatrix().determinant() < 0 && (this.scalingDeterminant *= -1), this._transformToBoneReferal = null, this.parent = QQ ? this._currentParentWhenAttachingToBone : null, this) : (QQ && (this.parent = this._currentParentWhenAttachingToBone), this)
        }
        rotate(WQ, XQ, wQ) {
          let qQ;
          if (WQ.normalize(), this.rotationQuaternion || (this.rotationQuaternion = this.rotation.toQuaternion(), this.rotation.h_(0)), wQ && 0 !== wQ) {
            if (this.parent) {
              const QQ = this.parent.getWorldMatrix(),
                wQ = JQ.m.Matrix[0];
              QQ.invertToRef(wQ), WQ = JQ.s.TransformNormal(WQ, wQ), QQ.determinant() < 0 && (XQ *= -1)
            }
            qQ = JQ.h.RotationAxisToRef(WQ, XQ, QQ._RotationAxisCache), qQ.multiplyToRef(this.rotationQuaternion, this.rotationQuaternion)
          } else qQ = JQ.h.RotationAxisToRef(WQ, XQ, QQ._RotationAxisCache), this.rotationQuaternion.multiplyToRef(qQ, this.rotationQuaternion);
          return this
        }
        rotateAround(QQ, WQ, XQ) {
          WQ.normalize(), this.rotationQuaternion || (this.rotationQuaternion = JQ.h.RotationYawPitchRoll(this.rotation.y, this.rotation.x, this.rotation.z), this.rotation.h_(0));
          const wQ = JQ.m.vj[0],
            qQ = JQ.m.vj[1],
            TQ = JQ.m.vj[2],
            zQ = JQ.m.Quaternion[0],
            sQ = JQ.m.Matrix[0],
            FQ = JQ.m.Matrix[1],
            PQ = JQ.m.Matrix[2],
            gQ = JQ.m.Matrix[3];
          return QQ.subtractToRef(this.position, wQ), JQ.e.TranslationToRef(wQ.x, wQ.y, wQ.z, sQ), JQ.e.TranslationToRef(-wQ.x, -wQ.y, -wQ.z, FQ), JQ.e.RotationAxisToRef(WQ, XQ, PQ), FQ.multiplyToRef(PQ, gQ), gQ.multiplyToRef(sQ, gQ), gQ.decompose(qQ, zQ, TQ), this.position.addInPlace(TQ), zQ.multiplyToRef(this.rotationQuaternion, this.rotationQuaternion), this
        }
        translate(QQ, WQ, XQ) {
          const wQ = QQ.scale(WQ);
          if (XQ && 0 !== XQ) this.setAbsolutePosition(this.getAbsolutePosition().add(wQ));
          else {
            const QQ = this.getPositionExpressedInLocalSpace().add(wQ);
            this.setPositionWithLocalVector(QQ)
          }
          return this
        }
        addRotation(QQ, WQ, XQ) {
          let wQ;
          this.rotationQuaternion ? wQ = this.rotationQuaternion : (wQ = JQ.m.Quaternion[1], JQ.h.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, this.rotation.z, wQ));
          const qQ = JQ.m.Quaternion[0];
          return JQ.h.RotationYawPitchRollToRef(WQ, QQ, XQ, qQ), wQ.multiplyInPlace(qQ), this.rotationQuaternion || wQ.toEulerAnglesToRef(this.rotation), this
        }
        _getEffectiveParent() {
          return this.parent
        }
        isWorldMatrixCameraDependent() {
          return this._infiniteDistance && !this.parent || this._billboardMode !== QQ.BILLBOARDMODE_NONE
        }
        computeWorldMatrix() {
          let WQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            XQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          if (this._isWorldMatrixFrozen && !this._isDirty) return this._worldMatrix;
          const wQ = this.sE().getRenderId();
          if (!this._isDirty && !WQ && (this._currentRenderId === wQ || this.isSynchronized())) return this._currentRenderId = wQ, this._worldMatrix;
          XQ = XQ || this.sE().activeCamera, this._updateCache();
          const qQ = this._cache;
          qQ.pivotMatrixUpdated = !1, qQ.billboardMode = this.billboardMode, qQ.infiniteDistance = this.infiniteDistance, qQ.parent = this._parentNode, this._currentRenderId = wQ, this._childUpdateId += 1, this._isDirty = !1, this._position._isDirty = !1, this._rotation._isDirty = !1, this._scaling._isDirty = !1;
          const TQ = this._getEffectiveParent(),
            zQ = QQ._TmpScaling;
          let sQ, FQ = this._position;
          if (this._infiniteDistance && !this.parent && XQ) {
            const WQ = XQ.getWorldMatrix().m;
            FQ = QQ._TmpTranslation, FQ.XQQ(this._position.x + WQ[12], this._position.y + WQ[13], this._position.z + WQ[14])
          }
          if (zQ.XQQ(this._scaling.x * this.scalingDeterminant, this._scaling.y * this.scalingDeterminant, this._scaling.z * this.scalingDeterminant), this._rotationQuaternion) {
            if (this._rotationQuaternion._isDirty = !1, sQ = this._rotationQuaternion, this.reIntegrateRotationIntoRotationQuaternion) {
              this.rotation.lengthSquared() && (this._rotationQuaternion.multiplyInPlace(JQ.h.RotationYawPitchRoll(this._rotation.y, this._rotation.x, this._rotation.z)), this._rotation.XQQ(0, 0, 0))
            }
          } else sQ = QQ._TmpRotation, JQ.h.RotationYawPitchRollToRef(this._rotation.y, this._rotation.x, this._rotation.z, sQ);
          if (this._usePivotMatrix) {
            const QQ = JQ.m.Matrix[1];
            JQ.e.ScalingToRef(zQ.x, zQ.y, zQ.z, QQ);
            const WQ = JQ.m.Matrix[0];
            sQ.toRotationMatrix(WQ), this._pivotMatrix.multiplyToRef(QQ, JQ.m.Matrix[4]), JQ.m.Matrix[4].multiplyToRef(WQ, this._localMatrix), this._postMultiplyPivotMatrix && this._localMatrix.multiplyToRef(this._pivotMatrixInverse, this._localMatrix), this._localMatrix.addTranslationFromFloats(FQ.x, FQ.y, FQ.z)
          } else JQ.e.ComposeToRef(zQ, sQ, FQ, this._localMatrix);
          if (TQ && TQ.getWorldMatrix) {
            if (WQ && TQ.computeWorldMatrix(WQ), this.billboardMode) {
              if (this._transformToBoneReferal) {
                const QQ = this.parent;
                QQ.getSkeleton().prepare(), QQ.getFinalMatrix().multiplyToRef(this._transformToBoneReferal.getWorldMatrix(), JQ.m.Matrix[7])
              } else JQ.m.Matrix[7].WH(TQ.getWorldMatrix());
              const WQ = JQ.m.vj[5],
                XQ = JQ.m.vj[6],
                wQ = JQ.m.Quaternion[0];
              JQ.m.Matrix[7].decompose(XQ, wQ, WQ), JQ.e.ScalingToRef(XQ.x, XQ.y, XQ.z, JQ.m.Matrix[7]), JQ.m.Matrix[7].setTranslation(WQ), QQ.BillboardUseParentOrientation && (this._position.applyRotationQuaternionToRef(wQ, WQ), this._localMatrix.setTranslation(WQ)), this._localMatrix.multiplyToRef(JQ.m.Matrix[7], this._worldMatrix)
            } else if (this._transformToBoneReferal) {
              const QQ = this.parent;
              QQ.getSkeleton().prepare(), this._localMatrix.multiplyToRef(QQ.getFinalMatrix(), JQ.m.Matrix[6]), JQ.m.Matrix[6].multiplyToRef(this._transformToBoneReferal.getWorldMatrix(), this._worldMatrix)
            } else this._localMatrix.multiplyToRef(TQ.getWorldMatrix(), this._worldMatrix);
            this._markSyncedWithParent()
          } else this._worldMatrix.WH(this._localMatrix);
          if (XQ && this.billboardMode)
            if (qQ.useBillboardPosition) {
              const WQ = JQ.m.vj[0];
              this._worldMatrix.getTranslationToRef(WQ);
              const wQ = XQ.globalPosition;
              this._worldMatrix.invertToRef(JQ.m.Matrix[1]);
              const qQ = JQ.m.vj[1];
              JQ.s.TransformCoordinatesToRef(wQ, JQ.m.Matrix[1], qQ), qQ.normalize();
              const TQ = -Math.atan2(qQ.z, qQ.x) + Math.PI / 2,
                zQ = Math.sqrt(qQ.x * qQ.x + qQ.z * qQ.z),
                sQ = -Math.atan2(qQ.y, zQ);
              if (JQ.h.RotationYawPitchRollToRef(TQ, sQ, 0, JQ.m.Quaternion[0]), (this.billboardMode & QQ.BILLBOARDMODE_ALL) !== QQ.BILLBOARDMODE_ALL) {
                const WQ = JQ.m.vj[1];
                JQ.m.Quaternion[0].toEulerAnglesToRef(WQ), (this.billboardMode & QQ.BILLBOARDMODE_X) !== QQ.BILLBOARDMODE_X && (WQ.x = 0), (this.billboardMode & QQ.BILLBOARDMODE_Y) !== QQ.BILLBOARDMODE_Y && (WQ.y = 0), (this.billboardMode & QQ.BILLBOARDMODE_Z) !== QQ.BILLBOARDMODE_Z && (WQ.z = 0), JQ.e.RotationYawPitchRollToRef(WQ.y, WQ.x, WQ.z, JQ.m.Matrix[0])
              } else JQ.e.FromQuaternionToRef(JQ.m.Quaternion[0], JQ.m.Matrix[0]);
              this._worldMatrix.setTranslationFromFloats(0, 0, 0), this._worldMatrix.multiplyToRef(JQ.m.Matrix[0], this._worldMatrix), this._worldMatrix.setTranslation(JQ.m.vj[0])
            } else {
              const WQ = JQ.m.vj[0];
              this._worldMatrix.getTranslationToRef(WQ), JQ.m.Matrix[1].WH(XQ.getViewMatrix());
              const wQ = this.sE().useRightHandedSystem;
              if (wQ && JQ.m.Matrix[1].multiplyToRef(QQ._TmpRHRestore, JQ.m.Matrix[1]), JQ.m.Matrix[1].setTranslationFromFloats(0, 0, 0), JQ.m.Matrix[1].invertToRef(JQ.m.Matrix[0]), (this.billboardMode & QQ.BILLBOARDMODE_ALL) !== QQ.BILLBOARDMODE_ALL) {
                JQ.m.Matrix[0].decompose(void 0, JQ.m.Quaternion[0], void 0);
                const WQ = JQ.m.vj[1];
                JQ.m.Quaternion[0].toEulerAnglesToRef(WQ), (this.billboardMode & QQ.BILLBOARDMODE_X) !== QQ.BILLBOARDMODE_X && (WQ.x = 0), (this.billboardMode & QQ.BILLBOARDMODE_Y) !== QQ.BILLBOARDMODE_Y && (WQ.y = 0), (this.billboardMode & QQ.BILLBOARDMODE_Z) !== QQ.BILLBOARDMODE_Z && (WQ.z = 0), wQ && (WQ.y += Math.PI), JQ.e.RotationYawPitchRollToRef(WQ.y, WQ.x, WQ.z, JQ.m.Matrix[0])
              }
              this._worldMatrix.setTranslationFromFloats(0, 0, 0), this._worldMatrix.multiplyToRef(JQ.m.Matrix[0], this._worldMatrix), this._worldMatrix.setTranslation(JQ.m.vj[0])
            } return this.ignoreNonUniformScaling ? this._updateNonUniformScalingState(!1) : this._scaling.isNonUniformWithinEpsilon(1e-6) ? this._updateNonUniformScalingState(!0) : TQ && TQ._nonUniformScaling ? this._updateNonUniformScalingState(TQ._nonUniformScaling) : this._updateNonUniformScalingState(!1), this._afterComputeWorldMatrix(), this._absolutePosition.XQQ(this._worldMatrix.m[12], this._worldMatrix.m[13], this._worldMatrix.m[14]), this._isAbsoluteSynced = !1, this.onAfterWorldMatrixUpdateObservable.notifyObservers(this), this._poseMatrix || (this._poseMatrix = JQ.e.Invert(this._worldMatrix)), this._worldMatrixDeterminantIsDirty = !0, this._worldMatrix
        }
        resetLocalMatrix() {
          let QQ = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          if (this.computeWorldMatrix(), QQ) {
            const QQ = this.getChildren();
            for (let WQ = 0; WQ < QQ.length; ++WQ) {
              const XQ = QQ[WQ];
              if (XQ) {
                XQ.computeWorldMatrix();
                const QQ = JQ.m.Matrix[0];
                XQ._localMatrix.multiplyToRef(this._localMatrix, QQ);
                const WQ = JQ.m.Quaternion[0];
                QQ.decompose(XQ.oB, WQ, XQ.position), XQ.rotationQuaternion ? XQ.rotationQuaternion.WH(WQ) : WQ.toEulerAnglesToRef(XQ.rotation)
              }
            }
          }
          this.oB.XQQ(1, 1, 1), this.position.XQQ(0, 0, 0), this.rotation.XQQ(0, 0, 0), this.rotationQuaternion && (this.rotationQuaternion = JQ.h.Identity()), this._worldMatrix = JQ.e.Identity()
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
          return QQ || (QQ = this.sE().activeCamera), JQ.s.TransformCoordinates(this.getAbsolutePosition(), QQ.getViewMatrix())
        }
        getDistanceToCamera() {
          let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return QQ || (QQ = this.sE().activeCamera), this.getAbsolutePosition().subtract(QQ.globalPosition).length()
        }
        clone(WQ, XQ, wQ) {
          const qQ = PQ.b.Clone((() => new QQ(WQ, this.sE())), this);
          if (qQ.name = WQ, qQ.id = WQ, XQ && (qQ.parent = XQ), !wQ) {
            const QQ = this.getDescendants(!0);
            for (let XQ = 0; XQ < QQ.length; XQ++) {
              const wQ = QQ[XQ];
              wQ.clone && wQ.clone(WQ + "." + wQ.name, qQ)
            }
          }
          return qQ
        }
        serialize(QQ) {
          const WQ = PQ.b.Serialize(this, QQ);
          return WQ.type = this.getClassName(), WQ.uniqueId = this.uniqueId, this.parent && this.parent._serializeAsParent(WQ), WQ.localMatrix = this.getPivotMatrix().awQ(), WQ.isEnabled = this.isEnabled(), this._isWorldMatrixFrozen && (WQ.uE = !0), PQ.b.AppendSerializedAnimations(this, WQ), WQ.Qy = this.serializeAnimationRanges(), WQ
        }
        getChildTransformNodes(WQ, XQ) {
          const wQ = [];
          return this._getDescendants(wQ, WQ, (WQ => (!XQ || XQ(WQ)) && WQ instanceof QQ)), wQ
        }
        dispose(QQ) {
          let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this.sE().stopAnimation(this), this.sE().removeTransformNode(this), this._parentContainer) {
            const QQ = this._parentContainer.transformNodes.indexOf(this);
            QQ > -1 && this._parentContainer.transformNodes.splice(QQ, 1), this._parentContainer = null
          }
          if (this.onAfterWorldMatrixUpdateObservable.clear(), QQ) {
            const QQ = this.getChildTransformNodes(!0);
            for (const WQ of QQ) WQ.parent = null, WQ.computeWorldMatrix(!0)
          }
          super.dispose(QQ, WQ)
        }
        normalizeToUnitCube() {
          let QQ = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            XQ = arguments.length > 2 ? arguments[2] : void 0,
            wQ = null,
            qQ = null;
          WQ && (this.rotationQuaternion ? (qQ = this.rotationQuaternion.clone(), this.rotationQuaternion.XQQ(0, 0, 0, 1)) : this.rotation && (wQ = this.rotation.clone(), this.rotation.XQQ(0, 0, 0)));
          const TQ = this.getHierarchyBoundingVectors(QQ, XQ),
            zQ = TQ.max.subtract(TQ.min),
            sQ = Math.max(zQ.x, zQ.y, zQ.z);
          if (0 === sQ) return this;
          const FQ = 1 / sQ;
          return this.oB.scaleInPlace(FQ), WQ && (this.rotationQuaternion && qQ ? this.rotationQuaternion.WH(qQ) : this.rotation && wQ && this.rotation.WH(wQ)), this
        }
        _syncAbsoluteScalingAndRotation() {
          this._isAbsoluteSynced || (this._worldMatrix.decompose(this._absoluteScaling, this._absoluteRotationQuaternion), this._isAbsoluteSynced = !0)
        }
      }, (() => {
        const PQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(yQ[Symbol.metadata] ?? null) : void 0;
        WQ = [(0, FQ.F)("position")], XQ = [(0, FQ.F)("rotation")], wQ = [(0, FQ.x)("rotationQuaternion")], qQ = [(0, FQ.F)("oB")], TQ = [(0, FQ.I)("billboardMode")], zQ = [(0, FQ.I)()], IQ = [(0, FQ.I)("infiniteDistance")], jQ = [(0, FQ.I)()], BQ = [(0, FQ.I)()], (0, sQ.k)(null, null, WQ, {
          kind: "field",
          name: "_position",
          static: !1,
          private: !1,
          access: {
            has: QQ => "_position" in QQ,
            get: QQ => QQ._position,
            set: (QQ, WQ) => {
              QQ._position = WQ
            }
          },
          metadata: PQ
        }, VQ, DQ), (0, sQ.k)(null, null, XQ, {
          kind: "field",
          name: "_rotation",
          static: !1,
          private: !1,
          access: {
            has: QQ => "_rotation" in QQ,
            get: QQ => QQ._rotation,
            set: (QQ, WQ) => {
              QQ._rotation = WQ
            }
          },
          metadata: PQ
        }, pQ, GQ), (0, sQ.k)(null, null, wQ, {
          kind: "field",
          name: "_rotationQuaternion",
          static: !1,
          private: !1,
          access: {
            has: QQ => "_rotationQuaternion" in QQ,
            get: QQ => QQ._rotationQuaternion,
            set: (QQ, WQ) => {
              QQ._rotationQuaternion = WQ
            }
          },
          metadata: PQ
        }, UQ, bQ), (0, sQ.k)(null, null, qQ, {
          kind: "field",
          name: "_scaling",
          static: !1,
          private: !1,
          access: {
            has: QQ => "_scaling" in QQ,
            get: QQ => QQ._scaling,
            set: (QQ, WQ) => {
              QQ._scaling = WQ
            }
          },
          metadata: PQ
        }, vQ, dQ), (0, sQ.k)(null, null, TQ, {
          kind: "field",
          name: "_billboardMode",
          static: !1,
          private: !1,
          access: {
            has: QQ => "_billboardMode" in QQ,
            get: QQ => QQ._billboardMode,
            set: (QQ, WQ) => {
              QQ._billboardMode = WQ
            }
          },
          metadata: PQ
        }, HQ, aQ), (0, sQ.k)(null, null, zQ, {
          kind: "field",
          name: "scalingDeterminant",
          static: !1,
          private: !1,
          access: {
            has: QQ => "scalingDeterminant" in QQ,
            get: QQ => QQ.scalingDeterminant,
            set: (QQ, WQ) => {
              QQ.scalingDeterminant = WQ
            }
          },
          metadata: PQ
        }, lQ, hQ), (0, sQ.k)(null, null, IQ, {
          kind: "field",
          name: "_infiniteDistance",
          static: !1,
          private: !1,
          access: {
            has: QQ => "_infiniteDistance" in QQ,
            get: QQ => QQ._infiniteDistance,
            set: (QQ, WQ) => {
              QQ._infiniteDistance = WQ
            }
          },
          metadata: PQ
        }, iQ, cQ), (0, sQ.k)(null, null, jQ, {
          kind: "field",
          name: "ignoreNonUniformScaling",
          static: !1,
          private: !1,
          access: {
            has: QQ => "ignoreNonUniformScaling" in QQ,
            get: QQ => QQ.ignoreNonUniformScaling,
            set: (QQ, WQ) => {
              QQ.ignoreNonUniformScaling = WQ
            }
          },
          metadata: PQ
        }, AQ, RQ), (0, sQ.k)(null, null, BQ, {
          kind: "field",
          name: "reIntegrateRotationIntoRotationQuaternion",
          static: !1,
          private: !1,
          access: {
            has: QQ => "reIntegrateRotationIntoRotationQuaternion" in QQ,
            get: QQ => QQ.reIntegrateRotationIntoRotationQuaternion,
            set: (QQ, WQ) => {
              QQ.reIntegrateRotationIntoRotationQuaternion = WQ
            }
          },
          metadata: PQ
        }, EQ, CQ), PQ && Object.defineProperty(QQ, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: PQ
        })
      })(), QQ.BILLBOARDMODE_NONE = 0, QQ.BILLBOARDMODE_X = 1, QQ.BILLBOARDMODE_Y = 2, QQ.BILLBOARDMODE_Z = 4, QQ.BILLBOARDMODE_ALL = 7, QQ.BILLBOARDMODE_USE_POSITION = 128, QQ.BillboardUseParentOrientation = !1, QQ._TmpRotation = JQ.h.Zero(), QQ._TmpScaling = JQ.s.Zero(), QQ._TmpTranslation = JQ.s.Zero(), QQ._TmpRHRestore = JQ.e.Scaling(1, 1, -1), QQ._LookAtVectorCache = new JQ.s(0, 0, 0), QQ._RotationAxisCache = new JQ.h, QQ
    })();

    function yQ(QQ, WQ, XQ) {
      const wQ = PQ.b.Parse((() => new BQ(QQ.name, WQ)), QQ, WQ, XQ);
      if (QQ.localMatrix ? wQ.setPreTransformMatrix(JQ.e.FromArray(QQ.localMatrix)) : QQ.pivotMatrix && wQ.setPivotMatrix(JQ.e.FromArray(QQ.pivotMatrix)), wQ.UH(QQ.isEnabled), wQ._waitingParsedUniqueId = QQ.uniqueId, void 0 !== QQ.parentId && (wQ._waitingParentId = QQ.parentId), void 0 !== QQ.parentInstanceIndex && (wQ._waitingParentInstanceIndex = QQ.parentInstanceIndex), QQ.uE && (wQ._waitingFreezeWorldMatrix = QQ.uE), QQ.animations) {
        for (let WQ = 0; WQ < QQ.animations.length; WQ++) {
          const XQ = QQ.animations[WQ],
            qQ = (0, IQ.b)("BABYLON.Animation");
          qQ && wQ.animations.push(qQ.Parse(XQ))
        }
        rQ.e.ParseAnimationRanges(wQ, QQ, WQ)
      }
      return QQ.autoAnimate && WQ.beginAnimation(wQ, QQ.autoAnimateFrom, QQ.autoAnimateTo, QQ.autoAnimateLoop, QQ.autoAnimateSpeed || 1), wQ
    }
    let VQ = !1;

    function DQ() {
      VQ || (VQ = !0, BQ.Parse = yQ)
    }(wQ = BQ.prototype).vx ?? (wQ.vx = (0, jQ.h)("TransformNode", "vx")), (qQ = BQ.prototype).applyImpulse ?? (qQ.applyImpulse = (0, jQ.h)("TransformNode", "applyImpulse")), (TQ = BQ.prototype).applyAngularImpulse ?? (TQ.applyAngularImpulse = (0, jQ.h)("TransformNode", "applyAngularImpulse")), (zQ = BQ.prototype).applyTorque ?? (zQ.applyTorque = (0, jQ.h)("TransformNode", "applyTorque")), Object.getOwnPropertyDescriptor(BQ.prototype, "physicsBody") || Object.defineProperty(BQ.prototype, "physicsBody", (0, jQ.g)("TransformNode", "physicsBody"))
  },
  40656: (QQ, WQ, XQ) => {
    function wQ(QQ, WQ, XQ) {
      try {
        const wQ = QQ.next();
        wQ.done ? WQ(wQ) : wQ.value ? wQ.value.then((() => {
          wQ.value = void 0, WQ(wQ)
        }), XQ) : WQ(wQ)
      } catch (wQ) {
        XQ(wQ)
      }
    }

    function qQ() {
      let QQ, WQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 25;
      return (XQ, qQ, TQ) => {
        const zQ = performance.now();
        void 0 === QQ || zQ - QQ > WQ ? (QQ = zQ, setTimeout((() => {
          wQ(XQ, qQ, TQ)
        }), 0)) : wQ(XQ, qQ, TQ)
      }
    }

    function TQ(QQ, WQ, XQ, wQ, qQ) {
      const TQ = () => {
        let zQ;
        const sQ = QQ => {
          QQ.done ? XQ(QQ.value) : void 0 === zQ ? zQ = !0 : TQ()
        };
        do {
          zQ = void 0, qQ && qQ.aborted ? wQ(new Error("Aborted")) : WQ(QQ, sQ, wQ), void 0 === zQ && (zQ = !1)
        } while (zQ)
      };
      TQ()
    }

    function zQ(QQ, WQ) {
      let XQ;
      return TQ(QQ, wQ, (QQ => XQ = QQ), (QQ => {
        throw QQ
      }), WQ), XQ
    }
    async function sQ(QQ, WQ, XQ) {
      return await new Promise(((wQ, qQ) => {
        TQ(QQ, WQ, wQ, qQ, XQ)
      }))
    }

    function FQ(QQ, WQ) {
      return function() {
        return zQ(QQ(...arguments), WQ)
      }
    }
    XQ.d(WQ, {
      e: () => qQ,
      f: () => FQ,
      h: () => sQ,
      i: () => zQ
    })
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);
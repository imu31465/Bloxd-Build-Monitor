export const id = 240;
export const ids = [240];
export const modules = {
  38986: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => MT,
      e: () => gT
    });
    var iT = IT(38764),
      zT = IT(38773),
      kT = IT(38897),
      WT = IT(36149),
      XT = IT(36118),
      BT = IT(38994),
      FT = IT(37660),
      ST = IT(36166),
      DT = IT(38643),
      LT = IT(37105),
      xT = IT(36710),
      cT = IT(38728),
      KT = IT(38799);
    let MT = (() => {
      var TT;
      let oT, IT, ST, MT, rT, AT, gT, hT, wT, mT, eT, RT, uT, vT, ET, fT, CT, jT, JT = BT.c,
        UT = [],
        aT = [],
        YT = [],
        QT = [],
        OT = [],
        HT = [],
        nT = [],
        qT = [],
        ZT = [],
        lT = [],
        sT = [],
        tT = [],
        GT = [],
        pT = [],
        bT = [],
        yT = [],
        NT = [],
        PT = [],
        dT = [],
        VT = [],
        To = [],
        oo = [],
        Io = [],
        io = [],
        zo = [];
      return TT = class extends JT {
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
          let oT, IT;
          if (this.mode === TT.PERSPECTIVE_CAMERA) this.fovMode === TT.FOVMODE_VERTICAL_FIXED ? (IT = 2 * this.minZ * Math.tan(this.fov / 2), oT = this.Zc().getAspectRatio(this) * IT) : (oT = 2 * this.minZ * Math.tan(this.fov / 2), IT = oT / this.Zc().getAspectRatio(this));
          else {
            const TT = this.Zc().getRenderWidth() / 2,
              iT = this.Zc().getRenderHeight() / 2;
            oT = (this.orthoRight ?? TT) - (this.orthoLeft ?? -TT), IT = (this.orthoTop ?? iT) - (this.orthoBottom ?? -iT)
          }
          return oT * IT
        }
        set orthoLeft(TT) {
          this._orthoLeft = TT;
          for (const oT of this._rigCameras) oT.orthoLeft = TT
        }
        get orthoLeft() {
          return this._orthoLeft
        }
        set orthoRight(TT) {
          this._orthoRight = TT;
          for (const oT of this._rigCameras) oT.orthoRight = TT
        }
        get orthoRight() {
          return this._orthoRight
        }
        set orthoBottom(TT) {
          this._orthoBottom = TT;
          for (const oT of this._rigCameras) oT.orthoBottom = TT
        }
        get orthoBottom() {
          return this._orthoBottom
        }
        set orthoTop(TT) {
          this._orthoTop = TT;
          for (const oT of this._rigCameras) oT.orthoTop = TT
        }
        get orthoTop() {
          return this._orthoTop
        }
        setFocalLength(TT) {
          let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 36;
          this.fov = 2 * Math.atan(oT / (2 * TT))
        }
        get inertia() {
          return this._baseInertia
        }
        set inertia(TT) {
          this._baseInertia = TT
        }
        set mode(TT) {
          this._mode = TT;
          for (const oT of this._rigCameras) oT.mode = TT
        }
        get mode() {
          return this._mode
        }
        get hasMoved() {
          return this._hasMoved
        }
        constructor(oT, IT, zT) {
          let BT = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
          (0, cT.c)(), super(oT, zT, !1), this.inputs = (0, iT.j)(this, UT), this._position = (0, iT.j)(this, aT, XT.m.Zero()), this._upVector = ((0, iT.j)(this, YT), (0, iT.j)(this, QT, XT.m.Up())), this.oblique = ((0, iT.j)(this, OT), null), this._orthoLeft = null, this._orthoRight = null, this._orthoBottom = null, this._orthoTop = null, this.fov = (0, iT.j)(this, HT, .8), this.projectionPlaneTilt = ((0, iT.j)(this, nT), (0, iT.j)(this, qT, 0)), this.minZ = ((0, iT.j)(this, ZT), (0, iT.j)(this, lT, 1)), this.maxZ = ((0, iT.j)(this, sT), (0, iT.j)(this, tT, 1e4)), this._baseInertia = ((0, iT.j)(this, GT), .9), this._mode = TT.PERSPECTIVE_CAMERA, this.isIntermediate = !1, this.viewport = new LT.b(0, 0, 1, 1), this.layerMask = (0, iT.j)(this, pT, 268435455), this.fovMode = ((0, iT.j)(this, bT), (0, iT.j)(this, yT, TT.FOVMODE_VERTICAL_FIXED)), this.cameraRigMode = ((0, iT.j)(this, NT), (0, iT.j)(this, PT, TT.RIG_MODE_NONE)), this.interaxialDistance = ((0, iT.j)(this, dT), (0, iT.j)(this, VT, void 0)), this.isStereoscopicSideBySide = ((0, iT.j)(this, To), (0, iT.j)(this, oo, void 0)), this.ignoreCameraMaxZ = ((0, iT.j)(this, Io), (0, iT.j)(this, io, !1)), this.customRenderTargets = ((0, iT.j)(this, zo), []), this.outputRenderTarget = null, this.onViewMatrixChangedObservable = new WT.d, this.onProjectionMatrixChangedObservable = new WT.d, this.onAfterCheckInputsObservable = new WT.d, this.onRestoreStateObservable = new WT.d, this.isRigCamera = !1, this._hasMoved = !1, this._rigCameras = new Array, this._skipRendering = !1, this._projectionMatrix = new XT.b, this._postProcesses = new Array, this._activeMeshes = new kT.f(256), this._globalPosition = XT.m.Zero(), this._computedViewMatrix = XT.b.Identity(), this._doNotComputeProjectionMatrix = !1, this._transformMatrix = XT.b.Zero(), this._refreshFrustumPlanes = !0, this._absoluteRotation = XT.c.Identity(), this._isCamera = !0, this._isLeftCamera = !1, this._isRightCamera = !1, this.layerMask = this.pC().defaultCameraLayerMask, this.pC().addCamera(this), BT && !this.pC().activeCamera && (this.pC().activeCamera = this), this.position = IT, this.renderPassId = this.pC().Zc().createRenderPassId(`Camera ${oT}`)
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
          return "jM"
        }
        toString(TT) {
          let oT = "Name: " + this.name;
          if (oT += ", type: " + this.getClassName(), this.animations)
            for (let IT = 0; IT < this.animations.length; IT++) oT += ", animation[0]: " + this.animations[IT].toString(TT);
          return oT
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
            for (const oT of this._postProcesses)
              if (oT && !oT.isReady()) return !1;
          return super.isReady(TT)
        }
        _initCache() {
          super._initCache(), this._cache.position = new XT.m(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.upVector = new XT.m(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.mode = void 0, this._cache.minZ = void 0, this._cache.maxZ = void 0, this._cache.fov = void 0, this._cache.fovMode = void 0, this._cache.aspectRatio = void 0, this._cache.orthoLeft = void 0, this._cache.orthoRight = void 0, this._cache.orthoBottom = void 0, this._cache.orthoTop = void 0, this._cache.obliqueAngle = void 0, this._cache.obliqueLength = void 0, this._cache.obliqueOffset = void 0, this._cache.renderWidth = void 0, this._cache.renderHeight = void 0
        }
        _updateCache(TT) {
          TT || super._updateCache(), this._cache.position.SIT(this.position), this._cache.upVector.SIT(this.upVector)
        }
        _isSynchronized() {
          return this._isSynchronizedViewMatrix() && this._isSynchronizedProjectionMatrix()
        }
        _isSynchronizedViewMatrix() {
          return !!super._isSynchronized() && (this._cache.position.equals(this.position) && this._cache.upVector.equals(this.upVector) && this.isSynchronizedWithParent())
        }
        _isSynchronizedProjectionMatrix() {
          const oT = this.ignoreCameraMaxZ ? 0 : this.maxZ;
          let IT = this._cache.mode === this.mode && this._cache.minZ === this.minZ && this._cache.maxZ === oT;
          if (!IT) return !1;
          const iT = this.Zc();
          return this.mode === TT.PERSPECTIVE_CAMERA ? IT = this._cache.fov === this.fov && this._cache.fovMode === this.fovMode && this._cache.aspectRatio === iT.getAspectRatio(this) && this._cache.projectionPlaneTilt === this.projectionPlaneTilt : (IT = this._cache.orthoLeft === this.orthoLeft && this._cache.orthoRight === this.orthoRight && this._cache.orthoBottom === this.orthoBottom && this._cache.orthoTop === this.orthoTop && this._cache.renderWidth === iT.getRenderWidth() && this._cache.renderHeight === iT.getRenderHeight(), this.oblique && (IT = IT && this._cache.obliqueAngle === this.oblique.angle && this._cache.obliqueLength === this.oblique.length && this._cache.obliqueOffset === this.oblique.offset)), IT
        }
        attachControl(TT, oT) {}
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
          for (let oT = 0, IT = this._rigCameras.length; oT < IT; oT++) {
            const TT = this._rigCameras[oT],
              IT = TT._rigPostProcess;
            if (IT) {
              "pass" === IT.getEffectName() && (TT.isIntermediate = 0 === this._postProcesses.length), TT._postProcesses = this._postProcesses.slice(0).concat(IT), IT.markTextureDirty()
            } else TT._postProcesses = this._postProcesses.slice(0)
          }
        }
        attachPostProcess(TT) {
          let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          return !TT.isReusable() && this._postProcesses.indexOf(TT) > -1 ? (FT.d.Error("You're trying to reuse a post process not defined as reusable."), 0) : (null == oT || oT < 0 ? this._postProcesses.push(TT) : null === this._postProcesses[oT] ? this._postProcesses[oT] = TT : this._postProcesses.splice(oT, 0, TT), this._cascadePostProcessesToRigCams(), this._scene.prePassRenderer && this._scene.prePassRenderer.roT(), this._postProcesses.indexOf(TT))
        }
        detachPostProcess(TT) {
          const oT = this._postProcesses.indexOf(TT); - 1 !== oT && (this._postProcesses[oT] = null), this._scene.prePassRenderer && this._scene.prePassRenderer.roT(), this._cascadePostProcessesToRigCams()
        }
        getWorldMatrix() {
          return this._isSynchronizedViewMatrix() || this.getViewMatrix(), this._worldMatrix
        }
        _getViewMatrix() {
          return XT.b.Identity()
        }
        getViewMatrix(TT) {
          return !TT && this._isSynchronizedViewMatrix() || (this._hasMoved = !0, this.updateCache(), this._computedViewMatrix = this._getViewMatrix(), this._currentRenderId = this.pC().getRenderId(), this._childUpdateId++, this._refreshFrustumPlanes = !0, this._cameraRigParams && this._cameraRigParams.vrPreViewMatrix && this._computedViewMatrix.multiplyToRef(this._cameraRigParams.vrPreViewMatrix, this._computedViewMatrix), this.parent && this.parent.onViewMatrixChangedObservable && this.parent.onViewMatrixChangedObservable.notifyObservers(this.parent), this.onViewMatrixChangedObservable.notifyObservers(this), this._computedViewMatrix.invertToRef(this._worldMatrix), this._worldMatrix.getTranslationToRef(this._globalPosition)), this._computedViewMatrix
        }
        freezeProjectionMatrix(TT) {
          this._doNotComputeProjectionMatrix = !0, void 0 !== TT && (this._projectionMatrix = TT)
        }
        unfreezeProjectionMatrix() {
          this._doNotComputeProjectionMatrix = !1
        }
        getProjectionMatrix(oT) {
          if (this._doNotComputeProjectionMatrix || !oT && this._isSynchronizedProjectionMatrix()) return this._projectionMatrix;
          const IT = this.ignoreCameraMaxZ ? 0 : this.maxZ;
          this._cache.mode = this.mode, this._cache.minZ = this.minZ, this._cache.maxZ = IT, this._refreshFrustumPlanes = !0;
          const iT = this.Zc(),
            zT = this.pC(),
            kT = iT.lIT;
          if (this.mode === TT.PERSPECTIVE_CAMERA) {
            let oT;
            this._cache.fov = this.fov, this._cache.fovMode = this.fovMode, this._cache.aspectRatio = iT.getAspectRatio(this), this._cache.projectionPlaneTilt = this.projectionPlaneTilt, this.minZ <= 0 && (this.minZ = .1), oT = zT.useRightHandedSystem ? XT.b.PerspectiveFovRHToRef : XT.b.PerspectiveFovLHToRef, oT(this.fov, iT.getAspectRatio(this), kT ? IT : this.minZ, kT ? this.minZ : IT, this._projectionMatrix, this.fovMode === TT.FOVMODE_VERTICAL_FIXED, iT.isNDCHalfZRange, this.projectionPlaneTilt, kT)
          } else {
            const TT = iT.getRenderWidth() / 2,
              oT = iT.getRenderHeight() / 2;
            zT.useRightHandedSystem ? this.oblique ? XT.b.ObliqueOffCenterRHToRef(this.orthoLeft ?? -TT, this.orthoRight ?? TT, this.orthoBottom ?? -oT, this.orthoTop ?? oT, kT ? IT : this.minZ, kT ? this.minZ : IT, this.oblique.length, this.oblique.angle, this._computeObliqueDistance(this.oblique.offset), this._projectionMatrix, iT.isNDCHalfZRange) : XT.b.OrthoOffCenterRHToRef(this.orthoLeft ?? -TT, this.orthoRight ?? TT, this.orthoBottom ?? -oT, this.orthoTop ?? oT, kT ? IT : this.minZ, kT ? this.minZ : IT, this._projectionMatrix, iT.isNDCHalfZRange) : this.oblique ? XT.b.ObliqueOffCenterLHToRef(this.orthoLeft ?? -TT, this.orthoRight ?? TT, this.orthoBottom ?? -oT, this.orthoTop ?? oT, kT ? IT : this.minZ, kT ? this.minZ : IT, this.oblique.length, this.oblique.angle, this._computeObliqueDistance(this.oblique.offset), this._projectionMatrix, iT.isNDCHalfZRange) : XT.b.OrthoOffCenterLHToRef(this.orthoLeft ?? -TT, this.orthoRight ?? TT, this.orthoBottom ?? -oT, this.orthoTop ?? oT, kT ? IT : this.minZ, kT ? this.minZ : IT, this._projectionMatrix, iT.isNDCHalfZRange), this._cache.orthoLeft = this.orthoLeft, this._cache.orthoRight = this.orthoRight, this._cache.orthoBottom = this.orthoBottom, this._cache.orthoTop = this.orthoTop, this._cache.obliqueAngle = this.oblique?.angle, this._cache.obliqueLength = this.oblique?.length, this._cache.obliqueOffset = this.oblique?.offset, this._cache.renderWidth = iT.getRenderWidth(), this._cache.renderHeight = iT.getRenderHeight()
          }
          return this.onProjectionMatrixChangedObservable.notifyObservers(this), this._projectionMatrix
        }
        getTransformationMatrix() {
          return this._computedViewMatrix.multiplyToRef(this._projectionMatrix, this._transformMatrix), this._transformMatrix
        }
        _computeObliqueDistance(TT) {
          return (this.radius || (this.target ? XT.m.Distance(this.position, this.target) : this.position.length())) + TT
        }
        _updateFrustumPlanes() {
          this._refreshFrustumPlanes && (this.getTransformationMatrix(), this._frustumPlanes ? xT.b.GetPlanesToRef(this._transformMatrix, this._frustumPlanes) : this._frustumPlanes = xT.b.GetPlanes(this._transformMatrix), this._refreshFrustumPlanes = !1)
        }
        isInFrustum(TT) {
          let oT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._updateFrustumPlanes(), oT && this.rigCameras.length > 0) {
            let oT = !1;
            for (const IT of this.rigCameras) IT._updateFrustumPlanes(), oT = oT || TT.isInFrustum(IT._frustumPlanes);
            return oT
          }
          return TT.isInFrustum(this._frustumPlanes)
        }
        isCompletelyInFrustum(TT) {
          return this._updateFrustumPlanes(), TT.isCompletelyInFrustum(this._frustumPlanes)
        }
        getForwardRay() {
          throw (0, DT.k)("Ray")
        }
        getForwardRayToRef(TT) {
          throw (0, DT.k)("Ray")
        }
        dispose(oT) {
          let IT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          for (this.onViewMatrixChangedObservable.clear(), this.onProjectionMatrixChangedObservable.clear(), this.onAfterCheckInputsObservable.clear(), this.onRestoreStateObservable.clear(), this.inputs && this.inputs.clear(), this.pC().stopAnimation(this), this.pC().removeCamera(this); this._rigCameras.length > 0;) {
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
              const oT = this._postProcesses[TT];
              oT && oT.dispose(this)
            }
          }
          let iT = this.customRenderTargets.length;
          for (; --iT >= 0;) this.customRenderTargets[iT].dispose();
          this.customRenderTargets.length = 0, this._activeMeshes.dispose(), this.pC().Zc().releaseRenderPassId(this.renderPassId), super.dispose(oT, IT)
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
        setCameraRigMode(oT, IT) {
          if (this.cameraRigMode !== oT) {
            for (; this._rigCameras.length > 0;) {
              const TT = this._rigCameras.pop();
              TT && TT.dispose()
            }
            if (this.cameraRigMode = oT, this._cameraRigParams = {}, this._cameraRigParams.interaxialDistance = IT.interaxialDistance || .0637, this._cameraRigParams.stereoHalfAngle = this._cameraRigParams.interaxialDistance / .0637 * (Math.PI / 180), this.cameraRigMode !== TT.RIG_MODE_NONE) {
              const TT = this.createRigCamera(this.name + "_L", 0);
              TT && (TT._isLeftCamera = !0);
              const oT = this.createRigCamera(this.name + "_R", 1);
              oT && (oT._isRightCamera = !0), TT && oT && (this._rigCameras.push(TT), this._rigCameras.push(oT))
            }
            this._setRigMode(IT), this._cascadePostProcessesToRigCams(), this.update()
          }
        }
        _setRigMode(TT) {}
        _getVRProjectionMatrix() {
          return XT.b.PerspectiveFovLHToRef(this._cameraRigParams.vrMetrics.aspectRatioFov, this._cameraRigParams.vrMetrics.aspectRatio, this.minZ, this.ignoreCameraMaxZ ? 0 : this.maxZ, this._cameraRigParams.vrWorkMatrix, !0, this.Zc().isNDCHalfZRange), this._cameraRigParams.vrWorkMatrix.multiplyToRef(this._cameraRigParams.vrHMatrix, this._projectionMatrix), this._projectionMatrix
        }
        setCameraRigParameter(TT, oT) {
          this._cameraRigParams || (this._cameraRigParams = {}), this._cameraRigParams[TT] = oT, "interaxialDistance" === TT && (this._cameraRigParams.stereoHalfAngle = oT / .0637 * (Math.PI / 180))
        }
        createRigCamera(TT, oT) {
          return null
        }
        _updateRigCameras() {
          for (let TT = 0; TT < this._rigCameras.length; TT++) this._rigCameras[TT].minZ = this.minZ, this._rigCameras[TT].maxZ = this.ignoreCameraMaxZ ? 0 : this.maxZ, this._rigCameras[TT].fov = this.fov, this._rigCameras[TT].upVector.SIT(this.upVector);
          this.cameraRigMode === TT.RIG_MODE_STEREOSCOPIC_ANAGLYPH && (this._rigCameras[0].viewport = this._rigCameras[1].viewport = this.viewport)
        }
        _setupInputs() {}
        serialize() {
          const TT = KT.c.Serialize(this);
          return TT.uniqueId = this.uniqueId, TT.type = this.getClassName(), this.parent && this.parent._serializeAsParent(TT), this.inputs && this.inputs.serialize(TT), KT.c.AppendSerializedAnimations(this, TT), TT.ec = this.serializeAnimationRanges(), TT.isEnabled = this.isEnabled(), TT
        }
        clone(oT) {
          let IT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const iT = KT.c.Clone(TT.GetConstructorFromName(this.getClassName(), oT, this.pC(), this.interaxialDistance, this.isStereoscopicSideBySide), this);
          return iT.name = oT, iT.parent = IT, this.onClonedObservable.notifyObservers(iT), iT
        }
        kp(TT) {
          const oT = XT.m.Zero();
          return this.getDirectionToRef(TT, oT), oT
        }
        get absoluteRotation() {
          return this.getWorldMatrix().decompose(void 0, this._absoluteRotation), this._absoluteRotation
        }
        getDirectionToRef(TT, oT) {
          XT.m.TransformNormalToRef(TT, this.getWorldMatrix(), oT)
        }
        static GetConstructorFromName(oT, IT, iT) {
          let zT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
            kT = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
          const WT = BT.c.Construct(oT, IT, iT, {
            interaxial_distance: zT,
            isStereoscopicSideBySide: kT
          });
          return WT || (() => TT._CreateDefaultParsedCamera(IT, iT))
        }
        computeWorldMatrix() {
          return this.getWorldMatrix()
        }
        _calculateHandednessMultiplier() {
          let TT = this.pC().useRightHandedSystem ? -1 : 1;
          return this.parent && this.parent._getWorldMatrixDeterminant() < 0 && (TT *= -1), TT
        }
      }, (() => {
        const kT = "function" === typeof Symbol && Symbol.metadata ? Object.create(JT[Symbol.metadata] ?? null) : void 0;
        oT = [(0, zT.M)("position")], IT = [(0, zT.M)("upVector")], ST = [(0, zT.P)()], MT = [(0, zT.P)()], rT = [(0, zT.P)()], AT = [(0, zT.P)()], gT = [(0, zT.P)()], hT = [(0, zT.P)()], wT = [(0, zT.P)()], mT = [(0, zT.P)()], eT = [(0, zT.P)()], RT = [(0, zT.P)()], uT = [(0, zT.P)()], vT = [(0, zT.P)()], ET = [(0, zT.P)()], fT = [(0, zT.P)()], CT = [(0, zT.P)()], jT = [(0, zT.P)()], (0, iT.h)(TT, null, ST, {
          kind: "getter",
          name: "orthoLeft",
          static: !1,
          private: !1,
          access: {
            has: TT => "orthoLeft" in TT,
            get: TT => TT.orthoLeft
          },
          metadata: kT
        }, null, UT), (0, iT.h)(TT, null, MT, {
          kind: "getter",
          name: "orthoRight",
          static: !1,
          private: !1,
          access: {
            has: TT => "orthoRight" in TT,
            get: TT => TT.orthoRight
          },
          metadata: kT
        }, null, UT), (0, iT.h)(TT, null, rT, {
          kind: "getter",
          name: "orthoBottom",
          static: !1,
          private: !1,
          access: {
            has: TT => "orthoBottom" in TT,
            get: TT => TT.orthoBottom
          },
          metadata: kT
        }, null, UT), (0, iT.h)(TT, null, AT, {
          kind: "getter",
          name: "orthoTop",
          static: !1,
          private: !1,
          access: {
            has: TT => "orthoTop" in TT,
            get: TT => TT.orthoTop
          },
          metadata: kT
        }, null, UT), (0, iT.h)(TT, null, eT, {
          kind: "getter",
          name: "inertia",
          static: !1,
          private: !1,
          access: {
            has: TT => "inertia" in TT,
            get: TT => TT.inertia
          },
          metadata: kT
        }, null, UT), (0, iT.h)(TT, null, RT, {
          kind: "getter",
          name: "mode",
          static: !1,
          private: !1,
          access: {
            has: TT => "mode" in TT,
            get: TT => TT.mode
          },
          metadata: kT
        }, null, UT), (0, iT.h)(null, null, oT, {
          kind: "field",
          name: "_position",
          static: !1,
          private: !1,
          access: {
            has: TT => "_position" in TT,
            get: TT => TT._position,
            set: (TT, oT) => {
              TT._position = oT
            }
          },
          metadata: kT
        }, aT, YT), (0, iT.h)(null, null, IT, {
          kind: "field",
          name: "_upVector",
          static: !1,
          private: !1,
          access: {
            has: TT => "_upVector" in TT,
            get: TT => TT._upVector,
            set: (TT, oT) => {
              TT._upVector = oT
            }
          },
          metadata: kT
        }, QT, OT), (0, iT.h)(null, null, gT, {
          kind: "field",
          name: "fov",
          static: !1,
          private: !1,
          access: {
            has: TT => "fov" in TT,
            get: TT => TT.fov,
            set: (TT, oT) => {
              TT.fov = oT
            }
          },
          metadata: kT
        }, HT, nT), (0, iT.h)(null, null, hT, {
          kind: "field",
          name: "projectionPlaneTilt",
          static: !1,
          private: !1,
          access: {
            has: TT => "projectionPlaneTilt" in TT,
            get: TT => TT.projectionPlaneTilt,
            set: (TT, oT) => {
              TT.projectionPlaneTilt = oT
            }
          },
          metadata: kT
        }, qT, ZT), (0, iT.h)(null, null, wT, {
          kind: "field",
          name: "minZ",
          static: !1,
          private: !1,
          access: {
            has: TT => "minZ" in TT,
            get: TT => TT.minZ,
            set: (TT, oT) => {
              TT.minZ = oT
            }
          },
          metadata: kT
        }, lT, sT), (0, iT.h)(null, null, mT, {
          kind: "field",
          name: "maxZ",
          static: !1,
          private: !1,
          access: {
            has: TT => "maxZ" in TT,
            get: TT => TT.maxZ,
            set: (TT, oT) => {
              TT.maxZ = oT
            }
          },
          metadata: kT
        }, tT, GT), (0, iT.h)(null, null, uT, {
          kind: "field",
          name: "layerMask",
          static: !1,
          private: !1,
          access: {
            has: TT => "layerMask" in TT,
            get: TT => TT.layerMask,
            set: (TT, oT) => {
              TT.layerMask = oT
            }
          },
          metadata: kT
        }, pT, bT), (0, iT.h)(null, null, vT, {
          kind: "field",
          name: "fovMode",
          static: !1,
          private: !1,
          access: {
            has: TT => "fovMode" in TT,
            get: TT => TT.fovMode,
            set: (TT, oT) => {
              TT.fovMode = oT
            }
          },
          metadata: kT
        }, yT, NT), (0, iT.h)(null, null, ET, {
          kind: "field",
          name: "cameraRigMode",
          static: !1,
          private: !1,
          access: {
            has: TT => "cameraRigMode" in TT,
            get: TT => TT.cameraRigMode,
            set: (TT, oT) => {
              TT.cameraRigMode = oT
            }
          },
          metadata: kT
        }, PT, dT), (0, iT.h)(null, null, fT, {
          kind: "field",
          name: "interaxialDistance",
          static: !1,
          private: !1,
          access: {
            has: TT => "interaxialDistance" in TT,
            get: TT => TT.interaxialDistance,
            set: (TT, oT) => {
              TT.interaxialDistance = oT
            }
          },
          metadata: kT
        }, VT, To), (0, iT.h)(null, null, CT, {
          kind: "field",
          name: "isStereoscopicSideBySide",
          static: !1,
          private: !1,
          access: {
            has: TT => "isStereoscopicSideBySide" in TT,
            get: TT => TT.isStereoscopicSideBySide,
            set: (TT, oT) => {
              TT.isStereoscopicSideBySide = oT
            }
          },
          metadata: kT
        }, oo, Io), (0, iT.h)(null, null, jT, {
          kind: "field",
          name: "ignoreCameraMaxZ",
          static: !1,
          private: !1,
          access: {
            has: TT => "ignoreCameraMaxZ" in TT,
            get: TT => TT.ignoreCameraMaxZ,
            set: (TT, oT) => {
              TT.ignoreCameraMaxZ = oT
            }
          },
          metadata: kT
        }, io, zo), kT && Object.defineProperty(TT, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: kT
        })
      })(), TT._CreateDefaultParsedCamera = (TT, oT) => {
        throw (0, DT.k)("UniversalCamera")
      }, TT.PERSPECTIVE_CAMERA = 0, TT.ORTHOGRAPHIC_CAMERA = 1, TT.FOVMODE_VERTICAL_FIXED = 0, TT.FOVMODE_HORIZONTAL_FIXED = 1, TT.RIG_MODE_NONE = 0, TT.RIG_MODE_STEREOSCOPIC_ANAGLYPH = 10, TT.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL = 11, TT.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED = 12, TT.RIG_MODE_STEREOSCOPIC_OVERUNDER = 13, TT.RIG_MODE_STEREOSCOPIC_INTERLACED = 14, TT.RIG_MODE_VR = 20, TT.RIG_MODE_CUSTOM = 22, TT.ForceAttachControlToAlwaysPreventDefault = !1, TT
    })();

    function rT(TT, oT) {
      const IT = TT.type,
        iT = MT.GetConstructorFromName(IT, TT.name, oT, TT.interaxial_distance, TT.isStereoscopicSideBySide),
        zT = KT.c.Parse(iT, TT, oT);
      if (void 0 !== TT.parentId && (zT._waitingParentId = TT.parentId), void 0 !== TT.parentInstanceIndex && (zT._waitingParentInstanceIndex = TT.parentInstanceIndex), zT.inputs && (zT.inputs.parse(TT), zT._setupInputs()), TT.upVector && (zT.upVector = XT.m.FromArray(TT.upVector)), zT.setPosition && (zT.position.S_(0, 0, 0), zT.setPosition(XT.m.FromArray(TT.position))), TT.target && zT.setTarget && zT.setTarget(XT.m.FromArray(TT.target)), TT.cameraRigMode) {
        const oT = TT.interaxial_distance ? {
          interaxialDistance: TT.interaxial_distance
        } : {};
        zT.setCameraRigMode(TT.cameraRigMode, oT)
      }
      if (TT.animations) {
        for (let oT = 0; oT < TT.animations.length; oT++) {
          const IT = TT.animations[oT],
            iT = (0, ST.d)("BABYLON.Animation");
          iT && zT.animations.push(iT.Parse(IT))
        }
        BT.c.ParseAnimationRanges(zT, TT, oT)
      }
      return TT.autoAnimate && oT.beginAnimation(zT, TT.autoAnimateFrom, TT.autoAnimateTo, TT.autoAnimateLoop, TT.autoAnimateSpeed || 1), void 0 !== TT.isEnabled && zT.Fv(TT.isEnabled), zT
    }
    let AT = !1;

    function gT() {
      AT || (AT = !0, MT.Parse = rT)
    }
  },
  38999: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => zT
    });
    var iT = IT(36118);
    class zT {
      constructor(TT, oT, IT) {
        this._cameraPosition = oT, this._behavior = IT, this.activeInput = !1, this.speed = 1, this.Rl = 1, this.panSpeed = 1, this.rotationXSpeed = 1, this.rotationYSpeed = 1, this._zoomSpeedMultiplier = 1, this._panSpeedMultiplier = 1, this.zoomInertia = .9, this.panInertia = .9, this.rotationInertia = .9, this.zoomAccumulatedPixels = 0, this.panAccumulatedPixels = new iT.m, this.rotationAccumulatedPixels = new iT.m, this.zoomDeltaCurrentFrame = 0, this.panDeltaCurrentFrame = iT.m.Zero(), this.rotationDeltaCurrentFrame = iT.m.Zero(), this._zoomVelocity = 0, this._panVelocity = new iT.m, this.referenceFrameRate = 60, this._rotationVelocity = new iT.m, this._prevFrameTimeMs = 0, this._scene = TT
      }
      computeCurrentFrameDeltas() {
        const TT = this._scene.Zc().getDeltaTime(),
          oT = this._getEffectiveDeltaMs(TT);
        if (0 === this._zoomVelocity && 0 === this.zoomAccumulatedPixels && 0 === this._panVelocity.x && 0 === this._panVelocity.y && 0 === this._panVelocity.z && 0 === this.panAccumulatedPixels.x && 0 === this.panAccumulatedPixels.y && 0 === this.panAccumulatedPixels.z && 0 === this._rotationVelocity.x && 0 === this._rotationVelocity.y && 0 === this._rotationVelocity.z && 0 === this.rotationAccumulatedPixels.x && 0 === this.rotationAccumulatedPixels.y && 0 === this.rotationAccumulatedPixels.z && !this.activeInput) return this.panDeltaCurrentFrame.W8(0), this.rotationDeltaCurrentFrame.W8(0), this.zoomDeltaCurrentFrame = 0, void(TT > 0 && (this._prevFrameTimeMs = TT));
        this.panDeltaCurrentFrame.W8(0), this.rotationDeltaCurrentFrame.W8(0), this.zoomDeltaCurrentFrame = 0;
        (this.panAccumulatedPixels.lengthSquared() > 0 || this.rotationAccumulatedPixels.lengthSquared() > 0 || 0 !== this.zoomAccumulatedPixels) && this._behavior?.isInterpolating && this._behavior.stopAllAnimations(), this._panVelocity.S_(this._calculateCurrentVelocity(this._panVelocity.x, this.panAccumulatedPixels.x, this.panInertia), this._calculateCurrentVelocity(this._panVelocity.y, this.panAccumulatedPixels.y, this.panInertia), this._calculateCurrentVelocity(this._panVelocity.z, this.panAccumulatedPixels.z, this.panInertia)), this._panVelocity.scaleToRef(this.speed * this.panSpeed * this._panSpeedMultiplier * oT, this.panDeltaCurrentFrame), this._rotationVelocity.S_(this._calculateCurrentVelocity(this._rotationVelocity.x, this.rotationAccumulatedPixels.x, this.rotationInertia), this._calculateCurrentVelocity(this._rotationVelocity.y, this.rotationAccumulatedPixels.y, this.rotationInertia), this._calculateCurrentVelocity(this._rotationVelocity.z, this.rotationAccumulatedPixels.z, this.rotationInertia)), this.rotationDeltaCurrentFrame.S_(this._rotationVelocity.x * this.speed * this.rotationXSpeed * oT, this._rotationVelocity.y * this.speed * this.rotationYSpeed * oT, 0), this._zoomVelocity = this._calculateCurrentVelocity(this._zoomVelocity, this.zoomAccumulatedPixels, this.zoomInertia), this.zoomDeltaCurrentFrame = this._zoomVelocity * (this.speed * this.Rl * this._zoomSpeedMultiplier) * oT, TT > 0 && (this._prevFrameTimeMs = TT), this.zoomAccumulatedPixels = 0, this.panAccumulatedPixels.W8(0), this.rotationAccumulatedPixels.W8(0), this.activeInput = !1
      }
      resetRotationVelocity() {
        this._rotationVelocity.W8(0), this.rotationAccumulatedPixels.W8(0)
      }
      resetPanVelocity() {
        this._panVelocity.W8(0), this.panAccumulatedPixels.W8(0)
      }
      resetZoomVelocity() {
        this._zoomVelocity = 0, this.zoomAccumulatedPixels = 0
      }
      get isInterpolating() {
        return !!this._behavior?.isInterpolating
      }
      getFrameIndependentDecay(TT) {
        const oT = this._scene.Zc().getDeltaTime(),
          IT = this._getEffectiveDeltaMs(oT),
          iT = 1e3 / this.referenceFrameRate;
        return Math.pow(TT, IT / iT)
      }
      getFrameIndependentInputScale(TT) {
        const oT = 1 - TT;
        if (oT <= 0) return 1;
        return (1 - this.getFrameIndependentDecay(TT)) / oT
      }
      _getEffectiveDeltaMs(TT) {
        return TT > 0 ? TT : this._prevFrameTimeMs > 0 ? this._prevFrameTimeMs : 1e3 / this.referenceFrameRate
      }
      _calculateCurrentVelocity(TT, oT, IT) {
        let iT = TT;
        const zT = this._scene.Zc().getDeltaTime(),
          kT = this._getEffectiveDeltaMs(zT);
        if (0 === kT) return iT;
        const WT = this.getFrameIndependentDecay(IT);
        if (iT *= WT, 0 !== oT || this.activeInput) {
          const TT = 1 - IT;
          iT += oT / kT * (TT > 0 ? (1 - WT) / TT : 1)
        } else Math.abs(iT) < 1e-6 && (iT = 0);
        return iT
      }
    }
  },
  39007: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => iT
    });
    class iT {
      constructor(TT, oT) {
        this.inputMap = [], this.handlers = TT, this._createDefaultEntries = oT, this.resetInputMap()
      }
      resolveInteraction(TT, oT) {
        for (const IT of this.inputMap)
          if (IT.source === TT && this._entryMatches(IT, oT)) return IT;
        return null
      }
      resetInputMap() {
        this.inputMap = this._createDefaultEntries?.() ?? []
      }
      getEntry(TT, oT, IT) {
        const iT = this.inputMap;
        for (let zT = 0; zT < iT.length; zT++) {
          const kT = iT[zT];
          if (kT.source === TT && kT.interaction === oT && this._entryConditionsMatch(kT, IT)) return kT
        }
      }
      getEntries(TT, oT, IT) {
        const iT = [],
          zT = this.inputMap;
        for (let kT = 0; kT < zT.length; kT++) {
          const WT = zT[kT];
          WT.source === TT && WT.interaction === oT && this._entryConditionsMatch(WT, IT) && iT.push(WT)
        }
        return iT
      }
      addEntry(TT) {
        const oT = this._entrySpecificity(TT);
        let IT = this.inputMap.length;
        for (let iT = 0; iT < this.inputMap.length; iT++)
          if (this._entrySpecificity(this.inputMap[iT]) < oT) {
            IT = iT;
            break
          } this.inputMap.splice(IT, 0, TT)
      }
      setInteraction(TT, oT, IT) {
        const iT = this.resolveInteraction(TT, oT);
        return iT && this._entryCoversAllConditionsOf(iT, oT) ? (iT.interaction = IT, !0) : (this.addEntry({
          source: TT,
          ...oT ?? {},
          interaction: IT
        }), !0)
      }
      _entryCoversAllConditionsOf(TT, oT) {
        if (!oT) return !0;
        const IT = TT;
        for (const iT of Object.keys(oT)) {
          const TT = oT[iT];
          if (void 0 !== TT)
            if ("modifiers" === iT) {
              const oT = IT.modifiers ?? {};
              for (const IT of Object.keys(TT))
                if (void 0 !== TT[IT] && void 0 === oT[IT]) return !1
            } else if (void 0 === IT[iT]) return !1
        }
        return !0
      }
      setInteractions(TT, oT, IT) {
        let iT = 0;
        const zT = this.inputMap;
        for (let kT = 0; kT < zT.length; kT++) {
          const WT = zT[kT];
          WT.source === TT && this._entryMatches(WT, oT) && (WT.interaction = IT, iT++)
        }
        return iT
      }
      _entryMatches(TT, oT) {
        switch (TT.source) {
          case "pointer":
            return (void 0 === TT.button || TT.button === oT?.button) && this._matchModifiers(TT.modifiers, oT?.modifiers);
          case "wheel":
            return this._matchModifiers(TT.modifiers, oT?.modifiers);
          case "touch":
            return void 0 === TT.touchCount || TT.touchCount === oT?.touchCount;
          case "keyboard":
            return (void 0 === TT.key || (Array.isArray(TT.key) ? -1 !== TT.key.indexOf(oT?.key ?? -1) : TT.key === oT?.key)) && this._matchModifiers(TT.modifiers, oT?.modifiers)
        }
      }
      _entryConditionsMatch(TT, oT) {
        if (!oT) return !0;
        switch (TT.source) {
          case "pointer":
            return (!("button" in oT) || TT.button === oT.button) && (!("modifiers" in oT) || this._entryModifiersMatch(TT.modifiers, oT.modifiers));
          case "wheel":
            return !("modifiers" in oT) || this._entryModifiersMatch(TT.modifiers, oT.modifiers);
          case "touch":
            return !("touchCount" in oT) || TT.touchCount === oT.touchCount;
          case "keyboard":
            if ("key" in oT) {
              if (void 0 === TT.key) return void 0 === oT.key;
              if (void 0 === oT.key || (Array.isArray(TT.key) ? -1 === TT.key.indexOf(oT.key) : TT.key !== oT.key)) return !1
            }
            return !("modifiers" in oT) || this._entryModifiersMatch(TT.modifiers, oT.modifiers)
        }
      }
      _entrySpecificity(TT) {
        let oT = 0;
        return "button" in TT && void 0 !== TT.button && oT++, "key" in TT && void 0 !== TT.key && oT++, "touchCount" in TT && void 0 !== TT.touchCount && oT++, "modifiers" in TT && TT.modifiers && oT++, oT
      }
      _matchModifiers(TT, oT) {
        return !TT || (void 0 === TT.ctrl || TT.ctrl === (oT?.ctrl ?? !1)) && ((void 0 === TT.shift || TT.shift === (oT?.shift ?? !1)) && (void 0 === TT.alt || TT.alt === (oT?.alt ?? !1)))
      }
      _entryModifiersMatch(TT, oT) {
        if (!oT) return !TT;
        return void 0 !== oT.ctrl || void 0 !== oT.shift || void 0 !== oT.alt ? (void 0 === oT.ctrl || TT?.ctrl === oT.ctrl) && ((void 0 === oT.shift || TT?.shift === oT.shift) && (void 0 === oT.alt || TT?.alt === oT.alt)) : !TT || void 0 === TT.ctrl && void 0 === TT.shift && void 0 === TT.alt
      }
    }
  },
  38983: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => rT,
      d: () => KT
    });
    var iT = IT(38764),
      zT = IT(38773),
      kT = IT(38986),
      WT = IT(36118),
      XT = IT(36125),
      BT = IT(38997),
      FT = IT(38994),
      ST = IT(38999),
      DT = IT(39007);
    class LT extends ST.c {
      constructor(TT, oT, IT) {
        super(TT, oT, IT), this.input = new DT.c({
          translate: (TT, oT, IT) => {
            this.panAccumulatedPixels.x += TT, this.panAccumulatedPixels.y += oT, this.panAccumulatedPixels.z += IT
          },
          rotate: (TT, oT) => {
            this.rotationAccumulatedPixels.x += TT, this.rotationAccumulatedPixels.y += oT
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
    const xT = WT.b.Zero(),
      cT = WT.c.Identity();
    let KT = (() => {
        var TT;
        let oT, IT, FT, ST, DT = kT.c,
          KT = [],
          MT = [],
          rT = [],
          AT = [],
          gT = [],
          hT = [],
          wT = [],
          mT = [];
        return TT = class extends DT {
          get inertia() {
            return this._targetInertia
          }
          set inertia(TT) {
            this._targetInertia = TT, this.movement && (this.movement.panInertia = TT, this.movement.rotationInertia = TT)
          }
          constructor(TT, oT, IT) {
            super(TT, oT, IT, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]), this.cameraDirection = new WT.m(0, 0, 0), this.cameraRotation = new WT.j(0, 0), this._targetInertia = .9, this.updateUpVectorFromRotation = (0, iT.j)(this, KT, !1), this.rotation = ((0, iT.j)(this, MT), (0, iT.j)(this, rT, void 0)), this.rotationQuaternion = (0, iT.j)(this, AT), this.speed = (0, iT.j)(this, gT, 2), this.noRotationConstraint = ((0, iT.j)(this, hT), !1), this.invertRotation = !1, this.inverseRotationSpeed = .2, this._panningEpsilon = XT.d, this._rotationEpsilon = XT.d, this.lockedTarget = (0, iT.j)(this, wT, null), this._currentTarget = ((0, iT.j)(this, mT), WT.m.Zero()), this._initialFocalDistance = 1, this._viewMatrix = WT.b.Zero(), this._cameraTransformMatrix = WT.b.Zero(), this._cameraRotationMatrix = WT.b.Zero(), this._transformedReferencePoint = WT.m.Zero(), this._deferredPositionUpdate = new WT.m, this._deferredRotationQuaternionUpdate = new WT.c, this._deferredRotationUpdate = new WT.m, this._deferredUpdated = !1, this._deferOnly = !1, this._cachedRotationZ = 0, this._cachedQuaternionRotationZ = 0, this._referencePoint = WT.m.Forward(this.pC().useRightHandedSystem), this.rotation = new WT.m(0, this.pC().useRightHandedSystem ? Math.PI : 0, 0), this.movement = new LT(this.pC(), this.position), this.movement.panInertia = this.inertia, this.movement.rotationInertia = this.inertia
          }
          getFrontPosition(TT) {
            this.getWorldMatrix();
            const oT = WT.i.sc[0],
              IT = WT.i.sc[1];
            return IT.set(0, 0, this._scene.useRightHandedSystem ? -1 : 1), this.getDirectionToRef(IT, oT), oT.scaleInPlace(TT), this.globalPosition.add(oT)
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
            return !!super._restoreStateValues() && (this.position = this._storedPosition.clone(), this.rotation = this._storedRotation.clone(), this.rotationQuaternion && this._storedRotationQuaternion && (this.rotationQuaternion = this._storedRotationQuaternion.clone()), this.cameraDirection.S_(0, 0, 0), this.cameraRotation.S_(0, 0), !0)
          }
          _initCache() {
            super._initCache(), this._cache.lockedTarget = new WT.m(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.rotation = new WT.m(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.rotationQuaternion = new WT.c(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE)
          }
          _updateCache(TT) {
            TT || super._updateCache();
            const oT = this._getLockedTargetPosition();
            oT ? this._cache.lockedTarget ? this._cache.lockedTarget.SIT(oT) : this._cache.lockedTarget = oT.clone() : this._cache.lockedTarget = null, this._cache.rotation.SIT(this.rotation), this.rotationQuaternion && this._cache.rotationQuaternion.SIT(this.rotationQuaternion)
          }
          _isSynchronizedViewMatrix() {
            if (!super._isSynchronizedViewMatrix()) return !1;
            const TT = this._getLockedTargetPosition();
            return (this._cache.lockedTarget ? this._cache.lockedTarget.equals(TT) : !TT) && (this.rotationQuaternion ? this.rotationQuaternion.equals(this._cache.rotationQuaternion) : this._cache.rotation.equals(this.rotation))
          }
          _computeLocalCameraSpeed() {
            const TT = this.Zc();
            return this.speed * Math.sqrt(TT.getDeltaTime() / (100 * TT.getFps()))
          }
          setTarget(TT) {
            this.upVector.normalize(), this._initialFocalDistance = TT.subtract(this.position).length(), this.position.z === TT.z && (this.position.z += XT.d), this._referencePoint.normalize().scaleInPlace(this._initialFocalDistance), this.pC().useRightHandedSystem ? WT.b.LookAtRHToRef(this.position, TT, WT.m.UpReadOnly, xT) : WT.b.LookAtLHToRef(this.position, TT, WT.m.UpReadOnly, xT), xT.invert();
            const oT = this.rotationQuaternion || cT;
            WT.c.FromRotationMatrixToRef(xT, oT), oT.toEulerAnglesToRef(this.rotation), this.rotation.z = 0
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
            if (this.parent) return this.parent.getWorldMatrix().invertToRef(WT.i.Matrix[0]), WT.m.TransformNormalToRef(this.cameraDirection, WT.i.Matrix[0], WT.i.sc[0]), this._deferredPositionUpdate.addInPlace(WT.i.sc[0]), void(this._deferOnly ? this._deferredUpdated = !0 : this.position.SIT(this._deferredPositionUpdate));
            this._deferredPositionUpdate.addInPlace(this.cameraDirection), this._deferOnly ? this._deferredUpdated = !0 : this.position.SIT(this._deferredPositionUpdate)
          }
          _checkInputs() {
            const TT = this.movement,
              oT = 0 !== this.cameraDirection.x || 0 !== this.cameraDirection.y || 0 !== this.cameraDirection.z;
            TT.panAccumulatedPixels.addInPlace(this.cameraDirection), TT.rotationAccumulatedPixels.x += this.cameraRotation.x, TT.rotationAccumulatedPixels.y += this.cameraRotation.y, TT.computeCurrentFrameDeltas(), this.cameraDirection.SIT(TT.panDeltaCurrentFrame), this.cameraRotation.set(TT.rotationDeltaCurrentFrame.x, TT.rotationDeltaCurrentFrame.y);
            const IT = this.speed * this._panningEpsilon;
            !oT && Math.abs(this.cameraDirection.x) < IT && Math.abs(this.cameraDirection.y) < IT && Math.abs(this.cameraDirection.z) < IT && (this.cameraDirection.W8(0), TT.resetPanVelocity());
            const iT = this.invertRotation ? -this.inverseRotationSpeed : 1,
              zT = this._decideIfNeedsToMove(),
              kT = !(!this.cameraRotation.x && !this.cameraRotation.y);
            if (this._deferredUpdated = !1, this._deferredRotationUpdate.SIT(this.rotation), this._deferredPositionUpdate.SIT(this.position), this.rotationQuaternion && this._deferredRotationQuaternionUpdate.SIT(this.rotationQuaternion), zT && this._updatePosition(), kT) {
              if (this.rotationQuaternion && this.rotationQuaternion.toEulerAnglesToRef(this._deferredRotationUpdate), this._deferredRotationUpdate.x += this.cameraRotation.x * iT, this._deferredRotationUpdate.y += this.cameraRotation.y * iT, !this.noRotationConstraint) {
                const TT = 1.570796;
                this._deferredRotationUpdate.x > TT && (this._deferredRotationUpdate.x = TT), this._deferredRotationUpdate.x < -TT && (this._deferredRotationUpdate.x = -TT)
              }
              if (this._deferOnly ? this._deferredUpdated = !0 : this.rotation.SIT(this._deferredRotationUpdate), this.rotationQuaternion) {
                this._deferredRotationUpdate.lengthSquared() && (WT.c.RotationYawPitchRollToRef(this._deferredRotationUpdate.y, this._deferredRotationUpdate.x, this._deferredRotationUpdate.z, this._deferredRotationQuaternionUpdate), this._deferOnly ? this._deferredUpdated = !0 : this.rotationQuaternion.SIT(this._deferredRotationQuaternionUpdate))
              }
            }
            this.cameraDirection.W8(0), this.cameraRotation.set(0, 0), super._checkInputs()
          }
          _updateCameraRotationMatrix() {
            this.rotationQuaternion ? this.rotationQuaternion.toRotationMatrix(this._cameraRotationMatrix) : WT.b.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, this.rotation.z, this._cameraRotationMatrix)
          }
          _rotateUpVectorWithCameraRotationMatrix() {
            return WT.m.TransformNormalToRef(WT.m.UpReadOnly, this._cameraRotationMatrix, this.upVector), this
          }
          _getViewMatrix() {
            return this.lockedTarget && this.setTarget(this._getLockedTargetPosition()), this._updateCameraRotationMatrix(), this.rotationQuaternion && this._cachedQuaternionRotationZ != this.rotationQuaternion.z ? (this._rotateUpVectorWithCameraRotationMatrix(), this._cachedQuaternionRotationZ = this.rotationQuaternion.z) : this._cachedRotationZ !== this.rotation.z && (this._rotateUpVectorWithCameraRotationMatrix(), this._cachedRotationZ = this.rotation.z), WT.m.TransformCoordinatesToRef(this._referencePoint, this._cameraRotationMatrix, this._transformedReferencePoint), this.position.addToRef(this._transformedReferencePoint, this._currentTarget), this.updateUpVectorFromRotation && (this.rotationQuaternion ? BT.d.Y.rotateByQuaternionToRef(this.rotationQuaternion, this.upVector) : (WT.c.FromEulerVectorToRef(this.rotation, cT), BT.d.Y.rotateByQuaternionToRef(cT, this.upVector))), this._computeViewMatrix(this.position, this._currentTarget, this.upVector), this._viewMatrix
          }
          _computeViewMatrix(TT, oT, IT) {
            if (this.pC().useRightHandedSystem ? WT.b.LookAtRHToRef(TT, oT, IT, this._viewMatrix) : WT.b.LookAtLHToRef(TT, oT, IT, this._viewMatrix), this.parent) {
              const TT = this.parent.getWorldMatrix();
              this._viewMatrix.invert(), this._viewMatrix.multiplyToRef(TT, this._viewMatrix), this._viewMatrix.invert(), this._markSyncedWithParent()
            }
          }
          createRigCamera(oT, IT) {
            if (this.cameraRigMode !== kT.c.RIG_MODE_NONE) {
              const IT = new TT(oT, this.position.clone(), this.pC());
              return IT.isRigCamera = !0, IT.rigParent = this, this.cameraRigMode === kT.c.RIG_MODE_VR && (this.rotationQuaternion || (this.rotationQuaternion = new WT.c), IT._cameraRigParams = {}, IT.rotationQuaternion = new WT.c), IT.mode = this.mode, IT.orthoLeft = this.orthoLeft, IT.orthoRight = this.orthoRight, IT.orthoTop = this.orthoTop, IT.orthoBottom = this.orthoBottom, IT
            }
            return null
          }
          _updateRigCameras() {
            const TT = this._rigCameras[0],
              oT = this._rigCameras[1];
            switch (this.computeWorldMatrix(), this.cameraRigMode) {
              case kT.c.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case kT.c.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case kT.c.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
              case kT.c.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case kT.c.RIG_MODE_STEREOSCOPIC_INTERLACED: {
                const IT = this.cameraRigMode === kT.c.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED ? 1 : -1,
                  iT = this.cameraRigMode === kT.c.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED ? -1 : 1;
                this._getRigCamPositionAndTarget(this._cameraRigParams.stereoHalfAngle * IT, TT), this._getRigCamPositionAndTarget(this._cameraRigParams.stereoHalfAngle * iT, oT);
                break
              }
              case kT.c.RIG_MODE_VR:
                TT.rotationQuaternion && oT.rotationQuaternion && this.rotationQuaternion ? (TT.rotationQuaternion.SIT(this.rotationQuaternion), oT.rotationQuaternion.SIT(this.rotationQuaternion)) : (TT.rotation.SIT(this.rotation), oT.rotation.SIT(this.rotation)), TT.position.SIT(this.position), oT.position.SIT(this.position)
            }
            super._updateRigCameras()
          }
          _getRigCamPositionAndTarget(oT, IT) {
            this.getTarget().subtractToRef(this.position, TT._TargetFocalPoint), TT._TargetFocalPoint.normalize().scaleInPlace(this._initialFocalDistance);
            const iT = TT._TargetFocalPoint.addInPlace(this.position);
            WT.b.TranslationToRef(-iT.x, -iT.y, -iT.z, TT._TargetTransformMatrix), TT._TargetTransformMatrix.multiplyToRef(WT.b.RotationAxis(IT.upVector, oT), TT._RigCamTransformMatrix), WT.b.TranslationToRef(iT.x, iT.y, iT.z, TT._TargetTransformMatrix), TT._RigCamTransformMatrix.multiplyToRef(TT._TargetTransformMatrix, TT._RigCamTransformMatrix), WT.m.TransformCoordinatesToRef(this.position, TT._RigCamTransformMatrix, IT.position), IT.setTarget(iT)
          }
          getClassName() {
            return "TargetCamera"
          }
        }, (() => {
          const kT = "function" === typeof Symbol && Symbol.metadata ? Object.create(DT[Symbol.metadata] ?? null) : void 0;
          oT = [(0, zT.P)()], IT = [(0, zT.M)()], FT = [(0, zT.P)()], ST = [(0, zT.E)("lockedTargetId")], (0, iT.h)(null, null, oT, {
            kind: "field",
            name: "updateUpVectorFromRotation",
            static: !1,
            private: !1,
            access: {
              has: TT => "updateUpVectorFromRotation" in TT,
              get: TT => TT.updateUpVectorFromRotation,
              set: (TT, oT) => {
                TT.updateUpVectorFromRotation = oT
              }
            },
            metadata: kT
          }, KT, MT), (0, iT.h)(null, null, IT, {
            kind: "field",
            name: "rotation",
            static: !1,
            private: !1,
            access: {
              has: TT => "rotation" in TT,
              get: TT => TT.rotation,
              set: (TT, oT) => {
                TT.rotation = oT
              }
            },
            metadata: kT
          }, rT, AT), (0, iT.h)(null, null, FT, {
            kind: "field",
            name: "speed",
            static: !1,
            private: !1,
            access: {
              has: TT => "speed" in TT,
              get: TT => TT.speed,
              set: (TT, oT) => {
                TT.speed = oT
              }
            },
            metadata: kT
          }, gT, hT), (0, iT.h)(null, null, ST, {
            kind: "field",
            name: "lockedTarget",
            static: !1,
            private: !1,
            access: {
              has: TT => "lockedTarget" in TT,
              get: TT => TT.lockedTarget,
              set: (TT, oT) => {
                TT.lockedTarget = oT
              }
            },
            metadata: kT
          }, wT, mT), kT && Object.defineProperty(TT, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: kT
          })
        })(), TT._RigCamTransformMatrix = new WT.b, TT._TargetTransformMatrix = new WT.b, TT._TargetFocalPoint = new WT.m, TT
      })(),
      MT = !1;

    function rT() {
      MT || (MT = !0, FT.c.AddNodeConstructor("TargetCamera", ((TT, oT) => () => new KT(TT, WT.m.Zero(), oT))))
    }
  },
  38721: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => kT
    });
    var iT = IT(38659);
    let zT = !1;

    function kT() {
      zT || (zT = !0, iT.b.prototype.getInputElement = function() {
        return this._renderingCanvas
      }, iT.b.prototype.getRenderingCanvasClientRect = function() {
        return this._renderingCanvas ? this._renderingCanvas.getBoundingClientRect() : null
      }, iT.b.prototype.getInputElementClientRect = function() {
        return this._renderingCanvas ? this.getInputElement().getBoundingClientRect() : null
      }, iT.b.prototype.getAspectRatio = function(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const IT = TT.viewport;
        return this.getRenderWidth(oT) * IT.width / (this.getRenderHeight(oT) * IT.height)
      }, iT.b.prototype.getScreenAspectRatio = function() {
        return this.getRenderWidth(!0) / this.getRenderHeight(!0)
      }, iT.b.prototype._verifyPointerLock = function() {
        this._onPointerLockChange?.()
      })
    }
  },
  38820: (TT, oT, IT) => {
    var iT = IT(38659),
      zT = IT(38827);
    let kT = !1;
    kT || (kT = !0, (0, zT.v)(), iT.b.prototype._loadFileAsync = async function(TT, oT, IT) {
      return await new Promise(((iT, zT) => {
        this._loadFile(TT, (TT => {
          iT(TT)
        }), void 0, oT, IT, ((TT, oT) => {
          zT(oT)
        }))
      }))
    })
  },
  38817: (TT, oT, IT) => {
    (0, IT(38728).c)()
  },
  38728: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => kT
    });
    var iT = IT(38659);
    let zT = !1;

    function kT() {
      zT || (zT = !0, iT.b.prototype.getRenderPassNames = function() {
        return this._renderPassNames
      }, iT.b.prototype.getCurrentRenderPassName = function() {
        return this._renderPassNames[this.currentRenderPassId]
      }, iT.b.prototype.createRenderPassId = function(TT) {
        const oT = ++iT.b._RenderPassIdCounter;
        return this._renderPassNames[oT] = TT ?? "NONAME", oT
      }, iT.b.prototype.releaseRenderPassId = function(TT) {
        this._renderPassNames[TT] = void 0;
        for (let oT = 0; oT < this.scenes.length; ++oT) {
          const IT = this.scenes[oT];
          for (let oT = 0; oT < IT.meshes.length; ++oT) {
            const iT = IT.meshes[oT];
            if (iT._releaseRenderPassId(TT), iT.pR)
              for (let oT = 0; oT < iT.pR.length; ++oT) {
                iT.pR[oT]._removeDrawWrapper(TT)
              }
          }
        }
        this._onReleaseRenderPassObservable?.notifyObservers(TT)
      })
    }
  },
  38858: (TT, oT, IT) => {
    var iT = IT(38867),
      zT = IT(38659);
    let kT = !1;
    kT || (kT = !0, zT.b.GetCompatibleTextureLoader = iT.e)
  },
  38733: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => kT
    });
    var iT = IT(38607);
    let zT = !1;

    function kT() {
      zT || (zT = !0, iT.ThinEngine.prototype.setAlphaMode = function(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this._alphaMode[IT] === TT) {
          if (!oT) {
            const oT = 0 === TT;
            this.depthCullingState.depthMask !== oT && (this.depthCullingState.depthMask = oT)
          }
          return
        }
        const iT = 0 === TT;
        this._alphaState.setAlphaBlend(!iT, IT), this._alphaState.setAlphaMode(TT, IT), oT || (this.depthCullingState.depthMask = iT), this._alphaMode[IT] = TT
      })
    }
  },
  38744: (TT, oT, IT) => {
    var iT = IT(38594),
      zT = IT(37660),
      kT = IT(38607),
      WT = IT(38746),
      XT = IT(38708);
    class BT extends WT.e {
      setDepthStencilTexture(TT) {
        let oT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (super.setDepthStencilTexture(TT, oT), !TT) return;
        const IT = this._engine,
          iT = this._context,
          zT = TT._hardwareTexture;
        if (zT && TT._autoMSAAManagement && this._MSAAFramebuffer) {
          const oT = IT._currentFramebuffer;
          IT._bindUnboundFramebuffer(this._MSAAFramebuffer), iT.framebufferRenderbuffer(iT.FRAMEBUFFER, (0, XT.d)(TT.format) ? iT.DEPTH_STENCIL_ATTACHMENT : iT.DEPTH_ATTACHMENT, iT.RENDERBUFFER, zT.getMSAARenderBuffer()), IT._bindUnboundFramebuffer(oT)
        }
      }
      constructor(TT, oT, IT, iT, zT) {
        super(TT, oT, IT, iT), this._framebuffer = null, this._depthStencilBuffer = null, this._MSAAFramebuffer = null, this._colorTextureArray = null, this._depthStencilTextureArray = null, this._disposeOnlyFramebuffers = !1, this._currentLOD = 0, this._context = zT
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
          oT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          IT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          iT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          kT = arguments.length > 5 ? arguments[5] : void 0;
        if (this._depthStencilBuffer) {
          const TT = this._engine,
            oT = TT._currentFramebuffer,
            IT = this._context;
          TT._bindUnboundFramebuffer(this._framebuffer), IT.framebufferRenderbuffer(IT.FRAMEBUFFER, IT.DEPTH_STENCIL_ATTACHMENT, IT.RENDERBUFFER, null), IT.framebufferRenderbuffer(IT.FRAMEBUFFER, IT.DEPTH_ATTACHMENT, IT.RENDERBUFFER, null), IT.framebufferRenderbuffer(IT.FRAMEBUFFER, IT.STENCIL_ATTACHMENT, IT.RENDERBUFFER, null), TT._bindUnboundFramebuffer(oT), IT.deleteRenderbuffer(this._depthStencilBuffer), this._depthStencilBuffer = null
        }
        return super.createDepthStencilTexture(TT, oT, IT, iT, zT, kT)
      }
      shareDepth(TT) {
        super.shareDepth(TT);
        const oT = this._context,
          IT = this._depthStencilBuffer,
          iT = TT._MSAAFramebuffer || TT._framebuffer,
          zT = this._engine;
        TT._depthStencilBuffer && TT._depthStencilBuffer !== IT && oT.deleteRenderbuffer(TT._depthStencilBuffer), TT._depthStencilBuffer = IT;
        const kT = TT._generateStencilBuffer ? oT.DEPTH_STENCIL_ATTACHMENT : oT.DEPTH_ATTACHMENT;
        zT._bindUnboundFramebuffer(iT), oT.framebufferRenderbuffer(oT.FRAMEBUFFER, kT, oT.RENDERBUFFER, IT), zT._bindUnboundFramebuffer(null)
      }
      _bindTextureRenderTarget(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          IT = arguments.length > 2 ? arguments[2] : void 0,
          iT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const zT = TT._hardwareTexture;
        if (!zT) return;
        const kT = this._framebuffer,
          WT = this._engine,
          XT = WT._currentFramebuffer;
        let BT;
        if (WT._bindUnboundFramebuffer(kT), WT.rK > 1) {
          const kT = this._context;
          BT = kT["COLOR_ATTACHMENT" + oT], TT.is2DArray || TT.is3D ? (IT = IT ?? this.layerIndices?.[oT] ?? 0, kT.framebufferTextureLayer(kT.FRAMEBUFFER, BT, zT.underlyingResource, iT, IT)) : TT.isCube ? (IT = IT ?? this.faceIndices?.[oT] ?? 0, kT.framebufferTexture2D(kT.FRAMEBUFFER, BT, kT.TEXTURE_CUBE_MAP_POSITIVE_X + IT, zT.underlyingResource, iT)) : kT.framebufferTexture2D(kT.FRAMEBUFFER, BT, kT.TEXTURE_2D, zT.underlyingResource, iT)
        } else {
          const TT = this._context;
          BT = TT["COLOR_ATTACHMENT" + oT + "_WEBGL"];
          const kT = void 0 !== IT ? TT.TEXTURE_CUBE_MAP_POSITIVE_X + IT : TT.TEXTURE_2D;
          TT.framebufferTexture2D(TT.FRAMEBUFFER, BT, kT, zT.underlyingResource, iT)
        }
        if (TT._autoMSAAManagement && this._MSAAFramebuffer) {
          const TT = this._context;
          WT._bindUnboundFramebuffer(this._MSAAFramebuffer), TT.framebufferRenderbuffer(TT.FRAMEBUFFER, BT, TT.RENDERBUFFER, zT.getMSAARenderBuffer())
        }
        WT._bindUnboundFramebuffer(XT)
      }
      setTexture(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          IT = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        super.setTexture(TT, oT, IT), this._bindTextureRenderTarget(TT, oT)
      }
      setLayerAndFaceIndices(TT, oT) {
        if (super.setLayerAndFaceIndices(TT, oT), !this.textures || !this.layerIndices || !this.faceIndices) return;
        const IT = this._attachments?.length ?? this.textures.length;
        for (let iT = 0; iT < IT; iT++) {
          const TT = this.textures[iT];
          TT && (TT.is2DArray || TT.is3D ? this._bindTextureRenderTarget(TT, iT, this.layerIndices[iT]) : TT.isCube ? this._bindTextureRenderTarget(TT, iT, this.faceIndices[iT]) : this._bindTextureRenderTarget(TT, iT))
        }
      }
      setLayerAndFaceIndex() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          oT = arguments.length > 1 ? arguments[1] : void 0,
          IT = arguments.length > 2 ? arguments[2] : void 0;
        if (super.setLayerAndFaceIndex(TT, oT, IT), !this.textures || !this.layerIndices || !this.faceIndices) return;
        const iT = this.textures[TT];
        iT.is2DArray || iT.is3D ? this._bindTextureRenderTarget(this.textures[TT], TT, this.layerIndices[TT]) : iT.isCube && this._bindTextureRenderTarget(this.textures[TT], TT, this.faceIndices[TT])
      }
      resolveMSAATextures() {
        const TT = this._engine,
          oT = TT._currentFramebuffer;
        TT._bindUnboundFramebuffer(this._MSAAFramebuffer), super.resolveMSAATextures(), TT._bindUnboundFramebuffer(oT)
      }
      dispose() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._disposeOnlyFramebuffers;
        const oT = this._context;
        TT || (this._colorTextureArray && (this._context.deleteTexture(this._colorTextureArray), this._colorTextureArray = null), this._depthStencilTextureArray && (this._context.deleteTexture(this._depthStencilTextureArray), this._depthStencilTextureArray = null)), this._framebuffer && (oT.deleteFramebuffer(this._framebuffer), this._framebuffer = null), this._depthStencilBuffer && (oT.deleteRenderbuffer(this._depthStencilBuffer), this._depthStencilBuffer = null), this._MSAAFramebuffer && (oT.deleteFramebuffer(this._MSAAFramebuffer), this._MSAAFramebuffer = null), super.dispose(TT)
      }
    }
    let FT = !1;
    FT || (FT = !0, kT.ThinEngine.prototype._createHardwareRenderTargetWrapper = function(TT, oT, IT) {
      const iT = new BT(TT, oT, IT, this, this._gl);
      return this._renderTargetWrapperCache.push(iT), iT
    }, kT.ThinEngine.prototype.createRenderTargetTexture = function(TT, oT) {
      const IT = this._createHardwareRenderTargetWrapper(!1, !1, TT);
      let iT, zT, kT = !0,
        WT = !1,
        XT = !1,
        BT = 1;
      void 0 !== oT && "object" === typeof oT && (kT = oT.generateDepthBuffer ?? !0, WT = !!oT.generateStencilBuffer, XT = !!oT.noColorAttachment, iT = oT.colorAttachment, BT = oT.samples ?? 1, zT = oT.label);
      const FT = iT || (XT ? null : this._createInternalTexture(TT, oT, !0, 5)),
        ST = TT.width || TT,
        DT = TT.height || TT,
        LT = this._currentFramebuffer,
        xT = this._gl,
        cT = xT.createFramebuffer();
      if (this._bindUnboundFramebuffer(cT), IT._depthStencilBuffer = this._setupFramebufferDepthAttachments(WT, kT, ST, DT), !FT || FT.is2DArray || FT.is3D || xT.framebufferTexture2D(xT.FRAMEBUFFER, xT.COLOR_ATTACHMENT0, xT.TEXTURE_2D, FT._hardwareTexture.underlyingResource, 0), this._bindUnboundFramebuffer(LT), IT.label = zT ?? "RenderTargetWrapper", IT._framebuffer = cT, IT._generateDepthBuffer = kT, IT._generateStencilBuffer = WT, IT.setTextures(FT), iT) {
        if (IT._samples = iT.samples, iT.samples > 1) {
          const TT = iT._hardwareTexture.getMSAARenderBuffer(0);
          IT._MSAAFramebuffer = xT.createFramebuffer(), this._bindUnboundFramebuffer(IT._MSAAFramebuffer), xT.framebufferRenderbuffer(xT.FRAMEBUFFER, xT.COLOR_ATTACHMENT0, xT.RENDERBUFFER, TT), this._bindUnboundFramebuffer(null)
        }
      } else this.updateRenderTargetTextureSampleCount(IT, BT);
      return IT
    }, kT.ThinEngine.prototype._createDepthStencilTexture = function(TT, oT, IT) {
      const kT = this._gl,
        WT = TT.layers || 0,
        BT = TT.depth || 0;
      let FT = kT.TEXTURE_2D;
      0 !== WT ? FT = kT.TEXTURE_2D_ARRAY : 0 !== BT && (FT = kT.TEXTURE_3D);
      const ST = new iT.e(this, 12);
      if (ST.label = oT.label, !this._caps.depthTextureExtension) return zT.d.Error("Depth texture is not supported by your browser or hardware."), ST;
      const DT = {
        bilinearFiltering: !1,
        comparisonFunction: 0,
        generateStencil: !1,
        ...oT
      };
      if (this._bindTextureDirectly(FT, ST, !0), this._setupDepthStencilTexture(ST, TT, 0 !== DT.comparisonFunction && DT.bilinearFiltering, DT.comparisonFunction, DT.samples), void 0 !== DT.depthTextureFormat) {
        if (15 !== DT.depthTextureFormat && 16 !== DT.depthTextureFormat && 17 !== DT.depthTextureFormat && 13 !== DT.depthTextureFormat && 14 !== DT.depthTextureFormat && 18 !== DT.depthTextureFormat) return zT.d.Error(`Depth texture ${DT.depthTextureFormat} format is not supported.`), ST;
        ST.format = DT.depthTextureFormat
      } else ST.format = DT.generateStencil ? 13 : 16;
      const LT = (0, XT.d)(ST.format),
        xT = this._getWebGLTextureTypeFromDepthTextureFormat(ST.format),
        cT = LT ? kT.DEPTH_STENCIL : kT.DEPTH_COMPONENT,
        KT = this._getInternalFormatFromDepthTextureFormat(ST.format, !0, LT);
      return ST.is2DArray ? kT.texImage3D(FT, 0, KT, ST.width, ST.height, WT, 0, cT, xT, null) : ST.is3D ? kT.texImage3D(FT, 0, KT, ST.width, ST.height, BT, 0, cT, xT, null) : kT.texImage2D(FT, 0, KT, ST.width, ST.height, 0, cT, xT, null), this._bindTextureDirectly(FT, null), this._internalTexturesCache.push(ST), IT._depthStencilBuffer && (kT.deleteRenderbuffer(IT._depthStencilBuffer), IT._depthStencilBuffer = null), this._bindUnboundFramebuffer(IT._MSAAFramebuffer ?? IT._framebuffer), IT._generateStencilBuffer = LT, IT._depthStencilTextureWithStencil = LT, IT._depthStencilBuffer = this._setupFramebufferDepthAttachments(IT._generateStencilBuffer, IT._generateDepthBuffer, IT.width, IT.height, IT.samples, ST.format), this._bindUnboundFramebuffer(null), ST
    }, kT.ThinEngine.prototype.updateRenderTargetTextureSampleCount = function(TT, oT) {
      if (this.rK < 2 || !TT) return 1;
      if (TT.samples === oT) return oT;
      const IT = this._gl;
      oT = Math.min(oT, this.getCaps().maxMSAASamples), TT._depthStencilBuffer && (IT.deleteRenderbuffer(TT._depthStencilBuffer), TT._depthStencilBuffer = null), TT._MSAAFramebuffer && (IT.deleteFramebuffer(TT._MSAAFramebuffer), TT._MSAAFramebuffer = null);
      const iT = TT.texture?._hardwareTexture;
      if (iT?.releaseMSAARenderBuffers(), TT.texture && oT > 1 && "function" === typeof IT.renderbufferStorageMultisample) {
        const zT = IT.createFramebuffer();
        if (!zT) throw new Error("Unable to create multi sampled framebuffer");
        TT._MSAAFramebuffer = zT, this._bindUnboundFramebuffer(TT._MSAAFramebuffer);
        const kT = this._createRenderBuffer(TT.texture.width, TT.texture.height, oT, -1, this._getRGBABufferInternalSizedFormat(TT.texture.type, TT.texture.format, TT.texture._useSRGBBuffer), IT.COLOR_ATTACHMENT0, !1);
        if (!kT) throw new Error("Unable to create multi sampled framebuffer");
        iT?.addMSAARenderBuffer(kT)
      }
      this._bindUnboundFramebuffer(TT._MSAAFramebuffer ?? TT._framebuffer), TT.texture && (TT.texture.samples = oT), TT._samples = oT;
      const zT = TT._depthStencilTexture ? TT._depthStencilTexture.format : void 0;
      return TT._depthStencilBuffer = this._setupFramebufferDepthAttachments(TT._generateStencilBuffer, TT._generateDepthBuffer, TT.width, TT.height, oT, zT), this._bindUnboundFramebuffer(null), oT
    }, kT.ThinEngine.prototype._setupDepthStencilTexture = function(TT, oT, IT, iT) {
      let zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1;
      const kT = oT.width ?? oT,
        WT = oT.height ?? oT,
        XT = oT.layers || 0,
        BT = oT.depth || 0;
      TT.baseWidth = kT, TT.baseHeight = WT, TT.width = kT, TT.height = WT, TT.is2DArray = XT > 0, TT.depth = XT || BT, TT.isReady = !0, TT.samples = zT, TT.generateMipMaps = !1, TT.samplingMode = IT ? 2 : 1, TT.type = 0, TT._comparisonFunction = iT;
      const FT = this._gl,
        ST = this._getTextureTarget(TT),
        DT = this._getSamplingParameters(TT.samplingMode, !1);
      FT.texParameteri(ST, FT.TEXTURE_MAG_FILTER, DT.mag), FT.texParameteri(ST, FT.TEXTURE_MIN_FILTER, DT.min), FT.texParameteri(ST, FT.TEXTURE_WRAP_S, FT.CLAMP_TO_EDGE), FT.texParameteri(ST, FT.TEXTURE_WRAP_T, FT.CLAMP_TO_EDGE), this.rK > 1 && (0 === iT ? (FT.texParameteri(ST, FT.TEXTURE_COMPARE_FUNC, 515), FT.texParameteri(ST, FT.TEXTURE_COMPARE_MODE, FT.NONE)) : (FT.texParameteri(ST, FT.TEXTURE_COMPARE_FUNC, iT), FT.texParameteri(ST, FT.TEXTURE_COMPARE_MODE, FT.COMPARE_REF_TO_TEXTURE)))
    })
  },
  38589: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => iT.c
    });
    var iT = IT(38592);
    (0, IT(38733).e)();
    var zT = IT(38607);
    let kT = !1;
    ! function() {
      if (kT) return;
      kT = !0;
      const TT = new WeakMap,
        oT = new WeakMap,
        IT = new WeakMap,
        iT = new WeakMap;
      zT.ThinEngine.prototype.getAlphaToCoverage = function() {
        return TT.get(this) ?? !1
      }, zT.ThinEngine.prototype.setAlphaToCoverage = function(IT) {
        (TT.get(this) !== IT || this._gl && oT.get(this) !== this._gl) && (TT.set(this, IT), this._gl && (IT ? this._gl.enable(this._gl.SAMPLE_ALPHA_TO_COVERAGE) : this._gl.disable(this._gl.SAMPLE_ALPHA_TO_COVERAGE), oT.set(this, this._gl)))
      }, Object.defineProperty(zT.ThinEngine.prototype, "currentSampleCount", {
        get: function() {
          return this._currentRenderTarget ? this._currentRenderTarget.samples : this._gl ? (iT.get(this) !== this._gl && (IT.set(this, this._gl.getContextAttributes()?.antialias ? Math.max(1, this._gl.getParameter(this._gl.SAMPLES)) : 1), iT.set(this, this._gl)), IT.get(this)) : 1
        },
        enumerable: !1,
        configurable: !0
      })
    }();
    var WT = IT(38594),
      XT = IT(37660),
      BT = IT(38698);
    let FT = !1;
    ! function() {
      function TT(TT, oT, IT, iT) {
        let zT, kT = 1;
        1 === iT ? zT = new Float32Array(oT * IT * 4) : 2 === iT ? (zT = new Uint16Array(oT * IT * 4), kT = 15360) : zT = 7 === iT ? new Uint32Array(oT * IT * 4) : new Uint8Array(oT * IT * 4);
        for (let WT = 0; WT < oT; WT++)
          for (let iT = 0; iT < IT; iT++) {
            const IT = 3 * (iT * oT + WT),
              XT = 4 * (iT * oT + WT);
            zT[XT + 0] = TT[IT + 0], zT[XT + 1] = TT[IT + 1], zT[XT + 2] = TT[IT + 2], zT[XT + 3] = kT
          }
        return zT
      }

      function oT(TT) {
        return function(oT, IT, iT, zT, kT, XT, BT, FT) {
          let ST = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
            DT = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
          const LT = TT ? this._gl.TEXTURE_3D : this._gl.TEXTURE_2D_ARRAY,
            xT = TT ? 10 : 11,
            cT = new WT.e(this, xT);
          cT.baseWidth = IT, cT.baseHeight = iT, cT.baseDepth = zT, cT.width = IT, cT.height = iT, cT.depth = zT, cT.format = kT, cT.type = DT, cT.generateMipMaps = XT, cT.samplingMode = FT, TT ? cT.is3D = !0 : cT.is2DArray = !0, this._doNotHandleContextLost || (cT._bufferView = oT), TT ? this.updateRawTexture3D(cT, oT, kT, BT, ST, DT) : this.updateRawTexture2DArray(cT, oT, kT, BT, ST, DT), this._bindTextureDirectly(LT, cT, !0);
          const KT = this._getSamplingParameters(FT, XT);
          return this._gl.texParameteri(LT, this._gl.TEXTURE_MAG_FILTER, KT.mag), this._gl.texParameteri(LT, this._gl.TEXTURE_MIN_FILTER, KT.min), XT && this._gl.generateMipmap(LT), this._bindTextureDirectly(LT, null), this._internalTexturesCache.push(cT), cT
        }
      }

      function IT(TT) {
        return function(oT, IT, iT, zT) {
          let kT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            WT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
          const XT = TT ? this._gl.TEXTURE_3D : this._gl.TEXTURE_2D_ARRAY,
            BT = this._getWebGLTextureType(WT),
            FT = this._getInternalFormat(iT),
            ST = this._getRGBABufferInternalSizedFormat(WT, iT);
          this._bindTextureDirectly(XT, oT, !0), this._unpackFlipY(void 0 === zT || !!zT), this._doNotHandleContextLost || (oT._bufferView = IT, oT.format = iT, oT.invertY = zT, oT._compression = kT), oT.width % 4 !== 0 && this._gl.pixelStorei(this._gl.UNPACK_ALIGNMENT, 1), kT && IT ? this._gl.compressedTexImage3D(XT, 0, this.getCaps().s3tc[kT], oT.width, oT.height, oT.depth, 0, IT) : this._gl.texImage3D(XT, 0, ST, oT.width, oT.height, oT.depth, 0, FT, BT, IT), oT.generateMipMaps && this._gl.generateMipmap(XT), this._bindTextureDirectly(XT, null), oT.isReady = !0
        }
      }
      FT || (FT = !0, zT.ThinEngine.prototype.updateRawTexture = function(TT, oT, IT, iT) {
        let zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          kT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          WT = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        if (!TT) return;
        const XT = this._getRGBABufferInternalSizedFormat(kT, IT, WT),
          BT = this._getInternalFormat(IT),
          FT = this._getWebGLTextureType(kT);
        this._bindTextureDirectly(this._gl.TEXTURE_2D, TT, !0), this._unpackFlipY(void 0 === iT || !!iT), this._doNotHandleContextLost || (TT._bufferView = oT, TT.format = IT, TT.type = kT, TT.invertY = iT, TT._compression = zT), TT.width % 4 !== 0 && this._gl.pixelStorei(this._gl.UNPACK_ALIGNMENT, 1), zT && oT ? this._gl.compressedTexImage2D(this._gl.TEXTURE_2D, 0, this.getCaps().s3tc[zT], TT.width, TT.height, 0, oT) : this._gl.texImage2D(this._gl.TEXTURE_2D, 0, XT, TT.width, TT.height, 0, BT, FT, oT), TT.generateMipMaps && this._gl.generateMipmap(this._gl.TEXTURE_2D), this._bindTextureDirectly(this._gl.TEXTURE_2D, null), TT.isReady = !0
      }, zT.ThinEngine.prototype.createRawTexture = function(TT, oT, IT, iT, zT, kT, XT) {
        let BT = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          FT = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
          ST = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const DT = new WT.e(this, 3);
        DT.baseWidth = oT, DT.baseHeight = IT, DT.width = oT, DT.height = IT, DT.format = iT, DT.generateMipMaps = zT, DT.samplingMode = XT, DT.invertY = kT, DT._compression = BT, DT.type = FT, DT._useSRGBBuffer = this._getUseSRGBBuffer(ST, !zT), this._doNotHandleContextLost || (DT._bufferView = TT), this.updateRawTexture(DT, TT, iT, kT, BT, FT, DT._useSRGBBuffer), this._bindTextureDirectly(this._gl.TEXTURE_2D, DT, !0);
        const LT = this._getSamplingParameters(XT, zT);
        return this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MAG_FILTER, LT.mag), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MIN_FILTER, LT.min), zT && this._gl.generateMipmap(this._gl.TEXTURE_2D), this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._internalTexturesCache.push(DT), DT
      }, zT.ThinEngine.prototype.createRawCubeTexture = function(TT, oT, IT, iT, zT, kT, FT) {
        let ST = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null;
        const DT = this._gl,
          LT = new WT.e(this, 8);
        LT.isCube = !0, LT.format = IT, LT.type = iT, this._doNotHandleContextLost || (LT._bufferViewArray = TT);
        const xT = this._getWebGLTextureType(iT);
        let cT = this._getInternalFormat(IT);
        cT === DT.RGB && (cT = DT.RGBA), xT !== DT.FLOAT || this._caps.textureFloatLinearFiltering ? xT !== this._gl.HALF_FLOAT_OES || this._caps.textureHalfFloatLinearFiltering ? xT !== DT.FLOAT || this._caps.textureFloatRender ? xT !== DT.HALF_FLOAT || this._caps.colorBufferFloat || (zT = !1, XT.d.Warn("Render to half float textures is not supported. Mipmap generation forced to false.")) : (zT = !1, XT.d.Warn("Render to float textures is not supported. Mipmap generation forced to false.")) : (zT = !1, FT = 1, XT.d.Warn("Half float texture filtering is not supported. Mipmap generation and sampling mode are forced to false and TEXTURE_NEAREST_SAMPLINGMODE, respectively.")) : (zT = !1, FT = 1, XT.d.Warn("Float texture filtering is not supported. Mipmap generation and sampling mode are forced to false and TEXTURE_NEAREST_SAMPLINGMODE, respectively."));
        const KT = oT,
          MT = KT;
        LT.width = KT, LT.height = MT, LT.invertY = kT, LT._compression = ST;
        if (!this.needPOTTextures || (0, BT.h)(LT.width) && (0, BT.h)(LT.height) || (zT = !1), TT) this.updateRawCubeTexture(LT, TT, IT, iT, kT, ST);
        else {
          const TT = this._getRGBABufferInternalSizedFormat(iT),
            oT = 0;
          this._bindTextureDirectly(DT.TEXTURE_CUBE_MAP, LT, !0);
          for (let IT = 0; IT < 6; IT++) ST ? DT.compressedTexImage2D(DT.TEXTURE_CUBE_MAP_POSITIVE_X + IT, oT, this.getCaps().s3tc[ST], LT.width, LT.height, 0, void 0) : DT.texImage2D(DT.TEXTURE_CUBE_MAP_POSITIVE_X + IT, oT, TT, LT.width, LT.height, 0, cT, xT, null);
          this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null)
        }
        this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, LT, !0), TT && zT && this._gl.generateMipmap(this._gl.TEXTURE_CUBE_MAP);
        const rT = this._getSamplingParameters(FT, zT);
        return DT.texParameteri(DT.TEXTURE_CUBE_MAP, DT.TEXTURE_MAG_FILTER, rT.mag), DT.texParameteri(DT.TEXTURE_CUBE_MAP, DT.TEXTURE_MIN_FILTER, rT.min), DT.texParameteri(DT.TEXTURE_CUBE_MAP, DT.TEXTURE_WRAP_S, DT.CLAMP_TO_EDGE), DT.texParameteri(DT.TEXTURE_CUBE_MAP, DT.TEXTURE_WRAP_T, DT.CLAMP_TO_EDGE), this._bindTextureDirectly(DT.TEXTURE_CUBE_MAP, null), LT.generateMipMaps = zT, LT.samplingMode = FT, LT.isReady = !0, LT
      }, zT.ThinEngine.prototype.updateRawCubeTexture = function(oT, IT, iT, zT, kT) {
        let WT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          XT = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        oT._bufferViewArray = IT, oT.format = iT, oT.type = zT, oT.invertY = kT, oT._compression = WT;
        const FT = this._gl,
          ST = this._getWebGLTextureType(zT);
        let DT = this._getInternalFormat(iT);
        const LT = this._getRGBABufferInternalSizedFormat(zT);
        let xT = !1;
        DT === FT.RGB && (DT = FT.RGBA, xT = !0), this._bindTextureDirectly(FT.TEXTURE_CUBE_MAP, oT, !0), this._unpackFlipY(void 0 === kT || !!kT), oT.width % 4 !== 0 && FT.pixelStorei(FT.UNPACK_ALIGNMENT, 1);
        for (let BT = 0; BT < 6; BT++) {
          let iT = IT[BT];
          WT ? FT.compressedTexImage2D(FT.TEXTURE_CUBE_MAP_POSITIVE_X + BT, XT, this.getCaps().s3tc[WT], oT.width, oT.height, 0, iT) : (xT && (iT = TT(iT, oT.width, oT.height, zT)), FT.texImage2D(FT.TEXTURE_CUBE_MAP_POSITIVE_X + BT, XT, LT, oT.width, oT.height, 0, DT, ST, iT))
        }(!this.needPOTTextures || (0, BT.h)(oT.width) && (0, BT.h)(oT.height)) && oT.generateMipMaps && 0 === XT && this._gl.generateMipmap(this._gl.TEXTURE_CUBE_MAP), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), oT.isReady = !0
      }, zT.ThinEngine.prototype.createRawCubeTextureFromUrl = function(oT, IT, iT, zT, kT, WT, XT, BT) {
        let FT = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          ST = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          DT = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 3,
          LT = arguments.length > 11 && void 0 !== arguments[11] && arguments[11];
        const xT = this._gl,
          cT = this.createRawCubeTexture(null, iT, zT, kT, !WT, LT, DT, null);
        IT?.addPendingData(cT), cT.url = oT, cT.isReady = !1, this._internalTexturesCache.push(cT);
        const KT = (TT, oT) => {
            IT?.removePendingData(cT), ST && ST(TT ? TT.status + " " + TT.statusText : "Failed to parse texture data", oT)
          },
          MT = async oT => {
            if (!cT._hardwareTexture) return;
            const iT = XT(oT);
            if (!iT) return;
            const WT = iT instanceof Promise ? await iT : iT,
              ST = cT.width;
            if (BT) {
              const oT = this._getWebGLTextureType(kT);
              let IT = this._getInternalFormat(zT);
              const iT = this._getRGBABufferInternalSizedFormat(kT);
              let XT = !1;
              IT === xT.RGB && (IT = xT.RGBA, XT = !0), this._bindTextureDirectly(xT.TEXTURE_CUBE_MAP, cT, !0), this._unpackFlipY(!1);
              const FT = BT(WT);
              for (let zT = 0; zT < FT.length; zT++) {
                const WT = ST >> zT;
                for (let BT = 0; BT < 6; BT++) {
                  let ST = FT[zT][BT];
                  XT && (ST = TT(ST, WT, WT, kT)), xT.texImage2D(BT, zT, iT, WT, WT, 0, IT, oT, ST)
                }
              }
              this._bindTextureDirectly(xT.TEXTURE_CUBE_MAP, null)
            } else this.updateRawCubeTexture(cT, WT, zT, kT, LT);
            cT.isReady = !0, IT?.removePendingData(cT), cT.onLoadedObservable.notifyObservers(cT), cT.onLoadedObservable.clear(), FT && FT()
          };
        return this._loadFile(oT, (TT => {
          MT(TT).catch((TT => {
            KT(void 0, TT)
          }))
        }), void 0, IT?.offlineProvider, !0, KT), cT
      }, zT.ThinEngine.prototype.createRawTexture2DArray = oT(!1), zT.ThinEngine.prototype.createRawTexture3D = oT(!0), zT.ThinEngine.prototype.updateRawTexture2DArray = IT(!1), zT.ThinEngine.prototype.updateRawTexture3D = IT(!0))
    }();
    var ST = IT(38635);
    let DT = !1;
    DT || (DT = !0, zT.ThinEngine.prototype._readTexturePixelsSync = function(TT, oT, IT) {
      let iT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1,
        zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        kT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        WT = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
        XT = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        BT = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
        FT = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
      const DT = this._gl;
      if (!DT) throw new Error("Engine does not have gl rendering context.");
      if (!this._dummyFramebuffer) {
        const TT = DT.createFramebuffer();
        if (!TT) throw new Error("Unable to create dummy framebuffer");
        this._dummyFramebuffer = TT
      }
      DT.bindFramebuffer(DT.FRAMEBUFFER, this._dummyFramebuffer), iT > -1 && (TT.is2DArray || TT.is3D) ? DT.framebufferTextureLayer(DT.FRAMEBUFFER, DT.COLOR_ATTACHMENT0, TT._hardwareTexture?.underlyingResource, zT, iT) : iT > -1 ? DT.framebufferTexture2D(DT.FRAMEBUFFER, DT.COLOR_ATTACHMENT0, DT.TEXTURE_CUBE_MAP_POSITIVE_X + iT, TT._hardwareTexture?.underlyingResource, zT) : DT.framebufferTexture2D(DT.FRAMEBUFFER, DT.COLOR_ATTACHMENT0, DT.TEXTURE_2D, TT._hardwareTexture?.underlyingResource, zT);
      let LT = void 0 !== TT.type ? this._getWebGLTextureType(TT.type) : DT.UNSIGNED_BYTE;
      return XT ? kT || (kT = (0, ST.o)(TT.type, 4 * oT * IT)) : LT === DT.UNSIGNED_BYTE ? (kT || (kT = new Uint8Array(4 * oT * IT)), LT = DT.UNSIGNED_BYTE) : (kT || (kT = new Float32Array(4 * oT * IT)), LT = DT.FLOAT), WT && this.flushFramebuffer(), DT.readPixels(BT, FT, oT, IT, DT.RGBA, LT, kT), DT.bindFramebuffer(DT.FRAMEBUFFER, this._currentFramebuffer), kT
    }, zT.ThinEngine.prototype._readTexturePixels = function(TT, oT, IT) {
      let iT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1,
        zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        kT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        WT = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
        XT = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        BT = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
        FT = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
      return Promise.resolve(this._readTexturePixelsSync(TT, oT, IT, iT, zT, kT, WT, XT, BT, FT))
    }), (0, IT(38740).b)();
    let LT = !1;
    LT || (LT = !0, zT.ThinEngine.prototype._createDepthStencilCubeTexture = function(TT, oT) {
      const IT = new WT.e(this, 12);
      if (IT.isCube = !0, 1 === this.rK) return XT.d.Error("Depth cube texture is not supported by WebGL 1."), IT;
      const iT = {
          bilinearFiltering: !1,
          comparisonFunction: 0,
          generateStencil: !1,
          ...oT
        },
        zT = this._gl;
      this._bindTextureDirectly(zT.TEXTURE_CUBE_MAP, IT, !0), this._setupDepthStencilTexture(IT, TT, iT.bilinearFiltering, iT.comparisonFunction);
      for (let kT = 0; kT < 6; kT++) iT.generateStencil ? zT.texImage2D(zT.TEXTURE_CUBE_MAP_POSITIVE_X + kT, 0, zT.DEPTH24_STENCIL8, TT, TT, 0, zT.DEPTH_STENCIL, zT.UNSIGNED_INT_24_8, null) : zT.texImage2D(zT.TEXTURE_CUBE_MAP_POSITIVE_X + kT, 0, zT.DEPTH_COMPONENT24, TT, TT, 0, zT.DEPTH_COMPONENT, zT.UNSIGNED_INT, null);
      return this._bindTextureDirectly(zT.TEXTURE_CUBE_MAP, null), this._internalTexturesCache.push(IT), IT
    }, zT.ThinEngine.prototype._setCubeMapTextureParams = function(TT, oT, IT) {
      const iT = this._gl;
      iT.texParameteri(iT.TEXTURE_CUBE_MAP, iT.TEXTURE_MAG_FILTER, iT.LINEAR), iT.texParameteri(iT.TEXTURE_CUBE_MAP, iT.TEXTURE_MIN_FILTER, oT ? iT.LINEAR_MIPMAP_LINEAR : iT.LINEAR), iT.texParameteri(iT.TEXTURE_CUBE_MAP, iT.TEXTURE_WRAP_S, iT.CLAMP_TO_EDGE), iT.texParameteri(iT.TEXTURE_CUBE_MAP, iT.TEXTURE_WRAP_T, iT.CLAMP_TO_EDGE), TT.samplingMode = oT ? 3 : 2, oT && this.getCaps().textureMaxLevel && void 0 !== IT && IT > 0 && (iT.texParameteri(iT.TEXTURE_CUBE_MAP, iT.TEXTURE_MAX_LEVEL, IT), TT._maxLodLevel = IT), this._bindTextureDirectly(iT.TEXTURE_CUBE_MAP, null)
    }, zT.ThinEngine.prototype.createCubeTexture = function(TT, oT, IT, iT) {
      let zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        kT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        WT = arguments.length > 6 ? arguments[6] : void 0,
        FT = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        ST = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        DT = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
        LT = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
        xT = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
        cT = arguments.length > 13 && void 0 !== arguments[13] && arguments[13],
        KT = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : null;
      const MT = this._gl;
      return this.createCubeTextureBase(TT, oT, IT, !!iT, zT, kT, WT, FT, ST, DT, LT, xT, (TT => this._bindTextureDirectly(MT.TEXTURE_CUBE_MAP, TT, !0)), ((TT, oT) => {
        const IT = this.needPOTTextures ? (0, BT.e)(oT[0].width, this._caps.maxCubemapTextureSize) : oT[0].width,
          kT = IT,
          FT = [MT.TEXTURE_CUBE_MAP_POSITIVE_X, MT.TEXTURE_CUBE_MAP_POSITIVE_Y, MT.TEXTURE_CUBE_MAP_POSITIVE_Z, MT.TEXTURE_CUBE_MAP_NEGATIVE_X, MT.TEXTURE_CUBE_MAP_NEGATIVE_Y, MT.TEXTURE_CUBE_MAP_NEGATIVE_Z];
        this._bindTextureDirectly(MT.TEXTURE_CUBE_MAP, TT, !0), this._unpackFlipY(!1);
        const ST = WT ? this._getInternalFormat(WT, TT._useSRGBBuffer) : TT._useSRGBBuffer ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : MT.RGBA;
        let DT = WT ? this._getInternalFormat(WT) : MT.RGBA;
        TT._useSRGBBuffer && 1 === this.rK && (DT = ST);
        for (let iT = 0; iT < FT.length; iT++)
          if (oT[iT].width !== IT || oT[iT].height !== kT) {
            if (this._prepareWorkingCanvas(), !this._workingCanvas || !this._workingContext) return void XT.d.Warn("Cannot create canvas to resize texture.");
            this._workingCanvas.width = IT, this._workingCanvas.height = kT, this._workingContext.drawImage(oT[iT], 0, 0, oT[iT].width, oT[iT].height, 0, 0, IT, kT), MT.texImage2D(FT[iT], 0, ST, DT, MT.UNSIGNED_BYTE, this._workingCanvas)
          } else MT.texImage2D(FT[iT], 0, ST, DT, MT.UNSIGNED_BYTE, oT[iT]);
        iT || MT.generateMipmap(MT.TEXTURE_CUBE_MAP), this._setCubeMapTextureParams(TT, !iT), TT.width = IT, TT.height = kT, TT.isReady = !0, WT && (TT.format = WT), TT.onLoadedObservable.notifyObservers(TT), TT.onLoadedObservable.clear(), zT && zT()
      }), !!cT, KT)
    }, zT.ThinEngine.prototype.generateMipMapsForCubemap = function(TT) {
      let oT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (TT.generateMipMaps) {
        const IT = this._gl;
        this._bindTextureDirectly(IT.TEXTURE_CUBE_MAP, TT, !0), IT.generateMipmap(IT.TEXTURE_CUBE_MAP), oT && this._bindTextureDirectly(IT.TEXTURE_CUBE_MAP, null)
      }
    });
    IT(38744);
    let xT = !1;
    xT || (xT = !0, zT.ThinEngine.prototype.setDepthStencilTexture = function(TT, oT, IT, iT) {
      void 0 !== TT && (oT && (this._boundUniforms[TT] = oT), IT && IT.depthStencilTexture ? this._setTexture(TT, IT, !1, !0, iT) : this._setTexture(TT, null, void 0, void 0, iT))
    });
    let cT = !1;
    cT || (cT = !0, zT.ThinEngine.prototype.createRenderTargetCubeTexture = function(TT, oT) {
      const IT = this._createHardwareRenderTargetWrapper(!1, !0, TT),
        iT = {
          generateMipMaps: !0,
          generateDepthBuffer: !0,
          generateStencilBuffer: !1,
          type: 0,
          samplingMode: 3,
          format: 5,
          ...oT
        };
      iT.generateStencilBuffer = iT.generateDepthBuffer && iT.generateStencilBuffer, (1 !== iT.type || this._caps.textureFloatLinearFiltering) && (2 !== iT.type || this._caps.textureHalfFloatLinearFiltering) || (iT.samplingMode = 1);
      const zT = this._gl,
        kT = new WT.e(this, 5);
      this._bindTextureDirectly(zT.TEXTURE_CUBE_MAP, kT, !0);
      const BT = this._getSamplingParameters(iT.samplingMode, iT.generateMipMaps);
      1 !== iT.type || this._caps.textureFloat || (iT.type = 0, XT.d.Warn("Float textures are not supported. Cube render target forced to TEXTURETYPE_UNESIGNED_BYTE type")), zT.texParameteri(zT.TEXTURE_CUBE_MAP, zT.TEXTURE_MAG_FILTER, BT.mag), zT.texParameteri(zT.TEXTURE_CUBE_MAP, zT.TEXTURE_MIN_FILTER, BT.min), zT.texParameteri(zT.TEXTURE_CUBE_MAP, zT.TEXTURE_WRAP_S, zT.CLAMP_TO_EDGE), zT.texParameteri(zT.TEXTURE_CUBE_MAP, zT.TEXTURE_WRAP_T, zT.CLAMP_TO_EDGE);
      for (let WT = 0; WT < 6; WT++) zT.texImage2D(zT.TEXTURE_CUBE_MAP_POSITIVE_X + WT, 0, this._getRGBABufferInternalSizedFormat(iT.type, iT.format), TT, TT, 0, this._getInternalFormat(iT.format), this._getWebGLTextureType(iT.type), null);
      const FT = zT.createFramebuffer();
      return this._bindUnboundFramebuffer(FT), IT._depthStencilBuffer = this._setupFramebufferDepthAttachments(iT.generateStencilBuffer, iT.generateDepthBuffer, TT, TT), iT.generateMipMaps && zT.generateMipmap(zT.TEXTURE_CUBE_MAP), this._bindTextureDirectly(zT.TEXTURE_CUBE_MAP, null), this._bindUnboundFramebuffer(null), IT._framebuffer = FT, IT._generateDepthBuffer = iT.generateDepthBuffer, IT._generateStencilBuffer = iT.generateStencilBuffer, kT.width = TT, kT.height = TT, kT.isReady = !0, kT.isCube = !0, kT.samples = 1, kT.generateMipMaps = iT.generateMipMaps, kT.samplingMode = iT.samplingMode, kT.type = iT.type, kT.format = iT.format, this._internalTexturesCache.push(kT), IT.setTextures(kT), IT
    });
    var KT = IT(38752),
      MT = IT(38758);
    let rT = !1;
    rT || (rT = !0, zT.ThinEngine.prototype.createPrefilteredCubeTexture = function(TT, oT, iT, zT) {
      let kT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        BT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        FT = arguments.length > 6 ? arguments[6] : void 0,
        ST = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        DT = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
        LT = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null;
      return this.createCubeTexture(TT, oT, null, !1, (async TT => {
        if (!TT) return void(kT && kT(null));
        const BT = TT.texture;
        if (DT ? TT.info.sphericalPolynomial && (BT._sphericalPolynomial = TT.info.sphericalPolynomial) : BT._sphericalPolynomial = BT._sphericalPolynomial ?? new KT.c, BT._source = 9, this.getCaps().textureLOD) return void(kT && kT(BT));
        const FT = this._gl,
          ST = TT.width;
        if (!ST) return;
        const {
          DDSTools: LT
        } = await IT.e(296).then((() => IT(40592))), xT = [];
        for (let IT = 0; IT < 3; IT++) {
          const kT = 1 - IT / 2,
            DT = zT,
            cT = Math.log2(ST) * iT + zT,
            KT = DT + (cT - DT) * kT,
            rT = Math.round(Math.min(Math.max(KT, 0), cT)),
            AT = new WT.e(this, 2);
          if (AT.type = BT.type, AT.format = BT.format, AT.width = Math.pow(2, Math.max(Math.log2(ST) - rT, 0)), AT.height = AT.width, AT.isCube = !0, AT._cachedWrapU = 0, AT._cachedWrapV = 0, this._bindTextureDirectly(FT.TEXTURE_CUBE_MAP, AT, !0), AT.samplingMode = 2, FT.texParameteri(FT.TEXTURE_CUBE_MAP, FT.TEXTURE_MAG_FILTER, FT.LINEAR), FT.texParameteri(FT.TEXTURE_CUBE_MAP, FT.TEXTURE_MIN_FILTER, FT.LINEAR), FT.texParameteri(FT.TEXTURE_CUBE_MAP, FT.TEXTURE_WRAP_S, FT.CLAMP_TO_EDGE), FT.texParameteri(FT.TEXTURE_CUBE_MAP, FT.TEXTURE_WRAP_T, FT.CLAMP_TO_EDGE), TT.isDDS) {
            const oT = TT.info,
              IT = TT.data;
            this._unpackFlipY(oT.isCompressed), LT.UploadDDSLevels(this, AT, IT, oT, !0, 6, rT)
          } else XT.d.Warn("DDS is the only prefiltered cube map supported so far.");
          this._bindTextureDirectly(FT.TEXTURE_CUBE_MAP, null);
          const gT = new MT.e(oT);
          gT._isCube = !0, gT._texture = AT, AT.isReady = !0, xT.push(gT)
        }
        BT._lodTextureHigh = xT[2], BT._lodTextureMid = xT[1], BT._lodTextureLow = xT[0], kT && kT(BT)
      }), BT, FT, ST, DT, iT, zT, null, void 0, !1, LT)
    });
    var AT = IT(38687);
    let gT = !1;
    gT || (gT = !0, zT.ThinEngine.prototype.createUniformBuffer = function(TT, oT) {
      const IT = this._gl.createBuffer();
      if (!IT) throw new Error("Unable to create uniform buffer");
      const iT = new AT.e(IT);
      return this.bindUniformBuffer(iT), TT instanceof Float32Array ? this._gl.bufferData(this._gl.UNIFORM_BUFFER, TT, this._gl.STATIC_DRAW) : this._gl.bufferData(this._gl.UNIFORM_BUFFER, new Float32Array(TT), this._gl.STATIC_DRAW), this.bindUniformBuffer(null), iT.references = 1, iT
    }, zT.ThinEngine.prototype.createDynamicUniformBuffer = function(TT, oT) {
      const IT = this._gl.createBuffer();
      if (!IT) throw new Error("Unable to create dynamic uniform buffer");
      const iT = new AT.e(IT);
      return this.bindUniformBuffer(iT), TT instanceof Float32Array ? this._gl.bufferData(this._gl.UNIFORM_BUFFER, TT, this._gl.DYNAMIC_DRAW) : this._gl.bufferData(this._gl.UNIFORM_BUFFER, new Float32Array(TT), this._gl.DYNAMIC_DRAW), this.bindUniformBuffer(null), iT.references = 1, iT
    }, zT.ThinEngine.prototype.updateUniformBuffer = function(TT, oT, IT, iT) {
      this.bindUniformBuffer(TT), void 0 === IT && (IT = 0), void 0 === iT ? oT instanceof Float32Array ? this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, IT, oT) : this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, IT, new Float32Array(oT)) : oT instanceof Float32Array ? this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, 0, oT.subarray(IT, IT + iT)) : this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, 0, new Float32Array(oT).subarray(IT, IT + iT)), this.bindUniformBuffer(null)
    }, zT.ThinEngine.prototype.bindUniformBuffer = function(TT) {
      this._gl.bindBuffer(this._gl.UNIFORM_BUFFER, TT ? TT.underlyingResource : null)
    }, zT.ThinEngine.prototype.bindUniformBufferBase = function(TT, oT, IT) {
      this._gl.bindBufferBase(this._gl.UNIFORM_BUFFER, oT, TT ? TT.underlyingResource : null)
    }, zT.ThinEngine.prototype.bindUniformBlock = function(TT, oT, IT) {
      const iT = TT.program,
        zT = this._gl.getUniformBlockIndex(iT, oT);
      4294967295 !== zT && this._gl.uniformBlockBinding(iT, zT, IT)
    });
    var hT = IT(38626),
      wT = IT(38659);
    let mT = !1;
    mT || (mT = !0, wT.b.prototype.displayLoadingUI = function() {
      if (!(0, hT.k)()) return;
      const TT = this.loadingScreen;
      TT && TT.displayLoadingUI()
    }, wT.b.prototype.hideLoadingUI = function() {
      if (!(0, hT.k)()) return;
      const TT = this._loadingScreen;
      TT && TT.hideLoadingUI()
    }, Object.defineProperty(wT.b.prototype, "loadingScreen", {
      get: function() {
        return !this._loadingScreen && this._renderingCanvas && (this._loadingScreen = wT.b.DefaultLoadingScreenFactory(this._renderingCanvas)), this._loadingScreen
      },
      set: function(TT) {
        this._loadingScreen = TT
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(wT.b.prototype, "loadingUIText", {
      set: function(TT) {
        this.loadingScreen.loadingUIText = TT
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(wT.b.prototype, "loadingUIBackgroundColor", {
      set: function(TT) {
        this.loadingScreen.loadingUIBackgroundColor = TT
      },
      enumerable: !0,
      configurable: !0
    })), (0, IT(38721).b)();
    let eT = !1;
    eT || (eT = !0, wT.b.prototype.getInputElement = function() {
      return this._renderingCanvas
    }, wT.b.prototype.getDepthFunction = function() {
      return this._depthCullingState.depthFunc
    }, wT.b.prototype.setDepthFunction = function(TT) {
      this._depthCullingState.depthFunc = TT
    }, wT.b.prototype.setDepthFunctionToGreater = function() {
      this.setDepthFunction(516)
    }, wT.b.prototype.setDepthFunctionToGreaterOrEqual = function() {
      this.setDepthFunction(518)
    }, wT.b.prototype.setDepthFunctionToLess = function() {
      this.setDepthFunction(513)
    }, wT.b.prototype.setDepthFunctionToLessOrEqual = function() {
      this.setDepthFunction(515)
    }, wT.b.prototype.getDepthWrite = function() {
      return this._depthCullingState.depthMask
    }, wT.b.prototype.setDepthWrite = function(TT) {
      this._depthCullingState.depthMask = TT
    }, wT.b.prototype.setAlphaConstants = function(TT, oT, IT, iT) {
      this._alphaState.setAlphaBlendConstants(TT, oT, IT, iT)
    }, wT.b.prototype.getAlphaMode = function() {
      let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
      return this._alphaMode[TT]
    }, wT.b.prototype.getAlphaEquation = function() {
      let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
      return this._alphaEquation[TT]
    });
    let RT = !1;
    RT || (RT = !0, wT.b.prototype.getStencilBuffer = function() {
      return this._stencilState.stencilTest
    }, wT.b.prototype.setStencilBuffer = function(TT) {
      this._stencilState.stencilTest = TT
    }, wT.b.prototype.getStencilMask = function() {
      return this._stencilState.stencilMask
    }, wT.b.prototype.setStencilMask = function(TT) {
      this._stencilState.stencilMask = TT
    }, wT.b.prototype.getStencilFunction = function() {
      return this._stencilState.stencilFunc
    }, wT.b.prototype.getStencilBackFunction = function() {
      return this._stencilState.stencilBackFunc
    }, wT.b.prototype.getStencilFunctionReference = function() {
      return this._stencilState.stencilFuncRef
    }, wT.b.prototype.getStencilFunctionMask = function() {
      return this._stencilState.stencilFuncMask
    }, wT.b.prototype.setStencilFunction = function(TT) {
      this._stencilState.stencilFunc = TT
    }, wT.b.prototype.setStencilBackFunction = function(TT) {
      this._stencilState.stencilBackFunc = TT
    }, wT.b.prototype.setStencilFunctionReference = function(TT) {
      this._stencilState.stencilFuncRef = TT
    }, wT.b.prototype.setStencilFunctionMask = function(TT) {
      this._stencilState.stencilFuncMask = TT
    }, wT.b.prototype.getStencilOperationFail = function() {
      return this._stencilState.stencilOpStencilFail
    }, wT.b.prototype.getStencilBackOperationFail = function() {
      return this._stencilState.stencilBackOpStencilFail
    }, wT.b.prototype.getStencilOperationDepthFail = function() {
      return this._stencilState.stencilOpDepthFail
    }, wT.b.prototype.getStencilBackOperationDepthFail = function() {
      return this._stencilState.stencilBackOpDepthFail
    }, wT.b.prototype.getStencilOperationPass = function() {
      return this._stencilState.stencilOpStencilDepthPass
    }, wT.b.prototype.getStencilBackOperationPass = function() {
      return this._stencilState.stencilBackOpStencilDepthPass
    }, wT.b.prototype.setStencilOperationFail = function(TT) {
      this._stencilState.stencilOpStencilFail = TT
    }, wT.b.prototype.setStencilBackOperationFail = function(TT) {
      this._stencilState.stencilBackOpStencilFail = TT
    }, wT.b.prototype.setStencilOperationDepthFail = function(TT) {
      this._stencilState.stencilOpDepthFail = TT
    }, wT.b.prototype.setStencilBackOperationDepthFail = function(TT) {
      this._stencilState.stencilBackOpDepthFail = TT
    }, wT.b.prototype.setStencilOperationPass = function(TT) {
      this._stencilState.stencilOpStencilDepthPass = TT
    }, wT.b.prototype.setStencilBackOperationPass = function(TT) {
      this._stencilState.stencilBackOpStencilDepthPass = TT
    }, wT.b.prototype.cacheStencilState = function() {
      this._cachedStencilBuffer = this.getStencilBuffer(), this._cachedStencilFunction = this.getStencilFunction(), this._cachedStencilMask = this.getStencilMask(), this._cachedStencilOperationPass = this.getStencilOperationPass(), this._cachedStencilOperationFail = this.getStencilOperationFail(), this._cachedStencilOperationDepthFail = this.getStencilOperationDepthFail(), this._cachedStencilReference = this.getStencilFunctionReference()
    }, wT.b.prototype.restoreStencilState = function() {
      this.setStencilFunction(this._cachedStencilFunction), this.setStencilMask(this._cachedStencilMask), this.setStencilBuffer(this._cachedStencilBuffer), this.setStencilOperationPass(this._cachedStencilOperationPass), this.setStencilOperationFail(this._cachedStencilOperationFail), this.setStencilOperationDepthFail(this._cachedStencilOperationDepthFail), this.setStencilFunctionReference(this._cachedStencilReference)
    });
    IT(38817);
    let uT = !1;
    uT || (uT = !0, wT.b.prototype.createDepthStencilTexture = function(TT, oT, IT) {
      if (oT.isCube) {
        const IT = TT.width || TT;
        return this._createDepthStencilCubeTexture(IT, oT)
      }
      return this._createDepthStencilTexture(TT, oT, IT)
    });
    IT(38820), IT(38858);
    let vT = !1;
    vT || (vT = !0, zT.ThinEngine.prototype.enableScissor = function(TT, oT, IT, iT) {
      const zT = this._gl;
      zT.enable(zT.SCISSOR_TEST), zT.scissor(TT, oT, IT, iT)
    }, zT.ThinEngine.prototype.disableScissor = function() {
      const TT = this._gl;
      TT.disable(TT.SCISSOR_TEST)
    })
  },
  38592: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => wT
    });
    var iT = IT(38594),
      zT = IT(36146),
      kT = IT(38607),
      WT = IT(38667);
    class XT {
      constructor() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 30;
        this._enabled = !0, this._rollingFrameTime = new BT(TT)
      }
      sampleFrame() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : WT.c.Now;
        if (this._enabled) {
          if (null != this._lastFrameTimeMs) {
            const oT = TT - this._lastFrameTimeMs;
            this._rollingFrameTime.add(oT)
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
    class BT {
      constructor(TT) {
        this._samples = new Array(TT), this.reset()
      }
      add(TT) {
        let oT;
        if (this.isSaturated()) {
          const TT = this._samples[this._pos];
          oT = TT - this.average, this.average -= oT / (this._sampleCount - 1), this._m2 -= oT * (TT - this.average)
        } else this._sampleCount++;
        oT = TT - this.average, this.average += oT / this._sampleCount, this._m2 += oT * (TT - this.average), this.variance = this._m2 / (this._sampleCount - 1), this._samples[this._pos] = TT, this._pos++, this._pos %= this._samples.length
      }
      history(TT) {
        if (TT >= this._sampleCount || TT >= this._samples.length) return 0;
        const oT = this._wrapPosition(this._pos - 1);
        return this._samples[this._wrapPosition(oT - TT)]
      }
      isSaturated() {
        return this._sampleCount >= this._samples.length
      }
      reset() {
        this.average = 0, this.variance = 0, this._sampleCount = 0, this._pos = 0, this._m2 = 0
      }
      _wrapPosition(TT) {
        const oT = this._samples.length;
        return (TT % oT + oT) % oT
      }
    }
    var FT = IT(38687),
      ST = IT(37660),
      DT = IT(38700),
      LT = IT(38659),
      xT = IT(38626);

    function cT(TT) {
      const oT = function(TT) {
        if (!(0, xT.e)() || !document.body) return null;
        const oT = document.createElement("span");
        oT.textContent = "Hg", oT.style.font = TT;
        const IT = document.createElement("div");
        IT.style.display = "inline-block", IT.style.width = "1px", IT.style.height = "0px", IT.style.verticalAlign = "bottom";
        const iT = document.createElement("div");
        let zT, kT;
        iT.style.whiteSpace = "nowrap", iT.appendChild(oT), iT.appendChild(IT), document.body.appendChild(iT);
        try {
          kT = IT.getBoundingClientRect().top - oT.getBoundingClientRect().top, IT.style.verticalAlign = "baseline", zT = IT.getBoundingClientRect().top - oT.getBoundingClientRect().top
        } finally {
          document.body.removeChild(iT)
        }
        const WT = {
          ascent: zT,
          height: kT,
          descent: kT - zT
        };
        return KT(WT) ? WT : null
      }(TT);
      if (oT) return oT;
      const IT = function(TT) {
        let oT = null;
        try {
          "undefined" !== typeof OffscreenCanvas ? oT = new OffscreenCanvas(64, 64) : (0, xT.e)() && "function" === typeof document.createElement && (oT = document.createElement("canvas"), oT.width = 64, oT.height = 64);
          const IT = oT?.getContext("2d");
          if (!IT) return null;
          IT.font = TT;
          const iT = IT.measureText("Hg"),
            zT = Number(iT.actualBoundingBoxAscent ?? iT.fontBoundingBoxAscent),
            kT = Number(iT.actualBoundingBoxDescent ?? iT.fontBoundingBoxDescent),
            WT = {
              ascent: zT,
              height: zT + kT,
              descent: kT
            };
          return KT(WT) ? WT : null
        } catch {
          return null
        } finally {
          const TT = oT;
          "function" === typeof TT?.dispose && TT.dispose()
        }
      }(TT);
      return IT || function(TT) {
        const oT = Math.max(1, function(TT) {
            const oT = /(?:^|\s)([0-9]+(?:\.[0-9]+)?)px(?:\/|\s|$)/.exec(String(TT || ""));
            return oT ? Number(oT[1]) : 16
          }(TT)),
          IT = .8 * oT,
          iT = .2 * oT;
        return {
          ascent: IT,
          height: IT + iT,
          descent: iT
        }
      }(TT)
    }

    function KT(TT) {
      return Number.isFinite(TT.ascent) && Number.isFinite(TT.height) && Number.isFinite(TT.descent) && TT.height > 0
    }

    function MT(TT) {
      if (TT.requestPointerLock) {
        const oT = TT.requestPointerLock();
        oT instanceof Promise ? oT.then((() => {
          TT.focus()
        })).catch((() => {})) : TT.focus()
      }
    }
    var rT = IT(38716),
      AT = IT(38653),
      gT = IT(38721),
      hT = IT(38728);
    class wT extends kT.ThinEngine {
      static get NpmPackage() {
        return LT.b.NpmPackage
      }
      static get Version() {
        return LT.b.Version
      }
      static get Instances() {
        return zT.d.Instances
      }
      static get LastCreatedEngine() {
        return zT.d.LastCreatedEngine
      }
      static get LastCreatedScene() {
        return zT.d.LastCreatedScene
      }
      static DefaultLoadingScreenFactory(TT) {
        return LT.b.DefaultLoadingScreenFactory(TT)
      }
      get _supportsHardwareTextureRescaling() {
        return !!wT._RescalePostProcessFactory
      }
      _measureFps() {
        this._performanceMonitor.sampleFrame(), this._fps = this._performanceMonitor.averageFPS, this._deltaTime = this._performanceMonitor.instantaneousFrameTime || 0
      }
      get performanceMonitor() {
        return this._performanceMonitor
      }
      constructor(TT, oT, IT) {
        let iT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        (0, gT.b)(), (0, hT.c)(), super(TT, oT, IT, iT), this._performanceMonitor = new XT, this._drawCalls = new rT.c, TT && (this._features.supportRenderPasses = !0)
      }
      _initGLContext() {
        super._initGLContext(), this._rescalePostProcess = null
      }
      _sharedInit(TT) {
        super._sharedInit(TT),
          function(TT, oT, IT) {
            TT._onCanvasFocus = () => {
              TT.onCanvasFocusObservable.notifyObservers(TT)
            }, TT._onCanvasBlur = () => {
              TT.onCanvasBlurObservable.notifyObservers(TT)
            }, TT._onCanvasContextMenu = oT => {
              TT.disableContextMenu && oT.preventDefault()
            }, oT.addEventListener("focus", TT._onCanvasFocus), oT.addEventListener("blur", TT._onCanvasBlur), oT.addEventListener("contextmenu", TT._onCanvasContextMenu), TT._onBlur = () => {
              TT.disablePerformanceMonitorInBackground && TT.performanceMonitor.disable(), TT._windowIsBackground = !0
            }, TT._onFocus = () => {
              TT.disablePerformanceMonitorInBackground && TT.performanceMonitor.enable(), TT._windowIsBackground = !1
            }, TT._onCanvasPointerOut = IT => {
              document.elementFromPoint(IT.clientX, IT.clientY) !== oT && TT.onCanvasPointerOutObservable.notifyObservers(IT)
            };
            const iT = TT.getHostWindow();
            iT && "function" === typeof iT.addEventListener && (iT.addEventListener("blur", TT._onBlur), iT.addEventListener("focus", TT._onFocus)), oT.addEventListener("pointerout", TT._onCanvasPointerOut), IT.doNotHandleTouchAction || function(TT) {
              TT && TT.setAttribute && (TT.setAttribute("touch-action", "none"), TT.style.touchAction = "none", TT.style.webkitTapHighlightColor = "transparent")
            }(oT), !LT.b.audioEngine && IT.audioEngine && LT.b.AudioEngineFactory && (LT.b.audioEngine = LT.b.AudioEngineFactory(TT.getRenderingCanvas(), TT.getAudioContext(), TT.getAudioDestination())), (0, xT.e)() && (TT._onFullscreenChange = () => {
              TT.isFullscreen = !!document.fullscreenElement, TT.isFullscreen && TT._pointerLockRequested && oT && MT(oT)
            }, document.addEventListener("fullscreenchange", TT._onFullscreenChange, !1), document.addEventListener("webkitfullscreenchange", TT._onFullscreenChange, !1), TT._onPointerLockChange = () => {
              TT.isPointerLock = document.pointerLockElement === oT
            }, document.addEventListener("pointerlockchange", TT._onPointerLockChange, !1), document.addEventListener("webkitpointerlockchange", TT._onPointerLockChange, !1)), TT.enableOfflineSupport = void 0 !== LT.b.OfflineProviderFactory, TT._deterministicLockstep = !!IT.deterministicLockstep, TT._lockstepMaxSteps = IT.lockstepMaxSteps || 0, TT._timeStep = IT.timeStep || 1 / 60
          }(this, TT, this._creationOptions)
      }
      resizeImageBitmap(TT, oT, IT) {
        return function(TT, oT, IT, iT) {
          const zT = TT.createCanvas(IT, iT).getContext("2d");
          if (!zT) throw new Error("Unable to get 2d context for resizeImageBitmap");
          return zT.drawImage(oT, 0, 0), zT.getImageData(0, 0, IT, iT).data
        }(this, TT, oT, IT)
      }
      async _createImageBitmapFromSource(TT, oT) {
        return await async function(TT, oT, IT) {
          return await new Promise(((iT, zT) => {
            const kT = new Image;
            kT.onload = () => {
              kT.decode().then((() => {
                TT.createImageBitmap(kT, IT).then((TT => {
                  iT(TT)
                }))
              }))
            }, kT.onerror = () => {
              zT(`Error loading image ${kT.src}`)
            }, kT.src = oT
          }))
        }(this, TT, oT)
      }
      switchFullscreen(TT) {
        this.isFullscreen ? this.exitFullscreen() : this.enterFullscreen(TT)
      }
      enterFullscreen(TT) {
        this.isFullscreen || (this._pointerLockRequested = TT, this._renderingCanvas && function(TT) {
          const oT = TT.requestFullscreen || TT.webkitRequestFullscreen;
          oT && oT.call(TT)
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
      setDirectViewport(TT, oT, IT, iT) {
        const zT = this._cachedViewport;
        return this._cachedViewport = null, this._viewport(TT, oT, IT, iT), zT
      }
      scissorClear(TT, oT, IT, iT, zT) {
        this.enableScissor(TT, oT, IT, iT), this.clear(zT, !0, !0, !0), this.disableScissor()
      }
      getVertexShaderSource(TT) {
        const oT = this._gl.getAttachedShaders(TT);
        return oT ? this._gl.getShaderSource(oT[0]) : null
      }
      getFragmentShaderSource(TT) {
        const oT = this._gl.getAttachedShaders(TT);
        return oT ? this._gl.getShaderSource(oT[1]) : null
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
        return cT(TT)
      }
      enterPointerlock() {
        this._renderingCanvas && MT(this._renderingCanvas)
      }
      exitPointerlock() {
        document.exitPointerLock && document.exitPointerLock()
      }
      xR() {
        this._measureFps(), super.xR()
      }
      _deletePipelineContext(TT) {
        const oT = TT;
        oT && oT.program && oT.transformFeedback && (this.deleteTransformFeedback(oT.transformFeedback), oT.transformFeedback = null), super._deletePipelineContext(TT)
      }
      createShaderProgram(TT, oT, IT, iT, zT) {
        let kT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        zT = zT || this._gl, this.onBeforeShaderCompilationObservable.notifyObservers(this);
        const WT = super.createShaderProgram(TT, oT, IT, iT, zT, kT);
        return this.onAfterShaderCompilationObservable.notifyObservers(this), WT
      }
      _createShaderProgram(TT, oT, IT, iT) {
        let zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        const kT = iT.createProgram();
        if (TT.program = kT, !kT) throw new Error("Unable to create program");
        if (iT.attachShader(kT, oT), iT.attachShader(kT, IT), this.rK > 1 && zT) {
          const oT = this.createTransformFeedback();
          this.bindTransformFeedback(oT), this.setTranformFeedbackVaryings(kT, zT), TT.transformFeedback = oT
        }
        return iT.linkProgram(kT), this.rK > 1 && zT && this.bindTransformFeedback(null), TT.context = iT, TT.vertexShader = oT, TT.fragmentShader = IT, TT.isParallelCompiled || this._finalizePipelineContext(TT), kT
      }
      _releaseTexture(TT) {
        super._releaseTexture(TT)
      }
      _releaseRenderTargetWrapper(TT) {
        super._releaseRenderTargetWrapper(TT);
        for (const oT of this.scenes) {
          for (const IT of oT.postProcesses) IT._outputTexture === TT && (IT._outputTexture = null);
          for (const IT of oT.cameras)
            for (const oT of IT._postProcesses) oT && oT._outputTexture === TT && (oT._outputTexture = null)
        }
      }
      _rescaleTexture(TT, oT, IT, iT, zT) {
        this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MAG_FILTER, this._gl.LINEAR), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MIN_FILTER, this._gl.LINEAR), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_S, this._gl.CLAMP_TO_EDGE), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_T, this._gl.CLAMP_TO_EDGE);
        const kT = this.createRenderTargetTexture({
          width: oT.width,
          height: oT.height
        }, {
          generateMipMaps: !1,
          type: 0,
          samplingMode: 2,
          generateDepthBuffer: !1,
          generateStencilBuffer: !1
        });
        if (!this._rescalePostProcess && wT._RescalePostProcessFactory && (this._rescalePostProcess = wT._RescalePostProcessFactory(this)), this._rescalePostProcess) {
          this._rescalePostProcess.externalTextureSamplerBinding = !0;
          const WT = () => {
              this._rescalePostProcess.onApply = function(oT) {
                oT._bindTexture("textureSampler", TT)
              };
              let WT = IT;
              WT || (WT = this.scenes[this.scenes.length - 1]), WT.postProcessManager.directRender([this._rescalePostProcess], kT, !0), this._bindTextureDirectly(this._gl.TEXTURE_2D, oT, !0), this._gl.copyTexImage2D(this._gl.TEXTURE_2D, 0, iT, 0, 0, oT.width, oT.height, 0), this.unBindFramebuffer(kT), kT.dispose(), zT && zT()
            },
            XT = this._rescalePostProcess.getEffect();
          XT ? XT.executeWhenCompiled(WT) : this._rescalePostProcess.onEffectCreatedObservable.addOnce((TT => {
            TT.executeWhenCompiled(WT)
          }))
        }
      }
      wrapWebGLTexture(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3,
          zT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          kT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        const WT = new DT.c(TT, this._gl),
          XT = new iT.e(this, 15, !0);
        return XT._hardwareTexture = WT, XT.baseWidth = zT, XT.baseHeight = kT, XT.width = zT, XT.height = kT, XT.isReady = !0, XT.useMipMaps = oT, this.updateTextureSamplingMode(IT, XT), XT
      }
      updateWrappedWebGLTexture(TT, oT) {
        if (15 !== TT.source) throw new Error("updateWrappedWebGLTexture: target InternalTexture was not produced by wrapWebGLTexture.");
        for (const iT of this._renderTargetWrapperCache)
          if (iT.textures?.includes(TT)) {
            if (iT.isMulti) throw new Error("updateWrappedWebGLTexture: wrapped texture is part of a multi render-target; not supported. Dispose and re-wrap.");
            if (iT._depthStencilTexture) throw new Error("updateWrappedWebGLTexture: wrapped texture's render-target wrapper has a depth/stencil texture; not supported. Dispose and re-wrap.")
          } TT._hardwareTexture = new DT.c(oT, this._gl), TT.isReady = !0, TT._cachedCoordinatesMode = null, TT._cachedWrapU = null, TT._cachedWrapV = null, TT._cachedWrapR = null, TT._cachedAnisotropicFilteringLevel = null;
        for (const iT in this._boundTexturesCache) this._boundTexturesCache[iT] === TT && (this._boundTexturesCache[iT] = null);
        this.updateTextureSamplingMode(TT.samplingMode, TT);
        const IT = this._gl;
        for (const iT of this._renderTargetWrapperCache) {
          if (iT.texture !== TT) continue;
          const zT = iT,
            kT = iT.samples,
            WT = kT > 1;
          zT._framebuffer && IT.deleteFramebuffer(zT._framebuffer), !WT && zT._depthStencilBuffer && (IT.deleteRenderbuffer(zT._depthStencilBuffer), zT._depthStencilBuffer = null);
          const XT = this._currentFramebuffer,
            BT = IT.createFramebuffer();
          this._bindUnboundFramebuffer(BT), IT.framebufferTexture2D(IT.FRAMEBUFFER, IT.COLOR_ATTACHMENT0, IT.TEXTURE_2D, oT, 0), WT || (zT._depthStencilBuffer = this._setupFramebufferDepthAttachments(iT._generateStencilBuffer, iT._generateDepthBuffer, iT.width, iT.height)), this._bindUnboundFramebuffer(XT), zT._framebuffer = BT, WT && (iT._samples = 1, this.updateRenderTargetTextureSampleCount(zT, kT))
        }
      }
      _uploadImageToTexture(TT, oT) {
        let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          iT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const zT = this._gl,
          kT = this._getWebGLTextureType(TT.type),
          WT = this._getInternalFormat(TT.format),
          XT = this._getRGBABufferInternalSizedFormat(TT.type, WT),
          BT = TT.isCube ? zT.TEXTURE_CUBE_MAP : zT.TEXTURE_2D;
        this._bindTextureDirectly(BT, TT, !0), this._unpackFlipY(TT.invertY);
        let FT = zT.TEXTURE_2D;
        TT.isCube && (FT = zT.TEXTURE_CUBE_MAP_POSITIVE_X + IT), zT.texImage2D(FT, iT, XT, WT, kT, oT), this._bindTextureDirectly(BT, null, !0)
      }
      updateTextureComparisonFunction(TT, oT) {
        if (1 === this.rK) return void ST.d.Error("WebGL 1 does not support texture comparison.");
        const IT = this._gl;
        TT.isCube ? (this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, TT, !0), 0 === oT ? (IT.texParameteri(IT.TEXTURE_CUBE_MAP, IT.TEXTURE_COMPARE_FUNC, 515), IT.texParameteri(IT.TEXTURE_CUBE_MAP, IT.TEXTURE_COMPARE_MODE, IT.NONE)) : (IT.texParameteri(IT.TEXTURE_CUBE_MAP, IT.TEXTURE_COMPARE_FUNC, oT), IT.texParameteri(IT.TEXTURE_CUBE_MAP, IT.TEXTURE_COMPARE_MODE, IT.COMPARE_REF_TO_TEXTURE)), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null)) : (this._bindTextureDirectly(this._gl.TEXTURE_2D, TT, !0), 0 === oT ? (IT.texParameteri(IT.TEXTURE_2D, IT.TEXTURE_COMPARE_FUNC, 515), IT.texParameteri(IT.TEXTURE_2D, IT.TEXTURE_COMPARE_MODE, IT.NONE)) : (IT.texParameteri(IT.TEXTURE_2D, IT.TEXTURE_COMPARE_FUNC, oT), IT.texParameteri(IT.TEXTURE_2D, IT.TEXTURE_COMPARE_MODE, IT.COMPARE_REF_TO_TEXTURE)), this._bindTextureDirectly(this._gl.TEXTURE_2D, null)), TT._comparisonFunction = oT
      }
      createInstancesBuffer(TT) {
        const oT = this._gl.createBuffer();
        if (!oT) throw new Error("Unable to create instance buffer");
        const IT = new FT.e(oT);
        return IT.fD = TT, this.bindArrayBuffer(IT), this._gl.bufferData(this._gl.ARRAY_BUFFER, TT, this._gl.DYNAMIC_DRAW), IT.references = 1, IT
      }
      deleteInstancesBuffer(TT) {
        this._gl.deleteBuffer(TT)
      }
      async _clientWaitAsync(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10;
        const iT = this._gl;
        return await new Promise(((zT, kT) => {
          (0, AT.e)((() => {
            const IT = iT.clientWaitSync(TT, oT, 0);
            if (IT == iT.WAIT_FAILED) throw new Error("clientWaitSync failed");
            return IT != iT.TIMEOUT_EXPIRED
          }), zT, kT, IT)
        }))
      }
      _readPixelsAsync(TT, oT, IT, iT, zT, kT, WT) {
        if (this._webGLVersion < 2) throw new Error("_readPixelsAsync only work on WebGL2+");
        const XT = this._gl,
          BT = XT.createBuffer();
        XT.bindBuffer(XT.PIXEL_PACK_BUFFER, BT), XT.bufferData(XT.PIXEL_PACK_BUFFER, WT.byteLength, XT.STREAM_READ), XT.readPixels(TT, oT, IT, iT, zT, kT, 0), XT.bindBuffer(XT.PIXEL_PACK_BUFFER, null);
        const FT = XT.fenceSync(XT.SYNC_GPU_COMMANDS_COMPLETE, 0);
        return FT ? (XT.flush(), this._clientWaitAsync(FT, 0, 10).then((() => (XT.deleteSync(FT), XT.bindBuffer(XT.PIXEL_PACK_BUFFER, BT), XT.getBufferSubData(XT.PIXEL_PACK_BUFFER, 0, WT), XT.bindBuffer(XT.PIXEL_PACK_BUFFER, null), XT.deleteBuffer(BT), WT)))) : null
      }
      dispose() {
        this.hideLoadingUI?.(), this._rescalePostProcess && this._rescalePostProcess.dispose(),
          function(TT, oT) {
            1 === zT.d.Instances.length && LT.b.audioEngine && (LT.b.audioEngine.dispose(), LT.b.audioEngine = null);
            const IT = TT.getHostWindow();
            IT && "function" === typeof IT.removeEventListener && (IT.removeEventListener("blur", TT._onBlur), IT.removeEventListener("focus", TT._onFocus)), oT && (oT.removeEventListener("focus", TT._onCanvasFocus), oT.removeEventListener("blur", TT._onCanvasBlur), oT.removeEventListener("pointerout", TT._onCanvasPointerOut), oT.removeEventListener("contextmenu", TT._onCanvasContextMenu)), (0, xT.e)() && (document.removeEventListener("fullscreenchange", TT._onFullscreenChange), document.removeEventListener("mozfullscreenchange", TT._onFullscreenChange), document.removeEventListener("webkitfullscreenchange", TT._onFullscreenChange), document.removeEventListener("msfullscreenchange", TT._onFullscreenChange), document.removeEventListener("pointerlockchange", TT._onPointerLockChange), document.removeEventListener("mspointerlockchange", TT._onPointerLockChange), document.removeEventListener("mozpointerlockchange", TT._onPointerLockChange), document.removeEventListener("webkitpointerlockchange", TT._onPointerLockChange))
          }(this, this._renderingCanvas), super.dispose()
      }
    }
    wT.ALPHA_DISABLE = 0, wT.ALPHA_ADD = 1, wT.ALPHA_COMBINE = 2, wT.ALPHA_SUBTRACT = 3, wT.ALPHA_MULTIPLY = 4, wT.ALPHA_MAXIMIZED = 5, wT.ALPHA_ONEONE = 6, wT.ALPHA_PREMULTIPLIED = 7, wT.ALPHA_PREMULTIPLIED_PORTERDUFF = 8, wT.ALPHA_INTERPOLATE = 9, wT.ALPHA_SCREENMODE = 10, wT.DELAYLOADSTATE_NONE = 0, wT.DELAYLOADSTATE_LOADED = 1, wT.DELAYLOADSTATE_LOADING = 2, wT.DELAYLOADSTATE_NOTLOADED = 4, wT.NEVER = 512, wT.ALWAYS = 519, wT.LESS = 513, wT.EQUAL = 514, wT.LEQUAL = 515, wT.GREATER = 516, wT.GEQUAL = 518, wT.NOTEQUAL = 517, wT.KEEP = 7680, wT.REPLACE = 7681, wT.INCR = 7682, wT.DECR = 7683, wT.INVERT = 5386, wT.INCR_WRAP = 34055, wT.DECR_WRAP = 34056, wT.TEXTURE_CLAMP_ADDRESSMODE = 0, wT.TEXTURE_WRAP_ADDRESSMODE = 1, wT.TEXTURE_MIRROR_ADDRESSMODE = 2, wT.TEXTUREFORMAT_ALPHA = 0, wT.TEXTUREFORMAT_LUMINANCE = 1, wT.TEXTUREFORMAT_LUMINANCE_ALPHA = 2, wT.TEXTUREFORMAT_RGB = 4, wT.TEXTUREFORMAT_RGBA = 5, wT.TEXTUREFORMAT_RED = 6, wT.TEXTUREFORMAT_R = 6, wT.TEXTUREFORMAT_R16_UNORM = 33322, wT.TEXTUREFORMAT_RG16_UNORM = 33324, wT.TEXTUREFORMAT_RGB16_UNORM = 32852, wT.TEXTUREFORMAT_RGBA16_UNORM = 32859, wT.TEXTUREFORMAT_R16_SNORM = 36760, wT.TEXTUREFORMAT_RG16_SNORM = 36761, wT.TEXTUREFORMAT_RGB16_SNORM = 36762, wT.TEXTUREFORMAT_RGBA16_SNORM = 36763, wT.TEXTUREFORMAT_RG = 7, wT.TEXTUREFORMAT_RED_INTEGER = 8, wT.TEXTUREFORMAT_R_INTEGER = 8, wT.TEXTUREFORMAT_RG_INTEGER = 9, wT.TEXTUREFORMAT_RGB_INTEGER = 10, wT.TEXTUREFORMAT_RGBA_INTEGER = 11, wT.TEXTURETYPE_UNSIGNED_BYTE = 0, wT.TEXTURETYPE_UNSIGNED_INT = 0, wT.TEXTURETYPE_FLOAT = 1, wT.TEXTURETYPE_HALF_FLOAT = 2, wT.TEXTURETYPE_BYTE = 3, wT.TEXTURETYPE_SHORT = 4, wT.TEXTURETYPE_UNSIGNED_SHORT = 5, wT.TEXTURETYPE_INT = 6, wT.TEXTURETYPE_UNSIGNED_INTEGER = 7, wT.TEXTURETYPE_UNSIGNED_SHORT_4_4_4_4 = 8, wT.TEXTURETYPE_UNSIGNED_SHORT_5_5_5_1 = 9, wT.TEXTURETYPE_UNSIGNED_SHORT_5_6_5 = 10, wT.TEXTURETYPE_UNSIGNED_INT_2_10_10_10_REV = 11, wT.TEXTURETYPE_UNSIGNED_INT_24_8 = 12, wT.TEXTURETYPE_UNSIGNED_INT_10F_11F_11F_REV = 13, wT.TEXTURETYPE_UNSIGNED_INT_5_9_9_9_REV = 14, wT.TEXTURETYPE_FLOAT_32_UNSIGNED_INT_24_8_REV = 15, wT.TEXTURE_NEAREST_SAMPLINGMODE = 1, wT.TEXTURE_BILINEAR_SAMPLINGMODE = 2, wT.TEXTURE_TRILINEAR_SAMPLINGMODE = 3, wT.TEXTURE_NEAREST_NEAREST_MIPLINEAR = 8, wT.TEXTURE_LINEAR_LINEAR_MIPNEAREST = 11, wT.TEXTURE_LINEAR_LINEAR_MIPLINEAR = 3, wT.TEXTURE_NEAREST_NEAREST_MIPNEAREST = 4, wT.TEXTURE_NEAREST_LINEAR_MIPNEAREST = 5, wT.TEXTURE_NEAREST_LINEAR_MIPLINEAR = 6, wT.TEXTURE_NEAREST_LINEAR = 7, wT.TEXTURE_NEAREST_NEAREST = 1, wT.TEXTURE_LINEAR_NEAREST_MIPNEAREST = 9, wT.TEXTURE_LINEAR_NEAREST_MIPLINEAR = 10, wT.TEXTURE_LINEAR_LINEAR = 2, wT.TEXTURE_LINEAR_NEAREST = 12, wT.TEXTURE_EXPLICIT_MODE = 0, wT.TEXTURE_SPHERICAL_MODE = 1, wT.TEXTURE_PLANAR_MODE = 2, wT.TEXTURE_CUBIC_MODE = 3, wT.TEXTURE_PROJECTION_MODE = 4, wT.TEXTURE_SKYBOX_MODE = 5, wT.TEXTURE_INVCUBIC_MODE = 6, wT.TEXTURE_EQUIRECTANGULAR_MODE = 7, wT.TEXTURE_FIXED_EQUIRECTANGULAR_MODE = 8, wT.TEXTURE_FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9, wT.SCALEMODE_FLOOR = 1, wT.SCALEMODE_NEAREST = 2, wT.SCALEMODE_CEILING = 3
  },
  38746: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => zT
    });
    var iT = IT(38708);
    class zT {
      get depthStencilTexture() {
        return this._depthStencilTexture
      }
      setDepthStencilTexture(TT) {
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && this._depthStencilTexture && this._depthStencilTexture.dispose(), this._depthStencilTexture = TT, this._generateDepthBuffer = this._generateStencilBuffer = this._depthStencilTextureWithStencil = !1, TT && (this._generateDepthBuffer = !0, this._generateStencilBuffer = this._depthStencilTextureWithStencil = (0, iT.d)(TT.format))
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
        const oT = this._textures[TT],
          IT = this._layerIndices?.[TT] ?? 0,
          iT = this._faceIndices?.[TT] ?? 0;
        return oT.isCube ? 6 * IT + iT : oT.is3D ? 0 : IT
      }
      get samples() {
        return this._samples
      }
      setSamples(TT) {
        let oT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          IT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.samples === TT && !IT) return TT;
        const iT = this._isMulti ? this._engine.updateMultipleRenderTargetTextureSampleCount(this, TT, oT) : this._engine.updateRenderTargetTextureSampleCount(this, TT);
        return this._samples = TT, iT
      }
      resolveMSAATextures() {
        this.isMulti ? this._engine.resolveMultiFramebuffer(this) : this._engine.resolveFramebuffer(this)
      }
      generateMipMaps() {
        this._engine._currentRenderTarget === this && (this.isMulti ? this._engine.unBindMultiColorAttachmentFramebuffer(this, !0) : this._engine.unBindFramebuffer(this, !0)), this.isMulti ? this._engine.generateMipMapsMultiFramebuffer(this) : this._engine.generateMipMapsFramebuffer(this)
      }
      constructor(TT, oT, IT, iT, zT) {
        this._textures = null, this._faceIndices = null, this._layerIndices = null, this._samples = 1, this._attachments = null, this._generateStencilBuffer = !1, this._generateDepthBuffer = !1, this._depthStencilTextureWithStencil = !1, this.disableAutomaticMSAAResolve = !1, this.resolveMSAAColors = !0, this.resolveMSAADepth = !1, this.resolveMSAAStencil = !1, this.depthReadOnly = !1, this.stencilReadOnly = !1, this._isMulti = TT, this._isCube = oT, this._size = IT, this._engine = iT, this._depthStencilTexture = null, this.label = zT
      }
      setTextures(TT) {
        Array.isArray(TT) ? this._textures = TT : this._textures = TT ? [TT] : null
      }
      setTexture(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          IT = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._textures || (this._textures = []), this._textures[oT] !== TT && (this._textures[oT] && IT && this._textures[oT].dispose(), this._textures[oT] = TT)
      }
      setLayerAndFaceIndices(TT, oT) {
        this._layerIndices = TT, this._faceIndices = oT
      }
      setLayerAndFaceIndex() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          oT = arguments.length > 1 ? arguments[1] : void 0,
          IT = arguments.length > 2 ? arguments[2] : void 0;
        this._layerIndices || (this._layerIndices = []), this._faceIndices || (this._faceIndices = []), void 0 !== oT && oT >= 0 && (this._layerIndices[TT] = oT), void 0 !== IT && IT >= 0 && (this._faceIndices[TT] = IT)
      }
      createDepthStencilTexture() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          oT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          IT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          iT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          kT = arguments.length > 5 ? arguments[5] : void 0;
        return this._depthStencilTexture?.dispose(), this._depthStencilTextureWithStencil = IT, this._depthStencilTextureLabel = kT, this._depthStencilTexture = this._engine.createDepthStencilTexture(this._size, {
          bilinearFiltering: oT,
          comparisonFunction: TT,
          generateStencil: IT,
          isCube: this._isCube,
          samples: iT,
          depthTextureFormat: zT,
          label: kT
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
          const oT = this.textures;
          if (oT && oT.length > 0) {
            let IT = !1,
              iT = oT.length,
              zT = -1;
            const kT = oT[oT.length - 1]._source;
            14 !== kT && 12 !== kT || (IT = !0, zT = oT[oT.length - 1].format, iT--);
            const WT = [],
              XT = [],
              BT = [],
              FT = [],
              ST = [],
              DT = [],
              LT = [],
              xT = {};
            for (let TT = 0; TT < iT; ++TT) {
              const IT = oT[TT];
              WT.push(IT.samplingMode), XT.push(IT.type), BT.push(IT.format);
              void 0 !== xT[IT.uniqueId] ? (FT.push(-1), LT.push(0)) : (xT[IT.uniqueId] = TT, IT.is2DArray ? (FT.push(35866), LT.push(IT.depth)) : IT.isCube ? (FT.push(34067), LT.push(0)) : IT.is3D ? (FT.push(32879), LT.push(IT.depth)) : (FT.push(3553), LT.push(0))), this._faceIndices && ST.push(this._faceIndices[TT] ?? 0), this._layerIndices && DT.push(this._layerIndices[TT] ?? 0)
            }
            const cT = {
                samplingModes: WT,
                generateMipMaps: oT[0].generateMipMaps,
                generateDepthBuffer: this._generateDepthBuffer,
                generateStencilBuffer: this._generateStencilBuffer,
                generateDepthTexture: IT,
                depthTextureFormat: zT,
                types: XT,
                formats: BT,
                wWT: iT,
                targetTypes: FT,
                faceIndex: ST,
                layerIndex: DT,
                layerCounts: LT,
                label: this.label
              },
              KT = {
                width: this.width,
                height: this.height,
                depth: this.depth
              };
            TT = this._engine.createMultipleRenderTarget(KT, cT);
            for (let MT = 0; MT < iT; ++MT) {
              if (-1 !== FT[MT]) continue;
              const IT = xT[oT[MT].uniqueId];
              TT.setTexture(TT.textures[IT], MT)
            }
          }
        } else {
          const oT = {};
          if (oT.generateDepthBuffer = this._generateDepthBuffer, oT.generateMipMaps = this.texture?.generateMipMaps ?? !1, oT.generateStencilBuffer = this._generateStencilBuffer, oT.samplingMode = this.texture?.samplingMode, oT.type = this.texture?.type, oT.format = this.texture?.format, oT.noColorAttachment = !this._textures, oT.label = this.label, this.isCube) TT = this._engine.createRenderTargetCubeTexture(this.width, oT);
          else {
            const IT = {
              width: this.width,
              height: this.height,
              layers: this.is2DArray || this.is3D ? this.texture?.depth : void 0
            };
            TT = this._engine.createRenderTargetTexture(IT, oT)
          }
          TT.texture && (TT.texture.isReady = !0)
        }
        return TT
      }
      _swapRenderTargetWrapper(TT) {
        if (this._textures && TT._textures)
          for (let oT = 0; oT < this._textures.length; ++oT) this._textures[oT]._swapAndDie(TT._textures[oT], !1), TT._textures[oT].isReady = !0;
        this._depthStencilTexture && TT._depthStencilTexture && (this._depthStencilTexture._swapAndDie(TT._depthStencilTexture), TT._depthStencilTexture.isReady = !0), this._textures = null, this._depthStencilTexture = null
      }
      _rebuild() {
        const TT = this._cloneRenderTargetWrapper();
        if (TT) {
          if (this._depthStencilTexture) {
            const oT = this._depthStencilTexture.samplingMode,
              IT = this._depthStencilTexture.format,
              iT = 2 === oT || 3 === oT || 11 === oT;
            TT.createDepthStencilTexture(this._depthStencilTexture._comparisonFunction, iT, this._depthStencilTextureWithStencil, this._depthStencilTexture.samples, IT, this._depthStencilTextureLabel)
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
  39219: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => iT
    });
    class iT {
      static get ForceFullSceneLoadingForIncremental() {
        return iT._ForceFullSceneLoadingForIncremental
      }
      static set ForceFullSceneLoadingForIncremental(TT) {
        iT._ForceFullSceneLoadingForIncremental = TT
      }
      static get ShowLoadingScreen() {
        return iT._ShowLoadingScreen
      }
      static set ShowLoadingScreen(TT) {
        iT._ShowLoadingScreen = TT
      }
      static get loggingLevel() {
        return iT._LoggingLevel
      }
      static set loggingLevel(TT) {
        iT._LoggingLevel = TT
      }
      static get CleanBoneMatrixWeights() {
        return iT._CleanBoneMatrixWeights
      }
      static set CleanBoneMatrixWeights(TT) {
        iT._CleanBoneMatrixWeights = TT
      }
    }
    iT._ForceFullSceneLoadingForIncremental = !1, iT._ShowLoadingScreen = !0, iT._CleanBoneMatrixWeights = !1, iT._LoggingLevel = 0
  },
  38867: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => WT
    });
    var iT = IT(37660);
    const zT = new Map;

    function kT(TT, oT) {
      (function(TT) {
        return zT.delete(TT)
      })(TT) && iT.d.Warn(`Extension with the name '${TT}' already exists`), zT.set(TT, oT)
    }

    function WT(TT, oT) {
      "image/ktx" !== oT && "image/ktx2" !== oT || (TT = ".ktx"), zT.has(TT) || (TT.endsWith(".ies") && kT(".ies", (async () => await IT.e(299).then((() => IT(40602))).then((TT => new TT._IESTextureLoader)))), TT.endsWith(".dds") && kT(".dds", (async () => await IT.e(297).then((() => IT(40604))).then((TT => new TT._DDSTextureLoader)))), TT.endsWith(".basis") && kT(".basis", (async () => await IT.e(300).then((() => IT(40613))).then((TT => new TT._BasisTextureLoader)))), TT.endsWith(".env") && kT(".env", (async () => await Promise.all([IT.e(301), IT.e(298)]).then((() => IT(40616))).then((TT => new TT._ENVTextureLoader)))), TT.endsWith(".hdr") && kT(".hdr", (async () => await IT.e(302).then((() => IT(40650))).then((TT => new TT._HDRTextureLoader)))), (TT.endsWith(".ktx") || TT.endsWith(".ktx2")) && (kT(".ktx", (async () => await IT.e(303).then((() => IT(40656))).then((TT => new TT._KTXTextureLoader)))), kT(".ktx2", (async () => await IT.e(303).then((() => IT(40656))).then((TT => new TT._KTXTextureLoader))))), TT.endsWith(".tga") && kT(".tga", (async () => await IT.e(304).then((() => IT(40665))).then((TT => new TT._TGATextureLoader)))), TT.endsWith(".exr") && kT(".exr", (async () => await IT.e(305).then((() => IT(40672))).then((TT => new TT._ExrTextureLoader)))));
      const iT = zT.get(TT);
      return iT ? Promise.resolve(iT(oT)) : null
    }
  },
  39238: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => WT,
      d: () => FT
    });
    var iT = IT(39068),
      zT = IT(38808),
      kT = IT(36166);
    class WT extends iT.c {
      get i_() {
        return this._subMaterials
      }
      set i_(TT) {
        this._subMaterials = TT, this._hookArray(TT)
      }
      getChildren() {
        return this.i_
      }
      constructor(TT, oT) {
        super(TT, oT, !0), this._waitingSubMaterialsUniqueIds = [], this.pC().addMultiMaterial(this), this.i_ = [], this._storeEffectOnSubMeshes = !0
      }
      _hookArray(TT) {
        var oT = this;
        const IT = TT.push;
        TT.push = function() {
          for (var iT = arguments.length, zT = new Array(iT), kT = 0; kT < iT; kT++) zT[kT] = arguments[kT];
          const WT = IT.apply(TT, zT);
          return oT._markAllSubMeshesAsTexturesDirty(), WT
        };
        const iT = TT.splice;
        TT.splice = (oT, IT) => {
          const zT = iT.call(TT, oT, IT ?? TT.length);
          return this._markAllSubMeshesAsTexturesDirty(), zT
        }
      }
      getSubMaterial(TT) {
        return TT < 0 || TT >= this.i_.length ? this.pC().defaultMaterial : this.i_[TT]
      }
      getActiveTextures() {
        return super.getActiveTextures().concat(...this.i_.map((TT => TT ? TT.getActiveTextures() : [])))
      }
      hasTexture(TT) {
        if (super.hasTexture(TT)) return !0;
        for (let oT = 0; oT < this.i_.length; oT++)
          if (this.i_[oT]?.hasTexture(TT)) return !0;
        return !1
      }
      getClassName() {
        return "MultiMaterial"
      }
      isReadyForSubMesh(TT, oT, IT) {
        for (let iT = 0; iT < this.i_.length; iT++) {
          const zT = this.i_[iT];
          if (zT) {
            if (zT._storeEffectOnSubMeshes) {
              if (!zT.isReadyForSubMesh(TT, oT, IT)) return !1;
              continue
            }
            if (!zT.isReady(TT)) return !1
          }
        }
        return !0
      }
      clone(TT, oT) {
        const IT = new WT(TT, this.pC());
        for (let iT = 0; iT < this.i_.length; iT++) {
          let zT;
          const kT = this.i_[iT];
          zT = oT && kT ? kT.clone(TT + "-" + kT.name) : this.i_[iT], IT.i_.push(zT)
        }
        return IT
      }
      serialize() {
        const TT = {};
        TT.name = this.name, TT.id = this.id, TT.uniqueId = this.uniqueId, zT.c && (TT.tags = zT.c.GetTags(this)), TT.materialsUniqueIds = [], TT.materials = [];
        for (let oT = 0; oT < this.i_.length; oT++) {
          const IT = this.i_[oT];
          IT ? (TT.materialsUniqueIds.push(IT.uniqueId), TT.materials.push(IT.id)) : (TT.materialsUniqueIds.push(null), TT.materials.push(null))
        }
        return TT
      }
      dispose(TT, oT, IT) {
        const iT = this.pC();
        if (!iT) return;
        if (IT)
          for (let kT = 0; kT < this.i_.length; kT++) {
            const IT = this.i_[kT];
            IT && IT.dispose(TT, oT)
          }
        const zT = iT.multiMaterials.indexOf(this);
        zT >= 0 && iT.multiMaterials.splice(zT, 1), super.dispose(TT, oT)
      }
    }
    let XT = !1;

    function BT(TT, oT) {
      const IT = new WT(TT.name, oT);
      if (IT.id = TT.id, IT._loadedUniqueId = TT.uniqueId, zT.c && zT.c.AddTagsTo(IT, TT.tags), TT.materialsUniqueIds) IT._waitingSubMaterialsUniqueIds = TT.materialsUniqueIds;
      else
        for (const iT of TT.materials) IT.i_.push(oT.getLastMaterialById(iT));
      return IT
    }

    function FT() {
      XT || (XT = !0, WT.ParseMultiMaterial = BT, (0, kT.h)("BABYLON.MultiMaterial", WT))
    }
  },
  38997: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => WT
    });
    var iT, zT, kT = IT(36118);
    ! function(TT) {
      TT[TT.LOCAL = 0] = "LOCAL", TT[TT.WORLD = 1] = "WORLD", TT[TT.BONE = 2] = "BONE"
    }(iT || (iT = {}));
    class WT {}
    WT.X = new kT.m(1, 0, 0), WT.Y = new kT.m(0, 1, 0), WT.Z = new kT.m(0, 0, 1),
      function(TT) {
        TT[TT.X = 0] = "X", TT[TT.Y = 1] = "Y", TT[TT.Z = 2] = "Z"
      }(zT || (zT = {}))
  },
  38752: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => BT,
      c: () => FT
    });
    var iT = IT(36118);
    const zT = [Math.sqrt(1 / (4 * Math.PI)), -Math.sqrt(3 / (4 * Math.PI)), Math.sqrt(3 / (4 * Math.PI)), -Math.sqrt(3 / (4 * Math.PI)), Math.sqrt(15 / (4 * Math.PI)), -Math.sqrt(15 / (4 * Math.PI)), Math.sqrt(5 / (16 * Math.PI)), -Math.sqrt(15 / (4 * Math.PI)), Math.sqrt(15 / (16 * Math.PI))],
      kT = [() => 1, TT => TT.y, TT => TT.z, TT => TT.x, TT => TT.x * TT.y, TT => TT.y * TT.z, TT => 3 * TT.z * TT.z - 1, TT => TT.x * TT.z, TT => TT.x * TT.x - TT.y * TT.y],
      WT = (TT, oT) => zT[TT] * kT[TT](oT),
      XT = [Math.PI, 2 * Math.PI / 3, 2 * Math.PI / 3, 2 * Math.PI / 3, Math.PI / 4, Math.PI / 4, Math.PI / 4, Math.PI / 4, Math.PI / 4];
    class BT {
      constructor() {
        this.preScaled = !1, this.l00 = iT.m.Zero(), this.l1_1 = iT.m.Zero(), this.l10 = iT.m.Zero(), this.l11 = iT.m.Zero(), this.l2_2 = iT.m.Zero(), this.l2_1 = iT.m.Zero(), this.l20 = iT.m.Zero(), this.l21 = iT.m.Zero(), this.l22 = iT.m.Zero()
      }
      addLight(TT, oT, IT) {
        iT.i.sc[0].set(oT.r, oT.g, oT.b);
        const zT = iT.i.sc[0],
          kT = iT.i.sc[1];
        zT.scaleToRef(IT, kT), kT.scaleToRef(WT(0, TT), iT.i.sc[2]), this.l00.addInPlace(iT.i.sc[2]), kT.scaleToRef(WT(1, TT), iT.i.sc[2]), this.l1_1.addInPlace(iT.i.sc[2]), kT.scaleToRef(WT(2, TT), iT.i.sc[2]), this.l10.addInPlace(iT.i.sc[2]), kT.scaleToRef(WT(3, TT), iT.i.sc[2]), this.l11.addInPlace(iT.i.sc[2]), kT.scaleToRef(WT(4, TT), iT.i.sc[2]), this.l2_2.addInPlace(iT.i.sc[2]), kT.scaleToRef(WT(5, TT), iT.i.sc[2]), this.l2_1.addInPlace(iT.i.sc[2]), kT.scaleToRef(WT(6, TT), iT.i.sc[2]), this.l20.addInPlace(iT.i.sc[2]), kT.scaleToRef(WT(7, TT), iT.i.sc[2]), this.l21.addInPlace(iT.i.sc[2]), kT.scaleToRef(WT(8, TT), iT.i.sc[2]), this.l22.addInPlace(iT.i.sc[2])
      }
      scaleInPlace(TT) {
        this.l00.scaleInPlace(TT), this.l1_1.scaleInPlace(TT), this.l10.scaleInPlace(TT), this.l11.scaleInPlace(TT), this.l2_2.scaleInPlace(TT), this.l2_1.scaleInPlace(TT), this.l20.scaleInPlace(TT), this.l21.scaleInPlace(TT), this.l22.scaleInPlace(TT)
      }
      convertIncidentRadianceToIrradiance() {
        this.l00.scaleInPlace(XT[0]), this.l1_1.scaleInPlace(XT[1]), this.l10.scaleInPlace(XT[2]), this.l11.scaleInPlace(XT[3]), this.l2_2.scaleInPlace(XT[4]), this.l2_1.scaleInPlace(XT[5]), this.l20.scaleInPlace(XT[6]), this.l21.scaleInPlace(XT[7]), this.l22.scaleInPlace(XT[8])
      }
      convertIrradianceToLambertianRadiance() {
        this.scaleInPlace(1 / Math.PI)
      }
      preScaleForRendering() {
        this.preScaled = !0, this.l00.scaleInPlace(zT[0]), this.l1_1.scaleInPlace(zT[1]), this.l10.scaleInPlace(zT[2]), this.l11.scaleInPlace(zT[3]), this.l2_2.scaleInPlace(zT[4]), this.l2_1.scaleInPlace(zT[5]), this.l20.scaleInPlace(zT[6]), this.l21.scaleInPlace(zT[7]), this.l22.scaleInPlace(zT[8])
      }
      updateFromArray(TT) {
        return iT.m.FromArrayToRef(TT[0], 0, this.l00), iT.m.FromArrayToRef(TT[1], 0, this.l1_1), iT.m.FromArrayToRef(TT[2], 0, this.l10), iT.m.FromArrayToRef(TT[3], 0, this.l11), iT.m.FromArrayToRef(TT[4], 0, this.l2_2), iT.m.FromArrayToRef(TT[5], 0, this.l2_1), iT.m.FromArrayToRef(TT[6], 0, this.l20), iT.m.FromArrayToRef(TT[7], 0, this.l21), iT.m.FromArrayToRef(TT[8], 0, this.l22), this
      }
      updateFromFloatsArray(TT) {
        return iT.m.FromFloatsToRef(TT[0], TT[1], TT[2], this.l00), iT.m.FromFloatsToRef(TT[3], TT[4], TT[5], this.l1_1), iT.m.FromFloatsToRef(TT[6], TT[7], TT[8], this.l10), iT.m.FromFloatsToRef(TT[9], TT[10], TT[11], this.l11), iT.m.FromFloatsToRef(TT[12], TT[13], TT[14], this.l2_2), iT.m.FromFloatsToRef(TT[15], TT[16], TT[17], this.l2_1), iT.m.FromFloatsToRef(TT[18], TT[19], TT[20], this.l20), iT.m.FromFloatsToRef(TT[21], TT[22], TT[23], this.l21), iT.m.FromFloatsToRef(TT[24], TT[25], TT[26], this.l22), this
      }
      static FromArray(TT) {
        return (new BT).updateFromArray(TT)
      }
      static FromPolynomial(TT) {
        const oT = new BT;
        return oT.l00 = TT.xx.scale(.376127).add(TT.yy.scale(.376127)).add(TT.zz.scale(.376126)), oT.l1_1 = TT.y.scale(.977204), oT.l10 = TT.z.scale(.977204), oT.l11 = TT.x.scale(.977204), oT.l2_2 = TT.xy.scale(1.16538), oT.l2_1 = TT.yz.scale(1.16538), oT.l20 = TT.zz.scale(1.34567).subtract(TT.xx.scale(.672834)).subtract(TT.yy.scale(.672834)), oT.l21 = TT.zx.scale(1.16538), oT.l22 = TT.xx.scale(1.16538).subtract(TT.yy.scale(1.16538)), oT.l1_1.scaleInPlace(-1), oT.l11.scaleInPlace(-1), oT.l2_1.scaleInPlace(-1), oT.l21.scaleInPlace(-1), oT.scaleInPlace(Math.PI), oT
      }
    }
    class FT {
      constructor() {
        this.x = iT.m.Zero(), this.y = iT.m.Zero(), this.z = iT.m.Zero(), this.xx = iT.m.Zero(), this.yy = iT.m.Zero(), this.zz = iT.m.Zero(), this.xy = iT.m.Zero(), this.yz = iT.m.Zero(), this.zx = iT.m.Zero()
      }
      get preScaledHarmonics() {
        return this._harmonics || (this._harmonics = BT.FromPolynomial(this)), this._harmonics.preScaled || this._harmonics.preScaleForRendering(), this._harmonics
      }
      addAmbient(TT) {
        iT.i.sc[0].S_(TT.r, TT.g, TT.b);
        const oT = iT.i.sc[0];
        this.xx.addInPlace(oT), this.yy.addInPlace(oT), this.zz.addInPlace(oT)
      }
      scaleInPlace(TT) {
        this.x.scaleInPlace(TT), this.y.scaleInPlace(TT), this.z.scaleInPlace(TT), this.xx.scaleInPlace(TT), this.yy.scaleInPlace(TT), this.zz.scaleInPlace(TT), this.yz.scaleInPlace(TT), this.zx.scaleInPlace(TT), this.xy.scaleInPlace(TT)
      }
      updateFromHarmonics(TT) {
        return this._harmonics = TT, this.x.SIT(TT.l11), this.x.scaleInPlace(1.02333).scaleInPlace(-1), this.y.SIT(TT.l1_1), this.y.scaleInPlace(1.02333).scaleInPlace(-1), this.z.SIT(TT.l10), this.z.scaleInPlace(1.02333), this.xx.SIT(TT.l00), iT.i.sc[0].SIT(TT.l20).scaleInPlace(.247708), iT.i.sc[1].SIT(TT.l22).scaleInPlace(.429043), this.xx.scaleInPlace(.886277).SiT(iT.i.sc[0]).addInPlace(iT.i.sc[1]), this.yy.SIT(TT.l00), this.yy.scaleInPlace(.886277).SiT(iT.i.sc[0]).SiT(iT.i.sc[1]), this.zz.SIT(TT.l00), iT.i.sc[0].SIT(TT.l20).scaleInPlace(.495417), this.zz.scaleInPlace(.886277).addInPlace(iT.i.sc[0]), this.yz.SIT(TT.l2_1), this.yz.scaleInPlace(.858086).scaleInPlace(-1), this.zx.SIT(TT.l21), this.zx.scaleInPlace(.858086).scaleInPlace(-1), this.xy.SIT(TT.l2_2), this.xy.scaleInPlace(.858086), this.scaleInPlace(1 / Math.PI), this
      }
      static FromHarmonics(TT) {
        return (new FT).updateFromHarmonics(TT)
      }
      static FromArray(TT) {
        const oT = new FT;
        return iT.m.FromArrayToRef(TT[0], 0, oT.x), iT.m.FromArrayToRef(TT[1], 0, oT.y), iT.m.FromArrayToRef(TT[2], 0, oT.z), iT.m.FromArrayToRef(TT[3], 0, oT.xx), iT.m.FromArrayToRef(TT[4], 0, oT.yy), iT.m.FromArrayToRef(TT[5], 0, oT.zz), iT.m.FromArrayToRef(TT[6], 0, oT.yz), iT.m.FromArrayToRef(TT[7], 0, oT.zx), iT.m.FromArrayToRef(TT[8], 0, oT.xy), oT
      }
    }
  },
  39230: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => JT,
      f: () => aT
    });
    var iT = IT(38764),
      zT = IT(36149),
      kT = IT(36118),
      WT = IT(38923),
      XT = IT(39210),
      BT = IT(39233),
      FT = IT(38918),
      ST = IT(39091),
      DT = IT(38911);
    class LT {
      constructor() {
        this._checkCollisions = !1, this._collisionMask = -1, this._collisionGroup = -1, this._surroundingMeshes = null, this._collider = null, this._oldPositionForCollisions = new kT.m(0, 0, 0), this._diffPositionForCollisions = new kT.m(0, 0, 0), this._collisionResponse = !0
      }
    }
    var xT, cT, KT, MT = IT(38643),
      rT = IT(38853),
      AT = IT(39102),
      gT = IT(36177),
      hT = IT(36125),
      wT = IT(38997),
      mT = IT(37660),
      eT = IT(38773),
      RT = IT(38659),
      uT = IT(36166);

    function vT(TT, oT) {
      return TT - Math.floor(TT / oT) * oT
    }

    function ET(TT, oT, IT) {
      TT instanceof Float32Array ? kT.b.FromArrayToRef(TT, oT, IT) : IT.S_((0, rT.b)(TT[oT]), (0, rT.b)(TT[oT + 1]), (0, rT.b)(TT[oT + 2]), (0, rT.b)(TT[oT + 3]), (0, rT.b)(TT[oT + 4]), (0, rT.b)(TT[oT + 5]), (0, rT.b)(TT[oT + 6]), (0, rT.b)(TT[oT + 7]), (0, rT.b)(TT[oT + 8]), (0, rT.b)(TT[oT + 9]), (0, rT.b)(TT[oT + 10]), (0, rT.b)(TT[oT + 11]), (0, rT.b)(TT[oT + 12]), (0, rT.b)(TT[oT + 13]), (0, rT.b)(TT[oT + 14]), (0, rT.b)(TT[oT + 15]))
    }

    function fT(TT, oT, IT, iT, zT, XT, BT, FT, ST) {
      const DT = IT.texture,
        LT = DT?.getInternalTexture(),
        xT = LT?._bufferView;
      if (!(xT instanceof Float32Array) && !(xT instanceof Uint16Array)) return mT.d.Warn("Baked vertex animation bounding info requires CPU-readable Float32Array or Uint16Array texture data.", 1), !1;
      const cT = DT.getSize(),
        KT = function(TT, oT) {
          const IT = TT.y - TT.x + 1,
            iT = oT * TT.w / IT,
            zT = iT < 1 ? 0 : 1,
            kT = IT - zT;
          let WT = vT(iT - Math.floor(iT), 1) * kT;
          return WT = vT(WT + TT.z, kT), Math.floor(WT) + TT.x + zT
        }(iT, IT.time);
      if (!isFinite(KT) || KT < 0 || KT >= cT.height) return mT.d.Warn("Baked vertex animation bounding info could not be refreshed because the computed frame is outside the texture.", 1), !1;
      const MT = kT.i.sc[0],
        rT = kT.i.Matrix[0],
        AT = kT.i.Matrix[1],
        gT = KT * cT.width * 4,
        hT = oT === WT.i.NormalKind ? kT.m.TransformNormalFromFloatsToRef : kT.m.TransformCoordinatesFromFloatsToRef;
      for (let kT = 0, WT = 0; kT < TT.length; kT += 3, WT += 4) {
        let oT, IT;
        for (rT.reset(), oT = 0; oT < 4 && oT < ST; oT++) IT = XT[WT + oT], IT > 0 && (ET(xT, gT + 16 * Math.floor(zT[WT + oT]), AT), AT.scaleAndAddToRef(IT, rT));
        if (BT && FT)
          for (oT = 0; oT < 4 && oT + 4 < ST; oT++) IT = FT[WT + oT], IT > 0 && (ET(xT, gT + 16 * Math.floor(BT[WT + oT]), AT), AT.scaleAndAddToRef(IT, rT));
        hT(TT[kT], TT[kT + 1], TT[kT + 2], rT, MT), MT.toArray(TT, kT)
      }
      return !0
    }
    class CT {
      constructor() {
        this.facetNb = 0, this.partitioningSubdivisions = 10, this.partitioningBBoxRatio = 1.01, this.facetDataEnabled = !1, this.facetParameters = {}, this.bbSize = kT.m.Zero(), this.subDiv = {
          max: 1,
          X: 1,
          Y: 1,
          Z: 1
        }, this.facetDepthSort = !1, this.facetDepthSortEnabled = !1
      }
    }
    class jT {
      constructor() {
        this._hasVertexAlpha = !1, this._useVertexColors = !0, this._numBoneInfluencers = 4, this._applyFog = !0, this._receiveShadows = !1, this._facetData = new CT, this._visibility = 1, this._skeleton = null, this._layerMask = 268435455, this._computeBonesUsingShaders = !0, this._isActive = !1, this._onlyForInstances = !1, this._isActiveIntermediate = !1, this._onlyForInstancesIntermediate = !1, this._actAsRegularMesh = !1, this._currentLOD = new Map, this._collisionRetryCount = 3, this._morphTargetManager = null, this._renderingGroupId = 0, this._meshBlendingTag = 0, this._bakedVertexAnimationManager = null, this._material = null, this._positions = null, this._pointerOverDisableMeshTesting = !1, this._meshCollisionData = new LT, this._enableDistantPicking = !1, this._rawBoundingInfo = null, this._sideOrientationHint = !1, this._wasActiveLastFrame = !1
      }
    }
    let JT = (() => {
        var TT;
        let oT, LT = BT.g,
          xT = [];
        return TT = class extends LT {
          static get BILLBOARDMODE_NONE() {
            return BT.g.BILLBOARDMODE_NONE
          }
          static get BILLBOARDMODE_X() {
            return BT.g.BILLBOARDMODE_X
          }
          static get BILLBOARDMODE_Y() {
            return BT.g.BILLBOARDMODE_Y
          }
          static get BILLBOARDMODE_Z() {
            return BT.g.BILLBOARDMODE_Z
          }
          static get BILLBOARDMODE_ALL() {
            return BT.g.BILLBOARDMODE_ALL
          }
          static get BILLBOARDMODE_USE_POSITION() {
            return BT.g.BILLBOARDMODE_USE_POSITION
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
          set cL(TT) {
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
            const oT = this._internalAbstractMeshDataInfo._visibility;
            this._internalAbstractMeshDataInfo._visibility = TT, (1 === oT && 1 !== TT || 1 !== oT && 1 === TT) && this._markSubMeshesAsDirty((TT => {
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
            this._internalAbstractMeshDataInfo._material !== TT && (this._internalAbstractMeshDataInfo._material && this._internalAbstractMeshDataInfo._material.meshMap && (this._internalAbstractMeshDataInfo._material.meshMap[this.uniqueId] = void 0), this._internalAbstractMeshDataInfo._material = TT, TT && TT.meshMap && (TT.meshMap[this.uniqueId] = this), this.onMaterialChangedObservable.hasObservers() && this.onMaterialChangedObservable.notifyObservers(this), this.pR && (this.resetDrawCache(void 0, null == TT), this._unBindEffect()))
          }
          getMaterialForRenderPass(TT) {
            return this._internalAbstractMeshDataInfo._materialForRenderPass?.[TT]
          }
          setMaterialForRenderPass(TT, oT) {
            this.resetDrawCache(TT), this._internalAbstractMeshDataInfo._materialForRenderPass || (this._internalAbstractMeshDataInfo._materialForRenderPass = []);
            const IT = this._internalAbstractMeshDataInfo._materialForRenderPass[TT];
            IT?.meshMap?.[this.uniqueId] && (IT.meshMap[this.uniqueId] = void 0), this._internalAbstractMeshDataInfo._materialForRenderPass[TT] = oT, oT && oT.meshMap && (oT.meshMap[this.uniqueId] = this)
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
            const oT = this._internalAbstractMeshDataInfo._skeleton;
            oT && oT.needInitialSkinMatrix && oT._unregisterMeshWithPoseMatrix(this), TT && TT.needInitialSkinMatrix && TT._registerMeshWithPoseMatrix(this), this._internalAbstractMeshDataInfo._skeleton = TT, this._internalAbstractMeshDataInfo._skeleton || (this._bonesTransformMatrices = null), this._markSubMeshesAsAttributesDirty()
          }
          get skeleton() {
            return this._internalAbstractMeshDataInfo._skeleton
          }
          constructor(oT) {
            var IT;
            let iT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            switch (super(oT, iT, !1), IT = this, this._internalAbstractMeshDataInfo = new jT, this._waitingMaterialId = null, this._waitingMorphTargetManagerId = null, this._waitingSkeletonId = null, this._waitingSkeletonUniqueId = null, this.cullingStrategy = TT.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY, this.onCollideObservable = new zT.d, this.onCollisionPositionChangeObservable = new zT.d, this.onMaterialChangedObservable = new zT.d, this.definedFacingForward = !0, this._occlusionQuery = null, this._renderingGroup = null, this.alphaIndex = Number.MAX_VALUE, this.dK = TT.DefaultIsPickable, this.isNearPickable = !1, this.isNearGrabbable = !1, this.showSubMeshesBoundingBox = !1, this.isBlocker = !1, this.enablePointerMoveEvents = !1, this.outlineColor = gT.e.Red(), this.outlineWidth = .02, this.overlayColor = gT.e.Red(), this.overlayAlpha = .5, this.useOctreeForRenderingSelection = !0, this.useOctreeForPicking = !0, this.useOctreeForCollisions = !0, this.lc = !1, this.Gc = !1, this.actionManager = null, this.ellipsoid = new kT.m(.5, 1, .5), this.ellipsoidOffset = new kT.m(0, 0, 0), this.edgesWidth = 1, this.edgesColor = new gT.i(1, 0, 0, 1), this._edgesRenderer = null, this._masterMesh = null, this._boundingInfo = null, this._boundingInfoIsDirty = !0, this._renderId = 0, this._intersectionsInProgress = new Array, this._unIndexed = !1, this._lightSources = new Array, this._waitingData = {
                lods: null,
                actions: null,
                LJ: null
              }, this._bonesTransformMatrices = null, this._transformMatrixTexture = null, this.onRebuildObservable = new zT.d, this._onCollisionPositionChange = function(TT, oT) {
                let iT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                oT.subtractToRef(IT._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions, IT._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions), IT._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions.length() > RT.b.CollisionsEpsilon && IT.position.addInPlace(IT._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions), iT && IT.onCollideObservable.notifyObservers(iT), IT.onCollisionPositionChangeObservable.notifyObservers(IT.position)
              }, iT = this.pC(), this.layerMask = iT.defaultRenderableLayerMask, iT.tIT(this), this._resyncLightSources(), this._uniformBuffer = new DT.e(this.pC().Zc(), void 0, void 0, oT, !this.pC().Zc().isWebGPU), this._buildUniformLayout(), iT.performancePriority) {
              case 2:
                this.Gc = !0;
              case 1:
                this.lc = !0, this.dK = !1
            }
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("world", 16), this._uniformBuffer.addUniform("visibility", 1), this._uniformBuffer.create()
          }
          transferToEffect(TT) {
            const oT = this._uniformBuffer;
            oT.Y1("world", TT), oT.updateFloat("visibility", this._internalAbstractMeshDataInfo._visibility), oT.update()
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
            let oT = "Name: " + this.name + ", isInstance: " + ("InstancedMesh" === this.getClassName() ? "YES" : "NO");
            oT += ", # of submeshes: " + (this.pR ? this.pR.length : 0);
            const IT = this._internalAbstractMeshDataInfo._skeleton;
            return IT && (oT += ", skeleton: " + IT.name), TT && (oT += ", billboard mode: " + ["NONE", "X", "Y", null, "Z", null, null, "ALL"][this.billboardMode], oT += ", freeze wrld mat: " + (this._isWorldMatrixFrozen || this._waitingData.LJ ? "YES" : "NO")), oT
          }
          _getEffectiveParent() {
            return this._masterMesh && this.billboardMode !== BT.g.BILLBOARDMODE_NONE ? this._masterMesh : super._getEffectiveParent()
          }
          _getActionManagerForTrigger(TT) {
            let oT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            if (this.actionManager && (oT || this.actionManager.isRecursive)) {
              if (!TT) return this.actionManager;
              if (this.actionManager.hasSpecificTrigger(TT)) return this.actionManager
            }
            return this.parent ? this.parent._getActionManagerForTrigger(TT, !1) : null
          }
          _releaseRenderPassId(TT) {}
          _rebuild() {
            if (this.onRebuildObservable.notifyObservers(this), null !== this._occlusionQuery && (this._occlusionQuery = null), this.pR) {
              for (const TT of this.pR) TT._rebuild();
              this.resetDrawCache()
            }
          }
          _resyncLightSources() {
            this._lightSources.length = 0;
            for (const TT of this.pC().lights) TT.isEnabled() && TT.canAffectMesh(this) && this._lightSources.push(TT);
            this._markSubMeshesAsLightDirty()
          }
          _resyncLightSource(TT) {
            const oT = TT.isEnabled() && TT.canAffectMesh(this),
              IT = this._lightSources.indexOf(TT);
            let iT = !1;
            if (-1 === IT) {
              if (!oT) return;
              this._lightSources.push(TT)
            } else {
              if (oT) return;
              iT = !0, this._lightSources.splice(IT, 1)
            }
            this._markSubMeshesAsLightDirty(iT)
          }
          _unBindEffect() {
            for (const TT of this.pR) TT.setEffect(null)
          }
          _removeLightSource(TT, oT) {
            const IT = this._lightSources.indexOf(TT); - 1 !== IT && (this._lightSources.splice(IT, 1), this._markSubMeshesAsLightDirty(oT))
          }
          _markSubMeshesAsDirty(TT) {
            if (this.pR)
              for (const oT of this.pR)
                for (let IT = 0; IT < oT._drawWrappers.length; ++IT) {
                  const iT = oT._drawWrappers[IT];
                  iT && iT.defines && iT.defines.markAllAsDirty && TT(iT.defines)
                }
          }
          _markSubMeshesAsLightDirty() {
            let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            this._markSubMeshesAsDirty((oT => oT.markAsLightDirty(TT)))
          }
          _markSubMeshesAsAttributesDirty() {
            this._markSubMeshesAsDirty((TT => TT.markAsAttributesDirty()))
          }
          _markSubMeshesAsMiscDirty() {
            this._markSubMeshesAsDirty((TT => TT.markAsMiscDirty()))
          }
          roT(TT) {
            return this._currentRenderId = Number.MAX_VALUE, super.roT(TT), this._isDirty = !0, this
          }
          resetDrawCache(TT) {
            let oT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (this.pR)
              for (const IT of this.pR) IT.resetDrawCache(TT, oT)
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
          hWT() {
            return null
          }
          getVerticesData(TT) {
            return null
          }
          setVerticesData(TT, oT, IT, iT) {
            return this
          }
          updateVerticesData(TT, oT, IT, iT) {
            return this
          }
          setIndices(TT, oT) {
            return this
          }
          isVerticesDataPresent(TT) {
            return !1
          }
          GJ() {
            return this._masterMesh ? this._masterMesh.GJ() : (this._boundingInfoIsDirty && (this._boundingInfoIsDirty = !1, this._updateBoundingInfo()), this._boundingInfo)
          }
          getRawBoundingInfo() {
            return this.rawBoundingInfo ?? this.GJ()
          }
          setBoundingInfo(TT) {
            return this._boundingInfo = TT, this
          }
          get hasBoundingInfo() {
            return null !== this._boundingInfo
          }
          buildBoundingInfo(TT, oT, IT) {
            return this._boundingInfo = new ST.d(TT, oT, IT), this._boundingInfo
          }
          normalizeToUnitCube() {
            let TT = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
              oT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              IT = arguments.length > 2 ? arguments[2] : void 0;
            return super.normalizeToUnitCube(TT, oT, IT)
          }
          get useBones() {
            return this.skeleton && this.pC().skeletonsEnabled && this.isVerticesDataPresent(WT.i.MatricesIndicesKind) && this.isVerticesDataPresent(WT.i.MatricesWeightsKind)
          }
          _preActivate() {}
          _preActivateForIntermediateRendering(TT) {}
          _activate(TT, oT) {
            return this._renderId = TT, !0
          }
          _postActivate() {}
          _freeze() {}
          _unFreeze() {}
          getWorldMatrix() {
            return this._masterMesh && this.billboardMode === BT.g.BILLBOARDMODE_NONE ? this._masterMesh.getWorldMatrix() : super.getWorldMatrix()
          }
          _getWorldMatrixDeterminant() {
            return this._masterMesh ? this._masterMesh._getWorldMatrixDeterminant() : super._getWorldMatrixDeterminant()
          }
          get yC() {
            return !1
          }
          get OiT() {
            return !1
          }
          get hasThinInstances() {
            return !1
          }
          movePOV(TT, oT, IT) {
            return this.position.addInPlace(this.calcMovePOV(TT, oT, IT)), this
          }
          calcMovePOV(TT, oT, IT) {
            const iT = new kT.b;
            (this.rotationQuaternion ? this.rotationQuaternion : kT.c.RotationYawPitchRoll(this.rotation.y, this.rotation.x, this.rotation.z)).toRotationMatrix(iT);
            const zT = kT.m.Zero(),
              WT = this.definedFacingForward ? -1 : 1;
            return kT.m.TransformCoordinatesFromFloatsToRef(TT * WT, oT, IT * WT, iT, zT), zT
          }
          rotatePOV(TT, oT, IT) {
            return this.rotation.addInPlace(this.calcRotatePOV(TT, oT, IT)), this
          }
          calcRotatePOV(TT, oT, IT) {
            const iT = this.definedFacingForward ? 1 : -1;
            return new kT.m(TT * iT, oT, IT * iT)
          }
          _refreshBoundingInfo(TT, oT) {
            if (TT) {
              const IT = (0, AT.e)(TT, 0, this.getTotalVertices(), oT);
              this._boundingInfo ? this._boundingInfo.reConstruct(IT.minimum, IT.maximum) : this._boundingInfo = new ST.d(IT.minimum, IT.maximum)
            }
            if (this.pR)
              for (let IT = 0; IT < this.pR.length; IT++) this.pR[IT].refreshBoundingInfo(TT);
            this._updateBoundingInfo()
          }
          _refreshBoundingInfoDirect(TT) {
            if (this._boundingInfo ? this._boundingInfo.reConstruct(TT.minimum, TT.maximum) : this._boundingInfo = new ST.d(TT.minimum, TT.maximum), this.pR)
              for (let oT = 0; oT < this.pR.length; oT++) this.pR[oT].refreshBoundingInfo(null);
            this._updateBoundingInfo()
          }
          static _ApplySkeleton(TT, oT, IT, iT, zT, XT, BT) {
            ! function(TT, oT, IT, iT, zT, XT, BT) {
              const FT = kT.i.sc[0],
                ST = kT.i.Matrix[0],
                DT = kT.i.Matrix[1],
                LT = oT === WT.i.NormalKind ? kT.m.TransformNormalFromFloatsToRef : kT.m.TransformCoordinatesFromFloatsToRef;
              for (let WT = 0, xT = 0; WT < TT.length; WT += 3, xT += 4) {
                let oT, cT;
                for (ST.reset(), oT = 0; oT < 4; oT++) cT = zT[xT + oT], cT > 0 && (kT.b.FromFloat32ArrayToRefScaled(IT, Math.floor(16 * iT[xT + oT]), cT, DT), ST.addToSelf(DT));
                if (XT && BT)
                  for (oT = 0; oT < 4; oT++) cT = BT[xT + oT], cT > 0 && (kT.b.FromFloat32ArrayToRefScaled(IT, Math.floor(16 * XT[xT + oT]), cT, DT), ST.addToSelf(DT));
                LT(TT[WT], TT[WT + 1], TT[WT + 2], ST, FT), FT.toArray(TT, WT)
              }
            }(TT, oT, IT, iT, zT, XT, BT)
          }
          _getData(oT, IT) {
            let iT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : WT.i.PositionKind;
            const zT = oT.cache,
              XT = TT => {
                if (zT) {
                  const oT = zT._vertexData || (zT._vertexData = {});
                  return oT[TT] || this.copyVerticesData(TT, oT), oT[TT]
                }
                return this.getVerticesData(TT)
              };
            if (IT || (IT = XT(iT)), !IT) return null;
            zT ? (zT._outputData ? zT._outputData.set(IT) : zT._outputData = new Float32Array(IT), IT = zT._outputData) : (oT.applyMorph && this.morphTargetManager || oT.applySkeleton && this.skeleton || oT.applyBakedVertexAnimation && this.bakedVertexAnimationManager?.isEnabled) && (IT = IT.slice()), oT.applyMorph && this.morphTargetManager && function(TT, oT, IT) {
              let iT;
              switch (oT) {
                case WT.i.PositionKind:
                  iT = TT => TT.getPositions();
                  break;
                case WT.i.NormalKind:
                  iT = TT => TT.getNormals();
                  break;
                case WT.i.TangentKind:
                  iT = TT => TT.getTangents();
                  break;
                case WT.i.UVKind:
                  iT = TT => TT.getUVs();
                  break;
                case WT.i.UV2Kind:
                  iT = TT => TT.getUV2s();
                  break;
                case WT.i.ColorKind:
                  iT = TT => TT.getColors();
                  break;
                default:
                  return
              }
              for (let zT = 0; zT < TT.length; zT++) {
                let oT = TT[zT];
                for (let kT = 0; kT < IT.numTargets; kT++) {
                  const WT = IT.getTarget(kT),
                    XT = WT.influence;
                  if (0 !== XT) {
                    const IT = iT(WT);
                    IT && (oT += (IT[zT] - TT[zT]) * XT)
                  }
                }
                TT[zT] = oT
              }
            }(IT, iT, this.morphTargetManager);
            const BT = this.bakedVertexAnimationManager;
            let FT = !1;
            if (oT.applyBakedVertexAnimation && BT?.isEnabled) {
              const TT = XT(WT.i.MatricesIndicesKind),
                zT = XT(WT.i.MatricesWeightsKind);
              if (zT && TT) {
                const kT = this.numBoneInfluencers > 4,
                  ST = kT ? XT(WT.i.MatricesIndicesExtraKind) : null,
                  DT = kT ? XT(WT.i.MatricesWeightsExtraKind) : null;
                FT = fT(IT, iT, BT, oT.bakedVertexAnimationSettings ?? BT.animationParameters, TT, zT, ST, DT, this.numBoneInfluencers)
              }
            }
            if (!FT && oT.applySkeleton && this.skeleton) {
              const oT = XT(WT.i.MatricesIndicesKind),
                zT = XT(WT.i.MatricesWeightsKind);
              if (zT && oT) {
                const kT = this.numBoneInfluencers > 4,
                  BT = kT ? XT(WT.i.MatricesIndicesExtraKind) : null,
                  FT = kT ? XT(WT.i.MatricesWeightsExtraKind) : null,
                  ST = this.skeleton.getTransformMatrices(this);
                TT._ApplySkeleton(IT, iT, ST, oT, zT, BT, FT)
              }
            }
            if (!1 !== oT.updatePositionsArray && iT === WT.i.PositionKind) {
              const TT = this._internalAbstractMeshDataInfo._positions || [],
                oT = TT.length;
              if (TT.length = IT.length / 3, oT < TT.length)
                for (let IT = oT; IT < TT.length; IT++) TT[IT] = new kT.m;
              for (let iT = 0, zT = 0; iT < TT.length; iT++, zT += 3) TT[iT].S_(IT[zT], IT[zT + 1], IT[zT + 2]);
              this._internalAbstractMeshDataInfo._positions = TT
            }
            return IT
          }
          getNormalsData() {
            let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              oT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return this._getData({
              applySkeleton: TT,
              applyMorph: oT,
              updatePositionsArray: !1
            }, null, WT.i.NormalKind)
          }
          Gl() {
            let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              oT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            return this._getData({
              applySkeleton: TT,
              applyMorph: oT,
              updatePositionsArray: !1
            }, IT, WT.i.PositionKind)
          }
          _updateBoundingInfo() {
            return this._boundingInfo ? this._boundingInfo.update(this.worldMatrixFromCache) : this._boundingInfo = new ST.d(kT.m.Zero(), kT.m.Zero(), this.worldMatrixFromCache), this._updateSubMeshesBoundingInfo(this.worldMatrixFromCache), this
          }
          _updateSubMeshesBoundingInfo(TT) {
            if (!this.pR) return this;
            const oT = this.pR.length;
            for (let IT = 0; IT < oT; IT++) {
              const iT = this.pR[IT];
              (oT > 1 || !iT.IsGlobal) && iT.updateBoundingInfo(TT)
            }
            return this
          }
          _afterComputeWorldMatrix() {
            this.Gc || (this._boundingInfoIsDirty = !0)
          }
          isInFrustum(TT) {
            return this.GJ().isInFrustum(TT, this.cullingStrategy)
          }
          isCompletelyInFrustum(TT) {
            return this.GJ().isCompletelyInFrustum(TT)
          }
          jiT(TT) {
            let oT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              IT = arguments.length > 2 ? arguments[2] : void 0;
            const iT = this.GJ(),
              zT = TT.GJ();
            if (iT.intersects(zT, oT)) return !0;
            if (IT)
              for (const kT of this.getChildMeshes())
                if (kT.jiT(TT, oT, !0)) return !0;
            return !1
          }
          intersectsPoint(TT) {
            return this.GJ().intersectsPoint(TT)
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
            let oT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            this.getAbsolutePosition().addToRef(this.ellipsoidOffset, this._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions);
            const IT = this.pC().collisionCoordinator;
            return this._internalAbstractMeshDataInfo._meshCollisionData._collider || (this._internalAbstractMeshDataInfo._meshCollisionData._collider = IT.createCollider()), this._internalAbstractMeshDataInfo._meshCollisionData._collider._radius = this.ellipsoid, IT.getNewPosition(this._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions, TT, this._internalAbstractMeshDataInfo._meshCollisionData._collider, this.collisionRetryCount, this, this._onCollisionPositionChange, this.uniqueId, oT), this
          }
          _collideForSubMesh(TT, oT, IT) {
            if (this._generatePointsArray(), !this._positions) return this;
            if (!TT._lastColliderWorldVertices || !TT._lastColliderTransformMatrix.equals(oT)) {
              TT._lastColliderTransformMatrix = oT.clone(), TT._lastColliderWorldVertices = [], TT._trianglePlanes = [];
              const IT = TT.verticesStart,
                iT = TT.verticesStart + TT.verticesCount;
              for (let zT = IT; zT < iT; zT++) TT._lastColliderWorldVertices.push(kT.m.TransformCoordinates(this._positions[zT], oT))
            }
            return IT._collide(TT._trianglePlanes, TT._lastColliderWorldVertices, this.hWT(), TT.indexStart, TT.indexStart + TT.indexCount, TT.verticesStart, !!TT.bc(), this, this._shouldConvertRHS(), 7 === TT.bc()?.fillMode), this
          }
          _processCollisionsForSubMeshes(TT, oT) {
            const IT = this._scene.getCollidingSubMeshCandidates(this, TT),
              iT = IT.length;
            for (let zT = 0; zT < iT; zT++) {
              const kT = IT.data[zT];
              iT > 1 && !kT._checkCollision(TT) || this._collideForSubMesh(kT, oT, TT)
            }
            return this
          }
          _shouldConvertRHS() {
            return !1
          }
          _checkCollision(TT) {
            if (!this.GJ()._checkCollision(TT)) return this;
            const oT = kT.i.Matrix[0],
              IT = kT.i.Matrix[1];
            return kT.b.ScalingToRef(1 / TT._radius.x, 1 / TT._radius.y, 1 / TT._radius.z, oT), this.worldMatrixFromCache.multiplyToRef(oT, IT), this._processCollisionsForSubMeshes(TT, IT), this
          }
          _generatePointsArray() {
            return !1
          }
          intersects(TT, oT, IT) {
            let iT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              zT = arguments.length > 4 ? arguments[4] : void 0,
              WT = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
            const XT = new FT.d,
              BT = this.getClassName(),
              ST = "InstancedLinesMesh" === BT || "LinesMesh" === BT || "GreasedLineMesh" === BT ? this.intersectionThreshold : 0,
              DT = this.GJ();
            if (!this.pR) return XT;
            if (!WT && (!TT.intersectsSphere(DT.KiT, ST) || !TT.intersectsBox(DT.boundingBox, ST))) return XT;
            if (iT) return XT.hit = !WT, XT.pickedMesh = WT ? null : this, XT.distance = WT ? 0 : kT.m.Distance(TT.origin, DT.KiT.center), XT.subMeshId = 0, XT;
            if (!this._generatePointsArray()) return XT;
            let LT = null;
            const xT = this._scene.getIntersectingSubMeshCandidates(this, TT),
              cT = xT.length;
            let KT = !1;
            for (let kT = 0; kT < cT; kT++) {
              const TT = xT.data[kT].bc();
              if (TT && (7 == TT.fillMode || 0 == TT.fillMode || 1 == TT.fillMode || 2 == TT.fillMode || 4 == TT.fillMode)) {
                KT = !0;
                break
              }
            }
            if (!KT) return XT.hit = !0, XT.pickedMesh = this, XT.distance = kT.m.Distance(TT.origin, DT.KiT.center), XT.subMeshId = -1, XT;
            for (let kT = 0; kT < cT; kT++) {
              const iT = xT.data[kT];
              if (cT > 1 && !WT && !iT.canIntersects(TT)) continue;
              const zT = iT.intersects(TT, this._positions, this.hWT(), oT, IT);
              if (zT && (oT || !LT || zT.distance < LT.distance) && (LT = zT, LT.subMeshId = iT._id, LT._internalSubMeshId = kT, oT)) break
            }
            if (LT) {
              const oT = zT ?? this.getWorldMatrix(),
                IT = kT.i.sc[0],
                iT = kT.i.sc[1];
              kT.m.TransformCoordinatesToRef(TT.origin, oT, IT), TT.direction.scaleToRef(LT.distance, iT);
              const WT = kT.m.TransformNormal(iT, oT).addInPlace(IT);
              return XT.hit = !0, XT.distance = kT.m.Distance(IT, WT), XT.pickedPoint = WT, XT.pickedMesh = this, XT.bu = LT.bu || 0, XT.bv = LT.bv || 0, XT.subMeshFaceId = LT.faceId, XT.faceId = LT.faceId + xT.data[LT._internalSubMeshId].indexStart / (-1 !== this.getClassName().indexOf("LinesMesh") ? 2 : 3), XT.subMeshId = LT.subMeshId, XT
            }
            return XT
          }
          clone(TT, oT, IT) {
            return null
          }
          releaseSubMeshes() {
            let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (this.pR)
              for (; this.pR.length;) this.pR[0].dispose(TT);
            else this.pR = [];
            return this
          }
          dispose(TT) {
            let oT, IT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            const iT = this.pC();
            for (this._scene.useMaterialMeshMap && this._internalAbstractMeshDataInfo._material && this._internalAbstractMeshDataInfo._material.meshMap && (this._internalAbstractMeshDataInfo._material.meshMap[this.uniqueId] = void 0), iT.freeActiveMeshes(), iT.freeRenderingGroups(), iT.renderingManager.maintainStateBetweenFrames && iT.renderingManager.restoreDispachedFlags(), void 0 !== this.actionManager && null !== this.actionManager && (this.actionManager.disposeWhenUnowned && !this._scene.meshes.some((TT => TT !== this && TT.actionManager === this.actionManager)) && this.actionManager.dispose(), this.actionManager = null), this._internalAbstractMeshDataInfo._skeleton = null, this._transformMatrixTexture && (this._transformMatrixTexture.dispose(), this._transformMatrixTexture = null), oT = 0; oT < this._intersectionsInProgress.length; oT++) {
              const TT = this._intersectionsInProgress[oT],
                IT = TT._intersectionsInProgress.indexOf(this);
              TT._intersectionsInProgress.splice(IT, 1)
            }
            this._intersectionsInProgress.length = 0;
            const zT = iT.lights;
            for (const WT of zT) {
              let TT = WT.includedOnlyMeshes.indexOf(this); - 1 !== TT && WT.includedOnlyMeshes.splice(TT, 1), TT = WT.excludedMeshes.indexOf(this), -1 !== TT && WT.excludedMeshes.splice(TT, 1);
              const oT = WT.getShadowGenerators();
              if (oT) {
                const IT = oT.values();
                for (let oT = IT.next(); !0 !== oT.done; oT = IT.next()) {
                  const IT = oT.value.getShadowMap();
                  IT && IT.renderList && (TT = IT.renderList.indexOf(this), -1 !== TT && IT.renderList.splice(TT, 1))
                }
              }
            }
            this.releaseSubMeshes(iT._isDisposing);
            const kT = iT.Zc();
            if (null !== this._occlusionQuery && (this.isOcclusionQueryInProgress = !1, kT.deleteQuery(this._occlusionQuery), this._occlusionQuery = null), kT.wipeCaches(), iT.KJ(this), this._parentContainer) {
              const TT = this._parentContainer.meshes.indexOf(this);
              TT > -1 && this._parentContainer.meshes.splice(TT, 1), this._parentContainer = null
            }
            if (IT && this.material && ("MultiMaterial" === this.material.getClassName() ? this.material.dispose(!1, !0, !0) : this.material.dispose(!1, !0)), !TT)
              for (oT = 0; oT < iT.bR.length; oT++) iT.bR[oT].emitter === this && (iT.bR[oT].dispose(), oT--);
            this._internalAbstractMeshDataInfo._facetData.facetDataEnabled && this.disableFacetData(), this._uniformBuffer.dispose(), this.onAfterWorldMatrixUpdateObservable.clear(), this.onCollideObservable.clear(), this.onCollisionPositionChangeObservable.clear(), this.onRebuildObservable.clear(), super.dispose(TT, IT)
          }
          _initFacetData() {
            const TT = this._internalAbstractMeshDataInfo._facetData;
            TT.facetNormals || (TT.facetNormals = []), TT.facetPositions || (TT.facetPositions = []), TT.facetPartitioning || (TT.facetPartitioning = new Array), TT.facetNb = this.hWT().length / 3 | 0, TT.partitioningSubdivisions = TT.partitioningSubdivisions ? TT.partitioningSubdivisions : 10, TT.partitioningBBoxRatio = TT.partitioningBBoxRatio ? TT.partitioningBBoxRatio : 1.01;
            for (let oT = 0; oT < TT.facetNb; oT++) TT.facetNormals[oT] = kT.m.Zero(), TT.facetPositions[oT] = kT.m.Zero();
            return TT.facetDataEnabled = !0, this
          }
          updateFacetData() {
            const TT = this._internalAbstractMeshDataInfo._facetData;
            TT.facetDataEnabled || this._initFacetData();
            const oT = this.getVerticesData(WT.i.PositionKind),
              IT = this.hWT(),
              iT = this.getVerticesData(WT.i.NormalKind)?.slice(),
              zT = this.GJ();
            if (TT.facetDepthSort && !TT.facetDepthSortEnabled) {
              if (TT.facetDepthSortEnabled = !0, IT instanceof Uint16Array) TT.depthSortedIndices = new Uint16Array(IT);
              else if (IT instanceof Uint32Array) TT.depthSortedIndices = new Uint32Array(IT);
              else {
                let oT = !1;
                for (let TT = 0; TT < IT.length; TT++)
                  if (IT[TT] > 65535) {
                    oT = !0;
                    break
                  } TT.depthSortedIndices = oT ? new Uint32Array(IT) : new Uint16Array(IT)
              }
              if (TT.facetDepthSortFunction = function(TT, oT) {
                  return oT.sqDistance - TT.sqDistance
                }, !TT.facetDepthSortFrom) {
                const oT = this.pC().activeCamera;
                TT.facetDepthSortFrom = oT ? oT.position : kT.m.Zero()
              }
              TT.depthSortedFacets = [];
              for (let oT = 0; oT < TT.facetNb; oT++) {
                const IT = {
                  ind: 3 * oT,
                  sqDistance: 0
                };
                TT.depthSortedFacets.push(IT)
              }
              TT.invertedMatrix = kT.b.Identity(), TT.facetDepthSortOrigin = kT.m.Zero()
            }
            TT.bbSize.x = zT.maximum.x - zT.minimum.x > hT.d ? zT.maximum.x - zT.minimum.x : hT.d, TT.bbSize.y = zT.maximum.y - zT.minimum.y > hT.d ? zT.maximum.y - zT.minimum.y : hT.d, TT.bbSize.z = zT.maximum.z - zT.minimum.z > hT.d ? zT.maximum.z - zT.minimum.z : hT.d;
            let BT = TT.bbSize.x > TT.bbSize.y ? TT.bbSize.x : TT.bbSize.y;
            if (BT = BT > TT.bbSize.z ? BT : TT.bbSize.z, TT.subDiv.max = TT.partitioningSubdivisions, TT.subDiv.X = Math.floor(TT.subDiv.max * TT.bbSize.x / BT), TT.subDiv.Y = Math.floor(TT.subDiv.max * TT.bbSize.y / BT), TT.subDiv.Z = Math.floor(TT.subDiv.max * TT.bbSize.z / BT), TT.subDiv.X = TT.subDiv.X < 1 ? 1 : TT.subDiv.X, TT.subDiv.Y = TT.subDiv.Y < 1 ? 1 : TT.subDiv.Y, TT.subDiv.Z = TT.subDiv.Z < 1 ? 1 : TT.subDiv.Z, TT.facetParameters.facetNormals = this.getFacetLocalNormals(), TT.facetParameters.facetPositions = this.getFacetLocalPositions(), TT.facetParameters.facetPartitioning = this.getFacetLocalPartitioning(), TT.facetParameters.bInfo = zT, TT.facetParameters.bbSize = TT.bbSize, TT.facetParameters.subDiv = TT.subDiv, TT.facetParameters.ratio = this.partitioningBBoxRatio, TT.facetParameters.depthSort = TT.facetDepthSort, TT.facetDepthSort && TT.facetDepthSortEnabled && (this.computeWorldMatrix(!0), this._worldMatrix.invertToRef(TT.invertedMatrix), kT.m.TransformCoordinatesToRef(TT.facetDepthSortFrom, TT.invertedMatrix, TT.facetDepthSortOrigin), TT.facetParameters.distanceTo = TT.facetDepthSortOrigin), TT.facetParameters.depthSortedFacets = TT.depthSortedFacets, iT && XT.c.ComputeNormals(oT, IT, iT, TT.facetParameters), TT.facetDepthSort && TT.facetDepthSortEnabled) {
              TT.depthSortedFacets.sort(TT.facetDepthSortFunction);
              const oT = TT.depthSortedIndices.length / 3 | 0;
              for (let iT = 0; iT < oT; iT++) {
                const oT = TT.depthSortedFacets[iT].ind;
                TT.depthSortedIndices[3 * iT] = IT[oT], TT.depthSortedIndices[3 * iT + 1] = IT[oT + 1], TT.depthSortedIndices[3 * iT + 2] = IT[oT + 2]
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
            const oT = kT.m.Zero();
            return this.getFacetPositionToRef(TT, oT), oT
          }
          getFacetPositionToRef(TT, oT) {
            const IT = this.getFacetLocalPositions()[TT],
              iT = this.getWorldMatrix();
            return kT.m.TransformCoordinatesToRef(IT, iT, oT), this
          }
          getFacetNormal(TT) {
            const oT = kT.m.Zero();
            return this.getFacetNormalToRef(TT, oT), oT
          }
          getFacetNormalToRef(TT, oT) {
            const IT = this.getFacetLocalNormals()[TT];
            return kT.m.TransformNormalToRef(IT, this.getWorldMatrix(), oT), this
          }
          getFacetsAtLocalCoordinates(TT, oT, IT) {
            const iT = this.GJ(),
              zT = this._internalAbstractMeshDataInfo._facetData,
              kT = Math.floor((TT - iT.minimum.x * zT.partitioningBBoxRatio) * zT.subDiv.X * zT.partitioningBBoxRatio / zT.bbSize.x),
              WT = Math.floor((oT - iT.minimum.y * zT.partitioningBBoxRatio) * zT.subDiv.Y * zT.partitioningBBoxRatio / zT.bbSize.y),
              XT = Math.floor((IT - iT.minimum.z * zT.partitioningBBoxRatio) * zT.subDiv.Z * zT.partitioningBBoxRatio / zT.bbSize.z);
            return kT < 0 || kT > zT.subDiv.max || WT < 0 || WT > zT.subDiv.max || XT < 0 || XT > zT.subDiv.max ? null : zT.facetPartitioning[kT + zT.subDiv.max * WT + zT.subDiv.max * zT.subDiv.max * XT]
          }
          getClosestFacetAtCoordinates(TT, oT, IT, iT) {
            let zT = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              WT = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
            const XT = this.getWorldMatrix(),
              BT = kT.i.Matrix[5];
            XT.invertToRef(BT);
            const FT = kT.i.sc[8];
            kT.m.TransformCoordinatesFromFloatsToRef(TT, oT, IT, BT, FT);
            const ST = this.getClosestFacetAtLocalCoordinates(FT.x, FT.y, FT.z, iT, zT, WT);
            return iT && kT.m.TransformCoordinatesFromFloatsToRef(iT.x, iT.y, iT.z, XT, iT), ST
          }
          getClosestFacetAtLocalCoordinates(TT, oT, IT, iT) {
            let zT, kT, WT, XT, BT, FT, ST, DT, LT = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              xT = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
              cT = null;
            const KT = this.getFacetLocalPositions(),
              MT = this.getFacetLocalNormals(),
              rT = this.getFacetsAtLocalCoordinates(TT, oT, IT);
            if (!rT) return null;
            let AT, gT, hT, wT, mT = Number.MAX_VALUE;
            for (let eT = 0; eT < rT.length; eT++) gT = rT[eT], hT = MT[gT], wT = KT[gT], XT = (TT - wT.x) * hT.x + (oT - wT.y) * hT.y + (IT - wT.z) * hT.z, (!LT || LT && xT && XT >= 0 || LT && !xT && XT <= 0) && (XT = hT.x * wT.x + hT.y * wT.y + hT.z * wT.z, BT = -(hT.x * TT + hT.y * oT + hT.z * IT - XT) / (hT.x * hT.x + hT.y * hT.y + hT.z * hT.z), FT = TT + hT.x * BT, ST = oT + hT.y * BT, DT = IT + hT.z * BT, zT = FT - TT, kT = ST - oT, WT = DT - IT, AT = zT * zT + kT * kT + WT * WT, AT < mT && (mT = AT, cT = gT, iT && (iT.x = FT, iT.y = ST, iT.z = DT)));
            return cT
          }
          getFacetDataParameters() {
            return this._internalAbstractMeshDataInfo._facetData.facetParameters
          }
          disableFacetData() {
            const TT = this._internalAbstractMeshDataInfo._facetData;
            return TT.facetDataEnabled && (TT.facetDataEnabled = !1, TT.facetPositions = [], TT.facetNormals = [], TT.facetPartitioning = new Array, TT.facetParameters = {}, TT.depthSortedIndices = new Uint32Array(0)), this
          }
          updateIndices(TT, oT) {
            return this
          }
          createNormals(TT) {
            const oT = this.getVerticesData(WT.i.PositionKind),
              IT = this.hWT();
            let iT;
            return iT = this.isVerticesDataPresent(WT.i.NormalKind) ? this.getVerticesData(WT.i.NormalKind) : [], XT.c.ComputeNormals(oT, IT, iT, {
              useRightHandedSystem: this.pC().useRightHandedSystem
            }), this.setVerticesData(WT.i.NormalKind, iT, TT), this
          }
          async optimizeIndicesAsync() {
            const TT = this.hWT();
            if (!TT) return this;
            const {
              OptimizeIndices: oT
            } = await IT.e(341).then((() => IT(41352)));
            return oT(TT), this.setIndices(TT, this.getTotalVertices()), this
          }
          alignWithNormal(TT, oT) {
            oT || (oT = wT.d.Y);
            const IT = kT.i.sc[0],
              iT = kT.i.sc[1];
            return kT.m.CrossToRef(oT, TT, iT), kT.m.CrossToRef(TT, iT, IT), this.rotationQuaternion ? kT.c.RotationQuaternionFromAxisToRef(IT, TT, iT, this.rotationQuaternion) : kT.m.RotationFromAxisToRef(IT, TT, iT, this.rotation), this
          }
          _checkOcclusionQuery() {
            return !1
          }
          disableEdgesRendering() {
            throw (0, MT.k)("EdgesRenderer")
          }
          enableEdgesRendering(TT, oT, IT) {
            throw (0, MT.k)("EdgesRenderer")
          }
          getConnectedParticleSystems() {
            return this._scene.bR.filter((TT => TT.emitter === this))
          }
        }, (() => {
          const IT = "function" === typeof Symbol && Symbol.metadata ? Object.create(LT[Symbol.metadata] ?? null) : void 0;
          oT = [eT.l.filter((function() {
            return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0]) && !Array.isArray(arguments.length <= 3 ? void 0 : arguments[3]) && !Array.isArray(arguments.length <= 4 ? void 0 : arguments[4]) && !Array.isArray(arguments.length <= 5 ? void 0 : arguments[5]) && !Array.isArray(arguments.length <= 6 ? void 0 : arguments[6])
          }))], (0, iT.h)(TT, null, oT, {
            kind: "method",
            name: "_ApplySkeleton",
            static: !0,
            private: !1,
            access: {
              has: TT => "_ApplySkeleton" in TT,
              get: TT => TT._ApplySkeleton
            },
            metadata: IT
          }, null, xT), IT && Object.defineProperty(TT, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: IT
          })
        })(), TT.OCCLUSION_TYPE_NONE = ((0, iT.j)(TT, xT), 0), TT.OCCLUSION_TYPE_OPTIMISTIC = 1, TT.OCCLUSION_TYPE_STRICT = 2, TT.OCCLUSION_ALGORITHM_TYPE_ACCURATE = 0, TT.OCCLUSION_ALGORITHM_TYPE_CONSERVATIVE = 1, TT.CULLINGSTRATEGY_STANDARD = 0, TT.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY = 1, TT.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION = 2, TT.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION_THEN_BSPHERE_ONLY = 3, TT.DefaultIsPickable = !0, TT
      })(),
      UT = !1;

    function aT() {
      UT || (UT = !0, (0, uT.h)("BABYLON.AbstractMesh", JT))
    }(xT = JT.prototype).createOrUpdateSubmeshesOctree ?? (xT.createOrUpdateSubmeshesOctree = (0, MT.i)("AbstractMesh", "createOrUpdateSubmeshesOctree")), (cT = JT.prototype).getPhysicsImpostor ?? (cT.getPhysicsImpostor = (0, MT.i)("AbstractMesh", "getPhysicsImpostor")), (KT = JT.prototype).setPhysicsLinkWith ?? (KT.setPhysicsLinkWith = (0, MT.i)("AbstractMesh", "setPhysicsLinkWith")), Object.getOwnPropertyDescriptor(JT.prototype, "occlusionRetryCount") || Object.defineProperty(JT.prototype, "occlusionRetryCount", (0, MT.f)("AbstractMesh", "occlusionRetryCount")), Object.getOwnPropertyDescriptor(JT.prototype, "occlusionType") || Object.defineProperty(JT.prototype, "occlusionType", (0, MT.f)("AbstractMesh", "occlusionType")), Object.getOwnPropertyDescriptor(JT.prototype, "occlusionQueryAlgorithmType") || Object.defineProperty(JT.prototype, "occlusionQueryAlgorithmType", (0, MT.f)("AbstractMesh", "occlusionQueryAlgorithmType")), Object.getOwnPropertyDescriptor(JT.prototype, "isOccluded") || Object.defineProperty(JT.prototype, "isOccluded", (0, MT.f)("AbstractMesh", "isOccluded")), Object.getOwnPropertyDescriptor(JT.prototype, "isOcclusionQueryInProgress") || Object.defineProperty(JT.prototype, "isOcclusionQueryInProgress", (0, MT.f)("AbstractMesh", "isOcclusionQueryInProgress")), Object.getOwnPropertyDescriptor(JT.prototype, "forceRenderingWhenOccluded") || Object.defineProperty(JT.prototype, "forceRenderingWhenOccluded", (0, MT.f)("AbstractMesh", "forceRenderingWhenOccluded")), Object.getOwnPropertyDescriptor(JT.prototype, "occlusionForRenderPassId") || Object.defineProperty(JT.prototype, "occlusionForRenderPassId", (0, MT.f)("AbstractMesh", "occlusionForRenderPassId")), Object.getOwnPropertyDescriptor(JT.prototype, "decalMap") || Object.defineProperty(JT.prototype, "decalMap", (0, MT.f)("AbstractMesh", "decalMap")), Object.getOwnPropertyDescriptor(JT.prototype, "HJ") || Object.defineProperty(JT.prototype, "HJ", (0, MT.f)("AbstractMesh", "HJ")), Object.getOwnPropertyDescriptor(JT.prototype, "physicsImpostor") || Object.defineProperty(JT.prototype, "physicsImpostor", (0, MT.f)("AbstractMesh", "physicsImpostor")), Object.getOwnPropertyDescriptor(JT.prototype, "showBoundingBox") || Object.defineProperty(JT.prototype, "showBoundingBox", (0, MT.f)("AbstractMesh", "showBoundingBox")), Object.getOwnPropertyDescriptor(JT.prototype, "edgesRenderer") || Object.defineProperty(JT.prototype, "edgesRenderer", (0, MT.f)("AbstractMesh", "edgesRenderer")), Object.getOwnPropertyDescriptor(JT.prototype, "renderOutline") || Object.defineProperty(JT.prototype, "renderOutline", (0, MT.f)("AbstractMesh", "renderOutline")), Object.getOwnPropertyDescriptor(JT.prototype, "renderOverlay") || Object.defineProperty(JT.prototype, "renderOverlay", (0, MT.f)("AbstractMesh", "renderOverlay"))
  },
  39212: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => rT
    });
    var iT = IT(36118),
      zT = IT(36177),
      kT = IT(39210),
      WT = IT(38923),
      XT = IT(39076),
      BT = IT(39219),
      FT = IT(39091),
      ST = IT(38886),
      DT = IT(37660),
      LT = IT(38808),
      xT = IT(39102),
      cT = IT(36146),
      KT = IT(39223),
      MT = IT(38851);
    class rT {
      get boundingBias() {
        return this._boundingBias
      }
      set boundingBias(TT) {
        this._boundingBias ? this._boundingBias.SIT(TT) : this._boundingBias = TT.clone(), this._updateBoundingInfo(!0, null)
      }
      static CreateGeometryForMesh(TT) {
        const oT = new rT(rT.RandomId(), TT.pC());
        return oT.applyToMesh(TT), oT
      }
      get meshes() {
        return this._meshes
      }
      constructor(TT, oT, IT) {
        let zT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          kT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          WT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        this.delayLoadState = 0, this._totalVertices = 0, this._isDisposed = !1, this._extend = {
          minimum: new iT.m(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE),
          maximum: new iT.m(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE)
        }, this._indexBufferIsUpdatable = !1, this._positionsCache = [], this._parentContainer = null, this.useBoundingInfoFromGeometry = !1, this._scene = oT || cT.d.LastCreatedScene, this._scene && (this.id = TT, this.uniqueId = this._scene.getUniqueId(), this._engine = this._scene.Zc(), this._meshes = [], this._vertexBuffers = {}, this._indices = [], this._updatable = zT, null !== WT && (this._totalVertices = WT), IT ? this.setAllVerticesData(IT, zT) : null === WT && (this._totalVertices = 0), this._engine.getCaps().vertexArrayObject && (this._vertexArrayObjects = {}), kT && (this.applyToMesh(kT), kT.computeWorldMatrix(!0)))
      }
      get extend() {
        return this._extend
      }
      pC() {
        return this._scene
      }
      Zc() {
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
        for (const oT in this._vertexBuffers) TT.add(this._vertexBuffers[oT].getWrapperBuffer());
        TT.forEach((TT => {
          TT._rebuild()
        }))
      }
      setAllVerticesData(TT, oT) {
        TT.applyToGeometry(this, oT), this._notifyUpdate()
      }
      setVerticesData(TT, oT) {
        let IT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          iT = arguments.length > 3 ? arguments[3] : void 0;
        IT && Array.isArray(oT) && (oT = new Float32Array(oT));
        const zT = new WT.i(this._engine, oT, TT, {
          updatable: IT,
          postponeInternalCreation: 0 === this._meshes.length,
          stride: iT,
          label: "Geometry_" + this.id + "_" + TT
        });
        this.setVerticesBuffer(zT)
      }
      removeVerticesData(TT) {
        this._vertexBuffers[TT] && (this._vertexBuffers[TT].dispose(), delete this._vertexBuffers[TT]), this._vertexArrayObjects && this._disposeVertexArrayObjects()
      }
      setVerticesBuffer(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          IT = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        const zT = TT.getKind();
        this._vertexBuffers[zT] && IT && this._vertexBuffers[zT].dispose(), TT._buffer && TT._ownsBuffer && TT._buffer._increaseReferences(), this._vertexBuffers[zT] = TT;
        const kT = this._meshes,
          XT = kT.length;
        if (zT === WT.i.PositionKind) {
          this._totalVertices = oT ?? TT._maxVerticesCount, this._updateExtend(this.useBoundingInfoFromGeometry && this._boundingInfo ? null : TT.getFloatData(this._totalVertices)), this._resetPointsArrayCache();
          const IT = this._extend && this._extend.minimum || new iT.m(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE),
            zT = this._extend && this._extend.maximum || new iT.m(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
          for (let TT = 0; TT < XT; TT++) {
            const oT = kT[TT];
            oT.buildBoundingInfo(IT, zT), oT._createGlobalSubMesh(oT.isUnIndexed), oT.computeWorldMatrix(!0), oT.synchronizeInstances()
          }
        }
        this._notifyUpdate(zT)
      }
      updateVerticesDataDirectly(TT, oT, IT) {
        let iT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const zT = this.getVertexBuffer(TT);
        zT && (zT.updateDirectly(oT, IT, iT), this._notifyUpdate(TT))
      }
      updateVerticesData(TT, oT) {
        let IT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const iT = this.getVertexBuffer(TT);
        iT && (iT.update(oT), TT === WT.i.PositionKind && this._updateBoundingInfo(IT, oT), this._notifyUpdate(TT))
      }
      _updateBoundingInfo(TT, oT) {
        if (TT && this._updateExtend(oT), this._resetPointsArrayCache(), TT) {
          const TT = this._meshes;
          for (const oT of TT) {
            oT.hasBoundingInfo ? oT.GJ().reConstruct(this._extend.minimum, this._extend.maximum) : oT.buildBoundingInfo(this._extend.minimum, this._extend.maximum);
            const TT = oT.pR;
            for (const oT of TT) oT.refreshBoundingInfo()
          }
        }
      }
      _bind(TT, oT, IT, iT) {
        if (!TT) return;
        void 0 === oT && (oT = this._indexBuffer);
        const zT = this.getVertexBuffers();
        if (!zT) return;
        if (oT != this._indexBuffer || !this._vertexArrayObjects && !iT) return void this._engine.bindBuffers(zT, oT, TT, IT);
        const kT = iT || this._vertexArrayObjects,
          WT = this._engine;
        kT[TT.key] || (kT[TT.key] = WT.recordVertexArrayObject(zT, oT, TT, IT)), WT.bindVertexArrayObject(kT[TT.key], oT)
      }
      getTotalVertices() {
        return this.isReady() ? this._totalVertices : 0
      }
      getVerticesData(TT, oT, IT) {
        const iT = this.getVertexBuffer(TT);
        return iT ? iT.getFloatData(this._totalVertices, IT || oT && 1 !== this._meshes.length) : null
      }
      copyVerticesData(TT, oT) {
        const IT = this.getVertexBuffer(TT);
        if (!IT) return;
        oT[TT] || (oT[TT] = new Float32Array(this._totalVertices * IT.getSize()));
        const iT = IT.getData();
        iT && (0, MT.e)(iT, IT.getSize(), IT.type, IT.byteOffset, IT.byteStride, IT.normalized, this._totalVertices, oT[TT])
      }
      isVertexBufferUpdatable(TT) {
        const oT = this._vertexBuffers[TT];
        return !!oT && oT.isUpdatable()
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
        let oT;
        if (!this._vertexBuffers && this._delayInfo)
          for (oT in this._delayInfo) TT.push(oT);
        else
          for (oT in this._vertexBuffers) TT.push(oT);
        return TT
      }
      updateIndices(TT, oT) {
        let IT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this._indexBuffer)
          if (this._indexBufferIsUpdatable) {
            const iT = TT.length !== this._indices.length;
            if (IT || (this._indices = TT.slice()), this._engine.updateDynamicIndexBuffer(this._indexBuffer, TT, oT), iT)
              for (const TT of this._meshes) TT._createGlobalSubMesh(!0)
          } else this.setIndices(TT, null, !0)
      }
      setIndexBuffer(TT, oT, IT) {
        let iT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._indices = [], this._indexBufferIsUpdatable = !1, this._indexBuffer = TT, this._totalVertices = oT, this._totalIndices = IT, TT.is32Bits = null === iT ? oT > 65535 : iT;
        for (const zT of this._meshes) zT._createGlobalSubMesh(!0), zT.synchronizeInstances();
        this._notifyUpdate()
      }
      setIndices(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          IT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          iT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this._indexBuffer && this._engine._releaseBuffer(this._indexBuffer), this._indices = TT, this._indexBufferIsUpdatable = IT, 0 !== this._meshes.length && this._indices && (this._indexBuffer = this._engine.createIndexBuffer(this._indices, IT, "Geometry_" + this.id + "_IndexBuffer")), void 0 != oT && (this._totalVertices = oT);
        for (const zT of this._meshes) zT._createGlobalSubMesh(!iT), zT.synchronizeInstances();
        this._notifyUpdate()
      }
      getTotalIndices() {
        return this.isReady() ? void 0 !== this._totalIndices ? this._totalIndices : this._indices.length : 0
      }
      hWT(TT, oT) {
        if (!this.isReady()) return null;
        const IT = this._indices;
        return oT || TT && 1 !== this._meshes.length ? IT.slice() : IT
      }
      getIndexBuffer() {
        return this.isReady() ? this._indexBuffer : null
      }
      _releaseVertexArrayObject() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        TT && this._vertexArrayObjects && this._vertexArrayObjects[TT.key] && (this._engine.releaseVertexArrayObject(this._vertexArrayObjects[TT.key]), delete this._vertexArrayObjects[TT.key])
      }
      releaseForMesh(TT, oT) {
        const IT = this._meshes,
          iT = IT.indexOf(TT); - 1 !== iT && (IT.splice(iT, 1), this._vertexArrayObjects && TT._invalidateInstanceVertexArrayObject(), TT._geometry = null, 0 === IT.length && oT && this.dispose())
      }
      applyToMesh(TT) {
        if (TT._geometry === this) return;
        const oT = TT._geometry;
        oT && oT.releaseForMesh(TT), this._vertexArrayObjects && TT._invalidateInstanceVertexArrayObject();
        const IT = this._meshes;
        TT._geometry = this, TT._internalAbstractMeshDataInfo._positions = null, this._scene.pushGeometry(this), IT.push(TT), this.isReady() ? this._applyToMesh(TT) : this._boundingInfo && TT.setBoundingInfo(this._boundingInfo)
      }
      _updateExtend() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (this.useBoundingInfoFromGeometry && this._boundingInfo) this._extend = {
          minimum: this._boundingInfo.minimum.clone(),
          maximum: this._boundingInfo.maximum.clone()
        };
        else {
          if (!TT && (TT = this.getVerticesData(WT.i.PositionKind), !TT)) return;
          this._extend = (0, xT.e)(TT, 0, this._totalVertices, this.boundingBias, 3)
        }
      }
      _applyToMesh(TT) {
        for (const oT in this._vertexBuffers) {
          const IT = this._vertexBuffers[oT];
          IT._buffer.getBuffer() || IT.create(), oT === WT.i.PositionKind && (this._extend || this._updateExtend(), TT.buildBoundingInfo(this._extend.minimum, this._extend.maximum), TT._createGlobalSubMesh(TT.isUnIndexed), TT._updateBoundingInfo())
        }!this._indexBuffer && this._indices && this._indices.length > 0 && (this._indexBuffer = this._engine.createIndexBuffer(this._indices, this._updatable, "Geometry_" + this.id + "_IndexBuffer")), TT._syncGeometryWithMorphTargetManager(), TT.synchronizeInstances()
      }
      _notifyUpdate(TT) {
        this.onGeometryUpdated && this.onGeometryUpdated(this, TT), this._vertexArrayObjects && this._disposeVertexArrayObjects();
        for (const oT of this._meshes) oT._markSubMeshesAsAttributesDirty()
      }
      load(TT, oT) {
        2 !== this.delayLoadState && (this.isReady() ? oT && oT() : (this.delayLoadState = 2, this._queueLoad(TT, oT)))
      }
      _queueLoad(TT, oT) {
        this.delayLoadingFile && (TT.addPendingData(this), (async () => {
          try {
            const IT = await TT._loadDelayedFileAsync(this.delayLoadingFile, !1, !0);
            if (!this._delayLoadingFunction) return void TT.removePendingData(this);
            this._delayLoadingFunction(JSON.parse(IT), this), this.delayLoadState = 1, this._delayInfo = [], TT.removePendingData(this);
            const iT = this._meshes,
              zT = iT.length;
            for (let TT = 0; TT < zT; TT++) this._applyToMesh(iT[TT]);
            oT && oT()
          } catch (IT) {
            TT.removePendingData(this), TT.IIT || DT.d.Error(`Unable to delay load geometry "${this.id}" from "${this.delayLoadingFile}": ${IT}`)
          }
        })())
      }
      toLeftHanded() {
        const TT = this.hWT(!1);
        if (null != TT && TT.length > 0) {
          for (let oT = 0; oT < TT.length; oT += 3) {
            const IT = TT[oT + 0];
            TT[oT + 0] = TT[oT + 2], TT[oT + 2] = IT
          }
          this.setIndices(TT)
        }
        const oT = this.getVerticesData(WT.i.PositionKind, !1);
        if (null != oT && oT.length > 0) {
          for (let TT = 0; TT < oT.length; TT += 3) oT[TT + 2] = -oT[TT + 2];
          this.setVerticesData(WT.i.PositionKind, oT, !1)
        }
        const IT = this.getVerticesData(WT.i.NormalKind, !1);
        if (null != IT && IT.length > 0) {
          for (let TT = 0; TT < IT.length; TT += 3) IT[TT + 2] = -IT[TT + 2];
          this.setVerticesData(WT.i.NormalKind, IT, !1)
        }
      }
      _resetPointsArrayCache() {
        this._positions = null
      }
      _generatePointsArray() {
        if (this._positions) return !0;
        const TT = this.getVerticesData(WT.i.PositionKind);
        if (!TT || 0 === TT.length) return !1;
        for (let oT = 3 * this._positionsCache.length, IT = this._positionsCache.length; oT < TT.length; oT += 3, ++IT) this._positionsCache[IT] = iT.m.FromArray(TT, oT);
        for (let oT = 0, IT = 0; oT < TT.length; oT += 3, ++IT) this._positionsCache[IT].set(TT[0 + oT], TT[1 + oT], TT[2 + oT]);
        return this._positionsCache.length = TT.length / 3, this._positions = this._positionsCache, !0
      }
      IIT() {
        return this._isDisposed
      }
      _disposeVertexArrayObjects() {
        if (this._vertexArrayObjects) {
          for (const IT in this._vertexArrayObjects) this._engine.releaseVertexArrayObject(this._vertexArrayObjects[IT]);
          this._vertexArrayObjects = {};
          const TT = this._meshes,
            oT = TT.length;
          for (let IT = 0; IT < oT; IT++) TT[IT]._invalidateInstanceVertexArrayObject()
        }
      }
      dispose() {
        const TT = this._meshes,
          oT = TT.length;
        let IT;
        for (IT = 0; IT < oT; IT++) this.releaseForMesh(TT[IT]);
        this._meshes.length = 0, this._disposeVertexArrayObjects();
        for (const iT in this._vertexBuffers) this._vertexBuffers[iT].dispose();
        if (this._vertexBuffers = {}, this._totalVertices = 0, this._indexBuffer && this._engine._releaseBuffer(this._indexBuffer), this._indexBuffer = null, this._indices = [], this.delayLoadState = 0, this.delayLoadingFile = null, this._delayLoadingFunction = null, this._delayInfo = [], this._boundingInfo = null, this._scene.removeGeometry(this), this._parentContainer) {
          const TT = this._parentContainer.geometries.indexOf(this);
          TT > -1 && this._parentContainer.geometries.splice(TT, 1), this._parentContainer = null
        }
        this._isDisposed = !0
      }
      copy(TT) {
        const oT = new rT(TT, this._scene),
          IT = this.hWT(void 0, !0);
        IT && oT.setIndices(IT);
        let iT, zT = !1;
        for (iT in this._vertexBuffers) {
          const TT = this.getVertexBuffer(iT),
            IT = TT.getData();
          if (!IT) continue;
          const kT = TT.isUpdatable(),
            XT = TT.getSize(),
            {
              type: BT,
              byteOffset: FT,
              byteStride: ST,
              normalized: DT
            } = TT;
          zT = zT || kT;
          let LT = this._totalVertices;
          if (TT.getIsInstanced()) {
            let TT;
            TT = IT instanceof Array ? 4 * IT.length : IT.byteLength, LT = TT / ST
          }
          const xT = (0, MT.o)(IT, XT, BT, FT, ST, LT, !0),
            cT = new WT.i(this._engine, xT, iT, {
              updatable: kT,
              useBytes: !1,
              stride: XT,
              size: XT,
              offset: 0,
              type: BT,
              normalized: DT,
              takeBufferOwnership: !0,
              instanced: TT.getIsInstanced()
            });
          oT.setVerticesBuffer(cT, LT)
        }
        for (iT in oT._updatable = zT, oT.delayLoadState = this.delayLoadState, oT.delayLoadingFile = this.delayLoadingFile, oT._delayLoadingFunction = this._delayLoadingFunction, this._delayInfo) oT._delayInfo = oT._delayInfo || [], oT._delayInfo.push(iT);
        return oT._boundingInfo = new FT.d(this._extend.minimum, this._extend.maximum), oT
      }
      serialize() {
        const TT = {};
        return TT.id = this.id, TT.uniqueId = this.uniqueId, TT.updatable = this._updatable, LT.c && LT.c.HasTags(this) && (TT.tags = LT.c.GetTags(this)), TT
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
        return this.isVerticesDataPresent(WT.i.PositionKind) && (TT.positions = this._toNumberArray(this.getVerticesData(WT.i.PositionKind)), this.isVertexBufferUpdatable(WT.i.PositionKind) && (TT.positionsUpdatable = !0)), this.isVerticesDataPresent(WT.i.NormalKind) && (TT.normals = this._toNumberArray(this.getVerticesData(WT.i.NormalKind)), this.isVertexBufferUpdatable(WT.i.NormalKind) && (TT.normalsUpdatable = !0)), this.isVerticesDataPresent(WT.i.TangentKind) && (TT.tangents = this._toNumberArray(this.getVerticesData(WT.i.TangentKind)), this.isVertexBufferUpdatable(WT.i.TangentKind) && (TT.tangentsUpdatable = !0)), this.isVerticesDataPresent(WT.i.UVKind) && (TT.uvs = this._toNumberArray(this.getVerticesData(WT.i.UVKind)), this.isVertexBufferUpdatable(WT.i.UVKind) && (TT.uvsUpdatable = !0)), this.isVerticesDataPresent(WT.i.UV2Kind) && (TT.uvs2 = this._toNumberArray(this.getVerticesData(WT.i.UV2Kind)), this.isVertexBufferUpdatable(WT.i.UV2Kind) && (TT.uvs2Updatable = !0)), this.isVerticesDataPresent(WT.i.UV3Kind) && (TT.uvs3 = this._toNumberArray(this.getVerticesData(WT.i.UV3Kind)), this.isVertexBufferUpdatable(WT.i.UV3Kind) && (TT.uvs3Updatable = !0)), this.isVerticesDataPresent(WT.i.UV4Kind) && (TT.uvs4 = this._toNumberArray(this.getVerticesData(WT.i.UV4Kind)), this.isVertexBufferUpdatable(WT.i.UV4Kind) && (TT.uvs4Updatable = !0)), this.isVerticesDataPresent(WT.i.UV5Kind) && (TT.uvs5 = this._toNumberArray(this.getVerticesData(WT.i.UV5Kind)), this.isVertexBufferUpdatable(WT.i.UV5Kind) && (TT.uvs5Updatable = !0)), this.isVerticesDataPresent(WT.i.UV6Kind) && (TT.uvs6 = this._toNumberArray(this.getVerticesData(WT.i.UV6Kind)), this.isVertexBufferUpdatable(WT.i.UV6Kind) && (TT.uvs6Updatable = !0)), this.isVerticesDataPresent(WT.i.ColorKind) && (TT.colors = this._toNumberArray(this.getVerticesData(WT.i.ColorKind)), this.isVertexBufferUpdatable(WT.i.ColorKind) && (TT.colorsUpdatable = !0)), this.isVerticesDataPresent(WT.i.MatricesIndicesKind) && (TT.matricesIndices = this._toNumberArray(this.getVerticesData(WT.i.MatricesIndicesKind)), TT.matricesIndicesExpanded = !0, this.isVertexBufferUpdatable(WT.i.MatricesIndicesKind) && (TT.matricesIndicesUpdatable = !0)), this.isVerticesDataPresent(WT.i.MatricesWeightsKind) && (TT.matricesWeights = this._toNumberArray(this.getVerticesData(WT.i.MatricesWeightsKind)), this.isVertexBufferUpdatable(WT.i.MatricesWeightsKind) && (TT.matricesWeightsUpdatable = !0)), TT.indices = this._toNumberArray(this.hWT()), TT
      }
      static ExtractFromMesh(TT, oT) {
        const IT = TT._geometry;
        return IT ? IT.copy(oT) : null
      }
      static RandomId() {
        return ST.i.RandomId()
      }
      static _GetGeometryByLoadedUniqueId(TT, oT) {
        for (let IT = 0; IT < oT.geometries.length; IT++)
          if (oT.geometries[IT]._loadedUniqueId === TT) return oT.geometries[IT];
        return null
      }
      static _ImportGeometry(TT, oT) {
        const IT = oT.pC(),
          iT = TT.geometryUniqueId,
          kT = TT.geometryId;
        if (iT || kT) {
          const TT = iT ? this._GetGeometryByLoadedUniqueId(iT, IT) : IT.getGeometryById(kT);
          TT && TT.applyToMesh(oT)
        } else if (TT instanceof ArrayBuffer) {
          const IT = oT._binaryInfo;
          if (IT.positionsAttrDesc && IT.positionsAttrDesc.count > 0) {
            const iT = new Float32Array(TT, IT.positionsAttrDesc.offset, IT.positionsAttrDesc.count);
            oT.setVerticesData(WT.i.PositionKind, iT, !1)
          }
          if (IT.normalsAttrDesc && IT.normalsAttrDesc.count > 0) {
            const iT = new Float32Array(TT, IT.normalsAttrDesc.offset, IT.normalsAttrDesc.count);
            oT.setVerticesData(WT.i.NormalKind, iT, !1)
          }
          if (IT.tangetsAttrDesc && IT.tangetsAttrDesc.count > 0) {
            const iT = new Float32Array(TT, IT.tangetsAttrDesc.offset, IT.tangetsAttrDesc.count);
            oT.setVerticesData(WT.i.TangentKind, iT, !1)
          }
          if (IT.uvsAttrDesc && IT.uvsAttrDesc.count > 0) {
            const iT = new Float32Array(TT, IT.uvsAttrDesc.offset, IT.uvsAttrDesc.count);
            if (KT.d)
              for (let TT = 1; TT < iT.length; TT += 2) iT[TT] = 1 - iT[TT];
            oT.setVerticesData(WT.i.UVKind, iT, !1)
          }
          if (IT.uvs2AttrDesc && IT.uvs2AttrDesc.count > 0) {
            const iT = new Float32Array(TT, IT.uvs2AttrDesc.offset, IT.uvs2AttrDesc.count);
            if (KT.d)
              for (let TT = 1; TT < iT.length; TT += 2) iT[TT] = 1 - iT[TT];
            oT.setVerticesData(WT.i.UV2Kind, iT, !1)
          }
          if (IT.uvs3AttrDesc && IT.uvs3AttrDesc.count > 0) {
            const iT = new Float32Array(TT, IT.uvs3AttrDesc.offset, IT.uvs3AttrDesc.count);
            if (KT.d)
              for (let TT = 1; TT < iT.length; TT += 2) iT[TT] = 1 - iT[TT];
            oT.setVerticesData(WT.i.UV3Kind, iT, !1)
          }
          if (IT.uvs4AttrDesc && IT.uvs4AttrDesc.count > 0) {
            const iT = new Float32Array(TT, IT.uvs4AttrDesc.offset, IT.uvs4AttrDesc.count);
            if (KT.d)
              for (let TT = 1; TT < iT.length; TT += 2) iT[TT] = 1 - iT[TT];
            oT.setVerticesData(WT.i.UV4Kind, iT, !1)
          }
          if (IT.uvs5AttrDesc && IT.uvs5AttrDesc.count > 0) {
            const iT = new Float32Array(TT, IT.uvs5AttrDesc.offset, IT.uvs5AttrDesc.count);
            if (KT.d)
              for (let TT = 1; TT < iT.length; TT += 2) iT[TT] = 1 - iT[TT];
            oT.setVerticesData(WT.i.UV5Kind, iT, !1)
          }
          if (IT.uvs6AttrDesc && IT.uvs6AttrDesc.count > 0) {
            const iT = new Float32Array(TT, IT.uvs6AttrDesc.offset, IT.uvs6AttrDesc.count);
            if (KT.d)
              for (let TT = 1; TT < iT.length; TT += 2) iT[TT] = 1 - iT[TT];
            oT.setVerticesData(WT.i.UV6Kind, iT, !1)
          }
          if (IT.colorsAttrDesc && IT.colorsAttrDesc.count > 0) {
            const iT = new Float32Array(TT, IT.colorsAttrDesc.offset, IT.colorsAttrDesc.count);
            oT.setVerticesData(WT.i.ColorKind, iT, !1, IT.colorsAttrDesc.stride)
          }
          if (IT.matricesIndicesAttrDesc && IT.matricesIndicesAttrDesc.count > 0) {
            const iT = new Int32Array(TT, IT.matricesIndicesAttrDesc.offset, IT.matricesIndicesAttrDesc.count),
              zT = [];
            for (let TT = 0; TT < iT.length; TT++) {
              const oT = iT[TT];
              zT.push(255 & oT), zT.push((65280 & oT) >> 8), zT.push((16711680 & oT) >> 16), zT.push(oT >> 24 & 255)
            }
            oT.setVerticesData(WT.i.MatricesIndicesKind, zT, !1)
          }
          if (IT.matricesIndicesExtraAttrDesc && IT.matricesIndicesExtraAttrDesc.count > 0) {
            const iT = new Int32Array(TT, IT.matricesIndicesExtraAttrDesc.offset, IT.matricesIndicesExtraAttrDesc.count),
              zT = [];
            for (let TT = 0; TT < iT.length; TT++) {
              const oT = iT[TT];
              zT.push(255 & oT), zT.push((65280 & oT) >> 8), zT.push((16711680 & oT) >> 16), zT.push(oT >> 24 & 255)
            }
            oT.setVerticesData(WT.i.MatricesIndicesExtraKind, zT, !1)
          }
          if (IT.matricesWeightsAttrDesc && IT.matricesWeightsAttrDesc.count > 0) {
            const iT = new Float32Array(TT, IT.matricesWeightsAttrDesc.offset, IT.matricesWeightsAttrDesc.count);
            oT.setVerticesData(WT.i.MatricesWeightsKind, iT, !1)
          }
          if (IT.indicesAttrDesc && IT.indicesAttrDesc.count > 0) {
            const iT = new Int32Array(TT, IT.indicesAttrDesc.offset, IT.indicesAttrDesc.count);
            oT.setIndices(iT, null)
          }
          if (IT.subMeshesAttrDesc && IT.subMeshesAttrDesc.count > 0) {
            const iT = new Int32Array(TT, IT.subMeshesAttrDesc.offset, 5 * IT.subMeshesAttrDesc.count);
            oT.pR = [];
            for (let TT = 0; TT < IT.subMeshesAttrDesc.count; TT++) {
              const IT = iT[5 * TT + 0],
                zT = iT[5 * TT + 1],
                kT = iT[5 * TT + 2],
                WT = iT[5 * TT + 3],
                BT = iT[5 * TT + 4];
              XT.c.AddToMesh(IT, zT, kT, WT, BT, oT)
            }
          }
        } else if (TT.positions && TT.normals && TT.indices) {
          if (oT.setVerticesData(WT.i.PositionKind, TT.positions, TT.positions._updatable || TT.positionsUpdatable), oT.setVerticesData(WT.i.NormalKind, TT.normals, TT.normals._updatable || TT.normalsUpdatable), TT.tangents && oT.setVerticesData(WT.i.TangentKind, TT.tangents, TT.tangents._updatable || TT.tangentsUpdatable), TT.uvs && oT.setVerticesData(WT.i.UVKind, TT.uvs, TT.uvs._updatable || TT.uvsUpdatable), TT.uvs2 && oT.setVerticesData(WT.i.UV2Kind, TT.uvs2, TT.uvs2._updatable || TT.uvs2Updatable), TT.uvs3 && oT.setVerticesData(WT.i.UV3Kind, TT.uvs3, TT.uvs3._updatable || TT.uvs3Updatable), TT.uvs4 && oT.setVerticesData(WT.i.UV4Kind, TT.uvs4, TT.uvs4._updatable || TT.uvs4Updatable), TT.uvs5 && oT.setVerticesData(WT.i.UV5Kind, TT.uvs5, TT.uvs5._updatable || TT.uvs5Updatable), TT.uvs6 && oT.setVerticesData(WT.i.UV6Kind, TT.uvs6, TT.uvs6._updatable || TT.uvs6Updatable), TT.colors && oT.setVerticesData(WT.i.ColorKind, zT.i.CheckColors4(TT.colors, TT.positions.length / 3), TT.colors._updatable), TT.matricesIndices)
            if (TT.matricesIndices._isExpanded || TT.matricesIndicesExpanded) delete TT.matricesIndices._isExpanded, delete TT.matricesIndicesExpanded, oT.setVerticesData(WT.i.MatricesIndicesKind, TT.matricesIndices, TT.matricesIndices._updatable || TT.matricesIndicesUpdatable);
            else {
              const IT = [];
              for (let oT = 0; oT < TT.matricesIndices.length; oT++) {
                const iT = TT.matricesIndices[oT];
                IT.push(255 & iT), IT.push((65280 & iT) >> 8), IT.push((16711680 & iT) >> 16), IT.push(iT >> 24 & 255)
              }
              oT.setVerticesData(WT.i.MatricesIndicesKind, IT, TT.matricesIndices._updatable || TT.matricesIndicesUpdatable)
            } if (TT.matricesIndicesExtra)
            if (TT.matricesIndicesExtraExpanded || TT.matricesIndicesExtra._isExpanded) delete TT.matricesIndices._isExpanded, delete TT.matricesIndicesExtraExpanded, oT.setVerticesData(WT.i.MatricesIndicesExtraKind, TT.matricesIndicesExtra, TT.matricesIndicesExtra._updatable || TT.matricesIndicesExtraUpdatable);
            else {
              const IT = [];
              for (let oT = 0; oT < TT.matricesIndicesExtra.length; oT++) {
                const iT = TT.matricesIndicesExtra[oT];
                IT.push(255 & iT), IT.push((65280 & iT) >> 8), IT.push((16711680 & iT) >> 16), IT.push(iT >> 24 & 255)
              }
              oT.setVerticesData(WT.i.MatricesIndicesExtraKind, IT, TT.matricesIndicesExtra._updatable || TT.matricesIndicesExtraUpdatable)
            } TT.matricesWeights && (rT._CleanMatricesWeights(TT, oT), oT.setVerticesData(WT.i.MatricesWeightsKind, TT.matricesWeights, TT.matricesWeights._updatable)), TT.matricesWeightsExtra && oT.setVerticesData(WT.i.MatricesWeightsExtraKind, TT.matricesWeightsExtra, TT.matricesWeights._updatable), oT.setIndices(TT.indices, null)
        }
        if (TT.pR) {
          oT.pR = [];
          for (let IT = 0; IT < TT.pR.length; IT++) {
            const iT = TT.pR[IT];
            XT.c.AddToMesh(iT.materialIndex, iT.verticesStart, iT.verticesCount, iT.indexStart, iT.indexCount, oT)
          }
        }
        oT._shouldGenerateFlatShading && (oT.convertToFlatShadedMesh(), oT._shouldGenerateFlatShading = !1), oT.computeWorldMatrix(!0), IT.onMeshImportedObservable.notifyObservers(oT)
      }
      static _CleanMatricesWeights(TT, oT) {
        const IT = .001;
        if (!BT.b.CleanBoneMatrixWeights) return;
        let iT;
        if (!(TT.skeletonId > -1)) return;
        {
          const IT = oT.pC().getLastSkeletonById(TT.skeletonId);
          if (!IT) return;
          iT = IT.bones.length
        }
        const zT = oT.getVerticesData(WT.i.MatricesIndicesKind),
          kT = oT.getVerticesData(WT.i.MatricesIndicesExtraKind),
          XT = TT.matricesWeights,
          FT = TT.matricesWeightsExtra,
          ST = TT.numBoneInfluencer,
          DT = XT.length;
        for (let WT = 0; WT < DT; WT += 4) {
          let TT = 0,
            oT = -1;
          for (let iT = 0; iT < 4; iT++) {
            const zT = XT[WT + iT];
            TT += zT, zT < IT && oT < 0 && (oT = iT)
          }
          if (FT)
            for (let iT = 0; iT < 4; iT++) {
              const zT = FT[WT + iT];
              TT += zT, zT < IT && oT < 0 && (oT = iT + 4)
            }
          if ((oT < 0 || oT > ST - 1) && (oT = ST - 1), TT > IT) {
            const oT = 1 / TT;
            for (let TT = 0; TT < 4; TT++) XT[WT + TT] *= oT;
            if (FT)
              for (let TT = 0; TT < 4; TT++) FT[WT + TT] *= oT
          } else oT >= 4 ? (FT[WT + oT - 4] = 1 - TT, kT[WT + oT - 4] = iT) : (XT[WT + oT] = 1 - TT, zT[WT + oT] = iT)
        }
        oT.setVerticesData(WT.i.MatricesIndicesKind, zT), TT.matricesWeightsExtra && oT.setVerticesData(WT.i.MatricesIndicesExtraKind, kT)
      }
      static Parse(TT, oT, IT) {
        const zT = new rT(TT.id, oT, void 0, TT.updatable);
        return zT._loadedUniqueId = TT.uniqueId, LT.c && LT.c.AddTagsTo(zT, TT.tags), TT.delayLoadingFile ? (zT.delayLoadState = 4, zT.delayLoadingFile = IT + TT.delayLoadingFile, zT._boundingInfo = new FT.d(iT.m.FromArray(TT.boundingBoxMinimum), iT.m.FromArray(TT.boundingBoxMaximum)), zT._delayInfo = [], TT.hasUVs && zT._delayInfo.push(WT.i.UVKind), TT.hasUVs2 && zT._delayInfo.push(WT.i.UV2Kind), TT.hasUVs3 && zT._delayInfo.push(WT.i.UV3Kind), TT.hasUVs4 && zT._delayInfo.push(WT.i.UV4Kind), TT.hasUVs5 && zT._delayInfo.push(WT.i.UV5Kind), TT.hasUVs6 && zT._delayInfo.push(WT.i.UV6Kind), TT.hasColors && zT._delayInfo.push(WT.i.ColorKind), TT.hasMatricesIndices && zT._delayInfo.push(WT.i.MatricesIndicesKind), TT.hasMatricesWeights && zT._delayInfo.push(WT.i.MatricesWeightsKind), zT._delayLoadingFunction = kT.c.ImportVertexData) : kT.c.ImportVertexData(TT, zT), oT.pushGeometry(zT, !0), zT
      }
    }
  },
  39256: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => DT,
      f: () => cT
    });
    var iT = IT(36118),
      zT = IT(37660),
      kT = IT(39230),
      WT = IT(39192),
      XT = IT(37658),
      BT = IT(39233),
      FT = IT(38923),
      ST = IT(36166);
    class DT extends kT.e {
      constructor(TT, oT) {
        super(TT, oT.pC()), this._indexInSourceMeshInstanceArray = -1, this._distanceToCamera = 0, oT.N9(this), this._sourceMesh = oT, this._unIndexed = oT._unIndexed, this.position.SIT(oT.position), this.rotation.SIT(oT.rotation), this.ti.SIT(oT.ti), oT.rotationQuaternion && (this.rotationQuaternion = oT.rotationQuaternion.clone()), this.animations = oT.animations.slice();
        for (const IT of oT.getAnimationRanges()) null != IT && this.createAnimationRange(IT.name, IT.from, IT.to);
        if (this.infiniteDistance = oT.infiniteDistance, this.setPivotMatrix(oT.getPivotMatrix()), oT.skeleton || oT.morphTargetManager || !oT.hasBoundingInfo) this.refreshBoundingInfo(!0, !0);
        else {
          const TT = oT.GJ();
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
        this._sourceMesh?.receiveShadows !== TT && zT.d.Warn("Setting receiveShadows on an instanced mesh has no effect")
      }
      get material() {
        return this._sourceMesh.material
      }
      set material(TT) {
        this._sourceMesh?.material !== TT && zT.d.Warn("Setting material on an instanced mesh has no effect")
      }
      get visibility() {
        return this._sourceMesh.visibility
      }
      set visibility(TT) {
        this._sourceMesh?.visibility !== TT && zT.d.Warn("Setting visibility on an instanced mesh has no effect")
      }
      get skeleton() {
        return this._sourceMesh.skeleton
      }
      set skeleton(TT) {
        this._sourceMesh?.skeleton !== TT && zT.d.Warn("Setting skeleton on an instanced mesh has no effect")
      }
      get renderingGroupId() {
        return this._sourceMesh.renderingGroupId
      }
      set renderingGroupId(TT) {
        this._sourceMesh && TT !== this._sourceMesh.renderingGroupId && zT.d.Warn("Note - setting renderingGroupId of an instanced mesh has no effect on the scene")
      }
      get meshBlendingTag() {
        return this._sourceMesh.meshBlendingTag
      }
      set meshBlendingTag(TT) {
        this._sourceMesh && TT !== this._sourceMesh.meshBlendingTag && zT.d.Warn("Setting meshBlendingTag on an instanced mesh has no effect")
      }
      getTotalVertices() {
        return this._sourceMesh ? this._sourceMesh.getTotalVertices() : 0
      }
      getTotalIndices() {
        return this._sourceMesh.getTotalIndices()
      }
      get HiT() {
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
      getVerticesData(TT, oT, IT) {
        return this._sourceMesh.getVerticesData(TT, oT, IT)
      }
      copyVerticesData(TT, oT) {
        this._sourceMesh.copyVerticesData(TT, oT)
      }
      getVertexBuffer(TT, oT) {
        return this._sourceMesh.getVertexBuffer(TT, oT)
      }
      setVerticesData(TT, oT, IT, iT) {
        return this.HiT && this.HiT.setVerticesData(TT, oT, IT, iT), this.HiT
      }
      updateVerticesData(TT, oT, IT, iT) {
        return this.HiT && this.HiT.updateVerticesData(TT, oT, IT, iT), this.HiT
      }
      setIndices(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return this.HiT && this.HiT.setIndices(TT, oT), this.HiT
      }
      isVerticesDataPresent(TT) {
        return this._sourceMesh.isVerticesDataPresent(TT)
      }
      hWT() {
        return this._sourceMesh.hWT()
      }
      get _positions() {
        return this._sourceMesh._positions
      }
      refreshBoundingInfo() {
        let TT, oT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          IT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.hasBoundingInfo && this.GJ().isLocked) return this;
        TT = "object" === typeof oT ? oT : {
          applySkeleton: oT,
          applyMorph: IT
        };
        const iT = this._sourceMesh.geometry ? this._sourceMesh.geometry.boundingBias : null;
        return this._refreshBoundingInfo(this._sourceMesh._getData(TT, null, FT.i.PositionKind), iT), this
      }
      _preActivate() {
        return this._currentLOD && this._currentLOD._preActivate(), this
      }
      _activate(TT, oT) {
        if (super._activate(TT, oT), this._sourceMesh.pR || zT.d.Warn("Instances should only be created for meshes with geometry."), this._currentLOD) {
          if (this._currentLOD._getWorldMatrixDeterminant() >= 0 !== this._getWorldMatrixDeterminant() >= 0) return this._internalAbstractMeshDataInfo._actAsRegularMesh = !0, !0;
          if (this._internalAbstractMeshDataInfo._actAsRegularMesh = !1, this._currentLOD._registerInstanceForRenderId(this, TT), oT) {
            if (!this._currentLOD._internalAbstractMeshDataInfo._isActiveIntermediate) return this._currentLOD._internalAbstractMeshDataInfo._onlyForInstancesIntermediate = !0, !0
          } else if (!this._currentLOD._internalAbstractMeshDataInfo._isActive) return this._currentLOD._internalAbstractMeshDataInfo._onlyForInstances = !0, !0
        }
        return !1
      }
      _postActivate() {
        this._sourceMesh.edgesShareWithInstances && this._sourceMesh._edgesRenderer && this._sourceMesh._edgesRenderer.isEnabled && this._sourceMesh._renderingGroup ? (this._sourceMesh._renderingGroup._edgesRenderers.pushNoDuplicate(this._sourceMesh._edgesRenderer), this._sourceMesh._edgesRenderer.customInstances.push(this.getWorldMatrix())) : this._edgesRenderer && this._edgesRenderer.isEnabled && this._sourceMesh._renderingGroup && this._sourceMesh._renderingGroup._edgesRenderers.push(this._edgesRenderer)
      }
      getWorldMatrix() {
        if (this._currentLOD && this._currentLOD !== this._sourceMesh && this._currentLOD.billboardMode !== BT.g.BILLBOARDMODE_NONE && this._currentLOD._masterMesh !== this) {
          this._billboardWorldMatrix || (this._billboardWorldMatrix = new iT.b);
          const TT = this._currentLOD._masterMesh;
          return this._currentLOD._masterMesh = this, iT.i.sc[7].SIT(this._currentLOD.position), this._currentLOD.position.set(0, 0, 0), this._billboardWorldMatrix.SIT(this._currentLOD.computeWorldMatrix(!0)), this._currentLOD.position.SIT(iT.i.sc[7]), this._currentLOD._masterMesh = TT, this._billboardWorldMatrix
        }
        return super.getWorldMatrix()
      }
      get yC() {
        return !0
      }
      getLOD(TT) {
        if (!TT) return this;
        const oT = this.HiT.getLODLevels();
        if (oT && 0 !== oT.length) {
          const oT = this.GJ();
          this._currentLOD = this.HiT.getLOD(TT, oT.KiT)
        } else this._currentLOD = this.HiT;
        return this._currentLOD
      }
      _preActivateForIntermediateRendering(TT) {
        return this.HiT._preActivateForIntermediateRendering(TT)
      }
      _syncSubMeshes() {
        if (this.releaseSubMeshes(), this._sourceMesh.pR)
          for (let TT = 0; TT < this._sourceMesh.pR.length; TT++) this._sourceMesh.pR[TT].clone(this, this._sourceMesh);
        return this
      }
      _generatePointsArray() {
        return this._sourceMesh._generatePointsArray()
      }
      _updateBoundingInfo() {
        return this.hasBoundingInfo ? this.GJ().update(this.worldMatrixFromCache) : this.buildBoundingInfo(this.absolutePosition, this.absolutePosition, this.worldMatrixFromCache), this._updateSubMeshesBoundingInfo(this.worldMatrixFromCache), this
      }
      clone(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          IT = arguments.length > 2 ? arguments[2] : void 0;
        const iT = ((arguments.length > 3 ? arguments[3] : void 0) || this._sourceMesh).createInstance(TT);
        if (XT.d.DeepCopy(this, iT, ["name", "pR", "uniqueId", "parent", "lightSources", "receiveShadows", "material", "visibility", "skeleton", "HiT", "yC", "facetNb", "isFacetDataEnabled", "isBlocked", "useBones", "OiT", "collider", "edgesRenderer", "forward", "up", "right", "absolutePosition", "absoluteScaling", "absoluteRotationQuaternion", "vWT", "nonUniformScaling", "behaviors", "worldMatrixFromCache", "hasThinInstances", "hasBoundingInfo", "geometry"], []), oT && (iT.parent = oT), !IT)
          for (let zT = 0; zT < this.pC().meshes.length; zT++) {
            const TT = this.pC().meshes[zT];
            TT.parent === this && TT.clone(TT.name, iT)
          }
        return iT.computeWorldMatrix(!0), this.onClonedObservable.notifyObservers(iT), iT
      }
      dispose(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._sourceMesh.U1(this), super.dispose(TT, oT)
      }
      _serializeAsParent(TT) {
        super._serializeAsParent(TT), TT.parentId = this._sourceMesh.uniqueId, TT.parentInstanceIndex = this._indexInSourceMeshInstanceArray
      }
      instantiateHierarchy() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          oT = arguments.length > 1 ? arguments[1] : void 0,
          IT = arguments.length > 2 ? arguments[2] : void 0;
        const iT = this.clone("Clone of " + (this.name || this.id), TT || this.parent, !0, oT && oT.newSourcedMesh);
        iT && IT && IT(this, iT);
        for (const zT of this.getChildTransformNodes(!0)) zT.instantiateHierarchy(iT, oT, IT);
        return iT
      }
    }
    let LT = !1;

    function xT(TT, oT, IT, iT, zT) {
      for (let kT = 0; kT < oT.length; kT++) {
        const WT = TT[oT[kT]] ?? 0,
          XT = zT + IT[kT];
        WT.toArray ? WT.toArray(iT, XT) : WT.copyToArray ? WT.copyToArray(iT, XT) : iT[XT] = WT
      }
    }

    function cT() {
      LT || (LT = !0, WT.e._instancedMeshFactory = (TT, oT) => {
        const IT = new DT(TT, oT);
        if (oT.HJ) {
          IT.HJ = {};
          for (const TT in oT.HJ) IT.HJ[TT] = oT.HJ[TT]
        }
        return IT
      }, WT.e.prototype.OJ = function(TT, oT) {
        if (!this.HJ) {
          this.HJ = {};
          for (const TT of this.instances) TT.HJ = {}
        }
        this._userInstancedBuffersStorage || (this._userInstancedBuffersStorage = {
          data: {},
          vertexBuffers: {},
          strides: {},
          sizes: {},
          vertexArrayObjects: this.Zc().getCaps().vertexArrayObject ? {} : void 0
        }), this.HJ[TT] = null, this._userInstancedBuffersStorage.strides[TT] = oT;
        const IT = this._userInstancedBuffersStorage;
        IT.interleavedKinds = [], IT.interleavedOffsets = [], IT.interleavedRowStride = 0;
        for (const iT in IT.strides) IT.interleavedKinds.push(iT), IT.interleavedOffsets.push(IT.interleavedRowStride), IT.interleavedRowStride += IT.strides[iT];
        IT.interleavedData = new Float32Array(32 * IT.interleavedRowStride);
        for (const iT in IT.interleavedBuffers) IT.interleavedBuffers[iT].buffer.dispose();
        IT.interleavedBuffers = {}, IT.vertexBuffers[TT] = null;
        for (const iT of this.instances) iT.HJ[TT] = null;
        this._invalidateInstanceVertexArrayObject(), this._markSubMeshesAsAttributesDirty()
      }, WT.e.prototype._processInstancedBuffers = function(TT, oT) {
        const IT = this._userInstancedBuffersStorage,
          iT = IT.interleavedRowStride;
        if (!iT) return;
        const zT = TT ? TT.length : 0,
          kT = (zT + 1) * iT;
        let WT = IT.interleavedData;
        if (WT.length < kT) {
          let TT = WT.length;
          for (; TT < kT;) TT *= 2;
          WT = IT.interleavedData = new Float32Array(TT)
        }
        const XT = IT.interleavedKinds,
          BT = IT.interleavedOffsets;
        let ST = 0;
        oT && (xT(this.HJ, XT, BT, WT, ST), ST += iT);
        for (let FT = 0; FT < zT; FT++) xT(TT[FT].HJ, XT, BT, WT, ST), ST += iT;
        let DT = "shared",
          LT = IT.vertexBuffers;
        this._instanceDataStorage.useMonoDataStorageRenderPass || (DT = this._instanceDataStorage.engine.currentRenderPassId, IT.renderPasses || (IT.renderPasses = {}), IT.renderPasses[DT] || (IT.renderPasses[DT] = {}), LT = IT.renderPasses[DT]);
        const cT = IT.interleavedBuffers[DT];
        let KT = !cT || cT.data !== WT;
        for (let FT = 0; !KT && FT < XT.length; FT++) KT = !LT[XT[FT]];
        if (!KT) return void cT.buffer.updateDirectly(WT, 0);
        cT?.buffer.dispose();
        const MT = new FT.d(this.Zc(), WT, !0, iT, !1, !0);
        for (let FT = 0; FT < XT.length; FT++) {
          const TT = XT[FT],
            oT = MT.createVertexBuffer(TT, BT[FT], IT.strides[TT]);
          oT.hashCode += oT.byteOffset * 2 ** 24, LT[TT] = oT
        }
        IT.interleavedBuffers[DT] = {
          buffer: MT,
          data: WT
        }, this._invalidateInstanceVertexArrayObject()
      }, WT.e.prototype._invalidateInstanceVertexArrayObject = function() {
        if (this._userInstancedBuffersStorage && void 0 !== this._userInstancedBuffersStorage.vertexArrayObjects) {
          for (const TT in this._userInstancedBuffersStorage.vertexArrayObjects) this.Zc().releaseVertexArrayObject(this._userInstancedBuffersStorage.vertexArrayObjects[TT]);
          this._userInstancedBuffersStorage.vertexArrayObjects = {}
        }
      }, WT.e.prototype._disposeInstanceSpecificData = function() {
        for (const oT in this._instanceDataStorage.renderPasses) this._instanceDataStorage.renderPasses[oT].instancesBuffer?.dispose();
        for (this._instanceDataStorage.renderPasses = {}, this._instanceDataStorage.dataStorageRenderPass?.instancesBuffer?.dispose(); this.instances.length;) this.instances[0].dispose();
        for (const oT in this.HJ) this._userInstancedBuffersStorage.vertexBuffers[oT] && this._userInstancedBuffersStorage.vertexBuffers[oT].dispose();
        const TT = this._userInstancedBuffersStorage?.interleavedBuffers;
        if (TT) {
          for (const oT in TT) TT[oT].buffer.dispose();
          this._userInstancedBuffersStorage.interleavedBuffers = {}
        }
        this._invalidateInstanceVertexArrayObject(), this.HJ = {}
      }, (0, ST.h)("BABYLON.InstancedMesh", DT))
    }
  },
  39192: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => PT,
      i: () => VT,
      j: () => sT
    });
    var iT, zT, kT, WT, XT, BT, FT, ST, DT, LT, xT, cT, KT, MT, rT = IT(36149),
      AT = IT(38886),
      gT = IT(38827),
      hT = IT(37658),
      wT = IT(38808),
      mT = IT(39201),
      eT = IT(38986),
      RT = IT(36118),
      uT = IT(36177),
      vT = IT(38994),
      ET = IT(38923),
      fT = IT(39210),
      CT = IT(39212),
      jT = IT(39230),
      JT = IT(39076),
      UT = IT(39068),
      aT = IT(39170),
      YT = IT(39238),
      QT = IT(39219),
      OT = IT(38799),
      HT = IT(37660),
      nT = IT(36166),
      qT = IT(38643),
      ZT = IT(38949);
    class lT {
      constructor(TT, oT) {
        this.distanceOrScreenCoverage = TT, this.mesh = oT
      }
    }
    class sT {}
    class tT {
      constructor() {
        this.batchCache = new pT(this), this.batchCacheReplacementModeInFrozenMode = new pT(this), this.instancesBufferSize = 2048
      }
    }
    class GT {
      constructor() {
        this.renderPasses = {}
      }
    }
    class pT {
      constructor(TT) {
        this.parent = TT, this.mustReturn = !1, this.visibleInstances = new Array, this.renderSelf = [], this.hardwareInstancedRendering = []
      }
    }
    class bT {
      constructor() {
        this.instancesCount = 0, this.matrixBuffer = null, this.previousMatrixBuffer = null, this.matrixBufferSize = 512, this.matrixData = null, this.boundingVectors = [], this.worldMatrices = null
      }
    }
    class yT {
      constructor() {
        this._areNormalsFrozen = !1, this._source = null, this.meshMap = null, this._preActivateId = -1, this._LODLevels = new Array, this._useLODScreenCoverage = !1, this._effectiveMaterial = null, this._forcedInstanceCount = 0, this._overrideRenderingFillMode = null
      }
    }
    const NT = {
      source: null,
      parent: null,
      doNotCloneChildren: !1,
      clonePhysicsImpostor: !0,
      cloneThinInstances: !1
    };
    class PT extends jT.e {
      static _GetDefaultSideOrientation(TT) {
        return TT || PT.FRONTSIDE
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
        this._internalAbstractMeshDataInfo._computeBonesUsingShaders !== TT && (TT && this._internalMeshDataInfo._sourcePositions && (this.setVerticesData(ET.i.PositionKind, this._internalMeshDataInfo._sourcePositions, !0), this._internalMeshDataInfo._sourceNormals && this.setVerticesData(ET.i.NormalKind, this._internalMeshDataInfo._sourceNormals, !0), this._internalMeshDataInfo._sourcePositions = null, this._internalMeshDataInfo._sourceNormals = null), this._internalAbstractMeshDataInfo._computeBonesUsingShaders = TT, this._markSubMeshesAsAttributesDirty())
      }
      get onBeforeRenderObservable() {
        return this._internalMeshDataInfo._onBeforeRenderObservable || (this._internalMeshDataInfo._onBeforeRenderObservable = new rT.d), this._internalMeshDataInfo._onBeforeRenderObservable
      }
      get onBeforeBindObservable() {
        return this._internalMeshDataInfo._onBeforeBindObservable || (this._internalMeshDataInfo._onBeforeBindObservable = new rT.d), this._internalMeshDataInfo._onBeforeBindObservable
      }
      get onAfterRenderObservable() {
        return this._internalMeshDataInfo._onAfterRenderObservable || (this._internalMeshDataInfo._onAfterRenderObservable = new rT.d), this._internalMeshDataInfo._onAfterRenderObservable
      }
      get onBetweenPassObservable() {
        return this._internalMeshDataInfo._onBetweenPassObservable || (this._internalMeshDataInfo._onBetweenPassObservable = new rT.d), this._internalMeshDataInfo._onBetweenPassObservable
      }
      get onBeforeDrawObservable() {
        return this._internalMeshDataInfo._onBeforeDrawObservable || (this._internalMeshDataInfo._onBeforeDrawObservable = new rT.d), this._internalMeshDataInfo._onBeforeDrawObservable
      }
      set onBeforeDraw(TT) {
        this._onBeforeDrawObserver && this.onBeforeDrawObservable.remove(this._onBeforeDrawObserver), this._onBeforeDrawObserver = this.onBeforeDrawObservable.add(TT)
      }
      get OiT() {
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
      _copySource(TT, oT) {
        let IT = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          iT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const zT = this.pC();
        if (TT._geometry && TT._geometry.applyToMesh(this), hT.d.DeepCopy(TT, this, ["name", "material", "skeleton", "instances", "parent", "uniqueId", "source", "metadata", "morphTargetManager", "OiT", "worldMatrixInstancedBuffer", "previousWorldMatrixInstancedBuffer", "hasLODLevels", "geometry", "isBlocked", "areNormalsFrozen", "facetNb", "isFacetDataEnabled", "lightSources", "useBones", "yC", "collider", "edgesRenderer", "forward", "up", "right", "absolutePosition", "absoluteScaling", "absoluteRotationQuaternion", "vWT", "nonUniformScaling", "behaviors", "worldMatrixFromCache", "hasThinInstances", "cloneMeshMap", "hasBoundingInfo", "physicsBody", "physicsImpostor"], ["_poseMatrix"]), this._internalMeshDataInfo._source = TT, zT.useClonedMeshMap && (TT._internalMeshDataInfo.meshMap || (TT._internalMeshDataInfo.meshMap = {}), TT._internalMeshDataInfo.meshMap[this.uniqueId] = this), this._originalBuilderSideOrientation = TT._originalBuilderSideOrientation, this._creationDataStorage = TT._creationDataStorage, TT._ranges) {
          const oT = TT._ranges;
          for (const TT in oT) Object.prototype.hasOwnProperty.call(oT, TT) && oT[TT] && this.createAnimationRange(TT, oT[TT].from, oT[TT].to)
        }
        if (TT.metadata && TT.metadata.clone ? this.metadata = TT.metadata.clone() : this.metadata = TT.metadata, this._internalMetadata = TT._internalMetadata, this.meshBlendingTag = TT.meshBlendingTag, wT.c && wT.c.HasTags(TT) && wT.c.AddTagsTo(this, wT.c.GetTags(TT, !0)), this.Fv(TT.isEnabled(!1)), this.parent = TT.parent, this.setPivotMatrix(TT.getPivotMatrix(), this._postMultiplyPivotMatrix), this.id = this.name + "." + TT.id, this.material = TT.material, !oT) {
          const zT = TT.getDescendants(!0);
          for (let TT = 0; TT < zT.length; TT++) {
            const kT = zT[TT];
            kT._isMesh ? (NT.parent = this, NT.doNotCloneChildren = oT, NT.clonePhysicsImpostor = IT, NT.cloneThinInstances = iT, kT.clone(this.name + "." + kT.name, NT)) : kT.clone && kT.clone(this.name + "." + kT.name, this)
          }
        }
        if (TT.morphTargetManager && (this.morphTargetManager = TT.morphTargetManager), (0, qT.d)(zT.getPhysicsEngine)) {
          const oT = zT.getPhysicsEngine();
          if (IT && oT)
            if (1 === oT.getPluginVersion()) {
              const IT = oT.getImpostorForPhysicsObject(TT);
              IT && (this.physicsImpostor = IT.clone(this))
            } else 2 === oT.getPluginVersion() && TT.physicsBody && TT.physicsBody.clone(this)
        }
        for (let kT = 0; kT < zT.bR.length; kT++) {
          const oT = zT.bR[kT];
          oT.emitter === TT && oT.clone(oT.name, this)
        }
        if (this.skeleton = TT.skeleton, iT && (TT._thinInstanceDataStorage.matrixData ? (this.T_("matrix", new Float32Array(TT._thinInstanceDataStorage.matrixData), 16, !TT._thinInstanceDataStorage.matrixBuffer.isUpdatable()), this._thinInstanceDataStorage.matrixBufferSize = TT._thinInstanceDataStorage.matrixBufferSize, this._thinInstanceDataStorage.instancesCount = TT._thinInstanceDataStorage.instancesCount) : this._thinInstanceDataStorage.matrixBufferSize = TT._thinInstanceDataStorage.matrixBufferSize, TT._userThinInstanceBuffersStorage)) {
          const oT = TT._userThinInstanceBuffersStorage;
          for (const TT in oT.data) this.T_(TT, new Float32Array(oT.data[TT]), oT.strides[TT], !oT.vertexBuffers?.[TT]?.isUpdatable()), this._userThinInstanceBuffersStorage.sizes[TT] = oT.sizes[TT]
        }
        this.refreshBoundingInfo(!0, !0), this.computeWorldMatrix(!0)
      }
      constructor(TT) {
        let oT, IT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          iT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          zT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          kT = arguments.length > 4 ? arguments[4] : void 0,
          WT = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        super(TT, IT), this._internalMeshDataInfo = new yT, this.delayLoadState = 0, this.instances = [], this._creationDataStorage = null, this._geometry = null, this._thinInstanceDataStorage = new bT, this._shouldGenerateFlatShading = !1, this._originalBuilderSideOrientation = PT.DEFAULTSIDE, this.ignoreCameraMaxZ = !1, IT = this.pC(), this._instanceDataStorage = new GT, this._instanceDataStorage.engine = IT.Zc(), this._instanceDataStorage.useMonoDataStorageRenderPass = !this._instanceDataStorage.engine.isWebGPU, this._instanceDataStorage.useMonoDataStorageRenderPass && (this._instanceDataStorage.dataStorageRenderPass = new tT), this._scene.useRightHandedSystem ? this.sideOrientation = 0 : this.sideOrientation = 1, this._onBeforeDraw = (TT, oT, IT) => {
          TT && IT && (this._uniformBuffer ? this.transferToEffect(oT) : IT.bindOnlyWorldMatrix(oT))
        };
        let XT = !1;
        if (iT && void 0 === iT._addToSceneRootNodes) {
          const TT = iT;
          oT = TT.parent ?? null, zT = TT.source ?? null, kT = TT.doNotCloneChildren ?? !1, WT = TT.clonePhysicsImpostor ?? !0, XT = TT.cloneThinInstances ?? !1
        } else oT = iT;
        zT && this._copySource(zT, kT, WT, XT), null !== oT && (this.parent = oT), this._instanceDataStorage.hardwareInstancedRendering = this.Zc().getCaps().instancedArrays, this._internalMeshDataInfo._onMeshReadyObserverAdded = TT => {
          TT.unregisterOnNextCall = !0, this.isReady(!0) ? this.onMeshReadyObservable.notifyObservers(this) : this._internalMeshDataInfo._checkReadinessObserver || (this._internalMeshDataInfo._checkReadinessObserver = this._scene.onBeforeRenderObservable.add((() => {
            this.isReady(!0) && (this._scene.onBeforeRenderObservable.remove(this._internalMeshDataInfo._checkReadinessObserver), this._internalMeshDataInfo._checkReadinessObserver = null, this.onMeshReadyObservable.notifyObservers(this))
          })))
        }, this.onMeshReadyObservable = new rT.d(this._internalMeshDataInfo._onMeshReadyObserverAdded), zT && zT.onClonedObservable.notifyObservers(this)
      }
      instantiateHierarchy() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          oT = arguments.length > 1 ? arguments[1] : void 0,
          IT = arguments.length > 2 ? arguments[2] : void 0;
        const iT = 0 === this.getTotalVertices() || oT && oT.doNotInstantiate && (!0 === oT.doNotInstantiate || oT.doNotInstantiate(this)) ? this.clone("Clone of " + (this.name || this.id), TT || this.parent, !0) : this.createInstance("instance of " + (this.name || this.id));
        iT.parent = TT || this.parent, iT.position = this.position.clone(), iT.ti = this.ti.clone(), this.rotationQuaternion ? iT.rotationQuaternion = this.rotationQuaternion.clone() : iT.rotation = this.rotation.clone(), IT && IT(this, iT);
        for (const zT of this.getChildTransformNodes(!0)) "InstancedMesh" === zT.getClassName() && "Mesh" === iT.getClassName() && zT.HiT === this ? zT.instantiateHierarchy(iT, {
          doNotInstantiate: oT && oT.doNotInstantiate || !1,
          newSourcedMesh: iT
        }, IT) : zT.instantiateHierarchy(iT, oT, IT);
        return iT
      }
      getClassName() {
        return "Mesh"
      }
      get _isMesh() {
        return !0
      }
      toString(TT) {
        let oT = super.toString(TT);
        if (oT += ", n vertices: " + this.getTotalVertices(), oT += ", parent: " + (this._waitingParentId ? this._waitingParentId : this.parent ? this.parent.name : "NONE"), this.animations)
          for (let IT = 0; IT < this.animations.length; IT++) oT += ", animation[0]: " + this.animations[IT].toString(TT);
        if (TT)
          if (this._geometry) {
            const TT = this.hWT(),
              IT = this.getVerticesData(ET.i.PositionKind);
            IT && TT && (oT += ", flat shading: " + (IT.length / 3 === TT.length ? "YES" : "NO"))
          } else oT += ", flat shading: UNKNOWN";
        return oT
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
        this._internalMeshDataInfo._LODLevels.sort(((oT, IT) => oT.distanceOrScreenCoverage < IT.distanceOrScreenCoverage ? TT : oT.distanceOrScreenCoverage > IT.distanceOrScreenCoverage ? -TT : 0))
      }
      addLODLevel(TT, oT) {
        if (oT && oT._masterMesh) return HT.d.Warn("You cannot use a mesh as LOD level twice"), this;
        const IT = new lT(TT, oT);
        return this._internalMeshDataInfo._LODLevels.push(IT), oT && (oT._masterMesh = this), this._sortLODLevels(), this
      }
      getLODLevelAtDistance(TT) {
        const oT = this._internalMeshDataInfo;
        for (let IT = 0; IT < oT._LODLevels.length; IT++) {
          const iT = oT._LODLevels[IT];
          if (iT.distanceOrScreenCoverage === TT) return iT.mesh
        }
        return null
      }
      removeLODLevel(TT) {
        const oT = this._internalMeshDataInfo;
        for (let IT = 0; IT < oT._LODLevels.length; IT++) oT._LODLevels[IT].mesh === TT && (oT._LODLevels.splice(IT, 1), TT && (TT._masterMesh = null));
        return this._sortLODLevels(), this
      }
      getLOD(TT, oT) {
        const IT = this._internalMeshDataInfo;
        if (!IT._LODLevels || 0 === IT._LODLevels.length) return this;
        const iT = oT || this.GJ().KiT,
          zT = TT.mode === eT.c.ORTHOGRAPHIC_CAMERA ? TT.minZ : iT.centerWorld.subtract(TT.globalPosition).length();
        let kT = zT,
          WT = 1;
        if (IT._useLODScreenCoverage) {
          const oT = TT.screenArea;
          let IT = iT.radiusWorld * TT.minZ / zT;
          IT = IT * IT * Math.PI, kT = IT / oT, WT = -1
        }
        if (WT * IT._LODLevels[IT._LODLevels.length - 1].distanceOrScreenCoverage > WT * kT) return this.onLODLevelSelection && this.onLODLevelSelection(kT, this, this), this;
        for (let XT = 0; XT < IT._LODLevels.length; XT++) {
          const TT = IT._LODLevels[XT];
          if (WT * TT.distanceOrScreenCoverage < WT * kT) {
            if (TT.mesh) {
              if (4 === TT.mesh.delayLoadState) return TT.mesh._checkDelayState(), this;
              if (2 === TT.mesh.delayLoadState) return this;
              TT.mesh._preActivate(), TT.mesh._updateSubMeshesBoundingInfo(this.worldMatrixFromCache)
            }
            return this.onLODLevelSelection && this.onLODLevelSelection(kT, this, TT.mesh), TT.mesh
          }
        }
        return this.onLODLevelSelection && this.onLODLevelSelection(kT, this, this), this
      }
      get geometry() {
        return this._geometry
      }
      getTotalVertices() {
        return null === this._geometry || void 0 === this._geometry ? 0 : this._geometry.getTotalVertices()
      }
      getVerticesData(TT, oT, IT, iT) {
        if (!this._geometry) return null;
        let zT = iT ? void 0 : this._userInstancedBuffersStorage?.vertexBuffers[TT]?.getFloatData(this.instances.length + 1, IT || oT && 1 !== this._geometry.meshes.length);
        return zT || (zT = this._geometry.getVerticesData(TT, oT, IT)), zT
      }
      copyVerticesData(TT, oT) {
        this._geometry && this._geometry.copyVerticesData(TT, oT)
      }
      getVertexBuffer(TT, oT) {
        return this._geometry ? (oT ? void 0 : this._userInstancedBuffersStorage?.vertexBuffers[TT]) ?? this._geometry.getVertexBuffer(TT) : null
      }
      isVerticesDataPresent(TT, oT) {
        return this._geometry ? !oT && void 0 !== this._userInstancedBuffersStorage?.vertexBuffers[TT] || this._geometry.isVerticesDataPresent(TT) : !!this._delayInfo && -1 !== this._delayInfo.indexOf(TT)
      }
      isVertexBufferUpdatable(TT, oT) {
        if (!this._geometry) return !!this._delayInfo && -1 !== this._delayInfo.indexOf(TT);
        if (!oT) {
          const oT = this._userInstancedBuffersStorage?.vertexBuffers[TT];
          if (oT) return oT.isUpdatable()
        }
        return this._geometry.isVertexBufferUpdatable(TT)
      }
      getVerticesDataKinds(TT) {
        if (!this._geometry) {
          const TT = [];
          if (this._delayInfo)
            for (const oT of this._delayInfo) TT.push(oT);
          return TT
        }
        const oT = this._geometry.getVerticesDataKinds();
        if (!TT && this._userInstancedBuffersStorage)
          for (const IT in this._userInstancedBuffersStorage.vertexBuffers) - 1 === oT.indexOf(IT) && oT.push(IT);
        return oT
      }
      getTotalIndices() {
        return this._geometry ? this._geometry.getTotalIndices() : 0
      }
      hWT(TT, oT) {
        return this._geometry ? this._geometry.hWT(TT, oT) : []
      }
      get isBlocked() {
        return null !== this._masterMesh && void 0 !== this._masterMesh
      }
      isReady() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          oT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (2 === this.delayLoadState) return !1;
        if (!super.isReady(TT)) return !1;
        if (!this.pR || 0 === this.pR.length) return !0;
        if (!TT) return !0;
        const IT = this.Zc(),
          iT = this.pC(),
          zT = oT || IT.getCaps().instancedArrays && (this.instances.length > 0 || this.hasThinInstances);
        this.computeWorldMatrix();
        const kT = this.material || iT.defaultMaterial;
        if (kT)
          if (kT._storeEffectOnSubMeshes)
            for (const XT of this.pR) {
              const TT = XT.bc();
              if (TT)
                if (TT._storeEffectOnSubMeshes) {
                  if (!TT.isReadyForSubMesh(this, XT, zT)) return !1
                } else if (!TT.isReady(this, zT)) return !1
            } else if (!kT.isReady(this, zT)) return !1;
        const WT = IT.currentRenderPassId;
        for (const XT of this.lightSources) {
          const TT = XT.getShadowGenerators();
          if (!TT) continue;
          const oT = TT.values();
          for (let iT = oT.next(); !0 !== iT.done; iT = oT.next()) {
            const TT = iT.value;
            if (TT && (!TT.getShadowMap()?.renderList || TT.getShadowMap()?.renderList && -1 !== TT.getShadowMap()?.renderList?.indexOf(this))) {
              const oT = TT.getShadowMap().renderPassIds ?? [IT.currentRenderPassId];
              for (let iT = 0; iT < oT.length; ++iT) {
                IT.currentRenderPassId = oT[iT];
                for (const oT of this.pR)
                  if (!TT.isReady(oT, zT, oT.bc()?.needAlphaBlendingForMesh(this) ?? !1)) return IT.currentRenderPassId = WT, !1
              }
              IT.currentRenderPassId = WT
            }
          }
        }
        for (const XT of this._internalMeshDataInfo._LODLevels)
          if (XT.mesh && !XT.mesh.isReady(zT)) return !1;
        return !0
      }
      get areNormalsFrozen() {
        return this._internalMeshDataInfo._areNormalsFrozen
      }
      yc() {
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
        let oT = this._instanceDataStorage.renderPasses[TT];
        return oT || (oT = new tT, this._instanceDataStorage.renderPasses[TT] = oT), oT
      }
      _preActivate() {
        const TT = this._internalMeshDataInfo,
          oT = this.pC().getRenderId();
        return TT._preActivateId === oT || (TT._preActivateId = oT, this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass.visibleInstances = null : this._getInstanceDataStorage().visibleInstances = null), this
      }
      _preActivateForIntermediateRendering(TT) {
        const oT = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        return oT.visibleInstances && (oT.visibleInstances.intermediateDefaultRenderId = TT), this
      }
      _registerInstanceForRenderId(TT, oT) {
        const IT = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        return IT.visibleInstances || (IT.visibleInstances = {
          defaultRenderId: oT,
          selfDefaultRenderId: this._renderId,
          intermediateDefaultRenderId: -1
        }), IT.visibleInstances[oT] || (void 0 === IT.previousRenderId || this._instanceDataStorage.useMonoDataStorageRenderPass && !this._instanceDataStorage.isFrozen || delete IT.visibleInstances[IT.previousRenderId], IT.previousRenderId = oT, IT.visibleInstances[oT] = new Array), IT.visibleInstances[oT].push(TT), this
      }
      _afterComputeWorldMatrix() {
        super._afterComputeWorldMatrix(), this.hasThinInstances && (this.Gc || this.thinInstanceRefreshBoundingInfo(!1))
      }
      _postActivate() {
        this.edgesShareWithInstances && this.edgesRenderer && this.edgesRenderer.isEnabled && this._renderingGroup && (this._renderingGroup._edgesRenderers.pushNoDuplicate(this.edgesRenderer), this.edgesRenderer.customInstances.push(this.getWorldMatrix()))
      }
      refreshBoundingInfo() {
        let TT, oT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          IT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.hasBoundingInfo && this.GJ().isLocked) return this;
        TT = "object" === typeof oT ? oT : {
          applySkeleton: oT,
          applyMorph: IT
        };
        const iT = this.geometry ? this.geometry.boundingBias : null;
        return this._refreshBoundingInfo(this._getData(TT, null, ET.i.PositionKind), iT), this
      }
      _createGlobalSubMesh(TT) {
        const oT = this.getTotalVertices();
        if (!oT || !this.hWT()) return null;
        if (this.pR && this.pR.length > 0) {
          const IT = this.hWT();
          if (!IT) return null;
          const iT = IT.length;
          let zT = !1;
          if (TT) zT = !0;
          else
            for (const TT of this.pR) {
              if (TT.indexStart + TT.indexCount > iT) {
                zT = !0;
                break
              }
              if (TT.verticesStart + TT.verticesCount > oT) {
                zT = !0;
                break
              }
            }
          if (!zT) return this.pR[0]
        }
        return this.releaseSubMeshes(), new JT.c(0, 0, oT, 0, this.getTotalIndices() || (this.isUnIndexed ? oT : 0), this)
      }
      subdivide(TT) {
        if (TT < 1) return;
        const oT = this.getTotalIndices();
        let IT = oT / TT | 0,
          iT = 0;
        for (; IT % 3 !== 0;) IT++;
        this.releaseSubMeshes();
        for (let zT = 0; zT < TT && !(iT >= oT); zT++) JT.c.CreateFromIndices(0, iT, iT + IT >= oT ? oT - iT : IT, this, void 0, !1), iT += IT;
        this.refreshBoundingInfo(), this.synchronizeInstances()
      }
      setVerticesData(TT, oT) {
        let IT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          iT = arguments.length > 3 ? arguments[3] : void 0;
        if (this._geometry) this._geometry.setVerticesData(TT, oT, IT, iT);
        else {
          const iT = new fT.c;
          iT.set(oT, TT);
          const zT = this.pC();
          new CT.d(CT.d.RandomId(), zT, iT, IT, this)
        }
        return this
      }
      removeVerticesData(TT) {
        this._geometry && this._geometry.removeVerticesData(TT)
      }
      markVerticesDataAsUpdatable(TT) {
        let oT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const IT = this.getVertexBuffer(TT);
        IT && IT.isUpdatable() !== oT && this.setVerticesData(TT, this.getVerticesData(TT), oT)
      }
      setVerticesBuffer(TT) {
        let oT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        return this._geometry || (this._geometry = CT.d.CreateGeometryForMesh(this)), this._geometry.setVerticesBuffer(TT, IT, oT), this
      }
      updateVerticesData(TT, oT, IT, iT) {
        return this._geometry ? (iT ? (this.makeGeometryUnique(), this.updateVerticesData(TT, oT, IT, !1)) : this._geometry.updateVerticesData(TT, oT, IT), this) : this
      }
      updateMeshPositions(TT) {
        let oT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const IT = this.getVerticesData(ET.i.PositionKind);
        if (!IT) return this;
        if (TT(IT), this.updateVerticesData(ET.i.PositionKind, IT, !1, !1), oT) {
          const TT = this.hWT(),
            oT = this.getVerticesData(ET.i.NormalKind);
          if (!oT) return this;
          fT.c.ComputeNormals(IT, TT, oT), this.updateVerticesData(ET.i.NormalKind, oT, !1, !1)
        }
        return this
      }
      makeGeometryUnique() {
        if (!this._geometry) return this;
        if (1 === this._geometry.meshes.length) return this;
        const TT = this._geometry,
          oT = this._geometry.copy(CT.d.RandomId());
        return TT.releaseForMesh(this, !0), oT.applyToMesh(this), this
      }
      setIndexBuffer(TT, oT, IT) {
        let iT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          zT = this._geometry;
        zT || (zT = new CT.d(CT.d.RandomId(), this.pC(), void 0, void 0, this)), zT.setIndexBuffer(TT, oT, IT, iT)
      }
      setIndices(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          IT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          iT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this._geometry) this._geometry.setIndices(TT, oT, IT, iT);
        else {
          const iT = new fT.c;
          iT.indices = TT;
          const zT = this.pC();
          new CT.d(CT.d.RandomId(), zT, iT, IT, this, oT)
        }
        return this
      }
      updateIndices(TT, oT) {
        let IT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return this._geometry ? (this._geometry.updateIndices(TT, oT, IT), this) : this
      }
      toLeftHanded() {
        return this._geometry ? (this._geometry.toLeftHanded(), this) : this
      }
      _bind(TT, oT, IT) {
        let iT = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        if (!this._geometry) return this;
        const zT = this.pC().Zc();
        let kT;
        if (this._unIndexed)
          if (this._getRenderingFillMode(IT) === UT.c.WireFrameFillMode) kT = TT._getLinesIndexBuffer(this.hWT(), zT);
          else kT = null;
        else switch (this._getRenderingFillMode(IT)) {
          case UT.c.PointFillMode:
            kT = null;
            break;
          case UT.c.WireFrameFillMode:
            kT = TT._getLinesIndexBuffer(this.hWT(), zT);
            break;
          default:
          case UT.c.TriangleFillMode:
            kT = this._geometry.getIndexBuffer()
        }
        return this._bindDirect(oT, kT, iT)
      }
      _bindDirect(TT, oT) {
        let IT = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (!this._geometry) return this;
        if (this.morphTargetManager && this.morphTargetManager.isUsingTextureForTargets && this.morphTargetManager._bind(TT), IT && this._userInstancedBuffersStorage && !this.hasThinInstances) {
          if (!this._instanceDataStorage.useMonoDataStorageRenderPass && this._userInstancedBuffersStorage.renderPasses && this._userInstancedBuffersStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId]) {
            const TT = this._userInstancedBuffersStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId];
            for (const oT in TT) this._userInstancedBuffersStorage.vertexBuffers[oT] = TT[oT]
          }
          this._geometry._bind(TT, oT, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects)
        } else this._geometry._bind(TT, oT);
        return this
      }
      _draw(TT, oT, IT) {
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        this._internalMeshDataInfo._onBeforeDrawObservable && this._internalMeshDataInfo._onBeforeDrawObservable.notifyObservers(this);
        const iT = this.pC().Zc(),
          zT = iT._currentMaterialContext,
          kT = zT && zT.useVertexPulling;
        return this._unIndexed && oT !== UT.c.WireFrameFillMode || oT == UT.c.PointFillMode ? iT.drawArraysType(oT, TT.verticesStart, TT.verticesCount, this.forcedInstanceCount || IT) : oT == UT.c.WireFrameFillMode ? iT.drawElementsType(oT, 0, TT._linesIndexCount, this.forcedInstanceCount || IT) : kT ? iT.drawArraysType(oT, TT.indexStart, TT.indexCount, this.forcedInstanceCount || IT) : iT.drawElementsType(oT, TT.indexStart, TT.indexCount, this.forcedInstanceCount || IT), this
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
        let oT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const IT = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        if (this._instanceDataStorage.isFrozen) {
          if (oT) return IT.batchCacheReplacementModeInFrozenMode.hardwareInstancedRendering[TT] = !1, IT.batchCacheReplacementModeInFrozenMode.renderSelf[TT] = !0, IT.batchCacheReplacementModeInFrozenMode;
          if (IT.previousBatch) return IT.previousBatch
        }
        const iT = this.pC(),
          zT = iT._isInIntermediateRendering(),
          kT = zT ? this._internalAbstractMeshDataInfo._onlyForInstancesIntermediate : this._internalAbstractMeshDataInfo._onlyForInstances,
          WT = IT.batchCache;
        if (WT.mustReturn = !1, WT.renderSelf[TT] = oT || !kT && this.isEnabled() && this.isVisible, WT.visibleInstances[TT] = null, IT.visibleInstances && !oT) {
          const oT = IT.visibleInstances,
            kT = iT.getRenderId(),
            XT = zT ? oT.intermediateDefaultRenderId : oT.defaultRenderId;
          WT.visibleInstances[TT] = oT[kT], !WT.visibleInstances[TT] && XT && (WT.visibleInstances[TT] = oT[XT])
        }
        return WT.hardwareInstancedRendering[TT] = !oT && this._instanceDataStorage.hardwareInstancedRendering && null !== WT.visibleInstances[TT] && void 0 !== WT.visibleInstances[TT], IT.previousBatch = WT, WT
      }
      _updateInstancedBuffers(TT, oT, IT, iT, zT, kT) {
        const WT = oT.visibleInstances[TT._id],
          XT = WT ? WT.length : 0,
          BT = oT.parent,
          FT = this._instanceDataStorage;
        let ST = BT.instancesBuffer,
          DT = BT.instancesPreviousBuffer,
          LT = 0,
          xT = 0;
        const cT = oT.renderSelf[TT._id],
          KT = this._scene.floatingOriginOffset,
          MT = !ST || IT !== BT.instancesBufferSize || this._scene.needsPreviousWorldMatrices && !BT.instancesPreviousBuffer;
        if (this._instanceDataStorage.manualUpdate || FT.isFrozen && !MT) xT = (cT ? 1 : 0) + XT;
        else {
          const oT = this.getWorldMatrix();
          if (cT) {
            this._scene.needsPreviousWorldMatrices && (FT.masterMeshPreviousWorldMatrix ? (FT.masterMeshPreviousWorldMatrix.copyToArray(BT.instancesPreviousData, LT), FT.masterMeshPreviousWorldMatrix.SIT(oT)) : (FT.masterMeshPreviousWorldMatrix = oT.clone(), FT.masterMeshPreviousWorldMatrix.copyToArray(BT.instancesPreviousData, LT))), oT.copyToArray(BT.instancesData, LT);
            const TT = oT.bIT();
            BT.instancesData[LT + 12] = TT[12] - KT.x, BT.instancesData[LT + 13] = TT[13] - KT.y, BT.instancesData[LT + 14] = TT[14] - KT.z, LT += 16, xT++
          }
          if (WT) {
            if (PT.INSTANCEDMESH_SORT_TRANSPARENT && this._scene.activeCamera && TT.bc()?.needAlphaBlendingForMesh(TT.getRenderingMesh())) {
              const TT = this._scene.activeCamera.globalPosition;
              for (let oT = 0; oT < WT.length; oT++) {
                const IT = WT[oT];
                IT._distanceToCamera = RT.m.Distance(IT.GJ().KiT.centerWorld, TT)
              }
              WT.sort(((TT, oT) => TT._distanceToCamera > oT._distanceToCamera ? -1 : TT._distanceToCamera < oT._distanceToCamera ? 1 : 0))
            }
            for (let TT = 0; TT < WT.length; TT++) {
              const oT = WT[TT],
                IT = oT.getWorldMatrix();
              IT.copyToArray(BT.instancesData, LT), this._scene.needsPreviousWorldMatrices && (oT._previousWorldMatrix ? (oT._previousWorldMatrix.copyToArray(BT.instancesPreviousData, LT), oT._previousWorldMatrix.SIT(IT)) : (oT._previousWorldMatrix = IT.clone(), oT._previousWorldMatrix.copyToArray(BT.instancesPreviousData, LT)));
              const iT = IT.bIT();
              BT.instancesData[LT + 12] = iT[12] - KT.x, BT.instancesData[LT + 13] = iT[13] - KT.y, BT.instancesData[LT + 14] = iT[14] - KT.z, LT += 16, xT++
            }
          }
        }
        if (MT) {
          let TT;
          if (ST && ST.dispose(), DT && DT.dispose(), ST = new ET.d(iT, BT.instancesData, !0, 16, !1, !0), BT.instancesBuffer = ST, this._userInstancedBuffersStorage || (this._userInstancedBuffersStorage = {
              data: {},
              vertexBuffers: {},
              strides: {},
              sizes: {},
              vertexArrayObjects: this.Zc().getCaps().vertexArrayObject ? {} : void 0
            }), this._instanceDataStorage.useMonoDataStorageRenderPass) TT = this._userInstancedBuffersStorage.vertexBuffers;
          else {
            this._userInstancedBuffersStorage.renderPasses || (this._userInstancedBuffersStorage.renderPasses = {});
            const oT = this._instanceDataStorage.engine.currentRenderPassId;
            TT = this._userInstancedBuffersStorage.renderPasses[oT], TT || (this._userInstancedBuffersStorage.renderPasses[oT] = TT = {})
          }
          TT.world0 = ST.createVertexBuffer("world0", 0, 4), TT.world1 = ST.createVertexBuffer("world1", 4, 4), TT.world2 = ST.createVertexBuffer("world2", 8, 4), TT.world3 = ST.createVertexBuffer("world3", 12, 4), this._scene.needsPreviousWorldMatrices && (DT = new ET.d(iT, BT.instancesPreviousData, !0, 16, !1, !0), BT.instancesPreviousBuffer = DT, TT.previousWorld0 = DT.createVertexBuffer("previousWorld0", 0, 4), TT.previousWorld1 = DT.createVertexBuffer("previousWorld1", 4, 4), TT.previousWorld2 = DT.createVertexBuffer("previousWorld2", 8, 4), TT.previousWorld3 = DT.createVertexBuffer("previousWorld3", 12, 4)), this._invalidateInstanceVertexArrayObject()
        } else this._instanceDataStorage.isFrozen && !this._instanceDataStorage.forceMatrixUpdates || (ST.updateDirectly(BT.instancesData, 0, xT), !this._scene.needsPreviousWorldMatrices || this._instanceDataStorage.manualUpdate && !this._instanceDataStorage.previousManualUpdate || DT.updateDirectly(BT.instancesPreviousData, 0, xT));
        this._processInstancedBuffers(WT, cT), kT && void 0 !== zT && (this.pC()._activeIndices.addCount(TT.indexCount * xT, !1), iT._currentDrawContext && (iT._currentDrawContext.useInstancing = !0), this._bind(TT, kT, zT), this._draw(TT, zT, xT)), !this._scene.needsPreviousWorldMatrices || MT || !this._instanceDataStorage.manualUpdate || this._instanceDataStorage.isFrozen && !this._instanceDataStorage.forceMatrixUpdates || this._instanceDataStorage.previousManualUpdate || DT.updateDirectly(BT.instancesData, 0, xT)
      }
      _renderWithInstances(TT, oT, IT, iT, zT) {
        const kT = IT.visibleInstances[TT._id],
          WT = kT ? kT.length : 0,
          XT = IT.parent,
          BT = XT.instancesBufferSize,
          FT = 16 * (WT + 1) * 4;
        for (; XT.instancesBufferSize < FT;) XT.instancesBufferSize *= 2;
        return XT.instancesData && BT == XT.instancesBufferSize || (XT.instancesData = new Float32Array(XT.instancesBufferSize / 4)), (this._scene.needsPreviousWorldMatrices && !XT.instancesPreviousData || BT != XT.instancesBufferSize) && (XT.instancesPreviousData = new Float32Array(XT.instancesBufferSize / 4)), this._updateInstancedBuffers(TT, IT, BT, zT, oT, iT), zT.unbindInstanceAttributes(), this
      }
      _renderWithThinInstances(TT, oT, IT, iT) {
        const zT = this._thinInstanceDataStorage?.instancesCount ?? 0;
        this.pC()._activeIndices.addCount(TT.indexCount * zT, !1), iT._currentDrawContext && (iT._currentDrawContext.useInstancing = !0), this._bind(TT, IT, oT), this._draw(TT, oT, zT), this._scene.needsPreviousWorldMatrices && !this._thinInstanceDataStorage.previousMatrixData && this._thinInstanceDataStorage.matrixData && (this._thinInstanceDataStorage.previousMatrixBuffer ? this._thinInstanceDataStorage.previousMatrixBuffer.updateDirectly(this._thinInstanceDataStorage.matrixData, 0, zT) : this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", this._thinInstanceDataStorage.matrixData, !1)), iT.unbindInstanceAttributes()
      }
      _processInstancedBuffers(TT, oT) {}
      _processRendering(TT, oT, IT, iT, zT, kT, WT, XT) {
        const BT = this.pC(),
          FT = BT.Zc();
        if (iT = this._getRenderingFillMode(iT), kT && oT.getRenderingMesh().hasThinInstances) return this._renderWithThinInstances(oT, iT, IT, FT), this;
        if (kT) this._renderWithInstances(oT, iT, zT, IT, FT);
        else {
          FT._currentDrawContext && (FT._currentDrawContext.useInstancing = !1);
          let IT = 0;
          zT.renderSelf[oT._id] && (WT && WT(!1, TT.getWorldMatrix(), XT), IT++, this._draw(oT, iT, this._instanceDataStorage.overridenInstanceCount));
          const kT = zT.visibleInstances[oT._id];
          if (kT) {
            const TT = kT.length;
            IT += TT;
            for (let IT = 0; IT < TT; IT++) {
              const TT = kT[IT].getWorldMatrix();
              WT && WT(!0, TT, XT), this._draw(oT, iT)
            }
          }
          BT._activeIndices.addCount(oT.indexCount * IT, !1)
        }
        return this
      }
      _disposeInstanceDataStorageRenderPass(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        TT?.instancesBuffer && (oT && TT.instancesBuffer.dispose(), TT.instancesBuffer = null), TT?.instancesPreviousBuffer && (oT && TT.instancesPreviousBuffer.dispose(), TT.instancesPreviousBuffer = null)
      }
      _rebuild() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const oT in this._instanceDataStorage.renderPasses) {
          const IT = this._instanceDataStorage.renderPasses[oT];
          this._disposeInstanceDataStorageRenderPass(IT, TT)
        }
        if (this._disposeInstanceDataStorageRenderPass(this._instanceDataStorage.dataStorageRenderPass, TT), this._userInstancedBuffersStorage) {
          for (const oT in this._userInstancedBuffersStorage.vertexBuffers) {
            const IT = this._userInstancedBuffersStorage.vertexBuffers[oT];
            IT && (TT && IT.dispose(), this._userInstancedBuffersStorage.vertexBuffers[oT] = null)
          }
          this._userInstancedBuffersStorage.vertexArrayObjects && (this._userInstancedBuffersStorage.vertexArrayObjects = {})
        }
        this._internalMeshDataInfo._effectiveMaterial = null, super._rebuild(TT)
      }
      _releaseRenderPassId(TT) {
        const oT = this._instanceDataStorage.renderPasses[TT];
        if (oT && (this._disposeInstanceDataStorageRenderPass(oT, !0), delete this._instanceDataStorage.renderPasses[TT]), this._userInstancedBuffersStorage?.renderPasses) {
          const oT = this._userInstancedBuffersStorage.renderPasses[TT];
          if (oT)
            for (const TT in oT) oT[TT]?.dispose();
          delete this._userInstancedBuffersStorage.renderPasses[TT]
        }
        const IT = this._userInstancedBuffersStorage?.interleavedBuffers;
        IT?.[TT] && (IT[TT].buffer.dispose(), delete IT[TT])
      }
      _freeze() {
        if (this.pR) {
          for (let TT = 0; TT < this.pR.length; TT++) this._getInstancesRenderList(TT);
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
      renderWithRenderPassId(TT, oT, IT, iT) {
        let zT = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        const kT = this._scene.Zc(),
          WT = kT.currentRenderPassId;
        if (void 0 !== TT && (kT.currentRenderPassId = TT), iT)(!zT || zT && iT.isInFrustum(this._scene._frustumPlanes)) && this.render(iT, !!oT, IT);
        else
          for (let XT = 0; XT < this.pR.length; XT++) {
            const TT = this.pR[XT];
            (!zT || zT && TT.isInFrustum(this._scene._frustumPlanes)) && this.render(TT, !!oT, IT)
          }
        return void 0 !== TT && (kT.currentRenderPassId = WT), this
      }
      directRender() {
        if (!this.pR) return this;
        for (const TT of this.pR) this.render(TT, !1);
        return this
      }
      render(TT, oT, IT) {
        const iT = this.pC(),
          zT = iT.Zc();
        this._internalAbstractMeshDataInfo._isActiveIntermediate ? this._internalAbstractMeshDataInfo._isActiveIntermediate = !1 : this._internalAbstractMeshDataInfo._isActive = !1;
        const kT = iT.activeCameras?.length ?? 0,
          WT = kT > 1 && iT.activeCamera === iT.activeCameras[0] || kT <= 1,
          XT = this._occlusionDataStorage && -1 !== this._occlusionDataStorage.occlusionForRenderPassId && this._occlusionDataStorage.occlusionForRenderPassId !== zT.currentRenderPassId;
        if (WT && this._checkOcclusionQuery(XT) && !this._occlusionDataStorage.forceRenderingWhenOccluded) return this;
        const BT = this._getInstancesRenderList(TT._id, !!IT);
        if (BT.mustReturn) return this;
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        let FT = 0,
          ST = null;
        this.ignoreCameraMaxZ && iT.activeCamera && !iT._isInIntermediateRendering() && (FT = iT.activeCamera.maxZ, ST = iT.activeCamera, iT.activeCamera.maxZ = 0, iT.updateTransformMatrix(!0)), this._internalMeshDataInfo._onBeforeRenderObservable && this._internalMeshDataInfo._onBeforeRenderObservable.notifyObservers(this);
        const DT = TT.getRenderingMesh(),
          LT = BT.hardwareInstancedRendering[TT._id] || DT.hasThinInstances || !!this._userInstancedBuffersStorage && !TT.getMesh()._internalAbstractMeshDataInfo._actAsRegularMesh,
          xT = this._instanceDataStorage,
          cT = TT.bc();
        if (!cT) return ST && (ST.maxZ = FT, iT.updateTransformMatrix(!0)), this;
        if (xT.isFrozen && this._internalMeshDataInfo._effectiveMaterial && this._internalMeshDataInfo._effectiveMaterial === cT) {
          if (cT._storeEffectOnSubMeshes && !TT._drawWrapper?._wasPreviouslyReady || !cT._storeEffectOnSubMeshes && !cT._getDrawWrapper()._wasPreviouslyReady) return ST && (ST.maxZ = FT, iT.updateTransformMatrix(!0)), this
        } else {
          if (cT._storeEffectOnSubMeshes) {
            if (!cT.isReadyForSubMesh(this, TT, LT)) return ST && (ST.maxZ = FT, iT.updateTransformMatrix(!0)), this
          } else if (!cT.isReady(this, LT)) return ST && (ST.maxZ = FT, iT.updateTransformMatrix(!0)), this;
          this._internalMeshDataInfo._effectiveMaterial = cT
        }
        if (oT) {
          const TT = this._internalMeshDataInfo._effectiveMaterial;
          if (1 === TT.alphaModes.length) zT.setAlphaMode(TT.alphaMode);
          else
            for (let oT = 0; oT < TT.alphaModes.length; oT++) {
              const IT = TT.alphaModes[oT];
              zT.setAlphaMode(void 0 !== IT ? IT : 2, !1, oT)
            }
        }
        let KT;
        KT = this._internalMeshDataInfo._effectiveMaterial._storeEffectOnSubMeshes ? TT._drawWrapper : this._internalMeshDataInfo._effectiveMaterial._getDrawWrapper();
        const MT = KT?.effect ?? null;
        for (let eT = 0, RT = iT._beforeRenderingMeshStage; eT < RT.length; eT++) {
          RT[eT].action(this, TT, BT, MT)
        }
        if (!KT || !MT) return ST && (ST.maxZ = FT, iT.updateTransformMatrix(!0)), this;
        const rT = IT || this;
        let AT;
        if (!xT.isFrozen && (this._internalMeshDataInfo._effectiveMaterial.backFaceCulling || null !== this._internalMeshDataInfo._effectiveMaterial.sideOrientation || this._internalMeshDataInfo._effectiveMaterial._twoSidedLighting)) {
          const TT = rT._getWorldMatrixDeterminant();
          AT = this._internalMeshDataInfo._effectiveMaterial._getEffectiveOrientation(this), TT < 0 && (AT = AT === UT.c.ClockWiseSideOrientation ? UT.c.CounterClockWiseSideOrientation : UT.c.ClockWiseSideOrientation), this._internalMeshDataInfo._effectiveSideOrientation = AT
        }
        const gT = this._internalMeshDataInfo._effectiveMaterial._preBind(KT, this._internalMeshDataInfo._effectiveSideOrientation);
        this._internalMeshDataInfo._effectiveMaterial.forceDepthWrite && zT.setDepthWrite(!0);
        const hT = this._internalMeshDataInfo._effectiveMaterial,
          wT = hT.fillMode;
        this._internalMeshDataInfo._onBeforeBindObservable && this._internalMeshDataInfo._onBeforeBindObservable.notifyObservers(this), LT || this._bind(TT, MT, wT, !1);
        const mT = rT.getWorldMatrix();
        hT._storeEffectOnSubMeshes ? hT.bindForSubMesh(mT, this, TT) : hT.bind(mT, this);
        try {
          aT.d._BindAttachmentsForEffect(zT, MT) && (!hT.backFaceCulling && hT.separateCullingPass && (zT.setState(!0, hT.zOffset, !1, !gT, hT.cullBackFaces, hT.stencil, hT.zOffsetUnits), this._processRendering(this, TT, MT, wT, BT, LT, this._onBeforeDraw, this._internalMeshDataInfo._effectiveMaterial), zT.setState(!0, hT.zOffset, !1, gT, hT.cullBackFaces, hT.stencil, hT.zOffsetUnits), this._internalMeshDataInfo._onBetweenPassObservable && this._internalMeshDataInfo._onBetweenPassObservable.notifyObservers(TT)), this._processRendering(this, TT, MT, wT, BT, LT, this._onBeforeDraw, this._internalMeshDataInfo._effectiveMaterial))
        } finally {
          aT.d._RestoreAttachments(zT)
        }
        this._internalMeshDataInfo._effectiveMaterial.unbind();
        for (let eT = 0, RT = iT._afterRenderingMeshStage; eT < RT.length; eT++) {
          RT[eT].action(this, TT, BT, MT)
        }
        return this._internalMeshDataInfo._onAfterRenderObservable && this._internalMeshDataInfo._onAfterRenderObservable.notifyObservers(this), ST && (ST.maxZ = FT, iT.updateTransformMatrix(!0)), 2 !== iT.performancePriority || xT.isFrozen || this._freeze(), this
      }
      _renderRunFollower(TT, oT) {
        const IT = this._scene,
          iT = IT._engine;
        if (iT.isWebGPU || TT._mesh !== this || 0 !== this.instances.length || this.render !== PT.prototype.render) return !1;
        const zT = TT.bc();
        if (!zT || zT !== IT._cachedMaterial || void 0 === zT._canBindRunFollower) return !1;
        const kT = TT._drawWrapper,
          WT = kT?.effect;
        if (!WT || WT !== IT._cachedEffect || this.visibility !== IT._cachedVisibility || kT._forceRebindOnNextCall) return !1;
        const XT = this.hasThinInstances;
        if (!XT && this._userInstancedBuffersStorage) return !1;
        if (!kT._wasPreviouslyReady || kT._wasPreviouslyUsingInstances !== XT) return !1;
        const BT = this._internalMeshDataInfo;
        if (this.ignoreCameraMaxZ || this.morphTargetManager || this._instanceDataStorage.isFrozen || IT._isInIntermediateRendering() || 0 !== IT._beforeRenderingMeshStage.length || 0 !== IT._afterRenderingMeshStage.length || BT._onBeforeRenderObservable?.hasObservers() || BT._onBeforeBindObservable?.hasObservers() || BT._onAfterRenderObservable?.hasObservers()) return !1;
        const FT = this.occlusionType;
        if (void 0 !== FT && FT !== jT.e.OCCLUSION_TYPE_NONE || !zT._canBindRunFollower(IT, iT, this, TT, WT)) return !1;
        const ST = this._internalAbstractMeshDataInfo,
          DT = ST._isActiveIntermediate;
        DT ? ST._isActiveIntermediate = !1 : ST._isActive = !1;
        const LT = IT.activeCameras?.length ?? 0;
        (LT > 1 && IT.activeCamera === IT.activeCameras[0] || LT <= 1) && this._checkOcclusionQuery(!1);
        const xT = this._getInstancesRenderList(TT._id);
        if (xT.mustReturn) return !0;
        if (!XT && !xT.renderSelf[TT._id]) return DT ? ST._isActiveIntermediate = !0 : ST._isActive = !0, !1;
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return !0;
        if (BT._effectiveMaterial = zT, oT)
          if (1 === zT.alphaModes.length) iT.setAlphaMode(zT.alphaMode);
          else
            for (let KT = 0; KT < zT.alphaModes.length; KT++) {
              const TT = zT.alphaModes[KT];
              iT.setAlphaMode(void 0 !== TT ? TT : 2, !1, KT)
            }
        if (zT.backFaceCulling || null !== zT.sideOrientation || zT._twoSidedLighting) {
          const TT = this._getWorldMatrixDeterminant();
          let oT = zT._getEffectiveOrientation(this);
          TT < 0 && (oT = oT === UT.c.ClockWiseSideOrientation ? UT.c.CounterClockWiseSideOrientation : UT.c.ClockWiseSideOrientation), BT._effectiveSideOrientation = oT
        }
        zT._preBind(kT, BT._effectiveSideOrientation), zT.forceDepthWrite && iT.setDepthWrite(!0);
        const cT = zT.fillMode;
        return XT || this._bind(TT, WT, cT, !1), zT._bindRunFollower(this.getWorldMatrix(), this, TT, WT), this._processRendering(this, TT, WT, cT, xT, XT, this._onBeforeDraw, zT), zT.unbind(), 2 === IT.performancePriority && this._freeze(), !0
      }
      cleanMatrixWeights() {
        this.isVerticesDataPresent(ET.i.MatricesWeightsKind) && (this.isVerticesDataPresent(ET.i.MatricesWeightsExtraKind) ? this._normalizeSkinWeightsAndExtra() : this._normalizeSkinFourWeights())
      }
      _normalizeSkinFourWeights() {
        const TT = this.getVerticesData(ET.i.MatricesWeightsKind),
          oT = TT.length;
        for (let IT = 0; IT < oT; IT += 4) {
          const oT = TT[IT] + TT[IT + 1] + TT[IT + 2] + TT[IT + 3];
          if (0 === oT) TT[IT] = 1;
          else {
            const iT = 1 / oT;
            TT[IT] *= iT, TT[IT + 1] *= iT, TT[IT + 2] *= iT, TT[IT + 3] *= iT
          }
        }
        this.setVerticesData(ET.i.MatricesWeightsKind, TT)
      }
      _normalizeSkinWeightsAndExtra() {
        const TT = this.getVerticesData(ET.i.MatricesWeightsExtraKind),
          oT = this.getVerticesData(ET.i.MatricesWeightsKind),
          IT = oT.length;
        for (let iT = 0; iT < IT; iT += 4) {
          let IT = oT[iT] + oT[iT + 1] + oT[iT + 2] + oT[iT + 3];
          if (IT += TT[iT] + TT[iT + 1] + TT[iT + 2] + TT[iT + 3], 0 === IT) oT[iT] = 1;
          else {
            const zT = 1 / IT;
            oT[iT] *= zT, oT[iT + 1] *= zT, oT[iT + 2] *= zT, oT[iT + 3] *= zT, TT[iT] *= zT, TT[iT + 1] *= zT, TT[iT + 2] *= zT, TT[iT + 3] *= zT
          }
        }
        this.setVerticesData(ET.i.MatricesWeightsKind, oT), this.setVerticesData(ET.i.MatricesWeightsKind, TT)
      }
      validateSkinning() {
        const TT = this.getVerticesData(ET.i.MatricesWeightsExtraKind),
          oT = this.getVerticesData(ET.i.MatricesWeightsKind);
        if (null === oT || null == this.skeleton) return {
          skinned: !1,
          valid: !0,
          Bc: "not skinned"
        };
        const IT = oT.length;
        let iT = 0,
          zT = 0,
          kT = 0,
          WT = 0;
        const XT = null === TT ? 4 : 8,
          BT = [];
        for (let xT = 0; xT <= XT; xT++) BT[xT] = 0;
        for (let xT = 0; xT < IT; xT += 4) {
          let IT = oT[xT],
            FT = IT,
            ST = 0 === FT ? 0 : 1;
          for (let zT = 1; zT < XT; zT++) {
            const kT = zT < 4 ? oT[xT + zT] : TT[xT + zT - 4];
            kT > IT && iT++, 0 !== kT && ST++, FT += kT, IT = kT
          }
          if (BT[ST]++, ST > kT && (kT = ST), 0 === FT) zT++;
          else {
            const IT = 1 / FT;
            let iT = 0;
            for (let zT = 0; zT < XT; zT++) iT += zT < 4 ? Math.abs(oT[xT + zT] - oT[xT + zT] * IT) : Math.abs(TT[xT + zT - 4] - TT[xT + zT - 4] * IT);
            iT > .001 && WT++
          }
        }
        const FT = this.skeleton.bones.length,
          ST = this.getVerticesData(ET.i.MatricesIndicesKind),
          DT = this.getVerticesData(ET.i.MatricesIndicesExtraKind);
        let LT = 0;
        for (let xT = 0; xT < IT; xT += 4)
          for (let TT = 0; TT < XT; TT++) {
            const oT = TT < 4 ? ST[xT + TT] : DT[xT + TT - 4];
            (oT >= FT || oT < 0) && LT++
          }
        return {
          skinned: !0,
          valid: 0 === zT && 0 === WT && 0 === LT,
          Bc: "Number of Weights = " + IT / 4 + "\nMaximum influences = " + kT + "\nMissing Weights = " + zT + "\nNot Sorted = " + iT + "\nNot Normalized = " + WT + "\nWeightCounts = [" + BT + "]\nNumber of bones = " + FT + "\nBad Bone Indices = " + LT
        }
      }
      _checkDelayState() {
        const TT = this.pC();
        return this._geometry ? this._geometry.load(TT) : 4 === this.delayLoadState && (this.delayLoadState = 2, this._queueLoad(TT)), this
      }
      _queueLoad(TT) {
        TT.addPendingData(this);
        const oT = -1 !== this.delayLoadingFile.indexOf(".babylonbinarymeshdata");
        return (async () => {
          try {
            const IT = await TT._loadDelayedFileAsync(this.delayLoadingFile, oT, !0);
            IT instanceof ArrayBuffer ? this._delayLoadingFunction(IT, this) : this._delayLoadingFunction(JSON.parse(IT), this);
            for (const TT of this.instances) TT.refreshBoundingInfo(), TT._syncSubMeshes();
            this.delayLoadState = 1, TT.removePendingData(this)
          } catch (IT) {
            TT.removePendingData(this), TT.IIT || HT.d.Error(`Unable to delay load geometry data for mesh "${this.name}" from "${this.delayLoadingFile}": ${IT}`)
          }
        })(), this
      }
      isInFrustum(TT) {
        return 2 !== this.delayLoadState && (!!super.isInFrustum(TT) && (this._checkDelayState(), !0))
      }
      setMaterialById(TT) {
        const oT = this.pC().materials;
        let IT;
        for (IT = oT.length - 1; IT > -1; IT--)
          if (oT[IT].id === TT) return this.material = oT[IT], this;
        const iT = this.pC().multiMaterials;
        for (IT = iT.length - 1; IT > -1; IT--)
          if (iT[IT].id === TT) return this.material = iT[IT], this;
        return this
      }
      getAnimatables() {
        const TT = [];
        return this.material && TT.push(this.material), this.skeleton && TT.push(this.skeleton), TT
      }
      bakeTransformIntoVertices(TT) {
        if (!this.isVerticesDataPresent(ET.i.PositionKind)) return this;
        const oT = this.pR.splice(0);
        this._resetPointsArrayCache();
        let IT = this.getVerticesData(ET.i.PositionKind);
        const iT = RT.m.Zero();
        let zT;
        for (zT = 0; zT < IT.length; zT += 3) RT.m.TransformCoordinatesFromFloatsToRef(IT[zT], IT[zT + 1], IT[zT + 2], TT, iT).toArray(IT, zT);
        if (this.setVerticesData(ET.i.PositionKind, IT, this.getVertexBuffer(ET.i.PositionKind).isUpdatable()), this.isVerticesDataPresent(ET.i.NormalKind)) {
          for (IT = this.getVerticesData(ET.i.NormalKind), zT = 0; zT < IT.length; zT += 3) RT.m.TransformNormalFromFloatsToRef(IT[zT], IT[zT + 1], IT[zT + 2], TT, iT).normalize().toArray(IT, zT);
          this.setVerticesData(ET.i.NormalKind, IT, this.getVertexBuffer(ET.i.NormalKind).isUpdatable())
        }
        if (this.isVerticesDataPresent(ET.i.TangentKind)) {
          for (IT = this.getVerticesData(ET.i.TangentKind), zT = 0; zT < IT.length; zT += 4) RT.m.TransformNormalFromFloatsToRef(IT[zT], IT[zT + 1], IT[zT + 2], TT, iT).normalize().toArray(IT, zT);
          this.setVerticesData(ET.i.TangentKind, IT, this.getVertexBuffer(ET.i.TangentKind).isUpdatable())
        }
        return TT.determinant() < 0 && this.flipFaces(), this.releaseSubMeshes(), this.pR = oT, this
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
          oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          IT = arguments.length > 2 ? arguments[2] : void 0,
          iT = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        if (oT && void 0 === oT._addToSceneRootNodes) {
          const IT = oT;
          return NT.source = this, NT.doNotCloneChildren = IT.doNotCloneChildren, NT.clonePhysicsImpostor = IT.clonePhysicsImpostor, NT.cloneThinInstances = IT.cloneThinInstances, new PT(TT, this.pC(), NT)
        }
        return new PT(TT, this.pC(), oT, this, IT, iT)
      }
      dispose(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.morphTargetManager = null, this._geometry && this._geometry.releaseForMesh(this, !0);
        const IT = this._internalMeshDataInfo;
        if (IT._onBeforeDrawObservable && IT._onBeforeDrawObservable.clear(), IT._onBeforeBindObservable && IT._onBeforeBindObservable.clear(), IT._onBeforeRenderObservable && IT._onBeforeRenderObservable.clear(), IT._onAfterRenderObservable && IT._onAfterRenderObservable.clear(), IT._onBetweenPassObservable && IT._onBetweenPassObservable.clear(), this._scene.useClonedMeshMap) {
          if (IT.meshMap)
            for (const TT in IT.meshMap) {
              const oT = IT.meshMap[TT];
              oT && (oT._internalMeshDataInfo._source = null, IT.meshMap[TT] = void 0)
            }
          IT._source && IT._source._internalMeshDataInfo.meshMap && (IT._source._internalMeshDataInfo.meshMap[this.uniqueId] = void 0)
        } else {
          const TT = this.pC().meshes;
          for (const oT of TT) {
            const TT = oT;
            TT._internalMeshDataInfo && TT._internalMeshDataInfo._source && TT._internalMeshDataInfo._source === this && (TT._internalMeshDataInfo._source = null)
          }
        }
        IT._source = null, this._disposeInstanceSpecificData(), this._disposeThinInstanceSpecificData(), this._internalMeshDataInfo._checkReadinessObserver && this._scene.onBeforeRenderObservable.remove(this._internalMeshDataInfo._checkReadinessObserver), super.dispose(TT, oT)
      }
      _disposeInstanceSpecificData() {}
      _disposeThinInstanceSpecificData() {}
      _invalidateInstanceVertexArrayObject() {}
      applyDisplacementMap(TT, oT, IT, iT, zT, kT) {
        let WT = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          XT = arguments.length > 7 ? arguments[7] : void 0;
        const BT = this.pC();
        return (0, gT.r)(TT, (TT => {
          const XT = TT.width,
            BT = TT.height,
            FT = this.Zc().createCanvas(XT, BT).getContext("2d");
          FT.drawImage(TT, 0, 0);
          const ST = FT.getImageData(0, 0, XT, BT).data;
          this.applyDisplacementMapFromBuffer(ST, XT, BT, oT, IT, zT, kT, WT), iT && iT(this)
        }), XT || (() => {}), BT.offlineProvider), this
      }
      applyDisplacementMapFromBuffer(TT, oT, IT, iT, zT, kT, WT) {
        let XT = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
        if (!this.isVerticesDataPresent(ET.i.PositionKind) || !this.isVerticesDataPresent(ET.i.NormalKind) || !this.isVerticesDataPresent(ET.i.UVKind)) return HT.d.Warn("Cannot call applyDisplacementMap: Given mesh is not complete. Position, Normal or UV are missing"), this;
        const BT = this.getVerticesData(ET.i.PositionKind, !0, !0),
          FT = this.getVerticesData(ET.i.NormalKind),
          ST = this.getVerticesData(ET.i.UVKind);
        let DT = RT.m.Zero();
        const LT = RT.m.Zero(),
          xT = RT.j.Zero();
        kT = kT || RT.j.Zero(), WT = WT || new RT.j(1, 1);
        for (let cT = 0; cT < BT.length; cT += 3) {
          RT.m.FromArrayToRef(BT, cT, DT), RT.m.FromArrayToRef(FT, cT, LT), RT.j.FromArrayToRef(ST, cT / 3 * 2, xT);
          const XT = 4 * ((Math.abs(xT.x * WT.x + kT.x % 1) * (oT - 1) % oT | 0) + (Math.abs(xT.y * WT.y + kT.y % 1) * (IT - 1) % IT | 0) * oT),
            KT = .3 * (TT[XT] / 255) + .59 * (TT[XT + 1] / 255) + .11 * (TT[XT + 2] / 255);
          LT.normalize(), LT.scaleInPlace(iT + (zT - iT) * KT), DT = DT.add(LT), DT.toArray(BT, cT)
        }
        return fT.c.ComputeNormals(BT, this.hWT(), FT), XT ? (this.setVerticesData(ET.i.PositionKind, BT), this.setVerticesData(ET.i.NormalKind, FT), this.setVerticesData(ET.i.UVKind, ST)) : (this.updateVerticesData(ET.i.PositionKind, BT), this.updateVerticesData(ET.i.NormalKind, FT)), this
      }
      _getFlattenedNormals(TT, oT) {
        const IT = new Float32Array(3 * TT.length);
        let iT = 0;
        const zT = this.sideOrientation === (this._scene.useRightHandedSystem ? 1 : 0);
        for (let kT = 0; kT < TT.length; kT += 3) {
          const WT = RT.m.FromArray(oT, 3 * TT[kT]),
            XT = RT.m.FromArray(oT, 3 * TT[kT + 1]),
            BT = RT.m.FromArray(oT, 3 * TT[kT + 2]),
            FT = WT.subtract(XT),
            ST = BT.subtract(XT),
            DT = RT.m.Normalize(RT.m.Cross(FT, ST));
          zT && DT.scaleInPlace(-1);
          for (let TT = 0; TT < 3; TT++) IT[iT++] = DT.x, IT[iT++] = DT.y, IT[iT++] = DT.z
        }
        return IT
      }
      _convertToUnIndexedMesh() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const oT = this.getVerticesDataKinds().filter((TT => !this.getVertexBuffer(TT)?.getIsInstanced())),
          IT = this.hWT(!1, !0),
          iT = {},
          zT = (TT, oT) => {
            const iT = new Float32Array(IT.length * oT);
            let zT = 0;
            for (let kT = 0; kT < IT.length; kT++)
              for (let WT = 0; WT < oT; WT++) iT[zT++] = TT[IT[kT] * oT + WT];
            return iT
          },
          kT = this.GJ(),
          WT = this.geometry ? this.pR.slice(0) : [];
        for (const XT of oT) iT[XT] = this.getVerticesData(XT);
        for (const XT of oT) {
          const oT = this.getVertexBuffer(XT),
            kT = oT.getSize();
          if (TT && XT === ET.i.NormalKind) {
            const TT = this._getFlattenedNormals(IT, iT[ET.i.PositionKind]);
            this.setVerticesData(ET.i.NormalKind, TT, oT.isUpdatable(), kT)
          } else this.setVerticesData(XT, zT(iT[XT], kT), oT.isUpdatable(), kT)
        }
        if (this.morphTargetManager) {
          for (let oT = 0; oT < this.morphTargetManager.numTargets; oT++) {
            const iT = this.morphTargetManager.getTarget(oT),
              kT = iT.getPositions();
            iT.mWT(zT(kT, 3));
            const WT = iT.getNormals();
            WT && iT.setNormals(TT ? this._getFlattenedNormals(IT, kT) : zT(WT, 3));
            const XT = iT.getTangents();
            XT && iT.setTangents(zT(XT, 3));
            const BT = iT.getUVs();
            BT && iT.setUVs(zT(BT, 2));
            const FT = iT.getColors();
            FT && iT.setColors(zT(FT, 4))
          }
          this.morphTargetManager.synchronize()
        }
        for (let XT = 0; XT < IT.length; XT++) IT[XT] = XT;
        this.setIndices(IT), this._unIndexed = !0, this.releaseSubMeshes();
        for (const XT of WT) {
          const TT = XT.GJ();
          JT.c.AddToMesh(XT.materialIndex, XT.indexStart, XT.indexCount, XT.indexStart, XT.indexCount, this).setBoundingInfo(TT)
        }
        return this.setBoundingInfo(kT), this.synchronizeInstances(), this
      }
      convertToFlatShadedMesh() {
        return this._convertToUnIndexedMesh(!0)
      }
      convertToUnIndexedMesh() {
        return this._convertToUnIndexedMesh()
      }
      flipFaces() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const oT = fT.c.ExtractFromMesh(this);
        let IT;
        if (TT && this.isVerticesDataPresent(ET.i.NormalKind) && oT.normals) {
          for (IT = 0; IT < oT.normals.length; IT++) oT.normals[IT] *= -1;
          this.setVerticesData(ET.i.NormalKind, oT.normals, this.isVertexBufferUpdatable(ET.i.NormalKind))
        }
        if (oT.indices) {
          let TT;
          for (IT = 0; IT < oT.indices.length; IT += 3) TT = oT.indices[IT + 1], oT.indices[IT + 1] = oT.indices[IT + 2], oT.indices[IT + 2] = TT;
          this.setIndices(oT.indices, null, this.isVertexBufferUpdatable(ET.i.PositionKind), !0)
        }
        return this
      }
      increaseVertices() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        const oT = fT.c.ExtractFromMesh(this),
          IT = oT.indices && !Array.isArray(oT.indices) && Array.from ? Array.from(oT.indices) : oT.indices,
          iT = oT.positions && !Array.isArray(oT.positions) && Array.from ? Array.from(oT.positions) : oT.positions,
          zT = oT.uvs && !Array.isArray(oT.uvs) && Array.from ? Array.from(oT.uvs) : oT.uvs,
          kT = oT.normals && !Array.isArray(oT.normals) && Array.from ? Array.from(oT.normals) : oT.normals;
        if (IT && iT) {
          oT.indices = IT, oT.positions = iT, zT && (oT.uvs = zT), kT && (oT.normals = kT);
          const WT = TT + 1,
            XT = [];
          for (let TT = 0; TT < WT + 1; TT++) XT[TT] = [];
          let BT, FT;
          const ST = new RT.m(0, 0, 0),
            DT = new RT.m(0, 0, 0),
            LT = new RT.j(0, 0),
            xT = [],
            cT = [],
            KT = [];
          let MT, rT, AT, gT = iT.length;
          zT && (rT = zT.length), kT && (AT = kT.length);
          for (let TT = 0; TT < IT.length; TT += 3) {
            cT[0] = IT[TT], cT[1] = IT[TT + 1], cT[2] = IT[TT + 2];
            for (let TT = 0; TT < 3; TT++)
              if (BT = cT[TT], FT = cT[(TT + 1) % 3], void 0 === KT[BT] && void 0 === KT[FT] ? (KT[BT] = [], KT[FT] = []) : (void 0 === KT[BT] && (KT[BT] = []), void 0 === KT[FT] && (KT[FT] = [])), void 0 === KT[BT][FT] && void 0 === KT[FT][BT]) {
                KT[BT][FT] = [], ST.x = (iT[3 * FT] - iT[3 * BT]) / WT, ST.y = (iT[3 * FT + 1] - iT[3 * BT + 1]) / WT, ST.z = (iT[3 * FT + 2] - iT[3 * BT + 2]) / WT, kT && (DT.x = (kT[3 * FT] - kT[3 * BT]) / WT, DT.y = (kT[3 * FT + 1] - kT[3 * BT + 1]) / WT, DT.z = (kT[3 * FT + 2] - kT[3 * BT + 2]) / WT), zT && (LT.x = (zT[2 * FT] - zT[2 * BT]) / WT, LT.y = (zT[2 * FT + 1] - zT[2 * BT + 1]) / WT), KT[BT][FT].push(BT);
                for (let TT = 1; TT < WT; TT++) KT[BT][FT].push(iT.length / 3), iT[gT++] = iT[3 * BT] + TT * ST.x, iT[gT++] = iT[3 * BT + 1] + TT * ST.y, iT[gT++] = iT[3 * BT + 2] + TT * ST.z, kT && (kT[AT++] = kT[3 * BT] + TT * DT.x, kT[AT++] = kT[3 * BT + 1] + TT * DT.y, kT[AT++] = kT[3 * BT + 2] + TT * DT.z), zT && (zT[rT++] = zT[2 * BT] + TT * LT.x, zT[rT++] = zT[2 * BT + 1] + TT * LT.y);
                KT[BT][FT].push(FT), KT[FT][BT] = [], MT = KT[BT][FT].length;
                for (let TT = 0; TT < MT; TT++) KT[FT][BT][TT] = KT[BT][FT][MT - 1 - TT]
              } XT[0][0] = IT[TT], XT[1][0] = KT[IT[TT]][IT[TT + 1]][1], XT[1][1] = KT[IT[TT]][IT[TT + 2]][1];
            for (let oT = 2; oT < WT; oT++) {
              XT[oT][0] = KT[IT[TT]][IT[TT + 1]][oT], XT[oT][oT] = KT[IT[TT]][IT[TT + 2]][oT], ST.x = (iT[3 * XT[oT][oT]] - iT[3 * XT[oT][0]]) / oT, ST.y = (iT[3 * XT[oT][oT] + 1] - iT[3 * XT[oT][0] + 1]) / oT, ST.z = (iT[3 * XT[oT][oT] + 2] - iT[3 * XT[oT][0] + 2]) / oT, kT && (DT.x = (kT[3 * XT[oT][oT]] - kT[3 * XT[oT][0]]) / oT, DT.y = (kT[3 * XT[oT][oT] + 1] - kT[3 * XT[oT][0] + 1]) / oT, DT.z = (kT[3 * XT[oT][oT] + 2] - kT[3 * XT[oT][0] + 2]) / oT), zT && (LT.x = (zT[2 * XT[oT][oT]] - zT[2 * XT[oT][0]]) / oT, LT.y = (zT[2 * XT[oT][oT] + 1] - zT[2 * XT[oT][0] + 1]) / oT);
              for (let TT = 1; TT < oT; TT++) XT[oT][TT] = iT.length / 3, iT[gT++] = iT[3 * XT[oT][0]] + TT * ST.x, iT[gT++] = iT[3 * XT[oT][0] + 1] + TT * ST.y, iT[gT++] = iT[3 * XT[oT][0] + 2] + TT * ST.z, kT && (kT[AT++] = kT[3 * XT[oT][0]] + TT * DT.x, kT[AT++] = kT[3 * XT[oT][0] + 1] + TT * DT.y, kT[AT++] = kT[3 * XT[oT][0] + 2] + TT * DT.z), zT && (zT[rT++] = zT[2 * XT[oT][0]] + TT * LT.x, zT[rT++] = zT[2 * XT[oT][0] + 1] + TT * LT.y)
            }
            XT[WT] = KT[IT[TT + 1]][IT[TT + 2]], xT.push(XT[0][0], XT[1][0], XT[1][1]);
            for (let TT = 1; TT < WT; TT++) {
              let oT;
              for (oT = 0; oT < TT; oT++) xT.push(XT[TT][oT], XT[TT + 1][oT], XT[TT + 1][oT + 1]), xT.push(XT[TT][oT], XT[TT + 1][oT + 1], XT[TT][oT + 1]);
              xT.push(XT[TT][oT], XT[TT + 1][oT], XT[TT + 1][oT + 1])
            }
          }
          oT.indices = xT, oT.applyToMesh(this, this.isVertexBufferUpdatable(ET.i.PositionKind))
        } else HT.d.Warn("Couldn't increase number of vertices : VertexData must contain at least indices and positions")
      }
      forceSharedVertices() {
        const TT = fT.c.ExtractFromMesh(this),
          oT = TT.uvs,
          IT = TT.indices,
          iT = TT.positions,
          zT = TT.colors,
          kT = TT.matricesIndices,
          WT = TT.matricesWeights,
          XT = TT.matricesIndicesExtra,
          BT = TT.matricesWeightsExtra;
        if (void 0 === IT || void 0 === iT || null === IT || null === iT) HT.d.Warn("VertexData contains empty entries");
        else {
          const FT = [],
            ST = [],
            DT = [],
            LT = [],
            xT = [],
            cT = [],
            KT = [],
            MT = [];
          let rT, AT = 0;
          const gT = {};
          let hT, wT;
          for (let TT = 0; TT < IT.length; TT += 3) {
            wT = [IT[TT], IT[TT + 1], IT[TT + 2]], rT = [];
            for (let TT = 0; TT < 3; TT++) {
              rT[TT] = "";
              for (let oT = 0; oT < 3; oT++) Math.abs(iT[3 * wT[TT] + oT]) < 1e-8 && (iT[3 * wT[TT] + oT] = 0), rT[TT] += iT[3 * wT[TT] + oT] + "|"
            }
            if (rT[0] != rT[1] && rT[0] != rT[2] && rT[1] != rT[2])
              for (let TT = 0; TT < 3; TT++) {
                if (hT = gT[rT[TT]], void 0 === hT) {
                  gT[rT[TT]] = AT, hT = AT++;
                  for (let oT = 0; oT < 3; oT++) FT.push(iT[3 * wT[TT] + oT]);
                  if (null !== zT && void 0 !== zT)
                    for (let oT = 0; oT < 4; oT++) LT.push(zT[4 * wT[TT] + oT]);
                  if (null !== oT && void 0 !== oT)
                    for (let IT = 0; IT < 2; IT++) DT.push(oT[2 * wT[TT] + IT]);
                  if (null !== kT && void 0 !== kT)
                    for (let oT = 0; oT < 4; oT++) xT.push(kT[4 * wT[TT] + oT]);
                  if (null !== WT && void 0 !== WT)
                    for (let oT = 0; oT < 4; oT++) cT.push(WT[4 * wT[TT] + oT]);
                  if (null !== XT && void 0 !== XT)
                    for (let oT = 0; oT < 4; oT++) KT.push(XT[4 * wT[TT] + oT]);
                  if (null !== BT && void 0 !== BT)
                    for (let oT = 0; oT < 4; oT++) MT.push(BT[4 * wT[TT] + oT])
                }
                ST.push(hT)
              }
          }
          const mT = [];
          fT.c.ComputeNormals(FT, ST, mT), TT.positions = FT, TT.indices = ST, TT.normals = mT, null !== oT && void 0 !== oT && (TT.uvs = DT), null !== zT && void 0 !== zT && (TT.colors = LT), null !== kT && void 0 !== kT && (TT.matricesIndices = xT), null !== WT && void 0 !== WT && (TT.matricesWeights = cT), null !== XT && void 0 !== XT && (TT.matricesIndicesExtra = KT), null !== WT && void 0 !== WT && (TT.matricesWeightsExtra = MT), TT.applyToMesh(this, this.isVertexBufferUpdatable(ET.i.PositionKind))
        }
      }
      static _instancedMeshFactory(TT, oT) {
        throw (0, qT.k)("InstancedMesh")
      }
      static _PhysicsImpostorParser(TT, oT, IT) {
        throw (0, qT.k)("PhysicsImpostor")
      }
      createInstance(TT) {
        const oT = PT._instancedMeshFactory(TT, this);
        return oT.parent = this.parent, oT
      }
      synchronizeInstances() {
        for (let TT = 0; TT < this.instances.length; TT++) {
          this.instances[TT]._syncSubMeshes()
        }
        return this
      }
      optimizeIndices(TT) {
        const oT = this.hWT(),
          IT = this.getVerticesData(ET.i.PositionKind);
        if (!IT || !oT) return this;
        const iT = [];
        for (let kT = 0; kT < IT.length; kT += 3) iT.push(RT.m.FromArray(IT, kT));
        const zT = [];
        return AT.d.SyncAsyncForLoop(iT.length, 40, (TT => {
          const oT = iT.length - 1 - TT,
            IT = iT[oT];
          for (let kT = 0; kT < oT; ++kT) {
            const TT = iT[kT];
            if (IT.equals(TT)) {
              zT[oT] = kT;
              break
            }
          }
        }), (() => {
          for (let TT = 0; TT < oT.length; ++TT) oT[TT] = zT[oT[TT]] || oT[TT];
          const IT = this.pR.slice(0);
          this.setIndices(oT), this.pR = IT, TT && TT(this)
        })), this
      }
      serialize() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        TT.name = this.name, TT.id = this.id, TT.uniqueId = this.uniqueId, TT.type = this.getClassName(), wT.c && wT.c.HasTags(this) && (TT.tags = wT.c.GetTags(this)), TT.position = this.position.bIT(), this.rotationQuaternion ? TT.rotationQuaternion = this.rotationQuaternion.bIT() : this.rotation && (TT.rotation = this.rotation.bIT()), TT.ti = this.ti.bIT(), this._postMultiplyPivotMatrix ? TT.pivotMatrix = this.getPivotMatrix().bIT() : TT.localMatrix = this.getPivotMatrix().bIT(), TT.isEnabled = this.isEnabled(!1), TT.isVisible = this.isVisible, TT.infiniteDistance = this.infiniteDistance, TT.pickable = this.dK, TT.receiveShadows = this.receiveShadows, TT.billboardMode = this.billboardMode, TT.visibility = this.visibility, TT.lc = this.lc, TT.checkCollisions = this.checkCollisions, TT.ellipsoid = this.ellipsoid.bIT(), TT.ellipsoidOffset = this.ellipsoidOffset.bIT(), TT.Gc = this.Gc, TT.isBlocker = this.isBlocker, TT.sideOrientation = this.sideOrientation, this._isWorldMatrixFrozen && (TT.LJ = !0), this.parent && this.parent._serializeAsParent(TT), TT.isUnIndexed = this.isUnIndexed;
        const oT = this._geometry;
        if (oT && this.pR) {
          TT.geometryUniqueId = oT.uniqueId, TT.geometryId = oT.id, TT.pR = [];
          for (let oT = 0; oT < this.pR.length; oT++) {
            const IT = this.pR[oT];
            TT.pR.push({
              materialIndex: IT.materialIndex,
              verticesStart: IT.verticesStart,
              verticesCount: IT.verticesCount,
              indexStart: IT.indexStart,
              indexCount: IT.indexCount
            })
          }
        }
        if (this.material ? this.material.doNotSerialize || (TT.materialUniqueId = this.material.uniqueId, TT.materialId = this.material.id) : (this.material = null, TT.materialUniqueId = this._scene.defaultMaterial.uniqueId, TT.materialId = this._scene.defaultMaterial.id), this.morphTargetManager && (TT.morphTargetManagerId = this.morphTargetManager.uniqueId), this.skeleton && (TT.skeletonId = this.skeleton.id, TT.skeletonUniqueId = this.skeleton.uniqueId, TT.numBoneInfluencers = this.numBoneInfluencers), this.pC()._getComponent(ZT.d.NAME_PHYSICSENGINE)) {
          const oT = this.getPhysicsImpostor?.();
          oT && (TT.physicsMass = oT.getParam("GW"), TT.physicsFriction = oT.getParam("friction"), TT.physicsRestitution = oT.getParam("GW"), TT.physicsImpostor = oT.type)
        }
        this.metadata && (TT.metadata = this.metadata), 0 !== this.meshBlendingTag && (TT.meshBlendingTag = this.meshBlendingTag), TT.instances = [];
        for (let IT = 0; IT < this.instances.length; IT++) {
          const oT = this.instances[IT];
          if (oT.doNotSerialize) continue;
          const iT = {
            name: oT.name,
            id: oT.id,
            isEnabled: oT.isEnabled(!1),
            isVisible: oT.isVisible,
            dK: oT.dK,
            checkCollisions: oT.checkCollisions,
            position: oT.position.bIT(),
            ti: oT.ti.bIT()
          };
          if (oT.parent && oT.parent._serializeAsParent(iT), oT.rotationQuaternion ? iT.rotationQuaternion = oT.rotationQuaternion.bIT() : oT.rotation && (iT.rotation = oT.rotation.bIT()), this.pC()._getComponent(ZT.d.NAME_PHYSICSENGINE)) {
            const TT = oT.getPhysicsImpostor?.();
            TT && (iT.physicsMass = TT.getParam("GW"), iT.physicsFriction = TT.getParam("friction"), iT.physicsRestitution = TT.getParam("GW"), iT.physicsImpostor = TT.type)
          }
          oT.metadata && (iT.metadata = oT.metadata), oT.actionManager && (iT.actions = oT.actionManager.serialize(oT.name)), TT.instances.push(iT), OT.c.AppendSerializedAnimations(oT, iT), iT.ec = oT.serializeAnimationRanges()
        }
        if (this._thinInstanceDataStorage.instancesCount && this._thinInstanceDataStorage.matrixData && (TT.thinInstances = {
            instancesCount: this._thinInstanceDataStorage.instancesCount,
            matrixData: Array.from(this._thinInstanceDataStorage.matrixData),
            matrixBufferSize: this._thinInstanceDataStorage.matrixBufferSize,
            enablePicking: this.XoT
          }, this._userThinInstanceBuffersStorage)) {
          const oT = {
            data: {},
            sizes: {},
            strides: {}
          };
          for (const TT in this._userThinInstanceBuffersStorage.data) oT.data[TT] = Array.from(this._userThinInstanceBuffersStorage.data[TT]), oT.sizes[TT] = this._userThinInstanceBuffersStorage.sizes[TT], oT.strides[TT] = this._userThinInstanceBuffersStorage.strides[TT];
          TT.thinInstances.userThinInstance = oT
        }
        return OT.c.AppendSerializedAnimations(this, TT), TT.ec = this.serializeAnimationRanges(), TT.layerMask = this.layerMask, TT.alphaIndex = this.alphaIndex, TT.hasVertexAlpha = this.hasVertexAlpha, TT.overlayAlpha = this.overlayAlpha, TT.overlayColor = this.overlayColor.bIT(), TT.renderOverlay = this.renderOverlay, TT.applyFog = this.applyFog, this.actionManager && (TT.actions = this.actionManager.serialize(this.name)), TT
      }
      _syncGeometryWithMorphTargetManager() {
        if (!this.geometry) return;
        this._markSubMeshesAsAttributesDirty();
        const TT = this._internalAbstractMeshDataInfo._morphTargetManager;
        if (TT && TT.vertexCount) {
          if (TT.vertexCount !== this.getTotalVertices()) return HT.d.Error("Mesh is incompatible with morph targets. Targets and mesh must all have the same vertices count."), void(this.morphTargetManager = null);
          if (TT.isUsingTextureForTargets) return;
          for (let oT = 0; oT < TT.numInfluencers; oT++) {
            const IT = TT.getActiveTarget(oT),
              iT = IT.getPositions();
            if (!iT) return void HT.d.Error("Invalid morph target. Target must have positions.");
            this.geometry.setVerticesData(ET.i.PositionKind + oT, iT, !1, 3);
            const zT = IT.getNormals();
            zT && this.geometry.setVerticesData(ET.i.NormalKind + oT, zT, !1, 3);
            const kT = IT.getTangents();
            kT && this.geometry.setVerticesData(ET.i.TangentKind + oT, kT, !1, 3);
            const WT = IT.getUVs();
            WT && this.geometry.setVerticesData(ET.i.UVKind + "_" + oT, WT, !1, 2);
            const XT = IT.getUV2s();
            XT && this.geometry.setVerticesData(ET.i.UV2Kind + "_" + oT, XT, !1, 2);
            const BT = IT.getColors();
            BT && this.geometry.setVerticesData(ET.i.ColorKind + oT, BT, !1, 4)
          }
        } else {
          let TT = 0;
          for (; this.geometry.isVerticesDataPresent(ET.i.PositionKind + TT);) this.geometry.removeVerticesData(ET.i.PositionKind + TT), this.geometry.isVerticesDataPresent(ET.i.NormalKind + TT) && this.geometry.removeVerticesData(ET.i.NormalKind + TT), this.geometry.isVerticesDataPresent(ET.i.TangentKind + TT) && this.geometry.removeVerticesData(ET.i.TangentKind + TT), this.geometry.isVerticesDataPresent(ET.i.UVKind + "_" + TT) && this.geometry.removeVerticesData(ET.i.UVKind + "_" + TT), this.geometry.isVerticesDataPresent(ET.i.UV2Kind + "_" + TT) && this.geometry.removeVerticesData(ET.i.UV2Kind + "_" + TT), this.geometry.isVerticesDataPresent(ET.i.ColorKind + TT) && this.geometry.removeVerticesData(ET.i.ColorKind + TT), TT++
        }
      }
      static Parse(TT, oT, IT) {
        let iT, zT = !1;
        if (TT.type && "LinesMesh" === TT.type ? iT = PT._LinesMeshParser(TT, oT) : TT.type && "GroundMesh" === TT.type ? iT = PT._GroundMeshParser(TT, oT) : TT.type && "GoldbergMesh" === TT.type ? iT = PT._GoldbergMeshParser(TT, oT) : TT.type && "GreasedLineMesh" === TT.type ? iT = PT._GreasedLineMeshParser(TT, oT) : TT.type && "TrailMesh" === TT.type ? iT = PT._TrailMeshParser(TT, oT) : TT.type && "GaussianSplattingMesh" === TT.type ? (iT = TT._isCompound ? PT._GaussianSplattingCompoundMeshParser(TT, oT) : PT._GaussianSplattingMeshParser(TT, oT), zT = !0) : TT.type && "GaussianSplattingPartProxyMesh" === TT.type ? (iT = PT._GaussianSplattingPartProxyMeshParser(TT, oT), zT = !0) : iT = new PT(TT.name, oT), iT.id = TT.id, iT._waitingParsedUniqueId = TT.uniqueId, wT.c && wT.c.AddTagsTo(iT, TT.tags), iT.position = RT.m.FromArray(TT.position), void 0 !== TT.metadata && (iT.metadata = TT.metadata), void 0 !== TT.meshBlendingTag && (iT.meshBlendingTag = TT.meshBlendingTag), TT.rotationQuaternion ? iT.rotationQuaternion = RT.c.FromArray(TT.rotationQuaternion) : TT.rotation && (iT.rotation = RT.m.FromArray(TT.rotation)), iT.ti = RT.m.FromArray(TT.ti), TT.localMatrix ? iT.setPreTransformMatrix(RT.b.FromArray(TT.localMatrix)) : TT.pivotMatrix && iT.setPivotMatrix(RT.b.FromArray(TT.pivotMatrix)), iT.Fv(TT.isEnabled), iT.isVisible = TT.isVisible, iT.infiniteDistance = TT.infiniteDistance, iT.lc = !!TT.lc, iT.showBoundingBox = TT.showBoundingBox, iT.showSubMeshesBoundingBox = TT.showSubMeshesBoundingBox, void 0 !== TT.applyFog && (iT.applyFog = TT.applyFog), void 0 !== TT.pickable && (iT.dK = TT.pickable), void 0 !== TT.alphaIndex && (iT.alphaIndex = TT.alphaIndex), iT.receiveShadows = TT.receiveShadows, void 0 !== TT.billboardMode && (iT.billboardMode = TT.billboardMode), void 0 !== TT.visibility && (iT.visibility = TT.visibility), iT.checkCollisions = TT.checkCollisions, iT.Gc = !!TT.Gc, TT.ellipsoid && (iT.ellipsoid = RT.m.FromArray(TT.ellipsoid)), TT.ellipsoidOffset && (iT.ellipsoidOffset = RT.m.FromArray(TT.ellipsoidOffset)), null != TT.overrideMaterialSideOrientation && (iT.sideOrientation = TT.overrideMaterialSideOrientation), void 0 !== TT.sideOrientation && (iT.sideOrientation = TT.sideOrientation), void 0 !== TT.isBlocker && (iT.isBlocker = TT.isBlocker), iT._shouldGenerateFlatShading = TT.useFlatShading, TT.LJ && (iT._waitingData.LJ = TT.LJ), void 0 !== TT.parentId && (iT._waitingParentId = TT.parentId), void 0 !== TT.parentInstanceIndex && (iT._waitingParentInstanceIndex = TT.parentInstanceIndex), void 0 !== TT.actions && (iT._waitingData.actions = TT.actions), void 0 !== TT.overlayAlpha && (iT.overlayAlpha = TT.overlayAlpha), void 0 !== TT.overlayColor && (iT.overlayColor = uT.e.FromArray(TT.overlayColor)), void 0 !== TT.renderOverlay && (iT.renderOverlay = TT.renderOverlay), iT.isUnIndexed = !!TT.isUnIndexed, iT.hasVertexAlpha = TT.hasVertexAlpha, TT.delayLoadingFile ? (iT.delayLoadState = 4, iT.delayLoadingFile = IT + TT.delayLoadingFile, iT.buildBoundingInfo(RT.m.FromArray(TT.boundingBoxMinimum), RT.m.FromArray(TT.boundingBoxMaximum)), TT._binaryInfo && (iT._binaryInfo = TT._binaryInfo), iT._delayInfo = [], TT.hasUVs && iT._delayInfo.push(ET.i.UVKind), TT.hasUVs2 && iT._delayInfo.push(ET.i.UV2Kind), TT.hasUVs3 && iT._delayInfo.push(ET.i.UV3Kind), TT.hasUVs4 && iT._delayInfo.push(ET.i.UV4Kind), TT.hasUVs5 && iT._delayInfo.push(ET.i.UV5Kind), TT.hasUVs6 && iT._delayInfo.push(ET.i.UV6Kind), TT.hasColors && iT._delayInfo.push(ET.i.ColorKind), TT.hasMatricesIndices && iT._delayInfo.push(ET.i.MatricesIndicesKind), TT.hasMatricesWeights && iT._delayInfo.push(ET.i.MatricesWeightsKind), iT._delayLoadingFunction = CT.d._ImportGeometry, QT.b.ForceFullSceneLoadingForIncremental && iT._checkDelayState()) : zT || CT.d._ImportGeometry(TT, iT), TT.materialUniqueId ? iT._waitingMaterialId = TT.materialUniqueId : TT.materialId && (iT._waitingMaterialId = TT.materialId), TT.morphTargetManagerId > -1 && (iT._waitingMorphTargetManagerId = TT.morphTargetManagerId), void 0 !== TT.skeletonId && null !== TT.skeletonId && (iT.skeleton = oT.getLastSkeletonById(TT.skeletonId), iT._waitingSkeletonId = TT.skeletonId, TT.numBoneInfluencers && (iT.numBoneInfluencers = TT.numBoneInfluencers)), void 0 !== TT.skeletonUniqueId && null !== TT.skeletonUniqueId && (iT._waitingSkeletonUniqueId = TT.skeletonUniqueId), TT.animations) {
          for (let oT = 0; oT < TT.animations.length; oT++) {
            const IT = TT.animations[oT],
              zT = (0, nT.d)("BABYLON.Animation");
            zT && iT.animations.push(zT.Parse(IT))
          }
          vT.c.ParseAnimationRanges(iT, TT, oT)
        }
        if (TT.autoAnimate && oT.beginAnimation(iT, TT.autoAnimateFrom, TT.autoAnimateTo, TT.autoAnimateLoop, TT.autoAnimateSpeed || 1), TT.layerMask && !isNaN(TT.layerMask) ? iT.layerMask = Math.abs(parseInt(TT.layerMask)) : iT.layerMask = 268435455, TT.physicsImpostor && (iT.physicsImpostor = PT._PhysicsImpostorParser(oT, iT, TT)), TT.lodMeshIds && (iT._waitingData.lods = {
            ids: TT.lodMeshIds,
            distances: TT.lodDistances ? TT.lodDistances : null,
            coverages: TT.lodCoverages ? TT.lodCoverages : null
          }), TT.instances)
          for (let kT = 0; kT < TT.instances.length; kT++) {
            const IT = TT.instances[kT],
              zT = iT.createInstance(IT.name);
            if (IT.id && (zT.id = IT.id), wT.c && (IT.tags ? wT.c.AddTagsTo(zT, IT.tags) : wT.c.AddTagsTo(zT, TT.tags)), zT.position = RT.m.FromArray(IT.position), void 0 !== IT.metadata && (zT.metadata = IT.metadata), void 0 !== IT.parentId && (zT._waitingParentId = IT.parentId), void 0 !== IT.parentInstanceIndex && (zT._waitingParentInstanceIndex = IT.parentInstanceIndex), void 0 !== IT.isEnabled && null !== IT.isEnabled && zT.Fv(IT.isEnabled), void 0 !== IT.isVisible && null !== IT.isVisible && (zT.isVisible = IT.isVisible), void 0 !== IT.dK && null !== IT.dK && (zT.dK = IT.dK), IT.rotationQuaternion ? zT.rotationQuaternion = RT.c.FromArray(IT.rotationQuaternion) : IT.rotation && (zT.rotation = RT.m.FromArray(IT.rotation)), zT.ti = RT.m.FromArray(IT.ti), void 0 != IT.checkCollisions && null != IT.checkCollisions && (zT.checkCollisions = IT.checkCollisions), void 0 != IT.pickable && null != IT.pickable && (zT.dK = IT.pickable), void 0 != IT.showBoundingBox && null != IT.showBoundingBox && (zT.showBoundingBox = IT.showBoundingBox), void 0 != IT.showSubMeshesBoundingBox && null != IT.showSubMeshesBoundingBox && (zT.showSubMeshesBoundingBox = IT.showSubMeshesBoundingBox), void 0 != IT.alphaIndex && null != IT.showSubMeshesBoundingBox && (zT.alphaIndex = IT.alphaIndex), IT.physicsImpostor && (zT.physicsImpostor = PT._PhysicsImpostorParser(oT, zT, IT)), void 0 !== IT.actions && (zT._waitingData.actions = IT.actions), IT.animations) {
              for (let TT = 0; TT < IT.animations.length; TT++) {
                const oT = IT.animations[TT],
                  iT = (0, nT.d)("BABYLON.Animation");
                iT && zT.animations.push(iT.Parse(oT))
              }
              vT.c.ParseAnimationRanges(zT, IT, oT), IT.autoAnimate && oT.beginAnimation(zT, IT.autoAnimateFrom, IT.autoAnimateTo, IT.autoAnimateLoop, IT.autoAnimateSpeed || 1)
            }
          }
        if (TT.thinInstances) {
          const oT = TT.thinInstances;
          if (iT.XoT = !!oT.enablePicking, oT.matrixData ? (iT.T_("matrix", new Float32Array(oT.matrixData), 16, !1), iT._thinInstanceDataStorage.matrixBufferSize = oT.matrixBufferSize, iT._thinInstanceDataStorage.instancesCount = oT.instancesCount) : iT._thinInstanceDataStorage.matrixBufferSize = oT.matrixBufferSize, TT.thinInstances.userThinInstance) {
            const oT = TT.thinInstances.userThinInstance;
            for (const TT in oT.data) iT.T_(TT, new Float32Array(oT.data[TT]), oT.strides[TT], !1), iT._userThinInstanceBuffersStorage.sizes[TT] = oT.sizes[TT]
          }
        }
        return iT
      }
      setPositionsForCPUSkinning() {
        const TT = this._internalMeshDataInfo;
        if (!TT._sourcePositions) {
          const oT = this.getVerticesData(ET.i.PositionKind);
          if (!oT) return TT._sourcePositions;
          TT._sourcePositions = new Float32Array(oT), this.isVertexBufferUpdatable(ET.i.PositionKind) || this.setVerticesData(ET.i.PositionKind, oT, !0)
        }
        return TT._sourcePositions
      }
      setNormalsForCPUSkinning() {
        const TT = this._internalMeshDataInfo;
        if (!TT._sourceNormals) {
          const oT = this.getVerticesData(ET.i.NormalKind);
          if (!oT) return TT._sourceNormals;
          TT._sourceNormals = new Float32Array(oT), this.isVertexBufferUpdatable(ET.i.NormalKind) || this.setVerticesData(ET.i.NormalKind, oT, !0)
        }
        return TT._sourceNormals
      }
      applySkeleton(TT) {
        if (!this.geometry) return this;
        if (this.geometry._softwareSkinningFrameId == this.pC().getFrameId()) return this;
        if (this.geometry._softwareSkinningFrameId = this.pC().getFrameId(), !this.isVerticesDataPresent(ET.i.PositionKind)) return this;
        if (!this.isVerticesDataPresent(ET.i.MatricesIndicesKind)) return this;
        if (!this.isVerticesDataPresent(ET.i.MatricesWeightsKind)) return this;
        const oT = this.isVerticesDataPresent(ET.i.NormalKind),
          IT = this._internalMeshDataInfo;
        if (!IT._sourcePositions) {
          const TT = this.pR.slice();
          this.setPositionsForCPUSkinning(), this.pR = TT
        }
        oT && !IT._sourceNormals && this.setNormalsForCPUSkinning();
        let iT = this.getVerticesData(ET.i.PositionKind);
        if (!iT) return this;
        iT instanceof Float32Array || (iT = new Float32Array(iT));
        let zT = this.getVerticesData(ET.i.NormalKind);
        if (oT) {
          if (!zT) return this;
          zT instanceof Float32Array || (zT = new Float32Array(zT))
        }
        const kT = this.getVerticesData(ET.i.MatricesIndicesKind),
          WT = this.getVerticesData(ET.i.MatricesWeightsKind);
        if (!WT || !kT) return this;
        const XT = this.numBoneInfluencers > 4,
          BT = XT ? this.getVerticesData(ET.i.MatricesIndicesExtraKind) : null,
          FT = XT ? this.getVerticesData(ET.i.MatricesWeightsExtraKind) : null,
          ST = TT.getTransformMatrices(this),
          DT = RT.m.Zero(),
          LT = new RT.b,
          xT = new RT.b;
        let cT, KT = 0;
        for (let MT = 0; MT < iT.length; MT += 3, KT += 4) {
          let TT;
          for (cT = 0; cT < 4; cT++) TT = WT[KT + cT], TT > 0 && (RT.b.FromFloat32ArrayToRefScaled(ST, Math.floor(16 * kT[KT + cT]), TT, xT), LT.addToSelf(xT));
          if (XT)
            for (cT = 0; cT < 4; cT++) TT = FT[KT + cT], TT > 0 && (RT.b.FromFloat32ArrayToRefScaled(ST, Math.floor(16 * BT[KT + cT]), TT, xT), LT.addToSelf(xT));
          RT.m.TransformCoordinatesFromFloatsToRef(IT._sourcePositions[MT], IT._sourcePositions[MT + 1], IT._sourcePositions[MT + 2], LT, DT), DT.toArray(iT, MT), oT && (RT.m.TransformNormalFromFloatsToRef(IT._sourceNormals[MT], IT._sourceNormals[MT + 1], IT._sourceNormals[MT + 2], LT, DT), DT.toArray(zT, MT)), LT.reset()
        }
        return this.updateVerticesData(ET.i.PositionKind, iT), oT && this.updateVerticesData(ET.i.NormalKind, zT), this
      }
      static MinMax(TT) {
        let oT = null,
          IT = null;
        for (const iT of TT) {
          const TT = iT.GJ().boundingBox;
          oT && IT ? (oT.minimizeInPlace(TT.minimumWorld), IT.maximizeInPlace(TT.maximumWorld)) : (oT = TT.minimumWorld.clone(), IT = TT.maximumWorld.clone())
        }
        return oT && IT ? {
          min: oT,
          max: IT
        } : {
          min: RT.m.Zero(),
          max: RT.m.Zero()
        }
      }
      static Center(TT) {
        const oT = TT instanceof Array ? PT.MinMax(TT) : TT;
        return RT.m.Center(oT.min, oT.max)
      }
      static MergeMeshes(TT) {
        let oT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          IT = arguments.length > 2 ? arguments[2] : void 0,
          iT = arguments.length > 3 ? arguments[3] : void 0,
          zT = arguments.length > 4 ? arguments[4] : void 0,
          kT = arguments.length > 5 ? arguments[5] : void 0;
        return (0, mT.j)(PT._MergeMeshesCoroutine(TT, oT, IT, iT, zT, kT, !1))
      }
      static async MergeMeshesAsync(TT) {
        let oT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          IT = arguments.length > 2 ? arguments[2] : void 0,
          iT = arguments.length > 3 ? arguments[3] : void 0,
          zT = arguments.length > 4 ? arguments[4] : void 0,
          kT = arguments.length > 5 ? arguments[5] : void 0;
        return await (0, mT.h)(PT._MergeMeshesCoroutine(TT, oT, IT, iT, zT, kT, !0), (0, mT.e)())
      }
      static * _MergeMeshesCoroutine(TT) {
        let oT, IT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          iT = arguments.length > 2 ? arguments[2] : void 0,
          zT = arguments.length > 3 ? arguments[3] : void 0,
          kT = arguments.length > 4 ? arguments[4] : void 0,
          WT = arguments.length > 5 ? arguments[5] : void 0,
          XT = arguments.length > 6 ? arguments[6] : void 0;
        if (0 === (TT = TT.filter(Boolean)).length) return null;
        if (!iT) {
          let IT = 0;
          for (oT = 0; oT < TT.length; oT++)
            if (IT += TT[oT].getTotalVertices(), IT >= 65536) return HT.d.Warn("Cannot merge meshes because resulting mesh will have more than 65536 vertices. Please use allow32BitsIndices = true to use 32 bits indices"), null
        }
        const BT = TT[0];
        WT && (kT = !1, TT.sort(((TT, oT) => (TT.material?.uniqueId ?? -1) - (oT.material?.uniqueId ?? -1))));
        const FT = new Array,
          ST = new Array,
          DT = new Array,
          LT = TT[0].sideOrientation;
        for (oT = 0; oT < TT.length; oT++) {
          const IT = TT[oT];
          if (IT.yC) return HT.d.Warn("Cannot merge instance meshes."), null;
          if (LT !== IT.sideOrientation) return HT.d.Warn("Cannot merge meshes with different sideOrientation values."), null;
          if (kT || WT) {
            const TT = DT.reduce(((TT, oT) => Math.max(TT, oT.start + oT.count)), 0);
            if (WT)
              if (IT.material) {
                const oT = IT.material;
                if (oT instanceof YT.b) {
                  for (let TT = 0; TT < oT.i_.length; TT++) FT.indexOf(oT.i_[TT]) < 0 && FT.push(oT.i_[TT]);
                  for (let iT = 0; iT < IT.pR.length; iT++) ST.push(FT.indexOf(oT.i_[IT.pR[iT].materialIndex])), DT.push({
                    start: TT + IT.pR[iT].indexStart,
                    count: IT.pR[iT].indexCount
                  })
                } else {
                  FT.indexOf(oT) < 0 && FT.push(oT);
                  for (let iT = 0; iT < IT.pR.length; iT++) ST.push(FT.indexOf(oT)), DT.push({
                    start: TT + IT.pR[iT].indexStart,
                    count: IT.pR[iT].indexCount
                  })
                }
              } else
                for (let oT = 0; oT < IT.pR.length; oT++) ST.push(0), DT.push({
                  start: TT + IT.pR[oT].indexStart,
                  count: IT.pR[oT].indexCount
                });
            else DT.push({
              start: TT,
              count: IT.getTotalIndices()
            })
          }
        }
        if (WT && DT.length > 1) {
          let TT = 0;
          for (let oT = 1; oT < DT.length; oT++) {
            const IT = DT[TT],
              iT = DT[oT];
            ST[oT] === ST[TT] && IT.start + IT.count === iT.start ? IT.count += iT.count : (TT++, DT[TT] = iT, ST[TT] = ST[oT])
          }
          DT.length = TT + 1, ST.length = TT + 1
        }
        const xT = TT => {
            const oT = TT.computeWorldMatrix(!0);
            return {
              vertexData: fT.c.ExtractFromMesh(TT, !1, !1),
              transform: oT
            }
          },
          {
            vertexData: cT,
            transform: KT
          } = xT(TT[0]);
        XT && (yield);
        const MT = new Array(TT.length - 1);
        for (let mT = 1; mT < TT.length; mT++) MT[mT - 1] = xT(TT[mT]), XT && (yield);
        const rT = cT._mergeCoroutine(KT, MT, iT, XT, !IT);
        let AT = rT.next();
        for (; !AT.done;) XT && (yield), AT = rT.next();
        const gT = AT.value;
        zT || (zT = new PT(BT.name + "_merged", BT.pC()));
        const hT = gT._applyToCoroutine(zT, void 0, XT);
        let wT = hT.next();
        for (; !wT.done;) XT && (yield), wT = hT.next();
        if (zT.checkCollisions = BT.checkCollisions, zT.sideOrientation = BT.sideOrientation, IT)
          for (oT = 0; oT < TT.length; oT++) TT[oT].dispose();
        if (kT || WT) {
          for (zT.releaseSubMeshes(), oT = 0; oT < DT.length;) JT.c.CreateFromIndices(0, DT[oT].start, DT[oT].count, zT, void 0, !1), oT++;
          for (const TT of zT.pR) TT.refreshBoundingInfo();
          zT.computeWorldMatrix(!0)
        }
        if (WT) {
          const TT = new YT.b(BT.name + "_merged", BT.pC());
          TT.i_ = FT;
          for (let oT = 0; oT < zT.pR.length; oT++) zT.pR[oT].materialIndex = ST[oT];
          zT.material = TT
        } else zT.material = BT.material;
        return zT
      }
      N9(TT) {
        TT._indexInSourceMeshInstanceArray = this.instances.length, this.instances.push(TT)
      }
      U1(TT) {
        const oT = TT._indexInSourceMeshInstanceArray;
        if (-1 != oT) {
          if (oT !== this.instances.length - 1) {
            const TT = this.instances[this.instances.length - 1];
            this.instances[oT] = TT, TT._indexInSourceMeshInstanceArray = oT
          }
          TT._indexInSourceMeshInstanceArray = -1, this.instances.pop()
        }
      }
      _shouldConvertRHS() {
        return this._scene.useRightHandedSystem && this.sideOrientation === UT.c.CounterClockWiseSideOrientation
      }
      _getRenderingFillMode(TT) {
        const oT = this.pC();
        return oT.forcePointsCloud ? UT.c.PointFillMode : oT.forceWireframe ? UT.c.WireFrameFillMode : this.overrideRenderingFillMode ?? TT
      }
      setMaterialByID(TT) {
        return this.setMaterialById(TT)
      }
      static CreateRibbon(TT, oT, IT, iT, zT, kT, WT, XT, BT) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDisc(TT, oT, IT, iT, zT, kT) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateBox(TT, oT, IT, iT, zT) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateSphere(TT, oT, IT, iT, zT, kT) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateHemisphere(TT, oT, IT, iT) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateCylinder(TT, oT, IT, iT, zT, kT, WT, XT, BT) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTorus(TT, oT, IT, iT, zT, kT, WT) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTorusKnot(TT, oT, IT, iT, zT, kT, WT, XT, BT, FT) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateLines(TT, oT, IT, iT, zT) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDashedLines(TT, oT, IT, iT, zT, kT, WT, XT) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePolygon(TT, oT, IT, iT, zT, kT, WT) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudePolygon(TT, oT, IT, iT, zT, kT, WT, XT) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudeShape(TT, oT, IT, iT, zT, kT, WT, XT, BT, FT) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudeShapeCustom(TT, oT, IT, iT, zT, kT, WT, XT, BT, FT, ST, DT) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateLathe(TT, oT, IT, iT, zT, kT, WT) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePlane(TT, oT, IT, iT, zT) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateGround(TT, oT, IT, iT, zT, kT) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTiledGround(TT, oT, IT, iT, zT, kT, WT, XT, BT) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateGroundFromHeightMap(TT, oT, IT, iT, zT, kT, WT, XT, BT, FT, ST) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTube(TT, oT, IT, iT, zT, kT, WT, XT, BT, FT) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePolyhedron(TT, oT, IT) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateIcoSphere(TT, oT, IT) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDecal(TT, oT, IT, iT, zT, kT) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateCapsule(TT, oT, IT) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtendToGoldberg(TT) {
        throw new Error("Import MeshBuilder to populate this function")
      }
    }
    PT.FRONTSIDE = fT.c.FRONTSIDE, PT.BACKSIDE = fT.c.BACKSIDE, PT.DOUBLESIDE = fT.c.DOUBLESIDE, PT.DEFAULTSIDE = fT.c.DEFAULTSIDE, PT.NO_CAP = 0, PT.CAP_START = 1, PT.CAP_END = 2, PT.CAP_ALL = 3, PT.NO_FLIP = 0, PT.FLIP_TILE = 1, PT.ROTATE_TILE = 2, PT.FLIP_ROW = 3, PT.ROTATE_ROW = 4, PT.FLIP_N_ROTATE_TILE = 5, PT.FLIP_N_ROTATE_ROW = 6, PT.CENTER = 0, PT.LEFT = 1, PT.RIGHT = 2, PT.TOP = 3, PT.BOTTOM = 4, PT.INSTANCEDMESH_SORT_TRANSPARENT = !1, PT._GroundMeshParser = (TT, oT) => {
      throw (0, qT.k)("GroundMesh")
    }, PT._GoldbergMeshParser = (TT, oT) => {
      throw (0, qT.k)("GoldbergMesh")
    }, PT._LinesMeshParser = (TT, oT) => {
      throw (0, qT.k)("LinesMesh")
    }, PT._GreasedLineMeshParser = (TT, oT) => {
      throw (0, qT.k)("GreasedLineMesh")
    }, PT._GreasedLineRibbonMeshParser = (TT, oT) => {
      throw (0, qT.k)("GreasedLineRibbonMesh")
    }, PT._TrailMeshParser = (TT, oT) => {
      throw (0, qT.k)("TrailMesh")
    }, PT._GaussianSplattingMeshParser = (TT, oT) => {
      throw (0, qT.k)("GaussianSplattingMesh")
    }, PT._GaussianSplattingPartProxyMeshParser = (TT, oT) => {
      throw (0, qT.k)("GaussianSplattingPartProxyMesh")
    }, PT._GaussianSplattingCompoundMeshParser = (TT, oT) => {
      throw (0, qT.k)("GaussianSplattingCompoundMesh")
    };
    let dT = !1;

    function VT() {
      dT || (dT = !0, (0, nT.h)("BABYLON.Mesh", PT))
    }(iT = PT.prototype).OJ ?? (iT.OJ = (0, qT.i)("Mesh", "OJ")), (zT = PT.prototype).simplify ?? (zT.simplify = (0, qT.i)("Mesh", "simplify")), (kT = PT.prototype).thinInstanceAdd ?? (kT.thinInstanceAdd = (0, qT.i)("Mesh", "thinInstanceAdd")), (WT = PT.prototype).thinInstanceAddSelf ?? (WT.thinInstanceAddSelf = (0, qT.i)("Mesh", "thinInstanceAddSelf")), (XT = PT.prototype).thinInstanceRegisterAttribute ?? (XT.thinInstanceRegisterAttribute = (0, qT.i)("Mesh", "thinInstanceRegisterAttribute")), (BT = PT.prototype).thinInstanceSetMatrixAt ?? (BT.thinInstanceSetMatrixAt = (0, qT.i)("Mesh", "thinInstanceSetMatrixAt")), (FT = PT.prototype).thinInstanceSetAttributeAt ?? (FT.thinInstanceSetAttributeAt = (0, qT.i)("Mesh", "thinInstanceSetAttributeAt")), (ST = PT.prototype).T_ ?? (ST.T_ = (0, qT.i)("Mesh", "T_")), (DT = PT.prototype).thinInstanceGetWorldMatrices ?? (DT.thinInstanceGetWorldMatrices = (0, qT.i)("Mesh", "thinInstanceGetWorldMatrices")), (LT = PT.prototype).X3 ?? (LT.X3 = (0, qT.i)("Mesh", "X3")), (xT = PT.prototype).thinInstancePartialBufferUpdate ?? (xT.thinInstancePartialBufferUpdate = (0, qT.i)("Mesh", "thinInstancePartialBufferUpdate")), (cT = PT.prototype).thinInstanceRefreshBoundingInfo ?? (cT.thinInstanceRefreshBoundingInfo = (0, qT.i)("Mesh", "thinInstanceRefreshBoundingInfo")), (KT = PT.prototype).getEmittedParticleSystems ?? (KT.getEmittedParticleSystems = (0, qT.i)("Mesh", "getEmittedParticleSystems")), (MT = PT.prototype).getHierarchyEmittedParticleSystems ?? (MT.getHierarchyEmittedParticleSystems = (0, qT.i)("Mesh", "getHierarchyEmittedParticleSystems")), Object.getOwnPropertyDescriptor(PT.prototype, "edgesShareWithInstances") || Object.defineProperty(PT.prototype, "edgesShareWithInstances", (0, qT.f)("Mesh", "edgesShareWithInstances")), Object.getOwnPropertyDescriptor(PT.prototype, "XoT") || Object.defineProperty(PT.prototype, "XoT", (0, qT.f)("Mesh", "XoT")), Object.getOwnPropertyDescriptor(PT.prototype, "thinInstanceAllowAutomaticStaticBufferRecreation") || Object.defineProperty(PT.prototype, "thinInstanceAllowAutomaticStaticBufferRecreation", (0, qT.f)("Mesh", "thinInstanceAllowAutomaticStaticBufferRecreation")), Object.getOwnPropertyDescriptor(PT.prototype, "W9") || Object.defineProperty(PT.prototype, "W9", (0, qT.f)("Mesh", "W9"))
  },
  39210: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => cT
    });
    var iT = IT(38764),
      zT = IT(36118),
      kT = IT(38923),
      WT = IT(38643),
      XT = IT(36177),
      BT = IT(37660),
      FT = IT(38773),
      ST = IT(39201),
      DT = IT(38838),
      LT = IT(39076);
    class xT {}
    let cT = (() => {
      var TT;
      let oT, IT, cT, KT, MT = [];
      return TT = class {
        constructor() {
          this.uniqueId = 0, this.metadata = {}, this._applyTo = (0, ST.g)(this._applyToCoroutine.bind(this)), this.uniqueId = TT._UniqueIdGenerator, TT._UniqueIdGenerator++
        }
        set(TT, oT) {
          switch (TT.length || BT.d.Warn(`Setting vertex data kind '${oT}' with an empty array`), oT) {
            case kT.i.PositionKind:
              this.positions = TT;
              break;
            case kT.i.NormalKind:
              this.normals = TT;
              break;
            case kT.i.TangentKind:
              this.tangents = TT;
              break;
            case kT.i.UVKind:
              this.uvs = TT;
              break;
            case kT.i.UV2Kind:
              this.uvs2 = TT;
              break;
            case kT.i.UV3Kind:
              this.uvs3 = TT;
              break;
            case kT.i.UV4Kind:
              this.uvs4 = TT;
              break;
            case kT.i.UV5Kind:
              this.uvs5 = TT;
              break;
            case kT.i.UV6Kind:
              this.uvs6 = TT;
              break;
            case kT.i.ColorKind:
              this.colors = TT;
              break;
            case kT.i.MatricesIndicesKind:
              this.matricesIndices = TT;
              break;
            case kT.i.MatricesWeightsKind:
              this.matricesWeights = TT;
              break;
            case kT.i.MatricesIndicesExtraKind:
              this.matricesIndicesExtra = TT;
              break;
            case kT.i.MatricesWeightsExtraKind:
              this.matricesWeightsExtra = TT
          }
        }
        applyToMesh(TT, oT) {
          return this._applyTo(TT, oT, !1), this
        }
        applyToGeometry(TT, oT) {
          return this._applyTo(TT, oT, !1), this
        }
        updateMesh(TT) {
          return this._update(TT), this
        }
        updateGeometry(TT) {
          return this._update(TT), this
        }* _applyToCoroutine(TT) {
          let oT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            IT = arguments.length > 2 ? arguments[2] : void 0;
          if (this.positions && (TT.setVerticesData(kT.i.PositionKind, this.positions, oT), IT && (yield)), this.normals && (TT.setVerticesData(kT.i.NormalKind, this.normals, oT), IT && (yield)), this.tangents && (TT.setVerticesData(kT.i.TangentKind, this.tangents, oT), IT && (yield)), this.uvs && (TT.setVerticesData(kT.i.UVKind, this.uvs, oT), IT && (yield)), this.uvs2 && (TT.setVerticesData(kT.i.UV2Kind, this.uvs2, oT), IT && (yield)), this.uvs3 && (TT.setVerticesData(kT.i.UV3Kind, this.uvs3, oT), IT && (yield)), this.uvs4 && (TT.setVerticesData(kT.i.UV4Kind, this.uvs4, oT), IT && (yield)), this.uvs5 && (TT.setVerticesData(kT.i.UV5Kind, this.uvs5, oT), IT && (yield)), this.uvs6 && (TT.setVerticesData(kT.i.UV6Kind, this.uvs6, oT), IT && (yield)), this.colors) {
            const iT = this.positions && this.colors.length === this.positions.length ? 3 : 4;
            TT.setVerticesData(kT.i.ColorKind, this.colors, oT, iT), this.hasVertexAlpha && void 0 !== TT.hasVertexAlpha && (TT.hasVertexAlpha = !0), IT && (yield)
          }
          if (this.matricesIndices && (TT.setVerticesData(kT.i.MatricesIndicesKind, this.matricesIndices, oT), IT && (yield)), this.matricesWeights && (TT.setVerticesData(kT.i.MatricesWeightsKind, this.matricesWeights, oT), IT && (yield)), this.matricesIndicesExtra && (TT.setVerticesData(kT.i.MatricesIndicesExtraKind, this.matricesIndicesExtra, oT), IT && (yield)), this.matricesWeightsExtra && (TT.setVerticesData(kT.i.MatricesWeightsExtraKind, this.matricesWeightsExtra, oT), IT && (yield)), this.indices ? (TT.setIndices(this.indices, null, oT), IT && (yield)) : TT.setIndices([], null), TT.pR && this.materialInfos && this.materialInfos.length > 1) {
            const oT = TT;
            oT.pR = [];
            for (const TT of this.materialInfos) new LT.c(TT.materialIndex, TT.verticesStart, TT.verticesCount, TT.indexStart, TT.indexCount, oT)
          }
          return this
        }
        _update(TT, oT, IT) {
          return this.positions && TT.updateVerticesData(kT.i.PositionKind, this.positions, oT, IT), this.normals && TT.updateVerticesData(kT.i.NormalKind, this.normals, oT, IT), this.tangents && TT.updateVerticesData(kT.i.TangentKind, this.tangents, oT, IT), this.uvs && TT.updateVerticesData(kT.i.UVKind, this.uvs, oT, IT), this.uvs2 && TT.updateVerticesData(kT.i.UV2Kind, this.uvs2, oT, IT), this.uvs3 && TT.updateVerticesData(kT.i.UV3Kind, this.uvs3, oT, IT), this.uvs4 && TT.updateVerticesData(kT.i.UV4Kind, this.uvs4, oT, IT), this.uvs5 && TT.updateVerticesData(kT.i.UV5Kind, this.uvs5, oT, IT), this.uvs6 && TT.updateVerticesData(kT.i.UV6Kind, this.uvs6, oT, IT), this.colors && TT.updateVerticesData(kT.i.ColorKind, this.colors, oT, IT), this.matricesIndices && TT.updateVerticesData(kT.i.MatricesIndicesKind, this.matricesIndices, oT, IT), this.matricesWeights && TT.updateVerticesData(kT.i.MatricesWeightsKind, this.matricesWeights, oT, IT), this.matricesIndicesExtra && TT.updateVerticesData(kT.i.MatricesIndicesExtraKind, this.matricesIndicesExtra, oT, IT), this.matricesWeightsExtra && TT.updateVerticesData(kT.i.MatricesWeightsExtraKind, this.matricesWeightsExtra, oT, IT), this.indices && TT.setIndices(this.indices, null), this
        }
        static _TransformVector3Coordinates(TT, oT) {
          let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            iT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : TT.length;
          const kT = zT.i.sc[0],
            WT = zT.i.sc[1];
          for (let XT = IT; XT < IT + iT; XT += 3) zT.m.FromArrayToRef(TT, XT, kT), zT.m.TransformCoordinatesToRef(kT, oT, WT), TT[XT] = WT.x, TT[XT + 1] = WT.y, TT[XT + 2] = WT.z
        }
        static _TransformVector3Normals(TT, oT) {
          let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            iT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : TT.length;
          const kT = zT.i.sc[0],
            WT = zT.i.sc[1];
          for (let XT = IT; XT < IT + iT; XT += 3) zT.m.FromArrayToRef(TT, XT, kT), zT.m.TransformNormalToRef(kT, oT, WT), TT[XT] = WT.x, TT[XT + 1] = WT.y, TT[XT + 2] = WT.z
        }
        static _TransformVector4Normals(TT, oT) {
          let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            iT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : TT.length;
          const kT = zT.i.Vector4[0],
            WT = zT.i.Vector4[1];
          for (let XT = IT; XT < IT + iT; XT += 4) zT.n.FromArrayToRef(TT, XT, kT), zT.n.TransformNormalToRef(kT, oT, WT), TT[XT] = WT.x, TT[XT + 1] = WT.y, TT[XT + 2] = WT.z, TT[XT + 3] = WT.w
        }
        static _FlipFaces(TT) {
          let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : TT.length;
          for (let iT = oT; iT < oT + IT; iT += 3) {
            const oT = TT[iT + 1];
            TT[iT + 1] = TT[iT + 2], TT[iT + 2] = oT
          }
        }
        transform(oT) {
          const IT = oT.determinant() < 0;
          return this.positions && TT._TransformVector3Coordinates(this.positions, oT), this.normals && TT._TransformVector3Normals(this.normals, oT), this.tangents && TT._TransformVector4Normals(this.tangents, oT), IT && this.indices && TT._FlipFaces(this.indices), this
        }
        splitBasedOnMaterialID() {
          if (!this.materialInfos || this.materialInfos.length < 2) return [this];
          const oT = [];
          for (const IT of this.materialInfos) {
            const iT = new TT;
            if (this.positions && (iT.positions = this.positions.slice(3 * IT.verticesStart, 3 * (IT.verticesCount + IT.verticesStart))), this.normals && (iT.normals = this.normals.slice(3 * IT.verticesStart, 3 * (IT.verticesCount + IT.verticesStart))), this.tangents && (iT.tangents = this.tangents.slice(4 * IT.verticesStart, 4 * (IT.verticesCount + IT.verticesStart))), this.colors && (iT.colors = this.colors.slice(4 * IT.verticesStart, 4 * (IT.verticesCount + IT.verticesStart))), this.uvs && (iT.uvs = this.uvs.slice(2 * IT.verticesStart, 2 * (IT.verticesCount + IT.verticesStart))), this.uvs2 && (iT.uvs2 = this.uvs2.slice(2 * IT.verticesStart, 2 * (IT.verticesCount + IT.verticesStart))), this.uvs3 && (iT.uvs3 = this.uvs3.slice(2 * IT.verticesStart, 2 * (IT.verticesCount + IT.verticesStart))), this.uvs4 && (iT.uvs4 = this.uvs4.slice(2 * IT.verticesStart, 2 * (IT.verticesCount + IT.verticesStart))), this.uvs5 && (iT.uvs5 = this.uvs5.slice(2 * IT.verticesStart, 2 * (IT.verticesCount + IT.verticesStart))), this.uvs6 && (iT.uvs6 = this.uvs6.slice(2 * IT.verticesStart, 2 * (IT.verticesCount + IT.verticesStart))), this.matricesIndices && (iT.matricesIndices = this.matricesIndices.slice(4 * IT.verticesStart, 4 * (IT.verticesCount + IT.verticesStart))), this.matricesIndicesExtra && (iT.matricesIndicesExtra = this.matricesIndicesExtra.slice(4 * IT.verticesStart, 4 * (IT.verticesCount + IT.verticesStart))), this.matricesWeights && (iT.matricesWeights = this.matricesWeights.slice(4 * IT.verticesStart, 4 * (IT.verticesCount + IT.verticesStart))), this.matricesWeightsExtra && (iT.matricesWeightsExtra = this.matricesWeightsExtra.slice(4 * IT.verticesStart, 4 * (IT.verticesCount + IT.verticesStart))), this.indices) {
              iT.indices = [];
              for (let TT = IT.indexStart; TT < IT.indexStart + IT.indexCount; TT++) iT.indices.push(this.indices[TT] - IT.verticesStart)
            }
            const zT = new xT;
            zT.indexStart = 0, zT.indexCount = iT.indices ? iT.indices.length : 0, zT.materialIndex = IT.materialIndex, zT.verticesStart = 0, zT.verticesCount = (iT.positions ? iT.positions.length : 0) / 3, iT.materialInfos = [zT], oT.push(iT)
          }
          return oT
        }
        merge(TT) {
          let oT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            IT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            iT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            zT = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
          const kT = Array.isArray(TT) ? TT.map((TT => ({
            vertexData: TT
          }))) : [{
            vertexData: TT
          }];
          return (0, ST.j)(this._mergeCoroutine(void 0, kT, oT, !1, IT, iT, zT))
        }* _mergeCoroutine(oT, IT) {
          let iT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            zT = arguments.length > 3 ? arguments[3] : void 0,
            WT = arguments.length > 4 ? arguments[4] : void 0,
            XT = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
            BT = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
          this._validate();
          let FT = IT.map((TT => TT.vertexData)),
            ST = this;
          if (BT)
            for (const TT of FT) TT && (TT._validate(), !this.normals && TT.normals && (this.normals = new Float32Array(this.positions.length)), !this.tangents && TT.tangents && (this.tangents = new Float32Array(this.positions.length / 3 * 4)), !this.uvs && TT.uvs && (this.uvs = new Float32Array(this.positions.length / 3 * 2)), !this.uvs2 && TT.uvs2 && (this.uvs2 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs3 && TT.uvs3 && (this.uvs3 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs4 && TT.uvs4 && (this.uvs4 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs5 && TT.uvs5 && (this.uvs5 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs6 && TT.uvs6 && (this.uvs6 = new Float32Array(this.positions.length / 3 * 2)), !this.colors && TT.colors && (this.colors = new Float32Array(this.positions.length / 3 * 4), this.colors.fill(1)), !this.matricesIndices && TT.matricesIndices && (this.matricesIndices = new Float32Array(this.positions.length / 3 * 4)), !this.matricesWeights && TT.matricesWeights && (this.matricesWeights = new Float32Array(this.positions.length / 3 * 4)), !this.matricesIndicesExtra && TT.matricesIndicesExtra && (this.matricesIndicesExtra = new Float32Array(this.positions.length / 3 * 4)), !this.matricesWeightsExtra && TT.matricesWeightsExtra && (this.matricesWeightsExtra = new Float32Array(this.positions.length / 3 * 4)));
          for (const TT of FT)
            if (TT)
              if (BT) this.normals && !TT.normals && (TT.normals = new Float32Array(TT.positions.length)), this.tangents && !TT.tangents && (TT.tangents = new Float32Array(TT.positions.length / 3 * 4)), this.uvs && !TT.uvs && (TT.uvs = new Float32Array(TT.positions.length / 3 * 2)), this.uvs2 && !TT.uvs2 && (TT.uvs2 = new Float32Array(TT.positions.length / 3 * 2)), this.uvs3 && !TT.uvs3 && (TT.uvs3 = new Float32Array(TT.positions.length / 3 * 2)), this.uvs4 && !TT.uvs4 && (TT.uvs4 = new Float32Array(TT.positions.length / 3 * 2)), this.uvs5 && !TT.uvs5 && (TT.uvs5 = new Float32Array(TT.positions.length / 3 * 2)), this.uvs6 && !TT.uvs6 && (TT.uvs6 = new Float32Array(TT.positions.length / 3 * 2)), this.colors && !TT.colors && (TT.colors = new Float32Array(TT.positions.length / 3 * 4), TT.colors.fill(1)), this.matricesIndices && !TT.matricesIndices && (TT.matricesIndices = new Float32Array(TT.positions.length / 3 * 4)), this.matricesWeights && !TT.matricesWeights && (TT.matricesWeights = new Float32Array(TT.positions.length / 3 * 4)), this.matricesIndicesExtra && !TT.matricesIndicesExtra && (TT.matricesIndicesExtra = new Float32Array(TT.positions.length / 3 * 4)), this.matricesWeightsExtra && !TT.matricesWeightsExtra && (TT.matricesWeightsExtra = new Float32Array(TT.positions.length / 3 * 4));
              else if (TT._validate(), !this.normals !== !TT.normals || !this.tangents !== !TT.tangents || !this.uvs !== !TT.uvs || !this.uvs2 !== !TT.uvs2 || !this.uvs3 !== !TT.uvs3 || !this.uvs4 !== !TT.uvs4 || !this.uvs5 !== !TT.uvs5 || !this.uvs6 !== !TT.uvs6 || !this.colors !== !TT.colors || !this.matricesIndices !== !TT.matricesIndices || !this.matricesWeights !== !TT.matricesWeights || !this.matricesIndicesExtra !== !TT.matricesIndicesExtra || !this.matricesWeightsExtra !== !TT.matricesWeightsExtra) throw new Error("Cannot merge vertex data that do not have the same set of attributes");
          if (XT) {
            let TT, iT = 0,
              zT = 0;
            const kT = [];
            let WT = null;
            const XT = [];
            for (const IT of this.splitBasedOnMaterialID()) XT.push({
              vertexData: IT,
              transform: oT
            });
            for (const oT of IT)
              if (oT.vertexData)
                for (const TT of oT.vertexData.splitBasedOnMaterialID()) XT.push({
                  vertexData: TT,
                  transform: oT.transform
                });
            XT.sort(((TT, oT) => {
              const IT = TT.vertexData.materialInfos ? TT.vertexData.materialInfos[0].materialIndex : 0,
                iT = oT.vertexData.materialInfos ? oT.vertexData.materialInfos[0].materialIndex : 0;
              return IT > iT ? 1 : IT === iT ? 0 : -1
            }));
            for (const oT of XT) {
              const IT = oT.vertexData;
              if (TT = IT.materialInfos ? IT.materialInfos[0].materialIndex : 0, WT && WT.materialIndex === TT) WT.indexCount += IT.indices.length, WT.verticesCount += IT.positions.length / 3;
              else {
                const oT = new xT;
                oT.materialIndex = TT, oT.indexStart = iT, oT.indexCount = IT.indices.length, oT.verticesStart = zT, oT.verticesCount = IT.positions.length / 3, kT.push(oT), WT = oT
              }
              iT += IT.indices.length, zT += IT.positions.length / 3
            }
            const BT = XT.splice(0, 1)[0];
            ST = BT.vertexData, oT = BT.transform, FT = XT.map((TT => TT.vertexData)), IT = XT, this.materialInfos = kT
          }
          const DT = FT.reduce(((TT, oT) => TT + (oT.indices?.length ?? 0)), ST.indices?.length ?? 0);
          let LT = WT || FT.some((TT => TT.indices === ST.indices)) ? ST.indices?.slice() : ST.indices;
          if (DT > 0) {
            let kT = LT?.length ?? 0;
            if (LT || (LT = new Array(DT)), LT.length !== DT) {
              if (Array.isArray(LT)) LT.length = DT;
              else {
                const TT = iT || LT instanceof Uint32Array ? new Uint32Array(DT) : new Uint16Array(DT);
                TT.set(LT), LT = TT
              }
              oT && oT.determinant() < 0 && TT._FlipFaces(LT, 0, kT)
            }
            let WT = ST.positions ? ST.positions.length / 3 : 0;
            for (const {
                vertexData: oT,
                transform: iT
              }
              of IT)
              if (oT.indices) {
                for (let TT = 0; TT < oT.indices.length; TT++) LT[kT + TT] = oT.indices[TT] + WT;
                iT && iT.determinant() < 0 && TT._FlipFaces(LT, kT, oT.indices.length), WT += oT.positions.length / 3, kT += oT.indices.length, zT && (yield)
              }
          }
          return this.indices = LT, this.positions = TT._MergeElement(kT.i.PositionKind, ST.positions, oT, IT.map((TT => [TT.vertexData.positions, TT.transform]))), zT && (yield), ST.normals && (this.normals = TT._MergeElement(kT.i.NormalKind, ST.normals, oT, IT.map((TT => [TT.vertexData.normals, TT.transform]))), zT && (yield)), ST.tangents && (this.tangents = TT._MergeElement(kT.i.TangentKind, ST.tangents, oT, IT.map((TT => [TT.vertexData.tangents, TT.transform]))), zT && (yield)), ST.uvs && (this.uvs = TT._MergeElement(kT.i.UVKind, ST.uvs, oT, IT.map((TT => [TT.vertexData.uvs, TT.transform]))), zT && (yield)), ST.uvs2 && (this.uvs2 = TT._MergeElement(kT.i.UV2Kind, ST.uvs2, oT, IT.map((TT => [TT.vertexData.uvs2, TT.transform]))), zT && (yield)), ST.uvs3 && (this.uvs3 = TT._MergeElement(kT.i.UV3Kind, ST.uvs3, oT, IT.map((TT => [TT.vertexData.uvs3, TT.transform]))), zT && (yield)), ST.uvs4 && (this.uvs4 = TT._MergeElement(kT.i.UV4Kind, ST.uvs4, oT, IT.map((TT => [TT.vertexData.uvs4, TT.transform]))), zT && (yield)), ST.uvs5 && (this.uvs5 = TT._MergeElement(kT.i.UV5Kind, ST.uvs5, oT, IT.map((TT => [TT.vertexData.uvs5, TT.transform]))), zT && (yield)), ST.uvs6 && (this.uvs6 = TT._MergeElement(kT.i.UV6Kind, ST.uvs6, oT, IT.map((TT => [TT.vertexData.uvs6, TT.transform]))), zT && (yield)), ST.colors && (this.colors = TT._MergeElement(kT.i.ColorKind, ST.colors, oT, IT.map((TT => [TT.vertexData.colors, TT.transform]))), (void 0 !== ST.hasVertexAlpha || IT.some((TT => void 0 !== TT.vertexData.hasVertexAlpha))) && (this.hasVertexAlpha = ST.hasVertexAlpha || IT.some((TT => TT.vertexData.hasVertexAlpha))), zT && (yield)), ST.matricesIndices && (this.matricesIndices = TT._MergeElement(kT.i.MatricesIndicesKind, ST.matricesIndices, oT, IT.map((TT => [TT.vertexData.matricesIndices, TT.transform]))), zT && (yield)), ST.matricesWeights && (this.matricesWeights = TT._MergeElement(kT.i.MatricesWeightsKind, ST.matricesWeights, oT, IT.map((TT => [TT.vertexData.matricesWeights, TT.transform]))), zT && (yield)), ST.matricesIndicesExtra && (this.matricesIndicesExtra = TT._MergeElement(kT.i.MatricesIndicesExtraKind, ST.matricesIndicesExtra, oT, IT.map((TT => [TT.vertexData.matricesIndicesExtra, TT.transform]))), zT && (yield)), ST.matricesWeightsExtra && (this.matricesWeightsExtra = TT._MergeElement(kT.i.MatricesWeightsExtraKind, ST.matricesWeightsExtra, oT, IT.map((TT => [TT.vertexData.matricesWeightsExtra, TT.transform])))), this
        }
        static _MergeElement(oT, IT, iT, zT) {
          const WT = zT.filter((TT => null !== TT[0] && void 0 !== TT[0]));
          if (!IT && 0 == WT.length) return IT;
          if (!IT) return this._MergeElement(oT, WT[0][0], WT[0][1], WT.slice(1));
          const XT = WT.reduce(((TT, oT) => TT + oT[0].length), IT.length),
            BT = oT === kT.i.PositionKind ? TT._TransformVector3Coordinates : oT === kT.i.NormalKind ? TT._TransformVector3Normals : oT === kT.i.TangentKind ? TT._TransformVector4Normals : () => {};
          if (IT instanceof Float32Array) {
            const TT = new Float32Array(XT);
            TT.set(IT), iT && BT(TT, iT, 0, IT.length);
            let oT = IT.length;
            for (const [IT, iT] of WT) TT.set(IT, oT), iT && BT(TT, iT, oT, IT.length), oT += IT.length;
            return TT
          } {
            const TT = new Array(XT);
            for (let iT = 0; iT < IT.length; iT++) TT[iT] = IT[iT];
            iT && BT(TT, iT, 0, IT.length);
            let oT = IT.length;
            for (const [IT, iT] of WT) {
              for (let iT = 0; iT < IT.length; iT++) TT[oT + iT] = IT[iT];
              iT && BT(TT, iT, oT, IT.length), oT += IT.length
            }
            return TT
          }
        }
        _validate() {
          if (!this.positions) throw new DT.k("Positions are required", DT.g.MeshInvalidPositionsError);
          const TT = (TT, oT) => {
              const IT = (0, kT.h)(TT);
              if (oT.length % IT !== 0) throw new Error("The " + TT + "s array count must be a multiple of " + IT);
              return oT.length / IT
            },
            oT = TT(kT.i.PositionKind, this.positions),
            IT = (IT, iT) => {
              const zT = TT(IT, iT);
              if (zT !== oT) throw new Error("The " + IT + "s element count (" + zT + ") does not match the positions count (" + oT + ")")
            };
          this.normals && IT(kT.i.NormalKind, this.normals), this.tangents && IT(kT.i.TangentKind, this.tangents), this.uvs && IT(kT.i.UVKind, this.uvs), this.uvs2 && IT(kT.i.UV2Kind, this.uvs2), this.uvs3 && IT(kT.i.UV3Kind, this.uvs3), this.uvs4 && IT(kT.i.UV4Kind, this.uvs4), this.uvs5 && IT(kT.i.UV5Kind, this.uvs5), this.uvs6 && IT(kT.i.UV6Kind, this.uvs6), this.colors && IT(kT.i.ColorKind, this.colors), this.matricesIndices && IT(kT.i.MatricesIndicesKind, this.matricesIndices), this.matricesWeights && IT(kT.i.MatricesWeightsKind, this.matricesWeights), this.matricesIndicesExtra && IT(kT.i.MatricesIndicesExtraKind, this.matricesIndicesExtra), this.matricesWeightsExtra && IT(kT.i.MatricesWeightsExtraKind, this.matricesWeightsExtra)
        }
        clone() {
          const oT = this.serialize();
          return TT.Parse(oT)
        }
        serialize() {
          const TT = {};
          if (this.positions && (TT.positions = Array.from(this.positions)), this.normals && (TT.normals = Array.from(this.normals)), this.tangents && (TT.tangents = Array.from(this.tangents)), this.uvs && (TT.uvs = Array.from(this.uvs)), this.uvs2 && (TT.uvs2 = Array.from(this.uvs2)), this.uvs3 && (TT.uvs3 = Array.from(this.uvs3)), this.uvs4 && (TT.uvs4 = Array.from(this.uvs4)), this.uvs5 && (TT.uvs5 = Array.from(this.uvs5)), this.uvs6 && (TT.uvs6 = Array.from(this.uvs6)), this.colors && (TT.colors = Array.from(this.colors), TT.hasVertexAlpha = this.hasVertexAlpha), this.matricesIndices && (TT.matricesIndices = Array.from(this.matricesIndices), TT.matricesIndicesExpanded = !0), this.matricesWeights && (TT.matricesWeights = Array.from(this.matricesWeights)), this.matricesIndicesExtra && (TT.matricesIndicesExtra = Array.from(this.matricesIndicesExtra), TT.matricesIndicesExtraExpanded = !0), this.matricesWeightsExtra && (TT.matricesWeightsExtra = Array.from(this.matricesWeightsExtra)), TT.indices = this.indices ? Array.from(this.indices) : [], this.materialInfos) {
            TT.materialInfos = [];
            for (const oT of this.materialInfos) {
              const IT = {
                indexStart: oT.indexStart,
                indexCount: oT.indexCount,
                materialIndex: oT.materialIndex,
                verticesStart: oT.verticesStart,
                verticesCount: oT.verticesCount
              };
              TT.materialInfos.push(IT)
            }
          }
          return TT
        }
        static ExtractFromMesh(oT, IT, iT) {
          return TT._ExtractFrom(oT, IT, iT)
        }
        static ExtractFromGeometry(oT, IT, iT) {
          return TT._ExtractFrom(oT, IT, iT)
        }
        static _ExtractFrom(oT, IT, iT) {
          const zT = new TT;
          if (oT.isVerticesDataPresent(kT.i.PositionKind) && (zT.positions = oT.getVerticesData(kT.i.PositionKind, IT, iT)), oT.isVerticesDataPresent(kT.i.NormalKind) && (zT.normals = oT.getVerticesData(kT.i.NormalKind, IT, iT)), oT.isVerticesDataPresent(kT.i.TangentKind) && (zT.tangents = oT.getVerticesData(kT.i.TangentKind, IT, iT)), oT.isVerticesDataPresent(kT.i.UVKind) && (zT.uvs = oT.getVerticesData(kT.i.UVKind, IT, iT)), oT.isVerticesDataPresent(kT.i.UV2Kind) && (zT.uvs2 = oT.getVerticesData(kT.i.UV2Kind, IT, iT)), oT.isVerticesDataPresent(kT.i.UV3Kind) && (zT.uvs3 = oT.getVerticesData(kT.i.UV3Kind, IT, iT)), oT.isVerticesDataPresent(kT.i.UV4Kind) && (zT.uvs4 = oT.getVerticesData(kT.i.UV4Kind, IT, iT)), oT.isVerticesDataPresent(kT.i.UV5Kind) && (zT.uvs5 = oT.getVerticesData(kT.i.UV5Kind, IT, iT)), oT.isVerticesDataPresent(kT.i.UV6Kind) && (zT.uvs6 = oT.getVerticesData(kT.i.UV6Kind, IT, iT)), oT.isVerticesDataPresent(kT.i.ColorKind)) {
            const TT = oT.geometry || oT,
              WT = TT.getVertexBuffer(kT.i.ColorKind),
              XT = TT.getVerticesData(kT.i.ColorKind, IT, iT);
            if (3 === WT.getSize()) {
              const TT = new Float32Array(4 * XT.length / 3);
              for (let oT = 0, IT = 0; oT < XT.length; oT += 3, IT += 4) TT[IT] = XT[oT], TT[IT + 1] = XT[oT + 1], TT[IT + 2] = XT[oT + 2], TT[IT + 3] = 1;
              zT.colors = TT
            } else {
              if (4 !== WT.getSize()) throw new Error(`Unexpected number of color components: ${WT.getSize()}`);
              zT.colors = XT
            }
          }
          return oT.isVerticesDataPresent(kT.i.MatricesIndicesKind) && (zT.matricesIndices = oT.getVerticesData(kT.i.MatricesIndicesKind, IT, iT)), oT.isVerticesDataPresent(kT.i.MatricesWeightsKind) && (zT.matricesWeights = oT.getVerticesData(kT.i.MatricesWeightsKind, IT, iT)), oT.isVerticesDataPresent(kT.i.MatricesIndicesExtraKind) && (zT.matricesIndicesExtra = oT.getVerticesData(kT.i.MatricesIndicesExtraKind, IT, iT)), oT.isVerticesDataPresent(kT.i.MatricesWeightsExtraKind) && (zT.matricesWeightsExtra = oT.getVerticesData(kT.i.MatricesWeightsExtraKind, IT, iT)), zT.indices = oT.hWT(IT, iT), zT
        }
        static CreateRibbon(TT) {
          throw (0, WT.k)("ribbonBuilder")
        }
        static CreateBox(TT) {
          throw (0, WT.k)("boxBuilder")
        }
        static CreateTiledBox(TT) {
          throw (0, WT.k)("tiledBoxBuilder")
        }
        static CreateTiledPlane(TT) {
          throw (0, WT.k)("tiledPlaneBuilder")
        }
        static CreateSphere(TT) {
          throw (0, WT.k)("sphereBuilder")
        }
        static CreateCylinder(TT) {
          throw (0, WT.k)("cylinderBuilder")
        }
        static CreateTorus(TT) {
          throw (0, WT.k)("torusBuilder")
        }
        static CreateLineSystem(TT) {
          throw (0, WT.k)("linesBuilder")
        }
        static CreateDashedLines(TT) {
          throw (0, WT.k)("linesBuilder")
        }
        static CreateGround(TT) {
          throw (0, WT.k)("groundBuilder")
        }
        static CreateTiledGround(TT) {
          throw (0, WT.k)("groundBuilder")
        }
        static CreateGroundFromHeightMap(TT) {
          throw (0, WT.k)("groundBuilder")
        }
        static CreatePlane(TT) {
          throw (0, WT.k)("planeBuilder")
        }
        static CreateDisc(TT) {
          throw (0, WT.k)("discBuilder")
        }
        static CreatePolygon(TT, oT, IT, iT, zT, kT, XT) {
          throw (0, WT.k)("polygonBuilder")
        }
        static CreateIcoSphere(TT) {
          throw (0, WT.k)("icoSphereBuilder")
        }
        static CreatePolyhedron(TT) {
          throw (0, WT.k)("polyhedronBuilder")
        }
        static CreateCapsule() {
          arguments.length > 0 && void 0 !== arguments[0] || zT.m.Up();
          throw (0, WT.k)("capsuleBuilder")
        }
        static CreateTorusKnot(TT) {
          throw (0, WT.k)("torusKnotBuilder")
        }
        static ComputeNormals(TT, oT, IT, iT) {
          let kT, WT, XT, BT, FT, ST, DT, LT, xT, cT, KT, MT, rT, AT, gT, hT, wT, mT, eT, RT, uT = !1,
            vT = !1,
            ET = !1,
            fT = !1,
            CT = 1,
            jT = 0,
            JT = null;
          iT && (uT = !!iT.facetNormals, vT = !!iT.facetPositions, ET = !!iT.facetPartitioning, CT = !0 === iT.useRightHandedSystem ? -1 : 1, jT = iT.ratio || 0, fT = !!iT.depthSort, JT = iT.distanceTo, fT && void 0 === JT && (JT = zT.m.Zero()));
          let UT = 0,
            aT = 0,
            YT = 0,
            QT = 0;
          for (ET && iT && iT.bbSize && (UT = iT.subDiv.X * jT / iT.bbSize.x, aT = iT.subDiv.Y * jT / iT.bbSize.y, YT = iT.subDiv.Z * jT / iT.bbSize.z, QT = iT.subDiv.max * iT.subDiv.max, iT.facetPartitioning.length = 0), kT = 0; kT < TT.length; kT++) IT[kT] = 0;
          const OT = oT.length / 3 | 0;
          for (kT = 0; kT < OT; kT++) {
            if (MT = 3 * oT[3 * kT], rT = MT + 1, AT = MT + 2, gT = 3 * oT[3 * kT + 1], hT = gT + 1, wT = gT + 2, mT = 3 * oT[3 * kT + 2], eT = mT + 1, RT = mT + 2, WT = TT[MT] - TT[gT], XT = TT[rT] - TT[hT], BT = TT[AT] - TT[wT], FT = TT[mT] - TT[gT], ST = TT[eT] - TT[hT], DT = TT[RT] - TT[wT], LT = CT * (XT * DT - BT * ST), xT = CT * (BT * FT - WT * DT), cT = CT * (WT * ST - XT * FT), KT = Math.sqrt(LT * LT + xT * xT + cT * cT), KT = 0 === KT ? 1 : KT, LT /= KT, xT /= KT, cT /= KT, uT && iT && (iT.facetNormals[kT].x = LT, iT.facetNormals[kT].y = xT, iT.facetNormals[kT].z = cT), vT && iT && (iT.facetPositions[kT].x = (TT[MT] + TT[gT] + TT[mT]) / 3, iT.facetPositions[kT].y = (TT[rT] + TT[hT] + TT[eT]) / 3, iT.facetPositions[kT].z = (TT[AT] + TT[wT] + TT[RT]) / 3), ET && iT) {
              const oT = Math.floor((iT.facetPositions[kT].x - iT.bInfo.minimum.x * jT) * UT),
                IT = Math.floor((iT.facetPositions[kT].y - iT.bInfo.minimum.y * jT) * aT),
                zT = Math.floor((iT.facetPositions[kT].z - iT.bInfo.minimum.z * jT) * YT),
                WT = Math.floor((TT[MT] - iT.bInfo.minimum.x * jT) * UT),
                XT = Math.floor((TT[rT] - iT.bInfo.minimum.y * jT) * aT),
                BT = Math.floor((TT[AT] - iT.bInfo.minimum.z * jT) * YT),
                FT = Math.floor((TT[gT] - iT.bInfo.minimum.x * jT) * UT),
                ST = Math.floor((TT[hT] - iT.bInfo.minimum.y * jT) * aT),
                DT = Math.floor((TT[wT] - iT.bInfo.minimum.z * jT) * YT),
                LT = Math.floor((TT[mT] - iT.bInfo.minimum.x * jT) * UT),
                xT = Math.floor((TT[eT] - iT.bInfo.minimum.y * jT) * aT),
                cT = Math.floor((TT[RT] - iT.bInfo.minimum.z * jT) * YT),
                KT = WT + iT.subDiv.max * XT + QT * BT,
                uT = FT + iT.subDiv.max * ST + QT * DT,
                vT = LT + iT.subDiv.max * xT + QT * cT,
                ET = oT + iT.subDiv.max * IT + QT * zT;
              iT.facetPartitioning[ET] = iT.facetPartitioning[ET] ? iT.facetPartitioning[ET] : [], iT.facetPartitioning[KT] = iT.facetPartitioning[KT] ? iT.facetPartitioning[KT] : [], iT.facetPartitioning[uT] = iT.facetPartitioning[uT] ? iT.facetPartitioning[uT] : [], iT.facetPartitioning[vT] = iT.facetPartitioning[vT] ? iT.facetPartitioning[vT] : [], iT.facetPartitioning[KT].push(kT), uT != KT && iT.facetPartitioning[uT].push(kT), vT != uT && vT != KT && iT.facetPartitioning[vT].push(kT), ET != KT && ET != uT && ET != vT && iT.facetPartitioning[ET].push(kT)
            }
            if (fT && iT && iT.facetPositions) {
              const TT = iT.depthSortedFacets[kT];
              TT.ind = 3 * kT, TT.sqDistance = zT.m.DistanceSquared(iT.facetPositions[kT], JT)
            }
            IT[MT] += LT, IT[rT] += xT, IT[AT] += cT, IT[gT] += LT, IT[hT] += xT, IT[wT] += cT, IT[mT] += LT, IT[eT] += xT, IT[RT] += cT
          }
          for (kT = 0; kT < IT.length / 3; kT++) LT = IT[3 * kT], xT = IT[3 * kT + 1], cT = IT[3 * kT + 2], KT = Math.sqrt(LT * LT + xT * xT + cT * cT), KT = 0 === KT ? 1 : KT, LT /= KT, xT /= KT, cT /= KT, IT[3 * kT] = LT, IT[3 * kT + 1] = xT, IT[3 * kT + 2] = cT
        }
        static _ComputeSides(oT, IT, iT, kT, WT, XT, BT) {
          const FT = iT.length,
            ST = kT.length;
          let DT, LT;
          switch (oT = oT || TT.DEFAULTSIDE) {
            case TT.FRONTSIDE:
              break;
            case TT.BACKSIDE:
              for (DT = 0; DT < FT; DT += 3) {
                const TT = iT[DT];
                iT[DT] = iT[DT + 2], iT[DT + 2] = TT
              }
              for (LT = 0; LT < ST; LT++) kT[LT] = -kT[LT];
              break;
            case TT.DOUBLESIDE: {
              const TT = IT.length,
                oT = TT / 3;
              for (let iT = 0; iT < TT; iT++) IT[TT + iT] = IT[iT];
              for (DT = 0; DT < FT; DT += 3) iT[DT + FT] = iT[DT + 2] + oT, iT[DT + 1 + FT] = iT[DT + 1] + oT, iT[DT + 2 + FT] = iT[DT] + oT;
              for (LT = 0; LT < ST; LT++) kT[ST + LT] = -kT[LT];
              const xT = WT.length;
              let cT;
              for (cT = 0; cT < xT; cT++) WT[cT + xT] = WT[cT];
              for (XT = XT || new zT.n(0, 0, 1, 1), BT = BT || new zT.n(0, 0, 1, 1), cT = 0, DT = 0; DT < xT / 2; DT++) WT[cT] = XT.x + (XT.z - XT.x) * WT[cT], WT[cT + 1] = XT.y + (XT.w - XT.y) * WT[cT + 1], WT[cT + xT] = BT.x + (BT.z - BT.x) * WT[cT + xT], WT[cT + xT + 1] = BT.y + (BT.w - BT.y) * WT[cT + xT + 1], cT += 2;
              break
            }
          }
        }
        static Parse(oT) {
          const IT = new TT,
            iT = oT.positions;
          iT && IT.set(iT, kT.i.PositionKind);
          const zT = oT.normals;
          zT && IT.set(zT, kT.i.NormalKind);
          const WT = oT.tangents;
          WT && IT.set(WT, kT.i.TangentKind);
          const BT = oT.uvs;
          BT && IT.set(BT, kT.i.UVKind);
          const FT = oT.uvs2;
          FT && IT.set(FT, kT.i.UV2Kind);
          const ST = oT.uvs3;
          ST && IT.set(ST, kT.i.UV3Kind);
          const DT = oT.uvs4;
          DT && IT.set(DT, kT.i.UV4Kind);
          const LT = oT.uvs5;
          LT && IT.set(LT, kT.i.UV5Kind);
          const cT = oT.uvs6;
          cT && IT.set(cT, kT.i.UV6Kind);
          const KT = oT.colors;
          KT && (IT.set(XT.i.CheckColors4(KT, iT.length / 3), kT.i.ColorKind), void 0 !== oT.hasVertexAlpha && (IT.hasVertexAlpha = oT.hasVertexAlpha));
          const MT = oT.matricesIndices;
          MT && IT.set(MT, kT.i.MatricesIndicesKind);
          const rT = oT.matricesWeights;
          rT && IT.set(rT, kT.i.MatricesWeightsKind);
          const AT = oT.indices;
          AT && (IT.indices = AT);
          const gT = oT.materialInfos;
          if (gT) {
            IT.materialInfos = [];
            for (const TT of gT) {
              const oT = new xT;
              oT.indexCount = TT.indexCount, oT.indexStart = TT.indexStart, oT.verticesCount = TT.verticesCount, oT.verticesStart = TT.verticesStart, oT.materialIndex = TT.materialIndex, IT.materialInfos.push(oT)
            }
          }
          return IT
        }
        static ImportVertexData(oT, IT) {
          const iT = TT.Parse(oT);
          IT.setAllVerticesData(iT, oT.updatable)
        }
      }, (() => {
        const zT = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        oT = [FT.l.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], IT = [FT.l.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], cT = [FT.l.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], KT = [FT.l.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], (0, iT.h)(TT, null, oT, {
          kind: "method",
          name: "_TransformVector3Coordinates",
          static: !0,
          private: !1,
          access: {
            has: TT => "_TransformVector3Coordinates" in TT,
            get: TT => TT._TransformVector3Coordinates
          },
          metadata: zT
        }, null, MT), (0, iT.h)(TT, null, IT, {
          kind: "method",
          name: "_TransformVector3Normals",
          static: !0,
          private: !1,
          access: {
            has: TT => "_TransformVector3Normals" in TT,
            get: TT => TT._TransformVector3Normals
          },
          metadata: zT
        }, null, MT), (0, iT.h)(TT, null, cT, {
          kind: "method",
          name: "_TransformVector4Normals",
          static: !0,
          private: !1,
          access: {
            has: TT => "_TransformVector4Normals" in TT,
            get: TT => TT._TransformVector4Normals
          },
          metadata: zT
        }, null, MT), (0, iT.h)(TT, null, KT, {
          kind: "method",
          name: "_FlipFaces",
          static: !0,
          private: !1,
          access: {
            has: TT => "_FlipFaces" in TT,
            get: TT => TT._FlipFaces
          },
          metadata: zT
        }, null, MT), zT && Object.defineProperty(TT, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: zT
        })
      })(), TT.FRONTSIDE = ((0, iT.j)(TT, MT), 0), TT.BACKSIDE = 1, TT.DOUBLESIDE = 2, TT.DEFAULTSIDE = 0, TT._UniqueIdGenerator = 0, TT
    })()
  },
  39273: (TT, oT, IT) => {
    var iT = IT(36118),
      zT = IT(37660),
      kT = IT(39091),
      WT = IT(39192),
      XT = IT(38923);
    const BT = "bakedVertexAnimationSettingsInstanced";

    function FT(TT) {
      const oT = TT.bakedVertexAnimationManager?.texture?.getInternalTexture()?._bufferView;
      return oT instanceof Float32Array || oT instanceof Uint16Array
    }

    function ST(TT, oT, IT, iT) {
      IT.W8(Number.POSITIVE_INFINITY), iT.W8(Number.NEGATIVE_INFINITY);
      for (let zT = 0; zT < 3 * oT; zT += 3) {
        const oT = TT[zT],
          kT = TT[zT + 1],
          WT = TT[zT + 2];
        oT < IT.x && (IT.x = oT), kT < IT.y && (IT.y = kT), WT < IT.z && (IT.z = WT), oT > iT.x && (iT.x = oT), kT > iT.y && (iT.y = kT), WT > iT.z && (iT.z = WT)
      }
    }

    function DT(TT, oT, IT) {
      IT && (TT.x -= TT.x * IT.x + IT.y, TT.y -= TT.y * IT.x + IT.y, TT.z -= TT.z * IT.x + IT.y, oT.x += oT.x * IT.x + IT.y, oT.y += oT.y * IT.x + IT.y, oT.z += oT.z * IT.x + IT.y)
    }

    function LT(TT, oT, IT, zT, kT) {
      const WT = iT.i.sc[7],
        XT = iT.i.sc[8];
      for (let BT = 0; BT < 2; ++BT)
        for (let FT = 0; FT < 2; ++FT)
          for (let ST = 0; ST < 2; ++ST) WT.set(BT ? oT.x : TT.x, FT ? oT.y : TT.y, ST ? oT.z : TT.z), iT.m.TransformCoordinatesToRef(WT, IT, XT), zT.minimizeInPlace(XT), kT.maximizeInPlace(XT)
    }

    function xT(TT, oT, IT, zT, kT) {
      const WT = iT.i.sc[7];
      for (let XT = 0; XT < 3 * oT; XT += 3) iT.m.TransformCoordinatesFromFloatsToRef(TT[XT], TT[XT + 1], TT[XT + 2], IT, WT), zT.minimizeInPlace(WT), kT.maximizeInPlace(WT)
    }
    let cT = !1;
    cT || (cT = !0, WT.e.prototype.thinInstanceAdd = function(TT) {
      let oT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (!this.pC().Zc().getCaps().instancedArrays) return zT.d.Error("Thin Instances are not supported on this device as Instanced Array extension not supported"), -1;
      this._thinInstanceUpdateBufferSize("matrix", Array.isArray(TT) ? TT.length : 1);
      const IT = this._thinInstanceDataStorage.instancesCount;
      if (Array.isArray(TT))
        for (let iT = 0; iT < TT.length; ++iT) this.thinInstanceSetMatrixAt(this._thinInstanceDataStorage.instancesCount++, TT[iT], iT === TT.length - 1 && oT);
      else this.thinInstanceSetMatrixAt(this._thinInstanceDataStorage.instancesCount++, TT, oT);
      return IT
    }, WT.e.prototype.thinInstanceAddSelf = function() {
      let TT = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      return this.thinInstanceAdd(iT.b.IdentityReadOnly, TT)
    }, WT.e.prototype.thinInstanceRegisterAttribute = function(TT, oT) {
      TT === XT.i.ColorKind && (TT = XT.i.ColorInstanceKind), this.removeVerticesData(TT), this._thinInstanceInitializeUserStorage(), this._userThinInstanceBuffersStorage.strides[TT] = oT, this._userThinInstanceBuffersStorage.sizes[TT] = oT * Math.max(32, this._thinInstanceDataStorage.instancesCount), this._userThinInstanceBuffersStorage.data[TT] = new Float32Array(this._userThinInstanceBuffersStorage.sizes[TT]), this._userThinInstanceBuffersStorage.vertexBuffers[TT] = new XT.i(this.Zc(), this._userThinInstanceBuffersStorage.data[TT], TT, !0, !1, oT, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[TT])
    }, WT.e.prototype.thinInstanceSetMatrixAt = function(TT, oT) {
      let IT = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      if (!this._thinInstanceDataStorage.matrixData || TT >= this._thinInstanceDataStorage.instancesCount) return !1;
      const iT = this._thinInstanceDataStorage.matrixData;
      return oT.copyToArray(iT, 16 * TT), this._thinInstanceDataStorage.worldMatrices && (this._thinInstanceDataStorage.worldMatrices[TT] = oT), IT && (this.X3("matrix"), this.Gc || this.thinInstanceRefreshBoundingInfo(!1)), !0
    }, WT.e.prototype.thinInstanceSetAttributeAt = function(TT, oT, IT) {
      let iT = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      return TT === XT.i.ColorKind && (TT = XT.i.ColorInstanceKind), !(!this._userThinInstanceBuffersStorage || !this._userThinInstanceBuffersStorage.data[TT] || oT >= this._thinInstanceDataStorage.instancesCount) && (this._thinInstanceUpdateBufferSize(TT, 0), this._userThinInstanceBuffersStorage.data[TT].set(IT, oT * this._userThinInstanceBuffersStorage.strides[TT]), iT && this.X3(TT), !0)
    }, Object.defineProperty(WT.e.prototype, "W9", {
      get: function() {
        return this._thinInstanceDataStorage.instancesCount
      },
      set: function(TT) {
        const oT = this._thinInstanceDataStorage.matrixData ?? this.source?._thinInstanceDataStorage.matrixData;
        TT <= (oT ? oT.length / 16 : 0) && (this._thinInstanceDataStorage.instancesCount = TT)
      },
      enumerable: !0,
      configurable: !0
    }), WT.e.prototype._thinInstanceCreateMatrixBuffer = function(TT, oT) {
      let IT = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      const iT = new XT.d(this.Zc(), oT, !IT, 16, !1, !0);
      for (let zT = 0; zT < 4; zT++) this.setVerticesBuffer(iT.createVertexBuffer(TT + zT, 4 * zT, 4));
      return iT
    }, WT.e.prototype.T_ = function(TT, oT) {
      let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        iT = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      if (IT = IT || 16, "matrix" === TT) this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = null, this._thinInstanceDataStorage.matrixBufferSize = oT ? oT.length : 32 * IT, this._thinInstanceDataStorage.matrixData = oT, this._thinInstanceDataStorage.worldMatrices = null, null !== oT ? (this._thinInstanceDataStorage.instancesCount = oT.length / IT, this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", oT, iT), this.Gc || this.thinInstanceRefreshBoundingInfo(!1)) : (this._thinInstanceDataStorage.instancesCount = 0, this.Gc || this.refreshBoundingInfo());
      else if ("previousMatrix" === TT) this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = null, this._thinInstanceDataStorage.previousMatrixData = oT, null !== oT && (this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", oT, iT));
      else if ("splatIndex" === TT && oT) {
        this._thinInstanceInitializeUserStorage(), this._thinInstanceDataStorage.instancesCount = oT.length / IT, this._userThinInstanceBuffersStorage.data[TT] = oT, this._userThinInstanceBuffersStorage.strides[TT] = IT, this._userThinInstanceBuffersStorage.sizes[TT] = oT.length;
        const iT = new XT.d(this.Zc(), oT, !0, 16, !1, !0);
        this._thinInstanceDataStorage.matrixBuffer = iT;
        for (let oT = 0; oT < 4; oT++) this.setVerticesBuffer(iT.createVertexBuffer(TT + oT, 4 * oT, 4))
      } else TT === XT.i.ColorKind && (TT = XT.i.ColorInstanceKind), null === oT ? this._userThinInstanceBuffersStorage?.data[TT] && (this.removeVerticesData(TT), delete this._userThinInstanceBuffersStorage.data[TT], delete this._userThinInstanceBuffersStorage.strides[TT], delete this._userThinInstanceBuffersStorage.sizes[TT], delete this._userThinInstanceBuffersStorage.vertexBuffers[TT]) : (this._thinInstanceInitializeUserStorage(), this._userThinInstanceBuffersStorage.data[TT] = oT, this._userThinInstanceBuffersStorage.strides[TT] = IT, this._userThinInstanceBuffersStorage.sizes[TT] = oT.length, this._userThinInstanceBuffersStorage.vertexBuffers[TT] = new XT.i(this.Zc(), oT, TT, !iT, !1, IT, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[TT]))
    }, WT.e.prototype.X3 = function(TT) {
      "matrix" === TT ? (this.thinInstanceAllowAutomaticStaticBufferRecreation && this._thinInstanceDataStorage.matrixBuffer && !this._thinInstanceDataStorage.matrixBuffer.isUpdatable() && this._thinInstanceRecreateBuffer(TT), this._thinInstanceDataStorage.matrixBuffer?.updateDirectly(this._thinInstanceDataStorage.matrixData, 0, this._thinInstanceDataStorage.instancesCount)) : "previousMatrix" === TT ? (this.thinInstanceAllowAutomaticStaticBufferRecreation && this._thinInstanceDataStorage.previousMatrixBuffer && !this._thinInstanceDataStorage.previousMatrixBuffer.isUpdatable() && this._thinInstanceRecreateBuffer(TT), this._thinInstanceDataStorage.previousMatrixBuffer?.updateDirectly(this._thinInstanceDataStorage.previousMatrixData, 0, this._thinInstanceDataStorage.instancesCount)) : "splatIndex" === TT ? this._thinInstanceDataStorage.matrixBuffer?.updateDirectly(this._userThinInstanceBuffersStorage.data[TT], 0, this._thinInstanceDataStorage.instancesCount) : (TT === XT.i.ColorKind && (TT = XT.i.ColorInstanceKind), this._userThinInstanceBuffersStorage?.vertexBuffers[TT] && (this.thinInstanceAllowAutomaticStaticBufferRecreation && !this._userThinInstanceBuffersStorage.vertexBuffers[TT].isUpdatable() && this._thinInstanceRecreateBuffer(TT), this._userThinInstanceBuffersStorage.vertexBuffers[TT].updateDirectly(this._userThinInstanceBuffersStorage.data[TT], 0)))
    }, WT.e.prototype.thinInstancePartialBufferUpdate = function(TT, oT, IT) {
      if ("matrix" === TT) this._thinInstanceDataStorage.matrixBuffer && ("number" === typeof oT ? this._thinInstanceDataStorage.matrixBuffer.updateDirectly(new Float32Array(this._thinInstanceDataStorage.matrixData.buffer, this._thinInstanceDataStorage.matrixData.byteOffset + 16 * IT * Float32Array.BYTES_PER_ELEMENT, 16 * oT), 16 * IT) : this._thinInstanceDataStorage.matrixBuffer.updateDirectly(oT, IT));
      else if (TT === XT.i.ColorKind && (TT = XT.i.ColorInstanceKind), this._userThinInstanceBuffersStorage?.vertexBuffers[TT]) {
        const iT = this._userThinInstanceBuffersStorage.vertexBuffers[TT];
        if ("number" === typeof oT) {
          const iT = new Float32Array(this._userThinInstanceBuffersStorage.data[TT].buffer, this._userThinInstanceBuffersStorage.data[TT].byteOffset + IT * this._userThinInstanceBuffersStorage.strides[TT] * Float32Array.BYTES_PER_ELEMENT, oT * this._userThinInstanceBuffersStorage.strides[TT]);
          this._userThinInstanceBuffersStorage.vertexBuffers[TT].updateDirectly(iT, IT * this._userThinInstanceBuffersStorage.strides[TT])
        } else iT.updateDirectly(oT, IT)
      }
    }, WT.e.prototype.thinInstanceGetWorldMatrices = function() {
      if (!this._thinInstanceDataStorage.matrixData || !this._thinInstanceDataStorage.matrixBuffer) return [];
      const TT = this._thinInstanceDataStorage.matrixData;
      if (!this._thinInstanceDataStorage.worldMatrices) {
        this._thinInstanceDataStorage.worldMatrices = [];
        for (let oT = 0; oT < this._thinInstanceDataStorage.instancesCount; ++oT) this._thinInstanceDataStorage.worldMatrices[oT] = iT.b.FromArray(TT, 16 * oT)
      }
      return this._thinInstanceDataStorage.worldMatrices
    }, WT.e.prototype.thinInstanceRefreshBoundingInfo = function() {
      let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        oT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        IT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        zT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!this._thinInstanceDataStorage.matrixData || !this._thinInstanceDataStorage.matrixBuffer) return;
      const WT = this._thinInstanceDataStorage.boundingVectors;
      if (TT || !this.rawBoundingInfo) {
        if (WT.length = 0, zT && function(TT, oT, IT) {
            const zT = TT._userThinInstanceBuffersStorage,
              WT = zT?.data[BT],
              cT = zT?.strides[BT];
            if (!WT || !cT || cT < 4 || !FT(TT)) return !1;
            const KT = TT._thinInstanceDataStorage.matrixData;
            if (!KT) return !1;
            const MT = {},
              rT = iT.i.Vector4[0],
              AT = iT.i.sc[1],
              gT = iT.i.sc[2],
              hT = iT.i.sc[3],
              wT = iT.i.sc[4],
              mT = iT.i.sc[5],
              eT = iT.i.sc[6],
              RT = iT.i.Matrix[2],
              uT = TT.geometry ? TT.geometry.boundingBias : null,
              vT = TT.getTotalVertices();
            AT.W8(Number.POSITIVE_INFINITY), gT.W8(Number.NEGATIVE_INFINITY), hT.W8(Number.POSITIVE_INFINITY), wT.W8(Number.NEGATIVE_INFINITY);
            for (let kT = 0; kT < TT._thinInstanceDataStorage.instancesCount; ++kT) {
              const oT = kT * cT;
              rT.set(WT[oT], WT[oT + 1], WT[oT + 2], WT[oT + 3]);
              const zT = TT._getData({
                applyMorph: IT,
                applyBakedVertexAnimation: !0,
                bakedVertexAnimationSettings: rT,
                updatePositionsArray: !1,
                cache: MT
              }, null, XT.i.PositionKind);
              if (!zT) return !1;
              ST(zT, vT, mT, eT), DT(mT, eT, uT), AT.minimizeInPlace(mT), gT.maximizeInPlace(eT), iT.b.FromArrayToRef(KT, 16 * kT, RT), uT ? LT(mT, eT, RT, hT, wT) : xT(zT, vT, RT, hT, wT)
            }
            return !(!isFinite(AT.x) || !isFinite(hT.x)) && (TT.GJ().reConstruct(hT, wT), TT.rawBoundingInfo = new kT.d(AT, gT), function(TT, oT) {
              TT.length = 0;
              for (let IT = 0; IT < oT.boundingBox.vectors.length; ++IT) TT.push(oT.boundingBox.vectors[IT].clone())
            }(oT, TT.rawBoundingInfo), TT._updateBoundingInfo(), !0)
          }(this, WT, IT)) return;
        zT && this.bakedVertexAnimationManager?.isEnabled && FT(this) ? this.refreshBoundingInfo({
          applySkeleton: oT,
          applyMorph: IT,
          applyBakedVertexAnimation: !0,
          updatePositionsArray: !1
        }) : this.refreshBoundingInfo(oT, IT);
        const TT = this.GJ();
        this.rawBoundingInfo = new kT.d(TT.minimum, TT.maximum)
      }
      const cT = this.GJ(),
        KT = this._thinInstanceDataStorage.matrixData;
      if (0 === WT.length)
        for (let iT = 0; iT < cT.boundingBox.vectors.length; ++iT) WT.push(cT.boundingBox.vectors[iT].clone());
      iT.i.sc[0].W8(Number.POSITIVE_INFINITY), iT.i.sc[1].W8(Number.NEGATIVE_INFINITY);
      for (let kT = 0; kT < this._thinInstanceDataStorage.instancesCount; ++kT) {
        iT.b.FromArrayToRef(KT, 16 * kT, iT.i.Matrix[0]);
        for (let TT = 0; TT < WT.length; ++TT) iT.m.TransformCoordinatesToRef(WT[TT], iT.i.Matrix[0], iT.i.sc[2]), iT.i.sc[0].minimizeInPlace(iT.i.sc[2]), iT.i.sc[1].maximizeInPlace(iT.i.sc[2])
      }
      cT.reConstruct(iT.i.sc[0], iT.i.sc[1]), this._updateBoundingInfo()
    }, WT.e.prototype._thinInstanceRecreateBuffer = function(TT) {
      let oT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      "matrix" === TT ? (this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", this._thinInstanceDataStorage.matrixData, oT)) : "previousMatrix" === TT ? this._scene.needsPreviousWorldMatrices && (this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", this._thinInstanceDataStorage.previousMatrixData ?? this._thinInstanceDataStorage.matrixData, oT)) : (TT === XT.i.ColorKind && (TT = XT.i.ColorInstanceKind), this._userThinInstanceBuffersStorage.vertexBuffers[TT]?.dispose(), this._userThinInstanceBuffersStorage.vertexBuffers[TT] = new XT.i(this.Zc(), this._userThinInstanceBuffersStorage.data[TT], TT, !oT, !1, this._userThinInstanceBuffersStorage.strides[TT], !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[TT]))
    }, WT.e.prototype._thinInstanceUpdateBufferSize = function(TT) {
      let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      TT === XT.i.ColorKind && (TT = XT.i.ColorInstanceKind);
      const IT = "matrix" === TT;
      if (!IT && (!this._userThinInstanceBuffersStorage || !this._userThinInstanceBuffersStorage.strides[TT])) return;
      const iT = IT ? 16 : this._userThinInstanceBuffersStorage.strides[TT],
        zT = IT ? this._thinInstanceDataStorage.matrixBufferSize : this._userThinInstanceBuffersStorage.sizes[TT];
      let kT = IT ? this._thinInstanceDataStorage.matrixData : this._userThinInstanceBuffersStorage.data[TT];
      const WT = (this._thinInstanceDataStorage.instancesCount + oT) * iT;
      let BT = zT;
      for (; BT < WT;) BT *= 2;
      if (!kT || zT != BT) {
        if (kT) {
          const TT = new Float32Array(BT);
          TT.set(kT, 0), kT = TT
        } else kT = new Float32Array(BT);
        IT ? (this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", kT, !1), this._thinInstanceDataStorage.matrixData = kT, this._thinInstanceDataStorage.matrixBufferSize = BT, this._scene.needsPreviousWorldMatrices && !this._thinInstanceDataStorage.previousMatrixData && (this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", kT, !1))) : (this._userThinInstanceBuffersStorage.vertexBuffers[TT]?.dispose(), this._userThinInstanceBuffersStorage.data[TT] = kT, this._userThinInstanceBuffersStorage.sizes[TT] = BT, this._userThinInstanceBuffersStorage.vertexBuffers[TT] = new XT.i(this.Zc(), kT, TT, !0, !1, iT, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[TT]))
      }
    }, WT.e.prototype._thinInstanceInitializeUserStorage = function() {
      this._userThinInstanceBuffersStorage || (this._userThinInstanceBuffersStorage = {
        data: {},
        sizes: {},
        vertexBuffers: {},
        strides: {}
      })
    }, WT.e.prototype._disposeThinInstanceSpecificData = function() {
      this._thinInstanceDataStorage?.matrixBuffer && (this._thinInstanceDataStorage.matrixBuffer.dispose(), this._thinInstanceDataStorage.matrixBuffer = null), this._thinInstanceDataStorage?.previousMatrixBuffer && (this._thinInstanceDataStorage.previousMatrixBuffer.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = null)
    })
  },
  39233: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => AT,
      g: () => KT
    });
    var iT, zT, kT, WT, XT = IT(38764),
      BT = IT(38773),
      FT = IT(38799),
      ST = IT(36149),
      DT = IT(36118),
      LT = IT(38994),
      xT = IT(36166),
      cT = IT(38643);
    let KT = (() => {
      var TT;
      let oT, IT, iT, zT, kT, WT, xT, cT, KT, MT = LT.c,
        rT = [],
        AT = [],
        gT = [],
        hT = [],
        wT = [],
        mT = [],
        eT = [],
        RT = [],
        uT = [],
        vT = [],
        ET = [],
        fT = [],
        CT = [],
        jT = [],
        JT = [],
        UT = [],
        aT = [],
        YT = [];
      return TT = class extends MT {
        get billboardMode() {
          return this._billboardMode
        }
        set billboardMode(oT) {
          this._billboardMode !== oT && (this._billboardMode = oT, this._cache.useBillboardPosition = 0 !== (this._billboardMode & TT.BILLBOARDMODE_USE_POSITION))
        }
        get infiniteDistance() {
          return this._infiniteDistance
        }
        set infiniteDistance(TT) {
          this._infiniteDistance !== TT && (this._infiniteDistance = TT)
        }
        constructor(oT) {
          let IT = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          super(oT, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, !1), this._forward = new DT.m(0, 0, 1), this._up = new DT.m(0, 1, 0), this._right = new DT.m(1, 0, 0), this._position = (0, XT.j)(this, rT, DT.m.Zero()), this._rotation = ((0, XT.j)(this, AT), (0, XT.j)(this, gT, DT.m.Zero())), this._rotationQuaternion = ((0, XT.j)(this, hT), (0, XT.j)(this, wT, null)), this._scaling = ((0, XT.j)(this, mT), (0, XT.j)(this, eT, DT.m.One())), this._transformToBoneReferal = ((0, XT.j)(this, RT), null), this._isAbsoluteSynced = !1, this._billboardMode = (0, XT.j)(this, uT, TT.BILLBOARDMODE_NONE), this.scalingDeterminant = ((0, XT.j)(this, vT), (0, XT.j)(this, ET, 1)), this._infiniteDistance = ((0, XT.j)(this, fT), (0, XT.j)(this, CT, !1)), this.ignoreNonUniformScaling = ((0, XT.j)(this, jT), (0, XT.j)(this, JT, !1)), this.reIntegrateRotationIntoRotationQuaternion = ((0, XT.j)(this, UT), (0, XT.j)(this, aT, !1)), this._poseMatrix = ((0, XT.j)(this, YT), null), this._localMatrix = DT.b.Zero(), this._usePivotMatrix = !1, this._absolutePosition = DT.m.Zero(), this._absoluteScaling = DT.m.Zero(), this._absoluteRotationQuaternion = DT.c.Identity(), this._pivotMatrix = DT.b.Identity(), this._postMultiplyPivotMatrix = !1, this._isWorldMatrixFrozen = !1, this._indexInSceneTransformNodesArray = -1, this.onAfterWorldMatrixUpdateObservable = new ST.d, this._nonUniformScaling = !1, IT && this.pC().addTransformNode(this)
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
        get ti() {
          return this._scaling
        }
        set ti(TT) {
          this._scaling = TT, this._markAsDirtyInternal()
        }
        get rotationQuaternion() {
          return this._rotationQuaternion
        }
        set rotationQuaternion(TT) {
          this._rotationQuaternion = TT, TT && this._rotation.W8(0), this._markAsDirtyInternal()
        }
        _markAsDirtyInternal() {
          this._isDirty || (this._isDirty = !0, this.customMarkAsDirty && this.customMarkAsDirty())
        }
        get forward() {
          return DT.m.TransformNormalFromFloatsToRef(0, 0, this.pC().useRightHandedSystem ? -1 : 1, this.getWorldMatrix(), this._forward), this._forward.normalize()
        }
        get up() {
          return DT.m.TransformNormalFromFloatsToRef(0, 1, 0, this.getWorldMatrix(), this._up), this._up.normalize()
        }
        get right() {
          return DT.m.TransformNormalFromFloatsToRef(this.pC().useRightHandedSystem ? -1 : 1, 0, 0, this.getWorldMatrix(), this._right), this._right.normalize()
        }
        updatePoseMatrix(TT) {
          return this._poseMatrix ? (this._poseMatrix.SIT(TT), this) : (this._poseMatrix = TT.clone(), this)
        }
        getPoseMatrix() {
          return this._poseMatrix || (this._poseMatrix = DT.b.Identity()), this._poseMatrix
        }
        _isSynchronized() {
          const oT = this._cache;
          return this._billboardMode === oT.billboardMode && this._billboardMode === TT.BILLBOARDMODE_NONE && (!oT.pivotMatrixUpdated && (!this._infiniteDistance && (!this._position._isDirty && (!this._scaling._isDirty && !(this._rotationQuaternion && this._rotationQuaternion._isDirty || this._rotation._isDirty)))))
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
          let oT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          return this._pivotMatrix.SIT(TT), this._usePivotMatrix = !this._pivotMatrix.isIdentity(), this._cache.pivotMatrixUpdated = !0, this._postMultiplyPivotMatrix = oT, this._postMultiplyPivotMatrix && (this._pivotMatrixInverse ? this._pivotMatrix.invertToRef(this._pivotMatrixInverse) : this._pivotMatrixInverse = DT.b.Invert(this._pivotMatrix)), this
        }
        getPivotMatrix() {
          return this._pivotMatrix
        }
        instantiateHierarchy() {
          let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            oT = arguments.length > 1 ? arguments[1] : void 0,
            IT = arguments.length > 2 ? arguments[2] : void 0;
          const iT = this.clone("Clone of " + (this.name || this.id), TT || this.parent, !0);
          iT && IT && IT(this, iT);
          for (const zT of this.getChildTransformNodes(!0)) zT.instantiateHierarchy(iT, oT, IT);
          return iT
        }
        LJ() {
          let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return TT ? arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (this._rotation.W8(0), this._rotationQuaternion = this._rotationQuaternion || DT.c.Identity(), TT.decompose(this._scaling, this._rotationQuaternion, this._position), this.computeWorldMatrix(!0)) : (this._worldMatrix = TT, this._absolutePosition.S_(this._worldMatrix.m[12], this._worldMatrix.m[13], this._worldMatrix.m[14]), this._afterComputeWorldMatrix()) : (this._isWorldMatrixFrozen = !1, this.computeWorldMatrix(!0)), this._isDirty = !1, this._isWorldMatrixFrozen = !0, this
        }
        unfreezeWorldMatrix() {
          return this._isWorldMatrixFrozen = !1, this.computeWorldMatrix(!0), this
        }
        get vWT() {
          return this._isWorldMatrixFrozen
        }
        getAbsolutePosition() {
          return this.computeWorldMatrix(), this._absolutePosition
        }
        setAbsolutePosition(TT) {
          if (!TT) return this;
          let oT, IT, iT;
          if (void 0 === TT.x) {
            if (arguments.length < 3) return this;
            oT = arguments[0], IT = arguments[1], iT = arguments[2]
          } else oT = TT.x, IT = TT.y, iT = TT.z;
          if (this.parent) {
            const TT = DT.i.Matrix[0];
            this.parent.getWorldMatrix().invertToRef(TT), DT.m.TransformCoordinatesFromFloatsToRef(oT, IT, iT, TT, this.position)
          } else this.position.x = oT, this.position.y = IT, this.position.z = iT;
          return this._absolutePosition.SIT(TT), this
        }
        setPositionWithLocalVector(TT) {
          return this.computeWorldMatrix(), this.position = DT.m.TransformNormal(TT, this._localMatrix), this
        }
        getPositionExpressedInLocalSpace() {
          this.computeWorldMatrix();
          const TT = DT.i.Matrix[0];
          return this._localMatrix.invertToRef(TT), DT.m.TransformNormal(this.position, TT)
        }
        locallyTranslate(TT) {
          return this.computeWorldMatrix(!0), this.position = DT.m.TransformCoordinates(TT, this._localMatrix), this
        }
        lookAt(oT) {
          let IT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            iT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            zT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
            kT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
          const WT = TT._LookAtVectorCache,
            XT = 0 === kT ? this.position : this.getAbsolutePosition();
          if (oT.subtractToRef(XT, WT), this.setDirection(WT, IT, iT, zT), 1 === kT && this.parent)
            if (this.rotationQuaternion) {
              const TT = DT.i.Matrix[0];
              this.rotationQuaternion.toRotationMatrix(TT);
              const oT = DT.i.Matrix[1];
              this.parent.getWorldMatrix().getRotationMatrixToRef(oT), oT.invert(), TT.multiplyToRef(oT, TT), this.rotationQuaternion.fromRotationMatrix(TT)
            } else {
              const TT = DT.i.Quaternion[0];
              DT.c.FromEulerVectorToRef(this.rotation, TT);
              const oT = DT.i.Matrix[0];
              TT.toRotationMatrix(oT);
              const IT = DT.i.Matrix[1];
              this.parent.getWorldMatrix().getRotationMatrixToRef(IT), IT.invert(), oT.multiplyToRef(IT, oT), TT.fromRotationMatrix(oT), TT.toEulerAnglesToRef(this.rotation)
            } return this
        }
        kp(TT) {
          const oT = DT.m.Zero();
          return this.getDirectionToRef(TT, oT), oT
        }
        getDirectionToRef(TT, oT) {
          return DT.m.TransformNormalToRef(TT, this.getWorldMatrix(), oT), this
        }
        setDirection(TT) {
          let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            iT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
          const zT = -Math.atan2(TT.z, TT.x) + Math.PI / 2,
            kT = Math.sqrt(TT.x * TT.x + TT.z * TT.z),
            WT = -Math.atan2(TT.y, kT);
          return this.rotationQuaternion ? DT.c.RotationYawPitchRollToRef(zT + oT, WT + IT, iT, this.rotationQuaternion) : (this.rotation.x = WT + IT, this.rotation.y = zT + oT, this.rotation.z = iT), this
        }
        setPivotPoint(TT) {
          let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          0 == this.pC().getRenderId() && this.computeWorldMatrix(!0);
          const IT = this.getWorldMatrix();
          if (1 == oT) {
            const oT = DT.i.Matrix[0];
            IT.invertToRef(oT), TT = DT.m.TransformCoordinates(TT, oT)
          }
          return this.setPivotMatrix(DT.b.Translation(-TT.x, -TT.y, -TT.z), !0)
        }
        getPivotPoint() {
          const TT = DT.m.Zero();
          return this.getPivotPointToRef(TT), TT
        }
        getPivotPointToRef(TT) {
          return TT.x = -this._pivotMatrix.m[12], TT.y = -this._pivotMatrix.m[13], TT.z = -this._pivotMatrix.m[14], this
        }
        getAbsolutePivotPoint() {
          const TT = DT.m.Zero();
          return this.getAbsolutePivotPointToRef(TT), TT
        }
        getAbsolutePivotPointToRef(TT) {
          return this.getPivotPointToRef(TT), DT.m.TransformCoordinatesToRef(TT, this.getWorldMatrix(), TT), this
        }
        roT(TT) {
          if (this._isDirty) return this;
          if (this._children)
            for (const oT of this._children) oT.roT(TT);
          return super.roT(TT)
        }
        setParent(oT) {
          let IT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            iT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          if (!oT && !this.parent) return this;
          const zT = DT.i.Quaternion[0],
            kT = DT.i.sc[0],
            WT = DT.i.sc[1],
            XT = DT.i.Matrix[1];
          DT.b.IdentityToRef(XT);
          const BT = DT.i.Matrix[0];
          this.computeWorldMatrix(!0);
          let FT = this.rotationQuaternion;
          return FT || (FT = TT._TmpRotation, DT.c.RotationYawPitchRollToRef(this._rotation.y, this._rotation.x, this._rotation.z, FT)), DT.b.ComposeToRef(this.ti, FT, this.position, BT), this.parent && BT.multiplyToRef(this.parent.computeWorldMatrix(!0), BT), oT && (oT.computeWorldMatrix(!0).invertToRef(XT), BT.multiplyToRef(XT, BT)), BT.decompose(WT, zT, kT, IT ? this : void 0), this.rotationQuaternion ? this.rotationQuaternion.SIT(zT) : zT.toEulerAnglesToRef(this.rotation), this.ti.SIT(WT), this.position.SIT(kT), this.parent = oT, iT && this.setPivotMatrix(DT.b.Identity()), this
        }
        addChild(TT) {
          let oT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return TT.setParent(this, oT), this
        }
        removeChild(TT) {
          let oT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return TT.parent !== this || TT.setParent(null, oT), this
        }
        get nonUniformScaling() {
          return this._nonUniformScaling
        }
        _updateNonUniformScalingState(TT) {
          return this._nonUniformScaling !== TT && (this._nonUniformScaling = TT, !0)
        }
        attachToBone(TT, oT) {
          return this._currentParentWhenAttachingToBone = this.parent, this._transformToBoneReferal = oT, this.parent = TT, TT.getSkeleton().prepare(!0), TT.getFinalMatrix().determinant() < 0 && (this.scalingDeterminant *= -1), this
        }
        detachFromBone() {
          let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          return this.parent ? (this.parent.getWorldMatrix().determinant() < 0 && (this.scalingDeterminant *= -1), this._transformToBoneReferal = null, this.parent = TT ? this._currentParentWhenAttachingToBone : null, this) : (TT && (this.parent = this._currentParentWhenAttachingToBone), this)
        }
        rotate(oT, IT, iT) {
          let zT;
          if (oT.normalize(), this.rotationQuaternion || (this.rotationQuaternion = this.rotation.toQuaternion(), this.rotation.W8(0)), iT && 0 !== iT) {
            if (this.parent) {
              const TT = this.parent.getWorldMatrix(),
                iT = DT.i.Matrix[0];
              TT.invertToRef(iT), oT = DT.m.TransformNormal(oT, iT), TT.determinant() < 0 && (IT *= -1)
            }
            zT = DT.c.RotationAxisToRef(oT, IT, TT._RotationAxisCache), zT.multiplyToRef(this.rotationQuaternion, this.rotationQuaternion)
          } else zT = DT.c.RotationAxisToRef(oT, IT, TT._RotationAxisCache), this.rotationQuaternion.multiplyToRef(zT, this.rotationQuaternion);
          return this
        }
        rotateAround(TT, oT, IT) {
          oT.normalize(), this.rotationQuaternion || (this.rotationQuaternion = DT.c.RotationYawPitchRoll(this.rotation.y, this.rotation.x, this.rotation.z), this.rotation.W8(0));
          const iT = DT.i.sc[0],
            zT = DT.i.sc[1],
            kT = DT.i.sc[2],
            WT = DT.i.Quaternion[0],
            XT = DT.i.Matrix[0],
            BT = DT.i.Matrix[1],
            FT = DT.i.Matrix[2],
            ST = DT.i.Matrix[3];
          return TT.subtractToRef(this.position, iT), DT.b.TranslationToRef(iT.x, iT.y, iT.z, XT), DT.b.TranslationToRef(-iT.x, -iT.y, -iT.z, BT), DT.b.RotationAxisToRef(oT, IT, FT), BT.multiplyToRef(FT, ST), ST.multiplyToRef(XT, ST), ST.decompose(zT, WT, kT), this.position.addInPlace(kT), WT.multiplyToRef(this.rotationQuaternion, this.rotationQuaternion), this
        }
        translate(TT, oT, IT) {
          const iT = TT.scale(oT);
          if (IT && 0 !== IT) this.setAbsolutePosition(this.getAbsolutePosition().add(iT));
          else {
            const TT = this.getPositionExpressedInLocalSpace().add(iT);
            this.setPositionWithLocalVector(TT)
          }
          return this
        }
        addRotation(TT, oT, IT) {
          let iT;
          this.rotationQuaternion ? iT = this.rotationQuaternion : (iT = DT.i.Quaternion[1], DT.c.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, this.rotation.z, iT));
          const zT = DT.i.Quaternion[0];
          return DT.c.RotationYawPitchRollToRef(oT, TT, IT, zT), iT.multiplyInPlace(zT), this.rotationQuaternion || iT.toEulerAnglesToRef(this.rotation), this
        }
        _getEffectiveParent() {
          return this.parent
        }
        isWorldMatrixCameraDependent() {
          return this._infiniteDistance && !this.parent || this._billboardMode !== TT.BILLBOARDMODE_NONE
        }
        computeWorldMatrix() {
          let oT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            IT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          if (this._isWorldMatrixFrozen && !this._isDirty) return this._worldMatrix;
          const iT = this.pC().getRenderId();
          if (!this._isDirty && !oT && (this._currentRenderId === iT || this.isSynchronized())) return this._currentRenderId = iT, this._worldMatrix;
          IT = IT || this.pC().activeCamera, this._updateCache();
          const zT = this._cache;
          zT.pivotMatrixUpdated = !1, zT.billboardMode = this.billboardMode, zT.infiniteDistance = this.infiniteDistance, zT.parent = this._parentNode, this._currentRenderId = iT, this._childUpdateId += 1, this._isDirty = !1, this._position._isDirty = !1, this._rotation._isDirty = !1, this._scaling._isDirty = !1;
          const kT = this._getEffectiveParent(),
            WT = TT._TmpScaling;
          let XT, BT = this._position;
          if (this._infiniteDistance && !this.parent && IT) {
            const oT = IT.getWorldMatrix().m;
            BT = TT._TmpTranslation, BT.S_(this._position.x + oT[12], this._position.y + oT[13], this._position.z + oT[14])
          }
          if (WT.S_(this._scaling.x * this.scalingDeterminant, this._scaling.y * this.scalingDeterminant, this._scaling.z * this.scalingDeterminant), this._rotationQuaternion) {
            if (this._rotationQuaternion._isDirty = !1, XT = this._rotationQuaternion, this.reIntegrateRotationIntoRotationQuaternion) {
              this.rotation.lengthSquared() && (this._rotationQuaternion.multiplyInPlace(DT.c.RotationYawPitchRoll(this._rotation.y, this._rotation.x, this._rotation.z)), this._rotation.S_(0, 0, 0))
            }
          } else XT = TT._TmpRotation, DT.c.RotationYawPitchRollToRef(this._rotation.y, this._rotation.x, this._rotation.z, XT);
          if (this._usePivotMatrix) {
            const TT = DT.i.Matrix[1];
            DT.b.ScalingToRef(WT.x, WT.y, WT.z, TT);
            const oT = DT.i.Matrix[0];
            XT.toRotationMatrix(oT), this._pivotMatrix.multiplyToRef(TT, DT.i.Matrix[4]), DT.i.Matrix[4].multiplyToRef(oT, this._localMatrix), this._postMultiplyPivotMatrix && this._localMatrix.multiplyToRef(this._pivotMatrixInverse, this._localMatrix), this._localMatrix.addTranslationFromFloats(BT.x, BT.y, BT.z)
          } else DT.b.ComposeToRef(WT, XT, BT, this._localMatrix);
          if (kT && kT.getWorldMatrix) {
            if (oT && kT.computeWorldMatrix(oT), this.billboardMode) {
              if (this._transformToBoneReferal) {
                const TT = this.parent;
                TT.getSkeleton().prepare(), TT.getFinalMatrix().multiplyToRef(this._transformToBoneReferal.getWorldMatrix(), DT.i.Matrix[7])
              } else DT.i.Matrix[7].SIT(kT.getWorldMatrix());
              const oT = DT.i.sc[5],
                IT = DT.i.sc[6],
                iT = DT.i.Quaternion[0];
              DT.i.Matrix[7].decompose(IT, iT, oT), DT.b.ScalingToRef(IT.x, IT.y, IT.z, DT.i.Matrix[7]), DT.i.Matrix[7].setTranslation(oT), TT.BillboardUseParentOrientation && (this._position.applyRotationQuaternionToRef(iT, oT), this._localMatrix.setTranslation(oT)), this._localMatrix.multiplyToRef(DT.i.Matrix[7], this._worldMatrix)
            } else if (this._transformToBoneReferal) {
              const TT = this.parent;
              TT.getSkeleton().prepare(), this._localMatrix.multiplyToRef(TT.getFinalMatrix(), DT.i.Matrix[6]), DT.i.Matrix[6].multiplyToRef(this._transformToBoneReferal.getWorldMatrix(), this._worldMatrix)
            } else this._localMatrix.multiplyToRef(kT.getWorldMatrix(), this._worldMatrix);
            this._markSyncedWithParent()
          } else this._worldMatrix.SIT(this._localMatrix);
          if (IT && this.billboardMode)
            if (zT.useBillboardPosition) {
              const oT = DT.i.sc[0];
              this._worldMatrix.getTranslationToRef(oT);
              const iT = IT.globalPosition;
              this._worldMatrix.invertToRef(DT.i.Matrix[1]);
              const zT = DT.i.sc[1];
              DT.m.TransformCoordinatesToRef(iT, DT.i.Matrix[1], zT), zT.normalize();
              const kT = -Math.atan2(zT.z, zT.x) + Math.PI / 2,
                WT = Math.sqrt(zT.x * zT.x + zT.z * zT.z),
                XT = -Math.atan2(zT.y, WT);
              if (DT.c.RotationYawPitchRollToRef(kT, XT, 0, DT.i.Quaternion[0]), (this.billboardMode & TT.BILLBOARDMODE_ALL) !== TT.BILLBOARDMODE_ALL) {
                const oT = DT.i.sc[1];
                DT.i.Quaternion[0].toEulerAnglesToRef(oT), (this.billboardMode & TT.BILLBOARDMODE_X) !== TT.BILLBOARDMODE_X && (oT.x = 0), (this.billboardMode & TT.BILLBOARDMODE_Y) !== TT.BILLBOARDMODE_Y && (oT.y = 0), (this.billboardMode & TT.BILLBOARDMODE_Z) !== TT.BILLBOARDMODE_Z && (oT.z = 0), DT.b.RotationYawPitchRollToRef(oT.y, oT.x, oT.z, DT.i.Matrix[0])
              } else DT.b.FromQuaternionToRef(DT.i.Quaternion[0], DT.i.Matrix[0]);
              this._worldMatrix.setTranslationFromFloats(0, 0, 0), this._worldMatrix.multiplyToRef(DT.i.Matrix[0], this._worldMatrix), this._worldMatrix.setTranslation(DT.i.sc[0])
            } else {
              const oT = DT.i.sc[0];
              this._worldMatrix.getTranslationToRef(oT), DT.i.Matrix[1].SIT(IT.getViewMatrix());
              const iT = this.pC().useRightHandedSystem;
              if (iT && DT.i.Matrix[1].multiplyToRef(TT._TmpRHRestore, DT.i.Matrix[1]), DT.i.Matrix[1].setTranslationFromFloats(0, 0, 0), DT.i.Matrix[1].invertToRef(DT.i.Matrix[0]), (this.billboardMode & TT.BILLBOARDMODE_ALL) !== TT.BILLBOARDMODE_ALL) {
                DT.i.Matrix[0].decompose(void 0, DT.i.Quaternion[0], void 0);
                const oT = DT.i.sc[1];
                DT.i.Quaternion[0].toEulerAnglesToRef(oT), (this.billboardMode & TT.BILLBOARDMODE_X) !== TT.BILLBOARDMODE_X && (oT.x = 0), (this.billboardMode & TT.BILLBOARDMODE_Y) !== TT.BILLBOARDMODE_Y && (oT.y = 0), (this.billboardMode & TT.BILLBOARDMODE_Z) !== TT.BILLBOARDMODE_Z && (oT.z = 0), iT && (oT.y += Math.PI), DT.b.RotationYawPitchRollToRef(oT.y, oT.x, oT.z, DT.i.Matrix[0])
              }
              this._worldMatrix.setTranslationFromFloats(0, 0, 0), this._worldMatrix.multiplyToRef(DT.i.Matrix[0], this._worldMatrix), this._worldMatrix.setTranslation(DT.i.sc[0])
            } return this.ignoreNonUniformScaling ? this._updateNonUniformScalingState(!1) : this._scaling.isNonUniformWithinEpsilon(1e-6) ? this._updateNonUniformScalingState(!0) : kT && kT._nonUniformScaling ? this._updateNonUniformScalingState(kT._nonUniformScaling) : this._updateNonUniformScalingState(!1), this._afterComputeWorldMatrix(), this._absolutePosition.S_(this._worldMatrix.m[12], this._worldMatrix.m[13], this._worldMatrix.m[14]), this._isAbsoluteSynced = !1, this.onAfterWorldMatrixUpdateObservable.notifyObservers(this), this._poseMatrix || (this._poseMatrix = DT.b.Invert(this._worldMatrix)), this._worldMatrixDeterminantIsDirty = !0, this._worldMatrix
        }
        resetLocalMatrix() {
          let TT = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          if (this.computeWorldMatrix(), TT) {
            const TT = this.getChildren();
            for (let oT = 0; oT < TT.length; ++oT) {
              const IT = TT[oT];
              if (IT) {
                IT.computeWorldMatrix();
                const TT = DT.i.Matrix[0];
                IT._localMatrix.multiplyToRef(this._localMatrix, TT);
                const oT = DT.i.Quaternion[0];
                TT.decompose(IT.ti, oT, IT.position), IT.rotationQuaternion ? IT.rotationQuaternion.SIT(oT) : oT.toEulerAnglesToRef(IT.rotation)
              }
            }
          }
          this.ti.S_(1, 1, 1), this.position.S_(0, 0, 0), this.rotation.S_(0, 0, 0), this.rotationQuaternion && (this.rotationQuaternion = DT.c.Identity()), this._worldMatrix = DT.b.Identity()
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
          return TT || (TT = this.pC().activeCamera), DT.m.TransformCoordinates(this.getAbsolutePosition(), TT.getViewMatrix())
        }
        getDistanceToCamera() {
          let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return TT || (TT = this.pC().activeCamera), this.getAbsolutePosition().subtract(TT.globalPosition).length()
        }
        clone(oT, IT, iT) {
          const zT = FT.c.Clone((() => new TT(oT, this.pC())), this);
          if (zT.name = oT, zT.id = oT, IT && (zT.parent = IT), !iT) {
            const TT = this.getDescendants(!0);
            for (let IT = 0; IT < TT.length; IT++) {
              const iT = TT[IT];
              iT.clone && iT.clone(oT + "." + iT.name, zT)
            }
          }
          return zT
        }
        serialize(TT) {
          const oT = FT.c.Serialize(this, TT);
          return oT.type = this.getClassName(), oT.uniqueId = this.uniqueId, this.parent && this.parent._serializeAsParent(oT), oT.localMatrix = this.getPivotMatrix().bIT(), oT.isEnabled = this.isEnabled(), this._isWorldMatrixFrozen && (oT.LJ = !0), FT.c.AppendSerializedAnimations(this, oT), oT.ec = this.serializeAnimationRanges(), oT
        }
        getChildTransformNodes(oT, IT) {
          const iT = [];
          return this._getDescendants(iT, oT, (oT => (!IT || IT(oT)) && oT instanceof TT)), iT
        }
        dispose(TT) {
          let oT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this.pC().stopAnimation(this), this.pC().removeTransformNode(this), this._parentContainer) {
            const TT = this._parentContainer.transformNodes.indexOf(this);
            TT > -1 && this._parentContainer.transformNodes.splice(TT, 1), this._parentContainer = null
          }
          if (this.onAfterWorldMatrixUpdateObservable.clear(), TT) {
            const TT = this.getChildTransformNodes(!0);
            for (const oT of TT) oT.parent = null, oT.computeWorldMatrix(!0)
          }
          super.dispose(TT, oT)
        }
        normalizeToUnitCube() {
          let TT = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            oT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            IT = arguments.length > 2 ? arguments[2] : void 0,
            iT = null,
            zT = null;
          oT && (this.rotationQuaternion ? (zT = this.rotationQuaternion.clone(), this.rotationQuaternion.S_(0, 0, 0, 1)) : this.rotation && (iT = this.rotation.clone(), this.rotation.S_(0, 0, 0)));
          const kT = this.getHierarchyBoundingVectors(TT, IT),
            WT = kT.max.subtract(kT.min),
            XT = Math.max(WT.x, WT.y, WT.z);
          if (0 === XT) return this;
          const BT = 1 / XT;
          return this.ti.scaleInPlace(BT), oT && (this.rotationQuaternion && zT ? this.rotationQuaternion.SIT(zT) : this.rotation && iT && this.rotation.SIT(iT)), this
        }
        _syncAbsoluteScalingAndRotation() {
          this._isAbsoluteSynced || (this._worldMatrix.decompose(this._absoluteScaling, this._absoluteRotationQuaternion), this._isAbsoluteSynced = !0)
        }
      }, (() => {
        const FT = "function" === typeof Symbol && Symbol.metadata ? Object.create(MT[Symbol.metadata] ?? null) : void 0;
        oT = [(0, BT.M)("position")], IT = [(0, BT.M)("rotation")], iT = [(0, BT.G)("rotationQuaternion")], zT = [(0, BT.M)("ti")], kT = [(0, BT.P)("billboardMode")], WT = [(0, BT.P)()], xT = [(0, BT.P)("infiniteDistance")], cT = [(0, BT.P)()], KT = [(0, BT.P)()], (0, XT.h)(null, null, oT, {
          kind: "field",
          name: "_position",
          static: !1,
          private: !1,
          access: {
            has: TT => "_position" in TT,
            get: TT => TT._position,
            set: (TT, oT) => {
              TT._position = oT
            }
          },
          metadata: FT
        }, rT, AT), (0, XT.h)(null, null, IT, {
          kind: "field",
          name: "_rotation",
          static: !1,
          private: !1,
          access: {
            has: TT => "_rotation" in TT,
            get: TT => TT._rotation,
            set: (TT, oT) => {
              TT._rotation = oT
            }
          },
          metadata: FT
        }, gT, hT), (0, XT.h)(null, null, iT, {
          kind: "field",
          name: "_rotationQuaternion",
          static: !1,
          private: !1,
          access: {
            has: TT => "_rotationQuaternion" in TT,
            get: TT => TT._rotationQuaternion,
            set: (TT, oT) => {
              TT._rotationQuaternion = oT
            }
          },
          metadata: FT
        }, wT, mT), (0, XT.h)(null, null, zT, {
          kind: "field",
          name: "_scaling",
          static: !1,
          private: !1,
          access: {
            has: TT => "_scaling" in TT,
            get: TT => TT._scaling,
            set: (TT, oT) => {
              TT._scaling = oT
            }
          },
          metadata: FT
        }, eT, RT), (0, XT.h)(null, null, kT, {
          kind: "field",
          name: "_billboardMode",
          static: !1,
          private: !1,
          access: {
            has: TT => "_billboardMode" in TT,
            get: TT => TT._billboardMode,
            set: (TT, oT) => {
              TT._billboardMode = oT
            }
          },
          metadata: FT
        }, uT, vT), (0, XT.h)(null, null, WT, {
          kind: "field",
          name: "scalingDeterminant",
          static: !1,
          private: !1,
          access: {
            has: TT => "scalingDeterminant" in TT,
            get: TT => TT.scalingDeterminant,
            set: (TT, oT) => {
              TT.scalingDeterminant = oT
            }
          },
          metadata: FT
        }, ET, fT), (0, XT.h)(null, null, xT, {
          kind: "field",
          name: "_infiniteDistance",
          static: !1,
          private: !1,
          access: {
            has: TT => "_infiniteDistance" in TT,
            get: TT => TT._infiniteDistance,
            set: (TT, oT) => {
              TT._infiniteDistance = oT
            }
          },
          metadata: FT
        }, CT, jT), (0, XT.h)(null, null, cT, {
          kind: "field",
          name: "ignoreNonUniformScaling",
          static: !1,
          private: !1,
          access: {
            has: TT => "ignoreNonUniformScaling" in TT,
            get: TT => TT.ignoreNonUniformScaling,
            set: (TT, oT) => {
              TT.ignoreNonUniformScaling = oT
            }
          },
          metadata: FT
        }, JT, UT), (0, XT.h)(null, null, KT, {
          kind: "field",
          name: "reIntegrateRotationIntoRotationQuaternion",
          static: !1,
          private: !1,
          access: {
            has: TT => "reIntegrateRotationIntoRotationQuaternion" in TT,
            get: TT => TT.reIntegrateRotationIntoRotationQuaternion,
            set: (TT, oT) => {
              TT.reIntegrateRotationIntoRotationQuaternion = oT
            }
          },
          metadata: FT
        }, aT, YT), FT && Object.defineProperty(TT, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: FT
        })
      })(), TT.BILLBOARDMODE_NONE = 0, TT.BILLBOARDMODE_X = 1, TT.BILLBOARDMODE_Y = 2, TT.BILLBOARDMODE_Z = 4, TT.BILLBOARDMODE_ALL = 7, TT.BILLBOARDMODE_USE_POSITION = 128, TT.BillboardUseParentOrientation = !1, TT._TmpRotation = DT.c.Zero(), TT._TmpScaling = DT.m.Zero(), TT._TmpTranslation = DT.m.Zero(), TT._TmpRHRestore = DT.b.Scaling(1, 1, -1), TT._LookAtVectorCache = new DT.m(0, 0, 0), TT._RotationAxisCache = new DT.c, TT
    })();

    function MT(TT, oT, IT) {
      const iT = FT.c.Parse((() => new KT(TT.name, oT)), TT, oT, IT);
      if (TT.localMatrix ? iT.setPreTransformMatrix(DT.b.FromArray(TT.localMatrix)) : TT.pivotMatrix && iT.setPivotMatrix(DT.b.FromArray(TT.pivotMatrix)), iT.Fv(TT.isEnabled), iT._waitingParsedUniqueId = TT.uniqueId, void 0 !== TT.parentId && (iT._waitingParentId = TT.parentId), void 0 !== TT.parentInstanceIndex && (iT._waitingParentInstanceIndex = TT.parentInstanceIndex), TT.LJ && (iT._waitingFreezeWorldMatrix = TT.LJ), TT.animations) {
        for (let oT = 0; oT < TT.animations.length; oT++) {
          const IT = TT.animations[oT],
            zT = (0, xT.d)("BABYLON.Animation");
          zT && iT.animations.push(zT.Parse(IT))
        }
        LT.c.ParseAnimationRanges(iT, TT, oT)
      }
      return TT.autoAnimate && oT.beginAnimation(iT, TT.autoAnimateFrom, TT.autoAnimateTo, TT.autoAnimateLoop, TT.autoAnimateSpeed || 1), iT
    }
    let rT = !1;

    function AT() {
      rT || (rT = !0, KT.Parse = MT)
    }(iT = KT.prototype).iH ?? (iT.iH = (0, cT.i)("TransformNode", "iH")), (zT = KT.prototype).applyImpulse ?? (zT.applyImpulse = (0, cT.i)("TransformNode", "applyImpulse")), (kT = KT.prototype).applyAngularImpulse ?? (kT.applyAngularImpulse = (0, cT.i)("TransformNode", "applyAngularImpulse")), (WT = KT.prototype).applyTorque ?? (WT.applyTorque = (0, cT.i)("TransformNode", "applyTorque")), Object.getOwnPropertyDescriptor(KT.prototype, "physicsBody") || Object.defineProperty(KT.prototype, "physicsBody", (0, cT.f)("TransformNode", "physicsBody"))
  },
  39201: (TT, oT, IT) => {
    function iT(TT, oT, IT) {
      try {
        const iT = TT.next();
        iT.done ? oT(iT) : iT.value ? iT.value.then((() => {
          iT.value = void 0, oT(iT)
        }), IT) : oT(iT)
      } catch (iT) {
        IT(iT)
      }
    }

    function zT() {
      let TT, oT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 25;
      return (IT, zT, kT) => {
        const WT = performance.now();
        void 0 === TT || WT - TT > oT ? (TT = WT, setTimeout((() => {
          iT(IT, zT, kT)
        }), 0)) : iT(IT, zT, kT)
      }
    }

    function kT(TT, oT, IT, iT, zT) {
      const kT = () => {
        let WT;
        const XT = TT => {
          TT.done ? IT(TT.value) : void 0 === WT ? WT = !0 : kT()
        };
        do {
          WT = void 0, zT && zT.aborted ? iT(new Error("Aborted")) : oT(TT, XT, iT), void 0 === WT && (WT = !1)
        } while (WT)
      };
      kT()
    }

    function WT(TT, oT) {
      let IT;
      return kT(TT, iT, (TT => IT = TT), (TT => {
        throw TT
      }), oT), IT
    }
    async function XT(TT, oT, IT) {
      return await new Promise(((iT, zT) => {
        kT(TT, oT, iT, zT, IT)
      }))
    }

    function BT(TT, oT) {
      return function() {
        return WT(TT(...arguments), oT)
      }
    }
    IT.d(oT, {
      e: () => zT,
      g: () => BT,
      h: () => XT,
      j: () => WT
    })
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);
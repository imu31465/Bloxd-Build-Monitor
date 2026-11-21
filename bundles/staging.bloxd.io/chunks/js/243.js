export const id = 243;
export const ids = [243];
export const modules = {
  40199: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => ed,
      g: () => Gd
    });
    var pd = kd(39964),
      Nd = kd(39966),
      Wd = kd(40080),
      Pd = kd(37280),
      Zd = kd(37251),
      gd = kd(40205),
      Cd = kd(38812),
      Kd = kd(37303),
      od = kd(39860),
      ld = kd(38281),
      Qd = kd(37966),
      Ld = kd(39922),
      Od = kd(39983);
    let ed = (() => {
      var dd;
      let Jd, kd, Kd, ed, Rd, Id, Gd, vd, xd, qd, Bd, sd, ad, Md, Fd, Yd, md, bd, Sd = gd.c,
        jd = [],
        Xd = [],
        fd = [],
        nd = [],
        Ud = [],
        yd = [],
        Dd = [],
        Td = [],
        Ed = [],
        cd = [],
        hd = [],
        rd = [],
        ud = [],
        td = [],
        Vd = [],
        zd = [],
        Hd = [],
        wd = [],
        Ad = [],
        dJ = [],
        JJ = [],
        kJ = [],
        pJ = [],
        NJ = [],
        WJ = [];
      return dd = class extends Sd {
        get position() {
          return this._position
        }
        set position(dd) {
          this._position = dd
        }
        set upVector(dd) {
          this._upVector = dd
        }
        get upVector() {
          return this._upVector
        }
        get screenArea() {
          let Jd, kd;
          if (this.mode === dd.PERSPECTIVE_CAMERA) this.fovMode === dd.FOVMODE_VERTICAL_FIXED ? (kd = 2 * this.minZ * Math.tan(this.fov / 2), Jd = this.eL().getAspectRatio(this) * kd) : (Jd = 2 * this.minZ * Math.tan(this.fov / 2), kd = Jd / this.eL().getAspectRatio(this));
          else {
            const dd = this.eL().getRenderWidth() / 2,
              pd = this.eL().getRenderHeight() / 2;
            Jd = (this.orthoRight ?? dd) - (this.orthoLeft ?? -dd), kd = (this.orthoTop ?? pd) - (this.orthoBottom ?? -pd)
          }
          return Jd * kd
        }
        set orthoLeft(dd) {
          this._orthoLeft = dd;
          for (const Jd of this._rigCameras) Jd.orthoLeft = dd
        }
        get orthoLeft() {
          return this._orthoLeft
        }
        set orthoRight(dd) {
          this._orthoRight = dd;
          for (const Jd of this._rigCameras) Jd.orthoRight = dd
        }
        get orthoRight() {
          return this._orthoRight
        }
        set orthoBottom(dd) {
          this._orthoBottom = dd;
          for (const Jd of this._rigCameras) Jd.orthoBottom = dd
        }
        get orthoBottom() {
          return this._orthoBottom
        }
        set orthoTop(dd) {
          this._orthoTop = dd;
          for (const Jd of this._rigCameras) Jd.orthoTop = dd
        }
        get orthoTop() {
          return this._orthoTop
        }
        setFocalLength(dd) {
          let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 36;
          this.fov = 2 * Math.atan(Jd / (2 * dd))
        }
        get inertia() {
          return this._baseInertia
        }
        set inertia(dd) {
          this._baseInertia = dd
        }
        set mode(dd) {
          this._mode = dd;
          for (const Jd of this._rigCameras) Jd.mode = dd
        }
        get mode() {
          return this._mode
        }
        get hasMoved() {
          return this._hasMoved
        }
        constructor(Jd, kd, Nd) {
          let gd = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
          (0, Ld.b)(), super(Jd, Nd, !1), this.inputs = (0, pd.i)(this, jd), this._position = (0, pd.i)(this, Xd, Zd.n.Zero()), this._upVector = ((0, pd.i)(this, fd), (0, pd.i)(this, nd, Zd.n.Up())), this.oblique = ((0, pd.i)(this, Ud), null), this._orthoLeft = null, this._orthoRight = null, this._orthoBottom = null, this._orthoTop = null, this.fov = (0, pd.i)(this, yd, .8), this.projectionPlaneTilt = ((0, pd.i)(this, Dd), (0, pd.i)(this, Td, 0)), this.minZ = ((0, pd.i)(this, Ed), (0, pd.i)(this, cd, 1)), this.maxZ = ((0, pd.i)(this, hd), (0, pd.i)(this, rd, 1e4)), this._baseInertia = ((0, pd.i)(this, ud), .9), this._mode = dd.PERSPECTIVE_CAMERA, this.isIntermediate = !1, this.viewport = new ld.b(0, 0, 1, 1), this.layerMask = (0, pd.i)(this, td, 268435455), this.fovMode = ((0, pd.i)(this, Vd), (0, pd.i)(this, zd, dd.FOVMODE_VERTICAL_FIXED)), this.cameraRigMode = ((0, pd.i)(this, Hd), (0, pd.i)(this, wd, dd.RIG_MODE_NONE)), this.interaxialDistance = ((0, pd.i)(this, Ad), (0, pd.i)(this, dJ, void 0)), this.isStereoscopicSideBySide = ((0, pd.i)(this, JJ), (0, pd.i)(this, kJ, void 0)), this.ignoreCameraMaxZ = ((0, pd.i)(this, pJ), (0, pd.i)(this, NJ, !1)), this.customRenderTargets = ((0, pd.i)(this, WJ), []), this.outputRenderTarget = null, this.onViewMatrixChangedObservable = new Pd.e, this.onProjectionMatrixChangedObservable = new Pd.e, this.onAfterCheckInputsObservable = new Pd.e, this.onRestoreStateObservable = new Pd.e, this.isRigCamera = !1, this._hasMoved = !1, this._rigCameras = new Array, this._skipRendering = !1, this._projectionMatrix = new Zd.b, this._postProcesses = new Array, this._activeMeshes = new Wd.h(256), this._globalPosition = Zd.n.Zero(), this._computedViewMatrix = Zd.b.Identity(), this._doNotComputeProjectionMatrix = !1, this._transformMatrix = Zd.b.Zero(), this._refreshFrustumPlanes = !0, this._absoluteRotation = Zd.d.Identity(), this._isCamera = !0, this._isLeftCamera = !1, this._isRightCamera = !1, this.layerMask = this.Wm().defaultCameraLayerMask, this.Wm().addCamera(this), gd && !this.Wm().activeCamera && (this.Wm().activeCamera = this), this.position = kd, this.renderPassId = this.Wm().eL().createRenderPassId(`Camera ${Jd}`)
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
          return "Ge"
        }
        toString(dd) {
          let Jd = "Name: " + this.name;
          if (Jd += ", type: " + this.getClassName(), this.animations)
            for (let kd = 0; kd < this.animations.length; kd++) Jd += ", animation[0]: " + this.animations[kd].toString(dd);
          return Jd
        }
        applyVerticalCorrection() {
          const dd = this.absoluteRotation.toEulerAngles();
          this.projectionPlaneTilt = this._scene.useRightHandedSystem ? -dd.x : dd.x
        }
        get globalPosition() {
          return this._globalPosition
        }
        getActiveMeshes() {
          return this._activeMeshes
        }
        isActiveMesh(dd) {
          return -1 !== this._activeMeshes.indexOf(dd)
        }
        isReady() {
          let dd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (dd)
            for (const Jd of this._postProcesses)
              if (Jd && !Jd.isReady()) return !1;
          return super.isReady(dd)
        }
        _initCache() {
          super._initCache(), this._cache.position = new Zd.n(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.upVector = new Zd.n(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.mode = void 0, this._cache.minZ = void 0, this._cache.maxZ = void 0, this._cache.fov = void 0, this._cache.fovMode = void 0, this._cache.aspectRatio = void 0, this._cache.orthoLeft = void 0, this._cache.orthoRight = void 0, this._cache.orthoBottom = void 0, this._cache.orthoTop = void 0, this._cache.obliqueAngle = void 0, this._cache.obliqueLength = void 0, this._cache.obliqueOffset = void 0, this._cache.renderWidth = void 0, this._cache.renderHeight = void 0
        }
        _updateCache(dd) {
          dd || super._updateCache(), this._cache.position.Fs(this.position), this._cache.upVector.Fs(this.upVector)
        }
        _isSynchronized() {
          return this._isSynchronizedViewMatrix() && this._isSynchronizedProjectionMatrix()
        }
        _isSynchronizedViewMatrix() {
          return !!super._isSynchronized() && (this._cache.position.equals(this.position) && this._cache.upVector.equals(this.upVector) && this.isSynchronizedWithParent())
        }
        _isSynchronizedProjectionMatrix() {
          const Jd = this.ignoreCameraMaxZ ? 0 : this.maxZ;
          let kd = this._cache.mode === this.mode && this._cache.minZ === this.minZ && this._cache.maxZ === Jd;
          if (!kd) return !1;
          const pd = this.eL();
          return this.mode === dd.PERSPECTIVE_CAMERA ? kd = this._cache.fov === this.fov && this._cache.fovMode === this.fovMode && this._cache.aspectRatio === pd.getAspectRatio(this) && this._cache.projectionPlaneTilt === this.projectionPlaneTilt : (kd = this._cache.orthoLeft === this.orthoLeft && this._cache.orthoRight === this.orthoRight && this._cache.orthoBottom === this.orthoBottom && this._cache.orthoTop === this.orthoTop && this._cache.renderWidth === pd.getRenderWidth() && this._cache.renderHeight === pd.getRenderHeight(), this.oblique && (kd = kd && this._cache.obliqueAngle === this.oblique.angle && this._cache.obliqueLength === this.oblique.length && this._cache.obliqueOffset === this.oblique.offset)), kd
        }
        attachControl(dd, Jd) {}
        detachControl(dd) {}
        update() {
          this._hasMoved = !1, this._checkInputs(), this.cameraRigMode !== dd.RIG_MODE_NONE && this._updateRigCameras(), this.getViewMatrix(), this.getProjectionMatrix()
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
          for (let dd = 0; dd < this._postProcesses.length; dd++)
            if (null !== this._postProcesses[dd]) return this._postProcesses[dd];
          return null
        }
        _cascadePostProcessesToRigCams() {
          const dd = this._getFirstPostProcess();
          dd && dd.markTextureDirty();
          for (let Jd = 0, kd = this._rigCameras.length; Jd < kd; Jd++) {
            const dd = this._rigCameras[Jd],
              kd = dd._rigPostProcess;
            if (kd) {
              "pass" === kd.getEffectName() && (dd.isIntermediate = 0 === this._postProcesses.length), dd._postProcesses = this._postProcesses.slice(0).concat(kd), kd.markTextureDirty()
            } else dd._postProcesses = this._postProcesses.slice(0)
          }
        }
        attachPostProcess(dd) {
          let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          return !dd.isReusable() && this._postProcesses.indexOf(dd) > -1 ? (Cd.c.Error("You're trying to reuse a post process not defined as reusable."), 0) : (null == Jd || Jd < 0 ? this._postProcesses.push(dd) : null === this._postProcesses[Jd] ? this._postProcesses[Jd] = dd : this._postProcesses.splice(Jd, 0, dd), this._cascadePostProcessesToRigCams(), this._scene.prePassRenderer && this._scene.prePassRenderer.dkd(), this._postProcesses.indexOf(dd))
        }
        detachPostProcess(dd) {
          const Jd = this._postProcesses.indexOf(dd); - 1 !== Jd && (this._postProcesses[Jd] = null), this._scene.prePassRenderer && this._scene.prePassRenderer.dkd(), this._cascadePostProcessesToRigCams()
        }
        getWorldMatrix() {
          return this._isSynchronizedViewMatrix() || this.getViewMatrix(), this._worldMatrix
        }
        _getViewMatrix() {
          return Zd.b.Identity()
        }
        getViewMatrix(dd) {
          return !dd && this._isSynchronizedViewMatrix() || (this._hasMoved = !0, this.updateCache(), this._computedViewMatrix = this._getViewMatrix(), this._currentRenderId = this.Wm().getRenderId(), this._childUpdateId++, this._refreshFrustumPlanes = !0, this._cameraRigParams && this._cameraRigParams.vrPreViewMatrix && this._computedViewMatrix.multiplyToRef(this._cameraRigParams.vrPreViewMatrix, this._computedViewMatrix), this.parent && this.parent.onViewMatrixChangedObservable && this.parent.onViewMatrixChangedObservable.notifyObservers(this.parent), this.onViewMatrixChangedObservable.notifyObservers(this), this._computedViewMatrix.invertToRef(this._worldMatrix), this._worldMatrix.getTranslationToRef(this._globalPosition)), this._computedViewMatrix
        }
        freezeProjectionMatrix(dd) {
          this._doNotComputeProjectionMatrix = !0, void 0 !== dd && (this._projectionMatrix = dd)
        }
        unfreezeProjectionMatrix() {
          this._doNotComputeProjectionMatrix = !1
        }
        getProjectionMatrix(Jd) {
          if (this._doNotComputeProjectionMatrix || !Jd && this._isSynchronizedProjectionMatrix()) return this._projectionMatrix;
          const kd = this.ignoreCameraMaxZ ? 0 : this.maxZ;
          this._cache.mode = this.mode, this._cache.minZ = this.minZ, this._cache.maxZ = kd, this._refreshFrustumPlanes = !0;
          const pd = this.eL(),
            Nd = this.Wm(),
            Wd = pd.vpd;
          if (this.mode === dd.PERSPECTIVE_CAMERA) {
            let Jd;
            this._cache.fov = this.fov, this._cache.fovMode = this.fovMode, this._cache.aspectRatio = pd.getAspectRatio(this), this._cache.projectionPlaneTilt = this.projectionPlaneTilt, this.minZ <= 0 && (this.minZ = .1), Jd = Nd.useRightHandedSystem ? Zd.b.PerspectiveFovRHToRef : Zd.b.PerspectiveFovLHToRef, Jd(this.fov, pd.getAspectRatio(this), Wd ? kd : this.minZ, Wd ? this.minZ : kd, this._projectionMatrix, this.fovMode === dd.FOVMODE_VERTICAL_FIXED, pd.isNDCHalfZRange, this.projectionPlaneTilt, Wd)
          } else {
            const dd = pd.getRenderWidth() / 2,
              Jd = pd.getRenderHeight() / 2;
            Nd.useRightHandedSystem ? this.oblique ? Zd.b.ObliqueOffCenterRHToRef(this.orthoLeft ?? -dd, this.orthoRight ?? dd, this.orthoBottom ?? -Jd, this.orthoTop ?? Jd, Wd ? kd : this.minZ, Wd ? this.minZ : kd, this.oblique.length, this.oblique.angle, this._computeObliqueDistance(this.oblique.offset), this._projectionMatrix, pd.isNDCHalfZRange) : Zd.b.OrthoOffCenterRHToRef(this.orthoLeft ?? -dd, this.orthoRight ?? dd, this.orthoBottom ?? -Jd, this.orthoTop ?? Jd, Wd ? kd : this.minZ, Wd ? this.minZ : kd, this._projectionMatrix, pd.isNDCHalfZRange) : this.oblique ? Zd.b.ObliqueOffCenterLHToRef(this.orthoLeft ?? -dd, this.orthoRight ?? dd, this.orthoBottom ?? -Jd, this.orthoTop ?? Jd, Wd ? kd : this.minZ, Wd ? this.minZ : kd, this.oblique.length, this.oblique.angle, this._computeObliqueDistance(this.oblique.offset), this._projectionMatrix, pd.isNDCHalfZRange) : Zd.b.OrthoOffCenterLHToRef(this.orthoLeft ?? -dd, this.orthoRight ?? dd, this.orthoBottom ?? -Jd, this.orthoTop ?? Jd, Wd ? kd : this.minZ, Wd ? this.minZ : kd, this._projectionMatrix, pd.isNDCHalfZRange), this._cache.orthoLeft = this.orthoLeft, this._cache.orthoRight = this.orthoRight, this._cache.orthoBottom = this.orthoBottom, this._cache.orthoTop = this.orthoTop, this._cache.obliqueAngle = this.oblique?.angle, this._cache.obliqueLength = this.oblique?.length, this._cache.obliqueOffset = this.oblique?.offset, this._cache.renderWidth = pd.getRenderWidth(), this._cache.renderHeight = pd.getRenderHeight()
          }
          return this.onProjectionMatrixChangedObservable.notifyObservers(this), this._projectionMatrix
        }
        getTransformationMatrix() {
          return this._computedViewMatrix.multiplyToRef(this._projectionMatrix, this._transformMatrix), this._transformMatrix
        }
        _computeObliqueDistance(dd) {
          return (this.radius || (this.target ? Zd.n.Distance(this.position, this.target) : this.position.length())) + dd
        }
        _updateFrustumPlanes() {
          this._refreshFrustumPlanes && (this.getTransformationMatrix(), this._frustumPlanes ? Qd.b.GetPlanesToRef(this._transformMatrix, this._frustumPlanes) : this._frustumPlanes = Qd.b.GetPlanes(this._transformMatrix), this._refreshFrustumPlanes = !1)
        }
        isInFrustum(dd) {
          let Jd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._updateFrustumPlanes(), Jd && this.rigCameras.length > 0) {
            let Jd = !1;
            for (const kd of this.rigCameras) kd._updateFrustumPlanes(), Jd = Jd || dd.isInFrustum(kd._frustumPlanes);
            return Jd
          }
          return dd.isInFrustum(this._frustumPlanes)
        }
        isCompletelyInFrustum(dd) {
          return this._updateFrustumPlanes(), dd.isCompletelyInFrustum(this._frustumPlanes)
        }
        getForwardRay() {
          throw (0, od.n)("Ray")
        }
        getForwardRayToRef(dd) {
          throw (0, od.n)("Ray")
        }
        dispose(Jd) {
          let kd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          for (this.onViewMatrixChangedObservable.clear(), this.onProjectionMatrixChangedObservable.clear(), this.onAfterCheckInputsObservable.clear(), this.onRestoreStateObservable.clear(), this.inputs && this.inputs.clear(), this.Wm().stopAnimation(this), this.Wm().removeCamera(this); this._rigCameras.length > 0;) {
            const dd = this._rigCameras.pop();
            dd && dd.dispose()
          }
          if (this._parentContainer) {
            const dd = this._parentContainer.cameras.indexOf(this);
            dd > -1 && this._parentContainer.cameras.splice(dd, 1), this._parentContainer = null
          }
          if (this._rigPostProcess) this._rigPostProcess.dispose(this), this._rigPostProcess = null, this._postProcesses.length = 0;
          else if (this.cameraRigMode !== dd.RIG_MODE_NONE) this._rigPostProcess = null, this._postProcesses.length = 0;
          else {
            let dd = this._postProcesses.length;
            for (; --dd >= 0;) {
              const Jd = this._postProcesses[dd];
              Jd && Jd.dispose(this)
            }
          }
          let pd = this.customRenderTargets.length;
          for (; --pd >= 0;) this.customRenderTargets[pd].dispose();
          this.customRenderTargets.length = 0, this._activeMeshes.dispose(), this.Wm().eL().releaseRenderPassId(this.renderPassId), super.dispose(Jd, kd)
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
        setCameraRigMode(Jd, kd) {
          if (this.cameraRigMode !== Jd) {
            for (; this._rigCameras.length > 0;) {
              const dd = this._rigCameras.pop();
              dd && dd.dispose()
            }
            if (this.cameraRigMode = Jd, this._cameraRigParams = {}, this._cameraRigParams.interaxialDistance = kd.interaxialDistance || .0637, this._cameraRigParams.stereoHalfAngle = this._cameraRigParams.interaxialDistance / .0637 * (Math.PI / 180), this.cameraRigMode !== dd.RIG_MODE_NONE) {
              const dd = this.createRigCamera(this.name + "_L", 0);
              dd && (dd._isLeftCamera = !0);
              const Jd = this.createRigCamera(this.name + "_R", 1);
              Jd && (Jd._isRightCamera = !0), dd && Jd && (this._rigCameras.push(dd), this._rigCameras.push(Jd))
            }
            this._setRigMode(kd), this._cascadePostProcessesToRigCams(), this.update()
          }
        }
        _setRigMode(dd) {}
        _getVRProjectionMatrix() {
          return Zd.b.PerspectiveFovLHToRef(this._cameraRigParams.vrMetrics.aspectRatioFov, this._cameraRigParams.vrMetrics.aspectRatio, this.minZ, this.ignoreCameraMaxZ ? 0 : this.maxZ, this._cameraRigParams.vrWorkMatrix, !0, this.eL().isNDCHalfZRange), this._cameraRigParams.vrWorkMatrix.multiplyToRef(this._cameraRigParams.vrHMatrix, this._projectionMatrix), this._projectionMatrix
        }
        setCameraRigParameter(dd, Jd) {
          this._cameraRigParams || (this._cameraRigParams = {}), this._cameraRigParams[dd] = Jd, "interaxialDistance" === dd && (this._cameraRigParams.stereoHalfAngle = Jd / .0637 * (Math.PI / 180))
        }
        createRigCamera(dd, Jd) {
          return null
        }
        _updateRigCameras() {
          for (let dd = 0; dd < this._rigCameras.length; dd++) this._rigCameras[dd].minZ = this.minZ, this._rigCameras[dd].maxZ = this.ignoreCameraMaxZ ? 0 : this.maxZ, this._rigCameras[dd].fov = this.fov, this._rigCameras[dd].upVector.Fs(this.upVector);
          this.cameraRigMode === dd.RIG_MODE_STEREOSCOPIC_ANAGLYPH && (this._rigCameras[0].viewport = this._rigCameras[1].viewport = this.viewport)
        }
        _setupInputs() {}
        serialize() {
          const dd = Od.c.Serialize(this);
          return dd.uniqueId = this.uniqueId, dd.type = this.getClassName(), this.parent && this.parent._serializeAsParent(dd), this.inputs && this.inputs.serialize(dd), Od.c.AppendSerializedAnimations(this, dd), dd.UO = this.serializeAnimationRanges(), dd.isEnabled = this.isEnabled(), dd
        }
        clone(Jd) {
          let kd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const pd = Od.c.Clone(dd.GetConstructorFromName(this.getClassName(), Jd, this.Wm(), this.interaxialDistance, this.isStereoscopicSideBySide), this);
          return pd.name = Jd, pd.parent = kd, this.onClonedObservable.notifyObservers(pd), pd
        }
        UH(dd) {
          const Jd = Zd.n.Zero();
          return this.getDirectionToRef(dd, Jd), Jd
        }
        get absoluteRotation() {
          return this.getWorldMatrix().decompose(void 0, this._absoluteRotation), this._absoluteRotation
        }
        getDirectionToRef(dd, Jd) {
          Zd.n.TransformNormalToRef(dd, this.getWorldMatrix(), Jd)
        }
        static GetConstructorFromName(Jd, kd, pd) {
          let Nd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
            Wd = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
          const Pd = gd.c.Construct(Jd, kd, pd, {
            interaxial_distance: Nd,
            isStereoscopicSideBySide: Wd
          });
          return Pd || (() => dd._CreateDefaultParsedCamera(kd, pd))
        }
        computeWorldMatrix() {
          return this.getWorldMatrix()
        }
        _calculateHandednessMultiplier() {
          let dd = this.Wm().useRightHandedSystem ? -1 : 1;
          return this.parent && this.parent._getWorldMatrixDeterminant() < 0 && (dd *= -1), dd
        }
      }, (() => {
        const Wd = "function" === typeof Symbol && Symbol.metadata ? Object.create(Sd[Symbol.metadata] ?? null) : void 0;
        Jd = [(0, Nd.F)("position")], kd = [(0, Nd.F)("upVector")], Kd = [(0, Nd.H)()], ed = [(0, Nd.H)()], Rd = [(0, Nd.H)()], Id = [(0, Nd.H)()], Gd = [(0, Nd.H)()], vd = [(0, Nd.H)()], xd = [(0, Nd.H)()], qd = [(0, Nd.H)()], Bd = [(0, Nd.H)()], sd = [(0, Nd.H)()], ad = [(0, Nd.H)()], Md = [(0, Nd.H)()], Fd = [(0, Nd.H)()], Yd = [(0, Nd.H)()], md = [(0, Nd.H)()], bd = [(0, Nd.H)()], (0, pd.h)(dd, null, Kd, {
          kind: "getter",
          name: "orthoLeft",
          static: !1,
          private: !1,
          access: {
            has: dd => "orthoLeft" in dd,
            get: dd => dd.orthoLeft
          },
          metadata: Wd
        }, null, jd), (0, pd.h)(dd, null, ed, {
          kind: "getter",
          name: "orthoRight",
          static: !1,
          private: !1,
          access: {
            has: dd => "orthoRight" in dd,
            get: dd => dd.orthoRight
          },
          metadata: Wd
        }, null, jd), (0, pd.h)(dd, null, Rd, {
          kind: "getter",
          name: "orthoBottom",
          static: !1,
          private: !1,
          access: {
            has: dd => "orthoBottom" in dd,
            get: dd => dd.orthoBottom
          },
          metadata: Wd
        }, null, jd), (0, pd.h)(dd, null, Id, {
          kind: "getter",
          name: "orthoTop",
          static: !1,
          private: !1,
          access: {
            has: dd => "orthoTop" in dd,
            get: dd => dd.orthoTop
          },
          metadata: Wd
        }, null, jd), (0, pd.h)(dd, null, Bd, {
          kind: "getter",
          name: "inertia",
          static: !1,
          private: !1,
          access: {
            has: dd => "inertia" in dd,
            get: dd => dd.inertia
          },
          metadata: Wd
        }, null, jd), (0, pd.h)(dd, null, sd, {
          kind: "getter",
          name: "mode",
          static: !1,
          private: !1,
          access: {
            has: dd => "mode" in dd,
            get: dd => dd.mode
          },
          metadata: Wd
        }, null, jd), (0, pd.h)(null, null, Jd, {
          kind: "field",
          name: "_position",
          static: !1,
          private: !1,
          access: {
            has: dd => "_position" in dd,
            get: dd => dd._position,
            set: (dd, Jd) => {
              dd._position = Jd
            }
          },
          metadata: Wd
        }, Xd, fd), (0, pd.h)(null, null, kd, {
          kind: "field",
          name: "_upVector",
          static: !1,
          private: !1,
          access: {
            has: dd => "_upVector" in dd,
            get: dd => dd._upVector,
            set: (dd, Jd) => {
              dd._upVector = Jd
            }
          },
          metadata: Wd
        }, nd, Ud), (0, pd.h)(null, null, Gd, {
          kind: "field",
          name: "fov",
          static: !1,
          private: !1,
          access: {
            has: dd => "fov" in dd,
            get: dd => dd.fov,
            set: (dd, Jd) => {
              dd.fov = Jd
            }
          },
          metadata: Wd
        }, yd, Dd), (0, pd.h)(null, null, vd, {
          kind: "field",
          name: "projectionPlaneTilt",
          static: !1,
          private: !1,
          access: {
            has: dd => "projectionPlaneTilt" in dd,
            get: dd => dd.projectionPlaneTilt,
            set: (dd, Jd) => {
              dd.projectionPlaneTilt = Jd
            }
          },
          metadata: Wd
        }, Td, Ed), (0, pd.h)(null, null, xd, {
          kind: "field",
          name: "minZ",
          static: !1,
          private: !1,
          access: {
            has: dd => "minZ" in dd,
            get: dd => dd.minZ,
            set: (dd, Jd) => {
              dd.minZ = Jd
            }
          },
          metadata: Wd
        }, cd, hd), (0, pd.h)(null, null, qd, {
          kind: "field",
          name: "maxZ",
          static: !1,
          private: !1,
          access: {
            has: dd => "maxZ" in dd,
            get: dd => dd.maxZ,
            set: (dd, Jd) => {
              dd.maxZ = Jd
            }
          },
          metadata: Wd
        }, rd, ud), (0, pd.h)(null, null, ad, {
          kind: "field",
          name: "layerMask",
          static: !1,
          private: !1,
          access: {
            has: dd => "layerMask" in dd,
            get: dd => dd.layerMask,
            set: (dd, Jd) => {
              dd.layerMask = Jd
            }
          },
          metadata: Wd
        }, td, Vd), (0, pd.h)(null, null, Md, {
          kind: "field",
          name: "fovMode",
          static: !1,
          private: !1,
          access: {
            has: dd => "fovMode" in dd,
            get: dd => dd.fovMode,
            set: (dd, Jd) => {
              dd.fovMode = Jd
            }
          },
          metadata: Wd
        }, zd, Hd), (0, pd.h)(null, null, Fd, {
          kind: "field",
          name: "cameraRigMode",
          static: !1,
          private: !1,
          access: {
            has: dd => "cameraRigMode" in dd,
            get: dd => dd.cameraRigMode,
            set: (dd, Jd) => {
              dd.cameraRigMode = Jd
            }
          },
          metadata: Wd
        }, wd, Ad), (0, pd.h)(null, null, Yd, {
          kind: "field",
          name: "interaxialDistance",
          static: !1,
          private: !1,
          access: {
            has: dd => "interaxialDistance" in dd,
            get: dd => dd.interaxialDistance,
            set: (dd, Jd) => {
              dd.interaxialDistance = Jd
            }
          },
          metadata: Wd
        }, dJ, JJ), (0, pd.h)(null, null, md, {
          kind: "field",
          name: "isStereoscopicSideBySide",
          static: !1,
          private: !1,
          access: {
            has: dd => "isStereoscopicSideBySide" in dd,
            get: dd => dd.isStereoscopicSideBySide,
            set: (dd, Jd) => {
              dd.isStereoscopicSideBySide = Jd
            }
          },
          metadata: Wd
        }, kJ, pJ), (0, pd.h)(null, null, bd, {
          kind: "field",
          name: "ignoreCameraMaxZ",
          static: !1,
          private: !1,
          access: {
            has: dd => "ignoreCameraMaxZ" in dd,
            get: dd => dd.ignoreCameraMaxZ,
            set: (dd, Jd) => {
              dd.ignoreCameraMaxZ = Jd
            }
          },
          metadata: Wd
        }, NJ, WJ), Wd && Object.defineProperty(dd, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Wd
        })
      })(), dd._CreateDefaultParsedCamera = (dd, Jd) => {
        throw (0, od.n)("UniversalCamera")
      }, dd.PERSPECTIVE_CAMERA = 0, dd.ORTHOGRAPHIC_CAMERA = 1, dd.FOVMODE_VERTICAL_FIXED = 0, dd.FOVMODE_HORIZONTAL_FIXED = 1, dd.RIG_MODE_NONE = 0, dd.RIG_MODE_STEREOSCOPIC_ANAGLYPH = 10, dd.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL = 11, dd.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED = 12, dd.RIG_MODE_STEREOSCOPIC_OVERUNDER = 13, dd.RIG_MODE_STEREOSCOPIC_INTERLACED = 14, dd.RIG_MODE_VR = 20, dd.RIG_MODE_CUSTOM = 22, dd.ForceAttachControlToAlwaysPreventDefault = !1, dd
    })();

    function Rd(dd, Jd) {
      const kd = dd.type,
        pd = ed.GetConstructorFromName(kd, dd.name, Jd, dd.interaxial_distance, dd.isStereoscopicSideBySide),
        Nd = Od.c.Parse(pd, dd, Jd);
      if (void 0 !== dd.parentId && (Nd._waitingParentId = dd.parentId), void 0 !== dd.parentInstanceIndex && (Nd._waitingParentInstanceIndex = dd.parentInstanceIndex), Nd.inputs && (Nd.inputs.parse(dd), Nd._setupInputs()), dd.upVector && (Nd.upVector = Zd.n.FromArray(dd.upVector)), Nd.setPosition && (Nd.position.kdd(0, 0, 0), Nd.setPosition(Zd.n.FromArray(dd.position))), dd.target && Nd.setTarget && Nd.setTarget(Zd.n.FromArray(dd.target)), dd.cameraRigMode) {
        const Jd = dd.interaxial_distance ? {
          interaxialDistance: dd.interaxial_distance
        } : {};
        Nd.setCameraRigMode(dd.cameraRigMode, Jd)
      }
      if (dd.animations) {
        for (let Jd = 0; Jd < dd.animations.length; Jd++) {
          const kd = dd.animations[Jd],
            pd = (0, Kd.e)("BABYLON.Animation");
          pd && Nd.animations.push(pd.Parse(kd))
        }
        gd.c.ParseAnimationRanges(Nd, dd, Jd)
      }
      return dd.autoAnimate && Jd.beginAnimation(Nd, dd.autoAnimateFrom, dd.autoAnimateTo, dd.autoAnimateLoop, dd.autoAnimateSpeed || 1), void 0 !== dd.isEnabled && Nd.XM(dd.isEnabled), Nd
    }
    let Id = !1;

    function Gd() {
      Id || (Id = !0, ed.Parse = Rd)
    }
  },
  40211: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Nd
    });
    var pd = kd(37251);
    class Nd {
      constructor(dd, Jd, kd) {
        this._cameraPosition = Jd, this._behavior = kd, this.activeInput = !1, this.speed = 1, this.sV = 1, this.panSpeed = 1, this.rotationXSpeed = 1, this.rotationYSpeed = 1, this._zoomSpeedMultiplier = 1, this._panSpeedMultiplier = 1, this.zoomInertia = .9, this.panInertia = .9, this.rotationInertia = .9, this.zoomAccumulatedPixels = 0, this.panAccumulatedPixels = new pd.n, this.rotationAccumulatedPixels = new pd.n, this.zoomDeltaCurrentFrame = 0, this.panDeltaCurrentFrame = pd.n.Zero(), this.rotationDeltaCurrentFrame = pd.n.Zero(), this._zoomVelocity = 0, this._panVelocity = new pd.n, this.referenceFrameRate = 60, this._rotationVelocity = new pd.n, this._prevFrameTimeMs = 0, this._scene = dd
      }
      computeCurrentFrameDeltas() {
        const dd = this._scene.eL().getDeltaTime(),
          Jd = this._getEffectiveDeltaMs(dd);
        if (0 === this._zoomVelocity && 0 === this.zoomAccumulatedPixels && 0 === this._panVelocity.x && 0 === this._panVelocity.y && 0 === this._panVelocity.z && 0 === this.panAccumulatedPixels.x && 0 === this.panAccumulatedPixels.y && 0 === this.panAccumulatedPixels.z && 0 === this._rotationVelocity.x && 0 === this._rotationVelocity.y && 0 === this._rotationVelocity.z && 0 === this.rotationAccumulatedPixels.x && 0 === this.rotationAccumulatedPixels.y && 0 === this.rotationAccumulatedPixels.z && !this.activeInput) return this.panDeltaCurrentFrame.o5(0), this.rotationDeltaCurrentFrame.o5(0), this.zoomDeltaCurrentFrame = 0, void(dd > 0 && (this._prevFrameTimeMs = dd));
        this.panDeltaCurrentFrame.o5(0), this.rotationDeltaCurrentFrame.o5(0), this.zoomDeltaCurrentFrame = 0;
        (this.panAccumulatedPixels.lengthSquared() > 0 || this.rotationAccumulatedPixels.lengthSquared() > 0 || 0 !== this.zoomAccumulatedPixels) && this._behavior?.isInterpolating && this._behavior.stopAllAnimations(), this._panVelocity.kdd(this._calculateCurrentVelocity(this._panVelocity.x, this.panAccumulatedPixels.x, this.panInertia), this._calculateCurrentVelocity(this._panVelocity.y, this.panAccumulatedPixels.y, this.panInertia), this._calculateCurrentVelocity(this._panVelocity.z, this.panAccumulatedPixels.z, this.panInertia)), this._panVelocity.scaleToRef(this.speed * this.panSpeed * this._panSpeedMultiplier * Jd, this.panDeltaCurrentFrame), this._rotationVelocity.kdd(this._calculateCurrentVelocity(this._rotationVelocity.x, this.rotationAccumulatedPixels.x, this.rotationInertia), this._calculateCurrentVelocity(this._rotationVelocity.y, this.rotationAccumulatedPixels.y, this.rotationInertia), this._calculateCurrentVelocity(this._rotationVelocity.z, this.rotationAccumulatedPixels.z, this.rotationInertia)), this.rotationDeltaCurrentFrame.kdd(this._rotationVelocity.x * this.speed * this.rotationXSpeed * Jd, this._rotationVelocity.y * this.speed * this.rotationYSpeed * Jd, 0), this._zoomVelocity = this._calculateCurrentVelocity(this._zoomVelocity, this.zoomAccumulatedPixels, this.zoomInertia), this.zoomDeltaCurrentFrame = this._zoomVelocity * (this.speed * this.sV * this._zoomSpeedMultiplier) * Jd, dd > 0 && (this._prevFrameTimeMs = dd), this.zoomAccumulatedPixels = 0, this.panAccumulatedPixels.o5(0), this.rotationAccumulatedPixels.o5(0), this.activeInput = !1
      }
      resetRotationVelocity() {
        this._rotationVelocity.o5(0), this.rotationAccumulatedPixels.o5(0)
      }
      resetPanVelocity() {
        this._panVelocity.o5(0), this.panAccumulatedPixels.o5(0)
      }
      resetZoomVelocity() {
        this._zoomVelocity = 0, this.zoomAccumulatedPixels = 0
      }
      get isInterpolating() {
        return !!this._behavior?.isInterpolating
      }
      getFrameIndependentDecay(dd) {
        const Jd = this._scene.eL().getDeltaTime(),
          kd = this._getEffectiveDeltaMs(Jd),
          pd = 1e3 / this.referenceFrameRate;
        return Math.pow(dd, kd / pd)
      }
      getFrameIndependentInputScale(dd) {
        const Jd = 1 - dd;
        if (Jd <= 0) return 1;
        return (1 - this.getFrameIndependentDecay(dd)) / Jd
      }
      _getEffectiveDeltaMs(dd) {
        return dd > 0 ? dd : this._prevFrameTimeMs > 0 ? this._prevFrameTimeMs : 1e3 / this.referenceFrameRate
      }
      _calculateCurrentVelocity(dd, Jd, kd) {
        let pd = dd;
        const Nd = this._scene.eL().getDeltaTime(),
          Wd = this._getEffectiveDeltaMs(Nd);
        if (0 === Wd) return pd;
        const Pd = this.getFrameIndependentDecay(kd);
        if (pd *= Pd, 0 !== Jd || this.activeInput) {
          const dd = 1 - kd;
          pd += Jd / Wd * (dd > 0 ? (1 - Pd) / dd : 1)
        } else Math.abs(pd) < 1e-6 && (pd = 0);
        return pd
      }
    }
  },
  40217: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => pd
    });
    class pd {
      constructor(dd, Jd) {
        this.inputMap = [], this.handlers = dd, this._createDefaultEntries = Jd, this.resetInputMap()
      }
      resolveInteraction(dd, Jd) {
        for (const kd of this.inputMap)
          if (kd.source === dd && this._entryMatches(kd, Jd)) return kd;
        return null
      }
      resetInputMap() {
        this.inputMap = this._createDefaultEntries?.() ?? []
      }
      getEntry(dd, Jd, kd) {
        const pd = this.inputMap;
        for (let Nd = 0; Nd < pd.length; Nd++) {
          const Wd = pd[Nd];
          if (Wd.source === dd && Wd.interaction === Jd && this._entryConditionsMatch(Wd, kd)) return Wd
        }
      }
      getEntries(dd, Jd, kd) {
        const pd = [],
          Nd = this.inputMap;
        for (let Wd = 0; Wd < Nd.length; Wd++) {
          const Pd = Nd[Wd];
          Pd.source === dd && Pd.interaction === Jd && this._entryConditionsMatch(Pd, kd) && pd.push(Pd)
        }
        return pd
      }
      addEntry(dd) {
        const Jd = this._entrySpecificity(dd);
        let kd = this.inputMap.length;
        for (let pd = 0; pd < this.inputMap.length; pd++)
          if (this._entrySpecificity(this.inputMap[pd]) < Jd) {
            kd = pd;
            break
          } this.inputMap.splice(kd, 0, dd)
      }
      setInteraction(dd, Jd, kd) {
        const pd = this.resolveInteraction(dd, Jd);
        return pd && this._entryCoversAllConditionsOf(pd, Jd) ? (pd.interaction = kd, !0) : (this.addEntry({
          source: dd,
          ...Jd ?? {},
          interaction: kd
        }), !0)
      }
      _entryCoversAllConditionsOf(dd, Jd) {
        if (!Jd) return !0;
        const kd = dd;
        for (const pd of Object.keys(Jd)) {
          const dd = Jd[pd];
          if (void 0 !== dd)
            if ("modifiers" === pd) {
              const Jd = kd.modifiers ?? {};
              for (const kd of Object.keys(dd))
                if (void 0 !== dd[kd] && void 0 === Jd[kd]) return !1
            } else if (void 0 === kd[pd]) return !1
        }
        return !0
      }
      setInteractions(dd, Jd, kd) {
        let pd = 0;
        const Nd = this.inputMap;
        for (let Wd = 0; Wd < Nd.length; Wd++) {
          const Pd = Nd[Wd];
          Pd.source === dd && this._entryMatches(Pd, Jd) && (Pd.interaction = kd, pd++)
        }
        return pd
      }
      _entryMatches(dd, Jd) {
        switch (dd.source) {
          case "pointer":
            return (void 0 === dd.button || dd.button === Jd?.button) && this._matchModifiers(dd.modifiers, Jd?.modifiers);
          case "wheel":
            return this._matchModifiers(dd.modifiers, Jd?.modifiers);
          case "touch":
            return void 0 === dd.touchCount || dd.touchCount === Jd?.touchCount;
          case "keyboard":
            return (void 0 === dd.key || (Array.isArray(dd.key) ? -1 !== dd.key.indexOf(Jd?.key ?? -1) : dd.key === Jd?.key)) && this._matchModifiers(dd.modifiers, Jd?.modifiers)
        }
      }
      _entryConditionsMatch(dd, Jd) {
        if (!Jd) return !0;
        switch (dd.source) {
          case "pointer":
            return (!("button" in Jd) || dd.button === Jd.button) && (!("modifiers" in Jd) || this._entryModifiersMatch(dd.modifiers, Jd.modifiers));
          case "wheel":
            return !("modifiers" in Jd) || this._entryModifiersMatch(dd.modifiers, Jd.modifiers);
          case "touch":
            return !("touchCount" in Jd) || dd.touchCount === Jd.touchCount;
          case "keyboard":
            if ("key" in Jd) {
              if (void 0 === dd.key) return void 0 === Jd.key;
              if (void 0 === Jd.key || (Array.isArray(dd.key) ? -1 === dd.key.indexOf(Jd.key) : dd.key !== Jd.key)) return !1
            }
            return !("modifiers" in Jd) || this._entryModifiersMatch(dd.modifiers, Jd.modifiers)
        }
      }
      _entrySpecificity(dd) {
        let Jd = 0;
        return "button" in dd && void 0 !== dd.button && Jd++, "key" in dd && void 0 !== dd.key && Jd++, "touchCount" in dd && void 0 !== dd.touchCount && Jd++, "modifiers" in dd && dd.modifiers && Jd++, Jd
      }
      _matchModifiers(dd, Jd) {
        return !dd || (void 0 === dd.ctrl || dd.ctrl === (Jd?.ctrl ?? !1)) && ((void 0 === dd.shift || dd.shift === (Jd?.shift ?? !1)) && (void 0 === dd.alt || dd.alt === (Jd?.alt ?? !1)))
      }
      _entryModifiersMatch(dd, Jd) {
        if (!Jd) return !dd;
        return void 0 !== Jd.ctrl || void 0 !== Jd.shift || void 0 !== Jd.alt ? (void 0 === Jd.ctrl || dd?.ctrl === Jd.ctrl) && ((void 0 === Jd.shift || dd?.shift === Jd.shift) && (void 0 === Jd.alt || dd?.alt === Jd.alt)) : !dd || void 0 === dd.ctrl && void 0 === dd.shift && void 0 === dd.alt
      }
    }
  },
  40195: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Rd,
      d: () => Od
    });
    var pd = kd(39964),
      Nd = kd(39966),
      Wd = kd(40199),
      Pd = kd(37251),
      Zd = kd(37259),
      gd = kd(40207),
      Cd = kd(40205),
      Kd = kd(40211),
      od = kd(40217);
    class ld extends Kd.e {
      constructor(dd, Jd, kd) {
        super(dd, Jd, kd), this.input = new od.b({
          translate: (dd, Jd, kd) => {
            this.panAccumulatedPixels.x += dd, this.panAccumulatedPixels.y += Jd, this.panAccumulatedPixels.z += kd
          },
          rotate: (dd, Jd) => {
            this.rotationAccumulatedPixels.x += dd, this.rotationAccumulatedPixels.y += Jd
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
    const Qd = Pd.b.Zero(),
      Ld = Pd.d.Identity();
    let Od = (() => {
        var dd;
        let Jd, kd, Cd, Kd, od = Wd.e,
          Od = [],
          ed = [],
          Rd = [],
          Id = [],
          Gd = [],
          vd = [],
          xd = [],
          qd = [];
        return dd = class extends od {
          get inertia() {
            return this._targetInertia
          }
          set inertia(dd) {
            this._targetInertia = dd, this.movement && (this.movement.panInertia = dd, this.movement.rotationInertia = dd)
          }
          constructor(dd, Jd, kd) {
            super(dd, Jd, kd, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]), this.cameraDirection = new Pd.n(0, 0, 0), this.cameraRotation = new Pd.k(0, 0), this._targetInertia = .9, this.updateUpVectorFromRotation = (0, pd.i)(this, Od, !1), this.rotation = ((0, pd.i)(this, ed), (0, pd.i)(this, Rd, void 0)), this.rotationQuaternion = (0, pd.i)(this, Id), this.speed = (0, pd.i)(this, Gd, 2), this.noRotationConstraint = ((0, pd.i)(this, vd), !1), this.invertRotation = !1, this.inverseRotationSpeed = .2, this._panningEpsilon = Zd.e, this._rotationEpsilon = Zd.e, this.lockedTarget = (0, pd.i)(this, xd, null), this._currentTarget = ((0, pd.i)(this, qd), Pd.n.Zero()), this._initialFocalDistance = 1, this._viewMatrix = Pd.b.Zero(), this._cameraTransformMatrix = Pd.b.Zero(), this._cameraRotationMatrix = Pd.b.Zero(), this._transformedReferencePoint = Pd.n.Zero(), this._deferredPositionUpdate = new Pd.n, this._deferredRotationQuaternionUpdate = new Pd.d, this._deferredRotationUpdate = new Pd.n, this._deferredUpdated = !1, this._deferOnly = !1, this._cachedRotationZ = 0, this._cachedQuaternionRotationZ = 0, this._referencePoint = Pd.n.Forward(this.Wm().useRightHandedSystem), this.rotation = new Pd.n(0, this.Wm().useRightHandedSystem ? Math.PI : 0, 0), this.movement = new ld(this.Wm(), this.position), this.movement.panInertia = this.inertia, this.movement.rotationInertia = this.inertia
          }
          getFrontPosition(dd) {
            this.getWorldMatrix();
            const Jd = Pd.h.IL[0],
              kd = Pd.h.IL[1];
            return kd.set(0, 0, this._scene.useRightHandedSystem ? -1 : 1), this.getDirectionToRef(kd, Jd), Jd.scaleInPlace(dd), this.globalPosition.add(Jd)
          }
          _getLockedTargetPosition() {
            if (!this.lockedTarget) return null;
            if (this.lockedTarget.absolutePosition) {
              const dd = this.lockedTarget;
              dd.computeWorldMatrix().getTranslationToRef(dd.absolutePosition)
            }
            return this.lockedTarget.absolutePosition || this.lockedTarget
          }
          storeState() {
            return this._storedPosition = this.position.clone(), this._storedRotation = this.rotation.clone(), this.rotationQuaternion && (this._storedRotationQuaternion = this.rotationQuaternion.clone()), super.storeState()
          }
          _restoreStateValues() {
            return !!super._restoreStateValues() && (this.position = this._storedPosition.clone(), this.rotation = this._storedRotation.clone(), this.rotationQuaternion && this._storedRotationQuaternion && (this.rotationQuaternion = this._storedRotationQuaternion.clone()), this.cameraDirection.kdd(0, 0, 0), this.cameraRotation.kdd(0, 0), !0)
          }
          _initCache() {
            super._initCache(), this._cache.lockedTarget = new Pd.n(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.rotation = new Pd.n(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.rotationQuaternion = new Pd.d(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE)
          }
          _updateCache(dd) {
            dd || super._updateCache();
            const Jd = this._getLockedTargetPosition();
            Jd ? this._cache.lockedTarget ? this._cache.lockedTarget.Fs(Jd) : this._cache.lockedTarget = Jd.clone() : this._cache.lockedTarget = null, this._cache.rotation.Fs(this.rotation), this.rotationQuaternion && this._cache.rotationQuaternion.Fs(this.rotationQuaternion)
          }
          _isSynchronizedViewMatrix() {
            if (!super._isSynchronizedViewMatrix()) return !1;
            const dd = this._getLockedTargetPosition();
            return (this._cache.lockedTarget ? this._cache.lockedTarget.equals(dd) : !dd) && (this.rotationQuaternion ? this.rotationQuaternion.equals(this._cache.rotationQuaternion) : this._cache.rotation.equals(this.rotation))
          }
          _computeLocalCameraSpeed() {
            const dd = this.eL();
            return this.speed * Math.sqrt(dd.getDeltaTime() / (100 * dd.getFps()))
          }
          setTarget(dd) {
            this.upVector.normalize(), this._initialFocalDistance = dd.subtract(this.position).length(), this.position.z === dd.z && (this.position.z += Zd.e), this._referencePoint.normalize().scaleInPlace(this._initialFocalDistance), this.Wm().useRightHandedSystem ? Pd.b.LookAtRHToRef(this.position, dd, Pd.n.UpReadOnly, Qd) : Pd.b.LookAtLHToRef(this.position, dd, Pd.n.UpReadOnly, Qd), Qd.invert();
            const Jd = this.rotationQuaternion || Ld;
            Pd.d.FromRotationMatrixToRef(Qd, Jd), Jd.toEulerAnglesToRef(this.rotation), this.rotation.z = 0
          }
          get target() {
            return this.getTarget()
          }
          set target(dd) {
            this.setTarget(dd)
          }
          getTarget() {
            return this._currentTarget
          }
          _decideIfNeedsToMove() {
            return Math.abs(this.cameraDirection.x) > 0 || Math.abs(this.cameraDirection.y) > 0 || Math.abs(this.cameraDirection.z) > 0
          }
          _updatePosition() {
            if (this.parent) return this.parent.getWorldMatrix().invertToRef(Pd.h.Matrix[0]), Pd.n.TransformNormalToRef(this.cameraDirection, Pd.h.Matrix[0], Pd.h.IL[0]), this._deferredPositionUpdate.addInPlace(Pd.h.IL[0]), void(this._deferOnly ? this._deferredUpdated = !0 : this.position.Fs(this._deferredPositionUpdate));
            this._deferredPositionUpdate.addInPlace(this.cameraDirection), this._deferOnly ? this._deferredUpdated = !0 : this.position.Fs(this._deferredPositionUpdate)
          }
          _checkInputs() {
            const dd = this.movement,
              Jd = 0 !== this.cameraDirection.x || 0 !== this.cameraDirection.y || 0 !== this.cameraDirection.z;
            dd.panAccumulatedPixels.addInPlace(this.cameraDirection), dd.rotationAccumulatedPixels.x += this.cameraRotation.x, dd.rotationAccumulatedPixels.y += this.cameraRotation.y, dd.computeCurrentFrameDeltas(), this.cameraDirection.Fs(dd.panDeltaCurrentFrame), this.cameraRotation.set(dd.rotationDeltaCurrentFrame.x, dd.rotationDeltaCurrentFrame.y);
            const kd = this.speed * this._panningEpsilon;
            !Jd && Math.abs(this.cameraDirection.x) < kd && Math.abs(this.cameraDirection.y) < kd && Math.abs(this.cameraDirection.z) < kd && (this.cameraDirection.o5(0), dd.resetPanVelocity());
            const pd = this.invertRotation ? -this.inverseRotationSpeed : 1,
              Nd = this._decideIfNeedsToMove(),
              Wd = !(!this.cameraRotation.x && !this.cameraRotation.y);
            if (this._deferredUpdated = !1, this._deferredRotationUpdate.Fs(this.rotation), this._deferredPositionUpdate.Fs(this.position), this.rotationQuaternion && this._deferredRotationQuaternionUpdate.Fs(this.rotationQuaternion), Nd && this._updatePosition(), Wd) {
              if (this.rotationQuaternion && this.rotationQuaternion.toEulerAnglesToRef(this._deferredRotationUpdate), this._deferredRotationUpdate.x += this.cameraRotation.x * pd, this._deferredRotationUpdate.y += this.cameraRotation.y * pd, !this.noRotationConstraint) {
                const dd = 1.570796;
                this._deferredRotationUpdate.x > dd && (this._deferredRotationUpdate.x = dd), this._deferredRotationUpdate.x < -dd && (this._deferredRotationUpdate.x = -dd)
              }
              if (this._deferOnly ? this._deferredUpdated = !0 : this.rotation.Fs(this._deferredRotationUpdate), this.rotationQuaternion) {
                this._deferredRotationUpdate.lengthSquared() && (Pd.d.RotationYawPitchRollToRef(this._deferredRotationUpdate.y, this._deferredRotationUpdate.x, this._deferredRotationUpdate.z, this._deferredRotationQuaternionUpdate), this._deferOnly ? this._deferredUpdated = !0 : this.rotationQuaternion.Fs(this._deferredRotationQuaternionUpdate))
              }
            }
            this.cameraDirection.o5(0), this.cameraRotation.set(0, 0), super._checkInputs()
          }
          _updateCameraRotationMatrix() {
            this.rotationQuaternion ? this.rotationQuaternion.toRotationMatrix(this._cameraRotationMatrix) : Pd.b.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, this.rotation.z, this._cameraRotationMatrix)
          }
          _rotateUpVectorWithCameraRotationMatrix() {
            return Pd.n.TransformNormalToRef(Pd.n.UpReadOnly, this._cameraRotationMatrix, this.upVector), this
          }
          _getViewMatrix() {
            return this.lockedTarget && this.setTarget(this._getLockedTargetPosition()), this._updateCameraRotationMatrix(), this.rotationQuaternion && this._cachedQuaternionRotationZ != this.rotationQuaternion.z ? (this._rotateUpVectorWithCameraRotationMatrix(), this._cachedQuaternionRotationZ = this.rotationQuaternion.z) : this._cachedRotationZ !== this.rotation.z && (this._rotateUpVectorWithCameraRotationMatrix(), this._cachedRotationZ = this.rotation.z), Pd.n.TransformCoordinatesToRef(this._referencePoint, this._cameraRotationMatrix, this._transformedReferencePoint), this.position.addToRef(this._transformedReferencePoint, this._currentTarget), this.updateUpVectorFromRotation && (this.rotationQuaternion ? gd.c.Y.rotateByQuaternionToRef(this.rotationQuaternion, this.upVector) : (Pd.d.FromEulerVectorToRef(this.rotation, Ld), gd.c.Y.rotateByQuaternionToRef(Ld, this.upVector))), this._computeViewMatrix(this.position, this._currentTarget, this.upVector), this._viewMatrix
          }
          _computeViewMatrix(dd, Jd, kd) {
            if (this.Wm().useRightHandedSystem ? Pd.b.LookAtRHToRef(dd, Jd, kd, this._viewMatrix) : Pd.b.LookAtLHToRef(dd, Jd, kd, this._viewMatrix), this.parent) {
              const dd = this.parent.getWorldMatrix();
              this._viewMatrix.invert(), this._viewMatrix.multiplyToRef(dd, this._viewMatrix), this._viewMatrix.invert(), this._markSyncedWithParent()
            }
          }
          createRigCamera(Jd, kd) {
            if (this.cameraRigMode !== Wd.e.RIG_MODE_NONE) {
              const kd = new dd(Jd, this.position.clone(), this.Wm());
              return kd.isRigCamera = !0, kd.rigParent = this, this.cameraRigMode === Wd.e.RIG_MODE_VR && (this.rotationQuaternion || (this.rotationQuaternion = new Pd.d), kd._cameraRigParams = {}, kd.rotationQuaternion = new Pd.d), kd.mode = this.mode, kd.orthoLeft = this.orthoLeft, kd.orthoRight = this.orthoRight, kd.orthoTop = this.orthoTop, kd.orthoBottom = this.orthoBottom, kd
            }
            return null
          }
          _updateRigCameras() {
            const dd = this._rigCameras[0],
              Jd = this._rigCameras[1];
            switch (this.computeWorldMatrix(), this.cameraRigMode) {
              case Wd.e.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case Wd.e.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case Wd.e.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
              case Wd.e.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case Wd.e.RIG_MODE_STEREOSCOPIC_INTERLACED: {
                const kd = this.cameraRigMode === Wd.e.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED ? 1 : -1,
                  pd = this.cameraRigMode === Wd.e.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED ? -1 : 1;
                this._getRigCamPositionAndTarget(this._cameraRigParams.stereoHalfAngle * kd, dd), this._getRigCamPositionAndTarget(this._cameraRigParams.stereoHalfAngle * pd, Jd);
                break
              }
              case Wd.e.RIG_MODE_VR:
                dd.rotationQuaternion && Jd.rotationQuaternion && this.rotationQuaternion ? (dd.rotationQuaternion.Fs(this.rotationQuaternion), Jd.rotationQuaternion.Fs(this.rotationQuaternion)) : (dd.rotation.Fs(this.rotation), Jd.rotation.Fs(this.rotation)), dd.position.Fs(this.position), Jd.position.Fs(this.position)
            }
            super._updateRigCameras()
          }
          _getRigCamPositionAndTarget(Jd, kd) {
            this.getTarget().subtractToRef(this.position, dd._TargetFocalPoint), dd._TargetFocalPoint.normalize().scaleInPlace(this._initialFocalDistance);
            const pd = dd._TargetFocalPoint.addInPlace(this.position);
            Pd.b.TranslationToRef(-pd.x, -pd.y, -pd.z, dd._TargetTransformMatrix), dd._TargetTransformMatrix.multiplyToRef(Pd.b.RotationAxis(kd.upVector, Jd), dd._RigCamTransformMatrix), Pd.b.TranslationToRef(pd.x, pd.y, pd.z, dd._TargetTransformMatrix), dd._RigCamTransformMatrix.multiplyToRef(dd._TargetTransformMatrix, dd._RigCamTransformMatrix), Pd.n.TransformCoordinatesToRef(this.position, dd._RigCamTransformMatrix, kd.position), kd.setTarget(pd)
          }
          getClassName() {
            return "TargetCamera"
          }
        }, (() => {
          const Wd = "function" === typeof Symbol && Symbol.metadata ? Object.create(od[Symbol.metadata] ?? null) : void 0;
          Jd = [(0, Nd.H)()], kd = [(0, Nd.F)()], Cd = [(0, Nd.H)()], Kd = [(0, Nd.v)("lockedTargetId")], (0, pd.h)(null, null, Jd, {
            kind: "field",
            name: "updateUpVectorFromRotation",
            static: !1,
            private: !1,
            access: {
              has: dd => "updateUpVectorFromRotation" in dd,
              get: dd => dd.updateUpVectorFromRotation,
              set: (dd, Jd) => {
                dd.updateUpVectorFromRotation = Jd
              }
            },
            metadata: Wd
          }, Od, ed), (0, pd.h)(null, null, kd, {
            kind: "field",
            name: "rotation",
            static: !1,
            private: !1,
            access: {
              has: dd => "rotation" in dd,
              get: dd => dd.rotation,
              set: (dd, Jd) => {
                dd.rotation = Jd
              }
            },
            metadata: Wd
          }, Rd, Id), (0, pd.h)(null, null, Cd, {
            kind: "field",
            name: "speed",
            static: !1,
            private: !1,
            access: {
              has: dd => "speed" in dd,
              get: dd => dd.speed,
              set: (dd, Jd) => {
                dd.speed = Jd
              }
            },
            metadata: Wd
          }, Gd, vd), (0, pd.h)(null, null, Kd, {
            kind: "field",
            name: "lockedTarget",
            static: !1,
            private: !1,
            access: {
              has: dd => "lockedTarget" in dd,
              get: dd => dd.lockedTarget,
              set: (dd, Jd) => {
                dd.lockedTarget = Jd
              }
            },
            metadata: Wd
          }, xd, qd), Wd && Object.defineProperty(dd, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Wd
          })
        })(), dd._RigCamTransformMatrix = new Pd.b, dd._TargetTransformMatrix = new Pd.b, dd._TargetFocalPoint = new Pd.n, dd
      })(),
      ed = !1;

    function Rd() {
      ed || (ed = !0, Cd.c.AddNodeConstructor("TargetCamera", ((dd, Jd) => () => new Od(dd, Pd.n.Zero(), Jd))))
    }
  },
  39919: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Wd
    });
    var pd = kd(39874);
    let Nd = !1;

    function Wd() {
      Nd || (Nd = !0, pd.b.prototype.getInputElement = function() {
        return this._renderingCanvas
      }, pd.b.prototype.getRenderingCanvasClientRect = function() {
        return this._renderingCanvas ? this._renderingCanvas.getBoundingClientRect() : null
      }, pd.b.prototype.getInputElementClientRect = function() {
        return this._renderingCanvas ? this.getInputElement().getBoundingClientRect() : null
      }, pd.b.prototype.getAspectRatio = function(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const kd = dd.viewport;
        return this.getRenderWidth(Jd) * kd.width / (this.getRenderHeight(Jd) * kd.height)
      }, pd.b.prototype.getScreenAspectRatio = function() {
        return this.getRenderWidth(!0) / this.getRenderHeight(!0)
      }, pd.b.prototype._verifyPointerLock = function() {
        this._onPointerLockChange?.()
      })
    }
  },
  4e4: (dd, Jd, kd) => {
    var pd = kd(39874),
      Nd = kd(40007);
    let Wd = !1;
    Wd || (Wd = !0, (0, Nd.w)(), pd.b.prototype._loadFileAsync = async function(dd, Jd, kd) {
      return await new Promise(((pd, Nd) => {
        this._loadFile(dd, (dd => {
          pd(dd)
        }), void 0, Jd, kd, ((dd, Jd) => {
          Nd(Jd)
        }))
      }))
    })
  },
  39995: (dd, Jd, kd) => {
    (0, kd(39922).b)()
  },
  39922: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Wd
    });
    var pd = kd(39874);
    let Nd = !1;

    function Wd() {
      Nd || (Nd = !0, pd.b.prototype.getRenderPassNames = function() {
        return this._renderPassNames
      }, pd.b.prototype.getCurrentRenderPassName = function() {
        return this._renderPassNames[this.currentRenderPassId]
      }, pd.b.prototype.createRenderPassId = function(dd) {
        const Jd = ++pd.b._RenderPassIdCounter;
        return this._renderPassNames[Jd] = dd ?? "NONAME", Jd
      }, pd.b.prototype.releaseRenderPassId = function(dd) {
        this._renderPassNames[dd] = void 0;
        for (let Jd = 0; Jd < this.scenes.length; ++Jd) {
          const kd = this.scenes[Jd];
          for (let Jd = 0; Jd < kd.meshes.length; ++Jd) {
            const pd = kd.meshes[Jd];
            if (pd._releaseRenderPassId(dd), pd.rG)
              for (let Jd = 0; Jd < pd.rG.length; ++Jd) {
                pd.rG[Jd]._removeDrawWrapper(dd)
              }
          }
        }
        this._onReleaseRenderPassObservable?.notifyObservers(dd)
      })
    }
  },
  40045: (dd, Jd, kd) => {
    var pd = kd(40052),
      Nd = kd(39874);
    let Wd = !1;
    Wd || (Wd = !0, Nd.b.GetCompatibleTextureLoader = pd.c)
  },
  39931: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Wd
    });
    var pd = kd(39813);
    let Nd = !1;

    function Wd() {
      Nd || (Nd = !0, pd.ThinEngine.prototype.setAlphaMode = function(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this._alphaMode[kd] === dd) {
          if (!Jd) {
            const Jd = 0 === dd;
            this.depthCullingState.depthMask !== Jd && (this.depthCullingState.depthMask = Jd)
          }
          return
        }
        const pd = 0 === dd;
        this._alphaState.setAlphaBlend(!pd, kd), this._alphaState.setAlphaMode(dd, kd), Jd || (this.depthCullingState.depthMask = pd), this._alphaMode[kd] = dd
      })
    }
  },
  39941: (dd, Jd, kd) => {
    var pd = kd(39805),
      Nd = kd(38812),
      Wd = kd(39813),
      Pd = kd(39949),
      Zd = kd(39909);
    class gd extends Pd.e {
      setDepthStencilTexture(dd) {
        let Jd = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (super.setDepthStencilTexture(dd, Jd), !dd) return;
        const kd = this._engine,
          pd = this._context,
          Nd = dd._hardwareTexture;
        if (Nd && dd._autoMSAAManagement && this._MSAAFramebuffer) {
          const Jd = kd._currentFramebuffer;
          kd._bindUnboundFramebuffer(this._MSAAFramebuffer), pd.framebufferRenderbuffer(pd.FRAMEBUFFER, (0, Zd.c)(dd.format) ? pd.DEPTH_STENCIL_ATTACHMENT : pd.DEPTH_ATTACHMENT, pd.RENDERBUFFER, Nd.getMSAARenderBuffer()), kd._bindUnboundFramebuffer(Jd)
        }
      }
      constructor(dd, Jd, kd, pd, Nd) {
        super(dd, Jd, kd, pd), this._framebuffer = null, this._depthStencilBuffer = null, this._MSAAFramebuffer = null, this._colorTextureArray = null, this._depthStencilTextureArray = null, this._disposeOnlyFramebuffers = !1, this._currentLOD = 0, this._context = Nd
      }
      _cloneRenderTargetWrapper() {
        let dd;
        return this._colorTextureArray && this._depthStencilTextureArray ? (dd = this._engine.createMultiviewRenderTargetTexture(this.width, this.height), dd.texture.isReady = !0) : dd = super._cloneRenderTargetWrapper(), dd
      }
      _swapRenderTargetWrapper(dd) {
        super._swapRenderTargetWrapper(dd), dd._framebuffer = this._framebuffer, dd._depthStencilBuffer = this._depthStencilBuffer, dd._MSAAFramebuffer = this._MSAAFramebuffer, dd._colorTextureArray = this._colorTextureArray, dd._depthStencilTextureArray = this._depthStencilTextureArray, this._framebuffer = this._depthStencilBuffer = this._MSAAFramebuffer = this._colorTextureArray = this._depthStencilTextureArray = null
      }
      createDepthStencilTexture() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Jd = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          kd = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          Nd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          Wd = arguments.length > 5 ? arguments[5] : void 0;
        if (this._depthStencilBuffer) {
          const dd = this._engine,
            Jd = dd._currentFramebuffer,
            kd = this._context;
          dd._bindUnboundFramebuffer(this._framebuffer), kd.framebufferRenderbuffer(kd.FRAMEBUFFER, kd.DEPTH_STENCIL_ATTACHMENT, kd.RENDERBUFFER, null), kd.framebufferRenderbuffer(kd.FRAMEBUFFER, kd.DEPTH_ATTACHMENT, kd.RENDERBUFFER, null), kd.framebufferRenderbuffer(kd.FRAMEBUFFER, kd.STENCIL_ATTACHMENT, kd.RENDERBUFFER, null), dd._bindUnboundFramebuffer(Jd), kd.deleteRenderbuffer(this._depthStencilBuffer), this._depthStencilBuffer = null
        }
        return super.createDepthStencilTexture(dd, Jd, kd, pd, Nd, Wd)
      }
      shareDepth(dd) {
        super.shareDepth(dd);
        const Jd = this._context,
          kd = this._depthStencilBuffer,
          pd = dd._MSAAFramebuffer || dd._framebuffer,
          Nd = this._engine;
        dd._depthStencilBuffer && dd._depthStencilBuffer !== kd && Jd.deleteRenderbuffer(dd._depthStencilBuffer), dd._depthStencilBuffer = kd;
        const Wd = dd._generateStencilBuffer ? Jd.DEPTH_STENCIL_ATTACHMENT : Jd.DEPTH_ATTACHMENT;
        Nd._bindUnboundFramebuffer(pd), Jd.framebufferRenderbuffer(Jd.FRAMEBUFFER, Wd, Jd.RENDERBUFFER, kd), Nd._bindUnboundFramebuffer(null)
      }
      _bindTextureRenderTarget(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          kd = arguments.length > 2 ? arguments[2] : void 0,
          pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const Nd = dd._hardwareTexture;
        if (!Nd) return;
        const Wd = this._framebuffer,
          Pd = this._engine,
          Zd = Pd._currentFramebuffer;
        let gd;
        if (Pd._bindUnboundFramebuffer(Wd), Pd.uL > 1) {
          const Wd = this._context;
          gd = Wd["COLOR_ATTACHMENT" + Jd], dd.is2DArray || dd.is3D ? (kd = kd ?? this.layerIndices?.[Jd] ?? 0, Wd.framebufferTextureLayer(Wd.FRAMEBUFFER, gd, Nd.underlyingResource, pd, kd)) : dd.isCube ? (kd = kd ?? this.faceIndices?.[Jd] ?? 0, Wd.framebufferTexture2D(Wd.FRAMEBUFFER, gd, Wd.TEXTURE_CUBE_MAP_POSITIVE_X + kd, Nd.underlyingResource, pd)) : Wd.framebufferTexture2D(Wd.FRAMEBUFFER, gd, Wd.TEXTURE_2D, Nd.underlyingResource, pd)
        } else {
          const dd = this._context;
          gd = dd["COLOR_ATTACHMENT" + Jd + "_WEBGL"];
          const Wd = void 0 !== kd ? dd.TEXTURE_CUBE_MAP_POSITIVE_X + kd : dd.TEXTURE_2D;
          dd.framebufferTexture2D(dd.FRAMEBUFFER, gd, Wd, Nd.underlyingResource, pd)
        }
        if (dd._autoMSAAManagement && this._MSAAFramebuffer) {
          const dd = this._context;
          Pd._bindUnboundFramebuffer(this._MSAAFramebuffer), dd.framebufferRenderbuffer(dd.FRAMEBUFFER, gd, dd.RENDERBUFFER, Nd.getMSAARenderBuffer())
        }
        Pd._bindUnboundFramebuffer(Zd)
      }
      setTexture(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          kd = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        super.setTexture(dd, Jd, kd), this._bindTextureRenderTarget(dd, Jd)
      }
      setLayerAndFaceIndices(dd, Jd) {
        if (super.setLayerAndFaceIndices(dd, Jd), !this.textures || !this.layerIndices || !this.faceIndices) return;
        const kd = this._attachments?.length ?? this.textures.length;
        for (let pd = 0; pd < kd; pd++) {
          const dd = this.textures[pd];
          dd && (dd.is2DArray || dd.is3D ? this._bindTextureRenderTarget(dd, pd, this.layerIndices[pd]) : dd.isCube ? this._bindTextureRenderTarget(dd, pd, this.faceIndices[pd]) : this._bindTextureRenderTarget(dd, pd))
        }
      }
      setLayerAndFaceIndex() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Jd = arguments.length > 1 ? arguments[1] : void 0,
          kd = arguments.length > 2 ? arguments[2] : void 0;
        if (super.setLayerAndFaceIndex(dd, Jd, kd), !this.textures || !this.layerIndices || !this.faceIndices) return;
        const pd = this.textures[dd];
        pd.is2DArray || pd.is3D ? this._bindTextureRenderTarget(this.textures[dd], dd, this.layerIndices[dd]) : pd.isCube && this._bindTextureRenderTarget(this.textures[dd], dd, this.faceIndices[dd])
      }
      resolveMSAATextures() {
        const dd = this._engine,
          Jd = dd._currentFramebuffer;
        dd._bindUnboundFramebuffer(this._MSAAFramebuffer), super.resolveMSAATextures(), dd._bindUnboundFramebuffer(Jd)
      }
      dispose() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._disposeOnlyFramebuffers;
        const Jd = this._context;
        dd || (this._colorTextureArray && (this._context.deleteTexture(this._colorTextureArray), this._colorTextureArray = null), this._depthStencilTextureArray && (this._context.deleteTexture(this._depthStencilTextureArray), this._depthStencilTextureArray = null)), this._framebuffer && (Jd.deleteFramebuffer(this._framebuffer), this._framebuffer = null), this._depthStencilBuffer && (Jd.deleteRenderbuffer(this._depthStencilBuffer), this._depthStencilBuffer = null), this._MSAAFramebuffer && (Jd.deleteFramebuffer(this._MSAAFramebuffer), this._MSAAFramebuffer = null), super.dispose(dd)
      }
    }
    let Cd = !1;
    Cd || (Cd = !0, Wd.ThinEngine.prototype._createHardwareRenderTargetWrapper = function(dd, Jd, kd) {
      const pd = new gd(dd, Jd, kd, this, this._gl);
      return this._renderTargetWrapperCache.push(pd), pd
    }, Wd.ThinEngine.prototype.createRenderTargetTexture = function(dd, Jd) {
      const kd = this._createHardwareRenderTargetWrapper(!1, !1, dd);
      let pd, Nd, Wd = !0,
        Pd = !1,
        Zd = !1,
        gd = 1;
      void 0 !== Jd && "object" === typeof Jd && (Wd = Jd.generateDepthBuffer ?? !0, Pd = !!Jd.generateStencilBuffer, Zd = !!Jd.noColorAttachment, pd = Jd.colorAttachment, gd = Jd.samples ?? 1, Nd = Jd.label);
      const Cd = pd || (Zd ? null : this._createInternalTexture(dd, Jd, !0, 5)),
        Kd = dd.width || dd,
        od = dd.height || dd,
        ld = this._currentFramebuffer,
        Qd = this._gl,
        Ld = Qd.createFramebuffer();
      if (this._bindUnboundFramebuffer(Ld), kd._depthStencilBuffer = this._setupFramebufferDepthAttachments(Pd, Wd, Kd, od), !Cd || Cd.is2DArray || Cd.is3D || Qd.framebufferTexture2D(Qd.FRAMEBUFFER, Qd.COLOR_ATTACHMENT0, Qd.TEXTURE_2D, Cd._hardwareTexture.underlyingResource, 0), this._bindUnboundFramebuffer(ld), kd.label = Nd ?? "RenderTargetWrapper", kd._framebuffer = Ld, kd._generateDepthBuffer = Wd, kd._generateStencilBuffer = Pd, kd.setTextures(Cd), pd) {
        if (kd._samples = pd.samples, pd.samples > 1) {
          const dd = pd._hardwareTexture.getMSAARenderBuffer(0);
          kd._MSAAFramebuffer = Qd.createFramebuffer(), this._bindUnboundFramebuffer(kd._MSAAFramebuffer), Qd.framebufferRenderbuffer(Qd.FRAMEBUFFER, Qd.COLOR_ATTACHMENT0, Qd.RENDERBUFFER, dd), this._bindUnboundFramebuffer(null)
        }
      } else this.updateRenderTargetTextureSampleCount(kd, gd);
      return kd
    }, Wd.ThinEngine.prototype._createDepthStencilTexture = function(dd, Jd, kd) {
      const Wd = this._gl,
        Pd = dd.layers || 0,
        gd = dd.depth || 0;
      let Cd = Wd.TEXTURE_2D;
      0 !== Pd ? Cd = Wd.TEXTURE_2D_ARRAY : 0 !== gd && (Cd = Wd.TEXTURE_3D);
      const Kd = new pd.b(this, 12);
      if (Kd.label = Jd.label, !this._caps.depthTextureExtension) return Nd.c.Error("Depth texture is not supported by your browser or hardware."), Kd;
      const od = {
        bilinearFiltering: !1,
        comparisonFunction: 0,
        generateStencil: !1,
        ...Jd
      };
      if (this._bindTextureDirectly(Cd, Kd, !0), this._setupDepthStencilTexture(Kd, dd, 0 !== od.comparisonFunction && od.bilinearFiltering, od.comparisonFunction, od.samples), void 0 !== od.depthTextureFormat) {
        if (15 !== od.depthTextureFormat && 16 !== od.depthTextureFormat && 17 !== od.depthTextureFormat && 13 !== od.depthTextureFormat && 14 !== od.depthTextureFormat && 18 !== od.depthTextureFormat) return Nd.c.Error(`Depth texture ${od.depthTextureFormat} format is not supported.`), Kd;
        Kd.format = od.depthTextureFormat
      } else Kd.format = od.generateStencil ? 13 : 16;
      const ld = (0, Zd.c)(Kd.format),
        Qd = this._getWebGLTextureTypeFromDepthTextureFormat(Kd.format),
        Ld = ld ? Wd.DEPTH_STENCIL : Wd.DEPTH_COMPONENT,
        Od = this._getInternalFormatFromDepthTextureFormat(Kd.format, !0, ld);
      return Kd.is2DArray ? Wd.texImage3D(Cd, 0, Od, Kd.width, Kd.height, Pd, 0, Ld, Qd, null) : Kd.is3D ? Wd.texImage3D(Cd, 0, Od, Kd.width, Kd.height, gd, 0, Ld, Qd, null) : Wd.texImage2D(Cd, 0, Od, Kd.width, Kd.height, 0, Ld, Qd, null), this._bindTextureDirectly(Cd, null), this._internalTexturesCache.push(Kd), kd._depthStencilBuffer && (Wd.deleteRenderbuffer(kd._depthStencilBuffer), kd._depthStencilBuffer = null), this._bindUnboundFramebuffer(kd._MSAAFramebuffer ?? kd._framebuffer), kd._generateStencilBuffer = ld, kd._depthStencilTextureWithStencil = ld, kd._depthStencilBuffer = this._setupFramebufferDepthAttachments(kd._generateStencilBuffer, kd._generateDepthBuffer, kd.width, kd.height, kd.samples, Kd.format), this._bindUnboundFramebuffer(null), Kd
    }, Wd.ThinEngine.prototype.updateRenderTargetTextureSampleCount = function(dd, Jd) {
      if (this.uL < 2 || !dd) return 1;
      if (dd.samples === Jd) return Jd;
      const kd = this._gl;
      Jd = Math.min(Jd, this.getCaps().maxMSAASamples), dd._depthStencilBuffer && (kd.deleteRenderbuffer(dd._depthStencilBuffer), dd._depthStencilBuffer = null), dd._MSAAFramebuffer && (kd.deleteFramebuffer(dd._MSAAFramebuffer), dd._MSAAFramebuffer = null);
      const pd = dd.texture?._hardwareTexture;
      if (pd?.releaseMSAARenderBuffers(), dd.texture && Jd > 1 && "function" === typeof kd.renderbufferStorageMultisample) {
        const Nd = kd.createFramebuffer();
        if (!Nd) throw new Error("Unable to create multi sampled framebuffer");
        dd._MSAAFramebuffer = Nd, this._bindUnboundFramebuffer(dd._MSAAFramebuffer);
        const Wd = this._createRenderBuffer(dd.texture.width, dd.texture.height, Jd, -1, this._getRGBABufferInternalSizedFormat(dd.texture.type, dd.texture.format, dd.texture._useSRGBBuffer), kd.COLOR_ATTACHMENT0, !1);
        if (!Wd) throw new Error("Unable to create multi sampled framebuffer");
        pd?.addMSAARenderBuffer(Wd)
      }
      this._bindUnboundFramebuffer(dd._MSAAFramebuffer ?? dd._framebuffer), dd.texture && (dd.texture.samples = Jd), dd._samples = Jd;
      const Nd = dd._depthStencilTexture ? dd._depthStencilTexture.format : void 0;
      return dd._depthStencilBuffer = this._setupFramebufferDepthAttachments(dd._generateStencilBuffer, dd._generateDepthBuffer, dd.width, dd.height, Jd, Nd), this._bindUnboundFramebuffer(null), Jd
    }, Wd.ThinEngine.prototype._setupDepthStencilTexture = function(dd, Jd, kd, pd) {
      let Nd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1;
      const Wd = Jd.width ?? Jd,
        Pd = Jd.height ?? Jd,
        Zd = Jd.layers || 0,
        gd = Jd.depth || 0;
      dd.baseWidth = Wd, dd.baseHeight = Pd, dd.width = Wd, dd.height = Pd, dd.is2DArray = Zd > 0, dd.depth = Zd || gd, dd.isReady = !0, dd.samples = Nd, dd.generateMipMaps = !1, dd.samplingMode = kd ? 2 : 1, dd.type = 0, dd._comparisonFunction = pd;
      const Cd = this._gl,
        Kd = this._getTextureTarget(dd),
        od = this._getSamplingParameters(dd.samplingMode, !1);
      Cd.texParameteri(Kd, Cd.TEXTURE_MAG_FILTER, od.mag), Cd.texParameteri(Kd, Cd.TEXTURE_MIN_FILTER, od.min), Cd.texParameteri(Kd, Cd.TEXTURE_WRAP_S, Cd.CLAMP_TO_EDGE), Cd.texParameteri(Kd, Cd.TEXTURE_WRAP_T, Cd.CLAMP_TO_EDGE), this.uL > 1 && (0 === pd ? (Cd.texParameteri(Kd, Cd.TEXTURE_COMPARE_FUNC, 515), Cd.texParameteri(Kd, Cd.TEXTURE_COMPARE_MODE, Cd.NONE)) : (Cd.texParameteri(Kd, Cd.TEXTURE_COMPARE_FUNC, pd), Cd.texParameteri(Kd, Cd.TEXTURE_COMPARE_MODE, Cd.COMPARE_REF_TO_TEXTURE)))
    })
  },
  39791: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => pd.d
    });
    var pd = kd(39799);
    (0, kd(39931).b)();
    var Nd = kd(39813);
    let Wd = !1;
    ! function() {
      if (Wd) return;
      Wd = !0;
      const dd = new WeakMap,
        Jd = new WeakMap,
        kd = new WeakMap,
        pd = new WeakMap;
      Nd.ThinEngine.prototype.getAlphaToCoverage = function() {
        return dd.get(this) ?? !1
      }, Nd.ThinEngine.prototype.setAlphaToCoverage = function(kd) {
        (dd.get(this) !== kd || this._gl && Jd.get(this) !== this._gl) && (dd.set(this, kd), this._gl && (kd ? this._gl.enable(this._gl.SAMPLE_ALPHA_TO_COVERAGE) : this._gl.disable(this._gl.SAMPLE_ALPHA_TO_COVERAGE), Jd.set(this, this._gl)))
      }, Object.defineProperty(Nd.ThinEngine.prototype, "currentSampleCount", {
        get: function() {
          return this._currentRenderTarget ? this._currentRenderTarget.samples : this._gl ? (pd.get(this) !== this._gl && (kd.set(this, this._gl.getContextAttributes()?.antialias ? Math.max(1, this._gl.getParameter(this._gl.SAMPLES)) : 1), pd.set(this, this._gl)), kd.get(this)) : 1
        },
        enumerable: !1,
        configurable: !0
      })
    }();
    var Pd = kd(39805),
      Zd = kd(38812),
      gd = kd(39902);
    let Cd = !1;
    ! function() {
      function dd(dd, Jd, kd, pd) {
        let Nd, Wd = 1;
        1 === pd ? Nd = new Float32Array(Jd * kd * 4) : 2 === pd ? (Nd = new Uint16Array(Jd * kd * 4), Wd = 15360) : Nd = 7 === pd ? new Uint32Array(Jd * kd * 4) : new Uint8Array(Jd * kd * 4);
        for (let Pd = 0; Pd < Jd; Pd++)
          for (let pd = 0; pd < kd; pd++) {
            const kd = 3 * (pd * Jd + Pd),
              Zd = 4 * (pd * Jd + Pd);
            Nd[Zd + 0] = dd[kd + 0], Nd[Zd + 1] = dd[kd + 1], Nd[Zd + 2] = dd[kd + 2], Nd[Zd + 3] = Wd
          }
        return Nd
      }

      function Jd(dd) {
        return function(Jd, kd, pd, Nd, Wd, Zd, gd, Cd) {
          let Kd = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
            od = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
          const ld = dd ? this._gl.TEXTURE_3D : this._gl.TEXTURE_2D_ARRAY,
            Qd = dd ? 10 : 11,
            Ld = new Pd.b(this, Qd);
          Ld.baseWidth = kd, Ld.baseHeight = pd, Ld.baseDepth = Nd, Ld.width = kd, Ld.height = pd, Ld.depth = Nd, Ld.format = Wd, Ld.type = od, Ld.generateMipMaps = Zd, Ld.samplingMode = Cd, dd ? Ld.is3D = !0 : Ld.is2DArray = !0, this._doNotHandleContextLost || (Ld._bufferView = Jd), dd ? this.updateRawTexture3D(Ld, Jd, Wd, gd, Kd, od) : this.updateRawTexture2DArray(Ld, Jd, Wd, gd, Kd, od), this._bindTextureDirectly(ld, Ld, !0);
          const Od = this._getSamplingParameters(Cd, Zd);
          return this._gl.texParameteri(ld, this._gl.TEXTURE_MAG_FILTER, Od.mag), this._gl.texParameteri(ld, this._gl.TEXTURE_MIN_FILTER, Od.min), Zd && this._gl.generateMipmap(ld), this._bindTextureDirectly(ld, null), this._internalTexturesCache.push(Ld), Ld
        }
      }

      function kd(dd) {
        return function(Jd, kd, pd, Nd) {
          let Wd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            Pd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
          const Zd = dd ? this._gl.TEXTURE_3D : this._gl.TEXTURE_2D_ARRAY,
            gd = this._getWebGLTextureType(Pd),
            Cd = this._getInternalFormat(pd),
            Kd = this._getRGBABufferInternalSizedFormat(Pd, pd);
          this._bindTextureDirectly(Zd, Jd, !0), this._unpackFlipY(void 0 === Nd || !!Nd), this._doNotHandleContextLost || (Jd._bufferView = kd, Jd.format = pd, Jd.invertY = Nd, Jd._compression = Wd), Jd.width % 4 !== 0 && this._gl.pixelStorei(this._gl.UNPACK_ALIGNMENT, 1), Wd && kd ? this._gl.compressedTexImage3D(Zd, 0, this.getCaps().s3tc[Wd], Jd.width, Jd.height, Jd.depth, 0, kd) : this._gl.texImage3D(Zd, 0, Kd, Jd.width, Jd.height, Jd.depth, 0, Cd, gd, kd), Jd.generateMipMaps && this._gl.generateMipmap(Zd), this._bindTextureDirectly(Zd, null), Jd.isReady = !0
        }
      }
      Cd || (Cd = !0, Nd.ThinEngine.prototype.updateRawTexture = function(dd, Jd, kd, pd) {
        let Nd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          Wd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          Pd = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        if (!dd) return;
        const Zd = this._getRGBABufferInternalSizedFormat(Wd, kd, Pd),
          gd = this._getInternalFormat(kd),
          Cd = this._getWebGLTextureType(Wd);
        this._bindTextureDirectly(this._gl.TEXTURE_2D, dd, !0), this._unpackFlipY(void 0 === pd || !!pd), this._doNotHandleContextLost || (dd._bufferView = Jd, dd.format = kd, dd.type = Wd, dd.invertY = pd, dd._compression = Nd), dd.width % 4 !== 0 && this._gl.pixelStorei(this._gl.UNPACK_ALIGNMENT, 1), Nd && Jd ? this._gl.compressedTexImage2D(this._gl.TEXTURE_2D, 0, this.getCaps().s3tc[Nd], dd.width, dd.height, 0, Jd) : this._gl.texImage2D(this._gl.TEXTURE_2D, 0, Zd, dd.width, dd.height, 0, gd, Cd, Jd), dd.generateMipMaps && this._gl.generateMipmap(this._gl.TEXTURE_2D), this._bindTextureDirectly(this._gl.TEXTURE_2D, null), dd.isReady = !0
      }, Nd.ThinEngine.prototype.createRawTexture = function(dd, Jd, kd, pd, Nd, Wd, Zd) {
        let gd = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          Cd = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
          Kd = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const od = new Pd.b(this, 3);
        od.baseWidth = Jd, od.baseHeight = kd, od.width = Jd, od.height = kd, od.format = pd, od.generateMipMaps = Nd, od.samplingMode = Zd, od.invertY = Wd, od._compression = gd, od.type = Cd, od._useSRGBBuffer = this._getUseSRGBBuffer(Kd, !Nd), this._doNotHandleContextLost || (od._bufferView = dd), this.updateRawTexture(od, dd, pd, Wd, gd, Cd, od._useSRGBBuffer), this._bindTextureDirectly(this._gl.TEXTURE_2D, od, !0);
        const ld = this._getSamplingParameters(Zd, Nd);
        return this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MAG_FILTER, ld.mag), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MIN_FILTER, ld.min), Nd && this._gl.generateMipmap(this._gl.TEXTURE_2D), this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._internalTexturesCache.push(od), od
      }, Nd.ThinEngine.prototype.createRawCubeTexture = function(dd, Jd, kd, pd, Nd, Wd, Cd) {
        let Kd = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null;
        const od = this._gl,
          ld = new Pd.b(this, 8);
        ld.isCube = !0, ld.format = kd, ld.type = pd, this._doNotHandleContextLost || (ld._bufferViewArray = dd);
        const Qd = this._getWebGLTextureType(pd);
        let Ld = this._getInternalFormat(kd);
        Ld === od.RGB && (Ld = od.RGBA), Qd !== od.FLOAT || this._caps.textureFloatLinearFiltering ? Qd !== this._gl.HALF_FLOAT_OES || this._caps.textureHalfFloatLinearFiltering ? Qd !== od.FLOAT || this._caps.textureFloatRender ? Qd !== od.HALF_FLOAT || this._caps.colorBufferFloat || (Nd = !1, Zd.c.Warn("Render to half float textures is not supported. Mipmap generation forced to false.")) : (Nd = !1, Zd.c.Warn("Render to float textures is not supported. Mipmap generation forced to false.")) : (Nd = !1, Cd = 1, Zd.c.Warn("Half float texture filtering is not supported. Mipmap generation and sampling mode are forced to false and TEXTURE_NEAREST_SAMPLINGMODE, respectively.")) : (Nd = !1, Cd = 1, Zd.c.Warn("Float texture filtering is not supported. Mipmap generation and sampling mode are forced to false and TEXTURE_NEAREST_SAMPLINGMODE, respectively."));
        const Od = Jd,
          ed = Od;
        ld.width = Od, ld.height = ed, ld.invertY = Wd, ld._compression = Kd;
        if (!this.needPOTTextures || (0, gd.f)(ld.width) && (0, gd.f)(ld.height) || (Nd = !1), dd) this.updateRawCubeTexture(ld, dd, kd, pd, Wd, Kd);
        else {
          const dd = this._getRGBABufferInternalSizedFormat(pd),
            Jd = 0;
          this._bindTextureDirectly(od.TEXTURE_CUBE_MAP, ld, !0);
          for (let kd = 0; kd < 6; kd++) Kd ? od.compressedTexImage2D(od.TEXTURE_CUBE_MAP_POSITIVE_X + kd, Jd, this.getCaps().s3tc[Kd], ld.width, ld.height, 0, void 0) : od.texImage2D(od.TEXTURE_CUBE_MAP_POSITIVE_X + kd, Jd, dd, ld.width, ld.height, 0, Ld, Qd, null);
          this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null)
        }
        this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, ld, !0), dd && Nd && this._gl.generateMipmap(this._gl.TEXTURE_CUBE_MAP);
        const Rd = this._getSamplingParameters(Cd, Nd);
        return od.texParameteri(od.TEXTURE_CUBE_MAP, od.TEXTURE_MAG_FILTER, Rd.mag), od.texParameteri(od.TEXTURE_CUBE_MAP, od.TEXTURE_MIN_FILTER, Rd.min), od.texParameteri(od.TEXTURE_CUBE_MAP, od.TEXTURE_WRAP_S, od.CLAMP_TO_EDGE), od.texParameteri(od.TEXTURE_CUBE_MAP, od.TEXTURE_WRAP_T, od.CLAMP_TO_EDGE), this._bindTextureDirectly(od.TEXTURE_CUBE_MAP, null), ld.generateMipMaps = Nd, ld.samplingMode = Cd, ld.isReady = !0, ld
      }, Nd.ThinEngine.prototype.updateRawCubeTexture = function(Jd, kd, pd, Nd, Wd) {
        let Pd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          Zd = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        Jd._bufferViewArray = kd, Jd.format = pd, Jd.type = Nd, Jd.invertY = Wd, Jd._compression = Pd;
        const Cd = this._gl,
          Kd = this._getWebGLTextureType(Nd);
        let od = this._getInternalFormat(pd);
        const ld = this._getRGBABufferInternalSizedFormat(Nd);
        let Qd = !1;
        od === Cd.RGB && (od = Cd.RGBA, Qd = !0), this._bindTextureDirectly(Cd.TEXTURE_CUBE_MAP, Jd, !0), this._unpackFlipY(void 0 === Wd || !!Wd), Jd.width % 4 !== 0 && Cd.pixelStorei(Cd.UNPACK_ALIGNMENT, 1);
        for (let gd = 0; gd < 6; gd++) {
          let pd = kd[gd];
          Pd ? Cd.compressedTexImage2D(Cd.TEXTURE_CUBE_MAP_POSITIVE_X + gd, Zd, this.getCaps().s3tc[Pd], Jd.width, Jd.height, 0, pd) : (Qd && (pd = dd(pd, Jd.width, Jd.height, Nd)), Cd.texImage2D(Cd.TEXTURE_CUBE_MAP_POSITIVE_X + gd, Zd, ld, Jd.width, Jd.height, 0, od, Kd, pd))
        }(!this.needPOTTextures || (0, gd.f)(Jd.width) && (0, gd.f)(Jd.height)) && Jd.generateMipMaps && 0 === Zd && this._gl.generateMipmap(this._gl.TEXTURE_CUBE_MAP), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), Jd.isReady = !0
      }, Nd.ThinEngine.prototype.createRawCubeTextureFromUrl = function(Jd, kd, pd, Nd, Wd, Pd, Zd, gd) {
        let Cd = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          Kd = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          od = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 3,
          ld = arguments.length > 11 && void 0 !== arguments[11] && arguments[11];
        const Qd = this._gl,
          Ld = this.createRawCubeTexture(null, pd, Nd, Wd, !Pd, ld, od, null);
        kd?.addPendingData(Ld), Ld.url = Jd, Ld.isReady = !1, this._internalTexturesCache.push(Ld);
        const Od = (dd, Jd) => {
            kd?.removePendingData(Ld), Kd && Kd(dd ? dd.status + " " + dd.statusText : "Failed to parse texture data", Jd)
          },
          ed = async Jd => {
            if (!Ld._hardwareTexture) return;
            const pd = Zd(Jd);
            if (!pd) return;
            const Pd = pd instanceof Promise ? await pd : pd,
              Kd = Ld.width;
            if (gd) {
              const Jd = this._getWebGLTextureType(Wd);
              let kd = this._getInternalFormat(Nd);
              const pd = this._getRGBABufferInternalSizedFormat(Wd);
              let Zd = !1;
              kd === Qd.RGB && (kd = Qd.RGBA, Zd = !0), this._bindTextureDirectly(Qd.TEXTURE_CUBE_MAP, Ld, !0), this._unpackFlipY(!1);
              const Cd = gd(Pd);
              for (let Nd = 0; Nd < Cd.length; Nd++) {
                const Pd = Kd >> Nd;
                for (let gd = 0; gd < 6; gd++) {
                  let Kd = Cd[Nd][gd];
                  Zd && (Kd = dd(Kd, Pd, Pd, Wd)), Qd.texImage2D(gd, Nd, pd, Pd, Pd, 0, kd, Jd, Kd)
                }
              }
              this._bindTextureDirectly(Qd.TEXTURE_CUBE_MAP, null)
            } else this.updateRawCubeTexture(Ld, Pd, Nd, Wd, ld);
            Ld.isReady = !0, kd?.removePendingData(Ld), Ld.onLoadedObservable.notifyObservers(Ld), Ld.onLoadedObservable.clear(), Cd && Cd()
          };
        return this._loadFile(Jd, (dd => {
          ed(dd).catch((dd => {
            Od(void 0, dd)
          }))
        }), void 0, kd?.offlineProvider, !0, Od), Ld
      }, Nd.ThinEngine.prototype.createRawTexture2DArray = Jd(!1), Nd.ThinEngine.prototype.createRawTexture3D = Jd(!0), Nd.ThinEngine.prototype.updateRawTexture2DArray = kd(!1), Nd.ThinEngine.prototype.updateRawTexture3D = kd(!0))
    }();
    var Kd = kd(39851);
    let od = !1;
    od || (od = !0, Nd.ThinEngine.prototype._readTexturePixelsSync = function(dd, Jd, kd) {
      let pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1,
        Nd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        Wd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        Pd = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
        Zd = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        gd = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
        Cd = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
      const od = this._gl;
      if (!od) throw new Error("Engine does not have gl rendering context.");
      if (!this._dummyFramebuffer) {
        const dd = od.createFramebuffer();
        if (!dd) throw new Error("Unable to create dummy framebuffer");
        this._dummyFramebuffer = dd
      }
      od.bindFramebuffer(od.FRAMEBUFFER, this._dummyFramebuffer), pd > -1 && (dd.is2DArray || dd.is3D) ? od.framebufferTextureLayer(od.FRAMEBUFFER, od.COLOR_ATTACHMENT0, dd._hardwareTexture?.underlyingResource, Nd, pd) : pd > -1 ? od.framebufferTexture2D(od.FRAMEBUFFER, od.COLOR_ATTACHMENT0, od.TEXTURE_CUBE_MAP_POSITIVE_X + pd, dd._hardwareTexture?.underlyingResource, Nd) : od.framebufferTexture2D(od.FRAMEBUFFER, od.COLOR_ATTACHMENT0, od.TEXTURE_2D, dd._hardwareTexture?.underlyingResource, Nd);
      let ld = void 0 !== dd.type ? this._getWebGLTextureType(dd.type) : od.UNSIGNED_BYTE;
      return Zd ? Wd || (Wd = (0, Kd.o)(dd.type, 4 * Jd * kd)) : ld === od.UNSIGNED_BYTE ? (Wd || (Wd = new Uint8Array(4 * Jd * kd)), ld = od.UNSIGNED_BYTE) : (Wd || (Wd = new Float32Array(4 * Jd * kd)), ld = od.FLOAT), Pd && this.flushFramebuffer(), od.readPixels(gd, Cd, Jd, kd, od.RGBA, ld, Wd), od.bindFramebuffer(od.FRAMEBUFFER, this._currentFramebuffer), Wd
    }, Nd.ThinEngine.prototype._readTexturePixels = function(dd, Jd, kd) {
      let pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1,
        Nd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        Wd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        Pd = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
        Zd = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        gd = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
        Cd = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
      return Promise.resolve(this._readTexturePixelsSync(dd, Jd, kd, pd, Nd, Wd, Pd, Zd, gd, Cd))
    }), (0, kd(39933).e)();
    let ld = !1;
    ld || (ld = !0, Nd.ThinEngine.prototype._createDepthStencilCubeTexture = function(dd, Jd) {
      const kd = new Pd.b(this, 12);
      if (kd.isCube = !0, 1 === this.uL) return Zd.c.Error("Depth cube texture is not supported by WebGL 1."), kd;
      const pd = {
          bilinearFiltering: !1,
          comparisonFunction: 0,
          generateStencil: !1,
          ...Jd
        },
        Nd = this._gl;
      this._bindTextureDirectly(Nd.TEXTURE_CUBE_MAP, kd, !0), this._setupDepthStencilTexture(kd, dd, pd.bilinearFiltering, pd.comparisonFunction);
      for (let Wd = 0; Wd < 6; Wd++) pd.generateStencil ? Nd.texImage2D(Nd.TEXTURE_CUBE_MAP_POSITIVE_X + Wd, 0, Nd.DEPTH24_STENCIL8, dd, dd, 0, Nd.DEPTH_STENCIL, Nd.UNSIGNED_INT_24_8, null) : Nd.texImage2D(Nd.TEXTURE_CUBE_MAP_POSITIVE_X + Wd, 0, Nd.DEPTH_COMPONENT24, dd, dd, 0, Nd.DEPTH_COMPONENT, Nd.UNSIGNED_INT, null);
      return this._bindTextureDirectly(Nd.TEXTURE_CUBE_MAP, null), this._internalTexturesCache.push(kd), kd
    }, Nd.ThinEngine.prototype._setCubeMapTextureParams = function(dd, Jd, kd) {
      const pd = this._gl;
      pd.texParameteri(pd.TEXTURE_CUBE_MAP, pd.TEXTURE_MAG_FILTER, pd.LINEAR), pd.texParameteri(pd.TEXTURE_CUBE_MAP, pd.TEXTURE_MIN_FILTER, Jd ? pd.LINEAR_MIPMAP_LINEAR : pd.LINEAR), pd.texParameteri(pd.TEXTURE_CUBE_MAP, pd.TEXTURE_WRAP_S, pd.CLAMP_TO_EDGE), pd.texParameteri(pd.TEXTURE_CUBE_MAP, pd.TEXTURE_WRAP_T, pd.CLAMP_TO_EDGE), dd.samplingMode = Jd ? 3 : 2, Jd && this.getCaps().textureMaxLevel && void 0 !== kd && kd > 0 && (pd.texParameteri(pd.TEXTURE_CUBE_MAP, pd.TEXTURE_MAX_LEVEL, kd), dd._maxLodLevel = kd), this._bindTextureDirectly(pd.TEXTURE_CUBE_MAP, null)
    }, Nd.ThinEngine.prototype.createCubeTexture = function(dd, Jd, kd, pd) {
      let Nd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        Wd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        Pd = arguments.length > 6 ? arguments[6] : void 0,
        Cd = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        Kd = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        od = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
        ld = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
        Qd = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
        Ld = arguments.length > 13 && void 0 !== arguments[13] && arguments[13],
        Od = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : null;
      const ed = this._gl;
      return this.createCubeTextureBase(dd, Jd, kd, !!pd, Nd, Wd, Pd, Cd, Kd, od, ld, Qd, (dd => this._bindTextureDirectly(ed.TEXTURE_CUBE_MAP, dd, !0)), ((dd, Jd) => {
        const kd = this.needPOTTextures ? (0, gd.e)(Jd[0].width, this._caps.maxCubemapTextureSize) : Jd[0].width,
          Wd = kd,
          Cd = [ed.TEXTURE_CUBE_MAP_POSITIVE_X, ed.TEXTURE_CUBE_MAP_POSITIVE_Y, ed.TEXTURE_CUBE_MAP_POSITIVE_Z, ed.TEXTURE_CUBE_MAP_NEGATIVE_X, ed.TEXTURE_CUBE_MAP_NEGATIVE_Y, ed.TEXTURE_CUBE_MAP_NEGATIVE_Z];
        this._bindTextureDirectly(ed.TEXTURE_CUBE_MAP, dd, !0), this._unpackFlipY(!1);
        const Kd = Pd ? this._getInternalFormat(Pd, dd._useSRGBBuffer) : dd._useSRGBBuffer ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : ed.RGBA;
        let od = Pd ? this._getInternalFormat(Pd) : ed.RGBA;
        dd._useSRGBBuffer && 1 === this.uL && (od = Kd);
        for (let pd = 0; pd < Cd.length; pd++)
          if (Jd[pd].width !== kd || Jd[pd].height !== Wd) {
            if (this._prepareWorkingCanvas(), !this._workingCanvas || !this._workingContext) return void Zd.c.Warn("Cannot create canvas to resize texture.");
            this._workingCanvas.width = kd, this._workingCanvas.height = Wd, this._workingContext.drawImage(Jd[pd], 0, 0, Jd[pd].width, Jd[pd].height, 0, 0, kd, Wd), ed.texImage2D(Cd[pd], 0, Kd, od, ed.UNSIGNED_BYTE, this._workingCanvas)
          } else ed.texImage2D(Cd[pd], 0, Kd, od, ed.UNSIGNED_BYTE, Jd[pd]);
        pd || ed.generateMipmap(ed.TEXTURE_CUBE_MAP), this._setCubeMapTextureParams(dd, !pd), dd.width = kd, dd.height = Wd, dd.isReady = !0, Pd && (dd.format = Pd), dd.onLoadedObservable.notifyObservers(dd), dd.onLoadedObservable.clear(), Nd && Nd()
      }), !!Ld, Od)
    }, Nd.ThinEngine.prototype.generateMipMapsForCubemap = function(dd) {
      let Jd = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (dd.generateMipMaps) {
        const kd = this._gl;
        this._bindTextureDirectly(kd.TEXTURE_CUBE_MAP, dd, !0), kd.generateMipmap(kd.TEXTURE_CUBE_MAP), Jd && this._bindTextureDirectly(kd.TEXTURE_CUBE_MAP, null)
      }
    });
    kd(39941);
    let Qd = !1;
    Qd || (Qd = !0, Nd.ThinEngine.prototype.setDepthStencilTexture = function(dd, Jd, kd, pd) {
      void 0 !== dd && (Jd && (this._boundUniforms[dd] = Jd), kd && kd.depthStencilTexture ? this._setTexture(dd, kd, !1, !0, pd) : this._setTexture(dd, null, void 0, void 0, pd))
    });
    let Ld = !1;
    Ld || (Ld = !0, Nd.ThinEngine.prototype.createRenderTargetCubeTexture = function(dd, Jd) {
      const kd = this._createHardwareRenderTargetWrapper(!1, !0, dd),
        pd = {
          generateMipMaps: !0,
          generateDepthBuffer: !0,
          generateStencilBuffer: !1,
          type: 0,
          samplingMode: 3,
          format: 5,
          ...Jd
        };
      pd.generateStencilBuffer = pd.generateDepthBuffer && pd.generateStencilBuffer, (1 !== pd.type || this._caps.textureFloatLinearFiltering) && (2 !== pd.type || this._caps.textureHalfFloatLinearFiltering) || (pd.samplingMode = 1);
      const Nd = this._gl,
        Wd = new Pd.b(this, 5);
      this._bindTextureDirectly(Nd.TEXTURE_CUBE_MAP, Wd, !0);
      const gd = this._getSamplingParameters(pd.samplingMode, pd.generateMipMaps);
      1 !== pd.type || this._caps.textureFloat || (pd.type = 0, Zd.c.Warn("Float textures are not supported. Cube render target forced to TEXTURETYPE_UNESIGNED_BYTE type")), Nd.texParameteri(Nd.TEXTURE_CUBE_MAP, Nd.TEXTURE_MAG_FILTER, gd.mag), Nd.texParameteri(Nd.TEXTURE_CUBE_MAP, Nd.TEXTURE_MIN_FILTER, gd.min), Nd.texParameteri(Nd.TEXTURE_CUBE_MAP, Nd.TEXTURE_WRAP_S, Nd.CLAMP_TO_EDGE), Nd.texParameteri(Nd.TEXTURE_CUBE_MAP, Nd.TEXTURE_WRAP_T, Nd.CLAMP_TO_EDGE);
      for (let Pd = 0; Pd < 6; Pd++) Nd.texImage2D(Nd.TEXTURE_CUBE_MAP_POSITIVE_X + Pd, 0, this._getRGBABufferInternalSizedFormat(pd.type, pd.format), dd, dd, 0, this._getInternalFormat(pd.format), this._getWebGLTextureType(pd.type), null);
      const Cd = Nd.createFramebuffer();
      return this._bindUnboundFramebuffer(Cd), kd._depthStencilBuffer = this._setupFramebufferDepthAttachments(pd.generateStencilBuffer, pd.generateDepthBuffer, dd, dd), pd.generateMipMaps && Nd.generateMipmap(Nd.TEXTURE_CUBE_MAP), this._bindTextureDirectly(Nd.TEXTURE_CUBE_MAP, null), this._bindUnboundFramebuffer(null), kd._framebuffer = Cd, kd._generateDepthBuffer = pd.generateDepthBuffer, kd._generateStencilBuffer = pd.generateStencilBuffer, Wd.width = dd, Wd.height = dd, Wd.isReady = !0, Wd.isCube = !0, Wd.samples = 1, Wd.generateMipMaps = pd.generateMipMaps, Wd.samplingMode = pd.samplingMode, Wd.type = pd.type, Wd.format = pd.format, this._internalTexturesCache.push(Wd), kd.setTextures(Wd), kd
    });
    var Od = kd(39952),
      ed = kd(39957);
    let Rd = !1;
    Rd || (Rd = !0, Nd.ThinEngine.prototype.createPrefilteredCubeTexture = function(dd, Jd, pd, Nd) {
      let Wd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        gd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        Cd = arguments.length > 6 ? arguments[6] : void 0,
        Kd = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        od = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
        ld = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null;
      return this.createCubeTexture(dd, Jd, null, !1, (async dd => {
        if (!dd) return void(Wd && Wd(null));
        const gd = dd.texture;
        if (od ? dd.info.sphericalPolynomial && (gd._sphericalPolynomial = dd.info.sphericalPolynomial) : gd._sphericalPolynomial = gd._sphericalPolynomial ?? new Od.f, gd._source = 9, this.getCaps().textureLOD) return void(Wd && Wd(gd));
        const Cd = this._gl,
          Kd = dd.width;
        if (!Kd) return;
        const {
          DDSTools: ld
        } = await kd.e(297).then((() => kd(41719))), Qd = [];
        for (let kd = 0; kd < 3; kd++) {
          const Wd = 1 - kd / 2,
            od = Nd,
            Ld = Math.log2(Kd) * pd + Nd,
            Od = od + (Ld - od) * Wd,
            Rd = Math.round(Math.min(Math.max(Od, 0), Ld)),
            Id = new Pd.b(this, 2);
          if (Id.type = gd.type, Id.format = gd.format, Id.width = Math.pow(2, Math.max(Math.log2(Kd) - Rd, 0)), Id.height = Id.width, Id.isCube = !0, Id._cachedWrapU = 0, Id._cachedWrapV = 0, this._bindTextureDirectly(Cd.TEXTURE_CUBE_MAP, Id, !0), Id.samplingMode = 2, Cd.texParameteri(Cd.TEXTURE_CUBE_MAP, Cd.TEXTURE_MAG_FILTER, Cd.LINEAR), Cd.texParameteri(Cd.TEXTURE_CUBE_MAP, Cd.TEXTURE_MIN_FILTER, Cd.LINEAR), Cd.texParameteri(Cd.TEXTURE_CUBE_MAP, Cd.TEXTURE_WRAP_S, Cd.CLAMP_TO_EDGE), Cd.texParameteri(Cd.TEXTURE_CUBE_MAP, Cd.TEXTURE_WRAP_T, Cd.CLAMP_TO_EDGE), dd.isDDS) {
            const Jd = dd.info,
              kd = dd.data;
            this._unpackFlipY(Jd.isCompressed), ld.UploadDDSLevels(this, Id, kd, Jd, !0, 6, Rd)
          } else Zd.c.Warn("DDS is the only prefiltered cube map supported so far.");
          this._bindTextureDirectly(Cd.TEXTURE_CUBE_MAP, null);
          const Gd = new ed.b(Jd);
          Gd._isCube = !0, Gd._texture = Id, Id.isReady = !0, Qd.push(Gd)
        }
        gd._lodTextureHigh = Qd[2], gd._lodTextureMid = Qd[1], gd._lodTextureLow = Qd[0], Wd && Wd(gd)
      }), gd, Cd, Kd, od, pd, Nd, null, void 0, !1, ld)
    });
    var Id = kd(39891);
    let Gd = !1;
    Gd || (Gd = !0, Nd.ThinEngine.prototype.createUniformBuffer = function(dd, Jd) {
      const kd = this._gl.createBuffer();
      if (!kd) throw new Error("Unable to create uniform buffer");
      const pd = new Id.b(kd);
      return this.bindUniformBuffer(pd), dd instanceof Float32Array ? this._gl.bufferData(this._gl.UNIFORM_BUFFER, dd, this._gl.STATIC_DRAW) : this._gl.bufferData(this._gl.UNIFORM_BUFFER, new Float32Array(dd), this._gl.STATIC_DRAW), this.bindUniformBuffer(null), pd.references = 1, pd
    }, Nd.ThinEngine.prototype.createDynamicUniformBuffer = function(dd, Jd) {
      const kd = this._gl.createBuffer();
      if (!kd) throw new Error("Unable to create dynamic uniform buffer");
      const pd = new Id.b(kd);
      return this.bindUniformBuffer(pd), dd instanceof Float32Array ? this._gl.bufferData(this._gl.UNIFORM_BUFFER, dd, this._gl.DYNAMIC_DRAW) : this._gl.bufferData(this._gl.UNIFORM_BUFFER, new Float32Array(dd), this._gl.DYNAMIC_DRAW), this.bindUniformBuffer(null), pd.references = 1, pd
    }, Nd.ThinEngine.prototype.updateUniformBuffer = function(dd, Jd, kd, pd) {
      this.bindUniformBuffer(dd), void 0 === kd && (kd = 0), void 0 === pd ? Jd instanceof Float32Array ? this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, kd, Jd) : this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, kd, new Float32Array(Jd)) : Jd instanceof Float32Array ? this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, 0, Jd.subarray(kd, kd + pd)) : this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, 0, new Float32Array(Jd).subarray(kd, kd + pd)), this.bindUniformBuffer(null)
    }, Nd.ThinEngine.prototype.bindUniformBuffer = function(dd) {
      this._gl.bindBuffer(this._gl.UNIFORM_BUFFER, dd ? dd.underlyingResource : null)
    }, Nd.ThinEngine.prototype.bindUniformBufferBase = function(dd, Jd, kd) {
      this._gl.bindBufferBase(this._gl.UNIFORM_BUFFER, Jd, dd ? dd.underlyingResource : null)
    }, Nd.ThinEngine.prototype.bindUniformBlock = function(dd, Jd, kd) {
      const pd = dd.program,
        Nd = this._gl.getUniformBlockIndex(pd, Jd);
      4294967295 !== Nd && this._gl.uniformBlockBinding(pd, Nd, kd)
    });
    var vd = kd(39840),
      xd = kd(39874);
    let qd = !1;
    qd || (qd = !0, xd.b.prototype.displayLoadingUI = function() {
      if (!(0, vd.l)()) return;
      const dd = this.loadingScreen;
      dd && dd.displayLoadingUI()
    }, xd.b.prototype.hideLoadingUI = function() {
      if (!(0, vd.l)()) return;
      const dd = this._loadingScreen;
      dd && dd.hideLoadingUI()
    }, Object.defineProperty(xd.b.prototype, "loadingScreen", {
      get: function() {
        return !this._loadingScreen && this._renderingCanvas && (this._loadingScreen = xd.b.DefaultLoadingScreenFactory(this._renderingCanvas)), this._loadingScreen
      },
      set: function(dd) {
        this._loadingScreen = dd
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(xd.b.prototype, "loadingUIText", {
      set: function(dd) {
        this.loadingScreen.loadingUIText = dd
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(xd.b.prototype, "loadingUIBackgroundColor", {
      set: function(dd) {
        this.loadingScreen.loadingUIBackgroundColor = dd
      },
      enumerable: !0,
      configurable: !0
    })), (0, kd(39919).b)();
    let Bd = !1;
    Bd || (Bd = !0, xd.b.prototype.getInputElement = function() {
      return this._renderingCanvas
    }, xd.b.prototype.getDepthFunction = function() {
      return this._depthCullingState.depthFunc
    }, xd.b.prototype.setDepthFunction = function(dd) {
      this._depthCullingState.depthFunc = dd
    }, xd.b.prototype.setDepthFunctionToGreater = function() {
      this.setDepthFunction(516)
    }, xd.b.prototype.setDepthFunctionToGreaterOrEqual = function() {
      this.setDepthFunction(518)
    }, xd.b.prototype.setDepthFunctionToLess = function() {
      this.setDepthFunction(513)
    }, xd.b.prototype.setDepthFunctionToLessOrEqual = function() {
      this.setDepthFunction(515)
    }, xd.b.prototype.getDepthWrite = function() {
      return this._depthCullingState.depthMask
    }, xd.b.prototype.setDepthWrite = function(dd) {
      this._depthCullingState.depthMask = dd
    }, xd.b.prototype.setAlphaConstants = function(dd, Jd, kd, pd) {
      this._alphaState.setAlphaBlendConstants(dd, Jd, kd, pd)
    }, xd.b.prototype.getAlphaMode = function() {
      let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
      return this._alphaMode[dd]
    }, xd.b.prototype.getAlphaEquation = function() {
      let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
      return this._alphaEquation[dd]
    });
    let sd = !1;
    sd || (sd = !0, xd.b.prototype.getStencilBuffer = function() {
      return this._stencilState.stencilTest
    }, xd.b.prototype.setStencilBuffer = function(dd) {
      this._stencilState.stencilTest = dd
    }, xd.b.prototype.getStencilMask = function() {
      return this._stencilState.stencilMask
    }, xd.b.prototype.setStencilMask = function(dd) {
      this._stencilState.stencilMask = dd
    }, xd.b.prototype.getStencilFunction = function() {
      return this._stencilState.stencilFunc
    }, xd.b.prototype.getStencilBackFunction = function() {
      return this._stencilState.stencilBackFunc
    }, xd.b.prototype.getStencilFunctionReference = function() {
      return this._stencilState.stencilFuncRef
    }, xd.b.prototype.getStencilFunctionMask = function() {
      return this._stencilState.stencilFuncMask
    }, xd.b.prototype.setStencilFunction = function(dd) {
      this._stencilState.stencilFunc = dd
    }, xd.b.prototype.setStencilBackFunction = function(dd) {
      this._stencilState.stencilBackFunc = dd
    }, xd.b.prototype.setStencilFunctionReference = function(dd) {
      this._stencilState.stencilFuncRef = dd
    }, xd.b.prototype.setStencilFunctionMask = function(dd) {
      this._stencilState.stencilFuncMask = dd
    }, xd.b.prototype.getStencilOperationFail = function() {
      return this._stencilState.stencilOpStencilFail
    }, xd.b.prototype.getStencilBackOperationFail = function() {
      return this._stencilState.stencilBackOpStencilFail
    }, xd.b.prototype.getStencilOperationDepthFail = function() {
      return this._stencilState.stencilOpDepthFail
    }, xd.b.prototype.getStencilBackOperationDepthFail = function() {
      return this._stencilState.stencilBackOpDepthFail
    }, xd.b.prototype.getStencilOperationPass = function() {
      return this._stencilState.stencilOpStencilDepthPass
    }, xd.b.prototype.getStencilBackOperationPass = function() {
      return this._stencilState.stencilBackOpStencilDepthPass
    }, xd.b.prototype.setStencilOperationFail = function(dd) {
      this._stencilState.stencilOpStencilFail = dd
    }, xd.b.prototype.setStencilBackOperationFail = function(dd) {
      this._stencilState.stencilBackOpStencilFail = dd
    }, xd.b.prototype.setStencilOperationDepthFail = function(dd) {
      this._stencilState.stencilOpDepthFail = dd
    }, xd.b.prototype.setStencilBackOperationDepthFail = function(dd) {
      this._stencilState.stencilBackOpDepthFail = dd
    }, xd.b.prototype.setStencilOperationPass = function(dd) {
      this._stencilState.stencilOpStencilDepthPass = dd
    }, xd.b.prototype.setStencilBackOperationPass = function(dd) {
      this._stencilState.stencilBackOpStencilDepthPass = dd
    }, xd.b.prototype.cacheStencilState = function() {
      this._cachedStencilBuffer = this.getStencilBuffer(), this._cachedStencilFunction = this.getStencilFunction(), this._cachedStencilMask = this.getStencilMask(), this._cachedStencilOperationPass = this.getStencilOperationPass(), this._cachedStencilOperationFail = this.getStencilOperationFail(), this._cachedStencilOperationDepthFail = this.getStencilOperationDepthFail(), this._cachedStencilReference = this.getStencilFunctionReference()
    }, xd.b.prototype.restoreStencilState = function() {
      this.setStencilFunction(this._cachedStencilFunction), this.setStencilMask(this._cachedStencilMask), this.setStencilBuffer(this._cachedStencilBuffer), this.setStencilOperationPass(this._cachedStencilOperationPass), this.setStencilOperationFail(this._cachedStencilOperationFail), this.setStencilOperationDepthFail(this._cachedStencilOperationDepthFail), this.setStencilFunctionReference(this._cachedStencilReference)
    });
    kd(39995);
    let ad = !1;
    ad || (ad = !0, xd.b.prototype.createDepthStencilTexture = function(dd, Jd, kd) {
      if (Jd.isCube) {
        const kd = dd.width || dd;
        return this._createDepthStencilCubeTexture(kd, Jd)
      }
      return this._createDepthStencilTexture(dd, Jd, kd)
    });
    kd(4e4), kd(40045);
    let Md = !1;
    Md || (Md = !0, Nd.ThinEngine.prototype.enableScissor = function(dd, Jd, kd, pd) {
      const Nd = this._gl;
      Nd.enable(Nd.SCISSOR_TEST), Nd.scissor(dd, Jd, kd, pd)
    }, Nd.ThinEngine.prototype.disableScissor = function() {
      const dd = this._gl;
      dd.disable(dd.SCISSOR_TEST)
    })
  },
  39799: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => xd
    });
    var pd = kd(39805),
      Nd = kd(37277),
      Wd = kd(39813),
      Pd = kd(39876);
    class Zd {
      constructor() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 30;
        this._enabled = !0, this._rollingFrameTime = new gd(dd)
      }
      sampleFrame() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Pd.d.Now;
        if (this._enabled) {
          if (null != this._lastFrameTimeMs) {
            const Jd = dd - this._lastFrameTimeMs;
            this._rollingFrameTime.add(Jd)
          }
          this._lastFrameTimeMs = dd
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
        const dd = this._rollingFrameTime.history(0);
        return 0 === dd ? 0 : 1e3 / dd
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
    class gd {
      constructor(dd) {
        this._samples = new Array(dd), this.reset()
      }
      add(dd) {
        let Jd;
        if (this.isSaturated()) {
          const dd = this._samples[this._pos];
          Jd = dd - this.average, this.average -= Jd / (this._sampleCount - 1), this._m2 -= Jd * (dd - this.average)
        } else this._sampleCount++;
        Jd = dd - this.average, this.average += Jd / this._sampleCount, this._m2 += Jd * (dd - this.average), this.variance = this._m2 / (this._sampleCount - 1), this._samples[this._pos] = dd, this._pos++, this._pos %= this._samples.length
      }
      history(dd) {
        if (dd >= this._sampleCount || dd >= this._samples.length) return 0;
        const Jd = this._wrapPosition(this._pos - 1);
        return this._samples[this._wrapPosition(Jd - dd)]
      }
      isSaturated() {
        return this._sampleCount >= this._samples.length
      }
      reset() {
        this.average = 0, this.variance = 0, this._sampleCount = 0, this._pos = 0, this._m2 = 0
      }
      _wrapPosition(dd) {
        const Jd = this._samples.length;
        return (dd % Jd + Jd) % Jd
      }
    }
    var Cd = kd(39891),
      Kd = kd(38812),
      od = kd(39906),
      ld = kd(39874),
      Qd = kd(39840);

    function Ld(dd) {
      const Jd = function(dd) {
        if (!(0, Qd.f)() || !document.body) return null;
        const Jd = document.createElement("span");
        Jd.textContent = "Hg", Jd.style.font = dd;
        const kd = document.createElement("div");
        kd.style.display = "inline-block", kd.style.width = "1px", kd.style.height = "0px", kd.style.verticalAlign = "bottom";
        const pd = document.createElement("div");
        let Nd, Wd;
        pd.style.whiteSpace = "nowrap", pd.appendChild(Jd), pd.appendChild(kd), document.body.appendChild(pd);
        try {
          Wd = kd.getBoundingClientRect().top - Jd.getBoundingClientRect().top, kd.style.verticalAlign = "baseline", Nd = kd.getBoundingClientRect().top - Jd.getBoundingClientRect().top
        } finally {
          document.body.removeChild(pd)
        }
        const Pd = {
          ascent: Nd,
          height: Wd,
          descent: Wd - Nd
        };
        return Od(Pd) ? Pd : null
      }(dd);
      if (Jd) return Jd;
      const kd = function(dd) {
        let Jd = null;
        try {
          "undefined" !== typeof OffscreenCanvas ? Jd = new OffscreenCanvas(64, 64) : (0, Qd.f)() && "function" === typeof document.createElement && (Jd = document.createElement("canvas"), Jd.width = 64, Jd.height = 64);
          const kd = Jd?.getContext("2d");
          if (!kd) return null;
          kd.font = dd;
          const pd = kd.measureText("Hg"),
            Nd = Number(pd.actualBoundingBoxAscent ?? pd.fontBoundingBoxAscent),
            Wd = Number(pd.actualBoundingBoxDescent ?? pd.fontBoundingBoxDescent),
            Pd = {
              ascent: Nd,
              height: Nd + Wd,
              descent: Wd
            };
          return Od(Pd) ? Pd : null
        } catch {
          return null
        } finally {
          const dd = Jd;
          "function" === typeof dd?.dispose && dd.dispose()
        }
      }(dd);
      return kd || function(dd) {
        const Jd = Math.max(1, function(dd) {
            const Jd = /(?:^|\s)([0-9]+(?:\.[0-9]+)?)px(?:\/|\s|$)/.exec(String(dd || ""));
            return Jd ? Number(Jd[1]) : 16
          }(dd)),
          kd = .8 * Jd,
          pd = .2 * Jd;
        return {
          ascent: kd,
          height: kd + pd,
          descent: pd
        }
      }(dd)
    }

    function Od(dd) {
      return Number.isFinite(dd.ascent) && Number.isFinite(dd.height) && Number.isFinite(dd.descent) && dd.height > 0
    }

    function ed(dd) {
      if (dd.requestPointerLock) {
        const Jd = dd.requestPointerLock();
        Jd instanceof Promise ? Jd.then((() => {
          dd.focus()
        })).catch((() => {})) : dd.focus()
      }
    }
    var Rd = kd(39915),
      Id = kd(39866),
      Gd = kd(39919),
      vd = kd(39922);
    class xd extends Wd.ThinEngine {
      static get NpmPackage() {
        return ld.b.NpmPackage
      }
      static get Version() {
        return ld.b.Version
      }
      static get Instances() {
        return Nd.d.Instances
      }
      static get LastCreatedEngine() {
        return Nd.d.LastCreatedEngine
      }
      static get LastCreatedScene() {
        return Nd.d.LastCreatedScene
      }
      static DefaultLoadingScreenFactory(dd) {
        return ld.b.DefaultLoadingScreenFactory(dd)
      }
      get _supportsHardwareTextureRescaling() {
        return !!xd._RescalePostProcessFactory
      }
      _measureFps() {
        this._performanceMonitor.sampleFrame(), this._fps = this._performanceMonitor.averageFPS, this._deltaTime = this._performanceMonitor.instantaneousFrameTime || 0
      }
      get performanceMonitor() {
        return this._performanceMonitor
      }
      constructor(dd, Jd, kd) {
        let pd = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        (0, Gd.b)(), (0, vd.b)(), super(dd, Jd, kd, pd), this._performanceMonitor = new Zd, this._drawCalls = new Rd.b, dd && (this._features.supportRenderPasses = !0)
      }
      _initGLContext() {
        super._initGLContext(), this._rescalePostProcess = null
      }
      _sharedInit(dd) {
        super._sharedInit(dd),
          function(dd, Jd, kd) {
            dd._onCanvasFocus = () => {
              dd.onCanvasFocusObservable.notifyObservers(dd)
            }, dd._onCanvasBlur = () => {
              dd.onCanvasBlurObservable.notifyObservers(dd)
            }, dd._onCanvasContextMenu = Jd => {
              dd.disableContextMenu && Jd.preventDefault()
            }, Jd.addEventListener("focus", dd._onCanvasFocus), Jd.addEventListener("blur", dd._onCanvasBlur), Jd.addEventListener("contextmenu", dd._onCanvasContextMenu), dd._onBlur = () => {
              dd.disablePerformanceMonitorInBackground && dd.performanceMonitor.disable(), dd._windowIsBackground = !0
            }, dd._onFocus = () => {
              dd.disablePerformanceMonitorInBackground && dd.performanceMonitor.enable(), dd._windowIsBackground = !1
            }, dd._onCanvasPointerOut = kd => {
              document.elementFromPoint(kd.clientX, kd.clientY) !== Jd && dd.onCanvasPointerOutObservable.notifyObservers(kd)
            };
            const pd = dd.getHostWindow();
            pd && "function" === typeof pd.addEventListener && (pd.addEventListener("blur", dd._onBlur), pd.addEventListener("focus", dd._onFocus)), Jd.addEventListener("pointerout", dd._onCanvasPointerOut), kd.doNotHandleTouchAction || function(dd) {
              dd && dd.setAttribute && (dd.setAttribute("touch-action", "none"), dd.style.touchAction = "none", dd.style.webkitTapHighlightColor = "transparent")
            }(Jd), !ld.b.audioEngine && kd.audioEngine && ld.b.AudioEngineFactory && (ld.b.audioEngine = ld.b.AudioEngineFactory(dd.getRenderingCanvas(), dd.getAudioContext(), dd.getAudioDestination())), (0, Qd.f)() && (dd._onFullscreenChange = () => {
              dd.isFullscreen = !!document.fullscreenElement, dd.isFullscreen && dd._pointerLockRequested && Jd && ed(Jd)
            }, document.addEventListener("fullscreenchange", dd._onFullscreenChange, !1), document.addEventListener("webkitfullscreenchange", dd._onFullscreenChange, !1), dd._onPointerLockChange = () => {
              dd.isPointerLock = document.pointerLockElement === Jd
            }, document.addEventListener("pointerlockchange", dd._onPointerLockChange, !1), document.addEventListener("webkitpointerlockchange", dd._onPointerLockChange, !1)), dd.enableOfflineSupport = void 0 !== ld.b.OfflineProviderFactory, dd._deterministicLockstep = !!kd.deterministicLockstep, dd._lockstepMaxSteps = kd.lockstepMaxSteps || 0, dd._timeStep = kd.timeStep || 1 / 60
          }(this, dd, this._creationOptions)
      }
      resizeImageBitmap(dd, Jd, kd) {
        return function(dd, Jd, kd, pd) {
          const Nd = dd.createCanvas(kd, pd).getContext("2d");
          if (!Nd) throw new Error("Unable to get 2d context for resizeImageBitmap");
          return Nd.drawImage(Jd, 0, 0), Nd.getImageData(0, 0, kd, pd).data
        }(this, dd, Jd, kd)
      }
      async _createImageBitmapFromSource(dd, Jd) {
        return await async function(dd, Jd, kd) {
          return await new Promise(((pd, Nd) => {
            const Wd = new Image;
            Wd.onload = () => {
              Wd.decode().then((() => {
                dd.createImageBitmap(Wd, kd).then((dd => {
                  pd(dd)
                }))
              }))
            }, Wd.onerror = () => {
              Nd(`Error loading image ${Wd.src}`)
            }, Wd.src = Jd
          }))
        }(this, dd, Jd)
      }
      switchFullscreen(dd) {
        this.isFullscreen ? this.exitFullscreen() : this.enterFullscreen(dd)
      }
      enterFullscreen(dd) {
        this.isFullscreen || (this._pointerLockRequested = dd, this._renderingCanvas && function(dd) {
          const Jd = dd.requestFullscreen || dd.webkitRequestFullscreen;
          Jd && Jd.call(dd)
        }(this._renderingCanvas))
      }
      exitFullscreen() {
        this.isFullscreen && function() {
          const dd = document;
          document.exitFullscreen ? document.exitFullscreen() : dd.webkitCancelFullScreen && dd.webkitCancelFullScreen()
        }()
      }
      setDitheringState(dd) {
        dd ? this._gl.enable(this._gl.DITHER) : this._gl.disable(this._gl.DITHER)
      }
      setRasterizerState(dd) {
        dd ? this._gl.disable(this._gl.RASTERIZER_DISCARD) : this._gl.enable(this._gl.RASTERIZER_DISCARD)
      }
      setDirectViewport(dd, Jd, kd, pd) {
        const Nd = this._cachedViewport;
        return this._cachedViewport = null, this._viewport(dd, Jd, kd, pd), Nd
      }
      scissorClear(dd, Jd, kd, pd, Nd) {
        this.enableScissor(dd, Jd, kd, pd), this.clear(Nd, !0, !0, !0), this.disableScissor()
      }
      getVertexShaderSource(dd) {
        const Jd = this._gl.getAttachedShaders(dd);
        return Jd ? this._gl.getShaderSource(Jd[0]) : null
      }
      getFragmentShaderSource(dd) {
        const Jd = this._gl.getAttachedShaders(dd);
        return Jd ? this._gl.getShaderSource(Jd[1]) : null
      }
      set framebufferDimensionsObject(dd) {
        this._framebufferDimensionsObject = dd, this._framebufferDimensionsObject && this.onResizeObservable.notifyObservers(this)
      }
      _rebuildBuffers() {
        for (const dd of this.scenes) dd.resetCachedMaterial(), dd._rebuildGeometries();
        for (const dd of this._virtualScenes) dd.resetCachedMaterial(), dd._rebuildGeometries();
        super._rebuildBuffers()
      }
      getFontOffset(dd) {
        return Ld(dd)
      }
      enterPointerlock() {
        this._renderingCanvas && ed(this._renderingCanvas)
      }
      exitPointerlock() {
        document.exitPointerLock && document.exitPointerLock()
      }
      iG() {
        this._measureFps(), super.iG()
      }
      _deletePipelineContext(dd) {
        const Jd = dd;
        Jd && Jd.program && Jd.transformFeedback && (this.deleteTransformFeedback(Jd.transformFeedback), Jd.transformFeedback = null), super._deletePipelineContext(dd)
      }
      createShaderProgram(dd, Jd, kd, pd, Nd) {
        let Wd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        Nd = Nd || this._gl, this.onBeforeShaderCompilationObservable.notifyObservers(this);
        const Pd = super.createShaderProgram(dd, Jd, kd, pd, Nd, Wd);
        return this.onAfterShaderCompilationObservable.notifyObservers(this), Pd
      }
      _createShaderProgram(dd, Jd, kd, pd) {
        let Nd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        const Wd = pd.createProgram();
        if (dd.program = Wd, !Wd) throw new Error("Unable to create program");
        if (pd.attachShader(Wd, Jd), pd.attachShader(Wd, kd), this.uL > 1 && Nd) {
          const Jd = this.createTransformFeedback();
          this.bindTransformFeedback(Jd), this.setTranformFeedbackVaryings(Wd, Nd), dd.transformFeedback = Jd
        }
        return pd.linkProgram(Wd), this.uL > 1 && Nd && this.bindTransformFeedback(null), dd.context = pd, dd.vertexShader = Jd, dd.fragmentShader = kd, dd.isParallelCompiled || this._finalizePipelineContext(dd), Wd
      }
      _releaseTexture(dd) {
        super._releaseTexture(dd)
      }
      _releaseRenderTargetWrapper(dd) {
        super._releaseRenderTargetWrapper(dd);
        for (const Jd of this.scenes) {
          for (const kd of Jd.postProcesses) kd._outputTexture === dd && (kd._outputTexture = null);
          for (const kd of Jd.cameras)
            for (const Jd of kd._postProcesses) Jd && Jd._outputTexture === dd && (Jd._outputTexture = null)
        }
      }
      _rescaleTexture(dd, Jd, kd, pd, Nd) {
        this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MAG_FILTER, this._gl.LINEAR), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MIN_FILTER, this._gl.LINEAR), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_S, this._gl.CLAMP_TO_EDGE), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_T, this._gl.CLAMP_TO_EDGE);
        const Wd = this.createRenderTargetTexture({
          width: Jd.width,
          height: Jd.height
        }, {
          generateMipMaps: !1,
          type: 0,
          samplingMode: 2,
          generateDepthBuffer: !1,
          generateStencilBuffer: !1
        });
        if (!this._rescalePostProcess && xd._RescalePostProcessFactory && (this._rescalePostProcess = xd._RescalePostProcessFactory(this)), this._rescalePostProcess) {
          this._rescalePostProcess.externalTextureSamplerBinding = !0;
          const Pd = () => {
              this._rescalePostProcess.onApply = function(Jd) {
                Jd._bindTexture("textureSampler", dd)
              };
              let Pd = kd;
              Pd || (Pd = this.scenes[this.scenes.length - 1]), Pd.postProcessManager.directRender([this._rescalePostProcess], Wd, !0), this._bindTextureDirectly(this._gl.TEXTURE_2D, Jd, !0), this._gl.copyTexImage2D(this._gl.TEXTURE_2D, 0, pd, 0, 0, Jd.width, Jd.height, 0), this.unBindFramebuffer(Wd), Wd.dispose(), Nd && Nd()
            },
            Zd = this._rescalePostProcess.getEffect();
          Zd ? Zd.executeWhenCompiled(Pd) : this._rescalePostProcess.onEffectCreatedObservable.addOnce((dd => {
            dd.executeWhenCompiled(Pd)
          }))
        }
      }
      wrapWebGLTexture(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3,
          Nd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          Wd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        const Pd = new od.b(dd, this._gl),
          Zd = new pd.b(this, 15, !0);
        return Zd._hardwareTexture = Pd, Zd.baseWidth = Nd, Zd.baseHeight = Wd, Zd.width = Nd, Zd.height = Wd, Zd.isReady = !0, Zd.useMipMaps = Jd, this.updateTextureSamplingMode(kd, Zd), Zd
      }
      updateWrappedWebGLTexture(dd, Jd) {
        if (15 !== dd.source) throw new Error("updateWrappedWebGLTexture: target InternalTexture was not produced by wrapWebGLTexture.");
        for (const pd of this._renderTargetWrapperCache)
          if (pd.textures?.includes(dd)) {
            if (pd.isMulti) throw new Error("updateWrappedWebGLTexture: wrapped texture is part of a multi render-target; not supported. Dispose and re-wrap.");
            if (pd._depthStencilTexture) throw new Error("updateWrappedWebGLTexture: wrapped texture's render-target wrapper has a depth/stencil texture; not supported. Dispose and re-wrap.")
          } dd._hardwareTexture = new od.b(Jd, this._gl), dd.isReady = !0, dd._cachedCoordinatesMode = null, dd._cachedWrapU = null, dd._cachedWrapV = null, dd._cachedWrapR = null, dd._cachedAnisotropicFilteringLevel = null;
        for (const pd in this._boundTexturesCache) this._boundTexturesCache[pd] === dd && (this._boundTexturesCache[pd] = null);
        this.updateTextureSamplingMode(dd.samplingMode, dd);
        const kd = this._gl;
        for (const pd of this._renderTargetWrapperCache) {
          if (pd.texture !== dd) continue;
          const Nd = pd,
            Wd = pd.samples,
            Pd = Wd > 1;
          Nd._framebuffer && kd.deleteFramebuffer(Nd._framebuffer), !Pd && Nd._depthStencilBuffer && (kd.deleteRenderbuffer(Nd._depthStencilBuffer), Nd._depthStencilBuffer = null);
          const Zd = this._currentFramebuffer,
            gd = kd.createFramebuffer();
          this._bindUnboundFramebuffer(gd), kd.framebufferTexture2D(kd.FRAMEBUFFER, kd.COLOR_ATTACHMENT0, kd.TEXTURE_2D, Jd, 0), Pd || (Nd._depthStencilBuffer = this._setupFramebufferDepthAttachments(pd._generateStencilBuffer, pd._generateDepthBuffer, pd.width, pd.height)), this._bindUnboundFramebuffer(Zd), Nd._framebuffer = gd, Pd && (pd._samples = 1, this.updateRenderTargetTextureSampleCount(Nd, Wd))
        }
      }
      _uploadImageToTexture(dd, Jd) {
        let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const Nd = this._gl,
          Wd = this._getWebGLTextureType(dd.type),
          Pd = this._getInternalFormat(dd.format),
          Zd = this._getRGBABufferInternalSizedFormat(dd.type, Pd),
          gd = dd.isCube ? Nd.TEXTURE_CUBE_MAP : Nd.TEXTURE_2D;
        this._bindTextureDirectly(gd, dd, !0), this._unpackFlipY(dd.invertY);
        let Cd = Nd.TEXTURE_2D;
        dd.isCube && (Cd = Nd.TEXTURE_CUBE_MAP_POSITIVE_X + kd), Nd.texImage2D(Cd, pd, Zd, Pd, Wd, Jd), this._bindTextureDirectly(gd, null, !0)
      }
      updateTextureComparisonFunction(dd, Jd) {
        if (1 === this.uL) return void Kd.c.Error("WebGL 1 does not support texture comparison.");
        const kd = this._gl;
        dd.isCube ? (this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, dd, !0), 0 === Jd ? (kd.texParameteri(kd.TEXTURE_CUBE_MAP, kd.TEXTURE_COMPARE_FUNC, 515), kd.texParameteri(kd.TEXTURE_CUBE_MAP, kd.TEXTURE_COMPARE_MODE, kd.NONE)) : (kd.texParameteri(kd.TEXTURE_CUBE_MAP, kd.TEXTURE_COMPARE_FUNC, Jd), kd.texParameteri(kd.TEXTURE_CUBE_MAP, kd.TEXTURE_COMPARE_MODE, kd.COMPARE_REF_TO_TEXTURE)), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null)) : (this._bindTextureDirectly(this._gl.TEXTURE_2D, dd, !0), 0 === Jd ? (kd.texParameteri(kd.TEXTURE_2D, kd.TEXTURE_COMPARE_FUNC, 515), kd.texParameteri(kd.TEXTURE_2D, kd.TEXTURE_COMPARE_MODE, kd.NONE)) : (kd.texParameteri(kd.TEXTURE_2D, kd.TEXTURE_COMPARE_FUNC, Jd), kd.texParameteri(kd.TEXTURE_2D, kd.TEXTURE_COMPARE_MODE, kd.COMPARE_REF_TO_TEXTURE)), this._bindTextureDirectly(this._gl.TEXTURE_2D, null)), dd._comparisonFunction = Jd
      }
      createInstancesBuffer(dd) {
        const Jd = this._gl.createBuffer();
        if (!Jd) throw new Error("Unable to create instance buffer");
        const kd = new Cd.b(Jd);
        return kd.oo = dd, this.bindArrayBuffer(kd), this._gl.bufferData(this._gl.ARRAY_BUFFER, dd, this._gl.DYNAMIC_DRAW), kd.references = 1, kd
      }
      deleteInstancesBuffer(dd) {
        this._gl.deleteBuffer(dd)
      }
      async _clientWaitAsync(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10;
        const pd = this._gl;
        return await new Promise(((Nd, Wd) => {
          (0, Id.f)((() => {
            const kd = pd.clientWaitSync(dd, Jd, 0);
            if (kd == pd.WAIT_FAILED) throw new Error("clientWaitSync failed");
            return kd != pd.TIMEOUT_EXPIRED
          }), Nd, Wd, kd)
        }))
      }
      _readPixelsAsync(dd, Jd, kd, pd, Nd, Wd, Pd) {
        if (this._webGLVersion < 2) throw new Error("_readPixelsAsync only work on WebGL2+");
        const Zd = this._gl,
          gd = Zd.createBuffer();
        Zd.bindBuffer(Zd.PIXEL_PACK_BUFFER, gd), Zd.bufferData(Zd.PIXEL_PACK_BUFFER, Pd.byteLength, Zd.STREAM_READ), Zd.readPixels(dd, Jd, kd, pd, Nd, Wd, 0), Zd.bindBuffer(Zd.PIXEL_PACK_BUFFER, null);
        const Cd = Zd.fenceSync(Zd.SYNC_GPU_COMMANDS_COMPLETE, 0);
        return Cd ? (Zd.flush(), this._clientWaitAsync(Cd, 0, 10).then((() => (Zd.deleteSync(Cd), Zd.bindBuffer(Zd.PIXEL_PACK_BUFFER, gd), Zd.getBufferSubData(Zd.PIXEL_PACK_BUFFER, 0, Pd), Zd.bindBuffer(Zd.PIXEL_PACK_BUFFER, null), Zd.deleteBuffer(gd), Pd)))) : null
      }
      dispose() {
        this.hideLoadingUI?.(), this._rescalePostProcess && this._rescalePostProcess.dispose(),
          function(dd, Jd) {
            1 === Nd.d.Instances.length && ld.b.audioEngine && (ld.b.audioEngine.dispose(), ld.b.audioEngine = null);
            const kd = dd.getHostWindow();
            kd && "function" === typeof kd.removeEventListener && (kd.removeEventListener("blur", dd._onBlur), kd.removeEventListener("focus", dd._onFocus)), Jd && (Jd.removeEventListener("focus", dd._onCanvasFocus), Jd.removeEventListener("blur", dd._onCanvasBlur), Jd.removeEventListener("pointerout", dd._onCanvasPointerOut), Jd.removeEventListener("contextmenu", dd._onCanvasContextMenu)), (0, Qd.f)() && (document.removeEventListener("fullscreenchange", dd._onFullscreenChange), document.removeEventListener("mozfullscreenchange", dd._onFullscreenChange), document.removeEventListener("webkitfullscreenchange", dd._onFullscreenChange), document.removeEventListener("msfullscreenchange", dd._onFullscreenChange), document.removeEventListener("pointerlockchange", dd._onPointerLockChange), document.removeEventListener("mspointerlockchange", dd._onPointerLockChange), document.removeEventListener("mozpointerlockchange", dd._onPointerLockChange), document.removeEventListener("webkitpointerlockchange", dd._onPointerLockChange))
          }(this, this._renderingCanvas), super.dispose()
      }
    }
    xd.ALPHA_DISABLE = 0, xd.ALPHA_ADD = 1, xd.ALPHA_COMBINE = 2, xd.ALPHA_SUBTRACT = 3, xd.ALPHA_MULTIPLY = 4, xd.ALPHA_MAXIMIZED = 5, xd.ALPHA_ONEONE = 6, xd.ALPHA_PREMULTIPLIED = 7, xd.ALPHA_PREMULTIPLIED_PORTERDUFF = 8, xd.ALPHA_INTERPOLATE = 9, xd.ALPHA_SCREENMODE = 10, xd.DELAYLOADSTATE_NONE = 0, xd.DELAYLOADSTATE_LOADED = 1, xd.DELAYLOADSTATE_LOADING = 2, xd.DELAYLOADSTATE_NOTLOADED = 4, xd.NEVER = 512, xd.ALWAYS = 519, xd.LESS = 513, xd.EQUAL = 514, xd.LEQUAL = 515, xd.GREATER = 516, xd.GEQUAL = 518, xd.NOTEQUAL = 517, xd.KEEP = 7680, xd.REPLACE = 7681, xd.INCR = 7682, xd.DECR = 7683, xd.INVERT = 5386, xd.INCR_WRAP = 34055, xd.DECR_WRAP = 34056, xd.TEXTURE_CLAMP_ADDRESSMODE = 0, xd.TEXTURE_WRAP_ADDRESSMODE = 1, xd.TEXTURE_MIRROR_ADDRESSMODE = 2, xd.TEXTUREFORMAT_ALPHA = 0, xd.TEXTUREFORMAT_LUMINANCE = 1, xd.TEXTUREFORMAT_LUMINANCE_ALPHA = 2, xd.TEXTUREFORMAT_RGB = 4, xd.TEXTUREFORMAT_RGBA = 5, xd.TEXTUREFORMAT_RED = 6, xd.TEXTUREFORMAT_R = 6, xd.TEXTUREFORMAT_R16_UNORM = 33322, xd.TEXTUREFORMAT_RG16_UNORM = 33324, xd.TEXTUREFORMAT_RGB16_UNORM = 32852, xd.TEXTUREFORMAT_RGBA16_UNORM = 32859, xd.TEXTUREFORMAT_R16_SNORM = 36760, xd.TEXTUREFORMAT_RG16_SNORM = 36761, xd.TEXTUREFORMAT_RGB16_SNORM = 36762, xd.TEXTUREFORMAT_RGBA16_SNORM = 36763, xd.TEXTUREFORMAT_RG = 7, xd.TEXTUREFORMAT_RED_INTEGER = 8, xd.TEXTUREFORMAT_R_INTEGER = 8, xd.TEXTUREFORMAT_RG_INTEGER = 9, xd.TEXTUREFORMAT_RGB_INTEGER = 10, xd.TEXTUREFORMAT_RGBA_INTEGER = 11, xd.TEXTURETYPE_UNSIGNED_BYTE = 0, xd.TEXTURETYPE_UNSIGNED_INT = 0, xd.TEXTURETYPE_FLOAT = 1, xd.TEXTURETYPE_HALF_FLOAT = 2, xd.TEXTURETYPE_BYTE = 3, xd.TEXTURETYPE_SHORT = 4, xd.TEXTURETYPE_UNSIGNED_SHORT = 5, xd.TEXTURETYPE_INT = 6, xd.TEXTURETYPE_UNSIGNED_INTEGER = 7, xd.TEXTURETYPE_UNSIGNED_SHORT_4_4_4_4 = 8, xd.TEXTURETYPE_UNSIGNED_SHORT_5_5_5_1 = 9, xd.TEXTURETYPE_UNSIGNED_SHORT_5_6_5 = 10, xd.TEXTURETYPE_UNSIGNED_INT_2_10_10_10_REV = 11, xd.TEXTURETYPE_UNSIGNED_INT_24_8 = 12, xd.TEXTURETYPE_UNSIGNED_INT_10F_11F_11F_REV = 13, xd.TEXTURETYPE_UNSIGNED_INT_5_9_9_9_REV = 14, xd.TEXTURETYPE_FLOAT_32_UNSIGNED_INT_24_8_REV = 15, xd.TEXTURE_NEAREST_SAMPLINGMODE = 1, xd.TEXTURE_BILINEAR_SAMPLINGMODE = 2, xd.TEXTURE_TRILINEAR_SAMPLINGMODE = 3, xd.TEXTURE_NEAREST_NEAREST_MIPLINEAR = 8, xd.TEXTURE_LINEAR_LINEAR_MIPNEAREST = 11, xd.TEXTURE_LINEAR_LINEAR_MIPLINEAR = 3, xd.TEXTURE_NEAREST_NEAREST_MIPNEAREST = 4, xd.TEXTURE_NEAREST_LINEAR_MIPNEAREST = 5, xd.TEXTURE_NEAREST_LINEAR_MIPLINEAR = 6, xd.TEXTURE_NEAREST_LINEAR = 7, xd.TEXTURE_NEAREST_NEAREST = 1, xd.TEXTURE_LINEAR_NEAREST_MIPNEAREST = 9, xd.TEXTURE_LINEAR_NEAREST_MIPLINEAR = 10, xd.TEXTURE_LINEAR_LINEAR = 2, xd.TEXTURE_LINEAR_NEAREST = 12, xd.TEXTURE_EXPLICIT_MODE = 0, xd.TEXTURE_SPHERICAL_MODE = 1, xd.TEXTURE_PLANAR_MODE = 2, xd.TEXTURE_CUBIC_MODE = 3, xd.TEXTURE_PROJECTION_MODE = 4, xd.TEXTURE_SKYBOX_MODE = 5, xd.TEXTURE_INVCUBIC_MODE = 6, xd.TEXTURE_EQUIRECTANGULAR_MODE = 7, xd.TEXTURE_FIXED_EQUIRECTANGULAR_MODE = 8, xd.TEXTURE_FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9, xd.SCALEMODE_FLOOR = 1, xd.SCALEMODE_NEAREST = 2, xd.SCALEMODE_CEILING = 3
  },
  39949: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Nd
    });
    var pd = kd(39909);
    class Nd {
      get depthStencilTexture() {
        return this._depthStencilTexture
      }
      setDepthStencilTexture(dd) {
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && this._depthStencilTexture && this._depthStencilTexture.dispose(), this._depthStencilTexture = dd, this._generateDepthBuffer = this._generateStencilBuffer = this._depthStencilTextureWithStencil = !1, dd && (this._generateDepthBuffer = !0, this._generateStencilBuffer = this._depthStencilTextureWithStencil = (0, pd.c)(dd.format))
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
      getBaseArrayLayer(dd) {
        if (!this._textures) return -1;
        const Jd = this._textures[dd],
          kd = this._layerIndices?.[dd] ?? 0,
          pd = this._faceIndices?.[dd] ?? 0;
        return Jd.isCube ? 6 * kd + pd : Jd.is3D ? 0 : kd
      }
      get samples() {
        return this._samples
      }
      setSamples(dd) {
        let Jd = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          kd = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.samples === dd && !kd) return dd;
        const pd = this._isMulti ? this._engine.updateMultipleRenderTargetTextureSampleCount(this, dd, Jd) : this._engine.updateRenderTargetTextureSampleCount(this, dd);
        return this._samples = dd, pd
      }
      resolveMSAATextures() {
        this.isMulti ? this._engine.resolveMultiFramebuffer(this) : this._engine.resolveFramebuffer(this)
      }
      generateMipMaps() {
        this._engine._currentRenderTarget === this && (this.isMulti ? this._engine.unBindMultiColorAttachmentFramebuffer(this, !0) : this._engine.unBindFramebuffer(this, !0)), this.isMulti ? this._engine.generateMipMapsMultiFramebuffer(this) : this._engine.generateMipMapsFramebuffer(this)
      }
      constructor(dd, Jd, kd, pd, Nd) {
        this._textures = null, this._faceIndices = null, this._layerIndices = null, this._samples = 1, this._attachments = null, this._generateStencilBuffer = !1, this._generateDepthBuffer = !1, this._depthStencilTextureWithStencil = !1, this.disableAutomaticMSAAResolve = !1, this.resolveMSAAColors = !0, this.resolveMSAADepth = !1, this.resolveMSAAStencil = !1, this.depthReadOnly = !1, this.stencilReadOnly = !1, this._isMulti = dd, this._isCube = Jd, this._size = kd, this._engine = pd, this._depthStencilTexture = null, this.label = Nd
      }
      setTextures(dd) {
        Array.isArray(dd) ? this._textures = dd : this._textures = dd ? [dd] : null
      }
      setTexture(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          kd = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._textures || (this._textures = []), this._textures[Jd] !== dd && (this._textures[Jd] && kd && this._textures[Jd].dispose(), this._textures[Jd] = dd)
      }
      setLayerAndFaceIndices(dd, Jd) {
        this._layerIndices = dd, this._faceIndices = Jd
      }
      setLayerAndFaceIndex() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Jd = arguments.length > 1 ? arguments[1] : void 0,
          kd = arguments.length > 2 ? arguments[2] : void 0;
        this._layerIndices || (this._layerIndices = []), this._faceIndices || (this._faceIndices = []), void 0 !== Jd && Jd >= 0 && (this._layerIndices[dd] = Jd), void 0 !== kd && kd >= 0 && (this._faceIndices[dd] = kd)
      }
      createDepthStencilTexture() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Jd = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          kd = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          Nd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          Wd = arguments.length > 5 ? arguments[5] : void 0;
        return this._depthStencilTexture?.dispose(), this._depthStencilTextureWithStencil = kd, this._depthStencilTextureLabel = Wd, this._depthStencilTexture = this._engine.createDepthStencilTexture(this._size, {
          bilinearFiltering: Jd,
          comparisonFunction: dd,
          generateStencil: kd,
          isCube: this._isCube,
          samples: pd,
          depthTextureFormat: Nd,
          label: Wd
        }, this), this._depthStencilTexture
      }
      _shareDepth(dd) {
        this.shareDepth(dd)
      }
      shareDepth(dd) {
        this._depthStencilTexture && (dd._depthStencilTexture && dd._depthStencilTexture.dispose(), dd._depthStencilTexture = this._depthStencilTexture, dd._depthStencilTextureWithStencil = this._depthStencilTextureWithStencil, this._depthStencilTexture.incrementReferences())
      }
      _swapAndDie(dd) {
        this.texture && this.texture._swapAndDie(dd), this._textures = null, this.dispose(!0)
      }
      _cloneRenderTargetWrapper() {
        let dd = null;
        if (this._isMulti) {
          const Jd = this.textures;
          if (Jd && Jd.length > 0) {
            let kd = !1,
              pd = Jd.length,
              Nd = -1;
            const Wd = Jd[Jd.length - 1]._source;
            14 !== Wd && 12 !== Wd || (kd = !0, Nd = Jd[Jd.length - 1].format, pd--);
            const Pd = [],
              Zd = [],
              gd = [],
              Cd = [],
              Kd = [],
              od = [],
              ld = [],
              Qd = {};
            for (let dd = 0; dd < pd; ++dd) {
              const kd = Jd[dd];
              Pd.push(kd.samplingMode), Zd.push(kd.type), gd.push(kd.format);
              void 0 !== Qd[kd.uniqueId] ? (Cd.push(-1), ld.push(0)) : (Qd[kd.uniqueId] = dd, kd.is2DArray ? (Cd.push(35866), ld.push(kd.depth)) : kd.isCube ? (Cd.push(34067), ld.push(0)) : kd.is3D ? (Cd.push(32879), ld.push(kd.depth)) : (Cd.push(3553), ld.push(0))), this._faceIndices && Kd.push(this._faceIndices[dd] ?? 0), this._layerIndices && od.push(this._layerIndices[dd] ?? 0)
            }
            const Ld = {
                samplingModes: Pd,
                generateMipMaps: Jd[0].generateMipMaps,
                generateDepthBuffer: this._generateDepthBuffer,
                generateStencilBuffer: this._generateStencilBuffer,
                generateDepthTexture: kd,
                depthTextureFormat: Nd,
                types: Zd,
                formats: gd,
                tPd: pd,
                targetTypes: Cd,
                faceIndex: Kd,
                layerIndex: od,
                layerCounts: ld,
                label: this.label
              },
              Od = {
                width: this.width,
                height: this.height,
                depth: this.depth
              };
            dd = this._engine.createMultipleRenderTarget(Od, Ld);
            for (let ed = 0; ed < pd; ++ed) {
              if (-1 !== Cd[ed]) continue;
              const kd = Qd[Jd[ed].uniqueId];
              dd.setTexture(dd.textures[kd], ed)
            }
          }
        } else {
          const Jd = {};
          if (Jd.generateDepthBuffer = this._generateDepthBuffer, Jd.generateMipMaps = this.texture?.generateMipMaps ?? !1, Jd.generateStencilBuffer = this._generateStencilBuffer, Jd.samplingMode = this.texture?.samplingMode, Jd.type = this.texture?.type, Jd.format = this.texture?.format, Jd.noColorAttachment = !this._textures, Jd.label = this.label, this.isCube) dd = this._engine.createRenderTargetCubeTexture(this.width, Jd);
          else {
            const kd = {
              width: this.width,
              height: this.height,
              layers: this.is2DArray || this.is3D ? this.texture?.depth : void 0
            };
            dd = this._engine.createRenderTargetTexture(kd, Jd)
          }
          dd.texture && (dd.texture.isReady = !0)
        }
        return dd
      }
      _swapRenderTargetWrapper(dd) {
        if (this._textures && dd._textures)
          for (let Jd = 0; Jd < this._textures.length; ++Jd) this._textures[Jd]._swapAndDie(dd._textures[Jd], !1), dd._textures[Jd].isReady = !0;
        this._depthStencilTexture && dd._depthStencilTexture && (this._depthStencilTexture._swapAndDie(dd._depthStencilTexture), dd._depthStencilTexture.isReady = !0), this._textures = null, this._depthStencilTexture = null
      }
      _rebuild() {
        const dd = this._cloneRenderTargetWrapper();
        if (dd) {
          if (this._depthStencilTexture) {
            const Jd = this._depthStencilTexture.samplingMode,
              kd = this._depthStencilTexture.format,
              pd = 2 === Jd || 3 === Jd || 11 === Jd;
            dd.createDepthStencilTexture(this._depthStencilTexture._comparisonFunction, pd, this._depthStencilTextureWithStencil, this._depthStencilTexture.samples, kd, this._depthStencilTextureLabel)
          }
          this.samples > 1 && dd.setSamples(this.samples), dd._swapRenderTargetWrapper(this), dd.dispose()
        }
      }
      releaseTextures() {
        if (this._textures)
          for (let dd = 0; dd < this._textures.length; ++dd) this._textures[dd].dispose();
        this._textures = null
      }
      dispose() {
        arguments.length > 0 && void 0 !== arguments[0] && arguments[0] || (this._depthStencilTexture?.dispose(), this._depthStencilTexture = null, this.releaseTextures()), this._engine._releaseRenderTargetWrapper(this)
      }
    }
  },
  40414: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => pd
    });
    class pd {
      static get ForceFullSceneLoadingForIncremental() {
        return pd._ForceFullSceneLoadingForIncremental
      }
      static set ForceFullSceneLoadingForIncremental(dd) {
        pd._ForceFullSceneLoadingForIncremental = dd
      }
      static get ShowLoadingScreen() {
        return pd._ShowLoadingScreen
      }
      static set ShowLoadingScreen(dd) {
        pd._ShowLoadingScreen = dd
      }
      static get loggingLevel() {
        return pd._LoggingLevel
      }
      static set loggingLevel(dd) {
        pd._LoggingLevel = dd
      }
      static get CleanBoneMatrixWeights() {
        return pd._CleanBoneMatrixWeights
      }
      static set CleanBoneMatrixWeights(dd) {
        pd._CleanBoneMatrixWeights = dd
      }
    }
    pd._ForceFullSceneLoadingForIncremental = !1, pd._ShowLoadingScreen = !0, pd._CleanBoneMatrixWeights = !1, pd._LoggingLevel = 0
  },
  40052: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => Pd
    });
    var pd = kd(38812);
    const Nd = new Map;

    function Wd(dd, Jd) {
      (function(dd) {
        return Nd.delete(dd)
      })(dd) && pd.c.Warn(`Extension with the name '${dd}' already exists`), Nd.set(dd, Jd)
    }

    function Pd(dd, Jd) {
      "image/ktx" !== Jd && "image/ktx2" !== Jd || (dd = ".ktx"), Nd.has(dd) || (dd.endsWith(".ies") && Wd(".ies", (async () => await kd.e(300).then((() => kd(41728))).then((dd => new dd._IESTextureLoader)))), dd.endsWith(".dds") && Wd(".dds", (async () => await kd.e(298).then((() => kd(41733))).then((dd => new dd._DDSTextureLoader)))), dd.endsWith(".basis") && Wd(".basis", (async () => await kd.e(301).then((() => kd(41739))).then((dd => new dd._BasisTextureLoader)))), dd.endsWith(".env") && Wd(".env", (async () => await Promise.all([kd.e(302), kd.e(299)]).then((() => kd(41745))).then((dd => new dd._ENVTextureLoader)))), dd.endsWith(".hdr") && Wd(".hdr", (async () => await kd.e(303).then((() => kd(41799))).then((dd => new dd._HDRTextureLoader)))), (dd.endsWith(".ktx") || dd.endsWith(".ktx2")) && (Wd(".ktx", (async () => await kd.e(304).then((() => kd(41804))).then((dd => new dd._KTXTextureLoader)))), Wd(".ktx2", (async () => await kd.e(304).then((() => kd(41804))).then((dd => new dd._KTXTextureLoader))))), dd.endsWith(".tga") && Wd(".tga", (async () => await kd.e(305).then((() => kd(41820))).then((dd => new dd._TGATextureLoader)))), dd.endsWith(".exr") && Wd(".exr", (async () => await kd.e(306).then((() => kd(41829))).then((dd => new dd._ExrTextureLoader)))));
      const pd = Nd.get(dd);
      return pd ? Promise.resolve(pd(Jd)) : null
    }
  },
  40436: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Pd,
      g: () => Cd
    });
    var pd = kd(40278),
      Nd = kd(39992),
      Wd = kd(37303);
    class Pd extends pd.b {
      get f6() {
        return this._subMaterials
      }
      set f6(dd) {
        this._subMaterials = dd, this._hookArray(dd)
      }
      getChildren() {
        return this.f6
      }
      constructor(dd, Jd) {
        super(dd, Jd, !0), this._waitingSubMaterialsUniqueIds = [], this.Wm().addMultiMaterial(this), this.f6 = [], this._storeEffectOnSubMeshes = !0
      }
      _hookArray(dd) {
        var Jd = this;
        const kd = dd.push;
        dd.push = function() {
          for (var pd = arguments.length, Nd = new Array(pd), Wd = 0; Wd < pd; Wd++) Nd[Wd] = arguments[Wd];
          const Pd = kd.apply(dd, Nd);
          return Jd._markAllSubMeshesAsTexturesDirty(), Pd
        };
        const pd = dd.splice;
        dd.splice = (Jd, kd) => {
          const Nd = pd.call(dd, Jd, kd ?? dd.length);
          return this._markAllSubMeshesAsTexturesDirty(), Nd
        }
      }
      getSubMaterial(dd) {
        return dd < 0 || dd >= this.f6.length ? this.Wm().defaultMaterial : this.f6[dd]
      }
      getActiveTextures() {
        return super.getActiveTextures().concat(...this.f6.map((dd => dd ? dd.getActiveTextures() : [])))
      }
      hasTexture(dd) {
        if (super.hasTexture(dd)) return !0;
        for (let Jd = 0; Jd < this.f6.length; Jd++)
          if (this.f6[Jd]?.hasTexture(dd)) return !0;
        return !1
      }
      getClassName() {
        return "MultiMaterial"
      }
      isReadyForSubMesh(dd, Jd, kd) {
        for (let pd = 0; pd < this.f6.length; pd++) {
          const Nd = this.f6[pd];
          if (Nd) {
            if (Nd._storeEffectOnSubMeshes) {
              if (!Nd.isReadyForSubMesh(dd, Jd, kd)) return !1;
              continue
            }
            if (!Nd.isReady(dd)) return !1
          }
        }
        return !0
      }
      clone(dd, Jd) {
        const kd = new Pd(dd, this.Wm());
        for (let pd = 0; pd < this.f6.length; pd++) {
          let Nd;
          const Wd = this.f6[pd];
          Nd = Jd && Wd ? Wd.clone(dd + "-" + Wd.name) : this.f6[pd], kd.f6.push(Nd)
        }
        return kd
      }
      serialize() {
        const dd = {};
        dd.name = this.name, dd.id = this.id, dd.uniqueId = this.uniqueId, Nd.c && (dd.tags = Nd.c.GetTags(this)), dd.materialsUniqueIds = [], dd.materials = [];
        for (let Jd = 0; Jd < this.f6.length; Jd++) {
          const kd = this.f6[Jd];
          kd ? (dd.materialsUniqueIds.push(kd.uniqueId), dd.materials.push(kd.id)) : (dd.materialsUniqueIds.push(null), dd.materials.push(null))
        }
        return dd
      }
      dispose(dd, Jd, kd) {
        const pd = this.Wm();
        if (!pd) return;
        if (kd)
          for (let Wd = 0; Wd < this.f6.length; Wd++) {
            const kd = this.f6[Wd];
            kd && kd.dispose(dd, Jd)
          }
        const Nd = pd.multiMaterials.indexOf(this);
        Nd >= 0 && pd.multiMaterials.splice(Nd, 1), super.dispose(dd, Jd)
      }
    }
    let Zd = !1;

    function gd(dd, Jd) {
      const kd = new Pd(dd.name, Jd);
      if (kd.id = dd.id, kd._loadedUniqueId = dd.uniqueId, Nd.c && Nd.c.AddTagsTo(kd, dd.tags), dd.materialsUniqueIds) kd._waitingSubMaterialsUniqueIds = dd.materialsUniqueIds;
      else
        for (const pd of dd.materials) kd.f6.push(Jd.getLastMaterialById(pd));
      return kd
    }

    function Cd() {
      Zd || (Zd = !0, Pd.ParseMultiMaterial = gd, (0, Wd.h)("BABYLON.MultiMaterial", Pd))
    }
  },
  40207: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => Pd
    });
    var pd, Nd, Wd = kd(37251);
    ! function(dd) {
      dd[dd.LOCAL = 0] = "LOCAL", dd[dd.WORLD = 1] = "WORLD", dd[dd.BONE = 2] = "BONE"
    }(pd || (pd = {}));
    class Pd {}
    Pd.X = new Wd.n(1, 0, 0), Pd.Y = new Wd.n(0, 1, 0), Pd.Z = new Wd.n(0, 0, 1),
      function(dd) {
        dd[dd.X = 0] = "X", dd[dd.Y = 1] = "Y", dd[dd.Z = 2] = "Z"
      }(Nd || (Nd = {}))
  },
  39952: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => gd,
      f: () => Cd
    });
    var pd = kd(37251);
    const Nd = [Math.sqrt(1 / (4 * Math.PI)), -Math.sqrt(3 / (4 * Math.PI)), Math.sqrt(3 / (4 * Math.PI)), -Math.sqrt(3 / (4 * Math.PI)), Math.sqrt(15 / (4 * Math.PI)), -Math.sqrt(15 / (4 * Math.PI)), Math.sqrt(5 / (16 * Math.PI)), -Math.sqrt(15 / (4 * Math.PI)), Math.sqrt(15 / (16 * Math.PI))],
      Wd = [() => 1, dd => dd.y, dd => dd.z, dd => dd.x, dd => dd.x * dd.y, dd => dd.y * dd.z, dd => 3 * dd.z * dd.z - 1, dd => dd.x * dd.z, dd => dd.x * dd.x - dd.y * dd.y],
      Pd = (dd, Jd) => Nd[dd] * Wd[dd](Jd),
      Zd = [Math.PI, 2 * Math.PI / 3, 2 * Math.PI / 3, 2 * Math.PI / 3, Math.PI / 4, Math.PI / 4, Math.PI / 4, Math.PI / 4, Math.PI / 4];
    class gd {
      constructor() {
        this.preScaled = !1, this.l00 = pd.n.Zero(), this.l1_1 = pd.n.Zero(), this.l10 = pd.n.Zero(), this.l11 = pd.n.Zero(), this.l2_2 = pd.n.Zero(), this.l2_1 = pd.n.Zero(), this.l20 = pd.n.Zero(), this.l21 = pd.n.Zero(), this.l22 = pd.n.Zero()
      }
      addLight(dd, Jd, kd) {
        pd.h.IL[0].set(Jd.r, Jd.g, Jd.b);
        const Nd = pd.h.IL[0],
          Wd = pd.h.IL[1];
        Nd.scaleToRef(kd, Wd), Wd.scaleToRef(Pd(0, dd), pd.h.IL[2]), this.l00.addInPlace(pd.h.IL[2]), Wd.scaleToRef(Pd(1, dd), pd.h.IL[2]), this.l1_1.addInPlace(pd.h.IL[2]), Wd.scaleToRef(Pd(2, dd), pd.h.IL[2]), this.l10.addInPlace(pd.h.IL[2]), Wd.scaleToRef(Pd(3, dd), pd.h.IL[2]), this.l11.addInPlace(pd.h.IL[2]), Wd.scaleToRef(Pd(4, dd), pd.h.IL[2]), this.l2_2.addInPlace(pd.h.IL[2]), Wd.scaleToRef(Pd(5, dd), pd.h.IL[2]), this.l2_1.addInPlace(pd.h.IL[2]), Wd.scaleToRef(Pd(6, dd), pd.h.IL[2]), this.l20.addInPlace(pd.h.IL[2]), Wd.scaleToRef(Pd(7, dd), pd.h.IL[2]), this.l21.addInPlace(pd.h.IL[2]), Wd.scaleToRef(Pd(8, dd), pd.h.IL[2]), this.l22.addInPlace(pd.h.IL[2])
      }
      scaleInPlace(dd) {
        this.l00.scaleInPlace(dd), this.l1_1.scaleInPlace(dd), this.l10.scaleInPlace(dd), this.l11.scaleInPlace(dd), this.l2_2.scaleInPlace(dd), this.l2_1.scaleInPlace(dd), this.l20.scaleInPlace(dd), this.l21.scaleInPlace(dd), this.l22.scaleInPlace(dd)
      }
      convertIncidentRadianceToIrradiance() {
        this.l00.scaleInPlace(Zd[0]), this.l1_1.scaleInPlace(Zd[1]), this.l10.scaleInPlace(Zd[2]), this.l11.scaleInPlace(Zd[3]), this.l2_2.scaleInPlace(Zd[4]), this.l2_1.scaleInPlace(Zd[5]), this.l20.scaleInPlace(Zd[6]), this.l21.scaleInPlace(Zd[7]), this.l22.scaleInPlace(Zd[8])
      }
      convertIrradianceToLambertianRadiance() {
        this.scaleInPlace(1 / Math.PI)
      }
      preScaleForRendering() {
        this.preScaled = !0, this.l00.scaleInPlace(Nd[0]), this.l1_1.scaleInPlace(Nd[1]), this.l10.scaleInPlace(Nd[2]), this.l11.scaleInPlace(Nd[3]), this.l2_2.scaleInPlace(Nd[4]), this.l2_1.scaleInPlace(Nd[5]), this.l20.scaleInPlace(Nd[6]), this.l21.scaleInPlace(Nd[7]), this.l22.scaleInPlace(Nd[8])
      }
      updateFromArray(dd) {
        return pd.n.FromArrayToRef(dd[0], 0, this.l00), pd.n.FromArrayToRef(dd[1], 0, this.l1_1), pd.n.FromArrayToRef(dd[2], 0, this.l10), pd.n.FromArrayToRef(dd[3], 0, this.l11), pd.n.FromArrayToRef(dd[4], 0, this.l2_2), pd.n.FromArrayToRef(dd[5], 0, this.l2_1), pd.n.FromArrayToRef(dd[6], 0, this.l20), pd.n.FromArrayToRef(dd[7], 0, this.l21), pd.n.FromArrayToRef(dd[8], 0, this.l22), this
      }
      updateFromFloatsArray(dd) {
        return pd.n.FromFloatsToRef(dd[0], dd[1], dd[2], this.l00), pd.n.FromFloatsToRef(dd[3], dd[4], dd[5], this.l1_1), pd.n.FromFloatsToRef(dd[6], dd[7], dd[8], this.l10), pd.n.FromFloatsToRef(dd[9], dd[10], dd[11], this.l11), pd.n.FromFloatsToRef(dd[12], dd[13], dd[14], this.l2_2), pd.n.FromFloatsToRef(dd[15], dd[16], dd[17], this.l2_1), pd.n.FromFloatsToRef(dd[18], dd[19], dd[20], this.l20), pd.n.FromFloatsToRef(dd[21], dd[22], dd[23], this.l21), pd.n.FromFloatsToRef(dd[24], dd[25], dd[26], this.l22), this
      }
      static FromArray(dd) {
        return (new gd).updateFromArray(dd)
      }
      static FromPolynomial(dd) {
        const Jd = new gd;
        return Jd.l00 = dd.xx.scale(.376127).add(dd.yy.scale(.376127)).add(dd.zz.scale(.376126)), Jd.l1_1 = dd.y.scale(.977204), Jd.l10 = dd.z.scale(.977204), Jd.l11 = dd.x.scale(.977204), Jd.l2_2 = dd.xy.scale(1.16538), Jd.l2_1 = dd.yz.scale(1.16538), Jd.l20 = dd.zz.scale(1.34567).subtract(dd.xx.scale(.672834)).subtract(dd.yy.scale(.672834)), Jd.l21 = dd.zx.scale(1.16538), Jd.l22 = dd.xx.scale(1.16538).subtract(dd.yy.scale(1.16538)), Jd.l1_1.scaleInPlace(-1), Jd.l11.scaleInPlace(-1), Jd.l2_1.scaleInPlace(-1), Jd.l21.scaleInPlace(-1), Jd.scaleInPlace(Math.PI), Jd
      }
    }
    class Cd {
      constructor() {
        this.x = pd.n.Zero(), this.y = pd.n.Zero(), this.z = pd.n.Zero(), this.xx = pd.n.Zero(), this.yy = pd.n.Zero(), this.zz = pd.n.Zero(), this.xy = pd.n.Zero(), this.yz = pd.n.Zero(), this.zx = pd.n.Zero()
      }
      get preScaledHarmonics() {
        return this._harmonics || (this._harmonics = gd.FromPolynomial(this)), this._harmonics.preScaled || this._harmonics.preScaleForRendering(), this._harmonics
      }
      addAmbient(dd) {
        pd.h.IL[0].kdd(dd.r, dd.g, dd.b);
        const Jd = pd.h.IL[0];
        this.xx.addInPlace(Jd), this.yy.addInPlace(Jd), this.zz.addInPlace(Jd)
      }
      scaleInPlace(dd) {
        this.x.scaleInPlace(dd), this.y.scaleInPlace(dd), this.z.scaleInPlace(dd), this.xx.scaleInPlace(dd), this.yy.scaleInPlace(dd), this.zz.scaleInPlace(dd), this.yz.scaleInPlace(dd), this.zx.scaleInPlace(dd), this.xy.scaleInPlace(dd)
      }
      updateFromHarmonics(dd) {
        return this._harmonics = dd, this.x.Fs(dd.l11), this.x.scaleInPlace(1.02333).scaleInPlace(-1), this.y.Fs(dd.l1_1), this.y.scaleInPlace(1.02333).scaleInPlace(-1), this.z.Fs(dd.l10), this.z.scaleInPlace(1.02333), this.xx.Fs(dd.l00), pd.h.IL[0].Fs(dd.l20).scaleInPlace(.247708), pd.h.IL[1].Fs(dd.l22).scaleInPlace(.429043), this.xx.scaleInPlace(.886277).hpd(pd.h.IL[0]).addInPlace(pd.h.IL[1]), this.yy.Fs(dd.l00), this.yy.scaleInPlace(.886277).hpd(pd.h.IL[0]).hpd(pd.h.IL[1]), this.zz.Fs(dd.l00), pd.h.IL[0].Fs(dd.l20).scaleInPlace(.495417), this.zz.scaleInPlace(.886277).addInPlace(pd.h.IL[0]), this.yz.Fs(dd.l2_1), this.yz.scaleInPlace(.858086).scaleInPlace(-1), this.zx.Fs(dd.l21), this.zx.scaleInPlace(.858086).scaleInPlace(-1), this.xy.Fs(dd.l2_2), this.xy.scaleInPlace(.858086), this.scaleInPlace(1 / Math.PI), this
      }
      static FromHarmonics(dd) {
        return (new Cd).updateFromHarmonics(dd)
      }
      static FromArray(dd) {
        const Jd = new Cd;
        return pd.n.FromArrayToRef(dd[0], 0, Jd.x), pd.n.FromArrayToRef(dd[1], 0, Jd.y), pd.n.FromArrayToRef(dd[2], 0, Jd.z), pd.n.FromArrayToRef(dd[3], 0, Jd.xx), pd.n.FromArrayToRef(dd[4], 0, Jd.yy), pd.n.FromArrayToRef(dd[5], 0, Jd.zz), pd.n.FromArrayToRef(dd[6], 0, Jd.yz), pd.n.FromArrayToRef(dd[7], 0, Jd.zx), pd.n.FromArrayToRef(dd[8], 0, Jd.xy), Jd
      }
    }
  },
  40426: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => Sd,
      e: () => Xd
    });
    var pd = kd(39964),
      Nd = kd(37280),
      Wd = kd(37251),
      Pd = kd(40115),
      Zd = kd(40402),
      gd = kd(40428),
      Cd = kd(40107),
      Kd = kd(40292),
      od = kd(40101);
    class ld {
      constructor() {
        this._checkCollisions = !1, this._collisionMask = -1, this._collisionGroup = -1, this._surroundingMeshes = null, this._collider = null, this._oldPositionForCollisions = new Wd.n(0, 0, 0), this._diffPositionForCollisions = new Wd.n(0, 0, 0), this._collisionResponse = !0
      }
    }
    var Qd, Ld, Od, ed = kd(39860),
      Rd = kd(40037),
      Id = kd(40299),
      Gd = kd(37443),
      vd = kd(37259),
      xd = kd(40207),
      qd = kd(38812),
      Bd = kd(39966),
      sd = kd(39874),
      ad = kd(37303);

    function Md(dd, Jd) {
      return dd - Math.floor(dd / Jd) * Jd
    }

    function Fd(dd, Jd, kd) {
      dd instanceof Float32Array ? Wd.b.FromArrayToRef(dd, Jd, kd) : kd.kdd((0, Rd.e)(dd[Jd]), (0, Rd.e)(dd[Jd + 1]), (0, Rd.e)(dd[Jd + 2]), (0, Rd.e)(dd[Jd + 3]), (0, Rd.e)(dd[Jd + 4]), (0, Rd.e)(dd[Jd + 5]), (0, Rd.e)(dd[Jd + 6]), (0, Rd.e)(dd[Jd + 7]), (0, Rd.e)(dd[Jd + 8]), (0, Rd.e)(dd[Jd + 9]), (0, Rd.e)(dd[Jd + 10]), (0, Rd.e)(dd[Jd + 11]), (0, Rd.e)(dd[Jd + 12]), (0, Rd.e)(dd[Jd + 13]), (0, Rd.e)(dd[Jd + 14]), (0, Rd.e)(dd[Jd + 15]))
    }

    function Yd(dd, Jd, kd, pd, Nd, Zd, gd, Cd, Kd) {
      const od = kd.texture,
        ld = od?.getInternalTexture(),
        Qd = ld?._bufferView;
      if (!(Qd instanceof Float32Array) && !(Qd instanceof Uint16Array)) return qd.c.Warn("Baked vertex animation bounding info requires CPU-readable Float32Array or Uint16Array texture data.", 1), !1;
      const Ld = od.getSize(),
        Od = function(dd, Jd) {
          const kd = dd.y - dd.x + 1,
            pd = Jd * dd.w / kd,
            Nd = pd < 1 ? 0 : 1,
            Wd = kd - Nd;
          let Pd = Md(pd - Math.floor(pd), 1) * Wd;
          return Pd = Md(Pd + dd.z, Wd), Math.floor(Pd) + dd.x + Nd
        }(pd, kd.time);
      if (!isFinite(Od) || Od < 0 || Od >= Ld.height) return qd.c.Warn("Baked vertex animation bounding info could not be refreshed because the computed frame is outside the texture.", 1), !1;
      const ed = Wd.h.IL[0],
        Rd = Wd.h.Matrix[0],
        Id = Wd.h.Matrix[1],
        Gd = Od * Ld.width * 4,
        vd = Jd === Pd.j.NormalKind ? Wd.n.TransformNormalFromFloatsToRef : Wd.n.TransformCoordinatesFromFloatsToRef;
      for (let Wd = 0, Pd = 0; Wd < dd.length; Wd += 3, Pd += 4) {
        let Jd, kd;
        for (Rd.reset(), Jd = 0; Jd < 4 && Jd < Kd; Jd++) kd = Zd[Pd + Jd], kd > 0 && (Fd(Qd, Gd + 16 * Math.floor(Nd[Pd + Jd]), Id), Id.scaleAndAddToRef(kd, Rd));
        if (gd && Cd)
          for (Jd = 0; Jd < 4 && Jd + 4 < Kd; Jd++) kd = Cd[Pd + Jd], kd > 0 && (Fd(Qd, Gd + 16 * Math.floor(gd[Pd + Jd]), Id), Id.scaleAndAddToRef(kd, Rd));
        vd(dd[Wd], dd[Wd + 1], dd[Wd + 2], Rd, ed), ed.toArray(dd, Wd)
      }
      return !0
    }
    class md {
      constructor() {
        this.facetNb = 0, this.partitioningSubdivisions = 10, this.partitioningBBoxRatio = 1.01, this.facetDataEnabled = !1, this.facetParameters = {}, this.bbSize = Wd.n.Zero(), this.subDiv = {
          max: 1,
          X: 1,
          Y: 1,
          Z: 1
        }, this.facetDepthSort = !1, this.facetDepthSortEnabled = !1
      }
    }
    class bd {
      constructor() {
        this._hasVertexAlpha = !1, this._useVertexColors = !0, this._numBoneInfluencers = 4, this._applyFog = !0, this._receiveShadows = !1, this._facetData = new md, this._visibility = 1, this._skeleton = null, this._layerMask = 268435455, this._computeBonesUsingShaders = !0, this._isActive = !1, this._onlyForInstances = !1, this._isActiveIntermediate = !1, this._onlyForInstancesIntermediate = !1, this._actAsRegularMesh = !1, this._currentLOD = new Map, this._collisionRetryCount = 3, this._morphTargetManager = null, this._renderingGroupId = 0, this._meshBlendingTag = 0, this._bakedVertexAnimationManager = null, this._material = null, this._positions = null, this._pointerOverDisableMeshTesting = !1, this._meshCollisionData = new ld, this._enableDistantPicking = !1, this._rawBoundingInfo = null, this._sideOrientationHint = !1, this._wasActiveLastFrame = !1
      }
    }
    let Sd = (() => {
        var dd;
        let Jd, ld = gd.d,
          Qd = [];
        return dd = class extends ld {
          static get BILLBOARDMODE_NONE() {
            return gd.d.BILLBOARDMODE_NONE
          }
          static get BILLBOARDMODE_X() {
            return gd.d.BILLBOARDMODE_X
          }
          static get BILLBOARDMODE_Y() {
            return gd.d.BILLBOARDMODE_Y
          }
          static get BILLBOARDMODE_Z() {
            return gd.d.BILLBOARDMODE_Z
          }
          static get BILLBOARDMODE_ALL() {
            return gd.d.BILLBOARDMODE_ALL
          }
          static get BILLBOARDMODE_USE_POSITION() {
            return gd.d.BILLBOARDMODE_USE_POSITION
          }
          get facetNb() {
            return this._internalAbstractMeshDataInfo._facetData.facetNb
          }
          get partitioningSubdivisions() {
            return this._internalAbstractMeshDataInfo._facetData.partitioningSubdivisions
          }
          set partitioningSubdivisions(dd) {
            this._internalAbstractMeshDataInfo._facetData.partitioningSubdivisions = dd
          }
          get partitioningBBoxRatio() {
            return this._internalAbstractMeshDataInfo._facetData.partitioningBBoxRatio
          }
          set partitioningBBoxRatio(dd) {
            this._internalAbstractMeshDataInfo._facetData.partitioningBBoxRatio = dd
          }
          get mustDepthSortFacets() {
            return this._internalAbstractMeshDataInfo._facetData.facetDepthSort
          }
          set mustDepthSortFacets(dd) {
            this._internalAbstractMeshDataInfo._facetData.facetDepthSort = dd
          }
          get facetDepthSortFrom() {
            return this._internalAbstractMeshDataInfo._facetData.facetDepthSortFrom
          }
          set facetDepthSortFrom(dd) {
            this._internalAbstractMeshDataInfo._facetData.facetDepthSortFrom = dd
          }
          get collisionRetryCount() {
            return this._internalAbstractMeshDataInfo._collisionRetryCount
          }
          set collisionRetryCount(dd) {
            this._internalAbstractMeshDataInfo._collisionRetryCount = dd
          }
          get isFacetDataEnabled() {
            return this._internalAbstractMeshDataInfo._facetData.facetDataEnabled
          }
          get morphTargetManager() {
            return this._internalAbstractMeshDataInfo._morphTargetManager
          }
          set morphTargetManager(dd) {
            this._internalAbstractMeshDataInfo._morphTargetManager !== dd && (this._internalAbstractMeshDataInfo._morphTargetManager = dd, this._syncGeometryWithMorphTargetManager())
          }
          get bakedVertexAnimationManager() {
            return this._internalAbstractMeshDataInfo._bakedVertexAnimationManager
          }
          set bakedVertexAnimationManager(dd) {
            this._internalAbstractMeshDataInfo._bakedVertexAnimationManager !== dd && (this._internalAbstractMeshDataInfo._bakedVertexAnimationManager = dd, this._markSubMeshesAsAttributesDirty())
          }
          _syncGeometryWithMorphTargetManager() {}
          _updateNonUniformScalingState(dd) {
            return !!super._updateNonUniformScalingState(dd) && (this._markSubMeshesAsMiscDirty(), !0)
          }
          get rawBoundingInfo() {
            return this._internalAbstractMeshDataInfo._rawBoundingInfo
          }
          set rawBoundingInfo(dd) {
            this._internalAbstractMeshDataInfo._rawBoundingInfo = dd
          }
          set Pl(dd) {
            this._internalAbstractMeshDataInfo._meshCollisionData._onCollideObserver && this.onCollideObservable.remove(this._internalAbstractMeshDataInfo._meshCollisionData._onCollideObserver), this._internalAbstractMeshDataInfo._meshCollisionData._onCollideObserver = this.onCollideObservable.add(dd)
          }
          set onCollisionPositionChange(dd) {
            this._internalAbstractMeshDataInfo._meshCollisionData._onCollisionPositionChangeObserver && this.onCollisionPositionChangeObservable.remove(this._internalAbstractMeshDataInfo._meshCollisionData._onCollisionPositionChangeObserver), this._internalAbstractMeshDataInfo._meshCollisionData._onCollisionPositionChangeObserver = this.onCollisionPositionChangeObservable.add(dd)
          }
          get visibility() {
            return this._internalAbstractMeshDataInfo._visibility
          }
          set visibility(dd) {
            if (this._internalAbstractMeshDataInfo._visibility === dd) return;
            const Jd = this._internalAbstractMeshDataInfo._visibility;
            this._internalAbstractMeshDataInfo._visibility = dd, (1 === Jd && 1 !== dd || 1 !== Jd && 1 === dd) && this._markSubMeshesAsDirty((dd => {
              dd.markAsMiscDirty(), dd.markAsPrePassDirty()
            }))
          }
          get pointerOverDisableMeshTesting() {
            return this._internalAbstractMeshDataInfo._pointerOverDisableMeshTesting
          }
          set pointerOverDisableMeshTesting(dd) {
            this._internalAbstractMeshDataInfo._pointerOverDisableMeshTesting = dd
          }
          get renderingGroupId() {
            return this._internalAbstractMeshDataInfo._renderingGroupId
          }
          set renderingGroupId(dd) {
            this._internalAbstractMeshDataInfo._renderingGroupId = dd
          }
          get meshBlendingTag() {
            return this._internalAbstractMeshDataInfo._meshBlendingTag
          }
          set meshBlendingTag(dd) {
            if (!Number.isInteger(dd) || dd < 0 || dd > 255 || 0 !== dd && 0 === (63 & dd)) throw new RangeError("Mesh-blending tag must be 0 or contain a group ID between 1 and 63.");
            this._internalAbstractMeshDataInfo._meshBlendingTag = dd
          }
          get material() {
            return this._internalAbstractMeshDataInfo._material
          }
          set material(dd) {
            this._setMaterial(dd)
          }
          _setMaterial(dd) {
            this._internalAbstractMeshDataInfo._material !== dd && (this._internalAbstractMeshDataInfo._material && this._internalAbstractMeshDataInfo._material.meshMap && (this._internalAbstractMeshDataInfo._material.meshMap[this.uniqueId] = void 0), this._internalAbstractMeshDataInfo._material = dd, dd && dd.meshMap && (dd.meshMap[this.uniqueId] = this), this.onMaterialChangedObservable.hasObservers() && this.onMaterialChangedObservable.notifyObservers(this), this.rG && (this.resetDrawCache(void 0, null == dd), this._unBindEffect()))
          }
          getMaterialForRenderPass(dd) {
            return this._internalAbstractMeshDataInfo._materialForRenderPass?.[dd]
          }
          setMaterialForRenderPass(dd, Jd) {
            this.resetDrawCache(dd), this._internalAbstractMeshDataInfo._materialForRenderPass || (this._internalAbstractMeshDataInfo._materialForRenderPass = []);
            const kd = this._internalAbstractMeshDataInfo._materialForRenderPass[dd];
            kd?.meshMap?.[this.uniqueId] && (kd.meshMap[this.uniqueId] = void 0), this._internalAbstractMeshDataInfo._materialForRenderPass[dd] = Jd, Jd && Jd.meshMap && (Jd.meshMap[this.uniqueId] = this)
          }
          get receiveShadows() {
            return this._internalAbstractMeshDataInfo._receiveShadows
          }
          set receiveShadows(dd) {
            this._internalAbstractMeshDataInfo._receiveShadows !== dd && (this._internalAbstractMeshDataInfo._receiveShadows = dd, this._markSubMeshesAsLightDirty())
          }
          get hasVertexAlpha() {
            return this._internalAbstractMeshDataInfo._hasVertexAlpha
          }
          set hasVertexAlpha(dd) {
            this._internalAbstractMeshDataInfo._hasVertexAlpha !== dd && (this._internalAbstractMeshDataInfo._hasVertexAlpha = dd, this._markSubMeshesAsAttributesDirty(), this._markSubMeshesAsMiscDirty())
          }
          get useVertexColors() {
            return this._internalAbstractMeshDataInfo._useVertexColors
          }
          set useVertexColors(dd) {
            this._internalAbstractMeshDataInfo._useVertexColors !== dd && (this._internalAbstractMeshDataInfo._useVertexColors = dd, this._markSubMeshesAsAttributesDirty())
          }
          get computeBonesUsingShaders() {
            return this._internalAbstractMeshDataInfo._computeBonesUsingShaders
          }
          set computeBonesUsingShaders(dd) {
            this._internalAbstractMeshDataInfo._computeBonesUsingShaders !== dd && (this._internalAbstractMeshDataInfo._computeBonesUsingShaders = dd, this._markSubMeshesAsAttributesDirty())
          }
          get numBoneInfluencers() {
            return this._internalAbstractMeshDataInfo._numBoneInfluencers
          }
          set numBoneInfluencers(dd) {
            this._internalAbstractMeshDataInfo._numBoneInfluencers !== dd && (this._internalAbstractMeshDataInfo._numBoneInfluencers = dd, this._markSubMeshesAsAttributesDirty())
          }
          get applyFog() {
            return this._internalAbstractMeshDataInfo._applyFog
          }
          set applyFog(dd) {
            this._internalAbstractMeshDataInfo._applyFog !== dd && (this._internalAbstractMeshDataInfo._applyFog = dd, this._markSubMeshesAsMiscDirty())
          }
          get enableDistantPicking() {
            return this._internalAbstractMeshDataInfo._enableDistantPicking
          }
          set enableDistantPicking(dd) {
            this._internalAbstractMeshDataInfo._enableDistantPicking = dd
          }
          get layerMask() {
            return this._internalAbstractMeshDataInfo._layerMask
          }
          set layerMask(dd) {
            dd !== this._internalAbstractMeshDataInfo._layerMask && (this._internalAbstractMeshDataInfo._layerMask = dd, this._resyncLightSources())
          }
          get collisionMask() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._collisionMask
          }
          set collisionMask(dd) {
            this._internalAbstractMeshDataInfo._meshCollisionData._collisionMask = isNaN(dd) ? -1 : dd
          }
          get collisionResponse() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._collisionResponse
          }
          set collisionResponse(dd) {
            this._internalAbstractMeshDataInfo._meshCollisionData._collisionResponse = dd
          }
          get collisionGroup() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._collisionGroup
          }
          set collisionGroup(dd) {
            this._internalAbstractMeshDataInfo._meshCollisionData._collisionGroup = isNaN(dd) ? -1 : dd
          }
          get surroundingMeshes() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._surroundingMeshes
          }
          set surroundingMeshes(dd) {
            this._internalAbstractMeshDataInfo._meshCollisionData._surroundingMeshes = dd
          }
          get lightSources() {
            return this._lightSources
          }
          set skeleton(dd) {
            const Jd = this._internalAbstractMeshDataInfo._skeleton;
            Jd && Jd.needInitialSkinMatrix && Jd._unregisterMeshWithPoseMatrix(this), dd && dd.needInitialSkinMatrix && dd._registerMeshWithPoseMatrix(this), this._internalAbstractMeshDataInfo._skeleton = dd, this._internalAbstractMeshDataInfo._skeleton || (this._bonesTransformMatrices = null), this._markSubMeshesAsAttributesDirty()
          }
          get skeleton() {
            return this._internalAbstractMeshDataInfo._skeleton
          }
          constructor(Jd) {
            var kd;
            let pd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            switch (super(Jd, pd, !1), kd = this, this._internalAbstractMeshDataInfo = new bd, this._waitingMaterialId = null, this._waitingMorphTargetManagerId = null, this._waitingSkeletonId = null, this._waitingSkeletonUniqueId = null, this.cullingStrategy = dd.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY, this.onCollideObservable = new Nd.e, this.onCollisionPositionChangeObservable = new Nd.e, this.onMaterialChangedObservable = new Nd.e, this.definedFacingForward = !0, this._occlusionQuery = null, this._renderingGroup = null, this.alphaIndex = Number.MAX_VALUE, this.iO = dd.DefaultIsPickable, this.isNearPickable = !1, this.isNearGrabbable = !1, this.showSubMeshesBoundingBox = !1, this.isBlocker = !1, this.enablePointerMoveEvents = !1, this.outlineColor = Gd.c.Red(), this.outlineWidth = .02, this.overlayColor = Gd.c.Red(), this.overlayAlpha = .5, this.useOctreeForRenderingSelection = !0, this.useOctreeForPicking = !0, this.useOctreeForCollisions = !0, this.RL = !1, this.xL = !1, this.actionManager = null, this.ellipsoid = new Wd.n(.5, 1, .5), this.ellipsoidOffset = new Wd.n(0, 0, 0), this.edgesWidth = 1, this.edgesColor = new Gd.g(1, 0, 0, 1), this._edgesRenderer = null, this._masterMesh = null, this._boundingInfo = null, this._boundingInfoIsDirty = !0, this._renderId = 0, this._intersectionsInProgress = new Array, this._unIndexed = !1, this._lightSources = new Array, this._waitingData = {
                lods: null,
                actions: null,
                Im: null
              }, this._bonesTransformMatrices = null, this._transformMatrixTexture = null, this.onRebuildObservable = new Nd.e, this._onCollisionPositionChange = function(dd, Jd) {
                let pd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                Jd.subtractToRef(kd._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions, kd._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions), kd._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions.length() > sd.b.CollisionsEpsilon && kd.position.addInPlace(kd._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions), pd && kd.onCollideObservable.notifyObservers(pd), kd.onCollisionPositionChangeObservable.notifyObservers(kd.position)
              }, pd = this.Wm(), this.layerMask = pd.defaultRenderableLayerMask, pd.apd(this), this._resyncLightSources(), this._uniformBuffer = new od.e(this.Wm().eL(), void 0, void 0, Jd, !this.Wm().eL().isWebGPU), this._buildUniformLayout(), pd.performancePriority) {
              case 2:
                this.xL = !0;
              case 1:
                this.RL = !0, this.iO = !1
            }
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("world", 16), this._uniformBuffer.addUniform("visibility", 1), this._uniformBuffer.create()
          }
          transferToEffect(dd) {
            const Jd = this._uniformBuffer;
            Jd.o3("world", dd), Jd.updateFloat("visibility", this._internalAbstractMeshDataInfo._visibility), Jd.update()
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
          toString(dd) {
            let Jd = "Name: " + this.name + ", isInstance: " + ("InstancedMesh" === this.getClassName() ? "YES" : "NO");
            Jd += ", # of submeshes: " + (this.rG ? this.rG.length : 0);
            const kd = this._internalAbstractMeshDataInfo._skeleton;
            return kd && (Jd += ", skeleton: " + kd.name), dd && (Jd += ", billboard mode: " + ["NONE", "X", "Y", null, "Z", null, null, "ALL"][this.billboardMode], Jd += ", freeze wrld mat: " + (this._isWorldMatrixFrozen || this._waitingData.Im ? "YES" : "NO")), Jd
          }
          _getEffectiveParent() {
            return this._masterMesh && this.billboardMode !== gd.d.BILLBOARDMODE_NONE ? this._masterMesh : super._getEffectiveParent()
          }
          _getActionManagerForTrigger(dd) {
            let Jd = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            if (this.actionManager && (Jd || this.actionManager.isRecursive)) {
              if (!dd) return this.actionManager;
              if (this.actionManager.hasSpecificTrigger(dd)) return this.actionManager
            }
            return this.parent ? this.parent._getActionManagerForTrigger(dd, !1) : null
          }
          _releaseRenderPassId(dd) {}
          _rebuild() {
            if (this.onRebuildObservable.notifyObservers(this), null !== this._occlusionQuery && (this._occlusionQuery = null), this.rG) {
              for (const dd of this.rG) dd._rebuild();
              this.resetDrawCache()
            }
          }
          _resyncLightSources() {
            this._lightSources.length = 0;
            for (const dd of this.Wm().lights) dd.isEnabled() && dd.canAffectMesh(this) && this._lightSources.push(dd);
            this._markSubMeshesAsLightDirty()
          }
          _resyncLightSource(dd) {
            const Jd = dd.isEnabled() && dd.canAffectMesh(this),
              kd = this._lightSources.indexOf(dd);
            let pd = !1;
            if (-1 === kd) {
              if (!Jd) return;
              this._lightSources.push(dd)
            } else {
              if (Jd) return;
              pd = !0, this._lightSources.splice(kd, 1)
            }
            this._markSubMeshesAsLightDirty(pd)
          }
          _unBindEffect() {
            for (const dd of this.rG) dd.setEffect(null)
          }
          _removeLightSource(dd, Jd) {
            const kd = this._lightSources.indexOf(dd); - 1 !== kd && (this._lightSources.splice(kd, 1), this._markSubMeshesAsLightDirty(Jd))
          }
          _markSubMeshesAsDirty(dd) {
            if (this.rG)
              for (const Jd of this.rG)
                for (let kd = 0; kd < Jd._drawWrappers.length; ++kd) {
                  const pd = Jd._drawWrappers[kd];
                  pd && pd.defines && pd.defines.markAllAsDirty && dd(pd.defines)
                }
          }
          _markSubMeshesAsLightDirty() {
            let dd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            this._markSubMeshesAsDirty((Jd => Jd.markAsLightDirty(dd)))
          }
          _markSubMeshesAsAttributesDirty() {
            this._markSubMeshesAsDirty((dd => dd.markAsAttributesDirty()))
          }
          _markSubMeshesAsMiscDirty() {
            this._markSubMeshesAsDirty((dd => dd.markAsMiscDirty()))
          }
          dkd(dd) {
            return this._currentRenderId = Number.MAX_VALUE, super.dkd(dd), this._isDirty = !0, this
          }
          resetDrawCache(dd) {
            let Jd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (this.rG)
              for (const kd of this.rG) kd.resetDrawCache(dd, Jd)
          }
          get isBlocked() {
            return !1
          }
          getLOD(dd) {
            return this
          }
          getTotalVertices() {
            return 0
          }
          getTotalIndices() {
            return 0
          }
          ipd() {
            return null
          }
          getVerticesData(dd) {
            return null
          }
          setVerticesData(dd, Jd, kd, pd) {
            return this
          }
          updateVerticesData(dd, Jd, kd, pd) {
            return this
          }
          setIndices(dd, Jd) {
            return this
          }
          isVerticesDataPresent(dd) {
            return !1
          }
          pU() {
            return this._masterMesh ? this._masterMesh.pU() : (this._boundingInfoIsDirty && (this._boundingInfoIsDirty = !1, this._updateBoundingInfo()), this._boundingInfo)
          }
          getRawBoundingInfo() {
            return this.rawBoundingInfo ?? this.pU()
          }
          setBoundingInfo(dd) {
            return this._boundingInfo = dd, this
          }
          get hasBoundingInfo() {
            return null !== this._boundingInfo
          }
          buildBoundingInfo(dd, Jd, kd) {
            return this._boundingInfo = new Kd.b(dd, Jd, kd), this._boundingInfo
          }
          normalizeToUnitCube() {
            let dd = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
              Jd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              kd = arguments.length > 2 ? arguments[2] : void 0;
            return super.normalizeToUnitCube(dd, Jd, kd)
          }
          get useBones() {
            return this.skeleton && this.Wm().skeletonsEnabled && this.isVerticesDataPresent(Pd.j.MatricesIndicesKind) && this.isVerticesDataPresent(Pd.j.MatricesWeightsKind)
          }
          _preActivate() {}
          _preActivateForIntermediateRendering(dd) {}
          _activate(dd, Jd) {
            return this._renderId = dd, !0
          }
          _postActivate() {}
          _freeze() {}
          _unFreeze() {}
          getWorldMatrix() {
            return this._masterMesh && this.billboardMode === gd.d.BILLBOARDMODE_NONE ? this._masterMesh.getWorldMatrix() : super.getWorldMatrix()
          }
          _getWorldMatrixDeterminant() {
            return this._masterMesh ? this._masterMesh._getWorldMatrixDeterminant() : super._getWorldMatrixDeterminant()
          }
          get Km() {
            return !1
          }
          get eNd() {
            return !1
          }
          get hasThinInstances() {
            return !1
          }
          movePOV(dd, Jd, kd) {
            return this.position.addInPlace(this.calcMovePOV(dd, Jd, kd)), this
          }
          calcMovePOV(dd, Jd, kd) {
            const pd = new Wd.b;
            (this.rotationQuaternion ? this.rotationQuaternion : Wd.d.RotationYawPitchRoll(this.rotation.y, this.rotation.x, this.rotation.z)).toRotationMatrix(pd);
            const Nd = Wd.n.Zero(),
              Pd = this.definedFacingForward ? -1 : 1;
            return Wd.n.TransformCoordinatesFromFloatsToRef(dd * Pd, Jd, kd * Pd, pd, Nd), Nd
          }
          rotatePOV(dd, Jd, kd) {
            return this.rotation.addInPlace(this.calcRotatePOV(dd, Jd, kd)), this
          }
          calcRotatePOV(dd, Jd, kd) {
            const pd = this.definedFacingForward ? 1 : -1;
            return new Wd.n(dd * pd, Jd, kd * pd)
          }
          _refreshBoundingInfo(dd, Jd) {
            if (dd) {
              const kd = (0, Id.d)(dd, 0, this.getTotalVertices(), Jd);
              this._boundingInfo ? this._boundingInfo.reConstruct(kd.minimum, kd.maximum) : this._boundingInfo = new Kd.b(kd.minimum, kd.maximum)
            }
            if (this.rG)
              for (let kd = 0; kd < this.rG.length; kd++) this.rG[kd].refreshBoundingInfo(dd);
            this._updateBoundingInfo()
          }
          _refreshBoundingInfoDirect(dd) {
            if (this._boundingInfo ? this._boundingInfo.reConstruct(dd.minimum, dd.maximum) : this._boundingInfo = new Kd.b(dd.minimum, dd.maximum), this.rG)
              for (let Jd = 0; Jd < this.rG.length; Jd++) this.rG[Jd].refreshBoundingInfo(null);
            this._updateBoundingInfo()
          }
          static _ApplySkeleton(dd, Jd, kd, pd, Nd, Zd, gd) {
            ! function(dd, Jd, kd, pd, Nd, Zd, gd) {
              const Cd = Wd.h.IL[0],
                Kd = Wd.h.Matrix[0],
                od = Wd.h.Matrix[1],
                ld = Jd === Pd.j.NormalKind ? Wd.n.TransformNormalFromFloatsToRef : Wd.n.TransformCoordinatesFromFloatsToRef;
              for (let Pd = 0, Qd = 0; Pd < dd.length; Pd += 3, Qd += 4) {
                let Jd, Ld;
                for (Kd.reset(), Jd = 0; Jd < 4; Jd++) Ld = Nd[Qd + Jd], Ld > 0 && (Wd.b.FromFloat32ArrayToRefScaled(kd, Math.floor(16 * pd[Qd + Jd]), Ld, od), Kd.addToSelf(od));
                if (Zd && gd)
                  for (Jd = 0; Jd < 4; Jd++) Ld = gd[Qd + Jd], Ld > 0 && (Wd.b.FromFloat32ArrayToRefScaled(kd, Math.floor(16 * Zd[Qd + Jd]), Ld, od), Kd.addToSelf(od));
                ld(dd[Pd], dd[Pd + 1], dd[Pd + 2], Kd, Cd), Cd.toArray(dd, Pd)
              }
            }(dd, Jd, kd, pd, Nd, Zd, gd)
          }
          _getData(Jd, kd) {
            let pd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Pd.j.PositionKind;
            const Nd = Jd.cache,
              Zd = dd => {
                if (Nd) {
                  const Jd = Nd._vertexData || (Nd._vertexData = {});
                  return Jd[dd] || this.copyVerticesData(dd, Jd), Jd[dd]
                }
                return this.getVerticesData(dd)
              };
            if (kd || (kd = Zd(pd)), !kd) return null;
            Nd ? (Nd._outputData ? Nd._outputData.set(kd) : Nd._outputData = new Float32Array(kd), kd = Nd._outputData) : (Jd.applyMorph && this.morphTargetManager || Jd.applySkeleton && this.skeleton || Jd.applyBakedVertexAnimation && this.bakedVertexAnimationManager?.isEnabled) && (kd = kd.slice()), Jd.applyMorph && this.morphTargetManager && function(dd, Jd, kd) {
              let pd;
              switch (Jd) {
                case Pd.j.PositionKind:
                  pd = dd => dd.getPositions();
                  break;
                case Pd.j.NormalKind:
                  pd = dd => dd.getNormals();
                  break;
                case Pd.j.TangentKind:
                  pd = dd => dd.getTangents();
                  break;
                case Pd.j.UVKind:
                  pd = dd => dd.getUVs();
                  break;
                case Pd.j.UV2Kind:
                  pd = dd => dd.getUV2s();
                  break;
                case Pd.j.ColorKind:
                  pd = dd => dd.getColors();
                  break;
                default:
                  return
              }
              for (let Nd = 0; Nd < dd.length; Nd++) {
                let Jd = dd[Nd];
                for (let Wd = 0; Wd < kd.numTargets; Wd++) {
                  const Pd = kd.getTarget(Wd),
                    Zd = Pd.influence;
                  if (0 !== Zd) {
                    const kd = pd(Pd);
                    kd && (Jd += (kd[Nd] - dd[Nd]) * Zd)
                  }
                }
                dd[Nd] = Jd
              }
            }(kd, pd, this.morphTargetManager);
            const gd = this.bakedVertexAnimationManager;
            let Cd = !1;
            if (Jd.applyBakedVertexAnimation && gd?.isEnabled) {
              const dd = Zd(Pd.j.MatricesIndicesKind),
                Nd = Zd(Pd.j.MatricesWeightsKind);
              if (Nd && dd) {
                const Wd = this.numBoneInfluencers > 4,
                  Kd = Wd ? Zd(Pd.j.MatricesIndicesExtraKind) : null,
                  od = Wd ? Zd(Pd.j.MatricesWeightsExtraKind) : null;
                Cd = Yd(kd, pd, gd, Jd.bakedVertexAnimationSettings ?? gd.animationParameters, dd, Nd, Kd, od, this.numBoneInfluencers)
              }
            }
            if (!Cd && Jd.applySkeleton && this.skeleton) {
              const Jd = Zd(Pd.j.MatricesIndicesKind),
                Nd = Zd(Pd.j.MatricesWeightsKind);
              if (Nd && Jd) {
                const Wd = this.numBoneInfluencers > 4,
                  gd = Wd ? Zd(Pd.j.MatricesIndicesExtraKind) : null,
                  Cd = Wd ? Zd(Pd.j.MatricesWeightsExtraKind) : null,
                  Kd = this.skeleton.getTransformMatrices(this);
                dd._ApplySkeleton(kd, pd, Kd, Jd, Nd, gd, Cd)
              }
            }
            if (!1 !== Jd.updatePositionsArray && pd === Pd.j.PositionKind) {
              const dd = this._internalAbstractMeshDataInfo._positions || [],
                Jd = dd.length;
              if (dd.length = kd.length / 3, Jd < dd.length)
                for (let kd = Jd; kd < dd.length; kd++) dd[kd] = new Wd.n;
              for (let pd = 0, Nd = 0; pd < dd.length; pd++, Nd += 3) dd[pd].kdd(kd[Nd], kd[Nd + 1], kd[Nd + 2]);
              this._internalAbstractMeshDataInfo._positions = dd
            }
            return kd
          }
          getNormalsData() {
            let dd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              Jd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return this._getData({
              applySkeleton: dd,
              applyMorph: Jd,
              updatePositionsArray: !1
            }, null, Pd.j.NormalKind)
          }
          bV() {
            let dd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              Jd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            return this._getData({
              applySkeleton: dd,
              applyMorph: Jd,
              updatePositionsArray: !1
            }, kd, Pd.j.PositionKind)
          }
          _updateBoundingInfo() {
            return this._boundingInfo ? this._boundingInfo.update(this.worldMatrixFromCache) : this._boundingInfo = new Kd.b(Wd.n.Zero(), Wd.n.Zero(), this.worldMatrixFromCache), this._updateSubMeshesBoundingInfo(this.worldMatrixFromCache), this
          }
          _updateSubMeshesBoundingInfo(dd) {
            if (!this.rG) return this;
            const Jd = this.rG.length;
            for (let kd = 0; kd < Jd; kd++) {
              const pd = this.rG[kd];
              (Jd > 1 || !pd.IsGlobal) && pd.updateBoundingInfo(dd)
            }
            return this
          }
          _afterComputeWorldMatrix() {
            this.xL || (this._boundingInfoIsDirty = !0)
          }
          isInFrustum(dd) {
            return this.pU().isInFrustum(dd, this.cullingStrategy)
          }
          isCompletelyInFrustum(dd) {
            return this.pU().isCompletelyInFrustum(dd)
          }
          KNd(dd) {
            let Jd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              kd = arguments.length > 2 ? arguments[2] : void 0;
            const pd = this.pU(),
              Nd = dd.pU();
            if (pd.intersects(Nd, Jd)) return !0;
            if (kd)
              for (const Wd of this.getChildMeshes())
                if (Wd.KNd(dd, Jd, !0)) return !0;
            return !1
          }
          intersectsPoint(dd) {
            return this.pU().intersectsPoint(dd)
          }
          get checkCollisions() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._checkCollisions
          }
          set checkCollisions(dd) {
            this._internalAbstractMeshDataInfo._meshCollisionData._checkCollisions = dd
          }
          get collider() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._collider
          }
          moveWithCollisions(dd) {
            let Jd = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            this.getAbsolutePosition().addToRef(this.ellipsoidOffset, this._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions);
            const kd = this.Wm().collisionCoordinator;
            return this._internalAbstractMeshDataInfo._meshCollisionData._collider || (this._internalAbstractMeshDataInfo._meshCollisionData._collider = kd.createCollider()), this._internalAbstractMeshDataInfo._meshCollisionData._collider._radius = this.ellipsoid, kd.getNewPosition(this._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions, dd, this._internalAbstractMeshDataInfo._meshCollisionData._collider, this.collisionRetryCount, this, this._onCollisionPositionChange, this.uniqueId, Jd), this
          }
          _collideForSubMesh(dd, Jd, kd) {
            if (this._generatePointsArray(), !this._positions) return this;
            if (!dd._lastColliderWorldVertices || !dd._lastColliderTransformMatrix.equals(Jd)) {
              dd._lastColliderTransformMatrix = Jd.clone(), dd._lastColliderWorldVertices = [], dd._trianglePlanes = [];
              const kd = dd.verticesStart,
                pd = dd.verticesStart + dd.verticesCount;
              for (let Nd = kd; Nd < pd; Nd++) dd._lastColliderWorldVertices.push(Wd.n.TransformCoordinates(this._positions[Nd], Jd))
            }
            return kd._collide(dd._trianglePlanes, dd._lastColliderWorldVertices, this.ipd(), dd.indexStart, dd.indexStart + dd.indexCount, dd.verticesStart, !!dd.qL(), this, this._shouldConvertRHS(), 7 === dd.qL()?.fillMode), this
          }
          _processCollisionsForSubMeshes(dd, Jd) {
            const kd = this._scene.getCollidingSubMeshCandidates(this, dd),
              pd = kd.length;
            for (let Nd = 0; Nd < pd; Nd++) {
              const Wd = kd.data[Nd];
              pd > 1 && !Wd._checkCollision(dd) || this._collideForSubMesh(Wd, Jd, dd)
            }
            return this
          }
          _shouldConvertRHS() {
            return !1
          }
          _checkCollision(dd) {
            if (!this.pU()._checkCollision(dd)) return this;
            const Jd = Wd.h.Matrix[0],
              kd = Wd.h.Matrix[1];
            return Wd.b.ScalingToRef(1 / dd._radius.x, 1 / dd._radius.y, 1 / dd._radius.z, Jd), this.worldMatrixFromCache.multiplyToRef(Jd, kd), this._processCollisionsForSubMeshes(dd, kd), this
          }
          _generatePointsArray() {
            return !1
          }
          intersects(dd, Jd, kd) {
            let pd = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              Nd = arguments.length > 4 ? arguments[4] : void 0,
              Pd = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
            const Zd = new Cd.d,
              gd = this.getClassName(),
              Kd = "InstancedLinesMesh" === gd || "LinesMesh" === gd || "GreasedLineMesh" === gd ? this.intersectionThreshold : 0,
              od = this.pU();
            if (!this.rG) return Zd;
            if (!Pd && (!dd.intersectsSphere(od.zpd, Kd) || !dd.intersectsBox(od.boundingBox, Kd))) return Zd;
            if (pd) return Zd.hit = !Pd, Zd.pickedMesh = Pd ? null : this, Zd.distance = Pd ? 0 : Wd.n.Distance(dd.origin, od.zpd.center), Zd.subMeshId = 0, Zd;
            if (!this._generatePointsArray()) return Zd;
            let ld = null;
            const Qd = this._scene.getIntersectingSubMeshCandidates(this, dd),
              Ld = Qd.length;
            let Od = !1;
            for (let Wd = 0; Wd < Ld; Wd++) {
              const dd = Qd.data[Wd].qL();
              if (dd && (7 == dd.fillMode || 0 == dd.fillMode || 1 == dd.fillMode || 2 == dd.fillMode || 4 == dd.fillMode)) {
                Od = !0;
                break
              }
            }
            if (!Od) return Zd.hit = !0, Zd.pickedMesh = this, Zd.distance = Wd.n.Distance(dd.origin, od.zpd.center), Zd.subMeshId = -1, Zd;
            for (let Wd = 0; Wd < Ld; Wd++) {
              const pd = Qd.data[Wd];
              if (Ld > 1 && !Pd && !pd.canIntersects(dd)) continue;
              const Nd = pd.intersects(dd, this._positions, this.ipd(), Jd, kd);
              if (Nd && (Jd || !ld || Nd.distance < ld.distance) && (ld = Nd, ld.subMeshId = pd._id, ld._internalSubMeshId = Wd, Jd)) break
            }
            if (ld) {
              const Jd = Nd ?? this.getWorldMatrix(),
                kd = Wd.h.IL[0],
                pd = Wd.h.IL[1];
              Wd.n.TransformCoordinatesToRef(dd.origin, Jd, kd), dd.direction.scaleToRef(ld.distance, pd);
              const Pd = Wd.n.TransformNormal(pd, Jd).addInPlace(kd);
              return Zd.hit = !0, Zd.distance = Wd.n.Distance(kd, Pd), Zd.pickedPoint = Pd, Zd.pickedMesh = this, Zd.bu = ld.bu || 0, Zd.bv = ld.bv || 0, Zd.subMeshFaceId = ld.faceId, Zd.faceId = ld.faceId + Qd.data[ld._internalSubMeshId].indexStart / (-1 !== this.getClassName().indexOf("LinesMesh") ? 2 : 3), Zd.subMeshId = ld.subMeshId, Zd
            }
            return Zd
          }
          clone(dd, Jd, kd) {
            return null
          }
          releaseSubMeshes() {
            let dd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (this.rG)
              for (; this.rG.length;) this.rG[0].dispose(dd);
            else this.rG = [];
            return this
          }
          dispose(dd) {
            let Jd, kd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            const pd = this.Wm();
            for (this._scene.useMaterialMeshMap && this._internalAbstractMeshDataInfo._material && this._internalAbstractMeshDataInfo._material.meshMap && (this._internalAbstractMeshDataInfo._material.meshMap[this.uniqueId] = void 0), pd.freeActiveMeshes(), pd.freeRenderingGroups(), pd.renderingManager.maintainStateBetweenFrames && pd.renderingManager.restoreDispachedFlags(), void 0 !== this.actionManager && null !== this.actionManager && (this.actionManager.disposeWhenUnowned && !this._scene.meshes.some((dd => dd !== this && dd.actionManager === this.actionManager)) && this.actionManager.dispose(), this.actionManager = null), this._internalAbstractMeshDataInfo._skeleton = null, this._transformMatrixTexture && (this._transformMatrixTexture.dispose(), this._transformMatrixTexture = null), Jd = 0; Jd < this._intersectionsInProgress.length; Jd++) {
              const dd = this._intersectionsInProgress[Jd],
                kd = dd._intersectionsInProgress.indexOf(this);
              dd._intersectionsInProgress.splice(kd, 1)
            }
            this._intersectionsInProgress.length = 0;
            const Nd = pd.lights;
            for (const Pd of Nd) {
              let dd = Pd.includedOnlyMeshes.indexOf(this); - 1 !== dd && Pd.includedOnlyMeshes.splice(dd, 1), dd = Pd.excludedMeshes.indexOf(this), -1 !== dd && Pd.excludedMeshes.splice(dd, 1);
              const Jd = Pd.getShadowGenerators();
              if (Jd) {
                const kd = Jd.values();
                for (let Jd = kd.next(); !0 !== Jd.done; Jd = kd.next()) {
                  const kd = Jd.value.getShadowMap();
                  kd && kd.renderList && (dd = kd.renderList.indexOf(this), -1 !== dd && kd.renderList.splice(dd, 1))
                }
              }
            }
            this.releaseSubMeshes(pd._isDisposing);
            const Wd = pd.eL();
            if (null !== this._occlusionQuery && (this.isOcclusionQueryInProgress = !1, Wd.deleteQuery(this._occlusionQuery), this._occlusionQuery = null), Wd.wipeCaches(), pd.Tm(this), this._parentContainer) {
              const dd = this._parentContainer.meshes.indexOf(this);
              dd > -1 && this._parentContainer.meshes.splice(dd, 1), this._parentContainer = null
            }
            if (kd && this.material && ("MultiMaterial" === this.material.getClassName() ? this.material.dispose(!1, !0, !0) : this.material.dispose(!1, !0)), !dd)
              for (Jd = 0; Jd < pd.Qv.length; Jd++) pd.Qv[Jd].emitter === this && (pd.Qv[Jd].dispose(), Jd--);
            this._internalAbstractMeshDataInfo._facetData.facetDataEnabled && this.disableFacetData(), this._uniformBuffer.dispose(), this.onAfterWorldMatrixUpdateObservable.clear(), this.onCollideObservable.clear(), this.onCollisionPositionChangeObservable.clear(), this.onRebuildObservable.clear(), super.dispose(dd, kd)
          }
          _initFacetData() {
            const dd = this._internalAbstractMeshDataInfo._facetData;
            dd.facetNormals || (dd.facetNormals = []), dd.facetPositions || (dd.facetPositions = []), dd.facetPartitioning || (dd.facetPartitioning = new Array), dd.facetNb = this.ipd().length / 3 | 0, dd.partitioningSubdivisions = dd.partitioningSubdivisions ? dd.partitioningSubdivisions : 10, dd.partitioningBBoxRatio = dd.partitioningBBoxRatio ? dd.partitioningBBoxRatio : 1.01;
            for (let Jd = 0; Jd < dd.facetNb; Jd++) dd.facetNormals[Jd] = Wd.n.Zero(), dd.facetPositions[Jd] = Wd.n.Zero();
            return dd.facetDataEnabled = !0, this
          }
          updateFacetData() {
            const dd = this._internalAbstractMeshDataInfo._facetData;
            dd.facetDataEnabled || this._initFacetData();
            const Jd = this.getVerticesData(Pd.j.PositionKind),
              kd = this.ipd(),
              pd = this.getVerticesData(Pd.j.NormalKind)?.slice(),
              Nd = this.pU();
            if (dd.facetDepthSort && !dd.facetDepthSortEnabled) {
              if (dd.facetDepthSortEnabled = !0, kd instanceof Uint16Array) dd.depthSortedIndices = new Uint16Array(kd);
              else if (kd instanceof Uint32Array) dd.depthSortedIndices = new Uint32Array(kd);
              else {
                let Jd = !1;
                for (let dd = 0; dd < kd.length; dd++)
                  if (kd[dd] > 65535) {
                    Jd = !0;
                    break
                  } dd.depthSortedIndices = Jd ? new Uint32Array(kd) : new Uint16Array(kd)
              }
              if (dd.facetDepthSortFunction = function(dd, Jd) {
                  return Jd.sqDistance - dd.sqDistance
                }, !dd.facetDepthSortFrom) {
                const Jd = this.Wm().activeCamera;
                dd.facetDepthSortFrom = Jd ? Jd.position : Wd.n.Zero()
              }
              dd.depthSortedFacets = [];
              for (let Jd = 0; Jd < dd.facetNb; Jd++) {
                const kd = {
                  ind: 3 * Jd,
                  sqDistance: 0
                };
                dd.depthSortedFacets.push(kd)
              }
              dd.invertedMatrix = Wd.b.Identity(), dd.facetDepthSortOrigin = Wd.n.Zero()
            }
            dd.bbSize.x = Nd.maximum.x - Nd.minimum.x > vd.e ? Nd.maximum.x - Nd.minimum.x : vd.e, dd.bbSize.y = Nd.maximum.y - Nd.minimum.y > vd.e ? Nd.maximum.y - Nd.minimum.y : vd.e, dd.bbSize.z = Nd.maximum.z - Nd.minimum.z > vd.e ? Nd.maximum.z - Nd.minimum.z : vd.e;
            let gd = dd.bbSize.x > dd.bbSize.y ? dd.bbSize.x : dd.bbSize.y;
            if (gd = gd > dd.bbSize.z ? gd : dd.bbSize.z, dd.subDiv.max = dd.partitioningSubdivisions, dd.subDiv.X = Math.floor(dd.subDiv.max * dd.bbSize.x / gd), dd.subDiv.Y = Math.floor(dd.subDiv.max * dd.bbSize.y / gd), dd.subDiv.Z = Math.floor(dd.subDiv.max * dd.bbSize.z / gd), dd.subDiv.X = dd.subDiv.X < 1 ? 1 : dd.subDiv.X, dd.subDiv.Y = dd.subDiv.Y < 1 ? 1 : dd.subDiv.Y, dd.subDiv.Z = dd.subDiv.Z < 1 ? 1 : dd.subDiv.Z, dd.facetParameters.facetNormals = this.getFacetLocalNormals(), dd.facetParameters.facetPositions = this.getFacetLocalPositions(), dd.facetParameters.facetPartitioning = this.getFacetLocalPartitioning(), dd.facetParameters.bInfo = Nd, dd.facetParameters.bbSize = dd.bbSize, dd.facetParameters.subDiv = dd.subDiv, dd.facetParameters.ratio = this.partitioningBBoxRatio, dd.facetParameters.depthSort = dd.facetDepthSort, dd.facetDepthSort && dd.facetDepthSortEnabled && (this.computeWorldMatrix(!0), this._worldMatrix.invertToRef(dd.invertedMatrix), Wd.n.TransformCoordinatesToRef(dd.facetDepthSortFrom, dd.invertedMatrix, dd.facetDepthSortOrigin), dd.facetParameters.distanceTo = dd.facetDepthSortOrigin), dd.facetParameters.depthSortedFacets = dd.depthSortedFacets, pd && Zd.c.ComputeNormals(Jd, kd, pd, dd.facetParameters), dd.facetDepthSort && dd.facetDepthSortEnabled) {
              dd.depthSortedFacets.sort(dd.facetDepthSortFunction);
              const Jd = dd.depthSortedIndices.length / 3 | 0;
              for (let pd = 0; pd < Jd; pd++) {
                const Jd = dd.depthSortedFacets[pd].ind;
                dd.depthSortedIndices[3 * pd] = kd[Jd], dd.depthSortedIndices[3 * pd + 1] = kd[Jd + 1], dd.depthSortedIndices[3 * pd + 2] = kd[Jd + 2]
              }
              this.updateIndices(dd.depthSortedIndices, void 0, !0)
            }
            return this
          }
          getFacetLocalNormals() {
            const dd = this._internalAbstractMeshDataInfo._facetData;
            return dd.facetNormals || this.updateFacetData(), dd.facetNormals
          }
          getFacetLocalPositions() {
            const dd = this._internalAbstractMeshDataInfo._facetData;
            return dd.facetPositions || this.updateFacetData(), dd.facetPositions
          }
          getFacetLocalPartitioning() {
            const dd = this._internalAbstractMeshDataInfo._facetData;
            return dd.facetPartitioning || this.updateFacetData(), dd.facetPartitioning
          }
          getFacetPosition(dd) {
            const Jd = Wd.n.Zero();
            return this.getFacetPositionToRef(dd, Jd), Jd
          }
          getFacetPositionToRef(dd, Jd) {
            const kd = this.getFacetLocalPositions()[dd],
              pd = this.getWorldMatrix();
            return Wd.n.TransformCoordinatesToRef(kd, pd, Jd), this
          }
          getFacetNormal(dd) {
            const Jd = Wd.n.Zero();
            return this.getFacetNormalToRef(dd, Jd), Jd
          }
          getFacetNormalToRef(dd, Jd) {
            const kd = this.getFacetLocalNormals()[dd];
            return Wd.n.TransformNormalToRef(kd, this.getWorldMatrix(), Jd), this
          }
          getFacetsAtLocalCoordinates(dd, Jd, kd) {
            const pd = this.pU(),
              Nd = this._internalAbstractMeshDataInfo._facetData,
              Wd = Math.floor((dd - pd.minimum.x * Nd.partitioningBBoxRatio) * Nd.subDiv.X * Nd.partitioningBBoxRatio / Nd.bbSize.x),
              Pd = Math.floor((Jd - pd.minimum.y * Nd.partitioningBBoxRatio) * Nd.subDiv.Y * Nd.partitioningBBoxRatio / Nd.bbSize.y),
              Zd = Math.floor((kd - pd.minimum.z * Nd.partitioningBBoxRatio) * Nd.subDiv.Z * Nd.partitioningBBoxRatio / Nd.bbSize.z);
            return Wd < 0 || Wd > Nd.subDiv.max || Pd < 0 || Pd > Nd.subDiv.max || Zd < 0 || Zd > Nd.subDiv.max ? null : Nd.facetPartitioning[Wd + Nd.subDiv.max * Pd + Nd.subDiv.max * Nd.subDiv.max * Zd]
          }
          getClosestFacetAtCoordinates(dd, Jd, kd, pd) {
            let Nd = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              Pd = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
            const Zd = this.getWorldMatrix(),
              gd = Wd.h.Matrix[5];
            Zd.invertToRef(gd);
            const Cd = Wd.h.IL[8];
            Wd.n.TransformCoordinatesFromFloatsToRef(dd, Jd, kd, gd, Cd);
            const Kd = this.getClosestFacetAtLocalCoordinates(Cd.x, Cd.y, Cd.z, pd, Nd, Pd);
            return pd && Wd.n.TransformCoordinatesFromFloatsToRef(pd.x, pd.y, pd.z, Zd, pd), Kd
          }
          getClosestFacetAtLocalCoordinates(dd, Jd, kd, pd) {
            let Nd, Wd, Pd, Zd, gd, Cd, Kd, od, ld = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              Qd = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
              Ld = null;
            const Od = this.getFacetLocalPositions(),
              ed = this.getFacetLocalNormals(),
              Rd = this.getFacetsAtLocalCoordinates(dd, Jd, kd);
            if (!Rd) return null;
            let Id, Gd, vd, xd, qd = Number.MAX_VALUE;
            for (let Bd = 0; Bd < Rd.length; Bd++) Gd = Rd[Bd], vd = ed[Gd], xd = Od[Gd], Zd = (dd - xd.x) * vd.x + (Jd - xd.y) * vd.y + (kd - xd.z) * vd.z, (!ld || ld && Qd && Zd >= 0 || ld && !Qd && Zd <= 0) && (Zd = vd.x * xd.x + vd.y * xd.y + vd.z * xd.z, gd = -(vd.x * dd + vd.y * Jd + vd.z * kd - Zd) / (vd.x * vd.x + vd.y * vd.y + vd.z * vd.z), Cd = dd + vd.x * gd, Kd = Jd + vd.y * gd, od = kd + vd.z * gd, Nd = Cd - dd, Wd = Kd - Jd, Pd = od - kd, Id = Nd * Nd + Wd * Wd + Pd * Pd, Id < qd && (qd = Id, Ld = Gd, pd && (pd.x = Cd, pd.y = Kd, pd.z = od)));
            return Ld
          }
          getFacetDataParameters() {
            return this._internalAbstractMeshDataInfo._facetData.facetParameters
          }
          disableFacetData() {
            const dd = this._internalAbstractMeshDataInfo._facetData;
            return dd.facetDataEnabled && (dd.facetDataEnabled = !1, dd.facetPositions = [], dd.facetNormals = [], dd.facetPartitioning = new Array, dd.facetParameters = {}, dd.depthSortedIndices = new Uint32Array(0)), this
          }
          updateIndices(dd, Jd) {
            return this
          }
          createNormals(dd) {
            const Jd = this.getVerticesData(Pd.j.PositionKind),
              kd = this.ipd();
            let pd;
            return pd = this.isVerticesDataPresent(Pd.j.NormalKind) ? this.getVerticesData(Pd.j.NormalKind) : [], Zd.c.ComputeNormals(Jd, kd, pd, {
              useRightHandedSystem: this.Wm().useRightHandedSystem
            }), this.setVerticesData(Pd.j.NormalKind, pd, dd), this
          }
          async optimizeIndicesAsync() {
            const dd = this.ipd();
            if (!dd) return this;
            const {
              OptimizeIndices: Jd
            } = await kd.e(342).then((() => kd(42462)));
            return Jd(dd), this.setIndices(dd, this.getTotalVertices()), this
          }
          alignWithNormal(dd, Jd) {
            Jd || (Jd = xd.c.Y);
            const kd = Wd.h.IL[0],
              pd = Wd.h.IL[1];
            return Wd.n.CrossToRef(Jd, dd, pd), Wd.n.CrossToRef(dd, pd, kd), this.rotationQuaternion ? Wd.d.RotationQuaternionFromAxisToRef(kd, dd, pd, this.rotationQuaternion) : Wd.n.RotationFromAxisToRef(kd, dd, pd, this.rotation), this
          }
          _checkOcclusionQuery() {
            return !1
          }
          disableEdgesRendering() {
            throw (0, ed.n)("EdgesRenderer")
          }
          enableEdgesRendering(dd, Jd, kd) {
            throw (0, ed.n)("EdgesRenderer")
          }
          getConnectedParticleSystems() {
            return this._scene.Qv.filter((dd => dd.emitter === this))
          }
        }, (() => {
          const kd = "function" === typeof Symbol && Symbol.metadata ? Object.create(ld[Symbol.metadata] ?? null) : void 0;
          Jd = [Bd.h.filter((function() {
            return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0]) && !Array.isArray(arguments.length <= 3 ? void 0 : arguments[3]) && !Array.isArray(arguments.length <= 4 ? void 0 : arguments[4]) && !Array.isArray(arguments.length <= 5 ? void 0 : arguments[5]) && !Array.isArray(arguments.length <= 6 ? void 0 : arguments[6])
          }))], (0, pd.h)(dd, null, Jd, {
            kind: "method",
            name: "_ApplySkeleton",
            static: !0,
            private: !1,
            access: {
              has: dd => "_ApplySkeleton" in dd,
              get: dd => dd._ApplySkeleton
            },
            metadata: kd
          }, null, Qd), kd && Object.defineProperty(dd, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: kd
          })
        })(), dd.OCCLUSION_TYPE_NONE = ((0, pd.i)(dd, Qd), 0), dd.OCCLUSION_TYPE_OPTIMISTIC = 1, dd.OCCLUSION_TYPE_STRICT = 2, dd.OCCLUSION_ALGORITHM_TYPE_ACCURATE = 0, dd.OCCLUSION_ALGORITHM_TYPE_CONSERVATIVE = 1, dd.CULLINGSTRATEGY_STANDARD = 0, dd.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY = 1, dd.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION = 2, dd.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION_THEN_BSPHERE_ONLY = 3, dd.DefaultIsPickable = !0, dd
      })(),
      jd = !1;

    function Xd() {
      jd || (jd = !0, (0, ad.h)("BABYLON.AbstractMesh", Sd))
    }(Qd = Sd.prototype).createOrUpdateSubmeshesOctree ?? (Qd.createOrUpdateSubmeshesOctree = (0, ed.j)("AbstractMesh", "createOrUpdateSubmeshesOctree")), (Ld = Sd.prototype).getPhysicsImpostor ?? (Ld.getPhysicsImpostor = (0, ed.j)("AbstractMesh", "getPhysicsImpostor")), (Od = Sd.prototype).setPhysicsLinkWith ?? (Od.setPhysicsLinkWith = (0, ed.j)("AbstractMesh", "setPhysicsLinkWith")), Object.getOwnPropertyDescriptor(Sd.prototype, "occlusionRetryCount") || Object.defineProperty(Sd.prototype, "occlusionRetryCount", (0, ed.g)("AbstractMesh", "occlusionRetryCount")), Object.getOwnPropertyDescriptor(Sd.prototype, "occlusionType") || Object.defineProperty(Sd.prototype, "occlusionType", (0, ed.g)("AbstractMesh", "occlusionType")), Object.getOwnPropertyDescriptor(Sd.prototype, "occlusionQueryAlgorithmType") || Object.defineProperty(Sd.prototype, "occlusionQueryAlgorithmType", (0, ed.g)("AbstractMesh", "occlusionQueryAlgorithmType")), Object.getOwnPropertyDescriptor(Sd.prototype, "isOccluded") || Object.defineProperty(Sd.prototype, "isOccluded", (0, ed.g)("AbstractMesh", "isOccluded")), Object.getOwnPropertyDescriptor(Sd.prototype, "isOcclusionQueryInProgress") || Object.defineProperty(Sd.prototype, "isOcclusionQueryInProgress", (0, ed.g)("AbstractMesh", "isOcclusionQueryInProgress")), Object.getOwnPropertyDescriptor(Sd.prototype, "forceRenderingWhenOccluded") || Object.defineProperty(Sd.prototype, "forceRenderingWhenOccluded", (0, ed.g)("AbstractMesh", "forceRenderingWhenOccluded")), Object.getOwnPropertyDescriptor(Sd.prototype, "occlusionForRenderPassId") || Object.defineProperty(Sd.prototype, "occlusionForRenderPassId", (0, ed.g)("AbstractMesh", "occlusionForRenderPassId")), Object.getOwnPropertyDescriptor(Sd.prototype, "decalMap") || Object.defineProperty(Sd.prototype, "decalMap", (0, ed.g)("AbstractMesh", "decalMap")), Object.getOwnPropertyDescriptor(Sd.prototype, "fn") || Object.defineProperty(Sd.prototype, "fn", (0, ed.g)("AbstractMesh", "fn")), Object.getOwnPropertyDescriptor(Sd.prototype, "physicsImpostor") || Object.defineProperty(Sd.prototype, "physicsImpostor", (0, ed.g)("AbstractMesh", "physicsImpostor")), Object.getOwnPropertyDescriptor(Sd.prototype, "showBoundingBox") || Object.defineProperty(Sd.prototype, "showBoundingBox", (0, ed.g)("AbstractMesh", "showBoundingBox")), Object.getOwnPropertyDescriptor(Sd.prototype, "edgesRenderer") || Object.defineProperty(Sd.prototype, "edgesRenderer", (0, ed.g)("AbstractMesh", "edgesRenderer")), Object.getOwnPropertyDescriptor(Sd.prototype, "renderOutline") || Object.defineProperty(Sd.prototype, "renderOutline", (0, ed.g)("AbstractMesh", "renderOutline")), Object.getOwnPropertyDescriptor(Sd.prototype, "renderOverlay") || Object.defineProperty(Sd.prototype, "renderOverlay", (0, ed.g)("AbstractMesh", "renderOverlay"))
  },
  40411: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Rd
    });
    var pd = kd(37251),
      Nd = kd(37443),
      Wd = kd(40402),
      Pd = kd(40115),
      Zd = kd(40282),
      gd = kd(40414),
      Cd = kd(40292),
      Kd = kd(40066),
      od = kd(38812),
      ld = kd(39992),
      Qd = kd(40299),
      Ld = kd(37277),
      Od = kd(40419),
      ed = kd(40032);
    class Rd {
      get boundingBias() {
        return this._boundingBias
      }
      set boundingBias(dd) {
        this._boundingBias ? this._boundingBias.Fs(dd) : this._boundingBias = dd.clone(), this._updateBoundingInfo(!0, null)
      }
      static CreateGeometryForMesh(dd) {
        const Jd = new Rd(Rd.RandomId(), dd.Wm());
        return Jd.applyToMesh(dd), Jd
      }
      get meshes() {
        return this._meshes
      }
      constructor(dd, Jd, kd) {
        let Nd = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          Wd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          Pd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        this.delayLoadState = 0, this._totalVertices = 0, this._isDisposed = !1, this._extend = {
          minimum: new pd.n(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE),
          maximum: new pd.n(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE)
        }, this._indexBufferIsUpdatable = !1, this._positionsCache = [], this._parentContainer = null, this.useBoundingInfoFromGeometry = !1, this._scene = Jd || Ld.d.LastCreatedScene, this._scene && (this.id = dd, this.uniqueId = this._scene.getUniqueId(), this._engine = this._scene.eL(), this._meshes = [], this._vertexBuffers = {}, this._indices = [], this._updatable = Nd, null !== Pd && (this._totalVertices = Pd), kd ? this.setAllVerticesData(kd, Nd) : null === Pd && (this._totalVertices = 0), this._engine.getCaps().vertexArrayObject && (this._vertexArrayObjects = {}), Wd && (this.applyToMesh(Wd), Wd.computeWorldMatrix(!0)))
      }
      get extend() {
        return this._extend
      }
      Wm() {
        return this._scene
      }
      eL() {
        return this._engine
      }
      isReady() {
        return 1 === this.delayLoadState || 0 === this.delayLoadState
      }
      get doNotSerialize() {
        for (let dd = 0; dd < this._meshes.length; dd++)
          if (!this._meshes[dd].doNotSerialize) return !1;
        return !0
      }
      _rebuild() {
        this._vertexArrayObjects && (this._vertexArrayObjects = {}), 0 !== this._meshes.length && this._indices && (this._indexBuffer = this._engine.createIndexBuffer(this._indices, this._updatable, "Geometry_" + this.id + "_IndexBuffer"));
        const dd = new Set;
        for (const Jd in this._vertexBuffers) dd.add(this._vertexBuffers[Jd].getWrapperBuffer());
        dd.forEach((dd => {
          dd._rebuild()
        }))
      }
      setAllVerticesData(dd, Jd) {
        dd.applyToGeometry(this, Jd), this._notifyUpdate()
      }
      setVerticesData(dd, Jd) {
        let kd = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          pd = arguments.length > 3 ? arguments[3] : void 0;
        kd && Array.isArray(Jd) && (Jd = new Float32Array(Jd));
        const Nd = new Pd.j(this._engine, Jd, dd, {
          updatable: kd,
          postponeInternalCreation: 0 === this._meshes.length,
          stride: pd,
          label: "Geometry_" + this.id + "_" + dd
        });
        this.setVerticesBuffer(Nd)
      }
      removeVerticesData(dd) {
        this._vertexBuffers[dd] && (this._vertexBuffers[dd].dispose(), delete this._vertexBuffers[dd]), this._vertexArrayObjects && this._disposeVertexArrayObjects()
      }
      setVerticesBuffer(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          kd = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        const Nd = dd.getKind();
        this._vertexBuffers[Nd] && kd && this._vertexBuffers[Nd].dispose(), dd._buffer && dd._ownsBuffer && dd._buffer._increaseReferences(), this._vertexBuffers[Nd] = dd;
        const Wd = this._meshes,
          Zd = Wd.length;
        if (Nd === Pd.j.PositionKind) {
          this._totalVertices = Jd ?? dd._maxVerticesCount, this._updateExtend(this.useBoundingInfoFromGeometry && this._boundingInfo ? null : dd.getFloatData(this._totalVertices)), this._resetPointsArrayCache();
          const kd = this._extend && this._extend.minimum || new pd.n(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE),
            Nd = this._extend && this._extend.maximum || new pd.n(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
          for (let dd = 0; dd < Zd; dd++) {
            const Jd = Wd[dd];
            Jd.buildBoundingInfo(kd, Nd), Jd._createGlobalSubMesh(Jd.isUnIndexed), Jd.computeWorldMatrix(!0), Jd.synchronizeInstances()
          }
        }
        this._notifyUpdate(Nd)
      }
      updateVerticesDataDirectly(dd, Jd, kd) {
        let pd = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const Nd = this.getVertexBuffer(dd);
        Nd && (Nd.updateDirectly(Jd, kd, pd), this._notifyUpdate(dd))
      }
      updateVerticesData(dd, Jd) {
        let kd = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const pd = this.getVertexBuffer(dd);
        pd && (pd.update(Jd), dd === Pd.j.PositionKind && this._updateBoundingInfo(kd, Jd), this._notifyUpdate(dd))
      }
      _updateBoundingInfo(dd, Jd) {
        if (dd && this._updateExtend(Jd), this._resetPointsArrayCache(), dd) {
          const dd = this._meshes;
          for (const Jd of dd) {
            Jd.hasBoundingInfo ? Jd.pU().reConstruct(this._extend.minimum, this._extend.maximum) : Jd.buildBoundingInfo(this._extend.minimum, this._extend.maximum);
            const dd = Jd.rG;
            for (const Jd of dd) Jd.refreshBoundingInfo()
          }
        }
      }
      _bind(dd, Jd, kd, pd) {
        if (!dd) return;
        void 0 === Jd && (Jd = this._indexBuffer);
        const Nd = this.getVertexBuffers();
        if (!Nd) return;
        if (Jd != this._indexBuffer || !this._vertexArrayObjects && !pd) return void this._engine.bindBuffers(Nd, Jd, dd, kd);
        const Wd = pd || this._vertexArrayObjects,
          Pd = this._engine;
        Wd[dd.key] || (Wd[dd.key] = Pd.recordVertexArrayObject(Nd, Jd, dd, kd)), Pd.bindVertexArrayObject(Wd[dd.key], Jd)
      }
      getTotalVertices() {
        return this.isReady() ? this._totalVertices : 0
      }
      getVerticesData(dd, Jd, kd) {
        const pd = this.getVertexBuffer(dd);
        return pd ? pd.getFloatData(this._totalVertices, kd || Jd && 1 !== this._meshes.length) : null
      }
      copyVerticesData(dd, Jd) {
        const kd = this.getVertexBuffer(dd);
        if (!kd) return;
        Jd[dd] || (Jd[dd] = new Float32Array(this._totalVertices * kd.getSize()));
        const pd = kd.getData();
        pd && (0, ed.e)(pd, kd.getSize(), kd.type, kd.byteOffset, kd.byteStride, kd.normalized, this._totalVertices, Jd[dd])
      }
      isVertexBufferUpdatable(dd) {
        const Jd = this._vertexBuffers[dd];
        return !!Jd && Jd.isUpdatable()
      }
      getVertexBuffer(dd) {
        return this.isReady() ? this._vertexBuffers[dd] : null
      }
      getVertexBuffers() {
        return this.isReady() ? this._vertexBuffers : null
      }
      isVerticesDataPresent(dd) {
        return this._vertexBuffers ? void 0 !== this._vertexBuffers[dd] : !!this._delayInfo && -1 !== this._delayInfo.indexOf(dd)
      }
      getVerticesDataKinds() {
        const dd = [];
        let Jd;
        if (!this._vertexBuffers && this._delayInfo)
          for (Jd in this._delayInfo) dd.push(Jd);
        else
          for (Jd in this._vertexBuffers) dd.push(Jd);
        return dd
      }
      updateIndices(dd, Jd) {
        let kd = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this._indexBuffer)
          if (this._indexBufferIsUpdatable) {
            const pd = dd.length !== this._indices.length;
            if (kd || (this._indices = dd.slice()), this._engine.updateDynamicIndexBuffer(this._indexBuffer, dd, Jd), pd)
              for (const dd of this._meshes) dd._createGlobalSubMesh(!0)
          } else this.setIndices(dd, null, !0)
      }
      setIndexBuffer(dd, Jd, kd) {
        let pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._indices = [], this._indexBufferIsUpdatable = !1, this._indexBuffer = dd, this._totalVertices = Jd, this._totalIndices = kd, dd.is32Bits = null === pd ? Jd > 65535 : pd;
        for (const Nd of this._meshes) Nd._createGlobalSubMesh(!0), Nd.synchronizeInstances();
        this._notifyUpdate()
      }
      setIndices(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          kd = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          pd = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this._indexBuffer && this._engine._releaseBuffer(this._indexBuffer), this._indices = dd, this._indexBufferIsUpdatable = kd, 0 !== this._meshes.length && this._indices && (this._indexBuffer = this._engine.createIndexBuffer(this._indices, kd, "Geometry_" + this.id + "_IndexBuffer")), void 0 != Jd && (this._totalVertices = Jd);
        for (const Nd of this._meshes) Nd._createGlobalSubMesh(!pd), Nd.synchronizeInstances();
        this._notifyUpdate()
      }
      getTotalIndices() {
        return this.isReady() ? void 0 !== this._totalIndices ? this._totalIndices : this._indices.length : 0
      }
      ipd(dd, Jd) {
        if (!this.isReady()) return null;
        const kd = this._indices;
        return Jd || dd && 1 !== this._meshes.length ? kd.slice() : kd
      }
      getIndexBuffer() {
        return this.isReady() ? this._indexBuffer : null
      }
      _releaseVertexArrayObject() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        dd && this._vertexArrayObjects && this._vertexArrayObjects[dd.key] && (this._engine.releaseVertexArrayObject(this._vertexArrayObjects[dd.key]), delete this._vertexArrayObjects[dd.key])
      }
      releaseForMesh(dd, Jd) {
        const kd = this._meshes,
          pd = kd.indexOf(dd); - 1 !== pd && (kd.splice(pd, 1), this._vertexArrayObjects && dd._invalidateInstanceVertexArrayObject(), dd._geometry = null, 0 === kd.length && Jd && this.dispose())
      }
      applyToMesh(dd) {
        if (dd._geometry === this) return;
        const Jd = dd._geometry;
        Jd && Jd.releaseForMesh(dd), this._vertexArrayObjects && dd._invalidateInstanceVertexArrayObject();
        const kd = this._meshes;
        dd._geometry = this, dd._internalAbstractMeshDataInfo._positions = null, this._scene.pushGeometry(this), kd.push(dd), this.isReady() ? this._applyToMesh(dd) : this._boundingInfo && dd.setBoundingInfo(this._boundingInfo)
      }
      _updateExtend() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (this.useBoundingInfoFromGeometry && this._boundingInfo) this._extend = {
          minimum: this._boundingInfo.minimum.clone(),
          maximum: this._boundingInfo.maximum.clone()
        };
        else {
          if (!dd && (dd = this.getVerticesData(Pd.j.PositionKind), !dd)) return;
          this._extend = (0, Qd.d)(dd, 0, this._totalVertices, this.boundingBias, 3)
        }
      }
      _applyToMesh(dd) {
        for (const Jd in this._vertexBuffers) {
          const kd = this._vertexBuffers[Jd];
          kd._buffer.getBuffer() || kd.create(), Jd === Pd.j.PositionKind && (this._extend || this._updateExtend(), dd.buildBoundingInfo(this._extend.minimum, this._extend.maximum), dd._createGlobalSubMesh(dd.isUnIndexed), dd._updateBoundingInfo())
        }!this._indexBuffer && this._indices && this._indices.length > 0 && (this._indexBuffer = this._engine.createIndexBuffer(this._indices, this._updatable, "Geometry_" + this.id + "_IndexBuffer")), dd._syncGeometryWithMorphTargetManager(), dd.synchronizeInstances()
      }
      _notifyUpdate(dd) {
        this.onGeometryUpdated && this.onGeometryUpdated(this, dd), this._vertexArrayObjects && this._disposeVertexArrayObjects();
        for (const Jd of this._meshes) Jd._markSubMeshesAsAttributesDirty()
      }
      load(dd, Jd) {
        2 !== this.delayLoadState && (this.isReady() ? Jd && Jd() : (this.delayLoadState = 2, this._queueLoad(dd, Jd)))
      }
      _queueLoad(dd, Jd) {
        this.delayLoadingFile && (dd.addPendingData(this), (async () => {
          try {
            const kd = await dd._loadDelayedFileAsync(this.delayLoadingFile, !1, !0);
            if (!this._delayLoadingFunction) return void dd.removePendingData(this);
            this._delayLoadingFunction(JSON.parse(kd), this), this.delayLoadState = 1, this._delayInfo = [], dd.removePendingData(this);
            const pd = this._meshes,
              Nd = pd.length;
            for (let dd = 0; dd < Nd; dd++) this._applyToMesh(pd[dd]);
            Jd && Jd()
          } catch (kd) {
            dd.removePendingData(this), dd.lq || od.c.Error(`Unable to delay load geometry "${this.id}" from "${this.delayLoadingFile}": ${kd}`)
          }
        })())
      }
      toLeftHanded() {
        const dd = this.ipd(!1);
        if (null != dd && dd.length > 0) {
          for (let Jd = 0; Jd < dd.length; Jd += 3) {
            const kd = dd[Jd + 0];
            dd[Jd + 0] = dd[Jd + 2], dd[Jd + 2] = kd
          }
          this.setIndices(dd)
        }
        const Jd = this.getVerticesData(Pd.j.PositionKind, !1);
        if (null != Jd && Jd.length > 0) {
          for (let dd = 0; dd < Jd.length; dd += 3) Jd[dd + 2] = -Jd[dd + 2];
          this.setVerticesData(Pd.j.PositionKind, Jd, !1)
        }
        const kd = this.getVerticesData(Pd.j.NormalKind, !1);
        if (null != kd && kd.length > 0) {
          for (let dd = 0; dd < kd.length; dd += 3) kd[dd + 2] = -kd[dd + 2];
          this.setVerticesData(Pd.j.NormalKind, kd, !1)
        }
      }
      _resetPointsArrayCache() {
        this._positions = null
      }
      _generatePointsArray() {
        if (this._positions) return !0;
        const dd = this.getVerticesData(Pd.j.PositionKind);
        if (!dd || 0 === dd.length) return !1;
        for (let Jd = 3 * this._positionsCache.length, kd = this._positionsCache.length; Jd < dd.length; Jd += 3, ++kd) this._positionsCache[kd] = pd.n.FromArray(dd, Jd);
        for (let Jd = 0, kd = 0; Jd < dd.length; Jd += 3, ++kd) this._positionsCache[kd].set(dd[0 + Jd], dd[1 + Jd], dd[2 + Jd]);
        return this._positionsCache.length = dd.length / 3, this._positions = this._positionsCache, !0
      }
      lq() {
        return this._isDisposed
      }
      _disposeVertexArrayObjects() {
        if (this._vertexArrayObjects) {
          for (const kd in this._vertexArrayObjects) this._engine.releaseVertexArrayObject(this._vertexArrayObjects[kd]);
          this._vertexArrayObjects = {};
          const dd = this._meshes,
            Jd = dd.length;
          for (let kd = 0; kd < Jd; kd++) dd[kd]._invalidateInstanceVertexArrayObject()
        }
      }
      dispose() {
        const dd = this._meshes,
          Jd = dd.length;
        let kd;
        for (kd = 0; kd < Jd; kd++) this.releaseForMesh(dd[kd]);
        this._meshes.length = 0, this._disposeVertexArrayObjects();
        for (const pd in this._vertexBuffers) this._vertexBuffers[pd].dispose();
        if (this._vertexBuffers = {}, this._totalVertices = 0, this._indexBuffer && this._engine._releaseBuffer(this._indexBuffer), this._indexBuffer = null, this._indices = [], this.delayLoadState = 0, this.delayLoadingFile = null, this._delayLoadingFunction = null, this._delayInfo = [], this._boundingInfo = null, this._scene.removeGeometry(this), this._parentContainer) {
          const dd = this._parentContainer.geometries.indexOf(this);
          dd > -1 && this._parentContainer.geometries.splice(dd, 1), this._parentContainer = null
        }
        this._isDisposed = !0
      }
      copy(dd) {
        const Jd = new Rd(dd, this._scene),
          kd = this.ipd(void 0, !0);
        kd && Jd.setIndices(kd);
        let pd, Nd = !1;
        for (pd in this._vertexBuffers) {
          const dd = this.getVertexBuffer(pd),
            kd = dd.getData();
          if (!kd) continue;
          const Wd = dd.isUpdatable(),
            Zd = dd.getSize(),
            {
              type: gd,
              byteOffset: Cd,
              byteStride: Kd,
              normalized: od
            } = dd;
          Nd = Nd || Wd;
          let ld = this._totalVertices;
          if (dd.getIsInstanced()) {
            let dd;
            dd = kd instanceof Array ? 4 * kd.length : kd.byteLength, ld = dd / Kd
          }
          const Qd = (0, ed.t)(kd, Zd, gd, Cd, Kd, ld, !0),
            Ld = new Pd.j(this._engine, Qd, pd, {
              updatable: Wd,
              useBytes: !1,
              stride: Zd,
              size: Zd,
              offset: 0,
              type: gd,
              normalized: od,
              takeBufferOwnership: !0,
              instanced: dd.getIsInstanced()
            });
          Jd.setVerticesBuffer(Ld, ld)
        }
        for (pd in Jd._updatable = Nd, Jd.delayLoadState = this.delayLoadState, Jd.delayLoadingFile = this.delayLoadingFile, Jd._delayLoadingFunction = this._delayLoadingFunction, this._delayInfo) Jd._delayInfo = Jd._delayInfo || [], Jd._delayInfo.push(pd);
        return Jd._boundingInfo = new Cd.b(this._extend.minimum, this._extend.maximum), Jd
      }
      serialize() {
        const dd = {};
        return dd.id = this.id, dd.uniqueId = this.uniqueId, dd.updatable = this._updatable, ld.c && ld.c.HasTags(this) && (dd.tags = ld.c.GetTags(this)), dd
      }
      _toNumberArray(dd) {
        return Array.isArray(dd) ? dd : Array.prototype.slice.call(dd)
      }
      clearCachedData() {
        this._totalIndices = this._indices.length, this._indices = [], this._resetPointsArrayCache();
        for (const dd in this._vertexBuffers) Object.prototype.hasOwnProperty.call(this._vertexBuffers, dd) && (this._vertexBuffers[dd]._buffer._data = null)
      }
      serializeVerticeData() {
        const dd = this.serialize();
        return this.isVerticesDataPresent(Pd.j.PositionKind) && (dd.positions = this._toNumberArray(this.getVerticesData(Pd.j.PositionKind)), this.isVertexBufferUpdatable(Pd.j.PositionKind) && (dd.positionsUpdatable = !0)), this.isVerticesDataPresent(Pd.j.NormalKind) && (dd.normals = this._toNumberArray(this.getVerticesData(Pd.j.NormalKind)), this.isVertexBufferUpdatable(Pd.j.NormalKind) && (dd.normalsUpdatable = !0)), this.isVerticesDataPresent(Pd.j.TangentKind) && (dd.tangents = this._toNumberArray(this.getVerticesData(Pd.j.TangentKind)), this.isVertexBufferUpdatable(Pd.j.TangentKind) && (dd.tangentsUpdatable = !0)), this.isVerticesDataPresent(Pd.j.UVKind) && (dd.uvs = this._toNumberArray(this.getVerticesData(Pd.j.UVKind)), this.isVertexBufferUpdatable(Pd.j.UVKind) && (dd.uvsUpdatable = !0)), this.isVerticesDataPresent(Pd.j.UV2Kind) && (dd.uvs2 = this._toNumberArray(this.getVerticesData(Pd.j.UV2Kind)), this.isVertexBufferUpdatable(Pd.j.UV2Kind) && (dd.uvs2Updatable = !0)), this.isVerticesDataPresent(Pd.j.UV3Kind) && (dd.uvs3 = this._toNumberArray(this.getVerticesData(Pd.j.UV3Kind)), this.isVertexBufferUpdatable(Pd.j.UV3Kind) && (dd.uvs3Updatable = !0)), this.isVerticesDataPresent(Pd.j.UV4Kind) && (dd.uvs4 = this._toNumberArray(this.getVerticesData(Pd.j.UV4Kind)), this.isVertexBufferUpdatable(Pd.j.UV4Kind) && (dd.uvs4Updatable = !0)), this.isVerticesDataPresent(Pd.j.UV5Kind) && (dd.uvs5 = this._toNumberArray(this.getVerticesData(Pd.j.UV5Kind)), this.isVertexBufferUpdatable(Pd.j.UV5Kind) && (dd.uvs5Updatable = !0)), this.isVerticesDataPresent(Pd.j.UV6Kind) && (dd.uvs6 = this._toNumberArray(this.getVerticesData(Pd.j.UV6Kind)), this.isVertexBufferUpdatable(Pd.j.UV6Kind) && (dd.uvs6Updatable = !0)), this.isVerticesDataPresent(Pd.j.ColorKind) && (dd.colors = this._toNumberArray(this.getVerticesData(Pd.j.ColorKind)), this.isVertexBufferUpdatable(Pd.j.ColorKind) && (dd.colorsUpdatable = !0)), this.isVerticesDataPresent(Pd.j.MatricesIndicesKind) && (dd.matricesIndices = this._toNumberArray(this.getVerticesData(Pd.j.MatricesIndicesKind)), dd.matricesIndicesExpanded = !0, this.isVertexBufferUpdatable(Pd.j.MatricesIndicesKind) && (dd.matricesIndicesUpdatable = !0)), this.isVerticesDataPresent(Pd.j.MatricesWeightsKind) && (dd.matricesWeights = this._toNumberArray(this.getVerticesData(Pd.j.MatricesWeightsKind)), this.isVertexBufferUpdatable(Pd.j.MatricesWeightsKind) && (dd.matricesWeightsUpdatable = !0)), dd.indices = this._toNumberArray(this.ipd()), dd
      }
      static ExtractFromMesh(dd, Jd) {
        const kd = dd._geometry;
        return kd ? kd.copy(Jd) : null
      }
      static RandomId() {
        return Kd.h.RandomId()
      }
      static _GetGeometryByLoadedUniqueId(dd, Jd) {
        for (let kd = 0; kd < Jd.geometries.length; kd++)
          if (Jd.geometries[kd]._loadedUniqueId === dd) return Jd.geometries[kd];
        return null
      }
      static _ImportGeometry(dd, Jd) {
        const kd = Jd.Wm(),
          pd = dd.geometryUniqueId,
          Wd = dd.geometryId;
        if (pd || Wd) {
          const dd = pd ? this._GetGeometryByLoadedUniqueId(pd, kd) : kd.getGeometryById(Wd);
          dd && dd.applyToMesh(Jd)
        } else if (dd instanceof ArrayBuffer) {
          const kd = Jd._binaryInfo;
          if (kd.positionsAttrDesc && kd.positionsAttrDesc.count > 0) {
            const pd = new Float32Array(dd, kd.positionsAttrDesc.offset, kd.positionsAttrDesc.count);
            Jd.setVerticesData(Pd.j.PositionKind, pd, !1)
          }
          if (kd.normalsAttrDesc && kd.normalsAttrDesc.count > 0) {
            const pd = new Float32Array(dd, kd.normalsAttrDesc.offset, kd.normalsAttrDesc.count);
            Jd.setVerticesData(Pd.j.NormalKind, pd, !1)
          }
          if (kd.tangetsAttrDesc && kd.tangetsAttrDesc.count > 0) {
            const pd = new Float32Array(dd, kd.tangetsAttrDesc.offset, kd.tangetsAttrDesc.count);
            Jd.setVerticesData(Pd.j.TangentKind, pd, !1)
          }
          if (kd.uvsAttrDesc && kd.uvsAttrDesc.count > 0) {
            const pd = new Float32Array(dd, kd.uvsAttrDesc.offset, kd.uvsAttrDesc.count);
            if (Od.d)
              for (let dd = 1; dd < pd.length; dd += 2) pd[dd] = 1 - pd[dd];
            Jd.setVerticesData(Pd.j.UVKind, pd, !1)
          }
          if (kd.uvs2AttrDesc && kd.uvs2AttrDesc.count > 0) {
            const pd = new Float32Array(dd, kd.uvs2AttrDesc.offset, kd.uvs2AttrDesc.count);
            if (Od.d)
              for (let dd = 1; dd < pd.length; dd += 2) pd[dd] = 1 - pd[dd];
            Jd.setVerticesData(Pd.j.UV2Kind, pd, !1)
          }
          if (kd.uvs3AttrDesc && kd.uvs3AttrDesc.count > 0) {
            const pd = new Float32Array(dd, kd.uvs3AttrDesc.offset, kd.uvs3AttrDesc.count);
            if (Od.d)
              for (let dd = 1; dd < pd.length; dd += 2) pd[dd] = 1 - pd[dd];
            Jd.setVerticesData(Pd.j.UV3Kind, pd, !1)
          }
          if (kd.uvs4AttrDesc && kd.uvs4AttrDesc.count > 0) {
            const pd = new Float32Array(dd, kd.uvs4AttrDesc.offset, kd.uvs4AttrDesc.count);
            if (Od.d)
              for (let dd = 1; dd < pd.length; dd += 2) pd[dd] = 1 - pd[dd];
            Jd.setVerticesData(Pd.j.UV4Kind, pd, !1)
          }
          if (kd.uvs5AttrDesc && kd.uvs5AttrDesc.count > 0) {
            const pd = new Float32Array(dd, kd.uvs5AttrDesc.offset, kd.uvs5AttrDesc.count);
            if (Od.d)
              for (let dd = 1; dd < pd.length; dd += 2) pd[dd] = 1 - pd[dd];
            Jd.setVerticesData(Pd.j.UV5Kind, pd, !1)
          }
          if (kd.uvs6AttrDesc && kd.uvs6AttrDesc.count > 0) {
            const pd = new Float32Array(dd, kd.uvs6AttrDesc.offset, kd.uvs6AttrDesc.count);
            if (Od.d)
              for (let dd = 1; dd < pd.length; dd += 2) pd[dd] = 1 - pd[dd];
            Jd.setVerticesData(Pd.j.UV6Kind, pd, !1)
          }
          if (kd.colorsAttrDesc && kd.colorsAttrDesc.count > 0) {
            const pd = new Float32Array(dd, kd.colorsAttrDesc.offset, kd.colorsAttrDesc.count);
            Jd.setVerticesData(Pd.j.ColorKind, pd, !1, kd.colorsAttrDesc.stride)
          }
          if (kd.matricesIndicesAttrDesc && kd.matricesIndicesAttrDesc.count > 0) {
            const pd = new Int32Array(dd, kd.matricesIndicesAttrDesc.offset, kd.matricesIndicesAttrDesc.count),
              Nd = [];
            for (let dd = 0; dd < pd.length; dd++) {
              const Jd = pd[dd];
              Nd.push(255 & Jd), Nd.push((65280 & Jd) >> 8), Nd.push((16711680 & Jd) >> 16), Nd.push(Jd >> 24 & 255)
            }
            Jd.setVerticesData(Pd.j.MatricesIndicesKind, Nd, !1)
          }
          if (kd.matricesIndicesExtraAttrDesc && kd.matricesIndicesExtraAttrDesc.count > 0) {
            const pd = new Int32Array(dd, kd.matricesIndicesExtraAttrDesc.offset, kd.matricesIndicesExtraAttrDesc.count),
              Nd = [];
            for (let dd = 0; dd < pd.length; dd++) {
              const Jd = pd[dd];
              Nd.push(255 & Jd), Nd.push((65280 & Jd) >> 8), Nd.push((16711680 & Jd) >> 16), Nd.push(Jd >> 24 & 255)
            }
            Jd.setVerticesData(Pd.j.MatricesIndicesExtraKind, Nd, !1)
          }
          if (kd.matricesWeightsAttrDesc && kd.matricesWeightsAttrDesc.count > 0) {
            const pd = new Float32Array(dd, kd.matricesWeightsAttrDesc.offset, kd.matricesWeightsAttrDesc.count);
            Jd.setVerticesData(Pd.j.MatricesWeightsKind, pd, !1)
          }
          if (kd.indicesAttrDesc && kd.indicesAttrDesc.count > 0) {
            const pd = new Int32Array(dd, kd.indicesAttrDesc.offset, kd.indicesAttrDesc.count);
            Jd.setIndices(pd, null)
          }
          if (kd.subMeshesAttrDesc && kd.subMeshesAttrDesc.count > 0) {
            const pd = new Int32Array(dd, kd.subMeshesAttrDesc.offset, 5 * kd.subMeshesAttrDesc.count);
            Jd.rG = [];
            for (let dd = 0; dd < kd.subMeshesAttrDesc.count; dd++) {
              const kd = pd[5 * dd + 0],
                Nd = pd[5 * dd + 1],
                Wd = pd[5 * dd + 2],
                Pd = pd[5 * dd + 3],
                gd = pd[5 * dd + 4];
              Zd.c.AddToMesh(kd, Nd, Wd, Pd, gd, Jd)
            }
          }
        } else if (dd.positions && dd.normals && dd.indices) {
          if (Jd.setVerticesData(Pd.j.PositionKind, dd.positions, dd.positions._updatable || dd.positionsUpdatable), Jd.setVerticesData(Pd.j.NormalKind, dd.normals, dd.normals._updatable || dd.normalsUpdatable), dd.tangents && Jd.setVerticesData(Pd.j.TangentKind, dd.tangents, dd.tangents._updatable || dd.tangentsUpdatable), dd.uvs && Jd.setVerticesData(Pd.j.UVKind, dd.uvs, dd.uvs._updatable || dd.uvsUpdatable), dd.uvs2 && Jd.setVerticesData(Pd.j.UV2Kind, dd.uvs2, dd.uvs2._updatable || dd.uvs2Updatable), dd.uvs3 && Jd.setVerticesData(Pd.j.UV3Kind, dd.uvs3, dd.uvs3._updatable || dd.uvs3Updatable), dd.uvs4 && Jd.setVerticesData(Pd.j.UV4Kind, dd.uvs4, dd.uvs4._updatable || dd.uvs4Updatable), dd.uvs5 && Jd.setVerticesData(Pd.j.UV5Kind, dd.uvs5, dd.uvs5._updatable || dd.uvs5Updatable), dd.uvs6 && Jd.setVerticesData(Pd.j.UV6Kind, dd.uvs6, dd.uvs6._updatable || dd.uvs6Updatable), dd.colors && Jd.setVerticesData(Pd.j.ColorKind, Nd.g.CheckColors4(dd.colors, dd.positions.length / 3), dd.colors._updatable), dd.matricesIndices)
            if (dd.matricesIndices._isExpanded || dd.matricesIndicesExpanded) delete dd.matricesIndices._isExpanded, delete dd.matricesIndicesExpanded, Jd.setVerticesData(Pd.j.MatricesIndicesKind, dd.matricesIndices, dd.matricesIndices._updatable || dd.matricesIndicesUpdatable);
            else {
              const kd = [];
              for (let Jd = 0; Jd < dd.matricesIndices.length; Jd++) {
                const pd = dd.matricesIndices[Jd];
                kd.push(255 & pd), kd.push((65280 & pd) >> 8), kd.push((16711680 & pd) >> 16), kd.push(pd >> 24 & 255)
              }
              Jd.setVerticesData(Pd.j.MatricesIndicesKind, kd, dd.matricesIndices._updatable || dd.matricesIndicesUpdatable)
            } if (dd.matricesIndicesExtra)
            if (dd.matricesIndicesExtraExpanded || dd.matricesIndicesExtra._isExpanded) delete dd.matricesIndices._isExpanded, delete dd.matricesIndicesExtraExpanded, Jd.setVerticesData(Pd.j.MatricesIndicesExtraKind, dd.matricesIndicesExtra, dd.matricesIndicesExtra._updatable || dd.matricesIndicesExtraUpdatable);
            else {
              const kd = [];
              for (let Jd = 0; Jd < dd.matricesIndicesExtra.length; Jd++) {
                const pd = dd.matricesIndicesExtra[Jd];
                kd.push(255 & pd), kd.push((65280 & pd) >> 8), kd.push((16711680 & pd) >> 16), kd.push(pd >> 24 & 255)
              }
              Jd.setVerticesData(Pd.j.MatricesIndicesExtraKind, kd, dd.matricesIndicesExtra._updatable || dd.matricesIndicesExtraUpdatable)
            } dd.matricesWeights && (Rd._CleanMatricesWeights(dd, Jd), Jd.setVerticesData(Pd.j.MatricesWeightsKind, dd.matricesWeights, dd.matricesWeights._updatable)), dd.matricesWeightsExtra && Jd.setVerticesData(Pd.j.MatricesWeightsExtraKind, dd.matricesWeightsExtra, dd.matricesWeights._updatable), Jd.setIndices(dd.indices, null)
        }
        if (dd.rG) {
          Jd.rG = [];
          for (let kd = 0; kd < dd.rG.length; kd++) {
            const pd = dd.rG[kd];
            Zd.c.AddToMesh(pd.materialIndex, pd.verticesStart, pd.verticesCount, pd.indexStart, pd.indexCount, Jd)
          }
        }
        Jd._shouldGenerateFlatShading && (Jd.convertToFlatShadedMesh(), Jd._shouldGenerateFlatShading = !1), Jd.computeWorldMatrix(!0), kd.onMeshImportedObservable.notifyObservers(Jd)
      }
      static _CleanMatricesWeights(dd, Jd) {
        const kd = .001;
        if (!gd.d.CleanBoneMatrixWeights) return;
        let pd;
        if (!(dd.skeletonId > -1)) return;
        {
          const kd = Jd.Wm().getLastSkeletonById(dd.skeletonId);
          if (!kd) return;
          pd = kd.bones.length
        }
        const Nd = Jd.getVerticesData(Pd.j.MatricesIndicesKind),
          Wd = Jd.getVerticesData(Pd.j.MatricesIndicesExtraKind),
          Zd = dd.matricesWeights,
          Cd = dd.matricesWeightsExtra,
          Kd = dd.numBoneInfluencer,
          od = Zd.length;
        for (let Pd = 0; Pd < od; Pd += 4) {
          let dd = 0,
            Jd = -1;
          for (let pd = 0; pd < 4; pd++) {
            const Nd = Zd[Pd + pd];
            dd += Nd, Nd < kd && Jd < 0 && (Jd = pd)
          }
          if (Cd)
            for (let pd = 0; pd < 4; pd++) {
              const Nd = Cd[Pd + pd];
              dd += Nd, Nd < kd && Jd < 0 && (Jd = pd + 4)
            }
          if ((Jd < 0 || Jd > Kd - 1) && (Jd = Kd - 1), dd > kd) {
            const Jd = 1 / dd;
            for (let dd = 0; dd < 4; dd++) Zd[Pd + dd] *= Jd;
            if (Cd)
              for (let dd = 0; dd < 4; dd++) Cd[Pd + dd] *= Jd
          } else Jd >= 4 ? (Cd[Pd + Jd - 4] = 1 - dd, Wd[Pd + Jd - 4] = pd) : (Zd[Pd + Jd] = 1 - dd, Nd[Pd + Jd] = pd)
        }
        Jd.setVerticesData(Pd.j.MatricesIndicesKind, Nd), dd.matricesWeightsExtra && Jd.setVerticesData(Pd.j.MatricesIndicesExtraKind, Wd)
      }
      static Parse(dd, Jd, kd) {
        const Nd = new Rd(dd.id, Jd, void 0, dd.updatable);
        return Nd._loadedUniqueId = dd.uniqueId, ld.c && ld.c.AddTagsTo(Nd, dd.tags), dd.delayLoadingFile ? (Nd.delayLoadState = 4, Nd.delayLoadingFile = kd + dd.delayLoadingFile, Nd._boundingInfo = new Cd.b(pd.n.FromArray(dd.boundingBoxMinimum), pd.n.FromArray(dd.boundingBoxMaximum)), Nd._delayInfo = [], dd.hasUVs && Nd._delayInfo.push(Pd.j.UVKind), dd.hasUVs2 && Nd._delayInfo.push(Pd.j.UV2Kind), dd.hasUVs3 && Nd._delayInfo.push(Pd.j.UV3Kind), dd.hasUVs4 && Nd._delayInfo.push(Pd.j.UV4Kind), dd.hasUVs5 && Nd._delayInfo.push(Pd.j.UV5Kind), dd.hasUVs6 && Nd._delayInfo.push(Pd.j.UV6Kind), dd.hasColors && Nd._delayInfo.push(Pd.j.ColorKind), dd.hasMatricesIndices && Nd._delayInfo.push(Pd.j.MatricesIndicesKind), dd.hasMatricesWeights && Nd._delayInfo.push(Pd.j.MatricesWeightsKind), Nd._delayLoadingFunction = Wd.c.ImportVertexData) : Wd.c.ImportVertexData(dd, Nd), Jd.pushGeometry(Nd, !0), Nd
      }
    }
  },
  40456: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => od,
      e: () => Ld
    });
    var pd = kd(37251),
      Nd = kd(38812),
      Wd = kd(40426),
      Pd = kd(40393),
      Zd = kd(38806),
      gd = kd(40428),
      Cd = kd(40115),
      Kd = kd(37303);
    class od extends Wd.c {
      constructor(dd, Jd) {
        super(dd, Jd.Wm()), this._indexInSourceMeshInstanceArray = -1, this._distanceToCamera = 0, Jd.U1(this), this._sourceMesh = Jd, this._unIndexed = Jd._unIndexed, this.position.Fs(Jd.position), this.rotation.Fs(Jd.rotation), this.fp.Fs(Jd.fp), Jd.rotationQuaternion && (this.rotationQuaternion = Jd.rotationQuaternion.clone()), this.animations = Jd.animations.slice();
        for (const kd of Jd.getAnimationRanges()) null != kd && this.createAnimationRange(kd.name, kd.from, kd.to);
        if (this.infiniteDistance = Jd.infiniteDistance, this.setPivotMatrix(Jd.getPivotMatrix()), Jd.skeleton || Jd.morphTargetManager || !Jd.hasBoundingInfo) this.refreshBoundingInfo(!0, !0);
        else {
          const dd = Jd.pU();
          this.buildBoundingInfo(dd.minimum, dd.maximum)
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
      set receiveShadows(dd) {
        this._sourceMesh?.receiveShadows !== dd && Nd.c.Warn("Setting receiveShadows on an instanced mesh has no effect")
      }
      get material() {
        return this._sourceMesh.material
      }
      set material(dd) {
        this._sourceMesh?.material !== dd && Nd.c.Warn("Setting material on an instanced mesh has no effect")
      }
      get visibility() {
        return this._sourceMesh.visibility
      }
      set visibility(dd) {
        this._sourceMesh?.visibility !== dd && Nd.c.Warn("Setting visibility on an instanced mesh has no effect")
      }
      get skeleton() {
        return this._sourceMesh.skeleton
      }
      set skeleton(dd) {
        this._sourceMesh?.skeleton !== dd && Nd.c.Warn("Setting skeleton on an instanced mesh has no effect")
      }
      get renderingGroupId() {
        return this._sourceMesh.renderingGroupId
      }
      set renderingGroupId(dd) {
        this._sourceMesh && dd !== this._sourceMesh.renderingGroupId && Nd.c.Warn("Note - setting renderingGroupId of an instanced mesh has no effect on the scene")
      }
      get meshBlendingTag() {
        return this._sourceMesh.meshBlendingTag
      }
      set meshBlendingTag(dd) {
        this._sourceMesh && dd !== this._sourceMesh.meshBlendingTag && Nd.c.Warn("Setting meshBlendingTag on an instanced mesh has no effect")
      }
      getTotalVertices() {
        return this._sourceMesh ? this._sourceMesh.getTotalVertices() : 0
      }
      getTotalIndices() {
        return this._sourceMesh.getTotalIndices()
      }
      get RNd() {
        return this._sourceMesh
      }
      get geometry() {
        return this._sourceMesh._geometry
      }
      createInstance(dd) {
        return this._sourceMesh.createInstance(dd)
      }
      isReady() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return this._sourceMesh.isReady(dd, !0)
      }
      getVerticesData(dd, Jd, kd) {
        return this._sourceMesh.getVerticesData(dd, Jd, kd)
      }
      copyVerticesData(dd, Jd) {
        this._sourceMesh.copyVerticesData(dd, Jd)
      }
      getVertexBuffer(dd, Jd) {
        return this._sourceMesh.getVertexBuffer(dd, Jd)
      }
      setVerticesData(dd, Jd, kd, pd) {
        return this.RNd && this.RNd.setVerticesData(dd, Jd, kd, pd), this.RNd
      }
      updateVerticesData(dd, Jd, kd, pd) {
        return this.RNd && this.RNd.updateVerticesData(dd, Jd, kd, pd), this.RNd
      }
      setIndices(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return this.RNd && this.RNd.setIndices(dd, Jd), this.RNd
      }
      isVerticesDataPresent(dd) {
        return this._sourceMesh.isVerticesDataPresent(dd)
      }
      ipd() {
        return this._sourceMesh.ipd()
      }
      get _positions() {
        return this._sourceMesh._positions
      }
      refreshBoundingInfo() {
        let dd, Jd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          kd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.hasBoundingInfo && this.pU().isLocked) return this;
        dd = "object" === typeof Jd ? Jd : {
          applySkeleton: Jd,
          applyMorph: kd
        };
        const pd = this._sourceMesh.geometry ? this._sourceMesh.geometry.boundingBias : null;
        return this._refreshBoundingInfo(this._sourceMesh._getData(dd, null, Cd.j.PositionKind), pd), this
      }
      _preActivate() {
        return this._currentLOD && this._currentLOD._preActivate(), this
      }
      _activate(dd, Jd) {
        if (super._activate(dd, Jd), this._sourceMesh.rG || Nd.c.Warn("Instances should only be created for meshes with geometry."), this._currentLOD) {
          if (this._currentLOD._getWorldMatrixDeterminant() >= 0 !== this._getWorldMatrixDeterminant() >= 0) return this._internalAbstractMeshDataInfo._actAsRegularMesh = !0, !0;
          if (this._internalAbstractMeshDataInfo._actAsRegularMesh = !1, this._currentLOD._registerInstanceForRenderId(this, dd), Jd) {
            if (!this._currentLOD._internalAbstractMeshDataInfo._isActiveIntermediate) return this._currentLOD._internalAbstractMeshDataInfo._onlyForInstancesIntermediate = !0, !0
          } else if (!this._currentLOD._internalAbstractMeshDataInfo._isActive) return this._currentLOD._internalAbstractMeshDataInfo._onlyForInstances = !0, !0
        }
        return !1
      }
      _postActivate() {
        this._sourceMesh.edgesShareWithInstances && this._sourceMesh._edgesRenderer && this._sourceMesh._edgesRenderer.isEnabled && this._sourceMesh._renderingGroup ? (this._sourceMesh._renderingGroup._edgesRenderers.pushNoDuplicate(this._sourceMesh._edgesRenderer), this._sourceMesh._edgesRenderer.customInstances.push(this.getWorldMatrix())) : this._edgesRenderer && this._edgesRenderer.isEnabled && this._sourceMesh._renderingGroup && this._sourceMesh._renderingGroup._edgesRenderers.push(this._edgesRenderer)
      }
      getWorldMatrix() {
        if (this._currentLOD && this._currentLOD !== this._sourceMesh && this._currentLOD.billboardMode !== gd.d.BILLBOARDMODE_NONE && this._currentLOD._masterMesh !== this) {
          this._billboardWorldMatrix || (this._billboardWorldMatrix = new pd.b);
          const dd = this._currentLOD._masterMesh;
          return this._currentLOD._masterMesh = this, pd.h.IL[7].Fs(this._currentLOD.position), this._currentLOD.position.set(0, 0, 0), this._billboardWorldMatrix.Fs(this._currentLOD.computeWorldMatrix(!0)), this._currentLOD.position.Fs(pd.h.IL[7]), this._currentLOD._masterMesh = dd, this._billboardWorldMatrix
        }
        return super.getWorldMatrix()
      }
      get Km() {
        return !0
      }
      getLOD(dd) {
        if (!dd) return this;
        const Jd = this.RNd.getLODLevels();
        if (Jd && 0 !== Jd.length) {
          const Jd = this.pU();
          this._currentLOD = this.RNd.getLOD(dd, Jd.zpd)
        } else this._currentLOD = this.RNd;
        return this._currentLOD
      }
      _preActivateForIntermediateRendering(dd) {
        return this.RNd._preActivateForIntermediateRendering(dd)
      }
      _syncSubMeshes() {
        if (this.releaseSubMeshes(), this._sourceMesh.rG)
          for (let dd = 0; dd < this._sourceMesh.rG.length; dd++) this._sourceMesh.rG[dd].clone(this, this._sourceMesh);
        return this
      }
      _generatePointsArray() {
        return this._sourceMesh._generatePointsArray()
      }
      _updateBoundingInfo() {
        return this.hasBoundingInfo ? this.pU().update(this.worldMatrixFromCache) : this.buildBoundingInfo(this.absolutePosition, this.absolutePosition, this.worldMatrixFromCache), this._updateSubMeshesBoundingInfo(this.worldMatrixFromCache), this
      }
      clone(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          kd = arguments.length > 2 ? arguments[2] : void 0;
        const pd = ((arguments.length > 3 ? arguments[3] : void 0) || this._sourceMesh).createInstance(dd);
        if (Zd.c.DeepCopy(this, pd, ["name", "rG", "uniqueId", "parent", "lightSources", "receiveShadows", "material", "visibility", "skeleton", "RNd", "Km", "facetNb", "isFacetDataEnabled", "isBlocked", "useBones", "eNd", "collider", "edgesRenderer", "forward", "up", "right", "absolutePosition", "absoluteScaling", "absoluteRotationQuaternion", "APd", "nonUniformScaling", "behaviors", "worldMatrixFromCache", "hasThinInstances", "hasBoundingInfo", "geometry"], []), Jd && (pd.parent = Jd), !kd)
          for (let Nd = 0; Nd < this.Wm().meshes.length; Nd++) {
            const dd = this.Wm().meshes[Nd];
            dd.parent === this && dd.clone(dd.name, pd)
          }
        return pd.computeWorldMatrix(!0), this.onClonedObservable.notifyObservers(pd), pd
      }
      dispose(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._sourceMesh.K3(this), super.dispose(dd, Jd)
      }
      _serializeAsParent(dd) {
        super._serializeAsParent(dd), dd.parentId = this._sourceMesh.uniqueId, dd.parentInstanceIndex = this._indexInSourceMeshInstanceArray
      }
      instantiateHierarchy() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          Jd = arguments.length > 1 ? arguments[1] : void 0,
          kd = arguments.length > 2 ? arguments[2] : void 0;
        const pd = this.clone("Clone of " + (this.name || this.id), dd || this.parent, !0, Jd && Jd.newSourcedMesh);
        pd && kd && kd(this, pd);
        for (const Nd of this.getChildTransformNodes(!0)) Nd.instantiateHierarchy(pd, Jd, kd);
        return pd
      }
    }
    let ld = !1;

    function Qd(dd, Jd, kd, pd, Nd) {
      for (let Wd = 0; Wd < Jd.length; Wd++) {
        const Pd = dd[Jd[Wd]] ?? 0,
          Zd = Nd + kd[Wd];
        Pd.toArray ? Pd.toArray(pd, Zd) : Pd.copyToArray ? Pd.copyToArray(pd, Zd) : pd[Zd] = Pd
      }
    }

    function Ld() {
      ld || (ld = !0, Pd.b._instancedMeshFactory = (dd, Jd) => {
        const kd = new od(dd, Jd);
        if (Jd.fn) {
          kd.fn = {};
          for (const dd in Jd.fn) kd.fn[dd] = Jd.fn[dd]
        }
        return kd
      }, Pd.b.prototype.EX = function(dd, Jd) {
        if (!this.fn) {
          this.fn = {};
          for (const dd of this.instances) dd.fn = {}
        }
        this._userInstancedBuffersStorage || (this._userInstancedBuffersStorage = {
          data: {},
          vertexBuffers: {},
          strides: {},
          sizes: {},
          vertexArrayObjects: this.eL().getCaps().vertexArrayObject ? {} : void 0
        }), this.fn[dd] = null, this._userInstancedBuffersStorage.strides[dd] = Jd;
        const kd = this._userInstancedBuffersStorage;
        kd.interleavedKinds = [], kd.interleavedOffsets = [], kd.interleavedRowStride = 0;
        for (const pd in kd.strides) kd.interleavedKinds.push(pd), kd.interleavedOffsets.push(kd.interleavedRowStride), kd.interleavedRowStride += kd.strides[pd];
        kd.interleavedData = new Float32Array(32 * kd.interleavedRowStride);
        for (const pd in kd.interleavedBuffers) kd.interleavedBuffers[pd].buffer.dispose();
        kd.interleavedBuffers = {}, kd.vertexBuffers[dd] = null;
        for (const pd of this.instances) pd.fn[dd] = null;
        this._invalidateInstanceVertexArrayObject(), this._markSubMeshesAsAttributesDirty()
      }, Pd.b.prototype._processInstancedBuffers = function(dd, Jd) {
        const kd = this._userInstancedBuffersStorage,
          pd = kd.interleavedRowStride;
        if (!pd) return;
        const Nd = dd ? dd.length : 0,
          Wd = (Nd + 1) * pd;
        let Pd = kd.interleavedData;
        if (Pd.length < Wd) {
          let dd = Pd.length;
          for (; dd < Wd;) dd *= 2;
          Pd = kd.interleavedData = new Float32Array(dd)
        }
        const Zd = kd.interleavedKinds,
          gd = kd.interleavedOffsets;
        let Kd = 0;
        Jd && (Qd(this.fn, Zd, gd, Pd, Kd), Kd += pd);
        for (let Cd = 0; Cd < Nd; Cd++) Qd(dd[Cd].fn, Zd, gd, Pd, Kd), Kd += pd;
        let od = "shared",
          ld = kd.vertexBuffers;
        this._instanceDataStorage.useMonoDataStorageRenderPass || (od = this._instanceDataStorage.engine.currentRenderPassId, kd.renderPasses || (kd.renderPasses = {}), kd.renderPasses[od] || (kd.renderPasses[od] = {}), ld = kd.renderPasses[od]);
        const Ld = kd.interleavedBuffers[od];
        let Od = !Ld || Ld.data !== Pd;
        for (let Cd = 0; !Od && Cd < Zd.length; Cd++) Od = !ld[Zd[Cd]];
        if (!Od) return void Ld.buffer.updateDirectly(Pd, 0);
        Ld?.buffer.dispose();
        const ed = new Cd.e(this.eL(), Pd, !0, pd, !1, !0);
        for (let Cd = 0; Cd < Zd.length; Cd++) {
          const dd = Zd[Cd],
            Jd = ed.createVertexBuffer(dd, gd[Cd], kd.strides[dd]);
          Jd.hashCode += Jd.byteOffset * 2 ** 24, ld[dd] = Jd
        }
        kd.interleavedBuffers[od] = {
          buffer: ed,
          data: Pd
        }, this._invalidateInstanceVertexArrayObject()
      }, Pd.b.prototype._invalidateInstanceVertexArrayObject = function() {
        if (this._userInstancedBuffersStorage && void 0 !== this._userInstancedBuffersStorage.vertexArrayObjects) {
          for (const dd in this._userInstancedBuffersStorage.vertexArrayObjects) this.eL().releaseVertexArrayObject(this._userInstancedBuffersStorage.vertexArrayObjects[dd]);
          this._userInstancedBuffersStorage.vertexArrayObjects = {}
        }
      }, Pd.b.prototype._disposeInstanceSpecificData = function() {
        for (const Jd in this._instanceDataStorage.renderPasses) this._instanceDataStorage.renderPasses[Jd].instancesBuffer?.dispose();
        for (this._instanceDataStorage.renderPasses = {}, this._instanceDataStorage.dataStorageRenderPass?.instancesBuffer?.dispose(); this.instances.length;) this.instances[0].dispose();
        for (const Jd in this.fn) this._userInstancedBuffersStorage.vertexBuffers[Jd] && this._userInstancedBuffersStorage.vertexBuffers[Jd].dispose();
        const dd = this._userInstancedBuffersStorage?.interleavedBuffers;
        if (dd) {
          for (const Jd in dd) dd[Jd].buffer.dispose();
          this._userInstancedBuffersStorage.interleavedBuffers = {}
        }
        this._invalidateInstanceVertexArrayObject(), this.fn = {}
      }, (0, Kd.h)("BABYLON.InstancedMesh", od))
    }
  },
  40393: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => wd,
      d: () => dJ,
      g: () => hd
    });
    var pd, Nd, Wd, Pd, Zd, gd, Cd, Kd, od, ld, Qd, Ld, Od, ed, Rd = kd(37280),
      Id = kd(40066),
      Gd = kd(40007),
      vd = kd(38806),
      xd = kd(39992),
      qd = kd(40396),
      Bd = kd(40199),
      sd = kd(37251),
      ad = kd(37443),
      Md = kd(40205),
      Fd = kd(40115),
      Yd = kd(40402),
      md = kd(40411),
      bd = kd(40426),
      Sd = kd(40282),
      jd = kd(40278),
      Xd = kd(40364),
      fd = kd(40436),
      nd = kd(40414),
      Ud = kd(39983),
      yd = kd(38812),
      Dd = kd(37303),
      Td = kd(39860),
      Ed = kd(40147);
    class cd {
      constructor(dd, Jd) {
        this.distanceOrScreenCoverage = dd, this.mesh = Jd
      }
    }
    class hd {}
    class rd {
      constructor() {
        this.batchCache = new td(this), this.batchCacheReplacementModeInFrozenMode = new td(this), this.instancesBufferSize = 2048
      }
    }
    class ud {
      constructor() {
        this.renderPasses = {}
      }
    }
    class td {
      constructor(dd) {
        this.parent = dd, this.mustReturn = !1, this.visibleInstances = new Array, this.renderSelf = [], this.hardwareInstancedRendering = []
      }
    }
    class Vd {
      constructor() {
        this.instancesCount = 0, this.matrixBuffer = null, this.previousMatrixBuffer = null, this.matrixBufferSize = 512, this.matrixData = null, this.boundingVectors = [], this.worldMatrices = null
      }
    }
    class zd {
      constructor() {
        this._areNormalsFrozen = !1, this._source = null, this.meshMap = null, this._preActivateId = -1, this._LODLevels = new Array, this._useLODScreenCoverage = !1, this._effectiveMaterial = null, this._forcedInstanceCount = 0, this._overrideRenderingFillMode = null
      }
    }
    const Hd = {
      source: null,
      parent: null,
      doNotCloneChildren: !1,
      clonePhysicsImpostor: !0,
      cloneThinInstances: !1
    };
    class wd extends bd.c {
      static _GetDefaultSideOrientation(dd) {
        return dd || wd.FRONTSIDE
      }
      get useLODScreenCoverage() {
        return this._internalMeshDataInfo._useLODScreenCoverage
      }
      set useLODScreenCoverage(dd) {
        this._internalMeshDataInfo._useLODScreenCoverage = dd, this._sortLODLevels()
      }
      get computeBonesUsingShaders() {
        return this._internalAbstractMeshDataInfo._computeBonesUsingShaders
      }
      set computeBonesUsingShaders(dd) {
        this._internalAbstractMeshDataInfo._computeBonesUsingShaders !== dd && (dd && this._internalMeshDataInfo._sourcePositions && (this.setVerticesData(Fd.j.PositionKind, this._internalMeshDataInfo._sourcePositions, !0), this._internalMeshDataInfo._sourceNormals && this.setVerticesData(Fd.j.NormalKind, this._internalMeshDataInfo._sourceNormals, !0), this._internalMeshDataInfo._sourcePositions = null, this._internalMeshDataInfo._sourceNormals = null), this._internalAbstractMeshDataInfo._computeBonesUsingShaders = dd, this._markSubMeshesAsAttributesDirty())
      }
      get onBeforeRenderObservable() {
        return this._internalMeshDataInfo._onBeforeRenderObservable || (this._internalMeshDataInfo._onBeforeRenderObservable = new Rd.e), this._internalMeshDataInfo._onBeforeRenderObservable
      }
      get onBeforeBindObservable() {
        return this._internalMeshDataInfo._onBeforeBindObservable || (this._internalMeshDataInfo._onBeforeBindObservable = new Rd.e), this._internalMeshDataInfo._onBeforeBindObservable
      }
      get onAfterRenderObservable() {
        return this._internalMeshDataInfo._onAfterRenderObservable || (this._internalMeshDataInfo._onAfterRenderObservable = new Rd.e), this._internalMeshDataInfo._onAfterRenderObservable
      }
      get onBetweenPassObservable() {
        return this._internalMeshDataInfo._onBetweenPassObservable || (this._internalMeshDataInfo._onBetweenPassObservable = new Rd.e), this._internalMeshDataInfo._onBetweenPassObservable
      }
      get onBeforeDrawObservable() {
        return this._internalMeshDataInfo._onBeforeDrawObservable || (this._internalMeshDataInfo._onBeforeDrawObservable = new Rd.e), this._internalMeshDataInfo._onBeforeDrawObservable
      }
      set onBeforeDraw(dd) {
        this._onBeforeDrawObserver && this.onBeforeDrawObservable.remove(this._onBeforeDrawObserver), this._onBeforeDrawObserver = this.onBeforeDrawObservable.add(dd)
      }
      get eNd() {
        return this.instances.length > 0
      }
      get hasThinInstances() {
        return (this.forcedInstanceCount || this._thinInstanceDataStorage.instancesCount || 0) > 0
      }
      get forcedInstanceCount() {
        return this._internalMeshDataInfo._forcedInstanceCount
      }
      set forcedInstanceCount(dd) {
        this._internalMeshDataInfo._forcedInstanceCount = dd
      }
      get sideOrientation() {
        return this._internalMeshDataInfo._sideOrientation
      }
      set sideOrientation(dd) {
        this._internalMeshDataInfo._sideOrientation = dd, this._internalAbstractMeshDataInfo._sideOrientationHint = this._scene.useRightHandedSystem && 1 === dd || !this._scene.useRightHandedSystem && 0 === dd
      }
      get _effectiveSideOrientation() {
        return this._internalMeshDataInfo._effectiveSideOrientation
      }
      get overrideMaterialSideOrientation() {
        return this.sideOrientation
      }
      set overrideMaterialSideOrientation(dd) {
        this.sideOrientation = dd, this.material && (this.material.sideOrientation = null)
      }
      get overrideRenderingFillMode() {
        return this._internalMeshDataInfo._overrideRenderingFillMode
      }
      set overrideRenderingFillMode(dd) {
        this._internalMeshDataInfo._overrideRenderingFillMode = dd
      }
      get material() {
        return this._internalAbstractMeshDataInfo._material
      }
      set material(dd) {
        dd && (this.material && null === this.material.sideOrientation || this._internalAbstractMeshDataInfo._sideOrientationHint) && (dd.sideOrientation = null), this._setMaterial(dd)
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
      set isUnIndexed(dd) {
        this._unIndexed !== dd && (this._unIndexed = dd, this._markSubMeshesAsAttributesDirty())
      }
      get worldMatrixInstancedBuffer() {
        const dd = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._instanceDataStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId];
        return dd ? dd.instancesData : void 0
      }
      get previousWorldMatrixInstancedBuffer() {
        const dd = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._instanceDataStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId];
        return dd ? dd.instancesPreviousData : void 0
      }
      get manualUpdateOfWorldMatrixInstancedBuffer() {
        return this._instanceDataStorage.manualUpdate
      }
      set manualUpdateOfWorldMatrixInstancedBuffer(dd) {
        this._instanceDataStorage.manualUpdate = dd
      }
      get manualUpdateOfPreviousWorldMatrixInstancedBuffer() {
        return this._instanceDataStorage.previousManualUpdate
      }
      set manualUpdateOfPreviousWorldMatrixInstancedBuffer(dd) {
        this._instanceDataStorage.previousManualUpdate = dd
      }
      get forceWorldMatrixInstancedBufferUpdate() {
        return this._instanceDataStorage.forceMatrixUpdates
      }
      set forceWorldMatrixInstancedBufferUpdate(dd) {
        this._instanceDataStorage.forceMatrixUpdates = dd
      }
      _copySource(dd, Jd) {
        let kd = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          pd = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const Nd = this.Wm();
        if (dd._geometry && dd._geometry.applyToMesh(this), vd.c.DeepCopy(dd, this, ["name", "material", "skeleton", "instances", "parent", "uniqueId", "source", "metadata", "morphTargetManager", "eNd", "worldMatrixInstancedBuffer", "previousWorldMatrixInstancedBuffer", "hasLODLevels", "geometry", "isBlocked", "areNormalsFrozen", "facetNb", "isFacetDataEnabled", "lightSources", "useBones", "Km", "collider", "edgesRenderer", "forward", "up", "right", "absolutePosition", "absoluteScaling", "absoluteRotationQuaternion", "APd", "nonUniformScaling", "behaviors", "worldMatrixFromCache", "hasThinInstances", "cloneMeshMap", "hasBoundingInfo", "physicsBody", "physicsImpostor"], ["_poseMatrix"]), this._internalMeshDataInfo._source = dd, Nd.useClonedMeshMap && (dd._internalMeshDataInfo.meshMap || (dd._internalMeshDataInfo.meshMap = {}), dd._internalMeshDataInfo.meshMap[this.uniqueId] = this), this._originalBuilderSideOrientation = dd._originalBuilderSideOrientation, this._creationDataStorage = dd._creationDataStorage, dd._ranges) {
          const Jd = dd._ranges;
          for (const dd in Jd) Object.prototype.hasOwnProperty.call(Jd, dd) && Jd[dd] && this.createAnimationRange(dd, Jd[dd].from, Jd[dd].to)
        }
        if (dd.metadata && dd.metadata.clone ? this.metadata = dd.metadata.clone() : this.metadata = dd.metadata, this._internalMetadata = dd._internalMetadata, this.meshBlendingTag = dd.meshBlendingTag, xd.c && xd.c.HasTags(dd) && xd.c.AddTagsTo(this, xd.c.GetTags(dd, !0)), this.XM(dd.isEnabled(!1)), this.parent = dd.parent, this.setPivotMatrix(dd.getPivotMatrix(), this._postMultiplyPivotMatrix), this.id = this.name + "." + dd.id, this.material = dd.material, !Jd) {
          const Nd = dd.getDescendants(!0);
          for (let dd = 0; dd < Nd.length; dd++) {
            const Wd = Nd[dd];
            Wd._isMesh ? (Hd.parent = this, Hd.doNotCloneChildren = Jd, Hd.clonePhysicsImpostor = kd, Hd.cloneThinInstances = pd, Wd.clone(this.name + "." + Wd.name, Hd)) : Wd.clone && Wd.clone(this.name + "." + Wd.name, this)
          }
        }
        if (dd.morphTargetManager && (this.morphTargetManager = dd.morphTargetManager), (0, Td.e)(Nd.getPhysicsEngine)) {
          const Jd = Nd.getPhysicsEngine();
          if (kd && Jd)
            if (1 === Jd.getPluginVersion()) {
              const kd = Jd.getImpostorForPhysicsObject(dd);
              kd && (this.physicsImpostor = kd.clone(this))
            } else 2 === Jd.getPluginVersion() && dd.physicsBody && dd.physicsBody.clone(this)
        }
        for (let Wd = 0; Wd < Nd.Qv.length; Wd++) {
          const Jd = Nd.Qv[Wd];
          Jd.emitter === dd && Jd.clone(Jd.name, this)
        }
        if (this.skeleton = dd.skeleton, pd && (dd._thinInstanceDataStorage.matrixData ? (this.i6("matrix", new Float32Array(dd._thinInstanceDataStorage.matrixData), 16, !dd._thinInstanceDataStorage.matrixBuffer.isUpdatable()), this._thinInstanceDataStorage.matrixBufferSize = dd._thinInstanceDataStorage.matrixBufferSize, this._thinInstanceDataStorage.instancesCount = dd._thinInstanceDataStorage.instancesCount) : this._thinInstanceDataStorage.matrixBufferSize = dd._thinInstanceDataStorage.matrixBufferSize, dd._userThinInstanceBuffersStorage)) {
          const Jd = dd._userThinInstanceBuffersStorage;
          for (const dd in Jd.data) this.i6(dd, new Float32Array(Jd.data[dd]), Jd.strides[dd], !Jd.vertexBuffers?.[dd]?.isUpdatable()), this._userThinInstanceBuffersStorage.sizes[dd] = Jd.sizes[dd]
        }
        this.refreshBoundingInfo(!0, !0), this.computeWorldMatrix(!0)
      }
      constructor(dd) {
        let Jd, kd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          pd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Nd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          Wd = arguments.length > 4 ? arguments[4] : void 0,
          Pd = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        super(dd, kd), this._internalMeshDataInfo = new zd, this.delayLoadState = 0, this.instances = [], this._creationDataStorage = null, this._geometry = null, this._thinInstanceDataStorage = new Vd, this._shouldGenerateFlatShading = !1, this._originalBuilderSideOrientation = wd.DEFAULTSIDE, this.ignoreCameraMaxZ = !1, kd = this.Wm(), this._instanceDataStorage = new ud, this._instanceDataStorage.engine = kd.eL(), this._instanceDataStorage.useMonoDataStorageRenderPass = !this._instanceDataStorage.engine.isWebGPU, this._instanceDataStorage.useMonoDataStorageRenderPass && (this._instanceDataStorage.dataStorageRenderPass = new rd), this._scene.useRightHandedSystem ? this.sideOrientation = 0 : this.sideOrientation = 1, this._onBeforeDraw = (dd, Jd, kd) => {
          dd && kd && (this._uniformBuffer ? this.transferToEffect(Jd) : kd.bindOnlyWorldMatrix(Jd))
        };
        let Zd = !1;
        if (pd && void 0 === pd._addToSceneRootNodes) {
          const dd = pd;
          Jd = dd.parent ?? null, Nd = dd.source ?? null, Wd = dd.doNotCloneChildren ?? !1, Pd = dd.clonePhysicsImpostor ?? !0, Zd = dd.cloneThinInstances ?? !1
        } else Jd = pd;
        Nd && this._copySource(Nd, Wd, Pd, Zd), null !== Jd && (this.parent = Jd), this._instanceDataStorage.hardwareInstancedRendering = this.eL().getCaps().instancedArrays, this._internalMeshDataInfo._onMeshReadyObserverAdded = dd => {
          dd.unregisterOnNextCall = !0, this.isReady(!0) ? this.onMeshReadyObservable.notifyObservers(this) : this._internalMeshDataInfo._checkReadinessObserver || (this._internalMeshDataInfo._checkReadinessObserver = this._scene.onBeforeRenderObservable.add((() => {
            this.isReady(!0) && (this._scene.onBeforeRenderObservable.remove(this._internalMeshDataInfo._checkReadinessObserver), this._internalMeshDataInfo._checkReadinessObserver = null, this.onMeshReadyObservable.notifyObservers(this))
          })))
        }, this.onMeshReadyObservable = new Rd.e(this._internalMeshDataInfo._onMeshReadyObserverAdded), Nd && Nd.onClonedObservable.notifyObservers(this)
      }
      instantiateHierarchy() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          Jd = arguments.length > 1 ? arguments[1] : void 0,
          kd = arguments.length > 2 ? arguments[2] : void 0;
        const pd = 0 === this.getTotalVertices() || Jd && Jd.doNotInstantiate && (!0 === Jd.doNotInstantiate || Jd.doNotInstantiate(this)) ? this.clone("Clone of " + (this.name || this.id), dd || this.parent, !0) : this.createInstance("instance of " + (this.name || this.id));
        pd.parent = dd || this.parent, pd.position = this.position.clone(), pd.fp = this.fp.clone(), this.rotationQuaternion ? pd.rotationQuaternion = this.rotationQuaternion.clone() : pd.rotation = this.rotation.clone(), kd && kd(this, pd);
        for (const Nd of this.getChildTransformNodes(!0)) "InstancedMesh" === Nd.getClassName() && "Mesh" === pd.getClassName() && Nd.RNd === this ? Nd.instantiateHierarchy(pd, {
          doNotInstantiate: Jd && Jd.doNotInstantiate || !1,
          newSourcedMesh: pd
        }, kd) : Nd.instantiateHierarchy(pd, Jd, kd);
        return pd
      }
      getClassName() {
        return "Mesh"
      }
      get _isMesh() {
        return !0
      }
      toString(dd) {
        let Jd = super.toString(dd);
        if (Jd += ", n vertices: " + this.getTotalVertices(), Jd += ", parent: " + (this._waitingParentId ? this._waitingParentId : this.parent ? this.parent.name : "NONE"), this.animations)
          for (let kd = 0; kd < this.animations.length; kd++) Jd += ", animation[0]: " + this.animations[kd].toString(dd);
        if (dd)
          if (this._geometry) {
            const dd = this.ipd(),
              kd = this.getVerticesData(Fd.j.PositionKind);
            kd && dd && (Jd += ", flat shading: " + (kd.length / 3 === dd.length ? "YES" : "NO"))
          } else Jd += ", flat shading: UNKNOWN";
        return Jd
      }
      _unBindEffect() {
        super._unBindEffect();
        for (const dd of this.instances) dd._unBindEffect()
      }
      get hasLODLevels() {
        return this._internalMeshDataInfo._LODLevels.length > 0
      }
      getLODLevels() {
        return this._internalMeshDataInfo._LODLevels
      }
      _sortLODLevels() {
        const dd = this._internalMeshDataInfo._useLODScreenCoverage ? -1 : 1;
        this._internalMeshDataInfo._LODLevels.sort(((Jd, kd) => Jd.distanceOrScreenCoverage < kd.distanceOrScreenCoverage ? dd : Jd.distanceOrScreenCoverage > kd.distanceOrScreenCoverage ? -dd : 0))
      }
      addLODLevel(dd, Jd) {
        if (Jd && Jd._masterMesh) return yd.c.Warn("You cannot use a mesh as LOD level twice"), this;
        const kd = new cd(dd, Jd);
        return this._internalMeshDataInfo._LODLevels.push(kd), Jd && (Jd._masterMesh = this), this._sortLODLevels(), this
      }
      getLODLevelAtDistance(dd) {
        const Jd = this._internalMeshDataInfo;
        for (let kd = 0; kd < Jd._LODLevels.length; kd++) {
          const pd = Jd._LODLevels[kd];
          if (pd.distanceOrScreenCoverage === dd) return pd.mesh
        }
        return null
      }
      removeLODLevel(dd) {
        const Jd = this._internalMeshDataInfo;
        for (let kd = 0; kd < Jd._LODLevels.length; kd++) Jd._LODLevels[kd].mesh === dd && (Jd._LODLevels.splice(kd, 1), dd && (dd._masterMesh = null));
        return this._sortLODLevels(), this
      }
      getLOD(dd, Jd) {
        const kd = this._internalMeshDataInfo;
        if (!kd._LODLevels || 0 === kd._LODLevels.length) return this;
        const pd = Jd || this.pU().zpd,
          Nd = dd.mode === Bd.e.ORTHOGRAPHIC_CAMERA ? dd.minZ : pd.centerWorld.subtract(dd.globalPosition).length();
        let Wd = Nd,
          Pd = 1;
        if (kd._useLODScreenCoverage) {
          const Jd = dd.screenArea;
          let kd = pd.radiusWorld * dd.minZ / Nd;
          kd = kd * kd * Math.PI, Wd = kd / Jd, Pd = -1
        }
        if (Pd * kd._LODLevels[kd._LODLevels.length - 1].distanceOrScreenCoverage > Pd * Wd) return this.onLODLevelSelection && this.onLODLevelSelection(Wd, this, this), this;
        for (let Zd = 0; Zd < kd._LODLevels.length; Zd++) {
          const dd = kd._LODLevels[Zd];
          if (Pd * dd.distanceOrScreenCoverage < Pd * Wd) {
            if (dd.mesh) {
              if (4 === dd.mesh.delayLoadState) return dd.mesh._checkDelayState(), this;
              if (2 === dd.mesh.delayLoadState) return this;
              dd.mesh._preActivate(), dd.mesh._updateSubMeshesBoundingInfo(this.worldMatrixFromCache)
            }
            return this.onLODLevelSelection && this.onLODLevelSelection(Wd, this, dd.mesh), dd.mesh
          }
        }
        return this.onLODLevelSelection && this.onLODLevelSelection(Wd, this, this), this
      }
      get geometry() {
        return this._geometry
      }
      getTotalVertices() {
        return null === this._geometry || void 0 === this._geometry ? 0 : this._geometry.getTotalVertices()
      }
      getVerticesData(dd, Jd, kd, pd) {
        if (!this._geometry) return null;
        let Nd = pd ? void 0 : this._userInstancedBuffersStorage?.vertexBuffers[dd]?.getFloatData(this.instances.length + 1, kd || Jd && 1 !== this._geometry.meshes.length);
        return Nd || (Nd = this._geometry.getVerticesData(dd, Jd, kd)), Nd
      }
      copyVerticesData(dd, Jd) {
        this._geometry && this._geometry.copyVerticesData(dd, Jd)
      }
      getVertexBuffer(dd, Jd) {
        return this._geometry ? (Jd ? void 0 : this._userInstancedBuffersStorage?.vertexBuffers[dd]) ?? this._geometry.getVertexBuffer(dd) : null
      }
      isVerticesDataPresent(dd, Jd) {
        return this._geometry ? !Jd && void 0 !== this._userInstancedBuffersStorage?.vertexBuffers[dd] || this._geometry.isVerticesDataPresent(dd) : !!this._delayInfo && -1 !== this._delayInfo.indexOf(dd)
      }
      isVertexBufferUpdatable(dd, Jd) {
        if (!this._geometry) return !!this._delayInfo && -1 !== this._delayInfo.indexOf(dd);
        if (!Jd) {
          const Jd = this._userInstancedBuffersStorage?.vertexBuffers[dd];
          if (Jd) return Jd.isUpdatable()
        }
        return this._geometry.isVertexBufferUpdatable(dd)
      }
      getVerticesDataKinds(dd) {
        if (!this._geometry) {
          const dd = [];
          if (this._delayInfo)
            for (const Jd of this._delayInfo) dd.push(Jd);
          return dd
        }
        const Jd = this._geometry.getVerticesDataKinds();
        if (!dd && this._userInstancedBuffersStorage)
          for (const kd in this._userInstancedBuffersStorage.vertexBuffers) - 1 === Jd.indexOf(kd) && Jd.push(kd);
        return Jd
      }
      getTotalIndices() {
        return this._geometry ? this._geometry.getTotalIndices() : 0
      }
      ipd(dd, Jd) {
        return this._geometry ? this._geometry.ipd(dd, Jd) : []
      }
      get isBlocked() {
        return null !== this._masterMesh && void 0 !== this._masterMesh
      }
      isReady() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Jd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (2 === this.delayLoadState) return !1;
        if (!super.isReady(dd)) return !1;
        if (!this.rG || 0 === this.rG.length) return !0;
        if (!dd) return !0;
        const kd = this.eL(),
          pd = this.Wm(),
          Nd = Jd || kd.getCaps().instancedArrays && (this.instances.length > 0 || this.hasThinInstances);
        this.computeWorldMatrix();
        const Wd = this.material || pd.defaultMaterial;
        if (Wd)
          if (Wd._storeEffectOnSubMeshes)
            for (const Zd of this.rG) {
              const dd = Zd.qL();
              if (dd)
                if (dd._storeEffectOnSubMeshes) {
                  if (!dd.isReadyForSubMesh(this, Zd, Nd)) return !1
                } else if (!dd.isReady(this, Nd)) return !1
            } else if (!Wd.isReady(this, Nd)) return !1;
        const Pd = kd.currentRenderPassId;
        for (const Zd of this.lightSources) {
          const dd = Zd.getShadowGenerators();
          if (!dd) continue;
          const Jd = dd.values();
          for (let pd = Jd.next(); !0 !== pd.done; pd = Jd.next()) {
            const dd = pd.value;
            if (dd && (!dd.getShadowMap()?.renderList || dd.getShadowMap()?.renderList && -1 !== dd.getShadowMap()?.renderList?.indexOf(this))) {
              const Jd = dd.getShadowMap().renderPassIds ?? [kd.currentRenderPassId];
              for (let pd = 0; pd < Jd.length; ++pd) {
                kd.currentRenderPassId = Jd[pd];
                for (const Jd of this.rG)
                  if (!dd.isReady(Jd, Nd, Jd.qL()?.needAlphaBlendingForMesh(this) ?? !1)) return kd.currentRenderPassId = Pd, !1
              }
              kd.currentRenderPassId = Pd
            }
          }
        }
        for (const Zd of this._internalMeshDataInfo._LODLevels)
          if (Zd.mesh && !Zd.mesh.isReady(Nd)) return !1;
        return !0
      }
      get areNormalsFrozen() {
        return this._internalMeshDataInfo._areNormalsFrozen
      }
      BL() {
        return this._internalMeshDataInfo._areNormalsFrozen = !0, this
      }
      unfreezeNormals() {
        return this._internalMeshDataInfo._areNormalsFrozen = !1, this
      }
      set overridenInstanceCount(dd) {
        this._instanceDataStorage.overridenInstanceCount = dd
      }
      _getInstanceDataStorage() {
        if (this._instanceDataStorage.useMonoDataStorageRenderPass) return this._instanceDataStorage.dataStorageRenderPass;
        const dd = this._instanceDataStorage.engine.currentRenderPassId;
        let Jd = this._instanceDataStorage.renderPasses[dd];
        return Jd || (Jd = new rd, this._instanceDataStorage.renderPasses[dd] = Jd), Jd
      }
      _preActivate() {
        const dd = this._internalMeshDataInfo,
          Jd = this.Wm().getRenderId();
        return dd._preActivateId === Jd || (dd._preActivateId = Jd, this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass.visibleInstances = null : this._getInstanceDataStorage().visibleInstances = null), this
      }
      _preActivateForIntermediateRendering(dd) {
        const Jd = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        return Jd.visibleInstances && (Jd.visibleInstances.intermediateDefaultRenderId = dd), this
      }
      _registerInstanceForRenderId(dd, Jd) {
        const kd = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        return kd.visibleInstances || (kd.visibleInstances = {
          defaultRenderId: Jd,
          selfDefaultRenderId: this._renderId,
          intermediateDefaultRenderId: -1
        }), kd.visibleInstances[Jd] || (void 0 === kd.previousRenderId || this._instanceDataStorage.useMonoDataStorageRenderPass && !this._instanceDataStorage.isFrozen || delete kd.visibleInstances[kd.previousRenderId], kd.previousRenderId = Jd, kd.visibleInstances[Jd] = new Array), kd.visibleInstances[Jd].push(dd), this
      }
      _afterComputeWorldMatrix() {
        super._afterComputeWorldMatrix(), this.hasThinInstances && (this.xL || this.thinInstanceRefreshBoundingInfo(!1))
      }
      _postActivate() {
        this.edgesShareWithInstances && this.edgesRenderer && this.edgesRenderer.isEnabled && this._renderingGroup && (this._renderingGroup._edgesRenderers.pushNoDuplicate(this.edgesRenderer), this.edgesRenderer.customInstances.push(this.getWorldMatrix()))
      }
      refreshBoundingInfo() {
        let dd, Jd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          kd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.hasBoundingInfo && this.pU().isLocked) return this;
        dd = "object" === typeof Jd ? Jd : {
          applySkeleton: Jd,
          applyMorph: kd
        };
        const pd = this.geometry ? this.geometry.boundingBias : null;
        return this._refreshBoundingInfo(this._getData(dd, null, Fd.j.PositionKind), pd), this
      }
      _createGlobalSubMesh(dd) {
        const Jd = this.getTotalVertices();
        if (!Jd || !this.ipd()) return null;
        if (this.rG && this.rG.length > 0) {
          const kd = this.ipd();
          if (!kd) return null;
          const pd = kd.length;
          let Nd = !1;
          if (dd) Nd = !0;
          else
            for (const dd of this.rG) {
              if (dd.indexStart + dd.indexCount > pd) {
                Nd = !0;
                break
              }
              if (dd.verticesStart + dd.verticesCount > Jd) {
                Nd = !0;
                break
              }
            }
          if (!Nd) return this.rG[0]
        }
        return this.releaseSubMeshes(), new Sd.c(0, 0, Jd, 0, this.getTotalIndices() || (this.isUnIndexed ? Jd : 0), this)
      }
      subdivide(dd) {
        if (dd < 1) return;
        const Jd = this.getTotalIndices();
        let kd = Jd / dd | 0,
          pd = 0;
        for (; kd % 3 !== 0;) kd++;
        this.releaseSubMeshes();
        for (let Nd = 0; Nd < dd && !(pd >= Jd); Nd++) Sd.c.CreateFromIndices(0, pd, pd + kd >= Jd ? Jd - pd : kd, this, void 0, !1), pd += kd;
        this.refreshBoundingInfo(), this.synchronizeInstances()
      }
      setVerticesData(dd, Jd) {
        let kd = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          pd = arguments.length > 3 ? arguments[3] : void 0;
        if (this._geometry) this._geometry.setVerticesData(dd, Jd, kd, pd);
        else {
          const pd = new Yd.c;
          pd.set(Jd, dd);
          const Nd = this.Wm();
          new md.e(md.e.RandomId(), Nd, pd, kd, this)
        }
        return this
      }
      removeVerticesData(dd) {
        this._geometry && this._geometry.removeVerticesData(dd)
      }
      markVerticesDataAsUpdatable(dd) {
        let Jd = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const kd = this.getVertexBuffer(dd);
        kd && kd.isUpdatable() !== Jd && this.setVerticesData(dd, this.getVerticesData(dd), Jd)
      }
      setVerticesBuffer(dd) {
        let Jd = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        return this._geometry || (this._geometry = md.e.CreateGeometryForMesh(this)), this._geometry.setVerticesBuffer(dd, kd, Jd), this
      }
      updateVerticesData(dd, Jd, kd, pd) {
        return this._geometry ? (pd ? (this.makeGeometryUnique(), this.updateVerticesData(dd, Jd, kd, !1)) : this._geometry.updateVerticesData(dd, Jd, kd), this) : this
      }
      updateMeshPositions(dd) {
        let Jd = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const kd = this.getVerticesData(Fd.j.PositionKind);
        if (!kd) return this;
        if (dd(kd), this.updateVerticesData(Fd.j.PositionKind, kd, !1, !1), Jd) {
          const dd = this.ipd(),
            Jd = this.getVerticesData(Fd.j.NormalKind);
          if (!Jd) return this;
          Yd.c.ComputeNormals(kd, dd, Jd), this.updateVerticesData(Fd.j.NormalKind, Jd, !1, !1)
        }
        return this
      }
      makeGeometryUnique() {
        if (!this._geometry) return this;
        if (1 === this._geometry.meshes.length) return this;
        const dd = this._geometry,
          Jd = this._geometry.copy(md.e.RandomId());
        return dd.releaseForMesh(this, !0), Jd.applyToMesh(this), this
      }
      setIndexBuffer(dd, Jd, kd) {
        let pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          Nd = this._geometry;
        Nd || (Nd = new md.e(md.e.RandomId(), this.Wm(), void 0, void 0, this)), Nd.setIndexBuffer(dd, Jd, kd, pd)
      }
      setIndices(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          kd = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          pd = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this._geometry) this._geometry.setIndices(dd, Jd, kd, pd);
        else {
          const pd = new Yd.c;
          pd.indices = dd;
          const Nd = this.Wm();
          new md.e(md.e.RandomId(), Nd, pd, kd, this, Jd)
        }
        return this
      }
      updateIndices(dd, Jd) {
        let kd = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return this._geometry ? (this._geometry.updateIndices(dd, Jd, kd), this) : this
      }
      toLeftHanded() {
        return this._geometry ? (this._geometry.toLeftHanded(), this) : this
      }
      _bind(dd, Jd, kd) {
        let pd = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        if (!this._geometry) return this;
        const Nd = this.Wm().eL();
        let Wd;
        if (this._unIndexed)
          if (this._getRenderingFillMode(kd) === jd.b.WireFrameFillMode) Wd = dd._getLinesIndexBuffer(this.ipd(), Nd);
          else Wd = null;
        else switch (this._getRenderingFillMode(kd)) {
          case jd.b.PointFillMode:
            Wd = null;
            break;
          case jd.b.WireFrameFillMode:
            Wd = dd._getLinesIndexBuffer(this.ipd(), Nd);
            break;
          default:
          case jd.b.TriangleFillMode:
            Wd = this._geometry.getIndexBuffer()
        }
        return this._bindDirect(Jd, Wd, pd)
      }
      _bindDirect(dd, Jd) {
        let kd = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (!this._geometry) return this;
        if (this.morphTargetManager && this.morphTargetManager.isUsingTextureForTargets && this.morphTargetManager._bind(dd), kd && this._userInstancedBuffersStorage && !this.hasThinInstances) {
          if (!this._instanceDataStorage.useMonoDataStorageRenderPass && this._userInstancedBuffersStorage.renderPasses && this._userInstancedBuffersStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId]) {
            const dd = this._userInstancedBuffersStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId];
            for (const Jd in dd) this._userInstancedBuffersStorage.vertexBuffers[Jd] = dd[Jd]
          }
          this._geometry._bind(dd, Jd, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects)
        } else this._geometry._bind(dd, Jd);
        return this
      }
      _draw(dd, Jd, kd) {
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        this._internalMeshDataInfo._onBeforeDrawObservable && this._internalMeshDataInfo._onBeforeDrawObservable.notifyObservers(this);
        const pd = this.Wm().eL(),
          Nd = pd._currentMaterialContext,
          Wd = Nd && Nd.useVertexPulling;
        return this._unIndexed && Jd !== jd.b.WireFrameFillMode || Jd == jd.b.PointFillMode ? pd.drawArraysType(Jd, dd.verticesStart, dd.verticesCount, this.forcedInstanceCount || kd) : Jd == jd.b.WireFrameFillMode ? pd.drawElementsType(Jd, 0, dd._linesIndexCount, this.forcedInstanceCount || kd) : Wd ? pd.drawArraysType(Jd, dd.indexStart, dd.indexCount, this.forcedInstanceCount || kd) : pd.drawElementsType(Jd, dd.indexStart, dd.indexCount, this.forcedInstanceCount || kd), this
      }
      registerBeforeRender(dd) {
        return this.onBeforeRenderObservable.add(dd), this
      }
      unregisterBeforeRender(dd) {
        return this.onBeforeRenderObservable.removeCallback(dd), this
      }
      registerAfterRender(dd) {
        return this.onAfterRenderObservable.add(dd), this
      }
      unregisterAfterRender(dd) {
        return this.onAfterRenderObservable.removeCallback(dd), this
      }
      _getInstancesRenderList(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const kd = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        if (this._instanceDataStorage.isFrozen) {
          if (Jd) return kd.batchCacheReplacementModeInFrozenMode.hardwareInstancedRendering[dd] = !1, kd.batchCacheReplacementModeInFrozenMode.renderSelf[dd] = !0, kd.batchCacheReplacementModeInFrozenMode;
          if (kd.previousBatch) return kd.previousBatch
        }
        const pd = this.Wm(),
          Nd = pd._isInIntermediateRendering(),
          Wd = Nd ? this._internalAbstractMeshDataInfo._onlyForInstancesIntermediate : this._internalAbstractMeshDataInfo._onlyForInstances,
          Pd = kd.batchCache;
        if (Pd.mustReturn = !1, Pd.renderSelf[dd] = Jd || !Wd && this.isEnabled() && this.isVisible, Pd.visibleInstances[dd] = null, kd.visibleInstances && !Jd) {
          const Jd = kd.visibleInstances,
            Wd = pd.getRenderId(),
            Zd = Nd ? Jd.intermediateDefaultRenderId : Jd.defaultRenderId;
          Pd.visibleInstances[dd] = Jd[Wd], !Pd.visibleInstances[dd] && Zd && (Pd.visibleInstances[dd] = Jd[Zd])
        }
        return Pd.hardwareInstancedRendering[dd] = !Jd && this._instanceDataStorage.hardwareInstancedRendering && null !== Pd.visibleInstances[dd] && void 0 !== Pd.visibleInstances[dd], kd.previousBatch = Pd, Pd
      }
      _updateInstancedBuffers(dd, Jd, kd, pd, Nd, Wd) {
        const Pd = Jd.visibleInstances[dd._id],
          Zd = Pd ? Pd.length : 0,
          gd = Jd.parent,
          Cd = this._instanceDataStorage;
        let Kd = gd.instancesBuffer,
          od = gd.instancesPreviousBuffer,
          ld = 0,
          Qd = 0;
        const Ld = Jd.renderSelf[dd._id],
          Od = this._scene.floatingOriginOffset,
          ed = !Kd || kd !== gd.instancesBufferSize || this._scene.needsPreviousWorldMatrices && !gd.instancesPreviousBuffer;
        if (this._instanceDataStorage.manualUpdate || Cd.isFrozen && !ed) Qd = (Ld ? 1 : 0) + Zd;
        else {
          const Jd = this.getWorldMatrix();
          if (Ld) {
            this._scene.needsPreviousWorldMatrices && (Cd.masterMeshPreviousWorldMatrix ? (Cd.masterMeshPreviousWorldMatrix.copyToArray(gd.instancesPreviousData, ld), Cd.masterMeshPreviousWorldMatrix.Fs(Jd)) : (Cd.masterMeshPreviousWorldMatrix = Jd.clone(), Cd.masterMeshPreviousWorldMatrix.copyToArray(gd.instancesPreviousData, ld))), Jd.copyToArray(gd.instancesData, ld);
            const dd = Jd.spd();
            gd.instancesData[ld + 12] = dd[12] - Od.x, gd.instancesData[ld + 13] = dd[13] - Od.y, gd.instancesData[ld + 14] = dd[14] - Od.z, ld += 16, Qd++
          }
          if (Pd) {
            if (wd.INSTANCEDMESH_SORT_TRANSPARENT && this._scene.activeCamera && dd.qL()?.needAlphaBlendingForMesh(dd.getRenderingMesh())) {
              const dd = this._scene.activeCamera.globalPosition;
              for (let Jd = 0; Jd < Pd.length; Jd++) {
                const kd = Pd[Jd];
                kd._distanceToCamera = sd.n.Distance(kd.pU().zpd.centerWorld, dd)
              }
              Pd.sort(((dd, Jd) => dd._distanceToCamera > Jd._distanceToCamera ? -1 : dd._distanceToCamera < Jd._distanceToCamera ? 1 : 0))
            }
            for (let dd = 0; dd < Pd.length; dd++) {
              const Jd = Pd[dd],
                kd = Jd.getWorldMatrix();
              kd.copyToArray(gd.instancesData, ld), this._scene.needsPreviousWorldMatrices && (Jd._previousWorldMatrix ? (Jd._previousWorldMatrix.copyToArray(gd.instancesPreviousData, ld), Jd._previousWorldMatrix.Fs(kd)) : (Jd._previousWorldMatrix = kd.clone(), Jd._previousWorldMatrix.copyToArray(gd.instancesPreviousData, ld)));
              const pd = kd.spd();
              gd.instancesData[ld + 12] = pd[12] - Od.x, gd.instancesData[ld + 13] = pd[13] - Od.y, gd.instancesData[ld + 14] = pd[14] - Od.z, ld += 16, Qd++
            }
          }
        }
        if (ed) {
          let dd;
          if (Kd && Kd.dispose(), od && od.dispose(), Kd = new Fd.e(pd, gd.instancesData, !0, 16, !1, !0), gd.instancesBuffer = Kd, this._userInstancedBuffersStorage || (this._userInstancedBuffersStorage = {
              data: {},
              vertexBuffers: {},
              strides: {},
              sizes: {},
              vertexArrayObjects: this.eL().getCaps().vertexArrayObject ? {} : void 0
            }), this._instanceDataStorage.useMonoDataStorageRenderPass) dd = this._userInstancedBuffersStorage.vertexBuffers;
          else {
            this._userInstancedBuffersStorage.renderPasses || (this._userInstancedBuffersStorage.renderPasses = {});
            const Jd = this._instanceDataStorage.engine.currentRenderPassId;
            dd = this._userInstancedBuffersStorage.renderPasses[Jd], dd || (this._userInstancedBuffersStorage.renderPasses[Jd] = dd = {})
          }
          dd.world0 = Kd.createVertexBuffer("world0", 0, 4), dd.world1 = Kd.createVertexBuffer("world1", 4, 4), dd.world2 = Kd.createVertexBuffer("world2", 8, 4), dd.world3 = Kd.createVertexBuffer("world3", 12, 4), this._scene.needsPreviousWorldMatrices && (od = new Fd.e(pd, gd.instancesPreviousData, !0, 16, !1, !0), gd.instancesPreviousBuffer = od, dd.previousWorld0 = od.createVertexBuffer("previousWorld0", 0, 4), dd.previousWorld1 = od.createVertexBuffer("previousWorld1", 4, 4), dd.previousWorld2 = od.createVertexBuffer("previousWorld2", 8, 4), dd.previousWorld3 = od.createVertexBuffer("previousWorld3", 12, 4)), this._invalidateInstanceVertexArrayObject()
        } else this._instanceDataStorage.isFrozen && !this._instanceDataStorage.forceMatrixUpdates || (Kd.updateDirectly(gd.instancesData, 0, Qd), !this._scene.needsPreviousWorldMatrices || this._instanceDataStorage.manualUpdate && !this._instanceDataStorage.previousManualUpdate || od.updateDirectly(gd.instancesPreviousData, 0, Qd));
        this._processInstancedBuffers(Pd, Ld), Wd && void 0 !== Nd && (this.Wm()._activeIndices.addCount(dd.indexCount * Qd, !1), pd._currentDrawContext && (pd._currentDrawContext.useInstancing = !0), this._bind(dd, Wd, Nd), this._draw(dd, Nd, Qd)), !this._scene.needsPreviousWorldMatrices || ed || !this._instanceDataStorage.manualUpdate || this._instanceDataStorage.isFrozen && !this._instanceDataStorage.forceMatrixUpdates || this._instanceDataStorage.previousManualUpdate || od.updateDirectly(gd.instancesData, 0, Qd)
      }
      _renderWithInstances(dd, Jd, kd, pd, Nd) {
        const Wd = kd.visibleInstances[dd._id],
          Pd = Wd ? Wd.length : 0,
          Zd = kd.parent,
          gd = Zd.instancesBufferSize,
          Cd = 16 * (Pd + 1) * 4;
        for (; Zd.instancesBufferSize < Cd;) Zd.instancesBufferSize *= 2;
        return Zd.instancesData && gd == Zd.instancesBufferSize || (Zd.instancesData = new Float32Array(Zd.instancesBufferSize / 4)), (this._scene.needsPreviousWorldMatrices && !Zd.instancesPreviousData || gd != Zd.instancesBufferSize) && (Zd.instancesPreviousData = new Float32Array(Zd.instancesBufferSize / 4)), this._updateInstancedBuffers(dd, kd, gd, Nd, Jd, pd), Nd.unbindInstanceAttributes(), this
      }
      _renderWithThinInstances(dd, Jd, kd, pd) {
        const Nd = this._thinInstanceDataStorage?.instancesCount ?? 0;
        this.Wm()._activeIndices.addCount(dd.indexCount * Nd, !1), pd._currentDrawContext && (pd._currentDrawContext.useInstancing = !0), this._bind(dd, kd, Jd), this._draw(dd, Jd, Nd), this._scene.needsPreviousWorldMatrices && !this._thinInstanceDataStorage.previousMatrixData && this._thinInstanceDataStorage.matrixData && (this._thinInstanceDataStorage.previousMatrixBuffer ? this._thinInstanceDataStorage.previousMatrixBuffer.updateDirectly(this._thinInstanceDataStorage.matrixData, 0, Nd) : this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", this._thinInstanceDataStorage.matrixData, !1)), pd.unbindInstanceAttributes()
      }
      _processInstancedBuffers(dd, Jd) {}
      _processRendering(dd, Jd, kd, pd, Nd, Wd, Pd, Zd) {
        const gd = this.Wm(),
          Cd = gd.eL();
        if (pd = this._getRenderingFillMode(pd), Wd && Jd.getRenderingMesh().hasThinInstances) return this._renderWithThinInstances(Jd, pd, kd, Cd), this;
        if (Wd) this._renderWithInstances(Jd, pd, Nd, kd, Cd);
        else {
          Cd._currentDrawContext && (Cd._currentDrawContext.useInstancing = !1);
          let kd = 0;
          Nd.renderSelf[Jd._id] && (Pd && Pd(!1, dd.getWorldMatrix(), Zd), kd++, this._draw(Jd, pd, this._instanceDataStorage.overridenInstanceCount));
          const Wd = Nd.visibleInstances[Jd._id];
          if (Wd) {
            const dd = Wd.length;
            kd += dd;
            for (let kd = 0; kd < dd; kd++) {
              const dd = Wd[kd].getWorldMatrix();
              Pd && Pd(!0, dd, Zd), this._draw(Jd, pd)
            }
          }
          gd._activeIndices.addCount(Jd.indexCount * kd, !1)
        }
        return this
      }
      _disposeInstanceDataStorageRenderPass(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        dd?.instancesBuffer && (Jd && dd.instancesBuffer.dispose(), dd.instancesBuffer = null), dd?.instancesPreviousBuffer && (Jd && dd.instancesPreviousBuffer.dispose(), dd.instancesPreviousBuffer = null)
      }
      _rebuild() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const Jd in this._instanceDataStorage.renderPasses) {
          const kd = this._instanceDataStorage.renderPasses[Jd];
          this._disposeInstanceDataStorageRenderPass(kd, dd)
        }
        if (this._disposeInstanceDataStorageRenderPass(this._instanceDataStorage.dataStorageRenderPass, dd), this._userInstancedBuffersStorage) {
          for (const Jd in this._userInstancedBuffersStorage.vertexBuffers) {
            const kd = this._userInstancedBuffersStorage.vertexBuffers[Jd];
            kd && (dd && kd.dispose(), this._userInstancedBuffersStorage.vertexBuffers[Jd] = null)
          }
          this._userInstancedBuffersStorage.vertexArrayObjects && (this._userInstancedBuffersStorage.vertexArrayObjects = {})
        }
        this._internalMeshDataInfo._effectiveMaterial = null, super._rebuild(dd)
      }
      _releaseRenderPassId(dd) {
        const Jd = this._instanceDataStorage.renderPasses[dd];
        if (Jd && (this._disposeInstanceDataStorageRenderPass(Jd, !0), delete this._instanceDataStorage.renderPasses[dd]), this._userInstancedBuffersStorage?.renderPasses) {
          const Jd = this._userInstancedBuffersStorage.renderPasses[dd];
          if (Jd)
            for (const dd in Jd) Jd[dd]?.dispose();
          delete this._userInstancedBuffersStorage.renderPasses[dd]
        }
        const kd = this._userInstancedBuffersStorage?.interleavedBuffers;
        kd?.[dd] && (kd[dd].buffer.dispose(), delete kd[dd])
      }
      _freeze() {
        if (this.rG) {
          for (let dd = 0; dd < this.rG.length; dd++) this._getInstancesRenderList(dd);
          this._internalMeshDataInfo._effectiveMaterial = null, this._instanceDataStorage.isFrozen = !0
        }
      }
      _unFreeze() {
        this._instanceDataStorage.isFrozen = !1;
        for (const dd in this._instanceDataStorage.renderPasses) {
          this._instanceDataStorage.renderPasses[dd].previousBatch = null
        }
        this._instanceDataStorage.dataStorageRenderPass && (this._instanceDataStorage.dataStorageRenderPass.previousBatch = null)
      }
      renderWithRenderPassId(dd, Jd, kd, pd) {
        let Nd = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        const Wd = this._scene.eL(),
          Pd = Wd.currentRenderPassId;
        if (void 0 !== dd && (Wd.currentRenderPassId = dd), pd)(!Nd || Nd && pd.isInFrustum(this._scene._frustumPlanes)) && this.render(pd, !!Jd, kd);
        else
          for (let Zd = 0; Zd < this.rG.length; Zd++) {
            const dd = this.rG[Zd];
            (!Nd || Nd && dd.isInFrustum(this._scene._frustumPlanes)) && this.render(dd, !!Jd, kd)
          }
        return void 0 !== dd && (Wd.currentRenderPassId = Pd), this
      }
      directRender() {
        if (!this.rG) return this;
        for (const dd of this.rG) this.render(dd, !1);
        return this
      }
      render(dd, Jd, kd) {
        const pd = this.Wm(),
          Nd = pd.eL();
        this._internalAbstractMeshDataInfo._isActiveIntermediate ? this._internalAbstractMeshDataInfo._isActiveIntermediate = !1 : this._internalAbstractMeshDataInfo._isActive = !1;
        const Wd = pd.activeCameras?.length ?? 0,
          Pd = Wd > 1 && pd.activeCamera === pd.activeCameras[0] || Wd <= 1,
          Zd = this._occlusionDataStorage && -1 !== this._occlusionDataStorage.occlusionForRenderPassId && this._occlusionDataStorage.occlusionForRenderPassId !== Nd.currentRenderPassId;
        if (Pd && this._checkOcclusionQuery(Zd) && !this._occlusionDataStorage.forceRenderingWhenOccluded) return this;
        const gd = this._getInstancesRenderList(dd._id, !!kd);
        if (gd.mustReturn) return this;
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        let Cd = 0,
          Kd = null;
        this.ignoreCameraMaxZ && pd.activeCamera && !pd._isInIntermediateRendering() && (Cd = pd.activeCamera.maxZ, Kd = pd.activeCamera, pd.activeCamera.maxZ = 0, pd.updateTransformMatrix(!0)), this._internalMeshDataInfo._onBeforeRenderObservable && this._internalMeshDataInfo._onBeforeRenderObservable.notifyObservers(this);
        const od = dd.getRenderingMesh(),
          ld = gd.hardwareInstancedRendering[dd._id] || od.hasThinInstances || !!this._userInstancedBuffersStorage && !dd.getMesh()._internalAbstractMeshDataInfo._actAsRegularMesh,
          Qd = this._instanceDataStorage,
          Ld = dd.qL();
        if (!Ld) return Kd && (Kd.maxZ = Cd, pd.updateTransformMatrix(!0)), this;
        if (Qd.isFrozen && this._internalMeshDataInfo._effectiveMaterial && this._internalMeshDataInfo._effectiveMaterial === Ld) {
          if (Ld._storeEffectOnSubMeshes && !dd._drawWrapper?._wasPreviouslyReady || !Ld._storeEffectOnSubMeshes && !Ld._getDrawWrapper()._wasPreviouslyReady) return Kd && (Kd.maxZ = Cd, pd.updateTransformMatrix(!0)), this
        } else {
          if (Ld._storeEffectOnSubMeshes) {
            if (!Ld.isReadyForSubMesh(this, dd, ld)) return Kd && (Kd.maxZ = Cd, pd.updateTransformMatrix(!0)), this
          } else if (!Ld.isReady(this, ld)) return Kd && (Kd.maxZ = Cd, pd.updateTransformMatrix(!0)), this;
          this._internalMeshDataInfo._effectiveMaterial = Ld
        }
        if (Jd) {
          const dd = this._internalMeshDataInfo._effectiveMaterial;
          if (1 === dd.alphaModes.length) Nd.setAlphaMode(dd.alphaMode);
          else
            for (let Jd = 0; Jd < dd.alphaModes.length; Jd++) {
              const kd = dd.alphaModes[Jd];
              Nd.setAlphaMode(void 0 !== kd ? kd : 2, !1, Jd)
            }
        }
        let Od;
        Od = this._internalMeshDataInfo._effectiveMaterial._storeEffectOnSubMeshes ? dd._drawWrapper : this._internalMeshDataInfo._effectiveMaterial._getDrawWrapper();
        const ed = Od?.effect ?? null;
        for (let Bd = 0, sd = pd._beforeRenderingMeshStage; Bd < sd.length; Bd++) {
          sd[Bd].action(this, dd, gd, ed)
        }
        if (!Od || !ed) return Kd && (Kd.maxZ = Cd, pd.updateTransformMatrix(!0)), this;
        const Rd = kd || this;
        let Id;
        if (!Qd.isFrozen && (this._internalMeshDataInfo._effectiveMaterial.backFaceCulling || null !== this._internalMeshDataInfo._effectiveMaterial.sideOrientation || this._internalMeshDataInfo._effectiveMaterial._twoSidedLighting)) {
          const dd = Rd._getWorldMatrixDeterminant();
          Id = this._internalMeshDataInfo._effectiveMaterial._getEffectiveOrientation(this), dd < 0 && (Id = Id === jd.b.ClockWiseSideOrientation ? jd.b.CounterClockWiseSideOrientation : jd.b.ClockWiseSideOrientation), this._internalMeshDataInfo._effectiveSideOrientation = Id
        }
        const Gd = this._internalMeshDataInfo._effectiveMaterial._preBind(Od, this._internalMeshDataInfo._effectiveSideOrientation);
        this._internalMeshDataInfo._effectiveMaterial.forceDepthWrite && Nd.setDepthWrite(!0);
        const vd = this._internalMeshDataInfo._effectiveMaterial,
          xd = vd.fillMode;
        this._internalMeshDataInfo._onBeforeBindObservable && this._internalMeshDataInfo._onBeforeBindObservable.notifyObservers(this), ld || this._bind(dd, ed, xd, !1);
        const qd = Rd.getWorldMatrix();
        vd._storeEffectOnSubMeshes ? vd.bindForSubMesh(qd, this, dd) : vd.bind(qd, this);
        try {
          Xd.b._BindAttachmentsForEffect(Nd, ed) && (!vd.backFaceCulling && vd.separateCullingPass && (Nd.setState(!0, vd.zOffset, !1, !Gd, vd.cullBackFaces, vd.stencil, vd.zOffsetUnits), this._processRendering(this, dd, ed, xd, gd, ld, this._onBeforeDraw, this._internalMeshDataInfo._effectiveMaterial), Nd.setState(!0, vd.zOffset, !1, Gd, vd.cullBackFaces, vd.stencil, vd.zOffsetUnits), this._internalMeshDataInfo._onBetweenPassObservable && this._internalMeshDataInfo._onBetweenPassObservable.notifyObservers(dd)), this._processRendering(this, dd, ed, xd, gd, ld, this._onBeforeDraw, this._internalMeshDataInfo._effectiveMaterial))
        } finally {
          Xd.b._RestoreAttachments(Nd)
        }
        this._internalMeshDataInfo._effectiveMaterial.unbind();
        for (let Bd = 0, sd = pd._afterRenderingMeshStage; Bd < sd.length; Bd++) {
          sd[Bd].action(this, dd, gd, ed)
        }
        return this._internalMeshDataInfo._onAfterRenderObservable && this._internalMeshDataInfo._onAfterRenderObservable.notifyObservers(this), Kd && (Kd.maxZ = Cd, pd.updateTransformMatrix(!0)), 2 !== pd.performancePriority || Qd.isFrozen || this._freeze(), this
      }
      _renderRunFollower(dd, Jd) {
        const kd = this._scene,
          pd = kd._engine;
        if (pd.isWebGPU || dd._mesh !== this || 0 !== this.instances.length || this.render !== wd.prototype.render) return !1;
        const Nd = dd.qL();
        if (!Nd || Nd !== kd._cachedMaterial || void 0 === Nd._canBindRunFollower) return !1;
        const Wd = dd._drawWrapper,
          Pd = Wd?.effect;
        if (!Pd || Pd !== kd._cachedEffect || this.visibility !== kd._cachedVisibility || Wd._forceRebindOnNextCall) return !1;
        const Zd = this.hasThinInstances;
        if (!Zd && this._userInstancedBuffersStorage) return !1;
        if (!Wd._wasPreviouslyReady || Wd._wasPreviouslyUsingInstances !== Zd) return !1;
        const gd = this._internalMeshDataInfo;
        if (this.ignoreCameraMaxZ || this.morphTargetManager || this._instanceDataStorage.isFrozen || kd._isInIntermediateRendering() || 0 !== kd._beforeRenderingMeshStage.length || 0 !== kd._afterRenderingMeshStage.length || gd._onBeforeRenderObservable?.hasObservers() || gd._onBeforeBindObservable?.hasObservers() || gd._onAfterRenderObservable?.hasObservers()) return !1;
        const Cd = this.occlusionType;
        if (void 0 !== Cd && Cd !== bd.c.OCCLUSION_TYPE_NONE || !Nd._canBindRunFollower(kd, pd, this, dd, Pd)) return !1;
        const Kd = this._internalAbstractMeshDataInfo,
          od = Kd._isActiveIntermediate;
        od ? Kd._isActiveIntermediate = !1 : Kd._isActive = !1;
        const ld = kd.activeCameras?.length ?? 0;
        (ld > 1 && kd.activeCamera === kd.activeCameras[0] || ld <= 1) && this._checkOcclusionQuery(!1);
        const Qd = this._getInstancesRenderList(dd._id);
        if (Qd.mustReturn) return !0;
        if (!Zd && !Qd.renderSelf[dd._id]) return od ? Kd._isActiveIntermediate = !0 : Kd._isActive = !0, !1;
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return !0;
        if (gd._effectiveMaterial = Nd, Jd)
          if (1 === Nd.alphaModes.length) pd.setAlphaMode(Nd.alphaMode);
          else
            for (let Od = 0; Od < Nd.alphaModes.length; Od++) {
              const dd = Nd.alphaModes[Od];
              pd.setAlphaMode(void 0 !== dd ? dd : 2, !1, Od)
            }
        if (Nd.backFaceCulling || null !== Nd.sideOrientation || Nd._twoSidedLighting) {
          const dd = this._getWorldMatrixDeterminant();
          let Jd = Nd._getEffectiveOrientation(this);
          dd < 0 && (Jd = Jd === jd.b.ClockWiseSideOrientation ? jd.b.CounterClockWiseSideOrientation : jd.b.ClockWiseSideOrientation), gd._effectiveSideOrientation = Jd
        }
        Nd._preBind(Wd, gd._effectiveSideOrientation), Nd.forceDepthWrite && pd.setDepthWrite(!0);
        const Ld = Nd.fillMode;
        return Zd || this._bind(dd, Pd, Ld, !1), Nd._bindRunFollower(this.getWorldMatrix(), this, dd, Pd), this._processRendering(this, dd, Pd, Ld, Qd, Zd, this._onBeforeDraw, Nd), Nd.unbind(), 2 === kd.performancePriority && this._freeze(), !0
      }
      cleanMatrixWeights() {
        this.isVerticesDataPresent(Fd.j.MatricesWeightsKind) && (this.isVerticesDataPresent(Fd.j.MatricesWeightsExtraKind) ? this._normalizeSkinWeightsAndExtra() : this._normalizeSkinFourWeights())
      }
      _normalizeSkinFourWeights() {
        const dd = this.getVerticesData(Fd.j.MatricesWeightsKind),
          Jd = dd.length;
        for (let kd = 0; kd < Jd; kd += 4) {
          const Jd = dd[kd] + dd[kd + 1] + dd[kd + 2] + dd[kd + 3];
          if (0 === Jd) dd[kd] = 1;
          else {
            const pd = 1 / Jd;
            dd[kd] *= pd, dd[kd + 1] *= pd, dd[kd + 2] *= pd, dd[kd + 3] *= pd
          }
        }
        this.setVerticesData(Fd.j.MatricesWeightsKind, dd)
      }
      _normalizeSkinWeightsAndExtra() {
        const dd = this.getVerticesData(Fd.j.MatricesWeightsExtraKind),
          Jd = this.getVerticesData(Fd.j.MatricesWeightsKind),
          kd = Jd.length;
        for (let pd = 0; pd < kd; pd += 4) {
          let kd = Jd[pd] + Jd[pd + 1] + Jd[pd + 2] + Jd[pd + 3];
          if (kd += dd[pd] + dd[pd + 1] + dd[pd + 2] + dd[pd + 3], 0 === kd) Jd[pd] = 1;
          else {
            const Nd = 1 / kd;
            Jd[pd] *= Nd, Jd[pd + 1] *= Nd, Jd[pd + 2] *= Nd, Jd[pd + 3] *= Nd, dd[pd] *= Nd, dd[pd + 1] *= Nd, dd[pd + 2] *= Nd, dd[pd + 3] *= Nd
          }
        }
        this.setVerticesData(Fd.j.MatricesWeightsKind, Jd), this.setVerticesData(Fd.j.MatricesWeightsKind, dd)
      }
      validateSkinning() {
        const dd = this.getVerticesData(Fd.j.MatricesWeightsExtraKind),
          Jd = this.getVerticesData(Fd.j.MatricesWeightsKind);
        if (null === Jd || null == this.skeleton) return {
          skinned: !1,
          valid: !0,
          TQ: "not skinned"
        };
        const kd = Jd.length;
        let pd = 0,
          Nd = 0,
          Wd = 0,
          Pd = 0;
        const Zd = null === dd ? 4 : 8,
          gd = [];
        for (let Qd = 0; Qd <= Zd; Qd++) gd[Qd] = 0;
        for (let Qd = 0; Qd < kd; Qd += 4) {
          let kd = Jd[Qd],
            Cd = kd,
            Kd = 0 === Cd ? 0 : 1;
          for (let Nd = 1; Nd < Zd; Nd++) {
            const Wd = Nd < 4 ? Jd[Qd + Nd] : dd[Qd + Nd - 4];
            Wd > kd && pd++, 0 !== Wd && Kd++, Cd += Wd, kd = Wd
          }
          if (gd[Kd]++, Kd > Wd && (Wd = Kd), 0 === Cd) Nd++;
          else {
            const kd = 1 / Cd;
            let pd = 0;
            for (let Nd = 0; Nd < Zd; Nd++) pd += Nd < 4 ? Math.abs(Jd[Qd + Nd] - Jd[Qd + Nd] * kd) : Math.abs(dd[Qd + Nd - 4] - dd[Qd + Nd - 4] * kd);
            pd > .001 && Pd++
          }
        }
        const Cd = this.skeleton.bones.length,
          Kd = this.getVerticesData(Fd.j.MatricesIndicesKind),
          od = this.getVerticesData(Fd.j.MatricesIndicesExtraKind);
        let ld = 0;
        for (let Qd = 0; Qd < kd; Qd += 4)
          for (let dd = 0; dd < Zd; dd++) {
            const Jd = dd < 4 ? Kd[Qd + dd] : od[Qd + dd - 4];
            (Jd >= Cd || Jd < 0) && ld++
          }
        return {
          skinned: !0,
          valid: 0 === Nd && 0 === Pd && 0 === ld,
          TQ: "Number of Weights = " + kd / 4 + "\nMaximum influences = " + Wd + "\nMissing Weights = " + Nd + "\nNot Sorted = " + pd + "\nNot Normalized = " + Pd + "\nWeightCounts = [" + gd + "]\nNumber of bones = " + Cd + "\nBad Bone Indices = " + ld
        }
      }
      _checkDelayState() {
        const dd = this.Wm();
        return this._geometry ? this._geometry.load(dd) : 4 === this.delayLoadState && (this.delayLoadState = 2, this._queueLoad(dd)), this
      }
      _queueLoad(dd) {
        dd.addPendingData(this);
        const Jd = -1 !== this.delayLoadingFile.indexOf(".babylonbinarymeshdata");
        return (async () => {
          try {
            const kd = await dd._loadDelayedFileAsync(this.delayLoadingFile, Jd, !0);
            kd instanceof ArrayBuffer ? this._delayLoadingFunction(kd, this) : this._delayLoadingFunction(JSON.parse(kd), this);
            for (const dd of this.instances) dd.refreshBoundingInfo(), dd._syncSubMeshes();
            this.delayLoadState = 1, dd.removePendingData(this)
          } catch (kd) {
            dd.removePendingData(this), dd.lq || yd.c.Error(`Unable to delay load geometry data for mesh "${this.name}" from "${this.delayLoadingFile}": ${kd}`)
          }
        })(), this
      }
      isInFrustum(dd) {
        return 2 !== this.delayLoadState && (!!super.isInFrustum(dd) && (this._checkDelayState(), !0))
      }
      setMaterialById(dd) {
        const Jd = this.Wm().materials;
        let kd;
        for (kd = Jd.length - 1; kd > -1; kd--)
          if (Jd[kd].id === dd) return this.material = Jd[kd], this;
        const pd = this.Wm().multiMaterials;
        for (kd = pd.length - 1; kd > -1; kd--)
          if (pd[kd].id === dd) return this.material = pd[kd], this;
        return this
      }
      getAnimatables() {
        const dd = [];
        return this.material && dd.push(this.material), this.skeleton && dd.push(this.skeleton), dd
      }
      bakeTransformIntoVertices(dd) {
        if (!this.isVerticesDataPresent(Fd.j.PositionKind)) return this;
        const Jd = this.rG.splice(0);
        this._resetPointsArrayCache();
        let kd = this.getVerticesData(Fd.j.PositionKind);
        const pd = sd.n.Zero();
        let Nd;
        for (Nd = 0; Nd < kd.length; Nd += 3) sd.n.TransformCoordinatesFromFloatsToRef(kd[Nd], kd[Nd + 1], kd[Nd + 2], dd, pd).toArray(kd, Nd);
        if (this.setVerticesData(Fd.j.PositionKind, kd, this.getVertexBuffer(Fd.j.PositionKind).isUpdatable()), this.isVerticesDataPresent(Fd.j.NormalKind)) {
          for (kd = this.getVerticesData(Fd.j.NormalKind), Nd = 0; Nd < kd.length; Nd += 3) sd.n.TransformNormalFromFloatsToRef(kd[Nd], kd[Nd + 1], kd[Nd + 2], dd, pd).normalize().toArray(kd, Nd);
          this.setVerticesData(Fd.j.NormalKind, kd, this.getVertexBuffer(Fd.j.NormalKind).isUpdatable())
        }
        if (this.isVerticesDataPresent(Fd.j.TangentKind)) {
          for (kd = this.getVerticesData(Fd.j.TangentKind), Nd = 0; Nd < kd.length; Nd += 4) sd.n.TransformNormalFromFloatsToRef(kd[Nd], kd[Nd + 1], kd[Nd + 2], dd, pd).normalize().toArray(kd, Nd);
          this.setVerticesData(Fd.j.TangentKind, kd, this.getVertexBuffer(Fd.j.TangentKind).isUpdatable())
        }
        return dd.determinant() < 0 && this.flipFaces(), this.releaseSubMeshes(), this.rG = Jd, this
      }
      bakeCurrentTransformIntoVertices() {
        let dd = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] && this.makeGeometryUnique(), this.bakeTransformIntoVertices(this.computeWorldMatrix(!0)), this.resetLocalMatrix(dd), this
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
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          kd = arguments.length > 2 ? arguments[2] : void 0,
          pd = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        if (Jd && void 0 === Jd._addToSceneRootNodes) {
          const kd = Jd;
          return Hd.source = this, Hd.doNotCloneChildren = kd.doNotCloneChildren, Hd.clonePhysicsImpostor = kd.clonePhysicsImpostor, Hd.cloneThinInstances = kd.cloneThinInstances, new wd(dd, this.Wm(), Hd)
        }
        return new wd(dd, this.Wm(), Jd, this, kd, pd)
      }
      dispose(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.morphTargetManager = null, this._geometry && this._geometry.releaseForMesh(this, !0);
        const kd = this._internalMeshDataInfo;
        if (kd._onBeforeDrawObservable && kd._onBeforeDrawObservable.clear(), kd._onBeforeBindObservable && kd._onBeforeBindObservable.clear(), kd._onBeforeRenderObservable && kd._onBeforeRenderObservable.clear(), kd._onAfterRenderObservable && kd._onAfterRenderObservable.clear(), kd._onBetweenPassObservable && kd._onBetweenPassObservable.clear(), this._scene.useClonedMeshMap) {
          if (kd.meshMap)
            for (const dd in kd.meshMap) {
              const Jd = kd.meshMap[dd];
              Jd && (Jd._internalMeshDataInfo._source = null, kd.meshMap[dd] = void 0)
            }
          kd._source && kd._source._internalMeshDataInfo.meshMap && (kd._source._internalMeshDataInfo.meshMap[this.uniqueId] = void 0)
        } else {
          const dd = this.Wm().meshes;
          for (const Jd of dd) {
            const dd = Jd;
            dd._internalMeshDataInfo && dd._internalMeshDataInfo._source && dd._internalMeshDataInfo._source === this && (dd._internalMeshDataInfo._source = null)
          }
        }
        kd._source = null, this._disposeInstanceSpecificData(), this._disposeThinInstanceSpecificData(), this._internalMeshDataInfo._checkReadinessObserver && this._scene.onBeforeRenderObservable.remove(this._internalMeshDataInfo._checkReadinessObserver), super.dispose(dd, Jd)
      }
      _disposeInstanceSpecificData() {}
      _disposeThinInstanceSpecificData() {}
      _invalidateInstanceVertexArrayObject() {}
      applyDisplacementMap(dd, Jd, kd, pd, Nd, Wd) {
        let Pd = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          Zd = arguments.length > 7 ? arguments[7] : void 0;
        const gd = this.Wm();
        return (0, Gd.r)(dd, (dd => {
          const Zd = dd.width,
            gd = dd.height,
            Cd = this.eL().createCanvas(Zd, gd).getContext("2d");
          Cd.drawImage(dd, 0, 0);
          const Kd = Cd.getImageData(0, 0, Zd, gd).data;
          this.applyDisplacementMapFromBuffer(Kd, Zd, gd, Jd, kd, Nd, Wd, Pd), pd && pd(this)
        }), Zd || (() => {}), gd.offlineProvider), this
      }
      applyDisplacementMapFromBuffer(dd, Jd, kd, pd, Nd, Wd, Pd) {
        let Zd = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
        if (!this.isVerticesDataPresent(Fd.j.PositionKind) || !this.isVerticesDataPresent(Fd.j.NormalKind) || !this.isVerticesDataPresent(Fd.j.UVKind)) return yd.c.Warn("Cannot call applyDisplacementMap: Given mesh is not complete. Position, Normal or UV are missing"), this;
        const gd = this.getVerticesData(Fd.j.PositionKind, !0, !0),
          Cd = this.getVerticesData(Fd.j.NormalKind),
          Kd = this.getVerticesData(Fd.j.UVKind);
        let od = sd.n.Zero();
        const ld = sd.n.Zero(),
          Qd = sd.k.Zero();
        Wd = Wd || sd.k.Zero(), Pd = Pd || new sd.k(1, 1);
        for (let Ld = 0; Ld < gd.length; Ld += 3) {
          sd.n.FromArrayToRef(gd, Ld, od), sd.n.FromArrayToRef(Cd, Ld, ld), sd.k.FromArrayToRef(Kd, Ld / 3 * 2, Qd);
          const Zd = 4 * ((Math.abs(Qd.x * Pd.x + Wd.x % 1) * (Jd - 1) % Jd | 0) + (Math.abs(Qd.y * Pd.y + Wd.y % 1) * (kd - 1) % kd | 0) * Jd),
            Od = .3 * (dd[Zd] / 255) + .59 * (dd[Zd + 1] / 255) + .11 * (dd[Zd + 2] / 255);
          ld.normalize(), ld.scaleInPlace(pd + (Nd - pd) * Od), od = od.add(ld), od.toArray(gd, Ld)
        }
        return Yd.c.ComputeNormals(gd, this.ipd(), Cd), Zd ? (this.setVerticesData(Fd.j.PositionKind, gd), this.setVerticesData(Fd.j.NormalKind, Cd), this.setVerticesData(Fd.j.UVKind, Kd)) : (this.updateVerticesData(Fd.j.PositionKind, gd), this.updateVerticesData(Fd.j.NormalKind, Cd)), this
      }
      _getFlattenedNormals(dd, Jd) {
        const kd = new Float32Array(3 * dd.length);
        let pd = 0;
        const Nd = this.sideOrientation === (this._scene.useRightHandedSystem ? 1 : 0);
        for (let Wd = 0; Wd < dd.length; Wd += 3) {
          const Pd = sd.n.FromArray(Jd, 3 * dd[Wd]),
            Zd = sd.n.FromArray(Jd, 3 * dd[Wd + 1]),
            gd = sd.n.FromArray(Jd, 3 * dd[Wd + 2]),
            Cd = Pd.subtract(Zd),
            Kd = gd.subtract(Zd),
            od = sd.n.Normalize(sd.n.Cross(Cd, Kd));
          Nd && od.scaleInPlace(-1);
          for (let dd = 0; dd < 3; dd++) kd[pd++] = od.x, kd[pd++] = od.y, kd[pd++] = od.z
        }
        return kd
      }
      _convertToUnIndexedMesh() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const Jd = this.getVerticesDataKinds().filter((dd => !this.getVertexBuffer(dd)?.getIsInstanced())),
          kd = this.ipd(!1, !0),
          pd = {},
          Nd = (dd, Jd) => {
            const pd = new Float32Array(kd.length * Jd);
            let Nd = 0;
            for (let Wd = 0; Wd < kd.length; Wd++)
              for (let Pd = 0; Pd < Jd; Pd++) pd[Nd++] = dd[kd[Wd] * Jd + Pd];
            return pd
          },
          Wd = this.pU(),
          Pd = this.geometry ? this.rG.slice(0) : [];
        for (const Zd of Jd) pd[Zd] = this.getVerticesData(Zd);
        for (const Zd of Jd) {
          const Jd = this.getVertexBuffer(Zd),
            Wd = Jd.getSize();
          if (dd && Zd === Fd.j.NormalKind) {
            const dd = this._getFlattenedNormals(kd, pd[Fd.j.PositionKind]);
            this.setVerticesData(Fd.j.NormalKind, dd, Jd.isUpdatable(), Wd)
          } else this.setVerticesData(Zd, Nd(pd[Zd], Wd), Jd.isUpdatable(), Wd)
        }
        if (this.morphTargetManager) {
          for (let Jd = 0; Jd < this.morphTargetManager.numTargets; Jd++) {
            const pd = this.morphTargetManager.getTarget(Jd),
              Wd = pd.getPositions();
            pd.VPd(Nd(Wd, 3));
            const Pd = pd.getNormals();
            Pd && pd.setNormals(dd ? this._getFlattenedNormals(kd, Wd) : Nd(Pd, 3));
            const Zd = pd.getTangents();
            Zd && pd.setTangents(Nd(Zd, 3));
            const gd = pd.getUVs();
            gd && pd.setUVs(Nd(gd, 2));
            const Cd = pd.getColors();
            Cd && pd.setColors(Nd(Cd, 4))
          }
          this.morphTargetManager.synchronize()
        }
        for (let Zd = 0; Zd < kd.length; Zd++) kd[Zd] = Zd;
        this.setIndices(kd), this._unIndexed = !0, this.releaseSubMeshes();
        for (const Zd of Pd) {
          const dd = Zd.pU();
          Sd.c.AddToMesh(Zd.materialIndex, Zd.indexStart, Zd.indexCount, Zd.indexStart, Zd.indexCount, this).setBoundingInfo(dd)
        }
        return this.setBoundingInfo(Wd), this.synchronizeInstances(), this
      }
      convertToFlatShadedMesh() {
        return this._convertToUnIndexedMesh(!0)
      }
      convertToUnIndexedMesh() {
        return this._convertToUnIndexedMesh()
      }
      flipFaces() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const Jd = Yd.c.ExtractFromMesh(this);
        let kd;
        if (dd && this.isVerticesDataPresent(Fd.j.NormalKind) && Jd.normals) {
          for (kd = 0; kd < Jd.normals.length; kd++) Jd.normals[kd] *= -1;
          this.setVerticesData(Fd.j.NormalKind, Jd.normals, this.isVertexBufferUpdatable(Fd.j.NormalKind))
        }
        if (Jd.indices) {
          let dd;
          for (kd = 0; kd < Jd.indices.length; kd += 3) dd = Jd.indices[kd + 1], Jd.indices[kd + 1] = Jd.indices[kd + 2], Jd.indices[kd + 2] = dd;
          this.setIndices(Jd.indices, null, this.isVertexBufferUpdatable(Fd.j.PositionKind), !0)
        }
        return this
      }
      increaseVertices() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        const Jd = Yd.c.ExtractFromMesh(this),
          kd = Jd.indices && !Array.isArray(Jd.indices) && Array.from ? Array.from(Jd.indices) : Jd.indices,
          pd = Jd.positions && !Array.isArray(Jd.positions) && Array.from ? Array.from(Jd.positions) : Jd.positions,
          Nd = Jd.uvs && !Array.isArray(Jd.uvs) && Array.from ? Array.from(Jd.uvs) : Jd.uvs,
          Wd = Jd.normals && !Array.isArray(Jd.normals) && Array.from ? Array.from(Jd.normals) : Jd.normals;
        if (kd && pd) {
          Jd.indices = kd, Jd.positions = pd, Nd && (Jd.uvs = Nd), Wd && (Jd.normals = Wd);
          const Pd = dd + 1,
            Zd = [];
          for (let dd = 0; dd < Pd + 1; dd++) Zd[dd] = [];
          let gd, Cd;
          const Kd = new sd.n(0, 0, 0),
            od = new sd.n(0, 0, 0),
            ld = new sd.k(0, 0),
            Qd = [],
            Ld = [],
            Od = [];
          let ed, Rd, Id, Gd = pd.length;
          Nd && (Rd = Nd.length), Wd && (Id = Wd.length);
          for (let dd = 0; dd < kd.length; dd += 3) {
            Ld[0] = kd[dd], Ld[1] = kd[dd + 1], Ld[2] = kd[dd + 2];
            for (let dd = 0; dd < 3; dd++)
              if (gd = Ld[dd], Cd = Ld[(dd + 1) % 3], void 0 === Od[gd] && void 0 === Od[Cd] ? (Od[gd] = [], Od[Cd] = []) : (void 0 === Od[gd] && (Od[gd] = []), void 0 === Od[Cd] && (Od[Cd] = [])), void 0 === Od[gd][Cd] && void 0 === Od[Cd][gd]) {
                Od[gd][Cd] = [], Kd.x = (pd[3 * Cd] - pd[3 * gd]) / Pd, Kd.y = (pd[3 * Cd + 1] - pd[3 * gd + 1]) / Pd, Kd.z = (pd[3 * Cd + 2] - pd[3 * gd + 2]) / Pd, Wd && (od.x = (Wd[3 * Cd] - Wd[3 * gd]) / Pd, od.y = (Wd[3 * Cd + 1] - Wd[3 * gd + 1]) / Pd, od.z = (Wd[3 * Cd + 2] - Wd[3 * gd + 2]) / Pd), Nd && (ld.x = (Nd[2 * Cd] - Nd[2 * gd]) / Pd, ld.y = (Nd[2 * Cd + 1] - Nd[2 * gd + 1]) / Pd), Od[gd][Cd].push(gd);
                for (let dd = 1; dd < Pd; dd++) Od[gd][Cd].push(pd.length / 3), pd[Gd++] = pd[3 * gd] + dd * Kd.x, pd[Gd++] = pd[3 * gd + 1] + dd * Kd.y, pd[Gd++] = pd[3 * gd + 2] + dd * Kd.z, Wd && (Wd[Id++] = Wd[3 * gd] + dd * od.x, Wd[Id++] = Wd[3 * gd + 1] + dd * od.y, Wd[Id++] = Wd[3 * gd + 2] + dd * od.z), Nd && (Nd[Rd++] = Nd[2 * gd] + dd * ld.x, Nd[Rd++] = Nd[2 * gd + 1] + dd * ld.y);
                Od[gd][Cd].push(Cd), Od[Cd][gd] = [], ed = Od[gd][Cd].length;
                for (let dd = 0; dd < ed; dd++) Od[Cd][gd][dd] = Od[gd][Cd][ed - 1 - dd]
              } Zd[0][0] = kd[dd], Zd[1][0] = Od[kd[dd]][kd[dd + 1]][1], Zd[1][1] = Od[kd[dd]][kd[dd + 2]][1];
            for (let Jd = 2; Jd < Pd; Jd++) {
              Zd[Jd][0] = Od[kd[dd]][kd[dd + 1]][Jd], Zd[Jd][Jd] = Od[kd[dd]][kd[dd + 2]][Jd], Kd.x = (pd[3 * Zd[Jd][Jd]] - pd[3 * Zd[Jd][0]]) / Jd, Kd.y = (pd[3 * Zd[Jd][Jd] + 1] - pd[3 * Zd[Jd][0] + 1]) / Jd, Kd.z = (pd[3 * Zd[Jd][Jd] + 2] - pd[3 * Zd[Jd][0] + 2]) / Jd, Wd && (od.x = (Wd[3 * Zd[Jd][Jd]] - Wd[3 * Zd[Jd][0]]) / Jd, od.y = (Wd[3 * Zd[Jd][Jd] + 1] - Wd[3 * Zd[Jd][0] + 1]) / Jd, od.z = (Wd[3 * Zd[Jd][Jd] + 2] - Wd[3 * Zd[Jd][0] + 2]) / Jd), Nd && (ld.x = (Nd[2 * Zd[Jd][Jd]] - Nd[2 * Zd[Jd][0]]) / Jd, ld.y = (Nd[2 * Zd[Jd][Jd] + 1] - Nd[2 * Zd[Jd][0] + 1]) / Jd);
              for (let dd = 1; dd < Jd; dd++) Zd[Jd][dd] = pd.length / 3, pd[Gd++] = pd[3 * Zd[Jd][0]] + dd * Kd.x, pd[Gd++] = pd[3 * Zd[Jd][0] + 1] + dd * Kd.y, pd[Gd++] = pd[3 * Zd[Jd][0] + 2] + dd * Kd.z, Wd && (Wd[Id++] = Wd[3 * Zd[Jd][0]] + dd * od.x, Wd[Id++] = Wd[3 * Zd[Jd][0] + 1] + dd * od.y, Wd[Id++] = Wd[3 * Zd[Jd][0] + 2] + dd * od.z), Nd && (Nd[Rd++] = Nd[2 * Zd[Jd][0]] + dd * ld.x, Nd[Rd++] = Nd[2 * Zd[Jd][0] + 1] + dd * ld.y)
            }
            Zd[Pd] = Od[kd[dd + 1]][kd[dd + 2]], Qd.push(Zd[0][0], Zd[1][0], Zd[1][1]);
            for (let dd = 1; dd < Pd; dd++) {
              let Jd;
              for (Jd = 0; Jd < dd; Jd++) Qd.push(Zd[dd][Jd], Zd[dd + 1][Jd], Zd[dd + 1][Jd + 1]), Qd.push(Zd[dd][Jd], Zd[dd + 1][Jd + 1], Zd[dd][Jd + 1]);
              Qd.push(Zd[dd][Jd], Zd[dd + 1][Jd], Zd[dd + 1][Jd + 1])
            }
          }
          Jd.indices = Qd, Jd.applyToMesh(this, this.isVertexBufferUpdatable(Fd.j.PositionKind))
        } else yd.c.Warn("Couldn't increase number of vertices : VertexData must contain at least indices and positions")
      }
      forceSharedVertices() {
        const dd = Yd.c.ExtractFromMesh(this),
          Jd = dd.uvs,
          kd = dd.indices,
          pd = dd.positions,
          Nd = dd.colors,
          Wd = dd.matricesIndices,
          Pd = dd.matricesWeights,
          Zd = dd.matricesIndicesExtra,
          gd = dd.matricesWeightsExtra;
        if (void 0 === kd || void 0 === pd || null === kd || null === pd) yd.c.Warn("VertexData contains empty entries");
        else {
          const Cd = [],
            Kd = [],
            od = [],
            ld = [],
            Qd = [],
            Ld = [],
            Od = [],
            ed = [];
          let Rd, Id = 0;
          const Gd = {};
          let vd, xd;
          for (let dd = 0; dd < kd.length; dd += 3) {
            xd = [kd[dd], kd[dd + 1], kd[dd + 2]], Rd = [];
            for (let dd = 0; dd < 3; dd++) {
              Rd[dd] = "";
              for (let Jd = 0; Jd < 3; Jd++) Math.abs(pd[3 * xd[dd] + Jd]) < 1e-8 && (pd[3 * xd[dd] + Jd] = 0), Rd[dd] += pd[3 * xd[dd] + Jd] + "|"
            }
            if (Rd[0] != Rd[1] && Rd[0] != Rd[2] && Rd[1] != Rd[2])
              for (let dd = 0; dd < 3; dd++) {
                if (vd = Gd[Rd[dd]], void 0 === vd) {
                  Gd[Rd[dd]] = Id, vd = Id++;
                  for (let Jd = 0; Jd < 3; Jd++) Cd.push(pd[3 * xd[dd] + Jd]);
                  if (null !== Nd && void 0 !== Nd)
                    for (let Jd = 0; Jd < 4; Jd++) ld.push(Nd[4 * xd[dd] + Jd]);
                  if (null !== Jd && void 0 !== Jd)
                    for (let kd = 0; kd < 2; kd++) od.push(Jd[2 * xd[dd] + kd]);
                  if (null !== Wd && void 0 !== Wd)
                    for (let Jd = 0; Jd < 4; Jd++) Qd.push(Wd[4 * xd[dd] + Jd]);
                  if (null !== Pd && void 0 !== Pd)
                    for (let Jd = 0; Jd < 4; Jd++) Ld.push(Pd[4 * xd[dd] + Jd]);
                  if (null !== Zd && void 0 !== Zd)
                    for (let Jd = 0; Jd < 4; Jd++) Od.push(Zd[4 * xd[dd] + Jd]);
                  if (null !== gd && void 0 !== gd)
                    for (let Jd = 0; Jd < 4; Jd++) ed.push(gd[4 * xd[dd] + Jd])
                }
                Kd.push(vd)
              }
          }
          const qd = [];
          Yd.c.ComputeNormals(Cd, Kd, qd), dd.positions = Cd, dd.indices = Kd, dd.normals = qd, null !== Jd && void 0 !== Jd && (dd.uvs = od), null !== Nd && void 0 !== Nd && (dd.colors = ld), null !== Wd && void 0 !== Wd && (dd.matricesIndices = Qd), null !== Pd && void 0 !== Pd && (dd.matricesWeights = Ld), null !== Zd && void 0 !== Zd && (dd.matricesIndicesExtra = Od), null !== Pd && void 0 !== Pd && (dd.matricesWeightsExtra = ed), dd.applyToMesh(this, this.isVertexBufferUpdatable(Fd.j.PositionKind))
        }
      }
      static _instancedMeshFactory(dd, Jd) {
        throw (0, Td.n)("InstancedMesh")
      }
      static _PhysicsImpostorParser(dd, Jd, kd) {
        throw (0, Td.n)("PhysicsImpostor")
      }
      createInstance(dd) {
        const Jd = wd._instancedMeshFactory(dd, this);
        return Jd.parent = this.parent, Jd
      }
      synchronizeInstances() {
        for (let dd = 0; dd < this.instances.length; dd++) {
          this.instances[dd]._syncSubMeshes()
        }
        return this
      }
      optimizeIndices(dd) {
        const Jd = this.ipd(),
          kd = this.getVerticesData(Fd.j.PositionKind);
        if (!kd || !Jd) return this;
        const pd = [];
        for (let Wd = 0; Wd < kd.length; Wd += 3) pd.push(sd.n.FromArray(kd, Wd));
        const Nd = [];
        return Id.e.SyncAsyncForLoop(pd.length, 40, (dd => {
          const Jd = pd.length - 1 - dd,
            kd = pd[Jd];
          for (let Wd = 0; Wd < Jd; ++Wd) {
            const dd = pd[Wd];
            if (kd.equals(dd)) {
              Nd[Jd] = Wd;
              break
            }
          }
        }), (() => {
          for (let dd = 0; dd < Jd.length; ++dd) Jd[dd] = Nd[Jd[dd]] || Jd[dd];
          const kd = this.rG.slice(0);
          this.setIndices(Jd), this.rG = kd, dd && dd(this)
        })), this
      }
      serialize() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        dd.name = this.name, dd.id = this.id, dd.uniqueId = this.uniqueId, dd.type = this.getClassName(), xd.c && xd.c.HasTags(this) && (dd.tags = xd.c.GetTags(this)), dd.position = this.position.spd(), this.rotationQuaternion ? dd.rotationQuaternion = this.rotationQuaternion.spd() : this.rotation && (dd.rotation = this.rotation.spd()), dd.fp = this.fp.spd(), this._postMultiplyPivotMatrix ? dd.pivotMatrix = this.getPivotMatrix().spd() : dd.localMatrix = this.getPivotMatrix().spd(), dd.isEnabled = this.isEnabled(!1), dd.isVisible = this.isVisible, dd.infiniteDistance = this.infiniteDistance, dd.pickable = this.iO, dd.receiveShadows = this.receiveShadows, dd.billboardMode = this.billboardMode, dd.visibility = this.visibility, dd.RL = this.RL, dd.checkCollisions = this.checkCollisions, dd.ellipsoid = this.ellipsoid.spd(), dd.ellipsoidOffset = this.ellipsoidOffset.spd(), dd.xL = this.xL, dd.isBlocker = this.isBlocker, dd.sideOrientation = this.sideOrientation, this._isWorldMatrixFrozen && (dd.Im = !0), this.parent && this.parent._serializeAsParent(dd), dd.isUnIndexed = this.isUnIndexed;
        const Jd = this._geometry;
        if (Jd && this.rG) {
          dd.geometryUniqueId = Jd.uniqueId, dd.geometryId = Jd.id, dd.rG = [];
          for (let Jd = 0; Jd < this.rG.length; Jd++) {
            const kd = this.rG[Jd];
            dd.rG.push({
              materialIndex: kd.materialIndex,
              verticesStart: kd.verticesStart,
              verticesCount: kd.verticesCount,
              indexStart: kd.indexStart,
              indexCount: kd.indexCount
            })
          }
        }
        if (this.material ? this.material.doNotSerialize || (dd.materialUniqueId = this.material.uniqueId, dd.materialId = this.material.id) : (this.material = null, dd.materialUniqueId = this._scene.defaultMaterial.uniqueId, dd.materialId = this._scene.defaultMaterial.id), this.morphTargetManager && (dd.morphTargetManagerId = this.morphTargetManager.uniqueId), this.skeleton && (dd.skeletonId = this.skeleton.id, dd.skeletonUniqueId = this.skeleton.uniqueId, dd.numBoneInfluencers = this.numBoneInfluencers), this.Wm()._getComponent(Ed.b.NAME_PHYSICSENGINE)) {
          const Jd = this.getPhysicsImpostor?.();
          Jd && (dd.physicsMass = Jd.getParam("vP"), dd.physicsFriction = Jd.getParam("friction"), dd.physicsRestitution = Jd.getParam("vP"), dd.physicsImpostor = Jd.type)
        }
        this.metadata && (dd.metadata = this.metadata), 0 !== this.meshBlendingTag && (dd.meshBlendingTag = this.meshBlendingTag), dd.instances = [];
        for (let kd = 0; kd < this.instances.length; kd++) {
          const Jd = this.instances[kd];
          if (Jd.doNotSerialize) continue;
          const pd = {
            name: Jd.name,
            id: Jd.id,
            isEnabled: Jd.isEnabled(!1),
            isVisible: Jd.isVisible,
            iO: Jd.iO,
            checkCollisions: Jd.checkCollisions,
            position: Jd.position.spd(),
            fp: Jd.fp.spd()
          };
          if (Jd.parent && Jd.parent._serializeAsParent(pd), Jd.rotationQuaternion ? pd.rotationQuaternion = Jd.rotationQuaternion.spd() : Jd.rotation && (pd.rotation = Jd.rotation.spd()), this.Wm()._getComponent(Ed.b.NAME_PHYSICSENGINE)) {
            const dd = Jd.getPhysicsImpostor?.();
            dd && (pd.physicsMass = dd.getParam("vP"), pd.physicsFriction = dd.getParam("friction"), pd.physicsRestitution = dd.getParam("vP"), pd.physicsImpostor = dd.type)
          }
          Jd.metadata && (pd.metadata = Jd.metadata), Jd.actionManager && (pd.actions = Jd.actionManager.serialize(Jd.name)), dd.instances.push(pd), Ud.c.AppendSerializedAnimations(Jd, pd), pd.UO = Jd.serializeAnimationRanges()
        }
        if (this._thinInstanceDataStorage.instancesCount && this._thinInstanceDataStorage.matrixData && (dd.thinInstances = {
            instancesCount: this._thinInstanceDataStorage.instancesCount,
            matrixData: Array.from(this._thinInstanceDataStorage.matrixData),
            matrixBufferSize: this._thinInstanceDataStorage.matrixBufferSize,
            enablePicking: this.hJd
          }, this._userThinInstanceBuffersStorage)) {
          const Jd = {
            data: {},
            sizes: {},
            strides: {}
          };
          for (const dd in this._userThinInstanceBuffersStorage.data) Jd.data[dd] = Array.from(this._userThinInstanceBuffersStorage.data[dd]), Jd.sizes[dd] = this._userThinInstanceBuffersStorage.sizes[dd], Jd.strides[dd] = this._userThinInstanceBuffersStorage.strides[dd];
          dd.thinInstances.userThinInstance = Jd
        }
        return Ud.c.AppendSerializedAnimations(this, dd), dd.UO = this.serializeAnimationRanges(), dd.layerMask = this.layerMask, dd.alphaIndex = this.alphaIndex, dd.hasVertexAlpha = this.hasVertexAlpha, dd.overlayAlpha = this.overlayAlpha, dd.overlayColor = this.overlayColor.spd(), dd.renderOverlay = this.renderOverlay, dd.applyFog = this.applyFog, this.actionManager && (dd.actions = this.actionManager.serialize(this.name)), dd
      }
      _syncGeometryWithMorphTargetManager() {
        if (!this.geometry) return;
        this._markSubMeshesAsAttributesDirty();
        const dd = this._internalAbstractMeshDataInfo._morphTargetManager;
        if (dd && dd.vertexCount) {
          if (dd.vertexCount !== this.getTotalVertices()) return yd.c.Error("Mesh is incompatible with morph targets. Targets and mesh must all have the same vertices count."), void(this.morphTargetManager = null);
          if (dd.isUsingTextureForTargets) return;
          for (let Jd = 0; Jd < dd.numInfluencers; Jd++) {
            const kd = dd.getActiveTarget(Jd),
              pd = kd.getPositions();
            if (!pd) return void yd.c.Error("Invalid morph target. Target must have positions.");
            this.geometry.setVerticesData(Fd.j.PositionKind + Jd, pd, !1, 3);
            const Nd = kd.getNormals();
            Nd && this.geometry.setVerticesData(Fd.j.NormalKind + Jd, Nd, !1, 3);
            const Wd = kd.getTangents();
            Wd && this.geometry.setVerticesData(Fd.j.TangentKind + Jd, Wd, !1, 3);
            const Pd = kd.getUVs();
            Pd && this.geometry.setVerticesData(Fd.j.UVKind + "_" + Jd, Pd, !1, 2);
            const Zd = kd.getUV2s();
            Zd && this.geometry.setVerticesData(Fd.j.UV2Kind + "_" + Jd, Zd, !1, 2);
            const gd = kd.getColors();
            gd && this.geometry.setVerticesData(Fd.j.ColorKind + Jd, gd, !1, 4)
          }
        } else {
          let dd = 0;
          for (; this.geometry.isVerticesDataPresent(Fd.j.PositionKind + dd);) this.geometry.removeVerticesData(Fd.j.PositionKind + dd), this.geometry.isVerticesDataPresent(Fd.j.NormalKind + dd) && this.geometry.removeVerticesData(Fd.j.NormalKind + dd), this.geometry.isVerticesDataPresent(Fd.j.TangentKind + dd) && this.geometry.removeVerticesData(Fd.j.TangentKind + dd), this.geometry.isVerticesDataPresent(Fd.j.UVKind + "_" + dd) && this.geometry.removeVerticesData(Fd.j.UVKind + "_" + dd), this.geometry.isVerticesDataPresent(Fd.j.UV2Kind + "_" + dd) && this.geometry.removeVerticesData(Fd.j.UV2Kind + "_" + dd), this.geometry.isVerticesDataPresent(Fd.j.ColorKind + dd) && this.geometry.removeVerticesData(Fd.j.ColorKind + dd), dd++
        }
      }
      static Parse(dd, Jd, kd) {
        let pd, Nd = !1;
        if (dd.type && "LinesMesh" === dd.type ? pd = wd._LinesMeshParser(dd, Jd) : dd.type && "GroundMesh" === dd.type ? pd = wd._GroundMeshParser(dd, Jd) : dd.type && "GoldbergMesh" === dd.type ? pd = wd._GoldbergMeshParser(dd, Jd) : dd.type && "GreasedLineMesh" === dd.type ? pd = wd._GreasedLineMeshParser(dd, Jd) : dd.type && "TrailMesh" === dd.type ? pd = wd._TrailMeshParser(dd, Jd) : dd.type && "GaussianSplattingMesh" === dd.type ? (pd = dd._isCompound ? wd._GaussianSplattingCompoundMeshParser(dd, Jd) : wd._GaussianSplattingMeshParser(dd, Jd), Nd = !0) : dd.type && "GaussianSplattingPartProxyMesh" === dd.type ? (pd = wd._GaussianSplattingPartProxyMeshParser(dd, Jd), Nd = !0) : pd = new wd(dd.name, Jd), pd.id = dd.id, pd._waitingParsedUniqueId = dd.uniqueId, xd.c && xd.c.AddTagsTo(pd, dd.tags), pd.position = sd.n.FromArray(dd.position), void 0 !== dd.metadata && (pd.metadata = dd.metadata), void 0 !== dd.meshBlendingTag && (pd.meshBlendingTag = dd.meshBlendingTag), dd.rotationQuaternion ? pd.rotationQuaternion = sd.d.FromArray(dd.rotationQuaternion) : dd.rotation && (pd.rotation = sd.n.FromArray(dd.rotation)), pd.fp = sd.n.FromArray(dd.fp), dd.localMatrix ? pd.setPreTransformMatrix(sd.b.FromArray(dd.localMatrix)) : dd.pivotMatrix && pd.setPivotMatrix(sd.b.FromArray(dd.pivotMatrix)), pd.XM(dd.isEnabled), pd.isVisible = dd.isVisible, pd.infiniteDistance = dd.infiniteDistance, pd.RL = !!dd.RL, pd.showBoundingBox = dd.showBoundingBox, pd.showSubMeshesBoundingBox = dd.showSubMeshesBoundingBox, void 0 !== dd.applyFog && (pd.applyFog = dd.applyFog), void 0 !== dd.pickable && (pd.iO = dd.pickable), void 0 !== dd.alphaIndex && (pd.alphaIndex = dd.alphaIndex), pd.receiveShadows = dd.receiveShadows, void 0 !== dd.billboardMode && (pd.billboardMode = dd.billboardMode), void 0 !== dd.visibility && (pd.visibility = dd.visibility), pd.checkCollisions = dd.checkCollisions, pd.xL = !!dd.xL, dd.ellipsoid && (pd.ellipsoid = sd.n.FromArray(dd.ellipsoid)), dd.ellipsoidOffset && (pd.ellipsoidOffset = sd.n.FromArray(dd.ellipsoidOffset)), null != dd.overrideMaterialSideOrientation && (pd.sideOrientation = dd.overrideMaterialSideOrientation), void 0 !== dd.sideOrientation && (pd.sideOrientation = dd.sideOrientation), void 0 !== dd.isBlocker && (pd.isBlocker = dd.isBlocker), pd._shouldGenerateFlatShading = dd.useFlatShading, dd.Im && (pd._waitingData.Im = dd.Im), void 0 !== dd.parentId && (pd._waitingParentId = dd.parentId), void 0 !== dd.parentInstanceIndex && (pd._waitingParentInstanceIndex = dd.parentInstanceIndex), void 0 !== dd.actions && (pd._waitingData.actions = dd.actions), void 0 !== dd.overlayAlpha && (pd.overlayAlpha = dd.overlayAlpha), void 0 !== dd.overlayColor && (pd.overlayColor = ad.c.FromArray(dd.overlayColor)), void 0 !== dd.renderOverlay && (pd.renderOverlay = dd.renderOverlay), pd.isUnIndexed = !!dd.isUnIndexed, pd.hasVertexAlpha = dd.hasVertexAlpha, dd.delayLoadingFile ? (pd.delayLoadState = 4, pd.delayLoadingFile = kd + dd.delayLoadingFile, pd.buildBoundingInfo(sd.n.FromArray(dd.boundingBoxMinimum), sd.n.FromArray(dd.boundingBoxMaximum)), dd._binaryInfo && (pd._binaryInfo = dd._binaryInfo), pd._delayInfo = [], dd.hasUVs && pd._delayInfo.push(Fd.j.UVKind), dd.hasUVs2 && pd._delayInfo.push(Fd.j.UV2Kind), dd.hasUVs3 && pd._delayInfo.push(Fd.j.UV3Kind), dd.hasUVs4 && pd._delayInfo.push(Fd.j.UV4Kind), dd.hasUVs5 && pd._delayInfo.push(Fd.j.UV5Kind), dd.hasUVs6 && pd._delayInfo.push(Fd.j.UV6Kind), dd.hasColors && pd._delayInfo.push(Fd.j.ColorKind), dd.hasMatricesIndices && pd._delayInfo.push(Fd.j.MatricesIndicesKind), dd.hasMatricesWeights && pd._delayInfo.push(Fd.j.MatricesWeightsKind), pd._delayLoadingFunction = md.e._ImportGeometry, nd.d.ForceFullSceneLoadingForIncremental && pd._checkDelayState()) : Nd || md.e._ImportGeometry(dd, pd), dd.materialUniqueId ? pd._waitingMaterialId = dd.materialUniqueId : dd.materialId && (pd._waitingMaterialId = dd.materialId), dd.morphTargetManagerId > -1 && (pd._waitingMorphTargetManagerId = dd.morphTargetManagerId), void 0 !== dd.skeletonId && null !== dd.skeletonId && (pd.skeleton = Jd.getLastSkeletonById(dd.skeletonId), pd._waitingSkeletonId = dd.skeletonId, dd.numBoneInfluencers && (pd.numBoneInfluencers = dd.numBoneInfluencers)), void 0 !== dd.skeletonUniqueId && null !== dd.skeletonUniqueId && (pd._waitingSkeletonUniqueId = dd.skeletonUniqueId), dd.animations) {
          for (let Jd = 0; Jd < dd.animations.length; Jd++) {
            const kd = dd.animations[Jd],
              Nd = (0, Dd.e)("BABYLON.Animation");
            Nd && pd.animations.push(Nd.Parse(kd))
          }
          Md.c.ParseAnimationRanges(pd, dd, Jd)
        }
        if (dd.autoAnimate && Jd.beginAnimation(pd, dd.autoAnimateFrom, dd.autoAnimateTo, dd.autoAnimateLoop, dd.autoAnimateSpeed || 1), dd.layerMask && !isNaN(dd.layerMask) ? pd.layerMask = Math.abs(parseInt(dd.layerMask)) : pd.layerMask = 268435455, dd.physicsImpostor && (pd.physicsImpostor = wd._PhysicsImpostorParser(Jd, pd, dd)), dd.lodMeshIds && (pd._waitingData.lods = {
            ids: dd.lodMeshIds,
            distances: dd.lodDistances ? dd.lodDistances : null,
            coverages: dd.lodCoverages ? dd.lodCoverages : null
          }), dd.instances)
          for (let Wd = 0; Wd < dd.instances.length; Wd++) {
            const kd = dd.instances[Wd],
              Nd = pd.createInstance(kd.name);
            if (kd.id && (Nd.id = kd.id), xd.c && (kd.tags ? xd.c.AddTagsTo(Nd, kd.tags) : xd.c.AddTagsTo(Nd, dd.tags)), Nd.position = sd.n.FromArray(kd.position), void 0 !== kd.metadata && (Nd.metadata = kd.metadata), void 0 !== kd.parentId && (Nd._waitingParentId = kd.parentId), void 0 !== kd.parentInstanceIndex && (Nd._waitingParentInstanceIndex = kd.parentInstanceIndex), void 0 !== kd.isEnabled && null !== kd.isEnabled && Nd.XM(kd.isEnabled), void 0 !== kd.isVisible && null !== kd.isVisible && (Nd.isVisible = kd.isVisible), void 0 !== kd.iO && null !== kd.iO && (Nd.iO = kd.iO), kd.rotationQuaternion ? Nd.rotationQuaternion = sd.d.FromArray(kd.rotationQuaternion) : kd.rotation && (Nd.rotation = sd.n.FromArray(kd.rotation)), Nd.fp = sd.n.FromArray(kd.fp), void 0 != kd.checkCollisions && null != kd.checkCollisions && (Nd.checkCollisions = kd.checkCollisions), void 0 != kd.pickable && null != kd.pickable && (Nd.iO = kd.pickable), void 0 != kd.showBoundingBox && null != kd.showBoundingBox && (Nd.showBoundingBox = kd.showBoundingBox), void 0 != kd.showSubMeshesBoundingBox && null != kd.showSubMeshesBoundingBox && (Nd.showSubMeshesBoundingBox = kd.showSubMeshesBoundingBox), void 0 != kd.alphaIndex && null != kd.showSubMeshesBoundingBox && (Nd.alphaIndex = kd.alphaIndex), kd.physicsImpostor && (Nd.physicsImpostor = wd._PhysicsImpostorParser(Jd, Nd, kd)), void 0 !== kd.actions && (Nd._waitingData.actions = kd.actions), kd.animations) {
              for (let dd = 0; dd < kd.animations.length; dd++) {
                const Jd = kd.animations[dd],
                  pd = (0, Dd.e)("BABYLON.Animation");
                pd && Nd.animations.push(pd.Parse(Jd))
              }
              Md.c.ParseAnimationRanges(Nd, kd, Jd), kd.autoAnimate && Jd.beginAnimation(Nd, kd.autoAnimateFrom, kd.autoAnimateTo, kd.autoAnimateLoop, kd.autoAnimateSpeed || 1)
            }
          }
        if (dd.thinInstances) {
          const Jd = dd.thinInstances;
          if (pd.hJd = !!Jd.enablePicking, Jd.matrixData ? (pd.i6("matrix", new Float32Array(Jd.matrixData), 16, !1), pd._thinInstanceDataStorage.matrixBufferSize = Jd.matrixBufferSize, pd._thinInstanceDataStorage.instancesCount = Jd.instancesCount) : pd._thinInstanceDataStorage.matrixBufferSize = Jd.matrixBufferSize, dd.thinInstances.userThinInstance) {
            const Jd = dd.thinInstances.userThinInstance;
            for (const dd in Jd.data) pd.i6(dd, new Float32Array(Jd.data[dd]), Jd.strides[dd], !1), pd._userThinInstanceBuffersStorage.sizes[dd] = Jd.sizes[dd]
          }
        }
        return pd
      }
      setPositionsForCPUSkinning() {
        const dd = this._internalMeshDataInfo;
        if (!dd._sourcePositions) {
          const Jd = this.getVerticesData(Fd.j.PositionKind);
          if (!Jd) return dd._sourcePositions;
          dd._sourcePositions = new Float32Array(Jd), this.isVertexBufferUpdatable(Fd.j.PositionKind) || this.setVerticesData(Fd.j.PositionKind, Jd, !0)
        }
        return dd._sourcePositions
      }
      setNormalsForCPUSkinning() {
        const dd = this._internalMeshDataInfo;
        if (!dd._sourceNormals) {
          const Jd = this.getVerticesData(Fd.j.NormalKind);
          if (!Jd) return dd._sourceNormals;
          dd._sourceNormals = new Float32Array(Jd), this.isVertexBufferUpdatable(Fd.j.NormalKind) || this.setVerticesData(Fd.j.NormalKind, Jd, !0)
        }
        return dd._sourceNormals
      }
      applySkeleton(dd) {
        if (!this.geometry) return this;
        if (this.geometry._softwareSkinningFrameId == this.Wm().getFrameId()) return this;
        if (this.geometry._softwareSkinningFrameId = this.Wm().getFrameId(), !this.isVerticesDataPresent(Fd.j.PositionKind)) return this;
        if (!this.isVerticesDataPresent(Fd.j.MatricesIndicesKind)) return this;
        if (!this.isVerticesDataPresent(Fd.j.MatricesWeightsKind)) return this;
        const Jd = this.isVerticesDataPresent(Fd.j.NormalKind),
          kd = this._internalMeshDataInfo;
        if (!kd._sourcePositions) {
          const dd = this.rG.slice();
          this.setPositionsForCPUSkinning(), this.rG = dd
        }
        Jd && !kd._sourceNormals && this.setNormalsForCPUSkinning();
        let pd = this.getVerticesData(Fd.j.PositionKind);
        if (!pd) return this;
        pd instanceof Float32Array || (pd = new Float32Array(pd));
        let Nd = this.getVerticesData(Fd.j.NormalKind);
        if (Jd) {
          if (!Nd) return this;
          Nd instanceof Float32Array || (Nd = new Float32Array(Nd))
        }
        const Wd = this.getVerticesData(Fd.j.MatricesIndicesKind),
          Pd = this.getVerticesData(Fd.j.MatricesWeightsKind);
        if (!Pd || !Wd) return this;
        const Zd = this.numBoneInfluencers > 4,
          gd = Zd ? this.getVerticesData(Fd.j.MatricesIndicesExtraKind) : null,
          Cd = Zd ? this.getVerticesData(Fd.j.MatricesWeightsExtraKind) : null,
          Kd = dd.getTransformMatrices(this),
          od = sd.n.Zero(),
          ld = new sd.b,
          Qd = new sd.b;
        let Ld, Od = 0;
        for (let ed = 0; ed < pd.length; ed += 3, Od += 4) {
          let dd;
          for (Ld = 0; Ld < 4; Ld++) dd = Pd[Od + Ld], dd > 0 && (sd.b.FromFloat32ArrayToRefScaled(Kd, Math.floor(16 * Wd[Od + Ld]), dd, Qd), ld.addToSelf(Qd));
          if (Zd)
            for (Ld = 0; Ld < 4; Ld++) dd = Cd[Od + Ld], dd > 0 && (sd.b.FromFloat32ArrayToRefScaled(Kd, Math.floor(16 * gd[Od + Ld]), dd, Qd), ld.addToSelf(Qd));
          sd.n.TransformCoordinatesFromFloatsToRef(kd._sourcePositions[ed], kd._sourcePositions[ed + 1], kd._sourcePositions[ed + 2], ld, od), od.toArray(pd, ed), Jd && (sd.n.TransformNormalFromFloatsToRef(kd._sourceNormals[ed], kd._sourceNormals[ed + 1], kd._sourceNormals[ed + 2], ld, od), od.toArray(Nd, ed)), ld.reset()
        }
        return this.updateVerticesData(Fd.j.PositionKind, pd), Jd && this.updateVerticesData(Fd.j.NormalKind, Nd), this
      }
      static MinMax(dd) {
        let Jd = null,
          kd = null;
        for (const pd of dd) {
          const dd = pd.pU().boundingBox;
          Jd && kd ? (Jd.minimizeInPlace(dd.minimumWorld), kd.maximizeInPlace(dd.maximumWorld)) : (Jd = dd.minimumWorld.clone(), kd = dd.maximumWorld.clone())
        }
        return Jd && kd ? {
          min: Jd,
          max: kd
        } : {
          min: sd.n.Zero(),
          max: sd.n.Zero()
        }
      }
      static Center(dd) {
        const Jd = dd instanceof Array ? wd.MinMax(dd) : dd;
        return sd.n.Center(Jd.min, Jd.max)
      }
      static MergeMeshes(dd) {
        let Jd = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          kd = arguments.length > 2 ? arguments[2] : void 0,
          pd = arguments.length > 3 ? arguments[3] : void 0,
          Nd = arguments.length > 4 ? arguments[4] : void 0,
          Wd = arguments.length > 5 ? arguments[5] : void 0;
        return (0, qd.k)(wd._MergeMeshesCoroutine(dd, Jd, kd, pd, Nd, Wd, !1))
      }
      static async MergeMeshesAsync(dd) {
        let Jd = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          kd = arguments.length > 2 ? arguments[2] : void 0,
          pd = arguments.length > 3 ? arguments[3] : void 0,
          Nd = arguments.length > 4 ? arguments[4] : void 0,
          Wd = arguments.length > 5 ? arguments[5] : void 0;
        return await (0, qd.g)(wd._MergeMeshesCoroutine(dd, Jd, kd, pd, Nd, Wd, !0), (0, qd.d)())
      }
      static * _MergeMeshesCoroutine(dd) {
        let Jd, kd = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          pd = arguments.length > 2 ? arguments[2] : void 0,
          Nd = arguments.length > 3 ? arguments[3] : void 0,
          Wd = arguments.length > 4 ? arguments[4] : void 0,
          Pd = arguments.length > 5 ? arguments[5] : void 0,
          Zd = arguments.length > 6 ? arguments[6] : void 0;
        if (0 === (dd = dd.filter(Boolean)).length) return null;
        if (!pd) {
          let kd = 0;
          for (Jd = 0; Jd < dd.length; Jd++)
            if (kd += dd[Jd].getTotalVertices(), kd >= 65536) return yd.c.Warn("Cannot merge meshes because resulting mesh will have more than 65536 vertices. Please use allow32BitsIndices = true to use 32 bits indices"), null
        }
        const gd = dd[0];
        Pd && (Wd = !1, dd.sort(((dd, Jd) => (dd.material?.uniqueId ?? -1) - (Jd.material?.uniqueId ?? -1))));
        const Cd = new Array,
          Kd = new Array,
          od = new Array,
          ld = dd[0].sideOrientation;
        for (Jd = 0; Jd < dd.length; Jd++) {
          const kd = dd[Jd];
          if (kd.Km) return yd.c.Warn("Cannot merge instance meshes."), null;
          if (ld !== kd.sideOrientation) return yd.c.Warn("Cannot merge meshes with different sideOrientation values."), null;
          if (Wd || Pd) {
            const dd = od.reduce(((dd, Jd) => Math.max(dd, Jd.start + Jd.count)), 0);
            if (Pd)
              if (kd.material) {
                const Jd = kd.material;
                if (Jd instanceof fd.e) {
                  for (let dd = 0; dd < Jd.f6.length; dd++) Cd.indexOf(Jd.f6[dd]) < 0 && Cd.push(Jd.f6[dd]);
                  for (let pd = 0; pd < kd.rG.length; pd++) Kd.push(Cd.indexOf(Jd.f6[kd.rG[pd].materialIndex])), od.push({
                    start: dd + kd.rG[pd].indexStart,
                    count: kd.rG[pd].indexCount
                  })
                } else {
                  Cd.indexOf(Jd) < 0 && Cd.push(Jd);
                  for (let pd = 0; pd < kd.rG.length; pd++) Kd.push(Cd.indexOf(Jd)), od.push({
                    start: dd + kd.rG[pd].indexStart,
                    count: kd.rG[pd].indexCount
                  })
                }
              } else
                for (let Jd = 0; Jd < kd.rG.length; Jd++) Kd.push(0), od.push({
                  start: dd + kd.rG[Jd].indexStart,
                  count: kd.rG[Jd].indexCount
                });
            else od.push({
              start: dd,
              count: kd.getTotalIndices()
            })
          }
        }
        if (Pd && od.length > 1) {
          let dd = 0;
          for (let Jd = 1; Jd < od.length; Jd++) {
            const kd = od[dd],
              pd = od[Jd];
            Kd[Jd] === Kd[dd] && kd.start + kd.count === pd.start ? kd.count += pd.count : (dd++, od[dd] = pd, Kd[dd] = Kd[Jd])
          }
          od.length = dd + 1, Kd.length = dd + 1
        }
        const Qd = dd => {
            const Jd = dd.computeWorldMatrix(!0);
            return {
              vertexData: Yd.c.ExtractFromMesh(dd, !1, !1),
              transform: Jd
            }
          },
          {
            vertexData: Ld,
            transform: Od
          } = Qd(dd[0]);
        Zd && (yield);
        const ed = new Array(dd.length - 1);
        for (let qd = 1; qd < dd.length; qd++) ed[qd - 1] = Qd(dd[qd]), Zd && (yield);
        const Rd = Ld._mergeCoroutine(Od, ed, pd, Zd, !kd);
        let Id = Rd.next();
        for (; !Id.done;) Zd && (yield), Id = Rd.next();
        const Gd = Id.value;
        Nd || (Nd = new wd(gd.name + "_merged", gd.Wm()));
        const vd = Gd._applyToCoroutine(Nd, void 0, Zd);
        let xd = vd.next();
        for (; !xd.done;) Zd && (yield), xd = vd.next();
        if (Nd.checkCollisions = gd.checkCollisions, Nd.sideOrientation = gd.sideOrientation, kd)
          for (Jd = 0; Jd < dd.length; Jd++) dd[Jd].dispose();
        if (Wd || Pd) {
          for (Nd.releaseSubMeshes(), Jd = 0; Jd < od.length;) Sd.c.CreateFromIndices(0, od[Jd].start, od[Jd].count, Nd, void 0, !1), Jd++;
          for (const dd of Nd.rG) dd.refreshBoundingInfo();
          Nd.computeWorldMatrix(!0)
        }
        if (Pd) {
          const dd = new fd.e(gd.name + "_merged", gd.Wm());
          dd.f6 = Cd;
          for (let Jd = 0; Jd < Nd.rG.length; Jd++) Nd.rG[Jd].materialIndex = Kd[Jd];
          Nd.material = dd
        } else Nd.material = gd.material;
        return Nd
      }
      U1(dd) {
        dd._indexInSourceMeshInstanceArray = this.instances.length, this.instances.push(dd)
      }
      K3(dd) {
        const Jd = dd._indexInSourceMeshInstanceArray;
        if (-1 != Jd) {
          if (Jd !== this.instances.length - 1) {
            const dd = this.instances[this.instances.length - 1];
            this.instances[Jd] = dd, dd._indexInSourceMeshInstanceArray = Jd
          }
          dd._indexInSourceMeshInstanceArray = -1, this.instances.pop()
        }
      }
      _shouldConvertRHS() {
        return this._scene.useRightHandedSystem && this.sideOrientation === jd.b.CounterClockWiseSideOrientation
      }
      _getRenderingFillMode(dd) {
        const Jd = this.Wm();
        return Jd.forcePointsCloud ? jd.b.PointFillMode : Jd.forceWireframe ? jd.b.WireFrameFillMode : this.overrideRenderingFillMode ?? dd
      }
      setMaterialByID(dd) {
        return this.setMaterialById(dd)
      }
      static CreateRibbon(dd, Jd, kd, pd, Nd, Wd, Pd, Zd, gd) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDisc(dd, Jd, kd, pd, Nd, Wd) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateBox(dd, Jd, kd, pd, Nd) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateSphere(dd, Jd, kd, pd, Nd, Wd) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateHemisphere(dd, Jd, kd, pd) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateCylinder(dd, Jd, kd, pd, Nd, Wd, Pd, Zd, gd) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTorus(dd, Jd, kd, pd, Nd, Wd, Pd) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTorusKnot(dd, Jd, kd, pd, Nd, Wd, Pd, Zd, gd, Cd) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateLines(dd, Jd, kd, pd, Nd) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDashedLines(dd, Jd, kd, pd, Nd, Wd, Pd, Zd) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePolygon(dd, Jd, kd, pd, Nd, Wd, Pd) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudePolygon(dd, Jd, kd, pd, Nd, Wd, Pd, Zd) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudeShape(dd, Jd, kd, pd, Nd, Wd, Pd, Zd, gd, Cd) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudeShapeCustom(dd, Jd, kd, pd, Nd, Wd, Pd, Zd, gd, Cd, Kd, od) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateLathe(dd, Jd, kd, pd, Nd, Wd, Pd) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePlane(dd, Jd, kd, pd, Nd) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateGround(dd, Jd, kd, pd, Nd, Wd) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTiledGround(dd, Jd, kd, pd, Nd, Wd, Pd, Zd, gd) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateGroundFromHeightMap(dd, Jd, kd, pd, Nd, Wd, Pd, Zd, gd, Cd, Kd) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTube(dd, Jd, kd, pd, Nd, Wd, Pd, Zd, gd, Cd) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePolyhedron(dd, Jd, kd) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateIcoSphere(dd, Jd, kd) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDecal(dd, Jd, kd, pd, Nd, Wd) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateCapsule(dd, Jd, kd) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtendToGoldberg(dd) {
        throw new Error("Import MeshBuilder to populate this function")
      }
    }
    wd.FRONTSIDE = Yd.c.FRONTSIDE, wd.BACKSIDE = Yd.c.BACKSIDE, wd.DOUBLESIDE = Yd.c.DOUBLESIDE, wd.DEFAULTSIDE = Yd.c.DEFAULTSIDE, wd.NO_CAP = 0, wd.CAP_START = 1, wd.CAP_END = 2, wd.CAP_ALL = 3, wd.NO_FLIP = 0, wd.FLIP_TILE = 1, wd.ROTATE_TILE = 2, wd.FLIP_ROW = 3, wd.ROTATE_ROW = 4, wd.FLIP_N_ROTATE_TILE = 5, wd.FLIP_N_ROTATE_ROW = 6, wd.CENTER = 0, wd.LEFT = 1, wd.RIGHT = 2, wd.TOP = 3, wd.BOTTOM = 4, wd.INSTANCEDMESH_SORT_TRANSPARENT = !1, wd._GroundMeshParser = (dd, Jd) => {
      throw (0, Td.n)("GroundMesh")
    }, wd._GoldbergMeshParser = (dd, Jd) => {
      throw (0, Td.n)("GoldbergMesh")
    }, wd._LinesMeshParser = (dd, Jd) => {
      throw (0, Td.n)("LinesMesh")
    }, wd._GreasedLineMeshParser = (dd, Jd) => {
      throw (0, Td.n)("GreasedLineMesh")
    }, wd._GreasedLineRibbonMeshParser = (dd, Jd) => {
      throw (0, Td.n)("GreasedLineRibbonMesh")
    }, wd._TrailMeshParser = (dd, Jd) => {
      throw (0, Td.n)("TrailMesh")
    }, wd._GaussianSplattingMeshParser = (dd, Jd) => {
      throw (0, Td.n)("GaussianSplattingMesh")
    }, wd._GaussianSplattingPartProxyMeshParser = (dd, Jd) => {
      throw (0, Td.n)("GaussianSplattingPartProxyMesh")
    }, wd._GaussianSplattingCompoundMeshParser = (dd, Jd) => {
      throw (0, Td.n)("GaussianSplattingCompoundMesh")
    };
    let Ad = !1;

    function dJ() {
      Ad || (Ad = !0, (0, Dd.h)("BABYLON.Mesh", wd))
    }(pd = wd.prototype).EX ?? (pd.EX = (0, Td.j)("Mesh", "EX")), (Nd = wd.prototype).simplify ?? (Nd.simplify = (0, Td.j)("Mesh", "simplify")), (Wd = wd.prototype).thinInstanceAdd ?? (Wd.thinInstanceAdd = (0, Td.j)("Mesh", "thinInstanceAdd")), (Pd = wd.prototype).thinInstanceAddSelf ?? (Pd.thinInstanceAddSelf = (0, Td.j)("Mesh", "thinInstanceAddSelf")), (Zd = wd.prototype).thinInstanceRegisterAttribute ?? (Zd.thinInstanceRegisterAttribute = (0, Td.j)("Mesh", "thinInstanceRegisterAttribute")), (gd = wd.prototype).thinInstanceSetMatrixAt ?? (gd.thinInstanceSetMatrixAt = (0, Td.j)("Mesh", "thinInstanceSetMatrixAt")), (Cd = wd.prototype).thinInstanceSetAttributeAt ?? (Cd.thinInstanceSetAttributeAt = (0, Td.j)("Mesh", "thinInstanceSetAttributeAt")), (Kd = wd.prototype).i6 ?? (Kd.i6 = (0, Td.j)("Mesh", "i6")), (od = wd.prototype).thinInstanceGetWorldMatrices ?? (od.thinInstanceGetWorldMatrices = (0, Td.j)("Mesh", "thinInstanceGetWorldMatrices")), (ld = wd.prototype).X3 ?? (ld.X3 = (0, Td.j)("Mesh", "X3")), (Qd = wd.prototype).thinInstancePartialBufferUpdate ?? (Qd.thinInstancePartialBufferUpdate = (0, Td.j)("Mesh", "thinInstancePartialBufferUpdate")), (Ld = wd.prototype).thinInstanceRefreshBoundingInfo ?? (Ld.thinInstanceRefreshBoundingInfo = (0, Td.j)("Mesh", "thinInstanceRefreshBoundingInfo")), (Od = wd.prototype).getEmittedParticleSystems ?? (Od.getEmittedParticleSystems = (0, Td.j)("Mesh", "getEmittedParticleSystems")), (ed = wd.prototype).getHierarchyEmittedParticleSystems ?? (ed.getHierarchyEmittedParticleSystems = (0, Td.j)("Mesh", "getHierarchyEmittedParticleSystems")), Object.getOwnPropertyDescriptor(wd.prototype, "edgesShareWithInstances") || Object.defineProperty(wd.prototype, "edgesShareWithInstances", (0, Td.g)("Mesh", "edgesShareWithInstances")), Object.getOwnPropertyDescriptor(wd.prototype, "hJd") || Object.defineProperty(wd.prototype, "hJd", (0, Td.g)("Mesh", "hJd")), Object.getOwnPropertyDescriptor(wd.prototype, "thinInstanceAllowAutomaticStaticBufferRecreation") || Object.defineProperty(wd.prototype, "thinInstanceAllowAutomaticStaticBufferRecreation", (0, Td.g)("Mesh", "thinInstanceAllowAutomaticStaticBufferRecreation")), Object.getOwnPropertyDescriptor(wd.prototype, "W8") || Object.defineProperty(wd.prototype, "W8", (0, Td.g)("Mesh", "W8"))
  },
  40402: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => Ld
    });
    var pd = kd(39964),
      Nd = kd(37251),
      Wd = kd(40115),
      Pd = kd(39860),
      Zd = kd(37443),
      gd = kd(38812),
      Cd = kd(39966),
      Kd = kd(40396),
      od = kd(40014),
      ld = kd(40282);
    class Qd {}
    let Ld = (() => {
      var dd;
      let Jd, kd, Ld, Od, ed = [];
      return dd = class {
        constructor() {
          this.uniqueId = 0, this.metadata = {}, this._applyTo = (0, Kd.f)(this._applyToCoroutine.bind(this)), this.uniqueId = dd._UniqueIdGenerator, dd._UniqueIdGenerator++
        }
        set(dd, Jd) {
          switch (dd.length || gd.c.Warn(`Setting vertex data kind '${Jd}' with an empty array`), Jd) {
            case Wd.j.PositionKind:
              this.positions = dd;
              break;
            case Wd.j.NormalKind:
              this.normals = dd;
              break;
            case Wd.j.TangentKind:
              this.tangents = dd;
              break;
            case Wd.j.UVKind:
              this.uvs = dd;
              break;
            case Wd.j.UV2Kind:
              this.uvs2 = dd;
              break;
            case Wd.j.UV3Kind:
              this.uvs3 = dd;
              break;
            case Wd.j.UV4Kind:
              this.uvs4 = dd;
              break;
            case Wd.j.UV5Kind:
              this.uvs5 = dd;
              break;
            case Wd.j.UV6Kind:
              this.uvs6 = dd;
              break;
            case Wd.j.ColorKind:
              this.colors = dd;
              break;
            case Wd.j.MatricesIndicesKind:
              this.matricesIndices = dd;
              break;
            case Wd.j.MatricesWeightsKind:
              this.matricesWeights = dd;
              break;
            case Wd.j.MatricesIndicesExtraKind:
              this.matricesIndicesExtra = dd;
              break;
            case Wd.j.MatricesWeightsExtraKind:
              this.matricesWeightsExtra = dd
          }
        }
        applyToMesh(dd, Jd) {
          return this._applyTo(dd, Jd, !1), this
        }
        applyToGeometry(dd, Jd) {
          return this._applyTo(dd, Jd, !1), this
        }
        updateMesh(dd) {
          return this._update(dd), this
        }
        updateGeometry(dd) {
          return this._update(dd), this
        }* _applyToCoroutine(dd) {
          let Jd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            kd = arguments.length > 2 ? arguments[2] : void 0;
          if (this.positions && (dd.setVerticesData(Wd.j.PositionKind, this.positions, Jd), kd && (yield)), this.normals && (dd.setVerticesData(Wd.j.NormalKind, this.normals, Jd), kd && (yield)), this.tangents && (dd.setVerticesData(Wd.j.TangentKind, this.tangents, Jd), kd && (yield)), this.uvs && (dd.setVerticesData(Wd.j.UVKind, this.uvs, Jd), kd && (yield)), this.uvs2 && (dd.setVerticesData(Wd.j.UV2Kind, this.uvs2, Jd), kd && (yield)), this.uvs3 && (dd.setVerticesData(Wd.j.UV3Kind, this.uvs3, Jd), kd && (yield)), this.uvs4 && (dd.setVerticesData(Wd.j.UV4Kind, this.uvs4, Jd), kd && (yield)), this.uvs5 && (dd.setVerticesData(Wd.j.UV5Kind, this.uvs5, Jd), kd && (yield)), this.uvs6 && (dd.setVerticesData(Wd.j.UV6Kind, this.uvs6, Jd), kd && (yield)), this.colors) {
            const pd = this.positions && this.colors.length === this.positions.length ? 3 : 4;
            dd.setVerticesData(Wd.j.ColorKind, this.colors, Jd, pd), this.hasVertexAlpha && void 0 !== dd.hasVertexAlpha && (dd.hasVertexAlpha = !0), kd && (yield)
          }
          if (this.matricesIndices && (dd.setVerticesData(Wd.j.MatricesIndicesKind, this.matricesIndices, Jd), kd && (yield)), this.matricesWeights && (dd.setVerticesData(Wd.j.MatricesWeightsKind, this.matricesWeights, Jd), kd && (yield)), this.matricesIndicesExtra && (dd.setVerticesData(Wd.j.MatricesIndicesExtraKind, this.matricesIndicesExtra, Jd), kd && (yield)), this.matricesWeightsExtra && (dd.setVerticesData(Wd.j.MatricesWeightsExtraKind, this.matricesWeightsExtra, Jd), kd && (yield)), this.indices ? (dd.setIndices(this.indices, null, Jd), kd && (yield)) : dd.setIndices([], null), dd.rG && this.materialInfos && this.materialInfos.length > 1) {
            const Jd = dd;
            Jd.rG = [];
            for (const dd of this.materialInfos) new ld.c(dd.materialIndex, dd.verticesStart, dd.verticesCount, dd.indexStart, dd.indexCount, Jd)
          }
          return this
        }
        _update(dd, Jd, kd) {
          return this.positions && dd.updateVerticesData(Wd.j.PositionKind, this.positions, Jd, kd), this.normals && dd.updateVerticesData(Wd.j.NormalKind, this.normals, Jd, kd), this.tangents && dd.updateVerticesData(Wd.j.TangentKind, this.tangents, Jd, kd), this.uvs && dd.updateVerticesData(Wd.j.UVKind, this.uvs, Jd, kd), this.uvs2 && dd.updateVerticesData(Wd.j.UV2Kind, this.uvs2, Jd, kd), this.uvs3 && dd.updateVerticesData(Wd.j.UV3Kind, this.uvs3, Jd, kd), this.uvs4 && dd.updateVerticesData(Wd.j.UV4Kind, this.uvs4, Jd, kd), this.uvs5 && dd.updateVerticesData(Wd.j.UV5Kind, this.uvs5, Jd, kd), this.uvs6 && dd.updateVerticesData(Wd.j.UV6Kind, this.uvs6, Jd, kd), this.colors && dd.updateVerticesData(Wd.j.ColorKind, this.colors, Jd, kd), this.matricesIndices && dd.updateVerticesData(Wd.j.MatricesIndicesKind, this.matricesIndices, Jd, kd), this.matricesWeights && dd.updateVerticesData(Wd.j.MatricesWeightsKind, this.matricesWeights, Jd, kd), this.matricesIndicesExtra && dd.updateVerticesData(Wd.j.MatricesIndicesExtraKind, this.matricesIndicesExtra, Jd, kd), this.matricesWeightsExtra && dd.updateVerticesData(Wd.j.MatricesWeightsExtraKind, this.matricesWeightsExtra, Jd, kd), this.indices && dd.setIndices(this.indices, null), this
        }
        static _TransformVector3Coordinates(dd, Jd) {
          let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : dd.length;
          const Wd = Nd.h.IL[0],
            Pd = Nd.h.IL[1];
          for (let Zd = kd; Zd < kd + pd; Zd += 3) Nd.n.FromArrayToRef(dd, Zd, Wd), Nd.n.TransformCoordinatesToRef(Wd, Jd, Pd), dd[Zd] = Pd.x, dd[Zd + 1] = Pd.y, dd[Zd + 2] = Pd.z
        }
        static _TransformVector3Normals(dd, Jd) {
          let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : dd.length;
          const Wd = Nd.h.IL[0],
            Pd = Nd.h.IL[1];
          for (let Zd = kd; Zd < kd + pd; Zd += 3) Nd.n.FromArrayToRef(dd, Zd, Wd), Nd.n.TransformNormalToRef(Wd, Jd, Pd), dd[Zd] = Pd.x, dd[Zd + 1] = Pd.y, dd[Zd + 2] = Pd.z
        }
        static _TransformVector4Normals(dd, Jd) {
          let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : dd.length;
          const Wd = Nd.h.Vector4[0],
            Pd = Nd.h.Vector4[1];
          for (let Zd = kd; Zd < kd + pd; Zd += 4) Nd.o.FromArrayToRef(dd, Zd, Wd), Nd.o.TransformNormalToRef(Wd, Jd, Pd), dd[Zd] = Pd.x, dd[Zd + 1] = Pd.y, dd[Zd + 2] = Pd.z, dd[Zd + 3] = Pd.w
        }
        static _FlipFaces(dd) {
          let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : dd.length;
          for (let pd = Jd; pd < Jd + kd; pd += 3) {
            const Jd = dd[pd + 1];
            dd[pd + 1] = dd[pd + 2], dd[pd + 2] = Jd
          }
        }
        transform(Jd) {
          const kd = Jd.determinant() < 0;
          return this.positions && dd._TransformVector3Coordinates(this.positions, Jd), this.normals && dd._TransformVector3Normals(this.normals, Jd), this.tangents && dd._TransformVector4Normals(this.tangents, Jd), kd && this.indices && dd._FlipFaces(this.indices), this
        }
        splitBasedOnMaterialID() {
          if (!this.materialInfos || this.materialInfos.length < 2) return [this];
          const Jd = [];
          for (const kd of this.materialInfos) {
            const pd = new dd;
            if (this.positions && (pd.positions = this.positions.slice(3 * kd.verticesStart, 3 * (kd.verticesCount + kd.verticesStart))), this.normals && (pd.normals = this.normals.slice(3 * kd.verticesStart, 3 * (kd.verticesCount + kd.verticesStart))), this.tangents && (pd.tangents = this.tangents.slice(4 * kd.verticesStart, 4 * (kd.verticesCount + kd.verticesStart))), this.colors && (pd.colors = this.colors.slice(4 * kd.verticesStart, 4 * (kd.verticesCount + kd.verticesStart))), this.uvs && (pd.uvs = this.uvs.slice(2 * kd.verticesStart, 2 * (kd.verticesCount + kd.verticesStart))), this.uvs2 && (pd.uvs2 = this.uvs2.slice(2 * kd.verticesStart, 2 * (kd.verticesCount + kd.verticesStart))), this.uvs3 && (pd.uvs3 = this.uvs3.slice(2 * kd.verticesStart, 2 * (kd.verticesCount + kd.verticesStart))), this.uvs4 && (pd.uvs4 = this.uvs4.slice(2 * kd.verticesStart, 2 * (kd.verticesCount + kd.verticesStart))), this.uvs5 && (pd.uvs5 = this.uvs5.slice(2 * kd.verticesStart, 2 * (kd.verticesCount + kd.verticesStart))), this.uvs6 && (pd.uvs6 = this.uvs6.slice(2 * kd.verticesStart, 2 * (kd.verticesCount + kd.verticesStart))), this.matricesIndices && (pd.matricesIndices = this.matricesIndices.slice(4 * kd.verticesStart, 4 * (kd.verticesCount + kd.verticesStart))), this.matricesIndicesExtra && (pd.matricesIndicesExtra = this.matricesIndicesExtra.slice(4 * kd.verticesStart, 4 * (kd.verticesCount + kd.verticesStart))), this.matricesWeights && (pd.matricesWeights = this.matricesWeights.slice(4 * kd.verticesStart, 4 * (kd.verticesCount + kd.verticesStart))), this.matricesWeightsExtra && (pd.matricesWeightsExtra = this.matricesWeightsExtra.slice(4 * kd.verticesStart, 4 * (kd.verticesCount + kd.verticesStart))), this.indices) {
              pd.indices = [];
              for (let dd = kd.indexStart; dd < kd.indexStart + kd.indexCount; dd++) pd.indices.push(this.indices[dd] - kd.verticesStart)
            }
            const Nd = new Qd;
            Nd.indexStart = 0, Nd.indexCount = pd.indices ? pd.indices.length : 0, Nd.materialIndex = kd.materialIndex, Nd.verticesStart = 0, Nd.verticesCount = (pd.positions ? pd.positions.length : 0) / 3, pd.materialInfos = [Nd], Jd.push(pd)
          }
          return Jd
        }
        merge(dd) {
          let Jd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            kd = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            pd = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            Nd = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
          const Wd = Array.isArray(dd) ? dd.map((dd => ({
            vertexData: dd
          }))) : [{
            vertexData: dd
          }];
          return (0, Kd.k)(this._mergeCoroutine(void 0, Wd, Jd, !1, kd, pd, Nd))
        }* _mergeCoroutine(Jd, kd) {
          let pd = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            Nd = arguments.length > 3 ? arguments[3] : void 0,
            Pd = arguments.length > 4 ? arguments[4] : void 0,
            Zd = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
            gd = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
          this._validate();
          let Cd = kd.map((dd => dd.vertexData)),
            Kd = this;
          if (gd)
            for (const dd of Cd) dd && (dd._validate(), !this.normals && dd.normals && (this.normals = new Float32Array(this.positions.length)), !this.tangents && dd.tangents && (this.tangents = new Float32Array(this.positions.length / 3 * 4)), !this.uvs && dd.uvs && (this.uvs = new Float32Array(this.positions.length / 3 * 2)), !this.uvs2 && dd.uvs2 && (this.uvs2 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs3 && dd.uvs3 && (this.uvs3 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs4 && dd.uvs4 && (this.uvs4 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs5 && dd.uvs5 && (this.uvs5 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs6 && dd.uvs6 && (this.uvs6 = new Float32Array(this.positions.length / 3 * 2)), !this.colors && dd.colors && (this.colors = new Float32Array(this.positions.length / 3 * 4), this.colors.fill(1)), !this.matricesIndices && dd.matricesIndices && (this.matricesIndices = new Float32Array(this.positions.length / 3 * 4)), !this.matricesWeights && dd.matricesWeights && (this.matricesWeights = new Float32Array(this.positions.length / 3 * 4)), !this.matricesIndicesExtra && dd.matricesIndicesExtra && (this.matricesIndicesExtra = new Float32Array(this.positions.length / 3 * 4)), !this.matricesWeightsExtra && dd.matricesWeightsExtra && (this.matricesWeightsExtra = new Float32Array(this.positions.length / 3 * 4)));
          for (const dd of Cd)
            if (dd)
              if (gd) this.normals && !dd.normals && (dd.normals = new Float32Array(dd.positions.length)), this.tangents && !dd.tangents && (dd.tangents = new Float32Array(dd.positions.length / 3 * 4)), this.uvs && !dd.uvs && (dd.uvs = new Float32Array(dd.positions.length / 3 * 2)), this.uvs2 && !dd.uvs2 && (dd.uvs2 = new Float32Array(dd.positions.length / 3 * 2)), this.uvs3 && !dd.uvs3 && (dd.uvs3 = new Float32Array(dd.positions.length / 3 * 2)), this.uvs4 && !dd.uvs4 && (dd.uvs4 = new Float32Array(dd.positions.length / 3 * 2)), this.uvs5 && !dd.uvs5 && (dd.uvs5 = new Float32Array(dd.positions.length / 3 * 2)), this.uvs6 && !dd.uvs6 && (dd.uvs6 = new Float32Array(dd.positions.length / 3 * 2)), this.colors && !dd.colors && (dd.colors = new Float32Array(dd.positions.length / 3 * 4), dd.colors.fill(1)), this.matricesIndices && !dd.matricesIndices && (dd.matricesIndices = new Float32Array(dd.positions.length / 3 * 4)), this.matricesWeights && !dd.matricesWeights && (dd.matricesWeights = new Float32Array(dd.positions.length / 3 * 4)), this.matricesIndicesExtra && !dd.matricesIndicesExtra && (dd.matricesIndicesExtra = new Float32Array(dd.positions.length / 3 * 4)), this.matricesWeightsExtra && !dd.matricesWeightsExtra && (dd.matricesWeightsExtra = new Float32Array(dd.positions.length / 3 * 4));
              else if (dd._validate(), !this.normals !== !dd.normals || !this.tangents !== !dd.tangents || !this.uvs !== !dd.uvs || !this.uvs2 !== !dd.uvs2 || !this.uvs3 !== !dd.uvs3 || !this.uvs4 !== !dd.uvs4 || !this.uvs5 !== !dd.uvs5 || !this.uvs6 !== !dd.uvs6 || !this.colors !== !dd.colors || !this.matricesIndices !== !dd.matricesIndices || !this.matricesWeights !== !dd.matricesWeights || !this.matricesIndicesExtra !== !dd.matricesIndicesExtra || !this.matricesWeightsExtra !== !dd.matricesWeightsExtra) throw new Error("Cannot merge vertex data that do not have the same set of attributes");
          if (Zd) {
            let dd, pd = 0,
              Nd = 0;
            const Wd = [];
            let Pd = null;
            const Zd = [];
            for (const kd of this.splitBasedOnMaterialID()) Zd.push({
              vertexData: kd,
              transform: Jd
            });
            for (const Jd of kd)
              if (Jd.vertexData)
                for (const dd of Jd.vertexData.splitBasedOnMaterialID()) Zd.push({
                  vertexData: dd,
                  transform: Jd.transform
                });
            Zd.sort(((dd, Jd) => {
              const kd = dd.vertexData.materialInfos ? dd.vertexData.materialInfos[0].materialIndex : 0,
                pd = Jd.vertexData.materialInfos ? Jd.vertexData.materialInfos[0].materialIndex : 0;
              return kd > pd ? 1 : kd === pd ? 0 : -1
            }));
            for (const Jd of Zd) {
              const kd = Jd.vertexData;
              if (dd = kd.materialInfos ? kd.materialInfos[0].materialIndex : 0, Pd && Pd.materialIndex === dd) Pd.indexCount += kd.indices.length, Pd.verticesCount += kd.positions.length / 3;
              else {
                const Jd = new Qd;
                Jd.materialIndex = dd, Jd.indexStart = pd, Jd.indexCount = kd.indices.length, Jd.verticesStart = Nd, Jd.verticesCount = kd.positions.length / 3, Wd.push(Jd), Pd = Jd
              }
              pd += kd.indices.length, Nd += kd.positions.length / 3
            }
            const gd = Zd.splice(0, 1)[0];
            Kd = gd.vertexData, Jd = gd.transform, Cd = Zd.map((dd => dd.vertexData)), kd = Zd, this.materialInfos = Wd
          }
          const od = Cd.reduce(((dd, Jd) => dd + (Jd.indices?.length ?? 0)), Kd.indices?.length ?? 0);
          let ld = Pd || Cd.some((dd => dd.indices === Kd.indices)) ? Kd.indices?.slice() : Kd.indices;
          if (od > 0) {
            let Wd = ld?.length ?? 0;
            if (ld || (ld = new Array(od)), ld.length !== od) {
              if (Array.isArray(ld)) ld.length = od;
              else {
                const dd = pd || ld instanceof Uint32Array ? new Uint32Array(od) : new Uint16Array(od);
                dd.set(ld), ld = dd
              }
              Jd && Jd.determinant() < 0 && dd._FlipFaces(ld, 0, Wd)
            }
            let Pd = Kd.positions ? Kd.positions.length / 3 : 0;
            for (const {
                vertexData: Jd,
                transform: pd
              }
              of kd)
              if (Jd.indices) {
                for (let dd = 0; dd < Jd.indices.length; dd++) ld[Wd + dd] = Jd.indices[dd] + Pd;
                pd && pd.determinant() < 0 && dd._FlipFaces(ld, Wd, Jd.indices.length), Pd += Jd.positions.length / 3, Wd += Jd.indices.length, Nd && (yield)
              }
          }
          return this.indices = ld, this.positions = dd._MergeElement(Wd.j.PositionKind, Kd.positions, Jd, kd.map((dd => [dd.vertexData.positions, dd.transform]))), Nd && (yield), Kd.normals && (this.normals = dd._MergeElement(Wd.j.NormalKind, Kd.normals, Jd, kd.map((dd => [dd.vertexData.normals, dd.transform]))), Nd && (yield)), Kd.tangents && (this.tangents = dd._MergeElement(Wd.j.TangentKind, Kd.tangents, Jd, kd.map((dd => [dd.vertexData.tangents, dd.transform]))), Nd && (yield)), Kd.uvs && (this.uvs = dd._MergeElement(Wd.j.UVKind, Kd.uvs, Jd, kd.map((dd => [dd.vertexData.uvs, dd.transform]))), Nd && (yield)), Kd.uvs2 && (this.uvs2 = dd._MergeElement(Wd.j.UV2Kind, Kd.uvs2, Jd, kd.map((dd => [dd.vertexData.uvs2, dd.transform]))), Nd && (yield)), Kd.uvs3 && (this.uvs3 = dd._MergeElement(Wd.j.UV3Kind, Kd.uvs3, Jd, kd.map((dd => [dd.vertexData.uvs3, dd.transform]))), Nd && (yield)), Kd.uvs4 && (this.uvs4 = dd._MergeElement(Wd.j.UV4Kind, Kd.uvs4, Jd, kd.map((dd => [dd.vertexData.uvs4, dd.transform]))), Nd && (yield)), Kd.uvs5 && (this.uvs5 = dd._MergeElement(Wd.j.UV5Kind, Kd.uvs5, Jd, kd.map((dd => [dd.vertexData.uvs5, dd.transform]))), Nd && (yield)), Kd.uvs6 && (this.uvs6 = dd._MergeElement(Wd.j.UV6Kind, Kd.uvs6, Jd, kd.map((dd => [dd.vertexData.uvs6, dd.transform]))), Nd && (yield)), Kd.colors && (this.colors = dd._MergeElement(Wd.j.ColorKind, Kd.colors, Jd, kd.map((dd => [dd.vertexData.colors, dd.transform]))), (void 0 !== Kd.hasVertexAlpha || kd.some((dd => void 0 !== dd.vertexData.hasVertexAlpha))) && (this.hasVertexAlpha = Kd.hasVertexAlpha || kd.some((dd => dd.vertexData.hasVertexAlpha))), Nd && (yield)), Kd.matricesIndices && (this.matricesIndices = dd._MergeElement(Wd.j.MatricesIndicesKind, Kd.matricesIndices, Jd, kd.map((dd => [dd.vertexData.matricesIndices, dd.transform]))), Nd && (yield)), Kd.matricesWeights && (this.matricesWeights = dd._MergeElement(Wd.j.MatricesWeightsKind, Kd.matricesWeights, Jd, kd.map((dd => [dd.vertexData.matricesWeights, dd.transform]))), Nd && (yield)), Kd.matricesIndicesExtra && (this.matricesIndicesExtra = dd._MergeElement(Wd.j.MatricesIndicesExtraKind, Kd.matricesIndicesExtra, Jd, kd.map((dd => [dd.vertexData.matricesIndicesExtra, dd.transform]))), Nd && (yield)), Kd.matricesWeightsExtra && (this.matricesWeightsExtra = dd._MergeElement(Wd.j.MatricesWeightsExtraKind, Kd.matricesWeightsExtra, Jd, kd.map((dd => [dd.vertexData.matricesWeightsExtra, dd.transform])))), this
        }
        static _MergeElement(Jd, kd, pd, Nd) {
          const Pd = Nd.filter((dd => null !== dd[0] && void 0 !== dd[0]));
          if (!kd && 0 == Pd.length) return kd;
          if (!kd) return this._MergeElement(Jd, Pd[0][0], Pd[0][1], Pd.slice(1));
          const Zd = Pd.reduce(((dd, Jd) => dd + Jd[0].length), kd.length),
            gd = Jd === Wd.j.PositionKind ? dd._TransformVector3Coordinates : Jd === Wd.j.NormalKind ? dd._TransformVector3Normals : Jd === Wd.j.TangentKind ? dd._TransformVector4Normals : () => {};
          if (kd instanceof Float32Array) {
            const dd = new Float32Array(Zd);
            dd.set(kd), pd && gd(dd, pd, 0, kd.length);
            let Jd = kd.length;
            for (const [kd, pd] of Pd) dd.set(kd, Jd), pd && gd(dd, pd, Jd, kd.length), Jd += kd.length;
            return dd
          } {
            const dd = new Array(Zd);
            for (let pd = 0; pd < kd.length; pd++) dd[pd] = kd[pd];
            pd && gd(dd, pd, 0, kd.length);
            let Jd = kd.length;
            for (const [kd, pd] of Pd) {
              for (let pd = 0; pd < kd.length; pd++) dd[Jd + pd] = kd[pd];
              pd && gd(dd, pd, Jd, kd.length), Jd += kd.length
            }
            return dd
          }
        }
        _validate() {
          if (!this.positions) throw new od.i("Positions are required", od.e.MeshInvalidPositionsError);
          const dd = (dd, Jd) => {
              const kd = (0, Wd.i)(dd);
              if (Jd.length % kd !== 0) throw new Error("The " + dd + "s array count must be a multiple of " + kd);
              return Jd.length / kd
            },
            Jd = dd(Wd.j.PositionKind, this.positions),
            kd = (kd, pd) => {
              const Nd = dd(kd, pd);
              if (Nd !== Jd) throw new Error("The " + kd + "s element count (" + Nd + ") does not match the positions count (" + Jd + ")")
            };
          this.normals && kd(Wd.j.NormalKind, this.normals), this.tangents && kd(Wd.j.TangentKind, this.tangents), this.uvs && kd(Wd.j.UVKind, this.uvs), this.uvs2 && kd(Wd.j.UV2Kind, this.uvs2), this.uvs3 && kd(Wd.j.UV3Kind, this.uvs3), this.uvs4 && kd(Wd.j.UV4Kind, this.uvs4), this.uvs5 && kd(Wd.j.UV5Kind, this.uvs5), this.uvs6 && kd(Wd.j.UV6Kind, this.uvs6), this.colors && kd(Wd.j.ColorKind, this.colors), this.matricesIndices && kd(Wd.j.MatricesIndicesKind, this.matricesIndices), this.matricesWeights && kd(Wd.j.MatricesWeightsKind, this.matricesWeights), this.matricesIndicesExtra && kd(Wd.j.MatricesIndicesExtraKind, this.matricesIndicesExtra), this.matricesWeightsExtra && kd(Wd.j.MatricesWeightsExtraKind, this.matricesWeightsExtra)
        }
        clone() {
          const Jd = this.serialize();
          return dd.Parse(Jd)
        }
        serialize() {
          const dd = {};
          if (this.positions && (dd.positions = Array.from(this.positions)), this.normals && (dd.normals = Array.from(this.normals)), this.tangents && (dd.tangents = Array.from(this.tangents)), this.uvs && (dd.uvs = Array.from(this.uvs)), this.uvs2 && (dd.uvs2 = Array.from(this.uvs2)), this.uvs3 && (dd.uvs3 = Array.from(this.uvs3)), this.uvs4 && (dd.uvs4 = Array.from(this.uvs4)), this.uvs5 && (dd.uvs5 = Array.from(this.uvs5)), this.uvs6 && (dd.uvs6 = Array.from(this.uvs6)), this.colors && (dd.colors = Array.from(this.colors), dd.hasVertexAlpha = this.hasVertexAlpha), this.matricesIndices && (dd.matricesIndices = Array.from(this.matricesIndices), dd.matricesIndicesExpanded = !0), this.matricesWeights && (dd.matricesWeights = Array.from(this.matricesWeights)), this.matricesIndicesExtra && (dd.matricesIndicesExtra = Array.from(this.matricesIndicesExtra), dd.matricesIndicesExtraExpanded = !0), this.matricesWeightsExtra && (dd.matricesWeightsExtra = Array.from(this.matricesWeightsExtra)), dd.indices = this.indices ? Array.from(this.indices) : [], this.materialInfos) {
            dd.materialInfos = [];
            for (const Jd of this.materialInfos) {
              const kd = {
                indexStart: Jd.indexStart,
                indexCount: Jd.indexCount,
                materialIndex: Jd.materialIndex,
                verticesStart: Jd.verticesStart,
                verticesCount: Jd.verticesCount
              };
              dd.materialInfos.push(kd)
            }
          }
          return dd
        }
        static ExtractFromMesh(Jd, kd, pd) {
          return dd._ExtractFrom(Jd, kd, pd)
        }
        static ExtractFromGeometry(Jd, kd, pd) {
          return dd._ExtractFrom(Jd, kd, pd)
        }
        static _ExtractFrom(Jd, kd, pd) {
          const Nd = new dd;
          if (Jd.isVerticesDataPresent(Wd.j.PositionKind) && (Nd.positions = Jd.getVerticesData(Wd.j.PositionKind, kd, pd)), Jd.isVerticesDataPresent(Wd.j.NormalKind) && (Nd.normals = Jd.getVerticesData(Wd.j.NormalKind, kd, pd)), Jd.isVerticesDataPresent(Wd.j.TangentKind) && (Nd.tangents = Jd.getVerticesData(Wd.j.TangentKind, kd, pd)), Jd.isVerticesDataPresent(Wd.j.UVKind) && (Nd.uvs = Jd.getVerticesData(Wd.j.UVKind, kd, pd)), Jd.isVerticesDataPresent(Wd.j.UV2Kind) && (Nd.uvs2 = Jd.getVerticesData(Wd.j.UV2Kind, kd, pd)), Jd.isVerticesDataPresent(Wd.j.UV3Kind) && (Nd.uvs3 = Jd.getVerticesData(Wd.j.UV3Kind, kd, pd)), Jd.isVerticesDataPresent(Wd.j.UV4Kind) && (Nd.uvs4 = Jd.getVerticesData(Wd.j.UV4Kind, kd, pd)), Jd.isVerticesDataPresent(Wd.j.UV5Kind) && (Nd.uvs5 = Jd.getVerticesData(Wd.j.UV5Kind, kd, pd)), Jd.isVerticesDataPresent(Wd.j.UV6Kind) && (Nd.uvs6 = Jd.getVerticesData(Wd.j.UV6Kind, kd, pd)), Jd.isVerticesDataPresent(Wd.j.ColorKind)) {
            const dd = Jd.geometry || Jd,
              Pd = dd.getVertexBuffer(Wd.j.ColorKind),
              Zd = dd.getVerticesData(Wd.j.ColorKind, kd, pd);
            if (3 === Pd.getSize()) {
              const dd = new Float32Array(4 * Zd.length / 3);
              for (let Jd = 0, kd = 0; Jd < Zd.length; Jd += 3, kd += 4) dd[kd] = Zd[Jd], dd[kd + 1] = Zd[Jd + 1], dd[kd + 2] = Zd[Jd + 2], dd[kd + 3] = 1;
              Nd.colors = dd
            } else {
              if (4 !== Pd.getSize()) throw new Error(`Unexpected number of color components: ${Pd.getSize()}`);
              Nd.colors = Zd
            }
          }
          return Jd.isVerticesDataPresent(Wd.j.MatricesIndicesKind) && (Nd.matricesIndices = Jd.getVerticesData(Wd.j.MatricesIndicesKind, kd, pd)), Jd.isVerticesDataPresent(Wd.j.MatricesWeightsKind) && (Nd.matricesWeights = Jd.getVerticesData(Wd.j.MatricesWeightsKind, kd, pd)), Jd.isVerticesDataPresent(Wd.j.MatricesIndicesExtraKind) && (Nd.matricesIndicesExtra = Jd.getVerticesData(Wd.j.MatricesIndicesExtraKind, kd, pd)), Jd.isVerticesDataPresent(Wd.j.MatricesWeightsExtraKind) && (Nd.matricesWeightsExtra = Jd.getVerticesData(Wd.j.MatricesWeightsExtraKind, kd, pd)), Nd.indices = Jd.ipd(kd, pd), Nd
        }
        static CreateRibbon(dd) {
          throw (0, Pd.n)("ribbonBuilder")
        }
        static CreateBox(dd) {
          throw (0, Pd.n)("boxBuilder")
        }
        static CreateTiledBox(dd) {
          throw (0, Pd.n)("tiledBoxBuilder")
        }
        static CreateTiledPlane(dd) {
          throw (0, Pd.n)("tiledPlaneBuilder")
        }
        static CreateSphere(dd) {
          throw (0, Pd.n)("sphereBuilder")
        }
        static CreateCylinder(dd) {
          throw (0, Pd.n)("cylinderBuilder")
        }
        static CreateTorus(dd) {
          throw (0, Pd.n)("torusBuilder")
        }
        static CreateLineSystem(dd) {
          throw (0, Pd.n)("linesBuilder")
        }
        static CreateDashedLines(dd) {
          throw (0, Pd.n)("linesBuilder")
        }
        static CreateGround(dd) {
          throw (0, Pd.n)("groundBuilder")
        }
        static CreateTiledGround(dd) {
          throw (0, Pd.n)("groundBuilder")
        }
        static CreateGroundFromHeightMap(dd) {
          throw (0, Pd.n)("groundBuilder")
        }
        static CreatePlane(dd) {
          throw (0, Pd.n)("planeBuilder")
        }
        static CreateDisc(dd) {
          throw (0, Pd.n)("discBuilder")
        }
        static CreatePolygon(dd, Jd, kd, pd, Nd, Wd, Zd) {
          throw (0, Pd.n)("polygonBuilder")
        }
        static CreateIcoSphere(dd) {
          throw (0, Pd.n)("icoSphereBuilder")
        }
        static CreatePolyhedron(dd) {
          throw (0, Pd.n)("polyhedronBuilder")
        }
        static CreateCapsule() {
          arguments.length > 0 && void 0 !== arguments[0] || Nd.n.Up();
          throw (0, Pd.n)("capsuleBuilder")
        }
        static CreateTorusKnot(dd) {
          throw (0, Pd.n)("torusKnotBuilder")
        }
        static ComputeNormals(dd, Jd, kd, pd) {
          let Wd, Pd, Zd, gd, Cd, Kd, od, ld, Qd, Ld, Od, ed, Rd, Id, Gd, vd, xd, qd, Bd, sd, ad = !1,
            Md = !1,
            Fd = !1,
            Yd = !1,
            md = 1,
            bd = 0,
            Sd = null;
          pd && (ad = !!pd.facetNormals, Md = !!pd.facetPositions, Fd = !!pd.facetPartitioning, md = !0 === pd.useRightHandedSystem ? -1 : 1, bd = pd.ratio || 0, Yd = !!pd.depthSort, Sd = pd.distanceTo, Yd && void 0 === Sd && (Sd = Nd.n.Zero()));
          let jd = 0,
            Xd = 0,
            fd = 0,
            nd = 0;
          for (Fd && pd && pd.bbSize && (jd = pd.subDiv.X * bd / pd.bbSize.x, Xd = pd.subDiv.Y * bd / pd.bbSize.y, fd = pd.subDiv.Z * bd / pd.bbSize.z, nd = pd.subDiv.max * pd.subDiv.max, pd.facetPartitioning.length = 0), Wd = 0; Wd < dd.length; Wd++) kd[Wd] = 0;
          const Ud = Jd.length / 3 | 0;
          for (Wd = 0; Wd < Ud; Wd++) {
            if (ed = 3 * Jd[3 * Wd], Rd = ed + 1, Id = ed + 2, Gd = 3 * Jd[3 * Wd + 1], vd = Gd + 1, xd = Gd + 2, qd = 3 * Jd[3 * Wd + 2], Bd = qd + 1, sd = qd + 2, Pd = dd[ed] - dd[Gd], Zd = dd[Rd] - dd[vd], gd = dd[Id] - dd[xd], Cd = dd[qd] - dd[Gd], Kd = dd[Bd] - dd[vd], od = dd[sd] - dd[xd], ld = md * (Zd * od - gd * Kd), Qd = md * (gd * Cd - Pd * od), Ld = md * (Pd * Kd - Zd * Cd), Od = Math.sqrt(ld * ld + Qd * Qd + Ld * Ld), Od = 0 === Od ? 1 : Od, ld /= Od, Qd /= Od, Ld /= Od, ad && pd && (pd.facetNormals[Wd].x = ld, pd.facetNormals[Wd].y = Qd, pd.facetNormals[Wd].z = Ld), Md && pd && (pd.facetPositions[Wd].x = (dd[ed] + dd[Gd] + dd[qd]) / 3, pd.facetPositions[Wd].y = (dd[Rd] + dd[vd] + dd[Bd]) / 3, pd.facetPositions[Wd].z = (dd[Id] + dd[xd] + dd[sd]) / 3), Fd && pd) {
              const Jd = Math.floor((pd.facetPositions[Wd].x - pd.bInfo.minimum.x * bd) * jd),
                kd = Math.floor((pd.facetPositions[Wd].y - pd.bInfo.minimum.y * bd) * Xd),
                Nd = Math.floor((pd.facetPositions[Wd].z - pd.bInfo.minimum.z * bd) * fd),
                Pd = Math.floor((dd[ed] - pd.bInfo.minimum.x * bd) * jd),
                Zd = Math.floor((dd[Rd] - pd.bInfo.minimum.y * bd) * Xd),
                gd = Math.floor((dd[Id] - pd.bInfo.minimum.z * bd) * fd),
                Cd = Math.floor((dd[Gd] - pd.bInfo.minimum.x * bd) * jd),
                Kd = Math.floor((dd[vd] - pd.bInfo.minimum.y * bd) * Xd),
                od = Math.floor((dd[xd] - pd.bInfo.minimum.z * bd) * fd),
                ld = Math.floor((dd[qd] - pd.bInfo.minimum.x * bd) * jd),
                Qd = Math.floor((dd[Bd] - pd.bInfo.minimum.y * bd) * Xd),
                Ld = Math.floor((dd[sd] - pd.bInfo.minimum.z * bd) * fd),
                Od = Pd + pd.subDiv.max * Zd + nd * gd,
                ad = Cd + pd.subDiv.max * Kd + nd * od,
                Md = ld + pd.subDiv.max * Qd + nd * Ld,
                Fd = Jd + pd.subDiv.max * kd + nd * Nd;
              pd.facetPartitioning[Fd] = pd.facetPartitioning[Fd] ? pd.facetPartitioning[Fd] : [], pd.facetPartitioning[Od] = pd.facetPartitioning[Od] ? pd.facetPartitioning[Od] : [], pd.facetPartitioning[ad] = pd.facetPartitioning[ad] ? pd.facetPartitioning[ad] : [], pd.facetPartitioning[Md] = pd.facetPartitioning[Md] ? pd.facetPartitioning[Md] : [], pd.facetPartitioning[Od].push(Wd), ad != Od && pd.facetPartitioning[ad].push(Wd), Md != ad && Md != Od && pd.facetPartitioning[Md].push(Wd), Fd != Od && Fd != ad && Fd != Md && pd.facetPartitioning[Fd].push(Wd)
            }
            if (Yd && pd && pd.facetPositions) {
              const dd = pd.depthSortedFacets[Wd];
              dd.ind = 3 * Wd, dd.sqDistance = Nd.n.DistanceSquared(pd.facetPositions[Wd], Sd)
            }
            kd[ed] += ld, kd[Rd] += Qd, kd[Id] += Ld, kd[Gd] += ld, kd[vd] += Qd, kd[xd] += Ld, kd[qd] += ld, kd[Bd] += Qd, kd[sd] += Ld
          }
          for (Wd = 0; Wd < kd.length / 3; Wd++) ld = kd[3 * Wd], Qd = kd[3 * Wd + 1], Ld = kd[3 * Wd + 2], Od = Math.sqrt(ld * ld + Qd * Qd + Ld * Ld), Od = 0 === Od ? 1 : Od, ld /= Od, Qd /= Od, Ld /= Od, kd[3 * Wd] = ld, kd[3 * Wd + 1] = Qd, kd[3 * Wd + 2] = Ld
        }
        static _ComputeSides(Jd, kd, pd, Wd, Pd, Zd, gd) {
          const Cd = pd.length,
            Kd = Wd.length;
          let od, ld;
          switch (Jd = Jd || dd.DEFAULTSIDE) {
            case dd.FRONTSIDE:
              break;
            case dd.BACKSIDE:
              for (od = 0; od < Cd; od += 3) {
                const dd = pd[od];
                pd[od] = pd[od + 2], pd[od + 2] = dd
              }
              for (ld = 0; ld < Kd; ld++) Wd[ld] = -Wd[ld];
              break;
            case dd.DOUBLESIDE: {
              const dd = kd.length,
                Jd = dd / 3;
              for (let pd = 0; pd < dd; pd++) kd[dd + pd] = kd[pd];
              for (od = 0; od < Cd; od += 3) pd[od + Cd] = pd[od + 2] + Jd, pd[od + 1 + Cd] = pd[od + 1] + Jd, pd[od + 2 + Cd] = pd[od] + Jd;
              for (ld = 0; ld < Kd; ld++) Wd[Kd + ld] = -Wd[ld];
              const Qd = Pd.length;
              let Ld;
              for (Ld = 0; Ld < Qd; Ld++) Pd[Ld + Qd] = Pd[Ld];
              for (Zd = Zd || new Nd.o(0, 0, 1, 1), gd = gd || new Nd.o(0, 0, 1, 1), Ld = 0, od = 0; od < Qd / 2; od++) Pd[Ld] = Zd.x + (Zd.z - Zd.x) * Pd[Ld], Pd[Ld + 1] = Zd.y + (Zd.w - Zd.y) * Pd[Ld + 1], Pd[Ld + Qd] = gd.x + (gd.z - gd.x) * Pd[Ld + Qd], Pd[Ld + Qd + 1] = gd.y + (gd.w - gd.y) * Pd[Ld + Qd + 1], Ld += 2;
              break
            }
          }
        }
        static Parse(Jd) {
          const kd = new dd,
            pd = Jd.positions;
          pd && kd.set(pd, Wd.j.PositionKind);
          const Nd = Jd.normals;
          Nd && kd.set(Nd, Wd.j.NormalKind);
          const Pd = Jd.tangents;
          Pd && kd.set(Pd, Wd.j.TangentKind);
          const gd = Jd.uvs;
          gd && kd.set(gd, Wd.j.UVKind);
          const Cd = Jd.uvs2;
          Cd && kd.set(Cd, Wd.j.UV2Kind);
          const Kd = Jd.uvs3;
          Kd && kd.set(Kd, Wd.j.UV3Kind);
          const od = Jd.uvs4;
          od && kd.set(od, Wd.j.UV4Kind);
          const ld = Jd.uvs5;
          ld && kd.set(ld, Wd.j.UV5Kind);
          const Ld = Jd.uvs6;
          Ld && kd.set(Ld, Wd.j.UV6Kind);
          const Od = Jd.colors;
          Od && (kd.set(Zd.g.CheckColors4(Od, pd.length / 3), Wd.j.ColorKind), void 0 !== Jd.hasVertexAlpha && (kd.hasVertexAlpha = Jd.hasVertexAlpha));
          const ed = Jd.matricesIndices;
          ed && kd.set(ed, Wd.j.MatricesIndicesKind);
          const Rd = Jd.matricesWeights;
          Rd && kd.set(Rd, Wd.j.MatricesWeightsKind);
          const Id = Jd.indices;
          Id && (kd.indices = Id);
          const Gd = Jd.materialInfos;
          if (Gd) {
            kd.materialInfos = [];
            for (const dd of Gd) {
              const Jd = new Qd;
              Jd.indexCount = dd.indexCount, Jd.indexStart = dd.indexStart, Jd.verticesCount = dd.verticesCount, Jd.verticesStart = dd.verticesStart, Jd.materialIndex = dd.materialIndex, kd.materialInfos.push(Jd)
            }
          }
          return kd
        }
        static ImportVertexData(Jd, kd) {
          const pd = dd.Parse(Jd);
          kd.setAllVerticesData(pd, Jd.updatable)
        }
      }, (() => {
        const Nd = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Jd = [Cd.h.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], kd = [Cd.h.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], Ld = [Cd.h.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], Od = [Cd.h.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], (0, pd.h)(dd, null, Jd, {
          kind: "method",
          name: "_TransformVector3Coordinates",
          static: !0,
          private: !1,
          access: {
            has: dd => "_TransformVector3Coordinates" in dd,
            get: dd => dd._TransformVector3Coordinates
          },
          metadata: Nd
        }, null, ed), (0, pd.h)(dd, null, kd, {
          kind: "method",
          name: "_TransformVector3Normals",
          static: !0,
          private: !1,
          access: {
            has: dd => "_TransformVector3Normals" in dd,
            get: dd => dd._TransformVector3Normals
          },
          metadata: Nd
        }, null, ed), (0, pd.h)(dd, null, Ld, {
          kind: "method",
          name: "_TransformVector4Normals",
          static: !0,
          private: !1,
          access: {
            has: dd => "_TransformVector4Normals" in dd,
            get: dd => dd._TransformVector4Normals
          },
          metadata: Nd
        }, null, ed), (0, pd.h)(dd, null, Od, {
          kind: "method",
          name: "_FlipFaces",
          static: !0,
          private: !1,
          access: {
            has: dd => "_FlipFaces" in dd,
            get: dd => dd._FlipFaces
          },
          metadata: Nd
        }, null, ed), Nd && Object.defineProperty(dd, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Nd
        })
      })(), dd.FRONTSIDE = ((0, pd.i)(dd, ed), 0), dd.BACKSIDE = 1, dd.DOUBLESIDE = 2, dd.DEFAULTSIDE = 0, dd._UniqueIdGenerator = 0, dd
    })()
  },
  40475: (dd, Jd, kd) => {
    var pd = kd(37251),
      Nd = kd(38812),
      Wd = kd(40292),
      Pd = kd(40393),
      Zd = kd(40115);
    const gd = "bakedVertexAnimationSettingsInstanced";

    function Cd(dd) {
      const Jd = dd.bakedVertexAnimationManager?.texture?.getInternalTexture()?._bufferView;
      return Jd instanceof Float32Array || Jd instanceof Uint16Array
    }

    function Kd(dd, Jd, kd, pd) {
      kd.o5(Number.POSITIVE_INFINITY), pd.o5(Number.NEGATIVE_INFINITY);
      for (let Nd = 0; Nd < 3 * Jd; Nd += 3) {
        const Jd = dd[Nd],
          Wd = dd[Nd + 1],
          Pd = dd[Nd + 2];
        Jd < kd.x && (kd.x = Jd), Wd < kd.y && (kd.y = Wd), Pd < kd.z && (kd.z = Pd), Jd > pd.x && (pd.x = Jd), Wd > pd.y && (pd.y = Wd), Pd > pd.z && (pd.z = Pd)
      }
    }

    function od(dd, Jd, kd) {
      kd && (dd.x -= dd.x * kd.x + kd.y, dd.y -= dd.y * kd.x + kd.y, dd.z -= dd.z * kd.x + kd.y, Jd.x += Jd.x * kd.x + kd.y, Jd.y += Jd.y * kd.x + kd.y, Jd.z += Jd.z * kd.x + kd.y)
    }

    function ld(dd, Jd, kd, Nd, Wd) {
      const Pd = pd.h.IL[7],
        Zd = pd.h.IL[8];
      for (let gd = 0; gd < 2; ++gd)
        for (let Cd = 0; Cd < 2; ++Cd)
          for (let Kd = 0; Kd < 2; ++Kd) Pd.set(gd ? Jd.x : dd.x, Cd ? Jd.y : dd.y, Kd ? Jd.z : dd.z), pd.n.TransformCoordinatesToRef(Pd, kd, Zd), Nd.minimizeInPlace(Zd), Wd.maximizeInPlace(Zd)
    }

    function Qd(dd, Jd, kd, Nd, Wd) {
      const Pd = pd.h.IL[7];
      for (let Zd = 0; Zd < 3 * Jd; Zd += 3) pd.n.TransformCoordinatesFromFloatsToRef(dd[Zd], dd[Zd + 1], dd[Zd + 2], kd, Pd), Nd.minimizeInPlace(Pd), Wd.maximizeInPlace(Pd)
    }
    let Ld = !1;
    Ld || (Ld = !0, Pd.b.prototype.thinInstanceAdd = function(dd) {
      let Jd = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (!this.Wm().eL().getCaps().instancedArrays) return Nd.c.Error("Thin Instances are not supported on this device as Instanced Array extension not supported"), -1;
      this._thinInstanceUpdateBufferSize("matrix", Array.isArray(dd) ? dd.length : 1);
      const kd = this._thinInstanceDataStorage.instancesCount;
      if (Array.isArray(dd))
        for (let pd = 0; pd < dd.length; ++pd) this.thinInstanceSetMatrixAt(this._thinInstanceDataStorage.instancesCount++, dd[pd], pd === dd.length - 1 && Jd);
      else this.thinInstanceSetMatrixAt(this._thinInstanceDataStorage.instancesCount++, dd, Jd);
      return kd
    }, Pd.b.prototype.thinInstanceAddSelf = function() {
      let dd = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      return this.thinInstanceAdd(pd.b.IdentityReadOnly, dd)
    }, Pd.b.prototype.thinInstanceRegisterAttribute = function(dd, Jd) {
      dd === Zd.j.ColorKind && (dd = Zd.j.ColorInstanceKind), this.removeVerticesData(dd), this._thinInstanceInitializeUserStorage(), this._userThinInstanceBuffersStorage.strides[dd] = Jd, this._userThinInstanceBuffersStorage.sizes[dd] = Jd * Math.max(32, this._thinInstanceDataStorage.instancesCount), this._userThinInstanceBuffersStorage.data[dd] = new Float32Array(this._userThinInstanceBuffersStorage.sizes[dd]), this._userThinInstanceBuffersStorage.vertexBuffers[dd] = new Zd.j(this.eL(), this._userThinInstanceBuffersStorage.data[dd], dd, !0, !1, Jd, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[dd])
    }, Pd.b.prototype.thinInstanceSetMatrixAt = function(dd, Jd) {
      let kd = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      if (!this._thinInstanceDataStorage.matrixData || dd >= this._thinInstanceDataStorage.instancesCount) return !1;
      const pd = this._thinInstanceDataStorage.matrixData;
      return Jd.copyToArray(pd, 16 * dd), this._thinInstanceDataStorage.worldMatrices && (this._thinInstanceDataStorage.worldMatrices[dd] = Jd), kd && (this.X3("matrix"), this.xL || this.thinInstanceRefreshBoundingInfo(!1)), !0
    }, Pd.b.prototype.thinInstanceSetAttributeAt = function(dd, Jd, kd) {
      let pd = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      return dd === Zd.j.ColorKind && (dd = Zd.j.ColorInstanceKind), !(!this._userThinInstanceBuffersStorage || !this._userThinInstanceBuffersStorage.data[dd] || Jd >= this._thinInstanceDataStorage.instancesCount) && (this._thinInstanceUpdateBufferSize(dd, 0), this._userThinInstanceBuffersStorage.data[dd].set(kd, Jd * this._userThinInstanceBuffersStorage.strides[dd]), pd && this.X3(dd), !0)
    }, Object.defineProperty(Pd.b.prototype, "W8", {
      get: function() {
        return this._thinInstanceDataStorage.instancesCount
      },
      set: function(dd) {
        const Jd = this._thinInstanceDataStorage.matrixData ?? this.source?._thinInstanceDataStorage.matrixData;
        dd <= (Jd ? Jd.length / 16 : 0) && (this._thinInstanceDataStorage.instancesCount = dd)
      },
      enumerable: !0,
      configurable: !0
    }), Pd.b.prototype._thinInstanceCreateMatrixBuffer = function(dd, Jd) {
      let kd = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      const pd = new Zd.e(this.eL(), Jd, !kd, 16, !1, !0);
      for (let Nd = 0; Nd < 4; Nd++) this.setVerticesBuffer(pd.createVertexBuffer(dd + Nd, 4 * Nd, 4));
      return pd
    }, Pd.b.prototype.i6 = function(dd, Jd) {
      let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        pd = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      if (kd = kd || 16, "matrix" === dd) this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = null, this._thinInstanceDataStorage.matrixBufferSize = Jd ? Jd.length : 32 * kd, this._thinInstanceDataStorage.matrixData = Jd, this._thinInstanceDataStorage.worldMatrices = null, null !== Jd ? (this._thinInstanceDataStorage.instancesCount = Jd.length / kd, this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", Jd, pd), this.xL || this.thinInstanceRefreshBoundingInfo(!1)) : (this._thinInstanceDataStorage.instancesCount = 0, this.xL || this.refreshBoundingInfo());
      else if ("previousMatrix" === dd) this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = null, this._thinInstanceDataStorage.previousMatrixData = Jd, null !== Jd && (this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", Jd, pd));
      else if ("splatIndex" === dd && Jd) {
        this._thinInstanceInitializeUserStorage(), this._thinInstanceDataStorage.instancesCount = Jd.length / kd, this._userThinInstanceBuffersStorage.data[dd] = Jd, this._userThinInstanceBuffersStorage.strides[dd] = kd, this._userThinInstanceBuffersStorage.sizes[dd] = Jd.length;
        const pd = new Zd.e(this.eL(), Jd, !0, 16, !1, !0);
        this._thinInstanceDataStorage.matrixBuffer = pd;
        for (let Jd = 0; Jd < 4; Jd++) this.setVerticesBuffer(pd.createVertexBuffer(dd + Jd, 4 * Jd, 4))
      } else dd === Zd.j.ColorKind && (dd = Zd.j.ColorInstanceKind), null === Jd ? this._userThinInstanceBuffersStorage?.data[dd] && (this.removeVerticesData(dd), delete this._userThinInstanceBuffersStorage.data[dd], delete this._userThinInstanceBuffersStorage.strides[dd], delete this._userThinInstanceBuffersStorage.sizes[dd], delete this._userThinInstanceBuffersStorage.vertexBuffers[dd]) : (this._thinInstanceInitializeUserStorage(), this._userThinInstanceBuffersStorage.data[dd] = Jd, this._userThinInstanceBuffersStorage.strides[dd] = kd, this._userThinInstanceBuffersStorage.sizes[dd] = Jd.length, this._userThinInstanceBuffersStorage.vertexBuffers[dd] = new Zd.j(this.eL(), Jd, dd, !pd, !1, kd, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[dd]))
    }, Pd.b.prototype.X3 = function(dd) {
      "matrix" === dd ? (this.thinInstanceAllowAutomaticStaticBufferRecreation && this._thinInstanceDataStorage.matrixBuffer && !this._thinInstanceDataStorage.matrixBuffer.isUpdatable() && this._thinInstanceRecreateBuffer(dd), this._thinInstanceDataStorage.matrixBuffer?.updateDirectly(this._thinInstanceDataStorage.matrixData, 0, this._thinInstanceDataStorage.instancesCount)) : "previousMatrix" === dd ? (this.thinInstanceAllowAutomaticStaticBufferRecreation && this._thinInstanceDataStorage.previousMatrixBuffer && !this._thinInstanceDataStorage.previousMatrixBuffer.isUpdatable() && this._thinInstanceRecreateBuffer(dd), this._thinInstanceDataStorage.previousMatrixBuffer?.updateDirectly(this._thinInstanceDataStorage.previousMatrixData, 0, this._thinInstanceDataStorage.instancesCount)) : "splatIndex" === dd ? this._thinInstanceDataStorage.matrixBuffer?.updateDirectly(this._userThinInstanceBuffersStorage.data[dd], 0, this._thinInstanceDataStorage.instancesCount) : (dd === Zd.j.ColorKind && (dd = Zd.j.ColorInstanceKind), this._userThinInstanceBuffersStorage?.vertexBuffers[dd] && (this.thinInstanceAllowAutomaticStaticBufferRecreation && !this._userThinInstanceBuffersStorage.vertexBuffers[dd].isUpdatable() && this._thinInstanceRecreateBuffer(dd), this._userThinInstanceBuffersStorage.vertexBuffers[dd].updateDirectly(this._userThinInstanceBuffersStorage.data[dd], 0)))
    }, Pd.b.prototype.thinInstancePartialBufferUpdate = function(dd, Jd, kd) {
      if ("matrix" === dd) this._thinInstanceDataStorage.matrixBuffer && ("number" === typeof Jd ? this._thinInstanceDataStorage.matrixBuffer.updateDirectly(new Float32Array(this._thinInstanceDataStorage.matrixData.buffer, this._thinInstanceDataStorage.matrixData.byteOffset + 16 * kd * Float32Array.BYTES_PER_ELEMENT, 16 * Jd), 16 * kd) : this._thinInstanceDataStorage.matrixBuffer.updateDirectly(Jd, kd));
      else if (dd === Zd.j.ColorKind && (dd = Zd.j.ColorInstanceKind), this._userThinInstanceBuffersStorage?.vertexBuffers[dd]) {
        const pd = this._userThinInstanceBuffersStorage.vertexBuffers[dd];
        if ("number" === typeof Jd) {
          const pd = new Float32Array(this._userThinInstanceBuffersStorage.data[dd].buffer, this._userThinInstanceBuffersStorage.data[dd].byteOffset + kd * this._userThinInstanceBuffersStorage.strides[dd] * Float32Array.BYTES_PER_ELEMENT, Jd * this._userThinInstanceBuffersStorage.strides[dd]);
          this._userThinInstanceBuffersStorage.vertexBuffers[dd].updateDirectly(pd, kd * this._userThinInstanceBuffersStorage.strides[dd])
        } else pd.updateDirectly(Jd, kd)
      }
    }, Pd.b.prototype.thinInstanceGetWorldMatrices = function() {
      if (!this._thinInstanceDataStorage.matrixData || !this._thinInstanceDataStorage.matrixBuffer) return [];
      const dd = this._thinInstanceDataStorage.matrixData;
      if (!this._thinInstanceDataStorage.worldMatrices) {
        this._thinInstanceDataStorage.worldMatrices = [];
        for (let Jd = 0; Jd < this._thinInstanceDataStorage.instancesCount; ++Jd) this._thinInstanceDataStorage.worldMatrices[Jd] = pd.b.FromArray(dd, 16 * Jd)
      }
      return this._thinInstanceDataStorage.worldMatrices
    }, Pd.b.prototype.thinInstanceRefreshBoundingInfo = function() {
      let dd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        Jd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        kd = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        Nd = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!this._thinInstanceDataStorage.matrixData || !this._thinInstanceDataStorage.matrixBuffer) return;
      const Pd = this._thinInstanceDataStorage.boundingVectors;
      if (dd || !this.rawBoundingInfo) {
        if (Pd.length = 0, Nd && function(dd, Jd, kd) {
            const Nd = dd._userThinInstanceBuffersStorage,
              Pd = Nd?.data[gd],
              Ld = Nd?.strides[gd];
            if (!Pd || !Ld || Ld < 4 || !Cd(dd)) return !1;
            const Od = dd._thinInstanceDataStorage.matrixData;
            if (!Od) return !1;
            const ed = {},
              Rd = pd.h.Vector4[0],
              Id = pd.h.IL[1],
              Gd = pd.h.IL[2],
              vd = pd.h.IL[3],
              xd = pd.h.IL[4],
              qd = pd.h.IL[5],
              Bd = pd.h.IL[6],
              sd = pd.h.Matrix[2],
              ad = dd.geometry ? dd.geometry.boundingBias : null,
              Md = dd.getTotalVertices();
            Id.o5(Number.POSITIVE_INFINITY), Gd.o5(Number.NEGATIVE_INFINITY), vd.o5(Number.POSITIVE_INFINITY), xd.o5(Number.NEGATIVE_INFINITY);
            for (let Wd = 0; Wd < dd._thinInstanceDataStorage.instancesCount; ++Wd) {
              const Jd = Wd * Ld;
              Rd.set(Pd[Jd], Pd[Jd + 1], Pd[Jd + 2], Pd[Jd + 3]);
              const Nd = dd._getData({
                applyMorph: kd,
                applyBakedVertexAnimation: !0,
                bakedVertexAnimationSettings: Rd,
                updatePositionsArray: !1,
                cache: ed
              }, null, Zd.j.PositionKind);
              if (!Nd) return !1;
              Kd(Nd, Md, qd, Bd), od(qd, Bd, ad), Id.minimizeInPlace(qd), Gd.maximizeInPlace(Bd), pd.b.FromArrayToRef(Od, 16 * Wd, sd), ad ? ld(qd, Bd, sd, vd, xd) : Qd(Nd, Md, sd, vd, xd)
            }
            return !(!isFinite(Id.x) || !isFinite(vd.x)) && (dd.pU().reConstruct(vd, xd), dd.rawBoundingInfo = new Wd.b(Id, Gd), function(dd, Jd) {
              dd.length = 0;
              for (let kd = 0; kd < Jd.boundingBox.vectors.length; ++kd) dd.push(Jd.boundingBox.vectors[kd].clone())
            }(Jd, dd.rawBoundingInfo), dd._updateBoundingInfo(), !0)
          }(this, Pd, kd)) return;
        Nd && this.bakedVertexAnimationManager?.isEnabled && Cd(this) ? this.refreshBoundingInfo({
          applySkeleton: Jd,
          applyMorph: kd,
          applyBakedVertexAnimation: !0,
          updatePositionsArray: !1
        }) : this.refreshBoundingInfo(Jd, kd);
        const dd = this.pU();
        this.rawBoundingInfo = new Wd.b(dd.minimum, dd.maximum)
      }
      const Ld = this.pU(),
        Od = this._thinInstanceDataStorage.matrixData;
      if (0 === Pd.length)
        for (let pd = 0; pd < Ld.boundingBox.vectors.length; ++pd) Pd.push(Ld.boundingBox.vectors[pd].clone());
      pd.h.IL[0].o5(Number.POSITIVE_INFINITY), pd.h.IL[1].o5(Number.NEGATIVE_INFINITY);
      for (let Wd = 0; Wd < this._thinInstanceDataStorage.instancesCount; ++Wd) {
        pd.b.FromArrayToRef(Od, 16 * Wd, pd.h.Matrix[0]);
        for (let dd = 0; dd < Pd.length; ++dd) pd.n.TransformCoordinatesToRef(Pd[dd], pd.h.Matrix[0], pd.h.IL[2]), pd.h.IL[0].minimizeInPlace(pd.h.IL[2]), pd.h.IL[1].maximizeInPlace(pd.h.IL[2])
      }
      Ld.reConstruct(pd.h.IL[0], pd.h.IL[1]), this._updateBoundingInfo()
    }, Pd.b.prototype._thinInstanceRecreateBuffer = function(dd) {
      let Jd = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      "matrix" === dd ? (this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", this._thinInstanceDataStorage.matrixData, Jd)) : "previousMatrix" === dd ? this._scene.needsPreviousWorldMatrices && (this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", this._thinInstanceDataStorage.previousMatrixData ?? this._thinInstanceDataStorage.matrixData, Jd)) : (dd === Zd.j.ColorKind && (dd = Zd.j.ColorInstanceKind), this._userThinInstanceBuffersStorage.vertexBuffers[dd]?.dispose(), this._userThinInstanceBuffersStorage.vertexBuffers[dd] = new Zd.j(this.eL(), this._userThinInstanceBuffersStorage.data[dd], dd, !Jd, !1, this._userThinInstanceBuffersStorage.strides[dd], !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[dd]))
    }, Pd.b.prototype._thinInstanceUpdateBufferSize = function(dd) {
      let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      dd === Zd.j.ColorKind && (dd = Zd.j.ColorInstanceKind);
      const kd = "matrix" === dd;
      if (!kd && (!this._userThinInstanceBuffersStorage || !this._userThinInstanceBuffersStorage.strides[dd])) return;
      const pd = kd ? 16 : this._userThinInstanceBuffersStorage.strides[dd],
        Nd = kd ? this._thinInstanceDataStorage.matrixBufferSize : this._userThinInstanceBuffersStorage.sizes[dd];
      let Wd = kd ? this._thinInstanceDataStorage.matrixData : this._userThinInstanceBuffersStorage.data[dd];
      const Pd = (this._thinInstanceDataStorage.instancesCount + Jd) * pd;
      let gd = Nd;
      for (; gd < Pd;) gd *= 2;
      if (!Wd || Nd != gd) {
        if (Wd) {
          const dd = new Float32Array(gd);
          dd.set(Wd, 0), Wd = dd
        } else Wd = new Float32Array(gd);
        kd ? (this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", Wd, !1), this._thinInstanceDataStorage.matrixData = Wd, this._thinInstanceDataStorage.matrixBufferSize = gd, this._scene.needsPreviousWorldMatrices && !this._thinInstanceDataStorage.previousMatrixData && (this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", Wd, !1))) : (this._userThinInstanceBuffersStorage.vertexBuffers[dd]?.dispose(), this._userThinInstanceBuffersStorage.data[dd] = Wd, this._userThinInstanceBuffersStorage.sizes[dd] = gd, this._userThinInstanceBuffersStorage.vertexBuffers[dd] = new Zd.j(this.eL(), Wd, dd, !0, !1, pd, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[dd]))
      }
    }, Pd.b.prototype._thinInstanceInitializeUserStorage = function() {
      this._userThinInstanceBuffersStorage || (this._userThinInstanceBuffersStorage = {
        data: {},
        sizes: {},
        vertexBuffers: {},
        strides: {}
      })
    }, Pd.b.prototype._disposeThinInstanceSpecificData = function() {
      this._thinInstanceDataStorage?.matrixBuffer && (this._thinInstanceDataStorage.matrixBuffer.dispose(), this._thinInstanceDataStorage.matrixBuffer = null), this._thinInstanceDataStorage?.previousMatrixBuffer && (this._thinInstanceDataStorage.previousMatrixBuffer.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = null)
    })
  },
  40428: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Id,
      d: () => Od
    });
    var pd, Nd, Wd, Pd, Zd = kd(39964),
      gd = kd(39966),
      Cd = kd(39983),
      Kd = kd(37280),
      od = kd(37251),
      ld = kd(40205),
      Qd = kd(37303),
      Ld = kd(39860);
    let Od = (() => {
      var dd;
      let Jd, kd, pd, Nd, Wd, Pd, Qd, Ld, Od, ed = ld.c,
        Rd = [],
        Id = [],
        Gd = [],
        vd = [],
        xd = [],
        qd = [],
        Bd = [],
        sd = [],
        ad = [],
        Md = [],
        Fd = [],
        Yd = [],
        md = [],
        bd = [],
        Sd = [],
        jd = [],
        Xd = [],
        fd = [];
      return dd = class extends ed {
        get billboardMode() {
          return this._billboardMode
        }
        set billboardMode(Jd) {
          this._billboardMode !== Jd && (this._billboardMode = Jd, this._cache.useBillboardPosition = 0 !== (this._billboardMode & dd.BILLBOARDMODE_USE_POSITION))
        }
        get infiniteDistance() {
          return this._infiniteDistance
        }
        set infiniteDistance(dd) {
          this._infiniteDistance !== dd && (this._infiniteDistance = dd)
        }
        constructor(Jd) {
          let kd = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          super(Jd, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, !1), this._forward = new od.n(0, 0, 1), this._up = new od.n(0, 1, 0), this._right = new od.n(1, 0, 0), this._position = (0, Zd.i)(this, Rd, od.n.Zero()), this._rotation = ((0, Zd.i)(this, Id), (0, Zd.i)(this, Gd, od.n.Zero())), this._rotationQuaternion = ((0, Zd.i)(this, vd), (0, Zd.i)(this, xd, null)), this._scaling = ((0, Zd.i)(this, qd), (0, Zd.i)(this, Bd, od.n.One())), this._transformToBoneReferal = ((0, Zd.i)(this, sd), null), this._isAbsoluteSynced = !1, this._billboardMode = (0, Zd.i)(this, ad, dd.BILLBOARDMODE_NONE), this.scalingDeterminant = ((0, Zd.i)(this, Md), (0, Zd.i)(this, Fd, 1)), this._infiniteDistance = ((0, Zd.i)(this, Yd), (0, Zd.i)(this, md, !1)), this.ignoreNonUniformScaling = ((0, Zd.i)(this, bd), (0, Zd.i)(this, Sd, !1)), this.reIntegrateRotationIntoRotationQuaternion = ((0, Zd.i)(this, jd), (0, Zd.i)(this, Xd, !1)), this._poseMatrix = ((0, Zd.i)(this, fd), null), this._localMatrix = od.b.Zero(), this._usePivotMatrix = !1, this._absolutePosition = od.n.Zero(), this._absoluteScaling = od.n.Zero(), this._absoluteRotationQuaternion = od.d.Identity(), this._pivotMatrix = od.b.Identity(), this._postMultiplyPivotMatrix = !1, this._isWorldMatrixFrozen = !1, this._indexInSceneTransformNodesArray = -1, this.onAfterWorldMatrixUpdateObservable = new Kd.e, this._nonUniformScaling = !1, kd && this.Wm().addTransformNode(this)
        }
        getClassName() {
          return "TransformNode"
        }
        get position() {
          return this._position
        }
        set position(dd) {
          this._position = dd, this._markAsDirtyInternal()
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
        set rotation(dd) {
          this._rotation = dd, this._rotationQuaternion = null, this._markAsDirtyInternal()
        }
        get fp() {
          return this._scaling
        }
        set fp(dd) {
          this._scaling = dd, this._markAsDirtyInternal()
        }
        get rotationQuaternion() {
          return this._rotationQuaternion
        }
        set rotationQuaternion(dd) {
          this._rotationQuaternion = dd, dd && this._rotation.o5(0), this._markAsDirtyInternal()
        }
        _markAsDirtyInternal() {
          this._isDirty || (this._isDirty = !0, this.customMarkAsDirty && this.customMarkAsDirty())
        }
        get forward() {
          return od.n.TransformNormalFromFloatsToRef(0, 0, this.Wm().useRightHandedSystem ? -1 : 1, this.getWorldMatrix(), this._forward), this._forward.normalize()
        }
        get up() {
          return od.n.TransformNormalFromFloatsToRef(0, 1, 0, this.getWorldMatrix(), this._up), this._up.normalize()
        }
        get right() {
          return od.n.TransformNormalFromFloatsToRef(this.Wm().useRightHandedSystem ? -1 : 1, 0, 0, this.getWorldMatrix(), this._right), this._right.normalize()
        }
        updatePoseMatrix(dd) {
          return this._poseMatrix ? (this._poseMatrix.Fs(dd), this) : (this._poseMatrix = dd.clone(), this)
        }
        getPoseMatrix() {
          return this._poseMatrix || (this._poseMatrix = od.b.Identity()), this._poseMatrix
        }
        _isSynchronized() {
          const Jd = this._cache;
          return this._billboardMode === Jd.billboardMode && this._billboardMode === dd.BILLBOARDMODE_NONE && (!Jd.pivotMatrixUpdated && (!this._infiniteDistance && (!this._position._isDirty && (!this._scaling._isDirty && !(this._rotationQuaternion && this._rotationQuaternion._isDirty || this._rotation._isDirty)))))
        }
        _initCache() {
          super._initCache();
          const dd = this._cache;
          dd.localMatrixUpdated = !1, dd.billboardMode = -1, dd.infiniteDistance = !1, dd.useBillboardPosition = !1
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
        setPreTransformMatrix(dd) {
          return this.setPivotMatrix(dd, !1)
        }
        setPivotMatrix(dd) {
          let Jd = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          return this._pivotMatrix.Fs(dd), this._usePivotMatrix = !this._pivotMatrix.isIdentity(), this._cache.pivotMatrixUpdated = !0, this._postMultiplyPivotMatrix = Jd, this._postMultiplyPivotMatrix && (this._pivotMatrixInverse ? this._pivotMatrix.invertToRef(this._pivotMatrixInverse) : this._pivotMatrixInverse = od.b.Invert(this._pivotMatrix)), this
        }
        getPivotMatrix() {
          return this._pivotMatrix
        }
        instantiateHierarchy() {
          let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            Jd = arguments.length > 1 ? arguments[1] : void 0,
            kd = arguments.length > 2 ? arguments[2] : void 0;
          const pd = this.clone("Clone of " + (this.name || this.id), dd || this.parent, !0);
          pd && kd && kd(this, pd);
          for (const Nd of this.getChildTransformNodes(!0)) Nd.instantiateHierarchy(pd, Jd, kd);
          return pd
        }
        Im() {
          let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return dd ? arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (this._rotation.o5(0), this._rotationQuaternion = this._rotationQuaternion || od.d.Identity(), dd.decompose(this._scaling, this._rotationQuaternion, this._position), this.computeWorldMatrix(!0)) : (this._worldMatrix = dd, this._absolutePosition.kdd(this._worldMatrix.m[12], this._worldMatrix.m[13], this._worldMatrix.m[14]), this._afterComputeWorldMatrix()) : (this._isWorldMatrixFrozen = !1, this.computeWorldMatrix(!0)), this._isDirty = !1, this._isWorldMatrixFrozen = !0, this
        }
        unfreezeWorldMatrix() {
          return this._isWorldMatrixFrozen = !1, this.computeWorldMatrix(!0), this
        }
        get APd() {
          return this._isWorldMatrixFrozen
        }
        getAbsolutePosition() {
          return this.computeWorldMatrix(), this._absolutePosition
        }
        setAbsolutePosition(dd) {
          if (!dd) return this;
          let Jd, kd, pd;
          if (void 0 === dd.x) {
            if (arguments.length < 3) return this;
            Jd = arguments[0], kd = arguments[1], pd = arguments[2]
          } else Jd = dd.x, kd = dd.y, pd = dd.z;
          if (this.parent) {
            const dd = od.h.Matrix[0];
            this.parent.getWorldMatrix().invertToRef(dd), od.n.TransformCoordinatesFromFloatsToRef(Jd, kd, pd, dd, this.position)
          } else this.position.x = Jd, this.position.y = kd, this.position.z = pd;
          return this._absolutePosition.Fs(dd), this
        }
        setPositionWithLocalVector(dd) {
          return this.computeWorldMatrix(), this.position = od.n.TransformNormal(dd, this._localMatrix), this
        }
        getPositionExpressedInLocalSpace() {
          this.computeWorldMatrix();
          const dd = od.h.Matrix[0];
          return this._localMatrix.invertToRef(dd), od.n.TransformNormal(this.position, dd)
        }
        locallyTranslate(dd) {
          return this.computeWorldMatrix(!0), this.position = od.n.TransformCoordinates(dd, this._localMatrix), this
        }
        lookAt(Jd) {
          let kd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            pd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            Nd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
            Wd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
          const Pd = dd._LookAtVectorCache,
            Zd = 0 === Wd ? this.position : this.getAbsolutePosition();
          if (Jd.subtractToRef(Zd, Pd), this.setDirection(Pd, kd, pd, Nd), 1 === Wd && this.parent)
            if (this.rotationQuaternion) {
              const dd = od.h.Matrix[0];
              this.rotationQuaternion.toRotationMatrix(dd);
              const Jd = od.h.Matrix[1];
              this.parent.getWorldMatrix().getRotationMatrixToRef(Jd), Jd.invert(), dd.multiplyToRef(Jd, dd), this.rotationQuaternion.fromRotationMatrix(dd)
            } else {
              const dd = od.h.Quaternion[0];
              od.d.FromEulerVectorToRef(this.rotation, dd);
              const Jd = od.h.Matrix[0];
              dd.toRotationMatrix(Jd);
              const kd = od.h.Matrix[1];
              this.parent.getWorldMatrix().getRotationMatrixToRef(kd), kd.invert(), Jd.multiplyToRef(kd, Jd), dd.fromRotationMatrix(Jd), dd.toEulerAnglesToRef(this.rotation)
            } return this
        }
        UH(dd) {
          const Jd = od.n.Zero();
          return this.getDirectionToRef(dd, Jd), Jd
        }
        getDirectionToRef(dd, Jd) {
          return od.n.TransformNormalToRef(dd, this.getWorldMatrix(), Jd), this
        }
        setDirection(dd) {
          let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
          const Nd = -Math.atan2(dd.z, dd.x) + Math.PI / 2,
            Wd = Math.sqrt(dd.x * dd.x + dd.z * dd.z),
            Pd = -Math.atan2(dd.y, Wd);
          return this.rotationQuaternion ? od.d.RotationYawPitchRollToRef(Nd + Jd, Pd + kd, pd, this.rotationQuaternion) : (this.rotation.x = Pd + kd, this.rotation.y = Nd + Jd, this.rotation.z = pd), this
        }
        setPivotPoint(dd) {
          let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          0 == this.Wm().getRenderId() && this.computeWorldMatrix(!0);
          const kd = this.getWorldMatrix();
          if (1 == Jd) {
            const Jd = od.h.Matrix[0];
            kd.invertToRef(Jd), dd = od.n.TransformCoordinates(dd, Jd)
          }
          return this.setPivotMatrix(od.b.Translation(-dd.x, -dd.y, -dd.z), !0)
        }
        getPivotPoint() {
          const dd = od.n.Zero();
          return this.getPivotPointToRef(dd), dd
        }
        getPivotPointToRef(dd) {
          return dd.x = -this._pivotMatrix.m[12], dd.y = -this._pivotMatrix.m[13], dd.z = -this._pivotMatrix.m[14], this
        }
        getAbsolutePivotPoint() {
          const dd = od.n.Zero();
          return this.getAbsolutePivotPointToRef(dd), dd
        }
        getAbsolutePivotPointToRef(dd) {
          return this.getPivotPointToRef(dd), od.n.TransformCoordinatesToRef(dd, this.getWorldMatrix(), dd), this
        }
        dkd(dd) {
          if (this._isDirty) return this;
          if (this._children)
            for (const Jd of this._children) Jd.dkd(dd);
          return super.dkd(dd)
        }
        setParent(Jd) {
          let kd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            pd = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          if (!Jd && !this.parent) return this;
          const Nd = od.h.Quaternion[0],
            Wd = od.h.IL[0],
            Pd = od.h.IL[1],
            Zd = od.h.Matrix[1];
          od.b.IdentityToRef(Zd);
          const gd = od.h.Matrix[0];
          this.computeWorldMatrix(!0);
          let Cd = this.rotationQuaternion;
          return Cd || (Cd = dd._TmpRotation, od.d.RotationYawPitchRollToRef(this._rotation.y, this._rotation.x, this._rotation.z, Cd)), od.b.ComposeToRef(this.fp, Cd, this.position, gd), this.parent && gd.multiplyToRef(this.parent.computeWorldMatrix(!0), gd), Jd && (Jd.computeWorldMatrix(!0).invertToRef(Zd), gd.multiplyToRef(Zd, gd)), gd.decompose(Pd, Nd, Wd, kd ? this : void 0), this.rotationQuaternion ? this.rotationQuaternion.Fs(Nd) : Nd.toEulerAnglesToRef(this.rotation), this.fp.Fs(Pd), this.position.Fs(Wd), this.parent = Jd, pd && this.setPivotMatrix(od.b.Identity()), this
        }
        addChild(dd) {
          let Jd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return dd.setParent(this, Jd), this
        }
        removeChild(dd) {
          let Jd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return dd.parent !== this || dd.setParent(null, Jd), this
        }
        get nonUniformScaling() {
          return this._nonUniformScaling
        }
        _updateNonUniformScalingState(dd) {
          return this._nonUniformScaling !== dd && (this._nonUniformScaling = dd, !0)
        }
        attachToBone(dd, Jd) {
          return this._currentParentWhenAttachingToBone = this.parent, this._transformToBoneReferal = Jd, this.parent = dd, dd.getSkeleton().prepare(!0), dd.getFinalMatrix().determinant() < 0 && (this.scalingDeterminant *= -1), this
        }
        detachFromBone() {
          let dd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          return this.parent ? (this.parent.getWorldMatrix().determinant() < 0 && (this.scalingDeterminant *= -1), this._transformToBoneReferal = null, this.parent = dd ? this._currentParentWhenAttachingToBone : null, this) : (dd && (this.parent = this._currentParentWhenAttachingToBone), this)
        }
        rotate(Jd, kd, pd) {
          let Nd;
          if (Jd.normalize(), this.rotationQuaternion || (this.rotationQuaternion = this.rotation.toQuaternion(), this.rotation.o5(0)), pd && 0 !== pd) {
            if (this.parent) {
              const dd = this.parent.getWorldMatrix(),
                pd = od.h.Matrix[0];
              dd.invertToRef(pd), Jd = od.n.TransformNormal(Jd, pd), dd.determinant() < 0 && (kd *= -1)
            }
            Nd = od.d.RotationAxisToRef(Jd, kd, dd._RotationAxisCache), Nd.multiplyToRef(this.rotationQuaternion, this.rotationQuaternion)
          } else Nd = od.d.RotationAxisToRef(Jd, kd, dd._RotationAxisCache), this.rotationQuaternion.multiplyToRef(Nd, this.rotationQuaternion);
          return this
        }
        rotateAround(dd, Jd, kd) {
          Jd.normalize(), this.rotationQuaternion || (this.rotationQuaternion = od.d.RotationYawPitchRoll(this.rotation.y, this.rotation.x, this.rotation.z), this.rotation.o5(0));
          const pd = od.h.IL[0],
            Nd = od.h.IL[1],
            Wd = od.h.IL[2],
            Pd = od.h.Quaternion[0],
            Zd = od.h.Matrix[0],
            gd = od.h.Matrix[1],
            Cd = od.h.Matrix[2],
            Kd = od.h.Matrix[3];
          return dd.subtractToRef(this.position, pd), od.b.TranslationToRef(pd.x, pd.y, pd.z, Zd), od.b.TranslationToRef(-pd.x, -pd.y, -pd.z, gd), od.b.RotationAxisToRef(Jd, kd, Cd), gd.multiplyToRef(Cd, Kd), Kd.multiplyToRef(Zd, Kd), Kd.decompose(Nd, Pd, Wd), this.position.addInPlace(Wd), Pd.multiplyToRef(this.rotationQuaternion, this.rotationQuaternion), this
        }
        translate(dd, Jd, kd) {
          const pd = dd.scale(Jd);
          if (kd && 0 !== kd) this.setAbsolutePosition(this.getAbsolutePosition().add(pd));
          else {
            const dd = this.getPositionExpressedInLocalSpace().add(pd);
            this.setPositionWithLocalVector(dd)
          }
          return this
        }
        addRotation(dd, Jd, kd) {
          let pd;
          this.rotationQuaternion ? pd = this.rotationQuaternion : (pd = od.h.Quaternion[1], od.d.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, this.rotation.z, pd));
          const Nd = od.h.Quaternion[0];
          return od.d.RotationYawPitchRollToRef(Jd, dd, kd, Nd), pd.multiplyInPlace(Nd), this.rotationQuaternion || pd.toEulerAnglesToRef(this.rotation), this
        }
        _getEffectiveParent() {
          return this.parent
        }
        isWorldMatrixCameraDependent() {
          return this._infiniteDistance && !this.parent || this._billboardMode !== dd.BILLBOARDMODE_NONE
        }
        computeWorldMatrix() {
          let Jd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            kd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          if (this._isWorldMatrixFrozen && !this._isDirty) return this._worldMatrix;
          const pd = this.Wm().getRenderId();
          if (!this._isDirty && !Jd && (this._currentRenderId === pd || this.isSynchronized())) return this._currentRenderId = pd, this._worldMatrix;
          kd = kd || this.Wm().activeCamera, this._updateCache();
          const Nd = this._cache;
          Nd.pivotMatrixUpdated = !1, Nd.billboardMode = this.billboardMode, Nd.infiniteDistance = this.infiniteDistance, Nd.parent = this._parentNode, this._currentRenderId = pd, this._childUpdateId += 1, this._isDirty = !1, this._position._isDirty = !1, this._rotation._isDirty = !1, this._scaling._isDirty = !1;
          const Wd = this._getEffectiveParent(),
            Pd = dd._TmpScaling;
          let Zd, gd = this._position;
          if (this._infiniteDistance && !this.parent && kd) {
            const Jd = kd.getWorldMatrix().m;
            gd = dd._TmpTranslation, gd.kdd(this._position.x + Jd[12], this._position.y + Jd[13], this._position.z + Jd[14])
          }
          if (Pd.kdd(this._scaling.x * this.scalingDeterminant, this._scaling.y * this.scalingDeterminant, this._scaling.z * this.scalingDeterminant), this._rotationQuaternion) {
            if (this._rotationQuaternion._isDirty = !1, Zd = this._rotationQuaternion, this.reIntegrateRotationIntoRotationQuaternion) {
              this.rotation.lengthSquared() && (this._rotationQuaternion.multiplyInPlace(od.d.RotationYawPitchRoll(this._rotation.y, this._rotation.x, this._rotation.z)), this._rotation.kdd(0, 0, 0))
            }
          } else Zd = dd._TmpRotation, od.d.RotationYawPitchRollToRef(this._rotation.y, this._rotation.x, this._rotation.z, Zd);
          if (this._usePivotMatrix) {
            const dd = od.h.Matrix[1];
            od.b.ScalingToRef(Pd.x, Pd.y, Pd.z, dd);
            const Jd = od.h.Matrix[0];
            Zd.toRotationMatrix(Jd), this._pivotMatrix.multiplyToRef(dd, od.h.Matrix[4]), od.h.Matrix[4].multiplyToRef(Jd, this._localMatrix), this._postMultiplyPivotMatrix && this._localMatrix.multiplyToRef(this._pivotMatrixInverse, this._localMatrix), this._localMatrix.addTranslationFromFloats(gd.x, gd.y, gd.z)
          } else od.b.ComposeToRef(Pd, Zd, gd, this._localMatrix);
          if (Wd && Wd.getWorldMatrix) {
            if (Jd && Wd.computeWorldMatrix(Jd), this.billboardMode) {
              if (this._transformToBoneReferal) {
                const dd = this.parent;
                dd.getSkeleton().prepare(), dd.getFinalMatrix().multiplyToRef(this._transformToBoneReferal.getWorldMatrix(), od.h.Matrix[7])
              } else od.h.Matrix[7].Fs(Wd.getWorldMatrix());
              const Jd = od.h.IL[5],
                kd = od.h.IL[6],
                pd = od.h.Quaternion[0];
              od.h.Matrix[7].decompose(kd, pd, Jd), od.b.ScalingToRef(kd.x, kd.y, kd.z, od.h.Matrix[7]), od.h.Matrix[7].setTranslation(Jd), dd.BillboardUseParentOrientation && (this._position.applyRotationQuaternionToRef(pd, Jd), this._localMatrix.setTranslation(Jd)), this._localMatrix.multiplyToRef(od.h.Matrix[7], this._worldMatrix)
            } else if (this._transformToBoneReferal) {
              const dd = this.parent;
              dd.getSkeleton().prepare(), this._localMatrix.multiplyToRef(dd.getFinalMatrix(), od.h.Matrix[6]), od.h.Matrix[6].multiplyToRef(this._transformToBoneReferal.getWorldMatrix(), this._worldMatrix)
            } else this._localMatrix.multiplyToRef(Wd.getWorldMatrix(), this._worldMatrix);
            this._markSyncedWithParent()
          } else this._worldMatrix.Fs(this._localMatrix);
          if (kd && this.billboardMode)
            if (Nd.useBillboardPosition) {
              const Jd = od.h.IL[0];
              this._worldMatrix.getTranslationToRef(Jd);
              const pd = kd.globalPosition;
              this._worldMatrix.invertToRef(od.h.Matrix[1]);
              const Nd = od.h.IL[1];
              od.n.TransformCoordinatesToRef(pd, od.h.Matrix[1], Nd), Nd.normalize();
              const Wd = -Math.atan2(Nd.z, Nd.x) + Math.PI / 2,
                Pd = Math.sqrt(Nd.x * Nd.x + Nd.z * Nd.z),
                Zd = -Math.atan2(Nd.y, Pd);
              if (od.d.RotationYawPitchRollToRef(Wd, Zd, 0, od.h.Quaternion[0]), (this.billboardMode & dd.BILLBOARDMODE_ALL) !== dd.BILLBOARDMODE_ALL) {
                const Jd = od.h.IL[1];
                od.h.Quaternion[0].toEulerAnglesToRef(Jd), (this.billboardMode & dd.BILLBOARDMODE_X) !== dd.BILLBOARDMODE_X && (Jd.x = 0), (this.billboardMode & dd.BILLBOARDMODE_Y) !== dd.BILLBOARDMODE_Y && (Jd.y = 0), (this.billboardMode & dd.BILLBOARDMODE_Z) !== dd.BILLBOARDMODE_Z && (Jd.z = 0), od.b.RotationYawPitchRollToRef(Jd.y, Jd.x, Jd.z, od.h.Matrix[0])
              } else od.b.FromQuaternionToRef(od.h.Quaternion[0], od.h.Matrix[0]);
              this._worldMatrix.setTranslationFromFloats(0, 0, 0), this._worldMatrix.multiplyToRef(od.h.Matrix[0], this._worldMatrix), this._worldMatrix.setTranslation(od.h.IL[0])
            } else {
              const Jd = od.h.IL[0];
              this._worldMatrix.getTranslationToRef(Jd), od.h.Matrix[1].Fs(kd.getViewMatrix());
              const pd = this.Wm().useRightHandedSystem;
              if (pd && od.h.Matrix[1].multiplyToRef(dd._TmpRHRestore, od.h.Matrix[1]), od.h.Matrix[1].setTranslationFromFloats(0, 0, 0), od.h.Matrix[1].invertToRef(od.h.Matrix[0]), (this.billboardMode & dd.BILLBOARDMODE_ALL) !== dd.BILLBOARDMODE_ALL) {
                od.h.Matrix[0].decompose(void 0, od.h.Quaternion[0], void 0);
                const Jd = od.h.IL[1];
                od.h.Quaternion[0].toEulerAnglesToRef(Jd), (this.billboardMode & dd.BILLBOARDMODE_X) !== dd.BILLBOARDMODE_X && (Jd.x = 0), (this.billboardMode & dd.BILLBOARDMODE_Y) !== dd.BILLBOARDMODE_Y && (Jd.y = 0), (this.billboardMode & dd.BILLBOARDMODE_Z) !== dd.BILLBOARDMODE_Z && (Jd.z = 0), pd && (Jd.y += Math.PI), od.b.RotationYawPitchRollToRef(Jd.y, Jd.x, Jd.z, od.h.Matrix[0])
              }
              this._worldMatrix.setTranslationFromFloats(0, 0, 0), this._worldMatrix.multiplyToRef(od.h.Matrix[0], this._worldMatrix), this._worldMatrix.setTranslation(od.h.IL[0])
            } return this.ignoreNonUniformScaling ? this._updateNonUniformScalingState(!1) : this._scaling.isNonUniformWithinEpsilon(1e-6) ? this._updateNonUniformScalingState(!0) : Wd && Wd._nonUniformScaling ? this._updateNonUniformScalingState(Wd._nonUniformScaling) : this._updateNonUniformScalingState(!1), this._afterComputeWorldMatrix(), this._absolutePosition.kdd(this._worldMatrix.m[12], this._worldMatrix.m[13], this._worldMatrix.m[14]), this._isAbsoluteSynced = !1, this.onAfterWorldMatrixUpdateObservable.notifyObservers(this), this._poseMatrix || (this._poseMatrix = od.b.Invert(this._worldMatrix)), this._worldMatrixDeterminantIsDirty = !0, this._worldMatrix
        }
        resetLocalMatrix() {
          let dd = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          if (this.computeWorldMatrix(), dd) {
            const dd = this.getChildren();
            for (let Jd = 0; Jd < dd.length; ++Jd) {
              const kd = dd[Jd];
              if (kd) {
                kd.computeWorldMatrix();
                const dd = od.h.Matrix[0];
                kd._localMatrix.multiplyToRef(this._localMatrix, dd);
                const Jd = od.h.Quaternion[0];
                dd.decompose(kd.fp, Jd, kd.position), kd.rotationQuaternion ? kd.rotationQuaternion.Fs(Jd) : Jd.toEulerAnglesToRef(kd.rotation)
              }
            }
          }
          this.fp.kdd(1, 1, 1), this.position.kdd(0, 0, 0), this.rotation.kdd(0, 0, 0), this.rotationQuaternion && (this.rotationQuaternion = od.d.Identity()), this._worldMatrix = od.b.Identity()
        }
        _afterComputeWorldMatrix() {}
        registerAfterWorldMatrixUpdate(dd) {
          return this.onAfterWorldMatrixUpdateObservable.add(dd), this
        }
        unregisterAfterWorldMatrixUpdate(dd) {
          return this.onAfterWorldMatrixUpdateObservable.removeCallback(dd), this
        }
        getPositionInCameraSpace() {
          let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return dd || (dd = this.Wm().activeCamera), od.n.TransformCoordinates(this.getAbsolutePosition(), dd.getViewMatrix())
        }
        getDistanceToCamera() {
          let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return dd || (dd = this.Wm().activeCamera), this.getAbsolutePosition().subtract(dd.globalPosition).length()
        }
        clone(Jd, kd, pd) {
          const Nd = Cd.c.Clone((() => new dd(Jd, this.Wm())), this);
          if (Nd.name = Jd, Nd.id = Jd, kd && (Nd.parent = kd), !pd) {
            const dd = this.getDescendants(!0);
            for (let kd = 0; kd < dd.length; kd++) {
              const pd = dd[kd];
              pd.clone && pd.clone(Jd + "." + pd.name, Nd)
            }
          }
          return Nd
        }
        serialize(dd) {
          const Jd = Cd.c.Serialize(this, dd);
          return Jd.type = this.getClassName(), Jd.uniqueId = this.uniqueId, this.parent && this.parent._serializeAsParent(Jd), Jd.localMatrix = this.getPivotMatrix().spd(), Jd.isEnabled = this.isEnabled(), this._isWorldMatrixFrozen && (Jd.Im = !0), Cd.c.AppendSerializedAnimations(this, Jd), Jd.UO = this.serializeAnimationRanges(), Jd
        }
        getChildTransformNodes(Jd, kd) {
          const pd = [];
          return this._getDescendants(pd, Jd, (Jd => (!kd || kd(Jd)) && Jd instanceof dd)), pd
        }
        dispose(dd) {
          let Jd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this.Wm().stopAnimation(this), this.Wm().removeTransformNode(this), this._parentContainer) {
            const dd = this._parentContainer.transformNodes.indexOf(this);
            dd > -1 && this._parentContainer.transformNodes.splice(dd, 1), this._parentContainer = null
          }
          if (this.onAfterWorldMatrixUpdateObservable.clear(), dd) {
            const dd = this.getChildTransformNodes(!0);
            for (const Jd of dd) Jd.parent = null, Jd.computeWorldMatrix(!0)
          }
          super.dispose(dd, Jd)
        }
        normalizeToUnitCube() {
          let dd = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            Jd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            kd = arguments.length > 2 ? arguments[2] : void 0,
            pd = null,
            Nd = null;
          Jd && (this.rotationQuaternion ? (Nd = this.rotationQuaternion.clone(), this.rotationQuaternion.kdd(0, 0, 0, 1)) : this.rotation && (pd = this.rotation.clone(), this.rotation.kdd(0, 0, 0)));
          const Wd = this.getHierarchyBoundingVectors(dd, kd),
            Pd = Wd.max.subtract(Wd.min),
            Zd = Math.max(Pd.x, Pd.y, Pd.z);
          if (0 === Zd) return this;
          const gd = 1 / Zd;
          return this.fp.scaleInPlace(gd), Jd && (this.rotationQuaternion && Nd ? this.rotationQuaternion.Fs(Nd) : this.rotation && pd && this.rotation.Fs(pd)), this
        }
        _syncAbsoluteScalingAndRotation() {
          this._isAbsoluteSynced || (this._worldMatrix.decompose(this._absoluteScaling, this._absoluteRotationQuaternion), this._isAbsoluteSynced = !0)
        }
      }, (() => {
        const Cd = "function" === typeof Symbol && Symbol.metadata ? Object.create(ed[Symbol.metadata] ?? null) : void 0;
        Jd = [(0, gd.F)("position")], kd = [(0, gd.F)("rotation")], pd = [(0, gd.w)("rotationQuaternion")], Nd = [(0, gd.F)("fp")], Wd = [(0, gd.H)("billboardMode")], Pd = [(0, gd.H)()], Qd = [(0, gd.H)("infiniteDistance")], Ld = [(0, gd.H)()], Od = [(0, gd.H)()], (0, Zd.h)(null, null, Jd, {
          kind: "field",
          name: "_position",
          static: !1,
          private: !1,
          access: {
            has: dd => "_position" in dd,
            get: dd => dd._position,
            set: (dd, Jd) => {
              dd._position = Jd
            }
          },
          metadata: Cd
        }, Rd, Id), (0, Zd.h)(null, null, kd, {
          kind: "field",
          name: "_rotation",
          static: !1,
          private: !1,
          access: {
            has: dd => "_rotation" in dd,
            get: dd => dd._rotation,
            set: (dd, Jd) => {
              dd._rotation = Jd
            }
          },
          metadata: Cd
        }, Gd, vd), (0, Zd.h)(null, null, pd, {
          kind: "field",
          name: "_rotationQuaternion",
          static: !1,
          private: !1,
          access: {
            has: dd => "_rotationQuaternion" in dd,
            get: dd => dd._rotationQuaternion,
            set: (dd, Jd) => {
              dd._rotationQuaternion = Jd
            }
          },
          metadata: Cd
        }, xd, qd), (0, Zd.h)(null, null, Nd, {
          kind: "field",
          name: "_scaling",
          static: !1,
          private: !1,
          access: {
            has: dd => "_scaling" in dd,
            get: dd => dd._scaling,
            set: (dd, Jd) => {
              dd._scaling = Jd
            }
          },
          metadata: Cd
        }, Bd, sd), (0, Zd.h)(null, null, Wd, {
          kind: "field",
          name: "_billboardMode",
          static: !1,
          private: !1,
          access: {
            has: dd => "_billboardMode" in dd,
            get: dd => dd._billboardMode,
            set: (dd, Jd) => {
              dd._billboardMode = Jd
            }
          },
          metadata: Cd
        }, ad, Md), (0, Zd.h)(null, null, Pd, {
          kind: "field",
          name: "scalingDeterminant",
          static: !1,
          private: !1,
          access: {
            has: dd => "scalingDeterminant" in dd,
            get: dd => dd.scalingDeterminant,
            set: (dd, Jd) => {
              dd.scalingDeterminant = Jd
            }
          },
          metadata: Cd
        }, Fd, Yd), (0, Zd.h)(null, null, Qd, {
          kind: "field",
          name: "_infiniteDistance",
          static: !1,
          private: !1,
          access: {
            has: dd => "_infiniteDistance" in dd,
            get: dd => dd._infiniteDistance,
            set: (dd, Jd) => {
              dd._infiniteDistance = Jd
            }
          },
          metadata: Cd
        }, md, bd), (0, Zd.h)(null, null, Ld, {
          kind: "field",
          name: "ignoreNonUniformScaling",
          static: !1,
          private: !1,
          access: {
            has: dd => "ignoreNonUniformScaling" in dd,
            get: dd => dd.ignoreNonUniformScaling,
            set: (dd, Jd) => {
              dd.ignoreNonUniformScaling = Jd
            }
          },
          metadata: Cd
        }, Sd, jd), (0, Zd.h)(null, null, Od, {
          kind: "field",
          name: "reIntegrateRotationIntoRotationQuaternion",
          static: !1,
          private: !1,
          access: {
            has: dd => "reIntegrateRotationIntoRotationQuaternion" in dd,
            get: dd => dd.reIntegrateRotationIntoRotationQuaternion,
            set: (dd, Jd) => {
              dd.reIntegrateRotationIntoRotationQuaternion = Jd
            }
          },
          metadata: Cd
        }, Xd, fd), Cd && Object.defineProperty(dd, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Cd
        })
      })(), dd.BILLBOARDMODE_NONE = 0, dd.BILLBOARDMODE_X = 1, dd.BILLBOARDMODE_Y = 2, dd.BILLBOARDMODE_Z = 4, dd.BILLBOARDMODE_ALL = 7, dd.BILLBOARDMODE_USE_POSITION = 128, dd.BillboardUseParentOrientation = !1, dd._TmpRotation = od.d.Zero(), dd._TmpScaling = od.n.Zero(), dd._TmpTranslation = od.n.Zero(), dd._TmpRHRestore = od.b.Scaling(1, 1, -1), dd._LookAtVectorCache = new od.n(0, 0, 0), dd._RotationAxisCache = new od.d, dd
    })();

    function ed(dd, Jd, kd) {
      const pd = Cd.c.Parse((() => new Od(dd.name, Jd)), dd, Jd, kd);
      if (dd.localMatrix ? pd.setPreTransformMatrix(od.b.FromArray(dd.localMatrix)) : dd.pivotMatrix && pd.setPivotMatrix(od.b.FromArray(dd.pivotMatrix)), pd.XM(dd.isEnabled), pd._waitingParsedUniqueId = dd.uniqueId, void 0 !== dd.parentId && (pd._waitingParentId = dd.parentId), void 0 !== dd.parentInstanceIndex && (pd._waitingParentInstanceIndex = dd.parentInstanceIndex), dd.Im && (pd._waitingFreezeWorldMatrix = dd.Im), dd.animations) {
        for (let Jd = 0; Jd < dd.animations.length; Jd++) {
          const kd = dd.animations[Jd],
            Nd = (0, Qd.e)("BABYLON.Animation");
          Nd && pd.animations.push(Nd.Parse(kd))
        }
        ld.c.ParseAnimationRanges(pd, dd, Jd)
      }
      return dd.autoAnimate && Jd.beginAnimation(pd, dd.autoAnimateFrom, dd.autoAnimateTo, dd.autoAnimateLoop, dd.autoAnimateSpeed || 1), pd
    }
    let Rd = !1;

    function Id() {
      Rd || (Rd = !0, Od.Parse = ed)
    }(pd = Od.prototype).qT ?? (pd.qT = (0, Ld.j)("TransformNode", "qT")), (Nd = Od.prototype).applyImpulse ?? (Nd.applyImpulse = (0, Ld.j)("TransformNode", "applyImpulse")), (Wd = Od.prototype).applyAngularImpulse ?? (Wd.applyAngularImpulse = (0, Ld.j)("TransformNode", "applyAngularImpulse")), (Pd = Od.prototype).applyTorque ?? (Pd.applyTorque = (0, Ld.j)("TransformNode", "applyTorque")), Object.getOwnPropertyDescriptor(Od.prototype, "physicsBody") || Object.defineProperty(Od.prototype, "physicsBody", (0, Ld.g)("TransformNode", "physicsBody"))
  },
  40396: (dd, Jd, kd) => {
    function pd(dd, Jd, kd) {
      try {
        const pd = dd.next();
        pd.done ? Jd(pd) : pd.value ? pd.value.then((() => {
          pd.value = void 0, Jd(pd)
        }), kd) : Jd(pd)
      } catch (pd) {
        kd(pd)
      }
    }

    function Nd() {
      let dd, Jd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 25;
      return (kd, Nd, Wd) => {
        const Pd = performance.now();
        void 0 === dd || Pd - dd > Jd ? (dd = Pd, setTimeout((() => {
          pd(kd, Nd, Wd)
        }), 0)) : pd(kd, Nd, Wd)
      }
    }

    function Wd(dd, Jd, kd, pd, Nd) {
      const Wd = () => {
        let Pd;
        const Zd = dd => {
          dd.done ? kd(dd.value) : void 0 === Pd ? Pd = !0 : Wd()
        };
        do {
          Pd = void 0, Nd && Nd.aborted ? pd(new Error("Aborted")) : Jd(dd, Zd, pd), void 0 === Pd && (Pd = !1)
        } while (Pd)
      };
      Wd()
    }

    function Pd(dd, Jd) {
      let kd;
      return Wd(dd, pd, (dd => kd = dd), (dd => {
        throw dd
      }), Jd), kd
    }
    async function Zd(dd, Jd, kd) {
      return await new Promise(((pd, Nd) => {
        Wd(dd, Jd, pd, Nd, kd)
      }))
    }

    function gd(dd, Jd) {
      return function() {
        return Pd(dd(...arguments), Jd)
      }
    }
    kd.d(Jd, {
      d: () => Nd,
      f: () => gd,
      g: () => Zd,
      k: () => Pd
    })
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);
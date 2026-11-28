export const id = 287;
export const ids = [287];
export const modules = {
  42126: (dd, Od, md) => {
    md.d(Od, {
      e: () => yd,
      i: () => pd
    });
    var Wd = md(41922),
      Fd = md(41931),
      Rd = md(42041),
      Xd = md(38660),
      Kd = md(38636),
      hd = md(42132),
      vd = md(40262),
      Qd = md(38669),
      td = md(41817),
      od = md(39642),
      Nd = md(39297),
      qd = md(41885),
      Hd = md(41948);
    let yd = (() => {
      var dd;
      let Od, md, Qd, yd, bd, Td, pd, Yd, gd, wd, Ed, Jd, Ud, xd, Bd, Sd, sd, ud, Vd = hd.b,
        Ad = [],
        rd = [],
        Gd = [],
        nd = [],
        Ld = [],
        Pd = [],
        zd = [],
        cd = [],
        jd = [],
        Dd = [],
        ed = [],
        Id = [],
        ld = [],
        Cd = [],
        Zd = [],
        kd = [],
        fd = [],
        Md = [],
        dO = [],
        OO = [],
        mO = [],
        WO = [],
        FO = [],
        RO = [],
        XO = [];
      return dd = class extends Vd {
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
          let Od, md;
          if (this.mode === dd.PERSPECTIVE_CAMERA) this.fovMode === dd.FOVMODE_VERTICAL_FIXED ? (md = 2 * this.minZ * Math.tan(this.fov / 2), Od = this.Iq().getAspectRatio(this) * md) : (Od = 2 * this.minZ * Math.tan(this.fov / 2), md = Od / this.Iq().getAspectRatio(this));
          else {
            const dd = this.Iq().getRenderWidth() / 2,
              Wd = this.Iq().getRenderHeight() / 2;
            Od = (this.orthoRight ?? dd) - (this.orthoLeft ?? -dd), md = (this.orthoTop ?? Wd) - (this.orthoBottom ?? -Wd)
          }
          return Od * md
        }
        set orthoLeft(dd) {
          this._orthoLeft = dd;
          for (const Od of this._rigCameras) Od.orthoLeft = dd
        }
        get orthoLeft() {
          return this._orthoLeft
        }
        set orthoRight(dd) {
          this._orthoRight = dd;
          for (const Od of this._rigCameras) Od.orthoRight = dd
        }
        get orthoRight() {
          return this._orthoRight
        }
        set orthoBottom(dd) {
          this._orthoBottom = dd;
          for (const Od of this._rigCameras) Od.orthoBottom = dd
        }
        get orthoBottom() {
          return this._orthoBottom
        }
        set orthoTop(dd) {
          this._orthoTop = dd;
          for (const Od of this._rigCameras) Od.orthoTop = dd
        }
        get orthoTop() {
          return this._orthoTop
        }
        setFocalLength(dd) {
          let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 36;
          this.fov = 2 * Math.atan(Od / (2 * dd))
        }
        get inertia() {
          return this._baseInertia
        }
        set inertia(dd) {
          this._baseInertia = dd
        }
        set mode(dd) {
          this._mode = dd;
          for (const Od of this._rigCameras) Od.mode = dd
        }
        get mode() {
          return this._mode
        }
        get hasMoved() {
          return this._hasMoved
        }
        constructor(Od, md, Fd) {
          let hd = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
          (0, qd.d)(), super(Od, Fd, !1), this.inputs = (0, Wd.k)(this, Ad), this._position = (0, Wd.k)(this, rd, Kd.j.Zero()), this._upVector = ((0, Wd.k)(this, Gd), (0, Wd.k)(this, nd, Kd.j.Up())), this.oblique = ((0, Wd.k)(this, Ld), null), this._orthoLeft = null, this._orthoRight = null, this._orthoBottom = null, this._orthoTop = null, this.fov = (0, Wd.k)(this, Pd, .8), this.projectionPlaneTilt = ((0, Wd.k)(this, zd), (0, Wd.k)(this, cd, 0)), this.minZ = ((0, Wd.k)(this, jd), (0, Wd.k)(this, Dd, 1)), this.maxZ = ((0, Wd.k)(this, ed), (0, Wd.k)(this, Id, 1e4)), this._baseInertia = ((0, Wd.k)(this, ld), .9), this._mode = dd.PERSPECTIVE_CAMERA, this.isIntermediate = !1, this.viewport = new od.b(0, 0, 1, 1), this.layerMask = (0, Wd.k)(this, Cd, 268435455), this.fovMode = ((0, Wd.k)(this, Zd), (0, Wd.k)(this, kd, dd.FOVMODE_VERTICAL_FIXED)), this.cameraRigMode = ((0, Wd.k)(this, fd), (0, Wd.k)(this, Md, dd.RIG_MODE_NONE)), this.interaxialDistance = ((0, Wd.k)(this, dO), (0, Wd.k)(this, OO, void 0)), this.isStereoscopicSideBySide = ((0, Wd.k)(this, mO), (0, Wd.k)(this, WO, void 0)), this.ignoreCameraMaxZ = ((0, Wd.k)(this, FO), (0, Wd.k)(this, RO, !1)), this.customRenderTargets = ((0, Wd.k)(this, XO), []), this.outputRenderTarget = null, this.onViewMatrixChangedObservable = new Xd.c, this.onProjectionMatrixChangedObservable = new Xd.c, this.onAfterCheckInputsObservable = new Xd.c, this.onRestoreStateObservable = new Xd.c, this.isRigCamera = !1, this._hasMoved = !1, this._rigCameras = new Array, this._skipRendering = !1, this._projectionMatrix = new Kd.d, this._postProcesses = new Array, this._activeMeshes = new Rd.e(256), this._globalPosition = Kd.j.Zero(), this._computedViewMatrix = Kd.d.Identity(), this._doNotComputeProjectionMatrix = !1, this._transformMatrix = Kd.d.Zero(), this._refreshFrustumPlanes = !0, this._absoluteRotation = Kd.e.Identity(), this._isCamera = !0, this._isLeftCamera = !1, this._isRightCamera = !1, this.layerMask = this.zV().defaultCameraLayerMask, this.zV().addCamera(this), hd && !this.zV().activeCamera && (this.zV().activeCamera = this), this.position = md, this.renderPassId = this.zV().Iq().createRenderPassId(`Camera ${Od}`)
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
          return "Qb"
        }
        toString(dd) {
          let Od = "Name: " + this.name;
          if (Od += ", type: " + this.getClassName(), this.animations)
            for (let md = 0; md < this.animations.length; md++) Od += ", animation[0]: " + this.animations[md].toString(dd);
          return Od
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
            for (const Od of this._postProcesses)
              if (Od && !Od.isReady()) return !1;
          return super.isReady(dd)
        }
        _initCache() {
          super._initCache(), this._cache.position = new Kd.j(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.upVector = new Kd.j(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.mode = void 0, this._cache.minZ = void 0, this._cache.maxZ = void 0, this._cache.fov = void 0, this._cache.fovMode = void 0, this._cache.aspectRatio = void 0, this._cache.orthoLeft = void 0, this._cache.orthoRight = void 0, this._cache.orthoBottom = void 0, this._cache.orthoTop = void 0, this._cache.obliqueAngle = void 0, this._cache.obliqueLength = void 0, this._cache.obliqueOffset = void 0, this._cache.renderWidth = void 0, this._cache.renderHeight = void 0
        }
        _updateCache(dd) {
          dd || super._updateCache(), this._cache.position.Bx(this.position), this._cache.upVector.Bx(this.upVector)
        }
        _isSynchronized() {
          return this._isSynchronizedViewMatrix() && this._isSynchronizedProjectionMatrix()
        }
        _isSynchronizedViewMatrix() {
          return !!super._isSynchronized() && (this._cache.position.equals(this.position) && this._cache.upVector.equals(this.upVector) && this.isSynchronizedWithParent())
        }
        _isSynchronizedProjectionMatrix() {
          const Od = this.ignoreCameraMaxZ ? 0 : this.maxZ;
          let md = this._cache.mode === this.mode && this._cache.minZ === this.minZ && this._cache.maxZ === Od;
          if (!md) return !1;
          const Wd = this.Iq();
          return this.mode === dd.PERSPECTIVE_CAMERA ? md = this._cache.fov === this.fov && this._cache.fovMode === this.fovMode && this._cache.aspectRatio === Wd.getAspectRatio(this) && this._cache.projectionPlaneTilt === this.projectionPlaneTilt : (md = this._cache.orthoLeft === this.orthoLeft && this._cache.orthoRight === this.orthoRight && this._cache.orthoBottom === this.orthoBottom && this._cache.orthoTop === this.orthoTop && this._cache.renderWidth === Wd.getRenderWidth() && this._cache.renderHeight === Wd.getRenderHeight(), this.oblique && (md = md && this._cache.obliqueAngle === this.oblique.angle && this._cache.obliqueLength === this.oblique.length && this._cache.obliqueOffset === this.oblique.offset)), md
        }
        attachControl(dd, Od) {}
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
          for (let Od = 0, md = this._rigCameras.length; Od < md; Od++) {
            const dd = this._rigCameras[Od],
              md = dd._rigPostProcess;
            if (md) {
              "pass" === md.getEffectName() && (dd.isIntermediate = 0 === this._postProcesses.length), dd._postProcesses = this._postProcesses.slice(0).concat(md), md.markTextureDirty()
            } else dd._postProcesses = this._postProcesses.slice(0)
          }
        }
        attachPostProcess(dd) {
          let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          return !dd.isReusable() && this._postProcesses.indexOf(dd) > -1 ? (vd.c.Error("You're trying to reuse a post process not defined as reusable."), 0) : (null == Od || Od < 0 ? this._postProcesses.push(dd) : null === this._postProcesses[Od] ? this._postProcesses[Od] = dd : this._postProcesses.splice(Od, 0, dd), this._cascadePostProcessesToRigCams(), this._scene.prePassRenderer && this._scene.prePassRenderer.KWd(), this._postProcesses.indexOf(dd))
        }
        detachPostProcess(dd) {
          const Od = this._postProcesses.indexOf(dd); - 1 !== Od && (this._postProcesses[Od] = null), this._scene.prePassRenderer && this._scene.prePassRenderer.KWd(), this._cascadePostProcessesToRigCams()
        }
        getWorldMatrix() {
          return this._isSynchronizedViewMatrix() || this.getViewMatrix(), this._worldMatrix
        }
        _getViewMatrix() {
          return Kd.d.Identity()
        }
        getViewMatrix(dd) {
          return !dd && this._isSynchronizedViewMatrix() || (this._hasMoved = !0, this.updateCache(), this._computedViewMatrix = this._getViewMatrix(), this._currentRenderId = this.zV().getRenderId(), this._childUpdateId++, this._refreshFrustumPlanes = !0, this._cameraRigParams && this._cameraRigParams.vrPreViewMatrix && this._computedViewMatrix.multiplyToRef(this._cameraRigParams.vrPreViewMatrix, this._computedViewMatrix), this.parent && this.parent.onViewMatrixChangedObservable && this.parent.onViewMatrixChangedObservable.notifyObservers(this.parent), this.onViewMatrixChangedObservable.notifyObservers(this), this._computedViewMatrix.invertToRef(this._worldMatrix), this._worldMatrix.getTranslationToRef(this._globalPosition)), this._computedViewMatrix
        }
        freezeProjectionMatrix(dd) {
          this._doNotComputeProjectionMatrix = !0, void 0 !== dd && (this._projectionMatrix = dd)
        }
        unfreezeProjectionMatrix() {
          this._doNotComputeProjectionMatrix = !1
        }
        getProjectionMatrix(Od) {
          if (this._doNotComputeProjectionMatrix || !Od && this._isSynchronizedProjectionMatrix()) return this._projectionMatrix;
          const md = this.ignoreCameraMaxZ ? 0 : this.maxZ;
          this._cache.mode = this.mode, this._cache.minZ = this.minZ, this._cache.maxZ = md, this._refreshFrustumPlanes = !0;
          const Wd = this.Iq(),
            Fd = this.zV(),
            Rd = Wd.JFd;
          if (this.mode === dd.PERSPECTIVE_CAMERA) {
            let Od;
            this._cache.fov = this.fov, this._cache.fovMode = this.fovMode, this._cache.aspectRatio = Wd.getAspectRatio(this), this._cache.projectionPlaneTilt = this.projectionPlaneTilt, this.minZ <= 0 && (this.minZ = .1), Od = Fd.useRightHandedSystem ? Kd.d.PerspectiveFovRHToRef : Kd.d.PerspectiveFovLHToRef, Od(this.fov, Wd.getAspectRatio(this), Rd ? md : this.minZ, Rd ? this.minZ : md, this._projectionMatrix, this.fovMode === dd.FOVMODE_VERTICAL_FIXED, Wd.isNDCHalfZRange, this.projectionPlaneTilt, Rd)
          } else {
            const dd = Wd.getRenderWidth() / 2,
              Od = Wd.getRenderHeight() / 2;
            Fd.useRightHandedSystem ? this.oblique ? Kd.d.ObliqueOffCenterRHToRef(this.orthoLeft ?? -dd, this.orthoRight ?? dd, this.orthoBottom ?? -Od, this.orthoTop ?? Od, Rd ? md : this.minZ, Rd ? this.minZ : md, this.oblique.length, this.oblique.angle, this._computeObliqueDistance(this.oblique.offset), this._projectionMatrix, Wd.isNDCHalfZRange) : Kd.d.OrthoOffCenterRHToRef(this.orthoLeft ?? -dd, this.orthoRight ?? dd, this.orthoBottom ?? -Od, this.orthoTop ?? Od, Rd ? md : this.minZ, Rd ? this.minZ : md, this._projectionMatrix, Wd.isNDCHalfZRange) : this.oblique ? Kd.d.ObliqueOffCenterLHToRef(this.orthoLeft ?? -dd, this.orthoRight ?? dd, this.orthoBottom ?? -Od, this.orthoTop ?? Od, Rd ? md : this.minZ, Rd ? this.minZ : md, this.oblique.length, this.oblique.angle, this._computeObliqueDistance(this.oblique.offset), this._projectionMatrix, Wd.isNDCHalfZRange) : Kd.d.OrthoOffCenterLHToRef(this.orthoLeft ?? -dd, this.orthoRight ?? dd, this.orthoBottom ?? -Od, this.orthoTop ?? Od, Rd ? md : this.minZ, Rd ? this.minZ : md, this._projectionMatrix, Wd.isNDCHalfZRange), this._cache.orthoLeft = this.orthoLeft, this._cache.orthoRight = this.orthoRight, this._cache.orthoBottom = this.orthoBottom, this._cache.orthoTop = this.orthoTop, this._cache.obliqueAngle = this.oblique?.angle, this._cache.obliqueLength = this.oblique?.length, this._cache.obliqueOffset = this.oblique?.offset, this._cache.renderWidth = Wd.getRenderWidth(), this._cache.renderHeight = Wd.getRenderHeight()
          }
          return this.onProjectionMatrixChangedObservable.notifyObservers(this), this._projectionMatrix
        }
        getTransformationMatrix() {
          return this._computedViewMatrix.multiplyToRef(this._projectionMatrix, this._transformMatrix), this._transformMatrix
        }
        _computeObliqueDistance(dd) {
          return (this.radius || (this.target ? Kd.j.Distance(this.position, this.target) : this.position.length())) + dd
        }
        _updateFrustumPlanes() {
          this._refreshFrustumPlanes && (this.getTransformationMatrix(), this._frustumPlanes ? Nd.e.GetPlanesToRef(this._transformMatrix, this._frustumPlanes) : this._frustumPlanes = Nd.e.GetPlanes(this._transformMatrix), this._refreshFrustumPlanes = !1)
        }
        isInFrustum(dd) {
          let Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._updateFrustumPlanes(), Od && this.rigCameras.length > 0) {
            let Od = !1;
            for (const md of this.rigCameras) md._updateFrustumPlanes(), Od = Od || dd.isInFrustum(md._frustumPlanes);
            return Od
          }
          return dd.isInFrustum(this._frustumPlanes)
        }
        isCompletelyInFrustum(dd) {
          return this._updateFrustumPlanes(), dd.isCompletelyInFrustum(this._frustumPlanes)
        }
        getForwardRay() {
          throw (0, td.m)("Ray")
        }
        getForwardRayToRef(dd) {
          throw (0, td.m)("Ray")
        }
        dispose(Od) {
          let md = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          for (this.onViewMatrixChangedObservable.clear(), this.onProjectionMatrixChangedObservable.clear(), this.onAfterCheckInputsObservable.clear(), this.onRestoreStateObservable.clear(), this.inputs && this.inputs.clear(), this.zV().stopAnimation(this), this.zV().removeCamera(this); this._rigCameras.length > 0;) {
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
              const Od = this._postProcesses[dd];
              Od && Od.dispose(this)
            }
          }
          let Wd = this.customRenderTargets.length;
          for (; --Wd >= 0;) this.customRenderTargets[Wd].dispose();
          this.customRenderTargets.length = 0, this._activeMeshes.dispose(), this.zV().Iq().releaseRenderPassId(this.renderPassId), super.dispose(Od, md)
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
        setCameraRigMode(Od, md) {
          if (this.cameraRigMode !== Od) {
            for (; this._rigCameras.length > 0;) {
              const dd = this._rigCameras.pop();
              dd && dd.dispose()
            }
            if (this.cameraRigMode = Od, this._cameraRigParams = {}, this._cameraRigParams.interaxialDistance = md.interaxialDistance || .0637, this._cameraRigParams.stereoHalfAngle = this._cameraRigParams.interaxialDistance / .0637 * (Math.PI / 180), this.cameraRigMode !== dd.RIG_MODE_NONE) {
              const dd = this.createRigCamera(this.name + "_L", 0);
              dd && (dd._isLeftCamera = !0);
              const Od = this.createRigCamera(this.name + "_R", 1);
              Od && (Od._isRightCamera = !0), dd && Od && (this._rigCameras.push(dd), this._rigCameras.push(Od))
            }
            this._setRigMode(md), this._cascadePostProcessesToRigCams(), this.update()
          }
        }
        _setRigMode(dd) {}
        _getVRProjectionMatrix() {
          return Kd.d.PerspectiveFovLHToRef(this._cameraRigParams.vrMetrics.aspectRatioFov, this._cameraRigParams.vrMetrics.aspectRatio, this.minZ, this.ignoreCameraMaxZ ? 0 : this.maxZ, this._cameraRigParams.vrWorkMatrix, !0, this.Iq().isNDCHalfZRange), this._cameraRigParams.vrWorkMatrix.multiplyToRef(this._cameraRigParams.vrHMatrix, this._projectionMatrix), this._projectionMatrix
        }
        setCameraRigParameter(dd, Od) {
          this._cameraRigParams || (this._cameraRigParams = {}), this._cameraRigParams[dd] = Od, "interaxialDistance" === dd && (this._cameraRigParams.stereoHalfAngle = Od / .0637 * (Math.PI / 180))
        }
        createRigCamera(dd, Od) {
          return null
        }
        _updateRigCameras() {
          for (let dd = 0; dd < this._rigCameras.length; dd++) this._rigCameras[dd].minZ = this.minZ, this._rigCameras[dd].maxZ = this.ignoreCameraMaxZ ? 0 : this.maxZ, this._rigCameras[dd].fov = this.fov, this._rigCameras[dd].upVector.Bx(this.upVector);
          this.cameraRigMode === dd.RIG_MODE_STEREOSCOPIC_ANAGLYPH && (this._rigCameras[0].viewport = this._rigCameras[1].viewport = this.viewport)
        }
        _setupInputs() {}
        serialize() {
          const dd = Hd.b.Serialize(this);
          return dd.uniqueId = this.uniqueId, dd.type = this.getClassName(), this.parent && this.parent._serializeAsParent(dd), this.inputs && this.inputs.serialize(dd), Hd.b.AppendSerializedAnimations(this, dd), dd.By = this.serializeAnimationRanges(), dd.isEnabled = this.isEnabled(), dd
        }
        clone(Od) {
          let md = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const Wd = Hd.b.Clone(dd.GetConstructorFromName(this.getClassName(), Od, this.zV(), this.interaxialDistance, this.isStereoscopicSideBySide), this);
          return Wd.name = Od, Wd.parent = md, this.onClonedObservable.notifyObservers(Wd), Wd
        }
        B_(dd) {
          const Od = Kd.j.Zero();
          return this.getDirectionToRef(dd, Od), Od
        }
        get absoluteRotation() {
          return this.getWorldMatrix().decompose(void 0, this._absoluteRotation), this._absoluteRotation
        }
        getDirectionToRef(dd, Od) {
          Kd.j.TransformNormalToRef(dd, this.getWorldMatrix(), Od)
        }
        static GetConstructorFromName(Od, md, Wd) {
          let Fd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
            Rd = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
          const Xd = hd.b.Construct(Od, md, Wd, {
            interaxial_distance: Fd,
            isStereoscopicSideBySide: Rd
          });
          return Xd || (() => dd._CreateDefaultParsedCamera(md, Wd))
        }
        computeWorldMatrix() {
          return this.getWorldMatrix()
        }
        _calculateHandednessMultiplier() {
          let dd = this.zV().useRightHandedSystem ? -1 : 1;
          return this.parent && this.parent._getWorldMatrixDeterminant() < 0 && (dd *= -1), dd
        }
      }, (() => {
        const Rd = "function" === typeof Symbol && Symbol.metadata ? Object.create(Vd[Symbol.metadata] ?? null) : void 0;
        Od = [(0, Fd.B)("position")], md = [(0, Fd.B)("upVector")], Qd = [(0, Fd.E)()], yd = [(0, Fd.E)()], bd = [(0, Fd.E)()], Td = [(0, Fd.E)()], pd = [(0, Fd.E)()], Yd = [(0, Fd.E)()], gd = [(0, Fd.E)()], wd = [(0, Fd.E)()], Ed = [(0, Fd.E)()], Jd = [(0, Fd.E)()], Ud = [(0, Fd.E)()], xd = [(0, Fd.E)()], Bd = [(0, Fd.E)()], Sd = [(0, Fd.E)()], sd = [(0, Fd.E)()], ud = [(0, Fd.E)()], (0, Wd.h)(dd, null, Qd, {
          kind: "getter",
          name: "orthoLeft",
          static: !1,
          private: !1,
          access: {
            has: dd => "orthoLeft" in dd,
            get: dd => dd.orthoLeft
          },
          metadata: Rd
        }, null, Ad), (0, Wd.h)(dd, null, yd, {
          kind: "getter",
          name: "orthoRight",
          static: !1,
          private: !1,
          access: {
            has: dd => "orthoRight" in dd,
            get: dd => dd.orthoRight
          },
          metadata: Rd
        }, null, Ad), (0, Wd.h)(dd, null, bd, {
          kind: "getter",
          name: "orthoBottom",
          static: !1,
          private: !1,
          access: {
            has: dd => "orthoBottom" in dd,
            get: dd => dd.orthoBottom
          },
          metadata: Rd
        }, null, Ad), (0, Wd.h)(dd, null, Td, {
          kind: "getter",
          name: "orthoTop",
          static: !1,
          private: !1,
          access: {
            has: dd => "orthoTop" in dd,
            get: dd => dd.orthoTop
          },
          metadata: Rd
        }, null, Ad), (0, Wd.h)(dd, null, Ed, {
          kind: "getter",
          name: "inertia",
          static: !1,
          private: !1,
          access: {
            has: dd => "inertia" in dd,
            get: dd => dd.inertia
          },
          metadata: Rd
        }, null, Ad), (0, Wd.h)(dd, null, Jd, {
          kind: "getter",
          name: "mode",
          static: !1,
          private: !1,
          access: {
            has: dd => "mode" in dd,
            get: dd => dd.mode
          },
          metadata: Rd
        }, null, Ad), (0, Wd.h)(null, null, Od, {
          kind: "field",
          name: "_position",
          static: !1,
          private: !1,
          access: {
            has: dd => "_position" in dd,
            get: dd => dd._position,
            set: (dd, Od) => {
              dd._position = Od
            }
          },
          metadata: Rd
        }, rd, Gd), (0, Wd.h)(null, null, md, {
          kind: "field",
          name: "_upVector",
          static: !1,
          private: !1,
          access: {
            has: dd => "_upVector" in dd,
            get: dd => dd._upVector,
            set: (dd, Od) => {
              dd._upVector = Od
            }
          },
          metadata: Rd
        }, nd, Ld), (0, Wd.h)(null, null, pd, {
          kind: "field",
          name: "fov",
          static: !1,
          private: !1,
          access: {
            has: dd => "fov" in dd,
            get: dd => dd.fov,
            set: (dd, Od) => {
              dd.fov = Od
            }
          },
          metadata: Rd
        }, Pd, zd), (0, Wd.h)(null, null, Yd, {
          kind: "field",
          name: "projectionPlaneTilt",
          static: !1,
          private: !1,
          access: {
            has: dd => "projectionPlaneTilt" in dd,
            get: dd => dd.projectionPlaneTilt,
            set: (dd, Od) => {
              dd.projectionPlaneTilt = Od
            }
          },
          metadata: Rd
        }, cd, jd), (0, Wd.h)(null, null, gd, {
          kind: "field",
          name: "minZ",
          static: !1,
          private: !1,
          access: {
            has: dd => "minZ" in dd,
            get: dd => dd.minZ,
            set: (dd, Od) => {
              dd.minZ = Od
            }
          },
          metadata: Rd
        }, Dd, ed), (0, Wd.h)(null, null, wd, {
          kind: "field",
          name: "maxZ",
          static: !1,
          private: !1,
          access: {
            has: dd => "maxZ" in dd,
            get: dd => dd.maxZ,
            set: (dd, Od) => {
              dd.maxZ = Od
            }
          },
          metadata: Rd
        }, Id, ld), (0, Wd.h)(null, null, Ud, {
          kind: "field",
          name: "layerMask",
          static: !1,
          private: !1,
          access: {
            has: dd => "layerMask" in dd,
            get: dd => dd.layerMask,
            set: (dd, Od) => {
              dd.layerMask = Od
            }
          },
          metadata: Rd
        }, Cd, Zd), (0, Wd.h)(null, null, xd, {
          kind: "field",
          name: "fovMode",
          static: !1,
          private: !1,
          access: {
            has: dd => "fovMode" in dd,
            get: dd => dd.fovMode,
            set: (dd, Od) => {
              dd.fovMode = Od
            }
          },
          metadata: Rd
        }, kd, fd), (0, Wd.h)(null, null, Bd, {
          kind: "field",
          name: "cameraRigMode",
          static: !1,
          private: !1,
          access: {
            has: dd => "cameraRigMode" in dd,
            get: dd => dd.cameraRigMode,
            set: (dd, Od) => {
              dd.cameraRigMode = Od
            }
          },
          metadata: Rd
        }, Md, dO), (0, Wd.h)(null, null, Sd, {
          kind: "field",
          name: "interaxialDistance",
          static: !1,
          private: !1,
          access: {
            has: dd => "interaxialDistance" in dd,
            get: dd => dd.interaxialDistance,
            set: (dd, Od) => {
              dd.interaxialDistance = Od
            }
          },
          metadata: Rd
        }, OO, mO), (0, Wd.h)(null, null, sd, {
          kind: "field",
          name: "isStereoscopicSideBySide",
          static: !1,
          private: !1,
          access: {
            has: dd => "isStereoscopicSideBySide" in dd,
            get: dd => dd.isStereoscopicSideBySide,
            set: (dd, Od) => {
              dd.isStereoscopicSideBySide = Od
            }
          },
          metadata: Rd
        }, WO, FO), (0, Wd.h)(null, null, ud, {
          kind: "field",
          name: "ignoreCameraMaxZ",
          static: !1,
          private: !1,
          access: {
            has: dd => "ignoreCameraMaxZ" in dd,
            get: dd => dd.ignoreCameraMaxZ,
            set: (dd, Od) => {
              dd.ignoreCameraMaxZ = Od
            }
          },
          metadata: Rd
        }, RO, XO), Rd && Object.defineProperty(dd, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Rd
        })
      })(), dd._CreateDefaultParsedCamera = (dd, Od) => {
        throw (0, td.m)("UniversalCamera")
      }, dd.PERSPECTIVE_CAMERA = 0, dd.ORTHOGRAPHIC_CAMERA = 1, dd.FOVMODE_VERTICAL_FIXED = 0, dd.FOVMODE_HORIZONTAL_FIXED = 1, dd.RIG_MODE_NONE = 0, dd.RIG_MODE_STEREOSCOPIC_ANAGLYPH = 10, dd.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL = 11, dd.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED = 12, dd.RIG_MODE_STEREOSCOPIC_OVERUNDER = 13, dd.RIG_MODE_STEREOSCOPIC_INTERLACED = 14, dd.RIG_MODE_VR = 20, dd.RIG_MODE_CUSTOM = 22, dd.ForceAttachControlToAlwaysPreventDefault = !1, dd
    })();

    function bd(dd, Od) {
      const md = dd.type,
        Wd = yd.GetConstructorFromName(md, dd.name, Od, dd.interaxial_distance, dd.isStereoscopicSideBySide),
        Fd = Hd.b.Parse(Wd, dd, Od);
      if (void 0 !== dd.parentId && (Fd._waitingParentId = dd.parentId), void 0 !== dd.parentInstanceIndex && (Fd._waitingParentInstanceIndex = dd.parentInstanceIndex), Fd.inputs && (Fd.inputs.parse(dd), Fd._setupInputs()), dd.upVector && (Fd.upVector = Kd.j.FromArray(dd.upVector)), Fd.setPosition && (Fd.position.KOd(0, 0, 0), Fd.setPosition(Kd.j.FromArray(dd.position))), dd.target && Fd.setTarget && Fd.setTarget(Kd.j.FromArray(dd.target)), dd.cameraRigMode) {
        const Od = dd.interaxial_distance ? {
          interaxialDistance: dd.interaxial_distance
        } : {};
        Fd.setCameraRigMode(dd.cameraRigMode, Od)
      }
      if (dd.animations) {
        for (let Od = 0; Od < dd.animations.length; Od++) {
          const md = dd.animations[Od],
            Wd = (0, Qd.c)("BABYLON.Animation");
          Wd && Fd.animations.push(Wd.Parse(md))
        }
        hd.b.ParseAnimationRanges(Fd, dd, Od)
      }
      return dd.autoAnimate && Od.beginAnimation(Fd, dd.autoAnimateFrom, dd.autoAnimateTo, dd.autoAnimateLoop, dd.autoAnimateSpeed || 1), void 0 !== dd.isEnabled && Fd.rY(dd.isEnabled), Fd
    }
    let Td = !1;

    function pd() {
      Td || (Td = !0, yd.Parse = bd)
    }
  },
  42140: (dd, Od, md) => {
    md.d(Od, {
      d: () => Fd
    });
    var Wd = md(38636);
    class Fd {
      constructor(dd, Od, md) {
        this._cameraPosition = Od, this._behavior = md, this.activeInput = !1, this.speed = 1, this.bM = 1, this.panSpeed = 1, this.rotationXSpeed = 1, this.rotationYSpeed = 1, this._zoomSpeedMultiplier = 1, this._panSpeedMultiplier = 1, this.zoomInertia = .9, this.panInertia = .9, this.rotationInertia = .9, this.zoomAccumulatedPixels = 0, this.panAccumulatedPixels = new Wd.j, this.rotationAccumulatedPixels = new Wd.j, this.zoomDeltaCurrentFrame = 0, this.panDeltaCurrentFrame = Wd.j.Zero(), this.rotationDeltaCurrentFrame = Wd.j.Zero(), this._zoomVelocity = 0, this._panVelocity = new Wd.j, this.referenceFrameRate = 60, this._rotationVelocity = new Wd.j, this._prevFrameTimeMs = 0, this._scene = dd
      }
      computeCurrentFrameDeltas() {
        const dd = this._scene.Iq().getDeltaTime(),
          Od = this._getEffectiveDeltaMs(dd);
        if (0 === this._zoomVelocity && 0 === this.zoomAccumulatedPixels && 0 === this._panVelocity.x && 0 === this._panVelocity.y && 0 === this._panVelocity.z && 0 === this.panAccumulatedPixels.x && 0 === this.panAccumulatedPixels.y && 0 === this.panAccumulatedPixels.z && 0 === this._rotationVelocity.x && 0 === this._rotationVelocity.y && 0 === this._rotationVelocity.z && 0 === this.rotationAccumulatedPixels.x && 0 === this.rotationAccumulatedPixels.y && 0 === this.rotationAccumulatedPixels.z && !this.activeInput) return this.panDeltaCurrentFrame.Bdd(0), this.rotationDeltaCurrentFrame.Bdd(0), this.zoomDeltaCurrentFrame = 0, void(dd > 0 && (this._prevFrameTimeMs = dd));
        this.panDeltaCurrentFrame.Bdd(0), this.rotationDeltaCurrentFrame.Bdd(0), this.zoomDeltaCurrentFrame = 0;
        (this.panAccumulatedPixels.lengthSquared() > 0 || this.rotationAccumulatedPixels.lengthSquared() > 0 || 0 !== this.zoomAccumulatedPixels) && this._behavior?.isInterpolating && this._behavior.stopAllAnimations(), this._panVelocity.KOd(this._calculateCurrentVelocity(this._panVelocity.x, this.panAccumulatedPixels.x, this.panInertia), this._calculateCurrentVelocity(this._panVelocity.y, this.panAccumulatedPixels.y, this.panInertia), this._calculateCurrentVelocity(this._panVelocity.z, this.panAccumulatedPixels.z, this.panInertia)), this._panVelocity.scaleToRef(this.speed * this.panSpeed * this._panSpeedMultiplier * Od, this.panDeltaCurrentFrame), this._rotationVelocity.KOd(this._calculateCurrentVelocity(this._rotationVelocity.x, this.rotationAccumulatedPixels.x, this.rotationInertia), this._calculateCurrentVelocity(this._rotationVelocity.y, this.rotationAccumulatedPixels.y, this.rotationInertia), this._calculateCurrentVelocity(this._rotationVelocity.z, this.rotationAccumulatedPixels.z, this.rotationInertia)), this.rotationDeltaCurrentFrame.KOd(this._rotationVelocity.x * this.speed * this.rotationXSpeed * Od, this._rotationVelocity.y * this.speed * this.rotationYSpeed * Od, 0), this._zoomVelocity = this._calculateCurrentVelocity(this._zoomVelocity, this.zoomAccumulatedPixels, this.zoomInertia), this.zoomDeltaCurrentFrame = this._zoomVelocity * (this.speed * this.bM * this._zoomSpeedMultiplier) * Od, dd > 0 && (this._prevFrameTimeMs = dd), this.zoomAccumulatedPixels = 0, this.panAccumulatedPixels.Bdd(0), this.rotationAccumulatedPixels.Bdd(0), this.activeInput = !1
      }
      resetRotationVelocity() {
        this._rotationVelocity.Bdd(0), this.rotationAccumulatedPixels.Bdd(0)
      }
      resetPanVelocity() {
        this._panVelocity.Bdd(0), this.panAccumulatedPixels.Bdd(0)
      }
      resetZoomVelocity() {
        this._zoomVelocity = 0, this.zoomAccumulatedPixels = 0
      }
      get isInterpolating() {
        return !!this._behavior?.isInterpolating
      }
      getFrameIndependentDecay(dd) {
        const Od = this._scene.Iq().getDeltaTime(),
          md = this._getEffectiveDeltaMs(Od),
          Wd = 1e3 / this.referenceFrameRate;
        return Math.pow(dd, md / Wd)
      }
      getFrameIndependentInputScale(dd) {
        const Od = 1 - dd;
        if (Od <= 0) return 1;
        return (1 - this.getFrameIndependentDecay(dd)) / Od
      }
      _getEffectiveDeltaMs(dd) {
        return dd > 0 ? dd : this._prevFrameTimeMs > 0 ? this._prevFrameTimeMs : 1e3 / this.referenceFrameRate
      }
      _calculateCurrentVelocity(dd, Od, md) {
        let Wd = dd;
        const Fd = this._scene.Iq().getDeltaTime(),
          Rd = this._getEffectiveDeltaMs(Fd);
        if (0 === Rd) return Wd;
        const Xd = this.getFrameIndependentDecay(md);
        if (Wd *= Xd, 0 !== Od || this.activeInput) {
          const dd = 1 - md;
          Wd += Od / Rd * (dd > 0 ? (1 - Xd) / dd : 1)
        } else Math.abs(Wd) < 1e-6 && (Wd = 0);
        return Wd
      }
    }
  },
  42146: (dd, Od, md) => {
    md.d(Od, {
      d: () => Wd
    });
    class Wd {
      constructor(dd, Od) {
        this.inputMap = [], this.handlers = dd, this._createDefaultEntries = Od, this.resetInputMap()
      }
      resolveInteraction(dd, Od) {
        for (const md of this.inputMap)
          if (md.source === dd && this._entryMatches(md, Od)) return md;
        return null
      }
      resetInputMap() {
        this.inputMap = this._createDefaultEntries?.() ?? []
      }
      getEntry(dd, Od, md) {
        const Wd = this.inputMap;
        for (let Fd = 0; Fd < Wd.length; Fd++) {
          const Rd = Wd[Fd];
          if (Rd.source === dd && Rd.interaction === Od && this._entryConditionsMatch(Rd, md)) return Rd
        }
      }
      getEntries(dd, Od, md) {
        const Wd = [],
          Fd = this.inputMap;
        for (let Rd = 0; Rd < Fd.length; Rd++) {
          const Xd = Fd[Rd];
          Xd.source === dd && Xd.interaction === Od && this._entryConditionsMatch(Xd, md) && Wd.push(Xd)
        }
        return Wd
      }
      addEntry(dd) {
        const Od = this._entrySpecificity(dd);
        let md = this.inputMap.length;
        for (let Wd = 0; Wd < this.inputMap.length; Wd++)
          if (this._entrySpecificity(this.inputMap[Wd]) < Od) {
            md = Wd;
            break
          } this.inputMap.splice(md, 0, dd)
      }
      setInteraction(dd, Od, md) {
        const Wd = this.resolveInteraction(dd, Od);
        return Wd && this._entryCoversAllConditionsOf(Wd, Od) ? (Wd.interaction = md, !0) : (this.addEntry({
          source: dd,
          ...Od ?? {},
          interaction: md
        }), !0)
      }
      _entryCoversAllConditionsOf(dd, Od) {
        if (!Od) return !0;
        const md = dd;
        for (const Wd of Object.keys(Od)) {
          const dd = Od[Wd];
          if (void 0 !== dd)
            if ("modifiers" === Wd) {
              const Od = md.modifiers ?? {};
              for (const md of Object.keys(dd))
                if (void 0 !== dd[md] && void 0 === Od[md]) return !1
            } else if (void 0 === md[Wd]) return !1
        }
        return !0
      }
      setInteractions(dd, Od, md) {
        let Wd = 0;
        const Fd = this.inputMap;
        for (let Rd = 0; Rd < Fd.length; Rd++) {
          const Xd = Fd[Rd];
          Xd.source === dd && this._entryMatches(Xd, Od) && (Xd.interaction = md, Wd++)
        }
        return Wd
      }
      _entryMatches(dd, Od) {
        switch (dd.source) {
          case "pointer":
            return (void 0 === dd.button || dd.button === Od?.button) && this._matchModifiers(dd.modifiers, Od?.modifiers);
          case "wheel":
            return this._matchModifiers(dd.modifiers, Od?.modifiers);
          case "touch":
            return void 0 === dd.touchCount || dd.touchCount === Od?.touchCount;
          case "keyboard":
            return (void 0 === dd.key || (Array.isArray(dd.key) ? -1 !== dd.key.indexOf(Od?.key ?? -1) : dd.key === Od?.key)) && this._matchModifiers(dd.modifiers, Od?.modifiers)
        }
      }
      _entryConditionsMatch(dd, Od) {
        if (!Od) return !0;
        switch (dd.source) {
          case "pointer":
            return (!("button" in Od) || dd.button === Od.button) && (!("modifiers" in Od) || this._entryModifiersMatch(dd.modifiers, Od.modifiers));
          case "wheel":
            return !("modifiers" in Od) || this._entryModifiersMatch(dd.modifiers, Od.modifiers);
          case "touch":
            return !("touchCount" in Od) || dd.touchCount === Od.touchCount;
          case "keyboard":
            if ("key" in Od) {
              if (void 0 === dd.key) return void 0 === Od.key;
              if (void 0 === Od.key || (Array.isArray(dd.key) ? -1 === dd.key.indexOf(Od.key) : dd.key !== Od.key)) return !1
            }
            return !("modifiers" in Od) || this._entryModifiersMatch(dd.modifiers, Od.modifiers)
        }
      }
      _entrySpecificity(dd) {
        let Od = 0;
        return "button" in dd && void 0 !== dd.button && Od++, "key" in dd && void 0 !== dd.key && Od++, "touchCount" in dd && void 0 !== dd.touchCount && Od++, "modifiers" in dd && dd.modifiers && Od++, Od
      }
      _matchModifiers(dd, Od) {
        return !dd || (void 0 === dd.ctrl || dd.ctrl === (Od?.ctrl ?? !1)) && ((void 0 === dd.shift || dd.shift === (Od?.shift ?? !1)) && (void 0 === dd.alt || dd.alt === (Od?.alt ?? !1)))
      }
      _entryModifiersMatch(dd, Od) {
        if (!Od) return !dd;
        return void 0 !== Od.ctrl || void 0 !== Od.shift || void 0 !== Od.alt ? (void 0 === Od.ctrl || dd?.ctrl === Od.ctrl) && ((void 0 === Od.shift || dd?.shift === Od.shift) && (void 0 === Od.alt || dd?.alt === Od.alt)) : !dd || void 0 === dd.ctrl && void 0 === dd.shift && void 0 === dd.alt
      }
    }
  },
  42123: (dd, Od, md) => {
    md.d(Od, {
      d: () => bd,
      h: () => Hd
    });
    var Wd = md(41922),
      Fd = md(41931),
      Rd = md(42126),
      Xd = md(38636),
      Kd = md(38644),
      hd = md(42138),
      vd = md(42132),
      Qd = md(42140),
      td = md(42146);
    class od extends Qd.d {
      constructor(dd, Od, md) {
        super(dd, Od, md), this.input = new td.d({
          translate: (dd, Od, md) => {
            this.panAccumulatedPixels.x += dd, this.panAccumulatedPixels.y += Od, this.panAccumulatedPixels.z += md
          },
          rotate: (dd, Od) => {
            this.rotationAccumulatedPixels.x += dd, this.rotationAccumulatedPixels.y += Od
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
    const Nd = Xd.d.Zero(),
      qd = Xd.e.Identity();
    let Hd = (() => {
        var dd;
        let Od, md, vd, Qd, td = Rd.e,
          Hd = [],
          yd = [],
          bd = [],
          Td = [],
          pd = [],
          Yd = [],
          gd = [],
          wd = [];
        return dd = class extends td {
          get inertia() {
            return this._targetInertia
          }
          set inertia(dd) {
            this._targetInertia = dd, this.movement && (this.movement.panInertia = dd, this.movement.rotationInertia = dd)
          }
          constructor(dd, Od, md) {
            super(dd, Od, md, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]), this.cameraDirection = new Xd.j(0, 0, 0), this.cameraRotation = new Xd.i(0, 0), this._targetInertia = .9, this.updateUpVectorFromRotation = (0, Wd.k)(this, Hd, !1), this.rotation = ((0, Wd.k)(this, yd), (0, Wd.k)(this, bd, void 0)), this.rotationQuaternion = (0, Wd.k)(this, Td), this.speed = (0, Wd.k)(this, pd, 2), this.noRotationConstraint = ((0, Wd.k)(this, Yd), !1), this.invertRotation = !1, this.inverseRotationSpeed = .2, this._panningEpsilon = Kd.b, this._rotationEpsilon = Kd.b, this.lockedTarget = (0, Wd.k)(this, gd, null), this._currentTarget = ((0, Wd.k)(this, wd), Xd.j.Zero()), this._initialFocalDistance = 1, this._viewMatrix = Xd.d.Zero(), this._cameraTransformMatrix = Xd.d.Zero(), this._cameraRotationMatrix = Xd.d.Zero(), this._transformedReferencePoint = Xd.j.Zero(), this._deferredPositionUpdate = new Xd.j, this._deferredRotationQuaternionUpdate = new Xd.e, this._deferredRotationUpdate = new Xd.j, this._deferredUpdated = !1, this._deferOnly = !1, this._cachedRotationZ = 0, this._cachedQuaternionRotationZ = 0, this._referencePoint = Xd.j.Forward(this.zV().useRightHandedSystem), this.rotation = new Xd.j(0, this.zV().useRightHandedSystem ? Math.PI : 0, 0), this.movement = new od(this.zV(), this.position), this.movement.panInertia = this.inertia, this.movement.rotationInertia = this.inertia
          }
          getFrontPosition(dd) {
            this.getWorldMatrix();
            const Od = Xd.h.Cq[0],
              md = Xd.h.Cq[1];
            return md.set(0, 0, this._scene.useRightHandedSystem ? -1 : 1), this.getDirectionToRef(md, Od), Od.scaleInPlace(dd), this.globalPosition.add(Od)
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
            return !!super._restoreStateValues() && (this.position = this._storedPosition.clone(), this.rotation = this._storedRotation.clone(), this.rotationQuaternion && this._storedRotationQuaternion && (this.rotationQuaternion = this._storedRotationQuaternion.clone()), this.cameraDirection.KOd(0, 0, 0), this.cameraRotation.KOd(0, 0), !0)
          }
          _initCache() {
            super._initCache(), this._cache.lockedTarget = new Xd.j(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.rotation = new Xd.j(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.rotationQuaternion = new Xd.e(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE)
          }
          _updateCache(dd) {
            dd || super._updateCache();
            const Od = this._getLockedTargetPosition();
            Od ? this._cache.lockedTarget ? this._cache.lockedTarget.Bx(Od) : this._cache.lockedTarget = Od.clone() : this._cache.lockedTarget = null, this._cache.rotation.Bx(this.rotation), this.rotationQuaternion && this._cache.rotationQuaternion.Bx(this.rotationQuaternion)
          }
          _isSynchronizedViewMatrix() {
            if (!super._isSynchronizedViewMatrix()) return !1;
            const dd = this._getLockedTargetPosition();
            return (this._cache.lockedTarget ? this._cache.lockedTarget.equals(dd) : !dd) && (this.rotationQuaternion ? this.rotationQuaternion.equals(this._cache.rotationQuaternion) : this._cache.rotation.equals(this.rotation))
          }
          _computeLocalCameraSpeed() {
            const dd = this.Iq();
            return this.speed * Math.sqrt(dd.getDeltaTime() / (100 * dd.getFps()))
          }
          setTarget(dd) {
            this.upVector.normalize(), this._initialFocalDistance = dd.subtract(this.position).length(), this.position.z === dd.z && (this.position.z += Kd.b), this._referencePoint.normalize().scaleInPlace(this._initialFocalDistance), this.zV().useRightHandedSystem ? Xd.d.LookAtRHToRef(this.position, dd, Xd.j.UpReadOnly, Nd) : Xd.d.LookAtLHToRef(this.position, dd, Xd.j.UpReadOnly, Nd), Nd.invert();
            const Od = this.rotationQuaternion || qd;
            Xd.e.FromRotationMatrixToRef(Nd, Od), Od.toEulerAnglesToRef(this.rotation), this.rotation.z = 0
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
            if (this.parent) return this.parent.getWorldMatrix().invertToRef(Xd.h.Matrix[0]), Xd.j.TransformNormalToRef(this.cameraDirection, Xd.h.Matrix[0], Xd.h.Cq[0]), this._deferredPositionUpdate.addInPlace(Xd.h.Cq[0]), void(this._deferOnly ? this._deferredUpdated = !0 : this.position.Bx(this._deferredPositionUpdate));
            this._deferredPositionUpdate.addInPlace(this.cameraDirection), this._deferOnly ? this._deferredUpdated = !0 : this.position.Bx(this._deferredPositionUpdate)
          }
          _checkInputs() {
            const dd = this.movement,
              Od = 0 !== this.cameraDirection.x || 0 !== this.cameraDirection.y || 0 !== this.cameraDirection.z;
            dd.panAccumulatedPixels.addInPlace(this.cameraDirection), dd.rotationAccumulatedPixels.x += this.cameraRotation.x, dd.rotationAccumulatedPixels.y += this.cameraRotation.y, dd.computeCurrentFrameDeltas(), this.cameraDirection.Bx(dd.panDeltaCurrentFrame), this.cameraRotation.set(dd.rotationDeltaCurrentFrame.x, dd.rotationDeltaCurrentFrame.y);
            const md = this.speed * this._panningEpsilon;
            !Od && Math.abs(this.cameraDirection.x) < md && Math.abs(this.cameraDirection.y) < md && Math.abs(this.cameraDirection.z) < md && (this.cameraDirection.Bdd(0), dd.resetPanVelocity());
            const Wd = this.invertRotation ? -this.inverseRotationSpeed : 1,
              Fd = this._decideIfNeedsToMove(),
              Rd = !(!this.cameraRotation.x && !this.cameraRotation.y);
            if (this._deferredUpdated = !1, this._deferredRotationUpdate.Bx(this.rotation), this._deferredPositionUpdate.Bx(this.position), this.rotationQuaternion && this._deferredRotationQuaternionUpdate.Bx(this.rotationQuaternion), Fd && this._updatePosition(), Rd) {
              if (this.rotationQuaternion && this.rotationQuaternion.toEulerAnglesToRef(this._deferredRotationUpdate), this._deferredRotationUpdate.x += this.cameraRotation.x * Wd, this._deferredRotationUpdate.y += this.cameraRotation.y * Wd, !this.noRotationConstraint) {
                const dd = 1.570796;
                this._deferredRotationUpdate.x > dd && (this._deferredRotationUpdate.x = dd), this._deferredRotationUpdate.x < -dd && (this._deferredRotationUpdate.x = -dd)
              }
              if (this._deferOnly ? this._deferredUpdated = !0 : this.rotation.Bx(this._deferredRotationUpdate), this.rotationQuaternion) {
                this._deferredRotationUpdate.lengthSquared() && (Xd.e.RotationYawPitchRollToRef(this._deferredRotationUpdate.y, this._deferredRotationUpdate.x, this._deferredRotationUpdate.z, this._deferredRotationQuaternionUpdate), this._deferOnly ? this._deferredUpdated = !0 : this.rotationQuaternion.Bx(this._deferredRotationQuaternionUpdate))
              }
            }
            this.cameraDirection.Bdd(0), this.cameraRotation.set(0, 0), super._checkInputs()
          }
          _updateCameraRotationMatrix() {
            this.rotationQuaternion ? this.rotationQuaternion.toRotationMatrix(this._cameraRotationMatrix) : Xd.d.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, this.rotation.z, this._cameraRotationMatrix)
          }
          _rotateUpVectorWithCameraRotationMatrix() {
            return Xd.j.TransformNormalToRef(Xd.j.UpReadOnly, this._cameraRotationMatrix, this.upVector), this
          }
          _getViewMatrix() {
            return this.lockedTarget && this.setTarget(this._getLockedTargetPosition()), this._updateCameraRotationMatrix(), this.rotationQuaternion && this._cachedQuaternionRotationZ != this.rotationQuaternion.z ? (this._rotateUpVectorWithCameraRotationMatrix(), this._cachedQuaternionRotationZ = this.rotationQuaternion.z) : this._cachedRotationZ !== this.rotation.z && (this._rotateUpVectorWithCameraRotationMatrix(), this._cachedRotationZ = this.rotation.z), Xd.j.TransformCoordinatesToRef(this._referencePoint, this._cameraRotationMatrix, this._transformedReferencePoint), this.position.addToRef(this._transformedReferencePoint, this._currentTarget), this.updateUpVectorFromRotation && (this.rotationQuaternion ? hd.c.Y.rotateByQuaternionToRef(this.rotationQuaternion, this.upVector) : (Xd.e.FromEulerVectorToRef(this.rotation, qd), hd.c.Y.rotateByQuaternionToRef(qd, this.upVector))), this._computeViewMatrix(this.position, this._currentTarget, this.upVector), this._viewMatrix
          }
          _computeViewMatrix(dd, Od, md) {
            if (this.zV().useRightHandedSystem ? Xd.d.LookAtRHToRef(dd, Od, md, this._viewMatrix) : Xd.d.LookAtLHToRef(dd, Od, md, this._viewMatrix), this.parent) {
              const dd = this.parent.getWorldMatrix();
              this._viewMatrix.invert(), this._viewMatrix.multiplyToRef(dd, this._viewMatrix), this._viewMatrix.invert(), this._markSyncedWithParent()
            }
          }
          createRigCamera(Od, md) {
            if (this.cameraRigMode !== Rd.e.RIG_MODE_NONE) {
              const md = new dd(Od, this.position.clone(), this.zV());
              return md.isRigCamera = !0, md.rigParent = this, this.cameraRigMode === Rd.e.RIG_MODE_VR && (this.rotationQuaternion || (this.rotationQuaternion = new Xd.e), md._cameraRigParams = {}, md.rotationQuaternion = new Xd.e), md.mode = this.mode, md.orthoLeft = this.orthoLeft, md.orthoRight = this.orthoRight, md.orthoTop = this.orthoTop, md.orthoBottom = this.orthoBottom, md
            }
            return null
          }
          _updateRigCameras() {
            const dd = this._rigCameras[0],
              Od = this._rigCameras[1];
            switch (this.computeWorldMatrix(), this.cameraRigMode) {
              case Rd.e.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case Rd.e.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case Rd.e.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
              case Rd.e.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case Rd.e.RIG_MODE_STEREOSCOPIC_INTERLACED: {
                const md = this.cameraRigMode === Rd.e.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED ? 1 : -1,
                  Wd = this.cameraRigMode === Rd.e.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED ? -1 : 1;
                this._getRigCamPositionAndTarget(this._cameraRigParams.stereoHalfAngle * md, dd), this._getRigCamPositionAndTarget(this._cameraRigParams.stereoHalfAngle * Wd, Od);
                break
              }
              case Rd.e.RIG_MODE_VR:
                dd.rotationQuaternion && Od.rotationQuaternion && this.rotationQuaternion ? (dd.rotationQuaternion.Bx(this.rotationQuaternion), Od.rotationQuaternion.Bx(this.rotationQuaternion)) : (dd.rotation.Bx(this.rotation), Od.rotation.Bx(this.rotation)), dd.position.Bx(this.position), Od.position.Bx(this.position)
            }
            super._updateRigCameras()
          }
          _getRigCamPositionAndTarget(Od, md) {
            this.getTarget().subtractToRef(this.position, dd._TargetFocalPoint), dd._TargetFocalPoint.normalize().scaleInPlace(this._initialFocalDistance);
            const Wd = dd._TargetFocalPoint.addInPlace(this.position);
            Xd.d.TranslationToRef(-Wd.x, -Wd.y, -Wd.z, dd._TargetTransformMatrix), dd._TargetTransformMatrix.multiplyToRef(Xd.d.RotationAxis(md.upVector, Od), dd._RigCamTransformMatrix), Xd.d.TranslationToRef(Wd.x, Wd.y, Wd.z, dd._TargetTransformMatrix), dd._RigCamTransformMatrix.multiplyToRef(dd._TargetTransformMatrix, dd._RigCamTransformMatrix), Xd.j.TransformCoordinatesToRef(this.position, dd._RigCamTransformMatrix, md.position), md.setTarget(Wd)
          }
          getClassName() {
            return "TargetCamera"
          }
        }, (() => {
          const Rd = "function" === typeof Symbol && Symbol.metadata ? Object.create(td[Symbol.metadata] ?? null) : void 0;
          Od = [(0, Fd.E)()], md = [(0, Fd.B)()], vd = [(0, Fd.E)()], Qd = [(0, Fd.s)("lockedTargetId")], (0, Wd.h)(null, null, Od, {
            kind: "field",
            name: "updateUpVectorFromRotation",
            static: !1,
            private: !1,
            access: {
              has: dd => "updateUpVectorFromRotation" in dd,
              get: dd => dd.updateUpVectorFromRotation,
              set: (dd, Od) => {
                dd.updateUpVectorFromRotation = Od
              }
            },
            metadata: Rd
          }, Hd, yd), (0, Wd.h)(null, null, md, {
            kind: "field",
            name: "rotation",
            static: !1,
            private: !1,
            access: {
              has: dd => "rotation" in dd,
              get: dd => dd.rotation,
              set: (dd, Od) => {
                dd.rotation = Od
              }
            },
            metadata: Rd
          }, bd, Td), (0, Wd.h)(null, null, vd, {
            kind: "field",
            name: "speed",
            static: !1,
            private: !1,
            access: {
              has: dd => "speed" in dd,
              get: dd => dd.speed,
              set: (dd, Od) => {
                dd.speed = Od
              }
            },
            metadata: Rd
          }, pd, Yd), (0, Wd.h)(null, null, Qd, {
            kind: "field",
            name: "lockedTarget",
            static: !1,
            private: !1,
            access: {
              has: dd => "lockedTarget" in dd,
              get: dd => dd.lockedTarget,
              set: (dd, Od) => {
                dd.lockedTarget = Od
              }
            },
            metadata: Rd
          }, gd, wd), Rd && Object.defineProperty(dd, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Rd
          })
        })(), dd._RigCamTransformMatrix = new Xd.d, dd._TargetTransformMatrix = new Xd.d, dd._TargetFocalPoint = new Xd.j, dd
      })(),
      yd = !1;

    function bd() {
      yd || (yd = !0, vd.b.AddNodeConstructor("TargetCamera", ((dd, Od) => () => new Hd(dd, Xd.j.Zero(), Od))))
    }
  },
  41883: (dd, Od, md) => {
    md.d(Od, {
      b: () => Rd
    });
    var Wd = md(41838);
    let Fd = !1;

    function Rd() {
      Fd || (Fd = !0, Wd.b.prototype.getInputElement = function() {
        return this._renderingCanvas
      }, Wd.b.prototype.getRenderingCanvasClientRect = function() {
        return this._renderingCanvas ? this._renderingCanvas.getBoundingClientRect() : null
      }, Wd.b.prototype.getInputElementClientRect = function() {
        return this._renderingCanvas ? this.getInputElement().getBoundingClientRect() : null
      }, Wd.b.prototype.getAspectRatio = function(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const md = dd.viewport;
        return this.getRenderWidth(Od) * md.width / (this.getRenderHeight(Od) * md.height)
      }, Wd.b.prototype.getScreenAspectRatio = function() {
        return this.getRenderWidth(!0) / this.getRenderHeight(!0)
      }, Wd.b.prototype._verifyPointerLock = function() {
        this._onPointerLockChange?.()
      })
    }
  },
  41957: (dd, Od, md) => {
    var Wd = md(41838),
      Fd = md(41961);
    let Rd = !1;
    Rd || (Rd = !0, (0, Fd.k)(), Wd.b.prototype._loadFileAsync = async function(dd, Od, md) {
      return await new Promise(((Wd, Fd) => {
        this._loadFile(dd, (dd => {
          Wd(dd)
        }), void 0, Od, md, ((dd, Od) => {
          Fd(Od)
        }))
      }))
    })
  },
  41954: (dd, Od, md) => {
    (0, md(41885).d)()
  },
  41885: (dd, Od, md) => {
    md.d(Od, {
      d: () => Rd
    });
    var Wd = md(41838);
    let Fd = !1;

    function Rd() {
      Fd || (Fd = !0, Wd.b.prototype.getRenderPassNames = function() {
        return this._renderPassNames
      }, Wd.b.prototype.getCurrentRenderPassName = function() {
        return this._renderPassNames[this.currentRenderPassId]
      }, Wd.b.prototype.createRenderPassId = function(dd) {
        const Od = ++Wd.b._RenderPassIdCounter;
        return this._renderPassNames[Od] = dd ?? "NONAME", Od
      }, Wd.b.prototype.releaseRenderPassId = function(dd) {
        this._renderPassNames[dd] = void 0;
        for (let Od = 0; Od < this.scenes.length; ++Od) {
          const md = this.scenes[Od];
          for (let Od = 0; Od < md.meshes.length; ++Od) {
            const Wd = md.meshes[Od];
            if (Wd._releaseRenderPassId(dd), Wd.ZE)
              for (let Od = 0; Od < Wd.ZE.length; ++Od) {
                Wd.ZE[Od]._removeDrawWrapper(dd)
              }
          }
        }
        this._onReleaseRenderPassObservable?.notifyObservers(dd)
      })
    }
  },
  42004: (dd, Od, md) => {
    var Wd = md(42010),
      Fd = md(41838);
    let Rd = !1;
    Rd || (Rd = !0, Fd.b.GetCompatibleTextureLoader = Wd.b)
  },
  41894: (dd, Od, md) => {
    md.d(Od, {
      c: () => Rd
    });
    var Wd = md(41777);
    let Fd = !1;

    function Rd() {
      Fd || (Fd = !0, Wd.ThinEngine.prototype.setAlphaMode = function(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this._alphaMode[md] === dd) {
          if (!Od) {
            const Od = 0 === dd;
            this.depthCullingState.depthMask !== Od && (this.depthCullingState.depthMask = Od)
          }
          return
        }
        const Wd = 0 === dd;
        this._alphaState.setAlphaBlend(!Wd, md), this._alphaState.setAlphaMode(dd, md), Od || (this.depthCullingState.depthMask = Wd), this._alphaMode[md] = dd
      })
    }
  },
  41901: (dd, Od, md) => {
    var Wd = md(41763),
      Fd = md(40262),
      Rd = md(41777),
      Xd = md(41905),
      Kd = md(41869);
    class hd extends Xd.d {
      setDepthStencilTexture(dd) {
        let Od = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (super.setDepthStencilTexture(dd, Od), !dd) return;
        const md = this._engine,
          Wd = this._context,
          Fd = dd._hardwareTexture;
        if (Fd && dd._autoMSAAManagement && this._MSAAFramebuffer) {
          const Od = md._currentFramebuffer;
          md._bindUnboundFramebuffer(this._MSAAFramebuffer), Wd.framebufferRenderbuffer(Wd.FRAMEBUFFER, (0, Kd.d)(dd.format) ? Wd.DEPTH_STENCIL_ATTACHMENT : Wd.DEPTH_ATTACHMENT, Wd.RENDERBUFFER, Fd.getMSAARenderBuffer()), md._bindUnboundFramebuffer(Od)
        }
      }
      constructor(dd, Od, md, Wd, Fd) {
        super(dd, Od, md, Wd), this._framebuffer = null, this._depthStencilBuffer = null, this._MSAAFramebuffer = null, this._colorTextureArray = null, this._depthStencilTextureArray = null, this._disposeOnlyFramebuffers = !1, this._currentLOD = 0, this._context = Fd
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
          Od = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          md = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          Fd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          Rd = arguments.length > 5 ? arguments[5] : void 0;
        if (this._depthStencilBuffer) {
          const dd = this._engine,
            Od = dd._currentFramebuffer,
            md = this._context;
          dd._bindUnboundFramebuffer(this._framebuffer), md.framebufferRenderbuffer(md.FRAMEBUFFER, md.DEPTH_STENCIL_ATTACHMENT, md.RENDERBUFFER, null), md.framebufferRenderbuffer(md.FRAMEBUFFER, md.DEPTH_ATTACHMENT, md.RENDERBUFFER, null), md.framebufferRenderbuffer(md.FRAMEBUFFER, md.STENCIL_ATTACHMENT, md.RENDERBUFFER, null), dd._bindUnboundFramebuffer(Od), md.deleteRenderbuffer(this._depthStencilBuffer), this._depthStencilBuffer = null
        }
        return super.createDepthStencilTexture(dd, Od, md, Wd, Fd, Rd)
      }
      shareDepth(dd) {
        super.shareDepth(dd);
        const Od = this._context,
          md = this._depthStencilBuffer,
          Wd = dd._MSAAFramebuffer || dd._framebuffer,
          Fd = this._engine;
        dd._depthStencilBuffer && dd._depthStencilBuffer !== md && Od.deleteRenderbuffer(dd._depthStencilBuffer), dd._depthStencilBuffer = md;
        const Rd = dd._generateStencilBuffer ? Od.DEPTH_STENCIL_ATTACHMENT : Od.DEPTH_ATTACHMENT;
        Fd._bindUnboundFramebuffer(Wd), Od.framebufferRenderbuffer(Od.FRAMEBUFFER, Rd, Od.RENDERBUFFER, md), Fd._bindUnboundFramebuffer(null)
      }
      _bindTextureRenderTarget(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          md = arguments.length > 2 ? arguments[2] : void 0,
          Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const Fd = dd._hardwareTexture;
        if (!Fd) return;
        const Rd = this._framebuffer,
          Xd = this._engine,
          Kd = Xd._currentFramebuffer;
        let hd;
        if (Xd._bindUnboundFramebuffer(Rd), Xd.YH > 1) {
          const Rd = this._context;
          hd = Rd["COLOR_ATTACHMENT" + Od], dd.is2DArray || dd.is3D ? (md = md ?? this.layerIndices?.[Od] ?? 0, Rd.framebufferTextureLayer(Rd.FRAMEBUFFER, hd, Fd.underlyingResource, Wd, md)) : dd.isCube ? (md = md ?? this.faceIndices?.[Od] ?? 0, Rd.framebufferTexture2D(Rd.FRAMEBUFFER, hd, Rd.TEXTURE_CUBE_MAP_POSITIVE_X + md, Fd.underlyingResource, Wd)) : Rd.framebufferTexture2D(Rd.FRAMEBUFFER, hd, Rd.TEXTURE_2D, Fd.underlyingResource, Wd)
        } else {
          const dd = this._context;
          hd = dd["COLOR_ATTACHMENT" + Od + "_WEBGL"];
          const Rd = void 0 !== md ? dd.TEXTURE_CUBE_MAP_POSITIVE_X + md : dd.TEXTURE_2D;
          dd.framebufferTexture2D(dd.FRAMEBUFFER, hd, Rd, Fd.underlyingResource, Wd)
        }
        if (dd._autoMSAAManagement && this._MSAAFramebuffer) {
          const dd = this._context;
          Xd._bindUnboundFramebuffer(this._MSAAFramebuffer), dd.framebufferRenderbuffer(dd.FRAMEBUFFER, hd, dd.RENDERBUFFER, Fd.getMSAARenderBuffer())
        }
        Xd._bindUnboundFramebuffer(Kd)
      }
      setTexture(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          md = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        super.setTexture(dd, Od, md), this._bindTextureRenderTarget(dd, Od)
      }
      setLayerAndFaceIndices(dd, Od) {
        if (super.setLayerAndFaceIndices(dd, Od), !this.textures || !this.layerIndices || !this.faceIndices) return;
        const md = this._attachments?.length ?? this.textures.length;
        for (let Wd = 0; Wd < md; Wd++) {
          const dd = this.textures[Wd];
          dd && (dd.is2DArray || dd.is3D ? this._bindTextureRenderTarget(dd, Wd, this.layerIndices[Wd]) : dd.isCube ? this._bindTextureRenderTarget(dd, Wd, this.faceIndices[Wd]) : this._bindTextureRenderTarget(dd, Wd))
        }
      }
      setLayerAndFaceIndex() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Od = arguments.length > 1 ? arguments[1] : void 0,
          md = arguments.length > 2 ? arguments[2] : void 0;
        if (super.setLayerAndFaceIndex(dd, Od, md), !this.textures || !this.layerIndices || !this.faceIndices) return;
        const Wd = this.textures[dd];
        Wd.is2DArray || Wd.is3D ? this._bindTextureRenderTarget(this.textures[dd], dd, this.layerIndices[dd]) : Wd.isCube && this._bindTextureRenderTarget(this.textures[dd], dd, this.faceIndices[dd])
      }
      resolveMSAATextures() {
        const dd = this._engine,
          Od = dd._currentFramebuffer;
        dd._bindUnboundFramebuffer(this._MSAAFramebuffer), super.resolveMSAATextures(), dd._bindUnboundFramebuffer(Od)
      }
      dispose() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._disposeOnlyFramebuffers;
        const Od = this._context;
        dd || (this._colorTextureArray && (this._context.deleteTexture(this._colorTextureArray), this._colorTextureArray = null), this._depthStencilTextureArray && (this._context.deleteTexture(this._depthStencilTextureArray), this._depthStencilTextureArray = null)), this._framebuffer && (Od.deleteFramebuffer(this._framebuffer), this._framebuffer = null), this._depthStencilBuffer && (Od.deleteRenderbuffer(this._depthStencilBuffer), this._depthStencilBuffer = null), this._MSAAFramebuffer && (Od.deleteFramebuffer(this._MSAAFramebuffer), this._MSAAFramebuffer = null), super.dispose(dd)
      }
    }
    let vd = !1;
    vd || (vd = !0, Rd.ThinEngine.prototype._createHardwareRenderTargetWrapper = function(dd, Od, md) {
      const Wd = new hd(dd, Od, md, this, this._gl);
      return this._renderTargetWrapperCache.push(Wd), Wd
    }, Rd.ThinEngine.prototype.createRenderTargetTexture = function(dd, Od) {
      const md = this._createHardwareRenderTargetWrapper(!1, !1, dd);
      let Wd, Fd, Rd = !0,
        Xd = !1,
        Kd = !1,
        hd = 1;
      void 0 !== Od && "object" === typeof Od && (Rd = Od.generateDepthBuffer ?? !0, Xd = !!Od.generateStencilBuffer, Kd = !!Od.noColorAttachment, Wd = Od.colorAttachment, hd = Od.samples ?? 1, Fd = Od.label);
      const vd = Wd || (Kd ? null : this._createInternalTexture(dd, Od, !0, 5)),
        Qd = dd.width || dd,
        td = dd.height || dd,
        od = this._currentFramebuffer,
        Nd = this._gl,
        qd = Nd.createFramebuffer();
      if (this._bindUnboundFramebuffer(qd), md._depthStencilBuffer = this._setupFramebufferDepthAttachments(Xd, Rd, Qd, td), !vd || vd.is2DArray || vd.is3D || Nd.framebufferTexture2D(Nd.FRAMEBUFFER, Nd.COLOR_ATTACHMENT0, Nd.TEXTURE_2D, vd._hardwareTexture.underlyingResource, 0), this._bindUnboundFramebuffer(od), md.label = Fd ?? "RenderTargetWrapper", md._framebuffer = qd, md._generateDepthBuffer = Rd, md._generateStencilBuffer = Xd, md.setTextures(vd), Wd) {
        if (md._samples = Wd.samples, Wd.samples > 1) {
          const dd = Wd._hardwareTexture.getMSAARenderBuffer(0);
          md._MSAAFramebuffer = Nd.createFramebuffer(), this._bindUnboundFramebuffer(md._MSAAFramebuffer), Nd.framebufferRenderbuffer(Nd.FRAMEBUFFER, Nd.COLOR_ATTACHMENT0, Nd.RENDERBUFFER, dd), this._bindUnboundFramebuffer(null)
        }
      } else this.updateRenderTargetTextureSampleCount(md, hd);
      return md
    }, Rd.ThinEngine.prototype._createDepthStencilTexture = function(dd, Od, md) {
      const Rd = this._gl,
        Xd = dd.layers || 0,
        hd = dd.depth || 0;
      let vd = Rd.TEXTURE_2D;
      0 !== Xd ? vd = Rd.TEXTURE_2D_ARRAY : 0 !== hd && (vd = Rd.TEXTURE_3D);
      const Qd = new Wd.c(this, 12);
      if (Qd.label = Od.label, !this._caps.depthTextureExtension) return Fd.c.Error("Depth texture is not supported by your browser or hardware."), Qd;
      const td = {
        bilinearFiltering: !1,
        comparisonFunction: 0,
        generateStencil: !1,
        ...Od
      };
      if (this._bindTextureDirectly(vd, Qd, !0), this._setupDepthStencilTexture(Qd, dd, 0 !== td.comparisonFunction && td.bilinearFiltering, td.comparisonFunction, td.samples), void 0 !== td.depthTextureFormat) {
        if (15 !== td.depthTextureFormat && 16 !== td.depthTextureFormat && 17 !== td.depthTextureFormat && 13 !== td.depthTextureFormat && 14 !== td.depthTextureFormat && 18 !== td.depthTextureFormat) return Fd.c.Error(`Depth texture ${td.depthTextureFormat} format is not supported.`), Qd;
        Qd.format = td.depthTextureFormat
      } else Qd.format = td.generateStencil ? 13 : 16;
      const od = (0, Kd.d)(Qd.format),
        Nd = this._getWebGLTextureTypeFromDepthTextureFormat(Qd.format),
        qd = od ? Rd.DEPTH_STENCIL : Rd.DEPTH_COMPONENT,
        Hd = this._getInternalFormatFromDepthTextureFormat(Qd.format, !0, od);
      return Qd.is2DArray ? Rd.texImage3D(vd, 0, Hd, Qd.width, Qd.height, Xd, 0, qd, Nd, null) : Qd.is3D ? Rd.texImage3D(vd, 0, Hd, Qd.width, Qd.height, hd, 0, qd, Nd, null) : Rd.texImage2D(vd, 0, Hd, Qd.width, Qd.height, 0, qd, Nd, null), this._bindTextureDirectly(vd, null), this._internalTexturesCache.push(Qd), md._depthStencilBuffer && (Rd.deleteRenderbuffer(md._depthStencilBuffer), md._depthStencilBuffer = null), this._bindUnboundFramebuffer(md._MSAAFramebuffer ?? md._framebuffer), md._generateStencilBuffer = od, md._depthStencilTextureWithStencil = od, md._depthStencilBuffer = this._setupFramebufferDepthAttachments(md._generateStencilBuffer, md._generateDepthBuffer, md.width, md.height, md.samples, Qd.format), this._bindUnboundFramebuffer(null), Qd
    }, Rd.ThinEngine.prototype.updateRenderTargetTextureSampleCount = function(dd, Od) {
      if (this.YH < 2 || !dd) return 1;
      if (dd.samples === Od) return Od;
      const md = this._gl;
      Od = Math.min(Od, this.getCaps().maxMSAASamples), dd._depthStencilBuffer && (md.deleteRenderbuffer(dd._depthStencilBuffer), dd._depthStencilBuffer = null), dd._MSAAFramebuffer && (md.deleteFramebuffer(dd._MSAAFramebuffer), dd._MSAAFramebuffer = null);
      const Wd = dd.texture?._hardwareTexture;
      if (Wd?.releaseMSAARenderBuffers(), dd.texture && Od > 1 && "function" === typeof md.renderbufferStorageMultisample) {
        const Fd = md.createFramebuffer();
        if (!Fd) throw new Error("Unable to create multi sampled framebuffer");
        dd._MSAAFramebuffer = Fd, this._bindUnboundFramebuffer(dd._MSAAFramebuffer);
        const Rd = this._createRenderBuffer(dd.texture.width, dd.texture.height, Od, -1, this._getRGBABufferInternalSizedFormat(dd.texture.type, dd.texture.format, dd.texture._useSRGBBuffer), md.COLOR_ATTACHMENT0, !1);
        if (!Rd) throw new Error("Unable to create multi sampled framebuffer");
        Wd?.addMSAARenderBuffer(Rd)
      }
      this._bindUnboundFramebuffer(dd._MSAAFramebuffer ?? dd._framebuffer), dd.texture && (dd.texture.samples = Od), dd._samples = Od;
      const Fd = dd._depthStencilTexture ? dd._depthStencilTexture.format : void 0;
      return dd._depthStencilBuffer = this._setupFramebufferDepthAttachments(dd._generateStencilBuffer, dd._generateDepthBuffer, dd.width, dd.height, Od, Fd), this._bindUnboundFramebuffer(null), Od
    }, Rd.ThinEngine.prototype._setupDepthStencilTexture = function(dd, Od, md, Wd) {
      let Fd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1;
      const Rd = Od.width ?? Od,
        Xd = Od.height ?? Od,
        Kd = Od.layers || 0,
        hd = Od.depth || 0;
      dd.baseWidth = Rd, dd.baseHeight = Xd, dd.width = Rd, dd.height = Xd, dd.is2DArray = Kd > 0, dd.depth = Kd || hd, dd.isReady = !0, dd.samples = Fd, dd.generateMipMaps = !1, dd.samplingMode = md ? 2 : 1, dd.type = 0, dd._comparisonFunction = Wd;
      const vd = this._gl,
        Qd = this._getTextureTarget(dd),
        td = this._getSamplingParameters(dd.samplingMode, !1);
      vd.texParameteri(Qd, vd.TEXTURE_MAG_FILTER, td.mag), vd.texParameteri(Qd, vd.TEXTURE_MIN_FILTER, td.min), vd.texParameteri(Qd, vd.TEXTURE_WRAP_S, vd.CLAMP_TO_EDGE), vd.texParameteri(Qd, vd.TEXTURE_WRAP_T, vd.CLAMP_TO_EDGE), this.YH > 1 && (0 === Wd ? (vd.texParameteri(Qd, vd.TEXTURE_COMPARE_FUNC, 515), vd.texParameteri(Qd, vd.TEXTURE_COMPARE_MODE, vd.NONE)) : (vd.texParameteri(Qd, vd.TEXTURE_COMPARE_FUNC, Wd), vd.texParameteri(Qd, vd.TEXTURE_COMPARE_MODE, vd.COMPARE_REF_TO_TEXTURE)))
    })
  },
  41756: (dd, Od, md) => {
    md.d(Od, {
      d: () => Wd.c
    });
    var Wd = md(41759);
    (0, md(41894).c)();
    var Fd = md(41777);
    let Rd = !1;
    ! function() {
      if (Rd) return;
      Rd = !0;
      const dd = new WeakMap,
        Od = new WeakMap,
        md = new WeakMap,
        Wd = new WeakMap;
      Fd.ThinEngine.prototype.getAlphaToCoverage = function() {
        return dd.get(this) ?? !1
      }, Fd.ThinEngine.prototype.setAlphaToCoverage = function(md) {
        (dd.get(this) !== md || this._gl && Od.get(this) !== this._gl) && (dd.set(this, md), this._gl && (md ? this._gl.enable(this._gl.SAMPLE_ALPHA_TO_COVERAGE) : this._gl.disable(this._gl.SAMPLE_ALPHA_TO_COVERAGE), Od.set(this, this._gl)))
      }, Object.defineProperty(Fd.ThinEngine.prototype, "currentSampleCount", {
        get: function() {
          return this._currentRenderTarget ? this._currentRenderTarget.samples : this._gl ? (Wd.get(this) !== this._gl && (md.set(this, this._gl.getContextAttributes()?.antialias ? Math.max(1, this._gl.getParameter(this._gl.SAMPLES)) : 1), Wd.set(this, this._gl)), md.get(this)) : 1
        },
        enumerable: !1,
        configurable: !0
      })
    }();
    var Xd = md(41763),
      Kd = md(40262),
      hd = md(41859);
    let vd = !1;
    ! function() {
      function dd(dd, Od, md, Wd) {
        let Fd, Rd = 1;
        1 === Wd ? Fd = new Float32Array(Od * md * 4) : 2 === Wd ? (Fd = new Uint16Array(Od * md * 4), Rd = 15360) : Fd = 7 === Wd ? new Uint32Array(Od * md * 4) : new Uint8Array(Od * md * 4);
        for (let Xd = 0; Xd < Od; Xd++)
          for (let Wd = 0; Wd < md; Wd++) {
            const md = 3 * (Wd * Od + Xd),
              Kd = 4 * (Wd * Od + Xd);
            Fd[Kd + 0] = dd[md + 0], Fd[Kd + 1] = dd[md + 1], Fd[Kd + 2] = dd[md + 2], Fd[Kd + 3] = Rd
          }
        return Fd
      }

      function Od(dd) {
        return function(Od, md, Wd, Fd, Rd, Kd, hd, vd) {
          let Qd = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
            td = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
          const od = dd ? this._gl.TEXTURE_3D : this._gl.TEXTURE_2D_ARRAY,
            Nd = dd ? 10 : 11,
            qd = new Xd.c(this, Nd);
          qd.baseWidth = md, qd.baseHeight = Wd, qd.baseDepth = Fd, qd.width = md, qd.height = Wd, qd.depth = Fd, qd.format = Rd, qd.type = td, qd.generateMipMaps = Kd, qd.samplingMode = vd, dd ? qd.is3D = !0 : qd.is2DArray = !0, this._doNotHandleContextLost || (qd._bufferView = Od), dd ? this.updateRawTexture3D(qd, Od, Rd, hd, Qd, td) : this.updateRawTexture2DArray(qd, Od, Rd, hd, Qd, td), this._bindTextureDirectly(od, qd, !0);
          const Hd = this._getSamplingParameters(vd, Kd);
          return this._gl.texParameteri(od, this._gl.TEXTURE_MAG_FILTER, Hd.mag), this._gl.texParameteri(od, this._gl.TEXTURE_MIN_FILTER, Hd.min), Kd && this._gl.generateMipmap(od), this._bindTextureDirectly(od, null), this._internalTexturesCache.push(qd), qd
        }
      }

      function md(dd) {
        return function(Od, md, Wd, Fd) {
          let Rd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            Xd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
          const Kd = dd ? this._gl.TEXTURE_3D : this._gl.TEXTURE_2D_ARRAY,
            hd = this._getWebGLTextureType(Xd),
            vd = this._getInternalFormat(Wd),
            Qd = this._getRGBABufferInternalSizedFormat(Xd, Wd);
          this._bindTextureDirectly(Kd, Od, !0), this._unpackFlipY(void 0 === Fd || !!Fd), this._doNotHandleContextLost || (Od._bufferView = md, Od.format = Wd, Od.invertY = Fd, Od._compression = Rd), Od.width % 4 !== 0 && this._gl.pixelStorei(this._gl.UNPACK_ALIGNMENT, 1), Rd && md ? this._gl.compressedTexImage3D(Kd, 0, this.getCaps().s3tc[Rd], Od.width, Od.height, Od.depth, 0, md) : this._gl.texImage3D(Kd, 0, Qd, Od.width, Od.height, Od.depth, 0, vd, hd, md), Od.generateMipMaps && this._gl.generateMipmap(Kd), this._bindTextureDirectly(Kd, null), Od.isReady = !0
        }
      }
      vd || (vd = !0, Fd.ThinEngine.prototype.updateRawTexture = function(dd, Od, md, Wd) {
        let Fd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          Rd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          Xd = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        if (!dd) return;
        const Kd = this._getRGBABufferInternalSizedFormat(Rd, md, Xd),
          hd = this._getInternalFormat(md),
          vd = this._getWebGLTextureType(Rd);
        this._bindTextureDirectly(this._gl.TEXTURE_2D, dd, !0), this._unpackFlipY(void 0 === Wd || !!Wd), this._doNotHandleContextLost || (dd._bufferView = Od, dd.format = md, dd.type = Rd, dd.invertY = Wd, dd._compression = Fd), dd.width % 4 !== 0 && this._gl.pixelStorei(this._gl.UNPACK_ALIGNMENT, 1), Fd && Od ? this._gl.compressedTexImage2D(this._gl.TEXTURE_2D, 0, this.getCaps().s3tc[Fd], dd.width, dd.height, 0, Od) : this._gl.texImage2D(this._gl.TEXTURE_2D, 0, Kd, dd.width, dd.height, 0, hd, vd, Od), dd.generateMipMaps && this._gl.generateMipmap(this._gl.TEXTURE_2D), this._bindTextureDirectly(this._gl.TEXTURE_2D, null), dd.isReady = !0
      }, Fd.ThinEngine.prototype.createRawTexture = function(dd, Od, md, Wd, Fd, Rd, Kd) {
        let hd = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          vd = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
          Qd = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const td = new Xd.c(this, 3);
        td.baseWidth = Od, td.baseHeight = md, td.width = Od, td.height = md, td.format = Wd, td.generateMipMaps = Fd, td.samplingMode = Kd, td.invertY = Rd, td._compression = hd, td.type = vd, td._useSRGBBuffer = this._getUseSRGBBuffer(Qd, !Fd), this._doNotHandleContextLost || (td._bufferView = dd), this.updateRawTexture(td, dd, Wd, Rd, hd, vd, td._useSRGBBuffer), this._bindTextureDirectly(this._gl.TEXTURE_2D, td, !0);
        const od = this._getSamplingParameters(Kd, Fd);
        return this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MAG_FILTER, od.mag), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MIN_FILTER, od.min), Fd && this._gl.generateMipmap(this._gl.TEXTURE_2D), this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._internalTexturesCache.push(td), td
      }, Fd.ThinEngine.prototype.createRawCubeTexture = function(dd, Od, md, Wd, Fd, Rd, vd) {
        let Qd = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null;
        const td = this._gl,
          od = new Xd.c(this, 8);
        od.isCube = !0, od.format = md, od.type = Wd, this._doNotHandleContextLost || (od._bufferViewArray = dd);
        const Nd = this._getWebGLTextureType(Wd);
        let qd = this._getInternalFormat(md);
        qd === td.RGB && (qd = td.RGBA), Nd !== td.FLOAT || this._caps.textureFloatLinearFiltering ? Nd !== this._gl.HALF_FLOAT_OES || this._caps.textureHalfFloatLinearFiltering ? Nd !== td.FLOAT || this._caps.textureFloatRender ? Nd !== td.HALF_FLOAT || this._caps.colorBufferFloat || (Fd = !1, Kd.c.Warn("Render to half float textures is not supported. Mipmap generation forced to false.")) : (Fd = !1, Kd.c.Warn("Render to float textures is not supported. Mipmap generation forced to false.")) : (Fd = !1, vd = 1, Kd.c.Warn("Half float texture filtering is not supported. Mipmap generation and sampling mode are forced to false and TEXTURE_NEAREST_SAMPLINGMODE, respectively.")) : (Fd = !1, vd = 1, Kd.c.Warn("Float texture filtering is not supported. Mipmap generation and sampling mode are forced to false and TEXTURE_NEAREST_SAMPLINGMODE, respectively."));
        const Hd = Od,
          yd = Hd;
        od.width = Hd, od.height = yd, od.invertY = Rd, od._compression = Qd;
        if (!this.needPOTTextures || (0, hd.i)(od.width) && (0, hd.i)(od.height) || (Fd = !1), dd) this.updateRawCubeTexture(od, dd, md, Wd, Rd, Qd);
        else {
          const dd = this._getRGBABufferInternalSizedFormat(Wd),
            Od = 0;
          this._bindTextureDirectly(td.TEXTURE_CUBE_MAP, od, !0);
          for (let md = 0; md < 6; md++) Qd ? td.compressedTexImage2D(td.TEXTURE_CUBE_MAP_POSITIVE_X + md, Od, this.getCaps().s3tc[Qd], od.width, od.height, 0, void 0) : td.texImage2D(td.TEXTURE_CUBE_MAP_POSITIVE_X + md, Od, dd, od.width, od.height, 0, qd, Nd, null);
          this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null)
        }
        this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, od, !0), dd && Fd && this._gl.generateMipmap(this._gl.TEXTURE_CUBE_MAP);
        const bd = this._getSamplingParameters(vd, Fd);
        return td.texParameteri(td.TEXTURE_CUBE_MAP, td.TEXTURE_MAG_FILTER, bd.mag), td.texParameteri(td.TEXTURE_CUBE_MAP, td.TEXTURE_MIN_FILTER, bd.min), td.texParameteri(td.TEXTURE_CUBE_MAP, td.TEXTURE_WRAP_S, td.CLAMP_TO_EDGE), td.texParameteri(td.TEXTURE_CUBE_MAP, td.TEXTURE_WRAP_T, td.CLAMP_TO_EDGE), this._bindTextureDirectly(td.TEXTURE_CUBE_MAP, null), od.generateMipMaps = Fd, od.samplingMode = vd, od.isReady = !0, od
      }, Fd.ThinEngine.prototype.updateRawCubeTexture = function(Od, md, Wd, Fd, Rd) {
        let Xd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          Kd = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        Od._bufferViewArray = md, Od.format = Wd, Od.type = Fd, Od.invertY = Rd, Od._compression = Xd;
        const vd = this._gl,
          Qd = this._getWebGLTextureType(Fd);
        let td = this._getInternalFormat(Wd);
        const od = this._getRGBABufferInternalSizedFormat(Fd);
        let Nd = !1;
        td === vd.RGB && (td = vd.RGBA, Nd = !0), this._bindTextureDirectly(vd.TEXTURE_CUBE_MAP, Od, !0), this._unpackFlipY(void 0 === Rd || !!Rd), Od.width % 4 !== 0 && vd.pixelStorei(vd.UNPACK_ALIGNMENT, 1);
        for (let hd = 0; hd < 6; hd++) {
          let Wd = md[hd];
          Xd ? vd.compressedTexImage2D(vd.TEXTURE_CUBE_MAP_POSITIVE_X + hd, Kd, this.getCaps().s3tc[Xd], Od.width, Od.height, 0, Wd) : (Nd && (Wd = dd(Wd, Od.width, Od.height, Fd)), vd.texImage2D(vd.TEXTURE_CUBE_MAP_POSITIVE_X + hd, Kd, od, Od.width, Od.height, 0, td, Qd, Wd))
        }(!this.needPOTTextures || (0, hd.i)(Od.width) && (0, hd.i)(Od.height)) && Od.generateMipMaps && 0 === Kd && this._gl.generateMipmap(this._gl.TEXTURE_CUBE_MAP), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), Od.isReady = !0
      }, Fd.ThinEngine.prototype.createRawCubeTextureFromUrl = function(Od, md, Wd, Fd, Rd, Xd, Kd, hd) {
        let vd = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          Qd = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          td = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 3,
          od = arguments.length > 11 && void 0 !== arguments[11] && arguments[11];
        const Nd = this._gl,
          qd = this.createRawCubeTexture(null, Wd, Fd, Rd, !Xd, od, td, null);
        md?.addPendingData(qd), qd.url = Od, qd.isReady = !1, this._internalTexturesCache.push(qd);
        const Hd = (dd, Od) => {
            md?.removePendingData(qd), Qd && Qd(dd ? dd.status + " " + dd.statusText : "Failed to parse texture data", Od)
          },
          yd = async Od => {
            if (!qd._hardwareTexture) return;
            const Wd = Kd(Od);
            if (!Wd) return;
            const Xd = Wd instanceof Promise ? await Wd : Wd,
              Qd = qd.width;
            if (hd) {
              const Od = this._getWebGLTextureType(Rd);
              let md = this._getInternalFormat(Fd);
              const Wd = this._getRGBABufferInternalSizedFormat(Rd);
              let Kd = !1;
              md === Nd.RGB && (md = Nd.RGBA, Kd = !0), this._bindTextureDirectly(Nd.TEXTURE_CUBE_MAP, qd, !0), this._unpackFlipY(!1);
              const vd = hd(Xd);
              for (let Fd = 0; Fd < vd.length; Fd++) {
                const Xd = Qd >> Fd;
                for (let hd = 0; hd < 6; hd++) {
                  let Qd = vd[Fd][hd];
                  Kd && (Qd = dd(Qd, Xd, Xd, Rd)), Nd.texImage2D(hd, Fd, Wd, Xd, Xd, 0, md, Od, Qd)
                }
              }
              this._bindTextureDirectly(Nd.TEXTURE_CUBE_MAP, null)
            } else this.updateRawCubeTexture(qd, Xd, Fd, Rd, od);
            qd.isReady = !0, md?.removePendingData(qd), qd.onLoadedObservable.notifyObservers(qd), qd.onLoadedObservable.clear(), vd && vd()
          };
        return this._loadFile(Od, (dd => {
          yd(dd).catch((dd => {
            Hd(void 0, dd)
          }))
        }), void 0, md?.offlineProvider, !0, Hd), qd
      }, Fd.ThinEngine.prototype.createRawTexture2DArray = Od(!1), Fd.ThinEngine.prototype.createRawTexture3D = Od(!0), Fd.ThinEngine.prototype.updateRawTexture2DArray = md(!1), Fd.ThinEngine.prototype.updateRawTexture3D = md(!0))
    }();
    var Qd = md(41810);
    let td = !1;
    td || (td = !0, Fd.ThinEngine.prototype._readTexturePixelsSync = function(dd, Od, md) {
      let Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1,
        Fd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        Rd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        Xd = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
        Kd = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        hd = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
        vd = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
      const td = this._gl;
      if (!td) throw new Error("Engine does not have gl rendering context.");
      if (!this._dummyFramebuffer) {
        const dd = td.createFramebuffer();
        if (!dd) throw new Error("Unable to create dummy framebuffer");
        this._dummyFramebuffer = dd
      }
      td.bindFramebuffer(td.FRAMEBUFFER, this._dummyFramebuffer), Wd > -1 && (dd.is2DArray || dd.is3D) ? td.framebufferTextureLayer(td.FRAMEBUFFER, td.COLOR_ATTACHMENT0, dd._hardwareTexture?.underlyingResource, Fd, Wd) : Wd > -1 ? td.framebufferTexture2D(td.FRAMEBUFFER, td.COLOR_ATTACHMENT0, td.TEXTURE_CUBE_MAP_POSITIVE_X + Wd, dd._hardwareTexture?.underlyingResource, Fd) : td.framebufferTexture2D(td.FRAMEBUFFER, td.COLOR_ATTACHMENT0, td.TEXTURE_2D, dd._hardwareTexture?.underlyingResource, Fd);
      let od = void 0 !== dd.type ? this._getWebGLTextureType(dd.type) : td.UNSIGNED_BYTE;
      return Kd ? Rd || (Rd = (0, Qd.j)(dd.type, 4 * Od * md)) : od === td.UNSIGNED_BYTE ? (Rd || (Rd = new Uint8Array(4 * Od * md)), od = td.UNSIGNED_BYTE) : (Rd || (Rd = new Float32Array(4 * Od * md)), od = td.FLOAT), Xd && this.flushFramebuffer(), td.readPixels(hd, vd, Od, md, td.RGBA, od, Rd), td.bindFramebuffer(td.FRAMEBUFFER, this._currentFramebuffer), Rd
    }, Fd.ThinEngine.prototype._readTexturePixels = function(dd, Od, md) {
      let Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1,
        Fd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        Rd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        Xd = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
        Kd = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        hd = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
        vd = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
      return Promise.resolve(this._readTexturePixelsSync(dd, Od, md, Wd, Fd, Rd, Xd, Kd, hd, vd))
    }), (0, md(41897).c)();
    let od = !1;
    od || (od = !0, Fd.ThinEngine.prototype._createDepthStencilCubeTexture = function(dd, Od) {
      const md = new Xd.c(this, 12);
      if (md.isCube = !0, 1 === this.YH) return Kd.c.Error("Depth cube texture is not supported by WebGL 1."), md;
      const Wd = {
          bilinearFiltering: !1,
          comparisonFunction: 0,
          generateStencil: !1,
          ...Od
        },
        Fd = this._gl;
      this._bindTextureDirectly(Fd.TEXTURE_CUBE_MAP, md, !0), this._setupDepthStencilTexture(md, dd, Wd.bilinearFiltering, Wd.comparisonFunction);
      for (let Rd = 0; Rd < 6; Rd++) Wd.generateStencil ? Fd.texImage2D(Fd.TEXTURE_CUBE_MAP_POSITIVE_X + Rd, 0, Fd.DEPTH24_STENCIL8, dd, dd, 0, Fd.DEPTH_STENCIL, Fd.UNSIGNED_INT_24_8, null) : Fd.texImage2D(Fd.TEXTURE_CUBE_MAP_POSITIVE_X + Rd, 0, Fd.DEPTH_COMPONENT24, dd, dd, 0, Fd.DEPTH_COMPONENT, Fd.UNSIGNED_INT, null);
      return this._bindTextureDirectly(Fd.TEXTURE_CUBE_MAP, null), this._internalTexturesCache.push(md), md
    }, Fd.ThinEngine.prototype._setCubeMapTextureParams = function(dd, Od, md) {
      const Wd = this._gl;
      Wd.texParameteri(Wd.TEXTURE_CUBE_MAP, Wd.TEXTURE_MAG_FILTER, Wd.LINEAR), Wd.texParameteri(Wd.TEXTURE_CUBE_MAP, Wd.TEXTURE_MIN_FILTER, Od ? Wd.LINEAR_MIPMAP_LINEAR : Wd.LINEAR), Wd.texParameteri(Wd.TEXTURE_CUBE_MAP, Wd.TEXTURE_WRAP_S, Wd.CLAMP_TO_EDGE), Wd.texParameteri(Wd.TEXTURE_CUBE_MAP, Wd.TEXTURE_WRAP_T, Wd.CLAMP_TO_EDGE), dd.samplingMode = Od ? 3 : 2, Od && this.getCaps().textureMaxLevel && void 0 !== md && md > 0 && (Wd.texParameteri(Wd.TEXTURE_CUBE_MAP, Wd.TEXTURE_MAX_LEVEL, md), dd._maxLodLevel = md), this._bindTextureDirectly(Wd.TEXTURE_CUBE_MAP, null)
    }, Fd.ThinEngine.prototype.createCubeTexture = function(dd, Od, md, Wd) {
      let Fd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        Rd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        Xd = arguments.length > 6 ? arguments[6] : void 0,
        vd = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        Qd = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        td = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
        od = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
        Nd = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
        qd = arguments.length > 13 && void 0 !== arguments[13] && arguments[13],
        Hd = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : null;
      const yd = this._gl;
      return this.createCubeTextureBase(dd, Od, md, !!Wd, Fd, Rd, Xd, vd, Qd, td, od, Nd, (dd => this._bindTextureDirectly(yd.TEXTURE_CUBE_MAP, dd, !0)), ((dd, Od) => {
        const md = this.needPOTTextures ? (0, hd.f)(Od[0].width, this._caps.maxCubemapTextureSize) : Od[0].width,
          Rd = md,
          vd = [yd.TEXTURE_CUBE_MAP_POSITIVE_X, yd.TEXTURE_CUBE_MAP_POSITIVE_Y, yd.TEXTURE_CUBE_MAP_POSITIVE_Z, yd.TEXTURE_CUBE_MAP_NEGATIVE_X, yd.TEXTURE_CUBE_MAP_NEGATIVE_Y, yd.TEXTURE_CUBE_MAP_NEGATIVE_Z];
        this._bindTextureDirectly(yd.TEXTURE_CUBE_MAP, dd, !0), this._unpackFlipY(!1);
        const Qd = Xd ? this._getInternalFormat(Xd, dd._useSRGBBuffer) : dd._useSRGBBuffer ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : yd.RGBA;
        let td = Xd ? this._getInternalFormat(Xd) : yd.RGBA;
        dd._useSRGBBuffer && 1 === this.YH && (td = Qd);
        for (let Wd = 0; Wd < vd.length; Wd++)
          if (Od[Wd].width !== md || Od[Wd].height !== Rd) {
            if (this._prepareWorkingCanvas(), !this._workingCanvas || !this._workingContext) return void Kd.c.Warn("Cannot create canvas to resize texture.");
            this._workingCanvas.width = md, this._workingCanvas.height = Rd, this._workingContext.drawImage(Od[Wd], 0, 0, Od[Wd].width, Od[Wd].height, 0, 0, md, Rd), yd.texImage2D(vd[Wd], 0, Qd, td, yd.UNSIGNED_BYTE, this._workingCanvas)
          } else yd.texImage2D(vd[Wd], 0, Qd, td, yd.UNSIGNED_BYTE, Od[Wd]);
        Wd || yd.generateMipmap(yd.TEXTURE_CUBE_MAP), this._setCubeMapTextureParams(dd, !Wd), dd.width = md, dd.height = Rd, dd.isReady = !0, Xd && (dd.format = Xd), dd.onLoadedObservable.notifyObservers(dd), dd.onLoadedObservable.clear(), Fd && Fd()
      }), !!qd, Hd)
    }, Fd.ThinEngine.prototype.generateMipMapsForCubemap = function(dd) {
      let Od = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (dd.generateMipMaps) {
        const md = this._gl;
        this._bindTextureDirectly(md.TEXTURE_CUBE_MAP, dd, !0), md.generateMipmap(md.TEXTURE_CUBE_MAP), Od && this._bindTextureDirectly(md.TEXTURE_CUBE_MAP, null)
      }
    });
    md(41901);
    let Nd = !1;
    Nd || (Nd = !0, Fd.ThinEngine.prototype.setDepthStencilTexture = function(dd, Od, md, Wd) {
      void 0 !== dd && (Od && (this._boundUniforms[dd] = Od), md && md.depthStencilTexture ? this._setTexture(dd, md, !1, !0, Wd) : this._setTexture(dd, null, void 0, void 0, Wd))
    });
    let qd = !1;
    qd || (qd = !0, Fd.ThinEngine.prototype.createRenderTargetCubeTexture = function(dd, Od) {
      const md = this._createHardwareRenderTargetWrapper(!1, !0, dd),
        Wd = {
          generateMipMaps: !0,
          generateDepthBuffer: !0,
          generateStencilBuffer: !1,
          type: 0,
          samplingMode: 3,
          format: 5,
          ...Od
        };
      Wd.generateStencilBuffer = Wd.generateDepthBuffer && Wd.generateStencilBuffer, (1 !== Wd.type || this._caps.textureFloatLinearFiltering) && (2 !== Wd.type || this._caps.textureHalfFloatLinearFiltering) || (Wd.samplingMode = 1);
      const Fd = this._gl,
        Rd = new Xd.c(this, 5);
      this._bindTextureDirectly(Fd.TEXTURE_CUBE_MAP, Rd, !0);
      const hd = this._getSamplingParameters(Wd.samplingMode, Wd.generateMipMaps);
      1 !== Wd.type || this._caps.textureFloat || (Wd.type = 0, Kd.c.Warn("Float textures are not supported. Cube render target forced to TEXTURETYPE_UNESIGNED_BYTE type")), Fd.texParameteri(Fd.TEXTURE_CUBE_MAP, Fd.TEXTURE_MAG_FILTER, hd.mag), Fd.texParameteri(Fd.TEXTURE_CUBE_MAP, Fd.TEXTURE_MIN_FILTER, hd.min), Fd.texParameteri(Fd.TEXTURE_CUBE_MAP, Fd.TEXTURE_WRAP_S, Fd.CLAMP_TO_EDGE), Fd.texParameteri(Fd.TEXTURE_CUBE_MAP, Fd.TEXTURE_WRAP_T, Fd.CLAMP_TO_EDGE);
      for (let Xd = 0; Xd < 6; Xd++) Fd.texImage2D(Fd.TEXTURE_CUBE_MAP_POSITIVE_X + Xd, 0, this._getRGBABufferInternalSizedFormat(Wd.type, Wd.format), dd, dd, 0, this._getInternalFormat(Wd.format), this._getWebGLTextureType(Wd.type), null);
      const vd = Fd.createFramebuffer();
      return this._bindUnboundFramebuffer(vd), md._depthStencilBuffer = this._setupFramebufferDepthAttachments(Wd.generateStencilBuffer, Wd.generateDepthBuffer, dd, dd), Wd.generateMipMaps && Fd.generateMipmap(Fd.TEXTURE_CUBE_MAP), this._bindTextureDirectly(Fd.TEXTURE_CUBE_MAP, null), this._bindUnboundFramebuffer(null), md._framebuffer = vd, md._generateDepthBuffer = Wd.generateDepthBuffer, md._generateStencilBuffer = Wd.generateStencilBuffer, Rd.width = dd, Rd.height = dd, Rd.isReady = !0, Rd.isCube = !0, Rd.samples = 1, Rd.generateMipMaps = Wd.generateMipMaps, Rd.samplingMode = Wd.samplingMode, Rd.type = Wd.type, Rd.format = Wd.format, this._internalTexturesCache.push(Rd), md.setTextures(Rd), md
    });
    var Hd = md(41907),
      yd = md(41914);
    let bd = !1;
    bd || (bd = !0, Fd.ThinEngine.prototype.createPrefilteredCubeTexture = function(dd, Od, Wd, Fd) {
      let Rd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        hd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        vd = arguments.length > 6 ? arguments[6] : void 0,
        Qd = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        td = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
        od = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null;
      return this.createCubeTexture(dd, Od, null, !1, (async dd => {
        if (!dd) return void(Rd && Rd(null));
        const hd = dd.texture;
        if (td ? dd.info.sphericalPolynomial && (hd._sphericalPolynomial = dd.info.sphericalPolynomial) : hd._sphericalPolynomial = hd._sphericalPolynomial ?? new Hd.e, hd._source = 9, this.getCaps().textureLOD) return void(Rd && Rd(hd));
        const vd = this._gl,
          Qd = dd.width;
        if (!Qd) return;
        const {
          DDSTools: od
        } = await md.e(625).then((() => md(54189))), Nd = [];
        for (let md = 0; md < 3; md++) {
          const Rd = 1 - md / 2,
            td = Fd,
            qd = Math.log2(Qd) * Wd + Fd,
            Hd = td + (qd - td) * Rd,
            bd = Math.round(Math.min(Math.max(Hd, 0), qd)),
            Td = new Xd.c(this, 2);
          if (Td.type = hd.type, Td.format = hd.format, Td.width = Math.pow(2, Math.max(Math.log2(Qd) - bd, 0)), Td.height = Td.width, Td.isCube = !0, Td._cachedWrapU = 0, Td._cachedWrapV = 0, this._bindTextureDirectly(vd.TEXTURE_CUBE_MAP, Td, !0), Td.samplingMode = 2, vd.texParameteri(vd.TEXTURE_CUBE_MAP, vd.TEXTURE_MAG_FILTER, vd.LINEAR), vd.texParameteri(vd.TEXTURE_CUBE_MAP, vd.TEXTURE_MIN_FILTER, vd.LINEAR), vd.texParameteri(vd.TEXTURE_CUBE_MAP, vd.TEXTURE_WRAP_S, vd.CLAMP_TO_EDGE), vd.texParameteri(vd.TEXTURE_CUBE_MAP, vd.TEXTURE_WRAP_T, vd.CLAMP_TO_EDGE), dd.isDDS) {
            const Od = dd.info,
              md = dd.data;
            this._unpackFlipY(Od.isCompressed), od.UploadDDSLevels(this, Td, md, Od, !0, 6, bd)
          } else Kd.c.Warn("DDS is the only prefiltered cube map supported so far.");
          this._bindTextureDirectly(vd.TEXTURE_CUBE_MAP, null);
          const pd = new yd.c(Od);
          pd._isCube = !0, pd._texture = Td, Td.isReady = !0, Nd.push(pd)
        }
        hd._lodTextureHigh = Nd[2], hd._lodTextureMid = Nd[1], hd._lodTextureLow = Nd[0], Rd && Rd(hd)
      }), hd, vd, Qd, td, Wd, Fd, null, void 0, !1, od)
    });
    var Td = md(41854);
    let pd = !1;
    pd || (pd = !0, Fd.ThinEngine.prototype.createUniformBuffer = function(dd, Od) {
      const md = this._gl.createBuffer();
      if (!md) throw new Error("Unable to create uniform buffer");
      const Wd = new Td.d(md);
      return this.bindUniformBuffer(Wd), dd instanceof Float32Array ? this._gl.bufferData(this._gl.UNIFORM_BUFFER, dd, this._gl.STATIC_DRAW) : this._gl.bufferData(this._gl.UNIFORM_BUFFER, new Float32Array(dd), this._gl.STATIC_DRAW), this.bindUniformBuffer(null), Wd.references = 1, Wd
    }, Fd.ThinEngine.prototype.createDynamicUniformBuffer = function(dd, Od) {
      const md = this._gl.createBuffer();
      if (!md) throw new Error("Unable to create dynamic uniform buffer");
      const Wd = new Td.d(md);
      return this.bindUniformBuffer(Wd), dd instanceof Float32Array ? this._gl.bufferData(this._gl.UNIFORM_BUFFER, dd, this._gl.DYNAMIC_DRAW) : this._gl.bufferData(this._gl.UNIFORM_BUFFER, new Float32Array(dd), this._gl.DYNAMIC_DRAW), this.bindUniformBuffer(null), Wd.references = 1, Wd
    }, Fd.ThinEngine.prototype.updateUniformBuffer = function(dd, Od, md, Wd) {
      this.bindUniformBuffer(dd), void 0 === md && (md = 0), void 0 === Wd ? Od instanceof Float32Array ? this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, md, Od) : this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, md, new Float32Array(Od)) : Od instanceof Float32Array ? this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, 0, Od.subarray(md, md + Wd)) : this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, 0, new Float32Array(Od).subarray(md, md + Wd)), this.bindUniformBuffer(null)
    }, Fd.ThinEngine.prototype.bindUniformBuffer = function(dd) {
      this._gl.bindBuffer(this._gl.UNIFORM_BUFFER, dd ? dd.underlyingResource : null)
    }, Fd.ThinEngine.prototype.bindUniformBufferBase = function(dd, Od, md) {
      this._gl.bindBufferBase(this._gl.UNIFORM_BUFFER, Od, dd ? dd.underlyingResource : null)
    }, Fd.ThinEngine.prototype.bindUniformBlock = function(dd, Od, md) {
      const Wd = dd.program,
        Fd = this._gl.getUniformBlockIndex(Wd, Od);
      4294967295 !== Fd && this._gl.uniformBlockBinding(Wd, Fd, md)
    });
    var Yd = md(41799),
      gd = md(41838);
    let wd = !1;
    wd || (wd = !0, gd.b.prototype.displayLoadingUI = function() {
      if (!(0, Yd.h)()) return;
      const dd = this.loadingScreen;
      dd && dd.displayLoadingUI()
    }, gd.b.prototype.hideLoadingUI = function() {
      if (!(0, Yd.h)()) return;
      const dd = this._loadingScreen;
      dd && dd.hideLoadingUI()
    }, Object.defineProperty(gd.b.prototype, "loadingScreen", {
      get: function() {
        return !this._loadingScreen && this._renderingCanvas && (this._loadingScreen = gd.b.DefaultLoadingScreenFactory(this._renderingCanvas)), this._loadingScreen
      },
      set: function(dd) {
        this._loadingScreen = dd
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(gd.b.prototype, "loadingUIText", {
      set: function(dd) {
        this.loadingScreen.loadingUIText = dd
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(gd.b.prototype, "loadingUIBackgroundColor", {
      set: function(dd) {
        this.loadingScreen.loadingUIBackgroundColor = dd
      },
      enumerable: !0,
      configurable: !0
    })), (0, md(41883).b)();
    let Ed = !1;
    Ed || (Ed = !0, gd.b.prototype.getInputElement = function() {
      return this._renderingCanvas
    }, gd.b.prototype.getDepthFunction = function() {
      return this._depthCullingState.depthFunc
    }, gd.b.prototype.setDepthFunction = function(dd) {
      this._depthCullingState.depthFunc = dd
    }, gd.b.prototype.setDepthFunctionToGreater = function() {
      this.setDepthFunction(516)
    }, gd.b.prototype.setDepthFunctionToGreaterOrEqual = function() {
      this.setDepthFunction(518)
    }, gd.b.prototype.setDepthFunctionToLess = function() {
      this.setDepthFunction(513)
    }, gd.b.prototype.setDepthFunctionToLessOrEqual = function() {
      this.setDepthFunction(515)
    }, gd.b.prototype.getDepthWrite = function() {
      return this._depthCullingState.depthMask
    }, gd.b.prototype.setDepthWrite = function(dd) {
      this._depthCullingState.depthMask = dd
    }, gd.b.prototype.setAlphaConstants = function(dd, Od, md, Wd) {
      this._alphaState.setAlphaBlendConstants(dd, Od, md, Wd)
    }, gd.b.prototype.getAlphaMode = function() {
      let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
      return this._alphaMode[dd]
    }, gd.b.prototype.getAlphaEquation = function() {
      let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
      return this._alphaEquation[dd]
    });
    let Jd = !1;
    Jd || (Jd = !0, gd.b.prototype.getStencilBuffer = function() {
      return this._stencilState.stencilTest
    }, gd.b.prototype.setStencilBuffer = function(dd) {
      this._stencilState.stencilTest = dd
    }, gd.b.prototype.getStencilMask = function() {
      return this._stencilState.stencilMask
    }, gd.b.prototype.setStencilMask = function(dd) {
      this._stencilState.stencilMask = dd
    }, gd.b.prototype.getStencilFunction = function() {
      return this._stencilState.stencilFunc
    }, gd.b.prototype.getStencilBackFunction = function() {
      return this._stencilState.stencilBackFunc
    }, gd.b.prototype.getStencilFunctionReference = function() {
      return this._stencilState.stencilFuncRef
    }, gd.b.prototype.getStencilFunctionMask = function() {
      return this._stencilState.stencilFuncMask
    }, gd.b.prototype.setStencilFunction = function(dd) {
      this._stencilState.stencilFunc = dd
    }, gd.b.prototype.setStencilBackFunction = function(dd) {
      this._stencilState.stencilBackFunc = dd
    }, gd.b.prototype.setStencilFunctionReference = function(dd) {
      this._stencilState.stencilFuncRef = dd
    }, gd.b.prototype.setStencilFunctionMask = function(dd) {
      this._stencilState.stencilFuncMask = dd
    }, gd.b.prototype.getStencilOperationFail = function() {
      return this._stencilState.stencilOpStencilFail
    }, gd.b.prototype.getStencilBackOperationFail = function() {
      return this._stencilState.stencilBackOpStencilFail
    }, gd.b.prototype.getStencilOperationDepthFail = function() {
      return this._stencilState.stencilOpDepthFail
    }, gd.b.prototype.getStencilBackOperationDepthFail = function() {
      return this._stencilState.stencilBackOpDepthFail
    }, gd.b.prototype.getStencilOperationPass = function() {
      return this._stencilState.stencilOpStencilDepthPass
    }, gd.b.prototype.getStencilBackOperationPass = function() {
      return this._stencilState.stencilBackOpStencilDepthPass
    }, gd.b.prototype.setStencilOperationFail = function(dd) {
      this._stencilState.stencilOpStencilFail = dd
    }, gd.b.prototype.setStencilBackOperationFail = function(dd) {
      this._stencilState.stencilBackOpStencilFail = dd
    }, gd.b.prototype.setStencilOperationDepthFail = function(dd) {
      this._stencilState.stencilOpDepthFail = dd
    }, gd.b.prototype.setStencilBackOperationDepthFail = function(dd) {
      this._stencilState.stencilBackOpDepthFail = dd
    }, gd.b.prototype.setStencilOperationPass = function(dd) {
      this._stencilState.stencilOpStencilDepthPass = dd
    }, gd.b.prototype.setStencilBackOperationPass = function(dd) {
      this._stencilState.stencilBackOpStencilDepthPass = dd
    }, gd.b.prototype.cacheStencilState = function() {
      this._cachedStencilBuffer = this.getStencilBuffer(), this._cachedStencilFunction = this.getStencilFunction(), this._cachedStencilMask = this.getStencilMask(), this._cachedStencilOperationPass = this.getStencilOperationPass(), this._cachedStencilOperationFail = this.getStencilOperationFail(), this._cachedStencilOperationDepthFail = this.getStencilOperationDepthFail(), this._cachedStencilReference = this.getStencilFunctionReference()
    }, gd.b.prototype.restoreStencilState = function() {
      this.setStencilFunction(this._cachedStencilFunction), this.setStencilMask(this._cachedStencilMask), this.setStencilBuffer(this._cachedStencilBuffer), this.setStencilOperationPass(this._cachedStencilOperationPass), this.setStencilOperationFail(this._cachedStencilOperationFail), this.setStencilOperationDepthFail(this._cachedStencilOperationDepthFail), this.setStencilFunctionReference(this._cachedStencilReference)
    });
    md(41954);
    let Ud = !1;
    Ud || (Ud = !0, gd.b.prototype.createDepthStencilTexture = function(dd, Od, md) {
      if (Od.isCube) {
        const md = dd.width || dd;
        return this._createDepthStencilCubeTexture(md, Od)
      }
      return this._createDepthStencilTexture(dd, Od, md)
    });
    md(41957), md(42004);
    let xd = !1;
    xd || (xd = !0, Fd.ThinEngine.prototype.enableScissor = function(dd, Od, md, Wd) {
      const Fd = this._gl;
      Fd.enable(Fd.SCISSOR_TEST), Fd.scissor(dd, Od, md, Wd)
    }, Fd.ThinEngine.prototype.disableScissor = function() {
      const dd = this._gl;
      dd.disable(dd.SCISSOR_TEST)
    })
  },
  41759: (dd, Od, md) => {
    md.d(Od, {
      c: () => gd
    });
    var Wd = md(41763),
      Fd = md(38651),
      Rd = md(41777),
      Xd = md(41841);
    class Kd {
      constructor() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 30;
        this._enabled = !0, this._rollingFrameTime = new hd(dd)
      }
      sampleFrame() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Xd.d.Now;
        if (this._enabled) {
          if (null != this._lastFrameTimeMs) {
            const Od = dd - this._lastFrameTimeMs;
            this._rollingFrameTime.add(Od)
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
    class hd {
      constructor(dd) {
        this._samples = new Array(dd), this.reset()
      }
      add(dd) {
        let Od;
        if (this.isSaturated()) {
          const dd = this._samples[this._pos];
          Od = dd - this.average, this.average -= Od / (this._sampleCount - 1), this._m2 -= Od * (dd - this.average)
        } else this._sampleCount++;
        Od = dd - this.average, this.average += Od / this._sampleCount, this._m2 += Od * (dd - this.average), this.variance = this._m2 / (this._sampleCount - 1), this._samples[this._pos] = dd, this._pos++, this._pos %= this._samples.length
      }
      history(dd) {
        if (dd >= this._sampleCount || dd >= this._samples.length) return 0;
        const Od = this._wrapPosition(this._pos - 1);
        return this._samples[this._wrapPosition(Od - dd)]
      }
      isSaturated() {
        return this._sampleCount >= this._samples.length
      }
      reset() {
        this.average = 0, this.variance = 0, this._sampleCount = 0, this._pos = 0, this._m2 = 0
      }
      _wrapPosition(dd) {
        const Od = this._samples.length;
        return (dd % Od + Od) % Od
      }
    }
    var vd = md(41854),
      Qd = md(40262),
      td = md(41864),
      od = md(41838),
      Nd = md(41799);

    function qd(dd) {
      const Od = function(dd) {
        if (!(0, Nd.d)() || !document.body) return null;
        const Od = document.createElement("span");
        Od.textContent = "Hg", Od.style.font = dd;
        const md = document.createElement("div");
        md.style.display = "inline-block", md.style.width = "1px", md.style.height = "0px", md.style.verticalAlign = "bottom";
        const Wd = document.createElement("div");
        let Fd, Rd;
        Wd.style.whiteSpace = "nowrap", Wd.appendChild(Od), Wd.appendChild(md), document.body.appendChild(Wd);
        try {
          Rd = md.getBoundingClientRect().top - Od.getBoundingClientRect().top, md.style.verticalAlign = "baseline", Fd = md.getBoundingClientRect().top - Od.getBoundingClientRect().top
        } finally {
          document.body.removeChild(Wd)
        }
        const Xd = {
          ascent: Fd,
          height: Rd,
          descent: Rd - Fd
        };
        return Hd(Xd) ? Xd : null
      }(dd);
      if (Od) return Od;
      const md = function(dd) {
        let Od = null;
        try {
          "undefined" !== typeof OffscreenCanvas ? Od = new OffscreenCanvas(64, 64) : (0, Nd.d)() && "function" === typeof document.createElement && (Od = document.createElement("canvas"), Od.width = 64, Od.height = 64);
          const md = Od?.getContext("2d");
          if (!md) return null;
          md.font = dd;
          const Wd = md.measureText("Hg"),
            Fd = Number(Wd.actualBoundingBoxAscent ?? Wd.fontBoundingBoxAscent),
            Rd = Number(Wd.actualBoundingBoxDescent ?? Wd.fontBoundingBoxDescent),
            Xd = {
              ascent: Fd,
              height: Fd + Rd,
              descent: Rd
            };
          return Hd(Xd) ? Xd : null
        } catch {
          return null
        } finally {
          const dd = Od;
          "function" === typeof dd?.dispose && dd.dispose()
        }
      }(dd);
      return md || function(dd) {
        const Od = Math.max(1, function(dd) {
            const Od = /(?:^|\s)([0-9]+(?:\.[0-9]+)?)px(?:\/|\s|$)/.exec(String(dd || ""));
            return Od ? Number(Od[1]) : 16
          }(dd)),
          md = .8 * Od,
          Wd = .2 * Od;
        return {
          ascent: md,
          height: md + Wd,
          descent: Wd
        }
      }(dd)
    }

    function Hd(dd) {
      return Number.isFinite(dd.ascent) && Number.isFinite(dd.height) && Number.isFinite(dd.descent) && dd.height > 0
    }

    function yd(dd) {
      if (dd.requestPointerLock) {
        const Od = dd.requestPointerLock();
        Od instanceof Promise ? Od.then((() => {
          dd.focus()
        })).catch((() => {})) : dd.focus()
      }
    }
    var bd = md(41878),
      Td = md(41831),
      pd = md(41883),
      Yd = md(41885);
    class gd extends Rd.ThinEngine {
      static get NpmPackage() {
        return od.b.NpmPackage
      }
      static get Version() {
        return od.b.Version
      }
      static get Instances() {
        return Fd.e.Instances
      }
      static get LastCreatedEngine() {
        return Fd.e.LastCreatedEngine
      }
      static get LastCreatedScene() {
        return Fd.e.LastCreatedScene
      }
      static DefaultLoadingScreenFactory(dd) {
        return od.b.DefaultLoadingScreenFactory(dd)
      }
      get _supportsHardwareTextureRescaling() {
        return !!gd._RescalePostProcessFactory
      }
      _measureFps() {
        this._performanceMonitor.sampleFrame(), this._fps = this._performanceMonitor.averageFPS, this._deltaTime = this._performanceMonitor.instantaneousFrameTime || 0
      }
      get performanceMonitor() {
        return this._performanceMonitor
      }
      constructor(dd, Od, md) {
        let Wd = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        (0, pd.b)(), (0, Yd.d)(), super(dd, Od, md, Wd), this._performanceMonitor = new Kd, this._drawCalls = new bd.b, dd && (this._features.supportRenderPasses = !0)
      }
      _initGLContext() {
        super._initGLContext(), this._rescalePostProcess = null
      }
      _sharedInit(dd) {
        super._sharedInit(dd),
          function(dd, Od, md) {
            dd._onCanvasFocus = () => {
              dd.onCanvasFocusObservable.notifyObservers(dd)
            }, dd._onCanvasBlur = () => {
              dd.onCanvasBlurObservable.notifyObservers(dd)
            }, dd._onCanvasContextMenu = Od => {
              dd.disableContextMenu && Od.preventDefault()
            }, Od.addEventListener("focus", dd._onCanvasFocus), Od.addEventListener("blur", dd._onCanvasBlur), Od.addEventListener("contextmenu", dd._onCanvasContextMenu), dd._onBlur = () => {
              dd.disablePerformanceMonitorInBackground && dd.performanceMonitor.disable(), dd._windowIsBackground = !0
            }, dd._onFocus = () => {
              dd.disablePerformanceMonitorInBackground && dd.performanceMonitor.enable(), dd._windowIsBackground = !1
            }, dd._onCanvasPointerOut = md => {
              document.elementFromPoint(md.clientX, md.clientY) !== Od && dd.onCanvasPointerOutObservable.notifyObservers(md)
            };
            const Wd = dd.getHostWindow();
            Wd && "function" === typeof Wd.addEventListener && (Wd.addEventListener("blur", dd._onBlur), Wd.addEventListener("focus", dd._onFocus)), Od.addEventListener("pointerout", dd._onCanvasPointerOut), md.doNotHandleTouchAction || function(dd) {
              dd && dd.setAttribute && (dd.setAttribute("touch-action", "none"), dd.style.touchAction = "none", dd.style.webkitTapHighlightColor = "transparent")
            }(Od), !od.b.audioEngine && md.audioEngine && od.b.AudioEngineFactory && (od.b.audioEngine = od.b.AudioEngineFactory(dd.getRenderingCanvas(), dd.getAudioContext(), dd.getAudioDestination())), (0, Nd.d)() && (dd._onFullscreenChange = () => {
              dd.isFullscreen = !!document.fullscreenElement, dd.isFullscreen && dd._pointerLockRequested && Od && yd(Od)
            }, document.addEventListener("fullscreenchange", dd._onFullscreenChange, !1), document.addEventListener("webkitfullscreenchange", dd._onFullscreenChange, !1), dd._onPointerLockChange = () => {
              dd.isPointerLock = document.pointerLockElement === Od
            }, document.addEventListener("pointerlockchange", dd._onPointerLockChange, !1), document.addEventListener("webkitpointerlockchange", dd._onPointerLockChange, !1)), dd.enableOfflineSupport = void 0 !== od.b.OfflineProviderFactory, dd._deterministicLockstep = !!md.deterministicLockstep, dd._lockstepMaxSteps = md.lockstepMaxSteps || 0, dd._timeStep = md.timeStep || 1 / 60
          }(this, dd, this._creationOptions)
      }
      resizeImageBitmap(dd, Od, md) {
        return function(dd, Od, md, Wd) {
          const Fd = dd.createCanvas(md, Wd).getContext("2d");
          if (!Fd) throw new Error("Unable to get 2d context for resizeImageBitmap");
          return Fd.drawImage(Od, 0, 0), Fd.getImageData(0, 0, md, Wd).data
        }(this, dd, Od, md)
      }
      async _createImageBitmapFromSource(dd, Od) {
        return await async function(dd, Od, md) {
          return await new Promise(((Wd, Fd) => {
            const Rd = new Image;
            Rd.onload = () => {
              Rd.decode().then((() => {
                dd.createImageBitmap(Rd, md).then((dd => {
                  Wd(dd)
                }))
              }))
            }, Rd.onerror = () => {
              Fd(`Error loading image ${Rd.src}`)
            }, Rd.src = Od
          }))
        }(this, dd, Od)
      }
      switchFullscreen(dd) {
        this.isFullscreen ? this.exitFullscreen() : this.enterFullscreen(dd)
      }
      enterFullscreen(dd) {
        this.isFullscreen || (this._pointerLockRequested = dd, this._renderingCanvas && function(dd) {
          const Od = dd.requestFullscreen || dd.webkitRequestFullscreen;
          Od && Od.call(dd)
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
      setDirectViewport(dd, Od, md, Wd) {
        const Fd = this._cachedViewport;
        return this._cachedViewport = null, this._viewport(dd, Od, md, Wd), Fd
      }
      scissorClear(dd, Od, md, Wd, Fd) {
        this.enableScissor(dd, Od, md, Wd), this.clear(Fd, !0, !0, !0), this.disableScissor()
      }
      getVertexShaderSource(dd) {
        const Od = this._gl.getAttachedShaders(dd);
        return Od ? this._gl.getShaderSource(Od[0]) : null
      }
      getFragmentShaderSource(dd) {
        const Od = this._gl.getAttachedShaders(dd);
        return Od ? this._gl.getShaderSource(Od[1]) : null
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
        return qd(dd)
      }
      enterPointerlock() {
        this._renderingCanvas && yd(this._renderingCanvas)
      }
      exitPointerlock() {
        document.exitPointerLock && document.exitPointerLock()
      }
      pE() {
        this._measureFps(), super.pE()
      }
      _deletePipelineContext(dd) {
        const Od = dd;
        Od && Od.program && Od.transformFeedback && (this.deleteTransformFeedback(Od.transformFeedback), Od.transformFeedback = null), super._deletePipelineContext(dd)
      }
      createShaderProgram(dd, Od, md, Wd, Fd) {
        let Rd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        Fd = Fd || this._gl, this.onBeforeShaderCompilationObservable.notifyObservers(this);
        const Xd = super.createShaderProgram(dd, Od, md, Wd, Fd, Rd);
        return this.onAfterShaderCompilationObservable.notifyObservers(this), Xd
      }
      _createShaderProgram(dd, Od, md, Wd) {
        let Fd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        const Rd = Wd.createProgram();
        if (dd.program = Rd, !Rd) throw new Error("Unable to create program");
        if (Wd.attachShader(Rd, Od), Wd.attachShader(Rd, md), this.YH > 1 && Fd) {
          const Od = this.createTransformFeedback();
          this.bindTransformFeedback(Od), this.setTranformFeedbackVaryings(Rd, Fd), dd.transformFeedback = Od
        }
        return Wd.linkProgram(Rd), this.YH > 1 && Fd && this.bindTransformFeedback(null), dd.context = Wd, dd.vertexShader = Od, dd.fragmentShader = md, dd.isParallelCompiled || this._finalizePipelineContext(dd), Rd
      }
      _releaseTexture(dd) {
        super._releaseTexture(dd)
      }
      _releaseRenderTargetWrapper(dd) {
        super._releaseRenderTargetWrapper(dd);
        for (const Od of this.scenes) {
          for (const md of Od.postProcesses) md._outputTexture === dd && (md._outputTexture = null);
          for (const md of Od.cameras)
            for (const Od of md._postProcesses) Od && Od._outputTexture === dd && (Od._outputTexture = null)
        }
      }
      _rescaleTexture(dd, Od, md, Wd, Fd) {
        this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MAG_FILTER, this._gl.LINEAR), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MIN_FILTER, this._gl.LINEAR), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_S, this._gl.CLAMP_TO_EDGE), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_T, this._gl.CLAMP_TO_EDGE);
        const Rd = this.createRenderTargetTexture({
          width: Od.width,
          height: Od.height
        }, {
          generateMipMaps: !1,
          type: 0,
          samplingMode: 2,
          generateDepthBuffer: !1,
          generateStencilBuffer: !1
        });
        if (!this._rescalePostProcess && gd._RescalePostProcessFactory && (this._rescalePostProcess = gd._RescalePostProcessFactory(this)), this._rescalePostProcess) {
          this._rescalePostProcess.externalTextureSamplerBinding = !0;
          const Xd = () => {
              this._rescalePostProcess.onApply = function(Od) {
                Od._bindTexture("textureSampler", dd)
              };
              let Xd = md;
              Xd || (Xd = this.scenes[this.scenes.length - 1]), Xd.postProcessManager.directRender([this._rescalePostProcess], Rd, !0), this._bindTextureDirectly(this._gl.TEXTURE_2D, Od, !0), this._gl.copyTexImage2D(this._gl.TEXTURE_2D, 0, Wd, 0, 0, Od.width, Od.height, 0), this.unBindFramebuffer(Rd), Rd.dispose(), Fd && Fd()
            },
            Kd = this._rescalePostProcess.getEffect();
          Kd ? Kd.executeWhenCompiled(Xd) : this._rescalePostProcess.onEffectCreatedObservable.addOnce((dd => {
            dd.executeWhenCompiled(Xd)
          }))
        }
      }
      wrapWebGLTexture(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3,
          Fd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          Rd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        const Xd = new td.d(dd, this._gl),
          Kd = new Wd.c(this, 15, !0);
        return Kd._hardwareTexture = Xd, Kd.baseWidth = Fd, Kd.baseHeight = Rd, Kd.width = Fd, Kd.height = Rd, Kd.isReady = !0, Kd.useMipMaps = Od, this.updateTextureSamplingMode(md, Kd), Kd
      }
      updateWrappedWebGLTexture(dd, Od) {
        if (15 !== dd.source) throw new Error("updateWrappedWebGLTexture: target InternalTexture was not produced by wrapWebGLTexture.");
        for (const Wd of this._renderTargetWrapperCache)
          if (Wd.textures?.includes(dd)) {
            if (Wd.isMulti) throw new Error("updateWrappedWebGLTexture: wrapped texture is part of a multi render-target; not supported. Dispose and re-wrap.");
            if (Wd._depthStencilTexture) throw new Error("updateWrappedWebGLTexture: wrapped texture's render-target wrapper has a depth/stencil texture; not supported. Dispose and re-wrap.")
          } dd._hardwareTexture = new td.d(Od, this._gl), dd.isReady = !0, dd._cachedCoordinatesMode = null, dd._cachedWrapU = null, dd._cachedWrapV = null, dd._cachedWrapR = null, dd._cachedAnisotropicFilteringLevel = null;
        for (const Wd in this._boundTexturesCache) this._boundTexturesCache[Wd] === dd && (this._boundTexturesCache[Wd] = null);
        this.updateTextureSamplingMode(dd.samplingMode, dd);
        const md = this._gl;
        for (const Wd of this._renderTargetWrapperCache) {
          if (Wd.texture !== dd) continue;
          const Fd = Wd,
            Rd = Wd.samples,
            Xd = Rd > 1;
          Fd._framebuffer && md.deleteFramebuffer(Fd._framebuffer), !Xd && Fd._depthStencilBuffer && (md.deleteRenderbuffer(Fd._depthStencilBuffer), Fd._depthStencilBuffer = null);
          const Kd = this._currentFramebuffer,
            hd = md.createFramebuffer();
          this._bindUnboundFramebuffer(hd), md.framebufferTexture2D(md.FRAMEBUFFER, md.COLOR_ATTACHMENT0, md.TEXTURE_2D, Od, 0), Xd || (Fd._depthStencilBuffer = this._setupFramebufferDepthAttachments(Wd._generateStencilBuffer, Wd._generateDepthBuffer, Wd.width, Wd.height)), this._bindUnboundFramebuffer(Kd), Fd._framebuffer = hd, Xd && (Wd._samples = 1, this.updateRenderTargetTextureSampleCount(Fd, Rd))
        }
      }
      _uploadImageToTexture(dd, Od) {
        let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const Fd = this._gl,
          Rd = this._getWebGLTextureType(dd.type),
          Xd = this._getInternalFormat(dd.format),
          Kd = this._getRGBABufferInternalSizedFormat(dd.type, Xd),
          hd = dd.isCube ? Fd.TEXTURE_CUBE_MAP : Fd.TEXTURE_2D;
        this._bindTextureDirectly(hd, dd, !0), this._unpackFlipY(dd.invertY);
        let vd = Fd.TEXTURE_2D;
        dd.isCube && (vd = Fd.TEXTURE_CUBE_MAP_POSITIVE_X + md), Fd.texImage2D(vd, Wd, Kd, Xd, Rd, Od), this._bindTextureDirectly(hd, null, !0)
      }
      updateTextureComparisonFunction(dd, Od) {
        if (1 === this.YH) return void Qd.c.Error("WebGL 1 does not support texture comparison.");
        const md = this._gl;
        dd.isCube ? (this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, dd, !0), 0 === Od ? (md.texParameteri(md.TEXTURE_CUBE_MAP, md.TEXTURE_COMPARE_FUNC, 515), md.texParameteri(md.TEXTURE_CUBE_MAP, md.TEXTURE_COMPARE_MODE, md.NONE)) : (md.texParameteri(md.TEXTURE_CUBE_MAP, md.TEXTURE_COMPARE_FUNC, Od), md.texParameteri(md.TEXTURE_CUBE_MAP, md.TEXTURE_COMPARE_MODE, md.COMPARE_REF_TO_TEXTURE)), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null)) : (this._bindTextureDirectly(this._gl.TEXTURE_2D, dd, !0), 0 === Od ? (md.texParameteri(md.TEXTURE_2D, md.TEXTURE_COMPARE_FUNC, 515), md.texParameteri(md.TEXTURE_2D, md.TEXTURE_COMPARE_MODE, md.NONE)) : (md.texParameteri(md.TEXTURE_2D, md.TEXTURE_COMPARE_FUNC, Od), md.texParameteri(md.TEXTURE_2D, md.TEXTURE_COMPARE_MODE, md.COMPARE_REF_TO_TEXTURE)), this._bindTextureDirectly(this._gl.TEXTURE_2D, null)), dd._comparisonFunction = Od
      }
      createInstancesBuffer(dd) {
        const Od = this._gl.createBuffer();
        if (!Od) throw new Error("Unable to create instance buffer");
        const md = new vd.d(Od);
        return md.Mt = dd, this.bindArrayBuffer(md), this._gl.bufferData(this._gl.ARRAY_BUFFER, dd, this._gl.DYNAMIC_DRAW), md.references = 1, md
      }
      deleteInstancesBuffer(dd) {
        this._gl.deleteBuffer(dd)
      }
      async _clientWaitAsync(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10;
        const Wd = this._gl;
        return await new Promise(((Fd, Rd) => {
          (0, Td.g)((() => {
            const md = Wd.clientWaitSync(dd, Od, 0);
            if (md == Wd.WAIT_FAILED) throw new Error("clientWaitSync failed");
            return md != Wd.TIMEOUT_EXPIRED
          }), Fd, Rd, md)
        }))
      }
      _readPixelsAsync(dd, Od, md, Wd, Fd, Rd, Xd) {
        if (this._webGLVersion < 2) throw new Error("_readPixelsAsync only work on WebGL2+");
        const Kd = this._gl,
          hd = Kd.createBuffer();
        Kd.bindBuffer(Kd.PIXEL_PACK_BUFFER, hd), Kd.bufferData(Kd.PIXEL_PACK_BUFFER, Xd.byteLength, Kd.STREAM_READ), Kd.readPixels(dd, Od, md, Wd, Fd, Rd, 0), Kd.bindBuffer(Kd.PIXEL_PACK_BUFFER, null);
        const vd = Kd.fenceSync(Kd.SYNC_GPU_COMMANDS_COMPLETE, 0);
        return vd ? (Kd.flush(), this._clientWaitAsync(vd, 0, 10).then((() => (Kd.deleteSync(vd), Kd.bindBuffer(Kd.PIXEL_PACK_BUFFER, hd), Kd.getBufferSubData(Kd.PIXEL_PACK_BUFFER, 0, Xd), Kd.bindBuffer(Kd.PIXEL_PACK_BUFFER, null), Kd.deleteBuffer(hd), Xd)))) : null
      }
      dispose() {
        this.hideLoadingUI?.(), this._rescalePostProcess && this._rescalePostProcess.dispose(),
          function(dd, Od) {
            1 === Fd.e.Instances.length && od.b.audioEngine && (od.b.audioEngine.dispose(), od.b.audioEngine = null);
            const md = dd.getHostWindow();
            md && "function" === typeof md.removeEventListener && (md.removeEventListener("blur", dd._onBlur), md.removeEventListener("focus", dd._onFocus)), Od && (Od.removeEventListener("focus", dd._onCanvasFocus), Od.removeEventListener("blur", dd._onCanvasBlur), Od.removeEventListener("pointerout", dd._onCanvasPointerOut), Od.removeEventListener("contextmenu", dd._onCanvasContextMenu)), (0, Nd.d)() && (document.removeEventListener("fullscreenchange", dd._onFullscreenChange), document.removeEventListener("mozfullscreenchange", dd._onFullscreenChange), document.removeEventListener("webkitfullscreenchange", dd._onFullscreenChange), document.removeEventListener("msfullscreenchange", dd._onFullscreenChange), document.removeEventListener("pointerlockchange", dd._onPointerLockChange), document.removeEventListener("mspointerlockchange", dd._onPointerLockChange), document.removeEventListener("mozpointerlockchange", dd._onPointerLockChange), document.removeEventListener("webkitpointerlockchange", dd._onPointerLockChange))
          }(this, this._renderingCanvas), super.dispose()
      }
    }
    gd.ALPHA_DISABLE = 0, gd.ALPHA_ADD = 1, gd.ALPHA_COMBINE = 2, gd.ALPHA_SUBTRACT = 3, gd.ALPHA_MULTIPLY = 4, gd.ALPHA_MAXIMIZED = 5, gd.ALPHA_ONEONE = 6, gd.ALPHA_PREMULTIPLIED = 7, gd.ALPHA_PREMULTIPLIED_PORTERDUFF = 8, gd.ALPHA_INTERPOLATE = 9, gd.ALPHA_SCREENMODE = 10, gd.DELAYLOADSTATE_NONE = 0, gd.DELAYLOADSTATE_LOADED = 1, gd.DELAYLOADSTATE_LOADING = 2, gd.DELAYLOADSTATE_NOTLOADED = 4, gd.NEVER = 512, gd.ALWAYS = 519, gd.LESS = 513, gd.EQUAL = 514, gd.LEQUAL = 515, gd.GREATER = 516, gd.GEQUAL = 518, gd.NOTEQUAL = 517, gd.KEEP = 7680, gd.REPLACE = 7681, gd.INCR = 7682, gd.DECR = 7683, gd.INVERT = 5386, gd.INCR_WRAP = 34055, gd.DECR_WRAP = 34056, gd.TEXTURE_CLAMP_ADDRESSMODE = 0, gd.TEXTURE_WRAP_ADDRESSMODE = 1, gd.TEXTURE_MIRROR_ADDRESSMODE = 2, gd.TEXTUREFORMAT_ALPHA = 0, gd.TEXTUREFORMAT_LUMINANCE = 1, gd.TEXTUREFORMAT_LUMINANCE_ALPHA = 2, gd.TEXTUREFORMAT_RGB = 4, gd.TEXTUREFORMAT_RGBA = 5, gd.TEXTUREFORMAT_RED = 6, gd.TEXTUREFORMAT_R = 6, gd.TEXTUREFORMAT_R16_UNORM = 33322, gd.TEXTUREFORMAT_RG16_UNORM = 33324, gd.TEXTUREFORMAT_RGB16_UNORM = 32852, gd.TEXTUREFORMAT_RGBA16_UNORM = 32859, gd.TEXTUREFORMAT_R16_SNORM = 36760, gd.TEXTUREFORMAT_RG16_SNORM = 36761, gd.TEXTUREFORMAT_RGB16_SNORM = 36762, gd.TEXTUREFORMAT_RGBA16_SNORM = 36763, gd.TEXTUREFORMAT_RG = 7, gd.TEXTUREFORMAT_RED_INTEGER = 8, gd.TEXTUREFORMAT_R_INTEGER = 8, gd.TEXTUREFORMAT_RG_INTEGER = 9, gd.TEXTUREFORMAT_RGB_INTEGER = 10, gd.TEXTUREFORMAT_RGBA_INTEGER = 11, gd.TEXTURETYPE_UNSIGNED_BYTE = 0, gd.TEXTURETYPE_UNSIGNED_INT = 0, gd.TEXTURETYPE_FLOAT = 1, gd.TEXTURETYPE_HALF_FLOAT = 2, gd.TEXTURETYPE_BYTE = 3, gd.TEXTURETYPE_SHORT = 4, gd.TEXTURETYPE_UNSIGNED_SHORT = 5, gd.TEXTURETYPE_INT = 6, gd.TEXTURETYPE_UNSIGNED_INTEGER = 7, gd.TEXTURETYPE_UNSIGNED_SHORT_4_4_4_4 = 8, gd.TEXTURETYPE_UNSIGNED_SHORT_5_5_5_1 = 9, gd.TEXTURETYPE_UNSIGNED_SHORT_5_6_5 = 10, gd.TEXTURETYPE_UNSIGNED_INT_2_10_10_10_REV = 11, gd.TEXTURETYPE_UNSIGNED_INT_24_8 = 12, gd.TEXTURETYPE_UNSIGNED_INT_10F_11F_11F_REV = 13, gd.TEXTURETYPE_UNSIGNED_INT_5_9_9_9_REV = 14, gd.TEXTURETYPE_FLOAT_32_UNSIGNED_INT_24_8_REV = 15, gd.TEXTURE_NEAREST_SAMPLINGMODE = 1, gd.TEXTURE_BILINEAR_SAMPLINGMODE = 2, gd.TEXTURE_TRILINEAR_SAMPLINGMODE = 3, gd.TEXTURE_NEAREST_NEAREST_MIPLINEAR = 8, gd.TEXTURE_LINEAR_LINEAR_MIPNEAREST = 11, gd.TEXTURE_LINEAR_LINEAR_MIPLINEAR = 3, gd.TEXTURE_NEAREST_NEAREST_MIPNEAREST = 4, gd.TEXTURE_NEAREST_LINEAR_MIPNEAREST = 5, gd.TEXTURE_NEAREST_LINEAR_MIPLINEAR = 6, gd.TEXTURE_NEAREST_LINEAR = 7, gd.TEXTURE_NEAREST_NEAREST = 1, gd.TEXTURE_LINEAR_NEAREST_MIPNEAREST = 9, gd.TEXTURE_LINEAR_NEAREST_MIPLINEAR = 10, gd.TEXTURE_LINEAR_LINEAR = 2, gd.TEXTURE_LINEAR_NEAREST = 12, gd.TEXTURE_EXPLICIT_MODE = 0, gd.TEXTURE_SPHERICAL_MODE = 1, gd.TEXTURE_PLANAR_MODE = 2, gd.TEXTURE_CUBIC_MODE = 3, gd.TEXTURE_PROJECTION_MODE = 4, gd.TEXTURE_SKYBOX_MODE = 5, gd.TEXTURE_INVCUBIC_MODE = 6, gd.TEXTURE_EQUIRECTANGULAR_MODE = 7, gd.TEXTURE_FIXED_EQUIRECTANGULAR_MODE = 8, gd.TEXTURE_FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9, gd.SCALEMODE_FLOOR = 1, gd.SCALEMODE_NEAREST = 2, gd.SCALEMODE_CEILING = 3
  },
  41905: (dd, Od, md) => {
    md.d(Od, {
      d: () => Fd
    });
    var Wd = md(41869);
    class Fd {
      get depthStencilTexture() {
        return this._depthStencilTexture
      }
      setDepthStencilTexture(dd) {
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && this._depthStencilTexture && this._depthStencilTexture.dispose(), this._depthStencilTexture = dd, this._generateDepthBuffer = this._generateStencilBuffer = this._depthStencilTextureWithStencil = !1, dd && (this._generateDepthBuffer = !0, this._generateStencilBuffer = this._depthStencilTextureWithStencil = (0, Wd.d)(dd.format))
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
        const Od = this._textures[dd],
          md = this._layerIndices?.[dd] ?? 0,
          Wd = this._faceIndices?.[dd] ?? 0;
        return Od.isCube ? 6 * md + Wd : Od.is3D ? 0 : md
      }
      get samples() {
        return this._samples
      }
      setSamples(dd) {
        let Od = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          md = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.samples === dd && !md) return dd;
        const Wd = this._isMulti ? this._engine.updateMultipleRenderTargetTextureSampleCount(this, dd, Od) : this._engine.updateRenderTargetTextureSampleCount(this, dd);
        return this._samples = dd, Wd
      }
      resolveMSAATextures() {
        this.isMulti ? this._engine.resolveMultiFramebuffer(this) : this._engine.resolveFramebuffer(this)
      }
      generateMipMaps() {
        this._engine._currentRenderTarget === this && (this.isMulti ? this._engine.unBindMultiColorAttachmentFramebuffer(this, !0) : this._engine.unBindFramebuffer(this, !0)), this.isMulti ? this._engine.generateMipMapsMultiFramebuffer(this) : this._engine.generateMipMapsFramebuffer(this)
      }
      constructor(dd, Od, md, Wd, Fd) {
        this._textures = null, this._faceIndices = null, this._layerIndices = null, this._samples = 1, this._attachments = null, this._generateStencilBuffer = !1, this._generateDepthBuffer = !1, this._depthStencilTextureWithStencil = !1, this.disableAutomaticMSAAResolve = !1, this.resolveMSAAColors = !0, this.resolveMSAADepth = !1, this.resolveMSAAStencil = !1, this.depthReadOnly = !1, this.stencilReadOnly = !1, this._isMulti = dd, this._isCube = Od, this._size = md, this._engine = Wd, this._depthStencilTexture = null, this.label = Fd
      }
      setTextures(dd) {
        Array.isArray(dd) ? this._textures = dd : this._textures = dd ? [dd] : null
      }
      setTexture(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          md = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._textures || (this._textures = []), this._textures[Od] !== dd && (this._textures[Od] && md && this._textures[Od].dispose(), this._textures[Od] = dd)
      }
      setLayerAndFaceIndices(dd, Od) {
        this._layerIndices = dd, this._faceIndices = Od
      }
      setLayerAndFaceIndex() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Od = arguments.length > 1 ? arguments[1] : void 0,
          md = arguments.length > 2 ? arguments[2] : void 0;
        this._layerIndices || (this._layerIndices = []), this._faceIndices || (this._faceIndices = []), void 0 !== Od && Od >= 0 && (this._layerIndices[dd] = Od), void 0 !== md && md >= 0 && (this._faceIndices[dd] = md)
      }
      createDepthStencilTexture() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Od = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          md = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          Fd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          Rd = arguments.length > 5 ? arguments[5] : void 0;
        return this._depthStencilTexture?.dispose(), this._depthStencilTextureWithStencil = md, this._depthStencilTextureLabel = Rd, this._depthStencilTexture = this._engine.createDepthStencilTexture(this._size, {
          bilinearFiltering: Od,
          comparisonFunction: dd,
          generateStencil: md,
          isCube: this._isCube,
          samples: Wd,
          depthTextureFormat: Fd,
          label: Rd
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
          const Od = this.textures;
          if (Od && Od.length > 0) {
            let md = !1,
              Wd = Od.length,
              Fd = -1;
            const Rd = Od[Od.length - 1]._source;
            14 !== Rd && 12 !== Rd || (md = !0, Fd = Od[Od.length - 1].format, Wd--);
            const Xd = [],
              Kd = [],
              hd = [],
              vd = [],
              Qd = [],
              td = [],
              od = [],
              Nd = {};
            for (let dd = 0; dd < Wd; ++dd) {
              const md = Od[dd];
              Xd.push(md.samplingMode), Kd.push(md.type), hd.push(md.format);
              void 0 !== Nd[md.uniqueId] ? (vd.push(-1), od.push(0)) : (Nd[md.uniqueId] = dd, md.is2DArray ? (vd.push(35866), od.push(md.depth)) : md.isCube ? (vd.push(34067), od.push(0)) : md.is3D ? (vd.push(32879), od.push(md.depth)) : (vd.push(3553), od.push(0))), this._faceIndices && Qd.push(this._faceIndices[dd] ?? 0), this._layerIndices && td.push(this._layerIndices[dd] ?? 0)
            }
            const qd = {
                samplingModes: Xd,
                generateMipMaps: Od[0].generateMipMaps,
                generateDepthBuffer: this._generateDepthBuffer,
                generateStencilBuffer: this._generateStencilBuffer,
                generateDepthTexture: md,
                depthTextureFormat: Fd,
                types: Kd,
                formats: hd,
                hhd: Wd,
                targetTypes: vd,
                faceIndex: Qd,
                layerIndex: td,
                layerCounts: od,
                label: this.label
              },
              Hd = {
                width: this.width,
                height: this.height,
                depth: this.depth
              };
            dd = this._engine.createMultipleRenderTarget(Hd, qd);
            for (let yd = 0; yd < Wd; ++yd) {
              if (-1 !== vd[yd]) continue;
              const md = Nd[Od[yd].uniqueId];
              dd.setTexture(dd.textures[md], yd)
            }
          }
        } else {
          const Od = {};
          if (Od.generateDepthBuffer = this._generateDepthBuffer, Od.generateMipMaps = this.texture?.generateMipMaps ?? !1, Od.generateStencilBuffer = this._generateStencilBuffer, Od.samplingMode = this.texture?.samplingMode, Od.type = this.texture?.type, Od.format = this.texture?.format, Od.noColorAttachment = !this._textures, Od.label = this.label, this.isCube) dd = this._engine.createRenderTargetCubeTexture(this.width, Od);
          else {
            const md = {
              width: this.width,
              height: this.height,
              layers: this.is2DArray || this.is3D ? this.texture?.depth : void 0
            };
            dd = this._engine.createRenderTargetTexture(md, Od)
          }
          dd.texture && (dd.texture.isReady = !0)
        }
        return dd
      }
      _swapRenderTargetWrapper(dd) {
        if (this._textures && dd._textures)
          for (let Od = 0; Od < this._textures.length; ++Od) this._textures[Od]._swapAndDie(dd._textures[Od], !1), dd._textures[Od].isReady = !0;
        this._depthStencilTexture && dd._depthStencilTexture && (this._depthStencilTexture._swapAndDie(dd._depthStencilTexture), dd._depthStencilTexture.isReady = !0), this._textures = null, this._depthStencilTexture = null
      }
      _rebuild() {
        const dd = this._cloneRenderTargetWrapper();
        if (dd) {
          if (this._depthStencilTexture) {
            const Od = this._depthStencilTexture.samplingMode,
              md = this._depthStencilTexture.format,
              Wd = 2 === Od || 3 === Od || 11 === Od;
            dd.createDepthStencilTexture(this._depthStencilTexture._comparisonFunction, Wd, this._depthStencilTextureWithStencil, this._depthStencilTexture.samples, md, this._depthStencilTextureLabel)
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
  42349: (dd, Od, md) => {
    md.d(Od, {
      e: () => Wd
    });
    class Wd {
      static get ForceFullSceneLoadingForIncremental() {
        return Wd._ForceFullSceneLoadingForIncremental
      }
      static set ForceFullSceneLoadingForIncremental(dd) {
        Wd._ForceFullSceneLoadingForIncremental = dd
      }
      static get ShowLoadingScreen() {
        return Wd._ShowLoadingScreen
      }
      static set ShowLoadingScreen(dd) {
        Wd._ShowLoadingScreen = dd
      }
      static get loggingLevel() {
        return Wd._LoggingLevel
      }
      static set loggingLevel(dd) {
        Wd._LoggingLevel = dd
      }
      static get CleanBoneMatrixWeights() {
        return Wd._CleanBoneMatrixWeights
      }
      static set CleanBoneMatrixWeights(dd) {
        Wd._CleanBoneMatrixWeights = dd
      }
    }
    Wd._ForceFullSceneLoadingForIncremental = !1, Wd._ShowLoadingScreen = !0, Wd._CleanBoneMatrixWeights = !1, Wd._LoggingLevel = 0
  },
  42010: (dd, Od, md) => {
    md.d(Od, {
      b: () => Xd
    });
    var Wd = md(40262);
    const Fd = new Map;

    function Rd(dd, Od) {
      (function(dd) {
        return Fd.delete(dd)
      })(dd) && Wd.c.Warn(`Extension with the name '${dd}' already exists`), Fd.set(dd, Od)
    }

    function Xd(dd, Od) {
      "image/ktx" !== Od && "image/ktx2" !== Od || (dd = ".ktx"), Fd.has(dd) || (dd.endsWith(".ies") && Rd(".ies", (async () => await md.e(628).then((() => md(54201))).then((dd => new dd._IESTextureLoader)))), dd.endsWith(".dds") && Rd(".dds", (async () => await md.e(626).then((() => md(54204))).then((dd => new dd._DDSTextureLoader)))), dd.endsWith(".basis") && Rd(".basis", (async () => await md.e(629).then((() => md(54209))).then((dd => new dd._BasisTextureLoader)))), dd.endsWith(".env") && Rd(".env", (async () => await Promise.all([md.e(630), md.e(627)]).then((() => md(54213))).then((dd => new dd._ENVTextureLoader)))), dd.endsWith(".hdr") && Rd(".hdr", (async () => await md.e(631).then((() => md(54255))).then((dd => new dd._HDRTextureLoader)))), (dd.endsWith(".ktx") || dd.endsWith(".ktx2")) && (Rd(".ktx", (async () => await md.e(632).then((() => md(54263))).then((dd => new dd._KTXTextureLoader)))), Rd(".ktx2", (async () => await md.e(632).then((() => md(54263))).then((dd => new dd._KTXTextureLoader))))), dd.endsWith(".tga") && Rd(".tga", (async () => await md.e(633).then((() => md(54279))).then((dd => new dd._TGATextureLoader)))), dd.endsWith(".exr") && Rd(".exr", (async () => await md.e(634).then((() => md(54284))).then((dd => new dd._ExrTextureLoader)))));
      const Wd = Fd.get(dd);
      return Wd ? Promise.resolve(Wd(Od)) : null
    }
  },
  42378: (dd, Od, md) => {
    md.d(Od, {
      d: () => Xd,
      g: () => vd
    });
    var Wd = md(42208),
      Fd = md(41952),
      Rd = md(38669);
    class Xd extends Wd.b {
      get WOd() {
        return this._subMaterials
      }
      set WOd(dd) {
        this._subMaterials = dd, this._hookArray(dd)
      }
      getChildren() {
        return this.WOd
      }
      constructor(dd, Od) {
        super(dd, Od, !0), this._waitingSubMaterialsUniqueIds = [], this.zV().addMultiMaterial(this), this.WOd = [], this._storeEffectOnSubMeshes = !0
      }
      _hookArray(dd) {
        var Od = this;
        const md = dd.push;
        dd.push = function() {
          for (var Wd = arguments.length, Fd = new Array(Wd), Rd = 0; Rd < Wd; Rd++) Fd[Rd] = arguments[Rd];
          const Xd = md.apply(dd, Fd);
          return Od._markAllSubMeshesAsTexturesDirty(), Xd
        };
        const Wd = dd.splice;
        dd.splice = (Od, md) => {
          const Fd = Wd.call(dd, Od, md ?? dd.length);
          return this._markAllSubMeshesAsTexturesDirty(), Fd
        }
      }
      getSubMaterial(dd) {
        return dd < 0 || dd >= this.WOd.length ? this.zV().defaultMaterial : this.WOd[dd]
      }
      getActiveTextures() {
        return super.getActiveTextures().concat(...this.WOd.map((dd => dd ? dd.getActiveTextures() : [])))
      }
      hasTexture(dd) {
        if (super.hasTexture(dd)) return !0;
        for (let Od = 0; Od < this.WOd.length; Od++)
          if (this.WOd[Od]?.hasTexture(dd)) return !0;
        return !1
      }
      getClassName() {
        return "MultiMaterial"
      }
      isReadyForSubMesh(dd, Od, md) {
        for (let Wd = 0; Wd < this.WOd.length; Wd++) {
          const Fd = this.WOd[Wd];
          if (Fd) {
            if (Fd._storeEffectOnSubMeshes) {
              if (!Fd.isReadyForSubMesh(dd, Od, md)) return !1;
              continue
            }
            if (!Fd.isReady(dd)) return !1
          }
        }
        return !0
      }
      clone(dd, Od) {
        const md = new Xd(dd, this.zV());
        for (let Wd = 0; Wd < this.WOd.length; Wd++) {
          let Fd;
          const Rd = this.WOd[Wd];
          Fd = Od && Rd ? Rd.clone(dd + "-" + Rd.name) : this.WOd[Wd], md.WOd.push(Fd)
        }
        return md
      }
      serialize() {
        const dd = {};
        dd.name = this.name, dd.id = this.id, dd.uniqueId = this.uniqueId, Fd.c && (dd.tags = Fd.c.GetTags(this)), dd.materialsUniqueIds = [], dd.materials = [];
        for (let Od = 0; Od < this.WOd.length; Od++) {
          const md = this.WOd[Od];
          md ? (dd.materialsUniqueIds.push(md.uniqueId), dd.materials.push(md.id)) : (dd.materialsUniqueIds.push(null), dd.materials.push(null))
        }
        return dd
      }
      dispose(dd, Od, md) {
        const Wd = this.zV();
        if (!Wd) return;
        if (md)
          for (let Rd = 0; Rd < this.WOd.length; Rd++) {
            const md = this.WOd[Rd];
            md && md.dispose(dd, Od)
          }
        const Fd = Wd.multiMaterials.indexOf(this);
        Fd >= 0 && Wd.multiMaterials.splice(Fd, 1), super.dispose(dd, Od)
      }
    }
    let Kd = !1;

    function hd(dd, Od) {
      const md = new Xd(dd.name, Od);
      if (md.id = dd.id, md._loadedUniqueId = dd.uniqueId, Fd.c && Fd.c.AddTagsTo(md, dd.tags), dd.materialsUniqueIds) md._waitingSubMaterialsUniqueIds = dd.materialsUniqueIds;
      else
        for (const Wd of dd.materials) md.WOd.push(Od.getLastMaterialById(Wd));
      return md
    }

    function vd() {
      Kd || (Kd = !0, Xd.ParseMultiMaterial = hd, (0, Rd.e)("BABYLON.MultiMaterial", Xd))
    }
  },
  42138: (dd, Od, md) => {
    md.d(Od, {
      c: () => Xd
    });
    var Wd, Fd, Rd = md(38636);
    ! function(dd) {
      dd[dd.LOCAL = 0] = "LOCAL", dd[dd.WORLD = 1] = "WORLD", dd[dd.BONE = 2] = "BONE"
    }(Wd || (Wd = {}));
    class Xd {}
    Xd.X = new Rd.j(1, 0, 0), Xd.Y = new Rd.j(0, 1, 0), Xd.Z = new Rd.j(0, 0, 1),
      function(dd) {
        dd[dd.X = 0] = "X", dd[dd.Y = 1] = "Y", dd[dd.Z = 2] = "Z"
      }(Fd || (Fd = {}))
  },
  41907: (dd, Od, md) => {
    md.d(Od, {
      c: () => hd,
      e: () => vd
    });
    var Wd = md(38636);
    const Fd = [Math.sqrt(1 / (4 * Math.PI)), -Math.sqrt(3 / (4 * Math.PI)), Math.sqrt(3 / (4 * Math.PI)), -Math.sqrt(3 / (4 * Math.PI)), Math.sqrt(15 / (4 * Math.PI)), -Math.sqrt(15 / (4 * Math.PI)), Math.sqrt(5 / (16 * Math.PI)), -Math.sqrt(15 / (4 * Math.PI)), Math.sqrt(15 / (16 * Math.PI))],
      Rd = [() => 1, dd => dd.y, dd => dd.z, dd => dd.x, dd => dd.x * dd.y, dd => dd.y * dd.z, dd => 3 * dd.z * dd.z - 1, dd => dd.x * dd.z, dd => dd.x * dd.x - dd.y * dd.y],
      Xd = (dd, Od) => Fd[dd] * Rd[dd](Od),
      Kd = [Math.PI, 2 * Math.PI / 3, 2 * Math.PI / 3, 2 * Math.PI / 3, Math.PI / 4, Math.PI / 4, Math.PI / 4, Math.PI / 4, Math.PI / 4];
    class hd {
      constructor() {
        this.preScaled = !1, this.l00 = Wd.j.Zero(), this.l1_1 = Wd.j.Zero(), this.l10 = Wd.j.Zero(), this.l11 = Wd.j.Zero(), this.l2_2 = Wd.j.Zero(), this.l2_1 = Wd.j.Zero(), this.l20 = Wd.j.Zero(), this.l21 = Wd.j.Zero(), this.l22 = Wd.j.Zero()
      }
      addLight(dd, Od, md) {
        Wd.h.Cq[0].set(Od.r, Od.g, Od.b);
        const Fd = Wd.h.Cq[0],
          Rd = Wd.h.Cq[1];
        Fd.scaleToRef(md, Rd), Rd.scaleToRef(Xd(0, dd), Wd.h.Cq[2]), this.l00.addInPlace(Wd.h.Cq[2]), Rd.scaleToRef(Xd(1, dd), Wd.h.Cq[2]), this.l1_1.addInPlace(Wd.h.Cq[2]), Rd.scaleToRef(Xd(2, dd), Wd.h.Cq[2]), this.l10.addInPlace(Wd.h.Cq[2]), Rd.scaleToRef(Xd(3, dd), Wd.h.Cq[2]), this.l11.addInPlace(Wd.h.Cq[2]), Rd.scaleToRef(Xd(4, dd), Wd.h.Cq[2]), this.l2_2.addInPlace(Wd.h.Cq[2]), Rd.scaleToRef(Xd(5, dd), Wd.h.Cq[2]), this.l2_1.addInPlace(Wd.h.Cq[2]), Rd.scaleToRef(Xd(6, dd), Wd.h.Cq[2]), this.l20.addInPlace(Wd.h.Cq[2]), Rd.scaleToRef(Xd(7, dd), Wd.h.Cq[2]), this.l21.addInPlace(Wd.h.Cq[2]), Rd.scaleToRef(Xd(8, dd), Wd.h.Cq[2]), this.l22.addInPlace(Wd.h.Cq[2])
      }
      scaleInPlace(dd) {
        this.l00.scaleInPlace(dd), this.l1_1.scaleInPlace(dd), this.l10.scaleInPlace(dd), this.l11.scaleInPlace(dd), this.l2_2.scaleInPlace(dd), this.l2_1.scaleInPlace(dd), this.l20.scaleInPlace(dd), this.l21.scaleInPlace(dd), this.l22.scaleInPlace(dd)
      }
      convertIncidentRadianceToIrradiance() {
        this.l00.scaleInPlace(Kd[0]), this.l1_1.scaleInPlace(Kd[1]), this.l10.scaleInPlace(Kd[2]), this.l11.scaleInPlace(Kd[3]), this.l2_2.scaleInPlace(Kd[4]), this.l2_1.scaleInPlace(Kd[5]), this.l20.scaleInPlace(Kd[6]), this.l21.scaleInPlace(Kd[7]), this.l22.scaleInPlace(Kd[8])
      }
      convertIrradianceToLambertianRadiance() {
        this.scaleInPlace(1 / Math.PI)
      }
      preScaleForRendering() {
        this.preScaled = !0, this.l00.scaleInPlace(Fd[0]), this.l1_1.scaleInPlace(Fd[1]), this.l10.scaleInPlace(Fd[2]), this.l11.scaleInPlace(Fd[3]), this.l2_2.scaleInPlace(Fd[4]), this.l2_1.scaleInPlace(Fd[5]), this.l20.scaleInPlace(Fd[6]), this.l21.scaleInPlace(Fd[7]), this.l22.scaleInPlace(Fd[8])
      }
      updateFromArray(dd) {
        return Wd.j.FromArrayToRef(dd[0], 0, this.l00), Wd.j.FromArrayToRef(dd[1], 0, this.l1_1), Wd.j.FromArrayToRef(dd[2], 0, this.l10), Wd.j.FromArrayToRef(dd[3], 0, this.l11), Wd.j.FromArrayToRef(dd[4], 0, this.l2_2), Wd.j.FromArrayToRef(dd[5], 0, this.l2_1), Wd.j.FromArrayToRef(dd[6], 0, this.l20), Wd.j.FromArrayToRef(dd[7], 0, this.l21), Wd.j.FromArrayToRef(dd[8], 0, this.l22), this
      }
      updateFromFloatsArray(dd) {
        return Wd.j.FromFloatsToRef(dd[0], dd[1], dd[2], this.l00), Wd.j.FromFloatsToRef(dd[3], dd[4], dd[5], this.l1_1), Wd.j.FromFloatsToRef(dd[6], dd[7], dd[8], this.l10), Wd.j.FromFloatsToRef(dd[9], dd[10], dd[11], this.l11), Wd.j.FromFloatsToRef(dd[12], dd[13], dd[14], this.l2_2), Wd.j.FromFloatsToRef(dd[15], dd[16], dd[17], this.l2_1), Wd.j.FromFloatsToRef(dd[18], dd[19], dd[20], this.l20), Wd.j.FromFloatsToRef(dd[21], dd[22], dd[23], this.l21), Wd.j.FromFloatsToRef(dd[24], dd[25], dd[26], this.l22), this
      }
      static FromArray(dd) {
        return (new hd).updateFromArray(dd)
      }
      static FromPolynomial(dd) {
        const Od = new hd;
        return Od.l00 = dd.xx.scale(.376127).add(dd.yy.scale(.376127)).add(dd.zz.scale(.376126)), Od.l1_1 = dd.y.scale(.977204), Od.l10 = dd.z.scale(.977204), Od.l11 = dd.x.scale(.977204), Od.l2_2 = dd.xy.scale(1.16538), Od.l2_1 = dd.yz.scale(1.16538), Od.l20 = dd.zz.scale(1.34567).subtract(dd.xx.scale(.672834)).subtract(dd.yy.scale(.672834)), Od.l21 = dd.zx.scale(1.16538), Od.l22 = dd.xx.scale(1.16538).subtract(dd.yy.scale(1.16538)), Od.l1_1.scaleInPlace(-1), Od.l11.scaleInPlace(-1), Od.l2_1.scaleInPlace(-1), Od.l21.scaleInPlace(-1), Od.scaleInPlace(Math.PI), Od
      }
    }
    class vd {
      constructor() {
        this.x = Wd.j.Zero(), this.y = Wd.j.Zero(), this.z = Wd.j.Zero(), this.xx = Wd.j.Zero(), this.yy = Wd.j.Zero(), this.zz = Wd.j.Zero(), this.xy = Wd.j.Zero(), this.yz = Wd.j.Zero(), this.zx = Wd.j.Zero()
      }
      get preScaledHarmonics() {
        return this._harmonics || (this._harmonics = hd.FromPolynomial(this)), this._harmonics.preScaled || this._harmonics.preScaleForRendering(), this._harmonics
      }
      addAmbient(dd) {
        Wd.h.Cq[0].KOd(dd.r, dd.g, dd.b);
        const Od = Wd.h.Cq[0];
        this.xx.addInPlace(Od), this.yy.addInPlace(Od), this.zz.addInPlace(Od)
      }
      scaleInPlace(dd) {
        this.x.scaleInPlace(dd), this.y.scaleInPlace(dd), this.z.scaleInPlace(dd), this.xx.scaleInPlace(dd), this.yy.scaleInPlace(dd), this.zz.scaleInPlace(dd), this.yz.scaleInPlace(dd), this.zx.scaleInPlace(dd), this.xy.scaleInPlace(dd)
      }
      updateFromHarmonics(dd) {
        return this._harmonics = dd, this.x.Bx(dd.l11), this.x.scaleInPlace(1.02333).scaleInPlace(-1), this.y.Bx(dd.l1_1), this.y.scaleInPlace(1.02333).scaleInPlace(-1), this.z.Bx(dd.l10), this.z.scaleInPlace(1.02333), this.xx.Bx(dd.l00), Wd.h.Cq[0].Bx(dd.l20).scaleInPlace(.247708), Wd.h.Cq[1].Bx(dd.l22).scaleInPlace(.429043), this.xx.scaleInPlace(.886277).YRd(Wd.h.Cq[0]).addInPlace(Wd.h.Cq[1]), this.yy.Bx(dd.l00), this.yy.scaleInPlace(.886277).YRd(Wd.h.Cq[0]).YRd(Wd.h.Cq[1]), this.zz.Bx(dd.l00), Wd.h.Cq[0].Bx(dd.l20).scaleInPlace(.495417), this.zz.scaleInPlace(.886277).addInPlace(Wd.h.Cq[0]), this.yz.Bx(dd.l2_1), this.yz.scaleInPlace(.858086).scaleInPlace(-1), this.zx.Bx(dd.l21), this.zx.scaleInPlace(.858086).scaleInPlace(-1), this.xy.Bx(dd.l2_2), this.xy.scaleInPlace(.858086), this.scaleInPlace(1 / Math.PI), this
      }
      static FromHarmonics(dd) {
        return (new vd).updateFromHarmonics(dd)
      }
      static FromArray(dd) {
        const Od = new vd;
        return Wd.j.FromArrayToRef(dd[0], 0, Od.x), Wd.j.FromArrayToRef(dd[1], 0, Od.y), Wd.j.FromArrayToRef(dd[2], 0, Od.z), Wd.j.FromArrayToRef(dd[3], 0, Od.xx), Wd.j.FromArrayToRef(dd[4], 0, Od.yy), Wd.j.FromArrayToRef(dd[5], 0, Od.zz), Wd.j.FromArrayToRef(dd[6], 0, Od.yz), Wd.j.FromArrayToRef(dd[7], 0, Od.zx), Wd.j.FromArrayToRef(dd[8], 0, Od.xy), Od
      }
    }
  },
  42367: (dd, Od, md) => {
    md.d(Od, {
      b: () => Vd,
      e: () => rd
    });
    var Wd = md(41922),
      Fd = md(38660),
      Rd = md(38636),
      Xd = md(42075),
      Kd = md(42339),
      hd = md(42374),
      vd = md(42072),
      Qd = md(42225),
      td = md(42065);
    class od {
      constructor() {
        this._checkCollisions = !1, this._collisionMask = -1, this._collisionGroup = -1, this._surroundingMeshes = null, this._collider = null, this._oldPositionForCollisions = new Rd.j(0, 0, 0), this._diffPositionForCollisions = new Rd.j(0, 0, 0), this._collisionResponse = !0
      }
    }
    var Nd, qd, Hd, yd = md(41817),
      bd = md(41997),
      Td = md(42233),
      pd = md(38741),
      Yd = md(38644),
      gd = md(42138),
      wd = md(40262),
      Ed = md(41931),
      Jd = md(41838),
      Ud = md(38669);

    function xd(dd, Od) {
      return dd - Math.floor(dd / Od) * Od
    }

    function Bd(dd, Od, md) {
      dd instanceof Float32Array ? Rd.d.FromArrayToRef(dd, Od, md) : md.KOd((0, bd.b)(dd[Od]), (0, bd.b)(dd[Od + 1]), (0, bd.b)(dd[Od + 2]), (0, bd.b)(dd[Od + 3]), (0, bd.b)(dd[Od + 4]), (0, bd.b)(dd[Od + 5]), (0, bd.b)(dd[Od + 6]), (0, bd.b)(dd[Od + 7]), (0, bd.b)(dd[Od + 8]), (0, bd.b)(dd[Od + 9]), (0, bd.b)(dd[Od + 10]), (0, bd.b)(dd[Od + 11]), (0, bd.b)(dd[Od + 12]), (0, bd.b)(dd[Od + 13]), (0, bd.b)(dd[Od + 14]), (0, bd.b)(dd[Od + 15]))
    }

    function Sd(dd, Od, md, Wd, Fd, Kd, hd, vd, Qd) {
      const td = md.texture,
        od = td?.getInternalTexture(),
        Nd = od?._bufferView;
      if (!(Nd instanceof Float32Array) && !(Nd instanceof Uint16Array)) return wd.c.Warn("Baked vertex animation bounding info requires CPU-readable Float32Array or Uint16Array texture data.", 1), !1;
      const qd = td.getSize(),
        Hd = function(dd, Od) {
          const md = dd.y - dd.x + 1,
            Wd = Od * dd.w / md,
            Fd = Wd < 1 ? 0 : 1,
            Rd = md - Fd;
          let Xd = xd(Wd - Math.floor(Wd), 1) * Rd;
          return Xd = xd(Xd + dd.z, Rd), Math.floor(Xd) + dd.x + Fd
        }(Wd, md.time);
      if (!isFinite(Hd) || Hd < 0 || Hd >= qd.height) return wd.c.Warn("Baked vertex animation bounding info could not be refreshed because the computed frame is outside the texture.", 1), !1;
      const yd = Rd.h.Cq[0],
        bd = Rd.h.Matrix[0],
        Td = Rd.h.Matrix[1],
        pd = Hd * qd.width * 4,
        Yd = Od === Xd.j.NormalKind ? Rd.j.TransformNormalFromFloatsToRef : Rd.j.TransformCoordinatesFromFloatsToRef;
      for (let Rd = 0, Xd = 0; Rd < dd.length; Rd += 3, Xd += 4) {
        let Od, md;
        for (bd.reset(), Od = 0; Od < 4 && Od < Qd; Od++) md = Kd[Xd + Od], md > 0 && (Bd(Nd, pd + 16 * Math.floor(Fd[Xd + Od]), Td), Td.scaleAndAddToRef(md, bd));
        if (hd && vd)
          for (Od = 0; Od < 4 && Od + 4 < Qd; Od++) md = vd[Xd + Od], md > 0 && (Bd(Nd, pd + 16 * Math.floor(hd[Xd + Od]), Td), Td.scaleAndAddToRef(md, bd));
        Yd(dd[Rd], dd[Rd + 1], dd[Rd + 2], bd, yd), yd.toArray(dd, Rd)
      }
      return !0
    }
    class sd {
      constructor() {
        this.facetNb = 0, this.partitioningSubdivisions = 10, this.partitioningBBoxRatio = 1.01, this.facetDataEnabled = !1, this.facetParameters = {}, this.bbSize = Rd.j.Zero(), this.subDiv = {
          max: 1,
          X: 1,
          Y: 1,
          Z: 1
        }, this.facetDepthSort = !1, this.facetDepthSortEnabled = !1
      }
    }
    class ud {
      constructor() {
        this._hasVertexAlpha = !1, this._useVertexColors = !0, this._numBoneInfluencers = 4, this._applyFog = !0, this._receiveShadows = !1, this._facetData = new sd, this._visibility = 1, this._skeleton = null, this._layerMask = 268435455, this._computeBonesUsingShaders = !0, this._isActive = !1, this._onlyForInstances = !1, this._isActiveIntermediate = !1, this._onlyForInstancesIntermediate = !1, this._actAsRegularMesh = !1, this._currentLOD = new Map, this._collisionRetryCount = 3, this._morphTargetManager = null, this._renderingGroupId = 0, this._meshBlendingTag = 0, this._bakedVertexAnimationManager = null, this._material = null, this._positions = null, this._pointerOverDisableMeshTesting = !1, this._meshCollisionData = new od, this._enableDistantPicking = !1, this._rawBoundingInfo = null, this._sideOrientationHint = !1, this._wasActiveLastFrame = !1
      }
    }
    let Vd = (() => {
        var dd;
        let Od, od = hd.f,
          Nd = [];
        return dd = class extends od {
          static get BILLBOARDMODE_NONE() {
            return hd.f.BILLBOARDMODE_NONE
          }
          static get BILLBOARDMODE_X() {
            return hd.f.BILLBOARDMODE_X
          }
          static get BILLBOARDMODE_Y() {
            return hd.f.BILLBOARDMODE_Y
          }
          static get BILLBOARDMODE_Z() {
            return hd.f.BILLBOARDMODE_Z
          }
          static get BILLBOARDMODE_ALL() {
            return hd.f.BILLBOARDMODE_ALL
          }
          static get BILLBOARDMODE_USE_POSITION() {
            return hd.f.BILLBOARDMODE_USE_POSITION
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
          set Co(dd) {
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
            const Od = this._internalAbstractMeshDataInfo._visibility;
            this._internalAbstractMeshDataInfo._visibility = dd, (1 === Od && 1 !== dd || 1 !== Od && 1 === dd) && this._markSubMeshesAsDirty((dd => {
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
            this._internalAbstractMeshDataInfo._material !== dd && (this._internalAbstractMeshDataInfo._material && this._internalAbstractMeshDataInfo._material.meshMap && (this._internalAbstractMeshDataInfo._material.meshMap[this.uniqueId] = void 0), this._internalAbstractMeshDataInfo._material = dd, dd && dd.meshMap && (dd.meshMap[this.uniqueId] = this), this.onMaterialChangedObservable.hasObservers() && this.onMaterialChangedObservable.notifyObservers(this), this.ZE && (this.resetDrawCache(void 0, null == dd), this._unBindEffect()))
          }
          getMaterialForRenderPass(dd) {
            return this._internalAbstractMeshDataInfo._materialForRenderPass?.[dd]
          }
          setMaterialForRenderPass(dd, Od) {
            this.resetDrawCache(dd), this._internalAbstractMeshDataInfo._materialForRenderPass || (this._internalAbstractMeshDataInfo._materialForRenderPass = []);
            const md = this._internalAbstractMeshDataInfo._materialForRenderPass[dd];
            md?.meshMap?.[this.uniqueId] && (md.meshMap[this.uniqueId] = void 0), this._internalAbstractMeshDataInfo._materialForRenderPass[dd] = Od, Od && Od.meshMap && (Od.meshMap[this.uniqueId] = this)
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
            const Od = this._internalAbstractMeshDataInfo._skeleton;
            Od && Od.needInitialSkinMatrix && Od._unregisterMeshWithPoseMatrix(this), dd && dd.needInitialSkinMatrix && dd._registerMeshWithPoseMatrix(this), this._internalAbstractMeshDataInfo._skeleton = dd, this._internalAbstractMeshDataInfo._skeleton || (this._bonesTransformMatrices = null), this._markSubMeshesAsAttributesDirty()
          }
          get skeleton() {
            return this._internalAbstractMeshDataInfo._skeleton
          }
          constructor(Od) {
            var md;
            let Wd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            switch (super(Od, Wd, !1), md = this, this._internalAbstractMeshDataInfo = new ud, this._waitingMaterialId = null, this._waitingMorphTargetManagerId = null, this._waitingSkeletonId = null, this._waitingSkeletonUniqueId = null, this.cullingStrategy = dd.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY, this.onCollideObservable = new Fd.c, this.onCollisionPositionChangeObservable = new Fd.c, this.onMaterialChangedObservable = new Fd.c, this.definedFacingForward = !0, this._occlusionQuery = null, this._renderingGroup = null, this.alphaIndex = Number.MAX_VALUE, this.my = dd.DefaultIsPickable, this.isNearPickable = !1, this.isNearGrabbable = !1, this.showSubMeshesBoundingBox = !1, this.isBlocker = !1, this.enablePointerMoveEvents = !1, this.outlineColor = pd.d.Red(), this.outlineWidth = .02, this.overlayColor = pd.d.Red(), this.overlayAlpha = .5, this.useOctreeForRenderingSelection = !0, this.useOctreeForPicking = !0, this.useOctreeForCollisions = !0, this.lq = !1, this.kq = !1, this.actionManager = null, this.ellipsoid = new Rd.j(.5, 1, .5), this.ellipsoidOffset = new Rd.j(0, 0, 0), this.edgesWidth = 1, this.edgesColor = new pd.f(1, 0, 0, 1), this._edgesRenderer = null, this._masterMesh = null, this._boundingInfo = null, this._boundingInfoIsDirty = !0, this._renderId = 0, this._intersectionsInProgress = new Array, this._unIndexed = !1, this._lightSources = new Array, this._waitingData = {
                lods: null,
                actions: null,
                sA: null
              }, this._bonesTransformMatrices = null, this._transformMatrixTexture = null, this.onRebuildObservable = new Fd.c, this._onCollisionPositionChange = function(dd, Od) {
                let Wd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                Od.subtractToRef(md._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions, md._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions), md._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions.length() > Jd.b.CollisionsEpsilon && md.position.addInPlace(md._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions), Wd && md.onCollideObservable.notifyObservers(Wd), md.onCollisionPositionChangeObservable.notifyObservers(md.position)
              }, Wd = this.zV(), this.layerMask = Wd.defaultRenderableLayerMask, Wd.hRd(this), this._resyncLightSources(), this._uniformBuffer = new td.c(this.zV().Iq(), void 0, void 0, Od, !this.zV().Iq().isWebGPU), this._buildUniformLayout(), Wd.performancePriority) {
              case 2:
                this.kq = !0;
              case 1:
                this.lq = !0, this.my = !1
            }
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("world", 16), this._uniformBuffer.addUniform("visibility", 1), this._uniformBuffer.create()
          }
          transferToEffect(dd) {
            const Od = this._uniformBuffer;
            Od.Idd("world", dd), Od.updateFloat("visibility", this._internalAbstractMeshDataInfo._visibility), Od.update()
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
            let Od = "Name: " + this.name + ", isInstance: " + ("InstancedMesh" === this.getClassName() ? "YES" : "NO");
            Od += ", # of submeshes: " + (this.ZE ? this.ZE.length : 0);
            const md = this._internalAbstractMeshDataInfo._skeleton;
            return md && (Od += ", skeleton: " + md.name), dd && (Od += ", billboard mode: " + ["NONE", "X", "Y", null, "Z", null, null, "ALL"][this.billboardMode], Od += ", freeze wrld mat: " + (this._isWorldMatrixFrozen || this._waitingData.sA ? "YES" : "NO")), Od
          }
          _getEffectiveParent() {
            return this._masterMesh && this.billboardMode !== hd.f.BILLBOARDMODE_NONE ? this._masterMesh : super._getEffectiveParent()
          }
          _getActionManagerForTrigger(dd) {
            let Od = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            if (this.actionManager && (Od || this.actionManager.isRecursive)) {
              if (!dd) return this.actionManager;
              if (this.actionManager.hasSpecificTrigger(dd)) return this.actionManager
            }
            return this.parent ? this.parent._getActionManagerForTrigger(dd, !1) : null
          }
          _releaseRenderPassId(dd) {}
          _rebuild() {
            if (this.onRebuildObservable.notifyObservers(this), null !== this._occlusionQuery && (this._occlusionQuery = null), this.ZE) {
              for (const dd of this.ZE) dd._rebuild();
              this.resetDrawCache()
            }
          }
          _resyncLightSources() {
            this._lightSources.length = 0;
            for (const dd of this.zV().lights) dd.isEnabled() && dd.canAffectMesh(this) && this._lightSources.push(dd);
            this._markSubMeshesAsLightDirty()
          }
          _resyncLightSource(dd) {
            const Od = dd.isEnabled() && dd.canAffectMesh(this),
              md = this._lightSources.indexOf(dd);
            let Wd = !1;
            if (-1 === md) {
              if (!Od) return;
              this._lightSources.push(dd)
            } else {
              if (Od) return;
              Wd = !0, this._lightSources.splice(md, 1)
            }
            this._markSubMeshesAsLightDirty(Wd)
          }
          _unBindEffect() {
            for (const dd of this.ZE) dd.setEffect(null)
          }
          _removeLightSource(dd, Od) {
            const md = this._lightSources.indexOf(dd); - 1 !== md && (this._lightSources.splice(md, 1), this._markSubMeshesAsLightDirty(Od))
          }
          _markSubMeshesAsDirty(dd) {
            if (this.ZE)
              for (const Od of this.ZE)
                for (let md = 0; md < Od._drawWrappers.length; ++md) {
                  const Wd = Od._drawWrappers[md];
                  Wd && Wd.defines && Wd.defines.markAllAsDirty && dd(Wd.defines)
                }
          }
          _markSubMeshesAsLightDirty() {
            let dd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            this._markSubMeshesAsDirty((Od => Od.markAsLightDirty(dd)))
          }
          _markSubMeshesAsAttributesDirty() {
            this._markSubMeshesAsDirty((dd => dd.markAsAttributesDirty()))
          }
          _markSubMeshesAsMiscDirty() {
            this._markSubMeshesAsDirty((dd => dd.markAsMiscDirty()))
          }
          KWd(dd) {
            return this._currentRenderId = Number.MAX_VALUE, super.KWd(dd), this._isDirty = !0, this
          }
          resetDrawCache(dd) {
            let Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (this.ZE)
              for (const md of this.ZE) md.resetDrawCache(dd, Od)
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
          jRd() {
            return null
          }
          getVerticesData(dd) {
            return null
          }
          setVerticesData(dd, Od, md, Wd) {
            return this
          }
          updateVerticesData(dd, Od, md, Wd) {
            return this
          }
          setIndices(dd, Od) {
            return this
          }
          isVerticesDataPresent(dd) {
            return !1
          }
          iG() {
            return this._masterMesh ? this._masterMesh.iG() : (this._boundingInfoIsDirty && (this._boundingInfoIsDirty = !1, this._updateBoundingInfo()), this._boundingInfo)
          }
          getRawBoundingInfo() {
            return this.rawBoundingInfo ?? this.iG()
          }
          setBoundingInfo(dd) {
            return this._boundingInfo = dd, this
          }
          get hasBoundingInfo() {
            return null !== this._boundingInfo
          }
          buildBoundingInfo(dd, Od, md) {
            return this._boundingInfo = new Qd.c(dd, Od, md), this._boundingInfo
          }
          normalizeToUnitCube() {
            let dd = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
              Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              md = arguments.length > 2 ? arguments[2] : void 0;
            return super.normalizeToUnitCube(dd, Od, md)
          }
          get useBones() {
            return this.skeleton && this.zV().skeletonsEnabled && this.isVerticesDataPresent(Xd.j.MatricesIndicesKind) && this.isVerticesDataPresent(Xd.j.MatricesWeightsKind)
          }
          _preActivate() {}
          _preActivateForIntermediateRendering(dd) {}
          _activate(dd, Od) {
            return this._renderId = dd, !0
          }
          _postActivate() {}
          _freeze() {}
          _unFreeze() {}
          getWorldMatrix() {
            return this._masterMesh && this.billboardMode === hd.f.BILLBOARDMODE_NONE ? this._masterMesh.getWorldMatrix() : super.getWorldMatrix()
          }
          _getWorldMatrixDeterminant() {
            return this._masterMesh ? this._masterMesh._getWorldMatrixDeterminant() : super._getWorldMatrixDeterminant()
          }
          get lV() {
            return !1
          }
          get CRd() {
            return !1
          }
          get hasThinInstances() {
            return !1
          }
          movePOV(dd, Od, md) {
            return this.position.addInPlace(this.calcMovePOV(dd, Od, md)), this
          }
          calcMovePOV(dd, Od, md) {
            const Wd = new Rd.d;
            (this.rotationQuaternion ? this.rotationQuaternion : Rd.e.RotationYawPitchRoll(this.rotation.y, this.rotation.x, this.rotation.z)).toRotationMatrix(Wd);
            const Fd = Rd.j.Zero(),
              Xd = this.definedFacingForward ? -1 : 1;
            return Rd.j.TransformCoordinatesFromFloatsToRef(dd * Xd, Od, md * Xd, Wd, Fd), Fd
          }
          rotatePOV(dd, Od, md) {
            return this.rotation.addInPlace(this.calcRotatePOV(dd, Od, md)), this
          }
          calcRotatePOV(dd, Od, md) {
            const Wd = this.definedFacingForward ? 1 : -1;
            return new Rd.j(dd * Wd, Od, md * Wd)
          }
          _refreshBoundingInfo(dd, Od) {
            if (dd) {
              const md = (0, Td.h)(dd, 0, this.getTotalVertices(), Od);
              this._boundingInfo ? this._boundingInfo.reConstruct(md.minimum, md.maximum) : this._boundingInfo = new Qd.c(md.minimum, md.maximum)
            }
            if (this.ZE)
              for (let md = 0; md < this.ZE.length; md++) this.ZE[md].refreshBoundingInfo(dd);
            this._updateBoundingInfo()
          }
          _refreshBoundingInfoDirect(dd) {
            if (this._boundingInfo ? this._boundingInfo.reConstruct(dd.minimum, dd.maximum) : this._boundingInfo = new Qd.c(dd.minimum, dd.maximum), this.ZE)
              for (let Od = 0; Od < this.ZE.length; Od++) this.ZE[Od].refreshBoundingInfo(null);
            this._updateBoundingInfo()
          }
          static _ApplySkeleton(dd, Od, md, Wd, Fd, Kd, hd) {
            ! function(dd, Od, md, Wd, Fd, Kd, hd) {
              const vd = Rd.h.Cq[0],
                Qd = Rd.h.Matrix[0],
                td = Rd.h.Matrix[1],
                od = Od === Xd.j.NormalKind ? Rd.j.TransformNormalFromFloatsToRef : Rd.j.TransformCoordinatesFromFloatsToRef;
              for (let Xd = 0, Nd = 0; Xd < dd.length; Xd += 3, Nd += 4) {
                let Od, qd;
                for (Qd.reset(), Od = 0; Od < 4; Od++) qd = Fd[Nd + Od], qd > 0 && (Rd.d.FromFloat32ArrayToRefScaled(md, Math.floor(16 * Wd[Nd + Od]), qd, td), Qd.addToSelf(td));
                if (Kd && hd)
                  for (Od = 0; Od < 4; Od++) qd = hd[Nd + Od], qd > 0 && (Rd.d.FromFloat32ArrayToRefScaled(md, Math.floor(16 * Kd[Nd + Od]), qd, td), Qd.addToSelf(td));
                od(dd[Xd], dd[Xd + 1], dd[Xd + 2], Qd, vd), vd.toArray(dd, Xd)
              }
            }(dd, Od, md, Wd, Fd, Kd, hd)
          }
          _getData(Od, md) {
            let Wd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Xd.j.PositionKind;
            const Fd = Od.cache,
              Kd = dd => {
                if (Fd) {
                  const Od = Fd._vertexData || (Fd._vertexData = {});
                  return Od[dd] || this.copyVerticesData(dd, Od), Od[dd]
                }
                return this.getVerticesData(dd)
              };
            if (md || (md = Kd(Wd)), !md) return null;
            Fd ? (Fd._outputData ? Fd._outputData.set(md) : Fd._outputData = new Float32Array(md), md = Fd._outputData) : (Od.applyMorph && this.morphTargetManager || Od.applySkeleton && this.skeleton || Od.applyBakedVertexAnimation && this.bakedVertexAnimationManager?.isEnabled) && (md = md.slice()), Od.applyMorph && this.morphTargetManager && function(dd, Od, md) {
              let Wd;
              switch (Od) {
                case Xd.j.PositionKind:
                  Wd = dd => dd.getPositions();
                  break;
                case Xd.j.NormalKind:
                  Wd = dd => dd.getNormals();
                  break;
                case Xd.j.TangentKind:
                  Wd = dd => dd.getTangents();
                  break;
                case Xd.j.UVKind:
                  Wd = dd => dd.getUVs();
                  break;
                case Xd.j.UV2Kind:
                  Wd = dd => dd.getUV2s();
                  break;
                case Xd.j.ColorKind:
                  Wd = dd => dd.getColors();
                  break;
                default:
                  return
              }
              for (let Fd = 0; Fd < dd.length; Fd++) {
                let Od = dd[Fd];
                for (let Rd = 0; Rd < md.numTargets; Rd++) {
                  const Xd = md.getTarget(Rd),
                    Kd = Xd.influence;
                  if (0 !== Kd) {
                    const md = Wd(Xd);
                    md && (Od += (md[Fd] - dd[Fd]) * Kd)
                  }
                }
                dd[Fd] = Od
              }
            }(md, Wd, this.morphTargetManager);
            const hd = this.bakedVertexAnimationManager;
            let vd = !1;
            if (Od.applyBakedVertexAnimation && hd?.isEnabled) {
              const dd = Kd(Xd.j.MatricesIndicesKind),
                Fd = Kd(Xd.j.MatricesWeightsKind);
              if (Fd && dd) {
                const Rd = this.numBoneInfluencers > 4,
                  Qd = Rd ? Kd(Xd.j.MatricesIndicesExtraKind) : null,
                  td = Rd ? Kd(Xd.j.MatricesWeightsExtraKind) : null;
                vd = Sd(md, Wd, hd, Od.bakedVertexAnimationSettings ?? hd.animationParameters, dd, Fd, Qd, td, this.numBoneInfluencers)
              }
            }
            if (!vd && Od.applySkeleton && this.skeleton) {
              const Od = Kd(Xd.j.MatricesIndicesKind),
                Fd = Kd(Xd.j.MatricesWeightsKind);
              if (Fd && Od) {
                const Rd = this.numBoneInfluencers > 4,
                  hd = Rd ? Kd(Xd.j.MatricesIndicesExtraKind) : null,
                  vd = Rd ? Kd(Xd.j.MatricesWeightsExtraKind) : null,
                  Qd = this.skeleton.getTransformMatrices(this);
                dd._ApplySkeleton(md, Wd, Qd, Od, Fd, hd, vd)
              }
            }
            if (!1 !== Od.updatePositionsArray && Wd === Xd.j.PositionKind) {
              const dd = this._internalAbstractMeshDataInfo._positions || [],
                Od = dd.length;
              if (dd.length = md.length / 3, Od < dd.length)
                for (let md = Od; md < dd.length; md++) dd[md] = new Rd.j;
              for (let Wd = 0, Fd = 0; Wd < dd.length; Wd++, Fd += 3) dd[Wd].KOd(md[Fd], md[Fd + 1], md[Fd + 2]);
              this._internalAbstractMeshDataInfo._positions = dd
            }
            return md
          }
          getNormalsData() {
            let dd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return this._getData({
              applySkeleton: dd,
              applyMorph: Od,
              updatePositionsArray: !1
            }, null, Xd.j.NormalKind)
          }
          gM() {
            let dd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            return this._getData({
              applySkeleton: dd,
              applyMorph: Od,
              updatePositionsArray: !1
            }, md, Xd.j.PositionKind)
          }
          _updateBoundingInfo() {
            return this._boundingInfo ? this._boundingInfo.update(this.worldMatrixFromCache) : this._boundingInfo = new Qd.c(Rd.j.Zero(), Rd.j.Zero(), this.worldMatrixFromCache), this._updateSubMeshesBoundingInfo(this.worldMatrixFromCache), this
          }
          _updateSubMeshesBoundingInfo(dd) {
            if (!this.ZE) return this;
            const Od = this.ZE.length;
            for (let md = 0; md < Od; md++) {
              const Wd = this.ZE[md];
              (Od > 1 || !Wd.IsGlobal) && Wd.updateBoundingInfo(dd)
            }
            return this
          }
          _afterComputeWorldMatrix() {
            this.kq || (this._boundingInfoIsDirty = !0)
          }
          isInFrustum(dd) {
            return this.iG().isInFrustum(dd, this.cullingStrategy)
          }
          isCompletelyInFrustum(dd) {
            return this.iG().isCompletelyInFrustum(dd)
          }
          PRd(dd) {
            let Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              md = arguments.length > 2 ? arguments[2] : void 0;
            const Wd = this.iG(),
              Fd = dd.iG();
            if (Wd.intersects(Fd, Od)) return !0;
            if (md)
              for (const Rd of this.getChildMeshes())
                if (Rd.PRd(dd, Od, !0)) return !0;
            return !1
          }
          intersectsPoint(dd) {
            return this.iG().intersectsPoint(dd)
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
            let Od = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            this.getAbsolutePosition().addToRef(this.ellipsoidOffset, this._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions);
            const md = this.zV().collisionCoordinator;
            return this._internalAbstractMeshDataInfo._meshCollisionData._collider || (this._internalAbstractMeshDataInfo._meshCollisionData._collider = md.createCollider()), this._internalAbstractMeshDataInfo._meshCollisionData._collider._radius = this.ellipsoid, md.getNewPosition(this._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions, dd, this._internalAbstractMeshDataInfo._meshCollisionData._collider, this.collisionRetryCount, this, this._onCollisionPositionChange, this.uniqueId, Od), this
          }
          _collideForSubMesh(dd, Od, md) {
            if (this._generatePointsArray(), !this._positions) return this;
            if (!dd._lastColliderWorldVertices || !dd._lastColliderTransformMatrix.equals(Od)) {
              dd._lastColliderTransformMatrix = Od.clone(), dd._lastColliderWorldVertices = [], dd._trianglePlanes = [];
              const md = dd.verticesStart,
                Wd = dd.verticesStart + dd.verticesCount;
              for (let Fd = md; Fd < Wd; Fd++) dd._lastColliderWorldVertices.push(Rd.j.TransformCoordinates(this._positions[Fd], Od))
            }
            return md._collide(dd._trianglePlanes, dd._lastColliderWorldVertices, this.jRd(), dd.indexStart, dd.indexStart + dd.indexCount, dd.verticesStart, !!dd.fq(), this, this._shouldConvertRHS(), 7 === dd.fq()?.fillMode), this
          }
          _processCollisionsForSubMeshes(dd, Od) {
            const md = this._scene.getCollidingSubMeshCandidates(this, dd),
              Wd = md.length;
            for (let Fd = 0; Fd < Wd; Fd++) {
              const Rd = md.data[Fd];
              Wd > 1 && !Rd._checkCollision(dd) || this._collideForSubMesh(Rd, Od, dd)
            }
            return this
          }
          _shouldConvertRHS() {
            return !1
          }
          _checkCollision(dd) {
            if (!this.iG()._checkCollision(dd)) return this;
            const Od = Rd.h.Matrix[0],
              md = Rd.h.Matrix[1];
            return Rd.d.ScalingToRef(1 / dd._radius.x, 1 / dd._radius.y, 1 / dd._radius.z, Od), this.worldMatrixFromCache.multiplyToRef(Od, md), this._processCollisionsForSubMeshes(dd, md), this
          }
          _generatePointsArray() {
            return !1
          }
          intersects(dd, Od, md) {
            let Wd = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              Fd = arguments.length > 4 ? arguments[4] : void 0,
              Xd = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
            const Kd = new vd.b,
              hd = this.getClassName(),
              Qd = "InstancedLinesMesh" === hd || "LinesMesh" === hd || "GreasedLineMesh" === hd ? this.intersectionThreshold : 0,
              td = this.iG();
            if (!this.ZE) return Kd;
            if (!Xd && (!dd.intersectsSphere(td.ERd, Qd) || !dd.intersectsBox(td.boundingBox, Qd))) return Kd;
            if (Wd) return Kd.hit = !Xd, Kd.pickedMesh = Xd ? null : this, Kd.distance = Xd ? 0 : Rd.j.Distance(dd.origin, td.ERd.center), Kd.subMeshId = 0, Kd;
            if (!this._generatePointsArray()) return Kd;
            let od = null;
            const Nd = this._scene.getIntersectingSubMeshCandidates(this, dd),
              qd = Nd.length;
            let Hd = !1;
            for (let Rd = 0; Rd < qd; Rd++) {
              const dd = Nd.data[Rd].fq();
              if (dd && (7 == dd.fillMode || 0 == dd.fillMode || 1 == dd.fillMode || 2 == dd.fillMode || 4 == dd.fillMode)) {
                Hd = !0;
                break
              }
            }
            if (!Hd) return Kd.hit = !0, Kd.pickedMesh = this, Kd.distance = Rd.j.Distance(dd.origin, td.ERd.center), Kd.subMeshId = -1, Kd;
            for (let Rd = 0; Rd < qd; Rd++) {
              const Wd = Nd.data[Rd];
              if (qd > 1 && !Xd && !Wd.canIntersects(dd)) continue;
              const Fd = Wd.intersects(dd, this._positions, this.jRd(), Od, md);
              if (Fd && (Od || !od || Fd.distance < od.distance) && (od = Fd, od.subMeshId = Wd._id, od._internalSubMeshId = Rd, Od)) break
            }
            if (od) {
              const Od = Fd ?? this.getWorldMatrix(),
                md = Rd.h.Cq[0],
                Wd = Rd.h.Cq[1];
              Rd.j.TransformCoordinatesToRef(dd.origin, Od, md), dd.direction.scaleToRef(od.distance, Wd);
              const Xd = Rd.j.TransformNormal(Wd, Od).addInPlace(md);
              return Kd.hit = !0, Kd.distance = Rd.j.Distance(md, Xd), Kd.pickedPoint = Xd, Kd.pickedMesh = this, Kd.bu = od.bu || 0, Kd.bv = od.bv || 0, Kd.subMeshFaceId = od.faceId, Kd.faceId = od.faceId + Nd.data[od._internalSubMeshId].indexStart / (-1 !== this.getClassName().indexOf("LinesMesh") ? 2 : 3), Kd.subMeshId = od.subMeshId, Kd
            }
            return Kd
          }
          clone(dd, Od, md) {
            return null
          }
          releaseSubMeshes() {
            let dd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (this.ZE)
              for (; this.ZE.length;) this.ZE[0].dispose(dd);
            else this.ZE = [];
            return this
          }
          dispose(dd) {
            let Od, md = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            const Wd = this.zV();
            for (this._scene.useMaterialMeshMap && this._internalAbstractMeshDataInfo._material && this._internalAbstractMeshDataInfo._material.meshMap && (this._internalAbstractMeshDataInfo._material.meshMap[this.uniqueId] = void 0), Wd.freeActiveMeshes(), Wd.freeRenderingGroups(), Wd.renderingManager.maintainStateBetweenFrames && Wd.renderingManager.restoreDispachedFlags(), void 0 !== this.actionManager && null !== this.actionManager && (this.actionManager.disposeWhenUnowned && !this._scene.meshes.some((dd => dd !== this && dd.actionManager === this.actionManager)) && this.actionManager.dispose(), this.actionManager = null), this._internalAbstractMeshDataInfo._skeleton = null, this._transformMatrixTexture && (this._transformMatrixTexture.dispose(), this._transformMatrixTexture = null), Od = 0; Od < this._intersectionsInProgress.length; Od++) {
              const dd = this._intersectionsInProgress[Od],
                md = dd._intersectionsInProgress.indexOf(this);
              dd._intersectionsInProgress.splice(md, 1)
            }
            this._intersectionsInProgress.length = 0;
            const Fd = Wd.lights;
            for (const Xd of Fd) {
              let dd = Xd.includedOnlyMeshes.indexOf(this); - 1 !== dd && Xd.includedOnlyMeshes.splice(dd, 1), dd = Xd.excludedMeshes.indexOf(this), -1 !== dd && Xd.excludedMeshes.splice(dd, 1);
              const Od = Xd.getShadowGenerators();
              if (Od) {
                const md = Od.values();
                for (let Od = md.next(); !0 !== Od.done; Od = md.next()) {
                  const md = Od.value.getShadowMap();
                  md && md.renderList && (dd = md.renderList.indexOf(this), -1 !== dd && md.renderList.splice(dd, 1))
                }
              }
            }
            this.releaseSubMeshes(Wd._isDisposing);
            const Rd = Wd.Iq();
            if (null !== this._occlusionQuery && (this.isOcclusionQueryInProgress = !1, Rd.deleteQuery(this._occlusionQuery), this._occlusionQuery = null), Rd.wipeCaches(), Wd.WG(this), this._parentContainer) {
              const dd = this._parentContainer.meshes.indexOf(this);
              dd > -1 && this._parentContainer.meshes.splice(dd, 1), this._parentContainer = null
            }
            if (md && this.material && ("MultiMaterial" === this.material.getClassName() ? this.material.dispose(!1, !0, !0) : this.material.dispose(!1, !0)), !dd)
              for (Od = 0; Od < Wd.kE.length; Od++) Wd.kE[Od].emitter === this && (Wd.kE[Od].dispose(), Od--);
            this._internalAbstractMeshDataInfo._facetData.facetDataEnabled && this.disableFacetData(), this._uniformBuffer.dispose(), this.onAfterWorldMatrixUpdateObservable.clear(), this.onCollideObservable.clear(), this.onCollisionPositionChangeObservable.clear(), this.onRebuildObservable.clear(), super.dispose(dd, md)
          }
          _initFacetData() {
            const dd = this._internalAbstractMeshDataInfo._facetData;
            dd.facetNormals || (dd.facetNormals = []), dd.facetPositions || (dd.facetPositions = []), dd.facetPartitioning || (dd.facetPartitioning = new Array), dd.facetNb = this.jRd().length / 3 | 0, dd.partitioningSubdivisions = dd.partitioningSubdivisions ? dd.partitioningSubdivisions : 10, dd.partitioningBBoxRatio = dd.partitioningBBoxRatio ? dd.partitioningBBoxRatio : 1.01;
            for (let Od = 0; Od < dd.facetNb; Od++) dd.facetNormals[Od] = Rd.j.Zero(), dd.facetPositions[Od] = Rd.j.Zero();
            return dd.facetDataEnabled = !0, this
          }
          updateFacetData() {
            const dd = this._internalAbstractMeshDataInfo._facetData;
            dd.facetDataEnabled || this._initFacetData();
            const Od = this.getVerticesData(Xd.j.PositionKind),
              md = this.jRd(),
              Wd = this.getVerticesData(Xd.j.NormalKind)?.slice(),
              Fd = this.iG();
            if (dd.facetDepthSort && !dd.facetDepthSortEnabled) {
              if (dd.facetDepthSortEnabled = !0, md instanceof Uint16Array) dd.depthSortedIndices = new Uint16Array(md);
              else if (md instanceof Uint32Array) dd.depthSortedIndices = new Uint32Array(md);
              else {
                let Od = !1;
                for (let dd = 0; dd < md.length; dd++)
                  if (md[dd] > 65535) {
                    Od = !0;
                    break
                  } dd.depthSortedIndices = Od ? new Uint32Array(md) : new Uint16Array(md)
              }
              if (dd.facetDepthSortFunction = function(dd, Od) {
                  return Od.sqDistance - dd.sqDistance
                }, !dd.facetDepthSortFrom) {
                const Od = this.zV().activeCamera;
                dd.facetDepthSortFrom = Od ? Od.position : Rd.j.Zero()
              }
              dd.depthSortedFacets = [];
              for (let Od = 0; Od < dd.facetNb; Od++) {
                const md = {
                  ind: 3 * Od,
                  sqDistance: 0
                };
                dd.depthSortedFacets.push(md)
              }
              dd.invertedMatrix = Rd.d.Identity(), dd.facetDepthSortOrigin = Rd.j.Zero()
            }
            dd.bbSize.x = Fd.maximum.x - Fd.minimum.x > Yd.b ? Fd.maximum.x - Fd.minimum.x : Yd.b, dd.bbSize.y = Fd.maximum.y - Fd.minimum.y > Yd.b ? Fd.maximum.y - Fd.minimum.y : Yd.b, dd.bbSize.z = Fd.maximum.z - Fd.minimum.z > Yd.b ? Fd.maximum.z - Fd.minimum.z : Yd.b;
            let hd = dd.bbSize.x > dd.bbSize.y ? dd.bbSize.x : dd.bbSize.y;
            if (hd = hd > dd.bbSize.z ? hd : dd.bbSize.z, dd.subDiv.max = dd.partitioningSubdivisions, dd.subDiv.X = Math.floor(dd.subDiv.max * dd.bbSize.x / hd), dd.subDiv.Y = Math.floor(dd.subDiv.max * dd.bbSize.y / hd), dd.subDiv.Z = Math.floor(dd.subDiv.max * dd.bbSize.z / hd), dd.subDiv.X = dd.subDiv.X < 1 ? 1 : dd.subDiv.X, dd.subDiv.Y = dd.subDiv.Y < 1 ? 1 : dd.subDiv.Y, dd.subDiv.Z = dd.subDiv.Z < 1 ? 1 : dd.subDiv.Z, dd.facetParameters.facetNormals = this.getFacetLocalNormals(), dd.facetParameters.facetPositions = this.getFacetLocalPositions(), dd.facetParameters.facetPartitioning = this.getFacetLocalPartitioning(), dd.facetParameters.bInfo = Fd, dd.facetParameters.bbSize = dd.bbSize, dd.facetParameters.subDiv = dd.subDiv, dd.facetParameters.ratio = this.partitioningBBoxRatio, dd.facetParameters.depthSort = dd.facetDepthSort, dd.facetDepthSort && dd.facetDepthSortEnabled && (this.computeWorldMatrix(!0), this._worldMatrix.invertToRef(dd.invertedMatrix), Rd.j.TransformCoordinatesToRef(dd.facetDepthSortFrom, dd.invertedMatrix, dd.facetDepthSortOrigin), dd.facetParameters.distanceTo = dd.facetDepthSortOrigin), dd.facetParameters.depthSortedFacets = dd.depthSortedFacets, Wd && Kd.c.ComputeNormals(Od, md, Wd, dd.facetParameters), dd.facetDepthSort && dd.facetDepthSortEnabled) {
              dd.depthSortedFacets.sort(dd.facetDepthSortFunction);
              const Od = dd.depthSortedIndices.length / 3 | 0;
              for (let Wd = 0; Wd < Od; Wd++) {
                const Od = dd.depthSortedFacets[Wd].ind;
                dd.depthSortedIndices[3 * Wd] = md[Od], dd.depthSortedIndices[3 * Wd + 1] = md[Od + 1], dd.depthSortedIndices[3 * Wd + 2] = md[Od + 2]
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
            const Od = Rd.j.Zero();
            return this.getFacetPositionToRef(dd, Od), Od
          }
          getFacetPositionToRef(dd, Od) {
            const md = this.getFacetLocalPositions()[dd],
              Wd = this.getWorldMatrix();
            return Rd.j.TransformCoordinatesToRef(md, Wd, Od), this
          }
          getFacetNormal(dd) {
            const Od = Rd.j.Zero();
            return this.getFacetNormalToRef(dd, Od), Od
          }
          getFacetNormalToRef(dd, Od) {
            const md = this.getFacetLocalNormals()[dd];
            return Rd.j.TransformNormalToRef(md, this.getWorldMatrix(), Od), this
          }
          getFacetsAtLocalCoordinates(dd, Od, md) {
            const Wd = this.iG(),
              Fd = this._internalAbstractMeshDataInfo._facetData,
              Rd = Math.floor((dd - Wd.minimum.x * Fd.partitioningBBoxRatio) * Fd.subDiv.X * Fd.partitioningBBoxRatio / Fd.bbSize.x),
              Xd = Math.floor((Od - Wd.minimum.y * Fd.partitioningBBoxRatio) * Fd.subDiv.Y * Fd.partitioningBBoxRatio / Fd.bbSize.y),
              Kd = Math.floor((md - Wd.minimum.z * Fd.partitioningBBoxRatio) * Fd.subDiv.Z * Fd.partitioningBBoxRatio / Fd.bbSize.z);
            return Rd < 0 || Rd > Fd.subDiv.max || Xd < 0 || Xd > Fd.subDiv.max || Kd < 0 || Kd > Fd.subDiv.max ? null : Fd.facetPartitioning[Rd + Fd.subDiv.max * Xd + Fd.subDiv.max * Fd.subDiv.max * Kd]
          }
          getClosestFacetAtCoordinates(dd, Od, md, Wd) {
            let Fd = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              Xd = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
            const Kd = this.getWorldMatrix(),
              hd = Rd.h.Matrix[5];
            Kd.invertToRef(hd);
            const vd = Rd.h.Cq[8];
            Rd.j.TransformCoordinatesFromFloatsToRef(dd, Od, md, hd, vd);
            const Qd = this.getClosestFacetAtLocalCoordinates(vd.x, vd.y, vd.z, Wd, Fd, Xd);
            return Wd && Rd.j.TransformCoordinatesFromFloatsToRef(Wd.x, Wd.y, Wd.z, Kd, Wd), Qd
          }
          getClosestFacetAtLocalCoordinates(dd, Od, md, Wd) {
            let Fd, Rd, Xd, Kd, hd, vd, Qd, td, od = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              Nd = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
              qd = null;
            const Hd = this.getFacetLocalPositions(),
              yd = this.getFacetLocalNormals(),
              bd = this.getFacetsAtLocalCoordinates(dd, Od, md);
            if (!bd) return null;
            let Td, pd, Yd, gd, wd = Number.MAX_VALUE;
            for (let Ed = 0; Ed < bd.length; Ed++) pd = bd[Ed], Yd = yd[pd], gd = Hd[pd], Kd = (dd - gd.x) * Yd.x + (Od - gd.y) * Yd.y + (md - gd.z) * Yd.z, (!od || od && Nd && Kd >= 0 || od && !Nd && Kd <= 0) && (Kd = Yd.x * gd.x + Yd.y * gd.y + Yd.z * gd.z, hd = -(Yd.x * dd + Yd.y * Od + Yd.z * md - Kd) / (Yd.x * Yd.x + Yd.y * Yd.y + Yd.z * Yd.z), vd = dd + Yd.x * hd, Qd = Od + Yd.y * hd, td = md + Yd.z * hd, Fd = vd - dd, Rd = Qd - Od, Xd = td - md, Td = Fd * Fd + Rd * Rd + Xd * Xd, Td < wd && (wd = Td, qd = pd, Wd && (Wd.x = vd, Wd.y = Qd, Wd.z = td)));
            return qd
          }
          getFacetDataParameters() {
            return this._internalAbstractMeshDataInfo._facetData.facetParameters
          }
          disableFacetData() {
            const dd = this._internalAbstractMeshDataInfo._facetData;
            return dd.facetDataEnabled && (dd.facetDataEnabled = !1, dd.facetPositions = [], dd.facetNormals = [], dd.facetPartitioning = new Array, dd.facetParameters = {}, dd.depthSortedIndices = new Uint32Array(0)), this
          }
          updateIndices(dd, Od) {
            return this
          }
          createNormals(dd) {
            const Od = this.getVerticesData(Xd.j.PositionKind),
              md = this.jRd();
            let Wd;
            return Wd = this.isVerticesDataPresent(Xd.j.NormalKind) ? this.getVerticesData(Xd.j.NormalKind) : [], Kd.c.ComputeNormals(Od, md, Wd, {
              useRightHandedSystem: this.zV().useRightHandedSystem
            }), this.setVerticesData(Xd.j.NormalKind, Wd, dd), this
          }
          async optimizeIndicesAsync() {
            const dd = this.jRd();
            if (!dd) return this;
            const {
              OptimizeIndices: Od
            } = await md.e(670).then((() => md(54987)));
            return Od(dd), this.setIndices(dd, this.getTotalVertices()), this
          }
          alignWithNormal(dd, Od) {
            Od || (Od = gd.c.Y);
            const md = Rd.h.Cq[0],
              Wd = Rd.h.Cq[1];
            return Rd.j.CrossToRef(Od, dd, Wd), Rd.j.CrossToRef(dd, Wd, md), this.rotationQuaternion ? Rd.e.RotationQuaternionFromAxisToRef(md, dd, Wd, this.rotationQuaternion) : Rd.j.RotationFromAxisToRef(md, dd, Wd, this.rotation), this
          }
          _checkOcclusionQuery() {
            return !1
          }
          disableEdgesRendering() {
            throw (0, yd.m)("EdgesRenderer")
          }
          enableEdgesRendering(dd, Od, md) {
            throw (0, yd.m)("EdgesRenderer")
          }
          getConnectedParticleSystems() {
            return this._scene.kE.filter((dd => dd.emitter === this))
          }
        }, (() => {
          const md = "function" === typeof Symbol && Symbol.metadata ? Object.create(od[Symbol.metadata] ?? null) : void 0;
          Od = [Ed.j.filter((function() {
            return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0]) && !Array.isArray(arguments.length <= 3 ? void 0 : arguments[3]) && !Array.isArray(arguments.length <= 4 ? void 0 : arguments[4]) && !Array.isArray(arguments.length <= 5 ? void 0 : arguments[5]) && !Array.isArray(arguments.length <= 6 ? void 0 : arguments[6])
          }))], (0, Wd.h)(dd, null, Od, {
            kind: "method",
            name: "_ApplySkeleton",
            static: !0,
            private: !1,
            access: {
              has: dd => "_ApplySkeleton" in dd,
              get: dd => dd._ApplySkeleton
            },
            metadata: md
          }, null, Nd), md && Object.defineProperty(dd, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: md
          })
        })(), dd.OCCLUSION_TYPE_NONE = ((0, Wd.k)(dd, Nd), 0), dd.OCCLUSION_TYPE_OPTIMISTIC = 1, dd.OCCLUSION_TYPE_STRICT = 2, dd.OCCLUSION_ALGORITHM_TYPE_ACCURATE = 0, dd.OCCLUSION_ALGORITHM_TYPE_CONSERVATIVE = 1, dd.CULLINGSTRATEGY_STANDARD = 0, dd.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY = 1, dd.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION = 2, dd.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION_THEN_BSPHERE_ONLY = 3, dd.DefaultIsPickable = !0, dd
      })(),
      Ad = !1;

    function rd() {
      Ad || (Ad = !0, (0, Ud.e)("BABYLON.AbstractMesh", Vd))
    }(Nd = Vd.prototype).createOrUpdateSubmeshesOctree ?? (Nd.createOrUpdateSubmeshesOctree = (0, yd.i)("AbstractMesh", "createOrUpdateSubmeshesOctree")), (qd = Vd.prototype).getPhysicsImpostor ?? (qd.getPhysicsImpostor = (0, yd.i)("AbstractMesh", "getPhysicsImpostor")), (Hd = Vd.prototype).setPhysicsLinkWith ?? (Hd.setPhysicsLinkWith = (0, yd.i)("AbstractMesh", "setPhysicsLinkWith")), Object.getOwnPropertyDescriptor(Vd.prototype, "occlusionRetryCount") || Object.defineProperty(Vd.prototype, "occlusionRetryCount", (0, yd.g)("AbstractMesh", "occlusionRetryCount")), Object.getOwnPropertyDescriptor(Vd.prototype, "occlusionType") || Object.defineProperty(Vd.prototype, "occlusionType", (0, yd.g)("AbstractMesh", "occlusionType")), Object.getOwnPropertyDescriptor(Vd.prototype, "occlusionQueryAlgorithmType") || Object.defineProperty(Vd.prototype, "occlusionQueryAlgorithmType", (0, yd.g)("AbstractMesh", "occlusionQueryAlgorithmType")), Object.getOwnPropertyDescriptor(Vd.prototype, "isOccluded") || Object.defineProperty(Vd.prototype, "isOccluded", (0, yd.g)("AbstractMesh", "isOccluded")), Object.getOwnPropertyDescriptor(Vd.prototype, "isOcclusionQueryInProgress") || Object.defineProperty(Vd.prototype, "isOcclusionQueryInProgress", (0, yd.g)("AbstractMesh", "isOcclusionQueryInProgress")), Object.getOwnPropertyDescriptor(Vd.prototype, "forceRenderingWhenOccluded") || Object.defineProperty(Vd.prototype, "forceRenderingWhenOccluded", (0, yd.g)("AbstractMesh", "forceRenderingWhenOccluded")), Object.getOwnPropertyDescriptor(Vd.prototype, "occlusionForRenderPassId") || Object.defineProperty(Vd.prototype, "occlusionForRenderPassId", (0, yd.g)("AbstractMesh", "occlusionForRenderPassId")), Object.getOwnPropertyDescriptor(Vd.prototype, "decalMap") || Object.defineProperty(Vd.prototype, "decalMap", (0, yd.g)("AbstractMesh", "decalMap")), Object.getOwnPropertyDescriptor(Vd.prototype, "xG") || Object.defineProperty(Vd.prototype, "xG", (0, yd.g)("AbstractMesh", "xG")), Object.getOwnPropertyDescriptor(Vd.prototype, "physicsImpostor") || Object.defineProperty(Vd.prototype, "physicsImpostor", (0, yd.g)("AbstractMesh", "physicsImpostor")), Object.getOwnPropertyDescriptor(Vd.prototype, "showBoundingBox") || Object.defineProperty(Vd.prototype, "showBoundingBox", (0, yd.g)("AbstractMesh", "showBoundingBox")), Object.getOwnPropertyDescriptor(Vd.prototype, "edgesRenderer") || Object.defineProperty(Vd.prototype, "edgesRenderer", (0, yd.g)("AbstractMesh", "edgesRenderer")), Object.getOwnPropertyDescriptor(Vd.prototype, "renderOutline") || Object.defineProperty(Vd.prototype, "renderOutline", (0, yd.g)("AbstractMesh", "renderOutline")), Object.getOwnPropertyDescriptor(Vd.prototype, "renderOverlay") || Object.defineProperty(Vd.prototype, "renderOverlay", (0, yd.g)("AbstractMesh", "renderOverlay"))
  },
  42344: (dd, Od, md) => {
    md.d(Od, {
      c: () => bd
    });
    var Wd = md(38636),
      Fd = md(38741),
      Rd = md(42339),
      Xd = md(42075),
      Kd = md(42217),
      hd = md(42349),
      vd = md(42225),
      Qd = md(42029),
      td = md(40262),
      od = md(41952),
      Nd = md(42233),
      qd = md(38651),
      Hd = md(42358),
      yd = md(41991);
    class bd {
      get boundingBias() {
        return this._boundingBias
      }
      set boundingBias(dd) {
        this._boundingBias ? this._boundingBias.Bx(dd) : this._boundingBias = dd.clone(), this._updateBoundingInfo(!0, null)
      }
      static CreateGeometryForMesh(dd) {
        const Od = new bd(bd.RandomId(), dd.zV());
        return Od.applyToMesh(dd), Od
      }
      get meshes() {
        return this._meshes
      }
      constructor(dd, Od, md) {
        let Fd = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          Rd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          Xd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        this.delayLoadState = 0, this._totalVertices = 0, this._isDisposed = !1, this._extend = {
          minimum: new Wd.j(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE),
          maximum: new Wd.j(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE)
        }, this._indexBufferIsUpdatable = !1, this._positionsCache = [], this._parentContainer = null, this.useBoundingInfoFromGeometry = !1, this._scene = Od || qd.e.LastCreatedScene, this._scene && (this.id = dd, this.uniqueId = this._scene.getUniqueId(), this._engine = this._scene.Iq(), this._meshes = [], this._vertexBuffers = {}, this._indices = [], this._updatable = Fd, null !== Xd && (this._totalVertices = Xd), md ? this.setAllVerticesData(md, Fd) : null === Xd && (this._totalVertices = 0), this._engine.getCaps().vertexArrayObject && (this._vertexArrayObjects = {}), Rd && (this.applyToMesh(Rd), Rd.computeWorldMatrix(!0)))
      }
      get extend() {
        return this._extend
      }
      zV() {
        return this._scene
      }
      Iq() {
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
        for (const Od in this._vertexBuffers) dd.add(this._vertexBuffers[Od].getWrapperBuffer());
        dd.forEach((dd => {
          dd._rebuild()
        }))
      }
      setAllVerticesData(dd, Od) {
        dd.applyToGeometry(this, Od), this._notifyUpdate()
      }
      setVerticesData(dd, Od) {
        let md = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Wd = arguments.length > 3 ? arguments[3] : void 0;
        md && Array.isArray(Od) && (Od = new Float32Array(Od));
        const Fd = new Xd.j(this._engine, Od, dd, {
          updatable: md,
          postponeInternalCreation: 0 === this._meshes.length,
          stride: Wd,
          label: "Geometry_" + this.id + "_" + dd
        });
        this.setVerticesBuffer(Fd)
      }
      removeVerticesData(dd) {
        this._vertexBuffers[dd] && (this._vertexBuffers[dd].dispose(), delete this._vertexBuffers[dd]), this._vertexArrayObjects && this._disposeVertexArrayObjects()
      }
      setVerticesBuffer(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          md = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        const Fd = dd.getKind();
        this._vertexBuffers[Fd] && md && this._vertexBuffers[Fd].dispose(), dd._buffer && dd._ownsBuffer && dd._buffer._increaseReferences(), this._vertexBuffers[Fd] = dd;
        const Rd = this._meshes,
          Kd = Rd.length;
        if (Fd === Xd.j.PositionKind) {
          this._totalVertices = Od ?? dd._maxVerticesCount, this._updateExtend(this.useBoundingInfoFromGeometry && this._boundingInfo ? null : dd.getFloatData(this._totalVertices)), this._resetPointsArrayCache();
          const md = this._extend && this._extend.minimum || new Wd.j(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE),
            Fd = this._extend && this._extend.maximum || new Wd.j(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
          for (let dd = 0; dd < Kd; dd++) {
            const Od = Rd[dd];
            Od.buildBoundingInfo(md, Fd), Od._createGlobalSubMesh(Od.isUnIndexed), Od.computeWorldMatrix(!0), Od.synchronizeInstances()
          }
        }
        this._notifyUpdate(Fd)
      }
      updateVerticesDataDirectly(dd, Od, md) {
        let Wd = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const Fd = this.getVertexBuffer(dd);
        Fd && (Fd.updateDirectly(Od, md, Wd), this._notifyUpdate(dd))
      }
      updateVerticesData(dd, Od) {
        let md = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Wd = this.getVertexBuffer(dd);
        Wd && (Wd.update(Od), dd === Xd.j.PositionKind && this._updateBoundingInfo(md, Od), this._notifyUpdate(dd))
      }
      _updateBoundingInfo(dd, Od) {
        if (dd && this._updateExtend(Od), this._resetPointsArrayCache(), dd) {
          const dd = this._meshes;
          for (const Od of dd) {
            Od.hasBoundingInfo ? Od.iG().reConstruct(this._extend.minimum, this._extend.maximum) : Od.buildBoundingInfo(this._extend.minimum, this._extend.maximum);
            const dd = Od.ZE;
            for (const Od of dd) Od.refreshBoundingInfo()
          }
        }
      }
      _bind(dd, Od, md, Wd) {
        if (!dd) return;
        void 0 === Od && (Od = this._indexBuffer);
        const Fd = this.getVertexBuffers();
        if (!Fd) return;
        if (Od != this._indexBuffer || !this._vertexArrayObjects && !Wd) return void this._engine.bindBuffers(Fd, Od, dd, md);
        const Rd = Wd || this._vertexArrayObjects,
          Xd = this._engine;
        Rd[dd.key] || (Rd[dd.key] = Xd.recordVertexArrayObject(Fd, Od, dd, md)), Xd.bindVertexArrayObject(Rd[dd.key], Od)
      }
      getTotalVertices() {
        return this.isReady() ? this._totalVertices : 0
      }
      getVerticesData(dd, Od, md) {
        const Wd = this.getVertexBuffer(dd);
        return Wd ? Wd.getFloatData(this._totalVertices, md || Od && 1 !== this._meshes.length) : null
      }
      copyVerticesData(dd, Od) {
        const md = this.getVertexBuffer(dd);
        if (!md) return;
        Od[dd] || (Od[dd] = new Float32Array(this._totalVertices * md.getSize()));
        const Wd = md.getData();
        Wd && (0, yd.f)(Wd, md.getSize(), md.type, md.byteOffset, md.byteStride, md.normalized, this._totalVertices, Od[dd])
      }
      isVertexBufferUpdatable(dd) {
        const Od = this._vertexBuffers[dd];
        return !!Od && Od.isUpdatable()
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
        let Od;
        if (!this._vertexBuffers && this._delayInfo)
          for (Od in this._delayInfo) dd.push(Od);
        else
          for (Od in this._vertexBuffers) dd.push(Od);
        return dd
      }
      updateIndices(dd, Od) {
        let md = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this._indexBuffer)
          if (this._indexBufferIsUpdatable) {
            const Wd = dd.length !== this._indices.length;
            if (md || (this._indices = dd.slice()), this._engine.updateDynamicIndexBuffer(this._indexBuffer, dd, Od), Wd)
              for (const dd of this._meshes) dd._createGlobalSubMesh(!0)
          } else this.setIndices(dd, null, !0)
      }
      setIndexBuffer(dd, Od, md) {
        let Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._indices = [], this._indexBufferIsUpdatable = !1, this._indexBuffer = dd, this._totalVertices = Od, this._totalIndices = md, dd.is32Bits = null === Wd ? Od > 65535 : Wd;
        for (const Fd of this._meshes) Fd._createGlobalSubMesh(!0), Fd.synchronizeInstances();
        this._notifyUpdate()
      }
      setIndices(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          md = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Wd = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this._indexBuffer && this._engine._releaseBuffer(this._indexBuffer), this._indices = dd, this._indexBufferIsUpdatable = md, 0 !== this._meshes.length && this._indices && (this._indexBuffer = this._engine.createIndexBuffer(this._indices, md, "Geometry_" + this.id + "_IndexBuffer")), void 0 != Od && (this._totalVertices = Od);
        for (const Fd of this._meshes) Fd._createGlobalSubMesh(!Wd), Fd.synchronizeInstances();
        this._notifyUpdate()
      }
      getTotalIndices() {
        return this.isReady() ? void 0 !== this._totalIndices ? this._totalIndices : this._indices.length : 0
      }
      jRd(dd, Od) {
        if (!this.isReady()) return null;
        const md = this._indices;
        return Od || dd && 1 !== this._meshes.length ? md.slice() : md
      }
      getIndexBuffer() {
        return this.isReady() ? this._indexBuffer : null
      }
      _releaseVertexArrayObject() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        dd && this._vertexArrayObjects && this._vertexArrayObjects[dd.key] && (this._engine.releaseVertexArrayObject(this._vertexArrayObjects[dd.key]), delete this._vertexArrayObjects[dd.key])
      }
      releaseForMesh(dd, Od) {
        const md = this._meshes,
          Wd = md.indexOf(dd); - 1 !== Wd && (md.splice(Wd, 1), this._vertexArrayObjects && dd._invalidateInstanceVertexArrayObject(), dd._geometry = null, 0 === md.length && Od && this.dispose())
      }
      applyToMesh(dd) {
        if (dd._geometry === this) return;
        const Od = dd._geometry;
        Od && Od.releaseForMesh(dd), this._vertexArrayObjects && dd._invalidateInstanceVertexArrayObject();
        const md = this._meshes;
        dd._geometry = this, dd._internalAbstractMeshDataInfo._positions = null, this._scene.pushGeometry(this), md.push(dd), this.isReady() ? this._applyToMesh(dd) : this._boundingInfo && dd.setBoundingInfo(this._boundingInfo)
      }
      _updateExtend() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (this.useBoundingInfoFromGeometry && this._boundingInfo) this._extend = {
          minimum: this._boundingInfo.minimum.clone(),
          maximum: this._boundingInfo.maximum.clone()
        };
        else {
          if (!dd && (dd = this.getVerticesData(Xd.j.PositionKind), !dd)) return;
          this._extend = (0, Nd.h)(dd, 0, this._totalVertices, this.boundingBias, 3)
        }
      }
      _applyToMesh(dd) {
        for (const Od in this._vertexBuffers) {
          const md = this._vertexBuffers[Od];
          md._buffer.getBuffer() || md.create(), Od === Xd.j.PositionKind && (this._extend || this._updateExtend(), dd.buildBoundingInfo(this._extend.minimum, this._extend.maximum), dd._createGlobalSubMesh(dd.isUnIndexed), dd._updateBoundingInfo())
        }!this._indexBuffer && this._indices && this._indices.length > 0 && (this._indexBuffer = this._engine.createIndexBuffer(this._indices, this._updatable, "Geometry_" + this.id + "_IndexBuffer")), dd._syncGeometryWithMorphTargetManager(), dd.synchronizeInstances()
      }
      _notifyUpdate(dd) {
        this.onGeometryUpdated && this.onGeometryUpdated(this, dd), this._vertexArrayObjects && this._disposeVertexArrayObjects();
        for (const Od of this._meshes) Od._markSubMeshesAsAttributesDirty()
      }
      load(dd, Od) {
        2 !== this.delayLoadState && (this.isReady() ? Od && Od() : (this.delayLoadState = 2, this._queueLoad(dd, Od)))
      }
      _queueLoad(dd, Od) {
        this.delayLoadingFile && (dd.addPendingData(this), (async () => {
          try {
            const md = await dd._loadDelayedFileAsync(this.delayLoadingFile, !1, !0);
            if (!this._delayLoadingFunction) return void dd.removePendingData(this);
            this._delayLoadingFunction(JSON.parse(md), this), this.delayLoadState = 1, this._delayInfo = [], dd.removePendingData(this);
            const Wd = this._meshes,
              Fd = Wd.length;
            for (let dd = 0; dd < Fd; dd++) this._applyToMesh(Wd[dd]);
            Od && Od()
          } catch (md) {
            dd.removePendingData(this), dd.yJ || td.c.Error(`Unable to delay load geometry "${this.id}" from "${this.delayLoadingFile}": ${md}`)
          }
        })())
      }
      toLeftHanded() {
        const dd = this.jRd(!1);
        if (null != dd && dd.length > 0) {
          for (let Od = 0; Od < dd.length; Od += 3) {
            const md = dd[Od + 0];
            dd[Od + 0] = dd[Od + 2], dd[Od + 2] = md
          }
          this.setIndices(dd)
        }
        const Od = this.getVerticesData(Xd.j.PositionKind, !1);
        if (null != Od && Od.length > 0) {
          for (let dd = 0; dd < Od.length; dd += 3) Od[dd + 2] = -Od[dd + 2];
          this.setVerticesData(Xd.j.PositionKind, Od, !1)
        }
        const md = this.getVerticesData(Xd.j.NormalKind, !1);
        if (null != md && md.length > 0) {
          for (let dd = 0; dd < md.length; dd += 3) md[dd + 2] = -md[dd + 2];
          this.setVerticesData(Xd.j.NormalKind, md, !1)
        }
      }
      _resetPointsArrayCache() {
        this._positions = null
      }
      _generatePointsArray() {
        if (this._positions) return !0;
        const dd = this.getVerticesData(Xd.j.PositionKind);
        if (!dd || 0 === dd.length) return !1;
        for (let Od = 3 * this._positionsCache.length, md = this._positionsCache.length; Od < dd.length; Od += 3, ++md) this._positionsCache[md] = Wd.j.FromArray(dd, Od);
        for (let Od = 0, md = 0; Od < dd.length; Od += 3, ++md) this._positionsCache[md].set(dd[0 + Od], dd[1 + Od], dd[2 + Od]);
        return this._positionsCache.length = dd.length / 3, this._positions = this._positionsCache, !0
      }
      yJ() {
        return this._isDisposed
      }
      _disposeVertexArrayObjects() {
        if (this._vertexArrayObjects) {
          for (const md in this._vertexArrayObjects) this._engine.releaseVertexArrayObject(this._vertexArrayObjects[md]);
          this._vertexArrayObjects = {};
          const dd = this._meshes,
            Od = dd.length;
          for (let md = 0; md < Od; md++) dd[md]._invalidateInstanceVertexArrayObject()
        }
      }
      dispose() {
        const dd = this._meshes,
          Od = dd.length;
        let md;
        for (md = 0; md < Od; md++) this.releaseForMesh(dd[md]);
        this._meshes.length = 0, this._disposeVertexArrayObjects();
        for (const Wd in this._vertexBuffers) this._vertexBuffers[Wd].dispose();
        if (this._vertexBuffers = {}, this._totalVertices = 0, this._indexBuffer && this._engine._releaseBuffer(this._indexBuffer), this._indexBuffer = null, this._indices = [], this.delayLoadState = 0, this.delayLoadingFile = null, this._delayLoadingFunction = null, this._delayInfo = [], this._boundingInfo = null, this._scene.removeGeometry(this), this._parentContainer) {
          const dd = this._parentContainer.geometries.indexOf(this);
          dd > -1 && this._parentContainer.geometries.splice(dd, 1), this._parentContainer = null
        }
        this._isDisposed = !0
      }
      copy(dd) {
        const Od = new bd(dd, this._scene),
          md = this.jRd(void 0, !0);
        md && Od.setIndices(md);
        let Wd, Fd = !1;
        for (Wd in this._vertexBuffers) {
          const dd = this.getVertexBuffer(Wd),
            md = dd.getData();
          if (!md) continue;
          const Rd = dd.isUpdatable(),
            Kd = dd.getSize(),
            {
              type: hd,
              byteOffset: vd,
              byteStride: Qd,
              normalized: td
            } = dd;
          Fd = Fd || Rd;
          let od = this._totalVertices;
          if (dd.getIsInstanced()) {
            let dd;
            dd = md instanceof Array ? 4 * md.length : md.byteLength, od = dd / Qd
          }
          const Nd = (0, yd.q)(md, Kd, hd, vd, Qd, od, !0),
            qd = new Xd.j(this._engine, Nd, Wd, {
              updatable: Rd,
              useBytes: !1,
              stride: Kd,
              size: Kd,
              offset: 0,
              type: hd,
              normalized: td,
              takeBufferOwnership: !0,
              instanced: dd.getIsInstanced()
            });
          Od.setVerticesBuffer(qd, od)
        }
        for (Wd in Od._updatable = Fd, Od.delayLoadState = this.delayLoadState, Od.delayLoadingFile = this.delayLoadingFile, Od._delayLoadingFunction = this._delayLoadingFunction, this._delayInfo) Od._delayInfo = Od._delayInfo || [], Od._delayInfo.push(Wd);
        return Od._boundingInfo = new vd.c(this._extend.minimum, this._extend.maximum), Od
      }
      serialize() {
        const dd = {};
        return dd.id = this.id, dd.uniqueId = this.uniqueId, dd.updatable = this._updatable, od.c && od.c.HasTags(this) && (dd.tags = od.c.GetTags(this)), dd
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
        return this.isVerticesDataPresent(Xd.j.PositionKind) && (dd.positions = this._toNumberArray(this.getVerticesData(Xd.j.PositionKind)), this.isVertexBufferUpdatable(Xd.j.PositionKind) && (dd.positionsUpdatable = !0)), this.isVerticesDataPresent(Xd.j.NormalKind) && (dd.normals = this._toNumberArray(this.getVerticesData(Xd.j.NormalKind)), this.isVertexBufferUpdatable(Xd.j.NormalKind) && (dd.normalsUpdatable = !0)), this.isVerticesDataPresent(Xd.j.TangentKind) && (dd.tangents = this._toNumberArray(this.getVerticesData(Xd.j.TangentKind)), this.isVertexBufferUpdatable(Xd.j.TangentKind) && (dd.tangentsUpdatable = !0)), this.isVerticesDataPresent(Xd.j.UVKind) && (dd.uvs = this._toNumberArray(this.getVerticesData(Xd.j.UVKind)), this.isVertexBufferUpdatable(Xd.j.UVKind) && (dd.uvsUpdatable = !0)), this.isVerticesDataPresent(Xd.j.UV2Kind) && (dd.uvs2 = this._toNumberArray(this.getVerticesData(Xd.j.UV2Kind)), this.isVertexBufferUpdatable(Xd.j.UV2Kind) && (dd.uvs2Updatable = !0)), this.isVerticesDataPresent(Xd.j.UV3Kind) && (dd.uvs3 = this._toNumberArray(this.getVerticesData(Xd.j.UV3Kind)), this.isVertexBufferUpdatable(Xd.j.UV3Kind) && (dd.uvs3Updatable = !0)), this.isVerticesDataPresent(Xd.j.UV4Kind) && (dd.uvs4 = this._toNumberArray(this.getVerticesData(Xd.j.UV4Kind)), this.isVertexBufferUpdatable(Xd.j.UV4Kind) && (dd.uvs4Updatable = !0)), this.isVerticesDataPresent(Xd.j.UV5Kind) && (dd.uvs5 = this._toNumberArray(this.getVerticesData(Xd.j.UV5Kind)), this.isVertexBufferUpdatable(Xd.j.UV5Kind) && (dd.uvs5Updatable = !0)), this.isVerticesDataPresent(Xd.j.UV6Kind) && (dd.uvs6 = this._toNumberArray(this.getVerticesData(Xd.j.UV6Kind)), this.isVertexBufferUpdatable(Xd.j.UV6Kind) && (dd.uvs6Updatable = !0)), this.isVerticesDataPresent(Xd.j.ColorKind) && (dd.colors = this._toNumberArray(this.getVerticesData(Xd.j.ColorKind)), this.isVertexBufferUpdatable(Xd.j.ColorKind) && (dd.colorsUpdatable = !0)), this.isVerticesDataPresent(Xd.j.MatricesIndicesKind) && (dd.matricesIndices = this._toNumberArray(this.getVerticesData(Xd.j.MatricesIndicesKind)), dd.matricesIndicesExpanded = !0, this.isVertexBufferUpdatable(Xd.j.MatricesIndicesKind) && (dd.matricesIndicesUpdatable = !0)), this.isVerticesDataPresent(Xd.j.MatricesWeightsKind) && (dd.matricesWeights = this._toNumberArray(this.getVerticesData(Xd.j.MatricesWeightsKind)), this.isVertexBufferUpdatable(Xd.j.MatricesWeightsKind) && (dd.matricesWeightsUpdatable = !0)), dd.indices = this._toNumberArray(this.jRd()), dd
      }
      static ExtractFromMesh(dd, Od) {
        const md = dd._geometry;
        return md ? md.copy(Od) : null
      }
      static RandomId() {
        return Qd.g.RandomId()
      }
      static _GetGeometryByLoadedUniqueId(dd, Od) {
        for (let md = 0; md < Od.geometries.length; md++)
          if (Od.geometries[md]._loadedUniqueId === dd) return Od.geometries[md];
        return null
      }
      static _ImportGeometry(dd, Od) {
        const md = Od.zV(),
          Wd = dd.geometryUniqueId,
          Rd = dd.geometryId;
        if (Wd || Rd) {
          const dd = Wd ? this._GetGeometryByLoadedUniqueId(Wd, md) : md.getGeometryById(Rd);
          dd && dd.applyToMesh(Od)
        } else if (dd instanceof ArrayBuffer) {
          const md = Od._binaryInfo;
          if (md.positionsAttrDesc && md.positionsAttrDesc.count > 0) {
            const Wd = new Float32Array(dd, md.positionsAttrDesc.offset, md.positionsAttrDesc.count);
            Od.setVerticesData(Xd.j.PositionKind, Wd, !1)
          }
          if (md.normalsAttrDesc && md.normalsAttrDesc.count > 0) {
            const Wd = new Float32Array(dd, md.normalsAttrDesc.offset, md.normalsAttrDesc.count);
            Od.setVerticesData(Xd.j.NormalKind, Wd, !1)
          }
          if (md.tangetsAttrDesc && md.tangetsAttrDesc.count > 0) {
            const Wd = new Float32Array(dd, md.tangetsAttrDesc.offset, md.tangetsAttrDesc.count);
            Od.setVerticesData(Xd.j.TangentKind, Wd, !1)
          }
          if (md.uvsAttrDesc && md.uvsAttrDesc.count > 0) {
            const Wd = new Float32Array(dd, md.uvsAttrDesc.offset, md.uvsAttrDesc.count);
            if (Hd.e)
              for (let dd = 1; dd < Wd.length; dd += 2) Wd[dd] = 1 - Wd[dd];
            Od.setVerticesData(Xd.j.UVKind, Wd, !1)
          }
          if (md.uvs2AttrDesc && md.uvs2AttrDesc.count > 0) {
            const Wd = new Float32Array(dd, md.uvs2AttrDesc.offset, md.uvs2AttrDesc.count);
            if (Hd.e)
              for (let dd = 1; dd < Wd.length; dd += 2) Wd[dd] = 1 - Wd[dd];
            Od.setVerticesData(Xd.j.UV2Kind, Wd, !1)
          }
          if (md.uvs3AttrDesc && md.uvs3AttrDesc.count > 0) {
            const Wd = new Float32Array(dd, md.uvs3AttrDesc.offset, md.uvs3AttrDesc.count);
            if (Hd.e)
              for (let dd = 1; dd < Wd.length; dd += 2) Wd[dd] = 1 - Wd[dd];
            Od.setVerticesData(Xd.j.UV3Kind, Wd, !1)
          }
          if (md.uvs4AttrDesc && md.uvs4AttrDesc.count > 0) {
            const Wd = new Float32Array(dd, md.uvs4AttrDesc.offset, md.uvs4AttrDesc.count);
            if (Hd.e)
              for (let dd = 1; dd < Wd.length; dd += 2) Wd[dd] = 1 - Wd[dd];
            Od.setVerticesData(Xd.j.UV4Kind, Wd, !1)
          }
          if (md.uvs5AttrDesc && md.uvs5AttrDesc.count > 0) {
            const Wd = new Float32Array(dd, md.uvs5AttrDesc.offset, md.uvs5AttrDesc.count);
            if (Hd.e)
              for (let dd = 1; dd < Wd.length; dd += 2) Wd[dd] = 1 - Wd[dd];
            Od.setVerticesData(Xd.j.UV5Kind, Wd, !1)
          }
          if (md.uvs6AttrDesc && md.uvs6AttrDesc.count > 0) {
            const Wd = new Float32Array(dd, md.uvs6AttrDesc.offset, md.uvs6AttrDesc.count);
            if (Hd.e)
              for (let dd = 1; dd < Wd.length; dd += 2) Wd[dd] = 1 - Wd[dd];
            Od.setVerticesData(Xd.j.UV6Kind, Wd, !1)
          }
          if (md.colorsAttrDesc && md.colorsAttrDesc.count > 0) {
            const Wd = new Float32Array(dd, md.colorsAttrDesc.offset, md.colorsAttrDesc.count);
            Od.setVerticesData(Xd.j.ColorKind, Wd, !1, md.colorsAttrDesc.stride)
          }
          if (md.matricesIndicesAttrDesc && md.matricesIndicesAttrDesc.count > 0) {
            const Wd = new Int32Array(dd, md.matricesIndicesAttrDesc.offset, md.matricesIndicesAttrDesc.count),
              Fd = [];
            for (let dd = 0; dd < Wd.length; dd++) {
              const Od = Wd[dd];
              Fd.push(255 & Od), Fd.push((65280 & Od) >> 8), Fd.push((16711680 & Od) >> 16), Fd.push(Od >> 24 & 255)
            }
            Od.setVerticesData(Xd.j.MatricesIndicesKind, Fd, !1)
          }
          if (md.matricesIndicesExtraAttrDesc && md.matricesIndicesExtraAttrDesc.count > 0) {
            const Wd = new Int32Array(dd, md.matricesIndicesExtraAttrDesc.offset, md.matricesIndicesExtraAttrDesc.count),
              Fd = [];
            for (let dd = 0; dd < Wd.length; dd++) {
              const Od = Wd[dd];
              Fd.push(255 & Od), Fd.push((65280 & Od) >> 8), Fd.push((16711680 & Od) >> 16), Fd.push(Od >> 24 & 255)
            }
            Od.setVerticesData(Xd.j.MatricesIndicesExtraKind, Fd, !1)
          }
          if (md.matricesWeightsAttrDesc && md.matricesWeightsAttrDesc.count > 0) {
            const Wd = new Float32Array(dd, md.matricesWeightsAttrDesc.offset, md.matricesWeightsAttrDesc.count);
            Od.setVerticesData(Xd.j.MatricesWeightsKind, Wd, !1)
          }
          if (md.indicesAttrDesc && md.indicesAttrDesc.count > 0) {
            const Wd = new Int32Array(dd, md.indicesAttrDesc.offset, md.indicesAttrDesc.count);
            Od.setIndices(Wd, null)
          }
          if (md.subMeshesAttrDesc && md.subMeshesAttrDesc.count > 0) {
            const Wd = new Int32Array(dd, md.subMeshesAttrDesc.offset, 5 * md.subMeshesAttrDesc.count);
            Od.ZE = [];
            for (let dd = 0; dd < md.subMeshesAttrDesc.count; dd++) {
              const md = Wd[5 * dd + 0],
                Fd = Wd[5 * dd + 1],
                Rd = Wd[5 * dd + 2],
                Xd = Wd[5 * dd + 3],
                hd = Wd[5 * dd + 4];
              Kd.d.AddToMesh(md, Fd, Rd, Xd, hd, Od)
            }
          }
        } else if (dd.positions && dd.normals && dd.indices) {
          if (Od.setVerticesData(Xd.j.PositionKind, dd.positions, dd.positions._updatable || dd.positionsUpdatable), Od.setVerticesData(Xd.j.NormalKind, dd.normals, dd.normals._updatable || dd.normalsUpdatable), dd.tangents && Od.setVerticesData(Xd.j.TangentKind, dd.tangents, dd.tangents._updatable || dd.tangentsUpdatable), dd.uvs && Od.setVerticesData(Xd.j.UVKind, dd.uvs, dd.uvs._updatable || dd.uvsUpdatable), dd.uvs2 && Od.setVerticesData(Xd.j.UV2Kind, dd.uvs2, dd.uvs2._updatable || dd.uvs2Updatable), dd.uvs3 && Od.setVerticesData(Xd.j.UV3Kind, dd.uvs3, dd.uvs3._updatable || dd.uvs3Updatable), dd.uvs4 && Od.setVerticesData(Xd.j.UV4Kind, dd.uvs4, dd.uvs4._updatable || dd.uvs4Updatable), dd.uvs5 && Od.setVerticesData(Xd.j.UV5Kind, dd.uvs5, dd.uvs5._updatable || dd.uvs5Updatable), dd.uvs6 && Od.setVerticesData(Xd.j.UV6Kind, dd.uvs6, dd.uvs6._updatable || dd.uvs6Updatable), dd.colors && Od.setVerticesData(Xd.j.ColorKind, Fd.f.CheckColors4(dd.colors, dd.positions.length / 3), dd.colors._updatable), dd.matricesIndices)
            if (dd.matricesIndices._isExpanded || dd.matricesIndicesExpanded) delete dd.matricesIndices._isExpanded, delete dd.matricesIndicesExpanded, Od.setVerticesData(Xd.j.MatricesIndicesKind, dd.matricesIndices, dd.matricesIndices._updatable || dd.matricesIndicesUpdatable);
            else {
              const md = [];
              for (let Od = 0; Od < dd.matricesIndices.length; Od++) {
                const Wd = dd.matricesIndices[Od];
                md.push(255 & Wd), md.push((65280 & Wd) >> 8), md.push((16711680 & Wd) >> 16), md.push(Wd >> 24 & 255)
              }
              Od.setVerticesData(Xd.j.MatricesIndicesKind, md, dd.matricesIndices._updatable || dd.matricesIndicesUpdatable)
            } if (dd.matricesIndicesExtra)
            if (dd.matricesIndicesExtraExpanded || dd.matricesIndicesExtra._isExpanded) delete dd.matricesIndices._isExpanded, delete dd.matricesIndicesExtraExpanded, Od.setVerticesData(Xd.j.MatricesIndicesExtraKind, dd.matricesIndicesExtra, dd.matricesIndicesExtra._updatable || dd.matricesIndicesExtraUpdatable);
            else {
              const md = [];
              for (let Od = 0; Od < dd.matricesIndicesExtra.length; Od++) {
                const Wd = dd.matricesIndicesExtra[Od];
                md.push(255 & Wd), md.push((65280 & Wd) >> 8), md.push((16711680 & Wd) >> 16), md.push(Wd >> 24 & 255)
              }
              Od.setVerticesData(Xd.j.MatricesIndicesExtraKind, md, dd.matricesIndicesExtra._updatable || dd.matricesIndicesExtraUpdatable)
            } dd.matricesWeights && (bd._CleanMatricesWeights(dd, Od), Od.setVerticesData(Xd.j.MatricesWeightsKind, dd.matricesWeights, dd.matricesWeights._updatable)), dd.matricesWeightsExtra && Od.setVerticesData(Xd.j.MatricesWeightsExtraKind, dd.matricesWeightsExtra, dd.matricesWeights._updatable), Od.setIndices(dd.indices, null)
        }
        if (dd.ZE) {
          Od.ZE = [];
          for (let md = 0; md < dd.ZE.length; md++) {
            const Wd = dd.ZE[md];
            Kd.d.AddToMesh(Wd.materialIndex, Wd.verticesStart, Wd.verticesCount, Wd.indexStart, Wd.indexCount, Od)
          }
        }
        Od._shouldGenerateFlatShading && (Od.convertToFlatShadedMesh(), Od._shouldGenerateFlatShading = !1), Od.computeWorldMatrix(!0), md.onMeshImportedObservable.notifyObservers(Od)
      }
      static _CleanMatricesWeights(dd, Od) {
        const md = .001;
        if (!hd.e.CleanBoneMatrixWeights) return;
        let Wd;
        if (!(dd.skeletonId > -1)) return;
        {
          const md = Od.zV().getLastSkeletonById(dd.skeletonId);
          if (!md) return;
          Wd = md.bones.length
        }
        const Fd = Od.getVerticesData(Xd.j.MatricesIndicesKind),
          Rd = Od.getVerticesData(Xd.j.MatricesIndicesExtraKind),
          Kd = dd.matricesWeights,
          vd = dd.matricesWeightsExtra,
          Qd = dd.numBoneInfluencer,
          td = Kd.length;
        for (let Xd = 0; Xd < td; Xd += 4) {
          let dd = 0,
            Od = -1;
          for (let Wd = 0; Wd < 4; Wd++) {
            const Fd = Kd[Xd + Wd];
            dd += Fd, Fd < md && Od < 0 && (Od = Wd)
          }
          if (vd)
            for (let Wd = 0; Wd < 4; Wd++) {
              const Fd = vd[Xd + Wd];
              dd += Fd, Fd < md && Od < 0 && (Od = Wd + 4)
            }
          if ((Od < 0 || Od > Qd - 1) && (Od = Qd - 1), dd > md) {
            const Od = 1 / dd;
            for (let dd = 0; dd < 4; dd++) Kd[Xd + dd] *= Od;
            if (vd)
              for (let dd = 0; dd < 4; dd++) vd[Xd + dd] *= Od
          } else Od >= 4 ? (vd[Xd + Od - 4] = 1 - dd, Rd[Xd + Od - 4] = Wd) : (Kd[Xd + Od] = 1 - dd, Fd[Xd + Od] = Wd)
        }
        Od.setVerticesData(Xd.j.MatricesIndicesKind, Fd), dd.matricesWeightsExtra && Od.setVerticesData(Xd.j.MatricesIndicesExtraKind, Rd)
      }
      static Parse(dd, Od, md) {
        const Fd = new bd(dd.id, Od, void 0, dd.updatable);
        return Fd._loadedUniqueId = dd.uniqueId, od.c && od.c.AddTagsTo(Fd, dd.tags), dd.delayLoadingFile ? (Fd.delayLoadState = 4, Fd.delayLoadingFile = md + dd.delayLoadingFile, Fd._boundingInfo = new vd.c(Wd.j.FromArray(dd.boundingBoxMinimum), Wd.j.FromArray(dd.boundingBoxMaximum)), Fd._delayInfo = [], dd.hasUVs && Fd._delayInfo.push(Xd.j.UVKind), dd.hasUVs2 && Fd._delayInfo.push(Xd.j.UV2Kind), dd.hasUVs3 && Fd._delayInfo.push(Xd.j.UV3Kind), dd.hasUVs4 && Fd._delayInfo.push(Xd.j.UV4Kind), dd.hasUVs5 && Fd._delayInfo.push(Xd.j.UV5Kind), dd.hasUVs6 && Fd._delayInfo.push(Xd.j.UV6Kind), dd.hasColors && Fd._delayInfo.push(Xd.j.ColorKind), dd.hasMatricesIndices && Fd._delayInfo.push(Xd.j.MatricesIndicesKind), dd.hasMatricesWeights && Fd._delayInfo.push(Xd.j.MatricesWeightsKind), Fd._delayLoadingFunction = Rd.c.ImportVertexData) : Rd.c.ImportVertexData(dd, Fd), Od.pushGeometry(Fd, !0), Fd
      }
    }
  },
  42402: (dd, Od, md) => {
    md.d(Od, {
      c: () => td,
      e: () => qd
    });
    var Wd = md(38636),
      Fd = md(40262),
      Rd = md(42367),
      Xd = md(42330),
      Kd = md(40260),
      hd = md(42374),
      vd = md(42075),
      Qd = md(38669);
    class td extends Rd.b {
      constructor(dd, Od) {
        super(dd, Od.zV()), this._indexInSourceMeshInstanceArray = -1, this._distanceToCamera = 0, Od.jdd(this), this._sourceMesh = Od, this._unIndexed = Od._unIndexed, this.position.Bx(Od.position), this.rotation.Bx(Od.rotation), this.Tt.Bx(Od.Tt), Od.rotationQuaternion && (this.rotationQuaternion = Od.rotationQuaternion.clone()), this.animations = Od.animations.slice();
        for (const md of Od.getAnimationRanges()) null != md && this.createAnimationRange(md.name, md.from, md.to);
        if (this.infiniteDistance = Od.infiniteDistance, this.setPivotMatrix(Od.getPivotMatrix()), Od.skeleton || Od.morphTargetManager || !Od.hasBoundingInfo) this.refreshBoundingInfo(!0, !0);
        else {
          const dd = Od.iG();
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
        this._sourceMesh?.receiveShadows !== dd && Fd.c.Warn("Setting receiveShadows on an instanced mesh has no effect")
      }
      get material() {
        return this._sourceMesh.material
      }
      set material(dd) {
        this._sourceMesh?.material !== dd && Fd.c.Warn("Setting material on an instanced mesh has no effect")
      }
      get visibility() {
        return this._sourceMesh.visibility
      }
      set visibility(dd) {
        this._sourceMesh?.visibility !== dd && Fd.c.Warn("Setting visibility on an instanced mesh has no effect")
      }
      get skeleton() {
        return this._sourceMesh.skeleton
      }
      set skeleton(dd) {
        this._sourceMesh?.skeleton !== dd && Fd.c.Warn("Setting skeleton on an instanced mesh has no effect")
      }
      get renderingGroupId() {
        return this._sourceMesh.renderingGroupId
      }
      set renderingGroupId(dd) {
        this._sourceMesh && dd !== this._sourceMesh.renderingGroupId && Fd.c.Warn("Note - setting renderingGroupId of an instanced mesh has no effect on the scene")
      }
      get meshBlendingTag() {
        return this._sourceMesh.meshBlendingTag
      }
      set meshBlendingTag(dd) {
        this._sourceMesh && dd !== this._sourceMesh.meshBlendingTag && Fd.c.Warn("Setting meshBlendingTag on an instanced mesh has no effect")
      }
      getTotalVertices() {
        return this._sourceMesh ? this._sourceMesh.getTotalVertices() : 0
      }
      getTotalIndices() {
        return this._sourceMesh.getTotalIndices()
      }
      get ZRd() {
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
      getVerticesData(dd, Od, md) {
        return this._sourceMesh.getVerticesData(dd, Od, md)
      }
      copyVerticesData(dd, Od) {
        this._sourceMesh.copyVerticesData(dd, Od)
      }
      getVertexBuffer(dd, Od) {
        return this._sourceMesh.getVertexBuffer(dd, Od)
      }
      setVerticesData(dd, Od, md, Wd) {
        return this.ZRd && this.ZRd.setVerticesData(dd, Od, md, Wd), this.ZRd
      }
      updateVerticesData(dd, Od, md, Wd) {
        return this.ZRd && this.ZRd.updateVerticesData(dd, Od, md, Wd), this.ZRd
      }
      setIndices(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return this.ZRd && this.ZRd.setIndices(dd, Od), this.ZRd
      }
      isVerticesDataPresent(dd) {
        return this._sourceMesh.isVerticesDataPresent(dd)
      }
      jRd() {
        return this._sourceMesh.jRd()
      }
      get _positions() {
        return this._sourceMesh._positions
      }
      refreshBoundingInfo() {
        let dd, Od = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          md = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.hasBoundingInfo && this.iG().isLocked) return this;
        dd = "object" === typeof Od ? Od : {
          applySkeleton: Od,
          applyMorph: md
        };
        const Wd = this._sourceMesh.geometry ? this._sourceMesh.geometry.boundingBias : null;
        return this._refreshBoundingInfo(this._sourceMesh._getData(dd, null, vd.j.PositionKind), Wd), this
      }
      _preActivate() {
        return this._currentLOD && this._currentLOD._preActivate(), this
      }
      _activate(dd, Od) {
        if (super._activate(dd, Od), this._sourceMesh.ZE || Fd.c.Warn("Instances should only be created for meshes with geometry."), this._currentLOD) {
          if (this._currentLOD._getWorldMatrixDeterminant() >= 0 !== this._getWorldMatrixDeterminant() >= 0) return this._internalAbstractMeshDataInfo._actAsRegularMesh = !0, !0;
          if (this._internalAbstractMeshDataInfo._actAsRegularMesh = !1, this._currentLOD._registerInstanceForRenderId(this, dd), Od) {
            if (!this._currentLOD._internalAbstractMeshDataInfo._isActiveIntermediate) return this._currentLOD._internalAbstractMeshDataInfo._onlyForInstancesIntermediate = !0, !0
          } else if (!this._currentLOD._internalAbstractMeshDataInfo._isActive) return this._currentLOD._internalAbstractMeshDataInfo._onlyForInstances = !0, !0
        }
        return !1
      }
      _postActivate() {
        this._sourceMesh.edgesShareWithInstances && this._sourceMesh._edgesRenderer && this._sourceMesh._edgesRenderer.isEnabled && this._sourceMesh._renderingGroup ? (this._sourceMesh._renderingGroup._edgesRenderers.pushNoDuplicate(this._sourceMesh._edgesRenderer), this._sourceMesh._edgesRenderer.customInstances.push(this.getWorldMatrix())) : this._edgesRenderer && this._edgesRenderer.isEnabled && this._sourceMesh._renderingGroup && this._sourceMesh._renderingGroup._edgesRenderers.push(this._edgesRenderer)
      }
      getWorldMatrix() {
        if (this._currentLOD && this._currentLOD !== this._sourceMesh && this._currentLOD.billboardMode !== hd.f.BILLBOARDMODE_NONE && this._currentLOD._masterMesh !== this) {
          this._billboardWorldMatrix || (this._billboardWorldMatrix = new Wd.d);
          const dd = this._currentLOD._masterMesh;
          return this._currentLOD._masterMesh = this, Wd.h.Cq[7].Bx(this._currentLOD.position), this._currentLOD.position.set(0, 0, 0), this._billboardWorldMatrix.Bx(this._currentLOD.computeWorldMatrix(!0)), this._currentLOD.position.Bx(Wd.h.Cq[7]), this._currentLOD._masterMesh = dd, this._billboardWorldMatrix
        }
        return super.getWorldMatrix()
      }
      get lV() {
        return !0
      }
      getLOD(dd) {
        if (!dd) return this;
        const Od = this.ZRd.getLODLevels();
        if (Od && 0 !== Od.length) {
          const Od = this.iG();
          this._currentLOD = this.ZRd.getLOD(dd, Od.ERd)
        } else this._currentLOD = this.ZRd;
        return this._currentLOD
      }
      _preActivateForIntermediateRendering(dd) {
        return this.ZRd._preActivateForIntermediateRendering(dd)
      }
      _syncSubMeshes() {
        if (this.releaseSubMeshes(), this._sourceMesh.ZE)
          for (let dd = 0; dd < this._sourceMesh.ZE.length; dd++) this._sourceMesh.ZE[dd].clone(this, this._sourceMesh);
        return this
      }
      _generatePointsArray() {
        return this._sourceMesh._generatePointsArray()
      }
      _updateBoundingInfo() {
        return this.hasBoundingInfo ? this.iG().update(this.worldMatrixFromCache) : this.buildBoundingInfo(this.absolutePosition, this.absolutePosition, this.worldMatrixFromCache), this._updateSubMeshesBoundingInfo(this.worldMatrixFromCache), this
      }
      clone(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          md = arguments.length > 2 ? arguments[2] : void 0;
        const Wd = ((arguments.length > 3 ? arguments[3] : void 0) || this._sourceMesh).createInstance(dd);
        if (Kd.d.DeepCopy(this, Wd, ["name", "ZE", "uniqueId", "parent", "lightSources", "receiveShadows", "material", "visibility", "skeleton", "ZRd", "lV", "facetNb", "isFacetDataEnabled", "isBlocked", "useBones", "CRd", "collider", "edgesRenderer", "forward", "up", "right", "absolutePosition", "absoluteScaling", "absoluteRotationQuaternion", "Nhd", "nonUniformScaling", "behaviors", "worldMatrixFromCache", "hasThinInstances", "hasBoundingInfo", "geometry"], []), Od && (Wd.parent = Od), !md)
          for (let Fd = 0; Fd < this.zV().meshes.length; Fd++) {
            const dd = this.zV().meshes[Fd];
            dd.parent === this && dd.clone(dd.name, Wd)
          }
        return Wd.computeWorldMatrix(!0), this.onClonedObservable.notifyObservers(Wd), Wd
      }
      dispose(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._sourceMesh.edd(this), super.dispose(dd, Od)
      }
      _serializeAsParent(dd) {
        super._serializeAsParent(dd), dd.parentId = this._sourceMesh.uniqueId, dd.parentInstanceIndex = this._indexInSourceMeshInstanceArray
      }
      instantiateHierarchy() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          Od = arguments.length > 1 ? arguments[1] : void 0,
          md = arguments.length > 2 ? arguments[2] : void 0;
        const Wd = this.clone("Clone of " + (this.name || this.id), dd || this.parent, !0, Od && Od.newSourcedMesh);
        Wd && md && md(this, Wd);
        for (const Fd of this.getChildTransformNodes(!0)) Fd.instantiateHierarchy(Wd, Od, md);
        return Wd
      }
    }
    let od = !1;

    function Nd(dd, Od, md, Wd, Fd) {
      for (let Rd = 0; Rd < Od.length; Rd++) {
        const Xd = dd[Od[Rd]] ?? 0,
          Kd = Fd + md[Rd];
        Xd.toArray ? Xd.toArray(Wd, Kd) : Xd.copyToArray ? Xd.copyToArray(Wd, Kd) : Wd[Kd] = Xd
      }
    }

    function qd() {
      od || (od = !0, Xd.d._instancedMeshFactory = (dd, Od) => {
        const md = new td(dd, Od);
        if (Od.xG) {
          md.xG = {};
          for (const dd in Od.xG) md.xG[dd] = Od.xG[dd]
        }
        return md
      }, Xd.d.prototype.JG = function(dd, Od) {
        if (!this.xG) {
          this.xG = {};
          for (const dd of this.instances) dd.xG = {}
        }
        this._userInstancedBuffersStorage || (this._userInstancedBuffersStorage = {
          data: {},
          vertexBuffers: {},
          strides: {},
          sizes: {},
          vertexArrayObjects: this.Iq().getCaps().vertexArrayObject ? {} : void 0
        }), this.xG[dd] = null, this._userInstancedBuffersStorage.strides[dd] = Od;
        const md = this._userInstancedBuffersStorage;
        md.interleavedKinds = [], md.interleavedOffsets = [], md.interleavedRowStride = 0;
        for (const Wd in md.strides) md.interleavedKinds.push(Wd), md.interleavedOffsets.push(md.interleavedRowStride), md.interleavedRowStride += md.strides[Wd];
        md.interleavedData = new Float32Array(32 * md.interleavedRowStride);
        for (const Wd in md.interleavedBuffers) md.interleavedBuffers[Wd].buffer.dispose();
        md.interleavedBuffers = {}, md.vertexBuffers[dd] = null;
        for (const Wd of this.instances) Wd.xG[dd] = null;
        this._invalidateInstanceVertexArrayObject(), this._markSubMeshesAsAttributesDirty()
      }, Xd.d.prototype._processInstancedBuffers = function(dd, Od) {
        const md = this._userInstancedBuffersStorage,
          Wd = md.interleavedRowStride;
        if (!Wd) return;
        const Fd = dd ? dd.length : 0,
          Rd = (Fd + 1) * Wd;
        let Xd = md.interleavedData;
        if (Xd.length < Rd) {
          let dd = Xd.length;
          for (; dd < Rd;) dd *= 2;
          Xd = md.interleavedData = new Float32Array(dd)
        }
        const Kd = md.interleavedKinds,
          hd = md.interleavedOffsets;
        let Qd = 0;
        Od && (Nd(this.xG, Kd, hd, Xd, Qd), Qd += Wd);
        for (let vd = 0; vd < Fd; vd++) Nd(dd[vd].xG, Kd, hd, Xd, Qd), Qd += Wd;
        let td = "shared",
          od = md.vertexBuffers;
        this._instanceDataStorage.useMonoDataStorageRenderPass || (td = this._instanceDataStorage.engine.currentRenderPassId, md.renderPasses || (md.renderPasses = {}), md.renderPasses[td] || (md.renderPasses[td] = {}), od = md.renderPasses[td]);
        const qd = md.interleavedBuffers[td];
        let Hd = !qd || qd.data !== Xd;
        for (let vd = 0; !Hd && vd < Kd.length; vd++) Hd = !od[Kd[vd]];
        if (!Hd) return void qd.buffer.updateDirectly(Xd, 0);
        qd?.buffer.dispose();
        const yd = new vd.b(this.Iq(), Xd, !0, Wd, !1, !0);
        for (let vd = 0; vd < Kd.length; vd++) {
          const dd = Kd[vd],
            Od = yd.createVertexBuffer(dd, hd[vd], md.strides[dd]);
          Od.hashCode += Od.byteOffset * 2 ** 24, od[dd] = Od
        }
        md.interleavedBuffers[td] = {
          buffer: yd,
          data: Xd
        }, this._invalidateInstanceVertexArrayObject()
      }, Xd.d.prototype._invalidateInstanceVertexArrayObject = function() {
        if (this._userInstancedBuffersStorage && void 0 !== this._userInstancedBuffersStorage.vertexArrayObjects) {
          for (const dd in this._userInstancedBuffersStorage.vertexArrayObjects) this.Iq().releaseVertexArrayObject(this._userInstancedBuffersStorage.vertexArrayObjects[dd]);
          this._userInstancedBuffersStorage.vertexArrayObjects = {}
        }
      }, Xd.d.prototype._disposeInstanceSpecificData = function() {
        for (const Od in this._instanceDataStorage.renderPasses) this._instanceDataStorage.renderPasses[Od].instancesBuffer?.dispose();
        for (this._instanceDataStorage.renderPasses = {}, this._instanceDataStorage.dataStorageRenderPass?.instancesBuffer?.dispose(); this.instances.length;) this.instances[0].dispose();
        for (const Od in this.xG) this._userInstancedBuffersStorage.vertexBuffers[Od] && this._userInstancedBuffersStorage.vertexBuffers[Od].dispose();
        const dd = this._userInstancedBuffersStorage?.interleavedBuffers;
        if (dd) {
          for (const Od in dd) dd[Od].buffer.dispose();
          this._userInstancedBuffersStorage.interleavedBuffers = {}
        }
        this._invalidateInstanceVertexArrayObject(), this.xG = {}
      }, (0, Qd.e)("BABYLON.InstancedMesh", td))
    }
  },
  42330: (dd, Od, md) => {
    md.d(Od, {
      d: () => Md,
      e: () => OO,
      h: () => ed
    });
    var Wd, Fd, Rd, Xd, Kd, hd, vd, Qd, td, od, Nd, qd, Hd, yd, bd = md(38660),
      Td = md(42029),
      pd = md(41961),
      Yd = md(40260),
      gd = md(41952),
      wd = md(42335),
      Ed = md(42126),
      Jd = md(38636),
      Ud = md(38741),
      xd = md(42132),
      Bd = md(42075),
      Sd = md(42339),
      sd = md(42344),
      ud = md(42367),
      Vd = md(42217),
      Ad = md(42208),
      rd = md(42298),
      Gd = md(42378),
      nd = md(42349),
      Ld = md(41948),
      Pd = md(40262),
      zd = md(38669),
      cd = md(41817),
      jd = md(42095);
    class Dd {
      constructor(dd, Od) {
        this.distanceOrScreenCoverage = dd, this.mesh = Od
      }
    }
    class ed {}
    class Id {
      constructor() {
        this.batchCache = new Cd(this), this.batchCacheReplacementModeInFrozenMode = new Cd(this), this.instancesBufferSize = 2048
      }
    }
    class ld {
      constructor() {
        this.renderPasses = {}
      }
    }
    class Cd {
      constructor(dd) {
        this.parent = dd, this.mustReturn = !1, this.visibleInstances = new Array, this.renderSelf = [], this.hardwareInstancedRendering = []
      }
    }
    class Zd {
      constructor() {
        this.instancesCount = 0, this.matrixBuffer = null, this.previousMatrixBuffer = null, this.matrixBufferSize = 512, this.matrixData = null, this.boundingVectors = [], this.worldMatrices = null
      }
    }
    class kd {
      constructor() {
        this._areNormalsFrozen = !1, this._source = null, this.meshMap = null, this._preActivateId = -1, this._LODLevels = new Array, this._useLODScreenCoverage = !1, this._effectiveMaterial = null, this._forcedInstanceCount = 0, this._overrideRenderingFillMode = null
      }
    }
    const fd = {
      source: null,
      parent: null,
      doNotCloneChildren: !1,
      clonePhysicsImpostor: !0,
      cloneThinInstances: !1
    };
    class Md extends ud.b {
      static _GetDefaultSideOrientation(dd) {
        return dd || Md.FRONTSIDE
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
        this._internalAbstractMeshDataInfo._computeBonesUsingShaders !== dd && (dd && this._internalMeshDataInfo._sourcePositions && (this.setVerticesData(Bd.j.PositionKind, this._internalMeshDataInfo._sourcePositions, !0), this._internalMeshDataInfo._sourceNormals && this.setVerticesData(Bd.j.NormalKind, this._internalMeshDataInfo._sourceNormals, !0), this._internalMeshDataInfo._sourcePositions = null, this._internalMeshDataInfo._sourceNormals = null), this._internalAbstractMeshDataInfo._computeBonesUsingShaders = dd, this._markSubMeshesAsAttributesDirty())
      }
      get onBeforeRenderObservable() {
        return this._internalMeshDataInfo._onBeforeRenderObservable || (this._internalMeshDataInfo._onBeforeRenderObservable = new bd.c), this._internalMeshDataInfo._onBeforeRenderObservable
      }
      get onBeforeBindObservable() {
        return this._internalMeshDataInfo._onBeforeBindObservable || (this._internalMeshDataInfo._onBeforeBindObservable = new bd.c), this._internalMeshDataInfo._onBeforeBindObservable
      }
      get onAfterRenderObservable() {
        return this._internalMeshDataInfo._onAfterRenderObservable || (this._internalMeshDataInfo._onAfterRenderObservable = new bd.c), this._internalMeshDataInfo._onAfterRenderObservable
      }
      get onBetweenPassObservable() {
        return this._internalMeshDataInfo._onBetweenPassObservable || (this._internalMeshDataInfo._onBetweenPassObservable = new bd.c), this._internalMeshDataInfo._onBetweenPassObservable
      }
      get onBeforeDrawObservable() {
        return this._internalMeshDataInfo._onBeforeDrawObservable || (this._internalMeshDataInfo._onBeforeDrawObservable = new bd.c), this._internalMeshDataInfo._onBeforeDrawObservable
      }
      set onBeforeDraw(dd) {
        this._onBeforeDrawObserver && this.onBeforeDrawObservable.remove(this._onBeforeDrawObserver), this._onBeforeDrawObserver = this.onBeforeDrawObservable.add(dd)
      }
      get CRd() {
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
      _copySource(dd, Od) {
        let md = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          Wd = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const Fd = this.zV();
        if (dd._geometry && dd._geometry.applyToMesh(this), Yd.d.DeepCopy(dd, this, ["name", "material", "skeleton", "instances", "parent", "uniqueId", "source", "metadata", "morphTargetManager", "CRd", "worldMatrixInstancedBuffer", "previousWorldMatrixInstancedBuffer", "hasLODLevels", "geometry", "isBlocked", "areNormalsFrozen", "facetNb", "isFacetDataEnabled", "lightSources", "useBones", "lV", "collider", "edgesRenderer", "forward", "up", "right", "absolutePosition", "absoluteScaling", "absoluteRotationQuaternion", "Nhd", "nonUniformScaling", "behaviors", "worldMatrixFromCache", "hasThinInstances", "cloneMeshMap", "hasBoundingInfo", "physicsBody", "physicsImpostor"], ["_poseMatrix"]), this._internalMeshDataInfo._source = dd, Fd.useClonedMeshMap && (dd._internalMeshDataInfo.meshMap || (dd._internalMeshDataInfo.meshMap = {}), dd._internalMeshDataInfo.meshMap[this.uniqueId] = this), this._originalBuilderSideOrientation = dd._originalBuilderSideOrientation, this._creationDataStorage = dd._creationDataStorage, dd._ranges) {
          const Od = dd._ranges;
          for (const dd in Od) Object.prototype.hasOwnProperty.call(Od, dd) && Od[dd] && this.createAnimationRange(dd, Od[dd].from, Od[dd].to)
        }
        if (dd.metadata && dd.metadata.clone ? this.metadata = dd.metadata.clone() : this.metadata = dd.metadata, this._internalMetadata = dd._internalMetadata, this.meshBlendingTag = dd.meshBlendingTag, gd.c && gd.c.HasTags(dd) && gd.c.AddTagsTo(this, gd.c.GetTags(dd, !0)), this.rY(dd.isEnabled(!1)), this.parent = dd.parent, this.setPivotMatrix(dd.getPivotMatrix(), this._postMultiplyPivotMatrix), this.id = this.name + "." + dd.id, this.material = dd.material, !Od) {
          const Fd = dd.getDescendants(!0);
          for (let dd = 0; dd < Fd.length; dd++) {
            const Rd = Fd[dd];
            Rd._isMesh ? (fd.parent = this, fd.doNotCloneChildren = Od, fd.clonePhysicsImpostor = md, fd.cloneThinInstances = Wd, Rd.clone(this.name + "." + Rd.name, fd)) : Rd.clone && Rd.clone(this.name + "." + Rd.name, this)
          }
        }
        if (dd.morphTargetManager && (this.morphTargetManager = dd.morphTargetManager), (0, cd.e)(Fd.getPhysicsEngine)) {
          const Od = Fd.getPhysicsEngine();
          if (md && Od)
            if (1 === Od.getPluginVersion()) {
              const md = Od.getImpostorForPhysicsObject(dd);
              md && (this.physicsImpostor = md.clone(this))
            } else 2 === Od.getPluginVersion() && dd.physicsBody && dd.physicsBody.clone(this)
        }
        for (let Rd = 0; Rd < Fd.kE.length; Rd++) {
          const Od = Fd.kE[Rd];
          Od.emitter === dd && Od.clone(Od.name, this)
        }
        if (this.skeleton = dd.skeleton, Wd && (dd._thinInstanceDataStorage.matrixData ? (this.OOd("matrix", new Float32Array(dd._thinInstanceDataStorage.matrixData), 16, !dd._thinInstanceDataStorage.matrixBuffer.isUpdatable()), this._thinInstanceDataStorage.matrixBufferSize = dd._thinInstanceDataStorage.matrixBufferSize, this._thinInstanceDataStorage.instancesCount = dd._thinInstanceDataStorage.instancesCount) : this._thinInstanceDataStorage.matrixBufferSize = dd._thinInstanceDataStorage.matrixBufferSize, dd._userThinInstanceBuffersStorage)) {
          const Od = dd._userThinInstanceBuffersStorage;
          for (const dd in Od.data) this.OOd(dd, new Float32Array(Od.data[dd]), Od.strides[dd], !Od.vertexBuffers?.[dd]?.isUpdatable()), this._userThinInstanceBuffersStorage.sizes[dd] = Od.sizes[dd]
        }
        this.refreshBoundingInfo(!0, !0), this.computeWorldMatrix(!0)
      }
      constructor(dd) {
        let Od, md = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Wd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Fd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          Rd = arguments.length > 4 ? arguments[4] : void 0,
          Xd = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        super(dd, md), this._internalMeshDataInfo = new kd, this.delayLoadState = 0, this.instances = [], this._creationDataStorage = null, this._geometry = null, this._thinInstanceDataStorage = new Zd, this._shouldGenerateFlatShading = !1, this._originalBuilderSideOrientation = Md.DEFAULTSIDE, this.ignoreCameraMaxZ = !1, md = this.zV(), this._instanceDataStorage = new ld, this._instanceDataStorage.engine = md.Iq(), this._instanceDataStorage.useMonoDataStorageRenderPass = !this._instanceDataStorage.engine.isWebGPU, this._instanceDataStorage.useMonoDataStorageRenderPass && (this._instanceDataStorage.dataStorageRenderPass = new Id), this._scene.useRightHandedSystem ? this.sideOrientation = 0 : this.sideOrientation = 1, this._onBeforeDraw = (dd, Od, md) => {
          dd && md && (this._uniformBuffer ? this.transferToEffect(Od) : md.bindOnlyWorldMatrix(Od))
        };
        let Kd = !1;
        if (Wd && void 0 === Wd._addToSceneRootNodes) {
          const dd = Wd;
          Od = dd.parent ?? null, Fd = dd.source ?? null, Rd = dd.doNotCloneChildren ?? !1, Xd = dd.clonePhysicsImpostor ?? !0, Kd = dd.cloneThinInstances ?? !1
        } else Od = Wd;
        Fd && this._copySource(Fd, Rd, Xd, Kd), null !== Od && (this.parent = Od), this._instanceDataStorage.hardwareInstancedRendering = this.Iq().getCaps().instancedArrays, this._internalMeshDataInfo._onMeshReadyObserverAdded = dd => {
          dd.unregisterOnNextCall = !0, this.isReady(!0) ? this.onMeshReadyObservable.notifyObservers(this) : this._internalMeshDataInfo._checkReadinessObserver || (this._internalMeshDataInfo._checkReadinessObserver = this._scene.onBeforeRenderObservable.add((() => {
            this.isReady(!0) && (this._scene.onBeforeRenderObservable.remove(this._internalMeshDataInfo._checkReadinessObserver), this._internalMeshDataInfo._checkReadinessObserver = null, this.onMeshReadyObservable.notifyObservers(this))
          })))
        }, this.onMeshReadyObservable = new bd.c(this._internalMeshDataInfo._onMeshReadyObserverAdded), Fd && Fd.onClonedObservable.notifyObservers(this)
      }
      instantiateHierarchy() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          Od = arguments.length > 1 ? arguments[1] : void 0,
          md = arguments.length > 2 ? arguments[2] : void 0;
        const Wd = 0 === this.getTotalVertices() || Od && Od.doNotInstantiate && (!0 === Od.doNotInstantiate || Od.doNotInstantiate(this)) ? this.clone("Clone of " + (this.name || this.id), dd || this.parent, !0) : this.createInstance("instance of " + (this.name || this.id));
        Wd.parent = dd || this.parent, Wd.position = this.position.clone(), Wd.Tt = this.Tt.clone(), this.rotationQuaternion ? Wd.rotationQuaternion = this.rotationQuaternion.clone() : Wd.rotation = this.rotation.clone(), md && md(this, Wd);
        for (const Fd of this.getChildTransformNodes(!0)) "InstancedMesh" === Fd.getClassName() && "Mesh" === Wd.getClassName() && Fd.ZRd === this ? Fd.instantiateHierarchy(Wd, {
          doNotInstantiate: Od && Od.doNotInstantiate || !1,
          newSourcedMesh: Wd
        }, md) : Fd.instantiateHierarchy(Wd, Od, md);
        return Wd
      }
      getClassName() {
        return "Mesh"
      }
      get _isMesh() {
        return !0
      }
      toString(dd) {
        let Od = super.toString(dd);
        if (Od += ", n vertices: " + this.getTotalVertices(), Od += ", parent: " + (this._waitingParentId ? this._waitingParentId : this.parent ? this.parent.name : "NONE"), this.animations)
          for (let md = 0; md < this.animations.length; md++) Od += ", animation[0]: " + this.animations[md].toString(dd);
        if (dd)
          if (this._geometry) {
            const dd = this.jRd(),
              md = this.getVerticesData(Bd.j.PositionKind);
            md && dd && (Od += ", flat shading: " + (md.length / 3 === dd.length ? "YES" : "NO"))
          } else Od += ", flat shading: UNKNOWN";
        return Od
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
        this._internalMeshDataInfo._LODLevels.sort(((Od, md) => Od.distanceOrScreenCoverage < md.distanceOrScreenCoverage ? dd : Od.distanceOrScreenCoverage > md.distanceOrScreenCoverage ? -dd : 0))
      }
      addLODLevel(dd, Od) {
        if (Od && Od._masterMesh) return Pd.c.Warn("You cannot use a mesh as LOD level twice"), this;
        const md = new Dd(dd, Od);
        return this._internalMeshDataInfo._LODLevels.push(md), Od && (Od._masterMesh = this), this._sortLODLevels(), this
      }
      getLODLevelAtDistance(dd) {
        const Od = this._internalMeshDataInfo;
        for (let md = 0; md < Od._LODLevels.length; md++) {
          const Wd = Od._LODLevels[md];
          if (Wd.distanceOrScreenCoverage === dd) return Wd.mesh
        }
        return null
      }
      removeLODLevel(dd) {
        const Od = this._internalMeshDataInfo;
        for (let md = 0; md < Od._LODLevels.length; md++) Od._LODLevels[md].mesh === dd && (Od._LODLevels.splice(md, 1), dd && (dd._masterMesh = null));
        return this._sortLODLevels(), this
      }
      getLOD(dd, Od) {
        const md = this._internalMeshDataInfo;
        if (!md._LODLevels || 0 === md._LODLevels.length) return this;
        const Wd = Od || this.iG().ERd,
          Fd = dd.mode === Ed.e.ORTHOGRAPHIC_CAMERA ? dd.minZ : Wd.centerWorld.subtract(dd.globalPosition).length();
        let Rd = Fd,
          Xd = 1;
        if (md._useLODScreenCoverage) {
          const Od = dd.screenArea;
          let md = Wd.radiusWorld * dd.minZ / Fd;
          md = md * md * Math.PI, Rd = md / Od, Xd = -1
        }
        if (Xd * md._LODLevels[md._LODLevels.length - 1].distanceOrScreenCoverage > Xd * Rd) return this.onLODLevelSelection && this.onLODLevelSelection(Rd, this, this), this;
        for (let Kd = 0; Kd < md._LODLevels.length; Kd++) {
          const dd = md._LODLevels[Kd];
          if (Xd * dd.distanceOrScreenCoverage < Xd * Rd) {
            if (dd.mesh) {
              if (4 === dd.mesh.delayLoadState) return dd.mesh._checkDelayState(), this;
              if (2 === dd.mesh.delayLoadState) return this;
              dd.mesh._preActivate(), dd.mesh._updateSubMeshesBoundingInfo(this.worldMatrixFromCache)
            }
            return this.onLODLevelSelection && this.onLODLevelSelection(Rd, this, dd.mesh), dd.mesh
          }
        }
        return this.onLODLevelSelection && this.onLODLevelSelection(Rd, this, this), this
      }
      get geometry() {
        return this._geometry
      }
      getTotalVertices() {
        return null === this._geometry || void 0 === this._geometry ? 0 : this._geometry.getTotalVertices()
      }
      getVerticesData(dd, Od, md, Wd) {
        if (!this._geometry) return null;
        let Fd = Wd ? void 0 : this._userInstancedBuffersStorage?.vertexBuffers[dd]?.getFloatData(this.instances.length + 1, md || Od && 1 !== this._geometry.meshes.length);
        return Fd || (Fd = this._geometry.getVerticesData(dd, Od, md)), Fd
      }
      copyVerticesData(dd, Od) {
        this._geometry && this._geometry.copyVerticesData(dd, Od)
      }
      getVertexBuffer(dd, Od) {
        return this._geometry ? (Od ? void 0 : this._userInstancedBuffersStorage?.vertexBuffers[dd]) ?? this._geometry.getVertexBuffer(dd) : null
      }
      isVerticesDataPresent(dd, Od) {
        return this._geometry ? !Od && void 0 !== this._userInstancedBuffersStorage?.vertexBuffers[dd] || this._geometry.isVerticesDataPresent(dd) : !!this._delayInfo && -1 !== this._delayInfo.indexOf(dd)
      }
      isVertexBufferUpdatable(dd, Od) {
        if (!this._geometry) return !!this._delayInfo && -1 !== this._delayInfo.indexOf(dd);
        if (!Od) {
          const Od = this._userInstancedBuffersStorage?.vertexBuffers[dd];
          if (Od) return Od.isUpdatable()
        }
        return this._geometry.isVertexBufferUpdatable(dd)
      }
      getVerticesDataKinds(dd) {
        if (!this._geometry) {
          const dd = [];
          if (this._delayInfo)
            for (const Od of this._delayInfo) dd.push(Od);
          return dd
        }
        const Od = this._geometry.getVerticesDataKinds();
        if (!dd && this._userInstancedBuffersStorage)
          for (const md in this._userInstancedBuffersStorage.vertexBuffers) - 1 === Od.indexOf(md) && Od.push(md);
        return Od
      }
      getTotalIndices() {
        return this._geometry ? this._geometry.getTotalIndices() : 0
      }
      jRd(dd, Od) {
        return this._geometry ? this._geometry.jRd(dd, Od) : []
      }
      get isBlocked() {
        return null !== this._masterMesh && void 0 !== this._masterMesh
      }
      isReady() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (2 === this.delayLoadState) return !1;
        if (!super.isReady(dd)) return !1;
        if (!this.ZE || 0 === this.ZE.length) return !0;
        if (!dd) return !0;
        const md = this.Iq(),
          Wd = this.zV(),
          Fd = Od || md.getCaps().instancedArrays && (this.instances.length > 0 || this.hasThinInstances);
        this.computeWorldMatrix();
        const Rd = this.material || Wd.defaultMaterial;
        if (Rd)
          if (Rd._storeEffectOnSubMeshes)
            for (const Kd of this.ZE) {
              const dd = Kd.fq();
              if (dd)
                if (dd._storeEffectOnSubMeshes) {
                  if (!dd.isReadyForSubMesh(this, Kd, Fd)) return !1
                } else if (!dd.isReady(this, Fd)) return !1
            } else if (!Rd.isReady(this, Fd)) return !1;
        const Xd = md.currentRenderPassId;
        for (const Kd of this.lightSources) {
          const dd = Kd.getShadowGenerators();
          if (!dd) continue;
          const Od = dd.values();
          for (let Wd = Od.next(); !0 !== Wd.done; Wd = Od.next()) {
            const dd = Wd.value;
            if (dd && (!dd.getShadowMap()?.renderList || dd.getShadowMap()?.renderList && -1 !== dd.getShadowMap()?.renderList?.indexOf(this))) {
              const Od = dd.getShadowMap().renderPassIds ?? [md.currentRenderPassId];
              for (let Wd = 0; Wd < Od.length; ++Wd) {
                md.currentRenderPassId = Od[Wd];
                for (const Od of this.ZE)
                  if (!dd.isReady(Od, Fd, Od.fq()?.needAlphaBlendingForMesh(this) ?? !1)) return md.currentRenderPassId = Xd, !1
              }
              md.currentRenderPassId = Xd
            }
          }
        }
        for (const Kd of this._internalMeshDataInfo._LODLevels)
          if (Kd.mesh && !Kd.mesh.isReady(Fd)) return !1;
        return !0
      }
      get areNormalsFrozen() {
        return this._internalMeshDataInfo._areNormalsFrozen
      }
      Mq() {
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
        let Od = this._instanceDataStorage.renderPasses[dd];
        return Od || (Od = new Id, this._instanceDataStorage.renderPasses[dd] = Od), Od
      }
      _preActivate() {
        const dd = this._internalMeshDataInfo,
          Od = this.zV().getRenderId();
        return dd._preActivateId === Od || (dd._preActivateId = Od, this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass.visibleInstances = null : this._getInstanceDataStorage().visibleInstances = null), this
      }
      _preActivateForIntermediateRendering(dd) {
        const Od = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        return Od.visibleInstances && (Od.visibleInstances.intermediateDefaultRenderId = dd), this
      }
      _registerInstanceForRenderId(dd, Od) {
        const md = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        return md.visibleInstances || (md.visibleInstances = {
          defaultRenderId: Od,
          selfDefaultRenderId: this._renderId,
          intermediateDefaultRenderId: -1
        }), md.visibleInstances[Od] || (void 0 === md.previousRenderId || this._instanceDataStorage.useMonoDataStorageRenderPass && !this._instanceDataStorage.isFrozen || delete md.visibleInstances[md.previousRenderId], md.previousRenderId = Od, md.visibleInstances[Od] = new Array), md.visibleInstances[Od].push(dd), this
      }
      _afterComputeWorldMatrix() {
        super._afterComputeWorldMatrix(), this.hasThinInstances && (this.kq || this.thinInstanceRefreshBoundingInfo(!1))
      }
      _postActivate() {
        this.edgesShareWithInstances && this.edgesRenderer && this.edgesRenderer.isEnabled && this._renderingGroup && (this._renderingGroup._edgesRenderers.pushNoDuplicate(this.edgesRenderer), this.edgesRenderer.customInstances.push(this.getWorldMatrix()))
      }
      refreshBoundingInfo() {
        let dd, Od = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          md = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.hasBoundingInfo && this.iG().isLocked) return this;
        dd = "object" === typeof Od ? Od : {
          applySkeleton: Od,
          applyMorph: md
        };
        const Wd = this.geometry ? this.geometry.boundingBias : null;
        return this._refreshBoundingInfo(this._getData(dd, null, Bd.j.PositionKind), Wd), this
      }
      _createGlobalSubMesh(dd) {
        const Od = this.getTotalVertices();
        if (!Od || !this.jRd()) return null;
        if (this.ZE && this.ZE.length > 0) {
          const md = this.jRd();
          if (!md) return null;
          const Wd = md.length;
          let Fd = !1;
          if (dd) Fd = !0;
          else
            for (const dd of this.ZE) {
              if (dd.indexStart + dd.indexCount > Wd) {
                Fd = !0;
                break
              }
              if (dd.verticesStart + dd.verticesCount > Od) {
                Fd = !0;
                break
              }
            }
          if (!Fd) return this.ZE[0]
        }
        return this.releaseSubMeshes(), new Vd.d(0, 0, Od, 0, this.getTotalIndices() || (this.isUnIndexed ? Od : 0), this)
      }
      subdivide(dd) {
        if (dd < 1) return;
        const Od = this.getTotalIndices();
        let md = Od / dd | 0,
          Wd = 0;
        for (; md % 3 !== 0;) md++;
        this.releaseSubMeshes();
        for (let Fd = 0; Fd < dd && !(Wd >= Od); Fd++) Vd.d.CreateFromIndices(0, Wd, Wd + md >= Od ? Od - Wd : md, this, void 0, !1), Wd += md;
        this.refreshBoundingInfo(), this.synchronizeInstances()
      }
      setVerticesData(dd, Od) {
        let md = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Wd = arguments.length > 3 ? arguments[3] : void 0;
        if (this._geometry) this._geometry.setVerticesData(dd, Od, md, Wd);
        else {
          const Wd = new Sd.c;
          Wd.set(Od, dd);
          const Fd = this.zV();
          new sd.c(sd.c.RandomId(), Fd, Wd, md, this)
        }
        return this
      }
      removeVerticesData(dd) {
        this._geometry && this._geometry.removeVerticesData(dd)
      }
      markVerticesDataAsUpdatable(dd) {
        let Od = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const md = this.getVertexBuffer(dd);
        md && md.isUpdatable() !== Od && this.setVerticesData(dd, this.getVerticesData(dd), Od)
      }
      setVerticesBuffer(dd) {
        let Od = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        return this._geometry || (this._geometry = sd.c.CreateGeometryForMesh(this)), this._geometry.setVerticesBuffer(dd, md, Od), this
      }
      updateVerticesData(dd, Od, md, Wd) {
        return this._geometry ? (Wd ? (this.makeGeometryUnique(), this.updateVerticesData(dd, Od, md, !1)) : this._geometry.updateVerticesData(dd, Od, md), this) : this
      }
      updateMeshPositions(dd) {
        let Od = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const md = this.getVerticesData(Bd.j.PositionKind);
        if (!md) return this;
        if (dd(md), this.updateVerticesData(Bd.j.PositionKind, md, !1, !1), Od) {
          const dd = this.jRd(),
            Od = this.getVerticesData(Bd.j.NormalKind);
          if (!Od) return this;
          Sd.c.ComputeNormals(md, dd, Od), this.updateVerticesData(Bd.j.NormalKind, Od, !1, !1)
        }
        return this
      }
      makeGeometryUnique() {
        if (!this._geometry) return this;
        if (1 === this._geometry.meshes.length) return this;
        const dd = this._geometry,
          Od = this._geometry.copy(sd.c.RandomId());
        return dd.releaseForMesh(this, !0), Od.applyToMesh(this), this
      }
      setIndexBuffer(dd, Od, md) {
        let Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          Fd = this._geometry;
        Fd || (Fd = new sd.c(sd.c.RandomId(), this.zV(), void 0, void 0, this)), Fd.setIndexBuffer(dd, Od, md, Wd)
      }
      setIndices(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          md = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Wd = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this._geometry) this._geometry.setIndices(dd, Od, md, Wd);
        else {
          const Wd = new Sd.c;
          Wd.indices = dd;
          const Fd = this.zV();
          new sd.c(sd.c.RandomId(), Fd, Wd, md, this, Od)
        }
        return this
      }
      updateIndices(dd, Od) {
        let md = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return this._geometry ? (this._geometry.updateIndices(dd, Od, md), this) : this
      }
      toLeftHanded() {
        return this._geometry ? (this._geometry.toLeftHanded(), this) : this
      }
      _bind(dd, Od, md) {
        let Wd = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        if (!this._geometry) return this;
        const Fd = this.zV().Iq();
        let Rd;
        if (this._unIndexed)
          if (this._getRenderingFillMode(md) === Ad.b.WireFrameFillMode) Rd = dd._getLinesIndexBuffer(this.jRd(), Fd);
          else Rd = null;
        else switch (this._getRenderingFillMode(md)) {
          case Ad.b.PointFillMode:
            Rd = null;
            break;
          case Ad.b.WireFrameFillMode:
            Rd = dd._getLinesIndexBuffer(this.jRd(), Fd);
            break;
          default:
          case Ad.b.TriangleFillMode:
            Rd = this._geometry.getIndexBuffer()
        }
        return this._bindDirect(Od, Rd, Wd)
      }
      _bindDirect(dd, Od) {
        let md = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (!this._geometry) return this;
        if (this.morphTargetManager && this.morphTargetManager.isUsingTextureForTargets && this.morphTargetManager._bind(dd), md && this._userInstancedBuffersStorage && !this.hasThinInstances) {
          if (!this._instanceDataStorage.useMonoDataStorageRenderPass && this._userInstancedBuffersStorage.renderPasses && this._userInstancedBuffersStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId]) {
            const dd = this._userInstancedBuffersStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId];
            for (const Od in dd) this._userInstancedBuffersStorage.vertexBuffers[Od] = dd[Od]
          }
          this._geometry._bind(dd, Od, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects)
        } else this._geometry._bind(dd, Od);
        return this
      }
      _draw(dd, Od, md) {
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        this._internalMeshDataInfo._onBeforeDrawObservable && this._internalMeshDataInfo._onBeforeDrawObservable.notifyObservers(this);
        const Wd = this.zV().Iq(),
          Fd = Wd._currentMaterialContext,
          Rd = Fd && Fd.useVertexPulling;
        return this._unIndexed && Od !== Ad.b.WireFrameFillMode || Od == Ad.b.PointFillMode ? Wd.drawArraysType(Od, dd.verticesStart, dd.verticesCount, this.forcedInstanceCount || md) : Od == Ad.b.WireFrameFillMode ? Wd.drawElementsType(Od, 0, dd._linesIndexCount, this.forcedInstanceCount || md) : Rd ? Wd.drawArraysType(Od, dd.indexStart, dd.indexCount, this.forcedInstanceCount || md) : Wd.drawElementsType(Od, dd.indexStart, dd.indexCount, this.forcedInstanceCount || md), this
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
        let Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const md = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        if (this._instanceDataStorage.isFrozen) {
          if (Od) return md.batchCacheReplacementModeInFrozenMode.hardwareInstancedRendering[dd] = !1, md.batchCacheReplacementModeInFrozenMode.renderSelf[dd] = !0, md.batchCacheReplacementModeInFrozenMode;
          if (md.previousBatch) return md.previousBatch
        }
        const Wd = this.zV(),
          Fd = Wd._isInIntermediateRendering(),
          Rd = Fd ? this._internalAbstractMeshDataInfo._onlyForInstancesIntermediate : this._internalAbstractMeshDataInfo._onlyForInstances,
          Xd = md.batchCache;
        if (Xd.mustReturn = !1, Xd.renderSelf[dd] = Od || !Rd && this.isEnabled() && this.isVisible, Xd.visibleInstances[dd] = null, md.visibleInstances && !Od) {
          const Od = md.visibleInstances,
            Rd = Wd.getRenderId(),
            Kd = Fd ? Od.intermediateDefaultRenderId : Od.defaultRenderId;
          Xd.visibleInstances[dd] = Od[Rd], !Xd.visibleInstances[dd] && Kd && (Xd.visibleInstances[dd] = Od[Kd])
        }
        return Xd.hardwareInstancedRendering[dd] = !Od && this._instanceDataStorage.hardwareInstancedRendering && null !== Xd.visibleInstances[dd] && void 0 !== Xd.visibleInstances[dd], md.previousBatch = Xd, Xd
      }
      _updateInstancedBuffers(dd, Od, md, Wd, Fd, Rd) {
        const Xd = Od.visibleInstances[dd._id],
          Kd = Xd ? Xd.length : 0,
          hd = Od.parent,
          vd = this._instanceDataStorage;
        let Qd = hd.instancesBuffer,
          td = hd.instancesPreviousBuffer,
          od = 0,
          Nd = 0;
        const qd = Od.renderSelf[dd._id],
          Hd = this._scene.floatingOriginOffset,
          yd = !Qd || md !== hd.instancesBufferSize || this._scene.needsPreviousWorldMatrices && !hd.instancesPreviousBuffer;
        if (this._instanceDataStorage.manualUpdate || vd.isFrozen && !yd) Nd = (qd ? 1 : 0) + Kd;
        else {
          const Od = this.getWorldMatrix();
          if (qd) {
            this._scene.needsPreviousWorldMatrices && (vd.masterMeshPreviousWorldMatrix ? (vd.masterMeshPreviousWorldMatrix.copyToArray(hd.instancesPreviousData, od), vd.masterMeshPreviousWorldMatrix.Bx(Od)) : (vd.masterMeshPreviousWorldMatrix = Od.clone(), vd.masterMeshPreviousWorldMatrix.copyToArray(hd.instancesPreviousData, od))), Od.copyToArray(hd.instancesData, od);
            const dd = Od.RRd();
            hd.instancesData[od + 12] = dd[12] - Hd.x, hd.instancesData[od + 13] = dd[13] - Hd.y, hd.instancesData[od + 14] = dd[14] - Hd.z, od += 16, Nd++
          }
          if (Xd) {
            if (Md.INSTANCEDMESH_SORT_TRANSPARENT && this._scene.activeCamera && dd.fq()?.needAlphaBlendingForMesh(dd.getRenderingMesh())) {
              const dd = this._scene.activeCamera.globalPosition;
              for (let Od = 0; Od < Xd.length; Od++) {
                const md = Xd[Od];
                md._distanceToCamera = Jd.j.Distance(md.iG().ERd.centerWorld, dd)
              }
              Xd.sort(((dd, Od) => dd._distanceToCamera > Od._distanceToCamera ? -1 : dd._distanceToCamera < Od._distanceToCamera ? 1 : 0))
            }
            for (let dd = 0; dd < Xd.length; dd++) {
              const Od = Xd[dd],
                md = Od.getWorldMatrix();
              md.copyToArray(hd.instancesData, od), this._scene.needsPreviousWorldMatrices && (Od._previousWorldMatrix ? (Od._previousWorldMatrix.copyToArray(hd.instancesPreviousData, od), Od._previousWorldMatrix.Bx(md)) : (Od._previousWorldMatrix = md.clone(), Od._previousWorldMatrix.copyToArray(hd.instancesPreviousData, od)));
              const Wd = md.RRd();
              hd.instancesData[od + 12] = Wd[12] - Hd.x, hd.instancesData[od + 13] = Wd[13] - Hd.y, hd.instancesData[od + 14] = Wd[14] - Hd.z, od += 16, Nd++
            }
          }
        }
        if (yd) {
          let dd;
          if (Qd && Qd.dispose(), td && td.dispose(), Qd = new Bd.b(Wd, hd.instancesData, !0, 16, !1, !0), hd.instancesBuffer = Qd, this._userInstancedBuffersStorage || (this._userInstancedBuffersStorage = {
              data: {},
              vertexBuffers: {},
              strides: {},
              sizes: {},
              vertexArrayObjects: this.Iq().getCaps().vertexArrayObject ? {} : void 0
            }), this._instanceDataStorage.useMonoDataStorageRenderPass) dd = this._userInstancedBuffersStorage.vertexBuffers;
          else {
            this._userInstancedBuffersStorage.renderPasses || (this._userInstancedBuffersStorage.renderPasses = {});
            const Od = this._instanceDataStorage.engine.currentRenderPassId;
            dd = this._userInstancedBuffersStorage.renderPasses[Od], dd || (this._userInstancedBuffersStorage.renderPasses[Od] = dd = {})
          }
          dd.world0 = Qd.createVertexBuffer("world0", 0, 4), dd.world1 = Qd.createVertexBuffer("world1", 4, 4), dd.world2 = Qd.createVertexBuffer("world2", 8, 4), dd.world3 = Qd.createVertexBuffer("world3", 12, 4), this._scene.needsPreviousWorldMatrices && (td = new Bd.b(Wd, hd.instancesPreviousData, !0, 16, !1, !0), hd.instancesPreviousBuffer = td, dd.previousWorld0 = td.createVertexBuffer("previousWorld0", 0, 4), dd.previousWorld1 = td.createVertexBuffer("previousWorld1", 4, 4), dd.previousWorld2 = td.createVertexBuffer("previousWorld2", 8, 4), dd.previousWorld3 = td.createVertexBuffer("previousWorld3", 12, 4)), this._invalidateInstanceVertexArrayObject()
        } else this._instanceDataStorage.isFrozen && !this._instanceDataStorage.forceMatrixUpdates || (Qd.updateDirectly(hd.instancesData, 0, Nd), !this._scene.needsPreviousWorldMatrices || this._instanceDataStorage.manualUpdate && !this._instanceDataStorage.previousManualUpdate || td.updateDirectly(hd.instancesPreviousData, 0, Nd));
        this._processInstancedBuffers(Xd, qd), Rd && void 0 !== Fd && (this.zV()._activeIndices.addCount(dd.indexCount * Nd, !1), Wd._currentDrawContext && (Wd._currentDrawContext.useInstancing = !0), this._bind(dd, Rd, Fd), this._draw(dd, Fd, Nd)), !this._scene.needsPreviousWorldMatrices || yd || !this._instanceDataStorage.manualUpdate || this._instanceDataStorage.isFrozen && !this._instanceDataStorage.forceMatrixUpdates || this._instanceDataStorage.previousManualUpdate || td.updateDirectly(hd.instancesData, 0, Nd)
      }
      _renderWithInstances(dd, Od, md, Wd, Fd) {
        const Rd = md.visibleInstances[dd._id],
          Xd = Rd ? Rd.length : 0,
          Kd = md.parent,
          hd = Kd.instancesBufferSize,
          vd = 16 * (Xd + 1) * 4;
        for (; Kd.instancesBufferSize < vd;) Kd.instancesBufferSize *= 2;
        return Kd.instancesData && hd == Kd.instancesBufferSize || (Kd.instancesData = new Float32Array(Kd.instancesBufferSize / 4)), (this._scene.needsPreviousWorldMatrices && !Kd.instancesPreviousData || hd != Kd.instancesBufferSize) && (Kd.instancesPreviousData = new Float32Array(Kd.instancesBufferSize / 4)), this._updateInstancedBuffers(dd, md, hd, Fd, Od, Wd), Fd.unbindInstanceAttributes(), this
      }
      _renderWithThinInstances(dd, Od, md, Wd) {
        const Fd = this._thinInstanceDataStorage?.instancesCount ?? 0;
        this.zV()._activeIndices.addCount(dd.indexCount * Fd, !1), Wd._currentDrawContext && (Wd._currentDrawContext.useInstancing = !0), this._bind(dd, md, Od), this._draw(dd, Od, Fd), this._scene.needsPreviousWorldMatrices && !this._thinInstanceDataStorage.previousMatrixData && this._thinInstanceDataStorage.matrixData && (this._thinInstanceDataStorage.previousMatrixBuffer ? this._thinInstanceDataStorage.previousMatrixBuffer.updateDirectly(this._thinInstanceDataStorage.matrixData, 0, Fd) : this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", this._thinInstanceDataStorage.matrixData, !1)), Wd.unbindInstanceAttributes()
      }
      _processInstancedBuffers(dd, Od) {}
      _processRendering(dd, Od, md, Wd, Fd, Rd, Xd, Kd) {
        const hd = this.zV(),
          vd = hd.Iq();
        if (Wd = this._getRenderingFillMode(Wd), Rd && Od.getRenderingMesh().hasThinInstances) return this._renderWithThinInstances(Od, Wd, md, vd), this;
        if (Rd) this._renderWithInstances(Od, Wd, Fd, md, vd);
        else {
          vd._currentDrawContext && (vd._currentDrawContext.useInstancing = !1);
          let md = 0;
          Fd.renderSelf[Od._id] && (Xd && Xd(!1, dd.getWorldMatrix(), Kd), md++, this._draw(Od, Wd, this._instanceDataStorage.overridenInstanceCount));
          const Rd = Fd.visibleInstances[Od._id];
          if (Rd) {
            const dd = Rd.length;
            md += dd;
            for (let md = 0; md < dd; md++) {
              const dd = Rd[md].getWorldMatrix();
              Xd && Xd(!0, dd, Kd), this._draw(Od, Wd)
            }
          }
          hd._activeIndices.addCount(Od.indexCount * md, !1)
        }
        return this
      }
      _disposeInstanceDataStorageRenderPass(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        dd?.instancesBuffer && (Od && dd.instancesBuffer.dispose(), dd.instancesBuffer = null), dd?.instancesPreviousBuffer && (Od && dd.instancesPreviousBuffer.dispose(), dd.instancesPreviousBuffer = null)
      }
      _rebuild() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const Od in this._instanceDataStorage.renderPasses) {
          const md = this._instanceDataStorage.renderPasses[Od];
          this._disposeInstanceDataStorageRenderPass(md, dd)
        }
        if (this._disposeInstanceDataStorageRenderPass(this._instanceDataStorage.dataStorageRenderPass, dd), this._userInstancedBuffersStorage) {
          for (const Od in this._userInstancedBuffersStorage.vertexBuffers) {
            const md = this._userInstancedBuffersStorage.vertexBuffers[Od];
            md && (dd && md.dispose(), this._userInstancedBuffersStorage.vertexBuffers[Od] = null)
          }
          this._userInstancedBuffersStorage.vertexArrayObjects && (this._userInstancedBuffersStorage.vertexArrayObjects = {})
        }
        this._internalMeshDataInfo._effectiveMaterial = null, super._rebuild(dd)
      }
      _releaseRenderPassId(dd) {
        const Od = this._instanceDataStorage.renderPasses[dd];
        if (Od && (this._disposeInstanceDataStorageRenderPass(Od, !0), delete this._instanceDataStorage.renderPasses[dd]), this._userInstancedBuffersStorage?.renderPasses) {
          const Od = this._userInstancedBuffersStorage.renderPasses[dd];
          if (Od)
            for (const dd in Od) Od[dd]?.dispose();
          delete this._userInstancedBuffersStorage.renderPasses[dd]
        }
        const md = this._userInstancedBuffersStorage?.interleavedBuffers;
        md?.[dd] && (md[dd].buffer.dispose(), delete md[dd])
      }
      _freeze() {
        if (this.ZE) {
          for (let dd = 0; dd < this.ZE.length; dd++) this._getInstancesRenderList(dd);
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
      renderWithRenderPassId(dd, Od, md, Wd) {
        let Fd = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        const Rd = this._scene.Iq(),
          Xd = Rd.currentRenderPassId;
        if (void 0 !== dd && (Rd.currentRenderPassId = dd), Wd)(!Fd || Fd && Wd.isInFrustum(this._scene._frustumPlanes)) && this.render(Wd, !!Od, md);
        else
          for (let Kd = 0; Kd < this.ZE.length; Kd++) {
            const dd = this.ZE[Kd];
            (!Fd || Fd && dd.isInFrustum(this._scene._frustumPlanes)) && this.render(dd, !!Od, md)
          }
        return void 0 !== dd && (Rd.currentRenderPassId = Xd), this
      }
      directRender() {
        if (!this.ZE) return this;
        for (const dd of this.ZE) this.render(dd, !1);
        return this
      }
      render(dd, Od, md) {
        const Wd = this.zV(),
          Fd = Wd.Iq();
        this._internalAbstractMeshDataInfo._isActiveIntermediate ? this._internalAbstractMeshDataInfo._isActiveIntermediate = !1 : this._internalAbstractMeshDataInfo._isActive = !1;
        const Rd = Wd.activeCameras?.length ?? 0,
          Xd = Rd > 1 && Wd.activeCamera === Wd.activeCameras[0] || Rd <= 1,
          Kd = this._occlusionDataStorage && -1 !== this._occlusionDataStorage.occlusionForRenderPassId && this._occlusionDataStorage.occlusionForRenderPassId !== Fd.currentRenderPassId;
        if (Xd && this._checkOcclusionQuery(Kd) && !this._occlusionDataStorage.forceRenderingWhenOccluded) return this;
        const hd = this._getInstancesRenderList(dd._id, !!md);
        if (hd.mustReturn) return this;
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        let vd = 0,
          Qd = null;
        this.ignoreCameraMaxZ && Wd.activeCamera && !Wd._isInIntermediateRendering() && (vd = Wd.activeCamera.maxZ, Qd = Wd.activeCamera, Wd.activeCamera.maxZ = 0, Wd.updateTransformMatrix(!0)), this._internalMeshDataInfo._onBeforeRenderObservable && this._internalMeshDataInfo._onBeforeRenderObservable.notifyObservers(this);
        const td = dd.getRenderingMesh(),
          od = hd.hardwareInstancedRendering[dd._id] || td.hasThinInstances || !!this._userInstancedBuffersStorage && !dd.getMesh()._internalAbstractMeshDataInfo._actAsRegularMesh,
          Nd = this._instanceDataStorage,
          qd = dd.fq();
        if (!qd) return Qd && (Qd.maxZ = vd, Wd.updateTransformMatrix(!0)), this;
        if (Nd.isFrozen && this._internalMeshDataInfo._effectiveMaterial && this._internalMeshDataInfo._effectiveMaterial === qd) {
          if (qd._storeEffectOnSubMeshes && !dd._drawWrapper?._wasPreviouslyReady || !qd._storeEffectOnSubMeshes && !qd._getDrawWrapper()._wasPreviouslyReady) return Qd && (Qd.maxZ = vd, Wd.updateTransformMatrix(!0)), this
        } else {
          if (qd._storeEffectOnSubMeshes) {
            if (!qd.isReadyForSubMesh(this, dd, od)) return Qd && (Qd.maxZ = vd, Wd.updateTransformMatrix(!0)), this
          } else if (!qd.isReady(this, od)) return Qd && (Qd.maxZ = vd, Wd.updateTransformMatrix(!0)), this;
          this._internalMeshDataInfo._effectiveMaterial = qd
        }
        if (Od) {
          const dd = this._internalMeshDataInfo._effectiveMaterial;
          if (1 === dd.alphaModes.length) Fd.setAlphaMode(dd.alphaMode);
          else
            for (let Od = 0; Od < dd.alphaModes.length; Od++) {
              const md = dd.alphaModes[Od];
              Fd.setAlphaMode(void 0 !== md ? md : 2, !1, Od)
            }
        }
        let Hd;
        Hd = this._internalMeshDataInfo._effectiveMaterial._storeEffectOnSubMeshes ? dd._drawWrapper : this._internalMeshDataInfo._effectiveMaterial._getDrawWrapper();
        const yd = Hd?.effect ?? null;
        for (let Ed = 0, Jd = Wd._beforeRenderingMeshStage; Ed < Jd.length; Ed++) {
          Jd[Ed].action(this, dd, hd, yd)
        }
        if (!Hd || !yd) return Qd && (Qd.maxZ = vd, Wd.updateTransformMatrix(!0)), this;
        const bd = md || this;
        let Td;
        if (!Nd.isFrozen && (this._internalMeshDataInfo._effectiveMaterial.backFaceCulling || null !== this._internalMeshDataInfo._effectiveMaterial.sideOrientation || this._internalMeshDataInfo._effectiveMaterial._twoSidedLighting)) {
          const dd = bd._getWorldMatrixDeterminant();
          Td = this._internalMeshDataInfo._effectiveMaterial._getEffectiveOrientation(this), dd < 0 && (Td = Td === Ad.b.ClockWiseSideOrientation ? Ad.b.CounterClockWiseSideOrientation : Ad.b.ClockWiseSideOrientation), this._internalMeshDataInfo._effectiveSideOrientation = Td
        }
        const pd = this._internalMeshDataInfo._effectiveMaterial._preBind(Hd, this._internalMeshDataInfo._effectiveSideOrientation);
        this._internalMeshDataInfo._effectiveMaterial.forceDepthWrite && Fd.setDepthWrite(!0);
        const Yd = this._internalMeshDataInfo._effectiveMaterial,
          gd = Yd.fillMode;
        this._internalMeshDataInfo._onBeforeBindObservable && this._internalMeshDataInfo._onBeforeBindObservable.notifyObservers(this), od || this._bind(dd, yd, gd, !1);
        const wd = bd.getWorldMatrix();
        Yd._storeEffectOnSubMeshes ? Yd.bindForSubMesh(wd, this, dd) : Yd.bind(wd, this);
        try {
          rd.c._BindAttachmentsForEffect(Fd, yd) && (!Yd.backFaceCulling && Yd.separateCullingPass && (Fd.setState(!0, Yd.zOffset, !1, !pd, Yd.cullBackFaces, Yd.stencil, Yd.zOffsetUnits), this._processRendering(this, dd, yd, gd, hd, od, this._onBeforeDraw, this._internalMeshDataInfo._effectiveMaterial), Fd.setState(!0, Yd.zOffset, !1, pd, Yd.cullBackFaces, Yd.stencil, Yd.zOffsetUnits), this._internalMeshDataInfo._onBetweenPassObservable && this._internalMeshDataInfo._onBetweenPassObservable.notifyObservers(dd)), this._processRendering(this, dd, yd, gd, hd, od, this._onBeforeDraw, this._internalMeshDataInfo._effectiveMaterial))
        } finally {
          rd.c._RestoreAttachments(Fd)
        }
        this._internalMeshDataInfo._effectiveMaterial.unbind();
        for (let Ed = 0, Jd = Wd._afterRenderingMeshStage; Ed < Jd.length; Ed++) {
          Jd[Ed].action(this, dd, hd, yd)
        }
        return this._internalMeshDataInfo._onAfterRenderObservable && this._internalMeshDataInfo._onAfterRenderObservable.notifyObservers(this), Qd && (Qd.maxZ = vd, Wd.updateTransformMatrix(!0)), 2 !== Wd.performancePriority || Nd.isFrozen || this._freeze(), this
      }
      _renderRunFollower(dd, Od) {
        const md = this._scene,
          Wd = md._engine;
        if (Wd.isWebGPU || dd._mesh !== this || 0 !== this.instances.length || this.render !== Md.prototype.render) return !1;
        const Fd = dd.fq();
        if (!Fd || Fd !== md._cachedMaterial || void 0 === Fd._canBindRunFollower) return !1;
        const Rd = dd._drawWrapper,
          Xd = Rd?.effect;
        if (!Xd || Xd !== md._cachedEffect || this.visibility !== md._cachedVisibility || Rd._forceRebindOnNextCall) return !1;
        const Kd = this.hasThinInstances;
        if (!Kd && this._userInstancedBuffersStorage) return !1;
        if (!Rd._wasPreviouslyReady || Rd._wasPreviouslyUsingInstances !== Kd) return !1;
        const hd = this._internalMeshDataInfo;
        if (this.ignoreCameraMaxZ || this.morphTargetManager || this._instanceDataStorage.isFrozen || md._isInIntermediateRendering() || 0 !== md._beforeRenderingMeshStage.length || 0 !== md._afterRenderingMeshStage.length || hd._onBeforeRenderObservable?.hasObservers() || hd._onBeforeBindObservable?.hasObservers() || hd._onAfterRenderObservable?.hasObservers()) return !1;
        const vd = this.occlusionType;
        if (void 0 !== vd && vd !== ud.b.OCCLUSION_TYPE_NONE || !Fd._canBindRunFollower(md, Wd, this, dd, Xd)) return !1;
        const Qd = this._internalAbstractMeshDataInfo,
          td = Qd._isActiveIntermediate;
        td ? Qd._isActiveIntermediate = !1 : Qd._isActive = !1;
        const od = md.activeCameras?.length ?? 0;
        (od > 1 && md.activeCamera === md.activeCameras[0] || od <= 1) && this._checkOcclusionQuery(!1);
        const Nd = this._getInstancesRenderList(dd._id);
        if (Nd.mustReturn) return !0;
        if (!Kd && !Nd.renderSelf[dd._id]) return td ? Qd._isActiveIntermediate = !0 : Qd._isActive = !0, !1;
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return !0;
        if (hd._effectiveMaterial = Fd, Od)
          if (1 === Fd.alphaModes.length) Wd.setAlphaMode(Fd.alphaMode);
          else
            for (let Hd = 0; Hd < Fd.alphaModes.length; Hd++) {
              const dd = Fd.alphaModes[Hd];
              Wd.setAlphaMode(void 0 !== dd ? dd : 2, !1, Hd)
            }
        if (Fd.backFaceCulling || null !== Fd.sideOrientation || Fd._twoSidedLighting) {
          const dd = this._getWorldMatrixDeterminant();
          let Od = Fd._getEffectiveOrientation(this);
          dd < 0 && (Od = Od === Ad.b.ClockWiseSideOrientation ? Ad.b.CounterClockWiseSideOrientation : Ad.b.ClockWiseSideOrientation), hd._effectiveSideOrientation = Od
        }
        Fd._preBind(Rd, hd._effectiveSideOrientation), Fd.forceDepthWrite && Wd.setDepthWrite(!0);
        const qd = Fd.fillMode;
        return Kd || this._bind(dd, Xd, qd, !1), Fd._bindRunFollower(this.getWorldMatrix(), this, dd, Xd), this._processRendering(this, dd, Xd, qd, Nd, Kd, this._onBeforeDraw, Fd), Fd.unbind(), 2 === md.performancePriority && this._freeze(), !0
      }
      cleanMatrixWeights() {
        this.isVerticesDataPresent(Bd.j.MatricesWeightsKind) && (this.isVerticesDataPresent(Bd.j.MatricesWeightsExtraKind) ? this._normalizeSkinWeightsAndExtra() : this._normalizeSkinFourWeights())
      }
      _normalizeSkinFourWeights() {
        const dd = this.getVerticesData(Bd.j.MatricesWeightsKind),
          Od = dd.length;
        for (let md = 0; md < Od; md += 4) {
          const Od = dd[md] + dd[md + 1] + dd[md + 2] + dd[md + 3];
          if (0 === Od) dd[md] = 1;
          else {
            const Wd = 1 / Od;
            dd[md] *= Wd, dd[md + 1] *= Wd, dd[md + 2] *= Wd, dd[md + 3] *= Wd
          }
        }
        this.setVerticesData(Bd.j.MatricesWeightsKind, dd)
      }
      _normalizeSkinWeightsAndExtra() {
        const dd = this.getVerticesData(Bd.j.MatricesWeightsExtraKind),
          Od = this.getVerticesData(Bd.j.MatricesWeightsKind),
          md = Od.length;
        for (let Wd = 0; Wd < md; Wd += 4) {
          let md = Od[Wd] + Od[Wd + 1] + Od[Wd + 2] + Od[Wd + 3];
          if (md += dd[Wd] + dd[Wd + 1] + dd[Wd + 2] + dd[Wd + 3], 0 === md) Od[Wd] = 1;
          else {
            const Fd = 1 / md;
            Od[Wd] *= Fd, Od[Wd + 1] *= Fd, Od[Wd + 2] *= Fd, Od[Wd + 3] *= Fd, dd[Wd] *= Fd, dd[Wd + 1] *= Fd, dd[Wd + 2] *= Fd, dd[Wd + 3] *= Fd
          }
        }
        this.setVerticesData(Bd.j.MatricesWeightsKind, Od), this.setVerticesData(Bd.j.MatricesWeightsKind, dd)
      }
      validateSkinning() {
        const dd = this.getVerticesData(Bd.j.MatricesWeightsExtraKind),
          Od = this.getVerticesData(Bd.j.MatricesWeightsKind);
        if (null === Od || null == this.skeleton) return {
          skinned: !1,
          valid: !0,
          Wt: "not skinned"
        };
        const md = Od.length;
        let Wd = 0,
          Fd = 0,
          Rd = 0,
          Xd = 0;
        const Kd = null === dd ? 4 : 8,
          hd = [];
        for (let Nd = 0; Nd <= Kd; Nd++) hd[Nd] = 0;
        for (let Nd = 0; Nd < md; Nd += 4) {
          let md = Od[Nd],
            vd = md,
            Qd = 0 === vd ? 0 : 1;
          for (let Fd = 1; Fd < Kd; Fd++) {
            const Rd = Fd < 4 ? Od[Nd + Fd] : dd[Nd + Fd - 4];
            Rd > md && Wd++, 0 !== Rd && Qd++, vd += Rd, md = Rd
          }
          if (hd[Qd]++, Qd > Rd && (Rd = Qd), 0 === vd) Fd++;
          else {
            const md = 1 / vd;
            let Wd = 0;
            for (let Fd = 0; Fd < Kd; Fd++) Wd += Fd < 4 ? Math.abs(Od[Nd + Fd] - Od[Nd + Fd] * md) : Math.abs(dd[Nd + Fd - 4] - dd[Nd + Fd - 4] * md);
            Wd > .001 && Xd++
          }
        }
        const vd = this.skeleton.bones.length,
          Qd = this.getVerticesData(Bd.j.MatricesIndicesKind),
          td = this.getVerticesData(Bd.j.MatricesIndicesExtraKind);
        let od = 0;
        for (let Nd = 0; Nd < md; Nd += 4)
          for (let dd = 0; dd < Kd; dd++) {
            const Od = dd < 4 ? Qd[Nd + dd] : td[Nd + dd - 4];
            (Od >= vd || Od < 0) && od++
          }
        return {
          skinned: !0,
          valid: 0 === Fd && 0 === Xd && 0 === od,
          Wt: "Number of Weights = " + md / 4 + "\nMaximum influences = " + Rd + "\nMissing Weights = " + Fd + "\nNot Sorted = " + Wd + "\nNot Normalized = " + Xd + "\nWeightCounts = [" + hd + "]\nNumber of bones = " + vd + "\nBad Bone Indices = " + od
        }
      }
      _checkDelayState() {
        const dd = this.zV();
        return this._geometry ? this._geometry.load(dd) : 4 === this.delayLoadState && (this.delayLoadState = 2, this._queueLoad(dd)), this
      }
      _queueLoad(dd) {
        dd.addPendingData(this);
        const Od = -1 !== this.delayLoadingFile.indexOf(".babylonbinarymeshdata");
        return (async () => {
          try {
            const md = await dd._loadDelayedFileAsync(this.delayLoadingFile, Od, !0);
            md instanceof ArrayBuffer ? this._delayLoadingFunction(md, this) : this._delayLoadingFunction(JSON.parse(md), this);
            for (const dd of this.instances) dd.refreshBoundingInfo(), dd._syncSubMeshes();
            this.delayLoadState = 1, dd.removePendingData(this)
          } catch (md) {
            dd.removePendingData(this), dd.yJ || Pd.c.Error(`Unable to delay load geometry data for mesh "${this.name}" from "${this.delayLoadingFile}": ${md}`)
          }
        })(), this
      }
      isInFrustum(dd) {
        return 2 !== this.delayLoadState && (!!super.isInFrustum(dd) && (this._checkDelayState(), !0))
      }
      setMaterialById(dd) {
        const Od = this.zV().materials;
        let md;
        for (md = Od.length - 1; md > -1; md--)
          if (Od[md].id === dd) return this.material = Od[md], this;
        const Wd = this.zV().multiMaterials;
        for (md = Wd.length - 1; md > -1; md--)
          if (Wd[md].id === dd) return this.material = Wd[md], this;
        return this
      }
      getAnimatables() {
        const dd = [];
        return this.material && dd.push(this.material), this.skeleton && dd.push(this.skeleton), dd
      }
      bakeTransformIntoVertices(dd) {
        if (!this.isVerticesDataPresent(Bd.j.PositionKind)) return this;
        const Od = this.ZE.splice(0);
        this._resetPointsArrayCache();
        let md = this.getVerticesData(Bd.j.PositionKind);
        const Wd = Jd.j.Zero();
        let Fd;
        for (Fd = 0; Fd < md.length; Fd += 3) Jd.j.TransformCoordinatesFromFloatsToRef(md[Fd], md[Fd + 1], md[Fd + 2], dd, Wd).toArray(md, Fd);
        if (this.setVerticesData(Bd.j.PositionKind, md, this.getVertexBuffer(Bd.j.PositionKind).isUpdatable()), this.isVerticesDataPresent(Bd.j.NormalKind)) {
          for (md = this.getVerticesData(Bd.j.NormalKind), Fd = 0; Fd < md.length; Fd += 3) Jd.j.TransformNormalFromFloatsToRef(md[Fd], md[Fd + 1], md[Fd + 2], dd, Wd).normalize().toArray(md, Fd);
          this.setVerticesData(Bd.j.NormalKind, md, this.getVertexBuffer(Bd.j.NormalKind).isUpdatable())
        }
        if (this.isVerticesDataPresent(Bd.j.TangentKind)) {
          for (md = this.getVerticesData(Bd.j.TangentKind), Fd = 0; Fd < md.length; Fd += 4) Jd.j.TransformNormalFromFloatsToRef(md[Fd], md[Fd + 1], md[Fd + 2], dd, Wd).normalize().toArray(md, Fd);
          this.setVerticesData(Bd.j.TangentKind, md, this.getVertexBuffer(Bd.j.TangentKind).isUpdatable())
        }
        return dd.determinant() < 0 && this.flipFaces(), this.releaseSubMeshes(), this.ZE = Od, this
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
          Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          md = arguments.length > 2 ? arguments[2] : void 0,
          Wd = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        if (Od && void 0 === Od._addToSceneRootNodes) {
          const md = Od;
          return fd.source = this, fd.doNotCloneChildren = md.doNotCloneChildren, fd.clonePhysicsImpostor = md.clonePhysicsImpostor, fd.cloneThinInstances = md.cloneThinInstances, new Md(dd, this.zV(), fd)
        }
        return new Md(dd, this.zV(), Od, this, md, Wd)
      }
      dispose(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.morphTargetManager = null, this._geometry && this._geometry.releaseForMesh(this, !0);
        const md = this._internalMeshDataInfo;
        if (md._onBeforeDrawObservable && md._onBeforeDrawObservable.clear(), md._onBeforeBindObservable && md._onBeforeBindObservable.clear(), md._onBeforeRenderObservable && md._onBeforeRenderObservable.clear(), md._onAfterRenderObservable && md._onAfterRenderObservable.clear(), md._onBetweenPassObservable && md._onBetweenPassObservable.clear(), this._scene.useClonedMeshMap) {
          if (md.meshMap)
            for (const dd in md.meshMap) {
              const Od = md.meshMap[dd];
              Od && (Od._internalMeshDataInfo._source = null, md.meshMap[dd] = void 0)
            }
          md._source && md._source._internalMeshDataInfo.meshMap && (md._source._internalMeshDataInfo.meshMap[this.uniqueId] = void 0)
        } else {
          const dd = this.zV().meshes;
          for (const Od of dd) {
            const dd = Od;
            dd._internalMeshDataInfo && dd._internalMeshDataInfo._source && dd._internalMeshDataInfo._source === this && (dd._internalMeshDataInfo._source = null)
          }
        }
        md._source = null, this._disposeInstanceSpecificData(), this._disposeThinInstanceSpecificData(), this._internalMeshDataInfo._checkReadinessObserver && this._scene.onBeforeRenderObservable.remove(this._internalMeshDataInfo._checkReadinessObserver), super.dispose(dd, Od)
      }
      _disposeInstanceSpecificData() {}
      _disposeThinInstanceSpecificData() {}
      _invalidateInstanceVertexArrayObject() {}
      applyDisplacementMap(dd, Od, md, Wd, Fd, Rd) {
        let Xd = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          Kd = arguments.length > 7 ? arguments[7] : void 0;
        const hd = this.zV();
        return (0, pd.h)(dd, (dd => {
          const Kd = dd.width,
            hd = dd.height,
            vd = this.Iq().createCanvas(Kd, hd).getContext("2d");
          vd.drawImage(dd, 0, 0);
          const Qd = vd.getImageData(0, 0, Kd, hd).data;
          this.applyDisplacementMapFromBuffer(Qd, Kd, hd, Od, md, Fd, Rd, Xd), Wd && Wd(this)
        }), Kd || (() => {}), hd.offlineProvider), this
      }
      applyDisplacementMapFromBuffer(dd, Od, md, Wd, Fd, Rd, Xd) {
        let Kd = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
        if (!this.isVerticesDataPresent(Bd.j.PositionKind) || !this.isVerticesDataPresent(Bd.j.NormalKind) || !this.isVerticesDataPresent(Bd.j.UVKind)) return Pd.c.Warn("Cannot call applyDisplacementMap: Given mesh is not complete. Position, Normal or UV are missing"), this;
        const hd = this.getVerticesData(Bd.j.PositionKind, !0, !0),
          vd = this.getVerticesData(Bd.j.NormalKind),
          Qd = this.getVerticesData(Bd.j.UVKind);
        let td = Jd.j.Zero();
        const od = Jd.j.Zero(),
          Nd = Jd.i.Zero();
        Rd = Rd || Jd.i.Zero(), Xd = Xd || new Jd.i(1, 1);
        for (let qd = 0; qd < hd.length; qd += 3) {
          Jd.j.FromArrayToRef(hd, qd, td), Jd.j.FromArrayToRef(vd, qd, od), Jd.i.FromArrayToRef(Qd, qd / 3 * 2, Nd);
          const Kd = 4 * ((Math.abs(Nd.x * Xd.x + Rd.x % 1) * (Od - 1) % Od | 0) + (Math.abs(Nd.y * Xd.y + Rd.y % 1) * (md - 1) % md | 0) * Od),
            Hd = .3 * (dd[Kd] / 255) + .59 * (dd[Kd + 1] / 255) + .11 * (dd[Kd + 2] / 255);
          od.normalize(), od.scaleInPlace(Wd + (Fd - Wd) * Hd), td = td.add(od), td.toArray(hd, qd)
        }
        return Sd.c.ComputeNormals(hd, this.jRd(), vd), Kd ? (this.setVerticesData(Bd.j.PositionKind, hd), this.setVerticesData(Bd.j.NormalKind, vd), this.setVerticesData(Bd.j.UVKind, Qd)) : (this.updateVerticesData(Bd.j.PositionKind, hd), this.updateVerticesData(Bd.j.NormalKind, vd)), this
      }
      _getFlattenedNormals(dd, Od) {
        const md = new Float32Array(3 * dd.length);
        let Wd = 0;
        const Fd = this.sideOrientation === (this._scene.useRightHandedSystem ? 1 : 0);
        for (let Rd = 0; Rd < dd.length; Rd += 3) {
          const Xd = Jd.j.FromArray(Od, 3 * dd[Rd]),
            Kd = Jd.j.FromArray(Od, 3 * dd[Rd + 1]),
            hd = Jd.j.FromArray(Od, 3 * dd[Rd + 2]),
            vd = Xd.subtract(Kd),
            Qd = hd.subtract(Kd),
            td = Jd.j.Normalize(Jd.j.Cross(vd, Qd));
          Fd && td.scaleInPlace(-1);
          for (let dd = 0; dd < 3; dd++) md[Wd++] = td.x, md[Wd++] = td.y, md[Wd++] = td.z
        }
        return md
      }
      _convertToUnIndexedMesh() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const Od = this.getVerticesDataKinds().filter((dd => !this.getVertexBuffer(dd)?.getIsInstanced())),
          md = this.jRd(!1, !0),
          Wd = {},
          Fd = (dd, Od) => {
            const Wd = new Float32Array(md.length * Od);
            let Fd = 0;
            for (let Rd = 0; Rd < md.length; Rd++)
              for (let Xd = 0; Xd < Od; Xd++) Wd[Fd++] = dd[md[Rd] * Od + Xd];
            return Wd
          },
          Rd = this.iG(),
          Xd = this.geometry ? this.ZE.slice(0) : [];
        for (const Kd of Od) Wd[Kd] = this.getVerticesData(Kd);
        for (const Kd of Od) {
          const Od = this.getVertexBuffer(Kd),
            Rd = Od.getSize();
          if (dd && Kd === Bd.j.NormalKind) {
            const dd = this._getFlattenedNormals(md, Wd[Bd.j.PositionKind]);
            this.setVerticesData(Bd.j.NormalKind, dd, Od.isUpdatable(), Rd)
          } else this.setVerticesData(Kd, Fd(Wd[Kd], Rd), Od.isUpdatable(), Rd)
        }
        if (this.morphTargetManager) {
          for (let Od = 0; Od < this.morphTargetManager.numTargets; Od++) {
            const Wd = this.morphTargetManager.getTarget(Od),
              Rd = Wd.getPositions();
            Wd.vhd(Fd(Rd, 3));
            const Xd = Wd.getNormals();
            Xd && Wd.setNormals(dd ? this._getFlattenedNormals(md, Rd) : Fd(Xd, 3));
            const Kd = Wd.getTangents();
            Kd && Wd.setTangents(Fd(Kd, 3));
            const hd = Wd.getUVs();
            hd && Wd.setUVs(Fd(hd, 2));
            const vd = Wd.getColors();
            vd && Wd.setColors(Fd(vd, 4))
          }
          this.morphTargetManager.synchronize()
        }
        for (let Kd = 0; Kd < md.length; Kd++) md[Kd] = Kd;
        this.setIndices(md), this._unIndexed = !0, this.releaseSubMeshes();
        for (const Kd of Xd) {
          const dd = Kd.iG();
          Vd.d.AddToMesh(Kd.materialIndex, Kd.indexStart, Kd.indexCount, Kd.indexStart, Kd.indexCount, this).setBoundingInfo(dd)
        }
        return this.setBoundingInfo(Rd), this.synchronizeInstances(), this
      }
      convertToFlatShadedMesh() {
        return this._convertToUnIndexedMesh(!0)
      }
      convertToUnIndexedMesh() {
        return this._convertToUnIndexedMesh()
      }
      flipFaces() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const Od = Sd.c.ExtractFromMesh(this);
        let md;
        if (dd && this.isVerticesDataPresent(Bd.j.NormalKind) && Od.normals) {
          for (md = 0; md < Od.normals.length; md++) Od.normals[md] *= -1;
          this.setVerticesData(Bd.j.NormalKind, Od.normals, this.isVertexBufferUpdatable(Bd.j.NormalKind))
        }
        if (Od.indices) {
          let dd;
          for (md = 0; md < Od.indices.length; md += 3) dd = Od.indices[md + 1], Od.indices[md + 1] = Od.indices[md + 2], Od.indices[md + 2] = dd;
          this.setIndices(Od.indices, null, this.isVertexBufferUpdatable(Bd.j.PositionKind), !0)
        }
        return this
      }
      increaseVertices() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        const Od = Sd.c.ExtractFromMesh(this),
          md = Od.indices && !Array.isArray(Od.indices) && Array.from ? Array.from(Od.indices) : Od.indices,
          Wd = Od.positions && !Array.isArray(Od.positions) && Array.from ? Array.from(Od.positions) : Od.positions,
          Fd = Od.uvs && !Array.isArray(Od.uvs) && Array.from ? Array.from(Od.uvs) : Od.uvs,
          Rd = Od.normals && !Array.isArray(Od.normals) && Array.from ? Array.from(Od.normals) : Od.normals;
        if (md && Wd) {
          Od.indices = md, Od.positions = Wd, Fd && (Od.uvs = Fd), Rd && (Od.normals = Rd);
          const Xd = dd + 1,
            Kd = [];
          for (let dd = 0; dd < Xd + 1; dd++) Kd[dd] = [];
          let hd, vd;
          const Qd = new Jd.j(0, 0, 0),
            td = new Jd.j(0, 0, 0),
            od = new Jd.i(0, 0),
            Nd = [],
            qd = [],
            Hd = [];
          let yd, bd, Td, pd = Wd.length;
          Fd && (bd = Fd.length), Rd && (Td = Rd.length);
          for (let dd = 0; dd < md.length; dd += 3) {
            qd[0] = md[dd], qd[1] = md[dd + 1], qd[2] = md[dd + 2];
            for (let dd = 0; dd < 3; dd++)
              if (hd = qd[dd], vd = qd[(dd + 1) % 3], void 0 === Hd[hd] && void 0 === Hd[vd] ? (Hd[hd] = [], Hd[vd] = []) : (void 0 === Hd[hd] && (Hd[hd] = []), void 0 === Hd[vd] && (Hd[vd] = [])), void 0 === Hd[hd][vd] && void 0 === Hd[vd][hd]) {
                Hd[hd][vd] = [], Qd.x = (Wd[3 * vd] - Wd[3 * hd]) / Xd, Qd.y = (Wd[3 * vd + 1] - Wd[3 * hd + 1]) / Xd, Qd.z = (Wd[3 * vd + 2] - Wd[3 * hd + 2]) / Xd, Rd && (td.x = (Rd[3 * vd] - Rd[3 * hd]) / Xd, td.y = (Rd[3 * vd + 1] - Rd[3 * hd + 1]) / Xd, td.z = (Rd[3 * vd + 2] - Rd[3 * hd + 2]) / Xd), Fd && (od.x = (Fd[2 * vd] - Fd[2 * hd]) / Xd, od.y = (Fd[2 * vd + 1] - Fd[2 * hd + 1]) / Xd), Hd[hd][vd].push(hd);
                for (let dd = 1; dd < Xd; dd++) Hd[hd][vd].push(Wd.length / 3), Wd[pd++] = Wd[3 * hd] + dd * Qd.x, Wd[pd++] = Wd[3 * hd + 1] + dd * Qd.y, Wd[pd++] = Wd[3 * hd + 2] + dd * Qd.z, Rd && (Rd[Td++] = Rd[3 * hd] + dd * td.x, Rd[Td++] = Rd[3 * hd + 1] + dd * td.y, Rd[Td++] = Rd[3 * hd + 2] + dd * td.z), Fd && (Fd[bd++] = Fd[2 * hd] + dd * od.x, Fd[bd++] = Fd[2 * hd + 1] + dd * od.y);
                Hd[hd][vd].push(vd), Hd[vd][hd] = [], yd = Hd[hd][vd].length;
                for (let dd = 0; dd < yd; dd++) Hd[vd][hd][dd] = Hd[hd][vd][yd - 1 - dd]
              } Kd[0][0] = md[dd], Kd[1][0] = Hd[md[dd]][md[dd + 1]][1], Kd[1][1] = Hd[md[dd]][md[dd + 2]][1];
            for (let Od = 2; Od < Xd; Od++) {
              Kd[Od][0] = Hd[md[dd]][md[dd + 1]][Od], Kd[Od][Od] = Hd[md[dd]][md[dd + 2]][Od], Qd.x = (Wd[3 * Kd[Od][Od]] - Wd[3 * Kd[Od][0]]) / Od, Qd.y = (Wd[3 * Kd[Od][Od] + 1] - Wd[3 * Kd[Od][0] + 1]) / Od, Qd.z = (Wd[3 * Kd[Od][Od] + 2] - Wd[3 * Kd[Od][0] + 2]) / Od, Rd && (td.x = (Rd[3 * Kd[Od][Od]] - Rd[3 * Kd[Od][0]]) / Od, td.y = (Rd[3 * Kd[Od][Od] + 1] - Rd[3 * Kd[Od][0] + 1]) / Od, td.z = (Rd[3 * Kd[Od][Od] + 2] - Rd[3 * Kd[Od][0] + 2]) / Od), Fd && (od.x = (Fd[2 * Kd[Od][Od]] - Fd[2 * Kd[Od][0]]) / Od, od.y = (Fd[2 * Kd[Od][Od] + 1] - Fd[2 * Kd[Od][0] + 1]) / Od);
              for (let dd = 1; dd < Od; dd++) Kd[Od][dd] = Wd.length / 3, Wd[pd++] = Wd[3 * Kd[Od][0]] + dd * Qd.x, Wd[pd++] = Wd[3 * Kd[Od][0] + 1] + dd * Qd.y, Wd[pd++] = Wd[3 * Kd[Od][0] + 2] + dd * Qd.z, Rd && (Rd[Td++] = Rd[3 * Kd[Od][0]] + dd * td.x, Rd[Td++] = Rd[3 * Kd[Od][0] + 1] + dd * td.y, Rd[Td++] = Rd[3 * Kd[Od][0] + 2] + dd * td.z), Fd && (Fd[bd++] = Fd[2 * Kd[Od][0]] + dd * od.x, Fd[bd++] = Fd[2 * Kd[Od][0] + 1] + dd * od.y)
            }
            Kd[Xd] = Hd[md[dd + 1]][md[dd + 2]], Nd.push(Kd[0][0], Kd[1][0], Kd[1][1]);
            for (let dd = 1; dd < Xd; dd++) {
              let Od;
              for (Od = 0; Od < dd; Od++) Nd.push(Kd[dd][Od], Kd[dd + 1][Od], Kd[dd + 1][Od + 1]), Nd.push(Kd[dd][Od], Kd[dd + 1][Od + 1], Kd[dd][Od + 1]);
              Nd.push(Kd[dd][Od], Kd[dd + 1][Od], Kd[dd + 1][Od + 1])
            }
          }
          Od.indices = Nd, Od.applyToMesh(this, this.isVertexBufferUpdatable(Bd.j.PositionKind))
        } else Pd.c.Warn("Couldn't increase number of vertices : VertexData must contain at least indices and positions")
      }
      forceSharedVertices() {
        const dd = Sd.c.ExtractFromMesh(this),
          Od = dd.uvs,
          md = dd.indices,
          Wd = dd.positions,
          Fd = dd.colors,
          Rd = dd.matricesIndices,
          Xd = dd.matricesWeights,
          Kd = dd.matricesIndicesExtra,
          hd = dd.matricesWeightsExtra;
        if (void 0 === md || void 0 === Wd || null === md || null === Wd) Pd.c.Warn("VertexData contains empty entries");
        else {
          const vd = [],
            Qd = [],
            td = [],
            od = [],
            Nd = [],
            qd = [],
            Hd = [],
            yd = [];
          let bd, Td = 0;
          const pd = {};
          let Yd, gd;
          for (let dd = 0; dd < md.length; dd += 3) {
            gd = [md[dd], md[dd + 1], md[dd + 2]], bd = [];
            for (let dd = 0; dd < 3; dd++) {
              bd[dd] = "";
              for (let Od = 0; Od < 3; Od++) Math.abs(Wd[3 * gd[dd] + Od]) < 1e-8 && (Wd[3 * gd[dd] + Od] = 0), bd[dd] += Wd[3 * gd[dd] + Od] + "|"
            }
            if (bd[0] != bd[1] && bd[0] != bd[2] && bd[1] != bd[2])
              for (let dd = 0; dd < 3; dd++) {
                if (Yd = pd[bd[dd]], void 0 === Yd) {
                  pd[bd[dd]] = Td, Yd = Td++;
                  for (let Od = 0; Od < 3; Od++) vd.push(Wd[3 * gd[dd] + Od]);
                  if (null !== Fd && void 0 !== Fd)
                    for (let Od = 0; Od < 4; Od++) od.push(Fd[4 * gd[dd] + Od]);
                  if (null !== Od && void 0 !== Od)
                    for (let md = 0; md < 2; md++) td.push(Od[2 * gd[dd] + md]);
                  if (null !== Rd && void 0 !== Rd)
                    for (let Od = 0; Od < 4; Od++) Nd.push(Rd[4 * gd[dd] + Od]);
                  if (null !== Xd && void 0 !== Xd)
                    for (let Od = 0; Od < 4; Od++) qd.push(Xd[4 * gd[dd] + Od]);
                  if (null !== Kd && void 0 !== Kd)
                    for (let Od = 0; Od < 4; Od++) Hd.push(Kd[4 * gd[dd] + Od]);
                  if (null !== hd && void 0 !== hd)
                    for (let Od = 0; Od < 4; Od++) yd.push(hd[4 * gd[dd] + Od])
                }
                Qd.push(Yd)
              }
          }
          const wd = [];
          Sd.c.ComputeNormals(vd, Qd, wd), dd.positions = vd, dd.indices = Qd, dd.normals = wd, null !== Od && void 0 !== Od && (dd.uvs = td), null !== Fd && void 0 !== Fd && (dd.colors = od), null !== Rd && void 0 !== Rd && (dd.matricesIndices = Nd), null !== Xd && void 0 !== Xd && (dd.matricesWeights = qd), null !== Kd && void 0 !== Kd && (dd.matricesIndicesExtra = Hd), null !== Xd && void 0 !== Xd && (dd.matricesWeightsExtra = yd), dd.applyToMesh(this, this.isVertexBufferUpdatable(Bd.j.PositionKind))
        }
      }
      static _instancedMeshFactory(dd, Od) {
        throw (0, cd.m)("InstancedMesh")
      }
      static _PhysicsImpostorParser(dd, Od, md) {
        throw (0, cd.m)("PhysicsImpostor")
      }
      createInstance(dd) {
        const Od = Md._instancedMeshFactory(dd, this);
        return Od.parent = this.parent, Od
      }
      synchronizeInstances() {
        for (let dd = 0; dd < this.instances.length; dd++) {
          this.instances[dd]._syncSubMeshes()
        }
        return this
      }
      optimizeIndices(dd) {
        const Od = this.jRd(),
          md = this.getVerticesData(Bd.j.PositionKind);
        if (!md || !Od) return this;
        const Wd = [];
        for (let Rd = 0; Rd < md.length; Rd += 3) Wd.push(Jd.j.FromArray(md, Rd));
        const Fd = [];
        return Td.d.SyncAsyncForLoop(Wd.length, 40, (dd => {
          const Od = Wd.length - 1 - dd,
            md = Wd[Od];
          for (let Rd = 0; Rd < Od; ++Rd) {
            const dd = Wd[Rd];
            if (md.equals(dd)) {
              Fd[Od] = Rd;
              break
            }
          }
        }), (() => {
          for (let dd = 0; dd < Od.length; ++dd) Od[dd] = Fd[Od[dd]] || Od[dd];
          const md = this.ZE.slice(0);
          this.setIndices(Od), this.ZE = md, dd && dd(this)
        })), this
      }
      serialize() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        dd.name = this.name, dd.id = this.id, dd.uniqueId = this.uniqueId, dd.type = this.getClassName(), gd.c && gd.c.HasTags(this) && (dd.tags = gd.c.GetTags(this)), dd.position = this.position.RRd(), this.rotationQuaternion ? dd.rotationQuaternion = this.rotationQuaternion.RRd() : this.rotation && (dd.rotation = this.rotation.RRd()), dd.Tt = this.Tt.RRd(), this._postMultiplyPivotMatrix ? dd.pivotMatrix = this.getPivotMatrix().RRd() : dd.localMatrix = this.getPivotMatrix().RRd(), dd.isEnabled = this.isEnabled(!1), dd.isVisible = this.isVisible, dd.infiniteDistance = this.infiniteDistance, dd.pickable = this.my, dd.receiveShadows = this.receiveShadows, dd.billboardMode = this.billboardMode, dd.visibility = this.visibility, dd.lq = this.lq, dd.checkCollisions = this.checkCollisions, dd.ellipsoid = this.ellipsoid.RRd(), dd.ellipsoidOffset = this.ellipsoidOffset.RRd(), dd.kq = this.kq, dd.isBlocker = this.isBlocker, dd.sideOrientation = this.sideOrientation, this._isWorldMatrixFrozen && (dd.sA = !0), this.parent && this.parent._serializeAsParent(dd), dd.isUnIndexed = this.isUnIndexed;
        const Od = this._geometry;
        if (Od && this.ZE) {
          dd.geometryUniqueId = Od.uniqueId, dd.geometryId = Od.id, dd.ZE = [];
          for (let Od = 0; Od < this.ZE.length; Od++) {
            const md = this.ZE[Od];
            dd.ZE.push({
              materialIndex: md.materialIndex,
              verticesStart: md.verticesStart,
              verticesCount: md.verticesCount,
              indexStart: md.indexStart,
              indexCount: md.indexCount
            })
          }
        }
        if (this.material ? this.material.doNotSerialize || (dd.materialUniqueId = this.material.uniqueId, dd.materialId = this.material.id) : (this.material = null, dd.materialUniqueId = this._scene.defaultMaterial.uniqueId, dd.materialId = this._scene.defaultMaterial.id), this.morphTargetManager && (dd.morphTargetManagerId = this.morphTargetManager.uniqueId), this.skeleton && (dd.skeletonId = this.skeleton.id, dd.skeletonUniqueId = this.skeleton.uniqueId, dd.numBoneInfluencers = this.numBoneInfluencers), this.zV()._getComponent(jd.b.NAME_PHYSICSENGINE)) {
          const Od = this.getPhysicsImpostor?.();
          Od && (dd.physicsMass = Od.getParam("fX"), dd.physicsFriction = Od.getParam("friction"), dd.physicsRestitution = Od.getParam("fX"), dd.physicsImpostor = Od.type)
        }
        this.metadata && (dd.metadata = this.metadata), 0 !== this.meshBlendingTag && (dd.meshBlendingTag = this.meshBlendingTag), dd.instances = [];
        for (let md = 0; md < this.instances.length; md++) {
          const Od = this.instances[md];
          if (Od.doNotSerialize) continue;
          const Wd = {
            name: Od.name,
            id: Od.id,
            isEnabled: Od.isEnabled(!1),
            isVisible: Od.isVisible,
            my: Od.my,
            checkCollisions: Od.checkCollisions,
            position: Od.position.RRd(),
            Tt: Od.Tt.RRd()
          };
          if (Od.parent && Od.parent._serializeAsParent(Wd), Od.rotationQuaternion ? Wd.rotationQuaternion = Od.rotationQuaternion.RRd() : Od.rotation && (Wd.rotation = Od.rotation.RRd()), this.zV()._getComponent(jd.b.NAME_PHYSICSENGINE)) {
            const dd = Od.getPhysicsImpostor?.();
            dd && (Wd.physicsMass = dd.getParam("fX"), Wd.physicsFriction = dd.getParam("friction"), Wd.physicsRestitution = dd.getParam("fX"), Wd.physicsImpostor = dd.type)
          }
          Od.metadata && (Wd.metadata = Od.metadata), Od.actionManager && (Wd.actions = Od.actionManager.serialize(Od.name)), dd.instances.push(Wd), Ld.b.AppendSerializedAnimations(Od, Wd), Wd.By = Od.serializeAnimationRanges()
        }
        if (this._thinInstanceDataStorage.instancesCount && this._thinInstanceDataStorage.matrixData && (dd.thinInstances = {
            instancesCount: this._thinInstanceDataStorage.instancesCount,
            matrixData: Array.from(this._thinInstanceDataStorage.matrixData),
            matrixBufferSize: this._thinInstanceDataStorage.matrixBufferSize,
            enablePicking: this.kmd
          }, this._userThinInstanceBuffersStorage)) {
          const Od = {
            data: {},
            sizes: {},
            strides: {}
          };
          for (const dd in this._userThinInstanceBuffersStorage.data) Od.data[dd] = Array.from(this._userThinInstanceBuffersStorage.data[dd]), Od.sizes[dd] = this._userThinInstanceBuffersStorage.sizes[dd], Od.strides[dd] = this._userThinInstanceBuffersStorage.strides[dd];
          dd.thinInstances.userThinInstance = Od
        }
        return Ld.b.AppendSerializedAnimations(this, dd), dd.By = this.serializeAnimationRanges(), dd.layerMask = this.layerMask, dd.alphaIndex = this.alphaIndex, dd.hasVertexAlpha = this.hasVertexAlpha, dd.overlayAlpha = this.overlayAlpha, dd.overlayColor = this.overlayColor.RRd(), dd.renderOverlay = this.renderOverlay, dd.applyFog = this.applyFog, this.actionManager && (dd.actions = this.actionManager.serialize(this.name)), dd
      }
      _syncGeometryWithMorphTargetManager() {
        if (!this.geometry) return;
        this._markSubMeshesAsAttributesDirty();
        const dd = this._internalAbstractMeshDataInfo._morphTargetManager;
        if (dd && dd.vertexCount) {
          if (dd.vertexCount !== this.getTotalVertices()) return Pd.c.Error("Mesh is incompatible with morph targets. Targets and mesh must all have the same vertices count."), void(this.morphTargetManager = null);
          if (dd.isUsingTextureForTargets) return;
          for (let Od = 0; Od < dd.numInfluencers; Od++) {
            const md = dd.getActiveTarget(Od),
              Wd = md.getPositions();
            if (!Wd) return void Pd.c.Error("Invalid morph target. Target must have positions.");
            this.geometry.setVerticesData(Bd.j.PositionKind + Od, Wd, !1, 3);
            const Fd = md.getNormals();
            Fd && this.geometry.setVerticesData(Bd.j.NormalKind + Od, Fd, !1, 3);
            const Rd = md.getTangents();
            Rd && this.geometry.setVerticesData(Bd.j.TangentKind + Od, Rd, !1, 3);
            const Xd = md.getUVs();
            Xd && this.geometry.setVerticesData(Bd.j.UVKind + "_" + Od, Xd, !1, 2);
            const Kd = md.getUV2s();
            Kd && this.geometry.setVerticesData(Bd.j.UV2Kind + "_" + Od, Kd, !1, 2);
            const hd = md.getColors();
            hd && this.geometry.setVerticesData(Bd.j.ColorKind + Od, hd, !1, 4)
          }
        } else {
          let dd = 0;
          for (; this.geometry.isVerticesDataPresent(Bd.j.PositionKind + dd);) this.geometry.removeVerticesData(Bd.j.PositionKind + dd), this.geometry.isVerticesDataPresent(Bd.j.NormalKind + dd) && this.geometry.removeVerticesData(Bd.j.NormalKind + dd), this.geometry.isVerticesDataPresent(Bd.j.TangentKind + dd) && this.geometry.removeVerticesData(Bd.j.TangentKind + dd), this.geometry.isVerticesDataPresent(Bd.j.UVKind + "_" + dd) && this.geometry.removeVerticesData(Bd.j.UVKind + "_" + dd), this.geometry.isVerticesDataPresent(Bd.j.UV2Kind + "_" + dd) && this.geometry.removeVerticesData(Bd.j.UV2Kind + "_" + dd), this.geometry.isVerticesDataPresent(Bd.j.ColorKind + dd) && this.geometry.removeVerticesData(Bd.j.ColorKind + dd), dd++
        }
      }
      static Parse(dd, Od, md) {
        let Wd, Fd = !1;
        if (dd.type && "LinesMesh" === dd.type ? Wd = Md._LinesMeshParser(dd, Od) : dd.type && "GroundMesh" === dd.type ? Wd = Md._GroundMeshParser(dd, Od) : dd.type && "GoldbergMesh" === dd.type ? Wd = Md._GoldbergMeshParser(dd, Od) : dd.type && "GreasedLineMesh" === dd.type ? Wd = Md._GreasedLineMeshParser(dd, Od) : dd.type && "TrailMesh" === dd.type ? Wd = Md._TrailMeshParser(dd, Od) : dd.type && "GaussianSplattingMesh" === dd.type ? (Wd = dd._isCompound ? Md._GaussianSplattingCompoundMeshParser(dd, Od) : Md._GaussianSplattingMeshParser(dd, Od), Fd = !0) : dd.type && "GaussianSplattingPartProxyMesh" === dd.type ? (Wd = Md._GaussianSplattingPartProxyMeshParser(dd, Od), Fd = !0) : Wd = new Md(dd.name, Od), Wd.id = dd.id, Wd._waitingParsedUniqueId = dd.uniqueId, gd.c && gd.c.AddTagsTo(Wd, dd.tags), Wd.position = Jd.j.FromArray(dd.position), void 0 !== dd.metadata && (Wd.metadata = dd.metadata), void 0 !== dd.meshBlendingTag && (Wd.meshBlendingTag = dd.meshBlendingTag), dd.rotationQuaternion ? Wd.rotationQuaternion = Jd.e.FromArray(dd.rotationQuaternion) : dd.rotation && (Wd.rotation = Jd.j.FromArray(dd.rotation)), Wd.Tt = Jd.j.FromArray(dd.Tt), dd.localMatrix ? Wd.setPreTransformMatrix(Jd.d.FromArray(dd.localMatrix)) : dd.pivotMatrix && Wd.setPivotMatrix(Jd.d.FromArray(dd.pivotMatrix)), Wd.rY(dd.isEnabled), Wd.isVisible = dd.isVisible, Wd.infiniteDistance = dd.infiniteDistance, Wd.lq = !!dd.lq, Wd.showBoundingBox = dd.showBoundingBox, Wd.showSubMeshesBoundingBox = dd.showSubMeshesBoundingBox, void 0 !== dd.applyFog && (Wd.applyFog = dd.applyFog), void 0 !== dd.pickable && (Wd.my = dd.pickable), void 0 !== dd.alphaIndex && (Wd.alphaIndex = dd.alphaIndex), Wd.receiveShadows = dd.receiveShadows, void 0 !== dd.billboardMode && (Wd.billboardMode = dd.billboardMode), void 0 !== dd.visibility && (Wd.visibility = dd.visibility), Wd.checkCollisions = dd.checkCollisions, Wd.kq = !!dd.kq, dd.ellipsoid && (Wd.ellipsoid = Jd.j.FromArray(dd.ellipsoid)), dd.ellipsoidOffset && (Wd.ellipsoidOffset = Jd.j.FromArray(dd.ellipsoidOffset)), null != dd.overrideMaterialSideOrientation && (Wd.sideOrientation = dd.overrideMaterialSideOrientation), void 0 !== dd.sideOrientation && (Wd.sideOrientation = dd.sideOrientation), void 0 !== dd.isBlocker && (Wd.isBlocker = dd.isBlocker), Wd._shouldGenerateFlatShading = dd.useFlatShading, dd.sA && (Wd._waitingData.sA = dd.sA), void 0 !== dd.parentId && (Wd._waitingParentId = dd.parentId), void 0 !== dd.parentInstanceIndex && (Wd._waitingParentInstanceIndex = dd.parentInstanceIndex), void 0 !== dd.actions && (Wd._waitingData.actions = dd.actions), void 0 !== dd.overlayAlpha && (Wd.overlayAlpha = dd.overlayAlpha), void 0 !== dd.overlayColor && (Wd.overlayColor = Ud.d.FromArray(dd.overlayColor)), void 0 !== dd.renderOverlay && (Wd.renderOverlay = dd.renderOverlay), Wd.isUnIndexed = !!dd.isUnIndexed, Wd.hasVertexAlpha = dd.hasVertexAlpha, dd.delayLoadingFile ? (Wd.delayLoadState = 4, Wd.delayLoadingFile = md + dd.delayLoadingFile, Wd.buildBoundingInfo(Jd.j.FromArray(dd.boundingBoxMinimum), Jd.j.FromArray(dd.boundingBoxMaximum)), dd._binaryInfo && (Wd._binaryInfo = dd._binaryInfo), Wd._delayInfo = [], dd.hasUVs && Wd._delayInfo.push(Bd.j.UVKind), dd.hasUVs2 && Wd._delayInfo.push(Bd.j.UV2Kind), dd.hasUVs3 && Wd._delayInfo.push(Bd.j.UV3Kind), dd.hasUVs4 && Wd._delayInfo.push(Bd.j.UV4Kind), dd.hasUVs5 && Wd._delayInfo.push(Bd.j.UV5Kind), dd.hasUVs6 && Wd._delayInfo.push(Bd.j.UV6Kind), dd.hasColors && Wd._delayInfo.push(Bd.j.ColorKind), dd.hasMatricesIndices && Wd._delayInfo.push(Bd.j.MatricesIndicesKind), dd.hasMatricesWeights && Wd._delayInfo.push(Bd.j.MatricesWeightsKind), Wd._delayLoadingFunction = sd.c._ImportGeometry, nd.e.ForceFullSceneLoadingForIncremental && Wd._checkDelayState()) : Fd || sd.c._ImportGeometry(dd, Wd), dd.materialUniqueId ? Wd._waitingMaterialId = dd.materialUniqueId : dd.materialId && (Wd._waitingMaterialId = dd.materialId), dd.morphTargetManagerId > -1 && (Wd._waitingMorphTargetManagerId = dd.morphTargetManagerId), void 0 !== dd.skeletonId && null !== dd.skeletonId && (Wd.skeleton = Od.getLastSkeletonById(dd.skeletonId), Wd._waitingSkeletonId = dd.skeletonId, dd.numBoneInfluencers && (Wd.numBoneInfluencers = dd.numBoneInfluencers)), void 0 !== dd.skeletonUniqueId && null !== dd.skeletonUniqueId && (Wd._waitingSkeletonUniqueId = dd.skeletonUniqueId), dd.animations) {
          for (let Od = 0; Od < dd.animations.length; Od++) {
            const md = dd.animations[Od],
              Fd = (0, zd.c)("BABYLON.Animation");
            Fd && Wd.animations.push(Fd.Parse(md))
          }
          xd.b.ParseAnimationRanges(Wd, dd, Od)
        }
        if (dd.autoAnimate && Od.beginAnimation(Wd, dd.autoAnimateFrom, dd.autoAnimateTo, dd.autoAnimateLoop, dd.autoAnimateSpeed || 1), dd.layerMask && !isNaN(dd.layerMask) ? Wd.layerMask = Math.abs(parseInt(dd.layerMask)) : Wd.layerMask = 268435455, dd.physicsImpostor && (Wd.physicsImpostor = Md._PhysicsImpostorParser(Od, Wd, dd)), dd.lodMeshIds && (Wd._waitingData.lods = {
            ids: dd.lodMeshIds,
            distances: dd.lodDistances ? dd.lodDistances : null,
            coverages: dd.lodCoverages ? dd.lodCoverages : null
          }), dd.instances)
          for (let Rd = 0; Rd < dd.instances.length; Rd++) {
            const md = dd.instances[Rd],
              Fd = Wd.createInstance(md.name);
            if (md.id && (Fd.id = md.id), gd.c && (md.tags ? gd.c.AddTagsTo(Fd, md.tags) : gd.c.AddTagsTo(Fd, dd.tags)), Fd.position = Jd.j.FromArray(md.position), void 0 !== md.metadata && (Fd.metadata = md.metadata), void 0 !== md.parentId && (Fd._waitingParentId = md.parentId), void 0 !== md.parentInstanceIndex && (Fd._waitingParentInstanceIndex = md.parentInstanceIndex), void 0 !== md.isEnabled && null !== md.isEnabled && Fd.rY(md.isEnabled), void 0 !== md.isVisible && null !== md.isVisible && (Fd.isVisible = md.isVisible), void 0 !== md.my && null !== md.my && (Fd.my = md.my), md.rotationQuaternion ? Fd.rotationQuaternion = Jd.e.FromArray(md.rotationQuaternion) : md.rotation && (Fd.rotation = Jd.j.FromArray(md.rotation)), Fd.Tt = Jd.j.FromArray(md.Tt), void 0 != md.checkCollisions && null != md.checkCollisions && (Fd.checkCollisions = md.checkCollisions), void 0 != md.pickable && null != md.pickable && (Fd.my = md.pickable), void 0 != md.showBoundingBox && null != md.showBoundingBox && (Fd.showBoundingBox = md.showBoundingBox), void 0 != md.showSubMeshesBoundingBox && null != md.showSubMeshesBoundingBox && (Fd.showSubMeshesBoundingBox = md.showSubMeshesBoundingBox), void 0 != md.alphaIndex && null != md.showSubMeshesBoundingBox && (Fd.alphaIndex = md.alphaIndex), md.physicsImpostor && (Fd.physicsImpostor = Md._PhysicsImpostorParser(Od, Fd, md)), void 0 !== md.actions && (Fd._waitingData.actions = md.actions), md.animations) {
              for (let dd = 0; dd < md.animations.length; dd++) {
                const Od = md.animations[dd],
                  Wd = (0, zd.c)("BABYLON.Animation");
                Wd && Fd.animations.push(Wd.Parse(Od))
              }
              xd.b.ParseAnimationRanges(Fd, md, Od), md.autoAnimate && Od.beginAnimation(Fd, md.autoAnimateFrom, md.autoAnimateTo, md.autoAnimateLoop, md.autoAnimateSpeed || 1)
            }
          }
        if (dd.thinInstances) {
          const Od = dd.thinInstances;
          if (Wd.kmd = !!Od.enablePicking, Od.matrixData ? (Wd.OOd("matrix", new Float32Array(Od.matrixData), 16, !1), Wd._thinInstanceDataStorage.matrixBufferSize = Od.matrixBufferSize, Wd._thinInstanceDataStorage.instancesCount = Od.instancesCount) : Wd._thinInstanceDataStorage.matrixBufferSize = Od.matrixBufferSize, dd.thinInstances.userThinInstance) {
            const Od = dd.thinInstances.userThinInstance;
            for (const dd in Od.data) Wd.OOd(dd, new Float32Array(Od.data[dd]), Od.strides[dd], !1), Wd._userThinInstanceBuffersStorage.sizes[dd] = Od.sizes[dd]
          }
        }
        return Wd
      }
      setPositionsForCPUSkinning() {
        const dd = this._internalMeshDataInfo;
        if (!dd._sourcePositions) {
          const Od = this.getVerticesData(Bd.j.PositionKind);
          if (!Od) return dd._sourcePositions;
          dd._sourcePositions = new Float32Array(Od), this.isVertexBufferUpdatable(Bd.j.PositionKind) || this.setVerticesData(Bd.j.PositionKind, Od, !0)
        }
        return dd._sourcePositions
      }
      setNormalsForCPUSkinning() {
        const dd = this._internalMeshDataInfo;
        if (!dd._sourceNormals) {
          const Od = this.getVerticesData(Bd.j.NormalKind);
          if (!Od) return dd._sourceNormals;
          dd._sourceNormals = new Float32Array(Od), this.isVertexBufferUpdatable(Bd.j.NormalKind) || this.setVerticesData(Bd.j.NormalKind, Od, !0)
        }
        return dd._sourceNormals
      }
      applySkeleton(dd) {
        if (!this.geometry) return this;
        if (this.geometry._softwareSkinningFrameId == this.zV().getFrameId()) return this;
        if (this.geometry._softwareSkinningFrameId = this.zV().getFrameId(), !this.isVerticesDataPresent(Bd.j.PositionKind)) return this;
        if (!this.isVerticesDataPresent(Bd.j.MatricesIndicesKind)) return this;
        if (!this.isVerticesDataPresent(Bd.j.MatricesWeightsKind)) return this;
        const Od = this.isVerticesDataPresent(Bd.j.NormalKind),
          md = this._internalMeshDataInfo;
        if (!md._sourcePositions) {
          const dd = this.ZE.slice();
          this.setPositionsForCPUSkinning(), this.ZE = dd
        }
        Od && !md._sourceNormals && this.setNormalsForCPUSkinning();
        let Wd = this.getVerticesData(Bd.j.PositionKind);
        if (!Wd) return this;
        Wd instanceof Float32Array || (Wd = new Float32Array(Wd));
        let Fd = this.getVerticesData(Bd.j.NormalKind);
        if (Od) {
          if (!Fd) return this;
          Fd instanceof Float32Array || (Fd = new Float32Array(Fd))
        }
        const Rd = this.getVerticesData(Bd.j.MatricesIndicesKind),
          Xd = this.getVerticesData(Bd.j.MatricesWeightsKind);
        if (!Xd || !Rd) return this;
        const Kd = this.numBoneInfluencers > 4,
          hd = Kd ? this.getVerticesData(Bd.j.MatricesIndicesExtraKind) : null,
          vd = Kd ? this.getVerticesData(Bd.j.MatricesWeightsExtraKind) : null,
          Qd = dd.getTransformMatrices(this),
          td = Jd.j.Zero(),
          od = new Jd.d,
          Nd = new Jd.d;
        let qd, Hd = 0;
        for (let yd = 0; yd < Wd.length; yd += 3, Hd += 4) {
          let dd;
          for (qd = 0; qd < 4; qd++) dd = Xd[Hd + qd], dd > 0 && (Jd.d.FromFloat32ArrayToRefScaled(Qd, Math.floor(16 * Rd[Hd + qd]), dd, Nd), od.addToSelf(Nd));
          if (Kd)
            for (qd = 0; qd < 4; qd++) dd = vd[Hd + qd], dd > 0 && (Jd.d.FromFloat32ArrayToRefScaled(Qd, Math.floor(16 * hd[Hd + qd]), dd, Nd), od.addToSelf(Nd));
          Jd.j.TransformCoordinatesFromFloatsToRef(md._sourcePositions[yd], md._sourcePositions[yd + 1], md._sourcePositions[yd + 2], od, td), td.toArray(Wd, yd), Od && (Jd.j.TransformNormalFromFloatsToRef(md._sourceNormals[yd], md._sourceNormals[yd + 1], md._sourceNormals[yd + 2], od, td), td.toArray(Fd, yd)), od.reset()
        }
        return this.updateVerticesData(Bd.j.PositionKind, Wd), Od && this.updateVerticesData(Bd.j.NormalKind, Fd), this
      }
      static MinMax(dd) {
        let Od = null,
          md = null;
        for (const Wd of dd) {
          const dd = Wd.iG().boundingBox;
          Od && md ? (Od.minimizeInPlace(dd.minimumWorld), md.maximizeInPlace(dd.maximumWorld)) : (Od = dd.minimumWorld.clone(), md = dd.maximumWorld.clone())
        }
        return Od && md ? {
          min: Od,
          max: md
        } : {
          min: Jd.j.Zero(),
          max: Jd.j.Zero()
        }
      }
      static Center(dd) {
        const Od = dd instanceof Array ? Md.MinMax(dd) : dd;
        return Jd.j.Center(Od.min, Od.max)
      }
      static MergeMeshes(dd) {
        let Od = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          md = arguments.length > 2 ? arguments[2] : void 0,
          Wd = arguments.length > 3 ? arguments[3] : void 0,
          Fd = arguments.length > 4 ? arguments[4] : void 0,
          Rd = arguments.length > 5 ? arguments[5] : void 0;
        return (0, wd.l)(Md._MergeMeshesCoroutine(dd, Od, md, Wd, Fd, Rd, !1))
      }
      static async MergeMeshesAsync(dd) {
        let Od = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          md = arguments.length > 2 ? arguments[2] : void 0,
          Wd = arguments.length > 3 ? arguments[3] : void 0,
          Fd = arguments.length > 4 ? arguments[4] : void 0,
          Rd = arguments.length > 5 ? arguments[5] : void 0;
        return await (0, wd.h)(Md._MergeMeshesCoroutine(dd, Od, md, Wd, Fd, Rd, !0), (0, wd.b)())
      }
      static * _MergeMeshesCoroutine(dd) {
        let Od, md = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          Wd = arguments.length > 2 ? arguments[2] : void 0,
          Fd = arguments.length > 3 ? arguments[3] : void 0,
          Rd = arguments.length > 4 ? arguments[4] : void 0,
          Xd = arguments.length > 5 ? arguments[5] : void 0,
          Kd = arguments.length > 6 ? arguments[6] : void 0;
        if (0 === (dd = dd.filter(Boolean)).length) return null;
        if (!Wd) {
          let md = 0;
          for (Od = 0; Od < dd.length; Od++)
            if (md += dd[Od].getTotalVertices(), md >= 65536) return Pd.c.Warn("Cannot merge meshes because resulting mesh will have more than 65536 vertices. Please use allow32BitsIndices = true to use 32 bits indices"), null
        }
        const hd = dd[0];
        Xd && (Rd = !1, dd.sort(((dd, Od) => (dd.material?.uniqueId ?? -1) - (Od.material?.uniqueId ?? -1))));
        const vd = new Array,
          Qd = new Array,
          td = new Array,
          od = dd[0].sideOrientation;
        for (Od = 0; Od < dd.length; Od++) {
          const md = dd[Od];
          if (md.lV) return Pd.c.Warn("Cannot merge instance meshes."), null;
          if (od !== md.sideOrientation) return Pd.c.Warn("Cannot merge meshes with different sideOrientation values."), null;
          if (Rd || Xd) {
            const dd = td.reduce(((dd, Od) => Math.max(dd, Od.start + Od.count)), 0);
            if (Xd)
              if (md.material) {
                const Od = md.material;
                if (Od instanceof Gd.d) {
                  for (let dd = 0; dd < Od.WOd.length; dd++) vd.indexOf(Od.WOd[dd]) < 0 && vd.push(Od.WOd[dd]);
                  for (let Wd = 0; Wd < md.ZE.length; Wd++) Qd.push(vd.indexOf(Od.WOd[md.ZE[Wd].materialIndex])), td.push({
                    start: dd + md.ZE[Wd].indexStart,
                    count: md.ZE[Wd].indexCount
                  })
                } else {
                  vd.indexOf(Od) < 0 && vd.push(Od);
                  for (let Wd = 0; Wd < md.ZE.length; Wd++) Qd.push(vd.indexOf(Od)), td.push({
                    start: dd + md.ZE[Wd].indexStart,
                    count: md.ZE[Wd].indexCount
                  })
                }
              } else
                for (let Od = 0; Od < md.ZE.length; Od++) Qd.push(0), td.push({
                  start: dd + md.ZE[Od].indexStart,
                  count: md.ZE[Od].indexCount
                });
            else td.push({
              start: dd,
              count: md.getTotalIndices()
            })
          }
        }
        if (Xd && td.length > 1) {
          let dd = 0;
          for (let Od = 1; Od < td.length; Od++) {
            const md = td[dd],
              Wd = td[Od];
            Qd[Od] === Qd[dd] && md.start + md.count === Wd.start ? md.count += Wd.count : (dd++, td[dd] = Wd, Qd[dd] = Qd[Od])
          }
          td.length = dd + 1, Qd.length = dd + 1
        }
        const Nd = dd => {
            const Od = dd.computeWorldMatrix(!0);
            return {
              vertexData: Sd.c.ExtractFromMesh(dd, !1, !1),
              transform: Od
            }
          },
          {
            vertexData: qd,
            transform: Hd
          } = Nd(dd[0]);
        Kd && (yield);
        const yd = new Array(dd.length - 1);
        for (let wd = 1; wd < dd.length; wd++) yd[wd - 1] = Nd(dd[wd]), Kd && (yield);
        const bd = qd._mergeCoroutine(Hd, yd, Wd, Kd, !md);
        let Td = bd.next();
        for (; !Td.done;) Kd && (yield), Td = bd.next();
        const pd = Td.value;
        Fd || (Fd = new Md(hd.name + "_merged", hd.zV()));
        const Yd = pd._applyToCoroutine(Fd, void 0, Kd);
        let gd = Yd.next();
        for (; !gd.done;) Kd && (yield), gd = Yd.next();
        if (Fd.checkCollisions = hd.checkCollisions, Fd.sideOrientation = hd.sideOrientation, md)
          for (Od = 0; Od < dd.length; Od++) dd[Od].dispose();
        if (Rd || Xd) {
          for (Fd.releaseSubMeshes(), Od = 0; Od < td.length;) Vd.d.CreateFromIndices(0, td[Od].start, td[Od].count, Fd, void 0, !1), Od++;
          for (const dd of Fd.ZE) dd.refreshBoundingInfo();
          Fd.computeWorldMatrix(!0)
        }
        if (Xd) {
          const dd = new Gd.d(hd.name + "_merged", hd.zV());
          dd.WOd = vd;
          for (let Od = 0; Od < Fd.ZE.length; Od++) Fd.ZE[Od].materialIndex = Qd[Od];
          Fd.material = dd
        } else Fd.material = hd.material;
        return Fd
      }
      jdd(dd) {
        dd._indexInSourceMeshInstanceArray = this.instances.length, this.instances.push(dd)
      }
      edd(dd) {
        const Od = dd._indexInSourceMeshInstanceArray;
        if (-1 != Od) {
          if (Od !== this.instances.length - 1) {
            const dd = this.instances[this.instances.length - 1];
            this.instances[Od] = dd, dd._indexInSourceMeshInstanceArray = Od
          }
          dd._indexInSourceMeshInstanceArray = -1, this.instances.pop()
        }
      }
      _shouldConvertRHS() {
        return this._scene.useRightHandedSystem && this.sideOrientation === Ad.b.CounterClockWiseSideOrientation
      }
      _getRenderingFillMode(dd) {
        const Od = this.zV();
        return Od.forcePointsCloud ? Ad.b.PointFillMode : Od.forceWireframe ? Ad.b.WireFrameFillMode : this.overrideRenderingFillMode ?? dd
      }
      setMaterialByID(dd) {
        return this.setMaterialById(dd)
      }
      static CreateRibbon(dd, Od, md, Wd, Fd, Rd, Xd, Kd, hd) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDisc(dd, Od, md, Wd, Fd, Rd) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateBox(dd, Od, md, Wd, Fd) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateSphere(dd, Od, md, Wd, Fd, Rd) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateHemisphere(dd, Od, md, Wd) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateCylinder(dd, Od, md, Wd, Fd, Rd, Xd, Kd, hd) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTorus(dd, Od, md, Wd, Fd, Rd, Xd) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTorusKnot(dd, Od, md, Wd, Fd, Rd, Xd, Kd, hd, vd) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateLines(dd, Od, md, Wd, Fd) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDashedLines(dd, Od, md, Wd, Fd, Rd, Xd, Kd) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePolygon(dd, Od, md, Wd, Fd, Rd, Xd) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudePolygon(dd, Od, md, Wd, Fd, Rd, Xd, Kd) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudeShape(dd, Od, md, Wd, Fd, Rd, Xd, Kd, hd, vd) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudeShapeCustom(dd, Od, md, Wd, Fd, Rd, Xd, Kd, hd, vd, Qd, td) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateLathe(dd, Od, md, Wd, Fd, Rd, Xd) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePlane(dd, Od, md, Wd, Fd) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateGround(dd, Od, md, Wd, Fd, Rd) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTiledGround(dd, Od, md, Wd, Fd, Rd, Xd, Kd, hd) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateGroundFromHeightMap(dd, Od, md, Wd, Fd, Rd, Xd, Kd, hd, vd, Qd) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTube(dd, Od, md, Wd, Fd, Rd, Xd, Kd, hd, vd) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePolyhedron(dd, Od, md) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateIcoSphere(dd, Od, md) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDecal(dd, Od, md, Wd, Fd, Rd) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateCapsule(dd, Od, md) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtendToGoldberg(dd) {
        throw new Error("Import MeshBuilder to populate this function")
      }
    }
    Md.FRONTSIDE = Sd.c.FRONTSIDE, Md.BACKSIDE = Sd.c.BACKSIDE, Md.DOUBLESIDE = Sd.c.DOUBLESIDE, Md.DEFAULTSIDE = Sd.c.DEFAULTSIDE, Md.NO_CAP = 0, Md.CAP_START = 1, Md.CAP_END = 2, Md.CAP_ALL = 3, Md.NO_FLIP = 0, Md.FLIP_TILE = 1, Md.ROTATE_TILE = 2, Md.FLIP_ROW = 3, Md.ROTATE_ROW = 4, Md.FLIP_N_ROTATE_TILE = 5, Md.FLIP_N_ROTATE_ROW = 6, Md.CENTER = 0, Md.LEFT = 1, Md.RIGHT = 2, Md.TOP = 3, Md.BOTTOM = 4, Md.INSTANCEDMESH_SORT_TRANSPARENT = !1, Md._GroundMeshParser = (dd, Od) => {
      throw (0, cd.m)("GroundMesh")
    }, Md._GoldbergMeshParser = (dd, Od) => {
      throw (0, cd.m)("GoldbergMesh")
    }, Md._LinesMeshParser = (dd, Od) => {
      throw (0, cd.m)("LinesMesh")
    }, Md._GreasedLineMeshParser = (dd, Od) => {
      throw (0, cd.m)("GreasedLineMesh")
    }, Md._GreasedLineRibbonMeshParser = (dd, Od) => {
      throw (0, cd.m)("GreasedLineRibbonMesh")
    }, Md._TrailMeshParser = (dd, Od) => {
      throw (0, cd.m)("TrailMesh")
    }, Md._GaussianSplattingMeshParser = (dd, Od) => {
      throw (0, cd.m)("GaussianSplattingMesh")
    }, Md._GaussianSplattingPartProxyMeshParser = (dd, Od) => {
      throw (0, cd.m)("GaussianSplattingPartProxyMesh")
    }, Md._GaussianSplattingCompoundMeshParser = (dd, Od) => {
      throw (0, cd.m)("GaussianSplattingCompoundMesh")
    };
    let dO = !1;

    function OO() {
      dO || (dO = !0, (0, zd.e)("BABYLON.Mesh", Md))
    }(Wd = Md.prototype).JG ?? (Wd.JG = (0, cd.i)("Mesh", "JG")), (Fd = Md.prototype).simplify ?? (Fd.simplify = (0, cd.i)("Mesh", "simplify")), (Rd = Md.prototype).thinInstanceAdd ?? (Rd.thinInstanceAdd = (0, cd.i)("Mesh", "thinInstanceAdd")), (Xd = Md.prototype).thinInstanceAddSelf ?? (Xd.thinInstanceAddSelf = (0, cd.i)("Mesh", "thinInstanceAddSelf")), (Kd = Md.prototype).thinInstanceRegisterAttribute ?? (Kd.thinInstanceRegisterAttribute = (0, cd.i)("Mesh", "thinInstanceRegisterAttribute")), (hd = Md.prototype).thinInstanceSetMatrixAt ?? (hd.thinInstanceSetMatrixAt = (0, cd.i)("Mesh", "thinInstanceSetMatrixAt")), (vd = Md.prototype).thinInstanceSetAttributeAt ?? (vd.thinInstanceSetAttributeAt = (0, cd.i)("Mesh", "thinInstanceSetAttributeAt")), (Qd = Md.prototype).OOd ?? (Qd.OOd = (0, cd.i)("Mesh", "OOd")), (td = Md.prototype).thinInstanceGetWorldMatrices ?? (td.thinInstanceGetWorldMatrices = (0, cd.i)("Mesh", "thinInstanceGetWorldMatrices")), (od = Md.prototype).Zdd ?? (od.Zdd = (0, cd.i)("Mesh", "Zdd")), (Nd = Md.prototype).thinInstancePartialBufferUpdate ?? (Nd.thinInstancePartialBufferUpdate = (0, cd.i)("Mesh", "thinInstancePartialBufferUpdate")), (qd = Md.prototype).thinInstanceRefreshBoundingInfo ?? (qd.thinInstanceRefreshBoundingInfo = (0, cd.i)("Mesh", "thinInstanceRefreshBoundingInfo")), (Hd = Md.prototype).getEmittedParticleSystems ?? (Hd.getEmittedParticleSystems = (0, cd.i)("Mesh", "getEmittedParticleSystems")), (yd = Md.prototype).getHierarchyEmittedParticleSystems ?? (yd.getHierarchyEmittedParticleSystems = (0, cd.i)("Mesh", "getHierarchyEmittedParticleSystems")), Object.getOwnPropertyDescriptor(Md.prototype, "edgesShareWithInstances") || Object.defineProperty(Md.prototype, "edgesShareWithInstances", (0, cd.g)("Mesh", "edgesShareWithInstances")), Object.getOwnPropertyDescriptor(Md.prototype, "kmd") || Object.defineProperty(Md.prototype, "kmd", (0, cd.g)("Mesh", "kmd")), Object.getOwnPropertyDescriptor(Md.prototype, "thinInstanceAllowAutomaticStaticBufferRecreation") || Object.defineProperty(Md.prototype, "thinInstanceAllowAutomaticStaticBufferRecreation", (0, cd.g)("Mesh", "thinInstanceAllowAutomaticStaticBufferRecreation")), Object.getOwnPropertyDescriptor(Md.prototype, "ndd") || Object.defineProperty(Md.prototype, "ndd", (0, cd.g)("Mesh", "ndd"))
  },
  42339: (dd, Od, md) => {
    md.d(Od, {
      c: () => qd
    });
    var Wd = md(41922),
      Fd = md(38636),
      Rd = md(42075),
      Xd = md(41817),
      Kd = md(38741),
      hd = md(40262),
      vd = md(41931),
      Qd = md(42335),
      td = md(41975),
      od = md(42217);
    class Nd {}
    let qd = (() => {
      var dd;
      let Od, md, qd, Hd, yd = [];
      return dd = class {
        constructor() {
          this.uniqueId = 0, this.metadata = {}, this._applyTo = (0, Qd.d)(this._applyToCoroutine.bind(this)), this.uniqueId = dd._UniqueIdGenerator, dd._UniqueIdGenerator++
        }
        set(dd, Od) {
          switch (dd.length || hd.c.Warn(`Setting vertex data kind '${Od}' with an empty array`), Od) {
            case Rd.j.PositionKind:
              this.positions = dd;
              break;
            case Rd.j.NormalKind:
              this.normals = dd;
              break;
            case Rd.j.TangentKind:
              this.tangents = dd;
              break;
            case Rd.j.UVKind:
              this.uvs = dd;
              break;
            case Rd.j.UV2Kind:
              this.uvs2 = dd;
              break;
            case Rd.j.UV3Kind:
              this.uvs3 = dd;
              break;
            case Rd.j.UV4Kind:
              this.uvs4 = dd;
              break;
            case Rd.j.UV5Kind:
              this.uvs5 = dd;
              break;
            case Rd.j.UV6Kind:
              this.uvs6 = dd;
              break;
            case Rd.j.ColorKind:
              this.colors = dd;
              break;
            case Rd.j.MatricesIndicesKind:
              this.matricesIndices = dd;
              break;
            case Rd.j.MatricesWeightsKind:
              this.matricesWeights = dd;
              break;
            case Rd.j.MatricesIndicesExtraKind:
              this.matricesIndicesExtra = dd;
              break;
            case Rd.j.MatricesWeightsExtraKind:
              this.matricesWeightsExtra = dd
          }
        }
        applyToMesh(dd, Od) {
          return this._applyTo(dd, Od, !1), this
        }
        applyToGeometry(dd, Od) {
          return this._applyTo(dd, Od, !1), this
        }
        updateMesh(dd) {
          return this._update(dd), this
        }
        updateGeometry(dd) {
          return this._update(dd), this
        }* _applyToCoroutine(dd) {
          let Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            md = arguments.length > 2 ? arguments[2] : void 0;
          if (this.positions && (dd.setVerticesData(Rd.j.PositionKind, this.positions, Od), md && (yield)), this.normals && (dd.setVerticesData(Rd.j.NormalKind, this.normals, Od), md && (yield)), this.tangents && (dd.setVerticesData(Rd.j.TangentKind, this.tangents, Od), md && (yield)), this.uvs && (dd.setVerticesData(Rd.j.UVKind, this.uvs, Od), md && (yield)), this.uvs2 && (dd.setVerticesData(Rd.j.UV2Kind, this.uvs2, Od), md && (yield)), this.uvs3 && (dd.setVerticesData(Rd.j.UV3Kind, this.uvs3, Od), md && (yield)), this.uvs4 && (dd.setVerticesData(Rd.j.UV4Kind, this.uvs4, Od), md && (yield)), this.uvs5 && (dd.setVerticesData(Rd.j.UV5Kind, this.uvs5, Od), md && (yield)), this.uvs6 && (dd.setVerticesData(Rd.j.UV6Kind, this.uvs6, Od), md && (yield)), this.colors) {
            const Wd = this.positions && this.colors.length === this.positions.length ? 3 : 4;
            dd.setVerticesData(Rd.j.ColorKind, this.colors, Od, Wd), this.hasVertexAlpha && void 0 !== dd.hasVertexAlpha && (dd.hasVertexAlpha = !0), md && (yield)
          }
          if (this.matricesIndices && (dd.setVerticesData(Rd.j.MatricesIndicesKind, this.matricesIndices, Od), md && (yield)), this.matricesWeights && (dd.setVerticesData(Rd.j.MatricesWeightsKind, this.matricesWeights, Od), md && (yield)), this.matricesIndicesExtra && (dd.setVerticesData(Rd.j.MatricesIndicesExtraKind, this.matricesIndicesExtra, Od), md && (yield)), this.matricesWeightsExtra && (dd.setVerticesData(Rd.j.MatricesWeightsExtraKind, this.matricesWeightsExtra, Od), md && (yield)), this.indices ? (dd.setIndices(this.indices, null, Od), md && (yield)) : dd.setIndices([], null), dd.ZE && this.materialInfos && this.materialInfos.length > 1) {
            const Od = dd;
            Od.ZE = [];
            for (const dd of this.materialInfos) new od.d(dd.materialIndex, dd.verticesStart, dd.verticesCount, dd.indexStart, dd.indexCount, Od)
          }
          return this
        }
        _update(dd, Od, md) {
          return this.positions && dd.updateVerticesData(Rd.j.PositionKind, this.positions, Od, md), this.normals && dd.updateVerticesData(Rd.j.NormalKind, this.normals, Od, md), this.tangents && dd.updateVerticesData(Rd.j.TangentKind, this.tangents, Od, md), this.uvs && dd.updateVerticesData(Rd.j.UVKind, this.uvs, Od, md), this.uvs2 && dd.updateVerticesData(Rd.j.UV2Kind, this.uvs2, Od, md), this.uvs3 && dd.updateVerticesData(Rd.j.UV3Kind, this.uvs3, Od, md), this.uvs4 && dd.updateVerticesData(Rd.j.UV4Kind, this.uvs4, Od, md), this.uvs5 && dd.updateVerticesData(Rd.j.UV5Kind, this.uvs5, Od, md), this.uvs6 && dd.updateVerticesData(Rd.j.UV6Kind, this.uvs6, Od, md), this.colors && dd.updateVerticesData(Rd.j.ColorKind, this.colors, Od, md), this.matricesIndices && dd.updateVerticesData(Rd.j.MatricesIndicesKind, this.matricesIndices, Od, md), this.matricesWeights && dd.updateVerticesData(Rd.j.MatricesWeightsKind, this.matricesWeights, Od, md), this.matricesIndicesExtra && dd.updateVerticesData(Rd.j.MatricesIndicesExtraKind, this.matricesIndicesExtra, Od, md), this.matricesWeightsExtra && dd.updateVerticesData(Rd.j.MatricesWeightsExtraKind, this.matricesWeightsExtra, Od, md), this.indices && dd.setIndices(this.indices, null), this
        }
        static _TransformVector3Coordinates(dd, Od) {
          let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : dd.length;
          const Rd = Fd.h.Cq[0],
            Xd = Fd.h.Cq[1];
          for (let Kd = md; Kd < md + Wd; Kd += 3) Fd.j.FromArrayToRef(dd, Kd, Rd), Fd.j.TransformCoordinatesToRef(Rd, Od, Xd), dd[Kd] = Xd.x, dd[Kd + 1] = Xd.y, dd[Kd + 2] = Xd.z
        }
        static _TransformVector3Normals(dd, Od) {
          let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : dd.length;
          const Rd = Fd.h.Cq[0],
            Xd = Fd.h.Cq[1];
          for (let Kd = md; Kd < md + Wd; Kd += 3) Fd.j.FromArrayToRef(dd, Kd, Rd), Fd.j.TransformNormalToRef(Rd, Od, Xd), dd[Kd] = Xd.x, dd[Kd + 1] = Xd.y, dd[Kd + 2] = Xd.z
        }
        static _TransformVector4Normals(dd, Od) {
          let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : dd.length;
          const Rd = Fd.h.Vector4[0],
            Xd = Fd.h.Vector4[1];
          for (let Kd = md; Kd < md + Wd; Kd += 4) Fd.k.FromArrayToRef(dd, Kd, Rd), Fd.k.TransformNormalToRef(Rd, Od, Xd), dd[Kd] = Xd.x, dd[Kd + 1] = Xd.y, dd[Kd + 2] = Xd.z, dd[Kd + 3] = Xd.w
        }
        static _FlipFaces(dd) {
          let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : dd.length;
          for (let Wd = Od; Wd < Od + md; Wd += 3) {
            const Od = dd[Wd + 1];
            dd[Wd + 1] = dd[Wd + 2], dd[Wd + 2] = Od
          }
        }
        transform(Od) {
          const md = Od.determinant() < 0;
          return this.positions && dd._TransformVector3Coordinates(this.positions, Od), this.normals && dd._TransformVector3Normals(this.normals, Od), this.tangents && dd._TransformVector4Normals(this.tangents, Od), md && this.indices && dd._FlipFaces(this.indices), this
        }
        splitBasedOnMaterialID() {
          if (!this.materialInfos || this.materialInfos.length < 2) return [this];
          const Od = [];
          for (const md of this.materialInfos) {
            const Wd = new dd;
            if (this.positions && (Wd.positions = this.positions.slice(3 * md.verticesStart, 3 * (md.verticesCount + md.verticesStart))), this.normals && (Wd.normals = this.normals.slice(3 * md.verticesStart, 3 * (md.verticesCount + md.verticesStart))), this.tangents && (Wd.tangents = this.tangents.slice(4 * md.verticesStart, 4 * (md.verticesCount + md.verticesStart))), this.colors && (Wd.colors = this.colors.slice(4 * md.verticesStart, 4 * (md.verticesCount + md.verticesStart))), this.uvs && (Wd.uvs = this.uvs.slice(2 * md.verticesStart, 2 * (md.verticesCount + md.verticesStart))), this.uvs2 && (Wd.uvs2 = this.uvs2.slice(2 * md.verticesStart, 2 * (md.verticesCount + md.verticesStart))), this.uvs3 && (Wd.uvs3 = this.uvs3.slice(2 * md.verticesStart, 2 * (md.verticesCount + md.verticesStart))), this.uvs4 && (Wd.uvs4 = this.uvs4.slice(2 * md.verticesStart, 2 * (md.verticesCount + md.verticesStart))), this.uvs5 && (Wd.uvs5 = this.uvs5.slice(2 * md.verticesStart, 2 * (md.verticesCount + md.verticesStart))), this.uvs6 && (Wd.uvs6 = this.uvs6.slice(2 * md.verticesStart, 2 * (md.verticesCount + md.verticesStart))), this.matricesIndices && (Wd.matricesIndices = this.matricesIndices.slice(4 * md.verticesStart, 4 * (md.verticesCount + md.verticesStart))), this.matricesIndicesExtra && (Wd.matricesIndicesExtra = this.matricesIndicesExtra.slice(4 * md.verticesStart, 4 * (md.verticesCount + md.verticesStart))), this.matricesWeights && (Wd.matricesWeights = this.matricesWeights.slice(4 * md.verticesStart, 4 * (md.verticesCount + md.verticesStart))), this.matricesWeightsExtra && (Wd.matricesWeightsExtra = this.matricesWeightsExtra.slice(4 * md.verticesStart, 4 * (md.verticesCount + md.verticesStart))), this.indices) {
              Wd.indices = [];
              for (let dd = md.indexStart; dd < md.indexStart + md.indexCount; dd++) Wd.indices.push(this.indices[dd] - md.verticesStart)
            }
            const Fd = new Nd;
            Fd.indexStart = 0, Fd.indexCount = Wd.indices ? Wd.indices.length : 0, Fd.materialIndex = md.materialIndex, Fd.verticesStart = 0, Fd.verticesCount = (Wd.positions ? Wd.positions.length : 0) / 3, Wd.materialInfos = [Fd], Od.push(Wd)
          }
          return Od
        }
        merge(dd) {
          let Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            md = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            Wd = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            Fd = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
          const Rd = Array.isArray(dd) ? dd.map((dd => ({
            vertexData: dd
          }))) : [{
            vertexData: dd
          }];
          return (0, Qd.l)(this._mergeCoroutine(void 0, Rd, Od, !1, md, Wd, Fd))
        }* _mergeCoroutine(Od, md) {
          let Wd = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            Fd = arguments.length > 3 ? arguments[3] : void 0,
            Xd = arguments.length > 4 ? arguments[4] : void 0,
            Kd = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
            hd = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
          this._validate();
          let vd = md.map((dd => dd.vertexData)),
            Qd = this;
          if (hd)
            for (const dd of vd) dd && (dd._validate(), !this.normals && dd.normals && (this.normals = new Float32Array(this.positions.length)), !this.tangents && dd.tangents && (this.tangents = new Float32Array(this.positions.length / 3 * 4)), !this.uvs && dd.uvs && (this.uvs = new Float32Array(this.positions.length / 3 * 2)), !this.uvs2 && dd.uvs2 && (this.uvs2 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs3 && dd.uvs3 && (this.uvs3 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs4 && dd.uvs4 && (this.uvs4 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs5 && dd.uvs5 && (this.uvs5 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs6 && dd.uvs6 && (this.uvs6 = new Float32Array(this.positions.length / 3 * 2)), !this.colors && dd.colors && (this.colors = new Float32Array(this.positions.length / 3 * 4), this.colors.fill(1)), !this.matricesIndices && dd.matricesIndices && (this.matricesIndices = new Float32Array(this.positions.length / 3 * 4)), !this.matricesWeights && dd.matricesWeights && (this.matricesWeights = new Float32Array(this.positions.length / 3 * 4)), !this.matricesIndicesExtra && dd.matricesIndicesExtra && (this.matricesIndicesExtra = new Float32Array(this.positions.length / 3 * 4)), !this.matricesWeightsExtra && dd.matricesWeightsExtra && (this.matricesWeightsExtra = new Float32Array(this.positions.length / 3 * 4)));
          for (const dd of vd)
            if (dd)
              if (hd) this.normals && !dd.normals && (dd.normals = new Float32Array(dd.positions.length)), this.tangents && !dd.tangents && (dd.tangents = new Float32Array(dd.positions.length / 3 * 4)), this.uvs && !dd.uvs && (dd.uvs = new Float32Array(dd.positions.length / 3 * 2)), this.uvs2 && !dd.uvs2 && (dd.uvs2 = new Float32Array(dd.positions.length / 3 * 2)), this.uvs3 && !dd.uvs3 && (dd.uvs3 = new Float32Array(dd.positions.length / 3 * 2)), this.uvs4 && !dd.uvs4 && (dd.uvs4 = new Float32Array(dd.positions.length / 3 * 2)), this.uvs5 && !dd.uvs5 && (dd.uvs5 = new Float32Array(dd.positions.length / 3 * 2)), this.uvs6 && !dd.uvs6 && (dd.uvs6 = new Float32Array(dd.positions.length / 3 * 2)), this.colors && !dd.colors && (dd.colors = new Float32Array(dd.positions.length / 3 * 4), dd.colors.fill(1)), this.matricesIndices && !dd.matricesIndices && (dd.matricesIndices = new Float32Array(dd.positions.length / 3 * 4)), this.matricesWeights && !dd.matricesWeights && (dd.matricesWeights = new Float32Array(dd.positions.length / 3 * 4)), this.matricesIndicesExtra && !dd.matricesIndicesExtra && (dd.matricesIndicesExtra = new Float32Array(dd.positions.length / 3 * 4)), this.matricesWeightsExtra && !dd.matricesWeightsExtra && (dd.matricesWeightsExtra = new Float32Array(dd.positions.length / 3 * 4));
              else if (dd._validate(), !this.normals !== !dd.normals || !this.tangents !== !dd.tangents || !this.uvs !== !dd.uvs || !this.uvs2 !== !dd.uvs2 || !this.uvs3 !== !dd.uvs3 || !this.uvs4 !== !dd.uvs4 || !this.uvs5 !== !dd.uvs5 || !this.uvs6 !== !dd.uvs6 || !this.colors !== !dd.colors || !this.matricesIndices !== !dd.matricesIndices || !this.matricesWeights !== !dd.matricesWeights || !this.matricesIndicesExtra !== !dd.matricesIndicesExtra || !this.matricesWeightsExtra !== !dd.matricesWeightsExtra) throw new Error("Cannot merge vertex data that do not have the same set of attributes");
          if (Kd) {
            let dd, Wd = 0,
              Fd = 0;
            const Rd = [];
            let Xd = null;
            const Kd = [];
            for (const md of this.splitBasedOnMaterialID()) Kd.push({
              vertexData: md,
              transform: Od
            });
            for (const Od of md)
              if (Od.vertexData)
                for (const dd of Od.vertexData.splitBasedOnMaterialID()) Kd.push({
                  vertexData: dd,
                  transform: Od.transform
                });
            Kd.sort(((dd, Od) => {
              const md = dd.vertexData.materialInfos ? dd.vertexData.materialInfos[0].materialIndex : 0,
                Wd = Od.vertexData.materialInfos ? Od.vertexData.materialInfos[0].materialIndex : 0;
              return md > Wd ? 1 : md === Wd ? 0 : -1
            }));
            for (const Od of Kd) {
              const md = Od.vertexData;
              if (dd = md.materialInfos ? md.materialInfos[0].materialIndex : 0, Xd && Xd.materialIndex === dd) Xd.indexCount += md.indices.length, Xd.verticesCount += md.positions.length / 3;
              else {
                const Od = new Nd;
                Od.materialIndex = dd, Od.indexStart = Wd, Od.indexCount = md.indices.length, Od.verticesStart = Fd, Od.verticesCount = md.positions.length / 3, Rd.push(Od), Xd = Od
              }
              Wd += md.indices.length, Fd += md.positions.length / 3
            }
            const hd = Kd.splice(0, 1)[0];
            Qd = hd.vertexData, Od = hd.transform, vd = Kd.map((dd => dd.vertexData)), md = Kd, this.materialInfos = Rd
          }
          const td = vd.reduce(((dd, Od) => dd + (Od.indices?.length ?? 0)), Qd.indices?.length ?? 0);
          let od = Xd || vd.some((dd => dd.indices === Qd.indices)) ? Qd.indices?.slice() : Qd.indices;
          if (td > 0) {
            let Rd = od?.length ?? 0;
            if (od || (od = new Array(td)), od.length !== td) {
              if (Array.isArray(od)) od.length = td;
              else {
                const dd = Wd || od instanceof Uint32Array ? new Uint32Array(td) : new Uint16Array(td);
                dd.set(od), od = dd
              }
              Od && Od.determinant() < 0 && dd._FlipFaces(od, 0, Rd)
            }
            let Xd = Qd.positions ? Qd.positions.length / 3 : 0;
            for (const {
                vertexData: Od,
                transform: Wd
              }
              of md)
              if (Od.indices) {
                for (let dd = 0; dd < Od.indices.length; dd++) od[Rd + dd] = Od.indices[dd] + Xd;
                Wd && Wd.determinant() < 0 && dd._FlipFaces(od, Rd, Od.indices.length), Xd += Od.positions.length / 3, Rd += Od.indices.length, Fd && (yield)
              }
          }
          return this.indices = od, this.positions = dd._MergeElement(Rd.j.PositionKind, Qd.positions, Od, md.map((dd => [dd.vertexData.positions, dd.transform]))), Fd && (yield), Qd.normals && (this.normals = dd._MergeElement(Rd.j.NormalKind, Qd.normals, Od, md.map((dd => [dd.vertexData.normals, dd.transform]))), Fd && (yield)), Qd.tangents && (this.tangents = dd._MergeElement(Rd.j.TangentKind, Qd.tangents, Od, md.map((dd => [dd.vertexData.tangents, dd.transform]))), Fd && (yield)), Qd.uvs && (this.uvs = dd._MergeElement(Rd.j.UVKind, Qd.uvs, Od, md.map((dd => [dd.vertexData.uvs, dd.transform]))), Fd && (yield)), Qd.uvs2 && (this.uvs2 = dd._MergeElement(Rd.j.UV2Kind, Qd.uvs2, Od, md.map((dd => [dd.vertexData.uvs2, dd.transform]))), Fd && (yield)), Qd.uvs3 && (this.uvs3 = dd._MergeElement(Rd.j.UV3Kind, Qd.uvs3, Od, md.map((dd => [dd.vertexData.uvs3, dd.transform]))), Fd && (yield)), Qd.uvs4 && (this.uvs4 = dd._MergeElement(Rd.j.UV4Kind, Qd.uvs4, Od, md.map((dd => [dd.vertexData.uvs4, dd.transform]))), Fd && (yield)), Qd.uvs5 && (this.uvs5 = dd._MergeElement(Rd.j.UV5Kind, Qd.uvs5, Od, md.map((dd => [dd.vertexData.uvs5, dd.transform]))), Fd && (yield)), Qd.uvs6 && (this.uvs6 = dd._MergeElement(Rd.j.UV6Kind, Qd.uvs6, Od, md.map((dd => [dd.vertexData.uvs6, dd.transform]))), Fd && (yield)), Qd.colors && (this.colors = dd._MergeElement(Rd.j.ColorKind, Qd.colors, Od, md.map((dd => [dd.vertexData.colors, dd.transform]))), (void 0 !== Qd.hasVertexAlpha || md.some((dd => void 0 !== dd.vertexData.hasVertexAlpha))) && (this.hasVertexAlpha = Qd.hasVertexAlpha || md.some((dd => dd.vertexData.hasVertexAlpha))), Fd && (yield)), Qd.matricesIndices && (this.matricesIndices = dd._MergeElement(Rd.j.MatricesIndicesKind, Qd.matricesIndices, Od, md.map((dd => [dd.vertexData.matricesIndices, dd.transform]))), Fd && (yield)), Qd.matricesWeights && (this.matricesWeights = dd._MergeElement(Rd.j.MatricesWeightsKind, Qd.matricesWeights, Od, md.map((dd => [dd.vertexData.matricesWeights, dd.transform]))), Fd && (yield)), Qd.matricesIndicesExtra && (this.matricesIndicesExtra = dd._MergeElement(Rd.j.MatricesIndicesExtraKind, Qd.matricesIndicesExtra, Od, md.map((dd => [dd.vertexData.matricesIndicesExtra, dd.transform]))), Fd && (yield)), Qd.matricesWeightsExtra && (this.matricesWeightsExtra = dd._MergeElement(Rd.j.MatricesWeightsExtraKind, Qd.matricesWeightsExtra, Od, md.map((dd => [dd.vertexData.matricesWeightsExtra, dd.transform])))), this
        }
        static _MergeElement(Od, md, Wd, Fd) {
          const Xd = Fd.filter((dd => null !== dd[0] && void 0 !== dd[0]));
          if (!md && 0 == Xd.length) return md;
          if (!md) return this._MergeElement(Od, Xd[0][0], Xd[0][1], Xd.slice(1));
          const Kd = Xd.reduce(((dd, Od) => dd + Od[0].length), md.length),
            hd = Od === Rd.j.PositionKind ? dd._TransformVector3Coordinates : Od === Rd.j.NormalKind ? dd._TransformVector3Normals : Od === Rd.j.TangentKind ? dd._TransformVector4Normals : () => {};
          if (md instanceof Float32Array) {
            const dd = new Float32Array(Kd);
            dd.set(md), Wd && hd(dd, Wd, 0, md.length);
            let Od = md.length;
            for (const [md, Wd] of Xd) dd.set(md, Od), Wd && hd(dd, Wd, Od, md.length), Od += md.length;
            return dd
          } {
            const dd = new Array(Kd);
            for (let Wd = 0; Wd < md.length; Wd++) dd[Wd] = md[Wd];
            Wd && hd(dd, Wd, 0, md.length);
            let Od = md.length;
            for (const [md, Wd] of Xd) {
              for (let Wd = 0; Wd < md.length; Wd++) dd[Od + Wd] = md[Wd];
              Wd && hd(dd, Wd, Od, md.length), Od += md.length
            }
            return dd
          }
        }
        _validate() {
          if (!this.positions) throw new td.h("Positions are required", td.e.MeshInvalidPositionsError);
          const dd = (dd, Od) => {
              const md = (0, Rd.h)(dd);
              if (Od.length % md !== 0) throw new Error("The " + dd + "s array count must be a multiple of " + md);
              return Od.length / md
            },
            Od = dd(Rd.j.PositionKind, this.positions),
            md = (md, Wd) => {
              const Fd = dd(md, Wd);
              if (Fd !== Od) throw new Error("The " + md + "s element count (" + Fd + ") does not match the positions count (" + Od + ")")
            };
          this.normals && md(Rd.j.NormalKind, this.normals), this.tangents && md(Rd.j.TangentKind, this.tangents), this.uvs && md(Rd.j.UVKind, this.uvs), this.uvs2 && md(Rd.j.UV2Kind, this.uvs2), this.uvs3 && md(Rd.j.UV3Kind, this.uvs3), this.uvs4 && md(Rd.j.UV4Kind, this.uvs4), this.uvs5 && md(Rd.j.UV5Kind, this.uvs5), this.uvs6 && md(Rd.j.UV6Kind, this.uvs6), this.colors && md(Rd.j.ColorKind, this.colors), this.matricesIndices && md(Rd.j.MatricesIndicesKind, this.matricesIndices), this.matricesWeights && md(Rd.j.MatricesWeightsKind, this.matricesWeights), this.matricesIndicesExtra && md(Rd.j.MatricesIndicesExtraKind, this.matricesIndicesExtra), this.matricesWeightsExtra && md(Rd.j.MatricesWeightsExtraKind, this.matricesWeightsExtra)
        }
        clone() {
          const Od = this.serialize();
          return dd.Parse(Od)
        }
        serialize() {
          const dd = {};
          if (this.positions && (dd.positions = Array.from(this.positions)), this.normals && (dd.normals = Array.from(this.normals)), this.tangents && (dd.tangents = Array.from(this.tangents)), this.uvs && (dd.uvs = Array.from(this.uvs)), this.uvs2 && (dd.uvs2 = Array.from(this.uvs2)), this.uvs3 && (dd.uvs3 = Array.from(this.uvs3)), this.uvs4 && (dd.uvs4 = Array.from(this.uvs4)), this.uvs5 && (dd.uvs5 = Array.from(this.uvs5)), this.uvs6 && (dd.uvs6 = Array.from(this.uvs6)), this.colors && (dd.colors = Array.from(this.colors), dd.hasVertexAlpha = this.hasVertexAlpha), this.matricesIndices && (dd.matricesIndices = Array.from(this.matricesIndices), dd.matricesIndicesExpanded = !0), this.matricesWeights && (dd.matricesWeights = Array.from(this.matricesWeights)), this.matricesIndicesExtra && (dd.matricesIndicesExtra = Array.from(this.matricesIndicesExtra), dd.matricesIndicesExtraExpanded = !0), this.matricesWeightsExtra && (dd.matricesWeightsExtra = Array.from(this.matricesWeightsExtra)), dd.indices = this.indices ? Array.from(this.indices) : [], this.materialInfos) {
            dd.materialInfos = [];
            for (const Od of this.materialInfos) {
              const md = {
                indexStart: Od.indexStart,
                indexCount: Od.indexCount,
                materialIndex: Od.materialIndex,
                verticesStart: Od.verticesStart,
                verticesCount: Od.verticesCount
              };
              dd.materialInfos.push(md)
            }
          }
          return dd
        }
        static ExtractFromMesh(Od, md, Wd) {
          return dd._ExtractFrom(Od, md, Wd)
        }
        static ExtractFromGeometry(Od, md, Wd) {
          return dd._ExtractFrom(Od, md, Wd)
        }
        static _ExtractFrom(Od, md, Wd) {
          const Fd = new dd;
          if (Od.isVerticesDataPresent(Rd.j.PositionKind) && (Fd.positions = Od.getVerticesData(Rd.j.PositionKind, md, Wd)), Od.isVerticesDataPresent(Rd.j.NormalKind) && (Fd.normals = Od.getVerticesData(Rd.j.NormalKind, md, Wd)), Od.isVerticesDataPresent(Rd.j.TangentKind) && (Fd.tangents = Od.getVerticesData(Rd.j.TangentKind, md, Wd)), Od.isVerticesDataPresent(Rd.j.UVKind) && (Fd.uvs = Od.getVerticesData(Rd.j.UVKind, md, Wd)), Od.isVerticesDataPresent(Rd.j.UV2Kind) && (Fd.uvs2 = Od.getVerticesData(Rd.j.UV2Kind, md, Wd)), Od.isVerticesDataPresent(Rd.j.UV3Kind) && (Fd.uvs3 = Od.getVerticesData(Rd.j.UV3Kind, md, Wd)), Od.isVerticesDataPresent(Rd.j.UV4Kind) && (Fd.uvs4 = Od.getVerticesData(Rd.j.UV4Kind, md, Wd)), Od.isVerticesDataPresent(Rd.j.UV5Kind) && (Fd.uvs5 = Od.getVerticesData(Rd.j.UV5Kind, md, Wd)), Od.isVerticesDataPresent(Rd.j.UV6Kind) && (Fd.uvs6 = Od.getVerticesData(Rd.j.UV6Kind, md, Wd)), Od.isVerticesDataPresent(Rd.j.ColorKind)) {
            const dd = Od.geometry || Od,
              Xd = dd.getVertexBuffer(Rd.j.ColorKind),
              Kd = dd.getVerticesData(Rd.j.ColorKind, md, Wd);
            if (3 === Xd.getSize()) {
              const dd = new Float32Array(4 * Kd.length / 3);
              for (let Od = 0, md = 0; Od < Kd.length; Od += 3, md += 4) dd[md] = Kd[Od], dd[md + 1] = Kd[Od + 1], dd[md + 2] = Kd[Od + 2], dd[md + 3] = 1;
              Fd.colors = dd
            } else {
              if (4 !== Xd.getSize()) throw new Error(`Unexpected number of color components: ${Xd.getSize()}`);
              Fd.colors = Kd
            }
          }
          return Od.isVerticesDataPresent(Rd.j.MatricesIndicesKind) && (Fd.matricesIndices = Od.getVerticesData(Rd.j.MatricesIndicesKind, md, Wd)), Od.isVerticesDataPresent(Rd.j.MatricesWeightsKind) && (Fd.matricesWeights = Od.getVerticesData(Rd.j.MatricesWeightsKind, md, Wd)), Od.isVerticesDataPresent(Rd.j.MatricesIndicesExtraKind) && (Fd.matricesIndicesExtra = Od.getVerticesData(Rd.j.MatricesIndicesExtraKind, md, Wd)), Od.isVerticesDataPresent(Rd.j.MatricesWeightsExtraKind) && (Fd.matricesWeightsExtra = Od.getVerticesData(Rd.j.MatricesWeightsExtraKind, md, Wd)), Fd.indices = Od.jRd(md, Wd), Fd
        }
        static CreateRibbon(dd) {
          throw (0, Xd.m)("ribbonBuilder")
        }
        static CreateBox(dd) {
          throw (0, Xd.m)("boxBuilder")
        }
        static CreateTiledBox(dd) {
          throw (0, Xd.m)("tiledBoxBuilder")
        }
        static CreateTiledPlane(dd) {
          throw (0, Xd.m)("tiledPlaneBuilder")
        }
        static CreateSphere(dd) {
          throw (0, Xd.m)("sphereBuilder")
        }
        static CreateCylinder(dd) {
          throw (0, Xd.m)("cylinderBuilder")
        }
        static CreateTorus(dd) {
          throw (0, Xd.m)("torusBuilder")
        }
        static CreateLineSystem(dd) {
          throw (0, Xd.m)("linesBuilder")
        }
        static CreateDashedLines(dd) {
          throw (0, Xd.m)("linesBuilder")
        }
        static CreateGround(dd) {
          throw (0, Xd.m)("groundBuilder")
        }
        static CreateTiledGround(dd) {
          throw (0, Xd.m)("groundBuilder")
        }
        static CreateGroundFromHeightMap(dd) {
          throw (0, Xd.m)("groundBuilder")
        }
        static CreatePlane(dd) {
          throw (0, Xd.m)("planeBuilder")
        }
        static CreateDisc(dd) {
          throw (0, Xd.m)("discBuilder")
        }
        static CreatePolygon(dd, Od, md, Wd, Fd, Rd, Kd) {
          throw (0, Xd.m)("polygonBuilder")
        }
        static CreateIcoSphere(dd) {
          throw (0, Xd.m)("icoSphereBuilder")
        }
        static CreatePolyhedron(dd) {
          throw (0, Xd.m)("polyhedronBuilder")
        }
        static CreateCapsule() {
          arguments.length > 0 && void 0 !== arguments[0] || Fd.j.Up();
          throw (0, Xd.m)("capsuleBuilder")
        }
        static CreateTorusKnot(dd) {
          throw (0, Xd.m)("torusKnotBuilder")
        }
        static ComputeNormals(dd, Od, md, Wd) {
          let Rd, Xd, Kd, hd, vd, Qd, td, od, Nd, qd, Hd, yd, bd, Td, pd, Yd, gd, wd, Ed, Jd, Ud = !1,
            xd = !1,
            Bd = !1,
            Sd = !1,
            sd = 1,
            ud = 0,
            Vd = null;
          Wd && (Ud = !!Wd.facetNormals, xd = !!Wd.facetPositions, Bd = !!Wd.facetPartitioning, sd = !0 === Wd.useRightHandedSystem ? -1 : 1, ud = Wd.ratio || 0, Sd = !!Wd.depthSort, Vd = Wd.distanceTo, Sd && void 0 === Vd && (Vd = Fd.j.Zero()));
          let Ad = 0,
            rd = 0,
            Gd = 0,
            nd = 0;
          for (Bd && Wd && Wd.bbSize && (Ad = Wd.subDiv.X * ud / Wd.bbSize.x, rd = Wd.subDiv.Y * ud / Wd.bbSize.y, Gd = Wd.subDiv.Z * ud / Wd.bbSize.z, nd = Wd.subDiv.max * Wd.subDiv.max, Wd.facetPartitioning.length = 0), Rd = 0; Rd < dd.length; Rd++) md[Rd] = 0;
          const Ld = Od.length / 3 | 0;
          for (Rd = 0; Rd < Ld; Rd++) {
            if (yd = 3 * Od[3 * Rd], bd = yd + 1, Td = yd + 2, pd = 3 * Od[3 * Rd + 1], Yd = pd + 1, gd = pd + 2, wd = 3 * Od[3 * Rd + 2], Ed = wd + 1, Jd = wd + 2, Xd = dd[yd] - dd[pd], Kd = dd[bd] - dd[Yd], hd = dd[Td] - dd[gd], vd = dd[wd] - dd[pd], Qd = dd[Ed] - dd[Yd], td = dd[Jd] - dd[gd], od = sd * (Kd * td - hd * Qd), Nd = sd * (hd * vd - Xd * td), qd = sd * (Xd * Qd - Kd * vd), Hd = Math.sqrt(od * od + Nd * Nd + qd * qd), Hd = 0 === Hd ? 1 : Hd, od /= Hd, Nd /= Hd, qd /= Hd, Ud && Wd && (Wd.facetNormals[Rd].x = od, Wd.facetNormals[Rd].y = Nd, Wd.facetNormals[Rd].z = qd), xd && Wd && (Wd.facetPositions[Rd].x = (dd[yd] + dd[pd] + dd[wd]) / 3, Wd.facetPositions[Rd].y = (dd[bd] + dd[Yd] + dd[Ed]) / 3, Wd.facetPositions[Rd].z = (dd[Td] + dd[gd] + dd[Jd]) / 3), Bd && Wd) {
              const Od = Math.floor((Wd.facetPositions[Rd].x - Wd.bInfo.minimum.x * ud) * Ad),
                md = Math.floor((Wd.facetPositions[Rd].y - Wd.bInfo.minimum.y * ud) * rd),
                Fd = Math.floor((Wd.facetPositions[Rd].z - Wd.bInfo.minimum.z * ud) * Gd),
                Xd = Math.floor((dd[yd] - Wd.bInfo.minimum.x * ud) * Ad),
                Kd = Math.floor((dd[bd] - Wd.bInfo.minimum.y * ud) * rd),
                hd = Math.floor((dd[Td] - Wd.bInfo.minimum.z * ud) * Gd),
                vd = Math.floor((dd[pd] - Wd.bInfo.minimum.x * ud) * Ad),
                Qd = Math.floor((dd[Yd] - Wd.bInfo.minimum.y * ud) * rd),
                td = Math.floor((dd[gd] - Wd.bInfo.minimum.z * ud) * Gd),
                od = Math.floor((dd[wd] - Wd.bInfo.minimum.x * ud) * Ad),
                Nd = Math.floor((dd[Ed] - Wd.bInfo.minimum.y * ud) * rd),
                qd = Math.floor((dd[Jd] - Wd.bInfo.minimum.z * ud) * Gd),
                Hd = Xd + Wd.subDiv.max * Kd + nd * hd,
                Ud = vd + Wd.subDiv.max * Qd + nd * td,
                xd = od + Wd.subDiv.max * Nd + nd * qd,
                Bd = Od + Wd.subDiv.max * md + nd * Fd;
              Wd.facetPartitioning[Bd] = Wd.facetPartitioning[Bd] ? Wd.facetPartitioning[Bd] : [], Wd.facetPartitioning[Hd] = Wd.facetPartitioning[Hd] ? Wd.facetPartitioning[Hd] : [], Wd.facetPartitioning[Ud] = Wd.facetPartitioning[Ud] ? Wd.facetPartitioning[Ud] : [], Wd.facetPartitioning[xd] = Wd.facetPartitioning[xd] ? Wd.facetPartitioning[xd] : [], Wd.facetPartitioning[Hd].push(Rd), Ud != Hd && Wd.facetPartitioning[Ud].push(Rd), xd != Ud && xd != Hd && Wd.facetPartitioning[xd].push(Rd), Bd != Hd && Bd != Ud && Bd != xd && Wd.facetPartitioning[Bd].push(Rd)
            }
            if (Sd && Wd && Wd.facetPositions) {
              const dd = Wd.depthSortedFacets[Rd];
              dd.ind = 3 * Rd, dd.sqDistance = Fd.j.DistanceSquared(Wd.facetPositions[Rd], Vd)
            }
            md[yd] += od, md[bd] += Nd, md[Td] += qd, md[pd] += od, md[Yd] += Nd, md[gd] += qd, md[wd] += od, md[Ed] += Nd, md[Jd] += qd
          }
          for (Rd = 0; Rd < md.length / 3; Rd++) od = md[3 * Rd], Nd = md[3 * Rd + 1], qd = md[3 * Rd + 2], Hd = Math.sqrt(od * od + Nd * Nd + qd * qd), Hd = 0 === Hd ? 1 : Hd, od /= Hd, Nd /= Hd, qd /= Hd, md[3 * Rd] = od, md[3 * Rd + 1] = Nd, md[3 * Rd + 2] = qd
        }
        static _ComputeSides(Od, md, Wd, Rd, Xd, Kd, hd) {
          const vd = Wd.length,
            Qd = Rd.length;
          let td, od;
          switch (Od = Od || dd.DEFAULTSIDE) {
            case dd.FRONTSIDE:
              break;
            case dd.BACKSIDE:
              for (td = 0; td < vd; td += 3) {
                const dd = Wd[td];
                Wd[td] = Wd[td + 2], Wd[td + 2] = dd
              }
              for (od = 0; od < Qd; od++) Rd[od] = -Rd[od];
              break;
            case dd.DOUBLESIDE: {
              const dd = md.length,
                Od = dd / 3;
              for (let Wd = 0; Wd < dd; Wd++) md[dd + Wd] = md[Wd];
              for (td = 0; td < vd; td += 3) Wd[td + vd] = Wd[td + 2] + Od, Wd[td + 1 + vd] = Wd[td + 1] + Od, Wd[td + 2 + vd] = Wd[td] + Od;
              for (od = 0; od < Qd; od++) Rd[Qd + od] = -Rd[od];
              const Nd = Xd.length;
              let qd;
              for (qd = 0; qd < Nd; qd++) Xd[qd + Nd] = Xd[qd];
              for (Kd = Kd || new Fd.k(0, 0, 1, 1), hd = hd || new Fd.k(0, 0, 1, 1), qd = 0, td = 0; td < Nd / 2; td++) Xd[qd] = Kd.x + (Kd.z - Kd.x) * Xd[qd], Xd[qd + 1] = Kd.y + (Kd.w - Kd.y) * Xd[qd + 1], Xd[qd + Nd] = hd.x + (hd.z - hd.x) * Xd[qd + Nd], Xd[qd + Nd + 1] = hd.y + (hd.w - hd.y) * Xd[qd + Nd + 1], qd += 2;
              break
            }
          }
        }
        static Parse(Od) {
          const md = new dd,
            Wd = Od.positions;
          Wd && md.set(Wd, Rd.j.PositionKind);
          const Fd = Od.normals;
          Fd && md.set(Fd, Rd.j.NormalKind);
          const Xd = Od.tangents;
          Xd && md.set(Xd, Rd.j.TangentKind);
          const hd = Od.uvs;
          hd && md.set(hd, Rd.j.UVKind);
          const vd = Od.uvs2;
          vd && md.set(vd, Rd.j.UV2Kind);
          const Qd = Od.uvs3;
          Qd && md.set(Qd, Rd.j.UV3Kind);
          const td = Od.uvs4;
          td && md.set(td, Rd.j.UV4Kind);
          const od = Od.uvs5;
          od && md.set(od, Rd.j.UV5Kind);
          const qd = Od.uvs6;
          qd && md.set(qd, Rd.j.UV6Kind);
          const Hd = Od.colors;
          Hd && (md.set(Kd.f.CheckColors4(Hd, Wd.length / 3), Rd.j.ColorKind), void 0 !== Od.hasVertexAlpha && (md.hasVertexAlpha = Od.hasVertexAlpha));
          const yd = Od.matricesIndices;
          yd && md.set(yd, Rd.j.MatricesIndicesKind);
          const bd = Od.matricesWeights;
          bd && md.set(bd, Rd.j.MatricesWeightsKind);
          const Td = Od.indices;
          Td && (md.indices = Td);
          const pd = Od.materialInfos;
          if (pd) {
            md.materialInfos = [];
            for (const dd of pd) {
              const Od = new Nd;
              Od.indexCount = dd.indexCount, Od.indexStart = dd.indexStart, Od.verticesCount = dd.verticesCount, Od.verticesStart = dd.verticesStart, Od.materialIndex = dd.materialIndex, md.materialInfos.push(Od)
            }
          }
          return md
        }
        static ImportVertexData(Od, md) {
          const Wd = dd.Parse(Od);
          md.setAllVerticesData(Wd, Od.updatable)
        }
      }, (() => {
        const Fd = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Od = [vd.j.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], md = [vd.j.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], qd = [vd.j.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], Hd = [vd.j.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], (0, Wd.h)(dd, null, Od, {
          kind: "method",
          name: "_TransformVector3Coordinates",
          static: !0,
          private: !1,
          access: {
            has: dd => "_TransformVector3Coordinates" in dd,
            get: dd => dd._TransformVector3Coordinates
          },
          metadata: Fd
        }, null, yd), (0, Wd.h)(dd, null, md, {
          kind: "method",
          name: "_TransformVector3Normals",
          static: !0,
          private: !1,
          access: {
            has: dd => "_TransformVector3Normals" in dd,
            get: dd => dd._TransformVector3Normals
          },
          metadata: Fd
        }, null, yd), (0, Wd.h)(dd, null, qd, {
          kind: "method",
          name: "_TransformVector4Normals",
          static: !0,
          private: !1,
          access: {
            has: dd => "_TransformVector4Normals" in dd,
            get: dd => dd._TransformVector4Normals
          },
          metadata: Fd
        }, null, yd), (0, Wd.h)(dd, null, Hd, {
          kind: "method",
          name: "_FlipFaces",
          static: !0,
          private: !1,
          access: {
            has: dd => "_FlipFaces" in dd,
            get: dd => dd._FlipFaces
          },
          metadata: Fd
        }, null, yd), Fd && Object.defineProperty(dd, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Fd
        })
      })(), dd.FRONTSIDE = ((0, Wd.k)(dd, yd), 0), dd.BACKSIDE = 1, dd.DOUBLESIDE = 2, dd.DEFAULTSIDE = 0, dd._UniqueIdGenerator = 0, dd
    })()
  },
  42420: (dd, Od, md) => {
    var Wd = md(38636),
      Fd = md(40262),
      Rd = md(42225),
      Xd = md(42330),
      Kd = md(42075);
    const hd = "bakedVertexAnimationSettingsInstanced";

    function vd(dd) {
      const Od = dd.bakedVertexAnimationManager?.texture?.getInternalTexture()?._bufferView;
      return Od instanceof Float32Array || Od instanceof Uint16Array
    }

    function Qd(dd, Od, md, Wd) {
      md.Bdd(Number.POSITIVE_INFINITY), Wd.Bdd(Number.NEGATIVE_INFINITY);
      for (let Fd = 0; Fd < 3 * Od; Fd += 3) {
        const Od = dd[Fd],
          Rd = dd[Fd + 1],
          Xd = dd[Fd + 2];
        Od < md.x && (md.x = Od), Rd < md.y && (md.y = Rd), Xd < md.z && (md.z = Xd), Od > Wd.x && (Wd.x = Od), Rd > Wd.y && (Wd.y = Rd), Xd > Wd.z && (Wd.z = Xd)
      }
    }

    function td(dd, Od, md) {
      md && (dd.x -= dd.x * md.x + md.y, dd.y -= dd.y * md.x + md.y, dd.z -= dd.z * md.x + md.y, Od.x += Od.x * md.x + md.y, Od.y += Od.y * md.x + md.y, Od.z += Od.z * md.x + md.y)
    }

    function od(dd, Od, md, Fd, Rd) {
      const Xd = Wd.h.Cq[7],
        Kd = Wd.h.Cq[8];
      for (let hd = 0; hd < 2; ++hd)
        for (let vd = 0; vd < 2; ++vd)
          for (let Qd = 0; Qd < 2; ++Qd) Xd.set(hd ? Od.x : dd.x, vd ? Od.y : dd.y, Qd ? Od.z : dd.z), Wd.j.TransformCoordinatesToRef(Xd, md, Kd), Fd.minimizeInPlace(Kd), Rd.maximizeInPlace(Kd)
    }

    function Nd(dd, Od, md, Fd, Rd) {
      const Xd = Wd.h.Cq[7];
      for (let Kd = 0; Kd < 3 * Od; Kd += 3) Wd.j.TransformCoordinatesFromFloatsToRef(dd[Kd], dd[Kd + 1], dd[Kd + 2], md, Xd), Fd.minimizeInPlace(Xd), Rd.maximizeInPlace(Xd)
    }
    let qd = !1;
    qd || (qd = !0, Xd.d.prototype.thinInstanceAdd = function(dd) {
      let Od = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (!this.zV().Iq().getCaps().instancedArrays) return Fd.c.Error("Thin Instances are not supported on this device as Instanced Array extension not supported"), -1;
      this._thinInstanceUpdateBufferSize("matrix", Array.isArray(dd) ? dd.length : 1);
      const md = this._thinInstanceDataStorage.instancesCount;
      if (Array.isArray(dd))
        for (let Wd = 0; Wd < dd.length; ++Wd) this.thinInstanceSetMatrixAt(this._thinInstanceDataStorage.instancesCount++, dd[Wd], Wd === dd.length - 1 && Od);
      else this.thinInstanceSetMatrixAt(this._thinInstanceDataStorage.instancesCount++, dd, Od);
      return md
    }, Xd.d.prototype.thinInstanceAddSelf = function() {
      let dd = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      return this.thinInstanceAdd(Wd.d.IdentityReadOnly, dd)
    }, Xd.d.prototype.thinInstanceRegisterAttribute = function(dd, Od) {
      dd === Kd.j.ColorKind && (dd = Kd.j.ColorInstanceKind), this.removeVerticesData(dd), this._thinInstanceInitializeUserStorage(), this._userThinInstanceBuffersStorage.strides[dd] = Od, this._userThinInstanceBuffersStorage.sizes[dd] = Od * Math.max(32, this._thinInstanceDataStorage.instancesCount), this._userThinInstanceBuffersStorage.data[dd] = new Float32Array(this._userThinInstanceBuffersStorage.sizes[dd]), this._userThinInstanceBuffersStorage.vertexBuffers[dd] = new Kd.j(this.Iq(), this._userThinInstanceBuffersStorage.data[dd], dd, !0, !1, Od, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[dd])
    }, Xd.d.prototype.thinInstanceSetMatrixAt = function(dd, Od) {
      let md = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      if (!this._thinInstanceDataStorage.matrixData || dd >= this._thinInstanceDataStorage.instancesCount) return !1;
      const Wd = this._thinInstanceDataStorage.matrixData;
      return Od.copyToArray(Wd, 16 * dd), this._thinInstanceDataStorage.worldMatrices && (this._thinInstanceDataStorage.worldMatrices[dd] = Od), md && (this.Zdd("matrix"), this.kq || this.thinInstanceRefreshBoundingInfo(!1)), !0
    }, Xd.d.prototype.thinInstanceSetAttributeAt = function(dd, Od, md) {
      let Wd = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      return dd === Kd.j.ColorKind && (dd = Kd.j.ColorInstanceKind), !(!this._userThinInstanceBuffersStorage || !this._userThinInstanceBuffersStorage.data[dd] || Od >= this._thinInstanceDataStorage.instancesCount) && (this._thinInstanceUpdateBufferSize(dd, 0), this._userThinInstanceBuffersStorage.data[dd].set(md, Od * this._userThinInstanceBuffersStorage.strides[dd]), Wd && this.Zdd(dd), !0)
    }, Object.defineProperty(Xd.d.prototype, "ndd", {
      get: function() {
        return this._thinInstanceDataStorage.instancesCount
      },
      set: function(dd) {
        const Od = this._thinInstanceDataStorage.matrixData ?? this.source?._thinInstanceDataStorage.matrixData;
        dd <= (Od ? Od.length / 16 : 0) && (this._thinInstanceDataStorage.instancesCount = dd)
      },
      enumerable: !0,
      configurable: !0
    }), Xd.d.prototype._thinInstanceCreateMatrixBuffer = function(dd, Od) {
      let md = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      const Wd = new Kd.b(this.Iq(), Od, !md, 16, !1, !0);
      for (let Fd = 0; Fd < 4; Fd++) this.setVerticesBuffer(Wd.createVertexBuffer(dd + Fd, 4 * Fd, 4));
      return Wd
    }, Xd.d.prototype.OOd = function(dd, Od) {
      let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        Wd = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      if (md = md || 16, "matrix" === dd) this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = null, this._thinInstanceDataStorage.matrixBufferSize = Od ? Od.length : 32 * md, this._thinInstanceDataStorage.matrixData = Od, this._thinInstanceDataStorage.worldMatrices = null, null !== Od ? (this._thinInstanceDataStorage.instancesCount = Od.length / md, this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", Od, Wd), this.kq || this.thinInstanceRefreshBoundingInfo(!1)) : (this._thinInstanceDataStorage.instancesCount = 0, this.kq || this.refreshBoundingInfo());
      else if ("previousMatrix" === dd) this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = null, this._thinInstanceDataStorage.previousMatrixData = Od, null !== Od && (this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", Od, Wd));
      else if ("splatIndex" === dd && Od) {
        this._thinInstanceInitializeUserStorage(), this._thinInstanceDataStorage.instancesCount = Od.length / md, this._userThinInstanceBuffersStorage.data[dd] = Od, this._userThinInstanceBuffersStorage.strides[dd] = md, this._userThinInstanceBuffersStorage.sizes[dd] = Od.length;
        const Wd = new Kd.b(this.Iq(), Od, !0, 16, !1, !0);
        this._thinInstanceDataStorage.matrixBuffer = Wd;
        for (let Od = 0; Od < 4; Od++) this.setVerticesBuffer(Wd.createVertexBuffer(dd + Od, 4 * Od, 4))
      } else dd === Kd.j.ColorKind && (dd = Kd.j.ColorInstanceKind), null === Od ? this._userThinInstanceBuffersStorage?.data[dd] && (this.removeVerticesData(dd), delete this._userThinInstanceBuffersStorage.data[dd], delete this._userThinInstanceBuffersStorage.strides[dd], delete this._userThinInstanceBuffersStorage.sizes[dd], delete this._userThinInstanceBuffersStorage.vertexBuffers[dd]) : (this._thinInstanceInitializeUserStorage(), this._userThinInstanceBuffersStorage.data[dd] = Od, this._userThinInstanceBuffersStorage.strides[dd] = md, this._userThinInstanceBuffersStorage.sizes[dd] = Od.length, this._userThinInstanceBuffersStorage.vertexBuffers[dd] = new Kd.j(this.Iq(), Od, dd, !Wd, !1, md, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[dd]))
    }, Xd.d.prototype.Zdd = function(dd) {
      "matrix" === dd ? (this.thinInstanceAllowAutomaticStaticBufferRecreation && this._thinInstanceDataStorage.matrixBuffer && !this._thinInstanceDataStorage.matrixBuffer.isUpdatable() && this._thinInstanceRecreateBuffer(dd), this._thinInstanceDataStorage.matrixBuffer?.updateDirectly(this._thinInstanceDataStorage.matrixData, 0, this._thinInstanceDataStorage.instancesCount)) : "previousMatrix" === dd ? (this.thinInstanceAllowAutomaticStaticBufferRecreation && this._thinInstanceDataStorage.previousMatrixBuffer && !this._thinInstanceDataStorage.previousMatrixBuffer.isUpdatable() && this._thinInstanceRecreateBuffer(dd), this._thinInstanceDataStorage.previousMatrixBuffer?.updateDirectly(this._thinInstanceDataStorage.previousMatrixData, 0, this._thinInstanceDataStorage.instancesCount)) : "splatIndex" === dd ? this._thinInstanceDataStorage.matrixBuffer?.updateDirectly(this._userThinInstanceBuffersStorage.data[dd], 0, this._thinInstanceDataStorage.instancesCount) : (dd === Kd.j.ColorKind && (dd = Kd.j.ColorInstanceKind), this._userThinInstanceBuffersStorage?.vertexBuffers[dd] && (this.thinInstanceAllowAutomaticStaticBufferRecreation && !this._userThinInstanceBuffersStorage.vertexBuffers[dd].isUpdatable() && this._thinInstanceRecreateBuffer(dd), this._userThinInstanceBuffersStorage.vertexBuffers[dd].updateDirectly(this._userThinInstanceBuffersStorage.data[dd], 0)))
    }, Xd.d.prototype.thinInstancePartialBufferUpdate = function(dd, Od, md) {
      if ("matrix" === dd) this._thinInstanceDataStorage.matrixBuffer && ("number" === typeof Od ? this._thinInstanceDataStorage.matrixBuffer.updateDirectly(new Float32Array(this._thinInstanceDataStorage.matrixData.buffer, this._thinInstanceDataStorage.matrixData.byteOffset + 16 * md * Float32Array.BYTES_PER_ELEMENT, 16 * Od), 16 * md) : this._thinInstanceDataStorage.matrixBuffer.updateDirectly(Od, md));
      else if (dd === Kd.j.ColorKind && (dd = Kd.j.ColorInstanceKind), this._userThinInstanceBuffersStorage?.vertexBuffers[dd]) {
        const Wd = this._userThinInstanceBuffersStorage.vertexBuffers[dd];
        if ("number" === typeof Od) {
          const Wd = new Float32Array(this._userThinInstanceBuffersStorage.data[dd].buffer, this._userThinInstanceBuffersStorage.data[dd].byteOffset + md * this._userThinInstanceBuffersStorage.strides[dd] * Float32Array.BYTES_PER_ELEMENT, Od * this._userThinInstanceBuffersStorage.strides[dd]);
          this._userThinInstanceBuffersStorage.vertexBuffers[dd].updateDirectly(Wd, md * this._userThinInstanceBuffersStorage.strides[dd])
        } else Wd.updateDirectly(Od, md)
      }
    }, Xd.d.prototype.thinInstanceGetWorldMatrices = function() {
      if (!this._thinInstanceDataStorage.matrixData || !this._thinInstanceDataStorage.matrixBuffer) return [];
      const dd = this._thinInstanceDataStorage.matrixData;
      if (!this._thinInstanceDataStorage.worldMatrices) {
        this._thinInstanceDataStorage.worldMatrices = [];
        for (let Od = 0; Od < this._thinInstanceDataStorage.instancesCount; ++Od) this._thinInstanceDataStorage.worldMatrices[Od] = Wd.d.FromArray(dd, 16 * Od)
      }
      return this._thinInstanceDataStorage.worldMatrices
    }, Xd.d.prototype.thinInstanceRefreshBoundingInfo = function() {
      let dd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        md = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        Fd = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!this._thinInstanceDataStorage.matrixData || !this._thinInstanceDataStorage.matrixBuffer) return;
      const Xd = this._thinInstanceDataStorage.boundingVectors;
      if (dd || !this.rawBoundingInfo) {
        if (Xd.length = 0, Fd && function(dd, Od, md) {
            const Fd = dd._userThinInstanceBuffersStorage,
              Xd = Fd?.data[hd],
              qd = Fd?.strides[hd];
            if (!Xd || !qd || qd < 4 || !vd(dd)) return !1;
            const Hd = dd._thinInstanceDataStorage.matrixData;
            if (!Hd) return !1;
            const yd = {},
              bd = Wd.h.Vector4[0],
              Td = Wd.h.Cq[1],
              pd = Wd.h.Cq[2],
              Yd = Wd.h.Cq[3],
              gd = Wd.h.Cq[4],
              wd = Wd.h.Cq[5],
              Ed = Wd.h.Cq[6],
              Jd = Wd.h.Matrix[2],
              Ud = dd.geometry ? dd.geometry.boundingBias : null,
              xd = dd.getTotalVertices();
            Td.Bdd(Number.POSITIVE_INFINITY), pd.Bdd(Number.NEGATIVE_INFINITY), Yd.Bdd(Number.POSITIVE_INFINITY), gd.Bdd(Number.NEGATIVE_INFINITY);
            for (let Rd = 0; Rd < dd._thinInstanceDataStorage.instancesCount; ++Rd) {
              const Od = Rd * qd;
              bd.set(Xd[Od], Xd[Od + 1], Xd[Od + 2], Xd[Od + 3]);
              const Fd = dd._getData({
                applyMorph: md,
                applyBakedVertexAnimation: !0,
                bakedVertexAnimationSettings: bd,
                updatePositionsArray: !1,
                cache: yd
              }, null, Kd.j.PositionKind);
              if (!Fd) return !1;
              Qd(Fd, xd, wd, Ed), td(wd, Ed, Ud), Td.minimizeInPlace(wd), pd.maximizeInPlace(Ed), Wd.d.FromArrayToRef(Hd, 16 * Rd, Jd), Ud ? od(wd, Ed, Jd, Yd, gd) : Nd(Fd, xd, Jd, Yd, gd)
            }
            return !(!isFinite(Td.x) || !isFinite(Yd.x)) && (dd.iG().reConstruct(Yd, gd), dd.rawBoundingInfo = new Rd.c(Td, pd), function(dd, Od) {
              dd.length = 0;
              for (let md = 0; md < Od.boundingBox.vectors.length; ++md) dd.push(Od.boundingBox.vectors[md].clone())
            }(Od, dd.rawBoundingInfo), dd._updateBoundingInfo(), !0)
          }(this, Xd, md)) return;
        Fd && this.bakedVertexAnimationManager?.isEnabled && vd(this) ? this.refreshBoundingInfo({
          applySkeleton: Od,
          applyMorph: md,
          applyBakedVertexAnimation: !0,
          updatePositionsArray: !1
        }) : this.refreshBoundingInfo(Od, md);
        const dd = this.iG();
        this.rawBoundingInfo = new Rd.c(dd.minimum, dd.maximum)
      }
      const qd = this.iG(),
        Hd = this._thinInstanceDataStorage.matrixData;
      if (0 === Xd.length)
        for (let Wd = 0; Wd < qd.boundingBox.vectors.length; ++Wd) Xd.push(qd.boundingBox.vectors[Wd].clone());
      Wd.h.Cq[0].Bdd(Number.POSITIVE_INFINITY), Wd.h.Cq[1].Bdd(Number.NEGATIVE_INFINITY);
      for (let Rd = 0; Rd < this._thinInstanceDataStorage.instancesCount; ++Rd) {
        Wd.d.FromArrayToRef(Hd, 16 * Rd, Wd.h.Matrix[0]);
        for (let dd = 0; dd < Xd.length; ++dd) Wd.j.TransformCoordinatesToRef(Xd[dd], Wd.h.Matrix[0], Wd.h.Cq[2]), Wd.h.Cq[0].minimizeInPlace(Wd.h.Cq[2]), Wd.h.Cq[1].maximizeInPlace(Wd.h.Cq[2])
      }
      qd.reConstruct(Wd.h.Cq[0], Wd.h.Cq[1]), this._updateBoundingInfo()
    }, Xd.d.prototype._thinInstanceRecreateBuffer = function(dd) {
      let Od = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      "matrix" === dd ? (this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", this._thinInstanceDataStorage.matrixData, Od)) : "previousMatrix" === dd ? this._scene.needsPreviousWorldMatrices && (this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", this._thinInstanceDataStorage.previousMatrixData ?? this._thinInstanceDataStorage.matrixData, Od)) : (dd === Kd.j.ColorKind && (dd = Kd.j.ColorInstanceKind), this._userThinInstanceBuffersStorage.vertexBuffers[dd]?.dispose(), this._userThinInstanceBuffersStorage.vertexBuffers[dd] = new Kd.j(this.Iq(), this._userThinInstanceBuffersStorage.data[dd], dd, !Od, !1, this._userThinInstanceBuffersStorage.strides[dd], !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[dd]))
    }, Xd.d.prototype._thinInstanceUpdateBufferSize = function(dd) {
      let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      dd === Kd.j.ColorKind && (dd = Kd.j.ColorInstanceKind);
      const md = "matrix" === dd;
      if (!md && (!this._userThinInstanceBuffersStorage || !this._userThinInstanceBuffersStorage.strides[dd])) return;
      const Wd = md ? 16 : this._userThinInstanceBuffersStorage.strides[dd],
        Fd = md ? this._thinInstanceDataStorage.matrixBufferSize : this._userThinInstanceBuffersStorage.sizes[dd];
      let Rd = md ? this._thinInstanceDataStorage.matrixData : this._userThinInstanceBuffersStorage.data[dd];
      const Xd = (this._thinInstanceDataStorage.instancesCount + Od) * Wd;
      let hd = Fd;
      for (; hd < Xd;) hd *= 2;
      if (!Rd || Fd != hd) {
        if (Rd) {
          const dd = new Float32Array(hd);
          dd.set(Rd, 0), Rd = dd
        } else Rd = new Float32Array(hd);
        md ? (this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", Rd, !1), this._thinInstanceDataStorage.matrixData = Rd, this._thinInstanceDataStorage.matrixBufferSize = hd, this._scene.needsPreviousWorldMatrices && !this._thinInstanceDataStorage.previousMatrixData && (this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", Rd, !1))) : (this._userThinInstanceBuffersStorage.vertexBuffers[dd]?.dispose(), this._userThinInstanceBuffersStorage.data[dd] = Rd, this._userThinInstanceBuffersStorage.sizes[dd] = hd, this._userThinInstanceBuffersStorage.vertexBuffers[dd] = new Kd.j(this.Iq(), Rd, dd, !0, !1, Wd, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[dd]))
      }
    }, Xd.d.prototype._thinInstanceInitializeUserStorage = function() {
      this._userThinInstanceBuffersStorage || (this._userThinInstanceBuffersStorage = {
        data: {},
        sizes: {},
        vertexBuffers: {},
        strides: {}
      })
    }, Xd.d.prototype._disposeThinInstanceSpecificData = function() {
      this._thinInstanceDataStorage?.matrixBuffer && (this._thinInstanceDataStorage.matrixBuffer.dispose(), this._thinInstanceDataStorage.matrixBuffer = null), this._thinInstanceDataStorage?.previousMatrixBuffer && (this._thinInstanceDataStorage.previousMatrixBuffer.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = null)
    })
  },
  42374: (dd, Od, md) => {
    md.d(Od, {
      c: () => Td,
      f: () => Hd
    });
    var Wd, Fd, Rd, Xd, Kd = md(41922),
      hd = md(41931),
      vd = md(41948),
      Qd = md(38660),
      td = md(38636),
      od = md(42132),
      Nd = md(38669),
      qd = md(41817);
    let Hd = (() => {
      var dd;
      let Od, md, Wd, Fd, Rd, Xd, Nd, qd, Hd, yd = od.b,
        bd = [],
        Td = [],
        pd = [],
        Yd = [],
        gd = [],
        wd = [],
        Ed = [],
        Jd = [],
        Ud = [],
        xd = [],
        Bd = [],
        Sd = [],
        sd = [],
        ud = [],
        Vd = [],
        Ad = [],
        rd = [],
        Gd = [];
      return dd = class extends yd {
        get billboardMode() {
          return this._billboardMode
        }
        set billboardMode(Od) {
          this._billboardMode !== Od && (this._billboardMode = Od, this._cache.useBillboardPosition = 0 !== (this._billboardMode & dd.BILLBOARDMODE_USE_POSITION))
        }
        get infiniteDistance() {
          return this._infiniteDistance
        }
        set infiniteDistance(dd) {
          this._infiniteDistance !== dd && (this._infiniteDistance = dd)
        }
        constructor(Od) {
          let md = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          super(Od, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, !1), this._forward = new td.j(0, 0, 1), this._up = new td.j(0, 1, 0), this._right = new td.j(1, 0, 0), this._position = (0, Kd.k)(this, bd, td.j.Zero()), this._rotation = ((0, Kd.k)(this, Td), (0, Kd.k)(this, pd, td.j.Zero())), this._rotationQuaternion = ((0, Kd.k)(this, Yd), (0, Kd.k)(this, gd, null)), this._scaling = ((0, Kd.k)(this, wd), (0, Kd.k)(this, Ed, td.j.One())), this._transformToBoneReferal = ((0, Kd.k)(this, Jd), null), this._isAbsoluteSynced = !1, this._billboardMode = (0, Kd.k)(this, Ud, dd.BILLBOARDMODE_NONE), this.scalingDeterminant = ((0, Kd.k)(this, xd), (0, Kd.k)(this, Bd, 1)), this._infiniteDistance = ((0, Kd.k)(this, Sd), (0, Kd.k)(this, sd, !1)), this.ignoreNonUniformScaling = ((0, Kd.k)(this, ud), (0, Kd.k)(this, Vd, !1)), this.reIntegrateRotationIntoRotationQuaternion = ((0, Kd.k)(this, Ad), (0, Kd.k)(this, rd, !1)), this._poseMatrix = ((0, Kd.k)(this, Gd), null), this._localMatrix = td.d.Zero(), this._usePivotMatrix = !1, this._absolutePosition = td.j.Zero(), this._absoluteScaling = td.j.Zero(), this._absoluteRotationQuaternion = td.e.Identity(), this._pivotMatrix = td.d.Identity(), this._postMultiplyPivotMatrix = !1, this._isWorldMatrixFrozen = !1, this._indexInSceneTransformNodesArray = -1, this.onAfterWorldMatrixUpdateObservable = new Qd.c, this._nonUniformScaling = !1, md && this.zV().addTransformNode(this)
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
        get Tt() {
          return this._scaling
        }
        set Tt(dd) {
          this._scaling = dd, this._markAsDirtyInternal()
        }
        get rotationQuaternion() {
          return this._rotationQuaternion
        }
        set rotationQuaternion(dd) {
          this._rotationQuaternion = dd, dd && this._rotation.Bdd(0), this._markAsDirtyInternal()
        }
        _markAsDirtyInternal() {
          this._isDirty || (this._isDirty = !0, this.customMarkAsDirty && this.customMarkAsDirty())
        }
        get forward() {
          return td.j.TransformNormalFromFloatsToRef(0, 0, this.zV().useRightHandedSystem ? -1 : 1, this.getWorldMatrix(), this._forward), this._forward.normalize()
        }
        get up() {
          return td.j.TransformNormalFromFloatsToRef(0, 1, 0, this.getWorldMatrix(), this._up), this._up.normalize()
        }
        get right() {
          return td.j.TransformNormalFromFloatsToRef(this.zV().useRightHandedSystem ? -1 : 1, 0, 0, this.getWorldMatrix(), this._right), this._right.normalize()
        }
        updatePoseMatrix(dd) {
          return this._poseMatrix ? (this._poseMatrix.Bx(dd), this) : (this._poseMatrix = dd.clone(), this)
        }
        getPoseMatrix() {
          return this._poseMatrix || (this._poseMatrix = td.d.Identity()), this._poseMatrix
        }
        _isSynchronized() {
          const Od = this._cache;
          return this._billboardMode === Od.billboardMode && this._billboardMode === dd.BILLBOARDMODE_NONE && (!Od.pivotMatrixUpdated && (!this._infiniteDistance && (!this._position._isDirty && (!this._scaling._isDirty && !(this._rotationQuaternion && this._rotationQuaternion._isDirty || this._rotation._isDirty)))))
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
          let Od = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          return this._pivotMatrix.Bx(dd), this._usePivotMatrix = !this._pivotMatrix.isIdentity(), this._cache.pivotMatrixUpdated = !0, this._postMultiplyPivotMatrix = Od, this._postMultiplyPivotMatrix && (this._pivotMatrixInverse ? this._pivotMatrix.invertToRef(this._pivotMatrixInverse) : this._pivotMatrixInverse = td.d.Invert(this._pivotMatrix)), this
        }
        getPivotMatrix() {
          return this._pivotMatrix
        }
        instantiateHierarchy() {
          let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            Od = arguments.length > 1 ? arguments[1] : void 0,
            md = arguments.length > 2 ? arguments[2] : void 0;
          const Wd = this.clone("Clone of " + (this.name || this.id), dd || this.parent, !0);
          Wd && md && md(this, Wd);
          for (const Fd of this.getChildTransformNodes(!0)) Fd.instantiateHierarchy(Wd, Od, md);
          return Wd
        }
        sA() {
          let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return dd ? arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (this._rotation.Bdd(0), this._rotationQuaternion = this._rotationQuaternion || td.e.Identity(), dd.decompose(this._scaling, this._rotationQuaternion, this._position), this.computeWorldMatrix(!0)) : (this._worldMatrix = dd, this._absolutePosition.KOd(this._worldMatrix.m[12], this._worldMatrix.m[13], this._worldMatrix.m[14]), this._afterComputeWorldMatrix()) : (this._isWorldMatrixFrozen = !1, this.computeWorldMatrix(!0)), this._isDirty = !1, this._isWorldMatrixFrozen = !0, this
        }
        unfreezeWorldMatrix() {
          return this._isWorldMatrixFrozen = !1, this.computeWorldMatrix(!0), this
        }
        get Nhd() {
          return this._isWorldMatrixFrozen
        }
        getAbsolutePosition() {
          return this.computeWorldMatrix(), this._absolutePosition
        }
        setAbsolutePosition(dd) {
          if (!dd) return this;
          let Od, md, Wd;
          if (void 0 === dd.x) {
            if (arguments.length < 3) return this;
            Od = arguments[0], md = arguments[1], Wd = arguments[2]
          } else Od = dd.x, md = dd.y, Wd = dd.z;
          if (this.parent) {
            const dd = td.h.Matrix[0];
            this.parent.getWorldMatrix().invertToRef(dd), td.j.TransformCoordinatesFromFloatsToRef(Od, md, Wd, dd, this.position)
          } else this.position.x = Od, this.position.y = md, this.position.z = Wd;
          return this._absolutePosition.Bx(dd), this
        }
        setPositionWithLocalVector(dd) {
          return this.computeWorldMatrix(), this.position = td.j.TransformNormal(dd, this._localMatrix), this
        }
        getPositionExpressedInLocalSpace() {
          this.computeWorldMatrix();
          const dd = td.h.Matrix[0];
          return this._localMatrix.invertToRef(dd), td.j.TransformNormal(this.position, dd)
        }
        locallyTranslate(dd) {
          return this.computeWorldMatrix(!0), this.position = td.j.TransformCoordinates(dd, this._localMatrix), this
        }
        lookAt(Od) {
          let md = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            Wd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            Fd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
            Rd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
          const Xd = dd._LookAtVectorCache,
            Kd = 0 === Rd ? this.position : this.getAbsolutePosition();
          if (Od.subtractToRef(Kd, Xd), this.setDirection(Xd, md, Wd, Fd), 1 === Rd && this.parent)
            if (this.rotationQuaternion) {
              const dd = td.h.Matrix[0];
              this.rotationQuaternion.toRotationMatrix(dd);
              const Od = td.h.Matrix[1];
              this.parent.getWorldMatrix().getRotationMatrixToRef(Od), Od.invert(), dd.multiplyToRef(Od, dd), this.rotationQuaternion.fromRotationMatrix(dd)
            } else {
              const dd = td.h.Quaternion[0];
              td.e.FromEulerVectorToRef(this.rotation, dd);
              const Od = td.h.Matrix[0];
              dd.toRotationMatrix(Od);
              const md = td.h.Matrix[1];
              this.parent.getWorldMatrix().getRotationMatrixToRef(md), md.invert(), Od.multiplyToRef(md, Od), dd.fromRotationMatrix(Od), dd.toEulerAnglesToRef(this.rotation)
            } return this
        }
        B_(dd) {
          const Od = td.j.Zero();
          return this.getDirectionToRef(dd, Od), Od
        }
        getDirectionToRef(dd, Od) {
          return td.j.TransformNormalToRef(dd, this.getWorldMatrix(), Od), this
        }
        setDirection(dd) {
          let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
          const Fd = -Math.atan2(dd.z, dd.x) + Math.PI / 2,
            Rd = Math.sqrt(dd.x * dd.x + dd.z * dd.z),
            Xd = -Math.atan2(dd.y, Rd);
          return this.rotationQuaternion ? td.e.RotationYawPitchRollToRef(Fd + Od, Xd + md, Wd, this.rotationQuaternion) : (this.rotation.x = Xd + md, this.rotation.y = Fd + Od, this.rotation.z = Wd), this
        }
        setPivotPoint(dd) {
          let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          0 == this.zV().getRenderId() && this.computeWorldMatrix(!0);
          const md = this.getWorldMatrix();
          if (1 == Od) {
            const Od = td.h.Matrix[0];
            md.invertToRef(Od), dd = td.j.TransformCoordinates(dd, Od)
          }
          return this.setPivotMatrix(td.d.Translation(-dd.x, -dd.y, -dd.z), !0)
        }
        getPivotPoint() {
          const dd = td.j.Zero();
          return this.getPivotPointToRef(dd), dd
        }
        getPivotPointToRef(dd) {
          return dd.x = -this._pivotMatrix.m[12], dd.y = -this._pivotMatrix.m[13], dd.z = -this._pivotMatrix.m[14], this
        }
        getAbsolutePivotPoint() {
          const dd = td.j.Zero();
          return this.getAbsolutePivotPointToRef(dd), dd
        }
        getAbsolutePivotPointToRef(dd) {
          return this.getPivotPointToRef(dd), td.j.TransformCoordinatesToRef(dd, this.getWorldMatrix(), dd), this
        }
        KWd(dd) {
          if (this._isDirty) return this;
          if (this._children)
            for (const Od of this._children) Od.KWd(dd);
          return super.KWd(dd)
        }
        setParent(Od) {
          let md = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            Wd = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          if (!Od && !this.parent) return this;
          const Fd = td.h.Quaternion[0],
            Rd = td.h.Cq[0],
            Xd = td.h.Cq[1],
            Kd = td.h.Matrix[1];
          td.d.IdentityToRef(Kd);
          const hd = td.h.Matrix[0];
          this.computeWorldMatrix(!0);
          let vd = this.rotationQuaternion;
          return vd || (vd = dd._TmpRotation, td.e.RotationYawPitchRollToRef(this._rotation.y, this._rotation.x, this._rotation.z, vd)), td.d.ComposeToRef(this.Tt, vd, this.position, hd), this.parent && hd.multiplyToRef(this.parent.computeWorldMatrix(!0), hd), Od && (Od.computeWorldMatrix(!0).invertToRef(Kd), hd.multiplyToRef(Kd, hd)), hd.decompose(Xd, Fd, Rd, md ? this : void 0), this.rotationQuaternion ? this.rotationQuaternion.Bx(Fd) : Fd.toEulerAnglesToRef(this.rotation), this.Tt.Bx(Xd), this.position.Bx(Rd), this.parent = Od, Wd && this.setPivotMatrix(td.d.Identity()), this
        }
        addChild(dd) {
          let Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return dd.setParent(this, Od), this
        }
        removeChild(dd) {
          let Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return dd.parent !== this || dd.setParent(null, Od), this
        }
        get nonUniformScaling() {
          return this._nonUniformScaling
        }
        _updateNonUniformScalingState(dd) {
          return this._nonUniformScaling !== dd && (this._nonUniformScaling = dd, !0)
        }
        attachToBone(dd, Od) {
          return this._currentParentWhenAttachingToBone = this.parent, this._transformToBoneReferal = Od, this.parent = dd, dd.getSkeleton().prepare(!0), dd.getFinalMatrix().determinant() < 0 && (this.scalingDeterminant *= -1), this
        }
        detachFromBone() {
          let dd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          return this.parent ? (this.parent.getWorldMatrix().determinant() < 0 && (this.scalingDeterminant *= -1), this._transformToBoneReferal = null, this.parent = dd ? this._currentParentWhenAttachingToBone : null, this) : (dd && (this.parent = this._currentParentWhenAttachingToBone), this)
        }
        rotate(Od, md, Wd) {
          let Fd;
          if (Od.normalize(), this.rotationQuaternion || (this.rotationQuaternion = this.rotation.toQuaternion(), this.rotation.Bdd(0)), Wd && 0 !== Wd) {
            if (this.parent) {
              const dd = this.parent.getWorldMatrix(),
                Wd = td.h.Matrix[0];
              dd.invertToRef(Wd), Od = td.j.TransformNormal(Od, Wd), dd.determinant() < 0 && (md *= -1)
            }
            Fd = td.e.RotationAxisToRef(Od, md, dd._RotationAxisCache), Fd.multiplyToRef(this.rotationQuaternion, this.rotationQuaternion)
          } else Fd = td.e.RotationAxisToRef(Od, md, dd._RotationAxisCache), this.rotationQuaternion.multiplyToRef(Fd, this.rotationQuaternion);
          return this
        }
        rotateAround(dd, Od, md) {
          Od.normalize(), this.rotationQuaternion || (this.rotationQuaternion = td.e.RotationYawPitchRoll(this.rotation.y, this.rotation.x, this.rotation.z), this.rotation.Bdd(0));
          const Wd = td.h.Cq[0],
            Fd = td.h.Cq[1],
            Rd = td.h.Cq[2],
            Xd = td.h.Quaternion[0],
            Kd = td.h.Matrix[0],
            hd = td.h.Matrix[1],
            vd = td.h.Matrix[2],
            Qd = td.h.Matrix[3];
          return dd.subtractToRef(this.position, Wd), td.d.TranslationToRef(Wd.x, Wd.y, Wd.z, Kd), td.d.TranslationToRef(-Wd.x, -Wd.y, -Wd.z, hd), td.d.RotationAxisToRef(Od, md, vd), hd.multiplyToRef(vd, Qd), Qd.multiplyToRef(Kd, Qd), Qd.decompose(Fd, Xd, Rd), this.position.addInPlace(Rd), Xd.multiplyToRef(this.rotationQuaternion, this.rotationQuaternion), this
        }
        translate(dd, Od, md) {
          const Wd = dd.scale(Od);
          if (md && 0 !== md) this.setAbsolutePosition(this.getAbsolutePosition().add(Wd));
          else {
            const dd = this.getPositionExpressedInLocalSpace().add(Wd);
            this.setPositionWithLocalVector(dd)
          }
          return this
        }
        addRotation(dd, Od, md) {
          let Wd;
          this.rotationQuaternion ? Wd = this.rotationQuaternion : (Wd = td.h.Quaternion[1], td.e.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, this.rotation.z, Wd));
          const Fd = td.h.Quaternion[0];
          return td.e.RotationYawPitchRollToRef(Od, dd, md, Fd), Wd.multiplyInPlace(Fd), this.rotationQuaternion || Wd.toEulerAnglesToRef(this.rotation), this
        }
        _getEffectiveParent() {
          return this.parent
        }
        isWorldMatrixCameraDependent() {
          return this._infiniteDistance && !this.parent || this._billboardMode !== dd.BILLBOARDMODE_NONE
        }
        computeWorldMatrix() {
          let Od = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            md = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          if (this._isWorldMatrixFrozen && !this._isDirty) return this._worldMatrix;
          const Wd = this.zV().getRenderId();
          if (!this._isDirty && !Od && (this._currentRenderId === Wd || this.isSynchronized())) return this._currentRenderId = Wd, this._worldMatrix;
          md = md || this.zV().activeCamera, this._updateCache();
          const Fd = this._cache;
          Fd.pivotMatrixUpdated = !1, Fd.billboardMode = this.billboardMode, Fd.infiniteDistance = this.infiniteDistance, Fd.parent = this._parentNode, this._currentRenderId = Wd, this._childUpdateId += 1, this._isDirty = !1, this._position._isDirty = !1, this._rotation._isDirty = !1, this._scaling._isDirty = !1;
          const Rd = this._getEffectiveParent(),
            Xd = dd._TmpScaling;
          let Kd, hd = this._position;
          if (this._infiniteDistance && !this.parent && md) {
            const Od = md.getWorldMatrix().m;
            hd = dd._TmpTranslation, hd.KOd(this._position.x + Od[12], this._position.y + Od[13], this._position.z + Od[14])
          }
          if (Xd.KOd(this._scaling.x * this.scalingDeterminant, this._scaling.y * this.scalingDeterminant, this._scaling.z * this.scalingDeterminant), this._rotationQuaternion) {
            if (this._rotationQuaternion._isDirty = !1, Kd = this._rotationQuaternion, this.reIntegrateRotationIntoRotationQuaternion) {
              this.rotation.lengthSquared() && (this._rotationQuaternion.multiplyInPlace(td.e.RotationYawPitchRoll(this._rotation.y, this._rotation.x, this._rotation.z)), this._rotation.KOd(0, 0, 0))
            }
          } else Kd = dd._TmpRotation, td.e.RotationYawPitchRollToRef(this._rotation.y, this._rotation.x, this._rotation.z, Kd);
          if (this._usePivotMatrix) {
            const dd = td.h.Matrix[1];
            td.d.ScalingToRef(Xd.x, Xd.y, Xd.z, dd);
            const Od = td.h.Matrix[0];
            Kd.toRotationMatrix(Od), this._pivotMatrix.multiplyToRef(dd, td.h.Matrix[4]), td.h.Matrix[4].multiplyToRef(Od, this._localMatrix), this._postMultiplyPivotMatrix && this._localMatrix.multiplyToRef(this._pivotMatrixInverse, this._localMatrix), this._localMatrix.addTranslationFromFloats(hd.x, hd.y, hd.z)
          } else td.d.ComposeToRef(Xd, Kd, hd, this._localMatrix);
          if (Rd && Rd.getWorldMatrix) {
            if (Od && Rd.computeWorldMatrix(Od), this.billboardMode) {
              if (this._transformToBoneReferal) {
                const dd = this.parent;
                dd.getSkeleton().prepare(), dd.getFinalMatrix().multiplyToRef(this._transformToBoneReferal.getWorldMatrix(), td.h.Matrix[7])
              } else td.h.Matrix[7].Bx(Rd.getWorldMatrix());
              const Od = td.h.Cq[5],
                md = td.h.Cq[6],
                Wd = td.h.Quaternion[0];
              td.h.Matrix[7].decompose(md, Wd, Od), td.d.ScalingToRef(md.x, md.y, md.z, td.h.Matrix[7]), td.h.Matrix[7].setTranslation(Od), dd.BillboardUseParentOrientation && (this._position.applyRotationQuaternionToRef(Wd, Od), this._localMatrix.setTranslation(Od)), this._localMatrix.multiplyToRef(td.h.Matrix[7], this._worldMatrix)
            } else if (this._transformToBoneReferal) {
              const dd = this.parent;
              dd.getSkeleton().prepare(), this._localMatrix.multiplyToRef(dd.getFinalMatrix(), td.h.Matrix[6]), td.h.Matrix[6].multiplyToRef(this._transformToBoneReferal.getWorldMatrix(), this._worldMatrix)
            } else this._localMatrix.multiplyToRef(Rd.getWorldMatrix(), this._worldMatrix);
            this._markSyncedWithParent()
          } else this._worldMatrix.Bx(this._localMatrix);
          if (md && this.billboardMode)
            if (Fd.useBillboardPosition) {
              const Od = td.h.Cq[0];
              this._worldMatrix.getTranslationToRef(Od);
              const Wd = md.globalPosition;
              this._worldMatrix.invertToRef(td.h.Matrix[1]);
              const Fd = td.h.Cq[1];
              td.j.TransformCoordinatesToRef(Wd, td.h.Matrix[1], Fd), Fd.normalize();
              const Rd = -Math.atan2(Fd.z, Fd.x) + Math.PI / 2,
                Xd = Math.sqrt(Fd.x * Fd.x + Fd.z * Fd.z),
                Kd = -Math.atan2(Fd.y, Xd);
              if (td.e.RotationYawPitchRollToRef(Rd, Kd, 0, td.h.Quaternion[0]), (this.billboardMode & dd.BILLBOARDMODE_ALL) !== dd.BILLBOARDMODE_ALL) {
                const Od = td.h.Cq[1];
                td.h.Quaternion[0].toEulerAnglesToRef(Od), (this.billboardMode & dd.BILLBOARDMODE_X) !== dd.BILLBOARDMODE_X && (Od.x = 0), (this.billboardMode & dd.BILLBOARDMODE_Y) !== dd.BILLBOARDMODE_Y && (Od.y = 0), (this.billboardMode & dd.BILLBOARDMODE_Z) !== dd.BILLBOARDMODE_Z && (Od.z = 0), td.d.RotationYawPitchRollToRef(Od.y, Od.x, Od.z, td.h.Matrix[0])
              } else td.d.FromQuaternionToRef(td.h.Quaternion[0], td.h.Matrix[0]);
              this._worldMatrix.setTranslationFromFloats(0, 0, 0), this._worldMatrix.multiplyToRef(td.h.Matrix[0], this._worldMatrix), this._worldMatrix.setTranslation(td.h.Cq[0])
            } else {
              const Od = td.h.Cq[0];
              this._worldMatrix.getTranslationToRef(Od), td.h.Matrix[1].Bx(md.getViewMatrix());
              const Wd = this.zV().useRightHandedSystem;
              if (Wd && td.h.Matrix[1].multiplyToRef(dd._TmpRHRestore, td.h.Matrix[1]), td.h.Matrix[1].setTranslationFromFloats(0, 0, 0), td.h.Matrix[1].invertToRef(td.h.Matrix[0]), (this.billboardMode & dd.BILLBOARDMODE_ALL) !== dd.BILLBOARDMODE_ALL) {
                td.h.Matrix[0].decompose(void 0, td.h.Quaternion[0], void 0);
                const Od = td.h.Cq[1];
                td.h.Quaternion[0].toEulerAnglesToRef(Od), (this.billboardMode & dd.BILLBOARDMODE_X) !== dd.BILLBOARDMODE_X && (Od.x = 0), (this.billboardMode & dd.BILLBOARDMODE_Y) !== dd.BILLBOARDMODE_Y && (Od.y = 0), (this.billboardMode & dd.BILLBOARDMODE_Z) !== dd.BILLBOARDMODE_Z && (Od.z = 0), Wd && (Od.y += Math.PI), td.d.RotationYawPitchRollToRef(Od.y, Od.x, Od.z, td.h.Matrix[0])
              }
              this._worldMatrix.setTranslationFromFloats(0, 0, 0), this._worldMatrix.multiplyToRef(td.h.Matrix[0], this._worldMatrix), this._worldMatrix.setTranslation(td.h.Cq[0])
            } return this.ignoreNonUniformScaling ? this._updateNonUniformScalingState(!1) : this._scaling.isNonUniformWithinEpsilon(1e-6) ? this._updateNonUniformScalingState(!0) : Rd && Rd._nonUniformScaling ? this._updateNonUniformScalingState(Rd._nonUniformScaling) : this._updateNonUniformScalingState(!1), this._afterComputeWorldMatrix(), this._absolutePosition.KOd(this._worldMatrix.m[12], this._worldMatrix.m[13], this._worldMatrix.m[14]), this._isAbsoluteSynced = !1, this.onAfterWorldMatrixUpdateObservable.notifyObservers(this), this._poseMatrix || (this._poseMatrix = td.d.Invert(this._worldMatrix)), this._worldMatrixDeterminantIsDirty = !0, this._worldMatrix
        }
        resetLocalMatrix() {
          let dd = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          if (this.computeWorldMatrix(), dd) {
            const dd = this.getChildren();
            for (let Od = 0; Od < dd.length; ++Od) {
              const md = dd[Od];
              if (md) {
                md.computeWorldMatrix();
                const dd = td.h.Matrix[0];
                md._localMatrix.multiplyToRef(this._localMatrix, dd);
                const Od = td.h.Quaternion[0];
                dd.decompose(md.Tt, Od, md.position), md.rotationQuaternion ? md.rotationQuaternion.Bx(Od) : Od.toEulerAnglesToRef(md.rotation)
              }
            }
          }
          this.Tt.KOd(1, 1, 1), this.position.KOd(0, 0, 0), this.rotation.KOd(0, 0, 0), this.rotationQuaternion && (this.rotationQuaternion = td.e.Identity()), this._worldMatrix = td.d.Identity()
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
          return dd || (dd = this.zV().activeCamera), td.j.TransformCoordinates(this.getAbsolutePosition(), dd.getViewMatrix())
        }
        getDistanceToCamera() {
          let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return dd || (dd = this.zV().activeCamera), this.getAbsolutePosition().subtract(dd.globalPosition).length()
        }
        clone(Od, md, Wd) {
          const Fd = vd.b.Clone((() => new dd(Od, this.zV())), this);
          if (Fd.name = Od, Fd.id = Od, md && (Fd.parent = md), !Wd) {
            const dd = this.getDescendants(!0);
            for (let md = 0; md < dd.length; md++) {
              const Wd = dd[md];
              Wd.clone && Wd.clone(Od + "." + Wd.name, Fd)
            }
          }
          return Fd
        }
        serialize(dd) {
          const Od = vd.b.Serialize(this, dd);
          return Od.type = this.getClassName(), Od.uniqueId = this.uniqueId, this.parent && this.parent._serializeAsParent(Od), Od.localMatrix = this.getPivotMatrix().RRd(), Od.isEnabled = this.isEnabled(), this._isWorldMatrixFrozen && (Od.sA = !0), vd.b.AppendSerializedAnimations(this, Od), Od.By = this.serializeAnimationRanges(), Od
        }
        getChildTransformNodes(Od, md) {
          const Wd = [];
          return this._getDescendants(Wd, Od, (Od => (!md || md(Od)) && Od instanceof dd)), Wd
        }
        dispose(dd) {
          let Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this.zV().stopAnimation(this), this.zV().removeTransformNode(this), this._parentContainer) {
            const dd = this._parentContainer.transformNodes.indexOf(this);
            dd > -1 && this._parentContainer.transformNodes.splice(dd, 1), this._parentContainer = null
          }
          if (this.onAfterWorldMatrixUpdateObservable.clear(), dd) {
            const dd = this.getChildTransformNodes(!0);
            for (const Od of dd) Od.parent = null, Od.computeWorldMatrix(!0)
          }
          super.dispose(dd, Od)
        }
        normalizeToUnitCube() {
          let dd = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            md = arguments.length > 2 ? arguments[2] : void 0,
            Wd = null,
            Fd = null;
          Od && (this.rotationQuaternion ? (Fd = this.rotationQuaternion.clone(), this.rotationQuaternion.KOd(0, 0, 0, 1)) : this.rotation && (Wd = this.rotation.clone(), this.rotation.KOd(0, 0, 0)));
          const Rd = this.getHierarchyBoundingVectors(dd, md),
            Xd = Rd.max.subtract(Rd.min),
            Kd = Math.max(Xd.x, Xd.y, Xd.z);
          if (0 === Kd) return this;
          const hd = 1 / Kd;
          return this.Tt.scaleInPlace(hd), Od && (this.rotationQuaternion && Fd ? this.rotationQuaternion.Bx(Fd) : this.rotation && Wd && this.rotation.Bx(Wd)), this
        }
        _syncAbsoluteScalingAndRotation() {
          this._isAbsoluteSynced || (this._worldMatrix.decompose(this._absoluteScaling, this._absoluteRotationQuaternion), this._isAbsoluteSynced = !0)
        }
      }, (() => {
        const vd = "function" === typeof Symbol && Symbol.metadata ? Object.create(yd[Symbol.metadata] ?? null) : void 0;
        Od = [(0, hd.B)("position")], md = [(0, hd.B)("rotation")], Wd = [(0, hd.v)("rotationQuaternion")], Fd = [(0, hd.B)("Tt")], Rd = [(0, hd.E)("billboardMode")], Xd = [(0, hd.E)()], Nd = [(0, hd.E)("infiniteDistance")], qd = [(0, hd.E)()], Hd = [(0, hd.E)()], (0, Kd.h)(null, null, Od, {
          kind: "field",
          name: "_position",
          static: !1,
          private: !1,
          access: {
            has: dd => "_position" in dd,
            get: dd => dd._position,
            set: (dd, Od) => {
              dd._position = Od
            }
          },
          metadata: vd
        }, bd, Td), (0, Kd.h)(null, null, md, {
          kind: "field",
          name: "_rotation",
          static: !1,
          private: !1,
          access: {
            has: dd => "_rotation" in dd,
            get: dd => dd._rotation,
            set: (dd, Od) => {
              dd._rotation = Od
            }
          },
          metadata: vd
        }, pd, Yd), (0, Kd.h)(null, null, Wd, {
          kind: "field",
          name: "_rotationQuaternion",
          static: !1,
          private: !1,
          access: {
            has: dd => "_rotationQuaternion" in dd,
            get: dd => dd._rotationQuaternion,
            set: (dd, Od) => {
              dd._rotationQuaternion = Od
            }
          },
          metadata: vd
        }, gd, wd), (0, Kd.h)(null, null, Fd, {
          kind: "field",
          name: "_scaling",
          static: !1,
          private: !1,
          access: {
            has: dd => "_scaling" in dd,
            get: dd => dd._scaling,
            set: (dd, Od) => {
              dd._scaling = Od
            }
          },
          metadata: vd
        }, Ed, Jd), (0, Kd.h)(null, null, Rd, {
          kind: "field",
          name: "_billboardMode",
          static: !1,
          private: !1,
          access: {
            has: dd => "_billboardMode" in dd,
            get: dd => dd._billboardMode,
            set: (dd, Od) => {
              dd._billboardMode = Od
            }
          },
          metadata: vd
        }, Ud, xd), (0, Kd.h)(null, null, Xd, {
          kind: "field",
          name: "scalingDeterminant",
          static: !1,
          private: !1,
          access: {
            has: dd => "scalingDeterminant" in dd,
            get: dd => dd.scalingDeterminant,
            set: (dd, Od) => {
              dd.scalingDeterminant = Od
            }
          },
          metadata: vd
        }, Bd, Sd), (0, Kd.h)(null, null, Nd, {
          kind: "field",
          name: "_infiniteDistance",
          static: !1,
          private: !1,
          access: {
            has: dd => "_infiniteDistance" in dd,
            get: dd => dd._infiniteDistance,
            set: (dd, Od) => {
              dd._infiniteDistance = Od
            }
          },
          metadata: vd
        }, sd, ud), (0, Kd.h)(null, null, qd, {
          kind: "field",
          name: "ignoreNonUniformScaling",
          static: !1,
          private: !1,
          access: {
            has: dd => "ignoreNonUniformScaling" in dd,
            get: dd => dd.ignoreNonUniformScaling,
            set: (dd, Od) => {
              dd.ignoreNonUniformScaling = Od
            }
          },
          metadata: vd
        }, Vd, Ad), (0, Kd.h)(null, null, Hd, {
          kind: "field",
          name: "reIntegrateRotationIntoRotationQuaternion",
          static: !1,
          private: !1,
          access: {
            has: dd => "reIntegrateRotationIntoRotationQuaternion" in dd,
            get: dd => dd.reIntegrateRotationIntoRotationQuaternion,
            set: (dd, Od) => {
              dd.reIntegrateRotationIntoRotationQuaternion = Od
            }
          },
          metadata: vd
        }, rd, Gd), vd && Object.defineProperty(dd, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: vd
        })
      })(), dd.BILLBOARDMODE_NONE = 0, dd.BILLBOARDMODE_X = 1, dd.BILLBOARDMODE_Y = 2, dd.BILLBOARDMODE_Z = 4, dd.BILLBOARDMODE_ALL = 7, dd.BILLBOARDMODE_USE_POSITION = 128, dd.BillboardUseParentOrientation = !1, dd._TmpRotation = td.e.Zero(), dd._TmpScaling = td.j.Zero(), dd._TmpTranslation = td.j.Zero(), dd._TmpRHRestore = td.d.Scaling(1, 1, -1), dd._LookAtVectorCache = new td.j(0, 0, 0), dd._RotationAxisCache = new td.e, dd
    })();

    function yd(dd, Od, md) {
      const Wd = vd.b.Parse((() => new Hd(dd.name, Od)), dd, Od, md);
      if (dd.localMatrix ? Wd.setPreTransformMatrix(td.d.FromArray(dd.localMatrix)) : dd.pivotMatrix && Wd.setPivotMatrix(td.d.FromArray(dd.pivotMatrix)), Wd.rY(dd.isEnabled), Wd._waitingParsedUniqueId = dd.uniqueId, void 0 !== dd.parentId && (Wd._waitingParentId = dd.parentId), void 0 !== dd.parentInstanceIndex && (Wd._waitingParentInstanceIndex = dd.parentInstanceIndex), dd.sA && (Wd._waitingFreezeWorldMatrix = dd.sA), dd.animations) {
        for (let Od = 0; Od < dd.animations.length; Od++) {
          const md = dd.animations[Od],
            Fd = (0, Nd.c)("BABYLON.Animation");
          Fd && Wd.animations.push(Fd.Parse(md))
        }
        od.b.ParseAnimationRanges(Wd, dd, Od)
      }
      return dd.autoAnimate && Od.beginAnimation(Wd, dd.autoAnimateFrom, dd.autoAnimateTo, dd.autoAnimateLoop, dd.autoAnimateSpeed || 1), Wd
    }
    let bd = !1;

    function Td() {
      bd || (bd = !0, Hd.Parse = yd)
    }(Wd = Hd.prototype).pC ?? (Wd.pC = (0, qd.i)("TransformNode", "pC")), (Fd = Hd.prototype).applyImpulse ?? (Fd.applyImpulse = (0, qd.i)("TransformNode", "applyImpulse")), (Rd = Hd.prototype).applyAngularImpulse ?? (Rd.applyAngularImpulse = (0, qd.i)("TransformNode", "applyAngularImpulse")), (Xd = Hd.prototype).applyTorque ?? (Xd.applyTorque = (0, qd.i)("TransformNode", "applyTorque")), Object.getOwnPropertyDescriptor(Hd.prototype, "physicsBody") || Object.defineProperty(Hd.prototype, "physicsBody", (0, qd.g)("TransformNode", "physicsBody"))
  },
  42335: (dd, Od, md) => {
    function Wd(dd, Od, md) {
      try {
        const Wd = dd.next();
        Wd.done ? Od(Wd) : Wd.value ? Wd.value.then((() => {
          Wd.value = void 0, Od(Wd)
        }), md) : Od(Wd)
      } catch (Wd) {
        md(Wd)
      }
    }

    function Fd() {
      let dd, Od = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 25;
      return (md, Fd, Rd) => {
        const Xd = performance.now();
        void 0 === dd || Xd - dd > Od ? (dd = Xd, setTimeout((() => {
          Wd(md, Fd, Rd)
        }), 0)) : Wd(md, Fd, Rd)
      }
    }

    function Rd(dd, Od, md, Wd, Fd) {
      const Rd = () => {
        let Xd;
        const Kd = dd => {
          dd.done ? md(dd.value) : void 0 === Xd ? Xd = !0 : Rd()
        };
        do {
          Xd = void 0, Fd && Fd.aborted ? Wd(new Error("Aborted")) : Od(dd, Kd, Wd), void 0 === Xd && (Xd = !1)
        } while (Xd)
      };
      Rd()
    }

    function Xd(dd, Od) {
      let md;
      return Rd(dd, Wd, (dd => md = dd), (dd => {
        throw dd
      }), Od), md
    }
    async function Kd(dd, Od, md) {
      return await new Promise(((Wd, Fd) => {
        Rd(dd, Od, Wd, Fd, md)
      }))
    }

    function hd(dd, Od) {
      return function() {
        return Xd(dd(...arguments), Od)
      }
    }
    md.d(Od, {
      b: () => Fd,
      d: () => hd,
      h: () => Kd,
      l: () => Xd
    })
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);
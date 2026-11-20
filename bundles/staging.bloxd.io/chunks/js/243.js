export const id = 243;
export const ids = [243];
export const modules = {
  39515: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => Cv,
      e: () => Gv
    });
    var hv = Pv(39295),
      Sv = Pv(39300),
      ev = Pv(39413),
      gv = Pv(36618),
      pv = Pv(36594),
      dv = Pv(39518),
      Nv = Pv(38209),
      lv = Pv(36631),
      Tv = Pv(39190),
      Wv = Pv(37633),
      wv = Pv(37290),
      av = Pv(39266),
      sv = Pv(39312);
    let Cv = (() => {
      var vv;
      let zv, Pv, lv, Cv, iv, cv, Gv, mv, jv, fv, Fv, Yv, nv, Ov, Dv, Kv, Vv, Uv, Rv = dv.c,
        xv = [],
        tv = [],
        qv = [],
        Iv = [],
        Qv = [],
        Zv = [],
        Av = [],
        Lv = [],
        Hv = [],
        Mv = [],
        yv = [],
        Bv = [],
        Jv = [],
        Ev = [],
        ov = [],
        bv = [],
        rv = [],
        kv = [],
        Xv = [],
        uv = [],
        vz = [],
        zz = [],
        Pz = [],
        hz = [],
        Sz = [];
      return vv = class extends Rv {
        get position() {
          return this._position
        }
        set position(vv) {
          this._position = vv
        }
        set upVector(vv) {
          this._upVector = vv
        }
        get upVector() {
          return this._upVector
        }
        get screenArea() {
          let zv, Pv;
          if (this.mode === vv.PERSPECTIVE_CAMERA) this.fovMode === vv.FOVMODE_VERTICAL_FIXED ? (Pv = 2 * this.minZ * Math.tan(this.fov / 2), zv = this.ma().getAspectRatio(this) * Pv) : (zv = 2 * this.minZ * Math.tan(this.fov / 2), Pv = zv / this.ma().getAspectRatio(this));
          else {
            const vv = this.ma().getRenderWidth() / 2,
              hv = this.ma().getRenderHeight() / 2;
            zv = (this.orthoRight ?? vv) - (this.orthoLeft ?? -vv), Pv = (this.orthoTop ?? hv) - (this.orthoBottom ?? -hv)
          }
          return zv * Pv
        }
        set orthoLeft(vv) {
          this._orthoLeft = vv;
          for (const zv of this._rigCameras) zv.orthoLeft = vv
        }
        get orthoLeft() {
          return this._orthoLeft
        }
        set orthoRight(vv) {
          this._orthoRight = vv;
          for (const zv of this._rigCameras) zv.orthoRight = vv
        }
        get orthoRight() {
          return this._orthoRight
        }
        set orthoBottom(vv) {
          this._orthoBottom = vv;
          for (const zv of this._rigCameras) zv.orthoBottom = vv
        }
        get orthoBottom() {
          return this._orthoBottom
        }
        set orthoTop(vv) {
          this._orthoTop = vv;
          for (const zv of this._rigCameras) zv.orthoTop = vv
        }
        get orthoTop() {
          return this._orthoTop
        }
        setFocalLength(vv) {
          let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 36;
          this.fov = 2 * Math.atan(zv / (2 * vv))
        }
        get inertia() {
          return this._baseInertia
        }
        set inertia(vv) {
          this._baseInertia = vv
        }
        set mode(vv) {
          this._mode = vv;
          for (const zv of this._rigCameras) zv.mode = vv
        }
        get mode() {
          return this._mode
        }
        get hasMoved() {
          return this._hasMoved
        }
        constructor(zv, Pv, Sv) {
          let dv = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
          (0, av.c)(), super(zv, Sv, !1), this.inputs = (0, hv.f)(this, xv), this._position = (0, hv.f)(this, tv, pv.l.Zero()), this._upVector = ((0, hv.f)(this, qv), (0, hv.f)(this, Iv, pv.l.Up())), this.oblique = ((0, hv.f)(this, Qv), null), this._orthoLeft = null, this._orthoRight = null, this._orthoBottom = null, this._orthoTop = null, this.fov = (0, hv.f)(this, Zv, .8), this.projectionPlaneTilt = ((0, hv.f)(this, Av), (0, hv.f)(this, Lv, 0)), this.minZ = ((0, hv.f)(this, Hv), (0, hv.f)(this, Mv, 1)), this.maxZ = ((0, hv.f)(this, yv), (0, hv.f)(this, Bv, 1e4)), this._baseInertia = ((0, hv.f)(this, Jv), .9), this._mode = vv.PERSPECTIVE_CAMERA, this.isIntermediate = !1, this.viewport = new Wv.d(0, 0, 1, 1), this.layerMask = (0, hv.f)(this, Ev, 268435455), this.fovMode = ((0, hv.f)(this, ov), (0, hv.f)(this, bv, vv.FOVMODE_VERTICAL_FIXED)), this.cameraRigMode = ((0, hv.f)(this, rv), (0, hv.f)(this, kv, vv.RIG_MODE_NONE)), this.interaxialDistance = ((0, hv.f)(this, Xv), (0, hv.f)(this, uv, void 0)), this.isStereoscopicSideBySide = ((0, hv.f)(this, vz), (0, hv.f)(this, zz, void 0)), this.ignoreCameraMaxZ = ((0, hv.f)(this, Pz), (0, hv.f)(this, hz, !1)), this.customRenderTargets = ((0, hv.f)(this, Sz), []), this.outputRenderTarget = null, this.onViewMatrixChangedObservable = new gv.c, this.onProjectionMatrixChangedObservable = new gv.c, this.onAfterCheckInputsObservable = new gv.c, this.onRestoreStateObservable = new gv.c, this.isRigCamera = !1, this._hasMoved = !1, this._rigCameras = new Array, this._skipRendering = !1, this._projectionMatrix = new pv.c, this._postProcesses = new Array, this._activeMeshes = new ev.g(256), this._globalPosition = pv.l.Zero(), this._computedViewMatrix = pv.c.Identity(), this._doNotComputeProjectionMatrix = !1, this._transformMatrix = pv.c.Zero(), this._refreshFrustumPlanes = !0, this._absoluteRotation = pv.d.Identity(), this._isCamera = !0, this._isLeftCamera = !1, this._isRightCamera = !1, this.layerMask = this.rD().defaultCameraLayerMask, this.rD().addCamera(this), dv && !this.rD().activeCamera && (this.rD().activeCamera = this), this.position = Pv, this.renderPassId = this.rD().ma().createRenderPassId(`Camera ${zv}`)
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
          return "OC"
        }
        toString(vv) {
          let zv = "Name: " + this.name;
          if (zv += ", type: " + this.getClassName(), this.animations)
            for (let Pv = 0; Pv < this.animations.length; Pv++) zv += ", animation[0]: " + this.animations[Pv].toString(vv);
          return zv
        }
        applyVerticalCorrection() {
          const vv = this.absoluteRotation.toEulerAngles();
          this.projectionPlaneTilt = this._scene.useRightHandedSystem ? -vv.x : vv.x
        }
        get globalPosition() {
          return this._globalPosition
        }
        getActiveMeshes() {
          return this._activeMeshes
        }
        isActiveMesh(vv) {
          return -1 !== this._activeMeshes.indexOf(vv)
        }
        isReady() {
          let vv = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (vv)
            for (const zv of this._postProcesses)
              if (zv && !zv.isReady()) return !1;
          return super.isReady(vv)
        }
        _initCache() {
          super._initCache(), this._cache.position = new pv.l(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.upVector = new pv.l(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.mode = void 0, this._cache.minZ = void 0, this._cache.maxZ = void 0, this._cache.fov = void 0, this._cache.fovMode = void 0, this._cache.aspectRatio = void 0, this._cache.orthoLeft = void 0, this._cache.orthoRight = void 0, this._cache.orthoBottom = void 0, this._cache.orthoTop = void 0, this._cache.obliqueAngle = void 0, this._cache.obliqueLength = void 0, this._cache.obliqueOffset = void 0, this._cache.renderWidth = void 0, this._cache.renderHeight = void 0
        }
        _updateCache(vv) {
          vv || super._updateCache(), this._cache.position.Vzv(this.position), this._cache.upVector.Vzv(this.upVector)
        }
        _isSynchronized() {
          return this._isSynchronizedViewMatrix() && this._isSynchronizedProjectionMatrix()
        }
        _isSynchronizedViewMatrix() {
          return !!super._isSynchronized() && (this._cache.position.equals(this.position) && this._cache.upVector.equals(this.upVector) && this.isSynchronizedWithParent())
        }
        _isSynchronizedProjectionMatrix() {
          const zv = this.ignoreCameraMaxZ ? 0 : this.maxZ;
          let Pv = this._cache.mode === this.mode && this._cache.minZ === this.minZ && this._cache.maxZ === zv;
          if (!Pv) return !1;
          const hv = this.ma();
          return this.mode === vv.PERSPECTIVE_CAMERA ? Pv = this._cache.fov === this.fov && this._cache.fovMode === this.fovMode && this._cache.aspectRatio === hv.getAspectRatio(this) && this._cache.projectionPlaneTilt === this.projectionPlaneTilt : (Pv = this._cache.orthoLeft === this.orthoLeft && this._cache.orthoRight === this.orthoRight && this._cache.orthoBottom === this.orthoBottom && this._cache.orthoTop === this.orthoTop && this._cache.renderWidth === hv.getRenderWidth() && this._cache.renderHeight === hv.getRenderHeight(), this.oblique && (Pv = Pv && this._cache.obliqueAngle === this.oblique.angle && this._cache.obliqueLength === this.oblique.length && this._cache.obliqueOffset === this.oblique.offset)), Pv
        }
        attachControl(vv, zv) {}
        detachControl(vv) {}
        update() {
          this._hasMoved = !1, this._checkInputs(), this.cameraRigMode !== vv.RIG_MODE_NONE && this._updateRigCameras(), this.getViewMatrix(), this.getProjectionMatrix()
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
          for (let vv = 0; vv < this._postProcesses.length; vv++)
            if (null !== this._postProcesses[vv]) return this._postProcesses[vv];
          return null
        }
        _cascadePostProcessesToRigCams() {
          const vv = this._getFirstPostProcess();
          vv && vv.markTextureDirty();
          for (let zv = 0, Pv = this._rigCameras.length; zv < Pv; zv++) {
            const vv = this._rigCameras[zv],
              Pv = vv._rigPostProcess;
            if (Pv) {
              "pass" === Pv.getEffectName() && (vv.isIntermediate = 0 === this._postProcesses.length), vv._postProcesses = this._postProcesses.slice(0).concat(Pv), Pv.markTextureDirty()
            } else vv._postProcesses = this._postProcesses.slice(0)
          }
        }
        attachPostProcess(vv) {
          let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          return !vv.isReusable() && this._postProcesses.indexOf(vv) > -1 ? (Nv.d.Error("You're trying to reuse a post process not defined as reusable."), 0) : (null == zv || zv < 0 ? this._postProcesses.push(vv) : null === this._postProcesses[zv] ? this._postProcesses[zv] = vv : this._postProcesses.splice(zv, 0, vv), this._cascadePostProcessesToRigCams(), this._scene.prePassRenderer && this._scene.prePassRenderer.xvv(), this._postProcesses.indexOf(vv))
        }
        detachPostProcess(vv) {
          const zv = this._postProcesses.indexOf(vv); - 1 !== zv && (this._postProcesses[zv] = null), this._scene.prePassRenderer && this._scene.prePassRenderer.xvv(), this._cascadePostProcessesToRigCams()
        }
        getWorldMatrix() {
          return this._isSynchronizedViewMatrix() || this.getViewMatrix(), this._worldMatrix
        }
        _getViewMatrix() {
          return pv.c.Identity()
        }
        getViewMatrix(vv) {
          return !vv && this._isSynchronizedViewMatrix() || (this._hasMoved = !0, this.updateCache(), this._computedViewMatrix = this._getViewMatrix(), this._currentRenderId = this.rD().getRenderId(), this._childUpdateId++, this._refreshFrustumPlanes = !0, this._cameraRigParams && this._cameraRigParams.vrPreViewMatrix && this._computedViewMatrix.multiplyToRef(this._cameraRigParams.vrPreViewMatrix, this._computedViewMatrix), this.parent && this.parent.onViewMatrixChangedObservable && this.parent.onViewMatrixChangedObservable.notifyObservers(this.parent), this.onViewMatrixChangedObservable.notifyObservers(this), this._computedViewMatrix.invertToRef(this._worldMatrix), this._worldMatrix.getTranslationToRef(this._globalPosition)), this._computedViewMatrix
        }
        freezeProjectionMatrix(vv) {
          this._doNotComputeProjectionMatrix = !0, void 0 !== vv && (this._projectionMatrix = vv)
        }
        unfreezeProjectionMatrix() {
          this._doNotComputeProjectionMatrix = !1
        }
        getProjectionMatrix(zv) {
          if (this._doNotComputeProjectionMatrix || !zv && this._isSynchronizedProjectionMatrix()) return this._projectionMatrix;
          const Pv = this.ignoreCameraMaxZ ? 0 : this.maxZ;
          this._cache.mode = this.mode, this._cache.minZ = this.minZ, this._cache.maxZ = Pv, this._refreshFrustumPlanes = !0;
          const hv = this.ma(),
            Sv = this.rD(),
            ev = hv.SPv;
          if (this.mode === vv.PERSPECTIVE_CAMERA) {
            let zv;
            this._cache.fov = this.fov, this._cache.fovMode = this.fovMode, this._cache.aspectRatio = hv.getAspectRatio(this), this._cache.projectionPlaneTilt = this.projectionPlaneTilt, this.minZ <= 0 && (this.minZ = .1), zv = Sv.useRightHandedSystem ? pv.c.PerspectiveFovRHToRef : pv.c.PerspectiveFovLHToRef, zv(this.fov, hv.getAspectRatio(this), ev ? Pv : this.minZ, ev ? this.minZ : Pv, this._projectionMatrix, this.fovMode === vv.FOVMODE_VERTICAL_FIXED, hv.isNDCHalfZRange, this.projectionPlaneTilt, ev)
          } else {
            const vv = hv.getRenderWidth() / 2,
              zv = hv.getRenderHeight() / 2;
            Sv.useRightHandedSystem ? this.oblique ? pv.c.ObliqueOffCenterRHToRef(this.orthoLeft ?? -vv, this.orthoRight ?? vv, this.orthoBottom ?? -zv, this.orthoTop ?? zv, ev ? Pv : this.minZ, ev ? this.minZ : Pv, this.oblique.length, this.oblique.angle, this._computeObliqueDistance(this.oblique.offset), this._projectionMatrix, hv.isNDCHalfZRange) : pv.c.OrthoOffCenterRHToRef(this.orthoLeft ?? -vv, this.orthoRight ?? vv, this.orthoBottom ?? -zv, this.orthoTop ?? zv, ev ? Pv : this.minZ, ev ? this.minZ : Pv, this._projectionMatrix, hv.isNDCHalfZRange) : this.oblique ? pv.c.ObliqueOffCenterLHToRef(this.orthoLeft ?? -vv, this.orthoRight ?? vv, this.orthoBottom ?? -zv, this.orthoTop ?? zv, ev ? Pv : this.minZ, ev ? this.minZ : Pv, this.oblique.length, this.oblique.angle, this._computeObliqueDistance(this.oblique.offset), this._projectionMatrix, hv.isNDCHalfZRange) : pv.c.OrthoOffCenterLHToRef(this.orthoLeft ?? -vv, this.orthoRight ?? vv, this.orthoBottom ?? -zv, this.orthoTop ?? zv, ev ? Pv : this.minZ, ev ? this.minZ : Pv, this._projectionMatrix, hv.isNDCHalfZRange), this._cache.orthoLeft = this.orthoLeft, this._cache.orthoRight = this.orthoRight, this._cache.orthoBottom = this.orthoBottom, this._cache.orthoTop = this.orthoTop, this._cache.obliqueAngle = this.oblique?.angle, this._cache.obliqueLength = this.oblique?.length, this._cache.obliqueOffset = this.oblique?.offset, this._cache.renderWidth = hv.getRenderWidth(), this._cache.renderHeight = hv.getRenderHeight()
          }
          return this.onProjectionMatrixChangedObservable.notifyObservers(this), this._projectionMatrix
        }
        getTransformationMatrix() {
          return this._computedViewMatrix.multiplyToRef(this._projectionMatrix, this._transformMatrix), this._transformMatrix
        }
        _computeObliqueDistance(vv) {
          return (this.radius || (this.target ? pv.l.Distance(this.position, this.target) : this.position.length())) + vv
        }
        _updateFrustumPlanes() {
          this._refreshFrustumPlanes && (this.getTransformationMatrix(), this._frustumPlanes ? wv.c.GetPlanesToRef(this._transformMatrix, this._frustumPlanes) : this._frustumPlanes = wv.c.GetPlanes(this._transformMatrix), this._refreshFrustumPlanes = !1)
        }
        isInFrustum(vv) {
          let zv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._updateFrustumPlanes(), zv && this.rigCameras.length > 0) {
            let zv = !1;
            for (const Pv of this.rigCameras) Pv._updateFrustumPlanes(), zv = zv || vv.isInFrustum(Pv._frustumPlanes);
            return zv
          }
          return vv.isInFrustum(this._frustumPlanes)
        }
        isCompletelyInFrustum(vv) {
          return this._updateFrustumPlanes(), vv.isCompletelyInFrustum(this._frustumPlanes)
        }
        getForwardRay() {
          throw (0, Tv.m)("Ray")
        }
        getForwardRayToRef(vv) {
          throw (0, Tv.m)("Ray")
        }
        dispose(zv) {
          let Pv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          for (this.onViewMatrixChangedObservable.clear(), this.onProjectionMatrixChangedObservable.clear(), this.onAfterCheckInputsObservable.clear(), this.onRestoreStateObservable.clear(), this.inputs && this.inputs.clear(), this.rD().stopAnimation(this), this.rD().removeCamera(this); this._rigCameras.length > 0;) {
            const vv = this._rigCameras.pop();
            vv && vv.dispose()
          }
          if (this._parentContainer) {
            const vv = this._parentContainer.cameras.indexOf(this);
            vv > -1 && this._parentContainer.cameras.splice(vv, 1), this._parentContainer = null
          }
          if (this._rigPostProcess) this._rigPostProcess.dispose(this), this._rigPostProcess = null, this._postProcesses.length = 0;
          else if (this.cameraRigMode !== vv.RIG_MODE_NONE) this._rigPostProcess = null, this._postProcesses.length = 0;
          else {
            let vv = this._postProcesses.length;
            for (; --vv >= 0;) {
              const zv = this._postProcesses[vv];
              zv && zv.dispose(this)
            }
          }
          let hv = this.customRenderTargets.length;
          for (; --hv >= 0;) this.customRenderTargets[hv].dispose();
          this.customRenderTargets.length = 0, this._activeMeshes.dispose(), this.rD().ma().releaseRenderPassId(this.renderPassId), super.dispose(zv, Pv)
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
        setCameraRigMode(zv, Pv) {
          if (this.cameraRigMode !== zv) {
            for (; this._rigCameras.length > 0;) {
              const vv = this._rigCameras.pop();
              vv && vv.dispose()
            }
            if (this.cameraRigMode = zv, this._cameraRigParams = {}, this._cameraRigParams.interaxialDistance = Pv.interaxialDistance || .0637, this._cameraRigParams.stereoHalfAngle = this._cameraRigParams.interaxialDistance / .0637 * (Math.PI / 180), this.cameraRigMode !== vv.RIG_MODE_NONE) {
              const vv = this.createRigCamera(this.name + "_L", 0);
              vv && (vv._isLeftCamera = !0);
              const zv = this.createRigCamera(this.name + "_R", 1);
              zv && (zv._isRightCamera = !0), vv && zv && (this._rigCameras.push(vv), this._rigCameras.push(zv))
            }
            this._setRigMode(Pv), this._cascadePostProcessesToRigCams(), this.update()
          }
        }
        _setRigMode(vv) {}
        _getVRProjectionMatrix() {
          return pv.c.PerspectiveFovLHToRef(this._cameraRigParams.vrMetrics.aspectRatioFov, this._cameraRigParams.vrMetrics.aspectRatio, this.minZ, this.ignoreCameraMaxZ ? 0 : this.maxZ, this._cameraRigParams.vrWorkMatrix, !0, this.ma().isNDCHalfZRange), this._cameraRigParams.vrWorkMatrix.multiplyToRef(this._cameraRigParams.vrHMatrix, this._projectionMatrix), this._projectionMatrix
        }
        setCameraRigParameter(vv, zv) {
          this._cameraRigParams || (this._cameraRigParams = {}), this._cameraRigParams[vv] = zv, "interaxialDistance" === vv && (this._cameraRigParams.stereoHalfAngle = zv / .0637 * (Math.PI / 180))
        }
        createRigCamera(vv, zv) {
          return null
        }
        _updateRigCameras() {
          for (let vv = 0; vv < this._rigCameras.length; vv++) this._rigCameras[vv].minZ = this.minZ, this._rigCameras[vv].maxZ = this.ignoreCameraMaxZ ? 0 : this.maxZ, this._rigCameras[vv].fov = this.fov, this._rigCameras[vv].upVector.Vzv(this.upVector);
          this.cameraRigMode === vv.RIG_MODE_STEREOSCOPIC_ANAGLYPH && (this._rigCameras[0].viewport = this._rigCameras[1].viewport = this.viewport)
        }
        _setupInputs() {}
        serialize() {
          const vv = sv.c.Serialize(this);
          return vv.uniqueId = this.uniqueId, vv.type = this.getClassName(), this.parent && this.parent._serializeAsParent(vv), this.inputs && this.inputs.serialize(vv), sv.c.AppendSerializedAnimations(this, vv), vv.PC = this.serializeAnimationRanges(), vv.isEnabled = this.isEnabled(), vv
        }
        clone(zv) {
          let Pv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const hv = sv.c.Clone(vv.GetConstructorFromName(this.getClassName(), zv, this.rD(), this.interaxialDistance, this.isStereoscopicSideBySide), this);
          return hv.name = zv, hv.parent = Pv, this.onClonedObservable.notifyObservers(hv), hv
        }
        ZH(vv) {
          const zv = pv.l.Zero();
          return this.getDirectionToRef(vv, zv), zv
        }
        get absoluteRotation() {
          return this.getWorldMatrix().decompose(void 0, this._absoluteRotation), this._absoluteRotation
        }
        getDirectionToRef(vv, zv) {
          pv.l.TransformNormalToRef(vv, this.getWorldMatrix(), zv)
        }
        static GetConstructorFromName(zv, Pv, hv) {
          let Sv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
            ev = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
          const gv = dv.c.Construct(zv, Pv, hv, {
            interaxial_distance: Sv,
            isStereoscopicSideBySide: ev
          });
          return gv || (() => vv._CreateDefaultParsedCamera(Pv, hv))
        }
        computeWorldMatrix() {
          return this.getWorldMatrix()
        }
        _calculateHandednessMultiplier() {
          let vv = this.rD().useRightHandedSystem ? -1 : 1;
          return this.parent && this.parent._getWorldMatrixDeterminant() < 0 && (vv *= -1), vv
        }
      }, (() => {
        const ev = "function" === typeof Symbol && Symbol.metadata ? Object.create(Rv[Symbol.metadata] ?? null) : void 0;
        zv = [(0, Sv.I)("position")], Pv = [(0, Sv.I)("upVector")], lv = [(0, Sv.L)()], Cv = [(0, Sv.L)()], iv = [(0, Sv.L)()], cv = [(0, Sv.L)()], Gv = [(0, Sv.L)()], mv = [(0, Sv.L)()], jv = [(0, Sv.L)()], fv = [(0, Sv.L)()], Fv = [(0, Sv.L)()], Yv = [(0, Sv.L)()], nv = [(0, Sv.L)()], Ov = [(0, Sv.L)()], Dv = [(0, Sv.L)()], Kv = [(0, Sv.L)()], Vv = [(0, Sv.L)()], Uv = [(0, Sv.L)()], (0, hv.e)(vv, null, lv, {
          kind: "getter",
          name: "orthoLeft",
          static: !1,
          private: !1,
          access: {
            has: vv => "orthoLeft" in vv,
            get: vv => vv.orthoLeft
          },
          metadata: ev
        }, null, xv), (0, hv.e)(vv, null, Cv, {
          kind: "getter",
          name: "orthoRight",
          static: !1,
          private: !1,
          access: {
            has: vv => "orthoRight" in vv,
            get: vv => vv.orthoRight
          },
          metadata: ev
        }, null, xv), (0, hv.e)(vv, null, iv, {
          kind: "getter",
          name: "orthoBottom",
          static: !1,
          private: !1,
          access: {
            has: vv => "orthoBottom" in vv,
            get: vv => vv.orthoBottom
          },
          metadata: ev
        }, null, xv), (0, hv.e)(vv, null, cv, {
          kind: "getter",
          name: "orthoTop",
          static: !1,
          private: !1,
          access: {
            has: vv => "orthoTop" in vv,
            get: vv => vv.orthoTop
          },
          metadata: ev
        }, null, xv), (0, hv.e)(vv, null, Fv, {
          kind: "getter",
          name: "inertia",
          static: !1,
          private: !1,
          access: {
            has: vv => "inertia" in vv,
            get: vv => vv.inertia
          },
          metadata: ev
        }, null, xv), (0, hv.e)(vv, null, Yv, {
          kind: "getter",
          name: "mode",
          static: !1,
          private: !1,
          access: {
            has: vv => "mode" in vv,
            get: vv => vv.mode
          },
          metadata: ev
        }, null, xv), (0, hv.e)(null, null, zv, {
          kind: "field",
          name: "_position",
          static: !1,
          private: !1,
          access: {
            has: vv => "_position" in vv,
            get: vv => vv._position,
            set: (vv, zv) => {
              vv._position = zv
            }
          },
          metadata: ev
        }, tv, qv), (0, hv.e)(null, null, Pv, {
          kind: "field",
          name: "_upVector",
          static: !1,
          private: !1,
          access: {
            has: vv => "_upVector" in vv,
            get: vv => vv._upVector,
            set: (vv, zv) => {
              vv._upVector = zv
            }
          },
          metadata: ev
        }, Iv, Qv), (0, hv.e)(null, null, Gv, {
          kind: "field",
          name: "fov",
          static: !1,
          private: !1,
          access: {
            has: vv => "fov" in vv,
            get: vv => vv.fov,
            set: (vv, zv) => {
              vv.fov = zv
            }
          },
          metadata: ev
        }, Zv, Av), (0, hv.e)(null, null, mv, {
          kind: "field",
          name: "projectionPlaneTilt",
          static: !1,
          private: !1,
          access: {
            has: vv => "projectionPlaneTilt" in vv,
            get: vv => vv.projectionPlaneTilt,
            set: (vv, zv) => {
              vv.projectionPlaneTilt = zv
            }
          },
          metadata: ev
        }, Lv, Hv), (0, hv.e)(null, null, jv, {
          kind: "field",
          name: "minZ",
          static: !1,
          private: !1,
          access: {
            has: vv => "minZ" in vv,
            get: vv => vv.minZ,
            set: (vv, zv) => {
              vv.minZ = zv
            }
          },
          metadata: ev
        }, Mv, yv), (0, hv.e)(null, null, fv, {
          kind: "field",
          name: "maxZ",
          static: !1,
          private: !1,
          access: {
            has: vv => "maxZ" in vv,
            get: vv => vv.maxZ,
            set: (vv, zv) => {
              vv.maxZ = zv
            }
          },
          metadata: ev
        }, Bv, Jv), (0, hv.e)(null, null, nv, {
          kind: "field",
          name: "layerMask",
          static: !1,
          private: !1,
          access: {
            has: vv => "layerMask" in vv,
            get: vv => vv.layerMask,
            set: (vv, zv) => {
              vv.layerMask = zv
            }
          },
          metadata: ev
        }, Ev, ov), (0, hv.e)(null, null, Ov, {
          kind: "field",
          name: "fovMode",
          static: !1,
          private: !1,
          access: {
            has: vv => "fovMode" in vv,
            get: vv => vv.fovMode,
            set: (vv, zv) => {
              vv.fovMode = zv
            }
          },
          metadata: ev
        }, bv, rv), (0, hv.e)(null, null, Dv, {
          kind: "field",
          name: "cameraRigMode",
          static: !1,
          private: !1,
          access: {
            has: vv => "cameraRigMode" in vv,
            get: vv => vv.cameraRigMode,
            set: (vv, zv) => {
              vv.cameraRigMode = zv
            }
          },
          metadata: ev
        }, kv, Xv), (0, hv.e)(null, null, Kv, {
          kind: "field",
          name: "interaxialDistance",
          static: !1,
          private: !1,
          access: {
            has: vv => "interaxialDistance" in vv,
            get: vv => vv.interaxialDistance,
            set: (vv, zv) => {
              vv.interaxialDistance = zv
            }
          },
          metadata: ev
        }, uv, vz), (0, hv.e)(null, null, Vv, {
          kind: "field",
          name: "isStereoscopicSideBySide",
          static: !1,
          private: !1,
          access: {
            has: vv => "isStereoscopicSideBySide" in vv,
            get: vv => vv.isStereoscopicSideBySide,
            set: (vv, zv) => {
              vv.isStereoscopicSideBySide = zv
            }
          },
          metadata: ev
        }, zz, Pz), (0, hv.e)(null, null, Uv, {
          kind: "field",
          name: "ignoreCameraMaxZ",
          static: !1,
          private: !1,
          access: {
            has: vv => "ignoreCameraMaxZ" in vv,
            get: vv => vv.ignoreCameraMaxZ,
            set: (vv, zv) => {
              vv.ignoreCameraMaxZ = zv
            }
          },
          metadata: ev
        }, hz, Sz), ev && Object.defineProperty(vv, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: ev
        })
      })(), vv._CreateDefaultParsedCamera = (vv, zv) => {
        throw (0, Tv.m)("UniversalCamera")
      }, vv.PERSPECTIVE_CAMERA = 0, vv.ORTHOGRAPHIC_CAMERA = 1, vv.FOVMODE_VERTICAL_FIXED = 0, vv.FOVMODE_HORIZONTAL_FIXED = 1, vv.RIG_MODE_NONE = 0, vv.RIG_MODE_STEREOSCOPIC_ANAGLYPH = 10, vv.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL = 11, vv.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED = 12, vv.RIG_MODE_STEREOSCOPIC_OVERUNDER = 13, vv.RIG_MODE_STEREOSCOPIC_INTERLACED = 14, vv.RIG_MODE_VR = 20, vv.RIG_MODE_CUSTOM = 22, vv.ForceAttachControlToAlwaysPreventDefault = !1, vv
    })();

    function iv(vv, zv) {
      const Pv = vv.type,
        hv = Cv.GetConstructorFromName(Pv, vv.name, zv, vv.interaxial_distance, vv.isStereoscopicSideBySide),
        Sv = sv.c.Parse(hv, vv, zv);
      if (void 0 !== vv.parentId && (Sv._waitingParentId = vv.parentId), void 0 !== vv.parentInstanceIndex && (Sv._waitingParentInstanceIndex = vv.parentInstanceIndex), Sv.inputs && (Sv.inputs.parse(vv), Sv._setupInputs()), vv.upVector && (Sv.upVector = pv.l.FromArray(vv.upVector)), Sv.setPosition && (Sv.position.f_(0, 0, 0), Sv.setPosition(pv.l.FromArray(vv.position))), vv.target && Sv.setTarget && Sv.setTarget(pv.l.FromArray(vv.target)), vv.cameraRigMode) {
        const zv = vv.interaxial_distance ? {
          interaxialDistance: vv.interaxial_distance
        } : {};
        Sv.setCameraRigMode(vv.cameraRigMode, zv)
      }
      if (vv.animations) {
        for (let zv = 0; zv < vv.animations.length; zv++) {
          const Pv = vv.animations[zv],
            hv = (0, lv.b)("BABYLON.Animation");
          hv && Sv.animations.push(hv.Parse(Pv))
        }
        dv.c.ParseAnimationRanges(Sv, vv, zv)
      }
      return vv.autoAnimate && zv.beginAnimation(Sv, vv.autoAnimateFrom, vv.autoAnimateTo, vv.autoAnimateLoop, vv.autoAnimateSpeed || 1), void 0 !== vv.isEnabled && Sv.uF(vv.isEnabled), Sv
    }
    let cv = !1;

    function Gv() {
      cv || (cv = !0, Cv.Parse = iv)
    }
  },
  39524: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => Sv
    });
    var hv = Pv(36594);
    class Sv {
      constructor(vv, zv, Pv) {
        this._cameraPosition = zv, this._behavior = Pv, this.activeInput = !1, this.speed = 1, this.sA = 1, this.panSpeed = 1, this.rotationXSpeed = 1, this.rotationYSpeed = 1, this._zoomSpeedMultiplier = 1, this._panSpeedMultiplier = 1, this.zoomInertia = .9, this.panInertia = .9, this.rotationInertia = .9, this.zoomAccumulatedPixels = 0, this.panAccumulatedPixels = new hv.l, this.rotationAccumulatedPixels = new hv.l, this.zoomDeltaCurrentFrame = 0, this.panDeltaCurrentFrame = hv.l.Zero(), this.rotationDeltaCurrentFrame = hv.l.Zero(), this._zoomVelocity = 0, this._panVelocity = new hv.l, this.referenceFrameRate = 60, this._rotationVelocity = new hv.l, this._prevFrameTimeMs = 0, this._scene = vv
      }
      computeCurrentFrameDeltas() {
        const vv = this._scene.ma().getDeltaTime(),
          zv = this._getEffectiveDeltaMs(vv);
        if (0 === this._zoomVelocity && 0 === this.zoomAccumulatedPixels && 0 === this._panVelocity.x && 0 === this._panVelocity.y && 0 === this._panVelocity.z && 0 === this.panAccumulatedPixels.x && 0 === this.panAccumulatedPixels.y && 0 === this.panAccumulatedPixels.z && 0 === this._rotationVelocity.x && 0 === this._rotationVelocity.y && 0 === this._rotationVelocity.z && 0 === this.rotationAccumulatedPixels.x && 0 === this.rotationAccumulatedPixels.y && 0 === this.rotationAccumulatedPixels.z && !this.activeInput) return this.panDeltaCurrentFrame.Dk(0), this.rotationDeltaCurrentFrame.Dk(0), this.zoomDeltaCurrentFrame = 0, void(vv > 0 && (this._prevFrameTimeMs = vv));
        this.panDeltaCurrentFrame.Dk(0), this.rotationDeltaCurrentFrame.Dk(0), this.zoomDeltaCurrentFrame = 0;
        (this.panAccumulatedPixels.lengthSquared() > 0 || this.rotationAccumulatedPixels.lengthSquared() > 0 || 0 !== this.zoomAccumulatedPixels) && this._behavior?.isInterpolating && this._behavior.stopAllAnimations(), this._panVelocity.f_(this._calculateCurrentVelocity(this._panVelocity.x, this.panAccumulatedPixels.x, this.panInertia), this._calculateCurrentVelocity(this._panVelocity.y, this.panAccumulatedPixels.y, this.panInertia), this._calculateCurrentVelocity(this._panVelocity.z, this.panAccumulatedPixels.z, this.panInertia)), this._panVelocity.scaleToRef(this.speed * this.panSpeed * this._panSpeedMultiplier * zv, this.panDeltaCurrentFrame), this._rotationVelocity.f_(this._calculateCurrentVelocity(this._rotationVelocity.x, this.rotationAccumulatedPixels.x, this.rotationInertia), this._calculateCurrentVelocity(this._rotationVelocity.y, this.rotationAccumulatedPixels.y, this.rotationInertia), this._calculateCurrentVelocity(this._rotationVelocity.z, this.rotationAccumulatedPixels.z, this.rotationInertia)), this.rotationDeltaCurrentFrame.f_(this._rotationVelocity.x * this.speed * this.rotationXSpeed * zv, this._rotationVelocity.y * this.speed * this.rotationYSpeed * zv, 0), this._zoomVelocity = this._calculateCurrentVelocity(this._zoomVelocity, this.zoomAccumulatedPixels, this.zoomInertia), this.zoomDeltaCurrentFrame = this._zoomVelocity * (this.speed * this.sA * this._zoomSpeedMultiplier) * zv, vv > 0 && (this._prevFrameTimeMs = vv), this.zoomAccumulatedPixels = 0, this.panAccumulatedPixels.Dk(0), this.rotationAccumulatedPixels.Dk(0), this.activeInput = !1
      }
      resetRotationVelocity() {
        this._rotationVelocity.Dk(0), this.rotationAccumulatedPixels.Dk(0)
      }
      resetPanVelocity() {
        this._panVelocity.Dk(0), this.panAccumulatedPixels.Dk(0)
      }
      resetZoomVelocity() {
        this._zoomVelocity = 0, this.zoomAccumulatedPixels = 0
      }
      get isInterpolating() {
        return !!this._behavior?.isInterpolating
      }
      getFrameIndependentDecay(vv) {
        const zv = this._scene.ma().getDeltaTime(),
          Pv = this._getEffectiveDeltaMs(zv),
          hv = 1e3 / this.referenceFrameRate;
        return Math.pow(vv, Pv / hv)
      }
      getFrameIndependentInputScale(vv) {
        const zv = 1 - vv;
        if (zv <= 0) return 1;
        return (1 - this.getFrameIndependentDecay(vv)) / zv
      }
      _getEffectiveDeltaMs(vv) {
        return vv > 0 ? vv : this._prevFrameTimeMs > 0 ? this._prevFrameTimeMs : 1e3 / this.referenceFrameRate
      }
      _calculateCurrentVelocity(vv, zv, Pv) {
        let hv = vv;
        const Sv = this._scene.ma().getDeltaTime(),
          ev = this._getEffectiveDeltaMs(Sv);
        if (0 === ev) return hv;
        const gv = this.getFrameIndependentDecay(Pv);
        if (hv *= gv, 0 !== zv || this.activeInput) {
          const vv = 1 - Pv;
          hv += zv / ev * (vv > 0 ? (1 - gv) / vv : 1)
        } else Math.abs(hv) < 1e-6 && (hv = 0);
        return hv
      }
    }
  },
  39530: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => hv
    });
    class hv {
      constructor(vv, zv) {
        this.inputMap = [], this.handlers = vv, this._createDefaultEntries = zv, this.resetInputMap()
      }
      resolveInteraction(vv, zv) {
        for (const Pv of this.inputMap)
          if (Pv.source === vv && this._entryMatches(Pv, zv)) return Pv;
        return null
      }
      resetInputMap() {
        this.inputMap = this._createDefaultEntries?.() ?? []
      }
      getEntry(vv, zv, Pv) {
        const hv = this.inputMap;
        for (let Sv = 0; Sv < hv.length; Sv++) {
          const ev = hv[Sv];
          if (ev.source === vv && ev.interaction === zv && this._entryConditionsMatch(ev, Pv)) return ev
        }
      }
      getEntries(vv, zv, Pv) {
        const hv = [],
          Sv = this.inputMap;
        for (let ev = 0; ev < Sv.length; ev++) {
          const gv = Sv[ev];
          gv.source === vv && gv.interaction === zv && this._entryConditionsMatch(gv, Pv) && hv.push(gv)
        }
        return hv
      }
      addEntry(vv) {
        const zv = this._entrySpecificity(vv);
        let Pv = this.inputMap.length;
        for (let hv = 0; hv < this.inputMap.length; hv++)
          if (this._entrySpecificity(this.inputMap[hv]) < zv) {
            Pv = hv;
            break
          } this.inputMap.splice(Pv, 0, vv)
      }
      setInteraction(vv, zv, Pv) {
        const hv = this.resolveInteraction(vv, zv);
        return hv && this._entryCoversAllConditionsOf(hv, zv) ? (hv.interaction = Pv, !0) : (this.addEntry({
          source: vv,
          ...zv ?? {},
          interaction: Pv
        }), !0)
      }
      _entryCoversAllConditionsOf(vv, zv) {
        if (!zv) return !0;
        const Pv = vv;
        for (const hv of Object.keys(zv)) {
          const vv = zv[hv];
          if (void 0 !== vv)
            if ("modifiers" === hv) {
              const zv = Pv.modifiers ?? {};
              for (const Pv of Object.keys(vv))
                if (void 0 !== vv[Pv] && void 0 === zv[Pv]) return !1
            } else if (void 0 === Pv[hv]) return !1
        }
        return !0
      }
      setInteractions(vv, zv, Pv) {
        let hv = 0;
        const Sv = this.inputMap;
        for (let ev = 0; ev < Sv.length; ev++) {
          const gv = Sv[ev];
          gv.source === vv && this._entryMatches(gv, zv) && (gv.interaction = Pv, hv++)
        }
        return hv
      }
      _entryMatches(vv, zv) {
        switch (vv.source) {
          case "pointer":
            return (void 0 === vv.button || vv.button === zv?.button) && this._matchModifiers(vv.modifiers, zv?.modifiers);
          case "wheel":
            return this._matchModifiers(vv.modifiers, zv?.modifiers);
          case "touch":
            return void 0 === vv.touchCount || vv.touchCount === zv?.touchCount;
          case "keyboard":
            return (void 0 === vv.key || (Array.isArray(vv.key) ? -1 !== vv.key.indexOf(zv?.key ?? -1) : vv.key === zv?.key)) && this._matchModifiers(vv.modifiers, zv?.modifiers)
        }
      }
      _entryConditionsMatch(vv, zv) {
        if (!zv) return !0;
        switch (vv.source) {
          case "pointer":
            return (!("button" in zv) || vv.button === zv.button) && (!("modifiers" in zv) || this._entryModifiersMatch(vv.modifiers, zv.modifiers));
          case "wheel":
            return !("modifiers" in zv) || this._entryModifiersMatch(vv.modifiers, zv.modifiers);
          case "touch":
            return !("touchCount" in zv) || vv.touchCount === zv.touchCount;
          case "keyboard":
            if ("key" in zv) {
              if (void 0 === vv.key) return void 0 === zv.key;
              if (void 0 === zv.key || (Array.isArray(vv.key) ? -1 === vv.key.indexOf(zv.key) : vv.key !== zv.key)) return !1
            }
            return !("modifiers" in zv) || this._entryModifiersMatch(vv.modifiers, zv.modifiers)
        }
      }
      _entrySpecificity(vv) {
        let zv = 0;
        return "button" in vv && void 0 !== vv.button && zv++, "key" in vv && void 0 !== vv.key && zv++, "touchCount" in vv && void 0 !== vv.touchCount && zv++, "modifiers" in vv && vv.modifiers && zv++, zv
      }
      _matchModifiers(vv, zv) {
        return !vv || (void 0 === vv.ctrl || vv.ctrl === (zv?.ctrl ?? !1)) && ((void 0 === vv.shift || vv.shift === (zv?.shift ?? !1)) && (void 0 === vv.alt || vv.alt === (zv?.alt ?? !1)))
      }
      _entryModifiersMatch(vv, zv) {
        if (!zv) return !vv;
        return void 0 !== zv.ctrl || void 0 !== zv.shift || void 0 !== zv.alt ? (void 0 === zv.ctrl || vv?.ctrl === zv.ctrl) && ((void 0 === zv.shift || vv?.shift === zv.shift) && (void 0 === zv.alt || vv?.alt === zv.alt)) : !vv || void 0 === vv.ctrl && void 0 === vv.shift && void 0 === vv.alt
      }
    }
  },
  39511: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => iv,
      e: () => sv
    });
    var hv = Pv(39295),
      Sv = Pv(39300),
      ev = Pv(39515),
      gv = Pv(36594),
      pv = Pv(36599),
      dv = Pv(39521),
      Nv = Pv(39518),
      lv = Pv(39524),
      Tv = Pv(39530);
    class Wv extends lv.c {
      constructor(vv, zv, Pv) {
        super(vv, zv, Pv), this.input = new Tv.c({
          translate: (vv, zv, Pv) => {
            this.panAccumulatedPixels.x += vv, this.panAccumulatedPixels.y += zv, this.panAccumulatedPixels.z += Pv
          },
          rotate: (vv, zv) => {
            this.rotationAccumulatedPixels.x += vv, this.rotationAccumulatedPixels.y += zv
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
    const wv = gv.c.Zero(),
      av = gv.d.Identity();
    let sv = (() => {
        var vv;
        let zv, Pv, Nv, lv, Tv = ev.c,
          sv = [],
          Cv = [],
          iv = [],
          cv = [],
          Gv = [],
          mv = [],
          jv = [],
          fv = [];
        return vv = class extends Tv {
          get inertia() {
            return this._targetInertia
          }
          set inertia(vv) {
            this._targetInertia = vv, this.movement && (this.movement.panInertia = vv, this.movement.rotationInertia = vv)
          }
          constructor(vv, zv, Pv) {
            super(vv, zv, Pv, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]), this.cameraDirection = new gv.l(0, 0, 0), this.cameraRotation = new gv.j(0, 0), this._targetInertia = .9, this.updateUpVectorFromRotation = (0, hv.f)(this, sv, !1), this.rotation = ((0, hv.f)(this, Cv), (0, hv.f)(this, iv, void 0)), this.rotationQuaternion = (0, hv.f)(this, cv), this.speed = (0, hv.f)(this, Gv, 2), this.noRotationConstraint = ((0, hv.f)(this, mv), !1), this.invertRotation = !1, this.inverseRotationSpeed = .2, this._panningEpsilon = pv.e, this._rotationEpsilon = pv.e, this.lockedTarget = (0, hv.f)(this, jv, null), this._currentTarget = ((0, hv.f)(this, fv), gv.l.Zero()), this._initialFocalDistance = 1, this._viewMatrix = gv.c.Zero(), this._cameraTransformMatrix = gv.c.Zero(), this._cameraRotationMatrix = gv.c.Zero(), this._transformedReferencePoint = gv.l.Zero(), this._deferredPositionUpdate = new gv.l, this._deferredRotationQuaternionUpdate = new gv.d, this._deferredRotationUpdate = new gv.l, this._deferredUpdated = !1, this._deferOnly = !1, this._cachedRotationZ = 0, this._cachedQuaternionRotationZ = 0, this._referencePoint = gv.l.Forward(this.rD().useRightHandedSystem), this.rotation = new gv.l(0, this.rD().useRightHandedSystem ? Math.PI : 0, 0), this.movement = new Wv(this.rD(), this.position), this.movement.panInertia = this.inertia, this.movement.rotationInertia = this.inertia
          }
          getFrontPosition(vv) {
            this.getWorldMatrix();
            const zv = gv.i.fa[0],
              Pv = gv.i.fa[1];
            return Pv.set(0, 0, this._scene.useRightHandedSystem ? -1 : 1), this.getDirectionToRef(Pv, zv), zv.scaleInPlace(vv), this.globalPosition.add(zv)
          }
          _getLockedTargetPosition() {
            if (!this.lockedTarget) return null;
            if (this.lockedTarget.absolutePosition) {
              const vv = this.lockedTarget;
              vv.computeWorldMatrix().getTranslationToRef(vv.absolutePosition)
            }
            return this.lockedTarget.absolutePosition || this.lockedTarget
          }
          storeState() {
            return this._storedPosition = this.position.clone(), this._storedRotation = this.rotation.clone(), this.rotationQuaternion && (this._storedRotationQuaternion = this.rotationQuaternion.clone()), super.storeState()
          }
          _restoreStateValues() {
            return !!super._restoreStateValues() && (this.position = this._storedPosition.clone(), this.rotation = this._storedRotation.clone(), this.rotationQuaternion && this._storedRotationQuaternion && (this.rotationQuaternion = this._storedRotationQuaternion.clone()), this.cameraDirection.f_(0, 0, 0), this.cameraRotation.f_(0, 0), !0)
          }
          _initCache() {
            super._initCache(), this._cache.lockedTarget = new gv.l(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.rotation = new gv.l(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.rotationQuaternion = new gv.d(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE)
          }
          _updateCache(vv) {
            vv || super._updateCache();
            const zv = this._getLockedTargetPosition();
            zv ? this._cache.lockedTarget ? this._cache.lockedTarget.Vzv(zv) : this._cache.lockedTarget = zv.clone() : this._cache.lockedTarget = null, this._cache.rotation.Vzv(this.rotation), this.rotationQuaternion && this._cache.rotationQuaternion.Vzv(this.rotationQuaternion)
          }
          _isSynchronizedViewMatrix() {
            if (!super._isSynchronizedViewMatrix()) return !1;
            const vv = this._getLockedTargetPosition();
            return (this._cache.lockedTarget ? this._cache.lockedTarget.equals(vv) : !vv) && (this.rotationQuaternion ? this.rotationQuaternion.equals(this._cache.rotationQuaternion) : this._cache.rotation.equals(this.rotation))
          }
          _computeLocalCameraSpeed() {
            const vv = this.ma();
            return this.speed * Math.sqrt(vv.getDeltaTime() / (100 * vv.getFps()))
          }
          setTarget(vv) {
            this.upVector.normalize(), this._initialFocalDistance = vv.subtract(this.position).length(), this.position.z === vv.z && (this.position.z += pv.e), this._referencePoint.normalize().scaleInPlace(this._initialFocalDistance), this.rD().useRightHandedSystem ? gv.c.LookAtRHToRef(this.position, vv, gv.l.UpReadOnly, wv) : gv.c.LookAtLHToRef(this.position, vv, gv.l.UpReadOnly, wv), wv.invert();
            const zv = this.rotationQuaternion || av;
            gv.d.FromRotationMatrixToRef(wv, zv), zv.toEulerAnglesToRef(this.rotation), this.rotation.z = 0
          }
          get target() {
            return this.getTarget()
          }
          set target(vv) {
            this.setTarget(vv)
          }
          getTarget() {
            return this._currentTarget
          }
          _decideIfNeedsToMove() {
            return Math.abs(this.cameraDirection.x) > 0 || Math.abs(this.cameraDirection.y) > 0 || Math.abs(this.cameraDirection.z) > 0
          }
          _updatePosition() {
            if (this.parent) return this.parent.getWorldMatrix().invertToRef(gv.i.Matrix[0]), gv.l.TransformNormalToRef(this.cameraDirection, gv.i.Matrix[0], gv.i.fa[0]), this._deferredPositionUpdate.addInPlace(gv.i.fa[0]), void(this._deferOnly ? this._deferredUpdated = !0 : this.position.Vzv(this._deferredPositionUpdate));
            this._deferredPositionUpdate.addInPlace(this.cameraDirection), this._deferOnly ? this._deferredUpdated = !0 : this.position.Vzv(this._deferredPositionUpdate)
          }
          _checkInputs() {
            const vv = this.movement,
              zv = 0 !== this.cameraDirection.x || 0 !== this.cameraDirection.y || 0 !== this.cameraDirection.z;
            vv.panAccumulatedPixels.addInPlace(this.cameraDirection), vv.rotationAccumulatedPixels.x += this.cameraRotation.x, vv.rotationAccumulatedPixels.y += this.cameraRotation.y, vv.computeCurrentFrameDeltas(), this.cameraDirection.Vzv(vv.panDeltaCurrentFrame), this.cameraRotation.set(vv.rotationDeltaCurrentFrame.x, vv.rotationDeltaCurrentFrame.y);
            const Pv = this.speed * this._panningEpsilon;
            !zv && Math.abs(this.cameraDirection.x) < Pv && Math.abs(this.cameraDirection.y) < Pv && Math.abs(this.cameraDirection.z) < Pv && (this.cameraDirection.Dk(0), vv.resetPanVelocity());
            const hv = this.invertRotation ? -this.inverseRotationSpeed : 1,
              Sv = this._decideIfNeedsToMove(),
              ev = !(!this.cameraRotation.x && !this.cameraRotation.y);
            if (this._deferredUpdated = !1, this._deferredRotationUpdate.Vzv(this.rotation), this._deferredPositionUpdate.Vzv(this.position), this.rotationQuaternion && this._deferredRotationQuaternionUpdate.Vzv(this.rotationQuaternion), Sv && this._updatePosition(), ev) {
              if (this.rotationQuaternion && this.rotationQuaternion.toEulerAnglesToRef(this._deferredRotationUpdate), this._deferredRotationUpdate.x += this.cameraRotation.x * hv, this._deferredRotationUpdate.y += this.cameraRotation.y * hv, !this.noRotationConstraint) {
                const vv = 1.570796;
                this._deferredRotationUpdate.x > vv && (this._deferredRotationUpdate.x = vv), this._deferredRotationUpdate.x < -vv && (this._deferredRotationUpdate.x = -vv)
              }
              if (this._deferOnly ? this._deferredUpdated = !0 : this.rotation.Vzv(this._deferredRotationUpdate), this.rotationQuaternion) {
                this._deferredRotationUpdate.lengthSquared() && (gv.d.RotationYawPitchRollToRef(this._deferredRotationUpdate.y, this._deferredRotationUpdate.x, this._deferredRotationUpdate.z, this._deferredRotationQuaternionUpdate), this._deferOnly ? this._deferredUpdated = !0 : this.rotationQuaternion.Vzv(this._deferredRotationQuaternionUpdate))
              }
            }
            this.cameraDirection.Dk(0), this.cameraRotation.set(0, 0), super._checkInputs()
          }
          _updateCameraRotationMatrix() {
            this.rotationQuaternion ? this.rotationQuaternion.toRotationMatrix(this._cameraRotationMatrix) : gv.c.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, this.rotation.z, this._cameraRotationMatrix)
          }
          _rotateUpVectorWithCameraRotationMatrix() {
            return gv.l.TransformNormalToRef(gv.l.UpReadOnly, this._cameraRotationMatrix, this.upVector), this
          }
          _getViewMatrix() {
            return this.lockedTarget && this.setTarget(this._getLockedTargetPosition()), this._updateCameraRotationMatrix(), this.rotationQuaternion && this._cachedQuaternionRotationZ != this.rotationQuaternion.z ? (this._rotateUpVectorWithCameraRotationMatrix(), this._cachedQuaternionRotationZ = this.rotationQuaternion.z) : this._cachedRotationZ !== this.rotation.z && (this._rotateUpVectorWithCameraRotationMatrix(), this._cachedRotationZ = this.rotation.z), gv.l.TransformCoordinatesToRef(this._referencePoint, this._cameraRotationMatrix, this._transformedReferencePoint), this.position.addToRef(this._transformedReferencePoint, this._currentTarget), this.updateUpVectorFromRotation && (this.rotationQuaternion ? dv.c.Y.rotateByQuaternionToRef(this.rotationQuaternion, this.upVector) : (gv.d.FromEulerVectorToRef(this.rotation, av), dv.c.Y.rotateByQuaternionToRef(av, this.upVector))), this._computeViewMatrix(this.position, this._currentTarget, this.upVector), this._viewMatrix
          }
          _computeViewMatrix(vv, zv, Pv) {
            if (this.rD().useRightHandedSystem ? gv.c.LookAtRHToRef(vv, zv, Pv, this._viewMatrix) : gv.c.LookAtLHToRef(vv, zv, Pv, this._viewMatrix), this.parent) {
              const vv = this.parent.getWorldMatrix();
              this._viewMatrix.invert(), this._viewMatrix.multiplyToRef(vv, this._viewMatrix), this._viewMatrix.invert(), this._markSyncedWithParent()
            }
          }
          createRigCamera(zv, Pv) {
            if (this.cameraRigMode !== ev.c.RIG_MODE_NONE) {
              const Pv = new vv(zv, this.position.clone(), this.rD());
              return Pv.isRigCamera = !0, Pv.rigParent = this, this.cameraRigMode === ev.c.RIG_MODE_VR && (this.rotationQuaternion || (this.rotationQuaternion = new gv.d), Pv._cameraRigParams = {}, Pv.rotationQuaternion = new gv.d), Pv.mode = this.mode, Pv.orthoLeft = this.orthoLeft, Pv.orthoRight = this.orthoRight, Pv.orthoTop = this.orthoTop, Pv.orthoBottom = this.orthoBottom, Pv
            }
            return null
          }
          _updateRigCameras() {
            const vv = this._rigCameras[0],
              zv = this._rigCameras[1];
            switch (this.computeWorldMatrix(), this.cameraRigMode) {
              case ev.c.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case ev.c.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case ev.c.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
              case ev.c.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case ev.c.RIG_MODE_STEREOSCOPIC_INTERLACED: {
                const Pv = this.cameraRigMode === ev.c.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED ? 1 : -1,
                  hv = this.cameraRigMode === ev.c.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED ? -1 : 1;
                this._getRigCamPositionAndTarget(this._cameraRigParams.stereoHalfAngle * Pv, vv), this._getRigCamPositionAndTarget(this._cameraRigParams.stereoHalfAngle * hv, zv);
                break
              }
              case ev.c.RIG_MODE_VR:
                vv.rotationQuaternion && zv.rotationQuaternion && this.rotationQuaternion ? (vv.rotationQuaternion.Vzv(this.rotationQuaternion), zv.rotationQuaternion.Vzv(this.rotationQuaternion)) : (vv.rotation.Vzv(this.rotation), zv.rotation.Vzv(this.rotation)), vv.position.Vzv(this.position), zv.position.Vzv(this.position)
            }
            super._updateRigCameras()
          }
          _getRigCamPositionAndTarget(zv, Pv) {
            this.getTarget().subtractToRef(this.position, vv._TargetFocalPoint), vv._TargetFocalPoint.normalize().scaleInPlace(this._initialFocalDistance);
            const hv = vv._TargetFocalPoint.addInPlace(this.position);
            gv.c.TranslationToRef(-hv.x, -hv.y, -hv.z, vv._TargetTransformMatrix), vv._TargetTransformMatrix.multiplyToRef(gv.c.RotationAxis(Pv.upVector, zv), vv._RigCamTransformMatrix), gv.c.TranslationToRef(hv.x, hv.y, hv.z, vv._TargetTransformMatrix), vv._RigCamTransformMatrix.multiplyToRef(vv._TargetTransformMatrix, vv._RigCamTransformMatrix), gv.l.TransformCoordinatesToRef(this.position, vv._RigCamTransformMatrix, Pv.position), Pv.setTarget(hv)
          }
          getClassName() {
            return "TargetCamera"
          }
        }, (() => {
          const ev = "function" === typeof Symbol && Symbol.metadata ? Object.create(Tv[Symbol.metadata] ?? null) : void 0;
          zv = [(0, Sv.L)()], Pv = [(0, Sv.I)()], Nv = [(0, Sv.L)()], lv = [(0, Sv.y)("lockedTargetId")], (0, hv.e)(null, null, zv, {
            kind: "field",
            name: "updateUpVectorFromRotation",
            static: !1,
            private: !1,
            access: {
              has: vv => "updateUpVectorFromRotation" in vv,
              get: vv => vv.updateUpVectorFromRotation,
              set: (vv, zv) => {
                vv.updateUpVectorFromRotation = zv
              }
            },
            metadata: ev
          }, sv, Cv), (0, hv.e)(null, null, Pv, {
            kind: "field",
            name: "rotation",
            static: !1,
            private: !1,
            access: {
              has: vv => "rotation" in vv,
              get: vv => vv.rotation,
              set: (vv, zv) => {
                vv.rotation = zv
              }
            },
            metadata: ev
          }, iv, cv), (0, hv.e)(null, null, Nv, {
            kind: "field",
            name: "speed",
            static: !1,
            private: !1,
            access: {
              has: vv => "speed" in vv,
              get: vv => vv.speed,
              set: (vv, zv) => {
                vv.speed = zv
              }
            },
            metadata: ev
          }, Gv, mv), (0, hv.e)(null, null, lv, {
            kind: "field",
            name: "lockedTarget",
            static: !1,
            private: !1,
            access: {
              has: vv => "lockedTarget" in vv,
              get: vv => vv.lockedTarget,
              set: (vv, zv) => {
                vv.lockedTarget = zv
              }
            },
            metadata: ev
          }, jv, fv), ev && Object.defineProperty(vv, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: ev
          })
        })(), vv._RigCamTransformMatrix = new gv.c, vv._TargetTransformMatrix = new gv.c, vv._TargetFocalPoint = new gv.l, vv
      })(),
      Cv = !1;

    function iv() {
      Cv || (Cv = !0, Nv.c.AddNodeConstructor("TargetCamera", ((vv, zv) => () => new sv(vv, gv.l.Zero(), zv))))
    }
  },
  39260: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => ev
    });
    var hv = Pv(39212);
    let Sv = !1;

    function ev() {
      Sv || (Sv = !0, hv.b.prototype.getInputElement = function() {
        return this._renderingCanvas
      }, hv.b.prototype.getRenderingCanvasClientRect = function() {
        return this._renderingCanvas ? this._renderingCanvas.getBoundingClientRect() : null
      }, hv.b.prototype.getInputElementClientRect = function() {
        return this._renderingCanvas ? this.getInputElement().getBoundingClientRect() : null
      }, hv.b.prototype.getAspectRatio = function(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const Pv = vv.viewport;
        return this.getRenderWidth(zv) * Pv.width / (this.getRenderHeight(zv) * Pv.height)
      }, hv.b.prototype.getScreenAspectRatio = function() {
        return this.getRenderWidth(!0) / this.getRenderHeight(!0)
      }, hv.b.prototype._verifyPointerLock = function() {
        this._onPointerLockChange?.()
      })
    }
  },
  39334: (vv, zv, Pv) => {
    var hv = Pv(39212),
      Sv = Pv(39338);
    let ev = !1;
    ev || (ev = !0, (0, Sv.v)(), hv.b.prototype._loadFileAsync = async function(vv, zv, Pv) {
      return await new Promise(((hv, Sv) => {
        this._loadFile(vv, (vv => {
          hv(vv)
        }), void 0, zv, Pv, ((vv, zv) => {
          Sv(zv)
        }))
      }))
    })
  },
  39325: (vv, zv, Pv) => {
    (0, Pv(39266).c)()
  },
  39266: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => ev
    });
    var hv = Pv(39212);
    let Sv = !1;

    function ev() {
      Sv || (Sv = !0, hv.b.prototype.getRenderPassNames = function() {
        return this._renderPassNames
      }, hv.b.prototype.getCurrentRenderPassName = function() {
        return this._renderPassNames[this.currentRenderPassId]
      }, hv.b.prototype.createRenderPassId = function(vv) {
        const zv = ++hv.b._RenderPassIdCounter;
        return this._renderPassNames[zv] = vv ?? "NONAME", zv
      }, hv.b.prototype.releaseRenderPassId = function(vv) {
        this._renderPassNames[vv] = void 0;
        for (let zv = 0; zv < this.scenes.length; ++zv) {
          const Pv = this.scenes[zv];
          for (let zv = 0; zv < Pv.meshes.length; ++zv) {
            const hv = Pv.meshes[zv];
            if (hv._releaseRenderPassId(vv), hv.sF)
              for (let zv = 0; zv < hv.sF.length; ++zv) {
                hv.sF[zv]._removeDrawWrapper(vv)
              }
          }
        }
        this._onReleaseRenderPassObservable?.notifyObservers(vv)
      })
    }
  },
  39374: (vv, zv, Pv) => {
    var hv = Pv(39379),
      Sv = Pv(39212);
    let ev = !1;
    ev || (ev = !0, Sv.b.GetCompatibleTextureLoader = hv.c)
  },
  39270: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => ev
    });
    var hv = Pv(39152);
    let Sv = !1;

    function ev() {
      Sv || (Sv = !0, hv.ThinEngine.prototype.setAlphaMode = function(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this._alphaMode[Pv] === vv) {
          if (!zv) {
            const zv = 0 === vv;
            this.depthCullingState.depthMask !== zv && (this.depthCullingState.depthMask = zv)
          }
          return
        }
        const hv = 0 === vv;
        this._alphaState.setAlphaBlend(!hv, Pv), this._alphaState.setAlphaMode(vv, Pv), zv || (this.depthCullingState.depthMask = hv), this._alphaMode[Pv] = vv
      })
    }
  },
  39275: (vv, zv, Pv) => {
    var hv = Pv(39134),
      Sv = Pv(38209),
      ev = Pv(39152),
      gv = Pv(39278),
      pv = Pv(39255);
    class dv extends gv.d {
      setDepthStencilTexture(vv) {
        let zv = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (super.setDepthStencilTexture(vv, zv), !vv) return;
        const Pv = this._engine,
          hv = this._context,
          Sv = vv._hardwareTexture;
        if (Sv && vv._autoMSAAManagement && this._MSAAFramebuffer) {
          const zv = Pv._currentFramebuffer;
          Pv._bindUnboundFramebuffer(this._MSAAFramebuffer), hv.framebufferRenderbuffer(hv.FRAMEBUFFER, (0, pv.e)(vv.format) ? hv.DEPTH_STENCIL_ATTACHMENT : hv.DEPTH_ATTACHMENT, hv.RENDERBUFFER, Sv.getMSAARenderBuffer()), Pv._bindUnboundFramebuffer(zv)
        }
      }
      constructor(vv, zv, Pv, hv, Sv) {
        super(vv, zv, Pv, hv), this._framebuffer = null, this._depthStencilBuffer = null, this._MSAAFramebuffer = null, this._colorTextureArray = null, this._depthStencilTextureArray = null, this._disposeOnlyFramebuffers = !1, this._currentLOD = 0, this._context = Sv
      }
      _cloneRenderTargetWrapper() {
        let vv;
        return this._colorTextureArray && this._depthStencilTextureArray ? (vv = this._engine.createMultiviewRenderTargetTexture(this.width, this.height), vv.texture.isReady = !0) : vv = super._cloneRenderTargetWrapper(), vv
      }
      _swapRenderTargetWrapper(vv) {
        super._swapRenderTargetWrapper(vv), vv._framebuffer = this._framebuffer, vv._depthStencilBuffer = this._depthStencilBuffer, vv._MSAAFramebuffer = this._MSAAFramebuffer, vv._colorTextureArray = this._colorTextureArray, vv._depthStencilTextureArray = this._depthStencilTextureArray, this._framebuffer = this._depthStencilBuffer = this._MSAAFramebuffer = this._colorTextureArray = this._depthStencilTextureArray = null
      }
      createDepthStencilTexture() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          zv = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          Pv = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          Sv = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          ev = arguments.length > 5 ? arguments[5] : void 0;
        if (this._depthStencilBuffer) {
          const vv = this._engine,
            zv = vv._currentFramebuffer,
            Pv = this._context;
          vv._bindUnboundFramebuffer(this._framebuffer), Pv.framebufferRenderbuffer(Pv.FRAMEBUFFER, Pv.DEPTH_STENCIL_ATTACHMENT, Pv.RENDERBUFFER, null), Pv.framebufferRenderbuffer(Pv.FRAMEBUFFER, Pv.DEPTH_ATTACHMENT, Pv.RENDERBUFFER, null), Pv.framebufferRenderbuffer(Pv.FRAMEBUFFER, Pv.STENCIL_ATTACHMENT, Pv.RENDERBUFFER, null), vv._bindUnboundFramebuffer(zv), Pv.deleteRenderbuffer(this._depthStencilBuffer), this._depthStencilBuffer = null
        }
        return super.createDepthStencilTexture(vv, zv, Pv, hv, Sv, ev)
      }
      shareDepth(vv) {
        super.shareDepth(vv);
        const zv = this._context,
          Pv = this._depthStencilBuffer,
          hv = vv._MSAAFramebuffer || vv._framebuffer,
          Sv = this._engine;
        vv._depthStencilBuffer && vv._depthStencilBuffer !== Pv && zv.deleteRenderbuffer(vv._depthStencilBuffer), vv._depthStencilBuffer = Pv;
        const ev = vv._generateStencilBuffer ? zv.DEPTH_STENCIL_ATTACHMENT : zv.DEPTH_ATTACHMENT;
        Sv._bindUnboundFramebuffer(hv), zv.framebufferRenderbuffer(zv.FRAMEBUFFER, ev, zv.RENDERBUFFER, Pv), Sv._bindUnboundFramebuffer(null)
      }
      _bindTextureRenderTarget(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Pv = arguments.length > 2 ? arguments[2] : void 0,
          hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const Sv = vv._hardwareTexture;
        if (!Sv) return;
        const ev = this._framebuffer,
          gv = this._engine,
          pv = gv._currentFramebuffer;
        let dv;
        if (gv._bindUnboundFramebuffer(ev), gv.ka > 1) {
          const ev = this._context;
          dv = ev["COLOR_ATTACHMENT" + zv], vv.is2DArray || vv.is3D ? (Pv = Pv ?? this.layerIndices?.[zv] ?? 0, ev.framebufferTextureLayer(ev.FRAMEBUFFER, dv, Sv.underlyingResource, hv, Pv)) : vv.isCube ? (Pv = Pv ?? this.faceIndices?.[zv] ?? 0, ev.framebufferTexture2D(ev.FRAMEBUFFER, dv, ev.TEXTURE_CUBE_MAP_POSITIVE_X + Pv, Sv.underlyingResource, hv)) : ev.framebufferTexture2D(ev.FRAMEBUFFER, dv, ev.TEXTURE_2D, Sv.underlyingResource, hv)
        } else {
          const vv = this._context;
          dv = vv["COLOR_ATTACHMENT" + zv + "_WEBGL"];
          const ev = void 0 !== Pv ? vv.TEXTURE_CUBE_MAP_POSITIVE_X + Pv : vv.TEXTURE_2D;
          vv.framebufferTexture2D(vv.FRAMEBUFFER, dv, ev, Sv.underlyingResource, hv)
        }
        if (vv._autoMSAAManagement && this._MSAAFramebuffer) {
          const vv = this._context;
          gv._bindUnboundFramebuffer(this._MSAAFramebuffer), vv.framebufferRenderbuffer(vv.FRAMEBUFFER, dv, vv.RENDERBUFFER, Sv.getMSAARenderBuffer())
        }
        gv._bindUnboundFramebuffer(pv)
      }
      setTexture(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Pv = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        super.setTexture(vv, zv, Pv), this._bindTextureRenderTarget(vv, zv)
      }
      setLayerAndFaceIndices(vv, zv) {
        if (super.setLayerAndFaceIndices(vv, zv), !this.textures || !this.layerIndices || !this.faceIndices) return;
        const Pv = this._attachments?.length ?? this.textures.length;
        for (let hv = 0; hv < Pv; hv++) {
          const vv = this.textures[hv];
          vv && (vv.is2DArray || vv.is3D ? this._bindTextureRenderTarget(vv, hv, this.layerIndices[hv]) : vv.isCube ? this._bindTextureRenderTarget(vv, hv, this.faceIndices[hv]) : this._bindTextureRenderTarget(vv, hv))
        }
      }
      setLayerAndFaceIndex() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          zv = arguments.length > 1 ? arguments[1] : void 0,
          Pv = arguments.length > 2 ? arguments[2] : void 0;
        if (super.setLayerAndFaceIndex(vv, zv, Pv), !this.textures || !this.layerIndices || !this.faceIndices) return;
        const hv = this.textures[vv];
        hv.is2DArray || hv.is3D ? this._bindTextureRenderTarget(this.textures[vv], vv, this.layerIndices[vv]) : hv.isCube && this._bindTextureRenderTarget(this.textures[vv], vv, this.faceIndices[vv])
      }
      resolveMSAATextures() {
        const vv = this._engine,
          zv = vv._currentFramebuffer;
        vv._bindUnboundFramebuffer(this._MSAAFramebuffer), super.resolveMSAATextures(), vv._bindUnboundFramebuffer(zv)
      }
      dispose() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._disposeOnlyFramebuffers;
        const zv = this._context;
        vv || (this._colorTextureArray && (this._context.deleteTexture(this._colorTextureArray), this._colorTextureArray = null), this._depthStencilTextureArray && (this._context.deleteTexture(this._depthStencilTextureArray), this._depthStencilTextureArray = null)), this._framebuffer && (zv.deleteFramebuffer(this._framebuffer), this._framebuffer = null), this._depthStencilBuffer && (zv.deleteRenderbuffer(this._depthStencilBuffer), this._depthStencilBuffer = null), this._MSAAFramebuffer && (zv.deleteFramebuffer(this._MSAAFramebuffer), this._MSAAFramebuffer = null), super.dispose(vv)
      }
    }
    let Nv = !1;
    Nv || (Nv = !0, ev.ThinEngine.prototype._createHardwareRenderTargetWrapper = function(vv, zv, Pv) {
      const hv = new dv(vv, zv, Pv, this, this._gl);
      return this._renderTargetWrapperCache.push(hv), hv
    }, ev.ThinEngine.prototype.createRenderTargetTexture = function(vv, zv) {
      const Pv = this._createHardwareRenderTargetWrapper(!1, !1, vv);
      let hv, Sv, ev = !0,
        gv = !1,
        pv = !1,
        dv = 1;
      void 0 !== zv && "object" === typeof zv && (ev = zv.generateDepthBuffer ?? !0, gv = !!zv.generateStencilBuffer, pv = !!zv.noColorAttachment, hv = zv.colorAttachment, dv = zv.samples ?? 1, Sv = zv.label);
      const Nv = hv || (pv ? null : this._createInternalTexture(vv, zv, !0, 5)),
        lv = vv.width || vv,
        Tv = vv.height || vv,
        Wv = this._currentFramebuffer,
        wv = this._gl,
        av = wv.createFramebuffer();
      if (this._bindUnboundFramebuffer(av), Pv._depthStencilBuffer = this._setupFramebufferDepthAttachments(gv, ev, lv, Tv), !Nv || Nv.is2DArray || Nv.is3D || wv.framebufferTexture2D(wv.FRAMEBUFFER, wv.COLOR_ATTACHMENT0, wv.TEXTURE_2D, Nv._hardwareTexture.underlyingResource, 0), this._bindUnboundFramebuffer(Wv), Pv.label = Sv ?? "RenderTargetWrapper", Pv._framebuffer = av, Pv._generateDepthBuffer = ev, Pv._generateStencilBuffer = gv, Pv.setTextures(Nv), hv) {
        if (Pv._samples = hv.samples, hv.samples > 1) {
          const vv = hv._hardwareTexture.getMSAARenderBuffer(0);
          Pv._MSAAFramebuffer = wv.createFramebuffer(), this._bindUnboundFramebuffer(Pv._MSAAFramebuffer), wv.framebufferRenderbuffer(wv.FRAMEBUFFER, wv.COLOR_ATTACHMENT0, wv.RENDERBUFFER, vv), this._bindUnboundFramebuffer(null)
        }
      } else this.updateRenderTargetTextureSampleCount(Pv, dv);
      return Pv
    }, ev.ThinEngine.prototype._createDepthStencilTexture = function(vv, zv, Pv) {
      const ev = this._gl,
        gv = vv.layers || 0,
        dv = vv.depth || 0;
      let Nv = ev.TEXTURE_2D;
      0 !== gv ? Nv = ev.TEXTURE_2D_ARRAY : 0 !== dv && (Nv = ev.TEXTURE_3D);
      const lv = new hv.e(this, 12);
      if (lv.label = zv.label, !this._caps.depthTextureExtension) return Sv.d.Error("Depth texture is not supported by your browser or hardware."), lv;
      const Tv = {
        bilinearFiltering: !1,
        comparisonFunction: 0,
        generateStencil: !1,
        ...zv
      };
      if (this._bindTextureDirectly(Nv, lv, !0), this._setupDepthStencilTexture(lv, vv, 0 !== Tv.comparisonFunction && Tv.bilinearFiltering, Tv.comparisonFunction, Tv.samples), void 0 !== Tv.depthTextureFormat) {
        if (15 !== Tv.depthTextureFormat && 16 !== Tv.depthTextureFormat && 17 !== Tv.depthTextureFormat && 13 !== Tv.depthTextureFormat && 14 !== Tv.depthTextureFormat && 18 !== Tv.depthTextureFormat) return Sv.d.Error(`Depth texture ${Tv.depthTextureFormat} format is not supported.`), lv;
        lv.format = Tv.depthTextureFormat
      } else lv.format = Tv.generateStencil ? 13 : 16;
      const Wv = (0, pv.e)(lv.format),
        wv = this._getWebGLTextureTypeFromDepthTextureFormat(lv.format),
        av = Wv ? ev.DEPTH_STENCIL : ev.DEPTH_COMPONENT,
        sv = this._getInternalFormatFromDepthTextureFormat(lv.format, !0, Wv);
      return lv.is2DArray ? ev.texImage3D(Nv, 0, sv, lv.width, lv.height, gv, 0, av, wv, null) : lv.is3D ? ev.texImage3D(Nv, 0, sv, lv.width, lv.height, dv, 0, av, wv, null) : ev.texImage2D(Nv, 0, sv, lv.width, lv.height, 0, av, wv, null), this._bindTextureDirectly(Nv, null), this._internalTexturesCache.push(lv), Pv._depthStencilBuffer && (ev.deleteRenderbuffer(Pv._depthStencilBuffer), Pv._depthStencilBuffer = null), this._bindUnboundFramebuffer(Pv._MSAAFramebuffer ?? Pv._framebuffer), Pv._generateStencilBuffer = Wv, Pv._depthStencilTextureWithStencil = Wv, Pv._depthStencilBuffer = this._setupFramebufferDepthAttachments(Pv._generateStencilBuffer, Pv._generateDepthBuffer, Pv.width, Pv.height, Pv.samples, lv.format), this._bindUnboundFramebuffer(null), lv
    }, ev.ThinEngine.prototype.updateRenderTargetTextureSampleCount = function(vv, zv) {
      if (this.ka < 2 || !vv) return 1;
      if (vv.samples === zv) return zv;
      const Pv = this._gl;
      zv = Math.min(zv, this.getCaps().maxMSAASamples), vv._depthStencilBuffer && (Pv.deleteRenderbuffer(vv._depthStencilBuffer), vv._depthStencilBuffer = null), vv._MSAAFramebuffer && (Pv.deleteFramebuffer(vv._MSAAFramebuffer), vv._MSAAFramebuffer = null);
      const hv = vv.texture?._hardwareTexture;
      if (hv?.releaseMSAARenderBuffers(), vv.texture && zv > 1 && "function" === typeof Pv.renderbufferStorageMultisample) {
        const Sv = Pv.createFramebuffer();
        if (!Sv) throw new Error("Unable to create multi sampled framebuffer");
        vv._MSAAFramebuffer = Sv, this._bindUnboundFramebuffer(vv._MSAAFramebuffer);
        const ev = this._createRenderBuffer(vv.texture.width, vv.texture.height, zv, -1, this._getRGBABufferInternalSizedFormat(vv.texture.type, vv.texture.format, vv.texture._useSRGBBuffer), Pv.COLOR_ATTACHMENT0, !1);
        if (!ev) throw new Error("Unable to create multi sampled framebuffer");
        hv?.addMSAARenderBuffer(ev)
      }
      this._bindUnboundFramebuffer(vv._MSAAFramebuffer ?? vv._framebuffer), vv.texture && (vv.texture.samples = zv), vv._samples = zv;
      const Sv = vv._depthStencilTexture ? vv._depthStencilTexture.format : void 0;
      return vv._depthStencilBuffer = this._setupFramebufferDepthAttachments(vv._generateStencilBuffer, vv._generateDepthBuffer, vv.width, vv.height, zv, Sv), this._bindUnboundFramebuffer(null), zv
    }, ev.ThinEngine.prototype._setupDepthStencilTexture = function(vv, zv, Pv, hv) {
      let Sv = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1;
      const ev = zv.width ?? zv,
        gv = zv.height ?? zv,
        pv = zv.layers || 0,
        dv = zv.depth || 0;
      vv.baseWidth = ev, vv.baseHeight = gv, vv.width = ev, vv.height = gv, vv.is2DArray = pv > 0, vv.depth = pv || dv, vv.isReady = !0, vv.samples = Sv, vv.generateMipMaps = !1, vv.samplingMode = Pv ? 2 : 1, vv.type = 0, vv._comparisonFunction = hv;
      const Nv = this._gl,
        lv = this._getTextureTarget(vv),
        Tv = this._getSamplingParameters(vv.samplingMode, !1);
      Nv.texParameteri(lv, Nv.TEXTURE_MAG_FILTER, Tv.mag), Nv.texParameteri(lv, Nv.TEXTURE_MIN_FILTER, Tv.min), Nv.texParameteri(lv, Nv.TEXTURE_WRAP_S, Nv.CLAMP_TO_EDGE), Nv.texParameteri(lv, Nv.TEXTURE_WRAP_T, Nv.CLAMP_TO_EDGE), this.ka > 1 && (0 === hv ? (Nv.texParameteri(lv, Nv.TEXTURE_COMPARE_FUNC, 515), Nv.texParameteri(lv, Nv.TEXTURE_COMPARE_MODE, Nv.NONE)) : (Nv.texParameteri(lv, Nv.TEXTURE_COMPARE_FUNC, hv), Nv.texParameteri(lv, Nv.TEXTURE_COMPARE_MODE, Nv.COMPARE_REF_TO_TEXTURE)))
    })
  },
  39127: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => hv.b
    });
    var hv = Pv(39131);
    (0, Pv(39270).b)();
    var Sv = Pv(39152);
    let ev = !1;
    ! function() {
      if (ev) return;
      ev = !0;
      const vv = new WeakMap,
        zv = new WeakMap,
        Pv = new WeakMap,
        hv = new WeakMap;
      Sv.ThinEngine.prototype.getAlphaToCoverage = function() {
        return vv.get(this) ?? !1
      }, Sv.ThinEngine.prototype.setAlphaToCoverage = function(Pv) {
        (vv.get(this) !== Pv || this._gl && zv.get(this) !== this._gl) && (vv.set(this, Pv), this._gl && (Pv ? this._gl.enable(this._gl.SAMPLE_ALPHA_TO_COVERAGE) : this._gl.disable(this._gl.SAMPLE_ALPHA_TO_COVERAGE), zv.set(this, this._gl)))
      }, Object.defineProperty(Sv.ThinEngine.prototype, "currentSampleCount", {
        get: function() {
          return this._currentRenderTarget ? this._currentRenderTarget.samples : this._gl ? (hv.get(this) !== this._gl && (Pv.set(this, this._gl.getContextAttributes()?.antialias ? Math.max(1, this._gl.getParameter(this._gl.SAMPLES)) : 1), hv.set(this, this._gl)), Pv.get(this)) : 1
        },
        enumerable: !1,
        configurable: !0
      })
    }();
    var gv = Pv(39134),
      pv = Pv(38209),
      dv = Pv(39247);
    let Nv = !1;
    ! function() {
      function vv(vv, zv, Pv, hv) {
        let Sv, ev = 1;
        1 === hv ? Sv = new Float32Array(zv * Pv * 4) : 2 === hv ? (Sv = new Uint16Array(zv * Pv * 4), ev = 15360) : Sv = 7 === hv ? new Uint32Array(zv * Pv * 4) : new Uint8Array(zv * Pv * 4);
        for (let gv = 0; gv < zv; gv++)
          for (let hv = 0; hv < Pv; hv++) {
            const Pv = 3 * (hv * zv + gv),
              pv = 4 * (hv * zv + gv);
            Sv[pv + 0] = vv[Pv + 0], Sv[pv + 1] = vv[Pv + 1], Sv[pv + 2] = vv[Pv + 2], Sv[pv + 3] = ev
          }
        return Sv
      }

      function zv(vv) {
        return function(zv, Pv, hv, Sv, ev, pv, dv, Nv) {
          let lv = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
            Tv = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
          const Wv = vv ? this._gl.TEXTURE_3D : this._gl.TEXTURE_2D_ARRAY,
            wv = vv ? 10 : 11,
            av = new gv.e(this, wv);
          av.baseWidth = Pv, av.baseHeight = hv, av.baseDepth = Sv, av.width = Pv, av.height = hv, av.depth = Sv, av.format = ev, av.type = Tv, av.generateMipMaps = pv, av.samplingMode = Nv, vv ? av.is3D = !0 : av.is2DArray = !0, this._doNotHandleContextLost || (av._bufferView = zv), vv ? this.updateRawTexture3D(av, zv, ev, dv, lv, Tv) : this.updateRawTexture2DArray(av, zv, ev, dv, lv, Tv), this._bindTextureDirectly(Wv, av, !0);
          const sv = this._getSamplingParameters(Nv, pv);
          return this._gl.texParameteri(Wv, this._gl.TEXTURE_MAG_FILTER, sv.mag), this._gl.texParameteri(Wv, this._gl.TEXTURE_MIN_FILTER, sv.min), pv && this._gl.generateMipmap(Wv), this._bindTextureDirectly(Wv, null), this._internalTexturesCache.push(av), av
        }
      }

      function Pv(vv) {
        return function(zv, Pv, hv, Sv) {
          let ev = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            gv = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
          const pv = vv ? this._gl.TEXTURE_3D : this._gl.TEXTURE_2D_ARRAY,
            dv = this._getWebGLTextureType(gv),
            Nv = this._getInternalFormat(hv),
            lv = this._getRGBABufferInternalSizedFormat(gv, hv);
          this._bindTextureDirectly(pv, zv, !0), this._unpackFlipY(void 0 === Sv || !!Sv), this._doNotHandleContextLost || (zv._bufferView = Pv, zv.format = hv, zv.invertY = Sv, zv._compression = ev), zv.width % 4 !== 0 && this._gl.pixelStorei(this._gl.UNPACK_ALIGNMENT, 1), ev && Pv ? this._gl.compressedTexImage3D(pv, 0, this.getCaps().s3tc[ev], zv.width, zv.height, zv.depth, 0, Pv) : this._gl.texImage3D(pv, 0, lv, zv.width, zv.height, zv.depth, 0, Nv, dv, Pv), zv.generateMipMaps && this._gl.generateMipmap(pv), this._bindTextureDirectly(pv, null), zv.isReady = !0
        }
      }
      Nv || (Nv = !0, Sv.ThinEngine.prototype.updateRawTexture = function(vv, zv, Pv, hv) {
        let Sv = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          ev = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          gv = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        if (!vv) return;
        const pv = this._getRGBABufferInternalSizedFormat(ev, Pv, gv),
          dv = this._getInternalFormat(Pv),
          Nv = this._getWebGLTextureType(ev);
        this._bindTextureDirectly(this._gl.TEXTURE_2D, vv, !0), this._unpackFlipY(void 0 === hv || !!hv), this._doNotHandleContextLost || (vv._bufferView = zv, vv.format = Pv, vv.type = ev, vv.invertY = hv, vv._compression = Sv), vv.width % 4 !== 0 && this._gl.pixelStorei(this._gl.UNPACK_ALIGNMENT, 1), Sv && zv ? this._gl.compressedTexImage2D(this._gl.TEXTURE_2D, 0, this.getCaps().s3tc[Sv], vv.width, vv.height, 0, zv) : this._gl.texImage2D(this._gl.TEXTURE_2D, 0, pv, vv.width, vv.height, 0, dv, Nv, zv), vv.generateMipMaps && this._gl.generateMipmap(this._gl.TEXTURE_2D), this._bindTextureDirectly(this._gl.TEXTURE_2D, null), vv.isReady = !0
      }, Sv.ThinEngine.prototype.createRawTexture = function(vv, zv, Pv, hv, Sv, ev, pv) {
        let dv = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          Nv = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
          lv = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const Tv = new gv.e(this, 3);
        Tv.baseWidth = zv, Tv.baseHeight = Pv, Tv.width = zv, Tv.height = Pv, Tv.format = hv, Tv.generateMipMaps = Sv, Tv.samplingMode = pv, Tv.invertY = ev, Tv._compression = dv, Tv.type = Nv, Tv._useSRGBBuffer = this._getUseSRGBBuffer(lv, !Sv), this._doNotHandleContextLost || (Tv._bufferView = vv), this.updateRawTexture(Tv, vv, hv, ev, dv, Nv, Tv._useSRGBBuffer), this._bindTextureDirectly(this._gl.TEXTURE_2D, Tv, !0);
        const Wv = this._getSamplingParameters(pv, Sv);
        return this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MAG_FILTER, Wv.mag), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MIN_FILTER, Wv.min), Sv && this._gl.generateMipmap(this._gl.TEXTURE_2D), this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._internalTexturesCache.push(Tv), Tv
      }, Sv.ThinEngine.prototype.createRawCubeTexture = function(vv, zv, Pv, hv, Sv, ev, Nv) {
        let lv = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null;
        const Tv = this._gl,
          Wv = new gv.e(this, 8);
        Wv.isCube = !0, Wv.format = Pv, Wv.type = hv, this._doNotHandleContextLost || (Wv._bufferViewArray = vv);
        const wv = this._getWebGLTextureType(hv);
        let av = this._getInternalFormat(Pv);
        av === Tv.RGB && (av = Tv.RGBA), wv !== Tv.FLOAT || this._caps.textureFloatLinearFiltering ? wv !== this._gl.HALF_FLOAT_OES || this._caps.textureHalfFloatLinearFiltering ? wv !== Tv.FLOAT || this._caps.textureFloatRender ? wv !== Tv.HALF_FLOAT || this._caps.colorBufferFloat || (Sv = !1, pv.d.Warn("Render to half float textures is not supported. Mipmap generation forced to false.")) : (Sv = !1, pv.d.Warn("Render to float textures is not supported. Mipmap generation forced to false.")) : (Sv = !1, Nv = 1, pv.d.Warn("Half float texture filtering is not supported. Mipmap generation and sampling mode are forced to false and TEXTURE_NEAREST_SAMPLINGMODE, respectively.")) : (Sv = !1, Nv = 1, pv.d.Warn("Float texture filtering is not supported. Mipmap generation and sampling mode are forced to false and TEXTURE_NEAREST_SAMPLINGMODE, respectively."));
        const sv = zv,
          Cv = sv;
        Wv.width = sv, Wv.height = Cv, Wv.invertY = ev, Wv._compression = lv;
        if (!this.needPOTTextures || (0, dv.e)(Wv.width) && (0, dv.e)(Wv.height) || (Sv = !1), vv) this.updateRawCubeTexture(Wv, vv, Pv, hv, ev, lv);
        else {
          const vv = this._getRGBABufferInternalSizedFormat(hv),
            zv = 0;
          this._bindTextureDirectly(Tv.TEXTURE_CUBE_MAP, Wv, !0);
          for (let Pv = 0; Pv < 6; Pv++) lv ? Tv.compressedTexImage2D(Tv.TEXTURE_CUBE_MAP_POSITIVE_X + Pv, zv, this.getCaps().s3tc[lv], Wv.width, Wv.height, 0, void 0) : Tv.texImage2D(Tv.TEXTURE_CUBE_MAP_POSITIVE_X + Pv, zv, vv, Wv.width, Wv.height, 0, av, wv, null);
          this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null)
        }
        this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, Wv, !0), vv && Sv && this._gl.generateMipmap(this._gl.TEXTURE_CUBE_MAP);
        const iv = this._getSamplingParameters(Nv, Sv);
        return Tv.texParameteri(Tv.TEXTURE_CUBE_MAP, Tv.TEXTURE_MAG_FILTER, iv.mag), Tv.texParameteri(Tv.TEXTURE_CUBE_MAP, Tv.TEXTURE_MIN_FILTER, iv.min), Tv.texParameteri(Tv.TEXTURE_CUBE_MAP, Tv.TEXTURE_WRAP_S, Tv.CLAMP_TO_EDGE), Tv.texParameteri(Tv.TEXTURE_CUBE_MAP, Tv.TEXTURE_WRAP_T, Tv.CLAMP_TO_EDGE), this._bindTextureDirectly(Tv.TEXTURE_CUBE_MAP, null), Wv.generateMipMaps = Sv, Wv.samplingMode = Nv, Wv.isReady = !0, Wv
      }, Sv.ThinEngine.prototype.updateRawCubeTexture = function(zv, Pv, hv, Sv, ev) {
        let gv = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          pv = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        zv._bufferViewArray = Pv, zv.format = hv, zv.type = Sv, zv.invertY = ev, zv._compression = gv;
        const Nv = this._gl,
          lv = this._getWebGLTextureType(Sv);
        let Tv = this._getInternalFormat(hv);
        const Wv = this._getRGBABufferInternalSizedFormat(Sv);
        let wv = !1;
        Tv === Nv.RGB && (Tv = Nv.RGBA, wv = !0), this._bindTextureDirectly(Nv.TEXTURE_CUBE_MAP, zv, !0), this._unpackFlipY(void 0 === ev || !!ev), zv.width % 4 !== 0 && Nv.pixelStorei(Nv.UNPACK_ALIGNMENT, 1);
        for (let dv = 0; dv < 6; dv++) {
          let hv = Pv[dv];
          gv ? Nv.compressedTexImage2D(Nv.TEXTURE_CUBE_MAP_POSITIVE_X + dv, pv, this.getCaps().s3tc[gv], zv.width, zv.height, 0, hv) : (wv && (hv = vv(hv, zv.width, zv.height, Sv)), Nv.texImage2D(Nv.TEXTURE_CUBE_MAP_POSITIVE_X + dv, pv, Wv, zv.width, zv.height, 0, Tv, lv, hv))
        }(!this.needPOTTextures || (0, dv.e)(zv.width) && (0, dv.e)(zv.height)) && zv.generateMipMaps && 0 === pv && this._gl.generateMipmap(this._gl.TEXTURE_CUBE_MAP), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), zv.isReady = !0
      }, Sv.ThinEngine.prototype.createRawCubeTextureFromUrl = function(zv, Pv, hv, Sv, ev, gv, pv, dv) {
        let Nv = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          lv = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          Tv = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 3,
          Wv = arguments.length > 11 && void 0 !== arguments[11] && arguments[11];
        const wv = this._gl,
          av = this.createRawCubeTexture(null, hv, Sv, ev, !gv, Wv, Tv, null);
        Pv?.addPendingData(av), av.url = zv, av.isReady = !1, this._internalTexturesCache.push(av);
        const sv = (vv, zv) => {
            Pv?.removePendingData(av), lv && lv(vv ? vv.status + " " + vv.statusText : "Failed to parse texture data", zv)
          },
          Cv = async zv => {
            if (!av._hardwareTexture) return;
            const hv = pv(zv);
            if (!hv) return;
            const gv = hv instanceof Promise ? await hv : hv,
              lv = av.width;
            if (dv) {
              const zv = this._getWebGLTextureType(ev);
              let Pv = this._getInternalFormat(Sv);
              const hv = this._getRGBABufferInternalSizedFormat(ev);
              let pv = !1;
              Pv === wv.RGB && (Pv = wv.RGBA, pv = !0), this._bindTextureDirectly(wv.TEXTURE_CUBE_MAP, av, !0), this._unpackFlipY(!1);
              const Nv = dv(gv);
              for (let Sv = 0; Sv < Nv.length; Sv++) {
                const gv = lv >> Sv;
                for (let dv = 0; dv < 6; dv++) {
                  let lv = Nv[Sv][dv];
                  pv && (lv = vv(lv, gv, gv, ev)), wv.texImage2D(dv, Sv, hv, gv, gv, 0, Pv, zv, lv)
                }
              }
              this._bindTextureDirectly(wv.TEXTURE_CUBE_MAP, null)
            } else this.updateRawCubeTexture(av, gv, Sv, ev, Wv);
            av.isReady = !0, Pv?.removePendingData(av), av.onLoadedObservable.notifyObservers(av), av.onLoadedObservable.clear(), Nv && Nv()
          };
        return this._loadFile(zv, (vv => {
          Cv(vv).catch((vv => {
            sv(void 0, vv)
          }))
        }), void 0, Pv?.offlineProvider, !0, sv), av
      }, Sv.ThinEngine.prototype.createRawTexture2DArray = zv(!1), Sv.ThinEngine.prototype.createRawTexture3D = zv(!0), Sv.ThinEngine.prototype.updateRawTexture2DArray = Pv(!1), Sv.ThinEngine.prototype.updateRawTexture3D = Pv(!0))
    }();
    var lv = Pv(39184);
    let Tv = !1;
    Tv || (Tv = !0, Sv.ThinEngine.prototype._readTexturePixelsSync = function(vv, zv, Pv) {
      let hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1,
        Sv = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        ev = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        gv = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
        pv = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        dv = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
        Nv = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
      const Tv = this._gl;
      if (!Tv) throw new Error("Engine does not have gl rendering context.");
      if (!this._dummyFramebuffer) {
        const vv = Tv.createFramebuffer();
        if (!vv) throw new Error("Unable to create dummy framebuffer");
        this._dummyFramebuffer = vv
      }
      Tv.bindFramebuffer(Tv.FRAMEBUFFER, this._dummyFramebuffer), hv > -1 && (vv.is2DArray || vv.is3D) ? Tv.framebufferTextureLayer(Tv.FRAMEBUFFER, Tv.COLOR_ATTACHMENT0, vv._hardwareTexture?.underlyingResource, Sv, hv) : hv > -1 ? Tv.framebufferTexture2D(Tv.FRAMEBUFFER, Tv.COLOR_ATTACHMENT0, Tv.TEXTURE_CUBE_MAP_POSITIVE_X + hv, vv._hardwareTexture?.underlyingResource, Sv) : Tv.framebufferTexture2D(Tv.FRAMEBUFFER, Tv.COLOR_ATTACHMENT0, Tv.TEXTURE_2D, vv._hardwareTexture?.underlyingResource, Sv);
      let Wv = void 0 !== vv.type ? this._getWebGLTextureType(vv.type) : Tv.UNSIGNED_BYTE;
      return pv ? ev || (ev = (0, lv.k)(vv.type, 4 * zv * Pv)) : Wv === Tv.UNSIGNED_BYTE ? (ev || (ev = new Uint8Array(4 * zv * Pv)), Wv = Tv.UNSIGNED_BYTE) : (ev || (ev = new Float32Array(4 * zv * Pv)), Wv = Tv.FLOAT), gv && this.flushFramebuffer(), Tv.readPixels(dv, Nv, zv, Pv, Tv.RGBA, Wv, ev), Tv.bindFramebuffer(Tv.FRAMEBUFFER, this._currentFramebuffer), ev
    }, Sv.ThinEngine.prototype._readTexturePixels = function(vv, zv, Pv) {
      let hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1,
        Sv = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        ev = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        gv = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
        pv = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        dv = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
        Nv = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
      return Promise.resolve(this._readTexturePixelsSync(vv, zv, Pv, hv, Sv, ev, gv, pv, dv, Nv))
    }), (0, Pv(39272).c)();
    let Wv = !1;
    Wv || (Wv = !0, Sv.ThinEngine.prototype._createDepthStencilCubeTexture = function(vv, zv) {
      const Pv = new gv.e(this, 12);
      if (Pv.isCube = !0, 1 === this.ka) return pv.d.Error("Depth cube texture is not supported by WebGL 1."), Pv;
      const hv = {
          bilinearFiltering: !1,
          comparisonFunction: 0,
          generateStencil: !1,
          ...zv
        },
        Sv = this._gl;
      this._bindTextureDirectly(Sv.TEXTURE_CUBE_MAP, Pv, !0), this._setupDepthStencilTexture(Pv, vv, hv.bilinearFiltering, hv.comparisonFunction);
      for (let ev = 0; ev < 6; ev++) hv.generateStencil ? Sv.texImage2D(Sv.TEXTURE_CUBE_MAP_POSITIVE_X + ev, 0, Sv.DEPTH24_STENCIL8, vv, vv, 0, Sv.DEPTH_STENCIL, Sv.UNSIGNED_INT_24_8, null) : Sv.texImage2D(Sv.TEXTURE_CUBE_MAP_POSITIVE_X + ev, 0, Sv.DEPTH_COMPONENT24, vv, vv, 0, Sv.DEPTH_COMPONENT, Sv.UNSIGNED_INT, null);
      return this._bindTextureDirectly(Sv.TEXTURE_CUBE_MAP, null), this._internalTexturesCache.push(Pv), Pv
    }, Sv.ThinEngine.prototype._setCubeMapTextureParams = function(vv, zv, Pv) {
      const hv = this._gl;
      hv.texParameteri(hv.TEXTURE_CUBE_MAP, hv.TEXTURE_MAG_FILTER, hv.LINEAR), hv.texParameteri(hv.TEXTURE_CUBE_MAP, hv.TEXTURE_MIN_FILTER, zv ? hv.LINEAR_MIPMAP_LINEAR : hv.LINEAR), hv.texParameteri(hv.TEXTURE_CUBE_MAP, hv.TEXTURE_WRAP_S, hv.CLAMP_TO_EDGE), hv.texParameteri(hv.TEXTURE_CUBE_MAP, hv.TEXTURE_WRAP_T, hv.CLAMP_TO_EDGE), vv.samplingMode = zv ? 3 : 2, zv && this.getCaps().textureMaxLevel && void 0 !== Pv && Pv > 0 && (hv.texParameteri(hv.TEXTURE_CUBE_MAP, hv.TEXTURE_MAX_LEVEL, Pv), vv._maxLodLevel = Pv), this._bindTextureDirectly(hv.TEXTURE_CUBE_MAP, null)
    }, Sv.ThinEngine.prototype.createCubeTexture = function(vv, zv, Pv, hv) {
      let Sv = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        ev = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        gv = arguments.length > 6 ? arguments[6] : void 0,
        Nv = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        lv = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        Tv = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
        Wv = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
        wv = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
        av = arguments.length > 13 && void 0 !== arguments[13] && arguments[13],
        sv = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : null;
      const Cv = this._gl;
      return this.createCubeTextureBase(vv, zv, Pv, !!hv, Sv, ev, gv, Nv, lv, Tv, Wv, wv, (vv => this._bindTextureDirectly(Cv.TEXTURE_CUBE_MAP, vv, !0)), ((vv, zv) => {
        const Pv = this.needPOTTextures ? (0, dv.c)(zv[0].width, this._caps.maxCubemapTextureSize) : zv[0].width,
          ev = Pv,
          Nv = [Cv.TEXTURE_CUBE_MAP_POSITIVE_X, Cv.TEXTURE_CUBE_MAP_POSITIVE_Y, Cv.TEXTURE_CUBE_MAP_POSITIVE_Z, Cv.TEXTURE_CUBE_MAP_NEGATIVE_X, Cv.TEXTURE_CUBE_MAP_NEGATIVE_Y, Cv.TEXTURE_CUBE_MAP_NEGATIVE_Z];
        this._bindTextureDirectly(Cv.TEXTURE_CUBE_MAP, vv, !0), this._unpackFlipY(!1);
        const lv = gv ? this._getInternalFormat(gv, vv._useSRGBBuffer) : vv._useSRGBBuffer ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : Cv.RGBA;
        let Tv = gv ? this._getInternalFormat(gv) : Cv.RGBA;
        vv._useSRGBBuffer && 1 === this.ka && (Tv = lv);
        for (let hv = 0; hv < Nv.length; hv++)
          if (zv[hv].width !== Pv || zv[hv].height !== ev) {
            if (this._prepareWorkingCanvas(), !this._workingCanvas || !this._workingContext) return void pv.d.Warn("Cannot create canvas to resize texture.");
            this._workingCanvas.width = Pv, this._workingCanvas.height = ev, this._workingContext.drawImage(zv[hv], 0, 0, zv[hv].width, zv[hv].height, 0, 0, Pv, ev), Cv.texImage2D(Nv[hv], 0, lv, Tv, Cv.UNSIGNED_BYTE, this._workingCanvas)
          } else Cv.texImage2D(Nv[hv], 0, lv, Tv, Cv.UNSIGNED_BYTE, zv[hv]);
        hv || Cv.generateMipmap(Cv.TEXTURE_CUBE_MAP), this._setCubeMapTextureParams(vv, !hv), vv.width = Pv, vv.height = ev, vv.isReady = !0, gv && (vv.format = gv), vv.onLoadedObservable.notifyObservers(vv), vv.onLoadedObservable.clear(), Sv && Sv()
      }), !!av, sv)
    }, Sv.ThinEngine.prototype.generateMipMapsForCubemap = function(vv) {
      let zv = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (vv.generateMipMaps) {
        const Pv = this._gl;
        this._bindTextureDirectly(Pv.TEXTURE_CUBE_MAP, vv, !0), Pv.generateMipmap(Pv.TEXTURE_CUBE_MAP), zv && this._bindTextureDirectly(Pv.TEXTURE_CUBE_MAP, null)
      }
    });
    Pv(39275);
    let wv = !1;
    wv || (wv = !0, Sv.ThinEngine.prototype.setDepthStencilTexture = function(vv, zv, Pv, hv) {
      void 0 !== vv && (zv && (this._boundUniforms[vv] = zv), Pv && Pv.depthStencilTexture ? this._setTexture(vv, Pv, !1, !0, hv) : this._setTexture(vv, null, void 0, void 0, hv))
    });
    let av = !1;
    av || (av = !0, Sv.ThinEngine.prototype.createRenderTargetCubeTexture = function(vv, zv) {
      const Pv = this._createHardwareRenderTargetWrapper(!1, !0, vv),
        hv = {
          generateMipMaps: !0,
          generateDepthBuffer: !0,
          generateStencilBuffer: !1,
          type: 0,
          samplingMode: 3,
          format: 5,
          ...zv
        };
      hv.generateStencilBuffer = hv.generateDepthBuffer && hv.generateStencilBuffer, (1 !== hv.type || this._caps.textureFloatLinearFiltering) && (2 !== hv.type || this._caps.textureHalfFloatLinearFiltering) || (hv.samplingMode = 1);
      const Sv = this._gl,
        ev = new gv.e(this, 5);
      this._bindTextureDirectly(Sv.TEXTURE_CUBE_MAP, ev, !0);
      const dv = this._getSamplingParameters(hv.samplingMode, hv.generateMipMaps);
      1 !== hv.type || this._caps.textureFloat || (hv.type = 0, pv.d.Warn("Float textures are not supported. Cube render target forced to TEXTURETYPE_UNESIGNED_BYTE type")), Sv.texParameteri(Sv.TEXTURE_CUBE_MAP, Sv.TEXTURE_MAG_FILTER, dv.mag), Sv.texParameteri(Sv.TEXTURE_CUBE_MAP, Sv.TEXTURE_MIN_FILTER, dv.min), Sv.texParameteri(Sv.TEXTURE_CUBE_MAP, Sv.TEXTURE_WRAP_S, Sv.CLAMP_TO_EDGE), Sv.texParameteri(Sv.TEXTURE_CUBE_MAP, Sv.TEXTURE_WRAP_T, Sv.CLAMP_TO_EDGE);
      for (let gv = 0; gv < 6; gv++) Sv.texImage2D(Sv.TEXTURE_CUBE_MAP_POSITIVE_X + gv, 0, this._getRGBABufferInternalSizedFormat(hv.type, hv.format), vv, vv, 0, this._getInternalFormat(hv.format), this._getWebGLTextureType(hv.type), null);
      const Nv = Sv.createFramebuffer();
      return this._bindUnboundFramebuffer(Nv), Pv._depthStencilBuffer = this._setupFramebufferDepthAttachments(hv.generateStencilBuffer, hv.generateDepthBuffer, vv, vv), hv.generateMipMaps && Sv.generateMipmap(Sv.TEXTURE_CUBE_MAP), this._bindTextureDirectly(Sv.TEXTURE_CUBE_MAP, null), this._bindUnboundFramebuffer(null), Pv._framebuffer = Nv, Pv._generateDepthBuffer = hv.generateDepthBuffer, Pv._generateStencilBuffer = hv.generateStencilBuffer, ev.width = vv, ev.height = vv, ev.isReady = !0, ev.isCube = !0, ev.samples = 1, ev.generateMipMaps = hv.generateMipMaps, ev.samplingMode = hv.samplingMode, ev.type = hv.type, ev.format = hv.format, this._internalTexturesCache.push(ev), Pv.setTextures(ev), Pv
    });
    var sv = Pv(39284),
      Cv = Pv(39287);
    let iv = !1;
    iv || (iv = !0, Sv.ThinEngine.prototype.createPrefilteredCubeTexture = function(vv, zv, hv, Sv) {
      let ev = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        dv = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        Nv = arguments.length > 6 ? arguments[6] : void 0,
        lv = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        Tv = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
        Wv = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null;
      return this.createCubeTexture(vv, zv, null, !1, (async vv => {
        if (!vv) return void(ev && ev(null));
        const dv = vv.texture;
        if (Tv ? vv.info.sphericalPolynomial && (dv._sphericalPolynomial = vv.info.sphericalPolynomial) : dv._sphericalPolynomial = dv._sphericalPolynomial ?? new sv.f, dv._source = 9, this.getCaps().textureLOD) return void(ev && ev(dv));
        const Nv = this._gl,
          lv = vv.width;
        if (!lv) return;
        const {
          DDSTools: Wv
        } = await Pv.e(297).then((() => Pv(41058))), wv = [];
        for (let Pv = 0; Pv < 3; Pv++) {
          const ev = 1 - Pv / 2,
            Tv = Sv,
            av = Math.log2(lv) * hv + Sv,
            sv = Tv + (av - Tv) * ev,
            iv = Math.round(Math.min(Math.max(sv, 0), av)),
            cv = new gv.e(this, 2);
          if (cv.type = dv.type, cv.format = dv.format, cv.width = Math.pow(2, Math.max(Math.log2(lv) - iv, 0)), cv.height = cv.width, cv.isCube = !0, cv._cachedWrapU = 0, cv._cachedWrapV = 0, this._bindTextureDirectly(Nv.TEXTURE_CUBE_MAP, cv, !0), cv.samplingMode = 2, Nv.texParameteri(Nv.TEXTURE_CUBE_MAP, Nv.TEXTURE_MAG_FILTER, Nv.LINEAR), Nv.texParameteri(Nv.TEXTURE_CUBE_MAP, Nv.TEXTURE_MIN_FILTER, Nv.LINEAR), Nv.texParameteri(Nv.TEXTURE_CUBE_MAP, Nv.TEXTURE_WRAP_S, Nv.CLAMP_TO_EDGE), Nv.texParameteri(Nv.TEXTURE_CUBE_MAP, Nv.TEXTURE_WRAP_T, Nv.CLAMP_TO_EDGE), vv.isDDS) {
            const zv = vv.info,
              Pv = vv.data;
            this._unpackFlipY(zv.isCompressed), Wv.UploadDDSLevels(this, cv, Pv, zv, !0, 6, iv)
          } else pv.d.Warn("DDS is the only prefiltered cube map supported so far.");
          this._bindTextureDirectly(Nv.TEXTURE_CUBE_MAP, null);
          const Gv = new Cv.e(zv);
          Gv._isCube = !0, Gv._texture = cv, cv.isReady = !0, wv.push(Gv)
        }
        dv._lodTextureHigh = wv[2], dv._lodTextureMid = wv[1], dv._lodTextureLow = wv[0], ev && ev(dv)
      }), dv, Nv, lv, Tv, hv, Sv, null, void 0, !1, Wv)
    });
    var cv = Pv(39239);
    let Gv = !1;
    Gv || (Gv = !0, Sv.ThinEngine.prototype.createUniformBuffer = function(vv, zv) {
      const Pv = this._gl.createBuffer();
      if (!Pv) throw new Error("Unable to create uniform buffer");
      const hv = new cv.b(Pv);
      return this.bindUniformBuffer(hv), vv instanceof Float32Array ? this._gl.bufferData(this._gl.UNIFORM_BUFFER, vv, this._gl.STATIC_DRAW) : this._gl.bufferData(this._gl.UNIFORM_BUFFER, new Float32Array(vv), this._gl.STATIC_DRAW), this.bindUniformBuffer(null), hv.references = 1, hv
    }, Sv.ThinEngine.prototype.createDynamicUniformBuffer = function(vv, zv) {
      const Pv = this._gl.createBuffer();
      if (!Pv) throw new Error("Unable to create dynamic uniform buffer");
      const hv = new cv.b(Pv);
      return this.bindUniformBuffer(hv), vv instanceof Float32Array ? this._gl.bufferData(this._gl.UNIFORM_BUFFER, vv, this._gl.DYNAMIC_DRAW) : this._gl.bufferData(this._gl.UNIFORM_BUFFER, new Float32Array(vv), this._gl.DYNAMIC_DRAW), this.bindUniformBuffer(null), hv.references = 1, hv
    }, Sv.ThinEngine.prototype.updateUniformBuffer = function(vv, zv, Pv, hv) {
      this.bindUniformBuffer(vv), void 0 === Pv && (Pv = 0), void 0 === hv ? zv instanceof Float32Array ? this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, Pv, zv) : this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, Pv, new Float32Array(zv)) : zv instanceof Float32Array ? this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, 0, zv.subarray(Pv, Pv + hv)) : this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, 0, new Float32Array(zv).subarray(Pv, Pv + hv)), this.bindUniformBuffer(null)
    }, Sv.ThinEngine.prototype.bindUniformBuffer = function(vv) {
      this._gl.bindBuffer(this._gl.UNIFORM_BUFFER, vv ? vv.underlyingResource : null)
    }, Sv.ThinEngine.prototype.bindUniformBufferBase = function(vv, zv, Pv) {
      this._gl.bindBufferBase(this._gl.UNIFORM_BUFFER, zv, vv ? vv.underlyingResource : null)
    }, Sv.ThinEngine.prototype.bindUniformBlock = function(vv, zv, Pv) {
      const hv = vv.program,
        Sv = this._gl.getUniformBlockIndex(hv, zv);
      4294967295 !== Sv && this._gl.uniformBlockBinding(hv, Sv, Pv)
    });
    var mv = Pv(39167),
      jv = Pv(39212);
    let fv = !1;
    fv || (fv = !0, jv.b.prototype.displayLoadingUI = function() {
      if (!(0, mv.l)()) return;
      const vv = this.loadingScreen;
      vv && vv.displayLoadingUI()
    }, jv.b.prototype.hideLoadingUI = function() {
      if (!(0, mv.l)()) return;
      const vv = this._loadingScreen;
      vv && vv.hideLoadingUI()
    }, Object.defineProperty(jv.b.prototype, "loadingScreen", {
      get: function() {
        return !this._loadingScreen && this._renderingCanvas && (this._loadingScreen = jv.b.DefaultLoadingScreenFactory(this._renderingCanvas)), this._loadingScreen
      },
      set: function(vv) {
        this._loadingScreen = vv
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(jv.b.prototype, "loadingUIText", {
      set: function(vv) {
        this.loadingScreen.loadingUIText = vv
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(jv.b.prototype, "loadingUIBackgroundColor", {
      set: function(vv) {
        this.loadingScreen.loadingUIBackgroundColor = vv
      },
      enumerable: !0,
      configurable: !0
    })), (0, Pv(39260).c)();
    let Fv = !1;
    Fv || (Fv = !0, jv.b.prototype.getInputElement = function() {
      return this._renderingCanvas
    }, jv.b.prototype.getDepthFunction = function() {
      return this._depthCullingState.depthFunc
    }, jv.b.prototype.setDepthFunction = function(vv) {
      this._depthCullingState.depthFunc = vv
    }, jv.b.prototype.setDepthFunctionToGreater = function() {
      this.setDepthFunction(516)
    }, jv.b.prototype.setDepthFunctionToGreaterOrEqual = function() {
      this.setDepthFunction(518)
    }, jv.b.prototype.setDepthFunctionToLess = function() {
      this.setDepthFunction(513)
    }, jv.b.prototype.setDepthFunctionToLessOrEqual = function() {
      this.setDepthFunction(515)
    }, jv.b.prototype.getDepthWrite = function() {
      return this._depthCullingState.depthMask
    }, jv.b.prototype.setDepthWrite = function(vv) {
      this._depthCullingState.depthMask = vv
    }, jv.b.prototype.setAlphaConstants = function(vv, zv, Pv, hv) {
      this._alphaState.setAlphaBlendConstants(vv, zv, Pv, hv)
    }, jv.b.prototype.getAlphaMode = function() {
      let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
      return this._alphaMode[vv]
    }, jv.b.prototype.getAlphaEquation = function() {
      let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
      return this._alphaEquation[vv]
    });
    let Yv = !1;
    Yv || (Yv = !0, jv.b.prototype.getStencilBuffer = function() {
      return this._stencilState.stencilTest
    }, jv.b.prototype.setStencilBuffer = function(vv) {
      this._stencilState.stencilTest = vv
    }, jv.b.prototype.getStencilMask = function() {
      return this._stencilState.stencilMask
    }, jv.b.prototype.setStencilMask = function(vv) {
      this._stencilState.stencilMask = vv
    }, jv.b.prototype.getStencilFunction = function() {
      return this._stencilState.stencilFunc
    }, jv.b.prototype.getStencilBackFunction = function() {
      return this._stencilState.stencilBackFunc
    }, jv.b.prototype.getStencilFunctionReference = function() {
      return this._stencilState.stencilFuncRef
    }, jv.b.prototype.getStencilFunctionMask = function() {
      return this._stencilState.stencilFuncMask
    }, jv.b.prototype.setStencilFunction = function(vv) {
      this._stencilState.stencilFunc = vv
    }, jv.b.prototype.setStencilBackFunction = function(vv) {
      this._stencilState.stencilBackFunc = vv
    }, jv.b.prototype.setStencilFunctionReference = function(vv) {
      this._stencilState.stencilFuncRef = vv
    }, jv.b.prototype.setStencilFunctionMask = function(vv) {
      this._stencilState.stencilFuncMask = vv
    }, jv.b.prototype.getStencilOperationFail = function() {
      return this._stencilState.stencilOpStencilFail
    }, jv.b.prototype.getStencilBackOperationFail = function() {
      return this._stencilState.stencilBackOpStencilFail
    }, jv.b.prototype.getStencilOperationDepthFail = function() {
      return this._stencilState.stencilOpDepthFail
    }, jv.b.prototype.getStencilBackOperationDepthFail = function() {
      return this._stencilState.stencilBackOpDepthFail
    }, jv.b.prototype.getStencilOperationPass = function() {
      return this._stencilState.stencilOpStencilDepthPass
    }, jv.b.prototype.getStencilBackOperationPass = function() {
      return this._stencilState.stencilBackOpStencilDepthPass
    }, jv.b.prototype.setStencilOperationFail = function(vv) {
      this._stencilState.stencilOpStencilFail = vv
    }, jv.b.prototype.setStencilBackOperationFail = function(vv) {
      this._stencilState.stencilBackOpStencilFail = vv
    }, jv.b.prototype.setStencilOperationDepthFail = function(vv) {
      this._stencilState.stencilOpDepthFail = vv
    }, jv.b.prototype.setStencilBackOperationDepthFail = function(vv) {
      this._stencilState.stencilBackOpDepthFail = vv
    }, jv.b.prototype.setStencilOperationPass = function(vv) {
      this._stencilState.stencilOpStencilDepthPass = vv
    }, jv.b.prototype.setStencilBackOperationPass = function(vv) {
      this._stencilState.stencilBackOpStencilDepthPass = vv
    }, jv.b.prototype.cacheStencilState = function() {
      this._cachedStencilBuffer = this.getStencilBuffer(), this._cachedStencilFunction = this.getStencilFunction(), this._cachedStencilMask = this.getStencilMask(), this._cachedStencilOperationPass = this.getStencilOperationPass(), this._cachedStencilOperationFail = this.getStencilOperationFail(), this._cachedStencilOperationDepthFail = this.getStencilOperationDepthFail(), this._cachedStencilReference = this.getStencilFunctionReference()
    }, jv.b.prototype.restoreStencilState = function() {
      this.setStencilFunction(this._cachedStencilFunction), this.setStencilMask(this._cachedStencilMask), this.setStencilBuffer(this._cachedStencilBuffer), this.setStencilOperationPass(this._cachedStencilOperationPass), this.setStencilOperationFail(this._cachedStencilOperationFail), this.setStencilOperationDepthFail(this._cachedStencilOperationDepthFail), this.setStencilFunctionReference(this._cachedStencilReference)
    });
    Pv(39325);
    let nv = !1;
    nv || (nv = !0, jv.b.prototype.createDepthStencilTexture = function(vv, zv, Pv) {
      if (zv.isCube) {
        const Pv = vv.width || vv;
        return this._createDepthStencilCubeTexture(Pv, zv)
      }
      return this._createDepthStencilTexture(vv, zv, Pv)
    });
    Pv(39334), Pv(39374);
    let Ov = !1;
    Ov || (Ov = !0, Sv.ThinEngine.prototype.enableScissor = function(vv, zv, Pv, hv) {
      const Sv = this._gl;
      Sv.enable(Sv.SCISSOR_TEST), Sv.scissor(vv, zv, Pv, hv)
    }, Sv.ThinEngine.prototype.disableScissor = function() {
      const vv = this._gl;
      vv.disable(vv.SCISSOR_TEST)
    })
  },
  39131: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => jv
    });
    var hv = Pv(39134),
      Sv = Pv(36615),
      ev = Pv(39152),
      gv = Pv(39220);
    class pv {
      constructor() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 30;
        this._enabled = !0, this._rollingFrameTime = new dv(vv)
      }
      sampleFrame() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : gv.c.Now;
        if (this._enabled) {
          if (null != this._lastFrameTimeMs) {
            const zv = vv - this._lastFrameTimeMs;
            this._rollingFrameTime.add(zv)
          }
          this._lastFrameTimeMs = vv
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
        const vv = this._rollingFrameTime.history(0);
        return 0 === vv ? 0 : 1e3 / vv
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
    class dv {
      constructor(vv) {
        this._samples = new Array(vv), this.reset()
      }
      add(vv) {
        let zv;
        if (this.isSaturated()) {
          const vv = this._samples[this._pos];
          zv = vv - this.average, this.average -= zv / (this._sampleCount - 1), this._m2 -= zv * (vv - this.average)
        } else this._sampleCount++;
        zv = vv - this.average, this.average += zv / this._sampleCount, this._m2 += zv * (vv - this.average), this.variance = this._m2 / (this._sampleCount - 1), this._samples[this._pos] = vv, this._pos++, this._pos %= this._samples.length
      }
      history(vv) {
        if (vv >= this._sampleCount || vv >= this._samples.length) return 0;
        const zv = this._wrapPosition(this._pos - 1);
        return this._samples[this._wrapPosition(zv - vv)]
      }
      isSaturated() {
        return this._sampleCount >= this._samples.length
      }
      reset() {
        this.average = 0, this.variance = 0, this._sampleCount = 0, this._pos = 0, this._m2 = 0
      }
      _wrapPosition(vv) {
        const zv = this._samples.length;
        return (vv % zv + zv) % zv
      }
    }
    var Nv = Pv(39239),
      lv = Pv(38209),
      Tv = Pv(39249),
      Wv = Pv(39212),
      wv = Pv(39167);

    function av(vv) {
      const zv = function(vv) {
        if (!(0, wv.g)() || !document.body) return null;
        const zv = document.createElement("span");
        zv.textContent = "Hg", zv.style.font = vv;
        const Pv = document.createElement("div");
        Pv.style.display = "inline-block", Pv.style.width = "1px", Pv.style.height = "0px", Pv.style.verticalAlign = "bottom";
        const hv = document.createElement("div");
        let Sv, ev;
        hv.style.whiteSpace = "nowrap", hv.appendChild(zv), hv.appendChild(Pv), document.body.appendChild(hv);
        try {
          ev = Pv.getBoundingClientRect().top - zv.getBoundingClientRect().top, Pv.style.verticalAlign = "baseline", Sv = Pv.getBoundingClientRect().top - zv.getBoundingClientRect().top
        } finally {
          document.body.removeChild(hv)
        }
        const gv = {
          ascent: Sv,
          height: ev,
          descent: ev - Sv
        };
        return sv(gv) ? gv : null
      }(vv);
      if (zv) return zv;
      const Pv = function(vv) {
        let zv = null;
        try {
          "undefined" !== typeof OffscreenCanvas ? zv = new OffscreenCanvas(64, 64) : (0, wv.g)() && "function" === typeof document.createElement && (zv = document.createElement("canvas"), zv.width = 64, zv.height = 64);
          const Pv = zv?.getContext("2d");
          if (!Pv) return null;
          Pv.font = vv;
          const hv = Pv.measureText("Hg"),
            Sv = Number(hv.actualBoundingBoxAscent ?? hv.fontBoundingBoxAscent),
            ev = Number(hv.actualBoundingBoxDescent ?? hv.fontBoundingBoxDescent),
            gv = {
              ascent: Sv,
              height: Sv + ev,
              descent: ev
            };
          return sv(gv) ? gv : null
        } catch {
          return null
        } finally {
          const vv = zv;
          "function" === typeof vv?.dispose && vv.dispose()
        }
      }(vv);
      return Pv || function(vv) {
        const zv = Math.max(1, function(vv) {
            const zv = /(?:^|\s)([0-9]+(?:\.[0-9]+)?)px(?:\/|\s|$)/.exec(String(vv || ""));
            return zv ? Number(zv[1]) : 16
          }(vv)),
          Pv = .8 * zv,
          hv = .2 * zv;
        return {
          ascent: Pv,
          height: Pv + hv,
          descent: hv
        }
      }(vv)
    }

    function sv(vv) {
      return Number.isFinite(vv.ascent) && Number.isFinite(vv.height) && Number.isFinite(vv.descent) && vv.height > 0
    }

    function Cv(vv) {
      if (vv.requestPointerLock) {
        const zv = vv.requestPointerLock();
        zv instanceof Promise ? zv.then((() => {
          vv.focus()
        })).catch((() => {})) : vv.focus()
      }
    }
    var iv = Pv(39257),
      cv = Pv(39204),
      Gv = Pv(39260),
      mv = Pv(39266);
    class jv extends ev.ThinEngine {
      static get NpmPackage() {
        return Wv.b.NpmPackage
      }
      static get Version() {
        return Wv.b.Version
      }
      static get Instances() {
        return Sv.e.Instances
      }
      static get LastCreatedEngine() {
        return Sv.e.LastCreatedEngine
      }
      static get LastCreatedScene() {
        return Sv.e.LastCreatedScene
      }
      static DefaultLoadingScreenFactory(vv) {
        return Wv.b.DefaultLoadingScreenFactory(vv)
      }
      get _supportsHardwareTextureRescaling() {
        return !!jv._RescalePostProcessFactory
      }
      _measureFps() {
        this._performanceMonitor.sampleFrame(), this._fps = this._performanceMonitor.averageFPS, this._deltaTime = this._performanceMonitor.instantaneousFrameTime || 0
      }
      get performanceMonitor() {
        return this._performanceMonitor
      }
      constructor(vv, zv, Pv) {
        let hv = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        (0, Gv.c)(), (0, mv.c)(), super(vv, zv, Pv, hv), this._performanceMonitor = new pv, this._drawCalls = new iv.c, vv && (this._features.supportRenderPasses = !0)
      }
      _initGLContext() {
        super._initGLContext(), this._rescalePostProcess = null
      }
      _sharedInit(vv) {
        super._sharedInit(vv),
          function(vv, zv, Pv) {
            vv._onCanvasFocus = () => {
              vv.onCanvasFocusObservable.notifyObservers(vv)
            }, vv._onCanvasBlur = () => {
              vv.onCanvasBlurObservable.notifyObservers(vv)
            }, vv._onCanvasContextMenu = zv => {
              vv.disableContextMenu && zv.preventDefault()
            }, zv.addEventListener("focus", vv._onCanvasFocus), zv.addEventListener("blur", vv._onCanvasBlur), zv.addEventListener("contextmenu", vv._onCanvasContextMenu), vv._onBlur = () => {
              vv.disablePerformanceMonitorInBackground && vv.performanceMonitor.disable(), vv._windowIsBackground = !0
            }, vv._onFocus = () => {
              vv.disablePerformanceMonitorInBackground && vv.performanceMonitor.enable(), vv._windowIsBackground = !1
            }, vv._onCanvasPointerOut = Pv => {
              document.elementFromPoint(Pv.clientX, Pv.clientY) !== zv && vv.onCanvasPointerOutObservable.notifyObservers(Pv)
            };
            const hv = vv.getHostWindow();
            hv && "function" === typeof hv.addEventListener && (hv.addEventListener("blur", vv._onBlur), hv.addEventListener("focus", vv._onFocus)), zv.addEventListener("pointerout", vv._onCanvasPointerOut), Pv.doNotHandleTouchAction || function(vv) {
              vv && vv.setAttribute && (vv.setAttribute("touch-action", "none"), vv.style.touchAction = "none", vv.style.webkitTapHighlightColor = "transparent")
            }(zv), !Wv.b.audioEngine && Pv.audioEngine && Wv.b.AudioEngineFactory && (Wv.b.audioEngine = Wv.b.AudioEngineFactory(vv.getRenderingCanvas(), vv.getAudioContext(), vv.getAudioDestination())), (0, wv.g)() && (vv._onFullscreenChange = () => {
              vv.isFullscreen = !!document.fullscreenElement, vv.isFullscreen && vv._pointerLockRequested && zv && Cv(zv)
            }, document.addEventListener("fullscreenchange", vv._onFullscreenChange, !1), document.addEventListener("webkitfullscreenchange", vv._onFullscreenChange, !1), vv._onPointerLockChange = () => {
              vv.isPointerLock = document.pointerLockElement === zv
            }, document.addEventListener("pointerlockchange", vv._onPointerLockChange, !1), document.addEventListener("webkitpointerlockchange", vv._onPointerLockChange, !1)), vv.enableOfflineSupport = void 0 !== Wv.b.OfflineProviderFactory, vv._deterministicLockstep = !!Pv.deterministicLockstep, vv._lockstepMaxSteps = Pv.lockstepMaxSteps || 0, vv._timeStep = Pv.timeStep || 1 / 60
          }(this, vv, this._creationOptions)
      }
      resizeImageBitmap(vv, zv, Pv) {
        return function(vv, zv, Pv, hv) {
          const Sv = vv.createCanvas(Pv, hv).getContext("2d");
          if (!Sv) throw new Error("Unable to get 2d context for resizeImageBitmap");
          return Sv.drawImage(zv, 0, 0), Sv.getImageData(0, 0, Pv, hv).data
        }(this, vv, zv, Pv)
      }
      async _createImageBitmapFromSource(vv, zv) {
        return await async function(vv, zv, Pv) {
          return await new Promise(((hv, Sv) => {
            const ev = new Image;
            ev.onload = () => {
              ev.decode().then((() => {
                vv.createImageBitmap(ev, Pv).then((vv => {
                  hv(vv)
                }))
              }))
            }, ev.onerror = () => {
              Sv(`Error loading image ${ev.src}`)
            }, ev.src = zv
          }))
        }(this, vv, zv)
      }
      switchFullscreen(vv) {
        this.isFullscreen ? this.exitFullscreen() : this.enterFullscreen(vv)
      }
      enterFullscreen(vv) {
        this.isFullscreen || (this._pointerLockRequested = vv, this._renderingCanvas && function(vv) {
          const zv = vv.requestFullscreen || vv.webkitRequestFullscreen;
          zv && zv.call(vv)
        }(this._renderingCanvas))
      }
      exitFullscreen() {
        this.isFullscreen && function() {
          const vv = document;
          document.exitFullscreen ? document.exitFullscreen() : vv.webkitCancelFullScreen && vv.webkitCancelFullScreen()
        }()
      }
      setDitheringState(vv) {
        vv ? this._gl.enable(this._gl.DITHER) : this._gl.disable(this._gl.DITHER)
      }
      setRasterizerState(vv) {
        vv ? this._gl.disable(this._gl.RASTERIZER_DISCARD) : this._gl.enable(this._gl.RASTERIZER_DISCARD)
      }
      setDirectViewport(vv, zv, Pv, hv) {
        const Sv = this._cachedViewport;
        return this._cachedViewport = null, this._viewport(vv, zv, Pv, hv), Sv
      }
      scissorClear(vv, zv, Pv, hv, Sv) {
        this.enableScissor(vv, zv, Pv, hv), this.clear(Sv, !0, !0, !0), this.disableScissor()
      }
      getVertexShaderSource(vv) {
        const zv = this._gl.getAttachedShaders(vv);
        return zv ? this._gl.getShaderSource(zv[0]) : null
      }
      getFragmentShaderSource(vv) {
        const zv = this._gl.getAttachedShaders(vv);
        return zv ? this._gl.getShaderSource(zv[1]) : null
      }
      set framebufferDimensionsObject(vv) {
        this._framebufferDimensionsObject = vv, this._framebufferDimensionsObject && this.onResizeObservable.notifyObservers(this)
      }
      _rebuildBuffers() {
        for (const vv of this.scenes) vv.resetCachedMaterial(), vv._rebuildGeometries();
        for (const vv of this._virtualScenes) vv.resetCachedMaterial(), vv._rebuildGeometries();
        super._rebuildBuffers()
      }
      getFontOffset(vv) {
        return av(vv)
      }
      enterPointerlock() {
        this._renderingCanvas && Cv(this._renderingCanvas)
      }
      exitPointerlock() {
        document.exitPointerLock && document.exitPointerLock()
      }
      Qm() {
        this._measureFps(), super.Qm()
      }
      _deletePipelineContext(vv) {
        const zv = vv;
        zv && zv.program && zv.transformFeedback && (this.deleteTransformFeedback(zv.transformFeedback), zv.transformFeedback = null), super._deletePipelineContext(vv)
      }
      createShaderProgram(vv, zv, Pv, hv, Sv) {
        let ev = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        Sv = Sv || this._gl, this.onBeforeShaderCompilationObservable.notifyObservers(this);
        const gv = super.createShaderProgram(vv, zv, Pv, hv, Sv, ev);
        return this.onAfterShaderCompilationObservable.notifyObservers(this), gv
      }
      _createShaderProgram(vv, zv, Pv, hv) {
        let Sv = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        const ev = hv.createProgram();
        if (vv.program = ev, !ev) throw new Error("Unable to create program");
        if (hv.attachShader(ev, zv), hv.attachShader(ev, Pv), this.ka > 1 && Sv) {
          const zv = this.createTransformFeedback();
          this.bindTransformFeedback(zv), this.setTranformFeedbackVaryings(ev, Sv), vv.transformFeedback = zv
        }
        return hv.linkProgram(ev), this.ka > 1 && Sv && this.bindTransformFeedback(null), vv.context = hv, vv.vertexShader = zv, vv.fragmentShader = Pv, vv.isParallelCompiled || this._finalizePipelineContext(vv), ev
      }
      _releaseTexture(vv) {
        super._releaseTexture(vv)
      }
      _releaseRenderTargetWrapper(vv) {
        super._releaseRenderTargetWrapper(vv);
        for (const zv of this.scenes) {
          for (const Pv of zv.postProcesses) Pv._outputTexture === vv && (Pv._outputTexture = null);
          for (const Pv of zv.cameras)
            for (const zv of Pv._postProcesses) zv && zv._outputTexture === vv && (zv._outputTexture = null)
        }
      }
      _rescaleTexture(vv, zv, Pv, hv, Sv) {
        this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MAG_FILTER, this._gl.LINEAR), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MIN_FILTER, this._gl.LINEAR), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_S, this._gl.CLAMP_TO_EDGE), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_T, this._gl.CLAMP_TO_EDGE);
        const ev = this.createRenderTargetTexture({
          width: zv.width,
          height: zv.height
        }, {
          generateMipMaps: !1,
          type: 0,
          samplingMode: 2,
          generateDepthBuffer: !1,
          generateStencilBuffer: !1
        });
        if (!this._rescalePostProcess && jv._RescalePostProcessFactory && (this._rescalePostProcess = jv._RescalePostProcessFactory(this)), this._rescalePostProcess) {
          this._rescalePostProcess.externalTextureSamplerBinding = !0;
          const gv = () => {
              this._rescalePostProcess.onApply = function(zv) {
                zv._bindTexture("textureSampler", vv)
              };
              let gv = Pv;
              gv || (gv = this.scenes[this.scenes.length - 1]), gv.postProcessManager.directRender([this._rescalePostProcess], ev, !0), this._bindTextureDirectly(this._gl.TEXTURE_2D, zv, !0), this._gl.copyTexImage2D(this._gl.TEXTURE_2D, 0, hv, 0, 0, zv.width, zv.height, 0), this.unBindFramebuffer(ev), ev.dispose(), Sv && Sv()
            },
            pv = this._rescalePostProcess.getEffect();
          pv ? pv.executeWhenCompiled(gv) : this._rescalePostProcess.onEffectCreatedObservable.addOnce((vv => {
            vv.executeWhenCompiled(gv)
          }))
        }
      }
      wrapWebGLTexture(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3,
          Sv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          ev = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        const gv = new Tv.d(vv, this._gl),
          pv = new hv.e(this, 15, !0);
        return pv._hardwareTexture = gv, pv.baseWidth = Sv, pv.baseHeight = ev, pv.width = Sv, pv.height = ev, pv.isReady = !0, pv.useMipMaps = zv, this.updateTextureSamplingMode(Pv, pv), pv
      }
      updateWrappedWebGLTexture(vv, zv) {
        if (15 !== vv.source) throw new Error("updateWrappedWebGLTexture: target InternalTexture was not produced by wrapWebGLTexture.");
        for (const hv of this._renderTargetWrapperCache)
          if (hv.textures?.includes(vv)) {
            if (hv.isMulti) throw new Error("updateWrappedWebGLTexture: wrapped texture is part of a multi render-target; not supported. Dispose and re-wrap.");
            if (hv._depthStencilTexture) throw new Error("updateWrappedWebGLTexture: wrapped texture's render-target wrapper has a depth/stencil texture; not supported. Dispose and re-wrap.")
          } vv._hardwareTexture = new Tv.d(zv, this._gl), vv.isReady = !0, vv._cachedCoordinatesMode = null, vv._cachedWrapU = null, vv._cachedWrapV = null, vv._cachedWrapR = null, vv._cachedAnisotropicFilteringLevel = null;
        for (const hv in this._boundTexturesCache) this._boundTexturesCache[hv] === vv && (this._boundTexturesCache[hv] = null);
        this.updateTextureSamplingMode(vv.samplingMode, vv);
        const Pv = this._gl;
        for (const hv of this._renderTargetWrapperCache) {
          if (hv.texture !== vv) continue;
          const Sv = hv,
            ev = hv.samples,
            gv = ev > 1;
          Sv._framebuffer && Pv.deleteFramebuffer(Sv._framebuffer), !gv && Sv._depthStencilBuffer && (Pv.deleteRenderbuffer(Sv._depthStencilBuffer), Sv._depthStencilBuffer = null);
          const pv = this._currentFramebuffer,
            dv = Pv.createFramebuffer();
          this._bindUnboundFramebuffer(dv), Pv.framebufferTexture2D(Pv.FRAMEBUFFER, Pv.COLOR_ATTACHMENT0, Pv.TEXTURE_2D, zv, 0), gv || (Sv._depthStencilBuffer = this._setupFramebufferDepthAttachments(hv._generateStencilBuffer, hv._generateDepthBuffer, hv.width, hv.height)), this._bindUnboundFramebuffer(pv), Sv._framebuffer = dv, gv && (hv._samples = 1, this.updateRenderTargetTextureSampleCount(Sv, ev))
        }
      }
      _uploadImageToTexture(vv, zv) {
        let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const Sv = this._gl,
          ev = this._getWebGLTextureType(vv.type),
          gv = this._getInternalFormat(vv.format),
          pv = this._getRGBABufferInternalSizedFormat(vv.type, gv),
          dv = vv.isCube ? Sv.TEXTURE_CUBE_MAP : Sv.TEXTURE_2D;
        this._bindTextureDirectly(dv, vv, !0), this._unpackFlipY(vv.invertY);
        let Nv = Sv.TEXTURE_2D;
        vv.isCube && (Nv = Sv.TEXTURE_CUBE_MAP_POSITIVE_X + Pv), Sv.texImage2D(Nv, hv, pv, gv, ev, zv), this._bindTextureDirectly(dv, null, !0)
      }
      updateTextureComparisonFunction(vv, zv) {
        if (1 === this.ka) return void lv.d.Error("WebGL 1 does not support texture comparison.");
        const Pv = this._gl;
        vv.isCube ? (this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, vv, !0), 0 === zv ? (Pv.texParameteri(Pv.TEXTURE_CUBE_MAP, Pv.TEXTURE_COMPARE_FUNC, 515), Pv.texParameteri(Pv.TEXTURE_CUBE_MAP, Pv.TEXTURE_COMPARE_MODE, Pv.NONE)) : (Pv.texParameteri(Pv.TEXTURE_CUBE_MAP, Pv.TEXTURE_COMPARE_FUNC, zv), Pv.texParameteri(Pv.TEXTURE_CUBE_MAP, Pv.TEXTURE_COMPARE_MODE, Pv.COMPARE_REF_TO_TEXTURE)), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null)) : (this._bindTextureDirectly(this._gl.TEXTURE_2D, vv, !0), 0 === zv ? (Pv.texParameteri(Pv.TEXTURE_2D, Pv.TEXTURE_COMPARE_FUNC, 515), Pv.texParameteri(Pv.TEXTURE_2D, Pv.TEXTURE_COMPARE_MODE, Pv.NONE)) : (Pv.texParameteri(Pv.TEXTURE_2D, Pv.TEXTURE_COMPARE_FUNC, zv), Pv.texParameteri(Pv.TEXTURE_2D, Pv.TEXTURE_COMPARE_MODE, Pv.COMPARE_REF_TO_TEXTURE)), this._bindTextureDirectly(this._gl.TEXTURE_2D, null)), vv._comparisonFunction = zv
      }
      createInstancesBuffer(vv) {
        const zv = this._gl.createBuffer();
        if (!zv) throw new Error("Unable to create instance buffer");
        const Pv = new Nv.b(zv);
        return Pv.GT = vv, this.bindArrayBuffer(Pv), this._gl.bufferData(this._gl.ARRAY_BUFFER, vv, this._gl.DYNAMIC_DRAW), Pv.references = 1, Pv
      }
      deleteInstancesBuffer(vv) {
        this._gl.deleteBuffer(vv)
      }
      async _clientWaitAsync(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10;
        const hv = this._gl;
        return await new Promise(((Sv, ev) => {
          (0, cv.g)((() => {
            const Pv = hv.clientWaitSync(vv, zv, 0);
            if (Pv == hv.WAIT_FAILED) throw new Error("clientWaitSync failed");
            return Pv != hv.TIMEOUT_EXPIRED
          }), Sv, ev, Pv)
        }))
      }
      _readPixelsAsync(vv, zv, Pv, hv, Sv, ev, gv) {
        if (this._webGLVersion < 2) throw new Error("_readPixelsAsync only work on WebGL2+");
        const pv = this._gl,
          dv = pv.createBuffer();
        pv.bindBuffer(pv.PIXEL_PACK_BUFFER, dv), pv.bufferData(pv.PIXEL_PACK_BUFFER, gv.byteLength, pv.STREAM_READ), pv.readPixels(vv, zv, Pv, hv, Sv, ev, 0), pv.bindBuffer(pv.PIXEL_PACK_BUFFER, null);
        const Nv = pv.fenceSync(pv.SYNC_GPU_COMMANDS_COMPLETE, 0);
        return Nv ? (pv.flush(), this._clientWaitAsync(Nv, 0, 10).then((() => (pv.deleteSync(Nv), pv.bindBuffer(pv.PIXEL_PACK_BUFFER, dv), pv.getBufferSubData(pv.PIXEL_PACK_BUFFER, 0, gv), pv.bindBuffer(pv.PIXEL_PACK_BUFFER, null), pv.deleteBuffer(dv), gv)))) : null
      }
      dispose() {
        this.hideLoadingUI?.(), this._rescalePostProcess && this._rescalePostProcess.dispose(),
          function(vv, zv) {
            1 === Sv.e.Instances.length && Wv.b.audioEngine && (Wv.b.audioEngine.dispose(), Wv.b.audioEngine = null);
            const Pv = vv.getHostWindow();
            Pv && "function" === typeof Pv.removeEventListener && (Pv.removeEventListener("blur", vv._onBlur), Pv.removeEventListener("focus", vv._onFocus)), zv && (zv.removeEventListener("focus", vv._onCanvasFocus), zv.removeEventListener("blur", vv._onCanvasBlur), zv.removeEventListener("pointerout", vv._onCanvasPointerOut), zv.removeEventListener("contextmenu", vv._onCanvasContextMenu)), (0, wv.g)() && (document.removeEventListener("fullscreenchange", vv._onFullscreenChange), document.removeEventListener("mozfullscreenchange", vv._onFullscreenChange), document.removeEventListener("webkitfullscreenchange", vv._onFullscreenChange), document.removeEventListener("msfullscreenchange", vv._onFullscreenChange), document.removeEventListener("pointerlockchange", vv._onPointerLockChange), document.removeEventListener("mspointerlockchange", vv._onPointerLockChange), document.removeEventListener("mozpointerlockchange", vv._onPointerLockChange), document.removeEventListener("webkitpointerlockchange", vv._onPointerLockChange))
          }(this, this._renderingCanvas), super.dispose()
      }
    }
    jv.ALPHA_DISABLE = 0, jv.ALPHA_ADD = 1, jv.ALPHA_COMBINE = 2, jv.ALPHA_SUBTRACT = 3, jv.ALPHA_MULTIPLY = 4, jv.ALPHA_MAXIMIZED = 5, jv.ALPHA_ONEONE = 6, jv.ALPHA_PREMULTIPLIED = 7, jv.ALPHA_PREMULTIPLIED_PORTERDUFF = 8, jv.ALPHA_INTERPOLATE = 9, jv.ALPHA_SCREENMODE = 10, jv.DELAYLOADSTATE_NONE = 0, jv.DELAYLOADSTATE_LOADED = 1, jv.DELAYLOADSTATE_LOADING = 2, jv.DELAYLOADSTATE_NOTLOADED = 4, jv.NEVER = 512, jv.ALWAYS = 519, jv.LESS = 513, jv.EQUAL = 514, jv.LEQUAL = 515, jv.GREATER = 516, jv.GEQUAL = 518, jv.NOTEQUAL = 517, jv.KEEP = 7680, jv.REPLACE = 7681, jv.INCR = 7682, jv.DECR = 7683, jv.INVERT = 5386, jv.INCR_WRAP = 34055, jv.DECR_WRAP = 34056, jv.TEXTURE_CLAMP_ADDRESSMODE = 0, jv.TEXTURE_WRAP_ADDRESSMODE = 1, jv.TEXTURE_MIRROR_ADDRESSMODE = 2, jv.TEXTUREFORMAT_ALPHA = 0, jv.TEXTUREFORMAT_LUMINANCE = 1, jv.TEXTUREFORMAT_LUMINANCE_ALPHA = 2, jv.TEXTUREFORMAT_RGB = 4, jv.TEXTUREFORMAT_RGBA = 5, jv.TEXTUREFORMAT_RED = 6, jv.TEXTUREFORMAT_R = 6, jv.TEXTUREFORMAT_R16_UNORM = 33322, jv.TEXTUREFORMAT_RG16_UNORM = 33324, jv.TEXTUREFORMAT_RGB16_UNORM = 32852, jv.TEXTUREFORMAT_RGBA16_UNORM = 32859, jv.TEXTUREFORMAT_R16_SNORM = 36760, jv.TEXTUREFORMAT_RG16_SNORM = 36761, jv.TEXTUREFORMAT_RGB16_SNORM = 36762, jv.TEXTUREFORMAT_RGBA16_SNORM = 36763, jv.TEXTUREFORMAT_RG = 7, jv.TEXTUREFORMAT_RED_INTEGER = 8, jv.TEXTUREFORMAT_R_INTEGER = 8, jv.TEXTUREFORMAT_RG_INTEGER = 9, jv.TEXTUREFORMAT_RGB_INTEGER = 10, jv.TEXTUREFORMAT_RGBA_INTEGER = 11, jv.TEXTURETYPE_UNSIGNED_BYTE = 0, jv.TEXTURETYPE_UNSIGNED_INT = 0, jv.TEXTURETYPE_FLOAT = 1, jv.TEXTURETYPE_HALF_FLOAT = 2, jv.TEXTURETYPE_BYTE = 3, jv.TEXTURETYPE_SHORT = 4, jv.TEXTURETYPE_UNSIGNED_SHORT = 5, jv.TEXTURETYPE_INT = 6, jv.TEXTURETYPE_UNSIGNED_INTEGER = 7, jv.TEXTURETYPE_UNSIGNED_SHORT_4_4_4_4 = 8, jv.TEXTURETYPE_UNSIGNED_SHORT_5_5_5_1 = 9, jv.TEXTURETYPE_UNSIGNED_SHORT_5_6_5 = 10, jv.TEXTURETYPE_UNSIGNED_INT_2_10_10_10_REV = 11, jv.TEXTURETYPE_UNSIGNED_INT_24_8 = 12, jv.TEXTURETYPE_UNSIGNED_INT_10F_11F_11F_REV = 13, jv.TEXTURETYPE_UNSIGNED_INT_5_9_9_9_REV = 14, jv.TEXTURETYPE_FLOAT_32_UNSIGNED_INT_24_8_REV = 15, jv.TEXTURE_NEAREST_SAMPLINGMODE = 1, jv.TEXTURE_BILINEAR_SAMPLINGMODE = 2, jv.TEXTURE_TRILINEAR_SAMPLINGMODE = 3, jv.TEXTURE_NEAREST_NEAREST_MIPLINEAR = 8, jv.TEXTURE_LINEAR_LINEAR_MIPNEAREST = 11, jv.TEXTURE_LINEAR_LINEAR_MIPLINEAR = 3, jv.TEXTURE_NEAREST_NEAREST_MIPNEAREST = 4, jv.TEXTURE_NEAREST_LINEAR_MIPNEAREST = 5, jv.TEXTURE_NEAREST_LINEAR_MIPLINEAR = 6, jv.TEXTURE_NEAREST_LINEAR = 7, jv.TEXTURE_NEAREST_NEAREST = 1, jv.TEXTURE_LINEAR_NEAREST_MIPNEAREST = 9, jv.TEXTURE_LINEAR_NEAREST_MIPLINEAR = 10, jv.TEXTURE_LINEAR_LINEAR = 2, jv.TEXTURE_LINEAR_NEAREST = 12, jv.TEXTURE_EXPLICIT_MODE = 0, jv.TEXTURE_SPHERICAL_MODE = 1, jv.TEXTURE_PLANAR_MODE = 2, jv.TEXTURE_CUBIC_MODE = 3, jv.TEXTURE_PROJECTION_MODE = 4, jv.TEXTURE_SKYBOX_MODE = 5, jv.TEXTURE_INVCUBIC_MODE = 6, jv.TEXTURE_EQUIRECTANGULAR_MODE = 7, jv.TEXTURE_FIXED_EQUIRECTANGULAR_MODE = 8, jv.TEXTURE_FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9, jv.SCALEMODE_FLOOR = 1, jv.SCALEMODE_NEAREST = 2, jv.SCALEMODE_CEILING = 3
  },
  39278: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => Sv
    });
    var hv = Pv(39255);
    class Sv {
      get depthStencilTexture() {
        return this._depthStencilTexture
      }
      setDepthStencilTexture(vv) {
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && this._depthStencilTexture && this._depthStencilTexture.dispose(), this._depthStencilTexture = vv, this._generateDepthBuffer = this._generateStencilBuffer = this._depthStencilTextureWithStencil = !1, vv && (this._generateDepthBuffer = !0, this._generateStencilBuffer = this._depthStencilTextureWithStencil = (0, hv.e)(vv.format))
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
      getBaseArrayLayer(vv) {
        if (!this._textures) return -1;
        const zv = this._textures[vv],
          Pv = this._layerIndices?.[vv] ?? 0,
          hv = this._faceIndices?.[vv] ?? 0;
        return zv.isCube ? 6 * Pv + hv : zv.is3D ? 0 : Pv
      }
      get samples() {
        return this._samples
      }
      setSamples(vv) {
        let zv = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          Pv = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.samples === vv && !Pv) return vv;
        const hv = this._isMulti ? this._engine.updateMultipleRenderTargetTextureSampleCount(this, vv, zv) : this._engine.updateRenderTargetTextureSampleCount(this, vv);
        return this._samples = vv, hv
      }
      resolveMSAATextures() {
        this.isMulti ? this._engine.resolveMultiFramebuffer(this) : this._engine.resolveFramebuffer(this)
      }
      generateMipMaps() {
        this._engine._currentRenderTarget === this && (this.isMulti ? this._engine.unBindMultiColorAttachmentFramebuffer(this, !0) : this._engine.unBindFramebuffer(this, !0)), this.isMulti ? this._engine.generateMipMapsMultiFramebuffer(this) : this._engine.generateMipMapsFramebuffer(this)
      }
      constructor(vv, zv, Pv, hv, Sv) {
        this._textures = null, this._faceIndices = null, this._layerIndices = null, this._samples = 1, this._attachments = null, this._generateStencilBuffer = !1, this._generateDepthBuffer = !1, this._depthStencilTextureWithStencil = !1, this.disableAutomaticMSAAResolve = !1, this.resolveMSAAColors = !0, this.resolveMSAADepth = !1, this.resolveMSAAStencil = !1, this.depthReadOnly = !1, this.stencilReadOnly = !1, this._isMulti = vv, this._isCube = zv, this._size = Pv, this._engine = hv, this._depthStencilTexture = null, this.label = Sv
      }
      setTextures(vv) {
        Array.isArray(vv) ? this._textures = vv : this._textures = vv ? [vv] : null
      }
      setTexture(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Pv = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._textures || (this._textures = []), this._textures[zv] !== vv && (this._textures[zv] && Pv && this._textures[zv].dispose(), this._textures[zv] = vv)
      }
      setLayerAndFaceIndices(vv, zv) {
        this._layerIndices = vv, this._faceIndices = zv
      }
      setLayerAndFaceIndex() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          zv = arguments.length > 1 ? arguments[1] : void 0,
          Pv = arguments.length > 2 ? arguments[2] : void 0;
        this._layerIndices || (this._layerIndices = []), this._faceIndices || (this._faceIndices = []), void 0 !== zv && zv >= 0 && (this._layerIndices[vv] = zv), void 0 !== Pv && Pv >= 0 && (this._faceIndices[vv] = Pv)
      }
      createDepthStencilTexture() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          zv = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          Pv = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          Sv = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          ev = arguments.length > 5 ? arguments[5] : void 0;
        return this._depthStencilTexture?.dispose(), this._depthStencilTextureWithStencil = Pv, this._depthStencilTextureLabel = ev, this._depthStencilTexture = this._engine.createDepthStencilTexture(this._size, {
          bilinearFiltering: zv,
          comparisonFunction: vv,
          generateStencil: Pv,
          isCube: this._isCube,
          samples: hv,
          depthTextureFormat: Sv,
          label: ev
        }, this), this._depthStencilTexture
      }
      _shareDepth(vv) {
        this.shareDepth(vv)
      }
      shareDepth(vv) {
        this._depthStencilTexture && (vv._depthStencilTexture && vv._depthStencilTexture.dispose(), vv._depthStencilTexture = this._depthStencilTexture, vv._depthStencilTextureWithStencil = this._depthStencilTextureWithStencil, this._depthStencilTexture.incrementReferences())
      }
      _swapAndDie(vv) {
        this.texture && this.texture._swapAndDie(vv), this._textures = null, this.dispose(!0)
      }
      _cloneRenderTargetWrapper() {
        let vv = null;
        if (this._isMulti) {
          const zv = this.textures;
          if (zv && zv.length > 0) {
            let Pv = !1,
              hv = zv.length,
              Sv = -1;
            const ev = zv[zv.length - 1]._source;
            14 !== ev && 12 !== ev || (Pv = !0, Sv = zv[zv.length - 1].format, hv--);
            const gv = [],
              pv = [],
              dv = [],
              Nv = [],
              lv = [],
              Tv = [],
              Wv = [],
              wv = {};
            for (let vv = 0; vv < hv; ++vv) {
              const Pv = zv[vv];
              gv.push(Pv.samplingMode), pv.push(Pv.type), dv.push(Pv.format);
              void 0 !== wv[Pv.uniqueId] ? (Nv.push(-1), Wv.push(0)) : (wv[Pv.uniqueId] = vv, Pv.is2DArray ? (Nv.push(35866), Wv.push(Pv.depth)) : Pv.isCube ? (Nv.push(34067), Wv.push(0)) : Pv.is3D ? (Nv.push(32879), Wv.push(Pv.depth)) : (Nv.push(3553), Wv.push(0))), this._faceIndices && lv.push(this._faceIndices[vv] ?? 0), this._layerIndices && Tv.push(this._layerIndices[vv] ?? 0)
            }
            const av = {
                samplingModes: gv,
                generateMipMaps: zv[0].generateMipMaps,
                generateDepthBuffer: this._generateDepthBuffer,
                generateStencilBuffer: this._generateStencilBuffer,
                generateDepthTexture: Pv,
                depthTextureFormat: Sv,
                types: pv,
                formats: dv,
                Aev: hv,
                targetTypes: Nv,
                faceIndex: lv,
                layerIndex: Tv,
                layerCounts: Wv,
                label: this.label
              },
              sv = {
                width: this.width,
                height: this.height,
                depth: this.depth
              };
            vv = this._engine.createMultipleRenderTarget(sv, av);
            for (let Cv = 0; Cv < hv; ++Cv) {
              if (-1 !== Nv[Cv]) continue;
              const Pv = wv[zv[Cv].uniqueId];
              vv.setTexture(vv.textures[Pv], Cv)
            }
          }
        } else {
          const zv = {};
          if (zv.generateDepthBuffer = this._generateDepthBuffer, zv.generateMipMaps = this.texture?.generateMipMaps ?? !1, zv.generateStencilBuffer = this._generateStencilBuffer, zv.samplingMode = this.texture?.samplingMode, zv.type = this.texture?.type, zv.format = this.texture?.format, zv.noColorAttachment = !this._textures, zv.label = this.label, this.isCube) vv = this._engine.createRenderTargetCubeTexture(this.width, zv);
          else {
            const Pv = {
              width: this.width,
              height: this.height,
              layers: this.is2DArray || this.is3D ? this.texture?.depth : void 0
            };
            vv = this._engine.createRenderTargetTexture(Pv, zv)
          }
          vv.texture && (vv.texture.isReady = !0)
        }
        return vv
      }
      _swapRenderTargetWrapper(vv) {
        if (this._textures && vv._textures)
          for (let zv = 0; zv < this._textures.length; ++zv) this._textures[zv]._swapAndDie(vv._textures[zv], !1), vv._textures[zv].isReady = !0;
        this._depthStencilTexture && vv._depthStencilTexture && (this._depthStencilTexture._swapAndDie(vv._depthStencilTexture), vv._depthStencilTexture.isReady = !0), this._textures = null, this._depthStencilTexture = null
      }
      _rebuild() {
        const vv = this._cloneRenderTargetWrapper();
        if (vv) {
          if (this._depthStencilTexture) {
            const zv = this._depthStencilTexture.samplingMode,
              Pv = this._depthStencilTexture.format,
              hv = 2 === zv || 3 === zv || 11 === zv;
            vv.createDepthStencilTexture(this._depthStencilTexture._comparisonFunction, hv, this._depthStencilTextureWithStencil, this._depthStencilTexture.samples, Pv, this._depthStencilTextureLabel)
          }
          this.samples > 1 && vv.setSamples(this.samples), vv._swapRenderTargetWrapper(this), vv.dispose()
        }
      }
      releaseTextures() {
        if (this._textures)
          for (let vv = 0; vv < this._textures.length; ++vv) this._textures[vv].dispose();
        this._textures = null
      }
      dispose() {
        arguments.length > 0 && void 0 !== arguments[0] && arguments[0] || (this._depthStencilTexture?.dispose(), this._depthStencilTexture = null, this.releaseTextures()), this._engine._releaseRenderTargetWrapper(this)
      }
    }
  },
  39736: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => hv
    });
    class hv {
      static get ForceFullSceneLoadingForIncremental() {
        return hv._ForceFullSceneLoadingForIncremental
      }
      static set ForceFullSceneLoadingForIncremental(vv) {
        hv._ForceFullSceneLoadingForIncremental = vv
      }
      static get ShowLoadingScreen() {
        return hv._ShowLoadingScreen
      }
      static set ShowLoadingScreen(vv) {
        hv._ShowLoadingScreen = vv
      }
      static get loggingLevel() {
        return hv._LoggingLevel
      }
      static set loggingLevel(vv) {
        hv._LoggingLevel = vv
      }
      static get CleanBoneMatrixWeights() {
        return hv._CleanBoneMatrixWeights
      }
      static set CleanBoneMatrixWeights(vv) {
        hv._CleanBoneMatrixWeights = vv
      }
    }
    hv._ForceFullSceneLoadingForIncremental = !1, hv._ShowLoadingScreen = !0, hv._CleanBoneMatrixWeights = !1, hv._LoggingLevel = 0
  },
  39379: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => gv
    });
    var hv = Pv(38209);
    const Sv = new Map;

    function ev(vv, zv) {
      (function(vv) {
        return Sv.delete(vv)
      })(vv) && hv.d.Warn(`Extension with the name '${vv}' already exists`), Sv.set(vv, zv)
    }

    function gv(vv, zv) {
      "image/ktx" !== zv && "image/ktx2" !== zv || (vv = ".ktx"), Sv.has(vv) || (vv.endsWith(".ies") && ev(".ies", (async () => await Pv.e(300).then((() => Pv(41069))).then((vv => new vv._IESTextureLoader)))), vv.endsWith(".dds") && ev(".dds", (async () => await Pv.e(298).then((() => Pv(41077))).then((vv => new vv._DDSTextureLoader)))), vv.endsWith(".basis") && ev(".basis", (async () => await Pv.e(301).then((() => Pv(41085))).then((vv => new vv._BasisTextureLoader)))), vv.endsWith(".env") && ev(".env", (async () => await Promise.all([Pv.e(302), Pv.e(299)]).then((() => Pv(41090))).then((vv => new vv._ENVTextureLoader)))), vv.endsWith(".hdr") && ev(".hdr", (async () => await Pv.e(303).then((() => Pv(41157))).then((vv => new vv._HDRTextureLoader)))), (vv.endsWith(".ktx") || vv.endsWith(".ktx2")) && (ev(".ktx", (async () => await Pv.e(304).then((() => Pv(41166))).then((vv => new vv._KTXTextureLoader)))), ev(".ktx2", (async () => await Pv.e(304).then((() => Pv(41166))).then((vv => new vv._KTXTextureLoader))))), vv.endsWith(".tga") && ev(".tga", (async () => await Pv.e(305).then((() => Pv(41176))).then((vv => new vv._TGATextureLoader)))), vv.endsWith(".exr") && ev(".exr", (async () => await Pv.e(306).then((() => Pv(41184))).then((vv => new vv._ExrTextureLoader)))));
      const hv = Sv.get(vv);
      return hv ? Promise.resolve(hv(zv)) : null
    }
  },
  39767: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => gv,
      e: () => Nv
    });
    var hv = Pv(39593),
      Sv = Pv(39318),
      ev = Pv(36631);
    class gv extends hv.b {
      get T_() {
        return this._subMaterials
      }
      set T_(vv) {
        this._subMaterials = vv, this._hookArray(vv)
      }
      getChildren() {
        return this.T_
      }
      constructor(vv, zv) {
        super(vv, zv, !0), this._waitingSubMaterialsUniqueIds = [], this.rD().addMultiMaterial(this), this.T_ = [], this._storeEffectOnSubMeshes = !0
      }
      _hookArray(vv) {
        var zv = this;
        const Pv = vv.push;
        vv.push = function() {
          for (var hv = arguments.length, Sv = new Array(hv), ev = 0; ev < hv; ev++) Sv[ev] = arguments[ev];
          const gv = Pv.apply(vv, Sv);
          return zv._markAllSubMeshesAsTexturesDirty(), gv
        };
        const hv = vv.splice;
        vv.splice = (zv, Pv) => {
          const Sv = hv.call(vv, zv, Pv ?? vv.length);
          return this._markAllSubMeshesAsTexturesDirty(), Sv
        }
      }
      getSubMaterial(vv) {
        return vv < 0 || vv >= this.T_.length ? this.rD().defaultMaterial : this.T_[vv]
      }
      getActiveTextures() {
        return super.getActiveTextures().concat(...this.T_.map((vv => vv ? vv.getActiveTextures() : [])))
      }
      hasTexture(vv) {
        if (super.hasTexture(vv)) return !0;
        for (let zv = 0; zv < this.T_.length; zv++)
          if (this.T_[zv]?.hasTexture(vv)) return !0;
        return !1
      }
      getClassName() {
        return "MultiMaterial"
      }
      isReadyForSubMesh(vv, zv, Pv) {
        for (let hv = 0; hv < this.T_.length; hv++) {
          const Sv = this.T_[hv];
          if (Sv) {
            if (Sv._storeEffectOnSubMeshes) {
              if (!Sv.isReadyForSubMesh(vv, zv, Pv)) return !1;
              continue
            }
            if (!Sv.isReady(vv)) return !1
          }
        }
        return !0
      }
      clone(vv, zv) {
        const Pv = new gv(vv, this.rD());
        for (let hv = 0; hv < this.T_.length; hv++) {
          let Sv;
          const ev = this.T_[hv];
          Sv = zv && ev ? ev.clone(vv + "-" + ev.name) : this.T_[hv], Pv.T_.push(Sv)
        }
        return Pv
      }
      serialize() {
        const vv = {};
        vv.name = this.name, vv.id = this.id, vv.uniqueId = this.uniqueId, Sv.c && (vv.tags = Sv.c.GetTags(this)), vv.materialsUniqueIds = [], vv.materials = [];
        for (let zv = 0; zv < this.T_.length; zv++) {
          const Pv = this.T_[zv];
          Pv ? (vv.materialsUniqueIds.push(Pv.uniqueId), vv.materials.push(Pv.id)) : (vv.materialsUniqueIds.push(null), vv.materials.push(null))
        }
        return vv
      }
      dispose(vv, zv, Pv) {
        const hv = this.rD();
        if (!hv) return;
        if (Pv)
          for (let ev = 0; ev < this.T_.length; ev++) {
            const Pv = this.T_[ev];
            Pv && Pv.dispose(vv, zv)
          }
        const Sv = hv.multiMaterials.indexOf(this);
        Sv >= 0 && hv.multiMaterials.splice(Sv, 1), super.dispose(vv, zv)
      }
    }
    let pv = !1;

    function dv(vv, zv) {
      const Pv = new gv(vv.name, zv);
      if (Pv.id = vv.id, Pv._loadedUniqueId = vv.uniqueId, Sv.c && Sv.c.AddTagsTo(Pv, vv.tags), vv.materialsUniqueIds) Pv._waitingSubMaterialsUniqueIds = vv.materialsUniqueIds;
      else
        for (const hv of vv.materials) Pv.T_.push(zv.getLastMaterialById(hv));
      return Pv
    }

    function Nv() {
      pv || (pv = !0, gv.ParseMultiMaterial = dv, (0, ev.c)("BABYLON.MultiMaterial", gv))
    }
  },
  39521: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => gv
    });
    var hv, Sv, ev = Pv(36594);
    ! function(vv) {
      vv[vv.LOCAL = 0] = "LOCAL", vv[vv.WORLD = 1] = "WORLD", vv[vv.BONE = 2] = "BONE"
    }(hv || (hv = {}));
    class gv {}
    gv.X = new ev.l(1, 0, 0), gv.Y = new ev.l(0, 1, 0), gv.Z = new ev.l(0, 0, 1),
      function(vv) {
        vv[vv.X = 0] = "X", vv[vv.Y = 1] = "Y", vv[vv.Z = 2] = "Z"
      }(Sv || (Sv = {}))
  },
  39284: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => dv,
      f: () => Nv
    });
    var hv = Pv(36594);
    const Sv = [Math.sqrt(1 / (4 * Math.PI)), -Math.sqrt(3 / (4 * Math.PI)), Math.sqrt(3 / (4 * Math.PI)), -Math.sqrt(3 / (4 * Math.PI)), Math.sqrt(15 / (4 * Math.PI)), -Math.sqrt(15 / (4 * Math.PI)), Math.sqrt(5 / (16 * Math.PI)), -Math.sqrt(15 / (4 * Math.PI)), Math.sqrt(15 / (16 * Math.PI))],
      ev = [() => 1, vv => vv.y, vv => vv.z, vv => vv.x, vv => vv.x * vv.y, vv => vv.y * vv.z, vv => 3 * vv.z * vv.z - 1, vv => vv.x * vv.z, vv => vv.x * vv.x - vv.y * vv.y],
      gv = (vv, zv) => Sv[vv] * ev[vv](zv),
      pv = [Math.PI, 2 * Math.PI / 3, 2 * Math.PI / 3, 2 * Math.PI / 3, Math.PI / 4, Math.PI / 4, Math.PI / 4, Math.PI / 4, Math.PI / 4];
    class dv {
      constructor() {
        this.preScaled = !1, this.l00 = hv.l.Zero(), this.l1_1 = hv.l.Zero(), this.l10 = hv.l.Zero(), this.l11 = hv.l.Zero(), this.l2_2 = hv.l.Zero(), this.l2_1 = hv.l.Zero(), this.l20 = hv.l.Zero(), this.l21 = hv.l.Zero(), this.l22 = hv.l.Zero()
      }
      addLight(vv, zv, Pv) {
        hv.i.fa[0].set(zv.r, zv.g, zv.b);
        const Sv = hv.i.fa[0],
          ev = hv.i.fa[1];
        Sv.scaleToRef(Pv, ev), ev.scaleToRef(gv(0, vv), hv.i.fa[2]), this.l00.addInPlace(hv.i.fa[2]), ev.scaleToRef(gv(1, vv), hv.i.fa[2]), this.l1_1.addInPlace(hv.i.fa[2]), ev.scaleToRef(gv(2, vv), hv.i.fa[2]), this.l10.addInPlace(hv.i.fa[2]), ev.scaleToRef(gv(3, vv), hv.i.fa[2]), this.l11.addInPlace(hv.i.fa[2]), ev.scaleToRef(gv(4, vv), hv.i.fa[2]), this.l2_2.addInPlace(hv.i.fa[2]), ev.scaleToRef(gv(5, vv), hv.i.fa[2]), this.l2_1.addInPlace(hv.i.fa[2]), ev.scaleToRef(gv(6, vv), hv.i.fa[2]), this.l20.addInPlace(hv.i.fa[2]), ev.scaleToRef(gv(7, vv), hv.i.fa[2]), this.l21.addInPlace(hv.i.fa[2]), ev.scaleToRef(gv(8, vv), hv.i.fa[2]), this.l22.addInPlace(hv.i.fa[2])
      }
      scaleInPlace(vv) {
        this.l00.scaleInPlace(vv), this.l1_1.scaleInPlace(vv), this.l10.scaleInPlace(vv), this.l11.scaleInPlace(vv), this.l2_2.scaleInPlace(vv), this.l2_1.scaleInPlace(vv), this.l20.scaleInPlace(vv), this.l21.scaleInPlace(vv), this.l22.scaleInPlace(vv)
      }
      convertIncidentRadianceToIrradiance() {
        this.l00.scaleInPlace(pv[0]), this.l1_1.scaleInPlace(pv[1]), this.l10.scaleInPlace(pv[2]), this.l11.scaleInPlace(pv[3]), this.l2_2.scaleInPlace(pv[4]), this.l2_1.scaleInPlace(pv[5]), this.l20.scaleInPlace(pv[6]), this.l21.scaleInPlace(pv[7]), this.l22.scaleInPlace(pv[8])
      }
      convertIrradianceToLambertianRadiance() {
        this.scaleInPlace(1 / Math.PI)
      }
      preScaleForRendering() {
        this.preScaled = !0, this.l00.scaleInPlace(Sv[0]), this.l1_1.scaleInPlace(Sv[1]), this.l10.scaleInPlace(Sv[2]), this.l11.scaleInPlace(Sv[3]), this.l2_2.scaleInPlace(Sv[4]), this.l2_1.scaleInPlace(Sv[5]), this.l20.scaleInPlace(Sv[6]), this.l21.scaleInPlace(Sv[7]), this.l22.scaleInPlace(Sv[8])
      }
      updateFromArray(vv) {
        return hv.l.FromArrayToRef(vv[0], 0, this.l00), hv.l.FromArrayToRef(vv[1], 0, this.l1_1), hv.l.FromArrayToRef(vv[2], 0, this.l10), hv.l.FromArrayToRef(vv[3], 0, this.l11), hv.l.FromArrayToRef(vv[4], 0, this.l2_2), hv.l.FromArrayToRef(vv[5], 0, this.l2_1), hv.l.FromArrayToRef(vv[6], 0, this.l20), hv.l.FromArrayToRef(vv[7], 0, this.l21), hv.l.FromArrayToRef(vv[8], 0, this.l22), this
      }
      updateFromFloatsArray(vv) {
        return hv.l.FromFloatsToRef(vv[0], vv[1], vv[2], this.l00), hv.l.FromFloatsToRef(vv[3], vv[4], vv[5], this.l1_1), hv.l.FromFloatsToRef(vv[6], vv[7], vv[8], this.l10), hv.l.FromFloatsToRef(vv[9], vv[10], vv[11], this.l11), hv.l.FromFloatsToRef(vv[12], vv[13], vv[14], this.l2_2), hv.l.FromFloatsToRef(vv[15], vv[16], vv[17], this.l2_1), hv.l.FromFloatsToRef(vv[18], vv[19], vv[20], this.l20), hv.l.FromFloatsToRef(vv[21], vv[22], vv[23], this.l21), hv.l.FromFloatsToRef(vv[24], vv[25], vv[26], this.l22), this
      }
      static FromArray(vv) {
        return (new dv).updateFromArray(vv)
      }
      static FromPolynomial(vv) {
        const zv = new dv;
        return zv.l00 = vv.xx.scale(.376127).add(vv.yy.scale(.376127)).add(vv.zz.scale(.376126)), zv.l1_1 = vv.y.scale(.977204), zv.l10 = vv.z.scale(.977204), zv.l11 = vv.x.scale(.977204), zv.l2_2 = vv.xy.scale(1.16538), zv.l2_1 = vv.yz.scale(1.16538), zv.l20 = vv.zz.scale(1.34567).subtract(vv.xx.scale(.672834)).subtract(vv.yy.scale(.672834)), zv.l21 = vv.zx.scale(1.16538), zv.l22 = vv.xx.scale(1.16538).subtract(vv.yy.scale(1.16538)), zv.l1_1.scaleInPlace(-1), zv.l11.scaleInPlace(-1), zv.l2_1.scaleInPlace(-1), zv.l21.scaleInPlace(-1), zv.scaleInPlace(Math.PI), zv
      }
    }
    class Nv {
      constructor() {
        this.x = hv.l.Zero(), this.y = hv.l.Zero(), this.z = hv.l.Zero(), this.xx = hv.l.Zero(), this.yy = hv.l.Zero(), this.zz = hv.l.Zero(), this.xy = hv.l.Zero(), this.yz = hv.l.Zero(), this.zx = hv.l.Zero()
      }
      get preScaledHarmonics() {
        return this._harmonics || (this._harmonics = dv.FromPolynomial(this)), this._harmonics.preScaled || this._harmonics.preScaleForRendering(), this._harmonics
      }
      addAmbient(vv) {
        hv.i.fa[0].f_(vv.r, vv.g, vv.b);
        const zv = hv.i.fa[0];
        this.xx.addInPlace(zv), this.yy.addInPlace(zv), this.zz.addInPlace(zv)
      }
      scaleInPlace(vv) {
        this.x.scaleInPlace(vv), this.y.scaleInPlace(vv), this.z.scaleInPlace(vv), this.xx.scaleInPlace(vv), this.yy.scaleInPlace(vv), this.zz.scaleInPlace(vv), this.yz.scaleInPlace(vv), this.zx.scaleInPlace(vv), this.xy.scaleInPlace(vv)
      }
      updateFromHarmonics(vv) {
        return this._harmonics = vv, this.x.Vzv(vv.l11), this.x.scaleInPlace(1.02333).scaleInPlace(-1), this.y.Vzv(vv.l1_1), this.y.scaleInPlace(1.02333).scaleInPlace(-1), this.z.Vzv(vv.l10), this.z.scaleInPlace(1.02333), this.xx.Vzv(vv.l00), hv.i.fa[0].Vzv(vv.l20).scaleInPlace(.247708), hv.i.fa[1].Vzv(vv.l22).scaleInPlace(.429043), this.xx.scaleInPlace(.886277).VPv(hv.i.fa[0]).addInPlace(hv.i.fa[1]), this.yy.Vzv(vv.l00), this.yy.scaleInPlace(.886277).VPv(hv.i.fa[0]).VPv(hv.i.fa[1]), this.zz.Vzv(vv.l00), hv.i.fa[0].Vzv(vv.l20).scaleInPlace(.495417), this.zz.scaleInPlace(.886277).addInPlace(hv.i.fa[0]), this.yz.Vzv(vv.l2_1), this.yz.scaleInPlace(.858086).scaleInPlace(-1), this.zx.Vzv(vv.l21), this.zx.scaleInPlace(.858086).scaleInPlace(-1), this.xy.Vzv(vv.l2_2), this.xy.scaleInPlace(.858086), this.scaleInPlace(1 / Math.PI), this
      }
      static FromHarmonics(vv) {
        return (new Nv).updateFromHarmonics(vv)
      }
      static FromArray(vv) {
        const zv = new Nv;
        return hv.l.FromArrayToRef(vv[0], 0, zv.x), hv.l.FromArrayToRef(vv[1], 0, zv.y), hv.l.FromArrayToRef(vv[2], 0, zv.z), hv.l.FromArrayToRef(vv[3], 0, zv.xx), hv.l.FromArrayToRef(vv[4], 0, zv.yy), hv.l.FromArrayToRef(vv[5], 0, zv.zz), hv.l.FromArrayToRef(vv[6], 0, zv.yz), hv.l.FromArrayToRef(vv[7], 0, zv.zx), hv.l.FromArrayToRef(vv[8], 0, zv.xy), zv
      }
    }
  },
  39754: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => Rv,
      e: () => tv
    });
    var hv = Pv(39295),
      Sv = Pv(36618),
      ev = Pv(36594),
      gv = Pv(39441),
      pv = Pv(39720),
      dv = Pv(39760),
      Nv = Pv(39438),
      lv = Pv(39609),
      Tv = Pv(39435);
    class Wv {
      constructor() {
        this._checkCollisions = !1, this._collisionMask = -1, this._collisionGroup = -1, this._surroundingMeshes = null, this._collider = null, this._oldPositionForCollisions = new ev.l(0, 0, 0), this._diffPositionForCollisions = new ev.l(0, 0, 0), this._collisionResponse = !0
      }
    }
    var wv, av, sv, Cv = Pv(39190),
      iv = Pv(39368),
      cv = Pv(39616),
      Gv = Pv(36751),
      mv = Pv(36599),
      jv = Pv(39521),
      fv = Pv(38209),
      Fv = Pv(39300),
      Yv = Pv(39212),
      nv = Pv(36631);

    function Ov(vv, zv) {
      return vv - Math.floor(vv / zv) * zv
    }

    function Dv(vv, zv, Pv) {
      vv instanceof Float32Array ? ev.c.FromArrayToRef(vv, zv, Pv) : Pv.f_((0, iv.b)(vv[zv]), (0, iv.b)(vv[zv + 1]), (0, iv.b)(vv[zv + 2]), (0, iv.b)(vv[zv + 3]), (0, iv.b)(vv[zv + 4]), (0, iv.b)(vv[zv + 5]), (0, iv.b)(vv[zv + 6]), (0, iv.b)(vv[zv + 7]), (0, iv.b)(vv[zv + 8]), (0, iv.b)(vv[zv + 9]), (0, iv.b)(vv[zv + 10]), (0, iv.b)(vv[zv + 11]), (0, iv.b)(vv[zv + 12]), (0, iv.b)(vv[zv + 13]), (0, iv.b)(vv[zv + 14]), (0, iv.b)(vv[zv + 15]))
    }

    function Kv(vv, zv, Pv, hv, Sv, pv, dv, Nv, lv) {
      const Tv = Pv.texture,
        Wv = Tv?.getInternalTexture(),
        wv = Wv?._bufferView;
      if (!(wv instanceof Float32Array) && !(wv instanceof Uint16Array)) return fv.d.Warn("Baked vertex animation bounding info requires CPU-readable Float32Array or Uint16Array texture data.", 1), !1;
      const av = Tv.getSize(),
        sv = function(vv, zv) {
          const Pv = vv.y - vv.x + 1,
            hv = zv * vv.w / Pv,
            Sv = hv < 1 ? 0 : 1,
            ev = Pv - Sv;
          let gv = Ov(hv - Math.floor(hv), 1) * ev;
          return gv = Ov(gv + vv.z, ev), Math.floor(gv) + vv.x + Sv
        }(hv, Pv.time);
      if (!isFinite(sv) || sv < 0 || sv >= av.height) return fv.d.Warn("Baked vertex animation bounding info could not be refreshed because the computed frame is outside the texture.", 1), !1;
      const Cv = ev.i.fa[0],
        iv = ev.i.Matrix[0],
        cv = ev.i.Matrix[1],
        Gv = sv * av.width * 4,
        mv = zv === gv.k.NormalKind ? ev.l.TransformNormalFromFloatsToRef : ev.l.TransformCoordinatesFromFloatsToRef;
      for (let ev = 0, gv = 0; ev < vv.length; ev += 3, gv += 4) {
        let zv, Pv;
        for (iv.reset(), zv = 0; zv < 4 && zv < lv; zv++) Pv = pv[gv + zv], Pv > 0 && (Dv(wv, Gv + 16 * Math.floor(Sv[gv + zv]), cv), cv.scaleAndAddToRef(Pv, iv));
        if (dv && Nv)
          for (zv = 0; zv < 4 && zv + 4 < lv; zv++) Pv = Nv[gv + zv], Pv > 0 && (Dv(wv, Gv + 16 * Math.floor(dv[gv + zv]), cv), cv.scaleAndAddToRef(Pv, iv));
        mv(vv[ev], vv[ev + 1], vv[ev + 2], iv, Cv), Cv.toArray(vv, ev)
      }
      return !0
    }
    class Vv {
      constructor() {
        this.facetNb = 0, this.partitioningSubdivisions = 10, this.partitioningBBoxRatio = 1.01, this.facetDataEnabled = !1, this.facetParameters = {}, this.bbSize = ev.l.Zero(), this.subDiv = {
          max: 1,
          X: 1,
          Y: 1,
          Z: 1
        }, this.facetDepthSort = !1, this.facetDepthSortEnabled = !1
      }
    }
    class Uv {
      constructor() {
        this._hasVertexAlpha = !1, this._useVertexColors = !0, this._numBoneInfluencers = 4, this._applyFog = !0, this._receiveShadows = !1, this._facetData = new Vv, this._visibility = 1, this._skeleton = null, this._layerMask = 268435455, this._computeBonesUsingShaders = !0, this._isActive = !1, this._onlyForInstances = !1, this._isActiveIntermediate = !1, this._onlyForInstancesIntermediate = !1, this._actAsRegularMesh = !1, this._currentLOD = new Map, this._collisionRetryCount = 3, this._morphTargetManager = null, this._renderingGroupId = 0, this._meshBlendingTag = 0, this._bakedVertexAnimationManager = null, this._material = null, this._positions = null, this._pointerOverDisableMeshTesting = !1, this._meshCollisionData = new Wv, this._enableDistantPicking = !1, this._rawBoundingInfo = null, this._sideOrientationHint = !1, this._wasActiveLastFrame = !1
      }
    }
    let Rv = (() => {
        var vv;
        let zv, Wv = dv.h,
          wv = [];
        return vv = class extends Wv {
          static get BILLBOARDMODE_NONE() {
            return dv.h.BILLBOARDMODE_NONE
          }
          static get BILLBOARDMODE_X() {
            return dv.h.BILLBOARDMODE_X
          }
          static get BILLBOARDMODE_Y() {
            return dv.h.BILLBOARDMODE_Y
          }
          static get BILLBOARDMODE_Z() {
            return dv.h.BILLBOARDMODE_Z
          }
          static get BILLBOARDMODE_ALL() {
            return dv.h.BILLBOARDMODE_ALL
          }
          static get BILLBOARDMODE_USE_POSITION() {
            return dv.h.BILLBOARDMODE_USE_POSITION
          }
          get facetNb() {
            return this._internalAbstractMeshDataInfo._facetData.facetNb
          }
          get partitioningSubdivisions() {
            return this._internalAbstractMeshDataInfo._facetData.partitioningSubdivisions
          }
          set partitioningSubdivisions(vv) {
            this._internalAbstractMeshDataInfo._facetData.partitioningSubdivisions = vv
          }
          get partitioningBBoxRatio() {
            return this._internalAbstractMeshDataInfo._facetData.partitioningBBoxRatio
          }
          set partitioningBBoxRatio(vv) {
            this._internalAbstractMeshDataInfo._facetData.partitioningBBoxRatio = vv
          }
          get mustDepthSortFacets() {
            return this._internalAbstractMeshDataInfo._facetData.facetDepthSort
          }
          set mustDepthSortFacets(vv) {
            this._internalAbstractMeshDataInfo._facetData.facetDepthSort = vv
          }
          get facetDepthSortFrom() {
            return this._internalAbstractMeshDataInfo._facetData.facetDepthSortFrom
          }
          set facetDepthSortFrom(vv) {
            this._internalAbstractMeshDataInfo._facetData.facetDepthSortFrom = vv
          }
          get collisionRetryCount() {
            return this._internalAbstractMeshDataInfo._collisionRetryCount
          }
          set collisionRetryCount(vv) {
            this._internalAbstractMeshDataInfo._collisionRetryCount = vv
          }
          get isFacetDataEnabled() {
            return this._internalAbstractMeshDataInfo._facetData.facetDataEnabled
          }
          get morphTargetManager() {
            return this._internalAbstractMeshDataInfo._morphTargetManager
          }
          set morphTargetManager(vv) {
            this._internalAbstractMeshDataInfo._morphTargetManager !== vv && (this._internalAbstractMeshDataInfo._morphTargetManager = vv, this._syncGeometryWithMorphTargetManager())
          }
          get bakedVertexAnimationManager() {
            return this._internalAbstractMeshDataInfo._bakedVertexAnimationManager
          }
          set bakedVertexAnimationManager(vv) {
            this._internalAbstractMeshDataInfo._bakedVertexAnimationManager !== vv && (this._internalAbstractMeshDataInfo._bakedVertexAnimationManager = vv, this._markSubMeshesAsAttributesDirty())
          }
          _syncGeometryWithMorphTargetManager() {}
          _updateNonUniformScalingState(vv) {
            return !!super._updateNonUniformScalingState(vv) && (this._markSubMeshesAsMiscDirty(), !0)
          }
          get rawBoundingInfo() {
            return this._internalAbstractMeshDataInfo._rawBoundingInfo
          }
          set rawBoundingInfo(vv) {
            this._internalAbstractMeshDataInfo._rawBoundingInfo = vv
          }
          set eW(vv) {
            this._internalAbstractMeshDataInfo._meshCollisionData._onCollideObserver && this.onCollideObservable.remove(this._internalAbstractMeshDataInfo._meshCollisionData._onCollideObserver), this._internalAbstractMeshDataInfo._meshCollisionData._onCollideObserver = this.onCollideObservable.add(vv)
          }
          set onCollisionPositionChange(vv) {
            this._internalAbstractMeshDataInfo._meshCollisionData._onCollisionPositionChangeObserver && this.onCollisionPositionChangeObservable.remove(this._internalAbstractMeshDataInfo._meshCollisionData._onCollisionPositionChangeObserver), this._internalAbstractMeshDataInfo._meshCollisionData._onCollisionPositionChangeObserver = this.onCollisionPositionChangeObservable.add(vv)
          }
          get visibility() {
            return this._internalAbstractMeshDataInfo._visibility
          }
          set visibility(vv) {
            if (this._internalAbstractMeshDataInfo._visibility === vv) return;
            const zv = this._internalAbstractMeshDataInfo._visibility;
            this._internalAbstractMeshDataInfo._visibility = vv, (1 === zv && 1 !== vv || 1 !== zv && 1 === vv) && this._markSubMeshesAsDirty((vv => {
              vv.markAsMiscDirty(), vv.markAsPrePassDirty()
            }))
          }
          get pointerOverDisableMeshTesting() {
            return this._internalAbstractMeshDataInfo._pointerOverDisableMeshTesting
          }
          set pointerOverDisableMeshTesting(vv) {
            this._internalAbstractMeshDataInfo._pointerOverDisableMeshTesting = vv
          }
          get renderingGroupId() {
            return this._internalAbstractMeshDataInfo._renderingGroupId
          }
          set renderingGroupId(vv) {
            this._internalAbstractMeshDataInfo._renderingGroupId = vv
          }
          get meshBlendingTag() {
            return this._internalAbstractMeshDataInfo._meshBlendingTag
          }
          set meshBlendingTag(vv) {
            if (!Number.isInteger(vv) || vv < 0 || vv > 255 || 0 !== vv && 0 === (63 & vv)) throw new RangeError("Mesh-blending tag must be 0 or contain a group ID between 1 and 63.");
            this._internalAbstractMeshDataInfo._meshBlendingTag = vv
          }
          get material() {
            return this._internalAbstractMeshDataInfo._material
          }
          set material(vv) {
            this._setMaterial(vv)
          }
          _setMaterial(vv) {
            this._internalAbstractMeshDataInfo._material !== vv && (this._internalAbstractMeshDataInfo._material && this._internalAbstractMeshDataInfo._material.meshMap && (this._internalAbstractMeshDataInfo._material.meshMap[this.uniqueId] = void 0), this._internalAbstractMeshDataInfo._material = vv, vv && vv.meshMap && (vv.meshMap[this.uniqueId] = this), this.onMaterialChangedObservable.hasObservers() && this.onMaterialChangedObservable.notifyObservers(this), this.sF && (this.resetDrawCache(void 0, null == vv), this._unBindEffect()))
          }
          getMaterialForRenderPass(vv) {
            return this._internalAbstractMeshDataInfo._materialForRenderPass?.[vv]
          }
          setMaterialForRenderPass(vv, zv) {
            this.resetDrawCache(vv), this._internalAbstractMeshDataInfo._materialForRenderPass || (this._internalAbstractMeshDataInfo._materialForRenderPass = []);
            const Pv = this._internalAbstractMeshDataInfo._materialForRenderPass[vv];
            Pv?.meshMap?.[this.uniqueId] && (Pv.meshMap[this.uniqueId] = void 0), this._internalAbstractMeshDataInfo._materialForRenderPass[vv] = zv, zv && zv.meshMap && (zv.meshMap[this.uniqueId] = this)
          }
          get receiveShadows() {
            return this._internalAbstractMeshDataInfo._receiveShadows
          }
          set receiveShadows(vv) {
            this._internalAbstractMeshDataInfo._receiveShadows !== vv && (this._internalAbstractMeshDataInfo._receiveShadows = vv, this._markSubMeshesAsLightDirty())
          }
          get hasVertexAlpha() {
            return this._internalAbstractMeshDataInfo._hasVertexAlpha
          }
          set hasVertexAlpha(vv) {
            this._internalAbstractMeshDataInfo._hasVertexAlpha !== vv && (this._internalAbstractMeshDataInfo._hasVertexAlpha = vv, this._markSubMeshesAsAttributesDirty(), this._markSubMeshesAsMiscDirty())
          }
          get useVertexColors() {
            return this._internalAbstractMeshDataInfo._useVertexColors
          }
          set useVertexColors(vv) {
            this._internalAbstractMeshDataInfo._useVertexColors !== vv && (this._internalAbstractMeshDataInfo._useVertexColors = vv, this._markSubMeshesAsAttributesDirty())
          }
          get computeBonesUsingShaders() {
            return this._internalAbstractMeshDataInfo._computeBonesUsingShaders
          }
          set computeBonesUsingShaders(vv) {
            this._internalAbstractMeshDataInfo._computeBonesUsingShaders !== vv && (this._internalAbstractMeshDataInfo._computeBonesUsingShaders = vv, this._markSubMeshesAsAttributesDirty())
          }
          get numBoneInfluencers() {
            return this._internalAbstractMeshDataInfo._numBoneInfluencers
          }
          set numBoneInfluencers(vv) {
            this._internalAbstractMeshDataInfo._numBoneInfluencers !== vv && (this._internalAbstractMeshDataInfo._numBoneInfluencers = vv, this._markSubMeshesAsAttributesDirty())
          }
          get applyFog() {
            return this._internalAbstractMeshDataInfo._applyFog
          }
          set applyFog(vv) {
            this._internalAbstractMeshDataInfo._applyFog !== vv && (this._internalAbstractMeshDataInfo._applyFog = vv, this._markSubMeshesAsMiscDirty())
          }
          get enableDistantPicking() {
            return this._internalAbstractMeshDataInfo._enableDistantPicking
          }
          set enableDistantPicking(vv) {
            this._internalAbstractMeshDataInfo._enableDistantPicking = vv
          }
          get layerMask() {
            return this._internalAbstractMeshDataInfo._layerMask
          }
          set layerMask(vv) {
            vv !== this._internalAbstractMeshDataInfo._layerMask && (this._internalAbstractMeshDataInfo._layerMask = vv, this._resyncLightSources())
          }
          get collisionMask() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._collisionMask
          }
          set collisionMask(vv) {
            this._internalAbstractMeshDataInfo._meshCollisionData._collisionMask = isNaN(vv) ? -1 : vv
          }
          get collisionResponse() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._collisionResponse
          }
          set collisionResponse(vv) {
            this._internalAbstractMeshDataInfo._meshCollisionData._collisionResponse = vv
          }
          get collisionGroup() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._collisionGroup
          }
          set collisionGroup(vv) {
            this._internalAbstractMeshDataInfo._meshCollisionData._collisionGroup = isNaN(vv) ? -1 : vv
          }
          get surroundingMeshes() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._surroundingMeshes
          }
          set surroundingMeshes(vv) {
            this._internalAbstractMeshDataInfo._meshCollisionData._surroundingMeshes = vv
          }
          get lightSources() {
            return this._lightSources
          }
          set skeleton(vv) {
            const zv = this._internalAbstractMeshDataInfo._skeleton;
            zv && zv.needInitialSkinMatrix && zv._unregisterMeshWithPoseMatrix(this), vv && vv.needInitialSkinMatrix && vv._registerMeshWithPoseMatrix(this), this._internalAbstractMeshDataInfo._skeleton = vv, this._internalAbstractMeshDataInfo._skeleton || (this._bonesTransformMatrices = null), this._markSubMeshesAsAttributesDirty()
          }
          get skeleton() {
            return this._internalAbstractMeshDataInfo._skeleton
          }
          constructor(zv) {
            var Pv;
            let hv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            switch (super(zv, hv, !1), Pv = this, this._internalAbstractMeshDataInfo = new Uv, this._waitingMaterialId = null, this._waitingMorphTargetManagerId = null, this._waitingSkeletonId = null, this._waitingSkeletonUniqueId = null, this.cullingStrategy = vv.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY, this.onCollideObservable = new Sv.c, this.onCollisionPositionChangeObservable = new Sv.c, this.onMaterialChangedObservable = new Sv.c, this.definedFacingForward = !0, this._occlusionQuery = null, this._renderingGroup = null, this.alphaIndex = Number.MAX_VALUE, this.Zs = vv.DefaultIsPickable, this.isNearPickable = !1, this.isNearGrabbable = !1, this.showSubMeshesBoundingBox = !1, this.isBlocker = !1, this.enablePointerMoveEvents = !1, this.outlineColor = Gv.b.Red(), this.outlineWidth = .02, this.overlayColor = Gv.b.Red(), this.overlayAlpha = .5, this.useOctreeForRenderingSelection = !0, this.useOctreeForPicking = !0, this.useOctreeForCollisions = !0, this.ja = !1, this.Ya = !1, this.actionManager = null, this.ellipsoid = new ev.l(.5, 1, .5), this.ellipsoidOffset = new ev.l(0, 0, 0), this.edgesWidth = 1, this.edgesColor = new Gv.e(1, 0, 0, 1), this._edgesRenderer = null, this._masterMesh = null, this._boundingInfo = null, this._boundingInfoIsDirty = !0, this._renderId = 0, this._intersectionsInProgress = new Array, this._unIndexed = !1, this._lightSources = new Array, this._waitingData = {
                lods: null,
                actions: null,
                lK: null
              }, this._bonesTransformMatrices = null, this._transformMatrixTexture = null, this.onRebuildObservable = new Sv.c, this._onCollisionPositionChange = function(vv, zv) {
                let hv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                zv.subtractToRef(Pv._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions, Pv._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions), Pv._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions.length() > Yv.b.CollisionsEpsilon && Pv.position.addInPlace(Pv._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions), hv && Pv.onCollideObservable.notifyObservers(hv), Pv.onCollisionPositionChangeObservable.notifyObservers(Pv.position)
              }, hv = this.rD(), this.layerMask = hv.defaultRenderableLayerMask, hv.NPv(this), this._resyncLightSources(), this._uniformBuffer = new Tv.e(this.rD().ma(), void 0, void 0, zv, !this.rD().ma().isWebGPU), this._buildUniformLayout(), hv.performancePriority) {
              case 2:
                this.Ya = !0;
              case 1:
                this.ja = !0, this.Zs = !1
            }
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("world", 16), this._uniformBuffer.addUniform("visibility", 1), this._uniformBuffer.create()
          }
          transferToEffect(vv) {
            const zv = this._uniformBuffer;
            zv.Xu("world", vv), zv.updateFloat("visibility", this._internalAbstractMeshDataInfo._visibility), zv.update()
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
          toString(vv) {
            let zv = "Name: " + this.name + ", isInstance: " + ("InstancedMesh" === this.getClassName() ? "YES" : "NO");
            zv += ", # of submeshes: " + (this.sF ? this.sF.length : 0);
            const Pv = this._internalAbstractMeshDataInfo._skeleton;
            return Pv && (zv += ", skeleton: " + Pv.name), vv && (zv += ", billboard mode: " + ["NONE", "X", "Y", null, "Z", null, null, "ALL"][this.billboardMode], zv += ", freeze wrld mat: " + (this._isWorldMatrixFrozen || this._waitingData.lK ? "YES" : "NO")), zv
          }
          _getEffectiveParent() {
            return this._masterMesh && this.billboardMode !== dv.h.BILLBOARDMODE_NONE ? this._masterMesh : super._getEffectiveParent()
          }
          _getActionManagerForTrigger(vv) {
            let zv = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            if (this.actionManager && (zv || this.actionManager.isRecursive)) {
              if (!vv) return this.actionManager;
              if (this.actionManager.hasSpecificTrigger(vv)) return this.actionManager
            }
            return this.parent ? this.parent._getActionManagerForTrigger(vv, !1) : null
          }
          _releaseRenderPassId(vv) {}
          _rebuild() {
            if (this.onRebuildObservable.notifyObservers(this), null !== this._occlusionQuery && (this._occlusionQuery = null), this.sF) {
              for (const vv of this.sF) vv._rebuild();
              this.resetDrawCache()
            }
          }
          _resyncLightSources() {
            this._lightSources.length = 0;
            for (const vv of this.rD().lights) vv.isEnabled() && vv.canAffectMesh(this) && this._lightSources.push(vv);
            this._markSubMeshesAsLightDirty()
          }
          _resyncLightSource(vv) {
            const zv = vv.isEnabled() && vv.canAffectMesh(this),
              Pv = this._lightSources.indexOf(vv);
            let hv = !1;
            if (-1 === Pv) {
              if (!zv) return;
              this._lightSources.push(vv)
            } else {
              if (zv) return;
              hv = !0, this._lightSources.splice(Pv, 1)
            }
            this._markSubMeshesAsLightDirty(hv)
          }
          _unBindEffect() {
            for (const vv of this.sF) vv.setEffect(null)
          }
          _removeLightSource(vv, zv) {
            const Pv = this._lightSources.indexOf(vv); - 1 !== Pv && (this._lightSources.splice(Pv, 1), this._markSubMeshesAsLightDirty(zv))
          }
          _markSubMeshesAsDirty(vv) {
            if (this.sF)
              for (const zv of this.sF)
                for (let Pv = 0; Pv < zv._drawWrappers.length; ++Pv) {
                  const hv = zv._drawWrappers[Pv];
                  hv && hv.defines && hv.defines.markAllAsDirty && vv(hv.defines)
                }
          }
          _markSubMeshesAsLightDirty() {
            let vv = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            this._markSubMeshesAsDirty((zv => zv.markAsLightDirty(vv)))
          }
          _markSubMeshesAsAttributesDirty() {
            this._markSubMeshesAsDirty((vv => vv.markAsAttributesDirty()))
          }
          _markSubMeshesAsMiscDirty() {
            this._markSubMeshesAsDirty((vv => vv.markAsMiscDirty()))
          }
          xvv(vv) {
            return this._currentRenderId = Number.MAX_VALUE, super.xvv(vv), this._isDirty = !0, this
          }
          resetDrawCache(vv) {
            let zv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (this.sF)
              for (const Pv of this.sF) Pv.resetDrawCache(vv, zv)
          }
          get isBlocked() {
            return !1
          }
          getLOD(vv) {
            return this
          }
          getTotalVertices() {
            return 0
          }
          getTotalIndices() {
            return 0
          }
          dPv() {
            return null
          }
          getVerticesData(vv) {
            return null
          }
          setVerticesData(vv, zv, Pv, hv) {
            return this
          }
          updateVerticesData(vv, zv, Pv, hv) {
            return this
          }
          setIndices(vv, zv) {
            return this
          }
          isVerticesDataPresent(vv) {
            return !1
          }
          cV() {
            return this._masterMesh ? this._masterMesh.cV() : (this._boundingInfoIsDirty && (this._boundingInfoIsDirty = !1, this._updateBoundingInfo()), this._boundingInfo)
          }
          getRawBoundingInfo() {
            return this.rawBoundingInfo ?? this.cV()
          }
          setBoundingInfo(vv) {
            return this._boundingInfo = vv, this
          }
          get hasBoundingInfo() {
            return null !== this._boundingInfo
          }
          buildBoundingInfo(vv, zv, Pv) {
            return this._boundingInfo = new lv.e(vv, zv, Pv), this._boundingInfo
          }
          normalizeToUnitCube() {
            let vv = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
              zv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              Pv = arguments.length > 2 ? arguments[2] : void 0;
            return super.normalizeToUnitCube(vv, zv, Pv)
          }
          get useBones() {
            return this.skeleton && this.rD().skeletonsEnabled && this.isVerticesDataPresent(gv.k.MatricesIndicesKind) && this.isVerticesDataPresent(gv.k.MatricesWeightsKind)
          }
          _preActivate() {}
          _preActivateForIntermediateRendering(vv) {}
          _activate(vv, zv) {
            return this._renderId = vv, !0
          }
          _postActivate() {}
          _freeze() {}
          _unFreeze() {}
          getWorldMatrix() {
            return this._masterMesh && this.billboardMode === dv.h.BILLBOARDMODE_NONE ? this._masterMesh.getWorldMatrix() : super.getWorldMatrix()
          }
          _getWorldMatrixDeterminant() {
            return this._masterMesh ? this._masterMesh._getWorldMatrixDeterminant() : super._getWorldMatrixDeterminant()
          }
          get zK() {
            return !1
          }
          get Phv() {
            return !1
          }
          get hasThinInstances() {
            return !1
          }
          movePOV(vv, zv, Pv) {
            return this.position.addInPlace(this.calcMovePOV(vv, zv, Pv)), this
          }
          calcMovePOV(vv, zv, Pv) {
            const hv = new ev.c;
            (this.rotationQuaternion ? this.rotationQuaternion : ev.d.RotationYawPitchRoll(this.rotation.y, this.rotation.x, this.rotation.z)).toRotationMatrix(hv);
            const Sv = ev.l.Zero(),
              gv = this.definedFacingForward ? -1 : 1;
            return ev.l.TransformCoordinatesFromFloatsToRef(vv * gv, zv, Pv * gv, hv, Sv), Sv
          }
          rotatePOV(vv, zv, Pv) {
            return this.rotation.addInPlace(this.calcRotatePOV(vv, zv, Pv)), this
          }
          calcRotatePOV(vv, zv, Pv) {
            const hv = this.definedFacingForward ? 1 : -1;
            return new ev.l(vv * hv, zv, Pv * hv)
          }
          _refreshBoundingInfo(vv, zv) {
            if (vv) {
              const Pv = (0, cv.g)(vv, 0, this.getTotalVertices(), zv);
              this._boundingInfo ? this._boundingInfo.reConstruct(Pv.minimum, Pv.maximum) : this._boundingInfo = new lv.e(Pv.minimum, Pv.maximum)
            }
            if (this.sF)
              for (let Pv = 0; Pv < this.sF.length; Pv++) this.sF[Pv].refreshBoundingInfo(vv);
            this._updateBoundingInfo()
          }
          _refreshBoundingInfoDirect(vv) {
            if (this._boundingInfo ? this._boundingInfo.reConstruct(vv.minimum, vv.maximum) : this._boundingInfo = new lv.e(vv.minimum, vv.maximum), this.sF)
              for (let zv = 0; zv < this.sF.length; zv++) this.sF[zv].refreshBoundingInfo(null);
            this._updateBoundingInfo()
          }
          static _ApplySkeleton(vv, zv, Pv, hv, Sv, pv, dv) {
            ! function(vv, zv, Pv, hv, Sv, pv, dv) {
              const Nv = ev.i.fa[0],
                lv = ev.i.Matrix[0],
                Tv = ev.i.Matrix[1],
                Wv = zv === gv.k.NormalKind ? ev.l.TransformNormalFromFloatsToRef : ev.l.TransformCoordinatesFromFloatsToRef;
              for (let gv = 0, wv = 0; gv < vv.length; gv += 3, wv += 4) {
                let zv, av;
                for (lv.reset(), zv = 0; zv < 4; zv++) av = Sv[wv + zv], av > 0 && (ev.c.FromFloat32ArrayToRefScaled(Pv, Math.floor(16 * hv[wv + zv]), av, Tv), lv.addToSelf(Tv));
                if (pv && dv)
                  for (zv = 0; zv < 4; zv++) av = dv[wv + zv], av > 0 && (ev.c.FromFloat32ArrayToRefScaled(Pv, Math.floor(16 * pv[wv + zv]), av, Tv), lv.addToSelf(Tv));
                Wv(vv[gv], vv[gv + 1], vv[gv + 2], lv, Nv), Nv.toArray(vv, gv)
              }
            }(vv, zv, Pv, hv, Sv, pv, dv)
          }
          _getData(zv, Pv) {
            let hv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : gv.k.PositionKind;
            const Sv = zv.cache,
              pv = vv => {
                if (Sv) {
                  const zv = Sv._vertexData || (Sv._vertexData = {});
                  return zv[vv] || this.copyVerticesData(vv, zv), zv[vv]
                }
                return this.getVerticesData(vv)
              };
            if (Pv || (Pv = pv(hv)), !Pv) return null;
            Sv ? (Sv._outputData ? Sv._outputData.set(Pv) : Sv._outputData = new Float32Array(Pv), Pv = Sv._outputData) : (zv.applyMorph && this.morphTargetManager || zv.applySkeleton && this.skeleton || zv.applyBakedVertexAnimation && this.bakedVertexAnimationManager?.isEnabled) && (Pv = Pv.slice()), zv.applyMorph && this.morphTargetManager && function(vv, zv, Pv) {
              let hv;
              switch (zv) {
                case gv.k.PositionKind:
                  hv = vv => vv.getPositions();
                  break;
                case gv.k.NormalKind:
                  hv = vv => vv.getNormals();
                  break;
                case gv.k.TangentKind:
                  hv = vv => vv.getTangents();
                  break;
                case gv.k.UVKind:
                  hv = vv => vv.getUVs();
                  break;
                case gv.k.UV2Kind:
                  hv = vv => vv.getUV2s();
                  break;
                case gv.k.ColorKind:
                  hv = vv => vv.getColors();
                  break;
                default:
                  return
              }
              for (let Sv = 0; Sv < vv.length; Sv++) {
                let zv = vv[Sv];
                for (let ev = 0; ev < Pv.numTargets; ev++) {
                  const gv = Pv.getTarget(ev),
                    pv = gv.influence;
                  if (0 !== pv) {
                    const Pv = hv(gv);
                    Pv && (zv += (Pv[Sv] - vv[Sv]) * pv)
                  }
                }
                vv[Sv] = zv
              }
            }(Pv, hv, this.morphTargetManager);
            const dv = this.bakedVertexAnimationManager;
            let Nv = !1;
            if (zv.applyBakedVertexAnimation && dv?.isEnabled) {
              const vv = pv(gv.k.MatricesIndicesKind),
                Sv = pv(gv.k.MatricesWeightsKind);
              if (Sv && vv) {
                const ev = this.numBoneInfluencers > 4,
                  lv = ev ? pv(gv.k.MatricesIndicesExtraKind) : null,
                  Tv = ev ? pv(gv.k.MatricesWeightsExtraKind) : null;
                Nv = Kv(Pv, hv, dv, zv.bakedVertexAnimationSettings ?? dv.animationParameters, vv, Sv, lv, Tv, this.numBoneInfluencers)
              }
            }
            if (!Nv && zv.applySkeleton && this.skeleton) {
              const zv = pv(gv.k.MatricesIndicesKind),
                Sv = pv(gv.k.MatricesWeightsKind);
              if (Sv && zv) {
                const ev = this.numBoneInfluencers > 4,
                  dv = ev ? pv(gv.k.MatricesIndicesExtraKind) : null,
                  Nv = ev ? pv(gv.k.MatricesWeightsExtraKind) : null,
                  lv = this.skeleton.getTransformMatrices(this);
                vv._ApplySkeleton(Pv, hv, lv, zv, Sv, dv, Nv)
              }
            }
            if (!1 !== zv.updatePositionsArray && hv === gv.k.PositionKind) {
              const vv = this._internalAbstractMeshDataInfo._positions || [],
                zv = vv.length;
              if (vv.length = Pv.length / 3, zv < vv.length)
                for (let Pv = zv; Pv < vv.length; Pv++) vv[Pv] = new ev.l;
              for (let hv = 0, Sv = 0; hv < vv.length; hv++, Sv += 3) vv[hv].f_(Pv[Sv], Pv[Sv + 1], Pv[Sv + 2]);
              this._internalAbstractMeshDataInfo._positions = vv
            }
            return Pv
          }
          getNormalsData() {
            let vv = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              zv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return this._getData({
              applySkeleton: vv,
              applyMorph: zv,
              updatePositionsArray: !1
            }, null, gv.k.NormalKind)
          }
          rA() {
            let vv = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              zv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            return this._getData({
              applySkeleton: vv,
              applyMorph: zv,
              updatePositionsArray: !1
            }, Pv, gv.k.PositionKind)
          }
          _updateBoundingInfo() {
            return this._boundingInfo ? this._boundingInfo.update(this.worldMatrixFromCache) : this._boundingInfo = new lv.e(ev.l.Zero(), ev.l.Zero(), this.worldMatrixFromCache), this._updateSubMeshesBoundingInfo(this.worldMatrixFromCache), this
          }
          _updateSubMeshesBoundingInfo(vv) {
            if (!this.sF) return this;
            const zv = this.sF.length;
            for (let Pv = 0; Pv < zv; Pv++) {
              const hv = this.sF[Pv];
              (zv > 1 || !hv.IsGlobal) && hv.updateBoundingInfo(vv)
            }
            return this
          }
          _afterComputeWorldMatrix() {
            this.Ya || (this._boundingInfoIsDirty = !0)
          }
          isInFrustum(vv) {
            return this.cV().isInFrustum(vv, this.cullingStrategy)
          }
          isCompletelyInFrustum(vv) {
            return this.cV().isCompletelyInFrustum(vv)
          }
          bPv(vv) {
            let zv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              Pv = arguments.length > 2 ? arguments[2] : void 0;
            const hv = this.cV(),
              Sv = vv.cV();
            if (hv.intersects(Sv, zv)) return !0;
            if (Pv)
              for (const ev of this.getChildMeshes())
                if (ev.bPv(vv, zv, !0)) return !0;
            return !1
          }
          intersectsPoint(vv) {
            return this.cV().intersectsPoint(vv)
          }
          get checkCollisions() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._checkCollisions
          }
          set checkCollisions(vv) {
            this._internalAbstractMeshDataInfo._meshCollisionData._checkCollisions = vv
          }
          get collider() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._collider
          }
          moveWithCollisions(vv) {
            let zv = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            this.getAbsolutePosition().addToRef(this.ellipsoidOffset, this._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions);
            const Pv = this.rD().collisionCoordinator;
            return this._internalAbstractMeshDataInfo._meshCollisionData._collider || (this._internalAbstractMeshDataInfo._meshCollisionData._collider = Pv.createCollider()), this._internalAbstractMeshDataInfo._meshCollisionData._collider._radius = this.ellipsoid, Pv.getNewPosition(this._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions, vv, this._internalAbstractMeshDataInfo._meshCollisionData._collider, this.collisionRetryCount, this, this._onCollisionPositionChange, this.uniqueId, zv), this
          }
          _collideForSubMesh(vv, zv, Pv) {
            if (this._generatePointsArray(), !this._positions) return this;
            if (!vv._lastColliderWorldVertices || !vv._lastColliderTransformMatrix.equals(zv)) {
              vv._lastColliderTransformMatrix = zv.clone(), vv._lastColliderWorldVertices = [], vv._trianglePlanes = [];
              const Pv = vv.verticesStart,
                hv = vv.verticesStart + vv.verticesCount;
              for (let Sv = Pv; Sv < hv; Sv++) vv._lastColliderWorldVertices.push(ev.l.TransformCoordinates(this._positions[Sv], zv))
            }
            return Pv._collide(vv._trianglePlanes, vv._lastColliderWorldVertices, this.dPv(), vv.indexStart, vv.indexStart + vv.indexCount, vv.verticesStart, !!vv.na(), this, this._shouldConvertRHS(), 7 === vv.na()?.fillMode), this
          }
          _processCollisionsForSubMeshes(vv, zv) {
            const Pv = this._scene.getCollidingSubMeshCandidates(this, vv),
              hv = Pv.length;
            for (let Sv = 0; Sv < hv; Sv++) {
              const ev = Pv.data[Sv];
              hv > 1 && !ev._checkCollision(vv) || this._collideForSubMesh(ev, zv, vv)
            }
            return this
          }
          _shouldConvertRHS() {
            return !1
          }
          _checkCollision(vv) {
            if (!this.cV()._checkCollision(vv)) return this;
            const zv = ev.i.Matrix[0],
              Pv = ev.i.Matrix[1];
            return ev.c.ScalingToRef(1 / vv._radius.x, 1 / vv._radius.y, 1 / vv._radius.z, zv), this.worldMatrixFromCache.multiplyToRef(zv, Pv), this._processCollisionsForSubMeshes(vv, Pv), this
          }
          _generatePointsArray() {
            return !1
          }
          intersects(vv, zv, Pv) {
            let hv = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              Sv = arguments.length > 4 ? arguments[4] : void 0,
              gv = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
            const pv = new Nv.c,
              dv = this.getClassName(),
              lv = "InstancedLinesMesh" === dv || "LinesMesh" === dv || "GreasedLineMesh" === dv ? this.intersectionThreshold : 0,
              Tv = this.cV();
            if (!this.sF) return pv;
            if (!gv && (!vv.intersectsSphere(Tv.tPv, lv) || !vv.intersectsBox(Tv.boundingBox, lv))) return pv;
            if (hv) return pv.hit = !gv, pv.pickedMesh = gv ? null : this, pv.distance = gv ? 0 : ev.l.Distance(vv.origin, Tv.tPv.center), pv.subMeshId = 0, pv;
            if (!this._generatePointsArray()) return pv;
            let Wv = null;
            const wv = this._scene.getIntersectingSubMeshCandidates(this, vv),
              av = wv.length;
            let sv = !1;
            for (let ev = 0; ev < av; ev++) {
              const vv = wv.data[ev].na();
              if (vv && (7 == vv.fillMode || 0 == vv.fillMode || 1 == vv.fillMode || 2 == vv.fillMode || 4 == vv.fillMode)) {
                sv = !0;
                break
              }
            }
            if (!sv) return pv.hit = !0, pv.pickedMesh = this, pv.distance = ev.l.Distance(vv.origin, Tv.tPv.center), pv.subMeshId = -1, pv;
            for (let ev = 0; ev < av; ev++) {
              const hv = wv.data[ev];
              if (av > 1 && !gv && !hv.canIntersects(vv)) continue;
              const Sv = hv.intersects(vv, this._positions, this.dPv(), zv, Pv);
              if (Sv && (zv || !Wv || Sv.distance < Wv.distance) && (Wv = Sv, Wv.subMeshId = hv._id, Wv._internalSubMeshId = ev, zv)) break
            }
            if (Wv) {
              const zv = Sv ?? this.getWorldMatrix(),
                Pv = ev.i.fa[0],
                hv = ev.i.fa[1];
              ev.l.TransformCoordinatesToRef(vv.origin, zv, Pv), vv.direction.scaleToRef(Wv.distance, hv);
              const gv = ev.l.TransformNormal(hv, zv).addInPlace(Pv);
              return pv.hit = !0, pv.distance = ev.l.Distance(Pv, gv), pv.pickedPoint = gv, pv.pickedMesh = this, pv.bu = Wv.bu || 0, pv.bv = Wv.bv || 0, pv.subMeshFaceId = Wv.faceId, pv.faceId = Wv.faceId + wv.data[Wv._internalSubMeshId].indexStart / (-1 !== this.getClassName().indexOf("LinesMesh") ? 2 : 3), pv.subMeshId = Wv.subMeshId, pv
            }
            return pv
          }
          clone(vv, zv, Pv) {
            return null
          }
          releaseSubMeshes() {
            let vv = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (this.sF)
              for (; this.sF.length;) this.sF[0].dispose(vv);
            else this.sF = [];
            return this
          }
          dispose(vv) {
            let zv, Pv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            const hv = this.rD();
            for (this._scene.useMaterialMeshMap && this._internalAbstractMeshDataInfo._material && this._internalAbstractMeshDataInfo._material.meshMap && (this._internalAbstractMeshDataInfo._material.meshMap[this.uniqueId] = void 0), hv.freeActiveMeshes(), hv.freeRenderingGroups(), hv.renderingManager.maintainStateBetweenFrames && hv.renderingManager.restoreDispachedFlags(), void 0 !== this.actionManager && null !== this.actionManager && (this.actionManager.disposeWhenUnowned && !this._scene.meshes.some((vv => vv !== this && vv.actionManager === this.actionManager)) && this.actionManager.dispose(), this.actionManager = null), this._internalAbstractMeshDataInfo._skeleton = null, this._transformMatrixTexture && (this._transformMatrixTexture.dispose(), this._transformMatrixTexture = null), zv = 0; zv < this._intersectionsInProgress.length; zv++) {
              const vv = this._intersectionsInProgress[zv],
                Pv = vv._intersectionsInProgress.indexOf(this);
              vv._intersectionsInProgress.splice(Pv, 1)
            }
            this._intersectionsInProgress.length = 0;
            const Sv = hv.lights;
            for (const gv of Sv) {
              let vv = gv.includedOnlyMeshes.indexOf(this); - 1 !== vv && gv.includedOnlyMeshes.splice(vv, 1), vv = gv.excludedMeshes.indexOf(this), -1 !== vv && gv.excludedMeshes.splice(vv, 1);
              const zv = gv.getShadowGenerators();
              if (zv) {
                const Pv = zv.values();
                for (let zv = Pv.next(); !0 !== zv.done; zv = Pv.next()) {
                  const Pv = zv.value.getShadowMap();
                  Pv && Pv.renderList && (vv = Pv.renderList.indexOf(this), -1 !== vv && Pv.renderList.splice(vv, 1))
                }
              }
            }
            this.releaseSubMeshes(hv._isDisposing);
            const ev = hv.ma();
            if (null !== this._occlusionQuery && (this.isOcclusionQueryInProgress = !1, ev.deleteQuery(this._occlusionQuery), this._occlusionQuery = null), ev.wipeCaches(), hv.sK(this), this._parentContainer) {
              const vv = this._parentContainer.meshes.indexOf(this);
              vv > -1 && this._parentContainer.meshes.splice(vv, 1), this._parentContainer = null
            }
            if (Pv && this.material && ("MultiMaterial" === this.material.getClassName() ? this.material.dispose(!1, !0, !0) : this.material.dispose(!1, !0)), !vv)
              for (zv = 0; zv < hv.mF.length; zv++) hv.mF[zv].emitter === this && (hv.mF[zv].dispose(), zv--);
            this._internalAbstractMeshDataInfo._facetData.facetDataEnabled && this.disableFacetData(), this._uniformBuffer.dispose(), this.onAfterWorldMatrixUpdateObservable.clear(), this.onCollideObservable.clear(), this.onCollisionPositionChangeObservable.clear(), this.onRebuildObservable.clear(), super.dispose(vv, Pv)
          }
          _initFacetData() {
            const vv = this._internalAbstractMeshDataInfo._facetData;
            vv.facetNormals || (vv.facetNormals = []), vv.facetPositions || (vv.facetPositions = []), vv.facetPartitioning || (vv.facetPartitioning = new Array), vv.facetNb = this.dPv().length / 3 | 0, vv.partitioningSubdivisions = vv.partitioningSubdivisions ? vv.partitioningSubdivisions : 10, vv.partitioningBBoxRatio = vv.partitioningBBoxRatio ? vv.partitioningBBoxRatio : 1.01;
            for (let zv = 0; zv < vv.facetNb; zv++) vv.facetNormals[zv] = ev.l.Zero(), vv.facetPositions[zv] = ev.l.Zero();
            return vv.facetDataEnabled = !0, this
          }
          updateFacetData() {
            const vv = this._internalAbstractMeshDataInfo._facetData;
            vv.facetDataEnabled || this._initFacetData();
            const zv = this.getVerticesData(gv.k.PositionKind),
              Pv = this.dPv(),
              hv = this.getVerticesData(gv.k.NormalKind)?.slice(),
              Sv = this.cV();
            if (vv.facetDepthSort && !vv.facetDepthSortEnabled) {
              if (vv.facetDepthSortEnabled = !0, Pv instanceof Uint16Array) vv.depthSortedIndices = new Uint16Array(Pv);
              else if (Pv instanceof Uint32Array) vv.depthSortedIndices = new Uint32Array(Pv);
              else {
                let zv = !1;
                for (let vv = 0; vv < Pv.length; vv++)
                  if (Pv[vv] > 65535) {
                    zv = !0;
                    break
                  } vv.depthSortedIndices = zv ? new Uint32Array(Pv) : new Uint16Array(Pv)
              }
              if (vv.facetDepthSortFunction = function(vv, zv) {
                  return zv.sqDistance - vv.sqDistance
                }, !vv.facetDepthSortFrom) {
                const zv = this.rD().activeCamera;
                vv.facetDepthSortFrom = zv ? zv.position : ev.l.Zero()
              }
              vv.depthSortedFacets = [];
              for (let zv = 0; zv < vv.facetNb; zv++) {
                const Pv = {
                  ind: 3 * zv,
                  sqDistance: 0
                };
                vv.depthSortedFacets.push(Pv)
              }
              vv.invertedMatrix = ev.c.Identity(), vv.facetDepthSortOrigin = ev.l.Zero()
            }
            vv.bbSize.x = Sv.maximum.x - Sv.minimum.x > mv.e ? Sv.maximum.x - Sv.minimum.x : mv.e, vv.bbSize.y = Sv.maximum.y - Sv.minimum.y > mv.e ? Sv.maximum.y - Sv.minimum.y : mv.e, vv.bbSize.z = Sv.maximum.z - Sv.minimum.z > mv.e ? Sv.maximum.z - Sv.minimum.z : mv.e;
            let dv = vv.bbSize.x > vv.bbSize.y ? vv.bbSize.x : vv.bbSize.y;
            if (dv = dv > vv.bbSize.z ? dv : vv.bbSize.z, vv.subDiv.max = vv.partitioningSubdivisions, vv.subDiv.X = Math.floor(vv.subDiv.max * vv.bbSize.x / dv), vv.subDiv.Y = Math.floor(vv.subDiv.max * vv.bbSize.y / dv), vv.subDiv.Z = Math.floor(vv.subDiv.max * vv.bbSize.z / dv), vv.subDiv.X = vv.subDiv.X < 1 ? 1 : vv.subDiv.X, vv.subDiv.Y = vv.subDiv.Y < 1 ? 1 : vv.subDiv.Y, vv.subDiv.Z = vv.subDiv.Z < 1 ? 1 : vv.subDiv.Z, vv.facetParameters.facetNormals = this.getFacetLocalNormals(), vv.facetParameters.facetPositions = this.getFacetLocalPositions(), vv.facetParameters.facetPartitioning = this.getFacetLocalPartitioning(), vv.facetParameters.bInfo = Sv, vv.facetParameters.bbSize = vv.bbSize, vv.facetParameters.subDiv = vv.subDiv, vv.facetParameters.ratio = this.partitioningBBoxRatio, vv.facetParameters.depthSort = vv.facetDepthSort, vv.facetDepthSort && vv.facetDepthSortEnabled && (this.computeWorldMatrix(!0), this._worldMatrix.invertToRef(vv.invertedMatrix), ev.l.TransformCoordinatesToRef(vv.facetDepthSortFrom, vv.invertedMatrix, vv.facetDepthSortOrigin), vv.facetParameters.distanceTo = vv.facetDepthSortOrigin), vv.facetParameters.depthSortedFacets = vv.depthSortedFacets, hv && pv.d.ComputeNormals(zv, Pv, hv, vv.facetParameters), vv.facetDepthSort && vv.facetDepthSortEnabled) {
              vv.depthSortedFacets.sort(vv.facetDepthSortFunction);
              const zv = vv.depthSortedIndices.length / 3 | 0;
              for (let hv = 0; hv < zv; hv++) {
                const zv = vv.depthSortedFacets[hv].ind;
                vv.depthSortedIndices[3 * hv] = Pv[zv], vv.depthSortedIndices[3 * hv + 1] = Pv[zv + 1], vv.depthSortedIndices[3 * hv + 2] = Pv[zv + 2]
              }
              this.updateIndices(vv.depthSortedIndices, void 0, !0)
            }
            return this
          }
          getFacetLocalNormals() {
            const vv = this._internalAbstractMeshDataInfo._facetData;
            return vv.facetNormals || this.updateFacetData(), vv.facetNormals
          }
          getFacetLocalPositions() {
            const vv = this._internalAbstractMeshDataInfo._facetData;
            return vv.facetPositions || this.updateFacetData(), vv.facetPositions
          }
          getFacetLocalPartitioning() {
            const vv = this._internalAbstractMeshDataInfo._facetData;
            return vv.facetPartitioning || this.updateFacetData(), vv.facetPartitioning
          }
          getFacetPosition(vv) {
            const zv = ev.l.Zero();
            return this.getFacetPositionToRef(vv, zv), zv
          }
          getFacetPositionToRef(vv, zv) {
            const Pv = this.getFacetLocalPositions()[vv],
              hv = this.getWorldMatrix();
            return ev.l.TransformCoordinatesToRef(Pv, hv, zv), this
          }
          getFacetNormal(vv) {
            const zv = ev.l.Zero();
            return this.getFacetNormalToRef(vv, zv), zv
          }
          getFacetNormalToRef(vv, zv) {
            const Pv = this.getFacetLocalNormals()[vv];
            return ev.l.TransformNormalToRef(Pv, this.getWorldMatrix(), zv), this
          }
          getFacetsAtLocalCoordinates(vv, zv, Pv) {
            const hv = this.cV(),
              Sv = this._internalAbstractMeshDataInfo._facetData,
              ev = Math.floor((vv - hv.minimum.x * Sv.partitioningBBoxRatio) * Sv.subDiv.X * Sv.partitioningBBoxRatio / Sv.bbSize.x),
              gv = Math.floor((zv - hv.minimum.y * Sv.partitioningBBoxRatio) * Sv.subDiv.Y * Sv.partitioningBBoxRatio / Sv.bbSize.y),
              pv = Math.floor((Pv - hv.minimum.z * Sv.partitioningBBoxRatio) * Sv.subDiv.Z * Sv.partitioningBBoxRatio / Sv.bbSize.z);
            return ev < 0 || ev > Sv.subDiv.max || gv < 0 || gv > Sv.subDiv.max || pv < 0 || pv > Sv.subDiv.max ? null : Sv.facetPartitioning[ev + Sv.subDiv.max * gv + Sv.subDiv.max * Sv.subDiv.max * pv]
          }
          getClosestFacetAtCoordinates(vv, zv, Pv, hv) {
            let Sv = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              gv = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
            const pv = this.getWorldMatrix(),
              dv = ev.i.Matrix[5];
            pv.invertToRef(dv);
            const Nv = ev.i.fa[8];
            ev.l.TransformCoordinatesFromFloatsToRef(vv, zv, Pv, dv, Nv);
            const lv = this.getClosestFacetAtLocalCoordinates(Nv.x, Nv.y, Nv.z, hv, Sv, gv);
            return hv && ev.l.TransformCoordinatesFromFloatsToRef(hv.x, hv.y, hv.z, pv, hv), lv
          }
          getClosestFacetAtLocalCoordinates(vv, zv, Pv, hv) {
            let Sv, ev, gv, pv, dv, Nv, lv, Tv, Wv = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              wv = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
              av = null;
            const sv = this.getFacetLocalPositions(),
              Cv = this.getFacetLocalNormals(),
              iv = this.getFacetsAtLocalCoordinates(vv, zv, Pv);
            if (!iv) return null;
            let cv, Gv, mv, jv, fv = Number.MAX_VALUE;
            for (let Fv = 0; Fv < iv.length; Fv++) Gv = iv[Fv], mv = Cv[Gv], jv = sv[Gv], pv = (vv - jv.x) * mv.x + (zv - jv.y) * mv.y + (Pv - jv.z) * mv.z, (!Wv || Wv && wv && pv >= 0 || Wv && !wv && pv <= 0) && (pv = mv.x * jv.x + mv.y * jv.y + mv.z * jv.z, dv = -(mv.x * vv + mv.y * zv + mv.z * Pv - pv) / (mv.x * mv.x + mv.y * mv.y + mv.z * mv.z), Nv = vv + mv.x * dv, lv = zv + mv.y * dv, Tv = Pv + mv.z * dv, Sv = Nv - vv, ev = lv - zv, gv = Tv - Pv, cv = Sv * Sv + ev * ev + gv * gv, cv < fv && (fv = cv, av = Gv, hv && (hv.x = Nv, hv.y = lv, hv.z = Tv)));
            return av
          }
          getFacetDataParameters() {
            return this._internalAbstractMeshDataInfo._facetData.facetParameters
          }
          disableFacetData() {
            const vv = this._internalAbstractMeshDataInfo._facetData;
            return vv.facetDataEnabled && (vv.facetDataEnabled = !1, vv.facetPositions = [], vv.facetNormals = [], vv.facetPartitioning = new Array, vv.facetParameters = {}, vv.depthSortedIndices = new Uint32Array(0)), this
          }
          updateIndices(vv, zv) {
            return this
          }
          createNormals(vv) {
            const zv = this.getVerticesData(gv.k.PositionKind),
              Pv = this.dPv();
            let hv;
            return hv = this.isVerticesDataPresent(gv.k.NormalKind) ? this.getVerticesData(gv.k.NormalKind) : [], pv.d.ComputeNormals(zv, Pv, hv, {
              useRightHandedSystem: this.rD().useRightHandedSystem
            }), this.setVerticesData(gv.k.NormalKind, hv, vv), this
          }
          async optimizeIndicesAsync() {
            const vv = this.dPv();
            if (!vv) return this;
            const {
              OptimizeIndices: zv
            } = await Pv.e(342).then((() => Pv(41859)));
            return zv(vv), this.setIndices(vv, this.getTotalVertices()), this
          }
          alignWithNormal(vv, zv) {
            zv || (zv = jv.c.Y);
            const Pv = ev.i.fa[0],
              hv = ev.i.fa[1];
            return ev.l.CrossToRef(zv, vv, hv), ev.l.CrossToRef(vv, hv, Pv), this.rotationQuaternion ? ev.d.RotationQuaternionFromAxisToRef(Pv, vv, hv, this.rotationQuaternion) : ev.l.RotationFromAxisToRef(Pv, vv, hv, this.rotation), this
          }
          _checkOcclusionQuery() {
            return !1
          }
          disableEdgesRendering() {
            throw (0, Cv.m)("EdgesRenderer")
          }
          enableEdgesRendering(vv, zv, Pv) {
            throw (0, Cv.m)("EdgesRenderer")
          }
          getConnectedParticleSystems() {
            return this._scene.mF.filter((vv => vv.emitter === this))
          }
        }, (() => {
          const Pv = "function" === typeof Symbol && Symbol.metadata ? Object.create(Wv[Symbol.metadata] ?? null) : void 0;
          zv = [Fv.i.filter((function() {
            return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0]) && !Array.isArray(arguments.length <= 3 ? void 0 : arguments[3]) && !Array.isArray(arguments.length <= 4 ? void 0 : arguments[4]) && !Array.isArray(arguments.length <= 5 ? void 0 : arguments[5]) && !Array.isArray(arguments.length <= 6 ? void 0 : arguments[6])
          }))], (0, hv.e)(vv, null, zv, {
            kind: "method",
            name: "_ApplySkeleton",
            static: !0,
            private: !1,
            access: {
              has: vv => "_ApplySkeleton" in vv,
              get: vv => vv._ApplySkeleton
            },
            metadata: Pv
          }, null, wv), Pv && Object.defineProperty(vv, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Pv
          })
        })(), vv.OCCLUSION_TYPE_NONE = ((0, hv.f)(vv, wv), 0), vv.OCCLUSION_TYPE_OPTIMISTIC = 1, vv.OCCLUSION_TYPE_STRICT = 2, vv.OCCLUSION_ALGORITHM_TYPE_ACCURATE = 0, vv.OCCLUSION_ALGORITHM_TYPE_CONSERVATIVE = 1, vv.CULLINGSTRATEGY_STANDARD = 0, vv.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY = 1, vv.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION = 2, vv.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION_THEN_BSPHERE_ONLY = 3, vv.DefaultIsPickable = !0, vv
      })(),
      xv = !1;

    function tv() {
      xv || (xv = !0, (0, nv.c)("BABYLON.AbstractMesh", Rv))
    }(wv = Rv.prototype).createOrUpdateSubmeshesOctree ?? (wv.createOrUpdateSubmeshesOctree = (0, Cv.j)("AbstractMesh", "createOrUpdateSubmeshesOctree")), (av = Rv.prototype).getPhysicsImpostor ?? (av.getPhysicsImpostor = (0, Cv.j)("AbstractMesh", "getPhysicsImpostor")), (sv = Rv.prototype).setPhysicsLinkWith ?? (sv.setPhysicsLinkWith = (0, Cv.j)("AbstractMesh", "setPhysicsLinkWith")), Object.getOwnPropertyDescriptor(Rv.prototype, "occlusionRetryCount") || Object.defineProperty(Rv.prototype, "occlusionRetryCount", (0, Cv.g)("AbstractMesh", "occlusionRetryCount")), Object.getOwnPropertyDescriptor(Rv.prototype, "occlusionType") || Object.defineProperty(Rv.prototype, "occlusionType", (0, Cv.g)("AbstractMesh", "occlusionType")), Object.getOwnPropertyDescriptor(Rv.prototype, "occlusionQueryAlgorithmType") || Object.defineProperty(Rv.prototype, "occlusionQueryAlgorithmType", (0, Cv.g)("AbstractMesh", "occlusionQueryAlgorithmType")), Object.getOwnPropertyDescriptor(Rv.prototype, "isOccluded") || Object.defineProperty(Rv.prototype, "isOccluded", (0, Cv.g)("AbstractMesh", "isOccluded")), Object.getOwnPropertyDescriptor(Rv.prototype, "isOcclusionQueryInProgress") || Object.defineProperty(Rv.prototype, "isOcclusionQueryInProgress", (0, Cv.g)("AbstractMesh", "isOcclusionQueryInProgress")), Object.getOwnPropertyDescriptor(Rv.prototype, "forceRenderingWhenOccluded") || Object.defineProperty(Rv.prototype, "forceRenderingWhenOccluded", (0, Cv.g)("AbstractMesh", "forceRenderingWhenOccluded")), Object.getOwnPropertyDescriptor(Rv.prototype, "occlusionForRenderPassId") || Object.defineProperty(Rv.prototype, "occlusionForRenderPassId", (0, Cv.g)("AbstractMesh", "occlusionForRenderPassId")), Object.getOwnPropertyDescriptor(Rv.prototype, "decalMap") || Object.defineProperty(Rv.prototype, "decalMap", (0, Cv.g)("AbstractMesh", "decalMap")), Object.getOwnPropertyDescriptor(Rv.prototype, "lV") || Object.defineProperty(Rv.prototype, "lV", (0, Cv.g)("AbstractMesh", "lV")), Object.getOwnPropertyDescriptor(Rv.prototype, "physicsImpostor") || Object.defineProperty(Rv.prototype, "physicsImpostor", (0, Cv.g)("AbstractMesh", "physicsImpostor")), Object.getOwnPropertyDescriptor(Rv.prototype, "showBoundingBox") || Object.defineProperty(Rv.prototype, "showBoundingBox", (0, Cv.g)("AbstractMesh", "showBoundingBox")), Object.getOwnPropertyDescriptor(Rv.prototype, "edgesRenderer") || Object.defineProperty(Rv.prototype, "edgesRenderer", (0, Cv.g)("AbstractMesh", "edgesRenderer")), Object.getOwnPropertyDescriptor(Rv.prototype, "renderOutline") || Object.defineProperty(Rv.prototype, "renderOutline", (0, Cv.g)("AbstractMesh", "renderOutline")), Object.getOwnPropertyDescriptor(Rv.prototype, "renderOverlay") || Object.defineProperty(Rv.prototype, "renderOverlay", (0, Cv.g)("AbstractMesh", "renderOverlay"))
  },
  39728: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => iv
    });
    var hv = Pv(36594),
      Sv = Pv(36751),
      ev = Pv(39720),
      gv = Pv(39441),
      pv = Pv(39598),
      dv = Pv(39736),
      Nv = Pv(39609),
      lv = Pv(39399),
      Tv = Pv(38209),
      Wv = Pv(39318),
      wv = Pv(39616),
      av = Pv(36615),
      sv = Pv(39745),
      Cv = Pv(39361);
    class iv {
      get boundingBias() {
        return this._boundingBias
      }
      set boundingBias(vv) {
        this._boundingBias ? this._boundingBias.Vzv(vv) : this._boundingBias = vv.clone(), this._updateBoundingInfo(!0, null)
      }
      static CreateGeometryForMesh(vv) {
        const zv = new iv(iv.RandomId(), vv.rD());
        return zv.applyToMesh(vv), zv
      }
      get meshes() {
        return this._meshes
      }
      constructor(vv, zv, Pv) {
        let Sv = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          ev = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          gv = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        this.delayLoadState = 0, this._totalVertices = 0, this._isDisposed = !1, this._extend = {
          minimum: new hv.l(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE),
          maximum: new hv.l(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE)
        }, this._indexBufferIsUpdatable = !1, this._positionsCache = [], this._parentContainer = null, this.useBoundingInfoFromGeometry = !1, this._scene = zv || av.e.LastCreatedScene, this._scene && (this.id = vv, this.uniqueId = this._scene.getUniqueId(), this._engine = this._scene.ma(), this._meshes = [], this._vertexBuffers = {}, this._indices = [], this._updatable = Sv, null !== gv && (this._totalVertices = gv), Pv ? this.setAllVerticesData(Pv, Sv) : null === gv && (this._totalVertices = 0), this._engine.getCaps().vertexArrayObject && (this._vertexArrayObjects = {}), ev && (this.applyToMesh(ev), ev.computeWorldMatrix(!0)))
      }
      get extend() {
        return this._extend
      }
      rD() {
        return this._scene
      }
      ma() {
        return this._engine
      }
      isReady() {
        return 1 === this.delayLoadState || 0 === this.delayLoadState
      }
      get doNotSerialize() {
        for (let vv = 0; vv < this._meshes.length; vv++)
          if (!this._meshes[vv].doNotSerialize) return !1;
        return !0
      }
      _rebuild() {
        this._vertexArrayObjects && (this._vertexArrayObjects = {}), 0 !== this._meshes.length && this._indices && (this._indexBuffer = this._engine.createIndexBuffer(this._indices, this._updatable, "Geometry_" + this.id + "_IndexBuffer"));
        const vv = new Set;
        for (const zv in this._vertexBuffers) vv.add(this._vertexBuffers[zv].getWrapperBuffer());
        vv.forEach((vv => {
          vv._rebuild()
        }))
      }
      setAllVerticesData(vv, zv) {
        vv.applyToGeometry(this, zv), this._notifyUpdate()
      }
      setVerticesData(vv, zv) {
        let Pv = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          hv = arguments.length > 3 ? arguments[3] : void 0;
        Pv && Array.isArray(zv) && (zv = new Float32Array(zv));
        const Sv = new gv.k(this._engine, zv, vv, {
          updatable: Pv,
          postponeInternalCreation: 0 === this._meshes.length,
          stride: hv,
          label: "Geometry_" + this.id + "_" + vv
        });
        this.setVerticesBuffer(Sv)
      }
      removeVerticesData(vv) {
        this._vertexBuffers[vv] && (this._vertexBuffers[vv].dispose(), delete this._vertexBuffers[vv]), this._vertexArrayObjects && this._disposeVertexArrayObjects()
      }
      setVerticesBuffer(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Pv = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        const Sv = vv.getKind();
        this._vertexBuffers[Sv] && Pv && this._vertexBuffers[Sv].dispose(), vv._buffer && vv._ownsBuffer && vv._buffer._increaseReferences(), this._vertexBuffers[Sv] = vv;
        const ev = this._meshes,
          pv = ev.length;
        if (Sv === gv.k.PositionKind) {
          this._totalVertices = zv ?? vv._maxVerticesCount, this._updateExtend(this.useBoundingInfoFromGeometry && this._boundingInfo ? null : vv.getFloatData(this._totalVertices)), this._resetPointsArrayCache();
          const Pv = this._extend && this._extend.minimum || new hv.l(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE),
            Sv = this._extend && this._extend.maximum || new hv.l(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
          for (let vv = 0; vv < pv; vv++) {
            const zv = ev[vv];
            zv.buildBoundingInfo(Pv, Sv), zv._createGlobalSubMesh(zv.isUnIndexed), zv.computeWorldMatrix(!0), zv.synchronizeInstances()
          }
        }
        this._notifyUpdate(Sv)
      }
      updateVerticesDataDirectly(vv, zv, Pv) {
        let hv = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const Sv = this.getVertexBuffer(vv);
        Sv && (Sv.updateDirectly(zv, Pv, hv), this._notifyUpdate(vv))
      }
      updateVerticesData(vv, zv) {
        let Pv = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const hv = this.getVertexBuffer(vv);
        hv && (hv.update(zv), vv === gv.k.PositionKind && this._updateBoundingInfo(Pv, zv), this._notifyUpdate(vv))
      }
      _updateBoundingInfo(vv, zv) {
        if (vv && this._updateExtend(zv), this._resetPointsArrayCache(), vv) {
          const vv = this._meshes;
          for (const zv of vv) {
            zv.hasBoundingInfo ? zv.cV().reConstruct(this._extend.minimum, this._extend.maximum) : zv.buildBoundingInfo(this._extend.minimum, this._extend.maximum);
            const vv = zv.sF;
            for (const zv of vv) zv.refreshBoundingInfo()
          }
        }
      }
      _bind(vv, zv, Pv, hv) {
        if (!vv) return;
        void 0 === zv && (zv = this._indexBuffer);
        const Sv = this.getVertexBuffers();
        if (!Sv) return;
        if (zv != this._indexBuffer || !this._vertexArrayObjects && !hv) return void this._engine.bindBuffers(Sv, zv, vv, Pv);
        const ev = hv || this._vertexArrayObjects,
          gv = this._engine;
        ev[vv.key] || (ev[vv.key] = gv.recordVertexArrayObject(Sv, zv, vv, Pv)), gv.bindVertexArrayObject(ev[vv.key], zv)
      }
      getTotalVertices() {
        return this.isReady() ? this._totalVertices : 0
      }
      getVerticesData(vv, zv, Pv) {
        const hv = this.getVertexBuffer(vv);
        return hv ? hv.getFloatData(this._totalVertices, Pv || zv && 1 !== this._meshes.length) : null
      }
      copyVerticesData(vv, zv) {
        const Pv = this.getVertexBuffer(vv);
        if (!Pv) return;
        zv[vv] || (zv[vv] = new Float32Array(this._totalVertices * Pv.getSize()));
        const hv = Pv.getData();
        hv && (0, Cv.g)(hv, Pv.getSize(), Pv.type, Pv.byteOffset, Pv.byteStride, Pv.normalized, this._totalVertices, zv[vv])
      }
      isVertexBufferUpdatable(vv) {
        const zv = this._vertexBuffers[vv];
        return !!zv && zv.isUpdatable()
      }
      getVertexBuffer(vv) {
        return this.isReady() ? this._vertexBuffers[vv] : null
      }
      getVertexBuffers() {
        return this.isReady() ? this._vertexBuffers : null
      }
      isVerticesDataPresent(vv) {
        return this._vertexBuffers ? void 0 !== this._vertexBuffers[vv] : !!this._delayInfo && -1 !== this._delayInfo.indexOf(vv)
      }
      getVerticesDataKinds() {
        const vv = [];
        let zv;
        if (!this._vertexBuffers && this._delayInfo)
          for (zv in this._delayInfo) vv.push(zv);
        else
          for (zv in this._vertexBuffers) vv.push(zv);
        return vv
      }
      updateIndices(vv, zv) {
        let Pv = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this._indexBuffer)
          if (this._indexBufferIsUpdatable) {
            const hv = vv.length !== this._indices.length;
            if (Pv || (this._indices = vv.slice()), this._engine.updateDynamicIndexBuffer(this._indexBuffer, vv, zv), hv)
              for (const vv of this._meshes) vv._createGlobalSubMesh(!0)
          } else this.setIndices(vv, null, !0)
      }
      setIndexBuffer(vv, zv, Pv) {
        let hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._indices = [], this._indexBufferIsUpdatable = !1, this._indexBuffer = vv, this._totalVertices = zv, this._totalIndices = Pv, vv.is32Bits = null === hv ? zv > 65535 : hv;
        for (const Sv of this._meshes) Sv._createGlobalSubMesh(!0), Sv.synchronizeInstances();
        this._notifyUpdate()
      }
      setIndices(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Pv = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          hv = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this._indexBuffer && this._engine._releaseBuffer(this._indexBuffer), this._indices = vv, this._indexBufferIsUpdatable = Pv, 0 !== this._meshes.length && this._indices && (this._indexBuffer = this._engine.createIndexBuffer(this._indices, Pv, "Geometry_" + this.id + "_IndexBuffer")), void 0 != zv && (this._totalVertices = zv);
        for (const Sv of this._meshes) Sv._createGlobalSubMesh(!hv), Sv.synchronizeInstances();
        this._notifyUpdate()
      }
      getTotalIndices() {
        return this.isReady() ? void 0 !== this._totalIndices ? this._totalIndices : this._indices.length : 0
      }
      dPv(vv, zv) {
        if (!this.isReady()) return null;
        const Pv = this._indices;
        return zv || vv && 1 !== this._meshes.length ? Pv.slice() : Pv
      }
      getIndexBuffer() {
        return this.isReady() ? this._indexBuffer : null
      }
      _releaseVertexArrayObject() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        vv && this._vertexArrayObjects && this._vertexArrayObjects[vv.key] && (this._engine.releaseVertexArrayObject(this._vertexArrayObjects[vv.key]), delete this._vertexArrayObjects[vv.key])
      }
      releaseForMesh(vv, zv) {
        const Pv = this._meshes,
          hv = Pv.indexOf(vv); - 1 !== hv && (Pv.splice(hv, 1), this._vertexArrayObjects && vv._invalidateInstanceVertexArrayObject(), vv._geometry = null, 0 === Pv.length && zv && this.dispose())
      }
      applyToMesh(vv) {
        if (vv._geometry === this) return;
        const zv = vv._geometry;
        zv && zv.releaseForMesh(vv), this._vertexArrayObjects && vv._invalidateInstanceVertexArrayObject();
        const Pv = this._meshes;
        vv._geometry = this, vv._internalAbstractMeshDataInfo._positions = null, this._scene.pushGeometry(this), Pv.push(vv), this.isReady() ? this._applyToMesh(vv) : this._boundingInfo && vv.setBoundingInfo(this._boundingInfo)
      }
      _updateExtend() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (this.useBoundingInfoFromGeometry && this._boundingInfo) this._extend = {
          minimum: this._boundingInfo.minimum.clone(),
          maximum: this._boundingInfo.maximum.clone()
        };
        else {
          if (!vv && (vv = this.getVerticesData(gv.k.PositionKind), !vv)) return;
          this._extend = (0, wv.g)(vv, 0, this._totalVertices, this.boundingBias, 3)
        }
      }
      _applyToMesh(vv) {
        for (const zv in this._vertexBuffers) {
          const Pv = this._vertexBuffers[zv];
          Pv._buffer.getBuffer() || Pv.create(), zv === gv.k.PositionKind && (this._extend || this._updateExtend(), vv.buildBoundingInfo(this._extend.minimum, this._extend.maximum), vv._createGlobalSubMesh(vv.isUnIndexed), vv._updateBoundingInfo())
        }!this._indexBuffer && this._indices && this._indices.length > 0 && (this._indexBuffer = this._engine.createIndexBuffer(this._indices, this._updatable, "Geometry_" + this.id + "_IndexBuffer")), vv._syncGeometryWithMorphTargetManager(), vv.synchronizeInstances()
      }
      _notifyUpdate(vv) {
        this.onGeometryUpdated && this.onGeometryUpdated(this, vv), this._vertexArrayObjects && this._disposeVertexArrayObjects();
        for (const zv of this._meshes) zv._markSubMeshesAsAttributesDirty()
      }
      load(vv, zv) {
        2 !== this.delayLoadState && (this.isReady() ? zv && zv() : (this.delayLoadState = 2, this._queueLoad(vv, zv)))
      }
      _queueLoad(vv, zv) {
        this.delayLoadingFile && (vv.addPendingData(this), (async () => {
          try {
            const Pv = await vv._loadDelayedFileAsync(this.delayLoadingFile, !1, !0);
            if (!this._delayLoadingFunction) return void vv.removePendingData(this);
            this._delayLoadingFunction(JSON.parse(Pv), this), this.delayLoadState = 1, this._delayInfo = [], vv.removePendingData(this);
            const hv = this._meshes,
              Sv = hv.length;
            for (let vv = 0; vv < Sv; vv++) this._applyToMesh(hv[vv]);
            zv && zv()
          } catch (Pv) {
            vv.removePendingData(this), vv.mzv || Tv.d.Error(`Unable to delay load geometry "${this.id}" from "${this.delayLoadingFile}": ${Pv}`)
          }
        })())
      }
      toLeftHanded() {
        const vv = this.dPv(!1);
        if (null != vv && vv.length > 0) {
          for (let zv = 0; zv < vv.length; zv += 3) {
            const Pv = vv[zv + 0];
            vv[zv + 0] = vv[zv + 2], vv[zv + 2] = Pv
          }
          this.setIndices(vv)
        }
        const zv = this.getVerticesData(gv.k.PositionKind, !1);
        if (null != zv && zv.length > 0) {
          for (let vv = 0; vv < zv.length; vv += 3) zv[vv + 2] = -zv[vv + 2];
          this.setVerticesData(gv.k.PositionKind, zv, !1)
        }
        const Pv = this.getVerticesData(gv.k.NormalKind, !1);
        if (null != Pv && Pv.length > 0) {
          for (let vv = 0; vv < Pv.length; vv += 3) Pv[vv + 2] = -Pv[vv + 2];
          this.setVerticesData(gv.k.NormalKind, Pv, !1)
        }
      }
      _resetPointsArrayCache() {
        this._positions = null
      }
      _generatePointsArray() {
        if (this._positions) return !0;
        const vv = this.getVerticesData(gv.k.PositionKind);
        if (!vv || 0 === vv.length) return !1;
        for (let zv = 3 * this._positionsCache.length, Pv = this._positionsCache.length; zv < vv.length; zv += 3, ++Pv) this._positionsCache[Pv] = hv.l.FromArray(vv, zv);
        for (let zv = 0, Pv = 0; zv < vv.length; zv += 3, ++Pv) this._positionsCache[Pv].set(vv[0 + zv], vv[1 + zv], vv[2 + zv]);
        return this._positionsCache.length = vv.length / 3, this._positions = this._positionsCache, !0
      }
      mzv() {
        return this._isDisposed
      }
      _disposeVertexArrayObjects() {
        if (this._vertexArrayObjects) {
          for (const Pv in this._vertexArrayObjects) this._engine.releaseVertexArrayObject(this._vertexArrayObjects[Pv]);
          this._vertexArrayObjects = {};
          const vv = this._meshes,
            zv = vv.length;
          for (let Pv = 0; Pv < zv; Pv++) vv[Pv]._invalidateInstanceVertexArrayObject()
        }
      }
      dispose() {
        const vv = this._meshes,
          zv = vv.length;
        let Pv;
        for (Pv = 0; Pv < zv; Pv++) this.releaseForMesh(vv[Pv]);
        this._meshes.length = 0, this._disposeVertexArrayObjects();
        for (const hv in this._vertexBuffers) this._vertexBuffers[hv].dispose();
        if (this._vertexBuffers = {}, this._totalVertices = 0, this._indexBuffer && this._engine._releaseBuffer(this._indexBuffer), this._indexBuffer = null, this._indices = [], this.delayLoadState = 0, this.delayLoadingFile = null, this._delayLoadingFunction = null, this._delayInfo = [], this._boundingInfo = null, this._scene.removeGeometry(this), this._parentContainer) {
          const vv = this._parentContainer.geometries.indexOf(this);
          vv > -1 && this._parentContainer.geometries.splice(vv, 1), this._parentContainer = null
        }
        this._isDisposed = !0
      }
      copy(vv) {
        const zv = new iv(vv, this._scene),
          Pv = this.dPv(void 0, !0);
        Pv && zv.setIndices(Pv);
        let hv, Sv = !1;
        for (hv in this._vertexBuffers) {
          const vv = this.getVertexBuffer(hv),
            Pv = vv.getData();
          if (!Pv) continue;
          const ev = vv.isUpdatable(),
            pv = vv.getSize(),
            {
              type: dv,
              byteOffset: Nv,
              byteStride: lv,
              normalized: Tv
            } = vv;
          Sv = Sv || ev;
          let Wv = this._totalVertices;
          if (vv.getIsInstanced()) {
            let vv;
            vv = Pv instanceof Array ? 4 * Pv.length : Pv.byteLength, Wv = vv / lv
          }
          const wv = (0, Cv.t)(Pv, pv, dv, Nv, lv, Wv, !0),
            av = new gv.k(this._engine, wv, hv, {
              updatable: ev,
              useBytes: !1,
              stride: pv,
              size: pv,
              offset: 0,
              type: dv,
              normalized: Tv,
              takeBufferOwnership: !0,
              instanced: vv.getIsInstanced()
            });
          zv.setVerticesBuffer(av, Wv)
        }
        for (hv in zv._updatable = Sv, zv.delayLoadState = this.delayLoadState, zv.delayLoadingFile = this.delayLoadingFile, zv._delayLoadingFunction = this._delayLoadingFunction, this._delayInfo) zv._delayInfo = zv._delayInfo || [], zv._delayInfo.push(hv);
        return zv._boundingInfo = new Nv.e(this._extend.minimum, this._extend.maximum), zv
      }
      serialize() {
        const vv = {};
        return vv.id = this.id, vv.uniqueId = this.uniqueId, vv.updatable = this._updatable, Wv.c && Wv.c.HasTags(this) && (vv.tags = Wv.c.GetTags(this)), vv
      }
      _toNumberArray(vv) {
        return Array.isArray(vv) ? vv : Array.prototype.slice.call(vv)
      }
      clearCachedData() {
        this._totalIndices = this._indices.length, this._indices = [], this._resetPointsArrayCache();
        for (const vv in this._vertexBuffers) Object.prototype.hasOwnProperty.call(this._vertexBuffers, vv) && (this._vertexBuffers[vv]._buffer._data = null)
      }
      serializeVerticeData() {
        const vv = this.serialize();
        return this.isVerticesDataPresent(gv.k.PositionKind) && (vv.positions = this._toNumberArray(this.getVerticesData(gv.k.PositionKind)), this.isVertexBufferUpdatable(gv.k.PositionKind) && (vv.positionsUpdatable = !0)), this.isVerticesDataPresent(gv.k.NormalKind) && (vv.normals = this._toNumberArray(this.getVerticesData(gv.k.NormalKind)), this.isVertexBufferUpdatable(gv.k.NormalKind) && (vv.normalsUpdatable = !0)), this.isVerticesDataPresent(gv.k.TangentKind) && (vv.tangents = this._toNumberArray(this.getVerticesData(gv.k.TangentKind)), this.isVertexBufferUpdatable(gv.k.TangentKind) && (vv.tangentsUpdatable = !0)), this.isVerticesDataPresent(gv.k.UVKind) && (vv.uvs = this._toNumberArray(this.getVerticesData(gv.k.UVKind)), this.isVertexBufferUpdatable(gv.k.UVKind) && (vv.uvsUpdatable = !0)), this.isVerticesDataPresent(gv.k.UV2Kind) && (vv.uvs2 = this._toNumberArray(this.getVerticesData(gv.k.UV2Kind)), this.isVertexBufferUpdatable(gv.k.UV2Kind) && (vv.uvs2Updatable = !0)), this.isVerticesDataPresent(gv.k.UV3Kind) && (vv.uvs3 = this._toNumberArray(this.getVerticesData(gv.k.UV3Kind)), this.isVertexBufferUpdatable(gv.k.UV3Kind) && (vv.uvs3Updatable = !0)), this.isVerticesDataPresent(gv.k.UV4Kind) && (vv.uvs4 = this._toNumberArray(this.getVerticesData(gv.k.UV4Kind)), this.isVertexBufferUpdatable(gv.k.UV4Kind) && (vv.uvs4Updatable = !0)), this.isVerticesDataPresent(gv.k.UV5Kind) && (vv.uvs5 = this._toNumberArray(this.getVerticesData(gv.k.UV5Kind)), this.isVertexBufferUpdatable(gv.k.UV5Kind) && (vv.uvs5Updatable = !0)), this.isVerticesDataPresent(gv.k.UV6Kind) && (vv.uvs6 = this._toNumberArray(this.getVerticesData(gv.k.UV6Kind)), this.isVertexBufferUpdatable(gv.k.UV6Kind) && (vv.uvs6Updatable = !0)), this.isVerticesDataPresent(gv.k.ColorKind) && (vv.colors = this._toNumberArray(this.getVerticesData(gv.k.ColorKind)), this.isVertexBufferUpdatable(gv.k.ColorKind) && (vv.colorsUpdatable = !0)), this.isVerticesDataPresent(gv.k.MatricesIndicesKind) && (vv.matricesIndices = this._toNumberArray(this.getVerticesData(gv.k.MatricesIndicesKind)), vv.matricesIndicesExpanded = !0, this.isVertexBufferUpdatable(gv.k.MatricesIndicesKind) && (vv.matricesIndicesUpdatable = !0)), this.isVerticesDataPresent(gv.k.MatricesWeightsKind) && (vv.matricesWeights = this._toNumberArray(this.getVerticesData(gv.k.MatricesWeightsKind)), this.isVertexBufferUpdatable(gv.k.MatricesWeightsKind) && (vv.matricesWeightsUpdatable = !0)), vv.indices = this._toNumberArray(this.dPv()), vv
      }
      static ExtractFromMesh(vv, zv) {
        const Pv = vv._geometry;
        return Pv ? Pv.copy(zv) : null
      }
      static RandomId() {
        return lv.h.RandomId()
      }
      static _GetGeometryByLoadedUniqueId(vv, zv) {
        for (let Pv = 0; Pv < zv.geometries.length; Pv++)
          if (zv.geometries[Pv]._loadedUniqueId === vv) return zv.geometries[Pv];
        return null
      }
      static _ImportGeometry(vv, zv) {
        const Pv = zv.rD(),
          hv = vv.geometryUniqueId,
          ev = vv.geometryId;
        if (hv || ev) {
          const vv = hv ? this._GetGeometryByLoadedUniqueId(hv, Pv) : Pv.getGeometryById(ev);
          vv && vv.applyToMesh(zv)
        } else if (vv instanceof ArrayBuffer) {
          const Pv = zv._binaryInfo;
          if (Pv.positionsAttrDesc && Pv.positionsAttrDesc.count > 0) {
            const hv = new Float32Array(vv, Pv.positionsAttrDesc.offset, Pv.positionsAttrDesc.count);
            zv.setVerticesData(gv.k.PositionKind, hv, !1)
          }
          if (Pv.normalsAttrDesc && Pv.normalsAttrDesc.count > 0) {
            const hv = new Float32Array(vv, Pv.normalsAttrDesc.offset, Pv.normalsAttrDesc.count);
            zv.setVerticesData(gv.k.NormalKind, hv, !1)
          }
          if (Pv.tangetsAttrDesc && Pv.tangetsAttrDesc.count > 0) {
            const hv = new Float32Array(vv, Pv.tangetsAttrDesc.offset, Pv.tangetsAttrDesc.count);
            zv.setVerticesData(gv.k.TangentKind, hv, !1)
          }
          if (Pv.uvsAttrDesc && Pv.uvsAttrDesc.count > 0) {
            const hv = new Float32Array(vv, Pv.uvsAttrDesc.offset, Pv.uvsAttrDesc.count);
            if (sv.b)
              for (let vv = 1; vv < hv.length; vv += 2) hv[vv] = 1 - hv[vv];
            zv.setVerticesData(gv.k.UVKind, hv, !1)
          }
          if (Pv.uvs2AttrDesc && Pv.uvs2AttrDesc.count > 0) {
            const hv = new Float32Array(vv, Pv.uvs2AttrDesc.offset, Pv.uvs2AttrDesc.count);
            if (sv.b)
              for (let vv = 1; vv < hv.length; vv += 2) hv[vv] = 1 - hv[vv];
            zv.setVerticesData(gv.k.UV2Kind, hv, !1)
          }
          if (Pv.uvs3AttrDesc && Pv.uvs3AttrDesc.count > 0) {
            const hv = new Float32Array(vv, Pv.uvs3AttrDesc.offset, Pv.uvs3AttrDesc.count);
            if (sv.b)
              for (let vv = 1; vv < hv.length; vv += 2) hv[vv] = 1 - hv[vv];
            zv.setVerticesData(gv.k.UV3Kind, hv, !1)
          }
          if (Pv.uvs4AttrDesc && Pv.uvs4AttrDesc.count > 0) {
            const hv = new Float32Array(vv, Pv.uvs4AttrDesc.offset, Pv.uvs4AttrDesc.count);
            if (sv.b)
              for (let vv = 1; vv < hv.length; vv += 2) hv[vv] = 1 - hv[vv];
            zv.setVerticesData(gv.k.UV4Kind, hv, !1)
          }
          if (Pv.uvs5AttrDesc && Pv.uvs5AttrDesc.count > 0) {
            const hv = new Float32Array(vv, Pv.uvs5AttrDesc.offset, Pv.uvs5AttrDesc.count);
            if (sv.b)
              for (let vv = 1; vv < hv.length; vv += 2) hv[vv] = 1 - hv[vv];
            zv.setVerticesData(gv.k.UV5Kind, hv, !1)
          }
          if (Pv.uvs6AttrDesc && Pv.uvs6AttrDesc.count > 0) {
            const hv = new Float32Array(vv, Pv.uvs6AttrDesc.offset, Pv.uvs6AttrDesc.count);
            if (sv.b)
              for (let vv = 1; vv < hv.length; vv += 2) hv[vv] = 1 - hv[vv];
            zv.setVerticesData(gv.k.UV6Kind, hv, !1)
          }
          if (Pv.colorsAttrDesc && Pv.colorsAttrDesc.count > 0) {
            const hv = new Float32Array(vv, Pv.colorsAttrDesc.offset, Pv.colorsAttrDesc.count);
            zv.setVerticesData(gv.k.ColorKind, hv, !1, Pv.colorsAttrDesc.stride)
          }
          if (Pv.matricesIndicesAttrDesc && Pv.matricesIndicesAttrDesc.count > 0) {
            const hv = new Int32Array(vv, Pv.matricesIndicesAttrDesc.offset, Pv.matricesIndicesAttrDesc.count),
              Sv = [];
            for (let vv = 0; vv < hv.length; vv++) {
              const zv = hv[vv];
              Sv.push(255 & zv), Sv.push((65280 & zv) >> 8), Sv.push((16711680 & zv) >> 16), Sv.push(zv >> 24 & 255)
            }
            zv.setVerticesData(gv.k.MatricesIndicesKind, Sv, !1)
          }
          if (Pv.matricesIndicesExtraAttrDesc && Pv.matricesIndicesExtraAttrDesc.count > 0) {
            const hv = new Int32Array(vv, Pv.matricesIndicesExtraAttrDesc.offset, Pv.matricesIndicesExtraAttrDesc.count),
              Sv = [];
            for (let vv = 0; vv < hv.length; vv++) {
              const zv = hv[vv];
              Sv.push(255 & zv), Sv.push((65280 & zv) >> 8), Sv.push((16711680 & zv) >> 16), Sv.push(zv >> 24 & 255)
            }
            zv.setVerticesData(gv.k.MatricesIndicesExtraKind, Sv, !1)
          }
          if (Pv.matricesWeightsAttrDesc && Pv.matricesWeightsAttrDesc.count > 0) {
            const hv = new Float32Array(vv, Pv.matricesWeightsAttrDesc.offset, Pv.matricesWeightsAttrDesc.count);
            zv.setVerticesData(gv.k.MatricesWeightsKind, hv, !1)
          }
          if (Pv.indicesAttrDesc && Pv.indicesAttrDesc.count > 0) {
            const hv = new Int32Array(vv, Pv.indicesAttrDesc.offset, Pv.indicesAttrDesc.count);
            zv.setIndices(hv, null)
          }
          if (Pv.subMeshesAttrDesc && Pv.subMeshesAttrDesc.count > 0) {
            const hv = new Int32Array(vv, Pv.subMeshesAttrDesc.offset, 5 * Pv.subMeshesAttrDesc.count);
            zv.sF = [];
            for (let vv = 0; vv < Pv.subMeshesAttrDesc.count; vv++) {
              const Pv = hv[5 * vv + 0],
                Sv = hv[5 * vv + 1],
                ev = hv[5 * vv + 2],
                gv = hv[5 * vv + 3],
                dv = hv[5 * vv + 4];
              pv.c.AddToMesh(Pv, Sv, ev, gv, dv, zv)
            }
          }
        } else if (vv.positions && vv.normals && vv.indices) {
          if (zv.setVerticesData(gv.k.PositionKind, vv.positions, vv.positions._updatable || vv.positionsUpdatable), zv.setVerticesData(gv.k.NormalKind, vv.normals, vv.normals._updatable || vv.normalsUpdatable), vv.tangents && zv.setVerticesData(gv.k.TangentKind, vv.tangents, vv.tangents._updatable || vv.tangentsUpdatable), vv.uvs && zv.setVerticesData(gv.k.UVKind, vv.uvs, vv.uvs._updatable || vv.uvsUpdatable), vv.uvs2 && zv.setVerticesData(gv.k.UV2Kind, vv.uvs2, vv.uvs2._updatable || vv.uvs2Updatable), vv.uvs3 && zv.setVerticesData(gv.k.UV3Kind, vv.uvs3, vv.uvs3._updatable || vv.uvs3Updatable), vv.uvs4 && zv.setVerticesData(gv.k.UV4Kind, vv.uvs4, vv.uvs4._updatable || vv.uvs4Updatable), vv.uvs5 && zv.setVerticesData(gv.k.UV5Kind, vv.uvs5, vv.uvs5._updatable || vv.uvs5Updatable), vv.uvs6 && zv.setVerticesData(gv.k.UV6Kind, vv.uvs6, vv.uvs6._updatable || vv.uvs6Updatable), vv.colors && zv.setVerticesData(gv.k.ColorKind, Sv.e.CheckColors4(vv.colors, vv.positions.length / 3), vv.colors._updatable), vv.matricesIndices)
            if (vv.matricesIndices._isExpanded || vv.matricesIndicesExpanded) delete vv.matricesIndices._isExpanded, delete vv.matricesIndicesExpanded, zv.setVerticesData(gv.k.MatricesIndicesKind, vv.matricesIndices, vv.matricesIndices._updatable || vv.matricesIndicesUpdatable);
            else {
              const Pv = [];
              for (let zv = 0; zv < vv.matricesIndices.length; zv++) {
                const hv = vv.matricesIndices[zv];
                Pv.push(255 & hv), Pv.push((65280 & hv) >> 8), Pv.push((16711680 & hv) >> 16), Pv.push(hv >> 24 & 255)
              }
              zv.setVerticesData(gv.k.MatricesIndicesKind, Pv, vv.matricesIndices._updatable || vv.matricesIndicesUpdatable)
            } if (vv.matricesIndicesExtra)
            if (vv.matricesIndicesExtraExpanded || vv.matricesIndicesExtra._isExpanded) delete vv.matricesIndices._isExpanded, delete vv.matricesIndicesExtraExpanded, zv.setVerticesData(gv.k.MatricesIndicesExtraKind, vv.matricesIndicesExtra, vv.matricesIndicesExtra._updatable || vv.matricesIndicesExtraUpdatable);
            else {
              const Pv = [];
              for (let zv = 0; zv < vv.matricesIndicesExtra.length; zv++) {
                const hv = vv.matricesIndicesExtra[zv];
                Pv.push(255 & hv), Pv.push((65280 & hv) >> 8), Pv.push((16711680 & hv) >> 16), Pv.push(hv >> 24 & 255)
              }
              zv.setVerticesData(gv.k.MatricesIndicesExtraKind, Pv, vv.matricesIndicesExtra._updatable || vv.matricesIndicesExtraUpdatable)
            } vv.matricesWeights && (iv._CleanMatricesWeights(vv, zv), zv.setVerticesData(gv.k.MatricesWeightsKind, vv.matricesWeights, vv.matricesWeights._updatable)), vv.matricesWeightsExtra && zv.setVerticesData(gv.k.MatricesWeightsExtraKind, vv.matricesWeightsExtra, vv.matricesWeights._updatable), zv.setIndices(vv.indices, null)
        }
        if (vv.sF) {
          zv.sF = [];
          for (let Pv = 0; Pv < vv.sF.length; Pv++) {
            const hv = vv.sF[Pv];
            pv.c.AddToMesh(hv.materialIndex, hv.verticesStart, hv.verticesCount, hv.indexStart, hv.indexCount, zv)
          }
        }
        zv._shouldGenerateFlatShading && (zv.convertToFlatShadedMesh(), zv._shouldGenerateFlatShading = !1), zv.computeWorldMatrix(!0), Pv.onMeshImportedObservable.notifyObservers(zv)
      }
      static _CleanMatricesWeights(vv, zv) {
        const Pv = .001;
        if (!dv.e.CleanBoneMatrixWeights) return;
        let hv;
        if (!(vv.skeletonId > -1)) return;
        {
          const Pv = zv.rD().getLastSkeletonById(vv.skeletonId);
          if (!Pv) return;
          hv = Pv.bones.length
        }
        const Sv = zv.getVerticesData(gv.k.MatricesIndicesKind),
          ev = zv.getVerticesData(gv.k.MatricesIndicesExtraKind),
          pv = vv.matricesWeights,
          Nv = vv.matricesWeightsExtra,
          lv = vv.numBoneInfluencer,
          Tv = pv.length;
        for (let gv = 0; gv < Tv; gv += 4) {
          let vv = 0,
            zv = -1;
          for (let hv = 0; hv < 4; hv++) {
            const Sv = pv[gv + hv];
            vv += Sv, Sv < Pv && zv < 0 && (zv = hv)
          }
          if (Nv)
            for (let hv = 0; hv < 4; hv++) {
              const Sv = Nv[gv + hv];
              vv += Sv, Sv < Pv && zv < 0 && (zv = hv + 4)
            }
          if ((zv < 0 || zv > lv - 1) && (zv = lv - 1), vv > Pv) {
            const zv = 1 / vv;
            for (let vv = 0; vv < 4; vv++) pv[gv + vv] *= zv;
            if (Nv)
              for (let vv = 0; vv < 4; vv++) Nv[gv + vv] *= zv
          } else zv >= 4 ? (Nv[gv + zv - 4] = 1 - vv, ev[gv + zv - 4] = hv) : (pv[gv + zv] = 1 - vv, Sv[gv + zv] = hv)
        }
        zv.setVerticesData(gv.k.MatricesIndicesKind, Sv), vv.matricesWeightsExtra && zv.setVerticesData(gv.k.MatricesIndicesExtraKind, ev)
      }
      static Parse(vv, zv, Pv) {
        const Sv = new iv(vv.id, zv, void 0, vv.updatable);
        return Sv._loadedUniqueId = vv.uniqueId, Wv.c && Wv.c.AddTagsTo(Sv, vv.tags), vv.delayLoadingFile ? (Sv.delayLoadState = 4, Sv.delayLoadingFile = Pv + vv.delayLoadingFile, Sv._boundingInfo = new Nv.e(hv.l.FromArray(vv.boundingBoxMinimum), hv.l.FromArray(vv.boundingBoxMaximum)), Sv._delayInfo = [], vv.hasUVs && Sv._delayInfo.push(gv.k.UVKind), vv.hasUVs2 && Sv._delayInfo.push(gv.k.UV2Kind), vv.hasUVs3 && Sv._delayInfo.push(gv.k.UV3Kind), vv.hasUVs4 && Sv._delayInfo.push(gv.k.UV4Kind), vv.hasUVs5 && Sv._delayInfo.push(gv.k.UV5Kind), vv.hasUVs6 && Sv._delayInfo.push(gv.k.UV6Kind), vv.hasColors && Sv._delayInfo.push(gv.k.ColorKind), vv.hasMatricesIndices && Sv._delayInfo.push(gv.k.MatricesIndicesKind), vv.hasMatricesWeights && Sv._delayInfo.push(gv.k.MatricesWeightsKind), Sv._delayLoadingFunction = ev.d.ImportVertexData) : ev.d.ImportVertexData(vv, Sv), zv.pushGeometry(Sv, !0), Sv
      }
    }
  },
  39782: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => Tv,
      c: () => av
    });
    var hv = Pv(36594),
      Sv = Pv(38209),
      ev = Pv(39754),
      gv = Pv(39712),
      pv = Pv(38207),
      dv = Pv(39760),
      Nv = Pv(39441),
      lv = Pv(36631);
    class Tv extends ev.c {
      constructor(vv, zv) {
        super(vv, zv.rD()), this._indexInSourceMeshInstanceArray = -1, this._distanceToCamera = 0, zv.Yu(this), this._sourceMesh = zv, this._unIndexed = zv._unIndexed, this.position.Vzv(zv.position), this.rotation.Vzv(zv.rotation), this.pp.Vzv(zv.pp), zv.rotationQuaternion && (this.rotationQuaternion = zv.rotationQuaternion.clone()), this.animations = zv.animations.slice();
        for (const Pv of zv.getAnimationRanges()) null != Pv && this.createAnimationRange(Pv.name, Pv.from, Pv.to);
        if (this.infiniteDistance = zv.infiniteDistance, this.setPivotMatrix(zv.getPivotMatrix()), zv.skeleton || zv.morphTargetManager || !zv.hasBoundingInfo) this.refreshBoundingInfo(!0, !0);
        else {
          const vv = zv.cV();
          this.buildBoundingInfo(vv.minimum, vv.maximum)
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
      set receiveShadows(vv) {
        this._sourceMesh?.receiveShadows !== vv && Sv.d.Warn("Setting receiveShadows on an instanced mesh has no effect")
      }
      get material() {
        return this._sourceMesh.material
      }
      set material(vv) {
        this._sourceMesh?.material !== vv && Sv.d.Warn("Setting material on an instanced mesh has no effect")
      }
      get visibility() {
        return this._sourceMesh.visibility
      }
      set visibility(vv) {
        this._sourceMesh?.visibility !== vv && Sv.d.Warn("Setting visibility on an instanced mesh has no effect")
      }
      get skeleton() {
        return this._sourceMesh.skeleton
      }
      set skeleton(vv) {
        this._sourceMesh?.skeleton !== vv && Sv.d.Warn("Setting skeleton on an instanced mesh has no effect")
      }
      get renderingGroupId() {
        return this._sourceMesh.renderingGroupId
      }
      set renderingGroupId(vv) {
        this._sourceMesh && vv !== this._sourceMesh.renderingGroupId && Sv.d.Warn("Note - setting renderingGroupId of an instanced mesh has no effect on the scene")
      }
      get meshBlendingTag() {
        return this._sourceMesh.meshBlendingTag
      }
      set meshBlendingTag(vv) {
        this._sourceMesh && vv !== this._sourceMesh.meshBlendingTag && Sv.d.Warn("Setting meshBlendingTag on an instanced mesh has no effect")
      }
      getTotalVertices() {
        return this._sourceMesh ? this._sourceMesh.getTotalVertices() : 0
      }
      getTotalIndices() {
        return this._sourceMesh.getTotalIndices()
      }
      get hhv() {
        return this._sourceMesh
      }
      get geometry() {
        return this._sourceMesh._geometry
      }
      createInstance(vv) {
        return this._sourceMesh.createInstance(vv)
      }
      isReady() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return this._sourceMesh.isReady(vv, !0)
      }
      getVerticesData(vv, zv, Pv) {
        return this._sourceMesh.getVerticesData(vv, zv, Pv)
      }
      copyVerticesData(vv, zv) {
        this._sourceMesh.copyVerticesData(vv, zv)
      }
      getVertexBuffer(vv, zv) {
        return this._sourceMesh.getVertexBuffer(vv, zv)
      }
      setVerticesData(vv, zv, Pv, hv) {
        return this.hhv && this.hhv.setVerticesData(vv, zv, Pv, hv), this.hhv
      }
      updateVerticesData(vv, zv, Pv, hv) {
        return this.hhv && this.hhv.updateVerticesData(vv, zv, Pv, hv), this.hhv
      }
      setIndices(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return this.hhv && this.hhv.setIndices(vv, zv), this.hhv
      }
      isVerticesDataPresent(vv) {
        return this._sourceMesh.isVerticesDataPresent(vv)
      }
      dPv() {
        return this._sourceMesh.dPv()
      }
      get _positions() {
        return this._sourceMesh._positions
      }
      refreshBoundingInfo() {
        let vv, zv = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Pv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.hasBoundingInfo && this.cV().isLocked) return this;
        vv = "object" === typeof zv ? zv : {
          applySkeleton: zv,
          applyMorph: Pv
        };
        const hv = this._sourceMesh.geometry ? this._sourceMesh.geometry.boundingBias : null;
        return this._refreshBoundingInfo(this._sourceMesh._getData(vv, null, Nv.k.PositionKind), hv), this
      }
      _preActivate() {
        return this._currentLOD && this._currentLOD._preActivate(), this
      }
      _activate(vv, zv) {
        if (super._activate(vv, zv), this._sourceMesh.sF || Sv.d.Warn("Instances should only be created for meshes with geometry."), this._currentLOD) {
          if (this._currentLOD._getWorldMatrixDeterminant() >= 0 !== this._getWorldMatrixDeterminant() >= 0) return this._internalAbstractMeshDataInfo._actAsRegularMesh = !0, !0;
          if (this._internalAbstractMeshDataInfo._actAsRegularMesh = !1, this._currentLOD._registerInstanceForRenderId(this, vv), zv) {
            if (!this._currentLOD._internalAbstractMeshDataInfo._isActiveIntermediate) return this._currentLOD._internalAbstractMeshDataInfo._onlyForInstancesIntermediate = !0, !0
          } else if (!this._currentLOD._internalAbstractMeshDataInfo._isActive) return this._currentLOD._internalAbstractMeshDataInfo._onlyForInstances = !0, !0
        }
        return !1
      }
      _postActivate() {
        this._sourceMesh.edgesShareWithInstances && this._sourceMesh._edgesRenderer && this._sourceMesh._edgesRenderer.isEnabled && this._sourceMesh._renderingGroup ? (this._sourceMesh._renderingGroup._edgesRenderers.pushNoDuplicate(this._sourceMesh._edgesRenderer), this._sourceMesh._edgesRenderer.customInstances.push(this.getWorldMatrix())) : this._edgesRenderer && this._edgesRenderer.isEnabled && this._sourceMesh._renderingGroup && this._sourceMesh._renderingGroup._edgesRenderers.push(this._edgesRenderer)
      }
      getWorldMatrix() {
        if (this._currentLOD && this._currentLOD !== this._sourceMesh && this._currentLOD.billboardMode !== dv.h.BILLBOARDMODE_NONE && this._currentLOD._masterMesh !== this) {
          this._billboardWorldMatrix || (this._billboardWorldMatrix = new hv.c);
          const vv = this._currentLOD._masterMesh;
          return this._currentLOD._masterMesh = this, hv.i.fa[7].Vzv(this._currentLOD.position), this._currentLOD.position.set(0, 0, 0), this._billboardWorldMatrix.Vzv(this._currentLOD.computeWorldMatrix(!0)), this._currentLOD.position.Vzv(hv.i.fa[7]), this._currentLOD._masterMesh = vv, this._billboardWorldMatrix
        }
        return super.getWorldMatrix()
      }
      get zK() {
        return !0
      }
      getLOD(vv) {
        if (!vv) return this;
        const zv = this.hhv.getLODLevels();
        if (zv && 0 !== zv.length) {
          const zv = this.cV();
          this._currentLOD = this.hhv.getLOD(vv, zv.tPv)
        } else this._currentLOD = this.hhv;
        return this._currentLOD
      }
      _preActivateForIntermediateRendering(vv) {
        return this.hhv._preActivateForIntermediateRendering(vv)
      }
      _syncSubMeshes() {
        if (this.releaseSubMeshes(), this._sourceMesh.sF)
          for (let vv = 0; vv < this._sourceMesh.sF.length; vv++) this._sourceMesh.sF[vv].clone(this, this._sourceMesh);
        return this
      }
      _generatePointsArray() {
        return this._sourceMesh._generatePointsArray()
      }
      _updateBoundingInfo() {
        return this.hasBoundingInfo ? this.cV().update(this.worldMatrixFromCache) : this.buildBoundingInfo(this.absolutePosition, this.absolutePosition, this.worldMatrixFromCache), this._updateSubMeshesBoundingInfo(this.worldMatrixFromCache), this
      }
      clone(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Pv = arguments.length > 2 ? arguments[2] : void 0;
        const hv = ((arguments.length > 3 ? arguments[3] : void 0) || this._sourceMesh).createInstance(vv);
        if (pv.b.DeepCopy(this, hv, ["name", "sF", "uniqueId", "parent", "lightSources", "receiveShadows", "material", "visibility", "skeleton", "hhv", "zK", "facetNb", "isFacetDataEnabled", "isBlocked", "useBones", "Phv", "collider", "edgesRenderer", "forward", "up", "right", "absolutePosition", "absoluteScaling", "absoluteRotationQuaternion", "Jev", "nonUniformScaling", "behaviors", "worldMatrixFromCache", "hasThinInstances", "hasBoundingInfo", "geometry"], []), zv && (hv.parent = zv), !Pv)
          for (let Sv = 0; Sv < this.rD().meshes.length; Sv++) {
            const vv = this.rD().meshes[Sv];
            vv.parent === this && vv.clone(vv.name, hv)
          }
        return hv.computeWorldMatrix(!0), this.onClonedObservable.notifyObservers(hv), hv
      }
      dispose(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._sourceMesh.ku(this), super.dispose(vv, zv)
      }
      _serializeAsParent(vv) {
        super._serializeAsParent(vv), vv.parentId = this._sourceMesh.uniqueId, vv.parentInstanceIndex = this._indexInSourceMeshInstanceArray
      }
      instantiateHierarchy() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          zv = arguments.length > 1 ? arguments[1] : void 0,
          Pv = arguments.length > 2 ? arguments[2] : void 0;
        const hv = this.clone("Clone of " + (this.name || this.id), vv || this.parent, !0, zv && zv.newSourcedMesh);
        hv && Pv && Pv(this, hv);
        for (const Sv of this.getChildTransformNodes(!0)) Sv.instantiateHierarchy(hv, zv, Pv);
        return hv
      }
    }
    let Wv = !1;

    function wv(vv, zv, Pv, hv, Sv) {
      for (let ev = 0; ev < zv.length; ev++) {
        const gv = vv[zv[ev]] ?? 0,
          pv = Sv + Pv[ev];
        gv.toArray ? gv.toArray(hv, pv) : gv.copyToArray ? gv.copyToArray(hv, pv) : hv[pv] = gv
      }
    }

    function av() {
      Wv || (Wv = !0, gv.c._instancedMeshFactory = (vv, zv) => {
        const Pv = new Tv(vv, zv);
        if (zv.lV) {
          Pv.lV = {};
          for (const vv in zv.lV) Pv.lV[vv] = zv.lV[vv]
        }
        return Pv
      }, gv.c.prototype.hV = function(vv, zv) {
        if (!this.lV) {
          this.lV = {};
          for (const vv of this.instances) vv.lV = {}
        }
        this._userInstancedBuffersStorage || (this._userInstancedBuffersStorage = {
          data: {},
          vertexBuffers: {},
          strides: {},
          sizes: {},
          vertexArrayObjects: this.ma().getCaps().vertexArrayObject ? {} : void 0
        }), this.lV[vv] = null, this._userInstancedBuffersStorage.strides[vv] = zv;
        const Pv = this._userInstancedBuffersStorage;
        Pv.interleavedKinds = [], Pv.interleavedOffsets = [], Pv.interleavedRowStride = 0;
        for (const hv in Pv.strides) Pv.interleavedKinds.push(hv), Pv.interleavedOffsets.push(Pv.interleavedRowStride), Pv.interleavedRowStride += Pv.strides[hv];
        Pv.interleavedData = new Float32Array(32 * Pv.interleavedRowStride);
        for (const hv in Pv.interleavedBuffers) Pv.interleavedBuffers[hv].buffer.dispose();
        Pv.interleavedBuffers = {}, Pv.vertexBuffers[vv] = null;
        for (const hv of this.instances) hv.lV[vv] = null;
        this._invalidateInstanceVertexArrayObject(), this._markSubMeshesAsAttributesDirty()
      }, gv.c.prototype._processInstancedBuffers = function(vv, zv) {
        const Pv = this._userInstancedBuffersStorage,
          hv = Pv.interleavedRowStride;
        if (!hv) return;
        const Sv = vv ? vv.length : 0,
          ev = (Sv + 1) * hv;
        let gv = Pv.interleavedData;
        if (gv.length < ev) {
          let vv = gv.length;
          for (; vv < ev;) vv *= 2;
          gv = Pv.interleavedData = new Float32Array(vv)
        }
        const pv = Pv.interleavedKinds,
          dv = Pv.interleavedOffsets;
        let lv = 0;
        zv && (wv(this.lV, pv, dv, gv, lv), lv += hv);
        for (let Nv = 0; Nv < Sv; Nv++) wv(vv[Nv].lV, pv, dv, gv, lv), lv += hv;
        let Tv = "shared",
          Wv = Pv.vertexBuffers;
        this._instanceDataStorage.useMonoDataStorageRenderPass || (Tv = this._instanceDataStorage.engine.currentRenderPassId, Pv.renderPasses || (Pv.renderPasses = {}), Pv.renderPasses[Tv] || (Pv.renderPasses[Tv] = {}), Wv = Pv.renderPasses[Tv]);
        const av = Pv.interleavedBuffers[Tv];
        let sv = !av || av.data !== gv;
        for (let Nv = 0; !sv && Nv < pv.length; Nv++) sv = !Wv[pv[Nv]];
        if (!sv) return void av.buffer.updateDirectly(gv, 0);
        av?.buffer.dispose();
        const Cv = new Nv.c(this.ma(), gv, !0, hv, !1, !0);
        for (let Nv = 0; Nv < pv.length; Nv++) {
          const vv = pv[Nv],
            zv = Cv.createVertexBuffer(vv, dv[Nv], Pv.strides[vv]);
          zv.hashCode += zv.byteOffset * 2 ** 24, Wv[vv] = zv
        }
        Pv.interleavedBuffers[Tv] = {
          buffer: Cv,
          data: gv
        }, this._invalidateInstanceVertexArrayObject()
      }, gv.c.prototype._invalidateInstanceVertexArrayObject = function() {
        if (this._userInstancedBuffersStorage && void 0 !== this._userInstancedBuffersStorage.vertexArrayObjects) {
          for (const vv in this._userInstancedBuffersStorage.vertexArrayObjects) this.ma().releaseVertexArrayObject(this._userInstancedBuffersStorage.vertexArrayObjects[vv]);
          this._userInstancedBuffersStorage.vertexArrayObjects = {}
        }
      }, gv.c.prototype._disposeInstanceSpecificData = function() {
        for (const zv in this._instanceDataStorage.renderPasses) this._instanceDataStorage.renderPasses[zv].instancesBuffer?.dispose();
        for (this._instanceDataStorage.renderPasses = {}, this._instanceDataStorage.dataStorageRenderPass?.instancesBuffer?.dispose(); this.instances.length;) this.instances[0].dispose();
        for (const zv in this.lV) this._userInstancedBuffersStorage.vertexBuffers[zv] && this._userInstancedBuffersStorage.vertexBuffers[zv].dispose();
        const vv = this._userInstancedBuffersStorage?.interleavedBuffers;
        if (vv) {
          for (const zv in vv) vv[zv].buffer.dispose();
          this._userInstancedBuffersStorage.interleavedBuffers = {}
        }
        this._invalidateInstanceVertexArrayObject(), this.lV = {}
      }, (0, lv.c)("BABYLON.InstancedMesh", Tv))
    }
  },
  39712: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => kv,
      f: () => uv,
      i: () => yv
    });
    var hv, Sv, ev, gv, pv, dv, Nv, lv, Tv, Wv, wv, av, sv, Cv, iv = Pv(36618),
      cv = Pv(39399),
      Gv = Pv(39338),
      mv = Pv(38207),
      jv = Pv(39318),
      fv = Pv(39716),
      Fv = Pv(39515),
      Yv = Pv(36594),
      nv = Pv(36751),
      Ov = Pv(39518),
      Dv = Pv(39441),
      Kv = Pv(39720),
      Vv = Pv(39728),
      Uv = Pv(39754),
      Rv = Pv(39598),
      xv = Pv(39593),
      tv = Pv(39686),
      qv = Pv(39767),
      Iv = Pv(39736),
      Qv = Pv(39312),
      Zv = Pv(38209),
      Av = Pv(36631),
      Lv = Pv(39190),
      Hv = Pv(39477);
    class Mv {
      constructor(vv, zv) {
        this.distanceOrScreenCoverage = vv, this.mesh = zv
      }
    }
    class yv {}
    class Bv {
      constructor() {
        this.batchCache = new Ev(this), this.batchCacheReplacementModeInFrozenMode = new Ev(this), this.instancesBufferSize = 2048
      }
    }
    class Jv {
      constructor() {
        this.renderPasses = {}
      }
    }
    class Ev {
      constructor(vv) {
        this.parent = vv, this.mustReturn = !1, this.visibleInstances = new Array, this.renderSelf = [], this.hardwareInstancedRendering = []
      }
    }
    class ov {
      constructor() {
        this.instancesCount = 0, this.matrixBuffer = null, this.previousMatrixBuffer = null, this.matrixBufferSize = 512, this.matrixData = null, this.boundingVectors = [], this.worldMatrices = null
      }
    }
    class bv {
      constructor() {
        this._areNormalsFrozen = !1, this._source = null, this.meshMap = null, this._preActivateId = -1, this._LODLevels = new Array, this._useLODScreenCoverage = !1, this._effectiveMaterial = null, this._forcedInstanceCount = 0, this._overrideRenderingFillMode = null
      }
    }
    const rv = {
      source: null,
      parent: null,
      doNotCloneChildren: !1,
      clonePhysicsImpostor: !0,
      cloneThinInstances: !1
    };
    class kv extends Uv.c {
      static _GetDefaultSideOrientation(vv) {
        return vv || kv.FRONTSIDE
      }
      get useLODScreenCoverage() {
        return this._internalMeshDataInfo._useLODScreenCoverage
      }
      set useLODScreenCoverage(vv) {
        this._internalMeshDataInfo._useLODScreenCoverage = vv, this._sortLODLevels()
      }
      get computeBonesUsingShaders() {
        return this._internalAbstractMeshDataInfo._computeBonesUsingShaders
      }
      set computeBonesUsingShaders(vv) {
        this._internalAbstractMeshDataInfo._computeBonesUsingShaders !== vv && (vv && this._internalMeshDataInfo._sourcePositions && (this.setVerticesData(Dv.k.PositionKind, this._internalMeshDataInfo._sourcePositions, !0), this._internalMeshDataInfo._sourceNormals && this.setVerticesData(Dv.k.NormalKind, this._internalMeshDataInfo._sourceNormals, !0), this._internalMeshDataInfo._sourcePositions = null, this._internalMeshDataInfo._sourceNormals = null), this._internalAbstractMeshDataInfo._computeBonesUsingShaders = vv, this._markSubMeshesAsAttributesDirty())
      }
      get onBeforeRenderObservable() {
        return this._internalMeshDataInfo._onBeforeRenderObservable || (this._internalMeshDataInfo._onBeforeRenderObservable = new iv.c), this._internalMeshDataInfo._onBeforeRenderObservable
      }
      get onBeforeBindObservable() {
        return this._internalMeshDataInfo._onBeforeBindObservable || (this._internalMeshDataInfo._onBeforeBindObservable = new iv.c), this._internalMeshDataInfo._onBeforeBindObservable
      }
      get onAfterRenderObservable() {
        return this._internalMeshDataInfo._onAfterRenderObservable || (this._internalMeshDataInfo._onAfterRenderObservable = new iv.c), this._internalMeshDataInfo._onAfterRenderObservable
      }
      get onBetweenPassObservable() {
        return this._internalMeshDataInfo._onBetweenPassObservable || (this._internalMeshDataInfo._onBetweenPassObservable = new iv.c), this._internalMeshDataInfo._onBetweenPassObservable
      }
      get onBeforeDrawObservable() {
        return this._internalMeshDataInfo._onBeforeDrawObservable || (this._internalMeshDataInfo._onBeforeDrawObservable = new iv.c), this._internalMeshDataInfo._onBeforeDrawObservable
      }
      set onBeforeDraw(vv) {
        this._onBeforeDrawObserver && this.onBeforeDrawObservable.remove(this._onBeforeDrawObserver), this._onBeforeDrawObserver = this.onBeforeDrawObservable.add(vv)
      }
      get Phv() {
        return this.instances.length > 0
      }
      get hasThinInstances() {
        return (this.forcedInstanceCount || this._thinInstanceDataStorage.instancesCount || 0) > 0
      }
      get forcedInstanceCount() {
        return this._internalMeshDataInfo._forcedInstanceCount
      }
      set forcedInstanceCount(vv) {
        this._internalMeshDataInfo._forcedInstanceCount = vv
      }
      get sideOrientation() {
        return this._internalMeshDataInfo._sideOrientation
      }
      set sideOrientation(vv) {
        this._internalMeshDataInfo._sideOrientation = vv, this._internalAbstractMeshDataInfo._sideOrientationHint = this._scene.useRightHandedSystem && 1 === vv || !this._scene.useRightHandedSystem && 0 === vv
      }
      get _effectiveSideOrientation() {
        return this._internalMeshDataInfo._effectiveSideOrientation
      }
      get overrideMaterialSideOrientation() {
        return this.sideOrientation
      }
      set overrideMaterialSideOrientation(vv) {
        this.sideOrientation = vv, this.material && (this.material.sideOrientation = null)
      }
      get overrideRenderingFillMode() {
        return this._internalMeshDataInfo._overrideRenderingFillMode
      }
      set overrideRenderingFillMode(vv) {
        this._internalMeshDataInfo._overrideRenderingFillMode = vv
      }
      get material() {
        return this._internalAbstractMeshDataInfo._material
      }
      set material(vv) {
        vv && (this.material && null === this.material.sideOrientation || this._internalAbstractMeshDataInfo._sideOrientationHint) && (vv.sideOrientation = null), this._setMaterial(vv)
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
      set isUnIndexed(vv) {
        this._unIndexed !== vv && (this._unIndexed = vv, this._markSubMeshesAsAttributesDirty())
      }
      get worldMatrixInstancedBuffer() {
        const vv = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._instanceDataStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId];
        return vv ? vv.instancesData : void 0
      }
      get previousWorldMatrixInstancedBuffer() {
        const vv = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._instanceDataStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId];
        return vv ? vv.instancesPreviousData : void 0
      }
      get manualUpdateOfWorldMatrixInstancedBuffer() {
        return this._instanceDataStorage.manualUpdate
      }
      set manualUpdateOfWorldMatrixInstancedBuffer(vv) {
        this._instanceDataStorage.manualUpdate = vv
      }
      get manualUpdateOfPreviousWorldMatrixInstancedBuffer() {
        return this._instanceDataStorage.previousManualUpdate
      }
      set manualUpdateOfPreviousWorldMatrixInstancedBuffer(vv) {
        this._instanceDataStorage.previousManualUpdate = vv
      }
      get forceWorldMatrixInstancedBufferUpdate() {
        return this._instanceDataStorage.forceMatrixUpdates
      }
      set forceWorldMatrixInstancedBufferUpdate(vv) {
        this._instanceDataStorage.forceMatrixUpdates = vv
      }
      _copySource(vv, zv) {
        let Pv = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          hv = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const Sv = this.rD();
        if (vv._geometry && vv._geometry.applyToMesh(this), mv.b.DeepCopy(vv, this, ["name", "material", "skeleton", "instances", "parent", "uniqueId", "source", "metadata", "morphTargetManager", "Phv", "worldMatrixInstancedBuffer", "previousWorldMatrixInstancedBuffer", "hasLODLevels", "geometry", "isBlocked", "areNormalsFrozen", "facetNb", "isFacetDataEnabled", "lightSources", "useBones", "zK", "collider", "edgesRenderer", "forward", "up", "right", "absolutePosition", "absoluteScaling", "absoluteRotationQuaternion", "Jev", "nonUniformScaling", "behaviors", "worldMatrixFromCache", "hasThinInstances", "cloneMeshMap", "hasBoundingInfo", "physicsBody", "physicsImpostor"], ["_poseMatrix"]), this._internalMeshDataInfo._source = vv, Sv.useClonedMeshMap && (vv._internalMeshDataInfo.meshMap || (vv._internalMeshDataInfo.meshMap = {}), vv._internalMeshDataInfo.meshMap[this.uniqueId] = this), this._originalBuilderSideOrientation = vv._originalBuilderSideOrientation, this._creationDataStorage = vv._creationDataStorage, vv._ranges) {
          const zv = vv._ranges;
          for (const vv in zv) Object.prototype.hasOwnProperty.call(zv, vv) && zv[vv] && this.createAnimationRange(vv, zv[vv].from, zv[vv].to)
        }
        if (vv.metadata && vv.metadata.clone ? this.metadata = vv.metadata.clone() : this.metadata = vv.metadata, this._internalMetadata = vv._internalMetadata, this.meshBlendingTag = vv.meshBlendingTag, jv.c && jv.c.HasTags(vv) && jv.c.AddTagsTo(this, jv.c.GetTags(vv, !0)), this.uF(vv.isEnabled(!1)), this.parent = vv.parent, this.setPivotMatrix(vv.getPivotMatrix(), this._postMultiplyPivotMatrix), this.id = this.name + "." + vv.id, this.material = vv.material, !zv) {
          const Sv = vv.getDescendants(!0);
          for (let vv = 0; vv < Sv.length; vv++) {
            const ev = Sv[vv];
            ev._isMesh ? (rv.parent = this, rv.doNotCloneChildren = zv, rv.clonePhysicsImpostor = Pv, rv.cloneThinInstances = hv, ev.clone(this.name + "." + ev.name, rv)) : ev.clone && ev.clone(this.name + "." + ev.name, this)
          }
        }
        if (vv.morphTargetManager && (this.morphTargetManager = vv.morphTargetManager), (0, Lv.e)(Sv.getPhysicsEngine)) {
          const zv = Sv.getPhysicsEngine();
          if (Pv && zv)
            if (1 === zv.getPluginVersion()) {
              const Pv = zv.getImpostorForPhysicsObject(vv);
              Pv && (this.physicsImpostor = Pv.clone(this))
            } else 2 === zv.getPluginVersion() && vv.physicsBody && vv.physicsBody.clone(this)
        }
        for (let ev = 0; ev < Sv.mF.length; ev++) {
          const zv = Sv.mF[ev];
          zv.emitter === vv && zv.clone(zv.name, this)
        }
        if (this.skeleton = vv.skeleton, hv && (vv._thinInstanceDataStorage.matrixData ? (this.N_("matrix", new Float32Array(vv._thinInstanceDataStorage.matrixData), 16, !vv._thinInstanceDataStorage.matrixBuffer.isUpdatable()), this._thinInstanceDataStorage.matrixBufferSize = vv._thinInstanceDataStorage.matrixBufferSize, this._thinInstanceDataStorage.instancesCount = vv._thinInstanceDataStorage.instancesCount) : this._thinInstanceDataStorage.matrixBufferSize = vv._thinInstanceDataStorage.matrixBufferSize, vv._userThinInstanceBuffersStorage)) {
          const zv = vv._userThinInstanceBuffersStorage;
          for (const vv in zv.data) this.N_(vv, new Float32Array(zv.data[vv]), zv.strides[vv], !zv.vertexBuffers?.[vv]?.isUpdatable()), this._userThinInstanceBuffersStorage.sizes[vv] = zv.sizes[vv]
        }
        this.refreshBoundingInfo(!0, !0), this.computeWorldMatrix(!0)
      }
      constructor(vv) {
        let zv, Pv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          hv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Sv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          ev = arguments.length > 4 ? arguments[4] : void 0,
          gv = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        super(vv, Pv), this._internalMeshDataInfo = new bv, this.delayLoadState = 0, this.instances = [], this._creationDataStorage = null, this._geometry = null, this._thinInstanceDataStorage = new ov, this._shouldGenerateFlatShading = !1, this._originalBuilderSideOrientation = kv.DEFAULTSIDE, this.ignoreCameraMaxZ = !1, Pv = this.rD(), this._instanceDataStorage = new Jv, this._instanceDataStorage.engine = Pv.ma(), this._instanceDataStorage.useMonoDataStorageRenderPass = !this._instanceDataStorage.engine.isWebGPU, this._instanceDataStorage.useMonoDataStorageRenderPass && (this._instanceDataStorage.dataStorageRenderPass = new Bv), this._scene.useRightHandedSystem ? this.sideOrientation = 0 : this.sideOrientation = 1, this._onBeforeDraw = (vv, zv, Pv) => {
          vv && Pv && (this._uniformBuffer ? this.transferToEffect(zv) : Pv.bindOnlyWorldMatrix(zv))
        };
        let pv = !1;
        if (hv && void 0 === hv._addToSceneRootNodes) {
          const vv = hv;
          zv = vv.parent ?? null, Sv = vv.source ?? null, ev = vv.doNotCloneChildren ?? !1, gv = vv.clonePhysicsImpostor ?? !0, pv = vv.cloneThinInstances ?? !1
        } else zv = hv;
        Sv && this._copySource(Sv, ev, gv, pv), null !== zv && (this.parent = zv), this._instanceDataStorage.hardwareInstancedRendering = this.ma().getCaps().instancedArrays, this._internalMeshDataInfo._onMeshReadyObserverAdded = vv => {
          vv.unregisterOnNextCall = !0, this.isReady(!0) ? this.onMeshReadyObservable.notifyObservers(this) : this._internalMeshDataInfo._checkReadinessObserver || (this._internalMeshDataInfo._checkReadinessObserver = this._scene.onBeforeRenderObservable.add((() => {
            this.isReady(!0) && (this._scene.onBeforeRenderObservable.remove(this._internalMeshDataInfo._checkReadinessObserver), this._internalMeshDataInfo._checkReadinessObserver = null, this.onMeshReadyObservable.notifyObservers(this))
          })))
        }, this.onMeshReadyObservable = new iv.c(this._internalMeshDataInfo._onMeshReadyObserverAdded), Sv && Sv.onClonedObservable.notifyObservers(this)
      }
      instantiateHierarchy() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          zv = arguments.length > 1 ? arguments[1] : void 0,
          Pv = arguments.length > 2 ? arguments[2] : void 0;
        const hv = 0 === this.getTotalVertices() || zv && zv.doNotInstantiate && (!0 === zv.doNotInstantiate || zv.doNotInstantiate(this)) ? this.clone("Clone of " + (this.name || this.id), vv || this.parent, !0) : this.createInstance("instance of " + (this.name || this.id));
        hv.parent = vv || this.parent, hv.position = this.position.clone(), hv.pp = this.pp.clone(), this.rotationQuaternion ? hv.rotationQuaternion = this.rotationQuaternion.clone() : hv.rotation = this.rotation.clone(), Pv && Pv(this, hv);
        for (const Sv of this.getChildTransformNodes(!0)) "InstancedMesh" === Sv.getClassName() && "Mesh" === hv.getClassName() && Sv.hhv === this ? Sv.instantiateHierarchy(hv, {
          doNotInstantiate: zv && zv.doNotInstantiate || !1,
          newSourcedMesh: hv
        }, Pv) : Sv.instantiateHierarchy(hv, zv, Pv);
        return hv
      }
      getClassName() {
        return "Mesh"
      }
      get _isMesh() {
        return !0
      }
      toString(vv) {
        let zv = super.toString(vv);
        if (zv += ", n vertices: " + this.getTotalVertices(), zv += ", parent: " + (this._waitingParentId ? this._waitingParentId : this.parent ? this.parent.name : "NONE"), this.animations)
          for (let Pv = 0; Pv < this.animations.length; Pv++) zv += ", animation[0]: " + this.animations[Pv].toString(vv);
        if (vv)
          if (this._geometry) {
            const vv = this.dPv(),
              Pv = this.getVerticesData(Dv.k.PositionKind);
            Pv && vv && (zv += ", flat shading: " + (Pv.length / 3 === vv.length ? "YES" : "NO"))
          } else zv += ", flat shading: UNKNOWN";
        return zv
      }
      _unBindEffect() {
        super._unBindEffect();
        for (const vv of this.instances) vv._unBindEffect()
      }
      get hasLODLevels() {
        return this._internalMeshDataInfo._LODLevels.length > 0
      }
      getLODLevels() {
        return this._internalMeshDataInfo._LODLevels
      }
      _sortLODLevels() {
        const vv = this._internalMeshDataInfo._useLODScreenCoverage ? -1 : 1;
        this._internalMeshDataInfo._LODLevels.sort(((zv, Pv) => zv.distanceOrScreenCoverage < Pv.distanceOrScreenCoverage ? vv : zv.distanceOrScreenCoverage > Pv.distanceOrScreenCoverage ? -vv : 0))
      }
      addLODLevel(vv, zv) {
        if (zv && zv._masterMesh) return Zv.d.Warn("You cannot use a mesh as LOD level twice"), this;
        const Pv = new Mv(vv, zv);
        return this._internalMeshDataInfo._LODLevels.push(Pv), zv && (zv._masterMesh = this), this._sortLODLevels(), this
      }
      getLODLevelAtDistance(vv) {
        const zv = this._internalMeshDataInfo;
        for (let Pv = 0; Pv < zv._LODLevels.length; Pv++) {
          const hv = zv._LODLevels[Pv];
          if (hv.distanceOrScreenCoverage === vv) return hv.mesh
        }
        return null
      }
      removeLODLevel(vv) {
        const zv = this._internalMeshDataInfo;
        for (let Pv = 0; Pv < zv._LODLevels.length; Pv++) zv._LODLevels[Pv].mesh === vv && (zv._LODLevels.splice(Pv, 1), vv && (vv._masterMesh = null));
        return this._sortLODLevels(), this
      }
      getLOD(vv, zv) {
        const Pv = this._internalMeshDataInfo;
        if (!Pv._LODLevels || 0 === Pv._LODLevels.length) return this;
        const hv = zv || this.cV().tPv,
          Sv = vv.mode === Fv.c.ORTHOGRAPHIC_CAMERA ? vv.minZ : hv.centerWorld.subtract(vv.globalPosition).length();
        let ev = Sv,
          gv = 1;
        if (Pv._useLODScreenCoverage) {
          const zv = vv.screenArea;
          let Pv = hv.radiusWorld * vv.minZ / Sv;
          Pv = Pv * Pv * Math.PI, ev = Pv / zv, gv = -1
        }
        if (gv * Pv._LODLevels[Pv._LODLevels.length - 1].distanceOrScreenCoverage > gv * ev) return this.onLODLevelSelection && this.onLODLevelSelection(ev, this, this), this;
        for (let pv = 0; pv < Pv._LODLevels.length; pv++) {
          const vv = Pv._LODLevels[pv];
          if (gv * vv.distanceOrScreenCoverage < gv * ev) {
            if (vv.mesh) {
              if (4 === vv.mesh.delayLoadState) return vv.mesh._checkDelayState(), this;
              if (2 === vv.mesh.delayLoadState) return this;
              vv.mesh._preActivate(), vv.mesh._updateSubMeshesBoundingInfo(this.worldMatrixFromCache)
            }
            return this.onLODLevelSelection && this.onLODLevelSelection(ev, this, vv.mesh), vv.mesh
          }
        }
        return this.onLODLevelSelection && this.onLODLevelSelection(ev, this, this), this
      }
      get geometry() {
        return this._geometry
      }
      getTotalVertices() {
        return null === this._geometry || void 0 === this._geometry ? 0 : this._geometry.getTotalVertices()
      }
      getVerticesData(vv, zv, Pv, hv) {
        if (!this._geometry) return null;
        let Sv = hv ? void 0 : this._userInstancedBuffersStorage?.vertexBuffers[vv]?.getFloatData(this.instances.length + 1, Pv || zv && 1 !== this._geometry.meshes.length);
        return Sv || (Sv = this._geometry.getVerticesData(vv, zv, Pv)), Sv
      }
      copyVerticesData(vv, zv) {
        this._geometry && this._geometry.copyVerticesData(vv, zv)
      }
      getVertexBuffer(vv, zv) {
        return this._geometry ? (zv ? void 0 : this._userInstancedBuffersStorage?.vertexBuffers[vv]) ?? this._geometry.getVertexBuffer(vv) : null
      }
      isVerticesDataPresent(vv, zv) {
        return this._geometry ? !zv && void 0 !== this._userInstancedBuffersStorage?.vertexBuffers[vv] || this._geometry.isVerticesDataPresent(vv) : !!this._delayInfo && -1 !== this._delayInfo.indexOf(vv)
      }
      isVertexBufferUpdatable(vv, zv) {
        if (!this._geometry) return !!this._delayInfo && -1 !== this._delayInfo.indexOf(vv);
        if (!zv) {
          const zv = this._userInstancedBuffersStorage?.vertexBuffers[vv];
          if (zv) return zv.isUpdatable()
        }
        return this._geometry.isVertexBufferUpdatable(vv)
      }
      getVerticesDataKinds(vv) {
        if (!this._geometry) {
          const vv = [];
          if (this._delayInfo)
            for (const zv of this._delayInfo) vv.push(zv);
          return vv
        }
        const zv = this._geometry.getVerticesDataKinds();
        if (!vv && this._userInstancedBuffersStorage)
          for (const Pv in this._userInstancedBuffersStorage.vertexBuffers) - 1 === zv.indexOf(Pv) && zv.push(Pv);
        return zv
      }
      getTotalIndices() {
        return this._geometry ? this._geometry.getTotalIndices() : 0
      }
      dPv(vv, zv) {
        return this._geometry ? this._geometry.dPv(vv, zv) : []
      }
      get isBlocked() {
        return null !== this._masterMesh && void 0 !== this._masterMesh
      }
      isReady() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          zv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (2 === this.delayLoadState) return !1;
        if (!super.isReady(vv)) return !1;
        if (!this.sF || 0 === this.sF.length) return !0;
        if (!vv) return !0;
        const Pv = this.ma(),
          hv = this.rD(),
          Sv = zv || Pv.getCaps().instancedArrays && (this.instances.length > 0 || this.hasThinInstances);
        this.computeWorldMatrix();
        const ev = this.material || hv.defaultMaterial;
        if (ev)
          if (ev._storeEffectOnSubMeshes)
            for (const pv of this.sF) {
              const vv = pv.na();
              if (vv)
                if (vv._storeEffectOnSubMeshes) {
                  if (!vv.isReadyForSubMesh(this, pv, Sv)) return !1
                } else if (!vv.isReady(this, Sv)) return !1
            } else if (!ev.isReady(this, Sv)) return !1;
        const gv = Pv.currentRenderPassId;
        for (const pv of this.lightSources) {
          const vv = pv.getShadowGenerators();
          if (!vv) continue;
          const zv = vv.values();
          for (let hv = zv.next(); !0 !== hv.done; hv = zv.next()) {
            const vv = hv.value;
            if (vv && (!vv.getShadowMap()?.renderList || vv.getShadowMap()?.renderList && -1 !== vv.getShadowMap()?.renderList?.indexOf(this))) {
              const zv = vv.getShadowMap().renderPassIds ?? [Pv.currentRenderPassId];
              for (let hv = 0; hv < zv.length; ++hv) {
                Pv.currentRenderPassId = zv[hv];
                for (const zv of this.sF)
                  if (!vv.isReady(zv, Sv, zv.na()?.needAlphaBlendingForMesh(this) ?? !1)) return Pv.currentRenderPassId = gv, !1
              }
              Pv.currentRenderPassId = gv
            }
          }
        }
        for (const pv of this._internalMeshDataInfo._LODLevels)
          if (pv.mesh && !pv.mesh.isReady(Sv)) return !1;
        return !0
      }
      get areNormalsFrozen() {
        return this._internalMeshDataInfo._areNormalsFrozen
      }
      Oa() {
        return this._internalMeshDataInfo._areNormalsFrozen = !0, this
      }
      unfreezeNormals() {
        return this._internalMeshDataInfo._areNormalsFrozen = !1, this
      }
      set overridenInstanceCount(vv) {
        this._instanceDataStorage.overridenInstanceCount = vv
      }
      _getInstanceDataStorage() {
        if (this._instanceDataStorage.useMonoDataStorageRenderPass) return this._instanceDataStorage.dataStorageRenderPass;
        const vv = this._instanceDataStorage.engine.currentRenderPassId;
        let zv = this._instanceDataStorage.renderPasses[vv];
        return zv || (zv = new Bv, this._instanceDataStorage.renderPasses[vv] = zv), zv
      }
      _preActivate() {
        const vv = this._internalMeshDataInfo,
          zv = this.rD().getRenderId();
        return vv._preActivateId === zv || (vv._preActivateId = zv, this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass.visibleInstances = null : this._getInstanceDataStorage().visibleInstances = null), this
      }
      _preActivateForIntermediateRendering(vv) {
        const zv = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        return zv.visibleInstances && (zv.visibleInstances.intermediateDefaultRenderId = vv), this
      }
      _registerInstanceForRenderId(vv, zv) {
        const Pv = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        return Pv.visibleInstances || (Pv.visibleInstances = {
          defaultRenderId: zv,
          selfDefaultRenderId: this._renderId,
          intermediateDefaultRenderId: -1
        }), Pv.visibleInstances[zv] || (void 0 === Pv.previousRenderId || this._instanceDataStorage.useMonoDataStorageRenderPass && !this._instanceDataStorage.isFrozen || delete Pv.visibleInstances[Pv.previousRenderId], Pv.previousRenderId = zv, Pv.visibleInstances[zv] = new Array), Pv.visibleInstances[zv].push(vv), this
      }
      _afterComputeWorldMatrix() {
        super._afterComputeWorldMatrix(), this.hasThinInstances && (this.Ya || this.thinInstanceRefreshBoundingInfo(!1))
      }
      _postActivate() {
        this.edgesShareWithInstances && this.edgesRenderer && this.edgesRenderer.isEnabled && this._renderingGroup && (this._renderingGroup._edgesRenderers.pushNoDuplicate(this.edgesRenderer), this.edgesRenderer.customInstances.push(this.getWorldMatrix()))
      }
      refreshBoundingInfo() {
        let vv, zv = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Pv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.hasBoundingInfo && this.cV().isLocked) return this;
        vv = "object" === typeof zv ? zv : {
          applySkeleton: zv,
          applyMorph: Pv
        };
        const hv = this.geometry ? this.geometry.boundingBias : null;
        return this._refreshBoundingInfo(this._getData(vv, null, Dv.k.PositionKind), hv), this
      }
      _createGlobalSubMesh(vv) {
        const zv = this.getTotalVertices();
        if (!zv || !this.dPv()) return null;
        if (this.sF && this.sF.length > 0) {
          const Pv = this.dPv();
          if (!Pv) return null;
          const hv = Pv.length;
          let Sv = !1;
          if (vv) Sv = !0;
          else
            for (const vv of this.sF) {
              if (vv.indexStart + vv.indexCount > hv) {
                Sv = !0;
                break
              }
              if (vv.verticesStart + vv.verticesCount > zv) {
                Sv = !0;
                break
              }
            }
          if (!Sv) return this.sF[0]
        }
        return this.releaseSubMeshes(), new Rv.c(0, 0, zv, 0, this.getTotalIndices() || (this.isUnIndexed ? zv : 0), this)
      }
      subdivide(vv) {
        if (vv < 1) return;
        const zv = this.getTotalIndices();
        let Pv = zv / vv | 0,
          hv = 0;
        for (; Pv % 3 !== 0;) Pv++;
        this.releaseSubMeshes();
        for (let Sv = 0; Sv < vv && !(hv >= zv); Sv++) Rv.c.CreateFromIndices(0, hv, hv + Pv >= zv ? zv - hv : Pv, this, void 0, !1), hv += Pv;
        this.refreshBoundingInfo(), this.synchronizeInstances()
      }
      setVerticesData(vv, zv) {
        let Pv = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          hv = arguments.length > 3 ? arguments[3] : void 0;
        if (this._geometry) this._geometry.setVerticesData(vv, zv, Pv, hv);
        else {
          const hv = new Kv.d;
          hv.set(zv, vv);
          const Sv = this.rD();
          new Vv.b(Vv.b.RandomId(), Sv, hv, Pv, this)
        }
        return this
      }
      removeVerticesData(vv) {
        this._geometry && this._geometry.removeVerticesData(vv)
      }
      markVerticesDataAsUpdatable(vv) {
        let zv = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const Pv = this.getVertexBuffer(vv);
        Pv && Pv.isUpdatable() !== zv && this.setVerticesData(vv, this.getVerticesData(vv), zv)
      }
      setVerticesBuffer(vv) {
        let zv = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        return this._geometry || (this._geometry = Vv.b.CreateGeometryForMesh(this)), this._geometry.setVerticesBuffer(vv, Pv, zv), this
      }
      updateVerticesData(vv, zv, Pv, hv) {
        return this._geometry ? (hv ? (this.makeGeometryUnique(), this.updateVerticesData(vv, zv, Pv, !1)) : this._geometry.updateVerticesData(vv, zv, Pv), this) : this
      }
      updateMeshPositions(vv) {
        let zv = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const Pv = this.getVerticesData(Dv.k.PositionKind);
        if (!Pv) return this;
        if (vv(Pv), this.updateVerticesData(Dv.k.PositionKind, Pv, !1, !1), zv) {
          const vv = this.dPv(),
            zv = this.getVerticesData(Dv.k.NormalKind);
          if (!zv) return this;
          Kv.d.ComputeNormals(Pv, vv, zv), this.updateVerticesData(Dv.k.NormalKind, zv, !1, !1)
        }
        return this
      }
      makeGeometryUnique() {
        if (!this._geometry) return this;
        if (1 === this._geometry.meshes.length) return this;
        const vv = this._geometry,
          zv = this._geometry.copy(Vv.b.RandomId());
        return vv.releaseForMesh(this, !0), zv.applyToMesh(this), this
      }
      setIndexBuffer(vv, zv, Pv) {
        let hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          Sv = this._geometry;
        Sv || (Sv = new Vv.b(Vv.b.RandomId(), this.rD(), void 0, void 0, this)), Sv.setIndexBuffer(vv, zv, Pv, hv)
      }
      setIndices(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Pv = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          hv = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this._geometry) this._geometry.setIndices(vv, zv, Pv, hv);
        else {
          const hv = new Kv.d;
          hv.indices = vv;
          const Sv = this.rD();
          new Vv.b(Vv.b.RandomId(), Sv, hv, Pv, this, zv)
        }
        return this
      }
      updateIndices(vv, zv) {
        let Pv = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return this._geometry ? (this._geometry.updateIndices(vv, zv, Pv), this) : this
      }
      toLeftHanded() {
        return this._geometry ? (this._geometry.toLeftHanded(), this) : this
      }
      _bind(vv, zv, Pv) {
        let hv = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        if (!this._geometry) return this;
        const Sv = this.rD().ma();
        let ev;
        if (this._unIndexed)
          if (this._getRenderingFillMode(Pv) === xv.b.WireFrameFillMode) ev = vv._getLinesIndexBuffer(this.dPv(), Sv);
          else ev = null;
        else switch (this._getRenderingFillMode(Pv)) {
          case xv.b.PointFillMode:
            ev = null;
            break;
          case xv.b.WireFrameFillMode:
            ev = vv._getLinesIndexBuffer(this.dPv(), Sv);
            break;
          default:
          case xv.b.TriangleFillMode:
            ev = this._geometry.getIndexBuffer()
        }
        return this._bindDirect(zv, ev, hv)
      }
      _bindDirect(vv, zv) {
        let Pv = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (!this._geometry) return this;
        if (this.morphTargetManager && this.morphTargetManager.isUsingTextureForTargets && this.morphTargetManager._bind(vv), Pv && this._userInstancedBuffersStorage && !this.hasThinInstances) {
          if (!this._instanceDataStorage.useMonoDataStorageRenderPass && this._userInstancedBuffersStorage.renderPasses && this._userInstancedBuffersStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId]) {
            const vv = this._userInstancedBuffersStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId];
            for (const zv in vv) this._userInstancedBuffersStorage.vertexBuffers[zv] = vv[zv]
          }
          this._geometry._bind(vv, zv, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects)
        } else this._geometry._bind(vv, zv);
        return this
      }
      _draw(vv, zv, Pv) {
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        this._internalMeshDataInfo._onBeforeDrawObservable && this._internalMeshDataInfo._onBeforeDrawObservable.notifyObservers(this);
        const hv = this.rD().ma(),
          Sv = hv._currentMaterialContext,
          ev = Sv && Sv.useVertexPulling;
        return this._unIndexed && zv !== xv.b.WireFrameFillMode || zv == xv.b.PointFillMode ? hv.drawArraysType(zv, vv.verticesStart, vv.verticesCount, this.forcedInstanceCount || Pv) : zv == xv.b.WireFrameFillMode ? hv.drawElementsType(zv, 0, vv._linesIndexCount, this.forcedInstanceCount || Pv) : ev ? hv.drawArraysType(zv, vv.indexStart, vv.indexCount, this.forcedInstanceCount || Pv) : hv.drawElementsType(zv, vv.indexStart, vv.indexCount, this.forcedInstanceCount || Pv), this
      }
      registerBeforeRender(vv) {
        return this.onBeforeRenderObservable.add(vv), this
      }
      unregisterBeforeRender(vv) {
        return this.onBeforeRenderObservable.removeCallback(vv), this
      }
      registerAfterRender(vv) {
        return this.onAfterRenderObservable.add(vv), this
      }
      unregisterAfterRender(vv) {
        return this.onAfterRenderObservable.removeCallback(vv), this
      }
      _getInstancesRenderList(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const Pv = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        if (this._instanceDataStorage.isFrozen) {
          if (zv) return Pv.batchCacheReplacementModeInFrozenMode.hardwareInstancedRendering[vv] = !1, Pv.batchCacheReplacementModeInFrozenMode.renderSelf[vv] = !0, Pv.batchCacheReplacementModeInFrozenMode;
          if (Pv.previousBatch) return Pv.previousBatch
        }
        const hv = this.rD(),
          Sv = hv._isInIntermediateRendering(),
          ev = Sv ? this._internalAbstractMeshDataInfo._onlyForInstancesIntermediate : this._internalAbstractMeshDataInfo._onlyForInstances,
          gv = Pv.batchCache;
        if (gv.mustReturn = !1, gv.renderSelf[vv] = zv || !ev && this.isEnabled() && this.isVisible, gv.visibleInstances[vv] = null, Pv.visibleInstances && !zv) {
          const zv = Pv.visibleInstances,
            ev = hv.getRenderId(),
            pv = Sv ? zv.intermediateDefaultRenderId : zv.defaultRenderId;
          gv.visibleInstances[vv] = zv[ev], !gv.visibleInstances[vv] && pv && (gv.visibleInstances[vv] = zv[pv])
        }
        return gv.hardwareInstancedRendering[vv] = !zv && this._instanceDataStorage.hardwareInstancedRendering && null !== gv.visibleInstances[vv] && void 0 !== gv.visibleInstances[vv], Pv.previousBatch = gv, gv
      }
      _updateInstancedBuffers(vv, zv, Pv, hv, Sv, ev) {
        const gv = zv.visibleInstances[vv._id],
          pv = gv ? gv.length : 0,
          dv = zv.parent,
          Nv = this._instanceDataStorage;
        let lv = dv.instancesBuffer,
          Tv = dv.instancesPreviousBuffer,
          Wv = 0,
          wv = 0;
        const av = zv.renderSelf[vv._id],
          sv = this._scene.floatingOriginOffset,
          Cv = !lv || Pv !== dv.instancesBufferSize || this._scene.needsPreviousWorldMatrices && !dv.instancesPreviousBuffer;
        if (this._instanceDataStorage.manualUpdate || Nv.isFrozen && !Cv) wv = (av ? 1 : 0) + pv;
        else {
          const zv = this.getWorldMatrix();
          if (av) {
            this._scene.needsPreviousWorldMatrices && (Nv.masterMeshPreviousWorldMatrix ? (Nv.masterMeshPreviousWorldMatrix.copyToArray(dv.instancesPreviousData, Wv), Nv.masterMeshPreviousWorldMatrix.Vzv(zv)) : (Nv.masterMeshPreviousWorldMatrix = zv.clone(), Nv.masterMeshPreviousWorldMatrix.copyToArray(dv.instancesPreviousData, Wv))), zv.copyToArray(dv.instancesData, Wv);
            const vv = zv.pPv();
            dv.instancesData[Wv + 12] = vv[12] - sv.x, dv.instancesData[Wv + 13] = vv[13] - sv.y, dv.instancesData[Wv + 14] = vv[14] - sv.z, Wv += 16, wv++
          }
          if (gv) {
            if (kv.INSTANCEDMESH_SORT_TRANSPARENT && this._scene.activeCamera && vv.na()?.needAlphaBlendingForMesh(vv.getRenderingMesh())) {
              const vv = this._scene.activeCamera.globalPosition;
              for (let zv = 0; zv < gv.length; zv++) {
                const Pv = gv[zv];
                Pv._distanceToCamera = Yv.l.Distance(Pv.cV().tPv.centerWorld, vv)
              }
              gv.sort(((vv, zv) => vv._distanceToCamera > zv._distanceToCamera ? -1 : vv._distanceToCamera < zv._distanceToCamera ? 1 : 0))
            }
            for (let vv = 0; vv < gv.length; vv++) {
              const zv = gv[vv],
                Pv = zv.getWorldMatrix();
              Pv.copyToArray(dv.instancesData, Wv), this._scene.needsPreviousWorldMatrices && (zv._previousWorldMatrix ? (zv._previousWorldMatrix.copyToArray(dv.instancesPreviousData, Wv), zv._previousWorldMatrix.Vzv(Pv)) : (zv._previousWorldMatrix = Pv.clone(), zv._previousWorldMatrix.copyToArray(dv.instancesPreviousData, Wv)));
              const hv = Pv.pPv();
              dv.instancesData[Wv + 12] = hv[12] - sv.x, dv.instancesData[Wv + 13] = hv[13] - sv.y, dv.instancesData[Wv + 14] = hv[14] - sv.z, Wv += 16, wv++
            }
          }
        }
        if (Cv) {
          let vv;
          if (lv && lv.dispose(), Tv && Tv.dispose(), lv = new Dv.c(hv, dv.instancesData, !0, 16, !1, !0), dv.instancesBuffer = lv, this._userInstancedBuffersStorage || (this._userInstancedBuffersStorage = {
              data: {},
              vertexBuffers: {},
              strides: {},
              sizes: {},
              vertexArrayObjects: this.ma().getCaps().vertexArrayObject ? {} : void 0
            }), this._instanceDataStorage.useMonoDataStorageRenderPass) vv = this._userInstancedBuffersStorage.vertexBuffers;
          else {
            this._userInstancedBuffersStorage.renderPasses || (this._userInstancedBuffersStorage.renderPasses = {});
            const zv = this._instanceDataStorage.engine.currentRenderPassId;
            vv = this._userInstancedBuffersStorage.renderPasses[zv], vv || (this._userInstancedBuffersStorage.renderPasses[zv] = vv = {})
          }
          vv.world0 = lv.createVertexBuffer("world0", 0, 4), vv.world1 = lv.createVertexBuffer("world1", 4, 4), vv.world2 = lv.createVertexBuffer("world2", 8, 4), vv.world3 = lv.createVertexBuffer("world3", 12, 4), this._scene.needsPreviousWorldMatrices && (Tv = new Dv.c(hv, dv.instancesPreviousData, !0, 16, !1, !0), dv.instancesPreviousBuffer = Tv, vv.previousWorld0 = Tv.createVertexBuffer("previousWorld0", 0, 4), vv.previousWorld1 = Tv.createVertexBuffer("previousWorld1", 4, 4), vv.previousWorld2 = Tv.createVertexBuffer("previousWorld2", 8, 4), vv.previousWorld3 = Tv.createVertexBuffer("previousWorld3", 12, 4)), this._invalidateInstanceVertexArrayObject()
        } else this._instanceDataStorage.isFrozen && !this._instanceDataStorage.forceMatrixUpdates || (lv.updateDirectly(dv.instancesData, 0, wv), !this._scene.needsPreviousWorldMatrices || this._instanceDataStorage.manualUpdate && !this._instanceDataStorage.previousManualUpdate || Tv.updateDirectly(dv.instancesPreviousData, 0, wv));
        this._processInstancedBuffers(gv, av), ev && void 0 !== Sv && (this.rD()._activeIndices.addCount(vv.indexCount * wv, !1), hv._currentDrawContext && (hv._currentDrawContext.useInstancing = !0), this._bind(vv, ev, Sv), this._draw(vv, Sv, wv)), !this._scene.needsPreviousWorldMatrices || Cv || !this._instanceDataStorage.manualUpdate || this._instanceDataStorage.isFrozen && !this._instanceDataStorage.forceMatrixUpdates || this._instanceDataStorage.previousManualUpdate || Tv.updateDirectly(dv.instancesData, 0, wv)
      }
      _renderWithInstances(vv, zv, Pv, hv, Sv) {
        const ev = Pv.visibleInstances[vv._id],
          gv = ev ? ev.length : 0,
          pv = Pv.parent,
          dv = pv.instancesBufferSize,
          Nv = 16 * (gv + 1) * 4;
        for (; pv.instancesBufferSize < Nv;) pv.instancesBufferSize *= 2;
        return pv.instancesData && dv == pv.instancesBufferSize || (pv.instancesData = new Float32Array(pv.instancesBufferSize / 4)), (this._scene.needsPreviousWorldMatrices && !pv.instancesPreviousData || dv != pv.instancesBufferSize) && (pv.instancesPreviousData = new Float32Array(pv.instancesBufferSize / 4)), this._updateInstancedBuffers(vv, Pv, dv, Sv, zv, hv), Sv.unbindInstanceAttributes(), this
      }
      _renderWithThinInstances(vv, zv, Pv, hv) {
        const Sv = this._thinInstanceDataStorage?.instancesCount ?? 0;
        this.rD()._activeIndices.addCount(vv.indexCount * Sv, !1), hv._currentDrawContext && (hv._currentDrawContext.useInstancing = !0), this._bind(vv, Pv, zv), this._draw(vv, zv, Sv), this._scene.needsPreviousWorldMatrices && !this._thinInstanceDataStorage.previousMatrixData && this._thinInstanceDataStorage.matrixData && (this._thinInstanceDataStorage.previousMatrixBuffer ? this._thinInstanceDataStorage.previousMatrixBuffer.updateDirectly(this._thinInstanceDataStorage.matrixData, 0, Sv) : this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", this._thinInstanceDataStorage.matrixData, !1)), hv.unbindInstanceAttributes()
      }
      _processInstancedBuffers(vv, zv) {}
      _processRendering(vv, zv, Pv, hv, Sv, ev, gv, pv) {
        const dv = this.rD(),
          Nv = dv.ma();
        if (hv = this._getRenderingFillMode(hv), ev && zv.getRenderingMesh().hasThinInstances) return this._renderWithThinInstances(zv, hv, Pv, Nv), this;
        if (ev) this._renderWithInstances(zv, hv, Sv, Pv, Nv);
        else {
          Nv._currentDrawContext && (Nv._currentDrawContext.useInstancing = !1);
          let Pv = 0;
          Sv.renderSelf[zv._id] && (gv && gv(!1, vv.getWorldMatrix(), pv), Pv++, this._draw(zv, hv, this._instanceDataStorage.overridenInstanceCount));
          const ev = Sv.visibleInstances[zv._id];
          if (ev) {
            const vv = ev.length;
            Pv += vv;
            for (let Pv = 0; Pv < vv; Pv++) {
              const vv = ev[Pv].getWorldMatrix();
              gv && gv(!0, vv, pv), this._draw(zv, hv)
            }
          }
          dv._activeIndices.addCount(zv.indexCount * Pv, !1)
        }
        return this
      }
      _disposeInstanceDataStorageRenderPass(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        vv?.instancesBuffer && (zv && vv.instancesBuffer.dispose(), vv.instancesBuffer = null), vv?.instancesPreviousBuffer && (zv && vv.instancesPreviousBuffer.dispose(), vv.instancesPreviousBuffer = null)
      }
      _rebuild() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const zv in this._instanceDataStorage.renderPasses) {
          const Pv = this._instanceDataStorage.renderPasses[zv];
          this._disposeInstanceDataStorageRenderPass(Pv, vv)
        }
        if (this._disposeInstanceDataStorageRenderPass(this._instanceDataStorage.dataStorageRenderPass, vv), this._userInstancedBuffersStorage) {
          for (const zv in this._userInstancedBuffersStorage.vertexBuffers) {
            const Pv = this._userInstancedBuffersStorage.vertexBuffers[zv];
            Pv && (vv && Pv.dispose(), this._userInstancedBuffersStorage.vertexBuffers[zv] = null)
          }
          this._userInstancedBuffersStorage.vertexArrayObjects && (this._userInstancedBuffersStorage.vertexArrayObjects = {})
        }
        this._internalMeshDataInfo._effectiveMaterial = null, super._rebuild(vv)
      }
      _releaseRenderPassId(vv) {
        const zv = this._instanceDataStorage.renderPasses[vv];
        if (zv && (this._disposeInstanceDataStorageRenderPass(zv, !0), delete this._instanceDataStorage.renderPasses[vv]), this._userInstancedBuffersStorage?.renderPasses) {
          const zv = this._userInstancedBuffersStorage.renderPasses[vv];
          if (zv)
            for (const vv in zv) zv[vv]?.dispose();
          delete this._userInstancedBuffersStorage.renderPasses[vv]
        }
        const Pv = this._userInstancedBuffersStorage?.interleavedBuffers;
        Pv?.[vv] && (Pv[vv].buffer.dispose(), delete Pv[vv])
      }
      _freeze() {
        if (this.sF) {
          for (let vv = 0; vv < this.sF.length; vv++) this._getInstancesRenderList(vv);
          this._internalMeshDataInfo._effectiveMaterial = null, this._instanceDataStorage.isFrozen = !0
        }
      }
      _unFreeze() {
        this._instanceDataStorage.isFrozen = !1;
        for (const vv in this._instanceDataStorage.renderPasses) {
          this._instanceDataStorage.renderPasses[vv].previousBatch = null
        }
        this._instanceDataStorage.dataStorageRenderPass && (this._instanceDataStorage.dataStorageRenderPass.previousBatch = null)
      }
      renderWithRenderPassId(vv, zv, Pv, hv) {
        let Sv = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        const ev = this._scene.ma(),
          gv = ev.currentRenderPassId;
        if (void 0 !== vv && (ev.currentRenderPassId = vv), hv)(!Sv || Sv && hv.isInFrustum(this._scene._frustumPlanes)) && this.render(hv, !!zv, Pv);
        else
          for (let pv = 0; pv < this.sF.length; pv++) {
            const vv = this.sF[pv];
            (!Sv || Sv && vv.isInFrustum(this._scene._frustumPlanes)) && this.render(vv, !!zv, Pv)
          }
        return void 0 !== vv && (ev.currentRenderPassId = gv), this
      }
      directRender() {
        if (!this.sF) return this;
        for (const vv of this.sF) this.render(vv, !1);
        return this
      }
      render(vv, zv, Pv) {
        const hv = this.rD(),
          Sv = hv.ma();
        this._internalAbstractMeshDataInfo._isActiveIntermediate ? this._internalAbstractMeshDataInfo._isActiveIntermediate = !1 : this._internalAbstractMeshDataInfo._isActive = !1;
        const ev = hv.activeCameras?.length ?? 0,
          gv = ev > 1 && hv.activeCamera === hv.activeCameras[0] || ev <= 1,
          pv = this._occlusionDataStorage && -1 !== this._occlusionDataStorage.occlusionForRenderPassId && this._occlusionDataStorage.occlusionForRenderPassId !== Sv.currentRenderPassId;
        if (gv && this._checkOcclusionQuery(pv) && !this._occlusionDataStorage.forceRenderingWhenOccluded) return this;
        const dv = this._getInstancesRenderList(vv._id, !!Pv);
        if (dv.mustReturn) return this;
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        let Nv = 0,
          lv = null;
        this.ignoreCameraMaxZ && hv.activeCamera && !hv._isInIntermediateRendering() && (Nv = hv.activeCamera.maxZ, lv = hv.activeCamera, hv.activeCamera.maxZ = 0, hv.updateTransformMatrix(!0)), this._internalMeshDataInfo._onBeforeRenderObservable && this._internalMeshDataInfo._onBeforeRenderObservable.notifyObservers(this);
        const Tv = vv.getRenderingMesh(),
          Wv = dv.hardwareInstancedRendering[vv._id] || Tv.hasThinInstances || !!this._userInstancedBuffersStorage && !vv.getMesh()._internalAbstractMeshDataInfo._actAsRegularMesh,
          wv = this._instanceDataStorage,
          av = vv.na();
        if (!av) return lv && (lv.maxZ = Nv, hv.updateTransformMatrix(!0)), this;
        if (wv.isFrozen && this._internalMeshDataInfo._effectiveMaterial && this._internalMeshDataInfo._effectiveMaterial === av) {
          if (av._storeEffectOnSubMeshes && !vv._drawWrapper?._wasPreviouslyReady || !av._storeEffectOnSubMeshes && !av._getDrawWrapper()._wasPreviouslyReady) return lv && (lv.maxZ = Nv, hv.updateTransformMatrix(!0)), this
        } else {
          if (av._storeEffectOnSubMeshes) {
            if (!av.isReadyForSubMesh(this, vv, Wv)) return lv && (lv.maxZ = Nv, hv.updateTransformMatrix(!0)), this
          } else if (!av.isReady(this, Wv)) return lv && (lv.maxZ = Nv, hv.updateTransformMatrix(!0)), this;
          this._internalMeshDataInfo._effectiveMaterial = av
        }
        if (zv) {
          const vv = this._internalMeshDataInfo._effectiveMaterial;
          if (1 === vv.alphaModes.length) Sv.setAlphaMode(vv.alphaMode);
          else
            for (let zv = 0; zv < vv.alphaModes.length; zv++) {
              const Pv = vv.alphaModes[zv];
              Sv.setAlphaMode(void 0 !== Pv ? Pv : 2, !1, zv)
            }
        }
        let sv;
        sv = this._internalMeshDataInfo._effectiveMaterial._storeEffectOnSubMeshes ? vv._drawWrapper : this._internalMeshDataInfo._effectiveMaterial._getDrawWrapper();
        const Cv = sv?.effect ?? null;
        for (let Fv = 0, Yv = hv._beforeRenderingMeshStage; Fv < Yv.length; Fv++) {
          Yv[Fv].action(this, vv, dv, Cv)
        }
        if (!sv || !Cv) return lv && (lv.maxZ = Nv, hv.updateTransformMatrix(!0)), this;
        const iv = Pv || this;
        let cv;
        if (!wv.isFrozen && (this._internalMeshDataInfo._effectiveMaterial.backFaceCulling || null !== this._internalMeshDataInfo._effectiveMaterial.sideOrientation || this._internalMeshDataInfo._effectiveMaterial._twoSidedLighting)) {
          const vv = iv._getWorldMatrixDeterminant();
          cv = this._internalMeshDataInfo._effectiveMaterial._getEffectiveOrientation(this), vv < 0 && (cv = cv === xv.b.ClockWiseSideOrientation ? xv.b.CounterClockWiseSideOrientation : xv.b.ClockWiseSideOrientation), this._internalMeshDataInfo._effectiveSideOrientation = cv
        }
        const Gv = this._internalMeshDataInfo._effectiveMaterial._preBind(sv, this._internalMeshDataInfo._effectiveSideOrientation);
        this._internalMeshDataInfo._effectiveMaterial.forceDepthWrite && Sv.setDepthWrite(!0);
        const mv = this._internalMeshDataInfo._effectiveMaterial,
          jv = mv.fillMode;
        this._internalMeshDataInfo._onBeforeBindObservable && this._internalMeshDataInfo._onBeforeBindObservable.notifyObservers(this), Wv || this._bind(vv, Cv, jv, !1);
        const fv = iv.getWorldMatrix();
        mv._storeEffectOnSubMeshes ? mv.bindForSubMesh(fv, this, vv) : mv.bind(fv, this);
        try {
          tv.d._BindAttachmentsForEffect(Sv, Cv) && (!mv.backFaceCulling && mv.separateCullingPass && (Sv.setState(!0, mv.zOffset, !1, !Gv, mv.cullBackFaces, mv.stencil, mv.zOffsetUnits), this._processRendering(this, vv, Cv, jv, dv, Wv, this._onBeforeDraw, this._internalMeshDataInfo._effectiveMaterial), Sv.setState(!0, mv.zOffset, !1, Gv, mv.cullBackFaces, mv.stencil, mv.zOffsetUnits), this._internalMeshDataInfo._onBetweenPassObservable && this._internalMeshDataInfo._onBetweenPassObservable.notifyObservers(vv)), this._processRendering(this, vv, Cv, jv, dv, Wv, this._onBeforeDraw, this._internalMeshDataInfo._effectiveMaterial))
        } finally {
          tv.d._RestoreAttachments(Sv)
        }
        this._internalMeshDataInfo._effectiveMaterial.unbind();
        for (let Fv = 0, Yv = hv._afterRenderingMeshStage; Fv < Yv.length; Fv++) {
          Yv[Fv].action(this, vv, dv, Cv)
        }
        return this._internalMeshDataInfo._onAfterRenderObservable && this._internalMeshDataInfo._onAfterRenderObservable.notifyObservers(this), lv && (lv.maxZ = Nv, hv.updateTransformMatrix(!0)), 2 !== hv.performancePriority || wv.isFrozen || this._freeze(), this
      }
      _renderRunFollower(vv, zv) {
        const Pv = this._scene,
          hv = Pv._engine;
        if (hv.isWebGPU || vv._mesh !== this || 0 !== this.instances.length || this.render !== kv.prototype.render) return !1;
        const Sv = vv.na();
        if (!Sv || Sv !== Pv._cachedMaterial || void 0 === Sv._canBindRunFollower) return !1;
        const ev = vv._drawWrapper,
          gv = ev?.effect;
        if (!gv || gv !== Pv._cachedEffect || this.visibility !== Pv._cachedVisibility || ev._forceRebindOnNextCall) return !1;
        const pv = this.hasThinInstances;
        if (!pv && this._userInstancedBuffersStorage) return !1;
        if (!ev._wasPreviouslyReady || ev._wasPreviouslyUsingInstances !== pv) return !1;
        const dv = this._internalMeshDataInfo;
        if (this.ignoreCameraMaxZ || this.morphTargetManager || this._instanceDataStorage.isFrozen || Pv._isInIntermediateRendering() || 0 !== Pv._beforeRenderingMeshStage.length || 0 !== Pv._afterRenderingMeshStage.length || dv._onBeforeRenderObservable?.hasObservers() || dv._onBeforeBindObservable?.hasObservers() || dv._onAfterRenderObservable?.hasObservers()) return !1;
        const Nv = this.occlusionType;
        if (void 0 !== Nv && Nv !== Uv.c.OCCLUSION_TYPE_NONE || !Sv._canBindRunFollower(Pv, hv, this, vv, gv)) return !1;
        const lv = this._internalAbstractMeshDataInfo,
          Tv = lv._isActiveIntermediate;
        Tv ? lv._isActiveIntermediate = !1 : lv._isActive = !1;
        const Wv = Pv.activeCameras?.length ?? 0;
        (Wv > 1 && Pv.activeCamera === Pv.activeCameras[0] || Wv <= 1) && this._checkOcclusionQuery(!1);
        const wv = this._getInstancesRenderList(vv._id);
        if (wv.mustReturn) return !0;
        if (!pv && !wv.renderSelf[vv._id]) return Tv ? lv._isActiveIntermediate = !0 : lv._isActive = !0, !1;
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return !0;
        if (dv._effectiveMaterial = Sv, zv)
          if (1 === Sv.alphaModes.length) hv.setAlphaMode(Sv.alphaMode);
          else
            for (let sv = 0; sv < Sv.alphaModes.length; sv++) {
              const vv = Sv.alphaModes[sv];
              hv.setAlphaMode(void 0 !== vv ? vv : 2, !1, sv)
            }
        if (Sv.backFaceCulling || null !== Sv.sideOrientation || Sv._twoSidedLighting) {
          const vv = this._getWorldMatrixDeterminant();
          let zv = Sv._getEffectiveOrientation(this);
          vv < 0 && (zv = zv === xv.b.ClockWiseSideOrientation ? xv.b.CounterClockWiseSideOrientation : xv.b.ClockWiseSideOrientation), dv._effectiveSideOrientation = zv
        }
        Sv._preBind(ev, dv._effectiveSideOrientation), Sv.forceDepthWrite && hv.setDepthWrite(!0);
        const av = Sv.fillMode;
        return pv || this._bind(vv, gv, av, !1), Sv._bindRunFollower(this.getWorldMatrix(), this, vv, gv), this._processRendering(this, vv, gv, av, wv, pv, this._onBeforeDraw, Sv), Sv.unbind(), 2 === Pv.performancePriority && this._freeze(), !0
      }
      cleanMatrixWeights() {
        this.isVerticesDataPresent(Dv.k.MatricesWeightsKind) && (this.isVerticesDataPresent(Dv.k.MatricesWeightsExtraKind) ? this._normalizeSkinWeightsAndExtra() : this._normalizeSkinFourWeights())
      }
      _normalizeSkinFourWeights() {
        const vv = this.getVerticesData(Dv.k.MatricesWeightsKind),
          zv = vv.length;
        for (let Pv = 0; Pv < zv; Pv += 4) {
          const zv = vv[Pv] + vv[Pv + 1] + vv[Pv + 2] + vv[Pv + 3];
          if (0 === zv) vv[Pv] = 1;
          else {
            const hv = 1 / zv;
            vv[Pv] *= hv, vv[Pv + 1] *= hv, vv[Pv + 2] *= hv, vv[Pv + 3] *= hv
          }
        }
        this.setVerticesData(Dv.k.MatricesWeightsKind, vv)
      }
      _normalizeSkinWeightsAndExtra() {
        const vv = this.getVerticesData(Dv.k.MatricesWeightsExtraKind),
          zv = this.getVerticesData(Dv.k.MatricesWeightsKind),
          Pv = zv.length;
        for (let hv = 0; hv < Pv; hv += 4) {
          let Pv = zv[hv] + zv[hv + 1] + zv[hv + 2] + zv[hv + 3];
          if (Pv += vv[hv] + vv[hv + 1] + vv[hv + 2] + vv[hv + 3], 0 === Pv) zv[hv] = 1;
          else {
            const Sv = 1 / Pv;
            zv[hv] *= Sv, zv[hv + 1] *= Sv, zv[hv + 2] *= Sv, zv[hv + 3] *= Sv, vv[hv] *= Sv, vv[hv + 1] *= Sv, vv[hv + 2] *= Sv, vv[hv + 3] *= Sv
          }
        }
        this.setVerticesData(Dv.k.MatricesWeightsKind, zv), this.setVerticesData(Dv.k.MatricesWeightsKind, vv)
      }
      validateSkinning() {
        const vv = this.getVerticesData(Dv.k.MatricesWeightsExtraKind),
          zv = this.getVerticesData(Dv.k.MatricesWeightsKind);
        if (null === zv || null == this.skeleton) return {
          skinned: !1,
          valid: !0,
          yw: "not skinned"
        };
        const Pv = zv.length;
        let hv = 0,
          Sv = 0,
          ev = 0,
          gv = 0;
        const pv = null === vv ? 4 : 8,
          dv = [];
        for (let wv = 0; wv <= pv; wv++) dv[wv] = 0;
        for (let wv = 0; wv < Pv; wv += 4) {
          let Pv = zv[wv],
            Nv = Pv,
            lv = 0 === Nv ? 0 : 1;
          for (let Sv = 1; Sv < pv; Sv++) {
            const ev = Sv < 4 ? zv[wv + Sv] : vv[wv + Sv - 4];
            ev > Pv && hv++, 0 !== ev && lv++, Nv += ev, Pv = ev
          }
          if (dv[lv]++, lv > ev && (ev = lv), 0 === Nv) Sv++;
          else {
            const Pv = 1 / Nv;
            let hv = 0;
            for (let Sv = 0; Sv < pv; Sv++) hv += Sv < 4 ? Math.abs(zv[wv + Sv] - zv[wv + Sv] * Pv) : Math.abs(vv[wv + Sv - 4] - vv[wv + Sv - 4] * Pv);
            hv > .001 && gv++
          }
        }
        const Nv = this.skeleton.bones.length,
          lv = this.getVerticesData(Dv.k.MatricesIndicesKind),
          Tv = this.getVerticesData(Dv.k.MatricesIndicesExtraKind);
        let Wv = 0;
        for (let wv = 0; wv < Pv; wv += 4)
          for (let vv = 0; vv < pv; vv++) {
            const zv = vv < 4 ? lv[wv + vv] : Tv[wv + vv - 4];
            (zv >= Nv || zv < 0) && Wv++
          }
        return {
          skinned: !0,
          valid: 0 === Sv && 0 === gv && 0 === Wv,
          yw: "Number of Weights = " + Pv / 4 + "\nMaximum influences = " + ev + "\nMissing Weights = " + Sv + "\nNot Sorted = " + hv + "\nNot Normalized = " + gv + "\nWeightCounts = [" + dv + "]\nNumber of bones = " + Nv + "\nBad Bone Indices = " + Wv
        }
      }
      _checkDelayState() {
        const vv = this.rD();
        return this._geometry ? this._geometry.load(vv) : 4 === this.delayLoadState && (this.delayLoadState = 2, this._queueLoad(vv)), this
      }
      _queueLoad(vv) {
        vv.addPendingData(this);
        const zv = -1 !== this.delayLoadingFile.indexOf(".babylonbinarymeshdata");
        return (async () => {
          try {
            const Pv = await vv._loadDelayedFileAsync(this.delayLoadingFile, zv, !0);
            Pv instanceof ArrayBuffer ? this._delayLoadingFunction(Pv, this) : this._delayLoadingFunction(JSON.parse(Pv), this);
            for (const vv of this.instances) vv.refreshBoundingInfo(), vv._syncSubMeshes();
            this.delayLoadState = 1, vv.removePendingData(this)
          } catch (Pv) {
            vv.removePendingData(this), vv.mzv || Zv.d.Error(`Unable to delay load geometry data for mesh "${this.name}" from "${this.delayLoadingFile}": ${Pv}`)
          }
        })(), this
      }
      isInFrustum(vv) {
        return 2 !== this.delayLoadState && (!!super.isInFrustum(vv) && (this._checkDelayState(), !0))
      }
      setMaterialById(vv) {
        const zv = this.rD().materials;
        let Pv;
        for (Pv = zv.length - 1; Pv > -1; Pv--)
          if (zv[Pv].id === vv) return this.material = zv[Pv], this;
        const hv = this.rD().multiMaterials;
        for (Pv = hv.length - 1; Pv > -1; Pv--)
          if (hv[Pv].id === vv) return this.material = hv[Pv], this;
        return this
      }
      getAnimatables() {
        const vv = [];
        return this.material && vv.push(this.material), this.skeleton && vv.push(this.skeleton), vv
      }
      bakeTransformIntoVertices(vv) {
        if (!this.isVerticesDataPresent(Dv.k.PositionKind)) return this;
        const zv = this.sF.splice(0);
        this._resetPointsArrayCache();
        let Pv = this.getVerticesData(Dv.k.PositionKind);
        const hv = Yv.l.Zero();
        let Sv;
        for (Sv = 0; Sv < Pv.length; Sv += 3) Yv.l.TransformCoordinatesFromFloatsToRef(Pv[Sv], Pv[Sv + 1], Pv[Sv + 2], vv, hv).toArray(Pv, Sv);
        if (this.setVerticesData(Dv.k.PositionKind, Pv, this.getVertexBuffer(Dv.k.PositionKind).isUpdatable()), this.isVerticesDataPresent(Dv.k.NormalKind)) {
          for (Pv = this.getVerticesData(Dv.k.NormalKind), Sv = 0; Sv < Pv.length; Sv += 3) Yv.l.TransformNormalFromFloatsToRef(Pv[Sv], Pv[Sv + 1], Pv[Sv + 2], vv, hv).normalize().toArray(Pv, Sv);
          this.setVerticesData(Dv.k.NormalKind, Pv, this.getVertexBuffer(Dv.k.NormalKind).isUpdatable())
        }
        if (this.isVerticesDataPresent(Dv.k.TangentKind)) {
          for (Pv = this.getVerticesData(Dv.k.TangentKind), Sv = 0; Sv < Pv.length; Sv += 4) Yv.l.TransformNormalFromFloatsToRef(Pv[Sv], Pv[Sv + 1], Pv[Sv + 2], vv, hv).normalize().toArray(Pv, Sv);
          this.setVerticesData(Dv.k.TangentKind, Pv, this.getVertexBuffer(Dv.k.TangentKind).isUpdatable())
        }
        return vv.determinant() < 0 && this.flipFaces(), this.releaseSubMeshes(), this.sF = zv, this
      }
      bakeCurrentTransformIntoVertices() {
        let vv = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] && this.makeGeometryUnique(), this.bakeTransformIntoVertices(this.computeWorldMatrix(!0)), this.resetLocalMatrix(vv), this
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
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Pv = arguments.length > 2 ? arguments[2] : void 0,
          hv = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        if (zv && void 0 === zv._addToSceneRootNodes) {
          const Pv = zv;
          return rv.source = this, rv.doNotCloneChildren = Pv.doNotCloneChildren, rv.clonePhysicsImpostor = Pv.clonePhysicsImpostor, rv.cloneThinInstances = Pv.cloneThinInstances, new kv(vv, this.rD(), rv)
        }
        return new kv(vv, this.rD(), zv, this, Pv, hv)
      }
      dispose(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.morphTargetManager = null, this._geometry && this._geometry.releaseForMesh(this, !0);
        const Pv = this._internalMeshDataInfo;
        if (Pv._onBeforeDrawObservable && Pv._onBeforeDrawObservable.clear(), Pv._onBeforeBindObservable && Pv._onBeforeBindObservable.clear(), Pv._onBeforeRenderObservable && Pv._onBeforeRenderObservable.clear(), Pv._onAfterRenderObservable && Pv._onAfterRenderObservable.clear(), Pv._onBetweenPassObservable && Pv._onBetweenPassObservable.clear(), this._scene.useClonedMeshMap) {
          if (Pv.meshMap)
            for (const vv in Pv.meshMap) {
              const zv = Pv.meshMap[vv];
              zv && (zv._internalMeshDataInfo._source = null, Pv.meshMap[vv] = void 0)
            }
          Pv._source && Pv._source._internalMeshDataInfo.meshMap && (Pv._source._internalMeshDataInfo.meshMap[this.uniqueId] = void 0)
        } else {
          const vv = this.rD().meshes;
          for (const zv of vv) {
            const vv = zv;
            vv._internalMeshDataInfo && vv._internalMeshDataInfo._source && vv._internalMeshDataInfo._source === this && (vv._internalMeshDataInfo._source = null)
          }
        }
        Pv._source = null, this._disposeInstanceSpecificData(), this._disposeThinInstanceSpecificData(), this._internalMeshDataInfo._checkReadinessObserver && this._scene.onBeforeRenderObservable.remove(this._internalMeshDataInfo._checkReadinessObserver), super.dispose(vv, zv)
      }
      _disposeInstanceSpecificData() {}
      _disposeThinInstanceSpecificData() {}
      _invalidateInstanceVertexArrayObject() {}
      applyDisplacementMap(vv, zv, Pv, hv, Sv, ev) {
        let gv = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          pv = arguments.length > 7 ? arguments[7] : void 0;
        const dv = this.rD();
        return (0, Gv.n)(vv, (vv => {
          const pv = vv.width,
            dv = vv.height,
            Nv = this.ma().createCanvas(pv, dv).getContext("2d");
          Nv.drawImage(vv, 0, 0);
          const lv = Nv.getImageData(0, 0, pv, dv).data;
          this.applyDisplacementMapFromBuffer(lv, pv, dv, zv, Pv, Sv, ev, gv), hv && hv(this)
        }), pv || (() => {}), dv.offlineProvider), this
      }
      applyDisplacementMapFromBuffer(vv, zv, Pv, hv, Sv, ev, gv) {
        let pv = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
        if (!this.isVerticesDataPresent(Dv.k.PositionKind) || !this.isVerticesDataPresent(Dv.k.NormalKind) || !this.isVerticesDataPresent(Dv.k.UVKind)) return Zv.d.Warn("Cannot call applyDisplacementMap: Given mesh is not complete. Position, Normal or UV are missing"), this;
        const dv = this.getVerticesData(Dv.k.PositionKind, !0, !0),
          Nv = this.getVerticesData(Dv.k.NormalKind),
          lv = this.getVerticesData(Dv.k.UVKind);
        let Tv = Yv.l.Zero();
        const Wv = Yv.l.Zero(),
          wv = Yv.j.Zero();
        ev = ev || Yv.j.Zero(), gv = gv || new Yv.j(1, 1);
        for (let av = 0; av < dv.length; av += 3) {
          Yv.l.FromArrayToRef(dv, av, Tv), Yv.l.FromArrayToRef(Nv, av, Wv), Yv.j.FromArrayToRef(lv, av / 3 * 2, wv);
          const pv = 4 * ((Math.abs(wv.x * gv.x + ev.x % 1) * (zv - 1) % zv | 0) + (Math.abs(wv.y * gv.y + ev.y % 1) * (Pv - 1) % Pv | 0) * zv),
            sv = .3 * (vv[pv] / 255) + .59 * (vv[pv + 1] / 255) + .11 * (vv[pv + 2] / 255);
          Wv.normalize(), Wv.scaleInPlace(hv + (Sv - hv) * sv), Tv = Tv.add(Wv), Tv.toArray(dv, av)
        }
        return Kv.d.ComputeNormals(dv, this.dPv(), Nv), pv ? (this.setVerticesData(Dv.k.PositionKind, dv), this.setVerticesData(Dv.k.NormalKind, Nv), this.setVerticesData(Dv.k.UVKind, lv)) : (this.updateVerticesData(Dv.k.PositionKind, dv), this.updateVerticesData(Dv.k.NormalKind, Nv)), this
      }
      _getFlattenedNormals(vv, zv) {
        const Pv = new Float32Array(3 * vv.length);
        let hv = 0;
        const Sv = this.sideOrientation === (this._scene.useRightHandedSystem ? 1 : 0);
        for (let ev = 0; ev < vv.length; ev += 3) {
          const gv = Yv.l.FromArray(zv, 3 * vv[ev]),
            pv = Yv.l.FromArray(zv, 3 * vv[ev + 1]),
            dv = Yv.l.FromArray(zv, 3 * vv[ev + 2]),
            Nv = gv.subtract(pv),
            lv = dv.subtract(pv),
            Tv = Yv.l.Normalize(Yv.l.Cross(Nv, lv));
          Sv && Tv.scaleInPlace(-1);
          for (let vv = 0; vv < 3; vv++) Pv[hv++] = Tv.x, Pv[hv++] = Tv.y, Pv[hv++] = Tv.z
        }
        return Pv
      }
      _convertToUnIndexedMesh() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const zv = this.getVerticesDataKinds().filter((vv => !this.getVertexBuffer(vv)?.getIsInstanced())),
          Pv = this.dPv(!1, !0),
          hv = {},
          Sv = (vv, zv) => {
            const hv = new Float32Array(Pv.length * zv);
            let Sv = 0;
            for (let ev = 0; ev < Pv.length; ev++)
              for (let gv = 0; gv < zv; gv++) hv[Sv++] = vv[Pv[ev] * zv + gv];
            return hv
          },
          ev = this.cV(),
          gv = this.geometry ? this.sF.slice(0) : [];
        for (const pv of zv) hv[pv] = this.getVerticesData(pv);
        for (const pv of zv) {
          const zv = this.getVertexBuffer(pv),
            ev = zv.getSize();
          if (vv && pv === Dv.k.NormalKind) {
            const vv = this._getFlattenedNormals(Pv, hv[Dv.k.PositionKind]);
            this.setVerticesData(Dv.k.NormalKind, vv, zv.isUpdatable(), ev)
          } else this.setVerticesData(pv, Sv(hv[pv], ev), zv.isUpdatable(), ev)
        }
        if (this.morphTargetManager) {
          for (let zv = 0; zv < this.morphTargetManager.numTargets; zv++) {
            const hv = this.morphTargetManager.getTarget(zv),
              ev = hv.getPositions();
            hv.Hev(Sv(ev, 3));
            const gv = hv.getNormals();
            gv && hv.setNormals(vv ? this._getFlattenedNormals(Pv, ev) : Sv(gv, 3));
            const pv = hv.getTangents();
            pv && hv.setTangents(Sv(pv, 3));
            const dv = hv.getUVs();
            dv && hv.setUVs(Sv(dv, 2));
            const Nv = hv.getColors();
            Nv && hv.setColors(Sv(Nv, 4))
          }
          this.morphTargetManager.synchronize()
        }
        for (let pv = 0; pv < Pv.length; pv++) Pv[pv] = pv;
        this.setIndices(Pv), this._unIndexed = !0, this.releaseSubMeshes();
        for (const pv of gv) {
          const vv = pv.cV();
          Rv.c.AddToMesh(pv.materialIndex, pv.indexStart, pv.indexCount, pv.indexStart, pv.indexCount, this).setBoundingInfo(vv)
        }
        return this.setBoundingInfo(ev), this.synchronizeInstances(), this
      }
      convertToFlatShadedMesh() {
        return this._convertToUnIndexedMesh(!0)
      }
      convertToUnIndexedMesh() {
        return this._convertToUnIndexedMesh()
      }
      flipFaces() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const zv = Kv.d.ExtractFromMesh(this);
        let Pv;
        if (vv && this.isVerticesDataPresent(Dv.k.NormalKind) && zv.normals) {
          for (Pv = 0; Pv < zv.normals.length; Pv++) zv.normals[Pv] *= -1;
          this.setVerticesData(Dv.k.NormalKind, zv.normals, this.isVertexBufferUpdatable(Dv.k.NormalKind))
        }
        if (zv.indices) {
          let vv;
          for (Pv = 0; Pv < zv.indices.length; Pv += 3) vv = zv.indices[Pv + 1], zv.indices[Pv + 1] = zv.indices[Pv + 2], zv.indices[Pv + 2] = vv;
          this.setIndices(zv.indices, null, this.isVertexBufferUpdatable(Dv.k.PositionKind), !0)
        }
        return this
      }
      increaseVertices() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        const zv = Kv.d.ExtractFromMesh(this),
          Pv = zv.indices && !Array.isArray(zv.indices) && Array.from ? Array.from(zv.indices) : zv.indices,
          hv = zv.positions && !Array.isArray(zv.positions) && Array.from ? Array.from(zv.positions) : zv.positions,
          Sv = zv.uvs && !Array.isArray(zv.uvs) && Array.from ? Array.from(zv.uvs) : zv.uvs,
          ev = zv.normals && !Array.isArray(zv.normals) && Array.from ? Array.from(zv.normals) : zv.normals;
        if (Pv && hv) {
          zv.indices = Pv, zv.positions = hv, Sv && (zv.uvs = Sv), ev && (zv.normals = ev);
          const gv = vv + 1,
            pv = [];
          for (let vv = 0; vv < gv + 1; vv++) pv[vv] = [];
          let dv, Nv;
          const lv = new Yv.l(0, 0, 0),
            Tv = new Yv.l(0, 0, 0),
            Wv = new Yv.j(0, 0),
            wv = [],
            av = [],
            sv = [];
          let Cv, iv, cv, Gv = hv.length;
          Sv && (iv = Sv.length), ev && (cv = ev.length);
          for (let vv = 0; vv < Pv.length; vv += 3) {
            av[0] = Pv[vv], av[1] = Pv[vv + 1], av[2] = Pv[vv + 2];
            for (let vv = 0; vv < 3; vv++)
              if (dv = av[vv], Nv = av[(vv + 1) % 3], void 0 === sv[dv] && void 0 === sv[Nv] ? (sv[dv] = [], sv[Nv] = []) : (void 0 === sv[dv] && (sv[dv] = []), void 0 === sv[Nv] && (sv[Nv] = [])), void 0 === sv[dv][Nv] && void 0 === sv[Nv][dv]) {
                sv[dv][Nv] = [], lv.x = (hv[3 * Nv] - hv[3 * dv]) / gv, lv.y = (hv[3 * Nv + 1] - hv[3 * dv + 1]) / gv, lv.z = (hv[3 * Nv + 2] - hv[3 * dv + 2]) / gv, ev && (Tv.x = (ev[3 * Nv] - ev[3 * dv]) / gv, Tv.y = (ev[3 * Nv + 1] - ev[3 * dv + 1]) / gv, Tv.z = (ev[3 * Nv + 2] - ev[3 * dv + 2]) / gv), Sv && (Wv.x = (Sv[2 * Nv] - Sv[2 * dv]) / gv, Wv.y = (Sv[2 * Nv + 1] - Sv[2 * dv + 1]) / gv), sv[dv][Nv].push(dv);
                for (let vv = 1; vv < gv; vv++) sv[dv][Nv].push(hv.length / 3), hv[Gv++] = hv[3 * dv] + vv * lv.x, hv[Gv++] = hv[3 * dv + 1] + vv * lv.y, hv[Gv++] = hv[3 * dv + 2] + vv * lv.z, ev && (ev[cv++] = ev[3 * dv] + vv * Tv.x, ev[cv++] = ev[3 * dv + 1] + vv * Tv.y, ev[cv++] = ev[3 * dv + 2] + vv * Tv.z), Sv && (Sv[iv++] = Sv[2 * dv] + vv * Wv.x, Sv[iv++] = Sv[2 * dv + 1] + vv * Wv.y);
                sv[dv][Nv].push(Nv), sv[Nv][dv] = [], Cv = sv[dv][Nv].length;
                for (let vv = 0; vv < Cv; vv++) sv[Nv][dv][vv] = sv[dv][Nv][Cv - 1 - vv]
              } pv[0][0] = Pv[vv], pv[1][0] = sv[Pv[vv]][Pv[vv + 1]][1], pv[1][1] = sv[Pv[vv]][Pv[vv + 2]][1];
            for (let zv = 2; zv < gv; zv++) {
              pv[zv][0] = sv[Pv[vv]][Pv[vv + 1]][zv], pv[zv][zv] = sv[Pv[vv]][Pv[vv + 2]][zv], lv.x = (hv[3 * pv[zv][zv]] - hv[3 * pv[zv][0]]) / zv, lv.y = (hv[3 * pv[zv][zv] + 1] - hv[3 * pv[zv][0] + 1]) / zv, lv.z = (hv[3 * pv[zv][zv] + 2] - hv[3 * pv[zv][0] + 2]) / zv, ev && (Tv.x = (ev[3 * pv[zv][zv]] - ev[3 * pv[zv][0]]) / zv, Tv.y = (ev[3 * pv[zv][zv] + 1] - ev[3 * pv[zv][0] + 1]) / zv, Tv.z = (ev[3 * pv[zv][zv] + 2] - ev[3 * pv[zv][0] + 2]) / zv), Sv && (Wv.x = (Sv[2 * pv[zv][zv]] - Sv[2 * pv[zv][0]]) / zv, Wv.y = (Sv[2 * pv[zv][zv] + 1] - Sv[2 * pv[zv][0] + 1]) / zv);
              for (let vv = 1; vv < zv; vv++) pv[zv][vv] = hv.length / 3, hv[Gv++] = hv[3 * pv[zv][0]] + vv * lv.x, hv[Gv++] = hv[3 * pv[zv][0] + 1] + vv * lv.y, hv[Gv++] = hv[3 * pv[zv][0] + 2] + vv * lv.z, ev && (ev[cv++] = ev[3 * pv[zv][0]] + vv * Tv.x, ev[cv++] = ev[3 * pv[zv][0] + 1] + vv * Tv.y, ev[cv++] = ev[3 * pv[zv][0] + 2] + vv * Tv.z), Sv && (Sv[iv++] = Sv[2 * pv[zv][0]] + vv * Wv.x, Sv[iv++] = Sv[2 * pv[zv][0] + 1] + vv * Wv.y)
            }
            pv[gv] = sv[Pv[vv + 1]][Pv[vv + 2]], wv.push(pv[0][0], pv[1][0], pv[1][1]);
            for (let vv = 1; vv < gv; vv++) {
              let zv;
              for (zv = 0; zv < vv; zv++) wv.push(pv[vv][zv], pv[vv + 1][zv], pv[vv + 1][zv + 1]), wv.push(pv[vv][zv], pv[vv + 1][zv + 1], pv[vv][zv + 1]);
              wv.push(pv[vv][zv], pv[vv + 1][zv], pv[vv + 1][zv + 1])
            }
          }
          zv.indices = wv, zv.applyToMesh(this, this.isVertexBufferUpdatable(Dv.k.PositionKind))
        } else Zv.d.Warn("Couldn't increase number of vertices : VertexData must contain at least indices and positions")
      }
      forceSharedVertices() {
        const vv = Kv.d.ExtractFromMesh(this),
          zv = vv.uvs,
          Pv = vv.indices,
          hv = vv.positions,
          Sv = vv.colors,
          ev = vv.matricesIndices,
          gv = vv.matricesWeights,
          pv = vv.matricesIndicesExtra,
          dv = vv.matricesWeightsExtra;
        if (void 0 === Pv || void 0 === hv || null === Pv || null === hv) Zv.d.Warn("VertexData contains empty entries");
        else {
          const Nv = [],
            lv = [],
            Tv = [],
            Wv = [],
            wv = [],
            av = [],
            sv = [],
            Cv = [];
          let iv, cv = 0;
          const Gv = {};
          let mv, jv;
          for (let vv = 0; vv < Pv.length; vv += 3) {
            jv = [Pv[vv], Pv[vv + 1], Pv[vv + 2]], iv = [];
            for (let vv = 0; vv < 3; vv++) {
              iv[vv] = "";
              for (let zv = 0; zv < 3; zv++) Math.abs(hv[3 * jv[vv] + zv]) < 1e-8 && (hv[3 * jv[vv] + zv] = 0), iv[vv] += hv[3 * jv[vv] + zv] + "|"
            }
            if (iv[0] != iv[1] && iv[0] != iv[2] && iv[1] != iv[2])
              for (let vv = 0; vv < 3; vv++) {
                if (mv = Gv[iv[vv]], void 0 === mv) {
                  Gv[iv[vv]] = cv, mv = cv++;
                  for (let zv = 0; zv < 3; zv++) Nv.push(hv[3 * jv[vv] + zv]);
                  if (null !== Sv && void 0 !== Sv)
                    for (let zv = 0; zv < 4; zv++) Wv.push(Sv[4 * jv[vv] + zv]);
                  if (null !== zv && void 0 !== zv)
                    for (let Pv = 0; Pv < 2; Pv++) Tv.push(zv[2 * jv[vv] + Pv]);
                  if (null !== ev && void 0 !== ev)
                    for (let zv = 0; zv < 4; zv++) wv.push(ev[4 * jv[vv] + zv]);
                  if (null !== gv && void 0 !== gv)
                    for (let zv = 0; zv < 4; zv++) av.push(gv[4 * jv[vv] + zv]);
                  if (null !== pv && void 0 !== pv)
                    for (let zv = 0; zv < 4; zv++) sv.push(pv[4 * jv[vv] + zv]);
                  if (null !== dv && void 0 !== dv)
                    for (let zv = 0; zv < 4; zv++) Cv.push(dv[4 * jv[vv] + zv])
                }
                lv.push(mv)
              }
          }
          const fv = [];
          Kv.d.ComputeNormals(Nv, lv, fv), vv.positions = Nv, vv.indices = lv, vv.normals = fv, null !== zv && void 0 !== zv && (vv.uvs = Tv), null !== Sv && void 0 !== Sv && (vv.colors = Wv), null !== ev && void 0 !== ev && (vv.matricesIndices = wv), null !== gv && void 0 !== gv && (vv.matricesWeights = av), null !== pv && void 0 !== pv && (vv.matricesIndicesExtra = sv), null !== gv && void 0 !== gv && (vv.matricesWeightsExtra = Cv), vv.applyToMesh(this, this.isVertexBufferUpdatable(Dv.k.PositionKind))
        }
      }
      static _instancedMeshFactory(vv, zv) {
        throw (0, Lv.m)("InstancedMesh")
      }
      static _PhysicsImpostorParser(vv, zv, Pv) {
        throw (0, Lv.m)("PhysicsImpostor")
      }
      createInstance(vv) {
        const zv = kv._instancedMeshFactory(vv, this);
        return zv.parent = this.parent, zv
      }
      synchronizeInstances() {
        for (let vv = 0; vv < this.instances.length; vv++) {
          this.instances[vv]._syncSubMeshes()
        }
        return this
      }
      optimizeIndices(vv) {
        const zv = this.dPv(),
          Pv = this.getVerticesData(Dv.k.PositionKind);
        if (!Pv || !zv) return this;
        const hv = [];
        for (let ev = 0; ev < Pv.length; ev += 3) hv.push(Yv.l.FromArray(Pv, ev));
        const Sv = [];
        return cv.d.SyncAsyncForLoop(hv.length, 40, (vv => {
          const zv = hv.length - 1 - vv,
            Pv = hv[zv];
          for (let ev = 0; ev < zv; ++ev) {
            const vv = hv[ev];
            if (Pv.equals(vv)) {
              Sv[zv] = ev;
              break
            }
          }
        }), (() => {
          for (let vv = 0; vv < zv.length; ++vv) zv[vv] = Sv[zv[vv]] || zv[vv];
          const Pv = this.sF.slice(0);
          this.setIndices(zv), this.sF = Pv, vv && vv(this)
        })), this
      }
      serialize() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        vv.name = this.name, vv.id = this.id, vv.uniqueId = this.uniqueId, vv.type = this.getClassName(), jv.c && jv.c.HasTags(this) && (vv.tags = jv.c.GetTags(this)), vv.position = this.position.pPv(), this.rotationQuaternion ? vv.rotationQuaternion = this.rotationQuaternion.pPv() : this.rotation && (vv.rotation = this.rotation.pPv()), vv.pp = this.pp.pPv(), this._postMultiplyPivotMatrix ? vv.pivotMatrix = this.getPivotMatrix().pPv() : vv.localMatrix = this.getPivotMatrix().pPv(), vv.isEnabled = this.isEnabled(!1), vv.isVisible = this.isVisible, vv.infiniteDistance = this.infiniteDistance, vv.pickable = this.Zs, vv.receiveShadows = this.receiveShadows, vv.billboardMode = this.billboardMode, vv.visibility = this.visibility, vv.ja = this.ja, vv.checkCollisions = this.checkCollisions, vv.ellipsoid = this.ellipsoid.pPv(), vv.ellipsoidOffset = this.ellipsoidOffset.pPv(), vv.Ya = this.Ya, vv.isBlocker = this.isBlocker, vv.sideOrientation = this.sideOrientation, this._isWorldMatrixFrozen && (vv.lK = !0), this.parent && this.parent._serializeAsParent(vv), vv.isUnIndexed = this.isUnIndexed;
        const zv = this._geometry;
        if (zv && this.sF) {
          vv.geometryUniqueId = zv.uniqueId, vv.geometryId = zv.id, vv.sF = [];
          for (let zv = 0; zv < this.sF.length; zv++) {
            const Pv = this.sF[zv];
            vv.sF.push({
              materialIndex: Pv.materialIndex,
              verticesStart: Pv.verticesStart,
              verticesCount: Pv.verticesCount,
              indexStart: Pv.indexStart,
              indexCount: Pv.indexCount
            })
          }
        }
        if (this.material ? this.material.doNotSerialize || (vv.materialUniqueId = this.material.uniqueId, vv.materialId = this.material.id) : (this.material = null, vv.materialUniqueId = this._scene.defaultMaterial.uniqueId, vv.materialId = this._scene.defaultMaterial.id), this.morphTargetManager && (vv.morphTargetManagerId = this.morphTargetManager.uniqueId), this.skeleton && (vv.skeletonId = this.skeleton.id, vv.skeletonUniqueId = this.skeleton.uniqueId, vv.numBoneInfluencers = this.numBoneInfluencers), this.rD()._getComponent(Hv.d.NAME_PHYSICSENGINE)) {
          const zv = this.getPhysicsImpostor?.();
          zv && (vv.physicsMass = zv.getParam("Dl"), vv.physicsFriction = zv.getParam("friction"), vv.physicsRestitution = zv.getParam("Dl"), vv.physicsImpostor = zv.type)
        }
        this.metadata && (vv.metadata = this.metadata), 0 !== this.meshBlendingTag && (vv.meshBlendingTag = this.meshBlendingTag), vv.instances = [];
        for (let Pv = 0; Pv < this.instances.length; Pv++) {
          const zv = this.instances[Pv];
          if (zv.doNotSerialize) continue;
          const hv = {
            name: zv.name,
            id: zv.id,
            isEnabled: zv.isEnabled(!1),
            isVisible: zv.isVisible,
            Zs: zv.Zs,
            checkCollisions: zv.checkCollisions,
            position: zv.position.pPv(),
            pp: zv.pp.pPv()
          };
          if (zv.parent && zv.parent._serializeAsParent(hv), zv.rotationQuaternion ? hv.rotationQuaternion = zv.rotationQuaternion.pPv() : zv.rotation && (hv.rotation = zv.rotation.pPv()), this.rD()._getComponent(Hv.d.NAME_PHYSICSENGINE)) {
            const vv = zv.getPhysicsImpostor?.();
            vv && (hv.physicsMass = vv.getParam("Dl"), hv.physicsFriction = vv.getParam("friction"), hv.physicsRestitution = vv.getParam("Dl"), hv.physicsImpostor = vv.type)
          }
          zv.metadata && (hv.metadata = zv.metadata), zv.actionManager && (hv.actions = zv.actionManager.serialize(zv.name)), vv.instances.push(hv), Qv.c.AppendSerializedAnimations(zv, hv), hv.PC = zv.serializeAnimationRanges()
        }
        if (this._thinInstanceDataStorage.instancesCount && this._thinInstanceDataStorage.matrixData && (vv.thinInstances = {
            instancesCount: this._thinInstanceDataStorage.instancesCount,
            matrixData: Array.from(this._thinInstanceDataStorage.matrixData),
            matrixBufferSize: this._thinInstanceDataStorage.matrixBufferSize,
            enablePicking: this.Fvv
          }, this._userThinInstanceBuffersStorage)) {
          const zv = {
            data: {},
            sizes: {},
            strides: {}
          };
          for (const vv in this._userThinInstanceBuffersStorage.data) zv.data[vv] = Array.from(this._userThinInstanceBuffersStorage.data[vv]), zv.sizes[vv] = this._userThinInstanceBuffersStorage.sizes[vv], zv.strides[vv] = this._userThinInstanceBuffersStorage.strides[vv];
          vv.thinInstances.userThinInstance = zv
        }
        return Qv.c.AppendSerializedAnimations(this, vv), vv.PC = this.serializeAnimationRanges(), vv.layerMask = this.layerMask, vv.alphaIndex = this.alphaIndex, vv.hasVertexAlpha = this.hasVertexAlpha, vv.overlayAlpha = this.overlayAlpha, vv.overlayColor = this.overlayColor.pPv(), vv.renderOverlay = this.renderOverlay, vv.applyFog = this.applyFog, this.actionManager && (vv.actions = this.actionManager.serialize(this.name)), vv
      }
      _syncGeometryWithMorphTargetManager() {
        if (!this.geometry) return;
        this._markSubMeshesAsAttributesDirty();
        const vv = this._internalAbstractMeshDataInfo._morphTargetManager;
        if (vv && vv.vertexCount) {
          if (vv.vertexCount !== this.getTotalVertices()) return Zv.d.Error("Mesh is incompatible with morph targets. Targets and mesh must all have the same vertices count."), void(this.morphTargetManager = null);
          if (vv.isUsingTextureForTargets) return;
          for (let zv = 0; zv < vv.numInfluencers; zv++) {
            const Pv = vv.getActiveTarget(zv),
              hv = Pv.getPositions();
            if (!hv) return void Zv.d.Error("Invalid morph target. Target must have positions.");
            this.geometry.setVerticesData(Dv.k.PositionKind + zv, hv, !1, 3);
            const Sv = Pv.getNormals();
            Sv && this.geometry.setVerticesData(Dv.k.NormalKind + zv, Sv, !1, 3);
            const ev = Pv.getTangents();
            ev && this.geometry.setVerticesData(Dv.k.TangentKind + zv, ev, !1, 3);
            const gv = Pv.getUVs();
            gv && this.geometry.setVerticesData(Dv.k.UVKind + "_" + zv, gv, !1, 2);
            const pv = Pv.getUV2s();
            pv && this.geometry.setVerticesData(Dv.k.UV2Kind + "_" + zv, pv, !1, 2);
            const dv = Pv.getColors();
            dv && this.geometry.setVerticesData(Dv.k.ColorKind + zv, dv, !1, 4)
          }
        } else {
          let vv = 0;
          for (; this.geometry.isVerticesDataPresent(Dv.k.PositionKind + vv);) this.geometry.removeVerticesData(Dv.k.PositionKind + vv), this.geometry.isVerticesDataPresent(Dv.k.NormalKind + vv) && this.geometry.removeVerticesData(Dv.k.NormalKind + vv), this.geometry.isVerticesDataPresent(Dv.k.TangentKind + vv) && this.geometry.removeVerticesData(Dv.k.TangentKind + vv), this.geometry.isVerticesDataPresent(Dv.k.UVKind + "_" + vv) && this.geometry.removeVerticesData(Dv.k.UVKind + "_" + vv), this.geometry.isVerticesDataPresent(Dv.k.UV2Kind + "_" + vv) && this.geometry.removeVerticesData(Dv.k.UV2Kind + "_" + vv), this.geometry.isVerticesDataPresent(Dv.k.ColorKind + vv) && this.geometry.removeVerticesData(Dv.k.ColorKind + vv), vv++
        }
      }
      static Parse(vv, zv, Pv) {
        let hv, Sv = !1;
        if (vv.type && "LinesMesh" === vv.type ? hv = kv._LinesMeshParser(vv, zv) : vv.type && "GroundMesh" === vv.type ? hv = kv._GroundMeshParser(vv, zv) : vv.type && "GoldbergMesh" === vv.type ? hv = kv._GoldbergMeshParser(vv, zv) : vv.type && "GreasedLineMesh" === vv.type ? hv = kv._GreasedLineMeshParser(vv, zv) : vv.type && "TrailMesh" === vv.type ? hv = kv._TrailMeshParser(vv, zv) : vv.type && "GaussianSplattingMesh" === vv.type ? (hv = vv._isCompound ? kv._GaussianSplattingCompoundMeshParser(vv, zv) : kv._GaussianSplattingMeshParser(vv, zv), Sv = !0) : vv.type && "GaussianSplattingPartProxyMesh" === vv.type ? (hv = kv._GaussianSplattingPartProxyMeshParser(vv, zv), Sv = !0) : hv = new kv(vv.name, zv), hv.id = vv.id, hv._waitingParsedUniqueId = vv.uniqueId, jv.c && jv.c.AddTagsTo(hv, vv.tags), hv.position = Yv.l.FromArray(vv.position), void 0 !== vv.metadata && (hv.metadata = vv.metadata), void 0 !== vv.meshBlendingTag && (hv.meshBlendingTag = vv.meshBlendingTag), vv.rotationQuaternion ? hv.rotationQuaternion = Yv.d.FromArray(vv.rotationQuaternion) : vv.rotation && (hv.rotation = Yv.l.FromArray(vv.rotation)), hv.pp = Yv.l.FromArray(vv.pp), vv.localMatrix ? hv.setPreTransformMatrix(Yv.c.FromArray(vv.localMatrix)) : vv.pivotMatrix && hv.setPivotMatrix(Yv.c.FromArray(vv.pivotMatrix)), hv.uF(vv.isEnabled), hv.isVisible = vv.isVisible, hv.infiniteDistance = vv.infiniteDistance, hv.ja = !!vv.ja, hv.showBoundingBox = vv.showBoundingBox, hv.showSubMeshesBoundingBox = vv.showSubMeshesBoundingBox, void 0 !== vv.applyFog && (hv.applyFog = vv.applyFog), void 0 !== vv.pickable && (hv.Zs = vv.pickable), void 0 !== vv.alphaIndex && (hv.alphaIndex = vv.alphaIndex), hv.receiveShadows = vv.receiveShadows, void 0 !== vv.billboardMode && (hv.billboardMode = vv.billboardMode), void 0 !== vv.visibility && (hv.visibility = vv.visibility), hv.checkCollisions = vv.checkCollisions, hv.Ya = !!vv.Ya, vv.ellipsoid && (hv.ellipsoid = Yv.l.FromArray(vv.ellipsoid)), vv.ellipsoidOffset && (hv.ellipsoidOffset = Yv.l.FromArray(vv.ellipsoidOffset)), null != vv.overrideMaterialSideOrientation && (hv.sideOrientation = vv.overrideMaterialSideOrientation), void 0 !== vv.sideOrientation && (hv.sideOrientation = vv.sideOrientation), void 0 !== vv.isBlocker && (hv.isBlocker = vv.isBlocker), hv._shouldGenerateFlatShading = vv.useFlatShading, vv.lK && (hv._waitingData.lK = vv.lK), void 0 !== vv.parentId && (hv._waitingParentId = vv.parentId), void 0 !== vv.parentInstanceIndex && (hv._waitingParentInstanceIndex = vv.parentInstanceIndex), void 0 !== vv.actions && (hv._waitingData.actions = vv.actions), void 0 !== vv.overlayAlpha && (hv.overlayAlpha = vv.overlayAlpha), void 0 !== vv.overlayColor && (hv.overlayColor = nv.b.FromArray(vv.overlayColor)), void 0 !== vv.renderOverlay && (hv.renderOverlay = vv.renderOverlay), hv.isUnIndexed = !!vv.isUnIndexed, hv.hasVertexAlpha = vv.hasVertexAlpha, vv.delayLoadingFile ? (hv.delayLoadState = 4, hv.delayLoadingFile = Pv + vv.delayLoadingFile, hv.buildBoundingInfo(Yv.l.FromArray(vv.boundingBoxMinimum), Yv.l.FromArray(vv.boundingBoxMaximum)), vv._binaryInfo && (hv._binaryInfo = vv._binaryInfo), hv._delayInfo = [], vv.hasUVs && hv._delayInfo.push(Dv.k.UVKind), vv.hasUVs2 && hv._delayInfo.push(Dv.k.UV2Kind), vv.hasUVs3 && hv._delayInfo.push(Dv.k.UV3Kind), vv.hasUVs4 && hv._delayInfo.push(Dv.k.UV4Kind), vv.hasUVs5 && hv._delayInfo.push(Dv.k.UV5Kind), vv.hasUVs6 && hv._delayInfo.push(Dv.k.UV6Kind), vv.hasColors && hv._delayInfo.push(Dv.k.ColorKind), vv.hasMatricesIndices && hv._delayInfo.push(Dv.k.MatricesIndicesKind), vv.hasMatricesWeights && hv._delayInfo.push(Dv.k.MatricesWeightsKind), hv._delayLoadingFunction = Vv.b._ImportGeometry, Iv.e.ForceFullSceneLoadingForIncremental && hv._checkDelayState()) : Sv || Vv.b._ImportGeometry(vv, hv), vv.materialUniqueId ? hv._waitingMaterialId = vv.materialUniqueId : vv.materialId && (hv._waitingMaterialId = vv.materialId), vv.morphTargetManagerId > -1 && (hv._waitingMorphTargetManagerId = vv.morphTargetManagerId), void 0 !== vv.skeletonId && null !== vv.skeletonId && (hv.skeleton = zv.getLastSkeletonById(vv.skeletonId), hv._waitingSkeletonId = vv.skeletonId, vv.numBoneInfluencers && (hv.numBoneInfluencers = vv.numBoneInfluencers)), void 0 !== vv.skeletonUniqueId && null !== vv.skeletonUniqueId && (hv._waitingSkeletonUniqueId = vv.skeletonUniqueId), vv.animations) {
          for (let zv = 0; zv < vv.animations.length; zv++) {
            const Pv = vv.animations[zv],
              Sv = (0, Av.b)("BABYLON.Animation");
            Sv && hv.animations.push(Sv.Parse(Pv))
          }
          Ov.c.ParseAnimationRanges(hv, vv, zv)
        }
        if (vv.autoAnimate && zv.beginAnimation(hv, vv.autoAnimateFrom, vv.autoAnimateTo, vv.autoAnimateLoop, vv.autoAnimateSpeed || 1), vv.layerMask && !isNaN(vv.layerMask) ? hv.layerMask = Math.abs(parseInt(vv.layerMask)) : hv.layerMask = 268435455, vv.physicsImpostor && (hv.physicsImpostor = kv._PhysicsImpostorParser(zv, hv, vv)), vv.lodMeshIds && (hv._waitingData.lods = {
            ids: vv.lodMeshIds,
            distances: vv.lodDistances ? vv.lodDistances : null,
            coverages: vv.lodCoverages ? vv.lodCoverages : null
          }), vv.instances)
          for (let ev = 0; ev < vv.instances.length; ev++) {
            const Pv = vv.instances[ev],
              Sv = hv.createInstance(Pv.name);
            if (Pv.id && (Sv.id = Pv.id), jv.c && (Pv.tags ? jv.c.AddTagsTo(Sv, Pv.tags) : jv.c.AddTagsTo(Sv, vv.tags)), Sv.position = Yv.l.FromArray(Pv.position), void 0 !== Pv.metadata && (Sv.metadata = Pv.metadata), void 0 !== Pv.parentId && (Sv._waitingParentId = Pv.parentId), void 0 !== Pv.parentInstanceIndex && (Sv._waitingParentInstanceIndex = Pv.parentInstanceIndex), void 0 !== Pv.isEnabled && null !== Pv.isEnabled && Sv.uF(Pv.isEnabled), void 0 !== Pv.isVisible && null !== Pv.isVisible && (Sv.isVisible = Pv.isVisible), void 0 !== Pv.Zs && null !== Pv.Zs && (Sv.Zs = Pv.Zs), Pv.rotationQuaternion ? Sv.rotationQuaternion = Yv.d.FromArray(Pv.rotationQuaternion) : Pv.rotation && (Sv.rotation = Yv.l.FromArray(Pv.rotation)), Sv.pp = Yv.l.FromArray(Pv.pp), void 0 != Pv.checkCollisions && null != Pv.checkCollisions && (Sv.checkCollisions = Pv.checkCollisions), void 0 != Pv.pickable && null != Pv.pickable && (Sv.Zs = Pv.pickable), void 0 != Pv.showBoundingBox && null != Pv.showBoundingBox && (Sv.showBoundingBox = Pv.showBoundingBox), void 0 != Pv.showSubMeshesBoundingBox && null != Pv.showSubMeshesBoundingBox && (Sv.showSubMeshesBoundingBox = Pv.showSubMeshesBoundingBox), void 0 != Pv.alphaIndex && null != Pv.showSubMeshesBoundingBox && (Sv.alphaIndex = Pv.alphaIndex), Pv.physicsImpostor && (Sv.physicsImpostor = kv._PhysicsImpostorParser(zv, Sv, Pv)), void 0 !== Pv.actions && (Sv._waitingData.actions = Pv.actions), Pv.animations) {
              for (let vv = 0; vv < Pv.animations.length; vv++) {
                const zv = Pv.animations[vv],
                  hv = (0, Av.b)("BABYLON.Animation");
                hv && Sv.animations.push(hv.Parse(zv))
              }
              Ov.c.ParseAnimationRanges(Sv, Pv, zv), Pv.autoAnimate && zv.beginAnimation(Sv, Pv.autoAnimateFrom, Pv.autoAnimateTo, Pv.autoAnimateLoop, Pv.autoAnimateSpeed || 1)
            }
          }
        if (vv.thinInstances) {
          const zv = vv.thinInstances;
          if (hv.Fvv = !!zv.enablePicking, zv.matrixData ? (hv.N_("matrix", new Float32Array(zv.matrixData), 16, !1), hv._thinInstanceDataStorage.matrixBufferSize = zv.matrixBufferSize, hv._thinInstanceDataStorage.instancesCount = zv.instancesCount) : hv._thinInstanceDataStorage.matrixBufferSize = zv.matrixBufferSize, vv.thinInstances.userThinInstance) {
            const zv = vv.thinInstances.userThinInstance;
            for (const vv in zv.data) hv.N_(vv, new Float32Array(zv.data[vv]), zv.strides[vv], !1), hv._userThinInstanceBuffersStorage.sizes[vv] = zv.sizes[vv]
          }
        }
        return hv
      }
      setPositionsForCPUSkinning() {
        const vv = this._internalMeshDataInfo;
        if (!vv._sourcePositions) {
          const zv = this.getVerticesData(Dv.k.PositionKind);
          if (!zv) return vv._sourcePositions;
          vv._sourcePositions = new Float32Array(zv), this.isVertexBufferUpdatable(Dv.k.PositionKind) || this.setVerticesData(Dv.k.PositionKind, zv, !0)
        }
        return vv._sourcePositions
      }
      setNormalsForCPUSkinning() {
        const vv = this._internalMeshDataInfo;
        if (!vv._sourceNormals) {
          const zv = this.getVerticesData(Dv.k.NormalKind);
          if (!zv) return vv._sourceNormals;
          vv._sourceNormals = new Float32Array(zv), this.isVertexBufferUpdatable(Dv.k.NormalKind) || this.setVerticesData(Dv.k.NormalKind, zv, !0)
        }
        return vv._sourceNormals
      }
      applySkeleton(vv) {
        if (!this.geometry) return this;
        if (this.geometry._softwareSkinningFrameId == this.rD().getFrameId()) return this;
        if (this.geometry._softwareSkinningFrameId = this.rD().getFrameId(), !this.isVerticesDataPresent(Dv.k.PositionKind)) return this;
        if (!this.isVerticesDataPresent(Dv.k.MatricesIndicesKind)) return this;
        if (!this.isVerticesDataPresent(Dv.k.MatricesWeightsKind)) return this;
        const zv = this.isVerticesDataPresent(Dv.k.NormalKind),
          Pv = this._internalMeshDataInfo;
        if (!Pv._sourcePositions) {
          const vv = this.sF.slice();
          this.setPositionsForCPUSkinning(), this.sF = vv
        }
        zv && !Pv._sourceNormals && this.setNormalsForCPUSkinning();
        let hv = this.getVerticesData(Dv.k.PositionKind);
        if (!hv) return this;
        hv instanceof Float32Array || (hv = new Float32Array(hv));
        let Sv = this.getVerticesData(Dv.k.NormalKind);
        if (zv) {
          if (!Sv) return this;
          Sv instanceof Float32Array || (Sv = new Float32Array(Sv))
        }
        const ev = this.getVerticesData(Dv.k.MatricesIndicesKind),
          gv = this.getVerticesData(Dv.k.MatricesWeightsKind);
        if (!gv || !ev) return this;
        const pv = this.numBoneInfluencers > 4,
          dv = pv ? this.getVerticesData(Dv.k.MatricesIndicesExtraKind) : null,
          Nv = pv ? this.getVerticesData(Dv.k.MatricesWeightsExtraKind) : null,
          lv = vv.getTransformMatrices(this),
          Tv = Yv.l.Zero(),
          Wv = new Yv.c,
          wv = new Yv.c;
        let av, sv = 0;
        for (let Cv = 0; Cv < hv.length; Cv += 3, sv += 4) {
          let vv;
          for (av = 0; av < 4; av++) vv = gv[sv + av], vv > 0 && (Yv.c.FromFloat32ArrayToRefScaled(lv, Math.floor(16 * ev[sv + av]), vv, wv), Wv.addToSelf(wv));
          if (pv)
            for (av = 0; av < 4; av++) vv = Nv[sv + av], vv > 0 && (Yv.c.FromFloat32ArrayToRefScaled(lv, Math.floor(16 * dv[sv + av]), vv, wv), Wv.addToSelf(wv));
          Yv.l.TransformCoordinatesFromFloatsToRef(Pv._sourcePositions[Cv], Pv._sourcePositions[Cv + 1], Pv._sourcePositions[Cv + 2], Wv, Tv), Tv.toArray(hv, Cv), zv && (Yv.l.TransformNormalFromFloatsToRef(Pv._sourceNormals[Cv], Pv._sourceNormals[Cv + 1], Pv._sourceNormals[Cv + 2], Wv, Tv), Tv.toArray(Sv, Cv)), Wv.reset()
        }
        return this.updateVerticesData(Dv.k.PositionKind, hv), zv && this.updateVerticesData(Dv.k.NormalKind, Sv), this
      }
      static MinMax(vv) {
        let zv = null,
          Pv = null;
        for (const hv of vv) {
          const vv = hv.cV().boundingBox;
          zv && Pv ? (zv.minimizeInPlace(vv.minimumWorld), Pv.maximizeInPlace(vv.maximumWorld)) : (zv = vv.minimumWorld.clone(), Pv = vv.maximumWorld.clone())
        }
        return zv && Pv ? {
          min: zv,
          max: Pv
        } : {
          min: Yv.l.Zero(),
          max: Yv.l.Zero()
        }
      }
      static Center(vv) {
        const zv = vv instanceof Array ? kv.MinMax(vv) : vv;
        return Yv.l.Center(zv.min, zv.max)
      }
      static MergeMeshes(vv) {
        let zv = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          Pv = arguments.length > 2 ? arguments[2] : void 0,
          hv = arguments.length > 3 ? arguments[3] : void 0,
          Sv = arguments.length > 4 ? arguments[4] : void 0,
          ev = arguments.length > 5 ? arguments[5] : void 0;
        return (0, fv.k)(kv._MergeMeshesCoroutine(vv, zv, Pv, hv, Sv, ev, !1))
      }
      static async MergeMeshesAsync(vv) {
        let zv = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          Pv = arguments.length > 2 ? arguments[2] : void 0,
          hv = arguments.length > 3 ? arguments[3] : void 0,
          Sv = arguments.length > 4 ? arguments[4] : void 0,
          ev = arguments.length > 5 ? arguments[5] : void 0;
        return await (0, fv.h)(kv._MergeMeshesCoroutine(vv, zv, Pv, hv, Sv, ev, !0), (0, fv.b)())
      }
      static * _MergeMeshesCoroutine(vv) {
        let zv, Pv = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          hv = arguments.length > 2 ? arguments[2] : void 0,
          Sv = arguments.length > 3 ? arguments[3] : void 0,
          ev = arguments.length > 4 ? arguments[4] : void 0,
          gv = arguments.length > 5 ? arguments[5] : void 0,
          pv = arguments.length > 6 ? arguments[6] : void 0;
        if (0 === (vv = vv.filter(Boolean)).length) return null;
        if (!hv) {
          let Pv = 0;
          for (zv = 0; zv < vv.length; zv++)
            if (Pv += vv[zv].getTotalVertices(), Pv >= 65536) return Zv.d.Warn("Cannot merge meshes because resulting mesh will have more than 65536 vertices. Please use allow32BitsIndices = true to use 32 bits indices"), null
        }
        const dv = vv[0];
        gv && (ev = !1, vv.sort(((vv, zv) => (vv.material?.uniqueId ?? -1) - (zv.material?.uniqueId ?? -1))));
        const Nv = new Array,
          lv = new Array,
          Tv = new Array,
          Wv = vv[0].sideOrientation;
        for (zv = 0; zv < vv.length; zv++) {
          const Pv = vv[zv];
          if (Pv.zK) return Zv.d.Warn("Cannot merge instance meshes."), null;
          if (Wv !== Pv.sideOrientation) return Zv.d.Warn("Cannot merge meshes with different sideOrientation values."), null;
          if (ev || gv) {
            const vv = Tv.reduce(((vv, zv) => Math.max(vv, zv.start + zv.count)), 0);
            if (gv)
              if (Pv.material) {
                const zv = Pv.material;
                if (zv instanceof qv.d) {
                  for (let vv = 0; vv < zv.T_.length; vv++) Nv.indexOf(zv.T_[vv]) < 0 && Nv.push(zv.T_[vv]);
                  for (let hv = 0; hv < Pv.sF.length; hv++) lv.push(Nv.indexOf(zv.T_[Pv.sF[hv].materialIndex])), Tv.push({
                    start: vv + Pv.sF[hv].indexStart,
                    count: Pv.sF[hv].indexCount
                  })
                } else {
                  Nv.indexOf(zv) < 0 && Nv.push(zv);
                  for (let hv = 0; hv < Pv.sF.length; hv++) lv.push(Nv.indexOf(zv)), Tv.push({
                    start: vv + Pv.sF[hv].indexStart,
                    count: Pv.sF[hv].indexCount
                  })
                }
              } else
                for (let zv = 0; zv < Pv.sF.length; zv++) lv.push(0), Tv.push({
                  start: vv + Pv.sF[zv].indexStart,
                  count: Pv.sF[zv].indexCount
                });
            else Tv.push({
              start: vv,
              count: Pv.getTotalIndices()
            })
          }
        }
        if (gv && Tv.length > 1) {
          let vv = 0;
          for (let zv = 1; zv < Tv.length; zv++) {
            const Pv = Tv[vv],
              hv = Tv[zv];
            lv[zv] === lv[vv] && Pv.start + Pv.count === hv.start ? Pv.count += hv.count : (vv++, Tv[vv] = hv, lv[vv] = lv[zv])
          }
          Tv.length = vv + 1, lv.length = vv + 1
        }
        const wv = vv => {
            const zv = vv.computeWorldMatrix(!0);
            return {
              vertexData: Kv.d.ExtractFromMesh(vv, !1, !1),
              transform: zv
            }
          },
          {
            vertexData: av,
            transform: sv
          } = wv(vv[0]);
        pv && (yield);
        const Cv = new Array(vv.length - 1);
        for (let fv = 1; fv < vv.length; fv++) Cv[fv - 1] = wv(vv[fv]), pv && (yield);
        const iv = av._mergeCoroutine(sv, Cv, hv, pv, !Pv);
        let cv = iv.next();
        for (; !cv.done;) pv && (yield), cv = iv.next();
        const Gv = cv.value;
        Sv || (Sv = new kv(dv.name + "_merged", dv.rD()));
        const mv = Gv._applyToCoroutine(Sv, void 0, pv);
        let jv = mv.next();
        for (; !jv.done;) pv && (yield), jv = mv.next();
        if (Sv.checkCollisions = dv.checkCollisions, Sv.sideOrientation = dv.sideOrientation, Pv)
          for (zv = 0; zv < vv.length; zv++) vv[zv].dispose();
        if (ev || gv) {
          for (Sv.releaseSubMeshes(), zv = 0; zv < Tv.length;) Rv.c.CreateFromIndices(0, Tv[zv].start, Tv[zv].count, Sv, void 0, !1), zv++;
          for (const vv of Sv.sF) vv.refreshBoundingInfo();
          Sv.computeWorldMatrix(!0)
        }
        if (gv) {
          const vv = new qv.d(dv.name + "_merged", dv.rD());
          vv.T_ = Nv;
          for (let zv = 0; zv < Sv.sF.length; zv++) Sv.sF[zv].materialIndex = lv[zv];
          Sv.material = vv
        } else Sv.material = dv.material;
        return Sv
      }
      Yu(vv) {
        vv._indexInSourceMeshInstanceArray = this.instances.length, this.instances.push(vv)
      }
      ku(vv) {
        const zv = vv._indexInSourceMeshInstanceArray;
        if (-1 != zv) {
          if (zv !== this.instances.length - 1) {
            const vv = this.instances[this.instances.length - 1];
            this.instances[zv] = vv, vv._indexInSourceMeshInstanceArray = zv
          }
          vv._indexInSourceMeshInstanceArray = -1, this.instances.pop()
        }
      }
      _shouldConvertRHS() {
        return this._scene.useRightHandedSystem && this.sideOrientation === xv.b.CounterClockWiseSideOrientation
      }
      _getRenderingFillMode(vv) {
        const zv = this.rD();
        return zv.forcePointsCloud ? xv.b.PointFillMode : zv.forceWireframe ? xv.b.WireFrameFillMode : this.overrideRenderingFillMode ?? vv
      }
      setMaterialByID(vv) {
        return this.setMaterialById(vv)
      }
      static CreateRibbon(vv, zv, Pv, hv, Sv, ev, gv, pv, dv) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDisc(vv, zv, Pv, hv, Sv, ev) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateBox(vv, zv, Pv, hv, Sv) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateSphere(vv, zv, Pv, hv, Sv, ev) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateHemisphere(vv, zv, Pv, hv) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateCylinder(vv, zv, Pv, hv, Sv, ev, gv, pv, dv) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTorus(vv, zv, Pv, hv, Sv, ev, gv) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTorusKnot(vv, zv, Pv, hv, Sv, ev, gv, pv, dv, Nv) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateLines(vv, zv, Pv, hv, Sv) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDashedLines(vv, zv, Pv, hv, Sv, ev, gv, pv) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePolygon(vv, zv, Pv, hv, Sv, ev, gv) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudePolygon(vv, zv, Pv, hv, Sv, ev, gv, pv) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudeShape(vv, zv, Pv, hv, Sv, ev, gv, pv, dv, Nv) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudeShapeCustom(vv, zv, Pv, hv, Sv, ev, gv, pv, dv, Nv, lv, Tv) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateLathe(vv, zv, Pv, hv, Sv, ev, gv) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePlane(vv, zv, Pv, hv, Sv) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateGround(vv, zv, Pv, hv, Sv, ev) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTiledGround(vv, zv, Pv, hv, Sv, ev, gv, pv, dv) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateGroundFromHeightMap(vv, zv, Pv, hv, Sv, ev, gv, pv, dv, Nv, lv) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTube(vv, zv, Pv, hv, Sv, ev, gv, pv, dv, Nv) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePolyhedron(vv, zv, Pv) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateIcoSphere(vv, zv, Pv) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDecal(vv, zv, Pv, hv, Sv, ev) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateCapsule(vv, zv, Pv) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtendToGoldberg(vv) {
        throw new Error("Import MeshBuilder to populate this function")
      }
    }
    kv.FRONTSIDE = Kv.d.FRONTSIDE, kv.BACKSIDE = Kv.d.BACKSIDE, kv.DOUBLESIDE = Kv.d.DOUBLESIDE, kv.DEFAULTSIDE = Kv.d.DEFAULTSIDE, kv.NO_CAP = 0, kv.CAP_START = 1, kv.CAP_END = 2, kv.CAP_ALL = 3, kv.NO_FLIP = 0, kv.FLIP_TILE = 1, kv.ROTATE_TILE = 2, kv.FLIP_ROW = 3, kv.ROTATE_ROW = 4, kv.FLIP_N_ROTATE_TILE = 5, kv.FLIP_N_ROTATE_ROW = 6, kv.CENTER = 0, kv.LEFT = 1, kv.RIGHT = 2, kv.TOP = 3, kv.BOTTOM = 4, kv.INSTANCEDMESH_SORT_TRANSPARENT = !1, kv._GroundMeshParser = (vv, zv) => {
      throw (0, Lv.m)("GroundMesh")
    }, kv._GoldbergMeshParser = (vv, zv) => {
      throw (0, Lv.m)("GoldbergMesh")
    }, kv._LinesMeshParser = (vv, zv) => {
      throw (0, Lv.m)("LinesMesh")
    }, kv._GreasedLineMeshParser = (vv, zv) => {
      throw (0, Lv.m)("GreasedLineMesh")
    }, kv._GreasedLineRibbonMeshParser = (vv, zv) => {
      throw (0, Lv.m)("GreasedLineRibbonMesh")
    }, kv._TrailMeshParser = (vv, zv) => {
      throw (0, Lv.m)("TrailMesh")
    }, kv._GaussianSplattingMeshParser = (vv, zv) => {
      throw (0, Lv.m)("GaussianSplattingMesh")
    }, kv._GaussianSplattingPartProxyMeshParser = (vv, zv) => {
      throw (0, Lv.m)("GaussianSplattingPartProxyMesh")
    }, kv._GaussianSplattingCompoundMeshParser = (vv, zv) => {
      throw (0, Lv.m)("GaussianSplattingCompoundMesh")
    };
    let Xv = !1;

    function uv() {
      Xv || (Xv = !0, (0, Av.c)("BABYLON.Mesh", kv))
    }(hv = kv.prototype).hV ?? (hv.hV = (0, Lv.j)("Mesh", "hV")), (Sv = kv.prototype).simplify ?? (Sv.simplify = (0, Lv.j)("Mesh", "simplify")), (ev = kv.prototype).thinInstanceAdd ?? (ev.thinInstanceAdd = (0, Lv.j)("Mesh", "thinInstanceAdd")), (gv = kv.prototype).thinInstanceAddSelf ?? (gv.thinInstanceAddSelf = (0, Lv.j)("Mesh", "thinInstanceAddSelf")), (pv = kv.prototype).thinInstanceRegisterAttribute ?? (pv.thinInstanceRegisterAttribute = (0, Lv.j)("Mesh", "thinInstanceRegisterAttribute")), (dv = kv.prototype).thinInstanceSetMatrixAt ?? (dv.thinInstanceSetMatrixAt = (0, Lv.j)("Mesh", "thinInstanceSetMatrixAt")), (Nv = kv.prototype).thinInstanceSetAttributeAt ?? (Nv.thinInstanceSetAttributeAt = (0, Lv.j)("Mesh", "thinInstanceSetAttributeAt")), (lv = kv.prototype).N_ ?? (lv.N_ = (0, Lv.j)("Mesh", "N_")), (Tv = kv.prototype).thinInstanceGetWorldMatrices ?? (Tv.thinInstanceGetWorldMatrices = (0, Lv.j)("Mesh", "thinInstanceGetWorldMatrices")), (Wv = kv.prototype).P_ ?? (Wv.P_ = (0, Lv.j)("Mesh", "P_")), (wv = kv.prototype).thinInstancePartialBufferUpdate ?? (wv.thinInstancePartialBufferUpdate = (0, Lv.j)("Mesh", "thinInstancePartialBufferUpdate")), (av = kv.prototype).thinInstanceRefreshBoundingInfo ?? (av.thinInstanceRefreshBoundingInfo = (0, Lv.j)("Mesh", "thinInstanceRefreshBoundingInfo")), (sv = kv.prototype).getEmittedParticleSystems ?? (sv.getEmittedParticleSystems = (0, Lv.j)("Mesh", "getEmittedParticleSystems")), (Cv = kv.prototype).getHierarchyEmittedParticleSystems ?? (Cv.getHierarchyEmittedParticleSystems = (0, Lv.j)("Mesh", "getHierarchyEmittedParticleSystems")), Object.getOwnPropertyDescriptor(kv.prototype, "edgesShareWithInstances") || Object.defineProperty(kv.prototype, "edgesShareWithInstances", (0, Lv.g)("Mesh", "edgesShareWithInstances")), Object.getOwnPropertyDescriptor(kv.prototype, "Fvv") || Object.defineProperty(kv.prototype, "Fvv", (0, Lv.g)("Mesh", "Fvv")), Object.getOwnPropertyDescriptor(kv.prototype, "thinInstanceAllowAutomaticStaticBufferRecreation") || Object.defineProperty(kv.prototype, "thinInstanceAllowAutomaticStaticBufferRecreation", (0, Lv.g)("Mesh", "thinInstanceAllowAutomaticStaticBufferRecreation")), Object.getOwnPropertyDescriptor(kv.prototype, "yX") || Object.defineProperty(kv.prototype, "yX", (0, Lv.g)("Mesh", "yX"))
  },
  39720: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => av
    });
    var hv = Pv(39295),
      Sv = Pv(36594),
      ev = Pv(39441),
      gv = Pv(39190),
      pv = Pv(36751),
      dv = Pv(38209),
      Nv = Pv(39300),
      lv = Pv(39716),
      Tv = Pv(39348),
      Wv = Pv(39598);
    class wv {}
    let av = (() => {
      var vv;
      let zv, Pv, av, sv, Cv = [];
      return vv = class {
        constructor() {
          this.uniqueId = 0, this.metadata = {}, this._applyTo = (0, lv.f)(this._applyToCoroutine.bind(this)), this.uniqueId = vv._UniqueIdGenerator, vv._UniqueIdGenerator++
        }
        set(vv, zv) {
          switch (vv.length || dv.d.Warn(`Setting vertex data kind '${zv}' with an empty array`), zv) {
            case ev.k.PositionKind:
              this.positions = vv;
              break;
            case ev.k.NormalKind:
              this.normals = vv;
              break;
            case ev.k.TangentKind:
              this.tangents = vv;
              break;
            case ev.k.UVKind:
              this.uvs = vv;
              break;
            case ev.k.UV2Kind:
              this.uvs2 = vv;
              break;
            case ev.k.UV3Kind:
              this.uvs3 = vv;
              break;
            case ev.k.UV4Kind:
              this.uvs4 = vv;
              break;
            case ev.k.UV5Kind:
              this.uvs5 = vv;
              break;
            case ev.k.UV6Kind:
              this.uvs6 = vv;
              break;
            case ev.k.ColorKind:
              this.colors = vv;
              break;
            case ev.k.MatricesIndicesKind:
              this.matricesIndices = vv;
              break;
            case ev.k.MatricesWeightsKind:
              this.matricesWeights = vv;
              break;
            case ev.k.MatricesIndicesExtraKind:
              this.matricesIndicesExtra = vv;
              break;
            case ev.k.MatricesWeightsExtraKind:
              this.matricesWeightsExtra = vv
          }
        }
        applyToMesh(vv, zv) {
          return this._applyTo(vv, zv, !1), this
        }
        applyToGeometry(vv, zv) {
          return this._applyTo(vv, zv, !1), this
        }
        updateMesh(vv) {
          return this._update(vv), this
        }
        updateGeometry(vv) {
          return this._update(vv), this
        }* _applyToCoroutine(vv) {
          let zv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            Pv = arguments.length > 2 ? arguments[2] : void 0;
          if (this.positions && (vv.setVerticesData(ev.k.PositionKind, this.positions, zv), Pv && (yield)), this.normals && (vv.setVerticesData(ev.k.NormalKind, this.normals, zv), Pv && (yield)), this.tangents && (vv.setVerticesData(ev.k.TangentKind, this.tangents, zv), Pv && (yield)), this.uvs && (vv.setVerticesData(ev.k.UVKind, this.uvs, zv), Pv && (yield)), this.uvs2 && (vv.setVerticesData(ev.k.UV2Kind, this.uvs2, zv), Pv && (yield)), this.uvs3 && (vv.setVerticesData(ev.k.UV3Kind, this.uvs3, zv), Pv && (yield)), this.uvs4 && (vv.setVerticesData(ev.k.UV4Kind, this.uvs4, zv), Pv && (yield)), this.uvs5 && (vv.setVerticesData(ev.k.UV5Kind, this.uvs5, zv), Pv && (yield)), this.uvs6 && (vv.setVerticesData(ev.k.UV6Kind, this.uvs6, zv), Pv && (yield)), this.colors) {
            const hv = this.positions && this.colors.length === this.positions.length ? 3 : 4;
            vv.setVerticesData(ev.k.ColorKind, this.colors, zv, hv), this.hasVertexAlpha && void 0 !== vv.hasVertexAlpha && (vv.hasVertexAlpha = !0), Pv && (yield)
          }
          if (this.matricesIndices && (vv.setVerticesData(ev.k.MatricesIndicesKind, this.matricesIndices, zv), Pv && (yield)), this.matricesWeights && (vv.setVerticesData(ev.k.MatricesWeightsKind, this.matricesWeights, zv), Pv && (yield)), this.matricesIndicesExtra && (vv.setVerticesData(ev.k.MatricesIndicesExtraKind, this.matricesIndicesExtra, zv), Pv && (yield)), this.matricesWeightsExtra && (vv.setVerticesData(ev.k.MatricesWeightsExtraKind, this.matricesWeightsExtra, zv), Pv && (yield)), this.indices ? (vv.setIndices(this.indices, null, zv), Pv && (yield)) : vv.setIndices([], null), vv.sF && this.materialInfos && this.materialInfos.length > 1) {
            const zv = vv;
            zv.sF = [];
            for (const vv of this.materialInfos) new Wv.c(vv.materialIndex, vv.verticesStart, vv.verticesCount, vv.indexStart, vv.indexCount, zv)
          }
          return this
        }
        _update(vv, zv, Pv) {
          return this.positions && vv.updateVerticesData(ev.k.PositionKind, this.positions, zv, Pv), this.normals && vv.updateVerticesData(ev.k.NormalKind, this.normals, zv, Pv), this.tangents && vv.updateVerticesData(ev.k.TangentKind, this.tangents, zv, Pv), this.uvs && vv.updateVerticesData(ev.k.UVKind, this.uvs, zv, Pv), this.uvs2 && vv.updateVerticesData(ev.k.UV2Kind, this.uvs2, zv, Pv), this.uvs3 && vv.updateVerticesData(ev.k.UV3Kind, this.uvs3, zv, Pv), this.uvs4 && vv.updateVerticesData(ev.k.UV4Kind, this.uvs4, zv, Pv), this.uvs5 && vv.updateVerticesData(ev.k.UV5Kind, this.uvs5, zv, Pv), this.uvs6 && vv.updateVerticesData(ev.k.UV6Kind, this.uvs6, zv, Pv), this.colors && vv.updateVerticesData(ev.k.ColorKind, this.colors, zv, Pv), this.matricesIndices && vv.updateVerticesData(ev.k.MatricesIndicesKind, this.matricesIndices, zv, Pv), this.matricesWeights && vv.updateVerticesData(ev.k.MatricesWeightsKind, this.matricesWeights, zv, Pv), this.matricesIndicesExtra && vv.updateVerticesData(ev.k.MatricesIndicesExtraKind, this.matricesIndicesExtra, zv, Pv), this.matricesWeightsExtra && vv.updateVerticesData(ev.k.MatricesWeightsExtraKind, this.matricesWeightsExtra, zv, Pv), this.indices && vv.setIndices(this.indices, null), this
        }
        static _TransformVector3Coordinates(vv, zv) {
          let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : vv.length;
          const ev = Sv.i.fa[0],
            gv = Sv.i.fa[1];
          for (let pv = Pv; pv < Pv + hv; pv += 3) Sv.l.FromArrayToRef(vv, pv, ev), Sv.l.TransformCoordinatesToRef(ev, zv, gv), vv[pv] = gv.x, vv[pv + 1] = gv.y, vv[pv + 2] = gv.z
        }
        static _TransformVector3Normals(vv, zv) {
          let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : vv.length;
          const ev = Sv.i.fa[0],
            gv = Sv.i.fa[1];
          for (let pv = Pv; pv < Pv + hv; pv += 3) Sv.l.FromArrayToRef(vv, pv, ev), Sv.l.TransformNormalToRef(ev, zv, gv), vv[pv] = gv.x, vv[pv + 1] = gv.y, vv[pv + 2] = gv.z
        }
        static _TransformVector4Normals(vv, zv) {
          let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : vv.length;
          const ev = Sv.i.Vector4[0],
            gv = Sv.i.Vector4[1];
          for (let pv = Pv; pv < Pv + hv; pv += 4) Sv.m.FromArrayToRef(vv, pv, ev), Sv.m.TransformNormalToRef(ev, zv, gv), vv[pv] = gv.x, vv[pv + 1] = gv.y, vv[pv + 2] = gv.z, vv[pv + 3] = gv.w
        }
        static _FlipFaces(vv) {
          let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : vv.length;
          for (let hv = zv; hv < zv + Pv; hv += 3) {
            const zv = vv[hv + 1];
            vv[hv + 1] = vv[hv + 2], vv[hv + 2] = zv
          }
        }
        transform(zv) {
          const Pv = zv.determinant() < 0;
          return this.positions && vv._TransformVector3Coordinates(this.positions, zv), this.normals && vv._TransformVector3Normals(this.normals, zv), this.tangents && vv._TransformVector4Normals(this.tangents, zv), Pv && this.indices && vv._FlipFaces(this.indices), this
        }
        splitBasedOnMaterialID() {
          if (!this.materialInfos || this.materialInfos.length < 2) return [this];
          const zv = [];
          for (const Pv of this.materialInfos) {
            const hv = new vv;
            if (this.positions && (hv.positions = this.positions.slice(3 * Pv.verticesStart, 3 * (Pv.verticesCount + Pv.verticesStart))), this.normals && (hv.normals = this.normals.slice(3 * Pv.verticesStart, 3 * (Pv.verticesCount + Pv.verticesStart))), this.tangents && (hv.tangents = this.tangents.slice(4 * Pv.verticesStart, 4 * (Pv.verticesCount + Pv.verticesStart))), this.colors && (hv.colors = this.colors.slice(4 * Pv.verticesStart, 4 * (Pv.verticesCount + Pv.verticesStart))), this.uvs && (hv.uvs = this.uvs.slice(2 * Pv.verticesStart, 2 * (Pv.verticesCount + Pv.verticesStart))), this.uvs2 && (hv.uvs2 = this.uvs2.slice(2 * Pv.verticesStart, 2 * (Pv.verticesCount + Pv.verticesStart))), this.uvs3 && (hv.uvs3 = this.uvs3.slice(2 * Pv.verticesStart, 2 * (Pv.verticesCount + Pv.verticesStart))), this.uvs4 && (hv.uvs4 = this.uvs4.slice(2 * Pv.verticesStart, 2 * (Pv.verticesCount + Pv.verticesStart))), this.uvs5 && (hv.uvs5 = this.uvs5.slice(2 * Pv.verticesStart, 2 * (Pv.verticesCount + Pv.verticesStart))), this.uvs6 && (hv.uvs6 = this.uvs6.slice(2 * Pv.verticesStart, 2 * (Pv.verticesCount + Pv.verticesStart))), this.matricesIndices && (hv.matricesIndices = this.matricesIndices.slice(4 * Pv.verticesStart, 4 * (Pv.verticesCount + Pv.verticesStart))), this.matricesIndicesExtra && (hv.matricesIndicesExtra = this.matricesIndicesExtra.slice(4 * Pv.verticesStart, 4 * (Pv.verticesCount + Pv.verticesStart))), this.matricesWeights && (hv.matricesWeights = this.matricesWeights.slice(4 * Pv.verticesStart, 4 * (Pv.verticesCount + Pv.verticesStart))), this.matricesWeightsExtra && (hv.matricesWeightsExtra = this.matricesWeightsExtra.slice(4 * Pv.verticesStart, 4 * (Pv.verticesCount + Pv.verticesStart))), this.indices) {
              hv.indices = [];
              for (let vv = Pv.indexStart; vv < Pv.indexStart + Pv.indexCount; vv++) hv.indices.push(this.indices[vv] - Pv.verticesStart)
            }
            const Sv = new wv;
            Sv.indexStart = 0, Sv.indexCount = hv.indices ? hv.indices.length : 0, Sv.materialIndex = Pv.materialIndex, Sv.verticesStart = 0, Sv.verticesCount = (hv.positions ? hv.positions.length : 0) / 3, hv.materialInfos = [Sv], zv.push(hv)
          }
          return zv
        }
        merge(vv) {
          let zv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            Pv = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            hv = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            Sv = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
          const ev = Array.isArray(vv) ? vv.map((vv => ({
            vertexData: vv
          }))) : [{
            vertexData: vv
          }];
          return (0, lv.k)(this._mergeCoroutine(void 0, ev, zv, !1, Pv, hv, Sv))
        }* _mergeCoroutine(zv, Pv) {
          let hv = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            Sv = arguments.length > 3 ? arguments[3] : void 0,
            gv = arguments.length > 4 ? arguments[4] : void 0,
            pv = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
            dv = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
          this._validate();
          let Nv = Pv.map((vv => vv.vertexData)),
            lv = this;
          if (dv)
            for (const vv of Nv) vv && (vv._validate(), !this.normals && vv.normals && (this.normals = new Float32Array(this.positions.length)), !this.tangents && vv.tangents && (this.tangents = new Float32Array(this.positions.length / 3 * 4)), !this.uvs && vv.uvs && (this.uvs = new Float32Array(this.positions.length / 3 * 2)), !this.uvs2 && vv.uvs2 && (this.uvs2 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs3 && vv.uvs3 && (this.uvs3 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs4 && vv.uvs4 && (this.uvs4 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs5 && vv.uvs5 && (this.uvs5 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs6 && vv.uvs6 && (this.uvs6 = new Float32Array(this.positions.length / 3 * 2)), !this.colors && vv.colors && (this.colors = new Float32Array(this.positions.length / 3 * 4), this.colors.fill(1)), !this.matricesIndices && vv.matricesIndices && (this.matricesIndices = new Float32Array(this.positions.length / 3 * 4)), !this.matricesWeights && vv.matricesWeights && (this.matricesWeights = new Float32Array(this.positions.length / 3 * 4)), !this.matricesIndicesExtra && vv.matricesIndicesExtra && (this.matricesIndicesExtra = new Float32Array(this.positions.length / 3 * 4)), !this.matricesWeightsExtra && vv.matricesWeightsExtra && (this.matricesWeightsExtra = new Float32Array(this.positions.length / 3 * 4)));
          for (const vv of Nv)
            if (vv)
              if (dv) this.normals && !vv.normals && (vv.normals = new Float32Array(vv.positions.length)), this.tangents && !vv.tangents && (vv.tangents = new Float32Array(vv.positions.length / 3 * 4)), this.uvs && !vv.uvs && (vv.uvs = new Float32Array(vv.positions.length / 3 * 2)), this.uvs2 && !vv.uvs2 && (vv.uvs2 = new Float32Array(vv.positions.length / 3 * 2)), this.uvs3 && !vv.uvs3 && (vv.uvs3 = new Float32Array(vv.positions.length / 3 * 2)), this.uvs4 && !vv.uvs4 && (vv.uvs4 = new Float32Array(vv.positions.length / 3 * 2)), this.uvs5 && !vv.uvs5 && (vv.uvs5 = new Float32Array(vv.positions.length / 3 * 2)), this.uvs6 && !vv.uvs6 && (vv.uvs6 = new Float32Array(vv.positions.length / 3 * 2)), this.colors && !vv.colors && (vv.colors = new Float32Array(vv.positions.length / 3 * 4), vv.colors.fill(1)), this.matricesIndices && !vv.matricesIndices && (vv.matricesIndices = new Float32Array(vv.positions.length / 3 * 4)), this.matricesWeights && !vv.matricesWeights && (vv.matricesWeights = new Float32Array(vv.positions.length / 3 * 4)), this.matricesIndicesExtra && !vv.matricesIndicesExtra && (vv.matricesIndicesExtra = new Float32Array(vv.positions.length / 3 * 4)), this.matricesWeightsExtra && !vv.matricesWeightsExtra && (vv.matricesWeightsExtra = new Float32Array(vv.positions.length / 3 * 4));
              else if (vv._validate(), !this.normals !== !vv.normals || !this.tangents !== !vv.tangents || !this.uvs !== !vv.uvs || !this.uvs2 !== !vv.uvs2 || !this.uvs3 !== !vv.uvs3 || !this.uvs4 !== !vv.uvs4 || !this.uvs5 !== !vv.uvs5 || !this.uvs6 !== !vv.uvs6 || !this.colors !== !vv.colors || !this.matricesIndices !== !vv.matricesIndices || !this.matricesWeights !== !vv.matricesWeights || !this.matricesIndicesExtra !== !vv.matricesIndicesExtra || !this.matricesWeightsExtra !== !vv.matricesWeightsExtra) throw new Error("Cannot merge vertex data that do not have the same set of attributes");
          if (pv) {
            let vv, hv = 0,
              Sv = 0;
            const ev = [];
            let gv = null;
            const pv = [];
            for (const Pv of this.splitBasedOnMaterialID()) pv.push({
              vertexData: Pv,
              transform: zv
            });
            for (const zv of Pv)
              if (zv.vertexData)
                for (const vv of zv.vertexData.splitBasedOnMaterialID()) pv.push({
                  vertexData: vv,
                  transform: zv.transform
                });
            pv.sort(((vv, zv) => {
              const Pv = vv.vertexData.materialInfos ? vv.vertexData.materialInfos[0].materialIndex : 0,
                hv = zv.vertexData.materialInfos ? zv.vertexData.materialInfos[0].materialIndex : 0;
              return Pv > hv ? 1 : Pv === hv ? 0 : -1
            }));
            for (const zv of pv) {
              const Pv = zv.vertexData;
              if (vv = Pv.materialInfos ? Pv.materialInfos[0].materialIndex : 0, gv && gv.materialIndex === vv) gv.indexCount += Pv.indices.length, gv.verticesCount += Pv.positions.length / 3;
              else {
                const zv = new wv;
                zv.materialIndex = vv, zv.indexStart = hv, zv.indexCount = Pv.indices.length, zv.verticesStart = Sv, zv.verticesCount = Pv.positions.length / 3, ev.push(zv), gv = zv
              }
              hv += Pv.indices.length, Sv += Pv.positions.length / 3
            }
            const dv = pv.splice(0, 1)[0];
            lv = dv.vertexData, zv = dv.transform, Nv = pv.map((vv => vv.vertexData)), Pv = pv, this.materialInfos = ev
          }
          const Tv = Nv.reduce(((vv, zv) => vv + (zv.indices?.length ?? 0)), lv.indices?.length ?? 0);
          let Wv = gv || Nv.some((vv => vv.indices === lv.indices)) ? lv.indices?.slice() : lv.indices;
          if (Tv > 0) {
            let ev = Wv?.length ?? 0;
            if (Wv || (Wv = new Array(Tv)), Wv.length !== Tv) {
              if (Array.isArray(Wv)) Wv.length = Tv;
              else {
                const vv = hv || Wv instanceof Uint32Array ? new Uint32Array(Tv) : new Uint16Array(Tv);
                vv.set(Wv), Wv = vv
              }
              zv && zv.determinant() < 0 && vv._FlipFaces(Wv, 0, ev)
            }
            let gv = lv.positions ? lv.positions.length / 3 : 0;
            for (const {
                vertexData: zv,
                transform: hv
              }
              of Pv)
              if (zv.indices) {
                for (let vv = 0; vv < zv.indices.length; vv++) Wv[ev + vv] = zv.indices[vv] + gv;
                hv && hv.determinant() < 0 && vv._FlipFaces(Wv, ev, zv.indices.length), gv += zv.positions.length / 3, ev += zv.indices.length, Sv && (yield)
              }
          }
          return this.indices = Wv, this.positions = vv._MergeElement(ev.k.PositionKind, lv.positions, zv, Pv.map((vv => [vv.vertexData.positions, vv.transform]))), Sv && (yield), lv.normals && (this.normals = vv._MergeElement(ev.k.NormalKind, lv.normals, zv, Pv.map((vv => [vv.vertexData.normals, vv.transform]))), Sv && (yield)), lv.tangents && (this.tangents = vv._MergeElement(ev.k.TangentKind, lv.tangents, zv, Pv.map((vv => [vv.vertexData.tangents, vv.transform]))), Sv && (yield)), lv.uvs && (this.uvs = vv._MergeElement(ev.k.UVKind, lv.uvs, zv, Pv.map((vv => [vv.vertexData.uvs, vv.transform]))), Sv && (yield)), lv.uvs2 && (this.uvs2 = vv._MergeElement(ev.k.UV2Kind, lv.uvs2, zv, Pv.map((vv => [vv.vertexData.uvs2, vv.transform]))), Sv && (yield)), lv.uvs3 && (this.uvs3 = vv._MergeElement(ev.k.UV3Kind, lv.uvs3, zv, Pv.map((vv => [vv.vertexData.uvs3, vv.transform]))), Sv && (yield)), lv.uvs4 && (this.uvs4 = vv._MergeElement(ev.k.UV4Kind, lv.uvs4, zv, Pv.map((vv => [vv.vertexData.uvs4, vv.transform]))), Sv && (yield)), lv.uvs5 && (this.uvs5 = vv._MergeElement(ev.k.UV5Kind, lv.uvs5, zv, Pv.map((vv => [vv.vertexData.uvs5, vv.transform]))), Sv && (yield)), lv.uvs6 && (this.uvs6 = vv._MergeElement(ev.k.UV6Kind, lv.uvs6, zv, Pv.map((vv => [vv.vertexData.uvs6, vv.transform]))), Sv && (yield)), lv.colors && (this.colors = vv._MergeElement(ev.k.ColorKind, lv.colors, zv, Pv.map((vv => [vv.vertexData.colors, vv.transform]))), (void 0 !== lv.hasVertexAlpha || Pv.some((vv => void 0 !== vv.vertexData.hasVertexAlpha))) && (this.hasVertexAlpha = lv.hasVertexAlpha || Pv.some((vv => vv.vertexData.hasVertexAlpha))), Sv && (yield)), lv.matricesIndices && (this.matricesIndices = vv._MergeElement(ev.k.MatricesIndicesKind, lv.matricesIndices, zv, Pv.map((vv => [vv.vertexData.matricesIndices, vv.transform]))), Sv && (yield)), lv.matricesWeights && (this.matricesWeights = vv._MergeElement(ev.k.MatricesWeightsKind, lv.matricesWeights, zv, Pv.map((vv => [vv.vertexData.matricesWeights, vv.transform]))), Sv && (yield)), lv.matricesIndicesExtra && (this.matricesIndicesExtra = vv._MergeElement(ev.k.MatricesIndicesExtraKind, lv.matricesIndicesExtra, zv, Pv.map((vv => [vv.vertexData.matricesIndicesExtra, vv.transform]))), Sv && (yield)), lv.matricesWeightsExtra && (this.matricesWeightsExtra = vv._MergeElement(ev.k.MatricesWeightsExtraKind, lv.matricesWeightsExtra, zv, Pv.map((vv => [vv.vertexData.matricesWeightsExtra, vv.transform])))), this
        }
        static _MergeElement(zv, Pv, hv, Sv) {
          const gv = Sv.filter((vv => null !== vv[0] && void 0 !== vv[0]));
          if (!Pv && 0 == gv.length) return Pv;
          if (!Pv) return this._MergeElement(zv, gv[0][0], gv[0][1], gv.slice(1));
          const pv = gv.reduce(((vv, zv) => vv + zv[0].length), Pv.length),
            dv = zv === ev.k.PositionKind ? vv._TransformVector3Coordinates : zv === ev.k.NormalKind ? vv._TransformVector3Normals : zv === ev.k.TangentKind ? vv._TransformVector4Normals : () => {};
          if (Pv instanceof Float32Array) {
            const vv = new Float32Array(pv);
            vv.set(Pv), hv && dv(vv, hv, 0, Pv.length);
            let zv = Pv.length;
            for (const [Pv, hv] of gv) vv.set(Pv, zv), hv && dv(vv, hv, zv, Pv.length), zv += Pv.length;
            return vv
          } {
            const vv = new Array(pv);
            for (let hv = 0; hv < Pv.length; hv++) vv[hv] = Pv[hv];
            hv && dv(vv, hv, 0, Pv.length);
            let zv = Pv.length;
            for (const [Pv, hv] of gv) {
              for (let hv = 0; hv < Pv.length; hv++) vv[zv + hv] = Pv[hv];
              hv && dv(vv, hv, zv, Pv.length), zv += Pv.length
            }
            return vv
          }
        }
        _validate() {
          if (!this.positions) throw new Tv.g("Positions are required", Tv.f.MeshInvalidPositionsError);
          const vv = (vv, zv) => {
              const Pv = (0, ev.h)(vv);
              if (zv.length % Pv !== 0) throw new Error("The " + vv + "s array count must be a multiple of " + Pv);
              return zv.length / Pv
            },
            zv = vv(ev.k.PositionKind, this.positions),
            Pv = (Pv, hv) => {
              const Sv = vv(Pv, hv);
              if (Sv !== zv) throw new Error("The " + Pv + "s element count (" + Sv + ") does not match the positions count (" + zv + ")")
            };
          this.normals && Pv(ev.k.NormalKind, this.normals), this.tangents && Pv(ev.k.TangentKind, this.tangents), this.uvs && Pv(ev.k.UVKind, this.uvs), this.uvs2 && Pv(ev.k.UV2Kind, this.uvs2), this.uvs3 && Pv(ev.k.UV3Kind, this.uvs3), this.uvs4 && Pv(ev.k.UV4Kind, this.uvs4), this.uvs5 && Pv(ev.k.UV5Kind, this.uvs5), this.uvs6 && Pv(ev.k.UV6Kind, this.uvs6), this.colors && Pv(ev.k.ColorKind, this.colors), this.matricesIndices && Pv(ev.k.MatricesIndicesKind, this.matricesIndices), this.matricesWeights && Pv(ev.k.MatricesWeightsKind, this.matricesWeights), this.matricesIndicesExtra && Pv(ev.k.MatricesIndicesExtraKind, this.matricesIndicesExtra), this.matricesWeightsExtra && Pv(ev.k.MatricesWeightsExtraKind, this.matricesWeightsExtra)
        }
        clone() {
          const zv = this.serialize();
          return vv.Parse(zv)
        }
        serialize() {
          const vv = {};
          if (this.positions && (vv.positions = Array.from(this.positions)), this.normals && (vv.normals = Array.from(this.normals)), this.tangents && (vv.tangents = Array.from(this.tangents)), this.uvs && (vv.uvs = Array.from(this.uvs)), this.uvs2 && (vv.uvs2 = Array.from(this.uvs2)), this.uvs3 && (vv.uvs3 = Array.from(this.uvs3)), this.uvs4 && (vv.uvs4 = Array.from(this.uvs4)), this.uvs5 && (vv.uvs5 = Array.from(this.uvs5)), this.uvs6 && (vv.uvs6 = Array.from(this.uvs6)), this.colors && (vv.colors = Array.from(this.colors), vv.hasVertexAlpha = this.hasVertexAlpha), this.matricesIndices && (vv.matricesIndices = Array.from(this.matricesIndices), vv.matricesIndicesExpanded = !0), this.matricesWeights && (vv.matricesWeights = Array.from(this.matricesWeights)), this.matricesIndicesExtra && (vv.matricesIndicesExtra = Array.from(this.matricesIndicesExtra), vv.matricesIndicesExtraExpanded = !0), this.matricesWeightsExtra && (vv.matricesWeightsExtra = Array.from(this.matricesWeightsExtra)), vv.indices = this.indices ? Array.from(this.indices) : [], this.materialInfos) {
            vv.materialInfos = [];
            for (const zv of this.materialInfos) {
              const Pv = {
                indexStart: zv.indexStart,
                indexCount: zv.indexCount,
                materialIndex: zv.materialIndex,
                verticesStart: zv.verticesStart,
                verticesCount: zv.verticesCount
              };
              vv.materialInfos.push(Pv)
            }
          }
          return vv
        }
        static ExtractFromMesh(zv, Pv, hv) {
          return vv._ExtractFrom(zv, Pv, hv)
        }
        static ExtractFromGeometry(zv, Pv, hv) {
          return vv._ExtractFrom(zv, Pv, hv)
        }
        static _ExtractFrom(zv, Pv, hv) {
          const Sv = new vv;
          if (zv.isVerticesDataPresent(ev.k.PositionKind) && (Sv.positions = zv.getVerticesData(ev.k.PositionKind, Pv, hv)), zv.isVerticesDataPresent(ev.k.NormalKind) && (Sv.normals = zv.getVerticesData(ev.k.NormalKind, Pv, hv)), zv.isVerticesDataPresent(ev.k.TangentKind) && (Sv.tangents = zv.getVerticesData(ev.k.TangentKind, Pv, hv)), zv.isVerticesDataPresent(ev.k.UVKind) && (Sv.uvs = zv.getVerticesData(ev.k.UVKind, Pv, hv)), zv.isVerticesDataPresent(ev.k.UV2Kind) && (Sv.uvs2 = zv.getVerticesData(ev.k.UV2Kind, Pv, hv)), zv.isVerticesDataPresent(ev.k.UV3Kind) && (Sv.uvs3 = zv.getVerticesData(ev.k.UV3Kind, Pv, hv)), zv.isVerticesDataPresent(ev.k.UV4Kind) && (Sv.uvs4 = zv.getVerticesData(ev.k.UV4Kind, Pv, hv)), zv.isVerticesDataPresent(ev.k.UV5Kind) && (Sv.uvs5 = zv.getVerticesData(ev.k.UV5Kind, Pv, hv)), zv.isVerticesDataPresent(ev.k.UV6Kind) && (Sv.uvs6 = zv.getVerticesData(ev.k.UV6Kind, Pv, hv)), zv.isVerticesDataPresent(ev.k.ColorKind)) {
            const vv = zv.geometry || zv,
              gv = vv.getVertexBuffer(ev.k.ColorKind),
              pv = vv.getVerticesData(ev.k.ColorKind, Pv, hv);
            if (3 === gv.getSize()) {
              const vv = new Float32Array(4 * pv.length / 3);
              for (let zv = 0, Pv = 0; zv < pv.length; zv += 3, Pv += 4) vv[Pv] = pv[zv], vv[Pv + 1] = pv[zv + 1], vv[Pv + 2] = pv[zv + 2], vv[Pv + 3] = 1;
              Sv.colors = vv
            } else {
              if (4 !== gv.getSize()) throw new Error(`Unexpected number of color components: ${gv.getSize()}`);
              Sv.colors = pv
            }
          }
          return zv.isVerticesDataPresent(ev.k.MatricesIndicesKind) && (Sv.matricesIndices = zv.getVerticesData(ev.k.MatricesIndicesKind, Pv, hv)), zv.isVerticesDataPresent(ev.k.MatricesWeightsKind) && (Sv.matricesWeights = zv.getVerticesData(ev.k.MatricesWeightsKind, Pv, hv)), zv.isVerticesDataPresent(ev.k.MatricesIndicesExtraKind) && (Sv.matricesIndicesExtra = zv.getVerticesData(ev.k.MatricesIndicesExtraKind, Pv, hv)), zv.isVerticesDataPresent(ev.k.MatricesWeightsExtraKind) && (Sv.matricesWeightsExtra = zv.getVerticesData(ev.k.MatricesWeightsExtraKind, Pv, hv)), Sv.indices = zv.dPv(Pv, hv), Sv
        }
        static CreateRibbon(vv) {
          throw (0, gv.m)("ribbonBuilder")
        }
        static CreateBox(vv) {
          throw (0, gv.m)("boxBuilder")
        }
        static CreateTiledBox(vv) {
          throw (0, gv.m)("tiledBoxBuilder")
        }
        static CreateTiledPlane(vv) {
          throw (0, gv.m)("tiledPlaneBuilder")
        }
        static CreateSphere(vv) {
          throw (0, gv.m)("sphereBuilder")
        }
        static CreateCylinder(vv) {
          throw (0, gv.m)("cylinderBuilder")
        }
        static CreateTorus(vv) {
          throw (0, gv.m)("torusBuilder")
        }
        static CreateLineSystem(vv) {
          throw (0, gv.m)("linesBuilder")
        }
        static CreateDashedLines(vv) {
          throw (0, gv.m)("linesBuilder")
        }
        static CreateGround(vv) {
          throw (0, gv.m)("groundBuilder")
        }
        static CreateTiledGround(vv) {
          throw (0, gv.m)("groundBuilder")
        }
        static CreateGroundFromHeightMap(vv) {
          throw (0, gv.m)("groundBuilder")
        }
        static CreatePlane(vv) {
          throw (0, gv.m)("planeBuilder")
        }
        static CreateDisc(vv) {
          throw (0, gv.m)("discBuilder")
        }
        static CreatePolygon(vv, zv, Pv, hv, Sv, ev, pv) {
          throw (0, gv.m)("polygonBuilder")
        }
        static CreateIcoSphere(vv) {
          throw (0, gv.m)("icoSphereBuilder")
        }
        static CreatePolyhedron(vv) {
          throw (0, gv.m)("polyhedronBuilder")
        }
        static CreateCapsule() {
          arguments.length > 0 && void 0 !== arguments[0] || Sv.l.Up();
          throw (0, gv.m)("capsuleBuilder")
        }
        static CreateTorusKnot(vv) {
          throw (0, gv.m)("torusKnotBuilder")
        }
        static ComputeNormals(vv, zv, Pv, hv) {
          let ev, gv, pv, dv, Nv, lv, Tv, Wv, wv, av, sv, Cv, iv, cv, Gv, mv, jv, fv, Fv, Yv, nv = !1,
            Ov = !1,
            Dv = !1,
            Kv = !1,
            Vv = 1,
            Uv = 0,
            Rv = null;
          hv && (nv = !!hv.facetNormals, Ov = !!hv.facetPositions, Dv = !!hv.facetPartitioning, Vv = !0 === hv.useRightHandedSystem ? -1 : 1, Uv = hv.ratio || 0, Kv = !!hv.depthSort, Rv = hv.distanceTo, Kv && void 0 === Rv && (Rv = Sv.l.Zero()));
          let xv = 0,
            tv = 0,
            qv = 0,
            Iv = 0;
          for (Dv && hv && hv.bbSize && (xv = hv.subDiv.X * Uv / hv.bbSize.x, tv = hv.subDiv.Y * Uv / hv.bbSize.y, qv = hv.subDiv.Z * Uv / hv.bbSize.z, Iv = hv.subDiv.max * hv.subDiv.max, hv.facetPartitioning.length = 0), ev = 0; ev < vv.length; ev++) Pv[ev] = 0;
          const Qv = zv.length / 3 | 0;
          for (ev = 0; ev < Qv; ev++) {
            if (Cv = 3 * zv[3 * ev], iv = Cv + 1, cv = Cv + 2, Gv = 3 * zv[3 * ev + 1], mv = Gv + 1, jv = Gv + 2, fv = 3 * zv[3 * ev + 2], Fv = fv + 1, Yv = fv + 2, gv = vv[Cv] - vv[Gv], pv = vv[iv] - vv[mv], dv = vv[cv] - vv[jv], Nv = vv[fv] - vv[Gv], lv = vv[Fv] - vv[mv], Tv = vv[Yv] - vv[jv], Wv = Vv * (pv * Tv - dv * lv), wv = Vv * (dv * Nv - gv * Tv), av = Vv * (gv * lv - pv * Nv), sv = Math.sqrt(Wv * Wv + wv * wv + av * av), sv = 0 === sv ? 1 : sv, Wv /= sv, wv /= sv, av /= sv, nv && hv && (hv.facetNormals[ev].x = Wv, hv.facetNormals[ev].y = wv, hv.facetNormals[ev].z = av), Ov && hv && (hv.facetPositions[ev].x = (vv[Cv] + vv[Gv] + vv[fv]) / 3, hv.facetPositions[ev].y = (vv[iv] + vv[mv] + vv[Fv]) / 3, hv.facetPositions[ev].z = (vv[cv] + vv[jv] + vv[Yv]) / 3), Dv && hv) {
              const zv = Math.floor((hv.facetPositions[ev].x - hv.bInfo.minimum.x * Uv) * xv),
                Pv = Math.floor((hv.facetPositions[ev].y - hv.bInfo.minimum.y * Uv) * tv),
                Sv = Math.floor((hv.facetPositions[ev].z - hv.bInfo.minimum.z * Uv) * qv),
                gv = Math.floor((vv[Cv] - hv.bInfo.minimum.x * Uv) * xv),
                pv = Math.floor((vv[iv] - hv.bInfo.minimum.y * Uv) * tv),
                dv = Math.floor((vv[cv] - hv.bInfo.minimum.z * Uv) * qv),
                Nv = Math.floor((vv[Gv] - hv.bInfo.minimum.x * Uv) * xv),
                lv = Math.floor((vv[mv] - hv.bInfo.minimum.y * Uv) * tv),
                Tv = Math.floor((vv[jv] - hv.bInfo.minimum.z * Uv) * qv),
                Wv = Math.floor((vv[fv] - hv.bInfo.minimum.x * Uv) * xv),
                wv = Math.floor((vv[Fv] - hv.bInfo.minimum.y * Uv) * tv),
                av = Math.floor((vv[Yv] - hv.bInfo.minimum.z * Uv) * qv),
                sv = gv + hv.subDiv.max * pv + Iv * dv,
                nv = Nv + hv.subDiv.max * lv + Iv * Tv,
                Ov = Wv + hv.subDiv.max * wv + Iv * av,
                Dv = zv + hv.subDiv.max * Pv + Iv * Sv;
              hv.facetPartitioning[Dv] = hv.facetPartitioning[Dv] ? hv.facetPartitioning[Dv] : [], hv.facetPartitioning[sv] = hv.facetPartitioning[sv] ? hv.facetPartitioning[sv] : [], hv.facetPartitioning[nv] = hv.facetPartitioning[nv] ? hv.facetPartitioning[nv] : [], hv.facetPartitioning[Ov] = hv.facetPartitioning[Ov] ? hv.facetPartitioning[Ov] : [], hv.facetPartitioning[sv].push(ev), nv != sv && hv.facetPartitioning[nv].push(ev), Ov != nv && Ov != sv && hv.facetPartitioning[Ov].push(ev), Dv != sv && Dv != nv && Dv != Ov && hv.facetPartitioning[Dv].push(ev)
            }
            if (Kv && hv && hv.facetPositions) {
              const vv = hv.depthSortedFacets[ev];
              vv.ind = 3 * ev, vv.sqDistance = Sv.l.DistanceSquared(hv.facetPositions[ev], Rv)
            }
            Pv[Cv] += Wv, Pv[iv] += wv, Pv[cv] += av, Pv[Gv] += Wv, Pv[mv] += wv, Pv[jv] += av, Pv[fv] += Wv, Pv[Fv] += wv, Pv[Yv] += av
          }
          for (ev = 0; ev < Pv.length / 3; ev++) Wv = Pv[3 * ev], wv = Pv[3 * ev + 1], av = Pv[3 * ev + 2], sv = Math.sqrt(Wv * Wv + wv * wv + av * av), sv = 0 === sv ? 1 : sv, Wv /= sv, wv /= sv, av /= sv, Pv[3 * ev] = Wv, Pv[3 * ev + 1] = wv, Pv[3 * ev + 2] = av
        }
        static _ComputeSides(zv, Pv, hv, ev, gv, pv, dv) {
          const Nv = hv.length,
            lv = ev.length;
          let Tv, Wv;
          switch (zv = zv || vv.DEFAULTSIDE) {
            case vv.FRONTSIDE:
              break;
            case vv.BACKSIDE:
              for (Tv = 0; Tv < Nv; Tv += 3) {
                const vv = hv[Tv];
                hv[Tv] = hv[Tv + 2], hv[Tv + 2] = vv
              }
              for (Wv = 0; Wv < lv; Wv++) ev[Wv] = -ev[Wv];
              break;
            case vv.DOUBLESIDE: {
              const vv = Pv.length,
                zv = vv / 3;
              for (let hv = 0; hv < vv; hv++) Pv[vv + hv] = Pv[hv];
              for (Tv = 0; Tv < Nv; Tv += 3) hv[Tv + Nv] = hv[Tv + 2] + zv, hv[Tv + 1 + Nv] = hv[Tv + 1] + zv, hv[Tv + 2 + Nv] = hv[Tv] + zv;
              for (Wv = 0; Wv < lv; Wv++) ev[lv + Wv] = -ev[Wv];
              const wv = gv.length;
              let av;
              for (av = 0; av < wv; av++) gv[av + wv] = gv[av];
              for (pv = pv || new Sv.m(0, 0, 1, 1), dv = dv || new Sv.m(0, 0, 1, 1), av = 0, Tv = 0; Tv < wv / 2; Tv++) gv[av] = pv.x + (pv.z - pv.x) * gv[av], gv[av + 1] = pv.y + (pv.w - pv.y) * gv[av + 1], gv[av + wv] = dv.x + (dv.z - dv.x) * gv[av + wv], gv[av + wv + 1] = dv.y + (dv.w - dv.y) * gv[av + wv + 1], av += 2;
              break
            }
          }
        }
        static Parse(zv) {
          const Pv = new vv,
            hv = zv.positions;
          hv && Pv.set(hv, ev.k.PositionKind);
          const Sv = zv.normals;
          Sv && Pv.set(Sv, ev.k.NormalKind);
          const gv = zv.tangents;
          gv && Pv.set(gv, ev.k.TangentKind);
          const dv = zv.uvs;
          dv && Pv.set(dv, ev.k.UVKind);
          const Nv = zv.uvs2;
          Nv && Pv.set(Nv, ev.k.UV2Kind);
          const lv = zv.uvs3;
          lv && Pv.set(lv, ev.k.UV3Kind);
          const Tv = zv.uvs4;
          Tv && Pv.set(Tv, ev.k.UV4Kind);
          const Wv = zv.uvs5;
          Wv && Pv.set(Wv, ev.k.UV5Kind);
          const av = zv.uvs6;
          av && Pv.set(av, ev.k.UV6Kind);
          const sv = zv.colors;
          sv && (Pv.set(pv.e.CheckColors4(sv, hv.length / 3), ev.k.ColorKind), void 0 !== zv.hasVertexAlpha && (Pv.hasVertexAlpha = zv.hasVertexAlpha));
          const Cv = zv.matricesIndices;
          Cv && Pv.set(Cv, ev.k.MatricesIndicesKind);
          const iv = zv.matricesWeights;
          iv && Pv.set(iv, ev.k.MatricesWeightsKind);
          const cv = zv.indices;
          cv && (Pv.indices = cv);
          const Gv = zv.materialInfos;
          if (Gv) {
            Pv.materialInfos = [];
            for (const vv of Gv) {
              const zv = new wv;
              zv.indexCount = vv.indexCount, zv.indexStart = vv.indexStart, zv.verticesCount = vv.verticesCount, zv.verticesStart = vv.verticesStart, zv.materialIndex = vv.materialIndex, Pv.materialInfos.push(zv)
            }
          }
          return Pv
        }
        static ImportVertexData(zv, Pv) {
          const hv = vv.Parse(zv);
          Pv.setAllVerticesData(hv, zv.updatable)
        }
      }, (() => {
        const Sv = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        zv = [Nv.i.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], Pv = [Nv.i.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], av = [Nv.i.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], sv = [Nv.i.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], (0, hv.e)(vv, null, zv, {
          kind: "method",
          name: "_TransformVector3Coordinates",
          static: !0,
          private: !1,
          access: {
            has: vv => "_TransformVector3Coordinates" in vv,
            get: vv => vv._TransformVector3Coordinates
          },
          metadata: Sv
        }, null, Cv), (0, hv.e)(vv, null, Pv, {
          kind: "method",
          name: "_TransformVector3Normals",
          static: !0,
          private: !1,
          access: {
            has: vv => "_TransformVector3Normals" in vv,
            get: vv => vv._TransformVector3Normals
          },
          metadata: Sv
        }, null, Cv), (0, hv.e)(vv, null, av, {
          kind: "method",
          name: "_TransformVector4Normals",
          static: !0,
          private: !1,
          access: {
            has: vv => "_TransformVector4Normals" in vv,
            get: vv => vv._TransformVector4Normals
          },
          metadata: Sv
        }, null, Cv), (0, hv.e)(vv, null, sv, {
          kind: "method",
          name: "_FlipFaces",
          static: !0,
          private: !1,
          access: {
            has: vv => "_FlipFaces" in vv,
            get: vv => vv._FlipFaces
          },
          metadata: Sv
        }, null, Cv), Sv && Object.defineProperty(vv, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Sv
        })
      })(), vv.FRONTSIDE = ((0, hv.f)(vv, Cv), 0), vv.BACKSIDE = 1, vv.DOUBLESIDE = 2, vv.DEFAULTSIDE = 0, vv._UniqueIdGenerator = 0, vv
    })()
  },
  39800: (vv, zv, Pv) => {
    var hv = Pv(36594),
      Sv = Pv(38209),
      ev = Pv(39609),
      gv = Pv(39712),
      pv = Pv(39441);
    const dv = "bakedVertexAnimationSettingsInstanced";

    function Nv(vv) {
      const zv = vv.bakedVertexAnimationManager?.texture?.getInternalTexture()?._bufferView;
      return zv instanceof Float32Array || zv instanceof Uint16Array
    }

    function lv(vv, zv, Pv, hv) {
      Pv.Dk(Number.POSITIVE_INFINITY), hv.Dk(Number.NEGATIVE_INFINITY);
      for (let Sv = 0; Sv < 3 * zv; Sv += 3) {
        const zv = vv[Sv],
          ev = vv[Sv + 1],
          gv = vv[Sv + 2];
        zv < Pv.x && (Pv.x = zv), ev < Pv.y && (Pv.y = ev), gv < Pv.z && (Pv.z = gv), zv > hv.x && (hv.x = zv), ev > hv.y && (hv.y = ev), gv > hv.z && (hv.z = gv)
      }
    }

    function Tv(vv, zv, Pv) {
      Pv && (vv.x -= vv.x * Pv.x + Pv.y, vv.y -= vv.y * Pv.x + Pv.y, vv.z -= vv.z * Pv.x + Pv.y, zv.x += zv.x * Pv.x + Pv.y, zv.y += zv.y * Pv.x + Pv.y, zv.z += zv.z * Pv.x + Pv.y)
    }

    function Wv(vv, zv, Pv, Sv, ev) {
      const gv = hv.i.fa[7],
        pv = hv.i.fa[8];
      for (let dv = 0; dv < 2; ++dv)
        for (let Nv = 0; Nv < 2; ++Nv)
          for (let lv = 0; lv < 2; ++lv) gv.set(dv ? zv.x : vv.x, Nv ? zv.y : vv.y, lv ? zv.z : vv.z), hv.l.TransformCoordinatesToRef(gv, Pv, pv), Sv.minimizeInPlace(pv), ev.maximizeInPlace(pv)
    }

    function wv(vv, zv, Pv, Sv, ev) {
      const gv = hv.i.fa[7];
      for (let pv = 0; pv < 3 * zv; pv += 3) hv.l.TransformCoordinatesFromFloatsToRef(vv[pv], vv[pv + 1], vv[pv + 2], Pv, gv), Sv.minimizeInPlace(gv), ev.maximizeInPlace(gv)
    }
    let av = !1;
    av || (av = !0, gv.c.prototype.thinInstanceAdd = function(vv) {
      let zv = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (!this.rD().ma().getCaps().instancedArrays) return Sv.d.Error("Thin Instances are not supported on this device as Instanced Array extension not supported"), -1;
      this._thinInstanceUpdateBufferSize("matrix", Array.isArray(vv) ? vv.length : 1);
      const Pv = this._thinInstanceDataStorage.instancesCount;
      if (Array.isArray(vv))
        for (let hv = 0; hv < vv.length; ++hv) this.thinInstanceSetMatrixAt(this._thinInstanceDataStorage.instancesCount++, vv[hv], hv === vv.length - 1 && zv);
      else this.thinInstanceSetMatrixAt(this._thinInstanceDataStorage.instancesCount++, vv, zv);
      return Pv
    }, gv.c.prototype.thinInstanceAddSelf = function() {
      let vv = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      return this.thinInstanceAdd(hv.c.IdentityReadOnly, vv)
    }, gv.c.prototype.thinInstanceRegisterAttribute = function(vv, zv) {
      vv === pv.k.ColorKind && (vv = pv.k.ColorInstanceKind), this.removeVerticesData(vv), this._thinInstanceInitializeUserStorage(), this._userThinInstanceBuffersStorage.strides[vv] = zv, this._userThinInstanceBuffersStorage.sizes[vv] = zv * Math.max(32, this._thinInstanceDataStorage.instancesCount), this._userThinInstanceBuffersStorage.data[vv] = new Float32Array(this._userThinInstanceBuffersStorage.sizes[vv]), this._userThinInstanceBuffersStorage.vertexBuffers[vv] = new pv.k(this.ma(), this._userThinInstanceBuffersStorage.data[vv], vv, !0, !1, zv, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[vv])
    }, gv.c.prototype.thinInstanceSetMatrixAt = function(vv, zv) {
      let Pv = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      if (!this._thinInstanceDataStorage.matrixData || vv >= this._thinInstanceDataStorage.instancesCount) return !1;
      const hv = this._thinInstanceDataStorage.matrixData;
      return zv.copyToArray(hv, 16 * vv), this._thinInstanceDataStorage.worldMatrices && (this._thinInstanceDataStorage.worldMatrices[vv] = zv), Pv && (this.P_("matrix"), this.Ya || this.thinInstanceRefreshBoundingInfo(!1)), !0
    }, gv.c.prototype.thinInstanceSetAttributeAt = function(vv, zv, Pv) {
      let hv = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      return vv === pv.k.ColorKind && (vv = pv.k.ColorInstanceKind), !(!this._userThinInstanceBuffersStorage || !this._userThinInstanceBuffersStorage.data[vv] || zv >= this._thinInstanceDataStorage.instancesCount) && (this._thinInstanceUpdateBufferSize(vv, 0), this._userThinInstanceBuffersStorage.data[vv].set(Pv, zv * this._userThinInstanceBuffersStorage.strides[vv]), hv && this.P_(vv), !0)
    }, Object.defineProperty(gv.c.prototype, "yX", {
      get: function() {
        return this._thinInstanceDataStorage.instancesCount
      },
      set: function(vv) {
        const zv = this._thinInstanceDataStorage.matrixData ?? this.source?._thinInstanceDataStorage.matrixData;
        vv <= (zv ? zv.length / 16 : 0) && (this._thinInstanceDataStorage.instancesCount = vv)
      },
      enumerable: !0,
      configurable: !0
    }), gv.c.prototype._thinInstanceCreateMatrixBuffer = function(vv, zv) {
      let Pv = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      const hv = new pv.c(this.ma(), zv, !Pv, 16, !1, !0);
      for (let Sv = 0; Sv < 4; Sv++) this.setVerticesBuffer(hv.createVertexBuffer(vv + Sv, 4 * Sv, 4));
      return hv
    }, gv.c.prototype.N_ = function(vv, zv) {
      let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        hv = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      if (Pv = Pv || 16, "matrix" === vv) this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = null, this._thinInstanceDataStorage.matrixBufferSize = zv ? zv.length : 32 * Pv, this._thinInstanceDataStorage.matrixData = zv, this._thinInstanceDataStorage.worldMatrices = null, null !== zv ? (this._thinInstanceDataStorage.instancesCount = zv.length / Pv, this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", zv, hv), this.Ya || this.thinInstanceRefreshBoundingInfo(!1)) : (this._thinInstanceDataStorage.instancesCount = 0, this.Ya || this.refreshBoundingInfo());
      else if ("previousMatrix" === vv) this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = null, this._thinInstanceDataStorage.previousMatrixData = zv, null !== zv && (this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", zv, hv));
      else if ("splatIndex" === vv && zv) {
        this._thinInstanceInitializeUserStorage(), this._thinInstanceDataStorage.instancesCount = zv.length / Pv, this._userThinInstanceBuffersStorage.data[vv] = zv, this._userThinInstanceBuffersStorage.strides[vv] = Pv, this._userThinInstanceBuffersStorage.sizes[vv] = zv.length;
        const hv = new pv.c(this.ma(), zv, !0, 16, !1, !0);
        this._thinInstanceDataStorage.matrixBuffer = hv;
        for (let zv = 0; zv < 4; zv++) this.setVerticesBuffer(hv.createVertexBuffer(vv + zv, 4 * zv, 4))
      } else vv === pv.k.ColorKind && (vv = pv.k.ColorInstanceKind), null === zv ? this._userThinInstanceBuffersStorage?.data[vv] && (this.removeVerticesData(vv), delete this._userThinInstanceBuffersStorage.data[vv], delete this._userThinInstanceBuffersStorage.strides[vv], delete this._userThinInstanceBuffersStorage.sizes[vv], delete this._userThinInstanceBuffersStorage.vertexBuffers[vv]) : (this._thinInstanceInitializeUserStorage(), this._userThinInstanceBuffersStorage.data[vv] = zv, this._userThinInstanceBuffersStorage.strides[vv] = Pv, this._userThinInstanceBuffersStorage.sizes[vv] = zv.length, this._userThinInstanceBuffersStorage.vertexBuffers[vv] = new pv.k(this.ma(), zv, vv, !hv, !1, Pv, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[vv]))
    }, gv.c.prototype.P_ = function(vv) {
      "matrix" === vv ? (this.thinInstanceAllowAutomaticStaticBufferRecreation && this._thinInstanceDataStorage.matrixBuffer && !this._thinInstanceDataStorage.matrixBuffer.isUpdatable() && this._thinInstanceRecreateBuffer(vv), this._thinInstanceDataStorage.matrixBuffer?.updateDirectly(this._thinInstanceDataStorage.matrixData, 0, this._thinInstanceDataStorage.instancesCount)) : "previousMatrix" === vv ? (this.thinInstanceAllowAutomaticStaticBufferRecreation && this._thinInstanceDataStorage.previousMatrixBuffer && !this._thinInstanceDataStorage.previousMatrixBuffer.isUpdatable() && this._thinInstanceRecreateBuffer(vv), this._thinInstanceDataStorage.previousMatrixBuffer?.updateDirectly(this._thinInstanceDataStorage.previousMatrixData, 0, this._thinInstanceDataStorage.instancesCount)) : "splatIndex" === vv ? this._thinInstanceDataStorage.matrixBuffer?.updateDirectly(this._userThinInstanceBuffersStorage.data[vv], 0, this._thinInstanceDataStorage.instancesCount) : (vv === pv.k.ColorKind && (vv = pv.k.ColorInstanceKind), this._userThinInstanceBuffersStorage?.vertexBuffers[vv] && (this.thinInstanceAllowAutomaticStaticBufferRecreation && !this._userThinInstanceBuffersStorage.vertexBuffers[vv].isUpdatable() && this._thinInstanceRecreateBuffer(vv), this._userThinInstanceBuffersStorage.vertexBuffers[vv].updateDirectly(this._userThinInstanceBuffersStorage.data[vv], 0)))
    }, gv.c.prototype.thinInstancePartialBufferUpdate = function(vv, zv, Pv) {
      if ("matrix" === vv) this._thinInstanceDataStorage.matrixBuffer && ("number" === typeof zv ? this._thinInstanceDataStorage.matrixBuffer.updateDirectly(new Float32Array(this._thinInstanceDataStorage.matrixData.buffer, this._thinInstanceDataStorage.matrixData.byteOffset + 16 * Pv * Float32Array.BYTES_PER_ELEMENT, 16 * zv), 16 * Pv) : this._thinInstanceDataStorage.matrixBuffer.updateDirectly(zv, Pv));
      else if (vv === pv.k.ColorKind && (vv = pv.k.ColorInstanceKind), this._userThinInstanceBuffersStorage?.vertexBuffers[vv]) {
        const hv = this._userThinInstanceBuffersStorage.vertexBuffers[vv];
        if ("number" === typeof zv) {
          const hv = new Float32Array(this._userThinInstanceBuffersStorage.data[vv].buffer, this._userThinInstanceBuffersStorage.data[vv].byteOffset + Pv * this._userThinInstanceBuffersStorage.strides[vv] * Float32Array.BYTES_PER_ELEMENT, zv * this._userThinInstanceBuffersStorage.strides[vv]);
          this._userThinInstanceBuffersStorage.vertexBuffers[vv].updateDirectly(hv, Pv * this._userThinInstanceBuffersStorage.strides[vv])
        } else hv.updateDirectly(zv, Pv)
      }
    }, gv.c.prototype.thinInstanceGetWorldMatrices = function() {
      if (!this._thinInstanceDataStorage.matrixData || !this._thinInstanceDataStorage.matrixBuffer) return [];
      const vv = this._thinInstanceDataStorage.matrixData;
      if (!this._thinInstanceDataStorage.worldMatrices) {
        this._thinInstanceDataStorage.worldMatrices = [];
        for (let zv = 0; zv < this._thinInstanceDataStorage.instancesCount; ++zv) this._thinInstanceDataStorage.worldMatrices[zv] = hv.c.FromArray(vv, 16 * zv)
      }
      return this._thinInstanceDataStorage.worldMatrices
    }, gv.c.prototype.thinInstanceRefreshBoundingInfo = function() {
      let vv = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        zv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        Pv = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        Sv = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!this._thinInstanceDataStorage.matrixData || !this._thinInstanceDataStorage.matrixBuffer) return;
      const gv = this._thinInstanceDataStorage.boundingVectors;
      if (vv || !this.rawBoundingInfo) {
        if (gv.length = 0, Sv && function(vv, zv, Pv) {
            const Sv = vv._userThinInstanceBuffersStorage,
              gv = Sv?.data[dv],
              av = Sv?.strides[dv];
            if (!gv || !av || av < 4 || !Nv(vv)) return !1;
            const sv = vv._thinInstanceDataStorage.matrixData;
            if (!sv) return !1;
            const Cv = {},
              iv = hv.i.Vector4[0],
              cv = hv.i.fa[1],
              Gv = hv.i.fa[2],
              mv = hv.i.fa[3],
              jv = hv.i.fa[4],
              fv = hv.i.fa[5],
              Fv = hv.i.fa[6],
              Yv = hv.i.Matrix[2],
              nv = vv.geometry ? vv.geometry.boundingBias : null,
              Ov = vv.getTotalVertices();
            cv.Dk(Number.POSITIVE_INFINITY), Gv.Dk(Number.NEGATIVE_INFINITY), mv.Dk(Number.POSITIVE_INFINITY), jv.Dk(Number.NEGATIVE_INFINITY);
            for (let ev = 0; ev < vv._thinInstanceDataStorage.instancesCount; ++ev) {
              const zv = ev * av;
              iv.set(gv[zv], gv[zv + 1], gv[zv + 2], gv[zv + 3]);
              const Sv = vv._getData({
                applyMorph: Pv,
                applyBakedVertexAnimation: !0,
                bakedVertexAnimationSettings: iv,
                updatePositionsArray: !1,
                cache: Cv
              }, null, pv.k.PositionKind);
              if (!Sv) return !1;
              lv(Sv, Ov, fv, Fv), Tv(fv, Fv, nv), cv.minimizeInPlace(fv), Gv.maximizeInPlace(Fv), hv.c.FromArrayToRef(sv, 16 * ev, Yv), nv ? Wv(fv, Fv, Yv, mv, jv) : wv(Sv, Ov, Yv, mv, jv)
            }
            return !(!isFinite(cv.x) || !isFinite(mv.x)) && (vv.cV().reConstruct(mv, jv), vv.rawBoundingInfo = new ev.e(cv, Gv), function(vv, zv) {
              vv.length = 0;
              for (let Pv = 0; Pv < zv.boundingBox.vectors.length; ++Pv) vv.push(zv.boundingBox.vectors[Pv].clone())
            }(zv, vv.rawBoundingInfo), vv._updateBoundingInfo(), !0)
          }(this, gv, Pv)) return;
        Sv && this.bakedVertexAnimationManager?.isEnabled && Nv(this) ? this.refreshBoundingInfo({
          applySkeleton: zv,
          applyMorph: Pv,
          applyBakedVertexAnimation: !0,
          updatePositionsArray: !1
        }) : this.refreshBoundingInfo(zv, Pv);
        const vv = this.cV();
        this.rawBoundingInfo = new ev.e(vv.minimum, vv.maximum)
      }
      const av = this.cV(),
        sv = this._thinInstanceDataStorage.matrixData;
      if (0 === gv.length)
        for (let hv = 0; hv < av.boundingBox.vectors.length; ++hv) gv.push(av.boundingBox.vectors[hv].clone());
      hv.i.fa[0].Dk(Number.POSITIVE_INFINITY), hv.i.fa[1].Dk(Number.NEGATIVE_INFINITY);
      for (let ev = 0; ev < this._thinInstanceDataStorage.instancesCount; ++ev) {
        hv.c.FromArrayToRef(sv, 16 * ev, hv.i.Matrix[0]);
        for (let vv = 0; vv < gv.length; ++vv) hv.l.TransformCoordinatesToRef(gv[vv], hv.i.Matrix[0], hv.i.fa[2]), hv.i.fa[0].minimizeInPlace(hv.i.fa[2]), hv.i.fa[1].maximizeInPlace(hv.i.fa[2])
      }
      av.reConstruct(hv.i.fa[0], hv.i.fa[1]), this._updateBoundingInfo()
    }, gv.c.prototype._thinInstanceRecreateBuffer = function(vv) {
      let zv = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      "matrix" === vv ? (this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", this._thinInstanceDataStorage.matrixData, zv)) : "previousMatrix" === vv ? this._scene.needsPreviousWorldMatrices && (this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", this._thinInstanceDataStorage.previousMatrixData ?? this._thinInstanceDataStorage.matrixData, zv)) : (vv === pv.k.ColorKind && (vv = pv.k.ColorInstanceKind), this._userThinInstanceBuffersStorage.vertexBuffers[vv]?.dispose(), this._userThinInstanceBuffersStorage.vertexBuffers[vv] = new pv.k(this.ma(), this._userThinInstanceBuffersStorage.data[vv], vv, !zv, !1, this._userThinInstanceBuffersStorage.strides[vv], !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[vv]))
    }, gv.c.prototype._thinInstanceUpdateBufferSize = function(vv) {
      let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      vv === pv.k.ColorKind && (vv = pv.k.ColorInstanceKind);
      const Pv = "matrix" === vv;
      if (!Pv && (!this._userThinInstanceBuffersStorage || !this._userThinInstanceBuffersStorage.strides[vv])) return;
      const hv = Pv ? 16 : this._userThinInstanceBuffersStorage.strides[vv],
        Sv = Pv ? this._thinInstanceDataStorage.matrixBufferSize : this._userThinInstanceBuffersStorage.sizes[vv];
      let ev = Pv ? this._thinInstanceDataStorage.matrixData : this._userThinInstanceBuffersStorage.data[vv];
      const gv = (this._thinInstanceDataStorage.instancesCount + zv) * hv;
      let dv = Sv;
      for (; dv < gv;) dv *= 2;
      if (!ev || Sv != dv) {
        if (ev) {
          const vv = new Float32Array(dv);
          vv.set(ev, 0), ev = vv
        } else ev = new Float32Array(dv);
        Pv ? (this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", ev, !1), this._thinInstanceDataStorage.matrixData = ev, this._thinInstanceDataStorage.matrixBufferSize = dv, this._scene.needsPreviousWorldMatrices && !this._thinInstanceDataStorage.previousMatrixData && (this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", ev, !1))) : (this._userThinInstanceBuffersStorage.vertexBuffers[vv]?.dispose(), this._userThinInstanceBuffersStorage.data[vv] = ev, this._userThinInstanceBuffersStorage.sizes[vv] = dv, this._userThinInstanceBuffersStorage.vertexBuffers[vv] = new pv.k(this.ma(), ev, vv, !0, !1, hv, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[vv]))
      }
    }, gv.c.prototype._thinInstanceInitializeUserStorage = function() {
      this._userThinInstanceBuffersStorage || (this._userThinInstanceBuffersStorage = {
        data: {},
        sizes: {},
        vertexBuffers: {},
        strides: {}
      })
    }, gv.c.prototype._disposeThinInstanceSpecificData = function() {
      this._thinInstanceDataStorage?.matrixBuffer && (this._thinInstanceDataStorage.matrixBuffer.dispose(), this._thinInstanceDataStorage.matrixBuffer = null), this._thinInstanceDataStorage?.previousMatrixBuffer && (this._thinInstanceDataStorage.previousMatrixBuffer.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = null)
    })
  },
  39760: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => cv,
      h: () => sv
    });
    var hv, Sv, ev, gv, pv = Pv(39295),
      dv = Pv(39300),
      Nv = Pv(39312),
      lv = Pv(36618),
      Tv = Pv(36594),
      Wv = Pv(39518),
      wv = Pv(36631),
      av = Pv(39190);
    let sv = (() => {
      var vv;
      let zv, Pv, hv, Sv, ev, gv, wv, av, sv, Cv = Wv.c,
        iv = [],
        cv = [],
        Gv = [],
        mv = [],
        jv = [],
        fv = [],
        Fv = [],
        Yv = [],
        nv = [],
        Ov = [],
        Dv = [],
        Kv = [],
        Vv = [],
        Uv = [],
        Rv = [],
        xv = [],
        tv = [],
        qv = [];
      return vv = class extends Cv {
        get billboardMode() {
          return this._billboardMode
        }
        set billboardMode(zv) {
          this._billboardMode !== zv && (this._billboardMode = zv, this._cache.useBillboardPosition = 0 !== (this._billboardMode & vv.BILLBOARDMODE_USE_POSITION))
        }
        get infiniteDistance() {
          return this._infiniteDistance
        }
        set infiniteDistance(vv) {
          this._infiniteDistance !== vv && (this._infiniteDistance = vv)
        }
        constructor(zv) {
          let Pv = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          super(zv, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, !1), this._forward = new Tv.l(0, 0, 1), this._up = new Tv.l(0, 1, 0), this._right = new Tv.l(1, 0, 0), this._position = (0, pv.f)(this, iv, Tv.l.Zero()), this._rotation = ((0, pv.f)(this, cv), (0, pv.f)(this, Gv, Tv.l.Zero())), this._rotationQuaternion = ((0, pv.f)(this, mv), (0, pv.f)(this, jv, null)), this._scaling = ((0, pv.f)(this, fv), (0, pv.f)(this, Fv, Tv.l.One())), this._transformToBoneReferal = ((0, pv.f)(this, Yv), null), this._isAbsoluteSynced = !1, this._billboardMode = (0, pv.f)(this, nv, vv.BILLBOARDMODE_NONE), this.scalingDeterminant = ((0, pv.f)(this, Ov), (0, pv.f)(this, Dv, 1)), this._infiniteDistance = ((0, pv.f)(this, Kv), (0, pv.f)(this, Vv, !1)), this.ignoreNonUniformScaling = ((0, pv.f)(this, Uv), (0, pv.f)(this, Rv, !1)), this.reIntegrateRotationIntoRotationQuaternion = ((0, pv.f)(this, xv), (0, pv.f)(this, tv, !1)), this._poseMatrix = ((0, pv.f)(this, qv), null), this._localMatrix = Tv.c.Zero(), this._usePivotMatrix = !1, this._absolutePosition = Tv.l.Zero(), this._absoluteScaling = Tv.l.Zero(), this._absoluteRotationQuaternion = Tv.d.Identity(), this._pivotMatrix = Tv.c.Identity(), this._postMultiplyPivotMatrix = !1, this._isWorldMatrixFrozen = !1, this._indexInSceneTransformNodesArray = -1, this.onAfterWorldMatrixUpdateObservable = new lv.c, this._nonUniformScaling = !1, Pv && this.rD().addTransformNode(this)
        }
        getClassName() {
          return "TransformNode"
        }
        get position() {
          return this._position
        }
        set position(vv) {
          this._position = vv, this._markAsDirtyInternal()
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
        set rotation(vv) {
          this._rotation = vv, this._rotationQuaternion = null, this._markAsDirtyInternal()
        }
        get pp() {
          return this._scaling
        }
        set pp(vv) {
          this._scaling = vv, this._markAsDirtyInternal()
        }
        get rotationQuaternion() {
          return this._rotationQuaternion
        }
        set rotationQuaternion(vv) {
          this._rotationQuaternion = vv, vv && this._rotation.Dk(0), this._markAsDirtyInternal()
        }
        _markAsDirtyInternal() {
          this._isDirty || (this._isDirty = !0, this.customMarkAsDirty && this.customMarkAsDirty())
        }
        get forward() {
          return Tv.l.TransformNormalFromFloatsToRef(0, 0, this.rD().useRightHandedSystem ? -1 : 1, this.getWorldMatrix(), this._forward), this._forward.normalize()
        }
        get up() {
          return Tv.l.TransformNormalFromFloatsToRef(0, 1, 0, this.getWorldMatrix(), this._up), this._up.normalize()
        }
        get right() {
          return Tv.l.TransformNormalFromFloatsToRef(this.rD().useRightHandedSystem ? -1 : 1, 0, 0, this.getWorldMatrix(), this._right), this._right.normalize()
        }
        updatePoseMatrix(vv) {
          return this._poseMatrix ? (this._poseMatrix.Vzv(vv), this) : (this._poseMatrix = vv.clone(), this)
        }
        getPoseMatrix() {
          return this._poseMatrix || (this._poseMatrix = Tv.c.Identity()), this._poseMatrix
        }
        _isSynchronized() {
          const zv = this._cache;
          return this._billboardMode === zv.billboardMode && this._billboardMode === vv.BILLBOARDMODE_NONE && (!zv.pivotMatrixUpdated && (!this._infiniteDistance && (!this._position._isDirty && (!this._scaling._isDirty && !(this._rotationQuaternion && this._rotationQuaternion._isDirty || this._rotation._isDirty)))))
        }
        _initCache() {
          super._initCache();
          const vv = this._cache;
          vv.localMatrixUpdated = !1, vv.billboardMode = -1, vv.infiniteDistance = !1, vv.useBillboardPosition = !1
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
        setPreTransformMatrix(vv) {
          return this.setPivotMatrix(vv, !1)
        }
        setPivotMatrix(vv) {
          let zv = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          return this._pivotMatrix.Vzv(vv), this._usePivotMatrix = !this._pivotMatrix.isIdentity(), this._cache.pivotMatrixUpdated = !0, this._postMultiplyPivotMatrix = zv, this._postMultiplyPivotMatrix && (this._pivotMatrixInverse ? this._pivotMatrix.invertToRef(this._pivotMatrixInverse) : this._pivotMatrixInverse = Tv.c.Invert(this._pivotMatrix)), this
        }
        getPivotMatrix() {
          return this._pivotMatrix
        }
        instantiateHierarchy() {
          let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            zv = arguments.length > 1 ? arguments[1] : void 0,
            Pv = arguments.length > 2 ? arguments[2] : void 0;
          const hv = this.clone("Clone of " + (this.name || this.id), vv || this.parent, !0);
          hv && Pv && Pv(this, hv);
          for (const Sv of this.getChildTransformNodes(!0)) Sv.instantiateHierarchy(hv, zv, Pv);
          return hv
        }
        lK() {
          let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return vv ? arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (this._rotation.Dk(0), this._rotationQuaternion = this._rotationQuaternion || Tv.d.Identity(), vv.decompose(this._scaling, this._rotationQuaternion, this._position), this.computeWorldMatrix(!0)) : (this._worldMatrix = vv, this._absolutePosition.f_(this._worldMatrix.m[12], this._worldMatrix.m[13], this._worldMatrix.m[14]), this._afterComputeWorldMatrix()) : (this._isWorldMatrixFrozen = !1, this.computeWorldMatrix(!0)), this._isDirty = !1, this._isWorldMatrixFrozen = !0, this
        }
        unfreezeWorldMatrix() {
          return this._isWorldMatrixFrozen = !1, this.computeWorldMatrix(!0), this
        }
        get Jev() {
          return this._isWorldMatrixFrozen
        }
        getAbsolutePosition() {
          return this.computeWorldMatrix(), this._absolutePosition
        }
        setAbsolutePosition(vv) {
          if (!vv) return this;
          let zv, Pv, hv;
          if (void 0 === vv.x) {
            if (arguments.length < 3) return this;
            zv = arguments[0], Pv = arguments[1], hv = arguments[2]
          } else zv = vv.x, Pv = vv.y, hv = vv.z;
          if (this.parent) {
            const vv = Tv.i.Matrix[0];
            this.parent.getWorldMatrix().invertToRef(vv), Tv.l.TransformCoordinatesFromFloatsToRef(zv, Pv, hv, vv, this.position)
          } else this.position.x = zv, this.position.y = Pv, this.position.z = hv;
          return this._absolutePosition.Vzv(vv), this
        }
        setPositionWithLocalVector(vv) {
          return this.computeWorldMatrix(), this.position = Tv.l.TransformNormal(vv, this._localMatrix), this
        }
        getPositionExpressedInLocalSpace() {
          this.computeWorldMatrix();
          const vv = Tv.i.Matrix[0];
          return this._localMatrix.invertToRef(vv), Tv.l.TransformNormal(this.position, vv)
        }
        locallyTranslate(vv) {
          return this.computeWorldMatrix(!0), this.position = Tv.l.TransformCoordinates(vv, this._localMatrix), this
        }
        lookAt(zv) {
          let Pv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            hv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            Sv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
            ev = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
          const gv = vv._LookAtVectorCache,
            pv = 0 === ev ? this.position : this.getAbsolutePosition();
          if (zv.subtractToRef(pv, gv), this.setDirection(gv, Pv, hv, Sv), 1 === ev && this.parent)
            if (this.rotationQuaternion) {
              const vv = Tv.i.Matrix[0];
              this.rotationQuaternion.toRotationMatrix(vv);
              const zv = Tv.i.Matrix[1];
              this.parent.getWorldMatrix().getRotationMatrixToRef(zv), zv.invert(), vv.multiplyToRef(zv, vv), this.rotationQuaternion.fromRotationMatrix(vv)
            } else {
              const vv = Tv.i.Quaternion[0];
              Tv.d.FromEulerVectorToRef(this.rotation, vv);
              const zv = Tv.i.Matrix[0];
              vv.toRotationMatrix(zv);
              const Pv = Tv.i.Matrix[1];
              this.parent.getWorldMatrix().getRotationMatrixToRef(Pv), Pv.invert(), zv.multiplyToRef(Pv, zv), vv.fromRotationMatrix(zv), vv.toEulerAnglesToRef(this.rotation)
            } return this
        }
        ZH(vv) {
          const zv = Tv.l.Zero();
          return this.getDirectionToRef(vv, zv), zv
        }
        getDirectionToRef(vv, zv) {
          return Tv.l.TransformNormalToRef(vv, this.getWorldMatrix(), zv), this
        }
        setDirection(vv) {
          let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
          const Sv = -Math.atan2(vv.z, vv.x) + Math.PI / 2,
            ev = Math.sqrt(vv.x * vv.x + vv.z * vv.z),
            gv = -Math.atan2(vv.y, ev);
          return this.rotationQuaternion ? Tv.d.RotationYawPitchRollToRef(Sv + zv, gv + Pv, hv, this.rotationQuaternion) : (this.rotation.x = gv + Pv, this.rotation.y = Sv + zv, this.rotation.z = hv), this
        }
        setPivotPoint(vv) {
          let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          0 == this.rD().getRenderId() && this.computeWorldMatrix(!0);
          const Pv = this.getWorldMatrix();
          if (1 == zv) {
            const zv = Tv.i.Matrix[0];
            Pv.invertToRef(zv), vv = Tv.l.TransformCoordinates(vv, zv)
          }
          return this.setPivotMatrix(Tv.c.Translation(-vv.x, -vv.y, -vv.z), !0)
        }
        getPivotPoint() {
          const vv = Tv.l.Zero();
          return this.getPivotPointToRef(vv), vv
        }
        getPivotPointToRef(vv) {
          return vv.x = -this._pivotMatrix.m[12], vv.y = -this._pivotMatrix.m[13], vv.z = -this._pivotMatrix.m[14], this
        }
        getAbsolutePivotPoint() {
          const vv = Tv.l.Zero();
          return this.getAbsolutePivotPointToRef(vv), vv
        }
        getAbsolutePivotPointToRef(vv) {
          return this.getPivotPointToRef(vv), Tv.l.TransformCoordinatesToRef(vv, this.getWorldMatrix(), vv), this
        }
        xvv(vv) {
          if (this._isDirty) return this;
          if (this._children)
            for (const zv of this._children) zv.xvv(vv);
          return super.xvv(vv)
        }
        setParent(zv) {
          let Pv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            hv = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          if (!zv && !this.parent) return this;
          const Sv = Tv.i.Quaternion[0],
            ev = Tv.i.fa[0],
            gv = Tv.i.fa[1],
            pv = Tv.i.Matrix[1];
          Tv.c.IdentityToRef(pv);
          const dv = Tv.i.Matrix[0];
          this.computeWorldMatrix(!0);
          let Nv = this.rotationQuaternion;
          return Nv || (Nv = vv._TmpRotation, Tv.d.RotationYawPitchRollToRef(this._rotation.y, this._rotation.x, this._rotation.z, Nv)), Tv.c.ComposeToRef(this.pp, Nv, this.position, dv), this.parent && dv.multiplyToRef(this.parent.computeWorldMatrix(!0), dv), zv && (zv.computeWorldMatrix(!0).invertToRef(pv), dv.multiplyToRef(pv, dv)), dv.decompose(gv, Sv, ev, Pv ? this : void 0), this.rotationQuaternion ? this.rotationQuaternion.Vzv(Sv) : Sv.toEulerAnglesToRef(this.rotation), this.pp.Vzv(gv), this.position.Vzv(ev), this.parent = zv, hv && this.setPivotMatrix(Tv.c.Identity()), this
        }
        addChild(vv) {
          let zv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return vv.setParent(this, zv), this
        }
        removeChild(vv) {
          let zv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return vv.parent !== this || vv.setParent(null, zv), this
        }
        get nonUniformScaling() {
          return this._nonUniformScaling
        }
        _updateNonUniformScalingState(vv) {
          return this._nonUniformScaling !== vv && (this._nonUniformScaling = vv, !0)
        }
        attachToBone(vv, zv) {
          return this._currentParentWhenAttachingToBone = this.parent, this._transformToBoneReferal = zv, this.parent = vv, vv.getSkeleton().prepare(!0), vv.getFinalMatrix().determinant() < 0 && (this.scalingDeterminant *= -1), this
        }
        detachFromBone() {
          let vv = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          return this.parent ? (this.parent.getWorldMatrix().determinant() < 0 && (this.scalingDeterminant *= -1), this._transformToBoneReferal = null, this.parent = vv ? this._currentParentWhenAttachingToBone : null, this) : (vv && (this.parent = this._currentParentWhenAttachingToBone), this)
        }
        rotate(zv, Pv, hv) {
          let Sv;
          if (zv.normalize(), this.rotationQuaternion || (this.rotationQuaternion = this.rotation.toQuaternion(), this.rotation.Dk(0)), hv && 0 !== hv) {
            if (this.parent) {
              const vv = this.parent.getWorldMatrix(),
                hv = Tv.i.Matrix[0];
              vv.invertToRef(hv), zv = Tv.l.TransformNormal(zv, hv), vv.determinant() < 0 && (Pv *= -1)
            }
            Sv = Tv.d.RotationAxisToRef(zv, Pv, vv._RotationAxisCache), Sv.multiplyToRef(this.rotationQuaternion, this.rotationQuaternion)
          } else Sv = Tv.d.RotationAxisToRef(zv, Pv, vv._RotationAxisCache), this.rotationQuaternion.multiplyToRef(Sv, this.rotationQuaternion);
          return this
        }
        rotateAround(vv, zv, Pv) {
          zv.normalize(), this.rotationQuaternion || (this.rotationQuaternion = Tv.d.RotationYawPitchRoll(this.rotation.y, this.rotation.x, this.rotation.z), this.rotation.Dk(0));
          const hv = Tv.i.fa[0],
            Sv = Tv.i.fa[1],
            ev = Tv.i.fa[2],
            gv = Tv.i.Quaternion[0],
            pv = Tv.i.Matrix[0],
            dv = Tv.i.Matrix[1],
            Nv = Tv.i.Matrix[2],
            lv = Tv.i.Matrix[3];
          return vv.subtractToRef(this.position, hv), Tv.c.TranslationToRef(hv.x, hv.y, hv.z, pv), Tv.c.TranslationToRef(-hv.x, -hv.y, -hv.z, dv), Tv.c.RotationAxisToRef(zv, Pv, Nv), dv.multiplyToRef(Nv, lv), lv.multiplyToRef(pv, lv), lv.decompose(Sv, gv, ev), this.position.addInPlace(ev), gv.multiplyToRef(this.rotationQuaternion, this.rotationQuaternion), this
        }
        translate(vv, zv, Pv) {
          const hv = vv.scale(zv);
          if (Pv && 0 !== Pv) this.setAbsolutePosition(this.getAbsolutePosition().add(hv));
          else {
            const vv = this.getPositionExpressedInLocalSpace().add(hv);
            this.setPositionWithLocalVector(vv)
          }
          return this
        }
        addRotation(vv, zv, Pv) {
          let hv;
          this.rotationQuaternion ? hv = this.rotationQuaternion : (hv = Tv.i.Quaternion[1], Tv.d.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, this.rotation.z, hv));
          const Sv = Tv.i.Quaternion[0];
          return Tv.d.RotationYawPitchRollToRef(zv, vv, Pv, Sv), hv.multiplyInPlace(Sv), this.rotationQuaternion || hv.toEulerAnglesToRef(this.rotation), this
        }
        _getEffectiveParent() {
          return this.parent
        }
        isWorldMatrixCameraDependent() {
          return this._infiniteDistance && !this.parent || this._billboardMode !== vv.BILLBOARDMODE_NONE
        }
        computeWorldMatrix() {
          let zv = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            Pv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          if (this._isWorldMatrixFrozen && !this._isDirty) return this._worldMatrix;
          const hv = this.rD().getRenderId();
          if (!this._isDirty && !zv && (this._currentRenderId === hv || this.isSynchronized())) return this._currentRenderId = hv, this._worldMatrix;
          Pv = Pv || this.rD().activeCamera, this._updateCache();
          const Sv = this._cache;
          Sv.pivotMatrixUpdated = !1, Sv.billboardMode = this.billboardMode, Sv.infiniteDistance = this.infiniteDistance, Sv.parent = this._parentNode, this._currentRenderId = hv, this._childUpdateId += 1, this._isDirty = !1, this._position._isDirty = !1, this._rotation._isDirty = !1, this._scaling._isDirty = !1;
          const ev = this._getEffectiveParent(),
            gv = vv._TmpScaling;
          let pv, dv = this._position;
          if (this._infiniteDistance && !this.parent && Pv) {
            const zv = Pv.getWorldMatrix().m;
            dv = vv._TmpTranslation, dv.f_(this._position.x + zv[12], this._position.y + zv[13], this._position.z + zv[14])
          }
          if (gv.f_(this._scaling.x * this.scalingDeterminant, this._scaling.y * this.scalingDeterminant, this._scaling.z * this.scalingDeterminant), this._rotationQuaternion) {
            if (this._rotationQuaternion._isDirty = !1, pv = this._rotationQuaternion, this.reIntegrateRotationIntoRotationQuaternion) {
              this.rotation.lengthSquared() && (this._rotationQuaternion.multiplyInPlace(Tv.d.RotationYawPitchRoll(this._rotation.y, this._rotation.x, this._rotation.z)), this._rotation.f_(0, 0, 0))
            }
          } else pv = vv._TmpRotation, Tv.d.RotationYawPitchRollToRef(this._rotation.y, this._rotation.x, this._rotation.z, pv);
          if (this._usePivotMatrix) {
            const vv = Tv.i.Matrix[1];
            Tv.c.ScalingToRef(gv.x, gv.y, gv.z, vv);
            const zv = Tv.i.Matrix[0];
            pv.toRotationMatrix(zv), this._pivotMatrix.multiplyToRef(vv, Tv.i.Matrix[4]), Tv.i.Matrix[4].multiplyToRef(zv, this._localMatrix), this._postMultiplyPivotMatrix && this._localMatrix.multiplyToRef(this._pivotMatrixInverse, this._localMatrix), this._localMatrix.addTranslationFromFloats(dv.x, dv.y, dv.z)
          } else Tv.c.ComposeToRef(gv, pv, dv, this._localMatrix);
          if (ev && ev.getWorldMatrix) {
            if (zv && ev.computeWorldMatrix(zv), this.billboardMode) {
              if (this._transformToBoneReferal) {
                const vv = this.parent;
                vv.getSkeleton().prepare(), vv.getFinalMatrix().multiplyToRef(this._transformToBoneReferal.getWorldMatrix(), Tv.i.Matrix[7])
              } else Tv.i.Matrix[7].Vzv(ev.getWorldMatrix());
              const zv = Tv.i.fa[5],
                Pv = Tv.i.fa[6],
                hv = Tv.i.Quaternion[0];
              Tv.i.Matrix[7].decompose(Pv, hv, zv), Tv.c.ScalingToRef(Pv.x, Pv.y, Pv.z, Tv.i.Matrix[7]), Tv.i.Matrix[7].setTranslation(zv), vv.BillboardUseParentOrientation && (this._position.applyRotationQuaternionToRef(hv, zv), this._localMatrix.setTranslation(zv)), this._localMatrix.multiplyToRef(Tv.i.Matrix[7], this._worldMatrix)
            } else if (this._transformToBoneReferal) {
              const vv = this.parent;
              vv.getSkeleton().prepare(), this._localMatrix.multiplyToRef(vv.getFinalMatrix(), Tv.i.Matrix[6]), Tv.i.Matrix[6].multiplyToRef(this._transformToBoneReferal.getWorldMatrix(), this._worldMatrix)
            } else this._localMatrix.multiplyToRef(ev.getWorldMatrix(), this._worldMatrix);
            this._markSyncedWithParent()
          } else this._worldMatrix.Vzv(this._localMatrix);
          if (Pv && this.billboardMode)
            if (Sv.useBillboardPosition) {
              const zv = Tv.i.fa[0];
              this._worldMatrix.getTranslationToRef(zv);
              const hv = Pv.globalPosition;
              this._worldMatrix.invertToRef(Tv.i.Matrix[1]);
              const Sv = Tv.i.fa[1];
              Tv.l.TransformCoordinatesToRef(hv, Tv.i.Matrix[1], Sv), Sv.normalize();
              const ev = -Math.atan2(Sv.z, Sv.x) + Math.PI / 2,
                gv = Math.sqrt(Sv.x * Sv.x + Sv.z * Sv.z),
                pv = -Math.atan2(Sv.y, gv);
              if (Tv.d.RotationYawPitchRollToRef(ev, pv, 0, Tv.i.Quaternion[0]), (this.billboardMode & vv.BILLBOARDMODE_ALL) !== vv.BILLBOARDMODE_ALL) {
                const zv = Tv.i.fa[1];
                Tv.i.Quaternion[0].toEulerAnglesToRef(zv), (this.billboardMode & vv.BILLBOARDMODE_X) !== vv.BILLBOARDMODE_X && (zv.x = 0), (this.billboardMode & vv.BILLBOARDMODE_Y) !== vv.BILLBOARDMODE_Y && (zv.y = 0), (this.billboardMode & vv.BILLBOARDMODE_Z) !== vv.BILLBOARDMODE_Z && (zv.z = 0), Tv.c.RotationYawPitchRollToRef(zv.y, zv.x, zv.z, Tv.i.Matrix[0])
              } else Tv.c.FromQuaternionToRef(Tv.i.Quaternion[0], Tv.i.Matrix[0]);
              this._worldMatrix.setTranslationFromFloats(0, 0, 0), this._worldMatrix.multiplyToRef(Tv.i.Matrix[0], this._worldMatrix), this._worldMatrix.setTranslation(Tv.i.fa[0])
            } else {
              const zv = Tv.i.fa[0];
              this._worldMatrix.getTranslationToRef(zv), Tv.i.Matrix[1].Vzv(Pv.getViewMatrix());
              const hv = this.rD().useRightHandedSystem;
              if (hv && Tv.i.Matrix[1].multiplyToRef(vv._TmpRHRestore, Tv.i.Matrix[1]), Tv.i.Matrix[1].setTranslationFromFloats(0, 0, 0), Tv.i.Matrix[1].invertToRef(Tv.i.Matrix[0]), (this.billboardMode & vv.BILLBOARDMODE_ALL) !== vv.BILLBOARDMODE_ALL) {
                Tv.i.Matrix[0].decompose(void 0, Tv.i.Quaternion[0], void 0);
                const zv = Tv.i.fa[1];
                Tv.i.Quaternion[0].toEulerAnglesToRef(zv), (this.billboardMode & vv.BILLBOARDMODE_X) !== vv.BILLBOARDMODE_X && (zv.x = 0), (this.billboardMode & vv.BILLBOARDMODE_Y) !== vv.BILLBOARDMODE_Y && (zv.y = 0), (this.billboardMode & vv.BILLBOARDMODE_Z) !== vv.BILLBOARDMODE_Z && (zv.z = 0), hv && (zv.y += Math.PI), Tv.c.RotationYawPitchRollToRef(zv.y, zv.x, zv.z, Tv.i.Matrix[0])
              }
              this._worldMatrix.setTranslationFromFloats(0, 0, 0), this._worldMatrix.multiplyToRef(Tv.i.Matrix[0], this._worldMatrix), this._worldMatrix.setTranslation(Tv.i.fa[0])
            } return this.ignoreNonUniformScaling ? this._updateNonUniformScalingState(!1) : this._scaling.isNonUniformWithinEpsilon(1e-6) ? this._updateNonUniformScalingState(!0) : ev && ev._nonUniformScaling ? this._updateNonUniformScalingState(ev._nonUniformScaling) : this._updateNonUniformScalingState(!1), this._afterComputeWorldMatrix(), this._absolutePosition.f_(this._worldMatrix.m[12], this._worldMatrix.m[13], this._worldMatrix.m[14]), this._isAbsoluteSynced = !1, this.onAfterWorldMatrixUpdateObservable.notifyObservers(this), this._poseMatrix || (this._poseMatrix = Tv.c.Invert(this._worldMatrix)), this._worldMatrixDeterminantIsDirty = !0, this._worldMatrix
        }
        resetLocalMatrix() {
          let vv = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          if (this.computeWorldMatrix(), vv) {
            const vv = this.getChildren();
            for (let zv = 0; zv < vv.length; ++zv) {
              const Pv = vv[zv];
              if (Pv) {
                Pv.computeWorldMatrix();
                const vv = Tv.i.Matrix[0];
                Pv._localMatrix.multiplyToRef(this._localMatrix, vv);
                const zv = Tv.i.Quaternion[0];
                vv.decompose(Pv.pp, zv, Pv.position), Pv.rotationQuaternion ? Pv.rotationQuaternion.Vzv(zv) : zv.toEulerAnglesToRef(Pv.rotation)
              }
            }
          }
          this.pp.f_(1, 1, 1), this.position.f_(0, 0, 0), this.rotation.f_(0, 0, 0), this.rotationQuaternion && (this.rotationQuaternion = Tv.d.Identity()), this._worldMatrix = Tv.c.Identity()
        }
        _afterComputeWorldMatrix() {}
        registerAfterWorldMatrixUpdate(vv) {
          return this.onAfterWorldMatrixUpdateObservable.add(vv), this
        }
        unregisterAfterWorldMatrixUpdate(vv) {
          return this.onAfterWorldMatrixUpdateObservable.removeCallback(vv), this
        }
        getPositionInCameraSpace() {
          let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return vv || (vv = this.rD().activeCamera), Tv.l.TransformCoordinates(this.getAbsolutePosition(), vv.getViewMatrix())
        }
        getDistanceToCamera() {
          let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return vv || (vv = this.rD().activeCamera), this.getAbsolutePosition().subtract(vv.globalPosition).length()
        }
        clone(zv, Pv, hv) {
          const Sv = Nv.c.Clone((() => new vv(zv, this.rD())), this);
          if (Sv.name = zv, Sv.id = zv, Pv && (Sv.parent = Pv), !hv) {
            const vv = this.getDescendants(!0);
            for (let Pv = 0; Pv < vv.length; Pv++) {
              const hv = vv[Pv];
              hv.clone && hv.clone(zv + "." + hv.name, Sv)
            }
          }
          return Sv
        }
        serialize(vv) {
          const zv = Nv.c.Serialize(this, vv);
          return zv.type = this.getClassName(), zv.uniqueId = this.uniqueId, this.parent && this.parent._serializeAsParent(zv), zv.localMatrix = this.getPivotMatrix().pPv(), zv.isEnabled = this.isEnabled(), this._isWorldMatrixFrozen && (zv.lK = !0), Nv.c.AppendSerializedAnimations(this, zv), zv.PC = this.serializeAnimationRanges(), zv
        }
        getChildTransformNodes(zv, Pv) {
          const hv = [];
          return this._getDescendants(hv, zv, (zv => (!Pv || Pv(zv)) && zv instanceof vv)), hv
        }
        dispose(vv) {
          let zv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this.rD().stopAnimation(this), this.rD().removeTransformNode(this), this._parentContainer) {
            const vv = this._parentContainer.transformNodes.indexOf(this);
            vv > -1 && this._parentContainer.transformNodes.splice(vv, 1), this._parentContainer = null
          }
          if (this.onAfterWorldMatrixUpdateObservable.clear(), vv) {
            const vv = this.getChildTransformNodes(!0);
            for (const zv of vv) zv.parent = null, zv.computeWorldMatrix(!0)
          }
          super.dispose(vv, zv)
        }
        normalizeToUnitCube() {
          let vv = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            zv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            Pv = arguments.length > 2 ? arguments[2] : void 0,
            hv = null,
            Sv = null;
          zv && (this.rotationQuaternion ? (Sv = this.rotationQuaternion.clone(), this.rotationQuaternion.f_(0, 0, 0, 1)) : this.rotation && (hv = this.rotation.clone(), this.rotation.f_(0, 0, 0)));
          const ev = this.getHierarchyBoundingVectors(vv, Pv),
            gv = ev.max.subtract(ev.min),
            pv = Math.max(gv.x, gv.y, gv.z);
          if (0 === pv) return this;
          const dv = 1 / pv;
          return this.pp.scaleInPlace(dv), zv && (this.rotationQuaternion && Sv ? this.rotationQuaternion.Vzv(Sv) : this.rotation && hv && this.rotation.Vzv(hv)), this
        }
        _syncAbsoluteScalingAndRotation() {
          this._isAbsoluteSynced || (this._worldMatrix.decompose(this._absoluteScaling, this._absoluteRotationQuaternion), this._isAbsoluteSynced = !0)
        }
      }, (() => {
        const Nv = "function" === typeof Symbol && Symbol.metadata ? Object.create(Cv[Symbol.metadata] ?? null) : void 0;
        zv = [(0, dv.I)("position")], Pv = [(0, dv.I)("rotation")], hv = [(0, dv.B)("rotationQuaternion")], Sv = [(0, dv.I)("pp")], ev = [(0, dv.L)("billboardMode")], gv = [(0, dv.L)()], wv = [(0, dv.L)("infiniteDistance")], av = [(0, dv.L)()], sv = [(0, dv.L)()], (0, pv.e)(null, null, zv, {
          kind: "field",
          name: "_position",
          static: !1,
          private: !1,
          access: {
            has: vv => "_position" in vv,
            get: vv => vv._position,
            set: (vv, zv) => {
              vv._position = zv
            }
          },
          metadata: Nv
        }, iv, cv), (0, pv.e)(null, null, Pv, {
          kind: "field",
          name: "_rotation",
          static: !1,
          private: !1,
          access: {
            has: vv => "_rotation" in vv,
            get: vv => vv._rotation,
            set: (vv, zv) => {
              vv._rotation = zv
            }
          },
          metadata: Nv
        }, Gv, mv), (0, pv.e)(null, null, hv, {
          kind: "field",
          name: "_rotationQuaternion",
          static: !1,
          private: !1,
          access: {
            has: vv => "_rotationQuaternion" in vv,
            get: vv => vv._rotationQuaternion,
            set: (vv, zv) => {
              vv._rotationQuaternion = zv
            }
          },
          metadata: Nv
        }, jv, fv), (0, pv.e)(null, null, Sv, {
          kind: "field",
          name: "_scaling",
          static: !1,
          private: !1,
          access: {
            has: vv => "_scaling" in vv,
            get: vv => vv._scaling,
            set: (vv, zv) => {
              vv._scaling = zv
            }
          },
          metadata: Nv
        }, Fv, Yv), (0, pv.e)(null, null, ev, {
          kind: "field",
          name: "_billboardMode",
          static: !1,
          private: !1,
          access: {
            has: vv => "_billboardMode" in vv,
            get: vv => vv._billboardMode,
            set: (vv, zv) => {
              vv._billboardMode = zv
            }
          },
          metadata: Nv
        }, nv, Ov), (0, pv.e)(null, null, gv, {
          kind: "field",
          name: "scalingDeterminant",
          static: !1,
          private: !1,
          access: {
            has: vv => "scalingDeterminant" in vv,
            get: vv => vv.scalingDeterminant,
            set: (vv, zv) => {
              vv.scalingDeterminant = zv
            }
          },
          metadata: Nv
        }, Dv, Kv), (0, pv.e)(null, null, wv, {
          kind: "field",
          name: "_infiniteDistance",
          static: !1,
          private: !1,
          access: {
            has: vv => "_infiniteDistance" in vv,
            get: vv => vv._infiniteDistance,
            set: (vv, zv) => {
              vv._infiniteDistance = zv
            }
          },
          metadata: Nv
        }, Vv, Uv), (0, pv.e)(null, null, av, {
          kind: "field",
          name: "ignoreNonUniformScaling",
          static: !1,
          private: !1,
          access: {
            has: vv => "ignoreNonUniformScaling" in vv,
            get: vv => vv.ignoreNonUniformScaling,
            set: (vv, zv) => {
              vv.ignoreNonUniformScaling = zv
            }
          },
          metadata: Nv
        }, Rv, xv), (0, pv.e)(null, null, sv, {
          kind: "field",
          name: "reIntegrateRotationIntoRotationQuaternion",
          static: !1,
          private: !1,
          access: {
            has: vv => "reIntegrateRotationIntoRotationQuaternion" in vv,
            get: vv => vv.reIntegrateRotationIntoRotationQuaternion,
            set: (vv, zv) => {
              vv.reIntegrateRotationIntoRotationQuaternion = zv
            }
          },
          metadata: Nv
        }, tv, qv), Nv && Object.defineProperty(vv, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Nv
        })
      })(), vv.BILLBOARDMODE_NONE = 0, vv.BILLBOARDMODE_X = 1, vv.BILLBOARDMODE_Y = 2, vv.BILLBOARDMODE_Z = 4, vv.BILLBOARDMODE_ALL = 7, vv.BILLBOARDMODE_USE_POSITION = 128, vv.BillboardUseParentOrientation = !1, vv._TmpRotation = Tv.d.Zero(), vv._TmpScaling = Tv.l.Zero(), vv._TmpTranslation = Tv.l.Zero(), vv._TmpRHRestore = Tv.c.Scaling(1, 1, -1), vv._LookAtVectorCache = new Tv.l(0, 0, 0), vv._RotationAxisCache = new Tv.d, vv
    })();

    function Cv(vv, zv, Pv) {
      const hv = Nv.c.Parse((() => new sv(vv.name, zv)), vv, zv, Pv);
      if (vv.localMatrix ? hv.setPreTransformMatrix(Tv.c.FromArray(vv.localMatrix)) : vv.pivotMatrix && hv.setPivotMatrix(Tv.c.FromArray(vv.pivotMatrix)), hv.uF(vv.isEnabled), hv._waitingParsedUniqueId = vv.uniqueId, void 0 !== vv.parentId && (hv._waitingParentId = vv.parentId), void 0 !== vv.parentInstanceIndex && (hv._waitingParentInstanceIndex = vv.parentInstanceIndex), vv.lK && (hv._waitingFreezeWorldMatrix = vv.lK), vv.animations) {
        for (let zv = 0; zv < vv.animations.length; zv++) {
          const Pv = vv.animations[zv],
            Sv = (0, wv.b)("BABYLON.Animation");
          Sv && hv.animations.push(Sv.Parse(Pv))
        }
        Wv.c.ParseAnimationRanges(hv, vv, zv)
      }
      return vv.autoAnimate && zv.beginAnimation(hv, vv.autoAnimateFrom, vv.autoAnimateTo, vv.autoAnimateLoop, vv.autoAnimateSpeed || 1), hv
    }
    let iv = !1;

    function cv() {
      iv || (iv = !0, sv.Parse = Cv)
    }(hv = sv.prototype).vx ?? (hv.vx = (0, av.j)("TransformNode", "vx")), (Sv = sv.prototype).applyImpulse ?? (Sv.applyImpulse = (0, av.j)("TransformNode", "applyImpulse")), (ev = sv.prototype).applyAngularImpulse ?? (ev.applyAngularImpulse = (0, av.j)("TransformNode", "applyAngularImpulse")), (gv = sv.prototype).applyTorque ?? (gv.applyTorque = (0, av.j)("TransformNode", "applyTorque")), Object.getOwnPropertyDescriptor(sv.prototype, "physicsBody") || Object.defineProperty(sv.prototype, "physicsBody", (0, av.g)("TransformNode", "physicsBody"))
  },
  39716: (vv, zv, Pv) => {
    function hv(vv, zv, Pv) {
      try {
        const hv = vv.next();
        hv.done ? zv(hv) : hv.value ? hv.value.then((() => {
          hv.value = void 0, zv(hv)
        }), Pv) : zv(hv)
      } catch (hv) {
        Pv(hv)
      }
    }

    function Sv() {
      let vv, zv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 25;
      return (Pv, Sv, ev) => {
        const gv = performance.now();
        void 0 === vv || gv - vv > zv ? (vv = gv, setTimeout((() => {
          hv(Pv, Sv, ev)
        }), 0)) : hv(Pv, Sv, ev)
      }
    }

    function ev(vv, zv, Pv, hv, Sv) {
      const ev = () => {
        let gv;
        const pv = vv => {
          vv.done ? Pv(vv.value) : void 0 === gv ? gv = !0 : ev()
        };
        do {
          gv = void 0, Sv && Sv.aborted ? hv(new Error("Aborted")) : zv(vv, pv, hv), void 0 === gv && (gv = !1)
        } while (gv)
      };
      ev()
    }

    function gv(vv, zv) {
      let Pv;
      return ev(vv, hv, (vv => Pv = vv), (vv => {
        throw vv
      }), zv), Pv
    }
    async function pv(vv, zv, Pv) {
      return await new Promise(((hv, Sv) => {
        ev(vv, zv, hv, Sv, Pv)
      }))
    }

    function dv(vv, zv) {
      return function() {
        return gv(vv(...arguments), zv)
      }
    }
    Pv.d(zv, {
      b: () => Sv,
      f: () => dv,
      h: () => pv,
      k: () => gv
    })
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);
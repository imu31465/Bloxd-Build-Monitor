export const id = 230;
export const ids = [230];
export const modules = {
  38694: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => Ey,
      c: () => Cy
    });
    var Uy = Wy(38464),
      hy = Wy(38466),
      fy = Wy(38587),
      Zy = Wy(35893),
      cb = Wy(35861),
      Py = Wy(38697),
      oy = Wy(37350),
      By = Wy(35909),
      Ky = Wy(38347),
      ey = Wy(36794),
      qb = Wy(36425),
      sy = Wy(38432),
      Sy = Wy(38485);
    let Ey = (() => {
      var yb;
      let bb, Wy, By, Ey, ly, mb, Cy, Ty, Vy, Jy, gb, Gy, Oy, Ry, vb, ib, My, Yy, Xy = Py.b,
        ny = [],
        uy = [],
        rb = [],
        Hy = [],
        ab = [],
        Fy = [],
        py = [],
        Ly = [],
        Qy = [],
        jb = [],
        Dy = [],
        tb = [],
        wy = [],
        kb = [],
        Ny = [],
        zb = [],
        Iy = [],
        xb = [],
        Ay = [],
        dy = [],
        yW = [],
        bW = [],
        Wb = [],
        Ub = [],
        hb = [];
      return yb = class extends Xy {
        get position() {
          return this._position
        }
        set position(yb) {
          this._position = yb
        }
        set upVector(yb) {
          this._upVector = yb
        }
        get upVector() {
          return this._upVector
        }
        get screenArea() {
          let bb, Wy;
          if (this.mode === yb.PERSPECTIVE_CAMERA) this.fovMode === yb.FOVMODE_VERTICAL_FIXED ? (Wy = 2 * this.minZ * Math.tan(this.fov / 2), bb = this.xh().getAspectRatio(this) * Wy) : (bb = 2 * this.minZ * Math.tan(this.fov / 2), Wy = bb / this.xh().getAspectRatio(this));
          else {
            const yb = this.xh().getRenderWidth() / 2,
              Uy = this.xh().getRenderHeight() / 2;
            bb = (this.orthoRight ?? yb) - (this.orthoLeft ?? -yb), Wy = (this.orthoTop ?? Uy) - (this.orthoBottom ?? -Uy)
          }
          return bb * Wy
        }
        set orthoLeft(yb) {
          this._orthoLeft = yb;
          for (const bb of this._rigCameras) bb.orthoLeft = yb
        }
        get orthoLeft() {
          return this._orthoLeft
        }
        set orthoRight(yb) {
          this._orthoRight = yb;
          for (const bb of this._rigCameras) bb.orthoRight = yb
        }
        get orthoRight() {
          return this._orthoRight
        }
        set orthoBottom(yb) {
          this._orthoBottom = yb;
          for (const bb of this._rigCameras) bb.orthoBottom = yb
        }
        get orthoBottom() {
          return this._orthoBottom
        }
        set orthoTop(yb) {
          this._orthoTop = yb;
          for (const bb of this._rigCameras) bb.orthoTop = yb
        }
        get orthoTop() {
          return this._orthoTop
        }
        setFocalLength(yb) {
          let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 36;
          this.fov = 2 * Math.atan(bb / (2 * yb))
        }
        get inertia() {
          return this._baseInertia
        }
        set inertia(yb) {
          this._baseInertia = yb
        }
        set mode(yb) {
          this._mode = yb;
          for (const bb of this._rigCameras) bb.mode = yb
        }
        get mode() {
          return this._mode
        }
        get hasMoved() {
          return this._hasMoved
        }
        constructor(bb, Wy, hy) {
          let Py = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
          (0, sy.b)(), super(bb, hy, !1), this.inputs = (0, Uy.l)(this, ny), this._position = (0, Uy.l)(this, uy, cb.n.Zero()), this._upVector = ((0, Uy.l)(this, rb), (0, Uy.l)(this, Hy, cb.n.Up())), this.oblique = ((0, Uy.l)(this, ab), null), this._orthoLeft = null, this._orthoRight = null, this._orthoBottom = null, this._orthoTop = null, this.fov = (0, Uy.l)(this, Fy, .8), this.projectionPlaneTilt = ((0, Uy.l)(this, py), (0, Uy.l)(this, Ly, 0)), this.minZ = ((0, Uy.l)(this, Qy), (0, Uy.l)(this, jb, 1)), this.maxZ = ((0, Uy.l)(this, Dy), (0, Uy.l)(this, tb, 1e4)), this._baseInertia = ((0, Uy.l)(this, wy), .9), this._mode = yb.PERSPECTIVE_CAMERA, this.isIntermediate = !1, this.viewport = new ey.e(0, 0, 1, 1), this.layerMask = (0, Uy.l)(this, kb, 268435455), this.fovMode = ((0, Uy.l)(this, Ny), (0, Uy.l)(this, zb, yb.FOVMODE_VERTICAL_FIXED)), this.cameraRigMode = ((0, Uy.l)(this, Iy), (0, Uy.l)(this, xb, yb.RIG_MODE_NONE)), this.interaxialDistance = ((0, Uy.l)(this, Ay), (0, Uy.l)(this, dy, void 0)), this.isStereoscopicSideBySide = ((0, Uy.l)(this, yW), (0, Uy.l)(this, bW, void 0)), this.ignoreCameraMaxZ = ((0, Uy.l)(this, Wb), (0, Uy.l)(this, Ub, !1)), this.customRenderTargets = ((0, Uy.l)(this, hb), []), this.outputRenderTarget = null, this.onViewMatrixChangedObservable = new Zy.c, this.onProjectionMatrixChangedObservable = new Zy.c, this.onAfterCheckInputsObservable = new Zy.c, this.onRestoreStateObservable = new Zy.c, this.isRigCamera = !1, this._hasMoved = !1, this._rigCameras = new Array, this._skipRendering = !1, this._projectionMatrix = new cb.c, this._postProcesses = new Array, this._activeMeshes = new fy.e(256), this._globalPosition = cb.n.Zero(), this._computedViewMatrix = cb.c.Identity(), this._doNotComputeProjectionMatrix = !1, this._transformMatrix = cb.c.Zero(), this._refreshFrustumPlanes = !0, this._absoluteRotation = cb.e.Identity(), this._isCamera = !0, this._isLeftCamera = !1, this._isRightCamera = !1, this.layerMask = this.kWy().defaultCameraLayerMask, this.kWy().addCamera(this), Py && !this.kWy().activeCamera && (this.kWy().activeCamera = this), this.position = Wy, this.renderPassId = this.kWy().xh().createRenderPassId(`Camera ${bb}`)
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
          return "Bc"
        }
        toString(yb) {
          let bb = "Name: " + this.name;
          if (bb += ", type: " + this.getClassName(), this.animations)
            for (let Wy = 0; Wy < this.animations.length; Wy++) bb += ", animation[0]: " + this.animations[Wy].toString(yb);
          return bb
        }
        applyVerticalCorrection() {
          const yb = this.absoluteRotation.toEulerAngles();
          this.projectionPlaneTilt = this._scene.useRightHandedSystem ? -yb.x : yb.x
        }
        get globalPosition() {
          return this._globalPosition
        }
        getActiveMeshes() {
          return this._activeMeshes
        }
        isActiveMesh(yb) {
          return -1 !== this._activeMeshes.indexOf(yb)
        }
        isReady() {
          let yb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (yb)
            for (const bb of this._postProcesses)
              if (bb && !bb.isReady()) return !1;
          return super.isReady(yb)
        }
        _initCache() {
          super._initCache(), this._cache.position = new cb.n(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.upVector = new cb.n(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.mode = void 0, this._cache.minZ = void 0, this._cache.maxZ = void 0, this._cache.fov = void 0, this._cache.fovMode = void 0, this._cache.aspectRatio = void 0, this._cache.orthoLeft = void 0, this._cache.orthoRight = void 0, this._cache.orthoBottom = void 0, this._cache.orthoTop = void 0, this._cache.obliqueAngle = void 0, this._cache.obliqueLength = void 0, this._cache.obliqueOffset = void 0, this._cache.renderWidth = void 0, this._cache.renderHeight = void 0
        }
        _updateCache(yb) {
          yb || super._updateCache(), this._cache.position.Coy(this.position), this._cache.upVector.Coy(this.upVector)
        }
        _isSynchronized() {
          return this._isSynchronizedViewMatrix() && this._isSynchronizedProjectionMatrix()
        }
        _isSynchronizedViewMatrix() {
          return !!super._isSynchronized() && (this._cache.position.equals(this.position) && this._cache.upVector.equals(this.upVector) && this.isSynchronizedWithParent())
        }
        _isSynchronizedProjectionMatrix() {
          const bb = this.ignoreCameraMaxZ ? 0 : this.maxZ;
          let Wy = this._cache.mode === this.mode && this._cache.minZ === this.minZ && this._cache.maxZ === bb;
          if (!Wy) return !1;
          const Uy = this.xh();
          return this.mode === yb.PERSPECTIVE_CAMERA ? Wy = this._cache.fov === this.fov && this._cache.fovMode === this.fovMode && this._cache.aspectRatio === Uy.getAspectRatio(this) && this._cache.projectionPlaneTilt === this.projectionPlaneTilt : (Wy = this._cache.orthoLeft === this.orthoLeft && this._cache.orthoRight === this.orthoRight && this._cache.orthoBottom === this.orthoBottom && this._cache.orthoTop === this.orthoTop && this._cache.renderWidth === Uy.getRenderWidth() && this._cache.renderHeight === Uy.getRenderHeight(), this.oblique && (Wy = Wy && this._cache.obliqueAngle === this.oblique.angle && this._cache.obliqueLength === this.oblique.length && this._cache.obliqueOffset === this.oblique.offset)), Wy
        }
        attachControl(yb, bb) {}
        detachControl(yb) {}
        update() {
          this._hasMoved = !1, this._checkInputs(), this.cameraRigMode !== yb.RIG_MODE_NONE && this._updateRigCameras(), this.getViewMatrix(), this.getProjectionMatrix()
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
          for (let yb = 0; yb < this._postProcesses.length; yb++)
            if (null !== this._postProcesses[yb]) return this._postProcesses[yb];
          return null
        }
        _cascadePostProcessesToRigCams() {
          const yb = this._getFirstPostProcess();
          yb && yb.markTextureDirty();
          for (let bb = 0, Wy = this._rigCameras.length; bb < Wy; bb++) {
            const yb = this._rigCameras[bb],
              Wy = yb._rigPostProcess;
            if (Wy) {
              "pass" === Wy.getEffectName() && (yb.isIntermediate = 0 === this._postProcesses.length), yb._postProcesses = this._postProcesses.slice(0).concat(Wy), Wy.markTextureDirty()
            } else yb._postProcesses = this._postProcesses.slice(0)
          }
        }
        attachPostProcess(yb) {
          let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          return !yb.isReusable() && this._postProcesses.indexOf(yb) > -1 ? (oy.b.Error("You're trying to reuse a post process not defined as reusable."), 0) : (null == bb || bb < 0 ? this._postProcesses.push(yb) : null === this._postProcesses[bb] ? this._postProcesses[bb] = yb : this._postProcesses.splice(bb, 0, yb), this._cascadePostProcessesToRigCams(), this._scene.prePassRenderer && this._scene.prePassRenderer.goy(), this._postProcesses.indexOf(yb))
        }
        detachPostProcess(yb) {
          const bb = this._postProcesses.indexOf(yb); - 1 !== bb && (this._postProcesses[bb] = null), this._scene.prePassRenderer && this._scene.prePassRenderer.goy(), this._cascadePostProcessesToRigCams()
        }
        getWorldMatrix() {
          return this._isSynchronizedViewMatrix() || this.getViewMatrix(), this._worldMatrix
        }
        _getViewMatrix() {
          return cb.c.Identity()
        }
        getViewMatrix(yb) {
          return !yb && this._isSynchronizedViewMatrix() || (this._hasMoved = !0, this.updateCache(), this._computedViewMatrix = this._getViewMatrix(), this._currentRenderId = this.kWy().getRenderId(), this._childUpdateId++, this._refreshFrustumPlanes = !0, this._cameraRigParams && this._cameraRigParams.vrPreViewMatrix && this._computedViewMatrix.multiplyToRef(this._cameraRigParams.vrPreViewMatrix, this._computedViewMatrix), this.parent && this.parent.onViewMatrixChangedObservable && this.parent.onViewMatrixChangedObservable.notifyObservers(this.parent), this.onViewMatrixChangedObservable.notifyObservers(this), this._computedViewMatrix.invertToRef(this._worldMatrix), this._worldMatrix.getTranslationToRef(this._globalPosition)), this._computedViewMatrix
        }
        freezeProjectionMatrix(yb) {
          this._doNotComputeProjectionMatrix = !0, void 0 !== yb && (this._projectionMatrix = yb)
        }
        unfreezeProjectionMatrix() {
          this._doNotComputeProjectionMatrix = !1
        }
        getProjectionMatrix(bb) {
          if (this._doNotComputeProjectionMatrix || !bb && this._isSynchronizedProjectionMatrix()) return this._projectionMatrix;
          const Wy = this.ignoreCameraMaxZ ? 0 : this.maxZ;
          this._cache.mode = this.mode, this._cache.minZ = this.minZ, this._cache.maxZ = Wy, this._refreshFrustumPlanes = !0;
          const Uy = this.xh(),
            hy = this.kWy(),
            fy = Uy.Aoy;
          if (this.mode === yb.PERSPECTIVE_CAMERA) {
            let bb;
            this._cache.fov = this.fov, this._cache.fovMode = this.fovMode, this._cache.aspectRatio = Uy.getAspectRatio(this), this._cache.projectionPlaneTilt = this.projectionPlaneTilt, this.minZ <= 0 && (this.minZ = .1), bb = hy.useRightHandedSystem ? cb.c.PerspectiveFovRHToRef : cb.c.PerspectiveFovLHToRef, bb(this.fov, Uy.getAspectRatio(this), fy ? Wy : this.minZ, fy ? this.minZ : Wy, this._projectionMatrix, this.fovMode === yb.FOVMODE_VERTICAL_FIXED, Uy.isNDCHalfZRange, this.projectionPlaneTilt, fy)
          } else {
            const yb = Uy.getRenderWidth() / 2,
              bb = Uy.getRenderHeight() / 2;
            hy.useRightHandedSystem ? this.oblique ? cb.c.ObliqueOffCenterRHToRef(this.orthoLeft ?? -yb, this.orthoRight ?? yb, this.orthoBottom ?? -bb, this.orthoTop ?? bb, fy ? Wy : this.minZ, fy ? this.minZ : Wy, this.oblique.length, this.oblique.angle, this._computeObliqueDistance(this.oblique.offset), this._projectionMatrix, Uy.isNDCHalfZRange) : cb.c.OrthoOffCenterRHToRef(this.orthoLeft ?? -yb, this.orthoRight ?? yb, this.orthoBottom ?? -bb, this.orthoTop ?? bb, fy ? Wy : this.minZ, fy ? this.minZ : Wy, this._projectionMatrix, Uy.isNDCHalfZRange) : this.oblique ? cb.c.ObliqueOffCenterLHToRef(this.orthoLeft ?? -yb, this.orthoRight ?? yb, this.orthoBottom ?? -bb, this.orthoTop ?? bb, fy ? Wy : this.minZ, fy ? this.minZ : Wy, this.oblique.length, this.oblique.angle, this._computeObliqueDistance(this.oblique.offset), this._projectionMatrix, Uy.isNDCHalfZRange) : cb.c.OrthoOffCenterLHToRef(this.orthoLeft ?? -yb, this.orthoRight ?? yb, this.orthoBottom ?? -bb, this.orthoTop ?? bb, fy ? Wy : this.minZ, fy ? this.minZ : Wy, this._projectionMatrix, Uy.isNDCHalfZRange), this._cache.orthoLeft = this.orthoLeft, this._cache.orthoRight = this.orthoRight, this._cache.orthoBottom = this.orthoBottom, this._cache.orthoTop = this.orthoTop, this._cache.obliqueAngle = this.oblique?.angle, this._cache.obliqueLength = this.oblique?.length, this._cache.obliqueOffset = this.oblique?.offset, this._cache.renderWidth = Uy.getRenderWidth(), this._cache.renderHeight = Uy.getRenderHeight()
          }
          return this.onProjectionMatrixChangedObservable.notifyObservers(this), this._projectionMatrix
        }
        getTransformationMatrix() {
          return this._computedViewMatrix.multiplyToRef(this._projectionMatrix, this._transformMatrix), this._transformMatrix
        }
        _computeObliqueDistance(yb) {
          return (this.radius || (this.target ? cb.n.Distance(this.position, this.target) : this.position.length())) + yb
        }
        _updateFrustumPlanes() {
          this._refreshFrustumPlanes && (this.getTransformationMatrix(), this._frustumPlanes ? qb.d.GetPlanesToRef(this._transformMatrix, this._frustumPlanes) : this._frustumPlanes = qb.d.GetPlanes(this._transformMatrix), this._refreshFrustumPlanes = !1)
        }
        isInFrustum(yb) {
          let bb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._updateFrustumPlanes(), bb && this.rigCameras.length > 0) {
            let bb = !1;
            for (const Wy of this.rigCameras) Wy._updateFrustumPlanes(), bb = bb || yb.isInFrustum(Wy._frustumPlanes);
            return bb
          }
          return yb.isInFrustum(this._frustumPlanes)
        }
        isCompletelyInFrustum(yb) {
          return this._updateFrustumPlanes(), yb.isCompletelyInFrustum(this._frustumPlanes)
        }
        getForwardRay() {
          throw (0, Ky.g)("Ray")
        }
        getForwardRayToRef(yb) {
          throw (0, Ky.g)("Ray")
        }
        dispose(bb) {
          let Wy = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          for (this.onViewMatrixChangedObservable.clear(), this.onProjectionMatrixChangedObservable.clear(), this.onAfterCheckInputsObservable.clear(), this.onRestoreStateObservable.clear(), this.inputs && this.inputs.clear(), this.kWy().stopAnimation(this), this.kWy().removeCamera(this); this._rigCameras.length > 0;) {
            const yb = this._rigCameras.pop();
            yb && yb.dispose()
          }
          if (this._parentContainer) {
            const yb = this._parentContainer.cameras.indexOf(this);
            yb > -1 && this._parentContainer.cameras.splice(yb, 1), this._parentContainer = null
          }
          if (this._rigPostProcess) this._rigPostProcess.dispose(this), this._rigPostProcess = null, this._postProcesses.length = 0;
          else if (this.cameraRigMode !== yb.RIG_MODE_NONE) this._rigPostProcess = null, this._postProcesses.length = 0;
          else {
            let yb = this._postProcesses.length;
            for (; --yb >= 0;) {
              const bb = this._postProcesses[yb];
              bb && bb.dispose(this)
            }
          }
          let Uy = this.customRenderTargets.length;
          for (; --Uy >= 0;) this.customRenderTargets[Uy].dispose();
          this.customRenderTargets.length = 0, this._activeMeshes.dispose(), this.kWy().xh().releaseRenderPassId(this.renderPassId), super.dispose(bb, Wy)
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
        setCameraRigMode(bb, Wy) {
          if (this.cameraRigMode !== bb) {
            for (; this._rigCameras.length > 0;) {
              const yb = this._rigCameras.pop();
              yb && yb.dispose()
            }
            if (this.cameraRigMode = bb, this._cameraRigParams = {}, this._cameraRigParams.interaxialDistance = Wy.interaxialDistance || .0637, this._cameraRigParams.stereoHalfAngle = this._cameraRigParams.interaxialDistance / .0637 * (Math.PI / 180), this.cameraRigMode !== yb.RIG_MODE_NONE) {
              const yb = this.createRigCamera(this.name + "_L", 0);
              yb && (yb._isLeftCamera = !0);
              const bb = this.createRigCamera(this.name + "_R", 1);
              bb && (bb._isRightCamera = !0), yb && bb && (this._rigCameras.push(yb), this._rigCameras.push(bb))
            }
            this._setRigMode(Wy), this._cascadePostProcessesToRigCams(), this.update()
          }
        }
        _setRigMode(yb) {}
        _getVRProjectionMatrix() {
          return cb.c.PerspectiveFovLHToRef(this._cameraRigParams.vrMetrics.aspectRatioFov, this._cameraRigParams.vrMetrics.aspectRatio, this.minZ, this.ignoreCameraMaxZ ? 0 : this.maxZ, this._cameraRigParams.vrWorkMatrix, !0, this.xh().isNDCHalfZRange), this._cameraRigParams.vrWorkMatrix.multiplyToRef(this._cameraRigParams.vrHMatrix, this._projectionMatrix), this._projectionMatrix
        }
        setCameraRigParameter(yb, bb) {
          this._cameraRigParams || (this._cameraRigParams = {}), this._cameraRigParams[yb] = bb, "interaxialDistance" === yb && (this._cameraRigParams.stereoHalfAngle = bb / .0637 * (Math.PI / 180))
        }
        createRigCamera(yb, bb) {
          return null
        }
        _updateRigCameras() {
          for (let yb = 0; yb < this._rigCameras.length; yb++) this._rigCameras[yb].minZ = this.minZ, this._rigCameras[yb].maxZ = this.ignoreCameraMaxZ ? 0 : this.maxZ, this._rigCameras[yb].fov = this.fov, this._rigCameras[yb].upVector.Coy(this.upVector);
          this.cameraRigMode === yb.RIG_MODE_STEREOSCOPIC_ANAGLYPH && (this._rigCameras[0].viewport = this._rigCameras[1].viewport = this.viewport)
        }
        _setupInputs() {}
        serialize() {
          const yb = Sy.c.Serialize(this);
          return yb.uniqueId = this.uniqueId, yb.type = this.getClassName(), this.parent && this.parent._serializeAsParent(yb), this.inputs && this.inputs.serialize(yb), Sy.c.AppendSerializedAnimations(this, yb), yb.lZ = this.serializeAnimationRanges(), yb.isEnabled = this.isEnabled(), yb
        }
        clone(bb) {
          let Wy = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const Uy = Sy.c.Clone(yb.GetConstructorFromName(this.getClassName(), bb, this.kWy(), this.interaxialDistance, this.isStereoscopicSideBySide), this);
          return Uy.name = bb, Uy.parent = Wy, this.onClonedObservable.notifyObservers(Uy), Uy
        }
        ify(yb) {
          const bb = cb.n.Zero();
          return this.getDirectionToRef(yb, bb), bb
        }
        get absoluteRotation() {
          return this.getWorldMatrix().decompose(void 0, this._absoluteRotation), this._absoluteRotation
        }
        getDirectionToRef(yb, bb) {
          cb.n.TransformNormalToRef(yb, this.getWorldMatrix(), bb)
        }
        static GetConstructorFromName(bb, Wy, Uy) {
          let hy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
            fy = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
          const Zy = Py.b.Construct(bb, Wy, Uy, {
            interaxial_distance: hy,
            isStereoscopicSideBySide: fy
          });
          return Zy || (() => yb._CreateDefaultParsedCamera(Wy, Uy))
        }
        computeWorldMatrix() {
          return this.getWorldMatrix()
        }
        _calculateHandednessMultiplier() {
          let yb = this.kWy().useRightHandedSystem ? -1 : 1;
          return this.parent && this.parent._getWorldMatrixDeterminant() < 0 && (yb *= -1), yb
        }
      }, (() => {
        const fy = "function" === typeof Symbol && Symbol.metadata ? Object.create(Xy[Symbol.metadata] ?? null) : void 0;
        bb = [(0, hy.P)("position")], Wy = [(0, hy.P)("upVector")], By = [(0, hy.T)()], Ey = [(0, hy.T)()], ly = [(0, hy.T)()], mb = [(0, hy.T)()], Cy = [(0, hy.T)()], Ty = [(0, hy.T)()], Vy = [(0, hy.T)()], Jy = [(0, hy.T)()], gb = [(0, hy.T)()], Gy = [(0, hy.T)()], Oy = [(0, hy.T)()], Ry = [(0, hy.T)()], vb = [(0, hy.T)()], ib = [(0, hy.T)()], My = [(0, hy.T)()], Yy = [(0, hy.T)()], (0, Uy.j)(yb, null, By, {
          kind: "getter",
          name: "orthoLeft",
          static: !1,
          private: !1,
          access: {
            has: yb => "orthoLeft" in yb,
            get: yb => yb.orthoLeft
          },
          metadata: fy
        }, null, ny), (0, Uy.j)(yb, null, Ey, {
          kind: "getter",
          name: "orthoRight",
          static: !1,
          private: !1,
          access: {
            has: yb => "orthoRight" in yb,
            get: yb => yb.orthoRight
          },
          metadata: fy
        }, null, ny), (0, Uy.j)(yb, null, ly, {
          kind: "getter",
          name: "orthoBottom",
          static: !1,
          private: !1,
          access: {
            has: yb => "orthoBottom" in yb,
            get: yb => yb.orthoBottom
          },
          metadata: fy
        }, null, ny), (0, Uy.j)(yb, null, mb, {
          kind: "getter",
          name: "orthoTop",
          static: !1,
          private: !1,
          access: {
            has: yb => "orthoTop" in yb,
            get: yb => yb.orthoTop
          },
          metadata: fy
        }, null, ny), (0, Uy.j)(yb, null, gb, {
          kind: "getter",
          name: "inertia",
          static: !1,
          private: !1,
          access: {
            has: yb => "inertia" in yb,
            get: yb => yb.inertia
          },
          metadata: fy
        }, null, ny), (0, Uy.j)(yb, null, Gy, {
          kind: "getter",
          name: "mode",
          static: !1,
          private: !1,
          access: {
            has: yb => "mode" in yb,
            get: yb => yb.mode
          },
          metadata: fy
        }, null, ny), (0, Uy.j)(null, null, bb, {
          kind: "field",
          name: "_position",
          static: !1,
          private: !1,
          access: {
            has: yb => "_position" in yb,
            get: yb => yb._position,
            set: (yb, bb) => {
              yb._position = bb
            }
          },
          metadata: fy
        }, uy, rb), (0, Uy.j)(null, null, Wy, {
          kind: "field",
          name: "_upVector",
          static: !1,
          private: !1,
          access: {
            has: yb => "_upVector" in yb,
            get: yb => yb._upVector,
            set: (yb, bb) => {
              yb._upVector = bb
            }
          },
          metadata: fy
        }, Hy, ab), (0, Uy.j)(null, null, Cy, {
          kind: "field",
          name: "fov",
          static: !1,
          private: !1,
          access: {
            has: yb => "fov" in yb,
            get: yb => yb.fov,
            set: (yb, bb) => {
              yb.fov = bb
            }
          },
          metadata: fy
        }, Fy, py), (0, Uy.j)(null, null, Ty, {
          kind: "field",
          name: "projectionPlaneTilt",
          static: !1,
          private: !1,
          access: {
            has: yb => "projectionPlaneTilt" in yb,
            get: yb => yb.projectionPlaneTilt,
            set: (yb, bb) => {
              yb.projectionPlaneTilt = bb
            }
          },
          metadata: fy
        }, Ly, Qy), (0, Uy.j)(null, null, Vy, {
          kind: "field",
          name: "minZ",
          static: !1,
          private: !1,
          access: {
            has: yb => "minZ" in yb,
            get: yb => yb.minZ,
            set: (yb, bb) => {
              yb.minZ = bb
            }
          },
          metadata: fy
        }, jb, Dy), (0, Uy.j)(null, null, Jy, {
          kind: "field",
          name: "maxZ",
          static: !1,
          private: !1,
          access: {
            has: yb => "maxZ" in yb,
            get: yb => yb.maxZ,
            set: (yb, bb) => {
              yb.maxZ = bb
            }
          },
          metadata: fy
        }, tb, wy), (0, Uy.j)(null, null, Oy, {
          kind: "field",
          name: "layerMask",
          static: !1,
          private: !1,
          access: {
            has: yb => "layerMask" in yb,
            get: yb => yb.layerMask,
            set: (yb, bb) => {
              yb.layerMask = bb
            }
          },
          metadata: fy
        }, kb, Ny), (0, Uy.j)(null, null, Ry, {
          kind: "field",
          name: "fovMode",
          static: !1,
          private: !1,
          access: {
            has: yb => "fovMode" in yb,
            get: yb => yb.fovMode,
            set: (yb, bb) => {
              yb.fovMode = bb
            }
          },
          metadata: fy
        }, zb, Iy), (0, Uy.j)(null, null, vb, {
          kind: "field",
          name: "cameraRigMode",
          static: !1,
          private: !1,
          access: {
            has: yb => "cameraRigMode" in yb,
            get: yb => yb.cameraRigMode,
            set: (yb, bb) => {
              yb.cameraRigMode = bb
            }
          },
          metadata: fy
        }, xb, Ay), (0, Uy.j)(null, null, ib, {
          kind: "field",
          name: "interaxialDistance",
          static: !1,
          private: !1,
          access: {
            has: yb => "interaxialDistance" in yb,
            get: yb => yb.interaxialDistance,
            set: (yb, bb) => {
              yb.interaxialDistance = bb
            }
          },
          metadata: fy
        }, dy, yW), (0, Uy.j)(null, null, My, {
          kind: "field",
          name: "isStereoscopicSideBySide",
          static: !1,
          private: !1,
          access: {
            has: yb => "isStereoscopicSideBySide" in yb,
            get: yb => yb.isStereoscopicSideBySide,
            set: (yb, bb) => {
              yb.isStereoscopicSideBySide = bb
            }
          },
          metadata: fy
        }, bW, Wb), (0, Uy.j)(null, null, Yy, {
          kind: "field",
          name: "ignoreCameraMaxZ",
          static: !1,
          private: !1,
          access: {
            has: yb => "ignoreCameraMaxZ" in yb,
            get: yb => yb.ignoreCameraMaxZ,
            set: (yb, bb) => {
              yb.ignoreCameraMaxZ = bb
            }
          },
          metadata: fy
        }, Ub, hb), fy && Object.defineProperty(yb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: fy
        })
      })(), yb._CreateDefaultParsedCamera = (yb, bb) => {
        throw (0, Ky.g)("UniversalCamera")
      }, yb.PERSPECTIVE_CAMERA = 0, yb.ORTHOGRAPHIC_CAMERA = 1, yb.FOVMODE_VERTICAL_FIXED = 0, yb.FOVMODE_HORIZONTAL_FIXED = 1, yb.RIG_MODE_NONE = 0, yb.RIG_MODE_STEREOSCOPIC_ANAGLYPH = 10, yb.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL = 11, yb.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED = 12, yb.RIG_MODE_STEREOSCOPIC_OVERUNDER = 13, yb.RIG_MODE_STEREOSCOPIC_INTERLACED = 14, yb.RIG_MODE_VR = 20, yb.RIG_MODE_CUSTOM = 22, yb.ForceAttachControlToAlwaysPreventDefault = !1, yb
    })();

    function ly(yb, bb) {
      const Wy = yb.type,
        Uy = Ey.GetConstructorFromName(Wy, yb.name, bb, yb.interaxial_distance, yb.isStereoscopicSideBySide),
        hy = Sy.c.Parse(Uy, yb, bb);
      if (void 0 !== yb.parentId && (hy._waitingParentId = yb.parentId), void 0 !== yb.parentInstanceIndex && (hy._waitingParentInstanceIndex = yb.parentInstanceIndex), hy.inputs && (hy.inputs.parse(yb), hy._setupInputs()), yb.upVector && (hy.upVector = cb.n.FromArray(yb.upVector)), hy.setPosition && (hy.position.vcy(0, 0, 0), hy.setPosition(cb.n.FromArray(yb.position))), yb.target && hy.setTarget && hy.setTarget(cb.n.FromArray(yb.target)), yb.cameraRigMode) {
        const bb = yb.interaxial_distance ? {
          interaxialDistance: yb.interaxial_distance
        } : {};
        hy.setCameraRigMode(yb.cameraRigMode, bb)
      }
      if (yb.animations) {
        for (let bb = 0; bb < yb.animations.length; bb++) {
          const Wy = yb.animations[bb],
            Uy = (0, By.b)("BABYLON.Animation");
          Uy && hy.animations.push(Uy.Parse(Wy))
        }
        Py.b.ParseAnimationRanges(hy, yb, bb)
      }
      return yb.autoAnimate && bb.beginAnimation(hy, yb.autoAnimateFrom, yb.autoAnimateTo, yb.autoAnimateLoop, yb.autoAnimateSpeed || 1), void 0 !== yb.isEnabled && hy.dJ(yb.isEnabled), hy
    }
    let mb = !1;

    function Cy() {
      mb || (mb = !0, Ey.Parse = ly)
    }
  },
  38715: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => hy
    });
    var Uy = Wy(35861);
    class hy {
      constructor(yb, bb, Wy) {
        this._cameraPosition = bb, this._behavior = Wy, this.activeInput = !1, this.speed = 1, this.xhy = 1, this.panSpeed = 1, this.rotationXSpeed = 1, this.rotationYSpeed = 1, this._zoomSpeedMultiplier = 1, this._panSpeedMultiplier = 1, this.zoomInertia = .9, this.panInertia = .9, this.rotationInertia = .9, this.zoomAccumulatedPixels = 0, this.panAccumulatedPixels = new Uy.n, this.rotationAccumulatedPixels = new Uy.n, this.zoomDeltaCurrentFrame = 0, this.panDeltaCurrentFrame = Uy.n.Zero(), this.rotationDeltaCurrentFrame = Uy.n.Zero(), this._zoomVelocity = 0, this._panVelocity = new Uy.n, this.referenceFrameRate = 60, this._rotationVelocity = new Uy.n, this._prevFrameTimeMs = 0, this._scene = yb
      }
      computeCurrentFrameDeltas() {
        const yb = this._scene.xh().getDeltaTime(),
          bb = this._getEffectiveDeltaMs(yb);
        if (0 === this._zoomVelocity && 0 === this.zoomAccumulatedPixels && 0 === this._panVelocity.x && 0 === this._panVelocity.y && 0 === this._panVelocity.z && 0 === this.panAccumulatedPixels.x && 0 === this.panAccumulatedPixels.y && 0 === this.panAccumulatedPixels.z && 0 === this._rotationVelocity.x && 0 === this._rotationVelocity.y && 0 === this._rotationVelocity.z && 0 === this.rotationAccumulatedPixels.x && 0 === this.rotationAccumulatedPixels.y && 0 === this.rotationAccumulatedPixels.z && !this.activeInput) return this.panDeltaCurrentFrame.dfy(0), this.rotationDeltaCurrentFrame.dfy(0), this.zoomDeltaCurrentFrame = 0, void(yb > 0 && (this._prevFrameTimeMs = yb));
        this.panDeltaCurrentFrame.dfy(0), this.rotationDeltaCurrentFrame.dfy(0), this.zoomDeltaCurrentFrame = 0;
        (this.panAccumulatedPixels.lengthSquared() > 0 || this.rotationAccumulatedPixels.lengthSquared() > 0 || 0 !== this.zoomAccumulatedPixels) && this._behavior?.isInterpolating && this._behavior.stopAllAnimations(), this._panVelocity.vcy(this._calculateCurrentVelocity(this._panVelocity.x, this.panAccumulatedPixels.x, this.panInertia), this._calculateCurrentVelocity(this._panVelocity.y, this.panAccumulatedPixels.y, this.panInertia), this._calculateCurrentVelocity(this._panVelocity.z, this.panAccumulatedPixels.z, this.panInertia)), this._panVelocity.scaleToRef(this.speed * this.panSpeed * this._panSpeedMultiplier * bb, this.panDeltaCurrentFrame), this._rotationVelocity.vcy(this._calculateCurrentVelocity(this._rotationVelocity.x, this.rotationAccumulatedPixels.x, this.rotationInertia), this._calculateCurrentVelocity(this._rotationVelocity.y, this.rotationAccumulatedPixels.y, this.rotationInertia), this._calculateCurrentVelocity(this._rotationVelocity.z, this.rotationAccumulatedPixels.z, this.rotationInertia)), this.rotationDeltaCurrentFrame.vcy(this._rotationVelocity.x * this.speed * this.rotationXSpeed * bb, this._rotationVelocity.y * this.speed * this.rotationYSpeed * bb, 0), this._zoomVelocity = this._calculateCurrentVelocity(this._zoomVelocity, this.zoomAccumulatedPixels, this.zoomInertia), this.zoomDeltaCurrentFrame = this._zoomVelocity * (this.speed * this.xhy * this._zoomSpeedMultiplier) * bb, yb > 0 && (this._prevFrameTimeMs = yb), this.zoomAccumulatedPixels = 0, this.panAccumulatedPixels.dfy(0), this.rotationAccumulatedPixels.dfy(0), this.activeInput = !1
      }
      resetRotationVelocity() {
        this._rotationVelocity.dfy(0), this.rotationAccumulatedPixels.dfy(0)
      }
      resetPanVelocity() {
        this._panVelocity.dfy(0), this.panAccumulatedPixels.dfy(0)
      }
      resetZoomVelocity() {
        this._zoomVelocity = 0, this.zoomAccumulatedPixels = 0
      }
      get isInterpolating() {
        return !!this._behavior?.isInterpolating
      }
      getFrameIndependentDecay(yb) {
        const bb = this._scene.xh().getDeltaTime(),
          Wy = this._getEffectiveDeltaMs(bb),
          Uy = 1e3 / this.referenceFrameRate;
        return Math.pow(yb, Wy / Uy)
      }
      getFrameIndependentInputScale(yb) {
        const bb = 1 - yb;
        if (bb <= 0) return 1;
        return (1 - this.getFrameIndependentDecay(yb)) / bb
      }
      _getEffectiveDeltaMs(yb) {
        return yb > 0 ? yb : this._prevFrameTimeMs > 0 ? this._prevFrameTimeMs : 1e3 / this.referenceFrameRate
      }
      _calculateCurrentVelocity(yb, bb, Wy) {
        let Uy = yb;
        const hy = this._scene.xh().getDeltaTime(),
          fy = this._getEffectiveDeltaMs(hy);
        if (0 === fy) return Uy;
        const Zy = this.getFrameIndependentDecay(Wy);
        if (Uy *= Zy, 0 !== bb || this.activeInput) {
          const yb = 1 - Wy;
          Uy += bb / fy * (yb > 0 ? (1 - Zy) / yb : 1)
        } else Math.abs(Uy) < 1e-6 && (Uy = 0);
        return Uy
      }
    }
  },
  38721: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => Uy
    });
    class Uy {
      constructor(yb, bb) {
        this.inputMap = [], this.handlers = yb, this._createDefaultEntries = bb, this.resetInputMap()
      }
      resolveInteraction(yb, bb) {
        for (const Wy of this.inputMap)
          if (Wy.source === yb && this._entryMatches(Wy, bb)) return Wy;
        return null
      }
      resetInputMap() {
        this.inputMap = this._createDefaultEntries?.() ?? []
      }
      getEntry(yb, bb, Wy) {
        const Uy = this.inputMap;
        for (let hy = 0; hy < Uy.length; hy++) {
          const fy = Uy[hy];
          if (fy.source === yb && fy.interaction === bb && this._entryConditionsMatch(fy, Wy)) return fy
        }
      }
      getEntries(yb, bb, Wy) {
        const Uy = [],
          hy = this.inputMap;
        for (let fy = 0; fy < hy.length; fy++) {
          const Zy = hy[fy];
          Zy.source === yb && Zy.interaction === bb && this._entryConditionsMatch(Zy, Wy) && Uy.push(Zy)
        }
        return Uy
      }
      addEntry(yb) {
        const bb = this._entrySpecificity(yb);
        let Wy = this.inputMap.length;
        for (let Uy = 0; Uy < this.inputMap.length; Uy++)
          if (this._entrySpecificity(this.inputMap[Uy]) < bb) {
            Wy = Uy;
            break
          } this.inputMap.splice(Wy, 0, yb)
      }
      setInteraction(yb, bb, Wy) {
        const Uy = this.resolveInteraction(yb, bb);
        return Uy && this._entryCoversAllConditionsOf(Uy, bb) ? (Uy.interaction = Wy, !0) : (this.addEntry({
          source: yb,
          ...bb ?? {},
          interaction: Wy
        }), !0)
      }
      _entryCoversAllConditionsOf(yb, bb) {
        if (!bb) return !0;
        const Wy = yb;
        for (const Uy of Object.keys(bb)) {
          const yb = bb[Uy];
          if (void 0 !== yb)
            if ("modifiers" === Uy) {
              const bb = Wy.modifiers ?? {};
              for (const Wy of Object.keys(yb))
                if (void 0 !== yb[Wy] && void 0 === bb[Wy]) return !1
            } else if (void 0 === Wy[Uy]) return !1
        }
        return !0
      }
      setInteractions(yb, bb, Wy) {
        let Uy = 0;
        const hy = this.inputMap;
        for (let fy = 0; fy < hy.length; fy++) {
          const Zy = hy[fy];
          Zy.source === yb && this._entryMatches(Zy, bb) && (Zy.interaction = Wy, Uy++)
        }
        return Uy
      }
      _entryMatches(yb, bb) {
        switch (yb.source) {
          case "pointer":
            return (void 0 === yb.button || yb.button === bb?.button) && this._matchModifiers(yb.modifiers, bb?.modifiers);
          case "wheel":
            return this._matchModifiers(yb.modifiers, bb?.modifiers);
          case "touch":
            return void 0 === yb.touchCount || yb.touchCount === bb?.touchCount;
          case "keyboard":
            return (void 0 === yb.key || (Array.isArray(yb.key) ? -1 !== yb.key.indexOf(bb?.key ?? -1) : yb.key === bb?.key)) && this._matchModifiers(yb.modifiers, bb?.modifiers)
        }
      }
      _entryConditionsMatch(yb, bb) {
        if (!bb) return !0;
        switch (yb.source) {
          case "pointer":
            return (!("button" in bb) || yb.button === bb.button) && (!("modifiers" in bb) || this._entryModifiersMatch(yb.modifiers, bb.modifiers));
          case "wheel":
            return !("modifiers" in bb) || this._entryModifiersMatch(yb.modifiers, bb.modifiers);
          case "touch":
            return !("touchCount" in bb) || yb.touchCount === bb.touchCount;
          case "keyboard":
            if ("key" in bb) {
              if (void 0 === yb.key) return void 0 === bb.key;
              if (void 0 === bb.key || (Array.isArray(yb.key) ? -1 === yb.key.indexOf(bb.key) : yb.key !== bb.key)) return !1
            }
            return !("modifiers" in bb) || this._entryModifiersMatch(yb.modifiers, bb.modifiers)
        }
      }
      _entrySpecificity(yb) {
        let bb = 0;
        return "button" in yb && void 0 !== yb.button && bb++, "key" in yb && void 0 !== yb.key && bb++, "touchCount" in yb && void 0 !== yb.touchCount && bb++, "modifiers" in yb && yb.modifiers && bb++, bb
      }
      _matchModifiers(yb, bb) {
        return !yb || (void 0 === yb.ctrl || yb.ctrl === (bb?.ctrl ?? !1)) && ((void 0 === yb.shift || yb.shift === (bb?.shift ?? !1)) && (void 0 === yb.alt || yb.alt === (bb?.alt ?? !1)))
      }
      _entryModifiersMatch(yb, bb) {
        if (!bb) return !yb;
        return void 0 !== bb.ctrl || void 0 !== bb.shift || void 0 !== bb.alt ? (void 0 === bb.ctrl || yb?.ctrl === bb.ctrl) && ((void 0 === bb.shift || yb?.shift === bb.shift) && (void 0 === bb.alt || yb?.alt === bb.alt)) : !yb || void 0 === yb.ctrl && void 0 === yb.shift && void 0 === yb.alt
      }
    }
  },
  38688: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => ly,
      e: () => Sy
    });
    var Uy = Wy(38464),
      hy = Wy(38466),
      fy = Wy(38694),
      Zy = Wy(35861),
      cb = Wy(35864),
      Py = Wy(38706),
      oy = Wy(38697),
      By = Wy(38715),
      Ky = Wy(38721);
    class ey extends By.b {
      constructor(yb, bb, Wy) {
        super(yb, bb, Wy), this.input = new Ky.d({
          translate: (yb, bb, Wy) => {
            this.panAccumulatedPixels.x += yb, this.panAccumulatedPixels.y += bb, this.panAccumulatedPixels.z += Wy
          },
          rotate: (yb, bb) => {
            this.rotationAccumulatedPixels.x += yb, this.rotationAccumulatedPixels.y += bb
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
    const qb = Zy.c.Zero(),
      sy = Zy.e.Identity();
    let Sy = (() => {
        var yb;
        let bb, Wy, oy, By, Ky = fy.b,
          Sy = [],
          Ey = [],
          ly = [],
          mb = [],
          Cy = [],
          Ty = [],
          Vy = [],
          Jy = [];
        return yb = class extends Ky {
          get inertia() {
            return this._targetInertia
          }
          set inertia(yb) {
            this._targetInertia = yb, this.movement && (this.movement.panInertia = yb, this.movement.rotationInertia = yb)
          }
          constructor(yb, bb, Wy) {
            super(yb, bb, Wy, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]), this.cameraDirection = new Zy.n(0, 0, 0), this.cameraRotation = new Zy.m(0, 0), this._targetInertia = .9, this.updateUpVectorFromRotation = (0, Uy.l)(this, Sy, !1), this.rotation = ((0, Uy.l)(this, Ey), (0, Uy.l)(this, ly, void 0)), this.rotationQuaternion = (0, Uy.l)(this, mb), this.speed = (0, Uy.l)(this, Cy, 2), this.noRotationConstraint = ((0, Uy.l)(this, Ty), !1), this.invertRotation = !1, this.inverseRotationSpeed = .2, this._panningEpsilon = cb.e, this._rotationEpsilon = cb.e, this.lockedTarget = (0, Uy.l)(this, Vy, null), this._currentTarget = ((0, Uy.l)(this, Jy), Zy.n.Zero()), this._initialFocalDistance = 1, this._viewMatrix = Zy.c.Zero(), this._cameraTransformMatrix = Zy.c.Zero(), this._cameraRotationMatrix = Zy.c.Zero(), this._transformedReferencePoint = Zy.n.Zero(), this._deferredPositionUpdate = new Zy.n, this._deferredRotationQuaternionUpdate = new Zy.e, this._deferredRotationUpdate = new Zy.n, this._deferredUpdated = !1, this._deferOnly = !1, this._cachedRotationZ = 0, this._cachedQuaternionRotationZ = 0, this._referencePoint = Zy.n.Forward(this.kWy().useRightHandedSystem), this.rotation = new Zy.n(0, this.kWy().useRightHandedSystem ? Math.PI : 0, 0), this.movement = new ey(this.kWy(), this.position), this.movement.panInertia = this.inertia, this.movement.rotationInertia = this.inertia
          }
          getFrontPosition(yb) {
            this.getWorldMatrix();
            const bb = Zy.j.dU[0],
              Wy = Zy.j.dU[1];
            return Wy.set(0, 0, this._scene.useRightHandedSystem ? -1 : 1), this.getDirectionToRef(Wy, bb), bb.scaleInPlace(yb), this.globalPosition.add(bb)
          }
          _getLockedTargetPosition() {
            if (!this.lockedTarget) return null;
            if (this.lockedTarget.absolutePosition) {
              const yb = this.lockedTarget;
              yb.computeWorldMatrix().getTranslationToRef(yb.absolutePosition)
            }
            return this.lockedTarget.absolutePosition || this.lockedTarget
          }
          storeState() {
            return this._storedPosition = this.position.clone(), this._storedRotation = this.rotation.clone(), this.rotationQuaternion && (this._storedRotationQuaternion = this.rotationQuaternion.clone()), super.storeState()
          }
          _restoreStateValues() {
            return !!super._restoreStateValues() && (this.position = this._storedPosition.clone(), this.rotation = this._storedRotation.clone(), this.rotationQuaternion && this._storedRotationQuaternion && (this.rotationQuaternion = this._storedRotationQuaternion.clone()), this.cameraDirection.vcy(0, 0, 0), this.cameraRotation.vcy(0, 0), !0)
          }
          _initCache() {
            super._initCache(), this._cache.lockedTarget = new Zy.n(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.rotation = new Zy.n(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.rotationQuaternion = new Zy.e(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE)
          }
          _updateCache(yb) {
            yb || super._updateCache();
            const bb = this._getLockedTargetPosition();
            bb ? this._cache.lockedTarget ? this._cache.lockedTarget.Coy(bb) : this._cache.lockedTarget = bb.clone() : this._cache.lockedTarget = null, this._cache.rotation.Coy(this.rotation), this.rotationQuaternion && this._cache.rotationQuaternion.Coy(this.rotationQuaternion)
          }
          _isSynchronizedViewMatrix() {
            if (!super._isSynchronizedViewMatrix()) return !1;
            const yb = this._getLockedTargetPosition();
            return (this._cache.lockedTarget ? this._cache.lockedTarget.equals(yb) : !yb) && (this.rotationQuaternion ? this.rotationQuaternion.equals(this._cache.rotationQuaternion) : this._cache.rotation.equals(this.rotation))
          }
          _computeLocalCameraSpeed() {
            const yb = this.xh();
            return this.speed * Math.sqrt(yb.getDeltaTime() / (100 * yb.getFps()))
          }
          setTarget(yb) {
            this.upVector.normalize(), this._initialFocalDistance = yb.subtract(this.position).length(), this.position.z === yb.z && (this.position.z += cb.e), this._referencePoint.normalize().scaleInPlace(this._initialFocalDistance), this.kWy().useRightHandedSystem ? Zy.c.LookAtRHToRef(this.position, yb, Zy.n.UpReadOnly, qb) : Zy.c.LookAtLHToRef(this.position, yb, Zy.n.UpReadOnly, qb), qb.invert();
            const bb = this.rotationQuaternion || sy;
            Zy.e.FromRotationMatrixToRef(qb, bb), bb.toEulerAnglesToRef(this.rotation), this.rotation.z = 0
          }
          get target() {
            return this.getTarget()
          }
          set target(yb) {
            this.setTarget(yb)
          }
          getTarget() {
            return this._currentTarget
          }
          _decideIfNeedsToMove() {
            return Math.abs(this.cameraDirection.x) > 0 || Math.abs(this.cameraDirection.y) > 0 || Math.abs(this.cameraDirection.z) > 0
          }
          _updatePosition() {
            if (this.parent) return this.parent.getWorldMatrix().invertToRef(Zy.j.Matrix[0]), Zy.n.TransformNormalToRef(this.cameraDirection, Zy.j.Matrix[0], Zy.j.dU[0]), this._deferredPositionUpdate.addInPlace(Zy.j.dU[0]), void(this._deferOnly ? this._deferredUpdated = !0 : this.position.Coy(this._deferredPositionUpdate));
            this._deferredPositionUpdate.addInPlace(this.cameraDirection), this._deferOnly ? this._deferredUpdated = !0 : this.position.Coy(this._deferredPositionUpdate)
          }
          _checkInputs() {
            const yb = this.movement,
              bb = 0 !== this.cameraDirection.x || 0 !== this.cameraDirection.y || 0 !== this.cameraDirection.z;
            yb.panAccumulatedPixels.addInPlace(this.cameraDirection), yb.rotationAccumulatedPixels.x += this.cameraRotation.x, yb.rotationAccumulatedPixels.y += this.cameraRotation.y, yb.computeCurrentFrameDeltas(), this.cameraDirection.Coy(yb.panDeltaCurrentFrame), this.cameraRotation.set(yb.rotationDeltaCurrentFrame.x, yb.rotationDeltaCurrentFrame.y);
            const Wy = this.speed * this._panningEpsilon;
            !bb && Math.abs(this.cameraDirection.x) < Wy && Math.abs(this.cameraDirection.y) < Wy && Math.abs(this.cameraDirection.z) < Wy && (this.cameraDirection.dfy(0), yb.resetPanVelocity());
            const Uy = this.invertRotation ? -this.inverseRotationSpeed : 1,
              hy = this._decideIfNeedsToMove(),
              fy = !(!this.cameraRotation.x && !this.cameraRotation.y);
            if (this._deferredUpdated = !1, this._deferredRotationUpdate.Coy(this.rotation), this._deferredPositionUpdate.Coy(this.position), this.rotationQuaternion && this._deferredRotationQuaternionUpdate.Coy(this.rotationQuaternion), hy && this._updatePosition(), fy) {
              if (this.rotationQuaternion && this.rotationQuaternion.toEulerAnglesToRef(this._deferredRotationUpdate), this._deferredRotationUpdate.x += this.cameraRotation.x * Uy, this._deferredRotationUpdate.y += this.cameraRotation.y * Uy, !this.noRotationConstraint) {
                const yb = 1.570796;
                this._deferredRotationUpdate.x > yb && (this._deferredRotationUpdate.x = yb), this._deferredRotationUpdate.x < -yb && (this._deferredRotationUpdate.x = -yb)
              }
              if (this._deferOnly ? this._deferredUpdated = !0 : this.rotation.Coy(this._deferredRotationUpdate), this.rotationQuaternion) {
                this._deferredRotationUpdate.lengthSquared() && (Zy.e.RotationYawPitchRollToRef(this._deferredRotationUpdate.y, this._deferredRotationUpdate.x, this._deferredRotationUpdate.z, this._deferredRotationQuaternionUpdate), this._deferOnly ? this._deferredUpdated = !0 : this.rotationQuaternion.Coy(this._deferredRotationQuaternionUpdate))
              }
            }
            this.cameraDirection.dfy(0), this.cameraRotation.set(0, 0), super._checkInputs()
          }
          _updateCameraRotationMatrix() {
            this.rotationQuaternion ? this.rotationQuaternion.toRotationMatrix(this._cameraRotationMatrix) : Zy.c.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, this.rotation.z, this._cameraRotationMatrix)
          }
          _rotateUpVectorWithCameraRotationMatrix() {
            return Zy.n.TransformNormalToRef(Zy.n.UpReadOnly, this._cameraRotationMatrix, this.upVector), this
          }
          _getViewMatrix() {
            return this.lockedTarget && this.setTarget(this._getLockedTargetPosition()), this._updateCameraRotationMatrix(), this.rotationQuaternion && this._cachedQuaternionRotationZ != this.rotationQuaternion.z ? (this._rotateUpVectorWithCameraRotationMatrix(), this._cachedQuaternionRotationZ = this.rotationQuaternion.z) : this._cachedRotationZ !== this.rotation.z && (this._rotateUpVectorWithCameraRotationMatrix(), this._cachedRotationZ = this.rotation.z), Zy.n.TransformCoordinatesToRef(this._referencePoint, this._cameraRotationMatrix, this._transformedReferencePoint), this.position.addToRef(this._transformedReferencePoint, this._currentTarget), this.updateUpVectorFromRotation && (this.rotationQuaternion ? Py.d.Y.rotateByQuaternionToRef(this.rotationQuaternion, this.upVector) : (Zy.e.FromEulerVectorToRef(this.rotation, sy), Py.d.Y.rotateByQuaternionToRef(sy, this.upVector))), this._computeViewMatrix(this.position, this._currentTarget, this.upVector), this._viewMatrix
          }
          _computeViewMatrix(yb, bb, Wy) {
            if (this.kWy().useRightHandedSystem ? Zy.c.LookAtRHToRef(yb, bb, Wy, this._viewMatrix) : Zy.c.LookAtLHToRef(yb, bb, Wy, this._viewMatrix), this.parent) {
              const yb = this.parent.getWorldMatrix();
              this._viewMatrix.invert(), this._viewMatrix.multiplyToRef(yb, this._viewMatrix), this._viewMatrix.invert(), this._markSyncedWithParent()
            }
          }
          createRigCamera(bb, Wy) {
            if (this.cameraRigMode !== fy.b.RIG_MODE_NONE) {
              const Wy = new yb(bb, this.position.clone(), this.kWy());
              return Wy.isRigCamera = !0, Wy.rigParent = this, this.cameraRigMode === fy.b.RIG_MODE_VR && (this.rotationQuaternion || (this.rotationQuaternion = new Zy.e), Wy._cameraRigParams = {}, Wy.rotationQuaternion = new Zy.e), Wy.mode = this.mode, Wy.orthoLeft = this.orthoLeft, Wy.orthoRight = this.orthoRight, Wy.orthoTop = this.orthoTop, Wy.orthoBottom = this.orthoBottom, Wy
            }
            return null
          }
          _updateRigCameras() {
            const yb = this._rigCameras[0],
              bb = this._rigCameras[1];
            switch (this.computeWorldMatrix(), this.cameraRigMode) {
              case fy.b.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case fy.b.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case fy.b.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
              case fy.b.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case fy.b.RIG_MODE_STEREOSCOPIC_INTERLACED: {
                const Wy = this.cameraRigMode === fy.b.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED ? 1 : -1,
                  Uy = this.cameraRigMode === fy.b.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED ? -1 : 1;
                this._getRigCamPositionAndTarget(this._cameraRigParams.stereoHalfAngle * Wy, yb), this._getRigCamPositionAndTarget(this._cameraRigParams.stereoHalfAngle * Uy, bb);
                break
              }
              case fy.b.RIG_MODE_VR:
                yb.rotationQuaternion && bb.rotationQuaternion && this.rotationQuaternion ? (yb.rotationQuaternion.Coy(this.rotationQuaternion), bb.rotationQuaternion.Coy(this.rotationQuaternion)) : (yb.rotation.Coy(this.rotation), bb.rotation.Coy(this.rotation)), yb.position.Coy(this.position), bb.position.Coy(this.position)
            }
            super._updateRigCameras()
          }
          _getRigCamPositionAndTarget(bb, Wy) {
            this.getTarget().subtractToRef(this.position, yb._TargetFocalPoint), yb._TargetFocalPoint.normalize().scaleInPlace(this._initialFocalDistance);
            const Uy = yb._TargetFocalPoint.addInPlace(this.position);
            Zy.c.TranslationToRef(-Uy.x, -Uy.y, -Uy.z, yb._TargetTransformMatrix), yb._TargetTransformMatrix.multiplyToRef(Zy.c.RotationAxis(Wy.upVector, bb), yb._RigCamTransformMatrix), Zy.c.TranslationToRef(Uy.x, Uy.y, Uy.z, yb._TargetTransformMatrix), yb._RigCamTransformMatrix.multiplyToRef(yb._TargetTransformMatrix, yb._RigCamTransformMatrix), Zy.n.TransformCoordinatesToRef(this.position, yb._RigCamTransformMatrix, Wy.position), Wy.setTarget(Uy)
          }
          getClassName() {
            return "TargetCamera"
          }
        }, (() => {
          const fy = "function" === typeof Symbol && Symbol.metadata ? Object.create(Ky[Symbol.metadata] ?? null) : void 0;
          bb = [(0, hy.T)()], Wy = [(0, hy.P)()], oy = [(0, hy.T)()], By = [(0, hy.F)("lockedTargetId")], (0, Uy.j)(null, null, bb, {
            kind: "field",
            name: "updateUpVectorFromRotation",
            static: !1,
            private: !1,
            access: {
              has: yb => "updateUpVectorFromRotation" in yb,
              get: yb => yb.updateUpVectorFromRotation,
              set: (yb, bb) => {
                yb.updateUpVectorFromRotation = bb
              }
            },
            metadata: fy
          }, Sy, Ey), (0, Uy.j)(null, null, Wy, {
            kind: "field",
            name: "rotation",
            static: !1,
            private: !1,
            access: {
              has: yb => "rotation" in yb,
              get: yb => yb.rotation,
              set: (yb, bb) => {
                yb.rotation = bb
              }
            },
            metadata: fy
          }, ly, mb), (0, Uy.j)(null, null, oy, {
            kind: "field",
            name: "speed",
            static: !1,
            private: !1,
            access: {
              has: yb => "speed" in yb,
              get: yb => yb.speed,
              set: (yb, bb) => {
                yb.speed = bb
              }
            },
            metadata: fy
          }, Cy, Ty), (0, Uy.j)(null, null, By, {
            kind: "field",
            name: "lockedTarget",
            static: !1,
            private: !1,
            access: {
              has: yb => "lockedTarget" in yb,
              get: yb => yb.lockedTarget,
              set: (yb, bb) => {
                yb.lockedTarget = bb
              }
            },
            metadata: fy
          }, Vy, Jy), fy && Object.defineProperty(yb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: fy
          })
        })(), yb._RigCamTransformMatrix = new Zy.c, yb._TargetTransformMatrix = new Zy.c, yb._TargetFocalPoint = new Zy.n, yb
      })(),
      Ey = !1;

    function ly() {
      Ey || (Ey = !0, oy.b.AddNodeConstructor("TargetCamera", ((yb, bb) => () => new Sy(yb, Zy.n.Zero(), bb))))
    }
  },
  38429: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => fy
    });
    var Uy = Wy(38362);
    let hy = !1;

    function fy() {
      hy || (hy = !0, Uy.d.prototype.getInputElement = function() {
        return this._renderingCanvas
      }, Uy.d.prototype.getRenderingCanvasClientRect = function() {
        return this._renderingCanvas ? this._renderingCanvas.getBoundingClientRect() : null
      }, Uy.d.prototype.getInputElementClientRect = function() {
        return this._renderingCanvas ? this.getInputElement().getBoundingClientRect() : null
      }, Uy.d.prototype.getAspectRatio = function(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const Wy = yb.viewport;
        return this.getRenderWidth(bb) * Wy.width / (this.getRenderHeight(bb) * Wy.height)
      }, Uy.d.prototype.getScreenAspectRatio = function() {
        return this.getRenderWidth(!0) / this.getRenderHeight(!0)
      }, Uy.d.prototype._verifyPointerLock = function() {
        this._onPointerLockChange?.()
      })
    }
  },
  38506: (yb, bb, Wy) => {
    var Uy = Wy(38362),
      hy = Wy(38511);
    let fy = !1;
    fy || (fy = !0, (0, hy.D)(), Uy.d.prototype._loadFileAsync = async function(yb, bb, Wy) {
      return await new Promise(((Uy, hy) => {
        this._loadFile(yb, (yb => {
          Uy(yb)
        }), void 0, bb, Wy, ((yb, bb) => {
          hy(bb)
        }))
      }))
    })
  },
  38502: (yb, bb, Wy) => {
    (0, Wy(38432).b)()
  },
  38432: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => fy
    });
    var Uy = Wy(38362);
    let hy = !1;

    function fy() {
      hy || (hy = !0, Uy.d.prototype.getRenderPassNames = function() {
        return this._renderPassNames
      }, Uy.d.prototype.getCurrentRenderPassName = function() {
        return this._renderPassNames[this.currentRenderPassId]
      }, Uy.d.prototype.createRenderPassId = function(yb) {
        const bb = ++Uy.d._RenderPassIdCounter;
        return this._renderPassNames[bb] = yb ?? "NONAME", bb
      }, Uy.d.prototype.releaseRenderPassId = function(yb) {
        this._renderPassNames[yb] = void 0;
        for (let bb = 0; bb < this.scenes.length; ++bb) {
          const Wy = this.scenes[bb];
          for (let bb = 0; bb < Wy.meshes.length; ++bb) {
            const Uy = Wy.meshes[bb];
            if (Uy._releaseRenderPassId(yb), Uy.vJ)
              for (let bb = 0; bb < Uy.vJ.length; ++bb) {
                Uy.vJ[bb]._removeDrawWrapper(yb)
              }
          }
        }
        this._onReleaseRenderPassObservable?.notifyObservers(yb)
      })
    }
  },
  38555: (yb, bb, Wy) => {
    var Uy = Wy(38558),
      hy = Wy(38362);
    let fy = !1;
    fy || (fy = !0, hy.d.GetCompatibleTextureLoader = Uy.c)
  },
  38439: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => fy
    });
    var Uy = Wy(38305);
    let hy = !1;

    function fy() {
      hy || (hy = !0, Uy.ThinEngine.prototype.setAlphaMode = function(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this._alphaMode[Wy] === yb) {
          if (!bb) {
            const bb = 0 === yb;
            this.depthCullingState.depthMask !== bb && (this.depthCullingState.depthMask = bb)
          }
          return
        }
        const Uy = 0 === yb;
        this._alphaState.setAlphaBlend(!Uy, Wy), this._alphaState.setAlphaMode(yb, Wy), bb || (this.depthCullingState.depthMask = Uy), this._alphaMode[Wy] = yb
      })
    }
  },
  38447: (yb, bb, Wy) => {
    var Uy = Wy(38287),
      hy = Wy(37350),
      fy = Wy(38305),
      Zy = Wy(38451),
      cb = Wy(38414);
    class Py extends Zy.e {
      setDepthStencilTexture(yb) {
        let bb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (super.setDepthStencilTexture(yb, bb), !yb) return;
        const Wy = this._engine,
          Uy = this._context,
          hy = yb._hardwareTexture;
        if (hy && yb._autoMSAAManagement && this._MSAAFramebuffer) {
          const bb = Wy._currentFramebuffer;
          Wy._bindUnboundFramebuffer(this._MSAAFramebuffer), Uy.framebufferRenderbuffer(Uy.FRAMEBUFFER, (0, cb.c)(yb.format) ? Uy.DEPTH_STENCIL_ATTACHMENT : Uy.DEPTH_ATTACHMENT, Uy.RENDERBUFFER, hy.getMSAARenderBuffer()), Wy._bindUnboundFramebuffer(bb)
        }
      }
      constructor(yb, bb, Wy, Uy, hy) {
        super(yb, bb, Wy, Uy), this._framebuffer = null, this._depthStencilBuffer = null, this._MSAAFramebuffer = null, this._colorTextureArray = null, this._depthStencilTextureArray = null, this._disposeOnlyFramebuffers = !1, this._currentLOD = 0, this._context = hy
      }
      _cloneRenderTargetWrapper() {
        let yb;
        return this._colorTextureArray && this._depthStencilTextureArray ? (yb = this._engine.createMultiviewRenderTargetTexture(this.width, this.height), yb.texture.isReady = !0) : yb = super._cloneRenderTargetWrapper(), yb
      }
      _swapRenderTargetWrapper(yb) {
        super._swapRenderTargetWrapper(yb), yb._framebuffer = this._framebuffer, yb._depthStencilBuffer = this._depthStencilBuffer, yb._MSAAFramebuffer = this._MSAAFramebuffer, yb._colorTextureArray = this._colorTextureArray, yb._depthStencilTextureArray = this._depthStencilTextureArray, this._framebuffer = this._depthStencilBuffer = this._MSAAFramebuffer = this._colorTextureArray = this._depthStencilTextureArray = null
      }
      createDepthStencilTexture() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          bb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          Wy = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Uy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          hy = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          fy = arguments.length > 5 ? arguments[5] : void 0;
        if (this._depthStencilBuffer) {
          const yb = this._engine,
            bb = yb._currentFramebuffer,
            Wy = this._context;
          yb._bindUnboundFramebuffer(this._framebuffer), Wy.framebufferRenderbuffer(Wy.FRAMEBUFFER, Wy.DEPTH_STENCIL_ATTACHMENT, Wy.RENDERBUFFER, null), Wy.framebufferRenderbuffer(Wy.FRAMEBUFFER, Wy.DEPTH_ATTACHMENT, Wy.RENDERBUFFER, null), Wy.framebufferRenderbuffer(Wy.FRAMEBUFFER, Wy.STENCIL_ATTACHMENT, Wy.RENDERBUFFER, null), yb._bindUnboundFramebuffer(bb), Wy.deleteRenderbuffer(this._depthStencilBuffer), this._depthStencilBuffer = null
        }
        return super.createDepthStencilTexture(yb, bb, Wy, Uy, hy, fy)
      }
      shareDepth(yb) {
        super.shareDepth(yb);
        const bb = this._context,
          Wy = this._depthStencilBuffer,
          Uy = yb._MSAAFramebuffer || yb._framebuffer,
          hy = this._engine;
        yb._depthStencilBuffer && yb._depthStencilBuffer !== Wy && bb.deleteRenderbuffer(yb._depthStencilBuffer), yb._depthStencilBuffer = Wy;
        const fy = yb._generateStencilBuffer ? bb.DEPTH_STENCIL_ATTACHMENT : bb.DEPTH_ATTACHMENT;
        hy._bindUnboundFramebuffer(Uy), bb.framebufferRenderbuffer(bb.FRAMEBUFFER, fy, bb.RENDERBUFFER, Wy), hy._bindUnboundFramebuffer(null)
      }
      _bindTextureRenderTarget(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Wy = arguments.length > 2 ? arguments[2] : void 0,
          Uy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const hy = yb._hardwareTexture;
        if (!hy) return;
        const fy = this._framebuffer,
          Zy = this._engine,
          cb = Zy._currentFramebuffer;
        let Py;
        if (Zy._bindUnboundFramebuffer(fy), Zy.vf > 1) {
          const fy = this._context;
          Py = fy["COLOR_ATTACHMENT" + bb], yb.is2DArray || yb.is3D ? (Wy = Wy ?? this.layerIndices?.[bb] ?? 0, fy.framebufferTextureLayer(fy.FRAMEBUFFER, Py, hy.underlyingResource, Uy, Wy)) : yb.isCube ? (Wy = Wy ?? this.faceIndices?.[bb] ?? 0, fy.framebufferTexture2D(fy.FRAMEBUFFER, Py, fy.TEXTURE_CUBE_MAP_POSITIVE_X + Wy, hy.underlyingResource, Uy)) : fy.framebufferTexture2D(fy.FRAMEBUFFER, Py, fy.TEXTURE_2D, hy.underlyingResource, Uy)
        } else {
          const yb = this._context;
          Py = yb["COLOR_ATTACHMENT" + bb + "_WEBGL"];
          const fy = void 0 !== Wy ? yb.TEXTURE_CUBE_MAP_POSITIVE_X + Wy : yb.TEXTURE_2D;
          yb.framebufferTexture2D(yb.FRAMEBUFFER, Py, fy, hy.underlyingResource, Uy)
        }
        if (yb._autoMSAAManagement && this._MSAAFramebuffer) {
          const yb = this._context;
          Zy._bindUnboundFramebuffer(this._MSAAFramebuffer), yb.framebufferRenderbuffer(yb.FRAMEBUFFER, Py, yb.RENDERBUFFER, hy.getMSAARenderBuffer())
        }
        Zy._bindUnboundFramebuffer(cb)
      }
      setTexture(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Wy = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        super.setTexture(yb, bb, Wy), this._bindTextureRenderTarget(yb, bb)
      }
      setLayerAndFaceIndices(yb, bb) {
        if (super.setLayerAndFaceIndices(yb, bb), !this.textures || !this.layerIndices || !this.faceIndices) return;
        const Wy = this._attachments?.length ?? this.textures.length;
        for (let Uy = 0; Uy < Wy; Uy++) {
          const yb = this.textures[Uy];
          yb && (yb.is2DArray || yb.is3D ? this._bindTextureRenderTarget(yb, Uy, this.layerIndices[Uy]) : yb.isCube ? this._bindTextureRenderTarget(yb, Uy, this.faceIndices[Uy]) : this._bindTextureRenderTarget(yb, Uy))
        }
      }
      setLayerAndFaceIndex() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          bb = arguments.length > 1 ? arguments[1] : void 0,
          Wy = arguments.length > 2 ? arguments[2] : void 0;
        if (super.setLayerAndFaceIndex(yb, bb, Wy), !this.textures || !this.layerIndices || !this.faceIndices) return;
        const Uy = this.textures[yb];
        Uy.is2DArray || Uy.is3D ? this._bindTextureRenderTarget(this.textures[yb], yb, this.layerIndices[yb]) : Uy.isCube && this._bindTextureRenderTarget(this.textures[yb], yb, this.faceIndices[yb])
      }
      resolveMSAATextures() {
        const yb = this._engine,
          bb = yb._currentFramebuffer;
        yb._bindUnboundFramebuffer(this._MSAAFramebuffer), super.resolveMSAATextures(), yb._bindUnboundFramebuffer(bb)
      }
      dispose() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._disposeOnlyFramebuffers;
        const bb = this._context;
        yb || (this._colorTextureArray && (this._context.deleteTexture(this._colorTextureArray), this._colorTextureArray = null), this._depthStencilTextureArray && (this._context.deleteTexture(this._depthStencilTextureArray), this._depthStencilTextureArray = null)), this._framebuffer && (bb.deleteFramebuffer(this._framebuffer), this._framebuffer = null), this._depthStencilBuffer && (bb.deleteRenderbuffer(this._depthStencilBuffer), this._depthStencilBuffer = null), this._MSAAFramebuffer && (bb.deleteFramebuffer(this._MSAAFramebuffer), this._MSAAFramebuffer = null), super.dispose(yb)
      }
    }
    let oy = !1;
    oy || (oy = !0, fy.ThinEngine.prototype._createHardwareRenderTargetWrapper = function(yb, bb, Wy) {
      const Uy = new Py(yb, bb, Wy, this, this._gl);
      return this._renderTargetWrapperCache.push(Uy), Uy
    }, fy.ThinEngine.prototype.createRenderTargetTexture = function(yb, bb) {
      const Wy = this._createHardwareRenderTargetWrapper(!1, !1, yb);
      let Uy, hy, fy = !0,
        Zy = !1,
        cb = !1,
        Py = 1;
      void 0 !== bb && "object" === typeof bb && (fy = bb.generateDepthBuffer ?? !0, Zy = !!bb.generateStencilBuffer, cb = !!bb.noColorAttachment, Uy = bb.colorAttachment, Py = bb.samples ?? 1, hy = bb.label);
      const oy = Uy || (cb ? null : this._createInternalTexture(yb, bb, !0, 5)),
        By = yb.width || yb,
        Ky = yb.height || yb,
        ey = this._currentFramebuffer,
        qb = this._gl,
        sy = qb.createFramebuffer();
      if (this._bindUnboundFramebuffer(sy), Wy._depthStencilBuffer = this._setupFramebufferDepthAttachments(Zy, fy, By, Ky), !oy || oy.is2DArray || oy.is3D || qb.framebufferTexture2D(qb.FRAMEBUFFER, qb.COLOR_ATTACHMENT0, qb.TEXTURE_2D, oy._hardwareTexture.underlyingResource, 0), this._bindUnboundFramebuffer(ey), Wy.label = hy ?? "RenderTargetWrapper", Wy._framebuffer = sy, Wy._generateDepthBuffer = fy, Wy._generateStencilBuffer = Zy, Wy.setTextures(oy), Uy) {
        if (Wy._samples = Uy.samples, Uy.samples > 1) {
          const yb = Uy._hardwareTexture.getMSAARenderBuffer(0);
          Wy._MSAAFramebuffer = qb.createFramebuffer(), this._bindUnboundFramebuffer(Wy._MSAAFramebuffer), qb.framebufferRenderbuffer(qb.FRAMEBUFFER, qb.COLOR_ATTACHMENT0, qb.RENDERBUFFER, yb), this._bindUnboundFramebuffer(null)
        }
      } else this.updateRenderTargetTextureSampleCount(Wy, Py);
      return Wy
    }, fy.ThinEngine.prototype._createDepthStencilTexture = function(yb, bb, Wy) {
      const fy = this._gl,
        Zy = yb.layers || 0,
        Py = yb.depth || 0;
      let oy = fy.TEXTURE_2D;
      0 !== Zy ? oy = fy.TEXTURE_2D_ARRAY : 0 !== Py && (oy = fy.TEXTURE_3D);
      const By = new Uy.d(this, 12);
      if (By.label = bb.label, !this._caps.depthTextureExtension) return hy.b.Error("Depth texture is not supported by your browser or hardware."), By;
      const Ky = {
        bilinearFiltering: !1,
        comparisonFunction: 0,
        generateStencil: !1,
        ...bb
      };
      if (this._bindTextureDirectly(oy, By, !0), this._setupDepthStencilTexture(By, yb, 0 !== Ky.comparisonFunction && Ky.bilinearFiltering, Ky.comparisonFunction, Ky.samples), void 0 !== Ky.depthTextureFormat) {
        if (15 !== Ky.depthTextureFormat && 16 !== Ky.depthTextureFormat && 17 !== Ky.depthTextureFormat && 13 !== Ky.depthTextureFormat && 14 !== Ky.depthTextureFormat && 18 !== Ky.depthTextureFormat) return hy.b.Error(`Depth texture ${Ky.depthTextureFormat} format is not supported.`), By;
        By.format = Ky.depthTextureFormat
      } else By.format = Ky.generateStencil ? 13 : 16;
      const ey = (0, cb.c)(By.format),
        qb = this._getWebGLTextureTypeFromDepthTextureFormat(By.format),
        sy = ey ? fy.DEPTH_STENCIL : fy.DEPTH_COMPONENT,
        Sy = this._getInternalFormatFromDepthTextureFormat(By.format, !0, ey);
      return By.is2DArray ? fy.texImage3D(oy, 0, Sy, By.width, By.height, Zy, 0, sy, qb, null) : By.is3D ? fy.texImage3D(oy, 0, Sy, By.width, By.height, Py, 0, sy, qb, null) : fy.texImage2D(oy, 0, Sy, By.width, By.height, 0, sy, qb, null), this._bindTextureDirectly(oy, null), this._internalTexturesCache.push(By), Wy._depthStencilBuffer && (fy.deleteRenderbuffer(Wy._depthStencilBuffer), Wy._depthStencilBuffer = null), this._bindUnboundFramebuffer(Wy._MSAAFramebuffer ?? Wy._framebuffer), Wy._generateStencilBuffer = ey, Wy._depthStencilTextureWithStencil = ey, Wy._depthStencilBuffer = this._setupFramebufferDepthAttachments(Wy._generateStencilBuffer, Wy._generateDepthBuffer, Wy.width, Wy.height, Wy.samples, By.format), this._bindUnboundFramebuffer(null), By
    }, fy.ThinEngine.prototype.updateRenderTargetTextureSampleCount = function(yb, bb) {
      if (this.vf < 2 || !yb) return 1;
      if (yb.samples === bb) return bb;
      const Wy = this._gl;
      bb = Math.min(bb, this.getCaps().maxMSAASamples), yb._depthStencilBuffer && (Wy.deleteRenderbuffer(yb._depthStencilBuffer), yb._depthStencilBuffer = null), yb._MSAAFramebuffer && (Wy.deleteFramebuffer(yb._MSAAFramebuffer), yb._MSAAFramebuffer = null);
      const Uy = yb.texture?._hardwareTexture;
      if (Uy?.releaseMSAARenderBuffers(), yb.texture && bb > 1 && "function" === typeof Wy.renderbufferStorageMultisample) {
        const hy = Wy.createFramebuffer();
        if (!hy) throw new Error("Unable to create multi sampled framebuffer");
        yb._MSAAFramebuffer = hy, this._bindUnboundFramebuffer(yb._MSAAFramebuffer);
        const fy = this._createRenderBuffer(yb.texture.width, yb.texture.height, bb, -1, this._getRGBABufferInternalSizedFormat(yb.texture.type, yb.texture.format, yb.texture._useSRGBBuffer), Wy.COLOR_ATTACHMENT0, !1);
        if (!fy) throw new Error("Unable to create multi sampled framebuffer");
        Uy?.addMSAARenderBuffer(fy)
      }
      this._bindUnboundFramebuffer(yb._MSAAFramebuffer ?? yb._framebuffer), yb.texture && (yb.texture.samples = bb), yb._samples = bb;
      const hy = yb._depthStencilTexture ? yb._depthStencilTexture.format : void 0;
      return yb._depthStencilBuffer = this._setupFramebufferDepthAttachments(yb._generateStencilBuffer, yb._generateDepthBuffer, yb.width, yb.height, bb, hy), this._bindUnboundFramebuffer(null), bb
    }, fy.ThinEngine.prototype._setupDepthStencilTexture = function(yb, bb, Wy, Uy) {
      let hy = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1;
      const fy = bb.width ?? bb,
        Zy = bb.height ?? bb,
        cb = bb.layers || 0,
        Py = bb.depth || 0;
      yb.baseWidth = fy, yb.baseHeight = Zy, yb.width = fy, yb.height = Zy, yb.is2DArray = cb > 0, yb.depth = cb || Py, yb.isReady = !0, yb.samples = hy, yb.generateMipMaps = !1, yb.samplingMode = Wy ? 2 : 1, yb.type = 0, yb._comparisonFunction = Uy;
      const oy = this._gl,
        By = this._getTextureTarget(yb),
        Ky = this._getSamplingParameters(yb.samplingMode, !1);
      oy.texParameteri(By, oy.TEXTURE_MAG_FILTER, Ky.mag), oy.texParameteri(By, oy.TEXTURE_MIN_FILTER, Ky.min), oy.texParameteri(By, oy.TEXTURE_WRAP_S, oy.CLAMP_TO_EDGE), oy.texParameteri(By, oy.TEXTURE_WRAP_T, oy.CLAMP_TO_EDGE), this.vf > 1 && (0 === Uy ? (oy.texParameteri(By, oy.TEXTURE_COMPARE_FUNC, 515), oy.texParameteri(By, oy.TEXTURE_COMPARE_MODE, oy.NONE)) : (oy.texParameteri(By, oy.TEXTURE_COMPARE_FUNC, Uy), oy.texParameteri(By, oy.TEXTURE_COMPARE_MODE, oy.COMPARE_REF_TO_TEXTURE)))
    })
  },
  38272: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => Uy.b
    });
    var Uy = Wy(38281);
    (0, Wy(38439).e)();
    var hy = Wy(38305);
    let fy = !1;
    ! function() {
      if (fy) return;
      fy = !0;
      const yb = new WeakMap,
        bb = new WeakMap,
        Wy = new WeakMap,
        Uy = new WeakMap;
      hy.ThinEngine.prototype.getAlphaToCoverage = function() {
        return yb.get(this) ?? !1
      }, hy.ThinEngine.prototype.setAlphaToCoverage = function(Wy) {
        (yb.get(this) !== Wy || this._gl && bb.get(this) !== this._gl) && (yb.set(this, Wy), this._gl && (Wy ? this._gl.enable(this._gl.SAMPLE_ALPHA_TO_COVERAGE) : this._gl.disable(this._gl.SAMPLE_ALPHA_TO_COVERAGE), bb.set(this, this._gl)))
      }, Object.defineProperty(hy.ThinEngine.prototype, "currentSampleCount", {
        get: function() {
          return this._currentRenderTarget ? this._currentRenderTarget.samples : this._gl ? (Uy.get(this) !== this._gl && (Wy.set(this, this._gl.getContextAttributes()?.antialias ? Math.max(1, this._gl.getParameter(this._gl.SAMPLES)) : 1), Uy.set(this, this._gl)), Wy.get(this)) : 1
        },
        enumerable: !1,
        configurable: !0
      })
    }();
    var Zy = Wy(38287),
      cb = Wy(37350),
      Py = Wy(38405);
    let oy = !1;
    ! function() {
      function yb(yb, bb, Wy, Uy) {
        let hy, fy = 1;
        1 === Uy ? hy = new Float32Array(bb * Wy * 4) : 2 === Uy ? (hy = new Uint16Array(bb * Wy * 4), fy = 15360) : hy = 7 === Uy ? new Uint32Array(bb * Wy * 4) : new Uint8Array(bb * Wy * 4);
        for (let Zy = 0; Zy < bb; Zy++)
          for (let Uy = 0; Uy < Wy; Uy++) {
            const Wy = 3 * (Uy * bb + Zy),
              cb = 4 * (Uy * bb + Zy);
            hy[cb + 0] = yb[Wy + 0], hy[cb + 1] = yb[Wy + 1], hy[cb + 2] = yb[Wy + 2], hy[cb + 3] = fy
          }
        return hy
      }

      function bb(yb) {
        return function(bb, Wy, Uy, hy, fy, cb, Py, oy) {
          let By = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
            Ky = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
          const ey = yb ? this._gl.TEXTURE_3D : this._gl.TEXTURE_2D_ARRAY,
            qb = yb ? 10 : 11,
            sy = new Zy.d(this, qb);
          sy.baseWidth = Wy, sy.baseHeight = Uy, sy.baseDepth = hy, sy.width = Wy, sy.height = Uy, sy.depth = hy, sy.format = fy, sy.type = Ky, sy.generateMipMaps = cb, sy.samplingMode = oy, yb ? sy.is3D = !0 : sy.is2DArray = !0, this._doNotHandleContextLost || (sy._bufferView = bb), yb ? this.updateRawTexture3D(sy, bb, fy, Py, By, Ky) : this.updateRawTexture2DArray(sy, bb, fy, Py, By, Ky), this._bindTextureDirectly(ey, sy, !0);
          const Sy = this._getSamplingParameters(oy, cb);
          return this._gl.texParameteri(ey, this._gl.TEXTURE_MAG_FILTER, Sy.mag), this._gl.texParameteri(ey, this._gl.TEXTURE_MIN_FILTER, Sy.min), cb && this._gl.generateMipmap(ey), this._bindTextureDirectly(ey, null), this._internalTexturesCache.push(sy), sy
        }
      }

      function Wy(yb) {
        return function(bb, Wy, Uy, hy) {
          let fy = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            Zy = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
          const cb = yb ? this._gl.TEXTURE_3D : this._gl.TEXTURE_2D_ARRAY,
            Py = this._getWebGLTextureType(Zy),
            oy = this._getInternalFormat(Uy),
            By = this._getRGBABufferInternalSizedFormat(Zy, Uy);
          this._bindTextureDirectly(cb, bb, !0), this._unpackFlipY(void 0 === hy || !!hy), this._doNotHandleContextLost || (bb._bufferView = Wy, bb.format = Uy, bb.invertY = hy, bb._compression = fy), bb.width % 4 !== 0 && this._gl.pixelStorei(this._gl.UNPACK_ALIGNMENT, 1), fy && Wy ? this._gl.compressedTexImage3D(cb, 0, this.getCaps().s3tc[fy], bb.width, bb.height, bb.depth, 0, Wy) : this._gl.texImage3D(cb, 0, By, bb.width, bb.height, bb.depth, 0, oy, Py, Wy), bb.generateMipMaps && this._gl.generateMipmap(cb), this._bindTextureDirectly(cb, null), bb.isReady = !0
        }
      }
      oy || (oy = !0, hy.ThinEngine.prototype.updateRawTexture = function(yb, bb, Wy, Uy) {
        let hy = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          fy = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          Zy = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        if (!yb) return;
        const cb = this._getRGBABufferInternalSizedFormat(fy, Wy, Zy),
          Py = this._getInternalFormat(Wy),
          oy = this._getWebGLTextureType(fy);
        this._bindTextureDirectly(this._gl.TEXTURE_2D, yb, !0), this._unpackFlipY(void 0 === Uy || !!Uy), this._doNotHandleContextLost || (yb._bufferView = bb, yb.format = Wy, yb.type = fy, yb.invertY = Uy, yb._compression = hy), yb.width % 4 !== 0 && this._gl.pixelStorei(this._gl.UNPACK_ALIGNMENT, 1), hy && bb ? this._gl.compressedTexImage2D(this._gl.TEXTURE_2D, 0, this.getCaps().s3tc[hy], yb.width, yb.height, 0, bb) : this._gl.texImage2D(this._gl.TEXTURE_2D, 0, cb, yb.width, yb.height, 0, Py, oy, bb), yb.generateMipMaps && this._gl.generateMipmap(this._gl.TEXTURE_2D), this._bindTextureDirectly(this._gl.TEXTURE_2D, null), yb.isReady = !0
      }, hy.ThinEngine.prototype.createRawTexture = function(yb, bb, Wy, Uy, hy, fy, cb) {
        let Py = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          oy = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
          By = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const Ky = new Zy.d(this, 3);
        Ky.baseWidth = bb, Ky.baseHeight = Wy, Ky.width = bb, Ky.height = Wy, Ky.format = Uy, Ky.generateMipMaps = hy, Ky.samplingMode = cb, Ky.invertY = fy, Ky._compression = Py, Ky.type = oy, Ky._useSRGBBuffer = this._getUseSRGBBuffer(By, !hy), this._doNotHandleContextLost || (Ky._bufferView = yb), this.updateRawTexture(Ky, yb, Uy, fy, Py, oy, Ky._useSRGBBuffer), this._bindTextureDirectly(this._gl.TEXTURE_2D, Ky, !0);
        const ey = this._getSamplingParameters(cb, hy);
        return this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MAG_FILTER, ey.mag), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MIN_FILTER, ey.min), hy && this._gl.generateMipmap(this._gl.TEXTURE_2D), this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._internalTexturesCache.push(Ky), Ky
      }, hy.ThinEngine.prototype.createRawCubeTexture = function(yb, bb, Wy, Uy, hy, fy, oy) {
        let By = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null;
        const Ky = this._gl,
          ey = new Zy.d(this, 8);
        ey.isCube = !0, ey.format = Wy, ey.type = Uy, this._doNotHandleContextLost || (ey._bufferViewArray = yb);
        const qb = this._getWebGLTextureType(Uy);
        let sy = this._getInternalFormat(Wy);
        sy === Ky.RGB && (sy = Ky.RGBA), qb !== Ky.FLOAT || this._caps.textureFloatLinearFiltering ? qb !== this._gl.HALF_FLOAT_OES || this._caps.textureHalfFloatLinearFiltering ? qb !== Ky.FLOAT || this._caps.textureFloatRender ? qb !== Ky.HALF_FLOAT || this._caps.colorBufferFloat || (hy = !1, cb.b.Warn("Render to half float textures is not supported. Mipmap generation forced to false.")) : (hy = !1, cb.b.Warn("Render to float textures is not supported. Mipmap generation forced to false.")) : (hy = !1, oy = 1, cb.b.Warn("Half float texture filtering is not supported. Mipmap generation and sampling mode are forced to false and TEXTURE_NEAREST_SAMPLINGMODE, respectively.")) : (hy = !1, oy = 1, cb.b.Warn("Float texture filtering is not supported. Mipmap generation and sampling mode are forced to false and TEXTURE_NEAREST_SAMPLINGMODE, respectively."));
        const Sy = bb,
          Ey = Sy;
        ey.width = Sy, ey.height = Ey, ey.invertY = fy, ey._compression = By;
        if (!this.needPOTTextures || (0, Py.g)(ey.width) && (0, Py.g)(ey.height) || (hy = !1), yb) this.updateRawCubeTexture(ey, yb, Wy, Uy, fy, By);
        else {
          const yb = this._getRGBABufferInternalSizedFormat(Uy),
            bb = 0;
          this._bindTextureDirectly(Ky.TEXTURE_CUBE_MAP, ey, !0);
          for (let Wy = 0; Wy < 6; Wy++) By ? Ky.compressedTexImage2D(Ky.TEXTURE_CUBE_MAP_POSITIVE_X + Wy, bb, this.getCaps().s3tc[By], ey.width, ey.height, 0, void 0) : Ky.texImage2D(Ky.TEXTURE_CUBE_MAP_POSITIVE_X + Wy, bb, yb, ey.width, ey.height, 0, sy, qb, null);
          this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null)
        }
        this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, ey, !0), yb && hy && this._gl.generateMipmap(this._gl.TEXTURE_CUBE_MAP);
        const ly = this._getSamplingParameters(oy, hy);
        return Ky.texParameteri(Ky.TEXTURE_CUBE_MAP, Ky.TEXTURE_MAG_FILTER, ly.mag), Ky.texParameteri(Ky.TEXTURE_CUBE_MAP, Ky.TEXTURE_MIN_FILTER, ly.min), Ky.texParameteri(Ky.TEXTURE_CUBE_MAP, Ky.TEXTURE_WRAP_S, Ky.CLAMP_TO_EDGE), Ky.texParameteri(Ky.TEXTURE_CUBE_MAP, Ky.TEXTURE_WRAP_T, Ky.CLAMP_TO_EDGE), this._bindTextureDirectly(Ky.TEXTURE_CUBE_MAP, null), ey.generateMipMaps = hy, ey.samplingMode = oy, ey.isReady = !0, ey
      }, hy.ThinEngine.prototype.updateRawCubeTexture = function(bb, Wy, Uy, hy, fy) {
        let Zy = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          cb = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        bb._bufferViewArray = Wy, bb.format = Uy, bb.type = hy, bb.invertY = fy, bb._compression = Zy;
        const oy = this._gl,
          By = this._getWebGLTextureType(hy);
        let Ky = this._getInternalFormat(Uy);
        const ey = this._getRGBABufferInternalSizedFormat(hy);
        let qb = !1;
        Ky === oy.RGB && (Ky = oy.RGBA, qb = !0), this._bindTextureDirectly(oy.TEXTURE_CUBE_MAP, bb, !0), this._unpackFlipY(void 0 === fy || !!fy), bb.width % 4 !== 0 && oy.pixelStorei(oy.UNPACK_ALIGNMENT, 1);
        for (let Py = 0; Py < 6; Py++) {
          let Uy = Wy[Py];
          Zy ? oy.compressedTexImage2D(oy.TEXTURE_CUBE_MAP_POSITIVE_X + Py, cb, this.getCaps().s3tc[Zy], bb.width, bb.height, 0, Uy) : (qb && (Uy = yb(Uy, bb.width, bb.height, hy)), oy.texImage2D(oy.TEXTURE_CUBE_MAP_POSITIVE_X + Py, cb, ey, bb.width, bb.height, 0, Ky, By, Uy))
        }(!this.needPOTTextures || (0, Py.g)(bb.width) && (0, Py.g)(bb.height)) && bb.generateMipMaps && 0 === cb && this._gl.generateMipmap(this._gl.TEXTURE_CUBE_MAP), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), bb.isReady = !0
      }, hy.ThinEngine.prototype.createRawCubeTextureFromUrl = function(bb, Wy, Uy, hy, fy, Zy, cb, Py) {
        let oy = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          By = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          Ky = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 3,
          ey = arguments.length > 11 && void 0 !== arguments[11] && arguments[11];
        const qb = this._gl,
          sy = this.createRawCubeTexture(null, Uy, hy, fy, !Zy, ey, Ky, null);
        Wy?.addPendingData(sy), sy.url = bb, sy.isReady = !1, this._internalTexturesCache.push(sy);
        const Sy = (yb, bb) => {
            Wy?.removePendingData(sy), By && By(yb ? yb.status + " " + yb.statusText : "Failed to parse texture data", bb)
          },
          Ey = async bb => {
            if (!sy._hardwareTexture) return;
            const Uy = cb(bb);
            if (!Uy) return;
            const Zy = Uy instanceof Promise ? await Uy : Uy,
              By = sy.width;
            if (Py) {
              const bb = this._getWebGLTextureType(fy);
              let Wy = this._getInternalFormat(hy);
              const Uy = this._getRGBABufferInternalSizedFormat(fy);
              let cb = !1;
              Wy === qb.RGB && (Wy = qb.RGBA, cb = !0), this._bindTextureDirectly(qb.TEXTURE_CUBE_MAP, sy, !0), this._unpackFlipY(!1);
              const oy = Py(Zy);
              for (let hy = 0; hy < oy.length; hy++) {
                const Zy = By >> hy;
                for (let Py = 0; Py < 6; Py++) {
                  let By = oy[hy][Py];
                  cb && (By = yb(By, Zy, Zy, fy)), qb.texImage2D(Py, hy, Uy, Zy, Zy, 0, Wy, bb, By)
                }
              }
              this._bindTextureDirectly(qb.TEXTURE_CUBE_MAP, null)
            } else this.updateRawCubeTexture(sy, Zy, hy, fy, ey);
            sy.isReady = !0, Wy?.removePendingData(sy), sy.onLoadedObservable.notifyObservers(sy), sy.onLoadedObservable.clear(), oy && oy()
          };
        return this._loadFile(bb, (yb => {
          Ey(yb).catch((yb => {
            Sy(void 0, yb)
          }))
        }), void 0, Wy?.offlineProvider, !0, Sy), sy
      }, hy.ThinEngine.prototype.createRawTexture2DArray = bb(!1), hy.ThinEngine.prototype.createRawTexture3D = bb(!0), hy.ThinEngine.prototype.updateRawTexture2DArray = Wy(!1), hy.ThinEngine.prototype.updateRawTexture3D = Wy(!0))
    }();
    var By = Wy(38338);
    let Ky = !1;
    Ky || (Ky = !0, hy.ThinEngine.prototype._readTexturePixelsSync = function(yb, bb, Wy) {
      let Uy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1,
        hy = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        fy = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        Zy = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
        cb = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        Py = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
        oy = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
      const Ky = this._gl;
      if (!Ky) throw new Error("Engine does not have gl rendering context.");
      if (!this._dummyFramebuffer) {
        const yb = Ky.createFramebuffer();
        if (!yb) throw new Error("Unable to create dummy framebuffer");
        this._dummyFramebuffer = yb
      }
      Ky.bindFramebuffer(Ky.FRAMEBUFFER, this._dummyFramebuffer), Uy > -1 && (yb.is2DArray || yb.is3D) ? Ky.framebufferTextureLayer(Ky.FRAMEBUFFER, Ky.COLOR_ATTACHMENT0, yb._hardwareTexture?.underlyingResource, hy, Uy) : Uy > -1 ? Ky.framebufferTexture2D(Ky.FRAMEBUFFER, Ky.COLOR_ATTACHMENT0, Ky.TEXTURE_CUBE_MAP_POSITIVE_X + Uy, yb._hardwareTexture?.underlyingResource, hy) : Ky.framebufferTexture2D(Ky.FRAMEBUFFER, Ky.COLOR_ATTACHMENT0, Ky.TEXTURE_2D, yb._hardwareTexture?.underlyingResource, hy);
      let ey = void 0 !== yb.type ? this._getWebGLTextureType(yb.type) : Ky.UNSIGNED_BYTE;
      return cb ? fy || (fy = (0, By.l)(yb.type, 4 * bb * Wy)) : ey === Ky.UNSIGNED_BYTE ? (fy || (fy = new Uint8Array(4 * bb * Wy)), ey = Ky.UNSIGNED_BYTE) : (fy || (fy = new Float32Array(4 * bb * Wy)), ey = Ky.FLOAT), Zy && this.flushFramebuffer(), Ky.readPixels(Py, oy, bb, Wy, Ky.RGBA, ey, fy), Ky.bindFramebuffer(Ky.FRAMEBUFFER, this._currentFramebuffer), fy
    }, hy.ThinEngine.prototype._readTexturePixels = function(yb, bb, Wy) {
      let Uy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1,
        hy = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        fy = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        Zy = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
        cb = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        Py = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
        oy = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
      return Promise.resolve(this._readTexturePixelsSync(yb, bb, Wy, Uy, hy, fy, Zy, cb, Py, oy))
    }), (0, Wy(38442).d)();
    let ey = !1;
    ey || (ey = !0, hy.ThinEngine.prototype._createDepthStencilCubeTexture = function(yb, bb) {
      const Wy = new Zy.d(this, 12);
      if (Wy.isCube = !0, 1 === this.vf) return cb.b.Error("Depth cube texture is not supported by WebGL 1."), Wy;
      const Uy = {
          bilinearFiltering: !1,
          comparisonFunction: 0,
          generateStencil: !1,
          ...bb
        },
        hy = this._gl;
      this._bindTextureDirectly(hy.TEXTURE_CUBE_MAP, Wy, !0), this._setupDepthStencilTexture(Wy, yb, Uy.bilinearFiltering, Uy.comparisonFunction);
      for (let fy = 0; fy < 6; fy++) Uy.generateStencil ? hy.texImage2D(hy.TEXTURE_CUBE_MAP_POSITIVE_X + fy, 0, hy.DEPTH24_STENCIL8, yb, yb, 0, hy.DEPTH_STENCIL, hy.UNSIGNED_INT_24_8, null) : hy.texImage2D(hy.TEXTURE_CUBE_MAP_POSITIVE_X + fy, 0, hy.DEPTH_COMPONENT24, yb, yb, 0, hy.DEPTH_COMPONENT, hy.UNSIGNED_INT, null);
      return this._bindTextureDirectly(hy.TEXTURE_CUBE_MAP, null), this._internalTexturesCache.push(Wy), Wy
    }, hy.ThinEngine.prototype._setCubeMapTextureParams = function(yb, bb, Wy) {
      const Uy = this._gl;
      Uy.texParameteri(Uy.TEXTURE_CUBE_MAP, Uy.TEXTURE_MAG_FILTER, Uy.LINEAR), Uy.texParameteri(Uy.TEXTURE_CUBE_MAP, Uy.TEXTURE_MIN_FILTER, bb ? Uy.LINEAR_MIPMAP_LINEAR : Uy.LINEAR), Uy.texParameteri(Uy.TEXTURE_CUBE_MAP, Uy.TEXTURE_WRAP_S, Uy.CLAMP_TO_EDGE), Uy.texParameteri(Uy.TEXTURE_CUBE_MAP, Uy.TEXTURE_WRAP_T, Uy.CLAMP_TO_EDGE), yb.samplingMode = bb ? 3 : 2, bb && this.getCaps().textureMaxLevel && void 0 !== Wy && Wy > 0 && (Uy.texParameteri(Uy.TEXTURE_CUBE_MAP, Uy.TEXTURE_MAX_LEVEL, Wy), yb._maxLodLevel = Wy), this._bindTextureDirectly(Uy.TEXTURE_CUBE_MAP, null)
    }, hy.ThinEngine.prototype.createCubeTexture = function(yb, bb, Wy, Uy) {
      let hy = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        fy = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        Zy = arguments.length > 6 ? arguments[6] : void 0,
        oy = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        By = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        Ky = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
        ey = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
        qb = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
        sy = arguments.length > 13 && void 0 !== arguments[13] && arguments[13],
        Sy = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : null;
      const Ey = this._gl;
      return this.createCubeTextureBase(yb, bb, Wy, !!Uy, hy, fy, Zy, oy, By, Ky, ey, qb, (yb => this._bindTextureDirectly(Ey.TEXTURE_CUBE_MAP, yb, !0)), ((yb, bb) => {
        const Wy = this.needPOTTextures ? (0, Py.d)(bb[0].width, this._caps.maxCubemapTextureSize) : bb[0].width,
          fy = Wy,
          oy = [Ey.TEXTURE_CUBE_MAP_POSITIVE_X, Ey.TEXTURE_CUBE_MAP_POSITIVE_Y, Ey.TEXTURE_CUBE_MAP_POSITIVE_Z, Ey.TEXTURE_CUBE_MAP_NEGATIVE_X, Ey.TEXTURE_CUBE_MAP_NEGATIVE_Y, Ey.TEXTURE_CUBE_MAP_NEGATIVE_Z];
        this._bindTextureDirectly(Ey.TEXTURE_CUBE_MAP, yb, !0), this._unpackFlipY(!1);
        const By = Zy ? this._getInternalFormat(Zy, yb._useSRGBBuffer) : yb._useSRGBBuffer ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : Ey.RGBA;
        let Ky = Zy ? this._getInternalFormat(Zy) : Ey.RGBA;
        yb._useSRGBBuffer && 1 === this.vf && (Ky = By);
        for (let Uy = 0; Uy < oy.length; Uy++)
          if (bb[Uy].width !== Wy || bb[Uy].height !== fy) {
            if (this._prepareWorkingCanvas(), !this._workingCanvas || !this._workingContext) return void cb.b.Warn("Cannot create canvas to resize texture.");
            this._workingCanvas.width = Wy, this._workingCanvas.height = fy, this._workingContext.drawImage(bb[Uy], 0, 0, bb[Uy].width, bb[Uy].height, 0, 0, Wy, fy), Ey.texImage2D(oy[Uy], 0, By, Ky, Ey.UNSIGNED_BYTE, this._workingCanvas)
          } else Ey.texImage2D(oy[Uy], 0, By, Ky, Ey.UNSIGNED_BYTE, bb[Uy]);
        Uy || Ey.generateMipmap(Ey.TEXTURE_CUBE_MAP), this._setCubeMapTextureParams(yb, !Uy), yb.width = Wy, yb.height = fy, yb.isReady = !0, Zy && (yb.format = Zy), yb.onLoadedObservable.notifyObservers(yb), yb.onLoadedObservable.clear(), hy && hy()
      }), !!sy, Sy)
    }, hy.ThinEngine.prototype.generateMipMapsForCubemap = function(yb) {
      let bb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (yb.generateMipMaps) {
        const Wy = this._gl;
        this._bindTextureDirectly(Wy.TEXTURE_CUBE_MAP, yb, !0), Wy.generateMipmap(Wy.TEXTURE_CUBE_MAP), bb && this._bindTextureDirectly(Wy.TEXTURE_CUBE_MAP, null)
      }
    });
    Wy(38447);
    let qb = !1;
    qb || (qb = !0, hy.ThinEngine.prototype.setDepthStencilTexture = function(yb, bb, Wy, Uy) {
      void 0 !== yb && (bb && (this._boundUniforms[yb] = bb), Wy && Wy.depthStencilTexture ? this._setTexture(yb, Wy, !1, !0, Uy) : this._setTexture(yb, null, void 0, void 0, Uy))
    });
    let sy = !1;
    sy || (sy = !0, hy.ThinEngine.prototype.createRenderTargetCubeTexture = function(yb, bb) {
      const Wy = this._createHardwareRenderTargetWrapper(!1, !0, yb),
        Uy = {
          generateMipMaps: !0,
          generateDepthBuffer: !0,
          generateStencilBuffer: !1,
          type: 0,
          samplingMode: 3,
          format: 5,
          ...bb
        };
      Uy.generateStencilBuffer = Uy.generateDepthBuffer && Uy.generateStencilBuffer, (1 !== Uy.type || this._caps.textureFloatLinearFiltering) && (2 !== Uy.type || this._caps.textureHalfFloatLinearFiltering) || (Uy.samplingMode = 1);
      const hy = this._gl,
        fy = new Zy.d(this, 5);
      this._bindTextureDirectly(hy.TEXTURE_CUBE_MAP, fy, !0);
      const Py = this._getSamplingParameters(Uy.samplingMode, Uy.generateMipMaps);
      1 !== Uy.type || this._caps.textureFloat || (Uy.type = 0, cb.b.Warn("Float textures are not supported. Cube render target forced to TEXTURETYPE_UNESIGNED_BYTE type")), hy.texParameteri(hy.TEXTURE_CUBE_MAP, hy.TEXTURE_MAG_FILTER, Py.mag), hy.texParameteri(hy.TEXTURE_CUBE_MAP, hy.TEXTURE_MIN_FILTER, Py.min), hy.texParameteri(hy.TEXTURE_CUBE_MAP, hy.TEXTURE_WRAP_S, hy.CLAMP_TO_EDGE), hy.texParameteri(hy.TEXTURE_CUBE_MAP, hy.TEXTURE_WRAP_T, hy.CLAMP_TO_EDGE);
      for (let Zy = 0; Zy < 6; Zy++) hy.texImage2D(hy.TEXTURE_CUBE_MAP_POSITIVE_X + Zy, 0, this._getRGBABufferInternalSizedFormat(Uy.type, Uy.format), yb, yb, 0, this._getInternalFormat(Uy.format), this._getWebGLTextureType(Uy.type), null);
      const oy = hy.createFramebuffer();
      return this._bindUnboundFramebuffer(oy), Wy._depthStencilBuffer = this._setupFramebufferDepthAttachments(Uy.generateStencilBuffer, Uy.generateDepthBuffer, yb, yb), Uy.generateMipMaps && hy.generateMipmap(hy.TEXTURE_CUBE_MAP), this._bindTextureDirectly(hy.TEXTURE_CUBE_MAP, null), this._bindUnboundFramebuffer(null), Wy._framebuffer = oy, Wy._generateDepthBuffer = Uy.generateDepthBuffer, Wy._generateStencilBuffer = Uy.generateStencilBuffer, fy.width = yb, fy.height = yb, fy.isReady = !0, fy.isCube = !0, fy.samples = 1, fy.generateMipMaps = Uy.generateMipMaps, fy.samplingMode = Uy.samplingMode, fy.type = Uy.type, fy.format = Uy.format, this._internalTexturesCache.push(fy), Wy.setTextures(fy), Wy
    });
    var Sy = Wy(38453),
      Ey = Wy(38457);
    let ly = !1;
    ly || (ly = !0, hy.ThinEngine.prototype.createPrefilteredCubeTexture = function(yb, bb, Uy, hy) {
      let fy = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        Py = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        oy = arguments.length > 6 ? arguments[6] : void 0,
        By = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        Ky = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
        ey = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null;
      return this.createCubeTexture(yb, bb, null, !1, (async yb => {
        if (!yb) return void(fy && fy(null));
        const Py = yb.texture;
        if (Ky ? yb.info.sphericalPolynomial && (Py._sphericalPolynomial = yb.info.sphericalPolynomial) : Py._sphericalPolynomial = Py._sphericalPolynomial ?? new Sy.f, Py._source = 9, this.getCaps().textureLOD) return void(fy && fy(Py));
        const oy = this._gl,
          By = yb.width;
        if (!By) return;
        const {
          DDSTools: ey
        } = await Wy.e(284).then((() => Wy(40236))), qb = [];
        for (let Wy = 0; Wy < 3; Wy++) {
          const fy = 1 - Wy / 2,
            Ky = hy,
            sy = Math.log2(By) * Uy + hy,
            Sy = Ky + (sy - Ky) * fy,
            ly = Math.round(Math.min(Math.max(Sy, 0), sy)),
            mb = new Zy.d(this, 2);
          if (mb.type = Py.type, mb.format = Py.format, mb.width = Math.pow(2, Math.max(Math.log2(By) - ly, 0)), mb.height = mb.width, mb.isCube = !0, mb._cachedWrapU = 0, mb._cachedWrapV = 0, this._bindTextureDirectly(oy.TEXTURE_CUBE_MAP, mb, !0), mb.samplingMode = 2, oy.texParameteri(oy.TEXTURE_CUBE_MAP, oy.TEXTURE_MAG_FILTER, oy.LINEAR), oy.texParameteri(oy.TEXTURE_CUBE_MAP, oy.TEXTURE_MIN_FILTER, oy.LINEAR), oy.texParameteri(oy.TEXTURE_CUBE_MAP, oy.TEXTURE_WRAP_S, oy.CLAMP_TO_EDGE), oy.texParameteri(oy.TEXTURE_CUBE_MAP, oy.TEXTURE_WRAP_T, oy.CLAMP_TO_EDGE), yb.isDDS) {
            const bb = yb.info,
              Wy = yb.data;
            this._unpackFlipY(bb.isCompressed), ey.UploadDDSLevels(this, mb, Wy, bb, !0, 6, ly)
          } else cb.b.Warn("DDS is the only prefiltered cube map supported so far.");
          this._bindTextureDirectly(oy.TEXTURE_CUBE_MAP, null);
          const Cy = new Ey.d(bb);
          Cy._isCube = !0, Cy._texture = mb, mb.isReady = !0, qb.push(Cy)
        }
        Py._lodTextureHigh = qb[2], Py._lodTextureMid = qb[1], Py._lodTextureLow = qb[0], fy && fy(Py)
      }), Py, oy, By, Ky, Uy, hy, null, void 0, !1, ey)
    });
    var mb = Wy(38390);
    let Cy = !1;
    Cy || (Cy = !0, hy.ThinEngine.prototype.createUniformBuffer = function(yb, bb) {
      const Wy = this._gl.createBuffer();
      if (!Wy) throw new Error("Unable to create uniform buffer");
      const Uy = new mb.c(Wy);
      return this.bindUniformBuffer(Uy), yb instanceof Float32Array ? this._gl.bufferData(this._gl.UNIFORM_BUFFER, yb, this._gl.STATIC_DRAW) : this._gl.bufferData(this._gl.UNIFORM_BUFFER, new Float32Array(yb), this._gl.STATIC_DRAW), this.bindUniformBuffer(null), Uy.references = 1, Uy
    }, hy.ThinEngine.prototype.createDynamicUniformBuffer = function(yb, bb) {
      const Wy = this._gl.createBuffer();
      if (!Wy) throw new Error("Unable to create dynamic uniform buffer");
      const Uy = new mb.c(Wy);
      return this.bindUniformBuffer(Uy), yb instanceof Float32Array ? this._gl.bufferData(this._gl.UNIFORM_BUFFER, yb, this._gl.DYNAMIC_DRAW) : this._gl.bufferData(this._gl.UNIFORM_BUFFER, new Float32Array(yb), this._gl.DYNAMIC_DRAW), this.bindUniformBuffer(null), Uy.references = 1, Uy
    }, hy.ThinEngine.prototype.updateUniformBuffer = function(yb, bb, Wy, Uy) {
      this.bindUniformBuffer(yb), void 0 === Wy && (Wy = 0), void 0 === Uy ? bb instanceof Float32Array ? this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, Wy, bb) : this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, Wy, new Float32Array(bb)) : bb instanceof Float32Array ? this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, 0, bb.subarray(Wy, Wy + Uy)) : this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, 0, new Float32Array(bb).subarray(Wy, Wy + Uy)), this.bindUniformBuffer(null)
    }, hy.ThinEngine.prototype.bindUniformBuffer = function(yb) {
      this._gl.bindBuffer(this._gl.UNIFORM_BUFFER, yb ? yb.underlyingResource : null)
    }, hy.ThinEngine.prototype.bindUniformBufferBase = function(yb, bb, Wy) {
      this._gl.bindBufferBase(this._gl.UNIFORM_BUFFER, bb, yb ? yb.underlyingResource : null)
    }, hy.ThinEngine.prototype.bindUniformBlock = function(yb, bb, Wy) {
      const Uy = yb.program,
        hy = this._gl.getUniformBlockIndex(Uy, bb);
      4294967295 !== hy && this._gl.uniformBlockBinding(Uy, hy, Wy)
    });
    var Ty = Wy(38325),
      Vy = Wy(38362);
    let Jy = !1;
    Jy || (Jy = !0, Vy.d.prototype.displayLoadingUI = function() {
      if (!(0, Ty.i)()) return;
      const yb = this.loadingScreen;
      yb && yb.displayLoadingUI()
    }, Vy.d.prototype.hideLoadingUI = function() {
      if (!(0, Ty.i)()) return;
      const yb = this._loadingScreen;
      yb && yb.hideLoadingUI()
    }, Object.defineProperty(Vy.d.prototype, "loadingScreen", {
      get: function() {
        return !this._loadingScreen && this._renderingCanvas && (this._loadingScreen = Vy.d.DefaultLoadingScreenFactory(this._renderingCanvas)), this._loadingScreen
      },
      set: function(yb) {
        this._loadingScreen = yb
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(Vy.d.prototype, "loadingUIText", {
      set: function(yb) {
        this.loadingScreen.loadingUIText = yb
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(Vy.d.prototype, "loadingUIBackgroundColor", {
      set: function(yb) {
        this.loadingScreen.loadingUIBackgroundColor = yb
      },
      enumerable: !0,
      configurable: !0
    })), (0, Wy(38429).e)();
    let gb = !1;
    gb || (gb = !0, Vy.d.prototype.getInputElement = function() {
      return this._renderingCanvas
    }, Vy.d.prototype.getDepthFunction = function() {
      return this._depthCullingState.depthFunc
    }, Vy.d.prototype.setDepthFunction = function(yb) {
      this._depthCullingState.depthFunc = yb
    }, Vy.d.prototype.setDepthFunctionToGreater = function() {
      this.setDepthFunction(516)
    }, Vy.d.prototype.setDepthFunctionToGreaterOrEqual = function() {
      this.setDepthFunction(518)
    }, Vy.d.prototype.setDepthFunctionToLess = function() {
      this.setDepthFunction(513)
    }, Vy.d.prototype.setDepthFunctionToLessOrEqual = function() {
      this.setDepthFunction(515)
    }, Vy.d.prototype.getDepthWrite = function() {
      return this._depthCullingState.depthMask
    }, Vy.d.prototype.setDepthWrite = function(yb) {
      this._depthCullingState.depthMask = yb
    }, Vy.d.prototype.setAlphaConstants = function(yb, bb, Wy, Uy) {
      this._alphaState.setAlphaBlendConstants(yb, bb, Wy, Uy)
    }, Vy.d.prototype.getAlphaMode = function() {
      let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
      return this._alphaMode[yb]
    }, Vy.d.prototype.getAlphaEquation = function() {
      let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
      return this._alphaEquation[yb]
    });
    let Gy = !1;
    Gy || (Gy = !0, Vy.d.prototype.getStencilBuffer = function() {
      return this._stencilState.stencilTest
    }, Vy.d.prototype.setStencilBuffer = function(yb) {
      this._stencilState.stencilTest = yb
    }, Vy.d.prototype.getStencilMask = function() {
      return this._stencilState.stencilMask
    }, Vy.d.prototype.setStencilMask = function(yb) {
      this._stencilState.stencilMask = yb
    }, Vy.d.prototype.getStencilFunction = function() {
      return this._stencilState.stencilFunc
    }, Vy.d.prototype.getStencilBackFunction = function() {
      return this._stencilState.stencilBackFunc
    }, Vy.d.prototype.getStencilFunctionReference = function() {
      return this._stencilState.stencilFuncRef
    }, Vy.d.prototype.getStencilFunctionMask = function() {
      return this._stencilState.stencilFuncMask
    }, Vy.d.prototype.setStencilFunction = function(yb) {
      this._stencilState.stencilFunc = yb
    }, Vy.d.prototype.setStencilBackFunction = function(yb) {
      this._stencilState.stencilBackFunc = yb
    }, Vy.d.prototype.setStencilFunctionReference = function(yb) {
      this._stencilState.stencilFuncRef = yb
    }, Vy.d.prototype.setStencilFunctionMask = function(yb) {
      this._stencilState.stencilFuncMask = yb
    }, Vy.d.prototype.getStencilOperationFail = function() {
      return this._stencilState.stencilOpStencilFail
    }, Vy.d.prototype.getStencilBackOperationFail = function() {
      return this._stencilState.stencilBackOpStencilFail
    }, Vy.d.prototype.getStencilOperationDepthFail = function() {
      return this._stencilState.stencilOpDepthFail
    }, Vy.d.prototype.getStencilBackOperationDepthFail = function() {
      return this._stencilState.stencilBackOpDepthFail
    }, Vy.d.prototype.getStencilOperationPass = function() {
      return this._stencilState.stencilOpStencilDepthPass
    }, Vy.d.prototype.getStencilBackOperationPass = function() {
      return this._stencilState.stencilBackOpStencilDepthPass
    }, Vy.d.prototype.setStencilOperationFail = function(yb) {
      this._stencilState.stencilOpStencilFail = yb
    }, Vy.d.prototype.setStencilBackOperationFail = function(yb) {
      this._stencilState.stencilBackOpStencilFail = yb
    }, Vy.d.prototype.setStencilOperationDepthFail = function(yb) {
      this._stencilState.stencilOpDepthFail = yb
    }, Vy.d.prototype.setStencilBackOperationDepthFail = function(yb) {
      this._stencilState.stencilBackOpDepthFail = yb
    }, Vy.d.prototype.setStencilOperationPass = function(yb) {
      this._stencilState.stencilOpStencilDepthPass = yb
    }, Vy.d.prototype.setStencilBackOperationPass = function(yb) {
      this._stencilState.stencilBackOpStencilDepthPass = yb
    }, Vy.d.prototype.cacheStencilState = function() {
      this._cachedStencilBuffer = this.getStencilBuffer(), this._cachedStencilFunction = this.getStencilFunction(), this._cachedStencilMask = this.getStencilMask(), this._cachedStencilOperationPass = this.getStencilOperationPass(), this._cachedStencilOperationFail = this.getStencilOperationFail(), this._cachedStencilOperationDepthFail = this.getStencilOperationDepthFail(), this._cachedStencilReference = this.getStencilFunctionReference()
    }, Vy.d.prototype.restoreStencilState = function() {
      this.setStencilFunction(this._cachedStencilFunction), this.setStencilMask(this._cachedStencilMask), this.setStencilBuffer(this._cachedStencilBuffer), this.setStencilOperationPass(this._cachedStencilOperationPass), this.setStencilOperationFail(this._cachedStencilOperationFail), this.setStencilOperationDepthFail(this._cachedStencilOperationDepthFail), this.setStencilFunctionReference(this._cachedStencilReference)
    });
    Wy(38502);
    let Oy = !1;
    Oy || (Oy = !0, Vy.d.prototype.createDepthStencilTexture = function(yb, bb, Wy) {
      if (bb.isCube) {
        const Wy = yb.width || yb;
        return this._createDepthStencilCubeTexture(Wy, bb)
      }
      return this._createDepthStencilTexture(yb, bb, Wy)
    });
    Wy(38506), Wy(38555);
    let Ry = !1;
    Ry || (Ry = !0, hy.ThinEngine.prototype.enableScissor = function(yb, bb, Wy, Uy) {
      const hy = this._gl;
      hy.enable(hy.SCISSOR_TEST), hy.scissor(yb, bb, Wy, Uy)
    }, hy.ThinEngine.prototype.disableScissor = function() {
      const yb = this._gl;
      yb.disable(yb.SCISSOR_TEST)
    })
  },
  38281: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => Vy
    });
    var Uy = Wy(38287),
      hy = Wy(35886),
      fy = Wy(38305),
      Zy = Wy(38371);
    class cb {
      constructor() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 30;
        this._enabled = !0, this._rollingFrameTime = new Py(yb)
      }
      sampleFrame() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Zy.d.Now;
        if (this._enabled) {
          if (null != this._lastFrameTimeMs) {
            const bb = yb - this._lastFrameTimeMs;
            this._rollingFrameTime.add(bb)
          }
          this._lastFrameTimeMs = yb
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
        const yb = this._rollingFrameTime.history(0);
        return 0 === yb ? 0 : 1e3 / yb
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
    class Py {
      constructor(yb) {
        this._samples = new Array(yb), this.reset()
      }
      add(yb) {
        let bb;
        if (this.isSaturated()) {
          const yb = this._samples[this._pos];
          bb = yb - this.average, this.average -= bb / (this._sampleCount - 1), this._m2 -= bb * (yb - this.average)
        } else this._sampleCount++;
        bb = yb - this.average, this.average += bb / this._sampleCount, this._m2 += bb * (yb - this.average), this.variance = this._m2 / (this._sampleCount - 1), this._samples[this._pos] = yb, this._pos++, this._pos %= this._samples.length
      }
      history(yb) {
        if (yb >= this._sampleCount || yb >= this._samples.length) return 0;
        const bb = this._wrapPosition(this._pos - 1);
        return this._samples[this._wrapPosition(bb - yb)]
      }
      isSaturated() {
        return this._sampleCount >= this._samples.length
      }
      reset() {
        this.average = 0, this.variance = 0, this._sampleCount = 0, this._pos = 0, this._m2 = 0
      }
      _wrapPosition(yb) {
        const bb = this._samples.length;
        return (yb % bb + bb) % bb
      }
    }
    var oy = Wy(38390),
      By = Wy(37350),
      Ky = Wy(38411),
      ey = Wy(38362),
      qb = Wy(38325);

    function sy(yb) {
      const bb = function(yb) {
        if (!(0, qb.f)() || !document.body) return null;
        const bb = document.createElement("span");
        bb.textContent = "Hg", bb.style.font = yb;
        const Wy = document.createElement("div");
        Wy.style.display = "inline-block", Wy.style.width = "1px", Wy.style.height = "0px", Wy.style.verticalAlign = "bottom";
        const Uy = document.createElement("div");
        let hy, fy;
        Uy.style.whiteSpace = "nowrap", Uy.appendChild(bb), Uy.appendChild(Wy), document.body.appendChild(Uy);
        try {
          fy = Wy.getBoundingClientRect().top - bb.getBoundingClientRect().top, Wy.style.verticalAlign = "baseline", hy = Wy.getBoundingClientRect().top - bb.getBoundingClientRect().top
        } finally {
          document.body.removeChild(Uy)
        }
        const Zy = {
          ascent: hy,
          height: fy,
          descent: fy - hy
        };
        return Sy(Zy) ? Zy : null
      }(yb);
      if (bb) return bb;
      const Wy = function(yb) {
        let bb = null;
        try {
          "undefined" !== typeof OffscreenCanvas ? bb = new OffscreenCanvas(64, 64) : (0, qb.f)() && "function" === typeof document.createElement && (bb = document.createElement("canvas"), bb.width = 64, bb.height = 64);
          const Wy = bb?.getContext("2d");
          if (!Wy) return null;
          Wy.font = yb;
          const Uy = Wy.measureText("Hg"),
            hy = Number(Uy.actualBoundingBoxAscent ?? Uy.fontBoundingBoxAscent),
            fy = Number(Uy.actualBoundingBoxDescent ?? Uy.fontBoundingBoxDescent),
            Zy = {
              ascent: hy,
              height: hy + fy,
              descent: fy
            };
          return Sy(Zy) ? Zy : null
        } catch {
          return null
        } finally {
          const yb = bb;
          "function" === typeof yb?.dispose && yb.dispose()
        }
      }(yb);
      return Wy || function(yb) {
        const bb = Math.max(1, function(yb) {
            const bb = /(?:^|\s)([0-9]+(?:\.[0-9]+)?)px(?:\/|\s|$)/.exec(String(yb || ""));
            return bb ? Number(bb[1]) : 16
          }(yb)),
          Wy = .8 * bb,
          Uy = .2 * bb;
        return {
          ascent: Wy,
          height: Wy + Uy,
          descent: Uy
        }
      }(yb)
    }

    function Sy(yb) {
      return Number.isFinite(yb.ascent) && Number.isFinite(yb.height) && Number.isFinite(yb.descent) && yb.height > 0
    }

    function Ey(yb) {
      if (yb.requestPointerLock) {
        const bb = yb.requestPointerLock();
        bb instanceof Promise ? bb.then((() => {
          yb.focus()
        })).catch((() => {})) : yb.focus()
      }
    }
    var ly = Wy(38422),
      mb = Wy(38354),
      Cy = Wy(38429),
      Ty = Wy(38432);
    class Vy extends fy.ThinEngine {
      static get NpmPackage() {
        return ey.d.NpmPackage
      }
      static get Version() {
        return ey.d.Version
      }
      static get Instances() {
        return hy.c.Instances
      }
      static get LastCreatedEngine() {
        return hy.c.LastCreatedEngine
      }
      static get LastCreatedScene() {
        return hy.c.LastCreatedScene
      }
      static DefaultLoadingScreenFactory(yb) {
        return ey.d.DefaultLoadingScreenFactory(yb)
      }
      get _supportsHardwareTextureRescaling() {
        return !!Vy._RescalePostProcessFactory
      }
      _measureFps() {
        this._performanceMonitor.sampleFrame(), this._fps = this._performanceMonitor.averageFPS, this._deltaTime = this._performanceMonitor.instantaneousFrameTime || 0
      }
      get performanceMonitor() {
        return this._performanceMonitor
      }
      constructor(yb, bb, Wy) {
        let Uy = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        (0, Cy.e)(), (0, Ty.b)(), super(yb, bb, Wy, Uy), this._performanceMonitor = new cb, this._drawCalls = new ly.c, yb && (this._features.supportRenderPasses = !0)
      }
      _initGLContext() {
        super._initGLContext(), this._rescalePostProcess = null
      }
      _sharedInit(yb) {
        super._sharedInit(yb),
          function(yb, bb, Wy) {
            yb._onCanvasFocus = () => {
              yb.onCanvasFocusObservable.notifyObservers(yb)
            }, yb._onCanvasBlur = () => {
              yb.onCanvasBlurObservable.notifyObservers(yb)
            }, yb._onCanvasContextMenu = bb => {
              yb.disableContextMenu && bb.preventDefault()
            }, bb.addEventListener("focus", yb._onCanvasFocus), bb.addEventListener("blur", yb._onCanvasBlur), bb.addEventListener("contextmenu", yb._onCanvasContextMenu), yb._onBlur = () => {
              yb.disablePerformanceMonitorInBackground && yb.performanceMonitor.disable(), yb._windowIsBackground = !0
            }, yb._onFocus = () => {
              yb.disablePerformanceMonitorInBackground && yb.performanceMonitor.enable(), yb._windowIsBackground = !1
            }, yb._onCanvasPointerOut = Wy => {
              document.elementFromPoint(Wy.clientX, Wy.clientY) !== bb && yb.onCanvasPointerOutObservable.notifyObservers(Wy)
            };
            const Uy = yb.getHostWindow();
            Uy && "function" === typeof Uy.addEventListener && (Uy.addEventListener("blur", yb._onBlur), Uy.addEventListener("focus", yb._onFocus)), bb.addEventListener("pointerout", yb._onCanvasPointerOut), Wy.doNotHandleTouchAction || function(yb) {
              yb && yb.setAttribute && (yb.setAttribute("touch-action", "none"), yb.style.touchAction = "none", yb.style.webkitTapHighlightColor = "transparent")
            }(bb), !ey.d.audioEngine && Wy.audioEngine && ey.d.AudioEngineFactory && (ey.d.audioEngine = ey.d.AudioEngineFactory(yb.getRenderingCanvas(), yb.getAudioContext(), yb.getAudioDestination())), (0, qb.f)() && (yb._onFullscreenChange = () => {
              yb.isFullscreen = !!document.fullscreenElement, yb.isFullscreen && yb._pointerLockRequested && bb && Ey(bb)
            }, document.addEventListener("fullscreenchange", yb._onFullscreenChange, !1), document.addEventListener("webkitfullscreenchange", yb._onFullscreenChange, !1), yb._onPointerLockChange = () => {
              yb.isPointerLock = document.pointerLockElement === bb
            }, document.addEventListener("pointerlockchange", yb._onPointerLockChange, !1), document.addEventListener("webkitpointerlockchange", yb._onPointerLockChange, !1)), yb.enableOfflineSupport = void 0 !== ey.d.OfflineProviderFactory, yb._deterministicLockstep = !!Wy.deterministicLockstep, yb._lockstepMaxSteps = Wy.lockstepMaxSteps || 0, yb._timeStep = Wy.timeStep || 1 / 60
          }(this, yb, this._creationOptions)
      }
      resizeImageBitmap(yb, bb, Wy) {
        return function(yb, bb, Wy, Uy) {
          const hy = yb.createCanvas(Wy, Uy).getContext("2d");
          if (!hy) throw new Error("Unable to get 2d context for resizeImageBitmap");
          return hy.drawImage(bb, 0, 0), hy.getImageData(0, 0, Wy, Uy).data
        }(this, yb, bb, Wy)
      }
      async _createImageBitmapFromSource(yb, bb) {
        return await async function(yb, bb, Wy) {
          return await new Promise(((Uy, hy) => {
            const fy = new Image;
            fy.onload = () => {
              fy.decode().then((() => {
                yb.createImageBitmap(fy, Wy).then((yb => {
                  Uy(yb)
                }))
              }))
            }, fy.onerror = () => {
              hy(`Error loading image ${fy.src}`)
            }, fy.src = bb
          }))
        }(this, yb, bb)
      }
      switchFullscreen(yb) {
        this.isFullscreen ? this.exitFullscreen() : this.enterFullscreen(yb)
      }
      enterFullscreen(yb) {
        this.isFullscreen || (this._pointerLockRequested = yb, this._renderingCanvas && function(yb) {
          const bb = yb.requestFullscreen || yb.webkitRequestFullscreen;
          bb && bb.call(yb)
        }(this._renderingCanvas))
      }
      exitFullscreen() {
        this.isFullscreen && function() {
          const yb = document;
          document.exitFullscreen ? document.exitFullscreen() : yb.webkitCancelFullScreen && yb.webkitCancelFullScreen()
        }()
      }
      setDitheringState(yb) {
        yb ? this._gl.enable(this._gl.DITHER) : this._gl.disable(this._gl.DITHER)
      }
      setRasterizerState(yb) {
        yb ? this._gl.disable(this._gl.RASTERIZER_DISCARD) : this._gl.enable(this._gl.RASTERIZER_DISCARD)
      }
      setDirectViewport(yb, bb, Wy, Uy) {
        const hy = this._cachedViewport;
        return this._cachedViewport = null, this._viewport(yb, bb, Wy, Uy), hy
      }
      scissorClear(yb, bb, Wy, Uy, hy) {
        this.enableScissor(yb, bb, Wy, Uy), this.clear(hy, !0, !0, !0), this.disableScissor()
      }
      getVertexShaderSource(yb) {
        const bb = this._gl.getAttachedShaders(yb);
        return bb ? this._gl.getShaderSource(bb[0]) : null
      }
      getFragmentShaderSource(yb) {
        const bb = this._gl.getAttachedShaders(yb);
        return bb ? this._gl.getShaderSource(bb[1]) : null
      }
      set framebufferDimensionsObject(yb) {
        this._framebufferDimensionsObject = yb, this._framebufferDimensionsObject && this.onResizeObservable.notifyObservers(this)
      }
      _rebuildBuffers() {
        for (const yb of this.scenes) yb.resetCachedMaterial(), yb._rebuildGeometries();
        for (const yb of this._virtualScenes) yb.resetCachedMaterial(), yb._rebuildGeometries();
        super._rebuildBuffers()
      }
      getFontOffset(yb) {
        return sy(yb)
      }
      enterPointerlock() {
        this._renderingCanvas && Ey(this._renderingCanvas)
      }
      exitPointerlock() {
        document.exitPointerLock && document.exitPointerLock()
      }
      Jm() {
        this._measureFps(), super.Jm()
      }
      _deletePipelineContext(yb) {
        const bb = yb;
        bb && bb.program && bb.transformFeedback && (this.deleteTransformFeedback(bb.transformFeedback), bb.transformFeedback = null), super._deletePipelineContext(yb)
      }
      createShaderProgram(yb, bb, Wy, Uy, hy) {
        let fy = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        hy = hy || this._gl, this.onBeforeShaderCompilationObservable.notifyObservers(this);
        const Zy = super.createShaderProgram(yb, bb, Wy, Uy, hy, fy);
        return this.onAfterShaderCompilationObservable.notifyObservers(this), Zy
      }
      _createShaderProgram(yb, bb, Wy, Uy) {
        let hy = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        const fy = Uy.createProgram();
        if (yb.program = fy, !fy) throw new Error("Unable to create program");
        if (Uy.attachShader(fy, bb), Uy.attachShader(fy, Wy), this.vf > 1 && hy) {
          const bb = this.createTransformFeedback();
          this.bindTransformFeedback(bb), this.setTranformFeedbackVaryings(fy, hy), yb.transformFeedback = bb
        }
        return Uy.linkProgram(fy), this.vf > 1 && hy && this.bindTransformFeedback(null), yb.context = Uy, yb.vertexShader = bb, yb.fragmentShader = Wy, yb.isParallelCompiled || this._finalizePipelineContext(yb), fy
      }
      _releaseTexture(yb) {
        super._releaseTexture(yb)
      }
      _releaseRenderTargetWrapper(yb) {
        super._releaseRenderTargetWrapper(yb);
        for (const bb of this.scenes) {
          for (const Wy of bb.postProcesses) Wy._outputTexture === yb && (Wy._outputTexture = null);
          for (const Wy of bb.cameras)
            for (const bb of Wy._postProcesses) bb && bb._outputTexture === yb && (bb._outputTexture = null)
        }
      }
      _rescaleTexture(yb, bb, Wy, Uy, hy) {
        this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MAG_FILTER, this._gl.LINEAR), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MIN_FILTER, this._gl.LINEAR), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_S, this._gl.CLAMP_TO_EDGE), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_T, this._gl.CLAMP_TO_EDGE);
        const fy = this.createRenderTargetTexture({
          width: bb.width,
          height: bb.height
        }, {
          generateMipMaps: !1,
          type: 0,
          samplingMode: 2,
          generateDepthBuffer: !1,
          generateStencilBuffer: !1
        });
        if (!this._rescalePostProcess && Vy._RescalePostProcessFactory && (this._rescalePostProcess = Vy._RescalePostProcessFactory(this)), this._rescalePostProcess) {
          this._rescalePostProcess.externalTextureSamplerBinding = !0;
          const Zy = () => {
              this._rescalePostProcess.onApply = function(bb) {
                bb._bindTexture("textureSampler", yb)
              };
              let Zy = Wy;
              Zy || (Zy = this.scenes[this.scenes.length - 1]), Zy.postProcessManager.directRender([this._rescalePostProcess], fy, !0), this._bindTextureDirectly(this._gl.TEXTURE_2D, bb, !0), this._gl.copyTexImage2D(this._gl.TEXTURE_2D, 0, Uy, 0, 0, bb.width, bb.height, 0), this.unBindFramebuffer(fy), fy.dispose(), hy && hy()
            },
            cb = this._rescalePostProcess.getEffect();
          cb ? cb.executeWhenCompiled(Zy) : this._rescalePostProcess.onEffectCreatedObservable.addOnce((yb => {
            yb.executeWhenCompiled(Zy)
          }))
        }
      }
      wrapWebGLTexture(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3,
          hy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          fy = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        const Zy = new Ky.c(yb, this._gl),
          cb = new Uy.d(this, 15, !0);
        return cb._hardwareTexture = Zy, cb.baseWidth = hy, cb.baseHeight = fy, cb.width = hy, cb.height = fy, cb.isReady = !0, cb.useMipMaps = bb, this.updateTextureSamplingMode(Wy, cb), cb
      }
      updateWrappedWebGLTexture(yb, bb) {
        if (15 !== yb.source) throw new Error("updateWrappedWebGLTexture: target InternalTexture was not produced by wrapWebGLTexture.");
        for (const Uy of this._renderTargetWrapperCache)
          if (Uy.textures?.includes(yb)) {
            if (Uy.isMulti) throw new Error("updateWrappedWebGLTexture: wrapped texture is part of a multi render-target; not supported. Dispose and re-wrap.");
            if (Uy._depthStencilTexture) throw new Error("updateWrappedWebGLTexture: wrapped texture's render-target wrapper has a depth/stencil texture; not supported. Dispose and re-wrap.")
          } yb._hardwareTexture = new Ky.c(bb, this._gl), yb.isReady = !0, yb._cachedCoordinatesMode = null, yb._cachedWrapU = null, yb._cachedWrapV = null, yb._cachedWrapR = null, yb._cachedAnisotropicFilteringLevel = null;
        for (const Uy in this._boundTexturesCache) this._boundTexturesCache[Uy] === yb && (this._boundTexturesCache[Uy] = null);
        this.updateTextureSamplingMode(yb.samplingMode, yb);
        const Wy = this._gl;
        for (const Uy of this._renderTargetWrapperCache) {
          if (Uy.texture !== yb) continue;
          const hy = Uy,
            fy = Uy.samples,
            Zy = fy > 1;
          hy._framebuffer && Wy.deleteFramebuffer(hy._framebuffer), !Zy && hy._depthStencilBuffer && (Wy.deleteRenderbuffer(hy._depthStencilBuffer), hy._depthStencilBuffer = null);
          const cb = this._currentFramebuffer,
            Py = Wy.createFramebuffer();
          this._bindUnboundFramebuffer(Py), Wy.framebufferTexture2D(Wy.FRAMEBUFFER, Wy.COLOR_ATTACHMENT0, Wy.TEXTURE_2D, bb, 0), Zy || (hy._depthStencilBuffer = this._setupFramebufferDepthAttachments(Uy._generateStencilBuffer, Uy._generateDepthBuffer, Uy.width, Uy.height)), this._bindUnboundFramebuffer(cb), hy._framebuffer = Py, Zy && (Uy._samples = 1, this.updateRenderTargetTextureSampleCount(hy, fy))
        }
      }
      _uploadImageToTexture(yb, bb) {
        let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Uy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const hy = this._gl,
          fy = this._getWebGLTextureType(yb.type),
          Zy = this._getInternalFormat(yb.format),
          cb = this._getRGBABufferInternalSizedFormat(yb.type, Zy),
          Py = yb.isCube ? hy.TEXTURE_CUBE_MAP : hy.TEXTURE_2D;
        this._bindTextureDirectly(Py, yb, !0), this._unpackFlipY(yb.invertY);
        let oy = hy.TEXTURE_2D;
        yb.isCube && (oy = hy.TEXTURE_CUBE_MAP_POSITIVE_X + Wy), hy.texImage2D(oy, Uy, cb, Zy, fy, bb), this._bindTextureDirectly(Py, null, !0)
      }
      updateTextureComparisonFunction(yb, bb) {
        if (1 === this.vf) return void By.b.Error("WebGL 1 does not support texture comparison.");
        const Wy = this._gl;
        yb.isCube ? (this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, yb, !0), 0 === bb ? (Wy.texParameteri(Wy.TEXTURE_CUBE_MAP, Wy.TEXTURE_COMPARE_FUNC, 515), Wy.texParameteri(Wy.TEXTURE_CUBE_MAP, Wy.TEXTURE_COMPARE_MODE, Wy.NONE)) : (Wy.texParameteri(Wy.TEXTURE_CUBE_MAP, Wy.TEXTURE_COMPARE_FUNC, bb), Wy.texParameteri(Wy.TEXTURE_CUBE_MAP, Wy.TEXTURE_COMPARE_MODE, Wy.COMPARE_REF_TO_TEXTURE)), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null)) : (this._bindTextureDirectly(this._gl.TEXTURE_2D, yb, !0), 0 === bb ? (Wy.texParameteri(Wy.TEXTURE_2D, Wy.TEXTURE_COMPARE_FUNC, 515), Wy.texParameteri(Wy.TEXTURE_2D, Wy.TEXTURE_COMPARE_MODE, Wy.NONE)) : (Wy.texParameteri(Wy.TEXTURE_2D, Wy.TEXTURE_COMPARE_FUNC, bb), Wy.texParameteri(Wy.TEXTURE_2D, Wy.TEXTURE_COMPARE_MODE, Wy.COMPARE_REF_TO_TEXTURE)), this._bindTextureDirectly(this._gl.TEXTURE_2D, null)), yb._comparisonFunction = bb
      }
      createInstancesBuffer(yb) {
        const bb = this._gl.createBuffer();
        if (!bb) throw new Error("Unable to create instance buffer");
        const Wy = new oy.c(bb);
        return Wy.Hy = yb, this.bindArrayBuffer(Wy), this._gl.bufferData(this._gl.ARRAY_BUFFER, yb, this._gl.DYNAMIC_DRAW), Wy.references = 1, Wy
      }
      deleteInstancesBuffer(yb) {
        this._gl.deleteBuffer(yb)
      }
      async _clientWaitAsync(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10;
        const Uy = this._gl;
        return await new Promise(((hy, fy) => {
          (0, mb.c)((() => {
            const Wy = Uy.clientWaitSync(yb, bb, 0);
            if (Wy == Uy.WAIT_FAILED) throw new Error("clientWaitSync failed");
            return Wy != Uy.TIMEOUT_EXPIRED
          }), hy, fy, Wy)
        }))
      }
      _readPixelsAsync(yb, bb, Wy, Uy, hy, fy, Zy) {
        if (this._webGLVersion < 2) throw new Error("_readPixelsAsync only work on WebGL2+");
        const cb = this._gl,
          Py = cb.createBuffer();
        cb.bindBuffer(cb.PIXEL_PACK_BUFFER, Py), cb.bufferData(cb.PIXEL_PACK_BUFFER, Zy.byteLength, cb.STREAM_READ), cb.readPixels(yb, bb, Wy, Uy, hy, fy, 0), cb.bindBuffer(cb.PIXEL_PACK_BUFFER, null);
        const oy = cb.fenceSync(cb.SYNC_GPU_COMMANDS_COMPLETE, 0);
        return oy ? (cb.flush(), this._clientWaitAsync(oy, 0, 10).then((() => (cb.deleteSync(oy), cb.bindBuffer(cb.PIXEL_PACK_BUFFER, Py), cb.getBufferSubData(cb.PIXEL_PACK_BUFFER, 0, Zy), cb.bindBuffer(cb.PIXEL_PACK_BUFFER, null), cb.deleteBuffer(Py), Zy)))) : null
      }
      dispose() {
        this.hideLoadingUI?.(), this._rescalePostProcess && this._rescalePostProcess.dispose(),
          function(yb, bb) {
            1 === hy.c.Instances.length && ey.d.audioEngine && (ey.d.audioEngine.dispose(), ey.d.audioEngine = null);
            const Wy = yb.getHostWindow();
            Wy && "function" === typeof Wy.removeEventListener && (Wy.removeEventListener("blur", yb._onBlur), Wy.removeEventListener("focus", yb._onFocus)), bb && (bb.removeEventListener("focus", yb._onCanvasFocus), bb.removeEventListener("blur", yb._onCanvasBlur), bb.removeEventListener("pointerout", yb._onCanvasPointerOut), bb.removeEventListener("contextmenu", yb._onCanvasContextMenu)), (0, qb.f)() && (document.removeEventListener("fullscreenchange", yb._onFullscreenChange), document.removeEventListener("mozfullscreenchange", yb._onFullscreenChange), document.removeEventListener("webkitfullscreenchange", yb._onFullscreenChange), document.removeEventListener("msfullscreenchange", yb._onFullscreenChange), document.removeEventListener("pointerlockchange", yb._onPointerLockChange), document.removeEventListener("mspointerlockchange", yb._onPointerLockChange), document.removeEventListener("mozpointerlockchange", yb._onPointerLockChange), document.removeEventListener("webkitpointerlockchange", yb._onPointerLockChange))
          }(this, this._renderingCanvas), super.dispose()
      }
    }
    Vy.ALPHA_DISABLE = 0, Vy.ALPHA_ADD = 1, Vy.ALPHA_COMBINE = 2, Vy.ALPHA_SUBTRACT = 3, Vy.ALPHA_MULTIPLY = 4, Vy.ALPHA_MAXIMIZED = 5, Vy.ALPHA_ONEONE = 6, Vy.ALPHA_PREMULTIPLIED = 7, Vy.ALPHA_PREMULTIPLIED_PORTERDUFF = 8, Vy.ALPHA_INTERPOLATE = 9, Vy.ALPHA_SCREENMODE = 10, Vy.DELAYLOADSTATE_NONE = 0, Vy.DELAYLOADSTATE_LOADED = 1, Vy.DELAYLOADSTATE_LOADING = 2, Vy.DELAYLOADSTATE_NOTLOADED = 4, Vy.NEVER = 512, Vy.ALWAYS = 519, Vy.LESS = 513, Vy.EQUAL = 514, Vy.LEQUAL = 515, Vy.GREATER = 516, Vy.GEQUAL = 518, Vy.NOTEQUAL = 517, Vy.KEEP = 7680, Vy.REPLACE = 7681, Vy.INCR = 7682, Vy.DECR = 7683, Vy.INVERT = 5386, Vy.INCR_WRAP = 34055, Vy.DECR_WRAP = 34056, Vy.TEXTURE_CLAMP_ADDRESSMODE = 0, Vy.TEXTURE_WRAP_ADDRESSMODE = 1, Vy.TEXTURE_MIRROR_ADDRESSMODE = 2, Vy.TEXTUREFORMAT_ALPHA = 0, Vy.TEXTUREFORMAT_LUMINANCE = 1, Vy.TEXTUREFORMAT_LUMINANCE_ALPHA = 2, Vy.TEXTUREFORMAT_RGB = 4, Vy.TEXTUREFORMAT_RGBA = 5, Vy.TEXTUREFORMAT_RED = 6, Vy.TEXTUREFORMAT_R = 6, Vy.TEXTUREFORMAT_R16_UNORM = 33322, Vy.TEXTUREFORMAT_RG16_UNORM = 33324, Vy.TEXTUREFORMAT_RGB16_UNORM = 32852, Vy.TEXTUREFORMAT_RGBA16_UNORM = 32859, Vy.TEXTUREFORMAT_R16_SNORM = 36760, Vy.TEXTUREFORMAT_RG16_SNORM = 36761, Vy.TEXTUREFORMAT_RGB16_SNORM = 36762, Vy.TEXTUREFORMAT_RGBA16_SNORM = 36763, Vy.TEXTUREFORMAT_RG = 7, Vy.TEXTUREFORMAT_RED_INTEGER = 8, Vy.TEXTUREFORMAT_R_INTEGER = 8, Vy.TEXTUREFORMAT_RG_INTEGER = 9, Vy.TEXTUREFORMAT_RGB_INTEGER = 10, Vy.TEXTUREFORMAT_RGBA_INTEGER = 11, Vy.TEXTURETYPE_UNSIGNED_BYTE = 0, Vy.TEXTURETYPE_UNSIGNED_INT = 0, Vy.TEXTURETYPE_FLOAT = 1, Vy.TEXTURETYPE_HALF_FLOAT = 2, Vy.TEXTURETYPE_BYTE = 3, Vy.TEXTURETYPE_SHORT = 4, Vy.TEXTURETYPE_UNSIGNED_SHORT = 5, Vy.TEXTURETYPE_INT = 6, Vy.TEXTURETYPE_UNSIGNED_INTEGER = 7, Vy.TEXTURETYPE_UNSIGNED_SHORT_4_4_4_4 = 8, Vy.TEXTURETYPE_UNSIGNED_SHORT_5_5_5_1 = 9, Vy.TEXTURETYPE_UNSIGNED_SHORT_5_6_5 = 10, Vy.TEXTURETYPE_UNSIGNED_INT_2_10_10_10_REV = 11, Vy.TEXTURETYPE_UNSIGNED_INT_24_8 = 12, Vy.TEXTURETYPE_UNSIGNED_INT_10F_11F_11F_REV = 13, Vy.TEXTURETYPE_UNSIGNED_INT_5_9_9_9_REV = 14, Vy.TEXTURETYPE_FLOAT_32_UNSIGNED_INT_24_8_REV = 15, Vy.TEXTURE_NEAREST_SAMPLINGMODE = 1, Vy.TEXTURE_BILINEAR_SAMPLINGMODE = 2, Vy.TEXTURE_TRILINEAR_SAMPLINGMODE = 3, Vy.TEXTURE_NEAREST_NEAREST_MIPLINEAR = 8, Vy.TEXTURE_LINEAR_LINEAR_MIPNEAREST = 11, Vy.TEXTURE_LINEAR_LINEAR_MIPLINEAR = 3, Vy.TEXTURE_NEAREST_NEAREST_MIPNEAREST = 4, Vy.TEXTURE_NEAREST_LINEAR_MIPNEAREST = 5, Vy.TEXTURE_NEAREST_LINEAR_MIPLINEAR = 6, Vy.TEXTURE_NEAREST_LINEAR = 7, Vy.TEXTURE_NEAREST_NEAREST = 1, Vy.TEXTURE_LINEAR_NEAREST_MIPNEAREST = 9, Vy.TEXTURE_LINEAR_NEAREST_MIPLINEAR = 10, Vy.TEXTURE_LINEAR_LINEAR = 2, Vy.TEXTURE_LINEAR_NEAREST = 12, Vy.TEXTURE_EXPLICIT_MODE = 0, Vy.TEXTURE_SPHERICAL_MODE = 1, Vy.TEXTURE_PLANAR_MODE = 2, Vy.TEXTURE_CUBIC_MODE = 3, Vy.TEXTURE_PROJECTION_MODE = 4, Vy.TEXTURE_SKYBOX_MODE = 5, Vy.TEXTURE_INVCUBIC_MODE = 6, Vy.TEXTURE_EQUIRECTANGULAR_MODE = 7, Vy.TEXTURE_FIXED_EQUIRECTANGULAR_MODE = 8, Vy.TEXTURE_FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9, Vy.SCALEMODE_FLOOR = 1, Vy.SCALEMODE_NEAREST = 2, Vy.SCALEMODE_CEILING = 3
  },
  38451: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => hy
    });
    var Uy = Wy(38414);
    class hy {
      get depthStencilTexture() {
        return this._depthStencilTexture
      }
      setDepthStencilTexture(yb) {
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && this._depthStencilTexture && this._depthStencilTexture.dispose(), this._depthStencilTexture = yb, this._generateDepthBuffer = this._generateStencilBuffer = this._depthStencilTextureWithStencil = !1, yb && (this._generateDepthBuffer = !0, this._generateStencilBuffer = this._depthStencilTextureWithStencil = (0, Uy.c)(yb.format))
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
      getBaseArrayLayer(yb) {
        if (!this._textures) return -1;
        const bb = this._textures[yb],
          Wy = this._layerIndices?.[yb] ?? 0,
          Uy = this._faceIndices?.[yb] ?? 0;
        return bb.isCube ? 6 * Wy + Uy : bb.is3D ? 0 : Wy
      }
      get samples() {
        return this._samples
      }
      setSamples(yb) {
        let bb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          Wy = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.samples === yb && !Wy) return yb;
        const Uy = this._isMulti ? this._engine.updateMultipleRenderTargetTextureSampleCount(this, yb, bb) : this._engine.updateRenderTargetTextureSampleCount(this, yb);
        return this._samples = yb, Uy
      }
      resolveMSAATextures() {
        this.isMulti ? this._engine.resolveMultiFramebuffer(this) : this._engine.resolveFramebuffer(this)
      }
      generateMipMaps() {
        this._engine._currentRenderTarget === this && (this.isMulti ? this._engine.unBindMultiColorAttachmentFramebuffer(this, !0) : this._engine.unBindFramebuffer(this, !0)), this.isMulti ? this._engine.generateMipMapsMultiFramebuffer(this) : this._engine.generateMipMapsFramebuffer(this)
      }
      constructor(yb, bb, Wy, Uy, hy) {
        this._textures = null, this._faceIndices = null, this._layerIndices = null, this._samples = 1, this._attachments = null, this._generateStencilBuffer = !1, this._generateDepthBuffer = !1, this._depthStencilTextureWithStencil = !1, this.disableAutomaticMSAAResolve = !1, this.resolveMSAAColors = !0, this.resolveMSAADepth = !1, this.resolveMSAAStencil = !1, this.depthReadOnly = !1, this.stencilReadOnly = !1, this._isMulti = yb, this._isCube = bb, this._size = Wy, this._engine = Uy, this._depthStencilTexture = null, this.label = hy
      }
      setTextures(yb) {
        Array.isArray(yb) ? this._textures = yb : this._textures = yb ? [yb] : null
      }
      setTexture(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Wy = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._textures || (this._textures = []), this._textures[bb] !== yb && (this._textures[bb] && Wy && this._textures[bb].dispose(), this._textures[bb] = yb)
      }
      setLayerAndFaceIndices(yb, bb) {
        this._layerIndices = yb, this._faceIndices = bb
      }
      setLayerAndFaceIndex() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          bb = arguments.length > 1 ? arguments[1] : void 0,
          Wy = arguments.length > 2 ? arguments[2] : void 0;
        this._layerIndices || (this._layerIndices = []), this._faceIndices || (this._faceIndices = []), void 0 !== bb && bb >= 0 && (this._layerIndices[yb] = bb), void 0 !== Wy && Wy >= 0 && (this._faceIndices[yb] = Wy)
      }
      createDepthStencilTexture() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          bb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          Wy = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Uy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          hy = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          fy = arguments.length > 5 ? arguments[5] : void 0;
        return this._depthStencilTexture?.dispose(), this._depthStencilTextureWithStencil = Wy, this._depthStencilTextureLabel = fy, this._depthStencilTexture = this._engine.createDepthStencilTexture(this._size, {
          bilinearFiltering: bb,
          comparisonFunction: yb,
          generateStencil: Wy,
          isCube: this._isCube,
          samples: Uy,
          depthTextureFormat: hy,
          label: fy
        }, this), this._depthStencilTexture
      }
      _shareDepth(yb) {
        this.shareDepth(yb)
      }
      shareDepth(yb) {
        this._depthStencilTexture && (yb._depthStencilTexture && yb._depthStencilTexture.dispose(), yb._depthStencilTexture = this._depthStencilTexture, yb._depthStencilTextureWithStencil = this._depthStencilTextureWithStencil, this._depthStencilTexture.incrementReferences())
      }
      _swapAndDie(yb) {
        this.texture && this.texture._swapAndDie(yb), this._textures = null, this.dispose(!0)
      }
      _cloneRenderTargetWrapper() {
        let yb = null;
        if (this._isMulti) {
          const bb = this.textures;
          if (bb && bb.length > 0) {
            let Wy = !1,
              Uy = bb.length,
              hy = -1;
            const fy = bb[bb.length - 1]._source;
            14 !== fy && 12 !== fy || (Wy = !0, hy = bb[bb.length - 1].format, Uy--);
            const Zy = [],
              cb = [],
              Py = [],
              oy = [],
              By = [],
              Ky = [],
              ey = [],
              qb = {};
            for (let yb = 0; yb < Uy; ++yb) {
              const Wy = bb[yb];
              Zy.push(Wy.samplingMode), cb.push(Wy.type), Py.push(Wy.format);
              void 0 !== qb[Wy.uniqueId] ? (oy.push(-1), ey.push(0)) : (qb[Wy.uniqueId] = yb, Wy.is2DArray ? (oy.push(35866), ey.push(Wy.depth)) : Wy.isCube ? (oy.push(34067), ey.push(0)) : Wy.is3D ? (oy.push(32879), ey.push(Wy.depth)) : (oy.push(3553), ey.push(0))), this._faceIndices && By.push(this._faceIndices[yb] ?? 0), this._layerIndices && Ky.push(this._layerIndices[yb] ?? 0)
            }
            const sy = {
                samplingModes: Zy,
                generateMipMaps: bb[0].generateMipMaps,
                generateDepthBuffer: this._generateDepthBuffer,
                generateStencilBuffer: this._generateStencilBuffer,
                generateDepthTexture: Wy,
                depthTextureFormat: hy,
                types: cb,
                formats: Py,
                Yqy: Uy,
                targetTypes: oy,
                faceIndex: By,
                layerIndex: Ky,
                layerCounts: ey,
                label: this.label
              },
              Sy = {
                width: this.width,
                height: this.height,
                depth: this.depth
              };
            yb = this._engine.createMultipleRenderTarget(Sy, sy);
            for (let Ey = 0; Ey < Uy; ++Ey) {
              if (-1 !== oy[Ey]) continue;
              const Wy = qb[bb[Ey].uniqueId];
              yb.setTexture(yb.textures[Wy], Ey)
            }
          }
        } else {
          const bb = {};
          if (bb.generateDepthBuffer = this._generateDepthBuffer, bb.generateMipMaps = this.texture?.generateMipMaps ?? !1, bb.generateStencilBuffer = this._generateStencilBuffer, bb.samplingMode = this.texture?.samplingMode, bb.type = this.texture?.type, bb.format = this.texture?.format, bb.noColorAttachment = !this._textures, bb.label = this.label, this.isCube) yb = this._engine.createRenderTargetCubeTexture(this.width, bb);
          else {
            const Wy = {
              width: this.width,
              height: this.height,
              layers: this.is2DArray || this.is3D ? this.texture?.depth : void 0
            };
            yb = this._engine.createRenderTargetTexture(Wy, bb)
          }
          yb.texture && (yb.texture.isReady = !0)
        }
        return yb
      }
      _swapRenderTargetWrapper(yb) {
        if (this._textures && yb._textures)
          for (let bb = 0; bb < this._textures.length; ++bb) this._textures[bb]._swapAndDie(yb._textures[bb], !1), yb._textures[bb].isReady = !0;
        this._depthStencilTexture && yb._depthStencilTexture && (this._depthStencilTexture._swapAndDie(yb._depthStencilTexture), yb._depthStencilTexture.isReady = !0), this._textures = null, this._depthStencilTexture = null
      }
      _rebuild() {
        const yb = this._cloneRenderTargetWrapper();
        if (yb) {
          if (this._depthStencilTexture) {
            const bb = this._depthStencilTexture.samplingMode,
              Wy = this._depthStencilTexture.format,
              Uy = 2 === bb || 3 === bb || 11 === bb;
            yb.createDepthStencilTexture(this._depthStencilTexture._comparisonFunction, Uy, this._depthStencilTextureWithStencil, this._depthStencilTexture.samples, Wy, this._depthStencilTextureLabel)
          }
          this.samples > 1 && yb.setSamples(this.samples), yb._swapRenderTargetWrapper(this), yb.dispose()
        }
      }
      releaseTextures() {
        if (this._textures)
          for (let yb = 0; yb < this._textures.length; ++yb) this._textures[yb].dispose();
        this._textures = null
      }
      dispose() {
        arguments.length > 0 && void 0 !== arguments[0] && arguments[0] || (this._depthStencilTexture?.dispose(), this._depthStencilTexture = null, this.releaseTextures()), this._engine._releaseRenderTargetWrapper(this)
      }
    }
  },
  38929: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => Uy
    });
    class Uy {
      static get ForceFullSceneLoadingForIncremental() {
        return Uy._ForceFullSceneLoadingForIncremental
      }
      static set ForceFullSceneLoadingForIncremental(yb) {
        Uy._ForceFullSceneLoadingForIncremental = yb
      }
      static get ShowLoadingScreen() {
        return Uy._ShowLoadingScreen
      }
      static set ShowLoadingScreen(yb) {
        Uy._ShowLoadingScreen = yb
      }
      static get loggingLevel() {
        return Uy._LoggingLevel
      }
      static set loggingLevel(yb) {
        Uy._LoggingLevel = yb
      }
      static get CleanBoneMatrixWeights() {
        return Uy._CleanBoneMatrixWeights
      }
      static set CleanBoneMatrixWeights(yb) {
        Uy._CleanBoneMatrixWeights = yb
      }
    }
    Uy._ForceFullSceneLoadingForIncremental = !1, Uy._ShowLoadingScreen = !0, Uy._CleanBoneMatrixWeights = !1, Uy._LoggingLevel = 0
  },
  38558: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => Zy
    });
    var Uy = Wy(37350);
    const hy = new Map;

    function fy(yb, bb) {
      (function(yb) {
        return hy.delete(yb)
      })(yb) && Uy.b.Warn(`Extension with the name '${yb}' already exists`), hy.set(yb, bb)
    }

    function Zy(yb, bb) {
      "image/ktx" !== bb && "image/ktx2" !== bb || (yb = ".ktx"), hy.has(yb) || (yb.endsWith(".ies") && fy(".ies", (async () => await Wy.e(287).then((() => Wy(40248))).then((yb => new yb._IESTextureLoader)))), yb.endsWith(".dds") && fy(".dds", (async () => await Wy.e(285).then((() => Wy(40251))).then((yb => new yb._DDSTextureLoader)))), yb.endsWith(".basis") && fy(".basis", (async () => await Wy.e(288).then((() => Wy(40258))).then((yb => new yb._BasisTextureLoader)))), yb.endsWith(".env") && fy(".env", (async () => await Promise.all([Wy.e(289), Wy.e(286)]).then((() => Wy(40265))).then((yb => new yb._ENVTextureLoader)))), yb.endsWith(".hdr") && fy(".hdr", (async () => await Wy.e(290).then((() => Wy(40321))).then((yb => new yb._HDRTextureLoader)))), (yb.endsWith(".ktx") || yb.endsWith(".ktx2")) && (fy(".ktx", (async () => await Wy.e(291).then((() => Wy(40328))).then((yb => new yb._KTXTextureLoader)))), fy(".ktx2", (async () => await Wy.e(291).then((() => Wy(40328))).then((yb => new yb._KTXTextureLoader))))), yb.endsWith(".tga") && fy(".tga", (async () => await Wy.e(292).then((() => Wy(40344))).then((yb => new yb._TGATextureLoader)))), yb.endsWith(".exr") && fy(".exr", (async () => await Wy.e(293).then((() => Wy(40346))).then((yb => new yb._ExrTextureLoader)))));
      const Uy = hy.get(yb);
      return Uy ? Promise.resolve(Uy(bb)) : null
    }
  },
  38957: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => Zy,
      f: () => oy
    });
    var Uy = Wy(38782),
      hy = Wy(38494),
      fy = Wy(35909);
    class Zy extends Uy.e {
      get gcy() {
        return this._subMaterials
      }
      set gcy(yb) {
        this._subMaterials = yb, this._hookArray(yb)
      }
      getChildren() {
        return this.gcy
      }
      constructor(yb, bb) {
        super(yb, bb, !0), this._waitingSubMaterialsUniqueIds = [], this.kWy().addMultiMaterial(this), this.gcy = [], this._storeEffectOnSubMeshes = !0
      }
      _hookArray(yb) {
        var bb = this;
        const Wy = yb.push;
        yb.push = function() {
          for (var Uy = arguments.length, hy = new Array(Uy), fy = 0; fy < Uy; fy++) hy[fy] = arguments[fy];
          const Zy = Wy.apply(yb, hy);
          return bb._markAllSubMeshesAsTexturesDirty(), Zy
        };
        const Uy = yb.splice;
        yb.splice = (bb, Wy) => {
          const hy = Uy.call(yb, bb, Wy ?? yb.length);
          return this._markAllSubMeshesAsTexturesDirty(), hy
        }
      }
      getSubMaterial(yb) {
        return yb < 0 || yb >= this.gcy.length ? this.kWy().defaultMaterial : this.gcy[yb]
      }
      getActiveTextures() {
        return super.getActiveTextures().concat(...this.gcy.map((yb => yb ? yb.getActiveTextures() : [])))
      }
      hasTexture(yb) {
        if (super.hasTexture(yb)) return !0;
        for (let bb = 0; bb < this.gcy.length; bb++)
          if (this.gcy[bb]?.hasTexture(yb)) return !0;
        return !1
      }
      getClassName() {
        return "MultiMaterial"
      }
      isReadyForSubMesh(yb, bb, Wy) {
        for (let Uy = 0; Uy < this.gcy.length; Uy++) {
          const hy = this.gcy[Uy];
          if (hy) {
            if (hy._storeEffectOnSubMeshes) {
              if (!hy.isReadyForSubMesh(yb, bb, Wy)) return !1;
              continue
            }
            if (!hy.isReady(yb)) return !1
          }
        }
        return !0
      }
      clone(yb, bb) {
        const Wy = new Zy(yb, this.kWy());
        for (let Uy = 0; Uy < this.gcy.length; Uy++) {
          let hy;
          const fy = this.gcy[Uy];
          hy = bb && fy ? fy.clone(yb + "-" + fy.name) : this.gcy[Uy], Wy.gcy.push(hy)
        }
        return Wy
      }
      serialize() {
        const yb = {};
        yb.name = this.name, yb.id = this.id, yb.uniqueId = this.uniqueId, hy.c && (yb.tags = hy.c.GetTags(this)), yb.materialsUniqueIds = [], yb.materials = [];
        for (let bb = 0; bb < this.gcy.length; bb++) {
          const Wy = this.gcy[bb];
          Wy ? (yb.materialsUniqueIds.push(Wy.uniqueId), yb.materials.push(Wy.id)) : (yb.materialsUniqueIds.push(null), yb.materials.push(null))
        }
        return yb
      }
      dispose(yb, bb, Wy) {
        const Uy = this.kWy();
        if (!Uy) return;
        if (Wy)
          for (let fy = 0; fy < this.gcy.length; fy++) {
            const Wy = this.gcy[fy];
            Wy && Wy.dispose(yb, bb)
          }
        const hy = Uy.multiMaterials.indexOf(this);
        hy >= 0 && Uy.multiMaterials.splice(hy, 1), super.dispose(yb, bb)
      }
    }
    let cb = !1;

    function Py(yb, bb) {
      const Wy = new Zy(yb.name, bb);
      if (Wy.id = yb.id, Wy._loadedUniqueId = yb.uniqueId, hy.c && hy.c.AddTagsTo(Wy, yb.tags), yb.materialsUniqueIds) Wy._waitingSubMaterialsUniqueIds = yb.materialsUniqueIds;
      else
        for (const Uy of yb.materials) Wy.gcy.push(bb.getLastMaterialById(Uy));
      return Wy
    }

    function oy() {
      cb || (cb = !0, Zy.ParseMultiMaterial = Py, (0, fy.e)("BABYLON.MultiMaterial", Zy))
    }
  },
  38706: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => Zy
    });
    var Uy, hy, fy = Wy(35861);
    ! function(yb) {
      yb[yb.LOCAL = 0] = "LOCAL", yb[yb.WORLD = 1] = "WORLD", yb[yb.BONE = 2] = "BONE"
    }(Uy || (Uy = {}));
    class Zy {}
    Zy.X = new fy.n(1, 0, 0), Zy.Y = new fy.n(0, 1, 0), Zy.Z = new fy.n(0, 0, 1),
      function(yb) {
        yb[yb.X = 0] = "X", yb[yb.Y = 1] = "Y", yb[yb.Z = 2] = "Z"
      }(hy || (hy = {}))
  },
  38453: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => Py,
      f: () => oy
    });
    var Uy = Wy(35861);
    const hy = [Math.sqrt(1 / (4 * Math.PI)), -Math.sqrt(3 / (4 * Math.PI)), Math.sqrt(3 / (4 * Math.PI)), -Math.sqrt(3 / (4 * Math.PI)), Math.sqrt(15 / (4 * Math.PI)), -Math.sqrt(15 / (4 * Math.PI)), Math.sqrt(5 / (16 * Math.PI)), -Math.sqrt(15 / (4 * Math.PI)), Math.sqrt(15 / (16 * Math.PI))],
      fy = [() => 1, yb => yb.y, yb => yb.z, yb => yb.x, yb => yb.x * yb.y, yb => yb.y * yb.z, yb => 3 * yb.z * yb.z - 1, yb => yb.x * yb.z, yb => yb.x * yb.x - yb.y * yb.y],
      Zy = (yb, bb) => hy[yb] * fy[yb](bb),
      cb = [Math.PI, 2 * Math.PI / 3, 2 * Math.PI / 3, 2 * Math.PI / 3, Math.PI / 4, Math.PI / 4, Math.PI / 4, Math.PI / 4, Math.PI / 4];
    class Py {
      constructor() {
        this.preScaled = !1, this.l00 = Uy.n.Zero(), this.l1_1 = Uy.n.Zero(), this.l10 = Uy.n.Zero(), this.l11 = Uy.n.Zero(), this.l2_2 = Uy.n.Zero(), this.l2_1 = Uy.n.Zero(), this.l20 = Uy.n.Zero(), this.l21 = Uy.n.Zero(), this.l22 = Uy.n.Zero()
      }
      addLight(yb, bb, Wy) {
        Uy.j.dU[0].set(bb.r, bb.g, bb.b);
        const hy = Uy.j.dU[0],
          fy = Uy.j.dU[1];
        hy.scaleToRef(Wy, fy), fy.scaleToRef(Zy(0, yb), Uy.j.dU[2]), this.l00.addInPlace(Uy.j.dU[2]), fy.scaleToRef(Zy(1, yb), Uy.j.dU[2]), this.l1_1.addInPlace(Uy.j.dU[2]), fy.scaleToRef(Zy(2, yb), Uy.j.dU[2]), this.l10.addInPlace(Uy.j.dU[2]), fy.scaleToRef(Zy(3, yb), Uy.j.dU[2]), this.l11.addInPlace(Uy.j.dU[2]), fy.scaleToRef(Zy(4, yb), Uy.j.dU[2]), this.l2_2.addInPlace(Uy.j.dU[2]), fy.scaleToRef(Zy(5, yb), Uy.j.dU[2]), this.l2_1.addInPlace(Uy.j.dU[2]), fy.scaleToRef(Zy(6, yb), Uy.j.dU[2]), this.l20.addInPlace(Uy.j.dU[2]), fy.scaleToRef(Zy(7, yb), Uy.j.dU[2]), this.l21.addInPlace(Uy.j.dU[2]), fy.scaleToRef(Zy(8, yb), Uy.j.dU[2]), this.l22.addInPlace(Uy.j.dU[2])
      }
      scaleInPlace(yb) {
        this.l00.scaleInPlace(yb), this.l1_1.scaleInPlace(yb), this.l10.scaleInPlace(yb), this.l11.scaleInPlace(yb), this.l2_2.scaleInPlace(yb), this.l2_1.scaleInPlace(yb), this.l20.scaleInPlace(yb), this.l21.scaleInPlace(yb), this.l22.scaleInPlace(yb)
      }
      convertIncidentRadianceToIrradiance() {
        this.l00.scaleInPlace(cb[0]), this.l1_1.scaleInPlace(cb[1]), this.l10.scaleInPlace(cb[2]), this.l11.scaleInPlace(cb[3]), this.l2_2.scaleInPlace(cb[4]), this.l2_1.scaleInPlace(cb[5]), this.l20.scaleInPlace(cb[6]), this.l21.scaleInPlace(cb[7]), this.l22.scaleInPlace(cb[8])
      }
      convertIrradianceToLambertianRadiance() {
        this.scaleInPlace(1 / Math.PI)
      }
      preScaleForRendering() {
        this.preScaled = !0, this.l00.scaleInPlace(hy[0]), this.l1_1.scaleInPlace(hy[1]), this.l10.scaleInPlace(hy[2]), this.l11.scaleInPlace(hy[3]), this.l2_2.scaleInPlace(hy[4]), this.l2_1.scaleInPlace(hy[5]), this.l20.scaleInPlace(hy[6]), this.l21.scaleInPlace(hy[7]), this.l22.scaleInPlace(hy[8])
      }
      updateFromArray(yb) {
        return Uy.n.FromArrayToRef(yb[0], 0, this.l00), Uy.n.FromArrayToRef(yb[1], 0, this.l1_1), Uy.n.FromArrayToRef(yb[2], 0, this.l10), Uy.n.FromArrayToRef(yb[3], 0, this.l11), Uy.n.FromArrayToRef(yb[4], 0, this.l2_2), Uy.n.FromArrayToRef(yb[5], 0, this.l2_1), Uy.n.FromArrayToRef(yb[6], 0, this.l20), Uy.n.FromArrayToRef(yb[7], 0, this.l21), Uy.n.FromArrayToRef(yb[8], 0, this.l22), this
      }
      updateFromFloatsArray(yb) {
        return Uy.n.FromFloatsToRef(yb[0], yb[1], yb[2], this.l00), Uy.n.FromFloatsToRef(yb[3], yb[4], yb[5], this.l1_1), Uy.n.FromFloatsToRef(yb[6], yb[7], yb[8], this.l10), Uy.n.FromFloatsToRef(yb[9], yb[10], yb[11], this.l11), Uy.n.FromFloatsToRef(yb[12], yb[13], yb[14], this.l2_2), Uy.n.FromFloatsToRef(yb[15], yb[16], yb[17], this.l2_1), Uy.n.FromFloatsToRef(yb[18], yb[19], yb[20], this.l20), Uy.n.FromFloatsToRef(yb[21], yb[22], yb[23], this.l21), Uy.n.FromFloatsToRef(yb[24], yb[25], yb[26], this.l22), this
      }
      static FromArray(yb) {
        return (new Py).updateFromArray(yb)
      }
      static FromPolynomial(yb) {
        const bb = new Py;
        return bb.l00 = yb.xx.scale(.376127).add(yb.yy.scale(.376127)).add(yb.zz.scale(.376126)), bb.l1_1 = yb.y.scale(.977204), bb.l10 = yb.z.scale(.977204), bb.l11 = yb.x.scale(.977204), bb.l2_2 = yb.xy.scale(1.16538), bb.l2_1 = yb.yz.scale(1.16538), bb.l20 = yb.zz.scale(1.34567).subtract(yb.xx.scale(.672834)).subtract(yb.yy.scale(.672834)), bb.l21 = yb.zx.scale(1.16538), bb.l22 = yb.xx.scale(1.16538).subtract(yb.yy.scale(1.16538)), bb.l1_1.scaleInPlace(-1), bb.l11.scaleInPlace(-1), bb.l2_1.scaleInPlace(-1), bb.l21.scaleInPlace(-1), bb.scaleInPlace(Math.PI), bb
      }
    }
    class oy {
      constructor() {
        this.x = Uy.n.Zero(), this.y = Uy.n.Zero(), this.z = Uy.n.Zero(), this.xx = Uy.n.Zero(), this.yy = Uy.n.Zero(), this.zz = Uy.n.Zero(), this.xy = Uy.n.Zero(), this.yz = Uy.n.Zero(), this.zx = Uy.n.Zero()
      }
      get preScaledHarmonics() {
        return this._harmonics || (this._harmonics = Py.FromPolynomial(this)), this._harmonics.preScaled || this._harmonics.preScaleForRendering(), this._harmonics
      }
      addAmbient(yb) {
        Uy.j.dU[0].vcy(yb.r, yb.g, yb.b);
        const bb = Uy.j.dU[0];
        this.xx.addInPlace(bb), this.yy.addInPlace(bb), this.zz.addInPlace(bb)
      }
      scaleInPlace(yb) {
        this.x.scaleInPlace(yb), this.y.scaleInPlace(yb), this.z.scaleInPlace(yb), this.xx.scaleInPlace(yb), this.yy.scaleInPlace(yb), this.zz.scaleInPlace(yb), this.yz.scaleInPlace(yb), this.zx.scaleInPlace(yb), this.xy.scaleInPlace(yb)
      }
      updateFromHarmonics(yb) {
        return this._harmonics = yb, this.x.Coy(yb.l11), this.x.scaleInPlace(1.02333).scaleInPlace(-1), this.y.Coy(yb.l1_1), this.y.scaleInPlace(1.02333).scaleInPlace(-1), this.z.Coy(yb.l10), this.z.scaleInPlace(1.02333), this.xx.Coy(yb.l00), Uy.j.dU[0].Coy(yb.l20).scaleInPlace(.247708), Uy.j.dU[1].Coy(yb.l22).scaleInPlace(.429043), this.xx.scaleInPlace(.886277).TBy(Uy.j.dU[0]).addInPlace(Uy.j.dU[1]), this.yy.Coy(yb.l00), this.yy.scaleInPlace(.886277).TBy(Uy.j.dU[0]).TBy(Uy.j.dU[1]), this.zz.Coy(yb.l00), Uy.j.dU[0].Coy(yb.l20).scaleInPlace(.495417), this.zz.scaleInPlace(.886277).addInPlace(Uy.j.dU[0]), this.yz.Coy(yb.l2_1), this.yz.scaleInPlace(.858086).scaleInPlace(-1), this.zx.Coy(yb.l21), this.zx.scaleInPlace(.858086).scaleInPlace(-1), this.xy.Coy(yb.l2_2), this.xy.scaleInPlace(.858086), this.scaleInPlace(1 / Math.PI), this
      }
      static FromHarmonics(yb) {
        return (new oy).updateFromHarmonics(yb)
      }
      static FromArray(yb) {
        const bb = new oy;
        return Uy.n.FromArrayToRef(yb[0], 0, bb.x), Uy.n.FromArrayToRef(yb[1], 0, bb.y), Uy.n.FromArrayToRef(yb[2], 0, bb.z), Uy.n.FromArrayToRef(yb[3], 0, bb.xx), Uy.n.FromArrayToRef(yb[4], 0, bb.yy), Uy.n.FromArrayToRef(yb[5], 0, bb.zz), Uy.n.FromArrayToRef(yb[6], 0, bb.yz), Uy.n.FromArrayToRef(yb[7], 0, bb.zx), Uy.n.FromArrayToRef(yb[8], 0, bb.xy), bb
      }
    }
  },
  38944: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => Xy,
      c: () => uy
    });
    var Uy = Wy(38464),
      hy = Wy(35893),
      fy = Wy(35861),
      Zy = Wy(38620),
      cb = Wy(38915),
      Py = Wy(38949),
      oy = Wy(38611),
      By = Wy(38797),
      Ky = Wy(38607);
    class ey {
      constructor() {
        this._checkCollisions = !1, this._collisionMask = -1, this._collisionGroup = -1, this._surroundingMeshes = null, this._collider = null, this._oldPositionForCollisions = new fy.n(0, 0, 0), this._diffPositionForCollisions = new fy.n(0, 0, 0), this._collisionResponse = !0
      }
    }
    var qb, sy, Sy, Ey = Wy(38347),
      ly = Wy(38547),
      mb = Wy(38813),
      Cy = Wy(35919),
      Ty = Wy(35864),
      Vy = Wy(38706),
      Jy = Wy(37350),
      gb = Wy(38466),
      Gy = Wy(38362),
      Oy = Wy(35909);

    function Ry(yb, bb) {
      return yb - Math.floor(yb / bb) * bb
    }

    function vb(yb, bb, Wy) {
      yb instanceof Float32Array ? fy.c.FromArrayToRef(yb, bb, Wy) : Wy.vcy((0, ly.d)(yb[bb]), (0, ly.d)(yb[bb + 1]), (0, ly.d)(yb[bb + 2]), (0, ly.d)(yb[bb + 3]), (0, ly.d)(yb[bb + 4]), (0, ly.d)(yb[bb + 5]), (0, ly.d)(yb[bb + 6]), (0, ly.d)(yb[bb + 7]), (0, ly.d)(yb[bb + 8]), (0, ly.d)(yb[bb + 9]), (0, ly.d)(yb[bb + 10]), (0, ly.d)(yb[bb + 11]), (0, ly.d)(yb[bb + 12]), (0, ly.d)(yb[bb + 13]), (0, ly.d)(yb[bb + 14]), (0, ly.d)(yb[bb + 15]))
    }

    function ib(yb, bb, Wy, Uy, hy, cb, Py, oy, By) {
      const Ky = Wy.texture,
        ey = Ky?.getInternalTexture(),
        qb = ey?._bufferView;
      if (!(qb instanceof Float32Array) && !(qb instanceof Uint16Array)) return Jy.b.Warn("Baked vertex animation bounding info requires CPU-readable Float32Array or Uint16Array texture data.", 1), !1;
      const sy = Ky.getSize(),
        Sy = function(yb, bb) {
          const Wy = yb.y - yb.x + 1,
            Uy = bb * yb.w / Wy,
            hy = Uy < 1 ? 0 : 1,
            fy = Wy - hy;
          let Zy = Ry(Uy - Math.floor(Uy), 1) * fy;
          return Zy = Ry(Zy + yb.z, fy), Math.floor(Zy) + yb.x + hy
        }(Uy, Wy.time);
      if (!isFinite(Sy) || Sy < 0 || Sy >= sy.height) return Jy.b.Warn("Baked vertex animation bounding info could not be refreshed because the computed frame is outside the texture.", 1), !1;
      const Ey = fy.j.dU[0],
        ly = fy.j.Matrix[0],
        mb = fy.j.Matrix[1],
        Cy = Sy * sy.width * 4,
        Ty = bb === Zy.k.NormalKind ? fy.n.TransformNormalFromFloatsToRef : fy.n.TransformCoordinatesFromFloatsToRef;
      for (let fy = 0, Zy = 0; fy < yb.length; fy += 3, Zy += 4) {
        let bb, Wy;
        for (ly.reset(), bb = 0; bb < 4 && bb < By; bb++) Wy = cb[Zy + bb], Wy > 0 && (vb(qb, Cy + 16 * Math.floor(hy[Zy + bb]), mb), mb.scaleAndAddToRef(Wy, ly));
        if (Py && oy)
          for (bb = 0; bb < 4 && bb + 4 < By; bb++) Wy = oy[Zy + bb], Wy > 0 && (vb(qb, Cy + 16 * Math.floor(Py[Zy + bb]), mb), mb.scaleAndAddToRef(Wy, ly));
        Ty(yb[fy], yb[fy + 1], yb[fy + 2], ly, Ey), Ey.toArray(yb, fy)
      }
      return !0
    }
    class My {
      constructor() {
        this.facetNb = 0, this.partitioningSubdivisions = 10, this.partitioningBBoxRatio = 1.01, this.facetDataEnabled = !1, this.facetParameters = {}, this.bbSize = fy.n.Zero(), this.subDiv = {
          max: 1,
          X: 1,
          Y: 1,
          Z: 1
        }, this.facetDepthSort = !1, this.facetDepthSortEnabled = !1
      }
    }
    class Yy {
      constructor() {
        this._hasVertexAlpha = !1, this._useVertexColors = !0, this._numBoneInfluencers = 4, this._applyFog = !0, this._receiveShadows = !1, this._facetData = new My, this._visibility = 1, this._skeleton = null, this._layerMask = 268435455, this._computeBonesUsingShaders = !0, this._isActive = !1, this._onlyForInstances = !1, this._isActiveIntermediate = !1, this._onlyForInstancesIntermediate = !1, this._actAsRegularMesh = !1, this._currentLOD = new Map, this._collisionRetryCount = 3, this._morphTargetManager = null, this._renderingGroupId = 0, this._meshBlendingTag = 0, this._bakedVertexAnimationManager = null, this._material = null, this._positions = null, this._pointerOverDisableMeshTesting = !1, this._meshCollisionData = new ey, this._enableDistantPicking = !1, this._rawBoundingInfo = null, this._sideOrientationHint = !1, this._wasActiveLastFrame = !1
      }
    }
    let Xy = (() => {
        var yb;
        let bb, ey = Py.f,
          qb = [];
        return yb = class extends ey {
          static get BILLBOARDMODE_NONE() {
            return Py.f.BILLBOARDMODE_NONE
          }
          static get BILLBOARDMODE_X() {
            return Py.f.BILLBOARDMODE_X
          }
          static get BILLBOARDMODE_Y() {
            return Py.f.BILLBOARDMODE_Y
          }
          static get BILLBOARDMODE_Z() {
            return Py.f.BILLBOARDMODE_Z
          }
          static get BILLBOARDMODE_ALL() {
            return Py.f.BILLBOARDMODE_ALL
          }
          static get BILLBOARDMODE_USE_POSITION() {
            return Py.f.BILLBOARDMODE_USE_POSITION
          }
          get facetNb() {
            return this._internalAbstractMeshDataInfo._facetData.facetNb
          }
          get partitioningSubdivisions() {
            return this._internalAbstractMeshDataInfo._facetData.partitioningSubdivisions
          }
          set partitioningSubdivisions(yb) {
            this._internalAbstractMeshDataInfo._facetData.partitioningSubdivisions = yb
          }
          get partitioningBBoxRatio() {
            return this._internalAbstractMeshDataInfo._facetData.partitioningBBoxRatio
          }
          set partitioningBBoxRatio(yb) {
            this._internalAbstractMeshDataInfo._facetData.partitioningBBoxRatio = yb
          }
          get mustDepthSortFacets() {
            return this._internalAbstractMeshDataInfo._facetData.facetDepthSort
          }
          set mustDepthSortFacets(yb) {
            this._internalAbstractMeshDataInfo._facetData.facetDepthSort = yb
          }
          get facetDepthSortFrom() {
            return this._internalAbstractMeshDataInfo._facetData.facetDepthSortFrom
          }
          set facetDepthSortFrom(yb) {
            this._internalAbstractMeshDataInfo._facetData.facetDepthSortFrom = yb
          }
          get collisionRetryCount() {
            return this._internalAbstractMeshDataInfo._collisionRetryCount
          }
          set collisionRetryCount(yb) {
            this._internalAbstractMeshDataInfo._collisionRetryCount = yb
          }
          get isFacetDataEnabled() {
            return this._internalAbstractMeshDataInfo._facetData.facetDataEnabled
          }
          get morphTargetManager() {
            return this._internalAbstractMeshDataInfo._morphTargetManager
          }
          set morphTargetManager(yb) {
            this._internalAbstractMeshDataInfo._morphTargetManager !== yb && (this._internalAbstractMeshDataInfo._morphTargetManager = yb, this._syncGeometryWithMorphTargetManager())
          }
          get bakedVertexAnimationManager() {
            return this._internalAbstractMeshDataInfo._bakedVertexAnimationManager
          }
          set bakedVertexAnimationManager(yb) {
            this._internalAbstractMeshDataInfo._bakedVertexAnimationManager !== yb && (this._internalAbstractMeshDataInfo._bakedVertexAnimationManager = yb, this._markSubMeshesAsAttributesDirty())
          }
          _syncGeometryWithMorphTargetManager() {}
          _updateNonUniformScalingState(yb) {
            return !!super._updateNonUniformScalingState(yb) && (this._markSubMeshesAsMiscDirty(), !0)
          }
          get rawBoundingInfo() {
            return this._internalAbstractMeshDataInfo._rawBoundingInfo
          }
          set rawBoundingInfo(yb) {
            this._internalAbstractMeshDataInfo._rawBoundingInfo = yb
          }
          set Jb(yb) {
            this._internalAbstractMeshDataInfo._meshCollisionData._onCollideObserver && this.onCollideObservable.remove(this._internalAbstractMeshDataInfo._meshCollisionData._onCollideObserver), this._internalAbstractMeshDataInfo._meshCollisionData._onCollideObserver = this.onCollideObservable.add(yb)
          }
          set onCollisionPositionChange(yb) {
            this._internalAbstractMeshDataInfo._meshCollisionData._onCollisionPositionChangeObserver && this.onCollisionPositionChangeObservable.remove(this._internalAbstractMeshDataInfo._meshCollisionData._onCollisionPositionChangeObserver), this._internalAbstractMeshDataInfo._meshCollisionData._onCollisionPositionChangeObserver = this.onCollisionPositionChangeObservable.add(yb)
          }
          get visibility() {
            return this._internalAbstractMeshDataInfo._visibility
          }
          set visibility(yb) {
            if (this._internalAbstractMeshDataInfo._visibility === yb) return;
            const bb = this._internalAbstractMeshDataInfo._visibility;
            this._internalAbstractMeshDataInfo._visibility = yb, (1 === bb && 1 !== yb || 1 !== bb && 1 === yb) && this._markSubMeshesAsDirty((yb => {
              yb.markAsMiscDirty(), yb.markAsPrePassDirty()
            }))
          }
          get pointerOverDisableMeshTesting() {
            return this._internalAbstractMeshDataInfo._pointerOverDisableMeshTesting
          }
          set pointerOverDisableMeshTesting(yb) {
            this._internalAbstractMeshDataInfo._pointerOverDisableMeshTesting = yb
          }
          get renderingGroupId() {
            return this._internalAbstractMeshDataInfo._renderingGroupId
          }
          set renderingGroupId(yb) {
            this._internalAbstractMeshDataInfo._renderingGroupId = yb
          }
          get meshBlendingTag() {
            return this._internalAbstractMeshDataInfo._meshBlendingTag
          }
          set meshBlendingTag(yb) {
            if (!Number.isInteger(yb) || yb < 0 || yb > 255 || 0 !== yb && 0 === (63 & yb)) throw new RangeError("Mesh-blending tag must be 0 or contain a group ID between 1 and 63.");
            this._internalAbstractMeshDataInfo._meshBlendingTag = yb
          }
          get material() {
            return this._internalAbstractMeshDataInfo._material
          }
          set material(yb) {
            this._setMaterial(yb)
          }
          _setMaterial(yb) {
            this._internalAbstractMeshDataInfo._material !== yb && (this._internalAbstractMeshDataInfo._material && this._internalAbstractMeshDataInfo._material.meshMap && (this._internalAbstractMeshDataInfo._material.meshMap[this.uniqueId] = void 0), this._internalAbstractMeshDataInfo._material = yb, yb && yb.meshMap && (yb.meshMap[this.uniqueId] = this), this.onMaterialChangedObservable.hasObservers() && this.onMaterialChangedObservable.notifyObservers(this), this.vJ && (this.resetDrawCache(void 0, null == yb), this._unBindEffect()))
          }
          getMaterialForRenderPass(yb) {
            return this._internalAbstractMeshDataInfo._materialForRenderPass?.[yb]
          }
          setMaterialForRenderPass(yb, bb) {
            this.resetDrawCache(yb), this._internalAbstractMeshDataInfo._materialForRenderPass || (this._internalAbstractMeshDataInfo._materialForRenderPass = []);
            const Wy = this._internalAbstractMeshDataInfo._materialForRenderPass[yb];
            Wy?.meshMap?.[this.uniqueId] && (Wy.meshMap[this.uniqueId] = void 0), this._internalAbstractMeshDataInfo._materialForRenderPass[yb] = bb, bb && bb.meshMap && (bb.meshMap[this.uniqueId] = this)
          }
          get receiveShadows() {
            return this._internalAbstractMeshDataInfo._receiveShadows
          }
          set receiveShadows(yb) {
            this._internalAbstractMeshDataInfo._receiveShadows !== yb && (this._internalAbstractMeshDataInfo._receiveShadows = yb, this._markSubMeshesAsLightDirty())
          }
          get hasVertexAlpha() {
            return this._internalAbstractMeshDataInfo._hasVertexAlpha
          }
          set hasVertexAlpha(yb) {
            this._internalAbstractMeshDataInfo._hasVertexAlpha !== yb && (this._internalAbstractMeshDataInfo._hasVertexAlpha = yb, this._markSubMeshesAsAttributesDirty(), this._markSubMeshesAsMiscDirty())
          }
          get useVertexColors() {
            return this._internalAbstractMeshDataInfo._useVertexColors
          }
          set useVertexColors(yb) {
            this._internalAbstractMeshDataInfo._useVertexColors !== yb && (this._internalAbstractMeshDataInfo._useVertexColors = yb, this._markSubMeshesAsAttributesDirty())
          }
          get computeBonesUsingShaders() {
            return this._internalAbstractMeshDataInfo._computeBonesUsingShaders
          }
          set computeBonesUsingShaders(yb) {
            this._internalAbstractMeshDataInfo._computeBonesUsingShaders !== yb && (this._internalAbstractMeshDataInfo._computeBonesUsingShaders = yb, this._markSubMeshesAsAttributesDirty())
          }
          get numBoneInfluencers() {
            return this._internalAbstractMeshDataInfo._numBoneInfluencers
          }
          set numBoneInfluencers(yb) {
            this._internalAbstractMeshDataInfo._numBoneInfluencers !== yb && (this._internalAbstractMeshDataInfo._numBoneInfluencers = yb, this._markSubMeshesAsAttributesDirty())
          }
          get applyFog() {
            return this._internalAbstractMeshDataInfo._applyFog
          }
          set applyFog(yb) {
            this._internalAbstractMeshDataInfo._applyFog !== yb && (this._internalAbstractMeshDataInfo._applyFog = yb, this._markSubMeshesAsMiscDirty())
          }
          get enableDistantPicking() {
            return this._internalAbstractMeshDataInfo._enableDistantPicking
          }
          set enableDistantPicking(yb) {
            this._internalAbstractMeshDataInfo._enableDistantPicking = yb
          }
          get layerMask() {
            return this._internalAbstractMeshDataInfo._layerMask
          }
          set layerMask(yb) {
            yb !== this._internalAbstractMeshDataInfo._layerMask && (this._internalAbstractMeshDataInfo._layerMask = yb, this._resyncLightSources())
          }
          get collisionMask() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._collisionMask
          }
          set collisionMask(yb) {
            this._internalAbstractMeshDataInfo._meshCollisionData._collisionMask = isNaN(yb) ? -1 : yb
          }
          get collisionResponse() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._collisionResponse
          }
          set collisionResponse(yb) {
            this._internalAbstractMeshDataInfo._meshCollisionData._collisionResponse = yb
          }
          get collisionGroup() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._collisionGroup
          }
          set collisionGroup(yb) {
            this._internalAbstractMeshDataInfo._meshCollisionData._collisionGroup = isNaN(yb) ? -1 : yb
          }
          get surroundingMeshes() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._surroundingMeshes
          }
          set surroundingMeshes(yb) {
            this._internalAbstractMeshDataInfo._meshCollisionData._surroundingMeshes = yb
          }
          get lightSources() {
            return this._lightSources
          }
          set skeleton(yb) {
            const bb = this._internalAbstractMeshDataInfo._skeleton;
            bb && bb.needInitialSkinMatrix && bb._unregisterMeshWithPoseMatrix(this), yb && yb.needInitialSkinMatrix && yb._registerMeshWithPoseMatrix(this), this._internalAbstractMeshDataInfo._skeleton = yb, this._internalAbstractMeshDataInfo._skeleton || (this._bonesTransformMatrices = null), this._markSubMeshesAsAttributesDirty()
          }
          get skeleton() {
            return this._internalAbstractMeshDataInfo._skeleton
          }
          constructor(bb) {
            var Wy;
            let Uy = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            switch (super(bb, Uy, !1), Wy = this, this._internalAbstractMeshDataInfo = new Yy, this._waitingMaterialId = null, this._waitingMorphTargetManagerId = null, this._waitingSkeletonId = null, this._waitingSkeletonUniqueId = null, this.cullingStrategy = yb.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY, this.onCollideObservable = new hy.c, this.onCollisionPositionChangeObservable = new hy.c, this.onMaterialChangedObservable = new hy.c, this.definedFacingForward = !0, this._occlusionQuery = null, this._renderingGroup = null, this.alphaIndex = Number.MAX_VALUE, this.Kf = yb.DefaultIsPickable, this.isNearPickable = !1, this.isNearGrabbable = !1, this.showSubMeshesBoundingBox = !1, this.isBlocker = !1, this.enablePointerMoveEvents = !1, this.outlineColor = Cy.d.Red(), this.outlineWidth = .02, this.overlayColor = Cy.d.Red(), this.overlayAlpha = .5, this.useOctreeForRenderingSelection = !0, this.useOctreeForPicking = !0, this.useOctreeForCollisions = !0, this.AU = !1, this.bf = !1, this.actionManager = null, this.ellipsoid = new fy.n(.5, 1, .5), this.ellipsoidOffset = new fy.n(0, 0, 0), this.edgesWidth = 1, this.edgesColor = new Cy.e(1, 0, 0, 1), this._edgesRenderer = null, this._masterMesh = null, this._boundingInfo = null, this._boundingInfoIsDirty = !0, this._renderId = 0, this._intersectionsInProgress = new Array, this._unIndexed = !1, this._lightSources = new Array, this._waitingData = {
                lods: null,
                actions: null,
                Aby: null
              }, this._bonesTransformMatrices = null, this._transformMatrixTexture = null, this.onRebuildObservable = new hy.c, this._onCollisionPositionChange = function(yb, bb) {
                let Uy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                bb.subtractToRef(Wy._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions, Wy._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions), Wy._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions.length() > Gy.d.CollisionsEpsilon && Wy.position.addInPlace(Wy._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions), Uy && Wy.onCollideObservable.notifyObservers(Uy), Wy.onCollisionPositionChangeObservable.notifyObservers(Wy.position)
              }, Uy = this.kWy(), this.layerMask = Uy.defaultRenderableLayerMask, Uy.yKy(this), this._resyncLightSources(), this._uniformBuffer = new Ky.b(this.kWy().xh(), void 0, void 0, bb, !this.kWy().xh().isWebGPU), this._buildUniformLayout(), Uy.performancePriority) {
              case 2:
                this.bf = !0;
              case 1:
                this.AU = !0, this.Kf = !1
            }
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("world", 16), this._uniformBuffer.addUniform("visibility", 1), this._uniformBuffer.create()
          }
          transferToEffect(yb) {
            const bb = this._uniformBuffer;
            bb.qcy("world", yb), bb.updateFloat("visibility", this._internalAbstractMeshDataInfo._visibility), bb.update()
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
          toString(yb) {
            let bb = "Name: " + this.name + ", isInstance: " + ("InstancedMesh" === this.getClassName() ? "YES" : "NO");
            bb += ", # of submeshes: " + (this.vJ ? this.vJ.length : 0);
            const Wy = this._internalAbstractMeshDataInfo._skeleton;
            return Wy && (bb += ", skeleton: " + Wy.name), yb && (bb += ", billboard mode: " + ["NONE", "X", "Y", null, "Z", null, null, "ALL"][this.billboardMode], bb += ", freeze wrld mat: " + (this._isWorldMatrixFrozen || this._waitingData.Aby ? "YES" : "NO")), bb
          }
          _getEffectiveParent() {
            return this._masterMesh && this.billboardMode !== Py.f.BILLBOARDMODE_NONE ? this._masterMesh : super._getEffectiveParent()
          }
          _getActionManagerForTrigger(yb) {
            let bb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            if (this.actionManager && (bb || this.actionManager.isRecursive)) {
              if (!yb) return this.actionManager;
              if (this.actionManager.hasSpecificTrigger(yb)) return this.actionManager
            }
            return this.parent ? this.parent._getActionManagerForTrigger(yb, !1) : null
          }
          _releaseRenderPassId(yb) {}
          _rebuild() {
            if (this.onRebuildObservable.notifyObservers(this), null !== this._occlusionQuery && (this._occlusionQuery = null), this.vJ) {
              for (const yb of this.vJ) yb._rebuild();
              this.resetDrawCache()
            }
          }
          _resyncLightSources() {
            this._lightSources.length = 0;
            for (const yb of this.kWy().lights) yb.isEnabled() && yb.canAffectMesh(this) && this._lightSources.push(yb);
            this._markSubMeshesAsLightDirty()
          }
          _resyncLightSource(yb) {
            const bb = yb.isEnabled() && yb.canAffectMesh(this),
              Wy = this._lightSources.indexOf(yb);
            let Uy = !1;
            if (-1 === Wy) {
              if (!bb) return;
              this._lightSources.push(yb)
            } else {
              if (bb) return;
              Uy = !0, this._lightSources.splice(Wy, 1)
            }
            this._markSubMeshesAsLightDirty(Uy)
          }
          _unBindEffect() {
            for (const yb of this.vJ) yb.setEffect(null)
          }
          _removeLightSource(yb, bb) {
            const Wy = this._lightSources.indexOf(yb); - 1 !== Wy && (this._lightSources.splice(Wy, 1), this._markSubMeshesAsLightDirty(bb))
          }
          _markSubMeshesAsDirty(yb) {
            if (this.vJ)
              for (const bb of this.vJ)
                for (let Wy = 0; Wy < bb._drawWrappers.length; ++Wy) {
                  const Uy = bb._drawWrappers[Wy];
                  Uy && Uy.defines && Uy.defines.markAllAsDirty && yb(Uy.defines)
                }
          }
          _markSubMeshesAsLightDirty() {
            let yb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            this._markSubMeshesAsDirty((bb => bb.markAsLightDirty(yb)))
          }
          _markSubMeshesAsAttributesDirty() {
            this._markSubMeshesAsDirty((yb => yb.markAsAttributesDirty()))
          }
          _markSubMeshesAsMiscDirty() {
            this._markSubMeshesAsDirty((yb => yb.markAsMiscDirty()))
          }
          goy(yb) {
            return this._currentRenderId = Number.MAX_VALUE, super.goy(yb), this._isDirty = !0, this
          }
          resetDrawCache(yb) {
            let bb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (this.vJ)
              for (const Wy of this.vJ) Wy.resetDrawCache(yb, bb)
          }
          get isBlocked() {
            return !1
          }
          getLOD(yb) {
            return this
          }
          getTotalVertices() {
            return 0
          }
          getTotalIndices() {
            return 0
          }
          Mqy() {
            return null
          }
          getVerticesData(yb) {
            return null
          }
          setVerticesData(yb, bb, Wy, Uy) {
            return this
          }
          updateVerticesData(yb, bb, Wy, Uy) {
            return this
          }
          setIndices(yb, bb) {
            return this
          }
          isVerticesDataPresent(yb) {
            return !1
          }
          qUy() {
            return this._masterMesh ? this._masterMesh.qUy() : (this._boundingInfoIsDirty && (this._boundingInfoIsDirty = !1, this._updateBoundingInfo()), this._boundingInfo)
          }
          getRawBoundingInfo() {
            return this.rawBoundingInfo ?? this.qUy()
          }
          setBoundingInfo(yb) {
            return this._boundingInfo = yb, this
          }
          get hasBoundingInfo() {
            return null !== this._boundingInfo
          }
          buildBoundingInfo(yb, bb, Wy) {
            return this._boundingInfo = new By.b(yb, bb, Wy), this._boundingInfo
          }
          normalizeToUnitCube() {
            let yb = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
              bb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              Wy = arguments.length > 2 ? arguments[2] : void 0;
            return super.normalizeToUnitCube(yb, bb, Wy)
          }
          get useBones() {
            return this.skeleton && this.kWy().skeletonsEnabled && this.isVerticesDataPresent(Zy.k.MatricesIndicesKind) && this.isVerticesDataPresent(Zy.k.MatricesWeightsKind)
          }
          _preActivate() {}
          _preActivateForIntermediateRendering(yb) {}
          _activate(yb, bb) {
            return this._renderId = yb, !0
          }
          _postActivate() {}
          _freeze() {}
          _unFreeze() {}
          getWorldMatrix() {
            return this._masterMesh && this.billboardMode === Py.f.BILLBOARDMODE_NONE ? this._masterMesh.getWorldMatrix() : super.getWorldMatrix()
          }
          _getWorldMatrixDeterminant() {
            return this._masterMesh ? this._masterMesh._getWorldMatrixDeterminant() : super._getWorldMatrixDeterminant()
          }
          get zWy() {
            return !1
          }
          get NBy() {
            return !1
          }
          get hasThinInstances() {
            return !1
          }
          movePOV(yb, bb, Wy) {
            return this.position.addInPlace(this.calcMovePOV(yb, bb, Wy)), this
          }
          calcMovePOV(yb, bb, Wy) {
            const Uy = new fy.c;
            (this.rotationQuaternion ? this.rotationQuaternion : fy.e.RotationYawPitchRoll(this.rotation.y, this.rotation.x, this.rotation.z)).toRotationMatrix(Uy);
            const hy = fy.n.Zero(),
              Zy = this.definedFacingForward ? -1 : 1;
            return fy.n.TransformCoordinatesFromFloatsToRef(yb * Zy, bb, Wy * Zy, Uy, hy), hy
          }
          rotatePOV(yb, bb, Wy) {
            return this.rotation.addInPlace(this.calcRotatePOV(yb, bb, Wy)), this
          }
          calcRotatePOV(yb, bb, Wy) {
            const Uy = this.definedFacingForward ? 1 : -1;
            return new fy.n(yb * Uy, bb, Wy * Uy)
          }
          _refreshBoundingInfo(yb, bb) {
            if (yb) {
              const Wy = (0, mb.g)(yb, 0, this.getTotalVertices(), bb);
              this._boundingInfo ? this._boundingInfo.reConstruct(Wy.minimum, Wy.maximum) : this._boundingInfo = new By.b(Wy.minimum, Wy.maximum)
            }
            if (this.vJ)
              for (let Wy = 0; Wy < this.vJ.length; Wy++) this.vJ[Wy].refreshBoundingInfo(yb);
            this._updateBoundingInfo()
          }
          _refreshBoundingInfoDirect(yb) {
            if (this._boundingInfo ? this._boundingInfo.reConstruct(yb.minimum, yb.maximum) : this._boundingInfo = new By.b(yb.minimum, yb.maximum), this.vJ)
              for (let bb = 0; bb < this.vJ.length; bb++) this.vJ[bb].refreshBoundingInfo(null);
            this._updateBoundingInfo()
          }
          static _ApplySkeleton(yb, bb, Wy, Uy, hy, cb, Py) {
            ! function(yb, bb, Wy, Uy, hy, cb, Py) {
              const oy = fy.j.dU[0],
                By = fy.j.Matrix[0],
                Ky = fy.j.Matrix[1],
                ey = bb === Zy.k.NormalKind ? fy.n.TransformNormalFromFloatsToRef : fy.n.TransformCoordinatesFromFloatsToRef;
              for (let Zy = 0, qb = 0; Zy < yb.length; Zy += 3, qb += 4) {
                let bb, sy;
                for (By.reset(), bb = 0; bb < 4; bb++) sy = hy[qb + bb], sy > 0 && (fy.c.FromFloat32ArrayToRefScaled(Wy, Math.floor(16 * Uy[qb + bb]), sy, Ky), By.addToSelf(Ky));
                if (cb && Py)
                  for (bb = 0; bb < 4; bb++) sy = Py[qb + bb], sy > 0 && (fy.c.FromFloat32ArrayToRefScaled(Wy, Math.floor(16 * cb[qb + bb]), sy, Ky), By.addToSelf(Ky));
                ey(yb[Zy], yb[Zy + 1], yb[Zy + 2], By, oy), oy.toArray(yb, Zy)
              }
            }(yb, bb, Wy, Uy, hy, cb, Py)
          }
          _getData(bb, Wy) {
            let Uy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Zy.k.PositionKind;
            const hy = bb.cache,
              cb = yb => {
                if (hy) {
                  const bb = hy._vertexData || (hy._vertexData = {});
                  return bb[yb] || this.copyVerticesData(yb, bb), bb[yb]
                }
                return this.getVerticesData(yb)
              };
            if (Wy || (Wy = cb(Uy)), !Wy) return null;
            hy ? (hy._outputData ? hy._outputData.set(Wy) : hy._outputData = new Float32Array(Wy), Wy = hy._outputData) : (bb.applyMorph && this.morphTargetManager || bb.applySkeleton && this.skeleton || bb.applyBakedVertexAnimation && this.bakedVertexAnimationManager?.isEnabled) && (Wy = Wy.slice()), bb.applyMorph && this.morphTargetManager && function(yb, bb, Wy) {
              let Uy;
              switch (bb) {
                case Zy.k.PositionKind:
                  Uy = yb => yb.getPositions();
                  break;
                case Zy.k.NormalKind:
                  Uy = yb => yb.getNormals();
                  break;
                case Zy.k.TangentKind:
                  Uy = yb => yb.getTangents();
                  break;
                case Zy.k.UVKind:
                  Uy = yb => yb.getUVs();
                  break;
                case Zy.k.UV2Kind:
                  Uy = yb => yb.getUV2s();
                  break;
                case Zy.k.ColorKind:
                  Uy = yb => yb.getColors();
                  break;
                default:
                  return
              }
              for (let hy = 0; hy < yb.length; hy++) {
                let bb = yb[hy];
                for (let fy = 0; fy < Wy.numTargets; fy++) {
                  const Zy = Wy.getTarget(fy),
                    cb = Zy.influence;
                  if (0 !== cb) {
                    const Wy = Uy(Zy);
                    Wy && (bb += (Wy[hy] - yb[hy]) * cb)
                  }
                }
                yb[hy] = bb
              }
            }(Wy, Uy, this.morphTargetManager);
            const Py = this.bakedVertexAnimationManager;
            let oy = !1;
            if (bb.applyBakedVertexAnimation && Py?.isEnabled) {
              const yb = cb(Zy.k.MatricesIndicesKind),
                hy = cb(Zy.k.MatricesWeightsKind);
              if (hy && yb) {
                const fy = this.numBoneInfluencers > 4,
                  By = fy ? cb(Zy.k.MatricesIndicesExtraKind) : null,
                  Ky = fy ? cb(Zy.k.MatricesWeightsExtraKind) : null;
                oy = ib(Wy, Uy, Py, bb.bakedVertexAnimationSettings ?? Py.animationParameters, yb, hy, By, Ky, this.numBoneInfluencers)
              }
            }
            if (!oy && bb.applySkeleton && this.skeleton) {
              const bb = cb(Zy.k.MatricesIndicesKind),
                hy = cb(Zy.k.MatricesWeightsKind);
              if (hy && bb) {
                const fy = this.numBoneInfluencers > 4,
                  Py = fy ? cb(Zy.k.MatricesIndicesExtraKind) : null,
                  oy = fy ? cb(Zy.k.MatricesWeightsExtraKind) : null,
                  By = this.skeleton.getTransformMatrices(this);
                yb._ApplySkeleton(Wy, Uy, By, bb, hy, Py, oy)
              }
            }
            if (!1 !== bb.updatePositionsArray && Uy === Zy.k.PositionKind) {
              const yb = this._internalAbstractMeshDataInfo._positions || [],
                bb = yb.length;
              if (yb.length = Wy.length / 3, bb < yb.length)
                for (let Wy = bb; Wy < yb.length; Wy++) yb[Wy] = new fy.n;
              for (let Uy = 0, hy = 0; Uy < yb.length; Uy++, hy += 3) yb[Uy].vcy(Wy[hy], Wy[hy + 1], Wy[hy + 2]);
              this._internalAbstractMeshDataInfo._positions = yb
            }
            return Wy
          }
          getNormalsData() {
            let yb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              bb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return this._getData({
              applySkeleton: yb,
              applyMorph: bb,
              updatePositionsArray: !1
            }, null, Zy.k.NormalKind)
          }
          yfy() {
            let yb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              bb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            return this._getData({
              applySkeleton: yb,
              applyMorph: bb,
              updatePositionsArray: !1
            }, Wy, Zy.k.PositionKind)
          }
          _updateBoundingInfo() {
            return this._boundingInfo ? this._boundingInfo.update(this.worldMatrixFromCache) : this._boundingInfo = new By.b(fy.n.Zero(), fy.n.Zero(), this.worldMatrixFromCache), this._updateSubMeshesBoundingInfo(this.worldMatrixFromCache), this
          }
          _updateSubMeshesBoundingInfo(yb) {
            if (!this.vJ) return this;
            const bb = this.vJ.length;
            for (let Wy = 0; Wy < bb; Wy++) {
              const Uy = this.vJ[Wy];
              (bb > 1 || !Uy.IsGlobal) && Uy.updateBoundingInfo(yb)
            }
            return this
          }
          _afterComputeWorldMatrix() {
            this.bf || (this._boundingInfoIsDirty = !0)
          }
          isInFrustum(yb) {
            return this.qUy().isInFrustum(yb, this.cullingStrategy)
          }
          isCompletelyInFrustum(yb) {
            return this.qUy().isCompletelyInFrustum(yb)
          }
          QBy(yb) {
            let bb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              Wy = arguments.length > 2 ? arguments[2] : void 0;
            const Uy = this.qUy(),
              hy = yb.qUy();
            if (Uy.intersects(hy, bb)) return !0;
            if (Wy)
              for (const fy of this.getChildMeshes())
                if (fy.QBy(yb, bb, !0)) return !0;
            return !1
          }
          intersectsPoint(yb) {
            return this.qUy().intersectsPoint(yb)
          }
          get checkCollisions() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._checkCollisions
          }
          set checkCollisions(yb) {
            this._internalAbstractMeshDataInfo._meshCollisionData._checkCollisions = yb
          }
          get collider() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._collider
          }
          moveWithCollisions(yb) {
            let bb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            this.getAbsolutePosition().addToRef(this.ellipsoidOffset, this._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions);
            const Wy = this.kWy().collisionCoordinator;
            return this._internalAbstractMeshDataInfo._meshCollisionData._collider || (this._internalAbstractMeshDataInfo._meshCollisionData._collider = Wy.createCollider()), this._internalAbstractMeshDataInfo._meshCollisionData._collider._radius = this.ellipsoid, Wy.getNewPosition(this._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions, yb, this._internalAbstractMeshDataInfo._meshCollisionData._collider, this.collisionRetryCount, this, this._onCollisionPositionChange, this.uniqueId, bb), this
          }
          _collideForSubMesh(yb, bb, Wy) {
            if (this._generatePointsArray(), !this._positions) return this;
            if (!yb._lastColliderWorldVertices || !yb._lastColliderTransformMatrix.equals(bb)) {
              yb._lastColliderTransformMatrix = bb.clone(), yb._lastColliderWorldVertices = [], yb._trianglePlanes = [];
              const Wy = yb.verticesStart,
                Uy = yb.verticesStart + yb.verticesCount;
              for (let hy = Wy; hy < Uy; hy++) yb._lastColliderWorldVertices.push(fy.n.TransformCoordinates(this._positions[hy], bb))
            }
            return Wy._collide(yb._trianglePlanes, yb._lastColliderWorldVertices, this.Mqy(), yb.indexStart, yb.indexStart + yb.indexCount, yb.verticesStart, !!yb.Wh(), this, this._shouldConvertRHS(), 7 === yb.Wh()?.fillMode), this
          }
          _processCollisionsForSubMeshes(yb, bb) {
            const Wy = this._scene.getCollidingSubMeshCandidates(this, yb),
              Uy = Wy.length;
            for (let hy = 0; hy < Uy; hy++) {
              const fy = Wy.data[hy];
              Uy > 1 && !fy._checkCollision(yb) || this._collideForSubMesh(fy, bb, yb)
            }
            return this
          }
          _shouldConvertRHS() {
            return !1
          }
          _checkCollision(yb) {
            if (!this.qUy()._checkCollision(yb)) return this;
            const bb = fy.j.Matrix[0],
              Wy = fy.j.Matrix[1];
            return fy.c.ScalingToRef(1 / yb._radius.x, 1 / yb._radius.y, 1 / yb._radius.z, bb), this.worldMatrixFromCache.multiplyToRef(bb, Wy), this._processCollisionsForSubMeshes(yb, Wy), this
          }
          _generatePointsArray() {
            return !1
          }
          intersects(yb, bb, Wy) {
            let Uy = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              hy = arguments.length > 4 ? arguments[4] : void 0,
              Zy = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
            const cb = new oy.b,
              Py = this.getClassName(),
              By = "InstancedLinesMesh" === Py || "LinesMesh" === Py || "GreasedLineMesh" === Py ? this.intersectionThreshold : 0,
              Ky = this.qUy();
            if (!this.vJ) return cb;
            if (!Zy && (!yb.intersectsSphere(Ky.GBy, By) || !yb.intersectsBox(Ky.boundingBox, By))) return cb;
            if (Uy) return cb.hit = !Zy, cb.pickedMesh = Zy ? null : this, cb.distance = Zy ? 0 : fy.n.Distance(yb.origin, Ky.GBy.center), cb.subMeshId = 0, cb;
            if (!this._generatePointsArray()) return cb;
            let ey = null;
            const qb = this._scene.getIntersectingSubMeshCandidates(this, yb),
              sy = qb.length;
            let Sy = !1;
            for (let fy = 0; fy < sy; fy++) {
              const yb = qb.data[fy].Wh();
              if (yb && (7 == yb.fillMode || 0 == yb.fillMode || 1 == yb.fillMode || 2 == yb.fillMode || 4 == yb.fillMode)) {
                Sy = !0;
                break
              }
            }
            if (!Sy) return cb.hit = !0, cb.pickedMesh = this, cb.distance = fy.n.Distance(yb.origin, Ky.GBy.center), cb.subMeshId = -1, cb;
            for (let fy = 0; fy < sy; fy++) {
              const Uy = qb.data[fy];
              if (sy > 1 && !Zy && !Uy.canIntersects(yb)) continue;
              const hy = Uy.intersects(yb, this._positions, this.Mqy(), bb, Wy);
              if (hy && (bb || !ey || hy.distance < ey.distance) && (ey = hy, ey.subMeshId = Uy._id, ey._internalSubMeshId = fy, bb)) break
            }
            if (ey) {
              const bb = hy ?? this.getWorldMatrix(),
                Wy = fy.j.dU[0],
                Uy = fy.j.dU[1];
              fy.n.TransformCoordinatesToRef(yb.origin, bb, Wy), yb.direction.scaleToRef(ey.distance, Uy);
              const Zy = fy.n.TransformNormal(Uy, bb).addInPlace(Wy);
              return cb.hit = !0, cb.distance = fy.n.Distance(Wy, Zy), cb.pickedPoint = Zy, cb.pickedMesh = this, cb.bu = ey.bu || 0, cb.bv = ey.bv || 0, cb.subMeshFaceId = ey.faceId, cb.faceId = ey.faceId + qb.data[ey._internalSubMeshId].indexStart / (-1 !== this.getClassName().indexOf("LinesMesh") ? 2 : 3), cb.subMeshId = ey.subMeshId, cb
            }
            return cb
          }
          clone(yb, bb, Wy) {
            return null
          }
          releaseSubMeshes() {
            let yb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (this.vJ)
              for (; this.vJ.length;) this.vJ[0].dispose(yb);
            else this.vJ = [];
            return this
          }
          dispose(yb) {
            let bb, Wy = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            const Uy = this.kWy();
            for (this._scene.useMaterialMeshMap && this._internalAbstractMeshDataInfo._material && this._internalAbstractMeshDataInfo._material.meshMap && (this._internalAbstractMeshDataInfo._material.meshMap[this.uniqueId] = void 0), Uy.freeActiveMeshes(), Uy.freeRenderingGroups(), Uy.renderingManager.maintainStateBetweenFrames && Uy.renderingManager.restoreDispachedFlags(), void 0 !== this.actionManager && null !== this.actionManager && (this.actionManager.disposeWhenUnowned && !this._scene.meshes.some((yb => yb !== this && yb.actionManager === this.actionManager)) && this.actionManager.dispose(), this.actionManager = null), this._internalAbstractMeshDataInfo._skeleton = null, this._transformMatrixTexture && (this._transformMatrixTexture.dispose(), this._transformMatrixTexture = null), bb = 0; bb < this._intersectionsInProgress.length; bb++) {
              const yb = this._intersectionsInProgress[bb],
                Wy = yb._intersectionsInProgress.indexOf(this);
              yb._intersectionsInProgress.splice(Wy, 1)
            }
            this._intersectionsInProgress.length = 0;
            const hy = Uy.lights;
            for (const Zy of hy) {
              let yb = Zy.includedOnlyMeshes.indexOf(this); - 1 !== yb && Zy.includedOnlyMeshes.splice(yb, 1), yb = Zy.excludedMeshes.indexOf(this), -1 !== yb && Zy.excludedMeshes.splice(yb, 1);
              const bb = Zy.getShadowGenerators();
              if (bb) {
                const Wy = bb.values();
                for (let bb = Wy.next(); !0 !== bb.done; bb = Wy.next()) {
                  const Wy = bb.value.getShadowMap();
                  Wy && Wy.renderList && (yb = Wy.renderList.indexOf(this), -1 !== yb && Wy.renderList.splice(yb, 1))
                }
              }
            }
            this.releaseSubMeshes(Uy._isDisposing);
            const fy = Uy.xh();
            if (null !== this._occlusionQuery && (this.isOcclusionQueryInProgress = !1, fy.deleteQuery(this._occlusionQuery), this._occlusionQuery = null), fy.wipeCaches(), Uy.yUy(this), this._parentContainer) {
              const yb = this._parentContainer.meshes.indexOf(this);
              yb > -1 && this._parentContainer.meshes.splice(yb, 1), this._parentContainer = null
            }
            if (Wy && this.material && ("MultiMaterial" === this.material.getClassName() ? this.material.dispose(!1, !0, !0) : this.material.dispose(!1, !0)), !yb)
              for (bb = 0; bb < Uy.YV.length; bb++) Uy.YV[bb].emitter === this && (Uy.YV[bb].dispose(), bb--);
            this._internalAbstractMeshDataInfo._facetData.facetDataEnabled && this.disableFacetData(), this._uniformBuffer.dispose(), this.onAfterWorldMatrixUpdateObservable.clear(), this.onCollideObservable.clear(), this.onCollisionPositionChangeObservable.clear(), this.onRebuildObservable.clear(), super.dispose(yb, Wy)
          }
          _initFacetData() {
            const yb = this._internalAbstractMeshDataInfo._facetData;
            yb.facetNormals || (yb.facetNormals = []), yb.facetPositions || (yb.facetPositions = []), yb.facetPartitioning || (yb.facetPartitioning = new Array), yb.facetNb = this.Mqy().length / 3 | 0, yb.partitioningSubdivisions = yb.partitioningSubdivisions ? yb.partitioningSubdivisions : 10, yb.partitioningBBoxRatio = yb.partitioningBBoxRatio ? yb.partitioningBBoxRatio : 1.01;
            for (let bb = 0; bb < yb.facetNb; bb++) yb.facetNormals[bb] = fy.n.Zero(), yb.facetPositions[bb] = fy.n.Zero();
            return yb.facetDataEnabled = !0, this
          }
          updateFacetData() {
            const yb = this._internalAbstractMeshDataInfo._facetData;
            yb.facetDataEnabled || this._initFacetData();
            const bb = this.getVerticesData(Zy.k.PositionKind),
              Wy = this.Mqy(),
              Uy = this.getVerticesData(Zy.k.NormalKind)?.slice(),
              hy = this.qUy();
            if (yb.facetDepthSort && !yb.facetDepthSortEnabled) {
              if (yb.facetDepthSortEnabled = !0, Wy instanceof Uint16Array) yb.depthSortedIndices = new Uint16Array(Wy);
              else if (Wy instanceof Uint32Array) yb.depthSortedIndices = new Uint32Array(Wy);
              else {
                let bb = !1;
                for (let yb = 0; yb < Wy.length; yb++)
                  if (Wy[yb] > 65535) {
                    bb = !0;
                    break
                  } yb.depthSortedIndices = bb ? new Uint32Array(Wy) : new Uint16Array(Wy)
              }
              if (yb.facetDepthSortFunction = function(yb, bb) {
                  return bb.sqDistance - yb.sqDistance
                }, !yb.facetDepthSortFrom) {
                const bb = this.kWy().activeCamera;
                yb.facetDepthSortFrom = bb ? bb.position : fy.n.Zero()
              }
              yb.depthSortedFacets = [];
              for (let bb = 0; bb < yb.facetNb; bb++) {
                const Wy = {
                  ind: 3 * bb,
                  sqDistance: 0
                };
                yb.depthSortedFacets.push(Wy)
              }
              yb.invertedMatrix = fy.c.Identity(), yb.facetDepthSortOrigin = fy.n.Zero()
            }
            yb.bbSize.x = hy.maximum.x - hy.minimum.x > Ty.e ? hy.maximum.x - hy.minimum.x : Ty.e, yb.bbSize.y = hy.maximum.y - hy.minimum.y > Ty.e ? hy.maximum.y - hy.minimum.y : Ty.e, yb.bbSize.z = hy.maximum.z - hy.minimum.z > Ty.e ? hy.maximum.z - hy.minimum.z : Ty.e;
            let Py = yb.bbSize.x > yb.bbSize.y ? yb.bbSize.x : yb.bbSize.y;
            if (Py = Py > yb.bbSize.z ? Py : yb.bbSize.z, yb.subDiv.max = yb.partitioningSubdivisions, yb.subDiv.X = Math.floor(yb.subDiv.max * yb.bbSize.x / Py), yb.subDiv.Y = Math.floor(yb.subDiv.max * yb.bbSize.y / Py), yb.subDiv.Z = Math.floor(yb.subDiv.max * yb.bbSize.z / Py), yb.subDiv.X = yb.subDiv.X < 1 ? 1 : yb.subDiv.X, yb.subDiv.Y = yb.subDiv.Y < 1 ? 1 : yb.subDiv.Y, yb.subDiv.Z = yb.subDiv.Z < 1 ? 1 : yb.subDiv.Z, yb.facetParameters.facetNormals = this.getFacetLocalNormals(), yb.facetParameters.facetPositions = this.getFacetLocalPositions(), yb.facetParameters.facetPartitioning = this.getFacetLocalPartitioning(), yb.facetParameters.bInfo = hy, yb.facetParameters.bbSize = yb.bbSize, yb.facetParameters.subDiv = yb.subDiv, yb.facetParameters.ratio = this.partitioningBBoxRatio, yb.facetParameters.depthSort = yb.facetDepthSort, yb.facetDepthSort && yb.facetDepthSortEnabled && (this.computeWorldMatrix(!0), this._worldMatrix.invertToRef(yb.invertedMatrix), fy.n.TransformCoordinatesToRef(yb.facetDepthSortFrom, yb.invertedMatrix, yb.facetDepthSortOrigin), yb.facetParameters.distanceTo = yb.facetDepthSortOrigin), yb.facetParameters.depthSortedFacets = yb.depthSortedFacets, Uy && cb.e.ComputeNormals(bb, Wy, Uy, yb.facetParameters), yb.facetDepthSort && yb.facetDepthSortEnabled) {
              yb.depthSortedFacets.sort(yb.facetDepthSortFunction);
              const bb = yb.depthSortedIndices.length / 3 | 0;
              for (let Uy = 0; Uy < bb; Uy++) {
                const bb = yb.depthSortedFacets[Uy].ind;
                yb.depthSortedIndices[3 * Uy] = Wy[bb], yb.depthSortedIndices[3 * Uy + 1] = Wy[bb + 1], yb.depthSortedIndices[3 * Uy + 2] = Wy[bb + 2]
              }
              this.updateIndices(yb.depthSortedIndices, void 0, !0)
            }
            return this
          }
          getFacetLocalNormals() {
            const yb = this._internalAbstractMeshDataInfo._facetData;
            return yb.facetNormals || this.updateFacetData(), yb.facetNormals
          }
          getFacetLocalPositions() {
            const yb = this._internalAbstractMeshDataInfo._facetData;
            return yb.facetPositions || this.updateFacetData(), yb.facetPositions
          }
          getFacetLocalPartitioning() {
            const yb = this._internalAbstractMeshDataInfo._facetData;
            return yb.facetPartitioning || this.updateFacetData(), yb.facetPartitioning
          }
          getFacetPosition(yb) {
            const bb = fy.n.Zero();
            return this.getFacetPositionToRef(yb, bb), bb
          }
          getFacetPositionToRef(yb, bb) {
            const Wy = this.getFacetLocalPositions()[yb],
              Uy = this.getWorldMatrix();
            return fy.n.TransformCoordinatesToRef(Wy, Uy, bb), this
          }
          getFacetNormal(yb) {
            const bb = fy.n.Zero();
            return this.getFacetNormalToRef(yb, bb), bb
          }
          getFacetNormalToRef(yb, bb) {
            const Wy = this.getFacetLocalNormals()[yb];
            return fy.n.TransformNormalToRef(Wy, this.getWorldMatrix(), bb), this
          }
          getFacetsAtLocalCoordinates(yb, bb, Wy) {
            const Uy = this.qUy(),
              hy = this._internalAbstractMeshDataInfo._facetData,
              fy = Math.floor((yb - Uy.minimum.x * hy.partitioningBBoxRatio) * hy.subDiv.X * hy.partitioningBBoxRatio / hy.bbSize.x),
              Zy = Math.floor((bb - Uy.minimum.y * hy.partitioningBBoxRatio) * hy.subDiv.Y * hy.partitioningBBoxRatio / hy.bbSize.y),
              cb = Math.floor((Wy - Uy.minimum.z * hy.partitioningBBoxRatio) * hy.subDiv.Z * hy.partitioningBBoxRatio / hy.bbSize.z);
            return fy < 0 || fy > hy.subDiv.max || Zy < 0 || Zy > hy.subDiv.max || cb < 0 || cb > hy.subDiv.max ? null : hy.facetPartitioning[fy + hy.subDiv.max * Zy + hy.subDiv.max * hy.subDiv.max * cb]
          }
          getClosestFacetAtCoordinates(yb, bb, Wy, Uy) {
            let hy = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              Zy = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
            const cb = this.getWorldMatrix(),
              Py = fy.j.Matrix[5];
            cb.invertToRef(Py);
            const oy = fy.j.dU[8];
            fy.n.TransformCoordinatesFromFloatsToRef(yb, bb, Wy, Py, oy);
            const By = this.getClosestFacetAtLocalCoordinates(oy.x, oy.y, oy.z, Uy, hy, Zy);
            return Uy && fy.n.TransformCoordinatesFromFloatsToRef(Uy.x, Uy.y, Uy.z, cb, Uy), By
          }
          getClosestFacetAtLocalCoordinates(yb, bb, Wy, Uy) {
            let hy, fy, Zy, cb, Py, oy, By, Ky, ey = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              qb = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
              sy = null;
            const Sy = this.getFacetLocalPositions(),
              Ey = this.getFacetLocalNormals(),
              ly = this.getFacetsAtLocalCoordinates(yb, bb, Wy);
            if (!ly) return null;
            let mb, Cy, Ty, Vy, Jy = Number.MAX_VALUE;
            for (let gb = 0; gb < ly.length; gb++) Cy = ly[gb], Ty = Ey[Cy], Vy = Sy[Cy], cb = (yb - Vy.x) * Ty.x + (bb - Vy.y) * Ty.y + (Wy - Vy.z) * Ty.z, (!ey || ey && qb && cb >= 0 || ey && !qb && cb <= 0) && (cb = Ty.x * Vy.x + Ty.y * Vy.y + Ty.z * Vy.z, Py = -(Ty.x * yb + Ty.y * bb + Ty.z * Wy - cb) / (Ty.x * Ty.x + Ty.y * Ty.y + Ty.z * Ty.z), oy = yb + Ty.x * Py, By = bb + Ty.y * Py, Ky = Wy + Ty.z * Py, hy = oy - yb, fy = By - bb, Zy = Ky - Wy, mb = hy * hy + fy * fy + Zy * Zy, mb < Jy && (Jy = mb, sy = Cy, Uy && (Uy.x = oy, Uy.y = By, Uy.z = Ky)));
            return sy
          }
          getFacetDataParameters() {
            return this._internalAbstractMeshDataInfo._facetData.facetParameters
          }
          disableFacetData() {
            const yb = this._internalAbstractMeshDataInfo._facetData;
            return yb.facetDataEnabled && (yb.facetDataEnabled = !1, yb.facetPositions = [], yb.facetNormals = [], yb.facetPartitioning = new Array, yb.facetParameters = {}, yb.depthSortedIndices = new Uint32Array(0)), this
          }
          updateIndices(yb, bb) {
            return this
          }
          createNormals(yb) {
            const bb = this.getVerticesData(Zy.k.PositionKind),
              Wy = this.Mqy();
            let Uy;
            return Uy = this.isVerticesDataPresent(Zy.k.NormalKind) ? this.getVerticesData(Zy.k.NormalKind) : [], cb.e.ComputeNormals(bb, Wy, Uy, {
              useRightHandedSystem: this.kWy().useRightHandedSystem
            }), this.setVerticesData(Zy.k.NormalKind, Uy, yb), this
          }
          async optimizeIndicesAsync() {
            const yb = this.Mqy();
            if (!yb) return this;
            const {
              OptimizeIndices: bb
            } = await Wy.e(329).then((() => Wy(41035)));
            return bb(yb), this.setIndices(yb, this.getTotalVertices()), this
          }
          alignWithNormal(yb, bb) {
            bb || (bb = Vy.d.Y);
            const Wy = fy.j.dU[0],
              Uy = fy.j.dU[1];
            return fy.n.CrossToRef(bb, yb, Uy), fy.n.CrossToRef(yb, Uy, Wy), this.rotationQuaternion ? fy.e.RotationQuaternionFromAxisToRef(Wy, yb, Uy, this.rotationQuaternion) : fy.n.RotationFromAxisToRef(Wy, yb, Uy, this.rotation), this
          }
          _checkOcclusionQuery() {
            return !1
          }
          disableEdgesRendering() {
            throw (0, Ey.g)("EdgesRenderer")
          }
          enableEdgesRendering(yb, bb, Wy) {
            throw (0, Ey.g)("EdgesRenderer")
          }
          getConnectedParticleSystems() {
            return this._scene.YV.filter((yb => yb.emitter === this))
          }
        }, (() => {
          const Wy = "function" === typeof Symbol && Symbol.metadata ? Object.create(ey[Symbol.metadata] ?? null) : void 0;
          bb = [gb.i.filter((function() {
            return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0]) && !Array.isArray(arguments.length <= 3 ? void 0 : arguments[3]) && !Array.isArray(arguments.length <= 4 ? void 0 : arguments[4]) && !Array.isArray(arguments.length <= 5 ? void 0 : arguments[5]) && !Array.isArray(arguments.length <= 6 ? void 0 : arguments[6])
          }))], (0, Uy.j)(yb, null, bb, {
            kind: "method",
            name: "_ApplySkeleton",
            static: !0,
            private: !1,
            access: {
              has: yb => "_ApplySkeleton" in yb,
              get: yb => yb._ApplySkeleton
            },
            metadata: Wy
          }, null, qb), Wy && Object.defineProperty(yb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Wy
          })
        })(), yb.OCCLUSION_TYPE_NONE = ((0, Uy.l)(yb, qb), 0), yb.OCCLUSION_TYPE_OPTIMISTIC = 1, yb.OCCLUSION_TYPE_STRICT = 2, yb.OCCLUSION_ALGORITHM_TYPE_ACCURATE = 0, yb.OCCLUSION_ALGORITHM_TYPE_CONSERVATIVE = 1, yb.CULLINGSTRATEGY_STANDARD = 0, yb.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY = 1, yb.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION = 2, yb.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION_THEN_BSPHERE_ONLY = 3, yb.DefaultIsPickable = !0, yb
      })(),
      ny = !1;

    function uy() {
      ny || (ny = !0, (0, Oy.e)("BABYLON.AbstractMesh", Xy))
    }(qb = Xy.prototype).createOrUpdateSubmeshesOctree ?? (qb.createOrUpdateSubmeshesOctree = (0, Ey.f)("AbstractMesh", "createOrUpdateSubmeshesOctree")), (sy = Xy.prototype).getPhysicsImpostor ?? (sy.getPhysicsImpostor = (0, Ey.f)("AbstractMesh", "getPhysicsImpostor")), (Sy = Xy.prototype).setPhysicsLinkWith ?? (Sy.setPhysicsLinkWith = (0, Ey.f)("AbstractMesh", "setPhysicsLinkWith")), Object.getOwnPropertyDescriptor(Xy.prototype, "occlusionRetryCount") || Object.defineProperty(Xy.prototype, "occlusionRetryCount", (0, Ey.e)("AbstractMesh", "occlusionRetryCount")), Object.getOwnPropertyDescriptor(Xy.prototype, "occlusionType") || Object.defineProperty(Xy.prototype, "occlusionType", (0, Ey.e)("AbstractMesh", "occlusionType")), Object.getOwnPropertyDescriptor(Xy.prototype, "occlusionQueryAlgorithmType") || Object.defineProperty(Xy.prototype, "occlusionQueryAlgorithmType", (0, Ey.e)("AbstractMesh", "occlusionQueryAlgorithmType")), Object.getOwnPropertyDescriptor(Xy.prototype, "isOccluded") || Object.defineProperty(Xy.prototype, "isOccluded", (0, Ey.e)("AbstractMesh", "isOccluded")), Object.getOwnPropertyDescriptor(Xy.prototype, "isOcclusionQueryInProgress") || Object.defineProperty(Xy.prototype, "isOcclusionQueryInProgress", (0, Ey.e)("AbstractMesh", "isOcclusionQueryInProgress")), Object.getOwnPropertyDescriptor(Xy.prototype, "forceRenderingWhenOccluded") || Object.defineProperty(Xy.prototype, "forceRenderingWhenOccluded", (0, Ey.e)("AbstractMesh", "forceRenderingWhenOccluded")), Object.getOwnPropertyDescriptor(Xy.prototype, "occlusionForRenderPassId") || Object.defineProperty(Xy.prototype, "occlusionForRenderPassId", (0, Ey.e)("AbstractMesh", "occlusionForRenderPassId")), Object.getOwnPropertyDescriptor(Xy.prototype, "decalMap") || Object.defineProperty(Xy.prototype, "decalMap", (0, Ey.e)("AbstractMesh", "decalMap")), Object.getOwnPropertyDescriptor(Xy.prototype, "BWy") || Object.defineProperty(Xy.prototype, "BWy", (0, Ey.e)("AbstractMesh", "BWy")), Object.getOwnPropertyDescriptor(Xy.prototype, "physicsImpostor") || Object.defineProperty(Xy.prototype, "physicsImpostor", (0, Ey.e)("AbstractMesh", "physicsImpostor")), Object.getOwnPropertyDescriptor(Xy.prototype, "showBoundingBox") || Object.defineProperty(Xy.prototype, "showBoundingBox", (0, Ey.e)("AbstractMesh", "showBoundingBox")), Object.getOwnPropertyDescriptor(Xy.prototype, "edgesRenderer") || Object.defineProperty(Xy.prototype, "edgesRenderer", (0, Ey.e)("AbstractMesh", "edgesRenderer")), Object.getOwnPropertyDescriptor(Xy.prototype, "renderOutline") || Object.defineProperty(Xy.prototype, "renderOutline", (0, Ey.e)("AbstractMesh", "renderOutline")), Object.getOwnPropertyDescriptor(Xy.prototype, "renderOverlay") || Object.defineProperty(Xy.prototype, "renderOverlay", (0, Ey.e)("AbstractMesh", "renderOverlay"))
  },
  38922: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => ly
    });
    var Uy = Wy(35861),
      hy = Wy(35919),
      fy = Wy(38915),
      Zy = Wy(38620),
      cb = Wy(38784),
      Py = Wy(38929),
      oy = Wy(38797),
      By = Wy(38576),
      Ky = Wy(37350),
      ey = Wy(38494),
      qb = Wy(38813),
      sy = Wy(35886),
      Sy = Wy(38935),
      Ey = Wy(38540);
    class ly {
      get boundingBias() {
        return this._boundingBias
      }
      set boundingBias(yb) {
        this._boundingBias ? this._boundingBias.Coy(yb) : this._boundingBias = yb.clone(), this._updateBoundingInfo(!0, null)
      }
      static CreateGeometryForMesh(yb) {
        const bb = new ly(ly.RandomId(), yb.kWy());
        return bb.applyToMesh(yb), bb
      }
      get meshes() {
        return this._meshes
      }
      constructor(yb, bb, Wy) {
        let hy = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          fy = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          Zy = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        this.delayLoadState = 0, this._totalVertices = 0, this._isDisposed = !1, this._extend = {
          minimum: new Uy.n(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE),
          maximum: new Uy.n(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE)
        }, this._indexBufferIsUpdatable = !1, this._positionsCache = [], this._parentContainer = null, this.useBoundingInfoFromGeometry = !1, this._scene = bb || sy.c.LastCreatedScene, this._scene && (this.id = yb, this.uniqueId = this._scene.getUniqueId(), this._engine = this._scene.xh(), this._meshes = [], this._vertexBuffers = {}, this._indices = [], this._updatable = hy, null !== Zy && (this._totalVertices = Zy), Wy ? this.setAllVerticesData(Wy, hy) : null === Zy && (this._totalVertices = 0), this._engine.getCaps().vertexArrayObject && (this._vertexArrayObjects = {}), fy && (this.applyToMesh(fy), fy.computeWorldMatrix(!0)))
      }
      get extend() {
        return this._extend
      }
      kWy() {
        return this._scene
      }
      xh() {
        return this._engine
      }
      isReady() {
        return 1 === this.delayLoadState || 0 === this.delayLoadState
      }
      get doNotSerialize() {
        for (let yb = 0; yb < this._meshes.length; yb++)
          if (!this._meshes[yb].doNotSerialize) return !1;
        return !0
      }
      _rebuild() {
        this._vertexArrayObjects && (this._vertexArrayObjects = {}), 0 !== this._meshes.length && this._indices && (this._indexBuffer = this._engine.createIndexBuffer(this._indices, this._updatable, "Geometry_" + this.id + "_IndexBuffer"));
        const yb = new Set;
        for (const bb in this._vertexBuffers) yb.add(this._vertexBuffers[bb].getWrapperBuffer());
        yb.forEach((yb => {
          yb._rebuild()
        }))
      }
      setAllVerticesData(yb, bb) {
        yb.applyToGeometry(this, bb), this._notifyUpdate()
      }
      setVerticesData(yb, bb) {
        let Wy = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Uy = arguments.length > 3 ? arguments[3] : void 0;
        Wy && Array.isArray(bb) && (bb = new Float32Array(bb));
        const hy = new Zy.k(this._engine, bb, yb, {
          updatable: Wy,
          postponeInternalCreation: 0 === this._meshes.length,
          stride: Uy,
          label: "Geometry_" + this.id + "_" + yb
        });
        this.setVerticesBuffer(hy)
      }
      removeVerticesData(yb) {
        this._vertexBuffers[yb] && (this._vertexBuffers[yb].dispose(), delete this._vertexBuffers[yb]), this._vertexArrayObjects && this._disposeVertexArrayObjects()
      }
      setVerticesBuffer(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Wy = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        const hy = yb.getKind();
        this._vertexBuffers[hy] && Wy && this._vertexBuffers[hy].dispose(), yb._buffer && yb._ownsBuffer && yb._buffer._increaseReferences(), this._vertexBuffers[hy] = yb;
        const fy = this._meshes,
          cb = fy.length;
        if (hy === Zy.k.PositionKind) {
          this._totalVertices = bb ?? yb._maxVerticesCount, this._updateExtend(this.useBoundingInfoFromGeometry && this._boundingInfo ? null : yb.getFloatData(this._totalVertices)), this._resetPointsArrayCache();
          const Wy = this._extend && this._extend.minimum || new Uy.n(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE),
            hy = this._extend && this._extend.maximum || new Uy.n(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
          for (let yb = 0; yb < cb; yb++) {
            const bb = fy[yb];
            bb.buildBoundingInfo(Wy, hy), bb._createGlobalSubMesh(bb.isUnIndexed), bb.computeWorldMatrix(!0), bb.synchronizeInstances()
          }
        }
        this._notifyUpdate(hy)
      }
      updateVerticesDataDirectly(yb, bb, Wy) {
        let Uy = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const hy = this.getVertexBuffer(yb);
        hy && (hy.updateDirectly(bb, Wy, Uy), this._notifyUpdate(yb))
      }
      updateVerticesData(yb, bb) {
        let Wy = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Uy = this.getVertexBuffer(yb);
        Uy && (Uy.update(bb), yb === Zy.k.PositionKind && this._updateBoundingInfo(Wy, bb), this._notifyUpdate(yb))
      }
      _updateBoundingInfo(yb, bb) {
        if (yb && this._updateExtend(bb), this._resetPointsArrayCache(), yb) {
          const yb = this._meshes;
          for (const bb of yb) {
            bb.hasBoundingInfo ? bb.qUy().reConstruct(this._extend.minimum, this._extend.maximum) : bb.buildBoundingInfo(this._extend.minimum, this._extend.maximum);
            const yb = bb.vJ;
            for (const bb of yb) bb.refreshBoundingInfo()
          }
        }
      }
      _bind(yb, bb, Wy, Uy) {
        if (!yb) return;
        void 0 === bb && (bb = this._indexBuffer);
        const hy = this.getVertexBuffers();
        if (!hy) return;
        if (bb != this._indexBuffer || !this._vertexArrayObjects && !Uy) return void this._engine.bindBuffers(hy, bb, yb, Wy);
        const fy = Uy || this._vertexArrayObjects,
          Zy = this._engine;
        fy[yb.key] || (fy[yb.key] = Zy.recordVertexArrayObject(hy, bb, yb, Wy)), Zy.bindVertexArrayObject(fy[yb.key], bb)
      }
      getTotalVertices() {
        return this.isReady() ? this._totalVertices : 0
      }
      getVerticesData(yb, bb, Wy) {
        const Uy = this.getVertexBuffer(yb);
        return Uy ? Uy.getFloatData(this._totalVertices, Wy || bb && 1 !== this._meshes.length) : null
      }
      copyVerticesData(yb, bb) {
        const Wy = this.getVertexBuffer(yb);
        if (!Wy) return;
        bb[yb] || (bb[yb] = new Float32Array(this._totalVertices * Wy.getSize()));
        const Uy = Wy.getData();
        Uy && (0, Ey.f)(Uy, Wy.getSize(), Wy.type, Wy.byteOffset, Wy.byteStride, Wy.normalized, this._totalVertices, bb[yb])
      }
      isVertexBufferUpdatable(yb) {
        const bb = this._vertexBuffers[yb];
        return !!bb && bb.isUpdatable()
      }
      getVertexBuffer(yb) {
        return this.isReady() ? this._vertexBuffers[yb] : null
      }
      getVertexBuffers() {
        return this.isReady() ? this._vertexBuffers : null
      }
      isVerticesDataPresent(yb) {
        return this._vertexBuffers ? void 0 !== this._vertexBuffers[yb] : !!this._delayInfo && -1 !== this._delayInfo.indexOf(yb)
      }
      getVerticesDataKinds() {
        const yb = [];
        let bb;
        if (!this._vertexBuffers && this._delayInfo)
          for (bb in this._delayInfo) yb.push(bb);
        else
          for (bb in this._vertexBuffers) yb.push(bb);
        return yb
      }
      updateIndices(yb, bb) {
        let Wy = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this._indexBuffer)
          if (this._indexBufferIsUpdatable) {
            const Uy = yb.length !== this._indices.length;
            if (Wy || (this._indices = yb.slice()), this._engine.updateDynamicIndexBuffer(this._indexBuffer, yb, bb), Uy)
              for (const yb of this._meshes) yb._createGlobalSubMesh(!0)
          } else this.setIndices(yb, null, !0)
      }
      setIndexBuffer(yb, bb, Wy) {
        let Uy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._indices = [], this._indexBufferIsUpdatable = !1, this._indexBuffer = yb, this._totalVertices = bb, this._totalIndices = Wy, yb.is32Bits = null === Uy ? bb > 65535 : Uy;
        for (const hy of this._meshes) hy._createGlobalSubMesh(!0), hy.synchronizeInstances();
        this._notifyUpdate()
      }
      setIndices(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Wy = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Uy = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this._indexBuffer && this._engine._releaseBuffer(this._indexBuffer), this._indices = yb, this._indexBufferIsUpdatable = Wy, 0 !== this._meshes.length && this._indices && (this._indexBuffer = this._engine.createIndexBuffer(this._indices, Wy, "Geometry_" + this.id + "_IndexBuffer")), void 0 != bb && (this._totalVertices = bb);
        for (const hy of this._meshes) hy._createGlobalSubMesh(!Uy), hy.synchronizeInstances();
        this._notifyUpdate()
      }
      getTotalIndices() {
        return this.isReady() ? void 0 !== this._totalIndices ? this._totalIndices : this._indices.length : 0
      }
      Mqy(yb, bb) {
        if (!this.isReady()) return null;
        const Wy = this._indices;
        return bb || yb && 1 !== this._meshes.length ? Wy.slice() : Wy
      }
      getIndexBuffer() {
        return this.isReady() ? this._indexBuffer : null
      }
      _releaseVertexArrayObject() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        yb && this._vertexArrayObjects && this._vertexArrayObjects[yb.key] && (this._engine.releaseVertexArrayObject(this._vertexArrayObjects[yb.key]), delete this._vertexArrayObjects[yb.key])
      }
      releaseForMesh(yb, bb) {
        const Wy = this._meshes,
          Uy = Wy.indexOf(yb); - 1 !== Uy && (Wy.splice(Uy, 1), this._vertexArrayObjects && yb._invalidateInstanceVertexArrayObject(), yb._geometry = null, 0 === Wy.length && bb && this.dispose())
      }
      applyToMesh(yb) {
        if (yb._geometry === this) return;
        const bb = yb._geometry;
        bb && bb.releaseForMesh(yb), this._vertexArrayObjects && yb._invalidateInstanceVertexArrayObject();
        const Wy = this._meshes;
        yb._geometry = this, yb._internalAbstractMeshDataInfo._positions = null, this._scene.pushGeometry(this), Wy.push(yb), this.isReady() ? this._applyToMesh(yb) : this._boundingInfo && yb.setBoundingInfo(this._boundingInfo)
      }
      _updateExtend() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (this.useBoundingInfoFromGeometry && this._boundingInfo) this._extend = {
          minimum: this._boundingInfo.minimum.clone(),
          maximum: this._boundingInfo.maximum.clone()
        };
        else {
          if (!yb && (yb = this.getVerticesData(Zy.k.PositionKind), !yb)) return;
          this._extend = (0, qb.g)(yb, 0, this._totalVertices, this.boundingBias, 3)
        }
      }
      _applyToMesh(yb) {
        for (const bb in this._vertexBuffers) {
          const Wy = this._vertexBuffers[bb];
          Wy._buffer.getBuffer() || Wy.create(), bb === Zy.k.PositionKind && (this._extend || this._updateExtend(), yb.buildBoundingInfo(this._extend.minimum, this._extend.maximum), yb._createGlobalSubMesh(yb.isUnIndexed), yb._updateBoundingInfo())
        }!this._indexBuffer && this._indices && this._indices.length > 0 && (this._indexBuffer = this._engine.createIndexBuffer(this._indices, this._updatable, "Geometry_" + this.id + "_IndexBuffer")), yb._syncGeometryWithMorphTargetManager(), yb.synchronizeInstances()
      }
      _notifyUpdate(yb) {
        this.onGeometryUpdated && this.onGeometryUpdated(this, yb), this._vertexArrayObjects && this._disposeVertexArrayObjects();
        for (const bb of this._meshes) bb._markSubMeshesAsAttributesDirty()
      }
      load(yb, bb) {
        2 !== this.delayLoadState && (this.isReady() ? bb && bb() : (this.delayLoadState = 2, this._queueLoad(yb, bb)))
      }
      _queueLoad(yb, bb) {
        this.delayLoadingFile && (yb.addPendingData(this), (async () => {
          try {
            const Wy = await yb._loadDelayedFileAsync(this.delayLoadingFile, !1, !0);
            if (!this._delayLoadingFunction) return void yb.removePendingData(this);
            this._delayLoadingFunction(JSON.parse(Wy), this), this.delayLoadState = 1, this._delayInfo = [], yb.removePendingData(this);
            const Uy = this._meshes,
              hy = Uy.length;
            for (let yb = 0; yb < hy; yb++) this._applyToMesh(Uy[yb]);
            bb && bb()
          } catch (Wy) {
            yb.removePendingData(this), yb.Koy || Ky.b.Error(`Unable to delay load geometry "${this.id}" from "${this.delayLoadingFile}": ${Wy}`)
          }
        })())
      }
      toLeftHanded() {
        const yb = this.Mqy(!1);
        if (null != yb && yb.length > 0) {
          for (let bb = 0; bb < yb.length; bb += 3) {
            const Wy = yb[bb + 0];
            yb[bb + 0] = yb[bb + 2], yb[bb + 2] = Wy
          }
          this.setIndices(yb)
        }
        const bb = this.getVerticesData(Zy.k.PositionKind, !1);
        if (null != bb && bb.length > 0) {
          for (let yb = 0; yb < bb.length; yb += 3) bb[yb + 2] = -bb[yb + 2];
          this.setVerticesData(Zy.k.PositionKind, bb, !1)
        }
        const Wy = this.getVerticesData(Zy.k.NormalKind, !1);
        if (null != Wy && Wy.length > 0) {
          for (let yb = 0; yb < Wy.length; yb += 3) Wy[yb + 2] = -Wy[yb + 2];
          this.setVerticesData(Zy.k.NormalKind, Wy, !1)
        }
      }
      _resetPointsArrayCache() {
        this._positions = null
      }
      _generatePointsArray() {
        if (this._positions) return !0;
        const yb = this.getVerticesData(Zy.k.PositionKind);
        if (!yb || 0 === yb.length) return !1;
        for (let bb = 3 * this._positionsCache.length, Wy = this._positionsCache.length; bb < yb.length; bb += 3, ++Wy) this._positionsCache[Wy] = Uy.n.FromArray(yb, bb);
        for (let bb = 0, Wy = 0; bb < yb.length; bb += 3, ++Wy) this._positionsCache[Wy].set(yb[0 + bb], yb[1 + bb], yb[2 + bb]);
        return this._positionsCache.length = yb.length / 3, this._positions = this._positionsCache, !0
      }
      Koy() {
        return this._isDisposed
      }
      _disposeVertexArrayObjects() {
        if (this._vertexArrayObjects) {
          for (const Wy in this._vertexArrayObjects) this._engine.releaseVertexArrayObject(this._vertexArrayObjects[Wy]);
          this._vertexArrayObjects = {};
          const yb = this._meshes,
            bb = yb.length;
          for (let Wy = 0; Wy < bb; Wy++) yb[Wy]._invalidateInstanceVertexArrayObject()
        }
      }
      dispose() {
        const yb = this._meshes,
          bb = yb.length;
        let Wy;
        for (Wy = 0; Wy < bb; Wy++) this.releaseForMesh(yb[Wy]);
        this._meshes.length = 0, this._disposeVertexArrayObjects();
        for (const Uy in this._vertexBuffers) this._vertexBuffers[Uy].dispose();
        if (this._vertexBuffers = {}, this._totalVertices = 0, this._indexBuffer && this._engine._releaseBuffer(this._indexBuffer), this._indexBuffer = null, this._indices = [], this.delayLoadState = 0, this.delayLoadingFile = null, this._delayLoadingFunction = null, this._delayInfo = [], this._boundingInfo = null, this._scene.removeGeometry(this), this._parentContainer) {
          const yb = this._parentContainer.geometries.indexOf(this);
          yb > -1 && this._parentContainer.geometries.splice(yb, 1), this._parentContainer = null
        }
        this._isDisposed = !0
      }
      copy(yb) {
        const bb = new ly(yb, this._scene),
          Wy = this.Mqy(void 0, !0);
        Wy && bb.setIndices(Wy);
        let Uy, hy = !1;
        for (Uy in this._vertexBuffers) {
          const yb = this.getVertexBuffer(Uy),
            Wy = yb.getData();
          if (!Wy) continue;
          const fy = yb.isUpdatable(),
            cb = yb.getSize(),
            {
              type: Py,
              byteOffset: oy,
              byteStride: By,
              normalized: Ky
            } = yb;
          hy = hy || fy;
          let ey = this._totalVertices;
          if (yb.getIsInstanced()) {
            let yb;
            yb = Wy instanceof Array ? 4 * Wy.length : Wy.byteLength, ey = yb / By
          }
          const qb = (0, Ey.u)(Wy, cb, Py, oy, By, ey, !0),
            sy = new Zy.k(this._engine, qb, Uy, {
              updatable: fy,
              useBytes: !1,
              stride: cb,
              size: cb,
              offset: 0,
              type: Py,
              normalized: Ky,
              takeBufferOwnership: !0,
              instanced: yb.getIsInstanced()
            });
          bb.setVerticesBuffer(sy, ey)
        }
        for (Uy in bb._updatable = hy, bb.delayLoadState = this.delayLoadState, bb.delayLoadingFile = this.delayLoadingFile, bb._delayLoadingFunction = this._delayLoadingFunction, this._delayInfo) bb._delayInfo = bb._delayInfo || [], bb._delayInfo.push(Uy);
        return bb._boundingInfo = new oy.b(this._extend.minimum, this._extend.maximum), bb
      }
      serialize() {
        const yb = {};
        return yb.id = this.id, yb.uniqueId = this.uniqueId, yb.updatable = this._updatable, ey.c && ey.c.HasTags(this) && (yb.tags = ey.c.GetTags(this)), yb
      }
      _toNumberArray(yb) {
        return Array.isArray(yb) ? yb : Array.prototype.slice.call(yb)
      }
      clearCachedData() {
        this._totalIndices = this._indices.length, this._indices = [], this._resetPointsArrayCache();
        for (const yb in this._vertexBuffers) Object.prototype.hasOwnProperty.call(this._vertexBuffers, yb) && (this._vertexBuffers[yb]._buffer._data = null)
      }
      serializeVerticeData() {
        const yb = this.serialize();
        return this.isVerticesDataPresent(Zy.k.PositionKind) && (yb.positions = this._toNumberArray(this.getVerticesData(Zy.k.PositionKind)), this.isVertexBufferUpdatable(Zy.k.PositionKind) && (yb.positionsUpdatable = !0)), this.isVerticesDataPresent(Zy.k.NormalKind) && (yb.normals = this._toNumberArray(this.getVerticesData(Zy.k.NormalKind)), this.isVertexBufferUpdatable(Zy.k.NormalKind) && (yb.normalsUpdatable = !0)), this.isVerticesDataPresent(Zy.k.TangentKind) && (yb.tangents = this._toNumberArray(this.getVerticesData(Zy.k.TangentKind)), this.isVertexBufferUpdatable(Zy.k.TangentKind) && (yb.tangentsUpdatable = !0)), this.isVerticesDataPresent(Zy.k.UVKind) && (yb.uvs = this._toNumberArray(this.getVerticesData(Zy.k.UVKind)), this.isVertexBufferUpdatable(Zy.k.UVKind) && (yb.uvsUpdatable = !0)), this.isVerticesDataPresent(Zy.k.UV2Kind) && (yb.uvs2 = this._toNumberArray(this.getVerticesData(Zy.k.UV2Kind)), this.isVertexBufferUpdatable(Zy.k.UV2Kind) && (yb.uvs2Updatable = !0)), this.isVerticesDataPresent(Zy.k.UV3Kind) && (yb.uvs3 = this._toNumberArray(this.getVerticesData(Zy.k.UV3Kind)), this.isVertexBufferUpdatable(Zy.k.UV3Kind) && (yb.uvs3Updatable = !0)), this.isVerticesDataPresent(Zy.k.UV4Kind) && (yb.uvs4 = this._toNumberArray(this.getVerticesData(Zy.k.UV4Kind)), this.isVertexBufferUpdatable(Zy.k.UV4Kind) && (yb.uvs4Updatable = !0)), this.isVerticesDataPresent(Zy.k.UV5Kind) && (yb.uvs5 = this._toNumberArray(this.getVerticesData(Zy.k.UV5Kind)), this.isVertexBufferUpdatable(Zy.k.UV5Kind) && (yb.uvs5Updatable = !0)), this.isVerticesDataPresent(Zy.k.UV6Kind) && (yb.uvs6 = this._toNumberArray(this.getVerticesData(Zy.k.UV6Kind)), this.isVertexBufferUpdatable(Zy.k.UV6Kind) && (yb.uvs6Updatable = !0)), this.isVerticesDataPresent(Zy.k.ColorKind) && (yb.colors = this._toNumberArray(this.getVerticesData(Zy.k.ColorKind)), this.isVertexBufferUpdatable(Zy.k.ColorKind) && (yb.colorsUpdatable = !0)), this.isVerticesDataPresent(Zy.k.MatricesIndicesKind) && (yb.matricesIndices = this._toNumberArray(this.getVerticesData(Zy.k.MatricesIndicesKind)), yb.matricesIndicesExpanded = !0, this.isVertexBufferUpdatable(Zy.k.MatricesIndicesKind) && (yb.matricesIndicesUpdatable = !0)), this.isVerticesDataPresent(Zy.k.MatricesWeightsKind) && (yb.matricesWeights = this._toNumberArray(this.getVerticesData(Zy.k.MatricesWeightsKind)), this.isVertexBufferUpdatable(Zy.k.MatricesWeightsKind) && (yb.matricesWeightsUpdatable = !0)), yb.indices = this._toNumberArray(this.Mqy()), yb
      }
      static ExtractFromMesh(yb, bb) {
        const Wy = yb._geometry;
        return Wy ? Wy.copy(bb) : null
      }
      static RandomId() {
        return By.k.RandomId()
      }
      static _GetGeometryByLoadedUniqueId(yb, bb) {
        for (let Wy = 0; Wy < bb.geometries.length; Wy++)
          if (bb.geometries[Wy]._loadedUniqueId === yb) return bb.geometries[Wy];
        return null
      }
      static _ImportGeometry(yb, bb) {
        const Wy = bb.kWy(),
          Uy = yb.geometryUniqueId,
          fy = yb.geometryId;
        if (Uy || fy) {
          const yb = Uy ? this._GetGeometryByLoadedUniqueId(Uy, Wy) : Wy.getGeometryById(fy);
          yb && yb.applyToMesh(bb)
        } else if (yb instanceof ArrayBuffer) {
          const Wy = bb._binaryInfo;
          if (Wy.positionsAttrDesc && Wy.positionsAttrDesc.count > 0) {
            const Uy = new Float32Array(yb, Wy.positionsAttrDesc.offset, Wy.positionsAttrDesc.count);
            bb.setVerticesData(Zy.k.PositionKind, Uy, !1)
          }
          if (Wy.normalsAttrDesc && Wy.normalsAttrDesc.count > 0) {
            const Uy = new Float32Array(yb, Wy.normalsAttrDesc.offset, Wy.normalsAttrDesc.count);
            bb.setVerticesData(Zy.k.NormalKind, Uy, !1)
          }
          if (Wy.tangetsAttrDesc && Wy.tangetsAttrDesc.count > 0) {
            const Uy = new Float32Array(yb, Wy.tangetsAttrDesc.offset, Wy.tangetsAttrDesc.count);
            bb.setVerticesData(Zy.k.TangentKind, Uy, !1)
          }
          if (Wy.uvsAttrDesc && Wy.uvsAttrDesc.count > 0) {
            const Uy = new Float32Array(yb, Wy.uvsAttrDesc.offset, Wy.uvsAttrDesc.count);
            if (Sy.e)
              for (let yb = 1; yb < Uy.length; yb += 2) Uy[yb] = 1 - Uy[yb];
            bb.setVerticesData(Zy.k.UVKind, Uy, !1)
          }
          if (Wy.uvs2AttrDesc && Wy.uvs2AttrDesc.count > 0) {
            const Uy = new Float32Array(yb, Wy.uvs2AttrDesc.offset, Wy.uvs2AttrDesc.count);
            if (Sy.e)
              for (let yb = 1; yb < Uy.length; yb += 2) Uy[yb] = 1 - Uy[yb];
            bb.setVerticesData(Zy.k.UV2Kind, Uy, !1)
          }
          if (Wy.uvs3AttrDesc && Wy.uvs3AttrDesc.count > 0) {
            const Uy = new Float32Array(yb, Wy.uvs3AttrDesc.offset, Wy.uvs3AttrDesc.count);
            if (Sy.e)
              for (let yb = 1; yb < Uy.length; yb += 2) Uy[yb] = 1 - Uy[yb];
            bb.setVerticesData(Zy.k.UV3Kind, Uy, !1)
          }
          if (Wy.uvs4AttrDesc && Wy.uvs4AttrDesc.count > 0) {
            const Uy = new Float32Array(yb, Wy.uvs4AttrDesc.offset, Wy.uvs4AttrDesc.count);
            if (Sy.e)
              for (let yb = 1; yb < Uy.length; yb += 2) Uy[yb] = 1 - Uy[yb];
            bb.setVerticesData(Zy.k.UV4Kind, Uy, !1)
          }
          if (Wy.uvs5AttrDesc && Wy.uvs5AttrDesc.count > 0) {
            const Uy = new Float32Array(yb, Wy.uvs5AttrDesc.offset, Wy.uvs5AttrDesc.count);
            if (Sy.e)
              for (let yb = 1; yb < Uy.length; yb += 2) Uy[yb] = 1 - Uy[yb];
            bb.setVerticesData(Zy.k.UV5Kind, Uy, !1)
          }
          if (Wy.uvs6AttrDesc && Wy.uvs6AttrDesc.count > 0) {
            const Uy = new Float32Array(yb, Wy.uvs6AttrDesc.offset, Wy.uvs6AttrDesc.count);
            if (Sy.e)
              for (let yb = 1; yb < Uy.length; yb += 2) Uy[yb] = 1 - Uy[yb];
            bb.setVerticesData(Zy.k.UV6Kind, Uy, !1)
          }
          if (Wy.colorsAttrDesc && Wy.colorsAttrDesc.count > 0) {
            const Uy = new Float32Array(yb, Wy.colorsAttrDesc.offset, Wy.colorsAttrDesc.count);
            bb.setVerticesData(Zy.k.ColorKind, Uy, !1, Wy.colorsAttrDesc.stride)
          }
          if (Wy.matricesIndicesAttrDesc && Wy.matricesIndicesAttrDesc.count > 0) {
            const Uy = new Int32Array(yb, Wy.matricesIndicesAttrDesc.offset, Wy.matricesIndicesAttrDesc.count),
              hy = [];
            for (let yb = 0; yb < Uy.length; yb++) {
              const bb = Uy[yb];
              hy.push(255 & bb), hy.push((65280 & bb) >> 8), hy.push((16711680 & bb) >> 16), hy.push(bb >> 24 & 255)
            }
            bb.setVerticesData(Zy.k.MatricesIndicesKind, hy, !1)
          }
          if (Wy.matricesIndicesExtraAttrDesc && Wy.matricesIndicesExtraAttrDesc.count > 0) {
            const Uy = new Int32Array(yb, Wy.matricesIndicesExtraAttrDesc.offset, Wy.matricesIndicesExtraAttrDesc.count),
              hy = [];
            for (let yb = 0; yb < Uy.length; yb++) {
              const bb = Uy[yb];
              hy.push(255 & bb), hy.push((65280 & bb) >> 8), hy.push((16711680 & bb) >> 16), hy.push(bb >> 24 & 255)
            }
            bb.setVerticesData(Zy.k.MatricesIndicesExtraKind, hy, !1)
          }
          if (Wy.matricesWeightsAttrDesc && Wy.matricesWeightsAttrDesc.count > 0) {
            const Uy = new Float32Array(yb, Wy.matricesWeightsAttrDesc.offset, Wy.matricesWeightsAttrDesc.count);
            bb.setVerticesData(Zy.k.MatricesWeightsKind, Uy, !1)
          }
          if (Wy.indicesAttrDesc && Wy.indicesAttrDesc.count > 0) {
            const Uy = new Int32Array(yb, Wy.indicesAttrDesc.offset, Wy.indicesAttrDesc.count);
            bb.setIndices(Uy, null)
          }
          if (Wy.subMeshesAttrDesc && Wy.subMeshesAttrDesc.count > 0) {
            const Uy = new Int32Array(yb, Wy.subMeshesAttrDesc.offset, 5 * Wy.subMeshesAttrDesc.count);
            bb.vJ = [];
            for (let yb = 0; yb < Wy.subMeshesAttrDesc.count; yb++) {
              const Wy = Uy[5 * yb + 0],
                hy = Uy[5 * yb + 1],
                fy = Uy[5 * yb + 2],
                Zy = Uy[5 * yb + 3],
                Py = Uy[5 * yb + 4];
              cb.d.AddToMesh(Wy, hy, fy, Zy, Py, bb)
            }
          }
        } else if (yb.positions && yb.normals && yb.indices) {
          if (bb.setVerticesData(Zy.k.PositionKind, yb.positions, yb.positions._updatable || yb.positionsUpdatable), bb.setVerticesData(Zy.k.NormalKind, yb.normals, yb.normals._updatable || yb.normalsUpdatable), yb.tangents && bb.setVerticesData(Zy.k.TangentKind, yb.tangents, yb.tangents._updatable || yb.tangentsUpdatable), yb.uvs && bb.setVerticesData(Zy.k.UVKind, yb.uvs, yb.uvs._updatable || yb.uvsUpdatable), yb.uvs2 && bb.setVerticesData(Zy.k.UV2Kind, yb.uvs2, yb.uvs2._updatable || yb.uvs2Updatable), yb.uvs3 && bb.setVerticesData(Zy.k.UV3Kind, yb.uvs3, yb.uvs3._updatable || yb.uvs3Updatable), yb.uvs4 && bb.setVerticesData(Zy.k.UV4Kind, yb.uvs4, yb.uvs4._updatable || yb.uvs4Updatable), yb.uvs5 && bb.setVerticesData(Zy.k.UV5Kind, yb.uvs5, yb.uvs5._updatable || yb.uvs5Updatable), yb.uvs6 && bb.setVerticesData(Zy.k.UV6Kind, yb.uvs6, yb.uvs6._updatable || yb.uvs6Updatable), yb.colors && bb.setVerticesData(Zy.k.ColorKind, hy.e.CheckColors4(yb.colors, yb.positions.length / 3), yb.colors._updatable), yb.matricesIndices)
            if (yb.matricesIndices._isExpanded || yb.matricesIndicesExpanded) delete yb.matricesIndices._isExpanded, delete yb.matricesIndicesExpanded, bb.setVerticesData(Zy.k.MatricesIndicesKind, yb.matricesIndices, yb.matricesIndices._updatable || yb.matricesIndicesUpdatable);
            else {
              const Wy = [];
              for (let bb = 0; bb < yb.matricesIndices.length; bb++) {
                const Uy = yb.matricesIndices[bb];
                Wy.push(255 & Uy), Wy.push((65280 & Uy) >> 8), Wy.push((16711680 & Uy) >> 16), Wy.push(Uy >> 24 & 255)
              }
              bb.setVerticesData(Zy.k.MatricesIndicesKind, Wy, yb.matricesIndices._updatable || yb.matricesIndicesUpdatable)
            } if (yb.matricesIndicesExtra)
            if (yb.matricesIndicesExtraExpanded || yb.matricesIndicesExtra._isExpanded) delete yb.matricesIndices._isExpanded, delete yb.matricesIndicesExtraExpanded, bb.setVerticesData(Zy.k.MatricesIndicesExtraKind, yb.matricesIndicesExtra, yb.matricesIndicesExtra._updatable || yb.matricesIndicesExtraUpdatable);
            else {
              const Wy = [];
              for (let bb = 0; bb < yb.matricesIndicesExtra.length; bb++) {
                const Uy = yb.matricesIndicesExtra[bb];
                Wy.push(255 & Uy), Wy.push((65280 & Uy) >> 8), Wy.push((16711680 & Uy) >> 16), Wy.push(Uy >> 24 & 255)
              }
              bb.setVerticesData(Zy.k.MatricesIndicesExtraKind, Wy, yb.matricesIndicesExtra._updatable || yb.matricesIndicesExtraUpdatable)
            } yb.matricesWeights && (ly._CleanMatricesWeights(yb, bb), bb.setVerticesData(Zy.k.MatricesWeightsKind, yb.matricesWeights, yb.matricesWeights._updatable)), yb.matricesWeightsExtra && bb.setVerticesData(Zy.k.MatricesWeightsExtraKind, yb.matricesWeightsExtra, yb.matricesWeights._updatable), bb.setIndices(yb.indices, null)
        }
        if (yb.vJ) {
          bb.vJ = [];
          for (let Wy = 0; Wy < yb.vJ.length; Wy++) {
            const Uy = yb.vJ[Wy];
            cb.d.AddToMesh(Uy.materialIndex, Uy.verticesStart, Uy.verticesCount, Uy.indexStart, Uy.indexCount, bb)
          }
        }
        bb._shouldGenerateFlatShading && (bb.convertToFlatShadedMesh(), bb._shouldGenerateFlatShading = !1), bb.computeWorldMatrix(!0), Wy.onMeshImportedObservable.notifyObservers(bb)
      }
      static _CleanMatricesWeights(yb, bb) {
        const Wy = .001;
        if (!Py.e.CleanBoneMatrixWeights) return;
        let Uy;
        if (!(yb.skeletonId > -1)) return;
        {
          const Wy = bb.kWy().getLastSkeletonById(yb.skeletonId);
          if (!Wy) return;
          Uy = Wy.bones.length
        }
        const hy = bb.getVerticesData(Zy.k.MatricesIndicesKind),
          fy = bb.getVerticesData(Zy.k.MatricesIndicesExtraKind),
          cb = yb.matricesWeights,
          oy = yb.matricesWeightsExtra,
          By = yb.numBoneInfluencer,
          Ky = cb.length;
        for (let Zy = 0; Zy < Ky; Zy += 4) {
          let yb = 0,
            bb = -1;
          for (let Uy = 0; Uy < 4; Uy++) {
            const hy = cb[Zy + Uy];
            yb += hy, hy < Wy && bb < 0 && (bb = Uy)
          }
          if (oy)
            for (let Uy = 0; Uy < 4; Uy++) {
              const hy = oy[Zy + Uy];
              yb += hy, hy < Wy && bb < 0 && (bb = Uy + 4)
            }
          if ((bb < 0 || bb > By - 1) && (bb = By - 1), yb > Wy) {
            const bb = 1 / yb;
            for (let yb = 0; yb < 4; yb++) cb[Zy + yb] *= bb;
            if (oy)
              for (let yb = 0; yb < 4; yb++) oy[Zy + yb] *= bb
          } else bb >= 4 ? (oy[Zy + bb - 4] = 1 - yb, fy[Zy + bb - 4] = Uy) : (cb[Zy + bb] = 1 - yb, hy[Zy + bb] = Uy)
        }
        bb.setVerticesData(Zy.k.MatricesIndicesKind, hy), yb.matricesWeightsExtra && bb.setVerticesData(Zy.k.MatricesIndicesExtraKind, fy)
      }
      static Parse(yb, bb, Wy) {
        const hy = new ly(yb.id, bb, void 0, yb.updatable);
        return hy._loadedUniqueId = yb.uniqueId, ey.c && ey.c.AddTagsTo(hy, yb.tags), yb.delayLoadingFile ? (hy.delayLoadState = 4, hy.delayLoadingFile = Wy + yb.delayLoadingFile, hy._boundingInfo = new oy.b(Uy.n.FromArray(yb.boundingBoxMinimum), Uy.n.FromArray(yb.boundingBoxMaximum)), hy._delayInfo = [], yb.hasUVs && hy._delayInfo.push(Zy.k.UVKind), yb.hasUVs2 && hy._delayInfo.push(Zy.k.UV2Kind), yb.hasUVs3 && hy._delayInfo.push(Zy.k.UV3Kind), yb.hasUVs4 && hy._delayInfo.push(Zy.k.UV4Kind), yb.hasUVs5 && hy._delayInfo.push(Zy.k.UV5Kind), yb.hasUVs6 && hy._delayInfo.push(Zy.k.UV6Kind), yb.hasColors && hy._delayInfo.push(Zy.k.ColorKind), yb.hasMatricesIndices && hy._delayInfo.push(Zy.k.MatricesIndicesKind), yb.hasMatricesWeights && hy._delayInfo.push(Zy.k.MatricesWeightsKind), hy._delayLoadingFunction = fy.e.ImportVertexData) : fy.e.ImportVertexData(yb, hy), bb.pushGeometry(hy, !0), hy
      }
    }
  },
  38976: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => Ky,
      h: () => sy
    });
    var Uy = Wy(35861),
      hy = Wy(37350),
      fy = Wy(38944),
      Zy = Wy(38902),
      cb = Wy(37346),
      Py = Wy(38949),
      oy = Wy(38620),
      By = Wy(35909);
    class Ky extends fy.b {
      constructor(yb, bb) {
        super(yb, bb.kWy()), this._indexInSourceMeshInstanceArray = -1, this._distanceToCamera = 0, bb.BZy(this), this._sourceMesh = bb, this._unIndexed = bb._unIndexed, this.position.Coy(bb.position), this.rotation.Coy(bb.rotation), this.vZ.Coy(bb.vZ), bb.rotationQuaternion && (this.rotationQuaternion = bb.rotationQuaternion.clone()), this.animations = bb.animations.slice();
        for (const Wy of bb.getAnimationRanges()) null != Wy && this.createAnimationRange(Wy.name, Wy.from, Wy.to);
        if (this.infiniteDistance = bb.infiniteDistance, this.setPivotMatrix(bb.getPivotMatrix()), bb.skeleton || bb.morphTargetManager || !bb.hasBoundingInfo) this.refreshBoundingInfo(!0, !0);
        else {
          const yb = bb.qUy();
          this.buildBoundingInfo(yb.minimum, yb.maximum)
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
      set receiveShadows(yb) {
        this._sourceMesh?.receiveShadows !== yb && hy.b.Warn("Setting receiveShadows on an instanced mesh has no effect")
      }
      get material() {
        return this._sourceMesh.material
      }
      set material(yb) {
        this._sourceMesh?.material !== yb && hy.b.Warn("Setting material on an instanced mesh has no effect")
      }
      get visibility() {
        return this._sourceMesh.visibility
      }
      set visibility(yb) {
        this._sourceMesh?.visibility !== yb && hy.b.Warn("Setting visibility on an instanced mesh has no effect")
      }
      get skeleton() {
        return this._sourceMesh.skeleton
      }
      set skeleton(yb) {
        this._sourceMesh?.skeleton !== yb && hy.b.Warn("Setting skeleton on an instanced mesh has no effect")
      }
      get renderingGroupId() {
        return this._sourceMesh.renderingGroupId
      }
      set renderingGroupId(yb) {
        this._sourceMesh && yb !== this._sourceMesh.renderingGroupId && hy.b.Warn("Note - setting renderingGroupId of an instanced mesh has no effect on the scene")
      }
      get meshBlendingTag() {
        return this._sourceMesh.meshBlendingTag
      }
      set meshBlendingTag(yb) {
        this._sourceMesh && yb !== this._sourceMesh.meshBlendingTag && hy.b.Warn("Setting meshBlendingTag on an instanced mesh has no effect")
      }
      getTotalVertices() {
        return this._sourceMesh ? this._sourceMesh.getTotalVertices() : 0
      }
      getTotalIndices() {
        return this._sourceMesh.getTotalIndices()
      }
      get zKy() {
        return this._sourceMesh
      }
      get geometry() {
        return this._sourceMesh._geometry
      }
      createInstance(yb) {
        return this._sourceMesh.createInstance(yb)
      }
      isReady() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return this._sourceMesh.isReady(yb, !0)
      }
      getVerticesData(yb, bb, Wy) {
        return this._sourceMesh.getVerticesData(yb, bb, Wy)
      }
      copyVerticesData(yb, bb) {
        this._sourceMesh.copyVerticesData(yb, bb)
      }
      getVertexBuffer(yb, bb) {
        return this._sourceMesh.getVertexBuffer(yb, bb)
      }
      setVerticesData(yb, bb, Wy, Uy) {
        return this.zKy && this.zKy.setVerticesData(yb, bb, Wy, Uy), this.zKy
      }
      updateVerticesData(yb, bb, Wy, Uy) {
        return this.zKy && this.zKy.updateVerticesData(yb, bb, Wy, Uy), this.zKy
      }
      setIndices(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return this.zKy && this.zKy.setIndices(yb, bb), this.zKy
      }
      isVerticesDataPresent(yb) {
        return this._sourceMesh.isVerticesDataPresent(yb)
      }
      Mqy() {
        return this._sourceMesh.Mqy()
      }
      get _positions() {
        return this._sourceMesh._positions
      }
      refreshBoundingInfo() {
        let yb, bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Wy = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.hasBoundingInfo && this.qUy().isLocked) return this;
        yb = "object" === typeof bb ? bb : {
          applySkeleton: bb,
          applyMorph: Wy
        };
        const Uy = this._sourceMesh.geometry ? this._sourceMesh.geometry.boundingBias : null;
        return this._refreshBoundingInfo(this._sourceMesh._getData(yb, null, oy.k.PositionKind), Uy), this
      }
      _preActivate() {
        return this._currentLOD && this._currentLOD._preActivate(), this
      }
      _activate(yb, bb) {
        if (super._activate(yb, bb), this._sourceMesh.vJ || hy.b.Warn("Instances should only be created for meshes with geometry."), this._currentLOD) {
          if (this._currentLOD._getWorldMatrixDeterminant() >= 0 !== this._getWorldMatrixDeterminant() >= 0) return this._internalAbstractMeshDataInfo._actAsRegularMesh = !0, !0;
          if (this._internalAbstractMeshDataInfo._actAsRegularMesh = !1, this._currentLOD._registerInstanceForRenderId(this, yb), bb) {
            if (!this._currentLOD._internalAbstractMeshDataInfo._isActiveIntermediate) return this._currentLOD._internalAbstractMeshDataInfo._onlyForInstancesIntermediate = !0, !0
          } else if (!this._currentLOD._internalAbstractMeshDataInfo._isActive) return this._currentLOD._internalAbstractMeshDataInfo._onlyForInstances = !0, !0
        }
        return !1
      }
      _postActivate() {
        this._sourceMesh.edgesShareWithInstances && this._sourceMesh._edgesRenderer && this._sourceMesh._edgesRenderer.isEnabled && this._sourceMesh._renderingGroup ? (this._sourceMesh._renderingGroup._edgesRenderers.pushNoDuplicate(this._sourceMesh._edgesRenderer), this._sourceMesh._edgesRenderer.customInstances.push(this.getWorldMatrix())) : this._edgesRenderer && this._edgesRenderer.isEnabled && this._sourceMesh._renderingGroup && this._sourceMesh._renderingGroup._edgesRenderers.push(this._edgesRenderer)
      }
      getWorldMatrix() {
        if (this._currentLOD && this._currentLOD !== this._sourceMesh && this._currentLOD.billboardMode !== Py.f.BILLBOARDMODE_NONE && this._currentLOD._masterMesh !== this) {
          this._billboardWorldMatrix || (this._billboardWorldMatrix = new Uy.c);
          const yb = this._currentLOD._masterMesh;
          return this._currentLOD._masterMesh = this, Uy.j.dU[7].Coy(this._currentLOD.position), this._currentLOD.position.set(0, 0, 0), this._billboardWorldMatrix.Coy(this._currentLOD.computeWorldMatrix(!0)), this._currentLOD.position.Coy(Uy.j.dU[7]), this._currentLOD._masterMesh = yb, this._billboardWorldMatrix
        }
        return super.getWorldMatrix()
      }
      get zWy() {
        return !0
      }
      getLOD(yb) {
        if (!yb) return this;
        const bb = this.zKy.getLODLevels();
        if (bb && 0 !== bb.length) {
          const bb = this.qUy();
          this._currentLOD = this.zKy.getLOD(yb, bb.GBy)
        } else this._currentLOD = this.zKy;
        return this._currentLOD
      }
      _preActivateForIntermediateRendering(yb) {
        return this.zKy._preActivateForIntermediateRendering(yb)
      }
      _syncSubMeshes() {
        if (this.releaseSubMeshes(), this._sourceMesh.vJ)
          for (let yb = 0; yb < this._sourceMesh.vJ.length; yb++) this._sourceMesh.vJ[yb].clone(this, this._sourceMesh);
        return this
      }
      _generatePointsArray() {
        return this._sourceMesh._generatePointsArray()
      }
      _updateBoundingInfo() {
        return this.hasBoundingInfo ? this.qUy().update(this.worldMatrixFromCache) : this.buildBoundingInfo(this.absolutePosition, this.absolutePosition, this.worldMatrixFromCache), this._updateSubMeshesBoundingInfo(this.worldMatrixFromCache), this
      }
      clone(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Wy = arguments.length > 2 ? arguments[2] : void 0;
        const Uy = ((arguments.length > 3 ? arguments[3] : void 0) || this._sourceMesh).createInstance(yb);
        if (cb.d.DeepCopy(this, Uy, ["name", "vJ", "uniqueId", "parent", "lightSources", "receiveShadows", "material", "visibility", "skeleton", "zKy", "zWy", "facetNb", "isFacetDataEnabled", "isBlocked", "useBones", "NBy", "collider", "edgesRenderer", "forward", "up", "right", "absolutePosition", "absoluteScaling", "absoluteRotationQuaternion", "Hqy", "nonUniformScaling", "behaviors", "worldMatrixFromCache", "hasThinInstances", "hasBoundingInfo", "geometry"], []), bb && (Uy.parent = bb), !Wy)
          for (let hy = 0; hy < this.kWy().meshes.length; hy++) {
            const yb = this.kWy().meshes[hy];
            yb.parent === this && yb.clone(yb.name, Uy)
          }
        return Uy.computeWorldMatrix(!0), this.onClonedObservable.notifyObservers(Uy), Uy
      }
      dispose(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._sourceMesh.eZy(this), super.dispose(yb, bb)
      }
      _serializeAsParent(yb) {
        super._serializeAsParent(yb), yb.parentId = this._sourceMesh.uniqueId, yb.parentInstanceIndex = this._indexInSourceMeshInstanceArray
      }
      instantiateHierarchy() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          bb = arguments.length > 1 ? arguments[1] : void 0,
          Wy = arguments.length > 2 ? arguments[2] : void 0;
        const Uy = this.clone("Clone of " + (this.name || this.id), yb || this.parent, !0, bb && bb.newSourcedMesh);
        Uy && Wy && Wy(this, Uy);
        for (const hy of this.getChildTransformNodes(!0)) hy.instantiateHierarchy(Uy, bb, Wy);
        return Uy
      }
    }
    let ey = !1;

    function qb(yb, bb, Wy, Uy, hy) {
      for (let fy = 0; fy < bb.length; fy++) {
        const Zy = yb[bb[fy]] ?? 0,
          cb = hy + Wy[fy];
        Zy.toArray ? Zy.toArray(Uy, cb) : Zy.copyToArray ? Zy.copyToArray(Uy, cb) : Uy[cb] = Zy
      }
    }

    function sy() {
      ey || (ey = !0, Zy.c._instancedMeshFactory = (yb, bb) => {
        const Wy = new Ky(yb, bb);
        if (bb.BWy) {
          Wy.BWy = {};
          for (const yb in bb.BWy) Wy.BWy[yb] = bb.BWy[yb]
        }
        return Wy
      }, Zy.c.prototype.oWy = function(yb, bb) {
        if (!this.BWy) {
          this.BWy = {};
          for (const yb of this.instances) yb.BWy = {}
        }
        this._userInstancedBuffersStorage || (this._userInstancedBuffersStorage = {
          data: {},
          vertexBuffers: {},
          strides: {},
          sizes: {},
          vertexArrayObjects: this.xh().getCaps().vertexArrayObject ? {} : void 0
        }), this.BWy[yb] = null, this._userInstancedBuffersStorage.strides[yb] = bb;
        const Wy = this._userInstancedBuffersStorage;
        Wy.interleavedKinds = [], Wy.interleavedOffsets = [], Wy.interleavedRowStride = 0;
        for (const Uy in Wy.strides) Wy.interleavedKinds.push(Uy), Wy.interleavedOffsets.push(Wy.interleavedRowStride), Wy.interleavedRowStride += Wy.strides[Uy];
        Wy.interleavedData = new Float32Array(32 * Wy.interleavedRowStride);
        for (const Uy in Wy.interleavedBuffers) Wy.interleavedBuffers[Uy].buffer.dispose();
        Wy.interleavedBuffers = {}, Wy.vertexBuffers[yb] = null;
        for (const Uy of this.instances) Uy.BWy[yb] = null;
        this._invalidateInstanceVertexArrayObject(), this._markSubMeshesAsAttributesDirty()
      }, Zy.c.prototype._processInstancedBuffers = function(yb, bb) {
        const Wy = this._userInstancedBuffersStorage,
          Uy = Wy.interleavedRowStride;
        if (!Uy) return;
        const hy = yb ? yb.length : 0,
          fy = (hy + 1) * Uy;
        let Zy = Wy.interleavedData;
        if (Zy.length < fy) {
          let yb = Zy.length;
          for (; yb < fy;) yb *= 2;
          Zy = Wy.interleavedData = new Float32Array(yb)
        }
        const cb = Wy.interleavedKinds,
          Py = Wy.interleavedOffsets;
        let By = 0;
        bb && (qb(this.BWy, cb, Py, Zy, By), By += Uy);
        for (let oy = 0; oy < hy; oy++) qb(yb[oy].BWy, cb, Py, Zy, By), By += Uy;
        let Ky = "shared",
          ey = Wy.vertexBuffers;
        this._instanceDataStorage.useMonoDataStorageRenderPass || (Ky = this._instanceDataStorage.engine.currentRenderPassId, Wy.renderPasses || (Wy.renderPasses = {}), Wy.renderPasses[Ky] || (Wy.renderPasses[Ky] = {}), ey = Wy.renderPasses[Ky]);
        const sy = Wy.interleavedBuffers[Ky];
        let Sy = !sy || sy.data !== Zy;
        for (let oy = 0; !Sy && oy < cb.length; oy++) Sy = !ey[cb[oy]];
        if (!Sy) return void sy.buffer.updateDirectly(Zy, 0);
        sy?.buffer.dispose();
        const Ey = new oy.b(this.xh(), Zy, !0, Uy, !1, !0);
        for (let oy = 0; oy < cb.length; oy++) {
          const yb = cb[oy],
            bb = Ey.createVertexBuffer(yb, Py[oy], Wy.strides[yb]);
          bb.hashCode += bb.byteOffset * 2 ** 24, ey[yb] = bb
        }
        Wy.interleavedBuffers[Ky] = {
          buffer: Ey,
          data: Zy
        }, this._invalidateInstanceVertexArrayObject()
      }, Zy.c.prototype._invalidateInstanceVertexArrayObject = function() {
        if (this._userInstancedBuffersStorage && void 0 !== this._userInstancedBuffersStorage.vertexArrayObjects) {
          for (const yb in this._userInstancedBuffersStorage.vertexArrayObjects) this.xh().releaseVertexArrayObject(this._userInstancedBuffersStorage.vertexArrayObjects[yb]);
          this._userInstancedBuffersStorage.vertexArrayObjects = {}
        }
      }, Zy.c.prototype._disposeInstanceSpecificData = function() {
        for (const bb in this._instanceDataStorage.renderPasses) this._instanceDataStorage.renderPasses[bb].instancesBuffer?.dispose();
        for (this._instanceDataStorage.renderPasses = {}, this._instanceDataStorage.dataStorageRenderPass?.instancesBuffer?.dispose(); this.instances.length;) this.instances[0].dispose();
        for (const bb in this.BWy) this._userInstancedBuffersStorage.vertexBuffers[bb] && this._userInstancedBuffersStorage.vertexBuffers[bb].dispose();
        const yb = this._userInstancedBuffersStorage?.interleavedBuffers;
        if (yb) {
          for (const bb in yb) yb[bb].buffer.dispose();
          this._userInstancedBuffersStorage.interleavedBuffers = {}
        }
        this._invalidateInstanceVertexArrayObject(), this.BWy = {}
      }, (0, By.e)("BABYLON.InstancedMesh", Ky))
    }
  },
  38902: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => xb,
      g: () => dy,
      i: () => Dy
    });
    var Uy, hy, fy, Zy, cb, Py, oy, By, Ky, ey, qb, sy, Sy, Ey, ly = Wy(35893),
      mb = Wy(38576),
      Cy = Wy(38511),
      Ty = Wy(37346),
      Vy = Wy(38494),
      Jy = Wy(38907),
      gb = Wy(38694),
      Gy = Wy(35861),
      Oy = Wy(35919),
      Ry = Wy(38697),
      vb = Wy(38620),
      ib = Wy(38915),
      My = Wy(38922),
      Yy = Wy(38944),
      Xy = Wy(38784),
      ny = Wy(38782),
      uy = Wy(38877),
      rb = Wy(38957),
      Hy = Wy(38929),
      ab = Wy(38485),
      Fy = Wy(37350),
      py = Wy(35909),
      Ly = Wy(38347),
      Qy = Wy(38649);
    class jb {
      constructor(yb, bb) {
        this.distanceOrScreenCoverage = yb, this.mesh = bb
      }
    }
    class Dy {}
    class tb {
      constructor() {
        this.batchCache = new kb(this), this.batchCacheReplacementModeInFrozenMode = new kb(this), this.instancesBufferSize = 2048
      }
    }
    class wy {
      constructor() {
        this.renderPasses = {}
      }
    }
    class kb {
      constructor(yb) {
        this.parent = yb, this.mustReturn = !1, this.visibleInstances = new Array, this.renderSelf = [], this.hardwareInstancedRendering = []
      }
    }
    class Ny {
      constructor() {
        this.instancesCount = 0, this.matrixBuffer = null, this.previousMatrixBuffer = null, this.matrixBufferSize = 512, this.matrixData = null, this.boundingVectors = [], this.worldMatrices = null
      }
    }
    class zb {
      constructor() {
        this._areNormalsFrozen = !1, this._source = null, this.meshMap = null, this._preActivateId = -1, this._LODLevels = new Array, this._useLODScreenCoverage = !1, this._effectiveMaterial = null, this._forcedInstanceCount = 0, this._overrideRenderingFillMode = null
      }
    }
    const Iy = {
      source: null,
      parent: null,
      doNotCloneChildren: !1,
      clonePhysicsImpostor: !0,
      cloneThinInstances: !1
    };
    class xb extends Yy.b {
      static _GetDefaultSideOrientation(yb) {
        return yb || xb.FRONTSIDE
      }
      get useLODScreenCoverage() {
        return this._internalMeshDataInfo._useLODScreenCoverage
      }
      set useLODScreenCoverage(yb) {
        this._internalMeshDataInfo._useLODScreenCoverage = yb, this._sortLODLevels()
      }
      get computeBonesUsingShaders() {
        return this._internalAbstractMeshDataInfo._computeBonesUsingShaders
      }
      set computeBonesUsingShaders(yb) {
        this._internalAbstractMeshDataInfo._computeBonesUsingShaders !== yb && (yb && this._internalMeshDataInfo._sourcePositions && (this.setVerticesData(vb.k.PositionKind, this._internalMeshDataInfo._sourcePositions, !0), this._internalMeshDataInfo._sourceNormals && this.setVerticesData(vb.k.NormalKind, this._internalMeshDataInfo._sourceNormals, !0), this._internalMeshDataInfo._sourcePositions = null, this._internalMeshDataInfo._sourceNormals = null), this._internalAbstractMeshDataInfo._computeBonesUsingShaders = yb, this._markSubMeshesAsAttributesDirty())
      }
      get onBeforeRenderObservable() {
        return this._internalMeshDataInfo._onBeforeRenderObservable || (this._internalMeshDataInfo._onBeforeRenderObservable = new ly.c), this._internalMeshDataInfo._onBeforeRenderObservable
      }
      get onBeforeBindObservable() {
        return this._internalMeshDataInfo._onBeforeBindObservable || (this._internalMeshDataInfo._onBeforeBindObservable = new ly.c), this._internalMeshDataInfo._onBeforeBindObservable
      }
      get onAfterRenderObservable() {
        return this._internalMeshDataInfo._onAfterRenderObservable || (this._internalMeshDataInfo._onAfterRenderObservable = new ly.c), this._internalMeshDataInfo._onAfterRenderObservable
      }
      get onBetweenPassObservable() {
        return this._internalMeshDataInfo._onBetweenPassObservable || (this._internalMeshDataInfo._onBetweenPassObservable = new ly.c), this._internalMeshDataInfo._onBetweenPassObservable
      }
      get onBeforeDrawObservable() {
        return this._internalMeshDataInfo._onBeforeDrawObservable || (this._internalMeshDataInfo._onBeforeDrawObservable = new ly.c), this._internalMeshDataInfo._onBeforeDrawObservable
      }
      set onBeforeDraw(yb) {
        this._onBeforeDrawObserver && this.onBeforeDrawObservable.remove(this._onBeforeDrawObserver), this._onBeforeDrawObserver = this.onBeforeDrawObservable.add(yb)
      }
      get NBy() {
        return this.instances.length > 0
      }
      get hasThinInstances() {
        return (this.forcedInstanceCount || this._thinInstanceDataStorage.instancesCount || 0) > 0
      }
      get forcedInstanceCount() {
        return this._internalMeshDataInfo._forcedInstanceCount
      }
      set forcedInstanceCount(yb) {
        this._internalMeshDataInfo._forcedInstanceCount = yb
      }
      get sideOrientation() {
        return this._internalMeshDataInfo._sideOrientation
      }
      set sideOrientation(yb) {
        this._internalMeshDataInfo._sideOrientation = yb, this._internalAbstractMeshDataInfo._sideOrientationHint = this._scene.useRightHandedSystem && 1 === yb || !this._scene.useRightHandedSystem && 0 === yb
      }
      get _effectiveSideOrientation() {
        return this._internalMeshDataInfo._effectiveSideOrientation
      }
      get overrideMaterialSideOrientation() {
        return this.sideOrientation
      }
      set overrideMaterialSideOrientation(yb) {
        this.sideOrientation = yb, this.material && (this.material.sideOrientation = null)
      }
      get overrideRenderingFillMode() {
        return this._internalMeshDataInfo._overrideRenderingFillMode
      }
      set overrideRenderingFillMode(yb) {
        this._internalMeshDataInfo._overrideRenderingFillMode = yb
      }
      get material() {
        return this._internalAbstractMeshDataInfo._material
      }
      set material(yb) {
        yb && (this.material && null === this.material.sideOrientation || this._internalAbstractMeshDataInfo._sideOrientationHint) && (yb.sideOrientation = null), this._setMaterial(yb)
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
      set isUnIndexed(yb) {
        this._unIndexed !== yb && (this._unIndexed = yb, this._markSubMeshesAsAttributesDirty())
      }
      get worldMatrixInstancedBuffer() {
        const yb = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._instanceDataStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId];
        return yb ? yb.instancesData : void 0
      }
      get previousWorldMatrixInstancedBuffer() {
        const yb = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._instanceDataStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId];
        return yb ? yb.instancesPreviousData : void 0
      }
      get manualUpdateOfWorldMatrixInstancedBuffer() {
        return this._instanceDataStorage.manualUpdate
      }
      set manualUpdateOfWorldMatrixInstancedBuffer(yb) {
        this._instanceDataStorage.manualUpdate = yb
      }
      get manualUpdateOfPreviousWorldMatrixInstancedBuffer() {
        return this._instanceDataStorage.previousManualUpdate
      }
      set manualUpdateOfPreviousWorldMatrixInstancedBuffer(yb) {
        this._instanceDataStorage.previousManualUpdate = yb
      }
      get forceWorldMatrixInstancedBufferUpdate() {
        return this._instanceDataStorage.forceMatrixUpdates
      }
      set forceWorldMatrixInstancedBufferUpdate(yb) {
        this._instanceDataStorage.forceMatrixUpdates = yb
      }
      _copySource(yb, bb) {
        let Wy = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          Uy = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const hy = this.kWy();
        if (yb._geometry && yb._geometry.applyToMesh(this), Ty.d.DeepCopy(yb, this, ["name", "material", "skeleton", "instances", "parent", "uniqueId", "source", "metadata", "morphTargetManager", "NBy", "worldMatrixInstancedBuffer", "previousWorldMatrixInstancedBuffer", "hasLODLevels", "geometry", "isBlocked", "areNormalsFrozen", "facetNb", "isFacetDataEnabled", "lightSources", "useBones", "zWy", "collider", "edgesRenderer", "forward", "up", "right", "absolutePosition", "absoluteScaling", "absoluteRotationQuaternion", "Hqy", "nonUniformScaling", "behaviors", "worldMatrixFromCache", "hasThinInstances", "cloneMeshMap", "hasBoundingInfo", "physicsBody", "physicsImpostor"], ["_poseMatrix"]), this._internalMeshDataInfo._source = yb, hy.useClonedMeshMap && (yb._internalMeshDataInfo.meshMap || (yb._internalMeshDataInfo.meshMap = {}), yb._internalMeshDataInfo.meshMap[this.uniqueId] = this), this._originalBuilderSideOrientation = yb._originalBuilderSideOrientation, this._creationDataStorage = yb._creationDataStorage, yb._ranges) {
          const bb = yb._ranges;
          for (const yb in bb) Object.prototype.hasOwnProperty.call(bb, yb) && bb[yb] && this.createAnimationRange(yb, bb[yb].from, bb[yb].to)
        }
        if (yb.metadata && yb.metadata.clone ? this.metadata = yb.metadata.clone() : this.metadata = yb.metadata, this._internalMetadata = yb._internalMetadata, this.meshBlendingTag = yb.meshBlendingTag, Vy.c && Vy.c.HasTags(yb) && Vy.c.AddTagsTo(this, Vy.c.GetTags(yb, !0)), this.dJ(yb.isEnabled(!1)), this.parent = yb.parent, this.setPivotMatrix(yb.getPivotMatrix(), this._postMultiplyPivotMatrix), this.id = this.name + "." + yb.id, this.material = yb.material, !bb) {
          const hy = yb.getDescendants(!0);
          for (let yb = 0; yb < hy.length; yb++) {
            const fy = hy[yb];
            fy._isMesh ? (Iy.parent = this, Iy.doNotCloneChildren = bb, Iy.clonePhysicsImpostor = Wy, Iy.cloneThinInstances = Uy, fy.clone(this.name + "." + fy.name, Iy)) : fy.clone && fy.clone(this.name + "." + fy.name, this)
          }
        }
        if (yb.morphTargetManager && (this.morphTargetManager = yb.morphTargetManager), (0, Ly.d)(hy.getPhysicsEngine)) {
          const bb = hy.getPhysicsEngine();
          if (Wy && bb)
            if (1 === bb.getPluginVersion()) {
              const Wy = bb.getImpostorForPhysicsObject(yb);
              Wy && (this.physicsImpostor = Wy.clone(this))
            } else 2 === bb.getPluginVersion() && yb.physicsBody && yb.physicsBody.clone(this)
        }
        for (let fy = 0; fy < hy.YV.length; fy++) {
          const bb = hy.YV[fy];
          bb.emitter === yb && bb.clone(bb.name, this)
        }
        if (this.skeleton = yb.skeleton, Uy && (yb._thinInstanceDataStorage.matrixData ? (this.VZy("matrix", new Float32Array(yb._thinInstanceDataStorage.matrixData), 16, !yb._thinInstanceDataStorage.matrixBuffer.isUpdatable()), this._thinInstanceDataStorage.matrixBufferSize = yb._thinInstanceDataStorage.matrixBufferSize, this._thinInstanceDataStorage.instancesCount = yb._thinInstanceDataStorage.instancesCount) : this._thinInstanceDataStorage.matrixBufferSize = yb._thinInstanceDataStorage.matrixBufferSize, yb._userThinInstanceBuffersStorage)) {
          const bb = yb._userThinInstanceBuffersStorage;
          for (const yb in bb.data) this.VZy(yb, new Float32Array(bb.data[yb]), bb.strides[yb], !bb.vertexBuffers?.[yb]?.isUpdatable()), this._userThinInstanceBuffersStorage.sizes[yb] = bb.sizes[yb]
        }
        this.refreshBoundingInfo(!0, !0), this.computeWorldMatrix(!0)
      }
      constructor(yb) {
        let bb, Wy = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Uy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          hy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          fy = arguments.length > 4 ? arguments[4] : void 0,
          Zy = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        super(yb, Wy), this._internalMeshDataInfo = new zb, this.delayLoadState = 0, this.instances = [], this._creationDataStorage = null, this._geometry = null, this._thinInstanceDataStorage = new Ny, this._shouldGenerateFlatShading = !1, this._originalBuilderSideOrientation = xb.DEFAULTSIDE, this.ignoreCameraMaxZ = !1, Wy = this.kWy(), this._instanceDataStorage = new wy, this._instanceDataStorage.engine = Wy.xh(), this._instanceDataStorage.useMonoDataStorageRenderPass = !this._instanceDataStorage.engine.isWebGPU, this._instanceDataStorage.useMonoDataStorageRenderPass && (this._instanceDataStorage.dataStorageRenderPass = new tb), this._scene.useRightHandedSystem ? this.sideOrientation = 0 : this.sideOrientation = 1, this._onBeforeDraw = (yb, bb, Wy) => {
          yb && Wy && (this._uniformBuffer ? this.transferToEffect(bb) : Wy.bindOnlyWorldMatrix(bb))
        };
        let cb = !1;
        if (Uy && void 0 === Uy._addToSceneRootNodes) {
          const yb = Uy;
          bb = yb.parent ?? null, hy = yb.source ?? null, fy = yb.doNotCloneChildren ?? !1, Zy = yb.clonePhysicsImpostor ?? !0, cb = yb.cloneThinInstances ?? !1
        } else bb = Uy;
        hy && this._copySource(hy, fy, Zy, cb), null !== bb && (this.parent = bb), this._instanceDataStorage.hardwareInstancedRendering = this.xh().getCaps().instancedArrays, this._internalMeshDataInfo._onMeshReadyObserverAdded = yb => {
          yb.unregisterOnNextCall = !0, this.isReady(!0) ? this.onMeshReadyObservable.notifyObservers(this) : this._internalMeshDataInfo._checkReadinessObserver || (this._internalMeshDataInfo._checkReadinessObserver = this._scene.onBeforeRenderObservable.add((() => {
            this.isReady(!0) && (this._scene.onBeforeRenderObservable.remove(this._internalMeshDataInfo._checkReadinessObserver), this._internalMeshDataInfo._checkReadinessObserver = null, this.onMeshReadyObservable.notifyObservers(this))
          })))
        }, this.onMeshReadyObservable = new ly.c(this._internalMeshDataInfo._onMeshReadyObserverAdded), hy && hy.onClonedObservable.notifyObservers(this)
      }
      instantiateHierarchy() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          bb = arguments.length > 1 ? arguments[1] : void 0,
          Wy = arguments.length > 2 ? arguments[2] : void 0;
        const Uy = 0 === this.getTotalVertices() || bb && bb.doNotInstantiate && (!0 === bb.doNotInstantiate || bb.doNotInstantiate(this)) ? this.clone("Clone of " + (this.name || this.id), yb || this.parent, !0) : this.createInstance("instance of " + (this.name || this.id));
        Uy.parent = yb || this.parent, Uy.position = this.position.clone(), Uy.vZ = this.vZ.clone(), this.rotationQuaternion ? Uy.rotationQuaternion = this.rotationQuaternion.clone() : Uy.rotation = this.rotation.clone(), Wy && Wy(this, Uy);
        for (const hy of this.getChildTransformNodes(!0)) "InstancedMesh" === hy.getClassName() && "Mesh" === Uy.getClassName() && hy.zKy === this ? hy.instantiateHierarchy(Uy, {
          doNotInstantiate: bb && bb.doNotInstantiate || !1,
          newSourcedMesh: Uy
        }, Wy) : hy.instantiateHierarchy(Uy, bb, Wy);
        return Uy
      }
      getClassName() {
        return "Mesh"
      }
      get _isMesh() {
        return !0
      }
      toString(yb) {
        let bb = super.toString(yb);
        if (bb += ", n vertices: " + this.getTotalVertices(), bb += ", parent: " + (this._waitingParentId ? this._waitingParentId : this.parent ? this.parent.name : "NONE"), this.animations)
          for (let Wy = 0; Wy < this.animations.length; Wy++) bb += ", animation[0]: " + this.animations[Wy].toString(yb);
        if (yb)
          if (this._geometry) {
            const yb = this.Mqy(),
              Wy = this.getVerticesData(vb.k.PositionKind);
            Wy && yb && (bb += ", flat shading: " + (Wy.length / 3 === yb.length ? "YES" : "NO"))
          } else bb += ", flat shading: UNKNOWN";
        return bb
      }
      _unBindEffect() {
        super._unBindEffect();
        for (const yb of this.instances) yb._unBindEffect()
      }
      get hasLODLevels() {
        return this._internalMeshDataInfo._LODLevels.length > 0
      }
      getLODLevels() {
        return this._internalMeshDataInfo._LODLevels
      }
      _sortLODLevels() {
        const yb = this._internalMeshDataInfo._useLODScreenCoverage ? -1 : 1;
        this._internalMeshDataInfo._LODLevels.sort(((bb, Wy) => bb.distanceOrScreenCoverage < Wy.distanceOrScreenCoverage ? yb : bb.distanceOrScreenCoverage > Wy.distanceOrScreenCoverage ? -yb : 0))
      }
      addLODLevel(yb, bb) {
        if (bb && bb._masterMesh) return Fy.b.Warn("You cannot use a mesh as LOD level twice"), this;
        const Wy = new jb(yb, bb);
        return this._internalMeshDataInfo._LODLevels.push(Wy), bb && (bb._masterMesh = this), this._sortLODLevels(), this
      }
      getLODLevelAtDistance(yb) {
        const bb = this._internalMeshDataInfo;
        for (let Wy = 0; Wy < bb._LODLevels.length; Wy++) {
          const Uy = bb._LODLevels[Wy];
          if (Uy.distanceOrScreenCoverage === yb) return Uy.mesh
        }
        return null
      }
      removeLODLevel(yb) {
        const bb = this._internalMeshDataInfo;
        for (let Wy = 0; Wy < bb._LODLevels.length; Wy++) bb._LODLevels[Wy].mesh === yb && (bb._LODLevels.splice(Wy, 1), yb && (yb._masterMesh = null));
        return this._sortLODLevels(), this
      }
      getLOD(yb, bb) {
        const Wy = this._internalMeshDataInfo;
        if (!Wy._LODLevels || 0 === Wy._LODLevels.length) return this;
        const Uy = bb || this.qUy().GBy,
          hy = yb.mode === gb.b.ORTHOGRAPHIC_CAMERA ? yb.minZ : Uy.centerWorld.subtract(yb.globalPosition).length();
        let fy = hy,
          Zy = 1;
        if (Wy._useLODScreenCoverage) {
          const bb = yb.screenArea;
          let Wy = Uy.radiusWorld * yb.minZ / hy;
          Wy = Wy * Wy * Math.PI, fy = Wy / bb, Zy = -1
        }
        if (Zy * Wy._LODLevels[Wy._LODLevels.length - 1].distanceOrScreenCoverage > Zy * fy) return this.onLODLevelSelection && this.onLODLevelSelection(fy, this, this), this;
        for (let cb = 0; cb < Wy._LODLevels.length; cb++) {
          const yb = Wy._LODLevels[cb];
          if (Zy * yb.distanceOrScreenCoverage < Zy * fy) {
            if (yb.mesh) {
              if (4 === yb.mesh.delayLoadState) return yb.mesh._checkDelayState(), this;
              if (2 === yb.mesh.delayLoadState) return this;
              yb.mesh._preActivate(), yb.mesh._updateSubMeshesBoundingInfo(this.worldMatrixFromCache)
            }
            return this.onLODLevelSelection && this.onLODLevelSelection(fy, this, yb.mesh), yb.mesh
          }
        }
        return this.onLODLevelSelection && this.onLODLevelSelection(fy, this, this), this
      }
      get geometry() {
        return this._geometry
      }
      getTotalVertices() {
        return null === this._geometry || void 0 === this._geometry ? 0 : this._geometry.getTotalVertices()
      }
      getVerticesData(yb, bb, Wy, Uy) {
        if (!this._geometry) return null;
        let hy = Uy ? void 0 : this._userInstancedBuffersStorage?.vertexBuffers[yb]?.getFloatData(this.instances.length + 1, Wy || bb && 1 !== this._geometry.meshes.length);
        return hy || (hy = this._geometry.getVerticesData(yb, bb, Wy)), hy
      }
      copyVerticesData(yb, bb) {
        this._geometry && this._geometry.copyVerticesData(yb, bb)
      }
      getVertexBuffer(yb, bb) {
        return this._geometry ? (bb ? void 0 : this._userInstancedBuffersStorage?.vertexBuffers[yb]) ?? this._geometry.getVertexBuffer(yb) : null
      }
      isVerticesDataPresent(yb, bb) {
        return this._geometry ? !bb && void 0 !== this._userInstancedBuffersStorage?.vertexBuffers[yb] || this._geometry.isVerticesDataPresent(yb) : !!this._delayInfo && -1 !== this._delayInfo.indexOf(yb)
      }
      isVertexBufferUpdatable(yb, bb) {
        if (!this._geometry) return !!this._delayInfo && -1 !== this._delayInfo.indexOf(yb);
        if (!bb) {
          const bb = this._userInstancedBuffersStorage?.vertexBuffers[yb];
          if (bb) return bb.isUpdatable()
        }
        return this._geometry.isVertexBufferUpdatable(yb)
      }
      getVerticesDataKinds(yb) {
        if (!this._geometry) {
          const yb = [];
          if (this._delayInfo)
            for (const bb of this._delayInfo) yb.push(bb);
          return yb
        }
        const bb = this._geometry.getVerticesDataKinds();
        if (!yb && this._userInstancedBuffersStorage)
          for (const Wy in this._userInstancedBuffersStorage.vertexBuffers) - 1 === bb.indexOf(Wy) && bb.push(Wy);
        return bb
      }
      getTotalIndices() {
        return this._geometry ? this._geometry.getTotalIndices() : 0
      }
      Mqy(yb, bb) {
        return this._geometry ? this._geometry.Mqy(yb, bb) : []
      }
      get isBlocked() {
        return null !== this._masterMesh && void 0 !== this._masterMesh
      }
      isReady() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          bb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (2 === this.delayLoadState) return !1;
        if (!super.isReady(yb)) return !1;
        if (!this.vJ || 0 === this.vJ.length) return !0;
        if (!yb) return !0;
        const Wy = this.xh(),
          Uy = this.kWy(),
          hy = bb || Wy.getCaps().instancedArrays && (this.instances.length > 0 || this.hasThinInstances);
        this.computeWorldMatrix();
        const fy = this.material || Uy.defaultMaterial;
        if (fy)
          if (fy._storeEffectOnSubMeshes)
            for (const cb of this.vJ) {
              const yb = cb.Wh();
              if (yb)
                if (yb._storeEffectOnSubMeshes) {
                  if (!yb.isReadyForSubMesh(this, cb, hy)) return !1
                } else if (!yb.isReady(this, hy)) return !1
            } else if (!fy.isReady(this, hy)) return !1;
        const Zy = Wy.currentRenderPassId;
        for (const cb of this.lightSources) {
          const yb = cb.getShadowGenerators();
          if (!yb) continue;
          const bb = yb.values();
          for (let Uy = bb.next(); !0 !== Uy.done; Uy = bb.next()) {
            const yb = Uy.value;
            if (yb && (!yb.getShadowMap()?.renderList || yb.getShadowMap()?.renderList && -1 !== yb.getShadowMap()?.renderList?.indexOf(this))) {
              const bb = yb.getShadowMap().renderPassIds ?? [Wy.currentRenderPassId];
              for (let Uy = 0; Uy < bb.length; ++Uy) {
                Wy.currentRenderPassId = bb[Uy];
                for (const bb of this.vJ)
                  if (!yb.isReady(bb, hy, bb.Wh()?.needAlphaBlendingForMesh(this) ?? !1)) return Wy.currentRenderPassId = Zy, !1
              }
              Wy.currentRenderPassId = Zy
            }
          }
        }
        for (const cb of this._internalMeshDataInfo._LODLevels)
          if (cb.mesh && !cb.mesh.isReady(hy)) return !1;
        return !0
      }
      get areNormalsFrozen() {
        return this._internalMeshDataInfo._areNormalsFrozen
      }
      Uh() {
        return this._internalMeshDataInfo._areNormalsFrozen = !0, this
      }
      unfreezeNormals() {
        return this._internalMeshDataInfo._areNormalsFrozen = !1, this
      }
      set overridenInstanceCount(yb) {
        this._instanceDataStorage.overridenInstanceCount = yb
      }
      _getInstanceDataStorage() {
        if (this._instanceDataStorage.useMonoDataStorageRenderPass) return this._instanceDataStorage.dataStorageRenderPass;
        const yb = this._instanceDataStorage.engine.currentRenderPassId;
        let bb = this._instanceDataStorage.renderPasses[yb];
        return bb || (bb = new tb, this._instanceDataStorage.renderPasses[yb] = bb), bb
      }
      _preActivate() {
        const yb = this._internalMeshDataInfo,
          bb = this.kWy().getRenderId();
        return yb._preActivateId === bb || (yb._preActivateId = bb, this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass.visibleInstances = null : this._getInstanceDataStorage().visibleInstances = null), this
      }
      _preActivateForIntermediateRendering(yb) {
        const bb = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        return bb.visibleInstances && (bb.visibleInstances.intermediateDefaultRenderId = yb), this
      }
      _registerInstanceForRenderId(yb, bb) {
        const Wy = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        return Wy.visibleInstances || (Wy.visibleInstances = {
          defaultRenderId: bb,
          selfDefaultRenderId: this._renderId,
          intermediateDefaultRenderId: -1
        }), Wy.visibleInstances[bb] || (void 0 === Wy.previousRenderId || this._instanceDataStorage.useMonoDataStorageRenderPass && !this._instanceDataStorage.isFrozen || delete Wy.visibleInstances[Wy.previousRenderId], Wy.previousRenderId = bb, Wy.visibleInstances[bb] = new Array), Wy.visibleInstances[bb].push(yb), this
      }
      _afterComputeWorldMatrix() {
        super._afterComputeWorldMatrix(), this.hasThinInstances && (this.bf || this.thinInstanceRefreshBoundingInfo(!1))
      }
      _postActivate() {
        this.edgesShareWithInstances && this.edgesRenderer && this.edgesRenderer.isEnabled && this._renderingGroup && (this._renderingGroup._edgesRenderers.pushNoDuplicate(this.edgesRenderer), this.edgesRenderer.customInstances.push(this.getWorldMatrix()))
      }
      refreshBoundingInfo() {
        let yb, bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Wy = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.hasBoundingInfo && this.qUy().isLocked) return this;
        yb = "object" === typeof bb ? bb : {
          applySkeleton: bb,
          applyMorph: Wy
        };
        const Uy = this.geometry ? this.geometry.boundingBias : null;
        return this._refreshBoundingInfo(this._getData(yb, null, vb.k.PositionKind), Uy), this
      }
      _createGlobalSubMesh(yb) {
        const bb = this.getTotalVertices();
        if (!bb || !this.Mqy()) return null;
        if (this.vJ && this.vJ.length > 0) {
          const Wy = this.Mqy();
          if (!Wy) return null;
          const Uy = Wy.length;
          let hy = !1;
          if (yb) hy = !0;
          else
            for (const yb of this.vJ) {
              if (yb.indexStart + yb.indexCount > Uy) {
                hy = !0;
                break
              }
              if (yb.verticesStart + yb.verticesCount > bb) {
                hy = !0;
                break
              }
            }
          if (!hy) return this.vJ[0]
        }
        return this.releaseSubMeshes(), new Xy.d(0, 0, bb, 0, this.getTotalIndices() || (this.isUnIndexed ? bb : 0), this)
      }
      subdivide(yb) {
        if (yb < 1) return;
        const bb = this.getTotalIndices();
        let Wy = bb / yb | 0,
          Uy = 0;
        for (; Wy % 3 !== 0;) Wy++;
        this.releaseSubMeshes();
        for (let hy = 0; hy < yb && !(Uy >= bb); hy++) Xy.d.CreateFromIndices(0, Uy, Uy + Wy >= bb ? bb - Uy : Wy, this, void 0, !1), Uy += Wy;
        this.refreshBoundingInfo(), this.synchronizeInstances()
      }
      setVerticesData(yb, bb) {
        let Wy = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Uy = arguments.length > 3 ? arguments[3] : void 0;
        if (this._geometry) this._geometry.setVerticesData(yb, bb, Wy, Uy);
        else {
          const Uy = new ib.e;
          Uy.set(bb, yb);
          const hy = this.kWy();
          new My.e(My.e.RandomId(), hy, Uy, Wy, this)
        }
        return this
      }
      removeVerticesData(yb) {
        this._geometry && this._geometry.removeVerticesData(yb)
      }
      markVerticesDataAsUpdatable(yb) {
        let bb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const Wy = this.getVertexBuffer(yb);
        Wy && Wy.isUpdatable() !== bb && this.setVerticesData(yb, this.getVerticesData(yb), bb)
      }
      setVerticesBuffer(yb) {
        let bb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        return this._geometry || (this._geometry = My.e.CreateGeometryForMesh(this)), this._geometry.setVerticesBuffer(yb, Wy, bb), this
      }
      updateVerticesData(yb, bb, Wy, Uy) {
        return this._geometry ? (Uy ? (this.makeGeometryUnique(), this.updateVerticesData(yb, bb, Wy, !1)) : this._geometry.updateVerticesData(yb, bb, Wy), this) : this
      }
      updateMeshPositions(yb) {
        let bb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const Wy = this.getVerticesData(vb.k.PositionKind);
        if (!Wy) return this;
        if (yb(Wy), this.updateVerticesData(vb.k.PositionKind, Wy, !1, !1), bb) {
          const yb = this.Mqy(),
            bb = this.getVerticesData(vb.k.NormalKind);
          if (!bb) return this;
          ib.e.ComputeNormals(Wy, yb, bb), this.updateVerticesData(vb.k.NormalKind, bb, !1, !1)
        }
        return this
      }
      makeGeometryUnique() {
        if (!this._geometry) return this;
        if (1 === this._geometry.meshes.length) return this;
        const yb = this._geometry,
          bb = this._geometry.copy(My.e.RandomId());
        return yb.releaseForMesh(this, !0), bb.applyToMesh(this), this
      }
      setIndexBuffer(yb, bb, Wy) {
        let Uy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          hy = this._geometry;
        hy || (hy = new My.e(My.e.RandomId(), this.kWy(), void 0, void 0, this)), hy.setIndexBuffer(yb, bb, Wy, Uy)
      }
      setIndices(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Wy = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Uy = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this._geometry) this._geometry.setIndices(yb, bb, Wy, Uy);
        else {
          const Uy = new ib.e;
          Uy.indices = yb;
          const hy = this.kWy();
          new My.e(My.e.RandomId(), hy, Uy, Wy, this, bb)
        }
        return this
      }
      updateIndices(yb, bb) {
        let Wy = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return this._geometry ? (this._geometry.updateIndices(yb, bb, Wy), this) : this
      }
      toLeftHanded() {
        return this._geometry ? (this._geometry.toLeftHanded(), this) : this
      }
      _bind(yb, bb, Wy) {
        let Uy = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        if (!this._geometry) return this;
        const hy = this.kWy().xh();
        let fy;
        if (this._unIndexed)
          if (this._getRenderingFillMode(Wy) === ny.e.WireFrameFillMode) fy = yb._getLinesIndexBuffer(this.Mqy(), hy);
          else fy = null;
        else switch (this._getRenderingFillMode(Wy)) {
          case ny.e.PointFillMode:
            fy = null;
            break;
          case ny.e.WireFrameFillMode:
            fy = yb._getLinesIndexBuffer(this.Mqy(), hy);
            break;
          default:
          case ny.e.TriangleFillMode:
            fy = this._geometry.getIndexBuffer()
        }
        return this._bindDirect(bb, fy, Uy)
      }
      _bindDirect(yb, bb) {
        let Wy = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (!this._geometry) return this;
        if (this.morphTargetManager && this.morphTargetManager.isUsingTextureForTargets && this.morphTargetManager._bind(yb), Wy && this._userInstancedBuffersStorage && !this.hasThinInstances) {
          if (!this._instanceDataStorage.useMonoDataStorageRenderPass && this._userInstancedBuffersStorage.renderPasses && this._userInstancedBuffersStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId]) {
            const yb = this._userInstancedBuffersStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId];
            for (const bb in yb) this._userInstancedBuffersStorage.vertexBuffers[bb] = yb[bb]
          }
          this._geometry._bind(yb, bb, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects)
        } else this._geometry._bind(yb, bb);
        return this
      }
      _draw(yb, bb, Wy) {
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        this._internalMeshDataInfo._onBeforeDrawObservable && this._internalMeshDataInfo._onBeforeDrawObservable.notifyObservers(this);
        const Uy = this.kWy().xh(),
          hy = Uy._currentMaterialContext,
          fy = hy && hy.useVertexPulling;
        return this._unIndexed && bb !== ny.e.WireFrameFillMode || bb == ny.e.PointFillMode ? Uy.drawArraysType(bb, yb.verticesStart, yb.verticesCount, this.forcedInstanceCount || Wy) : bb == ny.e.WireFrameFillMode ? Uy.drawElementsType(bb, 0, yb._linesIndexCount, this.forcedInstanceCount || Wy) : fy ? Uy.drawArraysType(bb, yb.indexStart, yb.indexCount, this.forcedInstanceCount || Wy) : Uy.drawElementsType(bb, yb.indexStart, yb.indexCount, this.forcedInstanceCount || Wy), this
      }
      registerBeforeRender(yb) {
        return this.onBeforeRenderObservable.add(yb), this
      }
      unregisterBeforeRender(yb) {
        return this.onBeforeRenderObservable.removeCallback(yb), this
      }
      registerAfterRender(yb) {
        return this.onAfterRenderObservable.add(yb), this
      }
      unregisterAfterRender(yb) {
        return this.onAfterRenderObservable.removeCallback(yb), this
      }
      _getInstancesRenderList(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const Wy = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        if (this._instanceDataStorage.isFrozen) {
          if (bb) return Wy.batchCacheReplacementModeInFrozenMode.hardwareInstancedRendering[yb] = !1, Wy.batchCacheReplacementModeInFrozenMode.renderSelf[yb] = !0, Wy.batchCacheReplacementModeInFrozenMode;
          if (Wy.previousBatch) return Wy.previousBatch
        }
        const Uy = this.kWy(),
          hy = Uy._isInIntermediateRendering(),
          fy = hy ? this._internalAbstractMeshDataInfo._onlyForInstancesIntermediate : this._internalAbstractMeshDataInfo._onlyForInstances,
          Zy = Wy.batchCache;
        if (Zy.mustReturn = !1, Zy.renderSelf[yb] = bb || !fy && this.isEnabled() && this.isVisible, Zy.visibleInstances[yb] = null, Wy.visibleInstances && !bb) {
          const bb = Wy.visibleInstances,
            fy = Uy.getRenderId(),
            cb = hy ? bb.intermediateDefaultRenderId : bb.defaultRenderId;
          Zy.visibleInstances[yb] = bb[fy], !Zy.visibleInstances[yb] && cb && (Zy.visibleInstances[yb] = bb[cb])
        }
        return Zy.hardwareInstancedRendering[yb] = !bb && this._instanceDataStorage.hardwareInstancedRendering && null !== Zy.visibleInstances[yb] && void 0 !== Zy.visibleInstances[yb], Wy.previousBatch = Zy, Zy
      }
      _updateInstancedBuffers(yb, bb, Wy, Uy, hy, fy) {
        const Zy = bb.visibleInstances[yb._id],
          cb = Zy ? Zy.length : 0,
          Py = bb.parent,
          oy = this._instanceDataStorage;
        let By = Py.instancesBuffer,
          Ky = Py.instancesPreviousBuffer,
          ey = 0,
          qb = 0;
        const sy = bb.renderSelf[yb._id],
          Sy = this._scene.floatingOriginOffset,
          Ey = !By || Wy !== Py.instancesBufferSize || this._scene.needsPreviousWorldMatrices && !Py.instancesPreviousBuffer;
        if (this._instanceDataStorage.manualUpdate || oy.isFrozen && !Ey) qb = (sy ? 1 : 0) + cb;
        else {
          const bb = this.getWorldMatrix();
          if (sy) {
            this._scene.needsPreviousWorldMatrices && (oy.masterMeshPreviousWorldMatrix ? (oy.masterMeshPreviousWorldMatrix.copyToArray(Py.instancesPreviousData, ey), oy.masterMeshPreviousWorldMatrix.Coy(bb)) : (oy.masterMeshPreviousWorldMatrix = bb.clone(), oy.masterMeshPreviousWorldMatrix.copyToArray(Py.instancesPreviousData, ey))), bb.copyToArray(Py.instancesData, ey);
            const yb = bb.hBy();
            Py.instancesData[ey + 12] = yb[12] - Sy.x, Py.instancesData[ey + 13] = yb[13] - Sy.y, Py.instancesData[ey + 14] = yb[14] - Sy.z, ey += 16, qb++
          }
          if (Zy) {
            if (xb.INSTANCEDMESH_SORT_TRANSPARENT && this._scene.activeCamera && yb.Wh()?.needAlphaBlendingForMesh(yb.getRenderingMesh())) {
              const yb = this._scene.activeCamera.globalPosition;
              for (let bb = 0; bb < Zy.length; bb++) {
                const Wy = Zy[bb];
                Wy._distanceToCamera = Gy.n.Distance(Wy.qUy().GBy.centerWorld, yb)
              }
              Zy.sort(((yb, bb) => yb._distanceToCamera > bb._distanceToCamera ? -1 : yb._distanceToCamera < bb._distanceToCamera ? 1 : 0))
            }
            for (let yb = 0; yb < Zy.length; yb++) {
              const bb = Zy[yb],
                Wy = bb.getWorldMatrix();
              Wy.copyToArray(Py.instancesData, ey), this._scene.needsPreviousWorldMatrices && (bb._previousWorldMatrix ? (bb._previousWorldMatrix.copyToArray(Py.instancesPreviousData, ey), bb._previousWorldMatrix.Coy(Wy)) : (bb._previousWorldMatrix = Wy.clone(), bb._previousWorldMatrix.copyToArray(Py.instancesPreviousData, ey)));
              const Uy = Wy.hBy();
              Py.instancesData[ey + 12] = Uy[12] - Sy.x, Py.instancesData[ey + 13] = Uy[13] - Sy.y, Py.instancesData[ey + 14] = Uy[14] - Sy.z, ey += 16, qb++
            }
          }
        }
        if (Ey) {
          let yb;
          if (By && By.dispose(), Ky && Ky.dispose(), By = new vb.b(Uy, Py.instancesData, !0, 16, !1, !0), Py.instancesBuffer = By, this._userInstancedBuffersStorage || (this._userInstancedBuffersStorage = {
              data: {},
              vertexBuffers: {},
              strides: {},
              sizes: {},
              vertexArrayObjects: this.xh().getCaps().vertexArrayObject ? {} : void 0
            }), this._instanceDataStorage.useMonoDataStorageRenderPass) yb = this._userInstancedBuffersStorage.vertexBuffers;
          else {
            this._userInstancedBuffersStorage.renderPasses || (this._userInstancedBuffersStorage.renderPasses = {});
            const bb = this._instanceDataStorage.engine.currentRenderPassId;
            yb = this._userInstancedBuffersStorage.renderPasses[bb], yb || (this._userInstancedBuffersStorage.renderPasses[bb] = yb = {})
          }
          yb.world0 = By.createVertexBuffer("world0", 0, 4), yb.world1 = By.createVertexBuffer("world1", 4, 4), yb.world2 = By.createVertexBuffer("world2", 8, 4), yb.world3 = By.createVertexBuffer("world3", 12, 4), this._scene.needsPreviousWorldMatrices && (Ky = new vb.b(Uy, Py.instancesPreviousData, !0, 16, !1, !0), Py.instancesPreviousBuffer = Ky, yb.previousWorld0 = Ky.createVertexBuffer("previousWorld0", 0, 4), yb.previousWorld1 = Ky.createVertexBuffer("previousWorld1", 4, 4), yb.previousWorld2 = Ky.createVertexBuffer("previousWorld2", 8, 4), yb.previousWorld3 = Ky.createVertexBuffer("previousWorld3", 12, 4)), this._invalidateInstanceVertexArrayObject()
        } else this._instanceDataStorage.isFrozen && !this._instanceDataStorage.forceMatrixUpdates || (By.updateDirectly(Py.instancesData, 0, qb), !this._scene.needsPreviousWorldMatrices || this._instanceDataStorage.manualUpdate && !this._instanceDataStorage.previousManualUpdate || Ky.updateDirectly(Py.instancesPreviousData, 0, qb));
        this._processInstancedBuffers(Zy, sy), fy && void 0 !== hy && (this.kWy()._activeIndices.addCount(yb.indexCount * qb, !1), Uy._currentDrawContext && (Uy._currentDrawContext.useInstancing = !0), this._bind(yb, fy, hy), this._draw(yb, hy, qb)), !this._scene.needsPreviousWorldMatrices || Ey || !this._instanceDataStorage.manualUpdate || this._instanceDataStorage.isFrozen && !this._instanceDataStorage.forceMatrixUpdates || this._instanceDataStorage.previousManualUpdate || Ky.updateDirectly(Py.instancesData, 0, qb)
      }
      _renderWithInstances(yb, bb, Wy, Uy, hy) {
        const fy = Wy.visibleInstances[yb._id],
          Zy = fy ? fy.length : 0,
          cb = Wy.parent,
          Py = cb.instancesBufferSize,
          oy = 16 * (Zy + 1) * 4;
        for (; cb.instancesBufferSize < oy;) cb.instancesBufferSize *= 2;
        return cb.instancesData && Py == cb.instancesBufferSize || (cb.instancesData = new Float32Array(cb.instancesBufferSize / 4)), (this._scene.needsPreviousWorldMatrices && !cb.instancesPreviousData || Py != cb.instancesBufferSize) && (cb.instancesPreviousData = new Float32Array(cb.instancesBufferSize / 4)), this._updateInstancedBuffers(yb, Wy, Py, hy, bb, Uy), hy.unbindInstanceAttributes(), this
      }
      _renderWithThinInstances(yb, bb, Wy, Uy) {
        const hy = this._thinInstanceDataStorage?.instancesCount ?? 0;
        this.kWy()._activeIndices.addCount(yb.indexCount * hy, !1), Uy._currentDrawContext && (Uy._currentDrawContext.useInstancing = !0), this._bind(yb, Wy, bb), this._draw(yb, bb, hy), this._scene.needsPreviousWorldMatrices && !this._thinInstanceDataStorage.previousMatrixData && this._thinInstanceDataStorage.matrixData && (this._thinInstanceDataStorage.previousMatrixBuffer ? this._thinInstanceDataStorage.previousMatrixBuffer.updateDirectly(this._thinInstanceDataStorage.matrixData, 0, hy) : this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", this._thinInstanceDataStorage.matrixData, !1)), Uy.unbindInstanceAttributes()
      }
      _processInstancedBuffers(yb, bb) {}
      _processRendering(yb, bb, Wy, Uy, hy, fy, Zy, cb) {
        const Py = this.kWy(),
          oy = Py.xh();
        if (Uy = this._getRenderingFillMode(Uy), fy && bb.getRenderingMesh().hasThinInstances) return this._renderWithThinInstances(bb, Uy, Wy, oy), this;
        if (fy) this._renderWithInstances(bb, Uy, hy, Wy, oy);
        else {
          oy._currentDrawContext && (oy._currentDrawContext.useInstancing = !1);
          let Wy = 0;
          hy.renderSelf[bb._id] && (Zy && Zy(!1, yb.getWorldMatrix(), cb), Wy++, this._draw(bb, Uy, this._instanceDataStorage.overridenInstanceCount));
          const fy = hy.visibleInstances[bb._id];
          if (fy) {
            const yb = fy.length;
            Wy += yb;
            for (let Wy = 0; Wy < yb; Wy++) {
              const yb = fy[Wy].getWorldMatrix();
              Zy && Zy(!0, yb, cb), this._draw(bb, Uy)
            }
          }
          Py._activeIndices.addCount(bb.indexCount * Wy, !1)
        }
        return this
      }
      _disposeInstanceDataStorageRenderPass(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        yb?.instancesBuffer && (bb && yb.instancesBuffer.dispose(), yb.instancesBuffer = null), yb?.instancesPreviousBuffer && (bb && yb.instancesPreviousBuffer.dispose(), yb.instancesPreviousBuffer = null)
      }
      _rebuild() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const bb in this._instanceDataStorage.renderPasses) {
          const Wy = this._instanceDataStorage.renderPasses[bb];
          this._disposeInstanceDataStorageRenderPass(Wy, yb)
        }
        if (this._disposeInstanceDataStorageRenderPass(this._instanceDataStorage.dataStorageRenderPass, yb), this._userInstancedBuffersStorage) {
          for (const bb in this._userInstancedBuffersStorage.vertexBuffers) {
            const Wy = this._userInstancedBuffersStorage.vertexBuffers[bb];
            Wy && (yb && Wy.dispose(), this._userInstancedBuffersStorage.vertexBuffers[bb] = null)
          }
          this._userInstancedBuffersStorage.vertexArrayObjects && (this._userInstancedBuffersStorage.vertexArrayObjects = {})
        }
        this._internalMeshDataInfo._effectiveMaterial = null, super._rebuild(yb)
      }
      _releaseRenderPassId(yb) {
        const bb = this._instanceDataStorage.renderPasses[yb];
        if (bb && (this._disposeInstanceDataStorageRenderPass(bb, !0), delete this._instanceDataStorage.renderPasses[yb]), this._userInstancedBuffersStorage?.renderPasses) {
          const bb = this._userInstancedBuffersStorage.renderPasses[yb];
          if (bb)
            for (const yb in bb) bb[yb]?.dispose();
          delete this._userInstancedBuffersStorage.renderPasses[yb]
        }
        const Wy = this._userInstancedBuffersStorage?.interleavedBuffers;
        Wy?.[yb] && (Wy[yb].buffer.dispose(), delete Wy[yb])
      }
      _freeze() {
        if (this.vJ) {
          for (let yb = 0; yb < this.vJ.length; yb++) this._getInstancesRenderList(yb);
          this._internalMeshDataInfo._effectiveMaterial = null, this._instanceDataStorage.isFrozen = !0
        }
      }
      _unFreeze() {
        this._instanceDataStorage.isFrozen = !1;
        for (const yb in this._instanceDataStorage.renderPasses) {
          this._instanceDataStorage.renderPasses[yb].previousBatch = null
        }
        this._instanceDataStorage.dataStorageRenderPass && (this._instanceDataStorage.dataStorageRenderPass.previousBatch = null)
      }
      renderWithRenderPassId(yb, bb, Wy, Uy) {
        let hy = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        const fy = this._scene.xh(),
          Zy = fy.currentRenderPassId;
        if (void 0 !== yb && (fy.currentRenderPassId = yb), Uy)(!hy || hy && Uy.isInFrustum(this._scene._frustumPlanes)) && this.render(Uy, !!bb, Wy);
        else
          for (let cb = 0; cb < this.vJ.length; cb++) {
            const yb = this.vJ[cb];
            (!hy || hy && yb.isInFrustum(this._scene._frustumPlanes)) && this.render(yb, !!bb, Wy)
          }
        return void 0 !== yb && (fy.currentRenderPassId = Zy), this
      }
      directRender() {
        if (!this.vJ) return this;
        for (const yb of this.vJ) this.render(yb, !1);
        return this
      }
      render(yb, bb, Wy) {
        const Uy = this.kWy(),
          hy = Uy.xh();
        this._internalAbstractMeshDataInfo._isActiveIntermediate ? this._internalAbstractMeshDataInfo._isActiveIntermediate = !1 : this._internalAbstractMeshDataInfo._isActive = !1;
        const fy = Uy.activeCameras?.length ?? 0,
          Zy = fy > 1 && Uy.activeCamera === Uy.activeCameras[0] || fy <= 1,
          cb = this._occlusionDataStorage && -1 !== this._occlusionDataStorage.occlusionForRenderPassId && this._occlusionDataStorage.occlusionForRenderPassId !== hy.currentRenderPassId;
        if (Zy && this._checkOcclusionQuery(cb) && !this._occlusionDataStorage.forceRenderingWhenOccluded) return this;
        const Py = this._getInstancesRenderList(yb._id, !!Wy);
        if (Py.mustReturn) return this;
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        let oy = 0,
          By = null;
        this.ignoreCameraMaxZ && Uy.activeCamera && !Uy._isInIntermediateRendering() && (oy = Uy.activeCamera.maxZ, By = Uy.activeCamera, Uy.activeCamera.maxZ = 0, Uy.updateTransformMatrix(!0)), this._internalMeshDataInfo._onBeforeRenderObservable && this._internalMeshDataInfo._onBeforeRenderObservable.notifyObservers(this);
        const Ky = yb.getRenderingMesh(),
          ey = Py.hardwareInstancedRendering[yb._id] || Ky.hasThinInstances || !!this._userInstancedBuffersStorage && !yb.getMesh()._internalAbstractMeshDataInfo._actAsRegularMesh,
          qb = this._instanceDataStorage,
          sy = yb.Wh();
        if (!sy) return By && (By.maxZ = oy, Uy.updateTransformMatrix(!0)), this;
        if (qb.isFrozen && this._internalMeshDataInfo._effectiveMaterial && this._internalMeshDataInfo._effectiveMaterial === sy) {
          if (sy._storeEffectOnSubMeshes && !yb._drawWrapper?._wasPreviouslyReady || !sy._storeEffectOnSubMeshes && !sy._getDrawWrapper()._wasPreviouslyReady) return By && (By.maxZ = oy, Uy.updateTransformMatrix(!0)), this
        } else {
          if (sy._storeEffectOnSubMeshes) {
            if (!sy.isReadyForSubMesh(this, yb, ey)) return By && (By.maxZ = oy, Uy.updateTransformMatrix(!0)), this
          } else if (!sy.isReady(this, ey)) return By && (By.maxZ = oy, Uy.updateTransformMatrix(!0)), this;
          this._internalMeshDataInfo._effectiveMaterial = sy
        }
        if (bb) {
          const yb = this._internalMeshDataInfo._effectiveMaterial;
          if (1 === yb.alphaModes.length) hy.setAlphaMode(yb.alphaMode);
          else
            for (let bb = 0; bb < yb.alphaModes.length; bb++) {
              const Wy = yb.alphaModes[bb];
              hy.setAlphaMode(void 0 !== Wy ? Wy : 2, !1, bb)
            }
        }
        let Sy;
        Sy = this._internalMeshDataInfo._effectiveMaterial._storeEffectOnSubMeshes ? yb._drawWrapper : this._internalMeshDataInfo._effectiveMaterial._getDrawWrapper();
        const Ey = Sy?.effect ?? null;
        for (let gb = 0, Gy = Uy._beforeRenderingMeshStage; gb < Gy.length; gb++) {
          Gy[gb].action(this, yb, Py, Ey)
        }
        if (!Sy || !Ey) return By && (By.maxZ = oy, Uy.updateTransformMatrix(!0)), this;
        const ly = Wy || this;
        let mb;
        if (!qb.isFrozen && (this._internalMeshDataInfo._effectiveMaterial.backFaceCulling || null !== this._internalMeshDataInfo._effectiveMaterial.sideOrientation || this._internalMeshDataInfo._effectiveMaterial._twoSidedLighting)) {
          const yb = ly._getWorldMatrixDeterminant();
          mb = this._internalMeshDataInfo._effectiveMaterial._getEffectiveOrientation(this), yb < 0 && (mb = mb === ny.e.ClockWiseSideOrientation ? ny.e.CounterClockWiseSideOrientation : ny.e.ClockWiseSideOrientation), this._internalMeshDataInfo._effectiveSideOrientation = mb
        }
        const Cy = this._internalMeshDataInfo._effectiveMaterial._preBind(Sy, this._internalMeshDataInfo._effectiveSideOrientation);
        this._internalMeshDataInfo._effectiveMaterial.forceDepthWrite && hy.setDepthWrite(!0);
        const Ty = this._internalMeshDataInfo._effectiveMaterial,
          Vy = Ty.fillMode;
        this._internalMeshDataInfo._onBeforeBindObservable && this._internalMeshDataInfo._onBeforeBindObservable.notifyObservers(this), ey || this._bind(yb, Ey, Vy, !1);
        const Jy = ly.getWorldMatrix();
        Ty._storeEffectOnSubMeshes ? Ty.bindForSubMesh(Jy, this, yb) : Ty.bind(Jy, this);
        try {
          uy.c._BindAttachmentsForEffect(hy, Ey) && (!Ty.backFaceCulling && Ty.separateCullingPass && (hy.setState(!0, Ty.zOffset, !1, !Cy, Ty.cullBackFaces, Ty.stencil, Ty.zOffsetUnits), this._processRendering(this, yb, Ey, Vy, Py, ey, this._onBeforeDraw, this._internalMeshDataInfo._effectiveMaterial), hy.setState(!0, Ty.zOffset, !1, Cy, Ty.cullBackFaces, Ty.stencil, Ty.zOffsetUnits), this._internalMeshDataInfo._onBetweenPassObservable && this._internalMeshDataInfo._onBetweenPassObservable.notifyObservers(yb)), this._processRendering(this, yb, Ey, Vy, Py, ey, this._onBeforeDraw, this._internalMeshDataInfo._effectiveMaterial))
        } finally {
          uy.c._RestoreAttachments(hy)
        }
        this._internalMeshDataInfo._effectiveMaterial.unbind();
        for (let gb = 0, Gy = Uy._afterRenderingMeshStage; gb < Gy.length; gb++) {
          Gy[gb].action(this, yb, Py, Ey)
        }
        return this._internalMeshDataInfo._onAfterRenderObservable && this._internalMeshDataInfo._onAfterRenderObservable.notifyObservers(this), By && (By.maxZ = oy, Uy.updateTransformMatrix(!0)), 2 !== Uy.performancePriority || qb.isFrozen || this._freeze(), this
      }
      _renderRunFollower(yb, bb) {
        const Wy = this._scene,
          Uy = Wy._engine;
        if (Uy.isWebGPU || yb._mesh !== this || 0 !== this.instances.length || this.render !== xb.prototype.render) return !1;
        const hy = yb.Wh();
        if (!hy || hy !== Wy._cachedMaterial || void 0 === hy._canBindRunFollower) return !1;
        const fy = yb._drawWrapper,
          Zy = fy?.effect;
        if (!Zy || Zy !== Wy._cachedEffect || this.visibility !== Wy._cachedVisibility || fy._forceRebindOnNextCall) return !1;
        const cb = this.hasThinInstances;
        if (!cb && this._userInstancedBuffersStorage) return !1;
        if (!fy._wasPreviouslyReady || fy._wasPreviouslyUsingInstances !== cb) return !1;
        const Py = this._internalMeshDataInfo;
        if (this.ignoreCameraMaxZ || this.morphTargetManager || this._instanceDataStorage.isFrozen || Wy._isInIntermediateRendering() || 0 !== Wy._beforeRenderingMeshStage.length || 0 !== Wy._afterRenderingMeshStage.length || Py._onBeforeRenderObservable?.hasObservers() || Py._onBeforeBindObservable?.hasObservers() || Py._onAfterRenderObservable?.hasObservers()) return !1;
        const oy = this.occlusionType;
        if (void 0 !== oy && oy !== Yy.b.OCCLUSION_TYPE_NONE || !hy._canBindRunFollower(Wy, Uy, this, yb, Zy)) return !1;
        const By = this._internalAbstractMeshDataInfo,
          Ky = By._isActiveIntermediate;
        Ky ? By._isActiveIntermediate = !1 : By._isActive = !1;
        const ey = Wy.activeCameras?.length ?? 0;
        (ey > 1 && Wy.activeCamera === Wy.activeCameras[0] || ey <= 1) && this._checkOcclusionQuery(!1);
        const qb = this._getInstancesRenderList(yb._id);
        if (qb.mustReturn) return !0;
        if (!cb && !qb.renderSelf[yb._id]) return Ky ? By._isActiveIntermediate = !0 : By._isActive = !0, !1;
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return !0;
        if (Py._effectiveMaterial = hy, bb)
          if (1 === hy.alphaModes.length) Uy.setAlphaMode(hy.alphaMode);
          else
            for (let Sy = 0; Sy < hy.alphaModes.length; Sy++) {
              const yb = hy.alphaModes[Sy];
              Uy.setAlphaMode(void 0 !== yb ? yb : 2, !1, Sy)
            }
        if (hy.backFaceCulling || null !== hy.sideOrientation || hy._twoSidedLighting) {
          const yb = this._getWorldMatrixDeterminant();
          let bb = hy._getEffectiveOrientation(this);
          yb < 0 && (bb = bb === ny.e.ClockWiseSideOrientation ? ny.e.CounterClockWiseSideOrientation : ny.e.ClockWiseSideOrientation), Py._effectiveSideOrientation = bb
        }
        hy._preBind(fy, Py._effectiveSideOrientation), hy.forceDepthWrite && Uy.setDepthWrite(!0);
        const sy = hy.fillMode;
        return cb || this._bind(yb, Zy, sy, !1), hy._bindRunFollower(this.getWorldMatrix(), this, yb, Zy), this._processRendering(this, yb, Zy, sy, qb, cb, this._onBeforeDraw, hy), hy.unbind(), 2 === Wy.performancePriority && this._freeze(), !0
      }
      cleanMatrixWeights() {
        this.isVerticesDataPresent(vb.k.MatricesWeightsKind) && (this.isVerticesDataPresent(vb.k.MatricesWeightsExtraKind) ? this._normalizeSkinWeightsAndExtra() : this._normalizeSkinFourWeights())
      }
      _normalizeSkinFourWeights() {
        const yb = this.getVerticesData(vb.k.MatricesWeightsKind),
          bb = yb.length;
        for (let Wy = 0; Wy < bb; Wy += 4) {
          const bb = yb[Wy] + yb[Wy + 1] + yb[Wy + 2] + yb[Wy + 3];
          if (0 === bb) yb[Wy] = 1;
          else {
            const Uy = 1 / bb;
            yb[Wy] *= Uy, yb[Wy + 1] *= Uy, yb[Wy + 2] *= Uy, yb[Wy + 3] *= Uy
          }
        }
        this.setVerticesData(vb.k.MatricesWeightsKind, yb)
      }
      _normalizeSkinWeightsAndExtra() {
        const yb = this.getVerticesData(vb.k.MatricesWeightsExtraKind),
          bb = this.getVerticesData(vb.k.MatricesWeightsKind),
          Wy = bb.length;
        for (let Uy = 0; Uy < Wy; Uy += 4) {
          let Wy = bb[Uy] + bb[Uy + 1] + bb[Uy + 2] + bb[Uy + 3];
          if (Wy += yb[Uy] + yb[Uy + 1] + yb[Uy + 2] + yb[Uy + 3], 0 === Wy) bb[Uy] = 1;
          else {
            const hy = 1 / Wy;
            bb[Uy] *= hy, bb[Uy + 1] *= hy, bb[Uy + 2] *= hy, bb[Uy + 3] *= hy, yb[Uy] *= hy, yb[Uy + 1] *= hy, yb[Uy + 2] *= hy, yb[Uy + 3] *= hy
          }
        }
        this.setVerticesData(vb.k.MatricesWeightsKind, bb), this.setVerticesData(vb.k.MatricesWeightsKind, yb)
      }
      validateSkinning() {
        const yb = this.getVerticesData(vb.k.MatricesWeightsExtraKind),
          bb = this.getVerticesData(vb.k.MatricesWeightsKind);
        if (null === bb || null == this.skeleton) return {
          skinned: !1,
          valid: !0,
          KU: "not skinned"
        };
        const Wy = bb.length;
        let Uy = 0,
          hy = 0,
          fy = 0,
          Zy = 0;
        const cb = null === yb ? 4 : 8,
          Py = [];
        for (let qb = 0; qb <= cb; qb++) Py[qb] = 0;
        for (let qb = 0; qb < Wy; qb += 4) {
          let Wy = bb[qb],
            oy = Wy,
            By = 0 === oy ? 0 : 1;
          for (let hy = 1; hy < cb; hy++) {
            const fy = hy < 4 ? bb[qb + hy] : yb[qb + hy - 4];
            fy > Wy && Uy++, 0 !== fy && By++, oy += fy, Wy = fy
          }
          if (Py[By]++, By > fy && (fy = By), 0 === oy) hy++;
          else {
            const Wy = 1 / oy;
            let Uy = 0;
            for (let hy = 0; hy < cb; hy++) Uy += hy < 4 ? Math.abs(bb[qb + hy] - bb[qb + hy] * Wy) : Math.abs(yb[qb + hy - 4] - yb[qb + hy - 4] * Wy);
            Uy > .001 && Zy++
          }
        }
        const oy = this.skeleton.bones.length,
          By = this.getVerticesData(vb.k.MatricesIndicesKind),
          Ky = this.getVerticesData(vb.k.MatricesIndicesExtraKind);
        let ey = 0;
        for (let qb = 0; qb < Wy; qb += 4)
          for (let yb = 0; yb < cb; yb++) {
            const bb = yb < 4 ? By[qb + yb] : Ky[qb + yb - 4];
            (bb >= oy || bb < 0) && ey++
          }
        return {
          skinned: !0,
          valid: 0 === hy && 0 === Zy && 0 === ey,
          KU: "Number of Weights = " + Wy / 4 + "\nMaximum influences = " + fy + "\nMissing Weights = " + hy + "\nNot Sorted = " + Uy + "\nNot Normalized = " + Zy + "\nWeightCounts = [" + Py + "]\nNumber of bones = " + oy + "\nBad Bone Indices = " + ey
        }
      }
      _checkDelayState() {
        const yb = this.kWy();
        return this._geometry ? this._geometry.load(yb) : 4 === this.delayLoadState && (this.delayLoadState = 2, this._queueLoad(yb)), this
      }
      _queueLoad(yb) {
        yb.addPendingData(this);
        const bb = -1 !== this.delayLoadingFile.indexOf(".babylonbinarymeshdata");
        return (async () => {
          try {
            const Wy = await yb._loadDelayedFileAsync(this.delayLoadingFile, bb, !0);
            Wy instanceof ArrayBuffer ? this._delayLoadingFunction(Wy, this) : this._delayLoadingFunction(JSON.parse(Wy), this);
            for (const yb of this.instances) yb.refreshBoundingInfo(), yb._syncSubMeshes();
            this.delayLoadState = 1, yb.removePendingData(this)
          } catch (Wy) {
            yb.removePendingData(this), yb.Koy || Fy.b.Error(`Unable to delay load geometry data for mesh "${this.name}" from "${this.delayLoadingFile}": ${Wy}`)
          }
        })(), this
      }
      isInFrustum(yb) {
        return 2 !== this.delayLoadState && (!!super.isInFrustum(yb) && (this._checkDelayState(), !0))
      }
      setMaterialById(yb) {
        const bb = this.kWy().materials;
        let Wy;
        for (Wy = bb.length - 1; Wy > -1; Wy--)
          if (bb[Wy].id === yb) return this.material = bb[Wy], this;
        const Uy = this.kWy().multiMaterials;
        for (Wy = Uy.length - 1; Wy > -1; Wy--)
          if (Uy[Wy].id === yb) return this.material = Uy[Wy], this;
        return this
      }
      getAnimatables() {
        const yb = [];
        return this.material && yb.push(this.material), this.skeleton && yb.push(this.skeleton), yb
      }
      bakeTransformIntoVertices(yb) {
        if (!this.isVerticesDataPresent(vb.k.PositionKind)) return this;
        const bb = this.vJ.splice(0);
        this._resetPointsArrayCache();
        let Wy = this.getVerticesData(vb.k.PositionKind);
        const Uy = Gy.n.Zero();
        let hy;
        for (hy = 0; hy < Wy.length; hy += 3) Gy.n.TransformCoordinatesFromFloatsToRef(Wy[hy], Wy[hy + 1], Wy[hy + 2], yb, Uy).toArray(Wy, hy);
        if (this.setVerticesData(vb.k.PositionKind, Wy, this.getVertexBuffer(vb.k.PositionKind).isUpdatable()), this.isVerticesDataPresent(vb.k.NormalKind)) {
          for (Wy = this.getVerticesData(vb.k.NormalKind), hy = 0; hy < Wy.length; hy += 3) Gy.n.TransformNormalFromFloatsToRef(Wy[hy], Wy[hy + 1], Wy[hy + 2], yb, Uy).normalize().toArray(Wy, hy);
          this.setVerticesData(vb.k.NormalKind, Wy, this.getVertexBuffer(vb.k.NormalKind).isUpdatable())
        }
        if (this.isVerticesDataPresent(vb.k.TangentKind)) {
          for (Wy = this.getVerticesData(vb.k.TangentKind), hy = 0; hy < Wy.length; hy += 4) Gy.n.TransformNormalFromFloatsToRef(Wy[hy], Wy[hy + 1], Wy[hy + 2], yb, Uy).normalize().toArray(Wy, hy);
          this.setVerticesData(vb.k.TangentKind, Wy, this.getVertexBuffer(vb.k.TangentKind).isUpdatable())
        }
        return yb.determinant() < 0 && this.flipFaces(), this.releaseSubMeshes(), this.vJ = bb, this
      }
      bakeCurrentTransformIntoVertices() {
        let yb = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] && this.makeGeometryUnique(), this.bakeTransformIntoVertices(this.computeWorldMatrix(!0)), this.resetLocalMatrix(yb), this
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
        let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Wy = arguments.length > 2 ? arguments[2] : void 0,
          Uy = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        if (bb && void 0 === bb._addToSceneRootNodes) {
          const Wy = bb;
          return Iy.source = this, Iy.doNotCloneChildren = Wy.doNotCloneChildren, Iy.clonePhysicsImpostor = Wy.clonePhysicsImpostor, Iy.cloneThinInstances = Wy.cloneThinInstances, new xb(yb, this.kWy(), Iy)
        }
        return new xb(yb, this.kWy(), bb, this, Wy, Uy)
      }
      dispose(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.morphTargetManager = null, this._geometry && this._geometry.releaseForMesh(this, !0);
        const Wy = this._internalMeshDataInfo;
        if (Wy._onBeforeDrawObservable && Wy._onBeforeDrawObservable.clear(), Wy._onBeforeBindObservable && Wy._onBeforeBindObservable.clear(), Wy._onBeforeRenderObservable && Wy._onBeforeRenderObservable.clear(), Wy._onAfterRenderObservable && Wy._onAfterRenderObservable.clear(), Wy._onBetweenPassObservable && Wy._onBetweenPassObservable.clear(), this._scene.useClonedMeshMap) {
          if (Wy.meshMap)
            for (const yb in Wy.meshMap) {
              const bb = Wy.meshMap[yb];
              bb && (bb._internalMeshDataInfo._source = null, Wy.meshMap[yb] = void 0)
            }
          Wy._source && Wy._source._internalMeshDataInfo.meshMap && (Wy._source._internalMeshDataInfo.meshMap[this.uniqueId] = void 0)
        } else {
          const yb = this.kWy().meshes;
          for (const bb of yb) {
            const yb = bb;
            yb._internalMeshDataInfo && yb._internalMeshDataInfo._source && yb._internalMeshDataInfo._source === this && (yb._internalMeshDataInfo._source = null)
          }
        }
        Wy._source = null, this._disposeInstanceSpecificData(), this._disposeThinInstanceSpecificData(), this._internalMeshDataInfo._checkReadinessObserver && this._scene.onBeforeRenderObservable.remove(this._internalMeshDataInfo._checkReadinessObserver), super.dispose(yb, bb)
      }
      _disposeInstanceSpecificData() {}
      _disposeThinInstanceSpecificData() {}
      _invalidateInstanceVertexArrayObject() {}
      applyDisplacementMap(yb, bb, Wy, Uy, hy, fy) {
        let Zy = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          cb = arguments.length > 7 ? arguments[7] : void 0;
        const Py = this.kWy();
        return (0, Cy.x)(yb, (yb => {
          const cb = yb.width,
            Py = yb.height,
            oy = this.xh().createCanvas(cb, Py).getContext("2d");
          oy.drawImage(yb, 0, 0);
          const By = oy.getImageData(0, 0, cb, Py).data;
          this.applyDisplacementMapFromBuffer(By, cb, Py, bb, Wy, hy, fy, Zy), Uy && Uy(this)
        }), cb || (() => {}), Py.offlineProvider), this
      }
      applyDisplacementMapFromBuffer(yb, bb, Wy, Uy, hy, fy, Zy) {
        let cb = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
        if (!this.isVerticesDataPresent(vb.k.PositionKind) || !this.isVerticesDataPresent(vb.k.NormalKind) || !this.isVerticesDataPresent(vb.k.UVKind)) return Fy.b.Warn("Cannot call applyDisplacementMap: Given mesh is not complete. Position, Normal or UV are missing"), this;
        const Py = this.getVerticesData(vb.k.PositionKind, !0, !0),
          oy = this.getVerticesData(vb.k.NormalKind),
          By = this.getVerticesData(vb.k.UVKind);
        let Ky = Gy.n.Zero();
        const ey = Gy.n.Zero(),
          qb = Gy.m.Zero();
        fy = fy || Gy.m.Zero(), Zy = Zy || new Gy.m(1, 1);
        for (let sy = 0; sy < Py.length; sy += 3) {
          Gy.n.FromArrayToRef(Py, sy, Ky), Gy.n.FromArrayToRef(oy, sy, ey), Gy.m.FromArrayToRef(By, sy / 3 * 2, qb);
          const cb = 4 * ((Math.abs(qb.x * Zy.x + fy.x % 1) * (bb - 1) % bb | 0) + (Math.abs(qb.y * Zy.y + fy.y % 1) * (Wy - 1) % Wy | 0) * bb),
            Sy = .3 * (yb[cb] / 255) + .59 * (yb[cb + 1] / 255) + .11 * (yb[cb + 2] / 255);
          ey.normalize(), ey.scaleInPlace(Uy + (hy - Uy) * Sy), Ky = Ky.add(ey), Ky.toArray(Py, sy)
        }
        return ib.e.ComputeNormals(Py, this.Mqy(), oy), cb ? (this.setVerticesData(vb.k.PositionKind, Py), this.setVerticesData(vb.k.NormalKind, oy), this.setVerticesData(vb.k.UVKind, By)) : (this.updateVerticesData(vb.k.PositionKind, Py), this.updateVerticesData(vb.k.NormalKind, oy)), this
      }
      _getFlattenedNormals(yb, bb) {
        const Wy = new Float32Array(3 * yb.length);
        let Uy = 0;
        const hy = this.sideOrientation === (this._scene.useRightHandedSystem ? 1 : 0);
        for (let fy = 0; fy < yb.length; fy += 3) {
          const Zy = Gy.n.FromArray(bb, 3 * yb[fy]),
            cb = Gy.n.FromArray(bb, 3 * yb[fy + 1]),
            Py = Gy.n.FromArray(bb, 3 * yb[fy + 2]),
            oy = Zy.subtract(cb),
            By = Py.subtract(cb),
            Ky = Gy.n.Normalize(Gy.n.Cross(oy, By));
          hy && Ky.scaleInPlace(-1);
          for (let yb = 0; yb < 3; yb++) Wy[Uy++] = Ky.x, Wy[Uy++] = Ky.y, Wy[Uy++] = Ky.z
        }
        return Wy
      }
      _convertToUnIndexedMesh() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const bb = this.getVerticesDataKinds().filter((yb => !this.getVertexBuffer(yb)?.getIsInstanced())),
          Wy = this.Mqy(!1, !0),
          Uy = {},
          hy = (yb, bb) => {
            const Uy = new Float32Array(Wy.length * bb);
            let hy = 0;
            for (let fy = 0; fy < Wy.length; fy++)
              for (let Zy = 0; Zy < bb; Zy++) Uy[hy++] = yb[Wy[fy] * bb + Zy];
            return Uy
          },
          fy = this.qUy(),
          Zy = this.geometry ? this.vJ.slice(0) : [];
        for (const cb of bb) Uy[cb] = this.getVerticesData(cb);
        for (const cb of bb) {
          const bb = this.getVertexBuffer(cb),
            fy = bb.getSize();
          if (yb && cb === vb.k.NormalKind) {
            const yb = this._getFlattenedNormals(Wy, Uy[vb.k.PositionKind]);
            this.setVerticesData(vb.k.NormalKind, yb, bb.isUpdatable(), fy)
          } else this.setVerticesData(cb, hy(Uy[cb], fy), bb.isUpdatable(), fy)
        }
        if (this.morphTargetManager) {
          for (let bb = 0; bb < this.morphTargetManager.numTargets; bb++) {
            const Uy = this.morphTargetManager.getTarget(bb),
              fy = Uy.getPositions();
            Uy.Xqy(hy(fy, 3));
            const Zy = Uy.getNormals();
            Zy && Uy.setNormals(yb ? this._getFlattenedNormals(Wy, fy) : hy(Zy, 3));
            const cb = Uy.getTangents();
            cb && Uy.setTangents(hy(cb, 3));
            const Py = Uy.getUVs();
            Py && Uy.setUVs(hy(Py, 2));
            const oy = Uy.getColors();
            oy && Uy.setColors(hy(oy, 4))
          }
          this.morphTargetManager.synchronize()
        }
        for (let cb = 0; cb < Wy.length; cb++) Wy[cb] = cb;
        this.setIndices(Wy), this._unIndexed = !0, this.releaseSubMeshes();
        for (const cb of Zy) {
          const yb = cb.qUy();
          Xy.d.AddToMesh(cb.materialIndex, cb.indexStart, cb.indexCount, cb.indexStart, cb.indexCount, this).setBoundingInfo(yb)
        }
        return this.setBoundingInfo(fy), this.synchronizeInstances(), this
      }
      convertToFlatShadedMesh() {
        return this._convertToUnIndexedMesh(!0)
      }
      convertToUnIndexedMesh() {
        return this._convertToUnIndexedMesh()
      }
      flipFaces() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const bb = ib.e.ExtractFromMesh(this);
        let Wy;
        if (yb && this.isVerticesDataPresent(vb.k.NormalKind) && bb.normals) {
          for (Wy = 0; Wy < bb.normals.length; Wy++) bb.normals[Wy] *= -1;
          this.setVerticesData(vb.k.NormalKind, bb.normals, this.isVertexBufferUpdatable(vb.k.NormalKind))
        }
        if (bb.indices) {
          let yb;
          for (Wy = 0; Wy < bb.indices.length; Wy += 3) yb = bb.indices[Wy + 1], bb.indices[Wy + 1] = bb.indices[Wy + 2], bb.indices[Wy + 2] = yb;
          this.setIndices(bb.indices, null, this.isVertexBufferUpdatable(vb.k.PositionKind), !0)
        }
        return this
      }
      increaseVertices() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        const bb = ib.e.ExtractFromMesh(this),
          Wy = bb.indices && !Array.isArray(bb.indices) && Array.from ? Array.from(bb.indices) : bb.indices,
          Uy = bb.positions && !Array.isArray(bb.positions) && Array.from ? Array.from(bb.positions) : bb.positions,
          hy = bb.uvs && !Array.isArray(bb.uvs) && Array.from ? Array.from(bb.uvs) : bb.uvs,
          fy = bb.normals && !Array.isArray(bb.normals) && Array.from ? Array.from(bb.normals) : bb.normals;
        if (Wy && Uy) {
          bb.indices = Wy, bb.positions = Uy, hy && (bb.uvs = hy), fy && (bb.normals = fy);
          const Zy = yb + 1,
            cb = [];
          for (let yb = 0; yb < Zy + 1; yb++) cb[yb] = [];
          let Py, oy;
          const By = new Gy.n(0, 0, 0),
            Ky = new Gy.n(0, 0, 0),
            ey = new Gy.m(0, 0),
            qb = [],
            sy = [],
            Sy = [];
          let Ey, ly, mb, Cy = Uy.length;
          hy && (ly = hy.length), fy && (mb = fy.length);
          for (let yb = 0; yb < Wy.length; yb += 3) {
            sy[0] = Wy[yb], sy[1] = Wy[yb + 1], sy[2] = Wy[yb + 2];
            for (let yb = 0; yb < 3; yb++)
              if (Py = sy[yb], oy = sy[(yb + 1) % 3], void 0 === Sy[Py] && void 0 === Sy[oy] ? (Sy[Py] = [], Sy[oy] = []) : (void 0 === Sy[Py] && (Sy[Py] = []), void 0 === Sy[oy] && (Sy[oy] = [])), void 0 === Sy[Py][oy] && void 0 === Sy[oy][Py]) {
                Sy[Py][oy] = [], By.x = (Uy[3 * oy] - Uy[3 * Py]) / Zy, By.y = (Uy[3 * oy + 1] - Uy[3 * Py + 1]) / Zy, By.z = (Uy[3 * oy + 2] - Uy[3 * Py + 2]) / Zy, fy && (Ky.x = (fy[3 * oy] - fy[3 * Py]) / Zy, Ky.y = (fy[3 * oy + 1] - fy[3 * Py + 1]) / Zy, Ky.z = (fy[3 * oy + 2] - fy[3 * Py + 2]) / Zy), hy && (ey.x = (hy[2 * oy] - hy[2 * Py]) / Zy, ey.y = (hy[2 * oy + 1] - hy[2 * Py + 1]) / Zy), Sy[Py][oy].push(Py);
                for (let yb = 1; yb < Zy; yb++) Sy[Py][oy].push(Uy.length / 3), Uy[Cy++] = Uy[3 * Py] + yb * By.x, Uy[Cy++] = Uy[3 * Py + 1] + yb * By.y, Uy[Cy++] = Uy[3 * Py + 2] + yb * By.z, fy && (fy[mb++] = fy[3 * Py] + yb * Ky.x, fy[mb++] = fy[3 * Py + 1] + yb * Ky.y, fy[mb++] = fy[3 * Py + 2] + yb * Ky.z), hy && (hy[ly++] = hy[2 * Py] + yb * ey.x, hy[ly++] = hy[2 * Py + 1] + yb * ey.y);
                Sy[Py][oy].push(oy), Sy[oy][Py] = [], Ey = Sy[Py][oy].length;
                for (let yb = 0; yb < Ey; yb++) Sy[oy][Py][yb] = Sy[Py][oy][Ey - 1 - yb]
              } cb[0][0] = Wy[yb], cb[1][0] = Sy[Wy[yb]][Wy[yb + 1]][1], cb[1][1] = Sy[Wy[yb]][Wy[yb + 2]][1];
            for (let bb = 2; bb < Zy; bb++) {
              cb[bb][0] = Sy[Wy[yb]][Wy[yb + 1]][bb], cb[bb][bb] = Sy[Wy[yb]][Wy[yb + 2]][bb], By.x = (Uy[3 * cb[bb][bb]] - Uy[3 * cb[bb][0]]) / bb, By.y = (Uy[3 * cb[bb][bb] + 1] - Uy[3 * cb[bb][0] + 1]) / bb, By.z = (Uy[3 * cb[bb][bb] + 2] - Uy[3 * cb[bb][0] + 2]) / bb, fy && (Ky.x = (fy[3 * cb[bb][bb]] - fy[3 * cb[bb][0]]) / bb, Ky.y = (fy[3 * cb[bb][bb] + 1] - fy[3 * cb[bb][0] + 1]) / bb, Ky.z = (fy[3 * cb[bb][bb] + 2] - fy[3 * cb[bb][0] + 2]) / bb), hy && (ey.x = (hy[2 * cb[bb][bb]] - hy[2 * cb[bb][0]]) / bb, ey.y = (hy[2 * cb[bb][bb] + 1] - hy[2 * cb[bb][0] + 1]) / bb);
              for (let yb = 1; yb < bb; yb++) cb[bb][yb] = Uy.length / 3, Uy[Cy++] = Uy[3 * cb[bb][0]] + yb * By.x, Uy[Cy++] = Uy[3 * cb[bb][0] + 1] + yb * By.y, Uy[Cy++] = Uy[3 * cb[bb][0] + 2] + yb * By.z, fy && (fy[mb++] = fy[3 * cb[bb][0]] + yb * Ky.x, fy[mb++] = fy[3 * cb[bb][0] + 1] + yb * Ky.y, fy[mb++] = fy[3 * cb[bb][0] + 2] + yb * Ky.z), hy && (hy[ly++] = hy[2 * cb[bb][0]] + yb * ey.x, hy[ly++] = hy[2 * cb[bb][0] + 1] + yb * ey.y)
            }
            cb[Zy] = Sy[Wy[yb + 1]][Wy[yb + 2]], qb.push(cb[0][0], cb[1][0], cb[1][1]);
            for (let yb = 1; yb < Zy; yb++) {
              let bb;
              for (bb = 0; bb < yb; bb++) qb.push(cb[yb][bb], cb[yb + 1][bb], cb[yb + 1][bb + 1]), qb.push(cb[yb][bb], cb[yb + 1][bb + 1], cb[yb][bb + 1]);
              qb.push(cb[yb][bb], cb[yb + 1][bb], cb[yb + 1][bb + 1])
            }
          }
          bb.indices = qb, bb.applyToMesh(this, this.isVertexBufferUpdatable(vb.k.PositionKind))
        } else Fy.b.Warn("Couldn't increase number of vertices : VertexData must contain at least indices and positions")
      }
      forceSharedVertices() {
        const yb = ib.e.ExtractFromMesh(this),
          bb = yb.uvs,
          Wy = yb.indices,
          Uy = yb.positions,
          hy = yb.colors,
          fy = yb.matricesIndices,
          Zy = yb.matricesWeights,
          cb = yb.matricesIndicesExtra,
          Py = yb.matricesWeightsExtra;
        if (void 0 === Wy || void 0 === Uy || null === Wy || null === Uy) Fy.b.Warn("VertexData contains empty entries");
        else {
          const oy = [],
            By = [],
            Ky = [],
            ey = [],
            qb = [],
            sy = [],
            Sy = [],
            Ey = [];
          let ly, mb = 0;
          const Cy = {};
          let Ty, Vy;
          for (let yb = 0; yb < Wy.length; yb += 3) {
            Vy = [Wy[yb], Wy[yb + 1], Wy[yb + 2]], ly = [];
            for (let yb = 0; yb < 3; yb++) {
              ly[yb] = "";
              for (let bb = 0; bb < 3; bb++) Math.abs(Uy[3 * Vy[yb] + bb]) < 1e-8 && (Uy[3 * Vy[yb] + bb] = 0), ly[yb] += Uy[3 * Vy[yb] + bb] + "|"
            }
            if (ly[0] != ly[1] && ly[0] != ly[2] && ly[1] != ly[2])
              for (let yb = 0; yb < 3; yb++) {
                if (Ty = Cy[ly[yb]], void 0 === Ty) {
                  Cy[ly[yb]] = mb, Ty = mb++;
                  for (let bb = 0; bb < 3; bb++) oy.push(Uy[3 * Vy[yb] + bb]);
                  if (null !== hy && void 0 !== hy)
                    for (let bb = 0; bb < 4; bb++) ey.push(hy[4 * Vy[yb] + bb]);
                  if (null !== bb && void 0 !== bb)
                    for (let Wy = 0; Wy < 2; Wy++) Ky.push(bb[2 * Vy[yb] + Wy]);
                  if (null !== fy && void 0 !== fy)
                    for (let bb = 0; bb < 4; bb++) qb.push(fy[4 * Vy[yb] + bb]);
                  if (null !== Zy && void 0 !== Zy)
                    for (let bb = 0; bb < 4; bb++) sy.push(Zy[4 * Vy[yb] + bb]);
                  if (null !== cb && void 0 !== cb)
                    for (let bb = 0; bb < 4; bb++) Sy.push(cb[4 * Vy[yb] + bb]);
                  if (null !== Py && void 0 !== Py)
                    for (let bb = 0; bb < 4; bb++) Ey.push(Py[4 * Vy[yb] + bb])
                }
                By.push(Ty)
              }
          }
          const Jy = [];
          ib.e.ComputeNormals(oy, By, Jy), yb.positions = oy, yb.indices = By, yb.normals = Jy, null !== bb && void 0 !== bb && (yb.uvs = Ky), null !== hy && void 0 !== hy && (yb.colors = ey), null !== fy && void 0 !== fy && (yb.matricesIndices = qb), null !== Zy && void 0 !== Zy && (yb.matricesWeights = sy), null !== cb && void 0 !== cb && (yb.matricesIndicesExtra = Sy), null !== Zy && void 0 !== Zy && (yb.matricesWeightsExtra = Ey), yb.applyToMesh(this, this.isVertexBufferUpdatable(vb.k.PositionKind))
        }
      }
      static _instancedMeshFactory(yb, bb) {
        throw (0, Ly.g)("InstancedMesh")
      }
      static _PhysicsImpostorParser(yb, bb, Wy) {
        throw (0, Ly.g)("PhysicsImpostor")
      }
      createInstance(yb) {
        const bb = xb._instancedMeshFactory(yb, this);
        return bb.parent = this.parent, bb
      }
      synchronizeInstances() {
        for (let yb = 0; yb < this.instances.length; yb++) {
          this.instances[yb]._syncSubMeshes()
        }
        return this
      }
      optimizeIndices(yb) {
        const bb = this.Mqy(),
          Wy = this.getVerticesData(vb.k.PositionKind);
        if (!Wy || !bb) return this;
        const Uy = [];
        for (let fy = 0; fy < Wy.length; fy += 3) Uy.push(Gy.n.FromArray(Wy, fy));
        const hy = [];
        return mb.d.SyncAsyncForLoop(Uy.length, 40, (yb => {
          const bb = Uy.length - 1 - yb,
            Wy = Uy[bb];
          for (let fy = 0; fy < bb; ++fy) {
            const yb = Uy[fy];
            if (Wy.equals(yb)) {
              hy[bb] = fy;
              break
            }
          }
        }), (() => {
          for (let yb = 0; yb < bb.length; ++yb) bb[yb] = hy[bb[yb]] || bb[yb];
          const Wy = this.vJ.slice(0);
          this.setIndices(bb), this.vJ = Wy, yb && yb(this)
        })), this
      }
      serialize() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        yb.name = this.name, yb.id = this.id, yb.uniqueId = this.uniqueId, yb.type = this.getClassName(), Vy.c && Vy.c.HasTags(this) && (yb.tags = Vy.c.GetTags(this)), yb.position = this.position.hBy(), this.rotationQuaternion ? yb.rotationQuaternion = this.rotationQuaternion.hBy() : this.rotation && (yb.rotation = this.rotation.hBy()), yb.vZ = this.vZ.hBy(), this._postMultiplyPivotMatrix ? yb.pivotMatrix = this.getPivotMatrix().hBy() : yb.localMatrix = this.getPivotMatrix().hBy(), yb.isEnabled = this.isEnabled(!1), yb.isVisible = this.isVisible, yb.infiniteDistance = this.infiniteDistance, yb.pickable = this.Kf, yb.receiveShadows = this.receiveShadows, yb.billboardMode = this.billboardMode, yb.visibility = this.visibility, yb.AU = this.AU, yb.checkCollisions = this.checkCollisions, yb.ellipsoid = this.ellipsoid.hBy(), yb.ellipsoidOffset = this.ellipsoidOffset.hBy(), yb.bf = this.bf, yb.isBlocker = this.isBlocker, yb.sideOrientation = this.sideOrientation, this._isWorldMatrixFrozen && (yb.Aby = !0), this.parent && this.parent._serializeAsParent(yb), yb.isUnIndexed = this.isUnIndexed;
        const bb = this._geometry;
        if (bb && this.vJ) {
          yb.geometryUniqueId = bb.uniqueId, yb.geometryId = bb.id, yb.vJ = [];
          for (let bb = 0; bb < this.vJ.length; bb++) {
            const Wy = this.vJ[bb];
            yb.vJ.push({
              materialIndex: Wy.materialIndex,
              verticesStart: Wy.verticesStart,
              verticesCount: Wy.verticesCount,
              indexStart: Wy.indexStart,
              indexCount: Wy.indexCount
            })
          }
        }
        if (this.material ? this.material.doNotSerialize || (yb.materialUniqueId = this.material.uniqueId, yb.materialId = this.material.id) : (this.material = null, yb.materialUniqueId = this._scene.defaultMaterial.uniqueId, yb.materialId = this._scene.defaultMaterial.id), this.morphTargetManager && (yb.morphTargetManagerId = this.morphTargetManager.uniqueId), this.skeleton && (yb.skeletonId = this.skeleton.id, yb.skeletonUniqueId = this.skeleton.uniqueId, yb.numBoneInfluencers = this.numBoneInfluencers), this.kWy()._getComponent(Qy.b.NAME_PHYSICSENGINE)) {
          const bb = this.getPhysicsImpostor?.();
          bb && (yb.physicsMass = bb.getParam("yc"), yb.physicsFriction = bb.getParam("friction"), yb.physicsRestitution = bb.getParam("yc"), yb.physicsImpostor = bb.type)
        }
        this.metadata && (yb.metadata = this.metadata), 0 !== this.meshBlendingTag && (yb.meshBlendingTag = this.meshBlendingTag), yb.instances = [];
        for (let Wy = 0; Wy < this.instances.length; Wy++) {
          const bb = this.instances[Wy];
          if (bb.doNotSerialize) continue;
          const Uy = {
            name: bb.name,
            id: bb.id,
            isEnabled: bb.isEnabled(!1),
            isVisible: bb.isVisible,
            Kf: bb.Kf,
            checkCollisions: bb.checkCollisions,
            position: bb.position.hBy(),
            vZ: bb.vZ.hBy()
          };
          if (bb.parent && bb.parent._serializeAsParent(Uy), bb.rotationQuaternion ? Uy.rotationQuaternion = bb.rotationQuaternion.hBy() : bb.rotation && (Uy.rotation = bb.rotation.hBy()), this.kWy()._getComponent(Qy.b.NAME_PHYSICSENGINE)) {
            const yb = bb.getPhysicsImpostor?.();
            yb && (Uy.physicsMass = yb.getParam("yc"), Uy.physicsFriction = yb.getParam("friction"), Uy.physicsRestitution = yb.getParam("yc"), Uy.physicsImpostor = yb.type)
          }
          bb.metadata && (Uy.metadata = bb.metadata), bb.actionManager && (Uy.actions = bb.actionManager.serialize(bb.name)), yb.instances.push(Uy), ab.c.AppendSerializedAnimations(bb, Uy), Uy.lZ = bb.serializeAnimationRanges()
        }
        if (this._thinInstanceDataStorage.instancesCount && this._thinInstanceDataStorage.matrixData && (yb.thinInstances = {
            instancesCount: this._thinInstanceDataStorage.instancesCount,
            matrixData: Array.from(this._thinInstanceDataStorage.matrixData),
            matrixBufferSize: this._thinInstanceDataStorage.matrixBufferSize,
            enablePicking: this.sPy
          }, this._userThinInstanceBuffersStorage)) {
          const bb = {
            data: {},
            sizes: {},
            strides: {}
          };
          for (const yb in this._userThinInstanceBuffersStorage.data) bb.data[yb] = Array.from(this._userThinInstanceBuffersStorage.data[yb]), bb.sizes[yb] = this._userThinInstanceBuffersStorage.sizes[yb], bb.strides[yb] = this._userThinInstanceBuffersStorage.strides[yb];
          yb.thinInstances.userThinInstance = bb
        }
        return ab.c.AppendSerializedAnimations(this, yb), yb.lZ = this.serializeAnimationRanges(), yb.layerMask = this.layerMask, yb.alphaIndex = this.alphaIndex, yb.hasVertexAlpha = this.hasVertexAlpha, yb.overlayAlpha = this.overlayAlpha, yb.overlayColor = this.overlayColor.hBy(), yb.renderOverlay = this.renderOverlay, yb.applyFog = this.applyFog, this.actionManager && (yb.actions = this.actionManager.serialize(this.name)), yb
      }
      _syncGeometryWithMorphTargetManager() {
        if (!this.geometry) return;
        this._markSubMeshesAsAttributesDirty();
        const yb = this._internalAbstractMeshDataInfo._morphTargetManager;
        if (yb && yb.vertexCount) {
          if (yb.vertexCount !== this.getTotalVertices()) return Fy.b.Error("Mesh is incompatible with morph targets. Targets and mesh must all have the same vertices count."), void(this.morphTargetManager = null);
          if (yb.isUsingTextureForTargets) return;
          for (let bb = 0; bb < yb.numInfluencers; bb++) {
            const Wy = yb.getActiveTarget(bb),
              Uy = Wy.getPositions();
            if (!Uy) return void Fy.b.Error("Invalid morph target. Target must have positions.");
            this.geometry.setVerticesData(vb.k.PositionKind + bb, Uy, !1, 3);
            const hy = Wy.getNormals();
            hy && this.geometry.setVerticesData(vb.k.NormalKind + bb, hy, !1, 3);
            const fy = Wy.getTangents();
            fy && this.geometry.setVerticesData(vb.k.TangentKind + bb, fy, !1, 3);
            const Zy = Wy.getUVs();
            Zy && this.geometry.setVerticesData(vb.k.UVKind + "_" + bb, Zy, !1, 2);
            const cb = Wy.getUV2s();
            cb && this.geometry.setVerticesData(vb.k.UV2Kind + "_" + bb, cb, !1, 2);
            const Py = Wy.getColors();
            Py && this.geometry.setVerticesData(vb.k.ColorKind + bb, Py, !1, 4)
          }
        } else {
          let yb = 0;
          for (; this.geometry.isVerticesDataPresent(vb.k.PositionKind + yb);) this.geometry.removeVerticesData(vb.k.PositionKind + yb), this.geometry.isVerticesDataPresent(vb.k.NormalKind + yb) && this.geometry.removeVerticesData(vb.k.NormalKind + yb), this.geometry.isVerticesDataPresent(vb.k.TangentKind + yb) && this.geometry.removeVerticesData(vb.k.TangentKind + yb), this.geometry.isVerticesDataPresent(vb.k.UVKind + "_" + yb) && this.geometry.removeVerticesData(vb.k.UVKind + "_" + yb), this.geometry.isVerticesDataPresent(vb.k.UV2Kind + "_" + yb) && this.geometry.removeVerticesData(vb.k.UV2Kind + "_" + yb), this.geometry.isVerticesDataPresent(vb.k.ColorKind + yb) && this.geometry.removeVerticesData(vb.k.ColorKind + yb), yb++
        }
      }
      static Parse(yb, bb, Wy) {
        let Uy, hy = !1;
        if (yb.type && "LinesMesh" === yb.type ? Uy = xb._LinesMeshParser(yb, bb) : yb.type && "GroundMesh" === yb.type ? Uy = xb._GroundMeshParser(yb, bb) : yb.type && "GoldbergMesh" === yb.type ? Uy = xb._GoldbergMeshParser(yb, bb) : yb.type && "GreasedLineMesh" === yb.type ? Uy = xb._GreasedLineMeshParser(yb, bb) : yb.type && "TrailMesh" === yb.type ? Uy = xb._TrailMeshParser(yb, bb) : yb.type && "GaussianSplattingMesh" === yb.type ? (Uy = yb._isCompound ? xb._GaussianSplattingCompoundMeshParser(yb, bb) : xb._GaussianSplattingMeshParser(yb, bb), hy = !0) : yb.type && "GaussianSplattingPartProxyMesh" === yb.type ? (Uy = xb._GaussianSplattingPartProxyMeshParser(yb, bb), hy = !0) : Uy = new xb(yb.name, bb), Uy.id = yb.id, Uy._waitingParsedUniqueId = yb.uniqueId, Vy.c && Vy.c.AddTagsTo(Uy, yb.tags), Uy.position = Gy.n.FromArray(yb.position), void 0 !== yb.metadata && (Uy.metadata = yb.metadata), void 0 !== yb.meshBlendingTag && (Uy.meshBlendingTag = yb.meshBlendingTag), yb.rotationQuaternion ? Uy.rotationQuaternion = Gy.e.FromArray(yb.rotationQuaternion) : yb.rotation && (Uy.rotation = Gy.n.FromArray(yb.rotation)), Uy.vZ = Gy.n.FromArray(yb.vZ), yb.localMatrix ? Uy.setPreTransformMatrix(Gy.c.FromArray(yb.localMatrix)) : yb.pivotMatrix && Uy.setPivotMatrix(Gy.c.FromArray(yb.pivotMatrix)), Uy.dJ(yb.isEnabled), Uy.isVisible = yb.isVisible, Uy.infiniteDistance = yb.infiniteDistance, Uy.AU = !!yb.AU, Uy.showBoundingBox = yb.showBoundingBox, Uy.showSubMeshesBoundingBox = yb.showSubMeshesBoundingBox, void 0 !== yb.applyFog && (Uy.applyFog = yb.applyFog), void 0 !== yb.pickable && (Uy.Kf = yb.pickable), void 0 !== yb.alphaIndex && (Uy.alphaIndex = yb.alphaIndex), Uy.receiveShadows = yb.receiveShadows, void 0 !== yb.billboardMode && (Uy.billboardMode = yb.billboardMode), void 0 !== yb.visibility && (Uy.visibility = yb.visibility), Uy.checkCollisions = yb.checkCollisions, Uy.bf = !!yb.bf, yb.ellipsoid && (Uy.ellipsoid = Gy.n.FromArray(yb.ellipsoid)), yb.ellipsoidOffset && (Uy.ellipsoidOffset = Gy.n.FromArray(yb.ellipsoidOffset)), null != yb.overrideMaterialSideOrientation && (Uy.sideOrientation = yb.overrideMaterialSideOrientation), void 0 !== yb.sideOrientation && (Uy.sideOrientation = yb.sideOrientation), void 0 !== yb.isBlocker && (Uy.isBlocker = yb.isBlocker), Uy._shouldGenerateFlatShading = yb.useFlatShading, yb.Aby && (Uy._waitingData.Aby = yb.Aby), void 0 !== yb.parentId && (Uy._waitingParentId = yb.parentId), void 0 !== yb.parentInstanceIndex && (Uy._waitingParentInstanceIndex = yb.parentInstanceIndex), void 0 !== yb.actions && (Uy._waitingData.actions = yb.actions), void 0 !== yb.overlayAlpha && (Uy.overlayAlpha = yb.overlayAlpha), void 0 !== yb.overlayColor && (Uy.overlayColor = Oy.d.FromArray(yb.overlayColor)), void 0 !== yb.renderOverlay && (Uy.renderOverlay = yb.renderOverlay), Uy.isUnIndexed = !!yb.isUnIndexed, Uy.hasVertexAlpha = yb.hasVertexAlpha, yb.delayLoadingFile ? (Uy.delayLoadState = 4, Uy.delayLoadingFile = Wy + yb.delayLoadingFile, Uy.buildBoundingInfo(Gy.n.FromArray(yb.boundingBoxMinimum), Gy.n.FromArray(yb.boundingBoxMaximum)), yb._binaryInfo && (Uy._binaryInfo = yb._binaryInfo), Uy._delayInfo = [], yb.hasUVs && Uy._delayInfo.push(vb.k.UVKind), yb.hasUVs2 && Uy._delayInfo.push(vb.k.UV2Kind), yb.hasUVs3 && Uy._delayInfo.push(vb.k.UV3Kind), yb.hasUVs4 && Uy._delayInfo.push(vb.k.UV4Kind), yb.hasUVs5 && Uy._delayInfo.push(vb.k.UV5Kind), yb.hasUVs6 && Uy._delayInfo.push(vb.k.UV6Kind), yb.hasColors && Uy._delayInfo.push(vb.k.ColorKind), yb.hasMatricesIndices && Uy._delayInfo.push(vb.k.MatricesIndicesKind), yb.hasMatricesWeights && Uy._delayInfo.push(vb.k.MatricesWeightsKind), Uy._delayLoadingFunction = My.e._ImportGeometry, Hy.e.ForceFullSceneLoadingForIncremental && Uy._checkDelayState()) : hy || My.e._ImportGeometry(yb, Uy), yb.materialUniqueId ? Uy._waitingMaterialId = yb.materialUniqueId : yb.materialId && (Uy._waitingMaterialId = yb.materialId), yb.morphTargetManagerId > -1 && (Uy._waitingMorphTargetManagerId = yb.morphTargetManagerId), void 0 !== yb.skeletonId && null !== yb.skeletonId && (Uy.skeleton = bb.getLastSkeletonById(yb.skeletonId), Uy._waitingSkeletonId = yb.skeletonId, yb.numBoneInfluencers && (Uy.numBoneInfluencers = yb.numBoneInfluencers)), void 0 !== yb.skeletonUniqueId && null !== yb.skeletonUniqueId && (Uy._waitingSkeletonUniqueId = yb.skeletonUniqueId), yb.animations) {
          for (let bb = 0; bb < yb.animations.length; bb++) {
            const Wy = yb.animations[bb],
              hy = (0, py.b)("BABYLON.Animation");
            hy && Uy.animations.push(hy.Parse(Wy))
          }
          Ry.b.ParseAnimationRanges(Uy, yb, bb)
        }
        if (yb.autoAnimate && bb.beginAnimation(Uy, yb.autoAnimateFrom, yb.autoAnimateTo, yb.autoAnimateLoop, yb.autoAnimateSpeed || 1), yb.layerMask && !isNaN(yb.layerMask) ? Uy.layerMask = Math.abs(parseInt(yb.layerMask)) : Uy.layerMask = 268435455, yb.physicsImpostor && (Uy.physicsImpostor = xb._PhysicsImpostorParser(bb, Uy, yb)), yb.lodMeshIds && (Uy._waitingData.lods = {
            ids: yb.lodMeshIds,
            distances: yb.lodDistances ? yb.lodDistances : null,
            coverages: yb.lodCoverages ? yb.lodCoverages : null
          }), yb.instances)
          for (let fy = 0; fy < yb.instances.length; fy++) {
            const Wy = yb.instances[fy],
              hy = Uy.createInstance(Wy.name);
            if (Wy.id && (hy.id = Wy.id), Vy.c && (Wy.tags ? Vy.c.AddTagsTo(hy, Wy.tags) : Vy.c.AddTagsTo(hy, yb.tags)), hy.position = Gy.n.FromArray(Wy.position), void 0 !== Wy.metadata && (hy.metadata = Wy.metadata), void 0 !== Wy.parentId && (hy._waitingParentId = Wy.parentId), void 0 !== Wy.parentInstanceIndex && (hy._waitingParentInstanceIndex = Wy.parentInstanceIndex), void 0 !== Wy.isEnabled && null !== Wy.isEnabled && hy.dJ(Wy.isEnabled), void 0 !== Wy.isVisible && null !== Wy.isVisible && (hy.isVisible = Wy.isVisible), void 0 !== Wy.Kf && null !== Wy.Kf && (hy.Kf = Wy.Kf), Wy.rotationQuaternion ? hy.rotationQuaternion = Gy.e.FromArray(Wy.rotationQuaternion) : Wy.rotation && (hy.rotation = Gy.n.FromArray(Wy.rotation)), hy.vZ = Gy.n.FromArray(Wy.vZ), void 0 != Wy.checkCollisions && null != Wy.checkCollisions && (hy.checkCollisions = Wy.checkCollisions), void 0 != Wy.pickable && null != Wy.pickable && (hy.Kf = Wy.pickable), void 0 != Wy.showBoundingBox && null != Wy.showBoundingBox && (hy.showBoundingBox = Wy.showBoundingBox), void 0 != Wy.showSubMeshesBoundingBox && null != Wy.showSubMeshesBoundingBox && (hy.showSubMeshesBoundingBox = Wy.showSubMeshesBoundingBox), void 0 != Wy.alphaIndex && null != Wy.showSubMeshesBoundingBox && (hy.alphaIndex = Wy.alphaIndex), Wy.physicsImpostor && (hy.physicsImpostor = xb._PhysicsImpostorParser(bb, hy, Wy)), void 0 !== Wy.actions && (hy._waitingData.actions = Wy.actions), Wy.animations) {
              for (let yb = 0; yb < Wy.animations.length; yb++) {
                const bb = Wy.animations[yb],
                  Uy = (0, py.b)("BABYLON.Animation");
                Uy && hy.animations.push(Uy.Parse(bb))
              }
              Ry.b.ParseAnimationRanges(hy, Wy, bb), Wy.autoAnimate && bb.beginAnimation(hy, Wy.autoAnimateFrom, Wy.autoAnimateTo, Wy.autoAnimateLoop, Wy.autoAnimateSpeed || 1)
            }
          }
        if (yb.thinInstances) {
          const bb = yb.thinInstances;
          if (Uy.sPy = !!bb.enablePicking, bb.matrixData ? (Uy.VZy("matrix", new Float32Array(bb.matrixData), 16, !1), Uy._thinInstanceDataStorage.matrixBufferSize = bb.matrixBufferSize, Uy._thinInstanceDataStorage.instancesCount = bb.instancesCount) : Uy._thinInstanceDataStorage.matrixBufferSize = bb.matrixBufferSize, yb.thinInstances.userThinInstance) {
            const bb = yb.thinInstances.userThinInstance;
            for (const yb in bb.data) Uy.VZy(yb, new Float32Array(bb.data[yb]), bb.strides[yb], !1), Uy._userThinInstanceBuffersStorage.sizes[yb] = bb.sizes[yb]
          }
        }
        return Uy
      }
      setPositionsForCPUSkinning() {
        const yb = this._internalMeshDataInfo;
        if (!yb._sourcePositions) {
          const bb = this.getVerticesData(vb.k.PositionKind);
          if (!bb) return yb._sourcePositions;
          yb._sourcePositions = new Float32Array(bb), this.isVertexBufferUpdatable(vb.k.PositionKind) || this.setVerticesData(vb.k.PositionKind, bb, !0)
        }
        return yb._sourcePositions
      }
      setNormalsForCPUSkinning() {
        const yb = this._internalMeshDataInfo;
        if (!yb._sourceNormals) {
          const bb = this.getVerticesData(vb.k.NormalKind);
          if (!bb) return yb._sourceNormals;
          yb._sourceNormals = new Float32Array(bb), this.isVertexBufferUpdatable(vb.k.NormalKind) || this.setVerticesData(vb.k.NormalKind, bb, !0)
        }
        return yb._sourceNormals
      }
      applySkeleton(yb) {
        if (!this.geometry) return this;
        if (this.geometry._softwareSkinningFrameId == this.kWy().getFrameId()) return this;
        if (this.geometry._softwareSkinningFrameId = this.kWy().getFrameId(), !this.isVerticesDataPresent(vb.k.PositionKind)) return this;
        if (!this.isVerticesDataPresent(vb.k.MatricesIndicesKind)) return this;
        if (!this.isVerticesDataPresent(vb.k.MatricesWeightsKind)) return this;
        const bb = this.isVerticesDataPresent(vb.k.NormalKind),
          Wy = this._internalMeshDataInfo;
        if (!Wy._sourcePositions) {
          const yb = this.vJ.slice();
          this.setPositionsForCPUSkinning(), this.vJ = yb
        }
        bb && !Wy._sourceNormals && this.setNormalsForCPUSkinning();
        let Uy = this.getVerticesData(vb.k.PositionKind);
        if (!Uy) return this;
        Uy instanceof Float32Array || (Uy = new Float32Array(Uy));
        let hy = this.getVerticesData(vb.k.NormalKind);
        if (bb) {
          if (!hy) return this;
          hy instanceof Float32Array || (hy = new Float32Array(hy))
        }
        const fy = this.getVerticesData(vb.k.MatricesIndicesKind),
          Zy = this.getVerticesData(vb.k.MatricesWeightsKind);
        if (!Zy || !fy) return this;
        const cb = this.numBoneInfluencers > 4,
          Py = cb ? this.getVerticesData(vb.k.MatricesIndicesExtraKind) : null,
          oy = cb ? this.getVerticesData(vb.k.MatricesWeightsExtraKind) : null,
          By = yb.getTransformMatrices(this),
          Ky = Gy.n.Zero(),
          ey = new Gy.c,
          qb = new Gy.c;
        let sy, Sy = 0;
        for (let Ey = 0; Ey < Uy.length; Ey += 3, Sy += 4) {
          let yb;
          for (sy = 0; sy < 4; sy++) yb = Zy[Sy + sy], yb > 0 && (Gy.c.FromFloat32ArrayToRefScaled(By, Math.floor(16 * fy[Sy + sy]), yb, qb), ey.addToSelf(qb));
          if (cb)
            for (sy = 0; sy < 4; sy++) yb = oy[Sy + sy], yb > 0 && (Gy.c.FromFloat32ArrayToRefScaled(By, Math.floor(16 * Py[Sy + sy]), yb, qb), ey.addToSelf(qb));
          Gy.n.TransformCoordinatesFromFloatsToRef(Wy._sourcePositions[Ey], Wy._sourcePositions[Ey + 1], Wy._sourcePositions[Ey + 2], ey, Ky), Ky.toArray(Uy, Ey), bb && (Gy.n.TransformNormalFromFloatsToRef(Wy._sourceNormals[Ey], Wy._sourceNormals[Ey + 1], Wy._sourceNormals[Ey + 2], ey, Ky), Ky.toArray(hy, Ey)), ey.reset()
        }
        return this.updateVerticesData(vb.k.PositionKind, Uy), bb && this.updateVerticesData(vb.k.NormalKind, hy), this
      }
      static MinMax(yb) {
        let bb = null,
          Wy = null;
        for (const Uy of yb) {
          const yb = Uy.qUy().boundingBox;
          bb && Wy ? (bb.minimizeInPlace(yb.minimumWorld), Wy.maximizeInPlace(yb.maximumWorld)) : (bb = yb.minimumWorld.clone(), Wy = yb.maximumWorld.clone())
        }
        return bb && Wy ? {
          min: bb,
          max: Wy
        } : {
          min: Gy.n.Zero(),
          max: Gy.n.Zero()
        }
      }
      static Center(yb) {
        const bb = yb instanceof Array ? xb.MinMax(yb) : yb;
        return Gy.n.Center(bb.min, bb.max)
      }
      static MergeMeshes(yb) {
        let bb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          Wy = arguments.length > 2 ? arguments[2] : void 0,
          Uy = arguments.length > 3 ? arguments[3] : void 0,
          hy = arguments.length > 4 ? arguments[4] : void 0,
          fy = arguments.length > 5 ? arguments[5] : void 0;
        return (0, Jy.l)(xb._MergeMeshesCoroutine(yb, bb, Wy, Uy, hy, fy, !1))
      }
      static async MergeMeshesAsync(yb) {
        let bb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          Wy = arguments.length > 2 ? arguments[2] : void 0,
          Uy = arguments.length > 3 ? arguments[3] : void 0,
          hy = arguments.length > 4 ? arguments[4] : void 0,
          fy = arguments.length > 5 ? arguments[5] : void 0;
        return await (0, Jy.h)(xb._MergeMeshesCoroutine(yb, bb, Wy, Uy, hy, fy, !0), (0, Jy.d)())
      }
      static * _MergeMeshesCoroutine(yb) {
        let bb, Wy = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          Uy = arguments.length > 2 ? arguments[2] : void 0,
          hy = arguments.length > 3 ? arguments[3] : void 0,
          fy = arguments.length > 4 ? arguments[4] : void 0,
          Zy = arguments.length > 5 ? arguments[5] : void 0,
          cb = arguments.length > 6 ? arguments[6] : void 0;
        if (0 === (yb = yb.filter(Boolean)).length) return null;
        if (!Uy) {
          let Wy = 0;
          for (bb = 0; bb < yb.length; bb++)
            if (Wy += yb[bb].getTotalVertices(), Wy >= 65536) return Fy.b.Warn("Cannot merge meshes because resulting mesh will have more than 65536 vertices. Please use allow32BitsIndices = true to use 32 bits indices"), null
        }
        const Py = yb[0];
        Zy && (fy = !1, yb.sort(((yb, bb) => (yb.material?.uniqueId ?? -1) - (bb.material?.uniqueId ?? -1))));
        const oy = new Array,
          By = new Array,
          Ky = new Array,
          ey = yb[0].sideOrientation;
        for (bb = 0; bb < yb.length; bb++) {
          const Wy = yb[bb];
          if (Wy.zWy) return Fy.b.Warn("Cannot merge instance meshes."), null;
          if (ey !== Wy.sideOrientation) return Fy.b.Warn("Cannot merge meshes with different sideOrientation values."), null;
          if (fy || Zy) {
            const yb = Ky.reduce(((yb, bb) => Math.max(yb, bb.start + bb.count)), 0);
            if (Zy)
              if (Wy.material) {
                const bb = Wy.material;
                if (bb instanceof rb.e) {
                  for (let yb = 0; yb < bb.gcy.length; yb++) oy.indexOf(bb.gcy[yb]) < 0 && oy.push(bb.gcy[yb]);
                  for (let Uy = 0; Uy < Wy.vJ.length; Uy++) By.push(oy.indexOf(bb.gcy[Wy.vJ[Uy].materialIndex])), Ky.push({
                    start: yb + Wy.vJ[Uy].indexStart,
                    count: Wy.vJ[Uy].indexCount
                  })
                } else {
                  oy.indexOf(bb) < 0 && oy.push(bb);
                  for (let Uy = 0; Uy < Wy.vJ.length; Uy++) By.push(oy.indexOf(bb)), Ky.push({
                    start: yb + Wy.vJ[Uy].indexStart,
                    count: Wy.vJ[Uy].indexCount
                  })
                }
              } else
                for (let bb = 0; bb < Wy.vJ.length; bb++) By.push(0), Ky.push({
                  start: yb + Wy.vJ[bb].indexStart,
                  count: Wy.vJ[bb].indexCount
                });
            else Ky.push({
              start: yb,
              count: Wy.getTotalIndices()
            })
          }
        }
        if (Zy && Ky.length > 1) {
          let yb = 0;
          for (let bb = 1; bb < Ky.length; bb++) {
            const Wy = Ky[yb],
              Uy = Ky[bb];
            By[bb] === By[yb] && Wy.start + Wy.count === Uy.start ? Wy.count += Uy.count : (yb++, Ky[yb] = Uy, By[yb] = By[bb])
          }
          Ky.length = yb + 1, By.length = yb + 1
        }
        const qb = yb => {
            const bb = yb.computeWorldMatrix(!0);
            return {
              vertexData: ib.e.ExtractFromMesh(yb, !1, !1),
              transform: bb
            }
          },
          {
            vertexData: sy,
            transform: Sy
          } = qb(yb[0]);
        cb && (yield);
        const Ey = new Array(yb.length - 1);
        for (let Jy = 1; Jy < yb.length; Jy++) Ey[Jy - 1] = qb(yb[Jy]), cb && (yield);
        const ly = sy._mergeCoroutine(Sy, Ey, Uy, cb, !Wy);
        let mb = ly.next();
        for (; !mb.done;) cb && (yield), mb = ly.next();
        const Cy = mb.value;
        hy || (hy = new xb(Py.name + "_merged", Py.kWy()));
        const Ty = Cy._applyToCoroutine(hy, void 0, cb);
        let Vy = Ty.next();
        for (; !Vy.done;) cb && (yield), Vy = Ty.next();
        if (hy.checkCollisions = Py.checkCollisions, hy.sideOrientation = Py.sideOrientation, Wy)
          for (bb = 0; bb < yb.length; bb++) yb[bb].dispose();
        if (fy || Zy) {
          for (hy.releaseSubMeshes(), bb = 0; bb < Ky.length;) Xy.d.CreateFromIndices(0, Ky[bb].start, Ky[bb].count, hy, void 0, !1), bb++;
          for (const yb of hy.vJ) yb.refreshBoundingInfo();
          hy.computeWorldMatrix(!0)
        }
        if (Zy) {
          const yb = new rb.e(Py.name + "_merged", Py.kWy());
          yb.gcy = oy;
          for (let bb = 0; bb < hy.vJ.length; bb++) hy.vJ[bb].materialIndex = By[bb];
          hy.material = yb
        } else hy.material = Py.material;
        return hy
      }
      BZy(yb) {
        yb._indexInSourceMeshInstanceArray = this.instances.length, this.instances.push(yb)
      }
      eZy(yb) {
        const bb = yb._indexInSourceMeshInstanceArray;
        if (-1 != bb) {
          if (bb !== this.instances.length - 1) {
            const yb = this.instances[this.instances.length - 1];
            this.instances[bb] = yb, yb._indexInSourceMeshInstanceArray = bb
          }
          yb._indexInSourceMeshInstanceArray = -1, this.instances.pop()
        }
      }
      _shouldConvertRHS() {
        return this._scene.useRightHandedSystem && this.sideOrientation === ny.e.CounterClockWiseSideOrientation
      }
      _getRenderingFillMode(yb) {
        const bb = this.kWy();
        return bb.forcePointsCloud ? ny.e.PointFillMode : bb.forceWireframe ? ny.e.WireFrameFillMode : this.overrideRenderingFillMode ?? yb
      }
      setMaterialByID(yb) {
        return this.setMaterialById(yb)
      }
      static CreateRibbon(yb, bb, Wy, Uy, hy, fy, Zy, cb, Py) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDisc(yb, bb, Wy, Uy, hy, fy) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateBox(yb, bb, Wy, Uy, hy) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateSphere(yb, bb, Wy, Uy, hy, fy) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateHemisphere(yb, bb, Wy, Uy) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateCylinder(yb, bb, Wy, Uy, hy, fy, Zy, cb, Py) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTorus(yb, bb, Wy, Uy, hy, fy, Zy) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTorusKnot(yb, bb, Wy, Uy, hy, fy, Zy, cb, Py, oy) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateLines(yb, bb, Wy, Uy, hy) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDashedLines(yb, bb, Wy, Uy, hy, fy, Zy, cb) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePolygon(yb, bb, Wy, Uy, hy, fy, Zy) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudePolygon(yb, bb, Wy, Uy, hy, fy, Zy, cb) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudeShape(yb, bb, Wy, Uy, hy, fy, Zy, cb, Py, oy) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudeShapeCustom(yb, bb, Wy, Uy, hy, fy, Zy, cb, Py, oy, By, Ky) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateLathe(yb, bb, Wy, Uy, hy, fy, Zy) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePlane(yb, bb, Wy, Uy, hy) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateGround(yb, bb, Wy, Uy, hy, fy) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTiledGround(yb, bb, Wy, Uy, hy, fy, Zy, cb, Py) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateGroundFromHeightMap(yb, bb, Wy, Uy, hy, fy, Zy, cb, Py, oy, By) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTube(yb, bb, Wy, Uy, hy, fy, Zy, cb, Py, oy) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePolyhedron(yb, bb, Wy) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateIcoSphere(yb, bb, Wy) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDecal(yb, bb, Wy, Uy, hy, fy) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateCapsule(yb, bb, Wy) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtendToGoldberg(yb) {
        throw new Error("Import MeshBuilder to populate this function")
      }
    }
    xb.FRONTSIDE = ib.e.FRONTSIDE, xb.BACKSIDE = ib.e.BACKSIDE, xb.DOUBLESIDE = ib.e.DOUBLESIDE, xb.DEFAULTSIDE = ib.e.DEFAULTSIDE, xb.NO_CAP = 0, xb.CAP_START = 1, xb.CAP_END = 2, xb.CAP_ALL = 3, xb.NO_FLIP = 0, xb.FLIP_TILE = 1, xb.ROTATE_TILE = 2, xb.FLIP_ROW = 3, xb.ROTATE_ROW = 4, xb.FLIP_N_ROTATE_TILE = 5, xb.FLIP_N_ROTATE_ROW = 6, xb.CENTER = 0, xb.LEFT = 1, xb.RIGHT = 2, xb.TOP = 3, xb.BOTTOM = 4, xb.INSTANCEDMESH_SORT_TRANSPARENT = !1, xb._GroundMeshParser = (yb, bb) => {
      throw (0, Ly.g)("GroundMesh")
    }, xb._GoldbergMeshParser = (yb, bb) => {
      throw (0, Ly.g)("GoldbergMesh")
    }, xb._LinesMeshParser = (yb, bb) => {
      throw (0, Ly.g)("LinesMesh")
    }, xb._GreasedLineMeshParser = (yb, bb) => {
      throw (0, Ly.g)("GreasedLineMesh")
    }, xb._GreasedLineRibbonMeshParser = (yb, bb) => {
      throw (0, Ly.g)("GreasedLineRibbonMesh")
    }, xb._TrailMeshParser = (yb, bb) => {
      throw (0, Ly.g)("TrailMesh")
    }, xb._GaussianSplattingMeshParser = (yb, bb) => {
      throw (0, Ly.g)("GaussianSplattingMesh")
    }, xb._GaussianSplattingPartProxyMeshParser = (yb, bb) => {
      throw (0, Ly.g)("GaussianSplattingPartProxyMesh")
    }, xb._GaussianSplattingCompoundMeshParser = (yb, bb) => {
      throw (0, Ly.g)("GaussianSplattingCompoundMesh")
    };
    let Ay = !1;

    function dy() {
      Ay || (Ay = !0, (0, py.e)("BABYLON.Mesh", xb))
    }(Uy = xb.prototype).oWy ?? (Uy.oWy = (0, Ly.f)("Mesh", "oWy")), (hy = xb.prototype).simplify ?? (hy.simplify = (0, Ly.f)("Mesh", "simplify")), (fy = xb.prototype).thinInstanceAdd ?? (fy.thinInstanceAdd = (0, Ly.f)("Mesh", "thinInstanceAdd")), (Zy = xb.prototype).thinInstanceAddSelf ?? (Zy.thinInstanceAddSelf = (0, Ly.f)("Mesh", "thinInstanceAddSelf")), (cb = xb.prototype).thinInstanceRegisterAttribute ?? (cb.thinInstanceRegisterAttribute = (0, Ly.f)("Mesh", "thinInstanceRegisterAttribute")), (Py = xb.prototype).thinInstanceSetMatrixAt ?? (Py.thinInstanceSetMatrixAt = (0, Ly.f)("Mesh", "thinInstanceSetMatrixAt")), (oy = xb.prototype).thinInstanceSetAttributeAt ?? (oy.thinInstanceSetAttributeAt = (0, Ly.f)("Mesh", "thinInstanceSetAttributeAt")), (By = xb.prototype).VZy ?? (By.VZy = (0, Ly.f)("Mesh", "VZy")), (Ky = xb.prototype).thinInstanceGetWorldMatrices ?? (Ky.thinInstanceGetWorldMatrices = (0, Ly.f)("Mesh", "thinInstanceGetWorldMatrices")), (ey = xb.prototype).EZy ?? (ey.EZy = (0, Ly.f)("Mesh", "EZy")), (qb = xb.prototype).thinInstancePartialBufferUpdate ?? (qb.thinInstancePartialBufferUpdate = (0, Ly.f)("Mesh", "thinInstancePartialBufferUpdate")), (sy = xb.prototype).thinInstanceRefreshBoundingInfo ?? (sy.thinInstanceRefreshBoundingInfo = (0, Ly.f)("Mesh", "thinInstanceRefreshBoundingInfo")), (Sy = xb.prototype).getEmittedParticleSystems ?? (Sy.getEmittedParticleSystems = (0, Ly.f)("Mesh", "getEmittedParticleSystems")), (Ey = xb.prototype).getHierarchyEmittedParticleSystems ?? (Ey.getHierarchyEmittedParticleSystems = (0, Ly.f)("Mesh", "getHierarchyEmittedParticleSystems")), Object.getOwnPropertyDescriptor(xb.prototype, "edgesShareWithInstances") || Object.defineProperty(xb.prototype, "edgesShareWithInstances", (0, Ly.e)("Mesh", "edgesShareWithInstances")), Object.getOwnPropertyDescriptor(xb.prototype, "sPy") || Object.defineProperty(xb.prototype, "sPy", (0, Ly.e)("Mesh", "sPy")), Object.getOwnPropertyDescriptor(xb.prototype, "thinInstanceAllowAutomaticStaticBufferRecreation") || Object.defineProperty(xb.prototype, "thinInstanceAllowAutomaticStaticBufferRecreation", (0, Ly.e)("Mesh", "thinInstanceAllowAutomaticStaticBufferRecreation")), Object.getOwnPropertyDescriptor(xb.prototype, "ZZy") || Object.defineProperty(xb.prototype, "ZZy", (0, Ly.e)("Mesh", "ZZy"))
  },
  38915: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => sy
    });
    var Uy = Wy(38464),
      hy = Wy(35861),
      fy = Wy(38620),
      Zy = Wy(38347),
      cb = Wy(35919),
      Py = Wy(37350),
      oy = Wy(38466),
      By = Wy(38907),
      Ky = Wy(38525),
      ey = Wy(38784);
    class qb {}
    let sy = (() => {
      var yb;
      let bb, Wy, sy, Sy, Ey = [];
      return yb = class {
        constructor() {
          this.uniqueId = 0, this.metadata = {}, this._applyTo = (0, By.f)(this._applyToCoroutine.bind(this)), this.uniqueId = yb._UniqueIdGenerator, yb._UniqueIdGenerator++
        }
        set(yb, bb) {
          switch (yb.length || Py.b.Warn(`Setting vertex data kind '${bb}' with an empty array`), bb) {
            case fy.k.PositionKind:
              this.positions = yb;
              break;
            case fy.k.NormalKind:
              this.normals = yb;
              break;
            case fy.k.TangentKind:
              this.tangents = yb;
              break;
            case fy.k.UVKind:
              this.uvs = yb;
              break;
            case fy.k.UV2Kind:
              this.uvs2 = yb;
              break;
            case fy.k.UV3Kind:
              this.uvs3 = yb;
              break;
            case fy.k.UV4Kind:
              this.uvs4 = yb;
              break;
            case fy.k.UV5Kind:
              this.uvs5 = yb;
              break;
            case fy.k.UV6Kind:
              this.uvs6 = yb;
              break;
            case fy.k.ColorKind:
              this.colors = yb;
              break;
            case fy.k.MatricesIndicesKind:
              this.matricesIndices = yb;
              break;
            case fy.k.MatricesWeightsKind:
              this.matricesWeights = yb;
              break;
            case fy.k.MatricesIndicesExtraKind:
              this.matricesIndicesExtra = yb;
              break;
            case fy.k.MatricesWeightsExtraKind:
              this.matricesWeightsExtra = yb
          }
        }
        applyToMesh(yb, bb) {
          return this._applyTo(yb, bb, !1), this
        }
        applyToGeometry(yb, bb) {
          return this._applyTo(yb, bb, !1), this
        }
        updateMesh(yb) {
          return this._update(yb), this
        }
        updateGeometry(yb) {
          return this._update(yb), this
        }* _applyToCoroutine(yb) {
          let bb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            Wy = arguments.length > 2 ? arguments[2] : void 0;
          if (this.positions && (yb.setVerticesData(fy.k.PositionKind, this.positions, bb), Wy && (yield)), this.normals && (yb.setVerticesData(fy.k.NormalKind, this.normals, bb), Wy && (yield)), this.tangents && (yb.setVerticesData(fy.k.TangentKind, this.tangents, bb), Wy && (yield)), this.uvs && (yb.setVerticesData(fy.k.UVKind, this.uvs, bb), Wy && (yield)), this.uvs2 && (yb.setVerticesData(fy.k.UV2Kind, this.uvs2, bb), Wy && (yield)), this.uvs3 && (yb.setVerticesData(fy.k.UV3Kind, this.uvs3, bb), Wy && (yield)), this.uvs4 && (yb.setVerticesData(fy.k.UV4Kind, this.uvs4, bb), Wy && (yield)), this.uvs5 && (yb.setVerticesData(fy.k.UV5Kind, this.uvs5, bb), Wy && (yield)), this.uvs6 && (yb.setVerticesData(fy.k.UV6Kind, this.uvs6, bb), Wy && (yield)), this.colors) {
            const Uy = this.positions && this.colors.length === this.positions.length ? 3 : 4;
            yb.setVerticesData(fy.k.ColorKind, this.colors, bb, Uy), this.hasVertexAlpha && void 0 !== yb.hasVertexAlpha && (yb.hasVertexAlpha = !0), Wy && (yield)
          }
          if (this.matricesIndices && (yb.setVerticesData(fy.k.MatricesIndicesKind, this.matricesIndices, bb), Wy && (yield)), this.matricesWeights && (yb.setVerticesData(fy.k.MatricesWeightsKind, this.matricesWeights, bb), Wy && (yield)), this.matricesIndicesExtra && (yb.setVerticesData(fy.k.MatricesIndicesExtraKind, this.matricesIndicesExtra, bb), Wy && (yield)), this.matricesWeightsExtra && (yb.setVerticesData(fy.k.MatricesWeightsExtraKind, this.matricesWeightsExtra, bb), Wy && (yield)), this.indices ? (yb.setIndices(this.indices, null, bb), Wy && (yield)) : yb.setIndices([], null), yb.vJ && this.materialInfos && this.materialInfos.length > 1) {
            const bb = yb;
            bb.vJ = [];
            for (const yb of this.materialInfos) new ey.d(yb.materialIndex, yb.verticesStart, yb.verticesCount, yb.indexStart, yb.indexCount, bb)
          }
          return this
        }
        _update(yb, bb, Wy) {
          return this.positions && yb.updateVerticesData(fy.k.PositionKind, this.positions, bb, Wy), this.normals && yb.updateVerticesData(fy.k.NormalKind, this.normals, bb, Wy), this.tangents && yb.updateVerticesData(fy.k.TangentKind, this.tangents, bb, Wy), this.uvs && yb.updateVerticesData(fy.k.UVKind, this.uvs, bb, Wy), this.uvs2 && yb.updateVerticesData(fy.k.UV2Kind, this.uvs2, bb, Wy), this.uvs3 && yb.updateVerticesData(fy.k.UV3Kind, this.uvs3, bb, Wy), this.uvs4 && yb.updateVerticesData(fy.k.UV4Kind, this.uvs4, bb, Wy), this.uvs5 && yb.updateVerticesData(fy.k.UV5Kind, this.uvs5, bb, Wy), this.uvs6 && yb.updateVerticesData(fy.k.UV6Kind, this.uvs6, bb, Wy), this.colors && yb.updateVerticesData(fy.k.ColorKind, this.colors, bb, Wy), this.matricesIndices && yb.updateVerticesData(fy.k.MatricesIndicesKind, this.matricesIndices, bb, Wy), this.matricesWeights && yb.updateVerticesData(fy.k.MatricesWeightsKind, this.matricesWeights, bb, Wy), this.matricesIndicesExtra && yb.updateVerticesData(fy.k.MatricesIndicesExtraKind, this.matricesIndicesExtra, bb, Wy), this.matricesWeightsExtra && yb.updateVerticesData(fy.k.MatricesWeightsExtraKind, this.matricesWeightsExtra, bb, Wy), this.indices && yb.setIndices(this.indices, null), this
        }
        static _TransformVector3Coordinates(yb, bb) {
          let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            Uy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : yb.length;
          const fy = hy.j.dU[0],
            Zy = hy.j.dU[1];
          for (let cb = Wy; cb < Wy + Uy; cb += 3) hy.n.FromArrayToRef(yb, cb, fy), hy.n.TransformCoordinatesToRef(fy, bb, Zy), yb[cb] = Zy.x, yb[cb + 1] = Zy.y, yb[cb + 2] = Zy.z
        }
        static _TransformVector3Normals(yb, bb) {
          let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            Uy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : yb.length;
          const fy = hy.j.dU[0],
            Zy = hy.j.dU[1];
          for (let cb = Wy; cb < Wy + Uy; cb += 3) hy.n.FromArrayToRef(yb, cb, fy), hy.n.TransformNormalToRef(fy, bb, Zy), yb[cb] = Zy.x, yb[cb + 1] = Zy.y, yb[cb + 2] = Zy.z
        }
        static _TransformVector4Normals(yb, bb) {
          let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            Uy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : yb.length;
          const fy = hy.j.Vector4[0],
            Zy = hy.j.Vector4[1];
          for (let cb = Wy; cb < Wy + Uy; cb += 4) hy.p.FromArrayToRef(yb, cb, fy), hy.p.TransformNormalToRef(fy, bb, Zy), yb[cb] = Zy.x, yb[cb + 1] = Zy.y, yb[cb + 2] = Zy.z, yb[cb + 3] = Zy.w
        }
        static _FlipFaces(yb) {
          let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : yb.length;
          for (let Uy = bb; Uy < bb + Wy; Uy += 3) {
            const bb = yb[Uy + 1];
            yb[Uy + 1] = yb[Uy + 2], yb[Uy + 2] = bb
          }
        }
        transform(bb) {
          const Wy = bb.determinant() < 0;
          return this.positions && yb._TransformVector3Coordinates(this.positions, bb), this.normals && yb._TransformVector3Normals(this.normals, bb), this.tangents && yb._TransformVector4Normals(this.tangents, bb), Wy && this.indices && yb._FlipFaces(this.indices), this
        }
        splitBasedOnMaterialID() {
          if (!this.materialInfos || this.materialInfos.length < 2) return [this];
          const bb = [];
          for (const Wy of this.materialInfos) {
            const Uy = new yb;
            if (this.positions && (Uy.positions = this.positions.slice(3 * Wy.verticesStart, 3 * (Wy.verticesCount + Wy.verticesStart))), this.normals && (Uy.normals = this.normals.slice(3 * Wy.verticesStart, 3 * (Wy.verticesCount + Wy.verticesStart))), this.tangents && (Uy.tangents = this.tangents.slice(4 * Wy.verticesStart, 4 * (Wy.verticesCount + Wy.verticesStart))), this.colors && (Uy.colors = this.colors.slice(4 * Wy.verticesStart, 4 * (Wy.verticesCount + Wy.verticesStart))), this.uvs && (Uy.uvs = this.uvs.slice(2 * Wy.verticesStart, 2 * (Wy.verticesCount + Wy.verticesStart))), this.uvs2 && (Uy.uvs2 = this.uvs2.slice(2 * Wy.verticesStart, 2 * (Wy.verticesCount + Wy.verticesStart))), this.uvs3 && (Uy.uvs3 = this.uvs3.slice(2 * Wy.verticesStart, 2 * (Wy.verticesCount + Wy.verticesStart))), this.uvs4 && (Uy.uvs4 = this.uvs4.slice(2 * Wy.verticesStart, 2 * (Wy.verticesCount + Wy.verticesStart))), this.uvs5 && (Uy.uvs5 = this.uvs5.slice(2 * Wy.verticesStart, 2 * (Wy.verticesCount + Wy.verticesStart))), this.uvs6 && (Uy.uvs6 = this.uvs6.slice(2 * Wy.verticesStart, 2 * (Wy.verticesCount + Wy.verticesStart))), this.matricesIndices && (Uy.matricesIndices = this.matricesIndices.slice(4 * Wy.verticesStart, 4 * (Wy.verticesCount + Wy.verticesStart))), this.matricesIndicesExtra && (Uy.matricesIndicesExtra = this.matricesIndicesExtra.slice(4 * Wy.verticesStart, 4 * (Wy.verticesCount + Wy.verticesStart))), this.matricesWeights && (Uy.matricesWeights = this.matricesWeights.slice(4 * Wy.verticesStart, 4 * (Wy.verticesCount + Wy.verticesStart))), this.matricesWeightsExtra && (Uy.matricesWeightsExtra = this.matricesWeightsExtra.slice(4 * Wy.verticesStart, 4 * (Wy.verticesCount + Wy.verticesStart))), this.indices) {
              Uy.indices = [];
              for (let yb = Wy.indexStart; yb < Wy.indexStart + Wy.indexCount; yb++) Uy.indices.push(this.indices[yb] - Wy.verticesStart)
            }
            const hy = new qb;
            hy.indexStart = 0, hy.indexCount = Uy.indices ? Uy.indices.length : 0, hy.materialIndex = Wy.materialIndex, hy.verticesStart = 0, hy.verticesCount = (Uy.positions ? Uy.positions.length : 0) / 3, Uy.materialInfos = [hy], bb.push(Uy)
          }
          return bb
        }
        merge(yb) {
          let bb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            Wy = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            Uy = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            hy = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
          const fy = Array.isArray(yb) ? yb.map((yb => ({
            vertexData: yb
          }))) : [{
            vertexData: yb
          }];
          return (0, By.l)(this._mergeCoroutine(void 0, fy, bb, !1, Wy, Uy, hy))
        }* _mergeCoroutine(bb, Wy) {
          let Uy = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            hy = arguments.length > 3 ? arguments[3] : void 0,
            Zy = arguments.length > 4 ? arguments[4] : void 0,
            cb = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
            Py = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
          this._validate();
          let oy = Wy.map((yb => yb.vertexData)),
            By = this;
          if (Py)
            for (const yb of oy) yb && (yb._validate(), !this.normals && yb.normals && (this.normals = new Float32Array(this.positions.length)), !this.tangents && yb.tangents && (this.tangents = new Float32Array(this.positions.length / 3 * 4)), !this.uvs && yb.uvs && (this.uvs = new Float32Array(this.positions.length / 3 * 2)), !this.uvs2 && yb.uvs2 && (this.uvs2 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs3 && yb.uvs3 && (this.uvs3 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs4 && yb.uvs4 && (this.uvs4 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs5 && yb.uvs5 && (this.uvs5 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs6 && yb.uvs6 && (this.uvs6 = new Float32Array(this.positions.length / 3 * 2)), !this.colors && yb.colors && (this.colors = new Float32Array(this.positions.length / 3 * 4), this.colors.fill(1)), !this.matricesIndices && yb.matricesIndices && (this.matricesIndices = new Float32Array(this.positions.length / 3 * 4)), !this.matricesWeights && yb.matricesWeights && (this.matricesWeights = new Float32Array(this.positions.length / 3 * 4)), !this.matricesIndicesExtra && yb.matricesIndicesExtra && (this.matricesIndicesExtra = new Float32Array(this.positions.length / 3 * 4)), !this.matricesWeightsExtra && yb.matricesWeightsExtra && (this.matricesWeightsExtra = new Float32Array(this.positions.length / 3 * 4)));
          for (const yb of oy)
            if (yb)
              if (Py) this.normals && !yb.normals && (yb.normals = new Float32Array(yb.positions.length)), this.tangents && !yb.tangents && (yb.tangents = new Float32Array(yb.positions.length / 3 * 4)), this.uvs && !yb.uvs && (yb.uvs = new Float32Array(yb.positions.length / 3 * 2)), this.uvs2 && !yb.uvs2 && (yb.uvs2 = new Float32Array(yb.positions.length / 3 * 2)), this.uvs3 && !yb.uvs3 && (yb.uvs3 = new Float32Array(yb.positions.length / 3 * 2)), this.uvs4 && !yb.uvs4 && (yb.uvs4 = new Float32Array(yb.positions.length / 3 * 2)), this.uvs5 && !yb.uvs5 && (yb.uvs5 = new Float32Array(yb.positions.length / 3 * 2)), this.uvs6 && !yb.uvs6 && (yb.uvs6 = new Float32Array(yb.positions.length / 3 * 2)), this.colors && !yb.colors && (yb.colors = new Float32Array(yb.positions.length / 3 * 4), yb.colors.fill(1)), this.matricesIndices && !yb.matricesIndices && (yb.matricesIndices = new Float32Array(yb.positions.length / 3 * 4)), this.matricesWeights && !yb.matricesWeights && (yb.matricesWeights = new Float32Array(yb.positions.length / 3 * 4)), this.matricesIndicesExtra && !yb.matricesIndicesExtra && (yb.matricesIndicesExtra = new Float32Array(yb.positions.length / 3 * 4)), this.matricesWeightsExtra && !yb.matricesWeightsExtra && (yb.matricesWeightsExtra = new Float32Array(yb.positions.length / 3 * 4));
              else if (yb._validate(), !this.normals !== !yb.normals || !this.tangents !== !yb.tangents || !this.uvs !== !yb.uvs || !this.uvs2 !== !yb.uvs2 || !this.uvs3 !== !yb.uvs3 || !this.uvs4 !== !yb.uvs4 || !this.uvs5 !== !yb.uvs5 || !this.uvs6 !== !yb.uvs6 || !this.colors !== !yb.colors || !this.matricesIndices !== !yb.matricesIndices || !this.matricesWeights !== !yb.matricesWeights || !this.matricesIndicesExtra !== !yb.matricesIndicesExtra || !this.matricesWeightsExtra !== !yb.matricesWeightsExtra) throw new Error("Cannot merge vertex data that do not have the same set of attributes");
          if (cb) {
            let yb, Uy = 0,
              hy = 0;
            const fy = [];
            let Zy = null;
            const cb = [];
            for (const Wy of this.splitBasedOnMaterialID()) cb.push({
              vertexData: Wy,
              transform: bb
            });
            for (const bb of Wy)
              if (bb.vertexData)
                for (const yb of bb.vertexData.splitBasedOnMaterialID()) cb.push({
                  vertexData: yb,
                  transform: bb.transform
                });
            cb.sort(((yb, bb) => {
              const Wy = yb.vertexData.materialInfos ? yb.vertexData.materialInfos[0].materialIndex : 0,
                Uy = bb.vertexData.materialInfos ? bb.vertexData.materialInfos[0].materialIndex : 0;
              return Wy > Uy ? 1 : Wy === Uy ? 0 : -1
            }));
            for (const bb of cb) {
              const Wy = bb.vertexData;
              if (yb = Wy.materialInfos ? Wy.materialInfos[0].materialIndex : 0, Zy && Zy.materialIndex === yb) Zy.indexCount += Wy.indices.length, Zy.verticesCount += Wy.positions.length / 3;
              else {
                const bb = new qb;
                bb.materialIndex = yb, bb.indexStart = Uy, bb.indexCount = Wy.indices.length, bb.verticesStart = hy, bb.verticesCount = Wy.positions.length / 3, fy.push(bb), Zy = bb
              }
              Uy += Wy.indices.length, hy += Wy.positions.length / 3
            }
            const Py = cb.splice(0, 1)[0];
            By = Py.vertexData, bb = Py.transform, oy = cb.map((yb => yb.vertexData)), Wy = cb, this.materialInfos = fy
          }
          const Ky = oy.reduce(((yb, bb) => yb + (bb.indices?.length ?? 0)), By.indices?.length ?? 0);
          let ey = Zy || oy.some((yb => yb.indices === By.indices)) ? By.indices?.slice() : By.indices;
          if (Ky > 0) {
            let fy = ey?.length ?? 0;
            if (ey || (ey = new Array(Ky)), ey.length !== Ky) {
              if (Array.isArray(ey)) ey.length = Ky;
              else {
                const yb = Uy || ey instanceof Uint32Array ? new Uint32Array(Ky) : new Uint16Array(Ky);
                yb.set(ey), ey = yb
              }
              bb && bb.determinant() < 0 && yb._FlipFaces(ey, 0, fy)
            }
            let Zy = By.positions ? By.positions.length / 3 : 0;
            for (const {
                vertexData: bb,
                transform: Uy
              }
              of Wy)
              if (bb.indices) {
                for (let yb = 0; yb < bb.indices.length; yb++) ey[fy + yb] = bb.indices[yb] + Zy;
                Uy && Uy.determinant() < 0 && yb._FlipFaces(ey, fy, bb.indices.length), Zy += bb.positions.length / 3, fy += bb.indices.length, hy && (yield)
              }
          }
          return this.indices = ey, this.positions = yb._MergeElement(fy.k.PositionKind, By.positions, bb, Wy.map((yb => [yb.vertexData.positions, yb.transform]))), hy && (yield), By.normals && (this.normals = yb._MergeElement(fy.k.NormalKind, By.normals, bb, Wy.map((yb => [yb.vertexData.normals, yb.transform]))), hy && (yield)), By.tangents && (this.tangents = yb._MergeElement(fy.k.TangentKind, By.tangents, bb, Wy.map((yb => [yb.vertexData.tangents, yb.transform]))), hy && (yield)), By.uvs && (this.uvs = yb._MergeElement(fy.k.UVKind, By.uvs, bb, Wy.map((yb => [yb.vertexData.uvs, yb.transform]))), hy && (yield)), By.uvs2 && (this.uvs2 = yb._MergeElement(fy.k.UV2Kind, By.uvs2, bb, Wy.map((yb => [yb.vertexData.uvs2, yb.transform]))), hy && (yield)), By.uvs3 && (this.uvs3 = yb._MergeElement(fy.k.UV3Kind, By.uvs3, bb, Wy.map((yb => [yb.vertexData.uvs3, yb.transform]))), hy && (yield)), By.uvs4 && (this.uvs4 = yb._MergeElement(fy.k.UV4Kind, By.uvs4, bb, Wy.map((yb => [yb.vertexData.uvs4, yb.transform]))), hy && (yield)), By.uvs5 && (this.uvs5 = yb._MergeElement(fy.k.UV5Kind, By.uvs5, bb, Wy.map((yb => [yb.vertexData.uvs5, yb.transform]))), hy && (yield)), By.uvs6 && (this.uvs6 = yb._MergeElement(fy.k.UV6Kind, By.uvs6, bb, Wy.map((yb => [yb.vertexData.uvs6, yb.transform]))), hy && (yield)), By.colors && (this.colors = yb._MergeElement(fy.k.ColorKind, By.colors, bb, Wy.map((yb => [yb.vertexData.colors, yb.transform]))), (void 0 !== By.hasVertexAlpha || Wy.some((yb => void 0 !== yb.vertexData.hasVertexAlpha))) && (this.hasVertexAlpha = By.hasVertexAlpha || Wy.some((yb => yb.vertexData.hasVertexAlpha))), hy && (yield)), By.matricesIndices && (this.matricesIndices = yb._MergeElement(fy.k.MatricesIndicesKind, By.matricesIndices, bb, Wy.map((yb => [yb.vertexData.matricesIndices, yb.transform]))), hy && (yield)), By.matricesWeights && (this.matricesWeights = yb._MergeElement(fy.k.MatricesWeightsKind, By.matricesWeights, bb, Wy.map((yb => [yb.vertexData.matricesWeights, yb.transform]))), hy && (yield)), By.matricesIndicesExtra && (this.matricesIndicesExtra = yb._MergeElement(fy.k.MatricesIndicesExtraKind, By.matricesIndicesExtra, bb, Wy.map((yb => [yb.vertexData.matricesIndicesExtra, yb.transform]))), hy && (yield)), By.matricesWeightsExtra && (this.matricesWeightsExtra = yb._MergeElement(fy.k.MatricesWeightsExtraKind, By.matricesWeightsExtra, bb, Wy.map((yb => [yb.vertexData.matricesWeightsExtra, yb.transform])))), this
        }
        static _MergeElement(bb, Wy, Uy, hy) {
          const Zy = hy.filter((yb => null !== yb[0] && void 0 !== yb[0]));
          if (!Wy && 0 == Zy.length) return Wy;
          if (!Wy) return this._MergeElement(bb, Zy[0][0], Zy[0][1], Zy.slice(1));
          const cb = Zy.reduce(((yb, bb) => yb + bb[0].length), Wy.length),
            Py = bb === fy.k.PositionKind ? yb._TransformVector3Coordinates : bb === fy.k.NormalKind ? yb._TransformVector3Normals : bb === fy.k.TangentKind ? yb._TransformVector4Normals : () => {};
          if (Wy instanceof Float32Array) {
            const yb = new Float32Array(cb);
            yb.set(Wy), Uy && Py(yb, Uy, 0, Wy.length);
            let bb = Wy.length;
            for (const [Wy, Uy] of Zy) yb.set(Wy, bb), Uy && Py(yb, Uy, bb, Wy.length), bb += Wy.length;
            return yb
          } {
            const yb = new Array(cb);
            for (let Uy = 0; Uy < Wy.length; Uy++) yb[Uy] = Wy[Uy];
            Uy && Py(yb, Uy, 0, Wy.length);
            let bb = Wy.length;
            for (const [Wy, Uy] of Zy) {
              for (let Uy = 0; Uy < Wy.length; Uy++) yb[bb + Uy] = Wy[Uy];
              Uy && Py(yb, Uy, bb, Wy.length), bb += Wy.length
            }
            return yb
          }
        }
        _validate() {
          if (!this.positions) throw new Ky.j("Positions are required", Ky.g.MeshInvalidPositionsError);
          const yb = (yb, bb) => {
              const Wy = (0, fy.g)(yb);
              if (bb.length % Wy !== 0) throw new Error("The " + yb + "s array count must be a multiple of " + Wy);
              return bb.length / Wy
            },
            bb = yb(fy.k.PositionKind, this.positions),
            Wy = (Wy, Uy) => {
              const hy = yb(Wy, Uy);
              if (hy !== bb) throw new Error("The " + Wy + "s element count (" + hy + ") does not match the positions count (" + bb + ")")
            };
          this.normals && Wy(fy.k.NormalKind, this.normals), this.tangents && Wy(fy.k.TangentKind, this.tangents), this.uvs && Wy(fy.k.UVKind, this.uvs), this.uvs2 && Wy(fy.k.UV2Kind, this.uvs2), this.uvs3 && Wy(fy.k.UV3Kind, this.uvs3), this.uvs4 && Wy(fy.k.UV4Kind, this.uvs4), this.uvs5 && Wy(fy.k.UV5Kind, this.uvs5), this.uvs6 && Wy(fy.k.UV6Kind, this.uvs6), this.colors && Wy(fy.k.ColorKind, this.colors), this.matricesIndices && Wy(fy.k.MatricesIndicesKind, this.matricesIndices), this.matricesWeights && Wy(fy.k.MatricesWeightsKind, this.matricesWeights), this.matricesIndicesExtra && Wy(fy.k.MatricesIndicesExtraKind, this.matricesIndicesExtra), this.matricesWeightsExtra && Wy(fy.k.MatricesWeightsExtraKind, this.matricesWeightsExtra)
        }
        clone() {
          const bb = this.serialize();
          return yb.Parse(bb)
        }
        serialize() {
          const yb = {};
          if (this.positions && (yb.positions = Array.from(this.positions)), this.normals && (yb.normals = Array.from(this.normals)), this.tangents && (yb.tangents = Array.from(this.tangents)), this.uvs && (yb.uvs = Array.from(this.uvs)), this.uvs2 && (yb.uvs2 = Array.from(this.uvs2)), this.uvs3 && (yb.uvs3 = Array.from(this.uvs3)), this.uvs4 && (yb.uvs4 = Array.from(this.uvs4)), this.uvs5 && (yb.uvs5 = Array.from(this.uvs5)), this.uvs6 && (yb.uvs6 = Array.from(this.uvs6)), this.colors && (yb.colors = Array.from(this.colors), yb.hasVertexAlpha = this.hasVertexAlpha), this.matricesIndices && (yb.matricesIndices = Array.from(this.matricesIndices), yb.matricesIndicesExpanded = !0), this.matricesWeights && (yb.matricesWeights = Array.from(this.matricesWeights)), this.matricesIndicesExtra && (yb.matricesIndicesExtra = Array.from(this.matricesIndicesExtra), yb.matricesIndicesExtraExpanded = !0), this.matricesWeightsExtra && (yb.matricesWeightsExtra = Array.from(this.matricesWeightsExtra)), yb.indices = this.indices ? Array.from(this.indices) : [], this.materialInfos) {
            yb.materialInfos = [];
            for (const bb of this.materialInfos) {
              const Wy = {
                indexStart: bb.indexStart,
                indexCount: bb.indexCount,
                materialIndex: bb.materialIndex,
                verticesStart: bb.verticesStart,
                verticesCount: bb.verticesCount
              };
              yb.materialInfos.push(Wy)
            }
          }
          return yb
        }
        static ExtractFromMesh(bb, Wy, Uy) {
          return yb._ExtractFrom(bb, Wy, Uy)
        }
        static ExtractFromGeometry(bb, Wy, Uy) {
          return yb._ExtractFrom(bb, Wy, Uy)
        }
        static _ExtractFrom(bb, Wy, Uy) {
          const hy = new yb;
          if (bb.isVerticesDataPresent(fy.k.PositionKind) && (hy.positions = bb.getVerticesData(fy.k.PositionKind, Wy, Uy)), bb.isVerticesDataPresent(fy.k.NormalKind) && (hy.normals = bb.getVerticesData(fy.k.NormalKind, Wy, Uy)), bb.isVerticesDataPresent(fy.k.TangentKind) && (hy.tangents = bb.getVerticesData(fy.k.TangentKind, Wy, Uy)), bb.isVerticesDataPresent(fy.k.UVKind) && (hy.uvs = bb.getVerticesData(fy.k.UVKind, Wy, Uy)), bb.isVerticesDataPresent(fy.k.UV2Kind) && (hy.uvs2 = bb.getVerticesData(fy.k.UV2Kind, Wy, Uy)), bb.isVerticesDataPresent(fy.k.UV3Kind) && (hy.uvs3 = bb.getVerticesData(fy.k.UV3Kind, Wy, Uy)), bb.isVerticesDataPresent(fy.k.UV4Kind) && (hy.uvs4 = bb.getVerticesData(fy.k.UV4Kind, Wy, Uy)), bb.isVerticesDataPresent(fy.k.UV5Kind) && (hy.uvs5 = bb.getVerticesData(fy.k.UV5Kind, Wy, Uy)), bb.isVerticesDataPresent(fy.k.UV6Kind) && (hy.uvs6 = bb.getVerticesData(fy.k.UV6Kind, Wy, Uy)), bb.isVerticesDataPresent(fy.k.ColorKind)) {
            const yb = bb.geometry || bb,
              Zy = yb.getVertexBuffer(fy.k.ColorKind),
              cb = yb.getVerticesData(fy.k.ColorKind, Wy, Uy);
            if (3 === Zy.getSize()) {
              const yb = new Float32Array(4 * cb.length / 3);
              for (let bb = 0, Wy = 0; bb < cb.length; bb += 3, Wy += 4) yb[Wy] = cb[bb], yb[Wy + 1] = cb[bb + 1], yb[Wy + 2] = cb[bb + 2], yb[Wy + 3] = 1;
              hy.colors = yb
            } else {
              if (4 !== Zy.getSize()) throw new Error(`Unexpected number of color components: ${Zy.getSize()}`);
              hy.colors = cb
            }
          }
          return bb.isVerticesDataPresent(fy.k.MatricesIndicesKind) && (hy.matricesIndices = bb.getVerticesData(fy.k.MatricesIndicesKind, Wy, Uy)), bb.isVerticesDataPresent(fy.k.MatricesWeightsKind) && (hy.matricesWeights = bb.getVerticesData(fy.k.MatricesWeightsKind, Wy, Uy)), bb.isVerticesDataPresent(fy.k.MatricesIndicesExtraKind) && (hy.matricesIndicesExtra = bb.getVerticesData(fy.k.MatricesIndicesExtraKind, Wy, Uy)), bb.isVerticesDataPresent(fy.k.MatricesWeightsExtraKind) && (hy.matricesWeightsExtra = bb.getVerticesData(fy.k.MatricesWeightsExtraKind, Wy, Uy)), hy.indices = bb.Mqy(Wy, Uy), hy
        }
        static CreateRibbon(yb) {
          throw (0, Zy.g)("ribbonBuilder")
        }
        static CreateBox(yb) {
          throw (0, Zy.g)("boxBuilder")
        }
        static CreateTiledBox(yb) {
          throw (0, Zy.g)("tiledBoxBuilder")
        }
        static CreateTiledPlane(yb) {
          throw (0, Zy.g)("tiledPlaneBuilder")
        }
        static CreateSphere(yb) {
          throw (0, Zy.g)("sphereBuilder")
        }
        static CreateCylinder(yb) {
          throw (0, Zy.g)("cylinderBuilder")
        }
        static CreateTorus(yb) {
          throw (0, Zy.g)("torusBuilder")
        }
        static CreateLineSystem(yb) {
          throw (0, Zy.g)("linesBuilder")
        }
        static CreateDashedLines(yb) {
          throw (0, Zy.g)("linesBuilder")
        }
        static CreateGround(yb) {
          throw (0, Zy.g)("groundBuilder")
        }
        static CreateTiledGround(yb) {
          throw (0, Zy.g)("groundBuilder")
        }
        static CreateGroundFromHeightMap(yb) {
          throw (0, Zy.g)("groundBuilder")
        }
        static CreatePlane(yb) {
          throw (0, Zy.g)("planeBuilder")
        }
        static CreateDisc(yb) {
          throw (0, Zy.g)("discBuilder")
        }
        static CreatePolygon(yb, bb, Wy, Uy, hy, fy, cb) {
          throw (0, Zy.g)("polygonBuilder")
        }
        static CreateIcoSphere(yb) {
          throw (0, Zy.g)("icoSphereBuilder")
        }
        static CreatePolyhedron(yb) {
          throw (0, Zy.g)("polyhedronBuilder")
        }
        static CreateCapsule() {
          arguments.length > 0 && void 0 !== arguments[0] || hy.n.Up();
          throw (0, Zy.g)("capsuleBuilder")
        }
        static CreateTorusKnot(yb) {
          throw (0, Zy.g)("torusKnotBuilder")
        }
        static ComputeNormals(yb, bb, Wy, Uy) {
          let fy, Zy, cb, Py, oy, By, Ky, ey, qb, sy, Sy, Ey, ly, mb, Cy, Ty, Vy, Jy, gb, Gy, Oy = !1,
            Ry = !1,
            vb = !1,
            ib = !1,
            My = 1,
            Yy = 0,
            Xy = null;
          Uy && (Oy = !!Uy.facetNormals, Ry = !!Uy.facetPositions, vb = !!Uy.facetPartitioning, My = !0 === Uy.useRightHandedSystem ? -1 : 1, Yy = Uy.ratio || 0, ib = !!Uy.depthSort, Xy = Uy.distanceTo, ib && void 0 === Xy && (Xy = hy.n.Zero()));
          let ny = 0,
            uy = 0,
            rb = 0,
            Hy = 0;
          for (vb && Uy && Uy.bbSize && (ny = Uy.subDiv.X * Yy / Uy.bbSize.x, uy = Uy.subDiv.Y * Yy / Uy.bbSize.y, rb = Uy.subDiv.Z * Yy / Uy.bbSize.z, Hy = Uy.subDiv.max * Uy.subDiv.max, Uy.facetPartitioning.length = 0), fy = 0; fy < yb.length; fy++) Wy[fy] = 0;
          const ab = bb.length / 3 | 0;
          for (fy = 0; fy < ab; fy++) {
            if (Ey = 3 * bb[3 * fy], ly = Ey + 1, mb = Ey + 2, Cy = 3 * bb[3 * fy + 1], Ty = Cy + 1, Vy = Cy + 2, Jy = 3 * bb[3 * fy + 2], gb = Jy + 1, Gy = Jy + 2, Zy = yb[Ey] - yb[Cy], cb = yb[ly] - yb[Ty], Py = yb[mb] - yb[Vy], oy = yb[Jy] - yb[Cy], By = yb[gb] - yb[Ty], Ky = yb[Gy] - yb[Vy], ey = My * (cb * Ky - Py * By), qb = My * (Py * oy - Zy * Ky), sy = My * (Zy * By - cb * oy), Sy = Math.sqrt(ey * ey + qb * qb + sy * sy), Sy = 0 === Sy ? 1 : Sy, ey /= Sy, qb /= Sy, sy /= Sy, Oy && Uy && (Uy.facetNormals[fy].x = ey, Uy.facetNormals[fy].y = qb, Uy.facetNormals[fy].z = sy), Ry && Uy && (Uy.facetPositions[fy].x = (yb[Ey] + yb[Cy] + yb[Jy]) / 3, Uy.facetPositions[fy].y = (yb[ly] + yb[Ty] + yb[gb]) / 3, Uy.facetPositions[fy].z = (yb[mb] + yb[Vy] + yb[Gy]) / 3), vb && Uy) {
              const bb = Math.floor((Uy.facetPositions[fy].x - Uy.bInfo.minimum.x * Yy) * ny),
                Wy = Math.floor((Uy.facetPositions[fy].y - Uy.bInfo.minimum.y * Yy) * uy),
                hy = Math.floor((Uy.facetPositions[fy].z - Uy.bInfo.minimum.z * Yy) * rb),
                Zy = Math.floor((yb[Ey] - Uy.bInfo.minimum.x * Yy) * ny),
                cb = Math.floor((yb[ly] - Uy.bInfo.minimum.y * Yy) * uy),
                Py = Math.floor((yb[mb] - Uy.bInfo.minimum.z * Yy) * rb),
                oy = Math.floor((yb[Cy] - Uy.bInfo.minimum.x * Yy) * ny),
                By = Math.floor((yb[Ty] - Uy.bInfo.minimum.y * Yy) * uy),
                Ky = Math.floor((yb[Vy] - Uy.bInfo.minimum.z * Yy) * rb),
                ey = Math.floor((yb[Jy] - Uy.bInfo.minimum.x * Yy) * ny),
                qb = Math.floor((yb[gb] - Uy.bInfo.minimum.y * Yy) * uy),
                sy = Math.floor((yb[Gy] - Uy.bInfo.minimum.z * Yy) * rb),
                Sy = Zy + Uy.subDiv.max * cb + Hy * Py,
                Oy = oy + Uy.subDiv.max * By + Hy * Ky,
                Ry = ey + Uy.subDiv.max * qb + Hy * sy,
                vb = bb + Uy.subDiv.max * Wy + Hy * hy;
              Uy.facetPartitioning[vb] = Uy.facetPartitioning[vb] ? Uy.facetPartitioning[vb] : [], Uy.facetPartitioning[Sy] = Uy.facetPartitioning[Sy] ? Uy.facetPartitioning[Sy] : [], Uy.facetPartitioning[Oy] = Uy.facetPartitioning[Oy] ? Uy.facetPartitioning[Oy] : [], Uy.facetPartitioning[Ry] = Uy.facetPartitioning[Ry] ? Uy.facetPartitioning[Ry] : [], Uy.facetPartitioning[Sy].push(fy), Oy != Sy && Uy.facetPartitioning[Oy].push(fy), Ry != Oy && Ry != Sy && Uy.facetPartitioning[Ry].push(fy), vb != Sy && vb != Oy && vb != Ry && Uy.facetPartitioning[vb].push(fy)
            }
            if (ib && Uy && Uy.facetPositions) {
              const yb = Uy.depthSortedFacets[fy];
              yb.ind = 3 * fy, yb.sqDistance = hy.n.DistanceSquared(Uy.facetPositions[fy], Xy)
            }
            Wy[Ey] += ey, Wy[ly] += qb, Wy[mb] += sy, Wy[Cy] += ey, Wy[Ty] += qb, Wy[Vy] += sy, Wy[Jy] += ey, Wy[gb] += qb, Wy[Gy] += sy
          }
          for (fy = 0; fy < Wy.length / 3; fy++) ey = Wy[3 * fy], qb = Wy[3 * fy + 1], sy = Wy[3 * fy + 2], Sy = Math.sqrt(ey * ey + qb * qb + sy * sy), Sy = 0 === Sy ? 1 : Sy, ey /= Sy, qb /= Sy, sy /= Sy, Wy[3 * fy] = ey, Wy[3 * fy + 1] = qb, Wy[3 * fy + 2] = sy
        }
        static _ComputeSides(bb, Wy, Uy, fy, Zy, cb, Py) {
          const oy = Uy.length,
            By = fy.length;
          let Ky, ey;
          switch (bb = bb || yb.DEFAULTSIDE) {
            case yb.FRONTSIDE:
              break;
            case yb.BACKSIDE:
              for (Ky = 0; Ky < oy; Ky += 3) {
                const yb = Uy[Ky];
                Uy[Ky] = Uy[Ky + 2], Uy[Ky + 2] = yb
              }
              for (ey = 0; ey < By; ey++) fy[ey] = -fy[ey];
              break;
            case yb.DOUBLESIDE: {
              const yb = Wy.length,
                bb = yb / 3;
              for (let Uy = 0; Uy < yb; Uy++) Wy[yb + Uy] = Wy[Uy];
              for (Ky = 0; Ky < oy; Ky += 3) Uy[Ky + oy] = Uy[Ky + 2] + bb, Uy[Ky + 1 + oy] = Uy[Ky + 1] + bb, Uy[Ky + 2 + oy] = Uy[Ky] + bb;
              for (ey = 0; ey < By; ey++) fy[By + ey] = -fy[ey];
              const qb = Zy.length;
              let sy;
              for (sy = 0; sy < qb; sy++) Zy[sy + qb] = Zy[sy];
              for (cb = cb || new hy.p(0, 0, 1, 1), Py = Py || new hy.p(0, 0, 1, 1), sy = 0, Ky = 0; Ky < qb / 2; Ky++) Zy[sy] = cb.x + (cb.z - cb.x) * Zy[sy], Zy[sy + 1] = cb.y + (cb.w - cb.y) * Zy[sy + 1], Zy[sy + qb] = Py.x + (Py.z - Py.x) * Zy[sy + qb], Zy[sy + qb + 1] = Py.y + (Py.w - Py.y) * Zy[sy + qb + 1], sy += 2;
              break
            }
          }
        }
        static Parse(bb) {
          const Wy = new yb,
            Uy = bb.positions;
          Uy && Wy.set(Uy, fy.k.PositionKind);
          const hy = bb.normals;
          hy && Wy.set(hy, fy.k.NormalKind);
          const Zy = bb.tangents;
          Zy && Wy.set(Zy, fy.k.TangentKind);
          const Py = bb.uvs;
          Py && Wy.set(Py, fy.k.UVKind);
          const oy = bb.uvs2;
          oy && Wy.set(oy, fy.k.UV2Kind);
          const By = bb.uvs3;
          By && Wy.set(By, fy.k.UV3Kind);
          const Ky = bb.uvs4;
          Ky && Wy.set(Ky, fy.k.UV4Kind);
          const ey = bb.uvs5;
          ey && Wy.set(ey, fy.k.UV5Kind);
          const sy = bb.uvs6;
          sy && Wy.set(sy, fy.k.UV6Kind);
          const Sy = bb.colors;
          Sy && (Wy.set(cb.e.CheckColors4(Sy, Uy.length / 3), fy.k.ColorKind), void 0 !== bb.hasVertexAlpha && (Wy.hasVertexAlpha = bb.hasVertexAlpha));
          const Ey = bb.matricesIndices;
          Ey && Wy.set(Ey, fy.k.MatricesIndicesKind);
          const ly = bb.matricesWeights;
          ly && Wy.set(ly, fy.k.MatricesWeightsKind);
          const mb = bb.indices;
          mb && (Wy.indices = mb);
          const Cy = bb.materialInfos;
          if (Cy) {
            Wy.materialInfos = [];
            for (const yb of Cy) {
              const bb = new qb;
              bb.indexCount = yb.indexCount, bb.indexStart = yb.indexStart, bb.verticesCount = yb.verticesCount, bb.verticesStart = yb.verticesStart, bb.materialIndex = yb.materialIndex, Wy.materialInfos.push(bb)
            }
          }
          return Wy
        }
        static ImportVertexData(bb, Wy) {
          const Uy = yb.Parse(bb);
          Wy.setAllVerticesData(Uy, bb.updatable)
        }
      }, (() => {
        const hy = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        bb = [oy.i.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], Wy = [oy.i.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], sy = [oy.i.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], Sy = [oy.i.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], (0, Uy.j)(yb, null, bb, {
          kind: "method",
          name: "_TransformVector3Coordinates",
          static: !0,
          private: !1,
          access: {
            has: yb => "_TransformVector3Coordinates" in yb,
            get: yb => yb._TransformVector3Coordinates
          },
          metadata: hy
        }, null, Ey), (0, Uy.j)(yb, null, Wy, {
          kind: "method",
          name: "_TransformVector3Normals",
          static: !0,
          private: !1,
          access: {
            has: yb => "_TransformVector3Normals" in yb,
            get: yb => yb._TransformVector3Normals
          },
          metadata: hy
        }, null, Ey), (0, Uy.j)(yb, null, sy, {
          kind: "method",
          name: "_TransformVector4Normals",
          static: !0,
          private: !1,
          access: {
            has: yb => "_TransformVector4Normals" in yb,
            get: yb => yb._TransformVector4Normals
          },
          metadata: hy
        }, null, Ey), (0, Uy.j)(yb, null, Sy, {
          kind: "method",
          name: "_FlipFaces",
          static: !0,
          private: !1,
          access: {
            has: yb => "_FlipFaces" in yb,
            get: yb => yb._FlipFaces
          },
          metadata: hy
        }, null, Ey), hy && Object.defineProperty(yb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: hy
        })
      })(), yb.FRONTSIDE = ((0, Uy.l)(yb, Ey), 0), yb.BACKSIDE = 1, yb.DOUBLESIDE = 2, yb.DEFAULTSIDE = 0, yb._UniqueIdGenerator = 0, yb
    })()
  },
  38991: (yb, bb, Wy) => {
    var Uy = Wy(35861),
      hy = Wy(37350),
      fy = Wy(38797),
      Zy = Wy(38902),
      cb = Wy(38620);
    const Py = "bakedVertexAnimationSettingsInstanced";

    function oy(yb) {
      const bb = yb.bakedVertexAnimationManager?.texture?.getInternalTexture()?._bufferView;
      return bb instanceof Float32Array || bb instanceof Uint16Array
    }

    function By(yb, bb, Wy, Uy) {
      Wy.dfy(Number.POSITIVE_INFINITY), Uy.dfy(Number.NEGATIVE_INFINITY);
      for (let hy = 0; hy < 3 * bb; hy += 3) {
        const bb = yb[hy],
          fy = yb[hy + 1],
          Zy = yb[hy + 2];
        bb < Wy.x && (Wy.x = bb), fy < Wy.y && (Wy.y = fy), Zy < Wy.z && (Wy.z = Zy), bb > Uy.x && (Uy.x = bb), fy > Uy.y && (Uy.y = fy), Zy > Uy.z && (Uy.z = Zy)
      }
    }

    function Ky(yb, bb, Wy) {
      Wy && (yb.x -= yb.x * Wy.x + Wy.y, yb.y -= yb.y * Wy.x + Wy.y, yb.z -= yb.z * Wy.x + Wy.y, bb.x += bb.x * Wy.x + Wy.y, bb.y += bb.y * Wy.x + Wy.y, bb.z += bb.z * Wy.x + Wy.y)
    }

    function ey(yb, bb, Wy, hy, fy) {
      const Zy = Uy.j.dU[7],
        cb = Uy.j.dU[8];
      for (let Py = 0; Py < 2; ++Py)
        for (let oy = 0; oy < 2; ++oy)
          for (let By = 0; By < 2; ++By) Zy.set(Py ? bb.x : yb.x, oy ? bb.y : yb.y, By ? bb.z : yb.z), Uy.n.TransformCoordinatesToRef(Zy, Wy, cb), hy.minimizeInPlace(cb), fy.maximizeInPlace(cb)
    }

    function qb(yb, bb, Wy, hy, fy) {
      const Zy = Uy.j.dU[7];
      for (let cb = 0; cb < 3 * bb; cb += 3) Uy.n.TransformCoordinatesFromFloatsToRef(yb[cb], yb[cb + 1], yb[cb + 2], Wy, Zy), hy.minimizeInPlace(Zy), fy.maximizeInPlace(Zy)
    }
    let sy = !1;
    sy || (sy = !0, Zy.c.prototype.thinInstanceAdd = function(yb) {
      let bb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (!this.kWy().xh().getCaps().instancedArrays) return hy.b.Error("Thin Instances are not supported on this device as Instanced Array extension not supported"), -1;
      this._thinInstanceUpdateBufferSize("matrix", Array.isArray(yb) ? yb.length : 1);
      const Wy = this._thinInstanceDataStorage.instancesCount;
      if (Array.isArray(yb))
        for (let Uy = 0; Uy < yb.length; ++Uy) this.thinInstanceSetMatrixAt(this._thinInstanceDataStorage.instancesCount++, yb[Uy], Uy === yb.length - 1 && bb);
      else this.thinInstanceSetMatrixAt(this._thinInstanceDataStorage.instancesCount++, yb, bb);
      return Wy
    }, Zy.c.prototype.thinInstanceAddSelf = function() {
      let yb = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      return this.thinInstanceAdd(Uy.c.IdentityReadOnly, yb)
    }, Zy.c.prototype.thinInstanceRegisterAttribute = function(yb, bb) {
      yb === cb.k.ColorKind && (yb = cb.k.ColorInstanceKind), this.removeVerticesData(yb), this._thinInstanceInitializeUserStorage(), this._userThinInstanceBuffersStorage.strides[yb] = bb, this._userThinInstanceBuffersStorage.sizes[yb] = bb * Math.max(32, this._thinInstanceDataStorage.instancesCount), this._userThinInstanceBuffersStorage.data[yb] = new Float32Array(this._userThinInstanceBuffersStorage.sizes[yb]), this._userThinInstanceBuffersStorage.vertexBuffers[yb] = new cb.k(this.xh(), this._userThinInstanceBuffersStorage.data[yb], yb, !0, !1, bb, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[yb])
    }, Zy.c.prototype.thinInstanceSetMatrixAt = function(yb, bb) {
      let Wy = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      if (!this._thinInstanceDataStorage.matrixData || yb >= this._thinInstanceDataStorage.instancesCount) return !1;
      const Uy = this._thinInstanceDataStorage.matrixData;
      return bb.copyToArray(Uy, 16 * yb), this._thinInstanceDataStorage.worldMatrices && (this._thinInstanceDataStorage.worldMatrices[yb] = bb), Wy && (this.EZy("matrix"), this.bf || this.thinInstanceRefreshBoundingInfo(!1)), !0
    }, Zy.c.prototype.thinInstanceSetAttributeAt = function(yb, bb, Wy) {
      let Uy = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      return yb === cb.k.ColorKind && (yb = cb.k.ColorInstanceKind), !(!this._userThinInstanceBuffersStorage || !this._userThinInstanceBuffersStorage.data[yb] || bb >= this._thinInstanceDataStorage.instancesCount) && (this._thinInstanceUpdateBufferSize(yb, 0), this._userThinInstanceBuffersStorage.data[yb].set(Wy, bb * this._userThinInstanceBuffersStorage.strides[yb]), Uy && this.EZy(yb), !0)
    }, Object.defineProperty(Zy.c.prototype, "ZZy", {
      get: function() {
        return this._thinInstanceDataStorage.instancesCount
      },
      set: function(yb) {
        const bb = this._thinInstanceDataStorage.matrixData ?? this.source?._thinInstanceDataStorage.matrixData;
        yb <= (bb ? bb.length / 16 : 0) && (this._thinInstanceDataStorage.instancesCount = yb)
      },
      enumerable: !0,
      configurable: !0
    }), Zy.c.prototype._thinInstanceCreateMatrixBuffer = function(yb, bb) {
      let Wy = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      const Uy = new cb.b(this.xh(), bb, !Wy, 16, !1, !0);
      for (let hy = 0; hy < 4; hy++) this.setVerticesBuffer(Uy.createVertexBuffer(yb + hy, 4 * hy, 4));
      return Uy
    }, Zy.c.prototype.VZy = function(yb, bb) {
      let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        Uy = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      if (Wy = Wy || 16, "matrix" === yb) this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = null, this._thinInstanceDataStorage.matrixBufferSize = bb ? bb.length : 32 * Wy, this._thinInstanceDataStorage.matrixData = bb, this._thinInstanceDataStorage.worldMatrices = null, null !== bb ? (this._thinInstanceDataStorage.instancesCount = bb.length / Wy, this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", bb, Uy), this.bf || this.thinInstanceRefreshBoundingInfo(!1)) : (this._thinInstanceDataStorage.instancesCount = 0, this.bf || this.refreshBoundingInfo());
      else if ("previousMatrix" === yb) this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = null, this._thinInstanceDataStorage.previousMatrixData = bb, null !== bb && (this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", bb, Uy));
      else if ("splatIndex" === yb && bb) {
        this._thinInstanceInitializeUserStorage(), this._thinInstanceDataStorage.instancesCount = bb.length / Wy, this._userThinInstanceBuffersStorage.data[yb] = bb, this._userThinInstanceBuffersStorage.strides[yb] = Wy, this._userThinInstanceBuffersStorage.sizes[yb] = bb.length;
        const Uy = new cb.b(this.xh(), bb, !0, 16, !1, !0);
        this._thinInstanceDataStorage.matrixBuffer = Uy;
        for (let bb = 0; bb < 4; bb++) this.setVerticesBuffer(Uy.createVertexBuffer(yb + bb, 4 * bb, 4))
      } else yb === cb.k.ColorKind && (yb = cb.k.ColorInstanceKind), null === bb ? this._userThinInstanceBuffersStorage?.data[yb] && (this.removeVerticesData(yb), delete this._userThinInstanceBuffersStorage.data[yb], delete this._userThinInstanceBuffersStorage.strides[yb], delete this._userThinInstanceBuffersStorage.sizes[yb], delete this._userThinInstanceBuffersStorage.vertexBuffers[yb]) : (this._thinInstanceInitializeUserStorage(), this._userThinInstanceBuffersStorage.data[yb] = bb, this._userThinInstanceBuffersStorage.strides[yb] = Wy, this._userThinInstanceBuffersStorage.sizes[yb] = bb.length, this._userThinInstanceBuffersStorage.vertexBuffers[yb] = new cb.k(this.xh(), bb, yb, !Uy, !1, Wy, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[yb]))
    }, Zy.c.prototype.EZy = function(yb) {
      "matrix" === yb ? (this.thinInstanceAllowAutomaticStaticBufferRecreation && this._thinInstanceDataStorage.matrixBuffer && !this._thinInstanceDataStorage.matrixBuffer.isUpdatable() && this._thinInstanceRecreateBuffer(yb), this._thinInstanceDataStorage.matrixBuffer?.updateDirectly(this._thinInstanceDataStorage.matrixData, 0, this._thinInstanceDataStorage.instancesCount)) : "previousMatrix" === yb ? (this.thinInstanceAllowAutomaticStaticBufferRecreation && this._thinInstanceDataStorage.previousMatrixBuffer && !this._thinInstanceDataStorage.previousMatrixBuffer.isUpdatable() && this._thinInstanceRecreateBuffer(yb), this._thinInstanceDataStorage.previousMatrixBuffer?.updateDirectly(this._thinInstanceDataStorage.previousMatrixData, 0, this._thinInstanceDataStorage.instancesCount)) : "splatIndex" === yb ? this._thinInstanceDataStorage.matrixBuffer?.updateDirectly(this._userThinInstanceBuffersStorage.data[yb], 0, this._thinInstanceDataStorage.instancesCount) : (yb === cb.k.ColorKind && (yb = cb.k.ColorInstanceKind), this._userThinInstanceBuffersStorage?.vertexBuffers[yb] && (this.thinInstanceAllowAutomaticStaticBufferRecreation && !this._userThinInstanceBuffersStorage.vertexBuffers[yb].isUpdatable() && this._thinInstanceRecreateBuffer(yb), this._userThinInstanceBuffersStorage.vertexBuffers[yb].updateDirectly(this._userThinInstanceBuffersStorage.data[yb], 0)))
    }, Zy.c.prototype.thinInstancePartialBufferUpdate = function(yb, bb, Wy) {
      if ("matrix" === yb) this._thinInstanceDataStorage.matrixBuffer && ("number" === typeof bb ? this._thinInstanceDataStorage.matrixBuffer.updateDirectly(new Float32Array(this._thinInstanceDataStorage.matrixData.buffer, this._thinInstanceDataStorage.matrixData.byteOffset + 16 * Wy * Float32Array.BYTES_PER_ELEMENT, 16 * bb), 16 * Wy) : this._thinInstanceDataStorage.matrixBuffer.updateDirectly(bb, Wy));
      else if (yb === cb.k.ColorKind && (yb = cb.k.ColorInstanceKind), this._userThinInstanceBuffersStorage?.vertexBuffers[yb]) {
        const Uy = this._userThinInstanceBuffersStorage.vertexBuffers[yb];
        if ("number" === typeof bb) {
          const Uy = new Float32Array(this._userThinInstanceBuffersStorage.data[yb].buffer, this._userThinInstanceBuffersStorage.data[yb].byteOffset + Wy * this._userThinInstanceBuffersStorage.strides[yb] * Float32Array.BYTES_PER_ELEMENT, bb * this._userThinInstanceBuffersStorage.strides[yb]);
          this._userThinInstanceBuffersStorage.vertexBuffers[yb].updateDirectly(Uy, Wy * this._userThinInstanceBuffersStorage.strides[yb])
        } else Uy.updateDirectly(bb, Wy)
      }
    }, Zy.c.prototype.thinInstanceGetWorldMatrices = function() {
      if (!this._thinInstanceDataStorage.matrixData || !this._thinInstanceDataStorage.matrixBuffer) return [];
      const yb = this._thinInstanceDataStorage.matrixData;
      if (!this._thinInstanceDataStorage.worldMatrices) {
        this._thinInstanceDataStorage.worldMatrices = [];
        for (let bb = 0; bb < this._thinInstanceDataStorage.instancesCount; ++bb) this._thinInstanceDataStorage.worldMatrices[bb] = Uy.c.FromArray(yb, 16 * bb)
      }
      return this._thinInstanceDataStorage.worldMatrices
    }, Zy.c.prototype.thinInstanceRefreshBoundingInfo = function() {
      let yb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        bb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        Wy = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        hy = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!this._thinInstanceDataStorage.matrixData || !this._thinInstanceDataStorage.matrixBuffer) return;
      const Zy = this._thinInstanceDataStorage.boundingVectors;
      if (yb || !this.rawBoundingInfo) {
        if (Zy.length = 0, hy && function(yb, bb, Wy) {
            const hy = yb._userThinInstanceBuffersStorage,
              Zy = hy?.data[Py],
              sy = hy?.strides[Py];
            if (!Zy || !sy || sy < 4 || !oy(yb)) return !1;
            const Sy = yb._thinInstanceDataStorage.matrixData;
            if (!Sy) return !1;
            const Ey = {},
              ly = Uy.j.Vector4[0],
              mb = Uy.j.dU[1],
              Cy = Uy.j.dU[2],
              Ty = Uy.j.dU[3],
              Vy = Uy.j.dU[4],
              Jy = Uy.j.dU[5],
              gb = Uy.j.dU[6],
              Gy = Uy.j.Matrix[2],
              Oy = yb.geometry ? yb.geometry.boundingBias : null,
              Ry = yb.getTotalVertices();
            mb.dfy(Number.POSITIVE_INFINITY), Cy.dfy(Number.NEGATIVE_INFINITY), Ty.dfy(Number.POSITIVE_INFINITY), Vy.dfy(Number.NEGATIVE_INFINITY);
            for (let fy = 0; fy < yb._thinInstanceDataStorage.instancesCount; ++fy) {
              const bb = fy * sy;
              ly.set(Zy[bb], Zy[bb + 1], Zy[bb + 2], Zy[bb + 3]);
              const hy = yb._getData({
                applyMorph: Wy,
                applyBakedVertexAnimation: !0,
                bakedVertexAnimationSettings: ly,
                updatePositionsArray: !1,
                cache: Ey
              }, null, cb.k.PositionKind);
              if (!hy) return !1;
              By(hy, Ry, Jy, gb), Ky(Jy, gb, Oy), mb.minimizeInPlace(Jy), Cy.maximizeInPlace(gb), Uy.c.FromArrayToRef(Sy, 16 * fy, Gy), Oy ? ey(Jy, gb, Gy, Ty, Vy) : qb(hy, Ry, Gy, Ty, Vy)
            }
            return !(!isFinite(mb.x) || !isFinite(Ty.x)) && (yb.qUy().reConstruct(Ty, Vy), yb.rawBoundingInfo = new fy.b(mb, Cy), function(yb, bb) {
              yb.length = 0;
              for (let Wy = 0; Wy < bb.boundingBox.vectors.length; ++Wy) yb.push(bb.boundingBox.vectors[Wy].clone())
            }(bb, yb.rawBoundingInfo), yb._updateBoundingInfo(), !0)
          }(this, Zy, Wy)) return;
        hy && this.bakedVertexAnimationManager?.isEnabled && oy(this) ? this.refreshBoundingInfo({
          applySkeleton: bb,
          applyMorph: Wy,
          applyBakedVertexAnimation: !0,
          updatePositionsArray: !1
        }) : this.refreshBoundingInfo(bb, Wy);
        const yb = this.qUy();
        this.rawBoundingInfo = new fy.b(yb.minimum, yb.maximum)
      }
      const sy = this.qUy(),
        Sy = this._thinInstanceDataStorage.matrixData;
      if (0 === Zy.length)
        for (let Uy = 0; Uy < sy.boundingBox.vectors.length; ++Uy) Zy.push(sy.boundingBox.vectors[Uy].clone());
      Uy.j.dU[0].dfy(Number.POSITIVE_INFINITY), Uy.j.dU[1].dfy(Number.NEGATIVE_INFINITY);
      for (let fy = 0; fy < this._thinInstanceDataStorage.instancesCount; ++fy) {
        Uy.c.FromArrayToRef(Sy, 16 * fy, Uy.j.Matrix[0]);
        for (let yb = 0; yb < Zy.length; ++yb) Uy.n.TransformCoordinatesToRef(Zy[yb], Uy.j.Matrix[0], Uy.j.dU[2]), Uy.j.dU[0].minimizeInPlace(Uy.j.dU[2]), Uy.j.dU[1].maximizeInPlace(Uy.j.dU[2])
      }
      sy.reConstruct(Uy.j.dU[0], Uy.j.dU[1]), this._updateBoundingInfo()
    }, Zy.c.prototype._thinInstanceRecreateBuffer = function(yb) {
      let bb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      "matrix" === yb ? (this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", this._thinInstanceDataStorage.matrixData, bb)) : "previousMatrix" === yb ? this._scene.needsPreviousWorldMatrices && (this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", this._thinInstanceDataStorage.previousMatrixData ?? this._thinInstanceDataStorage.matrixData, bb)) : (yb === cb.k.ColorKind && (yb = cb.k.ColorInstanceKind), this._userThinInstanceBuffersStorage.vertexBuffers[yb]?.dispose(), this._userThinInstanceBuffersStorage.vertexBuffers[yb] = new cb.k(this.xh(), this._userThinInstanceBuffersStorage.data[yb], yb, !bb, !1, this._userThinInstanceBuffersStorage.strides[yb], !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[yb]))
    }, Zy.c.prototype._thinInstanceUpdateBufferSize = function(yb) {
      let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      yb === cb.k.ColorKind && (yb = cb.k.ColorInstanceKind);
      const Wy = "matrix" === yb;
      if (!Wy && (!this._userThinInstanceBuffersStorage || !this._userThinInstanceBuffersStorage.strides[yb])) return;
      const Uy = Wy ? 16 : this._userThinInstanceBuffersStorage.strides[yb],
        hy = Wy ? this._thinInstanceDataStorage.matrixBufferSize : this._userThinInstanceBuffersStorage.sizes[yb];
      let fy = Wy ? this._thinInstanceDataStorage.matrixData : this._userThinInstanceBuffersStorage.data[yb];
      const Zy = (this._thinInstanceDataStorage.instancesCount + bb) * Uy;
      let Py = hy;
      for (; Py < Zy;) Py *= 2;
      if (!fy || hy != Py) {
        if (fy) {
          const yb = new Float32Array(Py);
          yb.set(fy, 0), fy = yb
        } else fy = new Float32Array(Py);
        Wy ? (this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", fy, !1), this._thinInstanceDataStorage.matrixData = fy, this._thinInstanceDataStorage.matrixBufferSize = Py, this._scene.needsPreviousWorldMatrices && !this._thinInstanceDataStorage.previousMatrixData && (this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", fy, !1))) : (this._userThinInstanceBuffersStorage.vertexBuffers[yb]?.dispose(), this._userThinInstanceBuffersStorage.data[yb] = fy, this._userThinInstanceBuffersStorage.sizes[yb] = Py, this._userThinInstanceBuffersStorage.vertexBuffers[yb] = new cb.k(this.xh(), fy, yb, !0, !1, Uy, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[yb]))
      }
    }, Zy.c.prototype._thinInstanceInitializeUserStorage = function() {
      this._userThinInstanceBuffersStorage || (this._userThinInstanceBuffersStorage = {
        data: {},
        sizes: {},
        vertexBuffers: {},
        strides: {}
      })
    }, Zy.c.prototype._disposeThinInstanceSpecificData = function() {
      this._thinInstanceDataStorage?.matrixBuffer && (this._thinInstanceDataStorage.matrixBuffer.dispose(), this._thinInstanceDataStorage.matrixBuffer = null), this._thinInstanceDataStorage?.previousMatrixBuffer && (this._thinInstanceDataStorage.previousMatrixBuffer.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = null)
    })
  },
  38949: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => mb,
      f: () => Sy
    });
    var Uy, hy, fy, Zy, cb = Wy(38464),
      Py = Wy(38466),
      oy = Wy(38485),
      By = Wy(35893),
      Ky = Wy(35861),
      ey = Wy(38697),
      qb = Wy(35909),
      sy = Wy(38347);
    let Sy = (() => {
      var yb;
      let bb, Wy, Uy, hy, fy, Zy, qb, sy, Sy, Ey = ey.b,
        ly = [],
        mb = [],
        Cy = [],
        Ty = [],
        Vy = [],
        Jy = [],
        gb = [],
        Gy = [],
        Oy = [],
        Ry = [],
        vb = [],
        ib = [],
        My = [],
        Yy = [],
        Xy = [],
        ny = [],
        uy = [],
        rb = [];
      return yb = class extends Ey {
        get billboardMode() {
          return this._billboardMode
        }
        set billboardMode(bb) {
          this._billboardMode !== bb && (this._billboardMode = bb, this._cache.useBillboardPosition = 0 !== (this._billboardMode & yb.BILLBOARDMODE_USE_POSITION))
        }
        get infiniteDistance() {
          return this._infiniteDistance
        }
        set infiniteDistance(yb) {
          this._infiniteDistance !== yb && (this._infiniteDistance = yb)
        }
        constructor(bb) {
          let Wy = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          super(bb, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, !1), this._forward = new Ky.n(0, 0, 1), this._up = new Ky.n(0, 1, 0), this._right = new Ky.n(1, 0, 0), this._position = (0, cb.l)(this, ly, Ky.n.Zero()), this._rotation = ((0, cb.l)(this, mb), (0, cb.l)(this, Cy, Ky.n.Zero())), this._rotationQuaternion = ((0, cb.l)(this, Ty), (0, cb.l)(this, Vy, null)), this._scaling = ((0, cb.l)(this, Jy), (0, cb.l)(this, gb, Ky.n.One())), this._transformToBoneReferal = ((0, cb.l)(this, Gy), null), this._isAbsoluteSynced = !1, this._billboardMode = (0, cb.l)(this, Oy, yb.BILLBOARDMODE_NONE), this.scalingDeterminant = ((0, cb.l)(this, Ry), (0, cb.l)(this, vb, 1)), this._infiniteDistance = ((0, cb.l)(this, ib), (0, cb.l)(this, My, !1)), this.ignoreNonUniformScaling = ((0, cb.l)(this, Yy), (0, cb.l)(this, Xy, !1)), this.reIntegrateRotationIntoRotationQuaternion = ((0, cb.l)(this, ny), (0, cb.l)(this, uy, !1)), this._poseMatrix = ((0, cb.l)(this, rb), null), this._localMatrix = Ky.c.Zero(), this._usePivotMatrix = !1, this._absolutePosition = Ky.n.Zero(), this._absoluteScaling = Ky.n.Zero(), this._absoluteRotationQuaternion = Ky.e.Identity(), this._pivotMatrix = Ky.c.Identity(), this._postMultiplyPivotMatrix = !1, this._isWorldMatrixFrozen = !1, this._indexInSceneTransformNodesArray = -1, this.onAfterWorldMatrixUpdateObservable = new By.c, this._nonUniformScaling = !1, Wy && this.kWy().addTransformNode(this)
        }
        getClassName() {
          return "TransformNode"
        }
        get position() {
          return this._position
        }
        set position(yb) {
          this._position = yb, this._markAsDirtyInternal()
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
        set rotation(yb) {
          this._rotation = yb, this._rotationQuaternion = null, this._markAsDirtyInternal()
        }
        get vZ() {
          return this._scaling
        }
        set vZ(yb) {
          this._scaling = yb, this._markAsDirtyInternal()
        }
        get rotationQuaternion() {
          return this._rotationQuaternion
        }
        set rotationQuaternion(yb) {
          this._rotationQuaternion = yb, yb && this._rotation.dfy(0), this._markAsDirtyInternal()
        }
        _markAsDirtyInternal() {
          this._isDirty || (this._isDirty = !0, this.customMarkAsDirty && this.customMarkAsDirty())
        }
        get forward() {
          return Ky.n.TransformNormalFromFloatsToRef(0, 0, this.kWy().useRightHandedSystem ? -1 : 1, this.getWorldMatrix(), this._forward), this._forward.normalize()
        }
        get up() {
          return Ky.n.TransformNormalFromFloatsToRef(0, 1, 0, this.getWorldMatrix(), this._up), this._up.normalize()
        }
        get right() {
          return Ky.n.TransformNormalFromFloatsToRef(this.kWy().useRightHandedSystem ? -1 : 1, 0, 0, this.getWorldMatrix(), this._right), this._right.normalize()
        }
        updatePoseMatrix(yb) {
          return this._poseMatrix ? (this._poseMatrix.Coy(yb), this) : (this._poseMatrix = yb.clone(), this)
        }
        getPoseMatrix() {
          return this._poseMatrix || (this._poseMatrix = Ky.c.Identity()), this._poseMatrix
        }
        _isSynchronized() {
          const bb = this._cache;
          return this._billboardMode === bb.billboardMode && this._billboardMode === yb.BILLBOARDMODE_NONE && (!bb.pivotMatrixUpdated && (!this._infiniteDistance && (!this._position._isDirty && (!this._scaling._isDirty && !(this._rotationQuaternion && this._rotationQuaternion._isDirty || this._rotation._isDirty)))))
        }
        _initCache() {
          super._initCache();
          const yb = this._cache;
          yb.localMatrixUpdated = !1, yb.billboardMode = -1, yb.infiniteDistance = !1, yb.useBillboardPosition = !1
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
        setPreTransformMatrix(yb) {
          return this.setPivotMatrix(yb, !1)
        }
        setPivotMatrix(yb) {
          let bb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          return this._pivotMatrix.Coy(yb), this._usePivotMatrix = !this._pivotMatrix.isIdentity(), this._cache.pivotMatrixUpdated = !0, this._postMultiplyPivotMatrix = bb, this._postMultiplyPivotMatrix && (this._pivotMatrixInverse ? this._pivotMatrix.invertToRef(this._pivotMatrixInverse) : this._pivotMatrixInverse = Ky.c.Invert(this._pivotMatrix)), this
        }
        getPivotMatrix() {
          return this._pivotMatrix
        }
        instantiateHierarchy() {
          let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            bb = arguments.length > 1 ? arguments[1] : void 0,
            Wy = arguments.length > 2 ? arguments[2] : void 0;
          const Uy = this.clone("Clone of " + (this.name || this.id), yb || this.parent, !0);
          Uy && Wy && Wy(this, Uy);
          for (const hy of this.getChildTransformNodes(!0)) hy.instantiateHierarchy(Uy, bb, Wy);
          return Uy
        }
        Aby() {
          let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return yb ? arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (this._rotation.dfy(0), this._rotationQuaternion = this._rotationQuaternion || Ky.e.Identity(), yb.decompose(this._scaling, this._rotationQuaternion, this._position), this.computeWorldMatrix(!0)) : (this._worldMatrix = yb, this._absolutePosition.vcy(this._worldMatrix.m[12], this._worldMatrix.m[13], this._worldMatrix.m[14]), this._afterComputeWorldMatrix()) : (this._isWorldMatrixFrozen = !1, this.computeWorldMatrix(!0)), this._isDirty = !1, this._isWorldMatrixFrozen = !0, this
        }
        unfreezeWorldMatrix() {
          return this._isWorldMatrixFrozen = !1, this.computeWorldMatrix(!0), this
        }
        get Hqy() {
          return this._isWorldMatrixFrozen
        }
        getAbsolutePosition() {
          return this.computeWorldMatrix(), this._absolutePosition
        }
        setAbsolutePosition(yb) {
          if (!yb) return this;
          let bb, Wy, Uy;
          if (void 0 === yb.x) {
            if (arguments.length < 3) return this;
            bb = arguments[0], Wy = arguments[1], Uy = arguments[2]
          } else bb = yb.x, Wy = yb.y, Uy = yb.z;
          if (this.parent) {
            const yb = Ky.j.Matrix[0];
            this.parent.getWorldMatrix().invertToRef(yb), Ky.n.TransformCoordinatesFromFloatsToRef(bb, Wy, Uy, yb, this.position)
          } else this.position.x = bb, this.position.y = Wy, this.position.z = Uy;
          return this._absolutePosition.Coy(yb), this
        }
        setPositionWithLocalVector(yb) {
          return this.computeWorldMatrix(), this.position = Ky.n.TransformNormal(yb, this._localMatrix), this
        }
        getPositionExpressedInLocalSpace() {
          this.computeWorldMatrix();
          const yb = Ky.j.Matrix[0];
          return this._localMatrix.invertToRef(yb), Ky.n.TransformNormal(this.position, yb)
        }
        locallyTranslate(yb) {
          return this.computeWorldMatrix(!0), this.position = Ky.n.TransformCoordinates(yb, this._localMatrix), this
        }
        lookAt(bb) {
          let Wy = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            Uy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            hy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
            fy = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
          const Zy = yb._LookAtVectorCache,
            cb = 0 === fy ? this.position : this.getAbsolutePosition();
          if (bb.subtractToRef(cb, Zy), this.setDirection(Zy, Wy, Uy, hy), 1 === fy && this.parent)
            if (this.rotationQuaternion) {
              const yb = Ky.j.Matrix[0];
              this.rotationQuaternion.toRotationMatrix(yb);
              const bb = Ky.j.Matrix[1];
              this.parent.getWorldMatrix().getRotationMatrixToRef(bb), bb.invert(), yb.multiplyToRef(bb, yb), this.rotationQuaternion.fromRotationMatrix(yb)
            } else {
              const yb = Ky.j.Quaternion[0];
              Ky.e.FromEulerVectorToRef(this.rotation, yb);
              const bb = Ky.j.Matrix[0];
              yb.toRotationMatrix(bb);
              const Wy = Ky.j.Matrix[1];
              this.parent.getWorldMatrix().getRotationMatrixToRef(Wy), Wy.invert(), bb.multiplyToRef(Wy, bb), yb.fromRotationMatrix(bb), yb.toEulerAnglesToRef(this.rotation)
            } return this
        }
        ify(yb) {
          const bb = Ky.n.Zero();
          return this.getDirectionToRef(yb, bb), bb
        }
        getDirectionToRef(yb, bb) {
          return Ky.n.TransformNormalToRef(yb, this.getWorldMatrix(), bb), this
        }
        setDirection(yb) {
          let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            Uy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
          const hy = -Math.atan2(yb.z, yb.x) + Math.PI / 2,
            fy = Math.sqrt(yb.x * yb.x + yb.z * yb.z),
            Zy = -Math.atan2(yb.y, fy);
          return this.rotationQuaternion ? Ky.e.RotationYawPitchRollToRef(hy + bb, Zy + Wy, Uy, this.rotationQuaternion) : (this.rotation.x = Zy + Wy, this.rotation.y = hy + bb, this.rotation.z = Uy), this
        }
        setPivotPoint(yb) {
          let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          0 == this.kWy().getRenderId() && this.computeWorldMatrix(!0);
          const Wy = this.getWorldMatrix();
          if (1 == bb) {
            const bb = Ky.j.Matrix[0];
            Wy.invertToRef(bb), yb = Ky.n.TransformCoordinates(yb, bb)
          }
          return this.setPivotMatrix(Ky.c.Translation(-yb.x, -yb.y, -yb.z), !0)
        }
        getPivotPoint() {
          const yb = Ky.n.Zero();
          return this.getPivotPointToRef(yb), yb
        }
        getPivotPointToRef(yb) {
          return yb.x = -this._pivotMatrix.m[12], yb.y = -this._pivotMatrix.m[13], yb.z = -this._pivotMatrix.m[14], this
        }
        getAbsolutePivotPoint() {
          const yb = Ky.n.Zero();
          return this.getAbsolutePivotPointToRef(yb), yb
        }
        getAbsolutePivotPointToRef(yb) {
          return this.getPivotPointToRef(yb), Ky.n.TransformCoordinatesToRef(yb, this.getWorldMatrix(), yb), this
        }
        goy(yb) {
          if (this._isDirty) return this;
          if (this._children)
            for (const bb of this._children) bb.goy(yb);
          return super.goy(yb)
        }
        setParent(bb) {
          let Wy = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            Uy = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          if (!bb && !this.parent) return this;
          const hy = Ky.j.Quaternion[0],
            fy = Ky.j.dU[0],
            Zy = Ky.j.dU[1],
            cb = Ky.j.Matrix[1];
          Ky.c.IdentityToRef(cb);
          const Py = Ky.j.Matrix[0];
          this.computeWorldMatrix(!0);
          let oy = this.rotationQuaternion;
          return oy || (oy = yb._TmpRotation, Ky.e.RotationYawPitchRollToRef(this._rotation.y, this._rotation.x, this._rotation.z, oy)), Ky.c.ComposeToRef(this.vZ, oy, this.position, Py), this.parent && Py.multiplyToRef(this.parent.computeWorldMatrix(!0), Py), bb && (bb.computeWorldMatrix(!0).invertToRef(cb), Py.multiplyToRef(cb, Py)), Py.decompose(Zy, hy, fy, Wy ? this : void 0), this.rotationQuaternion ? this.rotationQuaternion.Coy(hy) : hy.toEulerAnglesToRef(this.rotation), this.vZ.Coy(Zy), this.position.Coy(fy), this.parent = bb, Uy && this.setPivotMatrix(Ky.c.Identity()), this
        }
        addChild(yb) {
          let bb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return yb.setParent(this, bb), this
        }
        removeChild(yb) {
          let bb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return yb.parent !== this || yb.setParent(null, bb), this
        }
        get nonUniformScaling() {
          return this._nonUniformScaling
        }
        _updateNonUniformScalingState(yb) {
          return this._nonUniformScaling !== yb && (this._nonUniformScaling = yb, !0)
        }
        attachToBone(yb, bb) {
          return this._currentParentWhenAttachingToBone = this.parent, this._transformToBoneReferal = bb, this.parent = yb, yb.getSkeleton().prepare(!0), yb.getFinalMatrix().determinant() < 0 && (this.scalingDeterminant *= -1), this
        }
        detachFromBone() {
          let yb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          return this.parent ? (this.parent.getWorldMatrix().determinant() < 0 && (this.scalingDeterminant *= -1), this._transformToBoneReferal = null, this.parent = yb ? this._currentParentWhenAttachingToBone : null, this) : (yb && (this.parent = this._currentParentWhenAttachingToBone), this)
        }
        rotate(bb, Wy, Uy) {
          let hy;
          if (bb.normalize(), this.rotationQuaternion || (this.rotationQuaternion = this.rotation.toQuaternion(), this.rotation.dfy(0)), Uy && 0 !== Uy) {
            if (this.parent) {
              const yb = this.parent.getWorldMatrix(),
                Uy = Ky.j.Matrix[0];
              yb.invertToRef(Uy), bb = Ky.n.TransformNormal(bb, Uy), yb.determinant() < 0 && (Wy *= -1)
            }
            hy = Ky.e.RotationAxisToRef(bb, Wy, yb._RotationAxisCache), hy.multiplyToRef(this.rotationQuaternion, this.rotationQuaternion)
          } else hy = Ky.e.RotationAxisToRef(bb, Wy, yb._RotationAxisCache), this.rotationQuaternion.multiplyToRef(hy, this.rotationQuaternion);
          return this
        }
        rotateAround(yb, bb, Wy) {
          bb.normalize(), this.rotationQuaternion || (this.rotationQuaternion = Ky.e.RotationYawPitchRoll(this.rotation.y, this.rotation.x, this.rotation.z), this.rotation.dfy(0));
          const Uy = Ky.j.dU[0],
            hy = Ky.j.dU[1],
            fy = Ky.j.dU[2],
            Zy = Ky.j.Quaternion[0],
            cb = Ky.j.Matrix[0],
            Py = Ky.j.Matrix[1],
            oy = Ky.j.Matrix[2],
            By = Ky.j.Matrix[3];
          return yb.subtractToRef(this.position, Uy), Ky.c.TranslationToRef(Uy.x, Uy.y, Uy.z, cb), Ky.c.TranslationToRef(-Uy.x, -Uy.y, -Uy.z, Py), Ky.c.RotationAxisToRef(bb, Wy, oy), Py.multiplyToRef(oy, By), By.multiplyToRef(cb, By), By.decompose(hy, Zy, fy), this.position.addInPlace(fy), Zy.multiplyToRef(this.rotationQuaternion, this.rotationQuaternion), this
        }
        translate(yb, bb, Wy) {
          const Uy = yb.scale(bb);
          if (Wy && 0 !== Wy) this.setAbsolutePosition(this.getAbsolutePosition().add(Uy));
          else {
            const yb = this.getPositionExpressedInLocalSpace().add(Uy);
            this.setPositionWithLocalVector(yb)
          }
          return this
        }
        addRotation(yb, bb, Wy) {
          let Uy;
          this.rotationQuaternion ? Uy = this.rotationQuaternion : (Uy = Ky.j.Quaternion[1], Ky.e.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, this.rotation.z, Uy));
          const hy = Ky.j.Quaternion[0];
          return Ky.e.RotationYawPitchRollToRef(bb, yb, Wy, hy), Uy.multiplyInPlace(hy), this.rotationQuaternion || Uy.toEulerAnglesToRef(this.rotation), this
        }
        _getEffectiveParent() {
          return this.parent
        }
        isWorldMatrixCameraDependent() {
          return this._infiniteDistance && !this.parent || this._billboardMode !== yb.BILLBOARDMODE_NONE
        }
        computeWorldMatrix() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            Wy = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          if (this._isWorldMatrixFrozen && !this._isDirty) return this._worldMatrix;
          const Uy = this.kWy().getRenderId();
          if (!this._isDirty && !bb && (this._currentRenderId === Uy || this.isSynchronized())) return this._currentRenderId = Uy, this._worldMatrix;
          Wy = Wy || this.kWy().activeCamera, this._updateCache();
          const hy = this._cache;
          hy.pivotMatrixUpdated = !1, hy.billboardMode = this.billboardMode, hy.infiniteDistance = this.infiniteDistance, hy.parent = this._parentNode, this._currentRenderId = Uy, this._childUpdateId += 1, this._isDirty = !1, this._position._isDirty = !1, this._rotation._isDirty = !1, this._scaling._isDirty = !1;
          const fy = this._getEffectiveParent(),
            Zy = yb._TmpScaling;
          let cb, Py = this._position;
          if (this._infiniteDistance && !this.parent && Wy) {
            const bb = Wy.getWorldMatrix().m;
            Py = yb._TmpTranslation, Py.vcy(this._position.x + bb[12], this._position.y + bb[13], this._position.z + bb[14])
          }
          if (Zy.vcy(this._scaling.x * this.scalingDeterminant, this._scaling.y * this.scalingDeterminant, this._scaling.z * this.scalingDeterminant), this._rotationQuaternion) {
            if (this._rotationQuaternion._isDirty = !1, cb = this._rotationQuaternion, this.reIntegrateRotationIntoRotationQuaternion) {
              this.rotation.lengthSquared() && (this._rotationQuaternion.multiplyInPlace(Ky.e.RotationYawPitchRoll(this._rotation.y, this._rotation.x, this._rotation.z)), this._rotation.vcy(0, 0, 0))
            }
          } else cb = yb._TmpRotation, Ky.e.RotationYawPitchRollToRef(this._rotation.y, this._rotation.x, this._rotation.z, cb);
          if (this._usePivotMatrix) {
            const yb = Ky.j.Matrix[1];
            Ky.c.ScalingToRef(Zy.x, Zy.y, Zy.z, yb);
            const bb = Ky.j.Matrix[0];
            cb.toRotationMatrix(bb), this._pivotMatrix.multiplyToRef(yb, Ky.j.Matrix[4]), Ky.j.Matrix[4].multiplyToRef(bb, this._localMatrix), this._postMultiplyPivotMatrix && this._localMatrix.multiplyToRef(this._pivotMatrixInverse, this._localMatrix), this._localMatrix.addTranslationFromFloats(Py.x, Py.y, Py.z)
          } else Ky.c.ComposeToRef(Zy, cb, Py, this._localMatrix);
          if (fy && fy.getWorldMatrix) {
            if (bb && fy.computeWorldMatrix(bb), this.billboardMode) {
              if (this._transformToBoneReferal) {
                const yb = this.parent;
                yb.getSkeleton().prepare(), yb.getFinalMatrix().multiplyToRef(this._transformToBoneReferal.getWorldMatrix(), Ky.j.Matrix[7])
              } else Ky.j.Matrix[7].Coy(fy.getWorldMatrix());
              const bb = Ky.j.dU[5],
                Wy = Ky.j.dU[6],
                Uy = Ky.j.Quaternion[0];
              Ky.j.Matrix[7].decompose(Wy, Uy, bb), Ky.c.ScalingToRef(Wy.x, Wy.y, Wy.z, Ky.j.Matrix[7]), Ky.j.Matrix[7].setTranslation(bb), yb.BillboardUseParentOrientation && (this._position.applyRotationQuaternionToRef(Uy, bb), this._localMatrix.setTranslation(bb)), this._localMatrix.multiplyToRef(Ky.j.Matrix[7], this._worldMatrix)
            } else if (this._transformToBoneReferal) {
              const yb = this.parent;
              yb.getSkeleton().prepare(), this._localMatrix.multiplyToRef(yb.getFinalMatrix(), Ky.j.Matrix[6]), Ky.j.Matrix[6].multiplyToRef(this._transformToBoneReferal.getWorldMatrix(), this._worldMatrix)
            } else this._localMatrix.multiplyToRef(fy.getWorldMatrix(), this._worldMatrix);
            this._markSyncedWithParent()
          } else this._worldMatrix.Coy(this._localMatrix);
          if (Wy && this.billboardMode)
            if (hy.useBillboardPosition) {
              const bb = Ky.j.dU[0];
              this._worldMatrix.getTranslationToRef(bb);
              const Uy = Wy.globalPosition;
              this._worldMatrix.invertToRef(Ky.j.Matrix[1]);
              const hy = Ky.j.dU[1];
              Ky.n.TransformCoordinatesToRef(Uy, Ky.j.Matrix[1], hy), hy.normalize();
              const fy = -Math.atan2(hy.z, hy.x) + Math.PI / 2,
                Zy = Math.sqrt(hy.x * hy.x + hy.z * hy.z),
                cb = -Math.atan2(hy.y, Zy);
              if (Ky.e.RotationYawPitchRollToRef(fy, cb, 0, Ky.j.Quaternion[0]), (this.billboardMode & yb.BILLBOARDMODE_ALL) !== yb.BILLBOARDMODE_ALL) {
                const bb = Ky.j.dU[1];
                Ky.j.Quaternion[0].toEulerAnglesToRef(bb), (this.billboardMode & yb.BILLBOARDMODE_X) !== yb.BILLBOARDMODE_X && (bb.x = 0), (this.billboardMode & yb.BILLBOARDMODE_Y) !== yb.BILLBOARDMODE_Y && (bb.y = 0), (this.billboardMode & yb.BILLBOARDMODE_Z) !== yb.BILLBOARDMODE_Z && (bb.z = 0), Ky.c.RotationYawPitchRollToRef(bb.y, bb.x, bb.z, Ky.j.Matrix[0])
              } else Ky.c.FromQuaternionToRef(Ky.j.Quaternion[0], Ky.j.Matrix[0]);
              this._worldMatrix.setTranslationFromFloats(0, 0, 0), this._worldMatrix.multiplyToRef(Ky.j.Matrix[0], this._worldMatrix), this._worldMatrix.setTranslation(Ky.j.dU[0])
            } else {
              const bb = Ky.j.dU[0];
              this._worldMatrix.getTranslationToRef(bb), Ky.j.Matrix[1].Coy(Wy.getViewMatrix());
              const Uy = this.kWy().useRightHandedSystem;
              if (Uy && Ky.j.Matrix[1].multiplyToRef(yb._TmpRHRestore, Ky.j.Matrix[1]), Ky.j.Matrix[1].setTranslationFromFloats(0, 0, 0), Ky.j.Matrix[1].invertToRef(Ky.j.Matrix[0]), (this.billboardMode & yb.BILLBOARDMODE_ALL) !== yb.BILLBOARDMODE_ALL) {
                Ky.j.Matrix[0].decompose(void 0, Ky.j.Quaternion[0], void 0);
                const bb = Ky.j.dU[1];
                Ky.j.Quaternion[0].toEulerAnglesToRef(bb), (this.billboardMode & yb.BILLBOARDMODE_X) !== yb.BILLBOARDMODE_X && (bb.x = 0), (this.billboardMode & yb.BILLBOARDMODE_Y) !== yb.BILLBOARDMODE_Y && (bb.y = 0), (this.billboardMode & yb.BILLBOARDMODE_Z) !== yb.BILLBOARDMODE_Z && (bb.z = 0), Uy && (bb.y += Math.PI), Ky.c.RotationYawPitchRollToRef(bb.y, bb.x, bb.z, Ky.j.Matrix[0])
              }
              this._worldMatrix.setTranslationFromFloats(0, 0, 0), this._worldMatrix.multiplyToRef(Ky.j.Matrix[0], this._worldMatrix), this._worldMatrix.setTranslation(Ky.j.dU[0])
            } return this.ignoreNonUniformScaling ? this._updateNonUniformScalingState(!1) : this._scaling.isNonUniformWithinEpsilon(1e-6) ? this._updateNonUniformScalingState(!0) : fy && fy._nonUniformScaling ? this._updateNonUniformScalingState(fy._nonUniformScaling) : this._updateNonUniformScalingState(!1), this._afterComputeWorldMatrix(), this._absolutePosition.vcy(this._worldMatrix.m[12], this._worldMatrix.m[13], this._worldMatrix.m[14]), this._isAbsoluteSynced = !1, this.onAfterWorldMatrixUpdateObservable.notifyObservers(this), this._poseMatrix || (this._poseMatrix = Ky.c.Invert(this._worldMatrix)), this._worldMatrixDeterminantIsDirty = !0, this._worldMatrix
        }
        resetLocalMatrix() {
          let yb = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          if (this.computeWorldMatrix(), yb) {
            const yb = this.getChildren();
            for (let bb = 0; bb < yb.length; ++bb) {
              const Wy = yb[bb];
              if (Wy) {
                Wy.computeWorldMatrix();
                const yb = Ky.j.Matrix[0];
                Wy._localMatrix.multiplyToRef(this._localMatrix, yb);
                const bb = Ky.j.Quaternion[0];
                yb.decompose(Wy.vZ, bb, Wy.position), Wy.rotationQuaternion ? Wy.rotationQuaternion.Coy(bb) : bb.toEulerAnglesToRef(Wy.rotation)
              }
            }
          }
          this.vZ.vcy(1, 1, 1), this.position.vcy(0, 0, 0), this.rotation.vcy(0, 0, 0), this.rotationQuaternion && (this.rotationQuaternion = Ky.e.Identity()), this._worldMatrix = Ky.c.Identity()
        }
        _afterComputeWorldMatrix() {}
        registerAfterWorldMatrixUpdate(yb) {
          return this.onAfterWorldMatrixUpdateObservable.add(yb), this
        }
        unregisterAfterWorldMatrixUpdate(yb) {
          return this.onAfterWorldMatrixUpdateObservable.removeCallback(yb), this
        }
        getPositionInCameraSpace() {
          let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return yb || (yb = this.kWy().activeCamera), Ky.n.TransformCoordinates(this.getAbsolutePosition(), yb.getViewMatrix())
        }
        getDistanceToCamera() {
          let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return yb || (yb = this.kWy().activeCamera), this.getAbsolutePosition().subtract(yb.globalPosition).length()
        }
        clone(bb, Wy, Uy) {
          const hy = oy.c.Clone((() => new yb(bb, this.kWy())), this);
          if (hy.name = bb, hy.id = bb, Wy && (hy.parent = Wy), !Uy) {
            const yb = this.getDescendants(!0);
            for (let Wy = 0; Wy < yb.length; Wy++) {
              const Uy = yb[Wy];
              Uy.clone && Uy.clone(bb + "." + Uy.name, hy)
            }
          }
          return hy
        }
        serialize(yb) {
          const bb = oy.c.Serialize(this, yb);
          return bb.type = this.getClassName(), bb.uniqueId = this.uniqueId, this.parent && this.parent._serializeAsParent(bb), bb.localMatrix = this.getPivotMatrix().hBy(), bb.isEnabled = this.isEnabled(), this._isWorldMatrixFrozen && (bb.Aby = !0), oy.c.AppendSerializedAnimations(this, bb), bb.lZ = this.serializeAnimationRanges(), bb
        }
        getChildTransformNodes(bb, Wy) {
          const Uy = [];
          return this._getDescendants(Uy, bb, (bb => (!Wy || Wy(bb)) && bb instanceof yb)), Uy
        }
        dispose(yb) {
          let bb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this.kWy().stopAnimation(this), this.kWy().removeTransformNode(this), this._parentContainer) {
            const yb = this._parentContainer.transformNodes.indexOf(this);
            yb > -1 && this._parentContainer.transformNodes.splice(yb, 1), this._parentContainer = null
          }
          if (this.onAfterWorldMatrixUpdateObservable.clear(), yb) {
            const yb = this.getChildTransformNodes(!0);
            for (const bb of yb) bb.parent = null, bb.computeWorldMatrix(!0)
          }
          super.dispose(yb, bb)
        }
        normalizeToUnitCube() {
          let yb = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            bb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            Wy = arguments.length > 2 ? arguments[2] : void 0,
            Uy = null,
            hy = null;
          bb && (this.rotationQuaternion ? (hy = this.rotationQuaternion.clone(), this.rotationQuaternion.vcy(0, 0, 0, 1)) : this.rotation && (Uy = this.rotation.clone(), this.rotation.vcy(0, 0, 0)));
          const fy = this.getHierarchyBoundingVectors(yb, Wy),
            Zy = fy.max.subtract(fy.min),
            cb = Math.max(Zy.x, Zy.y, Zy.z);
          if (0 === cb) return this;
          const Py = 1 / cb;
          return this.vZ.scaleInPlace(Py), bb && (this.rotationQuaternion && hy ? this.rotationQuaternion.Coy(hy) : this.rotation && Uy && this.rotation.Coy(Uy)), this
        }
        _syncAbsoluteScalingAndRotation() {
          this._isAbsoluteSynced || (this._worldMatrix.decompose(this._absoluteScaling, this._absoluteRotationQuaternion), this._isAbsoluteSynced = !0)
        }
      }, (() => {
        const oy = "function" === typeof Symbol && Symbol.metadata ? Object.create(Ey[Symbol.metadata] ?? null) : void 0;
        bb = [(0, Py.P)("position")], Wy = [(0, Py.P)("rotation")], Uy = [(0, Py.I)("rotationQuaternion")], hy = [(0, Py.P)("vZ")], fy = [(0, Py.T)("billboardMode")], Zy = [(0, Py.T)()], qb = [(0, Py.T)("infiniteDistance")], sy = [(0, Py.T)()], Sy = [(0, Py.T)()], (0, cb.j)(null, null, bb, {
          kind: "field",
          name: "_position",
          static: !1,
          private: !1,
          access: {
            has: yb => "_position" in yb,
            get: yb => yb._position,
            set: (yb, bb) => {
              yb._position = bb
            }
          },
          metadata: oy
        }, ly, mb), (0, cb.j)(null, null, Wy, {
          kind: "field",
          name: "_rotation",
          static: !1,
          private: !1,
          access: {
            has: yb => "_rotation" in yb,
            get: yb => yb._rotation,
            set: (yb, bb) => {
              yb._rotation = bb
            }
          },
          metadata: oy
        }, Cy, Ty), (0, cb.j)(null, null, Uy, {
          kind: "field",
          name: "_rotationQuaternion",
          static: !1,
          private: !1,
          access: {
            has: yb => "_rotationQuaternion" in yb,
            get: yb => yb._rotationQuaternion,
            set: (yb, bb) => {
              yb._rotationQuaternion = bb
            }
          },
          metadata: oy
        }, Vy, Jy), (0, cb.j)(null, null, hy, {
          kind: "field",
          name: "_scaling",
          static: !1,
          private: !1,
          access: {
            has: yb => "_scaling" in yb,
            get: yb => yb._scaling,
            set: (yb, bb) => {
              yb._scaling = bb
            }
          },
          metadata: oy
        }, gb, Gy), (0, cb.j)(null, null, fy, {
          kind: "field",
          name: "_billboardMode",
          static: !1,
          private: !1,
          access: {
            has: yb => "_billboardMode" in yb,
            get: yb => yb._billboardMode,
            set: (yb, bb) => {
              yb._billboardMode = bb
            }
          },
          metadata: oy
        }, Oy, Ry), (0, cb.j)(null, null, Zy, {
          kind: "field",
          name: "scalingDeterminant",
          static: !1,
          private: !1,
          access: {
            has: yb => "scalingDeterminant" in yb,
            get: yb => yb.scalingDeterminant,
            set: (yb, bb) => {
              yb.scalingDeterminant = bb
            }
          },
          metadata: oy
        }, vb, ib), (0, cb.j)(null, null, qb, {
          kind: "field",
          name: "_infiniteDistance",
          static: !1,
          private: !1,
          access: {
            has: yb => "_infiniteDistance" in yb,
            get: yb => yb._infiniteDistance,
            set: (yb, bb) => {
              yb._infiniteDistance = bb
            }
          },
          metadata: oy
        }, My, Yy), (0, cb.j)(null, null, sy, {
          kind: "field",
          name: "ignoreNonUniformScaling",
          static: !1,
          private: !1,
          access: {
            has: yb => "ignoreNonUniformScaling" in yb,
            get: yb => yb.ignoreNonUniformScaling,
            set: (yb, bb) => {
              yb.ignoreNonUniformScaling = bb
            }
          },
          metadata: oy
        }, Xy, ny), (0, cb.j)(null, null, Sy, {
          kind: "field",
          name: "reIntegrateRotationIntoRotationQuaternion",
          static: !1,
          private: !1,
          access: {
            has: yb => "reIntegrateRotationIntoRotationQuaternion" in yb,
            get: yb => yb.reIntegrateRotationIntoRotationQuaternion,
            set: (yb, bb) => {
              yb.reIntegrateRotationIntoRotationQuaternion = bb
            }
          },
          metadata: oy
        }, uy, rb), oy && Object.defineProperty(yb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: oy
        })
      })(), yb.BILLBOARDMODE_NONE = 0, yb.BILLBOARDMODE_X = 1, yb.BILLBOARDMODE_Y = 2, yb.BILLBOARDMODE_Z = 4, yb.BILLBOARDMODE_ALL = 7, yb.BILLBOARDMODE_USE_POSITION = 128, yb.BillboardUseParentOrientation = !1, yb._TmpRotation = Ky.e.Zero(), yb._TmpScaling = Ky.n.Zero(), yb._TmpTranslation = Ky.n.Zero(), yb._TmpRHRestore = Ky.c.Scaling(1, 1, -1), yb._LookAtVectorCache = new Ky.n(0, 0, 0), yb._RotationAxisCache = new Ky.e, yb
    })();

    function Ey(yb, bb, Wy) {
      const Uy = oy.c.Parse((() => new Sy(yb.name, bb)), yb, bb, Wy);
      if (yb.localMatrix ? Uy.setPreTransformMatrix(Ky.c.FromArray(yb.localMatrix)) : yb.pivotMatrix && Uy.setPivotMatrix(Ky.c.FromArray(yb.pivotMatrix)), Uy.dJ(yb.isEnabled), Uy._waitingParsedUniqueId = yb.uniqueId, void 0 !== yb.parentId && (Uy._waitingParentId = yb.parentId), void 0 !== yb.parentInstanceIndex && (Uy._waitingParentInstanceIndex = yb.parentInstanceIndex), yb.Aby && (Uy._waitingFreezeWorldMatrix = yb.Aby), yb.animations) {
        for (let bb = 0; bb < yb.animations.length; bb++) {
          const Wy = yb.animations[bb],
            hy = (0, qb.b)("BABYLON.Animation");
          hy && Uy.animations.push(hy.Parse(Wy))
        }
        ey.b.ParseAnimationRanges(Uy, yb, bb)
      }
      return yb.autoAnimate && bb.beginAnimation(Uy, yb.autoAnimateFrom, yb.autoAnimateTo, yb.autoAnimateLoop, yb.autoAnimateSpeed || 1), Uy
    }
    let ly = !1;

    function mb() {
      ly || (ly = !0, Sy.Parse = Ey)
    }(Uy = Sy.prototype).hUy ?? (Uy.hUy = (0, sy.f)("TransformNode", "hUy")), (hy = Sy.prototype).applyImpulse ?? (hy.applyImpulse = (0, sy.f)("TransformNode", "applyImpulse")), (fy = Sy.prototype).applyAngularImpulse ?? (fy.applyAngularImpulse = (0, sy.f)("TransformNode", "applyAngularImpulse")), (Zy = Sy.prototype).applyTorque ?? (Zy.applyTorque = (0, sy.f)("TransformNode", "applyTorque")), Object.getOwnPropertyDescriptor(Sy.prototype, "physicsBody") || Object.defineProperty(Sy.prototype, "physicsBody", (0, sy.e)("TransformNode", "physicsBody"))
  },
  38907: (yb, bb, Wy) => {
    function Uy(yb, bb, Wy) {
      try {
        const Uy = yb.next();
        Uy.done ? bb(Uy) : Uy.value ? Uy.value.then((() => {
          Uy.value = void 0, bb(Uy)
        }), Wy) : bb(Uy)
      } catch (Uy) {
        Wy(Uy)
      }
    }

    function hy() {
      let yb, bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 25;
      return (Wy, hy, fy) => {
        const Zy = performance.now();
        void 0 === yb || Zy - yb > bb ? (yb = Zy, setTimeout((() => {
          Uy(Wy, hy, fy)
        }), 0)) : Uy(Wy, hy, fy)
      }
    }

    function fy(yb, bb, Wy, Uy, hy) {
      const fy = () => {
        let Zy;
        const cb = yb => {
          yb.done ? Wy(yb.value) : void 0 === Zy ? Zy = !0 : fy()
        };
        do {
          Zy = void 0, hy && hy.aborted ? Uy(new Error("Aborted")) : bb(yb, cb, Uy), void 0 === Zy && (Zy = !1)
        } while (Zy)
      };
      fy()
    }

    function Zy(yb, bb) {
      let Wy;
      return fy(yb, Uy, (yb => Wy = yb), (yb => {
        throw yb
      }), bb), Wy
    }
    async function cb(yb, bb, Wy) {
      return await new Promise(((Uy, hy) => {
        fy(yb, bb, Uy, hy, Wy)
      }))
    }

    function Py(yb, bb) {
      return function() {
        return Zy(yb(...arguments), bb)
      }
    }
    Wy.d(bb, {
      d: () => hy,
      f: () => Py,
      h: () => cb,
      l: () => Zy
    })
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);
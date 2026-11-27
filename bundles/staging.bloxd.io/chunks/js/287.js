export const id = 287;
export const ids = [287];
export const modules = {
  42057: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => hr,
      g: () => nr
    });
    var Zr = Qr(41872),
      Wr = Qr(41875),
      ar = Qr(41960),
      jr = Qr(38595),
      Ir = Qr(38560),
      fr = Qr(42060),
      Er = Qr(40246),
      pr = Qr(38609),
      xr = Qr(41769),
      mr = Qr(39607),
      Nr = Qr(39262),
      Ur = Qr(41843),
      tr = Qr(41889);
    let hr = (() => {
      var rr;
      let Sr, Qr, pr, hr, zr, Yr, nr, er, Kr, yr, Br, Tr, vr, Or, Lr, lr, Xr, Pr, Hr = fr.c,
        qr = [],
        Rr = [],
        gr = [],
        Cr = [],
        Mr = [],
        Gr = [],
        kr = [],
        Ar = [],
        Vr = [],
        ir = [],
        wr = [],
        cr = [],
        Fr = [],
        or = [],
        br = [],
        Jr = [],
        Dr = [],
        dr = [],
        sr = [],
        ur = [],
        rS = [],
        SS = [],
        QS = [],
        ZS = [],
        WS = [];
      return rr = class extends Hr {
        get position() {
          return this._position
        }
        set position(rr) {
          this._position = rr
        }
        set upVector(rr) {
          this._upVector = rr
        }
        get upVector() {
          return this._upVector
        }
        get screenArea() {
          let Sr, Qr;
          if (this.mode === rr.PERSPECTIVE_CAMERA) this.fovMode === rr.FOVMODE_VERTICAL_FIXED ? (Qr = 2 * this.minZ * Math.tan(this.fov / 2), Sr = this.MU().getAspectRatio(this) * Qr) : (Sr = 2 * this.minZ * Math.tan(this.fov / 2), Qr = Sr / this.MU().getAspectRatio(this));
          else {
            const rr = this.MU().getRenderWidth() / 2,
              Zr = this.MU().getRenderHeight() / 2;
            Sr = (this.orthoRight ?? rr) - (this.orthoLeft ?? -rr), Qr = (this.orthoTop ?? Zr) - (this.orthoBottom ?? -Zr)
          }
          return Sr * Qr
        }
        set orthoLeft(rr) {
          this._orthoLeft = rr;
          for (const Sr of this._rigCameras) Sr.orthoLeft = rr
        }
        get orthoLeft() {
          return this._orthoLeft
        }
        set orthoRight(rr) {
          this._orthoRight = rr;
          for (const Sr of this._rigCameras) Sr.orthoRight = rr
        }
        get orthoRight() {
          return this._orthoRight
        }
        set orthoBottom(rr) {
          this._orthoBottom = rr;
          for (const Sr of this._rigCameras) Sr.orthoBottom = rr
        }
        get orthoBottom() {
          return this._orthoBottom
        }
        set orthoTop(rr) {
          this._orthoTop = rr;
          for (const Sr of this._rigCameras) Sr.orthoTop = rr
        }
        get orthoTop() {
          return this._orthoTop
        }
        setFocalLength(rr) {
          let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 36;
          this.fov = 2 * Math.atan(Sr / (2 * rr))
        }
        get inertia() {
          return this._baseInertia
        }
        set inertia(rr) {
          this._baseInertia = rr
        }
        set mode(rr) {
          this._mode = rr;
          for (const Sr of this._rigCameras) Sr.mode = rr
        }
        get mode() {
          return this._mode
        }
        get hasMoved() {
          return this._hasMoved
        }
        constructor(Sr, Qr, Wr) {
          let fr = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
          (0, Ur.e)(), super(Sr, Wr, !1), this.inputs = (0, Zr.m)(this, qr), this._position = (0, Zr.m)(this, Rr, Ir.u.Zero()), this._upVector = ((0, Zr.m)(this, gr), (0, Zr.m)(this, Cr, Ir.u.Up())), this.oblique = ((0, Zr.m)(this, Mr), null), this._orthoLeft = null, this._orthoRight = null, this._orthoBottom = null, this._orthoTop = null, this.fov = (0, Zr.m)(this, Gr, .8), this.projectionPlaneTilt = ((0, Zr.m)(this, kr), (0, Zr.m)(this, Ar, 0)), this.minZ = ((0, Zr.m)(this, Vr), (0, Zr.m)(this, ir, 1)), this.maxZ = ((0, Zr.m)(this, wr), (0, Zr.m)(this, cr, 1e4)), this._baseInertia = ((0, Zr.m)(this, Fr), .9), this._mode = rr.PERSPECTIVE_CAMERA, this.isIntermediate = !1, this.viewport = new mr.d(0, 0, 1, 1), this.layerMask = (0, Zr.m)(this, or, 268435455), this.fovMode = ((0, Zr.m)(this, br), (0, Zr.m)(this, Jr, rr.FOVMODE_VERTICAL_FIXED)), this.cameraRigMode = ((0, Zr.m)(this, Dr), (0, Zr.m)(this, dr, rr.RIG_MODE_NONE)), this.interaxialDistance = ((0, Zr.m)(this, sr), (0, Zr.m)(this, ur, void 0)), this.isStereoscopicSideBySide = ((0, Zr.m)(this, rS), (0, Zr.m)(this, SS, void 0)), this.ignoreCameraMaxZ = ((0, Zr.m)(this, QS), (0, Zr.m)(this, ZS, !1)), this.customRenderTargets = ((0, Zr.m)(this, WS), []), this.outputRenderTarget = null, this.onViewMatrixChangedObservable = new jr.d, this.onProjectionMatrixChangedObservable = new jr.d, this.onAfterCheckInputsObservable = new jr.d, this.onRestoreStateObservable = new jr.d, this.isRigCamera = !1, this._hasMoved = !1, this._rigCameras = new Array, this._skipRendering = !1, this._projectionMatrix = new Ir.d, this._postProcesses = new Array, this._activeMeshes = new ar.h(256), this._globalPosition = Ir.u.Zero(), this._computedViewMatrix = Ir.d.Identity(), this._doNotComputeProjectionMatrix = !1, this._transformMatrix = Ir.d.Zero(), this._refreshFrustumPlanes = !0, this._absoluteRotation = Ir.h.Identity(), this._isCamera = !0, this._isLeftCamera = !1, this._isRightCamera = !1, this.layerMask = this.eC().defaultCameraLayerMask, this.eC().addCamera(this), fr && !this.eC().activeCamera && (this.eC().activeCamera = this), this.position = Qr, this.renderPassId = this.eC().MU().createRenderPassId(`Camera ${Sr}`)
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
          return "fz"
        }
        toString(rr) {
          let Sr = "Name: " + this.name;
          if (Sr += ", type: " + this.getClassName(), this.animations)
            for (let Qr = 0; Qr < this.animations.length; Qr++) Sr += ", animation[0]: " + this.animations[Qr].toString(rr);
          return Sr
        }
        applyVerticalCorrection() {
          const rr = this.absoluteRotation.toEulerAngles();
          this.projectionPlaneTilt = this._scene.useRightHandedSystem ? -rr.x : rr.x
        }
        get globalPosition() {
          return this._globalPosition
        }
        getActiveMeshes() {
          return this._activeMeshes
        }
        isActiveMesh(rr) {
          return -1 !== this._activeMeshes.indexOf(rr)
        }
        isReady() {
          let rr = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (rr)
            for (const Sr of this._postProcesses)
              if (Sr && !Sr.isReady()) return !1;
          return super.isReady(rr)
        }
        _initCache() {
          super._initCache(), this._cache.position = new Ir.u(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.upVector = new Ir.u(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.mode = void 0, this._cache.minZ = void 0, this._cache.maxZ = void 0, this._cache.fov = void 0, this._cache.fovMode = void 0, this._cache.aspectRatio = void 0, this._cache.orthoLeft = void 0, this._cache.orthoRight = void 0, this._cache.orthoBottom = void 0, this._cache.orthoTop = void 0, this._cache.obliqueAngle = void 0, this._cache.obliqueLength = void 0, this._cache.obliqueOffset = void 0, this._cache.renderWidth = void 0, this._cache.renderHeight = void 0
        }
        _updateCache(rr) {
          rr || super._updateCache(), this._cache.position.iH(this.position), this._cache.upVector.iH(this.upVector)
        }
        _isSynchronized() {
          return this._isSynchronizedViewMatrix() && this._isSynchronizedProjectionMatrix()
        }
        _isSynchronizedViewMatrix() {
          return !!super._isSynchronized() && (this._cache.position.equals(this.position) && this._cache.upVector.equals(this.upVector) && this.isSynchronizedWithParent())
        }
        _isSynchronizedProjectionMatrix() {
          const Sr = this.ignoreCameraMaxZ ? 0 : this.maxZ;
          let Qr = this._cache.mode === this.mode && this._cache.minZ === this.minZ && this._cache.maxZ === Sr;
          if (!Qr) return !1;
          const Zr = this.MU();
          return this.mode === rr.PERSPECTIVE_CAMERA ? Qr = this._cache.fov === this.fov && this._cache.fovMode === this.fovMode && this._cache.aspectRatio === Zr.getAspectRatio(this) && this._cache.projectionPlaneTilt === this.projectionPlaneTilt : (Qr = this._cache.orthoLeft === this.orthoLeft && this._cache.orthoRight === this.orthoRight && this._cache.orthoBottom === this.orthoBottom && this._cache.orthoTop === this.orthoTop && this._cache.renderWidth === Zr.getRenderWidth() && this._cache.renderHeight === Zr.getRenderHeight(), this.oblique && (Qr = Qr && this._cache.obliqueAngle === this.oblique.angle && this._cache.obliqueLength === this.oblique.length && this._cache.obliqueOffset === this.oblique.offset)), Qr
        }
        attachControl(rr, Sr) {}
        detachControl(rr) {}
        update() {
          this._hasMoved = !1, this._checkInputs(), this.cameraRigMode !== rr.RIG_MODE_NONE && this._updateRigCameras(), this.getViewMatrix(), this.getProjectionMatrix()
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
          for (let rr = 0; rr < this._postProcesses.length; rr++)
            if (null !== this._postProcesses[rr]) return this._postProcesses[rr];
          return null
        }
        _cascadePostProcessesToRigCams() {
          const rr = this._getFirstPostProcess();
          rr && rr.markTextureDirty();
          for (let Sr = 0, Qr = this._rigCameras.length; Sr < Qr; Sr++) {
            const rr = this._rigCameras[Sr],
              Qr = rr._rigPostProcess;
            if (Qr) {
              "pass" === Qr.getEffectName() && (rr.isIntermediate = 0 === this._postProcesses.length), rr._postProcesses = this._postProcesses.slice(0).concat(Qr), Qr.markTextureDirty()
            } else rr._postProcesses = this._postProcesses.slice(0)
          }
        }
        attachPostProcess(rr) {
          let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          return !rr.isReusable() && this._postProcesses.indexOf(rr) > -1 ? (Er.c.Error("You're trying to reuse a post process not defined as reusable."), 0) : (null == Sr || Sr < 0 ? this._postProcesses.push(rr) : null === this._postProcesses[Sr] ? this._postProcesses[Sr] = rr : this._postProcesses.splice(Sr, 0, rr), this._cascadePostProcessesToRigCams(), this._scene.prePassRenderer && this._scene.prePassRenderer.BQr(), this._postProcesses.indexOf(rr))
        }
        detachPostProcess(rr) {
          const Sr = this._postProcesses.indexOf(rr); - 1 !== Sr && (this._postProcesses[Sr] = null), this._scene.prePassRenderer && this._scene.prePassRenderer.BQr(), this._cascadePostProcessesToRigCams()
        }
        getWorldMatrix() {
          return this._isSynchronizedViewMatrix() || this.getViewMatrix(), this._worldMatrix
        }
        _getViewMatrix() {
          return Ir.d.Identity()
        }
        getViewMatrix(rr) {
          return !rr && this._isSynchronizedViewMatrix() || (this._hasMoved = !0, this.updateCache(), this._computedViewMatrix = this._getViewMatrix(), this._currentRenderId = this.eC().getRenderId(), this._childUpdateId++, this._refreshFrustumPlanes = !0, this._cameraRigParams && this._cameraRigParams.vrPreViewMatrix && this._computedViewMatrix.multiplyToRef(this._cameraRigParams.vrPreViewMatrix, this._computedViewMatrix), this.parent && this.parent.onViewMatrixChangedObservable && this.parent.onViewMatrixChangedObservable.notifyObservers(this.parent), this.onViewMatrixChangedObservable.notifyObservers(this), this._computedViewMatrix.invertToRef(this._worldMatrix), this._worldMatrix.getTranslationToRef(this._globalPosition)), this._computedViewMatrix
        }
        freezeProjectionMatrix(rr) {
          this._doNotComputeProjectionMatrix = !0, void 0 !== rr && (this._projectionMatrix = rr)
        }
        unfreezeProjectionMatrix() {
          this._doNotComputeProjectionMatrix = !1
        }
        getProjectionMatrix(Sr) {
          if (this._doNotComputeProjectionMatrix || !Sr && this._isSynchronizedProjectionMatrix()) return this._projectionMatrix;
          const Qr = this.ignoreCameraMaxZ ? 0 : this.maxZ;
          this._cache.mode = this.mode, this._cache.minZ = this.minZ, this._cache.maxZ = Qr, this._refreshFrustumPlanes = !0;
          const Zr = this.MU(),
            Wr = this.eC(),
            ar = Zr.JZr;
          if (this.mode === rr.PERSPECTIVE_CAMERA) {
            let Sr;
            this._cache.fov = this.fov, this._cache.fovMode = this.fovMode, this._cache.aspectRatio = Zr.getAspectRatio(this), this._cache.projectionPlaneTilt = this.projectionPlaneTilt, this.minZ <= 0 && (this.minZ = .1), Sr = Wr.useRightHandedSystem ? Ir.d.PerspectiveFovRHToRef : Ir.d.PerspectiveFovLHToRef, Sr(this.fov, Zr.getAspectRatio(this), ar ? Qr : this.minZ, ar ? this.minZ : Qr, this._projectionMatrix, this.fovMode === rr.FOVMODE_VERTICAL_FIXED, Zr.isNDCHalfZRange, this.projectionPlaneTilt, ar)
          } else {
            const rr = Zr.getRenderWidth() / 2,
              Sr = Zr.getRenderHeight() / 2;
            Wr.useRightHandedSystem ? this.oblique ? Ir.d.ObliqueOffCenterRHToRef(this.orthoLeft ?? -rr, this.orthoRight ?? rr, this.orthoBottom ?? -Sr, this.orthoTop ?? Sr, ar ? Qr : this.minZ, ar ? this.minZ : Qr, this.oblique.length, this.oblique.angle, this._computeObliqueDistance(this.oblique.offset), this._projectionMatrix, Zr.isNDCHalfZRange) : Ir.d.OrthoOffCenterRHToRef(this.orthoLeft ?? -rr, this.orthoRight ?? rr, this.orthoBottom ?? -Sr, this.orthoTop ?? Sr, ar ? Qr : this.minZ, ar ? this.minZ : Qr, this._projectionMatrix, Zr.isNDCHalfZRange) : this.oblique ? Ir.d.ObliqueOffCenterLHToRef(this.orthoLeft ?? -rr, this.orthoRight ?? rr, this.orthoBottom ?? -Sr, this.orthoTop ?? Sr, ar ? Qr : this.minZ, ar ? this.minZ : Qr, this.oblique.length, this.oblique.angle, this._computeObliqueDistance(this.oblique.offset), this._projectionMatrix, Zr.isNDCHalfZRange) : Ir.d.OrthoOffCenterLHToRef(this.orthoLeft ?? -rr, this.orthoRight ?? rr, this.orthoBottom ?? -Sr, this.orthoTop ?? Sr, ar ? Qr : this.minZ, ar ? this.minZ : Qr, this._projectionMatrix, Zr.isNDCHalfZRange), this._cache.orthoLeft = this.orthoLeft, this._cache.orthoRight = this.orthoRight, this._cache.orthoBottom = this.orthoBottom, this._cache.orthoTop = this.orthoTop, this._cache.obliqueAngle = this.oblique?.angle, this._cache.obliqueLength = this.oblique?.length, this._cache.obliqueOffset = this.oblique?.offset, this._cache.renderWidth = Zr.getRenderWidth(), this._cache.renderHeight = Zr.getRenderHeight()
          }
          return this.onProjectionMatrixChangedObservable.notifyObservers(this), this._projectionMatrix
        }
        getTransformationMatrix() {
          return this._computedViewMatrix.multiplyToRef(this._projectionMatrix, this._transformMatrix), this._transformMatrix
        }
        _computeObliqueDistance(rr) {
          return (this.radius || (this.target ? Ir.u.Distance(this.position, this.target) : this.position.length())) + rr
        }
        _updateFrustumPlanes() {
          this._refreshFrustumPlanes && (this.getTransformationMatrix(), this._frustumPlanes ? Nr.b.GetPlanesToRef(this._transformMatrix, this._frustumPlanes) : this._frustumPlanes = Nr.b.GetPlanes(this._transformMatrix), this._refreshFrustumPlanes = !1)
        }
        isInFrustum(rr) {
          let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._updateFrustumPlanes(), Sr && this.rigCameras.length > 0) {
            let Sr = !1;
            for (const Qr of this.rigCameras) Qr._updateFrustumPlanes(), Sr = Sr || rr.isInFrustum(Qr._frustumPlanes);
            return Sr
          }
          return rr.isInFrustum(this._frustumPlanes)
        }
        isCompletelyInFrustum(rr) {
          return this._updateFrustumPlanes(), rr.isCompletelyInFrustum(this._frustumPlanes)
        }
        getForwardRay() {
          throw (0, xr.l)("Ray")
        }
        getForwardRayToRef(rr) {
          throw (0, xr.l)("Ray")
        }
        dispose(Sr) {
          let Qr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          for (this.onViewMatrixChangedObservable.clear(), this.onProjectionMatrixChangedObservable.clear(), this.onAfterCheckInputsObservable.clear(), this.onRestoreStateObservable.clear(), this.inputs && this.inputs.clear(), this.eC().stopAnimation(this), this.eC().removeCamera(this); this._rigCameras.length > 0;) {
            const rr = this._rigCameras.pop();
            rr && rr.dispose()
          }
          if (this._parentContainer) {
            const rr = this._parentContainer.cameras.indexOf(this);
            rr > -1 && this._parentContainer.cameras.splice(rr, 1), this._parentContainer = null
          }
          if (this._rigPostProcess) this._rigPostProcess.dispose(this), this._rigPostProcess = null, this._postProcesses.length = 0;
          else if (this.cameraRigMode !== rr.RIG_MODE_NONE) this._rigPostProcess = null, this._postProcesses.length = 0;
          else {
            let rr = this._postProcesses.length;
            for (; --rr >= 0;) {
              const Sr = this._postProcesses[rr];
              Sr && Sr.dispose(this)
            }
          }
          let Zr = this.customRenderTargets.length;
          for (; --Zr >= 0;) this.customRenderTargets[Zr].dispose();
          this.customRenderTargets.length = 0, this._activeMeshes.dispose(), this.eC().MU().releaseRenderPassId(this.renderPassId), super.dispose(Sr, Qr)
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
        setCameraRigMode(Sr, Qr) {
          if (this.cameraRigMode !== Sr) {
            for (; this._rigCameras.length > 0;) {
              const rr = this._rigCameras.pop();
              rr && rr.dispose()
            }
            if (this.cameraRigMode = Sr, this._cameraRigParams = {}, this._cameraRigParams.interaxialDistance = Qr.interaxialDistance || .0637, this._cameraRigParams.stereoHalfAngle = this._cameraRigParams.interaxialDistance / .0637 * (Math.PI / 180), this.cameraRigMode !== rr.RIG_MODE_NONE) {
              const rr = this.createRigCamera(this.name + "_L", 0);
              rr && (rr._isLeftCamera = !0);
              const Sr = this.createRigCamera(this.name + "_R", 1);
              Sr && (Sr._isRightCamera = !0), rr && Sr && (this._rigCameras.push(rr), this._rigCameras.push(Sr))
            }
            this._setRigMode(Qr), this._cascadePostProcessesToRigCams(), this.update()
          }
        }
        _setRigMode(rr) {}
        _getVRProjectionMatrix() {
          return Ir.d.PerspectiveFovLHToRef(this._cameraRigParams.vrMetrics.aspectRatioFov, this._cameraRigParams.vrMetrics.aspectRatio, this.minZ, this.ignoreCameraMaxZ ? 0 : this.maxZ, this._cameraRigParams.vrWorkMatrix, !0, this.MU().isNDCHalfZRange), this._cameraRigParams.vrWorkMatrix.multiplyToRef(this._cameraRigParams.vrHMatrix, this._projectionMatrix), this._projectionMatrix
        }
        setCameraRigParameter(rr, Sr) {
          this._cameraRigParams || (this._cameraRigParams = {}), this._cameraRigParams[rr] = Sr, "interaxialDistance" === rr && (this._cameraRigParams.stereoHalfAngle = Sr / .0637 * (Math.PI / 180))
        }
        createRigCamera(rr, Sr) {
          return null
        }
        _updateRigCameras() {
          for (let rr = 0; rr < this._rigCameras.length; rr++) this._rigCameras[rr].minZ = this.minZ, this._rigCameras[rr].maxZ = this.ignoreCameraMaxZ ? 0 : this.maxZ, this._rigCameras[rr].fov = this.fov, this._rigCameras[rr].upVector.iH(this.upVector);
          this.cameraRigMode === rr.RIG_MODE_STEREOSCOPIC_ANAGLYPH && (this._rigCameras[0].viewport = this._rigCameras[1].viewport = this.viewport)
        }
        _setupInputs() {}
        serialize() {
          const rr = tr.e.Serialize(this);
          return rr.uniqueId = this.uniqueId, rr.type = this.getClassName(), this.parent && this.parent._serializeAsParent(rr), this.inputs && this.inputs.serialize(rr), tr.e.AppendSerializedAnimations(this, rr), rr.yh = this.serializeAnimationRanges(), rr.isEnabled = this.isEnabled(), rr
        }
        clone(Sr) {
          let Qr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const Zr = tr.e.Clone(rr.GetConstructorFromName(this.getClassName(), Sr, this.eC(), this.interaxialDistance, this.isStereoscopicSideBySide), this);
          return Zr.name = Sr, Zr.parent = Qr, this.onClonedObservable.notifyObservers(Zr), Zr
        }
        Y1(rr) {
          const Sr = Ir.u.Zero();
          return this.getDirectionToRef(rr, Sr), Sr
        }
        get absoluteRotation() {
          return this.getWorldMatrix().decompose(void 0, this._absoluteRotation), this._absoluteRotation
        }
        getDirectionToRef(rr, Sr) {
          Ir.u.TransformNormalToRef(rr, this.getWorldMatrix(), Sr)
        }
        static GetConstructorFromName(Sr, Qr, Zr) {
          let Wr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
            ar = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
          const jr = fr.c.Construct(Sr, Qr, Zr, {
            interaxial_distance: Wr,
            isStereoscopicSideBySide: ar
          });
          return jr || (() => rr._CreateDefaultParsedCamera(Qr, Zr))
        }
        computeWorldMatrix() {
          return this.getWorldMatrix()
        }
        _calculateHandednessMultiplier() {
          let rr = this.eC().useRightHandedSystem ? -1 : 1;
          return this.parent && this.parent._getWorldMatrixDeterminant() < 0 && (rr *= -1), rr
        }
      }, (() => {
        const ar = "function" === typeof Symbol && Symbol.metadata ? Object.create(Hr[Symbol.metadata] ?? null) : void 0;
        Sr = [(0, Wr.C)("position")], Qr = [(0, Wr.C)("upVector")], pr = [(0, Wr.G)()], hr = [(0, Wr.G)()], zr = [(0, Wr.G)()], Yr = [(0, Wr.G)()], nr = [(0, Wr.G)()], er = [(0, Wr.G)()], Kr = [(0, Wr.G)()], yr = [(0, Wr.G)()], Br = [(0, Wr.G)()], Tr = [(0, Wr.G)()], vr = [(0, Wr.G)()], Or = [(0, Wr.G)()], Lr = [(0, Wr.G)()], lr = [(0, Wr.G)()], Xr = [(0, Wr.G)()], Pr = [(0, Wr.G)()], (0, Zr.k)(rr, null, pr, {
          kind: "getter",
          name: "orthoLeft",
          static: !1,
          private: !1,
          access: {
            has: rr => "orthoLeft" in rr,
            get: rr => rr.orthoLeft
          },
          metadata: ar
        }, null, qr), (0, Zr.k)(rr, null, hr, {
          kind: "getter",
          name: "orthoRight",
          static: !1,
          private: !1,
          access: {
            has: rr => "orthoRight" in rr,
            get: rr => rr.orthoRight
          },
          metadata: ar
        }, null, qr), (0, Zr.k)(rr, null, zr, {
          kind: "getter",
          name: "orthoBottom",
          static: !1,
          private: !1,
          access: {
            has: rr => "orthoBottom" in rr,
            get: rr => rr.orthoBottom
          },
          metadata: ar
        }, null, qr), (0, Zr.k)(rr, null, Yr, {
          kind: "getter",
          name: "orthoTop",
          static: !1,
          private: !1,
          access: {
            has: rr => "orthoTop" in rr,
            get: rr => rr.orthoTop
          },
          metadata: ar
        }, null, qr), (0, Zr.k)(rr, null, Br, {
          kind: "getter",
          name: "inertia",
          static: !1,
          private: !1,
          access: {
            has: rr => "inertia" in rr,
            get: rr => rr.inertia
          },
          metadata: ar
        }, null, qr), (0, Zr.k)(rr, null, Tr, {
          kind: "getter",
          name: "mode",
          static: !1,
          private: !1,
          access: {
            has: rr => "mode" in rr,
            get: rr => rr.mode
          },
          metadata: ar
        }, null, qr), (0, Zr.k)(null, null, Sr, {
          kind: "field",
          name: "_position",
          static: !1,
          private: !1,
          access: {
            has: rr => "_position" in rr,
            get: rr => rr._position,
            set: (rr, Sr) => {
              rr._position = Sr
            }
          },
          metadata: ar
        }, Rr, gr), (0, Zr.k)(null, null, Qr, {
          kind: "field",
          name: "_upVector",
          static: !1,
          private: !1,
          access: {
            has: rr => "_upVector" in rr,
            get: rr => rr._upVector,
            set: (rr, Sr) => {
              rr._upVector = Sr
            }
          },
          metadata: ar
        }, Cr, Mr), (0, Zr.k)(null, null, nr, {
          kind: "field",
          name: "fov",
          static: !1,
          private: !1,
          access: {
            has: rr => "fov" in rr,
            get: rr => rr.fov,
            set: (rr, Sr) => {
              rr.fov = Sr
            }
          },
          metadata: ar
        }, Gr, kr), (0, Zr.k)(null, null, er, {
          kind: "field",
          name: "projectionPlaneTilt",
          static: !1,
          private: !1,
          access: {
            has: rr => "projectionPlaneTilt" in rr,
            get: rr => rr.projectionPlaneTilt,
            set: (rr, Sr) => {
              rr.projectionPlaneTilt = Sr
            }
          },
          metadata: ar
        }, Ar, Vr), (0, Zr.k)(null, null, Kr, {
          kind: "field",
          name: "minZ",
          static: !1,
          private: !1,
          access: {
            has: rr => "minZ" in rr,
            get: rr => rr.minZ,
            set: (rr, Sr) => {
              rr.minZ = Sr
            }
          },
          metadata: ar
        }, ir, wr), (0, Zr.k)(null, null, yr, {
          kind: "field",
          name: "maxZ",
          static: !1,
          private: !1,
          access: {
            has: rr => "maxZ" in rr,
            get: rr => rr.maxZ,
            set: (rr, Sr) => {
              rr.maxZ = Sr
            }
          },
          metadata: ar
        }, cr, Fr), (0, Zr.k)(null, null, vr, {
          kind: "field",
          name: "layerMask",
          static: !1,
          private: !1,
          access: {
            has: rr => "layerMask" in rr,
            get: rr => rr.layerMask,
            set: (rr, Sr) => {
              rr.layerMask = Sr
            }
          },
          metadata: ar
        }, or, br), (0, Zr.k)(null, null, Or, {
          kind: "field",
          name: "fovMode",
          static: !1,
          private: !1,
          access: {
            has: rr => "fovMode" in rr,
            get: rr => rr.fovMode,
            set: (rr, Sr) => {
              rr.fovMode = Sr
            }
          },
          metadata: ar
        }, Jr, Dr), (0, Zr.k)(null, null, Lr, {
          kind: "field",
          name: "cameraRigMode",
          static: !1,
          private: !1,
          access: {
            has: rr => "cameraRigMode" in rr,
            get: rr => rr.cameraRigMode,
            set: (rr, Sr) => {
              rr.cameraRigMode = Sr
            }
          },
          metadata: ar
        }, dr, sr), (0, Zr.k)(null, null, lr, {
          kind: "field",
          name: "interaxialDistance",
          static: !1,
          private: !1,
          access: {
            has: rr => "interaxialDistance" in rr,
            get: rr => rr.interaxialDistance,
            set: (rr, Sr) => {
              rr.interaxialDistance = Sr
            }
          },
          metadata: ar
        }, ur, rS), (0, Zr.k)(null, null, Xr, {
          kind: "field",
          name: "isStereoscopicSideBySide",
          static: !1,
          private: !1,
          access: {
            has: rr => "isStereoscopicSideBySide" in rr,
            get: rr => rr.isStereoscopicSideBySide,
            set: (rr, Sr) => {
              rr.isStereoscopicSideBySide = Sr
            }
          },
          metadata: ar
        }, SS, QS), (0, Zr.k)(null, null, Pr, {
          kind: "field",
          name: "ignoreCameraMaxZ",
          static: !1,
          private: !1,
          access: {
            has: rr => "ignoreCameraMaxZ" in rr,
            get: rr => rr.ignoreCameraMaxZ,
            set: (rr, Sr) => {
              rr.ignoreCameraMaxZ = Sr
            }
          },
          metadata: ar
        }, ZS, WS), ar && Object.defineProperty(rr, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: ar
        })
      })(), rr._CreateDefaultParsedCamera = (rr, Sr) => {
        throw (0, xr.l)("UniversalCamera")
      }, rr.PERSPECTIVE_CAMERA = 0, rr.ORTHOGRAPHIC_CAMERA = 1, rr.FOVMODE_VERTICAL_FIXED = 0, rr.FOVMODE_HORIZONTAL_FIXED = 1, rr.RIG_MODE_NONE = 0, rr.RIG_MODE_STEREOSCOPIC_ANAGLYPH = 10, rr.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL = 11, rr.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED = 12, rr.RIG_MODE_STEREOSCOPIC_OVERUNDER = 13, rr.RIG_MODE_STEREOSCOPIC_INTERLACED = 14, rr.RIG_MODE_VR = 20, rr.RIG_MODE_CUSTOM = 22, rr.ForceAttachControlToAlwaysPreventDefault = !1, rr
    })();

    function zr(rr, Sr) {
      const Qr = rr.type,
        Zr = hr.GetConstructorFromName(Qr, rr.name, Sr, rr.interaxial_distance, rr.isStereoscopicSideBySide),
        Wr = tr.e.Parse(Zr, rr, Sr);
      if (void 0 !== rr.parentId && (Wr._waitingParentId = rr.parentId), void 0 !== rr.parentInstanceIndex && (Wr._waitingParentInstanceIndex = rr.parentInstanceIndex), Wr.inputs && (Wr.inputs.parse(rr), Wr._setupInputs()), rr.upVector && (Wr.upVector = Ir.u.FromArray(rr.upVector)), Wr.setPosition && (Wr.position.Hrr(0, 0, 0), Wr.setPosition(Ir.u.FromArray(rr.position))), rr.target && Wr.setTarget && Wr.setTarget(Ir.u.FromArray(rr.target)), rr.cameraRigMode) {
        const Sr = rr.interaxial_distance ? {
          interaxialDistance: rr.interaxial_distance
        } : {};
        Wr.setCameraRigMode(rr.cameraRigMode, Sr)
      }
      if (rr.animations) {
        for (let Sr = 0; Sr < rr.animations.length; Sr++) {
          const Qr = rr.animations[Sr],
            Zr = (0, pr.d)("BABYLON.Animation");
          Zr && Wr.animations.push(Zr.Parse(Qr))
        }
        fr.c.ParseAnimationRanges(Wr, rr, Sr)
      }
      return rr.autoAnimate && Sr.beginAnimation(Wr, rr.autoAnimateFrom, rr.autoAnimateTo, rr.autoAnimateLoop, rr.autoAnimateSpeed || 1), void 0 !== rr.isEnabled && Wr.VK(rr.isEnabled), Wr
    }
    let Yr = !1;

    function nr() {
      Yr || (Yr = !0, hr.Parse = zr)
    }
  },
  42073: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Wr
    });
    var Zr = Qr(38560);
    class Wr {
      constructor(rr, Sr, Qr) {
        this._cameraPosition = Sr, this._behavior = Qr, this.activeInput = !1, this.speed = 1, this.HJ = 1, this.panSpeed = 1, this.rotationXSpeed = 1, this.rotationYSpeed = 1, this._zoomSpeedMultiplier = 1, this._panSpeedMultiplier = 1, this.zoomInertia = .9, this.panInertia = .9, this.rotationInertia = .9, this.zoomAccumulatedPixels = 0, this.panAccumulatedPixels = new Zr.u, this.rotationAccumulatedPixels = new Zr.u, this.zoomDeltaCurrentFrame = 0, this.panDeltaCurrentFrame = Zr.u.Zero(), this.rotationDeltaCurrentFrame = Zr.u.Zero(), this._zoomVelocity = 0, this._panVelocity = new Zr.u, this.referenceFrameRate = 60, this._rotationVelocity = new Zr.u, this._prevFrameTimeMs = 0, this._scene = rr
      }
      computeCurrentFrameDeltas() {
        const rr = this._scene.MU().getDeltaTime(),
          Sr = this._getEffectiveDeltaMs(rr);
        if (0 === this._zoomVelocity && 0 === this.zoomAccumulatedPixels && 0 === this._panVelocity.x && 0 === this._panVelocity.y && 0 === this._panVelocity.z && 0 === this.panAccumulatedPixels.x && 0 === this.panAccumulatedPixels.y && 0 === this.panAccumulatedPixels.z && 0 === this._rotationVelocity.x && 0 === this._rotationVelocity.y && 0 === this._rotationVelocity.z && 0 === this.rotationAccumulatedPixels.x && 0 === this.rotationAccumulatedPixels.y && 0 === this.rotationAccumulatedPixels.z && !this.activeInput) return this.panDeltaCurrentFrame.Srr(0), this.rotationDeltaCurrentFrame.Srr(0), this.zoomDeltaCurrentFrame = 0, void(rr > 0 && (this._prevFrameTimeMs = rr));
        this.panDeltaCurrentFrame.Srr(0), this.rotationDeltaCurrentFrame.Srr(0), this.zoomDeltaCurrentFrame = 0;
        (this.panAccumulatedPixels.lengthSquared() > 0 || this.rotationAccumulatedPixels.lengthSquared() > 0 || 0 !== this.zoomAccumulatedPixels) && this._behavior?.isInterpolating && this._behavior.stopAllAnimations(), this._panVelocity.Hrr(this._calculateCurrentVelocity(this._panVelocity.x, this.panAccumulatedPixels.x, this.panInertia), this._calculateCurrentVelocity(this._panVelocity.y, this.panAccumulatedPixels.y, this.panInertia), this._calculateCurrentVelocity(this._panVelocity.z, this.panAccumulatedPixels.z, this.panInertia)), this._panVelocity.scaleToRef(this.speed * this.panSpeed * this._panSpeedMultiplier * Sr, this.panDeltaCurrentFrame), this._rotationVelocity.Hrr(this._calculateCurrentVelocity(this._rotationVelocity.x, this.rotationAccumulatedPixels.x, this.rotationInertia), this._calculateCurrentVelocity(this._rotationVelocity.y, this.rotationAccumulatedPixels.y, this.rotationInertia), this._calculateCurrentVelocity(this._rotationVelocity.z, this.rotationAccumulatedPixels.z, this.rotationInertia)), this.rotationDeltaCurrentFrame.Hrr(this._rotationVelocity.x * this.speed * this.rotationXSpeed * Sr, this._rotationVelocity.y * this.speed * this.rotationYSpeed * Sr, 0), this._zoomVelocity = this._calculateCurrentVelocity(this._zoomVelocity, this.zoomAccumulatedPixels, this.zoomInertia), this.zoomDeltaCurrentFrame = this._zoomVelocity * (this.speed * this.HJ * this._zoomSpeedMultiplier) * Sr, rr > 0 && (this._prevFrameTimeMs = rr), this.zoomAccumulatedPixels = 0, this.panAccumulatedPixels.Srr(0), this.rotationAccumulatedPixels.Srr(0), this.activeInput = !1
      }
      resetRotationVelocity() {
        this._rotationVelocity.Srr(0), this.rotationAccumulatedPixels.Srr(0)
      }
      resetPanVelocity() {
        this._panVelocity.Srr(0), this.panAccumulatedPixels.Srr(0)
      }
      resetZoomVelocity() {
        this._zoomVelocity = 0, this.zoomAccumulatedPixels = 0
      }
      get isInterpolating() {
        return !!this._behavior?.isInterpolating
      }
      getFrameIndependentDecay(rr) {
        const Sr = this._scene.MU().getDeltaTime(),
          Qr = this._getEffectiveDeltaMs(Sr),
          Zr = 1e3 / this.referenceFrameRate;
        return Math.pow(rr, Qr / Zr)
      }
      getFrameIndependentInputScale(rr) {
        const Sr = 1 - rr;
        if (Sr <= 0) return 1;
        return (1 - this.getFrameIndependentDecay(rr)) / Sr
      }
      _getEffectiveDeltaMs(rr) {
        return rr > 0 ? rr : this._prevFrameTimeMs > 0 ? this._prevFrameTimeMs : 1e3 / this.referenceFrameRate
      }
      _calculateCurrentVelocity(rr, Sr, Qr) {
        let Zr = rr;
        const Wr = this._scene.MU().getDeltaTime(),
          ar = this._getEffectiveDeltaMs(Wr);
        if (0 === ar) return Zr;
        const jr = this.getFrameIndependentDecay(Qr);
        if (Zr *= jr, 0 !== Sr || this.activeInput) {
          const rr = 1 - Qr;
          Zr += Sr / ar * (rr > 0 ? (1 - jr) / rr : 1)
        } else Math.abs(Zr) < 1e-6 && (Zr = 0);
        return Zr
      }
    }
  },
  42075: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => Zr
    });
    class Zr {
      constructor(rr, Sr) {
        this.inputMap = [], this.handlers = rr, this._createDefaultEntries = Sr, this.resetInputMap()
      }
      resolveInteraction(rr, Sr) {
        for (const Qr of this.inputMap)
          if (Qr.source === rr && this._entryMatches(Qr, Sr)) return Qr;
        return null
      }
      resetInputMap() {
        this.inputMap = this._createDefaultEntries?.() ?? []
      }
      getEntry(rr, Sr, Qr) {
        const Zr = this.inputMap;
        for (let Wr = 0; Wr < Zr.length; Wr++) {
          const ar = Zr[Wr];
          if (ar.source === rr && ar.interaction === Sr && this._entryConditionsMatch(ar, Qr)) return ar
        }
      }
      getEntries(rr, Sr, Qr) {
        const Zr = [],
          Wr = this.inputMap;
        for (let ar = 0; ar < Wr.length; ar++) {
          const jr = Wr[ar];
          jr.source === rr && jr.interaction === Sr && this._entryConditionsMatch(jr, Qr) && Zr.push(jr)
        }
        return Zr
      }
      addEntry(rr) {
        const Sr = this._entrySpecificity(rr);
        let Qr = this.inputMap.length;
        for (let Zr = 0; Zr < this.inputMap.length; Zr++)
          if (this._entrySpecificity(this.inputMap[Zr]) < Sr) {
            Qr = Zr;
            break
          } this.inputMap.splice(Qr, 0, rr)
      }
      setInteraction(rr, Sr, Qr) {
        const Zr = this.resolveInteraction(rr, Sr);
        return Zr && this._entryCoversAllConditionsOf(Zr, Sr) ? (Zr.interaction = Qr, !0) : (this.addEntry({
          source: rr,
          ...Sr ?? {},
          interaction: Qr
        }), !0)
      }
      _entryCoversAllConditionsOf(rr, Sr) {
        if (!Sr) return !0;
        const Qr = rr;
        for (const Zr of Object.keys(Sr)) {
          const rr = Sr[Zr];
          if (void 0 !== rr)
            if ("modifiers" === Zr) {
              const Sr = Qr.modifiers ?? {};
              for (const Qr of Object.keys(rr))
                if (void 0 !== rr[Qr] && void 0 === Sr[Qr]) return !1
            } else if (void 0 === Qr[Zr]) return !1
        }
        return !0
      }
      setInteractions(rr, Sr, Qr) {
        let Zr = 0;
        const Wr = this.inputMap;
        for (let ar = 0; ar < Wr.length; ar++) {
          const jr = Wr[ar];
          jr.source === rr && this._entryMatches(jr, Sr) && (jr.interaction = Qr, Zr++)
        }
        return Zr
      }
      _entryMatches(rr, Sr) {
        switch (rr.source) {
          case "pointer":
            return (void 0 === rr.button || rr.button === Sr?.button) && this._matchModifiers(rr.modifiers, Sr?.modifiers);
          case "wheel":
            return this._matchModifiers(rr.modifiers, Sr?.modifiers);
          case "touch":
            return void 0 === rr.touchCount || rr.touchCount === Sr?.touchCount;
          case "keyboard":
            return (void 0 === rr.key || (Array.isArray(rr.key) ? -1 !== rr.key.indexOf(Sr?.key ?? -1) : rr.key === Sr?.key)) && this._matchModifiers(rr.modifiers, Sr?.modifiers)
        }
      }
      _entryConditionsMatch(rr, Sr) {
        if (!Sr) return !0;
        switch (rr.source) {
          case "pointer":
            return (!("button" in Sr) || rr.button === Sr.button) && (!("modifiers" in Sr) || this._entryModifiersMatch(rr.modifiers, Sr.modifiers));
          case "wheel":
            return !("modifiers" in Sr) || this._entryModifiersMatch(rr.modifiers, Sr.modifiers);
          case "touch":
            return !("touchCount" in Sr) || rr.touchCount === Sr.touchCount;
          case "keyboard":
            if ("key" in Sr) {
              if (void 0 === rr.key) return void 0 === Sr.key;
              if (void 0 === Sr.key || (Array.isArray(rr.key) ? -1 === rr.key.indexOf(Sr.key) : rr.key !== Sr.key)) return !1
            }
            return !("modifiers" in Sr) || this._entryModifiersMatch(rr.modifiers, Sr.modifiers)
        }
      }
      _entrySpecificity(rr) {
        let Sr = 0;
        return "button" in rr && void 0 !== rr.button && Sr++, "key" in rr && void 0 !== rr.key && Sr++, "touchCount" in rr && void 0 !== rr.touchCount && Sr++, "modifiers" in rr && rr.modifiers && Sr++, Sr
      }
      _matchModifiers(rr, Sr) {
        return !rr || (void 0 === rr.ctrl || rr.ctrl === (Sr?.ctrl ?? !1)) && ((void 0 === rr.shift || rr.shift === (Sr?.shift ?? !1)) && (void 0 === rr.alt || rr.alt === (Sr?.alt ?? !1)))
      }
      _entryModifiersMatch(rr, Sr) {
        if (!Sr) return !rr;
        return void 0 !== Sr.ctrl || void 0 !== Sr.shift || void 0 !== Sr.alt ? (void 0 === Sr.ctrl || rr?.ctrl === Sr.ctrl) && ((void 0 === Sr.shift || rr?.shift === Sr.shift) && (void 0 === Sr.alt || rr?.alt === Sr.alt)) : !rr || void 0 === rr.ctrl && void 0 === rr.shift && void 0 === rr.alt
      }
    }
  },
  42052: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => zr,
      f: () => tr
    });
    var Zr = Qr(41872),
      Wr = Qr(41875),
      ar = Qr(42057),
      jr = Qr(38560),
      Ir = Qr(38569),
      fr = Qr(42069),
      Er = Qr(42060),
      pr = Qr(42073),
      xr = Qr(42075);
    class mr extends pr.d {
      constructor(rr, Sr, Qr) {
        super(rr, Sr, Qr), this.input = new xr.e({
          translate: (rr, Sr, Qr) => {
            this.panAccumulatedPixels.x += rr, this.panAccumulatedPixels.y += Sr, this.panAccumulatedPixels.z += Qr
          },
          rotate: (rr, Sr) => {
            this.rotationAccumulatedPixels.x += rr, this.rotationAccumulatedPixels.y += Sr
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
    const Nr = jr.d.Zero(),
      Ur = jr.h.Identity();
    let tr = (() => {
        var rr;
        let Sr, Qr, Er, pr, xr = ar.d,
          tr = [],
          hr = [],
          zr = [],
          Yr = [],
          nr = [],
          er = [],
          Kr = [],
          yr = [];
        return rr = class extends xr {
          get inertia() {
            return this._targetInertia
          }
          set inertia(rr) {
            this._targetInertia = rr, this.movement && (this.movement.panInertia = rr, this.movement.rotationInertia = rr)
          }
          constructor(rr, Sr, Qr) {
            super(rr, Sr, Qr, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]), this.cameraDirection = new jr.u(0, 0, 0), this.cameraRotation = new jr.q(0, 0), this._targetInertia = .9, this.updateUpVectorFromRotation = (0, Zr.m)(this, tr, !1), this.rotation = ((0, Zr.m)(this, hr), (0, Zr.m)(this, zr, void 0)), this.rotationQuaternion = (0, Zr.m)(this, Yr), this.speed = (0, Zr.m)(this, nr, 2), this.noRotationConstraint = ((0, Zr.m)(this, er), !1), this.invertRotation = !1, this.inverseRotationSpeed = .2, this._panningEpsilon = Ir.e, this._rotationEpsilon = Ir.e, this.lockedTarget = (0, Zr.m)(this, Kr, null), this._currentTarget = ((0, Zr.m)(this, yr), jr.u.Zero()), this._initialFocalDistance = 1, this._viewMatrix = jr.d.Zero(), this._cameraTransformMatrix = jr.d.Zero(), this._cameraRotationMatrix = jr.d.Zero(), this._transformedReferencePoint = jr.u.Zero(), this._deferredPositionUpdate = new jr.u, this._deferredRotationQuaternionUpdate = new jr.h, this._deferredRotationUpdate = new jr.u, this._deferredUpdated = !1, this._deferOnly = !1, this._cachedRotationZ = 0, this._cachedQuaternionRotationZ = 0, this._referencePoint = jr.u.Forward(this.eC().useRightHandedSystem), this.rotation = new jr.u(0, this.eC().useRightHandedSystem ? Math.PI : 0, 0), this.movement = new mr(this.eC(), this.position), this.movement.panInertia = this.inertia, this.movement.rotationInertia = this.inertia
          }
          getFrontPosition(rr) {
            this.getWorldMatrix();
            const Sr = jr.n.kU[0],
              Qr = jr.n.kU[1];
            return Qr.set(0, 0, this._scene.useRightHandedSystem ? -1 : 1), this.getDirectionToRef(Qr, Sr), Sr.scaleInPlace(rr), this.globalPosition.add(Sr)
          }
          _getLockedTargetPosition() {
            if (!this.lockedTarget) return null;
            if (this.lockedTarget.absolutePosition) {
              const rr = this.lockedTarget;
              rr.computeWorldMatrix().getTranslationToRef(rr.absolutePosition)
            }
            return this.lockedTarget.absolutePosition || this.lockedTarget
          }
          storeState() {
            return this._storedPosition = this.position.clone(), this._storedRotation = this.rotation.clone(), this.rotationQuaternion && (this._storedRotationQuaternion = this.rotationQuaternion.clone()), super.storeState()
          }
          _restoreStateValues() {
            return !!super._restoreStateValues() && (this.position = this._storedPosition.clone(), this.rotation = this._storedRotation.clone(), this.rotationQuaternion && this._storedRotationQuaternion && (this.rotationQuaternion = this._storedRotationQuaternion.clone()), this.cameraDirection.Hrr(0, 0, 0), this.cameraRotation.Hrr(0, 0), !0)
          }
          _initCache() {
            super._initCache(), this._cache.lockedTarget = new jr.u(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.rotation = new jr.u(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.rotationQuaternion = new jr.h(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE)
          }
          _updateCache(rr) {
            rr || super._updateCache();
            const Sr = this._getLockedTargetPosition();
            Sr ? this._cache.lockedTarget ? this._cache.lockedTarget.iH(Sr) : this._cache.lockedTarget = Sr.clone() : this._cache.lockedTarget = null, this._cache.rotation.iH(this.rotation), this.rotationQuaternion && this._cache.rotationQuaternion.iH(this.rotationQuaternion)
          }
          _isSynchronizedViewMatrix() {
            if (!super._isSynchronizedViewMatrix()) return !1;
            const rr = this._getLockedTargetPosition();
            return (this._cache.lockedTarget ? this._cache.lockedTarget.equals(rr) : !rr) && (this.rotationQuaternion ? this.rotationQuaternion.equals(this._cache.rotationQuaternion) : this._cache.rotation.equals(this.rotation))
          }
          _computeLocalCameraSpeed() {
            const rr = this.MU();
            return this.speed * Math.sqrt(rr.getDeltaTime() / (100 * rr.getFps()))
          }
          setTarget(rr) {
            this.upVector.normalize(), this._initialFocalDistance = rr.subtract(this.position).length(), this.position.z === rr.z && (this.position.z += Ir.e), this._referencePoint.normalize().scaleInPlace(this._initialFocalDistance), this.eC().useRightHandedSystem ? jr.d.LookAtRHToRef(this.position, rr, jr.u.UpReadOnly, Nr) : jr.d.LookAtLHToRef(this.position, rr, jr.u.UpReadOnly, Nr), Nr.invert();
            const Sr = this.rotationQuaternion || Ur;
            jr.h.FromRotationMatrixToRef(Nr, Sr), Sr.toEulerAnglesToRef(this.rotation), this.rotation.z = 0
          }
          get target() {
            return this.getTarget()
          }
          set target(rr) {
            this.setTarget(rr)
          }
          getTarget() {
            return this._currentTarget
          }
          _decideIfNeedsToMove() {
            return Math.abs(this.cameraDirection.x) > 0 || Math.abs(this.cameraDirection.y) > 0 || Math.abs(this.cameraDirection.z) > 0
          }
          _updatePosition() {
            if (this.parent) return this.parent.getWorldMatrix().invertToRef(jr.n.Matrix[0]), jr.u.TransformNormalToRef(this.cameraDirection, jr.n.Matrix[0], jr.n.kU[0]), this._deferredPositionUpdate.addInPlace(jr.n.kU[0]), void(this._deferOnly ? this._deferredUpdated = !0 : this.position.iH(this._deferredPositionUpdate));
            this._deferredPositionUpdate.addInPlace(this.cameraDirection), this._deferOnly ? this._deferredUpdated = !0 : this.position.iH(this._deferredPositionUpdate)
          }
          _checkInputs() {
            const rr = this.movement,
              Sr = 0 !== this.cameraDirection.x || 0 !== this.cameraDirection.y || 0 !== this.cameraDirection.z;
            rr.panAccumulatedPixels.addInPlace(this.cameraDirection), rr.rotationAccumulatedPixels.x += this.cameraRotation.x, rr.rotationAccumulatedPixels.y += this.cameraRotation.y, rr.computeCurrentFrameDeltas(), this.cameraDirection.iH(rr.panDeltaCurrentFrame), this.cameraRotation.set(rr.rotationDeltaCurrentFrame.x, rr.rotationDeltaCurrentFrame.y);
            const Qr = this.speed * this._panningEpsilon;
            !Sr && Math.abs(this.cameraDirection.x) < Qr && Math.abs(this.cameraDirection.y) < Qr && Math.abs(this.cameraDirection.z) < Qr && (this.cameraDirection.Srr(0), rr.resetPanVelocity());
            const Zr = this.invertRotation ? -this.inverseRotationSpeed : 1,
              Wr = this._decideIfNeedsToMove(),
              ar = !(!this.cameraRotation.x && !this.cameraRotation.y);
            if (this._deferredUpdated = !1, this._deferredRotationUpdate.iH(this.rotation), this._deferredPositionUpdate.iH(this.position), this.rotationQuaternion && this._deferredRotationQuaternionUpdate.iH(this.rotationQuaternion), Wr && this._updatePosition(), ar) {
              if (this.rotationQuaternion && this.rotationQuaternion.toEulerAnglesToRef(this._deferredRotationUpdate), this._deferredRotationUpdate.x += this.cameraRotation.x * Zr, this._deferredRotationUpdate.y += this.cameraRotation.y * Zr, !this.noRotationConstraint) {
                const rr = 1.570796;
                this._deferredRotationUpdate.x > rr && (this._deferredRotationUpdate.x = rr), this._deferredRotationUpdate.x < -rr && (this._deferredRotationUpdate.x = -rr)
              }
              if (this._deferOnly ? this._deferredUpdated = !0 : this.rotation.iH(this._deferredRotationUpdate), this.rotationQuaternion) {
                this._deferredRotationUpdate.lengthSquared() && (jr.h.RotationYawPitchRollToRef(this._deferredRotationUpdate.y, this._deferredRotationUpdate.x, this._deferredRotationUpdate.z, this._deferredRotationQuaternionUpdate), this._deferOnly ? this._deferredUpdated = !0 : this.rotationQuaternion.iH(this._deferredRotationQuaternionUpdate))
              }
            }
            this.cameraDirection.Srr(0), this.cameraRotation.set(0, 0), super._checkInputs()
          }
          _updateCameraRotationMatrix() {
            this.rotationQuaternion ? this.rotationQuaternion.toRotationMatrix(this._cameraRotationMatrix) : jr.d.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, this.rotation.z, this._cameraRotationMatrix)
          }
          _rotateUpVectorWithCameraRotationMatrix() {
            return jr.u.TransformNormalToRef(jr.u.UpReadOnly, this._cameraRotationMatrix, this.upVector), this
          }
          _getViewMatrix() {
            return this.lockedTarget && this.setTarget(this._getLockedTargetPosition()), this._updateCameraRotationMatrix(), this.rotationQuaternion && this._cachedQuaternionRotationZ != this.rotationQuaternion.z ? (this._rotateUpVectorWithCameraRotationMatrix(), this._cachedQuaternionRotationZ = this.rotationQuaternion.z) : this._cachedRotationZ !== this.rotation.z && (this._rotateUpVectorWithCameraRotationMatrix(), this._cachedRotationZ = this.rotation.z), jr.u.TransformCoordinatesToRef(this._referencePoint, this._cameraRotationMatrix, this._transformedReferencePoint), this.position.addToRef(this._transformedReferencePoint, this._currentTarget), this.updateUpVectorFromRotation && (this.rotationQuaternion ? fr.c.Y.rotateByQuaternionToRef(this.rotationQuaternion, this.upVector) : (jr.h.FromEulerVectorToRef(this.rotation, Ur), fr.c.Y.rotateByQuaternionToRef(Ur, this.upVector))), this._computeViewMatrix(this.position, this._currentTarget, this.upVector), this._viewMatrix
          }
          _computeViewMatrix(rr, Sr, Qr) {
            if (this.eC().useRightHandedSystem ? jr.d.LookAtRHToRef(rr, Sr, Qr, this._viewMatrix) : jr.d.LookAtLHToRef(rr, Sr, Qr, this._viewMatrix), this.parent) {
              const rr = this.parent.getWorldMatrix();
              this._viewMatrix.invert(), this._viewMatrix.multiplyToRef(rr, this._viewMatrix), this._viewMatrix.invert(), this._markSyncedWithParent()
            }
          }
          createRigCamera(Sr, Qr) {
            if (this.cameraRigMode !== ar.d.RIG_MODE_NONE) {
              const Qr = new rr(Sr, this.position.clone(), this.eC());
              return Qr.isRigCamera = !0, Qr.rigParent = this, this.cameraRigMode === ar.d.RIG_MODE_VR && (this.rotationQuaternion || (this.rotationQuaternion = new jr.h), Qr._cameraRigParams = {}, Qr.rotationQuaternion = new jr.h), Qr.mode = this.mode, Qr.orthoLeft = this.orthoLeft, Qr.orthoRight = this.orthoRight, Qr.orthoTop = this.orthoTop, Qr.orthoBottom = this.orthoBottom, Qr
            }
            return null
          }
          _updateRigCameras() {
            const rr = this._rigCameras[0],
              Sr = this._rigCameras[1];
            switch (this.computeWorldMatrix(), this.cameraRigMode) {
              case ar.d.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case ar.d.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case ar.d.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
              case ar.d.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case ar.d.RIG_MODE_STEREOSCOPIC_INTERLACED: {
                const Qr = this.cameraRigMode === ar.d.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED ? 1 : -1,
                  Zr = this.cameraRigMode === ar.d.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED ? -1 : 1;
                this._getRigCamPositionAndTarget(this._cameraRigParams.stereoHalfAngle * Qr, rr), this._getRigCamPositionAndTarget(this._cameraRigParams.stereoHalfAngle * Zr, Sr);
                break
              }
              case ar.d.RIG_MODE_VR:
                rr.rotationQuaternion && Sr.rotationQuaternion && this.rotationQuaternion ? (rr.rotationQuaternion.iH(this.rotationQuaternion), Sr.rotationQuaternion.iH(this.rotationQuaternion)) : (rr.rotation.iH(this.rotation), Sr.rotation.iH(this.rotation)), rr.position.iH(this.position), Sr.position.iH(this.position)
            }
            super._updateRigCameras()
          }
          _getRigCamPositionAndTarget(Sr, Qr) {
            this.getTarget().subtractToRef(this.position, rr._TargetFocalPoint), rr._TargetFocalPoint.normalize().scaleInPlace(this._initialFocalDistance);
            const Zr = rr._TargetFocalPoint.addInPlace(this.position);
            jr.d.TranslationToRef(-Zr.x, -Zr.y, -Zr.z, rr._TargetTransformMatrix), rr._TargetTransformMatrix.multiplyToRef(jr.d.RotationAxis(Qr.upVector, Sr), rr._RigCamTransformMatrix), jr.d.TranslationToRef(Zr.x, Zr.y, Zr.z, rr._TargetTransformMatrix), rr._RigCamTransformMatrix.multiplyToRef(rr._TargetTransformMatrix, rr._RigCamTransformMatrix), jr.u.TransformCoordinatesToRef(this.position, rr._RigCamTransformMatrix, Qr.position), Qr.setTarget(Zr)
          }
          getClassName() {
            return "TargetCamera"
          }
        }, (() => {
          const ar = "function" === typeof Symbol && Symbol.metadata ? Object.create(xr[Symbol.metadata] ?? null) : void 0;
          Sr = [(0, Wr.G)()], Qr = [(0, Wr.C)()], Er = [(0, Wr.G)()], pr = [(0, Wr.v)("lockedTargetId")], (0, Zr.k)(null, null, Sr, {
            kind: "field",
            name: "updateUpVectorFromRotation",
            static: !1,
            private: !1,
            access: {
              has: rr => "updateUpVectorFromRotation" in rr,
              get: rr => rr.updateUpVectorFromRotation,
              set: (rr, Sr) => {
                rr.updateUpVectorFromRotation = Sr
              }
            },
            metadata: ar
          }, tr, hr), (0, Zr.k)(null, null, Qr, {
            kind: "field",
            name: "rotation",
            static: !1,
            private: !1,
            access: {
              has: rr => "rotation" in rr,
              get: rr => rr.rotation,
              set: (rr, Sr) => {
                rr.rotation = Sr
              }
            },
            metadata: ar
          }, zr, Yr), (0, Zr.k)(null, null, Er, {
            kind: "field",
            name: "speed",
            static: !1,
            private: !1,
            access: {
              has: rr => "speed" in rr,
              get: rr => rr.speed,
              set: (rr, Sr) => {
                rr.speed = Sr
              }
            },
            metadata: ar
          }, nr, er), (0, Zr.k)(null, null, pr, {
            kind: "field",
            name: "lockedTarget",
            static: !1,
            private: !1,
            access: {
              has: rr => "lockedTarget" in rr,
              get: rr => rr.lockedTarget,
              set: (rr, Sr) => {
                rr.lockedTarget = Sr
              }
            },
            metadata: ar
          }, Kr, yr), ar && Object.defineProperty(rr, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: ar
          })
        })(), rr._RigCamTransformMatrix = new jr.d, rr._TargetTransformMatrix = new jr.d, rr._TargetFocalPoint = new jr.u, rr
      })(),
      hr = !1;

    function zr() {
      hr || (hr = !0, Er.c.AddNodeConstructor("TargetCamera", ((rr, Sr) => () => new tr(rr, jr.u.Zero(), Sr))))
    }
  },
  41839: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => ar
    });
    var Zr = Qr(41784);
    let Wr = !1;

    function ar() {
      Wr || (Wr = !0, Zr.e.prototype.getInputElement = function() {
        return this._renderingCanvas
      }, Zr.e.prototype.getRenderingCanvasClientRect = function() {
        return this._renderingCanvas ? this._renderingCanvas.getBoundingClientRect() : null
      }, Zr.e.prototype.getInputElementClientRect = function() {
        return this._renderingCanvas ? this.getInputElement().getBoundingClientRect() : null
      }, Zr.e.prototype.getAspectRatio = function(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const Qr = rr.viewport;
        return this.getRenderWidth(Sr) * Qr.width / (this.getRenderHeight(Sr) * Qr.height)
      }, Zr.e.prototype.getScreenAspectRatio = function() {
        return this.getRenderWidth(!0) / this.getRenderHeight(!0)
      }, Zr.e.prototype._verifyPointerLock = function() {
        this._onPointerLockChange?.()
      })
    }
  },
  41895: (rr, Sr, Qr) => {
    var Zr = Qr(41784),
      Wr = Qr(41898);
    let ar = !1;
    ar || (ar = !0, (0, Wr.x)(), Zr.e.prototype._loadFileAsync = async function(rr, Sr, Qr) {
      return await new Promise(((Zr, Wr) => {
        this._loadFile(rr, (rr => {
          Zr(rr)
        }), void 0, Sr, Qr, ((rr, Sr) => {
          Wr(Sr)
        }))
      }))
    })
  },
  41893: (rr, Sr, Qr) => {
    (0, Qr(41843).e)()
  },
  41843: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => ar
    });
    var Zr = Qr(41784);
    let Wr = !1;

    function ar() {
      Wr || (Wr = !0, Zr.e.prototype.getRenderPassNames = function() {
        return this._renderPassNames
      }, Zr.e.prototype.getCurrentRenderPassName = function() {
        return this._renderPassNames[this.currentRenderPassId]
      }, Zr.e.prototype.createRenderPassId = function(rr) {
        const Sr = ++Zr.e._RenderPassIdCounter;
        return this._renderPassNames[Sr] = rr ?? "NONAME", Sr
      }, Zr.e.prototype.releaseRenderPassId = function(rr) {
        this._renderPassNames[rr] = void 0;
        for (let Sr = 0; Sr < this.scenes.length; ++Sr) {
          const Qr = this.scenes[Sr];
          for (let Sr = 0; Sr < Qr.meshes.length; ++Sr) {
            const Zr = Qr.meshes[Sr];
            if (Zr._releaseRenderPassId(rr), Zr.jT)
              for (let Sr = 0; Sr < Zr.jT.length; ++Sr) {
                Zr.jT[Sr]._removeDrawWrapper(rr)
              }
          }
        }
        this._onReleaseRenderPassObservable?.notifyObservers(rr)
      })
    }
  },
  41925: (rr, Sr, Qr) => {
    var Zr = Qr(41928),
      Wr = Qr(41784);
    let ar = !1;
    ar || (ar = !0, Wr.e.GetCompatibleTextureLoader = Zr.e)
  },
  41845: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => ar
    });
    var Zr = Qr(41737);
    let Wr = !1;

    function ar() {
      Wr || (Wr = !0, Zr.ThinEngine.prototype.setAlphaMode = function(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this._alphaMode[Qr] === rr) {
          if (!Sr) {
            const Sr = 0 === rr;
            this.depthCullingState.depthMask !== Sr && (this.depthCullingState.depthMask = Sr)
          }
          return
        }
        const Zr = 0 === rr;
        this._alphaState.setAlphaBlend(!Zr, Qr), this._alphaState.setAlphaMode(rr, Qr), Sr || (this.depthCullingState.depthMask = Zr), this._alphaMode[Qr] = rr
      })
    }
  },
  41851: (rr, Sr, Qr) => {
    var Zr = Qr(41731),
      Wr = Qr(40246),
      ar = Qr(41737),
      jr = Qr(41859),
      Ir = Qr(41827);
    class fr extends jr.b {
      setDepthStencilTexture(rr) {
        let Sr = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (super.setDepthStencilTexture(rr, Sr), !rr) return;
        const Qr = this._engine,
          Zr = this._context,
          Wr = rr._hardwareTexture;
        if (Wr && rr._autoMSAAManagement && this._MSAAFramebuffer) {
          const Sr = Qr._currentFramebuffer;
          Qr._bindUnboundFramebuffer(this._MSAAFramebuffer), Zr.framebufferRenderbuffer(Zr.FRAMEBUFFER, (0, Ir.b)(rr.format) ? Zr.DEPTH_STENCIL_ATTACHMENT : Zr.DEPTH_ATTACHMENT, Zr.RENDERBUFFER, Wr.getMSAARenderBuffer()), Qr._bindUnboundFramebuffer(Sr)
        }
      }
      constructor(rr, Sr, Qr, Zr, Wr) {
        super(rr, Sr, Qr, Zr), this._framebuffer = null, this._depthStencilBuffer = null, this._MSAAFramebuffer = null, this._colorTextureArray = null, this._depthStencilTextureArray = null, this._disposeOnlyFramebuffers = !1, this._currentLOD = 0, this._context = Wr
      }
      _cloneRenderTargetWrapper() {
        let rr;
        return this._colorTextureArray && this._depthStencilTextureArray ? (rr = this._engine.createMultiviewRenderTargetTexture(this.width, this.height), rr.texture.isReady = !0) : rr = super._cloneRenderTargetWrapper(), rr
      }
      _swapRenderTargetWrapper(rr) {
        super._swapRenderTargetWrapper(rr), rr._framebuffer = this._framebuffer, rr._depthStencilBuffer = this._depthStencilBuffer, rr._MSAAFramebuffer = this._MSAAFramebuffer, rr._colorTextureArray = this._colorTextureArray, rr._depthStencilTextureArray = this._depthStencilTextureArray, this._framebuffer = this._depthStencilBuffer = this._MSAAFramebuffer = this._colorTextureArray = this._depthStencilTextureArray = null
      }
      createDepthStencilTexture() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Sr = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          Qr = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          Wr = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          ar = arguments.length > 5 ? arguments[5] : void 0;
        if (this._depthStencilBuffer) {
          const rr = this._engine,
            Sr = rr._currentFramebuffer,
            Qr = this._context;
          rr._bindUnboundFramebuffer(this._framebuffer), Qr.framebufferRenderbuffer(Qr.FRAMEBUFFER, Qr.DEPTH_STENCIL_ATTACHMENT, Qr.RENDERBUFFER, null), Qr.framebufferRenderbuffer(Qr.FRAMEBUFFER, Qr.DEPTH_ATTACHMENT, Qr.RENDERBUFFER, null), Qr.framebufferRenderbuffer(Qr.FRAMEBUFFER, Qr.STENCIL_ATTACHMENT, Qr.RENDERBUFFER, null), rr._bindUnboundFramebuffer(Sr), Qr.deleteRenderbuffer(this._depthStencilBuffer), this._depthStencilBuffer = null
        }
        return super.createDepthStencilTexture(rr, Sr, Qr, Zr, Wr, ar)
      }
      shareDepth(rr) {
        super.shareDepth(rr);
        const Sr = this._context,
          Qr = this._depthStencilBuffer,
          Zr = rr._MSAAFramebuffer || rr._framebuffer,
          Wr = this._engine;
        rr._depthStencilBuffer && rr._depthStencilBuffer !== Qr && Sr.deleteRenderbuffer(rr._depthStencilBuffer), rr._depthStencilBuffer = Qr;
        const ar = rr._generateStencilBuffer ? Sr.DEPTH_STENCIL_ATTACHMENT : Sr.DEPTH_ATTACHMENT;
        Wr._bindUnboundFramebuffer(Zr), Sr.framebufferRenderbuffer(Sr.FRAMEBUFFER, ar, Sr.RENDERBUFFER, Qr), Wr._bindUnboundFramebuffer(null)
      }
      _bindTextureRenderTarget(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Qr = arguments.length > 2 ? arguments[2] : void 0,
          Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const Wr = rr._hardwareTexture;
        if (!Wr) return;
        const ar = this._framebuffer,
          jr = this._engine,
          Ir = jr._currentFramebuffer;
        let fr;
        if (jr._bindUnboundFramebuffer(ar), jr.tt > 1) {
          const ar = this._context;
          fr = ar["COLOR_ATTACHMENT" + Sr], rr.is2DArray || rr.is3D ? (Qr = Qr ?? this.layerIndices?.[Sr] ?? 0, ar.framebufferTextureLayer(ar.FRAMEBUFFER, fr, Wr.underlyingResource, Zr, Qr)) : rr.isCube ? (Qr = Qr ?? this.faceIndices?.[Sr] ?? 0, ar.framebufferTexture2D(ar.FRAMEBUFFER, fr, ar.TEXTURE_CUBE_MAP_POSITIVE_X + Qr, Wr.underlyingResource, Zr)) : ar.framebufferTexture2D(ar.FRAMEBUFFER, fr, ar.TEXTURE_2D, Wr.underlyingResource, Zr)
        } else {
          const rr = this._context;
          fr = rr["COLOR_ATTACHMENT" + Sr + "_WEBGL"];
          const ar = void 0 !== Qr ? rr.TEXTURE_CUBE_MAP_POSITIVE_X + Qr : rr.TEXTURE_2D;
          rr.framebufferTexture2D(rr.FRAMEBUFFER, fr, ar, Wr.underlyingResource, Zr)
        }
        if (rr._autoMSAAManagement && this._MSAAFramebuffer) {
          const rr = this._context;
          jr._bindUnboundFramebuffer(this._MSAAFramebuffer), rr.framebufferRenderbuffer(rr.FRAMEBUFFER, fr, rr.RENDERBUFFER, Wr.getMSAARenderBuffer())
        }
        jr._bindUnboundFramebuffer(Ir)
      }
      setTexture(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Qr = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        super.setTexture(rr, Sr, Qr), this._bindTextureRenderTarget(rr, Sr)
      }
      setLayerAndFaceIndices(rr, Sr) {
        if (super.setLayerAndFaceIndices(rr, Sr), !this.textures || !this.layerIndices || !this.faceIndices) return;
        const Qr = this._attachments?.length ?? this.textures.length;
        for (let Zr = 0; Zr < Qr; Zr++) {
          const rr = this.textures[Zr];
          rr && (rr.is2DArray || rr.is3D ? this._bindTextureRenderTarget(rr, Zr, this.layerIndices[Zr]) : rr.isCube ? this._bindTextureRenderTarget(rr, Zr, this.faceIndices[Zr]) : this._bindTextureRenderTarget(rr, Zr))
        }
      }
      setLayerAndFaceIndex() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Sr = arguments.length > 1 ? arguments[1] : void 0,
          Qr = arguments.length > 2 ? arguments[2] : void 0;
        if (super.setLayerAndFaceIndex(rr, Sr, Qr), !this.textures || !this.layerIndices || !this.faceIndices) return;
        const Zr = this.textures[rr];
        Zr.is2DArray || Zr.is3D ? this._bindTextureRenderTarget(this.textures[rr], rr, this.layerIndices[rr]) : Zr.isCube && this._bindTextureRenderTarget(this.textures[rr], rr, this.faceIndices[rr])
      }
      resolveMSAATextures() {
        const rr = this._engine,
          Sr = rr._currentFramebuffer;
        rr._bindUnboundFramebuffer(this._MSAAFramebuffer), super.resolveMSAATextures(), rr._bindUnboundFramebuffer(Sr)
      }
      dispose() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._disposeOnlyFramebuffers;
        const Sr = this._context;
        rr || (this._colorTextureArray && (this._context.deleteTexture(this._colorTextureArray), this._colorTextureArray = null), this._depthStencilTextureArray && (this._context.deleteTexture(this._depthStencilTextureArray), this._depthStencilTextureArray = null)), this._framebuffer && (Sr.deleteFramebuffer(this._framebuffer), this._framebuffer = null), this._depthStencilBuffer && (Sr.deleteRenderbuffer(this._depthStencilBuffer), this._depthStencilBuffer = null), this._MSAAFramebuffer && (Sr.deleteFramebuffer(this._MSAAFramebuffer), this._MSAAFramebuffer = null), super.dispose(rr)
      }
    }
    let Er = !1;
    Er || (Er = !0, ar.ThinEngine.prototype._createHardwareRenderTargetWrapper = function(rr, Sr, Qr) {
      const Zr = new fr(rr, Sr, Qr, this, this._gl);
      return this._renderTargetWrapperCache.push(Zr), Zr
    }, ar.ThinEngine.prototype.createRenderTargetTexture = function(rr, Sr) {
      const Qr = this._createHardwareRenderTargetWrapper(!1, !1, rr);
      let Zr, Wr, ar = !0,
        jr = !1,
        Ir = !1,
        fr = 1;
      void 0 !== Sr && "object" === typeof Sr && (ar = Sr.generateDepthBuffer ?? !0, jr = !!Sr.generateStencilBuffer, Ir = !!Sr.noColorAttachment, Zr = Sr.colorAttachment, fr = Sr.samples ?? 1, Wr = Sr.label);
      const Er = Zr || (Ir ? null : this._createInternalTexture(rr, Sr, !0, 5)),
        pr = rr.width || rr,
        xr = rr.height || rr,
        mr = this._currentFramebuffer,
        Nr = this._gl,
        Ur = Nr.createFramebuffer();
      if (this._bindUnboundFramebuffer(Ur), Qr._depthStencilBuffer = this._setupFramebufferDepthAttachments(jr, ar, pr, xr), !Er || Er.is2DArray || Er.is3D || Nr.framebufferTexture2D(Nr.FRAMEBUFFER, Nr.COLOR_ATTACHMENT0, Nr.TEXTURE_2D, Er._hardwareTexture.underlyingResource, 0), this._bindUnboundFramebuffer(mr), Qr.label = Wr ?? "RenderTargetWrapper", Qr._framebuffer = Ur, Qr._generateDepthBuffer = ar, Qr._generateStencilBuffer = jr, Qr.setTextures(Er), Zr) {
        if (Qr._samples = Zr.samples, Zr.samples > 1) {
          const rr = Zr._hardwareTexture.getMSAARenderBuffer(0);
          Qr._MSAAFramebuffer = Nr.createFramebuffer(), this._bindUnboundFramebuffer(Qr._MSAAFramebuffer), Nr.framebufferRenderbuffer(Nr.FRAMEBUFFER, Nr.COLOR_ATTACHMENT0, Nr.RENDERBUFFER, rr), this._bindUnboundFramebuffer(null)
        }
      } else this.updateRenderTargetTextureSampleCount(Qr, fr);
      return Qr
    }, ar.ThinEngine.prototype._createDepthStencilTexture = function(rr, Sr, Qr) {
      const ar = this._gl,
        jr = rr.layers || 0,
        fr = rr.depth || 0;
      let Er = ar.TEXTURE_2D;
      0 !== jr ? Er = ar.TEXTURE_2D_ARRAY : 0 !== fr && (Er = ar.TEXTURE_3D);
      const pr = new Zr.b(this, 12);
      if (pr.label = Sr.label, !this._caps.depthTextureExtension) return Wr.c.Error("Depth texture is not supported by your browser or hardware."), pr;
      const xr = {
        bilinearFiltering: !1,
        comparisonFunction: 0,
        generateStencil: !1,
        ...Sr
      };
      if (this._bindTextureDirectly(Er, pr, !0), this._setupDepthStencilTexture(pr, rr, 0 !== xr.comparisonFunction && xr.bilinearFiltering, xr.comparisonFunction, xr.samples), void 0 !== xr.depthTextureFormat) {
        if (15 !== xr.depthTextureFormat && 16 !== xr.depthTextureFormat && 17 !== xr.depthTextureFormat && 13 !== xr.depthTextureFormat && 14 !== xr.depthTextureFormat && 18 !== xr.depthTextureFormat) return Wr.c.Error(`Depth texture ${xr.depthTextureFormat} format is not supported.`), pr;
        pr.format = xr.depthTextureFormat
      } else pr.format = xr.generateStencil ? 13 : 16;
      const mr = (0, Ir.b)(pr.format),
        Nr = this._getWebGLTextureTypeFromDepthTextureFormat(pr.format),
        Ur = mr ? ar.DEPTH_STENCIL : ar.DEPTH_COMPONENT,
        tr = this._getInternalFormatFromDepthTextureFormat(pr.format, !0, mr);
      return pr.is2DArray ? ar.texImage3D(Er, 0, tr, pr.width, pr.height, jr, 0, Ur, Nr, null) : pr.is3D ? ar.texImage3D(Er, 0, tr, pr.width, pr.height, fr, 0, Ur, Nr, null) : ar.texImage2D(Er, 0, tr, pr.width, pr.height, 0, Ur, Nr, null), this._bindTextureDirectly(Er, null), this._internalTexturesCache.push(pr), Qr._depthStencilBuffer && (ar.deleteRenderbuffer(Qr._depthStencilBuffer), Qr._depthStencilBuffer = null), this._bindUnboundFramebuffer(Qr._MSAAFramebuffer ?? Qr._framebuffer), Qr._generateStencilBuffer = mr, Qr._depthStencilTextureWithStencil = mr, Qr._depthStencilBuffer = this._setupFramebufferDepthAttachments(Qr._generateStencilBuffer, Qr._generateDepthBuffer, Qr.width, Qr.height, Qr.samples, pr.format), this._bindUnboundFramebuffer(null), pr
    }, ar.ThinEngine.prototype.updateRenderTargetTextureSampleCount = function(rr, Sr) {
      if (this.tt < 2 || !rr) return 1;
      if (rr.samples === Sr) return Sr;
      const Qr = this._gl;
      Sr = Math.min(Sr, this.getCaps().maxMSAASamples), rr._depthStencilBuffer && (Qr.deleteRenderbuffer(rr._depthStencilBuffer), rr._depthStencilBuffer = null), rr._MSAAFramebuffer && (Qr.deleteFramebuffer(rr._MSAAFramebuffer), rr._MSAAFramebuffer = null);
      const Zr = rr.texture?._hardwareTexture;
      if (Zr?.releaseMSAARenderBuffers(), rr.texture && Sr > 1 && "function" === typeof Qr.renderbufferStorageMultisample) {
        const Wr = Qr.createFramebuffer();
        if (!Wr) throw new Error("Unable to create multi sampled framebuffer");
        rr._MSAAFramebuffer = Wr, this._bindUnboundFramebuffer(rr._MSAAFramebuffer);
        const ar = this._createRenderBuffer(rr.texture.width, rr.texture.height, Sr, -1, this._getRGBABufferInternalSizedFormat(rr.texture.type, rr.texture.format, rr.texture._useSRGBBuffer), Qr.COLOR_ATTACHMENT0, !1);
        if (!ar) throw new Error("Unable to create multi sampled framebuffer");
        Zr?.addMSAARenderBuffer(ar)
      }
      this._bindUnboundFramebuffer(rr._MSAAFramebuffer ?? rr._framebuffer), rr.texture && (rr.texture.samples = Sr), rr._samples = Sr;
      const Wr = rr._depthStencilTexture ? rr._depthStencilTexture.format : void 0;
      return rr._depthStencilBuffer = this._setupFramebufferDepthAttachments(rr._generateStencilBuffer, rr._generateDepthBuffer, rr.width, rr.height, Sr, Wr), this._bindUnboundFramebuffer(null), Sr
    }, ar.ThinEngine.prototype._setupDepthStencilTexture = function(rr, Sr, Qr, Zr) {
      let Wr = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1;
      const ar = Sr.width ?? Sr,
        jr = Sr.height ?? Sr,
        Ir = Sr.layers || 0,
        fr = Sr.depth || 0;
      rr.baseWidth = ar, rr.baseHeight = jr, rr.width = ar, rr.height = jr, rr.is2DArray = Ir > 0, rr.depth = Ir || fr, rr.isReady = !0, rr.samples = Wr, rr.generateMipMaps = !1, rr.samplingMode = Qr ? 2 : 1, rr.type = 0, rr._comparisonFunction = Zr;
      const Er = this._gl,
        pr = this._getTextureTarget(rr),
        xr = this._getSamplingParameters(rr.samplingMode, !1);
      Er.texParameteri(pr, Er.TEXTURE_MAG_FILTER, xr.mag), Er.texParameteri(pr, Er.TEXTURE_MIN_FILTER, xr.min), Er.texParameteri(pr, Er.TEXTURE_WRAP_S, Er.CLAMP_TO_EDGE), Er.texParameteri(pr, Er.TEXTURE_WRAP_T, Er.CLAMP_TO_EDGE), this.tt > 1 && (0 === Zr ? (Er.texParameteri(pr, Er.TEXTURE_COMPARE_FUNC, 515), Er.texParameteri(pr, Er.TEXTURE_COMPARE_MODE, Er.NONE)) : (Er.texParameteri(pr, Er.TEXTURE_COMPARE_FUNC, Zr), Er.texParameteri(pr, Er.TEXTURE_COMPARE_MODE, Er.COMPARE_REF_TO_TEXTURE)))
    })
  },
  41725: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Zr.d
    });
    var Zr = Qr(41728);
    (0, Qr(41845).d)();
    var Wr = Qr(41737);
    let ar = !1;
    ! function() {
      if (ar) return;
      ar = !0;
      const rr = new WeakMap,
        Sr = new WeakMap,
        Qr = new WeakMap,
        Zr = new WeakMap;
      Wr.ThinEngine.prototype.getAlphaToCoverage = function() {
        return rr.get(this) ?? !1
      }, Wr.ThinEngine.prototype.setAlphaToCoverage = function(Qr) {
        (rr.get(this) !== Qr || this._gl && Sr.get(this) !== this._gl) && (rr.set(this, Qr), this._gl && (Qr ? this._gl.enable(this._gl.SAMPLE_ALPHA_TO_COVERAGE) : this._gl.disable(this._gl.SAMPLE_ALPHA_TO_COVERAGE), Sr.set(this, this._gl)))
      }, Object.defineProperty(Wr.ThinEngine.prototype, "currentSampleCount", {
        get: function() {
          return this._currentRenderTarget ? this._currentRenderTarget.samples : this._gl ? (Zr.get(this) !== this._gl && (Qr.set(this, this._gl.getContextAttributes()?.antialias ? Math.max(1, this._gl.getParameter(this._gl.SAMPLES)) : 1), Zr.set(this, this._gl)), Qr.get(this)) : 1
        },
        enumerable: !1,
        configurable: !0
      })
    }();
    var jr = Qr(41731),
      Ir = Qr(40246),
      fr = Qr(41818);
    let Er = !1;
    ! function() {
      function rr(rr, Sr, Qr, Zr) {
        let Wr, ar = 1;
        1 === Zr ? Wr = new Float32Array(Sr * Qr * 4) : 2 === Zr ? (Wr = new Uint16Array(Sr * Qr * 4), ar = 15360) : Wr = 7 === Zr ? new Uint32Array(Sr * Qr * 4) : new Uint8Array(Sr * Qr * 4);
        for (let jr = 0; jr < Sr; jr++)
          for (let Zr = 0; Zr < Qr; Zr++) {
            const Qr = 3 * (Zr * Sr + jr),
              Ir = 4 * (Zr * Sr + jr);
            Wr[Ir + 0] = rr[Qr + 0], Wr[Ir + 1] = rr[Qr + 1], Wr[Ir + 2] = rr[Qr + 2], Wr[Ir + 3] = ar
          }
        return Wr
      }

      function Sr(rr) {
        return function(Sr, Qr, Zr, Wr, ar, Ir, fr, Er) {
          let pr = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
            xr = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
          const mr = rr ? this._gl.TEXTURE_3D : this._gl.TEXTURE_2D_ARRAY,
            Nr = rr ? 10 : 11,
            Ur = new jr.b(this, Nr);
          Ur.baseWidth = Qr, Ur.baseHeight = Zr, Ur.baseDepth = Wr, Ur.width = Qr, Ur.height = Zr, Ur.depth = Wr, Ur.format = ar, Ur.type = xr, Ur.generateMipMaps = Ir, Ur.samplingMode = Er, rr ? Ur.is3D = !0 : Ur.is2DArray = !0, this._doNotHandleContextLost || (Ur._bufferView = Sr), rr ? this.updateRawTexture3D(Ur, Sr, ar, fr, pr, xr) : this.updateRawTexture2DArray(Ur, Sr, ar, fr, pr, xr), this._bindTextureDirectly(mr, Ur, !0);
          const tr = this._getSamplingParameters(Er, Ir);
          return this._gl.texParameteri(mr, this._gl.TEXTURE_MAG_FILTER, tr.mag), this._gl.texParameteri(mr, this._gl.TEXTURE_MIN_FILTER, tr.min), Ir && this._gl.generateMipmap(mr), this._bindTextureDirectly(mr, null), this._internalTexturesCache.push(Ur), Ur
        }
      }

      function Qr(rr) {
        return function(Sr, Qr, Zr, Wr) {
          let ar = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            jr = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
          const Ir = rr ? this._gl.TEXTURE_3D : this._gl.TEXTURE_2D_ARRAY,
            fr = this._getWebGLTextureType(jr),
            Er = this._getInternalFormat(Zr),
            pr = this._getRGBABufferInternalSizedFormat(jr, Zr);
          this._bindTextureDirectly(Ir, Sr, !0), this._unpackFlipY(void 0 === Wr || !!Wr), this._doNotHandleContextLost || (Sr._bufferView = Qr, Sr.format = Zr, Sr.invertY = Wr, Sr._compression = ar), Sr.width % 4 !== 0 && this._gl.pixelStorei(this._gl.UNPACK_ALIGNMENT, 1), ar && Qr ? this._gl.compressedTexImage3D(Ir, 0, this.getCaps().s3tc[ar], Sr.width, Sr.height, Sr.depth, 0, Qr) : this._gl.texImage3D(Ir, 0, pr, Sr.width, Sr.height, Sr.depth, 0, Er, fr, Qr), Sr.generateMipMaps && this._gl.generateMipmap(Ir), this._bindTextureDirectly(Ir, null), Sr.isReady = !0
        }
      }
      Er || (Er = !0, Wr.ThinEngine.prototype.updateRawTexture = function(rr, Sr, Qr, Zr) {
        let Wr = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          ar = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          jr = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        if (!rr) return;
        const Ir = this._getRGBABufferInternalSizedFormat(ar, Qr, jr),
          fr = this._getInternalFormat(Qr),
          Er = this._getWebGLTextureType(ar);
        this._bindTextureDirectly(this._gl.TEXTURE_2D, rr, !0), this._unpackFlipY(void 0 === Zr || !!Zr), this._doNotHandleContextLost || (rr._bufferView = Sr, rr.format = Qr, rr.type = ar, rr.invertY = Zr, rr._compression = Wr), rr.width % 4 !== 0 && this._gl.pixelStorei(this._gl.UNPACK_ALIGNMENT, 1), Wr && Sr ? this._gl.compressedTexImage2D(this._gl.TEXTURE_2D, 0, this.getCaps().s3tc[Wr], rr.width, rr.height, 0, Sr) : this._gl.texImage2D(this._gl.TEXTURE_2D, 0, Ir, rr.width, rr.height, 0, fr, Er, Sr), rr.generateMipMaps && this._gl.generateMipmap(this._gl.TEXTURE_2D), this._bindTextureDirectly(this._gl.TEXTURE_2D, null), rr.isReady = !0
      }, Wr.ThinEngine.prototype.createRawTexture = function(rr, Sr, Qr, Zr, Wr, ar, Ir) {
        let fr = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          Er = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
          pr = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const xr = new jr.b(this, 3);
        xr.baseWidth = Sr, xr.baseHeight = Qr, xr.width = Sr, xr.height = Qr, xr.format = Zr, xr.generateMipMaps = Wr, xr.samplingMode = Ir, xr.invertY = ar, xr._compression = fr, xr.type = Er, xr._useSRGBBuffer = this._getUseSRGBBuffer(pr, !Wr), this._doNotHandleContextLost || (xr._bufferView = rr), this.updateRawTexture(xr, rr, Zr, ar, fr, Er, xr._useSRGBBuffer), this._bindTextureDirectly(this._gl.TEXTURE_2D, xr, !0);
        const mr = this._getSamplingParameters(Ir, Wr);
        return this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MAG_FILTER, mr.mag), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MIN_FILTER, mr.min), Wr && this._gl.generateMipmap(this._gl.TEXTURE_2D), this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._internalTexturesCache.push(xr), xr
      }, Wr.ThinEngine.prototype.createRawCubeTexture = function(rr, Sr, Qr, Zr, Wr, ar, Er) {
        let pr = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null;
        const xr = this._gl,
          mr = new jr.b(this, 8);
        mr.isCube = !0, mr.format = Qr, mr.type = Zr, this._doNotHandleContextLost || (mr._bufferViewArray = rr);
        const Nr = this._getWebGLTextureType(Zr);
        let Ur = this._getInternalFormat(Qr);
        Ur === xr.RGB && (Ur = xr.RGBA), Nr !== xr.FLOAT || this._caps.textureFloatLinearFiltering ? Nr !== this._gl.HALF_FLOAT_OES || this._caps.textureHalfFloatLinearFiltering ? Nr !== xr.FLOAT || this._caps.textureFloatRender ? Nr !== xr.HALF_FLOAT || this._caps.colorBufferFloat || (Wr = !1, Ir.c.Warn("Render to half float textures is not supported. Mipmap generation forced to false.")) : (Wr = !1, Ir.c.Warn("Render to float textures is not supported. Mipmap generation forced to false.")) : (Wr = !1, Er = 1, Ir.c.Warn("Half float texture filtering is not supported. Mipmap generation and sampling mode are forced to false and TEXTURE_NEAREST_SAMPLINGMODE, respectively.")) : (Wr = !1, Er = 1, Ir.c.Warn("Float texture filtering is not supported. Mipmap generation and sampling mode are forced to false and TEXTURE_NEAREST_SAMPLINGMODE, respectively."));
        const tr = Sr,
          hr = tr;
        mr.width = tr, mr.height = hr, mr.invertY = ar, mr._compression = pr;
        if (!this.needPOTTextures || (0, fr.l)(mr.width) && (0, fr.l)(mr.height) || (Wr = !1), rr) this.updateRawCubeTexture(mr, rr, Qr, Zr, ar, pr);
        else {
          const rr = this._getRGBABufferInternalSizedFormat(Zr),
            Sr = 0;
          this._bindTextureDirectly(xr.TEXTURE_CUBE_MAP, mr, !0);
          for (let Qr = 0; Qr < 6; Qr++) pr ? xr.compressedTexImage2D(xr.TEXTURE_CUBE_MAP_POSITIVE_X + Qr, Sr, this.getCaps().s3tc[pr], mr.width, mr.height, 0, void 0) : xr.texImage2D(xr.TEXTURE_CUBE_MAP_POSITIVE_X + Qr, Sr, rr, mr.width, mr.height, 0, Ur, Nr, null);
          this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null)
        }
        this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, mr, !0), rr && Wr && this._gl.generateMipmap(this._gl.TEXTURE_CUBE_MAP);
        const zr = this._getSamplingParameters(Er, Wr);
        return xr.texParameteri(xr.TEXTURE_CUBE_MAP, xr.TEXTURE_MAG_FILTER, zr.mag), xr.texParameteri(xr.TEXTURE_CUBE_MAP, xr.TEXTURE_MIN_FILTER, zr.min), xr.texParameteri(xr.TEXTURE_CUBE_MAP, xr.TEXTURE_WRAP_S, xr.CLAMP_TO_EDGE), xr.texParameteri(xr.TEXTURE_CUBE_MAP, xr.TEXTURE_WRAP_T, xr.CLAMP_TO_EDGE), this._bindTextureDirectly(xr.TEXTURE_CUBE_MAP, null), mr.generateMipMaps = Wr, mr.samplingMode = Er, mr.isReady = !0, mr
      }, Wr.ThinEngine.prototype.updateRawCubeTexture = function(Sr, Qr, Zr, Wr, ar) {
        let jr = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          Ir = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        Sr._bufferViewArray = Qr, Sr.format = Zr, Sr.type = Wr, Sr.invertY = ar, Sr._compression = jr;
        const Er = this._gl,
          pr = this._getWebGLTextureType(Wr);
        let xr = this._getInternalFormat(Zr);
        const mr = this._getRGBABufferInternalSizedFormat(Wr);
        let Nr = !1;
        xr === Er.RGB && (xr = Er.RGBA, Nr = !0), this._bindTextureDirectly(Er.TEXTURE_CUBE_MAP, Sr, !0), this._unpackFlipY(void 0 === ar || !!ar), Sr.width % 4 !== 0 && Er.pixelStorei(Er.UNPACK_ALIGNMENT, 1);
        for (let fr = 0; fr < 6; fr++) {
          let Zr = Qr[fr];
          jr ? Er.compressedTexImage2D(Er.TEXTURE_CUBE_MAP_POSITIVE_X + fr, Ir, this.getCaps().s3tc[jr], Sr.width, Sr.height, 0, Zr) : (Nr && (Zr = rr(Zr, Sr.width, Sr.height, Wr)), Er.texImage2D(Er.TEXTURE_CUBE_MAP_POSITIVE_X + fr, Ir, mr, Sr.width, Sr.height, 0, xr, pr, Zr))
        }(!this.needPOTTextures || (0, fr.l)(Sr.width) && (0, fr.l)(Sr.height)) && Sr.generateMipMaps && 0 === Ir && this._gl.generateMipmap(this._gl.TEXTURE_CUBE_MAP), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), Sr.isReady = !0
      }, Wr.ThinEngine.prototype.createRawCubeTextureFromUrl = function(Sr, Qr, Zr, Wr, ar, jr, Ir, fr) {
        let Er = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          pr = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          xr = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 3,
          mr = arguments.length > 11 && void 0 !== arguments[11] && arguments[11];
        const Nr = this._gl,
          Ur = this.createRawCubeTexture(null, Zr, Wr, ar, !jr, mr, xr, null);
        Qr?.addPendingData(Ur), Ur.url = Sr, Ur.isReady = !1, this._internalTexturesCache.push(Ur);
        const tr = (rr, Sr) => {
            Qr?.removePendingData(Ur), pr && pr(rr ? rr.status + " " + rr.statusText : "Failed to parse texture data", Sr)
          },
          hr = async Sr => {
            if (!Ur._hardwareTexture) return;
            const Zr = Ir(Sr);
            if (!Zr) return;
            const jr = Zr instanceof Promise ? await Zr : Zr,
              pr = Ur.width;
            if (fr) {
              const Sr = this._getWebGLTextureType(ar);
              let Qr = this._getInternalFormat(Wr);
              const Zr = this._getRGBABufferInternalSizedFormat(ar);
              let Ir = !1;
              Qr === Nr.RGB && (Qr = Nr.RGBA, Ir = !0), this._bindTextureDirectly(Nr.TEXTURE_CUBE_MAP, Ur, !0), this._unpackFlipY(!1);
              const Er = fr(jr);
              for (let Wr = 0; Wr < Er.length; Wr++) {
                const jr = pr >> Wr;
                for (let fr = 0; fr < 6; fr++) {
                  let pr = Er[Wr][fr];
                  Ir && (pr = rr(pr, jr, jr, ar)), Nr.texImage2D(fr, Wr, Zr, jr, jr, 0, Qr, Sr, pr)
                }
              }
              this._bindTextureDirectly(Nr.TEXTURE_CUBE_MAP, null)
            } else this.updateRawCubeTexture(Ur, jr, Wr, ar, mr);
            Ur.isReady = !0, Qr?.removePendingData(Ur), Ur.onLoadedObservable.notifyObservers(Ur), Ur.onLoadedObservable.clear(), Er && Er()
          };
        return this._loadFile(Sr, (rr => {
          hr(rr).catch((rr => {
            tr(void 0, rr)
          }))
        }), void 0, Qr?.offlineProvider, !0, tr), Ur
      }, Wr.ThinEngine.prototype.createRawTexture2DArray = Sr(!1), Wr.ThinEngine.prototype.createRawTexture3D = Sr(!0), Wr.ThinEngine.prototype.updateRawTexture2DArray = Qr(!1), Wr.ThinEngine.prototype.updateRawTexture3D = Qr(!0))
    }();
    var pr = Qr(41764);
    let xr = !1;
    xr || (xr = !0, Wr.ThinEngine.prototype._readTexturePixelsSync = function(rr, Sr, Qr) {
      let Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1,
        Wr = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        ar = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        jr = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
        Ir = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        fr = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
        Er = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
      const xr = this._gl;
      if (!xr) throw new Error("Engine does not have gl rendering context.");
      if (!this._dummyFramebuffer) {
        const rr = xr.createFramebuffer();
        if (!rr) throw new Error("Unable to create dummy framebuffer");
        this._dummyFramebuffer = rr
      }
      xr.bindFramebuffer(xr.FRAMEBUFFER, this._dummyFramebuffer), Zr > -1 && (rr.is2DArray || rr.is3D) ? xr.framebufferTextureLayer(xr.FRAMEBUFFER, xr.COLOR_ATTACHMENT0, rr._hardwareTexture?.underlyingResource, Wr, Zr) : Zr > -1 ? xr.framebufferTexture2D(xr.FRAMEBUFFER, xr.COLOR_ATTACHMENT0, xr.TEXTURE_CUBE_MAP_POSITIVE_X + Zr, rr._hardwareTexture?.underlyingResource, Wr) : xr.framebufferTexture2D(xr.FRAMEBUFFER, xr.COLOR_ATTACHMENT0, xr.TEXTURE_2D, rr._hardwareTexture?.underlyingResource, Wr);
      let mr = void 0 !== rr.type ? this._getWebGLTextureType(rr.type) : xr.UNSIGNED_BYTE;
      return Ir ? ar || (ar = (0, pr.m)(rr.type, 4 * Sr * Qr)) : mr === xr.UNSIGNED_BYTE ? (ar || (ar = new Uint8Array(4 * Sr * Qr)), mr = xr.UNSIGNED_BYTE) : (ar || (ar = new Float32Array(4 * Sr * Qr)), mr = xr.FLOAT), jr && this.flushFramebuffer(), xr.readPixels(fr, Er, Sr, Qr, xr.RGBA, mr, ar), xr.bindFramebuffer(xr.FRAMEBUFFER, this._currentFramebuffer), ar
    }, Wr.ThinEngine.prototype._readTexturePixels = function(rr, Sr, Qr) {
      let Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1,
        Wr = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        ar = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        jr = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
        Ir = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        fr = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
        Er = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
      return Promise.resolve(this._readTexturePixelsSync(rr, Sr, Qr, Zr, Wr, ar, jr, Ir, fr, Er))
    }), (0, Qr(41847).b)();
    let mr = !1;
    mr || (mr = !0, Wr.ThinEngine.prototype._createDepthStencilCubeTexture = function(rr, Sr) {
      const Qr = new jr.b(this, 12);
      if (Qr.isCube = !0, 1 === this.tt) return Ir.c.Error("Depth cube texture is not supported by WebGL 1."), Qr;
      const Zr = {
          bilinearFiltering: !1,
          comparisonFunction: 0,
          generateStencil: !1,
          ...Sr
        },
        Wr = this._gl;
      this._bindTextureDirectly(Wr.TEXTURE_CUBE_MAP, Qr, !0), this._setupDepthStencilTexture(Qr, rr, Zr.bilinearFiltering, Zr.comparisonFunction);
      for (let ar = 0; ar < 6; ar++) Zr.generateStencil ? Wr.texImage2D(Wr.TEXTURE_CUBE_MAP_POSITIVE_X + ar, 0, Wr.DEPTH24_STENCIL8, rr, rr, 0, Wr.DEPTH_STENCIL, Wr.UNSIGNED_INT_24_8, null) : Wr.texImage2D(Wr.TEXTURE_CUBE_MAP_POSITIVE_X + ar, 0, Wr.DEPTH_COMPONENT24, rr, rr, 0, Wr.DEPTH_COMPONENT, Wr.UNSIGNED_INT, null);
      return this._bindTextureDirectly(Wr.TEXTURE_CUBE_MAP, null), this._internalTexturesCache.push(Qr), Qr
    }, Wr.ThinEngine.prototype._setCubeMapTextureParams = function(rr, Sr, Qr) {
      const Zr = this._gl;
      Zr.texParameteri(Zr.TEXTURE_CUBE_MAP, Zr.TEXTURE_MAG_FILTER, Zr.LINEAR), Zr.texParameteri(Zr.TEXTURE_CUBE_MAP, Zr.TEXTURE_MIN_FILTER, Sr ? Zr.LINEAR_MIPMAP_LINEAR : Zr.LINEAR), Zr.texParameteri(Zr.TEXTURE_CUBE_MAP, Zr.TEXTURE_WRAP_S, Zr.CLAMP_TO_EDGE), Zr.texParameteri(Zr.TEXTURE_CUBE_MAP, Zr.TEXTURE_WRAP_T, Zr.CLAMP_TO_EDGE), rr.samplingMode = Sr ? 3 : 2, Sr && this.getCaps().textureMaxLevel && void 0 !== Qr && Qr > 0 && (Zr.texParameteri(Zr.TEXTURE_CUBE_MAP, Zr.TEXTURE_MAX_LEVEL, Qr), rr._maxLodLevel = Qr), this._bindTextureDirectly(Zr.TEXTURE_CUBE_MAP, null)
    }, Wr.ThinEngine.prototype.createCubeTexture = function(rr, Sr, Qr, Zr) {
      let Wr = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        ar = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        jr = arguments.length > 6 ? arguments[6] : void 0,
        Er = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        pr = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        xr = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
        mr = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
        Nr = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
        Ur = arguments.length > 13 && void 0 !== arguments[13] && arguments[13],
        tr = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : null;
      const hr = this._gl;
      return this.createCubeTextureBase(rr, Sr, Qr, !!Zr, Wr, ar, jr, Er, pr, xr, mr, Nr, (rr => this._bindTextureDirectly(hr.TEXTURE_CUBE_MAP, rr, !0)), ((rr, Sr) => {
        const Qr = this.needPOTTextures ? (0, fr.h)(Sr[0].width, this._caps.maxCubemapTextureSize) : Sr[0].width,
          ar = Qr,
          Er = [hr.TEXTURE_CUBE_MAP_POSITIVE_X, hr.TEXTURE_CUBE_MAP_POSITIVE_Y, hr.TEXTURE_CUBE_MAP_POSITIVE_Z, hr.TEXTURE_CUBE_MAP_NEGATIVE_X, hr.TEXTURE_CUBE_MAP_NEGATIVE_Y, hr.TEXTURE_CUBE_MAP_NEGATIVE_Z];
        this._bindTextureDirectly(hr.TEXTURE_CUBE_MAP, rr, !0), this._unpackFlipY(!1);
        const pr = jr ? this._getInternalFormat(jr, rr._useSRGBBuffer) : rr._useSRGBBuffer ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : hr.RGBA;
        let xr = jr ? this._getInternalFormat(jr) : hr.RGBA;
        rr._useSRGBBuffer && 1 === this.tt && (xr = pr);
        for (let Zr = 0; Zr < Er.length; Zr++)
          if (Sr[Zr].width !== Qr || Sr[Zr].height !== ar) {
            if (this._prepareWorkingCanvas(), !this._workingCanvas || !this._workingContext) return void Ir.c.Warn("Cannot create canvas to resize texture.");
            this._workingCanvas.width = Qr, this._workingCanvas.height = ar, this._workingContext.drawImage(Sr[Zr], 0, 0, Sr[Zr].width, Sr[Zr].height, 0, 0, Qr, ar), hr.texImage2D(Er[Zr], 0, pr, xr, hr.UNSIGNED_BYTE, this._workingCanvas)
          } else hr.texImage2D(Er[Zr], 0, pr, xr, hr.UNSIGNED_BYTE, Sr[Zr]);
        Zr || hr.generateMipmap(hr.TEXTURE_CUBE_MAP), this._setCubeMapTextureParams(rr, !Zr), rr.width = Qr, rr.height = ar, rr.isReady = !0, jr && (rr.format = jr), rr.onLoadedObservable.notifyObservers(rr), rr.onLoadedObservable.clear(), Wr && Wr()
      }), !!Ur, tr)
    }, Wr.ThinEngine.prototype.generateMipMapsForCubemap = function(rr) {
      let Sr = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (rr.generateMipMaps) {
        const Qr = this._gl;
        this._bindTextureDirectly(Qr.TEXTURE_CUBE_MAP, rr, !0), Qr.generateMipmap(Qr.TEXTURE_CUBE_MAP), Sr && this._bindTextureDirectly(Qr.TEXTURE_CUBE_MAP, null)
      }
    });
    Qr(41851);
    let Nr = !1;
    Nr || (Nr = !0, Wr.ThinEngine.prototype.setDepthStencilTexture = function(rr, Sr, Qr, Zr) {
      void 0 !== rr && (Sr && (this._boundUniforms[rr] = Sr), Qr && Qr.depthStencilTexture ? this._setTexture(rr, Qr, !1, !0, Zr) : this._setTexture(rr, null, void 0, void 0, Zr))
    });
    let Ur = !1;
    Ur || (Ur = !0, Wr.ThinEngine.prototype.createRenderTargetCubeTexture = function(rr, Sr) {
      const Qr = this._createHardwareRenderTargetWrapper(!1, !0, rr),
        Zr = {
          generateMipMaps: !0,
          generateDepthBuffer: !0,
          generateStencilBuffer: !1,
          type: 0,
          samplingMode: 3,
          format: 5,
          ...Sr
        };
      Zr.generateStencilBuffer = Zr.generateDepthBuffer && Zr.generateStencilBuffer, (1 !== Zr.type || this._caps.textureFloatLinearFiltering) && (2 !== Zr.type || this._caps.textureHalfFloatLinearFiltering) || (Zr.samplingMode = 1);
      const Wr = this._gl,
        ar = new jr.b(this, 5);
      this._bindTextureDirectly(Wr.TEXTURE_CUBE_MAP, ar, !0);
      const fr = this._getSamplingParameters(Zr.samplingMode, Zr.generateMipMaps);
      1 !== Zr.type || this._caps.textureFloat || (Zr.type = 0, Ir.c.Warn("Float textures are not supported. Cube render target forced to TEXTURETYPE_UNESIGNED_BYTE type")), Wr.texParameteri(Wr.TEXTURE_CUBE_MAP, Wr.TEXTURE_MAG_FILTER, fr.mag), Wr.texParameteri(Wr.TEXTURE_CUBE_MAP, Wr.TEXTURE_MIN_FILTER, fr.min), Wr.texParameteri(Wr.TEXTURE_CUBE_MAP, Wr.TEXTURE_WRAP_S, Wr.CLAMP_TO_EDGE), Wr.texParameteri(Wr.TEXTURE_CUBE_MAP, Wr.TEXTURE_WRAP_T, Wr.CLAMP_TO_EDGE);
      for (let jr = 0; jr < 6; jr++) Wr.texImage2D(Wr.TEXTURE_CUBE_MAP_POSITIVE_X + jr, 0, this._getRGBABufferInternalSizedFormat(Zr.type, Zr.format), rr, rr, 0, this._getInternalFormat(Zr.format), this._getWebGLTextureType(Zr.type), null);
      const Er = Wr.createFramebuffer();
      return this._bindUnboundFramebuffer(Er), Qr._depthStencilBuffer = this._setupFramebufferDepthAttachments(Zr.generateStencilBuffer, Zr.generateDepthBuffer, rr, rr), Zr.generateMipMaps && Wr.generateMipmap(Wr.TEXTURE_CUBE_MAP), this._bindTextureDirectly(Wr.TEXTURE_CUBE_MAP, null), this._bindUnboundFramebuffer(null), Qr._framebuffer = Er, Qr._generateDepthBuffer = Zr.generateDepthBuffer, Qr._generateStencilBuffer = Zr.generateStencilBuffer, ar.width = rr, ar.height = rr, ar.isReady = !0, ar.isCube = !0, ar.samples = 1, ar.generateMipMaps = Zr.generateMipMaps, ar.samplingMode = Zr.samplingMode, ar.type = Zr.type, ar.format = Zr.format, this._internalTexturesCache.push(ar), Qr.setTextures(ar), Qr
    });
    var tr = Qr(41861),
      hr = Qr(41865);
    let zr = !1;
    zr || (zr = !0, Wr.ThinEngine.prototype.createPrefilteredCubeTexture = function(rr, Sr, Zr, Wr) {
      let ar = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        fr = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        Er = arguments.length > 6 ? arguments[6] : void 0,
        pr = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        xr = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
        mr = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null;
      return this.createCubeTexture(rr, Sr, null, !1, (async rr => {
        if (!rr) return void(ar && ar(null));
        const fr = rr.texture;
        if (xr ? rr.info.sphericalPolynomial && (fr._sphericalPolynomial = rr.info.sphericalPolynomial) : fr._sphericalPolynomial = fr._sphericalPolynomial ?? new tr.d, fr._source = 9, this.getCaps().textureLOD) return void(ar && ar(fr));
        const Er = this._gl,
          pr = rr.width;
        if (!pr) return;
        const {
          DDSTools: mr
        } = await Qr.e(625).then((() => Qr(54302))), Nr = [];
        for (let Qr = 0; Qr < 3; Qr++) {
          const ar = 1 - Qr / 2,
            xr = Wr,
            Ur = Math.log2(pr) * Zr + Wr,
            tr = xr + (Ur - xr) * ar,
            zr = Math.round(Math.min(Math.max(tr, 0), Ur)),
            Yr = new jr.b(this, 2);
          if (Yr.type = fr.type, Yr.format = fr.format, Yr.width = Math.pow(2, Math.max(Math.log2(pr) - zr, 0)), Yr.height = Yr.width, Yr.isCube = !0, Yr._cachedWrapU = 0, Yr._cachedWrapV = 0, this._bindTextureDirectly(Er.TEXTURE_CUBE_MAP, Yr, !0), Yr.samplingMode = 2, Er.texParameteri(Er.TEXTURE_CUBE_MAP, Er.TEXTURE_MAG_FILTER, Er.LINEAR), Er.texParameteri(Er.TEXTURE_CUBE_MAP, Er.TEXTURE_MIN_FILTER, Er.LINEAR), Er.texParameteri(Er.TEXTURE_CUBE_MAP, Er.TEXTURE_WRAP_S, Er.CLAMP_TO_EDGE), Er.texParameteri(Er.TEXTURE_CUBE_MAP, Er.TEXTURE_WRAP_T, Er.CLAMP_TO_EDGE), rr.isDDS) {
            const Sr = rr.info,
              Qr = rr.data;
            this._unpackFlipY(Sr.isCompressed), mr.UploadDDSLevels(this, Yr, Qr, Sr, !0, 6, zr)
          } else Ir.c.Warn("DDS is the only prefiltered cube map supported so far.");
          this._bindTextureDirectly(Er.TEXTURE_CUBE_MAP, null);
          const nr = new hr.b(Sr);
          nr._isCube = !0, nr._texture = Yr, Yr.isReady = !0, Nr.push(nr)
        }
        fr._lodTextureHigh = Nr[2], fr._lodTextureMid = Nr[1], fr._lodTextureLow = Nr[0], ar && ar(fr)
      }), fr, Er, pr, xr, Zr, Wr, null, void 0, !1, mr)
    });
    var Yr = Qr(41803);
    let nr = !1;
    nr || (nr = !0, Wr.ThinEngine.prototype.createUniformBuffer = function(rr, Sr) {
      const Qr = this._gl.createBuffer();
      if (!Qr) throw new Error("Unable to create uniform buffer");
      const Zr = new Yr.e(Qr);
      return this.bindUniformBuffer(Zr), rr instanceof Float32Array ? this._gl.bufferData(this._gl.UNIFORM_BUFFER, rr, this._gl.STATIC_DRAW) : this._gl.bufferData(this._gl.UNIFORM_BUFFER, new Float32Array(rr), this._gl.STATIC_DRAW), this.bindUniformBuffer(null), Zr.references = 1, Zr
    }, Wr.ThinEngine.prototype.createDynamicUniformBuffer = function(rr, Sr) {
      const Qr = this._gl.createBuffer();
      if (!Qr) throw new Error("Unable to create dynamic uniform buffer");
      const Zr = new Yr.e(Qr);
      return this.bindUniformBuffer(Zr), rr instanceof Float32Array ? this._gl.bufferData(this._gl.UNIFORM_BUFFER, rr, this._gl.DYNAMIC_DRAW) : this._gl.bufferData(this._gl.UNIFORM_BUFFER, new Float32Array(rr), this._gl.DYNAMIC_DRAW), this.bindUniformBuffer(null), Zr.references = 1, Zr
    }, Wr.ThinEngine.prototype.updateUniformBuffer = function(rr, Sr, Qr, Zr) {
      this.bindUniformBuffer(rr), void 0 === Qr && (Qr = 0), void 0 === Zr ? Sr instanceof Float32Array ? this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, Qr, Sr) : this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, Qr, new Float32Array(Sr)) : Sr instanceof Float32Array ? this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, 0, Sr.subarray(Qr, Qr + Zr)) : this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, 0, new Float32Array(Sr).subarray(Qr, Qr + Zr)), this.bindUniformBuffer(null)
    }, Wr.ThinEngine.prototype.bindUniformBuffer = function(rr) {
      this._gl.bindBuffer(this._gl.UNIFORM_BUFFER, rr ? rr.underlyingResource : null)
    }, Wr.ThinEngine.prototype.bindUniformBufferBase = function(rr, Sr, Qr) {
      this._gl.bindBufferBase(this._gl.UNIFORM_BUFFER, Sr, rr ? rr.underlyingResource : null)
    }, Wr.ThinEngine.prototype.bindUniformBlock = function(rr, Sr, Qr) {
      const Zr = rr.program,
        Wr = this._gl.getUniformBlockIndex(Zr, Sr);
      4294967295 !== Wr && this._gl.uniformBlockBinding(Zr, Wr, Qr)
    });
    var er = Qr(41749),
      Kr = Qr(41784);
    let yr = !1;
    yr || (yr = !0, Kr.e.prototype.displayLoadingUI = function() {
      if (!(0, er.m)()) return;
      const rr = this.loadingScreen;
      rr && rr.displayLoadingUI()
    }, Kr.e.prototype.hideLoadingUI = function() {
      if (!(0, er.m)()) return;
      const rr = this._loadingScreen;
      rr && rr.hideLoadingUI()
    }, Object.defineProperty(Kr.e.prototype, "loadingScreen", {
      get: function() {
        return !this._loadingScreen && this._renderingCanvas && (this._loadingScreen = Kr.e.DefaultLoadingScreenFactory(this._renderingCanvas)), this._loadingScreen
      },
      set: function(rr) {
        this._loadingScreen = rr
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(Kr.e.prototype, "loadingUIText", {
      set: function(rr) {
        this.loadingScreen.loadingUIText = rr
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(Kr.e.prototype, "loadingUIBackgroundColor", {
      set: function(rr) {
        this.loadingScreen.loadingUIBackgroundColor = rr
      },
      enumerable: !0,
      configurable: !0
    })), (0, Qr(41839).d)();
    let Br = !1;
    Br || (Br = !0, Kr.e.prototype.getInputElement = function() {
      return this._renderingCanvas
    }, Kr.e.prototype.getDepthFunction = function() {
      return this._depthCullingState.depthFunc
    }, Kr.e.prototype.setDepthFunction = function(rr) {
      this._depthCullingState.depthFunc = rr
    }, Kr.e.prototype.setDepthFunctionToGreater = function() {
      this.setDepthFunction(516)
    }, Kr.e.prototype.setDepthFunctionToGreaterOrEqual = function() {
      this.setDepthFunction(518)
    }, Kr.e.prototype.setDepthFunctionToLess = function() {
      this.setDepthFunction(513)
    }, Kr.e.prototype.setDepthFunctionToLessOrEqual = function() {
      this.setDepthFunction(515)
    }, Kr.e.prototype.getDepthWrite = function() {
      return this._depthCullingState.depthMask
    }, Kr.e.prototype.setDepthWrite = function(rr) {
      this._depthCullingState.depthMask = rr
    }, Kr.e.prototype.setAlphaConstants = function(rr, Sr, Qr, Zr) {
      this._alphaState.setAlphaBlendConstants(rr, Sr, Qr, Zr)
    }, Kr.e.prototype.getAlphaMode = function() {
      let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
      return this._alphaMode[rr]
    }, Kr.e.prototype.getAlphaEquation = function() {
      let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
      return this._alphaEquation[rr]
    });
    let Tr = !1;
    Tr || (Tr = !0, Kr.e.prototype.getStencilBuffer = function() {
      return this._stencilState.stencilTest
    }, Kr.e.prototype.setStencilBuffer = function(rr) {
      this._stencilState.stencilTest = rr
    }, Kr.e.prototype.getStencilMask = function() {
      return this._stencilState.stencilMask
    }, Kr.e.prototype.setStencilMask = function(rr) {
      this._stencilState.stencilMask = rr
    }, Kr.e.prototype.getStencilFunction = function() {
      return this._stencilState.stencilFunc
    }, Kr.e.prototype.getStencilBackFunction = function() {
      return this._stencilState.stencilBackFunc
    }, Kr.e.prototype.getStencilFunctionReference = function() {
      return this._stencilState.stencilFuncRef
    }, Kr.e.prototype.getStencilFunctionMask = function() {
      return this._stencilState.stencilFuncMask
    }, Kr.e.prototype.setStencilFunction = function(rr) {
      this._stencilState.stencilFunc = rr
    }, Kr.e.prototype.setStencilBackFunction = function(rr) {
      this._stencilState.stencilBackFunc = rr
    }, Kr.e.prototype.setStencilFunctionReference = function(rr) {
      this._stencilState.stencilFuncRef = rr
    }, Kr.e.prototype.setStencilFunctionMask = function(rr) {
      this._stencilState.stencilFuncMask = rr
    }, Kr.e.prototype.getStencilOperationFail = function() {
      return this._stencilState.stencilOpStencilFail
    }, Kr.e.prototype.getStencilBackOperationFail = function() {
      return this._stencilState.stencilBackOpStencilFail
    }, Kr.e.prototype.getStencilOperationDepthFail = function() {
      return this._stencilState.stencilOpDepthFail
    }, Kr.e.prototype.getStencilBackOperationDepthFail = function() {
      return this._stencilState.stencilBackOpDepthFail
    }, Kr.e.prototype.getStencilOperationPass = function() {
      return this._stencilState.stencilOpStencilDepthPass
    }, Kr.e.prototype.getStencilBackOperationPass = function() {
      return this._stencilState.stencilBackOpStencilDepthPass
    }, Kr.e.prototype.setStencilOperationFail = function(rr) {
      this._stencilState.stencilOpStencilFail = rr
    }, Kr.e.prototype.setStencilBackOperationFail = function(rr) {
      this._stencilState.stencilBackOpStencilFail = rr
    }, Kr.e.prototype.setStencilOperationDepthFail = function(rr) {
      this._stencilState.stencilOpDepthFail = rr
    }, Kr.e.prototype.setStencilBackOperationDepthFail = function(rr) {
      this._stencilState.stencilBackOpDepthFail = rr
    }, Kr.e.prototype.setStencilOperationPass = function(rr) {
      this._stencilState.stencilOpStencilDepthPass = rr
    }, Kr.e.prototype.setStencilBackOperationPass = function(rr) {
      this._stencilState.stencilBackOpStencilDepthPass = rr
    }, Kr.e.prototype.cacheStencilState = function() {
      this._cachedStencilBuffer = this.getStencilBuffer(), this._cachedStencilFunction = this.getStencilFunction(), this._cachedStencilMask = this.getStencilMask(), this._cachedStencilOperationPass = this.getStencilOperationPass(), this._cachedStencilOperationFail = this.getStencilOperationFail(), this._cachedStencilOperationDepthFail = this.getStencilOperationDepthFail(), this._cachedStencilReference = this.getStencilFunctionReference()
    }, Kr.e.prototype.restoreStencilState = function() {
      this.setStencilFunction(this._cachedStencilFunction), this.setStencilMask(this._cachedStencilMask), this.setStencilBuffer(this._cachedStencilBuffer), this.setStencilOperationPass(this._cachedStencilOperationPass), this.setStencilOperationFail(this._cachedStencilOperationFail), this.setStencilOperationDepthFail(this._cachedStencilOperationDepthFail), this.setStencilFunctionReference(this._cachedStencilReference)
    });
    Qr(41893);
    let vr = !1;
    vr || (vr = !0, Kr.e.prototype.createDepthStencilTexture = function(rr, Sr, Qr) {
      if (Sr.isCube) {
        const Qr = rr.width || rr;
        return this._createDepthStencilCubeTexture(Qr, Sr)
      }
      return this._createDepthStencilTexture(rr, Sr, Qr)
    });
    Qr(41895), Qr(41925);
    let Or = !1;
    Or || (Or = !0, Wr.ThinEngine.prototype.enableScissor = function(rr, Sr, Qr, Zr) {
      const Wr = this._gl;
      Wr.enable(Wr.SCISSOR_TEST), Wr.scissor(rr, Sr, Qr, Zr)
    }, Wr.ThinEngine.prototype.disableScissor = function() {
      const rr = this._gl;
      rr.disable(rr.SCISSOR_TEST)
    })
  },
  41728: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Kr
    });
    var Zr = Qr(41731),
      Wr = Qr(38587),
      ar = Qr(41737),
      jr = Qr(41787);
    class Ir {
      constructor() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 30;
        this._enabled = !0, this._rollingFrameTime = new fr(rr)
      }
      sampleFrame() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : jr.c.Now;
        if (this._enabled) {
          if (null != this._lastFrameTimeMs) {
            const Sr = rr - this._lastFrameTimeMs;
            this._rollingFrameTime.add(Sr)
          }
          this._lastFrameTimeMs = rr
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
        const rr = this._rollingFrameTime.history(0);
        return 0 === rr ? 0 : 1e3 / rr
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
    class fr {
      constructor(rr) {
        this._samples = new Array(rr), this.reset()
      }
      add(rr) {
        let Sr;
        if (this.isSaturated()) {
          const rr = this._samples[this._pos];
          Sr = rr - this.average, this.average -= Sr / (this._sampleCount - 1), this._m2 -= Sr * (rr - this.average)
        } else this._sampleCount++;
        Sr = rr - this.average, this.average += Sr / this._sampleCount, this._m2 += Sr * (rr - this.average), this.variance = this._m2 / (this._sampleCount - 1), this._samples[this._pos] = rr, this._pos++, this._pos %= this._samples.length
      }
      history(rr) {
        if (rr >= this._sampleCount || rr >= this._samples.length) return 0;
        const Sr = this._wrapPosition(this._pos - 1);
        return this._samples[this._wrapPosition(Sr - rr)]
      }
      isSaturated() {
        return this._sampleCount >= this._samples.length
      }
      reset() {
        this.average = 0, this.variance = 0, this._sampleCount = 0, this._pos = 0, this._m2 = 0
      }
      _wrapPosition(rr) {
        const Sr = this._samples.length;
        return (rr % Sr + Sr) % Sr
      }
    }
    var Er = Qr(41803),
      pr = Qr(40246),
      xr = Qr(41820),
      mr = Qr(41784),
      Nr = Qr(41749);

    function Ur(rr) {
      const Sr = function(rr) {
        if (!(0, Nr.f)() || !document.body) return null;
        const Sr = document.createElement("span");
        Sr.textContent = "Hg", Sr.style.font = rr;
        const Qr = document.createElement("div");
        Qr.style.display = "inline-block", Qr.style.width = "1px", Qr.style.height = "0px", Qr.style.verticalAlign = "bottom";
        const Zr = document.createElement("div");
        let Wr, ar;
        Zr.style.whiteSpace = "nowrap", Zr.appendChild(Sr), Zr.appendChild(Qr), document.body.appendChild(Zr);
        try {
          ar = Qr.getBoundingClientRect().top - Sr.getBoundingClientRect().top, Qr.style.verticalAlign = "baseline", Wr = Qr.getBoundingClientRect().top - Sr.getBoundingClientRect().top
        } finally {
          document.body.removeChild(Zr)
        }
        const jr = {
          ascent: Wr,
          height: ar,
          descent: ar - Wr
        };
        return tr(jr) ? jr : null
      }(rr);
      if (Sr) return Sr;
      const Qr = function(rr) {
        let Sr = null;
        try {
          "undefined" !== typeof OffscreenCanvas ? Sr = new OffscreenCanvas(64, 64) : (0, Nr.f)() && "function" === typeof document.createElement && (Sr = document.createElement("canvas"), Sr.width = 64, Sr.height = 64);
          const Qr = Sr?.getContext("2d");
          if (!Qr) return null;
          Qr.font = rr;
          const Zr = Qr.measureText("Hg"),
            Wr = Number(Zr.actualBoundingBoxAscent ?? Zr.fontBoundingBoxAscent),
            ar = Number(Zr.actualBoundingBoxDescent ?? Zr.fontBoundingBoxDescent),
            jr = {
              ascent: Wr,
              height: Wr + ar,
              descent: ar
            };
          return tr(jr) ? jr : null
        } catch {
          return null
        } finally {
          const rr = Sr;
          "function" === typeof rr?.dispose && rr.dispose()
        }
      }(rr);
      return Qr || function(rr) {
        const Sr = Math.max(1, function(rr) {
            const Sr = /(?:^|\s)([0-9]+(?:\.[0-9]+)?)px(?:\/|\s|$)/.exec(String(rr || ""));
            return Sr ? Number(Sr[1]) : 16
          }(rr)),
          Qr = .8 * Sr,
          Zr = .2 * Sr;
        return {
          ascent: Qr,
          height: Qr + Zr,
          descent: Zr
        }
      }(rr)
    }

    function tr(rr) {
      return Number.isFinite(rr.ascent) && Number.isFinite(rr.height) && Number.isFinite(rr.descent) && rr.height > 0
    }

    function hr(rr) {
      if (rr.requestPointerLock) {
        const Sr = rr.requestPointerLock();
        Sr instanceof Promise ? Sr.then((() => {
          rr.focus()
        })).catch((() => {})) : rr.focus()
      }
    }
    var zr = Qr(41834),
      Yr = Qr(41781),
      nr = Qr(41839),
      er = Qr(41843);
    class Kr extends ar.ThinEngine {
      static get NpmPackage() {
        return mr.e.NpmPackage
      }
      static get Version() {
        return mr.e.Version
      }
      static get Instances() {
        return Wr.b.Instances
      }
      static get LastCreatedEngine() {
        return Wr.b.LastCreatedEngine
      }
      static get LastCreatedScene() {
        return Wr.b.LastCreatedScene
      }
      static DefaultLoadingScreenFactory(rr) {
        return mr.e.DefaultLoadingScreenFactory(rr)
      }
      get _supportsHardwareTextureRescaling() {
        return !!Kr._RescalePostProcessFactory
      }
      _measureFps() {
        this._performanceMonitor.sampleFrame(), this._fps = this._performanceMonitor.averageFPS, this._deltaTime = this._performanceMonitor.instantaneousFrameTime || 0
      }
      get performanceMonitor() {
        return this._performanceMonitor
      }
      constructor(rr, Sr, Qr) {
        let Zr = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        (0, nr.d)(), (0, er.e)(), super(rr, Sr, Qr, Zr), this._performanceMonitor = new Ir, this._drawCalls = new zr.b, rr && (this._features.supportRenderPasses = !0)
      }
      _initGLContext() {
        super._initGLContext(), this._rescalePostProcess = null
      }
      _sharedInit(rr) {
        super._sharedInit(rr),
          function(rr, Sr, Qr) {
            rr._onCanvasFocus = () => {
              rr.onCanvasFocusObservable.notifyObservers(rr)
            }, rr._onCanvasBlur = () => {
              rr.onCanvasBlurObservable.notifyObservers(rr)
            }, rr._onCanvasContextMenu = Sr => {
              rr.disableContextMenu && Sr.preventDefault()
            }, Sr.addEventListener("focus", rr._onCanvasFocus), Sr.addEventListener("blur", rr._onCanvasBlur), Sr.addEventListener("contextmenu", rr._onCanvasContextMenu), rr._onBlur = () => {
              rr.disablePerformanceMonitorInBackground && rr.performanceMonitor.disable(), rr._windowIsBackground = !0
            }, rr._onFocus = () => {
              rr.disablePerformanceMonitorInBackground && rr.performanceMonitor.enable(), rr._windowIsBackground = !1
            }, rr._onCanvasPointerOut = Qr => {
              document.elementFromPoint(Qr.clientX, Qr.clientY) !== Sr && rr.onCanvasPointerOutObservable.notifyObservers(Qr)
            };
            const Zr = rr.getHostWindow();
            Zr && "function" === typeof Zr.addEventListener && (Zr.addEventListener("blur", rr._onBlur), Zr.addEventListener("focus", rr._onFocus)), Sr.addEventListener("pointerout", rr._onCanvasPointerOut), Qr.doNotHandleTouchAction || function(rr) {
              rr && rr.setAttribute && (rr.setAttribute("touch-action", "none"), rr.style.touchAction = "none", rr.style.webkitTapHighlightColor = "transparent")
            }(Sr), !mr.e.audioEngine && Qr.audioEngine && mr.e.AudioEngineFactory && (mr.e.audioEngine = mr.e.AudioEngineFactory(rr.getRenderingCanvas(), rr.getAudioContext(), rr.getAudioDestination())), (0, Nr.f)() && (rr._onFullscreenChange = () => {
              rr.isFullscreen = !!document.fullscreenElement, rr.isFullscreen && rr._pointerLockRequested && Sr && hr(Sr)
            }, document.addEventListener("fullscreenchange", rr._onFullscreenChange, !1), document.addEventListener("webkitfullscreenchange", rr._onFullscreenChange, !1), rr._onPointerLockChange = () => {
              rr.isPointerLock = document.pointerLockElement === Sr
            }, document.addEventListener("pointerlockchange", rr._onPointerLockChange, !1), document.addEventListener("webkitpointerlockchange", rr._onPointerLockChange, !1)), rr.enableOfflineSupport = void 0 !== mr.e.OfflineProviderFactory, rr._deterministicLockstep = !!Qr.deterministicLockstep, rr._lockstepMaxSteps = Qr.lockstepMaxSteps || 0, rr._timeStep = Qr.timeStep || 1 / 60
          }(this, rr, this._creationOptions)
      }
      resizeImageBitmap(rr, Sr, Qr) {
        return function(rr, Sr, Qr, Zr) {
          const Wr = rr.createCanvas(Qr, Zr).getContext("2d");
          if (!Wr) throw new Error("Unable to get 2d context for resizeImageBitmap");
          return Wr.drawImage(Sr, 0, 0), Wr.getImageData(0, 0, Qr, Zr).data
        }(this, rr, Sr, Qr)
      }
      async _createImageBitmapFromSource(rr, Sr) {
        return await async function(rr, Sr, Qr) {
          return await new Promise(((Zr, Wr) => {
            const ar = new Image;
            ar.onload = () => {
              ar.decode().then((() => {
                rr.createImageBitmap(ar, Qr).then((rr => {
                  Zr(rr)
                }))
              }))
            }, ar.onerror = () => {
              Wr(`Error loading image ${ar.src}`)
            }, ar.src = Sr
          }))
        }(this, rr, Sr)
      }
      switchFullscreen(rr) {
        this.isFullscreen ? this.exitFullscreen() : this.enterFullscreen(rr)
      }
      enterFullscreen(rr) {
        this.isFullscreen || (this._pointerLockRequested = rr, this._renderingCanvas && function(rr) {
          const Sr = rr.requestFullscreen || rr.webkitRequestFullscreen;
          Sr && Sr.call(rr)
        }(this._renderingCanvas))
      }
      exitFullscreen() {
        this.isFullscreen && function() {
          const rr = document;
          document.exitFullscreen ? document.exitFullscreen() : rr.webkitCancelFullScreen && rr.webkitCancelFullScreen()
        }()
      }
      setDitheringState(rr) {
        rr ? this._gl.enable(this._gl.DITHER) : this._gl.disable(this._gl.DITHER)
      }
      setRasterizerState(rr) {
        rr ? this._gl.disable(this._gl.RASTERIZER_DISCARD) : this._gl.enable(this._gl.RASTERIZER_DISCARD)
      }
      setDirectViewport(rr, Sr, Qr, Zr) {
        const Wr = this._cachedViewport;
        return this._cachedViewport = null, this._viewport(rr, Sr, Qr, Zr), Wr
      }
      scissorClear(rr, Sr, Qr, Zr, Wr) {
        this.enableScissor(rr, Sr, Qr, Zr), this.clear(Wr, !0, !0, !0), this.disableScissor()
      }
      getVertexShaderSource(rr) {
        const Sr = this._gl.getAttachedShaders(rr);
        return Sr ? this._gl.getShaderSource(Sr[0]) : null
      }
      getFragmentShaderSource(rr) {
        const Sr = this._gl.getAttachedShaders(rr);
        return Sr ? this._gl.getShaderSource(Sr[1]) : null
      }
      set framebufferDimensionsObject(rr) {
        this._framebufferDimensionsObject = rr, this._framebufferDimensionsObject && this.onResizeObservable.notifyObservers(this)
      }
      _rebuildBuffers() {
        for (const rr of this.scenes) rr.resetCachedMaterial(), rr._rebuildGeometries();
        for (const rr of this._virtualScenes) rr.resetCachedMaterial(), rr._rebuildGeometries();
        super._rebuildBuffers()
      }
      getFontOffset(rr) {
        return Ur(rr)
      }
      enterPointerlock() {
        this._renderingCanvas && hr(this._renderingCanvas)
      }
      exitPointerlock() {
        document.exitPointerLock && document.exitPointerLock()
      }
      lB() {
        this._measureFps(), super.lB()
      }
      _deletePipelineContext(rr) {
        const Sr = rr;
        Sr && Sr.program && Sr.transformFeedback && (this.deleteTransformFeedback(Sr.transformFeedback), Sr.transformFeedback = null), super._deletePipelineContext(rr)
      }
      createShaderProgram(rr, Sr, Qr, Zr, Wr) {
        let ar = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        Wr = Wr || this._gl, this.onBeforeShaderCompilationObservable.notifyObservers(this);
        const jr = super.createShaderProgram(rr, Sr, Qr, Zr, Wr, ar);
        return this.onAfterShaderCompilationObservable.notifyObservers(this), jr
      }
      _createShaderProgram(rr, Sr, Qr, Zr) {
        let Wr = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        const ar = Zr.createProgram();
        if (rr.program = ar, !ar) throw new Error("Unable to create program");
        if (Zr.attachShader(ar, Sr), Zr.attachShader(ar, Qr), this.tt > 1 && Wr) {
          const Sr = this.createTransformFeedback();
          this.bindTransformFeedback(Sr), this.setTranformFeedbackVaryings(ar, Wr), rr.transformFeedback = Sr
        }
        return Zr.linkProgram(ar), this.tt > 1 && Wr && this.bindTransformFeedback(null), rr.context = Zr, rr.vertexShader = Sr, rr.fragmentShader = Qr, rr.isParallelCompiled || this._finalizePipelineContext(rr), ar
      }
      _releaseTexture(rr) {
        super._releaseTexture(rr)
      }
      _releaseRenderTargetWrapper(rr) {
        super._releaseRenderTargetWrapper(rr);
        for (const Sr of this.scenes) {
          for (const Qr of Sr.postProcesses) Qr._outputTexture === rr && (Qr._outputTexture = null);
          for (const Qr of Sr.cameras)
            for (const Sr of Qr._postProcesses) Sr && Sr._outputTexture === rr && (Sr._outputTexture = null)
        }
      }
      _rescaleTexture(rr, Sr, Qr, Zr, Wr) {
        this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MAG_FILTER, this._gl.LINEAR), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MIN_FILTER, this._gl.LINEAR), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_S, this._gl.CLAMP_TO_EDGE), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_T, this._gl.CLAMP_TO_EDGE);
        const ar = this.createRenderTargetTexture({
          width: Sr.width,
          height: Sr.height
        }, {
          generateMipMaps: !1,
          type: 0,
          samplingMode: 2,
          generateDepthBuffer: !1,
          generateStencilBuffer: !1
        });
        if (!this._rescalePostProcess && Kr._RescalePostProcessFactory && (this._rescalePostProcess = Kr._RescalePostProcessFactory(this)), this._rescalePostProcess) {
          this._rescalePostProcess.externalTextureSamplerBinding = !0;
          const jr = () => {
              this._rescalePostProcess.onApply = function(Sr) {
                Sr._bindTexture("textureSampler", rr)
              };
              let jr = Qr;
              jr || (jr = this.scenes[this.scenes.length - 1]), jr.postProcessManager.directRender([this._rescalePostProcess], ar, !0), this._bindTextureDirectly(this._gl.TEXTURE_2D, Sr, !0), this._gl.copyTexImage2D(this._gl.TEXTURE_2D, 0, Zr, 0, 0, Sr.width, Sr.height, 0), this.unBindFramebuffer(ar), ar.dispose(), Wr && Wr()
            },
            Ir = this._rescalePostProcess.getEffect();
          Ir ? Ir.executeWhenCompiled(jr) : this._rescalePostProcess.onEffectCreatedObservable.addOnce((rr => {
            rr.executeWhenCompiled(jr)
          }))
        }
      }
      wrapWebGLTexture(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3,
          Wr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          ar = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        const jr = new xr.b(rr, this._gl),
          Ir = new Zr.b(this, 15, !0);
        return Ir._hardwareTexture = jr, Ir.baseWidth = Wr, Ir.baseHeight = ar, Ir.width = Wr, Ir.height = ar, Ir.isReady = !0, Ir.useMipMaps = Sr, this.updateTextureSamplingMode(Qr, Ir), Ir
      }
      updateWrappedWebGLTexture(rr, Sr) {
        if (15 !== rr.source) throw new Error("updateWrappedWebGLTexture: target InternalTexture was not produced by wrapWebGLTexture.");
        for (const Zr of this._renderTargetWrapperCache)
          if (Zr.textures?.includes(rr)) {
            if (Zr.isMulti) throw new Error("updateWrappedWebGLTexture: wrapped texture is part of a multi render-target; not supported. Dispose and re-wrap.");
            if (Zr._depthStencilTexture) throw new Error("updateWrappedWebGLTexture: wrapped texture's render-target wrapper has a depth/stencil texture; not supported. Dispose and re-wrap.")
          } rr._hardwareTexture = new xr.b(Sr, this._gl), rr.isReady = !0, rr._cachedCoordinatesMode = null, rr._cachedWrapU = null, rr._cachedWrapV = null, rr._cachedWrapR = null, rr._cachedAnisotropicFilteringLevel = null;
        for (const Zr in this._boundTexturesCache) this._boundTexturesCache[Zr] === rr && (this._boundTexturesCache[Zr] = null);
        this.updateTextureSamplingMode(rr.samplingMode, rr);
        const Qr = this._gl;
        for (const Zr of this._renderTargetWrapperCache) {
          if (Zr.texture !== rr) continue;
          const Wr = Zr,
            ar = Zr.samples,
            jr = ar > 1;
          Wr._framebuffer && Qr.deleteFramebuffer(Wr._framebuffer), !jr && Wr._depthStencilBuffer && (Qr.deleteRenderbuffer(Wr._depthStencilBuffer), Wr._depthStencilBuffer = null);
          const Ir = this._currentFramebuffer,
            fr = Qr.createFramebuffer();
          this._bindUnboundFramebuffer(fr), Qr.framebufferTexture2D(Qr.FRAMEBUFFER, Qr.COLOR_ATTACHMENT0, Qr.TEXTURE_2D, Sr, 0), jr || (Wr._depthStencilBuffer = this._setupFramebufferDepthAttachments(Zr._generateStencilBuffer, Zr._generateDepthBuffer, Zr.width, Zr.height)), this._bindUnboundFramebuffer(Ir), Wr._framebuffer = fr, jr && (Zr._samples = 1, this.updateRenderTargetTextureSampleCount(Wr, ar))
        }
      }
      _uploadImageToTexture(rr, Sr) {
        let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const Wr = this._gl,
          ar = this._getWebGLTextureType(rr.type),
          jr = this._getInternalFormat(rr.format),
          Ir = this._getRGBABufferInternalSizedFormat(rr.type, jr),
          fr = rr.isCube ? Wr.TEXTURE_CUBE_MAP : Wr.TEXTURE_2D;
        this._bindTextureDirectly(fr, rr, !0), this._unpackFlipY(rr.invertY);
        let Er = Wr.TEXTURE_2D;
        rr.isCube && (Er = Wr.TEXTURE_CUBE_MAP_POSITIVE_X + Qr), Wr.texImage2D(Er, Zr, Ir, jr, ar, Sr), this._bindTextureDirectly(fr, null, !0)
      }
      updateTextureComparisonFunction(rr, Sr) {
        if (1 === this.tt) return void pr.c.Error("WebGL 1 does not support texture comparison.");
        const Qr = this._gl;
        rr.isCube ? (this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, rr, !0), 0 === Sr ? (Qr.texParameteri(Qr.TEXTURE_CUBE_MAP, Qr.TEXTURE_COMPARE_FUNC, 515), Qr.texParameteri(Qr.TEXTURE_CUBE_MAP, Qr.TEXTURE_COMPARE_MODE, Qr.NONE)) : (Qr.texParameteri(Qr.TEXTURE_CUBE_MAP, Qr.TEXTURE_COMPARE_FUNC, Sr), Qr.texParameteri(Qr.TEXTURE_CUBE_MAP, Qr.TEXTURE_COMPARE_MODE, Qr.COMPARE_REF_TO_TEXTURE)), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null)) : (this._bindTextureDirectly(this._gl.TEXTURE_2D, rr, !0), 0 === Sr ? (Qr.texParameteri(Qr.TEXTURE_2D, Qr.TEXTURE_COMPARE_FUNC, 515), Qr.texParameteri(Qr.TEXTURE_2D, Qr.TEXTURE_COMPARE_MODE, Qr.NONE)) : (Qr.texParameteri(Qr.TEXTURE_2D, Qr.TEXTURE_COMPARE_FUNC, Sr), Qr.texParameteri(Qr.TEXTURE_2D, Qr.TEXTURE_COMPARE_MODE, Qr.COMPARE_REF_TO_TEXTURE)), this._bindTextureDirectly(this._gl.TEXTURE_2D, null)), rr._comparisonFunction = Sr
      }
      createInstancesBuffer(rr) {
        const Sr = this._gl.createBuffer();
        if (!Sr) throw new Error("Unable to create instance buffer");
        const Qr = new Er.e(Sr);
        return Qr.sx = rr, this.bindArrayBuffer(Qr), this._gl.bufferData(this._gl.ARRAY_BUFFER, rr, this._gl.DYNAMIC_DRAW), Qr.references = 1, Qr
      }
      deleteInstancesBuffer(rr) {
        this._gl.deleteBuffer(rr)
      }
      async _clientWaitAsync(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10;
        const Zr = this._gl;
        return await new Promise(((Wr, ar) => {
          (0, Yr.f)((() => {
            const Qr = Zr.clientWaitSync(rr, Sr, 0);
            if (Qr == Zr.WAIT_FAILED) throw new Error("clientWaitSync failed");
            return Qr != Zr.TIMEOUT_EXPIRED
          }), Wr, ar, Qr)
        }))
      }
      _readPixelsAsync(rr, Sr, Qr, Zr, Wr, ar, jr) {
        if (this._webGLVersion < 2) throw new Error("_readPixelsAsync only work on WebGL2+");
        const Ir = this._gl,
          fr = Ir.createBuffer();
        Ir.bindBuffer(Ir.PIXEL_PACK_BUFFER, fr), Ir.bufferData(Ir.PIXEL_PACK_BUFFER, jr.byteLength, Ir.STREAM_READ), Ir.readPixels(rr, Sr, Qr, Zr, Wr, ar, 0), Ir.bindBuffer(Ir.PIXEL_PACK_BUFFER, null);
        const Er = Ir.fenceSync(Ir.SYNC_GPU_COMMANDS_COMPLETE, 0);
        return Er ? (Ir.flush(), this._clientWaitAsync(Er, 0, 10).then((() => (Ir.deleteSync(Er), Ir.bindBuffer(Ir.PIXEL_PACK_BUFFER, fr), Ir.getBufferSubData(Ir.PIXEL_PACK_BUFFER, 0, jr), Ir.bindBuffer(Ir.PIXEL_PACK_BUFFER, null), Ir.deleteBuffer(fr), jr)))) : null
      }
      dispose() {
        this.hideLoadingUI?.(), this._rescalePostProcess && this._rescalePostProcess.dispose(),
          function(rr, Sr) {
            1 === Wr.b.Instances.length && mr.e.audioEngine && (mr.e.audioEngine.dispose(), mr.e.audioEngine = null);
            const Qr = rr.getHostWindow();
            Qr && "function" === typeof Qr.removeEventListener && (Qr.removeEventListener("blur", rr._onBlur), Qr.removeEventListener("focus", rr._onFocus)), Sr && (Sr.removeEventListener("focus", rr._onCanvasFocus), Sr.removeEventListener("blur", rr._onCanvasBlur), Sr.removeEventListener("pointerout", rr._onCanvasPointerOut), Sr.removeEventListener("contextmenu", rr._onCanvasContextMenu)), (0, Nr.f)() && (document.removeEventListener("fullscreenchange", rr._onFullscreenChange), document.removeEventListener("mozfullscreenchange", rr._onFullscreenChange), document.removeEventListener("webkitfullscreenchange", rr._onFullscreenChange), document.removeEventListener("msfullscreenchange", rr._onFullscreenChange), document.removeEventListener("pointerlockchange", rr._onPointerLockChange), document.removeEventListener("mspointerlockchange", rr._onPointerLockChange), document.removeEventListener("mozpointerlockchange", rr._onPointerLockChange), document.removeEventListener("webkitpointerlockchange", rr._onPointerLockChange))
          }(this, this._renderingCanvas), super.dispose()
      }
    }
    Kr.ALPHA_DISABLE = 0, Kr.ALPHA_ADD = 1, Kr.ALPHA_COMBINE = 2, Kr.ALPHA_SUBTRACT = 3, Kr.ALPHA_MULTIPLY = 4, Kr.ALPHA_MAXIMIZED = 5, Kr.ALPHA_ONEONE = 6, Kr.ALPHA_PREMULTIPLIED = 7, Kr.ALPHA_PREMULTIPLIED_PORTERDUFF = 8, Kr.ALPHA_INTERPOLATE = 9, Kr.ALPHA_SCREENMODE = 10, Kr.DELAYLOADSTATE_NONE = 0, Kr.DELAYLOADSTATE_LOADED = 1, Kr.DELAYLOADSTATE_LOADING = 2, Kr.DELAYLOADSTATE_NOTLOADED = 4, Kr.NEVER = 512, Kr.ALWAYS = 519, Kr.LESS = 513, Kr.EQUAL = 514, Kr.LEQUAL = 515, Kr.GREATER = 516, Kr.GEQUAL = 518, Kr.NOTEQUAL = 517, Kr.KEEP = 7680, Kr.REPLACE = 7681, Kr.INCR = 7682, Kr.DECR = 7683, Kr.INVERT = 5386, Kr.INCR_WRAP = 34055, Kr.DECR_WRAP = 34056, Kr.TEXTURE_CLAMP_ADDRESSMODE = 0, Kr.TEXTURE_WRAP_ADDRESSMODE = 1, Kr.TEXTURE_MIRROR_ADDRESSMODE = 2, Kr.TEXTUREFORMAT_ALPHA = 0, Kr.TEXTUREFORMAT_LUMINANCE = 1, Kr.TEXTUREFORMAT_LUMINANCE_ALPHA = 2, Kr.TEXTUREFORMAT_RGB = 4, Kr.TEXTUREFORMAT_RGBA = 5, Kr.TEXTUREFORMAT_RED = 6, Kr.TEXTUREFORMAT_R = 6, Kr.TEXTUREFORMAT_R16_UNORM = 33322, Kr.TEXTUREFORMAT_RG16_UNORM = 33324, Kr.TEXTUREFORMAT_RGB16_UNORM = 32852, Kr.TEXTUREFORMAT_RGBA16_UNORM = 32859, Kr.TEXTUREFORMAT_R16_SNORM = 36760, Kr.TEXTUREFORMAT_RG16_SNORM = 36761, Kr.TEXTUREFORMAT_RGB16_SNORM = 36762, Kr.TEXTUREFORMAT_RGBA16_SNORM = 36763, Kr.TEXTUREFORMAT_RG = 7, Kr.TEXTUREFORMAT_RED_INTEGER = 8, Kr.TEXTUREFORMAT_R_INTEGER = 8, Kr.TEXTUREFORMAT_RG_INTEGER = 9, Kr.TEXTUREFORMAT_RGB_INTEGER = 10, Kr.TEXTUREFORMAT_RGBA_INTEGER = 11, Kr.TEXTURETYPE_UNSIGNED_BYTE = 0, Kr.TEXTURETYPE_UNSIGNED_INT = 0, Kr.TEXTURETYPE_FLOAT = 1, Kr.TEXTURETYPE_HALF_FLOAT = 2, Kr.TEXTURETYPE_BYTE = 3, Kr.TEXTURETYPE_SHORT = 4, Kr.TEXTURETYPE_UNSIGNED_SHORT = 5, Kr.TEXTURETYPE_INT = 6, Kr.TEXTURETYPE_UNSIGNED_INTEGER = 7, Kr.TEXTURETYPE_UNSIGNED_SHORT_4_4_4_4 = 8, Kr.TEXTURETYPE_UNSIGNED_SHORT_5_5_5_1 = 9, Kr.TEXTURETYPE_UNSIGNED_SHORT_5_6_5 = 10, Kr.TEXTURETYPE_UNSIGNED_INT_2_10_10_10_REV = 11, Kr.TEXTURETYPE_UNSIGNED_INT_24_8 = 12, Kr.TEXTURETYPE_UNSIGNED_INT_10F_11F_11F_REV = 13, Kr.TEXTURETYPE_UNSIGNED_INT_5_9_9_9_REV = 14, Kr.TEXTURETYPE_FLOAT_32_UNSIGNED_INT_24_8_REV = 15, Kr.TEXTURE_NEAREST_SAMPLINGMODE = 1, Kr.TEXTURE_BILINEAR_SAMPLINGMODE = 2, Kr.TEXTURE_TRILINEAR_SAMPLINGMODE = 3, Kr.TEXTURE_NEAREST_NEAREST_MIPLINEAR = 8, Kr.TEXTURE_LINEAR_LINEAR_MIPNEAREST = 11, Kr.TEXTURE_LINEAR_LINEAR_MIPLINEAR = 3, Kr.TEXTURE_NEAREST_NEAREST_MIPNEAREST = 4, Kr.TEXTURE_NEAREST_LINEAR_MIPNEAREST = 5, Kr.TEXTURE_NEAREST_LINEAR_MIPLINEAR = 6, Kr.TEXTURE_NEAREST_LINEAR = 7, Kr.TEXTURE_NEAREST_NEAREST = 1, Kr.TEXTURE_LINEAR_NEAREST_MIPNEAREST = 9, Kr.TEXTURE_LINEAR_NEAREST_MIPLINEAR = 10, Kr.TEXTURE_LINEAR_LINEAR = 2, Kr.TEXTURE_LINEAR_NEAREST = 12, Kr.TEXTURE_EXPLICIT_MODE = 0, Kr.TEXTURE_SPHERICAL_MODE = 1, Kr.TEXTURE_PLANAR_MODE = 2, Kr.TEXTURE_CUBIC_MODE = 3, Kr.TEXTURE_PROJECTION_MODE = 4, Kr.TEXTURE_SKYBOX_MODE = 5, Kr.TEXTURE_INVCUBIC_MODE = 6, Kr.TEXTURE_EQUIRECTANGULAR_MODE = 7, Kr.TEXTURE_FIXED_EQUIRECTANGULAR_MODE = 8, Kr.TEXTURE_FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9, Kr.SCALEMODE_FLOOR = 1, Kr.SCALEMODE_NEAREST = 2, Kr.SCALEMODE_CEILING = 3
  },
  41859: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Wr
    });
    var Zr = Qr(41827);
    class Wr {
      get depthStencilTexture() {
        return this._depthStencilTexture
      }
      setDepthStencilTexture(rr) {
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && this._depthStencilTexture && this._depthStencilTexture.dispose(), this._depthStencilTexture = rr, this._generateDepthBuffer = this._generateStencilBuffer = this._depthStencilTextureWithStencil = !1, rr && (this._generateDepthBuffer = !0, this._generateStencilBuffer = this._depthStencilTextureWithStencil = (0, Zr.b)(rr.format))
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
      getBaseArrayLayer(rr) {
        if (!this._textures) return -1;
        const Sr = this._textures[rr],
          Qr = this._layerIndices?.[rr] ?? 0,
          Zr = this._faceIndices?.[rr] ?? 0;
        return Sr.isCube ? 6 * Qr + Zr : Sr.is3D ? 0 : Qr
      }
      get samples() {
        return this._samples
      }
      setSamples(rr) {
        let Sr = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          Qr = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.samples === rr && !Qr) return rr;
        const Zr = this._isMulti ? this._engine.updateMultipleRenderTargetTextureSampleCount(this, rr, Sr) : this._engine.updateRenderTargetTextureSampleCount(this, rr);
        return this._samples = rr, Zr
      }
      resolveMSAATextures() {
        this.isMulti ? this._engine.resolveMultiFramebuffer(this) : this._engine.resolveFramebuffer(this)
      }
      generateMipMaps() {
        this._engine._currentRenderTarget === this && (this.isMulti ? this._engine.unBindMultiColorAttachmentFramebuffer(this, !0) : this._engine.unBindFramebuffer(this, !0)), this.isMulti ? this._engine.generateMipMapsMultiFramebuffer(this) : this._engine.generateMipMapsFramebuffer(this)
      }
      constructor(rr, Sr, Qr, Zr, Wr) {
        this._textures = null, this._faceIndices = null, this._layerIndices = null, this._samples = 1, this._attachments = null, this._generateStencilBuffer = !1, this._generateDepthBuffer = !1, this._depthStencilTextureWithStencil = !1, this.disableAutomaticMSAAResolve = !1, this.resolveMSAAColors = !0, this.resolveMSAADepth = !1, this.resolveMSAAStencil = !1, this.depthReadOnly = !1, this.stencilReadOnly = !1, this._isMulti = rr, this._isCube = Sr, this._size = Qr, this._engine = Zr, this._depthStencilTexture = null, this.label = Wr
      }
      setTextures(rr) {
        Array.isArray(rr) ? this._textures = rr : this._textures = rr ? [rr] : null
      }
      setTexture(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Qr = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._textures || (this._textures = []), this._textures[Sr] !== rr && (this._textures[Sr] && Qr && this._textures[Sr].dispose(), this._textures[Sr] = rr)
      }
      setLayerAndFaceIndices(rr, Sr) {
        this._layerIndices = rr, this._faceIndices = Sr
      }
      setLayerAndFaceIndex() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Sr = arguments.length > 1 ? arguments[1] : void 0,
          Qr = arguments.length > 2 ? arguments[2] : void 0;
        this._layerIndices || (this._layerIndices = []), this._faceIndices || (this._faceIndices = []), void 0 !== Sr && Sr >= 0 && (this._layerIndices[rr] = Sr), void 0 !== Qr && Qr >= 0 && (this._faceIndices[rr] = Qr)
      }
      createDepthStencilTexture() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Sr = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          Qr = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          Wr = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          ar = arguments.length > 5 ? arguments[5] : void 0;
        return this._depthStencilTexture?.dispose(), this._depthStencilTextureWithStencil = Qr, this._depthStencilTextureLabel = ar, this._depthStencilTexture = this._engine.createDepthStencilTexture(this._size, {
          bilinearFiltering: Sr,
          comparisonFunction: rr,
          generateStencil: Qr,
          isCube: this._isCube,
          samples: Zr,
          depthTextureFormat: Wr,
          label: ar
        }, this), this._depthStencilTexture
      }
      _shareDepth(rr) {
        this.shareDepth(rr)
      }
      shareDepth(rr) {
        this._depthStencilTexture && (rr._depthStencilTexture && rr._depthStencilTexture.dispose(), rr._depthStencilTexture = this._depthStencilTexture, rr._depthStencilTextureWithStencil = this._depthStencilTextureWithStencil, this._depthStencilTexture.incrementReferences())
      }
      _swapAndDie(rr) {
        this.texture && this.texture._swapAndDie(rr), this._textures = null, this.dispose(!0)
      }
      _cloneRenderTargetWrapper() {
        let rr = null;
        if (this._isMulti) {
          const Sr = this.textures;
          if (Sr && Sr.length > 0) {
            let Qr = !1,
              Zr = Sr.length,
              Wr = -1;
            const ar = Sr[Sr.length - 1]._source;
            14 !== ar && 12 !== ar || (Qr = !0, Wr = Sr[Sr.length - 1].format, Zr--);
            const jr = [],
              Ir = [],
              fr = [],
              Er = [],
              pr = [],
              xr = [],
              mr = [],
              Nr = {};
            for (let rr = 0; rr < Zr; ++rr) {
              const Qr = Sr[rr];
              jr.push(Qr.samplingMode), Ir.push(Qr.type), fr.push(Qr.format);
              void 0 !== Nr[Qr.uniqueId] ? (Er.push(-1), mr.push(0)) : (Nr[Qr.uniqueId] = rr, Qr.is2DArray ? (Er.push(35866), mr.push(Qr.depth)) : Qr.isCube ? (Er.push(34067), mr.push(0)) : Qr.is3D ? (Er.push(32879), mr.push(Qr.depth)) : (Er.push(3553), mr.push(0))), this._faceIndices && pr.push(this._faceIndices[rr] ?? 0), this._layerIndices && xr.push(this._layerIndices[rr] ?? 0)
            }
            const Ur = {
                samplingModes: jr,
                generateMipMaps: Sr[0].generateMipMaps,
                generateDepthBuffer: this._generateDepthBuffer,
                generateStencilBuffer: this._generateStencilBuffer,
                generateDepthTexture: Qr,
                depthTextureFormat: Wr,
                types: Ir,
                formats: fr,
                afr: Zr,
                targetTypes: Er,
                faceIndex: pr,
                layerIndex: xr,
                layerCounts: mr,
                label: this.label
              },
              tr = {
                width: this.width,
                height: this.height,
                depth: this.depth
              };
            rr = this._engine.createMultipleRenderTarget(tr, Ur);
            for (let hr = 0; hr < Zr; ++hr) {
              if (-1 !== Er[hr]) continue;
              const Qr = Nr[Sr[hr].uniqueId];
              rr.setTexture(rr.textures[Qr], hr)
            }
          }
        } else {
          const Sr = {};
          if (Sr.generateDepthBuffer = this._generateDepthBuffer, Sr.generateMipMaps = this.texture?.generateMipMaps ?? !1, Sr.generateStencilBuffer = this._generateStencilBuffer, Sr.samplingMode = this.texture?.samplingMode, Sr.type = this.texture?.type, Sr.format = this.texture?.format, Sr.noColorAttachment = !this._textures, Sr.label = this.label, this.isCube) rr = this._engine.createRenderTargetCubeTexture(this.width, Sr);
          else {
            const Qr = {
              width: this.width,
              height: this.height,
              layers: this.is2DArray || this.is3D ? this.texture?.depth : void 0
            };
            rr = this._engine.createRenderTargetTexture(Qr, Sr)
          }
          rr.texture && (rr.texture.isReady = !0)
        }
        return rr
      }
      _swapRenderTargetWrapper(rr) {
        if (this._textures && rr._textures)
          for (let Sr = 0; Sr < this._textures.length; ++Sr) this._textures[Sr]._swapAndDie(rr._textures[Sr], !1), rr._textures[Sr].isReady = !0;
        this._depthStencilTexture && rr._depthStencilTexture && (this._depthStencilTexture._swapAndDie(rr._depthStencilTexture), rr._depthStencilTexture.isReady = !0), this._textures = null, this._depthStencilTexture = null
      }
      _rebuild() {
        const rr = this._cloneRenderTargetWrapper();
        if (rr) {
          if (this._depthStencilTexture) {
            const Sr = this._depthStencilTexture.samplingMode,
              Qr = this._depthStencilTexture.format,
              Zr = 2 === Sr || 3 === Sr || 11 === Sr;
            rr.createDepthStencilTexture(this._depthStencilTexture._comparisonFunction, Zr, this._depthStencilTextureWithStencil, this._depthStencilTexture.samples, Qr, this._depthStencilTextureLabel)
          }
          this.samples > 1 && rr.setSamples(this.samples), rr._swapRenderTargetWrapper(this), rr.dispose()
        }
      }
      releaseTextures() {
        if (this._textures)
          for (let rr = 0; rr < this._textures.length; ++rr) this._textures[rr].dispose();
        this._textures = null
      }
      dispose() {
        arguments.length > 0 && void 0 !== arguments[0] && arguments[0] || (this._depthStencilTexture?.dispose(), this._depthStencilTexture = null, this.releaseTextures()), this._engine._releaseRenderTargetWrapper(this)
      }
    }
  },
  42273: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => Zr
    });
    class Zr {
      static get ForceFullSceneLoadingForIncremental() {
        return Zr._ForceFullSceneLoadingForIncremental
      }
      static set ForceFullSceneLoadingForIncremental(rr) {
        Zr._ForceFullSceneLoadingForIncremental = rr
      }
      static get ShowLoadingScreen() {
        return Zr._ShowLoadingScreen
      }
      static set ShowLoadingScreen(rr) {
        Zr._ShowLoadingScreen = rr
      }
      static get loggingLevel() {
        return Zr._LoggingLevel
      }
      static set loggingLevel(rr) {
        Zr._LoggingLevel = rr
      }
      static get CleanBoneMatrixWeights() {
        return Zr._CleanBoneMatrixWeights
      }
      static set CleanBoneMatrixWeights(rr) {
        Zr._CleanBoneMatrixWeights = rr
      }
    }
    Zr._ForceFullSceneLoadingForIncremental = !1, Zr._ShowLoadingScreen = !0, Zr._CleanBoneMatrixWeights = !1, Zr._LoggingLevel = 0
  },
  41928: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => jr
    });
    var Zr = Qr(40246);
    const Wr = new Map;

    function ar(rr, Sr) {
      (function(rr) {
        return Wr.delete(rr)
      })(rr) && Zr.c.Warn(`Extension with the name '${rr}' already exists`), Wr.set(rr, Sr)
    }

    function jr(rr, Sr) {
      "image/ktx" !== Sr && "image/ktx2" !== Sr || (rr = ".ktx"), Wr.has(rr) || (rr.endsWith(".ies") && ar(".ies", (async () => await Qr.e(628).then((() => Qr(54312))).then((rr => new rr._IESTextureLoader)))), rr.endsWith(".dds") && ar(".dds", (async () => await Qr.e(626).then((() => Qr(54317))).then((rr => new rr._DDSTextureLoader)))), rr.endsWith(".basis") && ar(".basis", (async () => await Qr.e(629).then((() => Qr(54320))).then((rr => new rr._BasisTextureLoader)))), rr.endsWith(".env") && ar(".env", (async () => await Promise.all([Qr.e(630), Qr.e(627)]).then((() => Qr(54322))).then((rr => new rr._ENVTextureLoader)))), rr.endsWith(".hdr") && ar(".hdr", (async () => await Qr.e(631).then((() => Qr(54374))).then((rr => new rr._HDRTextureLoader)))), (rr.endsWith(".ktx") || rr.endsWith(".ktx2")) && (ar(".ktx", (async () => await Qr.e(632).then((() => Qr(54376))).then((rr => new rr._KTXTextureLoader)))), ar(".ktx2", (async () => await Qr.e(632).then((() => Qr(54376))).then((rr => new rr._KTXTextureLoader))))), rr.endsWith(".tga") && ar(".tga", (async () => await Qr.e(633).then((() => Qr(54383))).then((rr => new rr._TGATextureLoader)))), rr.endsWith(".exr") && ar(".exr", (async () => await Qr.e(634).then((() => Qr(54386))).then((rr => new rr._ExrTextureLoader)))));
      const Zr = Wr.get(rr);
      return Zr ? Promise.resolve(Zr(Sr)) : null
    }
  },
  42293: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => jr,
      f: () => Er
    });
    var Zr = Qr(42130),
      Wr = Qr(41891),
      ar = Qr(38609);
    class jr extends Zr.d {
      get Lrr() {
        return this._subMaterials
      }
      set Lrr(rr) {
        this._subMaterials = rr, this._hookArray(rr)
      }
      getChildren() {
        return this.Lrr
      }
      constructor(rr, Sr) {
        super(rr, Sr, !0), this._waitingSubMaterialsUniqueIds = [], this.eC().addMultiMaterial(this), this.Lrr = [], this._storeEffectOnSubMeshes = !0
      }
      _hookArray(rr) {
        var Sr = this;
        const Qr = rr.push;
        rr.push = function() {
          for (var Zr = arguments.length, Wr = new Array(Zr), ar = 0; ar < Zr; ar++) Wr[ar] = arguments[ar];
          const jr = Qr.apply(rr, Wr);
          return Sr._markAllSubMeshesAsTexturesDirty(), jr
        };
        const Zr = rr.splice;
        rr.splice = (Sr, Qr) => {
          const Wr = Zr.call(rr, Sr, Qr ?? rr.length);
          return this._markAllSubMeshesAsTexturesDirty(), Wr
        }
      }
      getSubMaterial(rr) {
        return rr < 0 || rr >= this.Lrr.length ? this.eC().defaultMaterial : this.Lrr[rr]
      }
      getActiveTextures() {
        return super.getActiveTextures().concat(...this.Lrr.map((rr => rr ? rr.getActiveTextures() : [])))
      }
      hasTexture(rr) {
        if (super.hasTexture(rr)) return !0;
        for (let Sr = 0; Sr < this.Lrr.length; Sr++)
          if (this.Lrr[Sr]?.hasTexture(rr)) return !0;
        return !1
      }
      getClassName() {
        return "MultiMaterial"
      }
      isReadyForSubMesh(rr, Sr, Qr) {
        for (let Zr = 0; Zr < this.Lrr.length; Zr++) {
          const Wr = this.Lrr[Zr];
          if (Wr) {
            if (Wr._storeEffectOnSubMeshes) {
              if (!Wr.isReadyForSubMesh(rr, Sr, Qr)) return !1;
              continue
            }
            if (!Wr.isReady(rr)) return !1
          }
        }
        return !0
      }
      clone(rr, Sr) {
        const Qr = new jr(rr, this.eC());
        for (let Zr = 0; Zr < this.Lrr.length; Zr++) {
          let Wr;
          const ar = this.Lrr[Zr];
          Wr = Sr && ar ? ar.clone(rr + "-" + ar.name) : this.Lrr[Zr], Qr.Lrr.push(Wr)
        }
        return Qr
      }
      serialize() {
        const rr = {};
        rr.name = this.name, rr.id = this.id, rr.uniqueId = this.uniqueId, Wr.b && (rr.tags = Wr.b.GetTags(this)), rr.materialsUniqueIds = [], rr.materials = [];
        for (let Sr = 0; Sr < this.Lrr.length; Sr++) {
          const Qr = this.Lrr[Sr];
          Qr ? (rr.materialsUniqueIds.push(Qr.uniqueId), rr.materials.push(Qr.id)) : (rr.materialsUniqueIds.push(null), rr.materials.push(null))
        }
        return rr
      }
      dispose(rr, Sr, Qr) {
        const Zr = this.eC();
        if (!Zr) return;
        if (Qr)
          for (let ar = 0; ar < this.Lrr.length; ar++) {
            const Qr = this.Lrr[ar];
            Qr && Qr.dispose(rr, Sr)
          }
        const Wr = Zr.multiMaterials.indexOf(this);
        Wr >= 0 && Zr.multiMaterials.splice(Wr, 1), super.dispose(rr, Sr)
      }
    }
    let Ir = !1;

    function fr(rr, Sr) {
      const Qr = new jr(rr.name, Sr);
      if (Qr.id = rr.id, Qr._loadedUniqueId = rr.uniqueId, Wr.b && Wr.b.AddTagsTo(Qr, rr.tags), rr.materialsUniqueIds) Qr._waitingSubMaterialsUniqueIds = rr.materialsUniqueIds;
      else
        for (const Zr of rr.materials) Qr.Lrr.push(Sr.getLastMaterialById(Zr));
      return Qr
    }

    function Er() {
      Ir || (Ir = !0, jr.ParseMultiMaterial = fr, (0, ar.e)("BABYLON.MultiMaterial", jr))
    }
  },
  42069: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => jr
    });
    var Zr, Wr, ar = Qr(38560);
    ! function(rr) {
      rr[rr.LOCAL = 0] = "LOCAL", rr[rr.WORLD = 1] = "WORLD", rr[rr.BONE = 2] = "BONE"
    }(Zr || (Zr = {}));
    class jr {}
    jr.X = new ar.u(1, 0, 0), jr.Y = new ar.u(0, 1, 0), jr.Z = new ar.u(0, 0, 1),
      function(rr) {
        rr[rr.X = 0] = "X", rr[rr.Y = 1] = "Y", rr[rr.Z = 2] = "Z"
      }(Wr || (Wr = {}))
  },
  41861: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => fr,
      d: () => Er
    });
    var Zr = Qr(38560);
    const Wr = [Math.sqrt(1 / (4 * Math.PI)), -Math.sqrt(3 / (4 * Math.PI)), Math.sqrt(3 / (4 * Math.PI)), -Math.sqrt(3 / (4 * Math.PI)), Math.sqrt(15 / (4 * Math.PI)), -Math.sqrt(15 / (4 * Math.PI)), Math.sqrt(5 / (16 * Math.PI)), -Math.sqrt(15 / (4 * Math.PI)), Math.sqrt(15 / (16 * Math.PI))],
      ar = [() => 1, rr => rr.y, rr => rr.z, rr => rr.x, rr => rr.x * rr.y, rr => rr.y * rr.z, rr => 3 * rr.z * rr.z - 1, rr => rr.x * rr.z, rr => rr.x * rr.x - rr.y * rr.y],
      jr = (rr, Sr) => Wr[rr] * ar[rr](Sr),
      Ir = [Math.PI, 2 * Math.PI / 3, 2 * Math.PI / 3, 2 * Math.PI / 3, Math.PI / 4, Math.PI / 4, Math.PI / 4, Math.PI / 4, Math.PI / 4];
    class fr {
      constructor() {
        this.preScaled = !1, this.l00 = Zr.u.Zero(), this.l1_1 = Zr.u.Zero(), this.l10 = Zr.u.Zero(), this.l11 = Zr.u.Zero(), this.l2_2 = Zr.u.Zero(), this.l2_1 = Zr.u.Zero(), this.l20 = Zr.u.Zero(), this.l21 = Zr.u.Zero(), this.l22 = Zr.u.Zero()
      }
      addLight(rr, Sr, Qr) {
        Zr.n.kU[0].set(Sr.r, Sr.g, Sr.b);
        const Wr = Zr.n.kU[0],
          ar = Zr.n.kU[1];
        Wr.scaleToRef(Qr, ar), ar.scaleToRef(jr(0, rr), Zr.n.kU[2]), this.l00.addInPlace(Zr.n.kU[2]), ar.scaleToRef(jr(1, rr), Zr.n.kU[2]), this.l1_1.addInPlace(Zr.n.kU[2]), ar.scaleToRef(jr(2, rr), Zr.n.kU[2]), this.l10.addInPlace(Zr.n.kU[2]), ar.scaleToRef(jr(3, rr), Zr.n.kU[2]), this.l11.addInPlace(Zr.n.kU[2]), ar.scaleToRef(jr(4, rr), Zr.n.kU[2]), this.l2_2.addInPlace(Zr.n.kU[2]), ar.scaleToRef(jr(5, rr), Zr.n.kU[2]), this.l2_1.addInPlace(Zr.n.kU[2]), ar.scaleToRef(jr(6, rr), Zr.n.kU[2]), this.l20.addInPlace(Zr.n.kU[2]), ar.scaleToRef(jr(7, rr), Zr.n.kU[2]), this.l21.addInPlace(Zr.n.kU[2]), ar.scaleToRef(jr(8, rr), Zr.n.kU[2]), this.l22.addInPlace(Zr.n.kU[2])
      }
      scaleInPlace(rr) {
        this.l00.scaleInPlace(rr), this.l1_1.scaleInPlace(rr), this.l10.scaleInPlace(rr), this.l11.scaleInPlace(rr), this.l2_2.scaleInPlace(rr), this.l2_1.scaleInPlace(rr), this.l20.scaleInPlace(rr), this.l21.scaleInPlace(rr), this.l22.scaleInPlace(rr)
      }
      convertIncidentRadianceToIrradiance() {
        this.l00.scaleInPlace(Ir[0]), this.l1_1.scaleInPlace(Ir[1]), this.l10.scaleInPlace(Ir[2]), this.l11.scaleInPlace(Ir[3]), this.l2_2.scaleInPlace(Ir[4]), this.l2_1.scaleInPlace(Ir[5]), this.l20.scaleInPlace(Ir[6]), this.l21.scaleInPlace(Ir[7]), this.l22.scaleInPlace(Ir[8])
      }
      convertIrradianceToLambertianRadiance() {
        this.scaleInPlace(1 / Math.PI)
      }
      preScaleForRendering() {
        this.preScaled = !0, this.l00.scaleInPlace(Wr[0]), this.l1_1.scaleInPlace(Wr[1]), this.l10.scaleInPlace(Wr[2]), this.l11.scaleInPlace(Wr[3]), this.l2_2.scaleInPlace(Wr[4]), this.l2_1.scaleInPlace(Wr[5]), this.l20.scaleInPlace(Wr[6]), this.l21.scaleInPlace(Wr[7]), this.l22.scaleInPlace(Wr[8])
      }
      updateFromArray(rr) {
        return Zr.u.FromArrayToRef(rr[0], 0, this.l00), Zr.u.FromArrayToRef(rr[1], 0, this.l1_1), Zr.u.FromArrayToRef(rr[2], 0, this.l10), Zr.u.FromArrayToRef(rr[3], 0, this.l11), Zr.u.FromArrayToRef(rr[4], 0, this.l2_2), Zr.u.FromArrayToRef(rr[5], 0, this.l2_1), Zr.u.FromArrayToRef(rr[6], 0, this.l20), Zr.u.FromArrayToRef(rr[7], 0, this.l21), Zr.u.FromArrayToRef(rr[8], 0, this.l22), this
      }
      updateFromFloatsArray(rr) {
        return Zr.u.FromFloatsToRef(rr[0], rr[1], rr[2], this.l00), Zr.u.FromFloatsToRef(rr[3], rr[4], rr[5], this.l1_1), Zr.u.FromFloatsToRef(rr[6], rr[7], rr[8], this.l10), Zr.u.FromFloatsToRef(rr[9], rr[10], rr[11], this.l11), Zr.u.FromFloatsToRef(rr[12], rr[13], rr[14], this.l2_2), Zr.u.FromFloatsToRef(rr[15], rr[16], rr[17], this.l2_1), Zr.u.FromFloatsToRef(rr[18], rr[19], rr[20], this.l20), Zr.u.FromFloatsToRef(rr[21], rr[22], rr[23], this.l21), Zr.u.FromFloatsToRef(rr[24], rr[25], rr[26], this.l22), this
      }
      static FromArray(rr) {
        return (new fr).updateFromArray(rr)
      }
      static FromPolynomial(rr) {
        const Sr = new fr;
        return Sr.l00 = rr.xx.scale(.376127).add(rr.yy.scale(.376127)).add(rr.zz.scale(.376126)), Sr.l1_1 = rr.y.scale(.977204), Sr.l10 = rr.z.scale(.977204), Sr.l11 = rr.x.scale(.977204), Sr.l2_2 = rr.xy.scale(1.16538), Sr.l2_1 = rr.yz.scale(1.16538), Sr.l20 = rr.zz.scale(1.34567).subtract(rr.xx.scale(.672834)).subtract(rr.yy.scale(.672834)), Sr.l21 = rr.zx.scale(1.16538), Sr.l22 = rr.xx.scale(1.16538).subtract(rr.yy.scale(1.16538)), Sr.l1_1.scaleInPlace(-1), Sr.l11.scaleInPlace(-1), Sr.l2_1.scaleInPlace(-1), Sr.l21.scaleInPlace(-1), Sr.scaleInPlace(Math.PI), Sr
      }
    }
    class Er {
      constructor() {
        this.x = Zr.u.Zero(), this.y = Zr.u.Zero(), this.z = Zr.u.Zero(), this.xx = Zr.u.Zero(), this.yy = Zr.u.Zero(), this.zz = Zr.u.Zero(), this.xy = Zr.u.Zero(), this.yz = Zr.u.Zero(), this.zx = Zr.u.Zero()
      }
      get preScaledHarmonics() {
        return this._harmonics || (this._harmonics = fr.FromPolynomial(this)), this._harmonics.preScaled || this._harmonics.preScaleForRendering(), this._harmonics
      }
      addAmbient(rr) {
        Zr.n.kU[0].Hrr(rr.r, rr.g, rr.b);
        const Sr = Zr.n.kU[0];
        this.xx.addInPlace(Sr), this.yy.addInPlace(Sr), this.zz.addInPlace(Sr)
      }
      scaleInPlace(rr) {
        this.x.scaleInPlace(rr), this.y.scaleInPlace(rr), this.z.scaleInPlace(rr), this.xx.scaleInPlace(rr), this.yy.scaleInPlace(rr), this.zz.scaleInPlace(rr), this.yz.scaleInPlace(rr), this.zx.scaleInPlace(rr), this.xy.scaleInPlace(rr)
      }
      updateFromHarmonics(rr) {
        return this._harmonics = rr, this.x.iH(rr.l11), this.x.scaleInPlace(1.02333).scaleInPlace(-1), this.y.iH(rr.l1_1), this.y.scaleInPlace(1.02333).scaleInPlace(-1), this.z.iH(rr.l10), this.z.scaleInPlace(1.02333), this.xx.iH(rr.l00), Zr.n.kU[0].iH(rr.l20).scaleInPlace(.247708), Zr.n.kU[1].iH(rr.l22).scaleInPlace(.429043), this.xx.scaleInPlace(.886277).iWr(Zr.n.kU[0]).addInPlace(Zr.n.kU[1]), this.yy.iH(rr.l00), this.yy.scaleInPlace(.886277).iWr(Zr.n.kU[0]).iWr(Zr.n.kU[1]), this.zz.iH(rr.l00), Zr.n.kU[0].iH(rr.l20).scaleInPlace(.495417), this.zz.scaleInPlace(.886277).addInPlace(Zr.n.kU[0]), this.yz.iH(rr.l2_1), this.yz.scaleInPlace(.858086).scaleInPlace(-1), this.zx.iH(rr.l21), this.zx.scaleInPlace(.858086).scaleInPlace(-1), this.xy.iH(rr.l2_2), this.xy.scaleInPlace(.858086), this.scaleInPlace(1 / Math.PI), this
      }
      static FromHarmonics(rr) {
        return (new Er).updateFromHarmonics(rr)
      }
      static FromArray(rr) {
        const Sr = new Er;
        return Zr.u.FromArrayToRef(rr[0], 0, Sr.x), Zr.u.FromArrayToRef(rr[1], 0, Sr.y), Zr.u.FromArrayToRef(rr[2], 0, Sr.z), Zr.u.FromArrayToRef(rr[3], 0, Sr.xx), Zr.u.FromArrayToRef(rr[4], 0, Sr.yy), Zr.u.FromArrayToRef(rr[5], 0, Sr.zz), Zr.u.FromArrayToRef(rr[6], 0, Sr.yz), Zr.u.FromArrayToRef(rr[7], 0, Sr.zx), Zr.u.FromArrayToRef(rr[8], 0, Sr.xy), Sr
      }
    }
  },
  42284: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => Hr,
      f: () => Rr
    });
    var Zr = Qr(41872),
      Wr = Qr(38595),
      ar = Qr(38560),
      jr = Qr(41995),
      Ir = Qr(42256),
      fr = Qr(42287),
      Er = Qr(41989),
      pr = Qr(42147),
      xr = Qr(41987);
    class mr {
      constructor() {
        this._checkCollisions = !1, this._collisionMask = -1, this._collisionGroup = -1, this._surroundingMeshes = null, this._collider = null, this._oldPositionForCollisions = new ar.u(0, 0, 0), this._diffPositionForCollisions = new ar.u(0, 0, 0), this._collisionResponse = !0
      }
    }
    var Nr, Ur, tr, hr = Qr(41769),
      zr = Qr(41922),
      Yr = Qr(42162),
      nr = Qr(38684),
      er = Qr(38569),
      Kr = Qr(42069),
      yr = Qr(40246),
      Br = Qr(41875),
      Tr = Qr(41784),
      vr = Qr(38609);

    function Or(rr, Sr) {
      return rr - Math.floor(rr / Sr) * Sr
    }

    function Lr(rr, Sr, Qr) {
      rr instanceof Float32Array ? ar.d.FromArrayToRef(rr, Sr, Qr) : Qr.Hrr((0, zr.c)(rr[Sr]), (0, zr.c)(rr[Sr + 1]), (0, zr.c)(rr[Sr + 2]), (0, zr.c)(rr[Sr + 3]), (0, zr.c)(rr[Sr + 4]), (0, zr.c)(rr[Sr + 5]), (0, zr.c)(rr[Sr + 6]), (0, zr.c)(rr[Sr + 7]), (0, zr.c)(rr[Sr + 8]), (0, zr.c)(rr[Sr + 9]), (0, zr.c)(rr[Sr + 10]), (0, zr.c)(rr[Sr + 11]), (0, zr.c)(rr[Sr + 12]), (0, zr.c)(rr[Sr + 13]), (0, zr.c)(rr[Sr + 14]), (0, zr.c)(rr[Sr + 15]))
    }

    function lr(rr, Sr, Qr, Zr, Wr, Ir, fr, Er, pr) {
      const xr = Qr.texture,
        mr = xr?.getInternalTexture(),
        Nr = mr?._bufferView;
      if (!(Nr instanceof Float32Array) && !(Nr instanceof Uint16Array)) return yr.c.Warn("Baked vertex animation bounding info requires CPU-readable Float32Array or Uint16Array texture data.", 1), !1;
      const Ur = xr.getSize(),
        tr = function(rr, Sr) {
          const Qr = rr.y - rr.x + 1,
            Zr = Sr * rr.w / Qr,
            Wr = Zr < 1 ? 0 : 1,
            ar = Qr - Wr;
          let jr = Or(Zr - Math.floor(Zr), 1) * ar;
          return jr = Or(jr + rr.z, ar), Math.floor(jr) + rr.x + Wr
        }(Zr, Qr.time);
      if (!isFinite(tr) || tr < 0 || tr >= Ur.height) return yr.c.Warn("Baked vertex animation bounding info could not be refreshed because the computed frame is outside the texture.", 1), !1;
      const hr = ar.n.kU[0],
        zr = ar.n.Matrix[0],
        Yr = ar.n.Matrix[1],
        nr = tr * Ur.width * 4,
        er = Sr === jr.j.NormalKind ? ar.u.TransformNormalFromFloatsToRef : ar.u.TransformCoordinatesFromFloatsToRef;
      for (let ar = 0, jr = 0; ar < rr.length; ar += 3, jr += 4) {
        let Sr, Qr;
        for (zr.reset(), Sr = 0; Sr < 4 && Sr < pr; Sr++) Qr = Ir[jr + Sr], Qr > 0 && (Lr(Nr, nr + 16 * Math.floor(Wr[jr + Sr]), Yr), Yr.scaleAndAddToRef(Qr, zr));
        if (fr && Er)
          for (Sr = 0; Sr < 4 && Sr + 4 < pr; Sr++) Qr = Er[jr + Sr], Qr > 0 && (Lr(Nr, nr + 16 * Math.floor(fr[jr + Sr]), Yr), Yr.scaleAndAddToRef(Qr, zr));
        er(rr[ar], rr[ar + 1], rr[ar + 2], zr, hr), hr.toArray(rr, ar)
      }
      return !0
    }
    class Xr {
      constructor() {
        this.facetNb = 0, this.partitioningSubdivisions = 10, this.partitioningBBoxRatio = 1.01, this.facetDataEnabled = !1, this.facetParameters = {}, this.bbSize = ar.u.Zero(), this.subDiv = {
          max: 1,
          X: 1,
          Y: 1,
          Z: 1
        }, this.facetDepthSort = !1, this.facetDepthSortEnabled = !1
      }
    }
    class Pr {
      constructor() {
        this._hasVertexAlpha = !1, this._useVertexColors = !0, this._numBoneInfluencers = 4, this._applyFog = !0, this._receiveShadows = !1, this._facetData = new Xr, this._visibility = 1, this._skeleton = null, this._layerMask = 268435455, this._computeBonesUsingShaders = !0, this._isActive = !1, this._onlyForInstances = !1, this._isActiveIntermediate = !1, this._onlyForInstancesIntermediate = !1, this._actAsRegularMesh = !1, this._currentLOD = new Map, this._collisionRetryCount = 3, this._morphTargetManager = null, this._renderingGroupId = 0, this._meshBlendingTag = 0, this._bakedVertexAnimationManager = null, this._material = null, this._positions = null, this._pointerOverDisableMeshTesting = !1, this._meshCollisionData = new mr, this._enableDistantPicking = !1, this._rawBoundingInfo = null, this._sideOrientationHint = !1, this._wasActiveLastFrame = !1
      }
    }
    let Hr = (() => {
        var rr;
        let Sr, mr = fr.e,
          Nr = [];
        return rr = class extends mr {
          static get BILLBOARDMODE_NONE() {
            return fr.e.BILLBOARDMODE_NONE
          }
          static get BILLBOARDMODE_X() {
            return fr.e.BILLBOARDMODE_X
          }
          static get BILLBOARDMODE_Y() {
            return fr.e.BILLBOARDMODE_Y
          }
          static get BILLBOARDMODE_Z() {
            return fr.e.BILLBOARDMODE_Z
          }
          static get BILLBOARDMODE_ALL() {
            return fr.e.BILLBOARDMODE_ALL
          }
          static get BILLBOARDMODE_USE_POSITION() {
            return fr.e.BILLBOARDMODE_USE_POSITION
          }
          get facetNb() {
            return this._internalAbstractMeshDataInfo._facetData.facetNb
          }
          get partitioningSubdivisions() {
            return this._internalAbstractMeshDataInfo._facetData.partitioningSubdivisions
          }
          set partitioningSubdivisions(rr) {
            this._internalAbstractMeshDataInfo._facetData.partitioningSubdivisions = rr
          }
          get partitioningBBoxRatio() {
            return this._internalAbstractMeshDataInfo._facetData.partitioningBBoxRatio
          }
          set partitioningBBoxRatio(rr) {
            this._internalAbstractMeshDataInfo._facetData.partitioningBBoxRatio = rr
          }
          get mustDepthSortFacets() {
            return this._internalAbstractMeshDataInfo._facetData.facetDepthSort
          }
          set mustDepthSortFacets(rr) {
            this._internalAbstractMeshDataInfo._facetData.facetDepthSort = rr
          }
          get facetDepthSortFrom() {
            return this._internalAbstractMeshDataInfo._facetData.facetDepthSortFrom
          }
          set facetDepthSortFrom(rr) {
            this._internalAbstractMeshDataInfo._facetData.facetDepthSortFrom = rr
          }
          get collisionRetryCount() {
            return this._internalAbstractMeshDataInfo._collisionRetryCount
          }
          set collisionRetryCount(rr) {
            this._internalAbstractMeshDataInfo._collisionRetryCount = rr
          }
          get isFacetDataEnabled() {
            return this._internalAbstractMeshDataInfo._facetData.facetDataEnabled
          }
          get morphTargetManager() {
            return this._internalAbstractMeshDataInfo._morphTargetManager
          }
          set morphTargetManager(rr) {
            this._internalAbstractMeshDataInfo._morphTargetManager !== rr && (this._internalAbstractMeshDataInfo._morphTargetManager = rr, this._syncGeometryWithMorphTargetManager())
          }
          get bakedVertexAnimationManager() {
            return this._internalAbstractMeshDataInfo._bakedVertexAnimationManager
          }
          set bakedVertexAnimationManager(rr) {
            this._internalAbstractMeshDataInfo._bakedVertexAnimationManager !== rr && (this._internalAbstractMeshDataInfo._bakedVertexAnimationManager = rr, this._markSubMeshesAsAttributesDirty())
          }
          _syncGeometryWithMorphTargetManager() {}
          _updateNonUniformScalingState(rr) {
            return !!super._updateNonUniformScalingState(rr) && (this._markSubMeshesAsMiscDirty(), !0)
          }
          get rawBoundingInfo() {
            return this._internalAbstractMeshDataInfo._rawBoundingInfo
          }
          set rawBoundingInfo(rr) {
            this._internalAbstractMeshDataInfo._rawBoundingInfo = rr
          }
          set Am(rr) {
            this._internalAbstractMeshDataInfo._meshCollisionData._onCollideObserver && this.onCollideObservable.remove(this._internalAbstractMeshDataInfo._meshCollisionData._onCollideObserver), this._internalAbstractMeshDataInfo._meshCollisionData._onCollideObserver = this.onCollideObservable.add(rr)
          }
          set onCollisionPositionChange(rr) {
            this._internalAbstractMeshDataInfo._meshCollisionData._onCollisionPositionChangeObserver && this.onCollisionPositionChangeObservable.remove(this._internalAbstractMeshDataInfo._meshCollisionData._onCollisionPositionChangeObserver), this._internalAbstractMeshDataInfo._meshCollisionData._onCollisionPositionChangeObserver = this.onCollisionPositionChangeObservable.add(rr)
          }
          get visibility() {
            return this._internalAbstractMeshDataInfo._visibility
          }
          set visibility(rr) {
            if (this._internalAbstractMeshDataInfo._visibility === rr) return;
            const Sr = this._internalAbstractMeshDataInfo._visibility;
            this._internalAbstractMeshDataInfo._visibility = rr, (1 === Sr && 1 !== rr || 1 !== Sr && 1 === rr) && this._markSubMeshesAsDirty((rr => {
              rr.markAsMiscDirty(), rr.markAsPrePassDirty()
            }))
          }
          get pointerOverDisableMeshTesting() {
            return this._internalAbstractMeshDataInfo._pointerOverDisableMeshTesting
          }
          set pointerOverDisableMeshTesting(rr) {
            this._internalAbstractMeshDataInfo._pointerOverDisableMeshTesting = rr
          }
          get renderingGroupId() {
            return this._internalAbstractMeshDataInfo._renderingGroupId
          }
          set renderingGroupId(rr) {
            this._internalAbstractMeshDataInfo._renderingGroupId = rr
          }
          get meshBlendingTag() {
            return this._internalAbstractMeshDataInfo._meshBlendingTag
          }
          set meshBlendingTag(rr) {
            if (!Number.isInteger(rr) || rr < 0 || rr > 255 || 0 !== rr && 0 === (63 & rr)) throw new RangeError("Mesh-blending tag must be 0 or contain a group ID between 1 and 63.");
            this._internalAbstractMeshDataInfo._meshBlendingTag = rr
          }
          get material() {
            return this._internalAbstractMeshDataInfo._material
          }
          set material(rr) {
            this._setMaterial(rr)
          }
          _setMaterial(rr) {
            this._internalAbstractMeshDataInfo._material !== rr && (this._internalAbstractMeshDataInfo._material && this._internalAbstractMeshDataInfo._material.meshMap && (this._internalAbstractMeshDataInfo._material.meshMap[this.uniqueId] = void 0), this._internalAbstractMeshDataInfo._material = rr, rr && rr.meshMap && (rr.meshMap[this.uniqueId] = this), this.onMaterialChangedObservable.hasObservers() && this.onMaterialChangedObservable.notifyObservers(this), this.jT && (this.resetDrawCache(void 0, null == rr), this._unBindEffect()))
          }
          getMaterialForRenderPass(rr) {
            return this._internalAbstractMeshDataInfo._materialForRenderPass?.[rr]
          }
          setMaterialForRenderPass(rr, Sr) {
            this.resetDrawCache(rr), this._internalAbstractMeshDataInfo._materialForRenderPass || (this._internalAbstractMeshDataInfo._materialForRenderPass = []);
            const Qr = this._internalAbstractMeshDataInfo._materialForRenderPass[rr];
            Qr?.meshMap?.[this.uniqueId] && (Qr.meshMap[this.uniqueId] = void 0), this._internalAbstractMeshDataInfo._materialForRenderPass[rr] = Sr, Sr && Sr.meshMap && (Sr.meshMap[this.uniqueId] = this)
          }
          get receiveShadows() {
            return this._internalAbstractMeshDataInfo._receiveShadows
          }
          set receiveShadows(rr) {
            this._internalAbstractMeshDataInfo._receiveShadows !== rr && (this._internalAbstractMeshDataInfo._receiveShadows = rr, this._markSubMeshesAsLightDirty())
          }
          get hasVertexAlpha() {
            return this._internalAbstractMeshDataInfo._hasVertexAlpha
          }
          set hasVertexAlpha(rr) {
            this._internalAbstractMeshDataInfo._hasVertexAlpha !== rr && (this._internalAbstractMeshDataInfo._hasVertexAlpha = rr, this._markSubMeshesAsAttributesDirty(), this._markSubMeshesAsMiscDirty())
          }
          get useVertexColors() {
            return this._internalAbstractMeshDataInfo._useVertexColors
          }
          set useVertexColors(rr) {
            this._internalAbstractMeshDataInfo._useVertexColors !== rr && (this._internalAbstractMeshDataInfo._useVertexColors = rr, this._markSubMeshesAsAttributesDirty())
          }
          get computeBonesUsingShaders() {
            return this._internalAbstractMeshDataInfo._computeBonesUsingShaders
          }
          set computeBonesUsingShaders(rr) {
            this._internalAbstractMeshDataInfo._computeBonesUsingShaders !== rr && (this._internalAbstractMeshDataInfo._computeBonesUsingShaders = rr, this._markSubMeshesAsAttributesDirty())
          }
          get numBoneInfluencers() {
            return this._internalAbstractMeshDataInfo._numBoneInfluencers
          }
          set numBoneInfluencers(rr) {
            this._internalAbstractMeshDataInfo._numBoneInfluencers !== rr && (this._internalAbstractMeshDataInfo._numBoneInfluencers = rr, this._markSubMeshesAsAttributesDirty())
          }
          get applyFog() {
            return this._internalAbstractMeshDataInfo._applyFog
          }
          set applyFog(rr) {
            this._internalAbstractMeshDataInfo._applyFog !== rr && (this._internalAbstractMeshDataInfo._applyFog = rr, this._markSubMeshesAsMiscDirty())
          }
          get enableDistantPicking() {
            return this._internalAbstractMeshDataInfo._enableDistantPicking
          }
          set enableDistantPicking(rr) {
            this._internalAbstractMeshDataInfo._enableDistantPicking = rr
          }
          get layerMask() {
            return this._internalAbstractMeshDataInfo._layerMask
          }
          set layerMask(rr) {
            rr !== this._internalAbstractMeshDataInfo._layerMask && (this._internalAbstractMeshDataInfo._layerMask = rr, this._resyncLightSources())
          }
          get collisionMask() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._collisionMask
          }
          set collisionMask(rr) {
            this._internalAbstractMeshDataInfo._meshCollisionData._collisionMask = isNaN(rr) ? -1 : rr
          }
          get collisionResponse() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._collisionResponse
          }
          set collisionResponse(rr) {
            this._internalAbstractMeshDataInfo._meshCollisionData._collisionResponse = rr
          }
          get collisionGroup() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._collisionGroup
          }
          set collisionGroup(rr) {
            this._internalAbstractMeshDataInfo._meshCollisionData._collisionGroup = isNaN(rr) ? -1 : rr
          }
          get surroundingMeshes() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._surroundingMeshes
          }
          set surroundingMeshes(rr) {
            this._internalAbstractMeshDataInfo._meshCollisionData._surroundingMeshes = rr
          }
          get lightSources() {
            return this._lightSources
          }
          set skeleton(rr) {
            const Sr = this._internalAbstractMeshDataInfo._skeleton;
            Sr && Sr.needInitialSkinMatrix && Sr._unregisterMeshWithPoseMatrix(this), rr && rr.needInitialSkinMatrix && rr._registerMeshWithPoseMatrix(this), this._internalAbstractMeshDataInfo._skeleton = rr, this._internalAbstractMeshDataInfo._skeleton || (this._bonesTransformMatrices = null), this._markSubMeshesAsAttributesDirty()
          }
          get skeleton() {
            return this._internalAbstractMeshDataInfo._skeleton
          }
          constructor(Sr) {
            var Qr;
            let Zr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            switch (super(Sr, Zr, !1), Qr = this, this._internalAbstractMeshDataInfo = new Pr, this._waitingMaterialId = null, this._waitingMorphTargetManagerId = null, this._waitingSkeletonId = null, this._waitingSkeletonUniqueId = null, this.cullingStrategy = rr.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY, this.onCollideObservable = new Wr.d, this.onCollisionPositionChangeObservable = new Wr.d, this.onMaterialChangedObservable = new Wr.d, this.definedFacingForward = !0, this._occlusionQuery = null, this._renderingGroup = null, this.alphaIndex = Number.MAX_VALUE, this.ut = rr.DefaultIsPickable, this.isNearPickable = !1, this.isNearGrabbable = !1, this.showSubMeshesBoundingBox = !1, this.isBlocker = !1, this.enablePointerMoveEvents = !1, this.outlineColor = nr.e.Red(), this.outlineWidth = .02, this.overlayColor = nr.e.Red(), this.overlayAlpha = .5, this.useOctreeForRenderingSelection = !0, this.useOctreeForPicking = !0, this.useOctreeForCollisions = !0, this.GU = !1, this.VU = !1, this.actionManager = null, this.ellipsoid = new ar.u(.5, 1, .5), this.ellipsoidOffset = new ar.u(0, 0, 0), this.edgesWidth = 1, this.edgesColor = new nr.f(1, 0, 0, 1), this._edgesRenderer = null, this._masterMesh = null, this._boundingInfo = null, this._boundingInfoIsDirty = !0, this._renderId = 0, this._intersectionsInProgress = new Array, this._unIndexed = !1, this._lightSources = new Array, this._waitingData = {
                lods: null,
                actions: null,
                sC: null
              }, this._bonesTransformMatrices = null, this._transformMatrixTexture = null, this.onRebuildObservable = new Wr.d, this._onCollisionPositionChange = function(rr, Sr) {
                let Zr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                Sr.subtractToRef(Qr._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions, Qr._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions), Qr._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions.length() > Tr.e.CollisionsEpsilon && Qr.position.addInPlace(Qr._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions), Zr && Qr.onCollideObservable.notifyObservers(Zr), Qr.onCollisionPositionChangeObservable.notifyObservers(Qr.position)
              }, Zr = this.eC(), this.layerMask = Zr.defaultRenderableLayerMask, Zr.XWr(this), this._resyncLightSources(), this._uniformBuffer = new xr.d(this.eC().MU(), void 0, void 0, Sr, !this.eC().MU().isWebGPU), this._buildUniformLayout(), Zr.performancePriority) {
              case 2:
                this.VU = !0;
              case 1:
                this.GU = !0, this.ut = !1
            }
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("world", 16), this._uniformBuffer.addUniform("visibility", 1), this._uniformBuffer.create()
          }
          transferToEffect(rr) {
            const Sr = this._uniformBuffer;
            Sr.hrr("world", rr), Sr.updateFloat("visibility", this._internalAbstractMeshDataInfo._visibility), Sr.update()
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
          toString(rr) {
            let Sr = "Name: " + this.name + ", isInstance: " + ("InstancedMesh" === this.getClassName() ? "YES" : "NO");
            Sr += ", # of submeshes: " + (this.jT ? this.jT.length : 0);
            const Qr = this._internalAbstractMeshDataInfo._skeleton;
            return Qr && (Sr += ", skeleton: " + Qr.name), rr && (Sr += ", billboard mode: " + ["NONE", "X", "Y", null, "Z", null, null, "ALL"][this.billboardMode], Sr += ", freeze wrld mat: " + (this._isWorldMatrixFrozen || this._waitingData.sC ? "YES" : "NO")), Sr
          }
          _getEffectiveParent() {
            return this._masterMesh && this.billboardMode !== fr.e.BILLBOARDMODE_NONE ? this._masterMesh : super._getEffectiveParent()
          }
          _getActionManagerForTrigger(rr) {
            let Sr = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            if (this.actionManager && (Sr || this.actionManager.isRecursive)) {
              if (!rr) return this.actionManager;
              if (this.actionManager.hasSpecificTrigger(rr)) return this.actionManager
            }
            return this.parent ? this.parent._getActionManagerForTrigger(rr, !1) : null
          }
          _releaseRenderPassId(rr) {}
          _rebuild() {
            if (this.onRebuildObservable.notifyObservers(this), null !== this._occlusionQuery && (this._occlusionQuery = null), this.jT) {
              for (const rr of this.jT) rr._rebuild();
              this.resetDrawCache()
            }
          }
          _resyncLightSources() {
            this._lightSources.length = 0;
            for (const rr of this.eC().lights) rr.isEnabled() && rr.canAffectMesh(this) && this._lightSources.push(rr);
            this._markSubMeshesAsLightDirty()
          }
          _resyncLightSource(rr) {
            const Sr = rr.isEnabled() && rr.canAffectMesh(this),
              Qr = this._lightSources.indexOf(rr);
            let Zr = !1;
            if (-1 === Qr) {
              if (!Sr) return;
              this._lightSources.push(rr)
            } else {
              if (Sr) return;
              Zr = !0, this._lightSources.splice(Qr, 1)
            }
            this._markSubMeshesAsLightDirty(Zr)
          }
          _unBindEffect() {
            for (const rr of this.jT) rr.setEffect(null)
          }
          _removeLightSource(rr, Sr) {
            const Qr = this._lightSources.indexOf(rr); - 1 !== Qr && (this._lightSources.splice(Qr, 1), this._markSubMeshesAsLightDirty(Sr))
          }
          _markSubMeshesAsDirty(rr) {
            if (this.jT)
              for (const Sr of this.jT)
                for (let Qr = 0; Qr < Sr._drawWrappers.length; ++Qr) {
                  const Zr = Sr._drawWrappers[Qr];
                  Zr && Zr.defines && Zr.defines.markAllAsDirty && rr(Zr.defines)
                }
          }
          _markSubMeshesAsLightDirty() {
            let rr = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            this._markSubMeshesAsDirty((Sr => Sr.markAsLightDirty(rr)))
          }
          _markSubMeshesAsAttributesDirty() {
            this._markSubMeshesAsDirty((rr => rr.markAsAttributesDirty()))
          }
          _markSubMeshesAsMiscDirty() {
            this._markSubMeshesAsDirty((rr => rr.markAsMiscDirty()))
          }
          BQr(rr) {
            return this._currentRenderId = Number.MAX_VALUE, super.BQr(rr), this._isDirty = !0, this
          }
          resetDrawCache(rr) {
            let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (this.jT)
              for (const Qr of this.jT) Qr.resetDrawCache(rr, Sr)
          }
          get isBlocked() {
            return !1
          }
          getLOD(rr) {
            return this
          }
          getTotalVertices() {
            return 0
          }
          getTotalIndices() {
            return 0
          }
          yar() {
            return null
          }
          getVerticesData(rr) {
            return null
          }
          setVerticesData(rr, Sr, Qr, Zr) {
            return this
          }
          updateVerticesData(rr, Sr, Qr, Zr) {
            return this
          }
          setIndices(rr, Sr) {
            return this
          }
          isVerticesDataPresent(rr) {
            return !1
          }
          mG() {
            return this._masterMesh ? this._masterMesh.mG() : (this._boundingInfoIsDirty && (this._boundingInfoIsDirty = !1, this._updateBoundingInfo()), this._boundingInfo)
          }
          getRawBoundingInfo() {
            return this.rawBoundingInfo ?? this.mG()
          }
          setBoundingInfo(rr) {
            return this._boundingInfo = rr, this
          }
          get hasBoundingInfo() {
            return null !== this._boundingInfo
          }
          buildBoundingInfo(rr, Sr, Qr) {
            return this._boundingInfo = new pr.c(rr, Sr, Qr), this._boundingInfo
          }
          normalizeToUnitCube() {
            let rr = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
              Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              Qr = arguments.length > 2 ? arguments[2] : void 0;
            return super.normalizeToUnitCube(rr, Sr, Qr)
          }
          get useBones() {
            return this.skeleton && this.eC().skeletonsEnabled && this.isVerticesDataPresent(jr.j.MatricesIndicesKind) && this.isVerticesDataPresent(jr.j.MatricesWeightsKind)
          }
          _preActivate() {}
          _preActivateForIntermediateRendering(rr) {}
          _activate(rr, Sr) {
            return this._renderId = rr, !0
          }
          _postActivate() {}
          _freeze() {}
          _unFreeze() {}
          getWorldMatrix() {
            return this._masterMesh && this.billboardMode === fr.e.BILLBOARDMODE_NONE ? this._masterMesh.getWorldMatrix() : super.getWorldMatrix()
          }
          _getWorldMatrixDeterminant() {
            return this._masterMesh ? this._masterMesh._getWorldMatrixDeterminant() : super._getWorldMatrixDeterminant()
          }
          get gC() {
            return !1
          }
          get Har() {
            return !1
          }
          get hasThinInstances() {
            return !1
          }
          movePOV(rr, Sr, Qr) {
            return this.position.addInPlace(this.calcMovePOV(rr, Sr, Qr)), this
          }
          calcMovePOV(rr, Sr, Qr) {
            const Zr = new ar.d;
            (this.rotationQuaternion ? this.rotationQuaternion : ar.h.RotationYawPitchRoll(this.rotation.y, this.rotation.x, this.rotation.z)).toRotationMatrix(Zr);
            const Wr = ar.u.Zero(),
              jr = this.definedFacingForward ? -1 : 1;
            return ar.u.TransformCoordinatesFromFloatsToRef(rr * jr, Sr, Qr * jr, Zr, Wr), Wr
          }
          rotatePOV(rr, Sr, Qr) {
            return this.rotation.addInPlace(this.calcRotatePOV(rr, Sr, Qr)), this
          }
          calcRotatePOV(rr, Sr, Qr) {
            const Zr = this.definedFacingForward ? 1 : -1;
            return new ar.u(rr * Zr, Sr, Qr * Zr)
          }
          _refreshBoundingInfo(rr, Sr) {
            if (rr) {
              const Qr = (0, Yr.e)(rr, 0, this.getTotalVertices(), Sr);
              this._boundingInfo ? this._boundingInfo.reConstruct(Qr.minimum, Qr.maximum) : this._boundingInfo = new pr.c(Qr.minimum, Qr.maximum)
            }
            if (this.jT)
              for (let Qr = 0; Qr < this.jT.length; Qr++) this.jT[Qr].refreshBoundingInfo(rr);
            this._updateBoundingInfo()
          }
          _refreshBoundingInfoDirect(rr) {
            if (this._boundingInfo ? this._boundingInfo.reConstruct(rr.minimum, rr.maximum) : this._boundingInfo = new pr.c(rr.minimum, rr.maximum), this.jT)
              for (let Sr = 0; Sr < this.jT.length; Sr++) this.jT[Sr].refreshBoundingInfo(null);
            this._updateBoundingInfo()
          }
          static _ApplySkeleton(rr, Sr, Qr, Zr, Wr, Ir, fr) {
            ! function(rr, Sr, Qr, Zr, Wr, Ir, fr) {
              const Er = ar.n.kU[0],
                pr = ar.n.Matrix[0],
                xr = ar.n.Matrix[1],
                mr = Sr === jr.j.NormalKind ? ar.u.TransformNormalFromFloatsToRef : ar.u.TransformCoordinatesFromFloatsToRef;
              for (let jr = 0, Nr = 0; jr < rr.length; jr += 3, Nr += 4) {
                let Sr, Ur;
                for (pr.reset(), Sr = 0; Sr < 4; Sr++) Ur = Wr[Nr + Sr], Ur > 0 && (ar.d.FromFloat32ArrayToRefScaled(Qr, Math.floor(16 * Zr[Nr + Sr]), Ur, xr), pr.addToSelf(xr));
                if (Ir && fr)
                  for (Sr = 0; Sr < 4; Sr++) Ur = fr[Nr + Sr], Ur > 0 && (ar.d.FromFloat32ArrayToRefScaled(Qr, Math.floor(16 * Ir[Nr + Sr]), Ur, xr), pr.addToSelf(xr));
                mr(rr[jr], rr[jr + 1], rr[jr + 2], pr, Er), Er.toArray(rr, jr)
              }
            }(rr, Sr, Qr, Zr, Wr, Ir, fr)
          }
          _getData(Sr, Qr) {
            let Zr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : jr.j.PositionKind;
            const Wr = Sr.cache,
              Ir = rr => {
                if (Wr) {
                  const Sr = Wr._vertexData || (Wr._vertexData = {});
                  return Sr[rr] || this.copyVerticesData(rr, Sr), Sr[rr]
                }
                return this.getVerticesData(rr)
              };
            if (Qr || (Qr = Ir(Zr)), !Qr) return null;
            Wr ? (Wr._outputData ? Wr._outputData.set(Qr) : Wr._outputData = new Float32Array(Qr), Qr = Wr._outputData) : (Sr.applyMorph && this.morphTargetManager || Sr.applySkeleton && this.skeleton || Sr.applyBakedVertexAnimation && this.bakedVertexAnimationManager?.isEnabled) && (Qr = Qr.slice()), Sr.applyMorph && this.morphTargetManager && function(rr, Sr, Qr) {
              let Zr;
              switch (Sr) {
                case jr.j.PositionKind:
                  Zr = rr => rr.getPositions();
                  break;
                case jr.j.NormalKind:
                  Zr = rr => rr.getNormals();
                  break;
                case jr.j.TangentKind:
                  Zr = rr => rr.getTangents();
                  break;
                case jr.j.UVKind:
                  Zr = rr => rr.getUVs();
                  break;
                case jr.j.UV2Kind:
                  Zr = rr => rr.getUV2s();
                  break;
                case jr.j.ColorKind:
                  Zr = rr => rr.getColors();
                  break;
                default:
                  return
              }
              for (let Wr = 0; Wr < rr.length; Wr++) {
                let Sr = rr[Wr];
                for (let ar = 0; ar < Qr.numTargets; ar++) {
                  const jr = Qr.getTarget(ar),
                    Ir = jr.influence;
                  if (0 !== Ir) {
                    const Qr = Zr(jr);
                    Qr && (Sr += (Qr[Wr] - rr[Wr]) * Ir)
                  }
                }
                rr[Wr] = Sr
              }
            }(Qr, Zr, this.morphTargetManager);
            const fr = this.bakedVertexAnimationManager;
            let Er = !1;
            if (Sr.applyBakedVertexAnimation && fr?.isEnabled) {
              const rr = Ir(jr.j.MatricesIndicesKind),
                Wr = Ir(jr.j.MatricesWeightsKind);
              if (Wr && rr) {
                const ar = this.numBoneInfluencers > 4,
                  pr = ar ? Ir(jr.j.MatricesIndicesExtraKind) : null,
                  xr = ar ? Ir(jr.j.MatricesWeightsExtraKind) : null;
                Er = lr(Qr, Zr, fr, Sr.bakedVertexAnimationSettings ?? fr.animationParameters, rr, Wr, pr, xr, this.numBoneInfluencers)
              }
            }
            if (!Er && Sr.applySkeleton && this.skeleton) {
              const Sr = Ir(jr.j.MatricesIndicesKind),
                Wr = Ir(jr.j.MatricesWeightsKind);
              if (Wr && Sr) {
                const ar = this.numBoneInfluencers > 4,
                  fr = ar ? Ir(jr.j.MatricesIndicesExtraKind) : null,
                  Er = ar ? Ir(jr.j.MatricesWeightsExtraKind) : null,
                  pr = this.skeleton.getTransformMatrices(this);
                rr._ApplySkeleton(Qr, Zr, pr, Sr, Wr, fr, Er)
              }
            }
            if (!1 !== Sr.updatePositionsArray && Zr === jr.j.PositionKind) {
              const rr = this._internalAbstractMeshDataInfo._positions || [],
                Sr = rr.length;
              if (rr.length = Qr.length / 3, Sr < rr.length)
                for (let Qr = Sr; Qr < rr.length; Qr++) rr[Qr] = new ar.u;
              for (let Zr = 0, Wr = 0; Zr < rr.length; Zr++, Wr += 3) rr[Zr].Hrr(Qr[Wr], Qr[Wr + 1], Qr[Wr + 2]);
              this._internalAbstractMeshDataInfo._positions = rr
            }
            return Qr
          }
          getNormalsData() {
            let rr = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return this._getData({
              applySkeleton: rr,
              applyMorph: Sr,
              updatePositionsArray: !1
            }, null, jr.j.NormalKind)
          }
          gJ() {
            let rr = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            return this._getData({
              applySkeleton: rr,
              applyMorph: Sr,
              updatePositionsArray: !1
            }, Qr, jr.j.PositionKind)
          }
          _updateBoundingInfo() {
            return this._boundingInfo ? this._boundingInfo.update(this.worldMatrixFromCache) : this._boundingInfo = new pr.c(ar.u.Zero(), ar.u.Zero(), this.worldMatrixFromCache), this._updateSubMeshesBoundingInfo(this.worldMatrixFromCache), this
          }
          _updateSubMeshesBoundingInfo(rr) {
            if (!this.jT) return this;
            const Sr = this.jT.length;
            for (let Qr = 0; Qr < Sr; Qr++) {
              const Zr = this.jT[Qr];
              (Sr > 1 || !Zr.IsGlobal) && Zr.updateBoundingInfo(rr)
            }
            return this
          }
          _afterComputeWorldMatrix() {
            this.VU || (this._boundingInfoIsDirty = !0)
          }
          isInFrustum(rr) {
            return this.mG().isInFrustum(rr, this.cullingStrategy)
          }
          isCompletelyInFrustum(rr) {
            return this.mG().isCompletelyInFrustum(rr)
          }
          har(rr) {
            let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              Qr = arguments.length > 2 ? arguments[2] : void 0;
            const Zr = this.mG(),
              Wr = rr.mG();
            if (Zr.intersects(Wr, Sr)) return !0;
            if (Qr)
              for (const ar of this.getChildMeshes())
                if (ar.har(rr, Sr, !0)) return !0;
            return !1
          }
          intersectsPoint(rr) {
            return this.mG().intersectsPoint(rr)
          }
          get checkCollisions() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._checkCollisions
          }
          set checkCollisions(rr) {
            this._internalAbstractMeshDataInfo._meshCollisionData._checkCollisions = rr
          }
          get collider() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._collider
          }
          moveWithCollisions(rr) {
            let Sr = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            this.getAbsolutePosition().addToRef(this.ellipsoidOffset, this._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions);
            const Qr = this.eC().collisionCoordinator;
            return this._internalAbstractMeshDataInfo._meshCollisionData._collider || (this._internalAbstractMeshDataInfo._meshCollisionData._collider = Qr.createCollider()), this._internalAbstractMeshDataInfo._meshCollisionData._collider._radius = this.ellipsoid, Qr.getNewPosition(this._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions, rr, this._internalAbstractMeshDataInfo._meshCollisionData._collider, this.collisionRetryCount, this, this._onCollisionPositionChange, this.uniqueId, Sr), this
          }
          _collideForSubMesh(rr, Sr, Qr) {
            if (this._generatePointsArray(), !this._positions) return this;
            if (!rr._lastColliderWorldVertices || !rr._lastColliderTransformMatrix.equals(Sr)) {
              rr._lastColliderTransformMatrix = Sr.clone(), rr._lastColliderWorldVertices = [], rr._trianglePlanes = [];
              const Qr = rr.verticesStart,
                Zr = rr.verticesStart + rr.verticesCount;
              for (let Wr = Qr; Wr < Zr; Wr++) rr._lastColliderWorldVertices.push(ar.u.TransformCoordinates(this._positions[Wr], Sr))
            }
            return Qr._collide(rr._trianglePlanes, rr._lastColliderWorldVertices, this.yar(), rr.indexStart, rr.indexStart + rr.indexCount, rr.verticesStart, !!rr.iU(), this, this._shouldConvertRHS(), 7 === rr.iU()?.fillMode), this
          }
          _processCollisionsForSubMeshes(rr, Sr) {
            const Qr = this._scene.getCollidingSubMeshCandidates(this, rr),
              Zr = Qr.length;
            for (let Wr = 0; Wr < Zr; Wr++) {
              const ar = Qr.data[Wr];
              Zr > 1 && !ar._checkCollision(rr) || this._collideForSubMesh(ar, Sr, rr)
            }
            return this
          }
          _shouldConvertRHS() {
            return !1
          }
          _checkCollision(rr) {
            if (!this.mG()._checkCollision(rr)) return this;
            const Sr = ar.n.Matrix[0],
              Qr = ar.n.Matrix[1];
            return ar.d.ScalingToRef(1 / rr._radius.x, 1 / rr._radius.y, 1 / rr._radius.z, Sr), this.worldMatrixFromCache.multiplyToRef(Sr, Qr), this._processCollisionsForSubMeshes(rr, Qr), this
          }
          _generatePointsArray() {
            return !1
          }
          intersects(rr, Sr, Qr) {
            let Zr = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              Wr = arguments.length > 4 ? arguments[4] : void 0,
              jr = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
            const Ir = new Er.b,
              fr = this.getClassName(),
              pr = "InstancedLinesMesh" === fr || "LinesMesh" === fr || "GreasedLineMesh" === fr ? this.intersectionThreshold : 0,
              xr = this.mG();
            if (!this.jT) return Ir;
            if (!jr && (!rr.intersectsSphere(xr.oWr, pr) || !rr.intersectsBox(xr.boundingBox, pr))) return Ir;
            if (Zr) return Ir.hit = !jr, Ir.pickedMesh = jr ? null : this, Ir.distance = jr ? 0 : ar.u.Distance(rr.origin, xr.oWr.center), Ir.subMeshId = 0, Ir;
            if (!this._generatePointsArray()) return Ir;
            let mr = null;
            const Nr = this._scene.getIntersectingSubMeshCandidates(this, rr),
              Ur = Nr.length;
            let tr = !1;
            for (let ar = 0; ar < Ur; ar++) {
              const rr = Nr.data[ar].iU();
              if (rr && (7 == rr.fillMode || 0 == rr.fillMode || 1 == rr.fillMode || 2 == rr.fillMode || 4 == rr.fillMode)) {
                tr = !0;
                break
              }
            }
            if (!tr) return Ir.hit = !0, Ir.pickedMesh = this, Ir.distance = ar.u.Distance(rr.origin, xr.oWr.center), Ir.subMeshId = -1, Ir;
            for (let ar = 0; ar < Ur; ar++) {
              const Zr = Nr.data[ar];
              if (Ur > 1 && !jr && !Zr.canIntersects(rr)) continue;
              const Wr = Zr.intersects(rr, this._positions, this.yar(), Sr, Qr);
              if (Wr && (Sr || !mr || Wr.distance < mr.distance) && (mr = Wr, mr.subMeshId = Zr._id, mr._internalSubMeshId = ar, Sr)) break
            }
            if (mr) {
              const Sr = Wr ?? this.getWorldMatrix(),
                Qr = ar.n.kU[0],
                Zr = ar.n.kU[1];
              ar.u.TransformCoordinatesToRef(rr.origin, Sr, Qr), rr.direction.scaleToRef(mr.distance, Zr);
              const jr = ar.u.TransformNormal(Zr, Sr).addInPlace(Qr);
              return Ir.hit = !0, Ir.distance = ar.u.Distance(Qr, jr), Ir.pickedPoint = jr, Ir.pickedMesh = this, Ir.bu = mr.bu || 0, Ir.bv = mr.bv || 0, Ir.subMeshFaceId = mr.faceId, Ir.faceId = mr.faceId + Nr.data[mr._internalSubMeshId].indexStart / (-1 !== this.getClassName().indexOf("LinesMesh") ? 2 : 3), Ir.subMeshId = mr.subMeshId, Ir
            }
            return Ir
          }
          clone(rr, Sr, Qr) {
            return null
          }
          releaseSubMeshes() {
            let rr = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (this.jT)
              for (; this.jT.length;) this.jT[0].dispose(rr);
            else this.jT = [];
            return this
          }
          dispose(rr) {
            let Sr, Qr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            const Zr = this.eC();
            for (this._scene.useMaterialMeshMap && this._internalAbstractMeshDataInfo._material && this._internalAbstractMeshDataInfo._material.meshMap && (this._internalAbstractMeshDataInfo._material.meshMap[this.uniqueId] = void 0), Zr.freeActiveMeshes(), Zr.freeRenderingGroups(), Zr.renderingManager.maintainStateBetweenFrames && Zr.renderingManager.restoreDispachedFlags(), void 0 !== this.actionManager && null !== this.actionManager && (this.actionManager.disposeWhenUnowned && !this._scene.meshes.some((rr => rr !== this && rr.actionManager === this.actionManager)) && this.actionManager.dispose(), this.actionManager = null), this._internalAbstractMeshDataInfo._skeleton = null, this._transformMatrixTexture && (this._transformMatrixTexture.dispose(), this._transformMatrixTexture = null), Sr = 0; Sr < this._intersectionsInProgress.length; Sr++) {
              const rr = this._intersectionsInProgress[Sr],
                Qr = rr._intersectionsInProgress.indexOf(this);
              rr._intersectionsInProgress.splice(Qr, 1)
            }
            this._intersectionsInProgress.length = 0;
            const Wr = Zr.lights;
            for (const jr of Wr) {
              let rr = jr.includedOnlyMeshes.indexOf(this); - 1 !== rr && jr.includedOnlyMeshes.splice(rr, 1), rr = jr.excludedMeshes.indexOf(this), -1 !== rr && jr.excludedMeshes.splice(rr, 1);
              const Sr = jr.getShadowGenerators();
              if (Sr) {
                const Qr = Sr.values();
                for (let Sr = Qr.next(); !0 !== Sr.done; Sr = Qr.next()) {
                  const Qr = Sr.value.getShadowMap();
                  Qr && Qr.renderList && (rr = Qr.renderList.indexOf(this), -1 !== rr && Qr.renderList.splice(rr, 1))
                }
              }
            }
            this.releaseSubMeshes(Zr._isDisposing);
            const ar = Zr.MU();
            if (null !== this._occlusionQuery && (this.isOcclusionQueryInProgress = !1, ar.deleteQuery(this._occlusionQuery), this._occlusionQuery = null), ar.wipeCaches(), Zr.rM(this), this._parentContainer) {
              const rr = this._parentContainer.meshes.indexOf(this);
              rr > -1 && this._parentContainer.meshes.splice(rr, 1), this._parentContainer = null
            }
            if (Qr && this.material && ("MultiMaterial" === this.material.getClassName() ? this.material.dispose(!1, !0, !0) : this.material.dispose(!1, !0)), !rr)
              for (Sr = 0; Sr < Zr.pT.length; Sr++) Zr.pT[Sr].emitter === this && (Zr.pT[Sr].dispose(), Sr--);
            this._internalAbstractMeshDataInfo._facetData.facetDataEnabled && this.disableFacetData(), this._uniformBuffer.dispose(), this.onAfterWorldMatrixUpdateObservable.clear(), this.onCollideObservable.clear(), this.onCollisionPositionChangeObservable.clear(), this.onRebuildObservable.clear(), super.dispose(rr, Qr)
          }
          _initFacetData() {
            const rr = this._internalAbstractMeshDataInfo._facetData;
            rr.facetNormals || (rr.facetNormals = []), rr.facetPositions || (rr.facetPositions = []), rr.facetPartitioning || (rr.facetPartitioning = new Array), rr.facetNb = this.yar().length / 3 | 0, rr.partitioningSubdivisions = rr.partitioningSubdivisions ? rr.partitioningSubdivisions : 10, rr.partitioningBBoxRatio = rr.partitioningBBoxRatio ? rr.partitioningBBoxRatio : 1.01;
            for (let Sr = 0; Sr < rr.facetNb; Sr++) rr.facetNormals[Sr] = ar.u.Zero(), rr.facetPositions[Sr] = ar.u.Zero();
            return rr.facetDataEnabled = !0, this
          }
          updateFacetData() {
            const rr = this._internalAbstractMeshDataInfo._facetData;
            rr.facetDataEnabled || this._initFacetData();
            const Sr = this.getVerticesData(jr.j.PositionKind),
              Qr = this.yar(),
              Zr = this.getVerticesData(jr.j.NormalKind)?.slice(),
              Wr = this.mG();
            if (rr.facetDepthSort && !rr.facetDepthSortEnabled) {
              if (rr.facetDepthSortEnabled = !0, Qr instanceof Uint16Array) rr.depthSortedIndices = new Uint16Array(Qr);
              else if (Qr instanceof Uint32Array) rr.depthSortedIndices = new Uint32Array(Qr);
              else {
                let Sr = !1;
                for (let rr = 0; rr < Qr.length; rr++)
                  if (Qr[rr] > 65535) {
                    Sr = !0;
                    break
                  } rr.depthSortedIndices = Sr ? new Uint32Array(Qr) : new Uint16Array(Qr)
              }
              if (rr.facetDepthSortFunction = function(rr, Sr) {
                  return Sr.sqDistance - rr.sqDistance
                }, !rr.facetDepthSortFrom) {
                const Sr = this.eC().activeCamera;
                rr.facetDepthSortFrom = Sr ? Sr.position : ar.u.Zero()
              }
              rr.depthSortedFacets = [];
              for (let Sr = 0; Sr < rr.facetNb; Sr++) {
                const Qr = {
                  ind: 3 * Sr,
                  sqDistance: 0
                };
                rr.depthSortedFacets.push(Qr)
              }
              rr.invertedMatrix = ar.d.Identity(), rr.facetDepthSortOrigin = ar.u.Zero()
            }
            rr.bbSize.x = Wr.maximum.x - Wr.minimum.x > er.e ? Wr.maximum.x - Wr.minimum.x : er.e, rr.bbSize.y = Wr.maximum.y - Wr.minimum.y > er.e ? Wr.maximum.y - Wr.minimum.y : er.e, rr.bbSize.z = Wr.maximum.z - Wr.minimum.z > er.e ? Wr.maximum.z - Wr.minimum.z : er.e;
            let fr = rr.bbSize.x > rr.bbSize.y ? rr.bbSize.x : rr.bbSize.y;
            if (fr = fr > rr.bbSize.z ? fr : rr.bbSize.z, rr.subDiv.max = rr.partitioningSubdivisions, rr.subDiv.X = Math.floor(rr.subDiv.max * rr.bbSize.x / fr), rr.subDiv.Y = Math.floor(rr.subDiv.max * rr.bbSize.y / fr), rr.subDiv.Z = Math.floor(rr.subDiv.max * rr.bbSize.z / fr), rr.subDiv.X = rr.subDiv.X < 1 ? 1 : rr.subDiv.X, rr.subDiv.Y = rr.subDiv.Y < 1 ? 1 : rr.subDiv.Y, rr.subDiv.Z = rr.subDiv.Z < 1 ? 1 : rr.subDiv.Z, rr.facetParameters.facetNormals = this.getFacetLocalNormals(), rr.facetParameters.facetPositions = this.getFacetLocalPositions(), rr.facetParameters.facetPartitioning = this.getFacetLocalPartitioning(), rr.facetParameters.bInfo = Wr, rr.facetParameters.bbSize = rr.bbSize, rr.facetParameters.subDiv = rr.subDiv, rr.facetParameters.ratio = this.partitioningBBoxRatio, rr.facetParameters.depthSort = rr.facetDepthSort, rr.facetDepthSort && rr.facetDepthSortEnabled && (this.computeWorldMatrix(!0), this._worldMatrix.invertToRef(rr.invertedMatrix), ar.u.TransformCoordinatesToRef(rr.facetDepthSortFrom, rr.invertedMatrix, rr.facetDepthSortOrigin), rr.facetParameters.distanceTo = rr.facetDepthSortOrigin), rr.facetParameters.depthSortedFacets = rr.depthSortedFacets, Zr && Ir.b.ComputeNormals(Sr, Qr, Zr, rr.facetParameters), rr.facetDepthSort && rr.facetDepthSortEnabled) {
              rr.depthSortedFacets.sort(rr.facetDepthSortFunction);
              const Sr = rr.depthSortedIndices.length / 3 | 0;
              for (let Zr = 0; Zr < Sr; Zr++) {
                const Sr = rr.depthSortedFacets[Zr].ind;
                rr.depthSortedIndices[3 * Zr] = Qr[Sr], rr.depthSortedIndices[3 * Zr + 1] = Qr[Sr + 1], rr.depthSortedIndices[3 * Zr + 2] = Qr[Sr + 2]
              }
              this.updateIndices(rr.depthSortedIndices, void 0, !0)
            }
            return this
          }
          getFacetLocalNormals() {
            const rr = this._internalAbstractMeshDataInfo._facetData;
            return rr.facetNormals || this.updateFacetData(), rr.facetNormals
          }
          getFacetLocalPositions() {
            const rr = this._internalAbstractMeshDataInfo._facetData;
            return rr.facetPositions || this.updateFacetData(), rr.facetPositions
          }
          getFacetLocalPartitioning() {
            const rr = this._internalAbstractMeshDataInfo._facetData;
            return rr.facetPartitioning || this.updateFacetData(), rr.facetPartitioning
          }
          getFacetPosition(rr) {
            const Sr = ar.u.Zero();
            return this.getFacetPositionToRef(rr, Sr), Sr
          }
          getFacetPositionToRef(rr, Sr) {
            const Qr = this.getFacetLocalPositions()[rr],
              Zr = this.getWorldMatrix();
            return ar.u.TransformCoordinatesToRef(Qr, Zr, Sr), this
          }
          getFacetNormal(rr) {
            const Sr = ar.u.Zero();
            return this.getFacetNormalToRef(rr, Sr), Sr
          }
          getFacetNormalToRef(rr, Sr) {
            const Qr = this.getFacetLocalNormals()[rr];
            return ar.u.TransformNormalToRef(Qr, this.getWorldMatrix(), Sr), this
          }
          getFacetsAtLocalCoordinates(rr, Sr, Qr) {
            const Zr = this.mG(),
              Wr = this._internalAbstractMeshDataInfo._facetData,
              ar = Math.floor((rr - Zr.minimum.x * Wr.partitioningBBoxRatio) * Wr.subDiv.X * Wr.partitioningBBoxRatio / Wr.bbSize.x),
              jr = Math.floor((Sr - Zr.minimum.y * Wr.partitioningBBoxRatio) * Wr.subDiv.Y * Wr.partitioningBBoxRatio / Wr.bbSize.y),
              Ir = Math.floor((Qr - Zr.minimum.z * Wr.partitioningBBoxRatio) * Wr.subDiv.Z * Wr.partitioningBBoxRatio / Wr.bbSize.z);
            return ar < 0 || ar > Wr.subDiv.max || jr < 0 || jr > Wr.subDiv.max || Ir < 0 || Ir > Wr.subDiv.max ? null : Wr.facetPartitioning[ar + Wr.subDiv.max * jr + Wr.subDiv.max * Wr.subDiv.max * Ir]
          }
          getClosestFacetAtCoordinates(rr, Sr, Qr, Zr) {
            let Wr = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              jr = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
            const Ir = this.getWorldMatrix(),
              fr = ar.n.Matrix[5];
            Ir.invertToRef(fr);
            const Er = ar.n.kU[8];
            ar.u.TransformCoordinatesFromFloatsToRef(rr, Sr, Qr, fr, Er);
            const pr = this.getClosestFacetAtLocalCoordinates(Er.x, Er.y, Er.z, Zr, Wr, jr);
            return Zr && ar.u.TransformCoordinatesFromFloatsToRef(Zr.x, Zr.y, Zr.z, Ir, Zr), pr
          }
          getClosestFacetAtLocalCoordinates(rr, Sr, Qr, Zr) {
            let Wr, ar, jr, Ir, fr, Er, pr, xr, mr = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              Nr = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
              Ur = null;
            const tr = this.getFacetLocalPositions(),
              hr = this.getFacetLocalNormals(),
              zr = this.getFacetsAtLocalCoordinates(rr, Sr, Qr);
            if (!zr) return null;
            let Yr, nr, er, Kr, yr = Number.MAX_VALUE;
            for (let Br = 0; Br < zr.length; Br++) nr = zr[Br], er = hr[nr], Kr = tr[nr], Ir = (rr - Kr.x) * er.x + (Sr - Kr.y) * er.y + (Qr - Kr.z) * er.z, (!mr || mr && Nr && Ir >= 0 || mr && !Nr && Ir <= 0) && (Ir = er.x * Kr.x + er.y * Kr.y + er.z * Kr.z, fr = -(er.x * rr + er.y * Sr + er.z * Qr - Ir) / (er.x * er.x + er.y * er.y + er.z * er.z), Er = rr + er.x * fr, pr = Sr + er.y * fr, xr = Qr + er.z * fr, Wr = Er - rr, ar = pr - Sr, jr = xr - Qr, Yr = Wr * Wr + ar * ar + jr * jr, Yr < yr && (yr = Yr, Ur = nr, Zr && (Zr.x = Er, Zr.y = pr, Zr.z = xr)));
            return Ur
          }
          getFacetDataParameters() {
            return this._internalAbstractMeshDataInfo._facetData.facetParameters
          }
          disableFacetData() {
            const rr = this._internalAbstractMeshDataInfo._facetData;
            return rr.facetDataEnabled && (rr.facetDataEnabled = !1, rr.facetPositions = [], rr.facetNormals = [], rr.facetPartitioning = new Array, rr.facetParameters = {}, rr.depthSortedIndices = new Uint32Array(0)), this
          }
          updateIndices(rr, Sr) {
            return this
          }
          createNormals(rr) {
            const Sr = this.getVerticesData(jr.j.PositionKind),
              Qr = this.yar();
            let Zr;
            return Zr = this.isVerticesDataPresent(jr.j.NormalKind) ? this.getVerticesData(jr.j.NormalKind) : [], Ir.b.ComputeNormals(Sr, Qr, Zr, {
              useRightHandedSystem: this.eC().useRightHandedSystem
            }), this.setVerticesData(jr.j.NormalKind, Zr, rr), this
          }
          async optimizeIndicesAsync() {
            const rr = this.yar();
            if (!rr) return this;
            const {
              OptimizeIndices: Sr
            } = await Qr.e(670).then((() => Qr(55060)));
            return Sr(rr), this.setIndices(rr, this.getTotalVertices()), this
          }
          alignWithNormal(rr, Sr) {
            Sr || (Sr = Kr.c.Y);
            const Qr = ar.n.kU[0],
              Zr = ar.n.kU[1];
            return ar.u.CrossToRef(Sr, rr, Zr), ar.u.CrossToRef(rr, Zr, Qr), this.rotationQuaternion ? ar.h.RotationQuaternionFromAxisToRef(Qr, rr, Zr, this.rotationQuaternion) : ar.u.RotationFromAxisToRef(Qr, rr, Zr, this.rotation), this
          }
          _checkOcclusionQuery() {
            return !1
          }
          disableEdgesRendering() {
            throw (0, hr.l)("EdgesRenderer")
          }
          enableEdgesRendering(rr, Sr, Qr) {
            throw (0, hr.l)("EdgesRenderer")
          }
          getConnectedParticleSystems() {
            return this._scene.pT.filter((rr => rr.emitter === this))
          }
        }, (() => {
          const Qr = "function" === typeof Symbol && Symbol.metadata ? Object.create(mr[Symbol.metadata] ?? null) : void 0;
          Sr = [Br.j.filter((function() {
            return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0]) && !Array.isArray(arguments.length <= 3 ? void 0 : arguments[3]) && !Array.isArray(arguments.length <= 4 ? void 0 : arguments[4]) && !Array.isArray(arguments.length <= 5 ? void 0 : arguments[5]) && !Array.isArray(arguments.length <= 6 ? void 0 : arguments[6])
          }))], (0, Zr.k)(rr, null, Sr, {
            kind: "method",
            name: "_ApplySkeleton",
            static: !0,
            private: !1,
            access: {
              has: rr => "_ApplySkeleton" in rr,
              get: rr => rr._ApplySkeleton
            },
            metadata: Qr
          }, null, Nr), Qr && Object.defineProperty(rr, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Qr
          })
        })(), rr.OCCLUSION_TYPE_NONE = ((0, Zr.m)(rr, Nr), 0), rr.OCCLUSION_TYPE_OPTIMISTIC = 1, rr.OCCLUSION_TYPE_STRICT = 2, rr.OCCLUSION_ALGORITHM_TYPE_ACCURATE = 0, rr.OCCLUSION_ALGORITHM_TYPE_CONSERVATIVE = 1, rr.CULLINGSTRATEGY_STANDARD = 0, rr.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY = 1, rr.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION = 2, rr.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION_THEN_BSPHERE_ONLY = 3, rr.DefaultIsPickable = !0, rr
      })(),
      qr = !1;

    function Rr() {
      qr || (qr = !0, (0, vr.e)("BABYLON.AbstractMesh", Hr))
    }(Nr = Hr.prototype).createOrUpdateSubmeshesOctree ?? (Nr.createOrUpdateSubmeshesOctree = (0, hr.h)("AbstractMesh", "createOrUpdateSubmeshesOctree")), (Ur = Hr.prototype).getPhysicsImpostor ?? (Ur.getPhysicsImpostor = (0, hr.h)("AbstractMesh", "getPhysicsImpostor")), (tr = Hr.prototype).setPhysicsLinkWith ?? (tr.setPhysicsLinkWith = (0, hr.h)("AbstractMesh", "setPhysicsLinkWith")), Object.getOwnPropertyDescriptor(Hr.prototype, "occlusionRetryCount") || Object.defineProperty(Hr.prototype, "occlusionRetryCount", (0, hr.g)("AbstractMesh", "occlusionRetryCount")), Object.getOwnPropertyDescriptor(Hr.prototype, "occlusionType") || Object.defineProperty(Hr.prototype, "occlusionType", (0, hr.g)("AbstractMesh", "occlusionType")), Object.getOwnPropertyDescriptor(Hr.prototype, "occlusionQueryAlgorithmType") || Object.defineProperty(Hr.prototype, "occlusionQueryAlgorithmType", (0, hr.g)("AbstractMesh", "occlusionQueryAlgorithmType")), Object.getOwnPropertyDescriptor(Hr.prototype, "isOccluded") || Object.defineProperty(Hr.prototype, "isOccluded", (0, hr.g)("AbstractMesh", "isOccluded")), Object.getOwnPropertyDescriptor(Hr.prototype, "isOcclusionQueryInProgress") || Object.defineProperty(Hr.prototype, "isOcclusionQueryInProgress", (0, hr.g)("AbstractMesh", "isOcclusionQueryInProgress")), Object.getOwnPropertyDescriptor(Hr.prototype, "forceRenderingWhenOccluded") || Object.defineProperty(Hr.prototype, "forceRenderingWhenOccluded", (0, hr.g)("AbstractMesh", "forceRenderingWhenOccluded")), Object.getOwnPropertyDescriptor(Hr.prototype, "occlusionForRenderPassId") || Object.defineProperty(Hr.prototype, "occlusionForRenderPassId", (0, hr.g)("AbstractMesh", "occlusionForRenderPassId")), Object.getOwnPropertyDescriptor(Hr.prototype, "decalMap") || Object.defineProperty(Hr.prototype, "decalMap", (0, hr.g)("AbstractMesh", "decalMap")), Object.getOwnPropertyDescriptor(Hr.prototype, "pG") || Object.defineProperty(Hr.prototype, "pG", (0, hr.g)("AbstractMesh", "pG")), Object.getOwnPropertyDescriptor(Hr.prototype, "physicsImpostor") || Object.defineProperty(Hr.prototype, "physicsImpostor", (0, hr.g)("AbstractMesh", "physicsImpostor")), Object.getOwnPropertyDescriptor(Hr.prototype, "showBoundingBox") || Object.defineProperty(Hr.prototype, "showBoundingBox", (0, hr.g)("AbstractMesh", "showBoundingBox")), Object.getOwnPropertyDescriptor(Hr.prototype, "edgesRenderer") || Object.defineProperty(Hr.prototype, "edgesRenderer", (0, hr.g)("AbstractMesh", "edgesRenderer")), Object.getOwnPropertyDescriptor(Hr.prototype, "renderOutline") || Object.defineProperty(Hr.prototype, "renderOutline", (0, hr.g)("AbstractMesh", "renderOutline")), Object.getOwnPropertyDescriptor(Hr.prototype, "renderOverlay") || Object.defineProperty(Hr.prototype, "renderOverlay", (0, hr.g)("AbstractMesh", "renderOverlay"))
  },
  42265: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => zr
    });
    var Zr = Qr(38560),
      Wr = Qr(38684),
      ar = Qr(42256),
      jr = Qr(41995),
      Ir = Qr(42134),
      fr = Qr(42273),
      Er = Qr(42147),
      pr = Qr(41950),
      xr = Qr(40246),
      mr = Qr(41891),
      Nr = Qr(42162),
      Ur = Qr(38587),
      tr = Qr(42275),
      hr = Qr(41919);
    class zr {
      get boundingBias() {
        return this._boundingBias
      }
      set boundingBias(rr) {
        this._boundingBias ? this._boundingBias.iH(rr) : this._boundingBias = rr.clone(), this._updateBoundingInfo(!0, null)
      }
      static CreateGeometryForMesh(rr) {
        const Sr = new zr(zr.RandomId(), rr.eC());
        return Sr.applyToMesh(rr), Sr
      }
      get meshes() {
        return this._meshes
      }
      constructor(rr, Sr, Qr) {
        let Wr = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          ar = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          jr = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        this.delayLoadState = 0, this._totalVertices = 0, this._isDisposed = !1, this._extend = {
          minimum: new Zr.u(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE),
          maximum: new Zr.u(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE)
        }, this._indexBufferIsUpdatable = !1, this._positionsCache = [], this._parentContainer = null, this.useBoundingInfoFromGeometry = !1, this._scene = Sr || Ur.b.LastCreatedScene, this._scene && (this.id = rr, this.uniqueId = this._scene.getUniqueId(), this._engine = this._scene.MU(), this._meshes = [], this._vertexBuffers = {}, this._indices = [], this._updatable = Wr, null !== jr && (this._totalVertices = jr), Qr ? this.setAllVerticesData(Qr, Wr) : null === jr && (this._totalVertices = 0), this._engine.getCaps().vertexArrayObject && (this._vertexArrayObjects = {}), ar && (this.applyToMesh(ar), ar.computeWorldMatrix(!0)))
      }
      get extend() {
        return this._extend
      }
      eC() {
        return this._scene
      }
      MU() {
        return this._engine
      }
      isReady() {
        return 1 === this.delayLoadState || 0 === this.delayLoadState
      }
      get doNotSerialize() {
        for (let rr = 0; rr < this._meshes.length; rr++)
          if (!this._meshes[rr].doNotSerialize) return !1;
        return !0
      }
      _rebuild() {
        this._vertexArrayObjects && (this._vertexArrayObjects = {}), 0 !== this._meshes.length && this._indices && (this._indexBuffer = this._engine.createIndexBuffer(this._indices, this._updatable, "Geometry_" + this.id + "_IndexBuffer"));
        const rr = new Set;
        for (const Sr in this._vertexBuffers) rr.add(this._vertexBuffers[Sr].getWrapperBuffer());
        rr.forEach((rr => {
          rr._rebuild()
        }))
      }
      setAllVerticesData(rr, Sr) {
        rr.applyToGeometry(this, Sr), this._notifyUpdate()
      }
      setVerticesData(rr, Sr) {
        let Qr = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Zr = arguments.length > 3 ? arguments[3] : void 0;
        Qr && Array.isArray(Sr) && (Sr = new Float32Array(Sr));
        const Wr = new jr.j(this._engine, Sr, rr, {
          updatable: Qr,
          postponeInternalCreation: 0 === this._meshes.length,
          stride: Zr,
          label: "Geometry_" + this.id + "_" + rr
        });
        this.setVerticesBuffer(Wr)
      }
      removeVerticesData(rr) {
        this._vertexBuffers[rr] && (this._vertexBuffers[rr].dispose(), delete this._vertexBuffers[rr]), this._vertexArrayObjects && this._disposeVertexArrayObjects()
      }
      setVerticesBuffer(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Qr = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        const Wr = rr.getKind();
        this._vertexBuffers[Wr] && Qr && this._vertexBuffers[Wr].dispose(), rr._buffer && rr._ownsBuffer && rr._buffer._increaseReferences(), this._vertexBuffers[Wr] = rr;
        const ar = this._meshes,
          Ir = ar.length;
        if (Wr === jr.j.PositionKind) {
          this._totalVertices = Sr ?? rr._maxVerticesCount, this._updateExtend(this.useBoundingInfoFromGeometry && this._boundingInfo ? null : rr.getFloatData(this._totalVertices)), this._resetPointsArrayCache();
          const Qr = this._extend && this._extend.minimum || new Zr.u(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE),
            Wr = this._extend && this._extend.maximum || new Zr.u(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
          for (let rr = 0; rr < Ir; rr++) {
            const Sr = ar[rr];
            Sr.buildBoundingInfo(Qr, Wr), Sr._createGlobalSubMesh(Sr.isUnIndexed), Sr.computeWorldMatrix(!0), Sr.synchronizeInstances()
          }
        }
        this._notifyUpdate(Wr)
      }
      updateVerticesDataDirectly(rr, Sr, Qr) {
        let Zr = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const Wr = this.getVertexBuffer(rr);
        Wr && (Wr.updateDirectly(Sr, Qr, Zr), this._notifyUpdate(rr))
      }
      updateVerticesData(rr, Sr) {
        let Qr = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Zr = this.getVertexBuffer(rr);
        Zr && (Zr.update(Sr), rr === jr.j.PositionKind && this._updateBoundingInfo(Qr, Sr), this._notifyUpdate(rr))
      }
      _updateBoundingInfo(rr, Sr) {
        if (rr && this._updateExtend(Sr), this._resetPointsArrayCache(), rr) {
          const rr = this._meshes;
          for (const Sr of rr) {
            Sr.hasBoundingInfo ? Sr.mG().reConstruct(this._extend.minimum, this._extend.maximum) : Sr.buildBoundingInfo(this._extend.minimum, this._extend.maximum);
            const rr = Sr.jT;
            for (const Sr of rr) Sr.refreshBoundingInfo()
          }
        }
      }
      _bind(rr, Sr, Qr, Zr) {
        if (!rr) return;
        void 0 === Sr && (Sr = this._indexBuffer);
        const Wr = this.getVertexBuffers();
        if (!Wr) return;
        if (Sr != this._indexBuffer || !this._vertexArrayObjects && !Zr) return void this._engine.bindBuffers(Wr, Sr, rr, Qr);
        const ar = Zr || this._vertexArrayObjects,
          jr = this._engine;
        ar[rr.key] || (ar[rr.key] = jr.recordVertexArrayObject(Wr, Sr, rr, Qr)), jr.bindVertexArrayObject(ar[rr.key], Sr)
      }
      getTotalVertices() {
        return this.isReady() ? this._totalVertices : 0
      }
      getVerticesData(rr, Sr, Qr) {
        const Zr = this.getVertexBuffer(rr);
        return Zr ? Zr.getFloatData(this._totalVertices, Qr || Sr && 1 !== this._meshes.length) : null
      }
      copyVerticesData(rr, Sr) {
        const Qr = this.getVertexBuffer(rr);
        if (!Qr) return;
        Sr[rr] || (Sr[rr] = new Float32Array(this._totalVertices * Qr.getSize()));
        const Zr = Qr.getData();
        Zr && (0, hr.e)(Zr, Qr.getSize(), Qr.type, Qr.byteOffset, Qr.byteStride, Qr.normalized, this._totalVertices, Sr[rr])
      }
      isVertexBufferUpdatable(rr) {
        const Sr = this._vertexBuffers[rr];
        return !!Sr && Sr.isUpdatable()
      }
      getVertexBuffer(rr) {
        return this.isReady() ? this._vertexBuffers[rr] : null
      }
      getVertexBuffers() {
        return this.isReady() ? this._vertexBuffers : null
      }
      isVerticesDataPresent(rr) {
        return this._vertexBuffers ? void 0 !== this._vertexBuffers[rr] : !!this._delayInfo && -1 !== this._delayInfo.indexOf(rr)
      }
      getVerticesDataKinds() {
        const rr = [];
        let Sr;
        if (!this._vertexBuffers && this._delayInfo)
          for (Sr in this._delayInfo) rr.push(Sr);
        else
          for (Sr in this._vertexBuffers) rr.push(Sr);
        return rr
      }
      updateIndices(rr, Sr) {
        let Qr = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this._indexBuffer)
          if (this._indexBufferIsUpdatable) {
            const Zr = rr.length !== this._indices.length;
            if (Qr || (this._indices = rr.slice()), this._engine.updateDynamicIndexBuffer(this._indexBuffer, rr, Sr), Zr)
              for (const rr of this._meshes) rr._createGlobalSubMesh(!0)
          } else this.setIndices(rr, null, !0)
      }
      setIndexBuffer(rr, Sr, Qr) {
        let Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._indices = [], this._indexBufferIsUpdatable = !1, this._indexBuffer = rr, this._totalVertices = Sr, this._totalIndices = Qr, rr.is32Bits = null === Zr ? Sr > 65535 : Zr;
        for (const Wr of this._meshes) Wr._createGlobalSubMesh(!0), Wr.synchronizeInstances();
        this._notifyUpdate()
      }
      setIndices(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Qr = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Zr = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this._indexBuffer && this._engine._releaseBuffer(this._indexBuffer), this._indices = rr, this._indexBufferIsUpdatable = Qr, 0 !== this._meshes.length && this._indices && (this._indexBuffer = this._engine.createIndexBuffer(this._indices, Qr, "Geometry_" + this.id + "_IndexBuffer")), void 0 != Sr && (this._totalVertices = Sr);
        for (const Wr of this._meshes) Wr._createGlobalSubMesh(!Zr), Wr.synchronizeInstances();
        this._notifyUpdate()
      }
      getTotalIndices() {
        return this.isReady() ? void 0 !== this._totalIndices ? this._totalIndices : this._indices.length : 0
      }
      yar(rr, Sr) {
        if (!this.isReady()) return null;
        const Qr = this._indices;
        return Sr || rr && 1 !== this._meshes.length ? Qr.slice() : Qr
      }
      getIndexBuffer() {
        return this.isReady() ? this._indexBuffer : null
      }
      _releaseVertexArrayObject() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        rr && this._vertexArrayObjects && this._vertexArrayObjects[rr.key] && (this._engine.releaseVertexArrayObject(this._vertexArrayObjects[rr.key]), delete this._vertexArrayObjects[rr.key])
      }
      releaseForMesh(rr, Sr) {
        const Qr = this._meshes,
          Zr = Qr.indexOf(rr); - 1 !== Zr && (Qr.splice(Zr, 1), this._vertexArrayObjects && rr._invalidateInstanceVertexArrayObject(), rr._geometry = null, 0 === Qr.length && Sr && this.dispose())
      }
      applyToMesh(rr) {
        if (rr._geometry === this) return;
        const Sr = rr._geometry;
        Sr && Sr.releaseForMesh(rr), this._vertexArrayObjects && rr._invalidateInstanceVertexArrayObject();
        const Qr = this._meshes;
        rr._geometry = this, rr._internalAbstractMeshDataInfo._positions = null, this._scene.pushGeometry(this), Qr.push(rr), this.isReady() ? this._applyToMesh(rr) : this._boundingInfo && rr.setBoundingInfo(this._boundingInfo)
      }
      _updateExtend() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (this.useBoundingInfoFromGeometry && this._boundingInfo) this._extend = {
          minimum: this._boundingInfo.minimum.clone(),
          maximum: this._boundingInfo.maximum.clone()
        };
        else {
          if (!rr && (rr = this.getVerticesData(jr.j.PositionKind), !rr)) return;
          this._extend = (0, Nr.e)(rr, 0, this._totalVertices, this.boundingBias, 3)
        }
      }
      _applyToMesh(rr) {
        for (const Sr in this._vertexBuffers) {
          const Qr = this._vertexBuffers[Sr];
          Qr._buffer.getBuffer() || Qr.create(), Sr === jr.j.PositionKind && (this._extend || this._updateExtend(), rr.buildBoundingInfo(this._extend.minimum, this._extend.maximum), rr._createGlobalSubMesh(rr.isUnIndexed), rr._updateBoundingInfo())
        }!this._indexBuffer && this._indices && this._indices.length > 0 && (this._indexBuffer = this._engine.createIndexBuffer(this._indices, this._updatable, "Geometry_" + this.id + "_IndexBuffer")), rr._syncGeometryWithMorphTargetManager(), rr.synchronizeInstances()
      }
      _notifyUpdate(rr) {
        this.onGeometryUpdated && this.onGeometryUpdated(this, rr), this._vertexArrayObjects && this._disposeVertexArrayObjects();
        for (const Sr of this._meshes) Sr._markSubMeshesAsAttributesDirty()
      }
      load(rr, Sr) {
        2 !== this.delayLoadState && (this.isReady() ? Sr && Sr() : (this.delayLoadState = 2, this._queueLoad(rr, Sr)))
      }
      _queueLoad(rr, Sr) {
        this.delayLoadingFile && (rr.addPendingData(this), (async () => {
          try {
            const Qr = await rr._loadDelayedFileAsync(this.delayLoadingFile, !1, !0);
            if (!this._delayLoadingFunction) return void rr.removePendingData(this);
            this._delayLoadingFunction(JSON.parse(Qr), this), this.delayLoadState = 1, this._delayInfo = [], rr.removePendingData(this);
            const Zr = this._meshes,
              Wr = Zr.length;
            for (let rr = 0; rr < Wr; rr++) this._applyToMesh(Zr[rr]);
            Sr && Sr()
          } catch (Qr) {
            rr.removePendingData(this), rr.Dv || xr.c.Error(`Unable to delay load geometry "${this.id}" from "${this.delayLoadingFile}": ${Qr}`)
          }
        })())
      }
      toLeftHanded() {
        const rr = this.yar(!1);
        if (null != rr && rr.length > 0) {
          for (let Sr = 0; Sr < rr.length; Sr += 3) {
            const Qr = rr[Sr + 0];
            rr[Sr + 0] = rr[Sr + 2], rr[Sr + 2] = Qr
          }
          this.setIndices(rr)
        }
        const Sr = this.getVerticesData(jr.j.PositionKind, !1);
        if (null != Sr && Sr.length > 0) {
          for (let rr = 0; rr < Sr.length; rr += 3) Sr[rr + 2] = -Sr[rr + 2];
          this.setVerticesData(jr.j.PositionKind, Sr, !1)
        }
        const Qr = this.getVerticesData(jr.j.NormalKind, !1);
        if (null != Qr && Qr.length > 0) {
          for (let rr = 0; rr < Qr.length; rr += 3) Qr[rr + 2] = -Qr[rr + 2];
          this.setVerticesData(jr.j.NormalKind, Qr, !1)
        }
      }
      _resetPointsArrayCache() {
        this._positions = null
      }
      _generatePointsArray() {
        if (this._positions) return !0;
        const rr = this.getVerticesData(jr.j.PositionKind);
        if (!rr || 0 === rr.length) return !1;
        for (let Sr = 3 * this._positionsCache.length, Qr = this._positionsCache.length; Sr < rr.length; Sr += 3, ++Qr) this._positionsCache[Qr] = Zr.u.FromArray(rr, Sr);
        for (let Sr = 0, Qr = 0; Sr < rr.length; Sr += 3, ++Qr) this._positionsCache[Qr].set(rr[0 + Sr], rr[1 + Sr], rr[2 + Sr]);
        return this._positionsCache.length = rr.length / 3, this._positions = this._positionsCache, !0
      }
      Dv() {
        return this._isDisposed
      }
      _disposeVertexArrayObjects() {
        if (this._vertexArrayObjects) {
          for (const Qr in this._vertexArrayObjects) this._engine.releaseVertexArrayObject(this._vertexArrayObjects[Qr]);
          this._vertexArrayObjects = {};
          const rr = this._meshes,
            Sr = rr.length;
          for (let Qr = 0; Qr < Sr; Qr++) rr[Qr]._invalidateInstanceVertexArrayObject()
        }
      }
      dispose() {
        const rr = this._meshes,
          Sr = rr.length;
        let Qr;
        for (Qr = 0; Qr < Sr; Qr++) this.releaseForMesh(rr[Qr]);
        this._meshes.length = 0, this._disposeVertexArrayObjects();
        for (const Zr in this._vertexBuffers) this._vertexBuffers[Zr].dispose();
        if (this._vertexBuffers = {}, this._totalVertices = 0, this._indexBuffer && this._engine._releaseBuffer(this._indexBuffer), this._indexBuffer = null, this._indices = [], this.delayLoadState = 0, this.delayLoadingFile = null, this._delayLoadingFunction = null, this._delayInfo = [], this._boundingInfo = null, this._scene.removeGeometry(this), this._parentContainer) {
          const rr = this._parentContainer.geometries.indexOf(this);
          rr > -1 && this._parentContainer.geometries.splice(rr, 1), this._parentContainer = null
        }
        this._isDisposed = !0
      }
      copy(rr) {
        const Sr = new zr(rr, this._scene),
          Qr = this.yar(void 0, !0);
        Qr && Sr.setIndices(Qr);
        let Zr, Wr = !1;
        for (Zr in this._vertexBuffers) {
          const rr = this.getVertexBuffer(Zr),
            Qr = rr.getData();
          if (!Qr) continue;
          const ar = rr.isUpdatable(),
            Ir = rr.getSize(),
            {
              type: fr,
              byteOffset: Er,
              byteStride: pr,
              normalized: xr
            } = rr;
          Wr = Wr || ar;
          let mr = this._totalVertices;
          if (rr.getIsInstanced()) {
            let rr;
            rr = Qr instanceof Array ? 4 * Qr.length : Qr.byteLength, mr = rr / pr
          }
          const Nr = (0, hr.n)(Qr, Ir, fr, Er, pr, mr, !0),
            Ur = new jr.j(this._engine, Nr, Zr, {
              updatable: ar,
              useBytes: !1,
              stride: Ir,
              size: Ir,
              offset: 0,
              type: fr,
              normalized: xr,
              takeBufferOwnership: !0,
              instanced: rr.getIsInstanced()
            });
          Sr.setVerticesBuffer(Ur, mr)
        }
        for (Zr in Sr._updatable = Wr, Sr.delayLoadState = this.delayLoadState, Sr.delayLoadingFile = this.delayLoadingFile, Sr._delayLoadingFunction = this._delayLoadingFunction, this._delayInfo) Sr._delayInfo = Sr._delayInfo || [], Sr._delayInfo.push(Zr);
        return Sr._boundingInfo = new Er.c(this._extend.minimum, this._extend.maximum), Sr
      }
      serialize() {
        const rr = {};
        return rr.id = this.id, rr.uniqueId = this.uniqueId, rr.updatable = this._updatable, mr.b && mr.b.HasTags(this) && (rr.tags = mr.b.GetTags(this)), rr
      }
      _toNumberArray(rr) {
        return Array.isArray(rr) ? rr : Array.prototype.slice.call(rr)
      }
      clearCachedData() {
        this._totalIndices = this._indices.length, this._indices = [], this._resetPointsArrayCache();
        for (const rr in this._vertexBuffers) Object.prototype.hasOwnProperty.call(this._vertexBuffers, rr) && (this._vertexBuffers[rr]._buffer._data = null)
      }
      serializeVerticeData() {
        const rr = this.serialize();
        return this.isVerticesDataPresent(jr.j.PositionKind) && (rr.positions = this._toNumberArray(this.getVerticesData(jr.j.PositionKind)), this.isVertexBufferUpdatable(jr.j.PositionKind) && (rr.positionsUpdatable = !0)), this.isVerticesDataPresent(jr.j.NormalKind) && (rr.normals = this._toNumberArray(this.getVerticesData(jr.j.NormalKind)), this.isVertexBufferUpdatable(jr.j.NormalKind) && (rr.normalsUpdatable = !0)), this.isVerticesDataPresent(jr.j.TangentKind) && (rr.tangents = this._toNumberArray(this.getVerticesData(jr.j.TangentKind)), this.isVertexBufferUpdatable(jr.j.TangentKind) && (rr.tangentsUpdatable = !0)), this.isVerticesDataPresent(jr.j.UVKind) && (rr.uvs = this._toNumberArray(this.getVerticesData(jr.j.UVKind)), this.isVertexBufferUpdatable(jr.j.UVKind) && (rr.uvsUpdatable = !0)), this.isVerticesDataPresent(jr.j.UV2Kind) && (rr.uvs2 = this._toNumberArray(this.getVerticesData(jr.j.UV2Kind)), this.isVertexBufferUpdatable(jr.j.UV2Kind) && (rr.uvs2Updatable = !0)), this.isVerticesDataPresent(jr.j.UV3Kind) && (rr.uvs3 = this._toNumberArray(this.getVerticesData(jr.j.UV3Kind)), this.isVertexBufferUpdatable(jr.j.UV3Kind) && (rr.uvs3Updatable = !0)), this.isVerticesDataPresent(jr.j.UV4Kind) && (rr.uvs4 = this._toNumberArray(this.getVerticesData(jr.j.UV4Kind)), this.isVertexBufferUpdatable(jr.j.UV4Kind) && (rr.uvs4Updatable = !0)), this.isVerticesDataPresent(jr.j.UV5Kind) && (rr.uvs5 = this._toNumberArray(this.getVerticesData(jr.j.UV5Kind)), this.isVertexBufferUpdatable(jr.j.UV5Kind) && (rr.uvs5Updatable = !0)), this.isVerticesDataPresent(jr.j.UV6Kind) && (rr.uvs6 = this._toNumberArray(this.getVerticesData(jr.j.UV6Kind)), this.isVertexBufferUpdatable(jr.j.UV6Kind) && (rr.uvs6Updatable = !0)), this.isVerticesDataPresent(jr.j.ColorKind) && (rr.colors = this._toNumberArray(this.getVerticesData(jr.j.ColorKind)), this.isVertexBufferUpdatable(jr.j.ColorKind) && (rr.colorsUpdatable = !0)), this.isVerticesDataPresent(jr.j.MatricesIndicesKind) && (rr.matricesIndices = this._toNumberArray(this.getVerticesData(jr.j.MatricesIndicesKind)), rr.matricesIndicesExpanded = !0, this.isVertexBufferUpdatable(jr.j.MatricesIndicesKind) && (rr.matricesIndicesUpdatable = !0)), this.isVerticesDataPresent(jr.j.MatricesWeightsKind) && (rr.matricesWeights = this._toNumberArray(this.getVerticesData(jr.j.MatricesWeightsKind)), this.isVertexBufferUpdatable(jr.j.MatricesWeightsKind) && (rr.matricesWeightsUpdatable = !0)), rr.indices = this._toNumberArray(this.yar()), rr
      }
      static ExtractFromMesh(rr, Sr) {
        const Qr = rr._geometry;
        return Qr ? Qr.copy(Sr) : null
      }
      static RandomId() {
        return pr.h.RandomId()
      }
      static _GetGeometryByLoadedUniqueId(rr, Sr) {
        for (let Qr = 0; Qr < Sr.geometries.length; Qr++)
          if (Sr.geometries[Qr]._loadedUniqueId === rr) return Sr.geometries[Qr];
        return null
      }
      static _ImportGeometry(rr, Sr) {
        const Qr = Sr.eC(),
          Zr = rr.geometryUniqueId,
          ar = rr.geometryId;
        if (Zr || ar) {
          const rr = Zr ? this._GetGeometryByLoadedUniqueId(Zr, Qr) : Qr.getGeometryById(ar);
          rr && rr.applyToMesh(Sr)
        } else if (rr instanceof ArrayBuffer) {
          const Qr = Sr._binaryInfo;
          if (Qr.positionsAttrDesc && Qr.positionsAttrDesc.count > 0) {
            const Zr = new Float32Array(rr, Qr.positionsAttrDesc.offset, Qr.positionsAttrDesc.count);
            Sr.setVerticesData(jr.j.PositionKind, Zr, !1)
          }
          if (Qr.normalsAttrDesc && Qr.normalsAttrDesc.count > 0) {
            const Zr = new Float32Array(rr, Qr.normalsAttrDesc.offset, Qr.normalsAttrDesc.count);
            Sr.setVerticesData(jr.j.NormalKind, Zr, !1)
          }
          if (Qr.tangetsAttrDesc && Qr.tangetsAttrDesc.count > 0) {
            const Zr = new Float32Array(rr, Qr.tangetsAttrDesc.offset, Qr.tangetsAttrDesc.count);
            Sr.setVerticesData(jr.j.TangentKind, Zr, !1)
          }
          if (Qr.uvsAttrDesc && Qr.uvsAttrDesc.count > 0) {
            const Zr = new Float32Array(rr, Qr.uvsAttrDesc.offset, Qr.uvsAttrDesc.count);
            if (tr.b)
              for (let rr = 1; rr < Zr.length; rr += 2) Zr[rr] = 1 - Zr[rr];
            Sr.setVerticesData(jr.j.UVKind, Zr, !1)
          }
          if (Qr.uvs2AttrDesc && Qr.uvs2AttrDesc.count > 0) {
            const Zr = new Float32Array(rr, Qr.uvs2AttrDesc.offset, Qr.uvs2AttrDesc.count);
            if (tr.b)
              for (let rr = 1; rr < Zr.length; rr += 2) Zr[rr] = 1 - Zr[rr];
            Sr.setVerticesData(jr.j.UV2Kind, Zr, !1)
          }
          if (Qr.uvs3AttrDesc && Qr.uvs3AttrDesc.count > 0) {
            const Zr = new Float32Array(rr, Qr.uvs3AttrDesc.offset, Qr.uvs3AttrDesc.count);
            if (tr.b)
              for (let rr = 1; rr < Zr.length; rr += 2) Zr[rr] = 1 - Zr[rr];
            Sr.setVerticesData(jr.j.UV3Kind, Zr, !1)
          }
          if (Qr.uvs4AttrDesc && Qr.uvs4AttrDesc.count > 0) {
            const Zr = new Float32Array(rr, Qr.uvs4AttrDesc.offset, Qr.uvs4AttrDesc.count);
            if (tr.b)
              for (let rr = 1; rr < Zr.length; rr += 2) Zr[rr] = 1 - Zr[rr];
            Sr.setVerticesData(jr.j.UV4Kind, Zr, !1)
          }
          if (Qr.uvs5AttrDesc && Qr.uvs5AttrDesc.count > 0) {
            const Zr = new Float32Array(rr, Qr.uvs5AttrDesc.offset, Qr.uvs5AttrDesc.count);
            if (tr.b)
              for (let rr = 1; rr < Zr.length; rr += 2) Zr[rr] = 1 - Zr[rr];
            Sr.setVerticesData(jr.j.UV5Kind, Zr, !1)
          }
          if (Qr.uvs6AttrDesc && Qr.uvs6AttrDesc.count > 0) {
            const Zr = new Float32Array(rr, Qr.uvs6AttrDesc.offset, Qr.uvs6AttrDesc.count);
            if (tr.b)
              for (let rr = 1; rr < Zr.length; rr += 2) Zr[rr] = 1 - Zr[rr];
            Sr.setVerticesData(jr.j.UV6Kind, Zr, !1)
          }
          if (Qr.colorsAttrDesc && Qr.colorsAttrDesc.count > 0) {
            const Zr = new Float32Array(rr, Qr.colorsAttrDesc.offset, Qr.colorsAttrDesc.count);
            Sr.setVerticesData(jr.j.ColorKind, Zr, !1, Qr.colorsAttrDesc.stride)
          }
          if (Qr.matricesIndicesAttrDesc && Qr.matricesIndicesAttrDesc.count > 0) {
            const Zr = new Int32Array(rr, Qr.matricesIndicesAttrDesc.offset, Qr.matricesIndicesAttrDesc.count),
              Wr = [];
            for (let rr = 0; rr < Zr.length; rr++) {
              const Sr = Zr[rr];
              Wr.push(255 & Sr), Wr.push((65280 & Sr) >> 8), Wr.push((16711680 & Sr) >> 16), Wr.push(Sr >> 24 & 255)
            }
            Sr.setVerticesData(jr.j.MatricesIndicesKind, Wr, !1)
          }
          if (Qr.matricesIndicesExtraAttrDesc && Qr.matricesIndicesExtraAttrDesc.count > 0) {
            const Zr = new Int32Array(rr, Qr.matricesIndicesExtraAttrDesc.offset, Qr.matricesIndicesExtraAttrDesc.count),
              Wr = [];
            for (let rr = 0; rr < Zr.length; rr++) {
              const Sr = Zr[rr];
              Wr.push(255 & Sr), Wr.push((65280 & Sr) >> 8), Wr.push((16711680 & Sr) >> 16), Wr.push(Sr >> 24 & 255)
            }
            Sr.setVerticesData(jr.j.MatricesIndicesExtraKind, Wr, !1)
          }
          if (Qr.matricesWeightsAttrDesc && Qr.matricesWeightsAttrDesc.count > 0) {
            const Zr = new Float32Array(rr, Qr.matricesWeightsAttrDesc.offset, Qr.matricesWeightsAttrDesc.count);
            Sr.setVerticesData(jr.j.MatricesWeightsKind, Zr, !1)
          }
          if (Qr.indicesAttrDesc && Qr.indicesAttrDesc.count > 0) {
            const Zr = new Int32Array(rr, Qr.indicesAttrDesc.offset, Qr.indicesAttrDesc.count);
            Sr.setIndices(Zr, null)
          }
          if (Qr.subMeshesAttrDesc && Qr.subMeshesAttrDesc.count > 0) {
            const Zr = new Int32Array(rr, Qr.subMeshesAttrDesc.offset, 5 * Qr.subMeshesAttrDesc.count);
            Sr.jT = [];
            for (let rr = 0; rr < Qr.subMeshesAttrDesc.count; rr++) {
              const Qr = Zr[5 * rr + 0],
                Wr = Zr[5 * rr + 1],
                ar = Zr[5 * rr + 2],
                jr = Zr[5 * rr + 3],
                fr = Zr[5 * rr + 4];
              Ir.b.AddToMesh(Qr, Wr, ar, jr, fr, Sr)
            }
          }
        } else if (rr.positions && rr.normals && rr.indices) {
          if (Sr.setVerticesData(jr.j.PositionKind, rr.positions, rr.positions._updatable || rr.positionsUpdatable), Sr.setVerticesData(jr.j.NormalKind, rr.normals, rr.normals._updatable || rr.normalsUpdatable), rr.tangents && Sr.setVerticesData(jr.j.TangentKind, rr.tangents, rr.tangents._updatable || rr.tangentsUpdatable), rr.uvs && Sr.setVerticesData(jr.j.UVKind, rr.uvs, rr.uvs._updatable || rr.uvsUpdatable), rr.uvs2 && Sr.setVerticesData(jr.j.UV2Kind, rr.uvs2, rr.uvs2._updatable || rr.uvs2Updatable), rr.uvs3 && Sr.setVerticesData(jr.j.UV3Kind, rr.uvs3, rr.uvs3._updatable || rr.uvs3Updatable), rr.uvs4 && Sr.setVerticesData(jr.j.UV4Kind, rr.uvs4, rr.uvs4._updatable || rr.uvs4Updatable), rr.uvs5 && Sr.setVerticesData(jr.j.UV5Kind, rr.uvs5, rr.uvs5._updatable || rr.uvs5Updatable), rr.uvs6 && Sr.setVerticesData(jr.j.UV6Kind, rr.uvs6, rr.uvs6._updatable || rr.uvs6Updatable), rr.colors && Sr.setVerticesData(jr.j.ColorKind, Wr.f.CheckColors4(rr.colors, rr.positions.length / 3), rr.colors._updatable), rr.matricesIndices)
            if (rr.matricesIndices._isExpanded || rr.matricesIndicesExpanded) delete rr.matricesIndices._isExpanded, delete rr.matricesIndicesExpanded, Sr.setVerticesData(jr.j.MatricesIndicesKind, rr.matricesIndices, rr.matricesIndices._updatable || rr.matricesIndicesUpdatable);
            else {
              const Qr = [];
              for (let Sr = 0; Sr < rr.matricesIndices.length; Sr++) {
                const Zr = rr.matricesIndices[Sr];
                Qr.push(255 & Zr), Qr.push((65280 & Zr) >> 8), Qr.push((16711680 & Zr) >> 16), Qr.push(Zr >> 24 & 255)
              }
              Sr.setVerticesData(jr.j.MatricesIndicesKind, Qr, rr.matricesIndices._updatable || rr.matricesIndicesUpdatable)
            } if (rr.matricesIndicesExtra)
            if (rr.matricesIndicesExtraExpanded || rr.matricesIndicesExtra._isExpanded) delete rr.matricesIndices._isExpanded, delete rr.matricesIndicesExtraExpanded, Sr.setVerticesData(jr.j.MatricesIndicesExtraKind, rr.matricesIndicesExtra, rr.matricesIndicesExtra._updatable || rr.matricesIndicesExtraUpdatable);
            else {
              const Qr = [];
              for (let Sr = 0; Sr < rr.matricesIndicesExtra.length; Sr++) {
                const Zr = rr.matricesIndicesExtra[Sr];
                Qr.push(255 & Zr), Qr.push((65280 & Zr) >> 8), Qr.push((16711680 & Zr) >> 16), Qr.push(Zr >> 24 & 255)
              }
              Sr.setVerticesData(jr.j.MatricesIndicesExtraKind, Qr, rr.matricesIndicesExtra._updatable || rr.matricesIndicesExtraUpdatable)
            } rr.matricesWeights && (zr._CleanMatricesWeights(rr, Sr), Sr.setVerticesData(jr.j.MatricesWeightsKind, rr.matricesWeights, rr.matricesWeights._updatable)), rr.matricesWeightsExtra && Sr.setVerticesData(jr.j.MatricesWeightsExtraKind, rr.matricesWeightsExtra, rr.matricesWeights._updatable), Sr.setIndices(rr.indices, null)
        }
        if (rr.jT) {
          Sr.jT = [];
          for (let Qr = 0; Qr < rr.jT.length; Qr++) {
            const Zr = rr.jT[Qr];
            Ir.b.AddToMesh(Zr.materialIndex, Zr.verticesStart, Zr.verticesCount, Zr.indexStart, Zr.indexCount, Sr)
          }
        }
        Sr._shouldGenerateFlatShading && (Sr.convertToFlatShadedMesh(), Sr._shouldGenerateFlatShading = !1), Sr.computeWorldMatrix(!0), Qr.onMeshImportedObservable.notifyObservers(Sr)
      }
      static _CleanMatricesWeights(rr, Sr) {
        const Qr = .001;
        if (!fr.e.CleanBoneMatrixWeights) return;
        let Zr;
        if (!(rr.skeletonId > -1)) return;
        {
          const Qr = Sr.eC().getLastSkeletonById(rr.skeletonId);
          if (!Qr) return;
          Zr = Qr.bones.length
        }
        const Wr = Sr.getVerticesData(jr.j.MatricesIndicesKind),
          ar = Sr.getVerticesData(jr.j.MatricesIndicesExtraKind),
          Ir = rr.matricesWeights,
          Er = rr.matricesWeightsExtra,
          pr = rr.numBoneInfluencer,
          xr = Ir.length;
        for (let jr = 0; jr < xr; jr += 4) {
          let rr = 0,
            Sr = -1;
          for (let Zr = 0; Zr < 4; Zr++) {
            const Wr = Ir[jr + Zr];
            rr += Wr, Wr < Qr && Sr < 0 && (Sr = Zr)
          }
          if (Er)
            for (let Zr = 0; Zr < 4; Zr++) {
              const Wr = Er[jr + Zr];
              rr += Wr, Wr < Qr && Sr < 0 && (Sr = Zr + 4)
            }
          if ((Sr < 0 || Sr > pr - 1) && (Sr = pr - 1), rr > Qr) {
            const Sr = 1 / rr;
            for (let rr = 0; rr < 4; rr++) Ir[jr + rr] *= Sr;
            if (Er)
              for (let rr = 0; rr < 4; rr++) Er[jr + rr] *= Sr
          } else Sr >= 4 ? (Er[jr + Sr - 4] = 1 - rr, ar[jr + Sr - 4] = Zr) : (Ir[jr + Sr] = 1 - rr, Wr[jr + Sr] = Zr)
        }
        Sr.setVerticesData(jr.j.MatricesIndicesKind, Wr), rr.matricesWeightsExtra && Sr.setVerticesData(jr.j.MatricesIndicesExtraKind, ar)
      }
      static Parse(rr, Sr, Qr) {
        const Wr = new zr(rr.id, Sr, void 0, rr.updatable);
        return Wr._loadedUniqueId = rr.uniqueId, mr.b && mr.b.AddTagsTo(Wr, rr.tags), rr.delayLoadingFile ? (Wr.delayLoadState = 4, Wr.delayLoadingFile = Qr + rr.delayLoadingFile, Wr._boundingInfo = new Er.c(Zr.u.FromArray(rr.boundingBoxMinimum), Zr.u.FromArray(rr.boundingBoxMaximum)), Wr._delayInfo = [], rr.hasUVs && Wr._delayInfo.push(jr.j.UVKind), rr.hasUVs2 && Wr._delayInfo.push(jr.j.UV2Kind), rr.hasUVs3 && Wr._delayInfo.push(jr.j.UV3Kind), rr.hasUVs4 && Wr._delayInfo.push(jr.j.UV4Kind), rr.hasUVs5 && Wr._delayInfo.push(jr.j.UV5Kind), rr.hasUVs6 && Wr._delayInfo.push(jr.j.UV6Kind), rr.hasColors && Wr._delayInfo.push(jr.j.ColorKind), rr.hasMatricesIndices && Wr._delayInfo.push(jr.j.MatricesIndicesKind), rr.hasMatricesWeights && Wr._delayInfo.push(jr.j.MatricesWeightsKind), Wr._delayLoadingFunction = ar.b.ImportVertexData) : ar.b.ImportVertexData(rr, Wr), Sr.pushGeometry(Wr, !0), Wr
      }
    }
  },
  42299: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => xr,
      f: () => Ur
    });
    var Zr = Qr(38560),
      Wr = Qr(40246),
      ar = Qr(42284),
      jr = Qr(42243),
      Ir = Qr(40237),
      fr = Qr(42287),
      Er = Qr(41995),
      pr = Qr(38609);
    class xr extends ar.c {
      constructor(rr, Sr) {
        super(rr, Sr.eC()), this._indexInSourceMeshInstanceArray = -1, this._distanceToCamera = 0, Sr.Nrr(this), this._sourceMesh = Sr, this._unIndexed = Sr._unIndexed, this.position.iH(Sr.position), this.rotation.iH(Sr.rotation), this.Tx.iH(Sr.Tx), Sr.rotationQuaternion && (this.rotationQuaternion = Sr.rotationQuaternion.clone()), this.animations = Sr.animations.slice();
        for (const Qr of Sr.getAnimationRanges()) null != Qr && this.createAnimationRange(Qr.name, Qr.from, Qr.to);
        if (this.infiniteDistance = Sr.infiniteDistance, this.setPivotMatrix(Sr.getPivotMatrix()), Sr.skeleton || Sr.morphTargetManager || !Sr.hasBoundingInfo) this.refreshBoundingInfo(!0, !0);
        else {
          const rr = Sr.mG();
          this.buildBoundingInfo(rr.minimum, rr.maximum)
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
      set receiveShadows(rr) {
        this._sourceMesh?.receiveShadows !== rr && Wr.c.Warn("Setting receiveShadows on an instanced mesh has no effect")
      }
      get material() {
        return this._sourceMesh.material
      }
      set material(rr) {
        this._sourceMesh?.material !== rr && Wr.c.Warn("Setting material on an instanced mesh has no effect")
      }
      get visibility() {
        return this._sourceMesh.visibility
      }
      set visibility(rr) {
        this._sourceMesh?.visibility !== rr && Wr.c.Warn("Setting visibility on an instanced mesh has no effect")
      }
      get skeleton() {
        return this._sourceMesh.skeleton
      }
      set skeleton(rr) {
        this._sourceMesh?.skeleton !== rr && Wr.c.Warn("Setting skeleton on an instanced mesh has no effect")
      }
      get renderingGroupId() {
        return this._sourceMesh.renderingGroupId
      }
      set renderingGroupId(rr) {
        this._sourceMesh && rr !== this._sourceMesh.renderingGroupId && Wr.c.Warn("Note - setting renderingGroupId of an instanced mesh has no effect on the scene")
      }
      get meshBlendingTag() {
        return this._sourceMesh.meshBlendingTag
      }
      set meshBlendingTag(rr) {
        this._sourceMesh && rr !== this._sourceMesh.meshBlendingTag && Wr.c.Warn("Setting meshBlendingTag on an instanced mesh has no effect")
      }
      getTotalVertices() {
        return this._sourceMesh ? this._sourceMesh.getTotalVertices() : 0
      }
      getTotalIndices() {
        return this._sourceMesh.getTotalIndices()
      }
      get Rar() {
        return this._sourceMesh
      }
      get geometry() {
        return this._sourceMesh._geometry
      }
      createInstance(rr) {
        return this._sourceMesh.createInstance(rr)
      }
      isReady() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return this._sourceMesh.isReady(rr, !0)
      }
      getVerticesData(rr, Sr, Qr) {
        return this._sourceMesh.getVerticesData(rr, Sr, Qr)
      }
      copyVerticesData(rr, Sr) {
        this._sourceMesh.copyVerticesData(rr, Sr)
      }
      getVertexBuffer(rr, Sr) {
        return this._sourceMesh.getVertexBuffer(rr, Sr)
      }
      setVerticesData(rr, Sr, Qr, Zr) {
        return this.Rar && this.Rar.setVerticesData(rr, Sr, Qr, Zr), this.Rar
      }
      updateVerticesData(rr, Sr, Qr, Zr) {
        return this.Rar && this.Rar.updateVerticesData(rr, Sr, Qr, Zr), this.Rar
      }
      setIndices(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return this.Rar && this.Rar.setIndices(rr, Sr), this.Rar
      }
      isVerticesDataPresent(rr) {
        return this._sourceMesh.isVerticesDataPresent(rr)
      }
      yar() {
        return this._sourceMesh.yar()
      }
      get _positions() {
        return this._sourceMesh._positions
      }
      refreshBoundingInfo() {
        let rr, Sr = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Qr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.hasBoundingInfo && this.mG().isLocked) return this;
        rr = "object" === typeof Sr ? Sr : {
          applySkeleton: Sr,
          applyMorph: Qr
        };
        const Zr = this._sourceMesh.geometry ? this._sourceMesh.geometry.boundingBias : null;
        return this._refreshBoundingInfo(this._sourceMesh._getData(rr, null, Er.j.PositionKind), Zr), this
      }
      _preActivate() {
        return this._currentLOD && this._currentLOD._preActivate(), this
      }
      _activate(rr, Sr) {
        if (super._activate(rr, Sr), this._sourceMesh.jT || Wr.c.Warn("Instances should only be created for meshes with geometry."), this._currentLOD) {
          if (this._currentLOD._getWorldMatrixDeterminant() >= 0 !== this._getWorldMatrixDeterminant() >= 0) return this._internalAbstractMeshDataInfo._actAsRegularMesh = !0, !0;
          if (this._internalAbstractMeshDataInfo._actAsRegularMesh = !1, this._currentLOD._registerInstanceForRenderId(this, rr), Sr) {
            if (!this._currentLOD._internalAbstractMeshDataInfo._isActiveIntermediate) return this._currentLOD._internalAbstractMeshDataInfo._onlyForInstancesIntermediate = !0, !0
          } else if (!this._currentLOD._internalAbstractMeshDataInfo._isActive) return this._currentLOD._internalAbstractMeshDataInfo._onlyForInstances = !0, !0
        }
        return !1
      }
      _postActivate() {
        this._sourceMesh.edgesShareWithInstances && this._sourceMesh._edgesRenderer && this._sourceMesh._edgesRenderer.isEnabled && this._sourceMesh._renderingGroup ? (this._sourceMesh._renderingGroup._edgesRenderers.pushNoDuplicate(this._sourceMesh._edgesRenderer), this._sourceMesh._edgesRenderer.customInstances.push(this.getWorldMatrix())) : this._edgesRenderer && this._edgesRenderer.isEnabled && this._sourceMesh._renderingGroup && this._sourceMesh._renderingGroup._edgesRenderers.push(this._edgesRenderer)
      }
      getWorldMatrix() {
        if (this._currentLOD && this._currentLOD !== this._sourceMesh && this._currentLOD.billboardMode !== fr.e.BILLBOARDMODE_NONE && this._currentLOD._masterMesh !== this) {
          this._billboardWorldMatrix || (this._billboardWorldMatrix = new Zr.d);
          const rr = this._currentLOD._masterMesh;
          return this._currentLOD._masterMesh = this, Zr.n.kU[7].iH(this._currentLOD.position), this._currentLOD.position.set(0, 0, 0), this._billboardWorldMatrix.iH(this._currentLOD.computeWorldMatrix(!0)), this._currentLOD.position.iH(Zr.n.kU[7]), this._currentLOD._masterMesh = rr, this._billboardWorldMatrix
        }
        return super.getWorldMatrix()
      }
      get gC() {
        return !0
      }
      getLOD(rr) {
        if (!rr) return this;
        const Sr = this.Rar.getLODLevels();
        if (Sr && 0 !== Sr.length) {
          const Sr = this.mG();
          this._currentLOD = this.Rar.getLOD(rr, Sr.oWr)
        } else this._currentLOD = this.Rar;
        return this._currentLOD
      }
      _preActivateForIntermediateRendering(rr) {
        return this.Rar._preActivateForIntermediateRendering(rr)
      }
      _syncSubMeshes() {
        if (this.releaseSubMeshes(), this._sourceMesh.jT)
          for (let rr = 0; rr < this._sourceMesh.jT.length; rr++) this._sourceMesh.jT[rr].clone(this, this._sourceMesh);
        return this
      }
      _generatePointsArray() {
        return this._sourceMesh._generatePointsArray()
      }
      _updateBoundingInfo() {
        return this.hasBoundingInfo ? this.mG().update(this.worldMatrixFromCache) : this.buildBoundingInfo(this.absolutePosition, this.absolutePosition, this.worldMatrixFromCache), this._updateSubMeshesBoundingInfo(this.worldMatrixFromCache), this
      }
      clone(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Qr = arguments.length > 2 ? arguments[2] : void 0;
        const Zr = ((arguments.length > 3 ? arguments[3] : void 0) || this._sourceMesh).createInstance(rr);
        if (Ir.b.DeepCopy(this, Zr, ["name", "jT", "uniqueId", "parent", "lightSources", "receiveShadows", "material", "visibility", "skeleton", "Rar", "gC", "facetNb", "isFacetDataEnabled", "isBlocked", "useBones", "Har", "collider", "edgesRenderer", "forward", "up", "right", "absolutePosition", "absoluteScaling", "absoluteRotationQuaternion", "xfr", "nonUniformScaling", "behaviors", "worldMatrixFromCache", "hasThinInstances", "hasBoundingInfo", "geometry"], []), Sr && (Zr.parent = Sr), !Qr)
          for (let Wr = 0; Wr < this.eC().meshes.length; Wr++) {
            const rr = this.eC().meshes[Wr];
            rr.parent === this && rr.clone(rr.name, Zr)
          }
        return Zr.computeWorldMatrix(!0), this.onClonedObservable.notifyObservers(Zr), Zr
      }
      dispose(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._sourceMesh.trr(this), super.dispose(rr, Sr)
      }
      _serializeAsParent(rr) {
        super._serializeAsParent(rr), rr.parentId = this._sourceMesh.uniqueId, rr.parentInstanceIndex = this._indexInSourceMeshInstanceArray
      }
      instantiateHierarchy() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          Sr = arguments.length > 1 ? arguments[1] : void 0,
          Qr = arguments.length > 2 ? arguments[2] : void 0;
        const Zr = this.clone("Clone of " + (this.name || this.id), rr || this.parent, !0, Sr && Sr.newSourcedMesh);
        Zr && Qr && Qr(this, Zr);
        for (const Wr of this.getChildTransformNodes(!0)) Wr.instantiateHierarchy(Zr, Sr, Qr);
        return Zr
      }
    }
    let mr = !1;

    function Nr(rr, Sr, Qr, Zr, Wr) {
      for (let ar = 0; ar < Sr.length; ar++) {
        const jr = rr[Sr[ar]] ?? 0,
          Ir = Wr + Qr[ar];
        jr.toArray ? jr.toArray(Zr, Ir) : jr.copyToArray ? jr.copyToArray(Zr, Ir) : Zr[Ir] = jr
      }
    }

    function Ur() {
      mr || (mr = !0, jr.c._instancedMeshFactory = (rr, Sr) => {
        const Qr = new xr(rr, Sr);
        if (Sr.pG) {
          Qr.pG = {};
          for (const rr in Sr.pG) Qr.pG[rr] = Sr.pG[rr]
        }
        return Qr
      }, jr.c.prototype.aG = function(rr, Sr) {
        if (!this.pG) {
          this.pG = {};
          for (const rr of this.instances) rr.pG = {}
        }
        this._userInstancedBuffersStorage || (this._userInstancedBuffersStorage = {
          data: {},
          vertexBuffers: {},
          strides: {},
          sizes: {},
          vertexArrayObjects: this.MU().getCaps().vertexArrayObject ? {} : void 0
        }), this.pG[rr] = null, this._userInstancedBuffersStorage.strides[rr] = Sr;
        const Qr = this._userInstancedBuffersStorage;
        Qr.interleavedKinds = [], Qr.interleavedOffsets = [], Qr.interleavedRowStride = 0;
        for (const Zr in Qr.strides) Qr.interleavedKinds.push(Zr), Qr.interleavedOffsets.push(Qr.interleavedRowStride), Qr.interleavedRowStride += Qr.strides[Zr];
        Qr.interleavedData = new Float32Array(32 * Qr.interleavedRowStride);
        for (const Zr in Qr.interleavedBuffers) Qr.interleavedBuffers[Zr].buffer.dispose();
        Qr.interleavedBuffers = {}, Qr.vertexBuffers[rr] = null;
        for (const Zr of this.instances) Zr.pG[rr] = null;
        this._invalidateInstanceVertexArrayObject(), this._markSubMeshesAsAttributesDirty()
      }, jr.c.prototype._processInstancedBuffers = function(rr, Sr) {
        const Qr = this._userInstancedBuffersStorage,
          Zr = Qr.interleavedRowStride;
        if (!Zr) return;
        const Wr = rr ? rr.length : 0,
          ar = (Wr + 1) * Zr;
        let jr = Qr.interleavedData;
        if (jr.length < ar) {
          let rr = jr.length;
          for (; rr < ar;) rr *= 2;
          jr = Qr.interleavedData = new Float32Array(rr)
        }
        const Ir = Qr.interleavedKinds,
          fr = Qr.interleavedOffsets;
        let pr = 0;
        Sr && (Nr(this.pG, Ir, fr, jr, pr), pr += Zr);
        for (let Er = 0; Er < Wr; Er++) Nr(rr[Er].pG, Ir, fr, jr, pr), pr += Zr;
        let xr = "shared",
          mr = Qr.vertexBuffers;
        this._instanceDataStorage.useMonoDataStorageRenderPass || (xr = this._instanceDataStorage.engine.currentRenderPassId, Qr.renderPasses || (Qr.renderPasses = {}), Qr.renderPasses[xr] || (Qr.renderPasses[xr] = {}), mr = Qr.renderPasses[xr]);
        const Ur = Qr.interleavedBuffers[xr];
        let tr = !Ur || Ur.data !== jr;
        for (let Er = 0; !tr && Er < Ir.length; Er++) tr = !mr[Ir[Er]];
        if (!tr) return void Ur.buffer.updateDirectly(jr, 0);
        Ur?.buffer.dispose();
        const hr = new Er.c(this.MU(), jr, !0, Zr, !1, !0);
        for (let Er = 0; Er < Ir.length; Er++) {
          const rr = Ir[Er],
            Sr = hr.createVertexBuffer(rr, fr[Er], Qr.strides[rr]);
          Sr.hashCode += Sr.byteOffset * 2 ** 24, mr[rr] = Sr
        }
        Qr.interleavedBuffers[xr] = {
          buffer: hr,
          data: jr
        }, this._invalidateInstanceVertexArrayObject()
      }, jr.c.prototype._invalidateInstanceVertexArrayObject = function() {
        if (this._userInstancedBuffersStorage && void 0 !== this._userInstancedBuffersStorage.vertexArrayObjects) {
          for (const rr in this._userInstancedBuffersStorage.vertexArrayObjects) this.MU().releaseVertexArrayObject(this._userInstancedBuffersStorage.vertexArrayObjects[rr]);
          this._userInstancedBuffersStorage.vertexArrayObjects = {}
        }
      }, jr.c.prototype._disposeInstanceSpecificData = function() {
        for (const Sr in this._instanceDataStorage.renderPasses) this._instanceDataStorage.renderPasses[Sr].instancesBuffer?.dispose();
        for (this._instanceDataStorage.renderPasses = {}, this._instanceDataStorage.dataStorageRenderPass?.instancesBuffer?.dispose(); this.instances.length;) this.instances[0].dispose();
        for (const Sr in this.pG) this._userInstancedBuffersStorage.vertexBuffers[Sr] && this._userInstancedBuffersStorage.vertexBuffers[Sr].dispose();
        const rr = this._userInstancedBuffersStorage?.interleavedBuffers;
        if (rr) {
          for (const Sr in rr) rr[Sr].buffer.dispose();
          this._userInstancedBuffersStorage.interleavedBuffers = {}
        }
        this._invalidateInstanceVertexArrayObject(), this.pG = {}
      }, (0, pr.e)("BABYLON.InstancedMesh", xr))
    }
  },
  42243: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => dr,
      f: () => ur,
      i: () => wr
    });
    var Zr, Wr, ar, jr, Ir, fr, Er, pr, xr, mr, Nr, Ur, tr, hr, zr = Qr(38595),
      Yr = Qr(41950),
      nr = Qr(41898),
      er = Qr(40237),
      Kr = Qr(41891),
      yr = Qr(42251),
      Br = Qr(42057),
      Tr = Qr(38560),
      vr = Qr(38684),
      Or = Qr(42060),
      Lr = Qr(41995),
      lr = Qr(42256),
      Xr = Qr(42265),
      Pr = Qr(42284),
      Hr = Qr(42134),
      qr = Qr(42130),
      Rr = Qr(42215),
      gr = Qr(42293),
      Cr = Qr(42273),
      Mr = Qr(41889),
      Gr = Qr(40246),
      kr = Qr(38609),
      Ar = Qr(41769),
      Vr = Qr(42020);
    class ir {
      constructor(rr, Sr) {
        this.distanceOrScreenCoverage = rr, this.mesh = Sr
      }
    }
    class wr {}
    class cr {
      constructor() {
        this.batchCache = new or(this), this.batchCacheReplacementModeInFrozenMode = new or(this), this.instancesBufferSize = 2048
      }
    }
    class Fr {
      constructor() {
        this.renderPasses = {}
      }
    }
    class or {
      constructor(rr) {
        this.parent = rr, this.mustReturn = !1, this.visibleInstances = new Array, this.renderSelf = [], this.hardwareInstancedRendering = []
      }
    }
    class br {
      constructor() {
        this.instancesCount = 0, this.matrixBuffer = null, this.previousMatrixBuffer = null, this.matrixBufferSize = 512, this.matrixData = null, this.boundingVectors = [], this.worldMatrices = null
      }
    }
    class Jr {
      constructor() {
        this._areNormalsFrozen = !1, this._source = null, this.meshMap = null, this._preActivateId = -1, this._LODLevels = new Array, this._useLODScreenCoverage = !1, this._effectiveMaterial = null, this._forcedInstanceCount = 0, this._overrideRenderingFillMode = null
      }
    }
    const Dr = {
      source: null,
      parent: null,
      doNotCloneChildren: !1,
      clonePhysicsImpostor: !0,
      cloneThinInstances: !1
    };
    class dr extends Pr.c {
      static _GetDefaultSideOrientation(rr) {
        return rr || dr.FRONTSIDE
      }
      get useLODScreenCoverage() {
        return this._internalMeshDataInfo._useLODScreenCoverage
      }
      set useLODScreenCoverage(rr) {
        this._internalMeshDataInfo._useLODScreenCoverage = rr, this._sortLODLevels()
      }
      get computeBonesUsingShaders() {
        return this._internalAbstractMeshDataInfo._computeBonesUsingShaders
      }
      set computeBonesUsingShaders(rr) {
        this._internalAbstractMeshDataInfo._computeBonesUsingShaders !== rr && (rr && this._internalMeshDataInfo._sourcePositions && (this.setVerticesData(Lr.j.PositionKind, this._internalMeshDataInfo._sourcePositions, !0), this._internalMeshDataInfo._sourceNormals && this.setVerticesData(Lr.j.NormalKind, this._internalMeshDataInfo._sourceNormals, !0), this._internalMeshDataInfo._sourcePositions = null, this._internalMeshDataInfo._sourceNormals = null), this._internalAbstractMeshDataInfo._computeBonesUsingShaders = rr, this._markSubMeshesAsAttributesDirty())
      }
      get onBeforeRenderObservable() {
        return this._internalMeshDataInfo._onBeforeRenderObservable || (this._internalMeshDataInfo._onBeforeRenderObservable = new zr.d), this._internalMeshDataInfo._onBeforeRenderObservable
      }
      get onBeforeBindObservable() {
        return this._internalMeshDataInfo._onBeforeBindObservable || (this._internalMeshDataInfo._onBeforeBindObservable = new zr.d), this._internalMeshDataInfo._onBeforeBindObservable
      }
      get onAfterRenderObservable() {
        return this._internalMeshDataInfo._onAfterRenderObservable || (this._internalMeshDataInfo._onAfterRenderObservable = new zr.d), this._internalMeshDataInfo._onAfterRenderObservable
      }
      get onBetweenPassObservable() {
        return this._internalMeshDataInfo._onBetweenPassObservable || (this._internalMeshDataInfo._onBetweenPassObservable = new zr.d), this._internalMeshDataInfo._onBetweenPassObservable
      }
      get onBeforeDrawObservable() {
        return this._internalMeshDataInfo._onBeforeDrawObservable || (this._internalMeshDataInfo._onBeforeDrawObservable = new zr.d), this._internalMeshDataInfo._onBeforeDrawObservable
      }
      set onBeforeDraw(rr) {
        this._onBeforeDrawObserver && this.onBeforeDrawObservable.remove(this._onBeforeDrawObserver), this._onBeforeDrawObserver = this.onBeforeDrawObservable.add(rr)
      }
      get Har() {
        return this.instances.length > 0
      }
      get hasThinInstances() {
        return (this.forcedInstanceCount || this._thinInstanceDataStorage.instancesCount || 0) > 0
      }
      get forcedInstanceCount() {
        return this._internalMeshDataInfo._forcedInstanceCount
      }
      set forcedInstanceCount(rr) {
        this._internalMeshDataInfo._forcedInstanceCount = rr
      }
      get sideOrientation() {
        return this._internalMeshDataInfo._sideOrientation
      }
      set sideOrientation(rr) {
        this._internalMeshDataInfo._sideOrientation = rr, this._internalAbstractMeshDataInfo._sideOrientationHint = this._scene.useRightHandedSystem && 1 === rr || !this._scene.useRightHandedSystem && 0 === rr
      }
      get _effectiveSideOrientation() {
        return this._internalMeshDataInfo._effectiveSideOrientation
      }
      get overrideMaterialSideOrientation() {
        return this.sideOrientation
      }
      set overrideMaterialSideOrientation(rr) {
        this.sideOrientation = rr, this.material && (this.material.sideOrientation = null)
      }
      get overrideRenderingFillMode() {
        return this._internalMeshDataInfo._overrideRenderingFillMode
      }
      set overrideRenderingFillMode(rr) {
        this._internalMeshDataInfo._overrideRenderingFillMode = rr
      }
      get material() {
        return this._internalAbstractMeshDataInfo._material
      }
      set material(rr) {
        rr && (this.material && null === this.material.sideOrientation || this._internalAbstractMeshDataInfo._sideOrientationHint) && (rr.sideOrientation = null), this._setMaterial(rr)
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
      set isUnIndexed(rr) {
        this._unIndexed !== rr && (this._unIndexed = rr, this._markSubMeshesAsAttributesDirty())
      }
      get worldMatrixInstancedBuffer() {
        const rr = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._instanceDataStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId];
        return rr ? rr.instancesData : void 0
      }
      get previousWorldMatrixInstancedBuffer() {
        const rr = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._instanceDataStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId];
        return rr ? rr.instancesPreviousData : void 0
      }
      get manualUpdateOfWorldMatrixInstancedBuffer() {
        return this._instanceDataStorage.manualUpdate
      }
      set manualUpdateOfWorldMatrixInstancedBuffer(rr) {
        this._instanceDataStorage.manualUpdate = rr
      }
      get manualUpdateOfPreviousWorldMatrixInstancedBuffer() {
        return this._instanceDataStorage.previousManualUpdate
      }
      set manualUpdateOfPreviousWorldMatrixInstancedBuffer(rr) {
        this._instanceDataStorage.previousManualUpdate = rr
      }
      get forceWorldMatrixInstancedBufferUpdate() {
        return this._instanceDataStorage.forceMatrixUpdates
      }
      set forceWorldMatrixInstancedBufferUpdate(rr) {
        this._instanceDataStorage.forceMatrixUpdates = rr
      }
      _copySource(rr, Sr) {
        let Qr = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          Zr = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const Wr = this.eC();
        if (rr._geometry && rr._geometry.applyToMesh(this), er.b.DeepCopy(rr, this, ["name", "material", "skeleton", "instances", "parent", "uniqueId", "source", "metadata", "morphTargetManager", "Har", "worldMatrixInstancedBuffer", "previousWorldMatrixInstancedBuffer", "hasLODLevels", "geometry", "isBlocked", "areNormalsFrozen", "facetNb", "isFacetDataEnabled", "lightSources", "useBones", "gC", "collider", "edgesRenderer", "forward", "up", "right", "absolutePosition", "absoluteScaling", "absoluteRotationQuaternion", "xfr", "nonUniformScaling", "behaviors", "worldMatrixFromCache", "hasThinInstances", "cloneMeshMap", "hasBoundingInfo", "physicsBody", "physicsImpostor"], ["_poseMatrix"]), this._internalMeshDataInfo._source = rr, Wr.useClonedMeshMap && (rr._internalMeshDataInfo.meshMap || (rr._internalMeshDataInfo.meshMap = {}), rr._internalMeshDataInfo.meshMap[this.uniqueId] = this), this._originalBuilderSideOrientation = rr._originalBuilderSideOrientation, this._creationDataStorage = rr._creationDataStorage, rr._ranges) {
          const Sr = rr._ranges;
          for (const rr in Sr) Object.prototype.hasOwnProperty.call(Sr, rr) && Sr[rr] && this.createAnimationRange(rr, Sr[rr].from, Sr[rr].to)
        }
        if (rr.metadata && rr.metadata.clone ? this.metadata = rr.metadata.clone() : this.metadata = rr.metadata, this._internalMetadata = rr._internalMetadata, this.meshBlendingTag = rr.meshBlendingTag, Kr.b && Kr.b.HasTags(rr) && Kr.b.AddTagsTo(this, Kr.b.GetTags(rr, !0)), this.VK(rr.isEnabled(!1)), this.parent = rr.parent, this.setPivotMatrix(rr.getPivotMatrix(), this._postMultiplyPivotMatrix), this.id = this.name + "." + rr.id, this.material = rr.material, !Sr) {
          const Wr = rr.getDescendants(!0);
          for (let rr = 0; rr < Wr.length; rr++) {
            const ar = Wr[rr];
            ar._isMesh ? (Dr.parent = this, Dr.doNotCloneChildren = Sr, Dr.clonePhysicsImpostor = Qr, Dr.cloneThinInstances = Zr, ar.clone(this.name + "." + ar.name, Dr)) : ar.clone && ar.clone(this.name + "." + ar.name, this)
          }
        }
        if (rr.morphTargetManager && (this.morphTargetManager = rr.morphTargetManager), (0, Ar.c)(Wr.getPhysicsEngine)) {
          const Sr = Wr.getPhysicsEngine();
          if (Qr && Sr)
            if (1 === Sr.getPluginVersion()) {
              const Qr = Sr.getImpostorForPhysicsObject(rr);
              Qr && (this.physicsImpostor = Qr.clone(this))
            } else 2 === Sr.getPluginVersion() && rr.physicsBody && rr.physicsBody.clone(this)
        }
        for (let ar = 0; ar < Wr.pT.length; ar++) {
          const Sr = Wr.pT[ar];
          Sr.emitter === rr && Sr.clone(Sr.name, this)
        }
        if (this.skeleton = rr.skeleton, Zr && (rr._thinInstanceDataStorage.matrixData ? (this.vrr("matrix", new Float32Array(rr._thinInstanceDataStorage.matrixData), 16, !rr._thinInstanceDataStorage.matrixBuffer.isUpdatable()), this._thinInstanceDataStorage.matrixBufferSize = rr._thinInstanceDataStorage.matrixBufferSize, this._thinInstanceDataStorage.instancesCount = rr._thinInstanceDataStorage.instancesCount) : this._thinInstanceDataStorage.matrixBufferSize = rr._thinInstanceDataStorage.matrixBufferSize, rr._userThinInstanceBuffersStorage)) {
          const Sr = rr._userThinInstanceBuffersStorage;
          for (const rr in Sr.data) this.vrr(rr, new Float32Array(Sr.data[rr]), Sr.strides[rr], !Sr.vertexBuffers?.[rr]?.isUpdatable()), this._userThinInstanceBuffersStorage.sizes[rr] = Sr.sizes[rr]
        }
        this.refreshBoundingInfo(!0, !0), this.computeWorldMatrix(!0)
      }
      constructor(rr) {
        let Sr, Qr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Zr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Wr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          ar = arguments.length > 4 ? arguments[4] : void 0,
          jr = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        super(rr, Qr), this._internalMeshDataInfo = new Jr, this.delayLoadState = 0, this.instances = [], this._creationDataStorage = null, this._geometry = null, this._thinInstanceDataStorage = new br, this._shouldGenerateFlatShading = !1, this._originalBuilderSideOrientation = dr.DEFAULTSIDE, this.ignoreCameraMaxZ = !1, Qr = this.eC(), this._instanceDataStorage = new Fr, this._instanceDataStorage.engine = Qr.MU(), this._instanceDataStorage.useMonoDataStorageRenderPass = !this._instanceDataStorage.engine.isWebGPU, this._instanceDataStorage.useMonoDataStorageRenderPass && (this._instanceDataStorage.dataStorageRenderPass = new cr), this._scene.useRightHandedSystem ? this.sideOrientation = 0 : this.sideOrientation = 1, this._onBeforeDraw = (rr, Sr, Qr) => {
          rr && Qr && (this._uniformBuffer ? this.transferToEffect(Sr) : Qr.bindOnlyWorldMatrix(Sr))
        };
        let Ir = !1;
        if (Zr && void 0 === Zr._addToSceneRootNodes) {
          const rr = Zr;
          Sr = rr.parent ?? null, Wr = rr.source ?? null, ar = rr.doNotCloneChildren ?? !1, jr = rr.clonePhysicsImpostor ?? !0, Ir = rr.cloneThinInstances ?? !1
        } else Sr = Zr;
        Wr && this._copySource(Wr, ar, jr, Ir), null !== Sr && (this.parent = Sr), this._instanceDataStorage.hardwareInstancedRendering = this.MU().getCaps().instancedArrays, this._internalMeshDataInfo._onMeshReadyObserverAdded = rr => {
          rr.unregisterOnNextCall = !0, this.isReady(!0) ? this.onMeshReadyObservable.notifyObservers(this) : this._internalMeshDataInfo._checkReadinessObserver || (this._internalMeshDataInfo._checkReadinessObserver = this._scene.onBeforeRenderObservable.add((() => {
            this.isReady(!0) && (this._scene.onBeforeRenderObservable.remove(this._internalMeshDataInfo._checkReadinessObserver), this._internalMeshDataInfo._checkReadinessObserver = null, this.onMeshReadyObservable.notifyObservers(this))
          })))
        }, this.onMeshReadyObservable = new zr.d(this._internalMeshDataInfo._onMeshReadyObserverAdded), Wr && Wr.onClonedObservable.notifyObservers(this)
      }
      instantiateHierarchy() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          Sr = arguments.length > 1 ? arguments[1] : void 0,
          Qr = arguments.length > 2 ? arguments[2] : void 0;
        const Zr = 0 === this.getTotalVertices() || Sr && Sr.doNotInstantiate && (!0 === Sr.doNotInstantiate || Sr.doNotInstantiate(this)) ? this.clone("Clone of " + (this.name || this.id), rr || this.parent, !0) : this.createInstance("instance of " + (this.name || this.id));
        Zr.parent = rr || this.parent, Zr.position = this.position.clone(), Zr.Tx = this.Tx.clone(), this.rotationQuaternion ? Zr.rotationQuaternion = this.rotationQuaternion.clone() : Zr.rotation = this.rotation.clone(), Qr && Qr(this, Zr);
        for (const Wr of this.getChildTransformNodes(!0)) "InstancedMesh" === Wr.getClassName() && "Mesh" === Zr.getClassName() && Wr.Rar === this ? Wr.instantiateHierarchy(Zr, {
          doNotInstantiate: Sr && Sr.doNotInstantiate || !1,
          newSourcedMesh: Zr
        }, Qr) : Wr.instantiateHierarchy(Zr, Sr, Qr);
        return Zr
      }
      getClassName() {
        return "Mesh"
      }
      get _isMesh() {
        return !0
      }
      toString(rr) {
        let Sr = super.toString(rr);
        if (Sr += ", n vertices: " + this.getTotalVertices(), Sr += ", parent: " + (this._waitingParentId ? this._waitingParentId : this.parent ? this.parent.name : "NONE"), this.animations)
          for (let Qr = 0; Qr < this.animations.length; Qr++) Sr += ", animation[0]: " + this.animations[Qr].toString(rr);
        if (rr)
          if (this._geometry) {
            const rr = this.yar(),
              Qr = this.getVerticesData(Lr.j.PositionKind);
            Qr && rr && (Sr += ", flat shading: " + (Qr.length / 3 === rr.length ? "YES" : "NO"))
          } else Sr += ", flat shading: UNKNOWN";
        return Sr
      }
      _unBindEffect() {
        super._unBindEffect();
        for (const rr of this.instances) rr._unBindEffect()
      }
      get hasLODLevels() {
        return this._internalMeshDataInfo._LODLevels.length > 0
      }
      getLODLevels() {
        return this._internalMeshDataInfo._LODLevels
      }
      _sortLODLevels() {
        const rr = this._internalMeshDataInfo._useLODScreenCoverage ? -1 : 1;
        this._internalMeshDataInfo._LODLevels.sort(((Sr, Qr) => Sr.distanceOrScreenCoverage < Qr.distanceOrScreenCoverage ? rr : Sr.distanceOrScreenCoverage > Qr.distanceOrScreenCoverage ? -rr : 0))
      }
      addLODLevel(rr, Sr) {
        if (Sr && Sr._masterMesh) return Gr.c.Warn("You cannot use a mesh as LOD level twice"), this;
        const Qr = new ir(rr, Sr);
        return this._internalMeshDataInfo._LODLevels.push(Qr), Sr && (Sr._masterMesh = this), this._sortLODLevels(), this
      }
      getLODLevelAtDistance(rr) {
        const Sr = this._internalMeshDataInfo;
        for (let Qr = 0; Qr < Sr._LODLevels.length; Qr++) {
          const Zr = Sr._LODLevels[Qr];
          if (Zr.distanceOrScreenCoverage === rr) return Zr.mesh
        }
        return null
      }
      removeLODLevel(rr) {
        const Sr = this._internalMeshDataInfo;
        for (let Qr = 0; Qr < Sr._LODLevels.length; Qr++) Sr._LODLevels[Qr].mesh === rr && (Sr._LODLevels.splice(Qr, 1), rr && (rr._masterMesh = null));
        return this._sortLODLevels(), this
      }
      getLOD(rr, Sr) {
        const Qr = this._internalMeshDataInfo;
        if (!Qr._LODLevels || 0 === Qr._LODLevels.length) return this;
        const Zr = Sr || this.mG().oWr,
          Wr = rr.mode === Br.d.ORTHOGRAPHIC_CAMERA ? rr.minZ : Zr.centerWorld.subtract(rr.globalPosition).length();
        let ar = Wr,
          jr = 1;
        if (Qr._useLODScreenCoverage) {
          const Sr = rr.screenArea;
          let Qr = Zr.radiusWorld * rr.minZ / Wr;
          Qr = Qr * Qr * Math.PI, ar = Qr / Sr, jr = -1
        }
        if (jr * Qr._LODLevels[Qr._LODLevels.length - 1].distanceOrScreenCoverage > jr * ar) return this.onLODLevelSelection && this.onLODLevelSelection(ar, this, this), this;
        for (let Ir = 0; Ir < Qr._LODLevels.length; Ir++) {
          const rr = Qr._LODLevels[Ir];
          if (jr * rr.distanceOrScreenCoverage < jr * ar) {
            if (rr.mesh) {
              if (4 === rr.mesh.delayLoadState) return rr.mesh._checkDelayState(), this;
              if (2 === rr.mesh.delayLoadState) return this;
              rr.mesh._preActivate(), rr.mesh._updateSubMeshesBoundingInfo(this.worldMatrixFromCache)
            }
            return this.onLODLevelSelection && this.onLODLevelSelection(ar, this, rr.mesh), rr.mesh
          }
        }
        return this.onLODLevelSelection && this.onLODLevelSelection(ar, this, this), this
      }
      get geometry() {
        return this._geometry
      }
      getTotalVertices() {
        return null === this._geometry || void 0 === this._geometry ? 0 : this._geometry.getTotalVertices()
      }
      getVerticesData(rr, Sr, Qr, Zr) {
        if (!this._geometry) return null;
        let Wr = Zr ? void 0 : this._userInstancedBuffersStorage?.vertexBuffers[rr]?.getFloatData(this.instances.length + 1, Qr || Sr && 1 !== this._geometry.meshes.length);
        return Wr || (Wr = this._geometry.getVerticesData(rr, Sr, Qr)), Wr
      }
      copyVerticesData(rr, Sr) {
        this._geometry && this._geometry.copyVerticesData(rr, Sr)
      }
      getVertexBuffer(rr, Sr) {
        return this._geometry ? (Sr ? void 0 : this._userInstancedBuffersStorage?.vertexBuffers[rr]) ?? this._geometry.getVertexBuffer(rr) : null
      }
      isVerticesDataPresent(rr, Sr) {
        return this._geometry ? !Sr && void 0 !== this._userInstancedBuffersStorage?.vertexBuffers[rr] || this._geometry.isVerticesDataPresent(rr) : !!this._delayInfo && -1 !== this._delayInfo.indexOf(rr)
      }
      isVertexBufferUpdatable(rr, Sr) {
        if (!this._geometry) return !!this._delayInfo && -1 !== this._delayInfo.indexOf(rr);
        if (!Sr) {
          const Sr = this._userInstancedBuffersStorage?.vertexBuffers[rr];
          if (Sr) return Sr.isUpdatable()
        }
        return this._geometry.isVertexBufferUpdatable(rr)
      }
      getVerticesDataKinds(rr) {
        if (!this._geometry) {
          const rr = [];
          if (this._delayInfo)
            for (const Sr of this._delayInfo) rr.push(Sr);
          return rr
        }
        const Sr = this._geometry.getVerticesDataKinds();
        if (!rr && this._userInstancedBuffersStorage)
          for (const Qr in this._userInstancedBuffersStorage.vertexBuffers) - 1 === Sr.indexOf(Qr) && Sr.push(Qr);
        return Sr
      }
      getTotalIndices() {
        return this._geometry ? this._geometry.getTotalIndices() : 0
      }
      yar(rr, Sr) {
        return this._geometry ? this._geometry.yar(rr, Sr) : []
      }
      get isBlocked() {
        return null !== this._masterMesh && void 0 !== this._masterMesh
      }
      isReady() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (2 === this.delayLoadState) return !1;
        if (!super.isReady(rr)) return !1;
        if (!this.jT || 0 === this.jT.length) return !0;
        if (!rr) return !0;
        const Qr = this.MU(),
          Zr = this.eC(),
          Wr = Sr || Qr.getCaps().instancedArrays && (this.instances.length > 0 || this.hasThinInstances);
        this.computeWorldMatrix();
        const ar = this.material || Zr.defaultMaterial;
        if (ar)
          if (ar._storeEffectOnSubMeshes)
            for (const Ir of this.jT) {
              const rr = Ir.iU();
              if (rr)
                if (rr._storeEffectOnSubMeshes) {
                  if (!rr.isReadyForSubMesh(this, Ir, Wr)) return !1
                } else if (!rr.isReady(this, Wr)) return !1
            } else if (!ar.isReady(this, Wr)) return !1;
        const jr = Qr.currentRenderPassId;
        for (const Ir of this.lightSources) {
          const rr = Ir.getShadowGenerators();
          if (!rr) continue;
          const Sr = rr.values();
          for (let Zr = Sr.next(); !0 !== Zr.done; Zr = Sr.next()) {
            const rr = Zr.value;
            if (rr && (!rr.getShadowMap()?.renderList || rr.getShadowMap()?.renderList && -1 !== rr.getShadowMap()?.renderList?.indexOf(this))) {
              const Sr = rr.getShadowMap().renderPassIds ?? [Qr.currentRenderPassId];
              for (let Zr = 0; Zr < Sr.length; ++Zr) {
                Qr.currentRenderPassId = Sr[Zr];
                for (const Sr of this.jT)
                  if (!rr.isReady(Sr, Wr, Sr.iU()?.needAlphaBlendingForMesh(this) ?? !1)) return Qr.currentRenderPassId = jr, !1
              }
              Qr.currentRenderPassId = jr
            }
          }
        }
        for (const Ir of this._internalMeshDataInfo._LODLevels)
          if (Ir.mesh && !Ir.mesh.isReady(Wr)) return !1;
        return !0
      }
      get areNormalsFrozen() {
        return this._internalMeshDataInfo._areNormalsFrozen
      }
      wU() {
        return this._internalMeshDataInfo._areNormalsFrozen = !0, this
      }
      unfreezeNormals() {
        return this._internalMeshDataInfo._areNormalsFrozen = !1, this
      }
      set overridenInstanceCount(rr) {
        this._instanceDataStorage.overridenInstanceCount = rr
      }
      _getInstanceDataStorage() {
        if (this._instanceDataStorage.useMonoDataStorageRenderPass) return this._instanceDataStorage.dataStorageRenderPass;
        const rr = this._instanceDataStorage.engine.currentRenderPassId;
        let Sr = this._instanceDataStorage.renderPasses[rr];
        return Sr || (Sr = new cr, this._instanceDataStorage.renderPasses[rr] = Sr), Sr
      }
      _preActivate() {
        const rr = this._internalMeshDataInfo,
          Sr = this.eC().getRenderId();
        return rr._preActivateId === Sr || (rr._preActivateId = Sr, this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass.visibleInstances = null : this._getInstanceDataStorage().visibleInstances = null), this
      }
      _preActivateForIntermediateRendering(rr) {
        const Sr = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        return Sr.visibleInstances && (Sr.visibleInstances.intermediateDefaultRenderId = rr), this
      }
      _registerInstanceForRenderId(rr, Sr) {
        const Qr = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        return Qr.visibleInstances || (Qr.visibleInstances = {
          defaultRenderId: Sr,
          selfDefaultRenderId: this._renderId,
          intermediateDefaultRenderId: -1
        }), Qr.visibleInstances[Sr] || (void 0 === Qr.previousRenderId || this._instanceDataStorage.useMonoDataStorageRenderPass && !this._instanceDataStorage.isFrozen || delete Qr.visibleInstances[Qr.previousRenderId], Qr.previousRenderId = Sr, Qr.visibleInstances[Sr] = new Array), Qr.visibleInstances[Sr].push(rr), this
      }
      _afterComputeWorldMatrix() {
        super._afterComputeWorldMatrix(), this.hasThinInstances && (this.VU || this.thinInstanceRefreshBoundingInfo(!1))
      }
      _postActivate() {
        this.edgesShareWithInstances && this.edgesRenderer && this.edgesRenderer.isEnabled && this._renderingGroup && (this._renderingGroup._edgesRenderers.pushNoDuplicate(this.edgesRenderer), this.edgesRenderer.customInstances.push(this.getWorldMatrix()))
      }
      refreshBoundingInfo() {
        let rr, Sr = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Qr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.hasBoundingInfo && this.mG().isLocked) return this;
        rr = "object" === typeof Sr ? Sr : {
          applySkeleton: Sr,
          applyMorph: Qr
        };
        const Zr = this.geometry ? this.geometry.boundingBias : null;
        return this._refreshBoundingInfo(this._getData(rr, null, Lr.j.PositionKind), Zr), this
      }
      _createGlobalSubMesh(rr) {
        const Sr = this.getTotalVertices();
        if (!Sr || !this.yar()) return null;
        if (this.jT && this.jT.length > 0) {
          const Qr = this.yar();
          if (!Qr) return null;
          const Zr = Qr.length;
          let Wr = !1;
          if (rr) Wr = !0;
          else
            for (const rr of this.jT) {
              if (rr.indexStart + rr.indexCount > Zr) {
                Wr = !0;
                break
              }
              if (rr.verticesStart + rr.verticesCount > Sr) {
                Wr = !0;
                break
              }
            }
          if (!Wr) return this.jT[0]
        }
        return this.releaseSubMeshes(), new Hr.b(0, 0, Sr, 0, this.getTotalIndices() || (this.isUnIndexed ? Sr : 0), this)
      }
      subdivide(rr) {
        if (rr < 1) return;
        const Sr = this.getTotalIndices();
        let Qr = Sr / rr | 0,
          Zr = 0;
        for (; Qr % 3 !== 0;) Qr++;
        this.releaseSubMeshes();
        for (let Wr = 0; Wr < rr && !(Zr >= Sr); Wr++) Hr.b.CreateFromIndices(0, Zr, Zr + Qr >= Sr ? Sr - Zr : Qr, this, void 0, !1), Zr += Qr;
        this.refreshBoundingInfo(), this.synchronizeInstances()
      }
      setVerticesData(rr, Sr) {
        let Qr = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Zr = arguments.length > 3 ? arguments[3] : void 0;
        if (this._geometry) this._geometry.setVerticesData(rr, Sr, Qr, Zr);
        else {
          const Zr = new lr.b;
          Zr.set(Sr, rr);
          const Wr = this.eC();
          new Xr.e(Xr.e.RandomId(), Wr, Zr, Qr, this)
        }
        return this
      }
      removeVerticesData(rr) {
        this._geometry && this._geometry.removeVerticesData(rr)
      }
      markVerticesDataAsUpdatable(rr) {
        let Sr = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const Qr = this.getVertexBuffer(rr);
        Qr && Qr.isUpdatable() !== Sr && this.setVerticesData(rr, this.getVerticesData(rr), Sr)
      }
      setVerticesBuffer(rr) {
        let Sr = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        return this._geometry || (this._geometry = Xr.e.CreateGeometryForMesh(this)), this._geometry.setVerticesBuffer(rr, Qr, Sr), this
      }
      updateVerticesData(rr, Sr, Qr, Zr) {
        return this._geometry ? (Zr ? (this.makeGeometryUnique(), this.updateVerticesData(rr, Sr, Qr, !1)) : this._geometry.updateVerticesData(rr, Sr, Qr), this) : this
      }
      updateMeshPositions(rr) {
        let Sr = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const Qr = this.getVerticesData(Lr.j.PositionKind);
        if (!Qr) return this;
        if (rr(Qr), this.updateVerticesData(Lr.j.PositionKind, Qr, !1, !1), Sr) {
          const rr = this.yar(),
            Sr = this.getVerticesData(Lr.j.NormalKind);
          if (!Sr) return this;
          lr.b.ComputeNormals(Qr, rr, Sr), this.updateVerticesData(Lr.j.NormalKind, Sr, !1, !1)
        }
        return this
      }
      makeGeometryUnique() {
        if (!this._geometry) return this;
        if (1 === this._geometry.meshes.length) return this;
        const rr = this._geometry,
          Sr = this._geometry.copy(Xr.e.RandomId());
        return rr.releaseForMesh(this, !0), Sr.applyToMesh(this), this
      }
      setIndexBuffer(rr, Sr, Qr) {
        let Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          Wr = this._geometry;
        Wr || (Wr = new Xr.e(Xr.e.RandomId(), this.eC(), void 0, void 0, this)), Wr.setIndexBuffer(rr, Sr, Qr, Zr)
      }
      setIndices(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Qr = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Zr = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this._geometry) this._geometry.setIndices(rr, Sr, Qr, Zr);
        else {
          const Zr = new lr.b;
          Zr.indices = rr;
          const Wr = this.eC();
          new Xr.e(Xr.e.RandomId(), Wr, Zr, Qr, this, Sr)
        }
        return this
      }
      updateIndices(rr, Sr) {
        let Qr = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return this._geometry ? (this._geometry.updateIndices(rr, Sr, Qr), this) : this
      }
      toLeftHanded() {
        return this._geometry ? (this._geometry.toLeftHanded(), this) : this
      }
      _bind(rr, Sr, Qr) {
        let Zr = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        if (!this._geometry) return this;
        const Wr = this.eC().MU();
        let ar;
        if (this._unIndexed)
          if (this._getRenderingFillMode(Qr) === qr.d.WireFrameFillMode) ar = rr._getLinesIndexBuffer(this.yar(), Wr);
          else ar = null;
        else switch (this._getRenderingFillMode(Qr)) {
          case qr.d.PointFillMode:
            ar = null;
            break;
          case qr.d.WireFrameFillMode:
            ar = rr._getLinesIndexBuffer(this.yar(), Wr);
            break;
          default:
          case qr.d.TriangleFillMode:
            ar = this._geometry.getIndexBuffer()
        }
        return this._bindDirect(Sr, ar, Zr)
      }
      _bindDirect(rr, Sr) {
        let Qr = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (!this._geometry) return this;
        if (this.morphTargetManager && this.morphTargetManager.isUsingTextureForTargets && this.morphTargetManager._bind(rr), Qr && this._userInstancedBuffersStorage && !this.hasThinInstances) {
          if (!this._instanceDataStorage.useMonoDataStorageRenderPass && this._userInstancedBuffersStorage.renderPasses && this._userInstancedBuffersStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId]) {
            const rr = this._userInstancedBuffersStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId];
            for (const Sr in rr) this._userInstancedBuffersStorage.vertexBuffers[Sr] = rr[Sr]
          }
          this._geometry._bind(rr, Sr, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects)
        } else this._geometry._bind(rr, Sr);
        return this
      }
      _draw(rr, Sr, Qr) {
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        this._internalMeshDataInfo._onBeforeDrawObservable && this._internalMeshDataInfo._onBeforeDrawObservable.notifyObservers(this);
        const Zr = this.eC().MU(),
          Wr = Zr._currentMaterialContext,
          ar = Wr && Wr.useVertexPulling;
        return this._unIndexed && Sr !== qr.d.WireFrameFillMode || Sr == qr.d.PointFillMode ? Zr.drawArraysType(Sr, rr.verticesStart, rr.verticesCount, this.forcedInstanceCount || Qr) : Sr == qr.d.WireFrameFillMode ? Zr.drawElementsType(Sr, 0, rr._linesIndexCount, this.forcedInstanceCount || Qr) : ar ? Zr.drawArraysType(Sr, rr.indexStart, rr.indexCount, this.forcedInstanceCount || Qr) : Zr.drawElementsType(Sr, rr.indexStart, rr.indexCount, this.forcedInstanceCount || Qr), this
      }
      registerBeforeRender(rr) {
        return this.onBeforeRenderObservable.add(rr), this
      }
      unregisterBeforeRender(rr) {
        return this.onBeforeRenderObservable.removeCallback(rr), this
      }
      registerAfterRender(rr) {
        return this.onAfterRenderObservable.add(rr), this
      }
      unregisterAfterRender(rr) {
        return this.onAfterRenderObservable.removeCallback(rr), this
      }
      _getInstancesRenderList(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const Qr = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        if (this._instanceDataStorage.isFrozen) {
          if (Sr) return Qr.batchCacheReplacementModeInFrozenMode.hardwareInstancedRendering[rr] = !1, Qr.batchCacheReplacementModeInFrozenMode.renderSelf[rr] = !0, Qr.batchCacheReplacementModeInFrozenMode;
          if (Qr.previousBatch) return Qr.previousBatch
        }
        const Zr = this.eC(),
          Wr = Zr._isInIntermediateRendering(),
          ar = Wr ? this._internalAbstractMeshDataInfo._onlyForInstancesIntermediate : this._internalAbstractMeshDataInfo._onlyForInstances,
          jr = Qr.batchCache;
        if (jr.mustReturn = !1, jr.renderSelf[rr] = Sr || !ar && this.isEnabled() && this.isVisible, jr.visibleInstances[rr] = null, Qr.visibleInstances && !Sr) {
          const Sr = Qr.visibleInstances,
            ar = Zr.getRenderId(),
            Ir = Wr ? Sr.intermediateDefaultRenderId : Sr.defaultRenderId;
          jr.visibleInstances[rr] = Sr[ar], !jr.visibleInstances[rr] && Ir && (jr.visibleInstances[rr] = Sr[Ir])
        }
        return jr.hardwareInstancedRendering[rr] = !Sr && this._instanceDataStorage.hardwareInstancedRendering && null !== jr.visibleInstances[rr] && void 0 !== jr.visibleInstances[rr], Qr.previousBatch = jr, jr
      }
      _updateInstancedBuffers(rr, Sr, Qr, Zr, Wr, ar) {
        const jr = Sr.visibleInstances[rr._id],
          Ir = jr ? jr.length : 0,
          fr = Sr.parent,
          Er = this._instanceDataStorage;
        let pr = fr.instancesBuffer,
          xr = fr.instancesPreviousBuffer,
          mr = 0,
          Nr = 0;
        const Ur = Sr.renderSelf[rr._id],
          tr = this._scene.floatingOriginOffset,
          hr = !pr || Qr !== fr.instancesBufferSize || this._scene.needsPreviousWorldMatrices && !fr.instancesPreviousBuffer;
        if (this._instanceDataStorage.manualUpdate || Er.isFrozen && !hr) Nr = (Ur ? 1 : 0) + Ir;
        else {
          const Sr = this.getWorldMatrix();
          if (Ur) {
            this._scene.needsPreviousWorldMatrices && (Er.masterMeshPreviousWorldMatrix ? (Er.masterMeshPreviousWorldMatrix.copyToArray(fr.instancesPreviousData, mr), Er.masterMeshPreviousWorldMatrix.iH(Sr)) : (Er.masterMeshPreviousWorldMatrix = Sr.clone(), Er.masterMeshPreviousWorldMatrix.copyToArray(fr.instancesPreviousData, mr))), Sr.copyToArray(fr.instancesData, mr);
            const rr = Sr.OWr();
            fr.instancesData[mr + 12] = rr[12] - tr.x, fr.instancesData[mr + 13] = rr[13] - tr.y, fr.instancesData[mr + 14] = rr[14] - tr.z, mr += 16, Nr++
          }
          if (jr) {
            if (dr.INSTANCEDMESH_SORT_TRANSPARENT && this._scene.activeCamera && rr.iU()?.needAlphaBlendingForMesh(rr.getRenderingMesh())) {
              const rr = this._scene.activeCamera.globalPosition;
              for (let Sr = 0; Sr < jr.length; Sr++) {
                const Qr = jr[Sr];
                Qr._distanceToCamera = Tr.u.Distance(Qr.mG().oWr.centerWorld, rr)
              }
              jr.sort(((rr, Sr) => rr._distanceToCamera > Sr._distanceToCamera ? -1 : rr._distanceToCamera < Sr._distanceToCamera ? 1 : 0))
            }
            for (let rr = 0; rr < jr.length; rr++) {
              const Sr = jr[rr],
                Qr = Sr.getWorldMatrix();
              Qr.copyToArray(fr.instancesData, mr), this._scene.needsPreviousWorldMatrices && (Sr._previousWorldMatrix ? (Sr._previousWorldMatrix.copyToArray(fr.instancesPreviousData, mr), Sr._previousWorldMatrix.iH(Qr)) : (Sr._previousWorldMatrix = Qr.clone(), Sr._previousWorldMatrix.copyToArray(fr.instancesPreviousData, mr)));
              const Zr = Qr.OWr();
              fr.instancesData[mr + 12] = Zr[12] - tr.x, fr.instancesData[mr + 13] = Zr[13] - tr.y, fr.instancesData[mr + 14] = Zr[14] - tr.z, mr += 16, Nr++
            }
          }
        }
        if (hr) {
          let rr;
          if (pr && pr.dispose(), xr && xr.dispose(), pr = new Lr.c(Zr, fr.instancesData, !0, 16, !1, !0), fr.instancesBuffer = pr, this._userInstancedBuffersStorage || (this._userInstancedBuffersStorage = {
              data: {},
              vertexBuffers: {},
              strides: {},
              sizes: {},
              vertexArrayObjects: this.MU().getCaps().vertexArrayObject ? {} : void 0
            }), this._instanceDataStorage.useMonoDataStorageRenderPass) rr = this._userInstancedBuffersStorage.vertexBuffers;
          else {
            this._userInstancedBuffersStorage.renderPasses || (this._userInstancedBuffersStorage.renderPasses = {});
            const Sr = this._instanceDataStorage.engine.currentRenderPassId;
            rr = this._userInstancedBuffersStorage.renderPasses[Sr], rr || (this._userInstancedBuffersStorage.renderPasses[Sr] = rr = {})
          }
          rr.world0 = pr.createVertexBuffer("world0", 0, 4), rr.world1 = pr.createVertexBuffer("world1", 4, 4), rr.world2 = pr.createVertexBuffer("world2", 8, 4), rr.world3 = pr.createVertexBuffer("world3", 12, 4), this._scene.needsPreviousWorldMatrices && (xr = new Lr.c(Zr, fr.instancesPreviousData, !0, 16, !1, !0), fr.instancesPreviousBuffer = xr, rr.previousWorld0 = xr.createVertexBuffer("previousWorld0", 0, 4), rr.previousWorld1 = xr.createVertexBuffer("previousWorld1", 4, 4), rr.previousWorld2 = xr.createVertexBuffer("previousWorld2", 8, 4), rr.previousWorld3 = xr.createVertexBuffer("previousWorld3", 12, 4)), this._invalidateInstanceVertexArrayObject()
        } else this._instanceDataStorage.isFrozen && !this._instanceDataStorage.forceMatrixUpdates || (pr.updateDirectly(fr.instancesData, 0, Nr), !this._scene.needsPreviousWorldMatrices || this._instanceDataStorage.manualUpdate && !this._instanceDataStorage.previousManualUpdate || xr.updateDirectly(fr.instancesPreviousData, 0, Nr));
        this._processInstancedBuffers(jr, Ur), ar && void 0 !== Wr && (this.eC()._activeIndices.addCount(rr.indexCount * Nr, !1), Zr._currentDrawContext && (Zr._currentDrawContext.useInstancing = !0), this._bind(rr, ar, Wr), this._draw(rr, Wr, Nr)), !this._scene.needsPreviousWorldMatrices || hr || !this._instanceDataStorage.manualUpdate || this._instanceDataStorage.isFrozen && !this._instanceDataStorage.forceMatrixUpdates || this._instanceDataStorage.previousManualUpdate || xr.updateDirectly(fr.instancesData, 0, Nr)
      }
      _renderWithInstances(rr, Sr, Qr, Zr, Wr) {
        const ar = Qr.visibleInstances[rr._id],
          jr = ar ? ar.length : 0,
          Ir = Qr.parent,
          fr = Ir.instancesBufferSize,
          Er = 16 * (jr + 1) * 4;
        for (; Ir.instancesBufferSize < Er;) Ir.instancesBufferSize *= 2;
        return Ir.instancesData && fr == Ir.instancesBufferSize || (Ir.instancesData = new Float32Array(Ir.instancesBufferSize / 4)), (this._scene.needsPreviousWorldMatrices && !Ir.instancesPreviousData || fr != Ir.instancesBufferSize) && (Ir.instancesPreviousData = new Float32Array(Ir.instancesBufferSize / 4)), this._updateInstancedBuffers(rr, Qr, fr, Wr, Sr, Zr), Wr.unbindInstanceAttributes(), this
      }
      _renderWithThinInstances(rr, Sr, Qr, Zr) {
        const Wr = this._thinInstanceDataStorage?.instancesCount ?? 0;
        this.eC()._activeIndices.addCount(rr.indexCount * Wr, !1), Zr._currentDrawContext && (Zr._currentDrawContext.useInstancing = !0), this._bind(rr, Qr, Sr), this._draw(rr, Sr, Wr), this._scene.needsPreviousWorldMatrices && !this._thinInstanceDataStorage.previousMatrixData && this._thinInstanceDataStorage.matrixData && (this._thinInstanceDataStorage.previousMatrixBuffer ? this._thinInstanceDataStorage.previousMatrixBuffer.updateDirectly(this._thinInstanceDataStorage.matrixData, 0, Wr) : this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", this._thinInstanceDataStorage.matrixData, !1)), Zr.unbindInstanceAttributes()
      }
      _processInstancedBuffers(rr, Sr) {}
      _processRendering(rr, Sr, Qr, Zr, Wr, ar, jr, Ir) {
        const fr = this.eC(),
          Er = fr.MU();
        if (Zr = this._getRenderingFillMode(Zr), ar && Sr.getRenderingMesh().hasThinInstances) return this._renderWithThinInstances(Sr, Zr, Qr, Er), this;
        if (ar) this._renderWithInstances(Sr, Zr, Wr, Qr, Er);
        else {
          Er._currentDrawContext && (Er._currentDrawContext.useInstancing = !1);
          let Qr = 0;
          Wr.renderSelf[Sr._id] && (jr && jr(!1, rr.getWorldMatrix(), Ir), Qr++, this._draw(Sr, Zr, this._instanceDataStorage.overridenInstanceCount));
          const ar = Wr.visibleInstances[Sr._id];
          if (ar) {
            const rr = ar.length;
            Qr += rr;
            for (let Qr = 0; Qr < rr; Qr++) {
              const rr = ar[Qr].getWorldMatrix();
              jr && jr(!0, rr, Ir), this._draw(Sr, Zr)
            }
          }
          fr._activeIndices.addCount(Sr.indexCount * Qr, !1)
        }
        return this
      }
      _disposeInstanceDataStorageRenderPass(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        rr?.instancesBuffer && (Sr && rr.instancesBuffer.dispose(), rr.instancesBuffer = null), rr?.instancesPreviousBuffer && (Sr && rr.instancesPreviousBuffer.dispose(), rr.instancesPreviousBuffer = null)
      }
      _rebuild() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const Sr in this._instanceDataStorage.renderPasses) {
          const Qr = this._instanceDataStorage.renderPasses[Sr];
          this._disposeInstanceDataStorageRenderPass(Qr, rr)
        }
        if (this._disposeInstanceDataStorageRenderPass(this._instanceDataStorage.dataStorageRenderPass, rr), this._userInstancedBuffersStorage) {
          for (const Sr in this._userInstancedBuffersStorage.vertexBuffers) {
            const Qr = this._userInstancedBuffersStorage.vertexBuffers[Sr];
            Qr && (rr && Qr.dispose(), this._userInstancedBuffersStorage.vertexBuffers[Sr] = null)
          }
          this._userInstancedBuffersStorage.vertexArrayObjects && (this._userInstancedBuffersStorage.vertexArrayObjects = {})
        }
        this._internalMeshDataInfo._effectiveMaterial = null, super._rebuild(rr)
      }
      _releaseRenderPassId(rr) {
        const Sr = this._instanceDataStorage.renderPasses[rr];
        if (Sr && (this._disposeInstanceDataStorageRenderPass(Sr, !0), delete this._instanceDataStorage.renderPasses[rr]), this._userInstancedBuffersStorage?.renderPasses) {
          const Sr = this._userInstancedBuffersStorage.renderPasses[rr];
          if (Sr)
            for (const rr in Sr) Sr[rr]?.dispose();
          delete this._userInstancedBuffersStorage.renderPasses[rr]
        }
        const Qr = this._userInstancedBuffersStorage?.interleavedBuffers;
        Qr?.[rr] && (Qr[rr].buffer.dispose(), delete Qr[rr])
      }
      _freeze() {
        if (this.jT) {
          for (let rr = 0; rr < this.jT.length; rr++) this._getInstancesRenderList(rr);
          this._internalMeshDataInfo._effectiveMaterial = null, this._instanceDataStorage.isFrozen = !0
        }
      }
      _unFreeze() {
        this._instanceDataStorage.isFrozen = !1;
        for (const rr in this._instanceDataStorage.renderPasses) {
          this._instanceDataStorage.renderPasses[rr].previousBatch = null
        }
        this._instanceDataStorage.dataStorageRenderPass && (this._instanceDataStorage.dataStorageRenderPass.previousBatch = null)
      }
      renderWithRenderPassId(rr, Sr, Qr, Zr) {
        let Wr = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        const ar = this._scene.MU(),
          jr = ar.currentRenderPassId;
        if (void 0 !== rr && (ar.currentRenderPassId = rr), Zr)(!Wr || Wr && Zr.isInFrustum(this._scene._frustumPlanes)) && this.render(Zr, !!Sr, Qr);
        else
          for (let Ir = 0; Ir < this.jT.length; Ir++) {
            const rr = this.jT[Ir];
            (!Wr || Wr && rr.isInFrustum(this._scene._frustumPlanes)) && this.render(rr, !!Sr, Qr)
          }
        return void 0 !== rr && (ar.currentRenderPassId = jr), this
      }
      directRender() {
        if (!this.jT) return this;
        for (const rr of this.jT) this.render(rr, !1);
        return this
      }
      render(rr, Sr, Qr) {
        const Zr = this.eC(),
          Wr = Zr.MU();
        this._internalAbstractMeshDataInfo._isActiveIntermediate ? this._internalAbstractMeshDataInfo._isActiveIntermediate = !1 : this._internalAbstractMeshDataInfo._isActive = !1;
        const ar = Zr.activeCameras?.length ?? 0,
          jr = ar > 1 && Zr.activeCamera === Zr.activeCameras[0] || ar <= 1,
          Ir = this._occlusionDataStorage && -1 !== this._occlusionDataStorage.occlusionForRenderPassId && this._occlusionDataStorage.occlusionForRenderPassId !== Wr.currentRenderPassId;
        if (jr && this._checkOcclusionQuery(Ir) && !this._occlusionDataStorage.forceRenderingWhenOccluded) return this;
        const fr = this._getInstancesRenderList(rr._id, !!Qr);
        if (fr.mustReturn) return this;
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        let Er = 0,
          pr = null;
        this.ignoreCameraMaxZ && Zr.activeCamera && !Zr._isInIntermediateRendering() && (Er = Zr.activeCamera.maxZ, pr = Zr.activeCamera, Zr.activeCamera.maxZ = 0, Zr.updateTransformMatrix(!0)), this._internalMeshDataInfo._onBeforeRenderObservable && this._internalMeshDataInfo._onBeforeRenderObservable.notifyObservers(this);
        const xr = rr.getRenderingMesh(),
          mr = fr.hardwareInstancedRendering[rr._id] || xr.hasThinInstances || !!this._userInstancedBuffersStorage && !rr.getMesh()._internalAbstractMeshDataInfo._actAsRegularMesh,
          Nr = this._instanceDataStorage,
          Ur = rr.iU();
        if (!Ur) return pr && (pr.maxZ = Er, Zr.updateTransformMatrix(!0)), this;
        if (Nr.isFrozen && this._internalMeshDataInfo._effectiveMaterial && this._internalMeshDataInfo._effectiveMaterial === Ur) {
          if (Ur._storeEffectOnSubMeshes && !rr._drawWrapper?._wasPreviouslyReady || !Ur._storeEffectOnSubMeshes && !Ur._getDrawWrapper()._wasPreviouslyReady) return pr && (pr.maxZ = Er, Zr.updateTransformMatrix(!0)), this
        } else {
          if (Ur._storeEffectOnSubMeshes) {
            if (!Ur.isReadyForSubMesh(this, rr, mr)) return pr && (pr.maxZ = Er, Zr.updateTransformMatrix(!0)), this
          } else if (!Ur.isReady(this, mr)) return pr && (pr.maxZ = Er, Zr.updateTransformMatrix(!0)), this;
          this._internalMeshDataInfo._effectiveMaterial = Ur
        }
        if (Sr) {
          const rr = this._internalMeshDataInfo._effectiveMaterial;
          if (1 === rr.alphaModes.length) Wr.setAlphaMode(rr.alphaMode);
          else
            for (let Sr = 0; Sr < rr.alphaModes.length; Sr++) {
              const Qr = rr.alphaModes[Sr];
              Wr.setAlphaMode(void 0 !== Qr ? Qr : 2, !1, Sr)
            }
        }
        let tr;
        tr = this._internalMeshDataInfo._effectiveMaterial._storeEffectOnSubMeshes ? rr._drawWrapper : this._internalMeshDataInfo._effectiveMaterial._getDrawWrapper();
        const hr = tr?.effect ?? null;
        for (let Br = 0, Tr = Zr._beforeRenderingMeshStage; Br < Tr.length; Br++) {
          Tr[Br].action(this, rr, fr, hr)
        }
        if (!tr || !hr) return pr && (pr.maxZ = Er, Zr.updateTransformMatrix(!0)), this;
        const zr = Qr || this;
        let Yr;
        if (!Nr.isFrozen && (this._internalMeshDataInfo._effectiveMaterial.backFaceCulling || null !== this._internalMeshDataInfo._effectiveMaterial.sideOrientation || this._internalMeshDataInfo._effectiveMaterial._twoSidedLighting)) {
          const rr = zr._getWorldMatrixDeterminant();
          Yr = this._internalMeshDataInfo._effectiveMaterial._getEffectiveOrientation(this), rr < 0 && (Yr = Yr === qr.d.ClockWiseSideOrientation ? qr.d.CounterClockWiseSideOrientation : qr.d.ClockWiseSideOrientation), this._internalMeshDataInfo._effectiveSideOrientation = Yr
        }
        const nr = this._internalMeshDataInfo._effectiveMaterial._preBind(tr, this._internalMeshDataInfo._effectiveSideOrientation);
        this._internalMeshDataInfo._effectiveMaterial.forceDepthWrite && Wr.setDepthWrite(!0);
        const er = this._internalMeshDataInfo._effectiveMaterial,
          Kr = er.fillMode;
        this._internalMeshDataInfo._onBeforeBindObservable && this._internalMeshDataInfo._onBeforeBindObservable.notifyObservers(this), mr || this._bind(rr, hr, Kr, !1);
        const yr = zr.getWorldMatrix();
        er._storeEffectOnSubMeshes ? er.bindForSubMesh(yr, this, rr) : er.bind(yr, this);
        try {
          Rr.b._BindAttachmentsForEffect(Wr, hr) && (!er.backFaceCulling && er.separateCullingPass && (Wr.setState(!0, er.zOffset, !1, !nr, er.cullBackFaces, er.stencil, er.zOffsetUnits), this._processRendering(this, rr, hr, Kr, fr, mr, this._onBeforeDraw, this._internalMeshDataInfo._effectiveMaterial), Wr.setState(!0, er.zOffset, !1, nr, er.cullBackFaces, er.stencil, er.zOffsetUnits), this._internalMeshDataInfo._onBetweenPassObservable && this._internalMeshDataInfo._onBetweenPassObservable.notifyObservers(rr)), this._processRendering(this, rr, hr, Kr, fr, mr, this._onBeforeDraw, this._internalMeshDataInfo._effectiveMaterial))
        } finally {
          Rr.b._RestoreAttachments(Wr)
        }
        this._internalMeshDataInfo._effectiveMaterial.unbind();
        for (let Br = 0, Tr = Zr._afterRenderingMeshStage; Br < Tr.length; Br++) {
          Tr[Br].action(this, rr, fr, hr)
        }
        return this._internalMeshDataInfo._onAfterRenderObservable && this._internalMeshDataInfo._onAfterRenderObservable.notifyObservers(this), pr && (pr.maxZ = Er, Zr.updateTransformMatrix(!0)), 2 !== Zr.performancePriority || Nr.isFrozen || this._freeze(), this
      }
      _renderRunFollower(rr, Sr) {
        const Qr = this._scene,
          Zr = Qr._engine;
        if (Zr.isWebGPU || rr._mesh !== this || 0 !== this.instances.length || this.render !== dr.prototype.render) return !1;
        const Wr = rr.iU();
        if (!Wr || Wr !== Qr._cachedMaterial || void 0 === Wr._canBindRunFollower) return !1;
        const ar = rr._drawWrapper,
          jr = ar?.effect;
        if (!jr || jr !== Qr._cachedEffect || this.visibility !== Qr._cachedVisibility || ar._forceRebindOnNextCall) return !1;
        const Ir = this.hasThinInstances;
        if (!Ir && this._userInstancedBuffersStorage) return !1;
        if (!ar._wasPreviouslyReady || ar._wasPreviouslyUsingInstances !== Ir) return !1;
        const fr = this._internalMeshDataInfo;
        if (this.ignoreCameraMaxZ || this.morphTargetManager || this._instanceDataStorage.isFrozen || Qr._isInIntermediateRendering() || 0 !== Qr._beforeRenderingMeshStage.length || 0 !== Qr._afterRenderingMeshStage.length || fr._onBeforeRenderObservable?.hasObservers() || fr._onBeforeBindObservable?.hasObservers() || fr._onAfterRenderObservable?.hasObservers()) return !1;
        const Er = this.occlusionType;
        if (void 0 !== Er && Er !== Pr.c.OCCLUSION_TYPE_NONE || !Wr._canBindRunFollower(Qr, Zr, this, rr, jr)) return !1;
        const pr = this._internalAbstractMeshDataInfo,
          xr = pr._isActiveIntermediate;
        xr ? pr._isActiveIntermediate = !1 : pr._isActive = !1;
        const mr = Qr.activeCameras?.length ?? 0;
        (mr > 1 && Qr.activeCamera === Qr.activeCameras[0] || mr <= 1) && this._checkOcclusionQuery(!1);
        const Nr = this._getInstancesRenderList(rr._id);
        if (Nr.mustReturn) return !0;
        if (!Ir && !Nr.renderSelf[rr._id]) return xr ? pr._isActiveIntermediate = !0 : pr._isActive = !0, !1;
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return !0;
        if (fr._effectiveMaterial = Wr, Sr)
          if (1 === Wr.alphaModes.length) Zr.setAlphaMode(Wr.alphaMode);
          else
            for (let tr = 0; tr < Wr.alphaModes.length; tr++) {
              const rr = Wr.alphaModes[tr];
              Zr.setAlphaMode(void 0 !== rr ? rr : 2, !1, tr)
            }
        if (Wr.backFaceCulling || null !== Wr.sideOrientation || Wr._twoSidedLighting) {
          const rr = this._getWorldMatrixDeterminant();
          let Sr = Wr._getEffectiveOrientation(this);
          rr < 0 && (Sr = Sr === qr.d.ClockWiseSideOrientation ? qr.d.CounterClockWiseSideOrientation : qr.d.ClockWiseSideOrientation), fr._effectiveSideOrientation = Sr
        }
        Wr._preBind(ar, fr._effectiveSideOrientation), Wr.forceDepthWrite && Zr.setDepthWrite(!0);
        const Ur = Wr.fillMode;
        return Ir || this._bind(rr, jr, Ur, !1), Wr._bindRunFollower(this.getWorldMatrix(), this, rr, jr), this._processRendering(this, rr, jr, Ur, Nr, Ir, this._onBeforeDraw, Wr), Wr.unbind(), 2 === Qr.performancePriority && this._freeze(), !0
      }
      cleanMatrixWeights() {
        this.isVerticesDataPresent(Lr.j.MatricesWeightsKind) && (this.isVerticesDataPresent(Lr.j.MatricesWeightsExtraKind) ? this._normalizeSkinWeightsAndExtra() : this._normalizeSkinFourWeights())
      }
      _normalizeSkinFourWeights() {
        const rr = this.getVerticesData(Lr.j.MatricesWeightsKind),
          Sr = rr.length;
        for (let Qr = 0; Qr < Sr; Qr += 4) {
          const Sr = rr[Qr] + rr[Qr + 1] + rr[Qr + 2] + rr[Qr + 3];
          if (0 === Sr) rr[Qr] = 1;
          else {
            const Zr = 1 / Sr;
            rr[Qr] *= Zr, rr[Qr + 1] *= Zr, rr[Qr + 2] *= Zr, rr[Qr + 3] *= Zr
          }
        }
        this.setVerticesData(Lr.j.MatricesWeightsKind, rr)
      }
      _normalizeSkinWeightsAndExtra() {
        const rr = this.getVerticesData(Lr.j.MatricesWeightsExtraKind),
          Sr = this.getVerticesData(Lr.j.MatricesWeightsKind),
          Qr = Sr.length;
        for (let Zr = 0; Zr < Qr; Zr += 4) {
          let Qr = Sr[Zr] + Sr[Zr + 1] + Sr[Zr + 2] + Sr[Zr + 3];
          if (Qr += rr[Zr] + rr[Zr + 1] + rr[Zr + 2] + rr[Zr + 3], 0 === Qr) Sr[Zr] = 1;
          else {
            const Wr = 1 / Qr;
            Sr[Zr] *= Wr, Sr[Zr + 1] *= Wr, Sr[Zr + 2] *= Wr, Sr[Zr + 3] *= Wr, rr[Zr] *= Wr, rr[Zr + 1] *= Wr, rr[Zr + 2] *= Wr, rr[Zr + 3] *= Wr
          }
        }
        this.setVerticesData(Lr.j.MatricesWeightsKind, Sr), this.setVerticesData(Lr.j.MatricesWeightsKind, rr)
      }
      validateSkinning() {
        const rr = this.getVerticesData(Lr.j.MatricesWeightsExtraKind),
          Sr = this.getVerticesData(Lr.j.MatricesWeightsKind);
        if (null === Sr || null == this.skeleton) return {
          skinned: !1,
          valid: !0,
          jx: "not skinned"
        };
        const Qr = Sr.length;
        let Zr = 0,
          Wr = 0,
          ar = 0,
          jr = 0;
        const Ir = null === rr ? 4 : 8,
          fr = [];
        for (let Nr = 0; Nr <= Ir; Nr++) fr[Nr] = 0;
        for (let Nr = 0; Nr < Qr; Nr += 4) {
          let Qr = Sr[Nr],
            Er = Qr,
            pr = 0 === Er ? 0 : 1;
          for (let Wr = 1; Wr < Ir; Wr++) {
            const ar = Wr < 4 ? Sr[Nr + Wr] : rr[Nr + Wr - 4];
            ar > Qr && Zr++, 0 !== ar && pr++, Er += ar, Qr = ar
          }
          if (fr[pr]++, pr > ar && (ar = pr), 0 === Er) Wr++;
          else {
            const Qr = 1 / Er;
            let Zr = 0;
            for (let Wr = 0; Wr < Ir; Wr++) Zr += Wr < 4 ? Math.abs(Sr[Nr + Wr] - Sr[Nr + Wr] * Qr) : Math.abs(rr[Nr + Wr - 4] - rr[Nr + Wr - 4] * Qr);
            Zr > .001 && jr++
          }
        }
        const Er = this.skeleton.bones.length,
          pr = this.getVerticesData(Lr.j.MatricesIndicesKind),
          xr = this.getVerticesData(Lr.j.MatricesIndicesExtraKind);
        let mr = 0;
        for (let Nr = 0; Nr < Qr; Nr += 4)
          for (let rr = 0; rr < Ir; rr++) {
            const Sr = rr < 4 ? pr[Nr + rr] : xr[Nr + rr - 4];
            (Sr >= Er || Sr < 0) && mr++
          }
        return {
          skinned: !0,
          valid: 0 === Wr && 0 === jr && 0 === mr,
          jx: "Number of Weights = " + Qr / 4 + "\nMaximum influences = " + ar + "\nMissing Weights = " + Wr + "\nNot Sorted = " + Zr + "\nNot Normalized = " + jr + "\nWeightCounts = [" + fr + "]\nNumber of bones = " + Er + "\nBad Bone Indices = " + mr
        }
      }
      _checkDelayState() {
        const rr = this.eC();
        return this._geometry ? this._geometry.load(rr) : 4 === this.delayLoadState && (this.delayLoadState = 2, this._queueLoad(rr)), this
      }
      _queueLoad(rr) {
        rr.addPendingData(this);
        const Sr = -1 !== this.delayLoadingFile.indexOf(".babylonbinarymeshdata");
        return (async () => {
          try {
            const Qr = await rr._loadDelayedFileAsync(this.delayLoadingFile, Sr, !0);
            Qr instanceof ArrayBuffer ? this._delayLoadingFunction(Qr, this) : this._delayLoadingFunction(JSON.parse(Qr), this);
            for (const rr of this.instances) rr.refreshBoundingInfo(), rr._syncSubMeshes();
            this.delayLoadState = 1, rr.removePendingData(this)
          } catch (Qr) {
            rr.removePendingData(this), rr.Dv || Gr.c.Error(`Unable to delay load geometry data for mesh "${this.name}" from "${this.delayLoadingFile}": ${Qr}`)
          }
        })(), this
      }
      isInFrustum(rr) {
        return 2 !== this.delayLoadState && (!!super.isInFrustum(rr) && (this._checkDelayState(), !0))
      }
      setMaterialById(rr) {
        const Sr = this.eC().materials;
        let Qr;
        for (Qr = Sr.length - 1; Qr > -1; Qr--)
          if (Sr[Qr].id === rr) return this.material = Sr[Qr], this;
        const Zr = this.eC().multiMaterials;
        for (Qr = Zr.length - 1; Qr > -1; Qr--)
          if (Zr[Qr].id === rr) return this.material = Zr[Qr], this;
        return this
      }
      getAnimatables() {
        const rr = [];
        return this.material && rr.push(this.material), this.skeleton && rr.push(this.skeleton), rr
      }
      bakeTransformIntoVertices(rr) {
        if (!this.isVerticesDataPresent(Lr.j.PositionKind)) return this;
        const Sr = this.jT.splice(0);
        this._resetPointsArrayCache();
        let Qr = this.getVerticesData(Lr.j.PositionKind);
        const Zr = Tr.u.Zero();
        let Wr;
        for (Wr = 0; Wr < Qr.length; Wr += 3) Tr.u.TransformCoordinatesFromFloatsToRef(Qr[Wr], Qr[Wr + 1], Qr[Wr + 2], rr, Zr).toArray(Qr, Wr);
        if (this.setVerticesData(Lr.j.PositionKind, Qr, this.getVertexBuffer(Lr.j.PositionKind).isUpdatable()), this.isVerticesDataPresent(Lr.j.NormalKind)) {
          for (Qr = this.getVerticesData(Lr.j.NormalKind), Wr = 0; Wr < Qr.length; Wr += 3) Tr.u.TransformNormalFromFloatsToRef(Qr[Wr], Qr[Wr + 1], Qr[Wr + 2], rr, Zr).normalize().toArray(Qr, Wr);
          this.setVerticesData(Lr.j.NormalKind, Qr, this.getVertexBuffer(Lr.j.NormalKind).isUpdatable())
        }
        if (this.isVerticesDataPresent(Lr.j.TangentKind)) {
          for (Qr = this.getVerticesData(Lr.j.TangentKind), Wr = 0; Wr < Qr.length; Wr += 4) Tr.u.TransformNormalFromFloatsToRef(Qr[Wr], Qr[Wr + 1], Qr[Wr + 2], rr, Zr).normalize().toArray(Qr, Wr);
          this.setVerticesData(Lr.j.TangentKind, Qr, this.getVertexBuffer(Lr.j.TangentKind).isUpdatable())
        }
        return rr.determinant() < 0 && this.flipFaces(), this.releaseSubMeshes(), this.jT = Sr, this
      }
      bakeCurrentTransformIntoVertices() {
        let rr = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] && this.makeGeometryUnique(), this.bakeTransformIntoVertices(this.computeWorldMatrix(!0)), this.resetLocalMatrix(rr), this
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
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Qr = arguments.length > 2 ? arguments[2] : void 0,
          Zr = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        if (Sr && void 0 === Sr._addToSceneRootNodes) {
          const Qr = Sr;
          return Dr.source = this, Dr.doNotCloneChildren = Qr.doNotCloneChildren, Dr.clonePhysicsImpostor = Qr.clonePhysicsImpostor, Dr.cloneThinInstances = Qr.cloneThinInstances, new dr(rr, this.eC(), Dr)
        }
        return new dr(rr, this.eC(), Sr, this, Qr, Zr)
      }
      dispose(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.morphTargetManager = null, this._geometry && this._geometry.releaseForMesh(this, !0);
        const Qr = this._internalMeshDataInfo;
        if (Qr._onBeforeDrawObservable && Qr._onBeforeDrawObservable.clear(), Qr._onBeforeBindObservable && Qr._onBeforeBindObservable.clear(), Qr._onBeforeRenderObservable && Qr._onBeforeRenderObservable.clear(), Qr._onAfterRenderObservable && Qr._onAfterRenderObservable.clear(), Qr._onBetweenPassObservable && Qr._onBetweenPassObservable.clear(), this._scene.useClonedMeshMap) {
          if (Qr.meshMap)
            for (const rr in Qr.meshMap) {
              const Sr = Qr.meshMap[rr];
              Sr && (Sr._internalMeshDataInfo._source = null, Qr.meshMap[rr] = void 0)
            }
          Qr._source && Qr._source._internalMeshDataInfo.meshMap && (Qr._source._internalMeshDataInfo.meshMap[this.uniqueId] = void 0)
        } else {
          const rr = this.eC().meshes;
          for (const Sr of rr) {
            const rr = Sr;
            rr._internalMeshDataInfo && rr._internalMeshDataInfo._source && rr._internalMeshDataInfo._source === this && (rr._internalMeshDataInfo._source = null)
          }
        }
        Qr._source = null, this._disposeInstanceSpecificData(), this._disposeThinInstanceSpecificData(), this._internalMeshDataInfo._checkReadinessObserver && this._scene.onBeforeRenderObservable.remove(this._internalMeshDataInfo._checkReadinessObserver), super.dispose(rr, Sr)
      }
      _disposeInstanceSpecificData() {}
      _disposeThinInstanceSpecificData() {}
      _invalidateInstanceVertexArrayObject() {}
      applyDisplacementMap(rr, Sr, Qr, Zr, Wr, ar) {
        let jr = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          Ir = arguments.length > 7 ? arguments[7] : void 0;
        const fr = this.eC();
        return (0, nr.q)(rr, (rr => {
          const Ir = rr.width,
            fr = rr.height,
            Er = this.MU().createCanvas(Ir, fr).getContext("2d");
          Er.drawImage(rr, 0, 0);
          const pr = Er.getImageData(0, 0, Ir, fr).data;
          this.applyDisplacementMapFromBuffer(pr, Ir, fr, Sr, Qr, Wr, ar, jr), Zr && Zr(this)
        }), Ir || (() => {}), fr.offlineProvider), this
      }
      applyDisplacementMapFromBuffer(rr, Sr, Qr, Zr, Wr, ar, jr) {
        let Ir = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
        if (!this.isVerticesDataPresent(Lr.j.PositionKind) || !this.isVerticesDataPresent(Lr.j.NormalKind) || !this.isVerticesDataPresent(Lr.j.UVKind)) return Gr.c.Warn("Cannot call applyDisplacementMap: Given mesh is not complete. Position, Normal or UV are missing"), this;
        const fr = this.getVerticesData(Lr.j.PositionKind, !0, !0),
          Er = this.getVerticesData(Lr.j.NormalKind),
          pr = this.getVerticesData(Lr.j.UVKind);
        let xr = Tr.u.Zero();
        const mr = Tr.u.Zero(),
          Nr = Tr.q.Zero();
        ar = ar || Tr.q.Zero(), jr = jr || new Tr.q(1, 1);
        for (let Ur = 0; Ur < fr.length; Ur += 3) {
          Tr.u.FromArrayToRef(fr, Ur, xr), Tr.u.FromArrayToRef(Er, Ur, mr), Tr.q.FromArrayToRef(pr, Ur / 3 * 2, Nr);
          const Ir = 4 * ((Math.abs(Nr.x * jr.x + ar.x % 1) * (Sr - 1) % Sr | 0) + (Math.abs(Nr.y * jr.y + ar.y % 1) * (Qr - 1) % Qr | 0) * Sr),
            tr = .3 * (rr[Ir] / 255) + .59 * (rr[Ir + 1] / 255) + .11 * (rr[Ir + 2] / 255);
          mr.normalize(), mr.scaleInPlace(Zr + (Wr - Zr) * tr), xr = xr.add(mr), xr.toArray(fr, Ur)
        }
        return lr.b.ComputeNormals(fr, this.yar(), Er), Ir ? (this.setVerticesData(Lr.j.PositionKind, fr), this.setVerticesData(Lr.j.NormalKind, Er), this.setVerticesData(Lr.j.UVKind, pr)) : (this.updateVerticesData(Lr.j.PositionKind, fr), this.updateVerticesData(Lr.j.NormalKind, Er)), this
      }
      _getFlattenedNormals(rr, Sr) {
        const Qr = new Float32Array(3 * rr.length);
        let Zr = 0;
        const Wr = this.sideOrientation === (this._scene.useRightHandedSystem ? 1 : 0);
        for (let ar = 0; ar < rr.length; ar += 3) {
          const jr = Tr.u.FromArray(Sr, 3 * rr[ar]),
            Ir = Tr.u.FromArray(Sr, 3 * rr[ar + 1]),
            fr = Tr.u.FromArray(Sr, 3 * rr[ar + 2]),
            Er = jr.subtract(Ir),
            pr = fr.subtract(Ir),
            xr = Tr.u.Normalize(Tr.u.Cross(Er, pr));
          Wr && xr.scaleInPlace(-1);
          for (let rr = 0; rr < 3; rr++) Qr[Zr++] = xr.x, Qr[Zr++] = xr.y, Qr[Zr++] = xr.z
        }
        return Qr
      }
      _convertToUnIndexedMesh() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const Sr = this.getVerticesDataKinds().filter((rr => !this.getVertexBuffer(rr)?.getIsInstanced())),
          Qr = this.yar(!1, !0),
          Zr = {},
          Wr = (rr, Sr) => {
            const Zr = new Float32Array(Qr.length * Sr);
            let Wr = 0;
            for (let ar = 0; ar < Qr.length; ar++)
              for (let jr = 0; jr < Sr; jr++) Zr[Wr++] = rr[Qr[ar] * Sr + jr];
            return Zr
          },
          ar = this.mG(),
          jr = this.geometry ? this.jT.slice(0) : [];
        for (const Ir of Sr) Zr[Ir] = this.getVerticesData(Ir);
        for (const Ir of Sr) {
          const Sr = this.getVertexBuffer(Ir),
            ar = Sr.getSize();
          if (rr && Ir === Lr.j.NormalKind) {
            const rr = this._getFlattenedNormals(Qr, Zr[Lr.j.PositionKind]);
            this.setVerticesData(Lr.j.NormalKind, rr, Sr.isUpdatable(), ar)
          } else this.setVerticesData(Ir, Wr(Zr[Ir], ar), Sr.isUpdatable(), ar)
        }
        if (this.morphTargetManager) {
          for (let Sr = 0; Sr < this.morphTargetManager.numTargets; Sr++) {
            const Zr = this.morphTargetManager.getTarget(Sr),
              ar = Zr.getPositions();
            Zr.Ifr(Wr(ar, 3));
            const jr = Zr.getNormals();
            jr && Zr.setNormals(rr ? this._getFlattenedNormals(Qr, ar) : Wr(jr, 3));
            const Ir = Zr.getTangents();
            Ir && Zr.setTangents(Wr(Ir, 3));
            const fr = Zr.getUVs();
            fr && Zr.setUVs(Wr(fr, 2));
            const Er = Zr.getColors();
            Er && Zr.setColors(Wr(Er, 4))
          }
          this.morphTargetManager.synchronize()
        }
        for (let Ir = 0; Ir < Qr.length; Ir++) Qr[Ir] = Ir;
        this.setIndices(Qr), this._unIndexed = !0, this.releaseSubMeshes();
        for (const Ir of jr) {
          const rr = Ir.mG();
          Hr.b.AddToMesh(Ir.materialIndex, Ir.indexStart, Ir.indexCount, Ir.indexStart, Ir.indexCount, this).setBoundingInfo(rr)
        }
        return this.setBoundingInfo(ar), this.synchronizeInstances(), this
      }
      convertToFlatShadedMesh() {
        return this._convertToUnIndexedMesh(!0)
      }
      convertToUnIndexedMesh() {
        return this._convertToUnIndexedMesh()
      }
      flipFaces() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const Sr = lr.b.ExtractFromMesh(this);
        let Qr;
        if (rr && this.isVerticesDataPresent(Lr.j.NormalKind) && Sr.normals) {
          for (Qr = 0; Qr < Sr.normals.length; Qr++) Sr.normals[Qr] *= -1;
          this.setVerticesData(Lr.j.NormalKind, Sr.normals, this.isVertexBufferUpdatable(Lr.j.NormalKind))
        }
        if (Sr.indices) {
          let rr;
          for (Qr = 0; Qr < Sr.indices.length; Qr += 3) rr = Sr.indices[Qr + 1], Sr.indices[Qr + 1] = Sr.indices[Qr + 2], Sr.indices[Qr + 2] = rr;
          this.setIndices(Sr.indices, null, this.isVertexBufferUpdatable(Lr.j.PositionKind), !0)
        }
        return this
      }
      increaseVertices() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        const Sr = lr.b.ExtractFromMesh(this),
          Qr = Sr.indices && !Array.isArray(Sr.indices) && Array.from ? Array.from(Sr.indices) : Sr.indices,
          Zr = Sr.positions && !Array.isArray(Sr.positions) && Array.from ? Array.from(Sr.positions) : Sr.positions,
          Wr = Sr.uvs && !Array.isArray(Sr.uvs) && Array.from ? Array.from(Sr.uvs) : Sr.uvs,
          ar = Sr.normals && !Array.isArray(Sr.normals) && Array.from ? Array.from(Sr.normals) : Sr.normals;
        if (Qr && Zr) {
          Sr.indices = Qr, Sr.positions = Zr, Wr && (Sr.uvs = Wr), ar && (Sr.normals = ar);
          const jr = rr + 1,
            Ir = [];
          for (let rr = 0; rr < jr + 1; rr++) Ir[rr] = [];
          let fr, Er;
          const pr = new Tr.u(0, 0, 0),
            xr = new Tr.u(0, 0, 0),
            mr = new Tr.q(0, 0),
            Nr = [],
            Ur = [],
            tr = [];
          let hr, zr, Yr, nr = Zr.length;
          Wr && (zr = Wr.length), ar && (Yr = ar.length);
          for (let rr = 0; rr < Qr.length; rr += 3) {
            Ur[0] = Qr[rr], Ur[1] = Qr[rr + 1], Ur[2] = Qr[rr + 2];
            for (let rr = 0; rr < 3; rr++)
              if (fr = Ur[rr], Er = Ur[(rr + 1) % 3], void 0 === tr[fr] && void 0 === tr[Er] ? (tr[fr] = [], tr[Er] = []) : (void 0 === tr[fr] && (tr[fr] = []), void 0 === tr[Er] && (tr[Er] = [])), void 0 === tr[fr][Er] && void 0 === tr[Er][fr]) {
                tr[fr][Er] = [], pr.x = (Zr[3 * Er] - Zr[3 * fr]) / jr, pr.y = (Zr[3 * Er + 1] - Zr[3 * fr + 1]) / jr, pr.z = (Zr[3 * Er + 2] - Zr[3 * fr + 2]) / jr, ar && (xr.x = (ar[3 * Er] - ar[3 * fr]) / jr, xr.y = (ar[3 * Er + 1] - ar[3 * fr + 1]) / jr, xr.z = (ar[3 * Er + 2] - ar[3 * fr + 2]) / jr), Wr && (mr.x = (Wr[2 * Er] - Wr[2 * fr]) / jr, mr.y = (Wr[2 * Er + 1] - Wr[2 * fr + 1]) / jr), tr[fr][Er].push(fr);
                for (let rr = 1; rr < jr; rr++) tr[fr][Er].push(Zr.length / 3), Zr[nr++] = Zr[3 * fr] + rr * pr.x, Zr[nr++] = Zr[3 * fr + 1] + rr * pr.y, Zr[nr++] = Zr[3 * fr + 2] + rr * pr.z, ar && (ar[Yr++] = ar[3 * fr] + rr * xr.x, ar[Yr++] = ar[3 * fr + 1] + rr * xr.y, ar[Yr++] = ar[3 * fr + 2] + rr * xr.z), Wr && (Wr[zr++] = Wr[2 * fr] + rr * mr.x, Wr[zr++] = Wr[2 * fr + 1] + rr * mr.y);
                tr[fr][Er].push(Er), tr[Er][fr] = [], hr = tr[fr][Er].length;
                for (let rr = 0; rr < hr; rr++) tr[Er][fr][rr] = tr[fr][Er][hr - 1 - rr]
              } Ir[0][0] = Qr[rr], Ir[1][0] = tr[Qr[rr]][Qr[rr + 1]][1], Ir[1][1] = tr[Qr[rr]][Qr[rr + 2]][1];
            for (let Sr = 2; Sr < jr; Sr++) {
              Ir[Sr][0] = tr[Qr[rr]][Qr[rr + 1]][Sr], Ir[Sr][Sr] = tr[Qr[rr]][Qr[rr + 2]][Sr], pr.x = (Zr[3 * Ir[Sr][Sr]] - Zr[3 * Ir[Sr][0]]) / Sr, pr.y = (Zr[3 * Ir[Sr][Sr] + 1] - Zr[3 * Ir[Sr][0] + 1]) / Sr, pr.z = (Zr[3 * Ir[Sr][Sr] + 2] - Zr[3 * Ir[Sr][0] + 2]) / Sr, ar && (xr.x = (ar[3 * Ir[Sr][Sr]] - ar[3 * Ir[Sr][0]]) / Sr, xr.y = (ar[3 * Ir[Sr][Sr] + 1] - ar[3 * Ir[Sr][0] + 1]) / Sr, xr.z = (ar[3 * Ir[Sr][Sr] + 2] - ar[3 * Ir[Sr][0] + 2]) / Sr), Wr && (mr.x = (Wr[2 * Ir[Sr][Sr]] - Wr[2 * Ir[Sr][0]]) / Sr, mr.y = (Wr[2 * Ir[Sr][Sr] + 1] - Wr[2 * Ir[Sr][0] + 1]) / Sr);
              for (let rr = 1; rr < Sr; rr++) Ir[Sr][rr] = Zr.length / 3, Zr[nr++] = Zr[3 * Ir[Sr][0]] + rr * pr.x, Zr[nr++] = Zr[3 * Ir[Sr][0] + 1] + rr * pr.y, Zr[nr++] = Zr[3 * Ir[Sr][0] + 2] + rr * pr.z, ar && (ar[Yr++] = ar[3 * Ir[Sr][0]] + rr * xr.x, ar[Yr++] = ar[3 * Ir[Sr][0] + 1] + rr * xr.y, ar[Yr++] = ar[3 * Ir[Sr][0] + 2] + rr * xr.z), Wr && (Wr[zr++] = Wr[2 * Ir[Sr][0]] + rr * mr.x, Wr[zr++] = Wr[2 * Ir[Sr][0] + 1] + rr * mr.y)
            }
            Ir[jr] = tr[Qr[rr + 1]][Qr[rr + 2]], Nr.push(Ir[0][0], Ir[1][0], Ir[1][1]);
            for (let rr = 1; rr < jr; rr++) {
              let Sr;
              for (Sr = 0; Sr < rr; Sr++) Nr.push(Ir[rr][Sr], Ir[rr + 1][Sr], Ir[rr + 1][Sr + 1]), Nr.push(Ir[rr][Sr], Ir[rr + 1][Sr + 1], Ir[rr][Sr + 1]);
              Nr.push(Ir[rr][Sr], Ir[rr + 1][Sr], Ir[rr + 1][Sr + 1])
            }
          }
          Sr.indices = Nr, Sr.applyToMesh(this, this.isVertexBufferUpdatable(Lr.j.PositionKind))
        } else Gr.c.Warn("Couldn't increase number of vertices : VertexData must contain at least indices and positions")
      }
      forceSharedVertices() {
        const rr = lr.b.ExtractFromMesh(this),
          Sr = rr.uvs,
          Qr = rr.indices,
          Zr = rr.positions,
          Wr = rr.colors,
          ar = rr.matricesIndices,
          jr = rr.matricesWeights,
          Ir = rr.matricesIndicesExtra,
          fr = rr.matricesWeightsExtra;
        if (void 0 === Qr || void 0 === Zr || null === Qr || null === Zr) Gr.c.Warn("VertexData contains empty entries");
        else {
          const Er = [],
            pr = [],
            xr = [],
            mr = [],
            Nr = [],
            Ur = [],
            tr = [],
            hr = [];
          let zr, Yr = 0;
          const nr = {};
          let er, Kr;
          for (let rr = 0; rr < Qr.length; rr += 3) {
            Kr = [Qr[rr], Qr[rr + 1], Qr[rr + 2]], zr = [];
            for (let rr = 0; rr < 3; rr++) {
              zr[rr] = "";
              for (let Sr = 0; Sr < 3; Sr++) Math.abs(Zr[3 * Kr[rr] + Sr]) < 1e-8 && (Zr[3 * Kr[rr] + Sr] = 0), zr[rr] += Zr[3 * Kr[rr] + Sr] + "|"
            }
            if (zr[0] != zr[1] && zr[0] != zr[2] && zr[1] != zr[2])
              for (let rr = 0; rr < 3; rr++) {
                if (er = nr[zr[rr]], void 0 === er) {
                  nr[zr[rr]] = Yr, er = Yr++;
                  for (let Sr = 0; Sr < 3; Sr++) Er.push(Zr[3 * Kr[rr] + Sr]);
                  if (null !== Wr && void 0 !== Wr)
                    for (let Sr = 0; Sr < 4; Sr++) mr.push(Wr[4 * Kr[rr] + Sr]);
                  if (null !== Sr && void 0 !== Sr)
                    for (let Qr = 0; Qr < 2; Qr++) xr.push(Sr[2 * Kr[rr] + Qr]);
                  if (null !== ar && void 0 !== ar)
                    for (let Sr = 0; Sr < 4; Sr++) Nr.push(ar[4 * Kr[rr] + Sr]);
                  if (null !== jr && void 0 !== jr)
                    for (let Sr = 0; Sr < 4; Sr++) Ur.push(jr[4 * Kr[rr] + Sr]);
                  if (null !== Ir && void 0 !== Ir)
                    for (let Sr = 0; Sr < 4; Sr++) tr.push(Ir[4 * Kr[rr] + Sr]);
                  if (null !== fr && void 0 !== fr)
                    for (let Sr = 0; Sr < 4; Sr++) hr.push(fr[4 * Kr[rr] + Sr])
                }
                pr.push(er)
              }
          }
          const yr = [];
          lr.b.ComputeNormals(Er, pr, yr), rr.positions = Er, rr.indices = pr, rr.normals = yr, null !== Sr && void 0 !== Sr && (rr.uvs = xr), null !== Wr && void 0 !== Wr && (rr.colors = mr), null !== ar && void 0 !== ar && (rr.matricesIndices = Nr), null !== jr && void 0 !== jr && (rr.matricesWeights = Ur), null !== Ir && void 0 !== Ir && (rr.matricesIndicesExtra = tr), null !== jr && void 0 !== jr && (rr.matricesWeightsExtra = hr), rr.applyToMesh(this, this.isVertexBufferUpdatable(Lr.j.PositionKind))
        }
      }
      static _instancedMeshFactory(rr, Sr) {
        throw (0, Ar.l)("InstancedMesh")
      }
      static _PhysicsImpostorParser(rr, Sr, Qr) {
        throw (0, Ar.l)("PhysicsImpostor")
      }
      createInstance(rr) {
        const Sr = dr._instancedMeshFactory(rr, this);
        return Sr.parent = this.parent, Sr
      }
      synchronizeInstances() {
        for (let rr = 0; rr < this.instances.length; rr++) {
          this.instances[rr]._syncSubMeshes()
        }
        return this
      }
      optimizeIndices(rr) {
        const Sr = this.yar(),
          Qr = this.getVerticesData(Lr.j.PositionKind);
        if (!Qr || !Sr) return this;
        const Zr = [];
        for (let ar = 0; ar < Qr.length; ar += 3) Zr.push(Tr.u.FromArray(Qr, ar));
        const Wr = [];
        return Yr.b.SyncAsyncForLoop(Zr.length, 40, (rr => {
          const Sr = Zr.length - 1 - rr,
            Qr = Zr[Sr];
          for (let ar = 0; ar < Sr; ++ar) {
            const rr = Zr[ar];
            if (Qr.equals(rr)) {
              Wr[Sr] = ar;
              break
            }
          }
        }), (() => {
          for (let rr = 0; rr < Sr.length; ++rr) Sr[rr] = Wr[Sr[rr]] || Sr[rr];
          const Qr = this.jT.slice(0);
          this.setIndices(Sr), this.jT = Qr, rr && rr(this)
        })), this
      }
      serialize() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        rr.name = this.name, rr.id = this.id, rr.uniqueId = this.uniqueId, rr.type = this.getClassName(), Kr.b && Kr.b.HasTags(this) && (rr.tags = Kr.b.GetTags(this)), rr.position = this.position.OWr(), this.rotationQuaternion ? rr.rotationQuaternion = this.rotationQuaternion.OWr() : this.rotation && (rr.rotation = this.rotation.OWr()), rr.Tx = this.Tx.OWr(), this._postMultiplyPivotMatrix ? rr.pivotMatrix = this.getPivotMatrix().OWr() : rr.localMatrix = this.getPivotMatrix().OWr(), rr.isEnabled = this.isEnabled(!1), rr.isVisible = this.isVisible, rr.infiniteDistance = this.infiniteDistance, rr.pickable = this.ut, rr.receiveShadows = this.receiveShadows, rr.billboardMode = this.billboardMode, rr.visibility = this.visibility, rr.GU = this.GU, rr.checkCollisions = this.checkCollisions, rr.ellipsoid = this.ellipsoid.OWr(), rr.ellipsoidOffset = this.ellipsoidOffset.OWr(), rr.VU = this.VU, rr.isBlocker = this.isBlocker, rr.sideOrientation = this.sideOrientation, this._isWorldMatrixFrozen && (rr.sC = !0), this.parent && this.parent._serializeAsParent(rr), rr.isUnIndexed = this.isUnIndexed;
        const Sr = this._geometry;
        if (Sr && this.jT) {
          rr.geometryUniqueId = Sr.uniqueId, rr.geometryId = Sr.id, rr.jT = [];
          for (let Sr = 0; Sr < this.jT.length; Sr++) {
            const Qr = this.jT[Sr];
            rr.jT.push({
              materialIndex: Qr.materialIndex,
              verticesStart: Qr.verticesStart,
              verticesCount: Qr.verticesCount,
              indexStart: Qr.indexStart,
              indexCount: Qr.indexCount
            })
          }
        }
        if (this.material ? this.material.doNotSerialize || (rr.materialUniqueId = this.material.uniqueId, rr.materialId = this.material.id) : (this.material = null, rr.materialUniqueId = this._scene.defaultMaterial.uniqueId, rr.materialId = this._scene.defaultMaterial.id), this.morphTargetManager && (rr.morphTargetManagerId = this.morphTargetManager.uniqueId), this.skeleton && (rr.skeletonId = this.skeleton.id, rr.skeletonUniqueId = this.skeleton.uniqueId, rr.numBoneInfluencers = this.numBoneInfluencers), this.eC()._getComponent(Vr.b.NAME_PHYSICSENGINE)) {
          const Sr = this.getPhysicsImpostor?.();
          Sr && (rr.physicsMass = Sr.getParam("sj"), rr.physicsFriction = Sr.getParam("friction"), rr.physicsRestitution = Sr.getParam("sj"), rr.physicsImpostor = Sr.type)
        }
        this.metadata && (rr.metadata = this.metadata), 0 !== this.meshBlendingTag && (rr.meshBlendingTag = this.meshBlendingTag), rr.instances = [];
        for (let Qr = 0; Qr < this.instances.length; Qr++) {
          const Sr = this.instances[Qr];
          if (Sr.doNotSerialize) continue;
          const Zr = {
            name: Sr.name,
            id: Sr.id,
            isEnabled: Sr.isEnabled(!1),
            isVisible: Sr.isVisible,
            ut: Sr.ut,
            checkCollisions: Sr.checkCollisions,
            position: Sr.position.OWr(),
            Tx: Sr.Tx.OWr()
          };
          if (Sr.parent && Sr.parent._serializeAsParent(Zr), Sr.rotationQuaternion ? Zr.rotationQuaternion = Sr.rotationQuaternion.OWr() : Sr.rotation && (Zr.rotation = Sr.rotation.OWr()), this.eC()._getComponent(Vr.b.NAME_PHYSICSENGINE)) {
            const rr = Sr.getPhysicsImpostor?.();
            rr && (Zr.physicsMass = rr.getParam("sj"), Zr.physicsFriction = rr.getParam("friction"), Zr.physicsRestitution = rr.getParam("sj"), Zr.physicsImpostor = rr.type)
          }
          Sr.metadata && (Zr.metadata = Sr.metadata), Sr.actionManager && (Zr.actions = Sr.actionManager.serialize(Sr.name)), rr.instances.push(Zr), Mr.e.AppendSerializedAnimations(Sr, Zr), Zr.yh = Sr.serializeAnimationRanges()
        }
        if (this._thinInstanceDataStorage.instancesCount && this._thinInstanceDataStorage.matrixData && (rr.thinInstances = {
            instancesCount: this._thinInstanceDataStorage.instancesCount,
            matrixData: Array.from(this._thinInstanceDataStorage.matrixData),
            matrixBufferSize: this._thinInstanceDataStorage.matrixBufferSize,
            enablePicking: this.NQr
          }, this._userThinInstanceBuffersStorage)) {
          const Sr = {
            data: {},
            sizes: {},
            strides: {}
          };
          for (const rr in this._userThinInstanceBuffersStorage.data) Sr.data[rr] = Array.from(this._userThinInstanceBuffersStorage.data[rr]), Sr.sizes[rr] = this._userThinInstanceBuffersStorage.sizes[rr], Sr.strides[rr] = this._userThinInstanceBuffersStorage.strides[rr];
          rr.thinInstances.userThinInstance = Sr
        }
        return Mr.e.AppendSerializedAnimations(this, rr), rr.yh = this.serializeAnimationRanges(), rr.layerMask = this.layerMask, rr.alphaIndex = this.alphaIndex, rr.hasVertexAlpha = this.hasVertexAlpha, rr.overlayAlpha = this.overlayAlpha, rr.overlayColor = this.overlayColor.OWr(), rr.renderOverlay = this.renderOverlay, rr.applyFog = this.applyFog, this.actionManager && (rr.actions = this.actionManager.serialize(this.name)), rr
      }
      _syncGeometryWithMorphTargetManager() {
        if (!this.geometry) return;
        this._markSubMeshesAsAttributesDirty();
        const rr = this._internalAbstractMeshDataInfo._morphTargetManager;
        if (rr && rr.vertexCount) {
          if (rr.vertexCount !== this.getTotalVertices()) return Gr.c.Error("Mesh is incompatible with morph targets. Targets and mesh must all have the same vertices count."), void(this.morphTargetManager = null);
          if (rr.isUsingTextureForTargets) return;
          for (let Sr = 0; Sr < rr.numInfluencers; Sr++) {
            const Qr = rr.getActiveTarget(Sr),
              Zr = Qr.getPositions();
            if (!Zr) return void Gr.c.Error("Invalid morph target. Target must have positions.");
            this.geometry.setVerticesData(Lr.j.PositionKind + Sr, Zr, !1, 3);
            const Wr = Qr.getNormals();
            Wr && this.geometry.setVerticesData(Lr.j.NormalKind + Sr, Wr, !1, 3);
            const ar = Qr.getTangents();
            ar && this.geometry.setVerticesData(Lr.j.TangentKind + Sr, ar, !1, 3);
            const jr = Qr.getUVs();
            jr && this.geometry.setVerticesData(Lr.j.UVKind + "_" + Sr, jr, !1, 2);
            const Ir = Qr.getUV2s();
            Ir && this.geometry.setVerticesData(Lr.j.UV2Kind + "_" + Sr, Ir, !1, 2);
            const fr = Qr.getColors();
            fr && this.geometry.setVerticesData(Lr.j.ColorKind + Sr, fr, !1, 4)
          }
        } else {
          let rr = 0;
          for (; this.geometry.isVerticesDataPresent(Lr.j.PositionKind + rr);) this.geometry.removeVerticesData(Lr.j.PositionKind + rr), this.geometry.isVerticesDataPresent(Lr.j.NormalKind + rr) && this.geometry.removeVerticesData(Lr.j.NormalKind + rr), this.geometry.isVerticesDataPresent(Lr.j.TangentKind + rr) && this.geometry.removeVerticesData(Lr.j.TangentKind + rr), this.geometry.isVerticesDataPresent(Lr.j.UVKind + "_" + rr) && this.geometry.removeVerticesData(Lr.j.UVKind + "_" + rr), this.geometry.isVerticesDataPresent(Lr.j.UV2Kind + "_" + rr) && this.geometry.removeVerticesData(Lr.j.UV2Kind + "_" + rr), this.geometry.isVerticesDataPresent(Lr.j.ColorKind + rr) && this.geometry.removeVerticesData(Lr.j.ColorKind + rr), rr++
        }
      }
      static Parse(rr, Sr, Qr) {
        let Zr, Wr = !1;
        if (rr.type && "LinesMesh" === rr.type ? Zr = dr._LinesMeshParser(rr, Sr) : rr.type && "GroundMesh" === rr.type ? Zr = dr._GroundMeshParser(rr, Sr) : rr.type && "GoldbergMesh" === rr.type ? Zr = dr._GoldbergMeshParser(rr, Sr) : rr.type && "GreasedLineMesh" === rr.type ? Zr = dr._GreasedLineMeshParser(rr, Sr) : rr.type && "TrailMesh" === rr.type ? Zr = dr._TrailMeshParser(rr, Sr) : rr.type && "GaussianSplattingMesh" === rr.type ? (Zr = rr._isCompound ? dr._GaussianSplattingCompoundMeshParser(rr, Sr) : dr._GaussianSplattingMeshParser(rr, Sr), Wr = !0) : rr.type && "GaussianSplattingPartProxyMesh" === rr.type ? (Zr = dr._GaussianSplattingPartProxyMeshParser(rr, Sr), Wr = !0) : Zr = new dr(rr.name, Sr), Zr.id = rr.id, Zr._waitingParsedUniqueId = rr.uniqueId, Kr.b && Kr.b.AddTagsTo(Zr, rr.tags), Zr.position = Tr.u.FromArray(rr.position), void 0 !== rr.metadata && (Zr.metadata = rr.metadata), void 0 !== rr.meshBlendingTag && (Zr.meshBlendingTag = rr.meshBlendingTag), rr.rotationQuaternion ? Zr.rotationQuaternion = Tr.h.FromArray(rr.rotationQuaternion) : rr.rotation && (Zr.rotation = Tr.u.FromArray(rr.rotation)), Zr.Tx = Tr.u.FromArray(rr.Tx), rr.localMatrix ? Zr.setPreTransformMatrix(Tr.d.FromArray(rr.localMatrix)) : rr.pivotMatrix && Zr.setPivotMatrix(Tr.d.FromArray(rr.pivotMatrix)), Zr.VK(rr.isEnabled), Zr.isVisible = rr.isVisible, Zr.infiniteDistance = rr.infiniteDistance, Zr.GU = !!rr.GU, Zr.showBoundingBox = rr.showBoundingBox, Zr.showSubMeshesBoundingBox = rr.showSubMeshesBoundingBox, void 0 !== rr.applyFog && (Zr.applyFog = rr.applyFog), void 0 !== rr.pickable && (Zr.ut = rr.pickable), void 0 !== rr.alphaIndex && (Zr.alphaIndex = rr.alphaIndex), Zr.receiveShadows = rr.receiveShadows, void 0 !== rr.billboardMode && (Zr.billboardMode = rr.billboardMode), void 0 !== rr.visibility && (Zr.visibility = rr.visibility), Zr.checkCollisions = rr.checkCollisions, Zr.VU = !!rr.VU, rr.ellipsoid && (Zr.ellipsoid = Tr.u.FromArray(rr.ellipsoid)), rr.ellipsoidOffset && (Zr.ellipsoidOffset = Tr.u.FromArray(rr.ellipsoidOffset)), null != rr.overrideMaterialSideOrientation && (Zr.sideOrientation = rr.overrideMaterialSideOrientation), void 0 !== rr.sideOrientation && (Zr.sideOrientation = rr.sideOrientation), void 0 !== rr.isBlocker && (Zr.isBlocker = rr.isBlocker), Zr._shouldGenerateFlatShading = rr.useFlatShading, rr.sC && (Zr._waitingData.sC = rr.sC), void 0 !== rr.parentId && (Zr._waitingParentId = rr.parentId), void 0 !== rr.parentInstanceIndex && (Zr._waitingParentInstanceIndex = rr.parentInstanceIndex), void 0 !== rr.actions && (Zr._waitingData.actions = rr.actions), void 0 !== rr.overlayAlpha && (Zr.overlayAlpha = rr.overlayAlpha), void 0 !== rr.overlayColor && (Zr.overlayColor = vr.e.FromArray(rr.overlayColor)), void 0 !== rr.renderOverlay && (Zr.renderOverlay = rr.renderOverlay), Zr.isUnIndexed = !!rr.isUnIndexed, Zr.hasVertexAlpha = rr.hasVertexAlpha, rr.delayLoadingFile ? (Zr.delayLoadState = 4, Zr.delayLoadingFile = Qr + rr.delayLoadingFile, Zr.buildBoundingInfo(Tr.u.FromArray(rr.boundingBoxMinimum), Tr.u.FromArray(rr.boundingBoxMaximum)), rr._binaryInfo && (Zr._binaryInfo = rr._binaryInfo), Zr._delayInfo = [], rr.hasUVs && Zr._delayInfo.push(Lr.j.UVKind), rr.hasUVs2 && Zr._delayInfo.push(Lr.j.UV2Kind), rr.hasUVs3 && Zr._delayInfo.push(Lr.j.UV3Kind), rr.hasUVs4 && Zr._delayInfo.push(Lr.j.UV4Kind), rr.hasUVs5 && Zr._delayInfo.push(Lr.j.UV5Kind), rr.hasUVs6 && Zr._delayInfo.push(Lr.j.UV6Kind), rr.hasColors && Zr._delayInfo.push(Lr.j.ColorKind), rr.hasMatricesIndices && Zr._delayInfo.push(Lr.j.MatricesIndicesKind), rr.hasMatricesWeights && Zr._delayInfo.push(Lr.j.MatricesWeightsKind), Zr._delayLoadingFunction = Xr.e._ImportGeometry, Cr.e.ForceFullSceneLoadingForIncremental && Zr._checkDelayState()) : Wr || Xr.e._ImportGeometry(rr, Zr), rr.materialUniqueId ? Zr._waitingMaterialId = rr.materialUniqueId : rr.materialId && (Zr._waitingMaterialId = rr.materialId), rr.morphTargetManagerId > -1 && (Zr._waitingMorphTargetManagerId = rr.morphTargetManagerId), void 0 !== rr.skeletonId && null !== rr.skeletonId && (Zr.skeleton = Sr.getLastSkeletonById(rr.skeletonId), Zr._waitingSkeletonId = rr.skeletonId, rr.numBoneInfluencers && (Zr.numBoneInfluencers = rr.numBoneInfluencers)), void 0 !== rr.skeletonUniqueId && null !== rr.skeletonUniqueId && (Zr._waitingSkeletonUniqueId = rr.skeletonUniqueId), rr.animations) {
          for (let Sr = 0; Sr < rr.animations.length; Sr++) {
            const Qr = rr.animations[Sr],
              Wr = (0, kr.d)("BABYLON.Animation");
            Wr && Zr.animations.push(Wr.Parse(Qr))
          }
          Or.c.ParseAnimationRanges(Zr, rr, Sr)
        }
        if (rr.autoAnimate && Sr.beginAnimation(Zr, rr.autoAnimateFrom, rr.autoAnimateTo, rr.autoAnimateLoop, rr.autoAnimateSpeed || 1), rr.layerMask && !isNaN(rr.layerMask) ? Zr.layerMask = Math.abs(parseInt(rr.layerMask)) : Zr.layerMask = 268435455, rr.physicsImpostor && (Zr.physicsImpostor = dr._PhysicsImpostorParser(Sr, Zr, rr)), rr.lodMeshIds && (Zr._waitingData.lods = {
            ids: rr.lodMeshIds,
            distances: rr.lodDistances ? rr.lodDistances : null,
            coverages: rr.lodCoverages ? rr.lodCoverages : null
          }), rr.instances)
          for (let ar = 0; ar < rr.instances.length; ar++) {
            const Qr = rr.instances[ar],
              Wr = Zr.createInstance(Qr.name);
            if (Qr.id && (Wr.id = Qr.id), Kr.b && (Qr.tags ? Kr.b.AddTagsTo(Wr, Qr.tags) : Kr.b.AddTagsTo(Wr, rr.tags)), Wr.position = Tr.u.FromArray(Qr.position), void 0 !== Qr.metadata && (Wr.metadata = Qr.metadata), void 0 !== Qr.parentId && (Wr._waitingParentId = Qr.parentId), void 0 !== Qr.parentInstanceIndex && (Wr._waitingParentInstanceIndex = Qr.parentInstanceIndex), void 0 !== Qr.isEnabled && null !== Qr.isEnabled && Wr.VK(Qr.isEnabled), void 0 !== Qr.isVisible && null !== Qr.isVisible && (Wr.isVisible = Qr.isVisible), void 0 !== Qr.ut && null !== Qr.ut && (Wr.ut = Qr.ut), Qr.rotationQuaternion ? Wr.rotationQuaternion = Tr.h.FromArray(Qr.rotationQuaternion) : Qr.rotation && (Wr.rotation = Tr.u.FromArray(Qr.rotation)), Wr.Tx = Tr.u.FromArray(Qr.Tx), void 0 != Qr.checkCollisions && null != Qr.checkCollisions && (Wr.checkCollisions = Qr.checkCollisions), void 0 != Qr.pickable && null != Qr.pickable && (Wr.ut = Qr.pickable), void 0 != Qr.showBoundingBox && null != Qr.showBoundingBox && (Wr.showBoundingBox = Qr.showBoundingBox), void 0 != Qr.showSubMeshesBoundingBox && null != Qr.showSubMeshesBoundingBox && (Wr.showSubMeshesBoundingBox = Qr.showSubMeshesBoundingBox), void 0 != Qr.alphaIndex && null != Qr.showSubMeshesBoundingBox && (Wr.alphaIndex = Qr.alphaIndex), Qr.physicsImpostor && (Wr.physicsImpostor = dr._PhysicsImpostorParser(Sr, Wr, Qr)), void 0 !== Qr.actions && (Wr._waitingData.actions = Qr.actions), Qr.animations) {
              for (let rr = 0; rr < Qr.animations.length; rr++) {
                const Sr = Qr.animations[rr],
                  Zr = (0, kr.d)("BABYLON.Animation");
                Zr && Wr.animations.push(Zr.Parse(Sr))
              }
              Or.c.ParseAnimationRanges(Wr, Qr, Sr), Qr.autoAnimate && Sr.beginAnimation(Wr, Qr.autoAnimateFrom, Qr.autoAnimateTo, Qr.autoAnimateLoop, Qr.autoAnimateSpeed || 1)
            }
          }
        if (rr.thinInstances) {
          const Sr = rr.thinInstances;
          if (Zr.NQr = !!Sr.enablePicking, Sr.matrixData ? (Zr.vrr("matrix", new Float32Array(Sr.matrixData), 16, !1), Zr._thinInstanceDataStorage.matrixBufferSize = Sr.matrixBufferSize, Zr._thinInstanceDataStorage.instancesCount = Sr.instancesCount) : Zr._thinInstanceDataStorage.matrixBufferSize = Sr.matrixBufferSize, rr.thinInstances.userThinInstance) {
            const Sr = rr.thinInstances.userThinInstance;
            for (const rr in Sr.data) Zr.vrr(rr, new Float32Array(Sr.data[rr]), Sr.strides[rr], !1), Zr._userThinInstanceBuffersStorage.sizes[rr] = Sr.sizes[rr]
          }
        }
        return Zr
      }
      setPositionsForCPUSkinning() {
        const rr = this._internalMeshDataInfo;
        if (!rr._sourcePositions) {
          const Sr = this.getVerticesData(Lr.j.PositionKind);
          if (!Sr) return rr._sourcePositions;
          rr._sourcePositions = new Float32Array(Sr), this.isVertexBufferUpdatable(Lr.j.PositionKind) || this.setVerticesData(Lr.j.PositionKind, Sr, !0)
        }
        return rr._sourcePositions
      }
      setNormalsForCPUSkinning() {
        const rr = this._internalMeshDataInfo;
        if (!rr._sourceNormals) {
          const Sr = this.getVerticesData(Lr.j.NormalKind);
          if (!Sr) return rr._sourceNormals;
          rr._sourceNormals = new Float32Array(Sr), this.isVertexBufferUpdatable(Lr.j.NormalKind) || this.setVerticesData(Lr.j.NormalKind, Sr, !0)
        }
        return rr._sourceNormals
      }
      applySkeleton(rr) {
        if (!this.geometry) return this;
        if (this.geometry._softwareSkinningFrameId == this.eC().getFrameId()) return this;
        if (this.geometry._softwareSkinningFrameId = this.eC().getFrameId(), !this.isVerticesDataPresent(Lr.j.PositionKind)) return this;
        if (!this.isVerticesDataPresent(Lr.j.MatricesIndicesKind)) return this;
        if (!this.isVerticesDataPresent(Lr.j.MatricesWeightsKind)) return this;
        const Sr = this.isVerticesDataPresent(Lr.j.NormalKind),
          Qr = this._internalMeshDataInfo;
        if (!Qr._sourcePositions) {
          const rr = this.jT.slice();
          this.setPositionsForCPUSkinning(), this.jT = rr
        }
        Sr && !Qr._sourceNormals && this.setNormalsForCPUSkinning();
        let Zr = this.getVerticesData(Lr.j.PositionKind);
        if (!Zr) return this;
        Zr instanceof Float32Array || (Zr = new Float32Array(Zr));
        let Wr = this.getVerticesData(Lr.j.NormalKind);
        if (Sr) {
          if (!Wr) return this;
          Wr instanceof Float32Array || (Wr = new Float32Array(Wr))
        }
        const ar = this.getVerticesData(Lr.j.MatricesIndicesKind),
          jr = this.getVerticesData(Lr.j.MatricesWeightsKind);
        if (!jr || !ar) return this;
        const Ir = this.numBoneInfluencers > 4,
          fr = Ir ? this.getVerticesData(Lr.j.MatricesIndicesExtraKind) : null,
          Er = Ir ? this.getVerticesData(Lr.j.MatricesWeightsExtraKind) : null,
          pr = rr.getTransformMatrices(this),
          xr = Tr.u.Zero(),
          mr = new Tr.d,
          Nr = new Tr.d;
        let Ur, tr = 0;
        for (let hr = 0; hr < Zr.length; hr += 3, tr += 4) {
          let rr;
          for (Ur = 0; Ur < 4; Ur++) rr = jr[tr + Ur], rr > 0 && (Tr.d.FromFloat32ArrayToRefScaled(pr, Math.floor(16 * ar[tr + Ur]), rr, Nr), mr.addToSelf(Nr));
          if (Ir)
            for (Ur = 0; Ur < 4; Ur++) rr = Er[tr + Ur], rr > 0 && (Tr.d.FromFloat32ArrayToRefScaled(pr, Math.floor(16 * fr[tr + Ur]), rr, Nr), mr.addToSelf(Nr));
          Tr.u.TransformCoordinatesFromFloatsToRef(Qr._sourcePositions[hr], Qr._sourcePositions[hr + 1], Qr._sourcePositions[hr + 2], mr, xr), xr.toArray(Zr, hr), Sr && (Tr.u.TransformNormalFromFloatsToRef(Qr._sourceNormals[hr], Qr._sourceNormals[hr + 1], Qr._sourceNormals[hr + 2], mr, xr), xr.toArray(Wr, hr)), mr.reset()
        }
        return this.updateVerticesData(Lr.j.PositionKind, Zr), Sr && this.updateVerticesData(Lr.j.NormalKind, Wr), this
      }
      static MinMax(rr) {
        let Sr = null,
          Qr = null;
        for (const Zr of rr) {
          const rr = Zr.mG().boundingBox;
          Sr && Qr ? (Sr.minimizeInPlace(rr.minimumWorld), Qr.maximizeInPlace(rr.maximumWorld)) : (Sr = rr.minimumWorld.clone(), Qr = rr.maximumWorld.clone())
        }
        return Sr && Qr ? {
          min: Sr,
          max: Qr
        } : {
          min: Tr.u.Zero(),
          max: Tr.u.Zero()
        }
      }
      static Center(rr) {
        const Sr = rr instanceof Array ? dr.MinMax(rr) : rr;
        return Tr.u.Center(Sr.min, Sr.max)
      }
      static MergeMeshes(rr) {
        let Sr = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          Qr = arguments.length > 2 ? arguments[2] : void 0,
          Zr = arguments.length > 3 ? arguments[3] : void 0,
          Wr = arguments.length > 4 ? arguments[4] : void 0,
          ar = arguments.length > 5 ? arguments[5] : void 0;
        return (0, yr.o)(dr._MergeMeshesCoroutine(rr, Sr, Qr, Zr, Wr, ar, !1))
      }
      static async MergeMeshesAsync(rr) {
        let Sr = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          Qr = arguments.length > 2 ? arguments[2] : void 0,
          Zr = arguments.length > 3 ? arguments[3] : void 0,
          Wr = arguments.length > 4 ? arguments[4] : void 0,
          ar = arguments.length > 5 ? arguments[5] : void 0;
        return await (0, yr.k)(dr._MergeMeshesCoroutine(rr, Sr, Qr, Zr, Wr, ar, !0), (0, yr.c)())
      }
      static * _MergeMeshesCoroutine(rr) {
        let Sr, Qr = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          Zr = arguments.length > 2 ? arguments[2] : void 0,
          Wr = arguments.length > 3 ? arguments[3] : void 0,
          ar = arguments.length > 4 ? arguments[4] : void 0,
          jr = arguments.length > 5 ? arguments[5] : void 0,
          Ir = arguments.length > 6 ? arguments[6] : void 0;
        if (0 === (rr = rr.filter(Boolean)).length) return null;
        if (!Zr) {
          let Qr = 0;
          for (Sr = 0; Sr < rr.length; Sr++)
            if (Qr += rr[Sr].getTotalVertices(), Qr >= 65536) return Gr.c.Warn("Cannot merge meshes because resulting mesh will have more than 65536 vertices. Please use allow32BitsIndices = true to use 32 bits indices"), null
        }
        const fr = rr[0];
        jr && (ar = !1, rr.sort(((rr, Sr) => (rr.material?.uniqueId ?? -1) - (Sr.material?.uniqueId ?? -1))));
        const Er = new Array,
          pr = new Array,
          xr = new Array,
          mr = rr[0].sideOrientation;
        for (Sr = 0; Sr < rr.length; Sr++) {
          const Qr = rr[Sr];
          if (Qr.gC) return Gr.c.Warn("Cannot merge instance meshes."), null;
          if (mr !== Qr.sideOrientation) return Gr.c.Warn("Cannot merge meshes with different sideOrientation values."), null;
          if (ar || jr) {
            const rr = xr.reduce(((rr, Sr) => Math.max(rr, Sr.start + Sr.count)), 0);
            if (jr)
              if (Qr.material) {
                const Sr = Qr.material;
                if (Sr instanceof gr.b) {
                  for (let rr = 0; rr < Sr.Lrr.length; rr++) Er.indexOf(Sr.Lrr[rr]) < 0 && Er.push(Sr.Lrr[rr]);
                  for (let Zr = 0; Zr < Qr.jT.length; Zr++) pr.push(Er.indexOf(Sr.Lrr[Qr.jT[Zr].materialIndex])), xr.push({
                    start: rr + Qr.jT[Zr].indexStart,
                    count: Qr.jT[Zr].indexCount
                  })
                } else {
                  Er.indexOf(Sr) < 0 && Er.push(Sr);
                  for (let Zr = 0; Zr < Qr.jT.length; Zr++) pr.push(Er.indexOf(Sr)), xr.push({
                    start: rr + Qr.jT[Zr].indexStart,
                    count: Qr.jT[Zr].indexCount
                  })
                }
              } else
                for (let Sr = 0; Sr < Qr.jT.length; Sr++) pr.push(0), xr.push({
                  start: rr + Qr.jT[Sr].indexStart,
                  count: Qr.jT[Sr].indexCount
                });
            else xr.push({
              start: rr,
              count: Qr.getTotalIndices()
            })
          }
        }
        if (jr && xr.length > 1) {
          let rr = 0;
          for (let Sr = 1; Sr < xr.length; Sr++) {
            const Qr = xr[rr],
              Zr = xr[Sr];
            pr[Sr] === pr[rr] && Qr.start + Qr.count === Zr.start ? Qr.count += Zr.count : (rr++, xr[rr] = Zr, pr[rr] = pr[Sr])
          }
          xr.length = rr + 1, pr.length = rr + 1
        }
        const Nr = rr => {
            const Sr = rr.computeWorldMatrix(!0);
            return {
              vertexData: lr.b.ExtractFromMesh(rr, !1, !1),
              transform: Sr
            }
          },
          {
            vertexData: Ur,
            transform: tr
          } = Nr(rr[0]);
        Ir && (yield);
        const hr = new Array(rr.length - 1);
        for (let yr = 1; yr < rr.length; yr++) hr[yr - 1] = Nr(rr[yr]), Ir && (yield);
        const zr = Ur._mergeCoroutine(tr, hr, Zr, Ir, !Qr);
        let Yr = zr.next();
        for (; !Yr.done;) Ir && (yield), Yr = zr.next();
        const nr = Yr.value;
        Wr || (Wr = new dr(fr.name + "_merged", fr.eC()));
        const er = nr._applyToCoroutine(Wr, void 0, Ir);
        let Kr = er.next();
        for (; !Kr.done;) Ir && (yield), Kr = er.next();
        if (Wr.checkCollisions = fr.checkCollisions, Wr.sideOrientation = fr.sideOrientation, Qr)
          for (Sr = 0; Sr < rr.length; Sr++) rr[Sr].dispose();
        if (ar || jr) {
          for (Wr.releaseSubMeshes(), Sr = 0; Sr < xr.length;) Hr.b.CreateFromIndices(0, xr[Sr].start, xr[Sr].count, Wr, void 0, !1), Sr++;
          for (const rr of Wr.jT) rr.refreshBoundingInfo();
          Wr.computeWorldMatrix(!0)
        }
        if (jr) {
          const rr = new gr.b(fr.name + "_merged", fr.eC());
          rr.Lrr = Er;
          for (let Sr = 0; Sr < Wr.jT.length; Sr++) Wr.jT[Sr].materialIndex = pr[Sr];
          Wr.material = rr
        } else Wr.material = fr.material;
        return Wr
      }
      Nrr(rr) {
        rr._indexInSourceMeshInstanceArray = this.instances.length, this.instances.push(rr)
      }
      trr(rr) {
        const Sr = rr._indexInSourceMeshInstanceArray;
        if (-1 != Sr) {
          if (Sr !== this.instances.length - 1) {
            const rr = this.instances[this.instances.length - 1];
            this.instances[Sr] = rr, rr._indexInSourceMeshInstanceArray = Sr
          }
          rr._indexInSourceMeshInstanceArray = -1, this.instances.pop()
        }
      }
      _shouldConvertRHS() {
        return this._scene.useRightHandedSystem && this.sideOrientation === qr.d.CounterClockWiseSideOrientation
      }
      _getRenderingFillMode(rr) {
        const Sr = this.eC();
        return Sr.forcePointsCloud ? qr.d.PointFillMode : Sr.forceWireframe ? qr.d.WireFrameFillMode : this.overrideRenderingFillMode ?? rr
      }
      setMaterialByID(rr) {
        return this.setMaterialById(rr)
      }
      static CreateRibbon(rr, Sr, Qr, Zr, Wr, ar, jr, Ir, fr) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDisc(rr, Sr, Qr, Zr, Wr, ar) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateBox(rr, Sr, Qr, Zr, Wr) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateSphere(rr, Sr, Qr, Zr, Wr, ar) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateHemisphere(rr, Sr, Qr, Zr) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateCylinder(rr, Sr, Qr, Zr, Wr, ar, jr, Ir, fr) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTorus(rr, Sr, Qr, Zr, Wr, ar, jr) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTorusKnot(rr, Sr, Qr, Zr, Wr, ar, jr, Ir, fr, Er) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateLines(rr, Sr, Qr, Zr, Wr) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDashedLines(rr, Sr, Qr, Zr, Wr, ar, jr, Ir) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePolygon(rr, Sr, Qr, Zr, Wr, ar, jr) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudePolygon(rr, Sr, Qr, Zr, Wr, ar, jr, Ir) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudeShape(rr, Sr, Qr, Zr, Wr, ar, jr, Ir, fr, Er) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudeShapeCustom(rr, Sr, Qr, Zr, Wr, ar, jr, Ir, fr, Er, pr, xr) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateLathe(rr, Sr, Qr, Zr, Wr, ar, jr) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePlane(rr, Sr, Qr, Zr, Wr) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateGround(rr, Sr, Qr, Zr, Wr, ar) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTiledGround(rr, Sr, Qr, Zr, Wr, ar, jr, Ir, fr) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateGroundFromHeightMap(rr, Sr, Qr, Zr, Wr, ar, jr, Ir, fr, Er, pr) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTube(rr, Sr, Qr, Zr, Wr, ar, jr, Ir, fr, Er) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePolyhedron(rr, Sr, Qr) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateIcoSphere(rr, Sr, Qr) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDecal(rr, Sr, Qr, Zr, Wr, ar) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateCapsule(rr, Sr, Qr) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtendToGoldberg(rr) {
        throw new Error("Import MeshBuilder to populate this function")
      }
    }
    dr.FRONTSIDE = lr.b.FRONTSIDE, dr.BACKSIDE = lr.b.BACKSIDE, dr.DOUBLESIDE = lr.b.DOUBLESIDE, dr.DEFAULTSIDE = lr.b.DEFAULTSIDE, dr.NO_CAP = 0, dr.CAP_START = 1, dr.CAP_END = 2, dr.CAP_ALL = 3, dr.NO_FLIP = 0, dr.FLIP_TILE = 1, dr.ROTATE_TILE = 2, dr.FLIP_ROW = 3, dr.ROTATE_ROW = 4, dr.FLIP_N_ROTATE_TILE = 5, dr.FLIP_N_ROTATE_ROW = 6, dr.CENTER = 0, dr.LEFT = 1, dr.RIGHT = 2, dr.TOP = 3, dr.BOTTOM = 4, dr.INSTANCEDMESH_SORT_TRANSPARENT = !1, dr._GroundMeshParser = (rr, Sr) => {
      throw (0, Ar.l)("GroundMesh")
    }, dr._GoldbergMeshParser = (rr, Sr) => {
      throw (0, Ar.l)("GoldbergMesh")
    }, dr._LinesMeshParser = (rr, Sr) => {
      throw (0, Ar.l)("LinesMesh")
    }, dr._GreasedLineMeshParser = (rr, Sr) => {
      throw (0, Ar.l)("GreasedLineMesh")
    }, dr._GreasedLineRibbonMeshParser = (rr, Sr) => {
      throw (0, Ar.l)("GreasedLineRibbonMesh")
    }, dr._TrailMeshParser = (rr, Sr) => {
      throw (0, Ar.l)("TrailMesh")
    }, dr._GaussianSplattingMeshParser = (rr, Sr) => {
      throw (0, Ar.l)("GaussianSplattingMesh")
    }, dr._GaussianSplattingPartProxyMeshParser = (rr, Sr) => {
      throw (0, Ar.l)("GaussianSplattingPartProxyMesh")
    }, dr._GaussianSplattingCompoundMeshParser = (rr, Sr) => {
      throw (0, Ar.l)("GaussianSplattingCompoundMesh")
    };
    let sr = !1;

    function ur() {
      sr || (sr = !0, (0, kr.e)("BABYLON.Mesh", dr))
    }(Zr = dr.prototype).aG ?? (Zr.aG = (0, Ar.h)("Mesh", "aG")), (Wr = dr.prototype).simplify ?? (Wr.simplify = (0, Ar.h)("Mesh", "simplify")), (ar = dr.prototype).thinInstanceAdd ?? (ar.thinInstanceAdd = (0, Ar.h)("Mesh", "thinInstanceAdd")), (jr = dr.prototype).thinInstanceAddSelf ?? (jr.thinInstanceAddSelf = (0, Ar.h)("Mesh", "thinInstanceAddSelf")), (Ir = dr.prototype).thinInstanceRegisterAttribute ?? (Ir.thinInstanceRegisterAttribute = (0, Ar.h)("Mesh", "thinInstanceRegisterAttribute")), (fr = dr.prototype).thinInstanceSetMatrixAt ?? (fr.thinInstanceSetMatrixAt = (0, Ar.h)("Mesh", "thinInstanceSetMatrixAt")), (Er = dr.prototype).thinInstanceSetAttributeAt ?? (Er.thinInstanceSetAttributeAt = (0, Ar.h)("Mesh", "thinInstanceSetAttributeAt")), (pr = dr.prototype).vrr ?? (pr.vrr = (0, Ar.h)("Mesh", "vrr")), (xr = dr.prototype).thinInstanceGetWorldMatrices ?? (xr.thinInstanceGetWorldMatrices = (0, Ar.h)("Mesh", "thinInstanceGetWorldMatrices")), (mr = dr.prototype).nrr ?? (mr.nrr = (0, Ar.h)("Mesh", "nrr")), (Nr = dr.prototype).thinInstancePartialBufferUpdate ?? (Nr.thinInstancePartialBufferUpdate = (0, Ar.h)("Mesh", "thinInstancePartialBufferUpdate")), (Ur = dr.prototype).thinInstanceRefreshBoundingInfo ?? (Ur.thinInstanceRefreshBoundingInfo = (0, Ar.h)("Mesh", "thinInstanceRefreshBoundingInfo")), (tr = dr.prototype).getEmittedParticleSystems ?? (tr.getEmittedParticleSystems = (0, Ar.h)("Mesh", "getEmittedParticleSystems")), (hr = dr.prototype).getHierarchyEmittedParticleSystems ?? (hr.getHierarchyEmittedParticleSystems = (0, Ar.h)("Mesh", "getHierarchyEmittedParticleSystems")), Object.getOwnPropertyDescriptor(dr.prototype, "edgesShareWithInstances") || Object.defineProperty(dr.prototype, "edgesShareWithInstances", (0, Ar.g)("Mesh", "edgesShareWithInstances")), Object.getOwnPropertyDescriptor(dr.prototype, "NQr") || Object.defineProperty(dr.prototype, "NQr", (0, Ar.g)("Mesh", "NQr")), Object.getOwnPropertyDescriptor(dr.prototype, "thinInstanceAllowAutomaticStaticBufferRecreation") || Object.defineProperty(dr.prototype, "thinInstanceAllowAutomaticStaticBufferRecreation", (0, Ar.g)("Mesh", "thinInstanceAllowAutomaticStaticBufferRecreation")), Object.getOwnPropertyDescriptor(dr.prototype, "frr") || Object.defineProperty(dr.prototype, "frr", (0, Ar.g)("Mesh", "frr"))
  },
  42256: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Ur
    });
    var Zr = Qr(41872),
      Wr = Qr(38560),
      ar = Qr(41995),
      jr = Qr(41769),
      Ir = Qr(38684),
      fr = Qr(40246),
      Er = Qr(41875),
      pr = Qr(42251),
      xr = Qr(41910),
      mr = Qr(42134);
    class Nr {}
    let Ur = (() => {
      var rr;
      let Sr, Qr, Ur, tr, hr = [];
      return rr = class {
        constructor() {
          this.uniqueId = 0, this.metadata = {}, this._applyTo = (0, pr.g)(this._applyToCoroutine.bind(this)), this.uniqueId = rr._UniqueIdGenerator, rr._UniqueIdGenerator++
        }
        set(rr, Sr) {
          switch (rr.length || fr.c.Warn(`Setting vertex data kind '${Sr}' with an empty array`), Sr) {
            case ar.j.PositionKind:
              this.positions = rr;
              break;
            case ar.j.NormalKind:
              this.normals = rr;
              break;
            case ar.j.TangentKind:
              this.tangents = rr;
              break;
            case ar.j.UVKind:
              this.uvs = rr;
              break;
            case ar.j.UV2Kind:
              this.uvs2 = rr;
              break;
            case ar.j.UV3Kind:
              this.uvs3 = rr;
              break;
            case ar.j.UV4Kind:
              this.uvs4 = rr;
              break;
            case ar.j.UV5Kind:
              this.uvs5 = rr;
              break;
            case ar.j.UV6Kind:
              this.uvs6 = rr;
              break;
            case ar.j.ColorKind:
              this.colors = rr;
              break;
            case ar.j.MatricesIndicesKind:
              this.matricesIndices = rr;
              break;
            case ar.j.MatricesWeightsKind:
              this.matricesWeights = rr;
              break;
            case ar.j.MatricesIndicesExtraKind:
              this.matricesIndicesExtra = rr;
              break;
            case ar.j.MatricesWeightsExtraKind:
              this.matricesWeightsExtra = rr
          }
        }
        applyToMesh(rr, Sr) {
          return this._applyTo(rr, Sr, !1), this
        }
        applyToGeometry(rr, Sr) {
          return this._applyTo(rr, Sr, !1), this
        }
        updateMesh(rr) {
          return this._update(rr), this
        }
        updateGeometry(rr) {
          return this._update(rr), this
        }* _applyToCoroutine(rr) {
          let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            Qr = arguments.length > 2 ? arguments[2] : void 0;
          if (this.positions && (rr.setVerticesData(ar.j.PositionKind, this.positions, Sr), Qr && (yield)), this.normals && (rr.setVerticesData(ar.j.NormalKind, this.normals, Sr), Qr && (yield)), this.tangents && (rr.setVerticesData(ar.j.TangentKind, this.tangents, Sr), Qr && (yield)), this.uvs && (rr.setVerticesData(ar.j.UVKind, this.uvs, Sr), Qr && (yield)), this.uvs2 && (rr.setVerticesData(ar.j.UV2Kind, this.uvs2, Sr), Qr && (yield)), this.uvs3 && (rr.setVerticesData(ar.j.UV3Kind, this.uvs3, Sr), Qr && (yield)), this.uvs4 && (rr.setVerticesData(ar.j.UV4Kind, this.uvs4, Sr), Qr && (yield)), this.uvs5 && (rr.setVerticesData(ar.j.UV5Kind, this.uvs5, Sr), Qr && (yield)), this.uvs6 && (rr.setVerticesData(ar.j.UV6Kind, this.uvs6, Sr), Qr && (yield)), this.colors) {
            const Zr = this.positions && this.colors.length === this.positions.length ? 3 : 4;
            rr.setVerticesData(ar.j.ColorKind, this.colors, Sr, Zr), this.hasVertexAlpha && void 0 !== rr.hasVertexAlpha && (rr.hasVertexAlpha = !0), Qr && (yield)
          }
          if (this.matricesIndices && (rr.setVerticesData(ar.j.MatricesIndicesKind, this.matricesIndices, Sr), Qr && (yield)), this.matricesWeights && (rr.setVerticesData(ar.j.MatricesWeightsKind, this.matricesWeights, Sr), Qr && (yield)), this.matricesIndicesExtra && (rr.setVerticesData(ar.j.MatricesIndicesExtraKind, this.matricesIndicesExtra, Sr), Qr && (yield)), this.matricesWeightsExtra && (rr.setVerticesData(ar.j.MatricesWeightsExtraKind, this.matricesWeightsExtra, Sr), Qr && (yield)), this.indices ? (rr.setIndices(this.indices, null, Sr), Qr && (yield)) : rr.setIndices([], null), rr.jT && this.materialInfos && this.materialInfos.length > 1) {
            const Sr = rr;
            Sr.jT = [];
            for (const rr of this.materialInfos) new mr.b(rr.materialIndex, rr.verticesStart, rr.verticesCount, rr.indexStart, rr.indexCount, Sr)
          }
          return this
        }
        _update(rr, Sr, Qr) {
          return this.positions && rr.updateVerticesData(ar.j.PositionKind, this.positions, Sr, Qr), this.normals && rr.updateVerticesData(ar.j.NormalKind, this.normals, Sr, Qr), this.tangents && rr.updateVerticesData(ar.j.TangentKind, this.tangents, Sr, Qr), this.uvs && rr.updateVerticesData(ar.j.UVKind, this.uvs, Sr, Qr), this.uvs2 && rr.updateVerticesData(ar.j.UV2Kind, this.uvs2, Sr, Qr), this.uvs3 && rr.updateVerticesData(ar.j.UV3Kind, this.uvs3, Sr, Qr), this.uvs4 && rr.updateVerticesData(ar.j.UV4Kind, this.uvs4, Sr, Qr), this.uvs5 && rr.updateVerticesData(ar.j.UV5Kind, this.uvs5, Sr, Qr), this.uvs6 && rr.updateVerticesData(ar.j.UV6Kind, this.uvs6, Sr, Qr), this.colors && rr.updateVerticesData(ar.j.ColorKind, this.colors, Sr, Qr), this.matricesIndices && rr.updateVerticesData(ar.j.MatricesIndicesKind, this.matricesIndices, Sr, Qr), this.matricesWeights && rr.updateVerticesData(ar.j.MatricesWeightsKind, this.matricesWeights, Sr, Qr), this.matricesIndicesExtra && rr.updateVerticesData(ar.j.MatricesIndicesExtraKind, this.matricesIndicesExtra, Sr, Qr), this.matricesWeightsExtra && rr.updateVerticesData(ar.j.MatricesWeightsExtraKind, this.matricesWeightsExtra, Sr, Qr), this.indices && rr.setIndices(this.indices, null), this
        }
        static _TransformVector3Coordinates(rr, Sr) {
          let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : rr.length;
          const ar = Wr.n.kU[0],
            jr = Wr.n.kU[1];
          for (let Ir = Qr; Ir < Qr + Zr; Ir += 3) Wr.u.FromArrayToRef(rr, Ir, ar), Wr.u.TransformCoordinatesToRef(ar, Sr, jr), rr[Ir] = jr.x, rr[Ir + 1] = jr.y, rr[Ir + 2] = jr.z
        }
        static _TransformVector3Normals(rr, Sr) {
          let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : rr.length;
          const ar = Wr.n.kU[0],
            jr = Wr.n.kU[1];
          for (let Ir = Qr; Ir < Qr + Zr; Ir += 3) Wr.u.FromArrayToRef(rr, Ir, ar), Wr.u.TransformNormalToRef(ar, Sr, jr), rr[Ir] = jr.x, rr[Ir + 1] = jr.y, rr[Ir + 2] = jr.z
        }
        static _TransformVector4Normals(rr, Sr) {
          let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : rr.length;
          const ar = Wr.n.Vector4[0],
            jr = Wr.n.Vector4[1];
          for (let Ir = Qr; Ir < Qr + Zr; Ir += 4) Wr.x.FromArrayToRef(rr, Ir, ar), Wr.x.TransformNormalToRef(ar, Sr, jr), rr[Ir] = jr.x, rr[Ir + 1] = jr.y, rr[Ir + 2] = jr.z, rr[Ir + 3] = jr.w
        }
        static _FlipFaces(rr) {
          let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : rr.length;
          for (let Zr = Sr; Zr < Sr + Qr; Zr += 3) {
            const Sr = rr[Zr + 1];
            rr[Zr + 1] = rr[Zr + 2], rr[Zr + 2] = Sr
          }
        }
        transform(Sr) {
          const Qr = Sr.determinant() < 0;
          return this.positions && rr._TransformVector3Coordinates(this.positions, Sr), this.normals && rr._TransformVector3Normals(this.normals, Sr), this.tangents && rr._TransformVector4Normals(this.tangents, Sr), Qr && this.indices && rr._FlipFaces(this.indices), this
        }
        splitBasedOnMaterialID() {
          if (!this.materialInfos || this.materialInfos.length < 2) return [this];
          const Sr = [];
          for (const Qr of this.materialInfos) {
            const Zr = new rr;
            if (this.positions && (Zr.positions = this.positions.slice(3 * Qr.verticesStart, 3 * (Qr.verticesCount + Qr.verticesStart))), this.normals && (Zr.normals = this.normals.slice(3 * Qr.verticesStart, 3 * (Qr.verticesCount + Qr.verticesStart))), this.tangents && (Zr.tangents = this.tangents.slice(4 * Qr.verticesStart, 4 * (Qr.verticesCount + Qr.verticesStart))), this.colors && (Zr.colors = this.colors.slice(4 * Qr.verticesStart, 4 * (Qr.verticesCount + Qr.verticesStart))), this.uvs && (Zr.uvs = this.uvs.slice(2 * Qr.verticesStart, 2 * (Qr.verticesCount + Qr.verticesStart))), this.uvs2 && (Zr.uvs2 = this.uvs2.slice(2 * Qr.verticesStart, 2 * (Qr.verticesCount + Qr.verticesStart))), this.uvs3 && (Zr.uvs3 = this.uvs3.slice(2 * Qr.verticesStart, 2 * (Qr.verticesCount + Qr.verticesStart))), this.uvs4 && (Zr.uvs4 = this.uvs4.slice(2 * Qr.verticesStart, 2 * (Qr.verticesCount + Qr.verticesStart))), this.uvs5 && (Zr.uvs5 = this.uvs5.slice(2 * Qr.verticesStart, 2 * (Qr.verticesCount + Qr.verticesStart))), this.uvs6 && (Zr.uvs6 = this.uvs6.slice(2 * Qr.verticesStart, 2 * (Qr.verticesCount + Qr.verticesStart))), this.matricesIndices && (Zr.matricesIndices = this.matricesIndices.slice(4 * Qr.verticesStart, 4 * (Qr.verticesCount + Qr.verticesStart))), this.matricesIndicesExtra && (Zr.matricesIndicesExtra = this.matricesIndicesExtra.slice(4 * Qr.verticesStart, 4 * (Qr.verticesCount + Qr.verticesStart))), this.matricesWeights && (Zr.matricesWeights = this.matricesWeights.slice(4 * Qr.verticesStart, 4 * (Qr.verticesCount + Qr.verticesStart))), this.matricesWeightsExtra && (Zr.matricesWeightsExtra = this.matricesWeightsExtra.slice(4 * Qr.verticesStart, 4 * (Qr.verticesCount + Qr.verticesStart))), this.indices) {
              Zr.indices = [];
              for (let rr = Qr.indexStart; rr < Qr.indexStart + Qr.indexCount; rr++) Zr.indices.push(this.indices[rr] - Qr.verticesStart)
            }
            const Wr = new Nr;
            Wr.indexStart = 0, Wr.indexCount = Zr.indices ? Zr.indices.length : 0, Wr.materialIndex = Qr.materialIndex, Wr.verticesStart = 0, Wr.verticesCount = (Zr.positions ? Zr.positions.length : 0) / 3, Zr.materialInfos = [Wr], Sr.push(Zr)
          }
          return Sr
        }
        merge(rr) {
          let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            Qr = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            Zr = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            Wr = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
          const ar = Array.isArray(rr) ? rr.map((rr => ({
            vertexData: rr
          }))) : [{
            vertexData: rr
          }];
          return (0, pr.o)(this._mergeCoroutine(void 0, ar, Sr, !1, Qr, Zr, Wr))
        }* _mergeCoroutine(Sr, Qr) {
          let Zr = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            Wr = arguments.length > 3 ? arguments[3] : void 0,
            jr = arguments.length > 4 ? arguments[4] : void 0,
            Ir = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
            fr = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
          this._validate();
          let Er = Qr.map((rr => rr.vertexData)),
            pr = this;
          if (fr)
            for (const rr of Er) rr && (rr._validate(), !this.normals && rr.normals && (this.normals = new Float32Array(this.positions.length)), !this.tangents && rr.tangents && (this.tangents = new Float32Array(this.positions.length / 3 * 4)), !this.uvs && rr.uvs && (this.uvs = new Float32Array(this.positions.length / 3 * 2)), !this.uvs2 && rr.uvs2 && (this.uvs2 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs3 && rr.uvs3 && (this.uvs3 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs4 && rr.uvs4 && (this.uvs4 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs5 && rr.uvs5 && (this.uvs5 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs6 && rr.uvs6 && (this.uvs6 = new Float32Array(this.positions.length / 3 * 2)), !this.colors && rr.colors && (this.colors = new Float32Array(this.positions.length / 3 * 4), this.colors.fill(1)), !this.matricesIndices && rr.matricesIndices && (this.matricesIndices = new Float32Array(this.positions.length / 3 * 4)), !this.matricesWeights && rr.matricesWeights && (this.matricesWeights = new Float32Array(this.positions.length / 3 * 4)), !this.matricesIndicesExtra && rr.matricesIndicesExtra && (this.matricesIndicesExtra = new Float32Array(this.positions.length / 3 * 4)), !this.matricesWeightsExtra && rr.matricesWeightsExtra && (this.matricesWeightsExtra = new Float32Array(this.positions.length / 3 * 4)));
          for (const rr of Er)
            if (rr)
              if (fr) this.normals && !rr.normals && (rr.normals = new Float32Array(rr.positions.length)), this.tangents && !rr.tangents && (rr.tangents = new Float32Array(rr.positions.length / 3 * 4)), this.uvs && !rr.uvs && (rr.uvs = new Float32Array(rr.positions.length / 3 * 2)), this.uvs2 && !rr.uvs2 && (rr.uvs2 = new Float32Array(rr.positions.length / 3 * 2)), this.uvs3 && !rr.uvs3 && (rr.uvs3 = new Float32Array(rr.positions.length / 3 * 2)), this.uvs4 && !rr.uvs4 && (rr.uvs4 = new Float32Array(rr.positions.length / 3 * 2)), this.uvs5 && !rr.uvs5 && (rr.uvs5 = new Float32Array(rr.positions.length / 3 * 2)), this.uvs6 && !rr.uvs6 && (rr.uvs6 = new Float32Array(rr.positions.length / 3 * 2)), this.colors && !rr.colors && (rr.colors = new Float32Array(rr.positions.length / 3 * 4), rr.colors.fill(1)), this.matricesIndices && !rr.matricesIndices && (rr.matricesIndices = new Float32Array(rr.positions.length / 3 * 4)), this.matricesWeights && !rr.matricesWeights && (rr.matricesWeights = new Float32Array(rr.positions.length / 3 * 4)), this.matricesIndicesExtra && !rr.matricesIndicesExtra && (rr.matricesIndicesExtra = new Float32Array(rr.positions.length / 3 * 4)), this.matricesWeightsExtra && !rr.matricesWeightsExtra && (rr.matricesWeightsExtra = new Float32Array(rr.positions.length / 3 * 4));
              else if (rr._validate(), !this.normals !== !rr.normals || !this.tangents !== !rr.tangents || !this.uvs !== !rr.uvs || !this.uvs2 !== !rr.uvs2 || !this.uvs3 !== !rr.uvs3 || !this.uvs4 !== !rr.uvs4 || !this.uvs5 !== !rr.uvs5 || !this.uvs6 !== !rr.uvs6 || !this.colors !== !rr.colors || !this.matricesIndices !== !rr.matricesIndices || !this.matricesWeights !== !rr.matricesWeights || !this.matricesIndicesExtra !== !rr.matricesIndicesExtra || !this.matricesWeightsExtra !== !rr.matricesWeightsExtra) throw new Error("Cannot merge vertex data that do not have the same set of attributes");
          if (Ir) {
            let rr, Zr = 0,
              Wr = 0;
            const ar = [];
            let jr = null;
            const Ir = [];
            for (const Qr of this.splitBasedOnMaterialID()) Ir.push({
              vertexData: Qr,
              transform: Sr
            });
            for (const Sr of Qr)
              if (Sr.vertexData)
                for (const rr of Sr.vertexData.splitBasedOnMaterialID()) Ir.push({
                  vertexData: rr,
                  transform: Sr.transform
                });
            Ir.sort(((rr, Sr) => {
              const Qr = rr.vertexData.materialInfos ? rr.vertexData.materialInfos[0].materialIndex : 0,
                Zr = Sr.vertexData.materialInfos ? Sr.vertexData.materialInfos[0].materialIndex : 0;
              return Qr > Zr ? 1 : Qr === Zr ? 0 : -1
            }));
            for (const Sr of Ir) {
              const Qr = Sr.vertexData;
              if (rr = Qr.materialInfos ? Qr.materialInfos[0].materialIndex : 0, jr && jr.materialIndex === rr) jr.indexCount += Qr.indices.length, jr.verticesCount += Qr.positions.length / 3;
              else {
                const Sr = new Nr;
                Sr.materialIndex = rr, Sr.indexStart = Zr, Sr.indexCount = Qr.indices.length, Sr.verticesStart = Wr, Sr.verticesCount = Qr.positions.length / 3, ar.push(Sr), jr = Sr
              }
              Zr += Qr.indices.length, Wr += Qr.positions.length / 3
            }
            const fr = Ir.splice(0, 1)[0];
            pr = fr.vertexData, Sr = fr.transform, Er = Ir.map((rr => rr.vertexData)), Qr = Ir, this.materialInfos = ar
          }
          const xr = Er.reduce(((rr, Sr) => rr + (Sr.indices?.length ?? 0)), pr.indices?.length ?? 0);
          let mr = jr || Er.some((rr => rr.indices === pr.indices)) ? pr.indices?.slice() : pr.indices;
          if (xr > 0) {
            let ar = mr?.length ?? 0;
            if (mr || (mr = new Array(xr)), mr.length !== xr) {
              if (Array.isArray(mr)) mr.length = xr;
              else {
                const rr = Zr || mr instanceof Uint32Array ? new Uint32Array(xr) : new Uint16Array(xr);
                rr.set(mr), mr = rr
              }
              Sr && Sr.determinant() < 0 && rr._FlipFaces(mr, 0, ar)
            }
            let jr = pr.positions ? pr.positions.length / 3 : 0;
            for (const {
                vertexData: Sr,
                transform: Zr
              }
              of Qr)
              if (Sr.indices) {
                for (let rr = 0; rr < Sr.indices.length; rr++) mr[ar + rr] = Sr.indices[rr] + jr;
                Zr && Zr.determinant() < 0 && rr._FlipFaces(mr, ar, Sr.indices.length), jr += Sr.positions.length / 3, ar += Sr.indices.length, Wr && (yield)
              }
          }
          return this.indices = mr, this.positions = rr._MergeElement(ar.j.PositionKind, pr.positions, Sr, Qr.map((rr => [rr.vertexData.positions, rr.transform]))), Wr && (yield), pr.normals && (this.normals = rr._MergeElement(ar.j.NormalKind, pr.normals, Sr, Qr.map((rr => [rr.vertexData.normals, rr.transform]))), Wr && (yield)), pr.tangents && (this.tangents = rr._MergeElement(ar.j.TangentKind, pr.tangents, Sr, Qr.map((rr => [rr.vertexData.tangents, rr.transform]))), Wr && (yield)), pr.uvs && (this.uvs = rr._MergeElement(ar.j.UVKind, pr.uvs, Sr, Qr.map((rr => [rr.vertexData.uvs, rr.transform]))), Wr && (yield)), pr.uvs2 && (this.uvs2 = rr._MergeElement(ar.j.UV2Kind, pr.uvs2, Sr, Qr.map((rr => [rr.vertexData.uvs2, rr.transform]))), Wr && (yield)), pr.uvs3 && (this.uvs3 = rr._MergeElement(ar.j.UV3Kind, pr.uvs3, Sr, Qr.map((rr => [rr.vertexData.uvs3, rr.transform]))), Wr && (yield)), pr.uvs4 && (this.uvs4 = rr._MergeElement(ar.j.UV4Kind, pr.uvs4, Sr, Qr.map((rr => [rr.vertexData.uvs4, rr.transform]))), Wr && (yield)), pr.uvs5 && (this.uvs5 = rr._MergeElement(ar.j.UV5Kind, pr.uvs5, Sr, Qr.map((rr => [rr.vertexData.uvs5, rr.transform]))), Wr && (yield)), pr.uvs6 && (this.uvs6 = rr._MergeElement(ar.j.UV6Kind, pr.uvs6, Sr, Qr.map((rr => [rr.vertexData.uvs6, rr.transform]))), Wr && (yield)), pr.colors && (this.colors = rr._MergeElement(ar.j.ColorKind, pr.colors, Sr, Qr.map((rr => [rr.vertexData.colors, rr.transform]))), (void 0 !== pr.hasVertexAlpha || Qr.some((rr => void 0 !== rr.vertexData.hasVertexAlpha))) && (this.hasVertexAlpha = pr.hasVertexAlpha || Qr.some((rr => rr.vertexData.hasVertexAlpha))), Wr && (yield)), pr.matricesIndices && (this.matricesIndices = rr._MergeElement(ar.j.MatricesIndicesKind, pr.matricesIndices, Sr, Qr.map((rr => [rr.vertexData.matricesIndices, rr.transform]))), Wr && (yield)), pr.matricesWeights && (this.matricesWeights = rr._MergeElement(ar.j.MatricesWeightsKind, pr.matricesWeights, Sr, Qr.map((rr => [rr.vertexData.matricesWeights, rr.transform]))), Wr && (yield)), pr.matricesIndicesExtra && (this.matricesIndicesExtra = rr._MergeElement(ar.j.MatricesIndicesExtraKind, pr.matricesIndicesExtra, Sr, Qr.map((rr => [rr.vertexData.matricesIndicesExtra, rr.transform]))), Wr && (yield)), pr.matricesWeightsExtra && (this.matricesWeightsExtra = rr._MergeElement(ar.j.MatricesWeightsExtraKind, pr.matricesWeightsExtra, Sr, Qr.map((rr => [rr.vertexData.matricesWeightsExtra, rr.transform])))), this
        }
        static _MergeElement(Sr, Qr, Zr, Wr) {
          const jr = Wr.filter((rr => null !== rr[0] && void 0 !== rr[0]));
          if (!Qr && 0 == jr.length) return Qr;
          if (!Qr) return this._MergeElement(Sr, jr[0][0], jr[0][1], jr.slice(1));
          const Ir = jr.reduce(((rr, Sr) => rr + Sr[0].length), Qr.length),
            fr = Sr === ar.j.PositionKind ? rr._TransformVector3Coordinates : Sr === ar.j.NormalKind ? rr._TransformVector3Normals : Sr === ar.j.TangentKind ? rr._TransformVector4Normals : () => {};
          if (Qr instanceof Float32Array) {
            const rr = new Float32Array(Ir);
            rr.set(Qr), Zr && fr(rr, Zr, 0, Qr.length);
            let Sr = Qr.length;
            for (const [Qr, Zr] of jr) rr.set(Qr, Sr), Zr && fr(rr, Zr, Sr, Qr.length), Sr += Qr.length;
            return rr
          } {
            const rr = new Array(Ir);
            for (let Zr = 0; Zr < Qr.length; Zr++) rr[Zr] = Qr[Zr];
            Zr && fr(rr, Zr, 0, Qr.length);
            let Sr = Qr.length;
            for (const [Qr, Zr] of jr) {
              for (let Zr = 0; Zr < Qr.length; Zr++) rr[Sr + Zr] = Qr[Zr];
              Zr && fr(rr, Zr, Sr, Qr.length), Sr += Qr.length
            }
            return rr
          }
        }
        _validate() {
          if (!this.positions) throw new xr.i("Positions are required", xr.e.MeshInvalidPositionsError);
          const rr = (rr, Sr) => {
              const Qr = (0, ar.i)(rr);
              if (Sr.length % Qr !== 0) throw new Error("The " + rr + "s array count must be a multiple of " + Qr);
              return Sr.length / Qr
            },
            Sr = rr(ar.j.PositionKind, this.positions),
            Qr = (Qr, Zr) => {
              const Wr = rr(Qr, Zr);
              if (Wr !== Sr) throw new Error("The " + Qr + "s element count (" + Wr + ") does not match the positions count (" + Sr + ")")
            };
          this.normals && Qr(ar.j.NormalKind, this.normals), this.tangents && Qr(ar.j.TangentKind, this.tangents), this.uvs && Qr(ar.j.UVKind, this.uvs), this.uvs2 && Qr(ar.j.UV2Kind, this.uvs2), this.uvs3 && Qr(ar.j.UV3Kind, this.uvs3), this.uvs4 && Qr(ar.j.UV4Kind, this.uvs4), this.uvs5 && Qr(ar.j.UV5Kind, this.uvs5), this.uvs6 && Qr(ar.j.UV6Kind, this.uvs6), this.colors && Qr(ar.j.ColorKind, this.colors), this.matricesIndices && Qr(ar.j.MatricesIndicesKind, this.matricesIndices), this.matricesWeights && Qr(ar.j.MatricesWeightsKind, this.matricesWeights), this.matricesIndicesExtra && Qr(ar.j.MatricesIndicesExtraKind, this.matricesIndicesExtra), this.matricesWeightsExtra && Qr(ar.j.MatricesWeightsExtraKind, this.matricesWeightsExtra)
        }
        clone() {
          const Sr = this.serialize();
          return rr.Parse(Sr)
        }
        serialize() {
          const rr = {};
          if (this.positions && (rr.positions = Array.from(this.positions)), this.normals && (rr.normals = Array.from(this.normals)), this.tangents && (rr.tangents = Array.from(this.tangents)), this.uvs && (rr.uvs = Array.from(this.uvs)), this.uvs2 && (rr.uvs2 = Array.from(this.uvs2)), this.uvs3 && (rr.uvs3 = Array.from(this.uvs3)), this.uvs4 && (rr.uvs4 = Array.from(this.uvs4)), this.uvs5 && (rr.uvs5 = Array.from(this.uvs5)), this.uvs6 && (rr.uvs6 = Array.from(this.uvs6)), this.colors && (rr.colors = Array.from(this.colors), rr.hasVertexAlpha = this.hasVertexAlpha), this.matricesIndices && (rr.matricesIndices = Array.from(this.matricesIndices), rr.matricesIndicesExpanded = !0), this.matricesWeights && (rr.matricesWeights = Array.from(this.matricesWeights)), this.matricesIndicesExtra && (rr.matricesIndicesExtra = Array.from(this.matricesIndicesExtra), rr.matricesIndicesExtraExpanded = !0), this.matricesWeightsExtra && (rr.matricesWeightsExtra = Array.from(this.matricesWeightsExtra)), rr.indices = this.indices ? Array.from(this.indices) : [], this.materialInfos) {
            rr.materialInfos = [];
            for (const Sr of this.materialInfos) {
              const Qr = {
                indexStart: Sr.indexStart,
                indexCount: Sr.indexCount,
                materialIndex: Sr.materialIndex,
                verticesStart: Sr.verticesStart,
                verticesCount: Sr.verticesCount
              };
              rr.materialInfos.push(Qr)
            }
          }
          return rr
        }
        static ExtractFromMesh(Sr, Qr, Zr) {
          return rr._ExtractFrom(Sr, Qr, Zr)
        }
        static ExtractFromGeometry(Sr, Qr, Zr) {
          return rr._ExtractFrom(Sr, Qr, Zr)
        }
        static _ExtractFrom(Sr, Qr, Zr) {
          const Wr = new rr;
          if (Sr.isVerticesDataPresent(ar.j.PositionKind) && (Wr.positions = Sr.getVerticesData(ar.j.PositionKind, Qr, Zr)), Sr.isVerticesDataPresent(ar.j.NormalKind) && (Wr.normals = Sr.getVerticesData(ar.j.NormalKind, Qr, Zr)), Sr.isVerticesDataPresent(ar.j.TangentKind) && (Wr.tangents = Sr.getVerticesData(ar.j.TangentKind, Qr, Zr)), Sr.isVerticesDataPresent(ar.j.UVKind) && (Wr.uvs = Sr.getVerticesData(ar.j.UVKind, Qr, Zr)), Sr.isVerticesDataPresent(ar.j.UV2Kind) && (Wr.uvs2 = Sr.getVerticesData(ar.j.UV2Kind, Qr, Zr)), Sr.isVerticesDataPresent(ar.j.UV3Kind) && (Wr.uvs3 = Sr.getVerticesData(ar.j.UV3Kind, Qr, Zr)), Sr.isVerticesDataPresent(ar.j.UV4Kind) && (Wr.uvs4 = Sr.getVerticesData(ar.j.UV4Kind, Qr, Zr)), Sr.isVerticesDataPresent(ar.j.UV5Kind) && (Wr.uvs5 = Sr.getVerticesData(ar.j.UV5Kind, Qr, Zr)), Sr.isVerticesDataPresent(ar.j.UV6Kind) && (Wr.uvs6 = Sr.getVerticesData(ar.j.UV6Kind, Qr, Zr)), Sr.isVerticesDataPresent(ar.j.ColorKind)) {
            const rr = Sr.geometry || Sr,
              jr = rr.getVertexBuffer(ar.j.ColorKind),
              Ir = rr.getVerticesData(ar.j.ColorKind, Qr, Zr);
            if (3 === jr.getSize()) {
              const rr = new Float32Array(4 * Ir.length / 3);
              for (let Sr = 0, Qr = 0; Sr < Ir.length; Sr += 3, Qr += 4) rr[Qr] = Ir[Sr], rr[Qr + 1] = Ir[Sr + 1], rr[Qr + 2] = Ir[Sr + 2], rr[Qr + 3] = 1;
              Wr.colors = rr
            } else {
              if (4 !== jr.getSize()) throw new Error(`Unexpected number of color components: ${jr.getSize()}`);
              Wr.colors = Ir
            }
          }
          return Sr.isVerticesDataPresent(ar.j.MatricesIndicesKind) && (Wr.matricesIndices = Sr.getVerticesData(ar.j.MatricesIndicesKind, Qr, Zr)), Sr.isVerticesDataPresent(ar.j.MatricesWeightsKind) && (Wr.matricesWeights = Sr.getVerticesData(ar.j.MatricesWeightsKind, Qr, Zr)), Sr.isVerticesDataPresent(ar.j.MatricesIndicesExtraKind) && (Wr.matricesIndicesExtra = Sr.getVerticesData(ar.j.MatricesIndicesExtraKind, Qr, Zr)), Sr.isVerticesDataPresent(ar.j.MatricesWeightsExtraKind) && (Wr.matricesWeightsExtra = Sr.getVerticesData(ar.j.MatricesWeightsExtraKind, Qr, Zr)), Wr.indices = Sr.yar(Qr, Zr), Wr
        }
        static CreateRibbon(rr) {
          throw (0, jr.l)("ribbonBuilder")
        }
        static CreateBox(rr) {
          throw (0, jr.l)("boxBuilder")
        }
        static CreateTiledBox(rr) {
          throw (0, jr.l)("tiledBoxBuilder")
        }
        static CreateTiledPlane(rr) {
          throw (0, jr.l)("tiledPlaneBuilder")
        }
        static CreateSphere(rr) {
          throw (0, jr.l)("sphereBuilder")
        }
        static CreateCylinder(rr) {
          throw (0, jr.l)("cylinderBuilder")
        }
        static CreateTorus(rr) {
          throw (0, jr.l)("torusBuilder")
        }
        static CreateLineSystem(rr) {
          throw (0, jr.l)("linesBuilder")
        }
        static CreateDashedLines(rr) {
          throw (0, jr.l)("linesBuilder")
        }
        static CreateGround(rr) {
          throw (0, jr.l)("groundBuilder")
        }
        static CreateTiledGround(rr) {
          throw (0, jr.l)("groundBuilder")
        }
        static CreateGroundFromHeightMap(rr) {
          throw (0, jr.l)("groundBuilder")
        }
        static CreatePlane(rr) {
          throw (0, jr.l)("planeBuilder")
        }
        static CreateDisc(rr) {
          throw (0, jr.l)("discBuilder")
        }
        static CreatePolygon(rr, Sr, Qr, Zr, Wr, ar, Ir) {
          throw (0, jr.l)("polygonBuilder")
        }
        static CreateIcoSphere(rr) {
          throw (0, jr.l)("icoSphereBuilder")
        }
        static CreatePolyhedron(rr) {
          throw (0, jr.l)("polyhedronBuilder")
        }
        static CreateCapsule() {
          arguments.length > 0 && void 0 !== arguments[0] || Wr.u.Up();
          throw (0, jr.l)("capsuleBuilder")
        }
        static CreateTorusKnot(rr) {
          throw (0, jr.l)("torusKnotBuilder")
        }
        static ComputeNormals(rr, Sr, Qr, Zr) {
          let ar, jr, Ir, fr, Er, pr, xr, mr, Nr, Ur, tr, hr, zr, Yr, nr, er, Kr, yr, Br, Tr, vr = !1,
            Or = !1,
            Lr = !1,
            lr = !1,
            Xr = 1,
            Pr = 0,
            Hr = null;
          Zr && (vr = !!Zr.facetNormals, Or = !!Zr.facetPositions, Lr = !!Zr.facetPartitioning, Xr = !0 === Zr.useRightHandedSystem ? -1 : 1, Pr = Zr.ratio || 0, lr = !!Zr.depthSort, Hr = Zr.distanceTo, lr && void 0 === Hr && (Hr = Wr.u.Zero()));
          let qr = 0,
            Rr = 0,
            gr = 0,
            Cr = 0;
          for (Lr && Zr && Zr.bbSize && (qr = Zr.subDiv.X * Pr / Zr.bbSize.x, Rr = Zr.subDiv.Y * Pr / Zr.bbSize.y, gr = Zr.subDiv.Z * Pr / Zr.bbSize.z, Cr = Zr.subDiv.max * Zr.subDiv.max, Zr.facetPartitioning.length = 0), ar = 0; ar < rr.length; ar++) Qr[ar] = 0;
          const Mr = Sr.length / 3 | 0;
          for (ar = 0; ar < Mr; ar++) {
            if (hr = 3 * Sr[3 * ar], zr = hr + 1, Yr = hr + 2, nr = 3 * Sr[3 * ar + 1], er = nr + 1, Kr = nr + 2, yr = 3 * Sr[3 * ar + 2], Br = yr + 1, Tr = yr + 2, jr = rr[hr] - rr[nr], Ir = rr[zr] - rr[er], fr = rr[Yr] - rr[Kr], Er = rr[yr] - rr[nr], pr = rr[Br] - rr[er], xr = rr[Tr] - rr[Kr], mr = Xr * (Ir * xr - fr * pr), Nr = Xr * (fr * Er - jr * xr), Ur = Xr * (jr * pr - Ir * Er), tr = Math.sqrt(mr * mr + Nr * Nr + Ur * Ur), tr = 0 === tr ? 1 : tr, mr /= tr, Nr /= tr, Ur /= tr, vr && Zr && (Zr.facetNormals[ar].x = mr, Zr.facetNormals[ar].y = Nr, Zr.facetNormals[ar].z = Ur), Or && Zr && (Zr.facetPositions[ar].x = (rr[hr] + rr[nr] + rr[yr]) / 3, Zr.facetPositions[ar].y = (rr[zr] + rr[er] + rr[Br]) / 3, Zr.facetPositions[ar].z = (rr[Yr] + rr[Kr] + rr[Tr]) / 3), Lr && Zr) {
              const Sr = Math.floor((Zr.facetPositions[ar].x - Zr.bInfo.minimum.x * Pr) * qr),
                Qr = Math.floor((Zr.facetPositions[ar].y - Zr.bInfo.minimum.y * Pr) * Rr),
                Wr = Math.floor((Zr.facetPositions[ar].z - Zr.bInfo.minimum.z * Pr) * gr),
                jr = Math.floor((rr[hr] - Zr.bInfo.minimum.x * Pr) * qr),
                Ir = Math.floor((rr[zr] - Zr.bInfo.minimum.y * Pr) * Rr),
                fr = Math.floor((rr[Yr] - Zr.bInfo.minimum.z * Pr) * gr),
                Er = Math.floor((rr[nr] - Zr.bInfo.minimum.x * Pr) * qr),
                pr = Math.floor((rr[er] - Zr.bInfo.minimum.y * Pr) * Rr),
                xr = Math.floor((rr[Kr] - Zr.bInfo.minimum.z * Pr) * gr),
                mr = Math.floor((rr[yr] - Zr.bInfo.minimum.x * Pr) * qr),
                Nr = Math.floor((rr[Br] - Zr.bInfo.minimum.y * Pr) * Rr),
                Ur = Math.floor((rr[Tr] - Zr.bInfo.minimum.z * Pr) * gr),
                tr = jr + Zr.subDiv.max * Ir + Cr * fr,
                vr = Er + Zr.subDiv.max * pr + Cr * xr,
                Or = mr + Zr.subDiv.max * Nr + Cr * Ur,
                Lr = Sr + Zr.subDiv.max * Qr + Cr * Wr;
              Zr.facetPartitioning[Lr] = Zr.facetPartitioning[Lr] ? Zr.facetPartitioning[Lr] : [], Zr.facetPartitioning[tr] = Zr.facetPartitioning[tr] ? Zr.facetPartitioning[tr] : [], Zr.facetPartitioning[vr] = Zr.facetPartitioning[vr] ? Zr.facetPartitioning[vr] : [], Zr.facetPartitioning[Or] = Zr.facetPartitioning[Or] ? Zr.facetPartitioning[Or] : [], Zr.facetPartitioning[tr].push(ar), vr != tr && Zr.facetPartitioning[vr].push(ar), Or != vr && Or != tr && Zr.facetPartitioning[Or].push(ar), Lr != tr && Lr != vr && Lr != Or && Zr.facetPartitioning[Lr].push(ar)
            }
            if (lr && Zr && Zr.facetPositions) {
              const rr = Zr.depthSortedFacets[ar];
              rr.ind = 3 * ar, rr.sqDistance = Wr.u.DistanceSquared(Zr.facetPositions[ar], Hr)
            }
            Qr[hr] += mr, Qr[zr] += Nr, Qr[Yr] += Ur, Qr[nr] += mr, Qr[er] += Nr, Qr[Kr] += Ur, Qr[yr] += mr, Qr[Br] += Nr, Qr[Tr] += Ur
          }
          for (ar = 0; ar < Qr.length / 3; ar++) mr = Qr[3 * ar], Nr = Qr[3 * ar + 1], Ur = Qr[3 * ar + 2], tr = Math.sqrt(mr * mr + Nr * Nr + Ur * Ur), tr = 0 === tr ? 1 : tr, mr /= tr, Nr /= tr, Ur /= tr, Qr[3 * ar] = mr, Qr[3 * ar + 1] = Nr, Qr[3 * ar + 2] = Ur
        }
        static _ComputeSides(Sr, Qr, Zr, ar, jr, Ir, fr) {
          const Er = Zr.length,
            pr = ar.length;
          let xr, mr;
          switch (Sr = Sr || rr.DEFAULTSIDE) {
            case rr.FRONTSIDE:
              break;
            case rr.BACKSIDE:
              for (xr = 0; xr < Er; xr += 3) {
                const rr = Zr[xr];
                Zr[xr] = Zr[xr + 2], Zr[xr + 2] = rr
              }
              for (mr = 0; mr < pr; mr++) ar[mr] = -ar[mr];
              break;
            case rr.DOUBLESIDE: {
              const rr = Qr.length,
                Sr = rr / 3;
              for (let Zr = 0; Zr < rr; Zr++) Qr[rr + Zr] = Qr[Zr];
              for (xr = 0; xr < Er; xr += 3) Zr[xr + Er] = Zr[xr + 2] + Sr, Zr[xr + 1 + Er] = Zr[xr + 1] + Sr, Zr[xr + 2 + Er] = Zr[xr] + Sr;
              for (mr = 0; mr < pr; mr++) ar[pr + mr] = -ar[mr];
              const Nr = jr.length;
              let Ur;
              for (Ur = 0; Ur < Nr; Ur++) jr[Ur + Nr] = jr[Ur];
              for (Ir = Ir || new Wr.x(0, 0, 1, 1), fr = fr || new Wr.x(0, 0, 1, 1), Ur = 0, xr = 0; xr < Nr / 2; xr++) jr[Ur] = Ir.x + (Ir.z - Ir.x) * jr[Ur], jr[Ur + 1] = Ir.y + (Ir.w - Ir.y) * jr[Ur + 1], jr[Ur + Nr] = fr.x + (fr.z - fr.x) * jr[Ur + Nr], jr[Ur + Nr + 1] = fr.y + (fr.w - fr.y) * jr[Ur + Nr + 1], Ur += 2;
              break
            }
          }
        }
        static Parse(Sr) {
          const Qr = new rr,
            Zr = Sr.positions;
          Zr && Qr.set(Zr, ar.j.PositionKind);
          const Wr = Sr.normals;
          Wr && Qr.set(Wr, ar.j.NormalKind);
          const jr = Sr.tangents;
          jr && Qr.set(jr, ar.j.TangentKind);
          const fr = Sr.uvs;
          fr && Qr.set(fr, ar.j.UVKind);
          const Er = Sr.uvs2;
          Er && Qr.set(Er, ar.j.UV2Kind);
          const pr = Sr.uvs3;
          pr && Qr.set(pr, ar.j.UV3Kind);
          const xr = Sr.uvs4;
          xr && Qr.set(xr, ar.j.UV4Kind);
          const mr = Sr.uvs5;
          mr && Qr.set(mr, ar.j.UV5Kind);
          const Ur = Sr.uvs6;
          Ur && Qr.set(Ur, ar.j.UV6Kind);
          const tr = Sr.colors;
          tr && (Qr.set(Ir.f.CheckColors4(tr, Zr.length / 3), ar.j.ColorKind), void 0 !== Sr.hasVertexAlpha && (Qr.hasVertexAlpha = Sr.hasVertexAlpha));
          const hr = Sr.matricesIndices;
          hr && Qr.set(hr, ar.j.MatricesIndicesKind);
          const zr = Sr.matricesWeights;
          zr && Qr.set(zr, ar.j.MatricesWeightsKind);
          const Yr = Sr.indices;
          Yr && (Qr.indices = Yr);
          const nr = Sr.materialInfos;
          if (nr) {
            Qr.materialInfos = [];
            for (const rr of nr) {
              const Sr = new Nr;
              Sr.indexCount = rr.indexCount, Sr.indexStart = rr.indexStart, Sr.verticesCount = rr.verticesCount, Sr.verticesStart = rr.verticesStart, Sr.materialIndex = rr.materialIndex, Qr.materialInfos.push(Sr)
            }
          }
          return Qr
        }
        static ImportVertexData(Sr, Qr) {
          const Zr = rr.Parse(Sr);
          Qr.setAllVerticesData(Zr, Sr.updatable)
        }
      }, (() => {
        const Wr = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Sr = [Er.j.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], Qr = [Er.j.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], Ur = [Er.j.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], tr = [Er.j.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], (0, Zr.k)(rr, null, Sr, {
          kind: "method",
          name: "_TransformVector3Coordinates",
          static: !0,
          private: !1,
          access: {
            has: rr => "_TransformVector3Coordinates" in rr,
            get: rr => rr._TransformVector3Coordinates
          },
          metadata: Wr
        }, null, hr), (0, Zr.k)(rr, null, Qr, {
          kind: "method",
          name: "_TransformVector3Normals",
          static: !0,
          private: !1,
          access: {
            has: rr => "_TransformVector3Normals" in rr,
            get: rr => rr._TransformVector3Normals
          },
          metadata: Wr
        }, null, hr), (0, Zr.k)(rr, null, Ur, {
          kind: "method",
          name: "_TransformVector4Normals",
          static: !0,
          private: !1,
          access: {
            has: rr => "_TransformVector4Normals" in rr,
            get: rr => rr._TransformVector4Normals
          },
          metadata: Wr
        }, null, hr), (0, Zr.k)(rr, null, tr, {
          kind: "method",
          name: "_FlipFaces",
          static: !0,
          private: !1,
          access: {
            has: rr => "_FlipFaces" in rr,
            get: rr => rr._FlipFaces
          },
          metadata: Wr
        }, null, hr), Wr && Object.defineProperty(rr, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Wr
        })
      })(), rr.FRONTSIDE = ((0, Zr.m)(rr, hr), 0), rr.BACKSIDE = 1, rr.DOUBLESIDE = 2, rr.DEFAULTSIDE = 0, rr._UniqueIdGenerator = 0, rr
    })()
  },
  42318: (rr, Sr, Qr) => {
    var Zr = Qr(38560),
      Wr = Qr(40246),
      ar = Qr(42147),
      jr = Qr(42243),
      Ir = Qr(41995);
    const fr = "bakedVertexAnimationSettingsInstanced";

    function Er(rr) {
      const Sr = rr.bakedVertexAnimationManager?.texture?.getInternalTexture()?._bufferView;
      return Sr instanceof Float32Array || Sr instanceof Uint16Array
    }

    function pr(rr, Sr, Qr, Zr) {
      Qr.Srr(Number.POSITIVE_INFINITY), Zr.Srr(Number.NEGATIVE_INFINITY);
      for (let Wr = 0; Wr < 3 * Sr; Wr += 3) {
        const Sr = rr[Wr],
          ar = rr[Wr + 1],
          jr = rr[Wr + 2];
        Sr < Qr.x && (Qr.x = Sr), ar < Qr.y && (Qr.y = ar), jr < Qr.z && (Qr.z = jr), Sr > Zr.x && (Zr.x = Sr), ar > Zr.y && (Zr.y = ar), jr > Zr.z && (Zr.z = jr)
      }
    }

    function xr(rr, Sr, Qr) {
      Qr && (rr.x -= rr.x * Qr.x + Qr.y, rr.y -= rr.y * Qr.x + Qr.y, rr.z -= rr.z * Qr.x + Qr.y, Sr.x += Sr.x * Qr.x + Qr.y, Sr.y += Sr.y * Qr.x + Qr.y, Sr.z += Sr.z * Qr.x + Qr.y)
    }

    function mr(rr, Sr, Qr, Wr, ar) {
      const jr = Zr.n.kU[7],
        Ir = Zr.n.kU[8];
      for (let fr = 0; fr < 2; ++fr)
        for (let Er = 0; Er < 2; ++Er)
          for (let pr = 0; pr < 2; ++pr) jr.set(fr ? Sr.x : rr.x, Er ? Sr.y : rr.y, pr ? Sr.z : rr.z), Zr.u.TransformCoordinatesToRef(jr, Qr, Ir), Wr.minimizeInPlace(Ir), ar.maximizeInPlace(Ir)
    }

    function Nr(rr, Sr, Qr, Wr, ar) {
      const jr = Zr.n.kU[7];
      for (let Ir = 0; Ir < 3 * Sr; Ir += 3) Zr.u.TransformCoordinatesFromFloatsToRef(rr[Ir], rr[Ir + 1], rr[Ir + 2], Qr, jr), Wr.minimizeInPlace(jr), ar.maximizeInPlace(jr)
    }
    let Ur = !1;
    Ur || (Ur = !0, jr.c.prototype.thinInstanceAdd = function(rr) {
      let Sr = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (!this.eC().MU().getCaps().instancedArrays) return Wr.c.Error("Thin Instances are not supported on this device as Instanced Array extension not supported"), -1;
      this._thinInstanceUpdateBufferSize("matrix", Array.isArray(rr) ? rr.length : 1);
      const Qr = this._thinInstanceDataStorage.instancesCount;
      if (Array.isArray(rr))
        for (let Zr = 0; Zr < rr.length; ++Zr) this.thinInstanceSetMatrixAt(this._thinInstanceDataStorage.instancesCount++, rr[Zr], Zr === rr.length - 1 && Sr);
      else this.thinInstanceSetMatrixAt(this._thinInstanceDataStorage.instancesCount++, rr, Sr);
      return Qr
    }, jr.c.prototype.thinInstanceAddSelf = function() {
      let rr = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      return this.thinInstanceAdd(Zr.d.IdentityReadOnly, rr)
    }, jr.c.prototype.thinInstanceRegisterAttribute = function(rr, Sr) {
      rr === Ir.j.ColorKind && (rr = Ir.j.ColorInstanceKind), this.removeVerticesData(rr), this._thinInstanceInitializeUserStorage(), this._userThinInstanceBuffersStorage.strides[rr] = Sr, this._userThinInstanceBuffersStorage.sizes[rr] = Sr * Math.max(32, this._thinInstanceDataStorage.instancesCount), this._userThinInstanceBuffersStorage.data[rr] = new Float32Array(this._userThinInstanceBuffersStorage.sizes[rr]), this._userThinInstanceBuffersStorage.vertexBuffers[rr] = new Ir.j(this.MU(), this._userThinInstanceBuffersStorage.data[rr], rr, !0, !1, Sr, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[rr])
    }, jr.c.prototype.thinInstanceSetMatrixAt = function(rr, Sr) {
      let Qr = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      if (!this._thinInstanceDataStorage.matrixData || rr >= this._thinInstanceDataStorage.instancesCount) return !1;
      const Zr = this._thinInstanceDataStorage.matrixData;
      return Sr.copyToArray(Zr, 16 * rr), this._thinInstanceDataStorage.worldMatrices && (this._thinInstanceDataStorage.worldMatrices[rr] = Sr), Qr && (this.nrr("matrix"), this.VU || this.thinInstanceRefreshBoundingInfo(!1)), !0
    }, jr.c.prototype.thinInstanceSetAttributeAt = function(rr, Sr, Qr) {
      let Zr = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      return rr === Ir.j.ColorKind && (rr = Ir.j.ColorInstanceKind), !(!this._userThinInstanceBuffersStorage || !this._userThinInstanceBuffersStorage.data[rr] || Sr >= this._thinInstanceDataStorage.instancesCount) && (this._thinInstanceUpdateBufferSize(rr, 0), this._userThinInstanceBuffersStorage.data[rr].set(Qr, Sr * this._userThinInstanceBuffersStorage.strides[rr]), Zr && this.nrr(rr), !0)
    }, Object.defineProperty(jr.c.prototype, "frr", {
      get: function() {
        return this._thinInstanceDataStorage.instancesCount
      },
      set: function(rr) {
        const Sr = this._thinInstanceDataStorage.matrixData ?? this.source?._thinInstanceDataStorage.matrixData;
        rr <= (Sr ? Sr.length / 16 : 0) && (this._thinInstanceDataStorage.instancesCount = rr)
      },
      enumerable: !0,
      configurable: !0
    }), jr.c.prototype._thinInstanceCreateMatrixBuffer = function(rr, Sr) {
      let Qr = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      const Zr = new Ir.c(this.MU(), Sr, !Qr, 16, !1, !0);
      for (let Wr = 0; Wr < 4; Wr++) this.setVerticesBuffer(Zr.createVertexBuffer(rr + Wr, 4 * Wr, 4));
      return Zr
    }, jr.c.prototype.vrr = function(rr, Sr) {
      let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        Zr = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      if (Qr = Qr || 16, "matrix" === rr) this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = null, this._thinInstanceDataStorage.matrixBufferSize = Sr ? Sr.length : 32 * Qr, this._thinInstanceDataStorage.matrixData = Sr, this._thinInstanceDataStorage.worldMatrices = null, null !== Sr ? (this._thinInstanceDataStorage.instancesCount = Sr.length / Qr, this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", Sr, Zr), this.VU || this.thinInstanceRefreshBoundingInfo(!1)) : (this._thinInstanceDataStorage.instancesCount = 0, this.VU || this.refreshBoundingInfo());
      else if ("previousMatrix" === rr) this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = null, this._thinInstanceDataStorage.previousMatrixData = Sr, null !== Sr && (this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", Sr, Zr));
      else if ("splatIndex" === rr && Sr) {
        this._thinInstanceInitializeUserStorage(), this._thinInstanceDataStorage.instancesCount = Sr.length / Qr, this._userThinInstanceBuffersStorage.data[rr] = Sr, this._userThinInstanceBuffersStorage.strides[rr] = Qr, this._userThinInstanceBuffersStorage.sizes[rr] = Sr.length;
        const Zr = new Ir.c(this.MU(), Sr, !0, 16, !1, !0);
        this._thinInstanceDataStorage.matrixBuffer = Zr;
        for (let Sr = 0; Sr < 4; Sr++) this.setVerticesBuffer(Zr.createVertexBuffer(rr + Sr, 4 * Sr, 4))
      } else rr === Ir.j.ColorKind && (rr = Ir.j.ColorInstanceKind), null === Sr ? this._userThinInstanceBuffersStorage?.data[rr] && (this.removeVerticesData(rr), delete this._userThinInstanceBuffersStorage.data[rr], delete this._userThinInstanceBuffersStorage.strides[rr], delete this._userThinInstanceBuffersStorage.sizes[rr], delete this._userThinInstanceBuffersStorage.vertexBuffers[rr]) : (this._thinInstanceInitializeUserStorage(), this._userThinInstanceBuffersStorage.data[rr] = Sr, this._userThinInstanceBuffersStorage.strides[rr] = Qr, this._userThinInstanceBuffersStorage.sizes[rr] = Sr.length, this._userThinInstanceBuffersStorage.vertexBuffers[rr] = new Ir.j(this.MU(), Sr, rr, !Zr, !1, Qr, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[rr]))
    }, jr.c.prototype.nrr = function(rr) {
      "matrix" === rr ? (this.thinInstanceAllowAutomaticStaticBufferRecreation && this._thinInstanceDataStorage.matrixBuffer && !this._thinInstanceDataStorage.matrixBuffer.isUpdatable() && this._thinInstanceRecreateBuffer(rr), this._thinInstanceDataStorage.matrixBuffer?.updateDirectly(this._thinInstanceDataStorage.matrixData, 0, this._thinInstanceDataStorage.instancesCount)) : "previousMatrix" === rr ? (this.thinInstanceAllowAutomaticStaticBufferRecreation && this._thinInstanceDataStorage.previousMatrixBuffer && !this._thinInstanceDataStorage.previousMatrixBuffer.isUpdatable() && this._thinInstanceRecreateBuffer(rr), this._thinInstanceDataStorage.previousMatrixBuffer?.updateDirectly(this._thinInstanceDataStorage.previousMatrixData, 0, this._thinInstanceDataStorage.instancesCount)) : "splatIndex" === rr ? this._thinInstanceDataStorage.matrixBuffer?.updateDirectly(this._userThinInstanceBuffersStorage.data[rr], 0, this._thinInstanceDataStorage.instancesCount) : (rr === Ir.j.ColorKind && (rr = Ir.j.ColorInstanceKind), this._userThinInstanceBuffersStorage?.vertexBuffers[rr] && (this.thinInstanceAllowAutomaticStaticBufferRecreation && !this._userThinInstanceBuffersStorage.vertexBuffers[rr].isUpdatable() && this._thinInstanceRecreateBuffer(rr), this._userThinInstanceBuffersStorage.vertexBuffers[rr].updateDirectly(this._userThinInstanceBuffersStorage.data[rr], 0)))
    }, jr.c.prototype.thinInstancePartialBufferUpdate = function(rr, Sr, Qr) {
      if ("matrix" === rr) this._thinInstanceDataStorage.matrixBuffer && ("number" === typeof Sr ? this._thinInstanceDataStorage.matrixBuffer.updateDirectly(new Float32Array(this._thinInstanceDataStorage.matrixData.buffer, this._thinInstanceDataStorage.matrixData.byteOffset + 16 * Qr * Float32Array.BYTES_PER_ELEMENT, 16 * Sr), 16 * Qr) : this._thinInstanceDataStorage.matrixBuffer.updateDirectly(Sr, Qr));
      else if (rr === Ir.j.ColorKind && (rr = Ir.j.ColorInstanceKind), this._userThinInstanceBuffersStorage?.vertexBuffers[rr]) {
        const Zr = this._userThinInstanceBuffersStorage.vertexBuffers[rr];
        if ("number" === typeof Sr) {
          const Zr = new Float32Array(this._userThinInstanceBuffersStorage.data[rr].buffer, this._userThinInstanceBuffersStorage.data[rr].byteOffset + Qr * this._userThinInstanceBuffersStorage.strides[rr] * Float32Array.BYTES_PER_ELEMENT, Sr * this._userThinInstanceBuffersStorage.strides[rr]);
          this._userThinInstanceBuffersStorage.vertexBuffers[rr].updateDirectly(Zr, Qr * this._userThinInstanceBuffersStorage.strides[rr])
        } else Zr.updateDirectly(Sr, Qr)
      }
    }, jr.c.prototype.thinInstanceGetWorldMatrices = function() {
      if (!this._thinInstanceDataStorage.matrixData || !this._thinInstanceDataStorage.matrixBuffer) return [];
      const rr = this._thinInstanceDataStorage.matrixData;
      if (!this._thinInstanceDataStorage.worldMatrices) {
        this._thinInstanceDataStorage.worldMatrices = [];
        for (let Sr = 0; Sr < this._thinInstanceDataStorage.instancesCount; ++Sr) this._thinInstanceDataStorage.worldMatrices[Sr] = Zr.d.FromArray(rr, 16 * Sr)
      }
      return this._thinInstanceDataStorage.worldMatrices
    }, jr.c.prototype.thinInstanceRefreshBoundingInfo = function() {
      let rr = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        Qr = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        Wr = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!this._thinInstanceDataStorage.matrixData || !this._thinInstanceDataStorage.matrixBuffer) return;
      const jr = this._thinInstanceDataStorage.boundingVectors;
      if (rr || !this.rawBoundingInfo) {
        if (jr.length = 0, Wr && function(rr, Sr, Qr) {
            const Wr = rr._userThinInstanceBuffersStorage,
              jr = Wr?.data[fr],
              Ur = Wr?.strides[fr];
            if (!jr || !Ur || Ur < 4 || !Er(rr)) return !1;
            const tr = rr._thinInstanceDataStorage.matrixData;
            if (!tr) return !1;
            const hr = {},
              zr = Zr.n.Vector4[0],
              Yr = Zr.n.kU[1],
              nr = Zr.n.kU[2],
              er = Zr.n.kU[3],
              Kr = Zr.n.kU[4],
              yr = Zr.n.kU[5],
              Br = Zr.n.kU[6],
              Tr = Zr.n.Matrix[2],
              vr = rr.geometry ? rr.geometry.boundingBias : null,
              Or = rr.getTotalVertices();
            Yr.Srr(Number.POSITIVE_INFINITY), nr.Srr(Number.NEGATIVE_INFINITY), er.Srr(Number.POSITIVE_INFINITY), Kr.Srr(Number.NEGATIVE_INFINITY);
            for (let ar = 0; ar < rr._thinInstanceDataStorage.instancesCount; ++ar) {
              const Sr = ar * Ur;
              zr.set(jr[Sr], jr[Sr + 1], jr[Sr + 2], jr[Sr + 3]);
              const Wr = rr._getData({
                applyMorph: Qr,
                applyBakedVertexAnimation: !0,
                bakedVertexAnimationSettings: zr,
                updatePositionsArray: !1,
                cache: hr
              }, null, Ir.j.PositionKind);
              if (!Wr) return !1;
              pr(Wr, Or, yr, Br), xr(yr, Br, vr), Yr.minimizeInPlace(yr), nr.maximizeInPlace(Br), Zr.d.FromArrayToRef(tr, 16 * ar, Tr), vr ? mr(yr, Br, Tr, er, Kr) : Nr(Wr, Or, Tr, er, Kr)
            }
            return !(!isFinite(Yr.x) || !isFinite(er.x)) && (rr.mG().reConstruct(er, Kr), rr.rawBoundingInfo = new ar.c(Yr, nr), function(rr, Sr) {
              rr.length = 0;
              for (let Qr = 0; Qr < Sr.boundingBox.vectors.length; ++Qr) rr.push(Sr.boundingBox.vectors[Qr].clone())
            }(Sr, rr.rawBoundingInfo), rr._updateBoundingInfo(), !0)
          }(this, jr, Qr)) return;
        Wr && this.bakedVertexAnimationManager?.isEnabled && Er(this) ? this.refreshBoundingInfo({
          applySkeleton: Sr,
          applyMorph: Qr,
          applyBakedVertexAnimation: !0,
          updatePositionsArray: !1
        }) : this.refreshBoundingInfo(Sr, Qr);
        const rr = this.mG();
        this.rawBoundingInfo = new ar.c(rr.minimum, rr.maximum)
      }
      const Ur = this.mG(),
        tr = this._thinInstanceDataStorage.matrixData;
      if (0 === jr.length)
        for (let Zr = 0; Zr < Ur.boundingBox.vectors.length; ++Zr) jr.push(Ur.boundingBox.vectors[Zr].clone());
      Zr.n.kU[0].Srr(Number.POSITIVE_INFINITY), Zr.n.kU[1].Srr(Number.NEGATIVE_INFINITY);
      for (let ar = 0; ar < this._thinInstanceDataStorage.instancesCount; ++ar) {
        Zr.d.FromArrayToRef(tr, 16 * ar, Zr.n.Matrix[0]);
        for (let rr = 0; rr < jr.length; ++rr) Zr.u.TransformCoordinatesToRef(jr[rr], Zr.n.Matrix[0], Zr.n.kU[2]), Zr.n.kU[0].minimizeInPlace(Zr.n.kU[2]), Zr.n.kU[1].maximizeInPlace(Zr.n.kU[2])
      }
      Ur.reConstruct(Zr.n.kU[0], Zr.n.kU[1]), this._updateBoundingInfo()
    }, jr.c.prototype._thinInstanceRecreateBuffer = function(rr) {
      let Sr = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      "matrix" === rr ? (this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", this._thinInstanceDataStorage.matrixData, Sr)) : "previousMatrix" === rr ? this._scene.needsPreviousWorldMatrices && (this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", this._thinInstanceDataStorage.previousMatrixData ?? this._thinInstanceDataStorage.matrixData, Sr)) : (rr === Ir.j.ColorKind && (rr = Ir.j.ColorInstanceKind), this._userThinInstanceBuffersStorage.vertexBuffers[rr]?.dispose(), this._userThinInstanceBuffersStorage.vertexBuffers[rr] = new Ir.j(this.MU(), this._userThinInstanceBuffersStorage.data[rr], rr, !Sr, !1, this._userThinInstanceBuffersStorage.strides[rr], !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[rr]))
    }, jr.c.prototype._thinInstanceUpdateBufferSize = function(rr) {
      let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      rr === Ir.j.ColorKind && (rr = Ir.j.ColorInstanceKind);
      const Qr = "matrix" === rr;
      if (!Qr && (!this._userThinInstanceBuffersStorage || !this._userThinInstanceBuffersStorage.strides[rr])) return;
      const Zr = Qr ? 16 : this._userThinInstanceBuffersStorage.strides[rr],
        Wr = Qr ? this._thinInstanceDataStorage.matrixBufferSize : this._userThinInstanceBuffersStorage.sizes[rr];
      let ar = Qr ? this._thinInstanceDataStorage.matrixData : this._userThinInstanceBuffersStorage.data[rr];
      const jr = (this._thinInstanceDataStorage.instancesCount + Sr) * Zr;
      let fr = Wr;
      for (; fr < jr;) fr *= 2;
      if (!ar || Wr != fr) {
        if (ar) {
          const rr = new Float32Array(fr);
          rr.set(ar, 0), ar = rr
        } else ar = new Float32Array(fr);
        Qr ? (this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", ar, !1), this._thinInstanceDataStorage.matrixData = ar, this._thinInstanceDataStorage.matrixBufferSize = fr, this._scene.needsPreviousWorldMatrices && !this._thinInstanceDataStorage.previousMatrixData && (this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", ar, !1))) : (this._userThinInstanceBuffersStorage.vertexBuffers[rr]?.dispose(), this._userThinInstanceBuffersStorage.data[rr] = ar, this._userThinInstanceBuffersStorage.sizes[rr] = fr, this._userThinInstanceBuffersStorage.vertexBuffers[rr] = new Ir.j(this.MU(), ar, rr, !0, !1, Zr, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[rr]))
      }
    }, jr.c.prototype._thinInstanceInitializeUserStorage = function() {
      this._userThinInstanceBuffersStorage || (this._userThinInstanceBuffersStorage = {
        data: {},
        sizes: {},
        vertexBuffers: {},
        strides: {}
      })
    }, jr.c.prototype._disposeThinInstanceSpecificData = function() {
      this._thinInstanceDataStorage?.matrixBuffer && (this._thinInstanceDataStorage.matrixBuffer.dispose(), this._thinInstanceDataStorage.matrixBuffer = null), this._thinInstanceDataStorage?.previousMatrixBuffer && (this._thinInstanceDataStorage.previousMatrixBuffer.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = null)
    })
  },
  42287: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Yr,
      e: () => tr
    });
    var Zr, Wr, ar, jr, Ir = Qr(41872),
      fr = Qr(41875),
      Er = Qr(41889),
      pr = Qr(38595),
      xr = Qr(38560),
      mr = Qr(42060),
      Nr = Qr(38609),
      Ur = Qr(41769);
    let tr = (() => {
      var rr;
      let Sr, Qr, Zr, Wr, ar, jr, Nr, Ur, tr, hr = mr.c,
        zr = [],
        Yr = [],
        nr = [],
        er = [],
        Kr = [],
        yr = [],
        Br = [],
        Tr = [],
        vr = [],
        Or = [],
        Lr = [],
        lr = [],
        Xr = [],
        Pr = [],
        Hr = [],
        qr = [],
        Rr = [],
        gr = [];
      return rr = class extends hr {
        get billboardMode() {
          return this._billboardMode
        }
        set billboardMode(Sr) {
          this._billboardMode !== Sr && (this._billboardMode = Sr, this._cache.useBillboardPosition = 0 !== (this._billboardMode & rr.BILLBOARDMODE_USE_POSITION))
        }
        get infiniteDistance() {
          return this._infiniteDistance
        }
        set infiniteDistance(rr) {
          this._infiniteDistance !== rr && (this._infiniteDistance = rr)
        }
        constructor(Sr) {
          let Qr = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          super(Sr, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, !1), this._forward = new xr.u(0, 0, 1), this._up = new xr.u(0, 1, 0), this._right = new xr.u(1, 0, 0), this._position = (0, Ir.m)(this, zr, xr.u.Zero()), this._rotation = ((0, Ir.m)(this, Yr), (0, Ir.m)(this, nr, xr.u.Zero())), this._rotationQuaternion = ((0, Ir.m)(this, er), (0, Ir.m)(this, Kr, null)), this._scaling = ((0, Ir.m)(this, yr), (0, Ir.m)(this, Br, xr.u.One())), this._transformToBoneReferal = ((0, Ir.m)(this, Tr), null), this._isAbsoluteSynced = !1, this._billboardMode = (0, Ir.m)(this, vr, rr.BILLBOARDMODE_NONE), this.scalingDeterminant = ((0, Ir.m)(this, Or), (0, Ir.m)(this, Lr, 1)), this._infiniteDistance = ((0, Ir.m)(this, lr), (0, Ir.m)(this, Xr, !1)), this.ignoreNonUniformScaling = ((0, Ir.m)(this, Pr), (0, Ir.m)(this, Hr, !1)), this.reIntegrateRotationIntoRotationQuaternion = ((0, Ir.m)(this, qr), (0, Ir.m)(this, Rr, !1)), this._poseMatrix = ((0, Ir.m)(this, gr), null), this._localMatrix = xr.d.Zero(), this._usePivotMatrix = !1, this._absolutePosition = xr.u.Zero(), this._absoluteScaling = xr.u.Zero(), this._absoluteRotationQuaternion = xr.h.Identity(), this._pivotMatrix = xr.d.Identity(), this._postMultiplyPivotMatrix = !1, this._isWorldMatrixFrozen = !1, this._indexInSceneTransformNodesArray = -1, this.onAfterWorldMatrixUpdateObservable = new pr.d, this._nonUniformScaling = !1, Qr && this.eC().addTransformNode(this)
        }
        getClassName() {
          return "TransformNode"
        }
        get position() {
          return this._position
        }
        set position(rr) {
          this._position = rr, this._markAsDirtyInternal()
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
        set rotation(rr) {
          this._rotation = rr, this._rotationQuaternion = null, this._markAsDirtyInternal()
        }
        get Tx() {
          return this._scaling
        }
        set Tx(rr) {
          this._scaling = rr, this._markAsDirtyInternal()
        }
        get rotationQuaternion() {
          return this._rotationQuaternion
        }
        set rotationQuaternion(rr) {
          this._rotationQuaternion = rr, rr && this._rotation.Srr(0), this._markAsDirtyInternal()
        }
        _markAsDirtyInternal() {
          this._isDirty || (this._isDirty = !0, this.customMarkAsDirty && this.customMarkAsDirty())
        }
        get forward() {
          return xr.u.TransformNormalFromFloatsToRef(0, 0, this.eC().useRightHandedSystem ? -1 : 1, this.getWorldMatrix(), this._forward), this._forward.normalize()
        }
        get up() {
          return xr.u.TransformNormalFromFloatsToRef(0, 1, 0, this.getWorldMatrix(), this._up), this._up.normalize()
        }
        get right() {
          return xr.u.TransformNormalFromFloatsToRef(this.eC().useRightHandedSystem ? -1 : 1, 0, 0, this.getWorldMatrix(), this._right), this._right.normalize()
        }
        updatePoseMatrix(rr) {
          return this._poseMatrix ? (this._poseMatrix.iH(rr), this) : (this._poseMatrix = rr.clone(), this)
        }
        getPoseMatrix() {
          return this._poseMatrix || (this._poseMatrix = xr.d.Identity()), this._poseMatrix
        }
        _isSynchronized() {
          const Sr = this._cache;
          return this._billboardMode === Sr.billboardMode && this._billboardMode === rr.BILLBOARDMODE_NONE && (!Sr.pivotMatrixUpdated && (!this._infiniteDistance && (!this._position._isDirty && (!this._scaling._isDirty && !(this._rotationQuaternion && this._rotationQuaternion._isDirty || this._rotation._isDirty)))))
        }
        _initCache() {
          super._initCache();
          const rr = this._cache;
          rr.localMatrixUpdated = !1, rr.billboardMode = -1, rr.infiniteDistance = !1, rr.useBillboardPosition = !1
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
        setPreTransformMatrix(rr) {
          return this.setPivotMatrix(rr, !1)
        }
        setPivotMatrix(rr) {
          let Sr = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          return this._pivotMatrix.iH(rr), this._usePivotMatrix = !this._pivotMatrix.isIdentity(), this._cache.pivotMatrixUpdated = !0, this._postMultiplyPivotMatrix = Sr, this._postMultiplyPivotMatrix && (this._pivotMatrixInverse ? this._pivotMatrix.invertToRef(this._pivotMatrixInverse) : this._pivotMatrixInverse = xr.d.Invert(this._pivotMatrix)), this
        }
        getPivotMatrix() {
          return this._pivotMatrix
        }
        instantiateHierarchy() {
          let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            Sr = arguments.length > 1 ? arguments[1] : void 0,
            Qr = arguments.length > 2 ? arguments[2] : void 0;
          const Zr = this.clone("Clone of " + (this.name || this.id), rr || this.parent, !0);
          Zr && Qr && Qr(this, Zr);
          for (const Wr of this.getChildTransformNodes(!0)) Wr.instantiateHierarchy(Zr, Sr, Qr);
          return Zr
        }
        sC() {
          let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return rr ? arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (this._rotation.Srr(0), this._rotationQuaternion = this._rotationQuaternion || xr.h.Identity(), rr.decompose(this._scaling, this._rotationQuaternion, this._position), this.computeWorldMatrix(!0)) : (this._worldMatrix = rr, this._absolutePosition.Hrr(this._worldMatrix.m[12], this._worldMatrix.m[13], this._worldMatrix.m[14]), this._afterComputeWorldMatrix()) : (this._isWorldMatrixFrozen = !1, this.computeWorldMatrix(!0)), this._isDirty = !1, this._isWorldMatrixFrozen = !0, this
        }
        unfreezeWorldMatrix() {
          return this._isWorldMatrixFrozen = !1, this.computeWorldMatrix(!0), this
        }
        get xfr() {
          return this._isWorldMatrixFrozen
        }
        getAbsolutePosition() {
          return this.computeWorldMatrix(), this._absolutePosition
        }
        setAbsolutePosition(rr) {
          if (!rr) return this;
          let Sr, Qr, Zr;
          if (void 0 === rr.x) {
            if (arguments.length < 3) return this;
            Sr = arguments[0], Qr = arguments[1], Zr = arguments[2]
          } else Sr = rr.x, Qr = rr.y, Zr = rr.z;
          if (this.parent) {
            const rr = xr.n.Matrix[0];
            this.parent.getWorldMatrix().invertToRef(rr), xr.u.TransformCoordinatesFromFloatsToRef(Sr, Qr, Zr, rr, this.position)
          } else this.position.x = Sr, this.position.y = Qr, this.position.z = Zr;
          return this._absolutePosition.iH(rr), this
        }
        setPositionWithLocalVector(rr) {
          return this.computeWorldMatrix(), this.position = xr.u.TransformNormal(rr, this._localMatrix), this
        }
        getPositionExpressedInLocalSpace() {
          this.computeWorldMatrix();
          const rr = xr.n.Matrix[0];
          return this._localMatrix.invertToRef(rr), xr.u.TransformNormal(this.position, rr)
        }
        locallyTranslate(rr) {
          return this.computeWorldMatrix(!0), this.position = xr.u.TransformCoordinates(rr, this._localMatrix), this
        }
        lookAt(Sr) {
          let Qr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            Zr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            Wr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
            ar = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
          const jr = rr._LookAtVectorCache,
            Ir = 0 === ar ? this.position : this.getAbsolutePosition();
          if (Sr.subtractToRef(Ir, jr), this.setDirection(jr, Qr, Zr, Wr), 1 === ar && this.parent)
            if (this.rotationQuaternion) {
              const rr = xr.n.Matrix[0];
              this.rotationQuaternion.toRotationMatrix(rr);
              const Sr = xr.n.Matrix[1];
              this.parent.getWorldMatrix().getRotationMatrixToRef(Sr), Sr.invert(), rr.multiplyToRef(Sr, rr), this.rotationQuaternion.fromRotationMatrix(rr)
            } else {
              const rr = xr.n.Quaternion[0];
              xr.h.FromEulerVectorToRef(this.rotation, rr);
              const Sr = xr.n.Matrix[0];
              rr.toRotationMatrix(Sr);
              const Qr = xr.n.Matrix[1];
              this.parent.getWorldMatrix().getRotationMatrixToRef(Qr), Qr.invert(), Sr.multiplyToRef(Qr, Sr), rr.fromRotationMatrix(Sr), rr.toEulerAnglesToRef(this.rotation)
            } return this
        }
        Y1(rr) {
          const Sr = xr.u.Zero();
          return this.getDirectionToRef(rr, Sr), Sr
        }
        getDirectionToRef(rr, Sr) {
          return xr.u.TransformNormalToRef(rr, this.getWorldMatrix(), Sr), this
        }
        setDirection(rr) {
          let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
          const Wr = -Math.atan2(rr.z, rr.x) + Math.PI / 2,
            ar = Math.sqrt(rr.x * rr.x + rr.z * rr.z),
            jr = -Math.atan2(rr.y, ar);
          return this.rotationQuaternion ? xr.h.RotationYawPitchRollToRef(Wr + Sr, jr + Qr, Zr, this.rotationQuaternion) : (this.rotation.x = jr + Qr, this.rotation.y = Wr + Sr, this.rotation.z = Zr), this
        }
        setPivotPoint(rr) {
          let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          0 == this.eC().getRenderId() && this.computeWorldMatrix(!0);
          const Qr = this.getWorldMatrix();
          if (1 == Sr) {
            const Sr = xr.n.Matrix[0];
            Qr.invertToRef(Sr), rr = xr.u.TransformCoordinates(rr, Sr)
          }
          return this.setPivotMatrix(xr.d.Translation(-rr.x, -rr.y, -rr.z), !0)
        }
        getPivotPoint() {
          const rr = xr.u.Zero();
          return this.getPivotPointToRef(rr), rr
        }
        getPivotPointToRef(rr) {
          return rr.x = -this._pivotMatrix.m[12], rr.y = -this._pivotMatrix.m[13], rr.z = -this._pivotMatrix.m[14], this
        }
        getAbsolutePivotPoint() {
          const rr = xr.u.Zero();
          return this.getAbsolutePivotPointToRef(rr), rr
        }
        getAbsolutePivotPointToRef(rr) {
          return this.getPivotPointToRef(rr), xr.u.TransformCoordinatesToRef(rr, this.getWorldMatrix(), rr), this
        }
        BQr(rr) {
          if (this._isDirty) return this;
          if (this._children)
            for (const Sr of this._children) Sr.BQr(rr);
          return super.BQr(rr)
        }
        setParent(Sr) {
          let Qr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            Zr = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          if (!Sr && !this.parent) return this;
          const Wr = xr.n.Quaternion[0],
            ar = xr.n.kU[0],
            jr = xr.n.kU[1],
            Ir = xr.n.Matrix[1];
          xr.d.IdentityToRef(Ir);
          const fr = xr.n.Matrix[0];
          this.computeWorldMatrix(!0);
          let Er = this.rotationQuaternion;
          return Er || (Er = rr._TmpRotation, xr.h.RotationYawPitchRollToRef(this._rotation.y, this._rotation.x, this._rotation.z, Er)), xr.d.ComposeToRef(this.Tx, Er, this.position, fr), this.parent && fr.multiplyToRef(this.parent.computeWorldMatrix(!0), fr), Sr && (Sr.computeWorldMatrix(!0).invertToRef(Ir), fr.multiplyToRef(Ir, fr)), fr.decompose(jr, Wr, ar, Qr ? this : void 0), this.rotationQuaternion ? this.rotationQuaternion.iH(Wr) : Wr.toEulerAnglesToRef(this.rotation), this.Tx.iH(jr), this.position.iH(ar), this.parent = Sr, Zr && this.setPivotMatrix(xr.d.Identity()), this
        }
        addChild(rr) {
          let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return rr.setParent(this, Sr), this
        }
        removeChild(rr) {
          let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return rr.parent !== this || rr.setParent(null, Sr), this
        }
        get nonUniformScaling() {
          return this._nonUniformScaling
        }
        _updateNonUniformScalingState(rr) {
          return this._nonUniformScaling !== rr && (this._nonUniformScaling = rr, !0)
        }
        attachToBone(rr, Sr) {
          return this._currentParentWhenAttachingToBone = this.parent, this._transformToBoneReferal = Sr, this.parent = rr, rr.getSkeleton().prepare(!0), rr.getFinalMatrix().determinant() < 0 && (this.scalingDeterminant *= -1), this
        }
        detachFromBone() {
          let rr = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          return this.parent ? (this.parent.getWorldMatrix().determinant() < 0 && (this.scalingDeterminant *= -1), this._transformToBoneReferal = null, this.parent = rr ? this._currentParentWhenAttachingToBone : null, this) : (rr && (this.parent = this._currentParentWhenAttachingToBone), this)
        }
        rotate(Sr, Qr, Zr) {
          let Wr;
          if (Sr.normalize(), this.rotationQuaternion || (this.rotationQuaternion = this.rotation.toQuaternion(), this.rotation.Srr(0)), Zr && 0 !== Zr) {
            if (this.parent) {
              const rr = this.parent.getWorldMatrix(),
                Zr = xr.n.Matrix[0];
              rr.invertToRef(Zr), Sr = xr.u.TransformNormal(Sr, Zr), rr.determinant() < 0 && (Qr *= -1)
            }
            Wr = xr.h.RotationAxisToRef(Sr, Qr, rr._RotationAxisCache), Wr.multiplyToRef(this.rotationQuaternion, this.rotationQuaternion)
          } else Wr = xr.h.RotationAxisToRef(Sr, Qr, rr._RotationAxisCache), this.rotationQuaternion.multiplyToRef(Wr, this.rotationQuaternion);
          return this
        }
        rotateAround(rr, Sr, Qr) {
          Sr.normalize(), this.rotationQuaternion || (this.rotationQuaternion = xr.h.RotationYawPitchRoll(this.rotation.y, this.rotation.x, this.rotation.z), this.rotation.Srr(0));
          const Zr = xr.n.kU[0],
            Wr = xr.n.kU[1],
            ar = xr.n.kU[2],
            jr = xr.n.Quaternion[0],
            Ir = xr.n.Matrix[0],
            fr = xr.n.Matrix[1],
            Er = xr.n.Matrix[2],
            pr = xr.n.Matrix[3];
          return rr.subtractToRef(this.position, Zr), xr.d.TranslationToRef(Zr.x, Zr.y, Zr.z, Ir), xr.d.TranslationToRef(-Zr.x, -Zr.y, -Zr.z, fr), xr.d.RotationAxisToRef(Sr, Qr, Er), fr.multiplyToRef(Er, pr), pr.multiplyToRef(Ir, pr), pr.decompose(Wr, jr, ar), this.position.addInPlace(ar), jr.multiplyToRef(this.rotationQuaternion, this.rotationQuaternion), this
        }
        translate(rr, Sr, Qr) {
          const Zr = rr.scale(Sr);
          if (Qr && 0 !== Qr) this.setAbsolutePosition(this.getAbsolutePosition().add(Zr));
          else {
            const rr = this.getPositionExpressedInLocalSpace().add(Zr);
            this.setPositionWithLocalVector(rr)
          }
          return this
        }
        addRotation(rr, Sr, Qr) {
          let Zr;
          this.rotationQuaternion ? Zr = this.rotationQuaternion : (Zr = xr.n.Quaternion[1], xr.h.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, this.rotation.z, Zr));
          const Wr = xr.n.Quaternion[0];
          return xr.h.RotationYawPitchRollToRef(Sr, rr, Qr, Wr), Zr.multiplyInPlace(Wr), this.rotationQuaternion || Zr.toEulerAnglesToRef(this.rotation), this
        }
        _getEffectiveParent() {
          return this.parent
        }
        isWorldMatrixCameraDependent() {
          return this._infiniteDistance && !this.parent || this._billboardMode !== rr.BILLBOARDMODE_NONE
        }
        computeWorldMatrix() {
          let Sr = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            Qr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          if (this._isWorldMatrixFrozen && !this._isDirty) return this._worldMatrix;
          const Zr = this.eC().getRenderId();
          if (!this._isDirty && !Sr && (this._currentRenderId === Zr || this.isSynchronized())) return this._currentRenderId = Zr, this._worldMatrix;
          Qr = Qr || this.eC().activeCamera, this._updateCache();
          const Wr = this._cache;
          Wr.pivotMatrixUpdated = !1, Wr.billboardMode = this.billboardMode, Wr.infiniteDistance = this.infiniteDistance, Wr.parent = this._parentNode, this._currentRenderId = Zr, this._childUpdateId += 1, this._isDirty = !1, this._position._isDirty = !1, this._rotation._isDirty = !1, this._scaling._isDirty = !1;
          const ar = this._getEffectiveParent(),
            jr = rr._TmpScaling;
          let Ir, fr = this._position;
          if (this._infiniteDistance && !this.parent && Qr) {
            const Sr = Qr.getWorldMatrix().m;
            fr = rr._TmpTranslation, fr.Hrr(this._position.x + Sr[12], this._position.y + Sr[13], this._position.z + Sr[14])
          }
          if (jr.Hrr(this._scaling.x * this.scalingDeterminant, this._scaling.y * this.scalingDeterminant, this._scaling.z * this.scalingDeterminant), this._rotationQuaternion) {
            if (this._rotationQuaternion._isDirty = !1, Ir = this._rotationQuaternion, this.reIntegrateRotationIntoRotationQuaternion) {
              this.rotation.lengthSquared() && (this._rotationQuaternion.multiplyInPlace(xr.h.RotationYawPitchRoll(this._rotation.y, this._rotation.x, this._rotation.z)), this._rotation.Hrr(0, 0, 0))
            }
          } else Ir = rr._TmpRotation, xr.h.RotationYawPitchRollToRef(this._rotation.y, this._rotation.x, this._rotation.z, Ir);
          if (this._usePivotMatrix) {
            const rr = xr.n.Matrix[1];
            xr.d.ScalingToRef(jr.x, jr.y, jr.z, rr);
            const Sr = xr.n.Matrix[0];
            Ir.toRotationMatrix(Sr), this._pivotMatrix.multiplyToRef(rr, xr.n.Matrix[4]), xr.n.Matrix[4].multiplyToRef(Sr, this._localMatrix), this._postMultiplyPivotMatrix && this._localMatrix.multiplyToRef(this._pivotMatrixInverse, this._localMatrix), this._localMatrix.addTranslationFromFloats(fr.x, fr.y, fr.z)
          } else xr.d.ComposeToRef(jr, Ir, fr, this._localMatrix);
          if (ar && ar.getWorldMatrix) {
            if (Sr && ar.computeWorldMatrix(Sr), this.billboardMode) {
              if (this._transformToBoneReferal) {
                const rr = this.parent;
                rr.getSkeleton().prepare(), rr.getFinalMatrix().multiplyToRef(this._transformToBoneReferal.getWorldMatrix(), xr.n.Matrix[7])
              } else xr.n.Matrix[7].iH(ar.getWorldMatrix());
              const Sr = xr.n.kU[5],
                Qr = xr.n.kU[6],
                Zr = xr.n.Quaternion[0];
              xr.n.Matrix[7].decompose(Qr, Zr, Sr), xr.d.ScalingToRef(Qr.x, Qr.y, Qr.z, xr.n.Matrix[7]), xr.n.Matrix[7].setTranslation(Sr), rr.BillboardUseParentOrientation && (this._position.applyRotationQuaternionToRef(Zr, Sr), this._localMatrix.setTranslation(Sr)), this._localMatrix.multiplyToRef(xr.n.Matrix[7], this._worldMatrix)
            } else if (this._transformToBoneReferal) {
              const rr = this.parent;
              rr.getSkeleton().prepare(), this._localMatrix.multiplyToRef(rr.getFinalMatrix(), xr.n.Matrix[6]), xr.n.Matrix[6].multiplyToRef(this._transformToBoneReferal.getWorldMatrix(), this._worldMatrix)
            } else this._localMatrix.multiplyToRef(ar.getWorldMatrix(), this._worldMatrix);
            this._markSyncedWithParent()
          } else this._worldMatrix.iH(this._localMatrix);
          if (Qr && this.billboardMode)
            if (Wr.useBillboardPosition) {
              const Sr = xr.n.kU[0];
              this._worldMatrix.getTranslationToRef(Sr);
              const Zr = Qr.globalPosition;
              this._worldMatrix.invertToRef(xr.n.Matrix[1]);
              const Wr = xr.n.kU[1];
              xr.u.TransformCoordinatesToRef(Zr, xr.n.Matrix[1], Wr), Wr.normalize();
              const ar = -Math.atan2(Wr.z, Wr.x) + Math.PI / 2,
                jr = Math.sqrt(Wr.x * Wr.x + Wr.z * Wr.z),
                Ir = -Math.atan2(Wr.y, jr);
              if (xr.h.RotationYawPitchRollToRef(ar, Ir, 0, xr.n.Quaternion[0]), (this.billboardMode & rr.BILLBOARDMODE_ALL) !== rr.BILLBOARDMODE_ALL) {
                const Sr = xr.n.kU[1];
                xr.n.Quaternion[0].toEulerAnglesToRef(Sr), (this.billboardMode & rr.BILLBOARDMODE_X) !== rr.BILLBOARDMODE_X && (Sr.x = 0), (this.billboardMode & rr.BILLBOARDMODE_Y) !== rr.BILLBOARDMODE_Y && (Sr.y = 0), (this.billboardMode & rr.BILLBOARDMODE_Z) !== rr.BILLBOARDMODE_Z && (Sr.z = 0), xr.d.RotationYawPitchRollToRef(Sr.y, Sr.x, Sr.z, xr.n.Matrix[0])
              } else xr.d.FromQuaternionToRef(xr.n.Quaternion[0], xr.n.Matrix[0]);
              this._worldMatrix.setTranslationFromFloats(0, 0, 0), this._worldMatrix.multiplyToRef(xr.n.Matrix[0], this._worldMatrix), this._worldMatrix.setTranslation(xr.n.kU[0])
            } else {
              const Sr = xr.n.kU[0];
              this._worldMatrix.getTranslationToRef(Sr), xr.n.Matrix[1].iH(Qr.getViewMatrix());
              const Zr = this.eC().useRightHandedSystem;
              if (Zr && xr.n.Matrix[1].multiplyToRef(rr._TmpRHRestore, xr.n.Matrix[1]), xr.n.Matrix[1].setTranslationFromFloats(0, 0, 0), xr.n.Matrix[1].invertToRef(xr.n.Matrix[0]), (this.billboardMode & rr.BILLBOARDMODE_ALL) !== rr.BILLBOARDMODE_ALL) {
                xr.n.Matrix[0].decompose(void 0, xr.n.Quaternion[0], void 0);
                const Sr = xr.n.kU[1];
                xr.n.Quaternion[0].toEulerAnglesToRef(Sr), (this.billboardMode & rr.BILLBOARDMODE_X) !== rr.BILLBOARDMODE_X && (Sr.x = 0), (this.billboardMode & rr.BILLBOARDMODE_Y) !== rr.BILLBOARDMODE_Y && (Sr.y = 0), (this.billboardMode & rr.BILLBOARDMODE_Z) !== rr.BILLBOARDMODE_Z && (Sr.z = 0), Zr && (Sr.y += Math.PI), xr.d.RotationYawPitchRollToRef(Sr.y, Sr.x, Sr.z, xr.n.Matrix[0])
              }
              this._worldMatrix.setTranslationFromFloats(0, 0, 0), this._worldMatrix.multiplyToRef(xr.n.Matrix[0], this._worldMatrix), this._worldMatrix.setTranslation(xr.n.kU[0])
            } return this.ignoreNonUniformScaling ? this._updateNonUniformScalingState(!1) : this._scaling.isNonUniformWithinEpsilon(1e-6) ? this._updateNonUniformScalingState(!0) : ar && ar._nonUniformScaling ? this._updateNonUniformScalingState(ar._nonUniformScaling) : this._updateNonUniformScalingState(!1), this._afterComputeWorldMatrix(), this._absolutePosition.Hrr(this._worldMatrix.m[12], this._worldMatrix.m[13], this._worldMatrix.m[14]), this._isAbsoluteSynced = !1, this.onAfterWorldMatrixUpdateObservable.notifyObservers(this), this._poseMatrix || (this._poseMatrix = xr.d.Invert(this._worldMatrix)), this._worldMatrixDeterminantIsDirty = !0, this._worldMatrix
        }
        resetLocalMatrix() {
          let rr = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          if (this.computeWorldMatrix(), rr) {
            const rr = this.getChildren();
            for (let Sr = 0; Sr < rr.length; ++Sr) {
              const Qr = rr[Sr];
              if (Qr) {
                Qr.computeWorldMatrix();
                const rr = xr.n.Matrix[0];
                Qr._localMatrix.multiplyToRef(this._localMatrix, rr);
                const Sr = xr.n.Quaternion[0];
                rr.decompose(Qr.Tx, Sr, Qr.position), Qr.rotationQuaternion ? Qr.rotationQuaternion.iH(Sr) : Sr.toEulerAnglesToRef(Qr.rotation)
              }
            }
          }
          this.Tx.Hrr(1, 1, 1), this.position.Hrr(0, 0, 0), this.rotation.Hrr(0, 0, 0), this.rotationQuaternion && (this.rotationQuaternion = xr.h.Identity()), this._worldMatrix = xr.d.Identity()
        }
        _afterComputeWorldMatrix() {}
        registerAfterWorldMatrixUpdate(rr) {
          return this.onAfterWorldMatrixUpdateObservable.add(rr), this
        }
        unregisterAfterWorldMatrixUpdate(rr) {
          return this.onAfterWorldMatrixUpdateObservable.removeCallback(rr), this
        }
        getPositionInCameraSpace() {
          let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return rr || (rr = this.eC().activeCamera), xr.u.TransformCoordinates(this.getAbsolutePosition(), rr.getViewMatrix())
        }
        getDistanceToCamera() {
          let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return rr || (rr = this.eC().activeCamera), this.getAbsolutePosition().subtract(rr.globalPosition).length()
        }
        clone(Sr, Qr, Zr) {
          const Wr = Er.e.Clone((() => new rr(Sr, this.eC())), this);
          if (Wr.name = Sr, Wr.id = Sr, Qr && (Wr.parent = Qr), !Zr) {
            const rr = this.getDescendants(!0);
            for (let Qr = 0; Qr < rr.length; Qr++) {
              const Zr = rr[Qr];
              Zr.clone && Zr.clone(Sr + "." + Zr.name, Wr)
            }
          }
          return Wr
        }
        serialize(rr) {
          const Sr = Er.e.Serialize(this, rr);
          return Sr.type = this.getClassName(), Sr.uniqueId = this.uniqueId, this.parent && this.parent._serializeAsParent(Sr), Sr.localMatrix = this.getPivotMatrix().OWr(), Sr.isEnabled = this.isEnabled(), this._isWorldMatrixFrozen && (Sr.sC = !0), Er.e.AppendSerializedAnimations(this, Sr), Sr.yh = this.serializeAnimationRanges(), Sr
        }
        getChildTransformNodes(Sr, Qr) {
          const Zr = [];
          return this._getDescendants(Zr, Sr, (Sr => (!Qr || Qr(Sr)) && Sr instanceof rr)), Zr
        }
        dispose(rr) {
          let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this.eC().stopAnimation(this), this.eC().removeTransformNode(this), this._parentContainer) {
            const rr = this._parentContainer.transformNodes.indexOf(this);
            rr > -1 && this._parentContainer.transformNodes.splice(rr, 1), this._parentContainer = null
          }
          if (this.onAfterWorldMatrixUpdateObservable.clear(), rr) {
            const rr = this.getChildTransformNodes(!0);
            for (const Sr of rr) Sr.parent = null, Sr.computeWorldMatrix(!0)
          }
          super.dispose(rr, Sr)
        }
        normalizeToUnitCube() {
          let rr = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            Qr = arguments.length > 2 ? arguments[2] : void 0,
            Zr = null,
            Wr = null;
          Sr && (this.rotationQuaternion ? (Wr = this.rotationQuaternion.clone(), this.rotationQuaternion.Hrr(0, 0, 0, 1)) : this.rotation && (Zr = this.rotation.clone(), this.rotation.Hrr(0, 0, 0)));
          const ar = this.getHierarchyBoundingVectors(rr, Qr),
            jr = ar.max.subtract(ar.min),
            Ir = Math.max(jr.x, jr.y, jr.z);
          if (0 === Ir) return this;
          const fr = 1 / Ir;
          return this.Tx.scaleInPlace(fr), Sr && (this.rotationQuaternion && Wr ? this.rotationQuaternion.iH(Wr) : this.rotation && Zr && this.rotation.iH(Zr)), this
        }
        _syncAbsoluteScalingAndRotation() {
          this._isAbsoluteSynced || (this._worldMatrix.decompose(this._absoluteScaling, this._absoluteRotationQuaternion), this._isAbsoluteSynced = !0)
        }
      }, (() => {
        const Er = "function" === typeof Symbol && Symbol.metadata ? Object.create(hr[Symbol.metadata] ?? null) : void 0;
        Sr = [(0, fr.C)("position")], Qr = [(0, fr.C)("rotation")], Zr = [(0, fr.w)("rotationQuaternion")], Wr = [(0, fr.C)("Tx")], ar = [(0, fr.G)("billboardMode")], jr = [(0, fr.G)()], Nr = [(0, fr.G)("infiniteDistance")], Ur = [(0, fr.G)()], tr = [(0, fr.G)()], (0, Ir.k)(null, null, Sr, {
          kind: "field",
          name: "_position",
          static: !1,
          private: !1,
          access: {
            has: rr => "_position" in rr,
            get: rr => rr._position,
            set: (rr, Sr) => {
              rr._position = Sr
            }
          },
          metadata: Er
        }, zr, Yr), (0, Ir.k)(null, null, Qr, {
          kind: "field",
          name: "_rotation",
          static: !1,
          private: !1,
          access: {
            has: rr => "_rotation" in rr,
            get: rr => rr._rotation,
            set: (rr, Sr) => {
              rr._rotation = Sr
            }
          },
          metadata: Er
        }, nr, er), (0, Ir.k)(null, null, Zr, {
          kind: "field",
          name: "_rotationQuaternion",
          static: !1,
          private: !1,
          access: {
            has: rr => "_rotationQuaternion" in rr,
            get: rr => rr._rotationQuaternion,
            set: (rr, Sr) => {
              rr._rotationQuaternion = Sr
            }
          },
          metadata: Er
        }, Kr, yr), (0, Ir.k)(null, null, Wr, {
          kind: "field",
          name: "_scaling",
          static: !1,
          private: !1,
          access: {
            has: rr => "_scaling" in rr,
            get: rr => rr._scaling,
            set: (rr, Sr) => {
              rr._scaling = Sr
            }
          },
          metadata: Er
        }, Br, Tr), (0, Ir.k)(null, null, ar, {
          kind: "field",
          name: "_billboardMode",
          static: !1,
          private: !1,
          access: {
            has: rr => "_billboardMode" in rr,
            get: rr => rr._billboardMode,
            set: (rr, Sr) => {
              rr._billboardMode = Sr
            }
          },
          metadata: Er
        }, vr, Or), (0, Ir.k)(null, null, jr, {
          kind: "field",
          name: "scalingDeterminant",
          static: !1,
          private: !1,
          access: {
            has: rr => "scalingDeterminant" in rr,
            get: rr => rr.scalingDeterminant,
            set: (rr, Sr) => {
              rr.scalingDeterminant = Sr
            }
          },
          metadata: Er
        }, Lr, lr), (0, Ir.k)(null, null, Nr, {
          kind: "field",
          name: "_infiniteDistance",
          static: !1,
          private: !1,
          access: {
            has: rr => "_infiniteDistance" in rr,
            get: rr => rr._infiniteDistance,
            set: (rr, Sr) => {
              rr._infiniteDistance = Sr
            }
          },
          metadata: Er
        }, Xr, Pr), (0, Ir.k)(null, null, Ur, {
          kind: "field",
          name: "ignoreNonUniformScaling",
          static: !1,
          private: !1,
          access: {
            has: rr => "ignoreNonUniformScaling" in rr,
            get: rr => rr.ignoreNonUniformScaling,
            set: (rr, Sr) => {
              rr.ignoreNonUniformScaling = Sr
            }
          },
          metadata: Er
        }, Hr, qr), (0, Ir.k)(null, null, tr, {
          kind: "field",
          name: "reIntegrateRotationIntoRotationQuaternion",
          static: !1,
          private: !1,
          access: {
            has: rr => "reIntegrateRotationIntoRotationQuaternion" in rr,
            get: rr => rr.reIntegrateRotationIntoRotationQuaternion,
            set: (rr, Sr) => {
              rr.reIntegrateRotationIntoRotationQuaternion = Sr
            }
          },
          metadata: Er
        }, Rr, gr), Er && Object.defineProperty(rr, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Er
        })
      })(), rr.BILLBOARDMODE_NONE = 0, rr.BILLBOARDMODE_X = 1, rr.BILLBOARDMODE_Y = 2, rr.BILLBOARDMODE_Z = 4, rr.BILLBOARDMODE_ALL = 7, rr.BILLBOARDMODE_USE_POSITION = 128, rr.BillboardUseParentOrientation = !1, rr._TmpRotation = xr.h.Zero(), rr._TmpScaling = xr.u.Zero(), rr._TmpTranslation = xr.u.Zero(), rr._TmpRHRestore = xr.d.Scaling(1, 1, -1), rr._LookAtVectorCache = new xr.u(0, 0, 0), rr._RotationAxisCache = new xr.h, rr
    })();

    function hr(rr, Sr, Qr) {
      const Zr = Er.e.Parse((() => new tr(rr.name, Sr)), rr, Sr, Qr);
      if (rr.localMatrix ? Zr.setPreTransformMatrix(xr.d.FromArray(rr.localMatrix)) : rr.pivotMatrix && Zr.setPivotMatrix(xr.d.FromArray(rr.pivotMatrix)), Zr.VK(rr.isEnabled), Zr._waitingParsedUniqueId = rr.uniqueId, void 0 !== rr.parentId && (Zr._waitingParentId = rr.parentId), void 0 !== rr.parentInstanceIndex && (Zr._waitingParentInstanceIndex = rr.parentInstanceIndex), rr.sC && (Zr._waitingFreezeWorldMatrix = rr.sC), rr.animations) {
        for (let Sr = 0; Sr < rr.animations.length; Sr++) {
          const Qr = rr.animations[Sr],
            Wr = (0, Nr.d)("BABYLON.Animation");
          Wr && Zr.animations.push(Wr.Parse(Qr))
        }
        mr.c.ParseAnimationRanges(Zr, rr, Sr)
      }
      return rr.autoAnimate && Sr.beginAnimation(Zr, rr.autoAnimateFrom, rr.autoAnimateTo, rr.autoAnimateLoop, rr.autoAnimateSpeed || 1), Zr
    }
    let zr = !1;

    function Yr() {
      zr || (zr = !0, tr.Parse = hr)
    }(Zr = tr.prototype).cV ?? (Zr.cV = (0, Ur.h)("TransformNode", "cV")), (Wr = tr.prototype).applyImpulse ?? (Wr.applyImpulse = (0, Ur.h)("TransformNode", "applyImpulse")), (ar = tr.prototype).applyAngularImpulse ?? (ar.applyAngularImpulse = (0, Ur.h)("TransformNode", "applyAngularImpulse")), (jr = tr.prototype).applyTorque ?? (jr.applyTorque = (0, Ur.h)("TransformNode", "applyTorque")), Object.getOwnPropertyDescriptor(tr.prototype, "physicsBody") || Object.defineProperty(tr.prototype, "physicsBody", (0, Ur.g)("TransformNode", "physicsBody"))
  },
  42251: (rr, Sr, Qr) => {
    function Zr(rr, Sr, Qr) {
      try {
        const Zr = rr.next();
        Zr.done ? Sr(Zr) : Zr.value ? Zr.value.then((() => {
          Zr.value = void 0, Sr(Zr)
        }), Qr) : Sr(Zr)
      } catch (Zr) {
        Qr(Zr)
      }
    }

    function Wr() {
      let rr, Sr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 25;
      return (Qr, Wr, ar) => {
        const jr = performance.now();
        void 0 === rr || jr - rr > Sr ? (rr = jr, setTimeout((() => {
          Zr(Qr, Wr, ar)
        }), 0)) : Zr(Qr, Wr, ar)
      }
    }

    function ar(rr, Sr, Qr, Zr, Wr) {
      const ar = () => {
        let jr;
        const Ir = rr => {
          rr.done ? Qr(rr.value) : void 0 === jr ? jr = !0 : ar()
        };
        do {
          jr = void 0, Wr && Wr.aborted ? Zr(new Error("Aborted")) : Sr(rr, Ir, Zr), void 0 === jr && (jr = !1)
        } while (jr)
      };
      ar()
    }

    function jr(rr, Sr) {
      let Qr;
      return ar(rr, Zr, (rr => Qr = rr), (rr => {
        throw rr
      }), Sr), Qr
    }
    async function Ir(rr, Sr, Qr) {
      return await new Promise(((Zr, Wr) => {
        ar(rr, Sr, Zr, Wr, Qr)
      }))
    }

    function fr(rr, Sr) {
      return function() {
        return jr(rr(...arguments), Sr)
      }
    }
    Qr.d(Sr, {
      c: () => Wr,
      g: () => fr,
      k: () => Ir,
      o: () => jr
    })
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);
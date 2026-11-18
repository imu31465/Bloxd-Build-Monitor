export const id = 231;
export const ids = [231];
export const modules = {
  38974: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => HB,
      f: () => mB
    });
    var VB = dB(38745),
      yB = dB(38750),
      pB = dB(38861),
      lB = dB(36150),
      JB = dB(36126),
      YB = dB(38980),
      gB = dB(37651),
      oB = dB(36166),
      kB = dB(38629),
      LB = dB(37029),
      OB = dB(36688),
      DB = dB(38716),
      uB = dB(38772);
    let HB = (() => {
      var BB;
      let TB, dB, oB, HB, EB, vB, mB, iB, NB, tB, fB, sB, MB, zB, wB, UB, FB, KB, rB = YB.e,
        IB = [],
        cB = [],
        SB = [],
        PB = [],
        QB = [],
        RB = [],
        aB = [],
        ZB = [],
        XB = [],
        WB = [],
        hB = [],
        CB = [],
        GB = [],
        qB = [],
        xB = [],
        jB = [],
        AB = [],
        bB = [],
        nB = [],
        eB = [],
        BT = [],
        TT = [],
        dT = [],
        VT = [],
        yT = [];
      return BB = class extends rB {
        get position() {
          return this._position
        }
        set position(BB) {
          this._position = BB
        }
        set upVector(BB) {
          this._upVector = BB
        }
        get upVector() {
          return this._upVector
        }
        get screenArea() {
          let TB, dB;
          if (this.mode === BB.PERSPECTIVE_CAMERA) this.fovMode === BB.FOVMODE_VERTICAL_FIXED ? (dB = 2 * this.minZ * Math.tan(this.fov / 2), TB = this.PD().getAspectRatio(this) * dB) : (TB = 2 * this.minZ * Math.tan(this.fov / 2), dB = TB / this.PD().getAspectRatio(this));
          else {
            const BB = this.PD().getRenderWidth() / 2,
              VB = this.PD().getRenderHeight() / 2;
            TB = (this.orthoRight ?? BB) - (this.orthoLeft ?? -BB), dB = (this.orthoTop ?? VB) - (this.orthoBottom ?? -VB)
          }
          return TB * dB
        }
        set orthoLeft(BB) {
          this._orthoLeft = BB;
          for (const TB of this._rigCameras) TB.orthoLeft = BB
        }
        get orthoLeft() {
          return this._orthoLeft
        }
        set orthoRight(BB) {
          this._orthoRight = BB;
          for (const TB of this._rigCameras) TB.orthoRight = BB
        }
        get orthoRight() {
          return this._orthoRight
        }
        set orthoBottom(BB) {
          this._orthoBottom = BB;
          for (const TB of this._rigCameras) TB.orthoBottom = BB
        }
        get orthoBottom() {
          return this._orthoBottom
        }
        set orthoTop(BB) {
          this._orthoTop = BB;
          for (const TB of this._rigCameras) TB.orthoTop = BB
        }
        get orthoTop() {
          return this._orthoTop
        }
        setFocalLength(BB) {
          let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 36;
          this.fov = 2 * Math.atan(TB / (2 * BB))
        }
        get inertia() {
          return this._baseInertia
        }
        set inertia(BB) {
          this._baseInertia = BB
        }
        set mode(BB) {
          this._mode = BB;
          for (const TB of this._rigCameras) TB.mode = BB
        }
        get mode() {
          return this._mode
        }
        get hasMoved() {
          return this._hasMoved
        }
        constructor(TB, dB, yB) {
          let YB = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
          (0, DB.b)(), super(TB, yB, !1), this.inputs = (0, VB.h)(this, IB), this._position = (0, VB.h)(this, cB, JB.p.Zero()), this._upVector = ((0, VB.h)(this, SB), (0, VB.h)(this, PB, JB.p.Up())), this.oblique = ((0, VB.h)(this, QB), null), this._orthoLeft = null, this._orthoRight = null, this._orthoBottom = null, this._orthoTop = null, this.fov = (0, VB.h)(this, RB, .8), this.projectionPlaneTilt = ((0, VB.h)(this, aB), (0, VB.h)(this, ZB, 0)), this.minZ = ((0, VB.h)(this, XB), (0, VB.h)(this, WB, 1)), this.maxZ = ((0, VB.h)(this, hB), (0, VB.h)(this, CB, 1e4)), this._baseInertia = ((0, VB.h)(this, GB), .9), this._mode = BB.PERSPECTIVE_CAMERA, this.isIntermediate = !1, this.viewport = new LB.c(0, 0, 1, 1), this.layerMask = (0, VB.h)(this, qB, 268435455), this.fovMode = ((0, VB.h)(this, xB), (0, VB.h)(this, jB, BB.FOVMODE_VERTICAL_FIXED)), this.cameraRigMode = ((0, VB.h)(this, AB), (0, VB.h)(this, bB, BB.RIG_MODE_NONE)), this.interaxialDistance = ((0, VB.h)(this, nB), (0, VB.h)(this, eB, void 0)), this.isStereoscopicSideBySide = ((0, VB.h)(this, BT), (0, VB.h)(this, TT, void 0)), this.ignoreCameraMaxZ = ((0, VB.h)(this, dT), (0, VB.h)(this, VT, !1)), this.customRenderTargets = ((0, VB.h)(this, yT), []), this.outputRenderTarget = null, this.onViewMatrixChangedObservable = new lB.e, this.onProjectionMatrixChangedObservable = new lB.e, this.onAfterCheckInputsObservable = new lB.e, this.onRestoreStateObservable = new lB.e, this.isRigCamera = !1, this._hasMoved = !1, this._rigCameras = new Array, this._skipRendering = !1, this._projectionMatrix = new JB.b, this._postProcesses = new Array, this._activeMeshes = new pB.g(256), this._globalPosition = JB.p.Zero(), this._computedViewMatrix = JB.b.Identity(), this._doNotComputeProjectionMatrix = !1, this._transformMatrix = JB.b.Zero(), this._refreshFrustumPlanes = !0, this._absoluteRotation = JB.f.Identity(), this._isCamera = !0, this._isLeftCamera = !1, this._isRightCamera = !1, this.layerMask = this.jU().defaultCameraLayerMask, this.jU().addCamera(this), YB && !this.jU().activeCamera && (this.jU().activeCamera = this), this.position = dB, this.renderPassId = this.jU().PD().createRenderPassId(`Camera ${TB}`)
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
          return "tH"
        }
        toString(BB) {
          let TB = "Name: " + this.name;
          if (TB += ", type: " + this.getClassName(), this.animations)
            for (let dB = 0; dB < this.animations.length; dB++) TB += ", animation[0]: " + this.animations[dB].toString(BB);
          return TB
        }
        applyVerticalCorrection() {
          const BB = this.absoluteRotation.toEulerAngles();
          this.projectionPlaneTilt = this._scene.useRightHandedSystem ? -BB.x : BB.x
        }
        get globalPosition() {
          return this._globalPosition
        }
        getActiveMeshes() {
          return this._activeMeshes
        }
        isActiveMesh(BB) {
          return -1 !== this._activeMeshes.indexOf(BB)
        }
        isReady() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (BB)
            for (const TB of this._postProcesses)
              if (TB && !TB.isReady()) return !1;
          return super.isReady(BB)
        }
        _initCache() {
          super._initCache(), this._cache.position = new JB.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.upVector = new JB.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.mode = void 0, this._cache.minZ = void 0, this._cache.maxZ = void 0, this._cache.fov = void 0, this._cache.fovMode = void 0, this._cache.aspectRatio = void 0, this._cache.orthoLeft = void 0, this._cache.orthoRight = void 0, this._cache.orthoBottom = void 0, this._cache.orthoTop = void 0, this._cache.obliqueAngle = void 0, this._cache.obliqueLength = void 0, this._cache.obliqueOffset = void 0, this._cache.renderWidth = void 0, this._cache.renderHeight = void 0
        }
        _updateCache(BB) {
          BB || super._updateCache(), this._cache.position.bdB(this.position), this._cache.upVector.bdB(this.upVector)
        }
        _isSynchronized() {
          return this._isSynchronizedViewMatrix() && this._isSynchronizedProjectionMatrix()
        }
        _isSynchronizedViewMatrix() {
          return !!super._isSynchronized() && (this._cache.position.equals(this.position) && this._cache.upVector.equals(this.upVector) && this.isSynchronizedWithParent())
        }
        _isSynchronizedProjectionMatrix() {
          const TB = this.ignoreCameraMaxZ ? 0 : this.maxZ;
          let dB = this._cache.mode === this.mode && this._cache.minZ === this.minZ && this._cache.maxZ === TB;
          if (!dB) return !1;
          const VB = this.PD();
          return this.mode === BB.PERSPECTIVE_CAMERA ? dB = this._cache.fov === this.fov && this._cache.fovMode === this.fovMode && this._cache.aspectRatio === VB.getAspectRatio(this) && this._cache.projectionPlaneTilt === this.projectionPlaneTilt : (dB = this._cache.orthoLeft === this.orthoLeft && this._cache.orthoRight === this.orthoRight && this._cache.orthoBottom === this.orthoBottom && this._cache.orthoTop === this.orthoTop && this._cache.renderWidth === VB.getRenderWidth() && this._cache.renderHeight === VB.getRenderHeight(), this.oblique && (dB = dB && this._cache.obliqueAngle === this.oblique.angle && this._cache.obliqueLength === this.oblique.length && this._cache.obliqueOffset === this.oblique.offset)), dB
        }
        attachControl(BB, TB) {}
        detachControl(BB) {}
        update() {
          this._hasMoved = !1, this._checkInputs(), this.cameraRigMode !== BB.RIG_MODE_NONE && this._updateRigCameras(), this.getViewMatrix(), this.getProjectionMatrix()
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
          for (let BB = 0; BB < this._postProcesses.length; BB++)
            if (null !== this._postProcesses[BB]) return this._postProcesses[BB];
          return null
        }
        _cascadePostProcessesToRigCams() {
          const BB = this._getFirstPostProcess();
          BB && BB.markTextureDirty();
          for (let TB = 0, dB = this._rigCameras.length; TB < dB; TB++) {
            const BB = this._rigCameras[TB],
              dB = BB._rigPostProcess;
            if (dB) {
              "pass" === dB.getEffectName() && (BB.isIntermediate = 0 === this._postProcesses.length), BB._postProcesses = this._postProcesses.slice(0).concat(dB), dB.markTextureDirty()
            } else BB._postProcesses = this._postProcesses.slice(0)
          }
        }
        attachPostProcess(BB) {
          let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          return !BB.isReusable() && this._postProcesses.indexOf(BB) > -1 ? (gB.b.Error("You're trying to reuse a post process not defined as reusable."), 0) : (null == TB || TB < 0 ? this._postProcesses.push(BB) : null === this._postProcesses[TB] ? this._postProcesses[TB] = BB : this._postProcesses.splice(TB, 0, BB), this._cascadePostProcessesToRigCams(), this._scene.prePassRenderer && this._scene.prePassRenderer.VdB(), this._postProcesses.indexOf(BB))
        }
        detachPostProcess(BB) {
          const TB = this._postProcesses.indexOf(BB); - 1 !== TB && (this._postProcesses[TB] = null), this._scene.prePassRenderer && this._scene.prePassRenderer.VdB(), this._cascadePostProcessesToRigCams()
        }
        getWorldMatrix() {
          return this._isSynchronizedViewMatrix() || this.getViewMatrix(), this._worldMatrix
        }
        _getViewMatrix() {
          return JB.b.Identity()
        }
        getViewMatrix(BB) {
          return !BB && this._isSynchronizedViewMatrix() || (this._hasMoved = !0, this.updateCache(), this._computedViewMatrix = this._getViewMatrix(), this._currentRenderId = this.jU().getRenderId(), this._childUpdateId++, this._refreshFrustumPlanes = !0, this._cameraRigParams && this._cameraRigParams.vrPreViewMatrix && this._computedViewMatrix.multiplyToRef(this._cameraRigParams.vrPreViewMatrix, this._computedViewMatrix), this.parent && this.parent.onViewMatrixChangedObservable && this.parent.onViewMatrixChangedObservable.notifyObservers(this.parent), this.onViewMatrixChangedObservable.notifyObservers(this), this._computedViewMatrix.invertToRef(this._worldMatrix), this._worldMatrix.getTranslationToRef(this._globalPosition)), this._computedViewMatrix
        }
        freezeProjectionMatrix(BB) {
          this._doNotComputeProjectionMatrix = !0, void 0 !== BB && (this._projectionMatrix = BB)
        }
        unfreezeProjectionMatrix() {
          this._doNotComputeProjectionMatrix = !1
        }
        getProjectionMatrix(TB) {
          if (this._doNotComputeProjectionMatrix || !TB && this._isSynchronizedProjectionMatrix()) return this._projectionMatrix;
          const dB = this.ignoreCameraMaxZ ? 0 : this.maxZ;
          this._cache.mode = this.mode, this._cache.minZ = this.minZ, this._cache.maxZ = dB, this._refreshFrustumPlanes = !0;
          const VB = this.PD(),
            yB = this.jU(),
            pB = VB.fVB;
          if (this.mode === BB.PERSPECTIVE_CAMERA) {
            let TB;
            this._cache.fov = this.fov, this._cache.fovMode = this.fovMode, this._cache.aspectRatio = VB.getAspectRatio(this), this._cache.projectionPlaneTilt = this.projectionPlaneTilt, this.minZ <= 0 && (this.minZ = .1), TB = yB.useRightHandedSystem ? JB.b.PerspectiveFovRHToRef : JB.b.PerspectiveFovLHToRef, TB(this.fov, VB.getAspectRatio(this), pB ? dB : this.minZ, pB ? this.minZ : dB, this._projectionMatrix, this.fovMode === BB.FOVMODE_VERTICAL_FIXED, VB.isNDCHalfZRange, this.projectionPlaneTilt, pB)
          } else {
            const BB = VB.getRenderWidth() / 2,
              TB = VB.getRenderHeight() / 2;
            yB.useRightHandedSystem ? this.oblique ? JB.b.ObliqueOffCenterRHToRef(this.orthoLeft ?? -BB, this.orthoRight ?? BB, this.orthoBottom ?? -TB, this.orthoTop ?? TB, pB ? dB : this.minZ, pB ? this.minZ : dB, this.oblique.length, this.oblique.angle, this._computeObliqueDistance(this.oblique.offset), this._projectionMatrix, VB.isNDCHalfZRange) : JB.b.OrthoOffCenterRHToRef(this.orthoLeft ?? -BB, this.orthoRight ?? BB, this.orthoBottom ?? -TB, this.orthoTop ?? TB, pB ? dB : this.minZ, pB ? this.minZ : dB, this._projectionMatrix, VB.isNDCHalfZRange) : this.oblique ? JB.b.ObliqueOffCenterLHToRef(this.orthoLeft ?? -BB, this.orthoRight ?? BB, this.orthoBottom ?? -TB, this.orthoTop ?? TB, pB ? dB : this.minZ, pB ? this.minZ : dB, this.oblique.length, this.oblique.angle, this._computeObliqueDistance(this.oblique.offset), this._projectionMatrix, VB.isNDCHalfZRange) : JB.b.OrthoOffCenterLHToRef(this.orthoLeft ?? -BB, this.orthoRight ?? BB, this.orthoBottom ?? -TB, this.orthoTop ?? TB, pB ? dB : this.minZ, pB ? this.minZ : dB, this._projectionMatrix, VB.isNDCHalfZRange), this._cache.orthoLeft = this.orthoLeft, this._cache.orthoRight = this.orthoRight, this._cache.orthoBottom = this.orthoBottom, this._cache.orthoTop = this.orthoTop, this._cache.obliqueAngle = this.oblique?.angle, this._cache.obliqueLength = this.oblique?.length, this._cache.obliqueOffset = this.oblique?.offset, this._cache.renderWidth = VB.getRenderWidth(), this._cache.renderHeight = VB.getRenderHeight()
          }
          return this.onProjectionMatrixChangedObservable.notifyObservers(this), this._projectionMatrix
        }
        getTransformationMatrix() {
          return this._computedViewMatrix.multiplyToRef(this._projectionMatrix, this._transformMatrix), this._transformMatrix
        }
        _computeObliqueDistance(BB) {
          return (this.radius || (this.target ? JB.p.Distance(this.position, this.target) : this.position.length())) + BB
        }
        _updateFrustumPlanes() {
          this._refreshFrustumPlanes && (this.getTransformationMatrix(), this._frustumPlanes ? OB.b.GetPlanesToRef(this._transformMatrix, this._frustumPlanes) : this._frustumPlanes = OB.b.GetPlanes(this._transformMatrix), this._refreshFrustumPlanes = !1)
        }
        isInFrustum(BB) {
          let TB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._updateFrustumPlanes(), TB && this.rigCameras.length > 0) {
            let TB = !1;
            for (const dB of this.rigCameras) dB._updateFrustumPlanes(), TB = TB || BB.isInFrustum(dB._frustumPlanes);
            return TB
          }
          return BB.isInFrustum(this._frustumPlanes)
        }
        isCompletelyInFrustum(BB) {
          return this._updateFrustumPlanes(), BB.isCompletelyInFrustum(this._frustumPlanes)
        }
        getForwardRay() {
          throw (0, kB.i)("Ray")
        }
        getForwardRayToRef(BB) {
          throw (0, kB.i)("Ray")
        }
        dispose(TB) {
          let dB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          for (this.onViewMatrixChangedObservable.clear(), this.onProjectionMatrixChangedObservable.clear(), this.onAfterCheckInputsObservable.clear(), this.onRestoreStateObservable.clear(), this.inputs && this.inputs.clear(), this.jU().stopAnimation(this), this.jU().removeCamera(this); this._rigCameras.length > 0;) {
            const BB = this._rigCameras.pop();
            BB && BB.dispose()
          }
          if (this._parentContainer) {
            const BB = this._parentContainer.cameras.indexOf(this);
            BB > -1 && this._parentContainer.cameras.splice(BB, 1), this._parentContainer = null
          }
          if (this._rigPostProcess) this._rigPostProcess.dispose(this), this._rigPostProcess = null, this._postProcesses.length = 0;
          else if (this.cameraRigMode !== BB.RIG_MODE_NONE) this._rigPostProcess = null, this._postProcesses.length = 0;
          else {
            let BB = this._postProcesses.length;
            for (; --BB >= 0;) {
              const TB = this._postProcesses[BB];
              TB && TB.dispose(this)
            }
          }
          let VB = this.customRenderTargets.length;
          for (; --VB >= 0;) this.customRenderTargets[VB].dispose();
          this.customRenderTargets.length = 0, this._activeMeshes.dispose(), this.jU().PD().releaseRenderPassId(this.renderPassId), super.dispose(TB, dB)
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
        setCameraRigMode(TB, dB) {
          if (this.cameraRigMode !== TB) {
            for (; this._rigCameras.length > 0;) {
              const BB = this._rigCameras.pop();
              BB && BB.dispose()
            }
            if (this.cameraRigMode = TB, this._cameraRigParams = {}, this._cameraRigParams.interaxialDistance = dB.interaxialDistance || .0637, this._cameraRigParams.stereoHalfAngle = this._cameraRigParams.interaxialDistance / .0637 * (Math.PI / 180), this.cameraRigMode !== BB.RIG_MODE_NONE) {
              const BB = this.createRigCamera(this.name + "_L", 0);
              BB && (BB._isLeftCamera = !0);
              const TB = this.createRigCamera(this.name + "_R", 1);
              TB && (TB._isRightCamera = !0), BB && TB && (this._rigCameras.push(BB), this._rigCameras.push(TB))
            }
            this._setRigMode(dB), this._cascadePostProcessesToRigCams(), this.update()
          }
        }
        _setRigMode(BB) {}
        _getVRProjectionMatrix() {
          return JB.b.PerspectiveFovLHToRef(this._cameraRigParams.vrMetrics.aspectRatioFov, this._cameraRigParams.vrMetrics.aspectRatio, this.minZ, this.ignoreCameraMaxZ ? 0 : this.maxZ, this._cameraRigParams.vrWorkMatrix, !0, this.PD().isNDCHalfZRange), this._cameraRigParams.vrWorkMatrix.multiplyToRef(this._cameraRigParams.vrHMatrix, this._projectionMatrix), this._projectionMatrix
        }
        setCameraRigParameter(BB, TB) {
          this._cameraRigParams || (this._cameraRigParams = {}), this._cameraRigParams[BB] = TB, "interaxialDistance" === BB && (this._cameraRigParams.stereoHalfAngle = TB / .0637 * (Math.PI / 180))
        }
        createRigCamera(BB, TB) {
          return null
        }
        _updateRigCameras() {
          for (let BB = 0; BB < this._rigCameras.length; BB++) this._rigCameras[BB].minZ = this.minZ, this._rigCameras[BB].maxZ = this.ignoreCameraMaxZ ? 0 : this.maxZ, this._rigCameras[BB].fov = this.fov, this._rigCameras[BB].upVector.bdB(this.upVector);
          this.cameraRigMode === BB.RIG_MODE_STEREOSCOPIC_ANAGLYPH && (this._rigCameras[0].viewport = this._rigCameras[1].viewport = this.viewport)
        }
        _setupInputs() {}
        serialize() {
          const BB = uB.c.Serialize(this);
          return BB.uniqueId = this.uniqueId, BB.type = this.getClassName(), this.parent && this.parent._serializeAsParent(BB), this.inputs && this.inputs.serialize(BB), uB.c.AppendSerializedAnimations(this, BB), BB.ek = this.serializeAnimationRanges(), BB.isEnabled = this.isEnabled(), BB
        }
        clone(TB) {
          let dB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const VB = uB.c.Clone(BB.GetConstructorFromName(this.getClassName(), TB, this.jU(), this.interaxialDistance, this.isStereoscopicSideBySide), this);
          return VB.name = TB, VB.parent = dB, this.onClonedObservable.notifyObservers(VB), VB
        }
        bq(BB) {
          const TB = JB.p.Zero();
          return this.getDirectionToRef(BB, TB), TB
        }
        get absoluteRotation() {
          return this.getWorldMatrix().decompose(void 0, this._absoluteRotation), this._absoluteRotation
        }
        getDirectionToRef(BB, TB) {
          JB.p.TransformNormalToRef(BB, this.getWorldMatrix(), TB)
        }
        static GetConstructorFromName(TB, dB, VB) {
          let yB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
            pB = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
          const lB = YB.e.Construct(TB, dB, VB, {
            interaxial_distance: yB,
            isStereoscopicSideBySide: pB
          });
          return lB || (() => BB._CreateDefaultParsedCamera(dB, VB))
        }
        computeWorldMatrix() {
          return this.getWorldMatrix()
        }
        _calculateHandednessMultiplier() {
          let BB = this.jU().useRightHandedSystem ? -1 : 1;
          return this.parent && this.parent._getWorldMatrixDeterminant() < 0 && (BB *= -1), BB
        }
      }, (() => {
        const pB = "function" === typeof Symbol && Symbol.metadata ? Object.create(rB[Symbol.metadata] ?? null) : void 0;
        TB = [(0, yB.T)("position")], dB = [(0, yB.T)("upVector")], oB = [(0, yB.W)()], HB = [(0, yB.W)()], EB = [(0, yB.W)()], vB = [(0, yB.W)()], mB = [(0, yB.W)()], iB = [(0, yB.W)()], NB = [(0, yB.W)()], tB = [(0, yB.W)()], fB = [(0, yB.W)()], sB = [(0, yB.W)()], MB = [(0, yB.W)()], zB = [(0, yB.W)()], wB = [(0, yB.W)()], UB = [(0, yB.W)()], FB = [(0, yB.W)()], KB = [(0, yB.W)()], (0, VB.g)(BB, null, oB, {
          kind: "getter",
          name: "orthoLeft",
          static: !1,
          private: !1,
          access: {
            has: BB => "orthoLeft" in BB,
            get: BB => BB.orthoLeft
          },
          metadata: pB
        }, null, IB), (0, VB.g)(BB, null, HB, {
          kind: "getter",
          name: "orthoRight",
          static: !1,
          private: !1,
          access: {
            has: BB => "orthoRight" in BB,
            get: BB => BB.orthoRight
          },
          metadata: pB
        }, null, IB), (0, VB.g)(BB, null, EB, {
          kind: "getter",
          name: "orthoBottom",
          static: !1,
          private: !1,
          access: {
            has: BB => "orthoBottom" in BB,
            get: BB => BB.orthoBottom
          },
          metadata: pB
        }, null, IB), (0, VB.g)(BB, null, vB, {
          kind: "getter",
          name: "orthoTop",
          static: !1,
          private: !1,
          access: {
            has: BB => "orthoTop" in BB,
            get: BB => BB.orthoTop
          },
          metadata: pB
        }, null, IB), (0, VB.g)(BB, null, fB, {
          kind: "getter",
          name: "inertia",
          static: !1,
          private: !1,
          access: {
            has: BB => "inertia" in BB,
            get: BB => BB.inertia
          },
          metadata: pB
        }, null, IB), (0, VB.g)(BB, null, sB, {
          kind: "getter",
          name: "mode",
          static: !1,
          private: !1,
          access: {
            has: BB => "mode" in BB,
            get: BB => BB.mode
          },
          metadata: pB
        }, null, IB), (0, VB.g)(null, null, TB, {
          kind: "field",
          name: "_position",
          static: !1,
          private: !1,
          access: {
            has: BB => "_position" in BB,
            get: BB => BB._position,
            set: (BB, TB) => {
              BB._position = TB
            }
          },
          metadata: pB
        }, cB, SB), (0, VB.g)(null, null, dB, {
          kind: "field",
          name: "_upVector",
          static: !1,
          private: !1,
          access: {
            has: BB => "_upVector" in BB,
            get: BB => BB._upVector,
            set: (BB, TB) => {
              BB._upVector = TB
            }
          },
          metadata: pB
        }, PB, QB), (0, VB.g)(null, null, mB, {
          kind: "field",
          name: "fov",
          static: !1,
          private: !1,
          access: {
            has: BB => "fov" in BB,
            get: BB => BB.fov,
            set: (BB, TB) => {
              BB.fov = TB
            }
          },
          metadata: pB
        }, RB, aB), (0, VB.g)(null, null, iB, {
          kind: "field",
          name: "projectionPlaneTilt",
          static: !1,
          private: !1,
          access: {
            has: BB => "projectionPlaneTilt" in BB,
            get: BB => BB.projectionPlaneTilt,
            set: (BB, TB) => {
              BB.projectionPlaneTilt = TB
            }
          },
          metadata: pB
        }, ZB, XB), (0, VB.g)(null, null, NB, {
          kind: "field",
          name: "minZ",
          static: !1,
          private: !1,
          access: {
            has: BB => "minZ" in BB,
            get: BB => BB.minZ,
            set: (BB, TB) => {
              BB.minZ = TB
            }
          },
          metadata: pB
        }, WB, hB), (0, VB.g)(null, null, tB, {
          kind: "field",
          name: "maxZ",
          static: !1,
          private: !1,
          access: {
            has: BB => "maxZ" in BB,
            get: BB => BB.maxZ,
            set: (BB, TB) => {
              BB.maxZ = TB
            }
          },
          metadata: pB
        }, CB, GB), (0, VB.g)(null, null, MB, {
          kind: "field",
          name: "layerMask",
          static: !1,
          private: !1,
          access: {
            has: BB => "layerMask" in BB,
            get: BB => BB.layerMask,
            set: (BB, TB) => {
              BB.layerMask = TB
            }
          },
          metadata: pB
        }, qB, xB), (0, VB.g)(null, null, zB, {
          kind: "field",
          name: "fovMode",
          static: !1,
          private: !1,
          access: {
            has: BB => "fovMode" in BB,
            get: BB => BB.fovMode,
            set: (BB, TB) => {
              BB.fovMode = TB
            }
          },
          metadata: pB
        }, jB, AB), (0, VB.g)(null, null, wB, {
          kind: "field",
          name: "cameraRigMode",
          static: !1,
          private: !1,
          access: {
            has: BB => "cameraRigMode" in BB,
            get: BB => BB.cameraRigMode,
            set: (BB, TB) => {
              BB.cameraRigMode = TB
            }
          },
          metadata: pB
        }, bB, nB), (0, VB.g)(null, null, UB, {
          kind: "field",
          name: "interaxialDistance",
          static: !1,
          private: !1,
          access: {
            has: BB => "interaxialDistance" in BB,
            get: BB => BB.interaxialDistance,
            set: (BB, TB) => {
              BB.interaxialDistance = TB
            }
          },
          metadata: pB
        }, eB, BT), (0, VB.g)(null, null, FB, {
          kind: "field",
          name: "isStereoscopicSideBySide",
          static: !1,
          private: !1,
          access: {
            has: BB => "isStereoscopicSideBySide" in BB,
            get: BB => BB.isStereoscopicSideBySide,
            set: (BB, TB) => {
              BB.isStereoscopicSideBySide = TB
            }
          },
          metadata: pB
        }, TT, dT), (0, VB.g)(null, null, KB, {
          kind: "field",
          name: "ignoreCameraMaxZ",
          static: !1,
          private: !1,
          access: {
            has: BB => "ignoreCameraMaxZ" in BB,
            get: BB => BB.ignoreCameraMaxZ,
            set: (BB, TB) => {
              BB.ignoreCameraMaxZ = TB
            }
          },
          metadata: pB
        }, VT, yT), pB && Object.defineProperty(BB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: pB
        })
      })(), BB._CreateDefaultParsedCamera = (BB, TB) => {
        throw (0, kB.i)("UniversalCamera")
      }, BB.PERSPECTIVE_CAMERA = 0, BB.ORTHOGRAPHIC_CAMERA = 1, BB.FOVMODE_VERTICAL_FIXED = 0, BB.FOVMODE_HORIZONTAL_FIXED = 1, BB.RIG_MODE_NONE = 0, BB.RIG_MODE_STEREOSCOPIC_ANAGLYPH = 10, BB.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL = 11, BB.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED = 12, BB.RIG_MODE_STEREOSCOPIC_OVERUNDER = 13, BB.RIG_MODE_STEREOSCOPIC_INTERLACED = 14, BB.RIG_MODE_VR = 20, BB.RIG_MODE_CUSTOM = 22, BB.ForceAttachControlToAlwaysPreventDefault = !1, BB
    })();

    function EB(BB, TB) {
      const dB = BB.type,
        VB = HB.GetConstructorFromName(dB, BB.name, TB, BB.interaxial_distance, BB.isStereoscopicSideBySide),
        yB = uB.c.Parse(VB, BB, TB);
      if (void 0 !== BB.parentId && (yB._waitingParentId = BB.parentId), void 0 !== BB.parentInstanceIndex && (yB._waitingParentInstanceIndex = BB.parentInstanceIndex), yB.inputs && (yB.inputs.parse(BB), yB._setupInputs()), BB.upVector && (yB.upVector = JB.p.FromArray(BB.upVector)), yB.setPosition && (yB.position.YBB(0, 0, 0), yB.setPosition(JB.p.FromArray(BB.position))), BB.target && yB.setTarget && yB.setTarget(JB.p.FromArray(BB.target)), BB.cameraRigMode) {
        const TB = BB.interaxial_distance ? {
          interaxialDistance: BB.interaxial_distance
        } : {};
        yB.setCameraRigMode(BB.cameraRigMode, TB)
      }
      if (BB.animations) {
        for (let TB = 0; TB < BB.animations.length; TB++) {
          const dB = BB.animations[TB],
            VB = (0, oB.e)("BABYLON.Animation");
          VB && yB.animations.push(VB.Parse(dB))
        }
        YB.e.ParseAnimationRanges(yB, BB, TB)
      }
      return BB.autoAnimate && TB.beginAnimation(yB, BB.autoAnimateFrom, BB.autoAnimateTo, BB.autoAnimateLoop, BB.autoAnimateSpeed || 1), void 0 !== BB.isEnabled && yB.hN(BB.isEnabled), yB
    }
    let vB = !1;

    function mB() {
      vB || (vB = !0, HB.Parse = EB)
    }
  },
  38985: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => yB
    });
    var VB = dB(36126);
    class yB {
      constructor(BB, TB, dB) {
        this._cameraPosition = TB, this._behavior = dB, this.activeInput = !1, this.speed = 1, this.lG = 1, this.panSpeed = 1, this.rotationXSpeed = 1, this.rotationYSpeed = 1, this._zoomSpeedMultiplier = 1, this._panSpeedMultiplier = 1, this.zoomInertia = .9, this.panInertia = .9, this.rotationInertia = .9, this.zoomAccumulatedPixels = 0, this.panAccumulatedPixels = new VB.p, this.rotationAccumulatedPixels = new VB.p, this.zoomDeltaCurrentFrame = 0, this.panDeltaCurrentFrame = VB.p.Zero(), this.rotationDeltaCurrentFrame = VB.p.Zero(), this._zoomVelocity = 0, this._panVelocity = new VB.p, this.referenceFrameRate = 60, this._rotationVelocity = new VB.p, this._prevFrameTimeMs = 0, this._scene = BB
      }
      computeCurrentFrameDeltas() {
        const BB = this._scene.PD().getDeltaTime(),
          TB = this._getEffectiveDeltaMs(BB);
        if (0 === this._zoomVelocity && 0 === this.zoomAccumulatedPixels && 0 === this._panVelocity.x && 0 === this._panVelocity.y && 0 === this._panVelocity.z && 0 === this.panAccumulatedPixels.x && 0 === this.panAccumulatedPixels.y && 0 === this.panAccumulatedPixels.z && 0 === this._rotationVelocity.x && 0 === this._rotationVelocity.y && 0 === this._rotationVelocity.z && 0 === this.rotationAccumulatedPixels.x && 0 === this.rotationAccumulatedPixels.y && 0 === this.rotationAccumulatedPixels.z && !this.activeInput) return this.panDeltaCurrentFrame.A4(0), this.rotationDeltaCurrentFrame.A4(0), this.zoomDeltaCurrentFrame = 0, void(BB > 0 && (this._prevFrameTimeMs = BB));
        this.panDeltaCurrentFrame.A4(0), this.rotationDeltaCurrentFrame.A4(0), this.zoomDeltaCurrentFrame = 0;
        (this.panAccumulatedPixels.lengthSquared() > 0 || this.rotationAccumulatedPixels.lengthSquared() > 0 || 0 !== this.zoomAccumulatedPixels) && this._behavior?.isInterpolating && this._behavior.stopAllAnimations(), this._panVelocity.YBB(this._calculateCurrentVelocity(this._panVelocity.x, this.panAccumulatedPixels.x, this.panInertia), this._calculateCurrentVelocity(this._panVelocity.y, this.panAccumulatedPixels.y, this.panInertia), this._calculateCurrentVelocity(this._panVelocity.z, this.panAccumulatedPixels.z, this.panInertia)), this._panVelocity.scaleToRef(this.speed * this.panSpeed * this._panSpeedMultiplier * TB, this.panDeltaCurrentFrame), this._rotationVelocity.YBB(this._calculateCurrentVelocity(this._rotationVelocity.x, this.rotationAccumulatedPixels.x, this.rotationInertia), this._calculateCurrentVelocity(this._rotationVelocity.y, this.rotationAccumulatedPixels.y, this.rotationInertia), this._calculateCurrentVelocity(this._rotationVelocity.z, this.rotationAccumulatedPixels.z, this.rotationInertia)), this.rotationDeltaCurrentFrame.YBB(this._rotationVelocity.x * this.speed * this.rotationXSpeed * TB, this._rotationVelocity.y * this.speed * this.rotationYSpeed * TB, 0), this._zoomVelocity = this._calculateCurrentVelocity(this._zoomVelocity, this.zoomAccumulatedPixels, this.zoomInertia), this.zoomDeltaCurrentFrame = this._zoomVelocity * (this.speed * this.lG * this._zoomSpeedMultiplier) * TB, BB > 0 && (this._prevFrameTimeMs = BB), this.zoomAccumulatedPixels = 0, this.panAccumulatedPixels.A4(0), this.rotationAccumulatedPixels.A4(0), this.activeInput = !1
      }
      resetRotationVelocity() {
        this._rotationVelocity.A4(0), this.rotationAccumulatedPixels.A4(0)
      }
      resetPanVelocity() {
        this._panVelocity.A4(0), this.panAccumulatedPixels.A4(0)
      }
      resetZoomVelocity() {
        this._zoomVelocity = 0, this.zoomAccumulatedPixels = 0
      }
      get isInterpolating() {
        return !!this._behavior?.isInterpolating
      }
      getFrameIndependentDecay(BB) {
        const TB = this._scene.PD().getDeltaTime(),
          dB = this._getEffectiveDeltaMs(TB),
          VB = 1e3 / this.referenceFrameRate;
        return Math.pow(BB, dB / VB)
      }
      getFrameIndependentInputScale(BB) {
        const TB = 1 - BB;
        if (TB <= 0) return 1;
        return (1 - this.getFrameIndependentDecay(BB)) / TB
      }
      _getEffectiveDeltaMs(BB) {
        return BB > 0 ? BB : this._prevFrameTimeMs > 0 ? this._prevFrameTimeMs : 1e3 / this.referenceFrameRate
      }
      _calculateCurrentVelocity(BB, TB, dB) {
        let VB = BB;
        const yB = this._scene.PD().getDeltaTime(),
          pB = this._getEffectiveDeltaMs(yB);
        if (0 === pB) return VB;
        const lB = this.getFrameIndependentDecay(dB);
        if (VB *= lB, 0 !== TB || this.activeInput) {
          const BB = 1 - dB;
          VB += TB / pB * (BB > 0 ? (1 - lB) / BB : 1)
        } else Math.abs(VB) < 1e-6 && (VB = 0);
        return VB
      }
    }
  },
  38990: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => VB
    });
    class VB {
      constructor(BB, TB) {
        this.inputMap = [], this.handlers = BB, this._createDefaultEntries = TB, this.resetInputMap()
      }
      resolveInteraction(BB, TB) {
        for (const dB of this.inputMap)
          if (dB.source === BB && this._entryMatches(dB, TB)) return dB;
        return null
      }
      resetInputMap() {
        this.inputMap = this._createDefaultEntries?.() ?? []
      }
      getEntry(BB, TB, dB) {
        const VB = this.inputMap;
        for (let yB = 0; yB < VB.length; yB++) {
          const pB = VB[yB];
          if (pB.source === BB && pB.interaction === TB && this._entryConditionsMatch(pB, dB)) return pB
        }
      }
      getEntries(BB, TB, dB) {
        const VB = [],
          yB = this.inputMap;
        for (let pB = 0; pB < yB.length; pB++) {
          const lB = yB[pB];
          lB.source === BB && lB.interaction === TB && this._entryConditionsMatch(lB, dB) && VB.push(lB)
        }
        return VB
      }
      addEntry(BB) {
        const TB = this._entrySpecificity(BB);
        let dB = this.inputMap.length;
        for (let VB = 0; VB < this.inputMap.length; VB++)
          if (this._entrySpecificity(this.inputMap[VB]) < TB) {
            dB = VB;
            break
          } this.inputMap.splice(dB, 0, BB)
      }
      setInteraction(BB, TB, dB) {
        const VB = this.resolveInteraction(BB, TB);
        return VB && this._entryCoversAllConditionsOf(VB, TB) ? (VB.interaction = dB, !0) : (this.addEntry({
          source: BB,
          ...TB ?? {},
          interaction: dB
        }), !0)
      }
      _entryCoversAllConditionsOf(BB, TB) {
        if (!TB) return !0;
        const dB = BB;
        for (const VB of Object.keys(TB)) {
          const BB = TB[VB];
          if (void 0 !== BB)
            if ("modifiers" === VB) {
              const TB = dB.modifiers ?? {};
              for (const dB of Object.keys(BB))
                if (void 0 !== BB[dB] && void 0 === TB[dB]) return !1
            } else if (void 0 === dB[VB]) return !1
        }
        return !0
      }
      setInteractions(BB, TB, dB) {
        let VB = 0;
        const yB = this.inputMap;
        for (let pB = 0; pB < yB.length; pB++) {
          const lB = yB[pB];
          lB.source === BB && this._entryMatches(lB, TB) && (lB.interaction = dB, VB++)
        }
        return VB
      }
      _entryMatches(BB, TB) {
        switch (BB.source) {
          case "pointer":
            return (void 0 === BB.button || BB.button === TB?.button) && this._matchModifiers(BB.modifiers, TB?.modifiers);
          case "wheel":
            return this._matchModifiers(BB.modifiers, TB?.modifiers);
          case "touch":
            return void 0 === BB.touchCount || BB.touchCount === TB?.touchCount;
          case "keyboard":
            return (void 0 === BB.key || (Array.isArray(BB.key) ? -1 !== BB.key.indexOf(TB?.key ?? -1) : BB.key === TB?.key)) && this._matchModifiers(BB.modifiers, TB?.modifiers)
        }
      }
      _entryConditionsMatch(BB, TB) {
        if (!TB) return !0;
        switch (BB.source) {
          case "pointer":
            return (!("button" in TB) || BB.button === TB.button) && (!("modifiers" in TB) || this._entryModifiersMatch(BB.modifiers, TB.modifiers));
          case "wheel":
            return !("modifiers" in TB) || this._entryModifiersMatch(BB.modifiers, TB.modifiers);
          case "touch":
            return !("touchCount" in TB) || BB.touchCount === TB.touchCount;
          case "keyboard":
            if ("key" in TB) {
              if (void 0 === BB.key) return void 0 === TB.key;
              if (void 0 === TB.key || (Array.isArray(BB.key) ? -1 === BB.key.indexOf(TB.key) : BB.key !== TB.key)) return !1
            }
            return !("modifiers" in TB) || this._entryModifiersMatch(BB.modifiers, TB.modifiers)
        }
      }
      _entrySpecificity(BB) {
        let TB = 0;
        return "button" in BB && void 0 !== BB.button && TB++, "key" in BB && void 0 !== BB.key && TB++, "touchCount" in BB && void 0 !== BB.touchCount && TB++, "modifiers" in BB && BB.modifiers && TB++, TB
      }
      _matchModifiers(BB, TB) {
        return !BB || (void 0 === BB.ctrl || BB.ctrl === (TB?.ctrl ?? !1)) && ((void 0 === BB.shift || BB.shift === (TB?.shift ?? !1)) && (void 0 === BB.alt || BB.alt === (TB?.alt ?? !1)))
      }
      _entryModifiersMatch(BB, TB) {
        if (!TB) return !BB;
        return void 0 !== TB.ctrl || void 0 !== TB.shift || void 0 !== TB.alt ? (void 0 === TB.ctrl || BB?.ctrl === TB.ctrl) && ((void 0 === TB.shift || BB?.shift === TB.shift) && (void 0 === TB.alt || BB?.alt === TB.alt)) : !BB || void 0 === BB.ctrl && void 0 === BB.shift && void 0 === BB.alt
      }
    }
  },
  38968: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => EB,
      h: () => uB
    });
    var VB = dB(38745),
      yB = dB(38750),
      pB = dB(38974),
      lB = dB(36126),
      JB = dB(36132),
      YB = dB(38983),
      gB = dB(38980),
      oB = dB(38985),
      kB = dB(38990);
    class LB extends oB.c {
      constructor(BB, TB, dB) {
        super(BB, TB, dB), this.input = new kB.d({
          translate: (BB, TB, dB) => {
            this.panAccumulatedPixels.x += BB, this.panAccumulatedPixels.y += TB, this.panAccumulatedPixels.z += dB
          },
          rotate: (BB, TB) => {
            this.rotationAccumulatedPixels.x += BB, this.rotationAccumulatedPixels.y += TB
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
    const OB = lB.b.Zero(),
      DB = lB.f.Identity();
    let uB = (() => {
        var BB;
        let TB, dB, gB, oB, kB = pB.b,
          uB = [],
          HB = [],
          EB = [],
          vB = [],
          mB = [],
          iB = [],
          NB = [],
          tB = [];
        return BB = class extends kB {
          get inertia() {
            return this._targetInertia
          }
          set inertia(BB) {
            this._targetInertia = BB, this.movement && (this.movement.panInertia = BB, this.movement.rotationInertia = BB)
          }
          constructor(BB, TB, dB) {
            super(BB, TB, dB, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]), this.cameraDirection = new lB.p(0, 0, 0), this.cameraRotation = new lB.l(0, 0), this._targetInertia = .9, this.updateUpVectorFromRotation = (0, VB.h)(this, uB, !1), this.rotation = ((0, VB.h)(this, HB), (0, VB.h)(this, EB, void 0)), this.rotationQuaternion = (0, VB.h)(this, vB), this.speed = (0, VB.h)(this, mB, 2), this.noRotationConstraint = ((0, VB.h)(this, iB), !1), this.invertRotation = !1, this.inverseRotationSpeed = .2, this._panningEpsilon = JB.b, this._rotationEpsilon = JB.b, this.lockedTarget = (0, VB.h)(this, NB, null), this._currentTarget = ((0, VB.h)(this, tB), lB.p.Zero()), this._initialFocalDistance = 1, this._viewMatrix = lB.b.Zero(), this._cameraTransformMatrix = lB.b.Zero(), this._cameraRotationMatrix = lB.b.Zero(), this._transformedReferencePoint = lB.p.Zero(), this._deferredPositionUpdate = new lB.p, this._deferredRotationQuaternionUpdate = new lB.f, this._deferredRotationUpdate = new lB.p, this._deferredUpdated = !1, this._deferOnly = !1, this._cachedRotationZ = 0, this._cachedQuaternionRotationZ = 0, this._referencePoint = lB.p.Forward(this.jU().useRightHandedSystem), this.rotation = new lB.p(0, this.jU().useRightHandedSystem ? Math.PI : 0, 0), this.movement = new LB(this.jU(), this.position), this.movement.panInertia = this.inertia, this.movement.rotationInertia = this.inertia
          }
          getFrontPosition(BB) {
            this.getWorldMatrix();
            const TB = lB.j.RD[0],
              dB = lB.j.RD[1];
            return dB.set(0, 0, this._scene.useRightHandedSystem ? -1 : 1), this.getDirectionToRef(dB, TB), TB.scaleInPlace(BB), this.globalPosition.add(TB)
          }
          _getLockedTargetPosition() {
            if (!this.lockedTarget) return null;
            if (this.lockedTarget.absolutePosition) {
              const BB = this.lockedTarget;
              BB.computeWorldMatrix().getTranslationToRef(BB.absolutePosition)
            }
            return this.lockedTarget.absolutePosition || this.lockedTarget
          }
          storeState() {
            return this._storedPosition = this.position.clone(), this._storedRotation = this.rotation.clone(), this.rotationQuaternion && (this._storedRotationQuaternion = this.rotationQuaternion.clone()), super.storeState()
          }
          _restoreStateValues() {
            return !!super._restoreStateValues() && (this.position = this._storedPosition.clone(), this.rotation = this._storedRotation.clone(), this.rotationQuaternion && this._storedRotationQuaternion && (this.rotationQuaternion = this._storedRotationQuaternion.clone()), this.cameraDirection.YBB(0, 0, 0), this.cameraRotation.YBB(0, 0), !0)
          }
          _initCache() {
            super._initCache(), this._cache.lockedTarget = new lB.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.rotation = new lB.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.rotationQuaternion = new lB.f(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE)
          }
          _updateCache(BB) {
            BB || super._updateCache();
            const TB = this._getLockedTargetPosition();
            TB ? this._cache.lockedTarget ? this._cache.lockedTarget.bdB(TB) : this._cache.lockedTarget = TB.clone() : this._cache.lockedTarget = null, this._cache.rotation.bdB(this.rotation), this.rotationQuaternion && this._cache.rotationQuaternion.bdB(this.rotationQuaternion)
          }
          _isSynchronizedViewMatrix() {
            if (!super._isSynchronizedViewMatrix()) return !1;
            const BB = this._getLockedTargetPosition();
            return (this._cache.lockedTarget ? this._cache.lockedTarget.equals(BB) : !BB) && (this.rotationQuaternion ? this.rotationQuaternion.equals(this._cache.rotationQuaternion) : this._cache.rotation.equals(this.rotation))
          }
          _computeLocalCameraSpeed() {
            const BB = this.PD();
            return this.speed * Math.sqrt(BB.getDeltaTime() / (100 * BB.getFps()))
          }
          setTarget(BB) {
            this.upVector.normalize(), this._initialFocalDistance = BB.subtract(this.position).length(), this.position.z === BB.z && (this.position.z += JB.b), this._referencePoint.normalize().scaleInPlace(this._initialFocalDistance), this.jU().useRightHandedSystem ? lB.b.LookAtRHToRef(this.position, BB, lB.p.UpReadOnly, OB) : lB.b.LookAtLHToRef(this.position, BB, lB.p.UpReadOnly, OB), OB.invert();
            const TB = this.rotationQuaternion || DB;
            lB.f.FromRotationMatrixToRef(OB, TB), TB.toEulerAnglesToRef(this.rotation), this.rotation.z = 0
          }
          get target() {
            return this.getTarget()
          }
          set target(BB) {
            this.setTarget(BB)
          }
          getTarget() {
            return this._currentTarget
          }
          _decideIfNeedsToMove() {
            return Math.abs(this.cameraDirection.x) > 0 || Math.abs(this.cameraDirection.y) > 0 || Math.abs(this.cameraDirection.z) > 0
          }
          _updatePosition() {
            if (this.parent) return this.parent.getWorldMatrix().invertToRef(lB.j.Matrix[0]), lB.p.TransformNormalToRef(this.cameraDirection, lB.j.Matrix[0], lB.j.RD[0]), this._deferredPositionUpdate.addInPlace(lB.j.RD[0]), void(this._deferOnly ? this._deferredUpdated = !0 : this.position.bdB(this._deferredPositionUpdate));
            this._deferredPositionUpdate.addInPlace(this.cameraDirection), this._deferOnly ? this._deferredUpdated = !0 : this.position.bdB(this._deferredPositionUpdate)
          }
          _checkInputs() {
            const BB = this.movement,
              TB = 0 !== this.cameraDirection.x || 0 !== this.cameraDirection.y || 0 !== this.cameraDirection.z;
            BB.panAccumulatedPixels.addInPlace(this.cameraDirection), BB.rotationAccumulatedPixels.x += this.cameraRotation.x, BB.rotationAccumulatedPixels.y += this.cameraRotation.y, BB.computeCurrentFrameDeltas(), this.cameraDirection.bdB(BB.panDeltaCurrentFrame), this.cameraRotation.set(BB.rotationDeltaCurrentFrame.x, BB.rotationDeltaCurrentFrame.y);
            const dB = this.speed * this._panningEpsilon;
            !TB && Math.abs(this.cameraDirection.x) < dB && Math.abs(this.cameraDirection.y) < dB && Math.abs(this.cameraDirection.z) < dB && (this.cameraDirection.A4(0), BB.resetPanVelocity());
            const VB = this.invertRotation ? -this.inverseRotationSpeed : 1,
              yB = this._decideIfNeedsToMove(),
              pB = !(!this.cameraRotation.x && !this.cameraRotation.y);
            if (this._deferredUpdated = !1, this._deferredRotationUpdate.bdB(this.rotation), this._deferredPositionUpdate.bdB(this.position), this.rotationQuaternion && this._deferredRotationQuaternionUpdate.bdB(this.rotationQuaternion), yB && this._updatePosition(), pB) {
              if (this.rotationQuaternion && this.rotationQuaternion.toEulerAnglesToRef(this._deferredRotationUpdate), this._deferredRotationUpdate.x += this.cameraRotation.x * VB, this._deferredRotationUpdate.y += this.cameraRotation.y * VB, !this.noRotationConstraint) {
                const BB = 1.570796;
                this._deferredRotationUpdate.x > BB && (this._deferredRotationUpdate.x = BB), this._deferredRotationUpdate.x < -BB && (this._deferredRotationUpdate.x = -BB)
              }
              if (this._deferOnly ? this._deferredUpdated = !0 : this.rotation.bdB(this._deferredRotationUpdate), this.rotationQuaternion) {
                this._deferredRotationUpdate.lengthSquared() && (lB.f.RotationYawPitchRollToRef(this._deferredRotationUpdate.y, this._deferredRotationUpdate.x, this._deferredRotationUpdate.z, this._deferredRotationQuaternionUpdate), this._deferOnly ? this._deferredUpdated = !0 : this.rotationQuaternion.bdB(this._deferredRotationQuaternionUpdate))
              }
            }
            this.cameraDirection.A4(0), this.cameraRotation.set(0, 0), super._checkInputs()
          }
          _updateCameraRotationMatrix() {
            this.rotationQuaternion ? this.rotationQuaternion.toRotationMatrix(this._cameraRotationMatrix) : lB.b.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, this.rotation.z, this._cameraRotationMatrix)
          }
          _rotateUpVectorWithCameraRotationMatrix() {
            return lB.p.TransformNormalToRef(lB.p.UpReadOnly, this._cameraRotationMatrix, this.upVector), this
          }
          _getViewMatrix() {
            return this.lockedTarget && this.setTarget(this._getLockedTargetPosition()), this._updateCameraRotationMatrix(), this.rotationQuaternion && this._cachedQuaternionRotationZ != this.rotationQuaternion.z ? (this._rotateUpVectorWithCameraRotationMatrix(), this._cachedQuaternionRotationZ = this.rotationQuaternion.z) : this._cachedRotationZ !== this.rotation.z && (this._rotateUpVectorWithCameraRotationMatrix(), this._cachedRotationZ = this.rotation.z), lB.p.TransformCoordinatesToRef(this._referencePoint, this._cameraRotationMatrix, this._transformedReferencePoint), this.position.addToRef(this._transformedReferencePoint, this._currentTarget), this.updateUpVectorFromRotation && (this.rotationQuaternion ? YB.e.Y.rotateByQuaternionToRef(this.rotationQuaternion, this.upVector) : (lB.f.FromEulerVectorToRef(this.rotation, DB), YB.e.Y.rotateByQuaternionToRef(DB, this.upVector))), this._computeViewMatrix(this.position, this._currentTarget, this.upVector), this._viewMatrix
          }
          _computeViewMatrix(BB, TB, dB) {
            if (this.jU().useRightHandedSystem ? lB.b.LookAtRHToRef(BB, TB, dB, this._viewMatrix) : lB.b.LookAtLHToRef(BB, TB, dB, this._viewMatrix), this.parent) {
              const BB = this.parent.getWorldMatrix();
              this._viewMatrix.invert(), this._viewMatrix.multiplyToRef(BB, this._viewMatrix), this._viewMatrix.invert(), this._markSyncedWithParent()
            }
          }
          createRigCamera(TB, dB) {
            if (this.cameraRigMode !== pB.b.RIG_MODE_NONE) {
              const dB = new BB(TB, this.position.clone(), this.jU());
              return dB.isRigCamera = !0, dB.rigParent = this, this.cameraRigMode === pB.b.RIG_MODE_VR && (this.rotationQuaternion || (this.rotationQuaternion = new lB.f), dB._cameraRigParams = {}, dB.rotationQuaternion = new lB.f), dB.mode = this.mode, dB.orthoLeft = this.orthoLeft, dB.orthoRight = this.orthoRight, dB.orthoTop = this.orthoTop, dB.orthoBottom = this.orthoBottom, dB
            }
            return null
          }
          _updateRigCameras() {
            const BB = this._rigCameras[0],
              TB = this._rigCameras[1];
            switch (this.computeWorldMatrix(), this.cameraRigMode) {
              case pB.b.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case pB.b.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case pB.b.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
              case pB.b.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case pB.b.RIG_MODE_STEREOSCOPIC_INTERLACED: {
                const dB = this.cameraRigMode === pB.b.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED ? 1 : -1,
                  VB = this.cameraRigMode === pB.b.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED ? -1 : 1;
                this._getRigCamPositionAndTarget(this._cameraRigParams.stereoHalfAngle * dB, BB), this._getRigCamPositionAndTarget(this._cameraRigParams.stereoHalfAngle * VB, TB);
                break
              }
              case pB.b.RIG_MODE_VR:
                BB.rotationQuaternion && TB.rotationQuaternion && this.rotationQuaternion ? (BB.rotationQuaternion.bdB(this.rotationQuaternion), TB.rotationQuaternion.bdB(this.rotationQuaternion)) : (BB.rotation.bdB(this.rotation), TB.rotation.bdB(this.rotation)), BB.position.bdB(this.position), TB.position.bdB(this.position)
            }
            super._updateRigCameras()
          }
          _getRigCamPositionAndTarget(TB, dB) {
            this.getTarget().subtractToRef(this.position, BB._TargetFocalPoint), BB._TargetFocalPoint.normalize().scaleInPlace(this._initialFocalDistance);
            const VB = BB._TargetFocalPoint.addInPlace(this.position);
            lB.b.TranslationToRef(-VB.x, -VB.y, -VB.z, BB._TargetTransformMatrix), BB._TargetTransformMatrix.multiplyToRef(lB.b.RotationAxis(dB.upVector, TB), BB._RigCamTransformMatrix), lB.b.TranslationToRef(VB.x, VB.y, VB.z, BB._TargetTransformMatrix), BB._RigCamTransformMatrix.multiplyToRef(BB._TargetTransformMatrix, BB._RigCamTransformMatrix), lB.p.TransformCoordinatesToRef(this.position, BB._RigCamTransformMatrix, dB.position), dB.setTarget(VB)
          }
          getClassName() {
            return "TargetCamera"
          }
        }, (() => {
          const pB = "function" === typeof Symbol && Symbol.metadata ? Object.create(kB[Symbol.metadata] ?? null) : void 0;
          TB = [(0, yB.W)()], dB = [(0, yB.T)()], gB = [(0, yB.W)()], oB = [(0, yB.G)("lockedTargetId")], (0, VB.g)(null, null, TB, {
            kind: "field",
            name: "updateUpVectorFromRotation",
            static: !1,
            private: !1,
            access: {
              has: BB => "updateUpVectorFromRotation" in BB,
              get: BB => BB.updateUpVectorFromRotation,
              set: (BB, TB) => {
                BB.updateUpVectorFromRotation = TB
              }
            },
            metadata: pB
          }, uB, HB), (0, VB.g)(null, null, dB, {
            kind: "field",
            name: "rotation",
            static: !1,
            private: !1,
            access: {
              has: BB => "rotation" in BB,
              get: BB => BB.rotation,
              set: (BB, TB) => {
                BB.rotation = TB
              }
            },
            metadata: pB
          }, EB, vB), (0, VB.g)(null, null, gB, {
            kind: "field",
            name: "speed",
            static: !1,
            private: !1,
            access: {
              has: BB => "speed" in BB,
              get: BB => BB.speed,
              set: (BB, TB) => {
                BB.speed = TB
              }
            },
            metadata: pB
          }, mB, iB), (0, VB.g)(null, null, oB, {
            kind: "field",
            name: "lockedTarget",
            static: !1,
            private: !1,
            access: {
              has: BB => "lockedTarget" in BB,
              get: BB => BB.lockedTarget,
              set: (BB, TB) => {
                BB.lockedTarget = TB
              }
            },
            metadata: pB
          }, NB, tB), pB && Object.defineProperty(BB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: pB
          })
        })(), BB._RigCamTransformMatrix = new lB.b, BB._TargetTransformMatrix = new lB.b, BB._TargetFocalPoint = new lB.p, BB
      })(),
      HB = !1;

    function EB() {
      HB || (HB = !0, gB.e.AddNodeConstructor("TargetCamera", ((BB, TB) => () => new uB(BB, lB.p.Zero(), TB))))
    }
  },
  38714: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => pB
    });
    var VB = dB(38652);
    let yB = !1;

    function pB() {
      yB || (yB = !0, VB.c.prototype.getInputElement = function() {
        return this._renderingCanvas
      }, VB.c.prototype.getRenderingCanvasClientRect = function() {
        return this._renderingCanvas ? this._renderingCanvas.getBoundingClientRect() : null
      }, VB.c.prototype.getInputElementClientRect = function() {
        return this._renderingCanvas ? this.getInputElement().getBoundingClientRect() : null
      }, VB.c.prototype.getAspectRatio = function(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const dB = BB.viewport;
        return this.getRenderWidth(TB) * dB.width / (this.getRenderHeight(TB) * dB.height)
      }, VB.c.prototype.getScreenAspectRatio = function() {
        return this.getRenderWidth(!0) / this.getRenderHeight(!0)
      }, VB.c.prototype._verifyPointerLock = function() {
        this._onPointerLockChange?.()
      })
    }
  },
  38788: (BB, TB, dB) => {
    var VB = dB(38652),
      yB = dB(38790);
    let pB = !1;
    pB || (pB = !0, (0, yB.x)(), VB.c.prototype._loadFileAsync = async function(BB, TB, dB) {
      return await new Promise(((VB, yB) => {
        this._loadFile(BB, (BB => {
          VB(BB)
        }), void 0, TB, dB, ((BB, TB) => {
          yB(TB)
        }))
      }))
    })
  },
  38780: (BB, TB, dB) => {
    (0, dB(38716).b)()
  },
  38716: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => pB
    });
    var VB = dB(38652);
    let yB = !1;

    function pB() {
      yB || (yB = !0, VB.c.prototype.getRenderPassNames = function() {
        return this._renderPassNames
      }, VB.c.prototype.getCurrentRenderPassName = function() {
        return this._renderPassNames[this.currentRenderPassId]
      }, VB.c.prototype.createRenderPassId = function(BB) {
        const TB = ++VB.c._RenderPassIdCounter;
        return this._renderPassNames[TB] = BB ?? "NONAME", TB
      }, VB.c.prototype.releaseRenderPassId = function(BB) {
        this._renderPassNames[BB] = void 0;
        for (let TB = 0; TB < this.scenes.length; ++TB) {
          const dB = this.scenes[TB];
          for (let TB = 0; TB < dB.meshes.length; ++TB) {
            const VB = dB.meshes[TB];
            if (VB._releaseRenderPassId(BB), VB.oN)
              for (let TB = 0; TB < VB.oN.length; ++TB) {
                VB.oN[TB]._removeDrawWrapper(BB)
              }
          }
        }
        this._onReleaseRenderPassObservable?.notifyObservers(BB)
      })
    }
  },
  38830: (BB, TB, dB) => {
    var VB = dB(38833),
      yB = dB(38652);
    let pB = !1;
    pB || (pB = !0, yB.c.GetCompatibleTextureLoader = VB.b)
  },
  38720: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => pB
    });
    var VB = dB(38584);
    let yB = !1;

    function pB() {
      yB || (yB = !0, VB.ThinEngine.prototype.setAlphaMode = function(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this._alphaMode[dB] === BB) {
          if (!TB) {
            const TB = 0 === BB;
            this.depthCullingState.depthMask !== TB && (this.depthCullingState.depthMask = TB)
          }
          return
        }
        const VB = 0 === BB;
        this._alphaState.setAlphaBlend(!VB, dB), this._alphaState.setAlphaMode(BB, dB), TB || (this.depthCullingState.depthMask = VB), this._alphaMode[dB] = BB
      })
    }
  },
  38728: (BB, TB, dB) => {
    var VB = dB(38569),
      yB = dB(37651),
      pB = dB(38584),
      lB = dB(38730),
      JB = dB(38702);
    class YB extends lB.e {
      setDepthStencilTexture(BB) {
        let TB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (super.setDepthStencilTexture(BB, TB), !BB) return;
        const dB = this._engine,
          VB = this._context,
          yB = BB._hardwareTexture;
        if (yB && BB._autoMSAAManagement && this._MSAAFramebuffer) {
          const TB = dB._currentFramebuffer;
          dB._bindUnboundFramebuffer(this._MSAAFramebuffer), VB.framebufferRenderbuffer(VB.FRAMEBUFFER, (0, JB.d)(BB.format) ? VB.DEPTH_STENCIL_ATTACHMENT : VB.DEPTH_ATTACHMENT, VB.RENDERBUFFER, yB.getMSAARenderBuffer()), dB._bindUnboundFramebuffer(TB)
        }
      }
      constructor(BB, TB, dB, VB, yB) {
        super(BB, TB, dB, VB), this._framebuffer = null, this._depthStencilBuffer = null, this._MSAAFramebuffer = null, this._colorTextureArray = null, this._depthStencilTextureArray = null, this._disposeOnlyFramebuffers = !1, this._currentLOD = 0, this._context = yB
      }
      _cloneRenderTargetWrapper() {
        let BB;
        return this._colorTextureArray && this._depthStencilTextureArray ? (BB = this._engine.createMultiviewRenderTargetTexture(this.width, this.height), BB.texture.isReady = !0) : BB = super._cloneRenderTargetWrapper(), BB
      }
      _swapRenderTargetWrapper(BB) {
        super._swapRenderTargetWrapper(BB), BB._framebuffer = this._framebuffer, BB._depthStencilBuffer = this._depthStencilBuffer, BB._MSAAFramebuffer = this._MSAAFramebuffer, BB._colorTextureArray = this._colorTextureArray, BB._depthStencilTextureArray = this._depthStencilTextureArray, this._framebuffer = this._depthStencilBuffer = this._MSAAFramebuffer = this._colorTextureArray = this._depthStencilTextureArray = null
      }
      createDepthStencilTexture() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          TB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          dB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          VB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          yB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          pB = arguments.length > 5 ? arguments[5] : void 0;
        if (this._depthStencilBuffer) {
          const BB = this._engine,
            TB = BB._currentFramebuffer,
            dB = this._context;
          BB._bindUnboundFramebuffer(this._framebuffer), dB.framebufferRenderbuffer(dB.FRAMEBUFFER, dB.DEPTH_STENCIL_ATTACHMENT, dB.RENDERBUFFER, null), dB.framebufferRenderbuffer(dB.FRAMEBUFFER, dB.DEPTH_ATTACHMENT, dB.RENDERBUFFER, null), dB.framebufferRenderbuffer(dB.FRAMEBUFFER, dB.STENCIL_ATTACHMENT, dB.RENDERBUFFER, null), BB._bindUnboundFramebuffer(TB), dB.deleteRenderbuffer(this._depthStencilBuffer), this._depthStencilBuffer = null
        }
        return super.createDepthStencilTexture(BB, TB, dB, VB, yB, pB)
      }
      shareDepth(BB) {
        super.shareDepth(BB);
        const TB = this._context,
          dB = this._depthStencilBuffer,
          VB = BB._MSAAFramebuffer || BB._framebuffer,
          yB = this._engine;
        BB._depthStencilBuffer && BB._depthStencilBuffer !== dB && TB.deleteRenderbuffer(BB._depthStencilBuffer), BB._depthStencilBuffer = dB;
        const pB = BB._generateStencilBuffer ? TB.DEPTH_STENCIL_ATTACHMENT : TB.DEPTH_ATTACHMENT;
        yB._bindUnboundFramebuffer(VB), TB.framebufferRenderbuffer(TB.FRAMEBUFFER, pB, TB.RENDERBUFFER, dB), yB._bindUnboundFramebuffer(null)
      }
      _bindTextureRenderTarget(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          dB = arguments.length > 2 ? arguments[2] : void 0,
          VB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const yB = BB._hardwareTexture;
        if (!yB) return;
        const pB = this._framebuffer,
          lB = this._engine,
          JB = lB._currentFramebuffer;
        let YB;
        if (lB._bindUnboundFramebuffer(pB), lB.Lu > 1) {
          const pB = this._context;
          YB = pB["COLOR_ATTACHMENT" + TB], BB.is2DArray || BB.is3D ? (dB = dB ?? this.layerIndices?.[TB] ?? 0, pB.framebufferTextureLayer(pB.FRAMEBUFFER, YB, yB.underlyingResource, VB, dB)) : BB.isCube ? (dB = dB ?? this.faceIndices?.[TB] ?? 0, pB.framebufferTexture2D(pB.FRAMEBUFFER, YB, pB.TEXTURE_CUBE_MAP_POSITIVE_X + dB, yB.underlyingResource, VB)) : pB.framebufferTexture2D(pB.FRAMEBUFFER, YB, pB.TEXTURE_2D, yB.underlyingResource, VB)
        } else {
          const BB = this._context;
          YB = BB["COLOR_ATTACHMENT" + TB + "_WEBGL"];
          const pB = void 0 !== dB ? BB.TEXTURE_CUBE_MAP_POSITIVE_X + dB : BB.TEXTURE_2D;
          BB.framebufferTexture2D(BB.FRAMEBUFFER, YB, pB, yB.underlyingResource, VB)
        }
        if (BB._autoMSAAManagement && this._MSAAFramebuffer) {
          const BB = this._context;
          lB._bindUnboundFramebuffer(this._MSAAFramebuffer), BB.framebufferRenderbuffer(BB.FRAMEBUFFER, YB, BB.RENDERBUFFER, yB.getMSAARenderBuffer())
        }
        lB._bindUnboundFramebuffer(JB)
      }
      setTexture(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          dB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        super.setTexture(BB, TB, dB), this._bindTextureRenderTarget(BB, TB)
      }
      setLayerAndFaceIndices(BB, TB) {
        if (super.setLayerAndFaceIndices(BB, TB), !this.textures || !this.layerIndices || !this.faceIndices) return;
        const dB = this._attachments?.length ?? this.textures.length;
        for (let VB = 0; VB < dB; VB++) {
          const BB = this.textures[VB];
          BB && (BB.is2DArray || BB.is3D ? this._bindTextureRenderTarget(BB, VB, this.layerIndices[VB]) : BB.isCube ? this._bindTextureRenderTarget(BB, VB, this.faceIndices[VB]) : this._bindTextureRenderTarget(BB, VB))
        }
      }
      setLayerAndFaceIndex() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          TB = arguments.length > 1 ? arguments[1] : void 0,
          dB = arguments.length > 2 ? arguments[2] : void 0;
        if (super.setLayerAndFaceIndex(BB, TB, dB), !this.textures || !this.layerIndices || !this.faceIndices) return;
        const VB = this.textures[BB];
        VB.is2DArray || VB.is3D ? this._bindTextureRenderTarget(this.textures[BB], BB, this.layerIndices[BB]) : VB.isCube && this._bindTextureRenderTarget(this.textures[BB], BB, this.faceIndices[BB])
      }
      resolveMSAATextures() {
        const BB = this._engine,
          TB = BB._currentFramebuffer;
        BB._bindUnboundFramebuffer(this._MSAAFramebuffer), super.resolveMSAATextures(), BB._bindUnboundFramebuffer(TB)
      }
      dispose() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._disposeOnlyFramebuffers;
        const TB = this._context;
        BB || (this._colorTextureArray && (this._context.deleteTexture(this._colorTextureArray), this._colorTextureArray = null), this._depthStencilTextureArray && (this._context.deleteTexture(this._depthStencilTextureArray), this._depthStencilTextureArray = null)), this._framebuffer && (TB.deleteFramebuffer(this._framebuffer), this._framebuffer = null), this._depthStencilBuffer && (TB.deleteRenderbuffer(this._depthStencilBuffer), this._depthStencilBuffer = null), this._MSAAFramebuffer && (TB.deleteFramebuffer(this._MSAAFramebuffer), this._MSAAFramebuffer = null), super.dispose(BB)
      }
    }
    let gB = !1;
    gB || (gB = !0, pB.ThinEngine.prototype._createHardwareRenderTargetWrapper = function(BB, TB, dB) {
      const VB = new YB(BB, TB, dB, this, this._gl);
      return this._renderTargetWrapperCache.push(VB), VB
    }, pB.ThinEngine.prototype.createRenderTargetTexture = function(BB, TB) {
      const dB = this._createHardwareRenderTargetWrapper(!1, !1, BB);
      let VB, yB, pB = !0,
        lB = !1,
        JB = !1,
        YB = 1;
      void 0 !== TB && "object" === typeof TB && (pB = TB.generateDepthBuffer ?? !0, lB = !!TB.generateStencilBuffer, JB = !!TB.noColorAttachment, VB = TB.colorAttachment, YB = TB.samples ?? 1, yB = TB.label);
      const gB = VB || (JB ? null : this._createInternalTexture(BB, TB, !0, 5)),
        oB = BB.width || BB,
        kB = BB.height || BB,
        LB = this._currentFramebuffer,
        OB = this._gl,
        DB = OB.createFramebuffer();
      if (this._bindUnboundFramebuffer(DB), dB._depthStencilBuffer = this._setupFramebufferDepthAttachments(lB, pB, oB, kB), !gB || gB.is2DArray || gB.is3D || OB.framebufferTexture2D(OB.FRAMEBUFFER, OB.COLOR_ATTACHMENT0, OB.TEXTURE_2D, gB._hardwareTexture.underlyingResource, 0), this._bindUnboundFramebuffer(LB), dB.label = yB ?? "RenderTargetWrapper", dB._framebuffer = DB, dB._generateDepthBuffer = pB, dB._generateStencilBuffer = lB, dB.setTextures(gB), VB) {
        if (dB._samples = VB.samples, VB.samples > 1) {
          const BB = VB._hardwareTexture.getMSAARenderBuffer(0);
          dB._MSAAFramebuffer = OB.createFramebuffer(), this._bindUnboundFramebuffer(dB._MSAAFramebuffer), OB.framebufferRenderbuffer(OB.FRAMEBUFFER, OB.COLOR_ATTACHMENT0, OB.RENDERBUFFER, BB), this._bindUnboundFramebuffer(null)
        }
      } else this.updateRenderTargetTextureSampleCount(dB, YB);
      return dB
    }, pB.ThinEngine.prototype._createDepthStencilTexture = function(BB, TB, dB) {
      const pB = this._gl,
        lB = BB.layers || 0,
        YB = BB.depth || 0;
      let gB = pB.TEXTURE_2D;
      0 !== lB ? gB = pB.TEXTURE_2D_ARRAY : 0 !== YB && (gB = pB.TEXTURE_3D);
      const oB = new VB.e(this, 12);
      if (oB.label = TB.label, !this._caps.depthTextureExtension) return yB.b.Error("Depth texture is not supported by your browser or hardware."), oB;
      const kB = {
        bilinearFiltering: !1,
        comparisonFunction: 0,
        generateStencil: !1,
        ...TB
      };
      if (this._bindTextureDirectly(gB, oB, !0), this._setupDepthStencilTexture(oB, BB, 0 !== kB.comparisonFunction && kB.bilinearFiltering, kB.comparisonFunction, kB.samples), void 0 !== kB.depthTextureFormat) {
        if (15 !== kB.depthTextureFormat && 16 !== kB.depthTextureFormat && 17 !== kB.depthTextureFormat && 13 !== kB.depthTextureFormat && 14 !== kB.depthTextureFormat && 18 !== kB.depthTextureFormat) return yB.b.Error(`Depth texture ${kB.depthTextureFormat} format is not supported.`), oB;
        oB.format = kB.depthTextureFormat
      } else oB.format = kB.generateStencil ? 13 : 16;
      const LB = (0, JB.d)(oB.format),
        OB = this._getWebGLTextureTypeFromDepthTextureFormat(oB.format),
        DB = LB ? pB.DEPTH_STENCIL : pB.DEPTH_COMPONENT,
        uB = this._getInternalFormatFromDepthTextureFormat(oB.format, !0, LB);
      return oB.is2DArray ? pB.texImage3D(gB, 0, uB, oB.width, oB.height, lB, 0, DB, OB, null) : oB.is3D ? pB.texImage3D(gB, 0, uB, oB.width, oB.height, YB, 0, DB, OB, null) : pB.texImage2D(gB, 0, uB, oB.width, oB.height, 0, DB, OB, null), this._bindTextureDirectly(gB, null), this._internalTexturesCache.push(oB), dB._depthStencilBuffer && (pB.deleteRenderbuffer(dB._depthStencilBuffer), dB._depthStencilBuffer = null), this._bindUnboundFramebuffer(dB._MSAAFramebuffer ?? dB._framebuffer), dB._generateStencilBuffer = LB, dB._depthStencilTextureWithStencil = LB, dB._depthStencilBuffer = this._setupFramebufferDepthAttachments(dB._generateStencilBuffer, dB._generateDepthBuffer, dB.width, dB.height, dB.samples, oB.format), this._bindUnboundFramebuffer(null), oB
    }, pB.ThinEngine.prototype.updateRenderTargetTextureSampleCount = function(BB, TB) {
      if (this.Lu < 2 || !BB) return 1;
      if (BB.samples === TB) return TB;
      const dB = this._gl;
      TB = Math.min(TB, this.getCaps().maxMSAASamples), BB._depthStencilBuffer && (dB.deleteRenderbuffer(BB._depthStencilBuffer), BB._depthStencilBuffer = null), BB._MSAAFramebuffer && (dB.deleteFramebuffer(BB._MSAAFramebuffer), BB._MSAAFramebuffer = null);
      const VB = BB.texture?._hardwareTexture;
      if (VB?.releaseMSAARenderBuffers(), BB.texture && TB > 1 && "function" === typeof dB.renderbufferStorageMultisample) {
        const yB = dB.createFramebuffer();
        if (!yB) throw new Error("Unable to create multi sampled framebuffer");
        BB._MSAAFramebuffer = yB, this._bindUnboundFramebuffer(BB._MSAAFramebuffer);
        const pB = this._createRenderBuffer(BB.texture.width, BB.texture.height, TB, -1, this._getRGBABufferInternalSizedFormat(BB.texture.type, BB.texture.format, BB.texture._useSRGBBuffer), dB.COLOR_ATTACHMENT0, !1);
        if (!pB) throw new Error("Unable to create multi sampled framebuffer");
        VB?.addMSAARenderBuffer(pB)
      }
      this._bindUnboundFramebuffer(BB._MSAAFramebuffer ?? BB._framebuffer), BB.texture && (BB.texture.samples = TB), BB._samples = TB;
      const yB = BB._depthStencilTexture ? BB._depthStencilTexture.format : void 0;
      return BB._depthStencilBuffer = this._setupFramebufferDepthAttachments(BB._generateStencilBuffer, BB._generateDepthBuffer, BB.width, BB.height, TB, yB), this._bindUnboundFramebuffer(null), TB
    }, pB.ThinEngine.prototype._setupDepthStencilTexture = function(BB, TB, dB, VB) {
      let yB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1;
      const pB = TB.width ?? TB,
        lB = TB.height ?? TB,
        JB = TB.layers || 0,
        YB = TB.depth || 0;
      BB.baseWidth = pB, BB.baseHeight = lB, BB.width = pB, BB.height = lB, BB.is2DArray = JB > 0, BB.depth = JB || YB, BB.isReady = !0, BB.samples = yB, BB.generateMipMaps = !1, BB.samplingMode = dB ? 2 : 1, BB.type = 0, BB._comparisonFunction = VB;
      const gB = this._gl,
        oB = this._getTextureTarget(BB),
        kB = this._getSamplingParameters(BB.samplingMode, !1);
      gB.texParameteri(oB, gB.TEXTURE_MAG_FILTER, kB.mag), gB.texParameteri(oB, gB.TEXTURE_MIN_FILTER, kB.min), gB.texParameteri(oB, gB.TEXTURE_WRAP_S, gB.CLAMP_TO_EDGE), gB.texParameteri(oB, gB.TEXTURE_WRAP_T, gB.CLAMP_TO_EDGE), this.Lu > 1 && (0 === VB ? (gB.texParameteri(oB, gB.TEXTURE_COMPARE_FUNC, 515), gB.texParameteri(oB, gB.TEXTURE_COMPARE_MODE, gB.NONE)) : (gB.texParameteri(oB, gB.TEXTURE_COMPARE_FUNC, VB), gB.texParameteri(oB, gB.TEXTURE_COMPARE_MODE, gB.COMPARE_REF_TO_TEXTURE)))
    })
  },
  38562: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => VB.d
    });
    var VB = dB(38565);
    (0, dB(38720).b)();
    var yB = dB(38584);
    let pB = !1;
    ! function() {
      if (pB) return;
      pB = !0;
      const BB = new WeakMap,
        TB = new WeakMap,
        dB = new WeakMap,
        VB = new WeakMap;
      yB.ThinEngine.prototype.getAlphaToCoverage = function() {
        return BB.get(this) ?? !1
      }, yB.ThinEngine.prototype.setAlphaToCoverage = function(dB) {
        (BB.get(this) !== dB || this._gl && TB.get(this) !== this._gl) && (BB.set(this, dB), this._gl && (dB ? this._gl.enable(this._gl.SAMPLE_ALPHA_TO_COVERAGE) : this._gl.disable(this._gl.SAMPLE_ALPHA_TO_COVERAGE), TB.set(this, this._gl)))
      }, Object.defineProperty(yB.ThinEngine.prototype, "currentSampleCount", {
        get: function() {
          return this._currentRenderTarget ? this._currentRenderTarget.samples : this._gl ? (VB.get(this) !== this._gl && (dB.set(this, this._gl.getContextAttributes()?.antialias ? Math.max(1, this._gl.getParameter(this._gl.SAMPLES)) : 1), VB.set(this, this._gl)), dB.get(this)) : 1
        },
        enumerable: !1,
        configurable: !0
      })
    }();
    var lB = dB(38569),
      JB = dB(37651),
      YB = dB(38689);
    let gB = !1;
    ! function() {
      function BB(BB, TB, dB, VB) {
        let yB, pB = 1;
        1 === VB ? yB = new Float32Array(TB * dB * 4) : 2 === VB ? (yB = new Uint16Array(TB * dB * 4), pB = 15360) : yB = 7 === VB ? new Uint32Array(TB * dB * 4) : new Uint8Array(TB * dB * 4);
        for (let lB = 0; lB < TB; lB++)
          for (let VB = 0; VB < dB; VB++) {
            const dB = 3 * (VB * TB + lB),
              JB = 4 * (VB * TB + lB);
            yB[JB + 0] = BB[dB + 0], yB[JB + 1] = BB[dB + 1], yB[JB + 2] = BB[dB + 2], yB[JB + 3] = pB
          }
        return yB
      }

      function TB(BB) {
        return function(TB, dB, VB, yB, pB, JB, YB, gB) {
          let oB = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
            kB = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
          const LB = BB ? this._gl.TEXTURE_3D : this._gl.TEXTURE_2D_ARRAY,
            OB = BB ? 10 : 11,
            DB = new lB.e(this, OB);
          DB.baseWidth = dB, DB.baseHeight = VB, DB.baseDepth = yB, DB.width = dB, DB.height = VB, DB.depth = yB, DB.format = pB, DB.type = kB, DB.generateMipMaps = JB, DB.samplingMode = gB, BB ? DB.is3D = !0 : DB.is2DArray = !0, this._doNotHandleContextLost || (DB._bufferView = TB), BB ? this.updateRawTexture3D(DB, TB, pB, YB, oB, kB) : this.updateRawTexture2DArray(DB, TB, pB, YB, oB, kB), this._bindTextureDirectly(LB, DB, !0);
          const uB = this._getSamplingParameters(gB, JB);
          return this._gl.texParameteri(LB, this._gl.TEXTURE_MAG_FILTER, uB.mag), this._gl.texParameteri(LB, this._gl.TEXTURE_MIN_FILTER, uB.min), JB && this._gl.generateMipmap(LB), this._bindTextureDirectly(LB, null), this._internalTexturesCache.push(DB), DB
        }
      }

      function dB(BB) {
        return function(TB, dB, VB, yB) {
          let pB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            lB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
          const JB = BB ? this._gl.TEXTURE_3D : this._gl.TEXTURE_2D_ARRAY,
            YB = this._getWebGLTextureType(lB),
            gB = this._getInternalFormat(VB),
            oB = this._getRGBABufferInternalSizedFormat(lB, VB);
          this._bindTextureDirectly(JB, TB, !0), this._unpackFlipY(void 0 === yB || !!yB), this._doNotHandleContextLost || (TB._bufferView = dB, TB.format = VB, TB.invertY = yB, TB._compression = pB), TB.width % 4 !== 0 && this._gl.pixelStorei(this._gl.UNPACK_ALIGNMENT, 1), pB && dB ? this._gl.compressedTexImage3D(JB, 0, this.getCaps().s3tc[pB], TB.width, TB.height, TB.depth, 0, dB) : this._gl.texImage3D(JB, 0, oB, TB.width, TB.height, TB.depth, 0, gB, YB, dB), TB.generateMipMaps && this._gl.generateMipmap(JB), this._bindTextureDirectly(JB, null), TB.isReady = !0
        }
      }
      gB || (gB = !0, yB.ThinEngine.prototype.updateRawTexture = function(BB, TB, dB, VB) {
        let yB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          pB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          lB = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        if (!BB) return;
        const JB = this._getRGBABufferInternalSizedFormat(pB, dB, lB),
          YB = this._getInternalFormat(dB),
          gB = this._getWebGLTextureType(pB);
        this._bindTextureDirectly(this._gl.TEXTURE_2D, BB, !0), this._unpackFlipY(void 0 === VB || !!VB), this._doNotHandleContextLost || (BB._bufferView = TB, BB.format = dB, BB.type = pB, BB.invertY = VB, BB._compression = yB), BB.width % 4 !== 0 && this._gl.pixelStorei(this._gl.UNPACK_ALIGNMENT, 1), yB && TB ? this._gl.compressedTexImage2D(this._gl.TEXTURE_2D, 0, this.getCaps().s3tc[yB], BB.width, BB.height, 0, TB) : this._gl.texImage2D(this._gl.TEXTURE_2D, 0, JB, BB.width, BB.height, 0, YB, gB, TB), BB.generateMipMaps && this._gl.generateMipmap(this._gl.TEXTURE_2D), this._bindTextureDirectly(this._gl.TEXTURE_2D, null), BB.isReady = !0
      }, yB.ThinEngine.prototype.createRawTexture = function(BB, TB, dB, VB, yB, pB, JB) {
        let YB = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          gB = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
          oB = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const kB = new lB.e(this, 3);
        kB.baseWidth = TB, kB.baseHeight = dB, kB.width = TB, kB.height = dB, kB.format = VB, kB.generateMipMaps = yB, kB.samplingMode = JB, kB.invertY = pB, kB._compression = YB, kB.type = gB, kB._useSRGBBuffer = this._getUseSRGBBuffer(oB, !yB), this._doNotHandleContextLost || (kB._bufferView = BB), this.updateRawTexture(kB, BB, VB, pB, YB, gB, kB._useSRGBBuffer), this._bindTextureDirectly(this._gl.TEXTURE_2D, kB, !0);
        const LB = this._getSamplingParameters(JB, yB);
        return this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MAG_FILTER, LB.mag), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MIN_FILTER, LB.min), yB && this._gl.generateMipmap(this._gl.TEXTURE_2D), this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._internalTexturesCache.push(kB), kB
      }, yB.ThinEngine.prototype.createRawCubeTexture = function(BB, TB, dB, VB, yB, pB, gB) {
        let oB = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null;
        const kB = this._gl,
          LB = new lB.e(this, 8);
        LB.isCube = !0, LB.format = dB, LB.type = VB, this._doNotHandleContextLost || (LB._bufferViewArray = BB);
        const OB = this._getWebGLTextureType(VB);
        let DB = this._getInternalFormat(dB);
        DB === kB.RGB && (DB = kB.RGBA), OB !== kB.FLOAT || this._caps.textureFloatLinearFiltering ? OB !== this._gl.HALF_FLOAT_OES || this._caps.textureHalfFloatLinearFiltering ? OB !== kB.FLOAT || this._caps.textureFloatRender ? OB !== kB.HALF_FLOAT || this._caps.colorBufferFloat || (yB = !1, JB.b.Warn("Render to half float textures is not supported. Mipmap generation forced to false.")) : (yB = !1, JB.b.Warn("Render to float textures is not supported. Mipmap generation forced to false.")) : (yB = !1, gB = 1, JB.b.Warn("Half float texture filtering is not supported. Mipmap generation and sampling mode are forced to false and TEXTURE_NEAREST_SAMPLINGMODE, respectively.")) : (yB = !1, gB = 1, JB.b.Warn("Float texture filtering is not supported. Mipmap generation and sampling mode are forced to false and TEXTURE_NEAREST_SAMPLINGMODE, respectively."));
        const uB = TB,
          HB = uB;
        LB.width = uB, LB.height = HB, LB.invertY = pB, LB._compression = oB;
        if (!this.needPOTTextures || (0, YB.i)(LB.width) && (0, YB.i)(LB.height) || (yB = !1), BB) this.updateRawCubeTexture(LB, BB, dB, VB, pB, oB);
        else {
          const BB = this._getRGBABufferInternalSizedFormat(VB),
            TB = 0;
          this._bindTextureDirectly(kB.TEXTURE_CUBE_MAP, LB, !0);
          for (let dB = 0; dB < 6; dB++) oB ? kB.compressedTexImage2D(kB.TEXTURE_CUBE_MAP_POSITIVE_X + dB, TB, this.getCaps().s3tc[oB], LB.width, LB.height, 0, void 0) : kB.texImage2D(kB.TEXTURE_CUBE_MAP_POSITIVE_X + dB, TB, BB, LB.width, LB.height, 0, DB, OB, null);
          this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null)
        }
        this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, LB, !0), BB && yB && this._gl.generateMipmap(this._gl.TEXTURE_CUBE_MAP);
        const EB = this._getSamplingParameters(gB, yB);
        return kB.texParameteri(kB.TEXTURE_CUBE_MAP, kB.TEXTURE_MAG_FILTER, EB.mag), kB.texParameteri(kB.TEXTURE_CUBE_MAP, kB.TEXTURE_MIN_FILTER, EB.min), kB.texParameteri(kB.TEXTURE_CUBE_MAP, kB.TEXTURE_WRAP_S, kB.CLAMP_TO_EDGE), kB.texParameteri(kB.TEXTURE_CUBE_MAP, kB.TEXTURE_WRAP_T, kB.CLAMP_TO_EDGE), this._bindTextureDirectly(kB.TEXTURE_CUBE_MAP, null), LB.generateMipMaps = yB, LB.samplingMode = gB, LB.isReady = !0, LB
      }, yB.ThinEngine.prototype.updateRawCubeTexture = function(TB, dB, VB, yB, pB) {
        let lB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          JB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        TB._bufferViewArray = dB, TB.format = VB, TB.type = yB, TB.invertY = pB, TB._compression = lB;
        const gB = this._gl,
          oB = this._getWebGLTextureType(yB);
        let kB = this._getInternalFormat(VB);
        const LB = this._getRGBABufferInternalSizedFormat(yB);
        let OB = !1;
        kB === gB.RGB && (kB = gB.RGBA, OB = !0), this._bindTextureDirectly(gB.TEXTURE_CUBE_MAP, TB, !0), this._unpackFlipY(void 0 === pB || !!pB), TB.width % 4 !== 0 && gB.pixelStorei(gB.UNPACK_ALIGNMENT, 1);
        for (let YB = 0; YB < 6; YB++) {
          let VB = dB[YB];
          lB ? gB.compressedTexImage2D(gB.TEXTURE_CUBE_MAP_POSITIVE_X + YB, JB, this.getCaps().s3tc[lB], TB.width, TB.height, 0, VB) : (OB && (VB = BB(VB, TB.width, TB.height, yB)), gB.texImage2D(gB.TEXTURE_CUBE_MAP_POSITIVE_X + YB, JB, LB, TB.width, TB.height, 0, kB, oB, VB))
        }(!this.needPOTTextures || (0, YB.i)(TB.width) && (0, YB.i)(TB.height)) && TB.generateMipMaps && 0 === JB && this._gl.generateMipmap(this._gl.TEXTURE_CUBE_MAP), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), TB.isReady = !0
      }, yB.ThinEngine.prototype.createRawCubeTextureFromUrl = function(TB, dB, VB, yB, pB, lB, JB, YB) {
        let gB = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          oB = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          kB = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 3,
          LB = arguments.length > 11 && void 0 !== arguments[11] && arguments[11];
        const OB = this._gl,
          DB = this.createRawCubeTexture(null, VB, yB, pB, !lB, LB, kB, null);
        dB?.addPendingData(DB), DB.url = TB, DB.isReady = !1, this._internalTexturesCache.push(DB);
        const uB = (BB, TB) => {
            dB?.removePendingData(DB), oB && oB(BB ? BB.status + " " + BB.statusText : "Failed to parse texture data", TB)
          },
          HB = async TB => {
            if (!DB._hardwareTexture) return;
            const VB = JB(TB);
            if (!VB) return;
            const lB = VB instanceof Promise ? await VB : VB,
              oB = DB.width;
            if (YB) {
              const TB = this._getWebGLTextureType(pB);
              let dB = this._getInternalFormat(yB);
              const VB = this._getRGBABufferInternalSizedFormat(pB);
              let JB = !1;
              dB === OB.RGB && (dB = OB.RGBA, JB = !0), this._bindTextureDirectly(OB.TEXTURE_CUBE_MAP, DB, !0), this._unpackFlipY(!1);
              const gB = YB(lB);
              for (let yB = 0; yB < gB.length; yB++) {
                const lB = oB >> yB;
                for (let YB = 0; YB < 6; YB++) {
                  let oB = gB[yB][YB];
                  JB && (oB = BB(oB, lB, lB, pB)), OB.texImage2D(YB, yB, VB, lB, lB, 0, dB, TB, oB)
                }
              }
              this._bindTextureDirectly(OB.TEXTURE_CUBE_MAP, null)
            } else this.updateRawCubeTexture(DB, lB, yB, pB, LB);
            DB.isReady = !0, dB?.removePendingData(DB), DB.onLoadedObservable.notifyObservers(DB), DB.onLoadedObservable.clear(), gB && gB()
          };
        return this._loadFile(TB, (BB => {
          HB(BB).catch((BB => {
            uB(void 0, BB)
          }))
        }), void 0, dB?.offlineProvider, !0, uB), DB
      }, yB.ThinEngine.prototype.createRawTexture2DArray = TB(!1), yB.ThinEngine.prototype.createRawTexture3D = TB(!0), yB.ThinEngine.prototype.updateRawTexture2DArray = dB(!1), yB.ThinEngine.prototype.updateRawTexture3D = dB(!0))
    }();
    var oB = dB(38620);
    let kB = !1;
    kB || (kB = !0, yB.ThinEngine.prototype._readTexturePixelsSync = function(BB, TB, dB) {
      let VB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1,
        yB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        pB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        lB = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
        JB = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        YB = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
        gB = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
      const kB = this._gl;
      if (!kB) throw new Error("Engine does not have gl rendering context.");
      if (!this._dummyFramebuffer) {
        const BB = kB.createFramebuffer();
        if (!BB) throw new Error("Unable to create dummy framebuffer");
        this._dummyFramebuffer = BB
      }
      kB.bindFramebuffer(kB.FRAMEBUFFER, this._dummyFramebuffer), VB > -1 && (BB.is2DArray || BB.is3D) ? kB.framebufferTextureLayer(kB.FRAMEBUFFER, kB.COLOR_ATTACHMENT0, BB._hardwareTexture?.underlyingResource, yB, VB) : VB > -1 ? kB.framebufferTexture2D(kB.FRAMEBUFFER, kB.COLOR_ATTACHMENT0, kB.TEXTURE_CUBE_MAP_POSITIVE_X + VB, BB._hardwareTexture?.underlyingResource, yB) : kB.framebufferTexture2D(kB.FRAMEBUFFER, kB.COLOR_ATTACHMENT0, kB.TEXTURE_2D, BB._hardwareTexture?.underlyingResource, yB);
      let LB = void 0 !== BB.type ? this._getWebGLTextureType(BB.type) : kB.UNSIGNED_BYTE;
      return JB ? pB || (pB = (0, oB.p)(BB.type, 4 * TB * dB)) : LB === kB.UNSIGNED_BYTE ? (pB || (pB = new Uint8Array(4 * TB * dB)), LB = kB.UNSIGNED_BYTE) : (pB || (pB = new Float32Array(4 * TB * dB)), LB = kB.FLOAT), lB && this.flushFramebuffer(), kB.readPixels(YB, gB, TB, dB, kB.RGBA, LB, pB), kB.bindFramebuffer(kB.FRAMEBUFFER, this._currentFramebuffer), pB
    }, yB.ThinEngine.prototype._readTexturePixels = function(BB, TB, dB) {
      let VB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1,
        yB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        pB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        lB = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
        JB = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        YB = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
        gB = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
      return Promise.resolve(this._readTexturePixelsSync(BB, TB, dB, VB, yB, pB, lB, JB, YB, gB))
    }), (0, dB(38726).b)();
    let LB = !1;
    LB || (LB = !0, yB.ThinEngine.prototype._createDepthStencilCubeTexture = function(BB, TB) {
      const dB = new lB.e(this, 12);
      if (dB.isCube = !0, 1 === this.Lu) return JB.b.Error("Depth cube texture is not supported by WebGL 1."), dB;
      const VB = {
          bilinearFiltering: !1,
          comparisonFunction: 0,
          generateStencil: !1,
          ...TB
        },
        yB = this._gl;
      this._bindTextureDirectly(yB.TEXTURE_CUBE_MAP, dB, !0), this._setupDepthStencilTexture(dB, BB, VB.bilinearFiltering, VB.comparisonFunction);
      for (let pB = 0; pB < 6; pB++) VB.generateStencil ? yB.texImage2D(yB.TEXTURE_CUBE_MAP_POSITIVE_X + pB, 0, yB.DEPTH24_STENCIL8, BB, BB, 0, yB.DEPTH_STENCIL, yB.UNSIGNED_INT_24_8, null) : yB.texImage2D(yB.TEXTURE_CUBE_MAP_POSITIVE_X + pB, 0, yB.DEPTH_COMPONENT24, BB, BB, 0, yB.DEPTH_COMPONENT, yB.UNSIGNED_INT, null);
      return this._bindTextureDirectly(yB.TEXTURE_CUBE_MAP, null), this._internalTexturesCache.push(dB), dB
    }, yB.ThinEngine.prototype._setCubeMapTextureParams = function(BB, TB, dB) {
      const VB = this._gl;
      VB.texParameteri(VB.TEXTURE_CUBE_MAP, VB.TEXTURE_MAG_FILTER, VB.LINEAR), VB.texParameteri(VB.TEXTURE_CUBE_MAP, VB.TEXTURE_MIN_FILTER, TB ? VB.LINEAR_MIPMAP_LINEAR : VB.LINEAR), VB.texParameteri(VB.TEXTURE_CUBE_MAP, VB.TEXTURE_WRAP_S, VB.CLAMP_TO_EDGE), VB.texParameteri(VB.TEXTURE_CUBE_MAP, VB.TEXTURE_WRAP_T, VB.CLAMP_TO_EDGE), BB.samplingMode = TB ? 3 : 2, TB && this.getCaps().textureMaxLevel && void 0 !== dB && dB > 0 && (VB.texParameteri(VB.TEXTURE_CUBE_MAP, VB.TEXTURE_MAX_LEVEL, dB), BB._maxLodLevel = dB), this._bindTextureDirectly(VB.TEXTURE_CUBE_MAP, null)
    }, yB.ThinEngine.prototype.createCubeTexture = function(BB, TB, dB, VB) {
      let yB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        pB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        lB = arguments.length > 6 ? arguments[6] : void 0,
        gB = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        oB = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        kB = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
        LB = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
        OB = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
        DB = arguments.length > 13 && void 0 !== arguments[13] && arguments[13],
        uB = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : null;
      const HB = this._gl;
      return this.createCubeTextureBase(BB, TB, dB, !!VB, yB, pB, lB, gB, oB, kB, LB, OB, (BB => this._bindTextureDirectly(HB.TEXTURE_CUBE_MAP, BB, !0)), ((BB, TB) => {
        const dB = this.needPOTTextures ? (0, YB.g)(TB[0].width, this._caps.maxCubemapTextureSize) : TB[0].width,
          pB = dB,
          gB = [HB.TEXTURE_CUBE_MAP_POSITIVE_X, HB.TEXTURE_CUBE_MAP_POSITIVE_Y, HB.TEXTURE_CUBE_MAP_POSITIVE_Z, HB.TEXTURE_CUBE_MAP_NEGATIVE_X, HB.TEXTURE_CUBE_MAP_NEGATIVE_Y, HB.TEXTURE_CUBE_MAP_NEGATIVE_Z];
        this._bindTextureDirectly(HB.TEXTURE_CUBE_MAP, BB, !0), this._unpackFlipY(!1);
        const oB = lB ? this._getInternalFormat(lB, BB._useSRGBBuffer) : BB._useSRGBBuffer ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : HB.RGBA;
        let kB = lB ? this._getInternalFormat(lB) : HB.RGBA;
        BB._useSRGBBuffer && 1 === this.Lu && (kB = oB);
        for (let VB = 0; VB < gB.length; VB++)
          if (TB[VB].width !== dB || TB[VB].height !== pB) {
            if (this._prepareWorkingCanvas(), !this._workingCanvas || !this._workingContext) return void JB.b.Warn("Cannot create canvas to resize texture.");
            this._workingCanvas.width = dB, this._workingCanvas.height = pB, this._workingContext.drawImage(TB[VB], 0, 0, TB[VB].width, TB[VB].height, 0, 0, dB, pB), HB.texImage2D(gB[VB], 0, oB, kB, HB.UNSIGNED_BYTE, this._workingCanvas)
          } else HB.texImage2D(gB[VB], 0, oB, kB, HB.UNSIGNED_BYTE, TB[VB]);
        VB || HB.generateMipmap(HB.TEXTURE_CUBE_MAP), this._setCubeMapTextureParams(BB, !VB), BB.width = dB, BB.height = pB, BB.isReady = !0, lB && (BB.format = lB), BB.onLoadedObservable.notifyObservers(BB), BB.onLoadedObservable.clear(), yB && yB()
      }), !!DB, uB)
    }, yB.ThinEngine.prototype.generateMipMapsForCubemap = function(BB) {
      let TB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (BB.generateMipMaps) {
        const dB = this._gl;
        this._bindTextureDirectly(dB.TEXTURE_CUBE_MAP, BB, !0), dB.generateMipmap(dB.TEXTURE_CUBE_MAP), TB && this._bindTextureDirectly(dB.TEXTURE_CUBE_MAP, null)
      }
    });
    dB(38728);
    let OB = !1;
    OB || (OB = !0, yB.ThinEngine.prototype.setDepthStencilTexture = function(BB, TB, dB, VB) {
      void 0 !== BB && (TB && (this._boundUniforms[BB] = TB), dB && dB.depthStencilTexture ? this._setTexture(BB, dB, !1, !0, VB) : this._setTexture(BB, null, void 0, void 0, VB))
    });
    let DB = !1;
    DB || (DB = !0, yB.ThinEngine.prototype.createRenderTargetCubeTexture = function(BB, TB) {
      const dB = this._createHardwareRenderTargetWrapper(!1, !0, BB),
        VB = {
          generateMipMaps: !0,
          generateDepthBuffer: !0,
          generateStencilBuffer: !1,
          type: 0,
          samplingMode: 3,
          format: 5,
          ...TB
        };
      VB.generateStencilBuffer = VB.generateDepthBuffer && VB.generateStencilBuffer, (1 !== VB.type || this._caps.textureFloatLinearFiltering) && (2 !== VB.type || this._caps.textureHalfFloatLinearFiltering) || (VB.samplingMode = 1);
      const yB = this._gl,
        pB = new lB.e(this, 5);
      this._bindTextureDirectly(yB.TEXTURE_CUBE_MAP, pB, !0);
      const YB = this._getSamplingParameters(VB.samplingMode, VB.generateMipMaps);
      1 !== VB.type || this._caps.textureFloat || (VB.type = 0, JB.b.Warn("Float textures are not supported. Cube render target forced to TEXTURETYPE_UNESIGNED_BYTE type")), yB.texParameteri(yB.TEXTURE_CUBE_MAP, yB.TEXTURE_MAG_FILTER, YB.mag), yB.texParameteri(yB.TEXTURE_CUBE_MAP, yB.TEXTURE_MIN_FILTER, YB.min), yB.texParameteri(yB.TEXTURE_CUBE_MAP, yB.TEXTURE_WRAP_S, yB.CLAMP_TO_EDGE), yB.texParameteri(yB.TEXTURE_CUBE_MAP, yB.TEXTURE_WRAP_T, yB.CLAMP_TO_EDGE);
      for (let lB = 0; lB < 6; lB++) yB.texImage2D(yB.TEXTURE_CUBE_MAP_POSITIVE_X + lB, 0, this._getRGBABufferInternalSizedFormat(VB.type, VB.format), BB, BB, 0, this._getInternalFormat(VB.format), this._getWebGLTextureType(VB.type), null);
      const gB = yB.createFramebuffer();
      return this._bindUnboundFramebuffer(gB), dB._depthStencilBuffer = this._setupFramebufferDepthAttachments(VB.generateStencilBuffer, VB.generateDepthBuffer, BB, BB), VB.generateMipMaps && yB.generateMipmap(yB.TEXTURE_CUBE_MAP), this._bindTextureDirectly(yB.TEXTURE_CUBE_MAP, null), this._bindUnboundFramebuffer(null), dB._framebuffer = gB, dB._generateDepthBuffer = VB.generateDepthBuffer, dB._generateStencilBuffer = VB.generateStencilBuffer, pB.width = BB, pB.height = BB, pB.isReady = !0, pB.isCube = !0, pB.samples = 1, pB.generateMipMaps = VB.generateMipMaps, pB.samplingMode = VB.samplingMode, pB.type = VB.type, pB.format = VB.format, this._internalTexturesCache.push(pB), dB.setTextures(pB), dB
    });
    var uB = dB(38732),
      HB = dB(38741);
    let EB = !1;
    EB || (EB = !0, yB.ThinEngine.prototype.createPrefilteredCubeTexture = function(BB, TB, VB, yB) {
      let pB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        YB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        gB = arguments.length > 6 ? arguments[6] : void 0,
        oB = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        kB = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
        LB = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null;
      return this.createCubeTexture(BB, TB, null, !1, (async BB => {
        if (!BB) return void(pB && pB(null));
        const YB = BB.texture;
        if (kB ? BB.info.sphericalPolynomial && (YB._sphericalPolynomial = BB.info.sphericalPolynomial) : YB._sphericalPolynomial = YB._sphericalPolynomial ?? new uB.d, YB._source = 9, this.getCaps().textureLOD) return void(pB && pB(YB));
        const gB = this._gl,
          oB = BB.width;
        if (!oB) return;
        const {
          DDSTools: LB
        } = await dB.e(286).then((() => dB(40461))), OB = [];
        for (let dB = 0; dB < 3; dB++) {
          const pB = 1 - dB / 2,
            kB = yB,
            DB = Math.log2(oB) * VB + yB,
            uB = kB + (DB - kB) * pB,
            EB = Math.round(Math.min(Math.max(uB, 0), DB)),
            vB = new lB.e(this, 2);
          if (vB.type = YB.type, vB.format = YB.format, vB.width = Math.pow(2, Math.max(Math.log2(oB) - EB, 0)), vB.height = vB.width, vB.isCube = !0, vB._cachedWrapU = 0, vB._cachedWrapV = 0, this._bindTextureDirectly(gB.TEXTURE_CUBE_MAP, vB, !0), vB.samplingMode = 2, gB.texParameteri(gB.TEXTURE_CUBE_MAP, gB.TEXTURE_MAG_FILTER, gB.LINEAR), gB.texParameteri(gB.TEXTURE_CUBE_MAP, gB.TEXTURE_MIN_FILTER, gB.LINEAR), gB.texParameteri(gB.TEXTURE_CUBE_MAP, gB.TEXTURE_WRAP_S, gB.CLAMP_TO_EDGE), gB.texParameteri(gB.TEXTURE_CUBE_MAP, gB.TEXTURE_WRAP_T, gB.CLAMP_TO_EDGE), BB.isDDS) {
            const TB = BB.info,
              dB = BB.data;
            this._unpackFlipY(TB.isCompressed), LB.UploadDDSLevels(this, vB, dB, TB, !0, 6, EB)
          } else JB.b.Warn("DDS is the only prefiltered cube map supported so far.");
          this._bindTextureDirectly(gB.TEXTURE_CUBE_MAP, null);
          const mB = new HB.b(TB);
          mB._isCube = !0, mB._texture = vB, vB.isReady = !0, OB.push(mB)
        }
        YB._lodTextureHigh = OB[2], YB._lodTextureMid = OB[1], YB._lodTextureLow = OB[0], pB && pB(YB)
      }), YB, gB, oB, kB, VB, yB, null, void 0, !1, LB)
    });
    var vB = dB(38680);
    let mB = !1;
    mB || (mB = !0, yB.ThinEngine.prototype.createUniformBuffer = function(BB, TB) {
      const dB = this._gl.createBuffer();
      if (!dB) throw new Error("Unable to create uniform buffer");
      const VB = new vB.d(dB);
      return this.bindUniformBuffer(VB), BB instanceof Float32Array ? this._gl.bufferData(this._gl.UNIFORM_BUFFER, BB, this._gl.STATIC_DRAW) : this._gl.bufferData(this._gl.UNIFORM_BUFFER, new Float32Array(BB), this._gl.STATIC_DRAW), this.bindUniformBuffer(null), VB.references = 1, VB
    }, yB.ThinEngine.prototype.createDynamicUniformBuffer = function(BB, TB) {
      const dB = this._gl.createBuffer();
      if (!dB) throw new Error("Unable to create dynamic uniform buffer");
      const VB = new vB.d(dB);
      return this.bindUniformBuffer(VB), BB instanceof Float32Array ? this._gl.bufferData(this._gl.UNIFORM_BUFFER, BB, this._gl.DYNAMIC_DRAW) : this._gl.bufferData(this._gl.UNIFORM_BUFFER, new Float32Array(BB), this._gl.DYNAMIC_DRAW), this.bindUniformBuffer(null), VB.references = 1, VB
    }, yB.ThinEngine.prototype.updateUniformBuffer = function(BB, TB, dB, VB) {
      this.bindUniformBuffer(BB), void 0 === dB && (dB = 0), void 0 === VB ? TB instanceof Float32Array ? this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, dB, TB) : this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, dB, new Float32Array(TB)) : TB instanceof Float32Array ? this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, 0, TB.subarray(dB, dB + VB)) : this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, 0, new Float32Array(TB).subarray(dB, dB + VB)), this.bindUniformBuffer(null)
    }, yB.ThinEngine.prototype.bindUniformBuffer = function(BB) {
      this._gl.bindBuffer(this._gl.UNIFORM_BUFFER, BB ? BB.underlyingResource : null)
    }, yB.ThinEngine.prototype.bindUniformBufferBase = function(BB, TB, dB) {
      this._gl.bindBufferBase(this._gl.UNIFORM_BUFFER, TB, BB ? BB.underlyingResource : null)
    }, yB.ThinEngine.prototype.bindUniformBlock = function(BB, TB, dB) {
      const VB = BB.program,
        yB = this._gl.getUniformBlockIndex(VB, TB);
      4294967295 !== yB && this._gl.uniformBlockBinding(VB, yB, dB)
    });
    var iB = dB(38606),
      NB = dB(38652);
    let tB = !1;
    tB || (tB = !0, NB.c.prototype.displayLoadingUI = function() {
      if (!(0, iB.h)()) return;
      const BB = this.loadingScreen;
      BB && BB.displayLoadingUI()
    }, NB.c.prototype.hideLoadingUI = function() {
      if (!(0, iB.h)()) return;
      const BB = this._loadingScreen;
      BB && BB.hideLoadingUI()
    }, Object.defineProperty(NB.c.prototype, "loadingScreen", {
      get: function() {
        return !this._loadingScreen && this._renderingCanvas && (this._loadingScreen = NB.c.DefaultLoadingScreenFactory(this._renderingCanvas)), this._loadingScreen
      },
      set: function(BB) {
        this._loadingScreen = BB
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(NB.c.prototype, "loadingUIText", {
      set: function(BB) {
        this.loadingScreen.loadingUIText = BB
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(NB.c.prototype, "loadingUIBackgroundColor", {
      set: function(BB) {
        this.loadingScreen.loadingUIBackgroundColor = BB
      },
      enumerable: !0,
      configurable: !0
    })), (0, dB(38714).c)();
    let fB = !1;
    fB || (fB = !0, NB.c.prototype.getInputElement = function() {
      return this._renderingCanvas
    }, NB.c.prototype.getDepthFunction = function() {
      return this._depthCullingState.depthFunc
    }, NB.c.prototype.setDepthFunction = function(BB) {
      this._depthCullingState.depthFunc = BB
    }, NB.c.prototype.setDepthFunctionToGreater = function() {
      this.setDepthFunction(516)
    }, NB.c.prototype.setDepthFunctionToGreaterOrEqual = function() {
      this.setDepthFunction(518)
    }, NB.c.prototype.setDepthFunctionToLess = function() {
      this.setDepthFunction(513)
    }, NB.c.prototype.setDepthFunctionToLessOrEqual = function() {
      this.setDepthFunction(515)
    }, NB.c.prototype.getDepthWrite = function() {
      return this._depthCullingState.depthMask
    }, NB.c.prototype.setDepthWrite = function(BB) {
      this._depthCullingState.depthMask = BB
    }, NB.c.prototype.setAlphaConstants = function(BB, TB, dB, VB) {
      this._alphaState.setAlphaBlendConstants(BB, TB, dB, VB)
    }, NB.c.prototype.getAlphaMode = function() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
      return this._alphaMode[BB]
    }, NB.c.prototype.getAlphaEquation = function() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
      return this._alphaEquation[BB]
    });
    let sB = !1;
    sB || (sB = !0, NB.c.prototype.getStencilBuffer = function() {
      return this._stencilState.stencilTest
    }, NB.c.prototype.setStencilBuffer = function(BB) {
      this._stencilState.stencilTest = BB
    }, NB.c.prototype.getStencilMask = function() {
      return this._stencilState.stencilMask
    }, NB.c.prototype.setStencilMask = function(BB) {
      this._stencilState.stencilMask = BB
    }, NB.c.prototype.getStencilFunction = function() {
      return this._stencilState.stencilFunc
    }, NB.c.prototype.getStencilBackFunction = function() {
      return this._stencilState.stencilBackFunc
    }, NB.c.prototype.getStencilFunctionReference = function() {
      return this._stencilState.stencilFuncRef
    }, NB.c.prototype.getStencilFunctionMask = function() {
      return this._stencilState.stencilFuncMask
    }, NB.c.prototype.setStencilFunction = function(BB) {
      this._stencilState.stencilFunc = BB
    }, NB.c.prototype.setStencilBackFunction = function(BB) {
      this._stencilState.stencilBackFunc = BB
    }, NB.c.prototype.setStencilFunctionReference = function(BB) {
      this._stencilState.stencilFuncRef = BB
    }, NB.c.prototype.setStencilFunctionMask = function(BB) {
      this._stencilState.stencilFuncMask = BB
    }, NB.c.prototype.getStencilOperationFail = function() {
      return this._stencilState.stencilOpStencilFail
    }, NB.c.prototype.getStencilBackOperationFail = function() {
      return this._stencilState.stencilBackOpStencilFail
    }, NB.c.prototype.getStencilOperationDepthFail = function() {
      return this._stencilState.stencilOpDepthFail
    }, NB.c.prototype.getStencilBackOperationDepthFail = function() {
      return this._stencilState.stencilBackOpDepthFail
    }, NB.c.prototype.getStencilOperationPass = function() {
      return this._stencilState.stencilOpStencilDepthPass
    }, NB.c.prototype.getStencilBackOperationPass = function() {
      return this._stencilState.stencilBackOpStencilDepthPass
    }, NB.c.prototype.setStencilOperationFail = function(BB) {
      this._stencilState.stencilOpStencilFail = BB
    }, NB.c.prototype.setStencilBackOperationFail = function(BB) {
      this._stencilState.stencilBackOpStencilFail = BB
    }, NB.c.prototype.setStencilOperationDepthFail = function(BB) {
      this._stencilState.stencilOpDepthFail = BB
    }, NB.c.prototype.setStencilBackOperationDepthFail = function(BB) {
      this._stencilState.stencilBackOpDepthFail = BB
    }, NB.c.prototype.setStencilOperationPass = function(BB) {
      this._stencilState.stencilOpStencilDepthPass = BB
    }, NB.c.prototype.setStencilBackOperationPass = function(BB) {
      this._stencilState.stencilBackOpStencilDepthPass = BB
    }, NB.c.prototype.cacheStencilState = function() {
      this._cachedStencilBuffer = this.getStencilBuffer(), this._cachedStencilFunction = this.getStencilFunction(), this._cachedStencilMask = this.getStencilMask(), this._cachedStencilOperationPass = this.getStencilOperationPass(), this._cachedStencilOperationFail = this.getStencilOperationFail(), this._cachedStencilOperationDepthFail = this.getStencilOperationDepthFail(), this._cachedStencilReference = this.getStencilFunctionReference()
    }, NB.c.prototype.restoreStencilState = function() {
      this.setStencilFunction(this._cachedStencilFunction), this.setStencilMask(this._cachedStencilMask), this.setStencilBuffer(this._cachedStencilBuffer), this.setStencilOperationPass(this._cachedStencilOperationPass), this.setStencilOperationFail(this._cachedStencilOperationFail), this.setStencilOperationDepthFail(this._cachedStencilOperationDepthFail), this.setStencilFunctionReference(this._cachedStencilReference)
    });
    dB(38780);
    let MB = !1;
    MB || (MB = !0, NB.c.prototype.createDepthStencilTexture = function(BB, TB, dB) {
      if (TB.isCube) {
        const dB = BB.width || BB;
        return this._createDepthStencilCubeTexture(dB, TB)
      }
      return this._createDepthStencilTexture(BB, TB, dB)
    });
    dB(38788), dB(38830);
    let zB = !1;
    zB || (zB = !0, yB.ThinEngine.prototype.enableScissor = function(BB, TB, dB, VB) {
      const yB = this._gl;
      yB.enable(yB.SCISSOR_TEST), yB.scissor(BB, TB, dB, VB)
    }, yB.ThinEngine.prototype.disableScissor = function() {
      const BB = this._gl;
      BB.disable(BB.SCISSOR_TEST)
    })
  },
  38565: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => NB
    });
    var VB = dB(38569),
      yB = dB(36148),
      pB = dB(38584),
      lB = dB(38657);
    class JB {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 30;
        this._enabled = !0, this._rollingFrameTime = new YB(BB)
      }
      sampleFrame() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : lB.d.Now;
        if (this._enabled) {
          if (null != this._lastFrameTimeMs) {
            const TB = BB - this._lastFrameTimeMs;
            this._rollingFrameTime.add(TB)
          }
          this._lastFrameTimeMs = BB
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
        const BB = this._rollingFrameTime.history(0);
        return 0 === BB ? 0 : 1e3 / BB
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
    class YB {
      constructor(BB) {
        this._samples = new Array(BB), this.reset()
      }
      add(BB) {
        let TB;
        if (this.isSaturated()) {
          const BB = this._samples[this._pos];
          TB = BB - this.average, this.average -= TB / (this._sampleCount - 1), this._m2 -= TB * (BB - this.average)
        } else this._sampleCount++;
        TB = BB - this.average, this.average += TB / this._sampleCount, this._m2 += TB * (BB - this.average), this.variance = this._m2 / (this._sampleCount - 1), this._samples[this._pos] = BB, this._pos++, this._pos %= this._samples.length
      }
      history(BB) {
        if (BB >= this._sampleCount || BB >= this._samples.length) return 0;
        const TB = this._wrapPosition(this._pos - 1);
        return this._samples[this._wrapPosition(TB - BB)]
      }
      isSaturated() {
        return this._sampleCount >= this._samples.length
      }
      reset() {
        this.average = 0, this.variance = 0, this._sampleCount = 0, this._pos = 0, this._m2 = 0
      }
      _wrapPosition(BB) {
        const TB = this._samples.length;
        return (BB % TB + TB) % TB
      }
    }
    var gB = dB(38680),
      oB = dB(37651),
      kB = dB(38698),
      LB = dB(38652),
      OB = dB(38606);

    function DB(BB) {
      const TB = function(BB) {
        if (!(0, OB.c)() || !document.body) return null;
        const TB = document.createElement("span");
        TB.textContent = "Hg", TB.style.font = BB;
        const dB = document.createElement("div");
        dB.style.display = "inline-block", dB.style.width = "1px", dB.style.height = "0px", dB.style.verticalAlign = "bottom";
        const VB = document.createElement("div");
        let yB, pB;
        VB.style.whiteSpace = "nowrap", VB.appendChild(TB), VB.appendChild(dB), document.body.appendChild(VB);
        try {
          pB = dB.getBoundingClientRect().top - TB.getBoundingClientRect().top, dB.style.verticalAlign = "baseline", yB = dB.getBoundingClientRect().top - TB.getBoundingClientRect().top
        } finally {
          document.body.removeChild(VB)
        }
        const lB = {
          ascent: yB,
          height: pB,
          descent: pB - yB
        };
        return uB(lB) ? lB : null
      }(BB);
      if (TB) return TB;
      const dB = function(BB) {
        let TB = null;
        try {
          "undefined" !== typeof OffscreenCanvas ? TB = new OffscreenCanvas(64, 64) : (0, OB.c)() && "function" === typeof document.createElement && (TB = document.createElement("canvas"), TB.width = 64, TB.height = 64);
          const dB = TB?.getContext("2d");
          if (!dB) return null;
          dB.font = BB;
          const VB = dB.measureText("Hg"),
            yB = Number(VB.actualBoundingBoxAscent ?? VB.fontBoundingBoxAscent),
            pB = Number(VB.actualBoundingBoxDescent ?? VB.fontBoundingBoxDescent),
            lB = {
              ascent: yB,
              height: yB + pB,
              descent: pB
            };
          return uB(lB) ? lB : null
        } catch {
          return null
        } finally {
          const BB = TB;
          "function" === typeof BB?.dispose && BB.dispose()
        }
      }(BB);
      return dB || function(BB) {
        const TB = Math.max(1, function(BB) {
            const TB = /(?:^|\s)([0-9]+(?:\.[0-9]+)?)px(?:\/|\s|$)/.exec(String(BB || ""));
            return TB ? Number(TB[1]) : 16
          }(BB)),
          dB = .8 * TB,
          VB = .2 * TB;
        return {
          ascent: dB,
          height: dB + VB,
          descent: VB
        }
      }(BB)
    }

    function uB(BB) {
      return Number.isFinite(BB.ascent) && Number.isFinite(BB.height) && Number.isFinite(BB.descent) && BB.height > 0
    }

    function HB(BB) {
      if (BB.requestPointerLock) {
        const TB = BB.requestPointerLock();
        TB instanceof Promise ? TB.then((() => {
          BB.focus()
        })).catch((() => {})) : BB.focus()
      }
    }
    var EB = dB(38708),
      vB = dB(38645),
      mB = dB(38714),
      iB = dB(38716);
    class NB extends pB.ThinEngine {
      static get NpmPackage() {
        return LB.c.NpmPackage
      }
      static get Version() {
        return LB.c.Version
      }
      static get Instances() {
        return yB.c.Instances
      }
      static get LastCreatedEngine() {
        return yB.c.LastCreatedEngine
      }
      static get LastCreatedScene() {
        return yB.c.LastCreatedScene
      }
      static DefaultLoadingScreenFactory(BB) {
        return LB.c.DefaultLoadingScreenFactory(BB)
      }
      get _supportsHardwareTextureRescaling() {
        return !!NB._RescalePostProcessFactory
      }
      _measureFps() {
        this._performanceMonitor.sampleFrame(), this._fps = this._performanceMonitor.averageFPS, this._deltaTime = this._performanceMonitor.instantaneousFrameTime || 0
      }
      get performanceMonitor() {
        return this._performanceMonitor
      }
      constructor(BB, TB, dB) {
        let VB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        (0, mB.c)(), (0, iB.b)(), super(BB, TB, dB, VB), this._performanceMonitor = new JB, this._drawCalls = new EB.e, BB && (this._features.supportRenderPasses = !0)
      }
      _initGLContext() {
        super._initGLContext(), this._rescalePostProcess = null
      }
      _sharedInit(BB) {
        super._sharedInit(BB),
          function(BB, TB, dB) {
            BB._onCanvasFocus = () => {
              BB.onCanvasFocusObservable.notifyObservers(BB)
            }, BB._onCanvasBlur = () => {
              BB.onCanvasBlurObservable.notifyObservers(BB)
            }, BB._onCanvasContextMenu = TB => {
              BB.disableContextMenu && TB.preventDefault()
            }, TB.addEventListener("focus", BB._onCanvasFocus), TB.addEventListener("blur", BB._onCanvasBlur), TB.addEventListener("contextmenu", BB._onCanvasContextMenu), BB._onBlur = () => {
              BB.disablePerformanceMonitorInBackground && BB.performanceMonitor.disable(), BB._windowIsBackground = !0
            }, BB._onFocus = () => {
              BB.disablePerformanceMonitorInBackground && BB.performanceMonitor.enable(), BB._windowIsBackground = !1
            }, BB._onCanvasPointerOut = dB => {
              document.elementFromPoint(dB.clientX, dB.clientY) !== TB && BB.onCanvasPointerOutObservable.notifyObservers(dB)
            };
            const VB = BB.getHostWindow();
            VB && "function" === typeof VB.addEventListener && (VB.addEventListener("blur", BB._onBlur), VB.addEventListener("focus", BB._onFocus)), TB.addEventListener("pointerout", BB._onCanvasPointerOut), dB.doNotHandleTouchAction || function(BB) {
              BB && BB.setAttribute && (BB.setAttribute("touch-action", "none"), BB.style.touchAction = "none", BB.style.webkitTapHighlightColor = "transparent")
            }(TB), !LB.c.audioEngine && dB.audioEngine && LB.c.AudioEngineFactory && (LB.c.audioEngine = LB.c.AudioEngineFactory(BB.getRenderingCanvas(), BB.getAudioContext(), BB.getAudioDestination())), (0, OB.c)() && (BB._onFullscreenChange = () => {
              BB.isFullscreen = !!document.fullscreenElement, BB.isFullscreen && BB._pointerLockRequested && TB && HB(TB)
            }, document.addEventListener("fullscreenchange", BB._onFullscreenChange, !1), document.addEventListener("webkitfullscreenchange", BB._onFullscreenChange, !1), BB._onPointerLockChange = () => {
              BB.isPointerLock = document.pointerLockElement === TB
            }, document.addEventListener("pointerlockchange", BB._onPointerLockChange, !1), document.addEventListener("webkitpointerlockchange", BB._onPointerLockChange, !1)), BB.enableOfflineSupport = void 0 !== LB.c.OfflineProviderFactory, BB._deterministicLockstep = !!dB.deterministicLockstep, BB._lockstepMaxSteps = dB.lockstepMaxSteps || 0, BB._timeStep = dB.timeStep || 1 / 60
          }(this, BB, this._creationOptions)
      }
      resizeImageBitmap(BB, TB, dB) {
        return function(BB, TB, dB, VB) {
          const yB = BB.createCanvas(dB, VB).getContext("2d");
          if (!yB) throw new Error("Unable to get 2d context for resizeImageBitmap");
          return yB.drawImage(TB, 0, 0), yB.getImageData(0, 0, dB, VB).data
        }(this, BB, TB, dB)
      }
      async _createImageBitmapFromSource(BB, TB) {
        return await async function(BB, TB, dB) {
          return await new Promise(((VB, yB) => {
            const pB = new Image;
            pB.onload = () => {
              pB.decode().then((() => {
                BB.createImageBitmap(pB, dB).then((BB => {
                  VB(BB)
                }))
              }))
            }, pB.onerror = () => {
              yB(`Error loading image ${pB.src}`)
            }, pB.src = TB
          }))
        }(this, BB, TB)
      }
      switchFullscreen(BB) {
        this.isFullscreen ? this.exitFullscreen() : this.enterFullscreen(BB)
      }
      enterFullscreen(BB) {
        this.isFullscreen || (this._pointerLockRequested = BB, this._renderingCanvas && function(BB) {
          const TB = BB.requestFullscreen || BB.webkitRequestFullscreen;
          TB && TB.call(BB)
        }(this._renderingCanvas))
      }
      exitFullscreen() {
        this.isFullscreen && function() {
          const BB = document;
          document.exitFullscreen ? document.exitFullscreen() : BB.webkitCancelFullScreen && BB.webkitCancelFullScreen()
        }()
      }
      setDitheringState(BB) {
        BB ? this._gl.enable(this._gl.DITHER) : this._gl.disable(this._gl.DITHER)
      }
      setRasterizerState(BB) {
        BB ? this._gl.disable(this._gl.RASTERIZER_DISCARD) : this._gl.enable(this._gl.RASTERIZER_DISCARD)
      }
      setDirectViewport(BB, TB, dB, VB) {
        const yB = this._cachedViewport;
        return this._cachedViewport = null, this._viewport(BB, TB, dB, VB), yB
      }
      scissorClear(BB, TB, dB, VB, yB) {
        this.enableScissor(BB, TB, dB, VB), this.clear(yB, !0, !0, !0), this.disableScissor()
      }
      getVertexShaderSource(BB) {
        const TB = this._gl.getAttachedShaders(BB);
        return TB ? this._gl.getShaderSource(TB[0]) : null
      }
      getFragmentShaderSource(BB) {
        const TB = this._gl.getAttachedShaders(BB);
        return TB ? this._gl.getShaderSource(TB[1]) : null
      }
      set framebufferDimensionsObject(BB) {
        this._framebufferDimensionsObject = BB, this._framebufferDimensionsObject && this.onResizeObservable.notifyObservers(this)
      }
      _rebuildBuffers() {
        for (const BB of this.scenes) BB.resetCachedMaterial(), BB._rebuildGeometries();
        for (const BB of this._virtualScenes) BB.resetCachedMaterial(), BB._rebuildGeometries();
        super._rebuildBuffers()
      }
      getFontOffset(BB) {
        return DB(BB)
      }
      enterPointerlock() {
        this._renderingCanvas && HB(this._renderingCanvas)
      }
      exitPointerlock() {
        document.exitPointerLock && document.exitPointerLock()
      }
      Rm() {
        this._measureFps(), super.Rm()
      }
      _deletePipelineContext(BB) {
        const TB = BB;
        TB && TB.program && TB.transformFeedback && (this.deleteTransformFeedback(TB.transformFeedback), TB.transformFeedback = null), super._deletePipelineContext(BB)
      }
      createShaderProgram(BB, TB, dB, VB, yB) {
        let pB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        yB = yB || this._gl, this.onBeforeShaderCompilationObservable.notifyObservers(this);
        const lB = super.createShaderProgram(BB, TB, dB, VB, yB, pB);
        return this.onAfterShaderCompilationObservable.notifyObservers(this), lB
      }
      _createShaderProgram(BB, TB, dB, VB) {
        let yB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        const pB = VB.createProgram();
        if (BB.program = pB, !pB) throw new Error("Unable to create program");
        if (VB.attachShader(pB, TB), VB.attachShader(pB, dB), this.Lu > 1 && yB) {
          const TB = this.createTransformFeedback();
          this.bindTransformFeedback(TB), this.setTranformFeedbackVaryings(pB, yB), BB.transformFeedback = TB
        }
        return VB.linkProgram(pB), this.Lu > 1 && yB && this.bindTransformFeedback(null), BB.context = VB, BB.vertexShader = TB, BB.fragmentShader = dB, BB.isParallelCompiled || this._finalizePipelineContext(BB), pB
      }
      _releaseTexture(BB) {
        super._releaseTexture(BB)
      }
      _releaseRenderTargetWrapper(BB) {
        super._releaseRenderTargetWrapper(BB);
        for (const TB of this.scenes) {
          for (const dB of TB.postProcesses) dB._outputTexture === BB && (dB._outputTexture = null);
          for (const dB of TB.cameras)
            for (const TB of dB._postProcesses) TB && TB._outputTexture === BB && (TB._outputTexture = null)
        }
      }
      _rescaleTexture(BB, TB, dB, VB, yB) {
        this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MAG_FILTER, this._gl.LINEAR), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MIN_FILTER, this._gl.LINEAR), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_S, this._gl.CLAMP_TO_EDGE), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_T, this._gl.CLAMP_TO_EDGE);
        const pB = this.createRenderTargetTexture({
          width: TB.width,
          height: TB.height
        }, {
          generateMipMaps: !1,
          type: 0,
          samplingMode: 2,
          generateDepthBuffer: !1,
          generateStencilBuffer: !1
        });
        if (!this._rescalePostProcess && NB._RescalePostProcessFactory && (this._rescalePostProcess = NB._RescalePostProcessFactory(this)), this._rescalePostProcess) {
          this._rescalePostProcess.externalTextureSamplerBinding = !0;
          const lB = () => {
              this._rescalePostProcess.onApply = function(TB) {
                TB._bindTexture("textureSampler", BB)
              };
              let lB = dB;
              lB || (lB = this.scenes[this.scenes.length - 1]), lB.postProcessManager.directRender([this._rescalePostProcess], pB, !0), this._bindTextureDirectly(this._gl.TEXTURE_2D, TB, !0), this._gl.copyTexImage2D(this._gl.TEXTURE_2D, 0, VB, 0, 0, TB.width, TB.height, 0), this.unBindFramebuffer(pB), pB.dispose(), yB && yB()
            },
            JB = this._rescalePostProcess.getEffect();
          JB ? JB.executeWhenCompiled(lB) : this._rescalePostProcess.onEffectCreatedObservable.addOnce((BB => {
            BB.executeWhenCompiled(lB)
          }))
        }
      }
      wrapWebGLTexture(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3,
          yB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          pB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        const lB = new kB.b(BB, this._gl),
          JB = new VB.e(this, 15, !0);
        return JB._hardwareTexture = lB, JB.baseWidth = yB, JB.baseHeight = pB, JB.width = yB, JB.height = pB, JB.isReady = !0, JB.useMipMaps = TB, this.updateTextureSamplingMode(dB, JB), JB
      }
      updateWrappedWebGLTexture(BB, TB) {
        if (15 !== BB.source) throw new Error("updateWrappedWebGLTexture: target InternalTexture was not produced by wrapWebGLTexture.");
        for (const VB of this._renderTargetWrapperCache)
          if (VB.textures?.includes(BB)) {
            if (VB.isMulti) throw new Error("updateWrappedWebGLTexture: wrapped texture is part of a multi render-target; not supported. Dispose and re-wrap.");
            if (VB._depthStencilTexture) throw new Error("updateWrappedWebGLTexture: wrapped texture's render-target wrapper has a depth/stencil texture; not supported. Dispose and re-wrap.")
          } BB._hardwareTexture = new kB.b(TB, this._gl), BB.isReady = !0, BB._cachedCoordinatesMode = null, BB._cachedWrapU = null, BB._cachedWrapV = null, BB._cachedWrapR = null, BB._cachedAnisotropicFilteringLevel = null;
        for (const VB in this._boundTexturesCache) this._boundTexturesCache[VB] === BB && (this._boundTexturesCache[VB] = null);
        this.updateTextureSamplingMode(BB.samplingMode, BB);
        const dB = this._gl;
        for (const VB of this._renderTargetWrapperCache) {
          if (VB.texture !== BB) continue;
          const yB = VB,
            pB = VB.samples,
            lB = pB > 1;
          yB._framebuffer && dB.deleteFramebuffer(yB._framebuffer), !lB && yB._depthStencilBuffer && (dB.deleteRenderbuffer(yB._depthStencilBuffer), yB._depthStencilBuffer = null);
          const JB = this._currentFramebuffer,
            YB = dB.createFramebuffer();
          this._bindUnboundFramebuffer(YB), dB.framebufferTexture2D(dB.FRAMEBUFFER, dB.COLOR_ATTACHMENT0, dB.TEXTURE_2D, TB, 0), lB || (yB._depthStencilBuffer = this._setupFramebufferDepthAttachments(VB._generateStencilBuffer, VB._generateDepthBuffer, VB.width, VB.height)), this._bindUnboundFramebuffer(JB), yB._framebuffer = YB, lB && (VB._samples = 1, this.updateRenderTargetTextureSampleCount(yB, pB))
        }
      }
      _uploadImageToTexture(BB, TB) {
        let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          VB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const yB = this._gl,
          pB = this._getWebGLTextureType(BB.type),
          lB = this._getInternalFormat(BB.format),
          JB = this._getRGBABufferInternalSizedFormat(BB.type, lB),
          YB = BB.isCube ? yB.TEXTURE_CUBE_MAP : yB.TEXTURE_2D;
        this._bindTextureDirectly(YB, BB, !0), this._unpackFlipY(BB.invertY);
        let gB = yB.TEXTURE_2D;
        BB.isCube && (gB = yB.TEXTURE_CUBE_MAP_POSITIVE_X + dB), yB.texImage2D(gB, VB, JB, lB, pB, TB), this._bindTextureDirectly(YB, null, !0)
      }
      updateTextureComparisonFunction(BB, TB) {
        if (1 === this.Lu) return void oB.b.Error("WebGL 1 does not support texture comparison.");
        const dB = this._gl;
        BB.isCube ? (this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, BB, !0), 0 === TB ? (dB.texParameteri(dB.TEXTURE_CUBE_MAP, dB.TEXTURE_COMPARE_FUNC, 515), dB.texParameteri(dB.TEXTURE_CUBE_MAP, dB.TEXTURE_COMPARE_MODE, dB.NONE)) : (dB.texParameteri(dB.TEXTURE_CUBE_MAP, dB.TEXTURE_COMPARE_FUNC, TB), dB.texParameteri(dB.TEXTURE_CUBE_MAP, dB.TEXTURE_COMPARE_MODE, dB.COMPARE_REF_TO_TEXTURE)), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null)) : (this._bindTextureDirectly(this._gl.TEXTURE_2D, BB, !0), 0 === TB ? (dB.texParameteri(dB.TEXTURE_2D, dB.TEXTURE_COMPARE_FUNC, 515), dB.texParameteri(dB.TEXTURE_2D, dB.TEXTURE_COMPARE_MODE, dB.NONE)) : (dB.texParameteri(dB.TEXTURE_2D, dB.TEXTURE_COMPARE_FUNC, TB), dB.texParameteri(dB.TEXTURE_2D, dB.TEXTURE_COMPARE_MODE, dB.COMPARE_REF_TO_TEXTURE)), this._bindTextureDirectly(this._gl.TEXTURE_2D, null)), BB._comparisonFunction = TB
      }
      createInstancesBuffer(BB) {
        const TB = this._gl.createBuffer();
        if (!TB) throw new Error("Unable to create instance buffer");
        const dB = new gB.d(TB);
        return dB.Kk = BB, this.bindArrayBuffer(dB), this._gl.bufferData(this._gl.ARRAY_BUFFER, BB, this._gl.DYNAMIC_DRAW), dB.references = 1, dB
      }
      deleteInstancesBuffer(BB) {
        this._gl.deleteBuffer(BB)
      }
      async _clientWaitAsync(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10;
        const VB = this._gl;
        return await new Promise(((yB, pB) => {
          (0, vB.c)((() => {
            const dB = VB.clientWaitSync(BB, TB, 0);
            if (dB == VB.WAIT_FAILED) throw new Error("clientWaitSync failed");
            return dB != VB.TIMEOUT_EXPIRED
          }), yB, pB, dB)
        }))
      }
      _readPixelsAsync(BB, TB, dB, VB, yB, pB, lB) {
        if (this._webGLVersion < 2) throw new Error("_readPixelsAsync only work on WebGL2+");
        const JB = this._gl,
          YB = JB.createBuffer();
        JB.bindBuffer(JB.PIXEL_PACK_BUFFER, YB), JB.bufferData(JB.PIXEL_PACK_BUFFER, lB.byteLength, JB.STREAM_READ), JB.readPixels(BB, TB, dB, VB, yB, pB, 0), JB.bindBuffer(JB.PIXEL_PACK_BUFFER, null);
        const gB = JB.fenceSync(JB.SYNC_GPU_COMMANDS_COMPLETE, 0);
        return gB ? (JB.flush(), this._clientWaitAsync(gB, 0, 10).then((() => (JB.deleteSync(gB), JB.bindBuffer(JB.PIXEL_PACK_BUFFER, YB), JB.getBufferSubData(JB.PIXEL_PACK_BUFFER, 0, lB), JB.bindBuffer(JB.PIXEL_PACK_BUFFER, null), JB.deleteBuffer(YB), lB)))) : null
      }
      dispose() {
        this.hideLoadingUI?.(), this._rescalePostProcess && this._rescalePostProcess.dispose(),
          function(BB, TB) {
            1 === yB.c.Instances.length && LB.c.audioEngine && (LB.c.audioEngine.dispose(), LB.c.audioEngine = null);
            const dB = BB.getHostWindow();
            dB && "function" === typeof dB.removeEventListener && (dB.removeEventListener("blur", BB._onBlur), dB.removeEventListener("focus", BB._onFocus)), TB && (TB.removeEventListener("focus", BB._onCanvasFocus), TB.removeEventListener("blur", BB._onCanvasBlur), TB.removeEventListener("pointerout", BB._onCanvasPointerOut), TB.removeEventListener("contextmenu", BB._onCanvasContextMenu)), (0, OB.c)() && (document.removeEventListener("fullscreenchange", BB._onFullscreenChange), document.removeEventListener("mozfullscreenchange", BB._onFullscreenChange), document.removeEventListener("webkitfullscreenchange", BB._onFullscreenChange), document.removeEventListener("msfullscreenchange", BB._onFullscreenChange), document.removeEventListener("pointerlockchange", BB._onPointerLockChange), document.removeEventListener("mspointerlockchange", BB._onPointerLockChange), document.removeEventListener("mozpointerlockchange", BB._onPointerLockChange), document.removeEventListener("webkitpointerlockchange", BB._onPointerLockChange))
          }(this, this._renderingCanvas), super.dispose()
      }
    }
    NB.ALPHA_DISABLE = 0, NB.ALPHA_ADD = 1, NB.ALPHA_COMBINE = 2, NB.ALPHA_SUBTRACT = 3, NB.ALPHA_MULTIPLY = 4, NB.ALPHA_MAXIMIZED = 5, NB.ALPHA_ONEONE = 6, NB.ALPHA_PREMULTIPLIED = 7, NB.ALPHA_PREMULTIPLIED_PORTERDUFF = 8, NB.ALPHA_INTERPOLATE = 9, NB.ALPHA_SCREENMODE = 10, NB.DELAYLOADSTATE_NONE = 0, NB.DELAYLOADSTATE_LOADED = 1, NB.DELAYLOADSTATE_LOADING = 2, NB.DELAYLOADSTATE_NOTLOADED = 4, NB.NEVER = 512, NB.ALWAYS = 519, NB.LESS = 513, NB.EQUAL = 514, NB.LEQUAL = 515, NB.GREATER = 516, NB.GEQUAL = 518, NB.NOTEQUAL = 517, NB.KEEP = 7680, NB.REPLACE = 7681, NB.INCR = 7682, NB.DECR = 7683, NB.INVERT = 5386, NB.INCR_WRAP = 34055, NB.DECR_WRAP = 34056, NB.TEXTURE_CLAMP_ADDRESSMODE = 0, NB.TEXTURE_WRAP_ADDRESSMODE = 1, NB.TEXTURE_MIRROR_ADDRESSMODE = 2, NB.TEXTUREFORMAT_ALPHA = 0, NB.TEXTUREFORMAT_LUMINANCE = 1, NB.TEXTUREFORMAT_LUMINANCE_ALPHA = 2, NB.TEXTUREFORMAT_RGB = 4, NB.TEXTUREFORMAT_RGBA = 5, NB.TEXTUREFORMAT_RED = 6, NB.TEXTUREFORMAT_R = 6, NB.TEXTUREFORMAT_R16_UNORM = 33322, NB.TEXTUREFORMAT_RG16_UNORM = 33324, NB.TEXTUREFORMAT_RGB16_UNORM = 32852, NB.TEXTUREFORMAT_RGBA16_UNORM = 32859, NB.TEXTUREFORMAT_R16_SNORM = 36760, NB.TEXTUREFORMAT_RG16_SNORM = 36761, NB.TEXTUREFORMAT_RGB16_SNORM = 36762, NB.TEXTUREFORMAT_RGBA16_SNORM = 36763, NB.TEXTUREFORMAT_RG = 7, NB.TEXTUREFORMAT_RED_INTEGER = 8, NB.TEXTUREFORMAT_R_INTEGER = 8, NB.TEXTUREFORMAT_RG_INTEGER = 9, NB.TEXTUREFORMAT_RGB_INTEGER = 10, NB.TEXTUREFORMAT_RGBA_INTEGER = 11, NB.TEXTURETYPE_UNSIGNED_BYTE = 0, NB.TEXTURETYPE_UNSIGNED_INT = 0, NB.TEXTURETYPE_FLOAT = 1, NB.TEXTURETYPE_HALF_FLOAT = 2, NB.TEXTURETYPE_BYTE = 3, NB.TEXTURETYPE_SHORT = 4, NB.TEXTURETYPE_UNSIGNED_SHORT = 5, NB.TEXTURETYPE_INT = 6, NB.TEXTURETYPE_UNSIGNED_INTEGER = 7, NB.TEXTURETYPE_UNSIGNED_SHORT_4_4_4_4 = 8, NB.TEXTURETYPE_UNSIGNED_SHORT_5_5_5_1 = 9, NB.TEXTURETYPE_UNSIGNED_SHORT_5_6_5 = 10, NB.TEXTURETYPE_UNSIGNED_INT_2_10_10_10_REV = 11, NB.TEXTURETYPE_UNSIGNED_INT_24_8 = 12, NB.TEXTURETYPE_UNSIGNED_INT_10F_11F_11F_REV = 13, NB.TEXTURETYPE_UNSIGNED_INT_5_9_9_9_REV = 14, NB.TEXTURETYPE_FLOAT_32_UNSIGNED_INT_24_8_REV = 15, NB.TEXTURE_NEAREST_SAMPLINGMODE = 1, NB.TEXTURE_BILINEAR_SAMPLINGMODE = 2, NB.TEXTURE_TRILINEAR_SAMPLINGMODE = 3, NB.TEXTURE_NEAREST_NEAREST_MIPLINEAR = 8, NB.TEXTURE_LINEAR_LINEAR_MIPNEAREST = 11, NB.TEXTURE_LINEAR_LINEAR_MIPLINEAR = 3, NB.TEXTURE_NEAREST_NEAREST_MIPNEAREST = 4, NB.TEXTURE_NEAREST_LINEAR_MIPNEAREST = 5, NB.TEXTURE_NEAREST_LINEAR_MIPLINEAR = 6, NB.TEXTURE_NEAREST_LINEAR = 7, NB.TEXTURE_NEAREST_NEAREST = 1, NB.TEXTURE_LINEAR_NEAREST_MIPNEAREST = 9, NB.TEXTURE_LINEAR_NEAREST_MIPLINEAR = 10, NB.TEXTURE_LINEAR_LINEAR = 2, NB.TEXTURE_LINEAR_NEAREST = 12, NB.TEXTURE_EXPLICIT_MODE = 0, NB.TEXTURE_SPHERICAL_MODE = 1, NB.TEXTURE_PLANAR_MODE = 2, NB.TEXTURE_CUBIC_MODE = 3, NB.TEXTURE_PROJECTION_MODE = 4, NB.TEXTURE_SKYBOX_MODE = 5, NB.TEXTURE_INVCUBIC_MODE = 6, NB.TEXTURE_EQUIRECTANGULAR_MODE = 7, NB.TEXTURE_FIXED_EQUIRECTANGULAR_MODE = 8, NB.TEXTURE_FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9, NB.SCALEMODE_FLOOR = 1, NB.SCALEMODE_NEAREST = 2, NB.SCALEMODE_CEILING = 3
  },
  38730: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => yB
    });
    var VB = dB(38702);
    class yB {
      get depthStencilTexture() {
        return this._depthStencilTexture
      }
      setDepthStencilTexture(BB) {
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && this._depthStencilTexture && this._depthStencilTexture.dispose(), this._depthStencilTexture = BB, this._generateDepthBuffer = this._generateStencilBuffer = this._depthStencilTextureWithStencil = !1, BB && (this._generateDepthBuffer = !0, this._generateStencilBuffer = this._depthStencilTextureWithStencil = (0, VB.d)(BB.format))
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
      getBaseArrayLayer(BB) {
        if (!this._textures) return -1;
        const TB = this._textures[BB],
          dB = this._layerIndices?.[BB] ?? 0,
          VB = this._faceIndices?.[BB] ?? 0;
        return TB.isCube ? 6 * dB + VB : TB.is3D ? 0 : dB
      }
      get samples() {
        return this._samples
      }
      setSamples(BB) {
        let TB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          dB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.samples === BB && !dB) return BB;
        const VB = this._isMulti ? this._engine.updateMultipleRenderTargetTextureSampleCount(this, BB, TB) : this._engine.updateRenderTargetTextureSampleCount(this, BB);
        return this._samples = BB, VB
      }
      resolveMSAATextures() {
        this.isMulti ? this._engine.resolveMultiFramebuffer(this) : this._engine.resolveFramebuffer(this)
      }
      generateMipMaps() {
        this._engine._currentRenderTarget === this && (this.isMulti ? this._engine.unBindMultiColorAttachmentFramebuffer(this, !0) : this._engine.unBindFramebuffer(this, !0)), this.isMulti ? this._engine.generateMipMapsMultiFramebuffer(this) : this._engine.generateMipMapsFramebuffer(this)
      }
      constructor(BB, TB, dB, VB, yB) {
        this._textures = null, this._faceIndices = null, this._layerIndices = null, this._samples = 1, this._attachments = null, this._generateStencilBuffer = !1, this._generateDepthBuffer = !1, this._depthStencilTextureWithStencil = !1, this.disableAutomaticMSAAResolve = !1, this.resolveMSAAColors = !0, this.resolveMSAADepth = !1, this.resolveMSAAStencil = !1, this.depthReadOnly = !1, this.stencilReadOnly = !1, this._isMulti = BB, this._isCube = TB, this._size = dB, this._engine = VB, this._depthStencilTexture = null, this.label = yB
      }
      setTextures(BB) {
        Array.isArray(BB) ? this._textures = BB : this._textures = BB ? [BB] : null
      }
      setTexture(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          dB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._textures || (this._textures = []), this._textures[TB] !== BB && (this._textures[TB] && dB && this._textures[TB].dispose(), this._textures[TB] = BB)
      }
      setLayerAndFaceIndices(BB, TB) {
        this._layerIndices = BB, this._faceIndices = TB
      }
      setLayerAndFaceIndex() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          TB = arguments.length > 1 ? arguments[1] : void 0,
          dB = arguments.length > 2 ? arguments[2] : void 0;
        this._layerIndices || (this._layerIndices = []), this._faceIndices || (this._faceIndices = []), void 0 !== TB && TB >= 0 && (this._layerIndices[BB] = TB), void 0 !== dB && dB >= 0 && (this._faceIndices[BB] = dB)
      }
      createDepthStencilTexture() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          TB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          dB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          VB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          yB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          pB = arguments.length > 5 ? arguments[5] : void 0;
        return this._depthStencilTexture?.dispose(), this._depthStencilTextureWithStencil = dB, this._depthStencilTextureLabel = pB, this._depthStencilTexture = this._engine.createDepthStencilTexture(this._size, {
          bilinearFiltering: TB,
          comparisonFunction: BB,
          generateStencil: dB,
          isCube: this._isCube,
          samples: VB,
          depthTextureFormat: yB,
          label: pB
        }, this), this._depthStencilTexture
      }
      _shareDepth(BB) {
        this.shareDepth(BB)
      }
      shareDepth(BB) {
        this._depthStencilTexture && (BB._depthStencilTexture && BB._depthStencilTexture.dispose(), BB._depthStencilTexture = this._depthStencilTexture, BB._depthStencilTextureWithStencil = this._depthStencilTextureWithStencil, this._depthStencilTexture.incrementReferences())
      }
      _swapAndDie(BB) {
        this.texture && this.texture._swapAndDie(BB), this._textures = null, this.dispose(!0)
      }
      _cloneRenderTargetWrapper() {
        let BB = null;
        if (this._isMulti) {
          const TB = this.textures;
          if (TB && TB.length > 0) {
            let dB = !1,
              VB = TB.length,
              yB = -1;
            const pB = TB[TB.length - 1]._source;
            14 !== pB && 12 !== pB || (dB = !0, yB = TB[TB.length - 1].format, VB--);
            const lB = [],
              JB = [],
              YB = [],
              gB = [],
              oB = [],
              kB = [],
              LB = [],
              OB = {};
            for (let BB = 0; BB < VB; ++BB) {
              const dB = TB[BB];
              lB.push(dB.samplingMode), JB.push(dB.type), YB.push(dB.format);
              void 0 !== OB[dB.uniqueId] ? (gB.push(-1), LB.push(0)) : (OB[dB.uniqueId] = BB, dB.is2DArray ? (gB.push(35866), LB.push(dB.depth)) : dB.isCube ? (gB.push(34067), LB.push(0)) : dB.is3D ? (gB.push(32879), LB.push(dB.depth)) : (gB.push(3553), LB.push(0))), this._faceIndices && oB.push(this._faceIndices[BB] ?? 0), this._layerIndices && kB.push(this._layerIndices[BB] ?? 0)
            }
            const DB = {
                samplingModes: lB,
                generateMipMaps: TB[0].generateMipMaps,
                generateDepthBuffer: this._generateDepthBuffer,
                generateStencilBuffer: this._generateStencilBuffer,
                generateDepthTexture: dB,
                depthTextureFormat: yB,
                types: JB,
                formats: YB,
                BJB: VB,
                targetTypes: gB,
                faceIndex: oB,
                layerIndex: kB,
                layerCounts: LB,
                label: this.label
              },
              uB = {
                width: this.width,
                height: this.height,
                depth: this.depth
              };
            BB = this._engine.createMultipleRenderTarget(uB, DB);
            for (let HB = 0; HB < VB; ++HB) {
              if (-1 !== gB[HB]) continue;
              const dB = OB[TB[HB].uniqueId];
              BB.setTexture(BB.textures[dB], HB)
            }
          }
        } else {
          const TB = {};
          if (TB.generateDepthBuffer = this._generateDepthBuffer, TB.generateMipMaps = this.texture?.generateMipMaps ?? !1, TB.generateStencilBuffer = this._generateStencilBuffer, TB.samplingMode = this.texture?.samplingMode, TB.type = this.texture?.type, TB.format = this.texture?.format, TB.noColorAttachment = !this._textures, TB.label = this.label, this.isCube) BB = this._engine.createRenderTargetCubeTexture(this.width, TB);
          else {
            const dB = {
              width: this.width,
              height: this.height,
              layers: this.is2DArray || this.is3D ? this.texture?.depth : void 0
            };
            BB = this._engine.createRenderTargetTexture(dB, TB)
          }
          BB.texture && (BB.texture.isReady = !0)
        }
        return BB
      }
      _swapRenderTargetWrapper(BB) {
        if (this._textures && BB._textures)
          for (let TB = 0; TB < this._textures.length; ++TB) this._textures[TB]._swapAndDie(BB._textures[TB], !1), BB._textures[TB].isReady = !0;
        this._depthStencilTexture && BB._depthStencilTexture && (this._depthStencilTexture._swapAndDie(BB._depthStencilTexture), BB._depthStencilTexture.isReady = !0), this._textures = null, this._depthStencilTexture = null
      }
      _rebuild() {
        const BB = this._cloneRenderTargetWrapper();
        if (BB) {
          if (this._depthStencilTexture) {
            const TB = this._depthStencilTexture.samplingMode,
              dB = this._depthStencilTexture.format,
              VB = 2 === TB || 3 === TB || 11 === TB;
            BB.createDepthStencilTexture(this._depthStencilTexture._comparisonFunction, VB, this._depthStencilTextureWithStencil, this._depthStencilTexture.samples, dB, this._depthStencilTextureLabel)
          }
          this.samples > 1 && BB.setSamples(this.samples), BB._swapRenderTargetWrapper(this), BB.dispose()
        }
      }
      releaseTextures() {
        if (this._textures)
          for (let BB = 0; BB < this._textures.length; ++BB) this._textures[BB].dispose();
        this._textures = null
      }
      dispose() {
        arguments.length > 0 && void 0 !== arguments[0] && arguments[0] || (this._depthStencilTexture?.dispose(), this._depthStencilTexture = null, this.releaseTextures()), this._engine._releaseRenderTargetWrapper(this)
      }
    }
  },
  39167: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => VB
    });
    class VB {
      static get ForceFullSceneLoadingForIncremental() {
        return VB._ForceFullSceneLoadingForIncremental
      }
      static set ForceFullSceneLoadingForIncremental(BB) {
        VB._ForceFullSceneLoadingForIncremental = BB
      }
      static get ShowLoadingScreen() {
        return VB._ShowLoadingScreen
      }
      static set ShowLoadingScreen(BB) {
        VB._ShowLoadingScreen = BB
      }
      static get loggingLevel() {
        return VB._LoggingLevel
      }
      static set loggingLevel(BB) {
        VB._LoggingLevel = BB
      }
      static get CleanBoneMatrixWeights() {
        return VB._CleanBoneMatrixWeights
      }
      static set CleanBoneMatrixWeights(BB) {
        VB._CleanBoneMatrixWeights = BB
      }
    }
    VB._ForceFullSceneLoadingForIncremental = !1, VB._ShowLoadingScreen = !0, VB._CleanBoneMatrixWeights = !1, VB._LoggingLevel = 0
  },
  38833: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => lB
    });
    var VB = dB(37651);
    const yB = new Map;

    function pB(BB, TB) {
      (function(BB) {
        return yB.delete(BB)
      })(BB) && VB.b.Warn(`Extension with the name '${BB}' already exists`), yB.set(BB, TB)
    }

    function lB(BB, TB) {
      "image/ktx" !== TB && "image/ktx2" !== TB || (BB = ".ktx"), yB.has(BB) || (BB.endsWith(".ies") && pB(".ies", (async () => await dB.e(289).then((() => dB(40470))).then((BB => new BB._IESTextureLoader)))), BB.endsWith(".dds") && pB(".dds", (async () => await dB.e(287).then((() => dB(40475))).then((BB => new BB._DDSTextureLoader)))), BB.endsWith(".basis") && pB(".basis", (async () => await dB.e(290).then((() => dB(40479))).then((BB => new BB._BasisTextureLoader)))), BB.endsWith(".env") && pB(".env", (async () => await Promise.all([dB.e(291), dB.e(288)]).then((() => dB(40488))).then((BB => new BB._ENVTextureLoader)))), BB.endsWith(".hdr") && pB(".hdr", (async () => await dB.e(292).then((() => dB(40541))).then((BB => new BB._HDRTextureLoader)))), (BB.endsWith(".ktx") || BB.endsWith(".ktx2")) && (pB(".ktx", (async () => await dB.e(293).then((() => dB(40543))).then((BB => new BB._KTXTextureLoader)))), pB(".ktx2", (async () => await dB.e(293).then((() => dB(40543))).then((BB => new BB._KTXTextureLoader))))), BB.endsWith(".tga") && pB(".tga", (async () => await dB.e(294).then((() => dB(40552))).then((BB => new BB._TGATextureLoader)))), BB.endsWith(".exr") && pB(".exr", (async () => await dB.e(295).then((() => dB(40560))).then((BB => new BB._ExrTextureLoader)))));
      const VB = yB.get(BB);
      return VB ? Promise.resolve(VB(TB)) : null
    }
  },
  39191: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => lB,
      c: () => gB
    });
    var VB = dB(39040),
      yB = dB(38775),
      pB = dB(36166);
    class lB extends VB.b {
      get yBB() {
        return this._subMaterials
      }
      set yBB(BB) {
        this._subMaterials = BB, this._hookArray(BB)
      }
      getChildren() {
        return this.yBB
      }
      constructor(BB, TB) {
        super(BB, TB, !0), this._waitingSubMaterialsUniqueIds = [], this.jU().addMultiMaterial(this), this.yBB = [], this._storeEffectOnSubMeshes = !0
      }
      _hookArray(BB) {
        var TB = this;
        const dB = BB.push;
        BB.push = function() {
          for (var VB = arguments.length, yB = new Array(VB), pB = 0; pB < VB; pB++) yB[pB] = arguments[pB];
          const lB = dB.apply(BB, yB);
          return TB._markAllSubMeshesAsTexturesDirty(), lB
        };
        const VB = BB.splice;
        BB.splice = (TB, dB) => {
          const yB = VB.call(BB, TB, dB ?? BB.length);
          return this._markAllSubMeshesAsTexturesDirty(), yB
        }
      }
      getSubMaterial(BB) {
        return BB < 0 || BB >= this.yBB.length ? this.jU().defaultMaterial : this.yBB[BB]
      }
      getActiveTextures() {
        return super.getActiveTextures().concat(...this.yBB.map((BB => BB ? BB.getActiveTextures() : [])))
      }
      hasTexture(BB) {
        if (super.hasTexture(BB)) return !0;
        for (let TB = 0; TB < this.yBB.length; TB++)
          if (this.yBB[TB]?.hasTexture(BB)) return !0;
        return !1
      }
      getClassName() {
        return "MultiMaterial"
      }
      isReadyForSubMesh(BB, TB, dB) {
        for (let VB = 0; VB < this.yBB.length; VB++) {
          const yB = this.yBB[VB];
          if (yB) {
            if (yB._storeEffectOnSubMeshes) {
              if (!yB.isReadyForSubMesh(BB, TB, dB)) return !1;
              continue
            }
            if (!yB.isReady(BB)) return !1
          }
        }
        return !0
      }
      clone(BB, TB) {
        const dB = new lB(BB, this.jU());
        for (let VB = 0; VB < this.yBB.length; VB++) {
          let yB;
          const pB = this.yBB[VB];
          yB = TB && pB ? pB.clone(BB + "-" + pB.name) : this.yBB[VB], dB.yBB.push(yB)
        }
        return dB
      }
      serialize() {
        const BB = {};
        BB.name = this.name, BB.id = this.id, BB.uniqueId = this.uniqueId, yB.c && (BB.tags = yB.c.GetTags(this)), BB.materialsUniqueIds = [], BB.materials = [];
        for (let TB = 0; TB < this.yBB.length; TB++) {
          const dB = this.yBB[TB];
          dB ? (BB.materialsUniqueIds.push(dB.uniqueId), BB.materials.push(dB.id)) : (BB.materialsUniqueIds.push(null), BB.materials.push(null))
        }
        return BB
      }
      dispose(BB, TB, dB) {
        const VB = this.jU();
        if (!VB) return;
        if (dB)
          for (let pB = 0; pB < this.yBB.length; pB++) {
            const dB = this.yBB[pB];
            dB && dB.dispose(BB, TB)
          }
        const yB = VB.multiMaterials.indexOf(this);
        yB >= 0 && VB.multiMaterials.splice(yB, 1), super.dispose(BB, TB)
      }
    }
    let JB = !1;

    function YB(BB, TB) {
      const dB = new lB(BB.name, TB);
      if (dB.id = BB.id, dB._loadedUniqueId = BB.uniqueId, yB.c && yB.c.AddTagsTo(dB, BB.tags), BB.materialsUniqueIds) dB._waitingSubMaterialsUniqueIds = BB.materialsUniqueIds;
      else
        for (const VB of BB.materials) dB.yBB.push(TB.getLastMaterialById(VB));
      return dB
    }

    function gB() {
      JB || (JB = !0, lB.ParseMultiMaterial = YB, (0, pB.g)("BABYLON.MultiMaterial", lB))
    }
  },
  38983: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => lB
    });
    var VB, yB, pB = dB(36126);
    ! function(BB) {
      BB[BB.LOCAL = 0] = "LOCAL", BB[BB.WORLD = 1] = "WORLD", BB[BB.BONE = 2] = "BONE"
    }(VB || (VB = {}));
    class lB {}
    lB.X = new pB.p(1, 0, 0), lB.Y = new pB.p(0, 1, 0), lB.Z = new pB.p(0, 0, 1),
      function(BB) {
        BB[BB.X = 0] = "X", BB[BB.Y = 1] = "Y", BB[BB.Z = 2] = "Z"
      }(yB || (yB = {}))
  },
  38732: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => YB,
      d: () => gB
    });
    var VB = dB(36126);
    const yB = [Math.sqrt(1 / (4 * Math.PI)), -Math.sqrt(3 / (4 * Math.PI)), Math.sqrt(3 / (4 * Math.PI)), -Math.sqrt(3 / (4 * Math.PI)), Math.sqrt(15 / (4 * Math.PI)), -Math.sqrt(15 / (4 * Math.PI)), Math.sqrt(5 / (16 * Math.PI)), -Math.sqrt(15 / (4 * Math.PI)), Math.sqrt(15 / (16 * Math.PI))],
      pB = [() => 1, BB => BB.y, BB => BB.z, BB => BB.x, BB => BB.x * BB.y, BB => BB.y * BB.z, BB => 3 * BB.z * BB.z - 1, BB => BB.x * BB.z, BB => BB.x * BB.x - BB.y * BB.y],
      lB = (BB, TB) => yB[BB] * pB[BB](TB),
      JB = [Math.PI, 2 * Math.PI / 3, 2 * Math.PI / 3, 2 * Math.PI / 3, Math.PI / 4, Math.PI / 4, Math.PI / 4, Math.PI / 4, Math.PI / 4];
    class YB {
      constructor() {
        this.preScaled = !1, this.l00 = VB.p.Zero(), this.l1_1 = VB.p.Zero(), this.l10 = VB.p.Zero(), this.l11 = VB.p.Zero(), this.l2_2 = VB.p.Zero(), this.l2_1 = VB.p.Zero(), this.l20 = VB.p.Zero(), this.l21 = VB.p.Zero(), this.l22 = VB.p.Zero()
      }
      addLight(BB, TB, dB) {
        VB.j.RD[0].set(TB.r, TB.g, TB.b);
        const yB = VB.j.RD[0],
          pB = VB.j.RD[1];
        yB.scaleToRef(dB, pB), pB.scaleToRef(lB(0, BB), VB.j.RD[2]), this.l00.addInPlace(VB.j.RD[2]), pB.scaleToRef(lB(1, BB), VB.j.RD[2]), this.l1_1.addInPlace(VB.j.RD[2]), pB.scaleToRef(lB(2, BB), VB.j.RD[2]), this.l10.addInPlace(VB.j.RD[2]), pB.scaleToRef(lB(3, BB), VB.j.RD[2]), this.l11.addInPlace(VB.j.RD[2]), pB.scaleToRef(lB(4, BB), VB.j.RD[2]), this.l2_2.addInPlace(VB.j.RD[2]), pB.scaleToRef(lB(5, BB), VB.j.RD[2]), this.l2_1.addInPlace(VB.j.RD[2]), pB.scaleToRef(lB(6, BB), VB.j.RD[2]), this.l20.addInPlace(VB.j.RD[2]), pB.scaleToRef(lB(7, BB), VB.j.RD[2]), this.l21.addInPlace(VB.j.RD[2]), pB.scaleToRef(lB(8, BB), VB.j.RD[2]), this.l22.addInPlace(VB.j.RD[2])
      }
      scaleInPlace(BB) {
        this.l00.scaleInPlace(BB), this.l1_1.scaleInPlace(BB), this.l10.scaleInPlace(BB), this.l11.scaleInPlace(BB), this.l2_2.scaleInPlace(BB), this.l2_1.scaleInPlace(BB), this.l20.scaleInPlace(BB), this.l21.scaleInPlace(BB), this.l22.scaleInPlace(BB)
      }
      convertIncidentRadianceToIrradiance() {
        this.l00.scaleInPlace(JB[0]), this.l1_1.scaleInPlace(JB[1]), this.l10.scaleInPlace(JB[2]), this.l11.scaleInPlace(JB[3]), this.l2_2.scaleInPlace(JB[4]), this.l2_1.scaleInPlace(JB[5]), this.l20.scaleInPlace(JB[6]), this.l21.scaleInPlace(JB[7]), this.l22.scaleInPlace(JB[8])
      }
      convertIrradianceToLambertianRadiance() {
        this.scaleInPlace(1 / Math.PI)
      }
      preScaleForRendering() {
        this.preScaled = !0, this.l00.scaleInPlace(yB[0]), this.l1_1.scaleInPlace(yB[1]), this.l10.scaleInPlace(yB[2]), this.l11.scaleInPlace(yB[3]), this.l2_2.scaleInPlace(yB[4]), this.l2_1.scaleInPlace(yB[5]), this.l20.scaleInPlace(yB[6]), this.l21.scaleInPlace(yB[7]), this.l22.scaleInPlace(yB[8])
      }
      updateFromArray(BB) {
        return VB.p.FromArrayToRef(BB[0], 0, this.l00), VB.p.FromArrayToRef(BB[1], 0, this.l1_1), VB.p.FromArrayToRef(BB[2], 0, this.l10), VB.p.FromArrayToRef(BB[3], 0, this.l11), VB.p.FromArrayToRef(BB[4], 0, this.l2_2), VB.p.FromArrayToRef(BB[5], 0, this.l2_1), VB.p.FromArrayToRef(BB[6], 0, this.l20), VB.p.FromArrayToRef(BB[7], 0, this.l21), VB.p.FromArrayToRef(BB[8], 0, this.l22), this
      }
      updateFromFloatsArray(BB) {
        return VB.p.FromFloatsToRef(BB[0], BB[1], BB[2], this.l00), VB.p.FromFloatsToRef(BB[3], BB[4], BB[5], this.l1_1), VB.p.FromFloatsToRef(BB[6], BB[7], BB[8], this.l10), VB.p.FromFloatsToRef(BB[9], BB[10], BB[11], this.l11), VB.p.FromFloatsToRef(BB[12], BB[13], BB[14], this.l2_2), VB.p.FromFloatsToRef(BB[15], BB[16], BB[17], this.l2_1), VB.p.FromFloatsToRef(BB[18], BB[19], BB[20], this.l20), VB.p.FromFloatsToRef(BB[21], BB[22], BB[23], this.l21), VB.p.FromFloatsToRef(BB[24], BB[25], BB[26], this.l22), this
      }
      static FromArray(BB) {
        return (new YB).updateFromArray(BB)
      }
      static FromPolynomial(BB) {
        const TB = new YB;
        return TB.l00 = BB.xx.scale(.376127).add(BB.yy.scale(.376127)).add(BB.zz.scale(.376126)), TB.l1_1 = BB.y.scale(.977204), TB.l10 = BB.z.scale(.977204), TB.l11 = BB.x.scale(.977204), TB.l2_2 = BB.xy.scale(1.16538), TB.l2_1 = BB.yz.scale(1.16538), TB.l20 = BB.zz.scale(1.34567).subtract(BB.xx.scale(.672834)).subtract(BB.yy.scale(.672834)), TB.l21 = BB.zx.scale(1.16538), TB.l22 = BB.xx.scale(1.16538).subtract(BB.yy.scale(1.16538)), TB.l1_1.scaleInPlace(-1), TB.l11.scaleInPlace(-1), TB.l2_1.scaleInPlace(-1), TB.l21.scaleInPlace(-1), TB.scaleInPlace(Math.PI), TB
      }
    }
    class gB {
      constructor() {
        this.x = VB.p.Zero(), this.y = VB.p.Zero(), this.z = VB.p.Zero(), this.xx = VB.p.Zero(), this.yy = VB.p.Zero(), this.zz = VB.p.Zero(), this.xy = VB.p.Zero(), this.yz = VB.p.Zero(), this.zx = VB.p.Zero()
      }
      get preScaledHarmonics() {
        return this._harmonics || (this._harmonics = YB.FromPolynomial(this)), this._harmonics.preScaled || this._harmonics.preScaleForRendering(), this._harmonics
      }
      addAmbient(BB) {
        VB.j.RD[0].YBB(BB.r, BB.g, BB.b);
        const TB = VB.j.RD[0];
        this.xx.addInPlace(TB), this.yy.addInPlace(TB), this.zz.addInPlace(TB)
      }
      scaleInPlace(BB) {
        this.x.scaleInPlace(BB), this.y.scaleInPlace(BB), this.z.scaleInPlace(BB), this.xx.scaleInPlace(BB), this.yy.scaleInPlace(BB), this.zz.scaleInPlace(BB), this.yz.scaleInPlace(BB), this.zx.scaleInPlace(BB), this.xy.scaleInPlace(BB)
      }
      updateFromHarmonics(BB) {
        return this._harmonics = BB, this.x.bdB(BB.l11), this.x.scaleInPlace(1.02333).scaleInPlace(-1), this.y.bdB(BB.l1_1), this.y.scaleInPlace(1.02333).scaleInPlace(-1), this.z.bdB(BB.l10), this.z.scaleInPlace(1.02333), this.xx.bdB(BB.l00), VB.j.RD[0].bdB(BB.l20).scaleInPlace(.247708), VB.j.RD[1].bdB(BB.l22).scaleInPlace(.429043), this.xx.scaleInPlace(.886277).qVB(VB.j.RD[0]).addInPlace(VB.j.RD[1]), this.yy.bdB(BB.l00), this.yy.scaleInPlace(.886277).qVB(VB.j.RD[0]).qVB(VB.j.RD[1]), this.zz.bdB(BB.l00), VB.j.RD[0].bdB(BB.l20).scaleInPlace(.495417), this.zz.scaleInPlace(.886277).addInPlace(VB.j.RD[0]), this.yz.bdB(BB.l2_1), this.yz.scaleInPlace(.858086).scaleInPlace(-1), this.zx.bdB(BB.l21), this.zx.scaleInPlace(.858086).scaleInPlace(-1), this.xy.bdB(BB.l2_2), this.xy.scaleInPlace(.858086), this.scaleInPlace(1 / Math.PI), this
      }
      static FromHarmonics(BB) {
        return (new gB).updateFromHarmonics(BB)
      }
      static FromArray(BB) {
        const TB = new gB;
        return VB.p.FromArrayToRef(BB[0], 0, TB.x), VB.p.FromArrayToRef(BB[1], 0, TB.y), VB.p.FromArrayToRef(BB[2], 0, TB.z), VB.p.FromArrayToRef(BB[3], 0, TB.xx), VB.p.FromArrayToRef(BB[4], 0, TB.yy), VB.p.FromArrayToRef(BB[5], 0, TB.zz), VB.p.FromArrayToRef(BB[6], 0, TB.yz), VB.p.FromArrayToRef(BB[7], 0, TB.zx), VB.p.FromArrayToRef(BB[8], 0, TB.xy), TB
      }
    }
  },
  39180: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => rB,
      i: () => cB
    });
    var VB = dB(38745),
      yB = dB(36150),
      pB = dB(36126),
      lB = dB(38897),
      JB = dB(39156),
      YB = dB(39187),
      gB = dB(38889),
      oB = dB(39058),
      kB = dB(38880);
    class LB {
      constructor() {
        this._checkCollisions = !1, this._collisionMask = -1, this._collisionGroup = -1, this._surroundingMeshes = null, this._collider = null, this._oldPositionForCollisions = new pB.p(0, 0, 0), this._diffPositionForCollisions = new pB.p(0, 0, 0), this._collisionResponse = !0
      }
    }
    var OB, DB, uB, HB = dB(38629),
      EB = dB(38825),
      vB = dB(39062),
      mB = dB(36183),
      iB = dB(36132),
      NB = dB(38983),
      tB = dB(37651),
      fB = dB(38750),
      sB = dB(38652),
      MB = dB(36166);

    function zB(BB, TB) {
      return BB - Math.floor(BB / TB) * TB
    }

    function wB(BB, TB, dB) {
      BB instanceof Float32Array ? pB.b.FromArrayToRef(BB, TB, dB) : dB.YBB((0, EB.d)(BB[TB]), (0, EB.d)(BB[TB + 1]), (0, EB.d)(BB[TB + 2]), (0, EB.d)(BB[TB + 3]), (0, EB.d)(BB[TB + 4]), (0, EB.d)(BB[TB + 5]), (0, EB.d)(BB[TB + 6]), (0, EB.d)(BB[TB + 7]), (0, EB.d)(BB[TB + 8]), (0, EB.d)(BB[TB + 9]), (0, EB.d)(BB[TB + 10]), (0, EB.d)(BB[TB + 11]), (0, EB.d)(BB[TB + 12]), (0, EB.d)(BB[TB + 13]), (0, EB.d)(BB[TB + 14]), (0, EB.d)(BB[TB + 15]))
    }

    function UB(BB, TB, dB, VB, yB, JB, YB, gB, oB) {
      const kB = dB.texture,
        LB = kB?.getInternalTexture(),
        OB = LB?._bufferView;
      if (!(OB instanceof Float32Array) && !(OB instanceof Uint16Array)) return tB.b.Warn("Baked vertex animation bounding info requires CPU-readable Float32Array or Uint16Array texture data.", 1), !1;
      const DB = kB.getSize(),
        uB = function(BB, TB) {
          const dB = BB.y - BB.x + 1,
            VB = TB * BB.w / dB,
            yB = VB < 1 ? 0 : 1,
            pB = dB - yB;
          let lB = zB(VB - Math.floor(VB), 1) * pB;
          return lB = zB(lB + BB.z, pB), Math.floor(lB) + BB.x + yB
        }(VB, dB.time);
      if (!isFinite(uB) || uB < 0 || uB >= DB.height) return tB.b.Warn("Baked vertex animation bounding info could not be refreshed because the computed frame is outside the texture.", 1), !1;
      const HB = pB.j.RD[0],
        EB = pB.j.Matrix[0],
        vB = pB.j.Matrix[1],
        mB = uB * DB.width * 4,
        iB = TB === lB.m.NormalKind ? pB.p.TransformNormalFromFloatsToRef : pB.p.TransformCoordinatesFromFloatsToRef;
      for (let pB = 0, lB = 0; pB < BB.length; pB += 3, lB += 4) {
        let TB, dB;
        for (EB.reset(), TB = 0; TB < 4 && TB < oB; TB++) dB = JB[lB + TB], dB > 0 && (wB(OB, mB + 16 * Math.floor(yB[lB + TB]), vB), vB.scaleAndAddToRef(dB, EB));
        if (YB && gB)
          for (TB = 0; TB < 4 && TB + 4 < oB; TB++) dB = gB[lB + TB], dB > 0 && (wB(OB, mB + 16 * Math.floor(YB[lB + TB]), vB), vB.scaleAndAddToRef(dB, EB));
        iB(BB[pB], BB[pB + 1], BB[pB + 2], EB, HB), HB.toArray(BB, pB)
      }
      return !0
    }
    class FB {
      constructor() {
        this.facetNb = 0, this.partitioningSubdivisions = 10, this.partitioningBBoxRatio = 1.01, this.facetDataEnabled = !1, this.facetParameters = {}, this.bbSize = pB.p.Zero(), this.subDiv = {
          max: 1,
          X: 1,
          Y: 1,
          Z: 1
        }, this.facetDepthSort = !1, this.facetDepthSortEnabled = !1
      }
    }
    class KB {
      constructor() {
        this._hasVertexAlpha = !1, this._useVertexColors = !0, this._numBoneInfluencers = 4, this._applyFog = !0, this._receiveShadows = !1, this._facetData = new FB, this._visibility = 1, this._skeleton = null, this._layerMask = 268435455, this._computeBonesUsingShaders = !0, this._isActive = !1, this._onlyForInstances = !1, this._isActiveIntermediate = !1, this._onlyForInstancesIntermediate = !1, this._actAsRegularMesh = !1, this._currentLOD = new Map, this._collisionRetryCount = 3, this._morphTargetManager = null, this._renderingGroupId = 0, this._meshBlendingTag = 0, this._bakedVertexAnimationManager = null, this._material = null, this._positions = null, this._pointerOverDisableMeshTesting = !1, this._meshCollisionData = new LB, this._enableDistantPicking = !1, this._rawBoundingInfo = null, this._sideOrientationHint = !1, this._wasActiveLastFrame = !1
      }
    }
    let rB = (() => {
        var BB;
        let TB, LB = YB.f,
          OB = [];
        return BB = class extends LB {
          static get BILLBOARDMODE_NONE() {
            return YB.f.BILLBOARDMODE_NONE
          }
          static get BILLBOARDMODE_X() {
            return YB.f.BILLBOARDMODE_X
          }
          static get BILLBOARDMODE_Y() {
            return YB.f.BILLBOARDMODE_Y
          }
          static get BILLBOARDMODE_Z() {
            return YB.f.BILLBOARDMODE_Z
          }
          static get BILLBOARDMODE_ALL() {
            return YB.f.BILLBOARDMODE_ALL
          }
          static get BILLBOARDMODE_USE_POSITION() {
            return YB.f.BILLBOARDMODE_USE_POSITION
          }
          get facetNb() {
            return this._internalAbstractMeshDataInfo._facetData.facetNb
          }
          get partitioningSubdivisions() {
            return this._internalAbstractMeshDataInfo._facetData.partitioningSubdivisions
          }
          set partitioningSubdivisions(BB) {
            this._internalAbstractMeshDataInfo._facetData.partitioningSubdivisions = BB
          }
          get partitioningBBoxRatio() {
            return this._internalAbstractMeshDataInfo._facetData.partitioningBBoxRatio
          }
          set partitioningBBoxRatio(BB) {
            this._internalAbstractMeshDataInfo._facetData.partitioningBBoxRatio = BB
          }
          get mustDepthSortFacets() {
            return this._internalAbstractMeshDataInfo._facetData.facetDepthSort
          }
          set mustDepthSortFacets(BB) {
            this._internalAbstractMeshDataInfo._facetData.facetDepthSort = BB
          }
          get facetDepthSortFrom() {
            return this._internalAbstractMeshDataInfo._facetData.facetDepthSortFrom
          }
          set facetDepthSortFrom(BB) {
            this._internalAbstractMeshDataInfo._facetData.facetDepthSortFrom = BB
          }
          get collisionRetryCount() {
            return this._internalAbstractMeshDataInfo._collisionRetryCount
          }
          set collisionRetryCount(BB) {
            this._internalAbstractMeshDataInfo._collisionRetryCount = BB
          }
          get isFacetDataEnabled() {
            return this._internalAbstractMeshDataInfo._facetData.facetDataEnabled
          }
          get morphTargetManager() {
            return this._internalAbstractMeshDataInfo._morphTargetManager
          }
          set morphTargetManager(BB) {
            this._internalAbstractMeshDataInfo._morphTargetManager !== BB && (this._internalAbstractMeshDataInfo._morphTargetManager = BB, this._syncGeometryWithMorphTargetManager())
          }
          get bakedVertexAnimationManager() {
            return this._internalAbstractMeshDataInfo._bakedVertexAnimationManager
          }
          set bakedVertexAnimationManager(BB) {
            this._internalAbstractMeshDataInfo._bakedVertexAnimationManager !== BB && (this._internalAbstractMeshDataInfo._bakedVertexAnimationManager = BB, this._markSubMeshesAsAttributesDirty())
          }
          _syncGeometryWithMorphTargetManager() {}
          _updateNonUniformScalingState(BB) {
            return !!super._updateNonUniformScalingState(BB) && (this._markSubMeshesAsMiscDirty(), !0)
          }
          get rawBoundingInfo() {
            return this._internalAbstractMeshDataInfo._rawBoundingInfo
          }
          set rawBoundingInfo(BB) {
            this._internalAbstractMeshDataInfo._rawBoundingInfo = BB
          }
          set vL(BB) {
            this._internalAbstractMeshDataInfo._meshCollisionData._onCollideObserver && this.onCollideObservable.remove(this._internalAbstractMeshDataInfo._meshCollisionData._onCollideObserver), this._internalAbstractMeshDataInfo._meshCollisionData._onCollideObserver = this.onCollideObservable.add(BB)
          }
          set onCollisionPositionChange(BB) {
            this._internalAbstractMeshDataInfo._meshCollisionData._onCollisionPositionChangeObserver && this.onCollisionPositionChangeObservable.remove(this._internalAbstractMeshDataInfo._meshCollisionData._onCollisionPositionChangeObserver), this._internalAbstractMeshDataInfo._meshCollisionData._onCollisionPositionChangeObserver = this.onCollisionPositionChangeObservable.add(BB)
          }
          get visibility() {
            return this._internalAbstractMeshDataInfo._visibility
          }
          set visibility(BB) {
            if (this._internalAbstractMeshDataInfo._visibility === BB) return;
            const TB = this._internalAbstractMeshDataInfo._visibility;
            this._internalAbstractMeshDataInfo._visibility = BB, (1 === TB && 1 !== BB || 1 !== TB && 1 === BB) && this._markSubMeshesAsDirty((BB => {
              BB.markAsMiscDirty(), BB.markAsPrePassDirty()
            }))
          }
          get pointerOverDisableMeshTesting() {
            return this._internalAbstractMeshDataInfo._pointerOverDisableMeshTesting
          }
          set pointerOverDisableMeshTesting(BB) {
            this._internalAbstractMeshDataInfo._pointerOverDisableMeshTesting = BB
          }
          get renderingGroupId() {
            return this._internalAbstractMeshDataInfo._renderingGroupId
          }
          set renderingGroupId(BB) {
            this._internalAbstractMeshDataInfo._renderingGroupId = BB
          }
          get meshBlendingTag() {
            return this._internalAbstractMeshDataInfo._meshBlendingTag
          }
          set meshBlendingTag(BB) {
            if (!Number.isInteger(BB) || BB < 0 || BB > 255 || 0 !== BB && 0 === (63 & BB)) throw new RangeError("Mesh-blending tag must be 0 or contain a group ID between 1 and 63.");
            this._internalAbstractMeshDataInfo._meshBlendingTag = BB
          }
          get material() {
            return this._internalAbstractMeshDataInfo._material
          }
          set material(BB) {
            this._setMaterial(BB)
          }
          _setMaterial(BB) {
            this._internalAbstractMeshDataInfo._material !== BB && (this._internalAbstractMeshDataInfo._material && this._internalAbstractMeshDataInfo._material.meshMap && (this._internalAbstractMeshDataInfo._material.meshMap[this.uniqueId] = void 0), this._internalAbstractMeshDataInfo._material = BB, BB && BB.meshMap && (BB.meshMap[this.uniqueId] = this), this.onMaterialChangedObservable.hasObservers() && this.onMaterialChangedObservable.notifyObservers(this), this.oN && (this.resetDrawCache(void 0, null == BB), this._unBindEffect()))
          }
          getMaterialForRenderPass(BB) {
            return this._internalAbstractMeshDataInfo._materialForRenderPass?.[BB]
          }
          setMaterialForRenderPass(BB, TB) {
            this.resetDrawCache(BB), this._internalAbstractMeshDataInfo._materialForRenderPass || (this._internalAbstractMeshDataInfo._materialForRenderPass = []);
            const dB = this._internalAbstractMeshDataInfo._materialForRenderPass[BB];
            dB?.meshMap?.[this.uniqueId] && (dB.meshMap[this.uniqueId] = void 0), this._internalAbstractMeshDataInfo._materialForRenderPass[BB] = TB, TB && TB.meshMap && (TB.meshMap[this.uniqueId] = this)
          }
          get receiveShadows() {
            return this._internalAbstractMeshDataInfo._receiveShadows
          }
          set receiveShadows(BB) {
            this._internalAbstractMeshDataInfo._receiveShadows !== BB && (this._internalAbstractMeshDataInfo._receiveShadows = BB, this._markSubMeshesAsLightDirty())
          }
          get hasVertexAlpha() {
            return this._internalAbstractMeshDataInfo._hasVertexAlpha
          }
          set hasVertexAlpha(BB) {
            this._internalAbstractMeshDataInfo._hasVertexAlpha !== BB && (this._internalAbstractMeshDataInfo._hasVertexAlpha = BB, this._markSubMeshesAsAttributesDirty(), this._markSubMeshesAsMiscDirty())
          }
          get useVertexColors() {
            return this._internalAbstractMeshDataInfo._useVertexColors
          }
          set useVertexColors(BB) {
            this._internalAbstractMeshDataInfo._useVertexColors !== BB && (this._internalAbstractMeshDataInfo._useVertexColors = BB, this._markSubMeshesAsAttributesDirty())
          }
          get computeBonesUsingShaders() {
            return this._internalAbstractMeshDataInfo._computeBonesUsingShaders
          }
          set computeBonesUsingShaders(BB) {
            this._internalAbstractMeshDataInfo._computeBonesUsingShaders !== BB && (this._internalAbstractMeshDataInfo._computeBonesUsingShaders = BB, this._markSubMeshesAsAttributesDirty())
          }
          get numBoneInfluencers() {
            return this._internalAbstractMeshDataInfo._numBoneInfluencers
          }
          set numBoneInfluencers(BB) {
            this._internalAbstractMeshDataInfo._numBoneInfluencers !== BB && (this._internalAbstractMeshDataInfo._numBoneInfluencers = BB, this._markSubMeshesAsAttributesDirty())
          }
          get applyFog() {
            return this._internalAbstractMeshDataInfo._applyFog
          }
          set applyFog(BB) {
            this._internalAbstractMeshDataInfo._applyFog !== BB && (this._internalAbstractMeshDataInfo._applyFog = BB, this._markSubMeshesAsMiscDirty())
          }
          get enableDistantPicking() {
            return this._internalAbstractMeshDataInfo._enableDistantPicking
          }
          set enableDistantPicking(BB) {
            this._internalAbstractMeshDataInfo._enableDistantPicking = BB
          }
          get layerMask() {
            return this._internalAbstractMeshDataInfo._layerMask
          }
          set layerMask(BB) {
            BB !== this._internalAbstractMeshDataInfo._layerMask && (this._internalAbstractMeshDataInfo._layerMask = BB, this._resyncLightSources())
          }
          get collisionMask() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._collisionMask
          }
          set collisionMask(BB) {
            this._internalAbstractMeshDataInfo._meshCollisionData._collisionMask = isNaN(BB) ? -1 : BB
          }
          get collisionResponse() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._collisionResponse
          }
          set collisionResponse(BB) {
            this._internalAbstractMeshDataInfo._meshCollisionData._collisionResponse = BB
          }
          get collisionGroup() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._collisionGroup
          }
          set collisionGroup(BB) {
            this._internalAbstractMeshDataInfo._meshCollisionData._collisionGroup = isNaN(BB) ? -1 : BB
          }
          get surroundingMeshes() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._surroundingMeshes
          }
          set surroundingMeshes(BB) {
            this._internalAbstractMeshDataInfo._meshCollisionData._surroundingMeshes = BB
          }
          get lightSources() {
            return this._lightSources
          }
          set skeleton(BB) {
            const TB = this._internalAbstractMeshDataInfo._skeleton;
            TB && TB.needInitialSkinMatrix && TB._unregisterMeshWithPoseMatrix(this), BB && BB.needInitialSkinMatrix && BB._registerMeshWithPoseMatrix(this), this._internalAbstractMeshDataInfo._skeleton = BB, this._internalAbstractMeshDataInfo._skeleton || (this._bonesTransformMatrices = null), this._markSubMeshesAsAttributesDirty()
          }
          get skeleton() {
            return this._internalAbstractMeshDataInfo._skeleton
          }
          constructor(TB) {
            var dB;
            let VB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            switch (super(TB, VB, !1), dB = this, this._internalAbstractMeshDataInfo = new KB, this._waitingMaterialId = null, this._waitingMorphTargetManagerId = null, this._waitingSkeletonId = null, this._waitingSkeletonUniqueId = null, this.cullingStrategy = BB.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY, this.onCollideObservable = new yB.e, this.onCollisionPositionChangeObservable = new yB.e, this.onMaterialChangedObservable = new yB.e, this.definedFacingForward = !0, this._occlusionQuery = null, this._renderingGroup = null, this.alphaIndex = Number.MAX_VALUE, this.xu = BB.DefaultIsPickable, this.isNearPickable = !1, this.isNearGrabbable = !1, this.showSubMeshesBoundingBox = !1, this.isBlocker = !1, this.enablePointerMoveEvents = !1, this.outlineColor = mB.c.Red(), this.outlineWidth = .02, this.overlayColor = mB.c.Red(), this.overlayAlpha = .5, this.useOctreeForRenderingSelection = !0, this.useOctreeForPicking = !0, this.useOctreeForCollisions = !0, this.QD = !1, this.ZD = !1, this.actionManager = null, this.ellipsoid = new pB.p(.5, 1, .5), this.ellipsoidOffset = new pB.p(0, 0, 0), this.edgesWidth = 1, this.edgesColor = new mB.d(1, 0, 0, 1), this._edgesRenderer = null, this._masterMesh = null, this._boundingInfo = null, this._boundingInfoIsDirty = !0, this._renderId = 0, this._intersectionsInProgress = new Array, this._unIndexed = !1, this._lightSources = new Array, this._waitingData = {
                lods: null,
                actions: null,
                uF: null
              }, this._bonesTransformMatrices = null, this._transformMatrixTexture = null, this.onRebuildObservable = new yB.e, this._onCollisionPositionChange = function(BB, TB) {
                let VB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                TB.subtractToRef(dB._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions, dB._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions), dB._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions.length() > sB.c.CollisionsEpsilon && dB.position.addInPlace(dB._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions), VB && dB.onCollideObservable.notifyObservers(VB), dB.onCollisionPositionChangeObservable.notifyObservers(dB.position)
              }, VB = this.jU(), this.layerMask = VB.defaultRenderableLayerMask, VB.MVB(this), this._resyncLightSources(), this._uniformBuffer = new kB.c(this.jU().PD(), void 0, void 0, TB, !this.jU().PD().isWebGPU), this._buildUniformLayout(), VB.performancePriority) {
              case 2:
                this.ZD = !0;
              case 1:
                this.QD = !0, this.xu = !1
            }
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("world", 16), this._uniformBuffer.addUniform("visibility", 1), this._uniformBuffer.create()
          }
          transferToEffect(BB) {
            const TB = this._uniformBuffer;
            TB.i6("world", BB), TB.updateFloat("visibility", this._internalAbstractMeshDataInfo._visibility), TB.update()
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
          toString(BB) {
            let TB = "Name: " + this.name + ", isInstance: " + ("InstancedMesh" === this.getClassName() ? "YES" : "NO");
            TB += ", # of submeshes: " + (this.oN ? this.oN.length : 0);
            const dB = this._internalAbstractMeshDataInfo._skeleton;
            return dB && (TB += ", skeleton: " + dB.name), BB && (TB += ", billboard mode: " + ["NONE", "X", "Y", null, "Z", null, null, "ALL"][this.billboardMode], TB += ", freeze wrld mat: " + (this._isWorldMatrixFrozen || this._waitingData.uF ? "YES" : "NO")), TB
          }
          _getEffectiveParent() {
            return this._masterMesh && this.billboardMode !== YB.f.BILLBOARDMODE_NONE ? this._masterMesh : super._getEffectiveParent()
          }
          _getActionManagerForTrigger(BB) {
            let TB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            if (this.actionManager && (TB || this.actionManager.isRecursive)) {
              if (!BB) return this.actionManager;
              if (this.actionManager.hasSpecificTrigger(BB)) return this.actionManager
            }
            return this.parent ? this.parent._getActionManagerForTrigger(BB, !1) : null
          }
          _releaseRenderPassId(BB) {}
          _rebuild() {
            if (this.onRebuildObservable.notifyObservers(this), null !== this._occlusionQuery && (this._occlusionQuery = null), this.oN) {
              for (const BB of this.oN) BB._rebuild();
              this.resetDrawCache()
            }
          }
          _resyncLightSources() {
            this._lightSources.length = 0;
            for (const BB of this.jU().lights) BB.isEnabled() && BB.canAffectMesh(this) && this._lightSources.push(BB);
            this._markSubMeshesAsLightDirty()
          }
          _resyncLightSource(BB) {
            const TB = BB.isEnabled() && BB.canAffectMesh(this),
              dB = this._lightSources.indexOf(BB);
            let VB = !1;
            if (-1 === dB) {
              if (!TB) return;
              this._lightSources.push(BB)
            } else {
              if (TB) return;
              VB = !0, this._lightSources.splice(dB, 1)
            }
            this._markSubMeshesAsLightDirty(VB)
          }
          _unBindEffect() {
            for (const BB of this.oN) BB.setEffect(null)
          }
          _removeLightSource(BB, TB) {
            const dB = this._lightSources.indexOf(BB); - 1 !== dB && (this._lightSources.splice(dB, 1), this._markSubMeshesAsLightDirty(TB))
          }
          _markSubMeshesAsDirty(BB) {
            if (this.oN)
              for (const TB of this.oN)
                for (let dB = 0; dB < TB._drawWrappers.length; ++dB) {
                  const VB = TB._drawWrappers[dB];
                  VB && VB.defines && VB.defines.markAllAsDirty && BB(VB.defines)
                }
          }
          _markSubMeshesAsLightDirty() {
            let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            this._markSubMeshesAsDirty((TB => TB.markAsLightDirty(BB)))
          }
          _markSubMeshesAsAttributesDirty() {
            this._markSubMeshesAsDirty((BB => BB.markAsAttributesDirty()))
          }
          _markSubMeshesAsMiscDirty() {
            this._markSubMeshesAsDirty((BB => BB.markAsMiscDirty()))
          }
          VdB(BB) {
            return this._currentRenderId = Number.MAX_VALUE, super.VdB(BB), this._isDirty = !0, this
          }
          resetDrawCache(BB) {
            let TB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (this.oN)
              for (const dB of this.oN) dB.resetDrawCache(BB, TB)
          }
          get isBlocked() {
            return !1
          }
          getLOD(BB) {
            return this
          }
          getTotalVertices() {
            return 0
          }
          getTotalIndices() {
            return 0
          }
          elB() {
            return null
          }
          getVerticesData(BB) {
            return null
          }
          setVerticesData(BB, TB, dB, VB) {
            return this
          }
          updateVerticesData(BB, TB, dB, VB) {
            return this
          }
          setIndices(BB, TB) {
            return this
          }
          isVerticesDataPresent(BB) {
            return !1
          }
          IK() {
            return this._masterMesh ? this._masterMesh.IK() : (this._boundingInfoIsDirty && (this._boundingInfoIsDirty = !1, this._updateBoundingInfo()), this._boundingInfo)
          }
          getRawBoundingInfo() {
            return this.rawBoundingInfo ?? this.IK()
          }
          setBoundingInfo(BB) {
            return this._boundingInfo = BB, this
          }
          get hasBoundingInfo() {
            return null !== this._boundingInfo
          }
          buildBoundingInfo(BB, TB, dB) {
            return this._boundingInfo = new oB.b(BB, TB, dB), this._boundingInfo
          }
          normalizeToUnitCube() {
            let BB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
              TB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              dB = arguments.length > 2 ? arguments[2] : void 0;
            return super.normalizeToUnitCube(BB, TB, dB)
          }
          get useBones() {
            return this.skeleton && this.jU().skeletonsEnabled && this.isVerticesDataPresent(lB.m.MatricesIndicesKind) && this.isVerticesDataPresent(lB.m.MatricesWeightsKind)
          }
          _preActivate() {}
          _preActivateForIntermediateRendering(BB) {}
          _activate(BB, TB) {
            return this._renderId = BB, !0
          }
          _postActivate() {}
          _freeze() {}
          _unFreeze() {}
          getWorldMatrix() {
            return this._masterMesh && this.billboardMode === YB.f.BILLBOARDMODE_NONE ? this._masterMesh.getWorldMatrix() : super.getWorldMatrix()
          }
          _getWorldMatrixDeterminant() {
            return this._masterMesh ? this._masterMesh._getWorldMatrixDeterminant() : super._getWorldMatrixDeterminant()
          }
          get JF() {
            return !1
          }
          get vyB() {
            return !1
          }
          get hasThinInstances() {
            return !1
          }
          movePOV(BB, TB, dB) {
            return this.position.addInPlace(this.calcMovePOV(BB, TB, dB)), this
          }
          calcMovePOV(BB, TB, dB) {
            const VB = new pB.b;
            (this.rotationQuaternion ? this.rotationQuaternion : pB.f.RotationYawPitchRoll(this.rotation.y, this.rotation.x, this.rotation.z)).toRotationMatrix(VB);
            const yB = pB.p.Zero(),
              lB = this.definedFacingForward ? -1 : 1;
            return pB.p.TransformCoordinatesFromFloatsToRef(BB * lB, TB, dB * lB, VB, yB), yB
          }
          rotatePOV(BB, TB, dB) {
            return this.rotation.addInPlace(this.calcRotatePOV(BB, TB, dB)), this
          }
          calcRotatePOV(BB, TB, dB) {
            const VB = this.definedFacingForward ? 1 : -1;
            return new pB.p(BB * VB, TB, dB * VB)
          }
          _refreshBoundingInfo(BB, TB) {
            if (BB) {
              const dB = (0, vB.i)(BB, 0, this.getTotalVertices(), TB);
              this._boundingInfo ? this._boundingInfo.reConstruct(dB.minimum, dB.maximum) : this._boundingInfo = new oB.b(dB.minimum, dB.maximum)
            }
            if (this.oN)
              for (let dB = 0; dB < this.oN.length; dB++) this.oN[dB].refreshBoundingInfo(BB);
            this._updateBoundingInfo()
          }
          _refreshBoundingInfoDirect(BB) {
            if (this._boundingInfo ? this._boundingInfo.reConstruct(BB.minimum, BB.maximum) : this._boundingInfo = new oB.b(BB.minimum, BB.maximum), this.oN)
              for (let TB = 0; TB < this.oN.length; TB++) this.oN[TB].refreshBoundingInfo(null);
            this._updateBoundingInfo()
          }
          static _ApplySkeleton(BB, TB, dB, VB, yB, JB, YB) {
            ! function(BB, TB, dB, VB, yB, JB, YB) {
              const gB = pB.j.RD[0],
                oB = pB.j.Matrix[0],
                kB = pB.j.Matrix[1],
                LB = TB === lB.m.NormalKind ? pB.p.TransformNormalFromFloatsToRef : pB.p.TransformCoordinatesFromFloatsToRef;
              for (let lB = 0, OB = 0; lB < BB.length; lB += 3, OB += 4) {
                let TB, DB;
                for (oB.reset(), TB = 0; TB < 4; TB++) DB = yB[OB + TB], DB > 0 && (pB.b.FromFloat32ArrayToRefScaled(dB, Math.floor(16 * VB[OB + TB]), DB, kB), oB.addToSelf(kB));
                if (JB && YB)
                  for (TB = 0; TB < 4; TB++) DB = YB[OB + TB], DB > 0 && (pB.b.FromFloat32ArrayToRefScaled(dB, Math.floor(16 * JB[OB + TB]), DB, kB), oB.addToSelf(kB));
                LB(BB[lB], BB[lB + 1], BB[lB + 2], oB, gB), gB.toArray(BB, lB)
              }
            }(BB, TB, dB, VB, yB, JB, YB)
          }
          _getData(TB, dB) {
            let VB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : lB.m.PositionKind;
            const yB = TB.cache,
              JB = BB => {
                if (yB) {
                  const TB = yB._vertexData || (yB._vertexData = {});
                  return TB[BB] || this.copyVerticesData(BB, TB), TB[BB]
                }
                return this.getVerticesData(BB)
              };
            if (dB || (dB = JB(VB)), !dB) return null;
            yB ? (yB._outputData ? yB._outputData.set(dB) : yB._outputData = new Float32Array(dB), dB = yB._outputData) : (TB.applyMorph && this.morphTargetManager || TB.applySkeleton && this.skeleton || TB.applyBakedVertexAnimation && this.bakedVertexAnimationManager?.isEnabled) && (dB = dB.slice()), TB.applyMorph && this.morphTargetManager && function(BB, TB, dB) {
              let VB;
              switch (TB) {
                case lB.m.PositionKind:
                  VB = BB => BB.getPositions();
                  break;
                case lB.m.NormalKind:
                  VB = BB => BB.getNormals();
                  break;
                case lB.m.TangentKind:
                  VB = BB => BB.getTangents();
                  break;
                case lB.m.UVKind:
                  VB = BB => BB.getUVs();
                  break;
                case lB.m.UV2Kind:
                  VB = BB => BB.getUV2s();
                  break;
                case lB.m.ColorKind:
                  VB = BB => BB.getColors();
                  break;
                default:
                  return
              }
              for (let yB = 0; yB < BB.length; yB++) {
                let TB = BB[yB];
                for (let pB = 0; pB < dB.numTargets; pB++) {
                  const lB = dB.getTarget(pB),
                    JB = lB.influence;
                  if (0 !== JB) {
                    const dB = VB(lB);
                    dB && (TB += (dB[yB] - BB[yB]) * JB)
                  }
                }
                BB[yB] = TB
              }
            }(dB, VB, this.morphTargetManager);
            const YB = this.bakedVertexAnimationManager;
            let gB = !1;
            if (TB.applyBakedVertexAnimation && YB?.isEnabled) {
              const BB = JB(lB.m.MatricesIndicesKind),
                yB = JB(lB.m.MatricesWeightsKind);
              if (yB && BB) {
                const pB = this.numBoneInfluencers > 4,
                  oB = pB ? JB(lB.m.MatricesIndicesExtraKind) : null,
                  kB = pB ? JB(lB.m.MatricesWeightsExtraKind) : null;
                gB = UB(dB, VB, YB, TB.bakedVertexAnimationSettings ?? YB.animationParameters, BB, yB, oB, kB, this.numBoneInfluencers)
              }
            }
            if (!gB && TB.applySkeleton && this.skeleton) {
              const TB = JB(lB.m.MatricesIndicesKind),
                yB = JB(lB.m.MatricesWeightsKind);
              if (yB && TB) {
                const pB = this.numBoneInfluencers > 4,
                  YB = pB ? JB(lB.m.MatricesIndicesExtraKind) : null,
                  gB = pB ? JB(lB.m.MatricesWeightsExtraKind) : null,
                  oB = this.skeleton.getTransformMatrices(this);
                BB._ApplySkeleton(dB, VB, oB, TB, yB, YB, gB)
              }
            }
            if (!1 !== TB.updatePositionsArray && VB === lB.m.PositionKind) {
              const BB = this._internalAbstractMeshDataInfo._positions || [],
                TB = BB.length;
              if (BB.length = dB.length / 3, TB < BB.length)
                for (let dB = TB; dB < BB.length; dB++) BB[dB] = new pB.p;
              for (let VB = 0, yB = 0; VB < BB.length; VB++, yB += 3) BB[VB].YBB(dB[yB], dB[yB + 1], dB[yB + 2]);
              this._internalAbstractMeshDataInfo._positions = BB
            }
            return dB
          }
          getNormalsData() {
            let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              TB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return this._getData({
              applySkeleton: BB,
              applyMorph: TB,
              updatePositionsArray: !1
            }, null, lB.m.NormalKind)
          }
          mG() {
            let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              TB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            return this._getData({
              applySkeleton: BB,
              applyMorph: TB,
              updatePositionsArray: !1
            }, dB, lB.m.PositionKind)
          }
          _updateBoundingInfo() {
            return this._boundingInfo ? this._boundingInfo.update(this.worldMatrixFromCache) : this._boundingInfo = new oB.b(pB.p.Zero(), pB.p.Zero(), this.worldMatrixFromCache), this._updateSubMeshesBoundingInfo(this.worldMatrixFromCache), this
          }
          _updateSubMeshesBoundingInfo(BB) {
            if (!this.oN) return this;
            const TB = this.oN.length;
            for (let dB = 0; dB < TB; dB++) {
              const VB = this.oN[dB];
              (TB > 1 || !VB.IsGlobal) && VB.updateBoundingInfo(BB)
            }
            return this
          }
          _afterComputeWorldMatrix() {
            this.ZD || (this._boundingInfoIsDirty = !0)
          }
          isInFrustum(BB) {
            return this.IK().isInFrustum(BB, this.cullingStrategy)
          }
          isCompletelyInFrustum(BB) {
            return this.IK().isCompletelyInFrustum(BB)
          }
          LyB(BB) {
            let TB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              dB = arguments.length > 2 ? arguments[2] : void 0;
            const VB = this.IK(),
              yB = BB.IK();
            if (VB.intersects(yB, TB)) return !0;
            if (dB)
              for (const pB of this.getChildMeshes())
                if (pB.LyB(BB, TB, !0)) return !0;
            return !1
          }
          intersectsPoint(BB) {
            return this.IK().intersectsPoint(BB)
          }
          get checkCollisions() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._checkCollisions
          }
          set checkCollisions(BB) {
            this._internalAbstractMeshDataInfo._meshCollisionData._checkCollisions = BB
          }
          get collider() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._collider
          }
          moveWithCollisions(BB) {
            let TB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            this.getAbsolutePosition().addToRef(this.ellipsoidOffset, this._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions);
            const dB = this.jU().collisionCoordinator;
            return this._internalAbstractMeshDataInfo._meshCollisionData._collider || (this._internalAbstractMeshDataInfo._meshCollisionData._collider = dB.createCollider()), this._internalAbstractMeshDataInfo._meshCollisionData._collider._radius = this.ellipsoid, dB.getNewPosition(this._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions, BB, this._internalAbstractMeshDataInfo._meshCollisionData._collider, this.collisionRetryCount, this, this._onCollisionPositionChange, this.uniqueId, TB), this
          }
          _collideForSubMesh(BB, TB, dB) {
            if (this._generatePointsArray(), !this._positions) return this;
            if (!BB._lastColliderWorldVertices || !BB._lastColliderTransformMatrix.equals(TB)) {
              BB._lastColliderTransformMatrix = TB.clone(), BB._lastColliderWorldVertices = [], BB._trianglePlanes = [];
              const dB = BB.verticesStart,
                VB = BB.verticesStart + BB.verticesCount;
              for (let yB = dB; yB < VB; yB++) BB._lastColliderWorldVertices.push(pB.p.TransformCoordinates(this._positions[yB], TB))
            }
            return dB._collide(BB._trianglePlanes, BB._lastColliderWorldVertices, this.elB(), BB.indexStart, BB.indexStart + BB.indexCount, BB.verticesStart, !!BB.XD(), this, this._shouldConvertRHS(), 7 === BB.XD()?.fillMode), this
          }
          _processCollisionsForSubMeshes(BB, TB) {
            const dB = this._scene.getCollidingSubMeshCandidates(this, BB),
              VB = dB.length;
            for (let yB = 0; yB < VB; yB++) {
              const pB = dB.data[yB];
              VB > 1 && !pB._checkCollision(BB) || this._collideForSubMesh(pB, TB, BB)
            }
            return this
          }
          _shouldConvertRHS() {
            return !1
          }
          _checkCollision(BB) {
            if (!this.IK()._checkCollision(BB)) return this;
            const TB = pB.j.Matrix[0],
              dB = pB.j.Matrix[1];
            return pB.b.ScalingToRef(1 / BB._radius.x, 1 / BB._radius.y, 1 / BB._radius.z, TB), this.worldMatrixFromCache.multiplyToRef(TB, dB), this._processCollisionsForSubMeshes(BB, dB), this
          }
          _generatePointsArray() {
            return !1
          }
          intersects(BB, TB, dB) {
            let VB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              yB = arguments.length > 4 ? arguments[4] : void 0,
              lB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
            const JB = new gB.b,
              YB = this.getClassName(),
              oB = "InstancedLinesMesh" === YB || "LinesMesh" === YB || "GreasedLineMesh" === YB ? this.intersectionThreshold : 0,
              kB = this.IK();
            if (!this.oN) return JB;
            if (!lB && (!BB.intersectsSphere(kB.bVB, oB) || !BB.intersectsBox(kB.boundingBox, oB))) return JB;
            if (VB) return JB.hit = !lB, JB.pickedMesh = lB ? null : this, JB.distance = lB ? 0 : pB.p.Distance(BB.origin, kB.bVB.center), JB.subMeshId = 0, JB;
            if (!this._generatePointsArray()) return JB;
            let LB = null;
            const OB = this._scene.getIntersectingSubMeshCandidates(this, BB),
              DB = OB.length;
            let uB = !1;
            for (let pB = 0; pB < DB; pB++) {
              const BB = OB.data[pB].XD();
              if (BB && (7 == BB.fillMode || 0 == BB.fillMode || 1 == BB.fillMode || 2 == BB.fillMode || 4 == BB.fillMode)) {
                uB = !0;
                break
              }
            }
            if (!uB) return JB.hit = !0, JB.pickedMesh = this, JB.distance = pB.p.Distance(BB.origin, kB.bVB.center), JB.subMeshId = -1, JB;
            for (let pB = 0; pB < DB; pB++) {
              const VB = OB.data[pB];
              if (DB > 1 && !lB && !VB.canIntersects(BB)) continue;
              const yB = VB.intersects(BB, this._positions, this.elB(), TB, dB);
              if (yB && (TB || !LB || yB.distance < LB.distance) && (LB = yB, LB.subMeshId = VB._id, LB._internalSubMeshId = pB, TB)) break
            }
            if (LB) {
              const TB = yB ?? this.getWorldMatrix(),
                dB = pB.j.RD[0],
                VB = pB.j.RD[1];
              pB.p.TransformCoordinatesToRef(BB.origin, TB, dB), BB.direction.scaleToRef(LB.distance, VB);
              const lB = pB.p.TransformNormal(VB, TB).addInPlace(dB);
              return JB.hit = !0, JB.distance = pB.p.Distance(dB, lB), JB.pickedPoint = lB, JB.pickedMesh = this, JB.bu = LB.bu || 0, JB.bv = LB.bv || 0, JB.subMeshFaceId = LB.faceId, JB.faceId = LB.faceId + OB.data[LB._internalSubMeshId].indexStart / (-1 !== this.getClassName().indexOf("LinesMesh") ? 2 : 3), JB.subMeshId = LB.subMeshId, JB
            }
            return JB
          }
          clone(BB, TB, dB) {
            return null
          }
          releaseSubMeshes() {
            let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (this.oN)
              for (; this.oN.length;) this.oN[0].dispose(BB);
            else this.oN = [];
            return this
          }
          dispose(BB) {
            let TB, dB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            const VB = this.jU();
            for (this._scene.useMaterialMeshMap && this._internalAbstractMeshDataInfo._material && this._internalAbstractMeshDataInfo._material.meshMap && (this._internalAbstractMeshDataInfo._material.meshMap[this.uniqueId] = void 0), VB.freeActiveMeshes(), VB.freeRenderingGroups(), VB.renderingManager.maintainStateBetweenFrames && VB.renderingManager.restoreDispachedFlags(), void 0 !== this.actionManager && null !== this.actionManager && (this.actionManager.disposeWhenUnowned && !this._scene.meshes.some((BB => BB !== this && BB.actionManager === this.actionManager)) && this.actionManager.dispose(), this.actionManager = null), this._internalAbstractMeshDataInfo._skeleton = null, this._transformMatrixTexture && (this._transformMatrixTexture.dispose(), this._transformMatrixTexture = null), TB = 0; TB < this._intersectionsInProgress.length; TB++) {
              const BB = this._intersectionsInProgress[TB],
                dB = BB._intersectionsInProgress.indexOf(this);
              BB._intersectionsInProgress.splice(dB, 1)
            }
            this._intersectionsInProgress.length = 0;
            const yB = VB.lights;
            for (const lB of yB) {
              let BB = lB.includedOnlyMeshes.indexOf(this); - 1 !== BB && lB.includedOnlyMeshes.splice(BB, 1), BB = lB.excludedMeshes.indexOf(this), -1 !== BB && lB.excludedMeshes.splice(BB, 1);
              const TB = lB.getShadowGenerators();
              if (TB) {
                const dB = TB.values();
                for (let TB = dB.next(); !0 !== TB.done; TB = dB.next()) {
                  const dB = TB.value.getShadowMap();
                  dB && dB.renderList && (BB = dB.renderList.indexOf(this), -1 !== BB && dB.renderList.splice(BB, 1))
                }
              }
            }
            this.releaseSubMeshes(VB._isDisposing);
            const pB = VB.PD();
            if (null !== this._occlusionQuery && (this.isOcclusionQueryInProgress = !1, pB.deleteQuery(this._occlusionQuery), this._occlusionQuery = null), pB.wipeCaches(), VB.mF(this), this._parentContainer) {
              const BB = this._parentContainer.meshes.indexOf(this);
              BB > -1 && this._parentContainer.meshes.splice(BB, 1), this._parentContainer = null
            }
            if (dB && this.material && ("MultiMaterial" === this.material.getClassName() ? this.material.dispose(!1, !0, !0) : this.material.dispose(!1, !0)), !BB)
              for (TB = 0; TB < VB.kN.length; TB++) VB.kN[TB].emitter === this && (VB.kN[TB].dispose(), TB--);
            this._internalAbstractMeshDataInfo._facetData.facetDataEnabled && this.disableFacetData(), this._uniformBuffer.dispose(), this.onAfterWorldMatrixUpdateObservable.clear(), this.onCollideObservable.clear(), this.onCollisionPositionChangeObservable.clear(), this.onRebuildObservable.clear(), super.dispose(BB, dB)
          }
          _initFacetData() {
            const BB = this._internalAbstractMeshDataInfo._facetData;
            BB.facetNormals || (BB.facetNormals = []), BB.facetPositions || (BB.facetPositions = []), BB.facetPartitioning || (BB.facetPartitioning = new Array), BB.facetNb = this.elB().length / 3 | 0, BB.partitioningSubdivisions = BB.partitioningSubdivisions ? BB.partitioningSubdivisions : 10, BB.partitioningBBoxRatio = BB.partitioningBBoxRatio ? BB.partitioningBBoxRatio : 1.01;
            for (let TB = 0; TB < BB.facetNb; TB++) BB.facetNormals[TB] = pB.p.Zero(), BB.facetPositions[TB] = pB.p.Zero();
            return BB.facetDataEnabled = !0, this
          }
          updateFacetData() {
            const BB = this._internalAbstractMeshDataInfo._facetData;
            BB.facetDataEnabled || this._initFacetData();
            const TB = this.getVerticesData(lB.m.PositionKind),
              dB = this.elB(),
              VB = this.getVerticesData(lB.m.NormalKind)?.slice(),
              yB = this.IK();
            if (BB.facetDepthSort && !BB.facetDepthSortEnabled) {
              if (BB.facetDepthSortEnabled = !0, dB instanceof Uint16Array) BB.depthSortedIndices = new Uint16Array(dB);
              else if (dB instanceof Uint32Array) BB.depthSortedIndices = new Uint32Array(dB);
              else {
                let TB = !1;
                for (let BB = 0; BB < dB.length; BB++)
                  if (dB[BB] > 65535) {
                    TB = !0;
                    break
                  } BB.depthSortedIndices = TB ? new Uint32Array(dB) : new Uint16Array(dB)
              }
              if (BB.facetDepthSortFunction = function(BB, TB) {
                  return TB.sqDistance - BB.sqDistance
                }, !BB.facetDepthSortFrom) {
                const TB = this.jU().activeCamera;
                BB.facetDepthSortFrom = TB ? TB.position : pB.p.Zero()
              }
              BB.depthSortedFacets = [];
              for (let TB = 0; TB < BB.facetNb; TB++) {
                const dB = {
                  ind: 3 * TB,
                  sqDistance: 0
                };
                BB.depthSortedFacets.push(dB)
              }
              BB.invertedMatrix = pB.b.Identity(), BB.facetDepthSortOrigin = pB.p.Zero()
            }
            BB.bbSize.x = yB.maximum.x - yB.minimum.x > iB.b ? yB.maximum.x - yB.minimum.x : iB.b, BB.bbSize.y = yB.maximum.y - yB.minimum.y > iB.b ? yB.maximum.y - yB.minimum.y : iB.b, BB.bbSize.z = yB.maximum.z - yB.minimum.z > iB.b ? yB.maximum.z - yB.minimum.z : iB.b;
            let YB = BB.bbSize.x > BB.bbSize.y ? BB.bbSize.x : BB.bbSize.y;
            if (YB = YB > BB.bbSize.z ? YB : BB.bbSize.z, BB.subDiv.max = BB.partitioningSubdivisions, BB.subDiv.X = Math.floor(BB.subDiv.max * BB.bbSize.x / YB), BB.subDiv.Y = Math.floor(BB.subDiv.max * BB.bbSize.y / YB), BB.subDiv.Z = Math.floor(BB.subDiv.max * BB.bbSize.z / YB), BB.subDiv.X = BB.subDiv.X < 1 ? 1 : BB.subDiv.X, BB.subDiv.Y = BB.subDiv.Y < 1 ? 1 : BB.subDiv.Y, BB.subDiv.Z = BB.subDiv.Z < 1 ? 1 : BB.subDiv.Z, BB.facetParameters.facetNormals = this.getFacetLocalNormals(), BB.facetParameters.facetPositions = this.getFacetLocalPositions(), BB.facetParameters.facetPartitioning = this.getFacetLocalPartitioning(), BB.facetParameters.bInfo = yB, BB.facetParameters.bbSize = BB.bbSize, BB.facetParameters.subDiv = BB.subDiv, BB.facetParameters.ratio = this.partitioningBBoxRatio, BB.facetParameters.depthSort = BB.facetDepthSort, BB.facetDepthSort && BB.facetDepthSortEnabled && (this.computeWorldMatrix(!0), this._worldMatrix.invertToRef(BB.invertedMatrix), pB.p.TransformCoordinatesToRef(BB.facetDepthSortFrom, BB.invertedMatrix, BB.facetDepthSortOrigin), BB.facetParameters.distanceTo = BB.facetDepthSortOrigin), BB.facetParameters.depthSortedFacets = BB.depthSortedFacets, VB && JB.d.ComputeNormals(TB, dB, VB, BB.facetParameters), BB.facetDepthSort && BB.facetDepthSortEnabled) {
              BB.depthSortedFacets.sort(BB.facetDepthSortFunction);
              const TB = BB.depthSortedIndices.length / 3 | 0;
              for (let VB = 0; VB < TB; VB++) {
                const TB = BB.depthSortedFacets[VB].ind;
                BB.depthSortedIndices[3 * VB] = dB[TB], BB.depthSortedIndices[3 * VB + 1] = dB[TB + 1], BB.depthSortedIndices[3 * VB + 2] = dB[TB + 2]
              }
              this.updateIndices(BB.depthSortedIndices, void 0, !0)
            }
            return this
          }
          getFacetLocalNormals() {
            const BB = this._internalAbstractMeshDataInfo._facetData;
            return BB.facetNormals || this.updateFacetData(), BB.facetNormals
          }
          getFacetLocalPositions() {
            const BB = this._internalAbstractMeshDataInfo._facetData;
            return BB.facetPositions || this.updateFacetData(), BB.facetPositions
          }
          getFacetLocalPartitioning() {
            const BB = this._internalAbstractMeshDataInfo._facetData;
            return BB.facetPartitioning || this.updateFacetData(), BB.facetPartitioning
          }
          getFacetPosition(BB) {
            const TB = pB.p.Zero();
            return this.getFacetPositionToRef(BB, TB), TB
          }
          getFacetPositionToRef(BB, TB) {
            const dB = this.getFacetLocalPositions()[BB],
              VB = this.getWorldMatrix();
            return pB.p.TransformCoordinatesToRef(dB, VB, TB), this
          }
          getFacetNormal(BB) {
            const TB = pB.p.Zero();
            return this.getFacetNormalToRef(BB, TB), TB
          }
          getFacetNormalToRef(BB, TB) {
            const dB = this.getFacetLocalNormals()[BB];
            return pB.p.TransformNormalToRef(dB, this.getWorldMatrix(), TB), this
          }
          getFacetsAtLocalCoordinates(BB, TB, dB) {
            const VB = this.IK(),
              yB = this._internalAbstractMeshDataInfo._facetData,
              pB = Math.floor((BB - VB.minimum.x * yB.partitioningBBoxRatio) * yB.subDiv.X * yB.partitioningBBoxRatio / yB.bbSize.x),
              lB = Math.floor((TB - VB.minimum.y * yB.partitioningBBoxRatio) * yB.subDiv.Y * yB.partitioningBBoxRatio / yB.bbSize.y),
              JB = Math.floor((dB - VB.minimum.z * yB.partitioningBBoxRatio) * yB.subDiv.Z * yB.partitioningBBoxRatio / yB.bbSize.z);
            return pB < 0 || pB > yB.subDiv.max || lB < 0 || lB > yB.subDiv.max || JB < 0 || JB > yB.subDiv.max ? null : yB.facetPartitioning[pB + yB.subDiv.max * lB + yB.subDiv.max * yB.subDiv.max * JB]
          }
          getClosestFacetAtCoordinates(BB, TB, dB, VB) {
            let yB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              lB = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
            const JB = this.getWorldMatrix(),
              YB = pB.j.Matrix[5];
            JB.invertToRef(YB);
            const gB = pB.j.RD[8];
            pB.p.TransformCoordinatesFromFloatsToRef(BB, TB, dB, YB, gB);
            const oB = this.getClosestFacetAtLocalCoordinates(gB.x, gB.y, gB.z, VB, yB, lB);
            return VB && pB.p.TransformCoordinatesFromFloatsToRef(VB.x, VB.y, VB.z, JB, VB), oB
          }
          getClosestFacetAtLocalCoordinates(BB, TB, dB, VB) {
            let yB, pB, lB, JB, YB, gB, oB, kB, LB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              OB = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
              DB = null;
            const uB = this.getFacetLocalPositions(),
              HB = this.getFacetLocalNormals(),
              EB = this.getFacetsAtLocalCoordinates(BB, TB, dB);
            if (!EB) return null;
            let vB, mB, iB, NB, tB = Number.MAX_VALUE;
            for (let fB = 0; fB < EB.length; fB++) mB = EB[fB], iB = HB[mB], NB = uB[mB], JB = (BB - NB.x) * iB.x + (TB - NB.y) * iB.y + (dB - NB.z) * iB.z, (!LB || LB && OB && JB >= 0 || LB && !OB && JB <= 0) && (JB = iB.x * NB.x + iB.y * NB.y + iB.z * NB.z, YB = -(iB.x * BB + iB.y * TB + iB.z * dB - JB) / (iB.x * iB.x + iB.y * iB.y + iB.z * iB.z), gB = BB + iB.x * YB, oB = TB + iB.y * YB, kB = dB + iB.z * YB, yB = gB - BB, pB = oB - TB, lB = kB - dB, vB = yB * yB + pB * pB + lB * lB, vB < tB && (tB = vB, DB = mB, VB && (VB.x = gB, VB.y = oB, VB.z = kB)));
            return DB
          }
          getFacetDataParameters() {
            return this._internalAbstractMeshDataInfo._facetData.facetParameters
          }
          disableFacetData() {
            const BB = this._internalAbstractMeshDataInfo._facetData;
            return BB.facetDataEnabled && (BB.facetDataEnabled = !1, BB.facetPositions = [], BB.facetNormals = [], BB.facetPartitioning = new Array, BB.facetParameters = {}, BB.depthSortedIndices = new Uint32Array(0)), this
          }
          updateIndices(BB, TB) {
            return this
          }
          createNormals(BB) {
            const TB = this.getVerticesData(lB.m.PositionKind),
              dB = this.elB();
            let VB;
            return VB = this.isVerticesDataPresent(lB.m.NormalKind) ? this.getVerticesData(lB.m.NormalKind) : [], JB.d.ComputeNormals(TB, dB, VB, {
              useRightHandedSystem: this.jU().useRightHandedSystem
            }), this.setVerticesData(lB.m.NormalKind, VB, BB), this
          }
          async optimizeIndicesAsync() {
            const BB = this.elB();
            if (!BB) return this;
            const {
              OptimizeIndices: TB
            } = await dB.e(331).then((() => dB(41235)));
            return TB(BB), this.setIndices(BB, this.getTotalVertices()), this
          }
          alignWithNormal(BB, TB) {
            TB || (TB = NB.e.Y);
            const dB = pB.j.RD[0],
              VB = pB.j.RD[1];
            return pB.p.CrossToRef(TB, BB, VB), pB.p.CrossToRef(BB, VB, dB), this.rotationQuaternion ? pB.f.RotationQuaternionFromAxisToRef(dB, BB, VB, this.rotationQuaternion) : pB.p.RotationFromAxisToRef(dB, BB, VB, this.rotation), this
          }
          _checkOcclusionQuery() {
            return !1
          }
          disableEdgesRendering() {
            throw (0, HB.i)("EdgesRenderer")
          }
          enableEdgesRendering(BB, TB, dB) {
            throw (0, HB.i)("EdgesRenderer")
          }
          getConnectedParticleSystems() {
            return this._scene.kN.filter((BB => BB.emitter === this))
          }
        }, (() => {
          const dB = "function" === typeof Symbol && Symbol.metadata ? Object.create(LB[Symbol.metadata] ?? null) : void 0;
          TB = [fB.m.filter((function() {
            return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0]) && !Array.isArray(arguments.length <= 3 ? void 0 : arguments[3]) && !Array.isArray(arguments.length <= 4 ? void 0 : arguments[4]) && !Array.isArray(arguments.length <= 5 ? void 0 : arguments[5]) && !Array.isArray(arguments.length <= 6 ? void 0 : arguments[6])
          }))], (0, VB.g)(BB, null, TB, {
            kind: "method",
            name: "_ApplySkeleton",
            static: !0,
            private: !1,
            access: {
              has: BB => "_ApplySkeleton" in BB,
              get: BB => BB._ApplySkeleton
            },
            metadata: dB
          }, null, OB), dB && Object.defineProperty(BB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: dB
          })
        })(), BB.OCCLUSION_TYPE_NONE = ((0, VB.h)(BB, OB), 0), BB.OCCLUSION_TYPE_OPTIMISTIC = 1, BB.OCCLUSION_TYPE_STRICT = 2, BB.OCCLUSION_ALGORITHM_TYPE_ACCURATE = 0, BB.OCCLUSION_ALGORITHM_TYPE_CONSERVATIVE = 1, BB.CULLINGSTRATEGY_STANDARD = 0, BB.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY = 1, BB.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION = 2, BB.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION_THEN_BSPHERE_ONLY = 3, BB.DefaultIsPickable = !0, BB
      })(),
      IB = !1;

    function cB() {
      IB || (IB = !0, (0, MB.g)("BABYLON.AbstractMesh", rB))
    }(OB = rB.prototype).createOrUpdateSubmeshesOctree ?? (OB.createOrUpdateSubmeshesOctree = (0, HB.h)("AbstractMesh", "createOrUpdateSubmeshesOctree")), (DB = rB.prototype).getPhysicsImpostor ?? (DB.getPhysicsImpostor = (0, HB.h)("AbstractMesh", "getPhysicsImpostor")), (uB = rB.prototype).setPhysicsLinkWith ?? (uB.setPhysicsLinkWith = (0, HB.h)("AbstractMesh", "setPhysicsLinkWith")), Object.getOwnPropertyDescriptor(rB.prototype, "occlusionRetryCount") || Object.defineProperty(rB.prototype, "occlusionRetryCount", (0, HB.d)("AbstractMesh", "occlusionRetryCount")), Object.getOwnPropertyDescriptor(rB.prototype, "occlusionType") || Object.defineProperty(rB.prototype, "occlusionType", (0, HB.d)("AbstractMesh", "occlusionType")), Object.getOwnPropertyDescriptor(rB.prototype, "occlusionQueryAlgorithmType") || Object.defineProperty(rB.prototype, "occlusionQueryAlgorithmType", (0, HB.d)("AbstractMesh", "occlusionQueryAlgorithmType")), Object.getOwnPropertyDescriptor(rB.prototype, "isOccluded") || Object.defineProperty(rB.prototype, "isOccluded", (0, HB.d)("AbstractMesh", "isOccluded")), Object.getOwnPropertyDescriptor(rB.prototype, "isOcclusionQueryInProgress") || Object.defineProperty(rB.prototype, "isOcclusionQueryInProgress", (0, HB.d)("AbstractMesh", "isOcclusionQueryInProgress")), Object.getOwnPropertyDescriptor(rB.prototype, "forceRenderingWhenOccluded") || Object.defineProperty(rB.prototype, "forceRenderingWhenOccluded", (0, HB.d)("AbstractMesh", "forceRenderingWhenOccluded")), Object.getOwnPropertyDescriptor(rB.prototype, "occlusionForRenderPassId") || Object.defineProperty(rB.prototype, "occlusionForRenderPassId", (0, HB.d)("AbstractMesh", "occlusionForRenderPassId")), Object.getOwnPropertyDescriptor(rB.prototype, "decalMap") || Object.defineProperty(rB.prototype, "decalMap", (0, HB.d)("AbstractMesh", "decalMap")), Object.getOwnPropertyDescriptor(rB.prototype, "sK") || Object.defineProperty(rB.prototype, "sK", (0, HB.d)("AbstractMesh", "sK")), Object.getOwnPropertyDescriptor(rB.prototype, "physicsImpostor") || Object.defineProperty(rB.prototype, "physicsImpostor", (0, HB.d)("AbstractMesh", "physicsImpostor")), Object.getOwnPropertyDescriptor(rB.prototype, "showBoundingBox") || Object.defineProperty(rB.prototype, "showBoundingBox", (0, HB.d)("AbstractMesh", "showBoundingBox")), Object.getOwnPropertyDescriptor(rB.prototype, "edgesRenderer") || Object.defineProperty(rB.prototype, "edgesRenderer", (0, HB.d)("AbstractMesh", "edgesRenderer")), Object.getOwnPropertyDescriptor(rB.prototype, "renderOutline") || Object.defineProperty(rB.prototype, "renderOutline", (0, HB.d)("AbstractMesh", "renderOutline")), Object.getOwnPropertyDescriptor(rB.prototype, "renderOverlay") || Object.defineProperty(rB.prototype, "renderOverlay", (0, HB.d)("AbstractMesh", "renderOverlay"))
  },
  39158: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => EB
    });
    var VB = dB(36126),
      yB = dB(36183),
      pB = dB(39156),
      lB = dB(38897),
      JB = dB(39045),
      YB = dB(39167),
      gB = dB(39058),
      oB = dB(38848),
      kB = dB(37651),
      LB = dB(38775),
      OB = dB(39062),
      DB = dB(36148),
      uB = dB(39172),
      HB = dB(38819);
    class EB {
      get boundingBias() {
        return this._boundingBias
      }
      set boundingBias(BB) {
        this._boundingBias ? this._boundingBias.bdB(BB) : this._boundingBias = BB.clone(), this._updateBoundingInfo(!0, null)
      }
      static CreateGeometryForMesh(BB) {
        const TB = new EB(EB.RandomId(), BB.jU());
        return TB.applyToMesh(BB), TB
      }
      get meshes() {
        return this._meshes
      }
      constructor(BB, TB, dB) {
        let yB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          pB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          lB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        this.delayLoadState = 0, this._totalVertices = 0, this._isDisposed = !1, this._extend = {
          minimum: new VB.p(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE),
          maximum: new VB.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE)
        }, this._indexBufferIsUpdatable = !1, this._positionsCache = [], this._parentContainer = null, this.useBoundingInfoFromGeometry = !1, this._scene = TB || DB.c.LastCreatedScene, this._scene && (this.id = BB, this.uniqueId = this._scene.getUniqueId(), this._engine = this._scene.PD(), this._meshes = [], this._vertexBuffers = {}, this._indices = [], this._updatable = yB, null !== lB && (this._totalVertices = lB), dB ? this.setAllVerticesData(dB, yB) : null === lB && (this._totalVertices = 0), this._engine.getCaps().vertexArrayObject && (this._vertexArrayObjects = {}), pB && (this.applyToMesh(pB), pB.computeWorldMatrix(!0)))
      }
      get extend() {
        return this._extend
      }
      jU() {
        return this._scene
      }
      PD() {
        return this._engine
      }
      isReady() {
        return 1 === this.delayLoadState || 0 === this.delayLoadState
      }
      get doNotSerialize() {
        for (let BB = 0; BB < this._meshes.length; BB++)
          if (!this._meshes[BB].doNotSerialize) return !1;
        return !0
      }
      _rebuild() {
        this._vertexArrayObjects && (this._vertexArrayObjects = {}), 0 !== this._meshes.length && this._indices && (this._indexBuffer = this._engine.createIndexBuffer(this._indices, this._updatable, "Geometry_" + this.id + "_IndexBuffer"));
        const BB = new Set;
        for (const TB in this._vertexBuffers) BB.add(this._vertexBuffers[TB].getWrapperBuffer());
        BB.forEach((BB => {
          BB._rebuild()
        }))
      }
      setAllVerticesData(BB, TB) {
        BB.applyToGeometry(this, TB), this._notifyUpdate()
      }
      setVerticesData(BB, TB) {
        let dB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          VB = arguments.length > 3 ? arguments[3] : void 0;
        dB && Array.isArray(TB) && (TB = new Float32Array(TB));
        const yB = new lB.m(this._engine, TB, BB, {
          updatable: dB,
          postponeInternalCreation: 0 === this._meshes.length,
          stride: VB,
          label: "Geometry_" + this.id + "_" + BB
        });
        this.setVerticesBuffer(yB)
      }
      removeVerticesData(BB) {
        this._vertexBuffers[BB] && (this._vertexBuffers[BB].dispose(), delete this._vertexBuffers[BB]), this._vertexArrayObjects && this._disposeVertexArrayObjects()
      }
      setVerticesBuffer(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          dB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        const yB = BB.getKind();
        this._vertexBuffers[yB] && dB && this._vertexBuffers[yB].dispose(), BB._buffer && BB._ownsBuffer && BB._buffer._increaseReferences(), this._vertexBuffers[yB] = BB;
        const pB = this._meshes,
          JB = pB.length;
        if (yB === lB.m.PositionKind) {
          this._totalVertices = TB ?? BB._maxVerticesCount, this._updateExtend(this.useBoundingInfoFromGeometry && this._boundingInfo ? null : BB.getFloatData(this._totalVertices)), this._resetPointsArrayCache();
          const dB = this._extend && this._extend.minimum || new VB.p(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE),
            yB = this._extend && this._extend.maximum || new VB.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
          for (let BB = 0; BB < JB; BB++) {
            const TB = pB[BB];
            TB.buildBoundingInfo(dB, yB), TB._createGlobalSubMesh(TB.isUnIndexed), TB.computeWorldMatrix(!0), TB.synchronizeInstances()
          }
        }
        this._notifyUpdate(yB)
      }
      updateVerticesDataDirectly(BB, TB, dB) {
        let VB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const yB = this.getVertexBuffer(BB);
        yB && (yB.updateDirectly(TB, dB, VB), this._notifyUpdate(BB))
      }
      updateVerticesData(BB, TB) {
        let dB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const VB = this.getVertexBuffer(BB);
        VB && (VB.update(TB), BB === lB.m.PositionKind && this._updateBoundingInfo(dB, TB), this._notifyUpdate(BB))
      }
      _updateBoundingInfo(BB, TB) {
        if (BB && this._updateExtend(TB), this._resetPointsArrayCache(), BB) {
          const BB = this._meshes;
          for (const TB of BB) {
            TB.hasBoundingInfo ? TB.IK().reConstruct(this._extend.minimum, this._extend.maximum) : TB.buildBoundingInfo(this._extend.minimum, this._extend.maximum);
            const BB = TB.oN;
            for (const TB of BB) TB.refreshBoundingInfo()
          }
        }
      }
      _bind(BB, TB, dB, VB) {
        if (!BB) return;
        void 0 === TB && (TB = this._indexBuffer);
        const yB = this.getVertexBuffers();
        if (!yB) return;
        if (TB != this._indexBuffer || !this._vertexArrayObjects && !VB) return void this._engine.bindBuffers(yB, TB, BB, dB);
        const pB = VB || this._vertexArrayObjects,
          lB = this._engine;
        pB[BB.key] || (pB[BB.key] = lB.recordVertexArrayObject(yB, TB, BB, dB)), lB.bindVertexArrayObject(pB[BB.key], TB)
      }
      getTotalVertices() {
        return this.isReady() ? this._totalVertices : 0
      }
      getVerticesData(BB, TB, dB) {
        const VB = this.getVertexBuffer(BB);
        return VB ? VB.getFloatData(this._totalVertices, dB || TB && 1 !== this._meshes.length) : null
      }
      copyVerticesData(BB, TB) {
        const dB = this.getVertexBuffer(BB);
        if (!dB) return;
        TB[BB] || (TB[BB] = new Float32Array(this._totalVertices * dB.getSize()));
        const VB = dB.getData();
        VB && (0, HB.d)(VB, dB.getSize(), dB.type, dB.byteOffset, dB.byteStride, dB.normalized, this._totalVertices, TB[BB])
      }
      isVertexBufferUpdatable(BB) {
        const TB = this._vertexBuffers[BB];
        return !!TB && TB.isUpdatable()
      }
      getVertexBuffer(BB) {
        return this.isReady() ? this._vertexBuffers[BB] : null
      }
      getVertexBuffers() {
        return this.isReady() ? this._vertexBuffers : null
      }
      isVerticesDataPresent(BB) {
        return this._vertexBuffers ? void 0 !== this._vertexBuffers[BB] : !!this._delayInfo && -1 !== this._delayInfo.indexOf(BB)
      }
      getVerticesDataKinds() {
        const BB = [];
        let TB;
        if (!this._vertexBuffers && this._delayInfo)
          for (TB in this._delayInfo) BB.push(TB);
        else
          for (TB in this._vertexBuffers) BB.push(TB);
        return BB
      }
      updateIndices(BB, TB) {
        let dB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this._indexBuffer)
          if (this._indexBufferIsUpdatable) {
            const VB = BB.length !== this._indices.length;
            if (dB || (this._indices = BB.slice()), this._engine.updateDynamicIndexBuffer(this._indexBuffer, BB, TB), VB)
              for (const BB of this._meshes) BB._createGlobalSubMesh(!0)
          } else this.setIndices(BB, null, !0)
      }
      setIndexBuffer(BB, TB, dB) {
        let VB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._indices = [], this._indexBufferIsUpdatable = !1, this._indexBuffer = BB, this._totalVertices = TB, this._totalIndices = dB, BB.is32Bits = null === VB ? TB > 65535 : VB;
        for (const yB of this._meshes) yB._createGlobalSubMesh(!0), yB.synchronizeInstances();
        this._notifyUpdate()
      }
      setIndices(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          dB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          VB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this._indexBuffer && this._engine._releaseBuffer(this._indexBuffer), this._indices = BB, this._indexBufferIsUpdatable = dB, 0 !== this._meshes.length && this._indices && (this._indexBuffer = this._engine.createIndexBuffer(this._indices, dB, "Geometry_" + this.id + "_IndexBuffer")), void 0 != TB && (this._totalVertices = TB);
        for (const yB of this._meshes) yB._createGlobalSubMesh(!VB), yB.synchronizeInstances();
        this._notifyUpdate()
      }
      getTotalIndices() {
        return this.isReady() ? void 0 !== this._totalIndices ? this._totalIndices : this._indices.length : 0
      }
      elB(BB, TB) {
        if (!this.isReady()) return null;
        const dB = this._indices;
        return TB || BB && 1 !== this._meshes.length ? dB.slice() : dB
      }
      getIndexBuffer() {
        return this.isReady() ? this._indexBuffer : null
      }
      _releaseVertexArrayObject() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        BB && this._vertexArrayObjects && this._vertexArrayObjects[BB.key] && (this._engine.releaseVertexArrayObject(this._vertexArrayObjects[BB.key]), delete this._vertexArrayObjects[BB.key])
      }
      releaseForMesh(BB, TB) {
        const dB = this._meshes,
          VB = dB.indexOf(BB); - 1 !== VB && (dB.splice(VB, 1), this._vertexArrayObjects && BB._invalidateInstanceVertexArrayObject(), BB._geometry = null, 0 === dB.length && TB && this.dispose())
      }
      applyToMesh(BB) {
        if (BB._geometry === this) return;
        const TB = BB._geometry;
        TB && TB.releaseForMesh(BB), this._vertexArrayObjects && BB._invalidateInstanceVertexArrayObject();
        const dB = this._meshes;
        BB._geometry = this, BB._internalAbstractMeshDataInfo._positions = null, this._scene.pushGeometry(this), dB.push(BB), this.isReady() ? this._applyToMesh(BB) : this._boundingInfo && BB.setBoundingInfo(this._boundingInfo)
      }
      _updateExtend() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (this.useBoundingInfoFromGeometry && this._boundingInfo) this._extend = {
          minimum: this._boundingInfo.minimum.clone(),
          maximum: this._boundingInfo.maximum.clone()
        };
        else {
          if (!BB && (BB = this.getVerticesData(lB.m.PositionKind), !BB)) return;
          this._extend = (0, OB.i)(BB, 0, this._totalVertices, this.boundingBias, 3)
        }
      }
      _applyToMesh(BB) {
        for (const TB in this._vertexBuffers) {
          const dB = this._vertexBuffers[TB];
          dB._buffer.getBuffer() || dB.create(), TB === lB.m.PositionKind && (this._extend || this._updateExtend(), BB.buildBoundingInfo(this._extend.minimum, this._extend.maximum), BB._createGlobalSubMesh(BB.isUnIndexed), BB._updateBoundingInfo())
        }!this._indexBuffer && this._indices && this._indices.length > 0 && (this._indexBuffer = this._engine.createIndexBuffer(this._indices, this._updatable, "Geometry_" + this.id + "_IndexBuffer")), BB._syncGeometryWithMorphTargetManager(), BB.synchronizeInstances()
      }
      _notifyUpdate(BB) {
        this.onGeometryUpdated && this.onGeometryUpdated(this, BB), this._vertexArrayObjects && this._disposeVertexArrayObjects();
        for (const TB of this._meshes) TB._markSubMeshesAsAttributesDirty()
      }
      load(BB, TB) {
        2 !== this.delayLoadState && (this.isReady() ? TB && TB() : (this.delayLoadState = 2, this._queueLoad(BB, TB)))
      }
      _queueLoad(BB, TB) {
        this.delayLoadingFile && (BB.addPendingData(this), (async () => {
          try {
            const dB = await BB._loadDelayedFileAsync(this.delayLoadingFile, !1, !0);
            if (!this._delayLoadingFunction) return void BB.removePendingData(this);
            this._delayLoadingFunction(JSON.parse(dB), this), this.delayLoadState = 1, this._delayInfo = [], BB.removePendingData(this);
            const VB = this._meshes,
              yB = VB.length;
            for (let BB = 0; BB < yB; BB++) this._applyToMesh(VB[BB]);
            TB && TB()
          } catch (dB) {
            BB.removePendingData(this), BB.WdB || kB.b.Error(`Unable to delay load geometry "${this.id}" from "${this.delayLoadingFile}": ${dB}`)
          }
        })())
      }
      toLeftHanded() {
        const BB = this.elB(!1);
        if (null != BB && BB.length > 0) {
          for (let TB = 0; TB < BB.length; TB += 3) {
            const dB = BB[TB + 0];
            BB[TB + 0] = BB[TB + 2], BB[TB + 2] = dB
          }
          this.setIndices(BB)
        }
        const TB = this.getVerticesData(lB.m.PositionKind, !1);
        if (null != TB && TB.length > 0) {
          for (let BB = 0; BB < TB.length; BB += 3) TB[BB + 2] = -TB[BB + 2];
          this.setVerticesData(lB.m.PositionKind, TB, !1)
        }
        const dB = this.getVerticesData(lB.m.NormalKind, !1);
        if (null != dB && dB.length > 0) {
          for (let BB = 0; BB < dB.length; BB += 3) dB[BB + 2] = -dB[BB + 2];
          this.setVerticesData(lB.m.NormalKind, dB, !1)
        }
      }
      _resetPointsArrayCache() {
        this._positions = null
      }
      _generatePointsArray() {
        if (this._positions) return !0;
        const BB = this.getVerticesData(lB.m.PositionKind);
        if (!BB || 0 === BB.length) return !1;
        for (let TB = 3 * this._positionsCache.length, dB = this._positionsCache.length; TB < BB.length; TB += 3, ++dB) this._positionsCache[dB] = VB.p.FromArray(BB, TB);
        for (let TB = 0, dB = 0; TB < BB.length; TB += 3, ++dB) this._positionsCache[dB].set(BB[0 + TB], BB[1 + TB], BB[2 + TB]);
        return this._positionsCache.length = BB.length / 3, this._positions = this._positionsCache, !0
      }
      WdB() {
        return this._isDisposed
      }
      _disposeVertexArrayObjects() {
        if (this._vertexArrayObjects) {
          for (const dB in this._vertexArrayObjects) this._engine.releaseVertexArrayObject(this._vertexArrayObjects[dB]);
          this._vertexArrayObjects = {};
          const BB = this._meshes,
            TB = BB.length;
          for (let dB = 0; dB < TB; dB++) BB[dB]._invalidateInstanceVertexArrayObject()
        }
      }
      dispose() {
        const BB = this._meshes,
          TB = BB.length;
        let dB;
        for (dB = 0; dB < TB; dB++) this.releaseForMesh(BB[dB]);
        this._meshes.length = 0, this._disposeVertexArrayObjects();
        for (const VB in this._vertexBuffers) this._vertexBuffers[VB].dispose();
        if (this._vertexBuffers = {}, this._totalVertices = 0, this._indexBuffer && this._engine._releaseBuffer(this._indexBuffer), this._indexBuffer = null, this._indices = [], this.delayLoadState = 0, this.delayLoadingFile = null, this._delayLoadingFunction = null, this._delayInfo = [], this._boundingInfo = null, this._scene.removeGeometry(this), this._parentContainer) {
          const BB = this._parentContainer.geometries.indexOf(this);
          BB > -1 && this._parentContainer.geometries.splice(BB, 1), this._parentContainer = null
        }
        this._isDisposed = !0
      }
      copy(BB) {
        const TB = new EB(BB, this._scene),
          dB = this.elB(void 0, !0);
        dB && TB.setIndices(dB);
        let VB, yB = !1;
        for (VB in this._vertexBuffers) {
          const BB = this.getVertexBuffer(VB),
            dB = BB.getData();
          if (!dB) continue;
          const pB = BB.isUpdatable(),
            JB = BB.getSize(),
            {
              type: YB,
              byteOffset: gB,
              byteStride: oB,
              normalized: kB
            } = BB;
          yB = yB || pB;
          let LB = this._totalVertices;
          if (BB.getIsInstanced()) {
            let BB;
            BB = dB instanceof Array ? 4 * dB.length : dB.byteLength, LB = BB / oB
          }
          const OB = (0, HB.s)(dB, JB, YB, gB, oB, LB, !0),
            DB = new lB.m(this._engine, OB, VB, {
              updatable: pB,
              useBytes: !1,
              stride: JB,
              size: JB,
              offset: 0,
              type: YB,
              normalized: kB,
              takeBufferOwnership: !0,
              instanced: BB.getIsInstanced()
            });
          TB.setVerticesBuffer(DB, LB)
        }
        for (VB in TB._updatable = yB, TB.delayLoadState = this.delayLoadState, TB.delayLoadingFile = this.delayLoadingFile, TB._delayLoadingFunction = this._delayLoadingFunction, this._delayInfo) TB._delayInfo = TB._delayInfo || [], TB._delayInfo.push(VB);
        return TB._boundingInfo = new gB.b(this._extend.minimum, this._extend.maximum), TB
      }
      serialize() {
        const BB = {};
        return BB.id = this.id, BB.uniqueId = this.uniqueId, BB.updatable = this._updatable, LB.c && LB.c.HasTags(this) && (BB.tags = LB.c.GetTags(this)), BB
      }
      _toNumberArray(BB) {
        return Array.isArray(BB) ? BB : Array.prototype.slice.call(BB)
      }
      clearCachedData() {
        this._totalIndices = this._indices.length, this._indices = [], this._resetPointsArrayCache();
        for (const BB in this._vertexBuffers) Object.prototype.hasOwnProperty.call(this._vertexBuffers, BB) && (this._vertexBuffers[BB]._buffer._data = null)
      }
      serializeVerticeData() {
        const BB = this.serialize();
        return this.isVerticesDataPresent(lB.m.PositionKind) && (BB.positions = this._toNumberArray(this.getVerticesData(lB.m.PositionKind)), this.isVertexBufferUpdatable(lB.m.PositionKind) && (BB.positionsUpdatable = !0)), this.isVerticesDataPresent(lB.m.NormalKind) && (BB.normals = this._toNumberArray(this.getVerticesData(lB.m.NormalKind)), this.isVertexBufferUpdatable(lB.m.NormalKind) && (BB.normalsUpdatable = !0)), this.isVerticesDataPresent(lB.m.TangentKind) && (BB.tangents = this._toNumberArray(this.getVerticesData(lB.m.TangentKind)), this.isVertexBufferUpdatable(lB.m.TangentKind) && (BB.tangentsUpdatable = !0)), this.isVerticesDataPresent(lB.m.UVKind) && (BB.uvs = this._toNumberArray(this.getVerticesData(lB.m.UVKind)), this.isVertexBufferUpdatable(lB.m.UVKind) && (BB.uvsUpdatable = !0)), this.isVerticesDataPresent(lB.m.UV2Kind) && (BB.uvs2 = this._toNumberArray(this.getVerticesData(lB.m.UV2Kind)), this.isVertexBufferUpdatable(lB.m.UV2Kind) && (BB.uvs2Updatable = !0)), this.isVerticesDataPresent(lB.m.UV3Kind) && (BB.uvs3 = this._toNumberArray(this.getVerticesData(lB.m.UV3Kind)), this.isVertexBufferUpdatable(lB.m.UV3Kind) && (BB.uvs3Updatable = !0)), this.isVerticesDataPresent(lB.m.UV4Kind) && (BB.uvs4 = this._toNumberArray(this.getVerticesData(lB.m.UV4Kind)), this.isVertexBufferUpdatable(lB.m.UV4Kind) && (BB.uvs4Updatable = !0)), this.isVerticesDataPresent(lB.m.UV5Kind) && (BB.uvs5 = this._toNumberArray(this.getVerticesData(lB.m.UV5Kind)), this.isVertexBufferUpdatable(lB.m.UV5Kind) && (BB.uvs5Updatable = !0)), this.isVerticesDataPresent(lB.m.UV6Kind) && (BB.uvs6 = this._toNumberArray(this.getVerticesData(lB.m.UV6Kind)), this.isVertexBufferUpdatable(lB.m.UV6Kind) && (BB.uvs6Updatable = !0)), this.isVerticesDataPresent(lB.m.ColorKind) && (BB.colors = this._toNumberArray(this.getVerticesData(lB.m.ColorKind)), this.isVertexBufferUpdatable(lB.m.ColorKind) && (BB.colorsUpdatable = !0)), this.isVerticesDataPresent(lB.m.MatricesIndicesKind) && (BB.matricesIndices = this._toNumberArray(this.getVerticesData(lB.m.MatricesIndicesKind)), BB.matricesIndicesExpanded = !0, this.isVertexBufferUpdatable(lB.m.MatricesIndicesKind) && (BB.matricesIndicesUpdatable = !0)), this.isVerticesDataPresent(lB.m.MatricesWeightsKind) && (BB.matricesWeights = this._toNumberArray(this.getVerticesData(lB.m.MatricesWeightsKind)), this.isVertexBufferUpdatable(lB.m.MatricesWeightsKind) && (BB.matricesWeightsUpdatable = !0)), BB.indices = this._toNumberArray(this.elB()), BB
      }
      static ExtractFromMesh(BB, TB) {
        const dB = BB._geometry;
        return dB ? dB.copy(TB) : null
      }
      static RandomId() {
        return oB.h.RandomId()
      }
      static _GetGeometryByLoadedUniqueId(BB, TB) {
        for (let dB = 0; dB < TB.geometries.length; dB++)
          if (TB.geometries[dB]._loadedUniqueId === BB) return TB.geometries[dB];
        return null
      }
      static _ImportGeometry(BB, TB) {
        const dB = TB.jU(),
          VB = BB.geometryUniqueId,
          pB = BB.geometryId;
        if (VB || pB) {
          const BB = VB ? this._GetGeometryByLoadedUniqueId(VB, dB) : dB.getGeometryById(pB);
          BB && BB.applyToMesh(TB)
        } else if (BB instanceof ArrayBuffer) {
          const dB = TB._binaryInfo;
          if (dB.positionsAttrDesc && dB.positionsAttrDesc.count > 0) {
            const VB = new Float32Array(BB, dB.positionsAttrDesc.offset, dB.positionsAttrDesc.count);
            TB.setVerticesData(lB.m.PositionKind, VB, !1)
          }
          if (dB.normalsAttrDesc && dB.normalsAttrDesc.count > 0) {
            const VB = new Float32Array(BB, dB.normalsAttrDesc.offset, dB.normalsAttrDesc.count);
            TB.setVerticesData(lB.m.NormalKind, VB, !1)
          }
          if (dB.tangetsAttrDesc && dB.tangetsAttrDesc.count > 0) {
            const VB = new Float32Array(BB, dB.tangetsAttrDesc.offset, dB.tangetsAttrDesc.count);
            TB.setVerticesData(lB.m.TangentKind, VB, !1)
          }
          if (dB.uvsAttrDesc && dB.uvsAttrDesc.count > 0) {
            const VB = new Float32Array(BB, dB.uvsAttrDesc.offset, dB.uvsAttrDesc.count);
            if (uB.c)
              for (let BB = 1; BB < VB.length; BB += 2) VB[BB] = 1 - VB[BB];
            TB.setVerticesData(lB.m.UVKind, VB, !1)
          }
          if (dB.uvs2AttrDesc && dB.uvs2AttrDesc.count > 0) {
            const VB = new Float32Array(BB, dB.uvs2AttrDesc.offset, dB.uvs2AttrDesc.count);
            if (uB.c)
              for (let BB = 1; BB < VB.length; BB += 2) VB[BB] = 1 - VB[BB];
            TB.setVerticesData(lB.m.UV2Kind, VB, !1)
          }
          if (dB.uvs3AttrDesc && dB.uvs3AttrDesc.count > 0) {
            const VB = new Float32Array(BB, dB.uvs3AttrDesc.offset, dB.uvs3AttrDesc.count);
            if (uB.c)
              for (let BB = 1; BB < VB.length; BB += 2) VB[BB] = 1 - VB[BB];
            TB.setVerticesData(lB.m.UV3Kind, VB, !1)
          }
          if (dB.uvs4AttrDesc && dB.uvs4AttrDesc.count > 0) {
            const VB = new Float32Array(BB, dB.uvs4AttrDesc.offset, dB.uvs4AttrDesc.count);
            if (uB.c)
              for (let BB = 1; BB < VB.length; BB += 2) VB[BB] = 1 - VB[BB];
            TB.setVerticesData(lB.m.UV4Kind, VB, !1)
          }
          if (dB.uvs5AttrDesc && dB.uvs5AttrDesc.count > 0) {
            const VB = new Float32Array(BB, dB.uvs5AttrDesc.offset, dB.uvs5AttrDesc.count);
            if (uB.c)
              for (let BB = 1; BB < VB.length; BB += 2) VB[BB] = 1 - VB[BB];
            TB.setVerticesData(lB.m.UV5Kind, VB, !1)
          }
          if (dB.uvs6AttrDesc && dB.uvs6AttrDesc.count > 0) {
            const VB = new Float32Array(BB, dB.uvs6AttrDesc.offset, dB.uvs6AttrDesc.count);
            if (uB.c)
              for (let BB = 1; BB < VB.length; BB += 2) VB[BB] = 1 - VB[BB];
            TB.setVerticesData(lB.m.UV6Kind, VB, !1)
          }
          if (dB.colorsAttrDesc && dB.colorsAttrDesc.count > 0) {
            const VB = new Float32Array(BB, dB.colorsAttrDesc.offset, dB.colorsAttrDesc.count);
            TB.setVerticesData(lB.m.ColorKind, VB, !1, dB.colorsAttrDesc.stride)
          }
          if (dB.matricesIndicesAttrDesc && dB.matricesIndicesAttrDesc.count > 0) {
            const VB = new Int32Array(BB, dB.matricesIndicesAttrDesc.offset, dB.matricesIndicesAttrDesc.count),
              yB = [];
            for (let BB = 0; BB < VB.length; BB++) {
              const TB = VB[BB];
              yB.push(255 & TB), yB.push((65280 & TB) >> 8), yB.push((16711680 & TB) >> 16), yB.push(TB >> 24 & 255)
            }
            TB.setVerticesData(lB.m.MatricesIndicesKind, yB, !1)
          }
          if (dB.matricesIndicesExtraAttrDesc && dB.matricesIndicesExtraAttrDesc.count > 0) {
            const VB = new Int32Array(BB, dB.matricesIndicesExtraAttrDesc.offset, dB.matricesIndicesExtraAttrDesc.count),
              yB = [];
            for (let BB = 0; BB < VB.length; BB++) {
              const TB = VB[BB];
              yB.push(255 & TB), yB.push((65280 & TB) >> 8), yB.push((16711680 & TB) >> 16), yB.push(TB >> 24 & 255)
            }
            TB.setVerticesData(lB.m.MatricesIndicesExtraKind, yB, !1)
          }
          if (dB.matricesWeightsAttrDesc && dB.matricesWeightsAttrDesc.count > 0) {
            const VB = new Float32Array(BB, dB.matricesWeightsAttrDesc.offset, dB.matricesWeightsAttrDesc.count);
            TB.setVerticesData(lB.m.MatricesWeightsKind, VB, !1)
          }
          if (dB.indicesAttrDesc && dB.indicesAttrDesc.count > 0) {
            const VB = new Int32Array(BB, dB.indicesAttrDesc.offset, dB.indicesAttrDesc.count);
            TB.setIndices(VB, null)
          }
          if (dB.subMeshesAttrDesc && dB.subMeshesAttrDesc.count > 0) {
            const VB = new Int32Array(BB, dB.subMeshesAttrDesc.offset, 5 * dB.subMeshesAttrDesc.count);
            TB.oN = [];
            for (let BB = 0; BB < dB.subMeshesAttrDesc.count; BB++) {
              const dB = VB[5 * BB + 0],
                yB = VB[5 * BB + 1],
                pB = VB[5 * BB + 2],
                lB = VB[5 * BB + 3],
                YB = VB[5 * BB + 4];
              JB.c.AddToMesh(dB, yB, pB, lB, YB, TB)
            }
          }
        } else if (BB.positions && BB.normals && BB.indices) {
          if (TB.setVerticesData(lB.m.PositionKind, BB.positions, BB.positions._updatable || BB.positionsUpdatable), TB.setVerticesData(lB.m.NormalKind, BB.normals, BB.normals._updatable || BB.normalsUpdatable), BB.tangents && TB.setVerticesData(lB.m.TangentKind, BB.tangents, BB.tangents._updatable || BB.tangentsUpdatable), BB.uvs && TB.setVerticesData(lB.m.UVKind, BB.uvs, BB.uvs._updatable || BB.uvsUpdatable), BB.uvs2 && TB.setVerticesData(lB.m.UV2Kind, BB.uvs2, BB.uvs2._updatable || BB.uvs2Updatable), BB.uvs3 && TB.setVerticesData(lB.m.UV3Kind, BB.uvs3, BB.uvs3._updatable || BB.uvs3Updatable), BB.uvs4 && TB.setVerticesData(lB.m.UV4Kind, BB.uvs4, BB.uvs4._updatable || BB.uvs4Updatable), BB.uvs5 && TB.setVerticesData(lB.m.UV5Kind, BB.uvs5, BB.uvs5._updatable || BB.uvs5Updatable), BB.uvs6 && TB.setVerticesData(lB.m.UV6Kind, BB.uvs6, BB.uvs6._updatable || BB.uvs6Updatable), BB.colors && TB.setVerticesData(lB.m.ColorKind, yB.d.CheckColors4(BB.colors, BB.positions.length / 3), BB.colors._updatable), BB.matricesIndices)
            if (BB.matricesIndices._isExpanded || BB.matricesIndicesExpanded) delete BB.matricesIndices._isExpanded, delete BB.matricesIndicesExpanded, TB.setVerticesData(lB.m.MatricesIndicesKind, BB.matricesIndices, BB.matricesIndices._updatable || BB.matricesIndicesUpdatable);
            else {
              const dB = [];
              for (let TB = 0; TB < BB.matricesIndices.length; TB++) {
                const VB = BB.matricesIndices[TB];
                dB.push(255 & VB), dB.push((65280 & VB) >> 8), dB.push((16711680 & VB) >> 16), dB.push(VB >> 24 & 255)
              }
              TB.setVerticesData(lB.m.MatricesIndicesKind, dB, BB.matricesIndices._updatable || BB.matricesIndicesUpdatable)
            } if (BB.matricesIndicesExtra)
            if (BB.matricesIndicesExtraExpanded || BB.matricesIndicesExtra._isExpanded) delete BB.matricesIndices._isExpanded, delete BB.matricesIndicesExtraExpanded, TB.setVerticesData(lB.m.MatricesIndicesExtraKind, BB.matricesIndicesExtra, BB.matricesIndicesExtra._updatable || BB.matricesIndicesExtraUpdatable);
            else {
              const dB = [];
              for (let TB = 0; TB < BB.matricesIndicesExtra.length; TB++) {
                const VB = BB.matricesIndicesExtra[TB];
                dB.push(255 & VB), dB.push((65280 & VB) >> 8), dB.push((16711680 & VB) >> 16), dB.push(VB >> 24 & 255)
              }
              TB.setVerticesData(lB.m.MatricesIndicesExtraKind, dB, BB.matricesIndicesExtra._updatable || BB.matricesIndicesExtraUpdatable)
            } BB.matricesWeights && (EB._CleanMatricesWeights(BB, TB), TB.setVerticesData(lB.m.MatricesWeightsKind, BB.matricesWeights, BB.matricesWeights._updatable)), BB.matricesWeightsExtra && TB.setVerticesData(lB.m.MatricesWeightsExtraKind, BB.matricesWeightsExtra, BB.matricesWeights._updatable), TB.setIndices(BB.indices, null)
        }
        if (BB.oN) {
          TB.oN = [];
          for (let dB = 0; dB < BB.oN.length; dB++) {
            const VB = BB.oN[dB];
            JB.c.AddToMesh(VB.materialIndex, VB.verticesStart, VB.verticesCount, VB.indexStart, VB.indexCount, TB)
          }
        }
        TB._shouldGenerateFlatShading && (TB.convertToFlatShadedMesh(), TB._shouldGenerateFlatShading = !1), TB.computeWorldMatrix(!0), dB.onMeshImportedObservable.notifyObservers(TB)
      }
      static _CleanMatricesWeights(BB, TB) {
        const dB = .001;
        if (!YB.b.CleanBoneMatrixWeights) return;
        let VB;
        if (!(BB.skeletonId > -1)) return;
        {
          const dB = TB.jU().getLastSkeletonById(BB.skeletonId);
          if (!dB) return;
          VB = dB.bones.length
        }
        const yB = TB.getVerticesData(lB.m.MatricesIndicesKind),
          pB = TB.getVerticesData(lB.m.MatricesIndicesExtraKind),
          JB = BB.matricesWeights,
          gB = BB.matricesWeightsExtra,
          oB = BB.numBoneInfluencer,
          kB = JB.length;
        for (let lB = 0; lB < kB; lB += 4) {
          let BB = 0,
            TB = -1;
          for (let VB = 0; VB < 4; VB++) {
            const yB = JB[lB + VB];
            BB += yB, yB < dB && TB < 0 && (TB = VB)
          }
          if (gB)
            for (let VB = 0; VB < 4; VB++) {
              const yB = gB[lB + VB];
              BB += yB, yB < dB && TB < 0 && (TB = VB + 4)
            }
          if ((TB < 0 || TB > oB - 1) && (TB = oB - 1), BB > dB) {
            const TB = 1 / BB;
            for (let BB = 0; BB < 4; BB++) JB[lB + BB] *= TB;
            if (gB)
              for (let BB = 0; BB < 4; BB++) gB[lB + BB] *= TB
          } else TB >= 4 ? (gB[lB + TB - 4] = 1 - BB, pB[lB + TB - 4] = VB) : (JB[lB + TB] = 1 - BB, yB[lB + TB] = VB)
        }
        TB.setVerticesData(lB.m.MatricesIndicesKind, yB), BB.matricesWeightsExtra && TB.setVerticesData(lB.m.MatricesIndicesExtraKind, pB)
      }
      static Parse(BB, TB, dB) {
        const yB = new EB(BB.id, TB, void 0, BB.updatable);
        return yB._loadedUniqueId = BB.uniqueId, LB.c && LB.c.AddTagsTo(yB, BB.tags), BB.delayLoadingFile ? (yB.delayLoadState = 4, yB.delayLoadingFile = dB + BB.delayLoadingFile, yB._boundingInfo = new gB.b(VB.p.FromArray(BB.boundingBoxMinimum), VB.p.FromArray(BB.boundingBoxMaximum)), yB._delayInfo = [], BB.hasUVs && yB._delayInfo.push(lB.m.UVKind), BB.hasUVs2 && yB._delayInfo.push(lB.m.UV2Kind), BB.hasUVs3 && yB._delayInfo.push(lB.m.UV3Kind), BB.hasUVs4 && yB._delayInfo.push(lB.m.UV4Kind), BB.hasUVs5 && yB._delayInfo.push(lB.m.UV5Kind), BB.hasUVs6 && yB._delayInfo.push(lB.m.UV6Kind), BB.hasColors && yB._delayInfo.push(lB.m.ColorKind), BB.hasMatricesIndices && yB._delayInfo.push(lB.m.MatricesIndicesKind), BB.hasMatricesWeights && yB._delayInfo.push(lB.m.MatricesWeightsKind), yB._delayLoadingFunction = pB.d.ImportVertexData) : pB.d.ImportVertexData(BB, yB), TB.pushGeometry(yB, !0), yB
      }
    }
  },
  39214: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => kB,
      f: () => DB
    });
    var VB = dB(36126),
      yB = dB(37651),
      pB = dB(39180),
      lB = dB(39143),
      JB = dB(37646),
      YB = dB(39187),
      gB = dB(38897),
      oB = dB(36166);
    class kB extends pB.e {
      constructor(BB, TB) {
        super(BB, TB.jU()), this._indexInSourceMeshInstanceArray = -1, this._distanceToCamera = 0, TB.E1(this), this._sourceMesh = TB, this._unIndexed = TB._unIndexed, this.position.bdB(TB.position), this.rotation.bdB(TB.rotation), this.al.bdB(TB.al), TB.rotationQuaternion && (this.rotationQuaternion = TB.rotationQuaternion.clone()), this.animations = TB.animations.slice();
        for (const dB of TB.getAnimationRanges()) null != dB && this.createAnimationRange(dB.name, dB.from, dB.to);
        if (this.infiniteDistance = TB.infiniteDistance, this.setPivotMatrix(TB.getPivotMatrix()), TB.skeleton || TB.morphTargetManager || !TB.hasBoundingInfo) this.refreshBoundingInfo(!0, !0);
        else {
          const BB = TB.IK();
          this.buildBoundingInfo(BB.minimum, BB.maximum)
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
      set receiveShadows(BB) {
        this._sourceMesh?.receiveShadows !== BB && yB.b.Warn("Setting receiveShadows on an instanced mesh has no effect")
      }
      get material() {
        return this._sourceMesh.material
      }
      set material(BB) {
        this._sourceMesh?.material !== BB && yB.b.Warn("Setting material on an instanced mesh has no effect")
      }
      get visibility() {
        return this._sourceMesh.visibility
      }
      set visibility(BB) {
        this._sourceMesh?.visibility !== BB && yB.b.Warn("Setting visibility on an instanced mesh has no effect")
      }
      get skeleton() {
        return this._sourceMesh.skeleton
      }
      set skeleton(BB) {
        this._sourceMesh?.skeleton !== BB && yB.b.Warn("Setting skeleton on an instanced mesh has no effect")
      }
      get renderingGroupId() {
        return this._sourceMesh.renderingGroupId
      }
      set renderingGroupId(BB) {
        this._sourceMesh && BB !== this._sourceMesh.renderingGroupId && yB.b.Warn("Note - setting renderingGroupId of an instanced mesh has no effect on the scene")
      }
      get meshBlendingTag() {
        return this._sourceMesh.meshBlendingTag
      }
      set meshBlendingTag(BB) {
        this._sourceMesh && BB !== this._sourceMesh.meshBlendingTag && yB.b.Warn("Setting meshBlendingTag on an instanced mesh has no effect")
      }
      getTotalVertices() {
        return this._sourceMesh ? this._sourceMesh.getTotalVertices() : 0
      }
      getTotalIndices() {
        return this._sourceMesh.getTotalIndices()
      }
      get myB() {
        return this._sourceMesh
      }
      get geometry() {
        return this._sourceMesh._geometry
      }
      createInstance(BB) {
        return this._sourceMesh.createInstance(BB)
      }
      isReady() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return this._sourceMesh.isReady(BB, !0)
      }
      getVerticesData(BB, TB, dB) {
        return this._sourceMesh.getVerticesData(BB, TB, dB)
      }
      copyVerticesData(BB, TB) {
        this._sourceMesh.copyVerticesData(BB, TB)
      }
      getVertexBuffer(BB, TB) {
        return this._sourceMesh.getVertexBuffer(BB, TB)
      }
      setVerticesData(BB, TB, dB, VB) {
        return this.myB && this.myB.setVerticesData(BB, TB, dB, VB), this.myB
      }
      updateVerticesData(BB, TB, dB, VB) {
        return this.myB && this.myB.updateVerticesData(BB, TB, dB, VB), this.myB
      }
      setIndices(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return this.myB && this.myB.setIndices(BB, TB), this.myB
      }
      isVerticesDataPresent(BB) {
        return this._sourceMesh.isVerticesDataPresent(BB)
      }
      elB() {
        return this._sourceMesh.elB()
      }
      get _positions() {
        return this._sourceMesh._positions
      }
      refreshBoundingInfo() {
        let BB, TB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          dB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.hasBoundingInfo && this.IK().isLocked) return this;
        BB = "object" === typeof TB ? TB : {
          applySkeleton: TB,
          applyMorph: dB
        };
        const VB = this._sourceMesh.geometry ? this._sourceMesh.geometry.boundingBias : null;
        return this._refreshBoundingInfo(this._sourceMesh._getData(BB, null, gB.m.PositionKind), VB), this
      }
      _preActivate() {
        return this._currentLOD && this._currentLOD._preActivate(), this
      }
      _activate(BB, TB) {
        if (super._activate(BB, TB), this._sourceMesh.oN || yB.b.Warn("Instances should only be created for meshes with geometry."), this._currentLOD) {
          if (this._currentLOD._getWorldMatrixDeterminant() >= 0 !== this._getWorldMatrixDeterminant() >= 0) return this._internalAbstractMeshDataInfo._actAsRegularMesh = !0, !0;
          if (this._internalAbstractMeshDataInfo._actAsRegularMesh = !1, this._currentLOD._registerInstanceForRenderId(this, BB), TB) {
            if (!this._currentLOD._internalAbstractMeshDataInfo._isActiveIntermediate) return this._currentLOD._internalAbstractMeshDataInfo._onlyForInstancesIntermediate = !0, !0
          } else if (!this._currentLOD._internalAbstractMeshDataInfo._isActive) return this._currentLOD._internalAbstractMeshDataInfo._onlyForInstances = !0, !0
        }
        return !1
      }
      _postActivate() {
        this._sourceMesh.edgesShareWithInstances && this._sourceMesh._edgesRenderer && this._sourceMesh._edgesRenderer.isEnabled && this._sourceMesh._renderingGroup ? (this._sourceMesh._renderingGroup._edgesRenderers.pushNoDuplicate(this._sourceMesh._edgesRenderer), this._sourceMesh._edgesRenderer.customInstances.push(this.getWorldMatrix())) : this._edgesRenderer && this._edgesRenderer.isEnabled && this._sourceMesh._renderingGroup && this._sourceMesh._renderingGroup._edgesRenderers.push(this._edgesRenderer)
      }
      getWorldMatrix() {
        if (this._currentLOD && this._currentLOD !== this._sourceMesh && this._currentLOD.billboardMode !== YB.f.BILLBOARDMODE_NONE && this._currentLOD._masterMesh !== this) {
          this._billboardWorldMatrix || (this._billboardWorldMatrix = new VB.b);
          const BB = this._currentLOD._masterMesh;
          return this._currentLOD._masterMesh = this, VB.j.RD[7].bdB(this._currentLOD.position), this._currentLOD.position.set(0, 0, 0), this._billboardWorldMatrix.bdB(this._currentLOD.computeWorldMatrix(!0)), this._currentLOD.position.bdB(VB.j.RD[7]), this._currentLOD._masterMesh = BB, this._billboardWorldMatrix
        }
        return super.getWorldMatrix()
      }
      get JF() {
        return !0
      }
      getLOD(BB) {
        if (!BB) return this;
        const TB = this.myB.getLODLevels();
        if (TB && 0 !== TB.length) {
          const TB = this.IK();
          this._currentLOD = this.myB.getLOD(BB, TB.bVB)
        } else this._currentLOD = this.myB;
        return this._currentLOD
      }
      _preActivateForIntermediateRendering(BB) {
        return this.myB._preActivateForIntermediateRendering(BB)
      }
      _syncSubMeshes() {
        if (this.releaseSubMeshes(), this._sourceMesh.oN)
          for (let BB = 0; BB < this._sourceMesh.oN.length; BB++) this._sourceMesh.oN[BB].clone(this, this._sourceMesh);
        return this
      }
      _generatePointsArray() {
        return this._sourceMesh._generatePointsArray()
      }
      _updateBoundingInfo() {
        return this.hasBoundingInfo ? this.IK().update(this.worldMatrixFromCache) : this.buildBoundingInfo(this.absolutePosition, this.absolutePosition, this.worldMatrixFromCache), this._updateSubMeshesBoundingInfo(this.worldMatrixFromCache), this
      }
      clone(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          dB = arguments.length > 2 ? arguments[2] : void 0;
        const VB = ((arguments.length > 3 ? arguments[3] : void 0) || this._sourceMesh).createInstance(BB);
        if (JB.b.DeepCopy(this, VB, ["name", "oN", "uniqueId", "parent", "lightSources", "receiveShadows", "material", "visibility", "skeleton", "myB", "JF", "facetNb", "isFacetDataEnabled", "isBlocked", "useBones", "vyB", "collider", "edgesRenderer", "forward", "up", "right", "absolutePosition", "absoluteScaling", "absoluteRotationQuaternion", "pJB", "nonUniformScaling", "behaviors", "worldMatrixFromCache", "hasThinInstances", "hasBoundingInfo", "geometry"], []), TB && (VB.parent = TB), !dB)
          for (let yB = 0; yB < this.jU().meshes.length; yB++) {
            const BB = this.jU().meshes[yB];
            BB.parent === this && BB.clone(BB.name, VB)
          }
        return VB.computeWorldMatrix(!0), this.onClonedObservable.notifyObservers(VB), VB
      }
      dispose(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._sourceMesh.T6(this), super.dispose(BB, TB)
      }
      _serializeAsParent(BB) {
        super._serializeAsParent(BB), BB.parentId = this._sourceMesh.uniqueId, BB.parentInstanceIndex = this._indexInSourceMeshInstanceArray
      }
      instantiateHierarchy() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          TB = arguments.length > 1 ? arguments[1] : void 0,
          dB = arguments.length > 2 ? arguments[2] : void 0;
        const VB = this.clone("Clone of " + (this.name || this.id), BB || this.parent, !0, TB && TB.newSourcedMesh);
        VB && dB && dB(this, VB);
        for (const yB of this.getChildTransformNodes(!0)) yB.instantiateHierarchy(VB, TB, dB);
        return VB
      }
    }
    let LB = !1;

    function OB(BB, TB, dB, VB, yB) {
      for (let pB = 0; pB < TB.length; pB++) {
        const lB = BB[TB[pB]] ?? 0,
          JB = yB + dB[pB];
        lB.toArray ? lB.toArray(VB, JB) : lB.copyToArray ? lB.copyToArray(VB, JB) : VB[JB] = lB
      }
    }

    function DB() {
      LB || (LB = !0, lB.e._instancedMeshFactory = (BB, TB) => {
        const dB = new kB(BB, TB);
        if (TB.sK) {
          dB.sK = {};
          for (const BB in TB.sK) dB.sK[BB] = TB.sK[BB]
        }
        return dB
      }, lB.e.prototype.fK = function(BB, TB) {
        if (!this.sK) {
          this.sK = {};
          for (const BB of this.instances) BB.sK = {}
        }
        this._userInstancedBuffersStorage || (this._userInstancedBuffersStorage = {
          data: {},
          vertexBuffers: {},
          strides: {},
          sizes: {},
          vertexArrayObjects: this.PD().getCaps().vertexArrayObject ? {} : void 0
        }), this.sK[BB] = null, this._userInstancedBuffersStorage.strides[BB] = TB;
        const dB = this._userInstancedBuffersStorage;
        dB.interleavedKinds = [], dB.interleavedOffsets = [], dB.interleavedRowStride = 0;
        for (const VB in dB.strides) dB.interleavedKinds.push(VB), dB.interleavedOffsets.push(dB.interleavedRowStride), dB.interleavedRowStride += dB.strides[VB];
        dB.interleavedData = new Float32Array(32 * dB.interleavedRowStride);
        for (const VB in dB.interleavedBuffers) dB.interleavedBuffers[VB].buffer.dispose();
        dB.interleavedBuffers = {}, dB.vertexBuffers[BB] = null;
        for (const VB of this.instances) VB.sK[BB] = null;
        this._invalidateInstanceVertexArrayObject(), this._markSubMeshesAsAttributesDirty()
      }, lB.e.prototype._processInstancedBuffers = function(BB, TB) {
        const dB = this._userInstancedBuffersStorage,
          VB = dB.interleavedRowStride;
        if (!VB) return;
        const yB = BB ? BB.length : 0,
          pB = (yB + 1) * VB;
        let lB = dB.interleavedData;
        if (lB.length < pB) {
          let BB = lB.length;
          for (; BB < pB;) BB *= 2;
          lB = dB.interleavedData = new Float32Array(BB)
        }
        const JB = dB.interleavedKinds,
          YB = dB.interleavedOffsets;
        let oB = 0;
        TB && (OB(this.sK, JB, YB, lB, oB), oB += VB);
        for (let gB = 0; gB < yB; gB++) OB(BB[gB].sK, JB, YB, lB, oB), oB += VB;
        let kB = "shared",
          LB = dB.vertexBuffers;
        this._instanceDataStorage.useMonoDataStorageRenderPass || (kB = this._instanceDataStorage.engine.currentRenderPassId, dB.renderPasses || (dB.renderPasses = {}), dB.renderPasses[kB] || (dB.renderPasses[kB] = {}), LB = dB.renderPasses[kB]);
        const DB = dB.interleavedBuffers[kB];
        let uB = !DB || DB.data !== lB;
        for (let gB = 0; !uB && gB < JB.length; gB++) uB = !LB[JB[gB]];
        if (!uB) return void DB.buffer.updateDirectly(lB, 0);
        DB?.buffer.dispose();
        const HB = new gB.d(this.PD(), lB, !0, VB, !1, !0);
        for (let gB = 0; gB < JB.length; gB++) {
          const BB = JB[gB],
            TB = HB.createVertexBuffer(BB, YB[gB], dB.strides[BB]);
          TB.hashCode += TB.byteOffset * 2 ** 24, LB[BB] = TB
        }
        dB.interleavedBuffers[kB] = {
          buffer: HB,
          data: lB
        }, this._invalidateInstanceVertexArrayObject()
      }, lB.e.prototype._invalidateInstanceVertexArrayObject = function() {
        if (this._userInstancedBuffersStorage && void 0 !== this._userInstancedBuffersStorage.vertexArrayObjects) {
          for (const BB in this._userInstancedBuffersStorage.vertexArrayObjects) this.PD().releaseVertexArrayObject(this._userInstancedBuffersStorage.vertexArrayObjects[BB]);
          this._userInstancedBuffersStorage.vertexArrayObjects = {}
        }
      }, lB.e.prototype._disposeInstanceSpecificData = function() {
        for (const TB in this._instanceDataStorage.renderPasses) this._instanceDataStorage.renderPasses[TB].instancesBuffer?.dispose();
        for (this._instanceDataStorage.renderPasses = {}, this._instanceDataStorage.dataStorageRenderPass?.instancesBuffer?.dispose(); this.instances.length;) this.instances[0].dispose();
        for (const TB in this.sK) this._userInstancedBuffersStorage.vertexBuffers[TB] && this._userInstancedBuffersStorage.vertexBuffers[TB].dispose();
        const BB = this._userInstancedBuffersStorage?.interleavedBuffers;
        if (BB) {
          for (const TB in BB) BB[TB].buffer.dispose();
          this._userInstancedBuffersStorage.interleavedBuffers = {}
        }
        this._invalidateInstanceVertexArrayObject(), this.sK = {}
      }, (0, oB.g)("BABYLON.InstancedMesh", kB))
    }
  },
  39143: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => bB,
      f: () => eB,
      j: () => hB
    });
    var VB, yB, pB, lB, JB, YB, gB, oB, kB, LB, OB, DB, uB, HB, EB = dB(36150),
      vB = dB(38848),
      mB = dB(38790),
      iB = dB(37646),
      NB = dB(38775),
      tB = dB(39149),
      fB = dB(38974),
      sB = dB(36126),
      MB = dB(36183),
      zB = dB(38980),
      wB = dB(38897),
      UB = dB(39156),
      FB = dB(39158),
      KB = dB(39180),
      rB = dB(39045),
      IB = dB(39040),
      cB = dB(39117),
      SB = dB(39191),
      PB = dB(39167),
      QB = dB(38772),
      RB = dB(37651),
      aB = dB(36166),
      ZB = dB(38629),
      XB = dB(38927);
    class WB {
      constructor(BB, TB) {
        this.distanceOrScreenCoverage = BB, this.mesh = TB
      }
    }
    class hB {}
    class CB {
      constructor() {
        this.batchCache = new qB(this), this.batchCacheReplacementModeInFrozenMode = new qB(this), this.instancesBufferSize = 2048
      }
    }
    class GB {
      constructor() {
        this.renderPasses = {}
      }
    }
    class qB {
      constructor(BB) {
        this.parent = BB, this.mustReturn = !1, this.visibleInstances = new Array, this.renderSelf = [], this.hardwareInstancedRendering = []
      }
    }
    class xB {
      constructor() {
        this.instancesCount = 0, this.matrixBuffer = null, this.previousMatrixBuffer = null, this.matrixBufferSize = 512, this.matrixData = null, this.boundingVectors = [], this.worldMatrices = null
      }
    }
    class jB {
      constructor() {
        this._areNormalsFrozen = !1, this._source = null, this.meshMap = null, this._preActivateId = -1, this._LODLevels = new Array, this._useLODScreenCoverage = !1, this._effectiveMaterial = null, this._forcedInstanceCount = 0, this._overrideRenderingFillMode = null
      }
    }
    const AB = {
      source: null,
      parent: null,
      doNotCloneChildren: !1,
      clonePhysicsImpostor: !0,
      cloneThinInstances: !1
    };
    class bB extends KB.e {
      static _GetDefaultSideOrientation(BB) {
        return BB || bB.FRONTSIDE
      }
      get useLODScreenCoverage() {
        return this._internalMeshDataInfo._useLODScreenCoverage
      }
      set useLODScreenCoverage(BB) {
        this._internalMeshDataInfo._useLODScreenCoverage = BB, this._sortLODLevels()
      }
      get computeBonesUsingShaders() {
        return this._internalAbstractMeshDataInfo._computeBonesUsingShaders
      }
      set computeBonesUsingShaders(BB) {
        this._internalAbstractMeshDataInfo._computeBonesUsingShaders !== BB && (BB && this._internalMeshDataInfo._sourcePositions && (this.setVerticesData(wB.m.PositionKind, this._internalMeshDataInfo._sourcePositions, !0), this._internalMeshDataInfo._sourceNormals && this.setVerticesData(wB.m.NormalKind, this._internalMeshDataInfo._sourceNormals, !0), this._internalMeshDataInfo._sourcePositions = null, this._internalMeshDataInfo._sourceNormals = null), this._internalAbstractMeshDataInfo._computeBonesUsingShaders = BB, this._markSubMeshesAsAttributesDirty())
      }
      get onBeforeRenderObservable() {
        return this._internalMeshDataInfo._onBeforeRenderObservable || (this._internalMeshDataInfo._onBeforeRenderObservable = new EB.e), this._internalMeshDataInfo._onBeforeRenderObservable
      }
      get onBeforeBindObservable() {
        return this._internalMeshDataInfo._onBeforeBindObservable || (this._internalMeshDataInfo._onBeforeBindObservable = new EB.e), this._internalMeshDataInfo._onBeforeBindObservable
      }
      get onAfterRenderObservable() {
        return this._internalMeshDataInfo._onAfterRenderObservable || (this._internalMeshDataInfo._onAfterRenderObservable = new EB.e), this._internalMeshDataInfo._onAfterRenderObservable
      }
      get onBetweenPassObservable() {
        return this._internalMeshDataInfo._onBetweenPassObservable || (this._internalMeshDataInfo._onBetweenPassObservable = new EB.e), this._internalMeshDataInfo._onBetweenPassObservable
      }
      get onBeforeDrawObservable() {
        return this._internalMeshDataInfo._onBeforeDrawObservable || (this._internalMeshDataInfo._onBeforeDrawObservable = new EB.e), this._internalMeshDataInfo._onBeforeDrawObservable
      }
      set onBeforeDraw(BB) {
        this._onBeforeDrawObserver && this.onBeforeDrawObservable.remove(this._onBeforeDrawObserver), this._onBeforeDrawObserver = this.onBeforeDrawObservable.add(BB)
      }
      get vyB() {
        return this.instances.length > 0
      }
      get hasThinInstances() {
        return (this.forcedInstanceCount || this._thinInstanceDataStorage.instancesCount || 0) > 0
      }
      get forcedInstanceCount() {
        return this._internalMeshDataInfo._forcedInstanceCount
      }
      set forcedInstanceCount(BB) {
        this._internalMeshDataInfo._forcedInstanceCount = BB
      }
      get sideOrientation() {
        return this._internalMeshDataInfo._sideOrientation
      }
      set sideOrientation(BB) {
        this._internalMeshDataInfo._sideOrientation = BB, this._internalAbstractMeshDataInfo._sideOrientationHint = this._scene.useRightHandedSystem && 1 === BB || !this._scene.useRightHandedSystem && 0 === BB
      }
      get _effectiveSideOrientation() {
        return this._internalMeshDataInfo._effectiveSideOrientation
      }
      get overrideMaterialSideOrientation() {
        return this.sideOrientation
      }
      set overrideMaterialSideOrientation(BB) {
        this.sideOrientation = BB, this.material && (this.material.sideOrientation = null)
      }
      get overrideRenderingFillMode() {
        return this._internalMeshDataInfo._overrideRenderingFillMode
      }
      set overrideRenderingFillMode(BB) {
        this._internalMeshDataInfo._overrideRenderingFillMode = BB
      }
      get material() {
        return this._internalAbstractMeshDataInfo._material
      }
      set material(BB) {
        BB && (this.material && null === this.material.sideOrientation || this._internalAbstractMeshDataInfo._sideOrientationHint) && (BB.sideOrientation = null), this._setMaterial(BB)
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
      set isUnIndexed(BB) {
        this._unIndexed !== BB && (this._unIndexed = BB, this._markSubMeshesAsAttributesDirty())
      }
      get worldMatrixInstancedBuffer() {
        const BB = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._instanceDataStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId];
        return BB ? BB.instancesData : void 0
      }
      get previousWorldMatrixInstancedBuffer() {
        const BB = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._instanceDataStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId];
        return BB ? BB.instancesPreviousData : void 0
      }
      get manualUpdateOfWorldMatrixInstancedBuffer() {
        return this._instanceDataStorage.manualUpdate
      }
      set manualUpdateOfWorldMatrixInstancedBuffer(BB) {
        this._instanceDataStorage.manualUpdate = BB
      }
      get manualUpdateOfPreviousWorldMatrixInstancedBuffer() {
        return this._instanceDataStorage.previousManualUpdate
      }
      set manualUpdateOfPreviousWorldMatrixInstancedBuffer(BB) {
        this._instanceDataStorage.previousManualUpdate = BB
      }
      get forceWorldMatrixInstancedBufferUpdate() {
        return this._instanceDataStorage.forceMatrixUpdates
      }
      set forceWorldMatrixInstancedBufferUpdate(BB) {
        this._instanceDataStorage.forceMatrixUpdates = BB
      }
      _copySource(BB, TB) {
        let dB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          VB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const yB = this.jU();
        if (BB._geometry && BB._geometry.applyToMesh(this), iB.b.DeepCopy(BB, this, ["name", "material", "skeleton", "instances", "parent", "uniqueId", "source", "metadata", "morphTargetManager", "vyB", "worldMatrixInstancedBuffer", "previousWorldMatrixInstancedBuffer", "hasLODLevels", "geometry", "isBlocked", "areNormalsFrozen", "facetNb", "isFacetDataEnabled", "lightSources", "useBones", "JF", "collider", "edgesRenderer", "forward", "up", "right", "absolutePosition", "absoluteScaling", "absoluteRotationQuaternion", "pJB", "nonUniformScaling", "behaviors", "worldMatrixFromCache", "hasThinInstances", "cloneMeshMap", "hasBoundingInfo", "physicsBody", "physicsImpostor"], ["_poseMatrix"]), this._internalMeshDataInfo._source = BB, yB.useClonedMeshMap && (BB._internalMeshDataInfo.meshMap || (BB._internalMeshDataInfo.meshMap = {}), BB._internalMeshDataInfo.meshMap[this.uniqueId] = this), this._originalBuilderSideOrientation = BB._originalBuilderSideOrientation, this._creationDataStorage = BB._creationDataStorage, BB._ranges) {
          const TB = BB._ranges;
          for (const BB in TB) Object.prototype.hasOwnProperty.call(TB, BB) && TB[BB] && this.createAnimationRange(BB, TB[BB].from, TB[BB].to)
        }
        if (BB.metadata && BB.metadata.clone ? this.metadata = BB.metadata.clone() : this.metadata = BB.metadata, this._internalMetadata = BB._internalMetadata, this.meshBlendingTag = BB.meshBlendingTag, NB.c && NB.c.HasTags(BB) && NB.c.AddTagsTo(this, NB.c.GetTags(BB, !0)), this.hN(BB.isEnabled(!1)), this.parent = BB.parent, this.setPivotMatrix(BB.getPivotMatrix(), this._postMultiplyPivotMatrix), this.id = this.name + "." + BB.id, this.material = BB.material, !TB) {
          const yB = BB.getDescendants(!0);
          for (let BB = 0; BB < yB.length; BB++) {
            const pB = yB[BB];
            pB._isMesh ? (AB.parent = this, AB.doNotCloneChildren = TB, AB.clonePhysicsImpostor = dB, AB.cloneThinInstances = VB, pB.clone(this.name + "." + pB.name, AB)) : pB.clone && pB.clone(this.name + "." + pB.name, this)
          }
        }
        if (BB.morphTargetManager && (this.morphTargetManager = BB.morphTargetManager), (0, ZB.b)(yB.getPhysicsEngine)) {
          const TB = yB.getPhysicsEngine();
          if (dB && TB)
            if (1 === TB.getPluginVersion()) {
              const dB = TB.getImpostorForPhysicsObject(BB);
              dB && (this.physicsImpostor = dB.clone(this))
            } else 2 === TB.getPluginVersion() && BB.physicsBody && BB.physicsBody.clone(this)
        }
        for (let pB = 0; pB < yB.kN.length; pB++) {
          const TB = yB.kN[pB];
          TB.emitter === BB && TB.clone(TB.name, this)
        }
        if (this.skeleton = BB.skeleton, VB && (BB._thinInstanceDataStorage.matrixData ? (this.dBB("matrix", new Float32Array(BB._thinInstanceDataStorage.matrixData), 16, !BB._thinInstanceDataStorage.matrixBuffer.isUpdatable()), this._thinInstanceDataStorage.matrixBufferSize = BB._thinInstanceDataStorage.matrixBufferSize, this._thinInstanceDataStorage.instancesCount = BB._thinInstanceDataStorage.instancesCount) : this._thinInstanceDataStorage.matrixBufferSize = BB._thinInstanceDataStorage.matrixBufferSize, BB._userThinInstanceBuffersStorage)) {
          const TB = BB._userThinInstanceBuffersStorage;
          for (const BB in TB.data) this.dBB(BB, new Float32Array(TB.data[BB]), TB.strides[BB], !TB.vertexBuffers?.[BB]?.isUpdatable()), this._userThinInstanceBuffersStorage.sizes[BB] = TB.sizes[BB]
        }
        this.refreshBoundingInfo(!0, !0), this.computeWorldMatrix(!0)
      }
      constructor(BB) {
        let TB, dB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          VB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          yB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          pB = arguments.length > 4 ? arguments[4] : void 0,
          lB = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        super(BB, dB), this._internalMeshDataInfo = new jB, this.delayLoadState = 0, this.instances = [], this._creationDataStorage = null, this._geometry = null, this._thinInstanceDataStorage = new xB, this._shouldGenerateFlatShading = !1, this._originalBuilderSideOrientation = bB.DEFAULTSIDE, this.ignoreCameraMaxZ = !1, dB = this.jU(), this._instanceDataStorage = new GB, this._instanceDataStorage.engine = dB.PD(), this._instanceDataStorage.useMonoDataStorageRenderPass = !this._instanceDataStorage.engine.isWebGPU, this._instanceDataStorage.useMonoDataStorageRenderPass && (this._instanceDataStorage.dataStorageRenderPass = new CB), this._scene.useRightHandedSystem ? this.sideOrientation = 0 : this.sideOrientation = 1, this._onBeforeDraw = (BB, TB, dB) => {
          BB && dB && (this._uniformBuffer ? this.transferToEffect(TB) : dB.bindOnlyWorldMatrix(TB))
        };
        let JB = !1;
        if (VB && void 0 === VB._addToSceneRootNodes) {
          const BB = VB;
          TB = BB.parent ?? null, yB = BB.source ?? null, pB = BB.doNotCloneChildren ?? !1, lB = BB.clonePhysicsImpostor ?? !0, JB = BB.cloneThinInstances ?? !1
        } else TB = VB;
        yB && this._copySource(yB, pB, lB, JB), null !== TB && (this.parent = TB), this._instanceDataStorage.hardwareInstancedRendering = this.PD().getCaps().instancedArrays, this._internalMeshDataInfo._onMeshReadyObserverAdded = BB => {
          BB.unregisterOnNextCall = !0, this.isReady(!0) ? this.onMeshReadyObservable.notifyObservers(this) : this._internalMeshDataInfo._checkReadinessObserver || (this._internalMeshDataInfo._checkReadinessObserver = this._scene.onBeforeRenderObservable.add((() => {
            this.isReady(!0) && (this._scene.onBeforeRenderObservable.remove(this._internalMeshDataInfo._checkReadinessObserver), this._internalMeshDataInfo._checkReadinessObserver = null, this.onMeshReadyObservable.notifyObservers(this))
          })))
        }, this.onMeshReadyObservable = new EB.e(this._internalMeshDataInfo._onMeshReadyObserverAdded), yB && yB.onClonedObservable.notifyObservers(this)
      }
      instantiateHierarchy() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          TB = arguments.length > 1 ? arguments[1] : void 0,
          dB = arguments.length > 2 ? arguments[2] : void 0;
        const VB = 0 === this.getTotalVertices() || TB && TB.doNotInstantiate && (!0 === TB.doNotInstantiate || TB.doNotInstantiate(this)) ? this.clone("Clone of " + (this.name || this.id), BB || this.parent, !0) : this.createInstance("instance of " + (this.name || this.id));
        VB.parent = BB || this.parent, VB.position = this.position.clone(), VB.al = this.al.clone(), this.rotationQuaternion ? VB.rotationQuaternion = this.rotationQuaternion.clone() : VB.rotation = this.rotation.clone(), dB && dB(this, VB);
        for (const yB of this.getChildTransformNodes(!0)) "InstancedMesh" === yB.getClassName() && "Mesh" === VB.getClassName() && yB.myB === this ? yB.instantiateHierarchy(VB, {
          doNotInstantiate: TB && TB.doNotInstantiate || !1,
          newSourcedMesh: VB
        }, dB) : yB.instantiateHierarchy(VB, TB, dB);
        return VB
      }
      getClassName() {
        return "Mesh"
      }
      get _isMesh() {
        return !0
      }
      toString(BB) {
        let TB = super.toString(BB);
        if (TB += ", n vertices: " + this.getTotalVertices(), TB += ", parent: " + (this._waitingParentId ? this._waitingParentId : this.parent ? this.parent.name : "NONE"), this.animations)
          for (let dB = 0; dB < this.animations.length; dB++) TB += ", animation[0]: " + this.animations[dB].toString(BB);
        if (BB)
          if (this._geometry) {
            const BB = this.elB(),
              dB = this.getVerticesData(wB.m.PositionKind);
            dB && BB && (TB += ", flat shading: " + (dB.length / 3 === BB.length ? "YES" : "NO"))
          } else TB += ", flat shading: UNKNOWN";
        return TB
      }
      _unBindEffect() {
        super._unBindEffect();
        for (const BB of this.instances) BB._unBindEffect()
      }
      get hasLODLevels() {
        return this._internalMeshDataInfo._LODLevels.length > 0
      }
      getLODLevels() {
        return this._internalMeshDataInfo._LODLevels
      }
      _sortLODLevels() {
        const BB = this._internalMeshDataInfo._useLODScreenCoverage ? -1 : 1;
        this._internalMeshDataInfo._LODLevels.sort(((TB, dB) => TB.distanceOrScreenCoverage < dB.distanceOrScreenCoverage ? BB : TB.distanceOrScreenCoverage > dB.distanceOrScreenCoverage ? -BB : 0))
      }
      addLODLevel(BB, TB) {
        if (TB && TB._masterMesh) return RB.b.Warn("You cannot use a mesh as LOD level twice"), this;
        const dB = new WB(BB, TB);
        return this._internalMeshDataInfo._LODLevels.push(dB), TB && (TB._masterMesh = this), this._sortLODLevels(), this
      }
      getLODLevelAtDistance(BB) {
        const TB = this._internalMeshDataInfo;
        for (let dB = 0; dB < TB._LODLevels.length; dB++) {
          const VB = TB._LODLevels[dB];
          if (VB.distanceOrScreenCoverage === BB) return VB.mesh
        }
        return null
      }
      removeLODLevel(BB) {
        const TB = this._internalMeshDataInfo;
        for (let dB = 0; dB < TB._LODLevels.length; dB++) TB._LODLevels[dB].mesh === BB && (TB._LODLevels.splice(dB, 1), BB && (BB._masterMesh = null));
        return this._sortLODLevels(), this
      }
      getLOD(BB, TB) {
        const dB = this._internalMeshDataInfo;
        if (!dB._LODLevels || 0 === dB._LODLevels.length) return this;
        const VB = TB || this.IK().bVB,
          yB = BB.mode === fB.b.ORTHOGRAPHIC_CAMERA ? BB.minZ : VB.centerWorld.subtract(BB.globalPosition).length();
        let pB = yB,
          lB = 1;
        if (dB._useLODScreenCoverage) {
          const TB = BB.screenArea;
          let dB = VB.radiusWorld * BB.minZ / yB;
          dB = dB * dB * Math.PI, pB = dB / TB, lB = -1
        }
        if (lB * dB._LODLevels[dB._LODLevels.length - 1].distanceOrScreenCoverage > lB * pB) return this.onLODLevelSelection && this.onLODLevelSelection(pB, this, this), this;
        for (let JB = 0; JB < dB._LODLevels.length; JB++) {
          const BB = dB._LODLevels[JB];
          if (lB * BB.distanceOrScreenCoverage < lB * pB) {
            if (BB.mesh) {
              if (4 === BB.mesh.delayLoadState) return BB.mesh._checkDelayState(), this;
              if (2 === BB.mesh.delayLoadState) return this;
              BB.mesh._preActivate(), BB.mesh._updateSubMeshesBoundingInfo(this.worldMatrixFromCache)
            }
            return this.onLODLevelSelection && this.onLODLevelSelection(pB, this, BB.mesh), BB.mesh
          }
        }
        return this.onLODLevelSelection && this.onLODLevelSelection(pB, this, this), this
      }
      get geometry() {
        return this._geometry
      }
      getTotalVertices() {
        return null === this._geometry || void 0 === this._geometry ? 0 : this._geometry.getTotalVertices()
      }
      getVerticesData(BB, TB, dB, VB) {
        if (!this._geometry) return null;
        let yB = VB ? void 0 : this._userInstancedBuffersStorage?.vertexBuffers[BB]?.getFloatData(this.instances.length + 1, dB || TB && 1 !== this._geometry.meshes.length);
        return yB || (yB = this._geometry.getVerticesData(BB, TB, dB)), yB
      }
      copyVerticesData(BB, TB) {
        this._geometry && this._geometry.copyVerticesData(BB, TB)
      }
      getVertexBuffer(BB, TB) {
        return this._geometry ? (TB ? void 0 : this._userInstancedBuffersStorage?.vertexBuffers[BB]) ?? this._geometry.getVertexBuffer(BB) : null
      }
      isVerticesDataPresent(BB, TB) {
        return this._geometry ? !TB && void 0 !== this._userInstancedBuffersStorage?.vertexBuffers[BB] || this._geometry.isVerticesDataPresent(BB) : !!this._delayInfo && -1 !== this._delayInfo.indexOf(BB)
      }
      isVertexBufferUpdatable(BB, TB) {
        if (!this._geometry) return !!this._delayInfo && -1 !== this._delayInfo.indexOf(BB);
        if (!TB) {
          const TB = this._userInstancedBuffersStorage?.vertexBuffers[BB];
          if (TB) return TB.isUpdatable()
        }
        return this._geometry.isVertexBufferUpdatable(BB)
      }
      getVerticesDataKinds(BB) {
        if (!this._geometry) {
          const BB = [];
          if (this._delayInfo)
            for (const TB of this._delayInfo) BB.push(TB);
          return BB
        }
        const TB = this._geometry.getVerticesDataKinds();
        if (!BB && this._userInstancedBuffersStorage)
          for (const dB in this._userInstancedBuffersStorage.vertexBuffers) - 1 === TB.indexOf(dB) && TB.push(dB);
        return TB
      }
      getTotalIndices() {
        return this._geometry ? this._geometry.getTotalIndices() : 0
      }
      elB(BB, TB) {
        return this._geometry ? this._geometry.elB(BB, TB) : []
      }
      get isBlocked() {
        return null !== this._masterMesh && void 0 !== this._masterMesh
      }
      isReady() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          TB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (2 === this.delayLoadState) return !1;
        if (!super.isReady(BB)) return !1;
        if (!this.oN || 0 === this.oN.length) return !0;
        if (!BB) return !0;
        const dB = this.PD(),
          VB = this.jU(),
          yB = TB || dB.getCaps().instancedArrays && (this.instances.length > 0 || this.hasThinInstances);
        this.computeWorldMatrix();
        const pB = this.material || VB.defaultMaterial;
        if (pB)
          if (pB._storeEffectOnSubMeshes)
            for (const JB of this.oN) {
              const BB = JB.XD();
              if (BB)
                if (BB._storeEffectOnSubMeshes) {
                  if (!BB.isReadyForSubMesh(this, JB, yB)) return !1
                } else if (!BB.isReady(this, yB)) return !1
            } else if (!pB.isReady(this, yB)) return !1;
        const lB = dB.currentRenderPassId;
        for (const JB of this.lightSources) {
          const BB = JB.getShadowGenerators();
          if (!BB) continue;
          const TB = BB.values();
          for (let VB = TB.next(); !0 !== VB.done; VB = TB.next()) {
            const BB = VB.value;
            if (BB && (!BB.getShadowMap()?.renderList || BB.getShadowMap()?.renderList && -1 !== BB.getShadowMap()?.renderList?.indexOf(this))) {
              const TB = BB.getShadowMap().renderPassIds ?? [dB.currentRenderPassId];
              for (let VB = 0; VB < TB.length; ++VB) {
                dB.currentRenderPassId = TB[VB];
                for (const TB of this.oN)
                  if (!BB.isReady(TB, yB, TB.XD()?.needAlphaBlendingForMesh(this) ?? !1)) return dB.currentRenderPassId = lB, !1
              }
              dB.currentRenderPassId = lB
            }
          }
        }
        for (const JB of this._internalMeshDataInfo._LODLevels)
          if (JB.mesh && !JB.mesh.isReady(yB)) return !1;
        return !0
      }
      get areNormalsFrozen() {
        return this._internalMeshDataInfo._areNormalsFrozen
      }
      WD() {
        return this._internalMeshDataInfo._areNormalsFrozen = !0, this
      }
      unfreezeNormals() {
        return this._internalMeshDataInfo._areNormalsFrozen = !1, this
      }
      set overridenInstanceCount(BB) {
        this._instanceDataStorage.overridenInstanceCount = BB
      }
      _getInstanceDataStorage() {
        if (this._instanceDataStorage.useMonoDataStorageRenderPass) return this._instanceDataStorage.dataStorageRenderPass;
        const BB = this._instanceDataStorage.engine.currentRenderPassId;
        let TB = this._instanceDataStorage.renderPasses[BB];
        return TB || (TB = new CB, this._instanceDataStorage.renderPasses[BB] = TB), TB
      }
      _preActivate() {
        const BB = this._internalMeshDataInfo,
          TB = this.jU().getRenderId();
        return BB._preActivateId === TB || (BB._preActivateId = TB, this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass.visibleInstances = null : this._getInstanceDataStorage().visibleInstances = null), this
      }
      _preActivateForIntermediateRendering(BB) {
        const TB = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        return TB.visibleInstances && (TB.visibleInstances.intermediateDefaultRenderId = BB), this
      }
      _registerInstanceForRenderId(BB, TB) {
        const dB = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        return dB.visibleInstances || (dB.visibleInstances = {
          defaultRenderId: TB,
          selfDefaultRenderId: this._renderId,
          intermediateDefaultRenderId: -1
        }), dB.visibleInstances[TB] || (void 0 === dB.previousRenderId || this._instanceDataStorage.useMonoDataStorageRenderPass && !this._instanceDataStorage.isFrozen || delete dB.visibleInstances[dB.previousRenderId], dB.previousRenderId = TB, dB.visibleInstances[TB] = new Array), dB.visibleInstances[TB].push(BB), this
      }
      _afterComputeWorldMatrix() {
        super._afterComputeWorldMatrix(), this.hasThinInstances && (this.ZD || this.thinInstanceRefreshBoundingInfo(!1))
      }
      _postActivate() {
        this.edgesShareWithInstances && this.edgesRenderer && this.edgesRenderer.isEnabled && this._renderingGroup && (this._renderingGroup._edgesRenderers.pushNoDuplicate(this.edgesRenderer), this.edgesRenderer.customInstances.push(this.getWorldMatrix()))
      }
      refreshBoundingInfo() {
        let BB, TB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          dB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.hasBoundingInfo && this.IK().isLocked) return this;
        BB = "object" === typeof TB ? TB : {
          applySkeleton: TB,
          applyMorph: dB
        };
        const VB = this.geometry ? this.geometry.boundingBias : null;
        return this._refreshBoundingInfo(this._getData(BB, null, wB.m.PositionKind), VB), this
      }
      _createGlobalSubMesh(BB) {
        const TB = this.getTotalVertices();
        if (!TB || !this.elB()) return null;
        if (this.oN && this.oN.length > 0) {
          const dB = this.elB();
          if (!dB) return null;
          const VB = dB.length;
          let yB = !1;
          if (BB) yB = !0;
          else
            for (const BB of this.oN) {
              if (BB.indexStart + BB.indexCount > VB) {
                yB = !0;
                break
              }
              if (BB.verticesStart + BB.verticesCount > TB) {
                yB = !0;
                break
              }
            }
          if (!yB) return this.oN[0]
        }
        return this.releaseSubMeshes(), new rB.c(0, 0, TB, 0, this.getTotalIndices() || (this.isUnIndexed ? TB : 0), this)
      }
      subdivide(BB) {
        if (BB < 1) return;
        const TB = this.getTotalIndices();
        let dB = TB / BB | 0,
          VB = 0;
        for (; dB % 3 !== 0;) dB++;
        this.releaseSubMeshes();
        for (let yB = 0; yB < BB && !(VB >= TB); yB++) rB.c.CreateFromIndices(0, VB, VB + dB >= TB ? TB - VB : dB, this, void 0, !1), VB += dB;
        this.refreshBoundingInfo(), this.synchronizeInstances()
      }
      setVerticesData(BB, TB) {
        let dB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          VB = arguments.length > 3 ? arguments[3] : void 0;
        if (this._geometry) this._geometry.setVerticesData(BB, TB, dB, VB);
        else {
          const VB = new UB.d;
          VB.set(TB, BB);
          const yB = this.jU();
          new FB.b(FB.b.RandomId(), yB, VB, dB, this)
        }
        return this
      }
      removeVerticesData(BB) {
        this._geometry && this._geometry.removeVerticesData(BB)
      }
      markVerticesDataAsUpdatable(BB) {
        let TB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const dB = this.getVertexBuffer(BB);
        dB && dB.isUpdatable() !== TB && this.setVerticesData(BB, this.getVerticesData(BB), TB)
      }
      setVerticesBuffer(BB) {
        let TB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        return this._geometry || (this._geometry = FB.b.CreateGeometryForMesh(this)), this._geometry.setVerticesBuffer(BB, dB, TB), this
      }
      updateVerticesData(BB, TB, dB, VB) {
        return this._geometry ? (VB ? (this.makeGeometryUnique(), this.updateVerticesData(BB, TB, dB, !1)) : this._geometry.updateVerticesData(BB, TB, dB), this) : this
      }
      updateMeshPositions(BB) {
        let TB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const dB = this.getVerticesData(wB.m.PositionKind);
        if (!dB) return this;
        if (BB(dB), this.updateVerticesData(wB.m.PositionKind, dB, !1, !1), TB) {
          const BB = this.elB(),
            TB = this.getVerticesData(wB.m.NormalKind);
          if (!TB) return this;
          UB.d.ComputeNormals(dB, BB, TB), this.updateVerticesData(wB.m.NormalKind, TB, !1, !1)
        }
        return this
      }
      makeGeometryUnique() {
        if (!this._geometry) return this;
        if (1 === this._geometry.meshes.length) return this;
        const BB = this._geometry,
          TB = this._geometry.copy(FB.b.RandomId());
        return BB.releaseForMesh(this, !0), TB.applyToMesh(this), this
      }
      setIndexBuffer(BB, TB, dB) {
        let VB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          yB = this._geometry;
        yB || (yB = new FB.b(FB.b.RandomId(), this.jU(), void 0, void 0, this)), yB.setIndexBuffer(BB, TB, dB, VB)
      }
      setIndices(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          dB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          VB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this._geometry) this._geometry.setIndices(BB, TB, dB, VB);
        else {
          const VB = new UB.d;
          VB.indices = BB;
          const yB = this.jU();
          new FB.b(FB.b.RandomId(), yB, VB, dB, this, TB)
        }
        return this
      }
      updateIndices(BB, TB) {
        let dB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return this._geometry ? (this._geometry.updateIndices(BB, TB, dB), this) : this
      }
      toLeftHanded() {
        return this._geometry ? (this._geometry.toLeftHanded(), this) : this
      }
      _bind(BB, TB, dB) {
        let VB = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        if (!this._geometry) return this;
        const yB = this.jU().PD();
        let pB;
        if (this._unIndexed)
          if (this._getRenderingFillMode(dB) === IB.b.WireFrameFillMode) pB = BB._getLinesIndexBuffer(this.elB(), yB);
          else pB = null;
        else switch (this._getRenderingFillMode(dB)) {
          case IB.b.PointFillMode:
            pB = null;
            break;
          case IB.b.WireFrameFillMode:
            pB = BB._getLinesIndexBuffer(this.elB(), yB);
            break;
          default:
          case IB.b.TriangleFillMode:
            pB = this._geometry.getIndexBuffer()
        }
        return this._bindDirect(TB, pB, VB)
      }
      _bindDirect(BB, TB) {
        let dB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (!this._geometry) return this;
        if (this.morphTargetManager && this.morphTargetManager.isUsingTextureForTargets && this.morphTargetManager._bind(BB), dB && this._userInstancedBuffersStorage && !this.hasThinInstances) {
          if (!this._instanceDataStorage.useMonoDataStorageRenderPass && this._userInstancedBuffersStorage.renderPasses && this._userInstancedBuffersStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId]) {
            const BB = this._userInstancedBuffersStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId];
            for (const TB in BB) this._userInstancedBuffersStorage.vertexBuffers[TB] = BB[TB]
          }
          this._geometry._bind(BB, TB, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects)
        } else this._geometry._bind(BB, TB);
        return this
      }
      _draw(BB, TB, dB) {
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        this._internalMeshDataInfo._onBeforeDrawObservable && this._internalMeshDataInfo._onBeforeDrawObservable.notifyObservers(this);
        const VB = this.jU().PD(),
          yB = VB._currentMaterialContext,
          pB = yB && yB.useVertexPulling;
        return this._unIndexed && TB !== IB.b.WireFrameFillMode || TB == IB.b.PointFillMode ? VB.drawArraysType(TB, BB.verticesStart, BB.verticesCount, this.forcedInstanceCount || dB) : TB == IB.b.WireFrameFillMode ? VB.drawElementsType(TB, 0, BB._linesIndexCount, this.forcedInstanceCount || dB) : pB ? VB.drawArraysType(TB, BB.indexStart, BB.indexCount, this.forcedInstanceCount || dB) : VB.drawElementsType(TB, BB.indexStart, BB.indexCount, this.forcedInstanceCount || dB), this
      }
      registerBeforeRender(BB) {
        return this.onBeforeRenderObservable.add(BB), this
      }
      unregisterBeforeRender(BB) {
        return this.onBeforeRenderObservable.removeCallback(BB), this
      }
      registerAfterRender(BB) {
        return this.onAfterRenderObservable.add(BB), this
      }
      unregisterAfterRender(BB) {
        return this.onAfterRenderObservable.removeCallback(BB), this
      }
      _getInstancesRenderList(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const dB = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        if (this._instanceDataStorage.isFrozen) {
          if (TB) return dB.batchCacheReplacementModeInFrozenMode.hardwareInstancedRendering[BB] = !1, dB.batchCacheReplacementModeInFrozenMode.renderSelf[BB] = !0, dB.batchCacheReplacementModeInFrozenMode;
          if (dB.previousBatch) return dB.previousBatch
        }
        const VB = this.jU(),
          yB = VB._isInIntermediateRendering(),
          pB = yB ? this._internalAbstractMeshDataInfo._onlyForInstancesIntermediate : this._internalAbstractMeshDataInfo._onlyForInstances,
          lB = dB.batchCache;
        if (lB.mustReturn = !1, lB.renderSelf[BB] = TB || !pB && this.isEnabled() && this.isVisible, lB.visibleInstances[BB] = null, dB.visibleInstances && !TB) {
          const TB = dB.visibleInstances,
            pB = VB.getRenderId(),
            JB = yB ? TB.intermediateDefaultRenderId : TB.defaultRenderId;
          lB.visibleInstances[BB] = TB[pB], !lB.visibleInstances[BB] && JB && (lB.visibleInstances[BB] = TB[JB])
        }
        return lB.hardwareInstancedRendering[BB] = !TB && this._instanceDataStorage.hardwareInstancedRendering && null !== lB.visibleInstances[BB] && void 0 !== lB.visibleInstances[BB], dB.previousBatch = lB, lB
      }
      _updateInstancedBuffers(BB, TB, dB, VB, yB, pB) {
        const lB = TB.visibleInstances[BB._id],
          JB = lB ? lB.length : 0,
          YB = TB.parent,
          gB = this._instanceDataStorage;
        let oB = YB.instancesBuffer,
          kB = YB.instancesPreviousBuffer,
          LB = 0,
          OB = 0;
        const DB = TB.renderSelf[BB._id],
          uB = this._scene.floatingOriginOffset,
          HB = !oB || dB !== YB.instancesBufferSize || this._scene.needsPreviousWorldMatrices && !YB.instancesPreviousBuffer;
        if (this._instanceDataStorage.manualUpdate || gB.isFrozen && !HB) OB = (DB ? 1 : 0) + JB;
        else {
          const TB = this.getWorldMatrix();
          if (DB) {
            this._scene.needsPreviousWorldMatrices && (gB.masterMeshPreviousWorldMatrix ? (gB.masterMeshPreviousWorldMatrix.copyToArray(YB.instancesPreviousData, LB), gB.masterMeshPreviousWorldMatrix.bdB(TB)) : (gB.masterMeshPreviousWorldMatrix = TB.clone(), gB.masterMeshPreviousWorldMatrix.copyToArray(YB.instancesPreviousData, LB))), TB.copyToArray(YB.instancesData, LB);
            const BB = TB.FVB();
            YB.instancesData[LB + 12] = BB[12] - uB.x, YB.instancesData[LB + 13] = BB[13] - uB.y, YB.instancesData[LB + 14] = BB[14] - uB.z, LB += 16, OB++
          }
          if (lB) {
            if (bB.INSTANCEDMESH_SORT_TRANSPARENT && this._scene.activeCamera && BB.XD()?.needAlphaBlendingForMesh(BB.getRenderingMesh())) {
              const BB = this._scene.activeCamera.globalPosition;
              for (let TB = 0; TB < lB.length; TB++) {
                const dB = lB[TB];
                dB._distanceToCamera = sB.p.Distance(dB.IK().bVB.centerWorld, BB)
              }
              lB.sort(((BB, TB) => BB._distanceToCamera > TB._distanceToCamera ? -1 : BB._distanceToCamera < TB._distanceToCamera ? 1 : 0))
            }
            for (let BB = 0; BB < lB.length; BB++) {
              const TB = lB[BB],
                dB = TB.getWorldMatrix();
              dB.copyToArray(YB.instancesData, LB), this._scene.needsPreviousWorldMatrices && (TB._previousWorldMatrix ? (TB._previousWorldMatrix.copyToArray(YB.instancesPreviousData, LB), TB._previousWorldMatrix.bdB(dB)) : (TB._previousWorldMatrix = dB.clone(), TB._previousWorldMatrix.copyToArray(YB.instancesPreviousData, LB)));
              const VB = dB.FVB();
              YB.instancesData[LB + 12] = VB[12] - uB.x, YB.instancesData[LB + 13] = VB[13] - uB.y, YB.instancesData[LB + 14] = VB[14] - uB.z, LB += 16, OB++
            }
          }
        }
        if (HB) {
          let BB;
          if (oB && oB.dispose(), kB && kB.dispose(), oB = new wB.d(VB, YB.instancesData, !0, 16, !1, !0), YB.instancesBuffer = oB, this._userInstancedBuffersStorage || (this._userInstancedBuffersStorage = {
              data: {},
              vertexBuffers: {},
              strides: {},
              sizes: {},
              vertexArrayObjects: this.PD().getCaps().vertexArrayObject ? {} : void 0
            }), this._instanceDataStorage.useMonoDataStorageRenderPass) BB = this._userInstancedBuffersStorage.vertexBuffers;
          else {
            this._userInstancedBuffersStorage.renderPasses || (this._userInstancedBuffersStorage.renderPasses = {});
            const TB = this._instanceDataStorage.engine.currentRenderPassId;
            BB = this._userInstancedBuffersStorage.renderPasses[TB], BB || (this._userInstancedBuffersStorage.renderPasses[TB] = BB = {})
          }
          BB.world0 = oB.createVertexBuffer("world0", 0, 4), BB.world1 = oB.createVertexBuffer("world1", 4, 4), BB.world2 = oB.createVertexBuffer("world2", 8, 4), BB.world3 = oB.createVertexBuffer("world3", 12, 4), this._scene.needsPreviousWorldMatrices && (kB = new wB.d(VB, YB.instancesPreviousData, !0, 16, !1, !0), YB.instancesPreviousBuffer = kB, BB.previousWorld0 = kB.createVertexBuffer("previousWorld0", 0, 4), BB.previousWorld1 = kB.createVertexBuffer("previousWorld1", 4, 4), BB.previousWorld2 = kB.createVertexBuffer("previousWorld2", 8, 4), BB.previousWorld3 = kB.createVertexBuffer("previousWorld3", 12, 4)), this._invalidateInstanceVertexArrayObject()
        } else this._instanceDataStorage.isFrozen && !this._instanceDataStorage.forceMatrixUpdates || (oB.updateDirectly(YB.instancesData, 0, OB), !this._scene.needsPreviousWorldMatrices || this._instanceDataStorage.manualUpdate && !this._instanceDataStorage.previousManualUpdate || kB.updateDirectly(YB.instancesPreviousData, 0, OB));
        this._processInstancedBuffers(lB, DB), pB && void 0 !== yB && (this.jU()._activeIndices.addCount(BB.indexCount * OB, !1), VB._currentDrawContext && (VB._currentDrawContext.useInstancing = !0), this._bind(BB, pB, yB), this._draw(BB, yB, OB)), !this._scene.needsPreviousWorldMatrices || HB || !this._instanceDataStorage.manualUpdate || this._instanceDataStorage.isFrozen && !this._instanceDataStorage.forceMatrixUpdates || this._instanceDataStorage.previousManualUpdate || kB.updateDirectly(YB.instancesData, 0, OB)
      }
      _renderWithInstances(BB, TB, dB, VB, yB) {
        const pB = dB.visibleInstances[BB._id],
          lB = pB ? pB.length : 0,
          JB = dB.parent,
          YB = JB.instancesBufferSize,
          gB = 16 * (lB + 1) * 4;
        for (; JB.instancesBufferSize < gB;) JB.instancesBufferSize *= 2;
        return JB.instancesData && YB == JB.instancesBufferSize || (JB.instancesData = new Float32Array(JB.instancesBufferSize / 4)), (this._scene.needsPreviousWorldMatrices && !JB.instancesPreviousData || YB != JB.instancesBufferSize) && (JB.instancesPreviousData = new Float32Array(JB.instancesBufferSize / 4)), this._updateInstancedBuffers(BB, dB, YB, yB, TB, VB), yB.unbindInstanceAttributes(), this
      }
      _renderWithThinInstances(BB, TB, dB, VB) {
        const yB = this._thinInstanceDataStorage?.instancesCount ?? 0;
        this.jU()._activeIndices.addCount(BB.indexCount * yB, !1), VB._currentDrawContext && (VB._currentDrawContext.useInstancing = !0), this._bind(BB, dB, TB), this._draw(BB, TB, yB), this._scene.needsPreviousWorldMatrices && !this._thinInstanceDataStorage.previousMatrixData && this._thinInstanceDataStorage.matrixData && (this._thinInstanceDataStorage.previousMatrixBuffer ? this._thinInstanceDataStorage.previousMatrixBuffer.updateDirectly(this._thinInstanceDataStorage.matrixData, 0, yB) : this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", this._thinInstanceDataStorage.matrixData, !1)), VB.unbindInstanceAttributes()
      }
      _processInstancedBuffers(BB, TB) {}
      _processRendering(BB, TB, dB, VB, yB, pB, lB, JB) {
        const YB = this.jU(),
          gB = YB.PD();
        if (VB = this._getRenderingFillMode(VB), pB && TB.getRenderingMesh().hasThinInstances) return this._renderWithThinInstances(TB, VB, dB, gB), this;
        if (pB) this._renderWithInstances(TB, VB, yB, dB, gB);
        else {
          gB._currentDrawContext && (gB._currentDrawContext.useInstancing = !1);
          let dB = 0;
          yB.renderSelf[TB._id] && (lB && lB(!1, BB.getWorldMatrix(), JB), dB++, this._draw(TB, VB, this._instanceDataStorage.overridenInstanceCount));
          const pB = yB.visibleInstances[TB._id];
          if (pB) {
            const BB = pB.length;
            dB += BB;
            for (let dB = 0; dB < BB; dB++) {
              const BB = pB[dB].getWorldMatrix();
              lB && lB(!0, BB, JB), this._draw(TB, VB)
            }
          }
          YB._activeIndices.addCount(TB.indexCount * dB, !1)
        }
        return this
      }
      _disposeInstanceDataStorageRenderPass(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        BB?.instancesBuffer && (TB && BB.instancesBuffer.dispose(), BB.instancesBuffer = null), BB?.instancesPreviousBuffer && (TB && BB.instancesPreviousBuffer.dispose(), BB.instancesPreviousBuffer = null)
      }
      _rebuild() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const TB in this._instanceDataStorage.renderPasses) {
          const dB = this._instanceDataStorage.renderPasses[TB];
          this._disposeInstanceDataStorageRenderPass(dB, BB)
        }
        if (this._disposeInstanceDataStorageRenderPass(this._instanceDataStorage.dataStorageRenderPass, BB), this._userInstancedBuffersStorage) {
          for (const TB in this._userInstancedBuffersStorage.vertexBuffers) {
            const dB = this._userInstancedBuffersStorage.vertexBuffers[TB];
            dB && (BB && dB.dispose(), this._userInstancedBuffersStorage.vertexBuffers[TB] = null)
          }
          this._userInstancedBuffersStorage.vertexArrayObjects && (this._userInstancedBuffersStorage.vertexArrayObjects = {})
        }
        this._internalMeshDataInfo._effectiveMaterial = null, super._rebuild(BB)
      }
      _releaseRenderPassId(BB) {
        const TB = this._instanceDataStorage.renderPasses[BB];
        if (TB && (this._disposeInstanceDataStorageRenderPass(TB, !0), delete this._instanceDataStorage.renderPasses[BB]), this._userInstancedBuffersStorage?.renderPasses) {
          const TB = this._userInstancedBuffersStorage.renderPasses[BB];
          if (TB)
            for (const BB in TB) TB[BB]?.dispose();
          delete this._userInstancedBuffersStorage.renderPasses[BB]
        }
        const dB = this._userInstancedBuffersStorage?.interleavedBuffers;
        dB?.[BB] && (dB[BB].buffer.dispose(), delete dB[BB])
      }
      _freeze() {
        if (this.oN) {
          for (let BB = 0; BB < this.oN.length; BB++) this._getInstancesRenderList(BB);
          this._internalMeshDataInfo._effectiveMaterial = null, this._instanceDataStorage.isFrozen = !0
        }
      }
      _unFreeze() {
        this._instanceDataStorage.isFrozen = !1;
        for (const BB in this._instanceDataStorage.renderPasses) {
          this._instanceDataStorage.renderPasses[BB].previousBatch = null
        }
        this._instanceDataStorage.dataStorageRenderPass && (this._instanceDataStorage.dataStorageRenderPass.previousBatch = null)
      }
      renderWithRenderPassId(BB, TB, dB, VB) {
        let yB = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        const pB = this._scene.PD(),
          lB = pB.currentRenderPassId;
        if (void 0 !== BB && (pB.currentRenderPassId = BB), VB)(!yB || yB && VB.isInFrustum(this._scene._frustumPlanes)) && this.render(VB, !!TB, dB);
        else
          for (let JB = 0; JB < this.oN.length; JB++) {
            const BB = this.oN[JB];
            (!yB || yB && BB.isInFrustum(this._scene._frustumPlanes)) && this.render(BB, !!TB, dB)
          }
        return void 0 !== BB && (pB.currentRenderPassId = lB), this
      }
      directRender() {
        if (!this.oN) return this;
        for (const BB of this.oN) this.render(BB, !1);
        return this
      }
      render(BB, TB, dB) {
        const VB = this.jU(),
          yB = VB.PD();
        this._internalAbstractMeshDataInfo._isActiveIntermediate ? this._internalAbstractMeshDataInfo._isActiveIntermediate = !1 : this._internalAbstractMeshDataInfo._isActive = !1;
        const pB = VB.activeCameras?.length ?? 0,
          lB = pB > 1 && VB.activeCamera === VB.activeCameras[0] || pB <= 1,
          JB = this._occlusionDataStorage && -1 !== this._occlusionDataStorage.occlusionForRenderPassId && this._occlusionDataStorage.occlusionForRenderPassId !== yB.currentRenderPassId;
        if (lB && this._checkOcclusionQuery(JB) && !this._occlusionDataStorage.forceRenderingWhenOccluded) return this;
        const YB = this._getInstancesRenderList(BB._id, !!dB);
        if (YB.mustReturn) return this;
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        let gB = 0,
          oB = null;
        this.ignoreCameraMaxZ && VB.activeCamera && !VB._isInIntermediateRendering() && (gB = VB.activeCamera.maxZ, oB = VB.activeCamera, VB.activeCamera.maxZ = 0, VB.updateTransformMatrix(!0)), this._internalMeshDataInfo._onBeforeRenderObservable && this._internalMeshDataInfo._onBeforeRenderObservable.notifyObservers(this);
        const kB = BB.getRenderingMesh(),
          LB = YB.hardwareInstancedRendering[BB._id] || kB.hasThinInstances || !!this._userInstancedBuffersStorage && !BB.getMesh()._internalAbstractMeshDataInfo._actAsRegularMesh,
          OB = this._instanceDataStorage,
          DB = BB.XD();
        if (!DB) return oB && (oB.maxZ = gB, VB.updateTransformMatrix(!0)), this;
        if (OB.isFrozen && this._internalMeshDataInfo._effectiveMaterial && this._internalMeshDataInfo._effectiveMaterial === DB) {
          if (DB._storeEffectOnSubMeshes && !BB._drawWrapper?._wasPreviouslyReady || !DB._storeEffectOnSubMeshes && !DB._getDrawWrapper()._wasPreviouslyReady) return oB && (oB.maxZ = gB, VB.updateTransformMatrix(!0)), this
        } else {
          if (DB._storeEffectOnSubMeshes) {
            if (!DB.isReadyForSubMesh(this, BB, LB)) return oB && (oB.maxZ = gB, VB.updateTransformMatrix(!0)), this
          } else if (!DB.isReady(this, LB)) return oB && (oB.maxZ = gB, VB.updateTransformMatrix(!0)), this;
          this._internalMeshDataInfo._effectiveMaterial = DB
        }
        if (TB) {
          const BB = this._internalMeshDataInfo._effectiveMaterial;
          if (1 === BB.alphaModes.length) yB.setAlphaMode(BB.alphaMode);
          else
            for (let TB = 0; TB < BB.alphaModes.length; TB++) {
              const dB = BB.alphaModes[TB];
              yB.setAlphaMode(void 0 !== dB ? dB : 2, !1, TB)
            }
        }
        let uB;
        uB = this._internalMeshDataInfo._effectiveMaterial._storeEffectOnSubMeshes ? BB._drawWrapper : this._internalMeshDataInfo._effectiveMaterial._getDrawWrapper();
        const HB = uB?.effect ?? null;
        for (let fB = 0, sB = VB._beforeRenderingMeshStage; fB < sB.length; fB++) {
          sB[fB].action(this, BB, YB, HB)
        }
        if (!uB || !HB) return oB && (oB.maxZ = gB, VB.updateTransformMatrix(!0)), this;
        const EB = dB || this;
        let vB;
        if (!OB.isFrozen && (this._internalMeshDataInfo._effectiveMaterial.backFaceCulling || null !== this._internalMeshDataInfo._effectiveMaterial.sideOrientation || this._internalMeshDataInfo._effectiveMaterial._twoSidedLighting)) {
          const BB = EB._getWorldMatrixDeterminant();
          vB = this._internalMeshDataInfo._effectiveMaterial._getEffectiveOrientation(this), BB < 0 && (vB = vB === IB.b.ClockWiseSideOrientation ? IB.b.CounterClockWiseSideOrientation : IB.b.ClockWiseSideOrientation), this._internalMeshDataInfo._effectiveSideOrientation = vB
        }
        const mB = this._internalMeshDataInfo._effectiveMaterial._preBind(uB, this._internalMeshDataInfo._effectiveSideOrientation);
        this._internalMeshDataInfo._effectiveMaterial.forceDepthWrite && yB.setDepthWrite(!0);
        const iB = this._internalMeshDataInfo._effectiveMaterial,
          NB = iB.fillMode;
        this._internalMeshDataInfo._onBeforeBindObservable && this._internalMeshDataInfo._onBeforeBindObservable.notifyObservers(this), LB || this._bind(BB, HB, NB, !1);
        const tB = EB.getWorldMatrix();
        iB._storeEffectOnSubMeshes ? iB.bindForSubMesh(tB, this, BB) : iB.bind(tB, this);
        try {
          cB.e._BindAttachmentsForEffect(yB, HB) && (!iB.backFaceCulling && iB.separateCullingPass && (yB.setState(!0, iB.zOffset, !1, !mB, iB.cullBackFaces, iB.stencil, iB.zOffsetUnits), this._processRendering(this, BB, HB, NB, YB, LB, this._onBeforeDraw, this._internalMeshDataInfo._effectiveMaterial), yB.setState(!0, iB.zOffset, !1, mB, iB.cullBackFaces, iB.stencil, iB.zOffsetUnits), this._internalMeshDataInfo._onBetweenPassObservable && this._internalMeshDataInfo._onBetweenPassObservable.notifyObservers(BB)), this._processRendering(this, BB, HB, NB, YB, LB, this._onBeforeDraw, this._internalMeshDataInfo._effectiveMaterial))
        } finally {
          cB.e._RestoreAttachments(yB)
        }
        this._internalMeshDataInfo._effectiveMaterial.unbind();
        for (let fB = 0, sB = VB._afterRenderingMeshStage; fB < sB.length; fB++) {
          sB[fB].action(this, BB, YB, HB)
        }
        return this._internalMeshDataInfo._onAfterRenderObservable && this._internalMeshDataInfo._onAfterRenderObservable.notifyObservers(this), oB && (oB.maxZ = gB, VB.updateTransformMatrix(!0)), 2 !== VB.performancePriority || OB.isFrozen || this._freeze(), this
      }
      _renderRunFollower(BB, TB) {
        const dB = this._scene,
          VB = dB._engine;
        if (VB.isWebGPU || BB._mesh !== this || 0 !== this.instances.length || this.render !== bB.prototype.render) return !1;
        const yB = BB.XD();
        if (!yB || yB !== dB._cachedMaterial || void 0 === yB._canBindRunFollower) return !1;
        const pB = BB._drawWrapper,
          lB = pB?.effect;
        if (!lB || lB !== dB._cachedEffect || this.visibility !== dB._cachedVisibility || pB._forceRebindOnNextCall) return !1;
        const JB = this.hasThinInstances;
        if (!JB && this._userInstancedBuffersStorage) return !1;
        if (!pB._wasPreviouslyReady || pB._wasPreviouslyUsingInstances !== JB) return !1;
        const YB = this._internalMeshDataInfo;
        if (this.ignoreCameraMaxZ || this.morphTargetManager || this._instanceDataStorage.isFrozen || dB._isInIntermediateRendering() || 0 !== dB._beforeRenderingMeshStage.length || 0 !== dB._afterRenderingMeshStage.length || YB._onBeforeRenderObservable?.hasObservers() || YB._onBeforeBindObservable?.hasObservers() || YB._onAfterRenderObservable?.hasObservers()) return !1;
        const gB = this.occlusionType;
        if (void 0 !== gB && gB !== KB.e.OCCLUSION_TYPE_NONE || !yB._canBindRunFollower(dB, VB, this, BB, lB)) return !1;
        const oB = this._internalAbstractMeshDataInfo,
          kB = oB._isActiveIntermediate;
        kB ? oB._isActiveIntermediate = !1 : oB._isActive = !1;
        const LB = dB.activeCameras?.length ?? 0;
        (LB > 1 && dB.activeCamera === dB.activeCameras[0] || LB <= 1) && this._checkOcclusionQuery(!1);
        const OB = this._getInstancesRenderList(BB._id);
        if (OB.mustReturn) return !0;
        if (!JB && !OB.renderSelf[BB._id]) return kB ? oB._isActiveIntermediate = !0 : oB._isActive = !0, !1;
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return !0;
        if (YB._effectiveMaterial = yB, TB)
          if (1 === yB.alphaModes.length) VB.setAlphaMode(yB.alphaMode);
          else
            for (let uB = 0; uB < yB.alphaModes.length; uB++) {
              const BB = yB.alphaModes[uB];
              VB.setAlphaMode(void 0 !== BB ? BB : 2, !1, uB)
            }
        if (yB.backFaceCulling || null !== yB.sideOrientation || yB._twoSidedLighting) {
          const BB = this._getWorldMatrixDeterminant();
          let TB = yB._getEffectiveOrientation(this);
          BB < 0 && (TB = TB === IB.b.ClockWiseSideOrientation ? IB.b.CounterClockWiseSideOrientation : IB.b.ClockWiseSideOrientation), YB._effectiveSideOrientation = TB
        }
        yB._preBind(pB, YB._effectiveSideOrientation), yB.forceDepthWrite && VB.setDepthWrite(!0);
        const DB = yB.fillMode;
        return JB || this._bind(BB, lB, DB, !1), yB._bindRunFollower(this.getWorldMatrix(), this, BB, lB), this._processRendering(this, BB, lB, DB, OB, JB, this._onBeforeDraw, yB), yB.unbind(), 2 === dB.performancePriority && this._freeze(), !0
      }
      cleanMatrixWeights() {
        this.isVerticesDataPresent(wB.m.MatricesWeightsKind) && (this.isVerticesDataPresent(wB.m.MatricesWeightsExtraKind) ? this._normalizeSkinWeightsAndExtra() : this._normalizeSkinFourWeights())
      }
      _normalizeSkinFourWeights() {
        const BB = this.getVerticesData(wB.m.MatricesWeightsKind),
          TB = BB.length;
        for (let dB = 0; dB < TB; dB += 4) {
          const TB = BB[dB] + BB[dB + 1] + BB[dB + 2] + BB[dB + 3];
          if (0 === TB) BB[dB] = 1;
          else {
            const VB = 1 / TB;
            BB[dB] *= VB, BB[dB + 1] *= VB, BB[dB + 2] *= VB, BB[dB + 3] *= VB
          }
        }
        this.setVerticesData(wB.m.MatricesWeightsKind, BB)
      }
      _normalizeSkinWeightsAndExtra() {
        const BB = this.getVerticesData(wB.m.MatricesWeightsExtraKind),
          TB = this.getVerticesData(wB.m.MatricesWeightsKind),
          dB = TB.length;
        for (let VB = 0; VB < dB; VB += 4) {
          let dB = TB[VB] + TB[VB + 1] + TB[VB + 2] + TB[VB + 3];
          if (dB += BB[VB] + BB[VB + 1] + BB[VB + 2] + BB[VB + 3], 0 === dB) TB[VB] = 1;
          else {
            const yB = 1 / dB;
            TB[VB] *= yB, TB[VB + 1] *= yB, TB[VB + 2] *= yB, TB[VB + 3] *= yB, BB[VB] *= yB, BB[VB + 1] *= yB, BB[VB + 2] *= yB, BB[VB + 3] *= yB
          }
        }
        this.setVerticesData(wB.m.MatricesWeightsKind, TB), this.setVerticesData(wB.m.MatricesWeightsKind, BB)
      }
      validateSkinning() {
        const BB = this.getVerticesData(wB.m.MatricesWeightsExtraKind),
          TB = this.getVerticesData(wB.m.MatricesWeightsKind);
        if (null === TB || null == this.skeleton) return {
          skinned: !1,
          valid: !0,
          yD: "not skinned"
        };
        const dB = TB.length;
        let VB = 0,
          yB = 0,
          pB = 0,
          lB = 0;
        const JB = null === BB ? 4 : 8,
          YB = [];
        for (let OB = 0; OB <= JB; OB++) YB[OB] = 0;
        for (let OB = 0; OB < dB; OB += 4) {
          let dB = TB[OB],
            gB = dB,
            oB = 0 === gB ? 0 : 1;
          for (let yB = 1; yB < JB; yB++) {
            const pB = yB < 4 ? TB[OB + yB] : BB[OB + yB - 4];
            pB > dB && VB++, 0 !== pB && oB++, gB += pB, dB = pB
          }
          if (YB[oB]++, oB > pB && (pB = oB), 0 === gB) yB++;
          else {
            const dB = 1 / gB;
            let VB = 0;
            for (let yB = 0; yB < JB; yB++) VB += yB < 4 ? Math.abs(TB[OB + yB] - TB[OB + yB] * dB) : Math.abs(BB[OB + yB - 4] - BB[OB + yB - 4] * dB);
            VB > .001 && lB++
          }
        }
        const gB = this.skeleton.bones.length,
          oB = this.getVerticesData(wB.m.MatricesIndicesKind),
          kB = this.getVerticesData(wB.m.MatricesIndicesExtraKind);
        let LB = 0;
        for (let OB = 0; OB < dB; OB += 4)
          for (let BB = 0; BB < JB; BB++) {
            const TB = BB < 4 ? oB[OB + BB] : kB[OB + BB - 4];
            (TB >= gB || TB < 0) && LB++
          }
        return {
          skinned: !0,
          valid: 0 === yB && 0 === lB && 0 === LB,
          yD: "Number of Weights = " + dB / 4 + "\nMaximum influences = " + pB + "\nMissing Weights = " + yB + "\nNot Sorted = " + VB + "\nNot Normalized = " + lB + "\nWeightCounts = [" + YB + "]\nNumber of bones = " + gB + "\nBad Bone Indices = " + LB
        }
      }
      _checkDelayState() {
        const BB = this.jU();
        return this._geometry ? this._geometry.load(BB) : 4 === this.delayLoadState && (this.delayLoadState = 2, this._queueLoad(BB)), this
      }
      _queueLoad(BB) {
        BB.addPendingData(this);
        const TB = -1 !== this.delayLoadingFile.indexOf(".babylonbinarymeshdata");
        return (async () => {
          try {
            const dB = await BB._loadDelayedFileAsync(this.delayLoadingFile, TB, !0);
            dB instanceof ArrayBuffer ? this._delayLoadingFunction(dB, this) : this._delayLoadingFunction(JSON.parse(dB), this);
            for (const BB of this.instances) BB.refreshBoundingInfo(), BB._syncSubMeshes();
            this.delayLoadState = 1, BB.removePendingData(this)
          } catch (dB) {
            BB.removePendingData(this), BB.WdB || RB.b.Error(`Unable to delay load geometry data for mesh "${this.name}" from "${this.delayLoadingFile}": ${dB}`)
          }
        })(), this
      }
      isInFrustum(BB) {
        return 2 !== this.delayLoadState && (!!super.isInFrustum(BB) && (this._checkDelayState(), !0))
      }
      setMaterialById(BB) {
        const TB = this.jU().materials;
        let dB;
        for (dB = TB.length - 1; dB > -1; dB--)
          if (TB[dB].id === BB) return this.material = TB[dB], this;
        const VB = this.jU().multiMaterials;
        for (dB = VB.length - 1; dB > -1; dB--)
          if (VB[dB].id === BB) return this.material = VB[dB], this;
        return this
      }
      getAnimatables() {
        const BB = [];
        return this.material && BB.push(this.material), this.skeleton && BB.push(this.skeleton), BB
      }
      bakeTransformIntoVertices(BB) {
        if (!this.isVerticesDataPresent(wB.m.PositionKind)) return this;
        const TB = this.oN.splice(0);
        this._resetPointsArrayCache();
        let dB = this.getVerticesData(wB.m.PositionKind);
        const VB = sB.p.Zero();
        let yB;
        for (yB = 0; yB < dB.length; yB += 3) sB.p.TransformCoordinatesFromFloatsToRef(dB[yB], dB[yB + 1], dB[yB + 2], BB, VB).toArray(dB, yB);
        if (this.setVerticesData(wB.m.PositionKind, dB, this.getVertexBuffer(wB.m.PositionKind).isUpdatable()), this.isVerticesDataPresent(wB.m.NormalKind)) {
          for (dB = this.getVerticesData(wB.m.NormalKind), yB = 0; yB < dB.length; yB += 3) sB.p.TransformNormalFromFloatsToRef(dB[yB], dB[yB + 1], dB[yB + 2], BB, VB).normalize().toArray(dB, yB);
          this.setVerticesData(wB.m.NormalKind, dB, this.getVertexBuffer(wB.m.NormalKind).isUpdatable())
        }
        if (this.isVerticesDataPresent(wB.m.TangentKind)) {
          for (dB = this.getVerticesData(wB.m.TangentKind), yB = 0; yB < dB.length; yB += 4) sB.p.TransformNormalFromFloatsToRef(dB[yB], dB[yB + 1], dB[yB + 2], BB, VB).normalize().toArray(dB, yB);
          this.setVerticesData(wB.m.TangentKind, dB, this.getVertexBuffer(wB.m.TangentKind).isUpdatable())
        }
        return BB.determinant() < 0 && this.flipFaces(), this.releaseSubMeshes(), this.oN = TB, this
      }
      bakeCurrentTransformIntoVertices() {
        let BB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] && this.makeGeometryUnique(), this.bakeTransformIntoVertices(this.computeWorldMatrix(!0)), this.resetLocalMatrix(BB), this
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
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          dB = arguments.length > 2 ? arguments[2] : void 0,
          VB = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        if (TB && void 0 === TB._addToSceneRootNodes) {
          const dB = TB;
          return AB.source = this, AB.doNotCloneChildren = dB.doNotCloneChildren, AB.clonePhysicsImpostor = dB.clonePhysicsImpostor, AB.cloneThinInstances = dB.cloneThinInstances, new bB(BB, this.jU(), AB)
        }
        return new bB(BB, this.jU(), TB, this, dB, VB)
      }
      dispose(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.morphTargetManager = null, this._geometry && this._geometry.releaseForMesh(this, !0);
        const dB = this._internalMeshDataInfo;
        if (dB._onBeforeDrawObservable && dB._onBeforeDrawObservable.clear(), dB._onBeforeBindObservable && dB._onBeforeBindObservable.clear(), dB._onBeforeRenderObservable && dB._onBeforeRenderObservable.clear(), dB._onAfterRenderObservable && dB._onAfterRenderObservable.clear(), dB._onBetweenPassObservable && dB._onBetweenPassObservable.clear(), this._scene.useClonedMeshMap) {
          if (dB.meshMap)
            for (const BB in dB.meshMap) {
              const TB = dB.meshMap[BB];
              TB && (TB._internalMeshDataInfo._source = null, dB.meshMap[BB] = void 0)
            }
          dB._source && dB._source._internalMeshDataInfo.meshMap && (dB._source._internalMeshDataInfo.meshMap[this.uniqueId] = void 0)
        } else {
          const BB = this.jU().meshes;
          for (const TB of BB) {
            const BB = TB;
            BB._internalMeshDataInfo && BB._internalMeshDataInfo._source && BB._internalMeshDataInfo._source === this && (BB._internalMeshDataInfo._source = null)
          }
        }
        dB._source = null, this._disposeInstanceSpecificData(), this._disposeThinInstanceSpecificData(), this._internalMeshDataInfo._checkReadinessObserver && this._scene.onBeforeRenderObservable.remove(this._internalMeshDataInfo._checkReadinessObserver), super.dispose(BB, TB)
      }
      _disposeInstanceSpecificData() {}
      _disposeThinInstanceSpecificData() {}
      _invalidateInstanceVertexArrayObject() {}
      applyDisplacementMap(BB, TB, dB, VB, yB, pB) {
        let lB = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          JB = arguments.length > 7 ? arguments[7] : void 0;
        const YB = this.jU();
        return (0, mB.s)(BB, (BB => {
          const JB = BB.width,
            YB = BB.height,
            gB = this.PD().createCanvas(JB, YB).getContext("2d");
          gB.drawImage(BB, 0, 0);
          const oB = gB.getImageData(0, 0, JB, YB).data;
          this.applyDisplacementMapFromBuffer(oB, JB, YB, TB, dB, yB, pB, lB), VB && VB(this)
        }), JB || (() => {}), YB.offlineProvider), this
      }
      applyDisplacementMapFromBuffer(BB, TB, dB, VB, yB, pB, lB) {
        let JB = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
        if (!this.isVerticesDataPresent(wB.m.PositionKind) || !this.isVerticesDataPresent(wB.m.NormalKind) || !this.isVerticesDataPresent(wB.m.UVKind)) return RB.b.Warn("Cannot call applyDisplacementMap: Given mesh is not complete. Position, Normal or UV are missing"), this;
        const YB = this.getVerticesData(wB.m.PositionKind, !0, !0),
          gB = this.getVerticesData(wB.m.NormalKind),
          oB = this.getVerticesData(wB.m.UVKind);
        let kB = sB.p.Zero();
        const LB = sB.p.Zero(),
          OB = sB.l.Zero();
        pB = pB || sB.l.Zero(), lB = lB || new sB.l(1, 1);
        for (let DB = 0; DB < YB.length; DB += 3) {
          sB.p.FromArrayToRef(YB, DB, kB), sB.p.FromArrayToRef(gB, DB, LB), sB.l.FromArrayToRef(oB, DB / 3 * 2, OB);
          const JB = 4 * ((Math.abs(OB.x * lB.x + pB.x % 1) * (TB - 1) % TB | 0) + (Math.abs(OB.y * lB.y + pB.y % 1) * (dB - 1) % dB | 0) * TB),
            uB = .3 * (BB[JB] / 255) + .59 * (BB[JB + 1] / 255) + .11 * (BB[JB + 2] / 255);
          LB.normalize(), LB.scaleInPlace(VB + (yB - VB) * uB), kB = kB.add(LB), kB.toArray(YB, DB)
        }
        return UB.d.ComputeNormals(YB, this.elB(), gB), JB ? (this.setVerticesData(wB.m.PositionKind, YB), this.setVerticesData(wB.m.NormalKind, gB), this.setVerticesData(wB.m.UVKind, oB)) : (this.updateVerticesData(wB.m.PositionKind, YB), this.updateVerticesData(wB.m.NormalKind, gB)), this
      }
      _getFlattenedNormals(BB, TB) {
        const dB = new Float32Array(3 * BB.length);
        let VB = 0;
        const yB = this.sideOrientation === (this._scene.useRightHandedSystem ? 1 : 0);
        for (let pB = 0; pB < BB.length; pB += 3) {
          const lB = sB.p.FromArray(TB, 3 * BB[pB]),
            JB = sB.p.FromArray(TB, 3 * BB[pB + 1]),
            YB = sB.p.FromArray(TB, 3 * BB[pB + 2]),
            gB = lB.subtract(JB),
            oB = YB.subtract(JB),
            kB = sB.p.Normalize(sB.p.Cross(gB, oB));
          yB && kB.scaleInPlace(-1);
          for (let BB = 0; BB < 3; BB++) dB[VB++] = kB.x, dB[VB++] = kB.y, dB[VB++] = kB.z
        }
        return dB
      }
      _convertToUnIndexedMesh() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const TB = this.getVerticesDataKinds().filter((BB => !this.getVertexBuffer(BB)?.getIsInstanced())),
          dB = this.elB(!1, !0),
          VB = {},
          yB = (BB, TB) => {
            const VB = new Float32Array(dB.length * TB);
            let yB = 0;
            for (let pB = 0; pB < dB.length; pB++)
              for (let lB = 0; lB < TB; lB++) VB[yB++] = BB[dB[pB] * TB + lB];
            return VB
          },
          pB = this.IK(),
          lB = this.geometry ? this.oN.slice(0) : [];
        for (const JB of TB) VB[JB] = this.getVerticesData(JB);
        for (const JB of TB) {
          const TB = this.getVertexBuffer(JB),
            pB = TB.getSize();
          if (BB && JB === wB.m.NormalKind) {
            const BB = this._getFlattenedNormals(dB, VB[wB.m.PositionKind]);
            this.setVerticesData(wB.m.NormalKind, BB, TB.isUpdatable(), pB)
          } else this.setVerticesData(JB, yB(VB[JB], pB), TB.isUpdatable(), pB)
        }
        if (this.morphTargetManager) {
          for (let TB = 0; TB < this.morphTargetManager.numTargets; TB++) {
            const VB = this.morphTargetManager.getTarget(TB),
              pB = VB.getPositions();
            VB.TJB(yB(pB, 3));
            const lB = VB.getNormals();
            lB && VB.setNormals(BB ? this._getFlattenedNormals(dB, pB) : yB(lB, 3));
            const JB = VB.getTangents();
            JB && VB.setTangents(yB(JB, 3));
            const YB = VB.getUVs();
            YB && VB.setUVs(yB(YB, 2));
            const gB = VB.getColors();
            gB && VB.setColors(yB(gB, 4))
          }
          this.morphTargetManager.synchronize()
        }
        for (let JB = 0; JB < dB.length; JB++) dB[JB] = JB;
        this.setIndices(dB), this._unIndexed = !0, this.releaseSubMeshes();
        for (const JB of lB) {
          const BB = JB.IK();
          rB.c.AddToMesh(JB.materialIndex, JB.indexStart, JB.indexCount, JB.indexStart, JB.indexCount, this).setBoundingInfo(BB)
        }
        return this.setBoundingInfo(pB), this.synchronizeInstances(), this
      }
      convertToFlatShadedMesh() {
        return this._convertToUnIndexedMesh(!0)
      }
      convertToUnIndexedMesh() {
        return this._convertToUnIndexedMesh()
      }
      flipFaces() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const TB = UB.d.ExtractFromMesh(this);
        let dB;
        if (BB && this.isVerticesDataPresent(wB.m.NormalKind) && TB.normals) {
          for (dB = 0; dB < TB.normals.length; dB++) TB.normals[dB] *= -1;
          this.setVerticesData(wB.m.NormalKind, TB.normals, this.isVertexBufferUpdatable(wB.m.NormalKind))
        }
        if (TB.indices) {
          let BB;
          for (dB = 0; dB < TB.indices.length; dB += 3) BB = TB.indices[dB + 1], TB.indices[dB + 1] = TB.indices[dB + 2], TB.indices[dB + 2] = BB;
          this.setIndices(TB.indices, null, this.isVertexBufferUpdatable(wB.m.PositionKind), !0)
        }
        return this
      }
      increaseVertices() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        const TB = UB.d.ExtractFromMesh(this),
          dB = TB.indices && !Array.isArray(TB.indices) && Array.from ? Array.from(TB.indices) : TB.indices,
          VB = TB.positions && !Array.isArray(TB.positions) && Array.from ? Array.from(TB.positions) : TB.positions,
          yB = TB.uvs && !Array.isArray(TB.uvs) && Array.from ? Array.from(TB.uvs) : TB.uvs,
          pB = TB.normals && !Array.isArray(TB.normals) && Array.from ? Array.from(TB.normals) : TB.normals;
        if (dB && VB) {
          TB.indices = dB, TB.positions = VB, yB && (TB.uvs = yB), pB && (TB.normals = pB);
          const lB = BB + 1,
            JB = [];
          for (let BB = 0; BB < lB + 1; BB++) JB[BB] = [];
          let YB, gB;
          const oB = new sB.p(0, 0, 0),
            kB = new sB.p(0, 0, 0),
            LB = new sB.l(0, 0),
            OB = [],
            DB = [],
            uB = [];
          let HB, EB, vB, mB = VB.length;
          yB && (EB = yB.length), pB && (vB = pB.length);
          for (let BB = 0; BB < dB.length; BB += 3) {
            DB[0] = dB[BB], DB[1] = dB[BB + 1], DB[2] = dB[BB + 2];
            for (let BB = 0; BB < 3; BB++)
              if (YB = DB[BB], gB = DB[(BB + 1) % 3], void 0 === uB[YB] && void 0 === uB[gB] ? (uB[YB] = [], uB[gB] = []) : (void 0 === uB[YB] && (uB[YB] = []), void 0 === uB[gB] && (uB[gB] = [])), void 0 === uB[YB][gB] && void 0 === uB[gB][YB]) {
                uB[YB][gB] = [], oB.x = (VB[3 * gB] - VB[3 * YB]) / lB, oB.y = (VB[3 * gB + 1] - VB[3 * YB + 1]) / lB, oB.z = (VB[3 * gB + 2] - VB[3 * YB + 2]) / lB, pB && (kB.x = (pB[3 * gB] - pB[3 * YB]) / lB, kB.y = (pB[3 * gB + 1] - pB[3 * YB + 1]) / lB, kB.z = (pB[3 * gB + 2] - pB[3 * YB + 2]) / lB), yB && (LB.x = (yB[2 * gB] - yB[2 * YB]) / lB, LB.y = (yB[2 * gB + 1] - yB[2 * YB + 1]) / lB), uB[YB][gB].push(YB);
                for (let BB = 1; BB < lB; BB++) uB[YB][gB].push(VB.length / 3), VB[mB++] = VB[3 * YB] + BB * oB.x, VB[mB++] = VB[3 * YB + 1] + BB * oB.y, VB[mB++] = VB[3 * YB + 2] + BB * oB.z, pB && (pB[vB++] = pB[3 * YB] + BB * kB.x, pB[vB++] = pB[3 * YB + 1] + BB * kB.y, pB[vB++] = pB[3 * YB + 2] + BB * kB.z), yB && (yB[EB++] = yB[2 * YB] + BB * LB.x, yB[EB++] = yB[2 * YB + 1] + BB * LB.y);
                uB[YB][gB].push(gB), uB[gB][YB] = [], HB = uB[YB][gB].length;
                for (let BB = 0; BB < HB; BB++) uB[gB][YB][BB] = uB[YB][gB][HB - 1 - BB]
              } JB[0][0] = dB[BB], JB[1][0] = uB[dB[BB]][dB[BB + 1]][1], JB[1][1] = uB[dB[BB]][dB[BB + 2]][1];
            for (let TB = 2; TB < lB; TB++) {
              JB[TB][0] = uB[dB[BB]][dB[BB + 1]][TB], JB[TB][TB] = uB[dB[BB]][dB[BB + 2]][TB], oB.x = (VB[3 * JB[TB][TB]] - VB[3 * JB[TB][0]]) / TB, oB.y = (VB[3 * JB[TB][TB] + 1] - VB[3 * JB[TB][0] + 1]) / TB, oB.z = (VB[3 * JB[TB][TB] + 2] - VB[3 * JB[TB][0] + 2]) / TB, pB && (kB.x = (pB[3 * JB[TB][TB]] - pB[3 * JB[TB][0]]) / TB, kB.y = (pB[3 * JB[TB][TB] + 1] - pB[3 * JB[TB][0] + 1]) / TB, kB.z = (pB[3 * JB[TB][TB] + 2] - pB[3 * JB[TB][0] + 2]) / TB), yB && (LB.x = (yB[2 * JB[TB][TB]] - yB[2 * JB[TB][0]]) / TB, LB.y = (yB[2 * JB[TB][TB] + 1] - yB[2 * JB[TB][0] + 1]) / TB);
              for (let BB = 1; BB < TB; BB++) JB[TB][BB] = VB.length / 3, VB[mB++] = VB[3 * JB[TB][0]] + BB * oB.x, VB[mB++] = VB[3 * JB[TB][0] + 1] + BB * oB.y, VB[mB++] = VB[3 * JB[TB][0] + 2] + BB * oB.z, pB && (pB[vB++] = pB[3 * JB[TB][0]] + BB * kB.x, pB[vB++] = pB[3 * JB[TB][0] + 1] + BB * kB.y, pB[vB++] = pB[3 * JB[TB][0] + 2] + BB * kB.z), yB && (yB[EB++] = yB[2 * JB[TB][0]] + BB * LB.x, yB[EB++] = yB[2 * JB[TB][0] + 1] + BB * LB.y)
            }
            JB[lB] = uB[dB[BB + 1]][dB[BB + 2]], OB.push(JB[0][0], JB[1][0], JB[1][1]);
            for (let BB = 1; BB < lB; BB++) {
              let TB;
              for (TB = 0; TB < BB; TB++) OB.push(JB[BB][TB], JB[BB + 1][TB], JB[BB + 1][TB + 1]), OB.push(JB[BB][TB], JB[BB + 1][TB + 1], JB[BB][TB + 1]);
              OB.push(JB[BB][TB], JB[BB + 1][TB], JB[BB + 1][TB + 1])
            }
          }
          TB.indices = OB, TB.applyToMesh(this, this.isVertexBufferUpdatable(wB.m.PositionKind))
        } else RB.b.Warn("Couldn't increase number of vertices : VertexData must contain at least indices and positions")
      }
      forceSharedVertices() {
        const BB = UB.d.ExtractFromMesh(this),
          TB = BB.uvs,
          dB = BB.indices,
          VB = BB.positions,
          yB = BB.colors,
          pB = BB.matricesIndices,
          lB = BB.matricesWeights,
          JB = BB.matricesIndicesExtra,
          YB = BB.matricesWeightsExtra;
        if (void 0 === dB || void 0 === VB || null === dB || null === VB) RB.b.Warn("VertexData contains empty entries");
        else {
          const gB = [],
            oB = [],
            kB = [],
            LB = [],
            OB = [],
            DB = [],
            uB = [],
            HB = [];
          let EB, vB = 0;
          const mB = {};
          let iB, NB;
          for (let BB = 0; BB < dB.length; BB += 3) {
            NB = [dB[BB], dB[BB + 1], dB[BB + 2]], EB = [];
            for (let BB = 0; BB < 3; BB++) {
              EB[BB] = "";
              for (let TB = 0; TB < 3; TB++) Math.abs(VB[3 * NB[BB] + TB]) < 1e-8 && (VB[3 * NB[BB] + TB] = 0), EB[BB] += VB[3 * NB[BB] + TB] + "|"
            }
            if (EB[0] != EB[1] && EB[0] != EB[2] && EB[1] != EB[2])
              for (let BB = 0; BB < 3; BB++) {
                if (iB = mB[EB[BB]], void 0 === iB) {
                  mB[EB[BB]] = vB, iB = vB++;
                  for (let TB = 0; TB < 3; TB++) gB.push(VB[3 * NB[BB] + TB]);
                  if (null !== yB && void 0 !== yB)
                    for (let TB = 0; TB < 4; TB++) LB.push(yB[4 * NB[BB] + TB]);
                  if (null !== TB && void 0 !== TB)
                    for (let dB = 0; dB < 2; dB++) kB.push(TB[2 * NB[BB] + dB]);
                  if (null !== pB && void 0 !== pB)
                    for (let TB = 0; TB < 4; TB++) OB.push(pB[4 * NB[BB] + TB]);
                  if (null !== lB && void 0 !== lB)
                    for (let TB = 0; TB < 4; TB++) DB.push(lB[4 * NB[BB] + TB]);
                  if (null !== JB && void 0 !== JB)
                    for (let TB = 0; TB < 4; TB++) uB.push(JB[4 * NB[BB] + TB]);
                  if (null !== YB && void 0 !== YB)
                    for (let TB = 0; TB < 4; TB++) HB.push(YB[4 * NB[BB] + TB])
                }
                oB.push(iB)
              }
          }
          const tB = [];
          UB.d.ComputeNormals(gB, oB, tB), BB.positions = gB, BB.indices = oB, BB.normals = tB, null !== TB && void 0 !== TB && (BB.uvs = kB), null !== yB && void 0 !== yB && (BB.colors = LB), null !== pB && void 0 !== pB && (BB.matricesIndices = OB), null !== lB && void 0 !== lB && (BB.matricesWeights = DB), null !== JB && void 0 !== JB && (BB.matricesIndicesExtra = uB), null !== lB && void 0 !== lB && (BB.matricesWeightsExtra = HB), BB.applyToMesh(this, this.isVertexBufferUpdatable(wB.m.PositionKind))
        }
      }
      static _instancedMeshFactory(BB, TB) {
        throw (0, ZB.i)("InstancedMesh")
      }
      static _PhysicsImpostorParser(BB, TB, dB) {
        throw (0, ZB.i)("PhysicsImpostor")
      }
      createInstance(BB) {
        const TB = bB._instancedMeshFactory(BB, this);
        return TB.parent = this.parent, TB
      }
      synchronizeInstances() {
        for (let BB = 0; BB < this.instances.length; BB++) {
          this.instances[BB]._syncSubMeshes()
        }
        return this
      }
      optimizeIndices(BB) {
        const TB = this.elB(),
          dB = this.getVerticesData(wB.m.PositionKind);
        if (!dB || !TB) return this;
        const VB = [];
        for (let pB = 0; pB < dB.length; pB += 3) VB.push(sB.p.FromArray(dB, pB));
        const yB = [];
        return vB.c.SyncAsyncForLoop(VB.length, 40, (BB => {
          const TB = VB.length - 1 - BB,
            dB = VB[TB];
          for (let pB = 0; pB < TB; ++pB) {
            const BB = VB[pB];
            if (dB.equals(BB)) {
              yB[TB] = pB;
              break
            }
          }
        }), (() => {
          for (let BB = 0; BB < TB.length; ++BB) TB[BB] = yB[TB[BB]] || TB[BB];
          const dB = this.oN.slice(0);
          this.setIndices(TB), this.oN = dB, BB && BB(this)
        })), this
      }
      serialize() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        BB.name = this.name, BB.id = this.id, BB.uniqueId = this.uniqueId, BB.type = this.getClassName(), NB.c && NB.c.HasTags(this) && (BB.tags = NB.c.GetTags(this)), BB.position = this.position.FVB(), this.rotationQuaternion ? BB.rotationQuaternion = this.rotationQuaternion.FVB() : this.rotation && (BB.rotation = this.rotation.FVB()), BB.al = this.al.FVB(), this._postMultiplyPivotMatrix ? BB.pivotMatrix = this.getPivotMatrix().FVB() : BB.localMatrix = this.getPivotMatrix().FVB(), BB.isEnabled = this.isEnabled(!1), BB.isVisible = this.isVisible, BB.infiniteDistance = this.infiniteDistance, BB.pickable = this.xu, BB.receiveShadows = this.receiveShadows, BB.billboardMode = this.billboardMode, BB.visibility = this.visibility, BB.QD = this.QD, BB.checkCollisions = this.checkCollisions, BB.ellipsoid = this.ellipsoid.FVB(), BB.ellipsoidOffset = this.ellipsoidOffset.FVB(), BB.ZD = this.ZD, BB.isBlocker = this.isBlocker, BB.sideOrientation = this.sideOrientation, this._isWorldMatrixFrozen && (BB.uF = !0), this.parent && this.parent._serializeAsParent(BB), BB.isUnIndexed = this.isUnIndexed;
        const TB = this._geometry;
        if (TB && this.oN) {
          BB.geometryUniqueId = TB.uniqueId, BB.geometryId = TB.id, BB.oN = [];
          for (let TB = 0; TB < this.oN.length; TB++) {
            const dB = this.oN[TB];
            BB.oN.push({
              materialIndex: dB.materialIndex,
              verticesStart: dB.verticesStart,
              verticesCount: dB.verticesCount,
              indexStart: dB.indexStart,
              indexCount: dB.indexCount
            })
          }
        }
        if (this.material ? this.material.doNotSerialize || (BB.materialUniqueId = this.material.uniqueId, BB.materialId = this.material.id) : (this.material = null, BB.materialUniqueId = this._scene.defaultMaterial.uniqueId, BB.materialId = this._scene.defaultMaterial.id), this.morphTargetManager && (BB.morphTargetManagerId = this.morphTargetManager.uniqueId), this.skeleton && (BB.skeletonId = this.skeleton.id, BB.skeletonUniqueId = this.skeleton.uniqueId, BB.numBoneInfluencers = this.numBoneInfluencers), this.jU()._getComponent(XB.b.NAME_PHYSICSENGINE)) {
          const TB = this.getPhysicsImpostor?.();
          TB && (BB.physicsMass = TB.getParam("ho"), BB.physicsFriction = TB.getParam("friction"), BB.physicsRestitution = TB.getParam("ho"), BB.physicsImpostor = TB.type)
        }
        this.metadata && (BB.metadata = this.metadata), 0 !== this.meshBlendingTag && (BB.meshBlendingTag = this.meshBlendingTag), BB.instances = [];
        for (let dB = 0; dB < this.instances.length; dB++) {
          const TB = this.instances[dB];
          if (TB.doNotSerialize) continue;
          const VB = {
            name: TB.name,
            id: TB.id,
            isEnabled: TB.isEnabled(!1),
            isVisible: TB.isVisible,
            xu: TB.xu,
            checkCollisions: TB.checkCollisions,
            position: TB.position.FVB(),
            al: TB.al.FVB()
          };
          if (TB.parent && TB.parent._serializeAsParent(VB), TB.rotationQuaternion ? VB.rotationQuaternion = TB.rotationQuaternion.FVB() : TB.rotation && (VB.rotation = TB.rotation.FVB()), this.jU()._getComponent(XB.b.NAME_PHYSICSENGINE)) {
            const BB = TB.getPhysicsImpostor?.();
            BB && (VB.physicsMass = BB.getParam("ho"), VB.physicsFriction = BB.getParam("friction"), VB.physicsRestitution = BB.getParam("ho"), VB.physicsImpostor = BB.type)
          }
          TB.metadata && (VB.metadata = TB.metadata), TB.actionManager && (VB.actions = TB.actionManager.serialize(TB.name)), BB.instances.push(VB), QB.c.AppendSerializedAnimations(TB, VB), VB.ek = TB.serializeAnimationRanges()
        }
        if (this._thinInstanceDataStorage.instancesCount && this._thinInstanceDataStorage.matrixData && (BB.thinInstances = {
            instancesCount: this._thinInstanceDataStorage.instancesCount,
            matrixData: Array.from(this._thinInstanceDataStorage.matrixData),
            matrixBufferSize: this._thinInstanceDataStorage.matrixBufferSize,
            enablePicking: this.xTB
          }, this._userThinInstanceBuffersStorage)) {
          const TB = {
            data: {},
            sizes: {},
            strides: {}
          };
          for (const BB in this._userThinInstanceBuffersStorage.data) TB.data[BB] = Array.from(this._userThinInstanceBuffersStorage.data[BB]), TB.sizes[BB] = this._userThinInstanceBuffersStorage.sizes[BB], TB.strides[BB] = this._userThinInstanceBuffersStorage.strides[BB];
          BB.thinInstances.userThinInstance = TB
        }
        return QB.c.AppendSerializedAnimations(this, BB), BB.ek = this.serializeAnimationRanges(), BB.layerMask = this.layerMask, BB.alphaIndex = this.alphaIndex, BB.hasVertexAlpha = this.hasVertexAlpha, BB.overlayAlpha = this.overlayAlpha, BB.overlayColor = this.overlayColor.FVB(), BB.renderOverlay = this.renderOverlay, BB.applyFog = this.applyFog, this.actionManager && (BB.actions = this.actionManager.serialize(this.name)), BB
      }
      _syncGeometryWithMorphTargetManager() {
        if (!this.geometry) return;
        this._markSubMeshesAsAttributesDirty();
        const BB = this._internalAbstractMeshDataInfo._morphTargetManager;
        if (BB && BB.vertexCount) {
          if (BB.vertexCount !== this.getTotalVertices()) return RB.b.Error("Mesh is incompatible with morph targets. Targets and mesh must all have the same vertices count."), void(this.morphTargetManager = null);
          if (BB.isUsingTextureForTargets) return;
          for (let TB = 0; TB < BB.numInfluencers; TB++) {
            const dB = BB.getActiveTarget(TB),
              VB = dB.getPositions();
            if (!VB) return void RB.b.Error("Invalid morph target. Target must have positions.");
            this.geometry.setVerticesData(wB.m.PositionKind + TB, VB, !1, 3);
            const yB = dB.getNormals();
            yB && this.geometry.setVerticesData(wB.m.NormalKind + TB, yB, !1, 3);
            const pB = dB.getTangents();
            pB && this.geometry.setVerticesData(wB.m.TangentKind + TB, pB, !1, 3);
            const lB = dB.getUVs();
            lB && this.geometry.setVerticesData(wB.m.UVKind + "_" + TB, lB, !1, 2);
            const JB = dB.getUV2s();
            JB && this.geometry.setVerticesData(wB.m.UV2Kind + "_" + TB, JB, !1, 2);
            const YB = dB.getColors();
            YB && this.geometry.setVerticesData(wB.m.ColorKind + TB, YB, !1, 4)
          }
        } else {
          let BB = 0;
          for (; this.geometry.isVerticesDataPresent(wB.m.PositionKind + BB);) this.geometry.removeVerticesData(wB.m.PositionKind + BB), this.geometry.isVerticesDataPresent(wB.m.NormalKind + BB) && this.geometry.removeVerticesData(wB.m.NormalKind + BB), this.geometry.isVerticesDataPresent(wB.m.TangentKind + BB) && this.geometry.removeVerticesData(wB.m.TangentKind + BB), this.geometry.isVerticesDataPresent(wB.m.UVKind + "_" + BB) && this.geometry.removeVerticesData(wB.m.UVKind + "_" + BB), this.geometry.isVerticesDataPresent(wB.m.UV2Kind + "_" + BB) && this.geometry.removeVerticesData(wB.m.UV2Kind + "_" + BB), this.geometry.isVerticesDataPresent(wB.m.ColorKind + BB) && this.geometry.removeVerticesData(wB.m.ColorKind + BB), BB++
        }
      }
      static Parse(BB, TB, dB) {
        let VB, yB = !1;
        if (BB.type && "LinesMesh" === BB.type ? VB = bB._LinesMeshParser(BB, TB) : BB.type && "GroundMesh" === BB.type ? VB = bB._GroundMeshParser(BB, TB) : BB.type && "GoldbergMesh" === BB.type ? VB = bB._GoldbergMeshParser(BB, TB) : BB.type && "GreasedLineMesh" === BB.type ? VB = bB._GreasedLineMeshParser(BB, TB) : BB.type && "TrailMesh" === BB.type ? VB = bB._TrailMeshParser(BB, TB) : BB.type && "GaussianSplattingMesh" === BB.type ? (VB = BB._isCompound ? bB._GaussianSplattingCompoundMeshParser(BB, TB) : bB._GaussianSplattingMeshParser(BB, TB), yB = !0) : BB.type && "GaussianSplattingPartProxyMesh" === BB.type ? (VB = bB._GaussianSplattingPartProxyMeshParser(BB, TB), yB = !0) : VB = new bB(BB.name, TB), VB.id = BB.id, VB._waitingParsedUniqueId = BB.uniqueId, NB.c && NB.c.AddTagsTo(VB, BB.tags), VB.position = sB.p.FromArray(BB.position), void 0 !== BB.metadata && (VB.metadata = BB.metadata), void 0 !== BB.meshBlendingTag && (VB.meshBlendingTag = BB.meshBlendingTag), BB.rotationQuaternion ? VB.rotationQuaternion = sB.f.FromArray(BB.rotationQuaternion) : BB.rotation && (VB.rotation = sB.p.FromArray(BB.rotation)), VB.al = sB.p.FromArray(BB.al), BB.localMatrix ? VB.setPreTransformMatrix(sB.b.FromArray(BB.localMatrix)) : BB.pivotMatrix && VB.setPivotMatrix(sB.b.FromArray(BB.pivotMatrix)), VB.hN(BB.isEnabled), VB.isVisible = BB.isVisible, VB.infiniteDistance = BB.infiniteDistance, VB.QD = !!BB.QD, VB.showBoundingBox = BB.showBoundingBox, VB.showSubMeshesBoundingBox = BB.showSubMeshesBoundingBox, void 0 !== BB.applyFog && (VB.applyFog = BB.applyFog), void 0 !== BB.pickable && (VB.xu = BB.pickable), void 0 !== BB.alphaIndex && (VB.alphaIndex = BB.alphaIndex), VB.receiveShadows = BB.receiveShadows, void 0 !== BB.billboardMode && (VB.billboardMode = BB.billboardMode), void 0 !== BB.visibility && (VB.visibility = BB.visibility), VB.checkCollisions = BB.checkCollisions, VB.ZD = !!BB.ZD, BB.ellipsoid && (VB.ellipsoid = sB.p.FromArray(BB.ellipsoid)), BB.ellipsoidOffset && (VB.ellipsoidOffset = sB.p.FromArray(BB.ellipsoidOffset)), null != BB.overrideMaterialSideOrientation && (VB.sideOrientation = BB.overrideMaterialSideOrientation), void 0 !== BB.sideOrientation && (VB.sideOrientation = BB.sideOrientation), void 0 !== BB.isBlocker && (VB.isBlocker = BB.isBlocker), VB._shouldGenerateFlatShading = BB.useFlatShading, BB.uF && (VB._waitingData.uF = BB.uF), void 0 !== BB.parentId && (VB._waitingParentId = BB.parentId), void 0 !== BB.parentInstanceIndex && (VB._waitingParentInstanceIndex = BB.parentInstanceIndex), void 0 !== BB.actions && (VB._waitingData.actions = BB.actions), void 0 !== BB.overlayAlpha && (VB.overlayAlpha = BB.overlayAlpha), void 0 !== BB.overlayColor && (VB.overlayColor = MB.c.FromArray(BB.overlayColor)), void 0 !== BB.renderOverlay && (VB.renderOverlay = BB.renderOverlay), VB.isUnIndexed = !!BB.isUnIndexed, VB.hasVertexAlpha = BB.hasVertexAlpha, BB.delayLoadingFile ? (VB.delayLoadState = 4, VB.delayLoadingFile = dB + BB.delayLoadingFile, VB.buildBoundingInfo(sB.p.FromArray(BB.boundingBoxMinimum), sB.p.FromArray(BB.boundingBoxMaximum)), BB._binaryInfo && (VB._binaryInfo = BB._binaryInfo), VB._delayInfo = [], BB.hasUVs && VB._delayInfo.push(wB.m.UVKind), BB.hasUVs2 && VB._delayInfo.push(wB.m.UV2Kind), BB.hasUVs3 && VB._delayInfo.push(wB.m.UV3Kind), BB.hasUVs4 && VB._delayInfo.push(wB.m.UV4Kind), BB.hasUVs5 && VB._delayInfo.push(wB.m.UV5Kind), BB.hasUVs6 && VB._delayInfo.push(wB.m.UV6Kind), BB.hasColors && VB._delayInfo.push(wB.m.ColorKind), BB.hasMatricesIndices && VB._delayInfo.push(wB.m.MatricesIndicesKind), BB.hasMatricesWeights && VB._delayInfo.push(wB.m.MatricesWeightsKind), VB._delayLoadingFunction = FB.b._ImportGeometry, PB.b.ForceFullSceneLoadingForIncremental && VB._checkDelayState()) : yB || FB.b._ImportGeometry(BB, VB), BB.materialUniqueId ? VB._waitingMaterialId = BB.materialUniqueId : BB.materialId && (VB._waitingMaterialId = BB.materialId), BB.morphTargetManagerId > -1 && (VB._waitingMorphTargetManagerId = BB.morphTargetManagerId), void 0 !== BB.skeletonId && null !== BB.skeletonId && (VB.skeleton = TB.getLastSkeletonById(BB.skeletonId), VB._waitingSkeletonId = BB.skeletonId, BB.numBoneInfluencers && (VB.numBoneInfluencers = BB.numBoneInfluencers)), void 0 !== BB.skeletonUniqueId && null !== BB.skeletonUniqueId && (VB._waitingSkeletonUniqueId = BB.skeletonUniqueId), BB.animations) {
          for (let TB = 0; TB < BB.animations.length; TB++) {
            const dB = BB.animations[TB],
              yB = (0, aB.e)("BABYLON.Animation");
            yB && VB.animations.push(yB.Parse(dB))
          }
          zB.e.ParseAnimationRanges(VB, BB, TB)
        }
        if (BB.autoAnimate && TB.beginAnimation(VB, BB.autoAnimateFrom, BB.autoAnimateTo, BB.autoAnimateLoop, BB.autoAnimateSpeed || 1), BB.layerMask && !isNaN(BB.layerMask) ? VB.layerMask = Math.abs(parseInt(BB.layerMask)) : VB.layerMask = 268435455, BB.physicsImpostor && (VB.physicsImpostor = bB._PhysicsImpostorParser(TB, VB, BB)), BB.lodMeshIds && (VB._waitingData.lods = {
            ids: BB.lodMeshIds,
            distances: BB.lodDistances ? BB.lodDistances : null,
            coverages: BB.lodCoverages ? BB.lodCoverages : null
          }), BB.instances)
          for (let pB = 0; pB < BB.instances.length; pB++) {
            const dB = BB.instances[pB],
              yB = VB.createInstance(dB.name);
            if (dB.id && (yB.id = dB.id), NB.c && (dB.tags ? NB.c.AddTagsTo(yB, dB.tags) : NB.c.AddTagsTo(yB, BB.tags)), yB.position = sB.p.FromArray(dB.position), void 0 !== dB.metadata && (yB.metadata = dB.metadata), void 0 !== dB.parentId && (yB._waitingParentId = dB.parentId), void 0 !== dB.parentInstanceIndex && (yB._waitingParentInstanceIndex = dB.parentInstanceIndex), void 0 !== dB.isEnabled && null !== dB.isEnabled && yB.hN(dB.isEnabled), void 0 !== dB.isVisible && null !== dB.isVisible && (yB.isVisible = dB.isVisible), void 0 !== dB.xu && null !== dB.xu && (yB.xu = dB.xu), dB.rotationQuaternion ? yB.rotationQuaternion = sB.f.FromArray(dB.rotationQuaternion) : dB.rotation && (yB.rotation = sB.p.FromArray(dB.rotation)), yB.al = sB.p.FromArray(dB.al), void 0 != dB.checkCollisions && null != dB.checkCollisions && (yB.checkCollisions = dB.checkCollisions), void 0 != dB.pickable && null != dB.pickable && (yB.xu = dB.pickable), void 0 != dB.showBoundingBox && null != dB.showBoundingBox && (yB.showBoundingBox = dB.showBoundingBox), void 0 != dB.showSubMeshesBoundingBox && null != dB.showSubMeshesBoundingBox && (yB.showSubMeshesBoundingBox = dB.showSubMeshesBoundingBox), void 0 != dB.alphaIndex && null != dB.showSubMeshesBoundingBox && (yB.alphaIndex = dB.alphaIndex), dB.physicsImpostor && (yB.physicsImpostor = bB._PhysicsImpostorParser(TB, yB, dB)), void 0 !== dB.actions && (yB._waitingData.actions = dB.actions), dB.animations) {
              for (let BB = 0; BB < dB.animations.length; BB++) {
                const TB = dB.animations[BB],
                  VB = (0, aB.e)("BABYLON.Animation");
                VB && yB.animations.push(VB.Parse(TB))
              }
              zB.e.ParseAnimationRanges(yB, dB, TB), dB.autoAnimate && TB.beginAnimation(yB, dB.autoAnimateFrom, dB.autoAnimateTo, dB.autoAnimateLoop, dB.autoAnimateSpeed || 1)
            }
          }
        if (BB.thinInstances) {
          const TB = BB.thinInstances;
          if (VB.xTB = !!TB.enablePicking, TB.matrixData ? (VB.dBB("matrix", new Float32Array(TB.matrixData), 16, !1), VB._thinInstanceDataStorage.matrixBufferSize = TB.matrixBufferSize, VB._thinInstanceDataStorage.instancesCount = TB.instancesCount) : VB._thinInstanceDataStorage.matrixBufferSize = TB.matrixBufferSize, BB.thinInstances.userThinInstance) {
            const TB = BB.thinInstances.userThinInstance;
            for (const BB in TB.data) VB.dBB(BB, new Float32Array(TB.data[BB]), TB.strides[BB], !1), VB._userThinInstanceBuffersStorage.sizes[BB] = TB.sizes[BB]
          }
        }
        return VB
      }
      setPositionsForCPUSkinning() {
        const BB = this._internalMeshDataInfo;
        if (!BB._sourcePositions) {
          const TB = this.getVerticesData(wB.m.PositionKind);
          if (!TB) return BB._sourcePositions;
          BB._sourcePositions = new Float32Array(TB), this.isVertexBufferUpdatable(wB.m.PositionKind) || this.setVerticesData(wB.m.PositionKind, TB, !0)
        }
        return BB._sourcePositions
      }
      setNormalsForCPUSkinning() {
        const BB = this._internalMeshDataInfo;
        if (!BB._sourceNormals) {
          const TB = this.getVerticesData(wB.m.NormalKind);
          if (!TB) return BB._sourceNormals;
          BB._sourceNormals = new Float32Array(TB), this.isVertexBufferUpdatable(wB.m.NormalKind) || this.setVerticesData(wB.m.NormalKind, TB, !0)
        }
        return BB._sourceNormals
      }
      applySkeleton(BB) {
        if (!this.geometry) return this;
        if (this.geometry._softwareSkinningFrameId == this.jU().getFrameId()) return this;
        if (this.geometry._softwareSkinningFrameId = this.jU().getFrameId(), !this.isVerticesDataPresent(wB.m.PositionKind)) return this;
        if (!this.isVerticesDataPresent(wB.m.MatricesIndicesKind)) return this;
        if (!this.isVerticesDataPresent(wB.m.MatricesWeightsKind)) return this;
        const TB = this.isVerticesDataPresent(wB.m.NormalKind),
          dB = this._internalMeshDataInfo;
        if (!dB._sourcePositions) {
          const BB = this.oN.slice();
          this.setPositionsForCPUSkinning(), this.oN = BB
        }
        TB && !dB._sourceNormals && this.setNormalsForCPUSkinning();
        let VB = this.getVerticesData(wB.m.PositionKind);
        if (!VB) return this;
        VB instanceof Float32Array || (VB = new Float32Array(VB));
        let yB = this.getVerticesData(wB.m.NormalKind);
        if (TB) {
          if (!yB) return this;
          yB instanceof Float32Array || (yB = new Float32Array(yB))
        }
        const pB = this.getVerticesData(wB.m.MatricesIndicesKind),
          lB = this.getVerticesData(wB.m.MatricesWeightsKind);
        if (!lB || !pB) return this;
        const JB = this.numBoneInfluencers > 4,
          YB = JB ? this.getVerticesData(wB.m.MatricesIndicesExtraKind) : null,
          gB = JB ? this.getVerticesData(wB.m.MatricesWeightsExtraKind) : null,
          oB = BB.getTransformMatrices(this),
          kB = sB.p.Zero(),
          LB = new sB.b,
          OB = new sB.b;
        let DB, uB = 0;
        for (let HB = 0; HB < VB.length; HB += 3, uB += 4) {
          let BB;
          for (DB = 0; DB < 4; DB++) BB = lB[uB + DB], BB > 0 && (sB.b.FromFloat32ArrayToRefScaled(oB, Math.floor(16 * pB[uB + DB]), BB, OB), LB.addToSelf(OB));
          if (JB)
            for (DB = 0; DB < 4; DB++) BB = gB[uB + DB], BB > 0 && (sB.b.FromFloat32ArrayToRefScaled(oB, Math.floor(16 * YB[uB + DB]), BB, OB), LB.addToSelf(OB));
          sB.p.TransformCoordinatesFromFloatsToRef(dB._sourcePositions[HB], dB._sourcePositions[HB + 1], dB._sourcePositions[HB + 2], LB, kB), kB.toArray(VB, HB), TB && (sB.p.TransformNormalFromFloatsToRef(dB._sourceNormals[HB], dB._sourceNormals[HB + 1], dB._sourceNormals[HB + 2], LB, kB), kB.toArray(yB, HB)), LB.reset()
        }
        return this.updateVerticesData(wB.m.PositionKind, VB), TB && this.updateVerticesData(wB.m.NormalKind, yB), this
      }
      static MinMax(BB) {
        let TB = null,
          dB = null;
        for (const VB of BB) {
          const BB = VB.IK().boundingBox;
          TB && dB ? (TB.minimizeInPlace(BB.minimumWorld), dB.maximizeInPlace(BB.maximumWorld)) : (TB = BB.minimumWorld.clone(), dB = BB.maximumWorld.clone())
        }
        return TB && dB ? {
          min: TB,
          max: dB
        } : {
          min: sB.p.Zero(),
          max: sB.p.Zero()
        }
      }
      static Center(BB) {
        const TB = BB instanceof Array ? bB.MinMax(BB) : BB;
        return sB.p.Center(TB.min, TB.max)
      }
      static MergeMeshes(BB) {
        let TB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          dB = arguments.length > 2 ? arguments[2] : void 0,
          VB = arguments.length > 3 ? arguments[3] : void 0,
          yB = arguments.length > 4 ? arguments[4] : void 0,
          pB = arguments.length > 5 ? arguments[5] : void 0;
        return (0, tB.j)(bB._MergeMeshesCoroutine(BB, TB, dB, VB, yB, pB, !1))
      }
      static async MergeMeshesAsync(BB) {
        let TB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          dB = arguments.length > 2 ? arguments[2] : void 0,
          VB = arguments.length > 3 ? arguments[3] : void 0,
          yB = arguments.length > 4 ? arguments[4] : void 0,
          pB = arguments.length > 5 ? arguments[5] : void 0;
        return await (0, tB.f)(bB._MergeMeshesCoroutine(BB, TB, dB, VB, yB, pB, !0), (0, tB.b)())
      }
      static * _MergeMeshesCoroutine(BB) {
        let TB, dB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          VB = arguments.length > 2 ? arguments[2] : void 0,
          yB = arguments.length > 3 ? arguments[3] : void 0,
          pB = arguments.length > 4 ? arguments[4] : void 0,
          lB = arguments.length > 5 ? arguments[5] : void 0,
          JB = arguments.length > 6 ? arguments[6] : void 0;
        if (0 === (BB = BB.filter(Boolean)).length) return null;
        if (!VB) {
          let dB = 0;
          for (TB = 0; TB < BB.length; TB++)
            if (dB += BB[TB].getTotalVertices(), dB >= 65536) return RB.b.Warn("Cannot merge meshes because resulting mesh will have more than 65536 vertices. Please use allow32BitsIndices = true to use 32 bits indices"), null
        }
        const YB = BB[0];
        lB && (pB = !1, BB.sort(((BB, TB) => (BB.material?.uniqueId ?? -1) - (TB.material?.uniqueId ?? -1))));
        const gB = new Array,
          oB = new Array,
          kB = new Array,
          LB = BB[0].sideOrientation;
        for (TB = 0; TB < BB.length; TB++) {
          const dB = BB[TB];
          if (dB.JF) return RB.b.Warn("Cannot merge instance meshes."), null;
          if (LB !== dB.sideOrientation) return RB.b.Warn("Cannot merge meshes with different sideOrientation values."), null;
          if (pB || lB) {
            const BB = kB.reduce(((BB, TB) => Math.max(BB, TB.start + TB.count)), 0);
            if (lB)
              if (dB.material) {
                const TB = dB.material;
                if (TB instanceof SB.b) {
                  for (let BB = 0; BB < TB.yBB.length; BB++) gB.indexOf(TB.yBB[BB]) < 0 && gB.push(TB.yBB[BB]);
                  for (let VB = 0; VB < dB.oN.length; VB++) oB.push(gB.indexOf(TB.yBB[dB.oN[VB].materialIndex])), kB.push({
                    start: BB + dB.oN[VB].indexStart,
                    count: dB.oN[VB].indexCount
                  })
                } else {
                  gB.indexOf(TB) < 0 && gB.push(TB);
                  for (let VB = 0; VB < dB.oN.length; VB++) oB.push(gB.indexOf(TB)), kB.push({
                    start: BB + dB.oN[VB].indexStart,
                    count: dB.oN[VB].indexCount
                  })
                }
              } else
                for (let TB = 0; TB < dB.oN.length; TB++) oB.push(0), kB.push({
                  start: BB + dB.oN[TB].indexStart,
                  count: dB.oN[TB].indexCount
                });
            else kB.push({
              start: BB,
              count: dB.getTotalIndices()
            })
          }
        }
        if (lB && kB.length > 1) {
          let BB = 0;
          for (let TB = 1; TB < kB.length; TB++) {
            const dB = kB[BB],
              VB = kB[TB];
            oB[TB] === oB[BB] && dB.start + dB.count === VB.start ? dB.count += VB.count : (BB++, kB[BB] = VB, oB[BB] = oB[TB])
          }
          kB.length = BB + 1, oB.length = BB + 1
        }
        const OB = BB => {
            const TB = BB.computeWorldMatrix(!0);
            return {
              vertexData: UB.d.ExtractFromMesh(BB, !1, !1),
              transform: TB
            }
          },
          {
            vertexData: DB,
            transform: uB
          } = OB(BB[0]);
        JB && (yield);
        const HB = new Array(BB.length - 1);
        for (let tB = 1; tB < BB.length; tB++) HB[tB - 1] = OB(BB[tB]), JB && (yield);
        const EB = DB._mergeCoroutine(uB, HB, VB, JB, !dB);
        let vB = EB.next();
        for (; !vB.done;) JB && (yield), vB = EB.next();
        const mB = vB.value;
        yB || (yB = new bB(YB.name + "_merged", YB.jU()));
        const iB = mB._applyToCoroutine(yB, void 0, JB);
        let NB = iB.next();
        for (; !NB.done;) JB && (yield), NB = iB.next();
        if (yB.checkCollisions = YB.checkCollisions, yB.sideOrientation = YB.sideOrientation, dB)
          for (TB = 0; TB < BB.length; TB++) BB[TB].dispose();
        if (pB || lB) {
          for (yB.releaseSubMeshes(), TB = 0; TB < kB.length;) rB.c.CreateFromIndices(0, kB[TB].start, kB[TB].count, yB, void 0, !1), TB++;
          for (const BB of yB.oN) BB.refreshBoundingInfo();
          yB.computeWorldMatrix(!0)
        }
        if (lB) {
          const BB = new SB.b(YB.name + "_merged", YB.jU());
          BB.yBB = gB;
          for (let TB = 0; TB < yB.oN.length; TB++) yB.oN[TB].materialIndex = oB[TB];
          yB.material = BB
        } else yB.material = YB.material;
        return yB
      }
      E1(BB) {
        BB._indexInSourceMeshInstanceArray = this.instances.length, this.instances.push(BB)
      }
      T6(BB) {
        const TB = BB._indexInSourceMeshInstanceArray;
        if (-1 != TB) {
          if (TB !== this.instances.length - 1) {
            const BB = this.instances[this.instances.length - 1];
            this.instances[TB] = BB, BB._indexInSourceMeshInstanceArray = TB
          }
          BB._indexInSourceMeshInstanceArray = -1, this.instances.pop()
        }
      }
      _shouldConvertRHS() {
        return this._scene.useRightHandedSystem && this.sideOrientation === IB.b.CounterClockWiseSideOrientation
      }
      _getRenderingFillMode(BB) {
        const TB = this.jU();
        return TB.forcePointsCloud ? IB.b.PointFillMode : TB.forceWireframe ? IB.b.WireFrameFillMode : this.overrideRenderingFillMode ?? BB
      }
      setMaterialByID(BB) {
        return this.setMaterialById(BB)
      }
      static CreateRibbon(BB, TB, dB, VB, yB, pB, lB, JB, YB) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDisc(BB, TB, dB, VB, yB, pB) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateBox(BB, TB, dB, VB, yB) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateSphere(BB, TB, dB, VB, yB, pB) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateHemisphere(BB, TB, dB, VB) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateCylinder(BB, TB, dB, VB, yB, pB, lB, JB, YB) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTorus(BB, TB, dB, VB, yB, pB, lB) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTorusKnot(BB, TB, dB, VB, yB, pB, lB, JB, YB, gB) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateLines(BB, TB, dB, VB, yB) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDashedLines(BB, TB, dB, VB, yB, pB, lB, JB) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePolygon(BB, TB, dB, VB, yB, pB, lB) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudePolygon(BB, TB, dB, VB, yB, pB, lB, JB) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudeShape(BB, TB, dB, VB, yB, pB, lB, JB, YB, gB) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudeShapeCustom(BB, TB, dB, VB, yB, pB, lB, JB, YB, gB, oB, kB) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateLathe(BB, TB, dB, VB, yB, pB, lB) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePlane(BB, TB, dB, VB, yB) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateGround(BB, TB, dB, VB, yB, pB) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTiledGround(BB, TB, dB, VB, yB, pB, lB, JB, YB) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateGroundFromHeightMap(BB, TB, dB, VB, yB, pB, lB, JB, YB, gB, oB) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTube(BB, TB, dB, VB, yB, pB, lB, JB, YB, gB) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePolyhedron(BB, TB, dB) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateIcoSphere(BB, TB, dB) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDecal(BB, TB, dB, VB, yB, pB) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateCapsule(BB, TB, dB) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtendToGoldberg(BB) {
        throw new Error("Import MeshBuilder to populate this function")
      }
    }
    bB.FRONTSIDE = UB.d.FRONTSIDE, bB.BACKSIDE = UB.d.BACKSIDE, bB.DOUBLESIDE = UB.d.DOUBLESIDE, bB.DEFAULTSIDE = UB.d.DEFAULTSIDE, bB.NO_CAP = 0, bB.CAP_START = 1, bB.CAP_END = 2, bB.CAP_ALL = 3, bB.NO_FLIP = 0, bB.FLIP_TILE = 1, bB.ROTATE_TILE = 2, bB.FLIP_ROW = 3, bB.ROTATE_ROW = 4, bB.FLIP_N_ROTATE_TILE = 5, bB.FLIP_N_ROTATE_ROW = 6, bB.CENTER = 0, bB.LEFT = 1, bB.RIGHT = 2, bB.TOP = 3, bB.BOTTOM = 4, bB.INSTANCEDMESH_SORT_TRANSPARENT = !1, bB._GroundMeshParser = (BB, TB) => {
      throw (0, ZB.i)("GroundMesh")
    }, bB._GoldbergMeshParser = (BB, TB) => {
      throw (0, ZB.i)("GoldbergMesh")
    }, bB._LinesMeshParser = (BB, TB) => {
      throw (0, ZB.i)("LinesMesh")
    }, bB._GreasedLineMeshParser = (BB, TB) => {
      throw (0, ZB.i)("GreasedLineMesh")
    }, bB._GreasedLineRibbonMeshParser = (BB, TB) => {
      throw (0, ZB.i)("GreasedLineRibbonMesh")
    }, bB._TrailMeshParser = (BB, TB) => {
      throw (0, ZB.i)("TrailMesh")
    }, bB._GaussianSplattingMeshParser = (BB, TB) => {
      throw (0, ZB.i)("GaussianSplattingMesh")
    }, bB._GaussianSplattingPartProxyMeshParser = (BB, TB) => {
      throw (0, ZB.i)("GaussianSplattingPartProxyMesh")
    }, bB._GaussianSplattingCompoundMeshParser = (BB, TB) => {
      throw (0, ZB.i)("GaussianSplattingCompoundMesh")
    };
    let nB = !1;

    function eB() {
      nB || (nB = !0, (0, aB.g)("BABYLON.Mesh", bB))
    }(VB = bB.prototype).fK ?? (VB.fK = (0, ZB.h)("Mesh", "fK")), (yB = bB.prototype).simplify ?? (yB.simplify = (0, ZB.h)("Mesh", "simplify")), (pB = bB.prototype).thinInstanceAdd ?? (pB.thinInstanceAdd = (0, ZB.h)("Mesh", "thinInstanceAdd")), (lB = bB.prototype).thinInstanceAddSelf ?? (lB.thinInstanceAddSelf = (0, ZB.h)("Mesh", "thinInstanceAddSelf")), (JB = bB.prototype).thinInstanceRegisterAttribute ?? (JB.thinInstanceRegisterAttribute = (0, ZB.h)("Mesh", "thinInstanceRegisterAttribute")), (YB = bB.prototype).thinInstanceSetMatrixAt ?? (YB.thinInstanceSetMatrixAt = (0, ZB.h)("Mesh", "thinInstanceSetMatrixAt")), (gB = bB.prototype).thinInstanceSetAttributeAt ?? (gB.thinInstanceSetAttributeAt = (0, ZB.h)("Mesh", "thinInstanceSetAttributeAt")), (oB = bB.prototype).dBB ?? (oB.dBB = (0, ZB.h)("Mesh", "dBB")), (kB = bB.prototype).thinInstanceGetWorldMatrices ?? (kB.thinInstanceGetWorldMatrices = (0, ZB.h)("Mesh", "thinInstanceGetWorldMatrices")), (LB = bB.prototype).U6 ?? (LB.U6 = (0, ZB.h)("Mesh", "U6")), (OB = bB.prototype).thinInstancePartialBufferUpdate ?? (OB.thinInstancePartialBufferUpdate = (0, ZB.h)("Mesh", "thinInstancePartialBufferUpdate")), (DB = bB.prototype).thinInstanceRefreshBoundingInfo ?? (DB.thinInstanceRefreshBoundingInfo = (0, ZB.h)("Mesh", "thinInstanceRefreshBoundingInfo")), (uB = bB.prototype).getEmittedParticleSystems ?? (uB.getEmittedParticleSystems = (0, ZB.h)("Mesh", "getEmittedParticleSystems")), (HB = bB.prototype).getHierarchyEmittedParticleSystems ?? (HB.getHierarchyEmittedParticleSystems = (0, ZB.h)("Mesh", "getHierarchyEmittedParticleSystems")), Object.getOwnPropertyDescriptor(bB.prototype, "edgesShareWithInstances") || Object.defineProperty(bB.prototype, "edgesShareWithInstances", (0, ZB.d)("Mesh", "edgesShareWithInstances")), Object.getOwnPropertyDescriptor(bB.prototype, "xTB") || Object.defineProperty(bB.prototype, "xTB", (0, ZB.d)("Mesh", "xTB")), Object.getOwnPropertyDescriptor(bB.prototype, "thinInstanceAllowAutomaticStaticBufferRecreation") || Object.defineProperty(bB.prototype, "thinInstanceAllowAutomaticStaticBufferRecreation", (0, ZB.d)("Mesh", "thinInstanceAllowAutomaticStaticBufferRecreation")), Object.getOwnPropertyDescriptor(bB.prototype, "K9") || Object.defineProperty(bB.prototype, "K9", (0, ZB.d)("Mesh", "K9"))
  },
  39156: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => DB
    });
    var VB = dB(38745),
      yB = dB(36126),
      pB = dB(38897),
      lB = dB(38629),
      JB = dB(36183),
      YB = dB(37651),
      gB = dB(38750),
      oB = dB(39149),
      kB = dB(38808),
      LB = dB(39045);
    class OB {}
    let DB = (() => {
      var BB;
      let TB, dB, DB, uB, HB = [];
      return BB = class {
        constructor() {
          this.uniqueId = 0, this.metadata = {}, this._applyTo = (0, oB.e)(this._applyToCoroutine.bind(this)), this.uniqueId = BB._UniqueIdGenerator, BB._UniqueIdGenerator++
        }
        set(BB, TB) {
          switch (BB.length || YB.b.Warn(`Setting vertex data kind '${TB}' with an empty array`), TB) {
            case pB.m.PositionKind:
              this.positions = BB;
              break;
            case pB.m.NormalKind:
              this.normals = BB;
              break;
            case pB.m.TangentKind:
              this.tangents = BB;
              break;
            case pB.m.UVKind:
              this.uvs = BB;
              break;
            case pB.m.UV2Kind:
              this.uvs2 = BB;
              break;
            case pB.m.UV3Kind:
              this.uvs3 = BB;
              break;
            case pB.m.UV4Kind:
              this.uvs4 = BB;
              break;
            case pB.m.UV5Kind:
              this.uvs5 = BB;
              break;
            case pB.m.UV6Kind:
              this.uvs6 = BB;
              break;
            case pB.m.ColorKind:
              this.colors = BB;
              break;
            case pB.m.MatricesIndicesKind:
              this.matricesIndices = BB;
              break;
            case pB.m.MatricesWeightsKind:
              this.matricesWeights = BB;
              break;
            case pB.m.MatricesIndicesExtraKind:
              this.matricesIndicesExtra = BB;
              break;
            case pB.m.MatricesWeightsExtraKind:
              this.matricesWeightsExtra = BB
          }
        }
        applyToMesh(BB, TB) {
          return this._applyTo(BB, TB, !1), this
        }
        applyToGeometry(BB, TB) {
          return this._applyTo(BB, TB, !1), this
        }
        updateMesh(BB) {
          return this._update(BB), this
        }
        updateGeometry(BB) {
          return this._update(BB), this
        }* _applyToCoroutine(BB) {
          let TB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            dB = arguments.length > 2 ? arguments[2] : void 0;
          if (this.positions && (BB.setVerticesData(pB.m.PositionKind, this.positions, TB), dB && (yield)), this.normals && (BB.setVerticesData(pB.m.NormalKind, this.normals, TB), dB && (yield)), this.tangents && (BB.setVerticesData(pB.m.TangentKind, this.tangents, TB), dB && (yield)), this.uvs && (BB.setVerticesData(pB.m.UVKind, this.uvs, TB), dB && (yield)), this.uvs2 && (BB.setVerticesData(pB.m.UV2Kind, this.uvs2, TB), dB && (yield)), this.uvs3 && (BB.setVerticesData(pB.m.UV3Kind, this.uvs3, TB), dB && (yield)), this.uvs4 && (BB.setVerticesData(pB.m.UV4Kind, this.uvs4, TB), dB && (yield)), this.uvs5 && (BB.setVerticesData(pB.m.UV5Kind, this.uvs5, TB), dB && (yield)), this.uvs6 && (BB.setVerticesData(pB.m.UV6Kind, this.uvs6, TB), dB && (yield)), this.colors) {
            const VB = this.positions && this.colors.length === this.positions.length ? 3 : 4;
            BB.setVerticesData(pB.m.ColorKind, this.colors, TB, VB), this.hasVertexAlpha && void 0 !== BB.hasVertexAlpha && (BB.hasVertexAlpha = !0), dB && (yield)
          }
          if (this.matricesIndices && (BB.setVerticesData(pB.m.MatricesIndicesKind, this.matricesIndices, TB), dB && (yield)), this.matricesWeights && (BB.setVerticesData(pB.m.MatricesWeightsKind, this.matricesWeights, TB), dB && (yield)), this.matricesIndicesExtra && (BB.setVerticesData(pB.m.MatricesIndicesExtraKind, this.matricesIndicesExtra, TB), dB && (yield)), this.matricesWeightsExtra && (BB.setVerticesData(pB.m.MatricesWeightsExtraKind, this.matricesWeightsExtra, TB), dB && (yield)), this.indices ? (BB.setIndices(this.indices, null, TB), dB && (yield)) : BB.setIndices([], null), BB.oN && this.materialInfos && this.materialInfos.length > 1) {
            const TB = BB;
            TB.oN = [];
            for (const BB of this.materialInfos) new LB.c(BB.materialIndex, BB.verticesStart, BB.verticesCount, BB.indexStart, BB.indexCount, TB)
          }
          return this
        }
        _update(BB, TB, dB) {
          return this.positions && BB.updateVerticesData(pB.m.PositionKind, this.positions, TB, dB), this.normals && BB.updateVerticesData(pB.m.NormalKind, this.normals, TB, dB), this.tangents && BB.updateVerticesData(pB.m.TangentKind, this.tangents, TB, dB), this.uvs && BB.updateVerticesData(pB.m.UVKind, this.uvs, TB, dB), this.uvs2 && BB.updateVerticesData(pB.m.UV2Kind, this.uvs2, TB, dB), this.uvs3 && BB.updateVerticesData(pB.m.UV3Kind, this.uvs3, TB, dB), this.uvs4 && BB.updateVerticesData(pB.m.UV4Kind, this.uvs4, TB, dB), this.uvs5 && BB.updateVerticesData(pB.m.UV5Kind, this.uvs5, TB, dB), this.uvs6 && BB.updateVerticesData(pB.m.UV6Kind, this.uvs6, TB, dB), this.colors && BB.updateVerticesData(pB.m.ColorKind, this.colors, TB, dB), this.matricesIndices && BB.updateVerticesData(pB.m.MatricesIndicesKind, this.matricesIndices, TB, dB), this.matricesWeights && BB.updateVerticesData(pB.m.MatricesWeightsKind, this.matricesWeights, TB, dB), this.matricesIndicesExtra && BB.updateVerticesData(pB.m.MatricesIndicesExtraKind, this.matricesIndicesExtra, TB, dB), this.matricesWeightsExtra && BB.updateVerticesData(pB.m.MatricesWeightsExtraKind, this.matricesWeightsExtra, TB, dB), this.indices && BB.setIndices(this.indices, null), this
        }
        static _TransformVector3Coordinates(BB, TB) {
          let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            VB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : BB.length;
          const pB = yB.j.RD[0],
            lB = yB.j.RD[1];
          for (let JB = dB; JB < dB + VB; JB += 3) yB.p.FromArrayToRef(BB, JB, pB), yB.p.TransformCoordinatesToRef(pB, TB, lB), BB[JB] = lB.x, BB[JB + 1] = lB.y, BB[JB + 2] = lB.z
        }
        static _TransformVector3Normals(BB, TB) {
          let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            VB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : BB.length;
          const pB = yB.j.RD[0],
            lB = yB.j.RD[1];
          for (let JB = dB; JB < dB + VB; JB += 3) yB.p.FromArrayToRef(BB, JB, pB), yB.p.TransformNormalToRef(pB, TB, lB), BB[JB] = lB.x, BB[JB + 1] = lB.y, BB[JB + 2] = lB.z
        }
        static _TransformVector4Normals(BB, TB) {
          let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            VB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : BB.length;
          const pB = yB.j.Vector4[0],
            lB = yB.j.Vector4[1];
          for (let JB = dB; JB < dB + VB; JB += 4) yB.r.FromArrayToRef(BB, JB, pB), yB.r.TransformNormalToRef(pB, TB, lB), BB[JB] = lB.x, BB[JB + 1] = lB.y, BB[JB + 2] = lB.z, BB[JB + 3] = lB.w
        }
        static _FlipFaces(BB) {
          let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : BB.length;
          for (let VB = TB; VB < TB + dB; VB += 3) {
            const TB = BB[VB + 1];
            BB[VB + 1] = BB[VB + 2], BB[VB + 2] = TB
          }
        }
        transform(TB) {
          const dB = TB.determinant() < 0;
          return this.positions && BB._TransformVector3Coordinates(this.positions, TB), this.normals && BB._TransformVector3Normals(this.normals, TB), this.tangents && BB._TransformVector4Normals(this.tangents, TB), dB && this.indices && BB._FlipFaces(this.indices), this
        }
        splitBasedOnMaterialID() {
          if (!this.materialInfos || this.materialInfos.length < 2) return [this];
          const TB = [];
          for (const dB of this.materialInfos) {
            const VB = new BB;
            if (this.positions && (VB.positions = this.positions.slice(3 * dB.verticesStart, 3 * (dB.verticesCount + dB.verticesStart))), this.normals && (VB.normals = this.normals.slice(3 * dB.verticesStart, 3 * (dB.verticesCount + dB.verticesStart))), this.tangents && (VB.tangents = this.tangents.slice(4 * dB.verticesStart, 4 * (dB.verticesCount + dB.verticesStart))), this.colors && (VB.colors = this.colors.slice(4 * dB.verticesStart, 4 * (dB.verticesCount + dB.verticesStart))), this.uvs && (VB.uvs = this.uvs.slice(2 * dB.verticesStart, 2 * (dB.verticesCount + dB.verticesStart))), this.uvs2 && (VB.uvs2 = this.uvs2.slice(2 * dB.verticesStart, 2 * (dB.verticesCount + dB.verticesStart))), this.uvs3 && (VB.uvs3 = this.uvs3.slice(2 * dB.verticesStart, 2 * (dB.verticesCount + dB.verticesStart))), this.uvs4 && (VB.uvs4 = this.uvs4.slice(2 * dB.verticesStart, 2 * (dB.verticesCount + dB.verticesStart))), this.uvs5 && (VB.uvs5 = this.uvs5.slice(2 * dB.verticesStart, 2 * (dB.verticesCount + dB.verticesStart))), this.uvs6 && (VB.uvs6 = this.uvs6.slice(2 * dB.verticesStart, 2 * (dB.verticesCount + dB.verticesStart))), this.matricesIndices && (VB.matricesIndices = this.matricesIndices.slice(4 * dB.verticesStart, 4 * (dB.verticesCount + dB.verticesStart))), this.matricesIndicesExtra && (VB.matricesIndicesExtra = this.matricesIndicesExtra.slice(4 * dB.verticesStart, 4 * (dB.verticesCount + dB.verticesStart))), this.matricesWeights && (VB.matricesWeights = this.matricesWeights.slice(4 * dB.verticesStart, 4 * (dB.verticesCount + dB.verticesStart))), this.matricesWeightsExtra && (VB.matricesWeightsExtra = this.matricesWeightsExtra.slice(4 * dB.verticesStart, 4 * (dB.verticesCount + dB.verticesStart))), this.indices) {
              VB.indices = [];
              for (let BB = dB.indexStart; BB < dB.indexStart + dB.indexCount; BB++) VB.indices.push(this.indices[BB] - dB.verticesStart)
            }
            const yB = new OB;
            yB.indexStart = 0, yB.indexCount = VB.indices ? VB.indices.length : 0, yB.materialIndex = dB.materialIndex, yB.verticesStart = 0, yB.verticesCount = (VB.positions ? VB.positions.length : 0) / 3, VB.materialInfos = [yB], TB.push(VB)
          }
          return TB
        }
        merge(BB) {
          let TB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            dB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            VB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            yB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
          const pB = Array.isArray(BB) ? BB.map((BB => ({
            vertexData: BB
          }))) : [{
            vertexData: BB
          }];
          return (0, oB.j)(this._mergeCoroutine(void 0, pB, TB, !1, dB, VB, yB))
        }* _mergeCoroutine(TB, dB) {
          let VB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            yB = arguments.length > 3 ? arguments[3] : void 0,
            lB = arguments.length > 4 ? arguments[4] : void 0,
            JB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
            YB = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
          this._validate();
          let gB = dB.map((BB => BB.vertexData)),
            oB = this;
          if (YB)
            for (const BB of gB) BB && (BB._validate(), !this.normals && BB.normals && (this.normals = new Float32Array(this.positions.length)), !this.tangents && BB.tangents && (this.tangents = new Float32Array(this.positions.length / 3 * 4)), !this.uvs && BB.uvs && (this.uvs = new Float32Array(this.positions.length / 3 * 2)), !this.uvs2 && BB.uvs2 && (this.uvs2 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs3 && BB.uvs3 && (this.uvs3 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs4 && BB.uvs4 && (this.uvs4 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs5 && BB.uvs5 && (this.uvs5 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs6 && BB.uvs6 && (this.uvs6 = new Float32Array(this.positions.length / 3 * 2)), !this.colors && BB.colors && (this.colors = new Float32Array(this.positions.length / 3 * 4), this.colors.fill(1)), !this.matricesIndices && BB.matricesIndices && (this.matricesIndices = new Float32Array(this.positions.length / 3 * 4)), !this.matricesWeights && BB.matricesWeights && (this.matricesWeights = new Float32Array(this.positions.length / 3 * 4)), !this.matricesIndicesExtra && BB.matricesIndicesExtra && (this.matricesIndicesExtra = new Float32Array(this.positions.length / 3 * 4)), !this.matricesWeightsExtra && BB.matricesWeightsExtra && (this.matricesWeightsExtra = new Float32Array(this.positions.length / 3 * 4)));
          for (const BB of gB)
            if (BB)
              if (YB) this.normals && !BB.normals && (BB.normals = new Float32Array(BB.positions.length)), this.tangents && !BB.tangents && (BB.tangents = new Float32Array(BB.positions.length / 3 * 4)), this.uvs && !BB.uvs && (BB.uvs = new Float32Array(BB.positions.length / 3 * 2)), this.uvs2 && !BB.uvs2 && (BB.uvs2 = new Float32Array(BB.positions.length / 3 * 2)), this.uvs3 && !BB.uvs3 && (BB.uvs3 = new Float32Array(BB.positions.length / 3 * 2)), this.uvs4 && !BB.uvs4 && (BB.uvs4 = new Float32Array(BB.positions.length / 3 * 2)), this.uvs5 && !BB.uvs5 && (BB.uvs5 = new Float32Array(BB.positions.length / 3 * 2)), this.uvs6 && !BB.uvs6 && (BB.uvs6 = new Float32Array(BB.positions.length / 3 * 2)), this.colors && !BB.colors && (BB.colors = new Float32Array(BB.positions.length / 3 * 4), BB.colors.fill(1)), this.matricesIndices && !BB.matricesIndices && (BB.matricesIndices = new Float32Array(BB.positions.length / 3 * 4)), this.matricesWeights && !BB.matricesWeights && (BB.matricesWeights = new Float32Array(BB.positions.length / 3 * 4)), this.matricesIndicesExtra && !BB.matricesIndicesExtra && (BB.matricesIndicesExtra = new Float32Array(BB.positions.length / 3 * 4)), this.matricesWeightsExtra && !BB.matricesWeightsExtra && (BB.matricesWeightsExtra = new Float32Array(BB.positions.length / 3 * 4));
              else if (BB._validate(), !this.normals !== !BB.normals || !this.tangents !== !BB.tangents || !this.uvs !== !BB.uvs || !this.uvs2 !== !BB.uvs2 || !this.uvs3 !== !BB.uvs3 || !this.uvs4 !== !BB.uvs4 || !this.uvs5 !== !BB.uvs5 || !this.uvs6 !== !BB.uvs6 || !this.colors !== !BB.colors || !this.matricesIndices !== !BB.matricesIndices || !this.matricesWeights !== !BB.matricesWeights || !this.matricesIndicesExtra !== !BB.matricesIndicesExtra || !this.matricesWeightsExtra !== !BB.matricesWeightsExtra) throw new Error("Cannot merge vertex data that do not have the same set of attributes");
          if (JB) {
            let BB, VB = 0,
              yB = 0;
            const pB = [];
            let lB = null;
            const JB = [];
            for (const dB of this.splitBasedOnMaterialID()) JB.push({
              vertexData: dB,
              transform: TB
            });
            for (const TB of dB)
              if (TB.vertexData)
                for (const BB of TB.vertexData.splitBasedOnMaterialID()) JB.push({
                  vertexData: BB,
                  transform: TB.transform
                });
            JB.sort(((BB, TB) => {
              const dB = BB.vertexData.materialInfos ? BB.vertexData.materialInfos[0].materialIndex : 0,
                VB = TB.vertexData.materialInfos ? TB.vertexData.materialInfos[0].materialIndex : 0;
              return dB > VB ? 1 : dB === VB ? 0 : -1
            }));
            for (const TB of JB) {
              const dB = TB.vertexData;
              if (BB = dB.materialInfos ? dB.materialInfos[0].materialIndex : 0, lB && lB.materialIndex === BB) lB.indexCount += dB.indices.length, lB.verticesCount += dB.positions.length / 3;
              else {
                const TB = new OB;
                TB.materialIndex = BB, TB.indexStart = VB, TB.indexCount = dB.indices.length, TB.verticesStart = yB, TB.verticesCount = dB.positions.length / 3, pB.push(TB), lB = TB
              }
              VB += dB.indices.length, yB += dB.positions.length / 3
            }
            const YB = JB.splice(0, 1)[0];
            oB = YB.vertexData, TB = YB.transform, gB = JB.map((BB => BB.vertexData)), dB = JB, this.materialInfos = pB
          }
          const kB = gB.reduce(((BB, TB) => BB + (TB.indices?.length ?? 0)), oB.indices?.length ?? 0);
          let LB = lB || gB.some((BB => BB.indices === oB.indices)) ? oB.indices?.slice() : oB.indices;
          if (kB > 0) {
            let pB = LB?.length ?? 0;
            if (LB || (LB = new Array(kB)), LB.length !== kB) {
              if (Array.isArray(LB)) LB.length = kB;
              else {
                const BB = VB || LB instanceof Uint32Array ? new Uint32Array(kB) : new Uint16Array(kB);
                BB.set(LB), LB = BB
              }
              TB && TB.determinant() < 0 && BB._FlipFaces(LB, 0, pB)
            }
            let lB = oB.positions ? oB.positions.length / 3 : 0;
            for (const {
                vertexData: TB,
                transform: VB
              }
              of dB)
              if (TB.indices) {
                for (let BB = 0; BB < TB.indices.length; BB++) LB[pB + BB] = TB.indices[BB] + lB;
                VB && VB.determinant() < 0 && BB._FlipFaces(LB, pB, TB.indices.length), lB += TB.positions.length / 3, pB += TB.indices.length, yB && (yield)
              }
          }
          return this.indices = LB, this.positions = BB._MergeElement(pB.m.PositionKind, oB.positions, TB, dB.map((BB => [BB.vertexData.positions, BB.transform]))), yB && (yield), oB.normals && (this.normals = BB._MergeElement(pB.m.NormalKind, oB.normals, TB, dB.map((BB => [BB.vertexData.normals, BB.transform]))), yB && (yield)), oB.tangents && (this.tangents = BB._MergeElement(pB.m.TangentKind, oB.tangents, TB, dB.map((BB => [BB.vertexData.tangents, BB.transform]))), yB && (yield)), oB.uvs && (this.uvs = BB._MergeElement(pB.m.UVKind, oB.uvs, TB, dB.map((BB => [BB.vertexData.uvs, BB.transform]))), yB && (yield)), oB.uvs2 && (this.uvs2 = BB._MergeElement(pB.m.UV2Kind, oB.uvs2, TB, dB.map((BB => [BB.vertexData.uvs2, BB.transform]))), yB && (yield)), oB.uvs3 && (this.uvs3 = BB._MergeElement(pB.m.UV3Kind, oB.uvs3, TB, dB.map((BB => [BB.vertexData.uvs3, BB.transform]))), yB && (yield)), oB.uvs4 && (this.uvs4 = BB._MergeElement(pB.m.UV4Kind, oB.uvs4, TB, dB.map((BB => [BB.vertexData.uvs4, BB.transform]))), yB && (yield)), oB.uvs5 && (this.uvs5 = BB._MergeElement(pB.m.UV5Kind, oB.uvs5, TB, dB.map((BB => [BB.vertexData.uvs5, BB.transform]))), yB && (yield)), oB.uvs6 && (this.uvs6 = BB._MergeElement(pB.m.UV6Kind, oB.uvs6, TB, dB.map((BB => [BB.vertexData.uvs6, BB.transform]))), yB && (yield)), oB.colors && (this.colors = BB._MergeElement(pB.m.ColorKind, oB.colors, TB, dB.map((BB => [BB.vertexData.colors, BB.transform]))), (void 0 !== oB.hasVertexAlpha || dB.some((BB => void 0 !== BB.vertexData.hasVertexAlpha))) && (this.hasVertexAlpha = oB.hasVertexAlpha || dB.some((BB => BB.vertexData.hasVertexAlpha))), yB && (yield)), oB.matricesIndices && (this.matricesIndices = BB._MergeElement(pB.m.MatricesIndicesKind, oB.matricesIndices, TB, dB.map((BB => [BB.vertexData.matricesIndices, BB.transform]))), yB && (yield)), oB.matricesWeights && (this.matricesWeights = BB._MergeElement(pB.m.MatricesWeightsKind, oB.matricesWeights, TB, dB.map((BB => [BB.vertexData.matricesWeights, BB.transform]))), yB && (yield)), oB.matricesIndicesExtra && (this.matricesIndicesExtra = BB._MergeElement(pB.m.MatricesIndicesExtraKind, oB.matricesIndicesExtra, TB, dB.map((BB => [BB.vertexData.matricesIndicesExtra, BB.transform]))), yB && (yield)), oB.matricesWeightsExtra && (this.matricesWeightsExtra = BB._MergeElement(pB.m.MatricesWeightsExtraKind, oB.matricesWeightsExtra, TB, dB.map((BB => [BB.vertexData.matricesWeightsExtra, BB.transform])))), this
        }
        static _MergeElement(TB, dB, VB, yB) {
          const lB = yB.filter((BB => null !== BB[0] && void 0 !== BB[0]));
          if (!dB && 0 == lB.length) return dB;
          if (!dB) return this._MergeElement(TB, lB[0][0], lB[0][1], lB.slice(1));
          const JB = lB.reduce(((BB, TB) => BB + TB[0].length), dB.length),
            YB = TB === pB.m.PositionKind ? BB._TransformVector3Coordinates : TB === pB.m.NormalKind ? BB._TransformVector3Normals : TB === pB.m.TangentKind ? BB._TransformVector4Normals : () => {};
          if (dB instanceof Float32Array) {
            const BB = new Float32Array(JB);
            BB.set(dB), VB && YB(BB, VB, 0, dB.length);
            let TB = dB.length;
            for (const [dB, VB] of lB) BB.set(dB, TB), VB && YB(BB, VB, TB, dB.length), TB += dB.length;
            return BB
          } {
            const BB = new Array(JB);
            for (let VB = 0; VB < dB.length; VB++) BB[VB] = dB[VB];
            VB && YB(BB, VB, 0, dB.length);
            let TB = dB.length;
            for (const [dB, VB] of lB) {
              for (let VB = 0; VB < dB.length; VB++) BB[TB + VB] = dB[VB];
              VB && YB(BB, VB, TB, dB.length), TB += dB.length
            }
            return BB
          }
        }
        _validate() {
          if (!this.positions) throw new kB.l("Positions are required", kB.h.MeshInvalidPositionsError);
          const BB = (BB, TB) => {
              const dB = (0, pB.k)(BB);
              if (TB.length % dB !== 0) throw new Error("The " + BB + "s array count must be a multiple of " + dB);
              return TB.length / dB
            },
            TB = BB(pB.m.PositionKind, this.positions),
            dB = (dB, VB) => {
              const yB = BB(dB, VB);
              if (yB !== TB) throw new Error("The " + dB + "s element count (" + yB + ") does not match the positions count (" + TB + ")")
            };
          this.normals && dB(pB.m.NormalKind, this.normals), this.tangents && dB(pB.m.TangentKind, this.tangents), this.uvs && dB(pB.m.UVKind, this.uvs), this.uvs2 && dB(pB.m.UV2Kind, this.uvs2), this.uvs3 && dB(pB.m.UV3Kind, this.uvs3), this.uvs4 && dB(pB.m.UV4Kind, this.uvs4), this.uvs5 && dB(pB.m.UV5Kind, this.uvs5), this.uvs6 && dB(pB.m.UV6Kind, this.uvs6), this.colors && dB(pB.m.ColorKind, this.colors), this.matricesIndices && dB(pB.m.MatricesIndicesKind, this.matricesIndices), this.matricesWeights && dB(pB.m.MatricesWeightsKind, this.matricesWeights), this.matricesIndicesExtra && dB(pB.m.MatricesIndicesExtraKind, this.matricesIndicesExtra), this.matricesWeightsExtra && dB(pB.m.MatricesWeightsExtraKind, this.matricesWeightsExtra)
        }
        clone() {
          const TB = this.serialize();
          return BB.Parse(TB)
        }
        serialize() {
          const BB = {};
          if (this.positions && (BB.positions = Array.from(this.positions)), this.normals && (BB.normals = Array.from(this.normals)), this.tangents && (BB.tangents = Array.from(this.tangents)), this.uvs && (BB.uvs = Array.from(this.uvs)), this.uvs2 && (BB.uvs2 = Array.from(this.uvs2)), this.uvs3 && (BB.uvs3 = Array.from(this.uvs3)), this.uvs4 && (BB.uvs4 = Array.from(this.uvs4)), this.uvs5 && (BB.uvs5 = Array.from(this.uvs5)), this.uvs6 && (BB.uvs6 = Array.from(this.uvs6)), this.colors && (BB.colors = Array.from(this.colors), BB.hasVertexAlpha = this.hasVertexAlpha), this.matricesIndices && (BB.matricesIndices = Array.from(this.matricesIndices), BB.matricesIndicesExpanded = !0), this.matricesWeights && (BB.matricesWeights = Array.from(this.matricesWeights)), this.matricesIndicesExtra && (BB.matricesIndicesExtra = Array.from(this.matricesIndicesExtra), BB.matricesIndicesExtraExpanded = !0), this.matricesWeightsExtra && (BB.matricesWeightsExtra = Array.from(this.matricesWeightsExtra)), BB.indices = this.indices ? Array.from(this.indices) : [], this.materialInfos) {
            BB.materialInfos = [];
            for (const TB of this.materialInfos) {
              const dB = {
                indexStart: TB.indexStart,
                indexCount: TB.indexCount,
                materialIndex: TB.materialIndex,
                verticesStart: TB.verticesStart,
                verticesCount: TB.verticesCount
              };
              BB.materialInfos.push(dB)
            }
          }
          return BB
        }
        static ExtractFromMesh(TB, dB, VB) {
          return BB._ExtractFrom(TB, dB, VB)
        }
        static ExtractFromGeometry(TB, dB, VB) {
          return BB._ExtractFrom(TB, dB, VB)
        }
        static _ExtractFrom(TB, dB, VB) {
          const yB = new BB;
          if (TB.isVerticesDataPresent(pB.m.PositionKind) && (yB.positions = TB.getVerticesData(pB.m.PositionKind, dB, VB)), TB.isVerticesDataPresent(pB.m.NormalKind) && (yB.normals = TB.getVerticesData(pB.m.NormalKind, dB, VB)), TB.isVerticesDataPresent(pB.m.TangentKind) && (yB.tangents = TB.getVerticesData(pB.m.TangentKind, dB, VB)), TB.isVerticesDataPresent(pB.m.UVKind) && (yB.uvs = TB.getVerticesData(pB.m.UVKind, dB, VB)), TB.isVerticesDataPresent(pB.m.UV2Kind) && (yB.uvs2 = TB.getVerticesData(pB.m.UV2Kind, dB, VB)), TB.isVerticesDataPresent(pB.m.UV3Kind) && (yB.uvs3 = TB.getVerticesData(pB.m.UV3Kind, dB, VB)), TB.isVerticesDataPresent(pB.m.UV4Kind) && (yB.uvs4 = TB.getVerticesData(pB.m.UV4Kind, dB, VB)), TB.isVerticesDataPresent(pB.m.UV5Kind) && (yB.uvs5 = TB.getVerticesData(pB.m.UV5Kind, dB, VB)), TB.isVerticesDataPresent(pB.m.UV6Kind) && (yB.uvs6 = TB.getVerticesData(pB.m.UV6Kind, dB, VB)), TB.isVerticesDataPresent(pB.m.ColorKind)) {
            const BB = TB.geometry || TB,
              lB = BB.getVertexBuffer(pB.m.ColorKind),
              JB = BB.getVerticesData(pB.m.ColorKind, dB, VB);
            if (3 === lB.getSize()) {
              const BB = new Float32Array(4 * JB.length / 3);
              for (let TB = 0, dB = 0; TB < JB.length; TB += 3, dB += 4) BB[dB] = JB[TB], BB[dB + 1] = JB[TB + 1], BB[dB + 2] = JB[TB + 2], BB[dB + 3] = 1;
              yB.colors = BB
            } else {
              if (4 !== lB.getSize()) throw new Error(`Unexpected number of color components: ${lB.getSize()}`);
              yB.colors = JB
            }
          }
          return TB.isVerticesDataPresent(pB.m.MatricesIndicesKind) && (yB.matricesIndices = TB.getVerticesData(pB.m.MatricesIndicesKind, dB, VB)), TB.isVerticesDataPresent(pB.m.MatricesWeightsKind) && (yB.matricesWeights = TB.getVerticesData(pB.m.MatricesWeightsKind, dB, VB)), TB.isVerticesDataPresent(pB.m.MatricesIndicesExtraKind) && (yB.matricesIndicesExtra = TB.getVerticesData(pB.m.MatricesIndicesExtraKind, dB, VB)), TB.isVerticesDataPresent(pB.m.MatricesWeightsExtraKind) && (yB.matricesWeightsExtra = TB.getVerticesData(pB.m.MatricesWeightsExtraKind, dB, VB)), yB.indices = TB.elB(dB, VB), yB
        }
        static CreateRibbon(BB) {
          throw (0, lB.i)("ribbonBuilder")
        }
        static CreateBox(BB) {
          throw (0, lB.i)("boxBuilder")
        }
        static CreateTiledBox(BB) {
          throw (0, lB.i)("tiledBoxBuilder")
        }
        static CreateTiledPlane(BB) {
          throw (0, lB.i)("tiledPlaneBuilder")
        }
        static CreateSphere(BB) {
          throw (0, lB.i)("sphereBuilder")
        }
        static CreateCylinder(BB) {
          throw (0, lB.i)("cylinderBuilder")
        }
        static CreateTorus(BB) {
          throw (0, lB.i)("torusBuilder")
        }
        static CreateLineSystem(BB) {
          throw (0, lB.i)("linesBuilder")
        }
        static CreateDashedLines(BB) {
          throw (0, lB.i)("linesBuilder")
        }
        static CreateGround(BB) {
          throw (0, lB.i)("groundBuilder")
        }
        static CreateTiledGround(BB) {
          throw (0, lB.i)("groundBuilder")
        }
        static CreateGroundFromHeightMap(BB) {
          throw (0, lB.i)("groundBuilder")
        }
        static CreatePlane(BB) {
          throw (0, lB.i)("planeBuilder")
        }
        static CreateDisc(BB) {
          throw (0, lB.i)("discBuilder")
        }
        static CreatePolygon(BB, TB, dB, VB, yB, pB, JB) {
          throw (0, lB.i)("polygonBuilder")
        }
        static CreateIcoSphere(BB) {
          throw (0, lB.i)("icoSphereBuilder")
        }
        static CreatePolyhedron(BB) {
          throw (0, lB.i)("polyhedronBuilder")
        }
        static CreateCapsule() {
          arguments.length > 0 && void 0 !== arguments[0] || yB.p.Up();
          throw (0, lB.i)("capsuleBuilder")
        }
        static CreateTorusKnot(BB) {
          throw (0, lB.i)("torusKnotBuilder")
        }
        static ComputeNormals(BB, TB, dB, VB) {
          let pB, lB, JB, YB, gB, oB, kB, LB, OB, DB, uB, HB, EB, vB, mB, iB, NB, tB, fB, sB, MB = !1,
            zB = !1,
            wB = !1,
            UB = !1,
            FB = 1,
            KB = 0,
            rB = null;
          VB && (MB = !!VB.facetNormals, zB = !!VB.facetPositions, wB = !!VB.facetPartitioning, FB = !0 === VB.useRightHandedSystem ? -1 : 1, KB = VB.ratio || 0, UB = !!VB.depthSort, rB = VB.distanceTo, UB && void 0 === rB && (rB = yB.p.Zero()));
          let IB = 0,
            cB = 0,
            SB = 0,
            PB = 0;
          for (wB && VB && VB.bbSize && (IB = VB.subDiv.X * KB / VB.bbSize.x, cB = VB.subDiv.Y * KB / VB.bbSize.y, SB = VB.subDiv.Z * KB / VB.bbSize.z, PB = VB.subDiv.max * VB.subDiv.max, VB.facetPartitioning.length = 0), pB = 0; pB < BB.length; pB++) dB[pB] = 0;
          const QB = TB.length / 3 | 0;
          for (pB = 0; pB < QB; pB++) {
            if (HB = 3 * TB[3 * pB], EB = HB + 1, vB = HB + 2, mB = 3 * TB[3 * pB + 1], iB = mB + 1, NB = mB + 2, tB = 3 * TB[3 * pB + 2], fB = tB + 1, sB = tB + 2, lB = BB[HB] - BB[mB], JB = BB[EB] - BB[iB], YB = BB[vB] - BB[NB], gB = BB[tB] - BB[mB], oB = BB[fB] - BB[iB], kB = BB[sB] - BB[NB], LB = FB * (JB * kB - YB * oB), OB = FB * (YB * gB - lB * kB), DB = FB * (lB * oB - JB * gB), uB = Math.sqrt(LB * LB + OB * OB + DB * DB), uB = 0 === uB ? 1 : uB, LB /= uB, OB /= uB, DB /= uB, MB && VB && (VB.facetNormals[pB].x = LB, VB.facetNormals[pB].y = OB, VB.facetNormals[pB].z = DB), zB && VB && (VB.facetPositions[pB].x = (BB[HB] + BB[mB] + BB[tB]) / 3, VB.facetPositions[pB].y = (BB[EB] + BB[iB] + BB[fB]) / 3, VB.facetPositions[pB].z = (BB[vB] + BB[NB] + BB[sB]) / 3), wB && VB) {
              const TB = Math.floor((VB.facetPositions[pB].x - VB.bInfo.minimum.x * KB) * IB),
                dB = Math.floor((VB.facetPositions[pB].y - VB.bInfo.minimum.y * KB) * cB),
                yB = Math.floor((VB.facetPositions[pB].z - VB.bInfo.minimum.z * KB) * SB),
                lB = Math.floor((BB[HB] - VB.bInfo.minimum.x * KB) * IB),
                JB = Math.floor((BB[EB] - VB.bInfo.minimum.y * KB) * cB),
                YB = Math.floor((BB[vB] - VB.bInfo.minimum.z * KB) * SB),
                gB = Math.floor((BB[mB] - VB.bInfo.minimum.x * KB) * IB),
                oB = Math.floor((BB[iB] - VB.bInfo.minimum.y * KB) * cB),
                kB = Math.floor((BB[NB] - VB.bInfo.minimum.z * KB) * SB),
                LB = Math.floor((BB[tB] - VB.bInfo.minimum.x * KB) * IB),
                OB = Math.floor((BB[fB] - VB.bInfo.minimum.y * KB) * cB),
                DB = Math.floor((BB[sB] - VB.bInfo.minimum.z * KB) * SB),
                uB = lB + VB.subDiv.max * JB + PB * YB,
                MB = gB + VB.subDiv.max * oB + PB * kB,
                zB = LB + VB.subDiv.max * OB + PB * DB,
                wB = TB + VB.subDiv.max * dB + PB * yB;
              VB.facetPartitioning[wB] = VB.facetPartitioning[wB] ? VB.facetPartitioning[wB] : [], VB.facetPartitioning[uB] = VB.facetPartitioning[uB] ? VB.facetPartitioning[uB] : [], VB.facetPartitioning[MB] = VB.facetPartitioning[MB] ? VB.facetPartitioning[MB] : [], VB.facetPartitioning[zB] = VB.facetPartitioning[zB] ? VB.facetPartitioning[zB] : [], VB.facetPartitioning[uB].push(pB), MB != uB && VB.facetPartitioning[MB].push(pB), zB != MB && zB != uB && VB.facetPartitioning[zB].push(pB), wB != uB && wB != MB && wB != zB && VB.facetPartitioning[wB].push(pB)
            }
            if (UB && VB && VB.facetPositions) {
              const BB = VB.depthSortedFacets[pB];
              BB.ind = 3 * pB, BB.sqDistance = yB.p.DistanceSquared(VB.facetPositions[pB], rB)
            }
            dB[HB] += LB, dB[EB] += OB, dB[vB] += DB, dB[mB] += LB, dB[iB] += OB, dB[NB] += DB, dB[tB] += LB, dB[fB] += OB, dB[sB] += DB
          }
          for (pB = 0; pB < dB.length / 3; pB++) LB = dB[3 * pB], OB = dB[3 * pB + 1], DB = dB[3 * pB + 2], uB = Math.sqrt(LB * LB + OB * OB + DB * DB), uB = 0 === uB ? 1 : uB, LB /= uB, OB /= uB, DB /= uB, dB[3 * pB] = LB, dB[3 * pB + 1] = OB, dB[3 * pB + 2] = DB
        }
        static _ComputeSides(TB, dB, VB, pB, lB, JB, YB) {
          const gB = VB.length,
            oB = pB.length;
          let kB, LB;
          switch (TB = TB || BB.DEFAULTSIDE) {
            case BB.FRONTSIDE:
              break;
            case BB.BACKSIDE:
              for (kB = 0; kB < gB; kB += 3) {
                const BB = VB[kB];
                VB[kB] = VB[kB + 2], VB[kB + 2] = BB
              }
              for (LB = 0; LB < oB; LB++) pB[LB] = -pB[LB];
              break;
            case BB.DOUBLESIDE: {
              const BB = dB.length,
                TB = BB / 3;
              for (let VB = 0; VB < BB; VB++) dB[BB + VB] = dB[VB];
              for (kB = 0; kB < gB; kB += 3) VB[kB + gB] = VB[kB + 2] + TB, VB[kB + 1 + gB] = VB[kB + 1] + TB, VB[kB + 2 + gB] = VB[kB] + TB;
              for (LB = 0; LB < oB; LB++) pB[oB + LB] = -pB[LB];
              const OB = lB.length;
              let DB;
              for (DB = 0; DB < OB; DB++) lB[DB + OB] = lB[DB];
              for (JB = JB || new yB.r(0, 0, 1, 1), YB = YB || new yB.r(0, 0, 1, 1), DB = 0, kB = 0; kB < OB / 2; kB++) lB[DB] = JB.x + (JB.z - JB.x) * lB[DB], lB[DB + 1] = JB.y + (JB.w - JB.y) * lB[DB + 1], lB[DB + OB] = YB.x + (YB.z - YB.x) * lB[DB + OB], lB[DB + OB + 1] = YB.y + (YB.w - YB.y) * lB[DB + OB + 1], DB += 2;
              break
            }
          }
        }
        static Parse(TB) {
          const dB = new BB,
            VB = TB.positions;
          VB && dB.set(VB, pB.m.PositionKind);
          const yB = TB.normals;
          yB && dB.set(yB, pB.m.NormalKind);
          const lB = TB.tangents;
          lB && dB.set(lB, pB.m.TangentKind);
          const YB = TB.uvs;
          YB && dB.set(YB, pB.m.UVKind);
          const gB = TB.uvs2;
          gB && dB.set(gB, pB.m.UV2Kind);
          const oB = TB.uvs3;
          oB && dB.set(oB, pB.m.UV3Kind);
          const kB = TB.uvs4;
          kB && dB.set(kB, pB.m.UV4Kind);
          const LB = TB.uvs5;
          LB && dB.set(LB, pB.m.UV5Kind);
          const DB = TB.uvs6;
          DB && dB.set(DB, pB.m.UV6Kind);
          const uB = TB.colors;
          uB && (dB.set(JB.d.CheckColors4(uB, VB.length / 3), pB.m.ColorKind), void 0 !== TB.hasVertexAlpha && (dB.hasVertexAlpha = TB.hasVertexAlpha));
          const HB = TB.matricesIndices;
          HB && dB.set(HB, pB.m.MatricesIndicesKind);
          const EB = TB.matricesWeights;
          EB && dB.set(EB, pB.m.MatricesWeightsKind);
          const vB = TB.indices;
          vB && (dB.indices = vB);
          const mB = TB.materialInfos;
          if (mB) {
            dB.materialInfos = [];
            for (const BB of mB) {
              const TB = new OB;
              TB.indexCount = BB.indexCount, TB.indexStart = BB.indexStart, TB.verticesCount = BB.verticesCount, TB.verticesStart = BB.verticesStart, TB.materialIndex = BB.materialIndex, dB.materialInfos.push(TB)
            }
          }
          return dB
        }
        static ImportVertexData(TB, dB) {
          const VB = BB.Parse(TB);
          dB.setAllVerticesData(VB, TB.updatable)
        }
      }, (() => {
        const yB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        TB = [gB.m.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], dB = [gB.m.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], DB = [gB.m.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], uB = [gB.m.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], (0, VB.g)(BB, null, TB, {
          kind: "method",
          name: "_TransformVector3Coordinates",
          static: !0,
          private: !1,
          access: {
            has: BB => "_TransformVector3Coordinates" in BB,
            get: BB => BB._TransformVector3Coordinates
          },
          metadata: yB
        }, null, HB), (0, VB.g)(BB, null, dB, {
          kind: "method",
          name: "_TransformVector3Normals",
          static: !0,
          private: !1,
          access: {
            has: BB => "_TransformVector3Normals" in BB,
            get: BB => BB._TransformVector3Normals
          },
          metadata: yB
        }, null, HB), (0, VB.g)(BB, null, DB, {
          kind: "method",
          name: "_TransformVector4Normals",
          static: !0,
          private: !1,
          access: {
            has: BB => "_TransformVector4Normals" in BB,
            get: BB => BB._TransformVector4Normals
          },
          metadata: yB
        }, null, HB), (0, VB.g)(BB, null, uB, {
          kind: "method",
          name: "_FlipFaces",
          static: !0,
          private: !1,
          access: {
            has: BB => "_FlipFaces" in BB,
            get: BB => BB._FlipFaces
          },
          metadata: yB
        }, null, HB), yB && Object.defineProperty(BB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: yB
        })
      })(), BB.FRONTSIDE = ((0, VB.h)(BB, HB), 0), BB.BACKSIDE = 1, BB.DOUBLESIDE = 2, BB.DEFAULTSIDE = 0, BB._UniqueIdGenerator = 0, BB
    })()
  },
  39222: (BB, TB, dB) => {
    var VB = dB(36126),
      yB = dB(37651),
      pB = dB(39058),
      lB = dB(39143),
      JB = dB(38897);
    const YB = "bakedVertexAnimationSettingsInstanced";

    function gB(BB) {
      const TB = BB.bakedVertexAnimationManager?.texture?.getInternalTexture()?._bufferView;
      return TB instanceof Float32Array || TB instanceof Uint16Array
    }

    function oB(BB, TB, dB, VB) {
      dB.A4(Number.POSITIVE_INFINITY), VB.A4(Number.NEGATIVE_INFINITY);
      for (let yB = 0; yB < 3 * TB; yB += 3) {
        const TB = BB[yB],
          pB = BB[yB + 1],
          lB = BB[yB + 2];
        TB < dB.x && (dB.x = TB), pB < dB.y && (dB.y = pB), lB < dB.z && (dB.z = lB), TB > VB.x && (VB.x = TB), pB > VB.y && (VB.y = pB), lB > VB.z && (VB.z = lB)
      }
    }

    function kB(BB, TB, dB) {
      dB && (BB.x -= BB.x * dB.x + dB.y, BB.y -= BB.y * dB.x + dB.y, BB.z -= BB.z * dB.x + dB.y, TB.x += TB.x * dB.x + dB.y, TB.y += TB.y * dB.x + dB.y, TB.z += TB.z * dB.x + dB.y)
    }

    function LB(BB, TB, dB, yB, pB) {
      const lB = VB.j.RD[7],
        JB = VB.j.RD[8];
      for (let YB = 0; YB < 2; ++YB)
        for (let gB = 0; gB < 2; ++gB)
          for (let oB = 0; oB < 2; ++oB) lB.set(YB ? TB.x : BB.x, gB ? TB.y : BB.y, oB ? TB.z : BB.z), VB.p.TransformCoordinatesToRef(lB, dB, JB), yB.minimizeInPlace(JB), pB.maximizeInPlace(JB)
    }

    function OB(BB, TB, dB, yB, pB) {
      const lB = VB.j.RD[7];
      for (let JB = 0; JB < 3 * TB; JB += 3) VB.p.TransformCoordinatesFromFloatsToRef(BB[JB], BB[JB + 1], BB[JB + 2], dB, lB), yB.minimizeInPlace(lB), pB.maximizeInPlace(lB)
    }
    let DB = !1;
    DB || (DB = !0, lB.e.prototype.thinInstanceAdd = function(BB) {
      let TB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (!this.jU().PD().getCaps().instancedArrays) return yB.b.Error("Thin Instances are not supported on this device as Instanced Array extension not supported"), -1;
      this._thinInstanceUpdateBufferSize("matrix", Array.isArray(BB) ? BB.length : 1);
      const dB = this._thinInstanceDataStorage.instancesCount;
      if (Array.isArray(BB))
        for (let VB = 0; VB < BB.length; ++VB) this.thinInstanceSetMatrixAt(this._thinInstanceDataStorage.instancesCount++, BB[VB], VB === BB.length - 1 && TB);
      else this.thinInstanceSetMatrixAt(this._thinInstanceDataStorage.instancesCount++, BB, TB);
      return dB
    }, lB.e.prototype.thinInstanceAddSelf = function() {
      let BB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      return this.thinInstanceAdd(VB.b.IdentityReadOnly, BB)
    }, lB.e.prototype.thinInstanceRegisterAttribute = function(BB, TB) {
      BB === JB.m.ColorKind && (BB = JB.m.ColorInstanceKind), this.removeVerticesData(BB), this._thinInstanceInitializeUserStorage(), this._userThinInstanceBuffersStorage.strides[BB] = TB, this._userThinInstanceBuffersStorage.sizes[BB] = TB * Math.max(32, this._thinInstanceDataStorage.instancesCount), this._userThinInstanceBuffersStorage.data[BB] = new Float32Array(this._userThinInstanceBuffersStorage.sizes[BB]), this._userThinInstanceBuffersStorage.vertexBuffers[BB] = new JB.m(this.PD(), this._userThinInstanceBuffersStorage.data[BB], BB, !0, !1, TB, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[BB])
    }, lB.e.prototype.thinInstanceSetMatrixAt = function(BB, TB) {
      let dB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      if (!this._thinInstanceDataStorage.matrixData || BB >= this._thinInstanceDataStorage.instancesCount) return !1;
      const VB = this._thinInstanceDataStorage.matrixData;
      return TB.copyToArray(VB, 16 * BB), this._thinInstanceDataStorage.worldMatrices && (this._thinInstanceDataStorage.worldMatrices[BB] = TB), dB && (this.U6("matrix"), this.ZD || this.thinInstanceRefreshBoundingInfo(!1)), !0
    }, lB.e.prototype.thinInstanceSetAttributeAt = function(BB, TB, dB) {
      let VB = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      return BB === JB.m.ColorKind && (BB = JB.m.ColorInstanceKind), !(!this._userThinInstanceBuffersStorage || !this._userThinInstanceBuffersStorage.data[BB] || TB >= this._thinInstanceDataStorage.instancesCount) && (this._thinInstanceUpdateBufferSize(BB, 0), this._userThinInstanceBuffersStorage.data[BB].set(dB, TB * this._userThinInstanceBuffersStorage.strides[BB]), VB && this.U6(BB), !0)
    }, Object.defineProperty(lB.e.prototype, "K9", {
      get: function() {
        return this._thinInstanceDataStorage.instancesCount
      },
      set: function(BB) {
        const TB = this._thinInstanceDataStorage.matrixData ?? this.source?._thinInstanceDataStorage.matrixData;
        BB <= (TB ? TB.length / 16 : 0) && (this._thinInstanceDataStorage.instancesCount = BB)
      },
      enumerable: !0,
      configurable: !0
    }), lB.e.prototype._thinInstanceCreateMatrixBuffer = function(BB, TB) {
      let dB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      const VB = new JB.d(this.PD(), TB, !dB, 16, !1, !0);
      for (let yB = 0; yB < 4; yB++) this.setVerticesBuffer(VB.createVertexBuffer(BB + yB, 4 * yB, 4));
      return VB
    }, lB.e.prototype.dBB = function(BB, TB) {
      let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        VB = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      if (dB = dB || 16, "matrix" === BB) this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = null, this._thinInstanceDataStorage.matrixBufferSize = TB ? TB.length : 32 * dB, this._thinInstanceDataStorage.matrixData = TB, this._thinInstanceDataStorage.worldMatrices = null, null !== TB ? (this._thinInstanceDataStorage.instancesCount = TB.length / dB, this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", TB, VB), this.ZD || this.thinInstanceRefreshBoundingInfo(!1)) : (this._thinInstanceDataStorage.instancesCount = 0, this.ZD || this.refreshBoundingInfo());
      else if ("previousMatrix" === BB) this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = null, this._thinInstanceDataStorage.previousMatrixData = TB, null !== TB && (this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", TB, VB));
      else if ("splatIndex" === BB && TB) {
        this._thinInstanceInitializeUserStorage(), this._thinInstanceDataStorage.instancesCount = TB.length / dB, this._userThinInstanceBuffersStorage.data[BB] = TB, this._userThinInstanceBuffersStorage.strides[BB] = dB, this._userThinInstanceBuffersStorage.sizes[BB] = TB.length;
        const VB = new JB.d(this.PD(), TB, !0, 16, !1, !0);
        this._thinInstanceDataStorage.matrixBuffer = VB;
        for (let TB = 0; TB < 4; TB++) this.setVerticesBuffer(VB.createVertexBuffer(BB + TB, 4 * TB, 4))
      } else BB === JB.m.ColorKind && (BB = JB.m.ColorInstanceKind), null === TB ? this._userThinInstanceBuffersStorage?.data[BB] && (this.removeVerticesData(BB), delete this._userThinInstanceBuffersStorage.data[BB], delete this._userThinInstanceBuffersStorage.strides[BB], delete this._userThinInstanceBuffersStorage.sizes[BB], delete this._userThinInstanceBuffersStorage.vertexBuffers[BB]) : (this._thinInstanceInitializeUserStorage(), this._userThinInstanceBuffersStorage.data[BB] = TB, this._userThinInstanceBuffersStorage.strides[BB] = dB, this._userThinInstanceBuffersStorage.sizes[BB] = TB.length, this._userThinInstanceBuffersStorage.vertexBuffers[BB] = new JB.m(this.PD(), TB, BB, !VB, !1, dB, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[BB]))
    }, lB.e.prototype.U6 = function(BB) {
      "matrix" === BB ? (this.thinInstanceAllowAutomaticStaticBufferRecreation && this._thinInstanceDataStorage.matrixBuffer && !this._thinInstanceDataStorage.matrixBuffer.isUpdatable() && this._thinInstanceRecreateBuffer(BB), this._thinInstanceDataStorage.matrixBuffer?.updateDirectly(this._thinInstanceDataStorage.matrixData, 0, this._thinInstanceDataStorage.instancesCount)) : "previousMatrix" === BB ? (this.thinInstanceAllowAutomaticStaticBufferRecreation && this._thinInstanceDataStorage.previousMatrixBuffer && !this._thinInstanceDataStorage.previousMatrixBuffer.isUpdatable() && this._thinInstanceRecreateBuffer(BB), this._thinInstanceDataStorage.previousMatrixBuffer?.updateDirectly(this._thinInstanceDataStorage.previousMatrixData, 0, this._thinInstanceDataStorage.instancesCount)) : "splatIndex" === BB ? this._thinInstanceDataStorage.matrixBuffer?.updateDirectly(this._userThinInstanceBuffersStorage.data[BB], 0, this._thinInstanceDataStorage.instancesCount) : (BB === JB.m.ColorKind && (BB = JB.m.ColorInstanceKind), this._userThinInstanceBuffersStorage?.vertexBuffers[BB] && (this.thinInstanceAllowAutomaticStaticBufferRecreation && !this._userThinInstanceBuffersStorage.vertexBuffers[BB].isUpdatable() && this._thinInstanceRecreateBuffer(BB), this._userThinInstanceBuffersStorage.vertexBuffers[BB].updateDirectly(this._userThinInstanceBuffersStorage.data[BB], 0)))
    }, lB.e.prototype.thinInstancePartialBufferUpdate = function(BB, TB, dB) {
      if ("matrix" === BB) this._thinInstanceDataStorage.matrixBuffer && ("number" === typeof TB ? this._thinInstanceDataStorage.matrixBuffer.updateDirectly(new Float32Array(this._thinInstanceDataStorage.matrixData.buffer, this._thinInstanceDataStorage.matrixData.byteOffset + 16 * dB * Float32Array.BYTES_PER_ELEMENT, 16 * TB), 16 * dB) : this._thinInstanceDataStorage.matrixBuffer.updateDirectly(TB, dB));
      else if (BB === JB.m.ColorKind && (BB = JB.m.ColorInstanceKind), this._userThinInstanceBuffersStorage?.vertexBuffers[BB]) {
        const VB = this._userThinInstanceBuffersStorage.vertexBuffers[BB];
        if ("number" === typeof TB) {
          const VB = new Float32Array(this._userThinInstanceBuffersStorage.data[BB].buffer, this._userThinInstanceBuffersStorage.data[BB].byteOffset + dB * this._userThinInstanceBuffersStorage.strides[BB] * Float32Array.BYTES_PER_ELEMENT, TB * this._userThinInstanceBuffersStorage.strides[BB]);
          this._userThinInstanceBuffersStorage.vertexBuffers[BB].updateDirectly(VB, dB * this._userThinInstanceBuffersStorage.strides[BB])
        } else VB.updateDirectly(TB, dB)
      }
    }, lB.e.prototype.thinInstanceGetWorldMatrices = function() {
      if (!this._thinInstanceDataStorage.matrixData || !this._thinInstanceDataStorage.matrixBuffer) return [];
      const BB = this._thinInstanceDataStorage.matrixData;
      if (!this._thinInstanceDataStorage.worldMatrices) {
        this._thinInstanceDataStorage.worldMatrices = [];
        for (let TB = 0; TB < this._thinInstanceDataStorage.instancesCount; ++TB) this._thinInstanceDataStorage.worldMatrices[TB] = VB.b.FromArray(BB, 16 * TB)
      }
      return this._thinInstanceDataStorage.worldMatrices
    }, lB.e.prototype.thinInstanceRefreshBoundingInfo = function() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        TB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        dB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        yB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!this._thinInstanceDataStorage.matrixData || !this._thinInstanceDataStorage.matrixBuffer) return;
      const lB = this._thinInstanceDataStorage.boundingVectors;
      if (BB || !this.rawBoundingInfo) {
        if (lB.length = 0, yB && function(BB, TB, dB) {
            const yB = BB._userThinInstanceBuffersStorage,
              lB = yB?.data[YB],
              DB = yB?.strides[YB];
            if (!lB || !DB || DB < 4 || !gB(BB)) return !1;
            const uB = BB._thinInstanceDataStorage.matrixData;
            if (!uB) return !1;
            const HB = {},
              EB = VB.j.Vector4[0],
              vB = VB.j.RD[1],
              mB = VB.j.RD[2],
              iB = VB.j.RD[3],
              NB = VB.j.RD[4],
              tB = VB.j.RD[5],
              fB = VB.j.RD[6],
              sB = VB.j.Matrix[2],
              MB = BB.geometry ? BB.geometry.boundingBias : null,
              zB = BB.getTotalVertices();
            vB.A4(Number.POSITIVE_INFINITY), mB.A4(Number.NEGATIVE_INFINITY), iB.A4(Number.POSITIVE_INFINITY), NB.A4(Number.NEGATIVE_INFINITY);
            for (let pB = 0; pB < BB._thinInstanceDataStorage.instancesCount; ++pB) {
              const TB = pB * DB;
              EB.set(lB[TB], lB[TB + 1], lB[TB + 2], lB[TB + 3]);
              const yB = BB._getData({
                applyMorph: dB,
                applyBakedVertexAnimation: !0,
                bakedVertexAnimationSettings: EB,
                updatePositionsArray: !1,
                cache: HB
              }, null, JB.m.PositionKind);
              if (!yB) return !1;
              oB(yB, zB, tB, fB), kB(tB, fB, MB), vB.minimizeInPlace(tB), mB.maximizeInPlace(fB), VB.b.FromArrayToRef(uB, 16 * pB, sB), MB ? LB(tB, fB, sB, iB, NB) : OB(yB, zB, sB, iB, NB)
            }
            return !(!isFinite(vB.x) || !isFinite(iB.x)) && (BB.IK().reConstruct(iB, NB), BB.rawBoundingInfo = new pB.b(vB, mB), function(BB, TB) {
              BB.length = 0;
              for (let dB = 0; dB < TB.boundingBox.vectors.length; ++dB) BB.push(TB.boundingBox.vectors[dB].clone())
            }(TB, BB.rawBoundingInfo), BB._updateBoundingInfo(), !0)
          }(this, lB, dB)) return;
        yB && this.bakedVertexAnimationManager?.isEnabled && gB(this) ? this.refreshBoundingInfo({
          applySkeleton: TB,
          applyMorph: dB,
          applyBakedVertexAnimation: !0,
          updatePositionsArray: !1
        }) : this.refreshBoundingInfo(TB, dB);
        const BB = this.IK();
        this.rawBoundingInfo = new pB.b(BB.minimum, BB.maximum)
      }
      const DB = this.IK(),
        uB = this._thinInstanceDataStorage.matrixData;
      if (0 === lB.length)
        for (let VB = 0; VB < DB.boundingBox.vectors.length; ++VB) lB.push(DB.boundingBox.vectors[VB].clone());
      VB.j.RD[0].A4(Number.POSITIVE_INFINITY), VB.j.RD[1].A4(Number.NEGATIVE_INFINITY);
      for (let pB = 0; pB < this._thinInstanceDataStorage.instancesCount; ++pB) {
        VB.b.FromArrayToRef(uB, 16 * pB, VB.j.Matrix[0]);
        for (let BB = 0; BB < lB.length; ++BB) VB.p.TransformCoordinatesToRef(lB[BB], VB.j.Matrix[0], VB.j.RD[2]), VB.j.RD[0].minimizeInPlace(VB.j.RD[2]), VB.j.RD[1].maximizeInPlace(VB.j.RD[2])
      }
      DB.reConstruct(VB.j.RD[0], VB.j.RD[1]), this._updateBoundingInfo()
    }, lB.e.prototype._thinInstanceRecreateBuffer = function(BB) {
      let TB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      "matrix" === BB ? (this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", this._thinInstanceDataStorage.matrixData, TB)) : "previousMatrix" === BB ? this._scene.needsPreviousWorldMatrices && (this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", this._thinInstanceDataStorage.previousMatrixData ?? this._thinInstanceDataStorage.matrixData, TB)) : (BB === JB.m.ColorKind && (BB = JB.m.ColorInstanceKind), this._userThinInstanceBuffersStorage.vertexBuffers[BB]?.dispose(), this._userThinInstanceBuffersStorage.vertexBuffers[BB] = new JB.m(this.PD(), this._userThinInstanceBuffersStorage.data[BB], BB, !TB, !1, this._userThinInstanceBuffersStorage.strides[BB], !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[BB]))
    }, lB.e.prototype._thinInstanceUpdateBufferSize = function(BB) {
      let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      BB === JB.m.ColorKind && (BB = JB.m.ColorInstanceKind);
      const dB = "matrix" === BB;
      if (!dB && (!this._userThinInstanceBuffersStorage || !this._userThinInstanceBuffersStorage.strides[BB])) return;
      const VB = dB ? 16 : this._userThinInstanceBuffersStorage.strides[BB],
        yB = dB ? this._thinInstanceDataStorage.matrixBufferSize : this._userThinInstanceBuffersStorage.sizes[BB];
      let pB = dB ? this._thinInstanceDataStorage.matrixData : this._userThinInstanceBuffersStorage.data[BB];
      const lB = (this._thinInstanceDataStorage.instancesCount + TB) * VB;
      let YB = yB;
      for (; YB < lB;) YB *= 2;
      if (!pB || yB != YB) {
        if (pB) {
          const BB = new Float32Array(YB);
          BB.set(pB, 0), pB = BB
        } else pB = new Float32Array(YB);
        dB ? (this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", pB, !1), this._thinInstanceDataStorage.matrixData = pB, this._thinInstanceDataStorage.matrixBufferSize = YB, this._scene.needsPreviousWorldMatrices && !this._thinInstanceDataStorage.previousMatrixData && (this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", pB, !1))) : (this._userThinInstanceBuffersStorage.vertexBuffers[BB]?.dispose(), this._userThinInstanceBuffersStorage.data[BB] = pB, this._userThinInstanceBuffersStorage.sizes[BB] = YB, this._userThinInstanceBuffersStorage.vertexBuffers[BB] = new JB.m(this.PD(), pB, BB, !0, !1, VB, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[BB]))
      }
    }, lB.e.prototype._thinInstanceInitializeUserStorage = function() {
      this._userThinInstanceBuffersStorage || (this._userThinInstanceBuffersStorage = {
        data: {},
        sizes: {},
        vertexBuffers: {},
        strides: {}
      })
    }, lB.e.prototype._disposeThinInstanceSpecificData = function() {
      this._thinInstanceDataStorage?.matrixBuffer && (this._thinInstanceDataStorage.matrixBuffer.dispose(), this._thinInstanceDataStorage.matrixBuffer = null), this._thinInstanceDataStorage?.previousMatrixBuffer && (this._thinInstanceDataStorage.previousMatrixBuffer.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = null)
    })
  },
  39187: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => vB,
      f: () => uB
    });
    var VB, yB, pB, lB, JB = dB(38745),
      YB = dB(38750),
      gB = dB(38772),
      oB = dB(36150),
      kB = dB(36126),
      LB = dB(38980),
      OB = dB(36166),
      DB = dB(38629);
    let uB = (() => {
      var BB;
      let TB, dB, VB, yB, pB, lB, OB, DB, uB, HB = LB.e,
        EB = [],
        vB = [],
        mB = [],
        iB = [],
        NB = [],
        tB = [],
        fB = [],
        sB = [],
        MB = [],
        zB = [],
        wB = [],
        UB = [],
        FB = [],
        KB = [],
        rB = [],
        IB = [],
        cB = [],
        SB = [];
      return BB = class extends HB {
        get billboardMode() {
          return this._billboardMode
        }
        set billboardMode(TB) {
          this._billboardMode !== TB && (this._billboardMode = TB, this._cache.useBillboardPosition = 0 !== (this._billboardMode & BB.BILLBOARDMODE_USE_POSITION))
        }
        get infiniteDistance() {
          return this._infiniteDistance
        }
        set infiniteDistance(BB) {
          this._infiniteDistance !== BB && (this._infiniteDistance = BB)
        }
        constructor(TB) {
          let dB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          super(TB, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, !1), this._forward = new kB.p(0, 0, 1), this._up = new kB.p(0, 1, 0), this._right = new kB.p(1, 0, 0), this._position = (0, JB.h)(this, EB, kB.p.Zero()), this._rotation = ((0, JB.h)(this, vB), (0, JB.h)(this, mB, kB.p.Zero())), this._rotationQuaternion = ((0, JB.h)(this, iB), (0, JB.h)(this, NB, null)), this._scaling = ((0, JB.h)(this, tB), (0, JB.h)(this, fB, kB.p.One())), this._transformToBoneReferal = ((0, JB.h)(this, sB), null), this._isAbsoluteSynced = !1, this._billboardMode = (0, JB.h)(this, MB, BB.BILLBOARDMODE_NONE), this.scalingDeterminant = ((0, JB.h)(this, zB), (0, JB.h)(this, wB, 1)), this._infiniteDistance = ((0, JB.h)(this, UB), (0, JB.h)(this, FB, !1)), this.ignoreNonUniformScaling = ((0, JB.h)(this, KB), (0, JB.h)(this, rB, !1)), this.reIntegrateRotationIntoRotationQuaternion = ((0, JB.h)(this, IB), (0, JB.h)(this, cB, !1)), this._poseMatrix = ((0, JB.h)(this, SB), null), this._localMatrix = kB.b.Zero(), this._usePivotMatrix = !1, this._absolutePosition = kB.p.Zero(), this._absoluteScaling = kB.p.Zero(), this._absoluteRotationQuaternion = kB.f.Identity(), this._pivotMatrix = kB.b.Identity(), this._postMultiplyPivotMatrix = !1, this._isWorldMatrixFrozen = !1, this._indexInSceneTransformNodesArray = -1, this.onAfterWorldMatrixUpdateObservable = new oB.e, this._nonUniformScaling = !1, dB && this.jU().addTransformNode(this)
        }
        getClassName() {
          return "TransformNode"
        }
        get position() {
          return this._position
        }
        set position(BB) {
          this._position = BB, this._markAsDirtyInternal()
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
        set rotation(BB) {
          this._rotation = BB, this._rotationQuaternion = null, this._markAsDirtyInternal()
        }
        get al() {
          return this._scaling
        }
        set al(BB) {
          this._scaling = BB, this._markAsDirtyInternal()
        }
        get rotationQuaternion() {
          return this._rotationQuaternion
        }
        set rotationQuaternion(BB) {
          this._rotationQuaternion = BB, BB && this._rotation.A4(0), this._markAsDirtyInternal()
        }
        _markAsDirtyInternal() {
          this._isDirty || (this._isDirty = !0, this.customMarkAsDirty && this.customMarkAsDirty())
        }
        get forward() {
          return kB.p.TransformNormalFromFloatsToRef(0, 0, this.jU().useRightHandedSystem ? -1 : 1, this.getWorldMatrix(), this._forward), this._forward.normalize()
        }
        get up() {
          return kB.p.TransformNormalFromFloatsToRef(0, 1, 0, this.getWorldMatrix(), this._up), this._up.normalize()
        }
        get right() {
          return kB.p.TransformNormalFromFloatsToRef(this.jU().useRightHandedSystem ? -1 : 1, 0, 0, this.getWorldMatrix(), this._right), this._right.normalize()
        }
        updatePoseMatrix(BB) {
          return this._poseMatrix ? (this._poseMatrix.bdB(BB), this) : (this._poseMatrix = BB.clone(), this)
        }
        getPoseMatrix() {
          return this._poseMatrix || (this._poseMatrix = kB.b.Identity()), this._poseMatrix
        }
        _isSynchronized() {
          const TB = this._cache;
          return this._billboardMode === TB.billboardMode && this._billboardMode === BB.BILLBOARDMODE_NONE && (!TB.pivotMatrixUpdated && (!this._infiniteDistance && (!this._position._isDirty && (!this._scaling._isDirty && !(this._rotationQuaternion && this._rotationQuaternion._isDirty || this._rotation._isDirty)))))
        }
        _initCache() {
          super._initCache();
          const BB = this._cache;
          BB.localMatrixUpdated = !1, BB.billboardMode = -1, BB.infiniteDistance = !1, BB.useBillboardPosition = !1
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
        setPreTransformMatrix(BB) {
          return this.setPivotMatrix(BB, !1)
        }
        setPivotMatrix(BB) {
          let TB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          return this._pivotMatrix.bdB(BB), this._usePivotMatrix = !this._pivotMatrix.isIdentity(), this._cache.pivotMatrixUpdated = !0, this._postMultiplyPivotMatrix = TB, this._postMultiplyPivotMatrix && (this._pivotMatrixInverse ? this._pivotMatrix.invertToRef(this._pivotMatrixInverse) : this._pivotMatrixInverse = kB.b.Invert(this._pivotMatrix)), this
        }
        getPivotMatrix() {
          return this._pivotMatrix
        }
        instantiateHierarchy() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            TB = arguments.length > 1 ? arguments[1] : void 0,
            dB = arguments.length > 2 ? arguments[2] : void 0;
          const VB = this.clone("Clone of " + (this.name || this.id), BB || this.parent, !0);
          VB && dB && dB(this, VB);
          for (const yB of this.getChildTransformNodes(!0)) yB.instantiateHierarchy(VB, TB, dB);
          return VB
        }
        uF() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return BB ? arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (this._rotation.A4(0), this._rotationQuaternion = this._rotationQuaternion || kB.f.Identity(), BB.decompose(this._scaling, this._rotationQuaternion, this._position), this.computeWorldMatrix(!0)) : (this._worldMatrix = BB, this._absolutePosition.YBB(this._worldMatrix.m[12], this._worldMatrix.m[13], this._worldMatrix.m[14]), this._afterComputeWorldMatrix()) : (this._isWorldMatrixFrozen = !1, this.computeWorldMatrix(!0)), this._isDirty = !1, this._isWorldMatrixFrozen = !0, this
        }
        unfreezeWorldMatrix() {
          return this._isWorldMatrixFrozen = !1, this.computeWorldMatrix(!0), this
        }
        get pJB() {
          return this._isWorldMatrixFrozen
        }
        getAbsolutePosition() {
          return this.computeWorldMatrix(), this._absolutePosition
        }
        setAbsolutePosition(BB) {
          if (!BB) return this;
          let TB, dB, VB;
          if (void 0 === BB.x) {
            if (arguments.length < 3) return this;
            TB = arguments[0], dB = arguments[1], VB = arguments[2]
          } else TB = BB.x, dB = BB.y, VB = BB.z;
          if (this.parent) {
            const BB = kB.j.Matrix[0];
            this.parent.getWorldMatrix().invertToRef(BB), kB.p.TransformCoordinatesFromFloatsToRef(TB, dB, VB, BB, this.position)
          } else this.position.x = TB, this.position.y = dB, this.position.z = VB;
          return this._absolutePosition.bdB(BB), this
        }
        setPositionWithLocalVector(BB) {
          return this.computeWorldMatrix(), this.position = kB.p.TransformNormal(BB, this._localMatrix), this
        }
        getPositionExpressedInLocalSpace() {
          this.computeWorldMatrix();
          const BB = kB.j.Matrix[0];
          return this._localMatrix.invertToRef(BB), kB.p.TransformNormal(this.position, BB)
        }
        locallyTranslate(BB) {
          return this.computeWorldMatrix(!0), this.position = kB.p.TransformCoordinates(BB, this._localMatrix), this
        }
        lookAt(TB) {
          let dB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            VB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            yB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
            pB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
          const lB = BB._LookAtVectorCache,
            JB = 0 === pB ? this.position : this.getAbsolutePosition();
          if (TB.subtractToRef(JB, lB), this.setDirection(lB, dB, VB, yB), 1 === pB && this.parent)
            if (this.rotationQuaternion) {
              const BB = kB.j.Matrix[0];
              this.rotationQuaternion.toRotationMatrix(BB);
              const TB = kB.j.Matrix[1];
              this.parent.getWorldMatrix().getRotationMatrixToRef(TB), TB.invert(), BB.multiplyToRef(TB, BB), this.rotationQuaternion.fromRotationMatrix(BB)
            } else {
              const BB = kB.j.Quaternion[0];
              kB.f.FromEulerVectorToRef(this.rotation, BB);
              const TB = kB.j.Matrix[0];
              BB.toRotationMatrix(TB);
              const dB = kB.j.Matrix[1];
              this.parent.getWorldMatrix().getRotationMatrixToRef(dB), dB.invert(), TB.multiplyToRef(dB, TB), BB.fromRotationMatrix(TB), BB.toEulerAnglesToRef(this.rotation)
            } return this
        }
        bq(BB) {
          const TB = kB.p.Zero();
          return this.getDirectionToRef(BB, TB), TB
        }
        getDirectionToRef(BB, TB) {
          return kB.p.TransformNormalToRef(BB, this.getWorldMatrix(), TB), this
        }
        setDirection(BB) {
          let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            VB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
          const yB = -Math.atan2(BB.z, BB.x) + Math.PI / 2,
            pB = Math.sqrt(BB.x * BB.x + BB.z * BB.z),
            lB = -Math.atan2(BB.y, pB);
          return this.rotationQuaternion ? kB.f.RotationYawPitchRollToRef(yB + TB, lB + dB, VB, this.rotationQuaternion) : (this.rotation.x = lB + dB, this.rotation.y = yB + TB, this.rotation.z = VB), this
        }
        setPivotPoint(BB) {
          let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          0 == this.jU().getRenderId() && this.computeWorldMatrix(!0);
          const dB = this.getWorldMatrix();
          if (1 == TB) {
            const TB = kB.j.Matrix[0];
            dB.invertToRef(TB), BB = kB.p.TransformCoordinates(BB, TB)
          }
          return this.setPivotMatrix(kB.b.Translation(-BB.x, -BB.y, -BB.z), !0)
        }
        getPivotPoint() {
          const BB = kB.p.Zero();
          return this.getPivotPointToRef(BB), BB
        }
        getPivotPointToRef(BB) {
          return BB.x = -this._pivotMatrix.m[12], BB.y = -this._pivotMatrix.m[13], BB.z = -this._pivotMatrix.m[14], this
        }
        getAbsolutePivotPoint() {
          const BB = kB.p.Zero();
          return this.getAbsolutePivotPointToRef(BB), BB
        }
        getAbsolutePivotPointToRef(BB) {
          return this.getPivotPointToRef(BB), kB.p.TransformCoordinatesToRef(BB, this.getWorldMatrix(), BB), this
        }
        VdB(BB) {
          if (this._isDirty) return this;
          if (this._children)
            for (const TB of this._children) TB.VdB(BB);
          return super.VdB(BB)
        }
        setParent(TB) {
          let dB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            VB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          if (!TB && !this.parent) return this;
          const yB = kB.j.Quaternion[0],
            pB = kB.j.RD[0],
            lB = kB.j.RD[1],
            JB = kB.j.Matrix[1];
          kB.b.IdentityToRef(JB);
          const YB = kB.j.Matrix[0];
          this.computeWorldMatrix(!0);
          let gB = this.rotationQuaternion;
          return gB || (gB = BB._TmpRotation, kB.f.RotationYawPitchRollToRef(this._rotation.y, this._rotation.x, this._rotation.z, gB)), kB.b.ComposeToRef(this.al, gB, this.position, YB), this.parent && YB.multiplyToRef(this.parent.computeWorldMatrix(!0), YB), TB && (TB.computeWorldMatrix(!0).invertToRef(JB), YB.multiplyToRef(JB, YB)), YB.decompose(lB, yB, pB, dB ? this : void 0), this.rotationQuaternion ? this.rotationQuaternion.bdB(yB) : yB.toEulerAnglesToRef(this.rotation), this.al.bdB(lB), this.position.bdB(pB), this.parent = TB, VB && this.setPivotMatrix(kB.b.Identity()), this
        }
        addChild(BB) {
          let TB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return BB.setParent(this, TB), this
        }
        removeChild(BB) {
          let TB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return BB.parent !== this || BB.setParent(null, TB), this
        }
        get nonUniformScaling() {
          return this._nonUniformScaling
        }
        _updateNonUniformScalingState(BB) {
          return this._nonUniformScaling !== BB && (this._nonUniformScaling = BB, !0)
        }
        attachToBone(BB, TB) {
          return this._currentParentWhenAttachingToBone = this.parent, this._transformToBoneReferal = TB, this.parent = BB, BB.getSkeleton().prepare(!0), BB.getFinalMatrix().determinant() < 0 && (this.scalingDeterminant *= -1), this
        }
        detachFromBone() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          return this.parent ? (this.parent.getWorldMatrix().determinant() < 0 && (this.scalingDeterminant *= -1), this._transformToBoneReferal = null, this.parent = BB ? this._currentParentWhenAttachingToBone : null, this) : (BB && (this.parent = this._currentParentWhenAttachingToBone), this)
        }
        rotate(TB, dB, VB) {
          let yB;
          if (TB.normalize(), this.rotationQuaternion || (this.rotationQuaternion = this.rotation.toQuaternion(), this.rotation.A4(0)), VB && 0 !== VB) {
            if (this.parent) {
              const BB = this.parent.getWorldMatrix(),
                VB = kB.j.Matrix[0];
              BB.invertToRef(VB), TB = kB.p.TransformNormal(TB, VB), BB.determinant() < 0 && (dB *= -1)
            }
            yB = kB.f.RotationAxisToRef(TB, dB, BB._RotationAxisCache), yB.multiplyToRef(this.rotationQuaternion, this.rotationQuaternion)
          } else yB = kB.f.RotationAxisToRef(TB, dB, BB._RotationAxisCache), this.rotationQuaternion.multiplyToRef(yB, this.rotationQuaternion);
          return this
        }
        rotateAround(BB, TB, dB) {
          TB.normalize(), this.rotationQuaternion || (this.rotationQuaternion = kB.f.RotationYawPitchRoll(this.rotation.y, this.rotation.x, this.rotation.z), this.rotation.A4(0));
          const VB = kB.j.RD[0],
            yB = kB.j.RD[1],
            pB = kB.j.RD[2],
            lB = kB.j.Quaternion[0],
            JB = kB.j.Matrix[0],
            YB = kB.j.Matrix[1],
            gB = kB.j.Matrix[2],
            oB = kB.j.Matrix[3];
          return BB.subtractToRef(this.position, VB), kB.b.TranslationToRef(VB.x, VB.y, VB.z, JB), kB.b.TranslationToRef(-VB.x, -VB.y, -VB.z, YB), kB.b.RotationAxisToRef(TB, dB, gB), YB.multiplyToRef(gB, oB), oB.multiplyToRef(JB, oB), oB.decompose(yB, lB, pB), this.position.addInPlace(pB), lB.multiplyToRef(this.rotationQuaternion, this.rotationQuaternion), this
        }
        translate(BB, TB, dB) {
          const VB = BB.scale(TB);
          if (dB && 0 !== dB) this.setAbsolutePosition(this.getAbsolutePosition().add(VB));
          else {
            const BB = this.getPositionExpressedInLocalSpace().add(VB);
            this.setPositionWithLocalVector(BB)
          }
          return this
        }
        addRotation(BB, TB, dB) {
          let VB;
          this.rotationQuaternion ? VB = this.rotationQuaternion : (VB = kB.j.Quaternion[1], kB.f.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, this.rotation.z, VB));
          const yB = kB.j.Quaternion[0];
          return kB.f.RotationYawPitchRollToRef(TB, BB, dB, yB), VB.multiplyInPlace(yB), this.rotationQuaternion || VB.toEulerAnglesToRef(this.rotation), this
        }
        _getEffectiveParent() {
          return this.parent
        }
        isWorldMatrixCameraDependent() {
          return this._infiniteDistance && !this.parent || this._billboardMode !== BB.BILLBOARDMODE_NONE
        }
        computeWorldMatrix() {
          let TB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            dB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          if (this._isWorldMatrixFrozen && !this._isDirty) return this._worldMatrix;
          const VB = this.jU().getRenderId();
          if (!this._isDirty && !TB && (this._currentRenderId === VB || this.isSynchronized())) return this._currentRenderId = VB, this._worldMatrix;
          dB = dB || this.jU().activeCamera, this._updateCache();
          const yB = this._cache;
          yB.pivotMatrixUpdated = !1, yB.billboardMode = this.billboardMode, yB.infiniteDistance = this.infiniteDistance, yB.parent = this._parentNode, this._currentRenderId = VB, this._childUpdateId += 1, this._isDirty = !1, this._position._isDirty = !1, this._rotation._isDirty = !1, this._scaling._isDirty = !1;
          const pB = this._getEffectiveParent(),
            lB = BB._TmpScaling;
          let JB, YB = this._position;
          if (this._infiniteDistance && !this.parent && dB) {
            const TB = dB.getWorldMatrix().m;
            YB = BB._TmpTranslation, YB.YBB(this._position.x + TB[12], this._position.y + TB[13], this._position.z + TB[14])
          }
          if (lB.YBB(this._scaling.x * this.scalingDeterminant, this._scaling.y * this.scalingDeterminant, this._scaling.z * this.scalingDeterminant), this._rotationQuaternion) {
            if (this._rotationQuaternion._isDirty = !1, JB = this._rotationQuaternion, this.reIntegrateRotationIntoRotationQuaternion) {
              this.rotation.lengthSquared() && (this._rotationQuaternion.multiplyInPlace(kB.f.RotationYawPitchRoll(this._rotation.y, this._rotation.x, this._rotation.z)), this._rotation.YBB(0, 0, 0))
            }
          } else JB = BB._TmpRotation, kB.f.RotationYawPitchRollToRef(this._rotation.y, this._rotation.x, this._rotation.z, JB);
          if (this._usePivotMatrix) {
            const BB = kB.j.Matrix[1];
            kB.b.ScalingToRef(lB.x, lB.y, lB.z, BB);
            const TB = kB.j.Matrix[0];
            JB.toRotationMatrix(TB), this._pivotMatrix.multiplyToRef(BB, kB.j.Matrix[4]), kB.j.Matrix[4].multiplyToRef(TB, this._localMatrix), this._postMultiplyPivotMatrix && this._localMatrix.multiplyToRef(this._pivotMatrixInverse, this._localMatrix), this._localMatrix.addTranslationFromFloats(YB.x, YB.y, YB.z)
          } else kB.b.ComposeToRef(lB, JB, YB, this._localMatrix);
          if (pB && pB.getWorldMatrix) {
            if (TB && pB.computeWorldMatrix(TB), this.billboardMode) {
              if (this._transformToBoneReferal) {
                const BB = this.parent;
                BB.getSkeleton().prepare(), BB.getFinalMatrix().multiplyToRef(this._transformToBoneReferal.getWorldMatrix(), kB.j.Matrix[7])
              } else kB.j.Matrix[7].bdB(pB.getWorldMatrix());
              const TB = kB.j.RD[5],
                dB = kB.j.RD[6],
                VB = kB.j.Quaternion[0];
              kB.j.Matrix[7].decompose(dB, VB, TB), kB.b.ScalingToRef(dB.x, dB.y, dB.z, kB.j.Matrix[7]), kB.j.Matrix[7].setTranslation(TB), BB.BillboardUseParentOrientation && (this._position.applyRotationQuaternionToRef(VB, TB), this._localMatrix.setTranslation(TB)), this._localMatrix.multiplyToRef(kB.j.Matrix[7], this._worldMatrix)
            } else if (this._transformToBoneReferal) {
              const BB = this.parent;
              BB.getSkeleton().prepare(), this._localMatrix.multiplyToRef(BB.getFinalMatrix(), kB.j.Matrix[6]), kB.j.Matrix[6].multiplyToRef(this._transformToBoneReferal.getWorldMatrix(), this._worldMatrix)
            } else this._localMatrix.multiplyToRef(pB.getWorldMatrix(), this._worldMatrix);
            this._markSyncedWithParent()
          } else this._worldMatrix.bdB(this._localMatrix);
          if (dB && this.billboardMode)
            if (yB.useBillboardPosition) {
              const TB = kB.j.RD[0];
              this._worldMatrix.getTranslationToRef(TB);
              const VB = dB.globalPosition;
              this._worldMatrix.invertToRef(kB.j.Matrix[1]);
              const yB = kB.j.RD[1];
              kB.p.TransformCoordinatesToRef(VB, kB.j.Matrix[1], yB), yB.normalize();
              const pB = -Math.atan2(yB.z, yB.x) + Math.PI / 2,
                lB = Math.sqrt(yB.x * yB.x + yB.z * yB.z),
                JB = -Math.atan2(yB.y, lB);
              if (kB.f.RotationYawPitchRollToRef(pB, JB, 0, kB.j.Quaternion[0]), (this.billboardMode & BB.BILLBOARDMODE_ALL) !== BB.BILLBOARDMODE_ALL) {
                const TB = kB.j.RD[1];
                kB.j.Quaternion[0].toEulerAnglesToRef(TB), (this.billboardMode & BB.BILLBOARDMODE_X) !== BB.BILLBOARDMODE_X && (TB.x = 0), (this.billboardMode & BB.BILLBOARDMODE_Y) !== BB.BILLBOARDMODE_Y && (TB.y = 0), (this.billboardMode & BB.BILLBOARDMODE_Z) !== BB.BILLBOARDMODE_Z && (TB.z = 0), kB.b.RotationYawPitchRollToRef(TB.y, TB.x, TB.z, kB.j.Matrix[0])
              } else kB.b.FromQuaternionToRef(kB.j.Quaternion[0], kB.j.Matrix[0]);
              this._worldMatrix.setTranslationFromFloats(0, 0, 0), this._worldMatrix.multiplyToRef(kB.j.Matrix[0], this._worldMatrix), this._worldMatrix.setTranslation(kB.j.RD[0])
            } else {
              const TB = kB.j.RD[0];
              this._worldMatrix.getTranslationToRef(TB), kB.j.Matrix[1].bdB(dB.getViewMatrix());
              const VB = this.jU().useRightHandedSystem;
              if (VB && kB.j.Matrix[1].multiplyToRef(BB._TmpRHRestore, kB.j.Matrix[1]), kB.j.Matrix[1].setTranslationFromFloats(0, 0, 0), kB.j.Matrix[1].invertToRef(kB.j.Matrix[0]), (this.billboardMode & BB.BILLBOARDMODE_ALL) !== BB.BILLBOARDMODE_ALL) {
                kB.j.Matrix[0].decompose(void 0, kB.j.Quaternion[0], void 0);
                const TB = kB.j.RD[1];
                kB.j.Quaternion[0].toEulerAnglesToRef(TB), (this.billboardMode & BB.BILLBOARDMODE_X) !== BB.BILLBOARDMODE_X && (TB.x = 0), (this.billboardMode & BB.BILLBOARDMODE_Y) !== BB.BILLBOARDMODE_Y && (TB.y = 0), (this.billboardMode & BB.BILLBOARDMODE_Z) !== BB.BILLBOARDMODE_Z && (TB.z = 0), VB && (TB.y += Math.PI), kB.b.RotationYawPitchRollToRef(TB.y, TB.x, TB.z, kB.j.Matrix[0])
              }
              this._worldMatrix.setTranslationFromFloats(0, 0, 0), this._worldMatrix.multiplyToRef(kB.j.Matrix[0], this._worldMatrix), this._worldMatrix.setTranslation(kB.j.RD[0])
            } return this.ignoreNonUniformScaling ? this._updateNonUniformScalingState(!1) : this._scaling.isNonUniformWithinEpsilon(1e-6) ? this._updateNonUniformScalingState(!0) : pB && pB._nonUniformScaling ? this._updateNonUniformScalingState(pB._nonUniformScaling) : this._updateNonUniformScalingState(!1), this._afterComputeWorldMatrix(), this._absolutePosition.YBB(this._worldMatrix.m[12], this._worldMatrix.m[13], this._worldMatrix.m[14]), this._isAbsoluteSynced = !1, this.onAfterWorldMatrixUpdateObservable.notifyObservers(this), this._poseMatrix || (this._poseMatrix = kB.b.Invert(this._worldMatrix)), this._worldMatrixDeterminantIsDirty = !0, this._worldMatrix
        }
        resetLocalMatrix() {
          let BB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          if (this.computeWorldMatrix(), BB) {
            const BB = this.getChildren();
            for (let TB = 0; TB < BB.length; ++TB) {
              const dB = BB[TB];
              if (dB) {
                dB.computeWorldMatrix();
                const BB = kB.j.Matrix[0];
                dB._localMatrix.multiplyToRef(this._localMatrix, BB);
                const TB = kB.j.Quaternion[0];
                BB.decompose(dB.al, TB, dB.position), dB.rotationQuaternion ? dB.rotationQuaternion.bdB(TB) : TB.toEulerAnglesToRef(dB.rotation)
              }
            }
          }
          this.al.YBB(1, 1, 1), this.position.YBB(0, 0, 0), this.rotation.YBB(0, 0, 0), this.rotationQuaternion && (this.rotationQuaternion = kB.f.Identity()), this._worldMatrix = kB.b.Identity()
        }
        _afterComputeWorldMatrix() {}
        registerAfterWorldMatrixUpdate(BB) {
          return this.onAfterWorldMatrixUpdateObservable.add(BB), this
        }
        unregisterAfterWorldMatrixUpdate(BB) {
          return this.onAfterWorldMatrixUpdateObservable.removeCallback(BB), this
        }
        getPositionInCameraSpace() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return BB || (BB = this.jU().activeCamera), kB.p.TransformCoordinates(this.getAbsolutePosition(), BB.getViewMatrix())
        }
        getDistanceToCamera() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return BB || (BB = this.jU().activeCamera), this.getAbsolutePosition().subtract(BB.globalPosition).length()
        }
        clone(TB, dB, VB) {
          const yB = gB.c.Clone((() => new BB(TB, this.jU())), this);
          if (yB.name = TB, yB.id = TB, dB && (yB.parent = dB), !VB) {
            const BB = this.getDescendants(!0);
            for (let dB = 0; dB < BB.length; dB++) {
              const VB = BB[dB];
              VB.clone && VB.clone(TB + "." + VB.name, yB)
            }
          }
          return yB
        }
        serialize(BB) {
          const TB = gB.c.Serialize(this, BB);
          return TB.type = this.getClassName(), TB.uniqueId = this.uniqueId, this.parent && this.parent._serializeAsParent(TB), TB.localMatrix = this.getPivotMatrix().FVB(), TB.isEnabled = this.isEnabled(), this._isWorldMatrixFrozen && (TB.uF = !0), gB.c.AppendSerializedAnimations(this, TB), TB.ek = this.serializeAnimationRanges(), TB
        }
        getChildTransformNodes(TB, dB) {
          const VB = [];
          return this._getDescendants(VB, TB, (TB => (!dB || dB(TB)) && TB instanceof BB)), VB
        }
        dispose(BB) {
          let TB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this.jU().stopAnimation(this), this.jU().removeTransformNode(this), this._parentContainer) {
            const BB = this._parentContainer.transformNodes.indexOf(this);
            BB > -1 && this._parentContainer.transformNodes.splice(BB, 1), this._parentContainer = null
          }
          if (this.onAfterWorldMatrixUpdateObservable.clear(), BB) {
            const BB = this.getChildTransformNodes(!0);
            for (const TB of BB) TB.parent = null, TB.computeWorldMatrix(!0)
          }
          super.dispose(BB, TB)
        }
        normalizeToUnitCube() {
          let BB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            TB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            dB = arguments.length > 2 ? arguments[2] : void 0,
            VB = null,
            yB = null;
          TB && (this.rotationQuaternion ? (yB = this.rotationQuaternion.clone(), this.rotationQuaternion.YBB(0, 0, 0, 1)) : this.rotation && (VB = this.rotation.clone(), this.rotation.YBB(0, 0, 0)));
          const pB = this.getHierarchyBoundingVectors(BB, dB),
            lB = pB.max.subtract(pB.min),
            JB = Math.max(lB.x, lB.y, lB.z);
          if (0 === JB) return this;
          const YB = 1 / JB;
          return this.al.scaleInPlace(YB), TB && (this.rotationQuaternion && yB ? this.rotationQuaternion.bdB(yB) : this.rotation && VB && this.rotation.bdB(VB)), this
        }
        _syncAbsoluteScalingAndRotation() {
          this._isAbsoluteSynced || (this._worldMatrix.decompose(this._absoluteScaling, this._absoluteRotationQuaternion), this._isAbsoluteSynced = !0)
        }
      }, (() => {
        const gB = "function" === typeof Symbol && Symbol.metadata ? Object.create(HB[Symbol.metadata] ?? null) : void 0;
        TB = [(0, YB.T)("position")], dB = [(0, YB.T)("rotation")], VB = [(0, YB.J)("rotationQuaternion")], yB = [(0, YB.T)("al")], pB = [(0, YB.W)("billboardMode")], lB = [(0, YB.W)()], OB = [(0, YB.W)("infiniteDistance")], DB = [(0, YB.W)()], uB = [(0, YB.W)()], (0, JB.g)(null, null, TB, {
          kind: "field",
          name: "_position",
          static: !1,
          private: !1,
          access: {
            has: BB => "_position" in BB,
            get: BB => BB._position,
            set: (BB, TB) => {
              BB._position = TB
            }
          },
          metadata: gB
        }, EB, vB), (0, JB.g)(null, null, dB, {
          kind: "field",
          name: "_rotation",
          static: !1,
          private: !1,
          access: {
            has: BB => "_rotation" in BB,
            get: BB => BB._rotation,
            set: (BB, TB) => {
              BB._rotation = TB
            }
          },
          metadata: gB
        }, mB, iB), (0, JB.g)(null, null, VB, {
          kind: "field",
          name: "_rotationQuaternion",
          static: !1,
          private: !1,
          access: {
            has: BB => "_rotationQuaternion" in BB,
            get: BB => BB._rotationQuaternion,
            set: (BB, TB) => {
              BB._rotationQuaternion = TB
            }
          },
          metadata: gB
        }, NB, tB), (0, JB.g)(null, null, yB, {
          kind: "field",
          name: "_scaling",
          static: !1,
          private: !1,
          access: {
            has: BB => "_scaling" in BB,
            get: BB => BB._scaling,
            set: (BB, TB) => {
              BB._scaling = TB
            }
          },
          metadata: gB
        }, fB, sB), (0, JB.g)(null, null, pB, {
          kind: "field",
          name: "_billboardMode",
          static: !1,
          private: !1,
          access: {
            has: BB => "_billboardMode" in BB,
            get: BB => BB._billboardMode,
            set: (BB, TB) => {
              BB._billboardMode = TB
            }
          },
          metadata: gB
        }, MB, zB), (0, JB.g)(null, null, lB, {
          kind: "field",
          name: "scalingDeterminant",
          static: !1,
          private: !1,
          access: {
            has: BB => "scalingDeterminant" in BB,
            get: BB => BB.scalingDeterminant,
            set: (BB, TB) => {
              BB.scalingDeterminant = TB
            }
          },
          metadata: gB
        }, wB, UB), (0, JB.g)(null, null, OB, {
          kind: "field",
          name: "_infiniteDistance",
          static: !1,
          private: !1,
          access: {
            has: BB => "_infiniteDistance" in BB,
            get: BB => BB._infiniteDistance,
            set: (BB, TB) => {
              BB._infiniteDistance = TB
            }
          },
          metadata: gB
        }, FB, KB), (0, JB.g)(null, null, DB, {
          kind: "field",
          name: "ignoreNonUniformScaling",
          static: !1,
          private: !1,
          access: {
            has: BB => "ignoreNonUniformScaling" in BB,
            get: BB => BB.ignoreNonUniformScaling,
            set: (BB, TB) => {
              BB.ignoreNonUniformScaling = TB
            }
          },
          metadata: gB
        }, rB, IB), (0, JB.g)(null, null, uB, {
          kind: "field",
          name: "reIntegrateRotationIntoRotationQuaternion",
          static: !1,
          private: !1,
          access: {
            has: BB => "reIntegrateRotationIntoRotationQuaternion" in BB,
            get: BB => BB.reIntegrateRotationIntoRotationQuaternion,
            set: (BB, TB) => {
              BB.reIntegrateRotationIntoRotationQuaternion = TB
            }
          },
          metadata: gB
        }, cB, SB), gB && Object.defineProperty(BB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: gB
        })
      })(), BB.BILLBOARDMODE_NONE = 0, BB.BILLBOARDMODE_X = 1, BB.BILLBOARDMODE_Y = 2, BB.BILLBOARDMODE_Z = 4, BB.BILLBOARDMODE_ALL = 7, BB.BILLBOARDMODE_USE_POSITION = 128, BB.BillboardUseParentOrientation = !1, BB._TmpRotation = kB.f.Zero(), BB._TmpScaling = kB.p.Zero(), BB._TmpTranslation = kB.p.Zero(), BB._TmpRHRestore = kB.b.Scaling(1, 1, -1), BB._LookAtVectorCache = new kB.p(0, 0, 0), BB._RotationAxisCache = new kB.f, BB
    })();

    function HB(BB, TB, dB) {
      const VB = gB.c.Parse((() => new uB(BB.name, TB)), BB, TB, dB);
      if (BB.localMatrix ? VB.setPreTransformMatrix(kB.b.FromArray(BB.localMatrix)) : BB.pivotMatrix && VB.setPivotMatrix(kB.b.FromArray(BB.pivotMatrix)), VB.hN(BB.isEnabled), VB._waitingParsedUniqueId = BB.uniqueId, void 0 !== BB.parentId && (VB._waitingParentId = BB.parentId), void 0 !== BB.parentInstanceIndex && (VB._waitingParentInstanceIndex = BB.parentInstanceIndex), BB.uF && (VB._waitingFreezeWorldMatrix = BB.uF), BB.animations) {
        for (let TB = 0; TB < BB.animations.length; TB++) {
          const dB = BB.animations[TB],
            yB = (0, OB.e)("BABYLON.Animation");
          yB && VB.animations.push(yB.Parse(dB))
        }
        LB.e.ParseAnimationRanges(VB, BB, TB)
      }
      return BB.autoAnimate && TB.beginAnimation(VB, BB.autoAnimateFrom, BB.autoAnimateTo, BB.autoAnimateLoop, BB.autoAnimateSpeed || 1), VB
    }
    let EB = !1;

    function vB() {
      EB || (EB = !0, uB.Parse = HB)
    }(VB = uB.prototype).RZ ?? (VB.RZ = (0, DB.h)("TransformNode", "RZ")), (yB = uB.prototype).applyImpulse ?? (yB.applyImpulse = (0, DB.h)("TransformNode", "applyImpulse")), (pB = uB.prototype).applyAngularImpulse ?? (pB.applyAngularImpulse = (0, DB.h)("TransformNode", "applyAngularImpulse")), (lB = uB.prototype).applyTorque ?? (lB.applyTorque = (0, DB.h)("TransformNode", "applyTorque")), Object.getOwnPropertyDescriptor(uB.prototype, "physicsBody") || Object.defineProperty(uB.prototype, "physicsBody", (0, DB.d)("TransformNode", "physicsBody"))
  },
  39149: (BB, TB, dB) => {
    function VB(BB, TB, dB) {
      try {
        const VB = BB.next();
        VB.done ? TB(VB) : VB.value ? VB.value.then((() => {
          VB.value = void 0, TB(VB)
        }), dB) : TB(VB)
      } catch (VB) {
        dB(VB)
      }
    }

    function yB() {
      let BB, TB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 25;
      return (dB, yB, pB) => {
        const lB = performance.now();
        void 0 === BB || lB - BB > TB ? (BB = lB, setTimeout((() => {
          VB(dB, yB, pB)
        }), 0)) : VB(dB, yB, pB)
      }
    }

    function pB(BB, TB, dB, VB, yB) {
      const pB = () => {
        let lB;
        const JB = BB => {
          BB.done ? dB(BB.value) : void 0 === lB ? lB = !0 : pB()
        };
        do {
          lB = void 0, yB && yB.aborted ? VB(new Error("Aborted")) : TB(BB, JB, VB), void 0 === lB && (lB = !1)
        } while (lB)
      };
      pB()
    }

    function lB(BB, TB) {
      let dB;
      return pB(BB, VB, (BB => dB = BB), (BB => {
        throw BB
      }), TB), dB
    }
    async function JB(BB, TB, dB) {
      return await new Promise(((VB, yB) => {
        pB(BB, TB, VB, yB, dB)
      }))
    }

    function YB(BB, TB) {
      return function() {
        return lB(BB(...arguments), TB)
      }
    }
    dB.d(TB, {
      b: () => yB,
      e: () => YB,
      f: () => JB,
      j: () => lB
    })
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);